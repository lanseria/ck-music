import axios from 'axios'
import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'
/**
 * g_tk:5381
 * uin:0
 * format:json
 * inCharset:utf-8
 * outCharset:utf-8
 * notice:0
 * platform:h5
 * needNewCode:1
 * _:1505987976490
 */
export function getRecommend () {
  const url = '//c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
/**
 * rnd:0.5760357391443924
 * g_tk:182355749
 * jsonpCallback:getPlaylist
 * loginUin:0
 * hostUin:0
 * format:jsonp
 * inCharset:utf8
 * outCharset:utf-8
 * notice:0
 * platform:yqq
 * needNewCode:0
 * categoryId:10000000
 * sortId:5
 * sin:0
 * ein:29
 */
export function getDiscList () {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random()
  })

  return axios(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
/**
 * type:1
 * json:1
 * utf8:1
 * onlysong:0
 * disstid:3574799809
 * format:jsonp
 * g_tk:182355749
 * jsonpCallback:playlistinfoCallback
 * loginUin:0
 * hostUin:0
 * format:jsonp
 * inCharset:utf8
 * outCharset:utf-8
 * notice:0
 * platform:yqq
 * needNewCode:0
 */
export function getSongList (dissid) {
  const url = '/api/getDiscSongs'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid: dissid,
    format: 'jsonp',
    g_tk: 182355749,
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    needNewCode: 0,
    type: 1
  })

  return axios(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
