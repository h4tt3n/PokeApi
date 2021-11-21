<template>
    <div v-if="pokemonRef">
        <h1>#{{ pokemonRef.id }}</h1>
        <img :src="pokemonRef.sprites.other['official-artwork'].front_default" alt="">
        <span class="text-center">{{ pokemonRef.name }}</span>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';

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
