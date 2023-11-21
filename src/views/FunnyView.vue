<template>
  <div class="funny-view">
    <h1>Be Funny, Make 'Em Laugh!</h1>

    <!-- Funny Tips Section -->
    <div class="funny-tips">
      <h2>Funny Tips</h2>
      <ul>
        <li>1. Embrace Puns: A good pun is its own reward.</li>
        <li>2. Timing is Everything: Deliver jokes with perfect timing.</li>
        <li>3. Observational Humor: Find humor in everyday situations.</li>
        <li>4. Self-Deprecating Humor: Laugh at yourself, but not too much.</li>
        <li>5. Play with Wordplay: Clever wordplay can be a real knee-slapper.</li>
      </ul>
    </div>

    <!-- Funny Acts Section -->
    <div class="funny-acts">
      <h2>Funny Acts</h2>
      <ol>
        <li>Talk loudly</li>
        <li>Laugh at anything</li>
        <li>Master the art of goofy faces and silly voices.</li>
        <li>Stage a drama</li>
        <li>Attempt a stand-up routine</li>
      </ol>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'FunnyView',
};
</script>

<style scoped>
h2 {
color: #000;
}
.funny-view {
  text-align: center;
  padding: 20px;
}

.funny-tips,
.funny-acts {
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  color: #000;
}

.funny-tips ul,
.funny-acts ol { /* Adjusted for left-aligned text */
  list-style-type: none;
  padding: 0;
}

.funny-tips li,
.funny-acts li {
  margin-bottom: 10px;
  text-align: left; /* Align text within <li> to the left */
}
.funny-tips li,
.funny-acts li {
  margin-bottom: 10px;
}

.funny-quotes blockquote {
  font-style: italic;
  margin: 20px 0;
}
</style>
