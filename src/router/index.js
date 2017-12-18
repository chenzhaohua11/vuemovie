import Vue from 'vue'
import Router from 'vue-router'
import Hot from '../components/hot/hot.vue'
import Free from '../components/free/free.vue'
import NewMovie from '../components/newmovie/newmovie.vue'
import Classify from '../components/classify/classify.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hot'
    },
    {
      path: '/hot',
      component: Hot
    },
    {
      path: '/free',
      component: Free
    },
    {
      path: '/new',
      component: NewMovie
    },
    {
      path: '/classify',
      component: Classify
    }

  ]
})
