<template>
  <div
    class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4 tw-ml-2 tw-mt-4 "
  >
    <div class="tw-flex tw-flex-col">
      <div class="tw-text-md tw-font-medium">Comments</div>
      <ul class="tw-list-disc tw-pl-6">
        <li>Need to get into more detail regarding the project</li>
        <li>Need to get into more detail regarding the project</li>
      </ul>
      <div class="tw-flex tw-flex-row tw-p-2">
        <textarea
          type="text"
          v-model="comment"
          class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
          placeholder="Add comment here"
        />
      </div>
    </div>
    <div class="tw-flex tw-flex-row tw-justify-end">
      <div class="">
        <button
          @click="create_comment()"
          class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md  tw-p-2 tw-mr-2"
        >
          add comment
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { MODULES } from 'src/store';
import { ADMIN_ACTIONS } from 'src/store/admin/actions';
import { AdminInterface } from 'src/store/admin/state';
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'CommentBox',
  props: ['section', 'project'],
  data() {
    return {
      comment: ''
    };
  },
  methods: {
    create_comment() {
      const action = `${MODULES.ADMIN}/${ADMIN_ACTIONS.CREATE_COMMENT}`;
      const data = {
        comment: this.comment,
        user: localStorage.getItem('serpac_tool_user_id'),
        created: new Date(),
        project_status: this.project.project_status,
        project: this.project._id
      };
      this.$store
        .dispatch(action, data)
        .then(() => {
          console.log('Somethin will come here');
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
    ...mapState(MODULES.ADMIN, {
      get_comments(state: AdminInterface) {
        return state.project_comments?.filter(val => {
          return val.section === this.section;
        });
      }
    })
  }
});
</script>
