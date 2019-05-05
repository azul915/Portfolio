import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA5_D_dL7RQwEcF54RVRx2BPu7YM02GqsA",
    authDomain: "portfolio-a1232.firebaseapp.com",
    databaseURL: "https://portfolio-a1232.firebaseio.com",
    projectId: "portfolio-a1232",
    storageBucket: "portfolio-a1232.appspot.com",
    messagingSenderId: "94342147702"
};
firebase.initializeApp(config);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')