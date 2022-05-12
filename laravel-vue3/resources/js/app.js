require('./bootstrap');
import { createApp } from 'vue'
import router from './router';
import HelloWorld from './App.vue'

const app = createApp({})

app.component('hello-world', HelloWorld)

app.use(router).mount('#app')