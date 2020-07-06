import Vue from 'vue'
import App from './App'
import { http } from './util/http.js'


Vue.prototype.$http = http;
Vue.config.productionTiputil = false

Vue.filter('formatDate',(date)=>{
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2,0)
	const day = nDate.getDay().toString().padStart(2,0)
	return year+'-'+month+'-'+day
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
