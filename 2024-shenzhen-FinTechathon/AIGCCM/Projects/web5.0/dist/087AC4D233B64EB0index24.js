/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{A as e,aY as a,a7 as s,B as r,$ as t,q as c,v as i,a as l,C as p,ag as n,am as u,X as o,o as v,c as m,F as f,D as d,h as y,w as g,G as S,H as h,z as I,n as B,_ as k,I as _,l as w,K as E,f as z}from"./087AC4D233B64EB0index.js";import{E as A}from"./087AC4D233B64EB0image-viewer.js";import{_ as C}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";const j=e({size:{type:[Number,String],values:a,default:"",validator:e=>s(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:r},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:t(String),default:"cover"}}),D={error:e=>e instanceof Event},b=c({name:"ElAvatar"});const q=_(k(c({...b,props:j,emits:D,setup(e,{emit:a}){const r=e,t=i("avatar"),c=l(!1),k=p((()=>{const{size:e,icon:a,shape:s}=r,c=[t.b()];return n(e)&&c.push(t.m(e)),a&&c.push(t.m("icon")),s&&c.push(t.m(s)),c})),_=p((()=>{const{size:e}=r;return s(e)?t.cssVarBlock({size:u(e)||""}):void 0})),w=p((()=>({objectFit:r.fit})));function E(e){c.value=!0,a("error",e)}return o((()=>r.src),(()=>c.value=!1)),(e,a)=>(v(),m("span",{class:B(d(k)),style:f(d(_))},[!e.src&&!e.srcSet||c.value?e.icon?(v(),y(d(h),{key:1},{default:g((()=>[(v(),y(S(e.icon)))])),_:1})):I(e.$slots,"default",{key:2}):(v(),m("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:f(d(w)),onError:E},null,44,["src","alt","srcset"]))],6))}}),[["__file","avatar.vue"]])),x=""+new URL("087AC4D233B64EB0noBody.png",import.meta.url).href,T={class:"headerAvatar"},F=["src"],$=["src"],G=C(Object.assign({name:"CustomPic"},{__name:"index",props:{picType:{type:String,required:!1,default:"avatar"},picSrc:{type:String,required:!1,default:""},preview:{type:Boolean,default:!1}},setup(e){const a=e,s=l("/api/"),r=l(x),t=w(),c=p((()=>""===a.picSrc?""!==t.userInfo.headerImg&&"http"===t.userInfo.headerImg.slice(0,4)?t.userInfo.headerImg:s.value+t.userInfo.headerImg:""!==a.picSrc&&"http"===a.picSrc.slice(0,4)?a.picSrc:s.value+a.picSrc)),i=p((()=>a.picSrc&&"http"!==a.picSrc.slice(0,4)?s.value+a.picSrc:a.picSrc)),n=p((()=>a.preview?[i.value]:[]));return(a,s)=>{const l=q,p=A;return v(),m("span",T,["avatar"===e.picType?(v(),m(E,{key:0},[d(t).userInfo.headerImg?(v(),y(l,{key:0,size:30,src:c.value},null,8,["src"])):(v(),y(l,{key:1,size:30,src:r.value},null,8,["src"]))],64)):z("",!0),"img"===e.picType?(v(),m(E,{key:1},[d(t).userInfo.headerImg?(v(),m("img",{key:0,src:c.value,class:"avatar"},null,8,F)):(v(),m("img",{key:1,src:r.value,class:"avatar"},null,8,$))],64)):z("",!0),"file"===e.picType?(v(),y(p,{key:2,src:i.value,class:"file","preview-src-list":n.value,"preview-teleported":!0},null,8,["src","preview-src-list"])):z("",!0)])}}}),[["__scopeId","data-v-a9ea8f7c"]]);export{G as C};