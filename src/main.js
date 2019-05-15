import Vue from 'vue'
import App from './App.vue'

import Button from 'vant/lib/button';
import 'vant/lib/button/style';
import { Tabbar, TabbarItem } from 'vant';

Vue.config.productionTip = false;

Vue.use(Button);

Vue.use(Tabbar).use(TabbarItem);
new Vue({
  render: h => h(App),
}).$mount('#app')
