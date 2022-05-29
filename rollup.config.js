import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
// import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'
import scss from 'rollup-plugin-scss'
import vue from 'rollup-plugin-vue'


const devMode = (process.env.NODE_ENV === 'development')
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

export default [
  {
    input: './src/vue/index.js',
    watch: {
      include: './src/**',
      // clearScreen: false
    },
    output: {
      format: 'esm',
      file: './dist/vue-app.js',
    },
    plugins: [
      css(),
      vue({ css: false }),
      // For node module imports
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: './src/main.js',
    watch: {
      include: './src/**',
      // clearScreen: false
    },
    plugins: [
      scss({ output: './bundle/bundle.css'}),
    ],
    output: {
      file: './bundle/bundle.js',
      format: 'es',
      inlineDynamicImports: true
      // sourcemap: devMode ? 'inline' : false
      // plugins: [
      //   // Minify js with the env flag added: npx rollup --config --environment NODE_ENV:development
      //   // terser({
      //   //   ecma: 2020,
      //   //   mangle: { toplevel: true },
      //   //   compress: {
      //   //     module: true,
      //   //     toplevel: true,
      //   //     unsafe_arrows: true,
      //   //     drop_console: !devMode,
      //   //     drop_debugger: !devMode,
      //   //   },
      //   //   output: { quote_style: 1 }
      //   // })
      // ]
    },
  },
  {
    input: './src/main.js',
    watch: {
      include: './src/**',
      // clearScreen: false
    },
    output: {
      file: './bundle/bundle-es5.js',
      format: 'cjs',
      inlineDynamicImports: true
    },
    plugins: [
      scss({ output: './bundle/bundle.css'}),
      // For node module imports
      // nodeResolve(),
      // commonjs(),
      getBabelOutputPlugin({
        presets: ['@babel/preset-env']
      })
    ],
  }
  // ,{
  //   input: './src/main.js',
  //   output: {
  //     file: './bundle/bundle-iife.js',
  //     format: 'iife'
  //   }
  // }
]