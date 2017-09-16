import Vue from 'vue'
import Router from 'vue-router'


/*

import home from './components/home'
import consult from './components/consult'
import employment from './components/employment'
import introduce  from './components/introduce'
*/
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue/'
})


  /*routes: [{
    path: '/home',
    component: home
  }, {
    path: '/introduce',
    component: introduce
  }, {
    path: '/employment',
    component: employment
  }, {
    path: '/consult',
    component: consult
  }]
})
*/

