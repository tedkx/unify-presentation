Reveal.addEventListener('ready', function(event) {
  //console.log('ready', event);
});

Reveal.addEventListener('slidechanged', function(e) {
  //console.log('slidechanged',event.previousSlide,event.currentSlide,event.indexh,event.indexv);
});
Reveal.addEventListener('fragmentshown', function(e) {
  //console.log('fragmentshown', event.fragment, e);
});
Reveal.addEventListener('fragmenthidden', function(e) {
  //console.log('fragmenthidden', event.fragment, e);
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
