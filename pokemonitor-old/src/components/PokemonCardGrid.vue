<template>
    <div class="flex flex-row justify-center flex-wrap p-1">
        <PokemonCard v-for="pokemon in pokemonList" :key="pokemon.name" :pokemon="pokemon" />
    </div>
</template>

<script>
import { ref } from 'vue';
import PokemonCard from './PokemonCard.vue';

export default {
    components: {
        PokemonCard
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

<style>

</style>