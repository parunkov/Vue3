<template>
  <button type="button" class="kam-112908-button" :class="`kam-112908-button_color_${color}`">
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    color: String,
    text: String,
  },
};
</script>
