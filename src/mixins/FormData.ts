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
  _id: '' as string | null,
  project_created: new Date(),
  project_submitted: null as null | Date,
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
  },

  project_timelines: {
    key_phases: [
      {
        type: 'input',
        label: 'Phase name',
        model: 'My phase',
        nested: [
          {
            type: 'input',
            label: 'start_date',
            model: '2020/09/17'
          },
          {
            type: 'input',
            label: 'end_date',
            model: '2020/09/17'
          }
        ]
      },
      {
        type: 'input',
        label: 'Phase name',
        model: 'My phase',
        nested: [
          {
            type: 'input',
            label: 'start_date',
            model: '2020/09/17'
          },
          {
            type: 'input',
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
    local_sourced_inputs:{
      model: [],
      type: 'multiple-select',
      label: 'Locally sourced inputs',
      options: ['Maize', 'Food']
    },
    external_sourced_inputs:{
      model: [],
      type: 'multiple-select',
      label: 'Externaly sourced inputs',
      options: ['Electricity']
    }
  },

  key_enablers:{
     key_enablers:[
       {
         type:'input',
         label:'Issue 1',
         model:'Lack of water',
         nested:[
           {
             type:'select',
             model:'SWSC',
             options:['SWSC','EMS','SWAZI-MET']
           }
         ]
       }
     ]
  }
};
