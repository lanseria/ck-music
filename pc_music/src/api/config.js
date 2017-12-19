export const commonParams = {
  g_tk: 182355749,
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'json'
}

export const options = {
  param: 'jsonpCallback'
}

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:7992' : 'https://qqmusicapi.limonplayer.cn'

export const ERR_OK = 0