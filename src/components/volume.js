var style_el = document.createElement('style'), 
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
}