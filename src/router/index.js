import { createRouter, createWebHistory } from 'vue-router';



import login from '@/components/pages/authentication/login.vue';
import landingpage from '@/components/pages/unauthorized/landingpage.vue';

import useraccount from '@/components/pages/user/account.vue';

import connectus from '@/components/pages/unauthorized/connectus.vue';
import donateform from '@/components/pages/unauthorized/donation-form.vue';
import volunteerform from '@/components/pages/authentication/volunteer-form.vue';
import signup from '@/components/pages/authentication/signup.vue';
import forgetpass from '@/components/pages/authentication/forgetpassword.vue';
import checkcode from '@/components/pages/authentication/checkcode.vue';
import resetpass from '@/components/pages/authentication/resetpass.vue';
import askforhelp from '@/components/pages/unauthorized/askforhelp.vue';
import vagrants from '@/components/pages/unauthorized/vagrants.vue';
import helphomeless from '@/components/pages/unauthorized/helphomeless.vue';

import homelesschildren from '@/components/pages/unauthorized/homelesschildren.vue';
import zakat from '@/components/pages/unauthorized/zakat.vue';
import awarenesslectures from '@/components/pages/unauthorized/awarenesslectures.vue';
import attendlecture from '@/components/pages/unauthorized/attendlecture.vue';
import Jobs from '@/components/pages/unauthorized/Jobs.vue';
import applyforjob from '@/components/pages/unauthorized/applyforjob.vue';
import supportedservices from '@/components/pages/unauthorized/supportedservices.vue';
import charitypage from '@/components/pages/unauthorized/charitypage.vue';
import activitydetails from '@/components/pages/unauthorized/activitydetails.vue';
import NotFound from '@/components/pages/NotFound.vue';

import whoweare from '@/components/pages/unauthorized/whoweare.vue';


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        { path: '/', name: 'home', component: landingpage },
        { path: '/login', component: login },
        { path: '/myaccount', component: useraccount },
        { path: '/connectus', component: connectus },
        { path: '/whoweare', component: whoweare },
        { path: '/donate-form/:charityid?', component: donateform },

        { path: '/volunteer-form/:charityid?', component: volunteerform },
        { path: '/signup', component: signup },
        { path: '/forgetpass', component: forgetpass },
        { path: '/checkcode/:email', component: checkcode },
        { path: '/resetpass/:email', component: resetpass },
        { path: '/askforhelp/:charityid?', component: askforhelp },
        { path: '/vagrants', component: vagrants },
        { path: '/helphomeless', component: helphomeless },
        { path: '/homelesschildren', component: homelesschildren },
        { path: '/zakat', component: zakat },
        { path: '/awarenesslectures', component: awarenesslectures },
        { path: '/attendlecture', component: attendlecture },
        { path: '/Jobs', component: Jobs },
        { path: '/applyforjob', component: applyforjob },
        { path: '/supportedservices', component: supportedservices },
        { path: '/charitypage/:charityid', component: charitypage },
        { path: '/activitydetails/:activityid', component: activitydetails },
    ]
})
export default router;