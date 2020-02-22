/*we should use axios and vue-axios both, because vue-axios only focused on the typeScript bindings for vue
  and does't include axios functionality itself-*/
import axios from 'axios';
import VueAxios from "vue-axios";
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {VueRouter} from "vue-router/types/router";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);//important, that we put use-statement before first instance of Vue for accessing to http requests in literally all components of this app

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
