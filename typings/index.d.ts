declare module 'turndown-plugin-gfm' {
    import { Plugin } from '@types/turndown'

    export const gfm: Plugin
    export const tables: Plugin
    export const strikethrough: Plugin
}

declare module 'html2markdown' {
    export default function html2md(string): string
}