<template>
    <div v-if="pokemonRef" @click="logPokemon(pokemonRef)" class="">
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
            let data = await fetch(props.pokemon.url);
            let jsonResult = await data.json();
            pokemonRef.value = jsonResult;

            // console.log(pokemonRef);
        }
        loadPokemon();

        const logPokemon = p => {
            console.log(p);
        }

        return {
            pokemonRef,
            logPokemon
        };
    }
}
</script>


<style>
</style>