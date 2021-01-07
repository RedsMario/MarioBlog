<template>
  <div class="user-container">
    <div class="nav-bar">
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
                <div class="nav-bar-item" @click="onClickNavBar(index)">
                  <div class="animated ">{{ $t(item.command) }}</div>
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
            <span class="iconfont mario-menu hidden"></span>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import LangSelect from '@/components/LangSelect'
import { navBarList } from '@/assets/constants'
// import $ from 'jquery'
export default {
  name: 'UserInfo',
  components: {
    LangSelect
  },
  data() {
    return {
      // 存储所有导航栏目
      navBarList,
      isIndex: null
    }
  },
  methods: {
    // 选中的导航
    onClickNavBar(index) {
      this.isIndex = index
      const allElement = document.querySelectorAll('.animated')
      for (var i = 0; i < allElement.length; i++) {
        allElement[i].classList.remove('bounce')
      }
      allElement[index].classList.add('bounce')
    }
  }
}
</script>
<style lang="scss" scoped>
.user-container {
  font-size: 14px;

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
      cursor: pointer;
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
