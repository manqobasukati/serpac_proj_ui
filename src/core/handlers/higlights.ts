import { ProjectModel } from "../Models/ProjectModel";

export const highlights = [{
        label:'total_projects',
        value:(projects:ProjectModel[])=>{
            return projects.length
        }
    }
]