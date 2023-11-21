<!-- src/views/CareerView.vue -->

<template>
  <div class="career-view">
    <h1>Career Options</h1>

    <!-- Card 1: Learn from Udemy and Apply for Jobs -->
    <div class="career-card">
      <img :src="require('@/assets/learn.png')" alt="Udemy and Jobs Card" />
      <h2>Learn from Udemy and Apply for Jobs</h2>
      <p>Explore online courses on Udemy to enhance your skills. Apply for jobs to gain practical experience.</p>
    </div>

    <!-- Card 2: Go Abroad and Work -->
    <div class="career-card">
      <img :src="require('@/assets/abroad.png')" alt="Abroad Work Card" />
      <h2>Go Abroad and Work</h2>
      <p>Consider opportunities to work abroad. Experience new cultures and advance your career on an international level.</p>
    </div>

    <!-- Add more cards or content as needed -->

  </div>
</template>

<script>
export default {
  name: 'CareerView',
};
</script>

<style scoped>
h2 {
color: #000;
}
.career-view {
  text-align: center;
  padding: 20px;
}

.career-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.career-card img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.career-card h2 {
  margin-bottom: 10px;
}

.career-card p {
  color: #000;
  margin-bottom: 15px;
}
</style>
