<template>
  <popin-buttons-block
    :buttons="buttons"
    type="changeStiksFilter"
    modifier="mentol"
    @changeFilters="onChangeFilters"
  />
  <!-- :activeButton="this.filters.mentol" -->
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
      buttons: ['Все', 'С ментолом', 'Без ментола'],
    };
  },
  components: { PopinButtonsBlock },
  methods: {
    onChangeFilters(event) {
      const newFilters = this.filters;
      newFilters.mentol = event.text;
      this.updateFilters(newFilters);
      this.$emit('changeFilters');
    },
  },
};
</script>
