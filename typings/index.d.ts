declare module 'markdown-utils' {
    /**
     *
     * @param str
     */
    export function blockquote(str: string): string

    /**
     *
     * @param str
     */
    export function code(str: string): string

    /**
     *
     * @param str
     */
    export function del(str: string): string

    /**
     *
     * @param str
     */
    export function em(str: string): string

    /**
     *
     * @param str
     * @param level
     */
    export function h(str: string, level: number): string

    /**
     *
     * @param str
     */
    export function h1(str: string): string

    /**
     *
     * @param str
     */
    export function h2(str: string): string

    /**
     *
     * @param str
     */
    export function h3(str: string): string

    /**
     *
     * @param str
     */
    export function h4(str: string): string

    /**
     *
     * @param str
     */
    export function h5(str: string): string

    /**
     *
     * @param str
     */
    export function h6(str: string): string

    /**
     *
     * @param str
     * @param level
     */
    export function heading(str: string, level: number): string

    /**
     *
     * @param str
     */
    export function hr(str: string): string

    /**
     *
     * @param anchor
     * @param href
     * @param title
     */
    export function link(anchor: string, href: string, title: string): string

    /**
     *
     * @param anchor
     * @param href
     * @param title
     */
    export function anchor(anchor: string, href: string, title: string): string

    /**
     *
     * @param id
     * @param url
     * @param title
     */
    export function reference(id: string, url: string, title: string): string

    /**
     *
     * @param anchor String
     * @param href String
     * @param title String
     *
     */
    export function image(anchor: string, href: string, title: string): string

    /**
     *
     * @param alt
     * @param img_url
     * @param url
     */
    export function badge(alt: string, img_url: string, url: string): string

    /**
     *
     * @param options
     * @param nobullet
     * @param indent
     * @param chars
     * @param fn
     */
    export function li(options: string, nobullet: boolean, indent: string, chars: string | Array, fn: Function): string

    /**
     *
     * @param str
     * @param language
     */
    export function pre(str: string, language: string): string

    /**
     *
     * @param str
     * @param language
     */
    export function gfm(str: string, language: string): string

    /**
     *
     * @param str
     */
    export function strong(str: string): string

    /**
     *
     * @param str
     */
    export function todo(str: string): string
}
