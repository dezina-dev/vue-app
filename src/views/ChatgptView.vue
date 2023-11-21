<template>
  <div class="chatgpt-view">
    <h1>Welcome to ChatGPT</h1>
    <p>Click the button to visit the ChatGPT site:</p>
    <button @click="redirectToChatGPT">Go to ChatGPT</button>
  </div>
</template>

<script>
export default {
  name: 'ChatgptView',
  methods: {
    redirectToChatGPT() {
      // Replace 'https://chatgpt.com' with the actual URL of the ChatGPT site
      window.location.href = 'https://chatgpt.com';
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
.chatgpt-view {
  text-align: center;
  padding: 20px;
}
</style>
