import { createI18n } from 'vue-i18n'
import en from './en.json'
import ja from './en.json'

const messages = {
    en,
    ja,
}
const i18n = createI18n({
    legacy: false,
    locale: 'en', // set default locale
    fallbackLocale: 'en',
    messages,
})

export default i18n