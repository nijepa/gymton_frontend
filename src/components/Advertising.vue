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
        <div class="adv__item adv__header">
          <p>Active</p>
          <p class="">Name</p>
          <p>Date Added</p>
          <p>Amount</p>
          <p>Frequency</p>
          <p>Actions</p>
        </div>
      </div>
      
      <ul class=" adv__list">
        <li v-for="advertise in advertising" :key="advertise.id" 
            class="form__item adv__item">
          <!-- <input type="checkbox" name="" id="adv__check" :checked="advertise.active"> -->
          <svg v-if="advertise.active" @click="toggleActive(advertise.id)" class="check active__checked"  width="40" height="40" viewBox="0 0 64 64" >
            <g id="Layer_1">
              <g>
                <circle class="st0" cx="32" cy="32" r="32"/>
              </g>
              <g class="st1">
                <g>
                  <path class="st2" d="M46,45c0,2.2-1.8,4-4,4H22c-2.2,0-4-1.8-4-4V25c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4V45z"/>
                </g>
              </g>
              <g>
                <g>
                  <path class="st3" d="M22,45c-1.1,0-2-0.9-2-2V23c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v20c0,1.1-0.9,2-2,2H22z"/>
                </g>
                <g>
                  <path class="st4" d="M42,23v20H22V23H42 M42,19H22c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h20c2.2,0,4-1.8,4-4V23     C46,20.8,44.2,19,42,19L42,19z"/>
                </g>
              </g>
              <g class="st1">
                <g>
                  <path class="st2" d="M32.5,41c-0.6,0-1.2-0.3-1.6-0.8l-6.1-8c-0.7-0.9-0.5-2.1,0.4-2.8c0.9-0.7,2.1-0.5,2.8,0.4l4.2,5.5     c2.3-4.2,7.3-11.8,15.3-16.9c0.9-0.6,2.2-0.3,2.8,0.6c0.6,0.9,0.3,2.2-0.6,2.8c-10.2,6.6-15.2,18-15.3,18.1     c-0.3,0.7-0.9,1.1-1.6,1.2C32.6,41,32.5,41,32.5,41z"/>
                </g>
              </g>
              <g>
                <path class="st5" d="M32.5,39c-0.6,0-1.2-0.3-1.6-0.8l-6.1-8c-0.7-0.9-0.5-2.1,0.4-2.8c0.9-0.7,2.1-0.5,2.8,0.4l4.2,5.5    c2.3-4.2,7.3-11.8,15.3-16.9c0.9-0.6,2.2-0.3,2.8,0.6c0.6,0.9,0.3,2.2-0.6,2.8c-10.2,6.6-15.2,18-15.3,18.1    c-0.3,0.7-0.9,1.1-1.6,1.2C32.6,39,32.5,39,32.5,39z"/>
              </g>
            </g>
            <g id="Layer_2">
            </g>
          </svg>
          <svg v-else @click="toggleActive(advertise.id)" class="check active__unchecked" version="1.1" width="40" height="40" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
            <g id="Layer_1">
              <g>
                <circle class="st0" cx="32" cy="32" r="32"/>
              </g>
              <g class="st1">
                <g>
                  <path class="st2" d="M46,45c0,2.2-1.8,4-4,4H22c-2.2,0-4-1.8-4-4V25c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4V45z"/>
                </g>
              </g>
              <g>
                <g>
                  <path class="st3" d="M22,45c-1.1,0-2-0.9-2-2V23c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v20c0,1.1-0.9,2-2,2H22z"/>
                </g>
                <g>
                  <path class="st4" d="M42,23v20H22V23H42 M42,19H22c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h20c2.2,0,4-1.8,4-4V23     C46,20.8,44.2,19,42,19L42,19z"/>
                </g>
              </g>
              <g class="st1">
                <g>
                  <path class="st2" d="M47,51.4c-0.7,0-1.3-0.3-1.7-0.9c-11.8-18.6-31-27.9-31.2-28c-1-0.5-1.4-1.7-0.9-2.7c0.5-1,1.7-1.4,2.7-0.9     c0.8,0.4,20.3,9.9,32.8,29.5c0.6,0.9,0.3,2.2-0.6,2.8C47.7,51.3,47.4,51.4,47,51.4z"/>
                </g>
              </g>
              <g>
                <path class="st5" d="M47,49.4c-0.7,0-1.3-0.3-1.7-0.9c-11.8-18.6-31-27.9-31.2-28c-1-0.5-1.4-1.7-0.9-2.7s1.7-1.4,2.7-0.9    c0.8,0.4,20.3,9.9,32.8,29.5c0.6,0.9,0.3,2.2-0.6,2.8C47.7,49.3,47.4,49.4,47,49.4z"/>
              </g>
              <g class="st1">
                <g>
                  <path class="st2" d="M17.6,52c-0.5,0-0.9-0.2-1.3-0.5c-0.8-0.7-0.9-2-0.2-2.8c0.2-0.2,15.9-18.6,28.8-32.1c0.8-0.8,2-0.8,2.8-0.1     c0.8,0.8,0.8,2,0.1,2.8C35,32.8,19.3,51.2,19.1,51.3C18.7,51.8,18.2,52,17.6,52z"/>
                </g>
              </g>
              <g>
                <path class="st5" d="M17.6,50c-0.5,0-0.9-0.2-1.3-0.5c-0.8-0.7-0.9-2-0.2-2.8c0.2-0.2,15.9-18.6,28.8-32.1c0.8-0.8,2-0.8,2.8-0.1    c0.8,0.8,0.8,2,0.1,2.8C35,30.8,19.3,49.2,19.1,49.3C18.7,49.8,18.2,50,17.6,50z"/>
              </g>
            </g>
            <g id="Layer_2">
            </g>
          </svg>
          <a class="adv__link" :href="advertise.link">{{ advertise.name }}</a>
          <input class="amount amount__date" type="date" name="" id="">
          <input class="amount" type="number" name="" id="" v-model="advertise.frequency">
          <div class="adv__type">
            <label class="amount" :class="advertise.type == 'minutes' ? 'amount__selected' : 'amount__text'" :for="advertise.id + 'minutes'">minutes</label>
            <input type="radio" class="amount__input" :id="advertise.id + 'minutes'" name="" v-model="advertise.type" value="minutes">
            
            <input type="radio" class="amount__input" :id="advertise.id + 'tracks'" name="" v-model="advertise.type" value="tracks">
            <label class="amount" :class="advertise.type == 'tracks' ? 'amount__selected' : 'amount__text'" :for="advertise.id + 'tracks'">tracks</label>
            <!-- <input class="amount second" type="number" name="" id=""><span class="amount__text">tracks</span> -->
          </div>
          <svg class="adv__del" x="0px" y="0px" width="42px" height="42px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g id="Calque_1">
              <circle class="st18" cx="256" cy="256" r="256"/>
            </g>
            <g id="Calque_2">
              <g>
                <g class="st14">
                  <path class="st15" d="M193.6,325.2h-18.4l17.6-31.2c6.4-11.2,2.4-26.4-8.8-32.8l0,0l-48-28l0,0c-11.2-6.4-26.4-2.4-32.8,8.8l0,0     L76,289.2c-6.4,11.2-6.4,30.4,0,41.6l44.8,76.8c3.2,5.6,8.8,11.2,16,15.2h0.8l0,0c6.4,3.2,12.8,5.6,19.2,5.6h54.4l32-54.4     l-32-49.6h-17.6V325.2z"/>
                </g>
                <g class="st14">
                  <path class="st15" d="M434.4,290l-27.2-48H344l-26.4,52l8.8,15.2l0,0l9.6,16h-36c-13.6,0-24,10.4-24,24l0,0v56l0,0     c0,12.8,10.4,24,24,24l0,0h55.2c13.6,0,29.6-9.6,36-20.8l44.8-76.8c3.2-5.6,4.8-13.6,4.8-20.8C439.2,302.8,437.6,295.6,434.4,290     z"/>
                </g>
                <g class="st14">
                  <path class="st15" d="M305.6,226.8L305.6,226.8l48-28l0,0c11.2-6.4,15.2-21.6,8.8-32.8l0,0l-27.2-47.2     c-6.4-11.2-22.4-20.8-36-20.8h-88.8c-6.4,0-14.4,2.4-20.8,6.4c0,0-0.8,0-0.8,0.8l0,0c-6.4,4-11.2,8.8-14.4,14.4l-28,48l32,55.2     h58.4l17.6-33.6l0,0l0,0l0,0l17.6,31.2C280,230,294.4,233.2,305.6,226.8z"/>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path class="st16" d="M175.2,309.2l-40,69.6c0,0-6.4,10.4-5.6,19.2c0,4,1.6,7.2,6.4,9.6c6.4,4,13.6,5.6,20,5.6h54.4l32-54.4      l-32-49.6C210.4,309.2,175.2,309.2,175.2,309.2z"/>
                  </g>
                </g>
                <g>
                  <path class="st17" d="M130.4,397.2c-0.8-8.8,5.6-19.2,5.6-19.2l40-69.6l17.6-31.2c6.4-11.2,2.4-26.4-8.8-32.8l0,0l-48-28l0,0     c-11.2-6.4-26.4-2.4-32.8,8.8l0,0l-27.2,47.2c-6.4,11.2-6.4,30.4,0,41.6l44.8,76.8c3.2,5.6,8.8,11.2,16,15.2     C132,405.2,130.4,401.2,130.4,397.2z"/>
                </g>
                <g class="st14">
                  <path class="st15" d="M175.2,309.2l-40,69.6c0,0-6.4,10.4-5.6,19.2c0,4,1.6,7.2,6.4,9.6h0.8l56.8-98.4H175.2z"/>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path class="st16" d="M335.2,309.2h80c0,0,12,0,19.2-4.8c3.2-2.4,5.6-5.6,5.6-10.4c0-7.2-1.6-15.2-4.8-20.8l-27.2-48h-63.2      l-26.4,52L335.2,309.2z"/>
                  </g>
                </g>
                <g>
                  <path class="st17" d="M434.4,304.4c-7.2,4.8-19.2,4.8-19.2,4.8h-80h-36c-13.6,0-24,10.4-24,24l0,0v56l0,0c0,12.8,10.4,24,24,24     l0,0h55.2c13.6,0,29.6-9.6,36-20.8l44.8-76.8c3.2-5.6,4.8-13.6,4.8-20.8C440,298.8,437.6,302,434.4,304.4z"/>
                </g>
                <g class="st14">
                  <path class="st5" d="M335.2,309.2h80c0,0,12,0,19.2-4.8c3.2-2.4,5.6-5.6,5.6-10.4v-0.8H326.4L335.2,309.2z"/>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path class="st16" d="M255.2,171.6l-40-69.6c0,0-5.6-10.4-13.6-14.4c-3.2-1.6-7.2-2.4-11.2,0.8c-6.4,4-12,8.8-15.2,14.4l-28,48      l32,55.2h58.4L255.2,171.6z"/>
                  </g>
                </g>
                <g>
                  <path class="st7" d="M201.6,87.6c8,4,13.6,14.4,13.6,14.4l40,69.6l17.6,31.2c6.4,11.2,21.6,15.2,32.8,8.8l0,0l48-28l0,0     c11.2-6.4,15.2-21.6,8.8-32.8l0,0l-27.2-47.2c-6.4-11.2-22.4-20.8-36-20.8h-88.8c-6.4,0-14.4,2.4-20.8,6.4     C193.6,85.2,197.6,86,201.6,87.6z"/>
                </g>
                <g class="st14">
                  <path class="st15" d="M255.2,171.6l-40-69.6c0,0-5.6-10.4-13.6-14.4c-3.2-1.6-7.2-2.4-11.2,0.8c0,0-0.8,0-0.8,0.8l56.8,98.4     L255.2,171.6z"/>
                </g>
              </g>
            </g>
          </svg>
      <!--    <svg class="del__btn" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 512 512" 
                style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <path fill="var(--red-light)" d="M341.91,230.707c-0.187-1.155-0.894-2.286-1.952-3.37c-8.539,8.676-42.897,10.112-83.974,10.112    c-41.077,0-75.402-1.436-83.979-10.112c-1.055,1.083-1.713,2.215-1.954,3.37h-0.079l0.023,0.626c0,0.072-0.023,0.144-0.023,0.218    c0,0.169,0.048,0.319,0.072,0.479l6.687,136.991h0.016C177.341,379.764,189.639,396,255.984,396    c66.354,0,78.659-16.236,79.236-26.979h0.049l6.694-136.991c0.012-0.16,0.064-0.311,0.064-0.479c0-0.074-0.053-0.146-0.053-0.218    l0.053-0.626H341.91z"/>
              <path fill="var(--red-light)" d="M296.868,159.01v-32.344c0-5.842-4.781-10.666-10.658-10.666h-64.014c-5.837,0-10.642,4.823-10.642,10.666v32.713    c-31.646,3.59-53.314,10.858-53.314,19.281v15.988c0,3.281,3.321,6.402,9.282,9.218c15.61,7.336,49.358,12.421,88.462,12.421    c39.135,0,72.866-5.085,88.498-12.421c5.924-2.816,9.277-5.937,9.277-9.218V178.66C353.76,169.942,330.424,162.439,296.868,159.01    z M232.018,157.67l-2.698,0.169V144.44c0-5.858,0.817-10.656,1.785-10.656c0.994,0,6.585,0,12.449,0h21.329    c5.842,0,11.457,0,12.437,0c0.981,0,1.783,4.797,1.783,10.656v13.182c-7.416-0.385-15.133-0.625-23.118-0.625    C247.709,156.997,239.672,157.237,232.018,157.67z"/>
            </g>
          </svg> -->
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
            active: true,
            type: 'minutes',
            frequency: '360'},
          { id:2,
            name: 'reklama 2 eeeerrreee e erreeeeeee',
            link: 'reklama_2',
            createdAt: '',
            active: false,
            type: 'minutes',
            frequency: '360'},
          { id:3,
            name: 'reklama 3',
            link: 'reklama_3',
            createdAt: '',
            active: true,
            type: 'tracks',
            frequency: '20'},
          { id:4,
            name: 'reklama 4',
            link: 'reklama_4',
            createdAt: '',
            active: false,
            type: 'minutes',
            frequency: '360'},
          { id:5,
            name: 'reklama 5',
            link: 'reklama_5',
            createdAt: '',
            active: true,
            type: 'minutes',
            frequency: '360'},
          { id:6,
            name: 'reklama 6',
            link: 'reklama_6',
            createdAt: '',
            active: true,
            type: 'tracks',
            frequency: '15'},
          { id:7,
            name: 'reklama 7',
            link: 'reklama_7',
            createdAt: '',
            active: true,
            type: 'tracks',
            frequency: '10'}
        ],
        active: false
      }
    },
    methods: {
      toggleActive(id) {
        let index = this.advertising.findIndex(i => i.id === id);
        this.advertising[index].active = !this.advertising[index].active
      }
    }
  }
