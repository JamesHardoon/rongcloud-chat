import Vue from 'vue'
import App from './App.vue'
import rongyun from '@/assets/rongyun/RongIMLib-2.4.0.min.js'
// import * as RongIMLib from '@rongcloud/imlib-next';

// Vue.use(RongIMLib);
Vue.config.productionTip = false

// Vue.prototype.RongIMLib = RongIMLib
Vue.prototype.rongyun = rongyun

new Vue({
  render: h => h(App),
}).$mount('#app')
