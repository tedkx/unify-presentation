var stickmanColors = ['blue', 'red', 'green'];
var stickmanClickListener = e => {
  var elem = document.querySelector('#stickman');
  for (var i = 0; i < stickmanColors.length; i++) {
    var color = stickmanColors[i];
    if (elem.classList.contains(color)) {
      elem.classList.remove(color);
      if (stickmanColors[i + 1]) elem.classList.add(stickmanColors[i + 1]);
      return;
    }
  }
  elem.classList.add(stickmanColors[0]);
};

Reveal.addEventListener('ready', function(event) {
  //console.log('ready', event);
});

Reveal.addEventListener('slidechanged', function(e) {
  //console.log('slidechanged',event.previousSlide,event.currentSlide,event.indexh,event.indexv);
});
Reveal.addEventListener('fragmentshown', function(e) {
  //console.log('fragmentshown', event.fragment, e);
  if (event.fragment.id === 'recap-css') {
    var elem = document.querySelector('#stickman');
    elem.addEventListener('click', stickmanClickListener);
    elem.classList.add('transformed');
  }
});
Reveal.addEventListener('fragmenthidden', function(e) {
  //console.log('fragmenthidden', event.fragment, e);
  if (event.fragment.id === 'recap-css') {
    var elem = document.querySelector('#stickman');
    elem.removeEventListener('click', stickmanClickListener);
    elem.classList.remove('transformed');
    elem.classList.remove('red');
    elem.classList.remove('green');
    elem.classList.remove('blue');
  }
});
Reveal.initialize({
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    {
      src: 'plugin/highlight/highlight.js',
      async: true,
      callback: () => hljs.initHighlightingOnLoad(),
    },
  ],
});
