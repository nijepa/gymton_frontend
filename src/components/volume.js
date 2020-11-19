document.addEventListener("DOMContentLoaded", () => {
  const range = document.querySelector(".volume input[type=range]");

  const barHoverBox = document.querySelector(".volume .bar-hoverbox");
  const fill = document.querySelector(".volume .bar .bar-fill");
  
  range.addEventListener("change", (e) => {
    console.log("value", e.target.value);
  });
  
  const setValue = (value) => {
    fill.style.width = value + "%";
    range.setAttribute("value", value)
    range.dispatchEvent(new Event("change"))
  }
  
  // Дефолт
  setValue(range.value);
  
  const calculateFill = (e) => {
    // Отнимаем ширину двух 15-пиксельных паддингов из css
    let offsetX = e.offsetX
    
    if (e.type === "touchmove") {
      offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft
    }
    
    const width = e.target.offsetWidth - 30;

    setValue(
      Math.max(
        Math.min(
          // Отнимаем левый паддинг
          (offsetX - 15) / width * 100.0,
          100.0
        ),
        0
      )
    );
  }
  
  let barStillDown = false;

  barHoverBox.addEventListener("touchstart", (e) => {
    barStillDown = true;

    calculateFill(e);
  }, true);
  
  barHoverBox.addEventListener("touchmove", (e) => {
    if (barStillDown) {
      calculateFill(e);
    }
  }, true);
  
  barHoverBox.addEventListener("mousedown", (e) => {
    barStillDown = true;
    
    calculateFill(e);
  }, true);
  
  barHoverBox.addEventListener("mousemove", (e) => {
    if (barStillDown) {
      calculateFill(e);
    }
  });
  
  barHoverBox.addEventListener("wheel", (e) => {
    const newValue = +range.value + e.deltaY * 0.5;
    
    setValue(Math.max(
      Math.min(
        newValue,
        100.0
      ),
      0
    ))
  });
  
  document.addEventListener("mouseup", (e) => {
    barStillDown = false;
    console.log(e)
  }, true);
  
  document.addEventListener("touchend", (e) => {
    console.log(e)
    barStillDown = false;
  }, true);
})


/* var style_el = document.createElement('style'), 
    slider_els = document.querySelectorAll('input[type=range]'), 
    n_sliders = slider_els.length, 
    r = (getComputedStyle(slider_els[0]).height.split('px')[0])/4, 
    pp = ['-webkit-slider-runnable-', '-moz-range-'], 
    n_pp = pp.length, 
    styles = [];

document.body.appendChild(style_el);

for(var i = 0; i < n_sliders; i++) {
  styles.push('');
  
  slider_els[i].addEventListener('input', function() {
    var idx = this.dataset.idx, 
        sel = '.js section:nth-of-type(' + idx + ') input[type=range]::', 
        val = r + 'px 100%,' + this.value + '% 100%', 
        str = '';
        
    for(var j = 0; j < n_pp; j++) {
      str += sel + pp[j] + 'track{background-size:' + val + '}';
    }
    
    styles[idx] = str;
        
    style_el.textContent = styles.join('');
  }, false);
} */