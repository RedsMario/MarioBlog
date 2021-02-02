/**
 *  封装监听滚动条滚动事件
 */

export const scrollEvent = (that, selector) => {
  window.addEventListener('scroll', () => {
    // 页面被卷上去的距离
    const pageY = window.pageYOffset
    // // 第二屏幕距离页面的距离
    const section = document.querySelector(selector).offsetTop
    if (pageY >= section - 70) {
      that.showProject = true
    }
  })
}
