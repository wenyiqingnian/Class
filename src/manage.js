/**
 * Created by MaliT on 2017/9/15.
 */
/**
 * Created by MaliT on 2017/9/15.
 */
import Vue from 'vue'
import manage from './components/manage.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app1',
  render: h => h(manage)
})



Vue.prototype.changeIndex = function (){
  window.open('./manage.html')
}
