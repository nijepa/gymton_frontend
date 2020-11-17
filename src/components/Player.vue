<template>
  <div class="sound__controls">

    <div class="sound__header">
      <div class="album__info">
        <h5>Album 1</h5>
<!--         <svg class="heart" background="#4b6077" style="fill-opacity:1;fill-rule:evenodd;stroke:4b6077" viewBox="0 0 50 50" enable-background="new 0 0 50 50" width="30px" height="30px" >
          <path fill="#4b6077" style="fill-opacity:1;fill-rule:evenodd;stroke:none" d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/>
        </svg> -->
        <a class="star-link" href="#">
          <svg class="star" width="44px" height="44px" viewBox="0 0 80 80" id="svg2" sodipodi:docname="Empty Star.svg">
            <defs id="defs4"/>
            <sodipodi:namedview id="base" pagecolor="none" bordercolor="#4b6077" borderopacity="1.0" gridtolerance="10000" guidetolerance="10" 
                                objecttolerance="10" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="3.4678899" 
                                inkscape:cx="49.5" inkscape:cy="21.5" inkscape:document-units="px" inkscape:current-layer="layer1" 
                                width="64px" height="64px" showgrid="true" gridspacingx="2px" gridspacingy="2px" gridempspacing="4" 
                                inkscape:window-width="847" inkscape:window-height="582" inkscape:window-x="133" inkscape:window-y="72"/>
            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
              <path sodipodi:type="star" fill="none" stroke="#4b6077"
                    style="fill-opacity:1;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" 
                    id="path3651" sodipodi:sides="5" sodipodi:cx="31.934996" sodipodi:cy="32.065002" sodipodi:r1="24.493324" 
                    sodipodi:r2="10.409663" sodipodi:arg1="0.9442689" sodipodi:arg2="1.5725874" inkscape:flatsided="false" 
                    inkscape:rounded="2.4286129e-017" inkscape:randomized="0" 
                    d="M 46.296296,51.906272 L 31.916351,42.474649 L 17.502712,51.8547 L 22.029072,35.264028 L 8.654054,24.454438 L 25.831443,23.632463 L 31.978866,7.5717174 L 38.068716,23.65438 L 55.243051,24.537884 L 41.829396,35.299492 L 46.296296,51.906272 z " 
                    transform="matrix(0.986858,0,0,1.03704,0.471316,1.159472)"/>
            </g>
          </svg>
        </a>
      </div>
    </div>

    <div class="volume__wrapper">
      <div class="sound-off">
        <svg class="down" version="1.1" id="Layer_1" x="0px" y="0px"  width="30" height="30"
              viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g transform="translate(1)">
            <path fill="none" d="M7.533,173.973v162.133H101.4L219.16,444.48c11.947,6.827,27.307-1.707,27.307-16.213V90.347
              c0-14.507-15.36-23.04-27.307-16.213l-117.76,99.84H7.533z"/>
            <path class="l1" style="fill:none;" d="M101.4,336.107L219.16,444.48c11.947,6.827,27.307-1.707,27.307-16.213V90.347
              c0-14.507-15.36-23.04-27.307-16.213l-117.76,99.84V336.107z"/>
            <path class="l1" style="fill:none;" d="M33.133,173.973v162.133H101.4l92.16,85.333c11.947,6.827,27.307,21.333,27.307,6.827V90.347
              c0-14.507-15.36,0-27.307,6.827l-92.16,76.8H33.133z"/>
          </g>
          <g>
            <path class="l1" fill="#4b6077" d="M228.547,455.573c-4.267,0-9.387-0.853-13.653-3.413c-0.853,0-0.853-0.853-1.707-0.853
              L97.987,344.64H7.533l0,0c-2.56,0-4.267-0.853-5.973-2.56c-1.707-1.707-2.56-3.413-2.56-5.973V173.973
              c0-5.12,3.413-8.533,8.533-8.533h90.453L214.04,67.307l0.853-0.853c8.533-5.12,17.92-5.12,26.453,0
              C249.88,71.573,255,80.107,255,90.347V429.12c0,10.24-5.12,18.773-13.653,23.893C237.08,454.72,232.813,455.573,228.547,455.573z
              M224.28,437.653c3.413,1.707,6.827,0.853,8.533,0c3.413-1.707,5.12-5.12,5.12-8.533V90.347c0-3.413-1.707-6.827-5.12-8.533
              c-1.707-0.853-5.12-2.56-8.533,0L106.52,180.8c-0.853,0.853-3.413,1.707-5.12,1.707H16.067v145.067H101.4l0,0
              c2.56,0,4.267,0.853,5.973,2.56L224.28,437.653z"/>
            <path class="l1" fill="#4b6077" d="M101.4,225.173c-5.12,0-8.533-3.413-8.533-8.533v-42.667c0-5.12,3.413-8.533,8.533-8.533
              c5.12,0,8.533,3.413,8.533,8.533v42.667C109.933,221.76,106.52,225.173,101.4,225.173z"/>
            <path class="l1" fill="#4b6077" d="M101.4,344.64c-5.12,0-8.533-3.413-8.533-8.533V293.44c0-5.12,3.413-8.533,8.533-8.533
              c5.12,0,8.533,3.413,8.533,8.533v42.667C109.933,341.227,106.52,344.64,101.4,344.64z"/>
          </g>
        </svg>
      </div>
      <div class="">
        <input ref="vol" class="slider" @click="volume()" type='range' value='56' data-orientation="vertical" />
        <output ref="amo"></output>
      </div>
      <div class="sound-high">
        <svg class="up" version="1.1" id="Layer_1" x="0px" y="0px"  width="30" height="30"
              viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g transform="translate(1)">
            <path fill="none" d="M7.533,173.973v162.133H101.4L219.16,444.48c11.947,6.827,27.307-1.707,27.307-16.213V90.347
              c0-14.507-15.36-23.04-27.307-16.213l-117.76,99.84H7.533z"/>
            <path fill="none" style="fill:none;" d="M101.4,336.107L219.16,444.48c11.947,6.827,27.307-1.707,27.307-16.213V90.347
              c0-14.507-15.36-23.04-27.307-16.213l-117.76,99.84V336.107z"/>
            <path fill="none" style="fill:none;" d="M33.133,173.973v162.133H101.4l92.16,85.333c11.947,6.827,27.307,21.333,27.307,6.827V90.347
              c0-14.507-15.36,0-27.307,6.827l-92.16,76.8H33.133z"/>
          </g>
          <g>
            <path class="l1" fill="#4b6077" d="M228.547,455.573c-4.267,0-9.387-0.853-13.653-3.413c-0.853,0-0.853-0.853-1.707-0.853
              L97.987,344.64H7.533l0,0c-2.56,0-4.267-0.853-5.973-2.56c-1.707-1.707-2.56-3.413-2.56-5.973V173.973
              c0-5.12,3.413-8.533,8.533-8.533h90.453L214.04,67.307l0.853-0.853c8.533-5.12,17.92-5.12,26.453,0
              C249.88,71.573,255,80.107,255,90.347V429.12c0,10.24-5.12,18.773-13.653,23.893C237.08,454.72,232.813,455.573,228.547,455.573z
              M224.28,437.653c3.413,1.707,6.827,0.853,8.533,0c3.413-1.707,5.12-5.12,5.12-8.533V90.347c0-3.413-1.707-6.827-5.12-8.533
              c-1.707-0.853-5.12-2.56-8.533,0L106.52,180.8c-0.853,0.853-3.413,1.707-5.12,1.707H16.067v145.067H101.4l0,0
              c2.56,0,4.267,0.853,5.973,2.56L224.28,437.653z"/>
            <path class="l1" fill="#4b6077" d="M101.4,225.173c-5.12,0-8.533-3.413-8.533-8.533v-42.667c0-5.12,3.413-8.533,8.533-8.533
              c5.12,0,8.533,3.413,8.533,8.533v42.667C109.933,221.76,106.52,225.173,101.4,225.173z"/>
            <path class="l1" fill="#4b6077" d="M101.4,344.64c-5.12,0-8.533-3.413-8.533-8.533V293.44c0-5.12,3.413-8.533,8.533-8.533
              c5.12,0,8.533,3.413,8.533,8.533v42.667C109.933,341.227,106.52,344.64,101.4,344.64z"/>
            <path class="l1" fill="#4b6077" d="M327.533,412.907c-3.413,0-6.827-2.56-7.68-5.973c-1.707-4.267,0.853-9.387,5.12-11.093
              c60.587-20.48,100.693-76.8,100.693-140.8S385.56,134.72,324.973,113.387c-4.267-1.707-6.827-5.973-5.12-11.093
              c1.707-4.267,5.973-6.827,11.093-5.12c66.56,23.04,111.787,87.04,111.787,157.867s-45.227,134.827-112.64,157.013
              C329.24,412.907,328.387,412.907,327.533,412.907z"/>
            <path class="l1" fill="#4b6077" d="M368.493,458.133c-3.413,0-6.827-1.707-7.68-5.12c-1.707-4.267,0.853-9.387,5.12-11.093
              c77.653-29.867,128-103.253,128-186.88c0-81.067-47.787-152.747-122.027-184.32c-4.267-1.707-5.973-6.827-4.267-11.093
              c1.707-5.12,5.973-6.827,11.093-5.12C458.947,88.64,511,167.147,511,255.04c0,90.453-54.613,169.813-139.093,203.093
              C371.053,458.133,370.2,458.133,368.493,458.133z"/>
            <path class="l1" fill="#4b6077" d="M280.6,365.973c-3.413,0-6.827-2.56-8.533-5.973c-1.707-4.267,1.707-9.387,5.973-10.24
              c41.813-11.947,70.827-51.2,70.827-93.867c0-43.52-29.013-81.92-70.827-93.867c-4.267-1.707-6.827-5.973-5.973-10.24
              c1.707-4.267,5.973-6.827,10.24-5.973c48.64,14.507,83.627,59.733,83.627,110.933S331.8,353.173,282.307,367.68
              C282.307,365.973,281.453,365.973,280.6,365.973z"/>
          </g>
        </svg>
      </div>
    </div>

    <div class="play__wrapper">
      <div v-if="playStart" >
        <svg width="120.00001" height="120.10718" id="svg5800" version="1.1" 
              class="play" @click="togglePlay()">
          <defs id="defs5802">
            <filter inkscape:collect="always" id="filter4049" color-interpolation-filters="sRGB">
              <feGaussianBlur inkscape:collect="always" stdDeviation="2.9886041" id="feGaussianBlur4051"/>
            </filter>
            <linearGradient inkscape:collect="always" xlink:href="#linearGradient3797" id="linearGradient5728"
              gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.53065927,0,0,1.0876633,45.04097,392.18081)" 
              x1="693.75287" y1="441.75574" x2="692.45367" y2="258.57379"/>
            <linearGradient inkscape:collect="always" id="linearGradient3797">
              <stop class="stop1" stop-color="#6d869d" style="stop-opacity:1" offset="0" id="stop3799"/>
              <stop class="stop2" stop-color="#4b6077" style="stop-opacity:1" offset="1" id="stop3801"/>
            </linearGradient>
          </defs>
          <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-321.39155,-362.23662)">
            <g transform="matrix(0.55984436,0,0,0.56034436,153.74484,-10.873494)" id="g5753">
              <rect class="uuu" fill="#1f241c" style="fill-opacity:1;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.75972277;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;filter:url(#filter4049)" id="rect5685" width="199.24026" height="199.24028" x="307.01779" y="673.42206" ry="16.889114"/>
              <rect ry="16.889114" y="673.42206" x="307.01779" height="199.24028" width="199.24026" id="rect5687" style="fill:url(#linearGradient5728);fill-opacity:1;fill-rule:evenodd;stroke:none"/>
              <rect class="uuu" y="687.49774" x="306.96326" height="5.5363946" width="198.88438" id="rect5689" fill="#d7f4d7" style="fill-opacity:1;fill-rule:evenodd;stroke:none"/>
              <g style="stroke:#ffffff" transform="matrix(1.5472438,0,0,1.5472438,-178.18411,247.39736)" id="g5691">
                <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path5693" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="translate(103.20033,-77.985646)"/>
                <path transform="matrix(0.7556502,0,0,0.7556502,188.37997,24.115885)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path5695" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
                <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path5697" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="matrix(0.5113004,0,0,0.5113004,270.68479,132.68725)"/>
                <path transform="translate(111.70108,-84.736773)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path5699" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
              </g>
              <g id="g5701" transform="matrix(-1.5472438,0,0,1.5472438,991.77846,246.1928)">
                <path transform="translate(103.20033,-77.985646)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path5703" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
                <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path5705" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="matrix(0.7556502,0,0,0.7556502,188.37997,24.115885)"/>
                <path transform="matrix(0.5113004,0,0,0.5113004,270.68479,132.68725)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path5707" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
                <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path5709" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="translate(111.70108,-84.736773)"/>
              </g>
              <path class="uuu" sodipodi:type="star" fill="#ffffff" style="fill-opacity:1;fill-rule:evenodd;stroke:none" id="path5751" sodipodi:sides="3" sodipodi:cx="398.84293" sodipodi:cy="353.41269" sodipodi:r1="155.47128" sodipodi:r2="77.735641" sodipodi:arg1="0.78539816" sodipodi:arg2="1.8325957" inkscape:flatsided="true" inkscape:rounded="0" inkscape:randomized="0" d="M 508.77772,463.34749 248.6692,393.65162 439.08185,203.23896 z" inkscape:transform-center-x="13.827214" inkscape:transform-center-y="0.069407879" transform="matrix(-0.29244942,-0.12506418,0.07787333,-0.46967236,484.02669,988.85245)"/>
            </g>
          </g>
        </svg>
      </div>
      <div v-else class="">
        <svg width="120.00001" height="120.10718" id="svg5500" version="1.1" 
              class="pause" @click="togglePlay()">
          <defs id="defs5502">
            <filter inkscape:collect="always" id="filter4049" color-interpolation-filters="sRGB">
              <feGaussianBlur inkscape:collect="always" stdDeviation="2.9886041" id="feGaussianBlur4051"/>
            </filter>
            <linearGradient inkscape:collect="always" xlink:href="#linearGradient3797" id="linearGradient4345" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.53065927,0,0,1.0876633,45.040972,171.32316)" x1="693.75287" y1="441.75574" x2="692.45367" y2="258.57379"/>
            <linearGradient inkscape:collect="always" id="linearGradient3797">
              <stop class="stop1" stop-color="#6d869d" style="stop-opacity:1" offset="0" id="stop3799"/>
              <stop class="stop2" stop-color="#4b6077" style="stop-opacity:1" offset="1" id="stop3801"/>
            </linearGradient>
          </defs>
          <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-191.62753,-440.47327)">
            <g transform="matrix(0.55984436,0,0,0.56034436,23.980822,191.11171)" id="g4988">
              <rect class="uuu" fill="#1f241c" style="fill-opacity:1;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.75972277;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;filter:url(#filter4049)" id="rect4317" width="199.24026" height="199.24028" x="307.01779" y="452.56442" ry="16.889114"/>
              <rect ry="16.889114" y="452.56442" x="307.01779" height="199.24028" width="199.24026" id="rect4319" style="fill:url(#linearGradient4345);fill-opacity:1;fill-rule:evenodd;stroke:none"/>
              <rect class="uuu" y="466.64011" x="306.96326" height="5.5363946" width="198.88438" id="rect4321" fill="#d7f4d7" style="fill-opacity:1;fill-rule:evenodd;stroke:none"/>
              <g style="stroke:#ffffff" transform="matrix(1.5472438,0,0,1.5472438,-178.18411,26.539711)" id="g4323">
                <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path4325" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="translate(103.20033,-77.985646)"/>
                <path transform="matrix(0.7556502,0,0,0.7556502,188.37997,24.115885)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path4327" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
                <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path4329" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="matrix(0.5113004,0,0,0.5113004,270.68479,132.68725)"/>
                <path transform="translate(111.70108,-84.736773)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path4331" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
              </g>
              <g id="g4333" transform="matrix(-1.5472438,0,0,1.5472438,991.77846,25.335151)">
                <path transform="translate(103.20033,-77.985646)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path4335" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
                <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path4337" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="matrix(0.7556502,0,0,0.7556502,188.37997,24.115885)"/>
                <path transform="matrix(0.5113004,0,0,0.5113004,270.68479,132.68725)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path4339" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
                <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path4341" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="translate(111.70108,-84.736773)"/>
              </g>
              <g transform="translate(3.8975058,-5.1966438)" id="g4930">
                <rect class="uuu" fill="#ffffff" style="fill-opacity:1;fill-rule:evenodd;stroke:none" id="rect4347" width="31.179903" height="109.12966" x="366.36386" y="502.81638"/>
                <rect class="uuu" fill="#ffffff" y="502.81638" x="407.93707" height="109.12966" width="31.179903" id="rect4349" style="fill-opacity:1;fill-rule:evenodd;stroke:none"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <svg width="90" height="90" viewBox="0 0 150 150" id="svg5242" class="forward">
        <defs id="defs5244">
          <filter inkscape:collect="always" id="filter4049" color-interpolation-filters="sRGB">
            <feGaussianBlur inkscape:collect="always" stdDeviation="2.9886041" id="feGaussianBlur4051"/>
          </filter>
          <linearGradient inkscape:collect="always" xlink:href="#linearGradient3797" id="linearGradient4285" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.53065927,0,0,1.0876633,47.639293,-54.731142)" x1="693.75287" y1="441.75574" x2="692.45367" y2="258.57379"/>
          <linearGradient inkscape:collect="always" id="linearGradient3797">
            <stop class="stop1" stop-color="#6d869d" style="stop-opacity:1" offset="0" id="stop3799"/>
            <stop class="stop2" stop-color="#4b6077" style="stop-opacity:1" offset="1" id="stop3801"/>
          </linearGradient>
          <linearGradient inkscape:collect="always" xlink:href="#linearGradient3797" id="linearGradient5335" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.53065927,0,0,1.0876633,47.639293,-54.731142)" x1="693.75287" y1="441.75574" x2="692.45367" y2="258.57379"/>
        </defs>
    
        <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-37.042111,-260.02829)">
          <g transform="matrix(0.55984436,0,0,0.55987188,-132.07419,137.44303)" id="g4952">
            <rect class="uuu" fill="#1f241c" style="fill-opacity:1;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.75972277;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;filter:url(#filter4049)" id="rect4253" width="199.24026" height="199.24028" x="309.61612" y="226.51013" ry="16.889114"/>
            <rect ry="16.889114" y="226.51013" x="309.61612" height="199.24028" width="199.24026" id="rect4255" style="fill:url(#linearGradient5335);fill-opacity:1;fill-rule:evenodd;stroke:none"/>
            <rect class="uuu" fill="#d7f4d7" y="240.58582" x="309.56158" height="5.5363946" width="198.88438" id="rect4257" style="fill-opacity:1;fill-rule:evenodd;stroke:none"/>
            <g style="stroke:#ffffff" transform="matrix(1.5472438,0,0,1.5472438,-175.58578,-199.51459)" id="g4259">
              <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path4261" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="translate(103.20033,-77.985646)"/>
              <path transform="matrix(0.7556502,0,0,0.7556502,188.37997,24.115885)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path4263" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
              <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path4265" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="matrix(0.5113004,0,0,0.5113004,270.68479,132.68725)"/>
              <path transform="translate(111.70108,-84.736773)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path4267" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
            </g>
            <g id="g4269" transform="matrix(-1.5472438,0,0,1.5472438,994.37679,-200.71915)">
              <path transform="translate(103.20033,-77.985646)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path4271" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
              <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path4273" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="matrix(0.7556502,0,0,0.7556502,188.37997,24.115885)"/>
              <path transform="matrix(0.5113004,0,0,0.5113004,270.68479,132.68725)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path4275" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
              <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path4277" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="translate(111.70108,-84.736773)"/>
            </g>
            <g transform="matrix(0.8484128,0,0,0.8484128,58.506668,45.070796)" id="g4920">
              <path transform="matrix(-0.3447018,-0.14740959,0.09178707,-0.55358943,485.44286,585.6462)" inkscape:transform-center-y="0.069407879" inkscape:transform-center-x="-13.827215" d="M 508.77772,463.34749 248.6692,393.65162 439.08185,203.23896 z" inkscape:randomized="0" inkscape:rounded="0" inkscape:flatsided="true" sodipodi:arg2="1.8325957" sodipodi:arg1="0.78539816" sodipodi:r2="77.735641" sodipodi:r1="155.47128" sodipodi:cy="353.41269" sodipodi:cx="398.84293" sodipodi:sides="3" id="path4279" style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" sodipodi:type="star"/>
              <rect class="uuu" fill="#ffffff" style="fill-opacity:1;fill-rule:evenodd;stroke:none" id="rect4351" width="31.179903" height="109.12966" x="443.01447" y="276.71198"/>
            </g>
          </g>
          <g id="g5301" transform="matrix(0.55984436,0,0,0.55987188,-132.07419,137.44303)">
            <rect class="uuu" ry="16.889114" y="226.51013" x="309.61612" height="199.24028" width="199.24026" id="rect5303" style="fill:#1f241c;fill-opacity:1;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.75972277;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;filter:url(#filter4049)"/>
            <rect class="uuu" style="fill:url(#linearGradient4285);fill-opacity:1;fill-rule:evenodd;stroke:none" id="rect5305" width="199.24026" height="199.24028" x="309.61612" y="226.51013" ry="16.889114"/>
            <rect class="uuu" style="fill:#d7f4d7;fill-opacity:1;fill-rule:evenodd;stroke:none" id="rect5307" width="198.88438" height="5.5363946" x="309.56158" y="240.58582"/>
            <g id="g5309" transform="matrix(1.5472438,0,0,1.5472438,-175.58578,-199.51459)" style="stroke:#ffffff">
              <path transform="translate(103.20033,-77.985646)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path5311" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
              <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path5313" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="matrix(0.7556502,0,0,0.7556502,188.37997,24.115885)"/>
              <path transform="matrix(0.5113004,0,0,0.5113004,270.68479,132.68725)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path5315" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
              <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path5317" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="translate(111.70108,-84.736773)"/>
            </g>
            <g transform="matrix(-1.5472438,0,0,1.5472438,994.37679,-200.71915)" id="g5319">
              <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path5321" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="translate(103.20033,-77.985646)"/>
              <path transform="matrix(0.7556502,0,0,0.7556502,188.37997,24.115885)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path5323" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
              <path sodipodi:type="arc" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" id="path5325" sodipodi:cx="325.31992" sodipodi:cy="476.68796" sodipodi:rx="2.953618" sodipodi:ry="2.953618" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" transform="matrix(0.5113004,0,0,0.5113004,270.68479,132.68725)"/>
              <path transform="translate(111.70108,-84.736773)" d="m 328.27353,476.68796 c 0,1.63124 -1.32238,2.95362 -2.95361,2.95362 -1.63124,0 -2.95362,-1.32238 -2.95362,-2.95362 0,-1.63124 1.32238,-2.95362 2.95362,-2.95362 1.63123,0 2.95361,1.32238 2.95361,2.95362 z" sodipodi:ry="2.953618" sodipodi:rx="2.953618" sodipodi:cy="476.68796" sodipodi:cx="325.31992" id="path5327" style="opacity:0.54368932;fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" sodipodi:type="arc"/>
            </g>
            <g id="g5329" transform="matrix(0.8484128,0,0,0.8484128,58.506668,45.070796)">
              <path class="uuu" fill="#ffffff" sodipodi:type="star" style="fill-opacity:1;fill-rule:evenodd;stroke:none" id="path5331" sodipodi:sides="3" sodipodi:cx="398.84293" sodipodi:cy="353.41269" sodipodi:r1="155.47128" sodipodi:r2="77.735641" sodipodi:arg1="0.78539816" sodipodi:arg2="1.8325957" inkscape:flatsided="true" inkscape:rounded="0" inkscape:randomized="0" d="M 508.77772,463.34749 248.6692,393.65162 439.08185,203.23896 z" inkscape:transform-center-x="-13.827215" inkscape:transform-center-y="0.069407879" transform="matrix(-0.3447018,-0.14740959,0.09178707,-0.55358943,485.44286,585.6462)"/>
              <rect class="uuu" fill="#ffffff" y="276.71198" x="443.01447" height="109.12966" width="31.179903" id="rect5333" style="fill-opacity:1;fill-rule:evenodd;stroke:none"/>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <div class="play__info">
      <p class="artist">Arist 1</p>
      <h3 class="track">Track 1</h3>
      <div class="progres">
      <progress id="file" value="72" max="100"> 72% </progress>
        <div class="time">
          <div class="">0:00</div>
          <div class="">05:27</div>
        </div>
      </div>
    </div>
    
    <div class="controls">
      <a class="like-link" href="#"> 
        <svg class="like" fill="none" style="fill-opacity:1;fill-rule:evenodd;stroke:#4b6077" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 478.2 478.2" width="20px" height="20px" >
          <g>
            <path fill="none" stroke="#4b6077" style="fill-opacity:1;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
              c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
              c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
              c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
              c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
              c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
              c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z "/>
            <path class="l1" fill="#4b6077" stroke="none" style="fill-opacity:1;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
              c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
              c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
              c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
              c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
              c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
              c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
              c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4
              c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
              c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
              c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
              c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
              c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
              c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
              C444.875,295.3,440.675,304.4,431.975,313.4z"/>
            
            
          </g>
        </svg>
      </a>
      <a class="dislike-link" href="#"> 
        <svg class="dislike" fill="#4b6077" style="fill-opacity:1;fill-rule:evenodd;stroke:none" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 478.2 478.2" width="20px" height="20px" >
          <g>
            <path fill="none" stroke="none" style="fill-opacity:1;" d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
              c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
              c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
              c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
              c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
              c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
              c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z "/>
            <path class="l1" fill="#4b6077" stroke="none" style="fill-opacity:1;" d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
              c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
              c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
              c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
              c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
              c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
              c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
              c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4
              c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
              c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
              c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
              c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
              c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
              c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
              C444.875,295.3,440.675,304.4,431.975,313.4z"/>
          </g>
        </svg>
      </a>
    </div>

  </div>
  
