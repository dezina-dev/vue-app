<template>
  <div class="wellness-view">
    <h1>Wellness Practices</h1>

    <!-- Meditation Section -->
    <div class="wellness-section">
      <h2>Meditation</h2>
      <div class="wellness-card">
        <!-- Video Container -->
        <div class="wellness-video">
          <!-- Add meditation video here -->
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/zSkFFW--Ma0?si=jcLfjtWG9yQBOWB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <!-- Tips Container -->
        <div class="wellness-tips">
          <h3>Tips for Meditation</h3>
          <ul>
            <li>Find a quiet and comfortable space.</li>
            <li>Focus on your breath and let go of thoughts.</li>
            <li>Start with short sessions and gradually increase.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Yoga Section -->
    <div class="wellness-section">
      <h2>Yoga</h2>
      <div class="wellness-card">
        <!-- Video Container -->
        <div class="wellness-video">
          <!-- Add yoga video here -->
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/b1H3xO3x_Js?si=YB2eTA7OJ7F-HQq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <!-- Tips Container -->
        <div class="wellness-tips">
          <h3>Tips for Yoga</h3>
          <ul>
            <li>Use a yoga mat for comfort and stability.</li>
            <li>Follow a routine that suits your fitness level.</li>
            <li>Pay attention to your breathing throughout the practice.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Physical Warm-up Section -->
    <div class="wellness-section">
      <h2>Physical Warm-up</h2>
      <div class="wellness-card">
        <!-- Video Container -->
        <div class="wellness-video">
          <!-- Add warm-up video here -->
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/utBERF6BPxQ?si=VdqQ6A5WvorVZrYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <!-- Tips Container -->
        <div class="wellness-tips">
          <h3>Tips for Physical Warm-up</h3>
          <ul>
            <li>Start with light cardiovascular exercises.</li>
            <li>Include dynamic stretches for flexibility.</li>
            <li>Listen to your body and avoid overexertion.</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WellnessView',
};
</script>

<style scoped>
/* Add your styles here */
.wellness-view {
  text-align: center;
  padding: 20px;
}

.wellness-section {
  display: flex;
  flex-wrap: nowrap; /* Ensure cards stay in a single row */
  justify-content: space-around; /* Add space between cards */
}

.wellness-card {
  display: flex;
  flex-wrap: nowrap; /* Ensure video and tips stay in a single row */
  max-width: 800px; /* Set a maximum width for better responsiveness */
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.wellness-video,
.wellness-tips {
  flex: 1;
  padding: 20px;
}

.wellness-video iframe {
  border: none;
}

.wellness-tips ul {
  list-style-type: none;
  padding: 0;
}

.wellness-tips li {
  margin-bottom: 10px;
}
</style>
