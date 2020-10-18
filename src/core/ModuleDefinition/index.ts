export interface ModuleDefinition {
  name: string;
  state?: string[];
  link?: string;
  class?: string;
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
        name: 'reports',
        icon: 'analytics',
        link: '/admin/reports',
        modules: []
      },

      {
        name: 'work_groups',
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
        link: '/public/project-create',
        name: 'project_create',

        icon: 'add_circle',
        state: ['active_section:string'],
        modules: []
      },
      {
        name: 'my_projects',
        link: '/public/my-projects',
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
