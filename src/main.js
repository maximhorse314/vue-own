import Vue from 'vue';
import App from './App.vue';

import ApiService from './common/api.service'

import router from './router';
import store from './store';

ApiService.init();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')