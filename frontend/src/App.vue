<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img src="@/assets/logo.svg" alt="Vue Logo" class="logo" width="45" height="45">
      <span class="navbar-brand">Vue Project</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Student
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/enroll-form">Enroll</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/etc">Etc...</router-link></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- <div class="form">
    <router-link id="btnAdd" class="button" to="/form-addview">Add Details</router-link>
    <router-link id="btnView" class="button" to="/form-viewdetails">View Details</router-link>
  </div> -->

  <router-view/>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>



<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
}

.navbar-nav .nav-link.active {
  font-weight: bold;
}

.dropdown-menu {
  background-color: #f8f9fa;
  border: 1px solid rgba(0,0,0,.15);
}

.dropdown-item {
  color: #212529;
}

.dropdown-item:hover {
  background-color: #e9ecef;
}

.logo {
  padding-top: 5px;
  padding-right: 10px;
}
.form-control {
 width: 200%;
}

#addBtn {
  position: fixed;
  margin-left: 3%;
  margin-top: -4%;

}

#viewBtn {
  position: fixed;
  margin-left: 11%;
  margin-top: -4%;
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



</style>


