import Vue from 'vue'
// 全局引入elementui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// 引入i18n
import i18n from '@/lang'

Vue.use(Element)
// 配置element-ui组件国际化
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
