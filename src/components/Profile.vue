<template>
  <div class="profile__wrapper">
    
    <form @submit.prevent="userUpdate(signupInput)" action="" class="user_form">
      <h1 class="profile__title">My info</h1>
        <div class="form__item">
<!--           <img :src="signupInput.picture || require('../assets/nopic' + Math.floor(Math.random() * 5) + '.png')" 
                class="info__img"> -->
          <svg class="social__icon" width="40" height="40" x="0px" y="0px"
              viewBox="0 0 496 496" style="enable-background:new 0 0 496 496;" xml:space="preserve">
            <path fill="#222c36" d="M464,216v-56h-48v-48h-80v104H160V112H80v48H32v56H0v64h32v56h48v48h80V280h176v104h80v-48h48v-56h32v-64H464z M32,264
              H16v-32h16V264z M80,320H48V176h32V320z M144,368H96V128h48V368z M336,264H160v-32h176V264z M400,368h-48V128h48V368z M448,320
              h-32V176h32V320z M480,264h-16v-32h16V264z"/>
            <rect style="fill:var(--blue-grey-darkest);" x="368" y="256" width="16" height="16"/>
            <rect style="fill:var(--blue-grey-darkest);" x="368" y="224" width="16" height="16"/>
            <rect style="fill:var(--blue-grey-darkest);" x="368" y="288" width="16" height="16"/>
            <rect style="fill:var(--blue-grey-darkest);" x="368" y="192" width="16" height="16"/>
            <rect style="fill:var(--blue-grey-darkest);" x="112" y="256" width="16" height="16"/>
            <rect style="fill:var(--blue-grey-darkest);" x="112" y="224" width="16" height="16"/>
            <rect style="fill:var(--blue-grey-darkest);" x="112" y="288" width="16" height="16"/>
            <rect style="fill:var(--blue-grey-darkest);" x="112" y="192" width="16" height="16"/>
          </svg>
          <label>
            <input @focus="clearErrors" v-model="signupInput.username"
                    type="text" name="gymname" id="gymname" required placeholder=" ">
            <span>Gym name</span>
          </label>
        </div>

        <div class="form__item">
          <svg class="user__pic social__icon" x="0px" y="0px"
              width="40px" height="40px" viewBox="0 0 141.239 141.238" style="enable-background:new 0 0 141.239 141.238;"
              xml:space="preserve">
            <path fill="var(--blue-grey-darkest)" d="M6.616,106.26c0,0,12.69,1.544,16.944,1.539c3.915,0,9.738,0.164,18.714-6.567c0,0,1.317,7.558,8.887,12.871
              c0,0,2.484,4.787,5.323,9.783h49.406c0.047-3.901-0.183-7.956-0.84-12.085c0,0,10.726-20.381,4.533-33.557
              c0,0,18.494-5.034,26.474-24.591c0,0,8.414-7.349,3.796-11.979c0,0-5.038-9.035-19.339-15.13c0,0-9.455-5.456-10.922-7.349
              c0,0-3.992-6.304-18.495,4.405c0,0-2.517,8.204,2.309,11.776c0,0,7.357,1.265,10.715-5.258c0,0,0.626-0.826-0.616-1.253
              c0,0,2.718,0.208,4.197-2.523c0,0,6.309,2.523,9.236,10.09c2.941,7.573,2.516,8.187,4.201,9.461c0,0-13.022,3.579-15.968,13.445
              c0,0-14.086,2.309-16.395,11.141c0,0-11.135,1.675-8.819-8.832c0,0,1.892-2.309,6.999-2.024c0,0,2.554,0.142,0.7-4.772
              c-0.172-0.459,0.436-1.001,0.771-1.828c0.317-0.755,0.011-0.892-1.391-2.09c-0.459-0.378,0.373-1.237,0.723-2.167
              c0.22-0.559-0.723-2.6-0.723-2.6s2.189-1.713,2.091-2.522c-0.219-1.916-5.318-2.9-6.162-4.619c-0.337-0.684,0.854-2.21,0.7-2.933
              c-0.579-2.741-3.403-8.323-7.185-10.501c-5.182-2.977-19.329-3.924-25.493,8.547c-1.665,3.365-0.332,11.519,1.118,14.994
              c1.357,3.293,7.459,12.164,7.459,12.164c0.287,0.842,2.234,13.182-8.405,16.251c0,0-9.672-0.562-16.676,5.888
              c0,0-11.908-0.985-15.127,6.02c0,0-0.829-12.192,6.875-19.611c0,0,4.476,1.116,6.299,0c0,0,1.401,4.552,4.48,2.801
              c0,0,2.182,0.625,2.528-1.411c0,0,3.214-0.203,2.588-3.36c0,0,1.608-4.476-0.98-5.734c0,0,0.124-3.922-3.374-3.786
              c0,0-6.366,0.471-8.473,0.284c-2.744-0.229-7.575,0.701-10.512,5.893L8.57,78.818c0,0-7.145,9.526-8.124,18.911
              C0.458,97.724-2.489,104.729,6.616,106.26z"/>
          </svg>
          <label>
            <input @focus="clearErrors" v-model="signupInput.username"
                    type="text" name="username" id="username" required placeholder=" ">
            <span>User name</span>
          </label>
        </div>

        <div class="form__item">
          <svg class="social__icon" width="40" height="40" x="0px" y="0px"
              viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path fill="var(--blue-grey-darker)" d="M4,462.368V113.632h504v303.832c-0.032,24.792-20.128,44.88-44.92,44.904L4,462.368L4,462.368z"/>
            <path fill="var(--blue-grey-darker)" d="M504,117.632v299.832c-0.032,22.584-18.336,40.88-40.92,40.904H8V117.632H504 M512,109.632H0v356.736
              h463.08c27.008,0,48.912-21.896,48.92-48.904V109.632z"/>
            <path fill="var(--blue-grey-darker)" d="M31.92,45.632h448.16c17.632,0,31.92,14.288,31.92,31.92c0,0.008,0,0.008,0,0.016v32.184H0V77.568
              C-0.008,59.936,14.272,45.64,31.904,45.632C31.912,45.632,31.912,45.632,31.92,45.632z"/>
            <g style="opacity:0.7;">
              <circle fill="var(--blue-grey-darker)" cx="44.192" cy="77.688" r="8.928"/>
            </g>
            <g style="opacity:0.7;">
              <circle fill="var(--blue-grey-darker)" cx="70.968" cy="77.688" r="8.928"/>
            </g>
            <g style="opacity:0.7;">
              <circle fill="var(--blue-grey-darker)" cx="97.736" cy="77.688" r="8.928"/>
            </g>
            <polygon fill="var(--blue-grey-darker)" points="460.928,93.368 143.088,93.368 159.088,62.016 460.928,62.016 "/>
            <g>
              <path style="fill:var(--blue-grey-darker);" d="M171.92,71.416l1.312,5.696c0.28,1.336,0.56,2.704,0.8,4.072h0.048
                c0.256-1.368,0.672-2.76,1.032-4.048l1.6-5.72h2.576l1.6,5.6c0.384,1.464,0.72,2.832,1,4.192h0.056
                c0.2-1.368,0.496-2.736,0.8-4.192l1.392-5.6h3.112l-3.92,12.552h-2.936l-1.496-5.104c-0.384-1.312-0.704-2.648-0.952-4h-0.056
                c-0.232,1.352-0.552,2.688-0.952,4l-1.6,5.104h-2.96l-3.712-12.544L171.92,71.416z"/>
              <path style="fill:var(--blue-grey-darker);" d="M192.272,71.416l1.312,5.696c0.28,1.336,0.56,2.704,0.8,4.072h0.016
                c0.248-1.368,0.664-2.76,1.024-4.048l1.6-5.72h2.576l1.6,5.6c0.384,1.464,0.72,2.832,1,4.192h0.056
                c0.2-1.368,0.496-2.736,0.8-4.192l1.392-5.6h3.12l-3.888,12.552h-2.936l-1.496-5.104c-0.384-1.312-0.704-2.648-0.952-4h-0.056
                c-0.232,1.352-0.552,2.688-0.952,4l-1.6,5.104h-2.96l-3.712-12.544L192.272,71.416z"/>
              <path style="fill:var(--blue-grey-darker);" d="M212.624,71.416l1.312,5.696c0.28,1.336,0.56,2.704,0.8,4.072h0.048
                c0.256-1.368,0.672-2.76,1.032-4.048l1.6-5.72H220l1.6,5.6c0.384,1.464,0.72,2.832,1,4.192h0.056c0.2-1.368,0.496-2.736,0.8-4.192
                l1.392-5.6H228l-4,12.552h-2.936l-1.496-5.104c-0.384-1.312-0.704-2.648-0.952-4h-0.056c-0.232,1.352-0.552,2.688-0.952,4
                l-1.6,5.104h-2.96l-3.712-12.544L212.624,71.416z"/>
              <path style="fill:var(--blue-grey-darker);" d="M229.136,82.216c-0.056-1.064,0.76-1.976,1.832-2.04c0.04,0,0.088,0,0.128,0
                c1.128,0.072,1.976,1.04,1.912,2.16c-0.064,1.024-0.88,1.84-1.912,1.912c-1.064,0.016-1.944-0.832-1.96-1.896
                C229.136,82.312,229.136,82.264,229.136,82.216z"/>
            </g>
            <g>
              <rect x="422.824" y="75.688" style="fill:var(--blue-grey-darkest);" width="21.56" height="4"/>
              <polygon style="fill:var(--blue-grey-darker);" points="438.24,88.6 435.416,85.776 443.504,77.688 435.416,69.592 438.24,66.768 449.16,77.688 	
                "/>
            </g>
            <rect x="93.544" y="212.248" style="fill:var(--blue-grey-dark);" width="324.904" height="106.752"/>
            <path style="fill:var(--blue-grey-darker);" d="M414.448,216.248V315H97.552v-98.752H414.448 M422.448,208.248H89.552V323h332.896V208.248z"/>
            <g>
              <path style="fill:var(--blue-grey-darker);" d="M217.184,297.04h-12.992l-1.408-45.68L180,297.04h-13.216l-2.344-62.472h12.568l0.592,43.72
                l21.432-43.72h13.936l1.448,43.248l20.576-43.248h12.448L217.184,297.04z"/>
              <path style="fill:var(--blue-grey-darker);" d="M240.16,297.04l13.04-62.472h46.32l-2.176,10.4h-33.456l-2.984,14.2h32.344l-2.168,10.4h-32.344
                l-3.92,16.96H291.2l-2.216,10.4L240.16,297.04z"/>
              <path style="fill:var(--blue-grey-darker);" d="M298.272,297.04l13.088-62.472h21.344c3.248-0.072,6.496,0.072,9.72,0.432
                c2.744,0.312,5.4,1.184,7.8,2.552c2.064,1.216,3.744,2.984,4.848,5.112c1.12,2.192,1.696,4.616,1.664,7.08
                c0.08,3.24-0.944,6.416-2.896,9.008c-2.312,2.8-5.44,4.824-8.944,5.784c2.952,0.712,5.592,2.36,7.52,4.704
                c1.76,2.16,2.72,4.864,2.704,7.648c-0.008,3.792-1.12,7.496-3.2,10.672c-2.064,3.312-5.152,5.864-8.8,7.264
                c-4.952,1.664-10.168,2.416-15.384,2.216L298.272,297.04z M313.232,286.984H325.6c3.52,0.192,7.048-0.152,10.464-1
                c1.728-0.632,3.216-1.792,4.256-3.304c1.024-1.416,1.584-3.112,1.6-4.856c0.04-1.968-0.8-3.856-2.304-5.136
                c-2.24-1.56-4.952-2.28-7.672-2.024H316.64L313.232,286.984z M318.896,259.784h9.8c3.2,0.136,6.392-0.184,9.504-0.936
                c1.76-0.496,3.288-1.584,4.344-3.072c0.936-1.328,1.448-2.912,1.456-4.536c0.056-1.432-0.432-2.832-1.36-3.92
                c-1.032-1.088-2.392-1.808-3.872-2.048c-2.256-0.232-4.52-0.32-6.784-0.256h-9.976L318.896,259.784z"/>
            </g>
          </svg>
          <label>
            <input @focus="clearErrors" v-model="signupInput.site"
                    type="text" name="website" id="website" required placeholder=" ">
            <span>Web site</span>
          </label>
        </div>

        <div class="form__item">
          <svg class="social__icon" width="40" height="40" x="0px" y="0px"
              viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path fill="var(--blue-grey-darker)" d="M148.472,375.48c-13.484,0-22.46-11.081-20.049-24.749L161.83,161.27
              c2.4-13.612,15.35-24.749,28.778-24.749h292.966c13.427,0,22.451,11.137,20.049,24.749l-33.558,190.315
              c-2.327,13.197-14.767,23.896-27.786,23.896l0,0H148.472z"/>
            <path fill="var(--blue-grey-darker)" d="M499.339,143.564c-0.009,0.003-0.016,0.009-0.025,0.012L361.1,255.435h-89.974l-98.675-111.662
              c-0.003,0.003-0.006,0.006-0.01,0.009l-0.137-0.155c-0.004-0.004-0.007-0.007-0.012-0.012c-5.322,4.5-9.249,10.758-10.465,17.654
              l-0.88,4.991l92.394,104.54l-120.657,97.627c3.633,4.351,9.153,7.054,15.786,7.054h293.808c6.404,0,12.656-2.608,17.646-6.811
              l-83.948-95.044l125.784-101.801l1.861-10.555C504.843,154.345,503.105,148.067,499.339,143.564z"/>
            <path fill="var(--blue-grey-darker)" d="M483.572,136.52H190.606c-6.623,0-13.118,2.728-18.301,7.107L289.079,275.75
              c10.979,12.43,31.557,12.43,46.919,0l163.316-132.176C495.676,139.229,490.168,136.52,483.572,136.52z"/>
            <path style="fill:var(--blue-grey-darkest);" d="M505.448,138.386c-5.344-6.369-13.117-9.877-21.887-9.877H190.596c-17.459,0-33.565,13.779-36.667,31.369L120.522,349.34
              c-1.584,8.987,0.612,17.842,6.026,24.294c5.334,6.356,13.116,9.858,21.913,9.858h293.808c16.987,0,32.657-13.404,35.675-30.516
              l33.558-190.316C513.08,153.7,510.874,144.852,505.448,138.386z M483.562,144.531c0.592,0,1.166,0.044,1.732,0.109L330.949,269.523
              c-12,9.709-27.758,10.115-35.875,0.924L184.75,145.543c1.903-0.644,3.872-1.013,5.846-1.013H483.562z M136.3,352.122l33.407-189.461
              c0.432-2.45,1.352-4.806,2.637-6.962l87.738,99.335L136.037,355.401C136.018,354.343,136.102,353.246,136.3,352.122z M148.46,367.47
              c-0.593,0-1.169-0.043-1.735-0.107l123.973-100.309l12.366,14.001c7.057,7.989,17.15,12.003,27.831,12.003
              c10.226,0,20.99-3.682,30.131-11.078l18.446-14.926l87.967,99.594c-1.689,0.531-3.429,0.822-5.171,0.822H148.46V367.47z
              M495.722,159.878l-33.558,190.315c-0.389,2.208-1.205,4.329-2.326,6.29l-87.899-99.517l124.04-100.363
              C496.002,157.662,495.92,158.757,495.722,159.878z"/>
            <path style="fill:var(--blue-grey-darkest);" d="M110.549,248.137H8.011c-4.424,0-8.011,3.587-8.011,8.011c0,4.424,3.587,8.011,8.011,8.011h102.538
              c4.424,0,8.011-3.587,8.011-8.011C118.56,251.723,114.973,248.137,110.549,248.137z"/>
            <path style="fill:var(--blue-grey-darkest);" d="M127.104,213.423c0-4.424-3.587-8.011-8.011-8.011H42.19c-4.424,0-8.011,3.587-8.011,8.011s3.587,8.011,8.011,8.011h76.904
              C123.518,221.434,127.104,217.847,127.104,213.423z"/>
            <path style="fill:var(--blue-grey-darkest);" d="M102.004,290.861H25.1c-4.424,0-8.011,3.587-8.011,8.011c0,4.424,3.587,8.011,8.011,8.011h76.903
              c4.424,0,8.011-3.587,8.011-8.011C110.015,294.448,106.428,290.861,102.004,290.861z"/>
          </svg>
          <label>
            <input @focus="clearErrors" v-model="signupInput.email"
                    type="email" name="email" id="email" required placeholder=" ">
            <span>E-mail</span>
          </label>
        </div>

        <div class="form__item">
          <svg class="social__icon" width="36px" height="36px" viewBox="0 0 512 512" x="0px" y="0px" version="1.1">
            <path fill="#222c36" d="M398.14,50.5H117.98c-36.408,0-68.48,26.452-68.48,62.86v280.16c0,36.408,32.072,68.98,68.48,68.98h173.466  c-0.325-54,0.077-114.134-0.185-166.387c-11.064-0.112-22.138-0.684-33.202-0.854c0.041-18.467,0.017-37.317,0.024-55.781  c11.057-0.137,22.121-0.163,33.178-0.268c0.338-17.957-0.338-36.025,0.354-53.966c1.103-14.205,6.519-28.563,17.14-38.377  c12.859-12.239,31.142-16.397,48.387-16.912c18.233-0.163,36.468-0.076,54.71-0.068c0.072,19.24,0.072,38.482-0.008,57.722  c-11.789-0.02-23.585,0.023-35.374-0.025c-7.468-0.467-15.145,5.198-16.504,12.609c-0.177,12.875-0.064,25.757-0.057,38.628  c17.285,0.073,34.577-0.02,51.862,0.044c-1.264,18.629-3.581,37.168-6.285,55.637c-15.272,0.137-30.554,1.514-45.818,1.602  c-0.129,52.236,0.04,112.395-0.093,166.395h38.564c36.408,0,63.36-32.572,63.36-68.98V113.36C461.5,76.952,434.548,50.5,398.14,50.5  z"/>
          </svg>
        
          <label>
            <input @focus="clearErrors" v-model="signupInput.email"
                    type="text" name="facebook" id="facebook" required placeholder=" ">
            <span>Facebook</span>
          </label>
        </div>

        <div class="form__item">
          <svg class="social__icon" width="40px" height="40px" viewBox="0 0 24 24" x="0px" y="0px" version="1.1">
            <path fill="#222c36" d="M8 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm10 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .002 6.002A3 3 0 0 0 12 9z" id="surface1"/>
          </svg>
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
    align-items: end;
    grid-column-gap: .5em;
  }

  .form__item:hover {
    background: var(--blue-grey-dark);
    transform: translateY(.1em);
  }

  .frm__btn {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1em;
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
      padding:10px 20px;
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