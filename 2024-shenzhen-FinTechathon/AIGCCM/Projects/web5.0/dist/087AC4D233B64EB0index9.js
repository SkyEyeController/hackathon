/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{an as e,u as a,l as o,a0 as t,a as r,X as s,R as l,aA as n,o as i,c as u,e as c,w as d,Z as m,K as p,L as v,D as f,h as B,f as x,F as h}from"./087AC4D233B64EB0index.js";import{E as g}from"./087AC4D233B64EB0scrollbar.js";/* empty css                       *//* empty css                      */import E from"./087AC4D233B64EB0index8.js";import{E as k}from"./087AC4D233B64EB0index29.js";import"./087AC4D233B64EB0menuItem.js";import"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0index20.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0asyncSubmenu.js";import"./087AC4D233B64EB0index30.js";const A=Object.assign({name:"Aside"},{__name:"index",setup(A){const b=e(),j=a(),y=o(),D=t(),C=r({}),_=()=>{switch(y.sideMode){case"#fff":C.value={background:"#fff",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#333",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#333"};break;case"#191a23":C.value={background:"#191a23",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#fff",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#fff"}}};_();const T=r("");s((()=>b),(()=>{T.value=b.meta.activeName||b.name}),{deep:!0}),s((()=>y.sideMode),(()=>{_()}));const M=r(!1);(()=>{T.value=b.meta.activeName||b.name;document.body.clientWidth<1e3&&(M.value=!M.value),n.on("collapse",(e=>{M.value=e}))})(),l((()=>{n.off("collapse")}));const w=(e,a,o,t)=>{var r,s;const l={},n={};(null==(r=D.routeMap[e])?void 0:r.parameters)&&(null==(s=D.routeMap[e])||s.parameters.forEach((e=>{"query"===e.type?l[e.key]=e.value:n[e.key]=e.value}))),e!==b.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):j.push({name:e,query:l,params:n}))};return(e,a)=>{const o=k,t=g;return i(),u("div",{style:h({background:f(y).sideMode})},[c(t,{style:{height:"calc(100vh - 60px)"}},{default:d((()=>[c(m,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:d((()=>[c(o,{collapse:M.value,"collapse-transition":!1,"default-active":T.value,"background-color":C.value.background,"active-text-color":C.value.active,class:"el-menu-vertical","unique-opened":"",onSelect:w},{default:d((()=>[(i(!0),u(p,null,v(f(D).asyncRouters[0].children,(e=>(i(),u(p,null,[e.hidden?x("",!0):(i(),B(E,{key:e.name,"is-collapse":M.value,"router-info":e,theme:C.value},null,8,["is-collapse","router-info","theme"]))],64)))),256))])),_:1},8,["collapse","default-active","background-color","active-text-color"])])),_:1})])),_:1})],4)}}});export{A as default};
