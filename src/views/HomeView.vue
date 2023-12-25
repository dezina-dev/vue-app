<template>
  <div>
    <!-- Two Columns for Navigation Cards -->
    <div class="card-container">
      <div class="column">
        <!-- Navigation Card 1 -->
        <div class="card" @click="navigateTo('/funny')">
          <h2>Be funny</h2>
          <p>Learn more.</p>
        </div>
      </div>

      <div class="column">
        <!-- Navigation Card 2 -->
        <div class="card" @click="navigateTo('/wellness')">
          <h2>Wellness</h2>
          <p>Learn more</p>
        </div>
      </div>
      </div>
      <div class="card-container">
       <div class="column">
        <!-- Navigation Card 3 -->
        <div class="card" @click="navigateTo('/career')">
          <h2>Career</h2>
          <p>Learn more</p>
        </div>
      </div>
      <div class="column">
        <!-- Navigation Card 4 -->
        <div class="card" @click="navigateTo('/grow-up')">
          <h2>Grow Up</h2>
          <p>Learn more</p>
        </div>
      </div>
      </div>

      <div class="card-container">
       <div class="column">
        <!-- Navigation Card 5 -->
        <div class="card" @click="redirectToChatGPT">
          <h2>Ask anything</h2>
          <p>Learn more.</p>
        </div>
      </div>
      <div class="column">
        <!-- Navigation Card 6 -->
        <div class="card" @click="redirectToNews">
          <h2>News</h2>
          <p>Learn more.</p>
        </div>
      </div>
      </div>

      <div class="card-container">
       <div class="column">
        <!-- Navigation Card 7 -->
        <div class="card" @click="navigateTo('/grooming')">
          <h2>Personal Appearance</h2>
          <p>Learn more.</p>
        </div>
      </div>
      <div class="column">
        <!-- Navigation Card 8 -->
        <div class="card" @click="navigateTo('/foodie')">
          <h2>Cooking/Dining</h2>
          <p>Learn more</p>
        </div>
      </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
     redirectToChatGPT() {
      window.location.href = 'https://chatgpt.com';
    },
    redirectToNews() {
    window.location.href = 'https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en';
    }
  },
};
</script>

<style scoped>
h2 {
color: #000;
}

.card-container {
  display: flex;
}

.column {
  flex: 1;
  margin: 0 10px;
}

.card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 10px;
  cursor: pointer;
}

.card:hover {
  background-color: #f0f0f0;
}
</style>
