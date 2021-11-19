<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import  { ref } from 'vue' // this.$ref is not available in setup(), so we import it

export default {
  name: 'Home',
  setup() { // runs before any lifecycle hooks
    console.log('setup')

    const p = ref(null)  // this.$ref is not available in setup(), so we import it
    console.log(p, p.value)

    let name = 'mario' // non-reactive values
    let age = 30

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas'
    }

    return {
      //name: name, age: age
      name, age, handleClick, p
    }
  },
  data() {
    return {
      name: 'mario', // reactive values
      age: 30
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>
