<template>
  <div class="hero">
    <div class="popular__list">
      <h1 class="popular__title">Popular albums</h1>
      <div class="popular__content" v-for="popular in populars" :key="popular.id">
        <h3>{{ popular.name }}</h3>
        <p>{{ popular.auth }}</p>
        <p>{{ popular.track }}</p>
      </div>
    </div>
    <div class="genre__list">
      <h1 class="genre__title">Genres</h1>
      <div class="genre__button">
        <div class="genre__content" v-for="genre in genres" :key="genre.id">
          <h3>{{ genre.name }}</h3>
        </div>
      </div>
    </div>
    <div class="album__list">
      <h1 class="album__title">Albums</h1>
      <div class="album__content" v-for="album in albums" :key="album.id">
        <h3>{{ album.name }}</h3>
        <p>{{ album.auth }}</p>
        <p>{{ album.track }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hero',
    data() {
      return {
        genres : [
          { id: 1,
            name: 'Rock&Roll',},
          { id: 2,
            name: 'Electronic',},
          { id: 3,
            name: 'Pop',},
          { id: 4,
            name: 'Mix',},
          { id: 5,
            name: 'Reggae',},
          { id: 6,
            name: 'Folk',},
          { id: 7,
            name: 'Country',},
          { id: 8,
            name: 'Disco',},
          { id: 9,
            name: 'HipHop',},
          { id: 10,
            name: 'Funk',},
          { id: 11,
            name: 'Jazz',},
          { id: 9,
            name: 'Blues',},
          { id: 10,
            name: 'R&B',},
        ],
        populars : [
          { id: 1,
            name: 'Rock&Roll',
            auth: 'uuuu',
            track:'uno'},
          { id: 2,
            name: 'Electronick',
            auth: 'uuuu',
            track:'uno'},
          { id: 3,
            name: 'Pop',
            auth: 'uuuu',
            track:'uno'},
          { id: 4,
            name: 'Mix',
            auth: 'uuuu',
            track:'uno'},
          { id: 5,
            name: 'Reggae',
            auth: 'uuuu',
            track:'uno'},
        ],
        albums : [
          { id: 1,
            name: 'Rock&Roll',
            auth: 'uuuu',
            track:'uno'},
          { id: 2,
            name: 'Electronick',
            auth: 'uuuu',
            track:'uno'},
          { id: 3,
            name: 'Pop',
            auth: 'uuuu',
            track:'uno'},
          { id: 4,
            name: 'Mix',
            auth: 'uuuu',
            track:'uno'},
          { id: 5,
            name: 'Reggae',
            auth: 'uuuu',
            track:'uno'},
          { id: 6,
            name: 'Rock&Roll',
            auth: 'uuuu',
            track:'uno'},
          { id: 7,
            name: 'Electronick',
            auth: 'uuuu',
            track:'uno'},
          { id: 8,
            name: 'Pop',
            auth: 'uuuu',
            track:'uno'},
          { id: 9,
            name: 'Mix',
            auth: 'uuuu',
            track:'uno'},
          { id: 10,
            name: 'Reggae',
            auth: 'uuuu',
            track:'uno'},
        ]
      }
    }
  }
</script>

<style lang="scss">
  .hero {
    display: grid;
    justify-content: center;
    justify-items: center;
    margin-top: 1em;
    background-image: url("../assets/img/b2.png"),
                    linear-gradient(210deg,#4b6077, #6d869d);
    background-size:86px, auto;
    background-attachment: fixed;
    padding: 1em;
  }

  .popular__list {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-row-gap: .5em;
    grid-column-gap: 1em;
    justify-content: center;
  }

  .popular__list,
  .genre__list,
  .album__list {
    display: grid;
    width: 790px;
  }

  .popular__title {
    grid-area: 1 / 1 / 2 / 6;
  }

  .popular__content {
    padding: 1em;
  }

  .popular__title,
  .genre__title,
  .album__title {
    justify-self: left;
    color: #a5d2fd;
  }

  .genre__list,
  .album__list {
    margin-top: 1em;
  }

  .popular__content,
  .genre__content,
  .album__content {
    background: linear-gradient(225deg, #7497b8, #a5d2fd);
    text-align: left;
    border: 1px solid #4b6077;
    border-radius: .2em;
    box-shadow: 0px 0px 7px #5f7c97;
  }

  .genre__title {
    grid-area: 1 / 1 / 2 / 11;
  }

  .genre__button {
    display: grid;
    grid-template-columns: repeat(10, auto);
    grid-gap: .5em;
    background: linear-gradient(210deg,#4b6077, #6d869d);
    padding: .5em;
    border-radius: .2em;
    width: 790px;
  }

  .genre__content {
    padding: .3em .2em;
    cursor: pointer;
  }

  .genre__content:hover {
    border: 1px solid #a5d2fd;
    color: #161e25;
  }

  .album__list {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: .5em;
    padding: .5em;
  }

  .album__title {
    grid-area: 1 / 1 / 2 / 6;
  }

  .album__content {
    padding: 1em;
  }
</style>