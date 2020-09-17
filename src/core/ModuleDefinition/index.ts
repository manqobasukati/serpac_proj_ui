export interface ModuleDefinition {
  name: string;
  state?: string[];
  link?: string;
  modules: ModuleDefinition[];
}

export const module_definition: { [name: string]: ModuleDefinition } = {
  main: {
    link: '/home',
    name: 'serpac_project_management',
    modules: [
      
      {
        link: '/home/project-create/',
        name: 'project_create',
        state: ['active_section:string'],
        modules: [
          {
            link: '/home/project-create/section-info',
            name: 'info_section',
            modules: []
          },
          {
            link: '/home/project-create/section-1',
            name: 'section_1',
            modules: []
          },
          {
            link: '/home/project-create/section-2',
            name: 'section_2',
            modules: []
          },
          {
            link: '/home/project-create/section-3',
            name: 'section_3',
            modules: []
          },
          {
            link: '/home/project-create/section-4',
            name: 'section_4',
            modules: []
          },

          {
            link: '/home/project-create/section-5',
            name: 'section_5',
            modules: []
          },
          {
            link: '/home/project-create/section-6',
            name: 'section_6',
            modules: []
          },
          {
            link: '/home/project-create/section-7',
            name: 'section_7',
            modules: []
          }
        ]
      }
    ]
  }
};
