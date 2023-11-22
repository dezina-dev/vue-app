<template>
<div id="app" class="gradient-background">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/concepts">Concepts</router-link>
    <router-link to="/crud">Crud</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/vuex">Vuex</router-link>
  </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
};
</script>
<style>
/* Import the styles */
@import './assets/styles.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: auto; /* Add scrollbar */
  max-height: 100vh; /* Set maximum height as needed */
}

nav {
  background-color: #333;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
