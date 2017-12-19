<template>
  <slide-box v-if="menu.length>0&&playlist.length>0" :data="playlist" :menu="menu" @selectList="selectList">
    <ul class="playlist-list slide-list" style="left: -0%;">
      <li class="playlist-item slide-list" v-for="(item, index) in playlist" :key="index">
        <div class="playlist-item-box">
          <div class="playlist-cover mod-cover">
            <a href="#" class="js-playlist">
              <img v-lazy="item.cover" alt="" class="playlist-pic">
              <i class="mod-cover-mask"></i>
              <i class="mod-cover-icon-play js-play"></i>
            </a>
          </div>
          <h4 class="playlist-title">
            <span class="playlist-title-txt">
              <a href="#" class="js-playlist" v-html="item.title"></a>
            </span>
          </h4>
          <div class="playlist-other">{{`播放量${item.listen_num}`}}</div>
        </div>
      </li>
    </ul>
  </slide-box>
</template>

<script>
import _ from 'lodash'
import { createPlaylist } from '@/common/js/playlist'
import { ERR_OK } from '@/api/config'
import SlideBox from 'base/slide-box/slide-box'
import reqData from '@/api/recomm.json'
import { getPlaylist } from '@/api/getplaylist'
// import assignDeep from '@/common/js/assignDeep'
export default {
  props: {
    recomPlaylist: {
      type: Array,
      default: []
    },
    category: {
      type: Object,
      default: {}
    },
    category_count: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      playlist: []
    }
  },
  computed: {
    menu () {
      if (this.category.group_id > 0) {
        let newMenu = []
        newMenu.push(this._getMenuItem(this.category.group_name))
        let items = this.category.items.slice(0, this.category_count - 1)
        items.forEach((item) => {
          newMenu.push(this._getMenuItem(item.item_name, item.item_id))
        })
        return newMenu
      } else {
        return []
      }
    }
  },
  methods: {
    selectList (index) {
      if (index === 0) {
        this.playlist = this.recomPlaylist
        return
      }
      getPlaylist(this.menu[index].reqData).then(res => {
        if (res.code === ERR_OK) {
          this.playlist = res.playlist.data.v_playlist.slice(0, 12).map(p => {
            return createPlaylist(p)
          })
        }
      })
    },
    _getMenuItem (name, id) {
      if (id === undefined) {
        return {
          name: name,
          reqData: reqData.req_data.recom
        }
      } else {
        let req = _.cloneDeep(reqData.req_data.common)
        req.playlist.param.id = id
        req.playlist.param.titleid = id
        return {
          name: name,
          reqData: req
        }
      }
    }
  },
  components: {
    SlideBox
  },
  watch: {
    recomPlaylist (newVal) {
      this.playlist = newVal
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

.playlist-list
  margin-right: -20px
  position relative
  font-size 0
  display inline-flex
  .playlist-item
    width 244px
    height 310px
    float left
    .playlist-item-box
      margin-right 20px
      font-size 14px
      .playlist-cover
        margin-bottom 15px
        .playlist-pic
          height 100%
          width 100%
          object-fit cover
    .playlist-title
      overflow hidden
      .playlist-title-txt
        float left
        max-width 100%
        font-weight 400
        overflow hidden
        text-overflow ellipsis
        line-height 22px
        max-height 44px
        a:hover
          color $color-theme
    .playlist-other
      color #999
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      height 22px
</style>

