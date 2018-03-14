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
 * _:1506565304184
 */

export function getTopList (mid) {
  const url = '/api/getTopList'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    g_tk: 5381,
    needNewCode: 1,
    format: 'json'
  })
  return axios(url, {
    params: data
  }).then(res => {
    console.log(res.data)
    return Promise.resolve(res.data)
  })
}
/**
 * g_tk:5381
 * uin:0
 * format:json
 * inCharset:utf-8
 * outCharset:utf-8
 * notice:0
 * platform:h5
 * needNewCode:1
 * tpl:3
 * page:detail
 * type:top
 * topid:4
 * _:1506568032843
 * */
export function getMusicList (topid) {
  const url = '//c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: topid,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
