# CK-MUSIC

> > Music player catch qq music api [QQMusic & QQMusic h5](https://y.qq.com) 效果页: [QQ-Music-Demo](http://qqmusic.limonplayer.cn/#/recommend)

## 简介

## tech stack

```
    "axios": "^0.17.1",
    "babel-runtime": "^6.26.0",
    "better-scroll": "^1.5.4",
    "create-keyframe-animation": "^0.1.0",
    "fastclick": "^1.0.6",
    "good-storage": "^1.0.1",
    "js-base64": "^2.4.0",
    "jsonp": "^0.2.1",
    "lyric-parser": "^1.0.1",
    "vue": "^2.5.2",
    "vue-lazyload": "^1.1.4",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1"
```

## capture

Player Show:
![song-page](./docs/img/player-surface-ip6p.png)

## 使用说明

### 配置

- 为了不占用重复的端口
- 端口设置目前为 `mobile_music` : `7990`
- 端口设置目前为 `web_music` : `7991`
- 端口设置目前为 `server_api` : `7992`

### 安装

可以参考根目录的 `.gitlab-ci.yml` 文件

```bash
# 首先是需要启动api转发服务的，不然本地调试会不成功
cd server_api
yarn
yarn dev
# 第二步可以直接去调试前端vue了，先进mobile手机端的还是webPC端的都可以
cd ../web_music
yarn
yarn dev

cd ../mobile_music
yarn
yarn dev

```

### 部署（需要更多的技术能力）

```bash
# 首先是需要部署api转发服务
cd server_api
yarn
# 这里需要安装pm2插件
pm2 start app.js
# 第二步可以直接去 build 前端vue了，先进mobile手机端的还是webPC端的都可以
# 这里默认没有修改，所以直接的利用的我服务器转发，有必要可以修改/src/api/config.js文件
cd ../web_music
yarn
yarn build
放在 nginx 或者 apache 都可以

cd ../mobile_music
yarn
yarn build
放在 nginx 或者 apache 都可以
```
## package history

bata v1.2 2017-12-7

- 利用新的脚手架工具与模板

```
                                                  Asset       Size  Chunks                    Chunk Names
    static/css/app.f3e5b7b10a9d2aed3b15c37bbc255dbe.css     105 kB      10  [emitted]         app
                    static/img/no-result@3x.2858208.png    12.7 kB          [emitted]
                    static/js/0.47f40e31f69679dfdada.js    9.02 kB       0  [emitted]         vendor-async
                    static/js/1.6b9c57e60c33856e8894.js    11.1 kB       1  [emitted]
                    static/js/2.66344b8365df9dc663d8.js    12.8 kB       2  [emitted]
                    static/js/3.c9e6aa8e3ab1ba3a46bf.js    2.73 kB       3  [emitted]
                    static/js/4.872a638488966f730af6.js    2.79 kB       4  [emitted]
                    static/js/5.6f31c91dfc0b57da06ee.js    6.12 kB       5  [emitted]
                    static/js/6.623a0b492b4df2e47506.js    2.67 kB       6  [emitted]
                    static/js/7.aa25d30ad452f868261c.js    7.68 kB       7  [emitted]
                    static/js/8.d506955a57094a9770e9.js    7.55 kB       8  [emitted]
               static/js/vendor.866911bbec3f8a2dd106.js     323 kB       9  [emitted]  [big]  vendor
                  static/js/app.2dd84c67b76fb15be40d.js    54.6 kB      10  [emitted]         app
             static/js/manifest.306d5e1dc60bbdd7e437.js    1.71 kB      11  [emitted]         manifest
                      static/img/music-icon.8a34857.svg    26.9 kB          [emitted]
static/css/app.f3e5b7b10a9d2aed3b15c37bbc255dbe.css.map     123 kB          [emitted]
                static/js/0.47f40e31f69679dfdada.js.map      21 kB       0  [emitted]         vendor-async
                static/js/1.6b9c57e60c33856e8894.js.map    32.2 kB       1  [emitted]
                static/js/2.66344b8365df9dc663d8.js.map    33.6 kB       2  [emitted]
                static/js/3.c9e6aa8e3ab1ba3a46bf.js.map    11.4 kB       3  [emitted]
                static/js/4.872a638488966f730af6.js.map    11.3 kB       4  [emitted]
                static/js/5.6f31c91dfc0b57da06ee.js.map    16.4 kB       5  [emitted]
                static/js/6.623a0b492b4df2e47506.js.map    10.6 kB       6  [emitted]
                static/js/7.aa25d30ad452f868261c.js.map    18.9 kB       7  [emitted]
                static/js/8.d506955a57094a9770e9.js.map    18.3 kB       8  [emitted]
           static/js/vendor.866911bbec3f8a2dd106.js.map    1.45 MB       9  [emitted]         vendor
              static/js/app.2dd84c67b76fb15be40d.js.map     192 kB      10  [emitted]         app
         static/js/manifest.306d5e1dc60bbdd7e437.js.map    8.23 kB      11  [emitted]         manifest
                                             index.html  510 bytes          [emitted]
```

beta v1.1 2017-09-30

- 新增分离加载模式

```
                                                  Asset       Size  Chunks                    Chunk Names
    static/css/app.27f7272448f46503382957adb7931cf8.css     105 kB       9  [emitted]         app
                      static/img/music-icon.8a34857.svg    26.9 kB          [emitted]
                    static/js/0.9bc91d5556676311fb28.js    11.4 kB       0  [emitted]
                    static/js/1.3db85114ec0f483a5ec9.js      11 kB       1  [emitted]
                    static/js/2.e4ccdc1ed21d234d8968.js    11.5 kB       2  [emitted]
                    static/js/3.8984c1c85f69228ee57a.js    12.6 kB       3  [emitted]
                    static/js/4.4de65be002794bfb2bec.js    11.4 kB       4  [emitted]
                    static/js/5.39afceea1955dc0c4581.js    5.94 kB       5  [emitted]
                    static/js/6.aa61d9666805616b552a.js    7.25 kB       6  [emitted]
                    static/js/7.395dd5e04a849f475dea.js    7.47 kB       7  [emitted]
               static/js/vendor.42fbf1d9ca35b3456b53.js     319 kB       8  [emitted]  [big]  vendor
                  static/js/app.2d5acc2250d26ad07565.js      58 kB       9  [emitted]         app
             static/js/manifest.a806642974a12440fe4c.js    1.71 kB      10  [emitted]         manifest
                    static/img/no-result@3x.2858208.png    12.7 kB          [emitted]
                static/js/0.9bc91d5556676311fb28.js.map    58.9 kB       0  [emitted]
                static/js/1.3db85114ec0f483a5ec9.js.map    60.1 kB       1  [emitted]
                static/js/2.e4ccdc1ed21d234d8968.js.map    59.2 kB       2  [emitted]
                static/js/3.8984c1c85f69228ee57a.js.map    61.4 kB       3  [emitted]
                static/js/4.4de65be002794bfb2bec.js.map    57.6 kB       4  [emitted]
                static/js/5.39afceea1955dc0c4581.js.map    30.1 kB       5  [emitted]
                static/js/6.aa61d9666805616b552a.js.map    32.2 kB       6  [emitted]
                static/js/7.395dd5e04a849f475dea.js.map    33.5 kB       7  [emitted]
           static/js/vendor.42fbf1d9ca35b3456b53.js.map    2.35 MB       8  [emitted]         vendor
              static/js/app.2d5acc2250d26ad07565.js.map     376 kB       9  [emitted]         app
static/css/app.27f7272448f46503382957adb7931cf8.css.map    47.5 kB       9  [emitted]         app
         static/js/manifest.a806642974a12440fe4c.js.map    15.2 kB      10  [emitted]         manifest
                                             index.html  671 bytes          [emitted]
```

beta v1.0 2017-09-30
```
 Asset       Size  Chunks                    Chunk Names
    static/css/app.f45d6b708d8b6a86b999a271f4c53171.css     115 kB       1  [emitted]         app
                      static/img/music-icon.8a34857.svg    26.9 kB          [emitted]
               static/js/vendor.46fba2bccd9e6c85af21.js     319 kB       0  [emitted]  [big]  vendor
                  static/js/app.dc61fbc411ddba4d79c9.js    82.5 kB       1  [emitted]         app
             static/js/manifest.e296e37959a308331ea1.js    1.51 kB       2  [emitted]         manifest
                    static/img/no-result@3x.2858208.png    12.7 kB          [emitted]
           static/js/vendor.46fba2bccd9e6c85af21.js.map    2.35 MB       0  [emitted]         vendor
              static/js/app.dc61fbc411ddba4d79c9.js.map     571 kB       1  [emitted]         app
static/css/app.f45d6b708d8b6a86b999a271f4c53171.css.map    65.5 kB       1  [emitted]         app
         static/js/manifest.e296e37959a308331ea1.js.map    14.6 kB       2  [emitted]         manifest
                                             index.html  671 bytes          [emitted]
```