<template>
    <NavbarDetails />
</template>

<script>
import { ref } from 'vue';
import NavbarDetails from './NavbarDetails'

export default {
    setup() {
        const pokemonDetails = ref([]);
        
        return {
            NavbarDetails,
            pokemonDetails
        }
    }
}
</script>

<style>

</style>