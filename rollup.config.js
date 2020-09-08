import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/index.ts',
  external: ['vue', '@vue/composition-api'],
  output: {
    dir: 'dist/',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    vue({
      css: false,
    }),
    esbuild({
      minify: process.env.NODE_ENV === 'production',
      target: 'es2018', // default, or 'es20XX', 'esnext',
      define: {
        __VERSION__: '"x.y.z"',
      },
      // Add extra loaders
      loaders: {
        '.json': 'json',
      },
    }),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: { declaration: true, outDir: './dist' },
      },
    }),
  ],
}

export default config
