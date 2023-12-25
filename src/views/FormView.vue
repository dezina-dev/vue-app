<template>
  <div class="form-container">
    <h2>Custom Form</h2>
    <form id="customForm" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
        class="custom-input"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
        class="custom-input"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
        class="custom-input"
          id="message"
          name="message"
          placeholder="Enter your message"
          rows="4"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="country">Country:</label>
        <select class="custom-input" id="country" name="country" required>
          <option value="">Select your country</option>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
        </select>
      </div>

      <div class="form-group checkbox-group">
        <label for="subscribe">
          <input type="checkbox" name="subscribe" id="subscribe" />
          Subscribe to newsletter
        </label>
      </div>

      <div class="form-group radio-group">
        <label>
          <input type="radio" name="gender" value="male" />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormView",
  methods: {
    submitForm() {
      event.preventDefault();
      // Access the form element
      const form = document.getElementById("customForm");

      // Collect form data using FormData
      const formData = new FormData(form);

      // Convert FormData to an object for easier logging or further processing
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Log the form data to the console
      console.log("Form Data:", formObject);
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

.form-container {
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: inline-block;
  font-weight: bold;
  margin-bottom: 5px;
}

.custom-input,
.custom-input[type="text"],
.custom-input[type="email"],
.custom-input textarea,
.custom-input select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}


.checkbox-group label,
.radio-group label {
  display: flex;
  align-items: center;
}

.checkbox-group input,
.radio-group input {
  margin-right: 5px;
}

.radio-group {
  display: flex; /* Display the radio group items in a row */
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
