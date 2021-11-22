<template>

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