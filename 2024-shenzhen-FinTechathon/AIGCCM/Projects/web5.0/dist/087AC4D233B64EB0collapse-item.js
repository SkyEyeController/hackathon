/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{A as e,$ as a,aL as s,a4 as l,a6 as t,a7 as i,ag as o,a8 as n,a as c,X as d,x as r,v as u,C as m,q as p,o as v,c as b,z as f,n as C,D as h,_ as y,B as A,aJ as K,ab as x,by as g,b as B,g as k,t as I,e as N,w as E,h as w,G as _,H,m as S,ak as $,S as D,Y as F,I as V,J as j}from"./087AC4D233B64EB0index.js";import{c as J}from"./087AC4D233B64EB0castArray.js";import{E as W}from"./087AC4D233B64EB0index30.js";const q=e=>i(e)||o(e)||n(e),z=e({accordion:Boolean,modelValue:{type:a([Array,String,Number]),default:()=>s([])}}),G={[l]:q,[t]:q},L=Symbol("collapseContextKey"),O=p({name:"ElCollapse"});var T=y(p({...O,props:z,emits:G,setup(e,{expose:a,emit:s}){const i=e,{activeNames:o,setActiveNames:n}=((e,a)=>{const s=c(J(e.modelValue)),i=i=>{s.value=i;const o=e.accordion?s.value[0]:s.value;a(l,o),a(t,o)};return d((()=>e.modelValue),(()=>s.value=J(e.modelValue)),{deep:!0}),r(L,{activeNames:s,handleItemClick:a=>{if(e.accordion)i([s.value[0]===a?"":a]);else{const e=[...s.value],l=e.indexOf(a);l>-1?e.splice(l,1):e.push(a),i(e)}}}),{activeNames:s,setActiveNames:i}})(i,s),{rootKls:p}=(()=>{const e=u("collapse");return{rootKls:m((()=>e.b()))}})();return a({activeNames:o,setActiveNames:n}),(e,a)=>(v(),b("div",{class:C(h(p))},[f(e.$slots,"default")],2))}}),[["__file","collapse.vue"]]);const X=e({title:{type:String,default:""},name:{type:a([String,Number]),default:void 0},icon:{type:A,default:K},disabled:Boolean}),Y=p({name:"ElCollapseItem"});var M=y(p({...Y,props:X,setup(e,{expose:a}){const s=e,{focusing:l,id:t,isActive:i,handleFocus:o,handleHeaderClick:n,handleEnterClick:d}=(e=>{const a=x(L),{namespace:s}=u("collapse"),l=c(!1),t=c(!1),i=g(),o=m((()=>i.current++)),n=m((()=>{var a;return null!=(a=e.name)?a:"".concat(s.value,"-id-").concat(i.prefix,"-").concat(h(o))})),d=m((()=>null==a?void 0:a.activeNames.value.includes(h(n))));return{focusing:l,id:o,isActive:d,handleFocus:()=>{setTimeout((()=>{t.value?t.value=!1:l.value=!0}),50)},handleHeaderClick:()=>{e.disabled||(null==a||a.handleItemClick(h(n)),l.value=!1,t.value=!0)},handleEnterClick:()=>{null==a||a.handleItemClick(h(n))}}})(s),{arrowKls:r,headKls:p,rootKls:y,itemWrapperKls:A,itemContentKls:K,scopedContentId:V,scopedHeadId:j}=((e,{focusing:a,isActive:s,id:l})=>{const t=u("collapse"),i=m((()=>[t.b("item"),t.is("active",h(s)),t.is("disabled",e.disabled)])),o=m((()=>[t.be("item","header"),t.is("active",h(s)),{focusing:h(a)&&!e.disabled}]));return{arrowKls:m((()=>[t.be("item","arrow"),t.is("active",h(s))])),headKls:o,rootKls:i,itemWrapperKls:m((()=>t.be("item","wrap"))),itemContentKls:m((()=>t.be("item","content"))),scopedContentId:m((()=>t.b("content-".concat(h(l))))),scopedHeadId:m((()=>t.b("head-".concat(h(l)))))}})(s,{focusing:l,isActive:i,id:t});return a({isActive:i}),(e,a)=>(v(),b("div",{class:C(h(y))},[B("button",{id:h(j),class:C(h(p)),"aria-expanded":h(i),"aria-controls":h(V),"aria-describedby":h(V),tabindex:e.disabled?-1:0,type:"button",onClick:h(n),onKeydown:S($(h(d),["stop","prevent"]),["space","enter"]),onFocus:h(o),onBlur:e=>l.value=!1},[f(e.$slots,"title",{},(()=>[k(I(e.title),1)])),f(e.$slots,"icon",{isActive:h(i)},(()=>[N(h(H),{class:C(h(r))},{default:E((()=>[(v(),w(_(e.icon)))])),_:1},8,["class"])]))],42,["id","aria-expanded","aria-controls","aria-describedby","tabindex","onClick","onKeydown","onFocus","onBlur"]),N(h(W),null,{default:E((()=>[D(B("div",{id:h(V),role:"region",class:C(h(A)),"aria-hidden":!h(i),"aria-labelledby":h(j)},[B("div",{class:C(h(K))},[f(e.$slots,"default")],2)],10,["id","aria-hidden","aria-labelledby"]),[[F,h(i)]])])),_:3})],2))}}),[["__file","collapse-item.vue"]]);const P=V(T,{CollapseItem:M}),Q=j(M);export{Q as E,P as a};