import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { loadLocaleMessages } from './i18n'
console.log(loadLocaleMessages())

const i18n = createI18n({
    legacy: false,
    locale: process.env.VUE_APP_I18N_LOCALE || 'cn',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'cn',
    messages: loadLocaleMessages()
})

createApp(App).use(i18n).mount('#app')