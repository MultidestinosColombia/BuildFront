import{a2 as b,r as u,a0 as k,k as w,a4 as I,az as x,a9 as e,ag as V,a7 as a,ae as p,a6 as v,aw as P,ay as g,a8 as B,ak as C,al as N,aA as i,a1 as S}from"./index.344a8271.js";var T="/assets/presentacion.bb216f1d.mp4";const n=c=>(C("data-v-2cd01a53"),c=c(),N(),c),U={class:"login-container"},D={class:"video-background"},E=n(()=>e("source",{src:T,type:"video/mp4"},null,-1)),Q=n(()=>e("div",{class:"video-overlay"},null,-1)),M=n(()=>e("div",{class:"contenido"},null,-1)),j=n(()=>e("div",{class:"login-header"},[e("h2",{class:"login-title"},"Bienvenido"),e("p",{class:"login-subtitle"},"Ingresa tus credenciales para continuar")],-1)),A={class:"login-body"},O={class:"form-group"},R=n(()=>e("label",{for:"username"},"Usuario",-1)),z={class:"form-group"},H=n(()=>e("label",{for:"password"},"Contrase\xF1a",-1)),J={class:"login-btn-container"},L={__name:"IndexPage",setup(c){const l=u(""),d=u(""),f=k(),o=u(null),m=u(!0),h=async()=>{try{const s=await fetch("https://backmultidestinos.onrender.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usuario:l.value,contrasena:d.value})});if(s.ok)if(await s.text()==="Inicio de sesi\xF3n exitoso"){i.create({message:"Iniciando sesi\xF3n...",color:"info",position:"top",timeout:1e3});const t=await fetch(`https://backmultidestinos.onrender.com/user/username/${l.value}`);if(t.ok){const _=await t.json();S.set("userData",_),console.log("Datos del usuario guardados:",_),f.push("/home")}else i.create({message:"Error al obtener datos del usuario",color:"negative"})}else i.create({message:"Usuario o contrase\xF1a incorrectos",color:"negative"});else i.create({message:"Usuario o contrase\xF1a incorrectos",color:"negative"})}catch(s){console.error("Error en la autenticaci\xF3n:",s),i.create({message:"Error en la autenticaci\xF3n",color:"negative"})}},y=()=>{o.value&&(o.value.muted=!o.value.muted,m.value=o.value.muted)};return w(()=>{o.value&&(o.value.muted=!0,o.value.play())}),(s,r)=>(I(),x("div",U,[e("div",D,[e("video",{ref_key:"videoPlayer",ref:o,loop:""},[E,V(" Tu navegador no soporta videos en HTML5. ")],512),Q]),e("button",{class:"video-toggle",onClick:y},[a(p,{name:m.value?"volume_off":"volume_up"},null,8,["name"])]),M,a(P,{class:"login-card"},{default:v(()=>[j,e("div",A,[e("div",O,[R,a(g,{outlined:"",modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=t=>l.value=t),type:"text",id:"username",filled:"",clearable:"",autocomplete:"username",class:"custom-input"},{prepend:v(()=>[a(p,{name:"person"})]),_:1},8,["modelValue"])]),e("div",z,[H,a(g,{outlined:"",modelValue:d.value,"onUpdate:modelValue":r[1]||(r[1]=t=>d.value=t),type:s.isPwdVisible?"text":"password",id:"password",filled:"",clearable:"",autocomplete:"current-password",class:"custom-input"},{prepend:v(()=>[a(p,{name:"lock"})]),_:1},8,["modelValue","type"])]),e("div",J,[a(B,{class:"login-btn",color:"primary",label:"Iniciar Sesi\xF3n",onClick:h,disable:l.value.trim()===""||d.value.trim()===""},null,8,["disable"])])])]),_:1})]))}};var q=b(L,[["__scopeId","data-v-2cd01a53"]]);export{q as default};
