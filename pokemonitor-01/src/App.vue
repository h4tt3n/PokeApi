<template>
  <div>Welcome to PokeMonitor!</div>
  <NavbarIndex />
  <PokemonCardGrid />
</template>

<script>
import NavbarIndex from './components/NavbarIndex'
import PokemonCardGrid from './components/PokemonCardGrid'

export default {
  name: 'App',
  components: {
    NavbarIndex,
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
