import Vue from 'vue';
import Router from 'vue-router';
import VeeValidate from 'vee-validate'

Vue.use(Router);
Vue.use(VeeValidate);

import CompaniesIndex from '../components/companies/CompaniesIndex.vue';
import CompaniesCreate from '../components/companies/CompaniesCreate.vue';
import CompaniesEdit from '../components/companies/CompaniesEdit.vue';

import Welcome from '../components/welcome.vue';
import Notfound from '../components/notfound.vue';

import userIndex from '../components/user/userindex.vue';
import createUser from '../components/user/createUser.vue';
import UserEdit from '../components/user/useredit.vue';

var auth = window.auth;
// console.log(auth);
if(auth.id != ''){

}
export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Welcome, name: 'welcome' },
        {path: '/home', component: CompaniesIndex, name: 'indexCompany' },
        {path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany'},
        {path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},
        {path: '/admin/user/', component: userIndex, name: 'userIndex'},
        {path: '/admin/user/create', component: createUser, name: 'createUser'},
        {path: '/admin/user/edit/:id', component: UserEdit, name: 'editUser'},
        {path: '*', component: Notfound, name: 'notFound'},
    ]
});