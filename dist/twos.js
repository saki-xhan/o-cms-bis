!function i(a,u,l){function c(r,e){if(!u[r]){if(!a[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(f)return f(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var o=u[r]={exports:{}};a[r][0].call(o.exports,function(e){return c(a[r][1][e]||e)},o,o.exports,i,a,u,l)}return u[r].exports}for(var f="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hex2dec=t.dec2hex=t.dec2bin=t.bin2dec=void 0;t.bin2dec=function(e){var r=0;if(-1!==(e=e.replace(/\s/g,"")).indexOf(".")){var t=e.split("."),n=t[1];e=t[0];for(var o=0;o<n.length;++o)"1"===n[o]&&(r+=1/Math.pow(2,o+1))}for(var i=(e=e.split("").reverse().join("")).length-1;0<=i;--i)"1"===e[i]&&(r+=Math.pow(2,i));return r};t.dec2bin=function e(r,t){var n=[];if(r*=1,isNaN(r)||0===r)return"0";if(Math.floor(r)!==r){for(var o=".",i=r%1,a=0;0!==i&&(!t||a<t);++a)i*=2,o+=Math.floor(i),i%=1;return e(Math.floor(r))+o}for(var u=Math.floor(Math.log(r)/Math.log(2));0<=u;)0<=r-Math.pow(2,u)?(r-=Math.pow(2,u),n[u]="1"):n[u]="0",--u;return n.reverse().join("")};t.dec2hex=function(e){var r=[];if(0===(e=Math.floor(e)))return"0";for(var t=Math.floor(Math.log(e)/Math.log(16));0<=t;)r[t]=Math.floor(e/Math.pow(16,t)),r[t]="0123456789ABCDEF".charAt(r[t]),e%=Math.pow(16,t),--t;return r.reverse().join("")};t.hex2dec=function(e){for(var r=0,t=(e=(e=e.toUpperCase()).split("").reverse().join("")).length-1;0<=t;--t){var n="0123456789ABCDEF".indexOf(e[t]);r+=Math.pow(16,t)*n}return r}},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format_bin=t.format_dec=void 0;t.format_dec=function(e){var r="";if(-1!==(e=(e+="").replace(/\s/g,"")).indexOf(".")){var t=e.split(".");r+="."+t[1],e=t[0]}var n=3-(e=e.replace(/^0+([1-9])/,"$1")).length%3;return 3===n&&(n=0),(e=(e=" ".repeat(n)+e).replace(/(.{3})/g,"$1 ").trim())+r};t.format_bin=function(e,r){var t="";if(-1!==(e=(e+="").replace(/\s/g,"")).indexOf(".")){var n=e.split(".");console.log(n),t="."+n[1],e=n[0]}e=e.replace(/^0+([^0])/,"$1");var o=0;return r?o=r-e.length:4==(o=4-e.length%4)&&(o=0),(e=(e="0".repeat(o)+e).replace(/(.{4})/g,"$1 ").trim())+t}},{}],3:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.twoscomp=void 0;t.twoscomp=function(e){for(var r=e.split("").reverse(),t=r.length,n=[],o=0;o<t&&"1"!==r[o];)n[o]=r[o],++o;if(t<=o)return n.reverse().join("");for(n[o]="1",++o;o<t;)"1"===r[o]?n[o]="0":"0"===r[o]?n[o]="1":n[o]=r[o],++o;return n.reverse().join("")}},{}],4:[function(e,r,t){"use strict";var n=e("./lib/format"),o=e("./lib/conv"),i=e("./lib/twoscomp"),a=document.getElementById("orig_binary"),u=document.getElementById("orig_decimal"),l=document.getElementById("comp_binary"),c=document.getElementById("comp_decimal");a.addEventListener("input",function(){var e=(0,n.format_bin)(this.value),r=(0,o.bin2dec)(e),t=(0,i.twoscomp)(e);a.value=e,l.value=t,u.value=r,c.value=-1*r}),l.addEventListener("input",function(){var e=(0,n.format_bin)(this.value),r=(0,i.twoscomp)(e),t=(0,o.bin2dec)(r);a.value=r,l.value=e,u.value=t,c.value=-1*t}),u.addEventListener("input",function(){var e=1*this.value;if(!isNaN(e)){var r=(0,n.format_bin)((0,o.dec2bin)(e)),t=(0,i.twoscomp)(r);a.value=r,l.value=t,c.value=-1*e}}),c.addEventListener("input",function(){var e=-1*this.value;if(!isNaN(e)){var r=(0,n.format_bin)((0,o.dec2bin)(e)),t=(0,i.twoscomp)(r);a.value=r,l.value=t,u.value=e}})},{"./lib/conv":1,"./lib/format":2,"./lib/twoscomp":3}]},{},[4]);
//# sourceMappingURL=twos.js.map