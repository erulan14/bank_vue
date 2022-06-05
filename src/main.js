import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(router);
app.use(store);
app.use(VueAxios, axios)
app.mount('#app');
