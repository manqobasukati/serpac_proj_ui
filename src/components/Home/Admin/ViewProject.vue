<template>
  <div class="q-ma-sm">
    <div class="row">
      <div class="col q-ma-sm">
        <q-card style="min-height:260px">
          <q-card-section>
            <div class="text-h6">
              Project meta
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Project id
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project._id }}
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Project created
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_created }}
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Project submited
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_submitted || '2020' }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-ma-sm">
        <q-card style="min-height:260px">
          <q-card-section>
            <div class="text-h6">
              Project Description
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Project location
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_description.project_location }}
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Project Sector
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_description.economy_sector }}
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Project Existence
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_description }}
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Investor name
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_description.name_of_investor }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-ma-sm">
        <q-card style="min-height:260px">
          <q-card-section>
            <div class="text-h6">
              Project Value
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Total investment value
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_value.total_inv_value || '20000' }}
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Funding status
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_value.funding_status || 'Yes' }}
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Percentage of funding
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_value.percentage_of_funding || '90' }}
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Project scope
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_value.project_scope || 'local' }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col q-ma-sm">
        <q-card style="min-height:260px">
          <q-card-section>
            <div class="text-h6">
              Project Expected Jobs
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Permanent jobs
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_value.permanent_jobs || '100' }}
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Temporal jobs
              </div>
              <div class="textsubtitle2 text-grey">
                {{ get_project.project_value.temporal_jobs || '70' }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-ma-sm">
        <q-card style="min-height:260px">
          <q-card-section>
            <div class="text-h6">
              Project Timelines
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Phases
              </div>
              <div
                class="textsubtitle2 text-grey"
                v-for="(project_phase, key) in get_project.project_timelines
                  .phases"
                :key="key"
              >
                <div>{{ project_phase.name }}</div>
                <div class="row">
                  <div class="col">
                    {{ project_phase.start_date.substring(0, 10) }}
                  </div>
                  <div class="col">
                    {{ project_phase.end_date.substring(0, 10) }}
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-ma-sm">
        <q-card style="min-height:260px">
          <q-card-section>
            <div class="text-h6">
              Project Opportunities
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Project skills
              </div>
              <div class="textsubtitle2 text-grey">
                <span
                  v-for="(skills, key) in get_project.opportunities
                    .project_skills"
                  :key="key"
                  >{{ skills + ' , ' }}</span
                >
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Local Sourced Inputs
              </div>
              <div class="textsubtitle2 text-grey">
                <span
                  v-for="(skills, key) in get_project.opportunities
                    .local_sourced_inputs"
                  :key="key"
                  >{{ skills + ' , ' }}</span
                >
              </div>
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Local Sourced Inputs
              </div>
              <div class="textsubtitle2 text-grey">
                <span
                  v-for="(skills, key) in get_project.opportunities
                    .external_sourced_inputs"
                  :key="key"
                  >{{ skills + ' , ' }}</span
                >
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col q-ma-s">
        <q-card style="min-height:260px">
          <q-card-section>
            <div class="text-h6">
              Key Enablers
            </div>
            <div class="pair">
              <div class="text-subtitle1">
                Enablers
              </div>
              <div
                class="textsubtitle2 text-grey"
                v-for="(enabler, key) in get_project.key_enablers"
                :key="key"
              >
                <div class="row">
                  <div class="col">
                    {{ enabler.name }}
                  </div>
                  <div class="col">
                    {{ enabler.stake_holder }}
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import { ProjectModel } from 'src/core/Models/ProjectModel';
import { MODULES } from 'src/store';
import { AdminInterface } from 'src/store/admin/state';

export default Vue.extend({
  name: 'ViewProject',
  computed: {
    ...mapState(MODULES.ADMIN, {
      get_project(state: AdminInterface) {
        return state.projects?.find((val: ProjectModel) => {
          console.log('here', val);
          return val._id === this.$route.params.projectId;
        }) as ProjectModel;
      }
    })
  }
});
</script>
