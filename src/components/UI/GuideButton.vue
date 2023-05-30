<template>
  <button
    type="button"
    class="kam-112908-button"
    :class="`kam-112908-button_color_${color}`"
    @click="
      $emit('buttonClick', {
        text: $event.target.innerText,
        section: $event.target.closest('.kam-112908-section')?.dataset?.content,
      })
    "
  >
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
