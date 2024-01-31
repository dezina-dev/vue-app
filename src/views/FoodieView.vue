<template>
  <div class="foodie-view">
    <h1>Cooking / Dining</h1>

    <!-- First Row: Food Delivery Services -->
    <h3>Order food</h3>
    <div class="row">
      <div class="food-card" v-for="(service, index) in services" :key="index">
        <img :src="service.logo" :alt="`${service.name} Logo`" />
        <h2>{{ service.name }}</h2>
        <p>{{ service.description }}</p>
        <a :href="service.link" target="_blank">Visit {{ service.name }}</a>
      </div>
    </div>

    <!-- Second Row: Cooking Recipes -->
    <h3>Cook food</h3>
    <img src="@/assets/zomato-logo.png" alt="Pasta Image" width="150px" height="100px" />

    <div class="row">
      <div class="food-card" v-for="(recipe, index) in recipes" :key="index">
        <p>{{ recipe.name }}</p>
        <img :src="recipe.image" :alt="`${recipe.name} Logo`" />
       <a :href="recipe.link" target="_blank">View Recipe</a>
      </div>
    </div>
  </div>
</template>

<script>
import foodMixin from '@/mixins/foodMixin.js';
import pastaImage from '@/assets/pasta.webp';

export default {
  name: 'FoodieView',
  mixins: [foodMixin],
  data() {
    return {
      pastaImage: pastaImage,
    };
  },
  mounted() {
    console.log('services:', this.services);
    console.log('Recipes:', this.recipes);
  },
};
</script>

<style scoped>
/* Add your styles here */
h1, h2, h3, p, a {
  color: black;
}

.foodie-view {
  text-align: center;
  padding: 20px;
  overflow-x: hidden; /* Disable horizontal scrolling */
}

.row {
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next line if needed */
  margin-bottom: 20px;
}

.food-card {
  flex: 1 0 200px; /* Allow cards to grow, set a fixed width of 300px */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.food-card img {
  max-width: 100%;
  height: 100px; /* Set a fixed height for all images */
  object-fit: cover; /* Maintain aspect ratio and cover the entire space */
  margin-bottom: 10px;
}

.food-card h2 {
  margin-bottom: 10px;
}

.food-card p {
  color: #000;
  margin-bottom: 15px;
  font-size: 14px; /* Set a fixed font size for all recipe descriptions */
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden;
  text-overflow: ellipsis; /* Display ellipsis (...) if the text overflows */
}

.food-card a {
  color: blue;
  text-decoration: none;
  font-weight: bold;
  display: block;
}
</style>
