<template>
  <div>
    <h1>Products</h1>
    <div v-if="products.length === 0" class="loading">Loading...</div>
    <div v-else>
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product Image" />
        <h6>{{ product.title }}</h6>
        <p>Rs. {{ product.price }}/-</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    addToCart(productId) {
      this.$store.dispatch('addToCart', productId);
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style>
.loading {
font-size: 20px;
font-weight: bold;
}
.product-card {
  width: 23%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  vertical-align: top;
}

.product-card img {
  width: 150px;
  height: 150px;
}

.product-card h6, p {
  font-color: black;
}
.product-card p {
  font-weight: bold;
}

@media (max-width: 768px) {
  .product-card {
    width: 48%;
  }
}

@media (max-width: 480px) {
  .product-card {
    width: 100%;
  }
}
</style>