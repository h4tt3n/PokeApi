<template>
  <div>Welcome to PokeMonitor!</div>
  <Navbar />
  <PokemonCardGrid />
</template>

<script>
import Navbar from './components/Navbar'
import PokemonCardGrid from './components/PokemonCardGrid'

export default {
  name: 'App',
  components: {
    Navbar,
    PokemonCardGrid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
