import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { plugin as formkitPlugin, defaultConfig as formkitDefaultConfig} from '@formkit/vue'
import router from './router'
import '@formkit/themes/genesis'
import './index.css'


async function bootstrap() {
    const app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.use(formkitPlugin, formkitDefaultConfig)
    app.mount('#app')
}

bootstrap()