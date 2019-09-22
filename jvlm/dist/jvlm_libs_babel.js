define([],function(){"use strict";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */!function(a,b){"use strict";"object"==(typeof module==="undefined"?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a);}:b(a);}("undefined"!=typeof window?window:void 0,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c);}var q="3.2.1",r=function r(a,b){return new r.fn.init(a,b);},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function v(a,b){return b.toUpperCase();};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function toArray(){return f.call(this);},get:function get(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a];},pushStack:function pushStack(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b;},each:function each(a){return r.each(this,a);},map:function map(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b);}));},slice:function slice(){return this.pushStack(f.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[]);},end:function end(){return this.prevObject||this.constructor();},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==_typeof(g)||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++){if(null!=(a=arguments[h]))for(b in a){c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));}}return g;},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function error(a){throw new Error(a);},noop:function noop(){},isFunction:function isFunction(a){return"function"===r.type(a);},isWindow:function isWindow(a){return null!=a&&a===a.window;},isNumeric:function isNumeric(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a));},isPlainObject:function isPlainObject(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n));},isEmptyObject:function isEmptyObject(a){var b;for(b in a){return!1;}return!0;},type:function type(a){return null==a?a+"":"object"==_typeof(a)||"function"==typeof a?j[k.call(a)]||"object":_typeof(a);},globalEval:function globalEval(a){p(a);},camelCase:function camelCase(a){return a.replace(t,"ms-").replace(u,v);},each:function each(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++){if(b.call(a[d],d,a[d])===!1)break;}}else for(d in a){if(b.call(a[d],d,a[d])===!1)break;}return a;},trim:function trim(a){return null==a?"":(a+"").replace(s,"");},makeArray:function makeArray(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c;},inArray:function inArray(a,b,c){return null==b?-1:i.call(b,a,c);},merge:function merge(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++){a[e++]=b[d];}return a.length=e,a;},grep:function grep(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++){d=!b(a[f],f),d!==h&&e.push(a[f]);}return e;},map:function map(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++){e=b(a[f],f,c),null!=e&&h.push(e);}else for(f in a){e=b(a[f],f,c),null!=e&&h.push(e);}return g.apply([],h);},guid:1,proxy:function proxy(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function e(){return a.apply(b||this,d.concat(f.call(arguments)));},e.guid=a.guid=a.guid||r.guid++,e;},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase();});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a);}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date(),v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function B(a,b){return a===b&&(l=!0),0;},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function I(a,b){for(var c=0,d=a.length;c<d;c++){if(a[c]===b)return c;}return-1;},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function aa(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320);},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function ca(a,b){return b?"\0"===a?"\uFFFD":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a;},da=function da(){m();},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a);},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType;}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b));}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]){;}a.length=c-1;}};}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d;}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d;}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d;}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--){o[h]="#"+k+" "+sa(o[h]);}r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b;}if(r)try{return G.apply(d,s.querySelectorAll(r)),d;}catch(x){}finally{k===u&&b.removeAttribute("id");}}}return i(a.replace(P,"$1"),b,d,e);}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e;}return b;}function ia(a){return a[u]=!0,a;}function ja(a){var b=n.createElement("fieldset");try{return!!a(b);}catch(c){return!1;}finally{b.parentNode&&b.parentNode.removeChild(b),b=null;}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--){d.attrHandle[c[e]]=b;}}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling){if(c===b)return-1;}return a?1:-1;}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a;};}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a;};}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a;};}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]));}});});}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a;}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName;},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className");}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length;}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length;}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b;};},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[];}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b;};},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++]){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];}}return[];}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0;}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c);}return d;}return f;},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a);},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]");}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:");})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N);}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)));}:function(a,b){if(b)while(b=b.parentNode){if(b===a)return!0;}return!1;},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1);}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode){g.unshift(c);}c=b;while(c=c.parentNode){h.unshift(c);}while(g[d]===h[d]){d++;}return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0;},n):n;},ga.matches=function(a,b){return ga(a,null,null,b);},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d;}catch(e){}return ga(b,n,null,[a]).length>0;},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b);},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null;},ga.escape=function(a){return(a+"").replace(ba,ca);},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a);},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f));}while(e--){a.splice(d[e],1);}}return k=null,a;},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling){c+=e(a);}}else if(3===f||4===f)return a.nodeValue;}else while(b=a[d++]){c+=e(b);}return c;},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function ATTR(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4);},CHILD:function CHILD(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a;},PSEUDO:function PSEUDO(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3));}},filter:{TAG:function TAG(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0;}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b;};},CLASS:function CLASS(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"");});},ATTR:function ATTR(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"));};},CHILD:function CHILD(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode;}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p]){if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;}o=p="only"===a&&!o&&"nextSibling";}return!0;}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break;}}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;}return t-=e,t===d||t%d===0&&t/d>=0;}};},PSEUDO:function PSEUDO(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--){d=I(a,f[g]),a[d]=!(c[d]=f[g]);}}):function(a){return e(a,0,c);}):e;}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--){(f=g[h])&&(a[h]=!(b[h]=f));}}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop();};}),has:ia(function(a){return function(b){return ga(a,b).length>0;};}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1;};}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");}while((b=b.parentNode)&&1===b.nodeType);return!1;};}),target:function target(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id;},root:function root(a){return a===o;},focus:function focus(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex);},enabled:oa(!1),disabled:oa(!0),checked:function checked(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected;},selected:function selected(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0;},empty:function empty(a){for(a=a.firstChild;a;a=a.nextSibling){if(a.nodeType<6)return!1;}return!0;},parent:function parent(a){return!d.pseudos.empty(a);},header:function header(a){return X.test(a.nodeName);},input:function input(a){return W.test(a.nodeName);},button:function button(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b;},text:function text(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase());},first:pa(function(){return[0];}),last:pa(function(a,b){return[b-1];}),eq:pa(function(a,b,c){return[c<0?c+b:c];}),even:pa(function(a,b){for(var c=0;c<b;c+=2){a.push(c);}return a;}),odd:pa(function(a,b){for(var c=1;c<b;c+=2){a.push(c);}return a;}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;){a.push(d);}return a;}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;){a.push(d);}return a;})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=ma(b);}for(b in{submit:!0,reset:!0}){d.pseudos[b]=na(b);}function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra(),g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter){!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));}if(!c)break;}return b?h.length:h?ga.error(a):z(a,i).slice(0);};function sa(a){for(var b=0,c=a.length,d="";b<c;b++){d+=a[b].value;}return d;}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d]){if(1===b.nodeType||g)return a(b,c,e);}return!1;}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d]){if((1===b.nodeType||g)&&a(b,c,i))return!0;}}else while(b=b[d]){if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0;}}return!1;};}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--){if(!a[e](b,c,d))return!1;}return!0;}:a[0];}function va(a,b,c){for(var d=0,e=b.length;d<e;d++){ga(a,b[d],c);}return c;}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++){(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));}return g;}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l));}}if(f){if(e||a){if(e){j=[],k=r.length;while(k--){(l=r[k])&&j.push(q[k]=l);}e(null,r=[],j,i);}k=r.length;while(k--){(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l));}}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r);});}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b;},h,!0),l=ta(function(a){return I(b,a)>-1;},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e;}];i<f;i++){if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++){if(d.relative[a[e].type])break;}return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a));}m.push(c);}}return ua(m);}function za(a,b){var c=b.length>0,e=a.length>0,f=function f(_f,g,h,i,k){var l,o,q,r=0,s="0",t=_f&&[],u=[],v=j,x=_f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++]){if(q(l,g||n,h)){i.push(l);break;}}k&&(w=y);}c&&((l=!q&&l)&&r--,_f&&t.push(l));}if(r+=s,c&&s!==r){o=0;while(q=b[o++]){q(t,u,g,h);}if(_f){if(r>0)while(s--){t[s]||u[s]||(u[s]=E.call(i));}u=wa(u);}G.apply(i,u),k&&!_f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i);}return k&&(w=y,j=v),t;};return c?ia(f):f;}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--){f=ya(b[c]),f[u]?d.push(f):e.push(f);}f=A(a,za(e,d)),f.selector=a;}return f;},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length);}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break;}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c;},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"));}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href");})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2);}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value");})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue;}),ja(function(a){return null==a.getAttribute("disabled");})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null;}),ga;}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function y(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType){if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a);}}return d;},z=function z(a,b){for(var c=[];a;a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a);}return c;},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase();}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c;}):b.nodeType?r.grep(a,function(a){return a===b!==c;}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c;}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType;}));}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType;}));},r.fn.extend({find:function find(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++){if(r.contains(e[b],this))return!0;}}));for(c=this.pushStack([]),b=0;b<d;b++){r.find(a,e[b],c);}return d>1?r.uniqueSort(c):c;},filter:function filter(a){return this.pushStack(E(this,a||[],!1));},not:function not(a){return this.pushStack(E(this,a||[],!0));},is:function is(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length;}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b){r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);}return this;}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this;}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this);};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function has(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++){if(r.contains(this,b[a]))return!0;}});},closest:function closest(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++){for(c=this[d];c&&c!==b;c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break;}}}return this.pushStack(f.length>1?r.uniqueSort(f):f);},index:function index(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;},add:function add(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))));},addBack:function addBack(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a));}});function K(a,b){while((a=a[b])&&1!==a.nodeType){;}return a;}r.each({parent:function parent(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null;},parents:function parents(a){return y(a,"parentNode");},parentsUntil:function parentsUntil(a,b,c){return y(a,"parentNode",c);},next:function next(a){return K(a,"nextSibling");},prev:function prev(a){return K(a,"previousSibling");},nextAll:function nextAll(a){return y(a,"nextSibling");},prevAll:function prevAll(a){return y(a,"previousSibling");},nextUntil:function nextUntil(a,b,c){return y(a,"nextSibling",c);},prevUntil:function prevUntil(a,b,c){return y(a,"previousSibling",c);},siblings:function siblings(a){return z((a.parentNode||{}).firstChild,a);},children:function children(a){return z(a.firstChild);},contents:function contents(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes));}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e);};});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0;}),b;}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function i(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length){f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1);}}a.memory||(c=!1),b=!1,e&&(f=c?[]:"");},j={add:function add(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c);});}(arguments),c&&!b&&i()),this;},remove:function remove(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1){f.splice(c,1),c<=h&&h--;}}),this;},has:function has(a){return a?r.inArray(a,f)>-1:f.length>0;},empty:function empty(){return f&&(f=[]),this;},disable:function disable(){return e=g=[],f=c="",this;},disabled:function disabled(){return!f;},lock:function lock(){return e=g=[],c||b||(f=c=""),this;},locked:function locked(){return!!e;},fireWith:function fireWith(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this;},fire:function fire(){return j.fireWith(this,arguments),this;},fired:function fired(){return!!d;}};return j;};function N(a){return a;}function O(a){throw a;}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d));}catch(a){c.apply(void 0,[a]);}}r.extend({Deferred:function Deferred(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function state(){return d;},always:function always(){return f.done(arguments).fail(arguments),this;},"catch":function _catch(a){return e.then(null,a);},pipe:function pipe(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments);});}),a=null;}).promise();},then:function then(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function j(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==_typeof(a)||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i));}},k=e?j:function(){try{j();}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i));}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k));};}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O));}).promise();},promise:function promise(a){return null!=a?r.extend(a,e):e;}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h;},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this;},f[b[0]+"With"]=g.fireWith;}),e.promise(f),b&&b.call(f,f),f;},when:function when(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function h(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e);};};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--){P(e[c],h(c),g.reject);}return g.promise();}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c);},r.readyException=function(b){a.setTimeout(function(){throw b;});};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a);}),this;},r.extend({isReady:!1,readyWait:1,ready:function ready(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]));}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),a.removeEventListener("load",S),r.ready();}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function T(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c){T(a,b,h,c[h],!0,f,g);}}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function b(a,_b,c){return j.call(r(a),c);})),b))for(;h<i;h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));}return e?a:j?b.call(a):i?b(a[0],c):f;},U=function U(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType;};function V(){this.expando=r.expando+V.uid++;}V.uid=1,V.prototype={cache:function cache(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b;},set:function set(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b){e[r.camelCase(d)]=b[d];}return e;},get:function get(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)];},access:function access(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b);},remove:function remove(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--){delete d[b[c]];}}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando]);}},hasData:function hasData(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b);}};var W=new V(),X=new V(),Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a);}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c);}catch(e){}X.set(a,b,c);}else c=void 0;return c;}r.extend({hasData:function hasData(a){return X.hasData(a)||W.hasData(a);},data:function data(a,b,c){return X.access(a,b,c);},removeData:function removeData(a,b){X.remove(a,b);},_data:function _data(a,b,c){return W.access(a,b,c);},_removeData:function _removeData(a,b){W.remove(a,b);}}),r.fn.extend({data:function data(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));}W.set(f,"hasDataAttrs",!0);}return e;}return"object"==_typeof(a)?this.each(function(){X.set(this,a);}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c;}else this.each(function(){X.set(this,a,b);});},null,b,arguments.length>1,null,!0);},removeData:function removeData(a){return this.each(function(){X.remove(this,a);});}}),r.extend({queue:function queue(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[];},dequeue:function dequeue(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function g(){r.dequeue(a,b);};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire();},_queueHooks:function _queueHooks(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c]);})});}}),r.fn.extend({queue:function queue(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a);});},dequeue:function dequeue(a){return this.each(function(){r.dequeue(this,a);});},clearQueue:function clearQueue(a){return this.queue(a||"fx",[]);},promise:function promise(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function h(){--d||e.resolveWith(f,[f]);};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--){c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));}return h(),e.promise(b);}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function da(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display");},ea=function ea(a,b,c,d){var e,f,g={};for(f in b){g[f]=a.style[f],a.style[f]=b[f];}e=c.apply(a,d||[]);for(f in b){a.style[f]=g[f];}return e;};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur();}:function(){return r.css(a,b,"");},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do{f=f||".5",k/=f,r.style(a,b,k+j);}while(f!==(f=h()/i)&&1!==f&&--g);}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e;}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e);}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++){d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));}for(f=0;f<g;f++){null!=e[f]&&(a[f].style.display=e[f]);}return a;}r.fn.extend({show:function show(){return ia(this,!0);},hide:function hide(){return ia(this);},toggle:function toggle(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide();});}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c;}function oa(a,b){for(var c=0,d=a.length;c<d;c++){W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"));}}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++){if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--){g=g.lastChild;}r.merge(m,g.childNodes),g=l.firstChild,g.textContent="";}else m.push(b.createTextNode(f));}l.textContent="",n=0;while(f=m[n++]){if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++]){la.test(f.type||"")&&c.push(f);}}}return l;}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue;}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0;}function wa(){return!1;}function xa(){try{return d.activeElement;}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==_typeof(b)){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b){ya(a,h,c,d,b[h],f);}return a;}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function e(a){return r().off(a),g.apply(this,arguments);},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c);});}r.event={global:{},add:function add(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0;}),b=(b||"").match(L)||[""],j=b.length;while(j--){h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0);}}},remove:function remove(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--){if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--){k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));}g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n]);}else for(n in i){r.event.remove(a,n+b[j],c,d,!0);}}r.isEmptyObject(i)&&W.remove(a,"handle events");}},dispatch:function dispatch(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++){i[c]=arguments[c];}if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped()){b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()));}}return k.postDispatch&&k.postDispatch.call(this,b),b.result;}},handlers:function handlers(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this){if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++){d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);}f.length&&h.push({elem:j,handlers:f});}}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h;},addProp:function addProp(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent);}:function(){if(this.originalEvent)return this.originalEvent[a];},set:function set(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b});}});},fix:function fix(a){return a[r.expando]?a:new r.Event(a);},special:{load:{noBubble:!0},focus:{trigger:function trigger(){if(this!==xa()&&this.focus)return this.focus(),!1;},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===xa()&&this.blur)return this.blur(),!1;},delegateType:"focusout"},click:{trigger:function trigger(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1;},_default:function _default(a){return B(a.target,"a");}},beforeunload:{postDispatch:function postDispatch(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result);}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c);},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b);},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function preventDefault(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault();},stopPropagation:function stopPropagation(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation();},stopImmediatePropagation:function stopImmediatePropagation(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation();}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function which(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which;}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function handle(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c;}};}),r.fn.extend({on:function on(a,b,c,d){return ya(this,a,b,c,d);},one:function one(a,b,c,d){return ya(this,a,b,c,d,1);},off:function off(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==_typeof(a)){for(e in a){this.off(e,b,a[e]);}return this;}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b);});}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a;}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a;}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a;}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j){for(c=0,d=j[e].length;c<d;c++){r.event.add(b,e,j[e][c]);}}}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i));}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue);}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d);});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++){j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);}if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++){j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k));}}return a;}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++){c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));}return a;}r.extend({htmlPrefilter:function htmlPrefilter(a){return a.replace(za,"<$1></$2>");},clone:function clone(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++){Ia(f[d],g[d]);}if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++){Ha(f[d],g[d]);}else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h;},cleanData:function cleanData(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++){if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events){e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);}c[W.expando]=void 0;}c[X.expando]&&(c[X.expando]=void 0);}}}}),r.fn.extend({detach:function detach(a){return Ka(this,a,!0);},remove:function remove(a){return Ka(this,a);},text:function text(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a);});},null,a,arguments.length);},append:function append(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a);}});},prepend:function prepend(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild);}});},before:function before(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this);});},after:function after(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling);});},empty:function empty(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");}return this;},clone:function clone(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b);});},html:function html(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++){b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);}b=0;}catch(e){}}b&&this.empty().append(a);},null,a,arguments.length);},replaceWith:function replaceWith(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this));},a);}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++){c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());}return this.pushStack(d);};});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function Na(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b);};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null;}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function pixelPosition(){return b(),c;},boxSizingReliable:function boxSizingReliable(){return b(),e;},pixelMarginRight:function pixelMarginRight(){return b(),f;},reliableMarginLeft:function reliableMarginLeft(){return b(),g;}}));}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g;}function Pa(a,b){return{get:function get(){return a()?void delete this.get:(this.get=b).apply(this,arguments);}};}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--){if(a=Ua[c]+b,a in Va)return a;}}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b;}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b;}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2){"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));}return g;}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px");}r.extend({cssHooks:{opacity:{get:function get(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c;}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function style(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=_typeof(c),"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0);}},css:function css(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e;}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function get(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d);});},set:function set(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g);}};}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left;}))+"px";}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function expand(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++){e[a+ca[d]+b]=f[d]||f[d-2]||f[0];}return e;}},La.test(a)||(r.cssHooks[a+b].set=Ya);}),r.fn.extend({css:function css(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++){f[b[g]]=r.css(a,b[g],!1,d);}return f;}return void 0!==c?r.style(a,b,c):r.css(a,b);},a,b,arguments.length>1);}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e);}r.Tween=_a,_a.prototype={constructor:_a,init:function init(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px");},cur:function cur(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this);},run:function run(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this;}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function get(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0);},set:function set(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit);}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function set(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now);}},r.easing={linear:function linear(a){return a;},swing:function swing(a){return .5-Math.cos(a*Math.PI)/2;},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick());}function fb(){return a.setTimeout(function(){ab=void 0;}),ab=r.now();}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b){c=ca[d],e["margin"+c]=e["padding"+c]=a;}return b&&(e.opacity=e.width=a),e;}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++){if(d=e[f].call(c,b,a))return d;}}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h();}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire();});}));for(d in b){if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0;}n[d]=q&&q[d]||r.style(a,d);}}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j;}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2];})),i=!1;for(d in n){i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n){r.style(a,d,n[d]);}})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0));}}}function jb(a,b){var c,d,e,f,g;for(c in a){if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f){c in a||(a[c]=f[c],b[c]=e);}}else b[d]=e;}}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem;}),i=function i(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++){j.tweens[g].run(f);}return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1);},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function createTween(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d;},stop:function stop(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++){j.tweens[c].run(1);}return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this;}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++){if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;}return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j;}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c;}]},tweener:function tweener(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++){c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b);}},prefilters:[ib],prefilter:function prefilter(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a);}}),r.speed=function(a,b,c){var d=a&&"object"==_typeof(a)?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue);},d;},r.fn.extend({fadeTo:function fadeTo(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d);},animate:function animate(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function g(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0);};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g);},stop:function stop(a,b,c){var d=function d(a){var b=a.stop;delete a.stop,b(c);};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g){g[e]&&g[e].stop&&db.test(e)&&d(g[e]);}for(e=f.length;e--;){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));}!b&&c||r.dequeue(this,a);});},finish:function finish(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));}for(b=0;b<g;b++){d[b]&&d[b].finish&&d[b].finish.call(this);}delete c.finish;});}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e);};}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d);};}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++){a=c[b],a()||c[b]!==a||c.splice(b--,1);}c.length||r.fx.stop(),ab=void 0;},r.fx.timer=function(a){r.timers.push(a),r.fx.start();},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb());},r.fx.stop=function(){bb=null;},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e);};});},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value;}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function attr(a,b){return T(this,r.attr,a,b,arguments.length>1);},removeAttr:function removeAttr(a){return this.each(function(){r.removeAttr(this,a);});}}),r.extend({attr:function attr(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d));},attrHooks:{type:{set:function set(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b;}}}},removeAttr:function removeAttr(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++]){a.removeAttribute(c);}}}),lb={set:function set(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c;}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e;};});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function prop(a,b){return T(this,r.prop,a,b,arguments.length>1);},removeProp:function removeProp(a){return this.each(function(){delete this[r.propFix[a]||a];});}}),r.extend({prop:function prop(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];},propHooks:{tabIndex:{get:function get(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function get(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null;},set:function set(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this;});function pb(a){var b=a.match(L)||[];return b.join(" ");}function qb(a){return a.getAttribute&&a.getAttribute("class")||"";}r.fn.extend({addClass:function addClass(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)));});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++]){if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++]){d.indexOf(" "+f+" ")<0&&(d+=f+" ");}h=pb(d),e!==h&&c.setAttribute("class",h);}}}return this;},removeClass:function removeClass(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)));});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++]){if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++]){while(d.indexOf(" "+f+" ")>-1){d=d.replace(" "+f+" "," ");}}h=pb(d),e!==h&&c.setAttribute("class",h);}}}return this;},toggleClass:function toggleClass(a,b){var c=_typeof(a);return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b);}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b);}}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""));});},hasClass:function hasClass(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++]){if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;}return!1;}});var rb=/\r/g;r.fn.extend({val:function val(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+"";})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e));});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c);}}}),r.extend({valHooks:{option:{get:function get(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a));}},select:{get:function get(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++){if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b);}}return h;},set:function set(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--){d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);}return c||(a.selectedIndex=-1),f;}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function set(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1;}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value;});});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function trigger(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==_typeof(b)&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode){o.push(h),i=h;}i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a);}g=0;while((h=o[g++])&&!b.isPropagationStopped()){b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());}return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result;}},simulate:function simulate(a,b,c){var d=r.extend(new r.Event(),c,{type:a,isSimulated:!0});r.event.trigger(d,null,b);}}),r.fn.extend({trigger:function trigger(a,b){return this.each(function(){r.event.trigger(a,b,this);});},triggerHandler:function triggerHandler(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0);}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b);};}),r.fn.extend({hover:function hover(a,b){return this.mouseenter(a).mouseleave(b||a);}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function c(a){r.event.simulate(b,a.target,r.event.fix(a));};r.event.special[b]={setup:function setup(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1);},teardown:function teardown(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b));}};});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=new a.DOMParser().parseFromString(b,"text/xml");}catch(d){c=void 0;}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c;};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==_typeof(e)&&null!=e?b:"")+"]",e,c,d);});else if(c||"object"!==r.type(b))d(a,b);else for(e in b){Ab(a+"["+e+"]",b[e],c,d);}}r.param=function(a,b){var c,d=[],e=function e(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c);};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value);});else for(c in a){Ab(c,a[c],b,e);}return d.join("&");},r.fn.extend({serialize:function serialize(){return r.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this;}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a));}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")};}):{name:b.name,value:c.replace(xb,"\r\n")};}).get();}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++]){"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c);}};}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1);}),i;}return g(b.dataTypes[0])||!e["*"]&&g("*");}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b){void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);}return d&&r.extend(!0,a,d),a;}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0]){i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));}if(d)for(e in h){if(h[e]&&h[e].test(d)){i.unshift(e);break;}}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break;}g||(g=e);}f=f||g;}if(f)return f!==i[0]&&i.unshift(f),c[f];}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters){j[g.toLowerCase()]=a.converters[g];}f=k.shift();while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break;}}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b);}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f};}}}return{state:"success",data:b};}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function ajaxSetup(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a);},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function ajax(b,c){"object"==_typeof(b)&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function getResponseHeader(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g)){h[b[1].toLowerCase()]=b[2];}}b=h[a.toLowerCase()];}return null==b?null:b;},getAllResponseHeaders:function getAllResponseHeaders(){return k?g:null;},setRequestHeader:function setRequestHeader(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this;},overrideMimeType:function overrideMimeType(a){return null==k&&(o.mimeType=a),this;},statusCode:function statusCode(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a){u[b]=[u[b],a[b]];}return this;},abort:function abort(a){var b=a||x;return e&&e.abort(b),A(0,b),this;}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host;}catch(z){o.crossDomain=!0;}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers){y.setRequestHeader(m,o.headers[m]);}if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout");},o.timeout));try{k=!1,e.send(v,A);}catch(z){if(k)throw z;A(-1,z);}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")));}return y;},getJSON:function getJSON(a,b,c){return r.get(a,b,c,"json");},getScript:function getScript(a,b){return r.get(a,void 0,b,"script");}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a));};}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0});},r.fn.extend({wrapAll:function wrapAll(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild){a=a.firstElementChild;}return a;}).append(this)),this;},wrapInner:function wrapInner(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b));}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a);});},wrap:function wrap(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a);});},unwrap:function unwrap(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes);}),this;}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a);},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length);},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest();}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var _c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function send(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields){h[g]=b.xhrFields[g];}b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e){h.setRequestHeader(g,e[g]);}_c=function c(a){return function(){_c&&(_c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()));};},h.onload=_c(),d=h.onerror=_c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){_c&&d();});},_c=_c("abort");try{h.send(b.hasContent&&b.data||null);}catch(i){if(_c)throw i;}},abort:function abort(){_c&&_c();}};}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1);}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(a){return r.globalEval(a),a;}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET");}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,_c2;return{send:function send(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",_c2=function c(a){b.remove(),_c2=null,a&&f("error"===a.type?404:200,a.type);}),d.head.appendChild(b[0]);},abort:function abort(){_c2&&_c2();}};}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a;}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0];},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments;},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0;}),"script";}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length;}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes));},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==_typeof(b)&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a);}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a]);});}),this;},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a);};}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem;}).length;},r.offset={setOffset:function setOffset(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m);}},r.fn.extend({offset:function offset(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b);});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0};},position:function position(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)};}},offsetParent:function offsetParent(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position")){a=a.offsetParent;}return a||ra;});}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e);},a,d,arguments.length);};}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c;});}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h);},b,g?e:void 0,g);};});}),r.fn.extend({bind:function bind(a,b,c){return this.on(a,null,b,c);},unbind:function unbind(a,b){return this.off(a,null,b);},delegate:function delegate(a,b,c,d){return this.on(b,a,c,d);},undelegate:function undelegate(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c);}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0);},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r;});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r;},b||(a.jQuery=a.$=r),r;});/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery');}+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.');if(version[0]<2&&version[1]<9||version[0]==1&&version[1]==9&&version[2]<1||version[0]>3){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4');}}(jQuery);/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
// ============================================================
function transitionEnd(){var el=document.createElement('bootstrap');var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]};}}return false;// explicit for ie8 (  ._.)
}// http://blog.alexmaccaw.com/css-transitions
$.fn.emulateTransitionEnd=function(duration){var called=false;var $el=this;$(this).one('bsTransitionEnd',function(){called=true;});var callback=function callback(){if(!called)$($el).trigger($.support.transition.end);};setTimeout(callback,duration);return this;};$(function(){$.support.transition=transitionEnd();if(!$.support.transition)return;$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function handle(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments);}};});}(jQuery);/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// ALERT CLASS DEFINITION
// ======================
var dismiss='[data-dismiss="alert"]';var Alert=function Alert(el){$(el).on('click',dismiss,this.close);};Alert.VERSION='3.3.7';Alert.TRANSITION_DURATION=150;Alert.prototype.close=function(e){var $this=$(this);var selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'');// strip for ie7
}var $parent=$(selector==='#'?[]:selector);if(e)e.preventDefault();if(!$parent.length){$parent=$this.closest('.alert');}$parent.trigger(e=$.Event('close.bs.alert'));if(e.isDefaultPrevented())return;$parent.removeClass('in');function removeElement(){// detach from parent, fire event then clean up data
$parent.detach().trigger('closed.bs.alert').remove();}$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement();};// ALERT PLUGIN DEFINITION
// =======================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.alert');if(!data)$this.data('bs.alert',data=new Alert(this));if(typeof option=='string')data[option].call($this);});}var old=$.fn.alert;$.fn.alert=Plugin;$.fn.alert.Constructor=Alert;// ALERT NO CONFLICT
// =================
$.fn.alert.noConflict=function(){$.fn.alert=old;return this;};// ALERT DATA-API
// ==============
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close);}(jQuery);/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// BUTTON PUBLIC CLASS DEFINITION
// ==============================
var Button=function Button(element,options){this.$element=$(element);this.options=$.extend({},Button.DEFAULTS,options);this.isLoading=false;};Button.VERSION='3.3.7';Button.DEFAULTS={loadingText:'loading...'};Button.prototype.setState=function(state){var d='disabled';var $el=this.$element;var val=$el.is('input')?'val':'html';var data=$el.data();state+='Text';if(data.resetText==null)$el.data('resetText',$el[val]());// push to event loop to allow forms to submit
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state]);if(state=='loadingText'){this.isLoading=true;$el.addClass(d).attr(d,d).prop(d,true);}else if(this.isLoading){this.isLoading=false;$el.removeClass(d).removeAttr(d).prop(d,false);}},this),0);};Button.prototype.toggle=function(){var changed=true;var $parent=this.$element.closest('[data-toggle="buttons"]');if($parent.length){var $input=this.$element.find('input');if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false;$parent.find('.active').removeClass('active');this.$element.addClass('active');}else if($input.prop('type')=='checkbox'){if($input.prop('checked')!==this.$element.hasClass('active'))changed=false;this.$element.toggleClass('active');}$input.prop('checked',this.$element.hasClass('active'));if(changed)$input.trigger('change');}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'));this.$element.toggleClass('active');}};// BUTTON PLUGIN DEFINITION
// ========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.button');var options=_typeof(option)=='object'&&option;if(!data)$this.data('bs.button',data=new Button(this,options));if(option=='toggle')data.toggle();else if(option)data.setState(option);});}var old=$.fn.button;$.fn.button=Plugin;$.fn.button.Constructor=Button;// BUTTON NO CONFLICT
// ==================
$.fn.button.noConflict=function(){$.fn.button=old;return this;};// BUTTON DATA-API
// ===============
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target).closest('.btn');Plugin.call($btn,'toggle');if(!$(e.target).is('input[type="radio"], input[type="checkbox"]')){// Prevent double click on radios, and the double selections (so cancellation) on checkboxes
e.preventDefault();// The target component still receive the focus
if($btn.is('input,button'))$btn.trigger('focus');else $btn.find('input:visible,button:visible').first().trigger('focus');}}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type));});}(jQuery);/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// CAROUSEL CLASS DEFINITION
// =========================
var Carousel=function Carousel(element,options){this.$element=$(element);this.$indicators=this.$element.find('.carousel-indicators');this.options=options;this.paused=null;this.sliding=null;this.interval=null;this.$active=null;this.$items=null;this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this));this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this));};Carousel.VERSION='3.3.7';Carousel.TRANSITION_DURATION=600;Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true};Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return;switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return;}e.preventDefault();};Carousel.prototype.cycle=function(e){e||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval));return this;};Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item');return this.$items.index(item||this.$active);};Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active);var willWrap=direction=='prev'&&activeIndex===0||direction=='next'&&activeIndex==this.$items.length-1;if(willWrap&&!this.options.wrap)return active;var delta=direction=='prev'?-1:1;var itemIndex=(activeIndex+delta)%this.$items.length;return this.$items.eq(itemIndex);};Carousel.prototype.to=function(pos){var that=this;var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'));if(pos>this.$items.length-1||pos<0)return;if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos);});// yes, "slid"
if(activeIndex==pos)return this.pause().cycle();return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos));};Carousel.prototype.pause=function(e){e||(this.paused=true);if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end);this.cycle(true);}this.interval=clearInterval(this.interval);return this;};Carousel.prototype.next=function(){if(this.sliding)return;return this.slide('next');};Carousel.prototype.prev=function(){if(this.sliding)return;return this.slide('prev');};Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active');var $next=next||this.getItemForDirection(type,$active);var isCycling=this.interval;var direction=type=='next'?'left':'right';var that=this;if($next.hasClass('active'))return this.sliding=false;var relatedTarget=$next[0];var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction});this.$element.trigger(slideEvent);if(slideEvent.isDefaultPrevented())return;this.sliding=true;isCycling&&this.pause();if(this.$indicators.length){this.$indicators.find('.active').removeClass('active');var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)]);$nextIndicator&&$nextIndicator.addClass('active');}var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction});// yes, "slid"
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type);$next[0].offsetWidth;// force reflow
$active.addClass(direction);$next.addClass(direction);$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active');$active.removeClass(['active',direction].join(' '));that.sliding=false;setTimeout(function(){that.$element.trigger(slidEvent);},0);}).emulateTransitionEnd(Carousel.TRANSITION_DURATION);}else{$active.removeClass('active');$next.addClass('active');this.sliding=false;this.$element.trigger(slidEvent);}isCycling&&this.cycle();return this;};// CAROUSEL PLUGIN DEFINITION
// ==========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.carousel');var options=$.extend({},Carousel.DEFAULTS,$this.data(),_typeof(option)=='object'&&option);var action=typeof option=='string'?option:options.slide;if(!data)$this.data('bs.carousel',data=new Carousel(this,options));if(typeof option=='number')data.to(option);else if(action)data[action]();else if(options.interval)data.pause().cycle();});}var old=$.fn.carousel;$.fn.carousel=Plugin;$.fn.carousel.Constructor=Carousel;// CAROUSEL NO CONFLICT
// ====================
$.fn.carousel.noConflict=function(){$.fn.carousel=old;return this;};// CAROUSEL DATA-API
// =================
var clickHandler=function clickHandler(e){var href;var $this=$(this);var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''));// strip for ie7
if(!$target.hasClass('carousel'))return;var options=$.extend({},$target.data(),$this.data());var slideIndex=$this.attr('data-slide-to');if(slideIndex)options.interval=false;Plugin.call($target,options);if(slideIndex){$target.data('bs.carousel').to(slideIndex);}e.preventDefault();};$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler);$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this);Plugin.call($carousel,$carousel.data());});});}(jQuery);/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */ /* jshint latedef: false */+function($){'use strict';// COLLAPSE PUBLIC CLASS DEFINITION
// ================================
var Collapse=function Collapse(element,options){this.$element=$(element);this.options=$.extend({},Collapse.DEFAULTS,options);this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]');this.transitioning=null;if(this.options.parent){this.$parent=this.getParent();}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger);}if(this.options.toggle)this.toggle();};Collapse.VERSION='3.3.7';Collapse.TRANSITION_DURATION=350;Collapse.DEFAULTS={toggle:true};Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width');return hasWidth?'width':'height';};Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return;var activesData;var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing');if(actives&&actives.length){activesData=actives.data('bs.collapse');if(activesData&&activesData.transitioning)return;}var startEvent=$.Event('show.bs.collapse');this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented())return;if(actives&&actives.length){Plugin.call(actives,'hide');activesData||actives.data('bs.collapse',null);}var dimension=this.dimension();this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true);this.$trigger.removeClass('collapsed').attr('aria-expanded',true);this.transitioning=1;var complete=function complete(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');this.transitioning=0;this.$element.trigger('shown.bs.collapse');};if(!$.support.transition)return complete.call(this);var scrollSize=$.camelCase(['scroll',dimension].join('-'));this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);};Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return;var startEvent=$.Event('hide.bs.collapse');this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented())return;var dimension=this.dimension();this.$element[dimension](this.$element[dimension]())[0].offsetHeight;this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false);this.$trigger.addClass('collapsed').attr('aria-expanded',false);this.transitioning=1;var complete=function complete(){this.transitioning=0;this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');};if(!$.support.transition)return complete.call(this);this.$element[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);};Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']();};Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element);this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element);},this)).end();};Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in');$element.attr('aria-expanded',isOpen);$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen);};function getTargetFromTrigger($trigger){var href;var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'');// strip for ie7
return $(target);}// COLLAPSE PLUGIN DEFINITION
// ==========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.collapse');var options=$.extend({},Collapse.DEFAULTS,$this.data(),_typeof(option)=='object'&&option);if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false;if(!data)$this.data('bs.collapse',data=new Collapse(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.collapse;$.fn.collapse=Plugin;$.fn.collapse.Constructor=Collapse;// COLLAPSE NO CONFLICT
// ====================
$.fn.collapse.noConflict=function(){$.fn.collapse=old;return this;};// COLLAPSE DATA-API
// =================
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this);if(!$this.attr('data-target'))e.preventDefault();var $target=getTargetFromTrigger($this);var data=$target.data('bs.collapse');var option=data?'toggle':$this.data();Plugin.call($target,option);});}(jQuery);/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// DROPDOWN CLASS DEFINITION
// =========================
var backdrop='.dropdown-backdrop';var toggle='[data-toggle="dropdown"]';var Dropdown=function Dropdown(element){$(element).on('click.bs.dropdown',this.toggle);};Dropdown.VERSION='3.3.7';function getParent($this){var selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'');// strip for ie7
}var $parent=selector&&$(selector);return $parent&&$parent.length?$parent:$this.parent();}function clearMenus(e){if(e&&e.which===3)return;$(backdrop).remove();$(toggle).each(function(){var $this=$(this);var $parent=getParent($this);var relatedTarget={relatedTarget:this};if(!$parent.hasClass('open'))return;if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return;$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget));if(e.isDefaultPrevented())return;$this.attr('aria-expanded','false');$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown',relatedTarget));});}Dropdown.prototype.toggle=function(e){var $this=$(this);if($this.is('.disabled, :disabled'))return;var $parent=getParent($this);var isActive=$parent.hasClass('open');clearMenus();if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){// if mobile we use a backdrop because click events don't delegate
$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus);}var relatedTarget={relatedTarget:this};$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget));if(e.isDefaultPrevented())return;$this.trigger('focus').attr('aria-expanded','true');$parent.toggleClass('open').trigger($.Event('shown.bs.dropdown',relatedTarget));}return false;};Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return;var $this=$(this);e.preventDefault();e.stopPropagation();if($this.is('.disabled, :disabled'))return;var $parent=getParent($this);var isActive=$parent.hasClass('open');if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus');return $this.trigger('click');}var desc=' li:not(.disabled):visible a';var $items=$parent.find('.dropdown-menu'+desc);if(!$items.length)return;var index=$items.index(e.target);if(e.which==38&&index>0)index--;// up
if(e.which==40&&index<$items.length-1)index++;// down
if(!~index)index=0;$items.eq(index).trigger('focus');};// DROPDOWN PLUGIN DEFINITION
// ==========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.dropdown');if(!data)$this.data('bs.dropdown',data=new Dropdown(this));if(typeof option=='string')data[option].call($this);});}var old=$.fn.dropdown;$.fn.dropdown=Plugin;$.fn.dropdown.Constructor=Dropdown;// DROPDOWN NO CONFLICT
// ====================
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old;return this;};// APPLY TO STANDARD DROPDOWN ELEMENTS
// ===================================
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation();}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown);}(jQuery);/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// MODAL CLASS DEFINITION
// ======================
var Modal=function Modal(element,options){this.options=options;this.$body=$(document.body);this.$element=$(element);this.$dialog=this.$element.find('.modal-dialog');this.$backdrop=null;this.isShown=null;this.originalBodyPad=null;this.scrollbarWidth=0;this.ignoreBackdropClick=false;if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal');},this));}};Modal.VERSION='3.3.7';Modal.TRANSITION_DURATION=300;Modal.BACKDROP_TRANSITION_DURATION=150;Modal.DEFAULTS={backdrop:true,keyboard:true,show:true};Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget);};Modal.prototype.show=function(_relatedTarget){var that=this;var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget});this.$element.trigger(e);if(this.isShown||e.isDefaultPrevented())return;this.isShown=true;this.checkScrollbar();this.setScrollbar();this.$body.addClass('modal-open');this.escape();this.resize();this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this));this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true;});});this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade');if(!that.$element.parent().length){that.$element.appendTo(that.$body);// don't move modals dom position
}that.$element.show().scrollTop(0);that.adjustDialog();if(transition){that.$element[0].offsetWidth;// force reflow
}that.$element.addClass('in');that.enforceFocus();var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget});transition?that.$dialog// wait for modal to slide in
.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e);}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e);});};Modal.prototype.hide=function(e){if(e)e.preventDefault();e=$.Event('hide.bs.modal');this.$element.trigger(e);if(!this.isShown||e.isDefaultPrevented())return;this.isShown=false;this.escape();this.resize();$(document).off('focusin.bs.modal');this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');this.$dialog.off('mousedown.dismiss.bs.modal');$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal();};Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal')// guard against infinite focus loop
.on('focusin.bs.modal',$.proxy(function(e){if(document!==e.target&&this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus');}},this));};Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide();},this));}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal');}};Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this));}else{$(window).off('resize.bs.modal');}};Modal.prototype.hideModal=function(){var that=this;this.$element.hide();this.backdrop(function(){that.$body.removeClass('modal-open');that.resetAdjustments();that.resetScrollbar();that.$element.trigger('hidden.bs.modal');});};Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null;};Modal.prototype.backdrop=function(callback){var that=this;var animate=this.$element.hasClass('fade')?'fade':'';if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body);this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;return;}if(e.target!==e.currentTarget)return;this.options.backdrop=='static'?this.$element[0].focus():this.hide();},this));if(doAnimate)this.$backdrop[0].offsetWidth;// force reflow
this.$backdrop.addClass('in');if(!callback)return;doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback();}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in');var callbackRemove=function callbackRemove(){that.removeBackdrop();callback&&callback();};$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove();}else if(callback){callback();}};// these following methods are used to handle overflowing modals
Modal.prototype.handleUpdate=function(){this.adjustDialog();};Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''});};Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''});};Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth;if(!fullWindowWidth){// workaround for missing window.innerWidth in IE8
var documentElementRect=document.documentElement.getBoundingClientRect();fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left);}this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth;this.scrollbarWidth=this.measureScrollbar();};Modal.prototype.setScrollbar=function(){var bodyPad=parseInt(this.$body.css('padding-right')||0,10);this.originalBodyPad=document.body.style.paddingRight||'';if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth);};Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad);};Modal.prototype.measureScrollbar=function(){// thx walsh
var scrollDiv=document.createElement('div');scrollDiv.className='modal-scrollbar-measure';this.$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;this.$body[0].removeChild(scrollDiv);return scrollbarWidth;};// MODAL PLUGIN DEFINITION
// =======================
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this);var data=$this.data('bs.modal');var options=$.extend({},Modal.DEFAULTS,$this.data(),_typeof(option)=='object'&&option);if(!data)$this.data('bs.modal',data=new Modal(this,options));if(typeof option=='string')data[option](_relatedTarget);else if(options.show)data.show(_relatedTarget);});}var old=$.fn.modal;$.fn.modal=Plugin;$.fn.modal.Constructor=Modal;// MODAL NO CONFLICT
// =================
$.fn.modal.noConflict=function(){$.fn.modal=old;return this;};// MODAL DATA-API
// ==============
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this);var href=$this.attr('href');var $target=$($this.attr('data-target')||href&&href.replace(/.*(?=#[^\s]+$)/,''));// strip for ie7
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());if($this.is('a'))e.preventDefault();$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return;// only register focus restorer if modal will actually get shown
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus');});});Plugin.call($target,option,this);});}(jQuery);/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// TOOLTIP PUBLIC CLASS DEFINITION
// ===============================
var Tooltip=function Tooltip(element,options){this.type=null;this.options=null;this.enabled=null;this.timeout=null;this.hoverState=null;this.$element=null;this.inState=null;this.init('tooltip',element,options);};Tooltip.VERSION='3.3.7';Tooltip.TRANSITION_DURATION=150;Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}};Tooltip.prototype.init=function(type,element,options){this.enabled=true;this.type=type;this.$element=$(element);this.options=this.getOptions(options);this.$viewport=this.options.viewport&&$($.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport);this.inState={click:false,hover:false,focus:false};if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!');}var triggers=this.options.trigger.split(' ');for(var i=triggers.length;i--;){var trigger=triggers[i];if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this));}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin';var eventOut=trigger=='hover'?'mouseleave':'focusout';this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this));this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this));}}this.options.selector?this._options=$.extend({},this.options,{trigger:'manual',selector:''}):this.fixTitle();};Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS;};Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options);if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay};}return options;};Tooltip.prototype.getDelegateOptions=function(){var options={};var defaults=this.getDefaults();this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value;});return options;};Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type);if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions());$(obj.currentTarget).data('bs.'+this.type,self);}if(obj instanceof $.Event){self.inState[obj.type=='focusin'?'focus':'hover']=true;}if(self.tip().hasClass('in')||self.hoverState=='in'){self.hoverState='in';return;}clearTimeout(self.timeout);self.hoverState='in';if(!self.options.delay||!self.options.delay.show)return self.show();self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show();},self.options.delay.show);};Tooltip.prototype.isInStateTrue=function(){for(var key in this.inState){if(this.inState[key])return true;}return false;};Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type);if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions());$(obj.currentTarget).data('bs.'+this.type,self);}if(obj instanceof $.Event){self.inState[obj.type=='focusout'?'focus':'hover']=false;}if(self.isInStateTrue())return;clearTimeout(self.timeout);self.hoverState='out';if(!self.options.delay||!self.options.delay.hide)return self.hide();self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide();},self.options.delay.hide);};Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!inDom)return;var that=this;var $tip=this.tip();var tipId=this.getUID(this.type);this.setContent();$tip.attr('id',tipId);this.$element.attr('aria-describedby',tipId);if(this.options.animation)$tip.addClass('fade');var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement;var autoToken=/\s?auto?\s?/i;var autoPlace=autoToken.test(placement);if(autoPlace)placement=placement.replace(autoToken,'')||'top';$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this);this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element);this.$element.trigger('inserted.bs.'+this.type);var pos=this.getPosition();var actualWidth=$tip[0].offsetWidth;var actualHeight=$tip[0].offsetHeight;if(autoPlace){var orgPlacement=placement;var viewportDim=this.getPosition(this.$viewport);placement=placement=='bottom'&&pos.bottom+actualHeight>viewportDim.bottom?'top':placement=='top'&&pos.top-actualHeight<viewportDim.top?'bottom':placement=='right'&&pos.right+actualWidth>viewportDim.width?'left':placement=='left'&&pos.left-actualWidth<viewportDim.left?'right':placement;$tip.removeClass(orgPlacement).addClass(placement);}var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight);this.applyPlacement(calculatedOffset,placement);var complete=function complete(){var prevHoverState=that.hoverState;that.$element.trigger('shown.bs.'+that.type);that.hoverState=null;if(prevHoverState=='out')that.leave(that);};$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete();}};Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip();var width=$tip[0].offsetWidth;var height=$tip[0].offsetHeight;// manually read margins because getBoundingClientRect includes difference
var marginTop=parseInt($tip.css('margin-top'),10);var marginLeft=parseInt($tip.css('margin-left'),10);// we must check for NaN for ie 8/9
if(isNaN(marginTop))marginTop=0;if(isNaN(marginLeft))marginLeft=0;offset.top+=marginTop;offset.left+=marginLeft;// $.fn.offset doesn't round pixel values
// so we use setOffset directly with our own function B-0
$.offset.setOffset($tip[0],$.extend({using:function using(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)});}},offset),0);$tip.addClass('in');// check to see if placing tip in new offset caused the tip to resize itself
var actualWidth=$tip[0].offsetWidth;var actualHeight=$tip[0].offsetHeight;if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight;}var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight);if(delta.left)offset.left+=delta.left;else offset.top+=delta.top;var isVertical=/top|bottom/.test(placement);var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight;var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight';$tip.offset(offset);this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical);};Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','');};Tooltip.prototype.setContent=function(){var $tip=this.tip();var title=this.getTitle();$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title);$tip.removeClass('fade in top bottom left right');};Tooltip.prototype.hide=function(callback){var that=this;var $tip=$(this.$tip);var e=$.Event('hide.bs.'+this.type);function complete(){if(that.hoverState!='in')$tip.detach();if(that.$element){// TODO: Check whether guarding this code with this `if` is really necessary.
that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type);}callback&&callback();}this.$element.trigger(e);if(e.isDefaultPrevented())return;$tip.removeClass('in');$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete();this.hoverState=null;return this;};Tooltip.prototype.fixTitle=function(){var $e=this.$element;if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','');}};Tooltip.prototype.hasContent=function(){return this.getTitle();};Tooltip.prototype.getPosition=function($element){$element=$element||this.$element;var el=$element[0];var isBody=el.tagName=='BODY';var elRect=el.getBoundingClientRect();if(elRect.width==null){// width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top});}var isSvg=window.SVGElement&&el instanceof window.SVGElement;// Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
// See https://github.com/twbs/bootstrap/issues/20280
var elOffset=isBody?{top:0,left:0}:isSvg?null:$element.offset();var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()};var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null;return $.extend({},elRect,scroll,outerDims,elOffset);};Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:/* placement == 'right' */{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width};};Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0};if(!this.$viewport)return delta;var viewportPadding=this.options.viewport&&this.options.viewport.padding||0;var viewportDimensions=this.getPosition(this.$viewport);if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll;var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight;if(topEdgeOffset<viewportDimensions.top){// top overflow
delta.top=viewportDimensions.top-topEdgeOffset;}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){// bottom overflow
delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset;}}else{var leftEdgeOffset=pos.left-viewportPadding;var rightEdgeOffset=pos.left+viewportPadding+actualWidth;if(leftEdgeOffset<viewportDimensions.left){// left overflow
delta.left=viewportDimensions.left-leftEdgeOffset;}else if(rightEdgeOffset>viewportDimensions.right){// right overflow
delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset;}}return delta;};Tooltip.prototype.getTitle=function(){var title;var $e=this.$element;var o=this.options;title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title);return title;};Tooltip.prototype.getUID=function(prefix){do{prefix+=~~(Math.random()*1000000);}while(document.getElementById(prefix));return prefix;};Tooltip.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template);if(this.$tip.length!=1){throw new Error(this.type+' `template` option must consist of exactly 1 top-level element!');}}return this.$tip;};Tooltip.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow');};Tooltip.prototype.enable=function(){this.enabled=true;};Tooltip.prototype.disable=function(){this.enabled=false;};Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled;};Tooltip.prototype.toggle=function(e){var self=this;if(e){self=$(e.currentTarget).data('bs.'+this.type);if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions());$(e.currentTarget).data('bs.'+this.type,self);}}if(e){self.inState.click=!self.inState.click;if(self.isInStateTrue())self.enter(self);else self.leave(self);}else{self.tip().hasClass('in')?self.leave(self):self.enter(self);}};Tooltip.prototype.destroy=function(){var that=this;clearTimeout(this.timeout);this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type);if(that.$tip){that.$tip.detach();}that.$tip=null;that.$arrow=null;that.$viewport=null;that.$element=null;});};// TOOLTIP PLUGIN DEFINITION
// =========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.tooltip');var options=_typeof(option)=='object'&&option;if(!data&&/destroy|hide/.test(option))return;if(!data)$this.data('bs.tooltip',data=new Tooltip(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.tooltip;$.fn.tooltip=Plugin;$.fn.tooltip.Constructor=Tooltip;// TOOLTIP NO CONFLICT
// ===================
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old;return this;};}(jQuery);/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// POPOVER PUBLIC CLASS DEFINITION
// ===============================
var Popover=function Popover(element,options){this.init('popover',element,options);};if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js');Popover.VERSION='3.3.7';Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});// NOTE: POPOVER EXTENDS tooltip.js
// ================================
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype);Popover.prototype.constructor=Popover;Popover.prototype.getDefaults=function(){return Popover.DEFAULTS;};Popover.prototype.setContent=function(){var $tip=this.tip();var title=this.getTitle();var content=this.getContent();$tip.find('.popover-title')[this.options.html?'html':'text'](title);$tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
this.options.html?typeof content=='string'?'html':'append':'text'](content);$tip.removeClass('fade top bottom left right in');// IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
// this manually by checking the contents.
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide();};Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent();};Popover.prototype.getContent=function(){var $e=this.$element;var o=this.options;return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content);};Popover.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.arrow');};// POPOVER PLUGIN DEFINITION
// =========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.popover');var options=_typeof(option)=='object'&&option;if(!data&&/destroy|hide/.test(option))return;if(!data)$this.data('bs.popover',data=new Popover(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.popover;$.fn.popover=Plugin;$.fn.popover.Constructor=Popover;// POPOVER NO CONFLICT
// ===================
$.fn.popover.noConflict=function(){$.fn.popover=old;return this;};}(jQuery);/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// SCROLLSPY CLASS DEFINITION
// ==========================
function ScrollSpy(element,options){this.$body=$(document.body);this.$scrollElement=$(element).is(document.body)?$(window):$(element);this.options=$.extend({},ScrollSpy.DEFAULTS,options);this.selector=(this.options.target||'')+' .nav li > a';this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this));this.refresh();this.process();}ScrollSpy.VERSION='3.3.7';ScrollSpy.DEFAULTS={offset:10};ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight);};ScrollSpy.prototype.refresh=function(){var that=this;var offsetMethod='offset';var offsetBase=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position';offsetBase=this.$scrollElement.scrollTop();}this.$body.find(this.selector).map(function(){var $el=$(this);var href=$el.data('target')||$el.attr('href');var $href=/^#./.test(href)&&$(href);return $href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]]||null;}).sort(function(a,b){return a[0]-b[0];}).each(function(){that.offsets.push(this[0]);that.targets.push(this[1]);});};ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset;var scrollHeight=this.getScrollHeight();var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height();var offsets=this.offsets;var targets=this.targets;var activeTarget=this.activeTarget;var i;if(this.scrollHeight!=scrollHeight){this.refresh();}if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i);}if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null;return this.clear();}for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i]);}};ScrollSpy.prototype.activate=function(target){this.activeTarget=target;this.clear();var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]';var active=$(selector).parents('li').addClass('active');if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active');}active.trigger('activate.bs.scrollspy');};ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active');};// SCROLLSPY PLUGIN DEFINITION
// ===========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.scrollspy');var options=_typeof(option)=='object'&&option;if(!data)$this.data('bs.scrollspy',data=new ScrollSpy(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.scrollspy;$.fn.scrollspy=Plugin;$.fn.scrollspy.Constructor=ScrollSpy;// SCROLLSPY NO CONFLICT
// =====================
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old;return this;};// SCROLLSPY DATA-API
// ==================
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);Plugin.call($spy,$spy.data());});});}(jQuery);/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// TAB CLASS DEFINITION
// ====================
var Tab=function Tab(element){// jscs:disable requireDollarBeforejQueryAssignment
this.element=$(element);// jscs:enable requireDollarBeforejQueryAssignment
};Tab.VERSION='3.3.7';Tab.TRANSITION_DURATION=150;Tab.prototype.show=function(){var $this=this.element;var $ul=$this.closest('ul:not(.dropdown-menu)');var selector=$this.data('target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'');// strip for ie7
}if($this.parent('li').hasClass('active'))return;var $previous=$ul.find('.active:last a');var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]});var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]});$previous.trigger(hideEvent);$this.trigger(showEvent);if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return;var $target=$(selector);this.activate($this.closest('li'),$ul);this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]});$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]});});};Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active');var transition=callback&&$.support.transition&&($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length);function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false);element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true);if(transition){element[0].offsetWidth;// reflow for transition
element.addClass('in');}else{element.removeClass('fade');}if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true);}callback&&callback();}$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next();$active.removeClass('in');};// TAB PLUGIN DEFINITION
// =====================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.tab');if(!data)$this.data('bs.tab',data=new Tab(this));if(typeof option=='string')data[option]();});}var old=$.fn.tab;$.fn.tab=Plugin;$.fn.tab.Constructor=Tab;// TAB NO CONFLICT
// ===============
$.fn.tab.noConflict=function(){$.fn.tab=old;return this;};// TAB DATA-API
// ============
var clickHandler=function clickHandler(e){e.preventDefault();Plugin.call($(this),'show');};$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler);}(jQuery);/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// AFFIX CLASS DEFINITION
// ======================
var Affix=function Affix(element,options){this.options=$.extend({},Affix.DEFAULTS,options);this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this));this.$element=$(element);this.affixed=null;this.unpin=null;this.pinnedOffset=null;this.checkPosition();};Affix.VERSION='3.3.7';Affix.RESET='affix affix-top affix-bottom';Affix.DEFAULTS={offset:0,target:window};Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop();var position=this.$element.offset();var targetHeight=this.$target.height();if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false;if(this.affixed=='bottom'){if(offsetTop!=null)return scrollTop+this.unpin<=position.top?false:'bottom';return scrollTop+targetHeight<=scrollHeight-offsetBottom?false:'bottom';}var initializing=this.affixed==null;var colliderTop=initializing?scrollTop:position.top;var colliderHeight=initializing?targetHeight:height;if(offsetTop!=null&&scrollTop<=offsetTop)return'top';if(offsetBottom!=null&&colliderTop+colliderHeight>=scrollHeight-offsetBottom)return'bottom';return false;};Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(Affix.RESET).addClass('affix');var scrollTop=this.$target.scrollTop();var position=this.$element.offset();return this.pinnedOffset=position.top-scrollTop;};Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1);};Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return;var height=this.$element.height();var offset=this.options.offset;var offsetTop=offset.top;var offsetBottom=offset.bottom;var scrollHeight=Math.max($(document).height(),$(document.body).height());if(_typeof(offset)!='object')offsetBottom=offsetTop=offset;if(typeof offsetTop=='function')offsetTop=offset.top(this.$element);if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element);var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom);if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','');var affixType='affix'+(affix?'-'+affix:'');var e=$.Event(affixType+'.bs.affix');this.$element.trigger(e);if(e.isDefaultPrevented())return;this.affixed=affix;this.unpin=affix=='bottom'?this.getPinnedOffset():null;this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix');}if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom});}};// AFFIX PLUGIN DEFINITION
// =======================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.affix');var options=_typeof(option)=='object'&&option;if(!data)$this.data('bs.affix',data=new Affix(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.affix;$.fn.affix=Plugin;$.fn.affix.Constructor=Affix;// AFFIX NO CONFLICT
// =================
$.fn.affix.noConflict=function(){$.fn.affix=old;return this;};// AFFIX DATA-API
// ==============
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this);var data=$spy.data();data.offset=data.offset||{};if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom;if(data.offsetTop!=null)data.offset.top=data.offsetTop;Plugin.call($spy,data);});});}(jQuery);/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */(function(factory){if(typeof define==="function"&&define.amd){// AMD. Register as an anonymous module.
define(["jquery"],factory);}else{// Browser globals
factory(jQuery);}})(function($){$.ui=$.ui||{};var version=$.ui.version="1.12.1";/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/
var widgetUuid=0;var widgetSlice=Array.prototype.slice;$.cleanData=function(orig){return function(elems){var events,elem,i;for(i=0;(elem=elems[i])!=null;i++){try{// Only trigger remove when necessary to save time
events=$._data(elem,"events");if(events&&events.remove){$(elem).triggerHandler("remove");}// Http://bugs.jquery.com/ticket/8235
}catch(e){}}orig(elems);};}($.cleanData);$.widget=function(name,base,prototype){var existingConstructor,constructor,basePrototype;// ProxiedPrototype allows the provided prototype to remain unmodified
// so that it can be used as a mixin for multiple widgets (#8876)
var proxiedPrototype={};var namespace=name.split(".")[0];name=name.split(".")[1];var fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}if($.isArray(prototype)){prototype=$.extend.apply(null,[{}].concat(prototype));}// Create selector for plugin
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){// Allow instantiation without "new" keyword
if(!this._createWidget){return new constructor(options,element);}// Allow instantiation without initializing for simple inheritance
// must use "new" keyword (the code above always passes args)
if(arguments.length){this._createWidget(options,element);}};// Extend with the existing constructor to carry over any static properties
$.extend(constructor,existingConstructor,{version:prototype.version,// Copy the object used to create the prototype in case we need to
// redefine the widget later
_proto:$.extend({},prototype),// Track widgets that inherit from this widget in case this widget is
// redefined after a widget inherits from it
_childConstructors:[]});basePrototype=new base();// We need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return;}proxiedPrototype[prop]=function(){function _super(){return base.prototype[prop].apply(this,arguments);}function _superApply(args){return base.prototype[prop].apply(this,args);}return function(){var __super=this._super;var __superApply=this._superApply;var returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};}();});constructor.prototype=$.widget.extend(basePrototype,{// TODO: remove support for widgetEventPrefix
// always use the name + a colon as the prefix, e.g., draggable:start
// don't prefix for widgets that aren't DOM-based
widgetEventPrefix:existingConstructor?basePrototype.widgetEventPrefix||name:name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;// Redefine the child widget using the same prototype that was
// originally used, but inherit from the new version of the base
$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});// Remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}$.widget.bridge(name,constructor);return constructor;};$.widget.extend=function(target){var input=widgetSlice.call(arguments,1);var inputIndex=0;var inputLength=input.length;var key;var value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){// Clone objects
if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):// Don't extend strings, arrays, etc. with objects
$.widget.extend({},value);// Copy everything else by reference
}else{target[key]=value;}}}}return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string";var args=widgetSlice.call(arguments,1);var returnValue=this;if(isMethodCall){// If this is an empty collection, we need to have the instance method
// return undefined instead of the jQuery instance
if(!this.length&&options==="instance"){returnValue=undefined;}else{this.each(function(){var methodValue;var instance=$.data(this,fullName);if(options==="instance"){returnValue=instance;return false;}if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}}else{// Allow multiple hashes to be passed on init
if(args.length){options=$.widget.extend.apply(null,[options].concat(args));}this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{});if(instance._init){instance._init();}}else{$.data(this,fullName,new object(options,this));}});}return returnValue;};};$.Widget=function()/* options, element */{};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,// Callbacks
create:null},_createWidget:function _createWidget(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=widgetUuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=$();this.hoverable=$();this.focusable=$();this.classesElementLookup={};if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function remove(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?// Element within the document
element.ownerDocument:// Element is window or document
element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this._create();if(this.options.disabled){this._setOptionDisabled(this.options.disabled);}this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:function _getCreateOptions(){return{};},_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function destroy(){var that=this;this._destroy();$.each(this.classesElementLookup,function(key,value){that._removeClass(value,key);});// We can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.off(this.eventNamespace).removeData(this.widgetFullName);this.widget().off(this.eventNamespace).removeAttr("aria-disabled");// Clean up events and states
this.bindings.off(this.eventNamespace);},_destroy:$.noop,widget:function widget(){return this.element;},option:function option(key,value){var options=key;var parts;var curOption;var i;if(arguments.length===0){// Don't return a reference to the internal hash
return $.widget.extend({},this.options);}if(typeof key==="string"){// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key];}curOption[key]=value;}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key];}options[key]=value;}}this._setOptions(options);return this;},_setOptions:function _setOptions(options){var key;for(key in options){this._setOption(key,options[key]);}return this;},_setOption:function _setOption(key,value){if(key==="classes"){this._setOptionClasses(value);}this.options[key]=value;if(key==="disabled"){this._setOptionDisabled(value);}return this;},_setOptionClasses:function _setOptionClasses(value){var classKey,elements,currentElements;for(classKey in value){currentElements=this.classesElementLookup[classKey];if(value[classKey]===this.options.classes[classKey]||!currentElements||!currentElements.length){continue;}// We are doing this to create a new jQuery object because the _removeClass() call
// on the next line is going to destroy the reference to the current elements being
// tracked. We need to save a copy of this collection so that we can add the new classes
// below.
elements=$(currentElements.get());this._removeClass(currentElements,classKey);// We don't use _addClass() here, because that uses this.options.classes
// for generating the string of classes. We want to use the value passed in from
// _setOption(), this is the new value of the classes option which was passed to
// _setOption(). We pass this value directly to _classes().
elements.addClass(this._classes({element:elements,keys:classKey,classes:value,add:true}));}},_setOptionDisabled:function _setOptionDisabled(value){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!value);// If the widget is becoming disabled, then nothing is interactive
if(value){this._removeClass(this.hoverable,null,"ui-state-hover");this._removeClass(this.focusable,null,"ui-state-focus");}},enable:function enable(){return this._setOptions({disabled:false});},disable:function disable(){return this._setOptions({disabled:true});},_classes:function _classes(options){var full=[];var that=this;options=$.extend({element:this.element,classes:this.options.classes||{}},options);function processClassString(classes,checkOption){var current,i;for(i=0;i<classes.length;i++){current=that.classesElementLookup[classes[i]]||$();if(options.add){current=$($.unique(current.get().concat(options.element.get())));}else{current=$(current.not(options.element).get());}that.classesElementLookup[classes[i]]=current;full.push(classes[i]);if(checkOption&&options.classes[classes[i]]){full.push(options.classes[classes[i]]);}}}this._on(options.element,{"remove":"_untrackClassesElement"});if(options.keys){processClassString(options.keys.match(/\S+/g)||[],true);}if(options.extra){processClassString(options.extra.match(/\S+/g)||[]);}return full.join(" ");},_untrackClassesElement:function _untrackClassesElement(event){var that=this;$.each(that.classesElementLookup,function(key,value){if($.inArray(event.target,value)!==-1){that.classesElementLookup[key]=$(value.not(event.target).get());}});},_removeClass:function _removeClass(element,keys,extra){return this._toggleClass(element,keys,extra,false);},_addClass:function _addClass(element,keys,extra){return this._toggleClass(element,keys,extra,true);},_toggleClass:function _toggleClass(element,keys,extra,add){add=typeof add==="boolean"?add:extra;var shift=typeof element==="string"||element===null,options={extra:shift?keys:extra,keys:shift?element:keys,element:shift?this.element:element,add:add};options.element.toggleClass(this._classes(options),add);return this;},_on:function _on(suppressDisabledCheck,element,handlers){var delegateElement;var instance=this;// No suppressDisabledCheck flag, shuffle arguments
if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}// No element argument, shuffle and use this.element
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}$.each(handlers,function(event,handler){function handlerProxy(){// Allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}// Copy the guid so direct unbinding works
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}var match=event.match(/^([\w:-]*)\s*(.*)$/);var eventName=match[1]+instance.eventNamespace;var selector=match[2];if(selector){delegateElement.on(eventName,selector,handlerProxy);}else{element.on(eventName,handlerProxy);}});},_off:function _off(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.off(eventName).off(eventName);// Clear the stack to avoid memory leaks (#10056)
this.bindings=$(this.bindings.not(element).get());this.focusable=$(this.focusable.not(element).get());this.hoverable=$(this.hoverable.not(element).get());},_delay:function _delay(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function _hoverable(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function mouseenter(event){this._addClass($(event.currentTarget),null,"ui-state-hover");},mouseleave:function mouseleave(event){this._removeClass($(event.currentTarget),null,"ui-state-hover");}});},_focusable:function _focusable(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function focusin(event){this._addClass($(event.currentTarget),null,"ui-state-focus");},focusout:function focusout(event){this._removeClass($(event.currentTarget),null,"ui-state-focus");}});},_trigger:function _trigger(type,event,data){var prop,orig;var callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();// The original event may come from any element
// so we need to reset the target on the new event
event.target=this.element[0];// Copy original event properties over to the new event
orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}var hasOptions;var effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}next();});}};});var widget=$.widget;/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */ //>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/
(function(){var cachedScrollbarWidth,max=Math.max,abs=Math.abs,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)];}function parseCss(element,property){return parseInt($.css(element,property),10)||0;}function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}$.position={scrollbarWidth:function scrollbarWidth(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}var w1,w2,div=$("<div "+"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>"+"<div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}div.remove();return cachedScrollbarWidth=w1-w2;},getScrollInfo:function getScrollInfo(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||overflowX==="auto"&&within.width<within.element[0].scrollWidth,hasOverflowY=overflowY==="scroll"||overflowY==="auto"&&within.height<within.element[0].scrollHeight;return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo:function getWithinInfo(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]),isDocument=!!withinElement[0]&&withinElement[0].nodeType===9,hasOffset=!isWindow&&!isDocument;return{element:withinElement,isWindow:isWindow,isDocument:isDocument,offset:hasOffset?$(element).offset():{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:withinElement.outerWidth(),height:withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}// Make a copy, we don't want to modify arguments
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){// Force left top to allow flipping
options.at="left top";}targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;// Clone to reuse original targetOffset later
basePosition=$.extend({},targetOffset);// Force my and at to have valid horizontal and vertical positions
// if a value is missing or invalid, it will be converted to center
$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";// Calculate offsets
horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];// Reduce to just the positions without the offsets
options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});// Normalize collision option
if(collision.length===1){collision[1]=collision[0];}if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2;}if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2;}atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth/2;}if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight/2;}position.left+=myOffset[0];position.top+=myOffset[1];collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){// Adds feedback as second argument to using callback, if present
using=function using(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}options.using.call(this,props,feedback);};}elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function left(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;// Element is wider than within
if(data.collisionWidth>outerWidth){// Element is initially over the left side of within
if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight;// Element is initially over right side of within
}else if(overRight>0&&overLeft<=0){position.left=withinOffset;// Element is initially over both left and right sides of within
}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}// Too far left -> align with left edge
}else if(overLeft>0){position.left+=overLeft;// Too far right -> align with right edge
}else if(overRight>0){position.left-=overRight;// Adjust based on position and margin
}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function top(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;// Element is taller than within
if(data.collisionHeight>outerHeight){// Element is initially over the top of within
if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom;// Element is initially over bottom of within
}else if(overBottom>0&&overTop<=0){position.top=withinOffset;// Element is initially over both top and bottom of within
}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}// Too far up -> align with top
}else if(overTop>0){position.top+=overTop;// Too far down -> align with bottom edge
}else if(overBottom>0){position.top-=overBottom;// Adjust based on position and margin
}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function left(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function top(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop)){position.top+=myOffset+atOffset+offset;}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function left(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function top(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};})();var position=$.ui.position;/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/
var data=$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):// Support: jQuery <1.8
function(elem,i,match){return!!$.data(elem,match[3]);}});/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: disableSelection
//>>group: Core
//>>description: Disable selection of text content within the set of matched elements.
//>>docs: http://api.jqueryui.com/disableSelection/
// This file is deprecated
var disableSelection=$.fn.extend({disableSelection:function(){var eventType="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(eventType+".ui-disableSelection",function(event){event.preventDefault();});};}(),enableSelection:function enableSelection(){return this.off(".ui-disableSelection");}});/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Effects Core
//>>group: Effects
// jscs:disable maximumLineLength
//>>description: Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/category/effects-core/
//>>demos: http://jqueryui.com/effect/
var dataSpace="ui-effects-",dataSpaceStyle="ui-effects-style",dataSpaceAnimated="ui-effects-animated",// Create a local jQuery because jQuery Color relies on it and the
// global may not exist with AMD and a custom build (#10199)
jQuery=$;$.effects={effect:{}};/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor "+"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",// Plusequals test for += 100 -= 100
rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,// A set of RE's that can match strings and generate color tuples.
stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function parse(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]];}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function parse(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]];}},{// This regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function parse(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)];}},{// This regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function parse(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)];}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function parse(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]];}}],// JQuery.Color( )
color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha);},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:true,max:255},"percent":{max:1},"degrees":{mod:360,floor:true}},support=color.support={},// Element for support tests
supportElem=jQuery("<p>")[0],// Colors = jQuery.Color.names
colors,// Local aliases of functions called often
each=jQuery.each;// Determine rgba support immediately
supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;// Define cache name and alpha properties
// for rgba and hsla spaces
each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1};});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return allowEmpty||!prop.def?null:prop.def;}// ~~ is an short way of doing floor for positive numbers
value=type.floor?~~value:parseFloat(value);// IE will pass in empty strings as value for alpha,
// which will hit this case
if(isNaN(value)){return prop.def;}if(type.mod){// We add mod before modding to make sure that negatives values
// get converted properly: -10 -> 350
return(value+type.mod)%type.mod;}// For now all property types without mod have min and max
return 0>value?0:type.max<value?type.max:value;}function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);// If this was an rgba parse the assignment might happen twice
// oh well....
inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;// Exit each( stringParsers ) here because we matched
return false;}});// Found a stringParser that handled it
if(rgba.length){// If this came from a parsed string, force "transparent" when alpha is 0
// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent);}return inst;}// Named colors
return colors[string];}color.fn=jQuery.extend(color.prototype,{parse:function parse(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this;}if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined;}var inst=this,type=jQuery.type(red),rgba=this._rgba=[];// More than 1 argument specified - assume ( red, green, blue, alpha )
if(green!==undefined){red=[red,green,blue,alpha];type="array";}if(type==="string"){return this.parse(stringParse(red)||colors._default);}if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop);});return this;}if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice();}});}else{each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){// If the cache doesn't exist, and we know how to convert
if(!inst[cache]&&space.to){// If the value was null, we don't need to copy it
// if the key was alpha, we don't need to copy it either
if(key==="alpha"||red[key]==null){return;}inst[cache]=space.to(inst._rgba);}// This is the only case where we allow nulls for ALL properties.
// call clamp with alwaysAllowEmpty
inst[cache][prop.idx]=clamp(red[key],prop,true);});// Everything defined but alpha?
if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){// Use the default of 1
inst[cache][3]=1;if(space.from){inst._rgba=space.from(inst[cache]);}}});}return this;}},is:function is(compare){var is=color(compare),same=true,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=isCache[prop.idx]===localCache[prop.idx];return same;}});}return same;});return same;},_space:function _space(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName);}});return used.pop();},transition:function transition(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};// If null, don't override start value
if(endValue===null){return;}// If null - use end
if(startValue===null){result[index]=endValue;}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod;}else if(startValue-endValue>type.mod/2){startValue-=type.mod;}}result[index]=clamp((endValue-startValue)*distance+startValue,prop);}});return this[spaceName](result);},blend:function blend(opaque){// If we are already opaque - return ourself
if(this._rgba[3]===1){return this;}var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v;}));},toRgbaString:function toRgbaString(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?i>2?1:0:v;});if(rgba[3]===1){rgba.pop();prefix="rgb(";}return prefix+rgba.join()+")";},toHslaString:function toHslaString(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0;}// Catch 1 and 2
if(i&&i<3){v=Math.round(v*100)+"%";}return v;});if(hsla[3]===1){hsla.pop();prefix="hsl(";}return prefix+hsla.join()+")";},toHexString:function toHexString(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255));}return"#"+jQuery.map(rgba,function(v){// Default to 0 when nulls exist
v=(v||0).toString(16);return v.length===1?"0"+v:v;}).join("");},toString:function toString(){return this._rgba[3]===0?"transparent":this.toRgbaString();}});color.fn.parse.prototype=color.fn;// Hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021
function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6;}if(h*2<1){return q;}if(h*3<2){return p+(q-p)*(2/3-h)*6;}return p;}spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]];}var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0;}else if(r===max){h=60*(g-b)/diff+360;}else if(g===max){h=60*(b-r)/diff+120;}else{h=60*(r-g)/diff+240;}// Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
if(diff===0){s=0;}else if(l<=0.5){s=diff/add;}else{s=diff/(2-add);}return[Math.round(h)%360,s,l,a==null?1:a];};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]];}var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+1/3)*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-1/3)*255),a];};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;// Makes rgba() and hsla()
color.fn[spaceName]=function(value){// Generate a cache for this space if it doesn't exist
if(to&&!this[cache]){this[cache]=to(this._rgba);}if(value===undefined){return this[cache].slice();}var ret,type=jQuery.type(value),arr=type==="array"||type==="object"?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx];}local[prop.idx]=clamp(val,prop);});if(from){ret=color(from(local));ret[cache]=local;return ret;}else{return color(local);}};// Makes red() green() blue() alpha() hue() saturation() lightness()
each(props,function(key,prop){// Alpha is included in more than one space
if(color.fn[key]){return;}color.fn[key]=function(value){var vtype=jQuery.type(value),fn=key==="alpha"?this._hsla?"hsla":"rgba":spaceName,local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined"){return cur;}if(vtype==="function"){value=value.call(this,cur);vtype=jQuery.type(value);}if(value==null&&prop.empty){return this;}if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1);}}local[prop.idx]=value;return this[fn](local);};});});// Add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function set(elem,value){var parsed,curElem,backgroundColor="";if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode;}catch(e){}}value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default");}value=value.toRgbaString();}try{elem.style[hook]=value;}catch(e){// Wrapped to prevent IE from throwing errors on "invalid" values like
// 'auto' or 'inherit'
}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=true;}jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos));};});};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function expand(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value;});return expanded;}};// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors=jQuery.Color.names={// 4.1. Basic color keywords
aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",// 4.2.3. "transparent" color keyword
transparent:[null,null,null,0],_default:"#ffffff"};})(jQuery);/******************************************************************************/ /****************************** CLASS ANIMATIONS ******************************/ /******************************************************************************/(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=true;}};});function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){styles[$.camelCase(key)]=style[key];}}// Support: Opera, IE <9
}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key];}}}return styles;}function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value;}}}}return diff;}// Support: jQuery <1.8
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;// Map the animated objects to store the original styles.
allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)};});// Apply class change
applyClassChange=function applyClassChange(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action]);}});};applyClassChange();// Map all animated objects again - calculate new styles and diff
allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);this.diff=styleDifference(this.start,this.end);return this;});// Apply original class
animated.attr("class",baseClass);// Map all animated objects again - this time collecting a promise
allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:false,complete:function complete(){dfd.resolve(styleInfo);}});this.el.animate(this.diff,opts);return dfd.promise();});// Once all animations have completed:
$.when.apply($,allAnimations.get()).done(function(){// Set the final class
applyClassChange();// For each animated element,
// clear all css properties that were animated
$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"");});});// This is guarnteed to be there if you use jQuery.speed()
// it also handles dequeuing the next anim...
o.complete.call(animated[0]);});});};$.fn.extend({addClass:function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments);};}($.fn.addClass),removeClass:function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments);};}($.fn.removeClass),toggleClass:function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){// Without speed parameter
return orig.apply(this,arguments);}else{return $.effects.animateClass.call(this,force?{add:classNames}:{remove:classNames},speed,easing,callback);}}else{// Without force parameter
return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing);}};}($.fn.toggleClass),switchClass:function switchClass(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback);}});})();/******************************************************************************/ /*********************************** EFFECTS **********************************/ /******************************************************************************/(function(){if($.expr&&$.expr.filters&&$.expr.filters.animated){$.expr.filters.animated=function(orig){return function(elem){return!!$(elem).data(dataSpaceAnimated)||orig(elem);};}($.expr.filters.animated);}if($.uiBackCompat!==false){$.extend($.effects,{// Saves a set of properties in a data storage
save:function save(element,set){var i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]]);}}},// Restores a set of previously saved properties from a data storage
restore:function restore(element,set){var val,i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);element.css(set[i],val);}}},setMode:function setMode(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide";}return mode;},// Wraps the element around a wrapper that copies position properties
createWrapper:function createWrapper(element){// If the element is already wrapped, return it
if(element.parent().is(".ui-effects-wrapper")){return element.parent();}// Wrap the element
var props={width:element.outerWidth(true),height:element.outerHeight(true),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),// Store the size in case width/height are defined in % - Fixes #5245
size={width:element.width(),height:element.height()},active=document.activeElement;// Support: Firefox
// Firefox incorrectly exposes anonymous content
// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
try{active.id;}catch(e){active=document.body;}element.wrap(wrapper);// Fixes #7595 - Elements lose focus when wrapped.
if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus");}// Hotfix for jQuery 1.4 since some change in wrap() seems to actually
// lose the reference to the wrapped element
wrapper=element.parent();// Transfer positioning properties to the wrapper
if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"});}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto";}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"});}element.css(size);return wrapper.css(props).show();},removeWrapper:function removeWrapper(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);// Fixes #7595 - Elements lose focus when wrapped.
if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus");}}return element;}});}$.extend($.effects,{version:"1.12.1",define:function define(name,mode,effect){if(!effect){effect=mode;mode="effect";}$.effects.effect[name]=effect;$.effects.effect[name].mode=mode;return effect;},scaledDimensions:function scaledDimensions(element,percent,direction){if(percent===0){return{height:0,width:0,outerHeight:0,outerWidth:0};}var x=direction!=="horizontal"?(percent||100)/100:1,y=direction!=="vertical"?(percent||100)/100:1;return{height:element.height()*y,width:element.width()*x,outerHeight:element.outerHeight()*y,outerWidth:element.outerWidth()*x};},clipToBox:function clipToBox(animation){return{width:animation.clip.right-animation.clip.left,height:animation.clip.bottom-animation.clip.top,left:animation.clip.left,top:animation.clip.top};},// Injects recently queued functions to be first in line (after "inprogress")
unshift:function unshift(element,queueLength,count){var queue=element.queue();if(queueLength>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queueLength,count)));}element.dequeue();},saveStyle:function saveStyle(element){element.data(dataSpaceStyle,element[0].style.cssText);},restoreStyle:function restoreStyle(element){element[0].style.cssText=element.data(dataSpaceStyle)||"";element.removeData(dataSpaceStyle);},mode:function mode(element,_mode){var hidden=element.is(":hidden");if(_mode==="toggle"){_mode=hidden?"show":"hide";}if(hidden?_mode==="hide":_mode==="show"){_mode="none";}return _mode;},// Translates a [top,left] array into a baseline value
getBaseline:function getBaseline(origin,original){var y,x;switch(origin[0]){case"top":y=0;break;case"middle":y=0.5;break;case"bottom":y=1;break;default:y=origin[0]/original.height;}switch(origin[1]){case"left":x=0;break;case"center":x=0.5;break;case"right":x=1;break;default:x=origin[1]/original.width;}return{x:x,y:y};},// Creates a placeholder element so that the original element can be made absolute
createPlaceholder:function createPlaceholder(element){var placeholder,cssPosition=element.css("position"),position=element.position();// Lock in margins first to account for form elements, which
// will change margin if you explicitly set height
// see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
// Support: Safari
element.css({marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());if(/^(static|relative)/.test(cssPosition)){cssPosition="absolute";placeholder=$("<"+element[0].nodeName+">").insertAfter(element).css({// Convert inline to inline block to account for inline elements
// that turn to inline block based on content (like img)
display:/^(inline|ruby)/.test(element.css("display"))?"inline-block":"block",visibility:"hidden",// Margins need to be set to account for margin collapse
marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight"),"float":element.css("float")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");element.data(dataSpace+"placeholder",placeholder);}element.css({position:cssPosition,left:position.left,top:position.top});return placeholder;},removePlaceholder:function removePlaceholder(element){var dataKey=dataSpace+"placeholder",placeholder=element.data(dataKey);if(placeholder){placeholder.remove();element.removeData(dataKey);}},// Removes a placeholder if it exists and restores
// properties that were modified during placeholder creation
cleanUp:function cleanUp(element){$.effects.restoreStyle(element);$.effects.removePlaceholder(element);},setTransition:function setTransition(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1];}});return value;}});// Return an effect options object for the given parameters:
function _normalizeArguments(effect,options,speed,callback){// Allow passing all options as the first parameter
if($.isPlainObject(effect)){options=effect;effect=effect.effect;}// Convert to an object
effect={effect:effect};// Catch (effect, null, ...)
if(options==null){options={};}// Catch (effect, callback)
if($.isFunction(options)){callback=options;speed=null;options={};}// Catch (effect, speed, ?)
if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={};}// Catch (effect, options, callback)
if($.isFunction(speed)){callback=speed;speed=null;}// Add options to effect
if(options){$.extend(effect,options);}speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect;}function standardAnimationOption(option){// Valid standard speeds (nothing, number, named speed)
if(!option||typeof option==="number"||$.fx.speeds[option]){return true;}// Invalid strings - treat as "normal" speed
if(typeof option==="string"&&!$.effects.effect[option]){return true;}// Complete callback
if($.isFunction(option)){return true;}// Options hash (but not naming an effect)
if(_typeof(option)==="object"&&!option.effect){return true;}// Didn't match any standard API
return false;}$.fn.extend({effect:function effect()/* effect, options, speed, callback */{var args=_normalizeArguments.apply(this,arguments),effectMethod=$.effects.effect[args.effect],defaultMode=effectMethod.mode,queue=args.queue,queueName=queue||"fx",complete=args.complete,mode=args.mode,modes=[],prefilter=function prefilter(next){var el=$(this),normalizedMode=$.effects.mode(el,mode)||defaultMode;// Sentinel for duck-punching the :animated psuedo-selector
el.data(dataSpaceAnimated,true);// Save effect mode for later use,
// we can't just call $.effects.mode again later,
// as the .show() below destroys the initial state
modes.push(normalizedMode);// See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
if(defaultMode&&(normalizedMode==="show"||normalizedMode===defaultMode&&normalizedMode==="hide")){el.show();}if(!defaultMode||normalizedMode!=="none"){$.effects.saveStyle(el);}if($.isFunction(next)){next();}};if($.fx.off||!effectMethod){// Delegate to the original method (e.g., .show()) if possible
if(mode){return this[mode](args.duration,complete);}else{return this.each(function(){if(complete){complete.call(this);}});}}function run(next){var elem=$(this);function cleanup(){elem.removeData(dataSpaceAnimated);$.effects.cleanUp(elem);if(args.mode==="hide"){elem.hide();}done();}function done(){if($.isFunction(complete)){complete.call(elem[0]);}if($.isFunction(next)){next();}}// Override mode option on a per element basis,
// as toggle can be either show or hide depending on element state
args.mode=modes.shift();if($.uiBackCompat!==false&&!defaultMode){if(elem.is(":hidden")?mode==="hide":mode==="show"){// Call the core method to track "olddisplay" properly
elem[mode]();done();}else{effectMethod.call(elem[0],args,done);}}else{if(args.mode==="none"){// Call the core method to track "olddisplay" properly
elem[mode]();done();}else{effectMethod.call(elem[0],args,cleanup);}}}// Run prefilter on all elements first to ensure that
// any showing or hiding happens before placeholder creation,
// which ensures that any layout changes are correctly captured.
return queue===false?this.each(prefilter).each(run):this.queue(queueName,prefilter).queue(queueName,run);},show:function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args);}};}($.fn.show),hide:function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args);}};}($.fn.hide),toggle:function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args);}};}($.fn.toggle),cssUnit:function cssUnit(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit];}});return val;},cssClip:function cssClip(clipObj){if(clipObj){return this.css("clip","rect("+clipObj.top+"px "+clipObj.right+"px "+clipObj.bottom+"px "+clipObj.left+"px)");}return parseClip(this.css("clip"),this);},transfer:function transfer(options,done){var element=$(this),target=$(options.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=element.offset(),transfer=$("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:element.innerHeight(),width:element.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,options.duration,options.easing,function(){transfer.remove();if($.isFunction(done)){done();}});}});function parseClip(str,element){var outerWidth=element.outerWidth(),outerHeight=element.outerHeight(),clipRegex=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,values=clipRegex.exec(str)||["",0,outerWidth,outerHeight,0];return{top:parseFloat(values[1])||0,right:values[2]==="auto"?outerWidth:parseFloat(values[2]),bottom:values[3]==="auto"?outerHeight:parseFloat(values[3]),left:parseFloat(values[4])||0};}$.fx.step.clip=function(fx){if(!fx.clipInit){fx.start=$(fx.elem).cssClip();if(typeof fx.end==="string"){fx.end=parseClip(fx.end,fx.elem);}fx.clipInit=true;}$(fx.elem).cssClip({top:fx.pos*(fx.end.top-fx.start.top)+fx.start.top,right:fx.pos*(fx.end.right-fx.start.right)+fx.start.right,bottom:fx.pos*(fx.end.bottom-fx.start.bottom)+fx.start.bottom,left:fx.pos*(fx.end.left-fx.start.left)+fx.start.left});};})();/******************************************************************************/ /*********************************** EASING ***********************************/ /******************************************************************************/(function(){// Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)
var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2);};});$.extend(baseEasings,{Sine:function Sine(p){return 1-Math.cos(p*Math.PI/2);},Circ:function Circ(p){return 1-Math.sqrt(1-p*p);},Elastic:function Elastic(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15);},Back:function Back(p){return p*p*(3*p-2);},Bounce:function Bounce(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2);}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p);};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2;};});})();var effect=$.effects;/*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Blind Effect
//>>group: Effects
//>>description: Blinds the element.
//>>docs: http://api.jqueryui.com/blind-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectBlind=$.effects.define("blind","hide",function(options,done){var map={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},element=$(this),direction=options.direction||"up",start=element.cssClip(),animate={clip:$.extend({},start)},placeholder=$.effects.createPlaceholder(element);animate.clip[map[direction][0]]=animate.clip[map[direction][1]];if(options.mode==="show"){element.cssClip(animate.clip);if(placeholder){placeholder.css($.effects.clipToBox(animate));}animate.clip=start;}if(placeholder){placeholder.animate($.effects.clipToBox(animate),options.duration,options.easing);}element.animate(animate,{queue:false,duration:options.duration,easing:options.easing,complete:done});});/*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Bounce Effect
//>>group: Effects
//>>description: Bounces an element horizontally or vertically n times.
//>>docs: http://api.jqueryui.com/bounce-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectBounce=$.effects.define("bounce",function(options,done){var upAnim,downAnim,refValue,element=$(this),// Defaults:
mode=options.mode,hide=mode==="hide",show=mode==="show",direction=options.direction||"up",distance=options.distance,times=options.times||5,// Number of internal animations
anims=times*2+(show||hide?1:0),speed=options.duration/anims,easing=options.easing,// Utility:
ref=direction==="up"||direction==="down"?"top":"left",motion=direction==="up"||direction==="left",i=0,queuelen=element.queue().length;$.effects.createPlaceholder(element);refValue=element.css(ref);// Default distance for the BIGGEST bounce is the outer Distance / 3
if(!distance){distance=element[ref==="top"?"outerHeight":"outerWidth"]()/3;}if(show){downAnim={opacity:1};downAnim[ref]=refValue;// If we are showing, force opacity 0 and set the initial position
// then do the "first" animation
element.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing);}// Start at the smallest distance if we are hiding
if(hide){distance=distance/Math.pow(2,times-1);}downAnim={};downAnim[ref]=refValue;// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
for(;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance/2;}// Last Bounce when Hiding
if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing);}element.queue(done);$.effects.unshift(element,queuelen,anims+1);});/*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Clip Effect
//>>group: Effects
//>>description: Clips the element on and off like an old TV.
//>>docs: http://api.jqueryui.com/clip-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectClip=$.effects.define("clip","hide",function(options,done){var start,animate={},element=$(this),direction=options.direction||"vertical",both=direction==="both",horizontal=both||direction==="horizontal",vertical=both||direction==="vertical";start=element.cssClip();animate.clip={top:vertical?(start.bottom-start.top)/2:start.top,right:horizontal?(start.right-start.left)/2:start.right,bottom:vertical?(start.bottom-start.top)/2:start.bottom,left:horizontal?(start.right-start.left)/2:start.left};$.effects.createPlaceholder(element);if(options.mode==="show"){element.cssClip(animate.clip);animate.clip=start;}element.animate(animate,{queue:false,duration:options.duration,easing:options.easing,complete:done});});/*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Drop Effect
//>>group: Effects
//>>description: Moves an element in one direction and hides it at the same time.
//>>docs: http://api.jqueryui.com/drop-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectDrop=$.effects.define("drop","hide",function(options,done){var distance,element=$(this),mode=options.mode,show=mode==="show",direction=options.direction||"left",ref=direction==="up"||direction==="down"?"top":"left",motion=direction==="up"||direction==="left"?"-=":"+=",oppositeMotion=motion==="+="?"-=":"+=",animation={opacity:0};$.effects.createPlaceholder(element);distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](true)/2;animation[ref]=motion+distance;if(show){element.css(animation);animation[ref]=oppositeMotion+distance;animation.opacity=1;}// Animate
element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});/*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Explode Effect
//>>group: Effects
// jscs:disable maximumLineLength
//>>description: Explodes an element in all directions into n pieces. Implodes an element to its original wholeness.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/explode-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectExplode=$.effects.define("explode","hide",function(options,done){var i,j,left,top,mx,my,rows=options.pieces?Math.round(Math.sqrt(options.pieces)):3,cells=rows,element=$(this),mode=options.mode,show=mode==="show",// Show and then visibility:hidden the element before calculating offset
offset=element.show().css("visibility","hidden").offset(),// Width and height of a piece
width=Math.ceil(element.outerWidth()/cells),height=Math.ceil(element.outerHeight()/rows),pieces=[];// Children animate complete:
function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete();}}// Clone the element for each row and cell.
for(i=0;i<rows;i++){// ===>
top=offset.top+i*height;my=i-(rows-1)/2;for(j=0;j<cells;j++){// |||
left=offset.left+j*width;mx=j-(cells-1)/2;// Create a clone of the now hidden main element that will be absolute positioned
// within a wrapper div off the -left and -top equal to size of our pieces
element.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height})// Select the wrapper - make it overflow: hidden and absolute positioned based on
// where the original was located +left and +top equal to the size of pieces
.parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},options.duration||500,options.easing,childComplete);}}function animComplete(){element.css({visibility:"visible"});$(pieces).remove();done();}});/*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Fade Effect
//>>group: Effects
//>>description: Fades the element.
//>>docs: http://api.jqueryui.com/fade-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectFade=$.effects.define("fade","toggle",function(options,done){var show=options.mode==="show";$(this).css("opacity",show?0:1).animate({opacity:show?1:0},{queue:false,duration:options.duration,easing:options.easing,complete:done});});/*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Fold Effect
//>>group: Effects
//>>description: Folds an element first horizontally and then vertically.
//>>docs: http://api.jqueryui.com/fold-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectFold=$.effects.define("fold","hide",function(options,done){// Create element
var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",size=options.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!options.horizFirst,ref=horizFirst?["right","bottom"]:["bottom","right"],duration=options.duration/2,placeholder=$.effects.createPlaceholder(element),start=element.cssClip(),animation1={clip:$.extend({},start)},animation2={clip:$.extend({},start)},distance=[start[ref[0]],start[ref[1]]],queuelen=element.queue().length;if(percent){size=parseInt(percent[1],10)/100*distance[hide?0:1];}animation1.clip[ref[0]]=size;animation2.clip[ref[0]]=size;animation2.clip[ref[1]]=0;if(show){element.cssClip(animation2.clip);if(placeholder){placeholder.css($.effects.clipToBox(animation2));}animation2.clip=start;}// Animate
element.queue(function(next){if(placeholder){placeholder.animate($.effects.clipToBox(animation1),duration,options.easing).animate($.effects.clipToBox(animation2),duration,options.easing);}next();}).animate(animation1,duration,options.easing).animate(animation2,duration,options.easing).queue(done);$.effects.unshift(element,queuelen,4);});/*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Highlight Effect
//>>group: Effects
//>>description: Highlights the background of an element in a defined color for a custom duration.
//>>docs: http://api.jqueryui.com/highlight-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectHighlight=$.effects.define("highlight","show",function(options,done){var element=$(this),animation={backgroundColor:element.css("backgroundColor")};if(options.mode==="hide"){animation.opacity=0;}$.effects.saveStyle(element);element.css({backgroundImage:"none",backgroundColor:options.color||"#ffff99"}).animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});/*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Size Effect
//>>group: Effects
//>>description: Resize an element to a specified width and height.
//>>docs: http://api.jqueryui.com/size-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectSize=$.effects.define("size",function(options,done){// Create element
var baseline,factor,temp,element=$(this),// Copy for children
cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],// Set options
mode=options.mode,restore=mode!=="effect",scale=options.scale||"both",origin=options.origin||["middle","center"],position=element.css("position"),pos=element.position(),original=$.effects.scaledDimensions(element),from=options.from||original,to=options.to||$.effects.scaledDimensions(element,0);$.effects.createPlaceholder(element);if(mode==="show"){temp=from;from=to;to=temp;}// Set scaling factor
factor={from:{y:from.height/original.height,x:from.width/original.width},to:{y:to.height/original.height,x:to.width/original.width}};// Scale the css box
if(scale==="box"||scale==="both"){// Vertical props scaling
if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,vProps,factor.from.y,from);to=$.effects.setTransition(element,vProps,factor.to.y,to);}// Horizontal props scaling
if(factor.from.x!==factor.to.x){from=$.effects.setTransition(element,hProps,factor.from.x,from);to=$.effects.setTransition(element,hProps,factor.to.x,to);}}// Scale the content
if(scale==="content"||scale==="both"){// Vertical props scaling
if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,cProps,factor.from.y,from);to=$.effects.setTransition(element,cProps,factor.to.y,to);}}// Adjust the position properties based on the provided origin points
if(origin){baseline=$.effects.getBaseline(origin,original);from.top=(original.outerHeight-from.outerHeight)*baseline.y+pos.top;from.left=(original.outerWidth-from.outerWidth)*baseline.x+pos.left;to.top=(original.outerHeight-to.outerHeight)*baseline.y+pos.top;to.left=(original.outerWidth-to.outerWidth)*baseline.x+pos.left;}element.css(from);// Animate the children if desired
if(scale==="content"||scale==="both"){vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);// Only animate children with width attributes specified
// TODO: is this right? should we include anything with css width specified as well
element.find("*[width]").each(function(){var child=$(this),childOriginal=$.effects.scaledDimensions(child),childFrom={height:childOriginal.height*factor.from.y,width:childOriginal.width*factor.from.x,outerHeight:childOriginal.outerHeight*factor.from.y,outerWidth:childOriginal.outerWidth*factor.from.x},childTo={height:childOriginal.height*factor.to.y,width:childOriginal.width*factor.to.x,outerHeight:childOriginal.height*factor.to.y,outerWidth:childOriginal.width*factor.to.x};// Vertical props scaling
if(factor.from.y!==factor.to.y){childFrom=$.effects.setTransition(child,vProps,factor.from.y,childFrom);childTo=$.effects.setTransition(child,vProps,factor.to.y,childTo);}// Horizontal props scaling
if(factor.from.x!==factor.to.x){childFrom=$.effects.setTransition(child,hProps,factor.from.x,childFrom);childTo=$.effects.setTransition(child,hProps,factor.to.x,childTo);}if(restore){$.effects.saveStyle(child);}// Animate children
child.css(childFrom);child.animate(childTo,options.duration,options.easing,function(){// Restore children
if(restore){$.effects.restoreStyle(child);}});});}// Animate
element.animate(to,{queue:false,duration:options.duration,easing:options.easing,complete:function complete(){var offset=element.offset();if(to.opacity===0){element.css("opacity",from.opacity);}if(!restore){element.css("position",position==="static"?"relative":position).offset(offset);// Need to save style here so that automatic style restoration
// doesn't restore to the original styles from before the animation.
$.effects.saveStyle(element);}done();}});});/*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Scale Effect
//>>group: Effects
//>>description: Grows or shrinks an element and its content.
//>>docs: http://api.jqueryui.com/scale-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectScale=$.effects.define("scale",function(options,done){// Create element
var el=$(this),mode=options.mode,percent=parseInt(options.percent,10)||(parseInt(options.percent,10)===0?0:mode!=="effect"?0:100),newOptions=$.extend(true,{from:$.effects.scaledDimensions(el),to:$.effects.scaledDimensions(el,percent,options.direction||"both"),origin:options.origin||["middle","center"]},options);// Fade option to support puff
if(options.fade){newOptions.from.opacity=1;newOptions.to.opacity=0;}$.effects.effect.size.call(this,newOptions,done);});/*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Puff Effect
//>>group: Effects
//>>description: Creates a puff effect by scaling the element up and hiding it at the same time.
//>>docs: http://api.jqueryui.com/puff-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectPuff=$.effects.define("puff","hide",function(options,done){var newOptions=$.extend(true,{},options,{fade:true,percent:parseInt(options.percent,10)||150});$.effects.effect.scale.call(this,newOptions,done);});/*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Pulsate Effect
//>>group: Effects
//>>description: Pulsates an element n times by changing the opacity to zero and back.
//>>docs: http://api.jqueryui.com/pulsate-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectPulsate=$.effects.define("pulsate","show",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",showhide=show||hide,// Showing or hiding leaves off the "last" animation
anims=(options.times||5)*2+(showhide?1:0),duration=options.duration/anims,animateTo=0,i=1,queuelen=element.queue().length;if(show||!element.is(":visible")){element.css("opacity",0).show();animateTo=1;}// Anims - 1 opacity "toggles"
for(;i<anims;i++){element.animate({opacity:animateTo},duration,options.easing);animateTo=1-animateTo;}element.animate({opacity:animateTo},duration,options.easing);element.queue(done);$.effects.unshift(element,queuelen,anims+1);});/*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Shake Effect
//>>group: Effects
//>>description: Shakes an element horizontally or vertically n times.
//>>docs: http://api.jqueryui.com/shake-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectShake=$.effects.define("shake",function(options,done){var i=1,element=$(this),direction=options.direction||"left",distance=options.distance||20,times=options.times||3,anims=times*2+1,speed=Math.round(options.duration/anims),ref=direction==="up"||direction==="down"?"top":"left",positiveMotion=direction==="up"||direction==="left",animation={},animation1={},animation2={},queuelen=element.queue().length;$.effects.createPlaceholder(element);// Animation
animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;// Animate
element.animate(animation,speed,options.easing);// Shakes
for(;i<times;i++){element.animate(animation1,speed,options.easing).animate(animation2,speed,options.easing);}element.animate(animation1,speed,options.easing).animate(animation,speed/2,options.easing).queue(done);$.effects.unshift(element,queuelen,anims+1);});/*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Slide Effect
//>>group: Effects
//>>description: Slides an element in and out of the viewport.
//>>docs: http://api.jqueryui.com/slide-effect/
//>>demos: http://jqueryui.com/effect/
var effectsEffectSlide=$.effects.define("slide","show",function(options,done){var startClip,startRef,element=$(this),map={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},mode=options.mode,direction=options.direction||"left",ref=direction==="up"||direction==="down"?"top":"left",positiveMotion=direction==="up"||direction==="left",distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](true),animation={};$.effects.createPlaceholder(element);startClip=element.cssClip();startRef=element.position()[ref];// Define hide animation
animation[ref]=(positiveMotion?-1:1)*distance+startRef;animation.clip=element.cssClip();animation.clip[map[direction][1]]=animation.clip[map[direction][0]];// Reverse the animation if we're showing
if(mode==="show"){element.cssClip(animation.clip);element.css(ref,animation[ref]);animation.clip=startClip;animation[ref]=startRef;}// Actually animate
element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});/*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Transfer Effect
//>>group: Effects
//>>description: Displays a transfer effect from one element to another.
//>>docs: http://api.jqueryui.com/transfer-effect/
//>>demos: http://jqueryui.com/effect/
var effect;if($.uiBackCompat!==false){effect=$.effects.define("transfer",function(options,done){$(this).transfer(options,done);});}var effectsEffectTransfer=effect;/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: :focusable Selector
//>>group: Core
//>>description: Selects elements which can be focused.
//>>docs: http://api.jqueryui.com/focusable-selector/
// Selectors
$.ui.focusable=function(element,hasTabindex){var map,mapName,img,focusableIfVisible,fieldset,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}img=$("img[usemap='#"+mapName+"']");return img.length>0&&img.is(":visible");}if(/^(input|select|textarea|button|object)$/.test(nodeName)){focusableIfVisible=!element.disabled;if(focusableIfVisible){// Form controls within a disabled fieldset are disabled.
// However, controls within the fieldset's legend do not get disabled.
// Since controls generally aren't placed inside legends, we skip
// this portion of the check.
fieldset=$(element).closest("fieldset")[0];if(fieldset){focusableIfVisible=!fieldset.disabled;}}}else if("a"===nodeName){focusableIfVisible=element.href||hasTabindex;}else{focusableIfVisible=hasTabindex;}return focusableIfVisible&&$(element).is(":visible")&&visible($(element));};// Support: IE 8 only
// IE 8 doesn't resolve inherit to visible/hidden for computed values
function visible(element){var visibility=element.css("visibility");while(visibility==="inherit"){element=element.parent();visibility=element.css("visibility");}return visibility!=="hidden";}$.extend($.expr[":"],{focusable:function focusable(element){return $.ui.focusable(element,$.attr(element,"tabindex")!=null);}});var focusable=$.ui.focusable;// Support: IE8 Only
// IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
// with a string, so we need to find the proper form.
var form=$.fn.form=function(){return typeof this[0].form==="string"?this.closest("form"):$(this[0].form);};/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Form Reset Mixin
//>>group: Core
//>>description: Refresh input widgets when their form is reset
//>>docs: http://api.jqueryui.com/form-reset-mixin/
var formResetMixin=$.ui.formResetMixin={_formResetHandler:function _formResetHandler(){var form=$(this);// Wait for the form reset to actually happen before refreshing
setTimeout(function(){var instances=form.data("ui-form-reset-instances");$.each(instances,function(){this.refresh();});});},_bindFormResetHandler:function _bindFormResetHandler(){this.form=this.element.form();if(!this.form.length){return;}var instances=this.form.data("ui-form-reset-instances")||[];if(!instances.length){// We don't use _on() here because we use a single event handler per form
this.form.on("reset.ui-form-reset",this._formResetHandler);}instances.push(this);this.form.data("ui-form-reset-instances",instances);},_unbindFormResetHandler:function _unbindFormResetHandler(){if(!this.form.length){return;}var instances=this.form.data("ui-form-reset-instances");instances.splice($.inArray(this,instances),1);if(instances.length){this.form.data("ui-form-reset-instances",instances);}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");}}};/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */ //>>label: jQuery 1.7 Support
//>>group: Core
//>>description: Support version 1.7.x of jQuery core
// Support: jQuery 1.7 only
// Not a great way to check versions, but since we only support 1.7+ and only
// need to detect <1.8, this is a simple check that should suffice. Checking
// for "1.7." would be a bit safer, but the version string is 1.7, not 1.7.0
// and we'll never reach 1.70.0 (if we do, we certainly won't be supporting
// 1.7 anymore). See #11197 for why we're not using feature detection.
if($.fn.jquery.substring(0,3)==="1.7"){// Setters for .innerWidth(), .innerHeight(), .outerWidth(), .outerHeight()
// Unlike jQuery Core 1.8+, these only support numeric values to set the
// dimensions in pixels
$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};};/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/
var keycode=$.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};// Internal use only
var escapeSelector=$.ui.escapeSelector=function(){var selectorEscape=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(selector){return selector.replace(selectorEscape,"\\$1");};}();/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: labels
//>>group: Core
//>>description: Find all the labels associated with a given input
//>>docs: http://api.jqueryui.com/labels/
var labels=$.fn.labels=function(){var ancestor,selector,id,labels,ancestors;// Check control.labels first
if(this[0].labels&&this[0].labels.length){return this.pushStack(this[0].labels);}// Support: IE <= 11, FF <= 37, Android <= 2.3 only
// Above browsers do not support control.labels. Everything below is to support them
// as well as document fragments. control.labels does not work on document fragments
labels=this.eq(0).parents("label");// Look for the label based on the id
id=this.attr("id");if(id){// We don't search against the document in case the element
// is disconnected from the DOM
ancestor=this.eq(0).parents().last();// Get a full set of top level ancestors
ancestors=ancestor.add(ancestor.length?ancestor.siblings():this.siblings());// Create a selector for the label based on the id
selector="label[for='"+$.ui.escapeSelector(id)+"']";labels=labels.add(ancestors.find(selector).addBack(selector));}// Return whatever we have found for labels
return this.pushStack(labels);};/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/
var scrollParent=$.fn.scrollParent=function(includeHidden){var position=this.css("position"),excludeStaticParent=position==="absolute",overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,scrollParent=this.parents().filter(function(){var parent=$(this);if(excludeStaticParent&&parent.css("position")==="static"){return false;}return overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+parent.css("overflow-x"));}).eq(0);return position==="fixed"||!scrollParent.length?$(this[0].ownerDocument||document):scrollParent;};/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/
var tabbable=$.extend($.expr[":"],{tabbable:function tabbable(element){var tabIndex=$.attr(element,"tabindex"),hasTabindex=tabIndex!=null;return(!hasTabindex||tabIndex>=0)&&$.ui.focusable(element,hasTabindex);}});/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/
var uniqueId=$.fn.extend({uniqueId:function(){var uuid=0;return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++uuid;}});};}(),removeUniqueId:function removeUniqueId(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){$(this).removeAttr("id");}});}});/*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Accordion
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Displays collapsible content panels for presenting information in a limited amount of space.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/accordion/
//>>demos: http://jqueryui.com/accordion/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/accordion.css
//>>css.theme: ../../themes/base/theme.css
var widgetsAccordion=$.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:false,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},// Callbacks
activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function _create(){var options=this.options;this.prevShow=this.prevHide=$();this._addClass("ui-accordion","ui-widget ui-helper-reset");this.element.attr("role","tablist");// Don't allow collapsible: false and active: false / null
if(!options.collapsible&&(options.active===false||options.active==null)){options.active=0;}this._processPanels();// handle negative values
if(options.active<0){options.active+=this.headers.length;}this._refresh();},_getCreateEventData:function _getCreateEventData(){return{header:this.active,panel:!this.active.length?$():this.active.next()};},_createIcons:function _createIcons(){var icon,children,icons=this.options.icons;if(icons){icon=$("<span>");this._addClass(icon,"ui-accordion-header-icon","ui-icon "+icons.header);icon.prependTo(this.headers);children=this.active.children(".ui-accordion-header-icon");this._removeClass(children,icons.header)._addClass(children,null,icons.activeHeader)._addClass(this.headers,"ui-accordion-icons");}},_destroyIcons:function _destroyIcons(){this._removeClass(this.headers,"ui-accordion-icons");this.headers.children(".ui-accordion-header-icon").remove();},_destroy:function _destroy(){var contents;// Clean up main element
this.element.removeAttr("role");// Clean up headers
this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();this._destroyIcons();// Clean up content panels
contents=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();if(this.options.heightStyle!=="content"){contents.css("height","");}},_setOption:function _setOption(key,value){if(key==="active"){// _activate() will handle invalid values and update this.options
this._activate(value);return;}if(key==="event"){if(this.options.event){this._off(this.headers,this.options.event);}this._setupEvents(value);}this._super(key,value);// Setting collapsible: false while collapsed; open first panel
if(key==="collapsible"&&!value&&this.options.active===false){this._activate(0);}if(key==="icons"){this._destroyIcons();if(value){this._createIcons();}}},_setOptionDisabled:function _setOptionDisabled(value){this._super(value);this.element.attr("aria-disabled",value);// Support: IE8 Only
// #5332 / #6059 - opacity doesn't cascade to positioned elements in IE
// so we need to add the disabled class to the headers and panels
this._toggleClass(null,"ui-state-disabled",!!value);this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!value);},_keydown:function _keydown(event){if(event.altKey||event.ctrlKey){return;}var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=false;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);break;case keyCode.HOME:toFocus=this.headers[0];break;case keyCode.END:toFocus=this.headers[length-1];break;}if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);$(toFocus).trigger("focus");event.preventDefault();}},_panelKeyDown:function _panelKeyDown(event){if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){$(event.currentTarget).prev().trigger("focus");}},refresh:function refresh(){var options=this.options;this._processPanels();// Was collapsed or no panel
if(options.active===false&&options.collapsible===true||!this.headers.length){options.active=false;this.active=$();// active false only when collapsible is true
}else if(options.active===false){this._activate(0);// was active, but active panel is gone
}else if(this.active.length&&!$.contains(this.element[0],this.active[0])){// all remaining panel are disabled
if(this.headers.length===this.headers.find(".ui-state-disabled").length){options.active=false;this.active=$();// activate previous panel
}else{this._activate(Math.max(0,options.active-1));}// was active, active panel still exists
}else{// make sure active index is correct
options.active=this.headers.index(this.active);}this._destroyIcons();this._refresh();},_processPanels:function _processPanels(){var prevHeaders=this.headers,prevPanels=this.panels;this.headers=this.element.find(this.options.header);this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default");this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content");// Avoid memory leaks (#10056)
if(prevPanels){this._off(prevHeaders.not(this.headers));this._off(prevPanels.not(this.panels));}},_refresh:function _refresh(){var maxHeight,options=this.options,heightStyle=options.heightStyle,parent=this.element.parent();this.active=this._findActive(options.active);this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed");this._addClass(this.active.next(),"ui-accordion-content-active");this.active.next().show();this.headers.attr("role","tab").each(function(){var header=$(this),headerId=header.uniqueId().attr("id"),panel=header.next(),panelId=panel.uniqueId().attr("id");header.attr("aria-controls",panelId);panel.attr("aria-labelledby",headerId);}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();// Make sure at least one header is in the tab order
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0);}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"});}this._createIcons();this._setupEvents(options.event);if(heightStyle==="fill"){maxHeight=parent.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}maxHeight-=elem.outerHeight(true);});this.headers.each(function(){maxHeight-=$(this).outerHeight(true);});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.headers.next().each(function(){var isVisible=$(this).is(":visible");if(!isVisible){$(this).show();}maxHeight=Math.max(maxHeight,$(this).css("height","").height());if(!isVisible){$(this).hide();}}).height(maxHeight);}},_activate:function _activate(index){var active=this._findActive(index)[0];// Trying to activate the already active panel
if(active===this.active[0]){return;}// Trying to collapse, simulate a click on the currently active header
active=active||this.active[0];this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop});},_findActive:function _findActive(selector){return typeof selector==="number"?this.headers.eq(selector):$();},_setupEvents:function _setupEvents(event){var events={keydown:"_keydown"};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}this._off(this.headers.add(this.headers.next()));this._on(this.headers,events);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers);},_eventHandler:function _eventHandler(event){var activeChildren,clickedChildren,options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing?$():clicked,newPanel:toShow};event.preventDefault();if(// click on active header, but not collapsible
clickedIsActive&&!options.collapsible||// allow canceling activation
this._trigger("beforeActivate",event,eventData)===false){return;}options.active=collapsing?false:this.headers.index(clicked);// When the call to ._toggle() comes after the class changes
// it causes a very odd bug in IE 8 (see #6720)
this.active=clickedIsActive?$():clicked;this._toggle(eventData);// Switch classes
// corner classes on the previously active header stay after the animation
this._removeClass(active,"ui-accordion-header-active","ui-state-active");if(options.icons){activeChildren=active.children(".ui-accordion-header-icon");this._removeClass(activeChildren,null,options.icons.activeHeader)._addClass(activeChildren,null,options.icons.header);}if(!clickedIsActive){this._removeClass(clicked,"ui-accordion-header-collapsed")._addClass(clicked,"ui-accordion-header-active","ui-state-active");if(options.icons){clickedChildren=clicked.children(".ui-accordion-header-icon");this._removeClass(clickedChildren,null,options.icons.header)._addClass(clickedChildren,null,options.icons.activeHeader);}this._addClass(clicked.next(),"ui-accordion-content-active");}},_toggle:function _toggle(data){var toShow=data.newPanel,toHide=this.prevShow.length?this.prevShow:data.oldPanel;// Handle activating a panel during the animation for another activation
this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=toShow;this.prevHide=toHide;if(this.options.animate){this._animate(toShow,toHide,data);}else{toHide.hide();toShow.show();this._toggleComplete(data);}toHide.attr({"aria-hidden":"true"});toHide.prev().attr({"aria-selected":"false","aria-expanded":"false"});// if we're switching panels, remove the old header from the tab order
// if we're opening from collapsed state, remove the previous header from the tab order
// if we're collapsing, then keep the collapsing header in the tab order
if(toShow.length&&toHide.length){toHide.prev().attr({"tabIndex":-1,"aria-expanded":"false"});}else if(toShow.length){this.headers.filter(function(){return parseInt($(this).attr("tabIndex"),10)===0;}).attr("tabIndex",-1);}toShow.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});},_animate:function _animate(toShow,toHide,data){var total,easing,duration,that=this,adjust=0,boxSizing=toShow.css("box-sizing"),down=toShow.length&&(!toHide.length||toShow.index()<toHide.index()),animate=this.options.animate||{},options=down&&animate.down||animate,complete=function complete(){that._toggleComplete(data);};if(typeof options==="number"){duration=options;}if(typeof options==="string"){easing=options;}// fall back from options to animation in case of partial down settings
easing=easing||options.easing||animate.easing;duration=duration||options.duration||animate.duration;if(!toHide.length){return toShow.animate(this.showProps,duration,easing,complete);}if(!toShow.length){return toHide.animate(this.hideProps,duration,easing,complete);}total=toShow.show().outerHeight();toHide.animate(this.hideProps,{duration:duration,easing:easing,step:function step(now,fx){fx.now=Math.round(now);}});toShow.hide().animate(this.showProps,{duration:duration,easing:easing,complete:complete,step:function step(now,fx){fx.now=Math.round(now);if(fx.prop!=="height"){if(boxSizing==="content-box"){adjust+=fx.now;}}else if(that.options.heightStyle!=="content"){fx.now=Math.round(total-toHide.outerHeight()-adjust);adjust=0;}}});},_toggleComplete:function _toggleComplete(data){var toHide=data.oldPanel,prev=toHide.prev();this._removeClass(toHide,"ui-accordion-content-active");this._removeClass(prev,"ui-accordion-header-active")._addClass(prev,"ui-accordion-header-collapsed");// Work around for rendering bug in IE (#5421)
if(toHide.length){toHide.parent()[0].className=toHide.parent()[0].className;}this._trigger("activate",null,data);}});var safeActiveElement=$.ui.safeActiveElement=function(document){var activeElement;// Support: IE 9 only
// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
try{activeElement=document.activeElement;}catch(error){activeElement=document.body;}// Support: IE 9 - 11 only
// IE may return null instead of an element
// Interestingly, this only seems to occur when NOT in an iframe
if(!activeElement){activeElement=document.body;}// Support: IE 11 only
// IE11 returns a seemingly empty object in some cases when accessing
// document.activeElement from an <iframe>
if(!activeElement.nodeName){activeElement=document.body;}return activeElement;};/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css
var widgetsMenu=$.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",// Callbacks
blur:null,focus:null,select:null},_create:function _create(){this.activeMenu=this.element;// Flag used to prevent firing of the click handler
// as the event bubbles up through nested menus
this.mouseHandled=false;this.element.uniqueId().attr({role:this.options.role,tabIndex:0});this._addClass("ui-menu","ui-widget ui-widget-content");this._on({// Prevent focus from sticking to links inside menu after clicking
// them (focus should always stay on UL during navigation).
"mousedown .ui-menu-item":function mousedownUiMenuItem(event){event.preventDefault();},"click .ui-menu-item":function clickUiMenuItem(event){var target=$(event.target);var active=$($.ui.safeActiveElement(this.document[0]));if(!this.mouseHandled&&target.not(".ui-state-disabled").length){this.select(event);// Only set the mouseHandled flag if the event will bubble, see #9469.
if(!event.isPropagationStopped()){this.mouseHandled=true;}// Open submenu on click
if(target.has(".ui-menu").length){this.expand(event);}else if(!this.element.is(":focus")&&active.closest(".ui-menu").length){// Redirect focus to the menu
this.element.trigger("focus",[true]);// If the active item is on the top level, let it stay active.
// Otherwise, blur the active item since it is no longer visible.
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer);}}}},"mouseenter .ui-menu-item":function mouseenterUiMenuItem(event){// Ignore mouse events while typeahead is active, see #10458.
// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
// is over an item in the menu
if(this.previousFilter){return;}var actualTarget=$(event.target).closest(".ui-menu-item"),target=$(event.currentTarget);// Ignore bubbled events on parent items, see #11641
if(actualTarget[0]!==target[0]){return;}// Remove ui-state-active class from siblings of the newly focused menu item
// to avoid a jump caused by adjacent elements both having a class with a border
this._removeClass(target.siblings().children(".ui-state-active"),null,"ui-state-active");this.focus(event,target);},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function focus(event,keepActiveItem){// If there's already an active item, keep it active
// If not, activate the first item
var item=this.active||this.element.find(this.options.items).eq(0);if(!keepActiveItem){this.focus(event,item);}},blur:function blur(event){this._delay(function(){var notContained=!$.contains(this.element[0],$.ui.safeActiveElement(this.document[0]));if(notContained){this.collapseAll(event);}});},keydown:"_keydown"});this.refresh();// Clicks outside of a menu collapse any open menus
this._on(this.document,{click:function click(event){if(this._closeOnDocumentClick(event)){this.collapseAll(event);}// Reset the mouseHandled flag
this.mouseHandled=false;}});},_destroy:function _destroy(){var items=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),submenus=items.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");// Destroy (sub)menus
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled "+"tabIndex").removeUniqueId().show();submenus.children().each(function(){var elem=$(this);if(elem.data("ui-menu-submenu-caret")){elem.remove();}});},_keydown:function _keydown(event){var match,prev,character,skip,preventDefault=true;switch(event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);break;case $.ui.keyCode.HOME:this._move("first","first",event);break;case $.ui.keyCode.END:this._move("last","last",event);break;case $.ui.keyCode.UP:this.previous(event);break;case $.ui.keyCode.DOWN:this.next(event);break;case $.ui.keyCode.LEFT:this.collapse(event);break;case $.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(event);}break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=false;prev=this.previousFilter||"";skip=false;// Support number pad values
character=event.keyCode>=96&&event.keyCode<=105?(event.keyCode-96).toString():String.fromCharCode(event.keyCode);clearTimeout(this.filterTimer);if(character===prev){skip=true;}else{character=prev+character;}match=this._filterMenuItems(character);match=skip&&match.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):match;// If no matches on the current filter, reset to the last character pressed
// to move down the menu to the first item that starts with that character
if(!match.length){character=String.fromCharCode(event.keyCode);match=this._filterMenuItems(character);}if(match.length){this.focus(event,match);this.previousFilter=character;this.filterTimer=this._delay(function(){delete this.previousFilter;},1000);}else{delete this.previousFilter;}}if(preventDefault){event.preventDefault();}},_activate:function _activate(event){if(this.active&&!this.active.is(".ui-state-disabled")){if(this.active.children("[aria-haspopup='true']").length){this.expand(event);}else{this.select(event);}}},refresh:function refresh(){var menus,items,newSubmenus,newItems,newWrappers,that=this,icon=this.options.icons.submenu,submenus=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length);// Initialize nested menus
newSubmenus=submenus.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var menu=$(this),item=menu.prev(),submenuCaret=$("<span>").data("ui-menu-submenu-caret",true);that._addClass(submenuCaret,"ui-menu-icon","ui-icon "+icon);item.attr("aria-haspopup","true").prepend(submenuCaret);menu.attr("aria-labelledby",item.attr("id"));});this._addClass(newSubmenus,"ui-menu","ui-widget ui-widget-content ui-front");menus=submenus.add(this.element);items=menus.find(this.options.items);// Initialize menu-items containing spaces and/or dashes only as dividers
items.not(".ui-menu-item").each(function(){var item=$(this);if(that._isDivider(item)){that._addClass(item,"ui-menu-divider","ui-widget-content");}});// Don't refresh list items that are already adapted
newItems=items.not(".ui-menu-item, .ui-menu-divider");newWrappers=newItems.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()});this._addClass(newItems,"ui-menu-item")._addClass(newWrappers,"ui-menu-item-wrapper");// Add aria-disabled attribute to any disabled menu item
items.filter(".ui-state-disabled").attr("aria-disabled","true");// If the active item has been removed, blur the menu
if(this.active&&!$.contains(this.element[0],this.active[0])){this.blur();}},_itemRole:function _itemRole(){return{menu:"menuitem",listbox:"option"}[this.options.role];},_setOption:function _setOption(key,value){if(key==="icons"){var icons=this.element.find(".ui-menu-icon");this._removeClass(icons,null,this.options.icons.submenu)._addClass(icons,null,value.submenu);}this._super(key,value);},_setOptionDisabled:function _setOptionDisabled(value){this._super(value);this.element.attr("aria-disabled",String(value));this._toggleClass(null,"ui-state-disabled",!!value);},focus:function focus(event,item){var nested,focused,activeParent;this.blur(event,event&&event.type==="focus");this._scrollIntoView(item);this.active=item.first();focused=this.active.children(".ui-menu-item-wrapper");this._addClass(focused,null,"ui-state-active");// Only update aria-activedescendant if there's a role
// otherwise we assume focus is managed elsewhere
if(this.options.role){this.element.attr("aria-activedescendant",focused.attr("id"));}// Highlight active parent menu item, if any
activeParent=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");this._addClass(activeParent,null,"ui-state-active");if(event&&event.type==="keydown"){this._close();}else{this.timer=this._delay(function(){this._close();},this.delay);}nested=item.children(".ui-menu");if(nested.length&&event&&/^mouse/.test(event.type)){this._startOpening(nested);}this.activeMenu=item.parent();this._trigger("focus",event,{item:item});},_scrollIntoView:function _scrollIntoView(item){var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;if(this._hasScroll()){borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0;paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0;offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop;scroll=this.activeMenu.scrollTop();elementHeight=this.activeMenu.height();itemHeight=item.outerHeight();if(offset<0){this.activeMenu.scrollTop(scroll+offset);}else if(offset+itemHeight>elementHeight){this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight);}}},blur:function blur(event,fromFocus){if(!fromFocus){clearTimeout(this.timer);}if(!this.active){return;}this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active");this._trigger("blur",event,{item:this.active});this.active=null;},_startOpening:function _startOpening(submenu){clearTimeout(this.timer);// Don't open if already open fixes a Firefox bug that caused a .5 pixel
// shift in the submenu position when mousing over the caret icon
if(submenu.attr("aria-hidden")!=="true"){return;}this.timer=this._delay(function(){this._close();this._open(submenu);},this.delay);},_open:function _open(submenu){var position=$.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden","true");submenu.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(position);},collapseAll:function collapseAll(event,all){clearTimeout(this.timer);this.timer=this._delay(function(){// If we were passed an event, look for the submenu that contains the event
var currentMenu=all?this.element:$(event&&event.target).closest(this.element.find(".ui-menu"));// If we found no valid submenu ancestor, use the main menu to close all
// sub menus anyway
if(!currentMenu.length){currentMenu=this.element;}this._close(currentMenu);this.blur(event);// Work around active item staying active after menu is blurred
this._removeClass(currentMenu.find(".ui-state-active"),null,"ui-state-active");this.activeMenu=currentMenu;},this.delay);},// With no arguments, closes the currently active menu - if nothing is active
// it closes all menus.  If passed an argument, it will search for menus BELOW
_close:function _close(startMenu){if(!startMenu){startMenu=this.active?this.active.parent():this.element;}startMenu.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false");},_closeOnDocumentClick:function _closeOnDocumentClick(event){return!$(event.target).closest(".ui-menu").length;},_isDivider:function _isDivider(item){// Match hyphen, em dash, en dash
return!/[^\-\u2014\u2013\s]/.test(item.text());},collapse:function collapse(event){var newItem=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(newItem&&newItem.length){this._close();this.focus(event,newItem);}},expand:function expand(event){var newItem=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();if(newItem&&newItem.length){this._open(newItem.parent());// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
this._delay(function(){this.focus(event,newItem);});}},next:function next(event){this._move("next","first",event);},previous:function previous(event){this._move("prev","last",event);},isFirstItem:function isFirstItem(){return this.active&&!this.active.prevAll(".ui-menu-item").length;},isLastItem:function isLastItem(){return this.active&&!this.active.nextAll(".ui-menu-item").length;},_move:function _move(direction,filter,event){var next;if(this.active){if(direction==="first"||direction==="last"){next=this.active[direction==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1);}else{next=this.active[direction+"All"](".ui-menu-item").eq(0);}}if(!next||!next.length||!this.active){next=this.activeMenu.find(this.options.items)[filter]();}this.focus(event,next);},nextPage:function nextPage(event){var item,base,height;if(!this.active){this.next(event);return;}if(this.isLastItem()){return;}if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base-height<0;});this.focus(event,item);}else{this.focus(event,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]());}},previousPage:function previousPage(event){var item,base,height;if(!this.active){this.next(event);return;}if(this.isFirstItem()){return;}if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base+height>0;});this.focus(event,item);}else{this.focus(event,this.activeMenu.find(this.options.items).first());}},_hasScroll:function _hasScroll(){return this.element.outerHeight()<this.element.prop("scrollHeight");},select:function select(event){// TODO: It should never be possible to not have an active item at this
// point, but the tests don't trigger mouseenter before click.
this.active=this.active||$(event.target).closest(".ui-menu-item");var ui={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(event,true);}this._trigger("select",event,ui);},_filterMenuItems:function _filterMenuItems(character){var escapedCharacter=character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),regex=new RegExp("^"+escapedCharacter,"i");return this.activeMenu.find(this.options.items)// Only match on items, not dividers or other content (#10571)
.filter(".ui-menu-item").filter(function(){return regex.test($.trim($(this).children(".ui-menu-item-wrapper").text()));});}});/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css
$.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,// Callbacks
change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function _create(){// Some browsers only repeat keydown events, not keypress events,
// so we use the suppressKeyPress flag to determine if we've already
// handled the keydown event. #7269
// Unfortunately the code for & in keypress is the same as the up arrow,
// so we use the suppressKeyPressRepeat flag to avoid handling keypress
// events when we know the keydown event was used to modify the
// search term. #7799
var suppressKeyPress,suppressKeyPressRepeat,suppressInput,nodeName=this.element[0].nodeName.toLowerCase(),isTextarea=nodeName==="textarea",isInput=nodeName==="input";// Textareas are always multi-line
// Inputs are always single-line, even if inside a contentEditable element
// IE also treats inputs as contentEditable
// All other element types are determined by whether or not they're contentEditable
this.isMultiLine=isTextarea||!isInput&&this._isContentEditable(this.element);this.valueMethod=this.element[isTextarea||isInput?"val":"text"];this.isNewMenu=true;this._addClass("ui-autocomplete-input");this.element.attr("autocomplete","off");this._on(this.element,{keydown:function keydown(event){if(this.element.prop("readOnly")){suppressKeyPress=true;suppressInput=true;suppressKeyPressRepeat=true;return;}suppressKeyPress=false;suppressInput=false;suppressKeyPressRepeat=false;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=true;this._move("previousPage",event);break;case keyCode.PAGE_DOWN:suppressKeyPress=true;this._move("nextPage",event);break;case keyCode.UP:suppressKeyPress=true;this._keyEvent("previous",event);break;case keyCode.DOWN:suppressKeyPress=true;this._keyEvent("next",event);break;case keyCode.ENTER:// when menu is open and has focus
if(this.menu.active){// #6055 - Opera still allows the keypress to occur
// which causes forms to submit
suppressKeyPress=true;event.preventDefault();this.menu.select(event);}break;case keyCode.TAB:if(this.menu.active){this.menu.select(event);}break;case keyCode.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term);}this.close(event);// Different browsers have different default behavior for escape
// Single press can mean undo or clear
// Double press in IE means clear the whole form
event.preventDefault();}break;default:suppressKeyPressRepeat=true;// search timeout should be triggered before the input value is changed
this._searchTimeout(event);break;}},keypress:function keypress(event){if(suppressKeyPress){suppressKeyPress=false;if(!this.isMultiLine||this.menu.element.is(":visible")){event.preventDefault();}return;}if(suppressKeyPressRepeat){return;}// Replicate some key handlers to allow them to repeat in Firefox and Opera
var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);break;case keyCode.PAGE_DOWN:this._move("nextPage",event);break;case keyCode.UP:this._keyEvent("previous",event);break;case keyCode.DOWN:this._keyEvent("next",event);break;}},input:function input(event){if(suppressInput){suppressInput=false;event.preventDefault();return;}this._searchTimeout(event);},focus:function focus(){this.selectedItem=null;this.previous=this._value();},blur:function blur(event){if(this.cancelBlur){delete this.cancelBlur;return;}clearTimeout(this.searching);this.close(event);this._change(event);}});this._initSource();this.menu=$("<ul>").appendTo(this._appendTo()).menu({// disable ARIA support, the live region takes care of that
role:null}).hide().menu("instance");this._addClass(this.menu.element,"ui-autocomplete","ui-front");this._on(this.menu.element,{mousedown:function mousedown(event){// prevent moving focus out of the text field
event.preventDefault();// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;// Support: IE 8 only
// Right clicking a menu item or selecting text from the menu items will
// result in focus moving out of the input. However, we've already received
// and ignored the blur event because of the cancelBlur flag set above. So
// we restore focus to ensure that the menu closes properly based on the user's
// next actions.
if(this.element[0]!==$.ui.safeActiveElement(this.document[0])){this.element.trigger("focus");}});},menufocus:function menufocus(event,ui){var label,item;// support: Firefox
// Prevent accidental activation of menu items in Firefox (#7024 #9118)
if(this.isNewMenu){this.isNewMenu=false;if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){$(event.target).trigger(event.originalEvent);});return;}}item=ui.item.data("ui-autocomplete-item");if(false!==this._trigger("focus",event,{item:item})){// use value to match what will end up in the input, if it was a key event
if(event.originalEvent&&/^key/.test(event.originalEvent.type)){this._value(item.value);}}// Announce the value in the liveRegion
label=ui.item.attr("aria-label")||item.value;if(label&&$.trim(label).length){this.liveRegion.children().hide();$("<div>").text(label).appendTo(this.liveRegion);}},menuselect:function menuselect(event,ui){var item=ui.item.data("ui-autocomplete-item"),previous=this.previous;// Only trigger when focus was lost (click on menu)
if(this.element[0]!==$.ui.safeActiveElement(this.document[0])){this.element.trigger("focus");this.previous=previous;// #6109 - IE triggers two focus events and the second
// is asynchronous, so we need to reset the previous
// term synchronously and asynchronously :-(
this._delay(function(){this.previous=previous;this.selectedItem=item;});}if(false!==this._trigger("select",event,{item:item})){this._value(item.value);}// reset the term after the select event
// this allows custom select handling to work properly
this.term=this._value();this.close(event);this.selectedItem=item;}});this.liveRegion=$("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");// Turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function beforeunload(){this.element.removeAttr("autocomplete");}});},_destroy:function _destroy(){clearTimeout(this.searching);this.element.removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove();},_setOption:function _setOption(key,value){this._super(key,value);if(key==="source"){this._initSource();}if(key==="appendTo"){this.menu.element.appendTo(this._appendTo());}if(key==="disabled"&&value&&this.xhr){this.xhr.abort();}},_isEventTargetInWidget:function _isEventTargetInWidget(event){var menuElement=this.menu.element[0];return event.target===this.element[0]||event.target===menuElement||$.contains(menuElement,event.target);},_closeOnClickOutside:function _closeOnClickOutside(event){if(!this._isEventTargetInWidget(event)){this.close();}},_appendTo:function _appendTo(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0);}if(!element||!element[0]){element=this.element.closest(".ui-front, dialog");}if(!element.length){element=this.document[0].body;}return element;},_initSource:function _initSource(){var array,url,that=this;if($.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term));};}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(that.xhr){that.xhr.abort();}that.xhr=$.ajax({url:url,data:request,dataType:"json",success:function success(data){response(data);},error:function error(){response([]);}});};}else{this.source=this.options.source;}},_searchTimeout:function _searchTimeout(event){clearTimeout(this.searching);this.searching=this._delay(function(){// Search if the value has changed, or if the user retypes the same value (see #7434)
var equalValues=this.term===this._value(),menuVisible=this.menu.element.is(":visible"),modifierKey=event.altKey||event.ctrlKey||event.metaKey||event.shiftKey;if(!equalValues||equalValues&&!menuVisible&&!modifierKey){this.selectedItem=null;this.search(null,event);}},this.options.delay);},search:function search(value,event){value=value!=null?value:this._value();// Always save the actual value, not the one passed as an argument
this.term=this._value();if(value.length<this.options.minLength){return this.close(event);}if(this._trigger("search",event)===false){return;}return this._search(value);},_search:function _search(value){this.pending++;this._addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:value},this._response());},_response:function _response(){var index=++this.requestIndex;return $.proxy(function(content){if(index===this.requestIndex){this.__response(content);}this.pending--;if(!this.pending){this._removeClass("ui-autocomplete-loading");}},this);},__response:function __response(content){if(content){content=this._normalize(content);}this._trigger("response",null,{content:content});if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){this._suggest(content);this._trigger("open");}else{// use ._close() instead of .close() so we don't cancel future searches
this._close();}},close:function close(event){this.cancelSearch=true;this._close(event);},_close:function _close(event){// Remove the handler that closes the menu on outside clicks
this._off(this.document,"mousedown");if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",event);}},_change:function _change(event){if(this.previous!==this._value()){this._trigger("change",event,{item:this.selectedItem});}},_normalize:function _normalize(items){// assume all items have the right format when the first item is complete
if(items.length&&items[0].label&&items[0].value){return items;}return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item};}return $.extend({},item,{label:item.label||item.value,value:item.value||item.label});});},_suggest:function _suggest(items){var ul=this.menu.element.empty();this._renderMenu(ul,items);this.isNewMenu=true;this.menu.refresh();// Size and position menu
ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next();}// Listen for interactions outside of the widget (#6642)
this._on(this.document,{mousedown:"_closeOnClickOutside"});},_resizeMenu:function _resizeMenu(){var ul=this.menu.element;ul.outerWidth(Math.max(// Firefox wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping (#7513)
ul.width("").outerWidth()+1,this.element.outerWidth()));},_renderMenu:function _renderMenu(ul,items){var that=this;$.each(items,function(index,item){that._renderItemData(ul,item);});},_renderItemData:function _renderItemData(ul,item){return this._renderItem(ul,item).data("ui-autocomplete-item",item);},_renderItem:function _renderItem(ul,item){return $("<li>").append($("<div>").text(item.label)).appendTo(ul);},_move:function _move(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return;}if(this.menu.isFirstItem()&&/^previous/.test(direction)||this.menu.isLastItem()&&/^next/.test(direction)){if(!this.isMultiLine){this._value(this.term);}this.menu.blur();return;}this.menu[direction](event);},widget:function widget(){return this.menu.element;},_value:function _value(){return this.valueMethod.apply(this.element,arguments);},_keyEvent:function _keyEvent(keyEvent,event){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(keyEvent,event);// Prevents moving cursor to beginning/end of the text field in some browsers
event.preventDefault();}},// Support: Chrome <=50
// We should be able to just use this.element.prop( "isContentEditable" )
// but hidden elements always report false in Chrome.
// https://code.google.com/p/chromium/issues/detail?id=313082
_isContentEditable:function _isContentEditable(element){if(!element.length){return false;}var editable=element.prop("contentEditable");if(editable==="inherit"){return this._isContentEditable(element.parent());}return editable==="true";}});$.extend($.ui.autocomplete,{escapeRegex:function escapeRegex(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");},filter:function filter(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value);});}});// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function results(amount){return amount+(amount>1?" results are":" result is")+" available, use up and down arrow keys to navigate.";}}},__response:function __response(content){var message;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return;}if(content&&content.length){message=this.options.messages.results(content.length);}else{message=this.options.messages.noResults;}this.liveRegion.children().hide();$("<div>").text(message).appendTo(this.liveRegion);}});var widgetsAutocomplete=$.ui.autocomplete;/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Controlgroup
//>>group: Widgets
//>>description: Visually groups form control widgets
//>>docs: http://api.jqueryui.com/controlgroup/
//>>demos: http://jqueryui.com/controlgroup/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/controlgroup.css
//>>css.theme: ../../themes/base/theme.css
var controlgroupCornerRegex=/ui-corner-([a-z]){2,6}/g;var widgetsControlgroup=$.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:true,items:{"button":"input[type=button], input[type=submit], input[type=reset], button, a","controlgroupLabel":".ui-controlgroup-label","checkboxradio":"input[type='checkbox'], input[type='radio']","selectmenu":"select","spinner":".ui-spinner-input"}},_create:function _create(){this._enhance();},// To support the enhanced option in jQuery Mobile, we isolate DOM manipulation
_enhance:function _enhance(){this.element.attr("role","toolbar");this.refresh();},_destroy:function _destroy(){this._callChildMethod("destroy");this.childWidgets.removeData("ui-controlgroup-data");this.element.removeAttr("role");if(this.options.items.controlgroupLabel){this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();}},_initWidgets:function _initWidgets(){var that=this,childWidgets=[];// First we iterate over each of the items options
$.each(this.options.items,function(widget,selector){var labels;var options={};// Make sure the widget has a selector set
if(!selector){return;}if(widget==="controlgroupLabel"){labels=that.element.find(selector);labels.each(function(){var element=$(this);if(element.children(".ui-controlgroup-label-contents").length){return;}element.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");});that._addClass(labels,null,"ui-widget ui-widget-content ui-state-default");childWidgets=childWidgets.concat(labels.get());return;}// Make sure the widget actually exists
if(!$.fn[widget]){return;}// We assume everything is in the middle to start because we can't determine
// first / last elements until all enhancments are done.
if(that["_"+widget+"Options"]){options=that["_"+widget+"Options"]("middle");}else{options={classes:{}};}// Find instances of this widget inside controlgroup and init them
that.element.find(selector).each(function(){var element=$(this);var instance=element[widget]("instance");// We need to clone the default options for this type of widget to avoid
// polluting the variable options which has a wider scope than a single widget.
var instanceOptions=$.widget.extend({},options);// If the button is the child of a spinner ignore it
// TODO: Find a more generic solution
if(widget==="button"&&element.parent(".ui-spinner").length){return;}// Create the widget if it doesn't exist
if(!instance){instance=element[widget]()[widget]("instance");}if(instance){instanceOptions.classes=that._resolveClassesValues(instanceOptions.classes,instance);}element[widget](instanceOptions);// Store an instance of the controlgroup to be able to reference
// from the outermost element for changing options and refresh
var widgetElement=element[widget]("widget");$.data(widgetElement[0],"ui-controlgroup-data",instance?instance:element[widget]("instance"));childWidgets.push(widgetElement[0]);});});this.childWidgets=$($.unique(childWidgets));this._addClass(this.childWidgets,"ui-controlgroup-item");},_callChildMethod:function _callChildMethod(method){this.childWidgets.each(function(){var element=$(this),data=element.data("ui-controlgroup-data");if(data&&data[method]){data[method]();}});},_updateCornerClass:function _updateCornerClass(element,position){var remove="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";var add=this._buildSimpleOptions(position,"label").classes.label;this._removeClass(element,null,remove);this._addClass(element,null,add);},_buildSimpleOptions:function _buildSimpleOptions(position,key){var direction=this.options.direction==="vertical";var result={classes:{}};result.classes[key]={"middle":"","first":"ui-corner-"+(direction?"top":"left"),"last":"ui-corner-"+(direction?"bottom":"right"),"only":"ui-corner-all"}[position];return result;},_spinnerOptions:function _spinnerOptions(position){var options=this._buildSimpleOptions(position,"ui-spinner");options.classes["ui-spinner-up"]="";options.classes["ui-spinner-down"]="";return options;},_buttonOptions:function _buttonOptions(position){return this._buildSimpleOptions(position,"ui-button");},_checkboxradioOptions:function _checkboxradioOptions(position){return this._buildSimpleOptions(position,"ui-checkboxradio-label");},_selectmenuOptions:function _selectmenuOptions(position){var direction=this.options.direction==="vertical";return{width:direction?"auto":false,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(direction?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(direction?"top":"left")},last:{"ui-selectmenu-button-open":direction?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(direction?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[position]};},_resolveClassesValues:function _resolveClassesValues(classes,instance){var result={};$.each(classes,function(key){var current=instance.options.classes[key]||"";current=$.trim(current.replace(controlgroupCornerRegex,""));result[key]=(current+" "+classes[key]).replace(/\s+/g," ");});return result;},_setOption:function _setOption(key,value){if(key==="direction"){this._removeClass("ui-controlgroup-"+this.options.direction);}this._super(key,value);if(key==="disabled"){this._callChildMethod(value?"disable":"enable");return;}this.refresh();},refresh:function refresh(){var children,that=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);if(this.options.direction==="horizontal"){this._addClass(null,"ui-helper-clearfix");}this._initWidgets();children=this.childWidgets;// We filter here because we need to track all childWidgets not just the visible ones
if(this.options.onlyVisible){children=children.filter(":visible");}if(children.length){// We do this last because we need to make sure all enhancment is done
// before determining first and last
$.each(["first","last"],function(index,value){var instance=children[value]().data("ui-controlgroup-data");if(instance&&that["_"+instance.widgetName+"Options"]){var options=that["_"+instance.widgetName+"Options"](children.length===1?"only":value);options.classes=that._resolveClassesValues(options.classes,instance);instance.element[instance.widgetName](options);}else{that._updateCornerClass(children[value](),value);}});// Finally call the refresh method on each of the child widgets.
this._callChildMethod("refresh");}}});/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Checkboxradio
//>>group: Widgets
//>>description: Enhances a form with multiple themeable checkboxes or radio buttons.
//>>docs: http://api.jqueryui.com/checkboxradio/
//>>demos: http://jqueryui.com/checkboxradio/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.structure: ../../themes/base/checkboxradio.css
//>>css.theme: ../../themes/base/theme.css
$.widget("ui.checkboxradio",[$.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:true,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function _getCreateOptions(){var disabled,labels;var that=this;var options=this._super()||{};// We read the type here, because it makes more sense to throw a element type error first,
// rather then the error for lack of a label. Often if its the wrong type, it
// won't have a label (e.g. calling on a div, btn, etc)
this._readType();labels=this.element.labels();// If there are multiple labels, use the last one
this.label=$(labels[labels.length-1]);if(!this.label.length){$.error("No label found for checkboxradio widget");}this.originalLabel="";// We need to get the label text but this may also need to make sure it does not contain the
// input itself.
this.label.contents().not(this.element[0]).each(function(){// The label contents could be text, html, or a mix. We concat each element to get a
// string representation of the label, without the input as part of it.
that.originalLabel+=this.nodeType===3?$(this).text():this.outerHTML;});// Set the label option if we found label text
if(this.originalLabel){options.label=this.originalLabel;}disabled=this.element[0].disabled;if(disabled!=null){options.disabled=disabled;}return options;},_create:function _create(){var checked=this.element[0].checked;this._bindFormResetHandler();if(this.options.disabled==null){this.options.disabled=this.element[0].disabled;}this._setOption("disabled",this.options.disabled);this._addClass("ui-checkboxradio","ui-helper-hidden-accessible");this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget");if(this.type==="radio"){this._addClass(this.label,"ui-checkboxradio-radio-label");}if(this.options.label&&this.options.label!==this.originalLabel){this._updateLabel();}else if(this.originalLabel){this.options.label=this.originalLabel;}this._enhance();if(checked){this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active");if(this.icon){this._addClass(this.icon,null,"ui-state-hover");}}this._on({change:"_toggleClasses",focus:function focus(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus");},blur:function blur(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus");}});},_readType:function _readType(){var nodeName=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type;if(nodeName!=="input"||!/radio|checkbox/.test(this.type)){$.error("Can't create checkboxradio on element.nodeName="+nodeName+" and element.type="+this.type);}},// Support jQuery Mobile enhanced option
_enhance:function _enhance(){this._updateIcon(this.element[0].checked);},widget:function widget(){return this.label;},_getRadioGroup:function _getRadioGroup(){var group;var name=this.element[0].name;var nameSelector="input[name='"+$.ui.escapeSelector(name)+"']";if(!name){return $([]);}if(this.form.length){group=$(this.form[0].elements).filter(nameSelector);}else{// Not inside a form, check all inputs that also are not inside a form
group=$(nameSelector).filter(function(){return $(this).form().length===0;});}return group.not(this.element);},_toggleClasses:function _toggleClasses(){var checked=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);if(this.options.icon&&this.type==="checkbox"){this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",checked)._toggleClass(this.icon,null,"ui-icon-blank",!checked);}if(this.type==="radio"){this._getRadioGroup().each(function(){var instance=$(this).checkboxradio("instance");if(instance){instance._removeClass(instance.label,"ui-checkboxradio-checked","ui-state-active");}});}},_destroy:function _destroy(){this._unbindFormResetHandler();if(this.icon){this.icon.remove();this.iconSpace.remove();}},_setOption:function _setOption(key,value){// We don't allow the value to be set to nothing
if(key==="label"&&!value){return;}this._super(key,value);if(key==="disabled"){this._toggleClass(this.label,null,"ui-state-disabled",value);this.element[0].disabled=value;// Don't refresh when setting disabled
return;}this.refresh();},_updateIcon:function _updateIcon(checked){var toAdd="ui-icon ui-icon-background ";if(this.options.icon){if(!this.icon){this.icon=$("<span>");this.iconSpace=$("<span> </span>");this._addClass(this.iconSpace,"ui-checkboxradio-icon-space");}if(this.type==="checkbox"){toAdd+=checked?"ui-icon-check ui-state-checked":"ui-icon-blank";this._removeClass(this.icon,null,checked?"ui-icon-blank":"ui-icon-check");}else{toAdd+="ui-icon-blank";}this._addClass(this.icon,"ui-checkboxradio-icon",toAdd);if(!checked){this._removeClass(this.icon,null,"ui-icon-check ui-state-checked");}this.icon.prependTo(this.label).after(this.iconSpace);}else if(this.icon!==undefined){this.icon.remove();this.iconSpace.remove();delete this.icon;}},_updateLabel:function _updateLabel(){// Remove the contents of the label ( minus the icon, icon space, and input )
var contents=this.label.contents().not(this.element[0]);if(this.icon){contents=contents.not(this.icon[0]);}if(this.iconSpace){contents=contents.not(this.iconSpace[0]);}contents.remove();this.label.append(this.options.label);},refresh:function refresh(){var checked=this.element[0].checked,isDisabled=this.element[0].disabled;this._updateIcon(checked);this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);if(this.options.label!==null){this._updateLabel();}if(isDisabled!==this.options.disabled){this._setOptions({"disabled":isDisabled});}}}]);var widgetsCheckboxradio=$.ui.checkboxradio;/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Button
//>>group: Widgets
//>>description: Enhances a form with themeable buttons.
//>>docs: http://api.jqueryui.com/button/
//>>demos: http://jqueryui.com/button/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css
$.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:true},_getCreateOptions:function _getCreateOptions(){var disabled,// This is to support cases like in jQuery Mobile where the base widget does have
// an implementation of _getCreateOptions
options=this._super()||{};this.isInput=this.element.is("input");disabled=this.element[0].disabled;if(disabled!=null){options.disabled=disabled;}this.originalLabel=this.isInput?this.element.val():this.element.html();if(this.originalLabel){options.label=this.originalLabel;}return options;},_create:function _create(){if(!this.option.showLabel&!this.options.icon){this.options.showLabel=true;}// We have to check the option again here even though we did in _getCreateOptions,
// because null may have been passed on init which would override what was set in
// _getCreateOptions
if(this.options.disabled==null){this.options.disabled=this.element[0].disabled||false;}this.hasTitle=!!this.element.attr("title");// Check to see if the label needs to be set or if its already correct
if(this.options.label&&this.options.label!==this.originalLabel){if(this.isInput){this.element.val(this.options.label);}else{this.element.html(this.options.label);}}this._addClass("ui-button","ui-widget");this._setOption("disabled",this.options.disabled);this._enhance();if(this.element.is("a")){this._on({"keyup":function keyup(event){if(event.keyCode===$.ui.keyCode.SPACE){event.preventDefault();// Support: PhantomJS <= 1.9, IE 8 Only
// If a native click is available use it so we actually cause navigation
// otherwise just trigger a click event
if(this.element[0].click){this.element[0].click();}else{this.element.trigger("click");}}}});}},_enhance:function _enhance(){if(!this.element.is("button")){this.element.attr("role","button");}if(this.options.icon){this._updateIcon("icon",this.options.icon);this._updateTooltip();}},_updateTooltip:function _updateTooltip(){this.title=this.element.attr("title");if(!this.options.showLabel&&!this.title){this.element.attr("title",this.options.label);}},_updateIcon:function _updateIcon(option,value){var icon=option!=="iconPosition",position=icon?this.options.iconPosition:value,displayBlock=position==="top"||position==="bottom";// Create icon
if(!this.icon){this.icon=$("<span>");this._addClass(this.icon,"ui-button-icon","ui-icon");if(!this.options.showLabel){this._addClass("ui-button-icon-only");}}else if(icon){// If we are updating the icon remove the old icon class
this._removeClass(this.icon,null,this.options.icon);}// If we are updating the icon add the new icon class
if(icon){this._addClass(this.icon,null,value);}this._attachIcon(position);// If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
// the iconSpace if there is one.
if(displayBlock){this._addClass(this.icon,null,"ui-widget-icon-block");if(this.iconSpace){this.iconSpace.remove();}}else{// Position is beginning or end so remove the ui-widget-icon-block class and add the
// space if it does not exist
if(!this.iconSpace){this.iconSpace=$("<span> </span>");this._addClass(this.iconSpace,"ui-button-icon-space");}this._removeClass(this.icon,null,"ui-wiget-icon-block");this._attachIconSpace(position);}},_destroy:function _destroy(){this.element.removeAttr("role");if(this.icon){this.icon.remove();}if(this.iconSpace){this.iconSpace.remove();}if(!this.hasTitle){this.element.removeAttr("title");}},_attachIconSpace:function _attachIconSpace(iconPosition){this.icon[/^(?:end|bottom)/.test(iconPosition)?"before":"after"](this.iconSpace);},_attachIcon:function _attachIcon(iconPosition){this.element[/^(?:end|bottom)/.test(iconPosition)?"append":"prepend"](this.icon);},_setOptions:function _setOptions(options){var newShowLabel=options.showLabel===undefined?this.options.showLabel:options.showLabel,newIcon=options.icon===undefined?this.options.icon:options.icon;if(!newShowLabel&&!newIcon){options.showLabel=true;}this._super(options);},_setOption:function _setOption(key,value){if(key==="icon"){if(value){this._updateIcon(key,value);}else if(this.icon){this.icon.remove();if(this.iconSpace){this.iconSpace.remove();}}}if(key==="iconPosition"){this._updateIcon(key,value);}// Make sure we can't end up with a button that has neither text nor icon
if(key==="showLabel"){this._toggleClass("ui-button-icon-only",null,!value);this._updateTooltip();}if(key==="label"){if(this.isInput){this.element.val(value);}else{// If there is an icon, append it, else nothing then append the value
// this avoids removal of the icon when setting label text
this.element.html(value);if(this.icon){this._attachIcon(this.options.iconPosition);this._attachIconSpace(this.options.iconPosition);}}}this._super(key,value);if(key==="disabled"){this._toggleClass(null,"ui-state-disabled",value);this.element[0].disabled=value;if(value){this.element.blur();}}},refresh:function refresh(){// Make sure to only check disabled if its an element that supports this otherwise
// check for the disabled class to determine state
var isDisabled=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");if(isDisabled!==this.options.disabled){this._setOptions({disabled:isDisabled});}this._updateTooltip();}});// DEPRECATED
if($.uiBackCompat!==false){// Text and Icons options
$.widget("ui.button",$.ui.button,{options:{text:true,icons:{primary:null,secondary:null}},_create:function _create(){if(this.options.showLabel&&!this.options.text){this.options.showLabel=this.options.text;}if(!this.options.showLabel&&this.options.text){this.options.text=this.options.showLabel;}if(!this.options.icon&&(this.options.icons.primary||this.options.icons.secondary)){if(this.options.icons.primary){this.options.icon=this.options.icons.primary;}else{this.options.icon=this.options.icons.secondary;this.options.iconPosition="end";}}else if(this.options.icon){this.options.icons.primary=this.options.icon;}this._super();},_setOption:function _setOption(key,value){if(key==="text"){this._super("showLabel",value);return;}if(key==="showLabel"){this.options.text=value;}if(key==="icon"){this.options.icons.primary=value;}if(key==="icons"){if(value.primary){this._super("icon",value.primary);this._super("iconPosition","beginning");}else if(value.secondary){this._super("icon",value.secondary);this._super("iconPosition","end");}}this._superApply(arguments);}});$.fn.button=function(orig){return function(){if(!this.length||this.length&&this[0].tagName!=="INPUT"||this.length&&this[0].tagName==="INPUT"&&this.attr("type")!=="checkbox"&&this.attr("type")!=="radio"){return orig.apply(this,arguments);}if(!$.ui.checkboxradio){$.error("Checkboxradio widget missing");}if(arguments.length===0){return this.checkboxradio({"icon":false});}return this.checkboxradio.apply(this,arguments);};}($.fn.button);$.fn.buttonset=function(){if(!$.ui.controlgroup){$.error("Controlgroup widget missing");}if(arguments[0]==="option"&&arguments[1]==="items"&&arguments[2]){return this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]);}if(arguments[0]==="option"&&arguments[1]==="items"){return this.controlgroup.apply(this,[arguments[0],"items.button"]);}if(_typeof(arguments[0])==="object"&&arguments[0].items){arguments[0].items={button:arguments[0].items};}return this.controlgroup.apply(this,arguments);};}var widgetsButton=$.ui.button;// jscs:disable maximumLineLength
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */ /*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css
$.extend($.ui,{datepicker:{version:"1.12.1"}});var datepicker_instActive;function datepicker_getZindex(elem){var position,value;while(elem.length&&elem[0]!==document){// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}elem=elem.parent();}return 0;}/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */function Datepicker(){this._curInst=null;// The current instance in use
this._keyEvent=false;// If the last event was a key event
this._disabledInputs=[];// List of date picker inputs that have been disabled
this._datepickerShowing=false;// True if the popup picker is showing , false if not
this._inDialog=false;// True if showing within a "dialog", false if not
this._mainDivId="ui-datepicker-div";// The ID of the main datepicker division
this._inlineClass="ui-datepicker-inline";// The name of the inline marker class
this._appendClass="ui-datepicker-append";// The name of the append marker class
this._triggerClass="ui-datepicker-trigger";// The name of the trigger marker class
this._dialogClass="ui-datepicker-dialog";// The name of the dialog marker class
this._disableClass="ui-datepicker-disabled";// The name of the disabled covering marker class
this._unselectableClass="ui-datepicker-unselectable";// The name of the unselectable cell marker class
this._currentClass="ui-datepicker-current-day";// The name of the current day marker class
this._dayOverClass="ui-datepicker-days-cell-over";// The name of the day hover marker class
this.regional=[];// Available regional settings, indexed by language code
this.regional[""]={// Default regional settings
closeText:"Done",// Display text for close link
prevText:"Prev",// Display text for previous month link
nextText:"Next",// Display text for next month link
currentText:"Today",// Display text for current month link
monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],// Names of months for drop-down and formatting
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],// For formatting
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],// For formatting
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],// For formatting
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],// Column headings for days starting at Sunday
weekHeader:"Wk",// Column header for week of the year
dateFormat:"mm/dd/yy",// See format options on parseDate
firstDay:0,// The first day of the week, Sun = 0, Mon = 1, ...
isRTL:false,// True if right-to-left language, false if left-to-right
showMonthAfterYear:false,// True if the year select precedes month, false for month then year
yearSuffix:""// Additional text to append to the year in the month headers
};this._defaults={// Global defaults for all the date picker instances
showOn:"focus",// "focus" for popup on focus,
// "button" for trigger button, or "both" for either
showAnim:"fadeIn",// Name of jQuery animation for popup
showOptions:{},// Options for enhanced animations
defaultDate:null,// Used when field is blank: actual date,
// +/-number for offset from today, null for today
appendText:"",// Display text following the input box, e.g. showing the format
buttonText:"...",// Text for trigger button
buttonImage:"",// URL for trigger button image
buttonImageOnly:false,// True if the image appears alone, false if it appears on a button
hideIfNoPrevNext:false,// True to hide next/previous month links
// if not applicable, false to just disable them
navigationAsDateFormat:false,// True if date formatting applied to prev/today/next links
gotoCurrent:false,// True if today link goes back to current selection instead
changeMonth:false,// True if month can be selected directly, false if only prev/next
changeYear:false,// True if year can be selected directly, false if only prev/next
yearRange:"c-10:c+10",// Range of years to display in drop-down,
// either relative to today's year (-nn:+nn), relative to currently displayed year
// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
showOtherMonths:false,// True to show dates in other months, false to leave blank
selectOtherMonths:false,// True to allow selection of dates in other months, false for unselectable
showWeek:false,// True to show week of the year, false to not show it
calculateWeek:this.iso8601Week,// How to calculate the week of the year,
// takes a Date and returns the number of the week for it
shortYearCutoff:"+10",// Short year values < this are in the current century,
// > this are in the previous century,
// string value starting with "+" for current year + value
minDate:null,// The earliest selectable date, or null for no limit
maxDate:null,// The latest selectable date, or null for no limit
duration:"fast",// Duration of display/closure
beforeShowDay:null,// Function that takes a date and returns an array with
// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
// [2] = cell title (optional), e.g. $.datepicker.noWeekends
beforeShow:null,// Function that takes an input field and
// returns a set of custom settings for the date picker
onSelect:null,// Define a callback function when a date is selected
onChangeMonthYear:null,// Define a callback function when the month or year is changed
onClose:null,// Define a callback function when the datepicker is closed
numberOfMonths:1,// Number of months to show at a time
showCurrentAtPos:0,// The position in multipe months at which to show the current month (starting at 0)
stepMonths:1,// Number of months to step back/forward
stepBigMonths:12,// Number of months to step back/forward for the big links
altField:"",// Selector for an alternate field to store selected dates into
altFormat:"",// The date format to use for the alternate field
constrainInput:true,// The input is constrained by the current date format
showButtonPanel:false,// True to show button panel, false to not show it
autoSize:false,// True to size the input for the date format, false to leave as is
disabled:false// The initial disabled state
};$.extend(this._defaults,this.regional[""]);this.regional.en=$.extend(true,{},this.regional[""]);this.regional["en-US"]=$.extend(true,{},this.regional.en);this.dpDiv=datepicker_bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));}$.extend(Datepicker.prototype,{/* Class name added to elements to indicate already configured with a date picker. */markerClassName:"hasDatepicker",//Keep track of the maximum number of rows displayed (see #7043)
maxRows:4,// TODO rename to "widget" when switching to widget factory
_widgetDatepicker:function _widgetDatepicker(){return this.dpDiv;},/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */setDefaults:function setDefaults(settings){datepicker_extendRemove(this._defaults,settings||{});return this;},/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */_attachDatepicker:function _attachDatepicker(target,settings){var nodeName,inline,inst;nodeName=target.nodeName.toLowerCase();inline=nodeName==="div"||nodeName==="span";if(!target.id){this.uuid+=1;target.id="dp"+this.uuid;}inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{});if(nodeName==="input"){this._connectDatepicker(target,inst);}else if(inline){this._inlineDatepicker(target,inst);}},/* Create a new instance object. */_newInst:function _newInst(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");// escape jQuery meta chars
return{id:id,input:target,// associated target
selectedDay:0,selectedMonth:0,selectedYear:0,// current selection
drawMonth:0,drawYear:0,// month being drawn
inline:inline,// is datepicker inline or not
dpDiv:!inline?this.dpDiv:// presentation div
datepicker_bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))};},/* Attach the date picker to an input field. */_connectDatepicker:function _connectDatepicker(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return;}this._attachments(input,inst);input.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp);this._autoSize(inst);$.data(target,"datepicker",inst);//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
if(inst.settings.disabled){this._disableDatepicker(target);}},/* Make attachments based on settings. */_attachments:function _attachments(input,inst){var showOn,buttonText,buttonImage,appendText=this._get(inst,"appendText"),isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove();}if(appendText){inst.append=$("<span class='"+this._appendClass+"'>"+appendText+"</span>");input[isRTL?"before":"after"](inst.append);}input.off("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove();}showOn=this._get(inst,"showOn");if(showOn==="focus"||showOn==="both"){// pop-up date picker when in the marked field
input.on("focus",this._showDatepicker);}if(showOn==="button"||showOn==="both"){// pop-up date picker when button clicked
buttonText=this._get(inst,"buttonText");buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.on("click",function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]){$.datepicker._hideDatepicker();}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0]);}else{$.datepicker._showDatepicker(input[0]);}return false;});}},/* Apply the maximum length for the date format. */_autoSize:function _autoSize(inst){if(this._get(inst,"autoSize")&&!inst.inline){var findMax,max,maxI,i,date=new Date(2009,12-1,20),// Ensure double digits
dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){findMax=function findMax(names){max=0;maxI=0;for(i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i;}}return maxI;};date.setMonth(findMax(this._get(inst,dateFormat.match(/MM/)?"monthNames":"monthNamesShort")));date.setDate(findMax(this._get(inst,dateFormat.match(/DD/)?"dayNames":"dayNamesShort"))+20-date.getDay());}inst.input.attr("size",this._formatDate(inst,date).length);}},/* Attach an inline date picker to a div. */_inlineDatepicker:function _inlineDatepicker(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return;}divSpan.addClass(this.markerClassName).append(inst.dpDiv);$.data(target,"datepicker",inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
if(inst.settings.disabled){this._disableDatepicker(target);}// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
inst.dpDiv.css("display","block");},/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */_dialogDatepicker:function _dialogDatepicker(input,date,onSelect,settings,pos){var id,browserWidth,browserHeight,scrollX,scrollY,inst=this._dialogInst;// internal instance
if(!inst){this.uuid+=1;id="dp"+this.uuid;this._dialogInput=$("<input type='text' id='"+id+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.on("keydown",this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],"datepicker",inst);}datepicker_extendRemove(inst.settings,settings||{});date=date&&date.constructor===Date?this._formatDate(inst,date):date;this._dialogInput.val(date);this._pos=pos?pos.length?pos:[pos.pageX,pos.pageY]:null;if(!this._pos){browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=// should use actual width/height below
[browserWidth/2-100+scrollX,browserHeight/2-150+scrollY];}// Move input on screen for focus, but hidden behind dialog
this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv);}$.data(this._dialogInput[0],"datepicker",inst);return this;},/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */_destroyDatepicker:function _destroyDatepicker(target){var nodeName,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();$.removeData(target,"datepicker");if(nodeName==="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp);}else if(nodeName==="div"||nodeName==="span"){$target.removeClass(this.markerClassName).empty();}if(datepicker_instActive===inst){datepicker_instActive=null;}},/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */_enableDatepicker:function _enableDatepicker(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false;}).end().filter("img").css({opacity:"1.0",cursor:""});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false);}this._disabledInputs=$.map(this._disabledInputs,function(value){return value===target?null:value;});// delete entry
},/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */_disableDatepicker:function _disableDatepicker(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true;}).end().filter("img").css({opacity:"0.5",cursor:"default"});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true);}this._disabledInputs=$.map(this._disabledInputs,function(value){return value===target?null:value;});// delete entry
this._disabledInputs[this._disabledInputs.length]=target;},/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */_isDisabledDatepicker:function _isDisabledDatepicker(target){if(!target){return false;}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]===target){return true;}}return false;},/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */_getInst:function _getInst(target){try{return $.data(target,"datepicker");}catch(err){throw"Missing instance data for this datepicker";}},/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */_optionDatepicker:function _optionDatepicker(target,name,value){var settings,date,minDate,maxDate,inst=this._getInst(target);if(arguments.length===2&&typeof name==="string"){return name==="defaults"?$.extend({},$.datepicker._defaults):inst?name==="all"?$.extend({},inst.settings):this._get(inst,name):null;}settings=name||{};if(typeof name==="string"){settings={};settings[name]=value;}if(inst){if(this._curInst===inst){this._hideDatepicker();}date=this._getDateDatepicker(target,true);minDate=this._getMinMaxDate(inst,"min");maxDate=this._getMinMaxDate(inst,"max");datepicker_extendRemove(inst.settings,settings);// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate);}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate);}if("disabled"in settings){if(settings.disabled){this._disableDatepicker(target);}else{this._enableDatepicker(target);}}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst);}},// Change method deprecated
_changeDatepicker:function _changeDatepicker(target,name,value){this._optionDatepicker(target,name,value);},/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */_refreshDatepicker:function _refreshDatepicker(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst);}},/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */_setDateDatepicker:function _setDateDatepicker(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst);}},/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */_getDateDatepicker:function _getDateDatepicker(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault);}return inst?this._getDate(inst):null;},/* Handle keystrokes. */_doKeyDown:function _doKeyDown(event){var onSelect,dateStr,sel,inst=$.datepicker._getInst(event.target),handled=true,isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;// hide on tab out
case 13:sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);}onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){dateStr=$.datepicker._formatDate(inst);// Trigger custom callback
onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst]);}else{$.datepicker._hideDatepicker();}return false;// don't submit the form
case 27:$.datepicker._hideDatepicker();break;// hide on escape
case 33:$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");break;// previous month/year on page up/+ ctrl
case 34:$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");break;// next month/year on page down/+ ctrl
case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target);}handled=event.ctrlKey||event.metaKey;break;// clear on ctrl or command +end
case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target);}handled=event.ctrlKey||event.metaKey;break;// current on ctrl or command +home
case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,isRTL?+1:-1,"D");}handled=event.ctrlKey||event.metaKey;// -1 day on ctrl or command +left
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");}// next month/year on alt +left on Mac
break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D");}handled=event.ctrlKey||event.metaKey;break;// -1 week on ctrl or command +up
case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,isRTL?-1:+1,"D");}handled=event.ctrlKey||event.metaKey;// +1 day on ctrl or command +right
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");}// next month/year on alt +right
break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D");}handled=event.ctrlKey||event.metaKey;break;// +1 week on ctrl or command +down
default:handled=false;}}else if(event.keyCode===36&&event.ctrlKey){// display the date picker on ctrl+home
$.datepicker._showDatepicker(this);}else{handled=false;}if(handled){event.preventDefault();event.stopPropagation();}},/* Filter entered characters - based on date format. */_doKeyPress:function _doKeyPress(event){var chars,chr,inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));chr=String.fromCharCode(event.charCode==null?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||chr<" "||!chars||chars.indexOf(chr)>-1;}},/* Synchronise manual entry and field/alternate field. */_doKeyUp:function _doKeyUp(event){var date,inst=$.datepicker._getInst(event.target);if(inst.input.val()!==inst.lastVal){try{date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),inst.input?inst.input.val():null,$.datepicker._getFormatConfig(inst));if(date){// only if valid
$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst);}}catch(err){}}return true;},/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */_showDatepicker:function _showDatepicker(input){input=input.target||input;if(input.nodeName.toLowerCase()!=="input"){// find from button/image trigger
input=$("input",input.parentNode)[0];}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){// already here
return;}var inst,beforeShow,beforeShowSettings,isFixed,offset,showAnim,duration;inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!==inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);}}beforeShow=$.datepicker._get(inst,"beforeShow");beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return;}datepicker_extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){// hide cursor
input.value="";}if(!$.datepicker._pos){// position below input
$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight;// add the height
}isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")==="fixed";return!isFixed;});offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;//to avoid flashes on Firefox
inst.dpDiv.empty();// determine sizing offscreen
inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);// fix width for dynamic number of date pickers
// and adjust position before showing
offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":isFixed?"fixed":"absolute",display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){showAnim=$.datepicker._get(inst,"showAnim");duration=$.datepicker._get(inst,"duration");inst.dpDiv.css("z-index",datepicker_getZindex($(input))+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects.effect[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration);}else{inst.dpDiv[showAnim||"show"](showAnim?duration:null);}if($.datepicker._shouldFocusInput(inst)){inst.input.trigger("focus");}$.datepicker._curInst=inst;}},/* Generate the date picker content. */_updateDatepicker:function _updateDatepicker(inst){this.maxRows=4;//Reset the max number of rows being displayed (see #7043)
datepicker_instActive=inst;// for delegate hover events
inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var origyearshtml,numMonths=this._getNumberOfMonths(inst),cols=numMonths[1],width=17,activeCell=inst.dpDiv.find("."+this._dayOverClass+" a");if(activeCell.length>0){datepicker_handleMouseover.apply(activeCell.get(0));}inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",width*cols+"em");}inst.dpDiv[(numMonths[0]!==1||numMonths[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)){inst.input.trigger("focus");}// Deffered render of the years select (to avoid flashes on Firefox)
if(inst.yearshtml){origyearshtml=inst.yearshtml;setTimeout(function(){//assure that inst.yearshtml didn't change.
if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);}origyearshtml=inst.yearshtml=null;},0);}},// #6694 - don't focus the input if it's already focused
// this breaks the change event in IE
// Support: IE and jQuery <1.9
_shouldFocusInput:function _shouldFocusInput(inst){return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus");},/* Check positioning to remain on screen. */_checkOffset:function _checkOffset(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth(),dpHeight=inst.dpDiv.outerHeight(),inputWidth=inst.input?inst.input.outerWidth():0,inputHeight=inst.input?inst.input.outerHeight():0,viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=this._get(inst,"isRTL")?dpWidth-inputWidth:0;offset.left-=isFixed&&offset.left===inst.input.offset().left?$(document).scrollLeft():0;offset.top-=isFixed&&offset.top===inst.input.offset().top+inputHeight?$(document).scrollTop():0;// Now check if datepicker is showing outside window viewport - move to a better place if so.
offset.left-=Math.min(offset.left,offset.left+dpWidth>viewWidth&&viewWidth>dpWidth?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,offset.top+dpHeight>viewHeight&&viewHeight>dpHeight?Math.abs(dpHeight+inputHeight):0);return offset;},/* Find an object's position on the screen. */_findPos:function _findPos(obj){var position,inst=this._getInst(obj),isRTL=this._get(inst,"isRTL");while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"];}position=$(obj).offset();return[position.left,position.top];},/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */_hideDatepicker:function _hideDatepicker(input){var showAnim,duration,postProcess,onClose,inst=this._curInst;if(!inst||input&&inst!==$.data(input,"datepicker")){return;}if(this._datepickerShowing){showAnim=this._get(inst,"showAnim");duration=this._get(inst,"duration");postProcess=function postProcess(){$.datepicker._tidyDialog(inst);};// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess);}else{inst.dpDiv[showAnim==="slideDown"?"slideUp":showAnim==="fadeIn"?"fadeOut":"hide"](showAnim?duration:null,postProcess);}if(!showAnim){postProcess();}this._datepickerShowing=false;onClose=this._get(inst,"onClose");if(onClose){onClose.apply(inst.input?inst.input[0]:null,[inst.input?inst.input.val():"",inst]);}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv);}}this._inDialog=false;}},/* Tidy up after a dialog display. */_tidyDialog:function _tidyDialog(inst){inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");},/* Close date picker if clicked elsewhere. */_checkExternalClick:function _checkExternalClick(event){if(!$.datepicker._curInst){return;}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if($target[0].id!==$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length===0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)||$target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst){$.datepicker._hideDatepicker();}},/* Adjust one of the date sub-fields. */_adjustDate:function _adjustDate(id,offset,period){var target=$(id),inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return;}this._adjustInstDate(inst,offset+(period==="M"?this._get(inst,"showCurrentAtPos"):0),// undo positioning
period);this._updateDatepicker(inst);},/* Action for current link. */_gotoToday:function _gotoToday(id){var date,target=$(id),inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear;}else{date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();}this._notifyChange(inst);this._adjustDate(target);},/* Action for selecting a new month/year. */_selectMonthYear:function _selectMonthYear(id,select,period){var target=$(id),inst=this._getInst(target[0]);inst["selected"+(period==="M"?"Month":"Year")]=inst["draw"+(period==="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target);},/* Action for selecting a day. */_selectDay:function _selectDay(id,month,year,td){var inst,target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return;}inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));},/* Erase the input field and hide the date picker. */_clearDate:function _clearDate(id){var target=$(id);this._selectDate(target,"");},/* Update the input field with the selected date. */_selectDate:function _selectDate(id,dateStr){var onSelect,target=$(id),inst=this._getInst(target[0]);dateStr=dateStr!=null?dateStr:this._formatDate(inst);if(inst.input){inst.input.val(dateStr);}this._updateAlternate(inst);onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst]);// trigger custom callback
}else if(inst.input){inst.input.trigger("change");// fire the change event
}if(inst.inline){this._updateDatepicker(inst);}else{this._hideDatepicker();this._lastInput=inst.input[0];if(_typeof(inst.input[0])!=="object"){inst.input.trigger("focus");// restore focus
}this._lastInput=null;}},/* Update any alternate field to synchronise with the main field. */_updateAlternate:function _updateAlternate(inst){var altFormat,date,dateStr,altField=this._get(inst,"altField");if(altField){// update alternate field too
altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).val(dateStr);}},/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */noWeekends:function noWeekends(date){var day=date.getDay();return[day>0&&day<6,""];},/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */iso8601Week:function iso8601Week(date){var time,checkDate=new Date(date.getTime());// Find Thursday of this week starting on Monday
checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));time=checkDate.getTime();checkDate.setMonth(0);// Compare with Jan 1
checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;},/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */parseDate:function parseDate(format,value,settings){if(format==null||value==null){throw"Invalid arguments";}value=_typeof(value)==="object"?value.toString():value+"";if(value===""){return null;}var iFormat,dim,extra,iValue=0,shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,shortYearCutoff=typeof shortYearCutoffTemp!=="string"?shortYearCutoffTemp:new Date().getFullYear()%100+parseInt(shortYearCutoffTemp,10),dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,year=-1,month=-1,day=-1,doy=-1,literal=false,date,// Check whether a format character is doubled
lookAhead=function lookAhead(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;if(matches){iFormat++;}return matches;},// Extract a number from the string value
getNumber=function getNumber(match){var isDoubled=lookAhead(match),size=match==="@"?14:match==="!"?20:match==="y"&&isDoubled?4:match==="o"?3:2,minSize=match==="y"?size:1,digits=new RegExp("^\\d{"+minSize+","+size+"}"),num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue;}iValue+=num[0].length;return parseInt(num[0],10);},// Extract a name from the string value and convert to an index
getName=function getName(match,shortNames,longNames){var index=-1,names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]];}).sort(function(a,b){return-(a[1].length-b[1].length);});$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()){index=pair[0];iValue+=name.length;return false;}});if(index!==-1){return index+1;}else{throw"Unknown name at position "+iValue;}},// Confirm that a literal character matches the string value
checkLiteral=function checkLiteral(){if(value.charAt(iValue)!==format.charAt(iFormat)){throw"Unexpected literal at position "+iValue;}iValue++;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{checkLiteral();}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral();}else{literal=true;}break;default:checkLiteral();}}}if(iValue<value.length){extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra;}}if(year===-1){year=new Date().getFullYear();}else if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100);}if(doy>-1){month=1;day=doy;do{dim=this._getDaysInMonth(year,month-1);if(day<=dim){break;}month++;day-=dim;}while(true);}date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day){throw"Invalid date";// E.g. 31/02/00
}return date;},/* Standard date formats. */ATOM:"yy-mm-dd",// RFC 3339 (ISO 8601)
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",// RFC 822
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",// ISO 8601
_ticksTo1970:((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000,/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */formatDate:function formatDate(format,date,settings){if(!date){return"";}var iFormat,dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,// Check whether a format character is doubled
lookAhead=function lookAhead(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;if(matches){iFormat++;}return matches;},// Format a number, with leading zero if necessary
formatNumber=function formatNumber(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num;}}return num;},// Format a name, short or long as requested
formatName=function formatName(match,value,shortNames,longNames){return lookAhead(match)?longNames[value]:shortNames[value];},output="",literal=false;if(date){for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{output+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=lookAhead("y")?date.getFullYear():(date.getFullYear()%100<10?"0":"")+date.getFullYear()%100;break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'";}else{literal=true;}break;default:output+=format.charAt(iFormat);}}}}return output;},/* Extract all possible characters from the date format. */_possibleChars:function _possibleChars(format){var iFormat,chars="",literal=false,// Check whether a format character is doubled
lookAhead=function lookAhead(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;if(matches){iFormat++;}return matches;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{chars+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;// Accept anything
case"'":if(lookAhead("'")){chars+="'";}else{literal=true;}break;default:chars+=format.charAt(iFormat);}}}return chars;},/* Get a setting value, defaulting if necessary. */_get:function _get(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},/* Parse existing date and initialise date picker. */_setDateFromField:function _setDateFromField(inst,noDefault){if(inst.input.val()===inst.lastVal){return;}var dateFormat=this._get(inst,"dateFormat"),dates=inst.lastVal=inst.input?inst.input.val():null,defaultDate=this._getDefaultDate(inst),date=defaultDate,settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate;}catch(event){dates=noDefault?"":dates;}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=dates?date.getDate():0;inst.currentMonth=dates?date.getMonth():0;inst.currentYear=dates?date.getFullYear():0;this._adjustInstDate(inst);},/* Retrieve the default date shown on opening. */_getDefaultDate:function _getDefaultDate(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()));},/* A date may be specified as an exact value or a relative one. */_determineDate:function _determineDate(inst,date,defaultDate){var offsetNumeric=function offsetNumeric(offset){var date=new Date();date.setDate(date.getDate()+offset);return date;},offsetString=function offsetString(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst));}catch(e){// Ignore
}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date(),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;}matches=pattern.exec(offset);}return new Date(year,month,day);},newDate=date==null||date===""?defaultDate:typeof date==="string"?offsetString(date):typeof date==="number"?isNaN(date)?defaultDate:offsetNumeric(date):new Date(date.getTime());newDate=newDate&&newDate.toString()==="Invalid Date"?defaultDate:newDate;if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0);}return this._daylightSavingAdjust(newDate);},/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */_daylightSavingAdjust:function _daylightSavingAdjust(date){if(!date){return null;}date.setHours(date.getHours()>12?date.getHours()+2:0);return date;},/* Set the date(s) directly. */_setDate:function _setDate(inst,date,noChange){var clear=!date,origMonth=inst.selectedMonth,origYear=inst.selectedYear,newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){this._notifyChange(inst);}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst));}},/* Retrieve the date(s) directly. */_getDate:function _getDate(inst){var startDate=!inst.currentYear||inst.input&&inst.input.val()===""?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return startDate;},/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */_attachHandlers:function _attachHandlers(inst){var stepMonths=this._get(inst,"stepMonths"),id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function prev(){$.datepicker._adjustDate(id,-stepMonths,"M");},next:function next(){$.datepicker._adjustDate(id,+stepMonths,"M");},hide:function hide(){$.datepicker._hideDatepicker();},today:function today(){$.datepicker._gotoToday(id);},selectDay:function selectDay(){$.datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false;},selectMonth:function selectMonth(){$.datepicker._selectMonthYear(id,this,"M");return false;},selectYear:function selectYear(){$.datepicker._selectMonthYear(id,this,"Y");return false;}};$(this).on(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")]);});},/* Generate the HTML for the current state of the date picker. */_generateHTML:function _generateHTML(inst){var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,monthNames,monthNamesShort,beforeShowDay,showOtherMonths,selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,printDate,dRow,tbody,daySettings,otherMonth,unselectable,tempDate=new Date(),today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),// clear time
isRTL=this._get(inst,"isRTL"),showButtonPanel=this._get(inst,"showButtonPanel"),hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),numMonths=this._getNumberOfMonths(inst),showCurrentAtPos=this._get(inst,"showCurrentAtPos"),stepMonths=this._get(inst,"stepMonths"),isMultiMonth=numMonths[0]!==1||numMonths[1]!==1,currentDate=this._daylightSavingAdjust(!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),drawMonth=inst.drawMonth-showCurrentAtPos,drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}if(maxDate){maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[0]*numMonths[1]+1,maxDate.getDate()));maxDraw=minDate&&maxDraw<minDate?minDate:maxDraw;while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;prevText=this._get(inst,"prevText");prevText=!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst));prev=this._canAdjustMonth(inst,-1,drawYear,drawMonth)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>":hideIfNoPrevNext?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>";nextText=this._get(inst,"nextText");nextText=!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst));next=this._canAdjustMonth(inst,+1,drawYear,drawMonth)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>":hideIfNoPrevNext?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>";currentText=this._get(inst,"currentText");gotoDate=this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today;currentText=!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst));controls=!inst.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(inst,"closeText")+"</button>":"";buttonPanel=showButtonPanel?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=isNaN(firstDay)?0:firstDay;showWeek=this._get(inst,"showWeek");dayNames=this._get(inst,"dayNames");dayNamesMin=this._get(inst,"dayNamesMin");monthNames=this._get(inst,"monthNames");monthNamesShort=this._get(inst,"monthNamesShort");beforeShowDay=this._get(inst,"beforeShowDay");showOtherMonths=this._get(inst,"showOtherMonths");selectOtherMonths=this._get(inst,"selectOtherMonths");defaultDate=this._getDefaultDate(inst);html="";for(row=0;row<numMonths[0];row++){group="";this.maxRows=4;for(col=0;col<numMonths[1];col++){selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));cornerClass=" ui-corner-all";calender="";if(isMultiMonth){calender+="<div class='ui-datepicker-group";if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break;}}calender+="'>";}calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+(/all|left/.test(cornerClass)&&row===0?isRTL?next:prev:"")+(/all|right/.test(cornerClass)&&row===0?isRTL?prev:next:"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+// draw month headers
"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";thead=showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"";for(dow=0;dow<7;dow++){// days of the week
day=(dow+firstDay)%7;thead+="<th scope='col'"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>";}calender+=thead+"</tr></thead><tbody>";daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);}leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;curRows=Math.ceil((leadDays+daysInMonth)/7);// calculate the number of rows to generate
numRows=isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows;//If multiple months, use the higher number of rows (see #7043)
this.maxRows=numRows;printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(dRow=0;dRow<numRows;dRow++){// create date picker rows
calender+="<tr>";tbody=!showWeek?"":"<td class='ui-datepicker-week-col'>"+this._get(inst,"calculateWeek")(printDate)+"</td>";for(dow=0;dow<7;dow++){// create date picker days
daySettings=beforeShowDay?beforeShowDay.apply(inst.input?inst.input[0]:null,[printDate]):[true,""];otherMonth=printDate.getMonth()!==drawMonth;unselectable=otherMonth&&!selectOtherMonths||!daySettings[0]||minDate&&printDate<minDate||maxDate&&printDate>maxDate;tbody+="<td class='"+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(// highlight weekends
otherMonth?" ui-datepicker-other-month":"")+(// highlight days from other months
printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent||// user pressed key
defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime()?// or defaultDate is current printedDate and defaultDate is selectedDate
" "+this._dayOverClass:"")+(// highlight selected day
unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(// highlight unselectable days
otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(// highlight custom dates
printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+(// highlight selected day
printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+(// highlight today (if different)
(!otherMonth||showOtherMonths)&&daySettings[2]?" title='"+daySettings[2].replace(/'/g,"&#39;")+"'":"")+(// cell title
unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+(// actions
otherMonth&&!showOtherMonths?"&#xa0;":// display for other months
unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+(printDate.getTime()===today.getTime()?" ui-state-highlight":"")+(printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+(// highlight selected day
otherMonth?" ui-priority-secondary":"")+// distinguish dates from other months
"' href='#'>"+printDate.getDate()+"</a>")+"</td>";// display selectable date
printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);}calender+=tbody+"</tr>";}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}calender+="</tbody></table>"+(isMultiMonth?"</div>"+(numMonths[0]>0&&col===numMonths[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"");group+=calender;}html+=group;}html+=buttonPanel;inst._keyEvent=false;return html;},/* Generate the month and year header. */_generateMonthYearHeader:function _generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),html="<div class='ui-datepicker-title'>",monthHtml="";// Month selection
if(secondary||!changeMonth){monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>";}else{inMinYear=minDate&&minDate.getFullYear()===drawYear;inMaxYear=maxDate&&maxDate.getFullYear()===drawYear;monthHtml+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+="<option value='"+month+"'"+(month===drawMonth?" selected='selected'":"")+">"+monthNamesShort[month]+"</option>";}}monthHtml+="</select>";}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"");}// Year selection
if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+="<span class='ui-datepicker-year'>"+drawYear+"</span>";}else{// determine range of years to display
years=this._get(inst,"yearRange").split(":");thisYear=new Date().getFullYear();determineYear=function determineYear(value){var year=value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):value.match(/[+\-].*/)?thisYear+parseInt(value,10):parseInt(value,10);return isNaN(year)?thisYear:year;};year=determineYear(years[0]);endYear=Math.max(year,determineYear(years[1]||""));year=minDate?Math.max(year,minDate.getFullYear()):year;endYear=maxDate?Math.min(endYear,maxDate.getFullYear()):endYear;inst.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;year<=endYear;year++){inst.yearshtml+="<option value='"+year+"'"+(year===drawYear?" selected='selected'":"")+">"+year+"</option>";}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null;}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml;}html+="</div>";// Close datepicker_header
return html;},/* Adjust one of the date sub-fields. */_adjustInstDate:function _adjustInstDate(inst,offset,period){var year=inst.selectedYear+(period==="Y"?offset:0),month=inst.selectedMonth+(period==="M"?offset:0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D"?offset:0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period==="M"||period==="Y"){this._notifyChange(inst);}},/* Ensure a date is within any min/max bounds. */_restrictMinMax:function _restrictMinMax(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=minDate&&date<minDate?minDate:date;return maxDate&&newDate>maxDate?maxDate:newDate;},/* Notify change of month/year. */_notifyChange:function _notifyChange(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply(inst.input?inst.input[0]:null,[inst.selectedYear,inst.selectedMonth+1,inst]);}},/* Determine the number of months to show. */_getNumberOfMonths:function _getNumberOfMonths(inst){var numMonths=this._get(inst,"numberOfMonths");return numMonths==null?[1,1]:typeof numMonths==="number"?[1,numMonths]:numMonths;},/* Determine the current maximum date - ensure no time components are set. */_getMinMaxDate:function _getMinMaxDate(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null);},/* Find the number of days in a given month. */_getDaysInMonth:function _getDaysInMonth(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();},/* Find the day of the week of the first of a month. */_getFirstDayOfMonth:function _getFirstDayOfMonth(year,month){return new Date(year,month,1).getDay();},/* Determines if we should allow a "next/prev" month display change. */_canAdjustMonth:function _canAdjustMonth(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));}return this._isInRange(inst,date);},/* Is the given date in the accepted range? */_isInRange:function _isInRange(inst,date){var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");if(years){yearSplit=years.split(":");currentYear=new Date().getFullYear();minYear=parseInt(yearSplit[0],10);maxYear=parseInt(yearSplit[1],10);if(yearSplit[0].match(/[+\-].*/)){minYear+=currentYear;}if(yearSplit[1].match(/[+\-].*/)){maxYear+=currentYear;}}return(!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())&&(!minYear||date.getFullYear()>=minYear)&&(!maxYear||date.getFullYear()<=maxYear);},/* Provide the configuration settings for formatting/parsing. */_getFormatConfig:function _getFormatConfig(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=typeof shortYearCutoff!=="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10);return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")};},/* Format the given date for display. */_formatDate:function _formatDate(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear;}var date=day?_typeof(day)==="object"?day:this._daylightSavingAdjust(new Date(year,month,day)):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst));}});/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */function datepicker_bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.on("mouseout",selector,function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).removeClass("ui-datepicker-prev-hover");}if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).removeClass("ui-datepicker-next-hover");}}).on("mouseover",selector,datepicker_handleMouseover);}function datepicker_handleMouseover(){if(!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline?datepicker_instActive.dpDiv.parent()[0]:datepicker_instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).addClass("ui-datepicker-prev-hover");}if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).addClass("ui-datepicker-next-hover");}}}/* jQuery extend now ignores nulls! */function datepicker_extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null){target[name]=props[name];}}return target;}/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */$.fn.datepicker=function(options){/* Verify an empty collection wasn't passed - Fixes #6976 */if(!this.length){return this;}/* Initialise the date picker. */if(!$.datepicker.initialized){$(document).on("mousedown",$.datepicker._checkExternalClick);$.datepicker.initialized=true;}/* Append datepicker main container to body if not exist. */if($("#"+$.datepicker._mainDivId).length===0){$("body").append($.datepicker.dpDiv);}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}if(options==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}return this.each(function(){typeof options==="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options);});};$.datepicker=new Datepicker();// singleton instance
$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.12.1";var widgetsDatepicker=$.datepicker;// This file is deprecated
var ie=$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/
var mouseHandled=false;$(document).on("mouseup",function(){mouseHandled=false;});var widgetsMouse=$.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function _mouseInit(){var that=this;this.element.on("mousedown."+this.widgetName,function(event){return that._mouseDown(event);}).on("click."+this.widgetName,function(event){if(true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false;}});this.started=false;},// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function _mouseDestroy(){this.element.off("."+this.widgetName);if(this._mouseMoveDelegate){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);}},_mouseDown:function _mouseDown(event){// don't let more than one widget handle mouseStart
if(mouseHandled){return;}this._mouseMoved=false;// We may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(event);this._mouseDownEvent=event;var that=this,btnIsLeft=event.which===1,// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
elIsCancel=typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false;if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true;},this.options.delay);}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(event)!==false;if(!this._mouseStarted){event.preventDefault();return true;}}// Click event may never have fired (Gecko & Opera)
if(true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent");}// These delegates are required to keep context
this._mouseMoveDelegate=function(event){return that._mouseMove(event);};this._mouseUpDelegate=function(event){return that._mouseUp(event);};this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true;},_mouseMove:function _mouseMove(event){// Only check for mouseups outside the document if you've moved inside the document
// at least once. This prevents the firing of mouseup in the case of IE<9, which will
// fire a mousemove event if content is placed under the cursor. See #7778
// Support: IE <9
if(this._mouseMoved){// IE mouseup check - mouseup happened when mouse was out of window
if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event);// Iframe mouseup check - mouseup occurred in another document
}else if(!event.which){// Support: Safari <=8 - 9
// Safari sets which to 0 if you press any of the following keys
// during a drag (#14461)
if(event.originalEvent.altKey||event.originalEvent.ctrlKey||event.originalEvent.metaKey||event.originalEvent.shiftKey){this.ignoreMissingWhich=true;}else if(!this.ignoreMissingWhich){return this._mouseUp(event);}}}if(event.which||event.button){this._mouseMoved=true;}if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,event)!==false;this._mouseStarted?this._mouseDrag(event):this._mouseUp(event);}return!this._mouseStarted;},_mouseUp:function _mouseUp(event){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",true);}this._mouseStop(event);}if(this._mouseDelayTimer){clearTimeout(this._mouseDelayTimer);delete this._mouseDelayTimer;}this.ignoreMissingWhich=false;mouseHandled=false;event.preventDefault();},_mouseDistanceMet:function _mouseDistanceMet(event){return Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance;},_mouseDelayMet:function _mouseDelayMet()/* event */{return this.mouseDelayMet;},// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function _mouseStart()/* event */{},_mouseDrag:function _mouseDrag()/* event */{},_mouseStop:function _mouseStop()/* event */{},_mouseCapture:function _mouseCapture()/* event */{return true;}});// $.ui.plugin is deprecated. Use $.widget() extensions instead.
var plugin=$.ui.plugin={add:function add(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function call(instance,name,args,allowDisconnected){var i,set=instance.plugins[name];if(!set){return;}if(!allowDisconnected&&(!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11)){return;}for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}};var safeBlur=$.ui.safeBlur=function(element){// Support: IE9 - 10 only
// If the <body> is blurred, IE will switch windows, see #9420
if(element&&element.nodeName.toLowerCase()!=="body"){$(element).trigger("blur");}};/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css
$.widget("ui.draggable",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,// Callbacks
drag:null,start:null,stop:null},_create:function _create(){if(this.options.helper==="original"){this._setPositionRelative();}if(this.options.addClasses){this._addClass("ui-draggable");}this._setHandleClassName();this._mouseInit();},_setOption:function _setOption(key,value){this._super(key,value);if(key==="handle"){this._removeHandleClassName();this._setHandleClassName();}},_destroy:function _destroy(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true;return;}this._removeHandleClassName();this._mouseDestroy();},_mouseCapture:function _mouseCapture(event){var o=this.options;// Among others, prevent a drag on a resizable-handle
if(this.helper||o.disabled||$(event.target).closest(".ui-resizable-handle").length>0){return false;}//Quit if we're not on a valid handle
this.handle=this._getHandle(event);if(!this.handle){return false;}this._blurActiveElement(event);this._blockFrames(o.iframeFix===true?"iframe":o.iframeFix);return true;},_blockFrames:function _blockFrames(selector){this.iframeBlocks=this.document.find(selector).map(function(){var iframe=$(this);return $("<div>").css("position","absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];});},_unblockFrames:function _unblockFrames(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks;}},_blurActiveElement:function _blurActiveElement(event){var activeElement=$.ui.safeActiveElement(this.document[0]),target=$(event.target);// Don't blur if the event occurred on an element that is within
// the currently focused element
// See #10527, #12472
if(target.closest(activeElement).length){return;}// Blur any element that currently has focus, see #4261
$.ui.safeBlur(activeElement);},_mouseStart:function _mouseStart(event){var o=this.options;//Create and append the visible helper
this.helper=this._createHelper(event);this._addClass(this.helper,"ui-draggable-dragging");//Cache the helper size
this._cacheHelperProportions();//If ddmanager is used for droppables, set the global draggable
if($.ui.ddmanager){$.ui.ddmanager.current=this;}/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */ //Cache the margins of the original element
this._cacheMargins();//Store the helper's css position
this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent(true);this.offsetParent=this.helper.offsetParent();this.hasFixedAncestor=this.helper.parents().filter(function(){return $(this).css("position")==="fixed";}).length>0;//The element's absolute position on the page minus margins
this.positionAbs=this.element.offset();this._refreshOffsets(event);//Generate the original position
this.originalPosition=this.position=this._generatePosition(event,false);this.originalPageX=event.pageX;this.originalPageY=event.pageY;//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt);//Set a containment if given in the options
this._setContainment();//Trigger event + callbacks
if(this._trigger("start",event)===false){this._clear();return false;}//Recache the helper size
this._cacheHelperProportions();//Prepare the droppable offsets
if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}// Execute the drag once - this causes the helper not to be visible before getting its
// correct position
this._mouseDrag(event,true);// If the ddmanager is used for droppables, inform the manager that dragging has started
// (see #5003)
if($.ui.ddmanager){$.ui.ddmanager.dragStart(this,event);}return true;},_refreshOffsets:function _refreshOffsets(event){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:false,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:event.pageX-this.offset.left,top:event.pageY-this.offset.top};},_mouseDrag:function _mouseDrag(event,noPropagation){// reset any necessary cached properties (see #5009)
if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset();}//Compute the helpers position
this.position=this._generatePosition(event,true);this.positionAbs=this._convertPositionTo("absolute");//Call plugins and callbacks and use the resulting position if something is returned
if(!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===false){this._mouseUp(new $.Event("mouseup",event));return false;}this.position=ui.position;}this.helper[0].style.left=this.position.left+"px";this.helper[0].style.top=this.position.top+"px";if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}return false;},_mouseStop:function _mouseStop(event){//If we are using droppables, inform the manager about the drop
var that=this,dropped=false;if($.ui.ddmanager&&!this.options.dropBehaviour){dropped=$.ui.ddmanager.drop(this,event);}//if a drop comes from outside (a sortable)
if(this.dropped){dropped=this.dropped;this.dropped=false;}if(this.options.revert==="invalid"&&!dropped||this.options.revert==="valid"&&dropped||this.options.revert===true||$.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped)){$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(that._trigger("stop",event)!==false){that._clear();}});}else{if(this._trigger("stop",event)!==false){this._clear();}}return false;},_mouseUp:function _mouseUp(event){this._unblockFrames();// If the ddmanager is used for droppables, inform the manager that dragging has stopped
// (see #5003)
if($.ui.ddmanager){$.ui.ddmanager.dragStop(this,event);}// Only need to focus if the event occurred on the draggable itself, see #10527
if(this.handleElement.is(event.target)){// The interaction is over; whether or not the click resulted in a drag,
// focus the element
this.element.trigger("focus");}return $.ui.mouse.prototype._mouseUp.call(this,event);},cancel:function cancel(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp(new $.Event("mouseup",{target:this.element[0]}));}else{this._clear();}return this;},_getHandle:function _getHandle(event){return this.options.handle?!!$(event.target).closest(this.element.find(this.options.handle)).length:true;},_setHandleClassName:function _setHandleClassName(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;this._addClass(this.handleElement,"ui-draggable-handle");},_removeHandleClassName:function _removeHandleClassName(){this._removeClass(this.handleElement,"ui-draggable-handle");},_createHelper:function _createHelper(event){var o=this.options,helperIsFunction=$.isFunction(o.helper),helper=helperIsFunction?$(o.helper.apply(this.element[0],[event])):o.helper==="clone"?this.element.clone().removeAttr("id"):this.element;if(!helper.parents("body").length){helper.appendTo(o.appendTo==="parent"?this.element[0].parentNode:o.appendTo);}// Http://bugs.jqueryui.com/ticket/9446
// a helper function can return the original element
// which wouldn't have been set to relative in _create
if(helperIsFunction&&helper[0]===this.element[0]){this._setPositionRelative();}if(helper[0]!==this.element[0]&&!/(fixed|absolute)/.test(helper.css("position"))){helper.css("position","absolute");}return helper;},_setPositionRelative:function _setPositionRelative(){if(!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative";}},_adjustOffsetFromHelper:function _adjustOffsetFromHelper(obj){if(typeof obj==="string"){obj=obj.split(" ");}if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_isRootNode:function _isRootNode(element){return /(html|body)/i.test(element.tagName)||element===this.document[0];},_getParentOffset:function _getParentOffset(){//Get the offsetParent and cache its position
var po=this.offsetParent.offset(),document=this.document[0];// This is a special case where we need to modify a offset calculated on start, since the
// following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the
// next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
// the document, which means that the scroll is included in the initial calculation of the
// offset of the parent, and never recalculated upon drag
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}if(this._isRootNode(this.offsetParent[0])){po={top:0,left:0};}return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function _getRelativeOffset(){if(this.cssPosition!=="relative"){return{top:0,left:0};}var p=this.element.position(),scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+(!scrollIsRootNode?this.scrollParent.scrollTop():0),left:p.left-(parseInt(this.helper.css("left"),10)||0)+(!scrollIsRootNode?this.scrollParent.scrollLeft():0)};},_cacheMargins:function _cacheMargins(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0};},_cacheHelperProportions:function _cacheHelperProportions(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function _setContainment(){var isUserScrollable,c,ce,o=this.options,document=this.document[0];this.relativeContainer=null;if(!o.containment){this.containment=null;return;}if(o.containment==="window"){this.containment=[$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,$(window).scrollLeft()+$(window).width()-this.helperProportions.width-this.margins.left,$(window).scrollTop()+($(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return;}if(o.containment==="document"){this.containment=[0,0,$(document).width()-this.helperProportions.width-this.margins.left,($(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return;}if(o.containment.constructor===Array){this.containment=o.containment;return;}if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}c=$(o.containment);ce=c[0];if(!ce){return;}isUserScrollable=/(scroll|auto)/.test(c.css("overflow"));this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(isUserScrollable?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(isUserScrollable?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relativeContainer=c;},_convertPositionTo:function _convertPositionTo(d,pos){if(!pos){pos=this.position;}var mod=d==="absolute"?1:-1,scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:// The absolute mouse position
pos.top+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top*mod+// The offsetParent's offset without borders (offset + border)
this.offset.parent.top*mod-(this.cssPosition==="fixed"?-this.offset.scroll.top:scrollIsRootNode?0:this.offset.scroll.top)*mod,left:// The absolute mouse position
pos.left+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left*mod+// The offsetParent's offset without borders (offset + border)
this.offset.parent.left*mod-(this.cssPosition==="fixed"?-this.offset.scroll.left:scrollIsRootNode?0:this.offset.scroll.left)*mod};},_generatePosition:function _generatePosition(event,constrainPosition){var containment,co,top,left,o=this.options,scrollIsRootNode=this._isRootNode(this.scrollParent[0]),pageX=event.pageX,pageY=event.pageY;// Cache the scroll
if(!scrollIsRootNode||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()};}/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */ // If we are not dragging yet, we won't check for options
if(constrainPosition){if(this.containment){if(this.relativeContainer){co=this.relativeContainer.offset();containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top];}else{containment=this.containment;}if(event.pageX-this.offset.click.left<containment[0]){pageX=containment[0]+this.offset.click.left;}if(event.pageY-this.offset.click.top<containment[1]){pageY=containment[1]+this.offset.click.top;}if(event.pageX-this.offset.click.left>containment[2]){pageX=containment[2]+this.offset.click.left;}if(event.pageY-this.offset.click.top>containment[3]){pageY=containment[3]+this.offset.click.top;}}if(o.grid){//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
// argument errors in IE (see ticket #6950)
top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;pageY=containment?top-this.offset.click.top>=containment[1]||top-this.offset.click.top>containment[3]?top:top-this.offset.click.top>=containment[1]?top-o.grid[1]:top+o.grid[1]:top;left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;pageX=containment?left-this.offset.click.left>=containment[0]||left-this.offset.click.left>containment[2]?left:left-this.offset.click.left>=containment[0]?left-o.grid[0]:left+o.grid[0]:left;}if(o.axis==="y"){pageX=this.originalPageX;}if(o.axis==="x"){pageY=this.originalPageY;}}return{top:// The absolute mouse position
pageY-// Click offset (relative to the element)
this.offset.click.top-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top-// The offsetParent's offset without borders (offset + border)
this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:scrollIsRootNode?0:this.offset.scroll.top),left:// The absolute mouse position
pageX-// Click offset (relative to the element)
this.offset.click.left-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left-// The offsetParent's offset without borders (offset + border)
this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:scrollIsRootNode?0:this.offset.scroll.left)};},_clear:function _clear(){this._removeClass(this.helper,"ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove();}this.helper=null;this.cancelHelperRemoval=false;if(this.destroyOnClear){this.destroy();}},// From now on bulk stuff - mainly helpers
_trigger:function _trigger(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui,this],true);// Absolute position and offset (see #6884 ) have to be recalculated after plugins
if(/^(drag|start|stop)/.test(type)){this.positionAbs=this._convertPositionTo("absolute");ui.offset=this.positionAbs;}return $.Widget.prototype._trigger.call(this,type,event,ui);},plugins:{},_uiHash:function _uiHash(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs};}});$.ui.plugin.add("draggable","connectToSortable",{start:function start(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.sortables=[];$(draggable.options.connectToSortable).each(function(){var sortable=$(this).sortable("instance");if(sortable&&!sortable.options.disabled){draggable.sortables.push(sortable);// RefreshPositions is called at drag start to refresh the containerCache
// which is used in drag. This ensures it's initialized and synchronized
// with any changes that might have happened on the page since initialization.
sortable.refreshPositions();sortable._trigger("activate",event,uiSortable);}});},stop:function stop(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.cancelHelperRemoval=false;$.each(draggable.sortables,function(){var sortable=this;if(sortable.isOver){sortable.isOver=0;// Allow this sortable to handle removing the helper
draggable.cancelHelperRemoval=true;sortable.cancelHelperRemoval=false;// Use _storedCSS To restore properties in the sortable,
// as this also handles revert (#9675) since the draggable
// may have modified them in unexpected ways (#8809)
sortable._storedCSS={position:sortable.placeholder.css("position"),top:sortable.placeholder.css("top"),left:sortable.placeholder.css("left")};sortable._mouseStop(event);// Once drag has ended, the sortable should return to using
// its original helper, not the shared helper from draggable
sortable.options.helper=sortable.options._helper;}else{// Prevent this Sortable from removing the helper.
// However, don't set the draggable to remove the helper
// either as another connected Sortable may yet handle the removal.
sortable.cancelHelperRemoval=true;sortable._trigger("deactivate",event,uiSortable);}});},drag:function drag(event,ui,draggable){$.each(draggable.sortables,function(){var innermostIntersecting=false,sortable=this;// Copy over variables that sortable's _intersectsWith uses
sortable.positionAbs=draggable.positionAbs;sortable.helperProportions=draggable.helperProportions;sortable.offset.click=draggable.offset.click;if(sortable._intersectsWith(sortable.containerCache)){innermostIntersecting=true;$.each(draggable.sortables,function(){// Copy over variables that sortable's _intersectsWith uses
this.positionAbs=draggable.positionAbs;this.helperProportions=draggable.helperProportions;this.offset.click=draggable.offset.click;if(this!==sortable&&this._intersectsWith(this.containerCache)&&$.contains(sortable.element[0],this.element[0])){innermostIntersecting=false;}return innermostIntersecting;});}if(innermostIntersecting){// If it intersects, we use a little isOver variable and set it once,
// so that the move-in stuff gets fired only once.
if(!sortable.isOver){sortable.isOver=1;// Store draggable's parent in case we need to reappend to it later.
draggable._parent=ui.helper.parent();sortable.currentItem=ui.helper.appendTo(sortable.element).data("ui-sortable-item",true);// Store helper option to later restore it
sortable.options._helper=sortable.options.helper;sortable.options.helper=function(){return ui.helper[0];};// Fire the start events of the sortable with our passed browser event,
// and our own helper (so it doesn't create a new one)
event.target=sortable.currentItem[0];sortable._mouseCapture(event,true);sortable._mouseStart(event,true,true);// Because the browser event is way off the new appended portlet,
// modify necessary variables to reflect the changes
sortable.offset.click.top=draggable.offset.click.top;sortable.offset.click.left=draggable.offset.click.left;sortable.offset.parent.left-=draggable.offset.parent.left-sortable.offset.parent.left;sortable.offset.parent.top-=draggable.offset.parent.top-sortable.offset.parent.top;draggable._trigger("toSortable",event);// Inform draggable that the helper is in a valid drop zone,
// used solely in the revert option to handle "valid/invalid".
draggable.dropped=sortable.element;// Need to refreshPositions of all sortables in the case that
// adding to one sortable changes the location of the other sortables (#9675)
$.each(draggable.sortables,function(){this.refreshPositions();});// Hack so receive/update callbacks work (mostly)
draggable.currentItem=draggable.element;sortable.fromOutside=draggable;}if(sortable.currentItem){sortable._mouseDrag(event);// Copy the sortable's position because the draggable's can potentially reflect
// a relative position, while sortable is always absolute, which the dragged
// element has now become. (#8809)
ui.position=sortable.position;}}else{// If it doesn't intersect with the sortable, and it intersected before,
// we fake the drag stop of the sortable, but make sure it doesn't remove
// the helper by using cancelHelperRemoval.
if(sortable.isOver){sortable.isOver=0;sortable.cancelHelperRemoval=true;// Calling sortable's mouseStop would trigger a revert,
// so revert must be temporarily false until after mouseStop is called.
sortable.options._revert=sortable.options.revert;sortable.options.revert=false;sortable._trigger("out",event,sortable._uiHash(sortable));sortable._mouseStop(event,true);// Restore sortable behaviors that were modfied
// when the draggable entered the sortable area (#9481)
sortable.options.revert=sortable.options._revert;sortable.options.helper=sortable.options._helper;if(sortable.placeholder){sortable.placeholder.remove();}// Restore and recalculate the draggable's offset considering the sortable
// may have modified them in unexpected ways. (#8809, #10669)
ui.helper.appendTo(draggable._parent);draggable._refreshOffsets(event);ui.position=draggable._generatePosition(event,true);draggable._trigger("fromSortable",event);// Inform draggable that the helper is no longer in a valid drop zone
draggable.dropped=false;// Need to refreshPositions of all sortables just in case removing
// from one sortable changes the location of other sortables (#9675)
$.each(draggable.sortables,function(){this.refreshPositions();});}}});}});$.ui.plugin.add("draggable","cursor",{start:function start(event,ui,instance){var t=$("body"),o=instance.options;if(t.css("cursor")){o._cursor=t.css("cursor");}t.css("cursor",o.cursor);},stop:function stop(event,ui,instance){var o=instance.options;if(o._cursor){$("body").css("cursor",o._cursor);}}});$.ui.plugin.add("draggable","opacity",{start:function start(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("opacity")){o._opacity=t.css("opacity");}t.css("opacity",o.opacity);},stop:function stop(event,ui,instance){var o=instance.options;if(o._opacity){$(ui.helper).css("opacity",o._opacity);}}});$.ui.plugin.add("draggable","scroll",{start:function start(event,ui,i){if(!i.scrollParentNotHidden){i.scrollParentNotHidden=i.helper.scrollParent(false);}if(i.scrollParentNotHidden[0]!==i.document[0]&&i.scrollParentNotHidden[0].tagName!=="HTML"){i.overflowOffset=i.scrollParentNotHidden.offset();}},drag:function drag(event,ui,i){var o=i.options,scrolled=false,scrollParent=i.scrollParentNotHidden[0],document=i.document[0];if(scrollParent!==document&&scrollParent.tagName!=="HTML"){if(!o.axis||o.axis!=="x"){if(i.overflowOffset.top+scrollParent.offsetHeight-event.pageY<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop+o.scrollSpeed;}else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop-o.scrollSpeed;}}if(!o.axis||o.axis!=="y"){if(i.overflowOffset.left+scrollParent.offsetWidth-event.pageX<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft+o.scrollSpeed;}else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft-o.scrollSpeed;}}}else{if(!o.axis||o.axis!=="x"){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}}if(!o.axis||o.axis!=="y"){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}}if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(i,event);}}});$.ui.plugin.add("draggable","snap",{start:function start(event,ui,i){var o=i.options;i.snapElements=[];$(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each(function(){var $t=$(this),$o=$t.offset();if(this!==i.element[0]){i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left});}});},drag:function drag(event,ui,inst){var ts,bs,ls,rs,l,r,t,b,i,first,o=inst.options,d=o.snapTolerance,x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(i=inst.snapElements.length-1;i>=0;i--){l=inst.snapElements[i].left-inst.margins.left;r=l+inst.snapElements[i].width;t=inst.snapElements[i].top-inst.margins.top;b=t+inst.snapElements[i].height;if(x2<l-d||x1>r+d||y2<t-d||y1>b+d||!$.contains(inst.snapElements[i].item.ownerDocument,inst.snapElements[i].item)){if(inst.snapElements[i].snapping){inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));}inst.snapElements[i].snapping=false;continue;}if(o.snapMode!=="inner"){ts=Math.abs(t-y2)<=d;bs=Math.abs(b-y1)<=d;ls=Math.abs(l-x2)<=d;rs=Math.abs(r-x1)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top;}if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top;}if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left;}if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left;}}first=ts||bs||ls||rs;if(o.snapMode!=="outer"){ts=Math.abs(t-y1)<=d;bs=Math.abs(b-y2)<=d;ls=Math.abs(l-x1)<=d;rs=Math.abs(r-x2)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top;}if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top;}if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left;}if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left;}}if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first)){inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));}inst.snapElements[i].snapping=ts||bs||ls||rs||first;}}});$.ui.plugin.add("draggable","stack",{start:function start(event,ui,instance){var min,o=instance.options,group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0);});if(!group.length){return;}min=parseInt($(group[0]).css("zIndex"),10)||0;$(group).each(function(i){$(this).css("zIndex",min+i);});this.css("zIndex",min+group.length);}});$.ui.plugin.add("draggable","zIndex",{start:function start(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("zIndex")){o._zIndex=t.css("zIndex");}t.css("zIndex",o.zIndex);},stop:function stop(event,ui,instance){var o=instance.options;if(o._zIndex){$(ui.helper).css("zIndex",o._zIndex);}}});var widgetsDraggable=$.ui.draggable;/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css
$.widget("ui.resizable",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,// See #7960
zIndex:90,// Callbacks
resize:null,start:null,stop:null},_num:function _num(value){return parseFloat(value)||0;},_isNumber:function _isNumber(value){return!isNaN(parseFloat(value));},_hasScroll:function _hasScroll(el,a){if($(el).css("overflow")==="hidden"){return false;}var scroll=a&&a==="left"?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true;}// TODO: determine which cases actually cause this to happen
// if the element doesn't have the scroll set, see if it's possible to
// set the scroll
el[scroll]=1;has=el[scroll]>0;el[scroll]=0;return has;},_create:function _create(){var margins,o=this.options,that=this;this._addClass("ui-resizable");$.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null});// Wrap the element if it cannot hold child nodes
if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));this.elementIsWrapper=true;margins={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")};this.element.css(margins);this.originalElement.css("margin",0);// support: Safari
// Prevent Safari textarea resize
this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));// Support: IE9
// avoid IE jump (hard set the margin)
this.originalElement.css(margins);this._proportionallyResize();}this._setupHandles();if(o.autoHide){$(this.element).on("mouseenter",function(){if(o.disabled){return;}that._removeClass("ui-resizable-autohide");that._handles.show();}).on("mouseleave",function(){if(o.disabled){return;}if(!that.resizing){that._addClass("ui-resizable-autohide");that._handles.hide();}});}this._mouseInit();},_destroy:function _destroy(){this._mouseDestroy();var wrapper,_destroy=function _destroy(exp){$(exp).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();};// TODO: Unwrap at same DOM position
if(this.elementIsWrapper){_destroy(this.element);wrapper=this.element;this.originalElement.css({position:wrapper.css("position"),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")}).insertAfter(wrapper);wrapper.remove();}this.originalElement.css("resize",this.originalResizeStyle);_destroy(this.originalElement);return this;},_setOption:function _setOption(key,value){this._super(key,value);switch(key){case"handles":this._removeHandles();this._setupHandles();break;default:break;}},_setupHandles:function _setupHandles(){var o=this.options,handle,i,n,hname,axis,that=this;this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});this._handles=$();if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw";}n=this.handles.split(",");this.handles={};for(i=0;i<n.length;i++){handle=$.trim(n[i]);hname="ui-resizable-"+handle;axis=$("<div>");this._addClass(axis,"ui-resizable-handle "+hname);axis.css({zIndex:o.zIndex});this.handles[handle]=".ui-resizable-"+handle;this.element.append(axis);}}this._renderAxis=function(target){var i,axis,padPos,padWrapper;target=target||this.element;for(i in this.handles){if(this.handles[i].constructor===String){this.handles[i]=this.element.children(this.handles[i]).first().show();}else if(this.handles[i].jquery||this.handles[i].nodeType){this.handles[i]=$(this.handles[i]);this._on(this.handles[i],{"mousedown":that._mouseDown});}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){axis=$(this.handles[i],this.element);padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");target.css(padPos,padWrapper);this._proportionallyResize();}this._handles=this._handles.add(this.handles[i]);}};// TODO: make renderAxis a prototype function
this._renderAxis(this.element);this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));this._handles.disableSelection();this._handles.on("mouseover",function(){if(!that.resizing){if(this.className){axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);}that.axis=axis&&axis[1]?axis[1]:"se";}});if(o.autoHide){this._handles.hide();this._addClass("ui-resizable-autohide");}},_removeHandles:function _removeHandles(){this._handles.remove();},_mouseCapture:function _mouseCapture(event){var i,handle,capture=false;for(i in this.handles){handle=$(this.handles[i])[0];if(handle===event.target||$.contains(handle,event.target)){capture=true;}}return!this.options.disabled&&capture;},_mouseStart:function _mouseStart(event){var curleft,curtop,cursor,o=this.options,el=this.element;this.resizing=true;this._renderProxy();curleft=this._num(this.helper.css("left"));curtop=this._num(this.helper.css("top"));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0;}this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalPosition={left:curleft,top:curtop};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=typeof o.aspectRatio==="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1;cursor=$(".ui-resizable-"+this.axis).css("cursor");$("body").css("cursor",cursor==="auto"?this.axis+"-resize":cursor);this._addClass("ui-resizable-resizing");this._propagate("start",event);return true;},_mouseDrag:function _mouseDrag(event){var data,props,smp=this.originalMousePosition,a=this.axis,dx=event.pageX-smp.left||0,dy=event.pageY-smp.top||0,trigger=this._change[a];this._updatePrevProperties();if(!trigger){return false;}data=trigger.apply(this,[event,dx,dy]);this._updateVirtualBoundaries(event.shiftKey);if(this._aspectRatio||event.shiftKey){data=this._updateRatio(data,event);}data=this._respectSize(data,event);this._updateCache(data);this._propagate("resize",event);props=this._applyChanges();if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize();}if(!$.isEmptyObject(props)){this._updatePrevProperties();this._trigger("resize",event,this.ui());this._applyChanges();}return false;},_mouseStop:function _mouseStop(event){this.resizing=false;var pr,ista,soffseth,soffsetw,s,left,top,o=this.options,that=this;if(this._helper){pr=this._proportionallyResizeElements;ista=pr.length&&/textarea/i.test(pr[0].nodeName);soffseth=ista&&this._hasScroll(pr[0],"left")?0:that.sizeDiff.height;soffsetw=ista?0:that.sizeDiff.width;s={width:that.helper.width()-soffsetw,height:that.helper.height()-soffseth};left=parseFloat(that.element.css("left"))+(that.position.left-that.originalPosition.left)||null;top=parseFloat(that.element.css("top"))+(that.position.top-that.originalPosition.top)||null;if(!o.animate){this.element.css($.extend(s,{top:top,left:left}));}that.helper.height(that.size.height);that.helper.width(that.size.width);if(this._helper&&!o.animate){this._proportionallyResize();}}$("body").css("cursor","auto");this._removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper){this.helper.remove();}return false;},_updatePrevProperties:function _updatePrevProperties(){this.prevPosition={top:this.position.top,left:this.position.left};this.prevSize={width:this.size.width,height:this.size.height};},_applyChanges:function _applyChanges(){var props={};if(this.position.top!==this.prevPosition.top){props.top=this.position.top+"px";}if(this.position.left!==this.prevPosition.left){props.left=this.position.left+"px";}if(this.size.width!==this.prevSize.width){props.width=this.size.width+"px";}if(this.size.height!==this.prevSize.height){props.height=this.size.height+"px";}this.helper.css(props);return props;},_updateVirtualBoundaries:function _updateVirtualBoundaries(forceAspectRatio){var pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b,o=this.options;b={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||forceAspectRatio){pMinWidth=b.minHeight*this.aspectRatio;pMinHeight=b.minWidth/this.aspectRatio;pMaxWidth=b.maxHeight*this.aspectRatio;pMaxHeight=b.maxWidth/this.aspectRatio;if(pMinWidth>b.minWidth){b.minWidth=pMinWidth;}if(pMinHeight>b.minHeight){b.minHeight=pMinHeight;}if(pMaxWidth<b.maxWidth){b.maxWidth=pMaxWidth;}if(pMaxHeight<b.maxHeight){b.maxHeight=pMaxHeight;}}this._vBoundaries=b;},_updateCache:function _updateCache(data){this.offset=this.helper.offset();if(this._isNumber(data.left)){this.position.left=data.left;}if(this._isNumber(data.top)){this.position.top=data.top;}if(this._isNumber(data.height)){this.size.height=data.height;}if(this._isNumber(data.width)){this.size.width=data.width;}},_updateRatio:function _updateRatio(data){var cpos=this.position,csize=this.size,a=this.axis;if(this._isNumber(data.height)){data.width=data.height*this.aspectRatio;}else if(this._isNumber(data.width)){data.height=data.width/this.aspectRatio;}if(a==="sw"){data.left=cpos.left+(csize.width-data.width);data.top=null;}if(a==="nw"){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width);}return data;},_respectSize:function _respectSize(data){var o=this._vBoundaries,a=this.axis,ismaxw=this._isNumber(data.width)&&o.maxWidth&&o.maxWidth<data.width,ismaxh=this._isNumber(data.height)&&o.maxHeight&&o.maxHeight<data.height,isminw=this._isNumber(data.width)&&o.minWidth&&o.minWidth>data.width,isminh=this._isNumber(data.height)&&o.minHeight&&o.minHeight>data.height,dw=this.originalPosition.left+this.originalSize.width,dh=this.originalPosition.top+this.originalSize.height,cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw){data.width=o.minWidth;}if(isminh){data.height=o.minHeight;}if(ismaxw){data.width=o.maxWidth;}if(ismaxh){data.height=o.maxHeight;}if(isminw&&cw){data.left=dw-o.minWidth;}if(ismaxw&&cw){data.left=dw-o.maxWidth;}if(isminh&&ch){data.top=dh-o.minHeight;}if(ismaxh&&ch){data.top=dh-o.maxHeight;}// Fixing jump error on top/left - bug #2330
if(!data.width&&!data.height&&!data.left&&data.top){data.top=null;}else if(!data.width&&!data.height&&!data.top&&data.left){data.left=null;}return data;},_getPaddingPlusBorderDimensions:function _getPaddingPlusBorderDimensions(element){var i=0,widths=[],borders=[element.css("borderTopWidth"),element.css("borderRightWidth"),element.css("borderBottomWidth"),element.css("borderLeftWidth")],paddings=[element.css("paddingTop"),element.css("paddingRight"),element.css("paddingBottom"),element.css("paddingLeft")];for(;i<4;i++){widths[i]=parseFloat(borders[i])||0;widths[i]+=parseFloat(paddings[i])||0;}return{height:widths[0]+widths[2],width:widths[1]+widths[3]};},_proportionallyResize:function _proportionallyResize(){if(!this._proportionallyResizeElements.length){return;}var prel,i=0,element=this.helper||this.element;for(;i<this._proportionallyResizeElements.length;i++){prel=this._proportionallyResizeElements[i];// TODO: Seems like a bug to cache this.outerDimensions
// considering that we are in a loop.
if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(prel);}prel.css({height:element.height()-this.outerDimensions.height||0,width:element.width()-this.outerDimensions.width||0});}},_renderProxy:function _renderProxy(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$("<div style='overflow:hidden;'></div>");this._addClass(this.helper,this._helper);this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++o.zIndex//TODO: Don't modify option
});this.helper.appendTo("body").disableSelection();}else{this.helper=this.element;}},_change:{e:function e(event,dx){return{width:this.originalSize.width+dx};},w:function w(event,dx){var cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx};},n:function n(event,dx,dy){var cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy};},s:function s(event,dx,dy){return{height:this.originalSize.height+dy};},se:function se(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},sw:function sw(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));},ne:function ne(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},nw:function nw(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));}},_propagate:function _propagate(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);n!=="resize"&&this._trigger(n,event,this.ui());},plugins:{},ui:function ui(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};}});/*
 * Resizable Extensions
 */$.ui.plugin.add("resizable","animate",{stop:function stop(event){var that=$(this).resizable("instance"),o=that.options,pr=that._proportionallyResizeElements,ista=pr.length&&/textarea/i.test(pr[0].nodeName),soffseth=ista&&that._hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width,style={width:that.size.width-soffsetw,height:that.size.height-soffseth},left=parseFloat(that.element.css("left"))+(that.position.left-that.originalPosition.left)||null,top=parseFloat(that.element.css("top"))+(that.position.top-that.originalPosition.top)||null;that.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function step(){var data={width:parseFloat(that.element.css("width")),height:parseFloat(that.element.css("height")),top:parseFloat(that.element.css("top")),left:parseFloat(that.element.css("left"))};if(pr&&pr.length){$(pr[0]).css({width:data.width,height:data.height});}// Propagating resize, and updating values for each animation step
that._updateCache(data);that._propagate("resize",event);}});}});$.ui.plugin.add("resizable","containment",{start:function start(){var element,p,co,ch,cw,width,height,that=$(this).resizable("instance"),o=that.options,el=that.element,oc=o.containment,ce=oc instanceof $?oc.get(0):/parent/.test(oc)?el.parent().get(0):oc;if(!ce){return;}that.containerElement=$(ce);if(/document/.test(oc)||oc===document){that.containerOffset={left:0,top:0};that.containerPosition={left:0,top:0};that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight};}else{element=$(ce);p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=that._num(element.css("padding"+name));});that.containerOffset=element.offset();that.containerPosition=element.position();that.containerSize={height:element.innerHeight()-p[3],width:element.innerWidth()-p[1]};co=that.containerOffset;ch=that.containerSize.height;cw=that.containerSize.width;width=that._hasScroll(ce,"left")?ce.scrollWidth:cw;height=that._hasScroll(ce)?ce.scrollHeight:ch;that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height};}},resize:function resize(event){var woset,hoset,isParent,isOffsetRelative,that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cp=that.position,pRatio=that._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=that.containerElement,continueResize=true;if(ce[0]!==document&&/static/.test(ce.css("position"))){cop=co;}if(cp.left<(that._helper?co.left:0)){that.size.width=that.size.width+(that._helper?that.position.left-co.left:that.position.left-cop.left);if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=false;}that.position.left=o.helper?co.left:0;}if(cp.top<(that._helper?co.top:0)){that.size.height=that.size.height+(that._helper?that.position.top-co.top:that.position.top);if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=false;}that.position.top=that._helper?co.top:0;}isParent=that.containerElement.get(0)===that.element.parent().get(0);isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));if(isParent&&isOffsetRelative){that.offset.left=that.parentData.left+that.position.left;that.offset.top=that.parentData.top+that.position.top;}else{that.offset.left=that.element.offset().left;that.offset.top=that.element.offset().top;}woset=Math.abs(that.sizeDiff.width+(that._helper?that.offset.left-cop.left:that.offset.left-co.left));hoset=Math.abs(that.sizeDiff.height+(that._helper?that.offset.top-cop.top:that.offset.top-co.top));if(woset+that.size.width>=that.parentData.width){that.size.width=that.parentData.width-woset;if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=false;}}if(hoset+that.size.height>=that.parentData.height){that.size.height=that.parentData.height-hoset;if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=false;}}if(!continueResize){that.position.left=that.prevPosition.left;that.position.top=that.prevPosition.top;that.size.width=that.prevSize.width;that.size.height=that.prevSize.height;}},stop:function stop(){var that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cop=that.containerPosition,ce=that.containerElement,helper=$(that.helper),ho=helper.offset(),w=helper.outerWidth()-that.sizeDiff.width,h=helper.outerHeight()-that.sizeDiff.height;if(that._helper&&!o.animate&&/relative/.test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}if(that._helper&&!o.animate&&/static/.test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}}});$.ui.plugin.add("resizable","alsoResize",{start:function start(){var that=$(this).resizable("instance"),o=that.options;$(o.alsoResize).each(function(){var el=$(this);el.data("ui-resizable-alsoresize",{width:parseFloat(el.width()),height:parseFloat(el.height()),left:parseFloat(el.css("left")),top:parseFloat(el.css("top"))});});},resize:function resize(event,ui){var that=$(this).resizable("instance"),o=that.options,os=that.originalSize,op=that.originalPosition,delta={height:that.size.height-os.height||0,width:that.size.width-os.width||0,top:that.position.top-op.top||0,left:that.position.left-op.left||0};$(o.alsoResize).each(function(){var el=$(this),start=$(this).data("ui-resizable-alsoresize"),style={},css=el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0){style[prop]=sum||null;}});el.css(style);});},stop:function stop(){$(this).removeData("ui-resizable-alsoresize");}});$.ui.plugin.add("resizable","ghost",{start:function start(){var that=$(this).resizable("instance"),cs=that.size;that.ghost=that.originalElement.clone();that.ghost.css({opacity:0.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0});that._addClass(that.ghost,"ui-resizable-ghost");// DEPRECATED
// TODO: remove after 1.12
if($.uiBackCompat!==false&&typeof that.options.ghost==="string"){// Ghost option
that.ghost.addClass(this.options.ghost);}that.ghost.appendTo(that.helper);},resize:function resize(){var that=$(this).resizable("instance");if(that.ghost){that.ghost.css({position:"relative",height:that.size.height,width:that.size.width});}},stop:function stop(){var that=$(this).resizable("instance");if(that.ghost&&that.helper){that.helper.get(0).removeChild(that.ghost.get(0));}}});$.ui.plugin.add("resizable","grid",{resize:function resize(){var outerDimensions,that=$(this).resizable("instance"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,grid=typeof o.grid==="number"?[o.grid,o.grid]:o.grid,gridX=grid[0]||1,gridY=grid[1]||1,ox=Math.round((cs.width-os.width)/gridX)*gridX,oy=Math.round((cs.height-os.height)/gridY)*gridY,newWidth=os.width+ox,newHeight=os.height+oy,isMaxWidth=o.maxWidth&&o.maxWidth<newWidth,isMaxHeight=o.maxHeight&&o.maxHeight<newHeight,isMinWidth=o.minWidth&&o.minWidth>newWidth,isMinHeight=o.minHeight&&o.minHeight>newHeight;o.grid=grid;if(isMinWidth){newWidth+=gridX;}if(isMinHeight){newHeight+=gridY;}if(isMaxWidth){newWidth-=gridX;}if(isMaxHeight){newHeight-=gridY;}if(/^(se|s|e)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;}else if(/^(ne)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.top=op.top-oy;}else if(/^(sw)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.left=op.left-ox;}else{if(newHeight-gridY<=0||newWidth-gridX<=0){outerDimensions=that._getPaddingPlusBorderDimensions(this);}if(newHeight-gridY>0){that.size.height=newHeight;that.position.top=op.top-oy;}else{newHeight=gridY-outerDimensions.height;that.size.height=newHeight;that.position.top=op.top+os.height-newHeight;}if(newWidth-gridX>0){that.size.width=newWidth;that.position.left=op.left-ox;}else{newWidth=gridX-outerDimensions.width;that.size.width=newWidth;that.position.left=op.left+os.width-newWidth;}}}});var widgetsResizable=$.ui.resizable;/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Dialog
//>>group: Widgets
//>>description: Displays customizable dialog windows.
//>>docs: http://api.jqueryui.com/dialog/
//>>demos: http://jqueryui.com/dialog/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/dialog.css
//>>css.theme: ../../themes/base/theme.css
$.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:true,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:true,closeText:"Close",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",// Ensure the titlebar is always visible
using:function using(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css("top",pos.top-topOffset);}}},resizable:true,show:null,title:null,width:300,// Callbacks
beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions:{maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},_create:function _create(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");if(this.options.title==null&&this.originalTitle!=null){this.options.title=this.originalTitle;}// Dialogs can't be disabled
if(this.options.disabled){this.options.disabled=false;}this._createWrapper();this.element.show().removeAttr("title").appendTo(this.uiDialog);this._addClass("ui-dialog-content","ui-widget-content");this._createTitlebar();this._createButtonPane();if(this.options.draggable&&$.fn.draggable){this._makeDraggable();}if(this.options.resizable&&$.fn.resizable){this._makeResizable();}this._isOpen=false;this._trackFocus();},_init:function _init(){if(this.options.autoOpen){this.open();}},_appendTo:function _appendTo(){var element=this.options.appendTo;if(element&&(element.jquery||element.nodeType)){return $(element);}return this.document.find(element||"body").eq(0);},_destroy:function _destroy(){var next,originalPosition=this.originalPosition;this._untrackInstance();this._destroyOverlay();this.element.removeUniqueId().css(this.originalCss)// Without detaching first, the following becomes really slow
.detach();this.uiDialog.remove();if(this.originalTitle){this.element.attr("title",this.originalTitle);}next=originalPosition.parent.children().eq(originalPosition.index);// Don't try to place the dialog next to itself (#8613)
if(next.length&&next[0]!==this.element[0]){next.before(this.element);}else{originalPosition.parent.append(this.element);}},widget:function widget(){return this.uiDialog;},disable:$.noop,enable:$.noop,close:function close(event){var that=this;if(!this._isOpen||this._trigger("beforeClose",event)===false){return;}this._isOpen=false;this._focusedElement=null;this._destroyOverlay();this._untrackInstance();if(!this.opener.filter(":focusable").trigger("focus").length){// Hiding a focused element doesn't trigger blur in WebKit
// so in case we have nothing to focus on, explicitly blur the active element
// https://bugs.webkit.org/show_bug.cgi?id=47182
$.ui.safeBlur($.ui.safeActiveElement(this.document[0]));}this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event);});},isOpen:function isOpen(){return this._isOpen;},moveToTop:function moveToTop(){this._moveToTop();},_moveToTop:function _moveToTop(event,silent){var moved=false,zIndices=this.uiDialog.siblings(".ui-front:visible").map(function(){return+$(this).css("z-index");}).get(),zIndexMax=Math.max.apply(null,zIndices);if(zIndexMax>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",zIndexMax+1);moved=true;}if(moved&&!silent){this._trigger("focus",event);}return moved;},open:function open(){var that=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable();}return;}this._isOpen=true;this.opener=$($.ui.safeActiveElement(this.document[0]));this._size();this._position();this._createOverlay();this._moveToTop(null,true);// Ensure the overlay is moved to the top with the dialog, but only when
// opening. The overlay shouldn't move after the dialog is open so that
// modeless dialogs opened after the modal dialog stack properly.
if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1);}this._show(this.uiDialog,this.options.show,function(){that._focusTabbable();that._trigger("focus");});// Track the dialog immediately upon openening in case a focus event
// somehow occurs outside of the dialog before an element inside the
// dialog is focused (#10152)
this._makeFocusTarget();this._trigger("open");},_focusTabbable:function _focusTabbable(){// Set focus to the first match:
// 1. An element that was focused previously
// 2. First element inside the dialog matching [autofocus]
// 3. Tabbable element inside the content element
// 4. Tabbable element inside the buttonpane
// 5. The close button
// 6. The dialog itself
var hasFocus=this._focusedElement;if(!hasFocus){hasFocus=this.element.find("[autofocus]");}if(!hasFocus.length){hasFocus=this.element.find(":tabbable");}if(!hasFocus.length){hasFocus=this.uiDialogButtonPane.find(":tabbable");}if(!hasFocus.length){hasFocus=this.uiDialogTitlebarClose.filter(":tabbable");}if(!hasFocus.length){hasFocus=this.uiDialog;}hasFocus.eq(0).trigger("focus");},_keepFocus:function _keepFocus(event){function checkFocus(){var activeElement=$.ui.safeActiveElement(this.document[0]),isActive=this.uiDialog[0]===activeElement||$.contains(this.uiDialog[0],activeElement);if(!isActive){this._focusTabbable();}}event.preventDefault();checkFocus.call(this);// support: IE
// IE <= 8 doesn't prevent moving focus even with event.preventDefault()
// so we check again later
this._delay(checkFocus);},_createWrapper:function _createWrapper(){this.uiDialog=$("<div>").hide().attr({// Setting tabIndex makes the div focusable
tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front");this._on(this.uiDialog,{keydown:function keydown(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){event.preventDefault();this.close(event);return;}// Prevent tabbing out of dialogs
if(event.keyCode!==$.ui.keyCode.TAB||event.isDefaultPrevented()){return;}var tabbables=this.uiDialog.find(":tabbable"),first=tabbables.filter(":first"),last=tabbables.filter(":last");if((event.target===last[0]||event.target===this.uiDialog[0])&&!event.shiftKey){this._delay(function(){first.trigger("focus");});event.preventDefault();}else if((event.target===first[0]||event.target===this.uiDialog[0])&&event.shiftKey){this._delay(function(){last.trigger("focus");});event.preventDefault();}},mousedown:function mousedown(event){if(this._moveToTop(event)){this._focusTabbable();}}});// We assume that any existing aria-describedby attribute means
// that the dialog content is marked up properly
// otherwise we brute force the content as the description
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")});}},_createTitlebar:function _createTitlebar(){var uiDialogTitle;this.uiDialogTitlebar=$("<div>");this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix");this._on(this.uiDialogTitlebar,{mousedown:function mousedown(event){// Don't prevent click on close button (#8838)
// Focusing a dialog that is partially scrolled out of view
// causes the browser to scroll it into view, preventing the click event
if(!$(event.target).closest(".ui-dialog-titlebar-close")){// Dialog isn't getting focus when dragging (#8063)
this.uiDialog.trigger("focus");}}});// Support: IE
// Use type="button" to prevent enter keypresses in textboxes from closing the
// dialog in IE (#9312)
this.uiDialogTitlebarClose=$("<button type='button'></button>").button({label:$("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:false}).appendTo(this.uiDialogTitlebar);this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close");this._on(this.uiDialogTitlebarClose,{click:function click(event){event.preventDefault();this.close(event);}});uiDialogTitle=$("<span>").uniqueId().prependTo(this.uiDialogTitlebar);this._addClass(uiDialogTitle,"ui-dialog-title");this._title(uiDialogTitle);this.uiDialogTitlebar.prependTo(this.uiDialog);this.uiDialog.attr({"aria-labelledby":uiDialogTitle.attr("id")});},_title:function _title(title){if(this.options.title){title.text(this.options.title);}else{title.html("&#160;");}},_createButtonPane:function _createButtonPane(){this.uiDialogButtonPane=$("<div>");this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix");this.uiButtonSet=$("<div>").appendTo(this.uiDialogButtonPane);this._addClass(this.uiButtonSet,"ui-dialog-buttonset");this._createButtons();},_createButtons:function _createButtons(){var that=this,buttons=this.options.buttons;// If we already have a button pane, remove it
this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if($.isEmptyObject(buttons)||$.isArray(buttons)&&!buttons.length){this._removeClass(this.uiDialog,"ui-dialog-buttons");return;}$.each(buttons,function(name,props){var click,buttonOptions;props=$.isFunction(props)?{click:props,text:name}:props;// Default to a non-submitting button
props=$.extend({type:"button"},props);// Change the context for the click callback to be the main element
click=props.click;buttonOptions={icon:props.icon,iconPosition:props.iconPosition,showLabel:props.showLabel,// Deprecated options
icons:props.icons,text:props.text};delete props.click;delete props.icon;delete props.iconPosition;delete props.showLabel;// Deprecated options
delete props.icons;if(typeof props.text==="boolean"){delete props.text;}$("<button></button>",props).button(buttonOptions).appendTo(that.uiButtonSet).on("click",function(){click.apply(that.element[0],arguments);});});this._addClass(this.uiDialog,"ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog);},_makeDraggable:function _makeDraggable(){var that=this,options=this.options;function filteredUi(ui){return{position:ui.position,offset:ui.offset};}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function start(event,ui){that._addClass($(this),"ui-dialog-dragging");that._blockFrames();that._trigger("dragStart",event,filteredUi(ui));},drag:function drag(event,ui){that._trigger("drag",event,filteredUi(ui));},stop:function stop(event,ui){var left=ui.offset.left-that.document.scrollLeft(),top=ui.offset.top-that.document.scrollTop();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};that._removeClass($(this),"ui-dialog-dragging");that._unblockFrames();that._trigger("dragStop",event,filteredUi(ui));}});},_makeResizable:function _makeResizable(){var that=this,options=this.options,handles=options.resizable,// .ui-resizable has position: relative defined in the stylesheet
// but dialogs have to use absolute or fixed positioning
position=this.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size};}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function start(event,ui){that._addClass($(this),"ui-dialog-resizing");that._blockFrames();that._trigger("resizeStart",event,filteredUi(ui));},resize:function resize(event,ui){that._trigger("resize",event,filteredUi(ui));},stop:function stop(event,ui){var offset=that.uiDialog.offset(),left=offset.left-that.document.scrollLeft(),top=offset.top-that.document.scrollTop();options.height=that.uiDialog.height();options.width=that.uiDialog.width();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};that._removeClass($(this),"ui-dialog-resizing");that._unblockFrames();that._trigger("resizeStop",event,filteredUi(ui));}}).css("position",position);},_trackFocus:function _trackFocus(){this._on(this.widget(),{focusin:function focusin(event){this._makeFocusTarget();this._focusedElement=$(event.target);}});},_makeFocusTarget:function _makeFocusTarget(){this._untrackInstance();this._trackingInstances().unshift(this);},_untrackInstance:function _untrackInstance(){var instances=this._trackingInstances(),exists=$.inArray(this,instances);if(exists!==-1){instances.splice(exists,1);}},_trackingInstances:function _trackingInstances(){var instances=this.document.data("ui-dialog-instances");if(!instances){instances=[];this.document.data("ui-dialog-instances",instances);}return instances;},_minHeight:function _minHeight(){var options=this.options;return options.height==="auto"?options.minHeight:Math.min(options.minHeight,options.height);},_position:function _position(){// Need to show the dialog to get the actual offset in the position plugin
var isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show();}this.uiDialog.position(this.options.position);if(!isVisible){this.uiDialog.hide();}},_setOptions:function _setOptions(options){var that=this,resize=false,resizableOptions={};$.each(options,function(key,value){that._setOption(key,value);if(key in that.sizeRelatedOptions){resize=true;}if(key in that.resizableRelatedOptions){resizableOptions[key]=value;}});if(resize){this._size();this._position();}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",resizableOptions);}},_setOption:function _setOption(key,value){var isDraggable,isResizable,uiDialog=this.uiDialog;if(key==="disabled"){return;}this._super(key,value);if(key==="appendTo"){this.uiDialog.appendTo(this._appendTo());}if(key==="buttons"){this._createButtons();}if(key==="closeText"){this.uiDialogTitlebarClose.button({// Ensure that we always pass a string
label:$("<a>").text(""+this.options.closeText).html()});}if(key==="draggable"){isDraggable=uiDialog.is(":data(ui-draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy");}if(!isDraggable&&value){this._makeDraggable();}}if(key==="position"){this._position();}if(key==="resizable"){// currently resizable, becoming non-resizable
isResizable=uiDialog.is(":data(ui-resizable)");if(isResizable&&!value){uiDialog.resizable("destroy");}// Currently resizable, changing handles
if(isResizable&&typeof value==="string"){uiDialog.resizable("option","handles",value);}// Currently non-resizable, becoming resizable
if(!isResizable&&value!==false){this._makeResizable();}}if(key==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));}},_size:function _size(){// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
// divs will both have width and height set, so we need to reset them
var nonContentHeight,minContentHeight,maxContentHeight,options=this.options;// Reset content sizing
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(options.minWidth>options.width){options.width=options.minWidth;}// Reset wrapper sizing
// determine the height of all the non-content elements
nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);maxContentHeight=typeof options.maxHeight==="number"?Math.max(0,options.maxHeight-nonContentHeight):"none";if(options.height==="auto"){this.element.css({minHeight:minContentHeight,maxHeight:maxContentHeight,height:"auto"});}else{this.element.height(Math.max(0,options.height-nonContentHeight));}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight());}},_blockFrames:function _blockFrames(){this.iframeBlocks=this.document.find("iframe").map(function(){var iframe=$(this);return $("<div>").css({position:"absolute",width:iframe.outerWidth(),height:iframe.outerHeight()}).appendTo(iframe.parent()).offset(iframe.offset())[0];});},_unblockFrames:function _unblockFrames(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks;}},_allowInteraction:function _allowInteraction(event){if($(event.target).closest(".ui-dialog").length){return true;}// TODO: Remove hack when datepicker implements
// the .ui-front logic (#8989)
return!!$(event.target).closest(".ui-datepicker").length;},_createOverlay:function _createOverlay(){if(!this.options.modal){return;}// We use a delay in case the overlay is created from an
// event that we're going to be cancelling (#2804)
var isOpening=true;this._delay(function(){isOpening=false;});if(!this.document.data("ui-dialog-overlays")){// Prevent use of anchors and inputs
// Using _on() for an event handler shared across many instances is
// safe because the dialogs stack and must be closed in reverse order
this._on(this.document,{focusin:function focusin(event){if(isOpening){return;}if(!this._allowInteraction(event)){event.preventDefault();this._trackingInstances()[0]._focusTabbable();}}});}this.overlay=$("<div>").appendTo(this._appendTo());this._addClass(this.overlay,null,"ui-widget-overlay ui-front");this._on(this.overlay,{mousedown:"_keepFocus"});this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1);},_destroyOverlay:function _destroyOverlay(){if(!this.options.modal){return;}if(this.overlay){var overlays=this.document.data("ui-dialog-overlays")-1;if(!overlays){this._off(this.document,"focusin");this.document.removeData("ui-dialog-overlays");}else{this.document.data("ui-dialog-overlays",overlays);}this.overlay.remove();this.overlay=null;}}});// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
if($.uiBackCompat!==false){// Backcompat for dialogClass option
$.widget("ui.dialog",$.ui.dialog,{options:{dialogClass:""},_createWrapper:function _createWrapper(){this._super();this.uiDialog.addClass(this.options.dialogClass);},_setOption:function _setOption(key,value){if(key==="dialogClass"){this.uiDialog.removeClass(this.options.dialogClass).addClass(value);}this._superApply(arguments);}});}var widgetsDialog=$.ui.dialog;/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Droppable
//>>group: Interactions
//>>description: Enables drop targets for draggable elements.
//>>docs: http://api.jqueryui.com/droppable/
//>>demos: http://jqueryui.com/droppable/
$.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:true,greedy:false,scope:"default",tolerance:"intersect",// Callbacks
activate:null,deactivate:null,drop:null,out:null,over:null},_create:function _create(){var proportions,o=this.options,accept=o.accept;this.isover=false;this.isout=true;this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept);};this.proportions=function()/* valueToWrite */{if(arguments.length){// Store the droppable's proportions
proportions=arguments[0];}else{// Retrieve or derive the droppable's proportions
return proportions?proportions:proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};}};this._addToManager(o.scope);o.addClasses&&this._addClass("ui-droppable");},_addToManager:function _addToManager(scope){// Add the reference and positions to the manager
$.ui.ddmanager.droppables[scope]=$.ui.ddmanager.droppables[scope]||[];$.ui.ddmanager.droppables[scope].push(this);},_splice:function _splice(drop){var i=0;for(;i<drop.length;i++){if(drop[i]===this){drop.splice(i,1);}}},_destroy:function _destroy(){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop);},_setOption:function _setOption(key,value){if(key==="accept"){this.accept=$.isFunction(value)?value:function(d){return d.is(value);};}else if(key==="scope"){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop);this._addToManager(value);}this._super(key,value);},_activate:function _activate(event){var draggable=$.ui.ddmanager.current;this._addActiveClass();if(draggable){this._trigger("activate",event,this.ui(draggable));}},_deactivate:function _deactivate(event){var draggable=$.ui.ddmanager.current;this._removeActiveClass();if(draggable){this._trigger("deactivate",event,this.ui(draggable));}},_over:function _over(event){var draggable=$.ui.ddmanager.current;// Bail if draggable and droppable are same element
if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}if(this.accept.call(this.element[0],draggable.currentItem||draggable.element)){this._addHoverClass();this._trigger("over",event,this.ui(draggable));}},_out:function _out(event){var draggable=$.ui.ddmanager.current;// Bail if draggable and droppable are same element
if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}if(this.accept.call(this.element[0],draggable.currentItem||draggable.element)){this._removeHoverClass();this._trigger("out",event,this.ui(draggable));}},_drop:function _drop(event,custom){var draggable=custom||$.ui.ddmanager.current,childrenIntersection=false;// Bail if draggable and droppable are same element
if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return false;}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var inst=$(this).droppable("instance");if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope===draggable.options.scope&&inst.accept.call(inst.element[0],draggable.currentItem||draggable.element)&&intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance,event)){childrenIntersection=true;return false;}});if(childrenIntersection){return false;}if(this.accept.call(this.element[0],draggable.currentItem||draggable.element)){this._removeActiveClass();this._removeHoverClass();this._trigger("drop",event,this.ui(draggable));return this.element;}return false;},ui:function ui(c){return{draggable:c.currentItem||c.element,helper:c.helper,position:c.position,offset:c.positionAbs};},// Extension points just to make backcompat sane and avoid duplicating logic
// TODO: Remove in 1.13 along with call to it below
_addHoverClass:function _addHoverClass(){this._addClass("ui-droppable-hover");},_removeHoverClass:function _removeHoverClass(){this._removeClass("ui-droppable-hover");},_addActiveClass:function _addActiveClass(){this._addClass("ui-droppable-active");},_removeActiveClass:function _removeActiveClass(){this._removeClass("ui-droppable-active");}});var intersect=$.ui.intersect=function(){function isOverAxis(x,reference,size){return x>=reference&&x<reference+size;}return function(draggable,droppable,toleranceMode,event){if(!droppable.offset){return false;}var x1=(draggable.positionAbs||draggable.position.absolute).left+draggable.margins.left,y1=(draggable.positionAbs||draggable.position.absolute).top+draggable.margins.top,x2=x1+draggable.helperProportions.width,y2=y1+draggable.helperProportions.height,l=droppable.offset.left,t=droppable.offset.top,r=l+droppable.proportions().width,b=t+droppable.proportions().height;switch(toleranceMode){case"fit":return l<=x1&&x2<=r&&t<=y1&&y2<=b;case"intersect":return l<x1+draggable.helperProportions.width/2&&// Right Half
x2-draggable.helperProportions.width/2<r&&// Left Half
t<y1+draggable.helperProportions.height/2&&// Bottom Half
y2-draggable.helperProportions.height/2<b;// Top Half
case"pointer":return isOverAxis(event.pageY,t,droppable.proportions().height)&&isOverAxis(event.pageX,l,droppable.proportions().width);case"touch":return(y1>=t&&y1<=b||// Top edge touching
y2>=t&&y2<=b||// Bottom edge touching
y1<t&&y2>b// Surrounded vertically
)&&(x1>=l&&x1<=r||// Left edge touching
x2>=l&&x2<=r||// Right edge touching
x1<l&&x2>r// Surrounded horizontally
);default:return false;}};}();/*
	This manager tracks offsets of draggables and droppables
*/$.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function prepareOffsets(t,event){var i,j,m=$.ui.ddmanager.droppables[t.options.scope]||[],type=event?event.type:null,// workaround for #2317
list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(i=0;i<m.length;i++){// No disabled and non-accepted
if(m[i].options.disabled||t&&!m[i].accept.call(m[i].element[0],t.currentItem||t.element)){continue;}// Filter out elements in the current dragged item
for(j=0;j<list.length;j++){if(list[j]===m[i].element[0]){m[i].proportions().height=0;continue droppablesLoop;}}m[i].visible=m[i].element.css("display")!=="none";if(!m[i].visible){continue;}// Activate the droppable if used directly from draggables
if(type==="mousedown"){m[i]._activate.call(m[i],event);}m[i].offset=m[i].element.offset();m[i].proportions({width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight});}},drop:function drop(draggable,event){var dropped=false;// Create a copy of the droppables in case the list changes during the drop (#9116)
$.each(($.ui.ddmanager.droppables[draggable.options.scope]||[]).slice(),function(){if(!this.options){return;}if(!this.options.disabled&&this.visible&&intersect(draggable,this,this.options.tolerance,event)){dropped=this._drop.call(this,event)||dropped;}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],draggable.currentItem||draggable.element)){this.isout=true;this.isover=false;this._deactivate.call(this,event);}});return dropped;},dragStart:function dragStart(draggable,event){// Listen for scrolling so that if the dragging causes scrolling the position of the
// droppables can be recalculated (see #5003)
draggable.element.parentsUntil("body").on("scroll.droppable",function(){if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}});},drag:function drag(draggable,event){// If you have a highly dynamic page, you might try this option. It renders positions
// every time you move the mouse.
if(draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}// Run through all droppables and check their positions based on specific tolerance options
$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return;}var parentInstance,scope,parent,intersects=intersect(draggable,this,this.options.tolerance,event),c=!intersects&&this.isover?"isout":intersects&&!this.isover?"isover":null;if(!c){return;}if(this.options.greedy){// find droppable parents with same scope
scope=this.options.scope;parent=this.element.parents(":data(ui-droppable)").filter(function(){return $(this).droppable("instance").options.scope===scope;});if(parent.length){parentInstance=$(parent[0]).droppable("instance");parentInstance.greedyChild=c==="isover";}}// We just moved into a greedy child
if(parentInstance&&c==="isover"){parentInstance.isover=false;parentInstance.isout=true;parentInstance._out.call(parentInstance,event);}this[c]=true;this[c==="isout"?"isover":"isout"]=false;this[c==="isover"?"_over":"_out"].call(this,event);// We just moved out of a greedy child
if(parentInstance&&c==="isout"){parentInstance.isout=false;parentInstance.isover=true;parentInstance._over.call(parentInstance,event);}});},dragStop:function dragStop(draggable,event){draggable.element.parentsUntil("body").off("scroll.droppable");// Call prepareOffsets one final time since IE does not fire return scroll events when
// overflow was caused by drag (see #5003)
if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}}};// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
if($.uiBackCompat!==false){// Backcompat for activeClass and hoverClass options
$.widget("ui.droppable",$.ui.droppable,{options:{hoverClass:false,activeClass:false},_addActiveClass:function _addActiveClass(){this._super();if(this.options.activeClass){this.element.addClass(this.options.activeClass);}},_removeActiveClass:function _removeActiveClass(){this._super();if(this.options.activeClass){this.element.removeClass(this.options.activeClass);}},_addHoverClass:function _addHoverClass(){this._super();if(this.options.hoverClass){this.element.addClass(this.options.hoverClass);}},_removeHoverClass:function _removeHoverClass(){this._super();if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass);}}});}var widgetsDroppable=$.ui.droppable;/*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Progressbar
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Displays a status indicator for loading state, standard percentage, and other progress indicators.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/progressbar/
//>>demos: http://jqueryui.com/progressbar/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/progressbar.css
//>>css.theme: ../../themes/base/theme.css
var widgetsProgressbar=$.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function _create(){// Constrain initial value
this.oldValue=this.options.value=this._constrainedValue();this.element.attr({// Only set static values; aria-valuenow and aria-valuemax are
// set inside _refreshValue()
role:"progressbar","aria-valuemin":this.min});this._addClass("ui-progressbar","ui-widget ui-widget-content");this.valueDiv=$("<div>").appendTo(this.element);this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header");this._refreshValue();},_destroy:function _destroy(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");this.valueDiv.remove();},value:function value(newValue){if(newValue===undefined){return this.options.value;}this.options.value=this._constrainedValue(newValue);this._refreshValue();},_constrainedValue:function _constrainedValue(newValue){if(newValue===undefined){newValue=this.options.value;}this.indeterminate=newValue===false;// Sanitize value
if(typeof newValue!=="number"){newValue=0;}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,newValue));},_setOptions:function _setOptions(options){// Ensure "value" option is set after other values (like max)
var value=options.value;delete options.value;this._super(options);this.options.value=this._constrainedValue(value);this._refreshValue();},_setOption:function _setOption(key,value){if(key==="max"){// Don't allow a max less than min
value=Math.max(this.min,value);}this._super(key,value);},_setOptionDisabled:function _setOptionDisabled(value){this._super(value);this.element.attr("aria-disabled",value);this._toggleClass(null,"ui-state-disabled",!!value);},_percentage:function _percentage(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min);},_refreshValue:function _refreshValue(){var value=this.options.value,percentage=this._percentage();this.valueDiv.toggle(this.indeterminate||value>this.min).width(percentage.toFixed(0)+"%");this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,value===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=$("<div>").appendTo(this.valueDiv);this._addClass(this.overlayDiv,"ui-progressbar-overlay");}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":value});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null;}}if(this.oldValue!==value){this.oldValue=value;this._trigger("change");}if(value===this.options.max){this._trigger("complete");}}});/*!
 * jQuery UI Selectable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Selectable
//>>group: Interactions
//>>description: Allows groups of elements to be selected with the mouse.
//>>docs: http://api.jqueryui.com/selectable/
//>>demos: http://jqueryui.com/selectable/
//>>css.structure: ../../themes/base/selectable.css
var widgetsSelectable=$.widget("ui.selectable",$.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",// Callbacks
selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function _create(){var that=this;this._addClass("ui-selectable");this.dragged=false;// Cache selectee children based on filter
this.refresh=function(){that.elementPos=$(that.element[0]).offset();that.selectees=$(that.options.filter,that.element[0]);that._addClass(that.selectees,"ui-selectee");that.selectees.each(function(){var $this=$(this),selecteeOffset=$this.offset(),pos={left:selecteeOffset.left-that.elementPos.left,top:selecteeOffset.top-that.elementPos.top};$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:false,selected:$this.hasClass("ui-selected"),selecting:$this.hasClass("ui-selecting"),unselecting:$this.hasClass("ui-unselecting")});});};this.refresh();this._mouseInit();this.helper=$("<div>");this._addClass(this.helper,"ui-selectable-helper");},_destroy:function _destroy(){this.selectees.removeData("selectable-item");this._mouseDestroy();},_mouseStart:function _mouseStart(event){var that=this,options=this.options;this.opos=[event.pageX,event.pageY];this.elementPos=$(this.element[0]).offset();if(this.options.disabled){return;}this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);// position helper (lasso)
this.helper.css({"left":event.pageX,"top":event.pageY,"width":0,"height":0});if(options.autoRefresh){this.refresh();}this.selectees.filter(".ui-selected").each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=true;if(!event.metaKey&&!event.ctrlKey){that._removeClass(selectee.$element,"ui-selected");selectee.selected=false;that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=true;// selectable UNSELECTING callback
that._trigger("unselecting",event,{unselecting:selectee.element});}});$(event.target).parents().addBack().each(function(){var doSelect,selectee=$.data(this,"selectable-item");if(selectee){doSelect=!event.metaKey&&!event.ctrlKey||!selectee.$element.hasClass("ui-selected");that._removeClass(selectee.$element,doSelect?"ui-unselecting":"ui-selected")._addClass(selectee.$element,doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;// selectable (UN)SELECTING callback
if(doSelect){that._trigger("selecting",event,{selecting:selectee.element});}else{that._trigger("unselecting",event,{unselecting:selectee.element});}return false;}});},_mouseDrag:function _mouseDrag(event){this.dragged=true;if(this.options.disabled){return;}var tmp,that=this,options=this.options,x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){tmp=x2;x2=x1;x1=tmp;}if(y1>y2){tmp=y2;y2=y1;y1=tmp;}this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item"),hit=false,offset={};//prevent helper from being selected if appendTo: selectable
if(!selectee||selectee.element===that.element[0]){return;}offset.left=selectee.left+that.elementPos.left;offset.right=selectee.right+that.elementPos.left;offset.top=selectee.top+that.elementPos.top;offset.bottom=selectee.bottom+that.elementPos.top;if(options.tolerance==="touch"){hit=!(offset.left>x2||offset.right<x1||offset.top>y2||offset.bottom<y1);}else if(options.tolerance==="fit"){hit=offset.left>x1&&offset.right<x2&&offset.top>y1&&offset.bottom<y2;}if(hit){// SELECT
if(selectee.selected){that._removeClass(selectee.$element,"ui-selected");selectee.selected=false;}if(selectee.unselecting){that._removeClass(selectee.$element,"ui-unselecting");selectee.unselecting=false;}if(!selectee.selecting){that._addClass(selectee.$element,"ui-selecting");selectee.selecting=true;// selectable SELECTING callback
that._trigger("selecting",event,{selecting:selectee.element});}}else{// UNSELECT
if(selectee.selecting){if((event.metaKey||event.ctrlKey)&&selectee.startselected){that._removeClass(selectee.$element,"ui-selecting");selectee.selecting=false;that._addClass(selectee.$element,"ui-selected");selectee.selected=true;}else{that._removeClass(selectee.$element,"ui-selecting");selectee.selecting=false;if(selectee.startselected){that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=true;}// selectable UNSELECTING callback
that._trigger("unselecting",event,{unselecting:selectee.element});}}if(selectee.selected){if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){that._removeClass(selectee.$element,"ui-selected");selectee.selected=false;that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=true;// selectable UNSELECTING callback
that._trigger("unselecting",event,{unselecting:selectee.element});}}}});return false;},_mouseStop:function _mouseStop(event){var that=this;this.dragged=false;$(".ui-unselecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");that._removeClass(selectee.$element,"ui-unselecting");selectee.unselecting=false;selectee.startselected=false;that._trigger("unselected",event,{unselected:selectee.element});});$(".ui-selecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");that._removeClass(selectee.$element,"ui-selecting")._addClass(selectee.$element,"ui-selected");selectee.selecting=false;selectee.selected=true;selectee.startselected=true;that._trigger("selected",event,{selected:selectee.element});});this._trigger("stop",event);this.helper.remove();return false;}});/*!
 * jQuery UI Selectmenu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Selectmenu
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Duplicates and extends the functionality of a native HTML select element, allowing it to be customizable in behavior and appearance far beyond the limitations of a native select.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/selectmenu/
//>>demos: http://jqueryui.com/selectmenu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/selectmenu.css, ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css
var widgetsSelectmenu=$.widget("ui.selectmenu",[$.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:false,// Callbacks
change:null,close:null,focus:null,open:null,select:null},_create:function _create(){var selectmenuId=this.element.uniqueId().attr("id");this.ids={element:selectmenuId,button:selectmenuId+"-button",menu:selectmenuId+"-menu"};this._drawButton();this._drawMenu();this._bindFormResetHandler();this._rendered=false;this.menuItems=$();},_drawButton:function _drawButton(){var icon,that=this,item=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);// Associate existing label with the new button
this.labels=this.element.labels().attr("for",this.ids.button);this._on(this.labels,{click:function click(event){this.button.focus();event.preventDefault();}});// Hide original select element
this.element.hide();// Create button
this.button=$("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element);this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget");icon=$("<span>").appendTo(this.button);this._addClass(icon,"ui-selectmenu-icon","ui-icon "+this.options.icons.button);this.buttonItem=this._renderButtonItem(item).appendTo(this.button);if(this.options.width!==false){this._resizeButton();}this._on(this.button,this._buttonEvents);this.button.one("focusin",function(){// Delay rendering the menu items until the button receives focus.
// The menu may have already been rendered via a programmatic open.
if(!that._rendered){that._refreshMenu();}});},_drawMenu:function _drawMenu(){var that=this;// Create menu
this.menu=$("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu});// Wrap menu
this.menuWrap=$("<div>").append(this.menu);this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front");this.menuWrap.appendTo(this._appendTo());// Initialize menu widget
this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function select(event,ui){event.preventDefault();// Support: IE8
// If the item was selected via a click, the text selection
// will be destroyed in IE
that._setSelection();that._select(ui.item.data("ui-selectmenu-item"),event);},focus:function focus(event,ui){var item=ui.item.data("ui-selectmenu-item");// Prevent inital focus from firing and check if its a newly focused item
if(that.focusIndex!=null&&item.index!==that.focusIndex){that._trigger("focus",event,{item:item});if(!that.isOpen){that._select(item,event);}}that.focusIndex=item.index;that.button.attr("aria-activedescendant",that.menuItems.eq(item.index).attr("id"));}}).menu("instance");// Don't close the menu on mouseleave
this.menuInstance._off(this.menu,"mouseleave");// Cancel the menu's collapseAll on document click
this.menuInstance._closeOnDocumentClick=function(){return false;};// Selects often contain empty items, but never contain dividers
this.menuInstance._isDivider=function(){return false;};},refresh:function refresh(){this._refreshMenu();this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(// Fall back to an empty object in case there are no options
this._getSelectedItem().data("ui-selectmenu-item")||{}));if(this.options.width===null){this._resizeButton();}},_refreshMenu:function _refreshMenu(){var item,options=this.element.find("option");this.menu.empty();this._parseOptions(options);this._renderMenu(this.menu,this.items);this.menuInstance.refresh();this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");this._rendered=true;if(!options.length){return;}item=this._getSelectedItem();// Update the menu to have the correct item focused
this.menuInstance.focus(null,item);this._setAria(item.data("ui-selectmenu-item"));// Set disabled state
this._setOption("disabled",this.element.prop("disabled"));},open:function open(event){if(this.options.disabled){return;}// If this is the first time the menu is being opened, render the items
if(!this._rendered){this._refreshMenu();}else{// Menu clears focus on close, reset focus to selected item
this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active");this.menuInstance.focus(null,this._getSelectedItem());}// If there are no options, don't open the menu
if(!this.menuItems.length){return;}this.isOpen=true;this._toggleAttr();this._resizeMenu();this._position();this._on(this.document,this._documentClick);this._trigger("open",event);},_position:function _position(){this.menuWrap.position($.extend({of:this.button},this.options.position));},close:function close(event){if(!this.isOpen){return;}this.isOpen=false;this._toggleAttr();this.range=null;this._off(this.document);this._trigger("close",event);},widget:function widget(){return this.button;},menuWidget:function menuWidget(){return this.menu;},_renderButtonItem:function _renderButtonItem(item){var buttonItem=$("<span>");this._setText(buttonItem,item.label);this._addClass(buttonItem,"ui-selectmenu-text");return buttonItem;},_renderMenu:function _renderMenu(ul,items){var that=this,currentOptgroup="";$.each(items,function(index,item){var li;if(item.optgroup!==currentOptgroup){li=$("<li>",{text:item.optgroup});that._addClass(li,"ui-selectmenu-optgroup","ui-menu-divider"+(item.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""));li.appendTo(ul);currentOptgroup=item.optgroup;}that._renderItemData(ul,item);});},_renderItemData:function _renderItemData(ul,item){return this._renderItem(ul,item).data("ui-selectmenu-item",item);},_renderItem:function _renderItem(ul,item){var li=$("<li>"),wrapper=$("<div>",{title:item.element.attr("title")});if(item.disabled){this._addClass(li,null,"ui-state-disabled");}this._setText(wrapper,item.label);return li.append(wrapper).appendTo(ul);},_setText:function _setText(element,value){if(value){element.text(value);}else{element.html("&#160;");}},_move:function _move(direction,event){var item,next,filter=".ui-menu-item";if(this.isOpen){item=this.menuItems.eq(this.focusIndex).parent("li");}else{item=this.menuItems.eq(this.element[0].selectedIndex).parent("li");filter+=":not(.ui-state-disabled)";}if(direction==="first"||direction==="last"){next=item[direction==="first"?"prevAll":"nextAll"](filter).eq(-1);}else{next=item[direction+"All"](filter).eq(0);}if(next.length){this.menuInstance.focus(event,next);}},_getSelectedItem:function _getSelectedItem(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li");},_toggle:function _toggle(event){this[this.isOpen?"close":"open"](event);},_setSelection:function _setSelection(){var selection;if(!this.range){return;}if(window.getSelection){selection=window.getSelection();selection.removeAllRanges();selection.addRange(this.range);// Support: IE8
}else{this.range.select();}// Support: IE
// Setting the text selection kills the button focus in IE, but
// restoring the focus doesn't kill the selection.
this.button.focus();},_documentClick:{mousedown:function mousedown(event){if(!this.isOpen){return;}if(!$(event.target).closest(".ui-selectmenu-menu, #"+$.ui.escapeSelector(this.ids.button)).length){this.close(event);}}},_buttonEvents:{// Prevent text selection from being reset when interacting with the selectmenu (#10144)
mousedown:function mousedown(){var selection;if(window.getSelection){selection=window.getSelection();if(selection.rangeCount){this.range=selection.getRangeAt(0);}// Support: IE8
}else{this.range=document.selection.createRange();}},click:function click(event){this._setSelection();this._toggle(event);},keydown:function keydown(event){var preventDefault=true;switch(event.keyCode){case $.ui.keyCode.TAB:case $.ui.keyCode.ESCAPE:this.close(event);preventDefault=false;break;case $.ui.keyCode.ENTER:if(this.isOpen){this._selectFocusedItem(event);}break;case $.ui.keyCode.UP:if(event.altKey){this._toggle(event);}else{this._move("prev",event);}break;case $.ui.keyCode.DOWN:if(event.altKey){this._toggle(event);}else{this._move("next",event);}break;case $.ui.keyCode.SPACE:if(this.isOpen){this._selectFocusedItem(event);}else{this._toggle(event);}break;case $.ui.keyCode.LEFT:this._move("prev",event);break;case $.ui.keyCode.RIGHT:this._move("next",event);break;case $.ui.keyCode.HOME:case $.ui.keyCode.PAGE_UP:this._move("first",event);break;case $.ui.keyCode.END:case $.ui.keyCode.PAGE_DOWN:this._move("last",event);break;default:this.menu.trigger(event);preventDefault=false;}if(preventDefault){event.preventDefault();}}},_selectFocusedItem:function _selectFocusedItem(event){var item=this.menuItems.eq(this.focusIndex).parent("li");if(!item.hasClass("ui-state-disabled")){this._select(item.data("ui-selectmenu-item"),event);}},_select:function _select(item,event){var oldIndex=this.element[0].selectedIndex;// Change native select element
this.element[0].selectedIndex=item.index;this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(item));this._setAria(item);this._trigger("select",event,{item:item});if(item.index!==oldIndex){this._trigger("change",event,{item:item});}this.close(event);},_setAria:function _setAria(item){var id=this.menuItems.eq(item.index).attr("id");this.button.attr({"aria-labelledby":id,"aria-activedescendant":id});this.menu.attr("aria-activedescendant",id);},_setOption:function _setOption(key,value){if(key==="icons"){var icon=this.button.find("span.ui-icon");this._removeClass(icon,null,this.options.icons.button)._addClass(icon,null,value.button);}this._super(key,value);if(key==="appendTo"){this.menuWrap.appendTo(this._appendTo());}if(key==="width"){this._resizeButton();}},_setOptionDisabled:function _setOptionDisabled(value){this._super(value);this.menuInstance.option("disabled",value);this.button.attr("aria-disabled",value);this._toggleClass(this.button,null,"ui-state-disabled",value);this.element.prop("disabled",value);if(value){this.button.attr("tabindex",-1);this.close();}else{this.button.attr("tabindex",0);}},_appendTo:function _appendTo(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0);}if(!element||!element[0]){element=this.element.closest(".ui-front, dialog");}if(!element.length){element=this.document[0].body;}return element;},_toggleAttr:function _toggleAttr(){this.button.attr("aria-expanded",this.isOpen);// We can't use two _toggleClass() calls here, because we need to make sure
// we always remove classes first and add them second, otherwise if both classes have the
// same theme class, it will be removed after we add it.
this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen);this.menu.attr("aria-hidden",!this.isOpen);},_resizeButton:function _resizeButton(){var width=this.options.width;// For `width: false`, just remove inline style and stop
if(width===false){this.button.css("width","");return;}// For `width: null`, match the width of the original element
if(width===null){width=this.element.show().outerWidth();this.element.hide();}this.button.outerWidth(width);},_resizeMenu:function _resizeMenu(){this.menu.outerWidth(Math.max(this.button.outerWidth(),// Support: IE10
// IE10 wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping
this.menu.width("").outerWidth()+1));},_getCreateOptions:function _getCreateOptions(){var options=this._super();options.disabled=this.element.prop("disabled");return options;},_parseOptions:function _parseOptions(options){var that=this,data=[];options.each(function(index,item){data.push(that._parseOption($(item),index));});this.items=data;},_parseOption:function _parseOption(option,index){var optgroup=option.parent("optgroup");return{element:option,index:index,value:option.val(),label:option.text(),optgroup:optgroup.attr("label")||"",disabled:optgroup.prop("disabled")||option.prop("disabled")};},_destroy:function _destroy(){this._unbindFormResetHandler();this.menuWrap.remove();this.button.remove();this.element.show();this.element.removeUniqueId();this.labels.attr("for",this.ids.element);}}]);/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Slider
//>>group: Widgets
//>>description: Displays a flexible slider with ranges and accessibility via keyboard.
//>>docs: http://api.jqueryui.com/slider/
//>>demos: http://jqueryui.com/slider/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/slider.css
//>>css.theme: ../../themes/base/theme.css
var widgetsSlider=$.widget("ui.slider",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:false,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all",// Note: ui-widget-header isn't the most fittingly semantic framework class for this
// element, but worked best visually with a variety of themes
"ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,// Callbacks
change:null,slide:null,start:null,stop:null},// Number of pages in a slider
// (how many times can you page up/down to go through the whole range)
numPages:5,_create:function _create(){this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this._calculateNewMax();this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content");this._refresh();this._animateOff=false;},_refresh:function _refresh(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue();},_createHandles:function _createHandles(){var i,handleCount,options=this.options,existingHandles=this.element.find(".ui-slider-handle"),handle="<span tabindex='0'></span>",handles=[];handleCount=options.values&&options.values.length||1;if(existingHandles.length>handleCount){existingHandles.slice(handleCount).remove();existingHandles=existingHandles.slice(0,handleCount);}for(i=existingHandles.length;i<handleCount;i++){handles.push(handle);}this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));this._addClass(this.handles,"ui-slider-handle","ui-state-default");this.handle=this.handles.eq(0);this.handles.each(function(i){$(this).data("ui-slider-handle-index",i).attr("tabIndex",0);});},_createRange:function _createRange(){var options=this.options;if(options.range){if(options.range===true){if(!options.values){options.values=[this._valueMin(),this._valueMin()];}else if(options.values.length&&options.values.length!==2){options.values=[options.values[0],options.values[0]];}else if($.isArray(options.values)){options.values=options.values.slice(0);}}if(!this.range||!this.range.length){this.range=$("<div>").appendTo(this.element);this._addClass(this.range,"ui-slider-range");}else{this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max");// Handle range switching from true to min/max
this.range.css({"left":"","bottom":""});}if(options.range==="min"||options.range==="max"){this._addClass(this.range,"ui-slider-range-"+options.range);}}else{if(this.range){this.range.remove();}this.range=null;}},_setupEvents:function _setupEvents(){this._off(this.handles);this._on(this.handles,this._handleEvents);this._hoverable(this.handles);this._focusable(this.handles);},_destroy:function _destroy(){this.handles.remove();if(this.range){this.range.remove();}this._mouseDestroy();},_mouseCapture:function _mouseCapture(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;if(o.disabled){return false;}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));if(distance>thisDistance||distance===thisDistance&&(i===that._lastChangedValue||that.values(i)===o.min)){distance=thisDistance;closestHandle=$(this);index=i;}});allowed=this._start(event,index);if(allowed===false){return false;}this._mouseSliding=true;this._handleIndex=index;this._addClass(closestHandle,null,"ui-state-active");closestHandle.trigger("focus");offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-closestHandle.width()/2,top:event.pageY-offset.top-closestHandle.height()/2-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue);}this._animateOff=true;return true;},_mouseStart:function _mouseStart(){return true;},_mouseDrag:function _mouseDrag(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false;},_mouseStop:function _mouseStop(event){this._removeClass(this.handles,null,"ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false;},_detectOrientation:function _detectOrientation(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal";},_normValueFromMouse:function _normValueFromMouse(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);}percentMouse=pixelMouse/pixelTotal;if(percentMouse>1){percentMouse=1;}if(percentMouse<0){percentMouse=0;}if(this.orientation==="vertical"){percentMouse=1-percentMouse;}valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse);},_uiHash:function _uiHash(index,value,values){var uiHash={handle:this.handles[index],handleIndex:index,value:value!==undefined?value:this.value()};if(this._hasMultipleValues()){uiHash.value=value!==undefined?value:this.values(index);uiHash.values=values||this.values();}return uiHash;},_hasMultipleValues:function _hasMultipleValues(){return this.options.values&&this.options.values.length;},_start:function _start(event,index){return this._trigger("start",event,this._uiHash(index));},_slide:function _slide(event,index,newVal){var allowed,otherVal,currentValue=this.value(),newValues=this.values();if(this._hasMultipleValues()){otherVal=this.values(index?0:1);currentValue=this.values(index);if(this.options.values.length===2&&this.options.range===true){newVal=index===0?Math.min(otherVal,newVal):Math.max(otherVal,newVal);}newValues[index]=newVal;}if(newVal===currentValue){return;}allowed=this._trigger("slide",event,this._uiHash(index,newVal,newValues));// A slide can be canceled by returning false from the slide callback
if(allowed===false){return;}if(this._hasMultipleValues()){this.values(index,newVal);}else{this.value(newVal);}},_stop:function _stop(event,index){this._trigger("stop",event,this._uiHash(index));},_change:function _change(event,index){if(!this._keySliding&&!this._mouseSliding){//store the last changed value index for reference when handles overlap
this._lastChangedValue=index;this._trigger("change",event,this._uiHash(index));}},value:function value(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return;}return this._value();},values:function values(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return;}if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i);}this._refreshValue();}else{if(this._hasMultipleValues()){return this._values(index);}else{return this.value();}}}else{return this._values();}},_setOption:function _setOption(key,value){var i,valsLength=0;if(key==="range"&&this.options.range===true){if(value==="min"){this.options.value=this._values(0);this.options.values=null;}else if(value==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null;}}if($.isArray(this.options.values)){valsLength=this.options.values.length;}this._super(key,value);switch(key){case"orientation":this._detectOrientation();this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation);this._refreshValue();if(this.options.range){this._refreshRange(value);}// Reset positioning from previous orientation
this.handles.css(value==="horizontal"?"bottom":"left","");break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();// Start from the last handle to prevent unreachable handles (#9046)
for(i=valsLength-1;i>=0;i--){this._change(null,i);}this._animateOff=false;break;case"step":case"min":case"max":this._animateOff=true;this._calculateNewMax();this._refreshValue();this._animateOff=false;break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break;}},_setOptionDisabled:function _setOptionDisabled(value){this._super(value);this._toggleClass(null,"ui-state-disabled",!!value);},//internal value getter
// _value() returns value trimmed by min and max, aligned by step
_value:function _value(){var val=this.options.value;val=this._trimAlignValue(val);return val;},//internal values getter
// _values() returns array of values trimmed by min and max, aligned by step
// _values( index ) returns single value trimmed by min and max, aligned by step
_values:function _values(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val;}else if(this._hasMultipleValues()){// .slice() creates a copy of the array
// this copy gets trimmed by min and max and then returned
vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i]);}return vals;}else{return[];}},// Returns the step-aligned value that val is closest to, between (inclusive) min and max
_trimAlignValue:function _trimAlignValue(val){if(val<=this._valueMin()){return this._valueMin();}if(val>=this._valueMax()){return this._valueMax();}var step=this.options.step>0?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=valModStep>0?step:-step;}// Since JavaScript has problems with large floats, round
// the final value to 5 digits after the decimal point (see #4124)
return parseFloat(alignValue.toFixed(5));},_calculateNewMax:function _calculateNewMax(){var max=this.options.max,min=this._valueMin(),step=this.options.step,aboveMin=Math.round((max-min)/step)*step;max=aboveMin+min;if(max>this.options.max){//If max is not divisible by step, rounding off may increase its value
max-=step;}this.max=parseFloat(max.toFixed(this._precision()));},_precision:function _precision(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min));}return precision;},_precisionOf:function _precisionOf(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1;},_valueMin:function _valueMin(){return this.options.min;},_valueMax:function _valueMax(){return this.max;},_refreshRange:function _refreshRange(orientation){if(orientation==="vertical"){this.range.css({"width":"","left":""});}if(orientation==="horizontal"){this.range.css({"height":"","bottom":""});}},_refreshValue:function _refreshValue(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=!this._animateOff?o.animate:false,_set={};if(this._hasMultipleValues()){this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-that._valueMin())*100;_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(that.options.range===true){if(that.orientation==="horizontal"){if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate);}if(i===1){that.range[animate?"animate":"css"]({width:valPercent-lastValPercent+"%"},{queue:false,duration:o.animate});}}else{if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({bottom:valPercent+"%"},o.animate);}if(i===1){that.range[animate?"animate":"css"]({height:valPercent-lastValPercent+"%"},{queue:false,duration:o.animate});}}}lastValPercent=valPercent;});}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=valueMax!==valueMin?(value-valueMin)/(valueMax-valueMin)*100:0;_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate);}if(oRange==="max"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:100-valPercent+"%"},o.animate);}if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate);}if(oRange==="max"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:100-valPercent+"%"},o.animate);}}},_handleEvents:{keydown:function keydown(event){var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:event.preventDefault();if(!this._keySliding){this._keySliding=true;this._addClass($(event.target),null,"ui-state-active");allowed=this._start(event,index);if(allowed===false){return;}}break;}step=this.options.step;if(this._hasMultipleValues()){curVal=newVal=this.values(index);}else{curVal=newVal=this.value();}switch(event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+(this._valueMax()-this._valueMin())/this.numPages);break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-(this._valueMax()-this._valueMin())/this.numPages);break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax()){return;}newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin()){return;}newVal=this._trimAlignValue(curVal-step);break;}this._slide(event,index,newVal);},keyup:function keyup(event){var index=$(event.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(event,index);this._change(event,index);this._removeClass($(event.target),null,"ui-state-active");}}}});/*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Sortable
//>>group: Interactions
//>>description: Enables items in a list to be sorted using the mouse.
//>>docs: http://api.jqueryui.com/sortable/
//>>demos: http://jqueryui.com/sortable/
//>>css.structure: ../../themes/base/sortable.css
var widgetsSortable=$.widget("ui.sortable",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,// Callbacks
activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function _isOverAxis(x,reference,size){return x>=reference&&x<reference+size;},_isFloating:function _isFloating(item){return /left|right/.test(item.css("float"))||/inline|table-cell/.test(item.css("display"));},_create:function _create(){this.containerCache={};this._addClass("ui-sortable");//Get the items
this.refresh();//Let's determine the parent's offset
this.offset=this.element.offset();//Initialize mouse events for interaction
this._mouseInit();this._setHandleClassName();//We're ready to go
this.ready=true;},_setOption:function _setOption(key,value){this._super(key,value);if(key==="handle"){this._setHandleClassName();}},_setHandleClassName:function _setHandleClassName(){var that=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle");$.each(this.items,function(){that._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle");});},_destroy:function _destroy(){this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--){this.items[i].item.removeData(this.widgetName+"-item");}return this;},_mouseCapture:function _mouseCapture(event,overrideHandle){var currentItem=null,validHandle=false,that=this;if(this.reverting){return false;}if(this.options.disabled||this.options.type==="static"){return false;}//We have to refresh the items data once first
this._refreshItems(event);//Find out if the clicked node (or one of its parents) is a actual item in this.items
$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")===that){currentItem=$(this);return false;}});if($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target);}if(!currentItem){return false;}if(this.options.handle&&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if(this===event.target){validHandle=true;}});if(!validHandle){return false;}}this.currentItem=currentItem;this._removeCurrentsFromItems();return true;},_mouseStart:function _mouseStart(event,overrideHandle,noActivation){var i,body,o=this.options;this.currentContainer=this;//We only need to call refreshPositions, because the refreshItems call has been moved to
// mouseCapture
this.refreshPositions();//Create and append the visible helper
this.helper=this._createHelper(event);//Cache the helper size
this._cacheHelperProportions();/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */ //Cache the margins of the original element
this._cacheMargins();//Get the next scrolling parent
this.scrollParent=this.helper.scrollParent();//The element's absolute position on the page minus margins
this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{//Where the click happened, relative to the element
left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),// This is a relative to absolute position minus the actual position calculation -
// only used for relative positioned helper
relative:this._getRelativeOffset()});// Only after we got the offset, we can change the helper's position to absolute
// TODO: Still need to figure out a way to make relative sorting possible
this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");//Generate the original position
this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt);//Cache the former DOM position
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};// If the helper is not the original, hide the original so it's not playing any role during
// the drag, won't cause anything bad this way
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide();}//Create the placeholder
this._createPlaceholder();//Set a containment if given in the options
if(o.containment){this._setContainment();}if(o.cursor&&o.cursor!=="auto"){// cursor option
body=this.document.find("body");// Support: IE
this.storedCursor=body.css("cursor");body.css("cursor",o.cursor);this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body);}if(o.opacity){// opacity option
if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity");}this.helper.css("opacity",o.opacity);}if(o.zIndex){// zIndex option
if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex");}this.helper.css("zIndex",o.zIndex);}//Prepare scrolling
if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset();}//Call callbacks
this._trigger("start",event,this._uiHash());//Recache the helper size
if(!this._preserveHelperProportions){this._cacheHelperProportions();}//Post "activate" events to possible containers
if(!noActivation){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this));}}//Prepare possible droppables
if($.ui.ddmanager){$.ui.ddmanager.current=this;}if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}this.dragging=true;this._addClass(this.helper,"ui-sortable-helper");// Execute the drag once - this causes the helper not to be visiblebefore getting its
// correct position
this._mouseDrag(event);return true;},_mouseDrag:function _mouseDrag(event){var i,item,itemElement,intersection,o=this.options,scrolled=false;//Compute the helpers position
this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs;}//Do scrolling
if(this.options.scroll){if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-event.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;}if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-event.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;}}else{if(event.pageY-this.document.scrollTop()<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed);}else if(this.window.height()-(event.pageY-this.document.scrollTop())<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed);}if(event.pageX-this.document.scrollLeft()<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed);}else if(this.window.width()-(event.pageX-this.document.scrollLeft())<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed);}}if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}}//Regenerate the absolute position used for position checks
this.positionAbs=this._convertPositionTo("absolute");//Set the helper position
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px";}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px";}//Rearrange
for(i=this.items.length-1;i>=0;i--){//Cache variables and intersection, continue if no intersection
item=this.items[i];itemElement=item.item[0];intersection=this._intersectsWithPointer(item);if(!intersection){continue;}// Only put the placeholder inside the current Container, skip all
// items from other containers. This works because when moving
// an item from one container to another the
// currentContainer is switched before the placeholder is moved.
//
// Without this, moving items in "sub-sortables" can cause
// the placeholder to jitter between the outer and inner container.
if(item.instance!==this.currentContainer){continue;}// Cannot intersect with itself
// no useless actions that have been done before
// no action if the item moved is the parent of the item checked
if(itemElement!==this.currentItem[0]&&this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],itemElement):true)){this.direction=intersection===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item);}else{break;}this._trigger("change",event,this._uiHash());break;}}//Post events to containers
this._contactContainers(event);//Interconnect with droppables
if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}//Call callbacks
this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false;},_mouseStop:function _mouseStop(event,noPropagation){if(!event){return;}//If we are using droppables, inform the manager about the drop
if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event);}if(this.options.revert){var that=this,cur=this.placeholder.offset(),axis=this.options.axis,animation={};if(!axis||axis==="x"){animation.left=cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft);}if(!axis||axis==="y"){animation.top=cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop);}this.reverting=true;$(this.helper).animate(animation,parseInt(this.options.revert,10)||500,function(){that._clear(event);});}else{this._clear(event,noPropagation);}return false;},cancel:function cancel(){if(this.dragging){this._mouseUp(new $.Event("mouseup",{target:null}));if(this.options.helper==="original"){this.currentItem.css(this._storedCSS);this._removeClass(this.currentItem,"ui-sortable-helper");}else{this.currentItem.show();}//Post deactivating events to containers
for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0;}}}if(this.placeholder){//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
// it unbinds ALL events from the original node!
if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0]);}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove();}$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem);}else{$(this.domPosition.parent).prepend(this.currentItem);}}return this;},serialize:function serialize(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||/(.+)[\-=_](.+)/);if(res){str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]));}});if(!str.length&&o.key){str.push(o.key+"=");}return str.join("&");},toArray:function toArray(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"");});return ret;},/* Be careful with the following core functions */_intersectsWith:function _intersectsWith(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElementHeight=this.options.axis==="x"||y1+dyClick>t&&y1+dyClick<b,isOverElementWidth=this.options.axis==="y"||x1+dxClick>l&&x1+dxClick<r,isOverElement=isOverElementHeight&&isOverElementWidth;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"]){return isOverElement;}else{return l<x1+this.helperProportions.width/2&&// Right Half
x2-this.helperProportions.width/2<r&&// Left Half
t<y1+this.helperProportions.height/2&&// Bottom Half
y2-this.helperProportions.height/2<b;// Top Half
}},_intersectsWithPointer:function _intersectsWithPointer(item){var verticalDirection,horizontalDirection,isOverElementHeight=this.options.axis==="x"||this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=this.options.axis==="y"||this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth;if(!isOverElement){return false;}verticalDirection=this._getDragVerticalDirection();horizontalDirection=this._getDragHorizontalDirection();return this.floating?horizontalDirection==="right"||verticalDirection==="down"?2:1:verticalDirection&&(verticalDirection==="down"?2:1);},_intersectsWithSides:function _intersectsWithSides(item){var isOverBottomHalf=this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+item.height/2,item.height),isOverRightHalf=this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+item.width/2,item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return horizontalDirection==="right"&&isOverRightHalf||horizontalDirection==="left"&&!isOverRightHalf;}else{return verticalDirection&&(verticalDirection==="down"&&isOverBottomHalf||verticalDirection==="up"&&!isOverBottomHalf);}},_getDragVerticalDirection:function _getDragVerticalDirection(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!==0&&(delta>0?"down":"up");},_getDragHorizontalDirection:function _getDragHorizontalDirection(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!==0&&(delta>0?"right":"left");},refresh:function refresh(event){this._refreshItems(event);this._setHandleClassName();this.refreshPositions();return this;},_connectWith:function _connectWith(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith;},_getItemsAsjQuery:function _getItemsAsjQuery(connected){var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst]);}}}}queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);function addItems(){items.push(this);}for(i=queries.length-1;i>=0;i--){queries[i][0].each(addItems);}return $(items);},_removeCurrentsFromItems:function _removeCurrentsFromItems(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]===item.item[0]){return false;}}return true;});},_refreshItems:function _refreshItems(event){this.items=[];this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();//Shouldn't be run the first time through due to massive slow-down
if(connectWith&&this.ready){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst);}}}}for(i=queries.length-1;i>=0;i--){targetData=queries[i][1];_queries=queries[i][0];for(j=0,queriesLength=_queries.length;j<queriesLength;j++){item=$(_queries[j]);// Data for target checking (mouse manager)
item.data(this.widgetName+"-item",targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0});}}},refreshPositions:function refreshPositions(fast){// Determine whether items are being displayed horizontally
this.floating=this.items.length?this.options.axis==="x"||this._isFloating(this.items[0].item):false;//This has to be redone because due to the item being moved out/into the offsetParent,
// the offsetParent's position will change
if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset();}var i,item,t,p;for(i=this.items.length-1;i>=0;i--){item=this.items[i];//We ignore calculating positions of all connected containers when we're not over them
if(item.instance!==this.currentContainer&&this.currentContainer&&item.item[0]!==this.currentItem[0]){continue;}t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight();}p=t.offset();item.left=p.left;item.top=p.top;}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this);}else{for(i=this.containers.length-1;i>=0;i--){p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight();}}return this;},_createPlaceholder:function _createPlaceholder(that){that=that||this;var className,o=that.options;if(!o.placeholder||o.placeholder.constructor===String){className=o.placeholder;o.placeholder={element:function element(){var nodeName=that.currentItem[0].nodeName.toLowerCase(),element=$("<"+nodeName+">",that.document[0]);that._addClass(element,"ui-sortable-placeholder",className||that.currentItem[0].className)._removeClass(element,"ui-sortable-helper");if(nodeName==="tbody"){that._createTrPlaceholder(that.currentItem.find("tr").eq(0),$("<tr>",that.document[0]).appendTo(element));}else if(nodeName==="tr"){that._createTrPlaceholder(that.currentItem,element);}else if(nodeName==="img"){element.attr("src",that.currentItem.attr("src"));}if(!className){element.css("visibility","hidden");}return element;},update:function update(container,p){// 1. If a className is set as 'placeholder option, we don't force sizes -
// the class is responsible for that
// 2. The option 'forcePlaceholderSize can be enabled to force it even if a
// class name is specified
if(className&&!o.forcePlaceholderSize){return;}//If the element doesn't have a actual height by itself (without styles coming
// from a stylesheet), it receives the inline height from the dragged item
if(!p.height()){p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10));}if(!p.width()){p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10));}}};}//Create the placeholder
that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));//Append it after the actual current item
that.currentItem.after(that.placeholder);//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
o.placeholder.update(that,that.placeholder);},_createTrPlaceholder:function _createTrPlaceholder(sourceTr,targetTr){var that=this;sourceTr.children().each(function(){$("<td>&#160;</td>",that.document[0]).attr("colspan",$(this).attr("colspan")||1).appendTo(targetTr);});},_contactContainers:function _contactContainers(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,cur,nearBottom,floating,axis,innermostContainer=null,innermostIndex=null;// Get innermost container that intersects with item
for(i=this.containers.length-1;i>=0;i--){// Never consider a container that's located within the item itself
if($.contains(this.currentItem[0],this.containers[i].element[0])){continue;}if(this._intersectsWith(this.containers[i].containerCache)){// If we've already found a container and it's more "inner" than this, then continue
if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0])){continue;}innermostContainer=this.containers[i];innermostIndex=i;}else{// container doesn't intersect. trigger "out" event if necessary
if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0;}}}// If no intersecting containers found, return
if(!innermostContainer){return;}// Move the item into the container if it's not there already
if(this.containers.length===1){if(!this.containers[innermostIndex].containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}}else{// When entering a new container, we will find the item with the least distance and
// append our item near it
dist=10000;itemWithLeastDistance=null;floating=innermostContainer.floating||this._isFloating(this.currentItem);posProperty=floating?"left":"top";sizeProperty=floating?"width":"height";axis=floating?"pageX":"pageY";for(j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])){continue;}if(this.items[j].item[0]===this.currentItem[0]){continue;}cur=this.items[j].item.offset()[posProperty];nearBottom=false;if(event[axis]-cur>this.items[j][sizeProperty]/2){nearBottom=true;}if(Math.abs(event[axis]-cur)<dist){dist=Math.abs(event[axis]-cur);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down";}}//Check if dropOnEmpty is enabled
if(!itemWithLeastDistance&&!this.options.dropOnEmpty){return;}if(this.currentContainer===this.containers[innermostIndex]){if(!this.currentContainer.containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash());this.currentContainer.containerCache.over=1;}return;}itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.currentContainer=this.containers[innermostIndex];//Update the placeholder
this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}},_createHelper:function _createHelper(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):o.helper==="clone"?this.currentItem.clone():this.currentItem;//Add the helper to the DOM if that didn't happen already
if(!helper.parents("body").length){$(o.appendTo!=="parent"?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);}if(helper[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};}if(!helper[0].style.width||o.forceHelperSize){helper.width(this.currentItem.width());}if(!helper[0].style.height||o.forceHelperSize){helper.height(this.currentItem.height());}return helper;},_adjustOffsetFromHelper:function _adjustOffsetFromHelper(obj){if(typeof obj==="string"){obj=obj.split(" ");}if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function _getParentOffset(){//Get the offsetParent and cache its position
this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();// This is a special case where we need to modify a offset calculated on start, since the
// following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the
// next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
// the document, which means that the scroll is included in the initial calculation of the
// offset of the parent, and never recalculated upon drag
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}// This needs to be actually done for all browsers, since pageX/pageY includes this
// information with an ugly IE fix
if(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie){po={top:0,left:0};}return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function _getRelativeOffset(){if(this.cssPosition==="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function _cacheMargins(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0};},_cacheHelperProportions:function _cacheHelperProportions(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function _setContainment(){var ce,co,over,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,o.containment==="document"?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,(o.containment==="document"?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];}if(!/^(document|window|parent)$/.test(o.containment)){ce=$(o.containment)[0];co=$(o.containment).offset();over=$(ce).css("overflow")!=="hidden";this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];}},_convertPositionTo:function _convertPositionTo(d,pos){if(!pos){pos=this.position;}var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);return{top:// The absolute mouse position
pos.top+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top*mod+// The offsetParent's offset without borders (offset + border)
this.offset.parent.top*mod-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop())*mod,left:// The absolute mouse position
pos.left+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left*mod+// The offsetParent's offset without borders (offset + border)
this.offset.parent.left*mod-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod};},_generatePosition:function _generatePosition(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);// This is another very weird special case that only happens for relative elements:
// 1. If the css position is relative
// 2. and the scroll parent is the document or similar to the offset parent
// we have to refresh the relative offset during the scroll so there are no jumps
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset();}/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */if(this.originalPosition){//If we are not dragging yet, we won't check for options
if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0]){pageX=this.containment[0]+this.offset.click.left;}if(event.pageY-this.offset.click.top<this.containment[1]){pageY=this.containment[1]+this.offset.click.top;}if(event.pageX-this.offset.click.left>this.containment[2]){pageX=this.containment[2]+this.offset.click.left;}if(event.pageY-this.offset.click.top>this.containment[3]){pageY=this.containment[3]+this.offset.click.top;}}if(o.grid){top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3]?top:top-this.offset.click.top>=this.containment[1]?top-o.grid[1]:top+o.grid[1]:top;left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2]?left:left-this.offset.click.left>=this.containment[0]?left-o.grid[0]:left+o.grid[0]:left;}}return{top:// The absolute mouse position
pageY-// Click offset (relative to the element)
this.offset.click.top-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top-// The offsetParent's offset without borders (offset + border)
this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop()),left:// The absolute mouse position
pageX-// Click offset (relative to the element)
this.offset.click.left-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left-// The offsetParent's offset without borders (offset + border)
this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())};},_rearrange:function _rearrange(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?i.item[0]:i.item[0].nextSibling);//Various things done here to improve the performance:
// 1. we create a setTimeout, that calls refreshPositions
// 2. on the instance, we have a counter variable, that get's higher after every append
// 3. on the local scope, we copy the counter variable, and check in the timeout,
// if it's still the same
// 4. this lets only the last addition to the timeout stack through
this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter===this.counter){//Precompute after each DOM insertion, NOT on mousemove
this.refreshPositions(!hardRefresh);}});},_clear:function _clear(event,noPropagation){this.reverting=false;// We delay all events that have to be triggered to after the point where the placeholder
// has been removed and everything else normalized again
var i,delayedTriggers=[];// We first have to update the dom position of the actual currentItem
// Note: don't do it if the current item is already removed (by a user), or it gets
// reappended (see #4088)
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem);}this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]="";}}this.currentItem.css(this._storedCSS);this._removeClass(this.currentItem,"ui-sortable-helper");}else{this.currentItem.show();}if(this.fromOutside&&!noPropagation){delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){// Trigger update callback if the DOM position has changed
delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});}// Check if the items Container has Changed and trigger appropriate
// events.
if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});delayedTriggers.push(function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}.call(this,this.currentContainer));delayedTriggers.push(function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}.call(this,this.currentContainer));}}//Post events to containers
function delayEvent(type,instance,container){return function(event){container._trigger(type,event,instance._uiHash(instance));};}for(i=this.containers.length-1;i>=0;i--){if(!noPropagation){delayedTriggers.push(delayEvent("deactivate",this,this.containers[i]));}if(this.containers[i].containerCache.over){delayedTriggers.push(delayEvent("out",this,this.containers[i]));this.containers[i].containerCache.over=0;}}//Do what was originally in plugins
if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove();}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity);}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex);}this.dragging=false;if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());}//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
// it unbinds ALL events from the original node!
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(!this.cancelHelperRemoval){if(this.helper[0]!==this.currentItem[0]){this.helper.remove();}this.helper=null;}if(!noPropagation){for(i=0;i<delayedTriggers.length;i++){// Trigger all delayed events
delayedTriggers[i].call(this,event);}this._trigger("stop",event,this._uiHash());}this.fromOutside=false;return!this.cancelHelperRemoval;},_trigger:function _trigger(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel();}},_uiHash:function _uiHash(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null};}});/*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Spinner
//>>group: Widgets
//>>description: Displays buttons to easily input numbers via the keyboard or mouse.
//>>docs: http://api.jqueryui.com/spinner/
//>>demos: http://jqueryui.com/spinner/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/spinner.css
//>>css.theme: ../../themes/base/theme.css
function spinnerModifer(fn){return function(){var previous=this.element.val();fn.apply(this,arguments);this._refresh();if(previous!==this.element.val()){this._trigger("change");}};}$.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function _create(){// handle string values that need to be parsed
this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);// Only format if there is a value, prevents the field from being marked
// as invalid in Firefox, see #9573.
if(this.value()!==""){// Format the value, but don't constrain.
this._value(this.element.val(),true);}this._draw();this._on(this._events);this._refresh();// Turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function beforeunload(){this.element.removeAttr("autocomplete");}});},_getCreateOptions:function _getCreateOptions(){var options=this._super();var element=this.element;$.each(["min","max","step"],function(i,option){var value=element.attr(option);if(value!=null&&value.length){options[option]=value;}});return options;},_events:{keydown:function keydown(event){if(this._start(event)&&this._keydown(event)){event.preventDefault();}},keyup:"_stop",focus:function focus(){this.previous=this.element.val();},blur:function blur(event){if(this.cancelBlur){delete this.cancelBlur;return;}this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",event);}},mousewheel:function mousewheel(event,delta){if(!delta){return;}if(!this.spinning&&!this._start(event)){return false;}this._spin((delta>0?1:-1)*this.options.step,event);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(event);}},100);event.preventDefault();},"mousedown .ui-spinner-button":function mousedownUiSpinnerButton(event){var previous;// We never want the buttons to have focus; whenever the user is
// interacting with the spinner, the focus should be on the input.
// If the input is focused then this.previous is properly set from
// when the input first received focus. If the input is not focused
// then we need to set this.previous based on the value before spinning.
previous=this.element[0]===$.ui.safeActiveElement(this.document[0])?this.previous:this.element.val();function checkFocus(){var isActive=this.element[0]===$.ui.safeActiveElement(this.document[0]);if(!isActive){this.element.trigger("focus");this.previous=previous;// support: IE
// IE sets focus asynchronously, so we need to check if focus
// moved off of the input because the user clicked on the button.
this._delay(function(){this.previous=previous;});}}// Ensure focus is on (or stays on) the text field
event.preventDefault();checkFocus.call(this);// Support: IE
// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
// and check (again) if focus moved off of the input.
this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;checkFocus.call(this);});if(this._start(event)===false){return;}this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function mouseenterUiSpinnerButton(event){// button will add ui-state-active if mouse was down while mouseleave and kept down
if(!$(event.currentTarget).hasClass("ui-state-active")){return;}if(this._start(event)===false){return false;}this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},// TODO: do we really want to consider this a stop?
// shouldn't we just stop the repeater and wait until mouseup before
// we trigger the stop event?
"mouseleave .ui-spinner-button":"_stop"},// Support mobile enhanced option and make backcompat more sane
_enhance:function _enhance(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent()// Add buttons
.append("<a></a><a></a>");},_draw:function _draw(){this._enhance();this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content");this._addClass("ui-spinner-input");this.element.attr("role","spinbutton");// Button bindings
this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",true).button({classes:{"ui-button":""}});// TODO: Right now button does not support classes this is already updated in button PR
this._removeClass(this.buttons,"ui-corner-all");this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up");this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down");this.buttons.first().button({"icon":this.options.icons.up,"showLabel":false});this.buttons.last().button({"icon":this.options.icons.down,"showLabel":false});// IE 6 doesn't understand height: 50% for the buttons
// unless the wrapper has an explicit height
if(this.buttons.height()>Math.ceil(this.uiSpinner.height()*0.5)&&this.uiSpinner.height()>0){this.uiSpinner.height(this.uiSpinner.height());}},_keydown:function _keydown(event){var options=this.options,keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.UP:this._repeat(null,1,event);return true;case keyCode.DOWN:this._repeat(null,-1,event);return true;case keyCode.PAGE_UP:this._repeat(null,options.page,event);return true;case keyCode.PAGE_DOWN:this._repeat(null,-options.page,event);return true;}return false;},_start:function _start(event){if(!this.spinning&&this._trigger("start",event)===false){return false;}if(!this.counter){this.counter=1;}this.spinning=true;return true;},_repeat:function _repeat(i,steps,event){i=i||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,steps,event);},i);this._spin(steps*this.options.step,event);},_spin:function _spin(step,event){var value=this.value()||0;if(!this.counter){this.counter=1;}value=this._adjustValue(value+step*this._increment(this.counter));if(!this.spinning||this._trigger("spin",event,{value:value})!==false){this._value(value);this.counter++;}},_increment:function _increment(i){var incremental=this.options.incremental;if(incremental){return $.isFunction(incremental)?incremental(i):Math.floor(i*i*i/50000-i*i/500+17*i/200+1);}return 1;},_precision:function _precision(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min));}return precision;},_precisionOf:function _precisionOf(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1;},_adjustValue:function _adjustValue(value){var base,aboveMin,options=this.options;// Make sure we're at a valid step
// - find out where we are relative to the base (min or 0)
base=options.min!==null?options.min:0;aboveMin=value-base;// - round to the nearest step
aboveMin=Math.round(aboveMin/options.step)*options.step;// - rounding is based on 0, so adjust back to our base
value=base+aboveMin;// Fix precision from bad JS floating point math
value=parseFloat(value.toFixed(this._precision()));// Clamp the value
if(options.max!==null&&value>options.max){return options.max;}if(options.min!==null&&value<options.min){return options.min;}return value;},_stop:function _stop(event){if(!this.spinning){return;}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",event);},_setOption:function _setOption(key,value){var prevValue,first,last;if(key==="culture"||key==="numberFormat"){prevValue=this._parse(this.element.val());this.options[key]=value;this.element.val(this._format(prevValue));return;}if(key==="max"||key==="min"||key==="step"){if(typeof value==="string"){value=this._parse(value);}}if(key==="icons"){first=this.buttons.first().find(".ui-icon");this._removeClass(first,null,this.options.icons.up);this._addClass(first,null,value.up);last=this.buttons.last().find(".ui-icon");this._removeClass(last,null,this.options.icons.down);this._addClass(last,null,value.down);}this._super(key,value);},_setOptionDisabled:function _setOptionDisabled(value){this._super(value);this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!value);this.element.prop("disabled",!!value);this.buttons.button(value?"disable":"enable");},_setOptions:spinnerModifer(function(options){this._super(options);}),_parse:function _parse(val){if(typeof val==="string"&&val!==""){val=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(val,10,this.options.culture):+val;}return val===""||isNaN(val)?null:val;},_format:function _format(value){if(value===""){return"";}return window.Globalize&&this.options.numberFormat?Globalize.format(value,this.options.numberFormat,this.options.culture):value;},_refresh:function _refresh(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,// TODO: what should we do with values that can't be parsed?
"aria-valuenow":this._parse(this.element.val())});},isValid:function isValid(){var value=this.value();// Null is invalid
if(value===null){return false;}// If value gets adjusted, it's invalid
return value===this._adjustValue(value);},// Update the value without triggering change
_value:function _value(value,allowAny){var parsed;if(value!==""){parsed=this._parse(value);if(parsed!==null){if(!allowAny){parsed=this._adjustValue(parsed);}value=this._format(parsed);}}this.element.val(value);this._refresh();},_destroy:function _destroy(){this.element.prop("disabled",false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");this.uiSpinner.replaceWith(this.element);},stepUp:spinnerModifer(function(steps){this._stepUp(steps);}),_stepUp:function _stepUp(steps){if(this._start()){this._spin((steps||1)*this.options.step);this._stop();}},stepDown:spinnerModifer(function(steps){this._stepDown(steps);}),_stepDown:function _stepDown(steps){if(this._start()){this._spin((steps||1)*-this.options.step);this._stop();}},pageUp:spinnerModifer(function(pages){this._stepUp((pages||1)*this.options.page);}),pageDown:spinnerModifer(function(pages){this._stepDown((pages||1)*this.options.page);}),value:function value(newVal){if(!arguments.length){return this._parse(this.element.val());}spinnerModifer(this._value).call(this,newVal);},widget:function widget(){return this.uiSpinner;}});// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
if($.uiBackCompat!==false){// Backcompat for spinner html extension points
$.widget("ui.spinner",$.ui.spinner,{_enhance:function _enhance(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent()// Add buttons
.append(this._buttonHtml());},_uiSpinnerHtml:function _uiSpinnerHtml(){return"<span>";},_buttonHtml:function _buttonHtml(){return"<a></a><a></a>";}});}var widgetsSpinner=$.ui.spinner;/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css
$.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,// Callbacks
activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var rhash=/#.*$/;return function(anchor){var anchorUrl,locationUrl;anchorUrl=anchor.href.replace(rhash,"");locationUrl=location.href.replace(rhash,"");// Decoding may throw an error if the URL isn't UTF-8 (#9518)
try{anchorUrl=decodeURIComponent(anchorUrl);}catch(error){}try{locationUrl=decodeURIComponent(locationUrl);}catch(error){}return anchor.hash.length>1&&anchorUrl===locationUrl;};}(),_create:function _create(){var that=this,options=this.options;this.running=false;this._addClass("ui-tabs","ui-widget ui-widget-content");this._toggleClass("ui-tabs-collapsible",null,options.collapsible);this._processTabs();options.active=this._initialActive();// Take disabling tabs via class attribute from HTML
// into account and update option properly.
if($.isArray(options.disabled)){options.disabled=$.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(li){return that.tabs.index(li);}))).sort();}// Check for length avoids error when initializing empty list
if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(options.active);}else{this.active=$();}this._refresh();if(this.active.length){this.load(options.active);}},_initialActive:function _initialActive(){var active=this.options.active,collapsible=this.options.collapsible,locationHash=location.hash.substring(1);if(active===null){// check the fragment identifier in the URL
if(locationHash){this.tabs.each(function(i,tab){if($(tab).attr("aria-controls")===locationHash){active=i;return false;}});}// Check for a tab marked active via a class
if(active===null){active=this.tabs.index(this.tabs.filter(".ui-tabs-active"));}// No active tab, set to false
if(active===null||active===-1){active=this.tabs.length?0:false;}}// Handle numbers: negative, out of range
if(active!==false){active=this.tabs.index(this.tabs.eq(active));if(active===-1){active=collapsible?false:0;}}// Don't allow collapsible: false and active: false
if(!collapsible&&active===false&&this.anchors.length){active=0;}return active;},_getCreateEventData:function _getCreateEventData(){return{tab:this.active,panel:!this.active.length?$():this._getPanelForTab(this.active)};},_tabKeydown:function _tabKeydown(event){var focusedTab=$($.ui.safeActiveElement(this.document[0])).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=true;if(this._handlePageNav(event)){return;}switch(event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=false;selectedIndex--;break;case $.ui.keyCode.END:selectedIndex=this.anchors.length-1;break;case $.ui.keyCode.HOME:selectedIndex=0;break;case $.ui.keyCode.SPACE:// Activate only, no collapsing
event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex);return;case $.ui.keyCode.ENTER:// Toggle (cancel delayed activation, allow collapsing)
event.preventDefault();clearTimeout(this.activating);// Determine if we should collapse or activate
this._activate(selectedIndex===this.options.active?false:selectedIndex);return;default:return;}// Focus the appropriate tab, based on which key was pressed
event.preventDefault();clearTimeout(this.activating);selectedIndex=this._focusNextTab(selectedIndex,goingForward);// Navigating with control/command key will prevent automatic activation
if(!event.ctrlKey&&!event.metaKey){// Update aria-selected immediately so that AT think the tab is already selected.
// Otherwise AT may confuse the user by stating that they need to activate the tab,
// but the tab will already be activated by the time the announcement finishes.
focusedTab.attr("aria-selected","false");this.tabs.eq(selectedIndex).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",selectedIndex);},this.delay);}},_panelKeydown:function _panelKeydown(event){if(this._handlePageNav(event)){return;}// Ctrl+up moves focus to the current tab
if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){event.preventDefault();this.active.trigger("focus");}},// Alt+page up/down moves focus to the previous/next tab (and activates)
_handlePageNav:function _handlePageNav(event){if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true;}if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true;}},_findNextTab:function _findNextTab(index,goingForward){var lastTabIndex=this.tabs.length-1;function constrain(){if(index>lastTabIndex){index=0;}if(index<0){index=lastTabIndex;}return index;}while($.inArray(constrain(),this.options.disabled)!==-1){index=goingForward?index+1:index-1;}return index;},_focusNextTab:function _focusNextTab(index,goingForward){index=this._findNextTab(index,goingForward);this.tabs.eq(index).trigger("focus");return index;},_setOption:function _setOption(key,value){if(key==="active"){// _activate() will handle invalid values and update this.options
this._activate(value);return;}this._super(key,value);if(key==="collapsible"){this._toggleClass("ui-tabs-collapsible",null,value);// Setting collapsible: false while collapsed; open first panel
if(!value&&this.options.active===false){this._activate(0);}}if(key==="event"){this._setupEvents(value);}if(key==="heightStyle"){this._setupHeightStyle(value);}},_sanitizeSelector:function _sanitizeSelector(hash){return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):"";},refresh:function refresh(){var options=this.options,lis=this.tablist.children(":has(a[href])");// Get disabled tabs from class attribute from HTML
// this will get converted to a boolean if needed in _refresh()
options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab);});this._processTabs();// Was collapsed or no tabs
if(options.active===false||!this.anchors.length){options.active=false;this.active=$();// was active, but active tab is gone
}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){// all remaining tabs are disabled
if(this.tabs.length===options.disabled.length){options.active=false;this.active=$();// activate previous tab
}else{this._activate(this._findNextTab(Math.max(0,options.active-1),false));}// was active, active tab still exists
}else{// make sure active index is correct
options.active=this.tabs.index(this.active);}this._refresh();},_refresh:function _refresh(){this._setOptionDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});// Make sure one tab is in the tab order
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0);}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});this._addClass(this.active,"ui-tabs-active","ui-state-active");this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"});}},_processTabs:function _processTabs(){var that=this,prevTabs=this.tabs,prevAnchors=this.anchors,prevPanels=this.panels;this.tablist=this._getList().attr("role","tablist");this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header");// Prevent users from focusing disabled tabs via click
this.tablist.on("mousedown"+this.eventNamespace,"> li",function(event){if($(this).is(".ui-state-disabled")){event.preventDefault();}})// Support: IE <9
// Preventing the default action in mousedown doesn't prevent IE
// from focusing the element, so if the anchor gets focused, blur.
// We don't have to worry about focusing the previously focused
// element since clicking on a non-focusable element should focus
// the body anyway.
.on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur();}});this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1});this._addClass(this.tabs,"ui-tabs-tab","ui-state-default");this.anchors=this.tabs.map(function(){return $("a",this)[0];}).attr({role:"presentation",tabIndex:-1});this._addClass(this.anchors,"ui-tabs-anchor");this.panels=$();this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");// Inline tab
if(that._isLocal(anchor)){selector=anchor.hash;panelId=selector.substring(1);panel=that.element.find(that._sanitizeSelector(selector));// remote tab
}else{// If the tab doesn't already have aria-controls,
// generate an id by using a throw-away element
panelId=tab.attr("aria-controls")||$({}).uniqueId()[0].id;selector="#"+panelId;panel=that.element.find(selector);if(!panel.length){panel=that._createPanel(panelId);panel.insertAfter(that.panels[i-1]||that.tablist);}panel.attr("aria-live","polite");}if(panel.length){that.panels=that.panels.add(panel);}if(originalAriaControls){tab.data("ui-tabs-aria-controls",originalAriaControls);}tab.attr({"aria-controls":panelId,"aria-labelledby":anchorId});panel.attr("aria-labelledby",anchorId);});this.panels.attr("role","tabpanel");this._addClass(this.panels,"ui-tabs-panel","ui-widget-content");// Avoid memory leaks (#10056)
if(prevTabs){this._off(prevTabs.not(this.tabs));this._off(prevAnchors.not(this.anchors));this._off(prevPanels.not(this.panels));}},// Allow overriding how to find the list for rare usage scenarios (#7715)
_getList:function _getList(){return this.tablist||this.element.find("ol, ul").eq(0);},_createPanel:function _createPanel(id){return $("<div>").attr("id",id).data("ui-tabs-destroy",true);},_setOptionDisabled:function _setOptionDisabled(disabled){var currentItem,li,i;if($.isArray(disabled)){if(!disabled.length){disabled=false;}else if(disabled.length===this.anchors.length){disabled=true;}}// Disable tabs
for(i=0;li=this.tabs[i];i++){currentItem=$(li);if(disabled===true||$.inArray(i,disabled)!==-1){currentItem.attr("aria-disabled","true");this._addClass(currentItem,null,"ui-state-disabled");}else{currentItem.removeAttr("aria-disabled");this._removeClass(currentItem,null,"ui-state-disabled");}}this.options.disabled=disabled;this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,disabled===true);},_setupEvents:function _setupEvents(event){var events={};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}this._off(this.anchors.add(this.tabs).add(this.panels));// Always prevent the default action, even when disabled
this._on(true,this.anchors,{click:function click(event){event.preventDefault();}});this._on(this.anchors,events);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs);},_setupHeightStyle:function _setupHeightStyle(heightStyle){var maxHeight,parent=this.element.parent();if(heightStyle==="fill"){maxHeight=parent.height();maxHeight-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}maxHeight-=elem.outerHeight(true);});this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(true);});this.panels.each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height());}).height(maxHeight);}},_eventHandler:function _eventHandler(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=!active.length?$():this._getPanelForTab(active),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault();if(tab.hasClass("ui-state-disabled")||// tab is already loading
tab.hasClass("ui-tabs-loading")||// can't switch durning an animation
this.running||// click on active header, but not collapsible
clickedIsActive&&!options.collapsible||// allow canceling activation
this._trigger("beforeActivate",event,eventData)===false){return;}options.active=collapsing?false:this.tabs.index(tab);this.active=clickedIsActive?$():tab;if(this.xhr){this.xhr.abort();}if(!toHide.length&&!toShow.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.");}if(toShow.length){this.load(this.tabs.index(tab),event);}this._toggle(event,eventData);},// Handles show/hide for selecting tabs
_toggle:function _toggle(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=true;function complete(){that.running=false;that._trigger("activate",event,eventData);}function show(){that._addClass(eventData.newTab.closest("li"),"ui-tabs-active","ui-state-active");if(toShow.length&&that.options.show){that._show(toShow,that.options.show,complete);}else{toShow.show();complete();}}// Start out by hiding, then showing, then completing
if(toHide.length&&this.options.hide){this._hide(toHide,this.options.hide,function(){that._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");show();});}else{this._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");toHide.hide();show();}toHide.attr("aria-hidden","true");eventData.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});// If we're switching tabs, remove the old tab from the tab order.
// If we're opening from collapsed state, remove the previous tab from the tab order.
// If we're collapsing, then keep the collapsing tab in the tab order.
if(toShow.length&&toHide.length){eventData.oldTab.attr("tabIndex",-1);}else if(toShow.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0;}).attr("tabIndex",-1);}toShow.attr("aria-hidden","false");eventData.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});},_activate:function _activate(index){var anchor,active=this._findActive(index);// Trying to activate the already active panel
if(active[0]===this.active[0]){return;}// Trying to collapse, simulate a click on the current active header
if(!active.length){active=this.active;}anchor=active.find(".ui-tabs-anchor")[0];this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop});},_findActive:function _findActive(index){return index===false?$():this.tabs.eq(index);},_getIndex:function _getIndex(index){// meta-function to give users option to provide a href string instead of a numerical index.
if(typeof index==="string"){index=this.anchors.index(this.anchors.filter("[href$='"+$.ui.escapeSelector(index)+"']"));}return index;},_destroy:function _destroy(){if(this.xhr){this.xhr.abort();}this.tablist.removeAttr("role").off(this.eventNamespace);this.anchors.removeAttr("role tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove();}else{$(this).removeAttr("role tabIndex "+"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");}});this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");if(prev){li.attr("aria-controls",prev).removeData("ui-tabs-aria-controls");}else{li.removeAttr("aria-controls");}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","");}},enable:function enable(index){var disabled=this.options.disabled;if(disabled===false){return;}if(index===undefined){disabled=false;}else{index=this._getIndex(index);if($.isArray(disabled)){disabled=$.map(disabled,function(num){return num!==index?num:null;});}else{disabled=$.map(this.tabs,function(li,num){return num!==index?num:null;});}}this._setOptionDisabled(disabled);},disable:function disable(index){var disabled=this.options.disabled;if(disabled===true){return;}if(index===undefined){disabled=true;}else{index=this._getIndex(index);if($.inArray(index,disabled)!==-1){return;}if($.isArray(disabled)){disabled=$.merge([index],disabled).sort();}else{disabled=[index];}}this._setOptionDisabled(disabled);},load:function load(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel},complete=function complete(jqXHR,status){if(status==="abort"){that.panels.stop(false,true);}that._removeClass(tab,"ui-tabs-loading");panel.removeAttr("aria-busy");if(jqXHR===that.xhr){delete that.xhr;}};// Not remote
if(this._isLocal(anchor[0])){return;}this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));// Support: jQuery <1.8
// jQuery <1.8 returns false if the request is canceled in beforeSend,
// but as of 1.8, $.ajax() always returns a jqXHR object.
if(this.xhr&&this.xhr.statusText!=="canceled"){this._addClass(tab,"ui-tabs-loading");panel.attr("aria-busy","true");this.xhr.done(function(response,status,jqXHR){// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){panel.html(response);that._trigger("load",event,eventData);complete(jqXHR,status);},1);}).fail(function(jqXHR,status){// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){complete(jqXHR,status);},1);});}},_ajaxSettings:function _ajaxSettings(anchor,event,eventData){var that=this;return{// Support: IE <11 only
// Strip any hash that exists to prevent errors with the Ajax request
url:anchor.attr("href").replace(/#.*$/,""),beforeSend:function beforeSend(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData));}};},_getPanelForTab:function _getPanelForTab(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id));}});// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
if($.uiBackCompat!==false){// Backcompat for ui-tab class (now ui-tabs-tab)
$.widget("ui.tabs",$.ui.tabs,{_processTabs:function _processTabs(){this._superApply(arguments);this._addClass(this.tabs,"ui-tab");}});}var widgetsTabs=$.ui.tabs;/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ //>>label: Tooltip
//>>group: Widgets
//>>description: Shows additional information for any element on hover or focus.
//>>docs: http://api.jqueryui.com/tooltip/
//>>demos: http://jqueryui.com/tooltip/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tooltip.css
//>>css.theme: ../../themes/base/theme.css
$.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function content(){// support: IE<9, Opera in jQuery <1.7
// .text() can't accept undefined, so coerce to a string
var title=$(this).attr("title")||"";// Escape title, since we're going from an attribute to raw HTML
return $("<a>").text(title).html();},hide:true,// Disabled elements have inconsistent behavior across browsers (#8661)
items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,track:false,// Callbacks
close:null,open:null},_addDescribedBy:function _addDescribedBy(elem,id){var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);describedby.push(id);elem.data("ui-tooltip-id",id).attr("aria-describedby",$.trim(describedby.join(" ")));},_removeDescribedBy:function _removeDescribedBy(elem){var id=elem.data("ui-tooltip-id"),describedby=(elem.attr("aria-describedby")||"").split(/\s+/),index=$.inArray(id,describedby);if(index!==-1){describedby.splice(index,1);}elem.removeData("ui-tooltip-id");describedby=$.trim(describedby.join(" "));if(describedby){elem.attr("aria-describedby",describedby);}else{elem.removeAttr("aria-describedby");}},_create:function _create(){this._on({mouseover:"open",focusin:"open"});// IDs of generated tooltips, needed for destroy
this.tooltips={};// IDs of parent tooltips where we removed the title attribute
this.parents={};// Append the aria-live region so tooltips announce correctly
this.liveRegion=$("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");this.disabledTitles=$([]);},_setOption:function _setOption(key,value){var that=this;this._super(key,value);if(key==="content"){$.each(this.tooltips,function(id,tooltipData){that._updateContent(tooltipData.element);});}},_setOptionDisabled:function _setOptionDisabled(value){this[value?"_disable":"_enable"]();},_disable:function _disable(){var that=this;// Close open tooltips
$.each(this.tooltips,function(id,tooltipData){var event=$.Event("blur");event.target=event.currentTarget=tooltipData.element[0];that.close(event,true);});// Remove title attributes to prevent native tooltips
this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var element=$(this);if(element.is("[title]")){return element.data("ui-tooltip-title",element.attr("title")).removeAttr("title");}}));},_enable:function _enable(){// restore title attributes
this.disabledTitles.each(function(){var element=$(this);if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));}});this.disabledTitles=$([]);},open:function open(event){var that=this,target=$(event?event.target:this.element)// we need closest here due to mouseover bubbling,
// but always pointing at the same event target
.closest(this.options.items);// No element to show a tooltip for or the tooltip is already open
if(!target.length||target.data("ui-tooltip-id")){return;}if(target.attr("title")){target.data("ui-tooltip-title",target.attr("title"));}target.data("ui-tooltip-open",true);// Kill parent tooltips, custom or native, for hover
if(event&&event.type==="mouseover"){target.parents().each(function(){var parent=$(this),blurEvent;if(parent.data("ui-tooltip-open")){blurEvent=$.Event("blur");blurEvent.target=blurEvent.currentTarget=this;that.close(blurEvent,true);}if(parent.attr("title")){parent.uniqueId();that.parents[this.id]={element:this,title:parent.attr("title")};parent.attr("title","");}});}this._registerCloseHandlers(event,target);this._updateContent(target,event);},_updateContent:function _updateContent(target,event){var content,contentOption=this.options.content,that=this,eventType=event?event.type:null;if(typeof contentOption==="string"||contentOption.nodeType||contentOption.jquery){return this._open(event,target,contentOption);}content=contentOption.call(target[0],function(response){// IE may instantly serve a cached response for ajax requests
// delay this call to _open so the other call to _open runs first
that._delay(function(){// Ignore async response if tooltip was closed already
if(!target.data("ui-tooltip-open")){return;}// JQuery creates a special event for focusin when it doesn't
// exist natively. To improve performance, the native event
// object is reused and the type is changed. Therefore, we can't
// rely on the type being correct after the event finished
// bubbling, so we set it back to the previous value. (#8740)
if(event){event.type=eventType;}this._open(event,target,response);});});if(content){this._open(event,target,content);}},_open:function _open(event,target,content){var tooltipData,tooltip,delayedShow,a11yContent,positionOption=$.extend({},this.options.position);if(!content){return;}// Content can be updated multiple times. If the tooltip already
// exists, then just update the content and bail.
tooltipData=this._find(target);if(tooltipData){tooltipData.tooltip.find(".ui-tooltip-content").html(content);return;}// If we have a title, clear it to prevent the native tooltip
// we have to check first to avoid defining a title if none exists
// (we don't want to cause an element to start matching [title])
//
// We use removeAttr only for key events, to allow IE to export the correct
// accessible attributes. For mouse events, set to empty string to avoid
// native tooltip showing up (happens only when removing inside mouseover).
if(target.is("[title]")){if(event&&event.type==="mouseover"){target.attr("title","");}else{target.removeAttr("title");}}tooltipData=this._tooltip(target);tooltip=tooltipData.tooltip;this._addDescribedBy(target,tooltip.attr("id"));tooltip.find(".ui-tooltip-content").html(content);// Support: Voiceover on OS X, JAWS on IE <= 9
// JAWS announces deletions even when aria-relevant="additions"
// Voiceover will sometimes re-read the entire log region's contents from the beginning
this.liveRegion.children().hide();a11yContent=$("<div>").html(tooltip.find(".ui-tooltip-content").html());a11yContent.removeAttr("name").find("[name]").removeAttr("name");a11yContent.removeAttr("id").find("[id]").removeAttr("id");a11yContent.appendTo(this.liveRegion);function position(event){positionOption.of=event;if(tooltip.is(":hidden")){return;}tooltip.position(positionOption);}if(this.options.track&&event&&/^mouse/.test(event.type)){this._on(this.document,{mousemove:position});// trigger once to override element-relative positioning
position(event);}else{tooltip.position($.extend({of:target},this.options.position));}tooltip.hide();this._show(tooltip,this.options.show);// Handle tracking tooltips that are shown with a delay (#8644). As soon
// as the tooltip is visible, position the tooltip using the most recent
// event.
// Adds the check to add the timers only when both delay and track options are set (#14682)
if(this.options.track&&this.options.show&&this.options.show.delay){delayedShow=this.delayedShow=setInterval(function(){if(tooltip.is(":visible")){position(positionOption.of);clearInterval(delayedShow);}},$.fx.interval);}this._trigger("open",event,{tooltip:tooltip});},_registerCloseHandlers:function _registerCloseHandlers(event,target){var events={keyup:function keyup(event){if(event.keyCode===$.ui.keyCode.ESCAPE){var fakeEvent=$.Event(event);fakeEvent.currentTarget=target[0];this.close(fakeEvent,true);}}};// Only bind remove handler for delegated targets. Non-delegated
// tooltips will handle this in destroy.
if(target[0]!==this.element[0]){events.remove=function(){this._removeTooltip(this._find(target).tooltip);};}if(!event||event.type==="mouseover"){events.mouseleave="close";}if(!event||event.type==="focusin"){events.focusout="close";}this._on(true,target,events);},close:function close(event){var tooltip,that=this,target=$(event?event.currentTarget:this.element),tooltipData=this._find(target);// The tooltip may already be closed
if(!tooltipData){// We set ui-tooltip-open immediately upon open (in open()), but only set the
// additional data once there's actually content to show (in _open()). So even if the
// tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
// the period between open() and _open().
target.removeData("ui-tooltip-open");return;}tooltip=tooltipData.tooltip;// Disabling closes the tooltip, so we need to track when we're closing
// to avoid an infinite loop in case the tooltip becomes disabled on close
if(tooltipData.closing){return;}// Clear the interval for delayed tracking tooltips
clearInterval(this.delayedShow);// Only set title if we had one before (see comment in _open())
// If the title attribute has changed since open(), don't restore
if(target.data("ui-tooltip-title")&&!target.attr("title")){target.attr("title",target.data("ui-tooltip-title"));}this._removeDescribedBy(target);tooltipData.hiding=true;tooltip.stop(true);this._hide(tooltip,this.options.hide,function(){that._removeTooltip($(this));});target.removeData("ui-tooltip-open");this._off(target,"mouseleave focusout keyup");// Remove 'remove' binding only on delegated targets
if(target[0]!==this.element[0]){this._off(target,"remove");}this._off(this.document,"mousemove");if(event&&event.type==="mouseleave"){$.each(this.parents,function(id,parent){$(parent.element).attr("title",parent.title);delete that.parents[id];});}tooltipData.closing=true;this._trigger("close",event,{tooltip:tooltip});if(!tooltipData.hiding){tooltipData.closing=false;}},_tooltip:function _tooltip(element){var tooltip=$("<div>").attr("role","tooltip"),content=$("<div>").appendTo(tooltip),id=tooltip.uniqueId().attr("id");this._addClass(content,"ui-tooltip-content");this._addClass(tooltip,"ui-tooltip","ui-widget ui-widget-content");tooltip.appendTo(this._appendTo(element));return this.tooltips[id]={element:element,tooltip:tooltip};},_find:function _find(target){var id=target.data("ui-tooltip-id");return id?this.tooltips[id]:null;},_removeTooltip:function _removeTooltip(tooltip){tooltip.remove();delete this.tooltips[tooltip.attr("id")];},_appendTo:function _appendTo(target){var element=target.closest(".ui-front, dialog");if(!element.length){element=this.document[0].body;}return element;},_destroy:function _destroy(){var that=this;// Close open tooltips
$.each(this.tooltips,function(id,tooltipData){// Delegate to close method to handle common cleanup
var event=$.Event("blur"),element=tooltipData.element;event.target=event.currentTarget=element[0];that.close(event,true);// Remove immediately; destroying an open tooltip doesn't use the
// hide animation
$("#"+id).remove();// Restore the title
if(element.data("ui-tooltip-title")){// If the title attribute has changed since open(), don't restore
if(!element.attr("title")){element.attr("title",element.data("ui-tooltip-title"));}element.removeData("ui-tooltip-title");}});this.liveRegion.remove();}});// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
if($.uiBackCompat!==false){// Backcompat for tooltipClass option
$.widget("ui.tooltip",$.ui.tooltip,{options:{tooltipClass:null},_tooltip:function _tooltip(){var tooltipData=this._superApply(arguments);if(this.options.tooltipClass){tooltipData.tooltip.addClass(this.options.tooltipClass);}return tooltipData;}});}var widgetsTooltip=$.ui.tooltip;});/*
* FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
* @version 3.1.6
* @link http://fooplugins.com
* @copyright Steven Usher & Brad Vincent 2015
* @license Released under the GPLv3 license.
*/(function($,F){// add in console we use in case it's missing
window.console=window.console||{log:function log(){},error:function error(){}};/**
	 * The jQuery plugin initializer.
	 * @function jQuery.fn.footable
	 * @param {(object|FooTable.Defaults)} [options] - The options to initialize the plugin with.
	 * @param {function} [ready] - A callback function to execute for each initialized plugin.
	 * @returns {jQuery}
	 */$.fn.footable=function(options,ready){options=options||{};// make sure we only work with tables
return this.filter('table').each(function(i,tbl){F.init(tbl,options,ready);});};var debug_defaults={events:[]};F.__debug__=JSON.parse(localStorage.getItem('footable_debug'))||false;F.__debug_options__=JSON.parse(localStorage.getItem('footable_debug_options'))||debug_defaults;/**
	 * Gets or sets the internal debug variable which enables some additional logging to the console.
	 * When enabled this value is stored in the localStorage so it can persist across page reloads.
	 * @param {boolean} value - Whether or not to enable additional logging.
	 * @param {object} [options] - Any debug specific options.
	 * @returns {(boolean|undefined)}
	 */F.debug=function(value,options){if(!F.is["boolean"](value))return F.__debug__;F.__debug__=value;if(F.__debug__){localStorage.setItem('footable_debug',JSON.stringify(F.__debug__));F.__debug_options__=$.extend(true,{},debug_defaults,options||{});if(F.is.hash(options)){localStorage.setItem('footable_debug_options',JSON.stringify(F.__debug_options__));}}else{localStorage.removeItem('footable_debug');localStorage.removeItem('footable_debug_options');}};/**
	 * Gets the FooTable instance of the supplied table if one exists.
	 * @param {(jQuery|jQuery.selector|HTMLTableElement)} table - The jQuery table object, selector or the HTMLTableElement to retrieve FooTable from.
	 * @returns {(FooTable.Table|undefined)}
	 */F.get=function(table){return $(table).first().data('__FooTable__');};/**
	 * Initializes a new instance of FooTable on the supplied table.
	 * @param {(jQuery|jQuery.selector|HTMLTableElement)} table - The jQuery table object, selector or the HTMLTableElement to initialize FooTable on.
	 * @param {object} options - The options to initialize FooTable with.
	 * @param {function} [ready] - A callback function to execute once the plugin is initialized.
	 * @returns {FooTable.Table}
	 */F.init=function(table,options,ready){var ft=F.get(table);if(ft instanceof F.Table)ft.destroy();return new F.Table(table,options,ready);};/**
	 * Gets the FooTable.Row instance for the supplied element.
	 * @param {(jQuery|jQuery.selector|HTMLTableElement)} element - A jQuery object, selector or the HTMLElement of an element to retrieve the FooTable.Row for.
	 * @returns {FooTable.Row}
	 */F.getRow=function(element){// to get the FooTable.Row object simply walk up the DOM, find the TR and grab the __FooTableRow__ data value
var $row=$(element).closest('tr');// if this is a detail row get the previous row in the table to get the main TR element
if($row.hasClass('footable-detail-row')){$row=$row.prev();}// grab the row object
return $row.data('__FooTableRow__');};// The below are external type definitions mainly used as pointers to jQuery docs for important information
/**
	 * jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API
	 * that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
	 * @name jQuery
	 * @constructor
	 * @returns {jQuery}
	 * @see {@link http://api.jquery.com/}
	 */ /**
	 * This object provides a subset of the methods of the Deferred object (then, done, fail, always, pipe, and state) to prevent users from changing the state of the Deferred.
	 * @typedef {object} jQuery.Promise
	 * @see {@link http://api.jquery.com/Types/#Promise}
	 */ /**
	 * As of jQuery 1.5, the Deferred object provides a way to register multiple callbacks into self-managed callback queues, invoke callback queues as appropriate,
	 * and relay the success or failure state of any synchronous or asynchronous function.
	 * @typedef {object} jQuery.Deferred
	 * @see {@link http://api.jquery.com/Types/#Deferred}
	 */ /**
	 * jQuery's event system normalizes the event object according to W3C standards. The event object is guaranteed to be passed to the event handler. Most properties from
	 * the original event are copied over and normalized to the new event object.
	 * @typedef {object} jQuery.Event
	 * @see {@link http://api.jquery.com/category/events/event-object/}
	 */ /**
	 * Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.
	 * @memberof jQuery
	 * @function when
	 * @param {...jQuery.Deferred} deferreds - Any number of deferred objects to wait for.
	 * @returns {jQuery.Promise}
	 * @see {@link http://api.jquery.com/jQuery.when/}
	 */ /**
	 * The jQuery.fn namespace used to register plugins with jQuery.
	 * @memberof jQuery
	 * @namespace fn
	 * @see {@link http://learn.jquery.com/plugins/basic-plugin-creation/}
	 */})(jQuery,/**
	 * The core FooTable namespace containing all the plugin code.
	 * @namespace
	 */FooTable=window.FooTable||{});(function(F){var returnTrue=function returnTrue(){return true;};/**
	 * This namespace contains commonly used array utility methods.
	 * @namespace {object} FooTable.arr
	 */F.arr={};/**
	 * Iterates over each item in the supplied array and performs the supplied function passing in the current item as the first argument.
	 * @memberof FooTable.arr
	 * @function each
	 * @param {Array} array - The array to iterate
	 * @param {function} func - The function to execute for each item. The first argument supplied to this function is the current item and the second is the current index.
	 */F.arr.each=function(array,func){if(!F.is.array(array)||!F.is.fn(func))return;for(var i=0,len=array.length;i<len;i++){if(func(array[i],i)===false)break;}};/**
	 * Get all items in the supplied array that optionally matches the supplied where function. If no items are found an empty array is returned.
	 * @memberof FooTable.arr
	 * @function get
	 * @param {Array} array - The array to get items from.
	 * @param {function} where - This function must return a boolean value, true includes the item in the result array.
	 * @returns {Array}
	 */F.arr.get=function(array,where){var result=[];if(!F.is.array(array))return result;if(!F.is.fn(where))return array;for(var i=0,len=array.length;i<len;i++){if(where(array[i],i))result.push(array[i]);}return result;};/**
	 * Get a boolean value indicating if any item exists in the supplied array that optionally matches the supplied where function.
	 * @memberof FooTable.arr
	 * @function any
	 * @param {Array} array - The array to check.
	 * @param {function} [where] - [Optional] This function must return a boolean value, true indicates that the current item is a valid match.
	 * @returns {boolean}
	 */F.arr.any=function(array,where){if(!F.is.array(array))return false;where=F.is.fn(where)?where:returnTrue;for(var i=0,len=array.length;i<len;i++){if(where(array[i],i))return true;}return false;};/**
	 * Checks if the supplied value exists in the array.
	 * @memberof FooTable.arr
	 * @function contains
	 * @param {Array} array - The array to check.
	 * @param {*} value - The value to check for.
	 * @returns {boolean}
	 */F.arr.contains=function(array,value){if(!F.is.array(array)||F.is.undef(value))return false;for(var i=0,len=array.length;i<len;i++){if(array[i]==value)return true;}return false;};/**
	 * Get the first item in the supplied array that optionally matches the supplied where function. If no item is found null is returned.
	 * @memberof FooTable.arr
	 * @function first
	 * @param {Array} array - The array to get the item from.
	 * @param {function} [where] - [Optional] This function must return a boolean value, true indicates that the current item can be returned.
	 * @returns {(*|null)}
	 */F.arr.first=function(array,where){if(!F.is.array(array))return null;where=F.is.fn(where)?where:returnTrue;for(var i=0,len=array.length;i<len;i++){if(where(array[i],i))return array[i];}return null;};/**
	 * Creates a new array from the results of the supplied getter function. If no items are found an empty array is returned, to exclude an item from the results return null.
	 * @memberof FooTable.arr
	 * @function map
	 * @param {Array} array - The array to iterate.
	 * @param {function} getter - This function must return either a new value or null.
	 * The first argument is the result being returned at this point in the iteration. The second argument is the current item being iterated.
	 * @returns {(*|null)}
	 */F.arr.map=function(array,getter){var result=[],returned=null;if(!F.is.array(array)||!F.is.fn(getter))return result;for(var i=0,len=array.length;i<len;i++){if((returned=getter(array[i],i))!=null)result.push(returned);}return result;};/**
	 * Removes items from the array matching the supplied where function. All removed items are returned in a new array.
	 * @memberof FooTable.arr
	 * @function remove
	 * @param {Array} array - The array to iterate and remove items from.
	 * @param {function} where - This function must return a boolean value, true includes the item in the result array.
	 * @returns {*}
	 */F.arr.remove=function(array,where){var remove=[],removed=[];if(!F.is.array(array)||!F.is.fn(where))return removed;var i=0,len=array.length;for(;i<len;i++){if(where(array[i],i,removed)){remove.push(i);removed.push(array[i]);}}// sort the indexes to be removed from largest to smallest
remove.sort(function(a,b){return b-a;});i=0;len=remove.length;for(;i<len;i++){var index=remove[i]-i;array.splice(index,1);}return removed;};/**
	 * Deletes a single item from the array. The item if removed is returned.
	 * @memberof FooTable.arr
	 * @function delete
	 * @param {Array} array - The array to iterate and delete the item from.
	 * @param {*} item - The item to find and delete.
	 * @returns {(*|null)}
	 */F.arr["delete"]=function(array,item){var remove=-1,removed=null;if(!F.is.array(array)||F.is.undef(item))return removed;var i=0,len=array.length;for(;i<len;i++){if(array[i]==item){remove=i;removed=array[i];break;}}if(remove!=-1)array.splice(remove,1);return removed;};/**
	 * Replaces a single item in the array with a new one.
	 * @memberof FooTable.arr
	 * @function replace
	 * @param {Array} array - The array to iterate and replace the item in.
	 * @param {*} oldItem - The item to be replaced.
	 * @param {*} newItem - The item to be inserted.
	 */F.arr.replace=function(array,oldItem,newItem){var index=array.indexOf(oldItem);if(index!==-1)array[index]=newItem;};})(FooTable);(function(F){/**
	 * This namespace contains commonly used 'is' type methods that return boolean values.
	 * @namespace FooTable.is
	 */F.is={};/**
	 * Checks if the type of the value is the same as that supplied.
	 * @memberof FooTable.is
	 * @function type
	 * @param {*} value - The value to check the type of.
	 * @param {string} type - The type to check for.
	 * @returns {boolean}
	 */F.is.type=function(value,type){return _typeof(value)===type;};/**
	 * Checks if the value is defined.
	 * @memberof FooTable.is
	 * @function defined
	 * @param {*} value - The value to check is defined.
	 * @returns {boolean}
	 */F.is.defined=function(value){return typeof value!=='undefined';};/**
	 * Checks if the value is undefined.
	 * @memberof FooTable.is
	 * @function undef
	 * @param {*} value - The value to check is undefined.
	 * @returns {boolean}
	 */F.is.undef=function(value){return typeof value==='undefined';};/**
	 * Checks if the value is an array.
	 * @memberof FooTable.is
	 * @function array
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.array=function(value){return'[object Array]'===Object.prototype.toString.call(value);};/**
	 * Checks if the value is a date.
	 * @memberof FooTable.is
	 * @function date
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.date=function(value){return'[object Date]'===Object.prototype.toString.call(value)&&!isNaN(value.getTime());};/**
	 * Checks if the value is a boolean.
	 * @memberof FooTable.is
	 * @function boolean
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is["boolean"]=function(value){return'[object Boolean]'===Object.prototype.toString.call(value);};/**
	 * Checks if the value is a string.
	 * @memberof FooTable.is
	 * @function string
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.string=function(value){return'[object String]'===Object.prototype.toString.call(value);};/**
	 * Checks if the value is a number.
	 * @memberof FooTable.is
	 * @function number
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.number=function(value){return'[object Number]'===Object.prototype.toString.call(value)&&!isNaN(value);};/**
	 * Checks if the value is a function.
	 * @memberof FooTable.is
	 * @function fn
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.fn=function(value){return F.is.defined(window)&&value===window.alert||'[object Function]'===Object.prototype.toString.call(value);};/**
	 * Checks if the value is an error.
	 * @memberof FooTable.is
	 * @function error
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.error=function(value){return'[object Error]'===Object.prototype.toString.call(value);};/**
	 * Checks if the value is an object.
	 * @memberof FooTable.is
	 * @function object
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.object=function(value){return'[object Object]'===Object.prototype.toString.call(value);};/**
	 * Checks if the value is a hash.
	 * @memberof FooTable.is
	 * @function hash
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.hash=function(value){return F.is.object(value)&&value.constructor===Object&&!value.nodeType&&!value.setInterval;};/**
	 * Checks if the supplied object is an HTMLElement
	 * @memberof FooTable.is
	 * @function element
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */F.is.element=function(obj){return(typeof HTMLElement==="undefined"?"undefined":_typeof(HTMLElement))==='object'?obj instanceof HTMLElement:obj&&_typeof(obj)==='object'&&obj!==null&&obj.nodeType===1&&typeof obj.nodeName==='string';};/**
	 * This is a simple check to determine if an object is a jQuery promise object. It simply checks the object has a "then" and "promise" function defined.
	 * The promise object is created as an object literal inside of jQuery.Deferred.
	 * It has no prototype, nor any other truly unique properties that could be used to distinguish it.
	 * This method should be a little more accurate than the internal jQuery one that simply checks for a "promise" method.
	 * @memberof FooTable.is
	 * @function promise
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */F.is.promise=function(obj){return F.is.object(obj)&&F.is.fn(obj.then)&&F.is.fn(obj.promise);};/**
	 * Checks if the supplied object is an instance of a jQuery object.
	 * @memberof FooTable.is
	 * @function jq
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */F.is.jq=function(obj){return F.is.defined(window.jQuery)&&obj instanceof jQuery&&obj.length>0;};/**
	 * Checks if the supplied object is a moment.js date object.
	 * @memberof FooTable.is
	 * @function moment
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */F.is.moment=function(obj){return F.is.defined(window.moment)&&F.is.object(obj)&&F.is["boolean"](obj._isAMomentObject);};/**
	 * Checks if the supplied value is an object and if it is empty.
	 * @memberof FooTable.is
	 * @function emptyObject
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.emptyObject=function(value){if(!F.is.hash(value))return false;for(var prop in value){if(value.hasOwnProperty(prop))return false;}return true;};/**
	 * Checks if the supplied value is an array and if it is empty.
	 * @memberof FooTable.is
	 * @function emptyArray
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.emptyArray=function(value){return F.is.array(value)?value.length===0:true;};/**
	 * Checks if the supplied value is a string and if it is empty.
	 * @memberof FooTable.is
	 * @function emptyString
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */F.is.emptyString=function(value){return F.is.string(value)?value.length===0:true;};})(FooTable);(function(F){/**
	 * This namespace contains commonly used string utility methods.
	 * @namespace FooTable.str
	 */F.str={};/**
	 * Checks if the supplied string contains the given substring.
	 * @memberof FooTable.str
	 * @function contains
	 * @param {string} str - The string to check.
	 * @param {string} contains - The string to check for.
	 * @param {boolean} [ignoreCase=false] - Whether or not to ignore casing when performing the check.
	 * @returns {boolean}
	 */F.str.contains=function(str,contains,ignoreCase){if(F.is.emptyString(str)||F.is.emptyString(contains))return false;return contains.length<=str.length&&(ignoreCase?str.toUpperCase().indexOf(contains.toUpperCase()):str.indexOf(contains))!==-1;};/**
	 * Checks if the supplied string contains the exact given substring.
	 * @memberof FooTable.str
	 * @function contains
	 * @param {string} str - The string to check.
	 * @param {string} contains - The string to check for.
	 * @param {boolean} [ignoreCase=false] - Whether or not to ignore casing when performing the check.
	 * @returns {boolean}
	 */F.str.containsExact=function(str,contains,ignoreCase){if(F.is.emptyString(str)||F.is.emptyString(contains)||contains.length>str.length)return false;return new RegExp('\\b'+F.str.escapeRegExp(contains)+'\\b',ignoreCase?'i':'').test(str);};/**
	 * Checks if the supplied string contains the given word.
	 * @memberof FooTable.str
	 * @function containsWord
	 * @param {string} str - The string to check.
	 * @param {string} word - The word to check for.
	 * @param {boolean} [ignoreCase=false] - Whether or not to ignore casing when performing the check.
	 * @returns {boolean}
	 */F.str.containsWord=function(str,word,ignoreCase){if(F.is.emptyString(str)||F.is.emptyString(word)||str.length<word.length)return false;var parts=str.split(/\W/);for(var i=0,len=parts.length;i<len;i++){if(ignoreCase?parts[i].toUpperCase()==word.toUpperCase():parts[i]==word)return true;}return false;};/**
	 * Returns the remainder of a string split on the first index of the given substring.
	 * @memberof FooTable.str
	 * @function from
	 * @param {string} str - The string to split.
	 * @param {string} from - The substring to split on.
	 * @returns {string}
	 */F.str.from=function(str,from){if(F.is.emptyString(str))return str;return F.str.contains(str,from)?str.substring(str.indexOf(from)+1):str;};/**
	 * Checks if a string starts with the supplied prefix.
	 * @memberof FooTable.str
	 * @function startsWith
	 * @param {string} str - The string to check.
	 * @param {string} prefix - The prefix to check for.
	 * @returns {boolean}
	 */F.str.startsWith=function(str,prefix){if(F.is.emptyString(str))return str==prefix;return str.slice(0,prefix.length)==prefix;};/**
	 * Takes the supplied string and converts it to camel case.
	 * @memberof FooTable.str
	 * @function toCamelCase
	 * @param {string} str - The string to camel case.
	 * @returns {string}
	 */F.str.toCamelCase=function(str){if(F.is.emptyString(str))return str;if(str.toUpperCase()===str)return str.toLowerCase();return str.replace(/^([A-Z])|[-\s_](\w)/g,function(match,p1,p2){if(F.is.string(p2))return p2.toUpperCase();return p1.toLowerCase();});};/**
	 * Generates a random string 9 characters long using the optional prefix if supplied.
	 * @memberof FooTable.str
	 * @function random
	 * @param {string} [prefix] - The prefix to append to the 9 random characters.
	 * @returns {string}
	 */F.str.random=function(prefix){prefix=F.is.emptyString(prefix)?'':prefix;return prefix+Math.random().toString(36).substr(2,9);};/**
	 * Escapes a string for use in a regular expression.
	 * @memberof FooTable.str
	 * @function escapeRegExp
	 * @param {string} str - The string to escape.
	 * @returns {string}
	 */F.str.escapeRegExp=function(str){if(F.is.emptyString(str))return str;return str.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");};})(FooTable);(function(F){"use strict";if(!Object.create){Object.create=function(){var Object=function Object(){};return function(prototype){if(arguments.length>1)throw Error('Second argument not supported');if(!F.is.object(prototype))throw TypeError('Argument must be an object');Object.prototype=prototype;var result=new Object();Object.prototype=null;return result;};}();}/**
	 * This base implementation does nothing except provide access to the {@link FooTable.Class#extend} method.
	 * @constructs FooTable.Class
	 * @classdesc This class is based off of John Resig's [Simple JavaScript Inheritance]{@link http://ejohn.org/blog/simple-javascript-inheritance} but it has been updated to be ES 5.1
	 * compatible by implementing an [Object.create polyfill]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill}
	 * for older browsers.
	 * @see {@link http://ejohn.org/blog/simple-javascript-inheritance}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill}
	 * @returns {FooTable.Class}
	 */function Class(){}var __extendable__=/xyz/.test(function(){xyz;})?/\b_super\b/:/.*/;// this._super() within the context of the new function is a pointer to the original function
// except if the hook param is specified then the this._super variable is the result of the original function
Class.__extend__=function(proto,name,func,original){// to all who venture here, here be dragons!
proto[name]=F.is.fn(original)&&__extendable__.test(func)?function(name,fn){return function(){var tmp,ret;tmp=this._super;this._super=original;ret=fn.apply(this,arguments);this._super=tmp;return ret;};}(name,func):func;};/**
	 * Creates a new class that inherits from this class which in turn allows itself to be extended or if a name and function is supplied extends only that specific function on the class.
	 * @param {(object|string)} arg1 - An object containing any new methods/members to implement or the name of the method to extend.
	 * @param {function} arg2 - If the first argument is a method name then this is the new function to replace it with.
	 * @returns {FooTable.Class} A new class that inherits from the base class.
	 * @example <caption>The below shows an example of how to implement inheritance using this method.</caption>
	 * var Person = FooTable.Class.extend({
	 *   construct: function(isDancing){
	 *     this.dancing = isDancing;
	 *   },
	 *   dance: function(){
	 *     return this.dancing;
	 *   }
	 * });
	 *
	 * var Ninja = Person.extend({
	 *   construct: function(){
	 *     this._super( false );
	 *   },
	 *   dance: function(){
	 *     // Call the inherited version of dance()
	 *     return this._super();
	 *   },
	 *   swingSword: function(){
	 *     return true;
	 *   }
	 * });
	 *
	 * var p = new Person(true);
	 * p.dance(); // => true
	 *
	 * var n = new Ninja();
	 * n.dance(); // => false
	 * n.swingSword(); // => true
	 *
	 * // Should all be true
	 * p instanceof Person && p instanceof FooTable.Class &&
	 * n instanceof Ninja && n instanceof Person && n instanceof FooTable.Class
	 */Class.extend=function(arg1,arg2){var args=Array.prototype.slice.call(arguments);arg1=args.shift();arg2=args.shift();function __extend__(proto,name,func,original){// to all who venture here, here be dragons!
proto[name]=F.is.fn(original)&&__extendable__.test(func)?function(name,fn,ofn){return function(){var tmp,ret;tmp=this._super;this._super=ofn;ret=fn.apply(this,arguments);this._super=tmp;return ret;};}(name,func,original):func;}if(F.is.hash(arg1)){var proto=Object.create(this.prototype),_super=this.prototype;for(var name in arg1){if(name==='__ctor__')continue;__extend__(proto,name,arg1[name],_super[name]);}var obj=F.is.fn(proto.__ctor__)?proto.__ctor__:function(){if(!F.is.fn(this.construct))throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');this.construct.apply(this,arguments);};proto.construct=F.is.fn(proto.construct)?proto.construct:function(){};obj.prototype=proto;proto.constructor=obj;obj.extend=Class.extend;return obj;}else if(F.is.string(arg1)&&F.is.fn(arg2)){__extend__(this.prototype,arg1,arg2,this.prototype[arg1]);}};F.Class=Class;F.ClassFactory=F.Class.extend(/** @lends FooTable.ClassFactory */{/**
		 * This is a simple factory for {@link FooTable.Class} objects allowing them to be registered using a friendly name
		 * and then new instances can be created using this friendly name.
		 * @constructs
		 * @extends FooTable.Class
		 * @returns {FooTable.ClassFactory}
		 * @this FooTable.ClassFactory
		 */construct:function construct(){/**
			 * An object containing all registered classes.
			 * @type {{}}
			 */this.registered={};},/**
		 * Checks if the factory contains a class registered using the supplied name.
		 * @instance
		 * @param {string} name - The name of the class to check.
		 * @returns {boolean}
		 * @this FooTable.ClassFactory
		 */contains:function contains(name){return F.is.defined(this.registered[name]);},/**
		 * Gets an array of all registered names.
		 * @instance
		 * @returns {Array.<string>}
		 * @this FooTable.ClassFactory
		 */names:function names(){var names=[],name;for(name in this.registered){if(!this.registered.hasOwnProperty(name))continue;names.push(name);}return names;},/**
		 * Registers a class object using the supplied friendly name and priority. The priority is only taken into account when loading all registered classes
		 * using the {@link FooTable.ClassFactory#load} method.
		 * @instance
		 * @param {string} name - The friendly name of the class.
		 * @param {function} klass - The class to register.
		 * @param {number} priority - This determines the order that the class is created when using the {@link FooTable.ClassFactory#load} method, higher values are loaded first.
		 * @this FooTable.ClassFactory
		 */register:function register(name,klass,priority){if(!F.is.string(name)||!F.is.fn(klass))return;var current=this.registered[name];this.registered[name]={name:name,klass:klass,priority:F.is.number(priority)?priority:F.is.defined(current)?current.priority:0};},/**
		 * Creates new instances of all registered classes using there priority and the supplied arguments to return them in an array.
		 * @instance
		 * @param {object} subs - An object containing classes to substitute on load.
		 * @param {*} arg1 - The first argument to supply when creating new instances of all registered classes.
		 * @param {*} [argN...] - Any number of additional arguments to supply when creating new instances of all registered classes.
		 * @returns {Array.<FooTable.Class>}
		 * @this FooTable.ClassFactory
		 */load:function load(subs,arg1,argN){var self=this,args=Array.prototype.slice.call(arguments),reg=[],loaded=[],name,klass;subs=args.shift()||{};for(name in self.registered){if(!self.registered.hasOwnProperty(name))continue;var component=self.registered[name];if(subs.hasOwnProperty(name)){klass=subs[name];if(F.is.string(klass))klass=F.getFnPointer(subs[name]);if(F.is.fn(klass)){component={name:name,klass:klass,priority:self.registered[name].priority};}}reg.push(component);}for(name in subs){if(!subs.hasOwnProperty(name)||self.registered.hasOwnProperty(name))continue;klass=subs[name];if(F.is.string(klass))klass=F.getFnPointer(subs[name]);if(F.is.fn(klass)){reg.push({name:name,klass:klass,priority:0});}}reg.sort(function(a,b){return b.priority-a.priority;});F.arr.each(reg,function(r){if(F.is.fn(r.klass)){loaded.push(self._make(r.klass,args));}});return loaded;},/**
		 * Create a new instance of a single class using the supplied name and arguments.
		 * @instance
		 * @param {string} name - The name of the class to create.
		 * @param {*} arg1 - The first argument to supply to the new instance.
		 * @param {*} [argN...] - Any number of additional arguments to supply to the new instance.
		 * @returns {FooTable.Class}
		 * @this FooTable.ClassFactory
		 */make:function make(name,arg1,argN){var self=this,args=Array.prototype.slice.call(arguments),reg;name=args.shift();reg=self.registered[name];if(F.is.fn(reg.klass)){return self._make(reg.klass,args);}return null;},/**
		 * This in effect lets us use the "apply" method on a function using the "new" keyword.
		 * @instance
		 * @private
		 * @param {function} klass
		 * @param args
		 * @returns {FooTable.Class}
		 * @this FooTable.ClassFactory
		 */_make:function _make(klass,args){function Class(){return klass.apply(this,args);}Class.prototype=klass.prototype;return new Class();}});})(FooTable);(function($,F){/**
	 * Converts the supplied cssText string into JSON object.
	 * @param {string} cssText - The cssText to convert to a JSON object.
	 * @returns {object}
	 */F.css2json=function(cssText){if(F.is.emptyString(cssText))return{};var json={},props=cssText.split(';'),pair,key,value;for(var i=0,i_len=props.length;i<i_len;i++){if(F.is.emptyString(props[i]))continue;pair=props[i].split(':');if(F.is.emptyString(pair[0])||F.is.emptyString(pair[1]))continue;key=F.str.toCamelCase($.trim(pair[0]));value=$.trim(pair[1]);json[key]=value;}return json;};/**
	 * Attempts to retrieve a function pointer using the given name.
	 * @param {string} functionName - The name of the function to fetch a pointer to.
	 * @returns {(function|object|null)}
	 */F.getFnPointer=function(functionName){if(F.is.emptyString(functionName))return null;var pointer=window,parts=functionName.split('.');F.arr.each(parts,function(part){if(pointer[part])pointer=pointer[part];});return F.is.fn(pointer)?pointer:null;};/**
	 * Checks the value for function properties such as the {@link FooTable.Column#formatter} option which could also be specified using just the name
	 * and attempts to return the correct function pointer or null if none was found matching the value.
	 * @param {FooTable.Class} self - The class to use as the 'this' keyword within the context of the function.
	 * @param {(function|string)} value - The actual function or the name of the function for the property.
	 * @param {function} [def] - A default function to return if none is found.
	 * @returns {(function|null)}
	 */F.checkFnValue=function(self,value,def){def=F.is.fn(def)?def:null;function wrap(t,fn,d){if(!F.is.fn(fn))return d;return function(){return fn.apply(t,arguments);};}return F.is.fn(value)?wrap(self,value,def):F.is.type(value,'string')?wrap(self,F.getFnPointer(value),def):def;};})(jQuery,FooTable);(function($,F){F.Cell=F.Class.extend(/** @lends FooTable.Cell */{/**
		 * The cell class containing all the properties for cells.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} table -  The root {@link FooTable.Table} this cell belongs to.
		 * @param {FooTable.Row} row - The parent {@link FooTable.Row} this cell belongs to.
		 * @param {FooTable.Column} column - The {@link FooTable.Column} this cell falls under.
		 * @param {(*|HTMLElement|jQuery)} valueOrElement - Either the value or the element for the cell.
		 * @returns {FooTable.Cell}
		 * @this FooTable.Cell
		 */construct:function construct(table,row,column,valueOrElement){/**
			 * The root {@link FooTable.Table} for the cell.
			 * @instance
			 * @readonly
			 * @type {FooTable.Table}
			 */this.ft=table;/**
			 * The parent {@link FooTable.Row} for the cell.
			 * @instance
			 * @readonly
			 * @type {FooTable.Row}
			 */this.row=row;/**
			 * The {@link FooTable.Column} this cell falls under.
			 * @instance
			 * @readonly
			 * @type {FooTable.Column}
			 */this.column=column;this.created=false;this.define(valueOrElement);},/**
		 * This is supplied either the value or the cell element/jQuery object if it exists.
		 * If supplied the element we need set the $el property and parse the value from it.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or element to define the cell.
		 * @this FooTable.Cell
		 */define:function define(valueOrElement){/**
			 * The jQuery table cell object this instance wraps.
			 * @instance
			 * @type {jQuery}
			 */this.$el=F.is.element(valueOrElement)||F.is.jq(valueOrElement)?$(valueOrElement):null;/**
			 * The jQuery row object that represents this cell in the details table.
			 * @type {jQuery}
			 */this.$detail=null;var hasOptions=F.is.hash(valueOrElement)&&F.is.hash(valueOrElement.options)&&F.is.defined(valueOrElement.value);/**
			 * The value of the cell.
			 * @instance
			 * @type {*}
			 */this.value=this.column.parser.call(this.column,F.is.jq(this.$el)?this.$el:hasOptions?valueOrElement.value:valueOrElement,this.ft.o);/**
			 * Contains any options for the cell. These are the options supplied through the plugin constructor as part of the row object itself.
			 * @type {object}
			 */this.o=$.extend(true,{classes:null,style:null},hasOptions?valueOrElement.options:{});/**
			 * An array of CSS classes for the cell.
			 * @instance
			 * @protected
			 * @type {Array.<string>}
			 */this.classes=F.is.jq(this.$el)&&this.$el.attr('class')?this.$el.attr('class').match(/\S+/g):F.is.array(this.o.classes)?this.o.classes:F.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[];/**
			 * The inline styles for the cell.
			 * @instance
			 * @protected
			 * @type {object}
			 */this.style=F.is.jq(this.$el)&&this.$el.attr('style')?F.css2json(this.$el.attr('style')):F.is.hash(this.o.style)?this.o.style:F.is.string(this.o.style)?F.css2json(this.o.style):{};},/**
		 * After the cell has been defined this ensures that the $el and #detail properties are jQuery objects by either creating or updating them.
		 * @instance
		 * @protected
		 * @this FooTable.Cell
		 */$create:function $create(){if(this.created)return;(this.$el=F.is.jq(this.$el)?this.$el:$('<td/>')).data('value',this.value).contents().detach().end().append(this.format(this.value));this._setClasses(this.$el);this._setStyle(this.$el);this.$detail=$('<tr/>').addClass(this.row.classes.join(' ')).data('__FooTableCell__',this).append($('<th/>')).append($('<td/>'));this.created=true;},/**
		 * Collapses this cell and displays it in the details row.
		 * @instance
		 * @protected
		 */collapse:function collapse(){if(!this.created)return;this.$detail.children('th').html(this.column.title);this.$el.clone().attr('id',this.$el.attr('id')?this.$el.attr('id')+'-detail':undefined).css('display','table-cell').html('').append(this.$el.contents().detach()).replaceAll(this.$detail.children('td').first());if(!F.is.jq(this.$detail.parent()))this.$detail.appendTo(this.row.$details.find('.footable-details > tbody'));},/**
		 * Restores this cell from a detail row back into the normal row.
		 * @instance
		 * @protected
		 */restore:function restore(){if(!this.created)return;if(F.is.jq(this.$detail.parent())){var $cell=this.$detail.children('td').first();this.$el.attr('class',$cell.attr('class')).attr('style',$cell.attr('style')).css('display',this.column.hidden||!this.column.visible?'none':'table-cell').append($cell.contents().detach());}this.$detail.detach();},/**
		 * Helper method to call this cell's column parser function supplying the required parameters.
		 * @instance
		 * @protected
		 * @returns {*}
		 * @see FooTable.Column#parser
		 * @this FooTable.Cell
		 */parse:function parse(){return this.column.parser.call(this.column,this.$el,this.ft.o);},/**
		 * Helper method to call this cell's column formatter function using the supplied value and any additional required parameters.
		 * @instance
		 * @protected
		 * @param {*} value - The value to format.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @see FooTable.Column#formatter
		 * @this FooTable.Cell
		 */format:function format(value){return this.column.formatter.call(this.column,value,this.ft.o,this.row.value);},/**
		 * Allows easy access to getting or setting the cell's value. If the value is set all associated properties are also updated along with the actual element.
		 * Using this method also allows us to supply an object containing options and the value for the cell.
		 * @instance
		 * @param {*} [value] - The value to set for the cell. If not supplied the current value of the cell is returned.
		 * @param {boolean} [redraw=true] - Whether or not to redraw the row once the value has been set.
		 * @param {boolean} [redrawSelf=true] - Whether or not to redraw the cell itself once the value has been set, if `false` this will override the supplied `redraw` value and prevent the row from redrawing as well.
		 * @returns {(*|undefined)}
		 * @this FooTable.Cell
		 */val:function val(value,redraw,redrawSelf){if(F.is.undef(value)){// get
return this.value;}// set
var self=this,hasOptions=F.is.hash(value)&&F.is.hash(value.options)&&F.is.defined(value.value);this.o=$.extend(true,{classes:self.classes,style:self.style},hasOptions?value.options:{});this.value=hasOptions?value.value:value;this.classes=F.is.array(this.o.classes)?this.o.classes:F.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[];this.style=F.is.hash(this.o.style)?this.o.style:F.is.string(this.o.style)?F.css2json(this.o.style):{};redrawSelf=F.is["boolean"](redrawSelf)?redrawSelf:true;if(this.created&&redrawSelf){this.$el.data('value',this.value).empty();var $detail=this.$detail.children('td').first().empty(),$target=F.is.jq(this.$detail.parent())?$detail:this.$el;$target.append(this.format(this.value));this._setClasses($target);this._setStyle($target);if(F.is["boolean"](redraw)?redraw:true)this.row.draw();}},_setClasses:function _setClasses($el){var hasColClasses=!F.is.emptyArray(this.column.classes),hasClasses=!F.is.emptyArray(this.classes),classes=null;$el.removeAttr('class');if(!hasColClasses&&!hasClasses)return;if(hasColClasses&&hasClasses){classes=this.classes.concat(this.column.classes).join(' ');}else if(hasColClasses){classes=this.column.classes.join(' ');}else if(hasClasses){classes=this.classes.join(' ');}if(!F.is.emptyString(classes)){$el.addClass(classes);}},_setStyle:function _setStyle($el){var hasColStyle=!F.is.emptyObject(this.column.style),hasStyle=!F.is.emptyObject(this.style),style=null;$el.removeAttr('style');if(!hasColStyle&&!hasStyle)return;if(hasColStyle&&hasStyle){style=$.extend({},this.column.style,this.style);}else if(hasColStyle){style=this.column.style;}else if(hasStyle){style=this.style;}if(F.is.hash(style)){$el.css(style);}}});})(jQuery,FooTable);(function($,F){F.Column=F.Class.extend(/** @lends FooTable.Column */{/**
		 * The column class containing all the properties for columns. All members marked as "readonly" should not be used when defining {@link FooTable.Defaults#columns}.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this component belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @param {string} [type] - The type of column, "text" by default.
		 * @returns {FooTable.Column}
		 * @this FooTable.Column
		 */construct:function construct(instance,definition,type){/**
			 * The root {@link FooTable.Table} for the column.
			 * @instance
			 * @readonly
			 * @type {FooTable.Table}
			 */this.ft=instance;/**
			 * The type of data displayed by the column.
			 * @instance
			 * @readonly
			 * @type {string}
			 */this.type=F.is.emptyString(type)?'text':type;/**
			 * Whether or not the column was parsed from a standard table row containing data instead of from an actual header row.
			 * @instance
			 * @readonly
			 * @type {boolean}
			 */this.virtual=F.is["boolean"](definition.virtual)?definition.virtual:false;/**
			 * The jQuery cell object for the column header.
			 * @instance
			 * @readonly
			 * @type {jQuery}
			 */this.$el=F.is.jq(definition.$el)?definition.$el:null;/**
			 * The index of the column in the table. This is set by the plugin during initialization.
			 * @instance
			 * @readonly
			 * @type {number}
			 * @default -1
			 */this.index=F.is.number(definition.index)?definition.index:-1;/**
			 * Whether or not this in an internal only column.
			 * @instance
			 * @readonly
			 * @type {boolean}
			 * @description Internal columns or there cells will not be returned when calling methods such as `FooTable.Row#val`.
			 */this.internal=false;this.define(definition);this.$create();},/**
		 * This is supplied the column definition in the form of a simple object created by merging options supplied via the plugin constructor with those parsed from the DOM.
		 * @instance
		 * @protected
		 * @param {object} definition - The object containing the column definition.
		 * @this FooTable.Column
		 */define:function define(definition){/**
			 * Whether or not this column is hidden from view and appears in the details row.
			 * @type {boolean}
			 * @default false
			 */this.hidden=F.is["boolean"](definition.hidden)?definition.hidden:false;/**
			 * Whether or not this column is completely hidden from view and will not appear in the details row.
			 * @type {boolean}
			 * @default true
			 */this.visible=F.is["boolean"](definition.visible)?definition.visible:true;/**
			 * The name of the column. This name must correspond to the property name of the JSON row data.
			 * @type {string}
			 * @default null
			 */this.name=F.is.string(definition.name)?definition.name:null;if(this.name==null)this.name='col'+(definition.index+1);/**
			 * The title to display in the column header, this can be HTML.
			 * @type {string}
			 * @default null
			 */this.title=F.is.string(definition.title)?definition.title:null;if(!this.virtual&&this.title==null&&F.is.jq(this.$el))this.title=this.$el.html();if(this.title==null)this.title='Column '+(definition.index+1);/**
			 * The styles to apply to all cells in this column.
			 * @type {object}
			 */this.style=F.is.hash(definition.style)?definition.style:F.is.string(definition.style)?F.css2json(definition.style):{};/**
			 * The classes to apply to all cells in this column.
			 * @type {Array.<string>}
			 */this.classes=F.is.array(definition.classes)?definition.classes:F.is.string(definition.classes)?definition.classes.match(/\S+/g):[];// override any default functions ensuring when they are executed "this" within the context of the function points to the instance of this object.
this.parser=F.checkFnValue(this,definition.parser,this.parser);this.formatter=F.checkFnValue(this,definition.formatter,this.formatter);},/**
		 * After the column has been defined this ensures that the $el property is a jQuery object by either creating or updating the current value.
		 * @instance
		 * @protected
		 * @this FooTable.Column
		 */$create:function $create(){(this.$el=!this.virtual&&F.is.jq(this.$el)?this.$el:$('<th/>')).html(this.title).addClass(this.classes.join(' ')).css(this.style);},/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.Column#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {string}
		 * @this FooTable.Column
		 */parser:function parser(valueOrElement){if(F.is.element(valueOrElement)||F.is.jq(valueOrElement)){// use jQuery to get the value
var data=$(valueOrElement).data('value');return F.is.defined(data)?data:$(valueOrElement).html();}if(F.is.defined(valueOrElement)&&valueOrElement!=null)return valueOrElement+'';// use the native toString of the value
return null;// otherwise we have no value so return null
},/**
		 * This is supplied the value retrieved from the {@link FooTable.Column#parse} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {string} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @this FooTable.Column
		 */formatter:function formatter(value,options,rowData){return value==null?'':value;},/**
		 * Creates a cell for this column from the supplied {@link FooTable.Row} object. This allows different column types to return different types of cells.
		 * @instance
		 * @protected
		 * @param {FooTable.Row} row - The row to create the cell from.
		 * @returns {FooTable.Cell}
		 * @this FooTable.Column
		 */createCell:function createCell(row){var element=F.is.jq(row.$el)?row.$el.children('td,th').get(this.index):null,data=F.is.hash(row.value)?row.value[this.name]:null;return new F.Cell(this.ft,row,this,element||data);}});F.columns=new F.ClassFactory();F.columns.register('text',F.Column);})(jQuery,FooTable);(function($,F){F.Component=F.Class.extend(/** @lends FooTable.Component */{/**
		 * The base class for all FooTable components.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} instance - The parent {@link FooTable.Table} object for the component.
		 * @param {boolean} enabled - Whether or not the component is enabled.
		 * @throws {TypeError} The instance parameter must be an instance of {@link FooTable.Table}.
		 * @returns {FooTable.Component}
		 */construct:function construct(instance,enabled){if(!(instance instanceof F.Table))throw new TypeError('The instance parameter must be an instance of FooTable.Table.');/**
			 * The parent {@link FooTable.Table} for the component.
			 * @type {FooTable.Table}
			 */this.ft=instance;/**
			 * Whether or not this component is enabled. Disabled components only have there preinit method called allowing for this value to be overridden.
			 * @type {boolean}
			 */this.enabled=F.is["boolean"](enabled)?enabled:false;},/**
		 * The preinit method is called during the parent {@link FooTable.Table} constructor call.
		 * @param {object} data - The jQuery.data() object of the root table.
		 * @instance
		 * @protected
		 * @function
		 */preinit:function preinit(data){},/**
		 * The init method is called during the parent {@link FooTable.Table} constructor call.
		 * @instance
		 * @protected
		 * @function
		 */init:function init(){},/**
		 * This method is called from the {@link FooTable.Table#destroy} method.
		 * @instance
		 * @protected
		 * @function
		 */destroy:function destroy(){},/**
		 * This method is called from the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @function
		 */predraw:function predraw(){},/**
		 * This method is called from the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @function
		 */draw:function draw(){},/**
		 * This method is called from the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @function
		 */postdraw:function postdraw(){}});F.components=new F.ClassFactory();})(jQuery,FooTable);(function($,F){/**
	 * Contains all the available options for the FooTable plugin.
	 * @name FooTable.Defaults
	 * @function
	 * @constructor
	 * @returns {FooTable.Defaults}
	 */F.Defaults=function(){/**
		 * Whether or not events raised using the {@link FooTable.Table#raise} method are propagated up the DOM. By default this is set to false and all events bubble up the DOM as per usual
		 * however the reason for this option is if we have nested tables. If false the parent table would receive all the events raised by it's children and any handlers bound to both the
		 * parent and child would be triggered which is not the desired behavior.
		 * @type {boolean}
		 * @default false
		 */this.stopPropagation=false;/**
		 * An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
		 * @type {object.<string, function>}
		 * @default NULL
		 * @example <caption>This example shows how to pass an object containing the events and handlers.</caption>
		 * "on": {
		 * 	"click": function(e){
		 * 		// bind a custom click event to do something whenever the table is clicked
		 * 	},
		 * 	"init.ft.table": function(e, ft){
		 * 		// bind to the FooTable initialize event to do something
		 * 	}
		 * }
		 */this.on=null;};/**
	 * Contains all the default options for the plugin.
	 * @type {FooTable.Defaults}
	 */F.defaults=new F.Defaults();})(jQuery,FooTable);(function($,F){F.Row=F.Class.extend(/** @lends FooTable.Row */{/**
		 * The row class containing all the properties for a row and its' cells.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @param {Array.<FooTable.Column>} columns - The array of {@link FooTable.Column} for this row.
		 * @param {(*|HTMLElement|jQuery)} dataOrElement - Either the data for the row (create) or the element (parse) for the row.
		 * @returns {FooTable.Row}
		 */construct:function construct(table,columns,dataOrElement){/**
			 * The {@link FooTable.Table} for the row.
			 * @type {FooTable.Table}
			 */this.ft=table;/**
			 * The array of {@link FooTable.Column} for this row.
			 * @type {Array.<FooTable.Column>}
			 */this.columns=columns;this.created=false;this.define(dataOrElement);},/**
		 * This is supplied either the object containing the values for the row or the row element/jQuery object if it exists.
		 * If supplied the element we need to set the $el property and parse the cells from it using the column index.
		 * If we have an object we parse the cells from it using the column name.
		 * @param {(object|jQuery)} dataOrElement - The row object or element to define the row.
		 */define:function define(dataOrElement){/**
			 * The jQuery table row object this instance wraps.
			 * @instance
			 * @protected
			 * @type {jQuery}
			 */this.$el=F.is.element(dataOrElement)||F.is.jq(dataOrElement)?$(dataOrElement):null;/**
			 * The jQuery toggle element for the row.
			 * @instance
			 * @protected
			 * @type {jQuery}
			 */this.$toggle=$('<span/>',{'class':'footable-toggle fooicon fooicon-plus'});var isObj=F.is.hash(dataOrElement),hasOptions=isObj&&F.is.hash(dataOrElement.options)&&F.is.hash(dataOrElement.value);/**
			 * The value of the row.
			 * @instance
			 * @protected
			 * @type {Object}
			 */this.value=isObj?hasOptions?dataOrElement.value:dataOrElement:null;/**
			 * Contains any options for the row.
			 * @type {object}
			 */this.o=$.extend(true,{expanded:false,classes:null,style:null},hasOptions?dataOrElement.options:{});/**
			 * Whether or not this row is expanded and will display it's detail row when there are any hidden columns.
			 * @instance
			 * @protected
			 * @type {boolean}
			 */this.expanded=F.is.jq(this.$el)?this.$el.data('expanded')||this.o.expanded:this.o.expanded;/**
			 * An array of CSS classes for the row.
			 * @instance
			 * @protected
			 * @type {Array.<string>}
			 */this.classes=F.is.jq(this.$el)&&this.$el.attr('class')?this.$el.attr('class').match(/\S+/g):F.is.array(this.o.classes)?this.o.classes:F.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[];/**
			 * The inline styles for the row.
			 * @instance
			 * @protected
			 * @type {object}
			 */this.style=F.is.jq(this.$el)&&this.$el.attr('style')?F.css2json(this.$el.attr('style')):F.is.hash(this.o.style)?this.o.style:F.is.string(this.o.style)?F.css2json(this.o.style):{};/**
			 * The cells array. This is populated before the call to the {@link FooTable.Row#$create} method.
			 * @instance
			 * @type {Array.<FooTable.Cell>}
			 */this.cells=this.createCells();// this ensures the value contains the parsed cell values and not the supplied values
var self=this;self.value={};F.arr.each(self.cells,function(cell){self.value[cell.column.name]=cell.val();});},/**
		 * After the row has been defined this ensures that the $el property is a jQuery object by either creating or updating the current value.
		 * @instance
		 * @protected
		 * @this FooTable.Row
		 */$create:function $create(){if(this.created)return;(this.$el=F.is.jq(this.$el)?this.$el:$('<tr/>')).data('__FooTableRow__',this);this._setClasses(this.$el);this._setStyle(this.$el);if(this.ft.rows.toggleColumn=='last')this.$toggle.addClass('last-column');this.$details=$('<tr/>',{'class':'footable-detail-row'}).append($('<td/>',{colspan:this.ft.columns.visibleColspan}).append($('<table/>',{'class':'footable-details '+this.ft.classes.join(' ')}).append('<tbody/>')));var self=this;F.arr.each(self.cells,function(cell){if(!cell.created)cell.$create();self.$el.append(cell.$el);});self.$el.off('click.ft.row').on('click.ft.row',{self:self},self._onToggle);this.created=true;},/**
		 * This is called during the construct method and uses the current column definitions to create an array of {@link FooTable.Cell} objects for the row.
		 * @instance
		 * @protected
		 * @returns {Array.<FooTable.Cell>}
		 * @this FooTable.Row
		 */createCells:function createCells(){var self=this;return F.arr.map(self.columns,function(col){return col.createCell(self);});},/**
		 * Allows easy access to getting or setting the row's data. If the data is set all associated properties are also updated along with the actual element.
		 * Using this method also allows us to supply an object containing options and the data for the row at the same time.
		 * @instance
		 * @param {object} [data] - The data to set for the row. If not supplied the current value of the row is returned.
		 * @param {boolean} [redraw=true] - Whether or not to redraw the table once the value has been set.
		 * @param {boolean} [redrawSelf=true] - Whether or not to redraw the row itself once the value has been set, if `false` this will override the supplied `redraw` value and prevent the table from redrawing as well.
		 * @returns {(*|undefined)}
		 */val:function val(data,redraw,redrawSelf){var self=this;if(!F.is.hash(data)){// get - check the value property and build it from the cells if required.
if(!F.is.hash(this.value)||F.is.emptyObject(this.value)){this.value={};F.arr.each(this.cells,function(cell){if(!cell.column.internal){self.value[cell.column.name]=cell.val();}});}return this.value;}// set
this.collapse(false);var isObj=F.is.hash(data),hasOptions=isObj&&F.is.hash(data.options)&&F.is.hash(data.value);this.o=$.extend(true,{expanded:self.expanded,classes:self.classes,style:self.style},hasOptions?data.options:{});this.expanded=this.o.expanded;this.classes=F.is.array(this.o.classes)?this.o.classes:F.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[];this.style=F.is.hash(this.o.style)?this.o.style:F.is.string(this.o.style)?F.css2json(this.o.style):{};if(isObj){if(hasOptions)data=data.value;if(F.is.hash(this.value)){for(var prop in data){if(!data.hasOwnProperty(prop))continue;this.value[prop]=data[prop];}}else{this.value=data;}}else{this.value=null;}redrawSelf=F.is["boolean"](redrawSelf)?redrawSelf:true;F.arr.each(this.cells,function(cell){if(!cell.column.internal&&F.is.defined(self.value[cell.column.name])){cell.val(self.value[cell.column.name],false,redrawSelf);}});if(this.created&&redrawSelf){this._setClasses(this.$el);this._setStyle(this.$el);if(F.is["boolean"](redraw)?redraw:true)this.draw();}},_setClasses:function _setClasses($el){var hasClasses=!F.is.emptyArray(this.classes),classes=null;$el.removeAttr('class');if(!hasClasses)return;else classes=this.classes.join(' ');if(!F.is.emptyString(classes)){$el.addClass(classes);}},_setStyle:function _setStyle($el){var hasStyle=!F.is.emptyObject(this.style),style=null;$el.removeAttr('style');if(!hasStyle)return;else style=this.style;if(F.is.hash(style)){$el.css(style);}},/**
		 * Sets the current row to an expanded state displaying any hidden columns in a detail row just below it.
		 * @instance
		 * @fires FooTable.Row#"expand.ft.row"
		 */expand:function expand(){if(!this.created)return;var self=this;/**
			 * The expand.ft.row event is raised before the the row is expanded.
			 * Calling preventDefault on this event will stop the row being expanded.
			 * @event FooTable.Row#"expand.ft.row"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Row} row - The row about to be expanded.
			 */self.ft.raise('expand.ft.row',[self]).then(function(){self.__hidden__=F.arr.map(self.cells,function(cell){return cell.column.hidden&&cell.column.visible?cell:null;});if(self.__hidden__.length>0){self.$details.insertAfter(self.$el).children('td').first().attr('colspan',self.ft.columns.visibleColspan);F.arr.each(self.__hidden__,function(cell){cell.collapse();});}self.$el.attr('data-expanded',true);self.$toggle.removeClass('fooicon-plus').addClass('fooicon-minus');self.expanded=true;self.ft.raise('expanded.ft.row',[self]);});},/**
		 * Sets the current row to a collapsed state removing the detail row if it exists.
		 * @instance
		 * @param {boolean} [setExpanded] - Whether or not to set the {@link FooTable.Row#expanded} property to false.
		 * @fires FooTable.Row#"collapse.ft.row"
		 */collapse:function collapse(setExpanded){if(!this.created)return;var self=this;/**
			 * The collapse.ft.row event is raised before the the row is collapsed.
			 * Calling preventDefault on this event will stop the row being collapsed.
			 * @event FooTable.Row#"collapse.ft.row"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Row} row - The row about to be expanded.
			 */self.ft.raise('collapse.ft.row',[self]).then(function(){F.arr.each(self.__hidden__,function(cell){cell.restore();});self.$details.detach();self.$el.removeAttr('data-expanded');self.$toggle.removeClass('fooicon-minus').addClass('fooicon-plus');if(F.is["boolean"](setExpanded)?setExpanded:true)self.expanded=false;self.ft.raise('collapsed.ft.row',[self]);});},/**
		 * Prior to drawing this moves the details contents back to there original cells and detaches the toggle element from the row.
		 * @instance
		 * @param {boolean} [detach] - Whether or not to detach the row.
		 * @this FooTable.Row
		 */predraw:function predraw(detach){if(this.created){if(this.expanded){this.collapse(false);}this.$toggle.detach();detach=F.is["boolean"](detach)?detach:true;if(detach)this.$el.detach();}},/**
		 * Draws the current row and cells.
		 * @instance
		 * @this FooTable.Row
		 */draw:function draw($parent){if(!this.created)this.$create();if(F.is.jq($parent))$parent.append(this.$el);var self=this;F.arr.each(self.cells,function(cell){cell.$el.css('display',cell.column.hidden||!cell.column.visible?'none':'table-cell');if(self.ft.rows.showToggle&&self.ft.columns.hasHidden){if(self.ft.rows.toggleColumn=='first'&&cell.column.index==self.ft.columns.firstVisibleIndex||self.ft.rows.toggleColumn=='last'&&cell.column.index==self.ft.columns.lastVisibleIndex){cell.$el.prepend(self.$toggle);}}cell.$el.add(cell.column.$el).removeClass('footable-first-visible footable-last-visible');if(cell.column.index==self.ft.columns.firstVisibleIndex){cell.$el.add(cell.column.$el).addClass('footable-first-visible');}if(cell.column.index==self.ft.columns.lastVisibleIndex){cell.$el.add(cell.column.$el).addClass('footable-last-visible');}});if(this.expanded){this.expand();}},/**
		 * Toggles the row between it's expanded and collapsed state if there are hidden columns.
		 * @instance
		 * @this FooTable.Row
		 */toggle:function toggle(){if(this.created&&this.ft.columns.hasHidden){if(this.expanded)this.collapse();else this.expand();}},/**
		 * Handles the toggle click event for rows.
		 * @instance
		 * @param {jQuery.Event} e - The jQuery.Event object for the click event.
		 * @private
		 * @this jQuery
		 */_onToggle:function _onToggle(e){var self=e.data.self;// only execute the toggle if the event.target is one of the approved initiators
if($(e.target).is(self.ft.rows.toggleSelector)){self.toggle();}}});})(jQuery,FooTable);(function($,F){/**
	 * An array of all currently loaded instances of the plugin.
	 * @protected
	 * @readonly
	 * @type {Array.<FooTable.Table>}
	 */F.instances=[];F.Table=F.Class.extend(/** @lends FooTable.Table */{/**
		 * This class is the core of the plugin and drives the logic of all components.
		 * @constructs
		 * @this FooTable.Table
		 * @extends FooTable.Class
		 * @param {(HTMLTableElement|jQuery)} element - The element or jQuery table object to bind the plugin to.
		 * @param {object} options - The options to initialize the plugin with.
		 * @param {function} [ready] - A callback function to execute once the plugin is initialized.
		 * @returns {FooTable.Table}
		 */construct:function construct(element,options,ready){//BEGIN MEMBERS
/**
			 * The timeout ID for the resize event.
			 * @instance
			 * @private
			 * @type {?number}
			 */this._resizeTimeout=null;/**
			 * The ID of the FooTable instance.
			 * @instance
			 * @type {number}
			 */this.id=F.instances.push(this);/**
			 * Whether or not the plugin and all components and add-ons are fully initialized.
			 * @instance
			 * @type {boolean}
			 */this.initialized=false;/**
			 * The jQuery table object the plugin is bound to.
			 * @instance
			 * @type {jQuery}
			 */this.$el=(F.is.jq(element)?element:$(element)).first();// ensure one table, one instance
/**
			 * A loader jQuery instance
			 * @instance
			 * @type {jQuery}
			 */this.$loader=$('<div/>',{'class':'footable-loader'}).append($('<span/>',{'class':'fooicon fooicon-loader'}));/**
			 * The options for the plugin. This is a merge of user defined options and the default options.
			 * @instance
			 * @type {object}
			 */this.o=$.extend(true,{},F.defaults,options);/**
			 * The jQuery data object for the table at initialization.
			 * @instance
			 * @type {object}
			 */this.data=this.$el.data()||{};/**
			 * An array of all CSS classes on the table that do not start with "footable".
			 * @instance
			 * @protected
			 * @type {Array.<string>}
			 */this.classes=[];/**
			 * All components for this instance of the plugin. These are executed in the order they appear in the array for the initialize phase and in reverse order for the destroy phase of the plugin.
			 * @instance
			 * @protected
			 * @type {object}
			 * @prop {Array.<FooTable.Component>} internal - The internal components for the plugin. These are executed either before all other components in the initialize phase or after them in the destroy phase of the plugin.
			 * @prop {Array.<FooTable.Component>} core - The core components for the plugin. These are executed either after the internal components in the initialize phase or before them in the destroy phase of the plugin.
			 * @prop {Array.<FooTable.Component>} custom - The custom components for the plugin. These are executed either after the core components in the initialize phase or before them in the destroy phase of the plugin.
			 */this.components=F.components.load(F.is.hash(this.data.components)?this.data.components:this.o.components,this);/**
			 * The breakpoints component for this instance of the plugin.
			 * @instance
			 * @type {FooTable.Breakpoints}
			 */this.breakpoints=this.use(FooTable.Breakpoints);/**
			 * The columns component for this instance of the plugin.
			 * @instance
			 * @type {FooTable.Columns}
			 */this.columns=this.use(FooTable.Columns);/**
			 * The rows component for this instance of the plugin.
			 * @instance
			 * @type {FooTable.Rows}
			 */this.rows=this.use(FooTable.Rows);//END MEMBERS
this._construct(ready);},/**
		 * Once all properties are set this performs the actual initialization of the plugin calling the {@link FooTable.Table#_preinit} and
		 * {@link FooTable.Table#_init} methods as well as raising the {@link FooTable.Table#"ready.ft.table"} event.
		 * @this FooTable.Table
		 * @instance
		 * @param {function} [ready] - A callback function to execute once the plugin is initialized.
		 * @private
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Table#"ready.ft.table"
		 */_construct:function _construct(ready){var self=this;return this._preinit().then(function(){return self._init().then(function(){/**
					 * The ready.ft.table event is raised after the plugin has been initialized and the table drawn.
					 * Calling preventDefault on this event will stop the ready callback being executed.
					 * @event FooTable.Table#"ready.ft.table"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 */return self.raise('ready.ft.table').then(function(){if(F.is.fn(ready))ready.call(self,self);});});}).always(function(arg){self.$el.show();if(F.is.error(arg)){console.error('FooTable: unhandled error thrown during initialization.',arg);}});},/**
		 * The preinit method is called prior to the plugins actual initialization and provides itself and it's components an opportunity to parse any additional option values.
		 * @instance
		 * @private
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Table#"preinit.ft.table"
		 */_preinit:function _preinit(){var self=this;/**
			 * The preinit.ft.table event is raised before any components.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Table#"preinit.ft.table"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object from the root table element.
			 */return this.raise('preinit.ft.table',[self.data]).then(function(){var classes=(self.$el.attr('class')||'').match(/\S+/g)||[];self.o.ajax=F.checkFnValue(self,self.data.ajax,self.o.ajax);self.o.stopPropagation=F.is["boolean"](self.data.stopPropagation)?self.data.stopPropagation:self.o.stopPropagation;for(var i=0,len=classes.length;i<len;i++){if(!F.str.startsWith(classes[i],'footable'))self.classes.push(classes[i]);}self.$el.hide().after(self.$loader);return self.execute(false,false,'preinit',self.data);});},/**
		 * Initializes this instance of the plugin and calls the callback function if one is supplied once complete.
		 * @this FooTable.Table
		 * @instance
		 * @private
		 * @return {jQuery.Promise}
		 * @fires FooTable.Table#"init.ft.table"
		 */_init:function _init(){var self=this;/**
			 * The init.ft.table event is raised before any components are initialized.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Table#"init.ft.table"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */return self.raise('init.ft.table').then(function(){var $thead=self.$el.children('thead'),$tbody=self.$el.children('tbody'),$tfoot=self.$el.children('tfoot');self.$el.addClass('footable footable-'+self.id);if(F.is.hash(self.o.on))self.$el.on(self.o.on);if($tfoot.length==0)self.$el.append($tfoot=$('<tfoot/>'));if($tbody.length==0)self.$el.append('<tbody/>');if($thead.length==0)self.$el.prepend($thead=$('<thead/>'));return self.execute(false,true,'init').then(function(){self.$el.data('__FooTable__',self);if($tfoot.children('tr').length==0)$tfoot.remove();if($thead.children('tr').length==0)$thead.remove();/**
					 * The postinit.ft.table event is raised after any components are initialized but before the table is
					 * drawn for the first time.
					 * Calling preventDefault on this event will disable the initial drawing of the table.
					 * @event FooTable.Table#"postinit.ft.table"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 */return self.raise('postinit.ft.table').then(function(){return self.draw();}).always(function(){$(window).off('resize.ft'+self.id,self._onWindowResize).on('resize.ft'+self.id,{self:self},self._onWindowResize);self.initialized=true;});});});},/**
		 * Destroys this plugin removing it from the table.
		 * @this FooTable.Table
		 * @instance
		 * @fires FooTable.Table#"destroy.ft.table"
		 */destroy:function destroy(){var self=this;/**
			 * The destroy.ft.table event is called before all core components.
			 * Calling preventDefault on this event will prevent the entire plugin from being destroyed.
			 * @event FooTable.Table#"destroy.ft.table"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */return self.raise('destroy.ft.table').then(function(){return self.execute(true,true,'destroy').then(function(){self.$el.removeData('__FooTable__').removeClass('footable-'+self.id);if(F.is.hash(self.o.on))self.$el.off(self.o.on);$(window).off('resize.ft'+self.id,self._onWindowResize);self.initialized=false;F.instances[self.id]=null;});}).fail(function(err){if(F.is.error(err)){console.error('FooTable: unhandled error thrown while destroying the plugin.',err);}});},/**
		 * Raises an event on this instance supplying the args array as additional parameters to the handlers.
		 * @this FooTable.Table
		 * @instance
		 * @param {string} eventName - The name of the event to raise, this can include namespaces.
		 * @param {Array} [args] - An array containing additional parameters to be passed to any bound handlers.
		 * @returns {jQuery.Event}
		 */raise:function raise(eventName,args){var self=this,debug=F.__debug__&&(F.is.emptyArray(F.__debug_options__.events)||F.arr.any(F.__debug_options__.events,function(name){return F.str.contains(eventName,name);}));args=args||[];args.unshift(this);return $.Deferred(function(d){var evt=$.Event(eventName);if(self.o.stopPropagation==true){self.$el.one(eventName,function(e){e.stopPropagation();});}if(debug)console.log('FooTable:'+eventName+': ',args);self.$el.trigger(evt,args);if(evt.isDefaultPrevented()){if(debug)console.log('FooTable: default prevented for the "'+eventName+'" event.');d.reject(evt);}else d.resolve(evt);});},/**
		 * Attempts to retrieve the instance of the supplied component type for this instance.
		 * @this FooTable.Table
		 * @instance
		 * @param {object} type - The content type to retrieve for this instance.
		 * @returns {(*|null)}
		 */use:function use(type){for(var i=0,len=this.components.length;i<len;i++){if(this.components[i]instanceof type)return this.components[i];}return null;},/**
		 * Performs the drawing of the table.
		 * @this FooTable.Table
		 * @instance
		 * @protected
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Table#"predraw.ft.table"
		 * @fires FooTable.Table#"draw.ft.table"
		 * @fires FooTable.Table#"postdraw.ft.table"
		 */draw:function draw(){var self=this;// Clone the current table and insert it into the original's place
var $elCopy=self.$el.clone().insertBefore(self.$el);// Detach `self.$el` from the DOM, retaining its event handlers
self.$el.detach();// when drawing the order that the components are executed is important so chain the methods but use promises to retain async safety.
return self.execute(false,true,'predraw').then(function(){/**
				 * The predraw.ft.table event is raised after all core components and add-ons have executed there predraw functions but before they execute there draw functions.
				 * @event FooTable.Table#"predraw.ft.table"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 */return self.raise('predraw.ft.table').then(function(){return self.execute(false,true,'draw').then(function(){/**
						 * The draw.ft.table event is raised after all core components and add-ons have executed there draw functions.
						 * @event FooTable.Table#"draw.ft.table"
						 * @param {jQuery.Event} e - The jQuery.Event object for the event.
						 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
						 */return self.raise('draw.ft.table').then(function(){return self.execute(false,true,'postdraw').then(function(){/**
								 * The postdraw.ft.table event is raised after all core components and add-ons have executed there postdraw functions.
								 * @event FooTable.Table#"postdraw.ft.table"
								 * @param {jQuery.Event} e - The jQuery.Event object for the event.
								 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
								 */return self.raise('postdraw.ft.table');});});});});}).fail(function(err){if(F.is.error(err)){console.error('FooTable: unhandled error thrown during a draw operation.',err);}}).always(function(){// Replace the copy that we added above with the modified `self.$el`
$elCopy.replaceWith(self.$el);self.$loader.remove();});},/**
		 * Executes the specified method with the optional number of parameters on all components and waits for the promise from each to be resolved before executing the next.
		 * @this FooTable.Table
		 * @instance
		 * @protected
		 * @param {boolean} reverse - Whether or not to execute the component methods in the reverse order to what they were registered in.
		 * @param {boolean} enabled - Whether or not to execute the method on enabled components only.
		 * @param {string} methodName - The name of the method to execute.
		 * @param {*} [param1] - The first parameter for the method.
		 * @param {...*} [paramN] - Any number of additional parameters for the method.
		 * @returns {jQuery.Promise}
		 */execute:function execute(reverse,enabled,methodName,param1,paramN){var self=this,args=Array.prototype.slice.call(arguments);reverse=args.shift();enabled=args.shift();var components=enabled?F.arr.get(self.components,function(c){return c.enabled;}):self.components.slice(0);args.unshift(reverse?components.reverse():components);return self._execute.apply(self,args);},/**
		 * Executes the specified method with the optional number of parameters on all supplied components waiting for the result of each before executing the next.
		 * @this FooTable.Table
		 * @instance
		 * @private
		 * @param {Array.<FooTable.Component>} components - The components to call the method on.
		 * @param {string} methodName - The name of the method to execute
		 * @param {*} [param1] - The first parameter for the method.
		 * @param {...*} [paramN] - Any additional parameters for the method.
		 * @returns {jQuery.Promise}
		 */_execute:function _execute(components,methodName,param1,paramN){if(!components||!components.length)return $.when();var self=this,args=Array.prototype.slice.call(arguments),component;components=args.shift();methodName=args.shift();component=components.shift();if(!F.is.fn(component[methodName]))return self._execute.apply(self,[components,methodName].concat(args));return $.Deferred(function(d){try{var result=component[methodName].apply(component,args);if(F.is.promise(result)){return result.then(d.resolve,d.reject);}else{d.resolve(result);}}catch(err){d.reject(err);}}).then(function(){return self._execute.apply(self,[components,methodName].concat(args));});},/**
		 * Listens to the window resize event and performs a check to see if the breakpoint has changed.
		 * @this window
		 * @instance
		 * @private
		 * @fires FooTable.Table#"resize.ft.table"
		 */_onWindowResize:function _onWindowResize(e){var self=e.data.self;if(self._resizeTimeout!=null){clearTimeout(self._resizeTimeout);}self._resizeTimeout=setTimeout(function(){self._resizeTimeout=null;/**
				 * The resize event is raised a short time after window resize operations cease.
				 * @event FooTable.Table#"resize.ft.table"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 */self.raise('resize.ft.table').then(function(){self.breakpoints.check();});},300);}});})(jQuery,FooTable);(function($,F){F.ArrayColumn=F.Column.extend(/** @lends FooTable.ArrayColumn */{/**
		 * @summary A column to handle Array values.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 */construct:function construct(instance,definition){this._super(instance,definition,'array');},/**
		 * @summary Parses the supplied value or element to retrieve a column value.
		 * @description This is supplied either the cell value or jQuery object to parse. This method will return either the Array containing the values or null.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(array|null)}
		 */parser:function parser(valueOrElement){if(F.is.element(valueOrElement)||F.is.jq(valueOrElement)){// use jQuery to get the value
var $el=$(valueOrElement),data=$el.data('value');// .data() will automatically convert a JSON string to an array
if(F.is.array(data))return data;data=$el.html();try{data=JSON.parse(data);}catch(err){data=null;}return F.is.array(data)?data:null;// if we have an array return it
}if(F.is.array(valueOrElement))return valueOrElement;// if we have an array return it
return null;// otherwise we have no value so return null
},/**
		 * @summary Formats the column value and creates the HTML seen within a cell.
		 * @description This is supplied the value retrieved from the {@link FooTable.ArrayColumn#parser} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {?Array} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 */formatter:function formatter(value,options,rowData){return F.is.array(value)?JSON.stringify(value):'';}});F.columns.register('array',F.ArrayColumn);})(jQuery,FooTable);(function($,F){if(F.is.undef(window.moment)){// The DateColumn requires moment.js to parse and format date values. Goto http://momentjs.com/ to get it.
return;}F.DateColumn=F.Column.extend(/** @lends FooTable.DateColumn */{/**
		 * The date column class is used to handle date values. This column is dependent on [moment.js]{@link http://momentjs.com/} to provide date parsing and formatting functionality.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.DateColumn}
		 */construct:function construct(instance,definition){this._super(instance,definition,'date');/**
			 * The format string to use when parsing and formatting dates.
			 * @instance
			 * @type {string}
			 */this.formatString=F.is.string(definition.formatString)?definition.formatString:'MM-DD-YYYY';},/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.DateColumn#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(moment|null)}
		 * @this FooTable.DateColumn
		 */parser:function parser(valueOrElement){if(F.is.element(valueOrElement)||F.is.jq(valueOrElement)){var data=$(valueOrElement).data('value');valueOrElement=F.is.defined(data)?data:$(valueOrElement).text();if(F.is.string(valueOrElement))valueOrElement=isNaN(valueOrElement)?valueOrElement:+valueOrElement;}if(F.is.date(valueOrElement))return moment(valueOrElement);if(F.is.object(valueOrElement)&&F.is["boolean"](valueOrElement._isAMomentObject))return valueOrElement;if(F.is.string(valueOrElement)){// if it looks like a number convert it and do nothing else otherwise create a new moment using the string value and formatString
if(isNaN(valueOrElement)){return moment(valueOrElement,this.formatString);}else{valueOrElement=+valueOrElement;}}if(F.is.number(valueOrElement)){return moment(valueOrElement);}return null;},/**
		 * This is supplied the value retrieved from the {@link FooTable.DateColumn#parser} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {*} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @this FooTable.DateColumn
		 */formatter:function formatter(value,options,rowData){return F.is.object(value)&&F.is["boolean"](value._isAMomentObject)&&value.isValid()?value.format(this.formatString):'';},/**
		 * This is supplied either the cell value or jQuery object to parse. A string value must be returned from this method and will be used during filtering operations.
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {string}
		 * @this FooTable.DateColumn
		 */filterValue:function filterValue(valueOrElement){// if we have an element or a jQuery object use jQuery to get the value
if(F.is.element(valueOrElement)||F.is.jq(valueOrElement))valueOrElement=$(valueOrElement).data('filterValue')||$(valueOrElement).text();// if options are supplied with the value
if(F.is.hash(valueOrElement)&&F.is.hash(valueOrElement.options)){if(F.is.string(valueOrElement.options.filterValue))valueOrElement=valueOrElement.options.filterValue;if(F.is.defined(valueOrElement.value))valueOrElement=valueOrElement.value;}// if the value is a moment object just return the formatted value
if(F.is.object(valueOrElement)&&F.is["boolean"](valueOrElement._isAMomentObject))return valueOrElement.format(this.formatString);// if its a string
if(F.is.string(valueOrElement)){// if its not a number return it
if(isNaN(valueOrElement)){return valueOrElement;}else{// otherwise convert it and carry on
valueOrElement=+valueOrElement;}}// if the value is a number or date convert to a moment object and return the formatted result.
if(F.is.number(valueOrElement)||F.is.date(valueOrElement)){return moment(valueOrElement).format(this.formatString);}// try use the native toString of the value if its not undefined or null
if(F.is.defined(valueOrElement)&&valueOrElement!=null)return valueOrElement+'';return'';// otherwise we have no value so return an empty string
}});F.columns.register('date',F.DateColumn);})(jQuery,FooTable);(function($,F){F.HTMLColumn=F.Column.extend(/** @lends FooTable.HTMLColumn */{/**
		 * The HTML column class is used to handle any raw HTML columns.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.HTMLColumn}
		 */construct:function construct(instance,definition){this._super(instance,definition,'html');},/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.HTMLColumn#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(jQuery|null)}
		 * @this FooTable.HTMLColumn
		 */parser:function parser(valueOrElement){if(F.is.string(valueOrElement))valueOrElement=$($.trim(valueOrElement));if(F.is.element(valueOrElement))valueOrElement=$(valueOrElement);if(F.is.jq(valueOrElement)){var tagName=valueOrElement.prop('tagName').toLowerCase();if(tagName=='td'||tagName=='th'){var data=valueOrElement.data('value');return F.is.defined(data)?data:valueOrElement.contents();}return valueOrElement;}return null;}});F.columns.register('html',F.HTMLColumn);})(jQuery,FooTable);(function($,F){F.NumberColumn=F.Column.extend(/** @lends FooTable.NumberColumn */{/**
		 * The number column class is used to handle simple number columns.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.NumberColumn}
		 */construct:function construct(instance,definition){this._super(instance,definition,'number');this.decimalSeparator=F.is.string(definition.decimalSeparator)?definition.decimalSeparator:'.';this.thousandSeparator=F.is.string(definition.thousandSeparator)?definition.thousandSeparator:',';this.decimalSeparatorRegex=new RegExp(F.str.escapeRegExp(this.decimalSeparator),'g');this.thousandSeparatorRegex=new RegExp(F.str.escapeRegExp(this.thousandSeparator),'g');this.cleanRegex=new RegExp('[^\-0-9'+F.str.escapeRegExp(this.decimalSeparator)+']','g');},/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.Column#formatter} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(number|null)}
		 * @this FooTable.NumberColumn
		 */parser:function parser(valueOrElement){if(F.is.element(valueOrElement)||F.is.jq(valueOrElement)){var data=$(valueOrElement).data('value');valueOrElement=F.is.defined(data)?data:$(valueOrElement).text().replace(this.cleanRegex,'');}if(F.is.string(valueOrElement)){valueOrElement=valueOrElement.replace(this.thousandSeparatorRegex,'').replace(this.decimalSeparatorRegex,'.');valueOrElement=parseFloat(valueOrElement);}if(F.is.number(valueOrElement))return valueOrElement;return null;},/**
		 * This is supplied the value retrieved from the {@link FooTable.NumberColumn#parse} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {number} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @this FooTable.NumberColumn
		 */formatter:function formatter(value,options,rowData){if(value==null)return'';var s=(value+'').split('.');if(s.length==2&&s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,this.thousandSeparator);}return s.join(this.decimalSeparator);}});F.columns.register('number',F.NumberColumn);})(jQuery,FooTable);(function($,F){F.ObjectColumn=F.Column.extend(/** @lends FooTable.ObjectColumn */{/**
		 * @summary A column to handle Object values.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 */construct:function construct(instance,definition){this._super(instance,definition,'object');},/**
		 * @summary Parses the supplied value or element to retrieve a column value.
		 * @description This is supplied either the cell value or jQuery object to parse. This method will return either the Object containing the values or null.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(object|null)}
		 */parser:function parser(valueOrElement){if(F.is.element(valueOrElement)||F.is.jq(valueOrElement)){// use jQuery to get the value
var $el=$(valueOrElement),data=$el.data('value');// .data() will automatically convert a JSON string to an object
if(F.is.object(data))return data;data=$el.html();try{data=JSON.parse(data);}catch(err){data=null;}return F.is.object(data)?data:null;// if we have an object return it
}if(F.is.object(valueOrElement))return valueOrElement;// if we have an object return it
return null;// otherwise we have no value so return null
},/**
		 * @summary Formats the column value and creates the HTML seen within a cell.
		 * @description This is supplied the value retrieved from the {@link FooTable.ObjectColumn#parser} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {*} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 */formatter:function formatter(value,options,rowData){return F.is.object(value)?JSON.stringify(value):'';}});F.columns.register('object',F.ObjectColumn);})(jQuery,FooTable);(function($,F){F.Breakpoint=F.Class.extend(/** @lends FooTable.Breakpoint */{/**
		 * The breakpoint class containing the name and maximum width for the breakpoint.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {string} name - The name of the breakpoint. Must contain no spaces or special characters.
		 * @param {number} width - The width of the breakpoint in pixels.
		 * @returns {FooTable.Breakpoint}
		 */construct:function construct(name,width){/**
			 * The name of the breakpoint.
			 * @type {string}
			 */this.name=name;/**
			 * The maximum width of the breakpoint in pixels.
			 * @type {number}
			 */this.width=width;}});})(jQuery,FooTable);(function($,F){F.Breakpoints=F.Component.extend(/** @lends FooTable.Breakpoints */{/**
		 * Contains the logic to calculate and apply breakpoints for the plugin.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @returns {FooTable.Breakpoints}
		 */construct:function construct(table){// call the base class constructor
this._super(table,true);/* PROTECTED */ /**
			 * This provides a shortcut to the {@link FooTable.Table#options} object.
			 * @protected
			 * @type {FooTable.Table#options}
			 */this.o=table.o;/* PUBLIC */ /**
			 * The current breakpoint.
			 * @type {FooTable.Breakpoint}
			 */this.current=null;/**
			 * An array of {@link FooTable.Breakpoint} objects created from parsing the options.
			 * @type {Array.<FooTable.Breakpoint>}
			 */this.array=[];/**
			 * Whether or not breakpoints cascade. When set to true all breakpoints larger than the current will be hidden along with it.
			 * @type {boolean}
			 */this.cascade=this.o.cascade;/**
			 * Whether or not to calculate breakpoints on the width of the parent element rather than the viewport.
			 * @type {boolean}
			 */this.useParentWidth=this.o.useParentWidth;/**
			 * This value is updated each time the current breakpoint changes and contains a space delimited string of the names of the current breakpoint and all those smaller than it.
			 * @type {string}
			 */this.hidden=null;/* PRIVATE */ /**
			 * This value is set once when the {@link FooTable.Breakpoints#array} is generated and contains a space delimited string of all the breakpoint class names.
			 * @type {string}
			 * @private
			 */this._classNames='';// check if a function was supplied to override the default getWidth
this.getWidth=F.checkFnValue(this,this.o.getWidth,this.getWidth);},/* PROTECTED */ /**
		 * Checks the supplied data and options for the breakpoints component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Breakpoints#"preinit.ft.breakpoints"
		 */preinit:function preinit(data){var self=this;/**
			 * The preinit.ft.breakpoints event is raised before any UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Breakpoints#"preinit.ft.breakpoints"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */return this.ft.raise('preinit.ft.breakpoints',[data]).then(function(){self.cascade=F.is["boolean"](data.cascade)?data.cascade:self.cascade;self.o.breakpoints=F.is.hash(data.breakpoints)?data.breakpoints:self.o.breakpoints;self.getWidth=F.checkFnValue(self,data.getWidth,self.getWidth);if(self.o.breakpoints==null)self.o.breakpoints={"xs":480,"sm":768,"md":992,"lg":1200};// Create a nice friendly array to work with out of the breakpoints object.
for(var name in self.o.breakpoints){if(!self.o.breakpoints.hasOwnProperty(name))continue;self.array.push(new F.Breakpoint(name,self.o.breakpoints[name]));self._classNames+='breakpoint-'+name+' ';}// Sort the breakpoints so the largest is checked first
self.array.sort(function(a,b){return b.width-a.width;});});},/**
		 * Initializes the class parsing the options into a sorted array of {@link FooTable.Breakpoint} objects.
		 * @instance
		 * @protected
		 * @fires FooTable.Breakpoints#"init.ft.breakpoints"
		 */init:function init(){var self=this;/**
			 * The init.ft.breakpoints event is raised before any UI is generated.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Breakpoints#"init.ft.breakpoints"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */return this.ft.raise('init.ft.breakpoints').then(function(){self.current=self.get();});},/**
		 * Whenever the table is drawn this ensures the correct breakpoint class is applied to the table.
		 * @instance
		 * @protected
		 */draw:function draw(){this.ft.$el.removeClass(this._classNames).addClass('breakpoint-'+this.current.name);},/* PUBLIC */ /**
		 * Calculates the current breakpoint from the {@link FooTable.Breakpoints#array} and sets the {@link FooTable.Breakpoints#current} property.
		 * @instance
		 * @returns {FooTable.Breakpoint}
		 */calculate:function calculate(){var self=this,current=null,hidden=[],breakpoint,prev=null,width=self.getWidth();for(var i=0,len=self.array.length;i<len;i++){breakpoint=self.array[i];// if the width is smaller than the smallest breakpoint set the smallest as the current.
// if the width is larger than the largest breakpoint set the largest as the current.
// otherwise if the width is somewhere in between check all breakpoints testing if the width
// is greater than the current but smaller than the previous.
if(!current&&i==len-1||width>=breakpoint.width&&(prev instanceof F.Breakpoint?width<prev.width:true)){current=breakpoint;}if(!current)hidden.push(breakpoint.name);prev=breakpoint;}hidden.push(current.name);self.hidden=hidden.join(' ');return current;},/**
		 * Supplied a columns breakpoints this returns a boolean value indicating whether or not the column is visible.
		 * @param {string} breakpoints - A space separated string of breakpoint names.
		 * @returns {boolean}
		 */visible:function visible(breakpoints){if(F.is.emptyString(breakpoints))return true;if(breakpoints==='all')return false;var parts=breakpoints.split(' '),i=0,len=parts.length;for(;i<len;i++){if(this.cascade?F.str.containsWord(this.hidden,parts[i]):parts[i]==this.current.name)return false;}return true;},/**
		 * Performs a check between the current breakpoint and the previous breakpoint and performs a redraw if they differ.
		 * @instance
		 * @fires FooTable.Breakpoints#"before.ft.breakpoints"
		 * @fires FooTable.Breakpoints#"after.ft.breakpoints"
		 */check:function check(){var self=this,bp=self.get();if(!(bp instanceof F.Breakpoint)||bp==self.current)return;/**
			 * The before.ft.breakpoints event is raised if the breakpoint has changed but before the UI is redrawn and is supplied both the current breakpoint
			 * and the next "new" one that is about to be applied.
			 * Calling preventDefault on this event will prevent the next breakpoint from being applied.
			 * @event FooTable.Breakpoints#"before.ft.breakpoints"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Breakpoint} current - The current breakpoint.
			 * @param {FooTable.Breakpoint} next - The breakpoint that is about to be applied.
			 */self.ft.raise('before.ft.breakpoints',[self.current,bp]).then(function(){var previous=self.current;self.current=bp;return self.ft.draw().then(function(){/**
					 * The after.ft.breakpoints event is raised after the breakpoint has changed and the UI is redrawn and is supplied both the "new" current breakpoint
					 * and the previous one that was replaced.
					 * @event FooTable.Breakpoints#"after.ft.breakpoints"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Breakpoint} current - The current breakpoint.
					 * @param {FooTable.Breakpoint} previous - The breakpoint that was just replaced.
					 */self.ft.raise('after.ft.breakpoints',[self.current,previous]);});});},/**
		 * Attempts to return a {@link FooTable.Breakpoint} instance when passed a {@link FooTable.Breakpoint},
		 * the {@link FooTable.Breakpoint#name} string or if nothing is supplied the current breakpoint.
		 * @instance
		 * @param {(FooTable.Breakpoint|string|number)} [breakpoint] - The breakpoint to retrieve.
		 * @returns {FooTable.Breakpoint}
		 */get:function get(breakpoint){if(F.is.undef(breakpoint))return this.calculate();if(breakpoint instanceof F.Breakpoint)return breakpoint;if(F.is.string(breakpoint))return F.arr.first(this.array,function(bp){return bp.name==breakpoint;});if(F.is.number(breakpoint))return breakpoint>=0&&breakpoint<this.array.length?this.array[breakpoint]:null;return null;},/**
		 * Gets the width used to determine breakpoints whether it be from the viewport, parent or a custom function.
		 * @instance
		 * @returns {number}
		 */getWidth:function getWidth(){if(F.is.fn(this.o.getWidth))return this.o.getWidth(this.ft);if(this.useParentWidth==true)return this.getParentWidth();return this.getViewportWidth();},/**
		 * Gets the tables direct parents width.
		 * @instance
		 * @returns {number}
		 */getParentWidth:function getParentWidth(){return this.ft.$el.parent().width();},/**
		 * Gets the current viewport width.
		 * @instance
		 * @returns {number}
		 */getViewportWidth:function getViewportWidth(){return Math.max(document.documentElement.clientWidth,window.innerWidth,0);}});F.components.register('breakpoints',F.Breakpoints,1000);})(jQuery,FooTable);(function(F){/**
	 * A space delimited string of breakpoint names that specify when the column will be hidden. You can also specify "all" to make a column permanently display in an expandable detail row.
	 * @type {string}
	 * @default null
	 * @example <caption>The below shows how this value would be set</caption>
	 * breakpoints: "md"
	 */F.Column.prototype.breakpoints=null;F.Column.prototype.__breakpoints_define__=function(definition){this.breakpoints=F.is.emptyString(definition.breakpoints)?null:definition.breakpoints;};F.Column.extend('define',function(definition){this._super(definition);this.__breakpoints_define__(definition);});})(FooTable);(function(F){/**
	 * An object containing the breakpoints for the plugin.
	 * @type {object.<string, number>}
	 * @default { "xs": 480, "sm": 768, "md": 992, "lg": 1200 }
	 */F.Defaults.prototype.breakpoints=null;/**
	 * Whether or not breakpoints cascade. When set to true all breakpoints larger than the current will also be hidden along with it.
	 * @type {boolean}
	 * @default false
	 */F.Defaults.prototype.cascade=false;/**
	 * Whether or not to calculate breakpoints on the width of the parent element rather than the viewport.
	 * @type {boolean}
	 * @default false
	 */F.Defaults.prototype.useParentWidth=false;/**
	 * A function used to override the default getWidth function with a custom one.
	 * @type {function}
	 * @default null
	 * @example <caption>The below shows what the default getWidth function would look like.</caption>
	 * getWidth: function(instance){
	 * 	if (instance.o.useParentWidth == true) return instance.$el.parent().width();
	 * 	return instance.breakpoints.getViewportWidth();
	 * }
	 */F.Defaults.prototype.getWidth=null;})(FooTable);(function($,F){F.Columns=F.Component.extend(/** @lends FooTable.Columns */{/**
		 * The columns class contains all the logic for handling columns.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @returns {FooTable.Columns}
		 */construct:function construct(table){// call the base class constructor
this._super(table,true);/* PROTECTED */ /**
			 * This provides a shortcut to the {@link FooTable.Table#options} object.
			 * @protected
			 * @type {FooTable.Table#options}
			 */this.o=table.o;/* PUBLIC */ /**
			 * An array of {@link FooTable.Column} objects created from parsing the options and/or DOM.
			 * @type {Array.<FooTable.Column>}
			 */this.array=[];/**
			 * The jQuery header row object.
			 * @type {jQuery}
			 */this.$header=null;/**
			 * Whether or not to display the header row.
			 * @type {boolean}
			 */this.showHeader=table.o.showHeader;this._fromHTML=F.is.emptyArray(table.o.columns)&&!F.is.promise(table.o.columns);},/* PROTECTED */ /**
		 * This parses the columns from either the tables rows or the supplied options.
		 * @instance
		 * @protected
		 * @param {object} data - The tables jQuery data object.
		 * @returns {jQuery.Promise}
		 * @this FooTable.Columns
		 */parse:function parse(data){var self=this;return $.Deferred(function(d){function merge(cols1,cols2){var merged=[];// check if either of the arrays is empty as it can save us having to merge them by index.
if(cols1.length==0||cols2.length==0){merged=cols1.concat(cols2);}else{// at this point we have two arrays of column definitions, we now need to merge them based on there index properties
// first figure out the highest column index provided so we can loop that many times to merge all columns and provide
// defaults where nothing was specified (fill in the gaps in the array as it were).
var highest=0;F.arr.each(cols1.concat(cols2),function(c){if(c.index>highest)highest=c.index;});highest++;for(var i=0,cols1_c,cols2_c;i<highest;i++){cols1_c={};F.arr.each(cols1,function(c){if(c.index==i){cols1_c=c;return false;}});cols2_c={};F.arr.each(cols2,function(c){if(c.index==i){cols2_c=c;return false;}});merged.push($.extend(true,{},cols1_c,cols2_c));}}return merged;}var json=[],html=[];// get the column options from the content
var $header=self.ft.$el.find('tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first').first(),$cell,cdata;if($header.length>0){var virtual=$header.parent().is('tbody')&&$header.children().length==$header.children('td').length;if(!virtual)self.$header=$header.addClass('footable-header');$header.children('td,th').each(function(i,cell){$cell=$(cell);cdata=$cell.data();cdata.index=i;cdata.$el=$cell;cdata.virtual=virtual;html.push(cdata);});if(virtual)self.showHeader=false;}// get the supplied column options
if(F.is.array(self.o.columns)&&!F.is.emptyArray(self.o.columns)){F.arr.each(self.o.columns,function(c,i){c.index=i;json.push(c);});self.parseFinalize(d,merge(json,html));}else if(F.is.promise(self.o.columns)){self.o.columns.then(function(cols){F.arr.each(cols,function(c,i){c.index=i;json.push(c);});self.parseFinalize(d,merge(json,html));},function(xhr){d.reject(Error('Columns ajax request error: '+xhr.status+' ('+xhr.statusText+')'));});}else{self.parseFinalize(d,merge(json,html));}});},/**
		 * Used to finalize the parsing of columns it is supplied the parse deferred object which must be resolved with an array of {@link FooTable.Column} objects
		 * or rejected with an error.
		 * @instance
		 * @protected
		 * @param {jQuery.Deferred} deferred - The deferred object used for parsing.
		 * @param {Array.<object>} cols - An array of all merged column definitions.
		 */parseFinalize:function parseFinalize(deferred,cols){// we now have a merged array of all column definitions supplied to the plugin, time to make the objects.
var self=this,columns=[],column;F.arr.each(cols,function(def){// if we have a column registered using the definition type then create an instance of that column otherwise just create a default text column.
if(column=F.columns.contains(def.type)?F.columns.make(def.type,self.ft,def):new F.Column(self.ft,def))columns.push(column);});if(F.is.emptyArray(columns)){deferred.reject(Error("No columns supplied."));}else{// make sure to sort by the column index as the merge process may have mixed them up
columns.sort(function(a,b){return a.index-b.index;});deferred.resolve(columns);}},/**
		 * The columns preinit method is used to parse and check the column options supplied from both static content and through the constructor.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the root table element.
		 * @this FooTable.Columns
		 */preinit:function preinit(data){var self=this;/**
			 * The preinit.ft.columns event is raised before any UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Columns#"preinit.ft.columns"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */return self.ft.raise('preinit.ft.columns',[data]).then(function(){return self.parse(data).then(function(columns){self.array=columns;self.showHeader=F.is["boolean"](data.showHeader)?data.showHeader:self.showHeader;});});},/**
		 * Initializes the columns creating the table header if required.
		 * @instance
		 * @protected
		 * @fires FooTable.Columns#"init.ft.columns"
		 * @this FooTable.Columns
		 */init:function init(){var self=this;/**
			 * The init.ft.columns event is raised after the header row is created/parsed for column data.
			 * @event FooTable.Columns#"init.ft.columns"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} instance - The instance of the plugin raising the event.
			 * @param {Array.<FooTable.Column>} columns - The array of {@link FooTable.Column} objects parsed from the options and/or DOM.
			 */return this.ft.raise('init.ft.columns',[self.array]).then(function(){self.$create();});},/**
		 * Destroys the columns component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Columns#"destroy.ft.columns"
		 */destroy:function destroy(){/**
			 * The destroy.ft.columns event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Columns#"destroy.ft.columns"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */var self=this;this.ft.raise('destroy.ft.columns').then(function(){if(!self._fromHTML)self.$header.remove();});},/**
		 * The predraw method called from within the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @this FooTable.Columns
		 */predraw:function predraw(){var self=this,first=true;self.visibleColspan=0;self.firstVisibleIndex=0;self.lastVisibleIndex=0;self.hasHidden=false;F.arr.each(self.array,function(col){col.hidden=!self.ft.breakpoints.visible(col.breakpoints);if(!col.hidden&&col.visible){if(first){self.firstVisibleIndex=col.index;first=false;}self.lastVisibleIndex=col.index;self.visibleColspan++;}if(col.hidden)self.hasHidden=true;});self.ft.$el.toggleClass('breakpoint',self.hasHidden);},/**
		 * Performs the actual drawing of the columns, hiding or displaying them depending on there breakpoints.
		 * @instance
		 * @protected
		 * @this FooTable.Columns
		 */draw:function draw(){F.arr.each(this.array,function(col){col.$el.css('display',col.hidden||!col.visible?'none':'table-cell');});if(!this.showHeader&&F.is.jq(this.$header.parent())){this.$header.detach();}},/**
		 * Creates the header row for the table from the parsed column definitions.
		 * @instance
		 * @protected
		 * @this FooTable.Columns
		 */$create:function $create(){var self=this;self.$header=F.is.jq(self.$header)?self.$header:$('<tr/>',{'class':'footable-header'});self.$header.children('th,td').detach();F.arr.each(self.array,function(col){self.$header.append(col.$el);});if(self.showHeader&&!F.is.jq(self.$header.parent())){self.ft.$el.children('thead').append(self.$header);}},/**
		 * Attempts to return a {@link FooTable.Column} instance when passed the {@link FooTable.Column} instance, the {@link FooTable.Column#name} string or the {@link FooTable.Column#index} number.
		 * If supplied a function this will return an array by iterating all columns passing the index and column itself to the supplied callback as arguments.
		 * Returning true in the callback will include the column in the result.
		 * @instance
		 * @param {(FooTable.Column|string|number|function)} column - The column to retrieve.
		 * @returns {(Array.<FooTable.Column>|FooTable.Column|null)} The column if one is found otherwise it returns NULL.
		 * @example <caption>This example shows retrieving a column by name assuming a column called "id" exists. The <code>columns</code> object is an instance of {@link FooTable.Columns}.</caption>
		 * var column = columns.get('id');
		 * if (column instanceof FooTable.Column){
		 * 	// found the "id" column
		 * } else {
		 * 	// no column with a name of "id" exists
		 * }
		 * // to get an array of all hidden columns
		 * var columns = columns.get(function(col){
		 *  return col.hidden;
		 * });
		 */get:function get(column){if(column instanceof F.Column)return column;if(F.is.string(column))return F.arr.first(this.array,function(col){return col.name==column;});if(F.is.number(column))return F.arr.first(this.array,function(col){return col.index==column;});if(F.is.fn(column))return F.arr.get(this.array,column);return null;},/**
		 * Takes an array of column names, index's or actual {@link FooTable.Column} and ensures that an array of only {@link FooTable.Column} is returned.
		 * @instance
		 * @param {(Array.<string>|Array.<number>|Array.<FooTable.Column>)} columns - The array of column names, index's or {@link FooTable.Column} to check.
		 * @returns {Array.<FooTable.Column>}
		 */ensure:function ensure(columns){var self=this,result=[];if(!F.is.array(columns))return result;F.arr.each(columns,function(name){result.push(self.get(name));});return result;}});F.components.register('columns',F.Columns,900);})(jQuery,FooTable);(function(F){/**
	 * An array containing the column options or a jQuery promise that resolves returning the columns. The index of the definitions must match the index of each column as it should appear in the table. For more information on the options available see the {@link FooTable.Column} object.
	 * @type {(Array.<object>|jQuery.Promise)}
	 * @default []
	 * @example <caption>The below shows column definitions for a row defined as <code>{ id: Number, name: String, age: Number }</code>. The ID column has a fixed width, the table is initially sorted on the Name column and the Age column will be hidden on phones.</caption>
	 * columns: [
	 * 	{ name: 'id', title: 'ID', type: 'number' },
	 *	{ name: 'name', title: 'Name', sorted: true, direction: 'ASC' }
	 *	{ name: 'age', title: 'Age', type: 'number', breakpoints: 'xs' }
	 * ]
	 */F.Defaults.prototype.columns=[];/**
	 * Specifies whether or not the column headers should be displayed.
	 * @type {boolean}
	 * @default true
	 */F.Defaults.prototype.showHeader=true;})(FooTable);(function($,F){F.Rows=F.Component.extend(/** @lends FooTable.Rows */{/**
		 * The rows class contains all the logic for handling rows.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @returns {FooTable.Rows}
		 */construct:function construct(table){// call the base class constructor
this._super(table,true);/**
			 * This provides a shortcut to the {@link FooTable.Table#options} object.
			 * @instance
			 * @protected
			 * @type {FooTable.Table#options}
			 */this.o=table.o;/**
			 * The current working array of {@link FooTable.Row} objects.
			 * @instance
			 * @protected
			 * @type {Array.<FooTable.Row>}
			 * @default []
			 */this.array=[];/**
			 * The base array of rows parsed from either the DOM or the constructor options.
			 * The {@link FooTable.Rows#current} member is populated with a shallow clone of this array
			 * during the predraw operation before any core or custom components are executed.
			 * @instance
			 * @protected
			 * @type {Array.<FooTable.Row>}
			 * @default []
			 */this.all=[];/**
			 * Whether or not to display a toggle in each row when it contains hidden columns.
			 * @type {boolean}
			 * @default true
			 */this.showToggle=table.o.showToggle;/**
			 * The CSS selector used to filter row click events. If the event.target property matches the selector the row will be toggled.
			 * @type {string}
			 * @default "tr,td,.footable-toggle"
			 */this.toggleSelector=table.o.toggleSelector;/**
			 * Specifies which column the row toggle is appended to. Supports only two values; "first" and "last"
			 * @type {string}
			 */this.toggleColumn=table.o.toggleColumn;/**
			 * The text to display when the table has no rows.
			 * @type {string}
			 */this.emptyString=table.o.empty;/**
			 * Whether or not the first rows details are expanded by default when displayed on a device that hides any columns.
			 * @type {boolean}
			 */this.expandFirst=table.o.expandFirst;/**
			 * Whether or not all row details are expanded by default when displayed on a device that hides any columns.
			 * @type {boolean}
			 */this.expandAll=table.o.expandAll;/**
			 * The jQuery object that contains the empty row control.
			 * @type {jQuery}
			 */this.$empty=null;this._fromHTML=F.is.emptyArray(table.o.rows)&&!F.is.promise(table.o.rows);},/**
		 * This parses the rows from either the tables rows or the supplied options.
		 * @instance
		 * @protected
		 * @returns {jQuery.Promise}
		 */parse:function parse(){var self=this;return $.Deferred(function(d){var $rows=self.ft.$el.children('tbody').children('tr');if(F.is.array(self.o.rows)&&self.o.rows.length>0){self.parseFinalize(d,self.o.rows);}else if(F.is.promise(self.o.rows)){self.o.rows.then(function(rows){self.parseFinalize(d,rows);},function(xhr){d.reject(Error('Rows ajax request error: '+xhr.status+' ('+xhr.statusText+')'));});}else if(F.is.jq($rows)){self.parseFinalize(d,$rows);$rows.detach();}else{self.parseFinalize(d,[]);}});},/**
		 * Used to finalize the parsing of rows it is supplied the parse deferred object which must be resolved with an array of {@link FooTable.Row} objects
		 * or rejected with an error.
		 * @instance
		 * @protected
		 * @param {jQuery.Deferred} deferred - The deferred object used for parsing.
		 * @param {(Array.<object>|jQuery)} rows - An array of row values and options or the jQuery object containing all rows.
		 */parseFinalize:function parseFinalize(deferred,rows){var self=this,result=$.map(rows,function(r){return new F.Row(self.ft,self.ft.columns.array,r);});deferred.resolve(result);},/**
		 * The columns preinit method is used to parse and check the column options supplied from both static content and through the constructor.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the root table element.
		 * @fires FooTable.Rows#"preinit.ft.rows"
		 */preinit:function preinit(data){var self=this;/**
			 * The preinit.ft.rows event is raised before any UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Rows#"preinit.ft.rows"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */return self.ft.raise('preinit.ft.rows',[data]).then(function(){return self.parse().then(function(rows){self.all=rows;self.array=self.all.slice(0);self.showToggle=F.is["boolean"](data.showToggle)?data.showToggle:self.showToggle;self.toggleSelector=F.is.string(data.toggleSelector)?data.toggleSelector:self.toggleSelector;self.toggleColumn=F.is.string(data.toggleColumn)?data.toggleColumn:self.toggleColumn;if(self.toggleColumn!="first"&&self.toggleColumn!="last")self.toggleColumn="first";self.emptyString=F.is.string(data.empty)?data.empty:self.emptyString;self.expandFirst=F.is["boolean"](data.expandFirst)?data.expandFirst:self.expandFirst;self.expandAll=F.is["boolean"](data.expandAll)?data.expandAll:self.expandAll;});});},/**
		 * Initializes the rows class using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Rows#"init.ft.rows"
		 */init:function init(){var self=this;/**
			 * The init.ft.rows event is raised after the the rows are parsed from either the DOM or the options.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Rows#"init.ft.rows"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} instance - The instance of the plugin raising the event.
			 * @param {Array.<FooTable.Row>} rows - The array of {@link FooTable.Row} objects parsed from the DOM or the options.
			 */return self.ft.raise('init.ft.rows',[self.all]).then(function(){self.$create();});},/**
		 * Destroys the rows component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Rows#"destroy.ft.rows"
		 */destroy:function destroy(){/**
			 * The destroy.ft.rows event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Rows#"destroy.ft.rows"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */var self=this;this.ft.raise('destroy.ft.rows').then(function(){F.arr.each(self.array,function(row){row.predraw(!self._fromHTML);});self.all=self.array=[];});},/**
		 * Performs the predraw operations that are required including creating the shallow clone of the {@link FooTable.Rows#array} to work with.
		 * @instance
		 * @protected
		 */predraw:function predraw(){F.arr.each(this.array,function(row){row.predraw();});this.array=this.all.slice(0);},$create:function $create(){this.$empty=$('<tr/>',{'class':'footable-empty'}).append($('<td/>').text(this.emptyString));},/**
		 * Performs the actual drawing of the table rows.
		 * @instance
		 * @protected
		 */draw:function draw(){var self=this,$tbody=self.ft.$el.children('tbody'),first=true;// if we have rows
if(self.array.length>0){self.$empty.detach();// loop through them appending to the tbody and then drawing
F.arr.each(self.array,function(row){if(self.expandFirst&&first||self.expandAll){row.expanded=true;first=false;}row.draw($tbody);});}else{// otherwise display the $empty row
self.$empty.children('td').attr('colspan',self.ft.columns.visibleColspan);$tbody.append(self.$empty);}},/**
		 * Loads a JSON array of row objects into the table
		 * @instance
		 * @param {Array.<object>} data - An array of row objects to load.
		 * @param {boolean} [append=false] - Whether or not to append the new rows to the current rows array or to replace them entirely.
		 */load:function load(data,append){var self=this,rows=$.map(data,function(r){return new F.Row(self.ft,self.ft.columns.array,r);});F.arr.each(this.array,function(row){row.predraw();});this.all=(F.is["boolean"](append)?append:false)?this.all.concat(rows):rows;this.array=this.all.slice(0);this.ft.draw();},/**
		 * Expands all visible rows.
		 * @instance
		 */expand:function expand(){F.arr.each(this.array,function(row){row.expand();});},/**
		 * Collapses all visible rows.
		 * @instance
		 */collapse:function collapse(){F.arr.each(this.array,function(row){row.collapse();});}});F.components.register('rows',F.Rows,800);})(jQuery,FooTable);(function(F){/**
	 * An array of JSON objects containing the row data or a jQuery promise that resolves returning the row data.
	 * @type {(Array.<object>|jQuery.Promise)}
	 * @default []
	 */F.Defaults.prototype.rows=[];/**
	 * A string to display when there are no rows in the table.
	 * @type {string}
	 * @default "No results"
	 */F.Defaults.prototype.empty='No results';/**
	 * Whether or not the toggle is appended to each row.
	 * @type {boolean}
	 * @default true
	 */F.Defaults.prototype.showToggle=true;/**
	 * The CSS selector used to filter row click events. If the event.target property matches the selector the row will be toggled.
	 * @type {string}
	 * @default "tr,td,.footable-toggle"
	 */F.Defaults.prototype.toggleSelector='tr,td,.footable-toggle';/**
	 * Specifies which column to display the row toggle in. The only supported values are "first" or "last".
	 * @type {string}
	 * @default "first"
	 */F.Defaults.prototype.toggleColumn='first';/**
	 * Whether or not the first rows details are expanded by default when displayed on a device that hides any columns.
	 * @type {boolean}
	 */F.Defaults.prototype.expandFirst=false;/**
	 * Whether or not all row details are expanded by default when displayed on a device that hides any columns.
	 * @type {boolean}
	 */F.Defaults.prototype.expandAll=false;})(FooTable);(function(F){/**
	 * Loads a JSON array of row objects into the table
	 * @param {Array.<object>} data - An array of row objects to load.
	 * @param {boolean} [append=false] - Whether or not to append the new rows to the current rows array or to replace them entirely.
	 */F.Table.prototype.loadRows=function(data,append){this.rows.load(data,append);};})(FooTable);(function(F){F.Filter=F.Class.extend(/** @lends FooTable.Filter */{/**
		 * The filter object contains the query to filter by and the columns to apply it to.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {string} name - The name for the filter.
		 * @param {(string|FooTable.Query)} query - The query for the filter.
		 * @param {Array.<FooTable.Column>} columns - The columns to apply the query to.
		 * @param {string} [space="AND"] - How the query treats space chars.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @param {boolean} [hidden=true] - Whether or not this is a hidden filter.
		 * @returns {FooTable.Filter}
		 */construct:function construct(name,query,columns,space,connectors,ignoreCase,hidden){/**
			 * The name of the filter.
			 * @instance
			 * @type {string}
			 */this.name=name;/**
			 * A string specifying how the filter treats space characters. Can be either "OR" or "AND".
			 * @instance
			 * @type {string}
			 */this.space=F.is.string(space)&&(space=='OR'||space=='AND')?space:'AND';/**
			 * Whether or not to replace phrase connectors (+.-_) with spaces before executing the query.
			 * @instance
			 * @type {boolean}
			 */this.connectors=F.is["boolean"](connectors)?connectors:true;/**
			 * Whether or not ignore case when matching.
			 * @instance
			 * @type {boolean}
			 */this.ignoreCase=F.is["boolean"](ignoreCase)?ignoreCase:true;/**
			 * Whether or not this is a hidden filter.
			 * @instance
			 * @type {boolean}
			 */this.hidden=F.is["boolean"](hidden)?hidden:false;/**
			 * The query for the filter.
			 * @instance
			 * @type {(string|FooTable.Query)}
			 */this.query=query instanceof F.Query?query:new F.Query(query,this.space,this.connectors,this.ignoreCase);/**
			 * The columns to apply the query to.
			 * @instance
			 * @type {Array.<FooTable.Column>}
			 */this.columns=columns;},/**
		 * Checks if the current filter matches the supplied string.
		 * If the current query property is a string it will be auto converted to a {@link FooTable.Query} object to perform the match.
		 * @instance
		 * @param {string} str - The string to check.
		 * @returns {boolean}
		 */match:function match(str){if(!F.is.string(str))return false;if(F.is.string(this.query)){this.query=new F.Query(this.query,this.space,this.connectors,this.ignoreCase);}return this.query instanceof F.Query?this.query.match(str):false;},/**
		 * Checks if the current filter matches the supplied {@link FooTable.Row}.
		 * @instance
		 * @param {FooTable.Row} row - The row to check.
		 * @returns {boolean}
		 */matchRow:function matchRow(row){var self=this,text=F.arr.map(row.cells,function(cell){return F.arr.contains(self.columns,cell.column)?cell.filterValue:null;}).join(' ');return self.match(text);}});})(FooTable);(function($,F){F.Filtering=F.Component.extend(/** @lends FooTable.Filtering */{/**
		 * The filtering component adds a search input and column selector dropdown to the table allowing users to filter the using space delimited queries.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Filtering}
		 */construct:function construct(table){// call the constructor of the base class
this._super(table,table.o.filtering.enabled);/* PUBLIC */ /**
			 * The filters to apply to the current {@link FooTable.Rows#array}.
			 * @instance
			 * @type {Array.<FooTable.Filter>}
			 */this.filters=table.o.filtering.filters;/**
			 * The delay in milliseconds before the query is auto applied after a change.
			 * @instance
			 * @type {number}
			 */this.delay=table.o.filtering.delay;/**
			 * The minimum number of characters allowed in the search input before it is auto applied.
			 * @instance
			 * @type {number}
			 */this.min=table.o.filtering.min;/**
			 * Specifies how whitespace in a filter query is handled.
			 * @instance
			 * @type {string}
			 */this.space=table.o.filtering.space;/**
			 * Whether or not to replace phrase connectors (+.-_) with spaces before executing the query.
			 * @instance
			 * @type {boolean}
			 */this.connectors=table.o.filtering.connectors;/**
			 * Whether or not ignore case when matching.
			 * @instance
			 * @type {boolean}
			 */this.ignoreCase=table.o.filtering.ignoreCase;/**
			 * Whether or not search queries are treated as phrases when matching.
			 * @instance
			 * @type {boolean}
			 */this.exactMatch=table.o.filtering.exactMatch;/**
			 * The placeholder text to display within the search $input.
			 * @instance
			 * @type {string}
			 */this.placeholder=table.o.filtering.placeholder;/**
			 * The title to display at the top of the search input column select.
			 * @type {string}
			 */this.dropdownTitle=table.o.filtering.dropdownTitle;/**
			 * The position of the $search input within the filtering rows cell.
			 * @type {string}
			 */this.position=table.o.filtering.position;/**
			 * Whether or not to focus the search input after the search/clear button is clicked or after auto applying the search input query.
			 * @type {boolean}
			 */this.focus=table.o.filtering.focus;/**
			 * A selector specifying where to place the filtering components form, if null the form is displayed within a row in the head of the table.
			 * @type {string}
			 */this.container=table.o.filtering.container;/**
			 * The jQuery object of the element containing the entire filtering form.
			 * @instance
			 * @type {jQuery}
			 */this.$container=null;/**
			 * The jQuery row object that contains all the filtering specific elements.
			 * @instance
			 * @type {jQuery}
			 */this.$row=null;/**
			 * The jQuery cell object that contains the search input and column selector.
			 * @instance
			 * @type {jQuery}
			 */this.$cell=null;/**
			 * The jQuery form object of the form that contains the search input and column selector.
			 * @instance
			 * @type {jQuery}
			 */this.$form=null;/**
			 * The jQuery object of the column selector dropdown.
			 * @instance
			 * @type {jQuery}
			 */this.$dropdown=null;/**
			 * The jQuery object of the search input.
			 * @instance
			 * @type {jQuery}
			 */this.$input=null;/**
			 * The jQuery object of the search button.
			 * @instance
			 * @type {jQuery}
			 */this.$button=null;/* PRIVATE */ /**
			 * The timeout ID for the filter changed event.
			 * @instance
			 * @private
			 * @type {?number}
			 */this._filterTimeout=null;/**
			 * The regular expression used to check for encapsulating quotations.
			 * @instance
			 * @private
			 * @type {RegExp}
			 */this._exactRegExp=/^"(.*?)"$/;},/* PROTECTED */ /**
		 * Checks the supplied data and options for the filtering component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Filtering#"preinit.ft.filtering"
		 */preinit:function preinit(data){var self=this;/**
			 * The preinit.ft.filtering event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Filtering#"preinit.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */return self.ft.raise('preinit.ft.filtering').then(function(){// first check if filtering is enabled via the class being applied
if(self.ft.$el.hasClass('footable-filtering'))self.enabled=true;// then check if the data-filtering-enabled attribute has been set
self.enabled=F.is["boolean"](data.filtering)?data.filtering:self.enabled;// if filtering is not enabled exit early as we don't need to do anything else
if(!self.enabled)return;self.space=F.is.string(data.filterSpace)?data.filterSpace:self.space;self.min=F.is.number(data.filterMin)?data.filterMin:self.min;self.connectors=F.is["boolean"](data.filterConnectors)?data.filterConnectors:self.connectors;self.ignoreCase=F.is["boolean"](data.filterIgnoreCase)?data.filterIgnoreCase:self.ignoreCase;self.exactMatch=F.is["boolean"](data.filterExactMatch)?data.filterExactMatch:self.exactMatch;self.focus=F.is["boolean"](data.filterFocus)?data.filterFocus:self.focus;self.delay=F.is.number(data.filterDelay)?data.filterDelay:self.delay;self.placeholder=F.is.string(data.filterPlaceholder)?data.filterPlaceholder:self.placeholder;self.dropdownTitle=F.is.string(data.filterDropdownTitle)?data.filterDropdownTitle:self.dropdownTitle;self.container=F.is.string(data.filterContainer)?data.filterContainer:self.container;self.filters=F.is.array(data.filterFilters)?self.ensure(data.filterFilters):self.ensure(self.filters);if(self.ft.$el.hasClass('footable-filtering-left'))self.position='left';if(self.ft.$el.hasClass('footable-filtering-center'))self.position='center';if(self.ft.$el.hasClass('footable-filtering-right'))self.position='right';self.position=F.is.string(data.filterPosition)?data.filterPosition:self.position;},function(){self.enabled=false;});},/**
		 * Initializes the filtering component for the plugin.
		 * @instance
		 * @protected
		 * @fires FooTable.Filtering#"init.ft.filtering"
		 */init:function init(){var self=this;/**
			 * The init.ft.filtering event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Filtering#"init.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */return self.ft.raise('init.ft.filtering').then(function(){self.$create();},function(){self.enabled=false;});},/**
		 * Destroys the filtering component removing any UI from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Filtering#"destroy.ft.filtering"
		 */destroy:function destroy(){var self=this;/**
			 * The destroy.ft.filtering event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Filtering#"destroy.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */return self.ft.raise('destroy.ft.filtering').then(function(){self.ft.$el.removeClass('footable-filtering').find('thead > tr.footable-filtering').remove();});},/**
		 * Creates the filtering UI from the current options setting the various jQuery properties of this component.
		 * @instance
		 * @protected
		 * @this FooTable.Filtering
		 */$create:function $create(){var self=this;// generate the cell that actually contains all the UI.
var $form_grp=$('<div/>',{'class':'form-group footable-filtering-search'}).append($('<label/>',{'class':'sr-only',text:'Search'})),$input_grp=$('<div/>',{'class':'input-group'}).appendTo($form_grp),$input_grp_btn=$('<div/>',{'class':'input-group-btn'}),$dropdown_toggle=$('<button/>',{type:'button','class':'btn btn-default dropdown-toggle'}).on('click',{self:self},self._onDropdownToggleClicked).append($('<span/>',{'class':'caret'})),position;switch(self.position){case'left':position='footable-filtering-left';break;case'center':position='footable-filtering-center';break;default:position='footable-filtering-right';break;}self.ft.$el.addClass('footable-filtering').addClass(position);self.$container=self.container===null?$():$(self.container).first();if(!self.$container.length){// add it to a row and then populate it with the search input and column selector dropdown.
self.$row=$('<tr/>',{'class':'footable-filtering'}).prependTo(self.ft.$el.children('thead'));self.$cell=$('<th/>').attr('colspan',self.ft.columns.visibleColspan).appendTo(self.$row);self.$container=self.$cell;}else{self.$container.addClass('footable-filtering-external').addClass(position);}self.$form=$('<form/>',{'class':'form-inline'}).append($form_grp).appendTo(self.$container);self.$input=$('<input/>',{type:'text','class':'form-control',placeholder:self.placeholder});self.$button=$('<button/>',{type:'button','class':'btn btn-primary'}).on('click',{self:self},self._onSearchButtonClicked).append($('<span/>',{'class':'fooicon fooicon-search'}));self.$dropdown=$('<ul/>',{'class':'dropdown-menu dropdown-menu-right'});if(!F.is.emptyString(self.dropdownTitle)){self.$dropdown.append($('<li/>',{'class':'dropdown-header','text':self.dropdownTitle}));}self.$dropdown.append(F.arr.map(self.ft.columns.array,function(col){return col.filterable?$('<li/>').append($('<a/>',{'class':'checkbox'}).append($('<label/>',{html:col.title}).prepend($('<input/>',{type:'checkbox',checked:true}).data('__FooTableColumn__',col)))):null;}));if(self.delay>0){self.$input.on('keypress keyup paste',{self:self},self._onSearchInputChanged);self.$dropdown.on('click','input[type="checkbox"]',{self:self},self._onSearchColumnClicked);}$input_grp_btn.append(self.$button,$dropdown_toggle,self.$dropdown);$input_grp.append(self.$input,$input_grp_btn);},/**
		 * Performs the filtering of rows before they are appended to the page.
		 * @instance
		 * @protected
		 */predraw:function predraw(){if(F.is.emptyArray(this.filters))return;var self=this;self.ft.rows.array=$.grep(self.ft.rows.array,function(r){return r.filtered(self.filters);});},/**
		 * As the rows are drawn by the {@link FooTable.Rows#draw} method this simply updates the colspan for the UI.
		 * @instance
		 * @protected
		 */draw:function draw(){if(F.is.jq(this.$cell)){this.$cell.attr('colspan',this.ft.columns.visibleColspan);}var search=this.find('search');if(search instanceof F.Filter){var query=search.query.val();if(this.exactMatch&&this._exactRegExp.test(query)){query=query.replace(this._exactRegExp,'$1');}this.$input.val(query);}else{this.$input.val(null);}this.setButton(!F.arr.any(this.filters,function(f){return!f.hidden;}));},/* PUBLIC */ /**
		 * Adds or updates the filter using the supplied name, query and columns.
		 * @instance
		 * @param {(string|FooTable.Filter|object)} nameOrFilter - The name for the filter or the actual filter object itself.
		 * @param {(string|FooTable.Query)} [query] - The query for the filter. This is only optional when the first parameter is a filter object.
		 * @param {(Array.<number>|Array.<string>|Array.<FooTable.Column>)} [columns] - The columns to apply the filter to.
		 * 	If not supplied the filter will be applied to all selected columns in the search input dropdown.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {string} [space="AND"] - How the query treats space chars.
		 * @param {boolean} [hidden=true] - Whether or not this is a hidden filter.
		 */addFilter:function addFilter(nameOrFilter,query,columns,ignoreCase,connectors,space,hidden){var f=this.createFilter(nameOrFilter,query,columns,ignoreCase,connectors,space,hidden);if(f instanceof F.Filter){this.removeFilter(f.name);this.filters.push(f);}},/**
		 * Removes the filter using the supplied name if it exists.
		 * @instance
		 * @param {string} name - The name of the filter to remove.
		 */removeFilter:function removeFilter(name){F.arr.remove(this.filters,function(f){return f.name==name;});},/**
		 * Performs the required steps to handle filtering including the raising of the {@link FooTable.Filtering#"before.ft.filtering"} and {@link FooTable.Filtering#"after.ft.filtering"} events.
		 * @instance
		 * @param {boolean} [focus=false] - Whether or not to set the focus to the input once filtering is complete.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Filtering#"before.ft.filtering"
		 * @fires FooTable.Filtering#"after.ft.filtering"
		 */filter:function filter(focus){var self=this;self.filters=self.ensure(self.filters);/**
			 * The before.ft.filtering event is raised before a filter is applied and allows listeners to modify the filter or cancel it completely by calling preventDefault on the jQuery.Event object.
			 * @event FooTable.Filtering#"before.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {Array.<FooTable.Filter>} filters - The filters that are about to be applied.
			 */return self.ft.raise('before.ft.filtering',[self.filters]).then(function(){self.filters=self.ensure(self.filters);if(focus){var start=self.$input.prop('selectionStart'),end=self.$input.prop('selectionEnd');}return self.ft.draw().then(function(){if(focus){self.$input.focus().prop({selectionStart:start,selectionEnd:end});}/**
					 * The after.ft.filtering event is raised after a filter has been applied.
					 * @event FooTable.Filtering#"after.ft.filtering"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Filter} filter - The filters that were applied.
					 */self.ft.raise('after.ft.filtering',[self.filters]);});});},/**
		 * Removes the current search filter.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Filtering#"before.ft.filtering"
		 * @fires FooTable.Filtering#"after.ft.filtering"
		 */clear:function clear(){this.filters=F.arr.get(this.filters,function(f){return f.hidden;});return this.filter(this.focus);},/**
		 * Toggles the button icon between the search and clear icons based on the supplied value.
		 * @instance
		 * @param {boolean} search - Whether or not to display the search icon.
		 */setButton:function setButton(search){if(!search){this.$button.children('.fooicon').removeClass('fooicon-search').addClass('fooicon-remove');}else{this.$button.children('.fooicon').removeClass('fooicon-remove').addClass('fooicon-search');}},/**
		 * Finds a filter by name.
		 * @param {string} name - The name of the filter to find.
		 * @returns {(FooTable.Filter|null)}
		 */find:function find(name){return F.arr.first(this.filters,function(f){return f.name==name;});},/**
		 * Gets an array of {@link FooTable.Column} to apply the search filter to. This also doubles as the default columns for filters which do not specify any columns.
		 * @instance
		 * @returns {Array.<FooTable.Column>}
		 */columns:function columns(){if(F.is.jq(this.$dropdown)){// if we have a dropdown containing the column names get the selected columns from there
return this.$dropdown.find('input:checked').map(function(){return $(this).data('__FooTableColumn__');}).get();}else{// otherwise find all columns that are set to be filterable.
return this.ft.columns.get(function(c){return c.filterable;});}},/**
		 * Takes an array of plain objects containing the filter values or actual {@link FooTable.Filter} objects and ensures that an array of only {@link FooTable.Filter} is returned.
		 * If supplied a plain object that object must contain a name, query and columns properties which are used to create a new {@link FooTable.Filter}.
		 * @instance
		 * @param {({name: string, query: (string|FooTable.Query), columns: (Array.<string>|Array.<number>|Array.<FooTable.Column>)}|Array.<FooTable.Filter>)} filters - The array of filters to check.
		 * @returns {Array.<FooTable.Filter>}
		 */ensure:function ensure(filters){var self=this,parsed=[],filterable=self.columns();if(!F.is.emptyArray(filters)){F.arr.each(filters,function(f){f=self._ensure(f,filterable);if(f instanceof F.Filter)parsed.push(f);});}return parsed;},/**
		 * Creates a new filter using the supplied object or individual parameters to populate it.
		 * @instance
		 * @param {(string|FooTable.Filter|object)} nameOrObject - The name for the filter or the actual filter object itself.
		 * @param {(string|FooTable.Query)} [query] - The query for the filter. This is only optional when the first parameter is a filter object.
		 * @param {(Array.<number>|Array.<string>|Array.<FooTable.Column>)} [columns] - The columns to apply the filter to.
		 * 	If not supplied the filter will be applied to all selected columns in the search input dropdown.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {string} [space="AND"] - How the query treats space chars.
		 * @param {boolean} [hidden=true] - Whether or not this is a hidden filter.
		 * @returns {*}
		 */createFilter:function createFilter(nameOrObject,query,columns,ignoreCase,connectors,space,hidden){if(F.is.string(nameOrObject)){nameOrObject={name:nameOrObject,query:query,columns:columns,ignoreCase:ignoreCase,connectors:connectors,space:space,hidden:hidden};}return this._ensure(nameOrObject,this.columns());},/* PRIVATE */_ensure:function _ensure(filter,selectedColumns){if((F.is.hash(filter)||filter instanceof F.Filter)&&!F.is.emptyString(filter.name)&&(!F.is.emptyString(filter.query)||filter.query instanceof F.Query)){filter.columns=F.is.emptyArray(filter.columns)?selectedColumns:this.ft.columns.ensure(filter.columns);filter.ignoreCase=F.is["boolean"](filter.ignoreCase)?filter.ignoreCase:this.ignoreCase;filter.connectors=F.is["boolean"](filter.connectors)?filter.connectors:this.connectors;filter.hidden=F.is["boolean"](filter.hidden)?filter.hidden:false;filter.space=F.is.string(filter.space)&&(filter.space==='AND'||filter.space==='OR')?filter.space:this.space;filter.query=F.is.string(filter.query)?new F.Query(filter.query,filter.space,filter.connectors,filter.ignoreCase):filter.query;return filter instanceof F.Filter?filter:new F.Filter(filter.name,filter.query,filter.columns,filter.space,filter.connectors,filter.ignoreCase,filter.hidden);}return null;},/**
		 * Handles the change event for the {@link FooTable.Filtering#$input}.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */_onSearchInputChanged:function _onSearchInputChanged(e){var self=e.data.self;var alpha=e.type=='keypress'&&!F.is.emptyString(String.fromCharCode(e.charCode)),ctrl=e.type=='keyup'&&(e.which==8||e.which==46),paste=e.type=='paste';// backspace & delete
// if alphanumeric characters or specific control characters
if(alpha||ctrl||paste){if(e.which==13)e.preventDefault();if(self._filterTimeout!=null)clearTimeout(self._filterTimeout);self._filterTimeout=setTimeout(function(){self._filterTimeout=null;var query=self.$input.val();if(query.length>=self.min){if(self.exactMatch&&!self._exactRegExp.test(query)){query='"'+query+'"';}self.addFilter('search',query);self.filter(self.focus);}else if(F.is.emptyString(query)){self.clear();}},self.delay);}},/**
		 * Handles the click event for the {@link FooTable.Filtering#$button}.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */_onSearchButtonClicked:function _onSearchButtonClicked(e){e.preventDefault();var self=e.data.self;if(self._filterTimeout!=null)clearTimeout(self._filterTimeout);var $icon=self.$button.children('.fooicon');if($icon.hasClass('fooicon-remove'))self.clear();else{var query=self.$input.val();if(query.length>=self.min){if(self.exactMatch&&!self._exactRegExp.test(query)){query='"'+query+'"';}self.addFilter('search',query);self.filter(self.focus);}}},/**
		 * Handles the click event for the column checkboxes in the {@link FooTable.Filtering#$dropdown}.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */_onSearchColumnClicked:function _onSearchColumnClicked(e){var self=e.data.self;if(self._filterTimeout!=null)clearTimeout(self._filterTimeout);self._filterTimeout=setTimeout(function(){self._filterTimeout=null;var $icon=self.$button.children('.fooicon');if($icon.hasClass('fooicon-remove')){$icon.removeClass('fooicon-remove').addClass('fooicon-search');self.addFilter('search',self.$input.val());self.filter();}},self.delay);},/**
		 * Handles the click event for the {@link FooTable.Filtering#$dropdown} toggle.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */_onDropdownToggleClicked:function _onDropdownToggleClicked(e){e.preventDefault();e.stopPropagation();var self=e.data.self;self.$dropdown.parent().toggleClass('open');if(self.$dropdown.parent().hasClass('open'))$(document).on('click.footable',{self:self},self._onDocumentClicked);else $(document).off('click.footable',self._onDocumentClicked);},/**
		 * Checks all click events when the dropdown is visible and closes the menu if the target is not the dropdown.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */_onDocumentClicked:function _onDocumentClicked(e){if($(e.target).closest('.dropdown-menu').length==0){e.preventDefault();var self=e.data.self;self.$dropdown.parent().removeClass('open');$(document).off('click.footable',self._onDocumentClicked);}}});F.components.register('filtering',F.Filtering,500);})(jQuery,FooTable);(function(F){F.Query=F.Class.extend(/** @lends FooTable.Query */{/**
		 * The query object is used to parse and test the filtering component's queries
		 * @constructs
		 * @extends FooTable.Class
		 * @param {string} query - The string value of the query.
		 * @param {string} [space="AND"] - How the query treats whitespace.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @returns {FooTable.Query}
		 */construct:function construct(query,space,connectors,ignoreCase){/* PRIVATE */ /**
			 * Holds the previous value of the query and is used internally in the {@link FooTable.Query#val} method.
			 * @type {string}
			 * @private
			 */this._original=null;/**
			 * Holds the value for the query. Access to this variable is provided through the {@link FooTable.Query#val} method.
			 * @type {string}
			 * @private
			 */this._value=null;/* PUBLIC */ /**
			 * A string specifying how the query treats whitespace. Can be either "OR" or "AND".
			 * @type {string}
			 */this.space=F.is.string(space)&&(space=='OR'||space=='AND')?space:'AND';/**
			 * Whether or not to replace phrase connectors (+.-_) with spaces before executing the query.
			 * @instance
			 * @type {boolean}
			 */this.connectors=F.is["boolean"](connectors)?connectors:true;/**
			 * Whether or not ignore case when matching.
			 * @instance
			 * @type {boolean}
			 */this.ignoreCase=F.is["boolean"](ignoreCase)?ignoreCase:true;/**
			 * The left side of the query if one exists. OR takes precedence over AND.
			 * @type {FooTable.Query}
			 * @example <caption>The below shows what is meant by the "left" side of a query</caption>
			 * query = "Dave AND Mary" - "Dave" is the left side of the query.
			 * query = "Dave AND Mary OR John" - "Dave and Mary" is the left side of the query.
			 */this.left=null;/**
			 * The right side of the query if one exists. OR takes precedence over AND.
			 * @type {FooTable.Query}
			 * @example <caption>The below shows what is meant by the "right" side of a query</caption>
			 * query = "Dave AND Mary" - "Mary" is the right side of the query.
			 * query = "Dave AND Mary OR John" - "John" is the right side of the query.
			 */this.right=null;/**
			 * The parsed parts of the query. This contains the information used to actually perform a match against a string.
			 * @type {Array}
			 */this.parts=[];/**
			 * The type of operand to apply to the results of the individual parts of the query.
			 * @type {string}
			 */this.operator=null;this.val(query);},/**
		 * Gets or sets the value for the query. During set the value is parsed setting all properties as required.
		 * @param {string} [value] - If supplied the value to set for this query.
		 * @returns {(string|undefined)}
		 */val:function val(value){// get
if(F.is.emptyString(value))return this._value;// set
if(F.is.emptyString(this._original))this._original=value;else if(this._original==value)return;this._value=value;this._parse();},/**
		 * Tests the supplied string against the query.
		 * @param {string} str - The string to test.
		 * @returns {boolean}
		 */match:function match(str){if(F.is.emptyString(this.operator)||this.operator==='OR')return this._left(str,false)||this._match(str,false)||this._right(str,false);if(this.operator==='AND')return this._left(str,true)&&this._match(str,true)&&this._right(str,true);},/**
		 * Matches this queries parts array against the supplied string.
		 * @param {string} str - The string to test.
		 * @param {boolean} def - The default value to return based on the operand.
		 * @returns {boolean}
		 * @private
		 */_match:function _match(str,def){var self=this,result=false,empty=F.is.emptyString(str);if(F.is.emptyArray(self.parts)&&self.left instanceof F.Query)return def;if(F.is.emptyArray(self.parts))return result;if(self.space==='OR'){// with OR we give the str every part to test and if any match it is a success, we do exit early if a negated match occurs
F.arr.each(self.parts,function(p){if(p.empty&&empty){result=true;if(p.negate){result=false;return result;}}else{var match=(p.exact?F.str.containsExact:F.str.contains)(str,p.query,self.ignoreCase);if(match&&!p.negate)result=true;if(match&&p.negate){result=false;return result;}}});}else{// otherwise with AND we check until the first failure and then exit
result=true;F.arr.each(self.parts,function(p){if(p.empty){if(!empty&&!p.negate||empty&&p.negate)result=false;return result;}else{var match=(p.exact?F.str.containsExact:F.str.contains)(str,p.query,self.ignoreCase);if(!match&&!p.negate||match&&p.negate)result=false;return result;}});}return result;},/**
		 * Matches the left side of the query if one exists with the supplied string.
		 * @param {string} str - The string to test.
		 * @param {boolean} def - The default value to return based on the operand.
		 * @returns {boolean}
		 * @private
		 */_left:function _left(str,def){return this.left instanceof F.Query?this.left.match(str):def;},/**
		 * Matches the right side of the query if one exists with the supplied string.
		 * @param {string} str - The string to test.
		 * @param {boolean} def - The default value to return based on the operand.
		 * @returns {boolean}
		 * @private
		 */_right:function _right(str,def){return this.right instanceof F.Query?this.right.match(str):def;},/**
		 * Parses the private {@link FooTable.Query#_value} property and populates the object.
		 * @private
		 */_parse:function _parse(){if(F.is.emptyString(this._value))return;// OR takes precedence so test for it first
if(/\sOR\s/.test(this._value)){// we have an OR so split the value on the first occurrence of OR to get the left and right sides of the statement
this.operator='OR';var or=this._value.split(/(?:\sOR\s)(.*)?/);this.left=new F.Query(or[0],this.space,this.connectors,this.ignoreCase);this.right=new F.Query(or[1],this.space,this.connectors,this.ignoreCase);}else if(/\sAND\s/.test(this._value)){// there are no more OR's so start with AND
this.operator='AND';var and=this._value.split(/(?:\sAND\s)(.*)?/);this.left=new F.Query(and[0],this.space,this.connectors,this.ignoreCase);this.right=new F.Query(and[1],this.space,this.connectors,this.ignoreCase);}else{// we have no more statements to parse so set the parts array by parsing each part of the remaining query
var self=this;this.parts=F.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g),function(str){return self._part(str);});}},/**
		 * Parses a single part of a query into an object to use during matching.
		 * @param {string} str - The string representation of the part.
		 * @returns {{query: string, negate: boolean, phrase: boolean, exact: boolean}}
		 * @private
		 */_part:function _part(str){var p={query:str,negate:false,phrase:false,exact:false,empty:false};// support for NEGATE operand - (minus sign). Remove this first so we can get onto phrase checking
if(F.str.startsWith(p.query,'-')){p.query=F.str.from(p.query,'-');p.negate=true;}// support for PHRASES (exact matches)
if(/^"(.*?)"$/.test(p.query)){// if surrounded in quotes strip them and nothing else
p.query=p.query.replace(/^"(.*?)"$/,'$1');p.phrase=true;p.exact=true;}else if(this.connectors&&/(?:\w)+?([-_\+\.])(?:\w)+?/.test(p.query)){// otherwise replace supported phrase connectors (-_+.) with spaces
p.query=p.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g,function(match,p1){return match.replace(p1,' ');});p.phrase=true;}p.empty=p.phrase&&F.is.emptyString(p.query);return p;}});})(FooTable);(function(F){/**
	 * The value used by the filtering component during filter operations. Must be a string and can be set using the data-filter-value attribute on the cell itself.
	 * If this is not supplied it is set to the result of the toString method called on the value for the cell. Added by the {@link FooTable.Filtering} component.
	 * @type {string}
	 * @default null
	 */F.Cell.prototype.filterValue=null;// this is used to define the filtering specific properties on cell creation
F.Cell.prototype.__filtering_define__=function(valueOrElement){this.filterValue=this.column.filterValue.call(this.column,valueOrElement);};// this is used to update the filterValue property whenever the cell value is changed
F.Cell.prototype.__filtering_val__=function(value){if(F.is.defined(value)){// set only
this.filterValue=this.column.filterValue.call(this.column,value);}};// overrides the public define method and replaces it with our own
F.Cell.extend('define',function(valueOrElement){this._super(valueOrElement);this.__filtering_define__(valueOrElement);});// overrides the public val method and replaces it with our own
F.Cell.extend('val',function(value,redraw,redrawSelf){var val=this._super(value,redraw,redrawSelf);this.__filtering_val__(value);return val;});})(FooTable);(function($,F){/**
	 * Whether or not the column can be used during filtering. Added by the {@link FooTable.Filtering} component.
	 * @type {boolean}
	 * @default true
	 */F.Column.prototype.filterable=true;/**
	 * This is supplied either the cell value or jQuery object to parse. A string value must be returned from this method and will be used during filtering operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {string}
	 * @this FooTable.Column
	 */F.Column.prototype.filterValue=function(valueOrElement){// if we have an element or a jQuery object use jQuery to get the value
if(F.is.element(valueOrElement)||F.is.jq(valueOrElement)){var data=$(valueOrElement).data('filterValue');return F.is.defined(data)?''+data:$(valueOrElement).text();}// if options are supplied with the value
if(F.is.hash(valueOrElement)&&F.is.hash(valueOrElement.options)){if(F.is.string(valueOrElement.options.filterValue))return valueOrElement.options.filterValue;if(F.is.defined(valueOrElement.value))valueOrElement=valueOrElement.value;}if(F.is.defined(valueOrElement)&&valueOrElement!=null)return valueOrElement+'';// use the native toString of the value
return'';// otherwise we have no value so return an empty string
};// this is used to define the filtering specific properties on column creation
F.Column.prototype.__filtering_define__=function(definition){this.filterable=F.is["boolean"](definition.filterable)?definition.filterable:this.filterable;this.filterValue=F.checkFnValue(this,definition.filterValue,this.filterValue);};// overrides the public define method and replaces it with our own
F.Column.extend('define',function(definition){this._super(definition);// call the base so we don't have to redefine any previously set properties
this.__filtering_define__(definition);// then call our own
});})(jQuery,FooTable);(function(F){/**
	 * An object containing the filtering options for the plugin. Added by the {@link FooTable.Filtering} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow filtering on the table.
	 * @prop {({name: string, query: (string|FooTable.Query), columns: (Array.<string>|Array.<number>|Array.<FooTable.Column>)}|Array.<FooTable.Filter>)} filters - The filters to apply to the current {@link FooTable.Rows#array}.
	 * @prop {number} delay=1200 - The delay in milliseconds before the query is auto applied after a change (any value equal to or less than zero will disable this).
	 * @prop {number} min=1 - The minimum number of characters allowed in the search input before it is auto applied.
	 * @prop {string} space="AND" - Specifies how whitespace in a filter query is handled.
	 * @prop {string} placeholder="Search" - The string used as the placeholder for the search input.
	 * @prop {string} dropdownTitle=null - The title to display at the top of the search input column select.
	 * @prop {string} position="right" - The string used to specify the alignment of the search input.
	 * @prop {string} connectors=true - Whether or not to replace phrase connectors (+.-_) with space before executing the query.
	 * @prop {boolean} ignoreCase=true - Whether or not ignore case when matching.
	 * @prop {boolean} exactMatch=false - Whether or not search queries are treated as phrases when matching.
	 * @prop {boolean} focus=true - Whether or not to focus the search input after the search/clear button is clicked or after auto applying the search input query.
	 * @prop {string} container=null - A selector specifying where to place the filtering components form, if null the form is displayed within a row in the head of the table.
	 */F.Defaults.prototype.filtering={enabled:false,filters:[],delay:1200,min:1,space:'AND',placeholder:'Search',dropdownTitle:null,position:'right',connectors:true,ignoreCase:true,exactMatch:false,focus:true,container:null};})(FooTable);(function(F){/**
	 * Checks if the row is filtered using the supplied filters.
	 * @this FooTable.Row
	 * @param {Array.<FooTable.Filter>} filters - The filters to apply.
	 * @returns {boolean}
	 */F.Row.prototype.filtered=function(filters){var result=true,self=this;F.arr.each(filters,function(f){if((result=f.matchRow(self))==false)return false;});return result;};})(FooTable);(function($,F){F.Sorter=F.Class.extend(/** @lends FooTable.Sorter */{/**
		 * The sorter object contains the column and direction to sort by.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Column} column - The column to sort.
		 * @param {string} direction - The direction to sort by.
		 * @returns {FooTable.Sorter}
		 */construct:function construct(column,direction){/**
			 * The column to sort.
			 * @type {FooTable.Column}
			 */this.column=column;/**
			 * The direction to sort by.
			 * @type {string}
			 */this.direction=direction;}});})(jQuery,FooTable);(function($,F){F.Sorting=F.Component.extend(/** @lends FooTable.Sorting */{/**
		 * The sorting component adds a small sort button to specified column headers allowing users to sort those columns in the table.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Sorting}
		 */construct:function construct(table){// call the constructor of the base class
this._super(table,table.o.sorting.enabled);/* PROTECTED */ /**
			 * This provides a shortcut to the {@link FooTable.Table#options}.[sorting]{@link FooTable.Defaults#sorting} object.
			 * @instance
			 * @protected
			 * @type {object}
			 */this.o=table.o.sorting;/**
			 * The current sorted column.
			 * @instance
			 * @type {FooTable.Column}
			 */this.column=null;/**
			 * Whether or not to allow sorting to occur, should be set using the {@link FooTable.Sorting#toggleAllowed} method.
			 * @instance
			 * @type {boolean}
			 */this.allowed=true;/**
			 * The initial sort state of the table, this value is used for determining if the sorting has occurred or to reset the state to default.
			 * @instance
			 * @type {{isset: boolean, rows: Array.<FooTable.Row>, column: string, direction: ?string}}
			 */this.initial=null;},/* PROTECTED */ /**
		 * Checks the supplied data and options for the sorting component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Sorting#"preinit.ft.sorting"
		 * @this FooTable.Sorting
		 */preinit:function preinit(data){var self=this;/**
			 * The preinit.ft.sorting event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Sorting#"preinit.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */this.ft.raise('preinit.ft.sorting',[data]).then(function(){if(self.ft.$el.hasClass('footable-sorting'))self.enabled=true;self.enabled=F.is["boolean"](data.sorting)?data.sorting:self.enabled;if(!self.enabled)return;self.column=F.arr.first(self.ft.columns.array,function(col){return col.sorted;});},function(){self.enabled=false;});},/**
		 * Initializes the sorting component for the plugin using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Sorting#"init.ft.sorting"
		 * @this FooTable.Sorting
		 */init:function init(){/**
			 * The init.ft.sorting event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Sorting#"init.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */var self=this;this.ft.raise('init.ft.sorting').then(function(){if(!self.initial){var isset=!!self.column;self.initial={isset:isset,// grab a shallow copy of the rows array prior to sorting - allows us to reset without an initial sort
rows:self.ft.rows.all.slice(0),// if there is a sorted column store its name and direction
column:isset?self.column.name:null,direction:isset?self.column.direction:null};}F.arr.each(self.ft.columns.array,function(col){if(col.sortable){col.$el.addClass('footable-sortable').append($('<span/>',{'class':'fooicon fooicon-sort'}));}});self.ft.$el.on('click.footable','.footable-sortable',{self:self},self._onSortClicked);},function(){self.enabled=false;});},/**
		 * Destroys the sorting component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Sorting#"destroy.ft.sorting"
		 */destroy:function destroy(){/**
			 * The destroy.ft.sorting event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Sorting#"destroy.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */var self=this;this.ft.raise('destroy.ft.paging').then(function(){self.ft.$el.off('click.footable','.footable-sortable',self._onSortClicked);self.ft.$el.children('thead').children('tr.footable-header').children('.footable-sortable').removeClass('footable-sortable footable-asc footable-desc').find('span.fooicon').remove();});},/**
		 * Performs the actual sorting against the {@link FooTable.Rows#current} array.
		 * @instance
		 * @protected
		 */predraw:function predraw(){if(!this.column)return;var self=this,col=self.column;self.ft.rows.array.sort(function(a,b){return col.direction=='DESC'?col.sorter(b.cells[col.index].sortValue,a.cells[col.index].sortValue):col.sorter(a.cells[col.index].sortValue,b.cells[col.index].sortValue);});},/**
		 * Updates the sorting UI setting the state of the sort buttons.
		 * @instance
		 * @protected
		 */draw:function draw(){if(!this.column)return;var self=this,$sortable=self.ft.$el.find('thead > tr > .footable-sortable'),$active=self.column.$el;$sortable.removeClass('footable-asc footable-desc').children('.fooicon').removeClass('fooicon-sort fooicon-sort-asc fooicon-sort-desc');$sortable.not($active).children('.fooicon').addClass('fooicon-sort');$active.addClass(self.column.direction=='DESC'?'footable-desc':'footable-asc').children('.fooicon').addClass(self.column.direction=='DESC'?'fooicon-sort-desc':'fooicon-sort-asc');},/* PUBLIC */ /**
		 * Sets the sorting options and calls the {@link FooTable.Table#draw} method to perform the actual sorting.
		 * @instance
		 * @param {(string|number|FooTable.Column)} column - The column name, index or the actual {@link FooTable.Column} object to sort by.
		 * @param {string} [direction="ASC"] - The direction to sort by, either ASC or DESC.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Sorting#"before.ft.sorting"
		 * @fires FooTable.Sorting#"after.ft.sorting"
		 */sort:function sort(column,direction){return this._sort(column,direction);},/**
		 * Toggles whether or not sorting is currently allowed.
		 * @param {boolean} [state] - You can optionally specify the state you want it to be, if not supplied the current value is flipped.
		 */toggleAllowed:function toggleAllowed(state){state=F.is["boolean"](state)?state:!this.allowed;this.allowed=state;this.ft.$el.toggleClass('footable-sorting-disabled',!this.allowed);},/**
		 * Checks whether any sorting has occurred for the table.
		 * @returns {boolean}
		 */hasChanged:function hasChanged(){return!(!this.initial||!this.column||this.column.name===this.initial.column&&(this.column.direction===this.initial.direction||this.initial.direction===null&&this.column.direction==='ASC'));},/**
		 * Resets the table sorting to the initial state recorded in the components init method.
		 */reset:function reset(){if(!!this.initial){if(this.initial.isset){// if the initial value specified a column, sort by it
this.sort(this.initial.column,this.initial.direction);}else{// if there was no initial column then we need to reset the rows to there original order
if(!!this.column){// if there is a currently sorted column remove the asc/desc classes and set it to null.
this.column.$el.removeClass('footable-asc footable-desc');this.column=null;}// replace the current all rows array with the one stored in the initial value
this.ft.rows.all=this.initial.rows;// force the table to redraw itself using the updated rows array
this.ft.draw();}}},/* PRIVATE */ /**
		 * Performs the required steps to handle sorting including the raising of the {@link FooTable.Sorting#"before.ft.sorting"} and {@link FooTable.Sorting#"after.ft.sorting"} events.
		 * @instance
		 * @private
		 * @param {(string|number|FooTable.Column)} column - The column name, index or the actual {@link FooTable.Column} object to sort by.
		 * @param {string} [direction="ASC"] - The direction to sort by, either ASC or DESC.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Sorting#"before.ft.sorting"
		 * @fires FooTable.Sorting#"after.ft.sorting"
		 */_sort:function _sort(column,direction){if(!this.allowed)return $.Deferred().reject('sorting disabled');var self=this;var sorter=new F.Sorter(self.ft.columns.get(column),F.Sorting.dir(direction));/**
			 * The before.ft.sorting event is raised before a sort is applied and allows listeners to modify the sorter or cancel it completely by calling preventDefault on the jQuery.Event object.
			 * @event FooTable.Sorting#"before.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Sorter} sorter - The sorter that is about to be applied.
			 */return self.ft.raise('before.ft.sorting',[sorter]).then(function(){F.arr.each(self.ft.columns.array,function(col){if(col!=self.column)col.direction=null;});self.column=self.ft.columns.get(sorter.column);if(self.column)self.column.direction=F.Sorting.dir(sorter.direction);return self.ft.draw().then(function(){/**
					 * The after.ft.sorting event is raised after a sorter has been applied.
					 * @event FooTable.Sorting#"after.ft.sorting"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Sorter} sorter - The sorter that has been applied.
					 */self.ft.raise('after.ft.sorting',[sorter]);});});},/**
		 * Handles the sort button clicked event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */_onSortClicked:function _onSortClicked(e){var self=e.data.self,$header=$(this).closest('th,td'),direction=$header.is('.footable-asc, .footable-desc')?$header.hasClass('footable-desc')?'ASC':'DESC':'ASC';self._sort($header.index(),direction);}});/**
	 * Checks the supplied string is a valid direction and if not returns ASC as default.
	 * @static
	 * @protected
	 * @param {string} str - The string to check.
	 */F.Sorting.dir=function(str){return F.is.string(str)&&(str=='ASC'||str=='DESC')?str:'ASC';};F.components.register('sorting',F.Sorting,600);})(jQuery,FooTable);(function(F){/**
	 * The value used by the sorting component during sort operations. Can be set using the data-sort-value attribute on the cell itself.
	 * If this is not supplied it is set to the result of the toString method called on the value for the cell. Added by the {@link FooTable.Sorting} component.
	 * @type {string}
	 * @default null
	 */F.Cell.prototype.sortValue=null;// this is used to define the sorting specific properties on cell creation
F.Cell.prototype.__sorting_define__=function(valueOrElement){this.sortValue=this.column.sortValue.call(this.column,valueOrElement);};// this is used to update the sortValue property whenever the cell value is changed
F.Cell.prototype.__sorting_val__=function(value){if(F.is.defined(value)){// set only
this.sortValue=this.column.sortValue.call(this.column,value);}};// overrides the public define method and replaces it with our own
F.Cell.extend('define',function(valueOrElement){this._super(valueOrElement);this.__sorting_define__(valueOrElement);});// overrides the public val method and replaces it with our own
F.Cell.extend('val',function(value,redraw,redrawSelf){var val=this._super(value,redraw,redrawSelf);this.__sorting_val__(value);return val;});})(FooTable);(function($,F){/**
	 * The direction to sort if the {@link FooTable.Column#sorted} property is set to true. Can be "ASC", "DESC" or NULL. Added by the {@link FooTable.Sorting} component.
	 * @type {string}
	 * @default null
	 */F.Column.prototype.direction=null;/**
	 * Whether or not the column can be sorted. Added by the {@link FooTable.Sorting} component.
	 * @type {boolean}
	 * @default true
	 */F.Column.prototype.sortable=true;/**
	 * Whether or not the column is sorted. Added by the {@link FooTable.Sorting} component.
	 * @type {boolean}
	 * @default false
	 */F.Column.prototype.sorted=false;/**
	 * This is supplied two values from the column for a comparison to be made and the result returned. Added by the {@link FooTable.Sorting} component.
	 * @param {*} a - The first value to be compared.
	 * @param {*} b - The second value to compare to the first.
	 * @returns {number}
	 * @example <caption>This example shows using pseudo code what a sort function would look like.</caption>
	 * "sorter": function(a, b){
	 * 	if (a is less than b by some ordering criterion) {
	 * 		return -1;
	 * 	}
	 * 	if (a is greater than b by the ordering criterion) {
	 * 		return 1;
	 * 	}
	 * 	// a must be equal to b
	 * 	return 0;
	 * }
	 */F.Column.prototype.sorter=function(a,b){if(typeof a==='string')a=a.toLowerCase();if(typeof b==='string')b=b.toLowerCase();if(a===b)return 0;if(a<b)return-1;return 1;};/**
	 * This is supplied either the cell value or jQuery object to parse. A value must be returned from this method and will be used during sorting operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {*}
	 * @this FooTable.Column
	 */F.Column.prototype.sortValue=function(valueOrElement){// if we have an element or a jQuery object use jQuery to get the value
if(F.is.element(valueOrElement)||F.is.jq(valueOrElement)){var data=$(valueOrElement).data('sortValue');return F.is.defined(data)?data:this.parser(valueOrElement);}// if options are supplied with the value
if(F.is.hash(valueOrElement)&&F.is.hash(valueOrElement.options)){if(F.is.string(valueOrElement.options.sortValue))return valueOrElement.options.sortValue;if(F.is.defined(valueOrElement.value))valueOrElement=valueOrElement.value;}if(F.is.defined(valueOrElement)&&valueOrElement!=null)return valueOrElement;return null;};// this is used to define the sorting specific properties on column creation
F.Column.prototype.__sorting_define__=function(definition){this.sorter=F.checkFnValue(this,definition.sorter,this.sorter);this.direction=F.is.type(definition.direction,'string')?F.Sorting.dir(definition.direction):null;this.sortable=F.is["boolean"](definition.sortable)?definition.sortable:true;this.sorted=F.is["boolean"](definition.sorted)?definition.sorted:false;this.sortValue=F.checkFnValue(this,definition.sortValue,this.sortValue);};// overrides the public define method and replaces it with our own
F.Column.extend('define',function(definition){this._super(definition);this.__sorting_define__(definition);});})(jQuery,FooTable);(function(F){/**
	 * An object containing the sorting options for the plugin. Added by the {@link FooTable.Sorting} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow sorting on the table.
	 */F.Defaults.prototype.sorting={enabled:false};})(FooTable);(function($,F){F.HTMLColumn.extend('__sorting_define__',function(definition){this._super(definition);this.sortUse=F.is.string(definition.sortUse)&&$.inArray(definition.sortUse,['html','text'])!==-1?definition.sortUse:'html';});/**
	 * This is supplied either the cell value or jQuery object to parse. A value must be returned from this method and will be used during sorting operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {*}
	 * @this FooTable.HTMLColumn
	 */F.HTMLColumn.prototype.sortValue=function(valueOrElement){// if we have an element or a jQuery object use jQuery to get the data value or pass it off to the parser
if(F.is.element(valueOrElement)||F.is.jq(valueOrElement)){var data=$(valueOrElement).data('sortValue');return F.is.defined(data)?data:this.parser(valueOrElement);}// if options are supplied with the value
if(F.is.hash(valueOrElement)&&F.is.hash(valueOrElement.options)){if(F.is.string(valueOrElement.options.sortValue))return valueOrElement.options.sortValue;if(F.is.defined(valueOrElement.value))valueOrElement=valueOrElement.value;}if(F.is.defined(valueOrElement)&&valueOrElement!=null)return valueOrElement;return null;};})(jQuery,FooTable);(function($,F){/**
	 * This is supplied either the cell value or jQuery object to parse. A value must be returned from this method and will be used during sorting operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {*}
	 */F.NumberColumn.prototype.sortValue=function(valueOrElement){// if we have an element or a jQuery object use jQuery to get the data value or pass it off to the parser
if(F.is.element(valueOrElement)||F.is.jq(valueOrElement)){var data=$(valueOrElement).data('sortValue');return F.is.number(data)?data:this.parser(valueOrElement);}// if options are supplied with the value
if(F.is.hash(valueOrElement)&&F.is.hash(valueOrElement.options)){if(F.is.string(valueOrElement.options.sortValue))return this.parser(valueOrElement);if(F.is.number(valueOrElement.options.sortValue))return valueOrElement.options.sortValue;if(F.is.number(valueOrElement.value))return valueOrElement.value;}if(F.is.string(valueOrElement))return this.parser(valueOrElement);if(F.is.number(valueOrElement))return valueOrElement;return null;};})(jQuery,FooTable);(function(F){/**
	 * Sort the table using the specified column and direction. Added by the {@link FooTable.Sorting} component.
	 * @instance
	 * @param {(string|number|FooTable.Column)} column - The column name, index or the actual {@link FooTable.Column} object to sort by.
	 * @param {string} [direction="ASC"] - The direction to sort by, either ASC or DESC.
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Sorting#"change.ft.sorting"
	 * @fires FooTable.Sorting#"changed.ft.sorting"
	 * @see FooTable.Sorting#sort
	 */F.Table.prototype.sort=function(column,direction){return this.use(F.Sorting).sort(column,direction);};})(FooTable);(function($,F){F.Pager=F.Class.extend(/** @lends FooTable.Pager */{/**
		 * The pager object contains the page number and direction to page to.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {number} total - The total number of pages available.
		 * @param {number} current - The current page number.
		 * @param {number} size - The number of rows per page.
		 * @param {number} page - The page number to goto.
		 * @param {boolean} forward - A boolean indicating the direction of paging, TRUE = forward, FALSE = back.
		 * @returns {FooTable.Pager}
		 */construct:function construct(total,current,size,page,forward){/**
			 * The total number of pages available.
			 * @type {number}
			 */this.total=total;/**
			 * The current page number.
			 * @type {number}
			 */this.current=current;/**
			 * The number of rows per page.
			 * @type {number}
			 */this.size=size;/**
			 * The page number to goto.
			 * @type {number}
			 */this.page=page;/**
			 * A boolean indicating the direction of paging, TRUE = forward, FALSE = back.
			 * @type {boolean}
			 */this.forward=forward;}});})(jQuery,FooTable);(function($,F){F.Paging=F.Component.extend(/** @lends FooTable.Paging */{/**
		 * The paging component adds a pagination control to the table allowing users to navigate table rows via pages.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Filtering}
		 */construct:function construct(table){// call the base constructor
this._super(table,table.o.paging.enabled);/* PROTECTED */ /**
			 * An object containing the strings used by the paging buttons.
			 * @type {{ first: string, prev: string, next: string, last: string }}
			 */this.strings=table.o.paging.strings;/* PUBLIC */ /**
			 * The current page number to display.
			 * @instance
			 * @type {number}
			 */this.current=table.o.paging.current;/**
			 * The number of rows to display per page.
			 * @instance
			 * @type {number}
			 */this.size=table.o.paging.size;/**
			 * The maximum number of page links to display at once.
			 * @instance
			 * @type {number}
			 */this.limit=table.o.paging.limit;/**
			 * The position of the pagination control within the paging rows cell.
			 * @instance
			 * @type {string}
			 */this.position=table.o.paging.position;/**
			 * The format string used to generate the text displayed under the pagination control.
			 * @instance
			 * @type {string}
			 */this.countFormat=table.o.paging.countFormat;/**
			 * A selector specifying where to place the paging components UI, if null the UI is displayed within a row in the foot of the table.
			 * @instance
			 * @type {string}
			 */this.container=table.o.paging.container;/**
			 * The total number of pages.
			 * @instance
			 * @type {number}
			 */this.total=-1;/**
			 * The number of rows in the {@link FooTable.Rows#array} before paging is applied.
			 * @instance
			 * @type {number}
			 */this.totalRows=0;/**
			 * A number indicating the previous page displayed.
			 * @instance
			 * @type {number}
			 */this.previous=-1;/**
			 * The count string generated using the {@link FooTable.Filtering#countFormat} option. This value is only set after the first call to the {@link FooTable.Filtering#predraw} method.
			 * @instance
			 * @type {string}
			 */this.formattedCount=null;/**
			 * The jQuery object of the element containing the entire paging UI.
			 * @instance
			 * @type {jQuery}
			 */this.$container=null;/**
			 * The jQuery object of the element wrapping all the paging UI elements.
			 * @instance
			 * @type {jQuery}
			 */this.$wrapper=null;/** +
			 * The jQuery row object that contains all the paging specific elements.
			 * @instance
			 * @type {jQuery}
			 */this.$row=null;/**
			 * The jQuery cell object that contains the pagination control and total count.
			 * @instance
			 * @type {jQuery}
			 */this.$cell=null;/**
			 * The jQuery object that contains the links for the pagination control.
			 * @instance
			 * @type {jQuery}
			 */this.$pagination=null;/**
			 * The jQuery object that contains the row count.
			 * @instance
			 * @type {jQuery}
			 */this.$count=null;/**
			 * Whether or not the pagination row is detached from the table.
			 * @instance
			 * @type {boolean}
			 */this.detached=true;/* PRIVATE */ /**
			 * Used to hold the number of page links created.
			 * @instance
			 * @type {number}
			 * @private
			 */this._createdLinks=0;},/* PROTECTED */ /**
		 * Checks the supplied data and options for the paging component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Paging#"preinit.ft.paging"
		 */preinit:function preinit(data){var self=this;/**
			 * The preinit.ft.paging event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Paging#"preinit.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */this.ft.raise('preinit.ft.paging',[data]).then(function(){if(self.ft.$el.hasClass('footable-paging'))self.enabled=true;self.enabled=F.is["boolean"](data.paging)?data.paging:self.enabled;if(!self.enabled)return;self.size=F.is.number(data.pagingSize)?data.pagingSize:self.size;self.current=F.is.number(data.pagingCurrent)?data.pagingCurrent:self.current;self.limit=F.is.number(data.pagingLimit)?data.pagingLimit:self.limit;if(self.ft.$el.hasClass('footable-paging-left'))self.position='left';if(self.ft.$el.hasClass('footable-paging-center'))self.position='center';if(self.ft.$el.hasClass('footable-paging-right'))self.position='right';self.position=F.is.string(data.pagingPosition)?data.pagingPosition:self.position;self.countFormat=F.is.string(data.pagingCountFormat)?data.pagingCountFormat:self.countFormat;self.container=F.is.string(data.pagingContainer)?data.pagingContainer:self.container;self.total=Math.ceil(self.ft.rows.all.length/self.size);},function(){self.enabled=false;});},/**
		 * Initializes the paging component for the plugin using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Paging#"init.ft.paging"
		 */init:function init(){/**
			 * The init.ft.paging event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Paging#"init.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */var self=this;this.ft.raise('init.ft.paging').then(function(){self.$create();},function(){self.enabled=false;});},/**
		 * Destroys the paging component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Paging#"destroy.ft.paging"
		 */destroy:function destroy(){/**
			 * The destroy.ft.paging event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Paging#"destroy.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */var self=this;this.ft.raise('destroy.ft.paging').then(function(){self.ft.$el.removeClass('footable-paging').find('tfoot > tr.footable-paging').remove();self.detached=true;self._createdLinks=0;});},/**
		 * Performs the actual paging against the {@link FooTable.Rows#current} array removing all rows that are not on the current visible page.
		 * @instance
		 * @protected
		 */predraw:function predraw(){this.total=Math.ceil(this.ft.rows.array.length/this.size);this.current=this.current>this.total?this.total:this.current<1?1:this.current;this.totalRows=this.ft.rows.array.length;if(this.totalRows>this.size){this.ft.rows.array=this.ft.rows.array.splice((this.current-1)*this.size,this.size);}this.formattedCount=this.format(this.countFormat);},/**
		 * Updates the paging UI setting the state of the pagination control.
		 * @instance
		 * @protected
		 */draw:function draw(){if(this.total<=1){if(!this.detached){if(this.$row){this.$row.detach();}else{this.$wrapper.detach();}this.detached=true;}}else{if(this.detached){if(this.$row){var $tfoot=this.ft.$el.children('tfoot');if($tfoot.length==0){$tfoot=$('<tfoot/>');this.ft.$el.append($tfoot);}this.$row.appendTo($tfoot);}else{this.$wrapper.appendTo(this.$container);}this.detached=false;}if(F.is.jq(this.$cell)){this.$cell.attr('colspan',this.ft.columns.visibleColspan);}this._createLinks();this._setVisible(this.current,this.current>this.previous);this._setNavigation(true);this.$count.text(this.formattedCount);}},/**
		 * Creates the paging UI from the current options setting the various jQuery properties of this component.
		 * @instance
		 * @protected
		 */$create:function $create(){this._createdLinks=0;var position='footable-paging-center';switch(this.position){case'left':position='footable-paging-left';break;case'right':position='footable-paging-right';break;}this.ft.$el.addClass('footable-paging').addClass(position);this.$container=this.container===null?null:$(this.container).first();if(!F.is.jq(this.$container)){var $tfoot=this.ft.$el.children('tfoot');if($tfoot.length==0){$tfoot=$('<tfoot/>');this.ft.$el.append($tfoot);}// add it to a row and then populate it with the search input and column selector dropdown.
this.$row=$('<tr/>',{'class':'footable-paging'}).prependTo($tfoot);this.$container=this.$cell=$('<td/>').attr('colspan',this.ft.columns.visibleColspan).appendTo(this.$row);}else{this.$container.addClass('footable-paging-external').addClass(position);}this.$wrapper=$('<div/>',{'class':'footable-pagination-wrapper'}).appendTo(this.$container);this.$pagination=$('<ul/>',{'class':'pagination'}).on('click.footable','a.footable-page-link',{self:this},this._onPageClicked);this.$count=$('<span/>',{'class':'label label-default'});this.$wrapper.append(this.$pagination,$('<div/>',{'class':'divider'}),this.$count);this.detached=false;},/* PUBLIC */ /**
		 * @summary Uses the supplied format string and replaces the placeholder strings with the current values.
		 * @description This method is used to generate the short description label for the pagination control. i.e. Showing X of Y records. The placeholders for this string are the following:
		 * * {CP} - The current page number.
		 * * {TP} - The total number of pages.
		 * * {PF} - The first row of the current page.
		 * * {PL} - The last row of the current page.
		 * * {TR} - The total rows available.
		 * These placeholders can be supplied in a string like; "Showing {PF} to {PL} of {TR} rows."
		 * @param {string} formatString - The string to be formatted with the paging specific variables.
		 * @returns {string}
		 */format:function format(formatString){var firstRow=this.size*(this.current-1)+1,lastRow=this.size*this.current;if(this.ft.rows.array.length==0){firstRow=0;lastRow=0;}else{lastRow=lastRow>this.totalRows?this.totalRows:lastRow;}return formatString.replace(/\{CP}/g,this.current).replace(/\{TP}/g,this.total).replace(/\{PF}/g,firstRow).replace(/\{PL}/g,lastRow).replace(/\{TR}/g,this.totalRows);},/**
		 * Pages to the first page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */first:function first(){return this._set(1);},/**
		 * Pages to the previous page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */prev:function prev(){return this._set(this.current-1>0?this.current-1:1);},/**
		 * Pages to the next page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */next:function next(){return this._set(this.current+1<this.total?this.current+1:this.total);},/**
		 * Pages to the last page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */last:function last(){return this._set(this.total);},/**
		 * Pages to the specified page.
		 * @instance
		 * @param {number} page - The page number to go to.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */"goto":function goto(page){return this._set(page>this.total?this.total:page<1?1:page);},/**
		 * Shows the previous X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit option value.
		 * @instance
		 */prevPages:function prevPages(){var page=this.$pagination.children('li.footable-page.visible:first').data('page')-1;this._setVisible(page,true);this._setNavigation(false);},/**
		 * Shows the next X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit option value.
		 * @instance
		 */nextPages:function nextPages(){var page=this.$pagination.children('li.footable-page.visible:last').data('page')+1;this._setVisible(page,false);this._setNavigation(false);},/**
		 * Gets or sets the current page size.
		 * @instance
		 * @param {(number|string)} [value] - The new page size to use, this value is supplied to `parseInt` so strings can be used. If not supplied or an invalid valid the current page size is returned.
		 * @returns {(number|undefined)}
		 */pageSize:function pageSize(value){value=parseInt(value);if(isNaN(value)){return this.size;}this.size=value;this.total=Math.ceil(this.ft.rows.all.length/this.size);if(F.is.jq(this.$wrapper)){if(this.$container.is("td")){this.$row.remove();}else{this.$wrapper.remove();}}this.$create();this.ft.draw();},/* PRIVATE */ /**
		 * Performs the required steps to handle paging including the raising of the {@link FooTable.Paging#"before.ft.paging"} and {@link FooTable.Paging#"after.ft.paging"} events.
		 * @instance
		 * @private
		 * @param {number} page - The page to set.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */_set:function _set(page){var self=this,pager=new F.Pager(self.total,self.current,self.size,page,page>self.current);/**
			 * The before.ft.paging event is raised before a sort is applied and allows listeners to modify the pager or cancel it completely by calling preventDefault on the jQuery.Event object.
			 * @event FooTable.Paging#"before.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Pager} pager - The pager that is about to be applied.
			 */return self.ft.raise('before.ft.paging',[pager]).then(function(){pager.page=pager.page>pager.total?pager.total:pager.page;pager.page=pager.page<1?1:pager.page;if(self.current==page)return $.when();self.previous=self.current;self.current=pager.page;return self.ft.draw().then(function(){/**
					 * The after.ft.paging event is raised after a pager has been applied.
					 * @event FooTable.Paging#"after.ft.paging"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Pager} pager - The pager that has been applied.
					 */self.ft.raise('after.ft.paging',[pager]);});});},/**
		 * Creates the pagination links using the current state of the plugin. If the total number of pages is the same as
		 * the last time this function was executed it does nothing.
		 * @instance
		 * @private
		 */_createLinks:function _createLinks(){if(this._createdLinks===this.total)return;var self=this,multiple=self.total>1,link=function link(attr,html,klass){return $('<li/>',{'class':klass}).attr('data-page',attr).append($('<a/>',{'class':'footable-page-link',href:'#'}).data('page',attr).html(html));};self.$pagination.empty();if(multiple){self.$pagination.append(link('first',self.strings.first,'footable-page-nav'));self.$pagination.append(link('prev',self.strings.prev,'footable-page-nav'));if(self.limit>0&&self.limit<self.total){self.$pagination.append(link('prev-limit',self.strings.prevPages,'footable-page-nav'));}}for(var i=0,$li;i<self.total;i++){$li=link(i+1,i+1,'footable-page');self.$pagination.append($li);}if(multiple){if(self.limit>0&&self.limit<self.total){self.$pagination.append(link('next-limit',self.strings.nextPages,'footable-page-nav'));}self.$pagination.append(link('next',self.strings.next,'footable-page-nav'));self.$pagination.append(link('last',self.strings.last,'footable-page-nav'));}self._createdLinks=self.total;},/**
		 * Sets the state for the navigation links of the pagination control and optionally sets the active class state on the current page link.
		 * @instance
		 * @private
		 * @param {boolean} active - Whether or not to set the active class state on the individual page links.
		 */_setNavigation:function _setNavigation(active){if(this.current==1){this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass('disabled');}else{this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass('disabled');}if(this.current==this.total){this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass('disabled');}else{this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass('disabled');}if((this.$pagination.children('li.footable-page.visible:first').data('page')||1)==1){this.$pagination.children('li[data-page="prev-limit"]').addClass('disabled');}else{this.$pagination.children('li[data-page="prev-limit"]').removeClass('disabled');}if((this.$pagination.children('li.footable-page.visible:last').data('page')||this.limit)==this.total){this.$pagination.children('li[data-page="next-limit"]').addClass('disabled');}else{this.$pagination.children('li[data-page="next-limit"]').removeClass('disabled');}if(this.limit>0&&this.total<this.limit){this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css('display','none');}else{this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css('display','');}if(active){this.$pagination.children('li.footable-page').removeClass('active').filter('li[data-page="'+this.current+'"]').addClass('active');}},/**
		 * Sets the visible page using the supplied parameters.
		 * @instance
		 * @private
		 * @param {number} page - The page to make visible.
		 * @param {boolean} right - If set to true the supplied page will be the right most visible pagination link.
		 */_setVisible:function _setVisible(page,right){if(this.limit>0&&this.total>this.limit){if(!this.$pagination.children('li.footable-page[data-page="'+page+'"]').hasClass('visible')){var start=0,end=0;if(right==true){end=page>this.total?this.total:page;start=end-this.limit;}else{start=page<1?0:page-1;end=start+this.limit;}if(start<0){start=0;end=this.limit>this.total?this.total:this.limit;}if(end>this.total){end=this.total;start=this.total-this.limit<0?0:this.total-this.limit;}this.$pagination.children('li.footable-page').removeClass('visible').slice(start,end).addClass('visible');}}else{this.$pagination.children('li.footable-page').removeClass('visible').slice(0,this.total).addClass('visible');}},/**
		 * Handles the click event for all links in the pagination control.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */_onPageClicked:function _onPageClicked(e){e.preventDefault();if($(e.target).closest('li').is('.active,.disabled'))return;var self=e.data.self,page=$(this).data('page');switch(page){case'first':self.first();return;case'prev':self.prev();return;case'next':self.next();return;case'last':self.last();return;case'prev-limit':self.prevPages();return;case'next-limit':self.nextPages();return;default:self._set(page);return;}}});F.components.register('paging',F.Paging,400);})(jQuery,FooTable);(function(F){/**
	 * An object containing the paging options for the plugin. Added by the {@link FooTable.Paging} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow paging on the table.
	 * @prop {string} countFormat="{CP} of {TP}" - A string format used to generate the page count text.
	 * @prop {number} current=1 - The page number to display.
	 * @prop {number} limit=5 - The maximum number of page links to display at once.
	 * @prop {string} position="center" - The string used to specify the alignment of the pagination control.
	 * @prop {number} size=10 - The number of rows displayed per page.
	 * @prop {string} container=null - A selector specifying where to place the paging components UI, if null the UI is displayed within a row in the foot of the table.
	 * @prop {object} strings - An object containing the strings used by the paging buttons.
	 * @prop {string} strings.first="&laquo;" - The string used for the 'first' button.
	 * @prop {string} strings.prev="&lsaquo;" - The string used for the 'previous' button.
	 * @prop {string} strings.next="&rsaquo;" - The string used for the 'next' button.
	 * @prop {string} strings.last="&raquo;" - The string used for the 'last' button.
	 * @prop {string} strings.prevPages="..." - The string used for the 'previous X pages' button.
	 * @prop {string} strings.nextPages="..." - The string used for the 'next X pages' button.
	 */F.Defaults.prototype.paging={enabled:false,countFormat:'{CP} of {TP}',current:1,limit:5,position:'center',size:10,container:null,strings:{first:'&laquo;',prev:'&lsaquo;',next:'&rsaquo;',last:'&raquo;',prevPages:'...',nextPages:'...'}};})(FooTable);(function(F){/**
	 * Navigates to the specified page number. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @param {number} num - The page number to go to.
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#goto
	 */F.Table.prototype.gotoPage=function(num){return this.use(F.Paging)["goto"](num);};/**
	 * Navigates to the next page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#next
	 */F.Table.prototype.nextPage=function(){return this.use(F.Paging).next();};/**
	 * Navigates to the previous page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#prev
	 */F.Table.prototype.prevPage=function(){return this.use(F.Paging).prev();};/**
	 * Navigates to the first page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#first
	 */F.Table.prototype.firstPage=function(){return this.use(F.Paging).first();};/**
	 * Navigates to the last page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#last
	 */F.Table.prototype.lastPage=function(){return this.use(F.Paging).last();};/**
	 * Shows the next X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit.size option value. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @see FooTable.Paging#nextPages
	 */F.Table.prototype.nextPages=function(){return this.use(F.Paging).nextPages();};/**
	 * Shows the previous X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit.size option value. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @see FooTable.Paging#prevPages
	 */F.Table.prototype.prevPages=function(){return this.use(F.Paging).prevPages();};/**
	 * Gets or sets the current page size
	 * @instance
	 * @param {number} [value] - The new page size to use.
	 * @returns {(number|undefined)}
	 * @see FooTable.Paging#pageSize
	 */F.Table.prototype.pageSize=function(value){return this.use(F.Paging).pageSize(value);};})(FooTable);(function($,F){F.Editing=F.Component.extend(/** @lends FooTable.Editing */{/**
		 * The editing component adds a column with edit and delete buttons to each row as well as a single add row button in the footer.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Editing}
		 */construct:function construct(table){// call the base constructor
this._super(table,table.o.editing.enabled);/**
			 * Whether or not to automatically page to a new row when it is added to the table.
			 * @type {boolean}
			 */this.pageToNew=table.o.editing.pageToNew;/**
			 * Whether or not the editing column and add row button are always visible.
			 * @type {boolean}
			 */this.alwaysShow=table.o.editing.alwaysShow;/**
			 * The options for the editing column. @see {@link FooTable.EditingColumn} for more info.
			 * @type {object}
			 * @prop {string} classes="footable-editing" - A space separated string of class names to apply to all cells in the column.
			 * @prop {string} name="editing" - The name of the column.
			 * @prop {string} title="" - The title displayed in the header row of the table for the column.
			 * @prop {boolean} filterable=false - Whether or not the column should be filterable when using the filtering component.
			 * @prop {boolean} sortable=false - Whether or not the column should be sortable when using the sorting component.
			 */this.column=$.extend(true,{},table.o.editing.column,{visible:this.alwaysShow});/**
			 * The position of the editing column in the table as well as the alignment of the buttons.
			 * @type {string}
			 */this.position=table.o.editing.position;/**
			 * The text that appears in the show button. This can contain HTML.
			 * @type {string}
			 */this.showText=table.o.editing.showText;/**
			 * The text that appears in the hide button. This can contain HTML.
			 * @type {string}
			 */this.hideText=table.o.editing.hideText;/**
			 * The text that appears in the add button. This can contain HTML.
			 * @type {string}
			 */this.addText=table.o.editing.addText;/**
			 * The text that appears in the edit button. This can contain HTML.
			 * @type {string}
			 */this.editText=table.o.editing.editText;/**
			 * The text that appears in the delete button. This can contain HTML.
			 * @type {string}
			 */this.deleteText=table.o.editing.deleteText;/**
			 * The text that appears in the view button. This can contain HTML.
			 * @type {string}
			 */this.viewText=table.o.editing.viewText;/**
			 * Whether or not to show the Add Row button.
			 * @type {boolean}
			 */this.allowAdd=table.o.editing.allowAdd;/**
			 * Whether or not to show the Edit Row button.
			 * @type {boolean}
			 */this.allowEdit=table.o.editing.allowEdit;/**
			 * Whether or not to show the Delete Row button.
			 * @type {boolean}
			 */this.allowDelete=table.o.editing.allowDelete;/**
			 * Whether or not to show the View Row button.
			 * @type {boolean}
			 */this.allowView=table.o.editing.allowView;/**
			 * Caches the row button elements to help with performance.
			 * @type {(null|jQuery)}
			 * @private
			 */this._$buttons=null;/**
			 * This object is used to contain the callbacks for the add, edit and delete row buttons.
			 * @type {object}
			 * @prop {function} addRow
			 * @prop {function} editRow
			 * @prop {function} deleteRow
			 * @prop {function} viewRow
			 */this.callbacks={addRow:F.checkFnValue(this,table.o.editing.addRow),editRow:F.checkFnValue(this,table.o.editing.editRow),deleteRow:F.checkFnValue(this,table.o.editing.deleteRow),viewRow:F.checkFnValue(this,table.o.editing.viewRow)};},/* PROTECTED */ /**
		 * Checks the supplied data and options for the editing component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Editing#"preinit.ft.editing"
		 */preinit:function preinit(data){var self=this;/**
			 * The preinit.ft.editing event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Editing#"preinit.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */this.ft.raise('preinit.ft.editing',[data]).then(function(){if(self.ft.$el.hasClass('footable-editing'))self.enabled=true;self.enabled=F.is["boolean"](data.editing)?data.editing:self.enabled;if(!self.enabled)return;self.pageToNew=F.is["boolean"](data.editingPageToNew)?data.editingPageToNew:self.pageToNew;self.alwaysShow=F.is["boolean"](data.editingAlwaysShow)?data.editingAlwaysShow:self.alwaysShow;self.position=F.is.string(data.editingPosition)?data.editingPosition:self.position;self.showText=F.is.string(data.editingShowText)?data.editingShowText:self.showText;self.hideText=F.is.string(data.editingHideText)?data.editingHideText:self.hideText;self.addText=F.is.string(data.editingAddText)?data.editingAddText:self.addText;self.editText=F.is.string(data.editingEditText)?data.editingEditText:self.editText;self.deleteText=F.is.string(data.editingDeleteText)?data.editingDeleteText:self.deleteText;self.viewText=F.is.string(data.editingViewText)?data.editingViewText:self.viewText;self.allowAdd=F.is["boolean"](data.editingAllowAdd)?data.editingAllowAdd:self.allowAdd;self.allowEdit=F.is["boolean"](data.editingAllowEdit)?data.editingAllowEdit:self.allowEdit;self.allowDelete=F.is["boolean"](data.editingAllowDelete)?data.editingAllowDelete:self.allowDelete;self.allowView=F.is["boolean"](data.editingAllowView)?data.editingAllowView:self.allowView;self.column=new F.EditingColumn(self.ft,self,$.extend(true,{},self.column,data.editingColumn,{visible:self.alwaysShow}));if(self.ft.$el.hasClass('footable-editing-left'))self.position='left';if(self.ft.$el.hasClass('footable-editing-right'))self.position='right';if(self.position==='right'){self.column.index=self.ft.columns.array.length;}else{self.column.index=0;for(var i=0,len=self.ft.columns.array.length;i<len;i++){self.ft.columns.array[i].index+=1;}}self.ft.columns.array.push(self.column);self.ft.columns.array.sort(function(a,b){return a.index-b.index;});self.callbacks.addRow=F.checkFnValue(self,data.editingAddRow,self.callbacks.addRow);self.callbacks.editRow=F.checkFnValue(self,data.editingEditRow,self.callbacks.editRow);self.callbacks.deleteRow=F.checkFnValue(self,data.editingDeleteRow,self.callbacks.deleteRow);self.callbacks.viewRow=F.checkFnValue(self,data.editingViewRow,self.callbacks.viewRow);},function(){self.enabled=false;});},/**
		 * Initializes the editing component for the plugin using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Editing#"init.ft.editing"
		 */init:function init(){/**
			 * The init.ft.editing event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Editing#"init.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */var self=this;this.ft.raise('init.ft.editing').then(function(){self.$create();},function(){self.enabled=false;});},/**
		 * Destroys the editing component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Editing#"destroy.ft.editing"
		 */destroy:function destroy(){/**
			 * The destroy.ft.editing event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Editing#"destroy.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */var self=this;this.ft.raise('destroy.ft.editing').then(function(){self.ft.$el.removeClass('footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view').off('click.ft.editing').find('tfoot > tr.footable-editing').remove();});},/**
		 * Creates the editing UI from the current options setting the various jQuery properties of this component.
		 * @instance
		 * @protected
		 */$create:function $create(){var self=this,position=self.position==='right'?'footable-editing-right':'footable-editing-left';self.ft.$el.addClass('footable-editing').addClass(position).on('click.ft.editing','.footable-show',{self:self},self._onShowClick).on('click.ft.editing','.footable-hide',{self:self},self._onHideClick).on('click.ft.editing','.footable-edit',{self:self},self._onEditClick).on('click.ft.editing','.footable-delete',{self:self},self._onDeleteClick).on('click.ft.editing','.footable-view',{self:self},self._onViewClick).on('click.ft.editing','.footable-add',{self:self},self._onAddClick);self.$cell=$('<td/>').attr('colspan',self.ft.columns.visibleColspan).append(self.$buttonShow());if(self.allowAdd){self.$cell.append(self.$buttonAdd());}self.$cell.append(self.$buttonHide());if(self.alwaysShow){self.ft.$el.addClass('footable-editing-always-show');}if(!self.allowAdd)self.ft.$el.addClass('footable-editing-no-add');if(!self.allowEdit)self.ft.$el.addClass('footable-editing-no-edit');if(!self.allowDelete)self.ft.$el.addClass('footable-editing-no-delete');if(!self.allowView)self.ft.$el.addClass('footable-editing-no-view');var $tfoot=self.ft.$el.children('tfoot');if($tfoot.length==0){$tfoot=$('<tfoot/>');self.ft.$el.append($tfoot);}self.$row=$('<tr/>',{'class':'footable-editing'}).append(self.$cell).appendTo($tfoot);},/**
		 * Creates the show button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */$buttonShow:function $buttonShow(){return'<button type="button" class="btn btn-primary footable-show">'+this.showText+'</button>';},/**
		 * Creates the hide button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */$buttonHide:function $buttonHide(){return'<button type="button" class="btn btn-default footable-hide">'+this.hideText+'</button>';},/**
		 * Creates the add button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */$buttonAdd:function $buttonAdd(){return'<button type="button" class="btn btn-primary footable-add">'+this.addText+'</button> ';},/**
		 * Creates the edit button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */$buttonEdit:function $buttonEdit(){return'<button type="button" class="btn btn-default footable-edit">'+this.editText+'</button> ';},/**
		 * Creates the delete button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */$buttonDelete:function $buttonDelete(){return'<button type="button" class="btn btn-default footable-delete">'+this.deleteText+'</button>';},/**
		 * Creates the view button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */$buttonView:function $buttonView(){return'<button type="button" class="btn btn-default footable-view">'+this.viewText+'</button> ';},/**
		 * Creates the button group for the row buttons.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */$rowButtons:function $rowButtons(){if(F.is.jq(this._$buttons))return this._$buttons.clone();this._$buttons=$('<div class="btn-group btn-group-xs" role="group"></div>');if(this.allowView)this._$buttons.append(this.$buttonView());if(this.allowEdit)this._$buttons.append(this.$buttonEdit());if(this.allowDelete)this._$buttons.append(this.$buttonDelete());return this._$buttons;},/**
		 * Performs the drawing of the component.
		 */draw:function draw(){this.$cell.attr('colspan',this.ft.columns.visibleColspan);},/**
		 * Handles the edit button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"edit.ft.editing"
		 */_onEditClick:function _onEditClick(e){e.preventDefault();var self=e.data.self,row=$(this).closest('tr').data('__FooTableRow__');if(row instanceof F.Row){/**
				 * The edit.ft.editing event is raised before its callback is executed.
				 * Calling preventDefault on this event will prevent the callback from being executed.
				 * @event FooTable.Editing#"edit.ft.editing"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 * @param {FooTable.Row} row - The row to be edited.
				 */self.ft.raise('edit.ft.editing',[row]).then(function(){self.callbacks.editRow.call(self.ft,row);});}},/**
		 * Handles the delete button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"delete.ft.editing"
		 */_onDeleteClick:function _onDeleteClick(e){e.preventDefault();var self=e.data.self,row=$(this).closest('tr').data('__FooTableRow__');if(row instanceof F.Row){/**
				 * The delete.ft.editing event is raised before its callback is executed.
				 * Calling preventDefault on this event will prevent the callback from being executed.
				 * @event FooTable.Editing#"delete.ft.editing"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 * @param {FooTable.Row} row - The row to be deleted.
				 */self.ft.raise('delete.ft.editing',[row]).then(function(){self.callbacks.deleteRow.call(self.ft,row);});}},/**
		 * Handles the view button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"view.ft.editing"
		 */_onViewClick:function _onViewClick(e){e.preventDefault();var self=e.data.self,row=$(this).closest('tr').data('__FooTableRow__');if(row instanceof F.Row){/**
				 * The view.ft.editing event is raised before its callback is executed.
				 * Calling preventDefault on this event will prevent the callback from being executed.
				 * @event FooTable.Editing#"view.ft.editing"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 * @param {FooTable.Row} row - The row to be viewed.
				 */self.ft.raise('view.ft.editing',[row]).then(function(){self.callbacks.viewRow.call(self.ft,row);});}},/**
		 * Handles the add button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"add.ft.editing"
		 */_onAddClick:function _onAddClick(e){e.preventDefault();var self=e.data.self;/**
			 * The add.ft.editing event is raised before its callback is executed.
			 * Calling preventDefault on this event will prevent the callback from being executed.
			 * @event FooTable.Editing#"add.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */self.ft.raise('add.ft.editing').then(function(){self.callbacks.addRow.call(self.ft);});},/**
		 * Handles the show button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"show.ft.editing"
		 */_onShowClick:function _onShowClick(e){e.preventDefault();var self=e.data.self;/**
			 * The show.ft.editing event is raised before its callback is executed.
			 * Calling preventDefault on this event will prevent the callback from being executed.
			 * @event FooTable.Editing#"show.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */self.ft.raise('show.ft.editing').then(function(){self.ft.$el.addClass('footable-editing-show');self.column.visible=true;self.ft.draw();});},/**
		 * Handles the hide button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"show.ft.editing"
		 */_onHideClick:function _onHideClick(e){e.preventDefault();var self=e.data.self;/**
			 * The hide.ft.editing event is raised before its callback is executed.
			 * Calling preventDefault on this event will prevent the callback from being executed.
			 * @event FooTable.Editing#"hide.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */self.ft.raise('hide.ft.editing').then(function(){self.ft.$el.removeClass('footable-editing-show');self.column.visible=false;self.ft.draw();});}});F.components.register('editing',F.Editing,850);})(jQuery,FooTable);(function($,F){F.EditingColumn=F.Column.extend(/** @lends FooTable.EditingColumn */{/**
		 * The Editing column class is used to create the column containing the editing buttons.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {FooTable.Editing} editing - The parent {@link FooTable.Editing} component this column is used with.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.EditingColumn}
		 */construct:function construct(instance,editing,definition){this._super(instance,definition,'editing');this.editing=editing;this.internal=true;},/**
		 * After the column has been defined this ensures that the $el property is a jQuery object by either creating or updating the current value.
		 * @instance
		 * @protected
		 * @this FooTable.Column
		 */$create:function $create(){(this.$el=!this.virtual&&F.is.jq(this.$el)?this.$el:$('<th/>',{'class':'footable-editing'})).html(this.title);},/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and
		 * will be provided to the {@link FooTable.EditingColumn#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(jQuery)}
		 */parser:function parser(valueOrElement){if(F.is.string(valueOrElement))valueOrElement=$($.trim(valueOrElement));if(F.is.element(valueOrElement))valueOrElement=$(valueOrElement);if(F.is.jq(valueOrElement)){var tagName=valueOrElement.prop('tagName').toLowerCase();if(tagName=='td'||tagName=='th')return valueOrElement.data('value')||valueOrElement.contents();return valueOrElement;}return null;},/**
		 * Creates a cell to be used in the supplied row for this column.
		 * @param {FooTable.Row} row - The row to create the cell for.
		 * @returns {FooTable.Cell}
		 */createCell:function createCell(row){var $buttons=this.editing.$rowButtons(),$cell=$('<td/>').append($buttons);if(F.is.jq(row.$el)){if(this.index===0){$cell.prependTo(row.$el);}else{$cell.insertAfter(row.$el.children().eq(this.index-1));}}return new F.Cell(this.ft,row,this,$cell||$cell.html());}});F.columns.register('editing',F.EditingColumn);})(jQuery,FooTable);(function($,F){/**
	 * An object containing the editing options for the plugin. Added by the {@link FooTable.Editing} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow editing on the table.
	 * @prop {boolean} pageToNew=true - Whether or not to automatically page to a new row when it is added to the table.
	 * @prop {string} position="right" - The position of the editing column in the table as well as the alignment of the buttons.
	 * @prop {boolean} alwaysShow=false - Whether or not the editing column and add row button are always visible.
	 * @prop {function} addRow - The callback function to execute when the add row button is clicked.
	 * @prop {function} editRow - The callback function to execute when the edit row button is clicked.
	 * @prop {function} deleteRow - The callback function to execute when the delete row button is clicked.
	 * @prop {function} viewRow - The callback function to execute when the view row button is clicked.
	 * @prop {string} showText - The text that appears in the show button. This can contain HTML.
	 * @prop {string} hideText - The text that appears in the hide button. This can contain HTML.
	 * @prop {string} addText - The text that appears in the add button. This can contain HTML.
	 * @prop {string} editText - The text that appears in the edit button. This can contain HTML.
	 * @prop {string} deleteText - The text that appears in the delete button. This can contain HTML.
	 * @prop {string} viewText - The text that appears in the view button. This can contain HTML.
	 * @prop {boolean} allowAdd - Whether or not to show the Add Row button.
	 * @prop {boolean} allowEdit - Whether or not to show the Edit Row button.
	 * @prop {boolean} allowDelete - Whether or not to show the Delete Row button.
	 * @prop {boolean} allowView - Whether or not to show the View Row button.
	 * @prop {object} column - The options for the editing column. @see {@link FooTable.EditingColumn} for more info.
	 * @prop {string} column.classes="footable-editing" - A space separated string of class names to apply to all cells in the column.
	 * @prop {string} column.name="editing" - The name of the column.
	 * @prop {string} column.title="" - The title displayed in the header row of the table for the column.
	 * @prop {boolean} column.filterable=false - Whether or not the column should be filterable when using the filtering component.
	 * @prop {boolean} column.sortable=false - Whether or not the column should be sortable when using the sorting component.
	 */F.Defaults.prototype.editing={enabled:false,pageToNew:true,position:'right',alwaysShow:false,addRow:function addRow(){},editRow:function editRow(row){},deleteRow:function deleteRow(row){},viewRow:function viewRow(row){},showText:'<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows',hideText:'Cancel',addText:'New row',editText:'<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',deleteText:'<span class="fooicon fooicon-trash" aria-hidden="true"></span>',viewText:'<span class="fooicon fooicon-stats" aria-hidden="true"></span>',allowAdd:true,allowEdit:true,allowDelete:true,allowView:false,column:{classes:'footable-editing',name:'editing',title:'',filterable:false,sortable:false}};})(jQuery,FooTable);(function($,F){if(F.is.defined(F.Paging)){/**
		 * Holds a shallow clone of the un-paged {@link FooTable.Rows#array} value before paging occurs and superfluous rows are removed. Added by the {@link FooTable.Editing} component.
		 * @instance
		 * @public
		 * @type {Array<FooTable.Row>}
		 */F.Paging.prototype.unpaged=[];// override the default predraw method with one that sets the unpaged property.
F.Paging.extend('predraw',function(){this.unpaged=this.ft.rows.array.slice(0);// create a shallow clone for later use
this._super();// call the original method
});}})(jQuery,FooTable);(function($,F){/**
	 * Adds the row to the table.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 * @returns {jQuery.Deferred}
	 */F.Row.prototype.add=function(redraw){redraw=F.is["boolean"](redraw)?redraw:true;var self=this;return $.Deferred(function(d){var index=self.ft.rows.all.push(self)-1;if(redraw){return self.ft.draw().then(function(){d.resolve(index);});}else{d.resolve(index);}});};/**
	 * Removes the row from the table.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 * @returns {jQuery.Deferred}
	 */F.Row.prototype["delete"]=function(redraw){redraw=F.is["boolean"](redraw)?redraw:true;var self=this;return $.Deferred(function(d){var index=self.ft.rows.all.indexOf(self);if(F.is.number(index)&&index>=0&&index<self.ft.rows.all.length){self.ft.rows.all.splice(index,1);if(redraw){return self.ft.draw().then(function(){d.resolve(self);});}}d.resolve(self);});};if(F.is.defined(F.Paging)){// override the default add method with one that supports paging
F.Row.extend('add',function(redraw){redraw=F.is["boolean"](redraw)?redraw:true;var self=this,added=this._super(redraw),editing=self.ft.use(F.Editing),paging;if(editing&&editing.pageToNew&&(paging=self.ft.use(F.Paging))&&redraw){return added.then(function(){var index=paging.unpaged.indexOf(self);// find this row in the unpaged array (this array will be sorted and filtered)
var page=Math.ceil((index+1)/paging.size);// calculate the page the new row is on
if(paging.current!==page){// goto the page if we need to
return paging["goto"](page);}});}return added;});}if(F.is.defined(F.Sorting)){// override the default val method with one that supports sorting and paging
F.Row.extend('val',function(data,redraw){redraw=F.is["boolean"](redraw)?redraw:true;var result=this._super(data);if(!F.is.hash(data)){return result;}var self=this;if(redraw){self.ft.draw().then(function(){var editing=self.ft.use(F.Editing),paging;if(F.is.defined(F.Paging)&&editing&&editing.pageToNew&&(paging=self.ft.use(F.Paging))){var index=paging.unpaged.indexOf(self);// find this row in the unpaged array (this array will be sorted and filtered)
var page=Math.ceil((index+1)/paging.size);// calculate the page the new row is on
if(paging.current!==page){// goto the page if we need to
return paging["goto"](page);}}});}return result;});}})(jQuery,FooTable);(function(F){/**
	 * Adds a row to the underlying {@link FooTable.Rows#all} array.
	 * @param {(object|FooTable.Row)} dataOrRow - A hash containing the row values or an actual {@link FooTable.Row} object.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 */F.Rows.prototype.add=function(dataOrRow,redraw){var row=dataOrRow;if(F.is.hash(dataOrRow)){row=new FooTable.Row(this.ft,this.ft.columns.array,dataOrRow);}if(row instanceof FooTable.Row){row.add(redraw);}};/**
	 * Updates a row in the underlying {@link FooTable.Rows#all} array.
	 * @param {(number|FooTable.Row)} indexOrRow - The index to update or the actual {@link FooTable.Row} object.
	 * @param {object} data - A hash containing the new row values.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 */F.Rows.prototype.update=function(indexOrRow,data,redraw){var len=this.ft.rows.all.length,row=indexOrRow;if(F.is.number(indexOrRow)&&indexOrRow>=0&&indexOrRow<len){row=this.ft.rows.all[indexOrRow];}if(row instanceof FooTable.Row&&F.is.hash(data)){row.val(data,redraw);}};/**
	 * Deletes a row from the underlying {@link FooTable.Rows#all} array.
	 * @param {(number|FooTable.Row)} indexOrRow - The index to delete or the actual {@link FooTable.Row} object.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 */F.Rows.prototype["delete"]=function(indexOrRow,redraw){var len=this.ft.rows.all.length,row=indexOrRow;if(F.is.number(indexOrRow)&&indexOrRow>=0&&indexOrRow<len){row=this.ft.rows.all[indexOrRow];}if(row instanceof FooTable.Row){row["delete"](redraw);}};})(FooTable);(function($,F){// global int to use if the table has no ID
var _uid2=0,// a hash value for the current url
_url_hash=function(str){var i,l,hval=0x811c9dc5;for(i=0,l=str.length;i<l;i++){hval^=str.charCodeAt(i);hval+=(hval<<1)+(hval<<4)+(hval<<7)+(hval<<8)+(hval<<24);}return hval>>>0;}(location.origin+location.pathname);F.State=F.Component.extend(/** @lends FooTable.State */{/**
		 * The state component adds the ability for the table to remember its basic state for filtering, paging and sorting.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.State}
		 */construct:function construct(table){// call the constructor of the base class
this._super(table,table.o.state.enabled);// Change this value if an update to this component requires any stored data to be reset
this._key='1';/**
			 * The key to use to store the state for this table.
			 * @type {(null|string)}
			 */this.key=this._key+(F.is.string(table.o.state.key)?table.o.state.key:this._uid());/**
			 * Whether or not to allow the filtering component to store it's state.
			 * @type {boolean}
			 */this.filtering=F.is["boolean"](table.o.state.filtering)?table.o.state.filtering:true;/**
			 * Whether or not to allow the paging component to store it's state.
			 * @type {boolean}
			 */this.paging=F.is["boolean"](table.o.state.paging)?table.o.state.paging:true;/**
			 * Whether or not to allow the sorting component to store it's state.
			 * @type {boolean}
			 */this.sorting=F.is["boolean"](table.o.state.sorting)?table.o.state.sorting:true;},/* PROTECTED */ /**
		 * Checks the supplied data and options for the state component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.State#"preinit.ft.state"
		 * @this FooTable.State
		 */preinit:function preinit(data){var self=this;/**
			 * The preinit.ft.state event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.State#"preinit.ft.state"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */this.ft.raise('preinit.ft.state',[data]).then(function(){self.enabled=F.is["boolean"](data.state)?data.state:self.enabled;if(!self.enabled)return;self.key=self._key+(F.is.string(data.stateKey)?data.stateKey:self.key);self.filtering=F.is["boolean"](data.stateFiltering)?data.stateFiltering:self.filtering;self.paging=F.is["boolean"](data.statePaging)?data.statePaging:self.paging;self.sorting=F.is["boolean"](data.stateSorting)?data.stateSorting:self.sorting;},function(){self.enabled=false;});},/**
		 * Gets the state value for the specified key for this table.
		 * @instance
		 * @param {string} key - The key to get the value for.
		 * @returns {(*|null)}
		 */get:function get(key){return JSON.parse(localStorage.getItem(this.key+':'+key));},/**
		 * Sets the state value for the specified key for this table.
		 * @instance
		 * @param {string} key - The key to set the value for.
		 * @param {*} data - The value to store for the key. This value must be JSON.stringify friendly.
		 */set:function set(key,data){localStorage.setItem(this.key+':'+key,JSON.stringify(data));},/**
		 * Clears the state value for the specified key for this table.
		 * @instance
		 * @param {string} key - The key to clear the value for.
		 */remove:function remove(key){localStorage.removeItem(this.key+':'+key);},/**
		 * Executes the {@link FooTable.Component#readState} function on all components.
		 * @instance
		 */read:function read(){this.ft.execute(false,true,'readState');},/**
		 * Executes the {@link FooTable.Component#writeState} function on all components.
		 * @instance
		 */write:function write(){this.ft.execute(false,true,'writeState');},/**
		 * Executes the {@link FooTable.Component#clearState} function on all components.
		 * @instance
		 */clear:function clear(){this.ft.execute(false,true,'clearState');},/**
		 * Generates a unique identifier for the current {@link FooTable.Table} if one is not supplied through the options.
		 * This value is a combination of the url hash and either the element ID or an incremented global int value.
		 * @instance
		 * @returns {*}
		 * @private
		 */_uid:function _uid(){var id=this.ft.$el.attr('id');return _url_hash+'_'+(F.is.string(id)?id:++_uid2);}});F.components.register('state',F.State,700);})(jQuery,FooTable);(function(F){/**
	 * This method is called from the {@link FooTable.State#read} method and allows a component to retrieve its' stored state.
	 * @instance
	 * @protected
	 * @function
	 */F.Component.prototype.readState=function(){};/**
	 * This method is called from the {@link FooTable.State#write} method and allows a component to write its' current state to the store.
	 * @instance
	 * @protected
	 * @function
	 */F.Component.prototype.writeState=function(){};/**
	 * This method is called from the {@link FooTable.State#clear} method and allows a component to clear any stored state.
	 * @instance
	 * @protected
	 * @function
	 */F.Component.prototype.clearState=function(){};})(FooTable);(function(F){/**
	 * An object containing the state options for the plugin. Added by the {@link FooTable.State} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow state to be stored for the table. This overrides the individual component enable options.
	 * @prop {boolean} filtering=true - Whether or not to allow the filtering state to be stored.
	 * @prop {boolean} paging=true - Whether or not to allow the filtering state to be stored.
	 * @prop {boolean} sorting=true - Whether or not to allow the filtering state to be stored.
	 * @prop {string} key=null - The unique key to use to store the table's data.
	 */F.Defaults.prototype.state={enabled:false,filtering:true,paging:true,sorting:true,key:null};})(FooTable);(function(F){if(!F.Filtering)return;/**
	 * Allows the filtering component to retrieve its' stored state.
	 */F.Filtering.prototype.readState=function(){if(this.ft.state.filtering){var state=this.ft.state.get('filtering');if(F.is.hash(state)&&!F.is.emptyArray(state.filters)){this.filters=this.ensure(state.filters);}}};/**
	 * Allows the filtering component to write its' current state to the store.
	 */F.Filtering.prototype.writeState=function(){if(this.ft.state.filtering){var filters=F.arr.map(this.filters,function(f){return{name:f.name,query:f.query instanceof F.Query?f.query.val():f.query,columns:F.arr.map(f.columns,function(c){return c.name;}),hidden:f.hidden,space:f.space,connectors:f.connectors,ignoreCase:f.ignoreCase};});this.ft.state.set('filtering',{filters:filters});}};/**
	 * Allows the filtering component to clear any stored state.
	 */F.Filtering.prototype.clearState=function(){if(this.ft.state.filtering){this.ft.state.remove('filtering');}};})(FooTable);(function(F){if(!F.Paging)return;/**
	 * Allows the paging component to retrieve its' stored state.
	 */F.Paging.prototype.readState=function(){if(this.ft.state.paging){var state=this.ft.state.get('paging');if(F.is.hash(state)){this.current=state.current;this.size=state.size;}}};/**
	 * Allows the paging component to write its' current state to the store.
	 */F.Paging.prototype.writeState=function(){if(this.ft.state.paging){this.ft.state.set('paging',{current:this.current,size:this.size});}};/**
	 * Allows the paging component to clear any stored state.
	 */F.Paging.prototype.clearState=function(){if(this.ft.state.paging){this.ft.state.remove('paging');}};})(FooTable);(function(F){if(!F.Sorting)return;/**
	 * Allows the sorting component to retrieve its' stored state.
	 */F.Sorting.prototype.readState=function(){if(this.ft.state.sorting){var state=this.ft.state.get('sorting');if(F.is.hash(state)){var column=this.ft.columns.get(state.column);if(column instanceof F.Column){this.column=column;this.column.direction=state.direction;}}}};/**
	 * Allows the sorting component to write its' current state to the store.
	 */F.Sorting.prototype.writeState=function(){if(this.ft.state.sorting&&this.column instanceof F.Column){this.ft.state.set('sorting',{column:this.column.name,direction:this.column.direction});}};/**
	 * Allows the sorting component to clear any stored state.
	 */F.Sorting.prototype.clearState=function(){if(this.ft.state.sorting){this.ft.state.remove('sorting');}};})(FooTable);(function(F){// hook into the _construct method so we can add the state property to the table.
F.Table.extend('_construct',function(ready){this.state=this.use(FooTable.State);return this._super(ready);});// hook into the _preinit method so we can trigger a plugin wide read state operation.
F.Table.extend('_preinit',function(){var self=this;return self._super().then(function(){if(self.state.enabled){self.state.read();}});});// hook into the draw method so we can trigger a plugin wide write state operation.
F.Table.extend('draw',function(){var self=this;return self._super().then(function(){if(self.state.enabled){self.state.write();}});});})(FooTable);(function($,F){F.Export=F.Component.extend(/** @lends FooTable.Export */{/**
		 * @summary This component provides some basic export functionality.
		 * @memberof FooTable
		 * @constructs Export
		 * @param {FooTable.Table} table - The current instance of the plugin.
		 */construct:function construct(table){// call the constructor of the base class
this._super(table,true);/**
			 * @summary A snapshot of the working set of rows prior to being trimmed by the paging component.
			 * @memberof FooTable.Export#
			 * @name snapshot
			 * @type {FooTable.Row[]}
			 */this.snapshot=[];},/**
		 * @summary Hooks into the predraw pipeline after sorting and filtering have taken place but prior to paging.
		 * @memberof FooTable.Export#
		 * @function predraw
		 * @description This method allows us to take a snapshot of the working set of rows before they are trimmed by the paging component and is called by the plugin instance.
		 */predraw:function predraw(){this.snapshot=this.ft.rows.array.slice(0);},/**
		 * @summary Return the columns as simple JavaScript objects in an array.
		 * @memberof FooTable.Export#
		 * @function columns
		 * @returns {Object[]}
		 */columns:function columns(){var result=[];F.arr.each(this.ft.columns.array,function(column){if(!column.internal){result.push({type:column.type,name:column.name,title:column.title,visible:column.visible,hidden:column.hidden,classes:column.classes,style:column.style});}});return result;},/**
		 * @summary Return the rows as simple JavaScript objects in an array.
		 * @memberof FooTable.Export#
		 * @function rows
		 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
		 * @returns {Object[]}
		 */rows:function rows(filtered){filtered=F.is["boolean"](filtered)?filtered:false;var rows=filtered?this.ft.rows.all:this.snapshot,result=[];F.arr.each(rows,function(row){result.push(row.val());});return result;},/**
		 * @summary Return the columns and rows as a properly formatted JSON object.
		 * @memberof FooTable.Export#
		 * @function json
		 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
		 * @returns {Object}
		 */json:function json(filtered){return JSON.parse(JSON.stringify({columns:this.columns(),rows:this.rows(filtered)}));},/**
		 * @summary Return the columns and rows as a properly formatted CSV value.
		 * @memberof FooTable.Export#
		 * @function csv
		 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
		 * @returns {string}
		 */csv:function csv(filtered){var csv="",columns=this.columns(),value,escaped;F.arr.each(columns,function(column,i){escaped='"'+column.title.replace(/"/g,'""')+'"';csv+=i===0?escaped:","+escaped;});csv+="\n";var rows=filtered?this.ft.rows.all:this.snapshot;F.arr.each(rows,function(row){F.arr.each(row.cells,function(cell,i){if(!cell.column.internal){value=cell.column.stringify.call(cell.column,cell.value,cell.ft.o,cell.row.value);escaped='"'+value.replace(/"/g,'""')+'"';csv+=i===0?escaped:","+escaped;}});csv+="\n";});return csv;}});// register the component using a priority of 490 which falls just after filtering (500) and before paging (400).
F.components.register("export",F.Export,490);})(jQuery,FooTable);(function(F){// this is used to define the filtering specific properties on column creation
F.Column.prototype.__export_define__=function(definition){this.stringify=F.checkFnValue(this,definition.stringify,this.stringify);};// overrides the public define method and replaces it with our own
F.Column.extend('define',function(definition){this._super(definition);// call the base so we don't have to redefine any previously set properties
this.__export_define__(definition);// then call our own
});/**
	 * @summary Return the supplied value as a string.
	 * @memberof FooTable.Column#
	 * @function stringify
	 * @returns {string}
	 */F.Column.prototype.stringify=function(value,options,rowData){return value+"";};if(F.is.defined(F.DateColumn)){// override the base method for DateColumns
F.DateColumn.prototype.stringify=function(value,options,rowData){return F.is.object(value)&&F.is["boolean"](value._isAMomentObject)&&value.isValid()?value.format(this.formatString):'';};}// override the base method for ObjectColumns
F.ObjectColumn.prototype.stringify=function(value,options,rowData){return F.is.object(value)?JSON.stringify(value):"";};// override the base method for ArrayColumns
F.ArrayColumn.prototype.stringify=function(value,options,rowData){return F.is.array(value)?JSON.stringify(value):"";};})(FooTable);(function(F){/**
	 * @summary Return the columns and rows as a properly formatted JSON object.
	 * @memberof FooTable.Table#
	 * @function toJSON
	 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
	 * @returns {Object}
	 */F.Table.prototype.toJSON=function(filtered){return this.use(F.Export).json(filtered);};/**
	 * @summary Return the columns and rows as a properly formatted CSV value.
	 * @memberof FooTable.Table#
	 * @function toCSV
	 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
	 * @returns {string}
	 */F.Table.prototype.toCSV=function(filtered){return this.use(F.Export).csv(filtered);};})(FooTable);RegExp.escape=function(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");},function(a){"use strict";var b;b="undefined"!=typeof jQuery&&jQuery?jQuery:{},b.csv={defaults:{separator:",",delimiter:'"',headers:!0},hooks:{castToScalar:function castToScalar(a){var b=/\./;if(isNaN(a))return a;if(b.test(a))return parseFloat(a);var c=parseInt(a);return isNaN(c)?null:c;}},parsers:{parse:function parse(b,c){function d(){if(j=0,k="",c.start&&c.state.rowNum<c.start)return i=[],c.state.rowNum++,void(c.state.colNum=1);if(c.onParseEntry===a)h.push(i);else{var b=c.onParseEntry(i,c.state);b!==!1&&h.push(b);}i=[],c.end&&c.state.rowNum>=c.end&&(l=!0),c.state.rowNum++,c.state.colNum=1;}function e(){if(c.onParseValue===a)i.push(k);else{var b=c.onParseValue(k,c.state);b!==!1&&i.push(b);}k="",j=0,c.state.colNum++;}var f=c.separator,g=c.delimiter;c.state.rowNum||(c.state.rowNum=1),c.state.colNum||(c.state.colNum=1);var h=[],i=[],j=0,k="",l=!1,m=RegExp.escape(f),n=RegExp.escape(g),o=/(D|S|\r\n|\n|\r|[^DS\r\n]+)/,p=o.source;return p=p.replace(/S/g,m),p=p.replace(/D/g,n),o=new RegExp(p,"gm"),b.replace(o,function(a){if(!l)switch(j){case 0:if(a===f){k+="",e();break;}if(a===g){j=1;break;}if(/^(\r\n|\n|\r)$/.test(a)){e(),d();break;}k+=a,j=3;break;case 1:if(a===g){j=2;break;}k+=a,j=1;break;case 2:if(a===g){k+=a,j=1;break;}if(a===f){e();break;}if(/^(\r\n|\n|\r)$/.test(a)){e(),d();break;}throw new Error("CSVDataError: Illegal State [Row:"+c.state.rowNum+"][Col:"+c.state.colNum+"]");case 3:if(a===f){e();break;}if(/^(\r\n|\n|\r)$/.test(a)){e(),d();break;}if(a===g)throw new Error("CSVDataError: Illegal Quote [Row:"+c.state.rowNum+"][Col:"+c.state.colNum+"]");throw new Error("CSVDataError: Illegal Data [Row:"+c.state.rowNum+"][Col:"+c.state.colNum+"]");default:throw new Error("CSVDataError: Unknown State [Row:"+c.state.rowNum+"][Col:"+c.state.colNum+"]");}}),0!==i.length&&(e(),d()),h;},splitLines:function splitLines(b,c){function d(){if(h=0,c.start&&c.state.rowNum<c.start)return i="",void c.state.rowNum++;if(c.onParseEntry===a)g.push(i);else{var b=c.onParseEntry(i,c.state);b!==!1&&g.push(b);}i="",c.end&&c.state.rowNum>=c.end&&(j=!0),c.state.rowNum++;}var e=c.separator,f=c.delimiter;c.state.rowNum||(c.state.rowNum=1);var g=[],h=0,i="",j=!1,k=RegExp.escape(e),l=RegExp.escape(f),m=/(D|S|\n|\r|[^DS\r\n]+)/,n=m.source;return n=n.replace(/S/g,k),n=n.replace(/D/g,l),m=new RegExp(n,"gm"),b.replace(m,function(a){if(!j)switch(h){case 0:if(a===e){i+=a,h=0;break;}if(a===f){i+=a,h=1;break;}if("\n"===a){d();break;}if(/^\r$/.test(a))break;i+=a,h=3;break;case 1:if(a===f){i+=a,h=2;break;}i+=a,h=1;break;case 2:var b=i.substr(i.length-1);if(a===f&&b===f){i+=a,h=1;break;}if(a===e){i+=a,h=0;break;}if("\n"===a){d();break;}if("\r"===a)break;throw new Error("CSVDataError: Illegal state [Row:"+c.state.rowNum+"]");case 3:if(a===e){i+=a,h=0;break;}if("\n"===a){d();break;}if("\r"===a)break;if(a===f)throw new Error("CSVDataError: Illegal quote [Row:"+c.state.rowNum+"]");throw new Error("CSVDataError: Illegal state [Row:"+c.state.rowNum+"]");default:throw new Error("CSVDataError: Unknown state [Row:"+c.state.rowNum+"]");}}),""!==i&&d(),g;},parseEntry:function parseEntry(b,c){function d(){if(c.onParseValue===a)g.push(i);else{var b=c.onParseValue(i,c.state);b!==!1&&g.push(b);}i="",h=0,c.state.colNum++;}var e=c.separator,f=c.delimiter;c.state.rowNum||(c.state.rowNum=1),c.state.colNum||(c.state.colNum=1);var g=[],h=0,i="";if(!c.match){var j=RegExp.escape(e),k=RegExp.escape(f),l=/(D|S|\n|\r|[^DS\r\n]+)/,m=l.source;m=m.replace(/S/g,j),m=m.replace(/D/g,k),c.match=new RegExp(m,"gm");}return b.replace(c.match,function(a){switch(h){case 0:if(a===e){i+="",d();break;}if(a===f){h=1;break;}if("\n"===a||"\r"===a)break;i+=a,h=3;break;case 1:if(a===f){h=2;break;}i+=a,h=1;break;case 2:if(a===f){i+=a,h=1;break;}if(a===e){d();break;}if("\n"===a||"\r"===a)break;throw new Error("CSVDataError: Illegal State [Row:"+c.state.rowNum+"][Col:"+c.state.colNum+"]");case 3:if(a===e){d();break;}if("\n"===a||"\r"===a)break;if(a===f)throw new Error("CSVDataError: Illegal Quote [Row:"+c.state.rowNum+"][Col:"+c.state.colNum+"]");throw new Error("CSVDataError: Illegal Data [Row:"+c.state.rowNum+"][Col:"+c.state.colNum+"]");default:throw new Error("CSVDataError: Unknown State [Row:"+c.state.rowNum+"][Col:"+c.state.colNum+"]");}}),d(),g;}},helpers:{collectPropertyNames:function collectPropertyNames(a){var b,c,d=[];for(b in a){for(c in a[b]){a[b].hasOwnProperty(c)&&d.indexOf(c)<0&&"function"!=typeof a[b][c]&&d.push(c);}}return d;}},toArray:function toArray(c,d,e){d=d!==a?d:{};var f={};f.callback=e!==a&&"function"==typeof e?e:!1,f.separator="separator"in d?d.separator:b.csv.defaults.separator,f.delimiter="delimiter"in d?d.delimiter:b.csv.defaults.delimiter;var g=d.state!==a?d.state:{};d={delimiter:f.delimiter,separator:f.separator,onParseEntry:d.onParseEntry,onParseValue:d.onParseValue,state:g};var h=b.csv.parsers.parseEntry(c,d);return f.callback?void f.callback("",h):h;},toArrays:function toArrays(c,d,e){d=d!==a?d:{};var f={};f.callback=e!==a&&"function"==typeof e?e:!1,f.separator="separator"in d?d.separator:b.csv.defaults.separator,f.delimiter="delimiter"in d?d.delimiter:b.csv.defaults.delimiter;var g=[];return d={delimiter:f.delimiter,separator:f.separator,onPreParse:d.onPreParse,onParseEntry:d.onParseEntry,onParseValue:d.onParseValue,onPostParse:d.onPostParse,start:d.start,end:d.end,state:{rowNum:1,colNum:1}},d.onPreParse!==a&&d.onPreParse(c,d.state),g=b.csv.parsers.parse(c,d),d.onPostParse!==a&&d.onPostParse(g,d.state),f.callback?void f.callback("",g):g;},toObjects:function toObjects(c,d,e){d=d!==a?d:{};var f={};f.callback=e!==a&&"function"==typeof e?e:!1,f.separator="separator"in d?d.separator:b.csv.defaults.separator,f.delimiter="delimiter"in d?d.delimiter:b.csv.defaults.delimiter,f.headers="headers"in d?d.headers:b.csv.defaults.headers,d.start="start"in d?d.start:1,f.headers&&d.start++,d.end&&f.headers&&d.end++;var g=[],h=[];d={delimiter:f.delimiter,separator:f.separator,onPreParse:d.onPreParse,onParseEntry:d.onParseEntry,onParseValue:d.onParseValue,onPostParse:d.onPostParse,start:d.start,end:d.end,state:{rowNum:1,colNum:1},match:!1,transform:d.transform};var i={delimiter:f.delimiter,separator:f.separator,start:1,end:1,state:{rowNum:1,colNum:1}};d.onPreParse!==a&&d.onPreParse(c,d.state);var j=b.csv.parsers.splitLines(c,i),k=b.csv.toArray(j[0],d);g=b.csv.parsers.splitLines(c,d),d.state.colNum=1,d.state.rowNum=k?2:1;for(var l=0,m=g.length;m>l;l++){for(var n=b.csv.toArray(g[l],d),o={},p=0;p<k.length;p++){o[k[p]]=n[p];}h.push(d.transform!==a?d.transform.call(a,o):o),d.state.rowNum++;}return d.onPostParse!==a&&d.onPostParse(h,d.state),f.callback?void f.callback("",h):h;},fromArrays:function fromArrays(c,d,e){d=d!==a?d:{};var f={};f.callback=e!==a&&"function"==typeof e?e:!1,f.separator="separator"in d?d.separator:b.csv.defaults.separator,f.delimiter="delimiter"in d?d.delimiter:b.csv.defaults.delimiter;var g,h,i,j,k="";for(i=0;i<c.length;i++){for(g=c[i],h=[],j=0;j<g.length;j++){var l=g[j]===a||null===g[j]?"":g[j].toString();l.indexOf(f.delimiter)>-1&&(l=l.replace(f.delimiter,f.delimiter+f.delimiter));var m="\n|\r|S|D";m=m.replace("S",f.separator),m=m.replace("D",f.delimiter),l.search(m)>-1&&(l=f.delimiter+l+f.delimiter),h.push(l);}k+=h.join(f.separator)+"\r\n";}return f.callback?void f.callback("",k):k;},fromObjects:function fromObjects(c,d,e){d=d!==a?d:{};var f={};if(f.callback=e!==a&&"function"==typeof e?e:!1,f.separator="separator"in d?d.separator:b.csv.defaults.separator,f.delimiter="delimiter"in d?d.delimiter:b.csv.defaults.delimiter,f.headers="headers"in d?d.headers:b.csv.defaults.headers,f.sortOrder="sortOrder"in d?d.sortOrder:"declare",f.manualOrder="manualOrder"in d?d.manualOrder:[],f.transform=d.transform,"string"==typeof f.manualOrder&&(f.manualOrder=b.csv.toArray(f.manualOrder,f)),f.transform!==a){var g=c;c=[];var h;for(h=0;h<g.length;h++){c.push(f.transform.call(a,g[h]));}}var i=b.csv.helpers.collectPropertyNames(c);if("alpha"===f.sortOrder&&i.sort(),f.manualOrder.length>0){var j,k=[].concat(f.manualOrder);for(j=0;j<i.length;j++){k.indexOf(i[j])<0&&k.push(i[j]);}i=k;}var l,j,m,n,o=[];for(f.headers&&o.push(i),l=0;l<c.length;l++){for(m=[],j=0;j<i.length;j++){n=i[j],m.push(n in c[l]&&"function"!=typeof c[l][n]?c[l][n]:"");}o.push(m);}return b.csv.fromArrays(o,d,f.callback);}},b.csvEntry2Array=b.csv.toArray,b.csv2Array=b.csv.toArrays,b.csv2Dictionary=b.csv.toObjects,"undefined"!=typeof module&&module.exports&&(module.exports=b.csv);}.call(void 0);/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */(function($){// Detect touch support
$.support.touch='ontouchend'in document;// Ignore browsers without touch support
if(!$.support.touch){return;}var mouseProto=$.ui.mouse.prototype,_mouseInit=mouseProto._mouseInit,_mouseDestroy=mouseProto._mouseDestroy,touchHandled;/**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */function simulateMouseEvent(event,simulatedType){// Ignore multi-touch events
if(event.originalEvent.touches.length>1){return;}event.preventDefault();var touch=event.originalEvent.changedTouches[0],simulatedEvent=document.createEvent('MouseEvents');// Initialize the simulated mouse event using the touch event's coordinates
simulatedEvent.initMouseEvent(simulatedType,// type
true,// bubbles                    
true,// cancelable                 
window,// view                       
1,// detail                     
touch.screenX,// screenX                    
touch.screenY,// screenY                    
touch.clientX,// clientX                    
touch.clientY,// clientY                    
false,// ctrlKey                    
false,// altKey                     
false,// shiftKey                   
false,// metaKey                    
0,// button                     
null// relatedTarget              
);// Dispatch the simulated event to the target element
event.target.dispatchEvent(simulatedEvent);}/**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */mouseProto._touchStart=function(event){var self=this;// Ignore the event if another widget is already being handled
if(touchHandled||!self._mouseCapture(event.originalEvent.changedTouches[0])){return;}// Set the flag to prevent other widgets from inheriting the touch event
touchHandled=true;// Track movement to determine if interaction was a click
self._touchMoved=false;// Simulate the mouseover event
simulateMouseEvent(event,'mouseover');// Simulate the mousemove event
simulateMouseEvent(event,'mousemove');// Simulate the mousedown event
simulateMouseEvent(event,'mousedown');};/**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */mouseProto._touchMove=function(event){// Ignore event if not handled
if(!touchHandled){return;}// Interaction was not a click
this._touchMoved=true;// Simulate the mousemove event
simulateMouseEvent(event,'mousemove');};/**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */mouseProto._touchEnd=function(event){// Ignore event if not handled
if(!touchHandled){return;}// Simulate the mouseup event
simulateMouseEvent(event,'mouseup');// Simulate the mouseout event
simulateMouseEvent(event,'mouseout');// If the touch interaction did not move, it should trigger a click
if(!this._touchMoved){// Simulate the click event
simulateMouseEvent(event,'click');}// Unset the flag to allow other widgets to inherit the touch event
touchHandled=false;};/**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */mouseProto._mouseInit=function(){var self=this;// Delegate the touch handlers to the widget's element
self.element.bind({touchstart:$.proxy(self,'_touchStart'),touchmove:$.proxy(self,'_touchMove'),touchend:$.proxy(self,'_touchEnd')});// Call the original $.ui.mouse init method
_mouseInit.call(self);};/**
   * Remove the touch event handlers
   */mouseProto._mouseDestroy=function(){var self=this;// Delegate the touch handlers to the widget's element
self.element.unbind({touchstart:$.proxy(self,'_touchStart'),touchmove:$.proxy(self,'_touchMove'),touchend:$.proxy(self,'_touchEnd')});// Call the original $.ui.mouse destroy method
_mouseDestroy.call(self);};})(jQuery);(function(A){A.extend(A.fn,{pstrength:function pstrength(B){var B=A.extend({verdects:["PwdForbiddenPass","PwdTooShort","PwdInvalidChars","PwdVeryweak","PwdWeak","PwdMedium","PwdStrong","PwdVerystrong"],colors:["#f00","#f00","#f00","#f00","#c06","#f60","#3c0","#3f0"],scores:[-200,-100,-50,10,15,30,40],pcts:[0,5,0,10,25,50,75,92],common:["password","sex","god","123456","123","liverpool","letmein","qwerty","monkey"],minchar:4},B);return this.each(function(){var C=A(this).attr("id");A(this).after("<div class=\"pstrength-minchar\" id=\""+C+"_minchar\">Minimum number of characters is "+B.minchar+"</div>");A(this).after("<div class=\"pstrength-info\" id=\""+C+"_text\"></div>");A(this).after("<div class=\"pstrength-bar\" id=\""+C+"_bar\" style=\"border: 1px solid white; font-size: 1px; height: 5px; width: 0px;\"></div>");A(this).keyup(function(){A.fn.runPassword(A(this).val(),C,B);});});},SetPwdClass:function SetPwdClass(A,F,C,Class,Pct){var B="#"+F+"_bar";var E="#"+F+"_text";strColor=C.colors[Class];strText=GetLocalizedString(C.verdects[Class]);A(B).css({width:Pct+"%"});A(B).css({backgroundColor:strColor});A(E).html("<span style='color: "+strColor+";'>"+strText+"</span>");},runPassword:function runPassword(D,F,C){nPerc=A.fn.checkPassword(D,C);var index;for(index in C.scores){if(nPerc<=C.scores[index]){A.fn.SetPwdClass(A,F,C,index,C.pcts[index]);break;}}},checkPassword:function checkPassword(C,B){var F=0;var E=B.verdects[0];if(C.length<B.minchar){F=-100;return F;}else if(C.length>=B.minchar&&C.length<=B.minchar+2){F=F+6;}else if(C.length>=B.minchar+3&&C.length<=B.minchar+4){F=F+12;}else if(C.length>=B.minchar+5){F=F+18;}if(C.match(/[a-z]/)){F=F+1;}if(C.match(/[A-Z]/)){F=F+5;}if(C.match(/\d+/)){F=F+5;}if(C.match(/[^a-zA-Z0-9]+/)){F=-50;return F;}if(C.match(/(.*[0-9].*[0-9].*[0-9])/)){F=F+7;}/*if(C.match(/.[!,@,#,$,%,^,&,*,?,_,~]/))
              {
                F=(F+5)
              }
              if(C.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/))
              {
                F=(F+7)
              }*/if(C.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){F=F+6;}if(C.match(/([a-zA-Z])/)&&C.match(/([0-9])/)){F=F+3;}/*if(C.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/))
              {
                F=(F+3)
              }*/for(var D=0;D<B.common.length;D++){if(C.toLowerCase()==B.common[D]){F=-200;}}return F;}});})(jQuery);//https://github.com/Eonasdan/bootstrap-datetimepicker#bootstrap-3-datetime-picker-v41747
!function(a){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],a);else if("object"==(typeof exports==="undefined"?"undefined":_typeof(exports)))module.exports=a(require("jquery"),require("moment"));else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";a(jQuery,moment);}}(function(a,b){"use strict";if(!b)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var c=function c(_c3,d){var e,f,g,h,i,j,k,l={},m=!0,n=!1,o=!1,p=0,q=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],r=["days","months","years","decades"],s=["top","bottom","auto"],t=["left","right","auto"],u=["default","top","bottom"],v={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t","delete":46,46:"delete"},w={},x=function x(){return void 0!==b.tz&&void 0!==d.timeZone&&null!==d.timeZone&&""!==d.timeZone;},y=function y(a){var c;return c=void 0===a||null===a?b():b.isDate(a)||b.isMoment(a)?b(a):x()?b.tz(a,j,d.useStrict,d.timeZone):b(a,j,d.useStrict),x()&&c.tz(d.timeZone),c;},z=function z(a){if("string"!=typeof a||a.length>1)throw new TypeError("isEnabled expects a single character string parameter");switch(a){case"y":return i.indexOf("Y")!==-1;case"M":return i.indexOf("M")!==-1;case"d":return i.toLowerCase().indexOf("d")!==-1;case"h":case"H":return i.toLowerCase().indexOf("h")!==-1;case"m":return i.indexOf("m")!==-1;case"s":return i.indexOf("s")!==-1;default:return!1;}},A=function A(){return z("h")||z("m")||z("s");},B=function B(){return z("y")||z("M")||z("d");},C=function C(){var b=a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action","previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",d.calendarWeeks?"6":"5")).append(a("<th>").addClass("next").attr("data-action","next").append(a("<span>").addClass(d.icons.next)))),c=a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan",d.calendarWeeks?"8":"7")));return[a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))),a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))];},D=function D(){var b=a("<tr>"),c=a("<tr>"),e=a("<tr>");return z("h")&&(b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:d.tooltips.pickHour}).attr("data-action","showHours"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(a("<span>").addClass(d.icons.down))))),z("m")&&(z("h")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:d.tooltips.pickMinute}).attr("data-action","showMinutes"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(a("<span>").addClass(d.icons.down))))),z("s")&&(z("m")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:d.tooltips.pickSecond}).attr("data-action","showSeconds"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(a("<span>").addClass(d.icons.down))))),h||(b.append(a("<td>").addClass("separator")),c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:d.tooltips.togglePeriod}))),e.append(a("<td>").addClass("separator"))),a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b,c,e]));},E=function E(){var b=a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),c=a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),d=a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),e=[D()];return z("h")&&e.push(b),z("m")&&e.push(c),z("s")&&e.push(d),e;},F=function F(){var b=[];return d.showTodayButton&&b.push(a("<td>").append(a("<a>").attr({"data-action":"today",title:d.tooltips.today}).append(a("<span>").addClass(d.icons.today)))),!d.sideBySide&&B()&&A()&&b.push(a("<td>").append(a("<a>").attr({"data-action":"togglePicker",title:d.tooltips.selectTime}).append(a("<span>").addClass(d.icons.time)))),d.showClear&&b.push(a("<td>").append(a("<a>").attr({"data-action":"clear",title:d.tooltips.clear}).append(a("<span>").addClass(d.icons.clear)))),d.showClose&&b.push(a("<td>").append(a("<a>").attr({"data-action":"close",title:d.tooltips.close}).append(a("<span>").addClass(d.icons.close)))),a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)));},G=function G(){var b=a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),c=a("<div>").addClass("datepicker").append(C()),e=a("<div>").addClass("timepicker").append(E()),f=a("<ul>").addClass("list-unstyled"),g=a("<li>").addClass("picker-switch"+(d.collapse?" accordion-toggle":"")).append(F());return d.inline&&b.removeClass("dropdown-menu"),h&&b.addClass("usetwentyfour"),z("s")&&!h&&b.addClass("wider"),d.sideBySide&&B()&&A()?(b.addClass("timepicker-sbs"),"top"===d.toolbarPlacement&&b.append(g),b.append(a("<div>").addClass("row").append(c.addClass("col-md-6")).append(e.addClass("col-md-6"))),"bottom"===d.toolbarPlacement&&b.append(g),b):("top"===d.toolbarPlacement&&f.append(g),B()&&f.append(a("<li>").addClass(d.collapse&&A()?"collapse in":"").append(c)),"default"===d.toolbarPlacement&&f.append(g),A()&&f.append(a("<li>").addClass(d.collapse&&B()?"collapse":"").append(e)),"bottom"===d.toolbarPlacement&&f.append(g),b.append(f));},H=function H(){var b,e={};return b=_c3.is("input")||d.inline?_c3.data():_c3.find("input").data(),b.dateOptions&&b.dateOptions instanceof Object&&(e=a.extend(!0,e,b.dateOptions)),a.each(d,function(a){var c="date"+a.charAt(0).toUpperCase()+a.slice(1);void 0!==b[c]&&(e[a]=b[c]);}),e;},I=function I(){var b,e=(n||_c3).position(),f=(n||_c3).offset(),g=d.widgetPositioning.vertical,h=d.widgetPositioning.horizontal;if(d.widgetParent)b=d.widgetParent.append(o);else if(_c3.is("input"))b=_c3.after(o).parent();else{if(d.inline)return void(b=_c3.append(o));b=_c3,_c3.children().first().after(o);}if("auto"===g&&(g=f.top+1.5*o.height()>=a(window).height()+a(window).scrollTop()&&o.height()+_c3.outerHeight()<f.top?"top":"bottom"),"auto"===h&&(h=b.width()<f.left+o.outerWidth()/2&&f.left+o.outerWidth()>a(window).width()?"right":"left"),"top"===g?o.addClass("top").removeClass("bottom"):o.addClass("bottom").removeClass("top"),"right"===h?o.addClass("pull-right"):o.removeClass("pull-right"),"static"===b.css("position")&&(b=b.parents().filter(function(){return"static"!==a(this).css("position");}).first()),0===b.length)throw new Error("datetimepicker component should be placed within a non-static positioned container");o.css({top:"top"===g?"auto":e.top+_c3.outerHeight(),bottom:"top"===g?b.outerHeight()-(b===_c3?0:e.top):"auto",left:"left"===h?b===_c3?0:e.left:"auto",right:"left"===h?"auto":b.outerWidth()-_c3.outerWidth()-(b===_c3?0:e.left)});},J=function J(a){"dp.change"===a.type&&(a.date&&a.date.isSame(a.oldDate)||!a.date&&!a.oldDate)||_c3.trigger(a);},K=function K(a){"y"===a&&(a="YYYY"),J({type:"dp.update",change:a,viewDate:f.clone()});},L=function L(a){o&&(a&&(k=Math.max(p,Math.min(3,k+a))),o.find(".datepicker > div").hide().filter(".datepicker-"+q[k].clsName).show());},M=function M(){var b=a("<tr>"),c=f.clone().startOf("w").startOf("d");for(d.calendarWeeks===!0&&b.append(a("<th>").addClass("cw").text("#"));c.isBefore(f.clone().endOf("w"));){b.append(a("<th>").addClass("dow").text(c.format("dd"))),c.add(1,"d");}o.find(".datepicker-days thead").append(b);},N=function N(a){return d.disabledDates[a.format("YYYY-MM-DD")]===!0;},O=function O(a){return d.enabledDates[a.format("YYYY-MM-DD")]===!0;},P=function P(a){return d.disabledHours[a.format("H")]===!0;},Q=function Q(a){return d.enabledHours[a.format("H")]===!0;},R=function R(b,c){if(!b.isValid())return!1;if(d.disabledDates&&"d"===c&&N(b))return!1;if(d.enabledDates&&"d"===c&&!O(b))return!1;if(d.minDate&&b.isBefore(d.minDate,c))return!1;if(d.maxDate&&b.isAfter(d.maxDate,c))return!1;if(d.daysOfWeekDisabled&&"d"===c&&d.daysOfWeekDisabled.indexOf(b.day())!==-1)return!1;if(d.disabledHours&&("h"===c||"m"===c||"s"===c)&&P(b))return!1;if(d.enabledHours&&("h"===c||"m"===c||"s"===c)&&!Q(b))return!1;if(d.disabledTimeIntervals&&("h"===c||"m"===c||"s"===c)){var e=!1;if(a.each(d.disabledTimeIntervals,function(){if(b.isBetween(this[0],this[1]))return e=!0,!1;}),e)return!1;}return!0;},S=function S(){for(var b=[],c=f.clone().startOf("y").startOf("d");c.isSame(f,"y");){b.push(a("<span>").attr("data-action","selectMonth").addClass("month").text(c.format("MMM"))),c.add(1,"M");}o.find(".datepicker-months td").empty().append(b);},T=function T(){var b=o.find(".datepicker-months"),c=b.find("th"),g=b.find("tbody").find("span");c.eq(0).find("span").attr("title",d.tooltips.prevYear),c.eq(1).attr("title",d.tooltips.selectYear),c.eq(2).find("span").attr("title",d.tooltips.nextYear),b.find(".disabled").removeClass("disabled"),R(f.clone().subtract(1,"y"),"y")||c.eq(0).addClass("disabled"),c.eq(1).text(f.year()),R(f.clone().add(1,"y"),"y")||c.eq(2).addClass("disabled"),g.removeClass("active"),e.isSame(f,"y")&&!m&&g.eq(e.month()).addClass("active"),g.each(function(b){R(f.clone().month(b),"M")||a(this).addClass("disabled");});},U=function U(){var a=o.find(".datepicker-years"),b=a.find("th"),c=f.clone().subtract(5,"y"),g=f.clone().add(6,"y"),h="";for(b.eq(0).find("span").attr("title",d.tooltips.prevDecade),b.eq(1).attr("title",d.tooltips.selectDecade),b.eq(2).find("span").attr("title",d.tooltips.nextDecade),a.find(".disabled").removeClass("disabled"),d.minDate&&d.minDate.isAfter(c,"y")&&b.eq(0).addClass("disabled"),b.eq(1).text(c.year()+"-"+g.year()),d.maxDate&&d.maxDate.isBefore(g,"y")&&b.eq(2).addClass("disabled");!c.isAfter(g,"y");){h+='<span data-action="selectYear" class="year'+(c.isSame(e,"y")&&!m?" active":"")+(R(c,"y")?"":" disabled")+'">'+c.year()+"</span>",c.add(1,"y");}a.find("td").html(h);},V=function V(){var a,c=o.find(".datepicker-decades"),g=c.find("th"),h=b({y:f.year()-f.year()%100-1}),i=h.clone().add(100,"y"),j=h.clone(),k=!1,l=!1,m="";for(g.eq(0).find("span").attr("title",d.tooltips.prevCentury),g.eq(2).find("span").attr("title",d.tooltips.nextCentury),c.find(".disabled").removeClass("disabled"),(h.isSame(b({y:1900}))||d.minDate&&d.minDate.isAfter(h,"y"))&&g.eq(0).addClass("disabled"),g.eq(1).text(h.year()+"-"+i.year()),(h.isSame(b({y:2e3}))||d.maxDate&&d.maxDate.isBefore(i,"y"))&&g.eq(2).addClass("disabled");!h.isAfter(i,"y");){a=h.year()+12,k=d.minDate&&d.minDate.isAfter(h,"y")&&d.minDate.year()<=a,l=d.maxDate&&d.maxDate.isAfter(h,"y")&&d.maxDate.year()<=a,m+='<span data-action="selectDecade" class="decade'+(e.isAfter(h)&&e.year()<=a?" active":"")+(R(h,"y")||k||l?"":" disabled")+'" data-selection="'+(h.year()+6)+'">'+(h.year()+1)+" - "+(h.year()+12)+"</span>",h.add(12,"y");}m+="<span></span><span></span><span></span>",c.find("td").html(m),g.eq(1).text(j.year()+1+"-"+h.year());},W=function W(){var b,c,g,h=o.find(".datepicker-days"),i=h.find("th"),j=[],k=[];if(B()){for(i.eq(0).find("span").attr("title",d.tooltips.prevMonth),i.eq(1).attr("title",d.tooltips.selectMonth),i.eq(2).find("span").attr("title",d.tooltips.nextMonth),h.find(".disabled").removeClass("disabled"),i.eq(1).text(f.format(d.dayViewHeaderFormat)),R(f.clone().subtract(1,"M"),"M")||i.eq(0).addClass("disabled"),R(f.clone().add(1,"M"),"M")||i.eq(2).addClass("disabled"),b=f.clone().startOf("M").startOf("w").startOf("d"),g=0;g<42;g++){0===b.weekday()&&(c=a("<tr>"),d.calendarWeeks&&c.append('<td class="cw">'+b.week()+"</td>"),j.push(c)),k=["day"],b.isBefore(f,"M")&&k.push("old"),b.isAfter(f,"M")&&k.push("new"),b.isSame(e,"d")&&!m&&k.push("active"),R(b,"d")||k.push("disabled"),b.isSame(y(),"d")&&k.push("today"),0!==b.day()&&6!==b.day()||k.push("weekend"),J({type:"dp.classify",date:b,classNames:k}),c.append('<td data-action="selectDay" data-day="'+b.format("L")+'" class="'+k.join(" ")+'">'+b.date()+"</td>"),b.add(1,"d");}h.find("tbody").empty().append(j),T(),U(),V();}},X=function X(){var b=o.find(".timepicker-hours table"),c=f.clone().startOf("d"),d=[],e=a("<tr>");for(f.hour()>11&&!h&&c.hour(12);c.isSame(f,"d")&&(h||f.hour()<12&&c.hour()<12||f.hour()>11);){c.hour()%4===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectHour" class="hour'+(R(c,"h")?"":" disabled")+'">'+c.format(h?"HH":"hh")+"</td>"),c.add(1,"h");}b.empty().append(d);},Y=function Y(){for(var b=o.find(".timepicker-minutes table"),c=f.clone().startOf("h"),e=[],g=a("<tr>"),h=1===d.stepping?5:d.stepping;f.isSame(c,"h");){c.minute()%(4*h)===0&&(g=a("<tr>"),e.push(g)),g.append('<td data-action="selectMinute" class="minute'+(R(c,"m")?"":" disabled")+'">'+c.format("mm")+"</td>"),c.add(h,"m");}b.empty().append(e);},Z=function Z(){for(var b=o.find(".timepicker-seconds table"),c=f.clone().startOf("m"),d=[],e=a("<tr>");f.isSame(c,"m");){c.second()%20===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectSecond" class="second'+(R(c,"s")?"":" disabled")+'">'+c.format("ss")+"</td>"),c.add(5,"s");}b.empty().append(d);},$=function $(){var a,b,c=o.find(".timepicker span[data-time-component]");h||(a=o.find(".timepicker [data-action=togglePeriod]"),b=e.clone().add(e.hours()>=12?-12:12,"h"),a.text(e.format("A")),R(b,"h")?a.removeClass("disabled"):a.addClass("disabled")),c.filter("[data-time-component=hours]").text(e.format(h?"HH":"hh")),c.filter("[data-time-component=minutes]").text(e.format("mm")),c.filter("[data-time-component=seconds]").text(e.format("ss")),X(),Y(),Z();},_=function _(){o&&(W(),$());},aa=function aa(a){var b=m?null:e;if(!a)return m=!0,g.val(""),_c3.data("date",""),J({type:"dp.change",date:!1,oldDate:b}),void _();if(a=a.clone().locale(d.locale),x()&&a.tz(d.timeZone),1!==d.stepping)for(a.minutes(Math.round(a.minutes()/d.stepping)*d.stepping).seconds(0);d.minDate&&a.isBefore(d.minDate);){a.add(d.stepping,"minutes");}R(a)?(e=a,f=e.clone(),g.val(e.format(i)),_c3.data("date",e.format(i)),m=!1,_(),J({type:"dp.change",date:e.clone(),oldDate:b})):(d.keepInvalid?J({type:"dp.change",date:a,oldDate:b}):g.val(m?"":e.format(i)),J({type:"dp.error",date:a,oldDate:b}));},ba=function ba(){var b=!1;return o?(o.find(".collapse").each(function(){var c=a(this).data("collapse");return!c||!c.transitioning||(b=!0,!1);}),b?l:(n&&n.hasClass("btn")&&n.toggleClass("active"),o.hide(),a(window).off("resize",I),o.off("click","[data-action]"),o.off("mousedown",!1),o.remove(),o=!1,J({type:"dp.hide",date:e.clone()}),g.blur(),f=e.clone(),l)):l;},ca=function ca(){aa(null);},da=function da(a){return void 0===d.parseInputDate?(!b.isMoment(a)||a instanceof Date)&&(a=y(a)):a=d.parseInputDate(a),a;},ea={next:function next(){var a=q[k].navFnc;f.add(q[k].navStep,a),W(),K(a);},previous:function previous(){var a=q[k].navFnc;f.subtract(q[k].navStep,a),W(),K(a);},pickerSwitch:function pickerSwitch(){L(1);},selectMonth:function selectMonth(b){var c=a(b.target).closest("tbody").find("span").index(a(b.target));f.month(c),k===p?(aa(e.clone().year(f.year()).month(f.month())),d.inline||ba()):(L(-1),W()),K("M");},selectYear:function selectYear(b){var c=parseInt(a(b.target).text(),10)||0;f.year(c),k===p?(aa(e.clone().year(f.year())),d.inline||ba()):(L(-1),W()),K("YYYY");},selectDecade:function selectDecade(b){var c=parseInt(a(b.target).data("selection"),10)||0;f.year(c),k===p?(aa(e.clone().year(f.year())),d.inline||ba()):(L(-1),W()),K("YYYY");},selectDay:function selectDay(b){var c=f.clone();a(b.target).is(".old")&&c.subtract(1,"M"),a(b.target).is(".new")&&c.add(1,"M"),aa(c.date(parseInt(a(b.target).text(),10))),A()||d.keepOpen||d.inline||ba();},incrementHours:function incrementHours(){var a=e.clone().add(1,"h");R(a,"h")&&aa(a);},incrementMinutes:function incrementMinutes(){var a=e.clone().add(d.stepping,"m");R(a,"m")&&aa(a);},incrementSeconds:function incrementSeconds(){var a=e.clone().add(1,"s");R(a,"s")&&aa(a);},decrementHours:function decrementHours(){var a=e.clone().subtract(1,"h");R(a,"h")&&aa(a);},decrementMinutes:function decrementMinutes(){var a=e.clone().subtract(d.stepping,"m");R(a,"m")&&aa(a);},decrementSeconds:function decrementSeconds(){var a=e.clone().subtract(1,"s");R(a,"s")&&aa(a);},togglePeriod:function togglePeriod(){aa(e.clone().add(e.hours()>=12?-12:12,"h"));},togglePicker:function togglePicker(b){var c,e=a(b.target),f=e.closest("ul"),g=f.find(".in"),h=f.find(".collapse:not(.in)");if(g&&g.length){if(c=g.data("collapse"),c&&c.transitioning)return;g.collapse?(g.collapse("hide"),h.collapse("show")):(g.removeClass("in"),h.addClass("in")),e.is("span")?e.toggleClass(d.icons.time+" "+d.icons.date):e.find("span").toggleClass(d.icons.time+" "+d.icons.date);}},showPicker:function showPicker(){o.find(".timepicker > div:not(.timepicker-picker)").hide(),o.find(".timepicker .timepicker-picker").show();},showHours:function showHours(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-hours").show();},showMinutes:function showMinutes(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-minutes").show();},showSeconds:function showSeconds(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-seconds").show();},selectHour:function selectHour(b){var c=parseInt(a(b.target).text(),10);h||(e.hours()>=12?12!==c&&(c+=12):12===c&&(c=0)),aa(e.clone().hours(c)),ea.showPicker.call(l);},selectMinute:function selectMinute(b){aa(e.clone().minutes(parseInt(a(b.target).text(),10))),ea.showPicker.call(l);},selectSecond:function selectSecond(b){aa(e.clone().seconds(parseInt(a(b.target).text(),10))),ea.showPicker.call(l);},clear:ca,today:function today(){var a=y();R(a,"d")&&aa(a);},close:ba},fa=function fa(b){return!a(b.currentTarget).is(".disabled")&&(ea[a(b.currentTarget).data("action")].apply(l,arguments),!1);},ga=function ga(){var b,c={year:function year(a){return a.month(0).date(1).hours(0).seconds(0).minutes(0);},month:function month(a){return a.date(1).hours(0).seconds(0).minutes(0);},day:function day(a){return a.hours(0).seconds(0).minutes(0);},hour:function hour(a){return a.seconds(0).minutes(0);},minute:function minute(a){return a.seconds(0);}};return g.prop("disabled")||!d.ignoreReadonly&&g.prop("readonly")||o?l:(void 0!==g.val()&&0!==g.val().trim().length?aa(da(g.val().trim())):m&&d.useCurrent&&(d.inline||g.is("input")&&0===g.val().trim().length)&&(b=y(),"string"==typeof d.useCurrent&&(b=c[d.useCurrent](b)),aa(b)),o=G(),M(),S(),o.find(".timepicker-hours").hide(),o.find(".timepicker-minutes").hide(),o.find(".timepicker-seconds").hide(),_(),L(),a(window).on("resize",I),o.on("click","[data-action]",fa),o.on("mousedown",!1),n&&n.hasClass("btn")&&n.toggleClass("active"),I(),o.show(),d.focusOnShow&&!g.is(":focus")&&g.focus(),J({type:"dp.show"}),l);},ha=function ha(){return o?ba():ga();},ia=function ia(a){var b,c,e,f,g=null,h=[],i={},j=a.which,k="p";w[j]=k;for(b in w){w.hasOwnProperty(b)&&w[b]===k&&(h.push(b),parseInt(b,10)!==j&&(i[b]=!0));}for(b in d.keyBinds){if(d.keyBinds.hasOwnProperty(b)&&"function"==typeof d.keyBinds[b]&&(e=b.split(" "),e.length===h.length&&v[j]===e[e.length-1])){for(f=!0,c=e.length-2;c>=0;c--){if(!(v[e[c]]in i)){f=!1;break;}}if(f){g=d.keyBinds[b];break;}}}g&&(g.call(l,o),a.stopPropagation(),a.preventDefault());},ja=function ja(a){w[a.which]="r",a.stopPropagation(),a.preventDefault();},ka=function ka(b){var c=a(b.target).val().trim(),d=c?da(c):null;return aa(d),b.stopImmediatePropagation(),!1;},la=function la(){g.on({change:ka,blur:d.debug?"":ba,keydown:ia,keyup:ja,focus:d.allowInputToggle?ga:""}),_c3.is("input")?g.on({focus:ga}):n&&(n.on("click",ha),n.on("mousedown",!1));},ma=function ma(){g.off({change:ka,blur:blur,keydown:ia,keyup:ja,focus:d.allowInputToggle?ba:""}),_c3.is("input")?g.off({focus:ga}):n&&(n.off("click",ha),n.off("mousedown",!1));},na=function na(b){var c={};return a.each(b,function(){var a=da(this);a.isValid()&&(c[a.format("YYYY-MM-DD")]=!0);}),!!Object.keys(c).length&&c;},oa=function oa(b){var c={};return a.each(b,function(){c[this]=!0;}),!!Object.keys(c).length&&c;},pa=function pa(){var a=d.format||"L LT";i=a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){var b=e.localeData().longDateFormat(a)||a;return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){return e.localeData().longDateFormat(a)||a;});}),j=d.extraFormats?d.extraFormats.slice():[],j.indexOf(a)<0&&j.indexOf(i)<0&&j.push(i),h=i.toLowerCase().indexOf("a")<1&&i.replace(/\[.*?\]/g,"").indexOf("h")<1,z("y")&&(p=2),z("M")&&(p=1),z("d")&&(p=0),k=Math.max(p,k),m||aa(e);};if(l.destroy=function(){ba(),ma(),_c3.removeData("DateTimePicker"),_c3.removeData("date");},l.toggle=ha,l.show=ga,l.hide=ba,l.disable=function(){return ba(),n&&n.hasClass("btn")&&n.addClass("disabled"),g.prop("disabled",!0),l;},l.enable=function(){return n&&n.hasClass("btn")&&n.removeClass("disabled"),g.prop("disabled",!1),l;},l.ignoreReadonly=function(a){if(0===arguments.length)return d.ignoreReadonly;if("boolean"!=typeof a)throw new TypeError("ignoreReadonly () expects a boolean parameter");return d.ignoreReadonly=a,l;},l.options=function(b){if(0===arguments.length)return a.extend(!0,{},d);if(!(b instanceof Object))throw new TypeError("options() options parameter should be an object");return a.extend(!0,d,b),a.each(d,function(a,b){if(void 0===l[a])throw new TypeError("option "+a+" is not recognized!");l[a](b);}),l;},l.date=function(a){if(0===arguments.length)return m?null:e.clone();if(!(null===a||"string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return aa(null===a?null:da(a)),l;},l.format=function(a){if(0===arguments.length)return d.format;if("string"!=typeof a&&("boolean"!=typeof a||a!==!1))throw new TypeError("format() expects a string or boolean:false parameter "+a);return d.format=a,i&&pa(),l;},l.timeZone=function(a){if(0===arguments.length)return d.timeZone;if("string"!=typeof a)throw new TypeError("newZone() expects a string parameter");return d.timeZone=a,l;},l.dayViewHeaderFormat=function(a){if(0===arguments.length)return d.dayViewHeaderFormat;if("string"!=typeof a)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return d.dayViewHeaderFormat=a,l;},l.extraFormats=function(a){if(0===arguments.length)return d.extraFormats;if(a!==!1&&!(a instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return d.extraFormats=a,j&&pa(),l;},l.disabledDates=function(b){if(0===arguments.length)return d.disabledDates?a.extend({},d.disabledDates):d.disabledDates;if(!b)return d.disabledDates=!1,_(),l;if(!(b instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return d.disabledDates=na(b),d.enabledDates=!1,_(),l;},l.enabledDates=function(b){if(0===arguments.length)return d.enabledDates?a.extend({},d.enabledDates):d.enabledDates;if(!b)return d.enabledDates=!1,_(),l;if(!(b instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return d.enabledDates=na(b),d.disabledDates=!1,_(),l;},l.daysOfWeekDisabled=function(a){if(0===arguments.length)return d.daysOfWeekDisabled.splice(0);if("boolean"==typeof a&&!a)return d.daysOfWeekDisabled=!1,_(),l;if(!(a instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(d.daysOfWeekDisabled=a.reduce(function(a,b){return b=parseInt(b,10),b>6||b<0||isNaN(b)?a:(a.indexOf(b)===-1&&a.push(b),a);},[]).sort(),d.useCurrent&&!d.keepInvalid){for(var b=0;!R(e,"d");){if(e.add(1,"d"),31===b)throw"Tried 31 times to find a valid date";b++;}aa(e);}return _(),l;},l.maxDate=function(a){if(0===arguments.length)return d.maxDate?d.maxDate.clone():d.maxDate;if("boolean"==typeof a&&a===!1)return d.maxDate=!1,_(),l;"string"==typeof a&&("now"!==a&&"moment"!==a||(a=y()));var b=da(a);if(!b.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+a);if(d.minDate&&b.isBefore(d.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+b.format(i));return d.maxDate=b,d.useCurrent&&!d.keepInvalid&&e.isAfter(a)&&aa(d.maxDate),f.isAfter(b)&&(f=b.clone().subtract(d.stepping,"m")),_(),l;},l.minDate=function(a){if(0===arguments.length)return d.minDate?d.minDate.clone():d.minDate;if("boolean"==typeof a&&a===!1)return d.minDate=!1,_(),l;"string"==typeof a&&("now"!==a&&"moment"!==a||(a=y()));var b=da(a);if(!b.isValid())throw new TypeError("minDate() Could not parse date parameter: "+a);if(d.maxDate&&b.isAfter(d.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+b.format(i));return d.minDate=b,d.useCurrent&&!d.keepInvalid&&e.isBefore(a)&&aa(d.minDate),f.isBefore(b)&&(f=b.clone().add(d.stepping,"m")),_(),l;},l.defaultDate=function(a){if(0===arguments.length)return d.defaultDate?d.defaultDate.clone():d.defaultDate;if(!a)return d.defaultDate=!1,l;"string"==typeof a&&(a="now"===a||"moment"===a?y():y(a));var b=da(a);if(!b.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+a);if(!R(b))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return d.defaultDate=b,(d.defaultDate&&d.inline||""===g.val().trim())&&aa(d.defaultDate),l;},l.locale=function(a){if(0===arguments.length)return d.locale;if(!b.localeData(a))throw new TypeError("locale() locale "+a+" is not loaded from moment locales!");return d.locale=a,e.locale(d.locale),f.locale(d.locale),i&&pa(),o&&(ba(),ga()),l;},l.stepping=function(a){return 0===arguments.length?d.stepping:(a=parseInt(a,10),(isNaN(a)||a<1)&&(a=1),d.stepping=a,l);},l.useCurrent=function(a){var b=["year","month","day","hour","minute"];if(0===arguments.length)return d.useCurrent;if("boolean"!=typeof a&&"string"!=typeof a)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof a&&b.indexOf(a.toLowerCase())===-1)throw new TypeError("useCurrent() expects a string parameter of "+b.join(", "));return d.useCurrent=a,l;},l.collapse=function(a){if(0===arguments.length)return d.collapse;if("boolean"!=typeof a)throw new TypeError("collapse() expects a boolean parameter");return d.collapse===a?l:(d.collapse=a,o&&(ba(),ga()),l);},l.icons=function(b){if(0===arguments.length)return a.extend({},d.icons);if(!(b instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return a.extend(d.icons,b),o&&(ba(),ga()),l;},l.tooltips=function(b){if(0===arguments.length)return a.extend({},d.tooltips);if(!(b instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return a.extend(d.tooltips,b),o&&(ba(),ga()),l;},l.useStrict=function(a){if(0===arguments.length)return d.useStrict;if("boolean"!=typeof a)throw new TypeError("useStrict() expects a boolean parameter");return d.useStrict=a,l;},l.sideBySide=function(a){if(0===arguments.length)return d.sideBySide;if("boolean"!=typeof a)throw new TypeError("sideBySide() expects a boolean parameter");return d.sideBySide=a,o&&(ba(),ga()),l;},l.viewMode=function(a){if(0===arguments.length)return d.viewMode;if("string"!=typeof a)throw new TypeError("viewMode() expects a string parameter");if(r.indexOf(a)===-1)throw new TypeError("viewMode() parameter must be one of ("+r.join(", ")+") value");return d.viewMode=a,k=Math.max(r.indexOf(a),p),L(),l;},l.toolbarPlacement=function(a){if(0===arguments.length)return d.toolbarPlacement;if("string"!=typeof a)throw new TypeError("toolbarPlacement() expects a string parameter");if(u.indexOf(a)===-1)throw new TypeError("toolbarPlacement() parameter must be one of ("+u.join(", ")+") value");return d.toolbarPlacement=a,o&&(ba(),ga()),l;},l.widgetPositioning=function(b){if(0===arguments.length)return a.extend({},d.widgetPositioning);if("[object Object]"!=={}.toString.call(b))throw new TypeError("widgetPositioning() expects an object variable");if(b.horizontal){if("string"!=typeof b.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(b.horizontal=b.horizontal.toLowerCase(),t.indexOf(b.horizontal)===-1)throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+t.join(", ")+")");d.widgetPositioning.horizontal=b.horizontal;}if(b.vertical){if("string"!=typeof b.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(b.vertical=b.vertical.toLowerCase(),s.indexOf(b.vertical)===-1)throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+s.join(", ")+")");d.widgetPositioning.vertical=b.vertical;}return _(),l;},l.calendarWeeks=function(a){if(0===arguments.length)return d.calendarWeeks;if("boolean"!=typeof a)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return d.calendarWeeks=a,_(),l;},l.showTodayButton=function(a){if(0===arguments.length)return d.showTodayButton;if("boolean"!=typeof a)throw new TypeError("showTodayButton() expects a boolean parameter");return d.showTodayButton=a,o&&(ba(),ga()),l;},l.showClear=function(a){if(0===arguments.length)return d.showClear;if("boolean"!=typeof a)throw new TypeError("showClear() expects a boolean parameter");return d.showClear=a,o&&(ba(),ga()),l;},l.widgetParent=function(b){if(0===arguments.length)return d.widgetParent;if("string"==typeof b&&(b=a(b)),null!==b&&"string"!=typeof b&&!(b instanceof a))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return d.widgetParent=b,o&&(ba(),ga()),l;},l.keepOpen=function(a){if(0===arguments.length)return d.keepOpen;if("boolean"!=typeof a)throw new TypeError("keepOpen() expects a boolean parameter");return d.keepOpen=a,l;},l.focusOnShow=function(a){if(0===arguments.length)return d.focusOnShow;if("boolean"!=typeof a)throw new TypeError("focusOnShow() expects a boolean parameter");return d.focusOnShow=a,l;},l.inline=function(a){if(0===arguments.length)return d.inline;if("boolean"!=typeof a)throw new TypeError("inline() expects a boolean parameter");return d.inline=a,l;},l.clear=function(){return ca(),l;},l.keyBinds=function(a){return 0===arguments.length?d.keyBinds:(d.keyBinds=a,l);},l.getMoment=function(a){return y(a);},l.debug=function(a){if("boolean"!=typeof a)throw new TypeError("debug() expects a boolean parameter");return d.debug=a,l;},l.allowInputToggle=function(a){if(0===arguments.length)return d.allowInputToggle;if("boolean"!=typeof a)throw new TypeError("allowInputToggle() expects a boolean parameter");return d.allowInputToggle=a,l;},l.showClose=function(a){if(0===arguments.length)return d.showClose;if("boolean"!=typeof a)throw new TypeError("showClose() expects a boolean parameter");return d.showClose=a,l;},l.keepInvalid=function(a){if(0===arguments.length)return d.keepInvalid;if("boolean"!=typeof a)throw new TypeError("keepInvalid() expects a boolean parameter");return d.keepInvalid=a,l;},l.datepickerInput=function(a){if(0===arguments.length)return d.datepickerInput;if("string"!=typeof a)throw new TypeError("datepickerInput() expects a string parameter");return d.datepickerInput=a,l;},l.parseInputDate=function(a){if(0===arguments.length)return d.parseInputDate;if("function"!=typeof a)throw new TypeError("parseInputDate() sholud be as function");return d.parseInputDate=a,l;},l.disabledTimeIntervals=function(b){if(0===arguments.length)return d.disabledTimeIntervals?a.extend({},d.disabledTimeIntervals):d.disabledTimeIntervals;if(!b)return d.disabledTimeIntervals=!1,_(),l;if(!(b instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return d.disabledTimeIntervals=b,_(),l;},l.disabledHours=function(b){if(0===arguments.length)return d.disabledHours?a.extend({},d.disabledHours):d.disabledHours;if(!b)return d.disabledHours=!1,_(),l;if(!(b instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(d.disabledHours=oa(b),d.enabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!R(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++;}aa(e);}return _(),l;},l.enabledHours=function(b){if(0===arguments.length)return d.enabledHours?a.extend({},d.enabledHours):d.enabledHours;if(!b)return d.enabledHours=!1,_(),l;if(!(b instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(d.enabledHours=oa(b),d.disabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!R(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++;}aa(e);}return _(),l;},l.viewDate=function(a){if(0===arguments.length)return f.clone();if(!a)return f=e.clone(),l;if(!("string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return f=da(a),K(),l;},_c3.is("input"))g=_c3;else if(g=_c3.find(d.datepickerInput),0===g.length)g=_c3.find("input");else if(!g.is("input"))throw new Error('CSS class "'+d.datepickerInput+'" cannot be applied to non input element');if(_c3.hasClass("input-group")&&(n=0===_c3.find(".datepickerbutton").length?_c3.find(".input-group-addon"):_c3.find(".datepickerbutton")),!d.inline&&!g.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return e=y(),f=e.clone(),a.extend(!0,d,H()),l.options(d),pa(),la(),g.prop("disabled")&&l.disable(),g.is("input")&&0!==g.val().trim().length?aa(da(g.val().trim())):d.defaultDate&&void 0===g.attr("placeholder")&&aa(d.defaultDate),d.inline&&ga(),l;};return a.fn.datetimepicker=function(b){b=b||{};var d,e=Array.prototype.slice.call(arguments,1),f=!0,g=["destroy","hide","show","toggle"];if("object"==_typeof(b))return this.each(function(){var d,e=a(this);e.data("DateTimePicker")||(d=a.extend(!0,{},a.fn.datetimepicker.defaults,b),e.data("DateTimePicker",c(e,d)));});if("string"==typeof b)return this.each(function(){var c=a(this),g=c.data("DateTimePicker");if(!g)throw new Error('bootstrap-datetimepicker("'+b+'") method was called on an element that is not using DateTimePicker');d=g[b].apply(g,e),f=d===g;}),f||a.inArray(b,g)>-1?this:d;throw new TypeError("Invalid arguments for DateTimePicker: "+b);},a.fn.datetimepicker.defaults={timeZone:"",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:b.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function up(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(7,"d")):this.date(b.clone().add(this.stepping(),"m"));}},down:function down(a){if(!a)return void this.show();var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(7,"d")):this.date(b.clone().subtract(this.stepping(),"m"));},"control up":function controlUp(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(1,"y")):this.date(b.clone().add(1,"h"));}},"control down":function controlDown(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(1,"y")):this.date(b.clone().subtract(1,"h"));}},left:function left(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"d"));}},right:function right(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"d"));}},pageUp:function pageUp(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"M"));}},pageDown:function pageDown(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"M"));}},enter:function enter(){this.hide();},escape:function escape(){this.hide();},"control space":function controlSpace(a){a&&a.find(".timepicker").is(":visible")&&a.find('.btn[data-action="togglePeriod"]').click();},t:function t(){this.date(this.getMoment());},"delete":function _delete(){this.clear();}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1},a.fn.datetimepicker;});});