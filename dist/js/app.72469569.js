(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],f=0,v=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&v.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"077e":function(t,e,n){t.exports=n.p+"img/cheque.7ef48009.svg"},"0f57":function(t,e,n){t.exports=n.p+"img/globalization.364891f6.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Simulator",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",[t._v("Konfidi Fintech Api")]),n("div",{staticStyle:{display:"none",width:"100%"},attrs:{id:"tabla"}},[n("div",{staticClass:"container-table"},[n("div",{staticClass:"bank"},[t._m(0),n("span",[t._v("Pago de:")]),n("h3",[t._v(t._s(t.amountFormat)+" USD")]),n("div",{staticClass:"amount"},[n("span",[t._v("Costo de:")]),n("h2",[t._v(t._s(t.valueBanc))])]),n("br"),n("span",[t._v("Tasas y tarifas:")]),t._m(1),t._m(2)]),n("div",{staticClass:"konfidi"},[n("h1",[t._v("Konfidi")]),n("span",[t._v("Pago de:")]),n("h3",[t._v(t._s(t.amountFormat)+" USD")]),n("div",{staticClass:"amountK"},[n("span",[t._v("Costo de:")]),n("h2",[t._v(t._s(t.konfidi))])]),n("br"),n("span",[t._v("Tasas y tarifas:")]),t._m(3),t._m(4)]),n("div",{staticClass:"bank"},[t._m(5),n("span",[t._v("Pago de:")]),n("h3",[t._v(t._s(t.amountFormat)+" USD")]),n("div",{staticClass:"amount"},[n("span",[t._v("Costo de:")]),n("h2",[t._v(t._s(t.valueDav))])]),n("br"),n("span",[t._v("Tasas y tarifas:")]),t._m(6),t._m(7)])]),t._m(8)]),n("div",{staticClass:"page-center",attrs:{id:"page-center"}},[t._m(9),n("form",{staticClass:"form-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",placeholder:"$0"},domProps:{value:t.amount},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.checkForm.apply(null,arguments)},input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("br")]),n("button",{staticClass:"btn-center",on:{click:t.checkForm}},[t._v("Calcular")])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bankBanc"},[n("h1",[t._v("Bancolombia")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("077e"),alt:""}}),a("h4",[t._v("Comisión: 32 USD")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("077e"),alt:""}}),a("h4",[t._v("TRM + 1.8%")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logoK"},[a("img",{attrs:{src:n("077e"),alt:""}}),a("h4",[t._v("Comisión: 0 USD")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logoK"},[a("img",{attrs:{src:n("077e"),alt:""}}),a("h4",[t._v("TRM")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bankBanc"},[n("h1",[t._v("Davivienda")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("077e"),alt:""}}),a("h4",[t._v("Comisión: 20 USD")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("077e"),alt:""}}),a("h4",[t._v("TRM + 1.9%")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticStyle:{width:"60%","padding-left":"20%"},attrs:{src:n("c9c4"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"title-center"},[a("img",{attrs:{src:n("7530"),alt:""}}),a("h3",[t._v("Sin comisiones")])]),a("div",{staticClass:"title-center"},[a("img",{staticStyle:{width:"45%","padding-left":"30%"},attrs:{src:n("0f57"),alt:""}}),a("h3",[t._v("Sin transferencias internacionales")])]),a("div",{staticClass:"title-center"},[a("img",{staticStyle:{width:"50%","padding-left":"20%"},attrs:{src:n("714f"),alt:""}}),a("h3",[t._v("Pagas lo que tengas que pagar!")])]),a("div",{staticClass:"title-center"},[a("img",{staticStyle:{width:"63%"},attrs:{src:n("7e0c"),alt:""}}),a("h3",[t._v("Sin fronteras")])])])}],c=n("c4b8"),l=n.n(c),u=new l.a,f={data:function(){return{amount:"",TRM:0,valueBanc:0,valueDav:0,comBanc:32,comDav:20,konfidi:0,amountFormat:0}},created:function(){var t=this;u.latest().then((function(e){console.log(e),t.TRM=e.valor,console.log(t.TRM)})).catch((function(t){return console.log(t)}))},methods:{checkForm:function(){console.log(this.TRM),document.getElementById("tabla").style.display="block",document.getElementById("page-center").style.display="none",console.log(this.amount);var t={style:"currency",currency:"USD"},e=new Intl.NumberFormat("en-US",t);console.log(e.format(this.amount)),this.amountFormat=e.format(this.amount);var n=1.018*this.TRM,a=1.019*this.TRM;console.log(a),this.valueBanc=e.format((parseInt(this.amount)+this.comBanc)*n),console.log(this.valueBanc),this.valueDav=e.format((parseInt(this.amount)+this.comDav)*a),console.log(this.valueDav),this.konfidi=e.format(this.amount*this.TRM),console.log(this.konfidi)}}},v=f,m=(n("e6a2"),n("2877")),d=Object(m["a"])(v,o,r,!1,null,null,null),p=d.exports,h={name:"App",components:{Simulator:p}},_=h,g=(n("034f"),Object(m["a"])(_,s,i,!1,null,null,null)),y=g.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(y)}}).$mount("#app")},"714f":function(t,e,n){t.exports=n.p+"img/pay.0f177b85.svg"},7530:function(t,e,n){t.exports=n.p+"img/money.397f57d8.svg"},"7e0c":function(t,e,n){t.exports=n.p+"img/mundo.30e1d16e.svg"},"85ec":function(t,e,n){},c9c4:function(t,e,n){t.exports=n.p+"img/Requisitos.539307c8.png"},e6a2:function(t,e,n){"use strict";n("fb04")},fb04:function(t,e,n){}});
//# sourceMappingURL=app.72469569.js.map