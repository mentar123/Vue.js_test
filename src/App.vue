<template>
  <div id="app">

    <div class="pos-f-t">
      <nav class="navbar navbar-dark bg-dark">
      <img src="./assets/img/logo.png" alt="" class="logo">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      </nav>
   </div>
   <section class="section">
    <div class="left-menu">
    </div>
    <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
 display: flex;
 flex-direction: column;
 font-family: Roboto;
}
.logo{
  margin-left: 50px;
  margin-right: 70px;
}
.navbar-dark .navbar-toggler-icon {
  width: 30px;
  height: 20px;
  padding: 10px;
    background-image: url(./assets/img/menu1.png);
}
.section{
  display: flex;
}
.left-menu{
  min-width: 250px;
  background: #535769;
  min-height: 100vh;
}
.bg-dark {
    background-color: #31333B!important;
}
.navbar{
  justify-content: left;
}
.navbar-toggler{
      border: none;
}
</style>
