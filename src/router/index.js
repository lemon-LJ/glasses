import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductDetails from '../view/ProductDetails.vue'
import Home from '../view/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
		// mode:'history',
		routes:[
	       { path: '/product/:id',component:ProductDetails },
	       { path: '/',component:Home }
		]
});

