(function(){var k,n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){a=a.split(".");b=b||n;for(var c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function t(){}
function aa(){throw Error("unimplemented abstract method");}
function ba(a){a.getInstance=function(){return a.Ia?a.Ia:a.Ia=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){return"array"==ca(a)}
function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function fa(a){return"function"==ca(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return v.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.bc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(oa,Error);oa.prototype.name="CustomError";var pa;function qa(a){return/^[\s\xa0]*$/.test(a)}
var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function sa(a,b){return a<b?-1:a>b?1:0}
function ta(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ua=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},va=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},wa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},xa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function ya(a,b){a:{for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:u(a)?a.charAt(b):a[b]}
function Aa(a,b){return 0<=ua(a,b)}
function Ba(a,b){b=ua(a,b);0<=b&&Array.prototype.splice.call(a,b,1)}
function Ca(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Da(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ga(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ha(a,b,c,d){return Array.prototype.splice.apply(a,Ia(arguments,1))}
function Ia(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Ja(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ka(a){var b=La,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ma(){var a=Na,b;for(b in a)return!1;return!0}
function Oa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ra(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Qa.length;f++)c=Qa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var A;a:{var Sa=n.navigator;if(Sa){var Ta=Sa.userAgent;if(Ta){A=Ta;break a}}A=""}function B(a){return-1!=A.indexOf(a)}
;function Ua(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function Va(){this.b="";this.f=Wa}
Va.prototype.ua=!0;Va.prototype.ta=function(){return this.b};
function Xa(a){return a instanceof Va&&a.constructor===Va&&a.f===Wa?a.b:"type_error:SafeUrl"}
var Ya=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Za(a){if(a instanceof Va)return a;a=a.ua?a.ta():String(a);Ya.test(a)||(a="about:invalid#zClosurez");return $a(a)}
var Wa={};function $a(a){var b=new Va;b.b=a;return b}
$a("about:blank");function ab(){this.b="";this.f=bb}
ab.prototype.ua=!0;ab.prototype.ta=function(){return this.b};
var bb={};function cb(){this.b=""}
cb.prototype.ua=!0;cb.prototype.ta=function(){return this.b};
function db(a){var b=new cb;b.b=a;return b}
db("<!DOCTYPE html>");db("");db("<br>");function eb(a,b){b=b instanceof Va?b:Za(b);a.href=Xa(b)}
function fb(a,b){a.rel="stylesheet";a.href=b instanceof ab&&b.constructor===ab&&b.f===bb?b.b:"type_error:TrustedResourceUrl"}
;function gb(a,b,c){a&&(a.dataset?a.dataset[hb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[hb(b)]:a.getAttribute("data-"+b):null}
function ib(a,b){a&&(a.dataset?delete a.dataset[hb(b)]:a.removeAttribute("data-"+b))}
var jb={};function hb(a){return jb[a]||(jb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function kb(a){n.setTimeout(function(){throw a;},0)}
var lb;
function mb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Ga;c.Ga=null;a()}};
return function(a){d.next={Ga:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function nb(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
nb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function ob(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function pb(){this.f=this.b=null}
var rb=new nb(function(){return new qb},function(a){a.reset()},100);
pb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function qb(){this.next=this.scope=this.b=null}
qb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
qb.prototype.reset=function(){this.next=this.scope=this.b=null};function sb(a,b){tb||ub();vb||(tb(),vb=!0);var c=wb,d=rb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var tb;function ub(){var a=n.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);tb=function(){b.then(xb)}}else tb=function(){var a=xb;
!fa(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(lb||(lb=mb()),lb(a)):n.setImmediate(a)}}
var vb=!1,wb=new pb;function xb(){for(var a;a=wb.remove();){try{a.b.call(a.scope)}catch(b){kb(b)}ob(rb,a)}vb=!1}
;function D(){this.f=this.f;this.K=this.K}
D.prototype.f=!1;D.prototype.dispose=function(){this.f||(this.f=!0,this.A())};
function yb(a,b){a.f?p(void 0)?b.call(void 0):b():(a.K||(a.K=[]),a.K.push(p(void 0)?v(b,void 0):b))}
D.prototype.A=function(){if(this.K)for(;this.K.length;)this.K.shift()()};
function zb(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Ab(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?Ab.apply(null,d):zb(d)}}
;function E(a){D.call(this);this.j=1;this.g=[];this.i=0;this.b=[];this.H={};this.w=!!a}
y(E,D);k=E.prototype;k.subscribe=function(a,b,c){var d=this.H[a];d||(d=this.H[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
k.unsubscribe=function(a,b,c){if(a=this.H[a]){var d=this.b;if(a=ya(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.T(a)}return!1};
k.T=function(a){var b=this.b[a];if(b){var c=this.H[b];0!=this.i?(this.g.push(a),this.b[a+1]=t):(c&&Ba(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.N=function(a,b){var c=this.H[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];Bb(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.T(c)}}return 0!=e}return!1};
function Bb(a,b,c){sb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.H[a];b&&(z(b,this.T,this),delete this.H[a])}else this.b.length=0,this.H={}};
k.ba=function(a){if(a){var b=this.H[a];return b?b.length:0}a=0;for(b in this.H)a+=this.ba(b);return a};
k.A=function(){E.B.A.call(this);this.clear();this.g.length=0};var Cb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Cb,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var Db=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",Db,void 0);function F(a){Eb(Cb,arguments)}
function G(a,b){return a in Cb?Cb[a]:b}
function H(a,b){fa(a)&&(a=Fb(a));return window.setTimeout(a,b)}
function I(a){window.clearTimeout(a)}
function Fb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw Gb(b),b;}}:a}
function Gb(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=G("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),F("ERRORS",c))}
function Eb(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else for(c in b=b[0],b)a[c]=b[c]}
var Hb=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Ib="Microsoft Internet Explorer"==navigator.appName;var Jb=r("yt.pubsub.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.T;E.prototype.publish=E.prototype.N;E.prototype.clear=E.prototype.clear;q("yt.pubsub.instance_",Jb,void 0);var Kb=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Kb,void 0);var Lb=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Lb,void 0);var Mb=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Mb,void 0);
var Nb=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",Nb,void 0);function Ob(a,b,c){var d=Pb();if(d){var e=d.subscribe(a,function(){if(!Nb||Nb!=e){var d=arguments,g;g=function(){Kb[e]&&b.apply(c||window,d)};
try{Mb[a]?g():H(g,0)}catch(h){Gb(h)}}},c);
Kb[e]=!0;Lb[a]||(Lb[a]=[]);Lb[a].push(e);return e}return 0}
function Qb(a){var b=Pb();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete Kb[a]}))}
function Rb(a,b){var c=Pb();return c?c.publish.apply(c,arguments):!1}
function Sb(a){Lb[a]&&(a=Lb[a],z(a,function(a){Kb[a]&&delete Kb[a]}),a.length=0)}
function Tb(a){var b=Pb();if(b)if(b.clear(a),a)Sb(a);else for(var c in Lb)Sb(c)}
function Pb(){return r("yt.pubsub.instance_")}
;function Ub(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Vb,""),c=c.replace(Wb,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Xb(a,b)}
function Xb(a,b){var c=Yb(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;e?b&&b():(b&&(e=Ob(c,b),b=""+ia(b),Zb[b]=e),f||(d=$b(a,c,function(){C(d,"loaded")||(gb(d,"loaded","true"),Rb(c),H(na(Tb,c),0))})))}
function $b(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function ac(a,b){a&&b&&(a=""+ia(b),(a=Zb[a])&&Qb(a))}
function Yb(a){var b=document.createElement("a");eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ta(a)}
var Vb=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Wb=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Zb={};var bc=null;function cc(){var a=G("BG_I",null),b=G("BG_IU",null),c=G("BG_P",void 0);b?Ub(b,function(){bc=new botguard.bg(c)}):a&&(eval(a),bc=new botguard.bg(c))}
function dc(){return null!=bc}
function ec(){return bc?bc.invoke():null}
;var fc="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function gc(){}
gc.prototype.next=function(){throw fc;};
gc.prototype.U=function(){return this};
function hc(a){if(a instanceof gc)return a;if("function"==typeof a.U)return a.U(!1);if(ea(a)){var b=0,c=new gc;c.next=function(){for(;;){if(b>=a.length)throw fc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ic(a,b){if(ea(a))try{z(a,b,void 0)}catch(c){if(c!==fc)throw c;}else{a=hc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==fc)throw c;}}}
function jc(a){if(ea(a))return Da(a);a=hc(a);var b=[];ic(a,function(a){b.push(a)});
return b}
;function kc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function lc(a,b){var c=nc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var oc=B("Opera"),J=B("Trident")||B("MSIE"),pc=B("Edge"),qc=B("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),rc=-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"),sc=B("Windows");function tc(){var a=n.document;return a?a.documentMode:void 0}
var uc;a:{var vc="",wc=function(){var a=A;if(qc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(pc)return/Edge\/([\d\.]+)/.exec(a);if(J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(rc)return/WebKit\/(\S+)/.exec(a);if(oc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
wc&&(vc=wc?wc[1]:"");if(J){var xc=tc();if(null!=xc&&xc>parseFloat(vc)){uc=String(xc);break a}}uc=vc}var yc=uc,nc={};
function K(a){return lc(a,function(){for(var b=0,c=ra(String(yc)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=sa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||sa(0==g[2].length,0==h[2].length)||sa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var zc;var Ac=n.document;zc=Ac&&J?tc()||("CSS1Compat"==Ac.compatMode?parseInt(yc,10):5):void 0;function Bc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Cc(a){a=String(a);if(Bc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Dc(a){return eval("("+a+")")}
function Ec(a){var b=[];Fc(new Gc,a,b);return b.join("")}
function Gc(){}
function Fc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Fc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Hc(d,c),c.push(":"),Fc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Hc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ic={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Hc(a,b){b.push('"',a.replace(Jc,function(a){var b=Ic[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ic[a]=b);return b}),'"')}
;var Kc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a.match(Kc)}
function Lc(a){return a?decodeURI(a):a}
function Mc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Nc(a,b,c){if(da(b))for(var d=0;d<b.length;d++)Nc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Oc(a,b,c){for(c=c||0;c<b.length;c+=2)Nc(b[c],b[c+1],a);return a}
function Pc(a,b){for(var c in b)Nc(c,b[c],a);return a}
function Qc(a){a=Pc([],a);a[0]="";return a.join("")}
function Rc(a,b){return Mc(2==arguments.length?Oc([a],arguments[1],0):Oc([a],arguments,1))}
;function Sc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?da(b[f])?Ga(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Tc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Sc(d[1]||""),e;for(e in b)d[e]=b[e];return Mc(Pc([a],d))+c}
;var Uc=null;"undefined"!=typeof XMLHttpRequest?Uc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Uc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Vc(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Wc(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Fb(b)(l)}
var l=Uc&&Uc();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);f="POST"==c;if(e=Xc(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Xc(a,b){b=b||{};var c;c||(c=window.location.href);var d=L(a)[1]||null,e=Lc(L(a)[3]||null);d&&e?(d=c,c=L(a),d=L(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Lc(L(c)[3]||null)==e&&(Number(L(c)[4]||null)||null)==(Number(L(a)[4]||null)||null):!0;for(var f in Yc){if((e=d=G(Yc[f]))&&!(e=c)){var e=f,g=G("CORS_HEADER_WHITELIST")||{},h=Lc(L(a)[3]||null);e=h?(g=g[h])?Aa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Zc(a,b){var c=G("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.dc&&(!Lc(L(a)[3]||null)||b.withCredentials||Lc(L(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.D&&b.D[c])}
function $c(a,b){var c=b.format||"JSON";b.ec&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=G("XSRF_FIELD_NAME",void 0),e=G("XSRF_TOKEN",void 0),f=b.wa;f&&(f[d]&&delete f[d],a=Tc(a,f||{}));var g=b.postBody||"",f=b.D;Zc(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=Sc(g),Ra(d,f),g=b.Oa&&"JSON"==b.Oa?JSON.stringify(d):Qc(d));var h=!1,l,m=Wc(a,function(a){if(!h){h=!0;l&&I(l);var d=Vc(a),e=null;if(d||400<=a.status&&500>a.status)e=
ad(c,a,b.cc);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.va&&b.va.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.R&&0<b.timeout&&(l=H(function(){h||(h=!0,m.abort(),I(l),b.R.call(b.context||n,m))},b.timeout))}
function ad(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Dc(a));break;case "XML":if(b=(b=b.responseXML)?bd(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=cd(a)})}c&&dd(d);
return d}
function dd(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=db(a[b]);a[c]=d}else dd(a[b])}}
function bd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function cd(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Yc={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var ed={},fd=0;function gd(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):H(a,b||0)}
;var hd=[],id=!1;function jd(){function a(){id=!0;"google_ad_status"in window?F("DCLKSTAT",1):F("DCLKSTAT",2)}
Ub("//static.doubleclick.net/instream/ad_status.js",a);hd.push(gd(function(){id||"google_ad_status"in window||(ac("//static.doubleclick.net/instream/ad_status.js",a),F("DCLKSTAT",3))},5E3))}
function kd(){return parseInt(G("DCLKSTAT",0),10)}
;function ld(a,b){this.width=a;this.height=b}
k=ld.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function md(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in nd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
md.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
md.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
md.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var nd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function od(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function pd(a,b){return a.classList?a.classList.contains(b):Aa(od(a),b)}
function qd(a,b){a.classList?a.classList.add(b):pd(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function rd(a,b){a.classList?a.classList.remove(b):pd(a,b)&&(a.className=va(od(a),function(a){return a!=b}).join(" "))}
function sd(a,b,c){c?qd(a,b):rd(a,b)}
;var td=x().toString();function M(a,b){this.l=p(a)?a:0;this.o=p(b)?b:0}
M.prototype.equals=function(a){return a instanceof M&&(this==a?!0:this&&a?this.l==a.l&&this.o==a.o:!1)};
M.prototype.ceil=function(){this.l=Math.ceil(this.l);this.o=Math.ceil(this.o);return this};
M.prototype.floor=function(){this.l=Math.floor(this.l);this.o=Math.floor(this.o);return this};
M.prototype.round=function(){this.l=Math.round(this.l);this.o=Math.round(this.o);return this};!qc&&!J||J&&9<=Number(zc)||qc&&K("1.9.1");var vd=J&&!K("9");function wd(a){xd();var b=new ab;b.b=a;return b}
var xd=t;function yd(a){return a?new zd(Ad(a)):pa||(pa=new zd)}
function Bd(a){var b=document;return u(a)?b.getElementById(a):a}
function Cd(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):Dd(a)}
function Dd(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&Aa(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function Ed(a){var b=a.scrollingElement?a.scrollingElement:!rc&&Fd(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return J&&K("10")&&a.pageYOffset!=b.scrollTop?new M(b.scrollLeft,b.scrollTop):new M(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Fd(a){return"CSS1Compat"==a.compatMode}
function Gd(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Hd(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Id(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Ad(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Jd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Gd(a),a.appendChild(Ad(a).createTextNode(String(b)))}
var Kd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ld={IMG:" ",BR:"\n"};function Md(a){if(vd&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Nd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");vd||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Nd(a,b,c){if(!(a.nodeName in Kd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ld)b.push(Ld[a.nodeName]);else for(a=a.firstChild;a;)Nd(a,b,c),a=a.nextSibling}
function Od(a){var b=Pd.ab;return b?Qd(a,function(a){return!b||u(a.className)&&Aa(a.className.split(/\s+/),b)},!0,void 0):null}
function Qd(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function zd(a){this.b=a||n.document||document}
zd.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
zd.prototype.createElement=function(a){return this.b.createElement(String(a))};
zd.prototype.isElement=function(a){return ha(a)&&1==a.nodeType};
zd.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Rd=r("yt.dom.getNextId_");if(!Rd){Rd=function(){return++Sd};
q("yt.dom.getNextId_",Rd,void 0);var Sd=0}function Td(){var a=document,b;xa(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;var La=r("yt.events.listeners_")||{};q("yt.events.listeners_",La,void 0);var Ud=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Ud,void 0);function Vd(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ka(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function N(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Vd(a,b,c,d);if(e)return e;var e=++Ud.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new md(d);if(!Qd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new md(b);
b.currentTarget=a;return c.call(a,b)};
g=Fb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);La[e]=[a,b,c,g,d];return e}
function Wd(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in La){var b=La[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete La[a]}}))}
;function Xd(){if(null==r("_lact",window)){var a=parseInt(G("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Yd();N(document,"keydown",Yd);N(document,"keyup",Yd);N(document,"mousedown",Yd);N(document,"mouseup",Yd);Ob("page-mouse",Yd);Ob("page-scroll",Yd);Ob("page-resize",Yd)}}
function Yd(){null==r("_lact",window)&&(Xd(),r("_lact",window));var a=x();q("_lact",a,window);Rb("USER_ACTIVE")}
function Zd(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function $d(a){return G("EXPERIMENT_FLAGS",{})[a]}
;function ae(){}
ae.prototype.set=aa;ae.prototype.get=aa;ae.prototype.remove=aa;function be(){}
y(be,ae);be.prototype.ba=function(){var a=0;ic(this.U(!0),function(){a++});
return a};
be.prototype.U=aa;be.prototype.clear=function(){var a=jc(this.U(!0)),b=this;z(a,function(a){b.remove(a)})};function ce(a){this.b=a}
y(ce,be);k=ce.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.ba=function(){return this.b.length};
k.U=function(a){var b=0,c=this.b,d=new gc;d.next=function(){if(b>=c.length)throw fc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function de(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(de,ce);function ee(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y(ee,ce);function fe(a){this.b=a}
fe.prototype.set=function(a,b){p(b)?this.b.set(a,Ec(b)):this.b.remove(a)};
fe.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Cc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
fe.prototype.remove=function(a){this.b.remove(a)};function ge(a){this.b=a}
y(ge,fe);function he(a){this.data=a}
function ie(a){return!p(a)||a instanceof he?a:new he(a)}
ge.prototype.set=function(a,b){ge.B.set.call(this,a,ie(b))};
ge.prototype.f=function(a){a=ge.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ge.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function je(a){this.b=a}
y(je,ge);je.prototype.set=function(a,b,c){if(b=ie(b)){if(c){if(c<x()){je.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}je.B.set.call(this,a,b)};
je.prototype.f=function(a,b){var c=je.B.f.call(this,a);if(c){if(b=!b){b=c.creation;var d=c.expiration;b=!!d&&d<x()||!!b&&b>x()}if(b)je.prototype.remove.call(this,a);else return c}};function ke(a){this.b=a}
y(ke,je);function le(){if(!ne&&!oe||!window.JSON)return null;var a;try{a=ne.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=oe.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var oe,pe=new de;oe=pe.isAvailable()?new ke(pe):null;var ne,qe=new ee;ne=qe.isAvailable()?new ke(qe):null;var re=B("Firefox"),se=kc()||B("iPod"),te=B("iPad"),ue=B("Android")&&!(Ua()||B("Firefox")||B("Opera")||B("Silk")),ve=Ua(),we=B("Safari")&&!(Ua()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!(kc()||B("iPad")||B("iPod"));function xe(a){this.b=a;this.f=this.g=void 0}
function ye(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var ze={log_event:"events",log_interaction:"interactions"},Ae={},Be={},Ce=0,Na=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Na,void 0);function De(a,b){Na[a.endpoint]=Na[a.endpoint]||[];var c=Na[a.endpoint];c.push(a.Na);Be[a.endpoint]=b;20<=c.length?Ee():Fe()}
function Ee(){I(Ce);if(!Ma()){for(var a in Na){var b=Ae[a];if(!b){b=Be[a];if(!b)continue;b=new b;Ae[a]=b}var c=b.f();c.requestTimeMs=Math.round(Hb());c[ze[a]]=Na[a];b.g(a,c,{});delete Na[a]}Ma()||Fe()}}
function Fe(){I(Ce);Ce=H(Ee,G("LOGGING_BATCH_TIMEOUT",1E4))}
;function Ge(a,b){var c=He();b=wa(b,function(a){return ye(a)});
Ie(c,{visibilityUpdate:{csn:a,visualElements:b}})}
function Ie(a,b,c){b.eventTimeMs=Math.round(Hb());b.lactMs=Zd();c&&(b.clientData=Je(c));De({endpoint:"log_interaction",Na:b},a)}
function Je(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=wa(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Ke(){var a=G("client-screen-nonce",void 0);a||(a=G("EVENT_ID",void 0));return a}
;function Le(a){this.b=a||{cookie:""}}
var Me=/\s*;\s*/;k=Le.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Me),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.ba=function(){return this.b.cookie?(this.b.cookie||"").split(Me).length:0};
k.clear=function(){for(var a=(this.b.cookie||"").split(Me),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ne=new Le("undefined"==typeof document?null:document);Ne.f=3950;function Oe(a,b,c){var d=G("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=G("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Lc(L(window.location.href)[3]||null);e&&d.push(e);e=Lc(L(a)[3]||null);if(Aa(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=L(a),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))$d("enable_more_related_ve_logging")&&(b.itct||b.ved)&&(b.csn=b.csn||Ke()),d="ST-"+ta(d).toString(36),e=b?Qc(b):"",Ne.set(""+d,e,5,"/","youtube.com"),
b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),b&&d&&d(new xe(b)))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Mc(Pc([a],{}))+"",a=a instanceof Va?a:Za(a),c.href=Xa(a));return!0}
;function Pe(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Pa(Qe);this.assets=a.assets||{};this.attrs=a.attrs||Pa(Re);this.params=a.params||Pa(Se);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Qe={enablejsapi:1},Re={},Se={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Te(a){a instanceof Pe||(a=new Pe(a));return a}
function Ue(a){var b=new Pe,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ca(d)?Pa(d):d}return b}
;function Ve(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
k=Ve.prototype;k.getHeight=function(){return this.bottom-this.top};
k.contains=function(a){return this&&a?a instanceof Ve?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.l>=this.left&&a.l<=this.right&&a.o>=this.top&&a.o<=this.bottom:!1};
k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function We(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
We.prototype.contains=function(a){return a instanceof M?a.l>=this.left&&a.l<=this.left+this.width&&a.o>=this.top&&a.o<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
We.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
We.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
We.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Xe(a,b){var c=Ad(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""}
function Ye(a,b){return Xe(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Ze(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}J&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function $e(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function af(a){var b=bf;if("none"!=Ye(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function bf(a){var b=a.offsetWidth,c=a.offsetHeight,d=rc&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new ld(b,c):(a=Ze(a),new ld(a.right-a.left,a.bottom-a.top))}
function cf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;b=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return b}
function df(a,b){return(b=a.currentStyle?a.currentStyle[b]:null)?cf(a,b):0}
var ef={thin:2,medium:4,thick:6};function ff(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;b=a.currentStyle?a.currentStyle[b+"Width"]:null;return b in ef?ef[b]:cf(a,b)}
;function gf(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,h,l,m;if(Ib)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(w){g=null}else l=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=l.appendChild(m);if(g&&"GetVariable"in g)try{h=g.GetVariable("$version")}catch(w){h=""}l&&m&&l.removeChild(m);(g=h||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ba(gf);function hf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function jf(a){if(window.spf){var b=a.match(kf);spf.style.load(a,b?b[1]:"",void 0)}else lf(a)}
function lf(a){var b=mf(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=nf(a,b,function(){C(c,"loaded")||(gb(c,"loaded","true"),Rb(b),H(na(Tb,b),0))}))}
function nf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=wd(a);fb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function mf(a){var b=document.createElement("a");eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ta(a)}
var kf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var of;var pf=A,pf=pf.toLowerCase();if(-1!=pf.indexOf("android")){var qf=pf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(qf)of=Number(qf[1]);else{var rf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},sf=[],tf=0,uf;for(uf in rf)sf[tf++]=uf;var vf=pf.match("("+sf.join("|")+")");of=vf?rf[vf[0]]:0}}else of=void 0;var wf=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],xf=['audio/mp4; codecs="mp4a.40.2"'];J&&K("9");!rc||K("528");qc&&K("1.9b")||J&&K("8")||oc&&K("9.5")||rc&&K("528");qc&&!K("8")||J&&K("9");var yf;var zf=A,Af=zf.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Af||2>Af.length)yf=void 0;else{var Bf=zf.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);yf=Bf&&6==Bf.length?Number(Bf[5].replace("_",".")):0}0<=yf&&0<=A.search("Safari")&&A.search("Version");function Cf(a){D.call(this);this.b=[];this.g=a||this}
y(Cf,D);function Df(a,b,c,d){d=Fb(v(d,a.g));d={target:b,name:c,pa:d};b.addEventListener(c,d.pa,void 0);a.b.push(d)}
function Ef(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.pa)}}
Cf.prototype.A=function(){Ef(this);Cf.B.A.call(this)};function Ff(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function O(a,b){this.b=0;this.C=void 0;this.i=this.f=this.g=null;this.j=this.w=!1;if(a!=t)try{var c=this;a.call(b,function(a){Gf(c,2,a)},function(a){Gf(c,3,a)})}catch(d){Gf(this,3,d)}}
function Hf(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Hf.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var If=new nb(function(){return new Hf},function(a){a.reset()},100);
function Jf(a,b,c){var d=If.get();d.g=a;d.f=b;d.context=c;return d}
function Kf(a){if(a instanceof O)return a;var b=new O(t);Gf(b,2,a);return b}
function Lf(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return Mf(this,fa(a)?a:null,fa(b)?b:null,c)};
Ff(O);O.prototype.cancel=function(a){0==this.b&&sb(function(){var b=new Nf(a);Of(this,b)},this)};
function Of(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Of(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Pf(c),Qf(c,e,3,b)))}a.g=null}else Gf(a,3,b)}
function Rf(a,b){a.f||2!=a.b&&3!=a.b||Sf(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Mf(a,b,c,d){var e=Jf(null,null,null);e.b=new O(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Nf?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Rf(a,e);return e.b}
O.prototype.G=function(a){this.b=0;Gf(this,2,a)};
O.prototype.K=function(a){this.b=0;Gf(this,3,a)};
function Gf(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.G,g=a.K;if(e instanceof O)Rf(e,Jf(f||t,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(ha(e))try{var l=e.then;if(fa(l)){Tf(e,l,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.C=c,a.b=b,a.g=null,Sf(a),3!=b||c instanceof Nf||Uf(a,c))}}
function Tf(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Sf(a){a.w||(a.w=!0,sb(a.J,a))}
function Pf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
O.prototype.J=function(){for(var a;a=Pf(this);)Qf(this,a,this.b,this.C);this.w=!1};
function Qf(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Vf(b,c,d);else try{b.i?b.g.call(b.context):Vf(b,c,d)}catch(e){Wf.call(null,e)}ob(If,b)}
function Vf(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Uf(a,b){a.j=!0;sb(function(){a.j&&Wf.call(null,b)})}
var Wf=kb;function Nf(a){oa.call(this,a)}
y(Nf,oa);Nf.prototype.name="cancel";function Xf(){return{apiaryHost:G("APIARY_HOST",void 0),Ea:G("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:G("GAPI_HINT_OVERRIDE"),gapiHintParams:G("GAPI_HINT_PARAMS",void 0),innertubeApiKey:G("INNERTUBE_API_KEY",void 0),innertubeApiVersion:G("INNERTUBE_API_VERSION",void 0),sb:G("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ub:G("INNERTUBE_CONTEXT_HL",void 0),tb:G("INNERTUBE_CONTEXT_GL",void 0),Ub:G("XHR_APIARY_HOST",void 0)}}
function Yf(a){a={client:{hl:a.ub,gl:a.tb,clientName:a.sb,clientVersion:a.innertubeContextClientVersion}};G("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:G("DELEGATED_SESSION_ID")});return a}
;function Zf(){this.b=Xf();$f||($f=ag(this.b))}
var $f=null;function ag(a){return(new O(function(b){Ub(G("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){Gb(c)}})})).then(function(){})}
Zf.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;qa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Ea;qa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",G("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Zf.prototype.f=function(){return{context:Yf(this.b)}};
Zf.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=H(function(){e||(e=!0,c.R&&c.R())},c.timeout));
bg(this,a,b,function(a){if(!e)if(e=!0,d&&I(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function bg(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":G("VISITOR_DATA")},method:"POST",body:Ec(c)},f=v(a.i,a);$f.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function cg(a,b,c){var d={};d.eventTimeMs=Math.round(c||Hb());d[a]=b;De({endpoint:"log_event",Na:d},Zf)}
;var dg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),eg="";
function fg(a){return a&&a==eg?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+dg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(eg=a,!0):!1}
;var gg={},hg=0;function ig(a){var b=new Image,c=""+hg++;gg[c]=b;b.onload=b.onerror=function(){delete gg[c]};
b.src=a}
;function P(a,b){this.version=a;this.args=b}
function jg(a){if(!a.Va){var b={};a.call(b);a.Va=b.version}return a.Va}
function kg(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=jg(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function Q(a,b){this.topic=a;this.b=b}
Q.prototype.toString=function(){return this.topic};var lg=r("yt.pubsub2.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.T;E.prototype.publish=E.prototype.N;E.prototype.clear=E.prototype.clear;q("yt.pubsub2.instance_",lg,void 0);var mg=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",mg,void 0);var ng=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",ng,void 0);var og=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",og,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function R(a,b){var c=pg();c&&c.publish.call(c,a.toString(),a,b)}
function S(a,b,c){var d=pg();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(mg[e])try{if(g&&a instanceof Q&&a!=d)try{g=kg(a.b,g)}catch(l){throw l.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,g)}catch(l){Gb(l)}};
og[a.toString()]?r("yt.scheduler.instance")?gd(f,void 0):H(f,0):f()}});
mg[e]=!0;ng[a.toString()]||(ng[a.toString()]=[]);ng[a.toString()].push(e);return e}
function qg(a){var b=pg();b&&("number"==typeof a&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete mg[a]}))}
function pg(){return r("yt.pubsub2.instance_")}
;var rg=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function sg(a){P.call(this,1,arguments)}
y(sg,P);var tg=new Q("timing-sent",sg);var ug={vc:!0},vg=/^mark_/i,wg={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},xg=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],yg=v(rg.clearResourceTimings||rg.webkitClearResourceTimings||rg.mozClearResourceTimings||rg.msClearResourceTimings||rg.oClearResourceTimings||t,rg);
function zg(a){if("_"!=a[0]){var b=a;rg.mark&&(vg.test(b)||(b="mark_"+b),rg.mark(b))}var b=Ag(),c=Hb();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;Bg()["tick_"+a]=void 0;Hb();$d("csi_on_gel")?(b=Cg(),"_start"==a?cg("latencyActionBaselined",{clientActionNonce:b},void 0):cg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0),a=!0):a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!$d("navigation_only_csi_reset"));if(!a&&(b=G("TIMING_ACTION",void 0),a=Ag(),r("yt.timing.ready_")&&b&&a._start&&
Dg())){b=!0;c=G("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Eg()}}
function Fg(){var a=Gg().info.yt_lt="hot_bg";Bg().info_yt_lt=a;if($d("csi_on_gel"))if("yt_lt"in wg){var b={},c=wg.yt_lt;Aa(xg,c)&&(a=!!a);b[c]=a;a=Cg();b.clientActionNonce=a;cg("latencyActionInfo",b)}else Gb(Error("Unknown label yt_lt logged with GEL CSI."))}
function Dg(){var a=Ag();if(a.aft)return a.aft;for(var b=G("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Eg(){var a=Ag(),b=Gg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&da(a[d])){var e=d.slice(1);if(e in ug){var f=wa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Hg(f,e),Ig(),yg(),Jg(!1,void 0)}else{var g=G("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:G("TIMING_ACTION",void 0)},h=b.srt;delete b.srt;void 0===a.srt&&(h||0===h||(h=rg.timing||{},h=Math.max(0,h.responseStart-h.navigationStart),isNaN(h)&&b.pt&&(h=b.pt)),h||0===h)&&(b.srt=Math.round(h));if(b.h5jse){var l=window.location.protocol+r("ytplayer.config.assets.js");(l=rg.getEntriesByName?rg.getEntriesByName(l)[0]:
null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):delete b.h5jse}a.aft=Dg();Kg()&&"youtube"==g&&(Fg(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Hb();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);$d("navigation_only_csi_reset")||(Ig(),yg(),Jg(!1,void 0));Hg(f,e,void 0);R(tg,new sg(b.aft+(h||0)))}}
function Hg(a,b,c){if($d("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&ig(a)}catch(f){a&&ig(a)}else a&&ig(a);Jg(!0,c)}
function Cg(){var a=Gg().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=x();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(td)for(c=1,d=0;d<td.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^td.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Gg().nonce=a}return a}
function Ag(){return Gg().tick}
function Bg(){var a=Gg();"gel"in a||(a.gel={});return a.gel}
function Gg(){return r("ytcsi.data_")||Ig()}
function Ig(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function Jg(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Kg(){var a=Ag(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Gg().info.yt_pvis}
;var Lg={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function Mg(a,b){D.call(this);this.C=this.w=a;this.$=b;this.G=!1;this.g={};this.fa=this.Z=null;this.aa=new E;yb(this,na(zb,this.aa));this.j={};this.L=this.ga=this.i=this.oa=this.b=null;this.ca=!1;this.O=this.J=this.X=this.Y=null;this.ha={};this.hb=["onReady"];this.da=new Cf(this);yb(this,na(zb,this.da));this.ma=null;this.Ba=NaN;this.ea={};Ng(this);this.M("onDetailedError",v(this.Ab,this));this.M("onTabOrderChange",v(this.kb,this));this.M("onTabAnnounce",v(this.Ca,this));this.M("WATCH_LATER_VIDEO_ADDED",
v(this.Bb,this));this.M("WATCH_LATER_VIDEO_REMOVED",v(this.Cb,this));re||(this.M("onMouseWheelCapture",v(this.yb,this)),this.M("onMouseWheelRelease",v(this.zb,this)));this.M("onAdAnnounce",v(this.Ca,this));this.P=new Cf(this);yb(this,na(zb,this.P));this.na=!1;this.la=null}
y(Mg,D);var Og=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=Mg.prototype;k.xa=function(a,b){this.f||(Pg(this,a),Qg(this,b),this.G&&Rg(this))};
function Pg(a,b){a.oa=b;a.b=Ue(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.$,a.b.attrs.id=a.$);a.C.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.$;a.ga||(a.ga=Sg(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;if(b=a.b.attrs.width)a.C.style.width=$e(Number(b)||b,!0);if(b=a.b.attrs.height)a.C.style.height=$e(Number(b)||b,!0)}
k.pb=function(){return this.oa};
function Rg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Tg(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=hf(gf.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Ug(a,b){if((!b||(5!=(Lg[b.errorCode]||5)?0:-1!=Og.indexOf(b.errorCode)))&&Tg(a)){(b=Vg(a))&&b.stopVideo&&b.stopVideo();var c=a.b;b&&b.getUpdatedConfigurationData&&(b=b.getUpdatedConfigurationData(),c=Te(b));c.args.autoplay=1;c.args.html5_unavailable="1";Pg(a,c);Qg(a,"flash")}}
function Qg(a,b){if(!a.f){if(!b){if(!(b=!a.b.html5&&Tg(a))){if(!p(a.b.disable.html5)){var c;b=!0;void 0!=a.b.args.deviceHasDisplay&&(b=a.b.args.deviceHasDisplay);if(2.2==of)c=!0;else{a:{var d=b;b=r("yt.player.utils.videoElement_");b||(b=document.createElement("video"),q("yt.player.utils.videoElement_",b,void 0));try{if(b.canPlayType)for(var d=d?wf:xf,e=0;e<d.length;e++)if(b.canPlayType(d[e])){c=null;break a}c="fmt.noneavailable"}catch(f){c="html5.missingapi"}}c=!c}c&&(c=Wg(a)||a.b.assets.js);a.b.disable.html5=
!c;c||(a.b.args.html5_unavailable="1")}b=!!a.b.disable.html5}b=b?Tg(a)?"flash":"unsupported":"html5"}("flash"==b?a.Sb:a.Tb).call(a)}}
function Wg(a){var b=!0,c=Vg(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
k.Tb=function(){if(!this.ca){var a=Wg(this);a&&"html5"==Xg(this)?(this.L="html5",this.G||this.W()):(Yg(this),this.L="html5",a&&this.X?(this.w.appendChild(this.X),this.W()):(this.b.loaded=!0,this.Y=v(function(){var a=this.w,c=Ue(this.b);r("yt.player.Application.create")(a,c);this.W()},this),this.ca=!0,a?this.Y():(Ub(this.b.assets.js,this.Y),jf(this.b.assets.css))))}};
k.Sb=function(){var a=Ue(this.b);if(!this.J){var b=Vg(this);b&&(this.J=document.createElement("span"),this.J.tabIndex=0,Df(this.da,this.J,"focus",this.Ja),this.O=document.createElement("span"),this.O.tabIndex=0,Df(this.da,this.O,"focus",this.Ja),b.parentNode&&b.parentNode.insertBefore(this.J,b),b.parentNode&&b.parentNode.insertBefore(this.O,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Xg(this))this.L="flash",this.G||this.W();else{Yg(this);this.L=
"flash";this.b.loaded=!0;var b=gf.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!hf(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.w;if(c){var b=u(b)?Bd(b):b,d=Pa(a.attrs);d.tabindex=0;var e=Pa(a.params);e.flashvars=Qc(a.args);if(Ib){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),a.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(f in d)a.setAttribute(f,d[f]);for(f in e)a.setAttribute(f,e[f])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.W()}};
k.Ja=function(){Vg(this).focus()};
function Vg(a){var b=Bd(a.i);!b&&a.C&&a.C.querySelector&&(b=a.C.querySelector("#"+a.i));return b}
k.W=function(){if(!this.f){var a=Vg(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.ca=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Ug(this);else{Ng(this);this.G=!0;a=Vg(this);a.addEventListener&&(this.Z=Zg(this,a,"addEventListener"));a.removeEventListener&&(this.fa=Zg(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Zg(this,a,d))}for(var e in this.j)this.Z(e,
this.j[e]);Rg(this);this.ga&&this.ga(this.g);this.aa.N("onReady",this.g)}else this.Ba=H(v(this.W,this),50)}};
function Zg(a,b,c){var d=b[c];return function(){try{return a.ma=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ma=e,Gb(e,"WARNING"))}}}
function Ng(a){a.G=!1;if(a.fa)for(var b in a.j)a.fa(b,a.j[b]);for(var c in a.ea)I(parseInt(c,10));a.ea={};a.Z=null;a.fa=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.M,a);a.g.removeEventListener=v(a.Kb,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.qb,a);a.g.getPlayerType=v(a.rb,a);a.g.getCurrentVideoConfig=v(a.pb,a);a.g.loadNewVideoConfig=v(a.xa,a);a.g.isReady=v(a.Vb,a)}
k.Vb=function(){return this.G};
k.M=function(a,b){if(!this.f&&(b=Sg(this,b))){if(!Aa(this.hb,a)&&!this.j[a]){var c=$g(this,a);this.Z&&this.Z(a,c)}this.aa.subscribe(a,b);"onReady"==a&&this.G&&H(na(b,this.g),0)}};
k.Kb=function(a,b){this.f||(b=Sg(this,b))&&this.aa.unsubscribe(a,b)};
function Sg(a,b){var c=b;if("string"==typeof b){if(a.ha[b])return a.ha[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.ha[b]=c}return c?c:null}
function $g(a,b){var c="ytPlayer"+b+a.$;a.j[b]=c;n[c]=function(c){var d=H(function(){if(!a.f){a.aa.N(b,c);var e=a.ea,g=String(d);g in e&&delete e[g]}},0);
Oa(a.ea,String(d))};
return c}
k.kb=function(a){a=a?Id:Hd;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.J||b==this.O||(b.focus(),b!=document.activeElement));)b=a(b)};
k.Ca=function(a){Rb("a11y-announce",a)};
k.Ab=function(a){Ug(this,a)};
k.Bb=function(a){Rb("WATCH_LATER_VIDEO_ADDED",a)};
k.Cb=function(a){Rb("WATCH_LATER_VIDEO_REMOVED",a)};
k.yb=function(){this.na||(ve?(this.la=Ed(document),Df(this.P,window,"scroll",this.Hb),Df(this.P,this.w,"touchmove",this.Fb)):(Df(this.P,this.w,"mousewheel",this.Ma),Df(this.P,this.w,"wheel",this.Ma)),this.na=!0)};
k.zb=function(){Ef(this.P);this.na=!1};
k.Ma=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Hb=function(){window.scrollTo(this.la.l,this.la.o)};
k.Fb=function(a){a.preventDefault()};
k.rb=function(){return this.L||Xg(this)};
k.qb=function(){return this.ma};
function Xg(a){return(a=Vg(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Yg(a){zg("dcp");a.cancel();Ng(a);a.L=null;a.b&&(a.b.loaded=!1);var b=Vg(a);"html5"==Xg(a)?a.X=b:b&&b.destroy&&b.destroy();Gd(a.w);Ef(a.da);a.J=null;a.O=null}
k.cancel=function(){this.Y&&ac(this.b.assets.js,this.Y);I(this.Ba);this.ca=!1};
k.A=function(){Yg(this);if(this.X&&this.b)try{this.X.destroy()}catch(b){Gb(b)}this.ha=null;for(var a in this.j)n[this.j[a]]=null;this.oa=this.b=this.g=null;delete this.w;delete this.C;Mg.B.A.call(this)};var ah={},bh="player_uid_"+(1E9*Math.random()>>>0);function ch(a,b){a=u(a)?Bd(a):a;b=Te(b);var c=bh+"_"+ia(a),d=ah[c];if(d)return d.xa(b),d.g;d=new Mg(a,c);ah[c]=d;Rb("player-added",d.g);yb(d,na(dh,d));H(function(){d.xa(b)},0);
return d.g}
function dh(a){ah[a.$]=null}
function eh(a){a=Bd(a);if(!a)return null;var b=bh+"_"+ia(a),c=ah[b];c||(c=new Mg(a,b),ah[b]=c);return c.g}
;var fh=r("yt.abuse.botguardInitialized")||dc;q("yt.abuse.botguardInitialized",fh,void 0);var gh=r("yt.abuse.invokeBotguard")||ec;q("yt.abuse.invokeBotguard",gh,void 0);var hh=r("yt.abuse.dclkstatus.checkDclkStatus")||kd;q("yt.abuse.dclkstatus.checkDclkStatus",hh,void 0);var ih=r("yt.player.exports.navigate")||Oe;q("yt.player.exports.navigate",ih,void 0);var jh=r("yt.player.embed")||ch;q("yt.player.embed",jh,void 0);var kh=r("yt.player.getPlayerByElement")||eh;q("yt.player.getPlayerByElement",kh,void 0);
var lh=r("yt.util.activity.init")||Xd;q("yt.util.activity.init",lh,void 0);var mh=r("yt.util.activity.getTimeSinceActive")||Zd;q("yt.util.activity.getTimeSinceActive",mh,void 0);var nh=r("yt.util.activity.setTimestamp")||Yd;q("yt.util.activity.setTimestamp",nh,void 0);function oh(a){P.call(this,1,arguments);this.b=a}
y(oh,P);function T(a){P.call(this,1,arguments);this.b=a}
y(T,P);function ph(a,b,c){P.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
y(ph,P);function qh(a,b,c,d,e){P.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
y(qh,P);function rh(a,b,c){P.call(this,1,arguments);this.b=a;this.subscriptionId=b}
y(rh,P);function sh(a,b,c,d,e,f,g){P.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=g||null}
y(sh,P);
var th=new Q("subscription-batch-subscribe",oh),uh=new Q("subscription-batch-unsubscribe",oh),vh=new Q("subscription-subscribe",qh),wh=new Q("subscription-subscribe-loading",T),xh=new Q("subscription-subscribe-loaded",T),yh=new Q("subscription-subscribe-success",rh),zh=new Q("subscription-subscribe-external",qh),Ah=new Q("subscription-unsubscribe",sh),Bh=new Q("subscription-unsubscirbe-loading",T),Ch=new Q("subscription-unsubscribe-loaded",T),Dh=new Q("subscription-unsubscribe-success",T),Eh=new Q("subscription-external-unsubscribe",
sh),Fh=new Q("subscription-enable-ypc",T),Gh=new Q("subscription-disable-ypc",T),Hh=new Q("subscription-prefs",ph),Ih=new Q("subscription-prefs-success",ph),Jh=new Q("subscription-prefs-failure",ph);function Kh(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Rc(c,"mode",b));b=Rc("/signin?context=popup","next",c);b=Rc(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0))c=Ob("LOGGED_IN",function(b){Qb(G("LOGGED_IN_PUBSUB_KEY",void 0));F("LOGGED_IN",!0);a(b)}),F("LOGGED_IN_PUBSUB_KEY",c),b.moveTo((screen.width-375)/2,(screen.height-440)/2)}
q("yt.pubsub.publish",Rb,void 0);function Lh(){var a=G("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!G("SESSION_INDEX")&&!G("LOGGED_IN"))}
;function Mh(){var a=Td();return a?a:null}
;function Nh(a,b){(a=Bd(a))&&a.style&&(a.style.display=b?"":"none",sd(a,"hid",!b))}
function Oh(a){z(arguments,function(a){!ea(a)||a instanceof Element?Nh(a,!0):z(a,function(a){Oh(a)})})}
function Ph(a){z(arguments,function(a){!ea(a)||a instanceof Element?Nh(a,!1):z(a,function(a){Ph(a)})})}
;var Qh={},Rh="ontouchstart"in document;function Sh(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Qd(c,function(a){return pd(a,b)},!0,d)}
function U(a){var b="mouseover"==a.type&&"mouseenter"in Qh||"mouseout"==a.type&&"mouseleave"in Qh,c=a.type in Qh||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Qh[b],d;for(d in c.H){var e=Sh(b,d,a.target);e&&!Qd(a.relatedTarget,function(a){return a==e},!0)&&c.N(d,e,b,a)}}if(b=Qh[a.type])for(d in b.H)(e=Sh(a.type,d,a.target))&&b.N(d,e,a.type,a)}}
N(document,"blur",U,!0);N(document,"change",U,!0);N(document,"click",U);N(document,"focus",U,!0);N(document,"mouseover",U);N(document,"mouseout",U);N(document,"mousedown",U);N(document,"keydown",U);N(document,"keyup",U);N(document,"keypress",U);N(document,"cut",U);N(document,"paste",U);Rh&&(N(document,"touchstart",U),N(document,"touchend",U),N(document,"touchcancel",U));function Th(a){this.j=a;this.g={};this.ja=[];this.i=[]}
function V(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
Th.prototype.register=aa;Th.prototype.unregister=function(){Qb(this.ja);this.ja.length=0;qg(this.i);this.i.length=0};
Th.prototype.init=t;Th.prototype.dispose=t;function Uh(a,b,c){a.i.push(S(b,c,a))}
function Vh(a,b,c){var d=V(a,void 0),e=v(c,a);b in Qh||(Qh[b]=new E);Qh[b].subscribe(d,e);a.g[c]=e}
function Wh(a,b,c){if(b in Qh){var d=Qh[b];d.unsubscribe(V(a,void 0),a.g[c]);0>=d.ba()&&(d.dispose(),delete Qh[b])}delete a.g[c]}
function Xh(a,b){gb(a,"tooltip-text",b)}
;function Yh(){Th.call(this,"tooltip");this.b=0;this.f={}}
y(Yh,Th);ba(Yh);k=Yh.prototype;k.register=function(){Vh(this,"mouseover",this.ia);Vh(this,"mouseout",this.S);Vh(this,"focus",this.Ha);Vh(this,"blur",this.Fa);Vh(this,"click",this.S);Vh(this,"touchstart",this.Ua);Vh(this,"touchend",this.ka);Vh(this,"touchcancel",this.ka)};
k.unregister=function(){Wh(this,"mouseover",this.ia);Wh(this,"mouseout",this.S);Wh(this,"focus",this.Ha);Wh(this,"blur",this.Fa);Wh(this,"click",this.S);Wh(this,"touchstart",this.Ua);Wh(this,"touchend",this.ka);Wh(this,"touchcancel",this.ka);this.dispose();Yh.B.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.S(this.f[a]);this.f={}};
k.ia=function(a){if(!(this.b&&1E3>x()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(ib(a,"tooltip-hide-timer"),I(b));var b=v(function(){Zh(this,a);ib(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=H(b,c);
gb(a,"tooltip-show-timer",b.toString());a.title&&(Xh(a,$h(a)),a.title="");b=ia(a).toString();this.f[b]=a}};
k.S=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(I(b),ib(a,"tooltip-show-timer"));b=v(function(){if(a){var b=Bd(ai(this,a));b&&(bi(b),b&&b.parentNode&&b.parentNode.removeChild(b),ib(a,"content-id"));(b=Bd(ai(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}ib(a,"tooltip-hide-timer")},this);
b=H(b,50);gb(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
k.Ha=function(a){this.b=0;this.ia(a)};
k.Fa=function(a){this.b=0;this.S(a)};
k.Ua=function(a,b,c){c.changedTouches&&(this.b=0,a=Sh(b,V(this),c.changedTouches[0].target),this.ia(a))};
k.ka=function(a,b,c){c.changedTouches&&(this.b=x(),a=Sh(b,V(this),c.changedTouches[0].target),this.S(a))};
function ci(a,b){Xh(a,b);a=C(a,"content-id");(a=Bd(a))&&Jd(a,b)}
function $h(a){return C(a,"tooltip-text")||a.title}
function Zh(a,b){if(b){var c=$h(b);if(c){var d=Bd(ai(a,b));if(!d){d=document.createElement("div");d.id=ai(a,b);d.className=V(a,"tip");var e=document.createElement("div");e.className=V(a,"tip-body");var f=document.createElement("div");f.className=V(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=V(a,"tip-content");var h=di(a,b),l=ai(a,b,"content");g.id=l;gb(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var m=
Md(b),l=ai(a,b,"arialabel"),f=document.createElement("div");qd(f,V(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Jd(f,m);b.setAttribute("aria-labelledby",l);l=Mh()||document.body;l.appendChild(f);l.appendChild(d);ci(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",qd(g,V(a,"normal-wrap")));g=pd(b,V(a,"reverse"));ei(a,b,d,e,h,g)||ei(a,b,d,e,h,!g);var w=V(a,"tip-visible");
H(function(){qd(d,w)},0)}}}}
function ei(a,b,c,d,e,f){sd(c,V(a,"tip-reverse"),f);var g=0;f&&(g=1);a=af(b);f=new M((a.width-10)/2,f?a.height:0);var h=Ad(b),l=new M(0,0),m;m=h?Ad(h):document;m=!J||9<=Number(zc)||Fd(yd(m).b)?m.documentElement:m.body;b!=m&&(m=Ze(b),h=Ed(yd(h).b),l.l=m.left+h.l,l.o=m.top+h.o);f=new M(l.l+f.l,l.o+f.o);f=new M(f.l,f.o);l=(g&8&&"rtl"==Ye(c,"direction")?g^4:g)&-9;g=af(c);m=new ld(g.width,g.height);h=f;h=new M(h.l,h.o);m=new ld(m.width,m.height);0!=l&&(l&4?h.l-=m.width+0:l&2&&(h.l-=m.width/2),l&1&&(h.o-=
m.height+0));f=new We(0,0,0,0);f.left=h.l;f.top=h.o;f.width=m.width;f.height=m.height;h=new M(f.left,f.top);h instanceof M?(l=h.l,h=h.o):(l=h,h=void 0);c.style.left=$e(l,!1);c.style.top=$e(h,!1);m=new ld(f.width,f.height);if(!(g==m||g&&m&&g.width==m.width&&g.height==m.height))if(g=m,l=Fd(yd(Ad(c)).b),!J||K("10")||l&&K("8"))f=c.style,qc?f.MozBoxSizing="border-box":rc?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(g.width,0)+"px",f.height=Math.max(g.height,0)+"px";else if(f=
c.style,l){if(J){l=df(c,"paddingLeft");h=df(c,"paddingRight");m=df(c,"paddingTop");var w=df(c,"paddingBottom"),l=new Ve(m,h,w,l)}else l=Xe(c,"paddingLeft"),h=Xe(c,"paddingRight"),m=Xe(c,"paddingTop"),w=Xe(c,"paddingBottom"),l=new Ve(parseFloat(m),parseFloat(h),parseFloat(w),parseFloat(l));if(!J||9<=Number(zc))h=Xe(c,"borderLeftWidth"),m=Xe(c,"borderRightWidth"),w=Xe(c,"borderTopWidth"),za=Xe(c,"borderBottomWidth"),h=new Ve(parseFloat(w),parseFloat(m),parseFloat(za),parseFloat(h));else{h=ff(c,"borderLeft");
m=ff(c,"borderRight");var w=ff(c,"borderTop"),za=ff(c,"borderBottom"),h=new Ve(w,m,za,h)}f.pixelWidth=g.width-h.left-l.left-l.right-h.right;f.pixelHeight=g.height-h.top-l.top-l.bottom-h.bottom}else f.pixelWidth=g.width,f.pixelHeight=g.height;g=window.document;g=Fd(g)?g.documentElement:g.body;f=new ld(g.clientWidth,g.clientHeight);1==c.nodeType?(c=Ze(c),h=new M(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,h=new M(c.clientX,c.clientY));c=af(d);m=Math.floor(c.width/2);g=!!(f.height<h.o+a.height);
a=!!(h.o<a.height);l=!!(h.l<m);f=!!(f.width<h.l+m);h=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||l)h=-5;else if("right"==b||f)h=20-c.width-3;b=Math.floor(h)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||a)}
function ai(a,b,c){a=V(a);var d=b.__yt_uid_key;d||(d=Rd(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function di(a,b){var c=null;sc&&pd(b,V(a,"masked"))&&((c=Bd("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Oh(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=V(a,"tip-mask")));return c}
function bi(a){var b=Bd("yt-uix-tooltip-shared-mask"),c=b&&Qd(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Ph(b),document.body.appendChild(b))}
;function fi(){Th.call(this,"subscription-button")}
y(fi,Th);ba(fi);fi.prototype.register=function(){Vh(this,"click",this.qa);Uh(this,wh,this.La);Uh(this,xh,this.Ka);Uh(this,yh,this.Eb);Uh(this,Bh,this.La);Uh(this,Ch,this.Ka);Uh(this,Dh,this.Gb);Uh(this,Fh,this.xb);Uh(this,Gh,this.wb)};
fi.prototype.unregister=function(){Wh(this,"click",this.qa);fi.B.unregister.call(this)};
var Pd={ya:"hover-enabled",Za:"yt-uix-button-subscribe",$a:"yt-uix-button-subscribed",Wb:"ypc-enabled",ab:"yt-uix-button-subscription-container",bb:"yt-subscription-button-disabled-mask-container"},gi={Xb:"channel-external-id",cb:"subscriber-count-show-when-subscribed",eb:"subscriber-count-tooltip",fb:"subscriber-count-title",Yb:"href",za:"is-subscribed",Zb:"parent-url",$b:"clicktracking",gb:"style-type",Aa:"subscription-id",ac:"target",ib:"ypc-enabled"};k=fi.prototype;
k.qa=function(a){var b=C(a,"href"),c=Lh();if(b)a=C(a,"target")||"_self",window.open(b,a);else if(c){var b=C(a,"channel-external-id"),c=C(a,"clicktracking"),d;if(C(a,"ypc-enabled")){d=C(a,"ypc-item-type");var e=C(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");R(Ah,new sh(b,f,d,a,c,e))}else R(vh,new qh(b,d,c,e))}else hi(this,a)};
k.La=function(a){this.V(a.b,this.Sa,!0)};
k.Ka=function(a){this.V(a.b,this.Sa,!1)};
k.Eb=function(a){this.V(a.b,this.Ta,!0,a.subscriptionId)};
k.Gb=function(a){this.V(a.b,this.Ta,!1)};
k.xb=function(a){this.V(a.b,this.nb)};
k.wb=function(a){this.V(a.b,this.mb)};
k.Ta=function(a,b,c){b?(gb(a,gi.za,"true"),c&&gb(a,gi.Aa,c)):(ib(a,gi.za),ib(a,gi.Aa));ii(a)};
k.Sa=function(a,b){var c;c=Od(a);sd(c,Pd.bb,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function ii(a){var b=C(a,gi.gb),c=!!C(a,"is-subscribed"),b="-"+b,d=Pd.$a+b;sd(a,Pd.Za+b,!c);sd(a,d,c);C(a,gi.eb)&&!C(a,gi.cb)&&(b=V(Yh.getInstance()),sd(a,b,!c),a.title=c?"":C(a,gi.fb));c?H(function(){qd(a,Pd.ya)},1E3):rd(a,Pd.ya)}
k.nb=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(qd(a,"ypc-enabled"),gb(a,gi.ib,"true"))};
k.mb=function(a){C(a,"ypc-enabled")&&(rd(a,"ypc-enabled"),ib(a,"ypc-enabled"))};
function ji(a,b){return va(Cd(V(a)),function(a){return b==C(a,"channel-external-id")},a)}
k.jb=function(a,b,c){var d=Ia(arguments,2);z(a,function(a){b.apply(this,Ca(a,d))},this)};
k.V=function(a,b,c){var d=ji(this,a);this.jb.apply(this,Ca([d],Ia(arguments,1)))};
function hi(a,b){a=v(function(a){a.discoverable_subscriptions&&F("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.qa(b)},a);
Kh(a,"subscribe")}
;var ki=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",ki,void 0);var li=window,mi=document,ni=li.location;function oi(){}
var pi=/\[native code\]/;function W(a,b,c){return a[b]=a[b]||c}
function qi(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function ri(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function X(){var a;if((a=Object.create)&&pi.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var si=W(li,"gapi",{});var Y;Y=W(li,"___jsl",X());W(Y,"I",0);W(Y,"hel",10);function ti(){var a=ni.href,b;if(Y.dpo)b=Y.h;else{b=Y.h;var c=/([#].*&|[#])jsh=([^&#]*)/g,d=/([?#].*&|[?#])jsh=([^&#]*)/g;if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function ui(a){var b=W(Y,"PQ",[]);Y.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function vi(a){return W(W(Y,"H",X()),a,X())}
;var wi=W(Y,"perf",X());W(wi,"g",X());var xi=W(wi,"i",X());W(wi,"r",[]);X();X();function yi(a,b,c){b&&0<b.length&&(b=zi(b),c&&0<c.length&&(b+="___"+zi(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=W(xi,"_p",X()),W(b,c,X())[a]=(new Date).getTime(),b=wi.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function zi(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Ai=X(),Bi=[];function Ci(a){throw Error("Bad hint"+(a?": "+a:""));}
;Bi.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Y[b]=W(Y,b,[]).concat(c):W(Y,b,c)}if(b=a.u)a=W(Y,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var Di=/^(\/[a-zA-Z0-9_\-]+)+$/,Ei=/^[a-zA-Z0-9\-_\.,!]+$/,Fi=/^gapi\.loaded_[0-9]+$/,Gi=/^[a-zA-Z0-9,._-]+$/;function Hi(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Ai[f],h=null;g?h=g(e,b,c,d):Ci("no hint processor for: "+f);h||Ci("failed to generate load url");b=h;c=b.match(Ii);(d=b.match(Ji))&&1===d.length&&Ki.test(b)&&c&&1===c.length||Ci("failed sanity: "+a);return h}
function Li(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Mi(a);Fi.test(c)||Ci("invalid_callback");b=Ni(b);d=d&&d.length?Ni(d):null;return[encodeURIComponent(a.Ib).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Da?"/am="+e(a.Da):"",a.Qa?"/rs="+e(a.Qa):"",a.Ya?"/t="+e(a.Ya):"","/cb=",e(c)].join("")}
function Mi(a){"/"!==a.charAt(0)&&Ci("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Ci("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Di.test(b)||Ci("invalid_prefix");c=Oi(a,"k",!0);d=Oi(a,"am");e=Oi(a,"rs");a=Oi(a,"t");return{Ib:b,version:c,
Da:d,Qa:e,Ya:a}}
function Ni(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Gi.test(e)&&b.push(e)}return b.join(",")}
function Oi(a,b,c){a=a[b];!a&&c&&Ci("missing: "+b);if(a){if(Ei.test(a))return a;Ci("invalid: "+b)}return null}
var Ki=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ji=/\/cb=/g,Ii=/\/\//g;function Pi(){var a=ti();if(!a)throw Error("Bad hint");return a}
Ai.m=function(a,b,c,d){(a=a[0])||Ci("missing_hint");return"https://apis.google.com"+Li(a,b,c,d)};var Qi=decodeURI("%73cript");function Ri(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>qi.call(b,e)&&c.push(e)}return c}
function Si(a){"loading"!=mi.readyState?Ti(a):mi.write("<"+Qi+' src="'+encodeURI(a)+'"></'+Qi+">")}
function Ti(a){var b=mi.createElement(Qi);b.setAttribute("src",a);b.async="true";(a=mi.getElementsByTagName(Qi)[0])?a.parentNode.insertBefore(b,a):(mi.head||mi.body||mi.documentElement).appendChild(b)}
function Ui(a,b){var c=b&&b._c;if(c)for(var d=0;d<Bi.length;d++){var e=Bi[d][0],f=Bi[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Vi(a,b,c){Wi(function(){var c;c=b===ti()?W(si,"_",X()):X();c=W(vi(b),"_",c);a(c)},c)}
function Xi(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ui(a,c);b=a?a.split(":"):[];var d=c.h||Pi(),e=W(Y,"ah",X());if(e["::"]&&b.length){a=[];for(var f=null;f=b.shift();){var g=f.split("."),g=e[f]||e[g[1]&&"ns:"+g[0]||""]||d,h=a.length&&a[a.length-1]||null,l=h;h&&h.hint==g||(l={hint:g,features:[]},a.push(l));l.features.push(f)}var m=a.length;if(1<m){var w=c.callback;w&&(c.callback=function(){0==--m&&w()})}for(;b=a.shift();)Yi(b.features,c,b.hint)}else Yi(b||[],c,d)}
function Yi(a,b,c){function d(a,b){if(za)return 0;li.clearTimeout(w);ud.push.apply(ud,ga);var d=((si||{}).config||{}).update;d?d(f):f&&W(Y,"cu",[]).push(f);if(b){yi("me0",a,mc);try{Vi(b,c,m)}finally{yi("me1",a,mc)}}return 1}
a=ri(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var w=null,za=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=W(vi(c),"r",[]).sort(),ud=W(vi(c),"L",[]).sort(),mc=[].concat(l);0<g&&(w=li.setTimeout(function(){za=!0;h()},g));
var ga=Ri(a,ud);if(ga.length){var ga=Ri(a,l),Ea=W(Y,"CP",[]),Fa=Ea.length;Ea[Fa]=function(a){function b(){var a=Ea[Fa+1];a&&a()}
function c(b){Ea[Fa]=null;d(ga,a)&&ui(function(){e&&e();b()})}
if(!a)return 0;yi("ml1",ga,mc);0<Fa&&Ea[Fa-1]?Ea[Fa]=function(){c(b)}:c(b)};
if(ga.length){var me="loaded_"+Y.I++;si[me]=function(a){Ea[Fa](a);si[me]=null};
a=Hi(c,ga,"gapi."+me,l);l.push.apply(l,ga);yi("ml0",ga,mc);b.sync||li.___gapisync?Si(a):Ti(a)}else Ea[Fa](oi)}else d(ga)&&e&&e()}
;function Wi(a,b){if(Y.hee&&0<Y.hel)try{return a()}catch(c){b&&b(c),Y.hel--,Xi("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;si.load=function(a,b){return Wi(function(){return Xi(a,b)})};function Zi(a){this.b=a||Xf();$i||($i=aj(this.b))}
var $i=null;function aj(a){return(new O(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=fa(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Ra(d,{_c:{jsl:{h:G("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||G("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=Sc(1<g.length?g[1]:g[0])}else e={};var h=e.gapi_jsh;h&&Ra(d,{_c:{jsl:{h:h}}})}Xi("client",d)}catch(l){Gb(l)}})).then(function(){})}
Zi.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;qa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Ea;qa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",G("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Zi.prototype.f=function(){return{context:Yf(this.b)}};
Zi.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=H(function(){e||(e=!0,c.R&&c.R())},c.timeout));
bj(this,a,b,function(a){if(!e)if(e=!0,d&&I(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function bj(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":G("VISITOR_DATA")},method:"POST",body:Ec(c)},f=v(a.i,a);$i.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function cj(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function dj(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],l=e[4],m,w,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),w=1518500249):(m=d^f^h,w=1859775393):60>c?(m=d&f|h&(d|f),w=2400959708):(m=d^f^h,w=3395469782),m=((a<<5|a>>>27)&4294967295)+m+l+w+b[c]&4294967295,l=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[m++]=a[d++],w++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,w;a();return{reset:a,update:c,digest:d,lb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function ej(a,b,c){var d=[],e=[];if(1==(da(c)?2:1))return e=[b,a],z(d,function(a){e.push(a)}),fj(e.join(" "));
var f=[],g=[];z(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(a){e.push(a)});
a=fj(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function fj(a){var b=dj();b.update(a);return b.lb().toLowerCase()}
;function gj(){this.b=Xf()}
gj.prototype.f=function(){return{context:Yf(this.b)}};
gj.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":G("VISITOR_DATA")},D:b,Oa:"JSON",R:c.R,F:c.F,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=cj(String(n.location.href)),e=n.__OVERRIDE_SID;null==e&&(e=(new Le(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==d&&(d=(new Le(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(n.location.href);
c=f&&d&&e?[e,ej(cj(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=G("SESSION_INDEX",0));a="//"+this.b.Ub+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey;b.method="POST";b.D||(b.D={});$c(a,b)};function He(){return $d("enable_youtubei_innertube")?gj:Zi}
;function hj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function ij(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return jj(a)}
function jj(a,b,c){if(ha(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function kj(a,b,c,d){if(ha(a)&&!da(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function lj(a){var b=a.video_id||a.videoId;if(u(b)){var c=le()||{},d=le()||{};p(void 0)?d[b]=void 0:delete d[b];var e=x()+3E5,f=oe;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;var mj=null,nj=[];function oj(a){return{externalChannelId:a.externalChannelId,vb:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function pj(a){qj(oj(a))}
function qj(a){Lh()?(R(vh,new qh(a.externalChannelId,a.vb?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Qc({event:"subscribe",source:a.source}))&&ig(a)):rj(a)}
function rj(a){Kh(function(b){b.subscription_ajax&&qj(a)},null)}
function sj(a){a=oj(a);R(Ah,new sh(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Qc({event:"unsubscribe",source:a.source}))&&ig(a)}
function tj(a){mj&&mj.channelSubscribed(a.b,a.subscriptionId)}
function uj(a){mj&&mj.channelUnsubscribed(a.b)}
;function vj(a){D.call(this);this.g=a;this.g.subscribe("command",this.Pa,this);this.i={};this.j=!1}
y(vj,D);k=vj.prototype;k.start=function(){this.j||this.f||(this.j=!0,wj(this.g,"RECEIVING"))};
k.Wa=aa;k.addEventListener=aa;k.removeEventListener=aa;k.Pa=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":u(c.event)&&(a=c.event,a in this.i||(b=v(this.Mb,this,a),this.i[a]=b,this.addEventListener(a,b)));break;case "removeEventListener":u(c.event)&&xj(this,c.event);break;default:this.Wa(a,b)}}};
k.Mb=function(a,b){this.j&&!this.f&&wj(this.g,a,this.ra(a,b))};
k.ra=function(a,b){if(null!=b)return{value:b}};
function xj(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
k.A=function(){this.g.unsubscribe("command",this.Pa,this);this.g=null;for(var a in this.i)xj(this,a);vj.B.A.call(this)};function yj(a,b){vj.call(this,b);this.b=a;this.start()}
y(yj,vj);k=yj.prototype;k.addEventListener=function(a,b){this.b.addEventListener(a,b)};
k.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
k.Wa=function(a,b){this.b.isReady()&&this.b[a]&&(b=zj(a,b||{}),b=this.b[a].apply(this.b,b),(b=Aj(a,b))&&this.j&&!this.f&&wj(this.g,a,b))};
function zj(a,b){switch(a){case "loadVideoById":return b=jj(b),lj(b),[b];case "cueVideoById":return b=jj(b),lj(b),[b];case "loadVideoByPlayerVars":return lj(b),[b];case "cueVideoByPlayerVars":return lj(b),[b];case "loadPlaylist":return b=kj(b),lj(b),[b];case "cuePlaylist":return b=kj(b),lj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Aj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
k.ra=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return yj.B.ra.call(this,a,b)};
k.A=function(){yj.B.A.call(this);delete this.b};function Bj(a,b,c,d){D.call(this);this.i=b||null;this.L="*";this.j=c||null;this.b=null;this.channel=d||null;this.O=!!a;this.G=v(this.P,this);window.addEventListener("message",this.G)}
y(Bj,D);Bj.prototype.P=function(a){if(!("*"!=this.j&&a.origin!=this.j||this.i&&a.source!=this.i)&&u(a.data)){var b;try{b=Cc(a.data)}catch(c){return}null!=b&&(this.O&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel)||b&&this.J(a,b))}};
Bj.prototype.J=aa;Bj.prototype.sendMessage=function(a,b){if(b=b||this.i){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var c=Ec(a);b.postMessage(c,this.L)}catch(d){Gb(d,"WARNING")}}};
Bj.prototype.A=function(){window.removeEventListener("message",this.G);Bj.B.A.call(this)};function Cj(a,b,c){Bj.call(this,a,b,c||G("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.C=this.g=this.w=null}
y(Cj,Bj);Cj.prototype.J=function(a,b){switch(b.event){case "listening":"null"!=a.origin?this.j=this.L=a.origin:Gb(Error("MessageEvent origin is null"),"WARNING");this.i=a.source;this.b=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.w&&(this.C&&!Aa(this.C,b.func)||this.w(b.func,b.args))}};function Dj(){var a=this.f=new Cj(!!G("WIDGET_ID_ENFORCE")),b=v(this.Jb,this);a.w=b;a.C=null;this.f.channel="widget";if(a=G("WIDGET_ID"))this.f.b=a;this.i=[];this.w=!1;this.j={}}
k=Dj.prototype;k.Jb=function(a,b){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,Ej(this,a)),this.j[a]=!0)):this.Xa(a,b)};
k.Xa=function(){};
function Ej(a,b){return v(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.ob=function(){this.w=!0;this.sendMessage("initialDelivery",this.sa());this.sendMessage("onReady");z(this.i,this.Ra,this);this.i=[]};
k.sa=function(){return null};
function Fj(a,b){a.sendMessage("infoDelivery",b)}
k.Ra=function(a){this.w?this.f.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Ra({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Gj(a){Dj.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Db,this));this.addEventListener("onVideoProgress",v(this.Qb,this));this.addEventListener("onVolumeChange",v(this.Rb,this));this.addEventListener("onApiChange",v(this.Lb,this));this.addEventListener("onPlaybackQualityChange",v(this.Nb,this));this.addEventListener("onPlaybackRateChange",v(this.Ob,this));this.addEventListener("onStateChange",v(this.Pb,this))}
y(Gj,Dj);k=Gj.prototype;k.Xa=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&hj(a)){var c;c=b;if(ha(c[0])&&!da(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=jj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=ij.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=kj.apply(window,c)}c=d}lj(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);hj(a)&&Fj(this,this.sa())}};
k.Db=function(){var a=v(this.ob,this);this.f.g=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.sa=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ba(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=x()/1E3;return b};
k.Pb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate()};
this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Fj(this,a)};
k.Nb=function(a){Fj(this,{playbackQuality:a})};
k.Ob=function(a){Fj(this,{playbackRate:a})};
k.Lb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Rb=function(){Fj(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Qb=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Fj(this,a)};
k.dispose=function(){Gj.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Hj(){D.call(this);this.b=new E;yb(this,na(zb,this.b))}
y(Hj,D);Hj.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
Hj.prototype.unsubscribe=function(a,b,c){return this.f?!1:this.b.unsubscribe(a,b,c)};
Hj.prototype.T=function(a){return this.f?!1:this.b.T(a)};
Hj.prototype.N=function(a,b){return this.f?!1:this.b.N.apply(this.b,arguments)};function Ij(a,b,c){Hj.call(this);this.g=a;this.i=b;this.j=c}
y(Ij,Hj);function wj(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(Ec(a),d.i))}}
Ij.prototype.A=function(){this.i=this.g=null;Ij.B.A.call(this)};function Jj(a,b,c){D.call(this);this.b=a;this.i=c;this.j=N(window,"message",v(this.w,this));this.g=new Ij(this,a,b);yb(this,na(zb,this.g))}
y(Jj,D);Jj.prototype.w=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=Cc(a)}catch(d){return}a.command&&(b=this.g,b.f||b.N("command",a.command,a.data))}};
Jj.prototype.A=function(){Wd(this.j);this.b=null;Jj.B.A.call(this)};var Kj=!1;function Lj(a){if(a=a.match(/[\d]+/g))a.length=3}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Kj=!0,a.description)){Lj(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Kj=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Kj=!(!a||!a.enabledPlugin))){Lj(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Kj=!0;Lj(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Kj=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Kj=!0,Lj(b.GetVariable("$version"))}catch(c){}})();function Mj(a){return(a=a.exec(A))?a[1]:""}
(function(){if(re)return Mj(/Firefox\/([0-9.]+)/);if(J||pc||oc)return yc;if(ve)return Mj(/Chrome\/([0-9.]+)/);if(we&&!(kc()||B("iPad")||B("iPod")))return Mj(/Version\/([0-9.]+)/);if(se||te){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(A);if(a)return a[1]+"."+a[2]}else if(ue)return(a=Mj(/Android\s+([0-9.]+)/))?a:Mj(/Version\/([0-9.]+)/);return""})();function Nj(){var a=Pa(Oj);return new O(function(b,c){a.F=function(a){Vc(a)?b(a):c(new Pj("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new Pj("Unknown request error","net.unknown"))};
a.R=function(){c(new Pj("Request timed out","net.timeout"))};
$c("//googleads.g.doubleclick.net/pagead/id",a)})}
function Pj(a,b){oa.call(this,a+", errorCode="+b);this.errorCode=b}
y(Pj,oa);Pj.prototype.name="PromiseAjaxError";function Qj(a){oa.call(this,a.message);this.b=a instanceof Nf}
y(Qj,oa);Qj.prototype.name="BiscottiError";function Rj(a,b){this.f=a;this.b=b}
Rj.prototype.then=function(a,b,c){try{if(p(this.f))return a?Kf(a.call(c,this.f)):Kf(this.f);if(p(this.b)){if(!b)return Lf(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Lf(this.b):Kf(d)}throw Error("Invalid Result_ state");}catch(e){return Lf(e)}};
Ff(Rj);var Oj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Sj=null;function Tj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Uj(""),Sj=new Rj(""),"";a=JSON.parse(a.substr(4)).id;Uj(a);Sj=new Rj(a);Vj(18E5,2);return a}
function Wj(a,b){b=new Qj(b);Uj("");Sj=new Rj(void 0,b);0<a&&Vj(12E4,a-1);throw b;}
function Vj(a,b){H(function(){var a=v(Wj,n,b),a=Nj().then(Tj,a);Mf(a,null,t,void 0)},a)}
function Uj(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Xj(){}
;function Yj(){this.b=G("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Ne.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
ba(Yj);var Z=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Z,void 0);function Zj(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function ak(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function bk(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Yj.prototype.get=function(a,b){ak(a);Zj(a);a=void 0!==Z[a]?Z[a].toString():null;return null!=a?a:b?b:""};
Yj.prototype.set=function(a,b){ak(a);Zj(a);if(null==b)throw"ExpectedNotNull";Z[a]=b.toString()};
Yj.prototype.remove=function(a){ak(a);Zj(a);delete Z[a]};
Yj.prototype.clear=function(){Z={}};function ck(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&ig(c)}}
;function dk(a){P.call(this,1,arguments);this.pa=a}
y(dk,P);function ek(a,b){P.call(this,2,arguments);this.f=a;this.b=b}
y(ek,P);function fk(a,b,c,d){P.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(fk,P);function gk(a,b){P.call(this,1,arguments);this.f=a;this.b=b||null}
y(gk,P);function hk(a){P.call(this,1,arguments)}
y(hk,P);var ik=new Q("ypc-core-load",dk),jk=new Q("ypc-guide-sync-success",ek),kk=new Q("ypc-purchase-success",fk),lk=new Q("ypc-subscription-cancel",hk),mk=new Q("ypc-subscription-cancel-success",gk),nk=new Q("ypc-init-subscription",hk);var ok=!1,pk=[],qk=[];function rk(a){a.b?ok?R(zh,a):R(ik,new dk(function(){R(nk,new hk(a.b))})):sk(a.f,a.i,a.g,a.source)}
function tk(a){a.b?ok?R(Eh,a):R(ik,new dk(function(){R(lk,new hk(a.b))})):uk(a.f,a.subscriptionId,a.i,a.g,a.source)}
function vk(a){wk(Da(a.b))}
function xk(a){yk(Da(a.b))}
function zk(a){Ak(a.g,a.f,a.b)}
function Bk(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&R(yh,new rh(b,c,a.b.channelInfo))}
function Ck(a){var b=a.b;Ja(a.f,function(a,d){R(yh,new rh(d,a,b[d]))})}
function Dk(a){R(Dh,new T(a.f.itemId));a.b&&a.b.length&&(Ek(a.b,Dh),Ek(a.b,Fh))}
function sk(a,b,c,d){var e=new T(a);R(wh,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=G("PLAYBACK_ID"))&&(c.plid=d);(d=G("EVENT_ID"))&&(c.ei=d);b&&Fk(b,c);$c("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",wa:f,D:c,F:function(b,c){b=c.response;R(yh,new rh(a,b.id,b.channel_info));b.show_feed_privacy_dialog&&Rb("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);b.actions&&ck(b.actions)},
va:function(){R(xh,e)}})}
function uk(a,b,c,d,e){var f=new T(a);R(Bh,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=G("PLAYBACK_ID"))&&(d.plid=a);(a=G("EVENT_ID"))&&(d.ei=a);c&&Fk(c,d);$c("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",wa:g,D:d,F:function(a,b){a=b.response;R(Dh,f);a.actions&&ck(a.actions)},
va:function(){R(Ch,f)}})}
function Ak(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new ph(a,b,c);$c("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",D:d,onError:function(){R(Jh,e)},
F:function(){R(Ih,e)}})}}
function wk(a){if(a.length){var b=Ha(a,0,40);R("subscription-batch-subscribe-loading");Ek(b,wh);var c={};c.a=b.join(",");var d=function(){R("subscription-batch-subscribe-loaded");Ek(b,xh)};
$c("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",D:c,F:function(c,f){d();c=f.response;f=c.id;if(da(f)&&f.length==b.length){var e=c.channel_info_map;z(f,function(a,c){c=b[c];R(yh,new rh(c,a,e[c]))});
a.length?wk(a):R("subscription-batch-subscribe-finished")}},
onError:function(){d();R("subscription-batch-subscribe-failure")}})}}
function yk(a){if(a.length){var b=Ha(a,0,40);R("subscription-batch-unsubscribe-loading");Ek(b,Bh);var c={};c.c=b.join(",");var d=function(){R("subscription-batch-unsubscribe-loaded");Ek(b,Ch)};
$c("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",D:c,F:function(){d();Ek(b,Dh);a.length&&yk(a)},
onError:function(){d()}})}}
function Ek(a,b){z(a,function(a){R(b,new T(a))})}
function Fk(a,b){a=Sc(a);for(var c in a)b[c]=a[c]}
;var Gk=null,Hk=null,Ik=null,Jk=!1;function Kk(a){var b=a.csn;a=a.root_ve_type;b&&a&&(F("client-screen-nonce",b),F("ROOT_VE_TYPE",a))}
function Lk(a){var b=Ke();b&&Ie(He(),{click:{csn:b,visualElement:ye(new xe(a))}},void 0)}
function Mk(a){var b=Ke();if(b){for(var c=[],d=0;d<a.length;d++)c.push(new xe(a[d]));Ge(b,c)}}
;q("yt.setConfig",F,void 0);q("yt.setMsg",function(a){Eb(Db,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||G("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=fd)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,h,l=!1;try{g=a.lineNumber||a.fc||"Not available"}catch(za){g="Not available",l=!0}try{h=a.fileName||a.filename||a.sourceURL||
n.$googDebugFname||f}catch(za){h="Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:h,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(ed[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={wa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},D:{url:G("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.D.stack=e);for(var m in c)b.D["client."+m]=c[m];if(m=G("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var w in m)b.D[w]=m[w];$c("/error_204",b);ed[a.message]=!0;fd++}}},void 0);
q("writeEmbed",function(){var a=G("PLAYER_CONFIG",void 0);if("1"!=a.privembed)try{var b;try{var c=r("yt.www.ads.biscotti.getId_"),d;if(c)d=c();else{if(!Sj){var e=v(Wj,n,2);Sj=Nj().then(Tj,e)}d=Sj}b=d}catch(f){b=Lf(f)}Mf(b,null,Xj,void 0)}catch(f){Gb(f)}"gvn-experiment"==a.args.ps&&(document.body.style.backgroundColor="transparent");d=document.referrer;b=G("POST_MESSAGE_ORIGIN");c=!1;$d("legacy_cast2")&&u(d)&&u(b)&&-1<d.indexOf(b)&&fg(b)&&fg(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=
d);G("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&lj(a.args);Gk=d=ch("player",a);d.addEventListener("onScreenChanged",Kk);d.addEventListener("onLogServerVeClicked",Lk);d.addEventListener("onLogServerVesShown",Mk);e=G("POST_MESSAGE_ID","player");G("ENABLE_JS_API")?Ik=new Gj(d):G("ENABLE_POST_API")&&u(e)&&u(b)&&(Hk=new Jj(window.parent,e,b),Ik=new yj(d,Hk.g));$d("legacy_cast2")&&(Jk=c&&!G("ENABLE_CAST_API"))&&(a.args.disableCast="1");G("BG_P")&&(G("BG_I")||G("BG_IU"))&&cc();jd();
mj=d;mj.addEventListener("SUBSCRIBE",pj);mj.addEventListener("UNSUBSCRIBE",sj);nj.push(S(yh,tj),S(Dh,uj))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&ig(a);return!0},void 0);
var Nk=Fb(function(){zg("ol");ok=!0;qk.push(S(vh,rk),S(Ah,tk));ok||qk.push(S(zh,rk),S(Eh,tk),S(th,vk),S(uh,xk),S(Hh,zk),S(kk,Bk),S(mk,Dk),S(jk,Ck));var a=Yj.getInstance(),b=1<window.devicePixelRatio;if(!!((bk("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=bk(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Z)b.push(e+"="+escape(Z[e]));Ne.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),Ok=Fb(function(){var a=
Gk;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();G("PL_ATT")&&(bc=null);for(var a=0,b=hd.length;a<b;a++){var c=hd[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):I(c)}}hd.length=0;a=Yb("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Tb(a),b.parentNode.removeChild(b);id=!1;F("DCLKSTAT",0);Qb(pk);pk.length=0;qg(qk);qk.length=0;ok=!1;mj&&(mj.removeEventListener("SUBSCRIBE",qj),mj.removeEventListener("UNSUBSCRIBE",sj));mj=null;qg(nj);nj.length=0;Ab(Ik,
Hk);if(a=Gk)a.removeEventListener("onScreenChanged",Kk),a.removeEventListener("onLogServerVeClicked",Lk),a.removeEventListener("onLogServerVesShown",Mk),a.destroy()});
window.addEventListener?(window.addEventListener("load",Nk),window.addEventListener("unload",Ok)):window.attachEvent&&(window.attachEvent("onload",Nk),window.attachEvent("onunload",Ok));var Pk=fi.getInstance(),Qk=V(Pk);Qk in ki||(Pk.register(),Pk.ja.push(Ob("yt-uix-init-"+Qk,Pk.init,Pk)),Pk.ja.push(Ob("yt-uix-dispose-"+Qk,Pk.dispose,Pk)),ki[Qk]=Pk);})();
