import turnDownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'
import fs from 'fs-extra'
import axios from 'axios'
import cheerio from 'cheerio'

interface File {
    /**
     * 是否需要生成预览 md 文件
     */
    getFile: boolean
    /**
     * 预览 md 文件的命名，默认为 preView.md
     */
    fileName?: string
}

export async function transformHtml2Markdown(url: string, file: File = { getFile: false, fileName: 'preView.md' }) {
    let md_code = ''

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

    await axios
        .get(url)
        .then((res) => {
            const $ = cheerio.load(res['data'])

            const html = $('#js_content').html()

            if (html && html.length > 0) {
                const mds = turndownService.turndown(html)

                md_code = mds
                if (file.getFile) {
                    fs.outputFileSync(file?.fileName || 'preView.md', mds)
                }
            }
        })
        .catch((err) => {
            console.log(err)
        })

    return md_code
}

// setTimeout(async () => {
//     const res = await transformHtml2Markdown('https://mp.weixin.qq.com/s/lVd-kXDUH7kSwkYQEvQO4Q')
//     console.log(res)
// }, 0)
