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
    total_inv_value: '10000',
    funding_status: true,
    percentage_of_funding: '80%',
    project_scope: 'local'
  }
};
