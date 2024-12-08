/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{a as e,P as a,N as l,o as t,c as s,F as o,D as i,h as u,w as r,e as d,f as m,b as n,aU as p,g as c,aV as v,K as g,L as y,aW as B,t as C,T as f,j as _,H as k,k as E,E as j}from"./087AC4D233B64EB0index.js";/* empty css                      */import"./087AC4D233B64EB0overlay.js";/* empty css                          */import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as b}from"./087AC4D233B64EB0image-viewer.js";import{a as V,E as x}from"./087AC4D233B64EB0form-item.js";/* empty css                      *//* empty css                     */import{g as A,b as D}from"./087AC4D233B64EB0image.js";import{e as h,g as w}from"./087AC4D233B64EB0image.vue_vue_type_style_index_0_scoped_4d6462c8_lang.js";import{_ as U,U as z}from"./087AC4D233B64EB0common.js";import{_ as S}from"./087AC4D233B64EB0warningBar.js";/* empty css                                                                           */import{_ as T}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";import{E as I}from"./087AC4D233B64EB0index25.js";import{E as P}from"./087AC4D233B64EB0index28.js";const F=["src"],N={key:1,class:"multiple-img"},O=["onClick"],H=["src"],K=["onClick"],L={key:0,class:"add-image"},M={class:"gva-btn-list"},W={class:"media"},q={class:"header-img-box-list"},G=["onClick"],J=["src"],Q={key:2,class:"header-img-box-list"},R=["onClick"],X=T({__name:"selectImage",props:{modelValue:{type:[String,Array],default:""},multiple:{type:Boolean,default:!1},fileType:{type:String,default:""},maxUpdateCount:{type:Number,default:0}},emits:["update:modelValue"],setup(T,{emit:X}){const Y=e(""),Z=e(""),$=e({}),ee=e(1),ae=e(0),le=e(20),te=T,se=e([]);a((()=>{te.multiple&&(se.value=te.modelValue)}));const oe=X,ie=e=>{se.value.splice(e,1),oe("update:modelValue",se.value)},ue=e=>{le.value=e,ve()},re=e=>{ee.value=e,ve()},de=e(!1),me=e([]),ne={image:["png","jpg","jpge","gif","bmp","webp"],video:["mp4","avi","rmvb","rm","asf","divx","mpg","mpeg","mpe","wmv","mkv","vob"]},pe=e=>{if(console.log(e),te.fileType){if(!ne[te.fileType].some((a=>{if(e.includes(a))return!0})))return void _({type:"error",message:"当前类型不支持使用"})}te.multiple?(se.value.push(e),oe("update:modelValue",se.value)):oe("update:modelValue",e),de.value=!1},ce=async()=>{!te.modelValue||te.multiple?(await ve(),de.value=!0):oe("update:modelValue","")},ve=async()=>{const e=await w({page:ee.value,pageSize:le.value,...$.value});0===e.code&&(me.value=e.data.list,ae.value=e.data.total,ee.value=e.data.page,le.value=e.data.pageSize)};return(e,a)=>{const w=l("VideoPlay"),X=k,te=E,oe=V,ne=j,ge=x,ye=b,Be=I,Ce=P;return t(),s(g,null,[T.multiple?(t(),s("div",N,[(t(!0),s(g,null,y(se.value,((e,l)=>(t(),s("div",{key:l,class:"update-image",style:o({"background-image":"url(".concat(i(A)(e),")"),position:"relative"})},[i(D)(e||"")?(t(),u(X,{key:0,size:32,class:"video video-icon"},{default:r((()=>[d(w)])),_:1})):m("",!0),i(D)(e||"")?(t(),s("video",{key:1,class:"avatar video-avatar video",muted:"",preload:"metadata",onClick:e=>ie(l)},[n("source",{src:i(A)(e)+"#t=1"},null,8,H)],8,O)):m("",!0),n("span",{class:"update",style:{position:"absolute"},onClick:e=>ie(l)},[d(X,null,{default:r((()=>[d(i(p))])),_:1}),a[6]||(a[6]=c(" 删除"))],8,K)],4)))),128)),!T.maxUpdateCount||T.maxUpdateCount>se.value.length?(t(),s("div",L,[n("span",{class:"update text-gray-600",onClick:ce},[d(X,null,{default:r((()=>[d(i(v))])),_:1}),a[7]||(a[7]=c(" 上传"))])])):m("",!0)])):(t(),s("div",{key:0,class:"update-image",style:o({"background-image":"url(".concat(i(A)(T.modelValue),")"),position:"relative"})},[i(D)(T.modelValue||"")?(t(),u(X,{key:0,size:32,class:"video video-icon",style:{}},{default:r((()=>[d(w)])),_:1})):m("",!0),i(D)(T.modelValue||"")?(t(),s("video",{key:1,class:"avatar video-avatar video",muted:"",preload:"metadata",style:{},onClick:ce},[n("source",{src:i(A)(T.modelValue)+"#t=1"},null,8,F)])):m("",!0),T.modelValue?(t(),s("span",{key:2,class:"update",style:{position:"absolute"},onClick:ce},[d(X,null,{default:r((()=>[d(i(p))])),_:1}),a[4]||(a[4]=c(" 删除"))])):(t(),s("span",{key:3,class:"update text-gray-600",onClick:ce},[d(X,null,{default:r((()=>[d(i(v))])),_:1}),a[5]||(a[5]=c(" 上传"))]))],4)),d(Ce,{modelValue:de.value,"onUpdate:modelValue":a[3]||(a[3]=e=>de.value=e),title:"媒体库",size:"650px"},{default:r((()=>[d(S,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),n("div",M,[d(U,{imageCommon:Z.value,"onUpdate:imageCommon":a[0]||(a[0]=e=>Z.value=e),class:"upload-btn-media-library",onOnSuccess:ve},null,8,["imageCommon"]),d(z,{imageUrl:Y.value,"onUpdate:imageUrl":a[1]||(a[1]=e=>Y.value=e),"file-size":512,"max-w-h":1080,class:"upload-btn-media-library",onOnSuccess:ve},null,8,["imageUrl"]),d(ge,{ref:"searchForm",inline:!0,model:$.value},{default:r((()=>[d(oe,{label:""},{default:r((()=>[d(te,{modelValue:$.value.keyword,"onUpdate:modelValue":a[2]||(a[2]=e=>$.value.keyword=e),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),d(oe,null,{default:r((()=>[d(ne,{type:"primary",icon:"search",onClick:ve},{default:r((()=>a[8]||(a[8]=[c("查询 ")]))),_:1})])),_:1})])),_:1},8,["model"])]),n("div",W,[(t(!0),s(g,null,y(me.value,((e,l)=>(t(),s("div",{key:l,class:"media-box"},[n("div",q,[(t(),u(ye,{key:l,src:i(A)(e.url),fit:"cover",style:{width:"100%",height:"100%"},onClick:a=>pe(e.url)},{error:r((()=>[i(D)(e.url||"")?(t(),u(X,{key:0,size:32,class:"video video-icon"},{default:r((()=>[d(w)])),_:1})):m("",!0),i(D)(e.url||"")?(t(),s("video",{key:1,class:"avatar video-avatar video",muted:"",preload:"metadata",onClick:a=>pe(e.url)},[n("source",{src:i(A)(e.url)+"#t=1"},null,8,J),a[9]||(a[9]=c(" 您的浏览器不支持视频播放 "))],8,G)):(t(),s("div",Q,[d(X,{class:"lost-image"},{default:r((()=>[d(i(B))])),_:1})]))])),_:2},1032,["src","onClick"]))]),n("div",{class:"img-title",onClick:a=>(async e=>{f.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:e.name}).then((async({value:a})=>{e.name=a,0===(await h(e)).code&&(_({type:"success",message:"编辑成功!"}),ve())})).catch((()=>{_({type:"info",message:"取消修改"})}))})(e)},C(e.name),9,R)])))),128))]),d(Be,{"current-page":ee.value,"page-size":le.value,total:ae.value,style:{"justify-content":"center"},layout:"total, prev, pager, next, jumper",onCurrentChange:re,onSizeChange:ue},null,8,["current-page","page-size","total"])])),_:1},8,["modelValue"])],64)}}},[["__scopeId","data-v-02c66713"]]);export{X as S};