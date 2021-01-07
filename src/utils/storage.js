/**
 *  本地存储模块
 */

// 获取本地数据
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

// 写入数据
export const setItem = (key, value) => {
  try {
    if (typeof value === 'object') {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.localStorage.setItem(key, value)
    }
  } catch (error) {
    throw new Error('写入本地数据错误')
  }
}
