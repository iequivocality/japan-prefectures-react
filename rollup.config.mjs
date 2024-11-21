import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";
import svg from "rollup-plugin-svg";
import packageJson from "./loadPackageJson.cjs";
import generatePackageJson from "rollup-plugin-generate-package-json";

const commonPlugins = [
  peerDepsExternal(),
  resolve(),
  replace({
    __IS_DEV__: process.env.NODE_ENV === "development",
    preventAssignment: true,
  }),
  commonjs(),
  typescript({ tsconfig: "./tsconfig.json", useTsconfigDeclarationDir: true }),
  terser(),
  svg({
    base64: true,
  }),
];

const subfolderPlugins = (folderName) => {
  return [
    ...commonPlugins,
    // generatePackageJson({
    //   baseContents: {
    //     name: `${packageJson.name}/${folderName}`,
    //     private: true,
    //     main: `../index.js`,
    //     module: `./index.mjs`,
    //     types: `./index.d.ts`,
    //     peerDependencies: packageJson.peerDependencies,
    //   },
    //   outputFolder: `dist/${folderName}/`,
    // }),
  ];
};

const folders = ["flags", "maps"];

const folderBuilds = folders.map((folder) => {
  return {
    input: `src/${folder}/index.ts`,
    output: [
      {
        file: `dist/${folder}/index.mjs`,
        exports: "named",
        format: "esm",
        banner: "'use client';",
      },
      {
        file: `dist/${folder}/index.js`,
        exports: "named",
        format: "cjs",
        banner: "'use client';",
      },
    ],
    plugins: subfolderPlugins(folder),
    external: ["react", "react-dom"],
  };
});

const typeDefBuilds = folders.map((folder) => {
  return {
    input: `src/${folder}/index.ts`,
    output: [{ file: `dist/${folder}/index.d.ts` }],
    plugins: [dts()],
    external: [/\.css$/],
  };
});

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: commonPlugins,
    external: ["react", "react-dom"],
  },
  ...folderBuilds,
  ...typeDefBuilds,
];
