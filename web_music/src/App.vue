<template>
  <div id="app">
    <mod-header></mod-header>
    <router-view></router-view>
  </div>
</template>

<script>
import ModHeader from '@/components/mod-header/mod-header'
export default {
  components: {
    ModHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>

