<template>
  <div>
    <div class="catalog-main">
      <div class="catalog-main__title">Каталог</div>
      <div class="catalog-main__grid">
        <catalog-item v-for="card in cards" :key="card.id" :card="card" />
      </div>
    </div>
  </div>
</template>
<script>
import CatalogItem from '@/components/CatalogItem.vue';
import catalogData from '@/parsing/catalogData.json';
console.log(catalogData);

export default {
  data() {
    return {
      cards: catalogData,
    };
  },
  components: { CatalogItem },
};
</script>
<style lang="scss" scoped>
.catalog-main {
  text-align: left;
  letter-spacing: 1.2px;
  color: #34303d;
  box-sizing: border-box;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  width: 100%;
  max-width: 924px;
  padding: 0 15px;
  margin: 0 auto;
  padding-top: 30px;
  @media (max-width: 924px) {
    max-width: 100%;
  }
}
.catalog-main__title {
  text-align: left;
  letter-spacing: 1.2px;
  color: #34303d;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-bottom: 30px;
  font-size: 30px;
  font-family: 'Iqos-Bold', sans-serif;
  font-weight: 700;
}
</style>
