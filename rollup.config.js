import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import license from 'rollup-plugin-license';
import { minify } from 'uglify-es';

import pkg from './package.json';

const name = pkg.name;

const outputModuleName = 'YourJsLib';

const banner = `/*!
* ${name} v${pkg.version}
*
* Copyright 2018-${new Date().getFullYear()}, ${pkg.authors[0]}
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license
*
*/`;

const isDev = process.argv.splice(2).indexOf('--pub') < 0;
const plugins = isDev ?
    [
        babel({
            exclude: 'node_modules/**',
        })
    ] : [
        babel({
            exclude: 'node_modules/**',
        }),
        uglify({}, minify),
        license({ banner })
    ];

const output = isDev ? { file: `build/${name}.js` } : { file: `build/${name}.min.js` };

export default {
    input: 'src/index.js',
    output: {
        ...output,
        format: 'umd',
        name: outputModuleName,
        sourcemap: true,
    },
    plugins: plugins
};