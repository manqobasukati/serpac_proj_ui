import { CommentModel, ProjectModel } from 'src/core/Models/ProjectModel';
import { UserModel } from 'src/core/Models/UserModel';

export interface AdminInterface {
  projects: ProjectModel[] | null;
  project_comments: CommentModel[] | null;
  users:UserModel[] | null
}

const state: AdminInterface = {
  projects: null as null | ProjectModel[],
  project_comments: null as null | CommentModel[],
users:null as null | UserModel[]
};

export default state;
