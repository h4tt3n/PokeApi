<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>


  </div>

  <input type="text" v-model="searchWord">
  <div v-for="name in filteredNames" :key="name">
    {{ name }}

  </div>
</template>

<script>
import  { ref, computed } from 'vue' // this.$ref is not available in setup(), so we import it
import PostList from '../components/PostList.vue'

export default {
  components: { PostList },
  setup() { // The composition API. Runs before any lifecycle hooks
  
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok) {
          throw Error('No data available')
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    const showPosts = ref(true)

    //
    const searchWord = ref('')
    const names = ref(['Ash', 'Ripley', 'Parker', 'Brett', 'Dallas', 'Kane', 'Lambert', 'Jonesey'])
    const filteredNames = computed(() => {
      return names.value.filter((name) => name.toLowerCase().includes(searchWord.value.toLowerCase()))
    })

    return {
      searchWord, filteredNames, names, posts, showPosts, error
    }
  }
}
</script>
