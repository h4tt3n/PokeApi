<template>

  <NavBarDetails />

  <div v-if="pokemonRef">
      <h1>#{{ pokemonRef.id }} {{ pokemonRef.name }}</h1>
      <img :src="pokemonRef.sprites.other['official-artwork'].front_default" alt="">

      <h2>Base properties:</h2>
        Height: {{ pokemonRef.height }}
        Base Experience: {{ pokemonRef.base_experience }}
        Order: {{ pokemonRef.order }}
        Weight: {{ pokemonRef.weight }}

      <div v-if="pokemonRef.id">

        <Properties :name="'Abilities'" :url="'ability'" :id="pokemonRef.id" />
        <Properties :name="'Growth Rates'" :url="'growth-rate'" :id="pokemonRef.id" />

        <!-- <Abilities :id="pokemonRef.id" /> -->

        <!-- <Species :id="pokemonRef.id" /> -->

        <!-- <GrowthRates :id="pokemonRef.id" /> -->
      </div>

  </div>
  <div v-else>
    Loading Pokemon...
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import NavBarDetails from '../components/NavBarDetails.vue'
import Abilities from '../components/Abilities.vue'
import Species from '../components/Species.vue'
import GrowthRates from '../components/GrowthRates.vue'
import Properties from '../components/FetchProperty.vue'

export default {
  props: ['name'],
  components: {
    NavBarDetails, Abilities, Species, GrowthRates, Properties
  },
  setup(props) {
    
    const pokemonRef = ref(null);
    const pokemonIdRef = ref(null);
        
      const loadPokemon = async () => {
          let data = await fetch('https://pokeapi.co/api/v2/pokemon/' + props.name);
          let jsonResult = await data.json();
          pokemonRef.value = jsonResult;
      }

      loadPokemon();

      return {
        pokemonRef
      };
  }
}
</script>