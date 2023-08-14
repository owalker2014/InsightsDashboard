import { createApp } from 'vue'
import App from './App.vue'

// Plugins
import router from './plugins/router'
import pinia from './plugins/pinia'
import vuetify from './plugins/vuetify'

import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App).use(router).use(pinia).use(vuetify).mount('#app')
