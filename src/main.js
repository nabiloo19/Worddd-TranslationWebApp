import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import vueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(vueResource);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
