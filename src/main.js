import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入i18n
import i18n from '@/lang'

// 引入elementui组件
import '@/plugins/element.js'

// 导入全局样式文件
import '@/style/index.scss'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
