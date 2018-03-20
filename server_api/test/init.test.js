var app = require('../app')
var expect = require('chai').expect
var supertest = require('supertest')
var request = supertest(app)

describe('最初API转发接口测试', function () {
  it('/getDiscList接口测试', function (done) {
    this.timeout(15000);
    request
    .get('/getDiscList')
    .query({
      g_tk: 5381,
      inCharset: 'utf8',
      outCharset: 'utf-8',
      notice: 0,
      format: 'json',
      platform: 'yqq',
      sin: 0,
      ein: 29,
      sortId: 5,
      needNewCode: 0,
      categoryId: 10000000,
      rnd: 0.44892048645947713,
      jsonpCallback: '__jp1'
    })
    .expect(200)
    .end((err, res) => {
      if (err) {
        return done(err)
      }
      var ret = res.text
      var reg = /^\w+\(({[^]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
        expect(ret.code).to.equal(0)
      }
      done()
    })
  })
})
