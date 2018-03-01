// http://p.qpic.cn/music_cover/0iachsNZmG84pY2Pf8Y8vE90lXrnjgYrSlCFCJsR9Cw4JHc4YFM5eMg/600?n=1
export function delelteHttp (httpUrl) {
  if (httpUrl.startWith('https')) {
    return httpUrl.slice(6, -1)
  }
  if (httpUrl.startWith('http')) {
    return httpUrl.slice(5, -1)
  }
}
export function formatInterval (interval) {
  interval = interval | 0
  const minutes = interval / 60 | 0
  const second = _pad(interval % 60)
  return `${minutes}:${second}`
}

function _pad (num, n = 2) {
  let len = num.toString().length
  while (len < n) {
    num = '0' + num
    len++
  }
  return num
}
