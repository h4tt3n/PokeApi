<template>
    <div class="flex flex-row justify-center flex-wrap p-1">
        <div v-for="pokemon in pokemonList" :key="pokemon.name">
            <router-link :to="{ name: 'PokemonDetails', params: { name: pokemon.name }}">
                <PokeCard :pokemon="pokemon" />
            </router-link>
        </div>
    </div>
</template>

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
            let data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
            let jsonResult = await data.json();
            pokemonList.value = jsonResult.results;
        }
        load();
        
        return {
            pokemonList
        }
    },
    // computed () {
    //     const matchingPokemons = computed(() => pokemonList.value.filter((pokemon) => pokepokemonListmon.name.includes(search.value)));
    // }
}
</script>