import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: 'home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/home',
    name: 'home',

    component: () => import('components/Home/HomeLayout.vue'),
    children: [
      {
        path: '/home/project-create',
        component: () => import('components/ProjectCreate/ProjectCreate.vue'),
        children: [
          {
            path: '/home/project-create/section-info',
            component: () =>
              import('components/ProjectCreate/FormSections/InfoSection.vue')
          },
          {
            path: '/home/project-create/section-1',
            component: () =>
              import('components/ProjectCreate/FormSections/Section1.vue')
          },
          {
            path: '/home/project-create/section-2',
            component: () =>
              import('components/ProjectCreate/FormSections/Section2.vue')
          },
          {
            path: '/home/project-create/section-3',
            component: () =>
              import('components/ProjectCreate/FormSections/Section3.vue')
          },
          {
            path: '/home/project-create/section-4',
            component: () =>
              import('components/ProjectCreate/FormSections/Section4.vue')
          },
          {
            path: '/home/project-create/section-5',
            component: () =>
              import('components/ProjectCreate/FormSections/Section5.vue')
          },
          {
            path: '/home/project-create/section-6',
            component: () =>
              import('components/ProjectCreate/FormSections/Section6.vue')
          },
          {
            path: '/home/project-create/section-7',
            component: () =>
              import('components/ProjectCreate/FormSections/Section7.vue')
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
