export interface FormDefinition {
  label: string;
  model: string;
  type: string;
}

export enum FormTypes {
  input = 'input'
}

export const formDefinition = {
  section_1: [
    {
      label: 'What is the project',
      model: 'project_name',
      type: FormTypes.input
    }
  ]
};

function buildInputForm(label: string): string {
  return `<q-input label=${label}/>`;
}

function form_builder(section: any[]): string[] {
  const forms: string[] = [];

  section.forEach(val => {
    if (val.type === FormTypes.input) {
      const form = buildInputForm(val.label, val.model);
      forms.push(form);
    }
  });

  return forms;
}

export const FORM_FUNCTIONS = {
  buildInputForm
};
