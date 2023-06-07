import { data } from '@/data/data';
import catalogData from '@/parsing/catalogData.json';
import { ref } from 'vue';

export function useFilter() {
  const cards = ref(catalogData);

  function filterCards(catalogCards, filters) {
    cards.value = catalogCards;
    const filteredData = Object.keys(data)
      .filter((item) =>
        !filters.stiks || filters.stiks === 'Все' ? item : data[item].stiks === filters.stiks,
      )
      .filter((item) =>
        !filters.mentol || filters.mentol === 'Все' ? item : data[item].mentol === filters.mentol,
      )
      .filter((item) =>
        !filters.aroma ? item : data[item].aroma.some((item) => filters.aroma.includes(item)),
      );
    if (filters.stiks || filters.mentol || filters.aroma) {
      cards.value = catalogData.filter((item) => filteredData.includes(item.id));
    } else {
      cards.value = catalogData;
    }
  }

  return { cards, filterCards };
}
