<template>
  <div class="home-container">
    <div id="section-container" class="section active">
      <!-- 个人信息 -->
      <div class="myInfo">
        <h1 :class="{ fade: fade, fadesin1: fadesin1 }">Hello, I'm Mario</h1>
        <h3 :class="{ fade: fade, fadesin2: fadesin2 }">乐于探索前端新技术</h3>
        <span :class="{ fade: fade, active: active, fadesin3: fadesin3 }" @click="onClickVita">个人简历</span>
        <span :class="{ fade: fade, fadesin3: fadesin3 }">我的博客</span>
      </div>
      <!-- 背景切换 -->
      <ul class="bg-img">
        <li :style="index === randomIndex ? 'display: list-item;' : 'display: none'" v-for="(item, index) in background" :key="index"></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'HomeIndex',
  data() {
    return {
      background: [0, 1, 2, 3],
      timer: null,
      randomIndex: 1,
      prevIndex: null,
      fade: true,
      active: true,
      fadesin1: null,
      fadesin2: null,
      fadesin3: null
    }
  },
  mounted() {
    this.changeImage()
    this.userInfo()
  },
  methods: {
    userInfo() {
      setTimeout(() => {
        this.fadesin1 = true
        this.fadesin2 = true
        this.fadesin3 = true
      }, 300)
    },
    // 随机展示背景
    changeImage() {
      clearTimeout(this.timer)
      // 改变定时器的this指向
      this.timer = setTimeout(this.randomAnimate.bind(this), 5000)
    },
    // 随机动画
    randomAnimate() {
      const length = 3
      this.randomIndex = Math.round(Math.random() * length)
      // 判断本次随机数是否和上一次随机数相同
      while (this.prevIndex === this.randomIndex) {
        this.randomIndex = Math.round(Math.random() * length)
      }
      // 缓存上一次的随机数
      this.prevIndex = this.randomIndex
    },
    // 个人简历
    onClickVita() {
      this.$router.push('/vita')
    }
  },
  watch: {
    // 循环调用开启定时器
    prevIndex: function() {
      this.changeImage()
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  #section-container {
    color: #2c3e50;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
  }
  .home-container {
    width: 100%;
    margin: 0 auto;
  }

  .fade {
    transform: translateY(2em);
    -webkit-transform: translateY(2em);
    opacity: 0;
  }
  .section.active .fadesin1,
  .section.active .fadesin2,
  .section.active .fadesin3 {
    transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
    transition: all 1s 0s;
  }
  .section.active .fadesin2 {
    transition: all 1s 0.5s;
  }
  .section.active .fadesin3 {
    transition: all 1s 1s;
  }
  .section {
    width: 100%;
    height: 100vh;
    position: relative;
    padding-bottom: 20px;
  }
  .section {
    min-height: 700px;
  }
  #section-container h1 {
    font-family: cursive, 'Lato', sans-serif;
    font-size: 70px;
    font-weight: 400;
    margin: 50px 0 30px;
  }
  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .bg-img li,
  .bg-img li.show {
    animation: fadescale 5s forwards;
  }
  .bg-img li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: none;
    opacity: 0;
  }
  @keyframes fadescale {
    0% {
      opacity: 1;
      transform: scale(1);
    }

    50% {
      opacity: 1;
      transform: scale(1.1);
    }

    100% {
      opacity: 0.5;
      transform: scale(1);
    }
  }
  .bg-img li:nth-child(1) {
    background: url('~@/assets/images/bg1.jpg') no-repeat center;
    background-size: cover;
  }
  .bg-img li:nth-child(2) {
    background: url('~@/assets/images/bg2.jpg') no-repeat center;
    background-size: cover;
  }
  .bg-img li:nth-child(3) {
    background: url('~@/assets/images/bg3.jpg') no-repeat center;
    background-size: cover;
  }
  .bg-img li:nth-child(4) {
    background: url('~@/assets/images/bg4.jpg') no-repeat center;
    background-size: cover;
  }
  #section-container h3 {
    letter-spacing: 3px;
    /*color: #96a3b2;*/
    font-size: 30px;
    margin: 40px 0;
  }
  .myInfo {
    padding: 35vh 0 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    letter-spacing: 2px;
    transition: all 0.35s;
    background: rgba(256, 256, 256, 0.5);
  }
  #section-container h1 {
    margin-top: 0;
  }
  #section-container div.myInfo > span {
    display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 48px;
    font-size: 16px;
    /*color: #96a3b2;*/
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    background: rgba(256, 256, 256, 0.8);
  }
  #section-container div > span:hover,
  #section-container div > span.active {
    background: #2c3e50;
    color: #fff;
  }

  h4 {
    color: #fff;
  }
  /*
      屏幕宽度小于1224px
  */
  @media only screen and (max-width: 1224px) {
    #section-container div.myInfo h1 {
      font-size: 50px;
    }
    #section-container div.myInfo h3 {
      font-size: 20px;
      margin: 20px 0;
    }
  }
  @media only screen and (max-width: 415px) {
    #section-container div.myInfo h1 {
      font-size: 28px;
    }
    #section-container div.myInfo h3 {
      font-size: 16px;
    }
    #section-container div.myInfo > span {
      height: 35px;
      line-height: 33px;
      font-size: 14px;
      width: 200px;
    }
  }
}
</style>
