/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{an as e,u as a,a as s,l,C as t,X as n,aA as u,R as o,o as r,c as i,e as v,w as m,K as c,L as p,h as d,b as y,F as g,D as f,g as h,t as b,aB as S,ak as I,S as q,Y as C}from"./087AC4D233B64EB0index.js";import{E as O,a as k}from"./087AC4D233B64EB0tab-pane.js";import"./087AC4D233B64EB0strings.js";const w={class:"router-history"},N=["tab"],x=Object.assign({name:"HistoryComponent"},{__name:"history",setup(x){const J=e(),E=a(),A=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),j=s([]),B=s(""),V=s(!1),D=l(),L=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),P=s(0),R=s(0),T=s(!1),_=s(!1),K=s(""),X=t((()=>D.userInfo.authority.defaultRouter)),Y=()=>{j.value=[{name:X.value,meta:{title:"首页"},query:{},params:{}}],E.push({name:X.value}),V.value=!1,sessionStorage.setItem("historys",JSON.stringify(j.value))},F=()=>{let e;const a=j.value.findIndex((a=>(A(a)===K.value&&(e=a),A(a)===K.value))),s=j.value.findIndex((e=>A(e)===B.value));j.value.splice(0,a),a>s&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(j.value))},H=()=>{let e;const a=j.value.findIndex((a=>(A(a)===K.value&&(e=a),A(a)===K.value))),s=j.value.findIndex((e=>A(e)===B.value));j.value.splice(a+1,j.value.length),a<s&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(j.value))},U=()=>{let e;j.value=j.value.filter((a=>(A(a)===K.value&&(e=a),A(a)===K.value))),E.push(e),sessionStorage.setItem("historys",JSON.stringify(j.value))},$=e=>{if(!j.value.some((a=>((e,a)=>{if(e.name!==a.name)return!1;if(Object.keys(e.query).length!==Object.keys(a.query).length||Object.keys(e.params).length!==Object.keys(a.params).length)return!1;for(const s in e.query)if(e.query[s]!==a.query[s])return!1;for(const s in e.params)if(e.params[s]!==a.params[s])return!1;return!0})(a,e)))){const a={};a.name=e.name,a.meta={...e.meta},delete a.meta.matched,a.query=e.query,a.params=e.params,j.value.push(a)}window.sessionStorage.setItem("activeValue",A(e))},z=s({}),G=e=>{var a;const s=null==(a=null==e?void 0:e.props)?void 0:a.name;if(!s)return;const l=z.value[s];E.push({name:l.name,query:l.query,params:l.params})},M=e=>{const a=j.value.findIndex((a=>A(a)===e));A(J)===e&&(1===j.value.length?E.push({name:X.value}):a<j.value.length-1?E.push({name:j.value[a+1].name,query:j.value[a+1].query,params:j.value[a+1].params}):E.push({name:j.value[a-1].name,query:j.value[a-1].query,params:j.value[a-1].params})),j.value.splice(a,1)};n((()=>V.value),(()=>{V.value?document.body.addEventListener("click",(()=>{V.value=!1})):document.body.removeEventListener("click",(()=>{V.value=!1}))})),n((()=>J),((e,a)=>{"Login"!==e.name&&"Reload"!==e.name&&(j.value=j.value.filter((e=>!e.meta.closeTab)),$(e),sessionStorage.setItem("historys",JSON.stringify(j.value)),B.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),n((()=>j.value),(()=>{sessionStorage.setItem("historys",JSON.stringify(j.value)),z.value={},j.value.forEach((e=>{z.value[A(e)]=e})),u.emit("setKeepAlive",j.value)}),{deep:!0});return(()=>{u.on("closeThisPage",(()=>{M(L(J))})),u.on("closeAllPage",(()=>{Y()})),u.on("mobile",(e=>{_.value=e})),u.on("collapse",(e=>{T.value=e}));const e=[{name:X.value,meta:{title:"首页"},query:{},params:{}}];j.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?B.value=window.sessionStorage.getItem("activeValue"):B.value=A(J),$(J),"true"===window.sessionStorage.getItem("needCloseAll")&&(Y(),window.sessionStorage.removeItem("needCloseAll"))})(),o((()=>{u.off("collapse"),u.off("mobile")})),(e,a)=>{const s=O,l=k;return r(),i("div",w,[v(l,{modelValue:B.value,"onUpdate:modelValue":a[0]||(a[0]=e=>B.value=e),closable:!(1===j.value.length&&e.$route.name===X.value),type:"card",onContextmenu:a[1]||(a[1]=I((e=>(e=>{if(1===j.value.length&&J.name===X.value)return!1;let a="";if(a="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id,a){let s;V.value=!0,s=T.value?54:220,_.value&&(s=0),P.value=e.clientX-s,R.value=e.clientY+10,K.value=a.substring(4)}})(e)),["prevent"])),onTabClick:G,onTabRemove:M},{default:m((()=>[(r(!0),i(c,null,p(j.value,(e=>(r(),d(s,{key:L(e),label:e.meta.title,name:L(e),tab:e,class:"gva-tab"},{label:m((()=>[y("span",{tab:e,style:g({color:B.value===L(e)?f(D).activeColor:"#333"})},[y("i",{class:"dot",style:g({backgroundColor:B.value===L(e)?f(D).activeColor:"#ddd"})},null,4),h(" "+b(f(S)(e.meta.title,e)),1)],12,N)])),_:2},1032,["label","name","tab"])))),128))])),_:1},8,["modelValue","closable"]),q(y("ul",{style:g({left:P.value+"px",top:R.value+"px"}),class:"contextmenu"},[y("li",{onClick:Y},"关闭所有"),y("li",{onClick:F},"关闭左侧"),y("li",{onClick:H},"关闭右侧"),y("li",{onClick:U},"关闭其他")],4),[[C,V.value]])])}}});export{x as default};