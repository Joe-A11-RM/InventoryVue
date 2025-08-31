import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

import App from './App.vue'
import router from './router'
import '../src/style.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: { fa },
  },
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          // 👇 border color for outlined inputs
          'text-field-outlined-border': '#ff0000',
          'text-field-outlined-hover-border': '#00ff00',
          'text-field-outlined-focused-border': '#0000ff',
        },
      },
    },
  },
})
app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
