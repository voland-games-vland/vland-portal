import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { plugin as formkitPlugin, defaultConfig as formkitDefaultConfig} from '@formkit/vue'
import router from './router'
import './index.css'
import { generateClasses } from '@formkit/themes'
import theme from './theme'


async function bootstrap() {
    const app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.use(formkitPlugin, formkitDefaultConfig({
        config: {
            classes: generateClasses(theme)
        }
    }))
    app.mount('#app')
}

bootstrap()