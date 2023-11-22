<template>
  <div id="app">
    <h2>Vue.js CRUD</h2>
<!-- Form for adding and editing items -->
  <form @submit.prevent="addItem" v-if="!editing" class="item-form">
      <label for="newItem" class="form-label">New Item:</label>
      <input type="text" id="newItem" v-model="newItem" class="form-input" required>
      <button type="submit" class="add-button">Add Item</button>
    </form>

    <form @submit.prevent="updateItem()" v-if="editing" class="item-form">
      <label for="editItem" class="form-label">Edit Item:</label>
      <input type="text" id="editItem" v-model="editedItem.title" class="form-input" required>
      <input type="text" id="editItem" v-model="editedItem.price" class="form-input" required>
      <button type="submit" class="update-button">Update Item</button>
      <button @click="cancelEdit" class="cancel-button">Cancel</button>
    </form>
    <!-- Display the list of items -->
    <ul class="item-list">
      <li v-for="(item, index) in items" :key="index">
        <div class="item-card">
          <div class="item-info">
            <img :src="item.image" alt="Item Image" class="item-image" />
            <span>{{ item.title }}</span>
            <p>Price: Rs. {{ item.price }}/-</p>
          </div>
          <div class="item-actions">
            <button @click="editItem(index)" class="edit-button">Edit</button>
            <button @click="deleteItem(item.id, index)" class="delete-button">Delete</button>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CrudView",
  data() {
    return {
      items: [],
      newItem: "",
      editing: false,
      editIndex: null,
      editedItem: {
        id: null,
        name: "",
      },
      originalItem: null, // Store the original item for cancel
    };
  },
  mounted() {
    // Fetch data from the API when the component is mounted
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("response", response.data);
        this.items = response.data;
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
    async addItem() {
      if (this.newItem.trim() !== "") {
        try {
          //const response = await axios.post("https://your-api-endpoint/items", {
           // name: this.newItem,
          //});
          //this.items.push(response.data);
          
          console.log("this.newItem", this.newItem)
          let newid = this.items.length + 1;
          let newObj = {
    "id": newid,
    "title": this.newItem,
    "price": 999,
    "description": "lorem ipsum",
    "category": "NA",
    "image": "https://sourceindia-electronics.com/assets/images/no_image.png",
    "rating": {
        "rate": 3.9,
        "count": 10
    }
}
          this.items.push(newObj);
          this.newItem = "";
        } catch (error) {
          console.error("Error adding item:", error);
        }
      }
    },
    editItem(index) {
      this.editing = true;
      console.log('index', index)
      console.log('items', this.items[index])
      this.editIndex = index;
      this.editedItem = this.items[index]
      this.originalItem = { ...this.items[index] }; // Make a copy of the original item
      console.log('this.editedItem', this.editedItem)
    },
    async updateItem() {
      if (this.editedItem.title.trim() !== "") {
      console.log('editedItem', this.editedItem.id)
      
        try {
          //await axios.put(
           // `https://your-api-endpoint/items/${this.editedItem.id}`,
           // {
            //  name: this.editedItem.name,
            //}
          //);
          // Update the items array with the edited item
      const indexToUpdate = this.items.findIndex(item => item.id === this.editedItem.id);
      console.log('indexToUpdate', indexToUpdate)
       if (indexToUpdate !== -1) {
        this.items[indexToUpdate] = { ...this.editedItem };
      }
      this.editing = false;
      this.editIndex = null;
      this.editedItem = {
        id: null,
        title: "",
      };

      console.log('this.items 11', this.items);
        
          // Refresh the list after updating
          //this.fetchItems();
          console.log('this.items', this.items)
        } catch (error) {
          console.error("Error updating item:", error);
        }
      }
    },
    cancelEdit() {
      this.editing = false;
      this.editedItem = {
        id: null,
        title: "",
        price: ""
      };
       // Restore the original item on cancel
      if (this.originalItem) {
         this.items[this.editIndex] = { ...this.originalItem };
        this.originalItem = null;
        this.editIndex = null;
      }
    },
    async deleteItem(id, index) {
      try {
       // await axios.delete(`https://your-api-endpoint/items/${id}`);
        this.items.splice(index, 1);
        console.log('this.items 22', this.items);
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    },
  },
};
</script>

<style>
.item-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  text-align: left;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  padding: 5px;
}

.item-info {
flex: 1;
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
}
.item-info p {
font-weight: bold;
}
.item-image {
  max-width: 50px; /* Adjust the maximum width of the image as needed */
  margin-bottom: 10px; /* Adjust the margin between the image and the title */
}

.item-card {
  background-color: #f0f0f0; /* Change the background color of the card */
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
}

.item-image {
  max-width: 50px;
  margin-right: 10px;
}

.item-actions {
  display: flex;
  margin-left: 10px;
}

.edit-button,
.delete-button,
.add-button,
.update-button,
.cancel-button {
  background-color: #4caf50; /* Change the background color of the buttons */
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;
}

.edit-button:hover,
.delete-button:hover,
.add-button:hover,
.update-button:hover,
.cancel-button:hover {
  background-color: #45a049; /* Change the background color on hover */
}

.item-form {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input {
  width: 30%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

</style>
