<template>

  <NavBarDetails />

  <div v-if="pokemonRef">
      <h1>{{ pokemonRef.name }}</h1>
      <img :src="pokemonRef.sprites.other['official-artwork'].front_default">
      <div class="class">
        <h2>Base properties:</h2>
          Id: {{ pokemonRef.id }}
          Height: {{ pokemonRef.height }}
          Base Experience: {{ pokemonRef.base_experience }}
          Order: {{ pokemonRef.order }}
          Weight: {{ pokemonRef.weight }}
      </div>

        <Evolutions :name="pokemonRef.name" />

  </div>
  <div v-else>
    Loading Pokemon...
  </div>
</template>

<script>
import { ref } from 'vue';
import NavBarDetails from '../components/NavBarDetails.vue'
import Abilities from '../components/Abilities.vue'
import Species from '../components/Species.vue'
import GrowthRates from '../components/GrowthRates.vue'
import Evolutions from '../components/Evolutions.vue'

export default {
  props: ['name'],
  components: {
    NavBarDetails, Abilities, Species, GrowthRates, Evolutions
  },
  setup(props) {
    
    const pokemonRef = ref(null);
    const pokemonIdRef = ref(null);
        
      const loadPokemon = async () => {
          let data = await fetch('https://pokeapi.co/api/v2/pokemon/' + props.name);
          let jsonResult = await data.json();
          pokemonRef.value = jsonResult;
          pokemonIdRef.value = pokemonRef.value.id;
      }

      loadPokemon();

      return {
        pokemonRef, pokemonIdRef
      };
  }
}
</script>