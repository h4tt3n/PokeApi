<template>
  <div class="pokemons">
    <PokeCardGrid />
  </div>
</template>

<script>
// @ is an alias to /src
import PokeCardGrid from '@/components/PokeCardGrid.vue'

export default {
  setup() {
    
  },
  components: {
    PokeCardGrid
  }
}
</script>