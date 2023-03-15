<template>
  <video autoplay muted loop poster="" id="bg-video">
      <source src="./assets/background-vid.mp4" type="video/mp4" />
      <!-- <source src="./../assets/background-vid.mp4" type="video/mp4" /> -->
    </video>
  <nav>
    <h1>GitHub Fetch</h1>
    <div class="nav-btns">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/repoList">Repos</router-link>
    </div>
  </nav>
  <router-view />
</template>



<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      
    }
  }
}

</script>









<style>
#bg-video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: 100;
  height: auto;
  background-size: cover;
  z-index: -1;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #eee;
  padding: 1rem;
  background-color: #5375d1;

  animation: slider ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}

@keyframes slider {
  0% {
    transform: translateY(-40%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

nav h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
}

.nav-btns,
.nav-btns-sm {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  font-size: 1.5rem;
}

.nav-btns-sm {
  display: none;
}

.nav-icon {
  font-size: 1.5rem;
  display: none;
}

nav a {
  text-decoration: none;
  color: #252424;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.3s linear 0s;
}

nav a:hover,
nav a:focus {
  text-decoration: underline;
  color: white;
}

.active {
  display: block;
}

@media screen and (max-width: 560px) {
  .nav-btns {
    display: none;
    flex-direction: column;
  }

  .active {
    display: block;
  }

  .nav-icon {
    display: block;
  }
}



/* #app {
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
} */
</style>
