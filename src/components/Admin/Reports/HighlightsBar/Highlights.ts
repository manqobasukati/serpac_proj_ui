import { ProjectModel } from 'src/core/Models/ProjectModel';

export const Highlights = [
  {
    name: 'Projects',
    description: 'Number of projects',
    value: (projects: ProjectModel[]) => {
      return projects.length;
    }
  }
];

