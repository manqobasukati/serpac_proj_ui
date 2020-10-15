import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/landing-page',
    name: 'landingPage',
    component: () => import('components/Home/LandingPage/LandingPage.vue')
  },
  {
    path: '/public-sign-in',
    name: 'PublicSignIn',
    component: () => import('components/Accounts/PublicSignIn.vue')
  },
  {
    path: '/public',
    name: 'public',
    component: () => import('components/Home/Public/Public.vue'),
    children: [
      {
        path: '/public/project-create',
        component: () => import('components/ProjectCreate/ProjectCreate.vue'),
        children: [
          {
            path: '/public/project/:section',
            component: () =>
              import('components/ProjectCreate/FormSections/GenericSection.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('components/Home/LandingPage/LandingPage.vue'),
    children: [
      {
        path: '/admin/users',
        component: () => import('components/Home/Users/Users.vue')
      },
      {
        path: '/admin/reports',
        redirect: '/admin/reports/all',
        component: () => import('components/Home/Admin/Reports/Reports.vue'),
        children: [
          {
            path: '/admin/reports/all',
            name: 'content_reports',
            component: () =>
              import('components/Home/Admin/Reports/ContentReports.vue')
          },
          {
            path: '/admin/reports/:projectId',
            props: true,
            component: () =>
              import(
                'components/Home/Admin/Reports/SingleReport/SingleReports.vue'
              )
          }
        ]
      },
      {
        path: '/home',
        name: 'home',
        component: () =>
          import('components/Home/LandingPage/LandingPageContent.vue')
      },
      {
        path: '/public-sign-up',
        name: 'PublicSignUp',
        component: () => import('components/Accounts/PublicSignUp.vue')
      },

      {
        path: '/admin',
        name: 'admin',
        component: () => import('components/Home/Admin/Admin.vue')
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
      {
        path: '/admin/all-projects',
        component: () => import('components/Home/Admin/AllProjects.vue')
      },
      {
        path: '/admin/all-projects/:projectId',
        component: () => import('components/Home/Admin/ViewProject.vue')
      },

      {
        path: '/public/my-projects',
        component: () => import('components/MyProjects/MyProjects.vue')
      },
      {
        path: '/public/my-projects/:projectId',
        component: () => import('components/ProjectCreate/ProjectCreate.vue'),
        children: [
          {
            path: '/public/my-projects/:projectId/:section',
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
