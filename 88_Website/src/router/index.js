import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import about from '@/views/about.vue'
import contact from '@/views/contact.vue'
import sponsoring from '@/views/sponsoring.vue'
import Impressum from '@/views/impressum.vue'
import Datenschutz from '@/views/datenschutz.vue'
import aktuelles from '@/views/aktuelles.vue'

const routes = [
  { path: '/home', name: 'home', component: home},
  { path: '/about', component: about},
  { path: '/contact', component: contact},
  { path: '/sponsoring', component: sponsoring},
  { path: '/impressum', name: 'impressum', component: Impressum},
  { path: '/datenschutz', name: 'Datenschutz' , component: Datenschutz},
  { path: '/aktuelles', name: 'aktuelles' , component: aktuelles},
  { path: '/', redirect: '/home'},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
  
      if (to.hash) {
        return { el: to.hash, top: 0 };
      }
      
    return {top: 0 }
  }
})


export default router
