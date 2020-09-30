import { ProjectModel } from 'src/core/Models/ProjectModel';
import { FormData } from 'src/mixins/FormData';

export interface FormDataInterface {
  [section: string]: { [question_number: string]: string };
}
export interface ProjectCreateInterface {
  active_section: string | null;
  previous_section: string | null;
  form_data: any | null;
  selected_project: ProjectModel | null;
  active_submodule: string | null;
  current_user_projects: ProjectModel[] | null
}

const state: ProjectCreateInterface = {
  active_section: null as null | string,
  previous_section: null as null | string,
  form_data: JSON.parse(JSON.stringify(FormData)),
  selected_project: null as null | ProjectModel,
  active_submodule: null as null | string,
  current_user_projects: null as null | ProjectModel[]
};

export default state;
