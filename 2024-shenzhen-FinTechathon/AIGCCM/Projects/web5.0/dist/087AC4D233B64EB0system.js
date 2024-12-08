/*! 
 Build based on gin-vue-admin 
 Time : 1730113336000 */
import{s as e,r as l,a,o as u,c as o,e as d,w as t,g as m,K as s,L as n,h as i,f as V,b as p,j as v,k as r,E as c}from"./087AC4D233B64EB0index.js";import{a as b,E as f}from"./087AC4D233B64EB0form-item.js";import{E as _,a as y}from"./087AC4D233B64EB0collapse-item.js";import{E as U}from"./087AC4D233B64EB0switch.js";/* empty css                      *//* empty css                       *//* empty css                      *//* empty css                     */import{E as g}from"./087AC4D233B64EB0input-number.js";import{E as q}from"./087AC4D233B64EB0checkbox.js";import"./087AC4D233B64EB0tag.js";import{E as h,a as w}from"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";import{a as k,s as B}from"./087AC4D233B64EB0system2.js";import{a as x}from"./087AC4D233B64EB0index20.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0index30.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0token.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0index21.js";const j={class:"system"},C={class:"mt-4"},z=Object.assign({name:"Config"},{__name:"system",setup(z){const E=l([]),A=a({system:{"iplimit-count":0,"iplimit-time":0},jwt:{},mysql:{},pgsql:{},excel:{},autocode:{},redis:{},mongo:{coll:"",options:"",database:"",username:"",password:"","min-pool-size":"","max-pool-size":"","socket-timeout-ms":"","connect-timeout-ms":"","is-zap":"",hosts:[{host:"",port:""}]},qiniu:{},"tencent-cos":{},"aliyun-oss":{},"hua-wei-obs":{},captcha:{},zap:{},local:{},email:{},timer:{detail:{}}}),D=async()=>{const e=await k();0===e.code&&(A.value=e.data.config)};D();const M=()=>{},S=async()=>{0===(await B({config:A.value})).code&&(v({type:"success",message:"配置文件设置成功"}),await D())},O=async()=>{var l;0===(await e({url:"/email/emailTest",method:"post",data:l})).code?(v({type:"success",message:"邮件发送成功"}),await D()):v({type:"error",message:"邮件发送失败"})};return(e,l)=>{const a=h,v=w,k=b,B=r,z=q,D=g,K=x,I=_,W=c,R=U,T=y,N=f;return u(),o("div",j,[d(N,{ref:"form",model:A.value,"label-width":"240px"},{default:t((()=>[d(T,{modelValue:E,"onUpdate:modelValue":l[107]||(l[107]=e=>E=e)},{default:t((()=>[d(I,{title:"系统配置",name:"1"},{default:t((()=>[d(k,{label:"环境值"},{default:t((()=>[d(v,{modelValue:A.value.system.env,"onUpdate:modelValue":l[0]||(l[0]=e=>A.value.system.env=e),style:{width:"100%"}},{default:t((()=>[d(a,{value:"public"}),d(a,{value:"develop"})])),_:1},8,["modelValue"])])),_:1}),d(k,{label:"端口值"},{default:t((()=>[d(B,{modelValue:A.value.system.addr,"onUpdate:modelValue":l[1]||(l[1]=e=>A.value.system.addr=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"数据库类型"},{default:t((()=>[d(v,{modelValue:A.value.system["db-type"],"onUpdate:modelValue":l[2]||(l[2]=e=>A.value.system["db-type"]=e),style:{width:"100%"}},{default:t((()=>[d(a,{value:"mysql"}),d(a,{value:"pgsql"})])),_:1},8,["modelValue"])])),_:1}),d(k,{label:"Oss类型"},{default:t((()=>[d(v,{modelValue:A.value.system["oss-type"],"onUpdate:modelValue":l[3]||(l[3]=e=>A.value.system["oss-type"]=e),style:{width:"100%"}},{default:t((()=>[d(a,{value:"local"}),d(a,{value:"qiniu"}),d(a,{value:"tencent-cos"}),d(a,{value:"aliyun-oss"}),d(a,{value:"huawei-obs"})])),_:1},8,["modelValue"])])),_:1}),d(k,{label:"多点登录拦截"},{default:t((()=>[d(z,{modelValue:A.value.system["use-multipoint"],"onUpdate:modelValue":l[4]||(l[4]=e=>A.value.system["use-multipoint"]=e)},{default:t((()=>l[108]||(l[108]=[m("开启")]))),_:1},8,["modelValue"])])),_:1}),d(k,{label:"开启redis"},{default:t((()=>[d(z,{modelValue:A.value.system["use-redis"],"onUpdate:modelValue":l[5]||(l[5]=e=>A.value.system["use-redis"]=e)},{default:t((()=>l[109]||(l[109]=[m("开启")]))),_:1},8,["modelValue"])])),_:1}),d(k,{label:"限流次数"},{default:t((()=>[d(D,{modelValue:A.value.system["iplimit-count"],"onUpdate:modelValue":l[6]||(l[6]=e=>A.value.system["iplimit-count"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"限流时间"},{default:t((()=>[d(D,{modelValue:A.value.system["iplimit-time"],"onUpdate:modelValue":l[7]||(l[7]=e=>A.value.system["iplimit-time"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(K,{content:"请修改完成后，注意一并修改前端env环境下的VITE_BASE_PATH",placement:"top-start"},{default:t((()=>[d(k,{label:"全局路由前缀"},{default:t((()=>[d(B,{modelValue:A.value.system["router-prefix"],"onUpdate:modelValue":l[8]||(l[8]=e=>A.value.system["router-prefix"]=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(I,{title:"jwt签名",name:"2"},{default:t((()=>[d(k,{label:"jwt签名"},{default:t((()=>[d(B,{modelValue:A.value.jwt["signing-key"],"onUpdate:modelValue":l[9]||(l[9]=e=>A.value.jwt["signing-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"有效期"},{default:t((()=>[d(B,{modelValue:A.value.jwt["expires-time"],"onUpdate:modelValue":l[10]||(l[10]=e=>A.value.jwt["expires-time"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"缓冲期"},{default:t((()=>[d(B,{modelValue:A.value.jwt["buffer-time"],"onUpdate:modelValue":l[11]||(l[11]=e=>A.value.jwt["buffer-time"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"签发者"},{default:t((()=>[d(B,{modelValue:A.value.jwt.issuer,"onUpdate:modelValue":l[12]||(l[12]=e=>A.value.jwt.issuer=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(I,{title:"Zap日志配置",name:"3"},{default:t((()=>[d(k,{label:"级别"},{default:t((()=>[d(B,{modelValue:A.value.zap.level,"onUpdate:modelValue":l[13]||(l[13]=e=>A.value.zap.level=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"输出"},{default:t((()=>[d(B,{modelValue:A.value.zap.format,"onUpdate:modelValue":l[14]||(l[14]=e=>A.value.zap.format=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志前缀"},{default:t((()=>[d(B,{modelValue:A.value.zap.prefix,"onUpdate:modelValue":l[15]||(l[15]=e=>A.value.zap.prefix=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志文件夹"},{default:t((()=>[d(B,{modelValue:A.value.zap.director,"onUpdate:modelValue":l[16]||(l[16]=e=>A.value.zap.director=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"编码级"},{default:t((()=>[d(B,{modelValue:A.value.zap["encode-level"],"onUpdate:modelValue":l[17]||(l[17]=e=>A.value.zap["encode-level"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"栈名"},{default:t((()=>[d(B,{modelValue:A.value.zap["stacktrace-key"],"onUpdate:modelValue":l[18]||(l[18]=e=>A.value.zap["stacktrace-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志留存时间(默认以天为单位)"},{default:t((()=>[d(B,{modelValue:A.value.zap["max-age"],"onUpdate:modelValue":l[19]||(l[19]=e=>A.value.zap["max-age"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"显示行"},{default:t((()=>[d(z,{modelValue:A.value.zap["show-line"],"onUpdate:modelValue":l[20]||(l[20]=e=>A.value.zap["show-line"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"输出控制台"},{default:t((()=>[d(z,{modelValue:A.value.zap["log-in-console"],"onUpdate:modelValue":l[21]||(l[21]=e=>A.value.zap["log-in-console"]=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(I,{title:"Redis admin数据库配置",name:"4"},{default:t((()=>[d(k,{label:"库"},{default:t((()=>[d(B,{modelValue:A.value.redis.db,"onUpdate:modelValue":l[22]||(l[22]=e=>A.value.redis.db=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"地址"},{default:t((()=>[d(B,{modelValue:A.value.redis.addr,"onUpdate:modelValue":l[23]||(l[23]=e=>A.value.redis.addr=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"密码"},{default:t((()=>[d(B,{modelValue:A.value.redis.password,"onUpdate:modelValue":l[24]||(l[24]=e=>A.value.redis.password=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(I,{title:"Mongo 数据库配置",name:"14"},{default:t((()=>[d(k,{label:"collection name(表名,一般不写)"},{default:t((()=>[d(B,{modelValue:A.value.mongo.coll,"onUpdate:modelValue":l[25]||(l[25]=e=>A.value.mongo.coll=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"mongodb options"},{default:t((()=>[d(B,{modelValue:A.value.mongo.options,"onUpdate:modelValue":l[26]||(l[26]=e=>A.value.mongo.options=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"database name(数据库名)"},{default:t((()=>[d(B,{modelValue:A.value.mongo.database,"onUpdate:modelValue":l[27]||(l[27]=e=>A.value.mongo.database=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"用户名"},{default:t((()=>[d(B,{modelValue:A.value.mongo.username,"onUpdate:modelValue":l[28]||(l[28]=e=>A.value.mongo.username=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"密码"},{default:t((()=>[d(B,{modelValue:A.value.mongo.password,"onUpdate:modelValue":l[29]||(l[29]=e=>A.value.mongo.password=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"最小连接池"},{default:t((()=>[d(B,{modelValue:A.value.mongo["min-pool-size"],"onUpdate:modelValue":l[30]||(l[30]=e=>A.value.mongo["min-pool-size"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"最大连接池"},{default:t((()=>[d(B,{modelValue:A.value.mongo["max-pool-size"],"onUpdate:modelValue":l[31]||(l[31]=e=>A.value.mongo["max-pool-size"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"socket超时时间"},{default:t((()=>[d(B,{modelValue:A.value.mongo["socket-timeout-ms"],"onUpdate:modelValue":l[32]||(l[32]=e=>A.value.mongo["socket-timeout-ms"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"连接超时时间"},{default:t((()=>[d(B,{modelValue:A.value.mongo["socket-timeout-ms"],"onUpdate:modelValue":l[33]||(l[33]=e=>A.value.mongo["socket-timeout-ms"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"是否开启zap日志"},{default:t((()=>[d(z,{modelValue:A.value.mongo["is-zap"],"onUpdate:modelValue":l[34]||(l[34]=e=>A.value.mongo["is-zap"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"hosts"},{default:t((()=>[(u(!0),o(s,null,n(A.value.mongo.hosts,((e,l)=>(u(),o(s,null,[(u(!0),o(s,null,n(e,((a,m)=>(u(),o("div",{key:m},[(u(),i(k,{key:l+m,label:m},{default:t((()=>[d(B,{modelValue:e[m],"onUpdate:modelValue":l=>e[m]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"]))])))),128))],64)))),256))])),_:1})])),_:1}),d(I,{title:"邮箱配置",name:"5"},{default:t((()=>[d(k,{label:"接收者邮箱"},{default:t((()=>[d(B,{modelValue:A.value.email.to,"onUpdate:modelValue":l[35]||(l[35]=e=>A.value.email.to=e),placeholder:"可多个，以逗号分隔"},null,8,["modelValue"])])),_:1}),d(k,{label:"端口"},{default:t((()=>[d(B,{modelValue:A.value.email.port,"onUpdate:modelValue":l[36]||(l[36]=e=>A.value.email.port=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"发送者邮箱"},{default:t((()=>[d(B,{modelValue:A.value.email.from,"onUpdate:modelValue":l[37]||(l[37]=e=>A.value.email.from=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"host"},{default:t((()=>[d(B,{modelValue:A.value.email.host,"onUpdate:modelValue":l[38]||(l[38]=e=>A.value.email.host=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"是否为ssl"},{default:t((()=>[d(z,{modelValue:A.value.email["is-ssl"],"onUpdate:modelValue":l[39]||(l[39]=e=>A.value.email["is-ssl"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secret"},{default:t((()=>[d(B,{modelValue:A.value.email.secret,"onUpdate:modelValue":l[40]||(l[40]=e=>A.value.email.secret=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"测试邮件"},{default:t((()=>[d(W,{onClick:O},{default:t((()=>l[110]||(l[110]=[m("测试邮件")]))),_:1})])),_:1})])),_:1}),d(I,{title:"验证码配置",name:"7"},{default:t((()=>[d(k,{label:"字符长度"},{default:t((()=>[d(B,{modelValue:A.value.captcha["key-long"],"onUpdate:modelValue":l[41]||(l[41]=e=>A.value.captcha["key-long"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"图片宽度"},{default:t((()=>[d(B,{modelValue:A.value.captcha["img-width"],"onUpdate:modelValue":l[42]||(l[42]=e=>A.value.captcha["img-width"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"图片高度"},{default:t((()=>[d(B,{modelValue:A.value.captcha["img-height"],"onUpdate:modelValue":l[43]||(l[43]=e=>A.value.captcha["img-height"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1})])),_:1}),d(I,{title:"数据库配置",name:"9"},{default:t((()=>["mysql"===A.value.system["db-type"]?(u(),o(s,{key:0},[d(k,{label:"用户名"},{default:t((()=>[d(B,{modelValue:A.value.mysql.username,"onUpdate:modelValue":l[44]||(l[44]=e=>A.value.mysql.username=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"密码"},{default:t((()=>[d(B,{modelValue:A.value.mysql.password,"onUpdate:modelValue":l[45]||(l[45]=e=>A.value.mysql.password=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"地址"},{default:t((()=>[d(B,{modelValue:A.value.mysql.path,"onUpdate:modelValue":l[46]||(l[46]=e=>A.value.mysql.path=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"数据库"},{default:t((()=>[d(B,{modelValue:A.value.mysql["db-name"],"onUpdate:modelValue":l[47]||(l[47]=e=>A.value.mysql["db-name"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"前缀"},{default:t((()=>[d(B,{modelValue:A.value.mysql.refix,"onUpdate:modelValue":l[48]||(l[48]=e=>A.value.mysql.refix=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"复数表"},{default:t((()=>[d(R,{modelValue:A.value.mysql.singular,"onUpdate:modelValue":l[49]||(l[49]=e=>A.value.mysql.singular=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"引擎"},{default:t((()=>[d(B,{modelValue:A.value.mysql.engine,"onUpdate:modelValue":l[50]||(l[50]=e=>A.value.mysql.engine=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"maxIdleConns"},{default:t((()=>[d(B,{modelValue:A.value.mysql["max-idle-conns"],"onUpdate:modelValue":l[51]||(l[51]=e=>A.value.mysql["max-idle-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"maxOpenConns"},{default:t((()=>[d(B,{modelValue:A.value.mysql["max-open-conns"],"onUpdate:modelValue":l[52]||(l[52]=e=>A.value.mysql["max-open-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"写入日志"},{default:t((()=>[d(z,{modelValue:A.value.mysql["log-zap"],"onUpdate:modelValue":l[53]||(l[53]=e=>A.value.mysql["log-zap"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志模式"},{default:t((()=>[d(B,{modelValue:A.value.mysql["log-mode"],"onUpdate:modelValue":l[54]||(l[54]=e=>A.value.mysql["log-mode"]=e)},null,8,["modelValue"])])),_:1})],64)):V("",!0),"pgsql"===A.value.system["db-type"]?(u(),o(s,{key:1},[d(k,{label:"用户名"},{default:t((()=>[d(B,{modelValue:A.value.pgsql.username,"onUpdate:modelValue":l[55]||(l[55]=e=>A.value.pgsql.username=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"密码"},{default:t((()=>[d(B,{modelValue:A.value.pgsql.password,"onUpdate:modelValue":l[56]||(l[56]=e=>A.value.pgsql.password=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"地址"},{default:t((()=>[d(B,{modelValue:A.value.pgsql.path,"onUpdate:modelValue":l[57]||(l[57]=e=>A.value.pgsql.path=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"数据库"},{default:t((()=>[d(B,{modelValue:A.value.pgsql.dbname,"onUpdate:modelValue":l[58]||(l[58]=e=>A.value.pgsql.dbname=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"前缀"},{default:t((()=>[d(B,{modelValue:A.value.pgsql.refix,"onUpdate:modelValue":l[59]||(l[59]=e=>A.value.pgsql.refix=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"复数表"},{default:t((()=>[d(R,{modelValue:A.value.pgsql.singular,"onUpdate:modelValue":l[60]||(l[60]=e=>A.value.pgsql.singular=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"引擎"},{default:t((()=>[d(B,{modelValue:A.value.pgsql.engine,"onUpdate:modelValue":l[61]||(l[61]=e=>A.value.pgsql.engine=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"maxIdleConns"},{default:t((()=>[d(B,{modelValue:A.value.pgsql["max-idle-conns"],"onUpdate:modelValue":l[62]||(l[62]=e=>A.value.pgsql["max-idle-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"maxOpenConns"},{default:t((()=>[d(B,{modelValue:A.value.pgsql["max-open-conns"],"onUpdate:modelValue":l[63]||(l[63]=e=>A.value.pgsql["max-open-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"写入日志"},{default:t((()=>[d(z,{modelValue:A.value.pgsql["log-zap"],"onUpdate:modelValue":l[64]||(l[64]=e=>A.value.pgsql["log-zap"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志模式"},{default:t((()=>[d(B,{modelValue:A.value.pgsql["log-mode"],"onUpdate:modelValue":l[65]||(l[65]=e=>A.value.pgsql["log-mode"]=e)},null,8,["modelValue"])])),_:1})],64)):V("",!0)])),_:1}),d(I,{title:"oss配置",name:"10"},{default:t((()=>["local"===A.value.system["oss-type"]?(u(),o(s,{key:0},[l[111]||(l[111]=p("h2",null,"本地文件配置",-1)),d(k,{label:"本地文件访问路径"},{default:t((()=>[d(B,{modelValue:A.value.local.path,"onUpdate:modelValue":l[66]||(l[66]=e=>A.value.local.path=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"本地文件存储路径"},{default:t((()=>[d(B,{modelValue:A.value.local["store-path"],"onUpdate:modelValue":l[67]||(l[67]=e=>A.value.local["store-path"]=e)},null,8,["modelValue"])])),_:1})],64)):V("",!0),"qiniu"===A.value.system["oss-type"]?(u(),o(s,{key:1},[l[114]||(l[114]=p("h2",null,"qiniu上传配置",-1)),d(k,{label:"存储区域"},{default:t((()=>[d(B,{modelValue:A.value.qiniu.zone,"onUpdate:modelValue":l[68]||(l[68]=e=>A.value.qiniu.zone=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"空间名称"},{default:t((()=>[d(B,{modelValue:A.value.qiniu.bucket,"onUpdate:modelValue":l[69]||(l[69]=e=>A.value.qiniu.bucket=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"CDN加速域名"},{default:t((()=>[d(B,{modelValue:A.value.qiniu["img-path"],"onUpdate:modelValue":l[70]||(l[70]=e=>A.value.qiniu["img-path"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"是否使用https"},{default:t((()=>[d(z,{modelValue:A.value.qiniu["use-https"],"onUpdate:modelValue":l[71]||(l[71]=e=>A.value.qiniu["use-https"]=e)},{default:t((()=>l[112]||(l[112]=[m("开启")]))),_:1},8,["modelValue"])])),_:1}),d(k,{label:"accessKey"},{default:t((()=>[d(B,{modelValue:A.value.qiniu["access-key"],"onUpdate:modelValue":l[72]||(l[72]=e=>A.value.qiniu["access-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secretKey"},{default:t((()=>[d(B,{modelValue:A.value.qiniu["secret-key"],"onUpdate:modelValue":l[73]||(l[73]=e=>A.value.qiniu["secret-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"上传是否使用CDN上传加速"},{default:t((()=>[d(z,{modelValue:A.value.qiniu["use-cdn-domains"],"onUpdate:modelValue":l[74]||(l[74]=e=>A.value.qiniu["use-cdn-domains"]=e)},{default:t((()=>l[113]||(l[113]=[m("开启")]))),_:1},8,["modelValue"])])),_:1})],64)):V("",!0),"tencent-cos"===A.value.system["oss-type"]?(u(),o(s,{key:2},[l[115]||(l[115]=p("h2",null,"腾讯云COS上传配置",-1)),d(k,{label:"存储桶名称"},{default:t((()=>[d(B,{modelValue:A.value["tencent-cos"].bucket,"onUpdate:modelValue":l[75]||(l[75]=e=>A.value["tencent-cos"].bucket=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"所属地域"},{default:t((()=>[d(B,{modelValue:A.value["tencent-cos"].region,"onUpdate:modelValue":l[76]||(l[76]=e=>A.value["tencent-cos"].region=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secretID"},{default:t((()=>[d(B,{modelValue:A.value["tencent-cos"]["secret-id"],"onUpdate:modelValue":l[77]||(l[77]=e=>A.value["tencent-cos"]["secret-id"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secretKey"},{default:t((()=>[d(B,{modelValue:A.value["tencent-cos"]["secret-key"],"onUpdate:modelValue":l[78]||(l[78]=e=>A.value["tencent-cos"]["secret-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"路径前缀"},{default:t((()=>[d(B,{modelValue:A.value["tencent-cos"]["path-prefix"],"onUpdate:modelValue":l[79]||(l[79]=e=>A.value["tencent-cos"]["path-prefix"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"访问域名"},{default:t((()=>[d(B,{modelValue:A.value["tencent-cos"]["base-url"],"onUpdate:modelValue":l[80]||(l[80]=e=>A.value["tencent-cos"]["base-url"]=e)},null,8,["modelValue"])])),_:1})],64)):V("",!0),"aliyun-oss"===A.value.system["oss-type"]?(u(),o(s,{key:3},[l[116]||(l[116]=p("h2",null,"阿里云OSS上传配置",-1)),d(k,{label:"区域"},{default:t((()=>[d(B,{modelValue:A.value["aliyun-oss"].endpoint,"onUpdate:modelValue":l[81]||(l[81]=e=>A.value["aliyun-oss"].endpoint=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"accessKeyId"},{default:t((()=>[d(B,{modelValue:A.value["aliyun-oss"]["access-key-id"],"onUpdate:modelValue":l[82]||(l[82]=e=>A.value["aliyun-oss"]["access-key-id"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"accessKeySecret"},{default:t((()=>[d(B,{modelValue:A.value["aliyun-oss"]["access-key-secret"],"onUpdate:modelValue":l[83]||(l[83]=e=>A.value["aliyun-oss"]["access-key-secret"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"存储桶名称"},{default:t((()=>[d(B,{modelValue:A.value["aliyun-oss"]["bucket-name"],"onUpdate:modelValue":l[84]||(l[84]=e=>A.value["aliyun-oss"]["bucket-name"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"访问域名"},{default:t((()=>[d(B,{modelValue:A.value["aliyun-oss"]["bucket-url"],"onUpdate:modelValue":l[85]||(l[85]=e=>A.value["aliyun-oss"]["bucket-url"]=e)},null,8,["modelValue"])])),_:1})],64)):V("",!0),"huawei-obs"===A.value.system["oss-type"]?(u(),o(s,{key:4},[l[117]||(l[117]=p("h2",null,"华为云Obs上传配置",-1)),d(k,{label:"路径"},{default:t((()=>[d(B,{modelValue:A.value["hua-wei-obs"].path,"onUpdate:modelValue":l[86]||(l[86]=e=>A.value["hua-wei-obs"].path=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"存储桶名称"},{default:t((()=>[d(B,{modelValue:A.value["hua-wei-obs"].bucket,"onUpdate:modelValue":l[87]||(l[87]=e=>A.value["hua-wei-obs"].bucket=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"区域"},{default:t((()=>[d(B,{modelValue:A.value["hua-wei-obs"].endpoint,"onUpdate:modelValue":l[88]||(l[88]=e=>A.value["hua-wei-obs"].endpoint=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"accessKey"},{default:t((()=>[d(B,{modelValue:A.value["hua-wei-obs"]["access-key"],"onUpdate:modelValue":l[89]||(l[89]=e=>A.value["hua-wei-obs"]["access-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secretKey"},{default:t((()=>[d(B,{modelValue:A.value["hua-wei-obs"]["secret-key"],"onUpdate:modelValue":l[90]||(l[90]=e=>A.value["hua-wei-obs"]["secret-key"]=e)},null,8,["modelValue"])])),_:1})],64)):V("",!0)])),_:1}),d(I,{title:"Excel上传配置",name:"11"},{default:t((()=>[d(k,{label:"合成目标地址"},{default:t((()=>[d(B,{modelValue:A.value.excel.dir,"onUpdate:modelValue":l[91]||(l[91]=e=>A.value.excel.dir=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(I,{title:"自动化代码配置",name:"12"},{default:t((()=>[d(k,{label:"是否自动重启(linux)"},{default:t((()=>[d(z,{modelValue:A.value.autocode["transfer-restart"],"onUpdate:modelValue":l[92]||(l[92]=e=>A.value.autocode["transfer-restart"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"root(项目根路径)"},{default:t((()=>[d(B,{modelValue:A.value.autocode.root,"onUpdate:modelValue":l[93]||(l[93]=e=>A.value.autocode.root=e),disabled:""},null,8,["modelValue"])])),_:1}),d(k,{label:"Server(后端代码地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["transfer-restart"],"onUpdate:modelValue":l[94]||(l[94]=e=>A.value.autocode["transfer-restart"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SApi(后端api文件夹地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["server-api"],"onUpdate:modelValue":l[95]||(l[95]=e=>A.value.autocode["server-api"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SInitialize(后端Initialize文件夹)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["server-initialize"],"onUpdate:modelValue":l[96]||(l[96]=e=>A.value.autocode["server-initialize"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SModel(后端Model文件地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["server-model"],"onUpdate:modelValue":l[97]||(l[97]=e=>A.value.autocode["server-model"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SRequest(后端Request文件夹地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["server-request"],"onUpdate:modelValue":l[98]||(l[98]=e=>A.value.autocode["server-request"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SRouter(后端Router文件夹地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["server-router"],"onUpdate:modelValue":l[99]||(l[99]=e=>A.value.autocode["server-router"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SService(后端Service文件夹地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["server-service"],"onUpdate:modelValue":l[100]||(l[100]=e=>A.value.autocode["server-service"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"Web(前端文件夹地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode.web,"onUpdate:modelValue":l[101]||(l[101]=e=>A.value.autocode.web=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"WApi(后端WApi文件夹地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["web-api"],"onUpdate:modelValue":l[102]||(l[102]=e=>A.value.autocode["web-api"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"WForm(后端WForm文件夹地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["web-form"],"onUpdate:modelValue":l[103]||(l[103]=e=>A.value.autocode["web-form"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"WTable(后端WTable文件夹地址)"},{default:t((()=>[d(B,{modelValue:A.value.autocode["web-table"],"onUpdate:modelValue":l[104]||(l[104]=e=>A.value.autocode["web-table"]=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(I,{title:"Timer(定时任务)",name:"13"},{default:t((()=>[d(k,{label:"Start（是否启用）"},{default:t((()=>[d(z,{modelValue:A.value.timer.start,"onUpdate:modelValue":l[105]||(l[105]=e=>A.value.timer.start=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"Spec(CRON表达式)"},{default:t((()=>[d(B,{modelValue:A.value.timer.spec,"onUpdate:modelValue":l[106]||(l[106]=e=>A.value.timer.spec=e)},null,8,["modelValue"])])),_:1}),(u(!0),o(s,null,n(A.value.timer.detail,((e,l)=>(u(),o(s,null,[(u(!0),o(s,null,n(e,((a,m)=>(u(),o("div",{key:m},[(u(),i(k,{key:l+m,label:m},{default:t((()=>[d(B,{modelValue:e[m],"onUpdate:modelValue":l=>e[m]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"]))])))),128))],64)))),256))])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["model"]),p("div",C,[d(W,{type:"primary",onClick:S},{default:t((()=>l[118]||(l[118]=[m("立即更新")]))),_:1}),d(W,{type:"primary",onClick:M},{default:t((()=>l[119]||(l[119]=[m("重启服务（开发中）")]))),_:1})])])}}});export{z as default};
