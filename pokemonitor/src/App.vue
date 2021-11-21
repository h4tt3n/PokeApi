<template>
  <Headline />
  <router-view />
</template>

<script>
import Headline from './components/Headline.vue'
import NavBar from './components/NavBar.vue'
import './assets/index.css'

export default {
  setup() {
    
  },
  components: {
    Headline, NavBar
  }
}
</script>
