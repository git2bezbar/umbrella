import path from 'node:path';
import fs from 'node:fs';

import swc from '@rollup/plugin-swc';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const input = './src/index.ts';
const output = './dist/lib';
const formats = ['cjs', 'esm'];

const defaultPlugins = [
  alias({
    entries: [
      { find: '@', replacement: path.resolve('./src') },
    ],
  }),
  resolve({
    browser: true,
    preferBuiltins: true,
    extensions: ['.js', '.ts', '.tsx', '.json', '.node'],
  }),
  commonjs(),
  terser(),
];

const defaultExternals = [...Object.keys(pkg.dependencies)];
const defaultGlobals = {};

export default [
  ...formats.map(f => ({
    input,
    plugins: [
      swc({
        swc: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
          },
        },
      }),
      ...defaultPlugins,
    ],
    external: defaultExternals,
    output: {
      ...(f === 'esm' ? {
        dir: `${output}/esm`,
        chunkFileNames: '[name].js',
      } : {
        file: `${output}.${f}.js`,
      }),
      format: f,
      name: 'umbrella',
      sourcemap: true,
      globals: defaultGlobals,
      ...f === 'esm' ? {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return 'vendor';
          } else {
            return path.parse(id).name;
          }
        },
      } : {
        exports: 'named',
      },
    },
  }))
];
