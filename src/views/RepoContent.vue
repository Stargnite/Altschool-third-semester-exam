<template>
	<h2>{{ repo.name }}</h2>
	<p> This is the repo content</p>
	<!-- <router-link to="/">
		<button class="home">Return Home</button>
	</router-link> -->
</template>


<script>
import { route } from 'vue-router'
import axios from 'axios';

export default {
  data() {
	return {
	  repo: [],
	}
  },
  created: function () {
	axios
	  .get("https://api.github.com/repos/Stargnite/"
	  )
	  .then((res) => {
		this.repo = res.data;
	  })
	  .catch((err) => {
		console.log(err);
	  });
  },
};
</script>









<style>
button {
	background-color: red;
}
</style>