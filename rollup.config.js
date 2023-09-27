import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //entry point
  input: "src/index.tsx",
  preserveModules: true,

  //output directory
  output: [
    {
      dir: "./dist/cjs/",
      format: "cjs",
      sourcemap: true,
      exports: "auto",
    },
    {
      dir: "./dist/esm/",
      format: "esm",
      sourcemap: true,
      exports: "auto",
    },
  ],

  //plugins
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
  ],
};

