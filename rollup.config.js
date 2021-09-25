import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import sourcemap from 'rollup-plugin-sourcemaps'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'module'
  },
  plugins: [resolve(), commonjs(), typescript(), sourcemap()]
}
