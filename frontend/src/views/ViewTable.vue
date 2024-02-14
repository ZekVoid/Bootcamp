<template>
  <div class="form-viewdetails">
    <router-link id="btnAdd" class="button" to="/form-addview">Add Details</router-link>
    <router-link id="btnView" class="button" to="/form-viewdetails">View Details</router-link>

    <table id="table" class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Birthday</th>
          <th scope="col">Address</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.birthday }}</td>
          <td>{{ item.address }}</td>
          <td>
            <router-link id="btnEdit" class="btn btn-primary" to="/btn-edit">Edit</router-link>
            <button class="btn btn-danger" @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <router-view/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const items = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/Student');
    items.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const showAlert = (type, message) => {
  alert(`${type}: ${message}`);
};

const deleteItem = async (id) => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/Student/${id}`);
    await fetchData(); 
    showAlert('Success', 'Item deleted successfully');
  } catch (error) {
    console.error('Error deleting item:', error);
    showAlert('Error', 'Failed to delete item');
  }
};

onMounted(() => {
  fetchData();
  
});



</script>

<style scoped>
.table {
  width: 100%;
  margin-top: 30px;
  margin-left: -100px; 
  width: 250%; 
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#btnAdd {
  margin-right: 2%;
  margin-left: 345px;
}

#btnView {
  position: fixed;
}

#btnEdit {
  margin-right: 5px;

}

</style>
