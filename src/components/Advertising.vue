<template>
  <div class="profile__wrapper">
    <div class="user_form">
      <div class="profile__title adv__title">
        <!-- <h3 class="">List of Advertisings</h3> -->
        <button class="adv__btn">
          <svg class="adv__add" viewBox="0 -256 1792 1792" id="svg3013" width="35" height="35" >
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
            <svg @click="toogleType(advertise.id, 'minutes')" class="amo__type" width="30px" height="30px" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <circle style="fill:none;" cx="246.646" cy="256.411" r="192.439"/>
              <path style="fill:var(--blue-grey-light);" d="M155.052,392.479c-75.151-75.151-75.151-196.995,0-272.146
                c31.908-31.908,72.235-50.261,113.83-55.074c-56.371-6.523-115.073,11.83-158.316,55.074c-75.151,75.151-75.151,196.995,0,272.146
                c43.242,43.242,101.945,61.595,158.316,55.074C227.287,442.74,186.962,424.387,155.052,392.479z"/>
              <path style="fill:var(--blue-grey-light);" d="M338.228,392.479c75.151-75.151,75.151-196.995,0-272.146
                c-31.908-31.908-72.235-50.261-113.83-55.074c56.371-6.523,115.073,11.83,158.316,55.074c75.151,75.151,75.151,196.995,0,272.146
                c-43.242,43.242-101.945,61.595-158.316,55.074C265.993,442.74,306.318,424.387,338.228,392.479z"/>
              <g>
                <path style="fill:var(--blue-grey-darker);" d="M348.364,419.231c-41.749,25.76-93.326,35.594-144.834,23.395
                  C100.515,418.227,36.783,314.939,61.181,211.923S188.869,45.175,291.885,69.573c101.102,23.945,164.356,123.876,143.61,224.961
                  l-23.578-5.584l27.277,91.059l65.221-69.151l-23.745-5.624c26.641-126.029-52.051-250.961-178.091-280.813
                  C174.626-5.884,46.333,73.275,16.028,201.229s48.856,256.245,176.809,286.55c63.976,15.152,128.038,2.938,179.894-29.058"/>
                <circle style="fill:var(--blue-grey-darker);" cx="246.646" cy="256.411" r="21.935"/>
              </g>
              <path d="M367.267,451.34c-52.178,32.194-113.767,42.144-173.429,28.014C70.68,450.185-5.786,326.258,23.384,203.101
                S176.481,3.477,299.637,32.646c44.926,10.641,85.095,34.178,116.165,68.069c30.336,33.092,50.216,73.913,57.489,118.051
                c0.768,4.663,5.178,7.815,9.833,7.051c4.662-0.769,7.818-5.171,7.051-9.833c-7.815-47.427-29.172-91.284-61.76-126.832
                c-33.393-36.427-76.56-61.724-124.835-73.158c-64.11-15.182-130.292-4.491-186.358,30.104S21.917,135.05,6.733,199.157
                C-8.45,263.264,2.241,329.448,36.835,385.515c34.595,56.066,88.952,95.306,153.06,110.49c19.028,4.506,38.229,6.734,57.304,6.733
                c45.191-0.001,89.629-12.508,129.054-36.835c4.021-2.481,5.269-7.752,2.788-11.773C376.56,450.108,371.29,448.859,367.267,451.34z"
                />
              <path d="M511.64,308.302c-0.877-2.927-3.25-5.165-6.224-5.87l-15.756-3.731c2.877-16.3,4.117-32.838,3.689-49.277
                c-0.122-4.724-4.043-8.449-8.774-8.331c-4.724,0.123-8.453,4.052-8.331,8.774c0.465,17.869-1.189,35.868-4.915,53.495
                c-0.961,4.543,1.879,9.024,6.398,10.094l9.325,2.21l-44.886,47.592l-18.773-62.669l9.158,2.169c2.252,0.535,4.622,0.132,6.574-1.112
                c1.95-1.245,3.314-3.226,3.779-5.493c10.498-51.149,0.811-103.611-27.276-147.722c-28.146-44.205-71.737-75.203-122.744-87.284
                c-107.442-25.444-215.552,41.263-241,148.704c-7.985,33.717-7.104,69.02,2.548,102.093c9.358,32.061,26.749,61.546,50.293,85.268
                c1.672,1.685,3.873,2.528,6.072,2.528c2.179,0,4.359-0.827,6.028-2.483c3.353-3.329,3.374-8.746,0.046-12.1
                c-44.953-45.29-63.024-109.35-48.337-171.362c23.272-98.26,122.147-159.267,220.407-135.996
                c46.647,11.049,86.512,39.397,112.254,79.824c24.099,37.849,33.388,82.418,26.517,126.406l-14.794-3.503
                c-2.975-0.706-6.098,0.232-8.196,2.455c-2.098,2.223-2.85,5.397-1.972,8.325l27.277,91.059c0.877,2.927,3.25,5.165,6.224,5.87
                c2.973,0.703,6.098-0.232,8.196-2.455l65.221-69.151C511.765,314.404,512.517,311.23,511.64,308.302z"/>
              <path d="M127.007,405.998c-2.781,3.819-1.94,9.171,1.879,11.952c21.493,15.654,45.618,26.724,71.703,32.902
                c15.448,3.659,31.037,5.466,46.523,5.466c36.689,0,72.766-10.155,104.775-29.905c4.021-2.481,5.269-7.752,2.788-11.773
                c-2.481-4.021-7.751-5.27-11.773-2.788c-41.629,25.687-90.768,33.625-138.369,22.35c-23.864-5.651-45.925-15.773-65.573-30.083
                C135.139,401.337,129.788,402.179,127.007,405.998z"/>
              <path d="M237.114,227.033c-4.864,1.415-9.323,4.032-13.004,7.714c-11.889,11.889-11.889,31.232,0,43.12
                c5.758,5.759,13.416,8.931,21.56,8.931c8.145,0,15.801-3.171,21.56-8.931c3.682-3.682,6.3-8.141,7.714-13.005h57.656
                c4.725,0,8.555-3.831,8.555-8.555s-3.831-8.555-8.555-8.555h-57.656c-1.414-4.864-4.032-9.323-7.714-13.004
                c-3.681-3.682-8.14-6.3-13.004-7.714v-34.606c0-4.725-3.831-8.555-8.555-8.555s-8.555,3.831-8.555,8.555L237.114,227.033
                L237.114,227.033z M259.049,256.307c0,3.574-1.392,6.934-3.92,9.461s-5.887,3.919-9.461,3.919c-3.574,0-6.933-1.392-9.461-3.919
                c-5.217-5.217-5.217-13.706,0-18.922c2.528-2.527,5.887-3.92,9.461-3.92c3.574,0,6.934,1.392,9.461,3.92
                C257.658,249.373,259.049,252.733,259.049,256.307z"/>
              <!-- <path d="M237.114,377.872v30.619c0,4.725,3.831,8.555,8.555,8.555s8.555-3.831,8.555-8.555v-30.619c0-4.725-3.831-8.555-8.555-8.555
                S237.114,373.147,237.114,377.872z"/> -->
