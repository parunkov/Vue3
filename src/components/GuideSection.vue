<template>
  <div
    class="kam-112908-section kam-112908-section_type_main"
    :class="`kam-112908-section_content_${modifier}`"
    :data-content="modifier"
  >
    <guide-section-title :text="text" :title="title" :image="image" />
    <slot></slot>
  </div>
</template>
<script>
import GuideSectionTitle from './GuideSectionTitle.vue';
export default {
  props: {
    modifier: String,
    image: String,
    title: String,
    text: String,
  },
  components: { GuideSectionTitle },
};
</script>
