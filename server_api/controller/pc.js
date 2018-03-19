const got = require('got')
const config = require('../config')
const { urls } = config

exports.getPlaylist = async function getPlaylist (ctx) {
  const { request } = ctx
  const response = await got.get(urls.GETPLAYLIST, {
    headers: {
      referer: 'https://u.y.qq.com',
      host: 'u.y.qq.com'
    },
    query: request.query
  })
  ctx.body = response.body
}
