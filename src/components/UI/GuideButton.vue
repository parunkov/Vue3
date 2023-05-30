<template>
  <button
    type="button"
    class="kam-112908-button"
    :class="`kam-112908-button_color_${color}`"
    :data-type="type"
    @click="
      $emit('buttonClick', {
        text: $event.target.innerText,
        section: $event.target.closest('.kam-112908-section')?.dataset?.content,
        type: $event.target.dataset?.type,
        target: $event.target,
        active: $event.target.classList.contains('kam-112908-button_active'),
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
    type: String,
  },
};
</script>
