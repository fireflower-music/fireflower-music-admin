import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

import App from './App.vue';
import router from './routers/index.js';
import store from './store/index.js';
import './permission'; // permission control

const myApp = createApp(App);

// console.log(import.meta.env.VITE_API_HOST);

myApp.use(router);
myApp.use(store);
if (process.env.NODE_ENV === 'development') {
  myApp.config.devtools = true;
}

myApp.use(Quasar, {
  plugins: {
    Notify
  } // import Quasar plugins and add here
});

myApp.mount('#app');
