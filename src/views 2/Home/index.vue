<template>
  <div class="home-container">
    <div>
      <!--第一屏-->
      <div class="section">
        <screen></screen>
      </div>
      <!--第二屏-->
      <div class="section">
        <user-info :navActive="navActive"></user-info>
      </div>
      <!-- 第三屏 -->
      <div class="section">
        作品部分
        <project></project>
      </div>
      <!--第四屏-->
      <div class="section">
        结尾部分
        <div class="footer">
          <button @click="$router.push('fullpage')">fullpage</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 导入背景动画组件
import screen from '@/views/Home/components/screen.vue'
// 导入用户信息组件
import userInfo from '@/views/Home/components/userInfo.vue'
// 导入作品部分组件
import project from '@/views/Home/components/project.vue'
export default {
  name: 'HomeIndex',
  components: {
    screen,
    userInfo,
    project
  },
  data() {
    return {
      // 控制导航栏是否固定
      navActive: null
    }
  },
  mounted() {
    // 监听页面滚动事件
    window.addEventListener('scroll', this.scrollEvent)
  },
  methods: {
    // 滚动事件
    scrollEvent() {
      // 获取第一个屏的高度
      const sectionHeight = document.querySelector('.section:nth-child(1)').clientHeight
      // 获取页面被卷去的距离
      const scrollHeight = window.pageYOffset
      // 如果被卷高度大于第一个屏的高度
      if (scrollHeight >= sectionHeight) {
        this.navActive = true
      } else {
        this.navActive = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  .section {
    width: 100%;
    height: 100vh;
  }

  .footer {
    width: 100%;
    height: 300px;
  }
}
</style>
