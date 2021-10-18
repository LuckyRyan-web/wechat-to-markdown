import { defineComponent, ref } from 'vue'
import style from './style.module.scss'

export default defineComponent({
    props: {
        msg: {
            type: String,
            default: '',
        },
    },
    setup() {
        const count = ref(0)

        const user: ApiUser.UserConfig = {
            name: 'user',
        }

        const shop: ApiShop.ShopConfig = {
            name: 'shop',
        }

        return {
            count,
        }
    },
    render() {
        return (
            <div class={style.HelloWorld}>
                {this.msg}
                <p>
                    Recommended IDE setup:
                    <a href="https://code.visualstudio.com/" target="_blank">
                        VSCode
                    </a>
                    +
                    <a
                        href="https://github.com/johnsoncodehk/volar"
                        target="_blank"
                    >
                        Volar
                    </a>
                </p>
                <p>
                    See <code>README.md</code> for more information.
                </p>

                <p>
                    <a
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                    >
                        Vite Docs
                    </a>
                    |
                    <a href="https://v3.vuejs.org/" target="_blank">
                        Vue 3 Docs
                    </a>
                </p>

                <button
                    type="button"
                    onClick={() => {
                        this.count++
                    }}
                >
                    count is: {this.count}
                </button>
                <p>
                    Edit
                    <code>components/HelloWorld.vue</code> to test hot module
                    replacement.
                </p>
            </div>
        )
    },
})
