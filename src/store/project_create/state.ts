import { ProjectModel } from 'src/core/Models/ProjectModel';

export interface FormDataInterface {
  [section: string]: { [question_number: string]: string };
}
export interface ProjectCreateInterface {
  active_section: string | null;
  previous_section: string | null;
  form_data: ProjectModel | null;
}

const state: ProjectCreateInterface = {
  active_section: null as null | string,
  previous_section: null as null | string,
  form_data: null as null | ProjectModel
};

export default state;
