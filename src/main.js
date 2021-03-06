import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import Vue2Filters from "vue2-filters";


Vue.use(Vue2Filters)

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "" : "/";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
