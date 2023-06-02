<template>
  <div class="kam-112908-popin__buttons-block">
    <guide-button
      v-for="button in currentButtons"
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
  data() {
    return {
      currentButtons: this.buttons,
    };
  },
  components: { GuideButton },
  methods: {
    onButtonClick(event) {
      this.currentButtons.forEach((item) => {
        item.active = false;
      });
      this.currentButtons.find((item) => item.text === event.text).active = true;
      this.$emit('changeFilters', event);
    },
  },
};
</script>
