import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: {
    favorites: [],
    products: [],
    cart: [],
  },
  mutations: {
    addToFavorites(state, airport) {
      // Check if the airport is not already in favorites
      if (!state.favorites.some((fav) => fav.abbreviation === airport.abbreviation)) {
        state.favorites.push(airport);
      }
    },
    setProducts(state, products) {
      state.products = products;
    },
    incrementQuantity(state, item) {
      console.log('item', item)
      item.quantity++;
    },
    decrementQuantity(state, item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeFromCart(state, item) {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id);
    },
    addToCart(state, product) {
      console.log('product', product)
      const cartItem = state.cart.find((item) => item.id === product.id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
  },
  actions: {
    addToFavorites({ commit, state }, airport) {
      // Check if the airport is not already in favorites
      if (!state.favorites.some((fav) => fav.abbreviation === airport.abbreviation)) {
        commit('addToFavorites', airport);
      }
    },
    async fetchProducts({ commit }) {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of the fake store API
        const response = await axios.get('https://fakestoreapi.com/products');
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    incrementQuantity({ commit }, item) {
      commit('incrementQuantity', item);
    },
    decrementQuantity({ commit }, item) {
      commit('decrementQuantity', item);
    },
    removeFromCart({ commit }, item) {
      commit('removeFromCart', item);
    },
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    cartCounter(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
});
