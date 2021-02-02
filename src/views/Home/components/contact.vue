<template>
  <div class="contact-container">
    <h2>{{ $t('navbar.contact') }}</h2>
    <hr :class="{ showProject: showProject }" />
    <div class="w center">
      <swiper
        class="swiper gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
      >
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
        ></div>
        <div
          class="swiper-button-prev swiper-button-white"
          slot="button-prev"
        ></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
      </swiper>
    </div>
    <div class="right">
      <p>&copy; Mario |</p>
      <a href="http://beian.miit.gov.cn/">晋ICP备2021001869号</a>
    </div>
  </div>
</template>
<script>
import { scrollEvent } from '@/utils/scroll.js'
// 导入swiper组件
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'ContactIndex',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      showProject: false,
      swiperOptionTop: {
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          /* 禁止触摸滑动后继续轮播 */
          disableOnInteraction: false
        },
        loopedSlides: 5,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    scrollEvent(this, '.section6')
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.contact-container {
  position: relative;
  width: 100%;
  height: 100%;
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%);
    font-size: 14px;
    color: #948c76;
    a {
      color: #948c76;
      text-decoration: none;
      margin-left: 5px;
    }
  }
  h2 {
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    padding: 100px 0 0 0;
    color: #2c3e50;
    letter-spacing: 2px;
  }
  hr {
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    margin-top: 10px;
    opacity: 0;
    width: 0px;
    height: 4px;
    margin-bottom: 80px;
    background-color: #e87e04;
    transition: all 0.3s;
  }
  .showProject {
    opacity: 1;
    width: 80px;
  }
  .center {
    width: 100%;
    height: 60%;
  }
  // 轮播图
  .thumb-example {
    height: 480px;
    // background-color: $black;
  }

  .swiper {
    .swiper-slide {
      background-size: cover;
      background-position: center;

      &.slide-1 {
        background-image: url('../../../assets/images/swiper_01.jpg');
      }
      &.slide-2 {
        background-image: url('../../../assets/images/swiper_02.jpg');
      }
      &.slide-3 {
        background-image: url('../../../assets/images/swiper_03.jpg');
      }
      &.slide-4 {
        background-image: url('../../../assets/images/swiper_04.jpg');
      }
      &.slide-5 {
        background-image: url('../../../assets/images/swiper_05.jpg');
      }
    }

    &.gallery-top {
      height: 80%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 750px) {
    .w {
      width: 80%;
    }
    .center {
      height: 50%;
    }
  }
  @media only screen and (max-width: 960px) {
    .w {
      width: 80%;
    }
    .center {
      height: 50%;
    }
  }
  @media only screen and (max-width: 1200px) {
    .w {
      width: 80%;
    }
  }
}
</style>
