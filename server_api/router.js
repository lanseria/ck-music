const Router = require('koa-router')
const pcController = require('./controller/pc')
const mobileController = require('./controller/mobile')
const router = new Router()
console.log(pcController.getPlaylist)
/**
 * pc 页通用获取歌单接口
 */
router.get('/getPlaylist', pcController.getPlaylist)
/**
 * mobile 页上面广告加载
 */
router.get('/getRecomList', mobileController.getRecomList)
/**
 * mobile 页首页加载推荐列表接口
 */
router.get('/getDiscList', mobileController.getDiscList)
/**
 * mobile 页获取推荐歌单中歌曲接口
 */
router.get('/getDiscSongs', mobileController.getDiscSongs)
/**
 * mobile 页获取热门歌手接口
 */
router.get('/getHotSingers', mobileController.getHotSingers)
/**
 * mobile 页获取歌手歌曲接口
 */
router.get('/getSingerSongs', mobileController.getSingerSongs)
/**
 * mobile 页获取榜单列表接口
 */
router.get('/getTopList', mobileController.getTopList)
/**
 * mobile 页获取榜单歌曲列表接口
 */
router.get('/getTopListSongs', mobileController.getTopListSongs)
/**
 * mobile 页获取关键字搜索
 */
router.get('/search', mobileController.search)
/**
 * mobile 页获取热门搜索词
 */
router.get('/getHotKey', mobileController.getHotKey)
/**
 * mobile 页获取歌词
 */
router.get('/lyric', mobileController.lyric)

exports = module.exports = router
