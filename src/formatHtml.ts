import cheerio from 'cheerio'

/**
 * 微信不同代码风格
 * 1. <code><span>code</span></code>
 * 2. <code><span><span>123</span><br></span></code>
 * turndown 不解析 code 下的 br 标签，需要使用正则替换 br 标签为 \n 才可以继续解析
 * @param htmlStr
 * @returns
 */

export function formatCode(htmlStr: string) {
    let code = htmlStr

    code = code.replace(/<br>/gi, '\n')

    code = code.replace(/&nbsp;/gi, ' ')

    code = code.replace(/&lt;/gi, '<')

    code = code.replace(/&gt;/gi, '>')

    code = code.replace(/&amp;/gi, '&')

    code = code.replace(/&quot;/gi, '"')

    code = code.replace(/&apos;/gi, '‘')

    code = code.replace(/&times;/gi, '*')

    code = code.replace(/&divide;/gi, '%')

    const $ = cheerio.load(code)

    return $.text()
}

/**
 * 解决如下格式
 * <figcaption><img><figcaption></figcaption></figcaption>
 * @param figureHTML
 * @returns
 */
export function figure2markdown(figureHTML: string) {
    const imgRegex = /<img.*?data-src=['"](.*?)['"]/

    const descRegex = /\<figcaption .*?>(.+)<\/figcaption>/

    const imgArr = figureHTML.match(imgRegex)

    const descArr = figureHTML.match(descRegex)

    let imgUrl = ''

    let desc = ''

    if (Array.isArray(imgArr)) {
        imgUrl = imgArr[1]
    }

    if (Array.isArray(descArr)) {
        desc = descArr[1]
    }

    // img 可能没有图片说明
    if (imgUrl) {
        return `\n\n ![${desc}](${imgUrl}) \n\n`
    }

    return
}
