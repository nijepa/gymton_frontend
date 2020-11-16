<template>
  <div id="app">
<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './assets/css/app.css';
  
  #app {
    @import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    font-family: 'Play', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: 
    radial-gradient(transparent 5%, #444) 
      calc(50% - .125em) 30% content-box, 
    linear-gradient(#bbb, #bbb) content-box, 
    linear-gradient(-90deg, #d0d3d5, #d2d5d7) border-box;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
