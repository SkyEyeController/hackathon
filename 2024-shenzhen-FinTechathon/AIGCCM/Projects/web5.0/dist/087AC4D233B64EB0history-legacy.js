/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function t(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0tab-pane-legacy.js","./087AC4D233B64EB0strings-legacy.js"],(function(n,a){"use strict";var r,u,o,i,l,s,c,v,f,m,p,d,y,g,b,h,O,S,x,w,j,k,I,C,q,P;return{setters:[function(e){r=e.an,u=e.u,o=e.a,i=e.l,l=e.C,s=e.X,c=e.aA,v=e.R,f=e.o,m=e.c,p=e.e,d=e.w,y=e.K,g=e.L,b=e.h,h=e.b,O=e.F,S=e.D,x=e.g,w=e.t,j=e.aB,k=e.ak,I=e.S,C=e.Y},function(e){q=e.E,P=e.a},null],execute:function(){var a=document.createElement("style");a.textContent='.contextmenu{width:100px;margin:0;border:1px solid #ccc;background:#fff;z-index:3000;position:absolute;list-style-type:none;padding:5px 0;border-radius:4px;font-size:14px;color:#333;box-shadow:2px 2px 3px rgba(0,0,0,.2)}.el-tabs__item .el-icon-close{color:initial!important}.el-tabs__item .dot{content:"";width:9px;height:9px;margin-right:8px;display:inline-block;border-radius:50%;transition:background-color .2s}.contextmenu li{margin:0;padding:7px 16px}.contextmenu li:hover{background:#f2f2f2;cursor:pointer}\n',document.head.appendChild(a);var E={class:"router-history"},N=["tab"];n("default",Object.assign({name:"HistoryComponent"},{__name:"history",setup:function(n){var a=r(),J=u(),A=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},D=o([]),_=o(""),B=o(!1),V=i(),T=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},L=o(0),R=o(0),z=o(!1),K=o(!1),X=o(""),Y=l((function(){return V.userInfo.authority.defaultRouter})),F=function(){D.value=[{name:Y.value,meta:{title:"首页"},query:{},params:{}}],J.push({name:Y.value}),B.value=!1,sessionStorage.setItem("historys",JSON.stringify(D.value))},H=function(){var e,t=D.value.findIndex((function(t){return A(t)===X.value&&(e=t),A(t)===X.value})),n=D.value.findIndex((function(e){return A(e)===_.value}));D.value.splice(0,t),t>n&&J.push(e),sessionStorage.setItem("historys",JSON.stringify(D.value))},U=function(){var e,t=D.value.findIndex((function(t){return A(t)===X.value&&(e=t),A(t)===X.value})),n=D.value.findIndex((function(e){return A(e)===_.value}));D.value.splice(t+1,D.value.length),t<n&&J.push(e),sessionStorage.setItem("historys",JSON.stringify(D.value))},$=function(){var e;D.value=D.value.filter((function(t){return A(t)===X.value&&(e=t),A(t)===X.value})),J.push(e),sessionStorage.setItem("historys",JSON.stringify(D.value))},G=function(n){if(!D.value.some((function(e){return function(e,t){if(e.name!==t.name)return!1;if(Object.keys(e.query).length!==Object.keys(t.query).length||Object.keys(e.params).length!==Object.keys(t.params).length)return!1;for(var n in e.query)if(e.query[n]!==t.query[n])return!1;for(var a in e.params)if(e.params[a]!==t.params[a])return!1;return!0}(e,n)}))){var a={};a.name=n.name,a.meta=function(n){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?e(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}({},n.meta),delete a.meta.matched,a.query=n.query,a.params=n.params,D.value.push(a)}window.sessionStorage.setItem("activeValue",A(n))},M=o({}),Q=function(e){var t,n=null==e||null===(t=e.props)||void 0===t?void 0:t.name;if(n){var a=M.value[n];J.push({name:a.name,query:a.query,params:a.params})}},W=function(e){var t=D.value.findIndex((function(t){return A(t)===e}));A(a)===e&&(1===D.value.length?J.push({name:Y.value}):t<D.value.length-1?J.push({name:D.value[t+1].name,query:D.value[t+1].query,params:D.value[t+1].params}):J.push({name:D.value[t-1].name,query:D.value[t-1].query,params:D.value[t-1].params})),D.value.splice(t,1)};s((function(){return B.value}),(function(){B.value?document.body.addEventListener("click",(function(){B.value=!1})):document.body.removeEventListener("click",(function(){B.value=!1}))})),s((function(){return a}),(function(e,t){"Login"!==e.name&&"Reload"!==e.name&&(D.value=D.value.filter((function(e){return!e.meta.closeTab})),G(e),sessionStorage.setItem("historys",JSON.stringify(D.value)),_.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),s((function(){return D.value}),(function(){sessionStorage.setItem("historys",JSON.stringify(D.value)),M.value={},D.value.forEach((function(e){M.value[A(e)]=e})),c.emit("setKeepAlive",D.value)}),{deep:!0});return function(){c.on("closeThisPage",(function(){W(T(a))})),c.on("closeAllPage",(function(){F()})),c.on("mobile",(function(e){K.value=e})),c.on("collapse",(function(e){z.value=e}));var e=[{name:Y.value,meta:{title:"首页"},query:{},params:{}}];D.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?_.value=window.sessionStorage.getItem("activeValue"):_.value=A(a),G(a),"true"===window.sessionStorage.getItem("needCloseAll")&&(F(),window.sessionStorage.removeItem("needCloseAll"))}(),v((function(){c.off("collapse"),c.off("mobile")})),function(e,t){var n=q,r=P;return f(),m("div",E,[p(r,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return _.value=e}),closable:!(1===D.value.length&&e.$route.name===Y.value),type:"card",onContextmenu:t[1]||(t[1]=k((function(e){return function(e){if(1===D.value.length&&a.name===Y.value)return!1;var t,n="";(n="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id)&&(B.value=!0,t=z.value?54:220,K.value&&(t=0),L.value=e.clientX-t,R.value=e.clientY+10,X.value=n.substring(4))}(e)}),["prevent"])),onTabClick:Q,onTabRemove:W},{default:d((function(){return[(f(!0),m(y,null,g(D.value,(function(e){return f(),b(n,{key:T(e),label:e.meta.title,name:T(e),tab:e,class:"gva-tab"},{label:d((function(){return[h("span",{tab:e,style:O({color:_.value===T(e)?S(V).activeColor:"#333"})},[h("i",{class:"dot",style:O({backgroundColor:_.value===T(e)?S(V).activeColor:"#ddd"})},null,4),x(" "+w(S(j)(e.meta.title,e)),1)],12,N)]})),_:2},1032,["label","name","tab"])})),128))]})),_:1},8,["modelValue","closable"]),I(h("ul",{style:O({left:L.value+"px",top:R.value+"px"}),class:"contextmenu"},[h("li",{onClick:F},"关闭所有"),h("li",{onClick:H},"关闭左侧"),h("li",{onClick:U},"关闭右侧"),h("li",{onClick:$},"关闭其他")],4),[[C,B.value]])])}}}))}}}))}();