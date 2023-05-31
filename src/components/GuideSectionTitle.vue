<template>
  <div class="kam-112908-section__title-block">
    <div class="kam-112908-section__image" v-html="image"></div>
    <div class="kam-112908-section__text-block">
      <div class="kam-112908-section__title">{{ title }}</div>
      <div class="kam-112908-section__text">{{ text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: String,
    title: String,
    text: String,
  },
};
</script>
