/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{a,o as s,c as e,e as t,b as o,w as l,g as r,j as u,k as n,E as i}from"./087AC4D233B64EB0index.js";/* empty css                      *//* empty css                     */import{_ as m}from"./087AC4D233B64EB0warningBar.js";import{l as p}from"./087AC4D233B64EB0autoCode.js";const c={class:"p-5 bg-white"},d={class:"flex items-center gap-3"},B={__name:"pubPlug",setup(B){const g=a(""),C=async()=>{const a=await p({plugName:g.value});0===a.code&&u.success(a.msg)};return(a,u)=>{const p=n,B=i;return s(),e("div",c,[t(m,{title:"目前只支持标准插件（通过插件模板生成的标准目录插件），非标准插件请自行打包"}),o("div",d,[t(p,{modelValue:g.value,"onUpdate:modelValue":u[0]||(u[0]=a=>g.value=a),placeholder:"插件模板处填写的【插件名】"},null,8,["modelValue"]),t(B,{type:"primary",onClick:C},{default:l((()=>u[1]||(u[1]=[r("打包插件")]))),_:1})])])}}};export{B as default};
