/*! For license information please see second-app.js.LICENSE.txt */
!function(){"use strict";var t={843:function(t){var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(t,c){for(var u,i,f=o(t),a=1;a<arguments.length;a++){for(var p in u=Object(arguments[a]))n.call(u,p)&&(f[p]=u[p]);if(e){i=e(u);for(var l=0;l<i.length;l++)r.call(u,i[l])&&(f[i[l]]=u[i[l]])}}return f}},918:function(t,e,n){n(843);var r=n(363),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),c("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,n){var r,c={},a=null,p=null;for(r in void 0!==n&&(a=""+n),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(p=e.ref),e)i.call(e,r)&&!f.hasOwnProperty(r)&&(c[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===c[r]&&(c[r]=e[r]);return{$$typeof:o,type:t,key:a,ref:p,props:c,_owner:u.current}}e.jsx=a},417:function(t,e,n){t.exports=n(918)},363:function(t){t.exports=React}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,n),c.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function i(t,e){if(e&&("object"===u(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t,e,n){return f=c()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},f.apply(null,arguments)}function a(t){var e="function"===typeof Map?new Map:void 0;return a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,c)}function c(){return f(t,arguments,o(this).constructor)}return c.prototype=Object.create(t.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),r(c,t)},a(t)}n(363);var p=ReactDOM,l=n.n(p),s=n(417);function y(){return(0,s.jsx)("div",{className:"SecondApp",children:(0,s.jsx)("h2",{className:"SecondAppTitle",children:"second-app"})})}var b=function(n){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(b,n);var u,f,a,p=function(t){var e=c();return function(){var n,r=o(t);if(e){var c=o(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return i(this,n)}}(b);function b(){return t(this,b),p.apply(this,arguments)}return u=b,(f=[{key:"connectedCallback",value:function(){l().render((0,s.jsx)(y,{}),this)}},{key:"disconnectedCallback",value:function(){l().unmountComponentAtNode(this)}}])&&e(u.prototype,f),a&&e(u,a),Object.defineProperty(u,"prototype",{writable:!1}),b}(a(HTMLElement));customElements.define("second-app",b)}()}();