import Vue from 'vue'
import Router from 'vue-router'
import MHeader from 'components/m-header/m-header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'm-header',
      component: MHeader
    }
  ]
})
