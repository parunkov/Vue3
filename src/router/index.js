import { createRouter, createWebHashHistory } from 'vue-router';
import GuidePage from '@/pages/GuidePage';
import CatalogPage from '@/pages/CatalogPage';

const routes = [
  {
    path: '/',
    name: 'guide',
    component: GuidePage,
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
