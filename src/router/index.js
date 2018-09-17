import Vue from 'vue'
import Router from 'vue-router'

import goods from '../components/goods/goods'
import seller from '../components/seller/seller'
import rating from '../components/rating/rating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/foo',
      component: goods
    },
    {
      path: '/bar',
      component: seller
    },
    {
      path: '/rating',
      component: rating
    }
  ],
  linkActiveClass: 'active-link'
})
