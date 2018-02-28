<template>
  <div class="slide-box">
    <div class="section-inner">
      <div class="index-hd">
        <h2 class="index-title" :style="position">
          <i class="icon-txt">歌单推荐</i>
        </h2>
      </div>
      <div class="mod-index-tab">
        <a v-for="(item, index) in menu" :key="index" href="javascript:;" class="index-tab-item" :class="{'active':currentIndex===index}" @click="switchlist(index)">{{item.name}}</a>
      </div>
      <div class="mod-playlist mod-slide" v-if="data.length>0">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    typeId: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: []
    },
    menu: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    position () {
      const arr = [0, '-150px']
      return {
        backgroundPosition: `0 ${arr[this.typeId]}`
      }
    }
  },
  methods: {
    switchlist (index) {
      this.currentIndex = index
      this.$emit('selectList', this.currentIndex)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.slide-box
  height 532px;
  background linear-gradient(top, #4c4c4c, #222)
  .section-inner
    max-width 1200px
    margin 0 auto
    z-index 2
    overflow hidden
    @media screen and (max-width: 1240px)
      min-width 900px
      margin 0 50px
    .index-hd
      position relative
      padding-top 4.16667%
      padding-bottom 2%
      .index-title
        display block
        margin 0 auto
        width 196px
        height 40px
        background-image url('index_tit.png')
        .icon-txt
          font 0/0 a
    .mod-index-tab
      height 50px
      text-align center
      .index-tab-item
        display inline-block
        font-size 15px
        margin 0 24px
        cursor pointer
        &.active
          color $color-theme
        &:hover
          color $color-theme
    .mod-playlist
      margin-bottom 20px
.mod-slide
  overflow-x scroll
  margin-bottom 20px
  font-size 0
</style>
