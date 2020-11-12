
import { formatNumber } from 'src/core/helpers/filters';
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
      let temporal_jobs = 0;
      let permanent_jobs = 0;
      projects.forEach(val => {
        if (val.project_value) {
          if (Number(val.project_value.total_inv_value)) {
            temporal_jobs =
              temporal_jobs + Number(val.expected_jobs.temporal_jobs);
            permanent_jobs =
              permanent_jobs + Number(val.expected_jobs.permanent_jobs);
          }
        }
      });
      return permanent_jobs + temporal_jobs;
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

      return  `E ${formatNumber(total_value)}`;
    }
  }
];
