export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'json'
}

export const options = {
  param: 'jsonpCallback'
}

export const baseUrl = process.env.NODE_ENV === 'development' ? '//localhost:7992' : '//api.limonplayer.cn/jsonp/music'

export const ERR_OK = 0
