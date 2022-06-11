import axios from 'axios'
import cheerio from 'cheerio'
import { errObj } from './error'
import { TurnDownResult, Status } from './type'
import { turndownService } from './turndownCode'

const getError = (code: number) => {
    return {
        code,
        success: false,
        msg: errObj[code],
    }
}

export { TurnDownResult, Status }

export default async function transformHtml2Markdown(
    url: string
): Promise<TurnDownResult> {
    let json: TurnDownResult = await axios
        .request({
            url,
            method: 'get',
            timeout: 30000,
            transformResponse(res) {
                return res
            },
        })
        .then((res) => {
            const $ = cheerio.load(res['data'])

            let title = $('#activity-name').text()

            title = title.trim() || ''

            const author = $('.original_primary_nickname').text()

            const html = $('#js_content').html()

            if (html && html.length > 0) {
                let res = turndownService.turndown(html)

                res = `## ${title} \n \n` + `## 作者 ${author} \n \n` + res

                return {
                    success: true,
                    code: Status.Success,
                    data: {
                        title,
                        author,
                        content: res,
                    },
                }
            }

            return getError(Status.Fail)
        })
        .catch((err) => {
            console.log(err)
            return err
        })

    return json
}
