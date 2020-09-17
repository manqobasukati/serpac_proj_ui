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
