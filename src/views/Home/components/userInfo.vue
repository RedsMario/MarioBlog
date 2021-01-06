<template>
  <div class="user-container">
    <div class="nav-bar">
      <div class="w">
        <el-row>
          <el-col :md="6" :lg="7" :sm="5">
            <span>
              <div>Mario博客</div>
            </span>
          </el-col>
          <el-col :md="3" :lg="3" :sm="4" hidden-xs-only>
            <div>我的信息</div>
          </el-col>
          <el-col :md="3" :lg="3" :sm="3" hidden-xs-only>
            <div>我的作品</div>
          </el-col>
          <el-col :md="3" :lg="3" :sm="3" hidden-xs-only>
            <div>我的经历</div>
          </el-col>
          <el-col :md="3" :lg="3" :sm="3" hidden-xs-only>
            <div>技术掌握</div>
          </el-col>
          <el-col :md="3" :lg="3" :sm="4" hidden-xs-only>
            <div>就业意向</div>
          </el-col>
          <el-col :md="3" :lg="2" :sm="2" hidden-xs-only>
            <div>联系我</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo'
}
</script>
<style lang="scss" scoped>
.user-container {
  font-size: 14px;
  .w {
    width: 75%;
    margin: 0 auto;
  }
  .nav-bar {
    height: 70px;
    background-color: #303d4e;
    color: #fff;
    .el-row {
      height: 70px;
    }
    .el-col {
      div {
        position: relative;
        text-align: center;
        line-height: 70px;
        cursor: pointer;
        &::before {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 50%;
          width: 0px;
          height: 3px;
          background-color: #75b57e;
          transition: all 0.5s;
        }
        &:hover::before {
          width: 100%;
          left: 0;
        }
      }
    }
    .el-col:nth-child(1) {
      span {
        display: flex;
        height: 70px;
        align-items: center;
        text-align: left;
        div {
          position: relative;
          padding: 0 20px;
          cursor: pointer;
          &::before {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 50%;
            width: 0px;
            height: 3px;
            background-color: #75b57e;
            transition: all 0.5s;
          }
          &:hover::before {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  }
}
</style>
