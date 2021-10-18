// import { transformHtml2Markdown } from '@ryan-liu/html-to-markdown'
const { transformHtml2Markdown } = require('@ryan-liu/html-to-markdown')

setTimeout(async () => {
    const res = await transformHtml2Markdown('https://mp.weixin.qq.com/s/9d5DWg7YdMHPvVl-2KLH2w')
    console.log(res)
}, 0)