import { ProjectModel } from '../Models/ProjectModel';

export function map_form_model(_model: ProjectModel) {
  const model = JSON.parse(JSON.stringify(_model));
 
  const project_description = {
    description: {
      model: model.project_description.description,
      type: 'input',
      label: 'What is the project'
    },
    project_location: {
      label: 'My location',
      type: 'input',
      model: model.project_description.project_location
    },
    economy_sector: {
      label: 'Economic sector',
      type: 'select',
      options: ['Energy', 'Agriculture', 'Telecommunications'],
      model: model.project_description.economy_sector
    },
    project_existense: {
      label: 'Project existence',
      type: 'select',
      options: ['New', 'Old'],
      model: model.project_description.project_existense
    },
    name_of_investor: {
      label: 'Name of investor',
      model: model.project_description.name_of_investor,
      type: 'input'
    }
  };

  const project_value = {
    total_inv_value: {
      model: model.project_value.total_inv_value,
      type: 'input',
      label: 'What is the project'
    }
  };

  const project_funding = {
    funding_status: {
      model: model.project_value.funding_status,
      type: 'select',
      options: ['Yes', 'No'],
      label: 'What is the project'
    },
    percentage_of_funding: {
      model: model.project_value.percentage_of_funding,
      type: 'input',
      label: 'What is the project'
    },
    project_scope: {
      model: model.project_value.project_scope,
      type: 'select',
      label: 'Is this local or FDI',
      options: ['Local', 'Foreign-Direct Investment']
    }
  };

  const expected_jobs = {
    permanent_jobs: {
      type: 'input',
      label: 'Permanent jobs',
      model: model.expected_jobs.permanent_jobs
    },
    temporal_jobs: {
      type: 'input',
      label: 'Temporay jobs',
      model: model.expected_jobs.temporal_jobs
    }
  };

  const project_timelines = {
    key_phases: model.project_timelines.phases.map((val: any) => {
      return {
        type: 'input',
        label: 'Phase name',
        model: val.name,
        nested: [
          {
            type: 'input',
            label: 'start_date',
            model: val.start_date
          },
          {
            type: 'input',
            label: 'end_date',
            model: val.end_date
          }
        ]
      };
    })
  };

  const opportunities = {
    project_skills: {
      model: model.opportunities.project_skills,
      type: 'multiple-select',
      label: 'Skills needed',
      options: ['Local', 'Foreign-Direct Investment']
    },
    local_sourced_inputs: {
      model: model.opportunities.local_sourced_inputs,
      type: 'multiple-select',
      label: 'Locally sourced inputs',
      options: ['Maize', 'Food']
    },
    external_sourced_inputs: {
      model: model.opportunities.external_sourced_inputs,
      type: 'multiple-select',
      label: 'Externaly sourced inputs',
      options: ['Electricity']
    }
  };

  const key_enablers = {
    key_enablers: model.key_enablers.map((val:any) => {
      return {
        type: 'input',
        label: 'Issue',
        model: val.name,
        nested: [
          {
            type: 'select',
            model: val.stake_holder,
            options: ['SWSC', 'EMS', 'SWAZI-MET']
          }
        ]
      };
    })
  };

  const form_data = {
    _id: model._id,
    project_created: model.project_created,
    project_submitted: model.project_submitted,
    project_description: project_description,
    project_value: project_value,
    project_funding: project_funding,
    expected_jobs: expected_jobs,
    project_timelines: project_timelines,
    opportunities: opportunities,
    key_enablers: key_enablers
  };

  return form_data;
}

export function map_model_form(my_form: any) {
  const form = JSON.parse(JSON.stringify(my_form));
  return {
    _id: form._id || null,
    project_created: new Date(),
    project_submitted: null as null | Date,
    project_description: {
      description: form?.project_description?.description.model,
      project_location: form.project_description.project_location.model,
      economy_sector: form.project_description.economy_sector.model,
      project_existense: form.project_description.project_existense.model,
      name_of_investor: form.project_description.name_of_investor.model
    },
    project_value: {
      total_inv_value: form.project_value.total_inv_value.model,
      funding_status: form.project_funding.funding_status.model,
      percentage_of_funding: form.project_funding.percentage_of_funding.model,
      project_scope: form.project_funding.project_scope.model
    },
    expected_jobs: {
      permanent_jobs: form.expected_jobs.permanent_jobs.model,
      temporal_jobs: form.expected_jobs.temporal_jobs.model
    },
    project_timelines: {
      phases: form.project_timelines.key_phases.map((val: any) => {
        return {
          name: val.model,
          start_date: new Date(val.nested[0].model),
          end_date: new Date(val.nested[1].model)
        };
      })
    },
    opportunities: {
      project_skills: form.opportunities.project_skills.model,
      local_sourced_inputs: form.opportunities.local_sourced_inputs.model,
      external_sourced_inputs: form.opportunities.external_sourced_inputs.model
    },
    key_enablers: form.key_enablers.key_enablers.map((val: any) => {
      return { name: val.model, stake_holder: val.nested[0].model };
    })
  };
}
