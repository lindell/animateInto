!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function o(t,e){var n=t.getBoundingClientRect(),o=e.getBoundingClientRect(),i={x:o.width/n.width,y:o.height/n.height};return i.x<i.y?i.y=i.x:i.x=i.y,{from:{x:n.left,y:n.top},to:{scale:i,x:o.left-(n.width-o.width)/2,y:o.top-(n.height-o.height)/2}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";function o(t){var e=Object.assign({},i,t);return e.time=parseInt(e.time,10),e.endOpacity=parseFloat(e.endOpacity),e}Object.defineProperty(e,"__esModule",{value:!0});var i={time:600,callback:function(){},timingFunction:"cubic-bezier(0.505, 0.005, 0.575, 0.450)",endOpacity:.2};e.default=o},function(t,e,n){"use strict";function o(t){var e=document.querySelector("head"),n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=t,e.appendChild(n),n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){n=(0,a.default)(n);var o=document.querySelector("body"),i=t.cloneNode(!0),r="cloneInto-"+Math.random().toString(36).substr(2,20),u=(0,c.default)(t,e,n);i.style.position="fixed",i.style.left="0",i.style.top="0",i.style.margin="0",i.style.transform="translate("+u.from.x+"px, "+u.from.y+"px)",i.style.animationDuration=n.time+"ms",i.style.animationName=""+r,i.style.animationTimingFunction=n.timingFunction;var l="\n    @keyframes "+r+" {\n      0%   {\n        opacity: 1;\n        translate("+u.from.x+"px, "+u.from.y+"px) scale(1, 1);\n      }\n      100% {\n        opacity: "+n.endOpacity+";\n        transform: translate("+u.to.x+"px, "+u.to.y+"px) scale("+u.to.scale.x+", "+u.to.scale.y+");\n      }\n    }",d=(0,s.default)(l);o.appendChild(i),i.addEventListener("animationend",function(){i.remove(),n.callback(i),d.remove()})}var r=n(1),a=o(r),u=n(0),c=o(u),l=n(2),s=o(l);t.exports&&(t.exports=i),window&&(window.animateInto=i)}]);