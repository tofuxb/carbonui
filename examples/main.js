import Vue from 'vue'
import VueRouter from 'vue-router'
import fastclick from 'fastclick'
import './example.less'
import {App} from './containers'

Vue.use(VueRouter)

const router = new VueRouter()
router.map({
	'/': {
		component: App
	}
})

router.start(Vue.extend({}), '#container')

fastclick.attach(document.body)