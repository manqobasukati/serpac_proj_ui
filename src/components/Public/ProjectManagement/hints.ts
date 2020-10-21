import { HintInterface } from 'src/store/project_create/state';

export const hints: { [name: string]: HintInterface[] } = {
  section_1: [
    {
      field_name: 'project_title',
      description: 'Give a meaningful name to your project.',
      section: 'Section 1'
    },
    {
      field_name: 'project_sector',
      description: 'In which sector is the project going to operate in',
      section: 'Section 1'
    },

    {
      field_name: 'project_existence',
      description: 'For how long has the project been in existence for',
      section: 'Section 1'
    },
    {
      field_name: 'project_region',
      description: 'Select the region which your projet will operate in.',
      section: 'Section 1'
    },
    {
      field_name: 'project_inkhundla',
      description: 'Select the region which your projet will operate in.',
      section: 'Section 1'
    },
    {
      field_name: 'project_map',
      description: 'click the map icon to place coordinates',
      section: 'Section 1'
    },
    {
      field_name: 'project_investor_name',
      description: 'Enter the name of the investor driving the project.',
      section: 'Section 1'
    },
    {
      field_name: 'project_description',
      description: 'Give a detailed description for the project',
      section: 'Section 1'
    }
  ],
  section_2: [
    {
      field_name: 'project_total_inv_value',
      description: 'Please enter the estimate investment value',
      section: 'Section 2'
    },
    {
      field_name: 'project_funding_status',
      description: 'At which funding stage is this project',
      section: 'Section 2'
    },
    {
      field_name: 'project_percentage_of_funding',
      description:
        'In percentage without entering the percentage sign ( % ) please specify the ',
      section: 'Section 2'
    },
    {
      field_name: 'project_scope',
      description:
        'FDI refers to Foreign Direct Investment, are the investors local or FDI',
      section: 'Section 2'
    }
  ],
  section_3: [
    {
      field_name: 'project_temporal_jobs',
      description: 'This referes to the estimated amount of temporal jobs',
      section: 'Section 3'
    },
    {
      field_name: 'project_permanent_jobs',
      description: 'This referes to the estimated amount of permanent jobs',
      section: 'Section 3'
    }
  ],
  section_4: [
    {
      field_name: 'project_phase',
      description: 'Enter the different phases in your project',
      section: 'Section 4'
    },
    {
      field_name: 'project_phase_milestones',
      description: 'Select milestones of each phase',
      section: 'Section 4'
    },
    {
      field_name: 'project_start_date',
      description: 'Enter the date at which the phase is expected to start',
      section: 'Section 4'
    },
    {
      field_name: 'project_end_date',
      description: 'Enter the date at which the phase is expected to end',
      section: 'Section 4'
    }
  ],
  section_5:[
    {
      field_name:'project_project_skills',
      description:'The relevant skills required for the project to break ground',
      section:'Section 5'
    },
    {
      field_name:'project_locally_sourced_inputs',
      description:'Which skill can be sourced locally?',
      section:'Section 5'
    },
    {
      field_name:'project_externally_sourced_inputs',
      description:'Which skills can only be sourced out of the country',
      section:'Section 5'
    }
  ],
  section_6:[
    {
      field_name:'project_issue',
      description:'Issue thats you think might arise',
      section:'Section 6'
    },
    {
      field_name:'project_enabler',
      description:'For that issue, which organization do you think can be off help',
      section:'Section 6'
    },
    {
      field_name:'project_comment',
      description:'Please add more information about the issue at hand.',
      section:'Section 6'
    },
  ]
};
