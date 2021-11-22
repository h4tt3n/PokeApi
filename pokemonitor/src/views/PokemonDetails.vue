<template>
  <NavBar />

  <div v-if="pokemonRef">
      <div class="text-2xl">{{ pokemonRef.name }}</div>
      <div class="flex flex-row flex-nowrap my-2 w-full justify-center"><img :src="pokemonRef.sprites.other['official-artwork'].front_default"></div>
      <div class="flex flex-row flex-nowrap my-2 h-10 w-full justify-center">
        Id: {{ pokemonRef.id }} |
        Height: {{ pokemonRef.height }} |
        Base Experience: {{ pokemonRef.base_experience }} |
        Order: {{ pokemonRef.order }} |
        Weight: {{ pokemonRef.weight }}
      </div>

        <!-- <Abilities :id="pokemonRef.id" /> -->
        <!-- <Evolutions :name="pokemonRef.name" /> -->

  </div>
  <div v-else>
    Loading Pokemon...
  </div>
</template>

<script>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue'
import Abilities from '../components/Abilities.vue'
import Species from '../components/Species.vue'
import GrowthRates from '../components/GrowthRates.vue'
import Evolutions from '../components/Evolutions.vue'

export default {
  props: ['name'],
  components: {
    NavBar, Abilities, Species, GrowthRates, Evolutions
  },
  setup(props) {
    
    const pokemonRef = ref(null);
        
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