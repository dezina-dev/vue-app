<template>
  <div class="personal-appearance-view">
    <h1>Personal Appearance Tips</h1>

    <!-- Tip 1: Clothing -->
    <div class="tip-card">
      <img :src="require('@/assets/clothing.png')" alt="Clothing Tip" />
      <h2>Wear Well-Fitted Clothing</h2>
      <p>Choose clothing that fits well and complements your body shape.</p>
    </div>

    <!-- Tip 2: Grooming -->
    <div class="tip-card">
      <img :src="require('@/assets/grooming.png')" alt="Grooming Tip" />
      <h2>Maintain Good Grooming Habits</h2>
      <p>Regular grooming, including skincare and hair care, contributes to a polished look.</p>
    </div>

    <!-- Tip 3: Accessories -->
    <div class="tip-card">
      <img :src="require('@/assets/accessories.png')" alt="Accessories Tip" />
      <h2>Add Stylish Accessories</h2>
      <p>Enhance your outfit with well-chosen accessories like jewelry, watches, or belts.</p>
    </div>

    <!-- Add more tips and cards as needed -->

  </div>
</template>

<script>
export default {
  name: 'PersonalAppearanceView',
};
</script>

<style scoped>
/* Add your styles here */
h2 {
color: #000;
}
.personal-appearance-view {
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
