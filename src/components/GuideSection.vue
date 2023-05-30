<template>
  <div
    class="kam-112908-section kam-112908-section_type_main"
    :class="`kam-112908-section_content_${modifier}`"
    :data-content="modifier"
  >
    <div class="kam-112908-section__title-block">
      <div class="kam-112908-section__image" v-html="image"></div>
      <div class="kam-112908-section__text-block">
        <div class="kam-112908-section__title">{{ title }}</div>
        <div class="kam-112908-section__text">{{ text }}</div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    modifier: String,
    image: String,
    title: String,
    text: String,
  },
};
</script>
