import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',

    component: () => import('components/Home/LandingPage/LandingPage.vue'),
    children: [
      {
        path: '/public/my-projects/:projectId',
        component: () =>
          import('components/Public/ProjectManagement/ProjectCreate.vue')
      }
    ]
  },
  {
    path: '/public-sign-up',
    name: 'PublicSignUp',
    component: () => import('components/Accounts/PublicSignUp.vue')
  },
  {
    path: '/public-sign-in',
    name: 'PublicSignIn',
    component: () => import('components/Accounts/PublicSignIn.vue')
  },
  {
    path: '/public/project',
    name: 'public',
    component: () => import('components/Public/Public.vue'),
    children: [
      {
        path: '/public/project/:projectId',
        props:true,
        component: () =>
          import('components/Public/ProjectManagement/ProjectCreate.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('components/Admin/Admin.vue'),
    children: [
      {
        path:'/admin/inbox',
        component:()=> import('components/Admin/Inbox/Inbox.vue'),
        children:[
          {
            path:'/admin/inbox/:projectId',
            props:true,
            component:()=> import('components/Admin/Inbox/ProjectView.vue'),
          }
        ]
      },

      {
        path: '/admin/reports/all',
        name: 'content_reports',
        component: () => import('components/Admin/Reports/Reports.vue')
      },
      {
        path: '/admin/reports/:projectId',
        props: true,
        component: () =>
          import('components/Admin/Reports/SingleReport/SingleReports.vue')
      }
    ]
  },

  {
    path: '/admin-sign-up',
    name: 'AdminSignUp',
    component: () => import('components/Accounts/AdminSignUp.vue')
  },
  {
    path: '/admin-sign-in',
    name: 'AdminSignIn',
    component: () => import('components/Accounts/AdminSignIn.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
