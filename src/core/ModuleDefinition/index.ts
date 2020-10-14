export interface ModuleDefinition {
  name: string;
  state?: string[];
  link?: string;
  class?:string;
  icon?: string;
  modules: ModuleDefinition[];
}

export const module_definition: { [name: string]: ModuleDefinition } = {
  admin: {
    link: '/admin',
    name: 'admin',
    modules: [
      {
        name: 'all_projects',
        link: '/admin/all-projects',
        icon: 'folder',
        modules: []
      },
      {
        name: 'Reports',
        icon: 'analytics',
        link: '/admin/reports',
        modules: []
      },
      {
        name: 'users',
        link: '/admin/user',
        icon: 'group',
        modules: []
      }
    ]
  },
  public: {
    link: '/public',
    name: 'serpac_project_management',
    modules: [
      {
        link: '/public/project/section-info',
        name: 'project_create',
    
        icon: 'add_circle',
        state: ['active_section:string'],
        modules: [
          {
            link: '/public/project/section-info',
            name: 'info_section',
            modules: []
          },
          {
            link: '/public/project/section-1',
            name: 'section_1',
            modules: []
          },
          {
            link: '/public/project/section-2',
            name: 'section_2',
            modules: []
          },
          {
            link: '/public/project/section-3',
            name: 'section_3',
            modules: []
          },
          {
            link: '/public/project/section-4',
            name: 'section_4',
            modules: []
          },

          {
            link: '/public/project/section-5',
            name: 'section_5',
            modules: []
          },
          {
            link: '/public/project/section-6',
            name: 'section_6',
            modules: []
          },
          {
            link: '/public/project/section-7',
            name: 'section_7',
            modules: []
          }
        ]
      },
      {
        name: 'my_projects',
        link: '/public/my-projects',
        icon: 'folder',
        modules: [
          {
            link: '/public/project/section-info',
            name: 'info_section',
            modules: []
          },
          {
            link: '/public/project/section-1',
            name: 'section_1',
            modules: []
          },
          {
            link: '/public/project/section-2',
            name: 'section_2',
            modules: []
          },
          {
            link: '/public/project/section-3',
            name: 'section_3',
            modules: []
          },
          {
            link: '/public/project/section-4',
            name: 'section_4',
            modules: []
          },

          {
            link: '/public/project/section-5',
            name: 'section_5',
            modules: []
          },
          {
            link: '/public/project/section-6',
            name: 'section_6',
            modules: []
          },
          {
            link: '/public/project/section-7',
            name: 'section_7',
            modules: []
          }
        ]
      },

      {
        name: 'users',
        icon: 'group',
        modules: []
      }
    ]
  }
};
