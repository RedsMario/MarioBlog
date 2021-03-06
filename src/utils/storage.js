/**
 *  本地存储模块
 */

// 获取本地数据
export const getItem = (key, position) => {
  const data =
    position === 'sessionStorage'
      ? window.sessionStorage.getItem(key)
      : window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

// 写入数据
export const setItem = (key, value, position) => {
  try {
    if (typeof value === 'object') {
      position === 'sessionStorage'
        ? window.sessionStorage.setItem(key, JSON.stringify(value))
        : window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      position === 'sessionStorage'
        ? window.sessionStorage.setItem(key, value)
        : window.localStorage.setItem(key, value)
    }
  } catch (error) {
    throw new Error('写入本地数据错误')
  }
}
