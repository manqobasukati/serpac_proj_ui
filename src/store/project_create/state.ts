export interface ProjectCreateInterface {
  active_section: string | null;
  previous_section:string | null
}

const state: ProjectCreateInterface = {
  active_section: null as null | string,
  previous_section: null as null | string
};

export default state;
