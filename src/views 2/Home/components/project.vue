<template>
  <div class="project-container">

  </div>
</template>
<script>
export default {
  name: 'ProjectIndex',
  data() {
    return {
      navs: ['不可思议的CSS', '导航栏', '光标小下划线跟随', '导航栏'],
      prevIndex: null,
      currentIndex: null
    }
  },
  methods: {
    onMouseEnter(index) {
      // 最新的索引
      this.currentIndex = index
      if (this.currentIndex > this.prevIndex) {
      }
    },
    onMouseLeave(index) {
      // 缓存离开的索引
      this.prevIndex = index
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
