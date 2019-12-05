import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
// import lessModules from "rollup-plugin-less-modules";
// import less from "rollup-plugin-less";
import postcss from "rollup-plugin-postcss";

const path = require("path");

export default [
  // browser-friendly UMD build
  {
    input: "lib/index.js",
    output: {
      file: path.resolve(__dirname, "dist", "index.js"),
      format: "es"
    },
    plugins: [
      babel({
        exclude: "**/node_modules/**",
        runtimeHelpers: true
      }),
      commonjs(),
      resolve(),
      postcss({
        modules: true
      })
      // lessModules()
    ],
    external: ["react"]
  }
];
