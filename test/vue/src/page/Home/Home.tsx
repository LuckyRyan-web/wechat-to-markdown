/**
 *
 * @author ly
 * @date 2021-09-15 23:26
 * @since 0.0.0
 */
import { defineComponent } from 'vue'
// import classnames from 'classnames'
// import style from './style.module.scss'
import { transformHtml2Markdown } from '@ryan-liu/html-to-markdown'

export default defineComponent({
    setup() {
        const getData = async () => {
            const res = await transformHtml2Markdown(
                '/api/s/9d5DWg7YdMHPvVl-2KLH2w'
            )
            console.log(res)
        }

        getData()

        return {}
    },
    render() {
        return <div>Home</div>
    },
})
