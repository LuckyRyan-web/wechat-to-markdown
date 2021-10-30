/**
 *
 * @author ly
 * @date 2021-09-15 23:26
 * @since 0.0.0
 */
import { defineComponent } from 'vue'
// import classnames from 'classnames'
// import style from './style.module.scss'
// import { transformHtml2Markdown } from '@ryan-liu/wechat-to-markdown'
import { transformHtml2Markdown } from '../../../../../dist/index'

export default defineComponent({
    setup() {
        const getData = async () => {
            const res = await transformHtml2Markdown(
                '/api/s/ItaKztMTzrotabFJjunVLQ'
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
