import { createStore } from 'vuex';

export default createStore({
  state: {
    favorites: [],
  },
  mutations: {
    addToFavorites(state, airport) {
      // Check if the airport is not already in favorites
      if (!state.favorites.some((fav) => fav.abbreviation === airport.abbreviation)) {
        state.favorites.push(airport);
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
  },
  getters: {
    // Any getters you may need
  },
});
