export const lookup: { [name: string]: string } = {
  section_1: 'project_description',
  section_2: 'project_value',
  section_3: 'project_funding',
  section_4: 'expected_jobs',
  section_5: 'project_timelines',
  section_6: 'opportunities',
  section_7: 'key_enablers'
};

export const FormData = {
  // _id: '' as string | null,
  project_created: new Date(),
  project_submitted: null as null | Date,
  project_description: {
    title: {
      model: '',
      type: 'input',
      label: 'The name of your project',
    },
    project_location: {
      label: 'My location',
      type: 'input',
      model: ''
    },
    economy_sector: {
      label: 'Economic sector',
      type: 'select',
      options: ['Energy', 'Agriculture', 'Telecommunicatins'],
      model: ''
    },
    project_existense: {
      label: 'Project existence',
      type: 'select',
      options: ['New', 'Old'],
      model: ''
    },
    name_of_investor: {
      label: 'Name of investor',
      model: '',
      type: 'input'
    },
    description: {
      model: '',
      type: 'input',
      meta: 'textarea',
      label: 'Please describe project in more detail'
    }
  },
  project_value: {
    total_inv_value: {
      model: '',
      type: 'input',
      label: 'Total investment value'
    }
  },
  project_funding: {
    funding_status: {
      model: '',
      type: 'select',
      options: ['Yes', 'No'],
      label: 'Funding status'
    },
    percentage_of_funding: {
      model: '',
      type: 'input',
      label: 'Percentage of funding'
    },
    project_scope: {
      model: '',
      type: 'select',
      label: 'Is this local or FDI',
      options: ['Local', 'Foreign-Direct Investment']
    }
  },
  expected_jobs: {
    permanent_jobs: {
      type: 'input',
      label: 'Permanent jobs',
      model: 0
    },
    temporal_jobs: {
      type: 'input',
      label: 'Temporay jobs',
      model: 0
    }
  },

  project_timelines: {
    key_phases: [
      {
        type: 'input',
        label: 'Phase name',
        model: '',
        nested: [
          {
            type: 'date',
            label: 'start_date',
            model: '2020/09/17'
          },
          {
            type: 'date',
            label: 'end_date',
            model: '2020/09/17'
          }
        ]
      },
      {
        type: 'input',
        label: 'Phase name',
        model: '',
        nested: [
          {
            type: 'date',
            label: 'start_date',
            model: '2020/09/17'
          },
          {
            type: 'date',
            label: 'end_date',
            model: '2020/09/17'
          }
        ]
      }
    ]
  },

  opportunities: {
    project_skills: {
      model: [],
      type: 'multiple-select',
      label: 'Skills needed',
      options: ['Local', 'Foreign-Direct Investment']
    },
    local_sourced_inputs: {
      model: [],
      type: 'multiple-select',
      label: 'Locally sourced inputs',
      options: ['Maize', 'Food']
    },
    external_sourced_inputs: {
      model: [],
      type: 'multiple-select',
      label: 'Externaly sourced inputs',
      options: ['Electricity']
    }
  },

  key_enablers: {
    key_enablers: [
      {
        type: 'input',
        label: 'Issue 1',
        model: 'Lack of water',
        nested: [
          {
            type: 'select',
            model: 'SWSC',
            options: ['SWSC', 'EMS', 'SWAZI-MET']
          }
        ]
      }
    ]
  }
};
