<template>

  <div v-if="pokemonGrowthRatesRef">
      <h2>Growth rates:</h2>
      <div v-for="growthRate in pokemonGrowthRatesRef" :key="growthRate.id">
        {{ growthRate }}
      </div>
  </div>
  <div v-else>
    Loading Pokemon growth rates...
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['id'],

  setup(props) {
    
    let pokemonGrowthRatesRef = ref(null);

      const loadGrowthRates = async () => {
          let data = await fetch('https://pokeapi.co/api/v2/growth-rate/' + props.id);
          let jsonResult = await data.json();
          pokemonGrowthRatesRef.value = jsonResult;
      }

      loadGrowthRates();

      return {
        pokemonGrowthRatesRef
      };
  }
}
</script>