<template>
  <div class="skill-container">
    <h2>{{ $t('navbar.skillGrasp') }}</h2>
    <hr :class="{ showProject: showProject }" />
    <div :class="{w: true, skill: true, 'show-desc': showProject}">
      <el-row>
        <el-col
          :lg="6"
          :md="6"
          :sm="12"
          :xs="24"
          v-for="item in skillList"
          :key="item.id"
        >
          <div class="col">
            <div class="radius">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
            </div>
            <div class="desc">
              <p v-for="(subItem, index) in item.desc" :key="index">
                ✎ {{ subItem }}
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { scrollEvent } from '@/utils/scroll.js'
import { mapState } from 'vuex'
export default {
  name: 'SkillIndex',

  data() {
    return {
      showProject: false
    }
  },
  mounted() {
    scrollEvent(this, '.section5')
  },
  methods: {},
  computed: {
    ...mapState(['skillList'])
  }
}
</script>
<style lang="scss" scoped>
.skill-container {
  .mario-vue {
    font-size: 100px;
    color: #70bb90;
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
  .el-col {
    display: flex;
  }
  .show-desc {
    top: 0 !important;
    opacity: 1 !important;
  }
  .skill {
    opacity: 0;
    position: relative;
    top: 2em;
    left: 0;
    color: #666;
    li:not(:first-child) {
      margin: 10px 0;
    }
    .col {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-right: 20px;
      margin-bottom: 30px;
      letter-spacing: 1px;
      .radius {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        // border: 1px solid #eee;
        // background: #fff;
        // overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .desc {
        margin-top: 30px;
        p {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
