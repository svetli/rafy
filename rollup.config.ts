import typescript from '@rollup/plugin-typescript';
import sourceMaps from 'rollup-plugin-sourcemaps';

import pkg from './package.json';

export default {
  external: [],
  input: 'dist/es/index.js',
  output: [
    {
      file: pkg.main,
      name: 'rafy',
      format: 'umd',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [typescript(), sourceMaps()],
};
