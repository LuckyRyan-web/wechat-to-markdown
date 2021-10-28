// const { transformHtml2Markdown } = require('@ryan-liu/html-to-markdown')
const { transformHtml2Markdown } = require('../../dist/index.cjs')

const fs = require('fs-extra')

const dayjs = require('dayjs')

setTimeout(async () => {
    const {title, author, content} = await transformHtml2Markdown('https://mp.weixin.qq.com/s/ItaKztMTzrotabFJjunVLQ')

    const today = dayjs().format('YYYY-MM-DD')

    const file = `./content/${today}_${author}.md`

    fs.pathExists(file, (err, exists) => {
        if (err) {
            console.log(err)
            return
        }

        if (!exists){
            fs.writeFileSync(file, content, function (err) {
                console.error(err)
            })
        } else {
            console.log('file exists')
            // fs.remove(file)
        }
    })

}, 0)