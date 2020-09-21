import { ProjectModel } from 'src/core/Models/ProjectModel';

export interface AdminInterface {
  projects: ProjectModel[] | null;
}

const state: AdminInterface = {
  projects: null as null | ProjectModel[]
};

export default state;