</template>

<script>
//import volume from "./volume"

  export default {
    name: "Player",
    computed: {
      
    },
    data() {
      return {
        playStart: false
      }
    },
    methods: {
      togglePlay() {
        this.playStart = !this.playStart
      },
      volume() {
        var style_el = document.createElement('style'),
            slider_el = document.querySelector('input[type=range]'), 
            pp = ['-webkit-slider-runnable-', '-moz-range-'], n_pp = pp.length;
        document.body.appendChild(style_el);
        slider_el.addEventListener('input', function() {
          var str = '', v = this.value + '% 100%';
          
          for(var i = 0; i < n_pp; i++) {
            str += 'input[type=range]::' + pp[i] + 'track{background-size:' + v + '}'
          }
          style_el.textContent = str;
        }, false); 
      },
    },
    mounted() {
      this.volume()
    }
  }
</script>

<style lang="scss">
@import "./volume";
  .sound__controls {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    justify-content: center;
    justify-items: center;
  }

// PLAY CONTROLS
  .play__wrapper { 
    grid-area: 2 / 1 / 4 / 2;
    justify-self: end;
    transition: all 1s ease-in-out;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: .5em;
    align-items: center;
  } 

  .forward,
  .pause,
  .play {
    cursor: pointer;
  }

  .forward:hover .uuu,
  .pause:hover .uuu,
  .play:hover .uuu {
    fill:#a5d2fd;
    transition: ease-in-out 1s all;
  }

  .forward:hover .vvv {
    fill:#a5d2fd;
  }
