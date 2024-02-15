<template>
  <div class="form-addview">
    <router-link id="btnAdd" class="button" to="/form-addview">Add Details</router-link>
    <router-link id="btnView" class="button" to="/form-viewdetails">View Details</router-link>

    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="col">
          <input v-model="firstName" type="text" class="form-control" placeholder="First name">
        </div>
        <br />
        <div class="col">
          <input v-model="lastName" type="text" class="form-control" placeholder="Last name">
        </div>
        <br />
        <div class="col">
          <input v-model="birthday" type="date" class="form-control" placeholder="Birthday">
        </div>
        <br />  
        <div class="col">
          <input v-model="address" type="text" class="form-control" placeholder="Address">
        </div>
        <br />
        <button id="btnSubmit" type="submit" class="btn btn-primary">
          Submit
        </button>
        <button id="btnUpdate" class="btn btn-primary" type="button" @click="updateItem">Update</button>
      </div>

    </form>

  </div>

  <RouterView />
</template>

<script>
import axios from 'axios';

export default {
  name: "AddView",
  data() {
    return {
      firstName: '',
      lastName: '',
      birthday: '',
      address: ''
    }
  },
  mounted(){
      this.fetchItem(this.$route.query.id)
  },
  methods: {
    updateItem() {
      const itemId = this.$route.query.id;
      axios.put(`http://127.0.0.1:8000/api/Student/${itemId}`, {
        first_name: this.firstName,
        last_name: this.lastName,
        birthday: this.birthday,
        address: this.address
      })
      .then(response => {
        console.log(response.data);
        this.showAlert('Success', 'Item updated successfully!');
      })
      .catch(error => {
        console.error('Error updating item:', error);
        this.showAlert('Error', 'Failed to update item.');
      });
    },
    submitForm() {
      axios.post('http://127.0.0.1:8000/api/Student', {
        FirstName: this.firstName,
        LastName: this.lastName,
        Birthday: this.birthday,
        Address: this.address
      })
      .then(response => {
        console.log(response.data);

        this.firstName = '';
        this.lastName = '';
        this.birthday = '';
        this.address = '';

        this.showAlert('Success', 'Form submitted successfully!');
      })
      .catch(error => {
        console.error(error.response.data);
        this.showAlert('Error', 'Form submission failed. Please try again later.');
      });
    },
    async fetchItem (itemId) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/Student/view/${itemId}`);
        console.log(response)
        this.firstName = response.data.student.first_name;
        this.lastName = response.data.student.last_name;
        this.birthday = response.data.student.birthday;
        this.address = response.data.student.address;
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    },
    showAlert(type, message) {
      alert(`${type}: ${message}`);
    }
  }
}
</script>


<style scoped>

.form-control {
  width: 100%;
}

.form-row {
  margin-top: 40px;
  margin-left: -10%;
  width: 200%;
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

.button:hover {
  background-color: #0056b3;
}

#btnAdd {
  margin-right: 20px;

}

#btnSubmit {

  margin-right: 10px;
}
</style>