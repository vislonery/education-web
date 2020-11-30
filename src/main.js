import Vue from 'vue'
// import Chat from 'vue-beautiful-chat'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
import { Tabbar, TabbarItem, NavBar, Search, Card, Cell, CellGroup, ActionSheet } from 'vant';
import { Step, Steps } from 'vant';
import { Tab, Tabs } from 'vant';
import { Icon } from 'vant';
import { Popup } from 'vant';
// import { ActionSheet } from 'vant';
import { Field } from 'vant';

Vue.use(Field);
// Dialog({ message: '提示' });
Vue.use(ActionSheet);
Vue.use(Popup);
Vue.use(Icon);
Vue.use(Tab).use(Tabs);
Vue.use(Step).use(Steps);
Vue.config.productionTip = false;
Vue.use(Button);

import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
// Vue.use(Chat)
Vue.use(Cell).use(CellGroup);

Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Search).use(Card);
new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
