<template>
  <div class="learn-view">
    <h1>How to Learn Vue.js?</h1>

    <div class="learning-flow">
      <div class="step-column">
        <section class="learning-step">
          <h2>Step 1: Explore Resources</h2>
          <p>
            Start by exploring online resources. Check out these links:
            <ul>
              <li><a href="https://www.interviewbit.com/vue-js-interview-questions/#single-page-application" target="_blank">Vue.js Interview Questions</a></li>
              <li><a href="https://github.com/sudheerj" target="_blank">Sudheerj's GitHub</a></li>
            </ul>
          </p>
          <div class="chart-placeholder animated bounce"></div>
        </section>

        <section class="learning-step">
          <h2>Step 3: Learn Theory & Concepts</h2>
          <p>
            Dive into the theory and concepts of Vue.js. Understand the core concepts like data binding, directives, and components.
          </p>
          <div class="chart-placeholder"></div>
        </section>

        <section class="learning-step">
          <h2>Step 5: Revise Often</h2>
          <p>
            Regularly revise and reinforce your Vue.js knowledge. Stay up-to-date with the latest features and best practices.
          </p>
          <div class="chart-placeholder"></div>
        </section>
      </div>

      <div class="step-column">
        <section class="learning-step">
          <h2>Step 2: Watch Videos</h2>
          <p>
            Watch some Vue.js tutorial videos to get started:
            <ul>
              <li><a href="https://www.youtube.com/watch?v=bzlFvd0b65c" target="_blank">Vue.js Introduction</a></li>
              <li><a href="https://www.youtube.com/watch?v=cfiN8lCA3RM" target="_blank">Vue.js Crash Course</a></li>
              <li><a href="https://www.youtube.com/watch?v=KTFH4P8unUQ" target="_blank">Vue.js State Management</a></li>
              <li><a href="https://www.youtube.com/watch?v=meNlx84DLB8" target="_blank">Vue.js Routing</a></li>
              <li><a href="https://www.youtube.com/watch?v=qZXt1Aom3Cs" target="_blank">Vue.js Components</a></li>
            </ul>
          </p>
          <div class="chart-placeholder"></div>
        </section>

        <section class="learning-step">
          <h2>Step 4: Practice Coding</h2>
          <p>
            Implement a Vue.js app. Use your knowledge to build something practical. Practice is key to mastering Vue.js.
          </p>
          <div class="chart-placeholder"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css'; // Import the animate.css library

export default {
  name: 'LearnView',
  methods: {
    changeColor(step) {
      // Replace this with actual logic to change the color
      alert(`Clicked on ${step}`);
    }
  }
};
</script>

<style scoped>
h1, h2, p, ul, li, a {
  color: #000;
}

.learn-view {
  text-align: center;
  padding: 20px;
}

.learning-flow {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.step-column {
  flex: 1;
}

.learning-step {
  margin-bottom: 40px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.learning-step:hover {
  background-color: #f0f0f0;
}

.chart-placeholder {
  height: 100px;
  background-color: #ddd; /* Placeholder color for charts */
  margin-top: 10px;
}

/* Add styles for animate.css classes */
.animated {
  animation-duration: 1s;
}

.fadeIn {
  animation-name: fadeIn;
}

/* Define the bounce animation */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

.bounce {
  animation-name: bounce;
}

</style>
