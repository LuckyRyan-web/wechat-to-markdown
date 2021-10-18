import { defineComponent } from 'vue'
import Logo from './assets/logo.png'

export default defineComponent({
    setup() {},
    render() {
        return (
            <div>
                <img alt="Vue logo" src={Logo} />
                <router-view></router-view>
            </div>
        )
    },
})