</script>

<style lang="scss">
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

  .adv__header {
    font-weight: 800;
  }

  .adv__item {
    display: grid;
    align-items: center;
    justify-content: space-around;
    grid-template-columns: auto 2fr repeat(2, auto) 1fr auto;
    grid-column-gap: 1em;
    justify-items: center;
  }

  .adv__item > p {
    margin: 1em 0 0 0;
  }

  .adv__link {
    text-decoration: none;
    color: var(--blue-grey-light);
    transition: ease-in-out .5s all;
    justify-self: left;
    text-align: left;
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
    margin: 0 auto;
    padding: .5em;
    cursor: pointer;
    transition: ease-in-out .5s all;
  }

  .adv__btn:hover {
    background: var(--blue-grey-lighter);
    border: 2px solid var(--blue-grey-light);
    color: var(--blue-grey-darkest);
  }

  .amount {
    font-family: 'Play', sans-serif;
    background: var(--blue-grey-dark);
    border: 2px solid var(--blue-grey-dark);
    border-radius: .2em;
    max-width: 75px;
    text-align: center;padding: .2em;
    color: var(--blue-grey-lighter);
  }

  .amount:hover, .amount:focus {
    background: var(--blue-grey-lighter);
    border: 2px solid var(--blue-grey-darkest);
    color: var(--blue-grey-darkest);
  }

  .amount__date {
    max-width: 140px;
    color: var(--blue-grey-lighter);
  }

  .second {
    margin-left: .5em;
  }

  .amount__text {
    color: var(--blue-grey-darkest);
    cursor: pointer;
  }

  .amount__input {
    display: none;
  }

  .amount__selected {
    color: var(--blue-grey-lighter);
    cursor: pointer;
  }

  .adv__type {
    display: flex;
    align-items: center;
  }

  .adv__type > label {
    margin: .2em;
  }

  .st0{fill:none;}
  .st1{opacity:0.2;}
  .st2{fill:#231F20;}
  .st3{fill:none;}
  .st4{fill:#4F5D73;}
  .st5{fill:var(--blue-grey-lighter);}

  .st10{fill:none;}
  .st11{fill:var(--blue-grey-darkest);}
  .st12{fill:var(--blue-grey-dark);}
  .st13{fill:var(--blue-grey-darker);}

  
  
  .st18{fill:none;}
  .st14{opacity:0.2;}
  .st15{fill:var(--blue-grey-darkest);}
  .st16{fill:var(--blue-grey-darker);}
  .st17{fill:var(--blue-grey);}


  .check {
    cursor: pointer;
    transition: ease-in-out .4s all;
  }

  .check:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .adv__del {
    cursor: pointer;
    transition: ease-in-out .4s all;
  }

  .adv__del:hover {
    transform: scale(1.1) ;
  }

</style>