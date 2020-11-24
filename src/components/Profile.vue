<template>
  <div class="profile__wrapper">
    
    <form @submit.prevent="userUpdate(signupInput)" action="" class="user_form">
      <h1 class="profile__title">My info</h1>
        <div class="form__item">
<!--           <img :src="signupInput.picture || require('../assets/nopic' + Math.floor(Math.random() * 5) + '.png')" 
                class="info__img"> -->
          <label>
            <input @focus="clearErrors" v-model="signupInput.username"
                    type="text" name="gymname" id="gymname" required placeholder=" ">
            <span>Gym name</span>
          </label>
        </div>

        <div class="form__item">
          <label>
            <input @focus="clearErrors" v-model="signupInput.username"
                    type="text" name="username" id="username" required placeholder=" ">
            <span>User name</span>
          </label>
        </div>

        <div class="form__item">
          <label>
            <input @focus="clearErrors" v-model="signupInput.site"
                    type="text" name="website" id="website" required placeholder=" ">
            <span>Web site</span>
          </label>
        </div>

        <div class="form__item">
          <label>
            <input @focus="clearErrors" v-model="signupInput.email"
                    type="email" name="email" id="email" required placeholder=" ">
            <span>E-mail</span>
          </label>
        </div>

        <div class="form__item">
          <label>
            <input @focus="clearErrors" v-model="signupInput.email"
                    type="text" name="facebook" id="facebook" required placeholder=" ">
            <span>Facebook</span>
          </label>
        </div>

        <div class="form__item">
          <label>
            <input @focus="clearErrors" v-model="signupInput.email"
                    type="text" name="instagram" id="instagram" required placeholder=" ">
            <span>Instagram</span>
          </label>
        </div>

<!--         <div class="form__item">
          <label for="about">About</label>
          <ckeditor :editor="editor" v-model="signupInput.user_about" 
                    :config="{ placeholder:'pls enter content'}"
                    @focus="clearErrors" name="about" >
          </ckeditor> -->
