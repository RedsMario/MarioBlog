<template>
  <div class="project-container">
    <h2>{{ $t('navbar.myProject') }}</h2>
    <hr :class="{ showProject: showProject }" />
    <div :class="{ w: true, 'show-desc': showProject }">
      <el-row>
        <el-col
          :lg="6"
          :md="6"
          :sm="12"
          :xs="24"
          v-for="item in projectList"
          :key="item.id"
        >
          <div class="project-item">
            <img class="img" :src="item.imgUrl" alt="" />
          </div>
          <div class="mask">
            <div class="cover">
              <h4 class="title">{{ item.title }}</h4>
              <p class="desc">{{ item.desc }}</p>
              <img class="icon" :src="item.icon" alt="" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { project } from '@/assets/constants'
import { scrollEvent } from '@/utils/scroll.js'
export default {
  name: 'ProjectIndex',
  data() {
    return {
      showProject: false,
      // 个人作品数据
      projectList: project
    }
  },
  mounted() {
    scrollEvent(this, '.section3')
  }
}
</script>
<style lang="scss" scoped>
.project-container {
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
    opacity: 0;
    width: 0px;
    height: 4px;
    margin: 10px auto 50px;
    background-color: #e87e04;
    transition: all 0.5s;
  }
  .showProject {
    opacity: 1;
    width: 80px;
  }
  .show-desc {
    top: 0 !important;
    opacity: 1 !important;
  }
  .w {
    opacity: 0;
    position: relative;
    top: 2em;
    left: 0;
    transition: all 1s linear 0.2s;
    margin: 0 auto;
    .el-row {
      .el-col:last-child {
        margin-right: 0;
      }
      .el-col {
        position: relative;
        padding: 10px;
        transition: all 0.5s linear;
        cursor: pointer;
        .mask {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          color: #fff;
          font-size: 14px;
          .cover {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            .title {
              font-size: 16px;
              color: #fff;
            }
            .desc {
              width: 200px;
              margin-top: 10px;
            }
            .icon {
              width: 25px;
              height: 25px;
              margin-top: 10px;
            }
          }
        }
        &:hover {
          // padding: 0;
          transform: scale(1.04);
        }
        &:hover .mask {
          display: block;
        }
        &:hover .img {
          filter: brightness(0.3);
        }
        .img {
          display: block;
          width: 100%;
          height: 100%;
          transition: all 0.3s linear;
        }
      }
    }
  }
}
</style>
