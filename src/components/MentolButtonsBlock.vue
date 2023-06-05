<template>
  <popin-buttons-block
    :buttons="buttons"
    type="changeStiksFilter"
    @changeFilters="onChangeFilters"
    :activeButton="this.filters.value?.mentol"
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
      buttons: ['Все', 'С ментолом', 'Без ментола'],
    };
  },
  components: { PopinButtonsBlock },
  methods: {
    onChangeFilters(event) {
      const newFilters = JSON.parse(JSON.stringify(this.filters.value));
      newFilters.mentol = event.text;
      this.updateFilters(newFilters);
      console.log('1-', newFilters);
      this.$emit('changeFilters');
      console.log(this.filters.value);
    },
  },
};
</script>
