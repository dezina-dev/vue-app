<template>
  <div class="wrapper">
  <h2>All airports</h2>
    <div class="card-container">
      <div v-for="airport in airports" :key="airport.abbreviation" class="card">
        <airport-card :airport="airport" @add-to-favorites="addToFavorites" />
      </div>
    </div>
    <h2 v-if="$store.state.favorites.length">Favorite airports</h2>
    <div class="card-container favorites">
      <div v-for="airport in $store.state.favorites" :key="airport.abbreviation" class="card">
        <airport-card :airport="airport" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import allAirports from '@/data/airports.js';
import AirportCard from '@/components/AirportCard.vue';

export default {
  name: 'VuexView',
  components: {
    AirportCard,
  },
  setup() {
    const airports = ref(allAirports);
    const store = useStore();

    onMounted(() => {
      console.log('store.state.favorites', store.state.favorites);
    });

    const addToFavorites = (airport) => {
      store.dispatch('addToFavorites', airport);
    };

    return { airports, addToFavorites };
  },
};
</script>


<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  color: black;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-container.favorites {
  background-color: #BED171; /* Set your desired background color for favorite airports */
}
.favorites div {
background-color: #CDA3DC;
}
.card {
  width: 30%;
  margin-bottom: 15px;
}

h2 {
  text-align: center; /* Center the text horizontally */
  margin: 20px 0; /* Add some spacing around the heading */
}
</style>
