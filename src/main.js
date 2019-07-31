import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import 'bulma/css/bulma.min.css';

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
