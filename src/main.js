import Vue from 'vue';
import App from './App.vue';

import Home from './Components/Home.vue';

Vue.component('Home', Home);

new Vue({
  el: '#app',
  render: h => h(App)
});
