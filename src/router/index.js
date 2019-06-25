import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/login.vue'
import register from '../pages/register/register.vue'
import index from '../pages/index/index.vue'
import TabBar from '../components/TabBar'
import order from '../pages/order'
import user from '../pages/user'
import publish from '../pages/publish'
import message from '../pages/message'
import search from '../pages/search'
import chatRoom from '../pages/message/chatRoom'
import orderDetail from '../pages/order/orderDetail';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: TabBar,
			children: [
				{
					path: '/',
					name: 'index',
					component: index
				},
				{
					path: '/user',
					name: 'user',
					component: user
				},
				{
					path: '/order',
					name: 'order',
					component: order,
				},
				{
					path: '/publish',
					name: 'publish',
					component: publish
				},
				{
					path: '/message',
					name: 'message',
					component: message,
				},

			]
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/register',
			name: 'register',
			component: register
		},
		{
			path: '/search',
			name: 'search',
			component: search
		},
		{
			path: '/order/detail/:id',
			name: 'detail',
			component: orderDetail,
		},
		{
			path: '/message/chatRoom',
			name: 'chatRoom',
			component: chatRoom
		}
	]
})
