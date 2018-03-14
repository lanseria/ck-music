var got = require('got')
var express = require('express')

var port = 7992

var app = express()
var apiRouters = express.Router()

// apiRouters.get('/musicUrl', function (req, res) {
//   var url = `http://isure.stream.qqmusic.qq.com/C100${req.query.songmid}.m4a?fromtag=32`
//   got.get(url, {
//     headers: {
//       referer: 'https://u.y.qq.com',
//       host: 'u.y.qq.com'
//     }
//   }).then((response) => {
//     res.send(response.body)
//   }).catch(e => {
//     console.log(e)
//   })
// })

apiRouters.get('/getPlaylist', function (req, res) {
  var url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  got.get(url, {
    headers: {
      referer: 'https://u.y.qq.com',
      host: 'u.y.qq.com'
    },
    query: req.query
  }).then((response) => {
    res.send(response.body)
  }).catch(e => {
    console.log(e)
  })
})

apiRouters.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  got.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    query: req.query
  }).then((response) => {
    res.send(response.body)
  }).catch(e => {
    console.log(e)
  })
})
apiRouters.get('/getDiscSongs', function (req, res) {
  var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  got.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    query: req.query
  }).then((response) => {
    var ret = response.body
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.send(JSON.stringify(ret))
  }).catch(e => {
    console.log(e)
  })
})
apiRouters.get('/getTopList', function (req, res) {
  var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  got.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    query: req.query
  }).then((response) => {
    res.send(response.body)
  }).catch(e => {
    console.log(e)
  })
})
apiRouters.get('/search', function (req, res) {
  var url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  got.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    query: req.query
  }).then((response) => {
    res.send(response.body)
  }).catch(e => {
    console.log(e)
  })
})
apiRouters.get('/lyric', function (req, res) {
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
  got.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    query: req.query
  }).then((response) => {
    // res.send(response.body)
    var ret = response.body
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.send(JSON.stringify(ret))
  }).catch(e => {
    console.log(e)
  })
})
app.use('/api', apiRouters)

module.exports = app

app.listen(port, function() {
  console.log(`app is listening at port ${port}\nQQ音乐API转发服务已开启`)
})
