<template>
  <div class="kam-112908-popin__buttons-block">
    <guide-button
      v-for="button in buttons"
      :key="button.text"
      color="second"
      :text="button.text"
      :type="type"
      :active="button.active"
      @buttonClick="onButtonClick"
    />
  </div>
</template>
<script>
import GuideButton from './UI/GuideButton.vue';

export default {
  props: {
    buttons: Array,
    type: String,
  },
  components: { GuideButton },
  methods: {
    onButtonClick(event) {
      console.log('1 - ', event);
      this.$emit('changeFilters', event);
    },
  },
};
</script>
