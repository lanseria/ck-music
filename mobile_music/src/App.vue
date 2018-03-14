<template>
  <div id="app">
    <m-header class="sub-wrapper"></m-header>
    <tab class="sub-wrapper"></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  components: {
    MHeader,
    Tab,
    Player
  },
  mounted () {
    document.addEventListener('touchmove', e => e.preventDefault(), {passive: false})
  }
}
</script>


<style lang="stylus" scoped>
#app 
  -webkit-overflow-scrolling: touch;
.sub-wrapper
  height: 100%;
  overflow: auto;
</style>

