import Vue from 'vue'
import App from './App'
import { http } from './util/http.js'

Vue.prototype.$http = http;
Vue.config.productionTiputil = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