/*   .forward:hover .stop1 {
    stop-color:#2a4e74;
  }
  .forward:hover .stop2 {
    stop-color:#427cb9;
  } */

// TRACK INFO
  .play__info {
    grid-area: 2 / 2 / 4 / 3;
    justify-self: baseline;
    text-align: left;
  }

  .artist { 
    justify-self: baseline;
  }
  
  .track { 
    justify-self: baseline;
  }
  
// ALBUM INFO
  .sound__header {
    grid-area: 1 / 1 / 2 / 4;
    justify-self: normal;
    border-bottom: 1px solid #4b6077;
    box-shadow: 1px 1px 3px #4b6077;
    background: linear-gradient(#868686, #b3b3b3, #868686) content-box, linear-gradient(-90deg, #d0d3d5, #d2d5d7) border-box;
  }

  .album__info {
    display: grid;
    align-items: center;
    justify-content: space-around;
    grid-template-columns: auto auto;
    justify-items: center;
  }
  
// FAVORITE
  .star {
    cursor: pointer;
  }
  .star:hover > g > path {
    fill: #4b6077;
    //filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
    stroke: #a5d2fd;
    transition: all .5s ease-in-out;
  }
  .star:focus > g > path {
    fill: #4b6077;
  }
  .star-link {
    padding-top: .5em;
  }

  .heart {
    cursor: pointer;
  }
  .heart:hover > g > path {
    fill: #6d869d;
  }
// LIKE - DISLIKE
  .controls {
    grid-area: 3 / 3 / 4 / 4;
    justify-self: baseline;
  }

  .dislike-link,
  .like-link {
    border:1px solid #4b6077;
    border-radius: .3em; 
    box-shadow: 0px 0px 2px #6d869d;
    padding: .5em 1em 0;
    margin-right: .3em;
  }

  .dislike-link:hover,
  .like-link:hover {
    border: 1px solid #a5d2fd;
    box-shadow: 0px 0px 2px #6d869d;
    transition: all .5s ease-in-out;
  }

  .dislike-link:hover > .dislike > g > path,
  .like-link:hover > .like > g > path {
    fill: #4b6077;
  }

  .dislike-link:hover > .dislike > g > .l1,
  .like-link:hover > .like > g > .l1 {
    fill: #a5d2fd;
    transition: all .5s ease-in-out;
  }

  .like {
    cursor: pointer;
  }

  .dislike {
    transform: rotate(180deg);
  }
// VOLUME CONTROL
  .volume__wrapper {
    grid-area: 2 / 3 / 3 / 4;
    color: #1f241c;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-self: baseline;
    align-content: center;
    align-items: center;
  }

  .slidecontainer {
    width: 100%;
  }

  .slider {
    direction: vertical;
    -webkit-appearance: none;
    width: 100%;
    height: .4em;
    border-radius: .2em;
    border: 1px solid #4b6077;
    border-radius: 1em; 
    box-shadow: 0px 0px 2px #6d869d;
    background: transparent;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s
  }

  .slider:hover {
    opacity: 1;
    background: #6d869d;
    border: 1px solid #a5d2fd;
    transition: all .5s ease-in-out;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1em;
    height: 1em;
    background: #6d869d;
    border-radius: .2em; 
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 1em;
    height: 1em;
    background: #4b6077;
    border-radius: .2em; 
    cursor: pointer;
  }

  .slider::-moz-range-thumb:hover {
    border: 1px solid #a5d2fd;
    transition: all .5s ease-in-out;
  }

  .sound-high {
    margin-left: 1em;
  }

  .down,
  .up {
    cursor: pointer;
  }

  .down:hover > g > path,
  .up:hover > g > path {
    fill: #4b6077;
    //filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
  }

  .down:hover > g > .l1,
  .up:hover > g > .l1 {
    fill: #a5d2fd;
    transition: all .5s ease-in-out;
  }

// PROGRESS BAR
  .progres {
    grid-area: 3 / 2 / 4 / 3;
    margin-bottom: 1em;
    justify-self: baseline;
  }
  progress[value] {
    width: 350px;
    height: .4em;
    border-radius: 1em;
    background-image:
      -webkit-linear-gradient(-45deg, 
                              transparent 33%, rgba(0, 0, 0, .1) 33%, 
                              rgba(0,0, 0, .1) 66%, transparent 66%),
      -webkit-linear-gradient(top, 
                              rgba(255, 255, 255, .25), 
                              rgba(0, 0, 0, .25)),
      -webkit-linear-gradient(left, #003e81, #d0d3d5);
      border: 1px solid #4b6077;
      border-radius: 1em; 
      box-shadow: 0px 0px 2px #6d869d;
      background-size: 35px 20px, 100% 100%, 100% 100%;
  }

  .time {
    display: flex;
    justify-content: space-between;
  }
</style>