## 说明

输入微信公众号地址，将其转换为 markdown 格式

[English](README.md) | 简体中文

## 返回属性

```ts
interface TurnDownResult {
    success: boolean
    code: number
    data?: {
        title?: string
        author?: string
        content?: string
    }
    msg?: string
}

```
## 基本用法

## CommonJs

```javascript
const transformHtml2Markdown = require('@ryan-liu/wechat-to-markdown').default

setTimeout(async () => {
    const articleData = await transformHtml2Markdown('https://mp.weixin.qq.com/s/9d5DWg7YdMHPvVl-2KLH2w')

    const { title, author, content } = articleData.data

    console.log('title', title)
    console.log('author', author)
    console.log('content', content)
}, 0)
```

## vue3
**index.ts**

```javascript
import transformHtml2Markdown from '@ryan-liu/wechat-to-markdown'

setup() {
    const getData = async () => {
        const articleData = await transformHtml2Markdown(
            '/api/s/9d5DWg7YdMHPvVl-2KLH2w'
        )

        const { title, author, content } = articleData.data

        console.log('title', title)
        console.log('author', author)
        console.log('content', content)
    }

    getData()

    return {}
},
```

**vite.config.ts**

```js
...
server: {
    proxy: {
        '/api': {
            target: 'https://mp.weixin.qq.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
        },
    },
},
...
```


## 使用到的包

[axios (著名的请求库)](http://www.axios-js.com/)

[cheerio (可以用 JQuery 方式操作 html 源码)](https://github.com/cheeriojs/cheerio)

[turndown (html to markdown)](https://github.com/mixmark-io/turndown)

[turndown-plugin-gfm (turndown 解析部分 html 元素插件)](https://github.com/mixmark-io/turndown-plugin-gfm)

## 参考

[html2md (一个非常完善的 url to markdown 项目)](https://github.com/helloworld-Co/html2md)