<!--           <textarea @focus="clearErrors" v-model="signupInput.user_about"
                    name="about" id="about" rows="5" cols="30"></textarea> -->
        <!-- </div> -->

        <div class="frm__btn">
          <button type="submit" class="form__btn">
            <svg width="64.000000px" height="64.000000px" id="svg2">
              <defs id="defs4">
                <linearGradient id="linearGradient1367">
                  <stop id="stop1369" offset="0.0000000" style="stop-color:;stop-opacity:0.0000000;"/>
                  <stop id="stop1371" offset="0.0000000" style="stop-color:#602604;stop-opacity:0.0000000;"/>
                </linearGradient>
                <linearGradient id="linearGradient1347">
                  <stop style="stop-color:#f0da27;stop-opacity:0.0000000;" offset="0.0000000" id="stop1349"/>
                  <stop style="stop-color:#bf4d09;stop-opacity:0.0000000;" offset="1.0000000" id="stop1351"/>
                </linearGradient>
                <linearGradient id="linearGradient1315">
                  <stop style="stop-color:#97ff82;stop-opacity:0.0000000;" offset="0.0000000" id="stop1317"/>
                  <stop style="stop-color:#ceff24;stop-opacity:0.0000000;" offset="1.0000000" id="stop1319"/>
                </linearGradient>
                <linearGradient id="linearGradient2122">
                  <stop style="stop-color:#2edc32;stop-opacity:0.0000000;" offset="0.0000000" id="stop2124"/>
                  <stop style="stop-color:#11661d;stop-opacity:0.0000000;" offset="1.0000000" id="stop2126"/>
                </linearGradient>
                <linearGradient id="linearGradient1364">
                  <stop style="stop-color:var(--blue);stop-opacity:1.0000000;" offset="0.00000000" id="stop1366"/>
                  <stop style="stop-color:var(--blue-grey-light);stop-opacity:1.0000000;" offset="1.0000000" id="stop1368"/>
                </linearGradient>
                <linearGradient inkscape:collect="always" xlink:href="#linearGradient1364" id="linearGradient1341" gradientUnits="userSpaceOnUse" x1="74.910713" y1="32.362179" x2="84.910713" y2="47.451466"/>
                <linearGradient inkscape:collect="always" xlink:href="#linearGradient2122" id="linearGradient1343" gradientUnits="userSpaceOnUse" x1="73.839287" y1="34.428566" x2="76.875000" y2="43.714283"/>
                <linearGradient inkscape:collect="always" xlink:href="#linearGradient1315" id="linearGradient1345" gradientUnits="userSpaceOnUse" x1="72.946426" y1="35.589287" x2="85.000000" y2="47.375000"/>
                <radialGradient inkscape:collect="always" xlink:href="#linearGradient1347" id="radialGradient1353" cx="21.959658" cy="14.921703" fx="21.959658" fy="14.921703" r="27.500000" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.211118e-16,1.330643,-1.347411,2.027373e-5,44.09678,-13.39507)"/>
                <radialGradient inkscape:collect="always" xlink:href="#linearGradient1367" id="radialGradient1357" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.211118e-16,1.330643,-1.347411,2.027373e-5,44.09678,-13.39507)" cx="21.959658" cy="14.921703" fx="21.959658" fy="14.921703" r="27.500000"/>
                <radialGradient inkscape:collect="always" xlink:href="#linearGradient1367" id="radialGradient1375" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.211118e-16,1.330643,-1.347411,2.027373e-5,44.09678,-13.39507)" cx="21.959658" cy="14.921703" fx="21.959658" fy="14.921703" r="27.500000"/>
                <radialGradient inkscape:collect="always" xlink:href="#linearGradient1367" id="radialGradient1381" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.211118e-16,1.330643,-1.347411,2.027373e-5,44.09678,-13.39507)" cx="21.959658" cy="14.921703" fx="21.959658" fy="14.921703" r="27.500000"/>
                <radialGradient inkscape:collect="always" xlink:href="#linearGradient1347" id="radialGradient1383" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.211118e-16,1.330643,-1.347411,2.027373e-5,44.09678,-13.39507)" cx="21.959658" cy="14.921703" fx="21.959658" fy="14.921703" r="27.500000"/>
              </defs>
              <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="8.2031250" inkscape:cx="32.000000" inkscape:cy="32.000000" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="false" inkscape:grid-bbox="true" inkscape:grid-points="true" inkscape:window-width="1156" inkscape:window-height="693" inkscape:window-x="0" inkscape:window-y="25" showguides="false"/>
              <g inkscape:label="Calque 1" inkscape:groupmode="layer" id="layer1">
                <g id="g1393">
                  <g id="g1389">
                    <path transform="matrix(0.818182,0.000000,0.000000,0.818182,5.409085,6.227267)" style="fill:url(#radialGradient1381);fill-opacity:1.0000000;stroke:none;stroke-width:2.0000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.0000000;stroke-opacity:1.0000000" d="M 32.500000,2.9375000 C 16.749344,2.9375000 3.9375000,15.749344 3.9375000,31.500000 C 3.9375000,47.250656 16.749344,60.062500 32.500000,60.062500 C 48.250656,60.062500 61.062500,47.250656 61.062500,31.500000 C 61.062500,15.749344 48.250656,2.9375000 32.500000,2.9375000 z " id="path1373"/>
                    <path transform="matrix(0.818182,0.000000,0.000000,0.818182,5.409085,6.227267)" style="fill:url(#radialGradient1383);fill-opacity:1.0000000;stroke:none;stroke-width:2.0000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.0000000;stroke-opacity:1.0000000" d="M 60.000000,31.500000 C 60.000000,46.680000 47.680000,59.000000 32.500000,59.000000 C 17.320000,59.000000 5.0000000,46.680000 5.0000000,31.500000 C 5.0000000,16.320000 17.320000,4.0000000 32.500000,4.0000000 C 47.680000,4.0000000 60.000000,16.320000 60.000000,31.500000 z " id="path1339"/>
                  </g>
                  <g transform="matrix(1.669803,0.000000,0.000000,1.669803,-95.46790,-35.25013)" id="g1330">
                    <path style="fill:url(#linearGradient1341);fill-opacity:1.0000000;fill-rule:nonzero;stroke:none;stroke-width:97.654999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.0000000;stroke-opacity:1.0000000" d="M 92.843750,27.406250 C 92.709227,27.431632 92.581496,27.484854 92.468750,27.562500 L 75.031250,39.187500 L 67.593750,33.593750 C 67.219741,33.313206 66.699821,33.335166 66.350801,33.646249 C 66.001781,33.957333 65.920401,34.471313 66.156250,34.875000 L 74.156250,47.875000 C 74.310788,48.143493 74.582935,48.323346 74.890519,48.360256 C 75.198104,48.397167 75.505075,48.286807 75.718750,48.062500 L 93.718750,29.062500 C 94.019675,28.757506 94.088185,28.292645 93.888043,27.913805 C 93.687901,27.534965 93.265290,27.329564 92.843750,27.406250 z " id="path1362"/>
                    <path transform="translate(0.000000,-1.281738e-2)" style="fill:url(#linearGradient1343);fill-opacity:1.0000000;fill-rule:nonzero;stroke:none;stroke-width:97.654999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.0000000;stroke-opacity:1.0000000" d="M 92.968750,27.968750 C 92.901974,27.973412 92.837468,27.994914 92.781250,28.031250 L 75.000000,39.875000 L 67.250000,34.062500 C 67.103299,33.898540 66.851460,33.884549 66.687500,34.031250 C 66.523540,34.177951 66.509549,34.429790 66.656250,34.593750 L 74.656250,47.593750 C 74.721187,47.698225 74.830963,47.766618 74.953364,47.778858 C 75.075766,47.791098 75.196911,47.745798 75.281250,47.656250 L 93.281250,28.656250 C 93.409287,28.540573 93.447747,28.355339 93.376344,28.198253 C 93.304941,28.041166 93.140092,27.948345 92.968750,27.968750 z " id="path2120"/>
                    <path transform="translate(0.000000,-1.281738e-2)" style="fill:url(#linearGradient1345);fill-opacity:1.0000000;fill-rule:nonzero;stroke:none;stroke-width:97.654999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.0000000;stroke-opacity:1.0000000" d="M 92.906250,28.468750 L 75.000000,40.406250 L 67.093750,34.468750 L 75.031250,47.343750 L 92.906250,28.468750 z " id="path1323"/>
                  </g>
                </g>
              </g>
            </svg>
            Save
          </button>

          <button class="form__btn">
            <svg width="40.000000px" height="40.000000px" viewBox="0 0 45 45" style="enable-background:new 0 0 45 45;" xml:space="preserve" version="1.1" id="svg2">
              <defs id="defs6">
                <clipPath id="clipPath16" clipPathUnits="userSpaceOnUse">
                  <path id="path18" d="M 0,36 36,36 36,0 0,0 0,36 Z"/>
                </clipPath>
              </defs>
              <g transform="matrix(1.25,0,0,-1.25,0,45)" id="g10">
                <g id="g12">
                  <g clip-path="url(#clipPath16)" id="g14">
                    <g transform="translate(22.2383,17.9956)" id="g20">
                      <path id="path22" style="fill:#c14d4d;;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 9.883,9.883 c 1.172,1.171 1.172,3.071 0,4.242 -1.172,1.171 -3.071,1.172 -4.242,0 l -9.883,-9.883 -9.883,9.883 c -1.171,1.172 -3.071,1.172 -4.243,0 -1.171,-1.171 -1.171,-3.071 10e-4,-4.243 L -8.484,0 -18.391,-9.907 c -1.172,-1.171 -1.172,-3.071 0,-4.242 0.586,-0.586 1.354,-0.879 2.121,-0.879 0.768,0 1.536,0.293 2.122,0.879 l 9.906,9.906 9.883,-9.882 c 0.586,-0.585 1.353,-0.878 2.121,-0.878 0.767,0 1.535,0.293 2.121,0.878 1.172,1.171 1.172,3.072 0,4.243 L 0,0 Z"/>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Cancel
          </button>
        </div>
      </form>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Profile',
    data() {
      return {
        signupInput: {
          _id: '',
          email: '',
          password: '',
          username: '',
          first_name: '',
          last_name: '',
          user_about: '',
          picture: ''
        },
        user: {},
      }
    },
    computed: {
      ...mapGetters([ 'loggedUser',
                      'getSelectedUser',
                      'getSelectedMenu',
                      'getErrors' ]),
    },

    methods: {
      ...mapActions([ 'signup',
                      'fetchSelectedUser',
                      'userUpdate',
                      'selectMenu',
                      'clearErrors' ]),
    }
  }
