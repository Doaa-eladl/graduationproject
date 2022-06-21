import { createApp } from 'vue'

import App from '@/App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import router from '@/router';
import VueAxios from 'vue-axios'
import axios from './axios'
import { createPinia } from "pinia";

import basebutton from '@/components/UI/basebutton.vue'
import basewrapper from '@/components/UI/basewrapper.vue'


const app = createApp(App)

app.config.globalProperties.auth = false;
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faEnvelope,faLocationDot,faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone,faEnvelope,faLocationDot,faSearch)

app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(VueAxios, axios)
app.use(createPinia())
app.component('base-button',basebutton)
app.component('base-wrapper',basewrapper)

app.mount('#app')