/**
 *  封装动画函数
 */

export const animate = (el, position, callback) => {
  clearInterval(el.timer)
  el.timer = setInterval(() => {
    // 1、判断传入的是不是window对象
    const offset = el === window ? el.pageYOffset : el.offsetLeft
    // 2、计算步长
    let step = (position - offset) / 5
    // 3、对步长取整  正数往大取  负数往小取
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    // 4、判断是否到达目标位置
    if (offset === position) {
      clearInterval(el.timer)
      return callback && callback()
    }
    // 5、改变距离
    el === window
      ? el.scroll(0, offset + step)
      : (el.style.left = offset + step + 'px')
  }, 30)
}
