<template>
    <NavBar />
  <div class="pokemons">
    <PokeCardGrid />
  </div>
</template>

<script>
// @ is an alias to /src
import PokeCardGrid from '@/components/PokeCardGrid.vue'
import NavBar from '../components/NavBar.vue'

export default {
  setup() {
    
  },
  components: {
    PokeCardGrid, NavBar
  }
}
</script>