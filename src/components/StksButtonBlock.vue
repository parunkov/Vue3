<template>
  <popin-buttons-block
    :buttons="buttons"
    type="changeStiksFilter"
    @changeFilters="onChangeFilters"
  />
</template>
<script>
import { inject } from 'vue';
import PopinButtonsBlock from './PopinButtonsBlock.vue';

export default {
  setup() {
    const filters = inject('filters');
    const updateFilters = inject('updateFilters');
    return {
      filters,
      updateFilters,
    };
  },
  data() {
    return {
      buttons: ['Все', 'Heets', 'Fiit'],
    };
  },
  components: { PopinButtonsBlock },
  methods: {
    onChangeFilters(event) {
      const newFilters = JSON.parse(JSON.stringify(this.filters));
      newFilters.stiks = event.text;
      this.updateFilters(newFilters);
      // console.log(this.filters.value.stiks);
    },
  },
};
</script>
