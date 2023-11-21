<template>
  <div class="growth-view">
    <h1>Psychological Growth and Life Tips</h1>

    <!-- Tip 1: Mindfulness -->
    <div class="tip-card">
      <h2>Cultivate Mindfulness</h2>
      <p>
        Practice being present in the moment. Mindfulness can reduce stress and
        enhance well-being.
      </p>
      <img :src="require('@/assets/growth.png')" alt="Mindfulness Tip" />
    </div>

    <!-- Tip 2: Self-Reflection -->
    <div class="tip-card">
      <h2>Regular Self-Reflection</h2>
      <p>
        Take time to reflect on your thoughts, emotions, and goals. It fosters
        personal growth.
      </p>
      <img :src="require('@/assets/growth.png')" alt="Self-Reflection Tip" />
    </div>

    <!-- Tip 3: Gratitude -->
    <div class="tip-card">
      <h2>Cultivate Gratitude</h2>
      <p>
        Express gratitude for the positive aspects of your life. It can lead to
        increased happiness.
      </p>
      <img :src="require('@/assets/growth.png')" alt="Gratitude Tip" />
    </div>

    <!-- Tip 4: Continuous Learning -->
    <div class="tip-card">
      <h2>Embrace Continuous Learning</h2>
      <p>
        Keep expanding your knowledge and skills. Lifelong learning contributes
        to personal development.
      </p>
      <img
        :src="require('@/assets/growth.png')"
        alt="Continuous Learning Tip"
      />
    </div>

    <!-- Add more tips and cards as needed -->
  </div>
</template>

<script>
export default {
  name: "GrowthView",
};
</script>

<style scoped>
h2 {
  color: #000;
}
.growth-view {
  text-align: center;
  padding: 20px;
}

.tip-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tip-card img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.tip-card h2 {
  margin-bottom: 10px;
}

.tip-card p {
  color: #000;
  margin-bottom: 15px;
}
</style>
