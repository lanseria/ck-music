import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
/* eslint-disable no-unused-vars */
import jsondata from './data_params.json'

/**
 * callback:recom6971324609346656
g_tk:5381
jsonpCallback:recom6971324609346656
loginUin:0
hostUin:0
format:jsonp
inCharset:utf8
outCharset:utf-8
notice:0
platform:yqq
needNewCode:0
data:{"comm":{"ct":24},"playlist":{"method":"get_playlist_by_category","param":{"id":161,"curPage":1,"size":40,"order":5,"titleid":161},"module":"playlist.PlayListPlazaServer"}}
 */

export function getPlaylist (reqData) {
  let reqdata = reqData === undefined ? jsondata : reqData
  const url = 'https://qqmusicapi.limonplayer.cn/api/getPlaylist'
  const data = Object.assign({}, commonParams, {
    needNewCode: 0,
    platform: 'yqq',
    hostUin: 0,
    data: JSON.stringify(reqdata)
  })
  return jsonp(url, data, options)
}
