import { createApp } from 'vue'

import App from '@/App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import VueAxios from 'vue-axios'
import axios from './axios'

import basebutton from '@/components/UI/basebutton.vue'
import basewrapper from '@/components/UI/basewrapper.vue'

import router from '@/router';

const app = createApp(App)


import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()
import { createPinia } from 'pinia'
app.use(createPinia())

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faEnvelope,faLocationDot,faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone,faEnvelope,faLocationDot,faSearch)

app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(VueAxios, axios)
app.component('base-button',basebutton)
app.component('base-wrapper',basewrapper)

app.mount('#app')