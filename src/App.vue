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
/*     background: 
    radial-gradient(transparent 5%, #444) 
      calc(50% - .125em) 30% content-box, 
    linear-gradient(#bbb, #bbb) content-box, 
    linear-gradient(-90deg, #d0d3d5, #d2d5d7) border-box; */
        background-image: url("./assets/img/b2.png"),
                    linear-gradient(210deg,var(--blue-grey-dark), var(--blue-grey));
    background-size:86px, auto;
    background-attachment: fixed;
    z-index: -5;
  }

  #app::after {
    content: "";
    background: url("./assets/img/b2.png");
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -3;   
  }

  nav {
    //padding: 30px;

    a {
      font-weight: bold;
      //color: #2c3e50;
      color: var(--blue-grey-light);

      &.router-link-exact-active {
        color: var(--blue-grey-lighter);
        background: #293c4e;
      }
    }
  }
</style>