</script>

<style lang="scss">
  .profile__wrapper {
    display: grid;
    padding: 1em;
  }

  .profile__title {
    background: var(--blue-grey-darker);
    padding: .5em;
    border-bottom: 1px solid var(--blue-grey-light);
    box-shadow: 0px 1px 2px var(--blue-grey);
    margin: 0;
    justify-self: center;
  }

  .user_form {
    background: var(--blue-grey);
    justify-self: center;
    //padding: 1em;
    border-radius: .2em;

    background: linear-gradient(45deg, var(--blue-grey-darker), var(--blue-grey-dark));
    border-radius: .2em;
    color: var(--blue-grey-lighter);
  }

  .form__item {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto); 
    padding: .5em 1em;
    box-shadow: 0px 1px 2px var(--blue-grey);
    border-top: 1px solid var(--blue-grey-darker);
  }

  .form__item:hover {
    background: var(--blue-grey-dark);
  }

  .frm__btn {
    display: flex;
    padding: 1em;
  }

  .form__btn {
    background: transparent;
    border-radius: .2em;
    border: 2px solid var(--blue-grey-dark);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-variant: small-caps;
    font-weight: 800;
    color: var(--blue-grey-light);
    transition: ease-in-out .6s all;
  }

  .form__btn:hover {
    background: var(--blue-grey-darkest);
    border-radius: .4em;
    border: 2px solid var(--blue-grey-lighter);
    color: var(--blue-grey-lighter);
  }

  form { 
      label {
      margin:20px 0 0 0;
      position:relative;
      display:inline-block;
    }
    
    label > span {
      padding:10px;
      pointer-events: none;
      position:absolute;
      left:0;
      top:0;
      transition: 0.2s;
      transition-timing-function: ease;
      transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      opacity:0.5;
    }

    input {
      padding:10px;
      //background: #728da6;;
      background: var(--blue-grey-dark);
      border: 2px solid var(--blue-grey-dark);
      border-radius: .2em;
      //border: 2px solid transparent;
    }

    input:hover {
      border: 2px solid var(--blue-grey-darkest);
    }

    input:focus {
      background: var(--blue-grey-lighter);
      border: 2px solid var(--blue-grey-darkest);
      box-shadow: 0px 0px 2px var(--blue-grey-darker) inset;
    }

    input:focus + span, input:not(:placeholder-shown) + span {
      opacity:1;
      color: var(--blue-grey-darkest);
      transform: scale(0.9) translateY(-100%) translateX(-15px);
    }

    /* For IE Browsers*/
    input:focus + span, input:not(:-ms-input-placeholder) + span {
      opacity:1;
      transform: scale(0.75) translateY(-100%) translateX(-30px);
    }
  }
</style>