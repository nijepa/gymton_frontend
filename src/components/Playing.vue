<template>
  <div class="playing">
    <div class="previous__tracks">
      <h3>Previous tracks</h3>
      <p>Artist 2 - Track 2</p>
      <p>Artist 2 - Track 2</p>
      <p>Artist 2 - Track 2</p>
      <p>Artist 2 - Track 2</p>
      <p>Artist 2 - Track 2</p>
      <p>Artist 2 - Track 2</p>
      <p>Artist 2 - Track 2</p>
    </div>
    <div class="genres__list">
      2
    </div>
    <div class="albums__list">
      3
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Playing',

  }
</script>

<style lang="scss">
  .playing {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1em; 
    margin-top: 1em;
    background-image: url("../assets/img/b2.png"),
                    linear-gradient(210deg,var(--blue-grey-dark), var(--blue-grey));
    background-size:86px, auto;
    /* min-height: calc(100vh - 100px); */
    //@errormargin: 50px;
    background-attachment: fixed;
    padding: 1em;
    width: 1170px;
    justify-content: center;
    width: 100%;
  }

  .previous__tracks {
    grid-area: 1 / 1 / 3 / 3;
    background: linear-gradient(45deg, #7497b8, var(--blue-grey-lighter));
    border-radius: .2em;
    width: 510px;
    justify-self: end;
  }

  .genres__list {
    grid-area: 1 / 3 / 2 / 4;
    background: linear-gradient(315deg, #7497b8, var(--blue-grey-lighter));
    border-radius: .2em;
    width: 245px;
    justify-self: left;
  }

  .albums__list {
    grid-area: 2 / 3 / 3 / 4;
    background: linear-gradient(225deg, #7497b8, var(--blue-grey-lighter));
    border-radius: .2em;
    width: 245px;
    justify-self: left;
  }
</style>