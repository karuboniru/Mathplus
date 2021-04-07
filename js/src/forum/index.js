import {extend, override} from 'flarum/common/extend';
import CommentPost from 'flarum/components/CommentPost';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from 'flarum/components/TextEditorButton';

var $ = require( "jquery" );
var mathLock = false;
var nextDraw = 0;

function isArray(obj){
  return !!obj && obj.constructor === Array;
}

function renderMath() {
  if(window.hasOwnProperty('MathJax') && typeof MathJax.typeset === 'function') {
    MathJax.typeset();
    mathLock = false;
  } else {
    mathLock = false;
    nextDraw = 0;
  }
}

setInterval(() => {
  var ts = new Date().getTime()

  if(!mathLock && nextDraw < ts) {
    nextDraw = ts + 20000;
    mathLock = true;
    renderMath();
  }
}, 100);

// We provide our extension code in the form of an "initializer".
// This is a callback that will run after the core has booted.
app.initializers.add('our-extension', function(app) {

  var head = document.getElementsByTagName("head")[0], script;
  script = document.createElement("script");
  script.type = "text/x-mathjax-config";
  script[(window.opera ? "innerHTML" : "text")] =
    "MathJax.Hub.Config({\n" +
    "  tex2jax: { inlineMath: [['$','$'], ['\\\\(','\\\\)']] }\n" +
    "});";
  head.appendChild(script);
  script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  head.appendChild(script);

  window.MathJax = {
    tex: {
      tags: 'ams'
    }
  };

  if (s9e && s9e.TextFormatter) {

    extend(s9e.TextFormatter, 'preview', function (original, preview, element) {
      nextDraw = new Date().getTime() + 100;
    });
  }
});