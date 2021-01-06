import Vue from 'vue'
// 导入I18n处理国际化
import VueI18n from 'vue-i18n'

// 导入语言包
import zhLocale from './zh'
import enLocale from './en'

Vue.use(VueI18n)

const messages = {
  zh: {
    ...zhLocale
  },
  en: {
    ...enLocale
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})
export default i18n
