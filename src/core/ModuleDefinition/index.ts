export interface ModuleDefinition {
  name: string;
  state?: string[];
  link?: string;
  icon?: string;
  modules: ModuleDefinition[];
}

export const module_definition: { [name: string]: ModuleDefinition } = {
  admin: {
    name: 'admin',
    modules: [
      {
        name: 'all_projects',
        modules: []
      },
      {
        name: 'users',
        modules: []
      }
    ]
  },
  public: {
    link: '/public',
    name: 'serpac_project_management',
    modules: [
      {
        link: '/public/project-create/',
        name: 'project_create',
        icon: 'create_new_folder',
        state: ['active_section:string'],
        modules: [
          {
            link: '/public/project-create/section-info',
            name: 'info_section',
            modules: []
          },
          {
            link: '/public/project-create/section-1',
            name: 'section_1',
            modules: []
          },
          {
            link: '/public/project-create/section-2',
            name: 'section_2',
            modules: []
          },
          {
            link: '/public/project-create/section-3',
            name: 'section_3',
            modules: []
          },
          {
            link: '/public/project-create/section-4',
            name: 'section_4',
            modules: []
          },

          {
            link: '/public/project-create/section-5',
            name: 'section_5',
            modules: []
          },
          {
            link: '/public/project-create/section-6',
            name: 'section_6',
            modules: []
          },
          {
            link: '/public/project-create/section-7',
            name: 'section_7',
            modules: []
          }
        ]
      },
      {
        name: 'my_projects',

        icon: 'folder',
        modules: []
      },
      {
        name: 'users',
        icon: 'group',
        modules: []
      }
    ]
  }
};
