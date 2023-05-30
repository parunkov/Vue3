<template>
  <div class="kam-112908-section__buttons-block">
    <guide-button
      v-for="button in buttons"
      :key="button.text"
      :color="button.color"
      :text="button.text"
    />
    <guide-button v-if="firstButton" :color="firstButton.color" :text="firstButton.text" />
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
};
</script>
