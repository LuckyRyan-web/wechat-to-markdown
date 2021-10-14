import turnDownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'
import axios from 'axios'
import cheerio from 'cheerio'

export async function transformHtml2Markdown(url: string) {
    const turndownService = new turnDownService({ codeBlockStyle: 'fenced' })

    // Use the gfm plugin
    turndownService.use(gfm)

    // 自定义配置
    turndownService.addRule('pre2Code', {
        filter: ['pre'],
        replacement(content) {
            const len = content.length
            // 除了pre标签，里面是否还有 code 标签包裹，有的话去掉首尾的`（针对微信文章）
            const isCode = content[0] === '`' && content[len - 1] === '`'
            const result = isCode ? content.substr(1, len - 2) : content
            return '```\n' + result + '\n```\n'
        },
    })

    return axios
        .get(url)
        .then((res) => {
            const $ = cheerio.load(res['data'])

            const html = $('#js_content').html()

            if (html && html.length > 0) {
                const mds = turndownService.turndown(html)

                return mds
            }

            return '暂时无法解析这个地址'
        })
        .catch((err) => {
            return err
        })
}
