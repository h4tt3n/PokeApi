<template>
    <div>
        <nav>Nav bar</nav>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const navBar = ref([]);
        
        return {
            navBar
        }
    }
}
</script>

<style>

</style>