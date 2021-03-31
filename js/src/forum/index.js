import {extend, override} from 'flarum/common/extend';
import CommentPost from 'flarum/components/CommentPost';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from 'flarum/components/TextEditorButton';

var $ = require( "jquery" );

function isArray(obj){
  return !!obj && obj.constructor === Array;
}

function renderMath(element) {
  if(window.hasOwnProperty('MathJax')) {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, element.dom]);
  } else {
    setTimeout(() => {
      renderMath(element)
    }, 100);
  }
}

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
  script.src  = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML";
  head.appendChild(script);

  extend(CommentPost.prototype, 'oncreate', function (original, element, b) {
    renderMath(element);
  });

  extend(CommentPost.prototype, 'onbeforeupdate', function (original, element, b) {
    renderMath(element);
  });

  extend(CommentPost.prototype, 'onupdate', function (original, element, b) {
    renderMath(element);
  });

  extend(CommentPost.prototype, 'oninit', function (original, element, b) {
    renderMath(element);
  });

  extend(CommentPost.prototype, 'onbeforeremove', function (original, element, b) {
    renderMath(element);
  });

  if (s9e && s9e.TextFormatter) {

    extend(s9e.TextFormatter, 'preview', function (original, preview, element) {
      let finalEl = $(element).html();
      let dst = finalEl.match(/\$\$(.*?)\$\$/g);
      let src = preview.match(/\$\$(.*?)\$\$/g);

      if(isArray(dst) && isArray(src)) {
        for(let i = 0; i < dst.length; i++) {
          $(element).html($(element).html().replace(dst[i], src[i]));
        }
      }

      renderMath(element);
    });
  }
});