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
import { inject } from 'vue';

export default {
  setup() {
    const filters = inject('filters');
    return { filters };
  },
  props: {
    buttons: Array,
    type: String,
    modifier: String,
  },
  data() {
    return {
      currentButtons: this.buttons,
      activeButton: null,
    };
  },
  components: { GuideButton },
  methods: {
    onButtonClick(event) {
      this.currentButtons.forEach((item) => {
        item.active = false;
      });
      this.activeButton = event.text;
      this.currentButtons.find((item) => item.text === event.text).active = true;
      this.$emit('changeFilters', event);
    },
  },
  created() {
    const newButtons = this.buttons.map((item) => ({ text: item, active: false }));
    this.currentButtons = newButtons;
    this.activeButton = this.filters[this.modifier];
    const activeButton = this.currentButtons.find((item) => item.text === this.activeButton);
    if (activeButton) {
      activeButton.active = true;
    }
  },
};
</script>
