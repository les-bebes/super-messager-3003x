import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store, key } from './store';
import firebase from 'firebase'
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store, key);

const firebaseConfig = {
  apiKey: "AIzaSyCb3DbLVqsIpByIV-0pW-Sq9UVsnENgIjw",
  authDomain: "supermessager3003x.firebaseapp.com",
  projectId: "supermessager3003x",
  storageBucket: "supermessager3003x.appspot.com",
  messagingSenderId: "399097766565",
  appId: "1:399097766565:web:6b0aebc4c16e166f36234c",
  measurementId: "G-F2WTW6SY0N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  
router.isReady().then(() => {
  app.mount('#app');
});