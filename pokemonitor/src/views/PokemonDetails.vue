<template>
  <div v-if="pokemonRef != null">
      Pokemon {{ pokemonRef.name }} details
  </div>
  <div v-else>
    Loading Pokemon...
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  props: ['id'],
  setup(props) {
    
    let pokemonRef = ref(null);
        
      const loadPokemon = async () => {
          let data = await fetch('https://pokeapi.co/api/v2/pokemon/' + props.id);
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