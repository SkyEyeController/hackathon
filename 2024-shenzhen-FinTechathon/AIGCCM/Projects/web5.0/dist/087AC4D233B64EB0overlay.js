/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{A as e,B as o,$ as l,a4 as a,aZ as n,bF as t,al as s,a as u,cn as c,co as r,C as d,am as i,cp as p,X as f,Q as y,P as v,ap as m,aK as B,bk as C}from"./087AC4D233B64EB0index.js";import{i as b}from"./087AC4D233B64EB0index21.js";const g=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),D={close:()=>!0},x=e({...g,appendToBody:Boolean,appendTo:{type:l([String,Object]),default:"body"},beforeClose:{type:l(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),A={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>n(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},F=(e,o)=>{var l;const n=m().emit,{nextZIndex:g}=t();let D="";const x=s(),A=s(),F=u(!1),S=u(!1),I=u(!1),O=u(null!=(l=e.zIndex)?l:g());let h,k;const w=c("namespace",r),E=d((()=>{const o={},l="--".concat(w.value,"-dialog");return e.fullscreen||(e.top&&(o["".concat(l,"-margin-top")]=e.top),e.width&&(o["".concat(l,"-width")]=i(e.width))),o})),z=d((()=>e.alignCenter?{display:"flex"}:{}));function L(){null==k||k(),null==h||h(),e.openDelay&&e.openDelay>0?({stop:h}=B((()=>j()),e.openDelay)):j()}function N(){null==h||h(),null==k||k(),e.closeDelay&&e.closeDelay>0?({stop:k}=B((()=>M()),e.closeDelay)):M()}function P(){e.beforeClose?e.beforeClose((function(e){e||(S.value=!0,F.value=!1)})):N()}function j(){C&&(F.value=!0)}function M(){F.value=!1}return e.lockScroll&&p(F),f((()=>e.modelValue),(l=>{l?(S.value=!1,L(),I.value=!0,O.value=b(e.zIndex)?g():O.value++,y((()=>{n("open"),o.value&&(o.value.scrollTop=0)}))):F.value&&N()})),f((()=>e.fullscreen),(e=>{o.value&&(e?(D=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=D)})),v((()=>{e.modelValue&&(F.value=!0,I.value=!0,L())})),{afterEnter:function(){n("opened")},afterLeave:function(){n("closed"),n(a,!1),e.destroyOnClose&&(I.value=!1)},beforeLeave:function(){n("close")},handleClose:P,onModalClick:function(){e.closeOnClickModal&&P()},close:N,doClose:M,onOpenAutoFocus:function(){n("openAutoFocus")},onCloseAutoFocus:function(){n("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&P()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:x,bodyId:A,closed:S,style:E,overlayDialogStyle:z,rendered:I,visible:F,zIndex:O}};export{D as a,x as b,A as c,g as d,F as u};