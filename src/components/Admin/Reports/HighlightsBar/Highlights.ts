import { ProjectModel } from 'src/core/Models/ProjectModel';

export const Highlights = [
  {
    name: 'Projects',
    description: 'Number of projects',
    value: (projects: ProjectModel[]) => {
      return projects.length;
    }
  },
  {
    name: 'Jobs',
    description: 'Total investment value',
    value: (projects: ProjectModel[]) => {
      return projects.length;
    }
  },
  {
    name: 'Value',
    description: 'Total investment value',
    value: (projects: ProjectModel[]) => {
      let total_value = 0;

      projects.forEach(val => {
        if (val.project_value) {
          if (Number(val.project_value.total_inv_value)) {
            total_value =
              total_value + Number(val.project_value.total_inv_value);
          }
        }
      });

      return total_value;
    }
  }
];
