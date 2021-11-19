<template>
    <nav>
        <button type="button">Prev</button>
        <button type="button">Next</button>
        <button type="button">Search</button>
    </nav>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const navBarDetails = ref([]);
        
        return {
            navBarDetails
        }
    }
}
</script>

<style>

</style>