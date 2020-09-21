import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/public',
    component: () => import('components/Home/HomeLayout.vue'),
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import('components/Home/Admin/Admin.vue')
      },
      {
        path: '/admin/all-projects',
        component: () => import('components/Home/Admin/AllProjects.vue')
      },
      {
        path: '/admin/all-projects/:projectId',
        component: () => import('components/Home/Admin/ViewProject.vue')
      },
      {
        path: '/public',
        name: 'public',
        component: () => import('components/Home/Public/Public.vue')
      },
      {
        path: '/public/project-create',
        component: () => import('components/ProjectCreate/ProjectCreate.vue'),
        children: [
          {
            path: '/public/project-create/:section',
            component: () =>
              import('components/ProjectCreate/FormSections/GenericSection.vue')
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
