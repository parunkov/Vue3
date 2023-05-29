<template>
  <div class="kam-112908-section__buttons-block">
    <GuideButton
      v-for="button in buttons"
      :key="button.text"
      :color="button.color"
      :text="button.text"
    />
  </div>
</template>
<script>
import GuideButton from './UI/GuideButton.vue';

export default {
  props: {
    buttons: Array,
  },
  components: { GuideButton },
};
</script>
