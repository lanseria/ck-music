<template>
  <slide-box v-if="songList.length>0&&typeInfo.length>0" :data="songList" :menu="menu" :typeId="typeId" @selectList="selectList">
    <div class="songlist-wrapper">
      <div class="song-list" v-if="newSongListOfArray.length>0" v-for="(musicList, index) in newSongListOfArray" :key="index">
        <div class="song-item" v-for="(song, ind) in musicList" :key="ind">
          <div class="cover">
            <img v-lazy="`//y.gtimg.cn/music/photo_new/T002R90x90M000${song.album.mid}.jpg?max_age=2592000`" :alt="song.album.name">
          </div>
          <div class="desc">
            <div class="songname"><a :href="`//y.qq.com/n/yqq/song/${song.mid}.html#stat=y_new.index.new_song.songname`">{{song.name}}</a></div>
            <div class="singer"><a :href="`//y.qq.com/n/yqq/singer/${song.singer[0].mid}.html#stat=y_new.index.new_song.singername`">{{song.singer[0].name}}</a></div>
          </div>
          <div class="intervel">{{format(song.interval)}}</div>
        </div>
      </div>
    </div>
  </slide-box>
</template>

<script>
import _ from 'lodash'
import SlideBox from 'base/slide-box/slide-box'
import reqData from '@/api/newsong.json'
import { ERR_OK } from '@/api/config'
import { getPlaylist } from '@/api/getplaylist'
import { createSong } from '@/common/js/song.js'
import { formatInterval } from '@/common/js/util.js'
export default {
  props: {
    typeId: {
      type: Number,
      default: 0
    },
    typeInfo: {
      type: Array,
      default: []
    },
    songList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      playlist: this.songList
    }
  },
  computed: {
    newSongListOfArray () {
      const playlist = this.playlist.map(m => createSong(m))
      return _.chunk(playlist, 9).slice(0, 4)
    },
    menu () {
      // {"comm":{"ct":24},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":2}}}
      // {"comm":{"ct":24},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":3}}}
      if (this.typeInfo.length > 0) {
        let newMenu = []
        let items = this.typeInfo.slice()
        items.forEach((item) => {
          newMenu.push(this._getMenuItem(item.id, item.title))
        })
        return newMenu
      } else {
        return []
      }
    }
  },
  methods: {
    format (interval) {
      return formatInterval(interval)
    },
    selectList (index) {
      console.log(index)
      if (index === 0) {
        this.playlist = this.songList
        return
      }
      getPlaylist(this.menu[index].reqData).then(res => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.playlist = res.new_song.data.song_list.slice(0, 40).map(p => {
            return createSong(p)
          })
        }
      })
    },
    _getMenuItem (id, name) {
      let req = _.cloneDeep(reqData)
      req.new_song.param.type = id
      return {
        name: name,
        reqData: req
      }
    }
  },
  components: {
    SlideBox
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.songlist-wrapper
  display flex
  width 4920px
  .song-list
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-auto-rows 111px
    width 1200px
    .song-item
      display flex
      margin-bottom 20px
      .cover
        flex 0 0 86px
        cursor pointer
      .desc
        flex 1
        padding-left 20px
        font-size 15px
        .songname
          display table-cell
          vertical-align bottom
          height 43px
          padding-bottom 3px
          a
            color $color-text
          a:hover
            color $color-theme
        .singer
          padding-top 3px
          height 43px
          a
            color $color-text-l
          a:hover
            color $color-theme
      .intervel
        font-family poppin
        flex 0 0 55px
        color $color-text-l
        align-self: center;
        font-size 15px
</style>

