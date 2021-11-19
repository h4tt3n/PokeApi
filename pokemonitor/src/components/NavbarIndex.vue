<template>
    <nav>
        <button type="button">Search</button>
    </nav>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const navBarIndex = ref([]);
        
        return {
            navBarIndex
        }
    }
}
</script>

<style>

</style>