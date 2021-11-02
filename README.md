## description

wechat url to markdown

输入微信公众号地址可以转化为 markdown 格式

## 返回格式

|  返回属性   | 说明  | 类型  |
|  ----  | ----  | ----  |
| title  | 标题 | string |
| author  | 作者 | string  |
| content  | markdown 内容 | string  |

## Basic Usage

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


## Packages

[axios (著名的请求库)](http://www.axios-js.com/)

[cheerio (可以用 JQuery 方式操作 html 源码)](https://github.com/cheeriojs/cheerio)

[turndown (html to markdown)](https://github.com/mixmark-io/turndown)

[turndown-plugin-gfm (turndown 解析部分 html 元素插件)](https://github.com/mixmark-io/turndown-plugin-gfm)

## Reference

[html2md (一个非常完善的 url to markdown 项目)](https://github.com/helloworld-Co/html2md)