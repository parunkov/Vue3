<template>
  <div class="kam-112908-section__buttons-block" ref="buttonsBlock">
    <guide-button
      v-for="button in buttons"
      :key="button.text"
      :color="button.color"
      :text="button.text"
      :type="button.type"
      @buttonClick="onButtonClick"
    />
    <guide-button
      v-if="firstButton"
      :color="firstButton.color"
      :text="firstButton.text"
      :type="firstButton.type"
      @buttonClick="onButtonClick"
    />
  </div>
</template>
<script>
import GuideButton from './UI/GuideButton.vue';

export default {
  props: {
    buttons: Array,
    firstButton: Object,
  },
  components: { GuideButton },
  methods: {
    onButtonClick(event) {
      this.$emit('buttonClick', event);
      this.selectButton(event);
    },
    selectButton(event) {
      if (event.type === 'changeStiks' || event.type === 'changeMentol') {
        this.$refs.buttonsBlock
          .querySelectorAll('.kam-112908-button_color_second')
          .forEach((item) => {
            item.classList.remove('kam-112908-button_active');
          });
        event.target.classList.add('kam-112908-button_active');
        this.$refs.buttonsBlock
          .querySelector('.kam-112908-button_color_first')
          ?.classList.add('kam-112908-button_active');
      }
    },
  },
};
</script>
