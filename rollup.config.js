import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'

const pkg = require('./package.json')

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'esm',
    sourcemap: true
  },
  plugins: [resolve(), commonjs(), typescript(), sourceMaps(), terser()]
}
