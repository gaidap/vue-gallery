import Vue from 'vue';
import VueRouter from "vue-router";
import App from '@/App.vue';
import store from '@/store';
import AuthHandler from '@/components/AuthHandler';
import ImageList from "@/components/ImageList";
import UploadForm from "@/components/UploadForm";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/oauth2/callback', component: AuthHandler},
        {path: '/upload', component: UploadForm},
        {path: '/', component: ImageList}
    ]
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
