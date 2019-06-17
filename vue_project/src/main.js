// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import Vant from 'vant'
import 'vant/lib/index.css';
import { Lazyload } from 'vant';

// 调用接口api
import * as api from './api'
Vue.prototype.$api = api;
//获取小说 api
Vue.prototype.$novel_url = 'https://api.langpz.com/';
Vue.config.productionTip = false

Vue.use(Vant)
// options 为可选参数，无则不传
Vue.use(Lazyload,{
    error: 'static/img/loading_img.png',
    loading: 'static/img/loading_img.png',
    attempt: 3
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
