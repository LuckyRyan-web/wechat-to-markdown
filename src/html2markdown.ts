/**
 * 微信不同代码风格
 * 1. <code><span>code</span></code> 
 * 2. <code><span><span>123</span><br></span></code>
 * turndown 不解析 code 下的 br 标签，需要使用正则替换 br 标签为 \n 才可以继续解析
 */
import cheerio from 'cheerio'

export default function html2markdown(htmlStr: string) {

    let code = htmlStr.replace(/&nbsp;/gi, ' ')

    code = code.replace(/<br>/gi, '\n')

    const $ = cheerio.load(code)

    return $.text()
}