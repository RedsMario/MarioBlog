<template>
  <div class="home-container">
    <div class="section section1">
      <screen></screen>
    </div>
    <div :class="{ section: true, section2: true }">
      <user-info :fixed="fixed" ref="userRef"></user-info>
      <about :container="fixed"></about>
    </div>
    <div class="section section5">
      <skill></skill>
    </div>
    <div class="section section4">
      <experiences></experiences>
    </div>
    <div class="section section3">
      <project></project>
    </div>
    <div class="section section6">
      <contact></contact>
    </div>
  </div>
</template>
<script>
import { getItem, setItem } from '@/utils/storage.js'
// 导入动画首页
import screen from '@/views/Home/components/screen.vue'
// 导入个人信息页面
import userInfo from '@/views/Home/components/userInfo.vue'
// 关于我
import about from '@/views/Home/components/about.vue'
// 我的作品
import project from '@/views/Home/components/project.vue'
// 个人经历
import experiences from '@/views/Home/components/experiences.vue'
// 技能掌握
import skill from '@/views/Home/components/skill.vue'
// 联系我
import contact from '@/views/Home/components/contact.vue'
export default {
  name: 'HomeIndex',
  data() {
    return {
      // 固定定位
      fixed: false,
      haha: '123',
      scrollPosition: getItem('POSITION', 'sessionStorage') || 0
    }
  },
  components: {
    screen,
    userInfo,
    about,
    project,
    experiences,
    skill,
    contact
  },
  mounted() {
    this.onScrollPage()
    this.onUpdate()
    this.setPosition()
  },
  methods: {
    // 监听页面滚动事件
    onScrollPage() {
      window.addEventListener('scroll', this.onScroll, false)
    },
    onScroll() {
      // 页面被卷上去的距离
      const pageY = window.pageYOffset
      // // 第二屏幕距离页面的距离
      const section = document.querySelector('.section:nth-child(2)').offsetTop
      if (pageY >= section) {
        this.fixed = true
      } else {
        this.fixed = false
      }
    },
    // 监听页面的刷新事件
    onUpdate() {
      window.addEventListener('beforeunload', this.handleUpdate, false)
    },
    handleUpdate() {
      setItem('POSITION', window.pageYOffset, 'sessionStorage')
      setItem('SELECTED_BAR', this.$refs.userRef.isIndex)
    },
    setPosition() {
      this.$refs.userRef.flag = false
      setTimeout(() => {
        window.scroll(0, this.scrollPosition)
        this.$refs.userRef.flag = true
      }, 100)
    }
  }
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
  .section2 {
    height: calc(100vh - 60px);
  }
  .section3 {
    height: auto;
    margin-bottom: 100px;
  }
  .section4 {
    height: 80vh;
  }
  .section5 {
    height: auto;
    // height: 80vh;
    padding-bottom: 80px;
    // background: url(~@/assets/images/skills-bg.jpg);
  }
  .section6 {
    background: url(~@/assets/images/services-bg.jpg);
  }
}
</style>
