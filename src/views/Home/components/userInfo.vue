<template>
  <div class="user-container">
    <div :class="{ 'nav-bar': true, fixed: fixed }">
      <div class="w">
        <el-row>
          <el-col :lg="10" :md="8" :sm="6" :xs="12" class="left">
            <span class="top">
              <div>
                {{ $t('navbar.blog') }}
                <span></span>
              </div>
            </span>
          </el-col>
          <el-col :lg="14" :md="16" :sm="18" :xs="12" class="right">
            <el-row class="hidden-xs-only">
              <el-col
                :lg="4"
                :md="4"
                :sm="4"
                v-for="(item, index) in navBarList"
                :key="index"
                class="col"
              >
                <div class="nav-bar-item" @click="onClickNavBar(item, index)">
                  <div
                    :class="{
                      animated: true,
                      pulse: item.bounce,
                      'select-active': item.bounce
                    }"
                  >
                    {{ $t(item.command) }}
                  </div>
                  <span v-show="index !== isIndex"></span>
                  <transition name="slide-fade">
                    <span v-show="index === isIndex" class="active"></span>
                  </transition>
                </div>
              </el-col>
              <el-col :lg="4" :md="4" :sm="4" class="end">
                <lang-select></lang-select>
              </el-col>
            </el-row>
            <!-- 汉堡菜单 -->
            <div class="hidden hamburg">
              <el-dropdown trigger="hover" @command="onSelected">
                <span class="el-dropdown-link">
                  <i class="iconfont mario-menu"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="(item, index) in navBarList"
                    :key="index"
                    class="drop-item"
                    :command="item"
                  >
                    {{ $t(item.command) }}</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import LangSelect from '@/components/LangSelect'
import { navBarList } from '@/assets/constants'
import { animate } from '@/utils/animate.js'
import { getItem } from '@/utils/storage.js'
export default {
  name: 'UserInfo',
  components: {
    LangSelect
  },
  props: {
    fixed: {
      type: Boolean
    }
  },
  data() {
    return {
      // 存储所有导航栏目
      navBarList,
      isIndex: null,
      // 点击时不判断
      flag: true
    }
  },
  mounted() {
    this.onWindowScroll()
    this.isIndex = getItem('SELECTED_BAR') || ''
  },
  methods: {
    // 监听滚动事件
    onWindowScroll() {
      window.addEventListener('scroll', () => {
        if (!this.flag) return
        const el = document.querySelectorAll('.section')
        const arr = [...el].slice(1)
        arr.forEach((item, index) => {
          if (window.pageYOffset >= arr[index].offsetTop - 70) {
            this.isIndex = index
          }
        })
      })
    },
    // 选中的导航
    onClickNavBar(selectItem, index) {
      this.flag = false
      if (this.isIndex === index) return
      this.isIndex = index
      // 点击哪个就滚动指定位置
      let obj = document.querySelector(selectItem.select).offsetTop
      if (index !== 0) {
        obj = obj - 70
      }
      const scrollPosition = obj
      animate(window, scrollPosition, () => (this.flag = true))
      this.navBarList.some(item => {
        item.bounce = false
      })
      selectItem.bounce = true
    },
    onSelected(selectItem) {
      // 点击哪个就滚动指定位置
      const scrollPosition = document.querySelector(selectItem.select).offsetTop
      animate(window, scrollPosition)
    }
  },
  watch: {
    isIndex: function(newIndex) {
      this.navBarList.forEach((item, index) => {
        if (index === newIndex) {
          item.bounce = true
        } else {
          item.bounce = false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.user-container {
  width: 100%;
  font-size: 14px;
  .select-active {
    color: #83b283;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .hamburg {
    display: flex;
    justify-content: flex-end;
    position: relative;
    i {
      float: right;
      display: block;
      width: 50px;
      height: 100%;
      text-align: center;
      font-size: 28px;
      cursor: pointer;
      color: #fff;
    }
  }
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .w {
    width: 80%;
    margin: 0 auto;
  }
  .hidden {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .hidden {
      display: block;
      color: #fff;
      text-align: right;
      line-height: 70px;
      font-size: 28px;
      height: 70px;
    }
  }
  .end {
    display: flex;
    align-items: center;
  }
  .nav-bar {
    height: 70px;
    background-color: #303d4e;
    color: #fff;
    .el-row {
      height: 70px;
    }
    .left {
      .top {
        display: flex;
        div {
          height: 70px;
          line-height: 70px;
          padding: 0 20px;
          position: relative;
          cursor: pointer;
          span {
            position: absolute;
            bottom: 5px;
            left: 0;
            right: 0;
            margin: auto;
            width: 0px;
            height: 3px;
            background-color: #75b57e;
            transition: all 0.5s;
          }
          &:hover span {
            width: 100%;
            left: 0;
          }
        }
      }
    }
    .right {
      position: relative;
      .el-row {
        .el-col {
          .nav-bar-item {
            position: relative;
            text-align: center;
            line-height: 70px;
            cursor: pointer;
            box-sizing: border-box;
            span {
              position: absolute;
              bottom: 5px;
              left: 0;
              right: 0;
              margin: auto;
              width: 0px;
              height: 3px;
              background-color: #75b57e;
              transition: all 0.5s;
            }
            .active {
              position: absolute;
              bottom: 5px;
              left: 0;
              width: 70%;
              height: 3px;
              background-color: #75b57e;
              z-index: 999;
              transition: all 0.5s ease;
            }
            &:hover span {
              width: 70%;
            }
            .slide-fade-leave-active {
              transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
            }
            .slide-fade-leave {
              width: 70%;
            }
            .slide-fade-leave-to {
              opacity: 0;
              width: 0px;
            }
          }
        }
        .mario-menu {
          position: absolute;
          right: 0;
          top: 0;
          width: 100px;
          height: 100px;
          color: red;
        }
      }
    }
  }
}
</style>
