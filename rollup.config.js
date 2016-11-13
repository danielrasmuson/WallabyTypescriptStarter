import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: './src/bootstrap.ts',
  plugins: [
    typescript(),
		nodeResolve({ jsnext: true, main: true }),
    commonjs({include: 'node_modules/**'}),
  ]
}
