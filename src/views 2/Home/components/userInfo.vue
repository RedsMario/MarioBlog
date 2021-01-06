<template>
  <div class="user-container">
    <!-- 导航栏部分 -->
    <div :class="{ 'nav-bar': true, 'nav-active': navActive }">
      <div class="w">
        <ul class="nav">
          <li class="left">Mario博客</li>
          <div class="right">
            <li v-for="(item, index) in navs" :key="index">{{ item }}</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  props: ['navActive'],
  data() {
    return {
      // 被选中的栏目
      activeIndex: '1',
      navs: ['我的信息', '我的作品', '就业意向', '联系我']
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.user-container {
  position: relative;
  width: 100%;
  height: 100%;
  .w {
    width: 1400px;
    margin: 0 auto;
  }
  .nav-bar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #303d4e;
    color: #fff;
    .nav {
      display: flex;
      height: 70px;
      line-height: 70px;
      margin: 0 auto;
      list-style: none;
      justify-content: space-between;
      .right {
        display: flex;
        li {
          padding: 0 15px;
        }
      }
    }
    li {
      position: relative;
      cursor: pointer;
    }
    li::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 5px;
      width: 0;
      height: 2px;
      background-color: #75b57e;
      transition: all 0.5s;
    }
    li:hover::before {
      left: 0;
      width: 100%;
    }
  }
}
</style>
