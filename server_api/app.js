const got = require('got')
const express = require('express')
const config = require('./config')
const { port, urls } = config
const app = express()
const apiRouters = express.Router()

apiRouters.get('/getPlaylist', function (req, res) {
  got.get(urls.GETPLAYLIST, {
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
  got.get(urls.GETDISCLIST, {
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
  got.get(urls.GETDISCSONGS, {
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
  got.get(urls.GETTOPLIST, {
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
  got.get(urls.SEARCH, {
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
  got.get(urls.LYRIC, {
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
app.use('/api', apiRouters)

module.exports = app

app.listen(port, function() {
  console.log(`app is listening at port ${port}\nQQ音乐API转发服务已开启`)
})
