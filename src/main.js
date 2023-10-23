/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import Vueform from '@vueform/vueform/plugin'
import vueformConfig from './../vueform.config'

// Composables
import { createApp } from 'vue'


// Plugins
import { registerPlugins } from '@/plugins'

import './assets/tailwind.css'

const app = createApp(App)

registerPlugins(app)
app.use(Vueform, vueformConfig)
app.mount('#app')

