<template>
  <div>
    <div class="flavor-results__product-top">
      <img class="flavor-results__product-img" :src="stik.resultImage" />
    </div>
    <div class="flavor-results__product-bottom">
      <img class="flavor-results__product-icon" :src="stik.resultIcon" />
      <span class="flavor-results__product-taste">{{ stik.resultText }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    stik: Object,
  },
};
</script>
