!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return d.Date.now()};function m(e,t,n){var i,r,u,f,a,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function O(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,a=setTimeout(h,t),d?O(e):f}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=y();if(T(e))return S(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function S(e){return a=void 0,m&&i?O(e):(i=r=void 0,f)}function w(){var e=y(),n=T(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return j(c);if(s)return a=setTimeout(h,t),O(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=g(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},w.flush=function(){return void 0===a?f:S(y())},w}function b(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=b(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):r.test(e)?NaN:+e}var O=document.querySelector("iframe"),j=new Vimeo.Player(O);j.on("timeupdate",(function(e){var t=e;localStorage.setItem("LOCALSTORAGE_KEY",JSON.stringify(t))}));var T=localStorage.getItem("LOCALSTORAGE_KEY"),h=JSON.parse(T).seconds;j.setCurrentTime(h).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.8926d40b.js.map