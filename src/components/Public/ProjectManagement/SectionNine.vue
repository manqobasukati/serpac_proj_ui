<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project collaborators</div>
        <div class="tw-flex tw-flex-col tw-p-2">
          <q-select
            multiple
            use-chips
            map-options
            v-model="FormData.project_owners"
            type="text"
            :options="user_options"
            borderless
            class="proj-form-input tw-h-10 tw-my-1"
            label="users"
            dense
            @focus="addHint('section_9', 'project_project_skills')"
            :disabled="context === 'admin_inbox'"
          />
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end">
          <div class="">
            <button
              v-if="context !== 'admin_inbox'"
              @click="Save()"
              class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md  tw-p-2 tw-mr-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { get_hints } from 'src/core/helpers/hints';
import { UserModel } from 'src/core/Models/UserModel';
import { get_users } from 'src/core/RequestHandler/user_management';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { HintInterface } from 'src/store/project_create/state';
import Vue from 'vue';
export default Vue.extend({
  name: 'SectionNine',
  props: ['context', 'FormD'],
  data() {
    return {
      user_options: [],
      FormData: {
        project_owners: null as null | string[]
      }
    };
  },
  watch: {
    FormD() {
      this.FormData = this.FormD;
    }
  },
  methods: {
    addProjectOnwers(data: any) {
      console.log(data);
      this.FormData.project_owners = data;
    },
    users() {
      get_users()
        .then(val => {
          console.log('vendeta', val);
          this.user_options = val.map((v: UserModel) => {
            return {
              label: `${v.meta?.firstname as string} ${v.meta
                ?.lastname as string} `,
              value: `${v._id}`
            };
          });
          console.log('Options =>', this.user_options);
        })
        .catch(e => {
          console.log('error', e);
        });
    },
    addHint(section: string, field_name: string) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.ADD_HINT}`;

      get_hints()
        .then((val: any) => {
          const hint = val[section].find((v: HintInterface) => {
            return v.field_name === field_name;
          });

          this.$store.dispatch(action, hint).catch(e => {
            console.log(e);
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    Save() {
      this.FormData.project_owners?.forEach(
        (val: string | { [name: string]: string }) => {
          if (typeof val !== 'object') {
            this.FormData.project_owners?.push(val);
          } else {
            this.FormData.project_owners?.push(
              (val.value as unknown) as string
            );
          }
        }
      );
        
      if (this.FormData.project_owners) {
        this.FormData.project_owners = (Object.keys(
          this.FormData.project_owners
            .filter(val => {
              return typeof val !== 'object';
            })
            .reduce((a: { [k: string]: string }, b: string) => {
              a[b] = b;
              return a;
            }, {} as { [k: string]: string })
        ) as unknown) as string[];

       
      }
      this.$emit('updateForm', this.FormData);
    }
  },
  mounted() {
    this.FormData = this.FormD;

    this.users();
  }
});
</script>
