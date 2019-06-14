window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import CompaniesIndex from './../components/companies/CompaniesIndex.vue';
import CompaniesCreate from './../components/companies/CompaniesCreate.vue';
import CompaniesEdit from './../components/companies/CompaniesEdit.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
    {
        path: '/',
        components: {
            companiesIndex: CompaniesIndex
        }
    },
    {path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany'},
    {path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},
]
});

// const router = new VueRouter({ routes })