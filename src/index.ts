import utils from 'markdown-utils'

const example = utils.blockquote('This is a blockquote')

const code = utils.code('const foo = bar;')

console.log(example)

console.log(code)
