import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
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
];

const subfolderPlugins = (folderName) => {
  return [
    ...commonPlugins,
    generatePackageJson({
      baseContents: {
        name: `${packageJson.name}/${folderName}`,
        private: true,
        main: `../index.js`,
        module: `./index.mjs`,
        types: `./index.d.ts`,
        peerDependencies: packageJson.peerDependencies,
      },
      outputFolder: `dist/${folderName}/`,
    }),
  ];
};

const folderBuilds = ["flags"].map((folder) => {
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
    external: ["react", "react-dom", /\.svg$/],
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
    plugins: [
      ...commonPlugins,
      copy({
        targets: [{ src: "src/assets/*", dest: "dist/assets" }],
      }),
    ],
    external: ["react", "react-dom", /\.svg$/],
  },
  ...folderBuilds,
  {
    input: "src/flags/index.ts",
    output: [{ file: "dist/flags/index.d.ts" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
