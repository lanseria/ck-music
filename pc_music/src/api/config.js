const prefix = require('../../../config')
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'json'
}

export const options = {
  param: 'callback'
}

export const baseUrl = process.env.NODE_ENV === 'development' ? `//localhost:7992${prefix}` : `//api.limonplayer.cn${prefix}`

export const ERR_OK = 0
