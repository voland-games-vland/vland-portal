import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { plugin as formkitPlugin, defaultConfig as formkitDefaultConfig} from '@formkit/vue'
import router from './router'
import './index.css'
import { generateClasses } from '@formkit/themes'
import theme from './theme'
import { setupFirebase } from './bootstrap/firebase'


async function bootstrap() {
    await setupFirebase({
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    })
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