import Tinkhundla from './Tinkhundla';
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
      label: 'Project Title'
    },
    project_location: {
      label: 'My location',
      options: Tinkhundla.map((val: any) => {
        return val.name as string;
      }),
      type: 'select',
      model: ''
    },
    economy_sector: {
      label: 'Economic sector',
      type: 'select',
      options: ['Energy', 'Agriculture', 'ICT'],
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
    ],
    add_phase: {
      type: 'button',
      label: 'add phase',
      method: 'add_phase()'
    }
  },

  opportunities: {
    project_skills: {
      model: [],
      type: 'multiple-select',
      label: 'Skills needed',
      options: ['Labour', 'Nothing']
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

export const ModelObj: { [name: string]: any } = {
  _id: '',
  project_created: new Date(),
  project_submitted: null as null | Date,
  project_description: {
    title: '',
    description: '',
    project_location: {
      type: 'Point',
      properties: {
        inkhundla: ''
      }
    },
    economy_sector: '',
    project_existense: '',
    name_of_investor: ''
  },
  project_value: {
    total_inv_value: '',
    funding_status: '',
    percentage_of_funding: '',
    project_scope: ''
  },
  expected_jobs: {
    permanent_jobs: '',
    temporal_jobs: ''
  },
  project_timelines: [
    {
      name: '',
      start_date: '',
      end_data: '',
      selected_fields: [],
      meta: []
    }
  ],
  opportunities: {
    project_skills: [],
    local_sourced_inputs: [],
    external_sourced_inputs: []
  },
  key_enablers: []
};
