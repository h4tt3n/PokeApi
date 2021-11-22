// Get pokemon
// Get species
// Get evolution-chain

<template>
    <h2>Next Evolution:</h2>
    <div v-for="evolution in pokemonEvolutionChain" :key="evolution.id">
        {{evolution.species.name}}
    </div>

</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: ['name'],

  setup(props) {
    
    const pokemonRef = ref(null);
    const speciesRef = ref(null);
    const evolutionChainRef = ref(null);

    const pokemonSpeciesName = ref('');
    const pokemonEvolutionChainURl = ref('');
    const pokemonEvolutionChain = ref('');

      const loadPokemon = async (name) => {
          let data = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
          let jsonResult = await data.json();
          pokemonRef.value = jsonResult;
          pokemonSpeciesName.value = pokemonRef.value.species.name;
      }

    const loadSpecies = async () => {
          let data = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokemonSpeciesName.value);
          let jsonResult = await data.json();
          speciesRef.value = jsonResult;
          pokemonEvolutionChainURl.value = speciesRef.value.evolution_chain.url;
      }

    const loadEvolutionChain = async () => {
          let data = await fetch(pokemonEvolutionChainURl.value);
          let jsonResult = await data.json();
          evolutionChainRef.value = jsonResult;
          pokemonEvolutionChain.value = evolutionChainRef.value.chain.evolves_to;
      }

        loadPokemon(props.name);
        watch(pokemonSpeciesName, loadSpecies);
        watch(pokemonEvolutionChainURl, loadEvolutionChain);

      return {
        evolutionChainRef, pokemonEvolutionChain
      };
  }
}
</script>
