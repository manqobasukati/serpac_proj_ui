import { CommentModel, ProjectModel } from 'src/core/Models/ProjectModel';

export interface AdminInterface {
  projects: ProjectModel[] | null;
  project_comments: CommentModel[] | null;
}

const state: AdminInterface = {
  projects: null as null | ProjectModel[],
  project_comments: null as null | CommentModel[]
};

export default state;
