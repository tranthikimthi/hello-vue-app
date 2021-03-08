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
    apiKey: "AIzaSyCJ8TKAR1RNhUVkXcB9C5H4ULmcKN_uLNo",
    authDomain: "hello-vue-app.firebaseapp.com",
    projectId: "hello-vue-app",
    storageBucket: "hello-vue-app.appspot.com",
    messagingSenderId: "1053247288496",
    appId: "1:1053247288496:web:5d2f94269a8a4432e1b775",
    measurementId: "G-48VK2F0WMK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    store.dispatch(`auth/${ActionTypes.FETCH_USER}`, user);
});

createApp(App).use(i18n).use(store).use(router).mount('#app')
