<template>

    <div class="flex flex-row flex-nowrap my-2 h-10 w-full justify-center">
      <input v-model="searchRef" class="rounded-full border-2 px-3 w-6/12 text-2xl" type="text" placeholder="Search...">
      <!-- <button class="rounded-r-full px-4 text-2xl bg-blue-400 hover:bg-blue-800 text-center text-black hover:text-white">Search</button> -->
    </div>

    <div class="grid grid-cols-6 gap-4">
        <div v-for="pokemon in matchingPokemons" :key="pokemon.name">
            <router-link :to="{ name: 'PokemonDetails', params: { name: pokemon.name }}">
                <PokeCard :pokemon="pokemon" />
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import PokeCard from './PokeCard.vue'

export default {

    components: {
        PokeCard
    },

    setup() {

        const searchRef = ref('');
        const pokemonArrayRef  = ref([]);

        const load = async () => {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0');
            let jsonResult = await data.json();
            pokemonArrayRef.value = jsonResult.results;
        }

        load();

        const matchingPokemons = computed(() => pokemonArrayRef.value.filter((pokemon) => pokemon.name.includes(searchRef.value)));
        
        return {
            searchRef,
            matchingPokemons, 
            pokemonArrayRef
        };
    }
}
</script>