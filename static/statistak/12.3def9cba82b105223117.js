(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8nJ3":function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",function(){return o});var i=n("7gGu");function o(t){var e,n,o,d,v=10*-u,f=0,l=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),p=new WeakMap;function L(t){v=Object(i.i)(t),h(t)}function m(){clearTimeout(d),d=void 0,n&&(g(!1),n=void 0)}function w(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,E(function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}}(t),t))}function h(t){E(void 0,t)}function E(t,e){if(!t||t!==n){clearTimeout(d),d=void 0;var o=Object(i.j)(e),s=o.x,u=o.y;if(n){if(p.has(n))throw new Error("internal error");n.classList.contains(r)||b(n,s,u),g(!0)}if(t){var v=p.get(t);v&&(clearTimeout(v),p.delete(t));var f=a(t)?0:c;t.classList.remove(r),d=setTimeout(function(){b(t,s,u),d=void 0},f)}n=t}}function b(t,e,n){f=Date.now(),t.classList.add(r);var i=l&&function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}(t);i&&i.addRipple&&(o=i.addRipple(e,n))}function g(t){void 0!==o&&o.then(function(t){return t()});var e=n;if(e){var i=s-Date.now()+f;if(t&&i>0&&!a(e)){var c=setTimeout(function(){e.classList.remove(r),p.delete(e)},s);p.set(e,c)}else e.classList.remove(r)}}var j=document;j.addEventListener("ionScrollStart",function(t){e=t.target,m()}),j.addEventListener("ionScrollEnd",function(){e=void 0}),j.addEventListener("ionGestureCaptured",m),j.addEventListener("touchstart",function(t){v=Object(i.i)(t),w(t)},!0),j.addEventListener("touchcancel",L,!0),j.addEventListener("touchend",L,!0),j.addEventListener("mousedown",function(t){var e=Object(i.i)(t)-u;v<e&&w(t)},!0),j.addEventListener("mouseup",function(t){var e=Object(i.i)(t)-u;v<e&&h(t)},!0)}function a(t){return t.classList.contains("ion-activatable-instant")}var r="activated",c=200,s=200,u=2500}}]);