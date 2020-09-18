export interface ProjectPhase {
  name: string;
  start_date: Date;
  end_date: Date;
}

export interface Issues {
  name: string;
  stake_holder: string;
}

export interface ProjectModel {
  _id: string | null;
  project_created: Date;
  project_submitted: Date | null;
  project_description: {
    description:string;
    project_location: string;
    economy_sector: string;
    project_existense: string;
    name_of_investor: string;
  };
  project_value: {
    total_inv_value: string;
    funding_status: boolean;
    percentage_of_funding: string;
    project_scope: string;
  };
  expected_jobs: {
    permanent_jobs: number;
    temporal_jobs: number;
  };
  project_timelines: {
    phases: ProjectPhase[];
  };
  opportunities: {
    project_skills: string[];
    local_sourced_inputs: string[];
    external_sourced_inputs: string[];
  };
  key_enablers: Issues[];
}
