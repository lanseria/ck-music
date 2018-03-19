const config = {
  port: 7992,
  urls: {
    GETPLAYLIST: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
    GETDISCLIST: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
    GETDISCSONGS: 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
    GETTOPLIST: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
    SEARCH: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
    LYRIC: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg',
    GETHOTSINGERS: 'http://c.y.qq.com/v8/fcg-bin/v8.fcg',
    GETSINGERSONGS: 'http://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
    GETTOPLISTSONGS: 'http://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
    GETHOTKEY: 'http://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
    GETRECOMLIST: 'http://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  }
}

exports = module.exports = config
