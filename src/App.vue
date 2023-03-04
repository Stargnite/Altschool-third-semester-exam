<template>
  <Overall />
</template>



<script>
import Overall from './components/Overall.vue'

export default {
  name: 'app',
  components: {
    Overall,
  },
  data() {
    return {
      
    }
  }
}

</script>









<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
