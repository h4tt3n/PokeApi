<template>

  <div v-if="pokemonPropertyRef">
      <h2>{{ nameRef }}:</h2>
      <div v-for="property in pokemonPropertyRef" :key="property.id">
        {{ property }}
      </div>
  </div>
  <div v-else>
    Loading Pokemon {{ nameRef }}...
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  props: ['name', 'url', 'id'],

  setup(props) {
    
    let nameRef = ref(props.name);
    let urlRef = ref(props.url);
    let idRef = ref(props.id);
    let pokemonPropertyRef = ref(null);

      const loadProperty = async () => {
          let data = await fetch('https://pokeapi.co/api/v2/' + urlRef.value + '/' + idRef.value);
          let jsonResult = await data.json();
          pokemonPropertyRef.value = jsonResult;
      }

      loadProperty();

      return {
        nameRef, urlRef, idRef, pokemonPropertyRef
      };
  }
}
</script>