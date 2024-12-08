/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{q as l,v as a,al as t,o,c as s,b as e,D as r,_ as n,A as i,ah as c,C as f,am as p,z as m,e as d,n as g,F as y,t as u,f as k,I as v}from"./087AC4D233B64EB0index.js";const h=l({name:"ImgEmpty"});var x=n(l({...h,setup(l){const n=a("empty"),i=t();return(l,a)=>(o(),s("svg",{viewBox:"0 0 79 86",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[e("defs",null,[e("linearGradient",{id:"linearGradient-1-".concat(r(i)),x1:"38.8503086%",y1:"0%",x2:"61.1496914%",y2:"100%"},[e("stop",{"stop-color":"var(".concat(r(n).cssVarBlockName("fill-color-1"),")"),offset:"0%"},null,8,["stop-color"]),e("stop",{"stop-color":"var(".concat(r(n).cssVarBlockName("fill-color-4"),")"),offset:"100%"},null,8,["stop-color"])],8,["id"]),e("linearGradient",{id:"linearGradient-2-".concat(r(i)),x1:"0%",y1:"9.5%",x2:"100%",y2:"90.5%"},[e("stop",{"stop-color":"var(".concat(r(n).cssVarBlockName("fill-color-1"),")"),offset:"0%"},null,8,["stop-color"]),e("stop",{"stop-color":"var(".concat(r(n).cssVarBlockName("fill-color-6"),")"),offset:"100%"},null,8,["stop-color"])],8,["id"]),e("rect",{id:"path-3-".concat(r(i)),x:"0",y:"0",width:"17",height:"36"},null,8,["id"])]),e("g",{id:"Illustrations",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e("g",{id:"B-type",transform:"translate(-1268.000000, -535.000000)"},[e("g",{id:"Group-2",transform:"translate(1268.000000, 535.000000)"},[e("path",{id:"Oval-Copy-2",d:"M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",fill:"var(".concat(r(n).cssVarBlockName("fill-color-3"),")")},null,8,["fill"]),e("polygon",{id:"Rectangle-Copy-14",fill:"var(".concat(r(n).cssVarBlockName("fill-color-7"),")"),transform:"translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",points:"13 58 53 58 42 45 2 45"},null,8,["fill"]),e("g",{id:"Group-Copy",transform:"translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"},[e("polygon",{id:"Rectangle-Copy-10",fill:"var(".concat(r(n).cssVarBlockName("fill-color-7"),")"),transform:"translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",points:"2.84078316e-14 3 18 3 23 7 5 7"},null,8,["fill"]),e("polygon",{id:"Rectangle-Copy-11",fill:"var(".concat(r(n).cssVarBlockName("fill-color-5"),")"),points:"-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"},null,8,["fill"]),e("rect",{id:"Rectangle-Copy-12",fill:"url(#linearGradient-1-".concat(r(i),")"),transform:"translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",x:"38",y:"7",width:"17",height:"36"},null,8,["fill"]),e("polygon",{id:"Rectangle-Copy-13",fill:"var(".concat(r(n).cssVarBlockName("fill-color-2"),")"),transform:"translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",points:"24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"},null,8,["fill"])]),e("rect",{id:"Rectangle-Copy-15",fill:"url(#linearGradient-2-".concat(r(i),")"),x:"13",y:"45",width:"40",height:"36"},null,8,["fill"]),e("g",{id:"Rectangle-Copy-17",transform:"translate(53.000000, 45.000000)"},[e("use",{id:"Mask",fill:"var(".concat(r(n).cssVarBlockName("fill-color-8"),")"),transform:"translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ","xlink:href":"#path-3-".concat(r(i))},null,8,["fill","xlink:href"]),e("polygon",{id:"Rectangle-Copy",fill:"var(".concat(r(n).cssVarBlockName("fill-color-9"),")"),mask:"url(#mask-4-".concat(r(i),")"),transform:"translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",points:"7 0 24 0 20 18 7 16.5"},null,8,["fill","mask"])]),e("polygon",{id:"Rectangle-Copy-18",fill:"var(".concat(r(n).cssVarBlockName("fill-color-2"),")"),transform:"translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",points:"62 45 79 45 70 58 53 58"},null,8,["fill"])])])])]))}}),[["__file","img-empty.vue"]]);const C=i({image:{type:String,default:""},imageSize:Number,description:{type:String,default:""}}),B=l({name:"ElEmpty"});const w=v(n(l({...B,props:C,setup(l){const t=l,{t:n}=c(),i=a("empty"),v=f((()=>t.description||n("el.table.emptyText"))),h=f((()=>({width:p(t.imageSize)})));return(l,a)=>(o(),s("div",{class:g(r(i).b())},[e("div",{class:g(r(i).e("image")),style:y(r(h))},[l.image?(o(),s("img",{key:0,src:l.image,ondragstart:"return false"},null,8,["src"])):m(l.$slots,"image",{key:1},(()=>[d(x)]))],6),e("div",{class:g(r(i).e("description"))},[l.$slots.description?m(l.$slots,"description",{key:0}):(o(),s("p",{key:1},u(r(v)),1))],2),l.$slots.default?(o(),s("div",{key:0,class:g(r(i).e("bottom"))},[m(l.$slots,"default")],2)):k("v-if",!0)],2))}}),[["__file","empty.vue"]]));export{w as E};
