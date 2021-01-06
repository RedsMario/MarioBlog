<template>
  <div class="home-container">
    <div class="section">
      <screen></screen>
    </div>
    <div class="section">
      <user-info></user-info>
    </div>
    <div class="section">
      个人作品
    </div>
    <div class="section">
      个人经历
    </div>
    <div class="section">
      联系我
    </div>
  </div>
</template>
<script>
// 导入动画首页
import screen from '@/views/Home/components/screen.vue'
// 导入个人信息页面
import userInfo from '@/views/Home/components/userInfo.vue'
export default {
  name: 'HomeIndex',
  data() {
    return {}
  },
  components: {
    screen,
    userInfo
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  .section {
    width: 100%;
    height: 100vh;
  }
}
</style>
