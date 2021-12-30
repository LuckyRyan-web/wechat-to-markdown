## description

Enter the WeChat public address to convert it to markdown format

English | [简体中文](README.zh-CN.md)

## return options

|  Properties   | Description  | Types  |
|  ----  | ----  | ----  |
| title  | title | string |
| author  | author | string  |
| content  | markdown content | string  |

## Basic Usage

## CommonJs

```javascript
const { transformHtml2Markdown } = require('@ryan-liu/wechat-to-markdown')

setTimeout(async () => {
    const { title, author, content } = await transformHtml2Markdown('https://mp.weixin.qq.com/s/9d5DWg7YdMHPvVl-2KLH2w')
    console.log('title', title)
    console.log('author', author)
    console.log('content', content)
}, 0)
```

## vue3
**index.ts**
```javascript
import { transformHtml2Markdown } from '@ryan-liu/wechat-to-markdown'

setup() {
    const getData = async () => {
        const { title, author, content } = await transformHtml2Markdown(
            '/api/s/9d5DWg7YdMHPvVl-2KLH2w'
        )
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


## Packages

[axios](http://www.axios-js.com/)

[cheerio](https://github.com/cheeriojs/cheerio)

[turndown (html to markdown)](https://github.com/mixmark-io/turndown)

[turndown-plugin-gfm (turndown parsing partial html element plugin)](https://github.com/mixmark-io/turndown-plugin-gfm)

## Reference

[html2md (A very well developed url to markdown project)](https://github.com/helloworld-Co/html2md)