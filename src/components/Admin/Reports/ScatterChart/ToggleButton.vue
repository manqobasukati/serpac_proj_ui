<template>
  <div>
    <div class="tw-flex tw-items-center tw-justify-center tw-w-full ">
      <!-- Toggle Button -->
      <label for="toogleA" class="tw-flex tw-items-center tw-cursor-pointer">
        <!-- toggle -->
        <div class="tw-relative">
          <!-- input -->
          <input
            id="toogleA"
            v-model="value"
            type="checkbox"
            class="tw-hidden"
            @input="onValueChange()"
          />
          <!-- line -->
          <div
            class="tw-toggle__line tw-w-10 tw-h-4 tw-bg-gray-400 tw-rounded-full tw-shadow-inner"
          ></div>
          <!-- dot -->
          <div
            class="toggle__dot tw-absolute tw-w-6 tw-h-6 tw-bg-white tw-rounded-full tw-shadow tw-inset-y-0 tw-left-0"
          ></div>
        </div>
        <!-- label -->
        <div class="tw-ml-3 tw-text-gray-700 tw-text-xs tw-font-medium">
          {{valueLabel}}
        </div>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ToggleButton',
  data() {
    return {
      value: true 
    };
  },
  methods: {
    onValueChange() {
      this.$emit('toggleValue',this.value);
    }
  },
  computed:{
    valueLabel(){
      if(this.value){
        return 'Region'
      }else{
        return 'Tinkhundla'
      }
    }
  }
});
</script>

<style scoped>
.toggle__dot {
  top: -0.25rem;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: rgba(255, 99, 132, 0.3);
}
</style>
