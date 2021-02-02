<template>
  <div :class="{ 'about-container': true, 'active-container': container }">
    <h2>{{ $t('userInfo.me') }}</h2>
    <hr :class="{ showme: showMe, common: true }" />
    <div :class="{ 'show-desc': showMe, center: true }">
      <div class="avatar common">
        <img src="../../../assets/images/avatar.png" alt="" />
      </div>
      <el-row :gutter="10">
        <el-col :lg="14" :md="16" :sm="16" :xs="18" class="common">
          <p class="common">{{ $t('userInfo.description') }}</p>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :lg="14" :md="16" :sm="16" :xs="18" class="common">
          <p class="common">
            <span class="saying">{{ $t('userInfo.saying') }}</span>
            <span>--Jeff Atwood</span>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutIndex',
  props: {
    container: {
      type: Boolean
    }
  },
  data() {
    return {
      showMe: false
    }
  },
  watch: {
    container: function(newVal) {
      if (newVal) {
        this.showMe = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.about-container {
  height: calc(100vh - 180px - 70px);
  h2 {
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    padding: 100px 0 0 0;
    color: #2c3e50;
    letter-spacing: 2px;
  }
  .common {
    position: relative;
    top: 6px;
    left: 50%;
    transform: translate(-50%);
    z-index: -1;
  }
  hr {
    opacity: 0;
    width: 0px;
    height: 4px;
    margin-bottom: 80px;
    background-color: #e87e04;
    transition: all 0.3s;
  }
  .showme {
    opacity: 1;
    width: 80px;
  }
  .center {
    opacity: 0;
    position: relative;
    top: 2em;
    left: 0;
    transition: all 1s linear 0.2s;
    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      padding: 2em 0 0 0;
      text-indent: 2em;
      color: #787978;
    }
  }
  .show-desc {
    top: 0;
    opacity: 1;
  }
}
.active-container {
  padding-top: 70px;
}
</style>
