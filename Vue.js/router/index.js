import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactForm from '../components/ContactForm.vue';
import FormResults from '../components/FormResults.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ContactForm },
  { path: '/results', name: 'FormResults', component: FormResults }
];

const router = new VueRouter({
  routes
});

export default router;
