// FINAL
console.log('hi');


//THIS IS FOR THE DRIFT:
var u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function v(){v=function(){},u.Symbol||(u.Symbol=A)}var B=0;function A(t){return"jscomp_symbol_"+(t||"")+B++}!function(t){function i(n){if(e[n])return e[n].R;var o=e[n]={ia:n,ea:!1,R:{}};return t[n].call(o.R,o,o.R,i),o.ea=!0,o.R}var e={};i.u=t,i.h=e,i.c=function(t,e,n){i.g(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){v(),v(),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(v(),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})),Object.defineProperty(t,"__esModule",{value:!0})},i.m=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.aa)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.c(n,o,function(i){return t[i]}.bind(null,o));return n},i.i=function(t){var e=t&&t.aa?function(){return t.default}:function(){return t};return i.c(e,"a",e),e},i.g=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.o="",i(i.w=0)}([function(t,i,e){function n(t,i){if(i=void 0===i?{}:i,this.h=t,this.g=this.g.bind(this),!a(this.h))throw new TypeError("`new Drift` requires a DOM element as its first argument.");t=i.namespace||null;var e=i.showWhitespaceAtEdges||!1,n=i.containInline||!1,o=i.inlineOffsetX||0,s=i.inlineOffsetY||0,h=i.inlineContainer||document.body,r=i.sourceAttribute||"data-zoom",d=i.zoomFactor||3,f=void 0===i.paneContainer?document.body:i.paneContainer,u=i.inlinePane||375,p=!("handleTouch"in i)||!!i.handleTouch,l=i.onShow||null,c=i.onHide||null,b=!("injectBaseStyles"in i)||!!i.injectBaseStyles,m=i.hoverDelay||0,v=i.touchDelay||0,y=i.hoverBoundingBox||!1,g=i.touchBoundingBox||!1;if(i=i.boundingBoxContainer||document.body,!0!==u&&!a(f))throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");if(!a(h))throw new TypeError("`inlineContainer` must be a DOM element");this.a={j:t,N:e,H:n,J:o,K:s,v:h,O:r,f:d,fa:f,da:u,A:p,M:l,L:c,ca:b,C:m,F:v,B:y,D:g,G:i},this.a.ca&&!document.querySelector(".drift-base-styles")&&((i=document.createElement("style")).type="text/css",i.classList.add("drift-base-styles"),i.appendChild(document.createTextNode(".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}")),(t=document.head).insertBefore(i,t.firstChild)),this.w(),this.u()}function o(t){t=void 0===t?{}:t,this.h=this.h.bind(this),this.g=this.g.bind(this),this.m=this.m.bind(this),this.s=!1;var i=void 0===t.I?null:t.I,e=void 0===t.f?f():t.f,n=void 0===t.S?f():t.S,o=void 0===t.j?null:t.j,s=void 0===t.N?f():t.N,h=void 0===t.H?f():t.H;this.a={I:i,f:e,S:n,j:o,N:s,H:h,J:void 0===t.J?0:t.J,K:void 0===t.K?0:t.K,v:void 0===t.v?document.body:t.v},this.o=this.i("open"),this.X=this.i("opening"),this.u=this.i("closing"),this.w=this.i("inline"),this.W=this.i("loading"),this.ga()}function s(t){t=void 0===t?{}:t,this.m=this.m.bind(this),this.h=this.h.bind(this),this.g=this.g.bind(this),this.c=this.c.bind(this);var i=t;t=void 0===i.b?f():i.b;var e=void 0===i.l?f():i.l,n=void 0===i.O?f():i.O,o=void 0===i.A?f():i.A,s=void 0===i.M?null:i.M,a=void 0===i.L?null:i.L,r=void 0===i.C?0:i.C,d=void 0===i.F?0:i.F,u=void 0===i.B?f():i.B,p=void 0===i.D?f():i.D,l=void 0===i.j?null:i.j,c=void 0===i.f?f():i.f;i=void 0===i.G?f():i.G,this.a={b:t,l:e,O:n,A:o,M:s,L:a,C:r,F:d,B:u,D:p,j:l,f:c,G:i},(this.a.B||this.a.D)&&(this.o=new h({j:this.a.j,f:this.a.f,P:this.a.G})),this.enabled=!0,this.w()}function h(t){this.s=!1;var i=void 0===t.j?null:t.j,e=void 0===t.f?f():t.f;t=void 0===t.P?f():t.P,this.a={j:i,f:e,P:t},this.c=this.g("open"),this.h()}function a(t){return p?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function r(t,i){i.forEach(function(i){t.classList.add(i)})}function d(t,i){i.forEach(function(i){t.classList.remove(i)})}function f(){throw Error("Missing parameter")}e.r(i);var p="object"==typeof HTMLElement;h.prototype.g=function(t){var i=["drift-"+t],e=this.a.j;return e&&i.push(e+"-"+t),i},h.prototype.h=function(){this.b=document.createElement("div"),r(this.b,this.g("bounding-box"))},h.prototype.show=function(t,i){this.s=!0,this.a.P.appendChild(this.b);var e=this.b.style;e.width=Math.round(t/this.a.f)+"px",e.height=Math.round(i/this.a.f)+"px",r(this.b,this.c)},h.prototype.U=function(){this.s&&this.a.P.removeChild(this.b),this.s=!1,d(this.b,this.c)},h.prototype.setPosition=function(t,i,e){var n=window.pageXOffset,o=window.pageYOffset;t=e.left+t*e.width-this.b.clientWidth/2+n,i=e.top+i*e.height-this.b.clientHeight/2+o,t<e.left+n?t=e.left+n:t+this.b.clientWidth>e.left+e.width+n&&(t=e.left+e.width-this.b.clientWidth+n),i<e.top+o?i=e.top+o:i+this.b.clientHeight>e.top+e.height+o&&(i=e.top+e.height-this.b.clientHeight+o),this.b.style.left=t+"px",this.b.style.top=i+"px"},s.prototype.w=function(){this.a.b.addEventListener("mouseenter",this.g,!1),this.a.b.addEventListener("mouseleave",this.h,!1),this.a.b.addEventListener("mousemove",this.c,!1),this.a.A&&(this.a.b.addEventListener("touchstart",this.g,!1),this.a.b.addEventListener("touchend",this.h,!1),this.a.b.addEventListener("touchmove",this.c,!1))},s.prototype.ba=function(){this.a.b.removeEventListener("mouseenter",this.g,!1),this.a.b.removeEventListener("mouseleave",this.h,!1),this.a.b.removeEventListener("mousemove",this.c,!1),this.a.A&&(this.a.b.removeEventListener("touchstart",this.g,!1),this.a.b.removeEventListener("touchend",this.h,!1),this.a.b.removeEventListener("touchmove",this.c,!1))},s.prototype.g=function(t){t.preventDefault(),this.i=t,"mouseenter"==t.type&&this.a.C?this.u=setTimeout(this.m,this.a.C):this.a.F?this.u=setTimeout(this.m,this.a.F):this.m()},s.prototype.m=function(){if(this.enabled){var t=this.a.M;t&&"function"==typeof t&&t(),this.a.l.show(this.a.b.getAttribute(this.a.O),this.a.b.clientWidth,this.a.b.clientHeight),this.i&&((t=this.i.touches)&&this.a.D||!t&&this.a.B)&&this.o.show(this.a.l.b.clientWidth,this.a.l.b.clientHeight),this.c()}},s.prototype.h=function(t){t.preventDefault(),this.i=null,this.u&&clearTimeout(this.u),this.o&&this.o.U(),(t=this.a.L)&&"function"==typeof t&&t(),this.a.l.U()},s.prototype.c=function(t){if(t)t.preventDefault(),this.i=t;else{if(!this.i)return;t=this.i}if(t.touches)var i=(t=t.touches[0]).clientX,e=t.clientY;else i=t.clientX,e=t.clientY;i=(i-(t=this.a.b.getBoundingClientRect()).left)/this.a.b.clientWidth,e=(e-t.top)/this.a.b.clientHeight,this.o&&this.o.setPosition(i,e,t),this.a.l.setPosition(i,e,t)},u.Object.defineProperties(s.prototype,{s:{configurable:!0,enumerable:!0,get:function(){return this.a.l.s}}}),t=document.createElement("div").style;var l="undefined"!=typeof document&&("animation"in t||"webkitAnimation"in t);o.prototype.i=function(t){var i=["drift-"+t],e=this.a.j;return e&&i.push(e+"-"+t),i},o.prototype.ga=function(){this.b=document.createElement("div"),r(this.b,this.i("zoom-pane"));var t=document.createElement("div");r(t,this.i("zoom-pane-loader")),this.b.appendChild(t),this.c=document.createElement("img"),this.b.appendChild(this.c)},o.prototype.V=function(t){this.c.setAttribute("src",t)},o.prototype.Y=function(t,i){this.c.style.width=t*this.a.f+"px",this.c.style.height=i*this.a.f+"px"},o.prototype.setPosition=function(t,i,e){var n=this.c.offsetWidth,o=this.c.offsetHeight,s=this.b.offsetWidth,h=this.b.offsetHeight,a=s/2-n*t,r=h/2-o*i,d=s-n,f=h-o,u=0<d,p=0<f;o=u?d/2:0,n=p?f/2:0,d=u?d/2:d,f=p?f/2:f,this.b.parentElement===this.a.v&&(p=window.pageXOffset,u=window.pageYOffset,t=e.left+t*e.width-s/2+this.a.J+p,i=e.top+i*e.height-h/2+this.a.K+u,this.a.H&&(t<e.left+p?t=e.left+p:t+s>e.left+e.width+p&&(t=e.left+e.width-s+p),i<e.top+u?i=e.top+u:i+h>e.top+e.height+u&&(i=e.top+e.height-h+u)),this.b.style.left=t+"px",this.b.style.top=i+"px"),this.a.N||(a>o?a=o:a<d&&(a=d),r>n?r=n:r<f&&(r=f)),this.c.style.transform="translate("+a+"px, "+r+"px)",this.c.style.webkitTransform="translate("+a+"px, "+r+"px)"},o.prototype.T=function(){this.b.removeEventListener("animationend",this.h,!1),this.b.removeEventListener("animationend",this.g,!1),this.b.removeEventListener("webkitAnimationEnd",this.h,!1),this.b.removeEventListener("webkitAnimationEnd",this.g,!1),d(this.b,this.o),d(this.b,this.u)},o.prototype.show=function(t,i,e){this.T(),this.s=!0,r(this.b,this.o),r(this.b,this.W),this.c.addEventListener("load",this.m,!1),this.V(t),this.Y(i,e),this.ha?this.$():this.Z(),l&&(this.b.addEventListener("animationend",this.h,!1),this.b.addEventListener("webkitAnimationEnd",this.h,!1),r(this.b,this.X))},o.prototype.$=function(){this.a.v.appendChild(this.b),r(this.b,this.w)},o.prototype.Z=function(){this.a.I.appendChild(this.b)},o.prototype.U=function(){this.T(),this.s=!1,l?(this.b.addEventListener("animationend",this.g,!1),this.b.addEventListener("webkitAnimationEnd",this.g,!1),r(this.b,this.u)):(d(this.b,this.o),d(this.b,this.w))},o.prototype.h=function(){this.b.removeEventListener("animationend",this.h,!1),this.b.removeEventListener("webkitAnimationEnd",this.h,!1),d(this.b,this.X)},o.prototype.g=function(){this.b.removeEventListener("animationend",this.g,!1),this.b.removeEventListener("webkitAnimationEnd",this.g,!1),d(this.b,this.o),d(this.b,this.u),d(this.b,this.w),this.b.setAttribute("style",""),this.b.parentElement===this.a.I?this.a.I.removeChild(this.b):this.b.parentElement===this.a.v&&this.a.v.removeChild(this.b)},o.prototype.m=function(){this.c.removeEventListener("load",this.m,!1),d(this.b,this.W)},u.Object.defineProperties(o.prototype,{ha:{configurable:!0,enumerable:!0,get:function(){var t=this.a.S;return!0===t||"number"==typeof t&&window.innerWidth<=t}}}),n.prototype.w=function(){this.l=new o({I:this.a.fa,f:this.a.f,N:this.a.N,H:this.a.H,S:this.a.da,j:this.a.j,J:this.a.J,K:this.a.K,v:this.a.v})},n.prototype.u=function(){this.c=new s({b:this.h,l:this.l,A:this.a.A,M:this.a.M,L:this.a.L,O:this.a.O,C:this.a.C,F:this.a.F,B:this.a.B,D:this.a.D,j:this.a.j,f:this.a.f,G:this.a.G})},n.prototype.T=function(t){this.l.V(t)},n.prototype.i=function(){this.c.enabled=!1},n.prototype.m=function(){this.c.enabled=!0},n.prototype.g=function(){this.c.ba()},u.Object.defineProperties(n.prototype,{s:{configurable:!0,enumerable:!0,get:function(){return this.l.s}},f:{configurable:!0,enumerable:!0,get:function(){return this.a.f},set:function(t){this.a.f=t,this.l.a.f=t,this.c.a.f=t,this.o.a.f=t}}}),Object.defineProperty(n.prototype,"isShowing",{get:function(){return this.s}}),Object.defineProperty(n.prototype,"zoomFactor",{get:function(){return this.f},set:function(t){this.f=t}}),n.prototype.setZoomImageURL=n.prototype.T,n.prototype.disable=n.prototype.i,n.prototype.enable=n.prototype.m,n.prototype.destroy=n.prototype.g,window.Drift=n}]);
//# sourceMappingURL=Drift.min.js.map

var descVar = document.getElementsByClassName('m')[0];
var addnVar = document.getElementsByClassName('n')[0];
var descPar = descVar.getElementsByTagName('p')[0];
var addnPar = addnVar.getElementsByTagName('p')[0];
var desc = document.getElementsByClassName('BD')[0];
var addn = document.getElementsByClassName('AI')[0];

let jhanda1=1;
let jhanda2=0;

descVar.addEventListener('mouseover',ops);
descVar.addEventListener('mouseleave',xops);
addnVar.addEventListener('mouseover',oops);
addnVar.addEventListener('mouseleave',xoops);


descVar.addEventListener('click',xors);
addnVar.addEventListener('click',ors);



function ops()
{
if(jhanda1)
    {
    descPar.style.borderTop='2px solid #d9d9d9';
    descPar.style.borderBottom='2px solid #d9d9d9';
    }
else
    {
    descPar.style.borderTop='2px solid rgba(255,119,0,0.9)';
    descPar.style.borderBottom='2px solid rgba(255,119,0,0.9)';
    }
}

function xops()
{
descPar.style.borderTop='2px solid white';
descPar.style.borderBottom='2px solid white';
}

function oops()
{
if(jhanda2)
    {
    addnPar.style.borderTop='2px solid #d9d9d9';
    addnPar.style.borderBottom='2px solid #d9d9d9';
    }
else
    {
    addnPar.style.borderTop='2px solid rgba(255,119,0,0.9)';
    addnPar.style.borderBottom='2px solid rgba(255,119,0,0.9)';
    }
}

function xoops()
{
addnPar.style.borderTop='2px solid white';
addnPar.style.borderBottom='2px solid white';
}

function xors(e)
{
desc.style.display='block';
jhanda1=1;
jhanda2=0;
addn.style.display='none';
descVar.style.color='rgba(255,119,0,0.9)';
addnVar.style.color='black';
}

function ors(e)
{
jhanda1=0;
jhanda2=1;
desc.style.display='none';
addn.style.display='block';
addnVar.style.color='rgba(255,119,0,0.9)';
descVar.style.color='black';
}


var sizes = document.getElementsByClassName('product');
var sizesArr = Array.from(sizes);
sizesArr.forEach(nums=>nums.addEventListener('click',()=>{window.location.href='productdescription.html'}));
