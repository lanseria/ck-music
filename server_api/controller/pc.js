const got = require('got')
const { convertJsonp, FixJsonp } = require('../utils/jsonpTools')
const config = require('../config')
const { urls } = config

exports.getPlaylist = async function getPlaylist (ctx) {
  const { request } = ctx
  ctx.body = await convertJsonp(request, urls.GETPLAYLIST, 'u.y.qq.com')
}
