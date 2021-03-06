// const { transformHtml2Markdown } = require('@ryan-liu/wechat-to-markdown')
const transformHtml2Markdown = require('../../dist/index.cjs').default

const fs = require('fs-extra')

const dayjs = require('dayjs')

setTimeout(async () => {
    // 'https://mp.weixin.qq.com/s/ItaKztMTzrotabFJjunVLQ'
    const url = 'https://mp.weixin.qq.com/s/eTtQez2vnOwo3UZzNz9_Ow'
    const article = await transformHtml2Markdown(url)

    const { title, author, content } = article.data

    console.log('data', article.data)

    const today = dayjs().format('YYYY-MM-DD')

    const file = `./content/${today}_${author}.md`

    fs.writeFileSync(file, content, function (err) {
        console.error(err)
    })
}, 0)
