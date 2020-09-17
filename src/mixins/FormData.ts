export const lookup: { [name: string]: string } = {
  section_1: 'project_description',
  section_2: 'project_value',
  section_3: 'expected_jobs'
};

export const FormData = {
  id: '',
  project_created: new Date(),
  project_submitted: null,
  project_description: {
    description: {
      model: 'My project info',
      type: 'input',
      label: 'What is the project'
    },
    project_location: {
      label: 'My location',
      type: 'input',
      model: 'Siphocosini Umphakasti'
    },
    economy_sector: {
      label: 'Economic sector',
      type: 'select',
      options: ['Energy', 'Agriculture', 'Telecommunicatins'],
      model: 'Energy'
    },
    project_existense: {
      label: 'Project existence',
      type: 'select',
      options: ['New', 'Old'],
      model: 'New'
    },
    name_of_investor: {
      label: 'Name of investor',
      model: 'Manqoba Sukati',
      type: 'input'
    }
  },
  project_value: {
    total_inv_value: {
      model: '100000',
      type: 'input',
      label: 'What is the project'
    }
  },
  project_funding: {
    funding_status: {
      model: 'Yes',
      type: 'select',
      options: ['Yes', 'No'],
      label: 'What is the project'
    },
    percentage_of_funding: {
      model: '80',
      type: 'input',
      label: 'What is the project'
    },
    project_scope: {
      model: 'Local',
      type: 'select',
      label: 'Is this local or FDI',
      options: ['Local', 'Foreign-Direct Investment']
    }
  },
  expected_jobs: {
    permanent_jobs: {
      type: 'input',
      label: 'Permanent jobs',
      model: 100
    },
    temporal_jobs: {
      type: 'input',
      label: 'Temporay jobs',
      model: 60
    }
  }
};
