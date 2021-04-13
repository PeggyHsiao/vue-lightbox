import Vue from 'vue';
import Lazyload from 'vue-lazyload';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Lazyload);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
