/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{k as t,g as e,s as r,b as n,a,n as o,c,i as b,S as s,d as i}from"./087AC4D233B64EB0_Uint8Array.js";import{bK as u,bL as j,bM as f,b5 as y,bc as A,bN as l}from"./087AC4D233B64EB0index.js";import{c as p,k as v,g as d,a as m,b as g,d as w,e as x,i as B}from"./087AC4D233B64EB0_initCloneObject.js";const S=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)u(r,e(t)),t=d(t);return r}:r;function O(t){return n(t,v,S)}var U=Object.prototype.hasOwnProperty;var E=/\w*$/;var I=j?j.prototype:void 0,h=I?I.valueOf:void 0;function D(t,e,r){var n,a,o,c=t.constructor;switch(e){case"[object ArrayBuffer]":return m(t);case"[object Boolean]":case"[object Date]":return new c(+t);case"[object DataView]":return function(t,e){var r=e?m(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return g(t,r);case"[object Map]":case"[object Set]":return new c;case"[object Number]":case"[object String]":return new c(t);case"[object RegExp]":return(o=new(a=t).constructor(a.source,E.exec(a))).lastIndex=a.lastIndex,o;case"[object Symbol]":return n=t,h?Object(h.call(n)):{}}}var C=o&&o.isMap;const F=C?c(C):function(t){return f(t)&&"[object Map]"==a(t)};var M=o&&o.isSet;const k=M?c(M):function(t){return f(t)&&"[object Set]"==a(t)};var N="[object Arguments]",L="[object Function]",P="[object Object]",R={};function V(r,n,o,c,u,j){var f,d=1&n,m=2&n,g=4&n;if(o&&(f=u?o(r,c,u,j):o(r)),void 0!==f)return f;if(!y(r))return r;var E=A(r);if(E){if(f=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&U.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(r),!d)return w(r,f)}else{var I=a(r),h=I==L||"[object GeneratorFunction]"==I;if(b(r))return x(r,d);if(I==P||I==N||h&&!u){if(f=m||h?{}:B(r),!d)return m?function(t,e){return p(t,S(t),e)}(r,function(t,e){return t&&p(e,v(e),t)}(f,r)):function(t,r){return p(t,e(t),r)}(r,function(e,r){return e&&p(r,t(r),e)}(f,r))}else{if(!R[I])return u?r:{};f=D(r,I,d)}}j||(j=new s);var C=j.get(r);if(C)return C;j.set(r,f),k(r)?r.forEach((function(t){f.add(V(t,n,o,t,r,j))})):F(r)&&r.forEach((function(t,e){f.set(e,V(t,n,o,e,r,j))}));var M=E?void 0:(g?m?O:i:m?v:t)(r);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(M||r,(function(t,e){M&&(t=r[e=t]),l(f,e,V(t,n,o,e,r,j))})),f}R[N]=R["[object Array]"]=R["[object ArrayBuffer]"]=R["[object DataView]"]=R["[object Boolean]"]=R["[object Date]"]=R["[object Float32Array]"]=R["[object Float64Array]"]=R["[object Int8Array]"]=R["[object Int16Array]"]=R["[object Int32Array]"]=R["[object Map]"]=R["[object Number]"]=R[P]=R["[object RegExp]"]=R["[object Set]"]=R["[object String]"]=R["[object Symbol]"]=R["[object Uint8Array]"]=R["[object Uint8ClampedArray]"]=R["[object Uint16Array]"]=R["[object Uint32Array]"]=!0,R["[object Error]"]=R[L]=R["[object WeakMap]"]=!1;export{V as b};
