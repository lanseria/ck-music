import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'
/**
 * channel:singer
 * page:list
 * key:all_all_all
 * pagesize:100
 * pagenum:1
 * g_tk:565977716
 * jsonpCallback:GetSingerListCallback
 * loginUin:564265135
 * hostUin:0
 * format:jsonp
 * inCharset:utf8
 * outCharset:utf-8
 * notice:0
 * platform:yqq
 * needNewCode:0
 */
export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 565977716
  })
  return jsonp(url, data, options)
}
/**
 * g_tk:1449671914
 * jsonpCallback:MusicJsonCallbacksinger_track
 * loginUin:564265135
 * hostUin:0
 * format:jsonp
 * inCharset:utf8
 * outCharset:utf-8
 * notice:0
 * platform:yqq
 * needNewCode:0
 * singermid:002J4UUk29y8BY
 * order:listen
 * begin:0
 * num:30
 * songstatus:1
 * @param {*} singerId
 */
// https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=182355749&jsonpCallback=MusicJsonCallbacksinger_track&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=002J4UUk29y8BY&order=listen&begin=0&num=30&songstatus=1
export function getSingerDetail (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 182355749,
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    begin: 0,
    num: 30,
    songstatus: 1,
    singermid: singerId,
    order: 'listen'
  })
  return jsonp(url, data, options)
}
