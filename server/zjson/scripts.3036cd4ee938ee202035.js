!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fn=t():e.fn=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.typeOf=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return!!t&&(t instanceof Array?n=t:n.unshift(t),n.some(function(t){switch(t){case"arr":return e&&e instanceof Array;case"obj":return e&&"object"==typeof e&&!(e instanceof Array);case"fun":return e&&"function"==typeof e;case"str":return"string"==typeof e;case"num":return"number"==typeof e;case"bol":return"boolean"==typeof e;case"udf":return void 0===e;default:return typeof e===t}}))},e.typeVal=function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return e.typeOf.apply(e,[t,n].concat(r))&&t},e}();t.FnType=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),i=function(){function e(){}return e.array=function(e,t){for(var n=[],r=0,o=0;o<e;o++)void 0===t?(n.push(r),r++):n.push("function"==typeof t?t():t);return n},e.toArray=function(e){return e instanceof Array?e:[e]},e.find=function(t,n){var r=e.indexOf(t,n);return r>-1?t[r]:void 0},e.filter=function(t,n){return e._filter(t,n,!0)},e.reject=function(t,n){return e._filter(t,n,!1)},e._filter=function(e,t,n){var o=[],i=[];return e.forEach(function(e){r.FnType.typeOf(t,"obj")?Object.keys(t).every(function(n){return t[n]===e[n]})?o.push(e):i.push(e):r.FnType.typeOf(t,"fun")&&(t(e)?o.push(e):i.push(e))}),n?o:i},e.contains=function(t,n){return e.indexOf(t,n)>-1},e.drop=function(e,t){void 0===t&&(t=!1);var n=[];return e.forEach(function(e){var i=r.FnType.typeOf(e,["arr","obj"])&&0===o.FnObject.len(e);(e&&!i||!t&&0===e)&&n.push(e)}),n},e.flatten=function(t,n){void 0===n&&(n=!1);var o=[];return t.forEach(function(t){r.FnType.typeOf(t,"arr")?o.push.apply(o,n?e.flatten(t,!0):t):o.push(t)}),o},e.pluck=function(e,t){var n=[];return r.FnType.typeVal(t,"str")&&e.forEach(function(e){return n.push(o.FnObject.get(e,t))}),n},e.uniq=function(e,t,n){void 0===n&&(n=!0),"boolean"==typeof t&&(n=t,t=void 0),t=r.FnType.typeVal(t,"str");for(var i=e.slice(),a=0;a<i.length-1;a++)for(var u=a+1;u<i.length;u++){var c=void 0;if(t){var f=o.FnObject.get(i[a],t),l=o.FnObject.get(i[u],t);c=n?o.FnObject.isDeepEqual(f,l):f===l}else c=n?o.FnObject.isDeepEqual(i[a],i[u]):i[a]===i[u];c&&(i.splice(u,1),u--)}return i},e.indexOf=function(e,t){for(var n=0;n<e.length;n++){var o=function(n){if(r.FnType.typeOf(t,"obj")){if(Object.keys(t).every(function(r){return e[n][r]===t[r]}))return{value:n}}else if(r.FnType.typeOf(t,"fun")&&t(e[n]))return{value:n}}(n);if("object"==typeof o)return o.value}return e.indexOf(t)},e.forEach=function(e,t){var n=o.FnObject.get(e,"/length","num");if(n&&n>=0&&n<Math.pow(2,53)-1)for(var r=0;r<n;r++)t(e[r],r);else{var i=Object.keys(e);for(r=0;r<i.length;r++)t(e[i[r]],i[r])}return e},e.sortBy=function(e,t,n){return void 0===n&&(n=!1),e.slice().sort(function(e,r){var i=[o.FnObject.get(e,t),o.FnObject.get(r,t)],a=i[0],u=i[1];return[a,u].some(function(e){return 0!==e&&!e})||a===u?0:a>u?n?-1:1:n?1:-1})},e}();t.FnArray=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(1),i=function(){function e(){}return e.len=function(t){return r.FnType.typeOf(t,"obj")?Object.keys(t).length:r.FnType.typeOf(t,["str","arr","fun"])||e.get(t,"/length","num")?t.length:-1},e.has=function(e,t){return e&&e.hasOwnProperty(t)||!1},e.get=function(t,n){for(var i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];if(t&&r.FnType.typeOf(n,"str")){var u=o.FnArray.drop(n.split("/")),c=u.shift();if(!c)return i.length?r.FnType.typeVal.apply(r.FnType,[t].concat(i)):t;if(u.length){if(!r.FnType.typeOf(t[c],"obj","arr"))return;return e.get.apply(e,[t[c],u.join("/")].concat(i))}return i.length?r.FnType.typeVal.apply(r.FnType,[t[c]].concat(i)):t[c]}},e.pick=function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return e.propsTraversal({},t,n,r,!1)},e.extend=function(t,n,o){for(var i=[],a=3;a<arguments.length;a++)i[a-3]=arguments[a];return r.FnType.typeVal(n,"object")&&e.propsTraversal(t,n,o,i,!0),t},e.propsTraversal=function(t,n,o,i,a){return r.FnType.typeOf(o,"str")?(i.unshift(o),e.doTraversal(t,n,i)):r.FnType.typeOf(o,"arr")?e.doTraversal(t,n,o):r.FnType.typeOf(o,"fun")?e.forIn(n,function(e,n){o(e,n)&&(t[e]=n)}):a&&e.doTraversal(t,n,Object.keys(n)),t},e.doTraversal=function(t,n,r){r.forEach(function(r){e.has(n,r)&&(t[r]=n[r])})},e.forIn=function(e,t){return o.FnArray.forEach(e,function(e,n){return t(n,e)})},e.deepCopy=function(t){if("object"!=typeof t)return t;var n;if(t instanceof Array){n=[];for(var r=0;r<t.length;r++)n.push(e.deepCopy(t[r]))}else for(var o in n={},t)t.hasOwnProperty(o)&&(n[o]=e.deepCopy(t[o]));return n},e.isEmpty=function(t){return 0===e.len(t)},e.isDeepEqual=function(t,n,o){if(void 0===o&&(o=!1),typeof t!=typeof n)return!1;if(r.FnType.typeOf(t,"arr")&&r.FnType.typeOf(n,"arr")){if(t.length!==n.length)return!1;for(var i=0;i<t.length;i++)if(!e.isDeepEqual(t[i],n[i],o))return!1;return!0}if(r.FnType.typeOf(t,"obj")&&r.FnType.typeOf(n,"obj")){if(e.len(t)!==e.len(n))return!1;var a=Object.keys(t);if(o&&!e.isDeepEqual(a,Object.keys(n)))return!1;for(i=0;i<a.length;i++){if(!n.hasOwnProperty(a[i]))return!1;if(!e.isDeepEqual(t[a[i]],n[a[i]],o))return!1}return!0}return t===n},e}();t.FnObject=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={},o={},i=function(){function e(){}return e.interval=function(e,t,n){if(!1===t)clearInterval(r[e]);else{if("number"==typeof t&&"function"==typeof n)return clearInterval(r[e]),r[e]=setInterval(function(){return n()},t),r[e];if("number"==typeof e&&"function"==typeof t)return n=t,t=e,setInterval(function(){return n()},t)}},e.timeout=function(e,t,n){if(!1===t)clearTimeout(o[e]);else{if("number"==typeof t&&"function"==typeof n)return clearTimeout(o[e]),o[e]=setTimeout(function(){return n()},t),o[e];if("number"==typeof e&&"function"==typeof t)return n=t,t=e,setTimeout(function(){return n()},t);if("function"==typeof e)return n=e,setTimeout(function(){return n()})}},e.defer=function(t){e.timeout(t)},e.time=function(e){return e instanceof Date?e.getTime():new Date(String(e)).getTime()||(new Date).getTime()},e.fmtDate=function(e,t){var n=new Date(String(t)),r=n.getTime()?n:new Date,o={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(var i in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),o)o.hasOwnProperty(i)&&new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?o[i]:("00"+o[i]).substr((o[i]+"").length)));return e},e}();t.FnTime=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(5),i=n(2),a={src:["&","<",">"," ","'",'"'],map:["&amp;","&lt;","&gt;","&nbsp;","&#39;","&quot;"]},u=function(){function e(){}return e.match=function(e,t,n){var r;if(void 0===n&&(n=!0),i.FnObject.has(t,e)?r=e:i.FnObject.has(t,"@default")&&(r="@default"),r)return n&&"function"==typeof t[r]?i.FnObject.len(t[r])>0?t[r](e):t[r]():t[r]},e.pretty=function(e){return"object"==typeof e?JSON.stringify(e,null,2):String(e)},e.encodeHtml=function(e){return a.src.forEach(function(t,n){e=e.replace(new RegExp(t,"g"),a.map[n])}),e},e.decodeHtml=function(e){return a.map.forEach(function(t,n){e=e.replace(new RegExp(t,"g"),a.src[n])}),e},e.capitalize=function(e){return e&&"string"==typeof e?e[0].toUpperCase()+e.substr(1):e},e.fmtCurrency=function(e,t){void 0===t&&(t=2);var n,r,o,i,a=String(e.toFixed(t)).split("."),u=a[0],c=a.length>1?a[1]:"";for(r=Math.floor(u.length/3),n=u.substr(0,o=u.length%3),i=0;i<r;i++)n+=0!==i||n?","+u.substr(o,3):u.substr(o,3),o+=3;return c?n+"."+c:n},e.cutString=function(e,t){for(var n,r="",i=0,a=0;a<e.length&&!(i>=t);a++)r+=n=e.substr(a,1),i+=o.FnRegExp.matchPattern(n,"cnChar")?2:1;return r+"..."},e.parseQueryStr=function(e){if(-1===e.indexOf("?"))return{};var t=e.substring(e.lastIndexOf("?")+1);if(""===t)return{};for(var n=t.split("&"),r={},o=0;o<n.length;o++){var i=n[o].split("=");r[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")}return r},e.stringifyQueryStr=function(e){if(!r.FnType.typeOf(e,["obj","arr"]))return"";e=JSON.parse(JSON.stringify(e));var t=[];return i.FnObject.forIn(e,function(e,n){if(r.FnType.typeOf(n,"arr"))n.forEach(function(n,r){var o=encodeURIComponent(e+"["+r+"]");t.push(o+"="+encodeURIComponent(n))});else{var o=encodeURIComponent(n);t.push(encodeURIComponent(e)+"="+o)}}),"?"+t.join("&")},e.escape=e.encodeHtml,e.unescape=e.decodeHtml,e}();t.FnString=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.getPattern=function(t,n){if(void 0===n&&(n=!1),t){var r={cnChar:e.cnCharPattern,dblBitChar:e.dblBitCharPattern,mobPhone:e.mobPhonePattern,telPhone:e.telPhonePattern,email:e.emailPattern,idCard:e.idCardPattern,base64Code:e.base64CodePattern,mac:e.macPattern,domain:e.domainPattern,port:e.portPattern,ip:e.ipPattern,ipv4:e.ipv4Pattern,ipv6:e.ipv6Pattern,ipv4IpRange:e.ipv4IpRangePattern,ipv6IpRange:e.ipv6IpRangePattern,ipv4Cidr:e.ipv4CidrPattern,ipv6Cidr:e.ipv6CidrPattern,ipv4Url:e.ipv4UrlPattern,ipv6Url:e.ipv6UrlPattern,domainUrl:e.domainUrlPattern,url:e.urlPattern,ipv4WithPortUrl:e.ipv4WithPortUrlPattern,ipv6WithPortUrl:e.ipv6WithPortUrlPattern,domainWithPortUrl:e.domainWithPortUrlPattern,withPortUrl:e.withPortUrlPattern};return r.patternList=Object.keys(r),r.hasOwnProperty(t)&&r[t]?"patternList"===t?r[t]:n?new RegExp(r[t].source):new RegExp("^("+r[t].source+")$"):void 0}},e.matchPattern=function(t,n,r){if(!t||!n)return null;if(n instanceof Array){var o=null;return n.forEach(function(n){var i=e.getPattern(n,r);!o&&i&&(o=t.match(i))}),o}if("string"==typeof n){var i=e.getPattern(n,r);return i&&t.match(i)||null}},e.cnCharPattern=/[\u4e00-\u9fa5]+/,e.dblBitCharPattern=/[^x00-xff]/,e.emailPattern=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,e.mobPhonePattern=/(\+?0?86\-?)?1[3456789]\d{9}/,e.telPhonePattern=/((d{3,4})|d{3,4}-)?d{7,8}/,e.idCardPattern=/(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)/,e.base64CodePattern=/([0-9a-zA-Z+\/]{4})*(([0-9a-zA-Z+\/]{2}==)|([0-9a-zA-Z+\/]{3}=))?/,e.macPattern=/[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}/,e.domainPattern=/([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}/,e.portPattern=/([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])/,e.ipv4Pattern=/((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)/,e.ipv6Pattern=new RegExp("([\\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|::([\\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|([\\da-fA-F]{1,4}:):([\\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|([\\da-fA-F]{1,4}:){2}:([\\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|([\\da-fA-F]{1,4}:){3}:([\\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|([\\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|([\\da-fA-F]{1,4}:){7}[\\da-fA-F]{1,4}|:((:[\\da-fA-F]{1,4}){1,6}|:)|[\\da-fA-F]{1,4}:((:[\\da-fA-F]{1,4}){1,5}|:)|([\\da-fA-F]{1,4}:){2}((:[\\da-fA-F]{1,4}){1,4}|:)|([\\da-fA-F]{1,4}:){3}((:[\\da-fA-F]{1,4}){1,3}|:)|([\\da-fA-F]{1,4}:){4}((:[\\da-fA-F]{1,4}){1,2}|:)|([\\da-fA-F]{1,4}:){5}:([\\da-fA-F]{1,4})?|([\\da-fA-F]{1,4}:){6}:"),e.ipPattern=new RegExp("("+e.ipv4Pattern.source+"|"+e.ipv6Pattern.source+")"),e.ipv4CidrPattern=/((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)(\/([1-9]|1[0-9]|2[0-9]|3[0-2]))/,e.ipv6CidrPattern=new RegExp("s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8]))"),e.ipv4IpRangePattern=new RegExp("(("+e.ipv4Pattern.source+")-("+e.ipv4Pattern.source+");)*("+e.ipv4Pattern.source+")-("+e.ipv4Pattern.source+")"),e.ipv6IpRangePattern=new RegExp("(("+e.ipv6Pattern.source+")-("+e.ipv6Pattern.source+");)*("+e.ipv6Pattern.source+")-("+e.ipv6Pattern.source+")"),e.ipv4UrlPattern=new RegExp("http(s)?://"+e.ipv4Pattern.source+"(:"+e.portPattern.source+")?"),e.ipv6UrlPattern=new RegExp("http(s)?://\\[("+e.ipv6Pattern.source+")\\](:"+e.portPattern.source+")?"),e.domainUrlPattern=new RegExp("http(s)?://"+e.domainPattern.source+"(:"+e.portPattern.source+")?"),e.urlPattern=new RegExp("http(s)?://("+e.ipv4Pattern.source+"|\\[("+e.ipv6Pattern.source+")\\]|"+e.domainPattern.source+")(:"+e.portPattern.source+")?"),e.ipv4WithPortUrlPattern=new RegExp("http(s)?://"+e.ipv4Pattern.source+":"+e.portPattern.source),e.ipv6WithPortUrlPattern=new RegExp("http(s)?://\\[("+e.ipv6Pattern.source+")\\]:"+e.portPattern.source),e.domainWithPortUrlPattern=new RegExp("http(s)?://"+e.domainPattern.source+":"+e.portPattern.source),e.withPortUrlPattern=new RegExp("http(s)?://("+e.ipv4Pattern.source+"|\\[("+e.ipv6Pattern.source+")\\]|"+e.domainPattern.source+"):"+e.portPattern.source),e}();t.FnRegExp=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="v2.2.9",t.MAIN_METHODS=["typeOf","typeVal","array","toArray","find","filter","reject","contains","drop","flatten","pluck","uniq","indexOf","forEach","sortBy","len","has","get","pick","forIn","extend","deepCopy","isEmpty","isDeepEqual","random","rdid","rdcolor","interval","timeout","defer","time","fmtDate","match","pretty","escape","unescape","encodeHtml","decodeHtml","capitalize","fmtCurrency","cutString","parseQueryStr","stringifyQueryStr","getPattern","matchPattern","throttle","debounce","log"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(1),i=n(2),a=n(4),u=n(3),c=n(5),f=n(8),l=n(9),d=n(10),p=n(11),s=n(12),v=n(13),y=n(6),F=[r.FnType,o.FnArray,i.FnObject,a.FnString,u.FnTime,c.FnRegExp,f.FnMath,l.FnFunction,d.FnCookie,p.FnDom,s.FnTrick,v.FnLog],h=y.MAIN_METHODS.concat(["fullScreen","exitFullScreen","isFullScreen","fullScreenChange","pollingEl","noAutoComplete","setCookie","getCookie","removeCookie","copyText"]),m={};F.forEach(function(e){i.FnObject.forIn(e,function(e,t){h.indexOf(e)>-1&&(m[e]=function(){var e=arguments;return e=Object.keys(e).map(function(t){return e[t]}),t.apply(void 0,void 0!==m.data?[m.data].concat(e):e)})})});var g=function(e){return m.data=e,m};F.forEach(function(e){i.FnObject.forIn(e,function(e,t){h.indexOf(e)>-1&&(g[e]=t)})}),g.version=y.VERSION,e.exports=g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(){function e(){}return e.random=function(e,t){if(void 0===e&&void 0===t)return Math.random();if(void 0===t||e===t)return Math.floor(Math.random()*e);if(e>t){var n=e;e=t,t=n}return Math.floor(Math.random()*(t-e)+e)},e.rdid=function(t){void 0===t&&(t=12);var n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",o="";return r.FnArray.array(t).forEach(function(t){return o+=n[e.random(n.length)]}),o},e.rdcolor=function(){return"#"+("00000"+(e.random(16777216)<<0).toString(16)).slice(-6)},e}();t.FnMath=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=function(){function e(){}return e.throttle=function(e,t,n){var o,i,a,u,c=0;n||(n={});var f=function(){var f=r.FnTime.time();c||!1!==n.leading||(c=f);var l=t-(f-c);return i=this,a=arguments,l<=0||l>t?(o&&(clearTimeout(o),o=null),c=f,u=e.apply(i,a),o||(i=a=null)):o||!1===n.trailing||(o=setTimeout(function(){c=!1===n.leading?0:r.FnTime.time(),o=null,u=e.apply(i,a),o||(i=a=null)},l)),u};return f.cancel=function(){clearTimeout(o),c=0,o=i=a=null},f},e.debounce=function(e,t,n){void 0===n&&(n=!1);var r,o,i=function(t,n){r=null,n&&(o=e.apply(t,n))},a=function(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];if(r&&clearTimeout(r),n){var c=!r;r=setTimeout(i,t),c&&(o=e.apply(this,a))}else r=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout(function(){return e.apply(null,n)},t)}(i,t,this,a);return o};return a.cancel=function(){clearTimeout(r),r=null},a},e}();t.FnFunction=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.setCookie=function(e,t,n){void 0===n&&(n=0);var r=new Date;r.setDate(r.getDate()+n),document.cookie=e+"="+t+";expires="+r},e.getCookie=function(e){for(var t=document.cookie.replace(/\s/g,"").split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0]==e)return decodeURIComponent(r[1])}return""},e.removeCookie=function(t){e.setCookie(t,"1",-1)},e}();t.FnCookie=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),i=n(1),a=n(3),u=function(){function e(){}return e.fullScreen=function(e){var t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;if(t)return t.call(e);if(window.ActiveXObject){var n=new window.ActiveXObject("WScript.Shell");n&&n.SendKeys("{F11}")}},e.exitFullScreen=function(){var e=document.cancelFullScreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.exitFullScreen;if(e)return e.call(document);if(window.ActiveXObject){var t=new window.ActiveXObject("WScript.Shell");null!=t&&t.SendKeys("{F11}")}},e.isFullScreen=function(){return document.fullscreenEnabled||window.fullScreen||document.mozFullscreenEnabled||document.webkitIsFullScreen||document.msIsFullScreen||!1},e.fullScreenChange=function(e){var t="fullscreenchange",n=[t,"webkit"+t,"moz"+t,"MS"+t],r=function(e,t){var n=window.fullScreenFunc;t?document.addEventListener(e,n):document.removeEventListener(e,n)};window.addEventListener&&("function"==typeof e?(this.fullScreenChange(!1),window.fullScreenFunc=e,n.forEach(function(e){return r(e,!0)})):window.fullScreenFunc&&n.forEach(function(e){return r(e,!1)}))},e.pollingEl=function(e,t,n,u){if(r.FnType.typeOf(e,["str","arr"])&&"number"==typeof t){var c=o.FnObject.get(n,"duration","num")||250,f=!(!n||!n.isSelectAll);u=r.FnType.typeVal(u,"func")||r.FnType.typeVal(n,"func");var l=0;a.FnTime.interval(e,c,function(n){parseInt(String(t/c),10)>l?l++:a.FnTime.interval(e,!1);var r=[],o=i.FnArray.toArray(e);o.forEach(function(e){var t=f?document.querySelectorAll(e):document.querySelector(e);t.length>0&&r.push(t)}),r.length===o.length&&(a.FnTime.interval(e,!1),u&&u(r))})}else a.FnTime.interval(e,!1)},e.noAutoComplete=function(e,t){switch(t){case"username":e.setAttribute("autocomplete","off");var n=document.createElement("input");n.setAttribute("type","password"),n.style.display="none",e.parentNode.insertBefore(n,e);break;case"password":e.setAttribute("autocomplete","new-password")}},e}();t.FnDom=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.copyText=function(e){void 0===e&&(e="");var t=document.createElement("textarea");t.style.position="fixed",t.style.left="200%",document.body.appendChild(t),t.value=e,t.select(),document.execCommand("Copy"),document.body.removeChild(t)},e}();t.FnTrick=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(2),i=n(4),a=n(3),u=n(0),c=n(6),f=function(){function e(){}return e.log=function(e,t,n){void 0===n&&(n=!0),t&&"boolean"==typeof t.isFmt&&(n=t.isFmt),"boolean"==typeof t&&(n=t,t=void 0),e=i.FnString.pretty(e);var f="["+a.FnTime.fmtDate("hh:mm:ss")+"] ",l=(u.FnType.typeVal(t,"str")||o.FnObject.get(t,"/title")||"funclib("+c.VERSION+")").replace(/\n/gm,""),d=(f+l+"[] ").length;n||(l="( "+l+" )"),l=f+l;var p=o.FnObject.get(t,"/width");if((!p||p<30||p>100)&&(p=66),d>p?l=i.FnString.cutString(l,p-3):n&&(l=r.FnArray.array((p-d)/2," ").join("")+l),n){var s="",v="";r.FnArray.array(p).forEach(function(e){s+="-",v+="="}),console.log("\n"+v+"\n"+l+"\n"+s+"\n"+e+"\n"+v+"\n")}else console.log(l+":\n"+e)},e}();t.FnLog=f}])});