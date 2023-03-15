<template>
  <div class="home">
    <div class="home-content">
      <img
        src="https://avatars.githubusercontent.com/u/99280209?v=4"
        alt="Avatar"
      />
      <div class="home-right">
        <h2>GitHub API data fetch</h2>
        <router-link to="/repoList">
          <button class="my-repos-btn" @click="removeHome">MY REPOS</button>
        </router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.home {
  color: whitesmoke;
}


.home-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.home-content img {
  justify-self: center;
  margin-top: 10vh;
  width: 25rem;
  height: 25rem;
  border-radius: 20%;

  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.home-right {
  text-align: center;
  justify-self: center;
  margin-top: 25vh;
  text-transform: capitalize;

  animation: slider ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}

.home-right h2 {
  font-size: 5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.my-repos-btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  animation: slider ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}

/* .arrow-up {
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 70px;
  animation-name: arrow-silde-up;
  animation-duration: 2s;
} */



@keyframes arrow-slide-up {
  from {
    bottom: 5;
  }
  to {
    bottom: 15;
  }
}

</style>
