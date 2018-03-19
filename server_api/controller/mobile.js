const config = require('../config')
const { convertJsonp, FixJsonp } = require('../utils/jsonpTools')
const { urls } = config


exports.lyric = async function (ctx) {
  const { request } = ctx
  ctx.body = await convertJsonp(request, urls.LYRIC)
}

exports.getDiscSongs = async function (ctx) {
  const { request } = ctx
  ctx.body = await convertJsonp(request, urls.GETDISCSONGS)
}

exports.getRecomList = async function (ctx) {
  const { request } = ctx
  ctx.body = await FixJsonp(request, urls.GETRECOMLIST)
}

exports.getHotKey = async function (ctx) {
  const { request } = ctx
  ctx.body = await FixJsonp(request, urls.GETHOTKEY)
}

exports.search = async function (ctx) {
  const { request } = ctx
  ctx.body = await FixJsonp(request, urls.SEARCH)
}

exports.getTopListSongs = async function (ctx) {
  const { request } = ctx
  ctx.body = await FixJsonp(request, urls.GETTOPLISTSONGS)
}

exports.getTopList = async function (ctx) {
  const { request } = ctx
  ctx.body = await FixJsonp(request, urls.GETTOPLIST)
}

exports.getSingerSongs = async function (ctx) {
  const { request } = ctx
  ctx.body = await FixJsonp(request, urls.GETSINGERSONGS)
}

exports.getHotSingers = async function (ctx) {
  const { request } = ctx
  ctx.body = await FixJsonp(request, urls.GETHOTSINGERS)
}

exports.getDiscList = async function (ctx) {
  const { request } = ctx
  ctx.body = await FixJsonp(request, urls.GETDISCLIST)
}
