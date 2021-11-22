<template>

  <div v-if="pokemonAbilitiesRef">
      <h2>Abilities:</h2>
      <div v-for="ability in pokemonAbilitiesRef" :key="ability">
        {{ ability }}
      </div>
  </div>
  <div v-else>
    Loading Pokemon abilities...
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['id'],

  setup(props) {
    
    let pokemonAbilitiesRef = ref(null);

      const loadAbilities = async () => {
          let data = await fetch('https://pokeapi.co/api/v2/ability/' + props.id);
          let jsonResult = await data.json();
          pokemonAbilitiesRef.value = jsonResult;
      }

      loadAbilities();

      return {
        pokemonAbilitiesRef
      };
  }
}
</script>