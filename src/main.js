import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui组件库
import '@/plugins/element.js'
// 导入全局样式文件
import '@/style/index.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
