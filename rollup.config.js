import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
// 引入外部包
import resolve from '@rollup/plugin-node-resolve'
// 解析 cjs 格式的包
import commonjs from '@rollup/plugin-commonjs'
// 压缩插件
import { terser } from 'rollup-plugin-terser'

import eslint from '@rollup/plugin-eslint'

import dts from 'rollup-plugin-dts'

export default [
    {
        input: 'src/index.ts',
        external: ['axios', 'cheerio', 'fs-extra', 'turndown', 'turndown-plugin-gfm'],
        plugins: [
            resolve(),
            eslint({
                throwOnError: true,
            }),
            commonjs(),
            typescript(),
            json(),
        ],
        output: [
            {
                file: 'dist/index.umd.js',
                format: 'umd',
                name: 'Index',
                plugins: [terser()],
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                plugins: [terser()],
            },
        ],
    },
    {
        input: 'src/index.ts',
        plugins: [typescript(), dts()],
        output: [
            {
                file: 'dist/index.d.ts',
                format: 'es',
            },
        ],
    },
]
