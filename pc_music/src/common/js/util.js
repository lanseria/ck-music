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
