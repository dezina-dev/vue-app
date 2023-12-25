<template>
  <div id="app" class="gradient-background">
    <nav>
      <div class="nav-links">
        <router-link to="/" class="router-link">Home</router-link>
        <router-link to="/learn-it" class="router-link">Learn It</router-link>
        <router-link to="/crud" class="router-link">Crud</router-link>
        <router-link to="/form" class="router-link">Form</router-link>
        <router-link to="/vuex" class="router-link">Vuex</router-link>
        <router-link to="/shopping" class="router-link">Shopping</router-link>
      </div>
      <router-link to="/cart" class="cart-link">
        Cart <div class="cart-icon">🛒</div>
        <div class="cart-counter" v-if="cartCounter > 0">{{ cartCounter }}</div>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    cartCounter() {
      return this.$store.getters.cartCounter;
    },
  },
};
</script>

<style>

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  margin-bottom: 25px;
}

.nav-links {
  display: flex;
  gap: 10px; /* Adjust the gap between links */
}

.router-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 10px; /* Adjust padding for each link */
}

.cart-link {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 10px; /* Adjust padding for the cart link */
}

.cart-icon {
  cursor: pointer;
  font-size: 24px;
  margin-left: 5px;
}
</style>
