import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = (resolve) => require(['@/components/recommend/recommend'], resolve)
const Singer = (resolve) => require(['@/components/singer/singer'], resolve)
const SingerDetail = (resolve) => require(['@/components/singer-detail/singer-detail'], resolve)
const Rank = (resolve) => require(['@/components/rank/rank'], resolve)
const Search = (resolve) => require(['@/components/search/search'], resolve)
const Disc = (resolve) => require(['@/components/disc/disc'], resolve)
const TopList = (resolve) => require(['@/components/top-list/top-list'], resolve)
const UserCenter = (resolve) => require(['@/components/user-center/user-center'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
