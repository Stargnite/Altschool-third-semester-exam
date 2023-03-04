<template>
  <div class="home">
    <video autoplay muted loop poster="" id="bg-video">
      <source src="./../assets/background-vid.mp4" type="video/mp4" />
      <!-- <source src="./../assets/background-vid.mp4" type="video/mp4" /> -->
    </video>
    <h2>GitHub API data fetch</h2>
	<div class="arrow-up">
		<font-awesome-icon icon="fa-regular fa-arrow-up" />
		<font-awesome-icon icon="fa-solid fa-chevrons-up" />
	</div>
  </div>
</template>

<script></script>

<style>
* {
  margin: 0;
  padding: 0;
}

.home {
  width: 100%;
  height: 100vh;
  color: whitesmoke;
}

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

h2 {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: capitalize;
}

.arrow-up {
	position: fixed;
	bottom: 5%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 40px;
	height: 70px;
	animation-name: arrow-silde-up;
	animation-duration: 2s;
}

.fa-solid {
	color: red;
}

@keyframes arrow-slide-up {
	from{ bottom: 5;}
	to{bottom: 15;}
}
</style>
