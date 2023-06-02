<template>
  <div>
    <div class="catalog-main__item" :data-product-id="card.id">
      <div class="catalog-main__item-top">
        <img class="catalog-main__item-img" :src="card.image" :alt="card.title" />
      </div>
      <a class="catalog-main__item-name" href="/ru/catalog/delivery-settings/viola/">
        {{ card.title }}
      </a>
      <div v-if="card.icon" class="catalog-main__item-aromatic-flavor">
        <img class="catalog-main__item-aromatic-icon" :src="card.icon" />
        <span class="catalog-main__item-aromatic-text" :style="`color: ${card.textColor}`">{{
          card.text
        }}</span>
      </div>
      <div class="catalog-main__item-group">
        <span class="catalog-main__item-price">{{ card.price }}</span>
      </div>
      <div class="btn black add2cart">{{ card.buttonText }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: Object,
  },
};
</script>
<style lang=""></style>
