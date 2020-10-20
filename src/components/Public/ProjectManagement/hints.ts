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
      description: 'In percentage without entering the percentage sign ( % ) please specify the ',
      section: 'Section 2'
    },
    {
      field_name: 'project_scope',
      description: 'FDI refers to Foreign Direct Investment, are the investors local or FDI',
      section: 'Section 2'
    }
  ]
};
