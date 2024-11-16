import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import copy from "rollup-plugin-copy";
import svg from "rollup-plugin-svg-import";
import packageJson from "./packageJson.cjs";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourceMap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourceMap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      copy({
        targets: [{ src: "src/assets/*", dest: "dist/assets" }],
      }),
    ],
    external: ["react", "react-dom", /\.svg$/],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
