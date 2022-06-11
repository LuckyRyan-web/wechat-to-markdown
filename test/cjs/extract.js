const extract = require('we-extract').extract

const spider = async () => {
    const res = await extract('https://mp.weixin.qq.com/s/eTtQez2vnOwo3UZzNz9_Ow', {
        shouldReturnContent: true, // 是否返回内容，默认返回
        shouldExtractMpLinks: false, // v2.1.0 是否返回文章中出现的所有公众号文章链接，如果为 true，将返回 mp_links 数组
        shouldExtractTags: false, // v2.2.0 是否解析文章中的收录标签
        shouldExtractRepostMeta: false // v2.2.3 是否解析转载文章来源
    })
    console.log(res.data.msg_content)
}

spider()
