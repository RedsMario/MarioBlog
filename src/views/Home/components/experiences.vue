<template>
  <div class="experiences">
    <h2>{{ $t('navbar.myExperience') }}</h2>
    <hr :class="{ showProject: showProject }" />
    <div :class="{ w: true, center: true, 'show-desc': showProject }">
      <ul class="my-xp">
        <li>
          <div class="date-box">
            <p>{{$t('Experience.bigPeople.pastTime')}}</p>
            <p>-</p>
            <p>{{$t('Experience.bigPeople.currentTime')}}</p>
          </div>
          <div class="my-work my-xp-box">
            <strong>{{$t('Experience.bigPeople.company')}}</strong>
            <p class="ptitle">{{$t('Experience.bigPeople.work')}}</p>
            <p>{{$t('Experience.bigPeople.workDesc')}}</p>
          </div>
        </li>
        <li>
          <div class="date-box">
            <p>{{$t('Experience.student.pastTime')}}</p>
            <p>-</p>
            <p>{{$t('Experience.student.currentTime')}}</p>
          </div>
          <div class="my-school my-xp-box">
            <strong>{{$t('Experience.student.school')}}</strong>
            <p class="ptitle">{{$t('Experience.student.Education')}}</p>
            <p>{{$t('Experience.student.studentDesc')}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { scrollEvent } from '@/utils/scroll.js'
export default {
  name: 'ExperiencesIndex',
  data() {
    return {
      showProject: false
    }
  },
  mounted() {
    scrollEvent(this, '.section4')
  }
}
</script>
<style lang="scss" scoped>
.experiences {
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
  .show-desc {
    top: 0 !important;
    opacity: 1 !important;
  }
  .center {
    opacity: 0;
    position: relative;
    top: 2em;
    left: 0;
    color: #787978;
    // transition: all 0.3s;
    transition: all 0.6s linear 0.2s;
    .my-xp {
      height: auto;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 2px;
        height: 100%;
        background-color: #eee;
      }
      li {
        position: relative;
        height: 150px;
        div {
          height: 100%;
        }
        &:not(:first-child) {
          margin-top: 80px;
        }
      }
      .date-box {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        width: 150px;
        height: 150px;
        border: 1px solid #eee;
        background: #fff;
        border-radius: 50%;
        padding-top: 30px;
        p {
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          line-height: 30px;
        }
      }
      .ptitle {
        margin: 0;
        color: #e87e04;
      }
      .my-work {
        width: 40%;
        text-align: right;
        p {
          text-align: right;
        }
      }
      strong {
        color: #626e7c;
        font-size: 16px;
      }
    }
    .my-school {
      width: 40%;
      float: right;
    }
    .my-xp-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 1224px) {
    .center {
      width: 65%;
      margin: 0 auto;
      .date-box {
        left: 0 !important;
        margin-left: 100px;
        transform: translate(0) !important;
      }
      .my-xp:before {
        left: 175px;
      }
      .my-work {
        padding-left: 100px;
        p {
          text-align: left !important;
        }
      }
      .my-xp-box {
        padding-left: 100px;
        width: 60% !important;
        text-align: left !important;
        float: left;
        margin-left: 180px;
        p,
        strong {
          text-align: left;
          display: block;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .center {
      width: 80%;
      margin: 0 auto;
      .my-xp:before {
        left: 175px;
      }
    }
  }
  @media (max-width: 750px) {
    .center {
      width: 80%;
      margin: 0 auto;
      .date-box {
        margin-left: 0px;
      }
      .my-xp:before {
        left: 75px;
      }
      .my-work {
        padding-left: 0px;
      }
      .my-xp-box {
        padding-left: 0px;
      }
    }
  }
}
</style>
