declare module 'turndown-plugin-gfm' {
    import { Plugin } from '@types/turndown'

    export const gfm: Plugin
    export const tables: Plugin
    export const strikethrough: Plugin
}
