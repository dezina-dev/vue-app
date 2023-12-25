<template>
  <div class="airport-card">
    <div class="card-content">
      <h3>{{ airport.name }} - {{ airport.abbreviation }}</h3>
      <p>City - {{airport.city}}</p>
      <p>State - {{airport.state}}</p>
    </div>
    <div class="favorite-icon" @click="addToFavorites" title="Favourite">
      ❤️
    </div>
  </div>
</template>

<script>
export default {
  props: {
    airport: Object,
  },
  methods: {
    addToFavorites() {
      this.$emit('add-to-favorites', this.airport);
    },
  },
};
</script>

<style scoped>
.airport-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-content {
  text-align: center;
}

.favorite-icon {
  cursor: pointer;
  font-size: 24px;
  margin-top: 10px;
}
</style>
