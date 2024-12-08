/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{a,o as e,c as t,e as l,b as o,w as r,g as i,D as u,aX as d,h as s,f as n,T as m,j as p,E as y,H as h,k as c}from"./087AC4D233B64EB0index.js";/* empty css                      */import"./087AC4D233B64EB0overlay.js";import{E as v,a as B}from"./087AC4D233B64EB0tab-pane.js";import{E as f}from"./087AC4D233B64EB0dialog.js";import{a as C,E}from"./087AC4D233B64EB0form-item.js";/* empty css                     */import{E as I}from"./087AC4D233B64EB0radio.js";/* empty css                      */import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0checkbox.js";import"./087AC4D233B64EB0scrollbar.js";import{E as A,a as b}from"./087AC4D233B64EB0table-column.js";/* empty css                       *//* empty css                      */import{g as D,d as g,c as j,u as w,a as _}from"./087AC4D233B64EB0authority2.js";import k from"./087AC4D233B64EB0menus.js";import N from"./087AC4D233B64EB0apis.js";import V from"./087AC4D233B64EB0datas.js";import{_ as x}from"./087AC4D233B64EB0warningBar.js";import{t as U}from"./087AC4D233B64EB0doc.js";import{E as q}from"./087AC4D233B64EB0index28.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0arrays.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0index20.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0tree.js";import"./087AC4D233B64EB0token.js";import"./087AC4D233B64EB0index30.js";import"./087AC4D233B64EB0authorityBtn.js";import"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0api2.js";const S={class:"authority"},T={class:"gva-table-box"},z={class:"gva-btn-list"},R={class:"dialog-footer"},F=Object.assign({name:"Authority"},{__name:"authority",setup(F){const O=a([{authorityId:0,authorityName:"根角色"}]),H=a(!1),P=a("add"),X=a({}),$=a("新增角色"),G=a(!1),J=a(!1),K=a({}),L=a({authorityId:0,authorityName:"",parentId:0}),M=a({authorityId:[{required:!0,message:"请输入角色ID",trigger:"blur"},{validator:(a,e,t)=>/^[0-9]*[1-9][0-9]*$/.test(e)?t():t(new Error("请输入正整数")),trigger:"blur",message:"必须为正整数"}],authorityName:[{required:!0,message:"请输入角色名",trigger:"blur"}],parentId:[{required:!0,message:"请选择父角色",trigger:"blur"}]}),Q=a(1),W=a(0),Y=a(999),Z=a([]),aa=a({}),ea=async()=>{const a=await D({page:Q.value,pageSize:Y.value,...aa.value});0===a.code&&(Z.value=a.data.list,W.value=a.data.total,Q.value=a.data.page,Y.value=a.data.pageSize)};ea();const ta=(a,e)=>{X.value[a]=e},la=a(null),oa=a(null),ra=a(null),ia=(a,e)=>{const t=[la,oa,ra];e&&t[e].value.needConfirm&&(t[e].value.enterAndNext(),t[e].value.needConfirm=!1)},ua=a(null),da=()=>{ua.value&&ua.value.resetFields(),L.value={authorityId:0,authorityName:"",parentId:0}},sa=()=>{da(),G.value=!1,J.value=!1},na=()=>{ua.value.validate((async a=>{if(a){switch(L.value.authorityId=Number(L.value.authorityId),P.value){case"add":0===(await _(L.value)).code&&(p({type:"success",message:"添加成功!"}),ea(),sa());break;case"edit":0===(await w(L.value)).code&&(p({type:"success",message:"添加成功!"}),ea(),sa());break;case"copy":{const a={authority:{authorityId:0,authorityName:"",datauthorityId:[],parentId:0},oldAuthorityId:0};a.authority.authorityId=L.value.authorityId,a.authority.authorityName=L.value.authorityName,a.authority.parentId=L.value.parentId,a.authority.dataAuthorityId=K.value.dataAuthorityId,a.oldAuthorityId=K.value.authorityId;0===(await j(a)).code&&(p({type:"success",message:"复制成功！"}),ea())}}da(),G.value=!1}}))},ma=()=>{O.value=[{authorityId:0,authorityName:"根角色"}],pa(Z.value,O.value,!1)},pa=(a,e,t)=>{L.value.authorityId=String(L.value.authorityId),a&&a.forEach((a=>{if(a.children&&a.children.length){const l={authorityId:a.authorityId,authorityName:a.authorityName,disabled:t||a.authorityId===L.value.authorityId,children:[]};pa(a.children,l.children,t||a.authorityId===L.value.authorityId),e.push(l)}else{const l={authorityId:a.authorityId,authorityName:a.authorityName,disabled:t||a.authorityId===L.value.authorityId};e.push(l)}}))},ya=a=>{da(),$.value="新增角色",P.value="add",L.value.parentId=a,ma(),G.value=!0};return(a,D)=>{const j=y,w=h,_=A,F=b,J=I,W=C,Y=c,aa=E,da=f,pa=v,ha=B,ca=q;return e(),t("div",S,[l(x,{title:"注：右上角头像下拉可切换角色"}),o("div",T,[o("div",z,[l(j,{type:"primary",icon:"plus",onClick:D[0]||(D[0]=a=>ya(0))},{default:r((()=>D[7]||(D[7]=[i("新增角色")]))),_:1}),l(w,{class:"cursor-pointer",onClick:D[1]||(D[1]=a=>u(U)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=8&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:r((()=>[l(u(d))])),_:1})]),l(F,{data:Z.value,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"authorityId",style:{width:"100%"}},{default:r((()=>[l(_,{label:"角色ID","min-width":"180",prop:"authorityId"}),l(_,{align:"left",label:"角色名称","min-width":"180",prop:"authorityName"}),l(_,{align:"left",label:"操作",width:"460"},{default:r((a=>[l(j,{icon:"setting",type:"primary",link:"",onClick:e=>{return t=a.row,H.value=!0,void(X.value=t);var t}},{default:r((()=>D[8]||(D[8]=[i("设置权限")]))),_:2},1032,["onClick"]),l(j,{icon:"plus",type:"primary",link:"",onClick:e=>ya(a.row.authorityId)},{default:r((()=>D[9]||(D[9]=[i("新增子角色")]))),_:2},1032,["onClick"]),l(j,{icon:"copy-document",type:"primary",link:"",onClick:e=>(a=>{ma(),$.value="拷贝角色",P.value="copy";for(const e in L.value)L.value[e]=a[e];K.value=a,G.value=!0})(a.row)},{default:r((()=>D[10]||(D[10]=[i("拷贝")]))),_:2},1032,["onClick"]),l(j,{icon:"edit",type:"primary",link:"",onClick:e=>(a=>{ma(),$.value="编辑角色",P.value="edit";for(const e in L.value)L.value[e]=a[e];ma(),G.value=!0})(a.row)},{default:r((()=>D[11]||(D[11]=[i("编辑")]))),_:2},1032,["onClick"]),l(j,{icon:"delete",type:"primary",link:"",onClick:e=>{return t=a.row,void m.confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await g({authorityId:t.authorityId})).code&&(p({type:"success",message:"删除成功!"}),1===Z.value.length&&Q.value>1&&Q.value--,ea())})).catch((()=>{p({type:"info",message:"已取消删除"})}));var t}},{default:r((()=>D[12]||(D[12]=[i("删除")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),l(da,{modelValue:G.value,"onUpdate:modelValue":D[5]||(D[5]=a=>G.value=a),title:$.value},{footer:r((()=>[o("div",R,[l(j,{onClick:sa},{default:r((()=>D[13]||(D[13]=[i("取 消")]))),_:1}),l(j,{type:"primary",onClick:na},{default:r((()=>D[14]||(D[14]=[i("确 定")]))),_:1})])])),default:r((()=>[l(aa,{ref_key:"authorityForm",ref:ua,model:L.value,rules:M.value,"label-width":"80px"},{default:r((()=>[l(W,{label:"父级角色",prop:"parentId"},{default:r((()=>[l(J,{modelValue:L.value.parentId,"onUpdate:modelValue":D[2]||(D[2]=a=>L.value.parentId=a),style:{width:"100%"},disabled:"add"===P.value,options:O.value,props:{checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),l(W,{label:"角色ID",prop:"authorityId"},{default:r((()=>[l(Y,{modelValue:L.value.authorityId,"onUpdate:modelValue":D[3]||(D[3]=a=>L.value.authorityId=a),disabled:"edit"===P.value,autocomplete:"off",maxlength:"15"},null,8,["modelValue","disabled"])])),_:1}),l(W,{label:"角色姓名",prop:"authorityName"},{default:r((()=>[l(Y,{modelValue:L.value.authorityName,"onUpdate:modelValue":D[4]||(D[4]=a=>L.value.authorityName=a),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"]),H.value?(e(),s(ca,{key:0,modelValue:H.value,"onUpdate:modelValue":D[6]||(D[6]=a=>H.value=a),"custom-class":"auth-drawer","with-header":!1,size:"40%",title:"角色配置"},{default:r((()=>[l(ha,{"before-leave":ia,type:"border-card"},{default:r((()=>[l(pa,{label:"角色菜单"},{default:r((()=>[l(k,{ref_key:"menus",ref:la,row:X.value,onChangeRow:ta},null,8,["row"])])),_:1}),l(pa,{label:"角色api"},{default:r((()=>[l(N,{ref_key:"apis",ref:oa,row:X.value,onChangeRow:ta},null,8,["row"])])),_:1}),l(pa,{label:"资源权限"},{default:r((()=>[l(V,{ref_key:"datas",ref:ra,authority:Z.value,row:X.value,onChangeRow:ta},null,8,["authority","row"])])),_:1})])),_:1})])),_:1},8,["modelValue"])):n("",!0)])}}});export{F as default};