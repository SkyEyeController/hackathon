/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{a as e,l as s,N as a,o,c as t,e as l,w as r,b as i,g as n,D as p,j as c,H as d}from"./087AC4D233B64EB0index.js";/* empty css                       *//* empty css                        */import{i as u,a as m}from"./087AC4D233B64EB0image.js";import{_ as B}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";import{E as j}from"./087AC4D233B64EB0index26.js";import"./087AC4D233B64EB0index27.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0isEqual.js";const f={class:"center-container"},_={class:"center-content"},C=B(Object.assign({name:"UploadCommon"},{__name:"dataupload",emits:["on-success"],setup(B,{emit:C}){const D=C,g=e("/api"),A=s(),E=e(!1),v=e=>{E.value=!0;const s=e.size/1024/1024<.5,a=e.size/1024/1024<5,o=u(e.type),t=m(e.type);let l=!0;return o||t||(c.error("上传图片只能是 jpg,png,svg,webp 格式, 上传视频只能是 mp4,webm 格式!"),E.value=!1,l=!1),!a&&o&&(c.error("上传视频大小不能超过 5MB"),E.value=!1,l=!1),!s&&t&&(c.error("未压缩的上传图片大小不能超过 500KB，请使用压缩上传"),E.value=!1,l=!1),console.log("upload file check result: ",l),l},b=e=>{const{data:s}=e;s.file&&D("on-success",s.file.url)},x=()=>{c({type:"error",message:"上传失败"}),E.value=!1};return(e,s)=>{const c=a("upload-filled"),u=d,m=j;return o(),t("div",f,[l(m,{class:"upload-demo",action:"".concat(g.value,"/fileUploadAndDownload/upload"),headers:{"x-token":p(A).token},"on-success":b,"before-upload":v,"on-error":x,drag:"",multiple:!1},{tip:r((()=>s[1]||(s[1]=[i("div",{class:"el-upload__tip",style:{"text-align":"center"}}," jpg/png files with a size less than 500kb ",-1)]))),default:r((()=>[i("div",_,[l(u,{class:"el-icon--upload"},{default:r((()=>[l(c)])),_:1}),s[0]||(s[0]=i("div",{class:"el-upload__text"},[n(" 拖动文件到此处 或 "),i("em",null,"点击此处")],-1))])])),_:1},8,["action","headers"])])}}}),[["__scopeId","data-v-3f4f9618"]]);export{C as default};