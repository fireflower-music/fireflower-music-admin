import { createApp } from 'vue';
import { Quasar } from 'quasar';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

import App from './App.vue';
import router from './routers/index.js';

const myApp = createApp(App);

// console.log(import.meta.env.VITE_API_HOST);

myApp.use(router);

myApp.use(Quasar, {
  plugins: {} // import Quasar plugins and add here
});

myApp.mount('#app');
