<template>
  <div id="nav">
    <div class="container">
      <div class="logo">
        <img src="../assets/img/2100logo.png" alt="logo lounge bar">
      </div>
      <div class="nav_links">
        <router-link to="/">Home</router-link>
        <router-link :to="{name:'Menu'}">Menu</router-link>
        <router-link :to="{name:'LiveShows'}">Live Shows</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Navbar'
}
</script>

<style lang="scss" scoped>
#nav {
  background-color: #111213;
  width:100%;
  position: fixed;
  top:0;
  left: 0;
  z-index: 10;

  .container{
  display: flex;
  align-items: center;
  justify-content: space-between;

    .logo{
      width:150px;
      img{
        width:100%
      }
    }

    a {
      font-weight: bold;
      color: #bc9a65;
      padding-left: 35px;
      font-size: 16px;
      font-weight: 300;
      text-decoration: none;
      transition:color 0.3s ease-in;

      &:hover{
        color: whitesmoke;
      }

      &.router-link-exact-active {
        color: whitesmoke;
      }
    }
  }
}

</style>