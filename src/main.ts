import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import VueWave from 'v-wave';

import App from './App.vue';
import router from './router';

import './assets/css/index.css';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);

Vue.use(VueWave, {
  directive: 'ripple',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
