<template>
  <div id="app" class="scroll-container">
    <!-- Vue Instance -->
    <div class="concept-card">
      <h2>Vue Instance</h2>
      <p>Create a Vue instance to manage your application.</p>
      <div class="code-snippet">
        <pre>
          <code>
            const app = new Vue({
              el: '#app',
              data: {
                message: 'Hello, Vue!'
              }
            });
          </code>
        </pre>
      </div>
    </div>

    <!-- Data Binding -->
    <div class="concept-card">
      <h2>Data Binding</h2>
      <p>Bind data from the Vue instance to your HTML.</p>
      <div class="code-snippet">
        <pre>
          <code>
            <p>{{ message }}</p>
          </code>
        </pre>
      </div>
    </div>

    <!-- Directives -->
    <div class="concept-card">
      <h2>Directives</h2>
      <p>
        Directives are special tokens in the markup that tell the library to do
        something to a DOM element.
      </p>
      <div class="code-snippet">
        <pre>
          <code>
           <ul>
           <li>
 <p v-if="isVisible">This is visible!</p>
            <button @click="toggleVisibility">Toggle Visibility</button>
           </li>
            <li>
            To execute store action, you can call a dispatch event when the user clicks <br/>
            with the v-on directive.
            </li>
            </ul>
          </code>
        </pre>
      </div>
    </div>

    <!-- Components -->
    <div class="concept-card">
      <h2>Components</h2>
      <p>Encapsulate code into reusable components.</p>
      <div class="code-snippet">
        <pre>
          <code>
            Vue.component('my-component', {
              template: '<div>A custom component!</div>'
            });
          </code>
        </pre>
      </div>
    </div>

    <!-- Vue Router -->
    <div class="concept-card">
      <h2>Vue Router</h2>
      <p>Add client-side navigation to your Vue.js applications.</p>
      <div class="code-snippet">
        <pre>
          <code>
            const routes = [
              { path: '/', component: Home },
              { path: '/about', component: About }
            ];

            const router = new VueRouter({
              routes
            });
          </code>
        </pre>
      </div>
    </div>

    <!-- Vuex -->
    <div class="concept-card">
      <h2>Vuex</h2>
      <p>State management pattern + library for Vue.js applications.</p>
      <div class="code-snippet">
        <pre>
          <code>
           <ul>
          <li>npm install vuex@next --save
          </li>
          <li>
          src/store/index.js
          </li>
          <li>
// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    firstName: 'dez',
    lastName: 'Doe',
  },
  mutations: {},
  actions: {},
  getters: {},
});
          </li>
 <li>
          to display store state, place it inside {{ }}
          `$store.state.firstName`
          </li>
          <li>
<p>create a Vuex getter to render the data as one string</p>
<p>
 getters: {
    fullName: function (state) {
      return `${state.firstName} ${state.lastName}`
    }
</p>
<p>
to display store state, place it inside {{ }}
          `$store.getters.fullName`
</p>
          </li>
           </ul>
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, Vue!",
      isVisible: true,
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
}

.scroll-container {
  width: 100%; /* Ensure the container takes up the full width */
  box-sizing: border-box; /* Include padding and border in the total width */
  padding-bottom: 10px; /* Add some bottom padding to prevent scrollbar appearance */
}

.concept-card {
  width: 300px;
  margin: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.code-snippet {
  max-height: 200px;
  overflow-y: auto;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
}

.code-snippet pre code {
  white-space: pre-wrap;
  text-align: left;
}

/* Additional styling for descriptions */
.concept-card p {
  margin-top: 10px;
  font-style: italic;
}
</style>
