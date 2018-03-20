exports.jsonpMethod1 = function (err, res) {
  if (err) {
    return done(err)
  }
  const ret = res.text
  return JSON.parse(ret)
}
exports.jsonpMethod2 = function (err, res) {
  if (err) {
    return done(err)
  }
  let str = res.text
  str = str.substr(1)
  str = str.substring(0, str.length - 1)
  const reg = /^\w+\(({[^]+})\)$/
  const matches = str.match(reg)
  if (matches) {
    return JSON.parse(matches[1])
  } else {
    return new Error('not matches!')
  }
}