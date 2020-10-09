// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueBus from 'vue-bus';

import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.use(VueBus);
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

axios.defaults.baseURL = "http://localhost:8099/" 
//添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  
  if(localStorage.getItem('token')){
      config.headers.common['Authorization'] = localStorage.getItem('token');
  }
  config.headers['content-type'] = 'application/json;charset=utf-8';
  return config;
}, function (error) {
  return Promise.reject(error);
});
//添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});