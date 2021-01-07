import Vue from 'vue'
// 导入I18n处理国际化
import VueI18n from 'vue-i18n'

// 导入语言包
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
import zhLocale from './zh'
import enLocale from './en'

// 导入工具包
import { getItem } from '@/utils/storage.js'
Vue.use(VueI18n)

const messages = {
  zh: {
    ...zhLocale,
    ...elementEnLocale
  },
  en: {
    ...enLocale,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  // 默认读取vuex中的数据
  locale: getItem('locale') || 'zh',
  messages
})
export default i18n