<!--               <path d="M245.67,142.434c4.725,0,8.555-3.831,8.555-8.555v-30.619c0-4.725-3.831-8.555-8.555-8.555s-8.555,3.831-8.555,8.555v30.619
                C237.114,138.603,240.945,142.434,245.67,142.434z"/>
              <path d="M313.994,374.217c-4.092,2.362-5.494,7.595-3.131,11.687l3.706,6.419c1.584,2.745,4.46,4.279,7.417,4.279
                c1.451,0,2.923-0.37,4.27-1.148c4.092-2.362,5.494-7.595,3.131-11.687l-3.706-6.419
                C323.319,373.256,318.087,371.854,313.994,374.217z"/> -->
   <!--            <path d="M180.477,125.847l-3.706-6.418c-2.362-4.092-7.597-5.494-11.687-3.131c-4.092,2.362-5.494,7.595-3.131,11.687l3.706,6.418
                c1.584,2.745,4.46,4 -->.279,7.417,4.279c1.451,0,2.924-0.37,4.27-1.148C181.437,135.171,182.839,129.938,180.477,125.847z"/>
       <!--        <path d="M382.117,324.774l-6.419-3.706c-4.092-2.364-9.325-0.961-11.687,3.131c-2.362,4.092-0.96,9.324,3.131,11.687l6.419,3.706
                c1.347,0.778,2.819,1.148,4.27,1.148c2.957,0,5.833-1.535,7.417-4.279C387.611,332.369,386.209,327.137,382.117,324.774z"/>
              <path d="M115.641,190.683c1.347,0.778,2.819,1.148,4.27,1.148c2.957,0,5.832-1.534,7.417-4.279c2.362-4.092,0.96-9.324-3.131-11.687
                l-6.418-3.706c-4.092-2.364-9.324-0.96-11.687,3.131c-2.362,4.092-0.96,9.324,3.131,11.687L115.641,190.683z"/>
              <path d="M406.841,255.875c0-4.725-3.831-8.555-8.555-8.555h-30.619c-4.725,0-8.555,3.831-8.555,8.555s3.831,8.555,8.555,8.555
                h30.619C403.01,264.43,406.841,260.601,406.841,255.875z"/> -->
      <!--         <path d="M84.499,255.875c0,4.725,3.831,8.555,8.555,8.555h30.619c4.725,0,8.555-3.831,8.555-8.555s-3.831-8.555-8.555-8.555H93.054
                C88.329,247.3 -->19,84.499,251.15,84.499,255.875z"/>
    <!--           <path d="M371.428,191.83c1.451,0,2.923-0.37,4.27-1.148l6.419-3.706c4.092-2.362,5.494-7.595,3.131-11.687
                c-2.362-4.092-7.596-5.494-11.687-3.131l-6.419,3.706c-4.092,2.362-5.494,7.595-3.131,11.687
                C365.596,190.296,368.472,191.83,371.428,191.83z"/>
              <path d="M113.509,340.74c1.451,0,2.924-0.37,4.27-1.148l6.418-3.706c4.092-2.362,5.494-7.595,3.131-11.687
                c-2.362-4.093-7.597-5.493-11.687-3.131l-6.418,3.706c-4.092,2.362-5.494,7.595-3.131,11.687
                C107.676,339.205,110.552,340.74,113.509,340.74z"/>
              <path d="M318.264,138.682c2.957,0,5.833-1.534,7.417-4.279l3.706-6.418c2.362-4.092,0.96-9.324-3.131-11.687
                c-4.092-2.364-9.324-0.962-11.687,3.131l-3.706,6.418c-2.362,4.092-0.961,9.324,3.131,11.687
                C315.342,138.311,316.813,138.682,318.264,138.682z"/> -->
              <!-- <path d="M177.345,374.217c-4.092-2.364-9.325-0.961-11.687,3.131l-3.706,6.419c-2.362,4.092-0.96,9.324,3.131,11.687
                c1.347,0.778,2.819,1.148,4.27,1.148c2.957,0,5.833-1.535,7.417-4.279l3.706-6.419C182.839,381.811,181.437,376.579,177.345,374.217
                z"/> -->
              <g>
              </g>


            </svg>
            <label class="amount" :class="advertise.type == 'minutes' ? 'amount__selected' : 'amount__text'" :for="advertise.id + 'minutes'">minutes</label>
            <input type="radio" class="amount__input" :id="advertise.id + 'minutes'" name="" v-model="advertise.type" value="minutes">
            
            <svg @click="toogleType(advertise.id, 'tracks')" class="amo__type" width="27px" height="27px" x="0px" y="0px"
                viewBox="0 0 502 502" style="enable-background:new 0 0 502 502;" xml:space="preserve">
              <g>
                <path style="fill:var(--blue-grey-light);" d="M167.599,282.635H96.277c-39.39,0-71.322,31.932-71.322,71.322l0,0
                  c0,39.39,31.932,71.322,71.322,71.322l0,0c39.39,0,71.322-31.932,71.322-71.322V282.635z"/>
                <path style="fill:var(--blue-grey-light);" d="M477.046,349.356h-71.322c-39.39,0-71.322,31.932-71.322,71.322l0,0
                  c0,39.39,31.932,71.322,71.322,71.322l0,0c39.39,0,71.322-31.932,71.322-71.322V349.356z"/>
                <polygon style="fill:var(--blue-grey-darker);" points="477.046,150.344 477.046,76.721 167.599,10 167.599,83.623 	"/>
                <g>
                  <path d="M318.01,169.002c-0.696,0-1.402-0.073-2.109-0.225l-26-5.584c-5.4-1.16-8.837-6.477-7.677-11.876
                    c1.159-5.4,6.474-8.839,11.876-7.677l26,5.584c5.4,1.16,8.837,6.477,7.677,11.876C326.77,165.792,322.622,169.002,318.01,169.002z
                    "/>
                </g>
                <path d="M487.046,150.344V76.721c0-4.71-3.288-8.783-7.892-9.775L169.707,0.225c-2.954-0.638-6.038,0.096-8.39,1.995
                  c-2.352,1.898-3.718,4.759-3.718,7.781v73.623v189.012H96.277c-44.841,0-81.322,36.481-81.322,81.322s36.481,81.322,81.322,81.322
                  s81.322-36.481,81.322-81.322V139.075l77.301,16.602c0.708,0.152,1.414,0.225,2.109,0.225c4.612,0,8.76-3.21,9.767-7.902
                  c1.16-5.399-2.277-10.717-7.677-11.876l-81.5-17.504V96.01l289.446,62.408v180.938h-61.322c-44.841,0-81.322,36.481-81.322,81.322
                  S360.882,502,405.723,502s81.322-36.481,81.322-81.322V150.344H487.046z M157.599,353.957c0,33.813-27.509,61.322-61.322,61.322
                  s-61.322-27.509-61.322-61.322s27.509-61.322,61.322-61.322h61.322V353.957z M177.599,22.386l289.446,62.409v53.164L177.599,75.55
                  V22.386z M467.046,420.678c0,33.813-27.509,61.322-61.322,61.322s-61.322-27.509-61.322-61.322s27.509-61.322,61.322-61.322h61.322
                  V420.678z"/>
                <g>
                  <path d="M59,365.5c-5.523,0-10-4.477-10-10c0-26.743,21.757-48.5,48.5-48.5c5.523,0,10,4.477,10,10s-4.477,10-10,10
                    C81.785,327,69,339.786,69,355.5C69,361.023,64.523,365.5,59,365.5z"/>
                </g>
                <g>
                  <path d="M368.5,431.5c-5.523,0-10-4.477-10-10c0-26.743,21.757-48.5,48.5-48.5c5.523,0,10,4.477,10,10s-4.477,10-10,10
                    c-15.715,0-28.5,12.785-28.5,28.5C378.5,427.023,374.023,431.5,368.5,431.5z"/>
                </g>
              </g>
            </svg>
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
      getIndex (id) {
        return this.advertising.findIndex(i => i.id === id);
      },

      toggleActive(id) {
        this.advertising[this.getIndex(id)].active = !this.advertising[this.getIndex(id)].active
      },

      toogleType(id, type) {
        this.advertising[this.getIndex(id)].type = type
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

  .adv__add {
    margin-right: 1em;
  }

  .amo__type {
    cursor: pointer;
    transition: all .4s ease-in-out;
  }

  .amo__type:hover {
    transform: scale(1.1);
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