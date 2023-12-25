<!-- src/components/SimpleForm.vue -->

<template>
  <div class="simple-form">
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SimpleForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log("Form submitted with data:", this.formData);
      // You can add more complex logic or send the data to a server
    },
  },
};
</script>

<style scoped>
.simple-form {
  max-width: 300px;
  margin: 20px auto;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  text-align: left;
}

input {
  margin-bottom: 10px;
  padding: 8px;
}

button {
  padding: 10px;
  background-color: #41b883;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
