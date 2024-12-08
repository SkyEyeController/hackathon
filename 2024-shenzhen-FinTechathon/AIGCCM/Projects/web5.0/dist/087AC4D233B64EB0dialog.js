/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{a$ as e,q as o,ah as a,ab as s,az as l,C as t,cj as r,o as n,c as i,b as d,z as c,n as f,D as u,t as v,e as p,w as b,h as g,G as y,H as m,f as h,F as C,_ as k,ck as A,aq as R,ce as w,v as $,a as _,x,Z as E,S as F,cl as I,bG as B,ay as L,ax as D,Y as M,cm as P,I as T}from"./087AC4D233B64EB0index.js";import{E as j}from"./087AC4D233B64EB0index21.js";import{d as q,a as z,b as S,c as G,u as H}from"./087AC4D233B64EB0overlay.js";const K=(...o)=>a=>{o.forEach((o=>{e(o)?o(a):o.value=a}))},O=Symbol("dialogInjectionKey"),U=o({name:"ElDialogContent"});var Y=k(o({...U,props:q,emits:z,setup(e,{expose:o}){const k=e,{t:R}=a(),{Close:w}=A,{dialogRef:$,headerRef:_,bodyId:x,ns:E,style:F}=s(O),{focusTrapRef:I}=s(l),B=t((()=>[E.b(),E.is("fullscreen",k.fullscreen),E.is("draggable",k.draggable),E.is("align-center",k.alignCenter),{[E.m("center")]:k.center}])),L=K(I,$),D=t((()=>k.draggable)),M=t((()=>k.overflow)),{resetPosition:P}=r($,_,D,M);return o({resetPosition:P}),(e,o)=>(n(),i("div",{ref:u(L),class:f(u(B)),style:C(u(F)),tabindex:"-1"},[d("header",{ref_key:"headerRef",ref:_,class:f([u(E).e("header"),{"show-close":e.showClose}])},[c(e.$slots,"header",{},(()=>[d("span",{role:"heading","aria-level":e.ariaLevel,class:f(u(E).e("title"))},v(e.title),11,["aria-level"])])),e.showClose?(n(),i("button",{key:0,"aria-label":u(R)("el.dialog.close"),class:f(u(E).e("headerbtn")),type:"button",onClick:o=>e.$emit("close")},[p(u(m),{class:f(u(E).e("close"))},{default:b((()=>[(n(),g(y(e.closeIcon||u(w))))])),_:1},8,["class"])],10,["aria-label","onClick"])):h("v-if",!0)],2),d("div",{id:u(x),class:f(u(E).e("body"))},[c(e.$slots,"default")],10,["id"]),e.$slots.footer?(n(),i("footer",{key:0,class:f(u(E).e("footer"))},[c(e.$slots,"footer")],2)):h("v-if",!0)],6))}}),[["__file","dialog-content.vue"]]);const Z=o({name:"ElDialog",inheritAttrs:!1});const J=T(k(o({...Z,props:S,emits:G,setup(e,{expose:o}){const a=e,s=R();w({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},t((()=>!!s.title)));const l=$("dialog"),r=_(),i=_(),v=_(),{visible:y,titleId:m,bodyId:k,style:A,overlayDialogStyle:T,rendered:q,zIndex:z,afterEnter:S,afterLeave:G,beforeLeave:K,handleClose:U,onModalClick:Z,onOpenAutoFocus:J,onCloseAutoFocus:N,onCloseRequested:Q,onFocusoutPrevented:V}=H(a,r);x(O,{dialogRef:r,headerRef:i,bodyId:k,ns:l,rendered:q,style:A});const W=P(Z),X=t((()=>a.draggable&&!a.fullscreen));return o({visible:y,dialogContentRef:v,resetPosition:()=>{var e;null==(e=v.value)||e.resetPosition()}}),(e,o)=>(n(),g(u(j),{to:e.appendTo,disabled:"body"===e.appendTo&&!e.appendToBody},{default:b((()=>[p(E,{name:"dialog-fade",onAfterEnter:u(S),onAfterLeave:u(G),onBeforeLeave:u(K),persisted:""},{default:b((()=>[F(p(u(I),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":u(z)},{default:b((()=>[d("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:u(m),"aria-describedby":u(k),class:f("".concat(u(l).namespace.value,"-overlay-dialog")),style:C(u(T)),onClick:u(W).onClick,onMousedown:u(W).onMousedown,onMouseup:u(W).onMouseup},[p(u(B),{loop:"",trapped:u(y),"focus-start-el":"container",onFocusAfterTrapped:u(J),onFocusAfterReleased:u(N),onFocusoutPrevented:u(V),onReleaseRequested:u(Q)},{default:b((()=>[u(q)?(n(),g(Y,L({key:0,ref_key:"dialogContentRef",ref:v},e.$attrs,{center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:u(X),overflow:e.overflow,fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,"aria-level":e.headerAriaLevel,onClose:u(U)}),D({header:b((()=>[e.$slots.title?c(e.$slots,"title",{key:1}):c(e.$slots,"header",{key:0,close:u(U),titleId:u(m),titleClass:u(l).e("title")})])),default:b((()=>[c(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:b((()=>[c(e.$slots,"footer")]))}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):h("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])])),_:3},8,["mask","overlay-class","z-index"]),[[M,u(y)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])])),_:3},8,["to","disabled"]))}}),[["__file","dialog.vue"]]));export{J as E,K as c};
