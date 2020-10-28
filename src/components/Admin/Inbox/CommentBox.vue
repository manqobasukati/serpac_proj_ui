<template>
  <div
    class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4 tw-ml-2 tw-mt-4 "
  >
    <div class="tw-flex tw-flex-col">
      <div class="tw-text-md tw-font-medium">Comments</div>
      <div
        class="tw-list-disc tw-pl-6 tw-pr-10"
        v-for="(my_comment, key) in get_comments"
        :key="key"
      >
        <comment :comment="my_comment" />
      </div>
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
import Vue from 'vue';
import { MODULES } from 'src/store';
import { ADMIN_ACTIONS } from 'src/store/admin/actions';
import { AdminInterface } from 'src/store/admin/state';

import { mapState } from 'vuex';

import Comment from './Comment.vue';

export default Vue.extend({
  name: 'CommentBox',
  props: ['section', 'project'],
  components: {
    Comment
  },
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
        project: this.project._id,
        section: this.section
      };

      console.log(data);
      this.$store
        .dispatch(action, data)
        .then(() => {
          this.comment = '';
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
          return (
            val.section === this.section && val.project === this.project._id
          );
        });
      }
    })
  }
});
</script>
