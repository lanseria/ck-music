<template>
  <slide-box v-if="songList.length>0&&typeInfo.length>0" :data="songList" :menu="menu" :typeId="typeId" @selectList="selectList">
    
  </slide-box>
</template>

<script>
import _ from 'lodash'
import SlideBox from 'base/slide-box/slide-box'
import reqData from '@/api/recomm.json'
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
  computed: {
    menu () {
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
    _getMenuItem (id, name) {
      let req = _.cloneDeep(reqData.new_song)
      req.new_album.param.type = id
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

</style>

