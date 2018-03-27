// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'; // vue에서 axios를 사용하기 위한 모듈
import axios from './customAxios.js';
import VueMoment from 'vue-moment'
require('moment/locale/ko')


import MainFooter from '@/components/common/MainFooter.vue';


Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(VueMoment)


Vue.component('main-footer', MainFooter)  // 전역 컴포넌트

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },  // 지역 컴포넌트
  template: '<App/>'
})
