<template>
  <div class="mod-header">
    <div class="section-inner">
      <h1 class="music-title">
        <a href="/"><img src="~common/image/logo.png" alt="CK音乐"></a>
      </h1>
      <ul class="mod-top-nav">
        <li class="top-nav-item"><a href="" class="top-nav-link active">音乐馆</a></li>
        <li class="top-nav-item"><a href="" class="top-nav-link">我的音乐</a></li>
        <li class="top-nav-item"><a href="" class="top-nav-link">客户端</a></li>
        <li class="top-nav-item"><a href="" class="top-nav-link">音乐号</a></li>
      </ul>
      <ul class="mod-top-subnav">
        <li class="top-subnav-item"><router-link to="/index" class="top-subnav-link">首页</router-link></li>
        <li class="top-subnav-item"><router-link to="/singer-list" class="top-subnav-link">歌手</router-link></li>
        <li class="top-subnav-item"><router-link to="/album-lib" class="top-subnav-link">专辑</router-link></li>
        <li class="top-subnav-item"><router-link to="/top-list" class="top-subnav-link">排行榜</router-link></li>
        <li class="top-subnav-item"><router-link to="/play-list" class="top-subnav-link">分类歌单</router-link></li>
        <li class="top-subnav-item"><router-link to="/radio" class="top-subnav-link">电台</router-link></li>
        <li class="top-subnav-item"><router-link to="/mv-lib" class="top-subnav-link">MV</router-link></li>
        <li class="top-subnav-item"><router-link to="/album-mall" class="top-subnav-link">数字专辑</router-link></li>
      </ul>
      <div class="mod-top-search">
        <div class="mod-search-input">
          <input type="text" class="search-input-input" placeholder="中国新歌声" />
          <button class="search-input-btn">
            <i class="icon-search"></i>
            <span class="icon-txt">搜索</span>
          </button>
        </div>
      </div>
      <div class="header-opt">
        <span class="mod-top-login">
          <a href="/" class="top-login-link">
            <img class="top-login-cover" src="http://thirdqq.qlogo.cn/g?b=sdk&k=5TQjazYkt5NEw7sLHpPcyw&s=140&t=1496725348" alt="" srcset="">
          </a>
          <a href="#" class="top-login-link"></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

.mod-header
  position relative
  z-index 4
  .section-inner
    padding-top 90px
    max-width 1200px
    margin 0 auto
    position relative
    .music-title
      position absolute
      left 0
      top 22px
    .mod-top-nav
      position absolute
      left 198px
      top 0
      .top-nav-item
        float left
        margin-right -5px
        .top-nav-link
          display block
          padding 0 20px
          line-height 90px
          height 90px
          text-align center
          font-size 18px
          &:hover
            color $color-theme
          &.active
            background-color $color-theme
            color #fff
    .mod-top-subnav
      height 51px
      line-height 51px
      border-top 1px solid $color-highlight-background
      padding-left 230px
      .top-subnav-item
        float left
        font-size 15px
        color #c1c1c1
        margin-right 47px
        .top-subnav-link
          display block
          &:hover
            color $color-theme
          &.router-link-active
            color $color-theme
    .mod-top-search
      position absolute
      top 0
      right 130px
      .mod-search-input
        border 1px solid #c9c9c9
        padding 0 33px 0 11px
        line-height 36px
        height 36px
        margin-top 26px
        position relative
        border-radius 3px
        background-color #222
        transform width .6s ease-out
        .search-input-input
          width 174px
          height 36px
          border 0 none
          font-size 14px
          background 0 0
          transition width .6s ease-out,visibility .6s 1ms ease-out
        .search-input-btn
          position absolute
          top 0
          right 0
          border 0 none
          width 38px
          height 35px
          overflow visible
          background 0 0
        .icon-search
          color #c1c1c1
          position absolute
          font-size 18px
          top 50%
          right 11px
          margin-top -8px
          width 16px
          height 16px
          background-position 0 -40px
        .icon-txt
          font 0/0 a
    .header-opt
      position absolute
      top 0
      right 0
      height 90px
      line-height 90px
      .mod-top-login
        font-size 0
        height 90px
        line-height 90px
        .top-login-link
          position relative
          font-size 16px
          float left
          width 38px
          margin-right 10px
          text-align center
          .top-login-cover
            width 38px
            height 38px
            border-radius 90px
            vertical-align -14px
</style>
