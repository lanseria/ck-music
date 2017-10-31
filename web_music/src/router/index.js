import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index/index'
import SingerList from 'pages/singer_list/singer_list'
import AlbumLib from 'pages/album_lib/album_lib'
import TopList from 'pages/top_list/top_list'
import PlayList from 'pages/play_list/play_list'
import Radio from 'pages/radio/radio'
import MvLib from 'pages/mv_lib/mv_lib'
import AlbumMall from 'pages/album_mall/album_mall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/singer_list',
      component: SingerList
    },
    {
      path: '/album_lib',
      component: AlbumLib
    },
    {
      path: '/top_list',
      component: TopList
    },
    {
      path: '/play_list',
      component: PlayList
    },
    {
      path: '/radio',
      component: Radio
    },
    {
      path: '/mv_lib',
      component: MvLib
    },
    {
      path: '/album_mall',
      component: AlbumMall
    }
  ]
})
