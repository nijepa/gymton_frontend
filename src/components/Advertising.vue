<template>
  <div class="profile__wrapper">
    <div class="user_form">
      <div class="profile__title adv__title">
        <!-- <h3 class="">List of Advertisings</h3> -->
        <button class="adv__btn">
          <svg viewBox="0 -256 1792 1792" id="svg3013" width="35" height="35" sodipodi:docname="plus_font_awesome.svg">
            <defs id="defs3021"/>
            <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="640" inkscape:window-height="480" id="namedview3019" showgrid="false" inkscape:zoom="0.13169643" inkscape:cx="896" inkscape:cy="896" inkscape:window-x="0" inkscape:window-y="25" inkscape:window-maximized="0" inkscape:current-layer="svg3013"/>
            <g transform="matrix(1,0,0,-1,205.01695,1368.9492)" id="g3015">
              <path d="M 1408,800 V 608 q 0,-40 -28,-68 -28,-28 -68,-28 H 896 V 96 Q 896,56 868,28 840,0 800,0 H 608 Q 568,0 540,28 512,56 512,96 V 512 H 96 Q 56,512 28,540 0,568 0,608 v 192 q 0,40 28,68 28,28 68,28 h 416 v 416 q 0,40 28,68 28,28 68,28 h 192 q 40,0 68,-28 28,-28 28,-68 V 896 h 416 q 40,0 68,-28 28,-28 28,-68 z" id="path3017" inkscape:connector-curvature="0" style="fill:currentColor"/>
            </g>
          </svg>
          New
        </button>
        <div class="adv__item">
          <p>Active</p>
          <p>Name</p>
          <p>Date Added</p>
          <p>Frequency</p>
          <p>Actions</p>
        </div>
      </div>
      
      <ul class=" adv__list">
        <li v-for="advertise in advertising" :key="advertise.id" 
            class="form__item adv__item">
          <input type="checkbox" name="" id="adv__check" :checked="advertise.active">
          <a class="adv__link" :href="advertise.link">{{ advertise.name }}</a>
          <p>zz</p>
          <p>gg</p>
          <svg class="del__btn" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 512 512" 
                style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <path fill="var(--red-light)" d="M341.91,230.707c-0.187-1.155-0.894-2.286-1.952-3.37c-8.539,8.676-42.897,10.112-83.974,10.112    c-41.077,0-75.402-1.436-83.979-10.112c-1.055,1.083-1.713,2.215-1.954,3.37h-0.079l0.023,0.626c0,0.072-0.023,0.144-0.023,0.218    c0,0.169,0.048,0.319,0.072,0.479l6.687,136.991h0.016C177.341,379.764,189.639,396,255.984,396    c66.354,0,78.659-16.236,79.236-26.979h0.049l6.694-136.991c0.012-0.16,0.064-0.311,0.064-0.479c0-0.074-0.053-0.146-0.053-0.218    l0.053-0.626H341.91z"/>
              <path fill="var(--red-light)" d="M296.868,159.01v-32.344c0-5.842-4.781-10.666-10.658-10.666h-64.014c-5.837,0-10.642,4.823-10.642,10.666v32.713    c-31.646,3.59-53.314,10.858-53.314,19.281v15.988c0,3.281,3.321,6.402,9.282,9.218c15.61,7.336,49.358,12.421,88.462,12.421    c39.135,0,72.866-5.085,88.498-12.421c5.924-2.816,9.277-5.937,9.277-9.218V178.66C353.76,169.942,330.424,162.439,296.868,159.01    z M232.018,157.67l-2.698,0.169V144.44c0-5.858,0.817-10.656,1.785-10.656c0.994,0,6.585,0,12.449,0h21.329    c5.842,0,11.457,0,12.437,0c0.981,0,1.783,4.797,1.783,10.656v13.182c-7.416-0.385-15.133-0.625-23.118-0.625    C247.709,156.997,239.672,157.237,232.018,157.67z"/>
            </g>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Advertising',
    data() {
      return {
        advertising: [
          { id:1,
            name: 'reklama 1',
            link: 'reklama_1',
            createdAt: '',
            active: true},
          { id:2,
            name: 'reklama 2',
            link: 'reklama_2',
            createdAt: '',
            active: false},
          { id:3,
            name: 'reklama 3',
            link: 'reklama_3',
            createdAt: '',
            active: true},
          { id:4,
            name: 'reklama 4',
            link: 'reklama_4',
            createdAt: '',
            active: false},
          { id:5,
            name: 'reklama 5',
            link: 'reklama_5',
            createdAt: '',
            active: true},
          { id:6,
            name: 'reklama 6',
            link: 'reklama_6',
            createdAt: '',
            active: true},
          { id:7,
            name: 'reklama 7',
            link: 'reklama_7',
            createdAt: '',
            active: true}
        ]
      }
    }
  }
</script>

<style>
  .adv__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .adv__title {
/*     display: flex;
    align-items: center; */
    padding: .5em 1em;
  }

  .adv__item {
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: repeat(5,1fr);
    grid-column-gap: 1em;
  }

  .adv__item > p {
    margin: 1em 0 0 0;
  }

  .adv__link {
    margin-left: 1em;
    text-decoration: none;
    color: var(--blue-grey-light);
    transition: ease-in-out .5s all;
  }

  .adv__link:hover {
    text-decoration: underline;
    color: var(--blue-grey-lighter);
  }

  #adv__check {
    cursor: pointer;
  }

  .del__btn {
    cursor: pointer;
    justify-self: center;
  }

  .del__btn:hover > g > path {
    fill: var(--red)
  }

  .adv__btn {
    background: transparent;
    border: 2px solid var(--blue-grey-light);
    color: var(--blue-grey-light);
    border-radius: .2em;
    display: flex;
    align-items: center;
    margin-left: 1em;
    padding: .5em;
    cursor: pointer;
    transition: ease-in-out .5s all;
  }

  .adv__btn:hover {
    background: var(--blue-grey-lighter);
    border: 2px solid var(--blue-grey-light);
    color: var(--blue-grey-darkest);
  }
</style>