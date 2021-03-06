import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import twitter from 'vue-twitter';

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "https://salty-everglades-72150.herokuapp.com" : "/";

Vue.config.productionTip = false

Vue.use(twitter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
