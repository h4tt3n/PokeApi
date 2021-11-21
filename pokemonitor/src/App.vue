<template>
  <Headline />
  <router-view />
</template>

<script>
import Headline from './components/Headline.vue'
import './assets/index.css'

export default {
  components: {
    Headline
  }
}
</script>
