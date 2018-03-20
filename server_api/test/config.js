const commonConfig = {
  g_tk: 565977716,
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'json',
  callback: '__jp0'
}
module.exports = {
  getDiscList: {
    ...commonConfig,
    platform: 'yqq',
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: 0.44892048645947713
  },
  getRecomList: {
    ...commonConfig,
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  },
  getHotSingers: {
    ...commonConfig,
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  },
  getDiscSongs: {
    ...commonConfig,
    platform: 'yqq',
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid: 3770704798,
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    type: 1,
  },
  getSingerSongs: {
    ...commonConfig,
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    begin: 0,
    num: 30,
    songstatus: 1,
    singermid: '002J4UUk29y8BY',
    order: 'listen'
  },
  getTopList: {
    ...commonConfig,
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  },
  getTopListSongs: {
    ...commonConfig,
    platform: 'h5',
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: 4,
    needNewCode: 1,
  },
  getHotKey: {
    ...commonConfig,
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  },
  lyric: {
    ...commonConfig,
    songmid: '001J5QJL1pRQYB',
    pcachetime: 1521524372340,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  },
  getPlaylist: {
    ...commonConfig,
    needNewCode: 0,
    platform: 'yqq',
    hostUin: 0,
    data: '{ "comm": { "ct": 24 }, "category": { "method": "get_hot_category", "param": { "qq": "" }, "module": "music.web_category_svr" }, "recomPlaylist": { "method": "get_hot_recommend", "param": { "async": 1, "cmd": 2 }, "module": "playlist.HotRecommendServer" }, "playlist": { "method": "get_playlist_by_category", "param": { "id": 8, "curPage": 1, "size": 40, "order": 5, "titleid": 8 }, "module": "playlist.PlayListPlazaServer" }, "new_song": { "module": "QQMusic.MusichallServer", "method": "GetNewSong", "param": { "type": 0 } }, "new_album": { "module": "QQMusic.MusichallServer", "method": "GetNewAlbum", "param": { "type": 0, "category": "-1", "genre": 0, "year": 1, "company": -1, "sort": 1, "start": 0, "end": 39 } }, "toplist": { "module": "music.web_toplist_svr", "method": "get_toplist_index", "param": {} }, "focus": { "module": "QQMusic.MusichallServer", "method": "GetFocus", "param": {} } }'
  }
}
