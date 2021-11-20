<template>
    <div v-for="pokemon in pokemonList" :key="pokemon.name">
        <router-link :to="{ name: 'PokemonDetails', params: { id: pokemon.name }}">
            <PokeCard :pokemon="pokemon" />
        </router-link>
    </div>
</template>s

<script>
import { ref } from 'vue';
import PokeCard from './PokeCard.vue'

export default {
    components: {
        PokeCard
    },
    setup() {

        const pokemonList = ref([]);

        const load = async () => {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');
            let jsonResult = await data.json();
            pokemonList.value = jsonResult.results;
        }
        load();
        
        return {
            pokemonList
        }
    }
}
</script>