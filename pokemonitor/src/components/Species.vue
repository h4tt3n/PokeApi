<template>
  <div v-if="pokemonSpeciesRef">
      <h2>Species:</h2>
      <div v-for="species in pokemonSpeciesRef" :key="species.id">
        {{ species }}
      </div>
  </div>
  <div v-else>
    Loading Pokemon species...
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['id'],

  setup(props) {
    
    let pokemonSpeciesRef = ref(null);

    //   const loadSpecies = async () => {
    //       let data = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + props.id);
    //       let jsonResult = await data.json();
    //       pokemonSpeciesRef = jsonResult;
    //       console.log(jsonResult);
    //   }

    fetch('https://pokeapi.co/api/v2/pokemon-species/' + props.id)
            .then(response => response.json())
            .then(data => pokemonSpeciesRef.value = data)
            .catch(error => console.log(error.message));

    

      //loadSpecies();

      return {
        pokemonSpeciesRef
      };
  }
}
</script>