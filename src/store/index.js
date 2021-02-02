import Vue from 'vue'
import Vuex from 'vuex'
import { setItem } from '@/utils/storage.js'
import i18n from '@/lang'
import en from '@/lang/en.js'
import zh from '@/lang/zh.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 选中的语言
    selectedLanguage: i18n.locale,
    // 技能列表
    skillList: i18n.locale === 'zh' ? zh.skill.project : en.skill.project
  },
  mutations: {
    handleSetLanguage(state, language) {
      if (language === 'en') {
        state.selectedLanguage = 'en'
        // 修改技能数组
        state.skillList = en.skill.project
      } else {
        state.selectedLanguage = 'zh'
        // 修改技能数组
        state.skillList = zh.skill.project
      }
      // 更新本地语言
      setItem('locale', state.selectedLanguage)
      // 修改i18n
      i18n.locale = state.selectedLanguage
    }
  },
  actions: {},
  modules: {}
})
