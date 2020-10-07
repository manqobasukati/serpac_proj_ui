import { ProjectModel } from 'src/core/Models/ProjectModel';

export const TableStructure = [
  {
    name: 'title',
    required: true,
    label: 'Title',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.project_description.title;
    },
    format: (val: string) => {
      console.log('Val here', val);
      return `${val}`;
    }
  },
  {
    name: 'project_submitted',
    required: true,
    label: 'Submission',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.project_submitted;
    },
    format: (val: string) => {
      return `${val}`;
    }
  },

  {
    name: 'economy_sector',
    required: true,
    label: 'Economic sectors',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.project_description.economy_sector;
    },
    format: (val: string) => {
      return `${val}`;
    }
  },
  {
    name: 'project_existense',
    required: true,
    label: 'Existence',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.project_description.project_existense;
    },
    format: (val: string) => {
      return `${val}`;
    }
  },
  {
    name: 'total_inv_value',
    required: true,
    label: 'Total investment',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.project_value.total_inv_value;
    },
    format: (val: string) => {
      return `${val}`;
    }
  },
  {
    name: 'percentage_of_funding',
    required: true,
    label: 'Percentage of funding',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.project_value.percentage_of_funding;
    },
    format: (val: string) => {
      return `${val}`;
    }
  },
  {
    name: 'project_scope',
    required: true,
    label: 'Scope',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.project_value.total_inv_value;
    },
    format: (val: string) => {
      return `${val}`;
    }
  },
  {
    name: 'permanent_jobs',
    required: true,
    label: 'Permanent Jobs',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.expected_jobs.permanent_jobs;
    },
    format: (val: string) => {
      return `${val}`;
    }
  },
  {
    name: 'temporal_jobs',
    required: true,
    label: 'Temporal Jobs',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.expected_jobs.temporal_jobs;
    },
    format: (val: string) => {
      return `${val}`;
    }
  },
  {
    name: 'project_skills',
    required: true,
    label: 'Skills required',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.opportunities.project_skills;
    },
    format: (val: string[]) => {
      return `${val.join(',')}`;
    }
  },
  {
    name: 'local_sourced_inputs',
    required: true,
    label: 'Locally sourced inputs',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.opportunities.local_sourced_inputs;
    },
    format: (val: string[]) => {
      return `${val.join(',')}`;
    }
  },
  {
    name: 'external_sourced_inputs',
    required: true,
    label: 'Externally sourced inputs',
    align: 'left',
    field: (row: ProjectModel) => {
      return row.opportunities.external_sourced_inputs;
    },
    format: (val: string[]) => {
      return `${val.join(',')}`;
    }
  }
];
