<template>
  <div>
    <div class="catalog-main">
      <div class="catalog-main__title">Каталог</div>
      <div class="catalog-main__grid">
        <catalog-item v-for="card in cards" :key="card.id" :card="card" />
      </div>
    </div>
    <catalog-popin @changeFilters="onChangeFilters" />
  </div>
</template>
<script>
import { provide, reactive } from 'vue';
import CatalogItem from '@/components/CatalogItem.vue';
import CatalogPopin from '@/components/CatalogPopin.vue';
import catalogData from '@/parsing/catalogData.json';
import { data } from '@/data/data';

export default {
  setup() {
    const filters = reactive({});
    const updateFilters = (newFilters) => {
      if (newFilters.stiks) {
        filters.stiks = newFilters.stiks;
      } else {
        delete filters.stiks;
      }
      if (newFilters.mentol) {
        filters.mentol = newFilters.mentol;
      } else {
        delete filters.mentol;
      }
      if (newFilters.aroma) {
        filters.aroma = [...newFilters.aroma];
      } else {
        delete filters.aroma;
      }
    };
    provide('filters', filters);
    provide('updateFilters', updateFilters);
    return { filters };
  },
  data() {
    return {
      cards: catalogData,
      catalogFilters: {},
    };
  },
  components: { CatalogItem, CatalogPopin },
  methods: {
    onChangeFilters() {
      const filteredData = Object.keys(data)
        .filter((item) =>
          !this.filters.stiks || this.filters.stiks === 'Все'
            ? item
            : data[item].stiks === this.filters.stiks,
        )
        .filter((item) =>
          !this.filters.mentol || this.filters.mentol === 'Все'
            ? item
            : data[item].mentol === this.filters.mentol,
        )
        .filter((item) =>
          !this.filters.aroma
            ? item
            : data[item].aroma.some((item) => this.filters.aroma.includes(item)),
        );
      if (this.filters.stiks || this.filters.mentol || this.filters.aroma) {
        this.cards = catalogData.filter((item) => filteredData.includes(item.id));
      } else {
        this.cards = catalogData;
      }
    },
  },
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
  padding-bottom: 30px;
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
.catalog-main__grid {
  text-align: left;
  letter-spacing: 1.2px;
  color: #34303d;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px 15px;
  grid-auto-rows: auto;
  width: 100%;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 10px;
  }
  @media (max-width: 669px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px 0;
  }
}
</style>
