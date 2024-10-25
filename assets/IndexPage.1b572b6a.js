import{a as v,c as H,r as d,Q as x,Y as M,k as A,h as c,aQ as F,d as J,bh as W,w as Y,bi as k,g as G,ac as K,ab as X,a0 as Z,ax as ee,a5 as m,a2 as C,av as ae,ai as r,aw as B,a6 as z,ae as te,aI as oe,aJ as ie,ay as w}from"./index.8754f26c.js";import{L as ne}from"./LocalStorage.cc80442f.js";const re={ratio:[String,Number]};function se(e,t){return v(()=>{const o=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}const le=1.7778;var ue=H({name:"QImg",props:{...re,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:le},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:o}){const f=d(e.initialRatio),h=se(e,f),i=G(),{registerTimeout:s,removeTimeout:n}=x(),{registerTimeout:_,removeTimeout:N}=x(),p=v(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),Q=v(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),l=[d(null),d(p.value)],u=d(0),S=d(!1),y=d(!1),R=v(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),D=v(()=>({width:e.width,height:e.height})),V=v(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),j=v(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function E(){if(N(),e.loadingShowDelay===0){S.value=!0;return}_(()=>{S.value=!0},e.loadingShowDelay)}function I(){N(),S.value=!1}function P({target:a}){k(i)===!1&&(n(),f.value=a.naturalHeight===0?.5:a.naturalWidth/a.naturalHeight,q(a,1))}function q(a,g){g===1e3||k(i)===!0||(a.complete===!0?$(a):s(()=>{q(a,g+1)},50))}function $(a){k(i)!==!0&&(u.value=u.value^1,l[u.value].value=null,I(),a.getAttribute("__qerror")!=="true"&&(y.value=!1),o("load",a.currentSrc||a.src))}function O(a){n(),I(),y.value=!0,l[u.value].value=Q.value,l[u.value^1].value=p.value,o("error",a)}function L(a){const g=l[a].value,b={key:"img_"+a,class:V.value,style:j.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...g};return u.value===a?Object.assign(b,{class:b.class+"current",onLoad:P,onError:O}):b.class+="loaded",c("div",{class:"q-img__container absolute-full",key:"img"+a},c("img",b))}function U(){return S.value===!1?c("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},J(t[y.value===!0?"error":"default"])):c("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[c(W,{color:e.spinnerColor,size:e.spinnerSize})])}{let a=function(){Y(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,g=>{n(),y.value=!1,g===null?(I(),l[u.value^1].value=p.value):E(),l[u.value].value=g},{immediate:!0})};M.value===!0?A(a):a()}return()=>{const a=[];return h.value!==null&&a.push(c("div",{key:"filler",style:h.value})),l[0].value!==null&&a.push(L(0)),l[1].value!==null&&a.push(L(1)),a.push(c(F,{name:"q-transition--fade"},U)),c("div",{key:"main",class:R.value,style:D.value,role:"img","aria-label":e.alt},a)}}}),ce="/assets/imgAzul.b0f2d99c.png";const T=e=>(oe("data-v-c4b2a4c8"),e=e(),ie(),e),de={class:"login-container"},ge=T(()=>r("div",{class:"login-background"},null,-1)),me={class:"login-header"},ve={class:"app-name-box"},fe={class:"app-name"},he={class:"login-body"},_e={class:"form-group"},Se=T(()=>r("label",{for:"username"},"Usuario",-1)),ye={class:"form-group"},be=T(()=>r("label",{for:"password"},"Contrase\xF1a",-1)),we={class:"login-btn-container"},pe={__name:"IndexPage",setup(e){const t=d(""),o=d(""),f=X(),h=async()=>{try{const i=await fetch("https://backmultidestinos.onrender.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:t.value,contrasena:o.value})});if(i.ok){const s=await i.text();if(s==="Inicio de sesi\xF3n exitoso"){const n=await fetch(`https://backmultidestinos.onrender.com/user/username/${t.value}`);if(n.ok){const _=await n.json();ne.set("userData",_),console.log("Datos del usuario guardados:",_),f.push("/home")}else w.create({message:"Error al obtener datos del usuario",color:"negative"})}else w.create({message:s,color:"negative"})}else w.create({message:"Usuario o contrase\xF1a incorrectos",color:"negative"})}catch(i){console.error("Error en la autenticaci\xF3n:",i),w.create({message:"Error en la autenticaci\xF3n",color:"negative"})}};return(i,s)=>(Z(),ee("div",de,[ge,m(ae,{class:"login-card"},{default:C(()=>[r("div",me,[r("div",ve,[r("h4",fe,[m(ue,{src:ce,class:"app-logo",alt:"Logo"})])])]),r("div",he,[r("div",_e,[Se,m(B,{outlined:"",modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),type:"text",id:"username",filled:"",clearable:"",autocomplete:"username",color:i.inputColor},{before:C(()=>[m(z,{name:"person"})]),_:1},8,["modelValue","color"])]),r("div",ye,[be,m(B,{outlined:"",modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=n=>o.value=n),type:"password",id:"password",filled:"",clearable:"",autocomplete:"current-password",color:i.inputColor},{before:C(()=>[m(z,{name:"lock"})]),_:1},8,["modelValue","color"])]),r("div",we,[m(te,{class:"login-btn",color:"primary",label:"Iniciar Sesi\xF3n",onClick:h,disable:t.value.trim()===""||o.value.trim()===""},null,8,["disable"])])])]),_:1})]))}};var Ce=K(pe,[["__scopeId","data-v-c4b2a4c8"]]);export{Ce as default};
