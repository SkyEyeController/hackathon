/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{C as a}from"./087AC4D233B64EB0github.js";import{f as s}from"./087AC4D233B64EB0date.js";import{_ as e}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";import{a as t,o,c as m,b as l,K as i,L as c,n as d,t as r}from"./087AC4D233B64EB0index.js";const f={class:"commit-table"},n={class:"log"},p={class:"flex-1 flex key-box"},u={class:"flex-5 flex message"},v={class:"flex-3 flex form"},h=e(Object.assign({name:"DashboardTable"},{__name:"dashboardTable",setup(e){const h=t(!0),b=t([]);return a(0).then((({data:a})=>{h.value=!1,a.forEach(((a,e)=>{a.commit.message&&e<10&&b.value.push({from:s(a.commit.author.date,"yyyy-MM-dd"),title:a.commit.author.name,showDayAndMonth:!0,message:a.commit.message})}))})),(a,s)=>(o(),m("div",f,[s[0]||(s[0]=l("div",{class:"commit-table-title"}," 更新日志 ",-1)),l("div",n,[(o(!0),m(i,null,c(b.value,((a,s)=>(o(),m("div",{key:s,class:"log-item"},[l("div",p,[l("span",{class:d(["key",s<3&&"top"])},r(s+1),3)]),l("div",u,r(a.message),1),l("div",v,r(a.from),1)])))),128))])]))}}),[["__scopeId","data-v-c1fd859a"]]);export{h as default};