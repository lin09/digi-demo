!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return toString.call(e)},i={stringTag:a(""),objectTag:a({}),arrayTag:a([]),numberTag:a(1),functionTag:a(toString),undefinedTag:a(void 0),nullTag:a(null)},c=i.objectTag,u=i.arrayTag,l=function e(t){var n,r=a(t);if(r!==u&&r!==c)return t;for(var i in n=r===c?Object.assign({},t):o(t))n[i]=e(n[i]);return n},f=function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&!1===t(e[n],n))break},p=function(e,t){a(e)===u?function(e,t){for(var n=0;n<e.length&&!1!==t(e[n],n);n++);}(e,t):f(e,t)},d=function(e){return r(e)},s={tofObjectTag:d({})},v={},h=function(e,t,n){var r="is"+t[0].toUpperCase()+t.replace(/^.|Tag$/g,"");v[r]=function(t){return n(t)===e},Object.defineProperty(v[r],"name",{value:r})};f(i,function(e,t){return h(e,t,a)}),f(s,function(e,t){return h(e,t,d)});var m=v.isString,g=v.isObject,b=v.isTofObject,y=v.isFunction,$=v.isArray,N=v.isNumber,O=v.isUndefined,x=v.isNull,j=/[\u005b\u005d]/g,w=/\.{2,}/g,S=/^\.|\.$/g,P=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join(".").replace(j,".").replace(w,".").replace(S,"")},T=function(e){return e.replace(j,".").replace(w,".").replace(S,"").split(".")},_=function(e,t){m(t)&&(t=[t]);var n={};return p(t,function(t){e.hasOwnProperty(t)&&(n[t]=e[t])}),n},E=function(e,t,n){m(t)&&(t=T(t));var r=e,o=t.pop();p(t,function(e){O(r[e])&&(r[e]={}),r=r[e]}),r[o]=n},V=JSON.stringify({}),A=function(e){return!($(e)&&e.length>0)&&(!g(e)||V===JSON.stringify(e))},F=Object.freeze({cloneDeep:l,forEach:p,isString:m,isObject:g,isTofObject:b,isFunction:y,isArray:$,isNumber:N,isUndefined:O,isNull:x,pathJoin:P,pathSplit:T,pick:_,set:E,isEmpty:A}),I={};Object.defineProperty(I,"hasRouter",{value:!1,writable:!0});var U=function e(t,n){$(t)?e(t[0],t[1]):g(t)?("path"===t.property&&(I.hasRouter=!0),I[t.property]=t.handler,t.options&&n&&Object.assign(t.options,n)):(window.console.error("plugins Error: ",t),window.console.log("View document: https://digi1874.github.io/digi-doc/1.0.1/global.html#plugins"))},k=function(e){return p(e,function(e){return U(e)})},C={},D=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];C[e]||(C[e]=[],Object.defineProperties(C[e],{newVal:{writable:!0},oldVal:{writable:!0}})),t&&-1===C[e].indexOf(t)&&(C[e].push(t),n&&t(C[e].newVal,C[e].oldVal))},W={},J=function e(t){var n=[];return p(t,function(e){return $(e)?n.push(e):n.push([e])}),W[++e.id]=n,e.id};Object.defineProperty(J,"id",{value:0,writable:!0});var M=function(e){var t=W[e];return delete W[e],t},R=function(e,t){return W[e]=t},z=function e(t,n,r,o,a){a=P(a,n),D(a),Object.defineProperty(t,n,{configurable:!0,enumerable:!0,get:function(){return o[n]},set:function(r){var i=o[n];if(JSON.stringify(r)!==JSON.stringify(i))if(function(e,t,n){t=l(t),n=l(n),C[e].newVal=t,C[e].oldVal=n,p(C[e],function(e){return e(t,n)})}(a,r,i),g(r)){o[n]={},g(i)||(i={});var c={};p(r,function(e,t){return c[t]=i[t]}),p(r,function(o,i){return e(t[n],i,r,c,a)})}else if($(r)){o[n]=[],$(i)||(i=[]);var u=[];p(r,function(e,t){return u[t]=i[t]}),p(r,function(o,i){return e(t[n],i,r,u,a)})}else o[n]=r}}),t[n]=l(r[n])},B=function e(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).watch,r=++e.id,o={};return p(t,function(e,n){return z(o,n,t,{},r)}),p(n,function(e,t){return D(P(r,t),e,!1)}),Object.defineProperty(o,"$tp",{value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(0===n.length)return"{{".concat(e,"}}");var o=J(n);return"{{".concat(e,"|").concat(o,"}}")}.apply(void 0,[P(r,e)].concat(n))}}),o};Object.defineProperty(B,"id",{value:0,writable:!0});var q=/{{(([\s\S]+?)(?:\|([0-9]+))?)}}/g,G=function(e,t,n){var r=e;p(t,function(e){p(e.tp,function(t){var n,a=e.val;t.filterId&&p((n=t.filterId,W[n]),function(e){var t=(e=o(e))[0];e[0]=a,a=t.apply(void 0,o(e))});var i=a;b(i)?i=JSON.stringify(i):(O(i)||x(i))&&(i=""),(r=r.replace(t.RE,i))===i+""&&(r=a)})}),n(r)},H=function(e,t,n,r,o){var a={},i=[],c={};p(r,function(e,c){a[c]=function(a){e.val=a,G(n,r,function(e){return o(e,t)})},p(e.tp,function(e){return e.filterId&&i.push(e.filterId)})});var u=e.$removeWatch;e.$removeWatch=function(){p(a,function(e,t){return r=e,void(-1!==(o=C[n=t].indexOf(r))&&C[n].splice(o,1));var n,r,o}),u&&u()};var l=e.$addWatch;e.$addWatch=function(){p(a,function(e,t){return D(t,e)}),l&&l()};var f=e.$removeFilter;e.$removeFilter=function(){p(i,function(e){return c[e]=M(e)||c[e]}),f&&f()};var d=e.$restoreFilter;e.$restoreFilter=function(){p(c,function(e,t){return R(t,e)}),d&&d()}},K=function e(t,n,r,o){if(g(r)||$(r))p(r,function(r,a){return e(t,P(n,a),r,o)});else{o(r,n);var a={},i="";do{if(null!==(i=q.exec(r))){var c=i[1],u=i[2];a[u]||(a[u]={val:"",tp:{}}),a[u].tp[c]||(a[u].tp[c]={RE:RegExp(i[0].replace("|","\\|"),"g"),filterId:i[3]})}}while(null!==i);!A(a)&&H(t,n,r,a,o)}},L=function e(t){t.$isUpdate&&(t.$removeWatch&&t.$removeWatch(),t.$removeFilter&&t.$removeFilter(),p(t.childNodes,function(t){return e(t)}),t.$isUpdate=!1)},Q=function e(t){!t.$isUpdate&&t.parentNode&&t.parentNode.$isUpdate&&(t.$isUpdate=!0,t.$restoreFilter&&t.$restoreFilter(),t.$addWatch&&t.$addWatch(),p(t.childNodes,function(t){return e(t)}))},X=function(e){var t=document.createTextNode(e);K(t,"nodeValue",e,function(e){return t.nodeValue=e});var n=t.remove;return t.remove=function(){n.call(t),L(t)},t.$update=function(){return Q(t)},t},Y=/^text[0-9]*$/,Z=/^child[0-9]*$/,ee=function e(t){if((m(t)||O(t))&&(t={tagName:t}),!g(t))return window.console.error("createElement Error: ",t),void window.console.log("View document: https://digi1874.github.io/digi-doc/1.0.1/global.html#digi");var n=document.createElement(t.tagName||"div");delete(t=l(t)).tagName,p(t,function(t,r){if(Z.test(r))if($(t))p(t,function(t){var r=e(t);r&&n.appendChild(r)});else{var o=e(t);o&&n.appendChild(o)}else if(Y.test(r)){var a=X(t);a&&n.appendChild(a)}else K(n,r,t,function(e,o){I.hasOwnProperty(r)?(t=function(e,t,n,r){return b(e)?(E(e,n.replace(t+".",""),r),e):r}(t,r,o,e),I[r](n,t,o,e)):E(n,o,e)})});var r=n.remove;return n.remove=function(){L(n),r.call(n)},n.$update=function(){return Q(n)},n},te=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.el;if($(t))p(t,function(e){var t=ee(e);t&&n.appendChild(t)});else{var r=ee(t);r&&n.appendChild(r)}};Object.defineProperties(te,{el:{value:document.getElementById("digi")||document.body},createElement:{value:ee},createTextNode:{value:X},utils:{value:F},createData:{value:B},plugins:{value:k}}),te.el.$isUpdate=!0,document.body.$isUpdate=!0;var ne=document.appendChild;document.body.__proto__.__proto__.appendChild=function(e){ne.call(this,e),e.$update&&e.$update()},t.default=te,t.createElement=ee,t.createTextNode=X,t.createData=B,t.plugins=k,t.cloneDeep=l,t.forEach=p,t.isString=m,t.isObject=g,t.isTofObject=b,t.isFunction=y,t.isArray=$,t.isNumber=N,t.isUndefined=O,t.isNull=x,t.pathJoin=P,t.pathSplit=T,t.pick=_,t.set=E,t.isEmpty=A},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={},o=0,a=toString.call([]);Object.defineProperties(r,{property:{value:"ref"},handler:{value:function(e,t){r[t]?(toString.call(r[t])!==a&&(r[t]=[r[t]]),r[t].push(e)):r[t]=e,e.oldRemove=e.remove,e.remove=function(){toString.call(r[t])!==a?delete r[t]:(r[t].splice(r[t].indexOf(e),1),0===r[t].length&&delete r[t]),e.oldRemove()}}},allotId:{value:function(){return o++}}});var i=r.allotId;t.allotId=i,t.default=r},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0});var a=toString.call([]),i=function(e){var t=[];for(var n in e){if(e.hasOwnProperty(n))e[n]&&t.push(n)}return t},c=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,c;return t=e,(n=[{key:"handler",value:function(e,t){if("object"!==r(t))e.className=t;else{var n=[];n=toString.call(t)===a?[].concat(n).concat(function(e){for(var t=[],n=0;n<e.length;n++){var o=e[n];"object"!==r(o)?t.push(o):toString.call(o)===a?o[1]&&t.push(o[0]):t=[].concat(t).concat(i(o))}return t}(t)):[].concat(n).concat(i(t)),e.className=n.join(" ")}}},{key:"property",get:function(){return"className"}}])&&o(t.prototype,n),c&&o(t,c),e}());t.default=c},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(2),u=n.n(c);const l=Object(r.createData)({newVal:"",oldVal:123}),f=Object(r.createData)({a:123},{watch:{a:(e,t)=>{l.newVal=e,l.oldVal=t}}});var p=[{tagName:"h3",text:"绑定数据"},{text:f.$tp("a")},{text:"单向绑定：",child:{tagName:"input",value:f.a,oninput(){f.a=this.value}}},{text:"双向绑定：",child:{tagName:"input",value:f.$tp("a"),oninput(){f.a=this.value}}},{text:`新值：${l.$tp("newVal")}，旧值：${l.$tp("oldVal")}`},{child:[{tagName:"button",text:"添加显示",onclick(){o()({text:"点击删除："+f.$tp("a"),onclick(e){e.stopPropagation(),this.remove()}},this.parentNode)}}]}];const d=Object(r.createData)({a:"2019-01-01"});var s=[{tagName:"h3",text:"过滤器"},{tagName:"input",type:"date",value:d.a,oninput(){d.a=this.value}},{text:d.$tp("a",e=>e+" 0:00:",e=>e+"00")},{text:d.$tp("a",[(e,t,n,r)=>e.replace("-",t).replace("-",n)+r,"年","月","日"])}];const v=Object(r.createData)({select:""});var h=[{tagName:"h3",text:"选择"},{tagName:"select",onchange(){v.select=this.value},child:[{tagName:"option",value:"",text:"选择"},{tagName:"option",value:1,text:"选择1"},{tagName:"option",value:2,text:"选择2"}]},{text:"选择了："+v.$tp("select")}];const m=Object(r.createData)({color:{r:0,g:0,b:0,a:1}});var g=[{tagName:"h3",text:"颜色"},{style:{width:"200px",height:"100px",backgroundColor:`rgba(${m.$tp("color.r")}, ${m.$tp("color.g")}, ${m.$tp("color.b")}, ${m.$tp("color.a")})`}},{text:"r: ",child:{tagName:"input",type:"number",min:0,max:255,value:m.$tp("color.r"),oninput(){m.color.r=this.value}}},{text:"g: ",child:{tagName:"input",type:"number",min:0,max:255,value:m.$tp("color.g"),oninput(){m.color.g=this.value}}},{text:"b: ",child:{tagName:"input",type:"number",min:0,max:255,value:m.$tp("color.b"),oninput(){m.color.b=this.value}}},{text:"a: ",child:{tagName:"input",type:"number",min:0,max:1,step:.01,value:m.$tp("color.a"),oninput(){m.color.a=this.value}}}];const b=Object(a.allotId)();var y=[{tagName:"h3",text:"ref标记元素"},{tagName:"input",oninput(){i.a[b].innerText="输入内容："+this.value}},{ref:b,innerText:"输入内容："}];const $=Object(r.createData)({hide:!1});var N=[{tagName:"h3",text:"className"},{className:"red",text:"字符串className: 'red'"},{text:`className: { hide: ${$.$tp("hide")} }`},{tagName:"button",text:"点击"+$.$tp("hide",e=>e?"show":"hide"),onclick:()=>$.hide=!$.hide},{className:{hide:$.$tp("hide")},text:`对象值className: { hide: ${$.$tp("hide")} }`},{className:[{hide:$.$tp("hide")},"red"],text:`数组+对象值className: [{ hide: ${$.$tp("hide")} }, 'red']`},{className:["red",["hide",$.$tp("hide")]],text:`数组+数组值className: ['red', ['hide', ${$.$tp("hide")}]]`}];o.a.plugins([i.a,u.a]),o()([...p,"hr",...s,"hr",...h,"hr",...g,"hr",...y,"hr",...N,"hr"])}]);