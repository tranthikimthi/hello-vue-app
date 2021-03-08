import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import { ActionTypes } from './store/constanst/auth.const';
import i18n from '@/locales/i18n'

const firebaseConfig = {
    apiKey: "AIzaSyCZeO5gVVRFJa9lhisxxZ5LPsOfn4IzkEE",
    authDomain: "hello-vue-app-dfa2d.firebaseapp.com",
    projectId: "hello-vue-app-dfa2d",
    storageBucket: "hello-vue-app-dfa2d.appspot.com",
    messagingSenderId: "689803706010",
    appId: "1:689803706010:web:78bddf805fe39731f36923"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    store.dispatch(`auth/${ActionTypes.FETCH_USER}`, user);
});

createApp(App).use(i18n).use(store).use(router).mount('#app')
