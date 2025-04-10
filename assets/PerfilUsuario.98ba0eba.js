import{i as j,bw as F,a2 as L,a0 as O,a1 as z,r as t,a4 as d,a5 as v,a6 as o,au as W,a9 as r,a7 as e,ai as A,aD as H,aw as w,av as c,ag as J,ah as N,az as X,aE as Y,aF as Z,ay as p,aG as S,N as K,a8 as m,aa as x,ax as f,aC as aa,aA as g,bx as ea,aH as la,ak as oa,al as ta}from"./index.bd5cde0f.js";function sa(){return j(F)}const ra=b=>(oa("data-v-245462c4"),b=b(),ta(),b),ia={class:"cards-container"},ua={class:"avatar-container"},na=["src"],da=["src"],ca={class:"text-h5"},ma={class:"text-caption text-grey-7"},va={class:"text-subtitle1"},pa={class:"text-caption text-grey"},fa=ra(()=>r("div",{class:"text-h5"},"Editar Perfil",-1)),ga={__name:"PerfilUsuario",setup(b){const D=sa();O();const i=z.getItem("userData")||{},k=t(i.nombreCompleto||"Usuario"),U=t(i.usuario||"usuario_default"),E=t(i.email||"Multidestos@gmail.com"),u=t(i.rol||"Usuario"),n=t(i.imagenPerfil||"https://imgs.search.brave.com/-pUIVTqW8I-PGNqZNvfunzlQC_Gl8kxUWz05wrmd-aM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbmF0/by5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDUvbXVs/dGlkZXN0aW5vcy5q/cGc"),_=t(!1),q=t(!1),I=t(""),G=["https://cdn.quasar.dev/img/avatar.png","https://i.pravatar.cc/100?img=1","https://i.pravatar.cc/100?img=2","https://i.pravatar.cc/100?img=3","https://i.pravatar.cc/100?img=4","https://i.pravatar.cc/100?img=5"],R=s=>{n.value=s;const l={...i,imagenPerfil:s};fetch(`https://backmultidestinos.onrender.com/user/${l.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(a=>{if(a.ok)z.set("userData",l),g.create({message:"Avatar actualizado",color:"positive"}),q.value=!1;else throw new Error("Error al actualizar avatar")}).catch(()=>{g.create({message:"No se pudo actualizar el avatar",color:"negative"})})},C=t(""),y=t(""),V=t(""),P=t(""),h=t(""),T=t(""),B=t(i.id||null),M=()=>{C.value=k.value,y.value=U.value,V.value=E.value,h.value=u.value,_.value=!0},Q=()=>{const s={id:B.value,nombreCompleto:C.value,email:V.value,usuario:y.value,contrasena:P.value,rol:h.value,zona:T.value||"",activo:"1",imagenPerfil:n.value};fetch(`https://backmultidestinos.onrender.com/user/${s.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(l=>{l.ok?(z.set("userData",{...i,...s}),k.value=s.nombreCompleto,U.value=s.usuario,E.value=s.email,u.value=s.rol,n.value=s.imagenPerfil,g.create({message:"Perfil actualizado correctamente",color:"positive"}),_.value=!1):g.create({message:"Error al editar usuario",color:"negative"})}).catch(l=>{console.error("Error al editar usuario:",l),g.create({message:"Error al editar usuario",color:"negative"})})},$=()=>{D.notify({message:"Esta funcionalidad est\xE1 en desarrollo",color:"blue-4",position:"bottom",icon:"info",textColor:"white",timeout:2e3})};return(s,l)=>(d(),v(W,{class:"flex flex-center page-container"},{default:o(()=>[r("div",ia,[e(w,{class:"profile-card"},{default:o(()=>[r("div",ua,[e(A,{size:"100px"},{default:o(()=>[r("img",{src:n.value,alt:"Foto de perfil"},null,8,na)]),_:1})]),e(H,{modelValue:q.value,"onUpdate:modelValue":l[1]||(l[1]=a=>q.value=a)},{default:o(()=>[e(w,{class:"q-pa-md"},{default:o(()=>[e(c,{class:"text-h6"},{default:o(()=>[J("Selecciona un avatar")]),_:1}),e(N),e(c,{class:"avatar-grid"},{default:o(()=>[(d(),X(Z,null,Y(G,a=>e(A,{key:a,size:"80px",class:"q-ma-sm cursor-pointer",style:ea({border:n.value===a?"3px solid #1976d2":"none"}),onClick:ba=>R(a)},{default:o(()=>[r("img",{src:a},null,8,da)]),_:2},1032,["style","onClick"])),64))]),_:1}),e(c,null,{default:o(()=>[e(p,{modelValue:I.value,"onUpdate:modelValue":l[0]||(l[0]=a=>I.value=a),label:"O usa una URL personalizada",outlined:"",dense:""},null,8,["modelValue"])]),_:1}),e(S,{align:"right"},{default:o(()=>[K(e(m,{flat:"",label:"Cancelar"},null,512),[[la]]),e(m,{color:"primary",label:"Guardar",onClick:Q})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(c,{class:"text-center"},{default:o(()=>[r("div",ca,x(k.value),1),r("div",ma,"@"+x(U.value),1),e(N,{class:"q-my-md"}),r("div",va,x(E.value),1),r("div",pa,x(u.value),1)]),_:1}),u.value==="administrador"?(d(),v(c,{key:0,class:"admin-options"},{default:o(()=>[e(m,{flat:"",color:"secondary",icon:"settings",label:"Configuraci\xF3n",class:"q-mb-sm",onClick:$}),e(m,{flat:"",color:"secondary",icon:"group",label:"Gesti\xF3n de Usuarios",class:"q-mb-sm",to:"/ControlUser"})]),_:1})):f("",!0),e(S,{align:"center"},{default:o(()=>[e(m,{color:"primary",label:"Editar Perfil",onClick:M})]),_:1})]),_:1}),_.value?(d(),v(w,{key:0,class:"profile-card edit-card q-pa-md"},{default:o(()=>[e(c,{class:"text-center"},{default:o(()=>[fa,e(N,{class:"q-my-md"})]),_:1}),e(c,null,{default:o(()=>[u.value==="administrador"?(d(),v(p,{key:0,modelValue:C.value,"onUpdate:modelValue":l[2]||(l[2]=a=>C.value=a),label:"Nombre completo",outlined:"",dense:"",class:"q-mb-md",rules:[a=>!!a||"Campo obligatorio"]},null,8,["modelValue","rules"])):f("",!0),e(p,{modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=a=>V.value=a),label:"Correo",outlined:"",dense:"",class:"q-mb-md",rules:[a=>!!a||"Campo obligatorio"]},null,8,["modelValue","rules"]),u.value==="administrador"?(d(),v(p,{key:1,modelValue:y.value,"onUpdate:modelValue":l[4]||(l[4]=a=>y.value=a),label:"Usuario",outlined:"",dense:"",class:"q-mb-md",rules:[a=>!!a||"Campo obligatorio"]},null,8,["modelValue","rules"])):f("",!0),e(p,{modelValue:n.value,"onUpdate:modelValue":l[5]||(l[5]=a=>n.value=a),label:"Imagen de perfil url",outlined:"",dense:"",class:"q-mb-md",rules:[a=>!!a||"Campo obligatorio"]},null,8,["modelValue","rules"]),u.value==="administrador"?(d(),v(aa,{key:2,modelValue:h.value,"onUpdate:modelValue":l[6]||(l[6]=a=>h.value=a),label:"Rol",outlined:"",dense:"",class:"q-mb-md",options:["administrador","Comercial 1","Comercial 2","Contable","Supervisor","Asesor"],rules:[a=>!!a||"El rol es obligatorio"]},null,8,["modelValue","rules"])):f("",!0),e(p,{modelValue:P.value,"onUpdate:modelValue":l[7]||(l[7]=a=>P.value=a),label:"Nueva Contrase\xF1a",outlined:"",dense:"",type:"password",class:"q-mb-md",rules:[a=>!!a||"Campo obligatorio"]},null,8,["modelValue","rules"])]),_:1}),e(S,{align:"right"},{default:o(()=>[e(m,{flat:"",label:"Cancelar",color:"negative",onClick:l[8]||(l[8]=a=>_.value=!1)}),e(m,{color:"primary",label:"Guardar",onClick:Q})]),_:1})]),_:1})):f("",!0)])]),_:1}))}};var Ca=L(ga,[["__scopeId","data-v-245462c4"]]);export{Ca as default};
