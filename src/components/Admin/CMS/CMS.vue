<template>
  <div class="tw- tw-flex-row tw-pt-24  tw-px-6">
    <div class="tw-text-3xl tw-font-thin">Application content</div>
    <div class="tw-flex tw-flex-row tw-p-2 tw-flex-wrap tw-mx-6">
      <content-lane
        style="height:min-content"
        v-for="(content, key) in contents"
        :lane_name="key"
        :key="key"
        :content="content"
        :expand="expandedLane === key"
        @expandLane="setExpandedLane"
        @addContent="addContent"
        @editContentLane="editContentCMS"
        @deleteContentLane="deletContentCMS"
        @editObjectLane="editObjectLane"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { get_static, put_static } from 'src/core/Additional/Contstants';
import Vue from 'vue';

import ContentLane from './ContentLane.vue';

export default Vue.extend({
  name: 'CMS',
  data() {
    return {
      expandedLane: '',
      contents: null as null | {
        [name: string]: string[] | [{ [name: string]: string }];
      }
    };
  },
  components: {
    ContentLane
  },
  mounted() {
    this.getContent();
  },
  methods: {
    deletContentCMS(data: { [name: string]: string }) {
      if (this.contents) {
        const index = this.contents[data.lane_name].findIndex((v: any) => {
          return v === data.content;
        });
        this.contents[data.lane_name].splice(index, 1);

        put_static(this.contents)
          .then(val => {
            this.contents = val;
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    getContent() {
      get_static()
        .then(val => {
          this.contents = val;
          console.log('This contents =>', this.contents);
        })
        .catch(e => {
          console.log(e);
        });
    },
    editContentCMS(data: { [name: string]: string }) {
      console.log('D =>', data);
      if (this.contents) {
        const index = this.contents[data.lane_name].findIndex((v: any) => {
          return v === data.old_content;
        });

        this.contents[data.lane_name][index] = data.new_content;
        put_static(this.contents)
          .then(val => {
            this.contents = val;
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    addContent(data: { [name: string]: string }) {
      if (this.contents) {
        this.contents[data.content_field].push(data.value as any);
        put_static(this.contents)
          .then(val => {
            this.contents = val;
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    setExpandedLane(data: string) {
      if (this.expandedLane !== data) {
        this.expandedLane = data;
      } else {
        this.expandedLane = '';
      }
    },

    editObjectLane(data: any) {
      if (this.contents) {
        const index = this.contents['hints'].findIndex((v: any) => {
          return v.field_name === data.field_name;
        });

        console.log('Index', index);

        const hint = this.contents['hints'][index];
      
        this.contents['hints'][index] = hint;
        
        put_static(this.contents)
          .then(val => {
            this.contents = val;
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
});
</script>
