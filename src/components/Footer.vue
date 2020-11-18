<template>
  <footer class="footer__main">
    <div class="footer__content">
      <div class="social__nav">
        <svg class="social__icon" width="36px" height="36px" viewBox="0 0 512 512" x="0px" y="0px" version="1.1">
          <path fill="#222c36" d="M398.14,50.5H117.98c-36.408,0-68.48,26.452-68.48,62.86v280.16c0,36.408,32.072,68.98,68.48,68.98h173.466  c-0.325-54,0.077-114.134-0.185-166.387c-11.064-0.112-22.138-0.684-33.202-0.854c0.041-18.467,0.017-37.317,0.024-55.781  c11.057-0.137,22.121-0.163,33.178-0.268c0.338-17.957-0.338-36.025,0.354-53.966c1.103-14.205,6.519-28.563,17.14-38.377  c12.859-12.239,31.142-16.397,48.387-16.912c18.233-0.163,36.468-0.076,54.71-0.068c0.072,19.24,0.072,38.482-0.008,57.722  c-11.789-0.02-23.585,0.023-35.374-0.025c-7.468-0.467-15.145,5.198-16.504,12.609c-0.177,12.875-0.064,25.757-0.057,38.628  c17.285,0.073,34.577-0.02,51.862,0.044c-1.264,18.629-3.581,37.168-6.285,55.637c-15.272,0.137-30.554,1.514-45.818,1.602  c-0.129,52.236,0.04,112.395-0.093,166.395h38.564c36.408,0,63.36-32.572,63.36-68.98V113.36C461.5,76.952,434.548,50.5,398.14,50.5  z"/>
        </svg>
        <svg class="social__icon" width="40px" height="40px" viewBox="0 0 24 24" x="0px" y="0px" version="1.1">
          <path fill="#222c36" d="M8 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm10 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .002 6.002A3 3 0 0 0 12 9z" id="surface1"/>
        </svg>
        <svg class="social__icon" width="30px" height="30px" viewBox="0 0 1000 1000" x="0px" y="0px" version="1.1">
          <path fill="#222c36" d="M308.9,341c121.6,61.6,224.2,58.1,224.2,58.1s-38.9-136.3,81.4-196.8c120.3-60.5,203.3,41.4,203.3,41.4s21-5.8,36.6-11.6c15.7-5.8,38.3-16.1,38.3-16.1l-37.1,66.5l57.2-6.1c0,0-7,10.3-29.9,31.4c-22.9,21.1-32.3,32-32.3,32s8.2,164.1-77.9,290.5c-86.1,126.4-197.2,202.2-358.8,218.1c-161.5,16-266.8-49.8-266.8-49.8s70.7-4.1,115.7-21.3s109.8-62.8,109.8-62.8s-92.1-28.5-125.1-60.5c-33-32-41.3-50.9-41.3-50.9l90.9-1.1c0,0-95.6-50.9-122.7-91.3c-27.1-40.3-30.7-79.4-30.7-79.4l69.9,28.4c0,0-58.1-79.3-66.4-141c-8.3-61.7,10.7-94.8,10.7-94.8S187.3,279.3,308.9,341z M687.8,10H312.2c-106.5,0-174,0.5-237.9,64.2C10.5,138.2,10,206,10,312.2v375.7c0,106.5,0.5,174,64.2,237.9c64,64,131.8,64.3,238,64.3h375.7c106.5,0,174-0.5,237.9-64.2c63.9-64,64.3-131.8,64.3-238V312.2c0-106.5-0.5-174-64.2-237.9C861.8,10.3,794,10,687.8,10z"/>
        </svg>
      </div>
      <div class="footer__nav">
        <ul>
          <li>
            <a href="#" class="nav__item nav__item_uno">Home</a>
          </li>
          <li>
            <a href="#" class="nav__item nav__item_due">About</a>
          </li>
          <li>
            <a href="#" class="nav__item nav__item_tre">Music</a>
          </li>
        </ul>
      </div>
      <div class="copyright">
          Copyright © 2020 · GYMTON.com
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss">
  .footer__main {
    display: flex;
    justify-content: center;
    background-image: linear-gradient(to top, var(--blue-grey-dark) 70%, var(--blue-grey));
    //background-image: linear-gradient(var(--blue-grey), var(--blue-grey-dark) 60%);
    border-top: 1px solid #222c36;
    box-shadow: 1px 1px 8px #5f7c97;
    width: 100%;
    margin: 0;
    left: 0;
    top: 0;
    padding: .3em 0;
    color:var(--blue-grey-light);
  }

  .footer__content {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 1em;
    align-items: center;
    width: 790px;
  }

  .social__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: left;
  }

  .social__icon {
    cursor: pointer;
  }

  .social__icon:hover {
    animation-name: hoverSoial;
    animation-duration: .5s;
    animation-fill-mode: forwards;
  }

  .social__icon:hover > path {
    fill: var(--blue-grey-lighter);
    transition: ease-in-out .5s all;
  }

  @keyframes hoverSoial {
    0%   {transform: scale(.7);}
    50%  {transform: scale(1.1);}
    100% {transform: scale(1);}
  }

  .footer__nav {
    justify-self: left;
  }

  .footer__nav ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: center;
    justify-items: center;
    grid-column-gap: 1em;
    margin: 0 auto;
  }

  .footer__nav ul li {
    text-decoration: none;
  }

  .footer__nav > ul > li > a {
    color:var(--blue-grey-light);
    text-decoration: none;
    padding: 0 .3em .1em .3em;
    border-radius: 2px;
  }

  .footer__nav > ul > li > a:hover {
    color: var(--blue-grey-lighter);
    text-decoration: underline;
    transition: ease-in-out .7s all;
  }

  .copyright {
    justify-self: right;
  }
</style>