export interface SectionDescription {
  header: string;
  description?: string;
}

export const SectionDescriptions: { [name: string]: SectionDescription } = {
  info_section: {
    header: 'Information section',
    description: ''
  },
  section_1: {
    header: 'Section 1 - Provide project description'
  },
  section_2: {
    header: 'Section 2 - Provide project value'
  },
  section_3: {
    header: 'Section 3 - Provide project funding information'
  },
  section_4: {
    header: 'Section 4 - Provide Jobs information'
  },
  section_5: {
    header: 'Section 5 - Provide project timeline info'
  },
  section_6: {
    header: 'Section 6 - Provide MSME Oportunities'
  },
  section_7: {
    header: 'Section 7 - Provide Key enable information'
  }
};

export const SimpleSections = [
  {
    name: 'Section 1',
    ui_name:'Project Description',
    active: true,
    info:
      'This section, captures information describing the project, this gives us a better view of the project'
  },

  {
    ui_name:'Project Value',
    name: 'Section 2',
    active: false
  },
  {
    ui_name:'Expected Jobs on Completion',
    name: 'Section 3',
    active: false
  },
  {
    ui_name:'Project Timelines',
    name: 'Section 4',
    active: false
  },
  {
    ui_name:'MSME Opportunities',
    name: 'Section 5',
    active: false
  },
  {
    ui_name:'Key enablers',
    name: 'Section 6',
    active: false
  },
  {
    ui_name:'More information',
    name: 'Section 7',
    active: false
  },
  {
    ui_name:'Project files',
    name:'Section 8',
    active:false
  }
];
