<template>
  <div v-if="loading">Loading...</div>
  <!-- <h1>My Repositories</h1> -->
  <div class="cards-cont" v-else>
    <div v-for="repo in repos" :key="repo.id">
      <router-link :to="`/repolist/${repo.name}`">
        <div class="card" @click="activeRepo = RepoContent">
          <h2>{{ repo.name }}</h2>
          <p>{{ repo.description }}</p>
        </div>
      </router-link>
    </div>
  </div>

  <router-link to="/">
    <button class="home">Return Home</button>
  </router-link>
</template>

<script>
import axios from "axios";
import RepoContent from "./RepoContent.vue";

const changePage = () => {
  const repoList = document.querySelector(".cards-cont");
  const card = document.querySelector(".card");

  repoList.style.display = "none";
};

export default {
  name: "RepoList",
  components: {
    RepoContent,
  },
  data() {
    return {
      repos: [],
      loading: true,
      activeRepo: null,
    };
  },
  methods: {
    changePage,
  },
  created: function () {
    axios
      .get("https://api.github.com/users/Stargnite/repos")
      .then((res) => {
        this.repos = res.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.cards-cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
}

.card {
  width: 20rem;
  height: 10rem;
  background-color: #1e1e1e;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
  background-color: #1c303d;
  transition: all 0.3s ease-in-out;
}

a {
  color: aliceblue;
  text-decoration: none;
}
.home {
  background-color: #436081;
  border: none;
  padding: 0px 0;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  max-width: 7rem;
  max-height: 3rem;
  margin: 1rem;
}
</style>
