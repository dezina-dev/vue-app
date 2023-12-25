<template>
  <div class="foodie-view">
    <h1>Cooking / Dining</h1>

    <!-- First Row: Food Delivery Services -->
    <h3>Order food</h3>
    <div class="row">
      <!-- Zomato Card -->
      <div class="food-card">
        <img :src="require('@/assets/zomato-logo.png')" alt="Zomato Logo" />
        <h2>Zomato</h2>
        <p>Discover and order from restaurants near you.</p>
        <a href="https://www.zomato.com/" target="_blank">Visit Zomato</a>
      </div>

      <!-- Swiggy Card -->
      <div class="food-card">
        <img :src="require('@/assets/swiggy-logo.png')" alt="Swiggy Logo" />
        <h2>Swiggy</h2>
        <p>Order food online from your favorite restaurants.</p>
        <a href="https://www.swiggy.com/" target="_blank">Visit Swiggy</a>
      </div>
       <!-- Eat sure Card -->
      <div class="food-card">
        <img :src="require('@/assets/eatsure.jpg')" alt="Eatsure Logo" />
        <h2>EatSure</h2>
        <p>Multiple restaurants. Mega Offers. One Delivery!</p>
        <a href="https://www.eatsure.com/mandarin-oak" target="_blank">Visit EatSure</a>
      </div>
    </div>

    <!-- Second Row: Cooking Recipes -->
    <h3>Cook food</h3>
    <div class="row">
      <!-- Recipe Card 1 -->
      <div class="food-card">
        <!-- Add recipe image -->
        <h2>Recipe 1</h2>
        <p>Lemon-Garlic Pasta with Salmon</p>
        <img src="https://www.eatingwell.com/thmb/SeNPBImM1opsMegGhE3sfHgS0vM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7124995-ba8df872a8a449faafcab85312e9869a.jpg" alt="Recipe image" width="150px" height="100px"/>
        <a href="https://www.eatingwell.com/recipe/276373/lemon-garlic-pasta-with-salmon/">View Recipe</a>
      </div>

      <!-- Recipe Card 2 -->
      <div class="food-card">
        <!-- Add recipe image -->
        <h2>Recipe 2</h2>
        <p>Chhole (Chickpea Curry)</p>
        <img src="https://www.eatingwell.com/thmb/qLnEv7TqecjHT_E8aXCtlX9SGzA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/38793671-094ef5584ee444219803492374646bd0.jpg" alt="Recipe image" width="150px" height="100px"/>
        <a href="https://www.eatingwell.com/recipe/255186/chickpea-curry-chhole/">View Recipe</a>
      </div>

      <!-- Recipe Card 2 -->
      <div class="food-card">
        <!-- Add recipe image -->
        <h2>Recipe 3</h2>
        <p>SMOKY MOUNTAIN CHEESY CRAWFISH</p>
        <img src="https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-Screen-Shot-2021-09-24-at-4.09.44-PM.png" alt="Recipe image" width="150px" height="100px"/>
        <a href="https://www.gordonramsay.com/gr/recipes/crawfishomelette/">View Recipe</a>
      </div>

      <!-- Recipe Card 4 -->
      <div class="food-card">
        <!-- Add recipe image -->
        <h2>Recipe 4</h2>
        <p>Schezwan Paneer</p>
        <img src="https://harpalssokhi.com/wp-content/uploads/2022/05/SCHEZWAN-PANEER-768x432.jpg" alt="Recipe image" width="150px" height="100px"/>
        <a href="https://harpalssokhi.com/recipe/schezwan-paneer/">View Recipe</a>
      </div>

       <!-- Recipe Card 5 -->
      <div class="food-card">
        <!-- Add recipe image -->
        <h2>Recipe 5</h2>
        <p>Shahi Gosht</p>
        <img src="https://harpalssokhi.com/wp-content/uploads/2021/04/Patiala-Shahi-Gosht-768x431.png" alt="Recipe image" width="150px" height="100px"/>
        <a href="https://harpalssokhi.com/recipe/patiala-shahi-gosht-%e0%a4%aa%e0%a4%9f%e0%a4%bf%e0%a4%86%e0%a4%b2%e0%a4%be-%e0%a4%b6%e0%a4%be%e0%a4%b9%e0%a5%80-%e0%a4%97%e0%a5%8b%e0%a4%b6%e0%a5%8d%e0%a4%a4/">View Recipe</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodieView',
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
  height: auto; /* Maintain aspect ratio for images */
  margin-bottom: 10px;
}

.food-card h2 {
  margin-bottom: 10px;
}

.food-card p {
  color: #000;
  margin-bottom: 15px;
}

.food-card a {
  color: blue;
  text-decoration: none;
  font-weight: bold;
  display: block;
}
</style>
