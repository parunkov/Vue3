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
    activeButton: String,
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
      const activeButton = this.currentButtons.find((item) => item.text === this.activeButton);
      console.log('🚀 ~ ~ created ~ activeButton:', activeButton);
      console.log(this.activeButton);
      if (activeButton) {
        activeButton.active = true;
      }
    },
  },
  created() {
    const newButtons = this.buttons.map((item) => ({ text: item, active: false }));
    this.currentButtons = newButtons;
    console.log(this.activeButton);
    const activeButton = this.currentButtons.find((item) => item.text === this.activeButton);
    console.log('🚀 ~ file: PopinButtonsBlock.vue:42 ~ created ~ activeButton:', activeButton);
    if (activeButton) {
      activeButton.active = true;
    }
  },
};
</script>
