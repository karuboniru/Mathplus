module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["components/CommentPost"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionPage"]},function(e,t){e.exports=flarum.core.compat["components/TextEditor"]},function(e,t){e.exports=flarum.core.compat["components/TextEditorButton"]},function(e,t){e.exports=jQuery},function(e,t,n){"use strict";n.r(t);var o,r,a=n(0),i=n(1),c=n.n(i),u=n(2),p=n.n(u),s=(n(3),n(4),n(5)),f=!1,m=0;setInterval((function(){var e=(new Date).getTime();if(!f&&m<e){m=e+2e4,f=!0;try{window.hasOwnProperty("MathJax")&&"function"==typeof MathJax.typeset?(MathJax.typesetPromise().then((function(){f=!1})).catch((function(e){return console.log(e.message)})),f=!1):(f=!1,m=0)}catch(e){console.error(e)}}}),100),app.initializers.add("our-extension",(function(e){Object(a.extend)(c.a.prototype,"oncreate",(function(e,t,n){m=(new Date).getTime()+100})),Object(a.extend)(c.a.prototype,"onbeforeupdate",(function(e,t,n){m=(new Date).getTime()+5e3})),Object(a.extend)(c.a.prototype,"onupdate",(function(e,t,n){m=(new Date).getTime()+5e3})),Object(a.extend)(c.a.prototype,"oninit",(function(e,t,n){m=(new Date).getTime()+100})),Object(a.extend)(c.a.prototype,"onbeforeremove",(function(e,t,n){m=(new Date).getTime()+5e3})),Object(a.extend)(p.a.prototype,"oninit",(function(e,t,n){window.hasOwnProperty("MathJax")&&(o=document.getElementsByTagName("head")[0],window.MathJax=!1,o.removeChild(r)),o=document.getElementsByTagName("head")[0],(r=document.createElement("script")).type="text/x-mathjax-config",r[window.opera?"innerHTML":"text"]="MathJax.Hub.Config({\n  tex2jax: { inlineMath: [['$','$'], ['\\\\(','\\\\)']] }\n});",o.appendChild(r),(r=document.createElement("script")).type="text/javascript",r.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js",o.appendChild(r),window.MathJax={options:{skipHtmlTags:["script","noscript","style","textarea","pre","annotation","annotation-xml"]},loader:{load:["ui/lazy"]},tex:{tags:"ams",displayMath:[["$$","$$"],["\\[","\\]"],["`$$","$$`"]],inlineMath:[["$","$"],["\\(","\\)"],["`$","$`"]]}}})),s9e&&s9e.TextFormatter&&Object(a.extend)(s9e.TextFormatter,"preview",(function(e,t,n){m=(new Date).getTime()+100;var o=s(n);o.parent().hasClass("Post-body")&&o.siblings().remove()}))}))}]);
//# sourceMappingURL=forum.js.map