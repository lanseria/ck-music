<template>
  <div>
    <recom-playlist v-if="recomPlaylist" :category="category" :recomPlaylist="recomPlaylist" ref="slideBox" @selectList="getRemList"></recom-playlist>
    <new-songs-starting v-if="songList.length>0" :songList="songList" :typeInfo="typeInfo" :typeId="parseInt(1)"></new-songs-starting>
  </div>
</template>

<script>
import NewSongsStarting from 'components/new-songs-starting/new-songs-starting'
import RecomPlaylist from 'components/recom_playlist/recom_playlist'
import { getPlaylist } from '@/api/getplaylist'
import { ERR_OK } from '@/api/config'
export default {
  data () {
    return {
      musicOverview: {}, // 首屏全部数据的加载
      recomPlaylist: [], // 歌单推荐中的首屏（热门推荐的12首歌曲）
      category: {}, // 歌单推荐中的菜单，group_name为热门推荐，下面为情歌等其它分类
      typeInfo: [], // 新歌首发的菜单（不包含为你推荐），按国家分类，内地，日本，港台等等
      songList: [] // 这里只包含内地的所有歌单
    }
  },
  created () {
    this._getMusicOverview()
  },
  computed: {
  },
  methods: {
    getRemList (songlist) {
      console.log(songlist)
    },
    _getMusicOverview () {
      getPlaylist().then(res => {
        if (res.code === ERR_OK) {
          this.musicOverview = res
          this.recomPlaylist = this.musicOverview.recomPlaylist.data.v_hot
          this.category = this.musicOverview.category.data.category[0]
          this.typeInfo = this.musicOverview.new_song.data.type_info
          this.songList = this.musicOverview.new_song.data.song_list
        }
      })
    }
  },
  components: {
    RecomPlaylist,
    NewSongsStarting
  }
}
</script>

<style lang="stylus" scoped>

</style>
