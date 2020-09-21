import { ProjectModel } from 'src/core/Models/ProjectModel';

export interface AllProjectsInterface {
  projects: ProjectModel[] | null;
}

const state: AllProjectsInterface = {
  projects: null as null | ProjectModel[]
};

export default state;
