import turnDownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'
import axios from 'axios'
import cheerio from 'cheerio'
import html2markdown from 'html2markdown'

export async function transformHtml2Markdown(url: string) {
    const turndownService = new turnDownService({
        codeBlockStyle: 'fenced',
        hr: '',
    })

    // Use the gfm plugin
    turndownService.use(gfm)

    // 自定义配置
    turndownService.addRule('pre2Code', {
        filter: ['pre'],
        replacement(content, node: any) {
            const len = content.length
            // 微信文章获取到的 content， 会出现首尾都有 '`' 
            const isCode = content[0] === '`' && content[len - 1] === '`'

            let pre_Markdown = ''

            /**
             * 微信不同代码风格
             * 1. <code><span>code</span></code> 
             * 2. <code><span><span>123</span><br></span></code>
             * turndown 不解析 code 下的 br 标签，对于 code 标签使用 html2markdown 解析 node 节点下的 html 代码会更好
             */
            if (isCode) {
                pre_Markdown = html2markdown(node.innerHTML).replace(/&nbsp;/gi, ' ')
            }

            const res = isCode ? pre_Markdown : content


            return '```\n' + res + '\n```\n'
        }
    }).addRule('getImage', {
        filter: ['img'],
        replacement(content, node: any) {
            const src = node.getAttribute('data-src') || '';

            // const alt = node.alt || node.title || src;
            return src ? `\n\n ![](${src}) \n\n` : '';
        },
    }).addRule('lineBreaks', {
        filter: 'br',
        replacement: () => '\n',
    })
    // .addRule('renderCodeBr', {
    //     filter(node) {
    //         return Boolean(
    //             node.nodeName.toLocaleLowerCase() === 'pre' &&
    //             node.getElementsByTagName('code') &&
    //             node.getElementsByTagName('code').length
    //         )
    //     },
    //     replacement(content, node: any) {
    //         // console.log(node.innerHTML)
    //         return content
    //     }
    // })

    return axios
        .get(url)
        .then((res) => {
            const $ = cheerio.load(res['data'])

            // 针对微信文章的主题，code span 下的 <br> 标签不会进行换行渲染

            let title = $('#activity-name').text()

            title = title.trim() || ''

            const author = $('.original_primary_nickname').text()

            const html = $('#js_content').html()

            if (html && html.length > 0) {
                let res = turndownService.turndown(html)

                res = `## ${title} \n \n` + `## 作者 ${author} \n \n` + res

                return {
                    title,
                    author,
                    content: res
                }
            }

            return 'resolved fail!'
        })
        .catch((err) => {
            return err
        })
}
