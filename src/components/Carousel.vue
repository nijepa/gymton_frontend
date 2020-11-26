<template>
  <div class="hoop ">
      <hooper :infiniteScroll="true" :progress="true" 
              :autoPlay="true" :playSpeed="10000" 
              :centerMode="true" :transition="500">
        <slide>
          <div class="slide__content">
            <img class="slide__img" src="../assets/img/gt3.png" alt="">
            <div class="slide__text">
              <h1 class="r__title">GYMTON</h1>
              <h3 class="r__text">Enjoy music while training.</h3>
              <button class="r__btn">Sign Up</button>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slide__content">
            <img class="slide__img" src="../assets/img/gt2.png" alt="">
            <div class="slide__text">
              <h1 class="r__title">GYMTON</h1>
              <h3 class="r__text">Expand Your body and ear.</h3>
              <button class="r__btn">Sign Up</button>
            </div>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: 'Carousel',
  components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation
    },
}
</script>

<style lang="scss">
  .slide__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: space-between;
    justify-items: center;
    padding: 2em;
    width: 100%;
  }

  .slide__img {
    grid-area: 1 / 2 / 5 / 3;
    /* justify-self: right; */
  }

  .slide__text {
    /* justify-self: left; */
    display: grid;
    justify-items: left;
  }

  .r__text {
    margin: .5em 0;
  }

  .r__btn {
    background: transparent;
    border-radius: .2em;
    border: 2px solid var(--blue-grey-darkest);
    cursor: pointer;
    padding: .5em;
    margin-top: .5em;
    color: var(--blue-grey-darker);
  }

  .r__btn:hover {
    border: 2px solid var(--blue-grey-lighter);
    //color: var(--blue-grey-light);
    //font-size: 1em;
  }
</style>