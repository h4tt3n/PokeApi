<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>


  </div>

  <!-- <input type="text" v-model="searchWord">
  <div v-for="name in filteredNames" :key="name">
    {{ name }}

  </div> -->
</template>

<script>
import  { computed } from 'vue' // this.$ref is not available in setup(), so we import it
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts.js'

export default {
  components: { PostList },
  setup() { // The composition API. Runs before any lifecycle hooks

    const { posts, error, load } = getPosts()
 
    load()

    //
    // const searchWord = ref('')
    // const names = ref(['Ash', 'Ripley', 'Parker', 'Brett', 'Dallas', 'Kane', 'Lambert', 'Jonesey'])
    // const filteredNames = computed(() => {
    //   return names.value.filter((name) => name.toLowerCase().includes(searchWord.value.toLowerCase()))
    // })

    return {
      posts, error //, searchWord, filteredNames, names
    }
  }
}
</script>
