import Vue from 'vue'
import App from './App'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/bootstrap-3.3.7-dist/js/bootstrap.min.js'
import './components/login.vue'
// 引入router路由
import Router from 'vue-router'

/*

import introduce from './components/introduce'
import home from './components/home'
import employment from './components/employment'
import consult from './components/consult.vue'

// 使用router
Vue.use(Router)
// 定义路由
var routes = [{
  path: '/home',
  component: home
}, {
  path: '/introduce',
  component: introduce
},
  {
  path: '/employment',
  component: employment
}, {
  path: '/consult',
  component: consult
}]
// 实例化路由
var vueRouter = new Router({
  routes
})
*/
// 创建和挂载根实例
new Vue({
  el: '#app',
  template: '<App></App>',
  components: { App }
})


