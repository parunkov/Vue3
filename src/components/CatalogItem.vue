<template>
  <div>
    <div class="catalog-main__item" :data-product-id="card.id">
      <div class="catalog-main__item-top">
        <img class="catalog-main__item-img" :src="card.image" :alt="card.title" />
      </div>
      <div class="catalog-main__item-name">
        {{ card.title }}
      </div>
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
<style lang="scss" scoped>
.catalog-main__item {
  text-align: left;
  letter-spacing: 1.2px;
  color: #34303d;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}
.catalog-main__item-top {
  text-align: left;
  letter-spacing: 1.2px;
  color: #34303d;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  background: #f3f3f3;
  height: 340px;
  min-height: 340px;
  padding: 40px 0 50px;
}
.catalog-main__item-img {
  text-align: left;
  letter-spacing: 1.2px;
  color: #34303d;
  box-sizing: border-box;
  padding: 0;
  font: inherit;
  border: 0;
  vertical-align: middle;
  display: block;
  height: auto;
  margin: auto;
  max-width: 160px;
  max-height: 184px;
}
.catalog-main__item-name {
  text-align: left;
  letter-spacing: 1.2px;
  box-sizing: border-box;
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  transition: color 0.6s;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  flex: auto;
  outline: 0;
  text-decoration: none;
}
.catalog-main__item-aromatic-flavor {
  text-align: left;
  letter-spacing: 1.2px;
  color: #34303d;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.catalog-main__item-aromatic-icon {
  text-align: left;
  letter-spacing: 1.2px;
  color: #34303d;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font: inherit;
  border: 0;
  vertical-align: middle;
  width: 35px;
  height: 35px;
  object-fit: contain;
}
.catalog-main__item-aromatic-text {
  text-align: left;
  letter-spacing: 1.2px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: block;
  font-size: 12px;
  margin-left: 10px;
  color: #40a326;
}
.catalog-main__item-group {
  text-align: left;
  letter-spacing: 1.2px;
  color: #34303d;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  align-items: baseline;
  margin-bottom: 20px !important;
  display: flex;
}
.catalog-main__item-price {
  text-align: left;
  letter-spacing: 1.2px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: block;
  font-size: 18px;
  color: #34303d;
}
.btn.black {
  letter-spacing: 1.2px;
  box-sizing: border-box;
  margin: 0;
  font: inherit;
  text-decoration: none;
  user-select: none;
  line-height: 1.5;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 30px;
  font-family: 'Iqos-Regular', sans-serif;
  font-size: 14px;
  text-align: center;
  z-index: 0;
  vertical-align: unset;
  background: #34303d;
  color: #fffdfb;
  position: relative;
  overflow: hidden;
  transition: all 0.35s;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-weight: normal;
}
</style>
