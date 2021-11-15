## 说明

输入微信公众号地址，将其转换为 markdown 格式

[English](README.md) | 简体中文

## 返回属性

|  Properties   | Description  | Types  |
|  ----  | ----  | ----  |
| title  | 标题 | string |
| author  | 作者 | string  |
| content  | markdown 内容 | string  |

## 基本用法

## CommonJs

```javascript
const { transformHtml2Markdown } = require('@ryan-liu/html-to-markdown')

setTimeout(async () => {
    const { title, author, content } = await transformHtml2Markdown('https://mp.weixin.qq.com/s/9d5DWg7YdMHPvVl-2KLH2w')
    console.log('标题', title)
    console.log('作者', author)
    console.log('内容', content)
}, 0)
```

## vue3
**index.ts**
```javascript
import { transformHtml2Markdown } from '@ryan-liu/html-to-markdown'

setup() {
    const getData = async () => {
        const { title, author, content } = await transformHtml2Markdown(
            '/api/s/9d5DWg7YdMHPvVl-2KLH2w'
        )
        console.log('标题', title)
        console.log('作者', author)
        console.log('内容', content)
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