<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text" @click="redirect">Chicken Music</h1>
    <router-link to="/user" class="mine" tag="div">
      <i class="icon-mine"></i>
    </router-link>
    <confirm ref="github" :text="text" :confirmBtnText="confirmBtnText" @confirm="linkto"></confirm>
  </div>
</template>

<script>
import Confirm from '@/base/confirm/confirm'
export default {
  data () {
    return {
      text: '关于本人可以访问GitHub地址',
      confirmBtnText: '访问'
    }
  },
  methods: {
    linkto () {
      window.location.href = '//github.com/Lanseria'
    },
    redirect () {
      this.$refs.github.show()
    }
  },
  components: {
    Confirm
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>