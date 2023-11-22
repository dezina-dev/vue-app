<template>
  <div class="growth-view">
    <h1>Manage State in a Vue.js Application with Vuex</h1>

    <div class="tip-card">
      <p>
        In this tutorial, you will create an application that renders a list of
        cards with airport information in them. When clicked, these cards will
        execute the Vuex workflow to add the selected airport to a list of
        favorites. By running through this example, you will make actions and
        mutations to manage state and getters to retrieve computed data.
      </p>
    </div>
  </div>

  <div class="wrapper">
    <div v-for="airport in airports" :key="airport.abbreviation">
      <airport-card :airport="airport" />
    </div>
  </div>

    <div class="growth-view">
    <div class="tip-card">
      <p>
        This code contains a v-for loop that iterates through the airports.js
        data and renders a series of AirportCards.vue components with airport
        data passed in via the prop :airport.
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import allAirports from "@/data/airports.js";
import AirportCard from "@/components/AirportCard.vue";

export default {
  name: "VuexView",
  components: {
    AirportCard,
  },
  setup() {
    const airports = ref(allAirports);
    return { airports };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h3 {
  grid-column: span 3;
}
h2 {
  color: #000;
}
.growth-view {
  text-align: center;
  padding: 20px;
}

.tip-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tip-card img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.tip-card h2 {
  margin-bottom: 10px;
}

.tip-card p {
  color: #000;
  margin-bottom: 15px;
}
</style>
