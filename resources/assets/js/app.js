
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import CompaniesIndex from './components/companies/CompaniesIndex.vue';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit from './components/companies/CompaniesEdit.vue';

import userIndex from './components/user/userindex.vue';
import createUser from './components/user/createUser.vue';
import UserEdit from './components/user/useredit.vue';

const routes = [
    {
        path: '/',
        components: {
            companiesIndex: CompaniesIndex
        }
    },
    {path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany'},
    {path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},

    {path: '/admin/user/', component: userIndex, name: 'userIndex'},
    {path: '/admin/user/create', component: createUser, name: 'createUser'},
    {path: '/admin/user/edit/:id', component: UserEdit, name: 'editUser'},
]

const router = new VueRouter({ routes })
// import router from './route';
const app = new Vue({ router }).$mount('#app')
