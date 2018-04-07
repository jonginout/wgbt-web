// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'; // vue에서 axios를 사용하기 위한 모듈
import axios from './customAxios.js';
import VueMoment from 'vue-moment'
require('moment/locale/ko')

import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//https://getbootstrap.com/docs/4.0/examples/ 부트스트랩 4버젼을 사용해야함 꼮

import MainFooter from '@/components/common/MainFooter.vue';
import MainHeader from '@/components/common/MainHeader.vue';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(VueMoment)


Vue.component('main-footer', MainFooter)  // 전역 컴포넌트
Vue.component('main-header', MainHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },  // 지역 컴포넌트
  template: '<App/>'
})
