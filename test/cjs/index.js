// const { transformHtml2Markdown } = require('@ryan-liu/wechat-to-markdown')
const { transformHtml2Markdown } = require('../../dist/index.cjs')

const fs = require('fs-extra')

const dayjs = require('dayjs')

setTimeout(async () => {
    // 'https://mp.weixin.qq.com/s/ItaKztMTzrotabFJjunVLQ'
    const {title, author, content} = await transformHtml2Markdown('https://mp.weixin.qq.com/s/BuM5DDbT6rDgdo1pPIj0lA')

    const today = dayjs().format('YYYY-MM-DD')

    const file = `./content/${today}_${author}.md`

    fs.writeFileSync(file, content, function (err) {
        console.error(err)
    })

}, 0)