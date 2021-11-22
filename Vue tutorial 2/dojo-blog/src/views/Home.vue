<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="searchWord">

    <div v-for="name in filteredNames" :key="name">
      {{ name }}
    </div>

  </div>
</template>

<script>
import  { ref, computed } from 'vue' // this.$ref is not available in setup(), so we import it

export default {
  setup() { // runs before any lifecycle hooks

    const searchWord = ref('')

    const names = ref(['Ash', 'Ripley', 'Parker', 'Brett', 'Dallas', 'Kane', 'Lambert', 'Jonesey'])

    const filteredNames = computed(() => {
      return names.value.filter((name) => name.toLowerCase().includes(searchWord.value.toLowerCase()))
    })

    return {
      searchWord, filteredNames, names
    }
  }
}
</script>
