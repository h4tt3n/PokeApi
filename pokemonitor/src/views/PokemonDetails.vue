<template>

  <NavBarDetails />

  <div v-if="pokemonRef">
      <h1>{{ pokemonRef.name }}</h1>
      <img :src="pokemonRef.sprites.other['official-artwork'].front_default">

      <h2>Base properties:</h2>
        Id: {{ pokemonRef.id }}
        Height: {{ pokemonRef.height }}
        Base Experience: {{ pokemonRef.base_experience }}
        Order: {{ pokemonRef.order }}
        Weight: {{ pokemonRef.weight }}

        <Evolutions :id="pokemonRef.id" />

        <!-- <h2>Abilities:</h2>
        <li v-for="ability in pokemonRef.abilities" :key="ability.id">
          <ul>{{ability.ability.name}}</ul>
        </li>

        <h2>Forms:</h2>
        <li v-for="form in pokemonRef.forms" :key="form.id">
          <ul>{{form.name}}</ul>
        </li>

        <h2>Game indices:</h2>
        <li v-for="gameIndex in pokemonRef.game_indices" :key="gameIndex.id">
          <ul>Index: {{gameIndex.game_index}} Name: {{gameIndex.version.name}}</ul>
        </li>

        <h2>Held Items:</h2>
        <li v-for="item in pokemonRef.held_items" :key="item.id">
          <ul>{{item}}</ul>
        </li>

        <h2>Species:</h2>
        <li v-for="species in pokemonRef.species" :key="species.id">
          <ul>{{species}}</ul>
        </li> -->

        <!-- <Species :id="pokemonIdRef" /> -->



      <!-- <div v-if="pokemonIdRef">
        <Abilities :id="pokemonIdRef" />
        <Species :id="pokemonIdRef" />
        <GrowthRates :id="pokemonIdRef" />
      </div> -->

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