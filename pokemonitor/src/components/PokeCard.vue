<template>
    <div v-if="pokemonRef" class="">
        <span class="text-center">{{ pokemonRef.name }}</span>
        <img :src="pokemonRef.sprites.other['official-artwork'].front_default" alt="">
    </div>
</template>

<script>
import { ref } from 'vue';

export default {

    props: ['pokemon'],

    setup(props) {
        let pokemonRef = ref(null);
        
        const loadPokemon = async () => {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon/' + props.pokemon.name);
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
