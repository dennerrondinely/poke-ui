import Ts from "rollup-plugin-typescript2";
import del from 'rollup-plugin-delete'

export default {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    del({ targets: 'lib/*' }),
    Ts({
    clean: true,
    tsconfigOverride:{
    
    exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"],
  }})],
  preserveModules: true,
  external: ["react"],
};