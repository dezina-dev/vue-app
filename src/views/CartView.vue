<template>
  <div>
    <h1>Cart</h1>
    <div v-if="cart.length === 0">Cart is empty</div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <div class="item-details">
          <img :src="item.image" alt="Product Image" class="product-image" />
          <div>
            <p>{{ item.title }}</p>
            <p>Price: Rs. {{ item.price }}/-</p>
          </div>
        </div>
        <div class="item-actions">
          <button @click="decrementItem(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="incrementItem(item)">+</button>
          <button @click="removeItem(item)">Remove</button>
        </div>
      </div>
      <div class="cart-total">
        <p>Total: Rs. {{ calculateTotal }}/-</p>
        <button @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    calculateTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    incrementItem(item) {
      this.$store.dispatch('incrementQuantity', item);
    },
    decrementItem(item) {
      this.$store.dispatch('decrementQuantity', item);
    },
    removeItem(item) {
      this.$store.dispatch('removeFromCart', item);
    },
    checkout() {
      // Implement checkout logic as needed
      alert('Checkout clicked!');
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.item-details {
  display: flex;
  align-items: center;
}

.product-image {
  max-width: 50px;
  margin-right: 10px;
}

.item-actions button {
  margin: 0 5px;
}

.cart-total {
  margin-top: 20px;
}
</style>
