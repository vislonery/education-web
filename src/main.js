import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
Vue.use(Button);
new Vue({
  render: h => h(App),
}).$mount('#app')
