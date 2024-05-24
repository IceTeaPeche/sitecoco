import { createRouter, createWebHistory } from 'vue-router'


import COCOBOX from '@/views/COCO-BOX.vue'
import NousContacter from '@/views/NousContacter.vue'
import QuiSommesNous from '@/views/QuiSommesNous.vue'
import entreprise from '@/views/entreprise.vue'
import Politique from '@/views/Politique.vue'
import utilisation from '@/views/utilisation.vue'
import Vente from '@/views/Vente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'COCO-BOX',
      component: COCOBOX
    },
    {
      path: '/NousContacter',
      name: 'NousContacter',
      component: NousContacter
    },
    {
      path: '/QuiSommesNous',
      name: 'QuiSommesNous',
      component: QuiSommesNous
    },
    {
      path: '/entreprise',
      name: 'entreprise',
      component: entreprise
    },
    {
      path: '/Politique',
      name: 'Politique',
      component: Politique
    },
    {
      path: '/utilisation',
      name: 'utilisation',
      component: utilisation
    },
    {
      path: '/Vente',
      name: 'Vente',
      component: Vente
    },
  ]
})

export default router