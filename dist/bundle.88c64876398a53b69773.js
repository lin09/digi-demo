!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return toString.call(e)},o={stringTag:i(""),objectTag:i({}),arrayTag:i([]),numberTag:i(1),functionTag:i(toString),undefinedTag:i(void 0),nullTag:i(null)},c=o.objectTag,l=o.arrayTag,u=function e(t){var n,r=i(t);if(r!==l&&r!==c)return t;for(var o in n=r===c?Object.assign({},t):a(t))n[o]=e(n[o]);return n},s=function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&!1===t(e[n],n))break},f=function(e,t){i(e)===l?function(e,t){for(var n=0;n<e.length&&!1!==t(e[n],n);n++);}(e,t):s(e,t)},p=function(e){return r(e)},d={tofObjectTag:p({})},h={},v=function(e,t,n){var r="is"+t[0].toUpperCase()+t.replace(/^.|Tag$/g,"");h[r]=function(t){return n(t)===e},Object.defineProperty(h[r],"name",{value:r})};s(o,function(e,t){return v(e,t,i)}),s(d,function(e,t){return v(e,t,p)});var g=h.isString,m=h.isObject,y=h.isTofObject,b=h.isFunction,x=h.isArray,w=h.isNumber,$=h.isUndefined,N=h.isNull,O=/[\u005b\u005d]/g,j=/\.{2,}/g,S=/^\.|\.$/g,E=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join(".").replace(O,".").replace(j,".").replace(S,"")},P=function(e){return e.replace(O,".").replace(j,".").replace(S,"").split(".")},T=function(e,t){g(t)&&(t=[t]);var n={};return f(t,function(t){e.hasOwnProperty(t)&&(n[t]=e[t])}),n},D=function(e,t,n){g(t)&&(t=P(t));var r=e,a=t.pop();f(t,function(e){$(r[e])&&(r[e]={}),r=r[e]}),r[a]=n},V=JSON.stringify({}),A=function(e){return!(x(e)&&e.length>0)&&(!m(e)||V===JSON.stringify(e))},k=Object.freeze({cloneDeep:u,forEach:f,isString:g,isObject:m,isTofObject:y,isFunction:b,isArray:x,isNumber:w,isUndefined:$,isNull:N,pathJoin:E,pathSplit:P,pick:T,set:D,isEmpty:A}),_={},U=function e(t,n){x(t)?e(t[0],t[1]):m(t)?(_[t.property]=t.handler,t.options&&n&&Object.assign(t.options,n)):(window.console.error("plugins Error: ",t),window.console.log("View document: https://digi1874.github.io/digi-doc/1.0.1/global.html#plugins"))},F=function(e){return f(e,function(e){return U(e)})},I={},R=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];I[e]||(I[e]=[],Object.defineProperties(I[e],{newVal:{writable:!0},oldVal:{writable:!0}})),t&&-1===I[e].indexOf(t)&&(I[e].push(t),n&&t(I[e].newVal,I[e].oldVal))},C={},M=function e(t){var n=[];return f(t,function(e){return x(e)?n.push(e):n.push([e])}),C[++e.id]=n,e.id};Object.defineProperty(M,"id",{value:0,writable:!0});var W=function(e){var t=C[e];return delete C[e],t},J=function(e,t){return C[e]=t},L=function e(t,n){var r={get:function(e,t){return e[t]},set:function(t,r,a){var i=t[r];if(JSON.stringify(a)===JSON.stringify(i))return!0;var o=E(n,r);return function e(t,n,r){!I[t]&&R(t),n=u(n),r=u(r),I[t].newVal=n,I[t].oldVal=r,f(I[t],function(e){return e(n,r)}),y(r)&&toString.call(n)!==toString.call(r)&&f(r,function(n,r){return e(E(t,r),void 0,n)})}(o,a,i),m(a)?(m(i)||(t[r]=e({},o)),f(a,function(e,n){return t[r][n]=e})):x(a)?(x(i)||(t[r]=e([],o)),f(a,function(e,n){return t[r][n]=e})):t[r]=a,!0}};return new Proxy(t,r)},K=function e(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).watch,r=++e.id,a=L({},r);return f(t,function(e,t){return a[t]=e}),f(n,function(e,t){return R(E(r,t),e,!1)}),Object.defineProperty(a,"$tp",{value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(0===n.length)return"{{".concat(e,"}}");var a=M(n);return"{{".concat(e,"|").concat(a,"}}")}.apply(void 0,[E(r,e)].concat(n))}}),a};Object.defineProperty(K,"id",{value:0,writable:!0});var z=function(e,t,n){var r=e;f(t,function(e){f(e.tp,function(t){var n,i=e.val;t.filterId&&f((n=t.filterId,C[n]),function(e){var t=(e=a(e))[0];e[0]=i,i=t.apply(void 0,a(e))});var o=i;y(o)?o=JSON.stringify(o):$(o)||N(o)?o="":Object.is(o,NaN)&&(o=0),r=r.replace(t.RE,o),""!==o&&r===o+""&&(r=i)})}),n(r)},B=function(e,t,n,r,a){var i={},o=[],c={};f(r,function(e,c){i[c]=function(i){e.val=i,z(n,r,function(e){return a(e,t)})},f(e.tp,function(e){return e.filterId&&o.push(e.filterId)})});var l=e.$removeWatch;e.$removeWatch=function(){f(i,function(e,t){return r=e,void(-1!==(a=I[n=t].indexOf(r))&&I[n].splice(a,1));var n,r,a}),l&&l()};var u=e.$addWatch;e.$addWatch=function(){f(i,function(e,t){return R(t,e)}),u&&u()};var s=e.$removeFilter;e.$removeFilter=function(){f(o,function(e){return c[e]=W(e)||c[e]}),s&&s()};var p=e.$restoreFilter;e.$restoreFilter=function(){f(c,function(e,t){return J(t,e)}),p&&p()}},q=/{{(([\s\S]+?)(?:\|([0-9]+))?)}}/g,G=function e(t,n,r,a){if(m(r)||x(r))f(r,function(r,i){return e(t,E(n,i),r,a)});else{a(r,n);var i={},o="";do{if(null!==(o=q.exec(r))){var c=o[1],l=o[2];i[l]||(i[l]={val:"",tp:{}}),i[l].tp[c]||(i[l].tp[c]={RE:RegExp(o[0].replace("|","\\|"),"g"),filterId:o[3]})}}while(null!==o);!A(i)&&B(t,n,r,i,a)}},H=function(e){var t=!1;Object.defineProperty(e,"$isUpdate",{get:function(){return t},set:function(n){n!==t&&(n&&e.parentNode&&e.parentNode.$isUpdate?(t=n,function(e){e.$restoreFilter&&e.$restoreFilter(),e.$addWatch&&e.$addWatch(),f(e.childNodes,function(e){return e.$isUpdate=!0})}(e)):n||(t=n,function(e){e.$removeWatch&&e.$removeWatch(),e.$removeFilter&&e.$removeFilter(),f(e.childNodes,function(e){return e.$isUpdate=!1})}(e)))}})},Q=function(e){var t=document.createTextNode(e);return G(t,"nodeValue",e,function(e){return t.nodeValue=e}),H(t),t},X=/^text[0-9]*$/,Y=/^child[0-9]*$/,Z=function e(t){if((g(t)||$(t))&&(t={tagName:t}),!m(t))return window.console.error("createElement Error: ",t),void window.console.log("View document: https://digi1874.github.io/digi-doc/1.0.1/global.html#digi");var n=document.createElement(t.tagName||"div");return delete(t=u(t)).tagName,f(t,function(t,r){if(Y.test(r))if(x(t))f(t,function(t){var r=e(t);r&&n.appendChild(r)});else{var a=e(t);a&&n.appendChild(a)}else if(X.test(r)){var i=Q(t);i&&n.appendChild(i)}else G(n,r,t,function(e,a){_.hasOwnProperty(r)?(t=function(e,t,n,r){return y(e)?(D(e,n.replace(t+".",""),r),e):r}(t,r,a,e),_[r](n,t,a,e)):D(n,a,e)})}),H(n),n},ee=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.el;if(x(t))f(t,function(e){var t=Z(e);t&&n.appendChild(t)});else{var r=Z(t);r&&n.appendChild(r)}};Object.defineProperties(ee,{el:{value:document.getElementById("digi")||document.body},createElement:{value:Z},createTextNode:{value:Q},utils:{value:{}},createData:{value:K},plugins:{value:F}}),f(k,function(e,t){Object.defineProperty(ee.utils,t,{value:e,enumerable:!0})}),ee.el.$isUpdate=!0,document.body.$isUpdate=!0,new MutationObserver(function(e){f(e,function(e){f(e.removedNodes,function(e){e.$isUpdate=!1}),f(e.addedNodes,function(e){e.$isUpdate=!0})})}).observe(document.body,{childList:!0,subtree:!0}),t.default=ee,t.createElement=Z,t.createTextNode=Q,t.createData=K,t.plugins=F,t.cloneDeep=u,t.forEach=f,t.isString=g,t.isObject=m,t.isTofObject=y,t.isFunction=b,t.isArray=x,t.isNumber=w,t.isUndefined=$,t.isNull=N,t.pathJoin=E,t.pathSplit=P,t.pick=T,t.set=D,t.isEmpty=A},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={},a=0,i=toString.call([]);Object.defineProperties(r,{property:{value:"ref"},handler:{value:function(e,t){r[t]?(toString.call(r[t])!==i&&(r[t]=[r[t]]),r[t].push(e)):r[t]=e,e.oldRemove=e.remove,e.remove=function(){toString.call(r[t])!==i?delete r[t]:(r[t].splice(r[t].indexOf(e),1),0===r[t].length&&delete r[t]),e.oldRemove()}}},allotId:{value:function(){return a++}}});var o=r.allotId;t.allotId=o,t.default=r},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0});var i=toString.call([]),o=function(e){var t=[];for(var n in e){if(e.hasOwnProperty(n))e[n]&&t.push(n)}return t},c=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,c;return t=e,(n=[{key:"handler",value:function(e,t){if("object"!==r(t))e.className=t;else{var n=[];n=toString.call(t)===i?[].concat(n).concat(function(e){for(var t=[],n=0;n<e.length;n++){var a=e[n];"object"!==r(a)?t.push(a):toString.call(a)===i?a[1]&&t.push(a[0]):t=[].concat(t).concat(o(a))}return t}(t)):[].concat(n).concat(o(t)),e.className=n.join(" ")}}},{key:"property",get:function(){return"className"}}])&&a(t.prototype,n),c&&a(t,c),e}());t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=toString.call([]),a=toString.call(/./),i=toString.call(""),o=toString.call({});var c=document.createElement("a"),l=/([^&=?]+)=([^&=]+)/g,u=["hash","host","hostname","href","origin","pathname","protocol","search"],s=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=toString.call(t);if(a===i)c.href=t;else{if(a!==o)throw new TypeError(t);t=Object.assign({},t),c.href=t.href||document.location.href,delete t.href,t.params&&(t.search?t.search+="&":t.search="?",Object.keys(t.params).forEach(function(e){t.search+="".concat(e,"=").concat(t.params[e],"&")}),t.search.replace(/[&]$/,"")),Object.keys(t).forEach(function(e){c[e]=t[e]})}c.pathname=c.pathname.replace(/\/$/,""),u.forEach(function(e){n[e]=c[e]});for(var s={},f=l.exec(c.search);null!==f;){var p=f[1],d=f[2],h=s[p];h?(toString.call(h)!==r&&(h=[h]),h.push(d)):h=d,s[p]=h,f=l.exec(c.search)}this.params=s,this.path=c.pathname+c.search+c.hash},f={},p={},d=/\u003a[^\u002f]+/g,h=new s(window.location.href),v=function(e){h=e;var t=!1;Object.keys(p).forEach(function(n){var r=p[n],a=r.RE.exec(e.pathname);if(a&&!t){for(var i=1;i<a.length;i++)e.params[r.paramKeys[i]]=a[i];!function(e,t){f[e]&&f[e].forEach(function(e){return e(t)})}(n,e),function(e){e.el.forEach(function(t,n){"none"===t.style.display&&(t.style.display=e.showElDisplay[n])})}(r),t=!0}else!function(e){e.el.forEach(function(t,n){"none"!==t.style.display&&(e.showElDisplay[n]=t.style.display,t.style.display="none")})}(r)})},g={};Object.defineProperties(g,{property:{value:"path"},handler:{value:function(e,t){var n,r=t;o===toString.call(t)&&(r=t.pathname,n=t.watch),toString.call(r)===a&&(r=r.source.replace(/(^\^)|(\$$)/g,"").replace(/\\([^\\])/g,"$1")),n&&function(e,t){f[e]=f[e]||[],-1===f[e].indexOf(t)&&f[e].push(t)}(r,n),function(e,t){var n=p[e];n||((n={el:[],showElDisplay:[]}).RE=new RegExp("^"+e.replace(d,"([^/]+)")+"$"),n.execArray=n.RE.exec(e),n.execArray&&n.execArray.length>1&&(n.paramKeys=[],n.execArray.forEach(function(e){return n.paramKeys.push(e.replace(/^:/,""))})),p[e]=n),-1===n.el.indexOf(t)&&(n.el.push(t),n.showElDisplay.push(t.style.display)),v(h)}(r,e);var i=e.remove;e.remove=function(){n&&function(e,t){var n=f[e].indexOf(t);-1!==n&&f[e].splice(n,1)}(r,n),function(e,t){var n=p[e].el,r=n.indexOf(t);-1!==r&&(n.splice(r,1),p[e].showElDisplay.splice(r,1))}(r,e),i.call(e)}}}}),window.addEventListener("popstate",function(){return v(new s(window.location.href))});var m=function(e){e=new s(e),v(e),window.history.pushState(e,"",e.href)},y=function(e){e=new s(e),v(e),window.history.pushState(e,"",e.href)},b=document.createElement("a").tagName,x={};Object.defineProperties(x,{property:{value:"to"},handler:{value:function(e,t){e.tagName===b&&(e.href=new s(t).href);var n=toString.call(t);e.addEventListener("click",function(e){e.preventDefault(),n===o&&t.replace?y(t):m(t)})}}});var w=[g,x];Object.defineProperties(w,{push:{value:m},replace:{value:y},Location:{value:s},currentLocation:{get:function(){return h}}}),t.default=w},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(1),o=n.n(i),c=n(2),l=n.n(c),u=n(3),s=n.n(u);const f=Object(r.createData)({newVal:"",oldVal:123}),p=Object(r.createData)({a:123},{watch:{a:(e,t)=>{f.newVal=e,f.oldVal=t}}});var d=[{tagName:"h3",text:"绑定数据"},{text:p.$tp("a")},{text:"单向绑定：",child:{tagName:"input",value:p.a,oninput(){p.a=this.value}}},{text:"双向绑定：",child:{tagName:"input",value:p.$tp("a"),oninput(){p.a=this.value}}},{text:`新值：${f.$tp("newVal")}，旧值：${f.$tp("oldVal")}`},{child:[{tagName:"button",text:"添加显示",onclick(){a()({text:"点击删除："+p.$tp("a"),onclick(e){e.stopPropagation(),this.remove()}},this.parentNode)}}]}];const h=Object(r.createData)({a:"2019-01-01"});var v=[{tagName:"h3",text:"过滤器"},{tagName:"input",type:"date",value:h.a,oninput(){h.a=this.value}},{text:h.$tp("a",e=>e+" 0:00:",e=>e+"00")},{text:h.$tp("a",[(e,t,n,r)=>e.replace("-",t).replace("-",n)+r,"年","月","日"])}];const g=Object(r.createData)({select:""});var m=[{tagName:"h3",text:"选择"},{tagName:"select",onchange(){g.select=this.value},child:[{tagName:"option",value:"",text:"选择"},{tagName:"option",value:1,text:"选择1"},{tagName:"option",value:2,text:"选择2"}]},{text:"选择了："+g.$tp("select")}];const y=Object(r.createData)({color:{r:0,g:0,b:0,a:1}});var b=[{tagName:"h3",text:"颜色"},{style:{width:"200px",height:"100px",backgroundColor:`rgba(${y.$tp("color.r")}, ${y.$tp("color.g")}, ${y.$tp("color.b")}, ${y.$tp("color.a")})`}},{text:"r: ",child:{tagName:"input",type:"number",min:0,max:255,value:y.$tp("color.r"),oninput(){y.color.r=this.value}}},{text:"g: ",child:{tagName:"input",type:"number",min:0,max:255,value:y.$tp("color.g"),oninput(){y.color.g=this.value}}},{text:"b: ",child:{tagName:"input",type:"number",min:0,max:255,value:y.$tp("color.b"),oninput(){y.color.b=this.value}}},{text:"a: ",child:{tagName:"input",type:"number",min:0,max:1,step:.01,value:y.$tp("color.a"),oninput(){y.color.a=this.value}}}];const x=Object(i.allotId)();var w=[{tagName:"h3",text:"ref标记元素"},{tagName:"input",oninput(){o.a[x].innerText="输入内容："+this.value}},{ref:x,innerText:"输入内容："}];const $=Object(r.createData)({hide:!1});var N=[{tagName:"h3",text:"className"},{className:"red",text:"字符串className: 'red'"},{text:`className: { hide: ${$.$tp("hide")} }`},{tagName:"button",text:"点击"+$.$tp("hide",e=>e?"show":"hide"),onclick:()=>$.hide=!$.hide},{className:{hide:$.$tp("hide")},text:`对象值className: { hide: ${$.$tp("hide")} }`},{className:[{hide:$.$tp("hide")},"red"],text:`数组+对象值className: [{ hide: ${$.$tp("hide")} }, 'red']`},{className:["red",["hide",$.$tp("hide")]],text:`数组+数组值className: ['red', ['hide', ${$.$tp("hide")}]]`}];a.a.plugins([o.a,l.a,...s.a]);const O=[{id:0,title:"标题1",content:"内容1"},{id:1,title:"标题2",content:"内容2"}],j={tagName:"ul",child:[]};Object(r.forEach)(O,e=>j.child.push({tagName:"li",child:{to:"/list/"+e.id,text:e.title,tagName:"a"}})),j.child.push({tagName:"li",child:{to:"/list/404",text:"已不存在的文章",tagName:"a"}});const S=Object(r.createData)();window.data=S,a()([{to:"/",text:"首页",tagName:"a",style:{marginRight:"20px"}},{to:"/list",text:"文章列表",tagName:"a",style:{marginRight:"20px"}},{path:"/list/:id",text:S.$tp("detail.title"),tagName:"span"},{path:"/",child:[...d,"hr",...v,"hr",...m,"hr",...b,"hr",...w,"hr",...N,"hr"]},{path:"/list",child:j},{path:{pathname:"/list/:id",watch:({params:e})=>S.detail=O[e.id]},tagName:"a",child:{text:S.$tp("detail.content",e=>e||"文章已被外星生物销毁了")}},{path:/.+/,text:"404"}])}]);