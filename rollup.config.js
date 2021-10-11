import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
// 引入外部包
import resolve from '@rollup/plugin-node-resolve'
// 解析 cjs 格式的包
import commonjs from '@rollup/plugin-commonjs'
// 压缩插件
import { terser } from 'rollup-plugin-terser'

import eslint from '@rollup/plugin-eslint'

export default [
    {
        input: 'src/index.ts',
        external: ['react'],
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
                banner: '/** Hello this is my utils */',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                // plugins: [terser()],
            },
        ],
    },
]
