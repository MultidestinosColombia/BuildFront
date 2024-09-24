import{ac as Q,aZ as E,a0 as h,a1 as V,a2 as n,aY as M,a5 as r,ae as b,ai as s,ag as L,a_ as g,b2 as f,b3 as _,b0 as p,a7 as S,aw as N,bf as R,b4 as x,a9 as C,b5 as K,bg as O,aa as G,bh as Y,bi as J}from"./index.234f3fd0.js";import{Q as v,a as P}from"./QForm.ff7db023.js";import{Q as q,a}from"./QCard.a09eb4a6.js";import"./LocalStorage.d88052ac.js";const H={data(){return{nuevoCorreo:"",rteFuente:"",porcentajeIva:"",rteIca:"",tipoBase:"",zonasOptions:[],zonaEditar:"",asesoresOptions:[],asesorEditar:"",zona:"",asesorCargo:"",zonas:[],usuariosPorZona:{"Zona 1":[],"Zona 2":[]},nombre:"",ciudad:"",correos:[""],direccion:"",contacto:"",telefono:"",nit:"",rnt:"",lmc:"",demas:"",primerDeposito:"",segundoDeposito:"",nombreEditar:"",ciudadEditar:"",correoEditar:[],direccionEditar:"",contactoEditar:"",telefonoEditar:"",nitEditar:"",rntEditar:"",lmcEditar:"",demasEditar:"",primerDepositoEditar:"",segundoDepositoEditar:"",rteFuenteEditar:"",porcentajeIvaEditar:"",rteIcaEditar:"",tipoBaseEditar:"",clienteEditandoId:null,clientes:[],columnas:[{name:"nombre",label:"Nombre",align:"left",field:"nombre"},{name:"ciudad",label:"Ciudad",align:"left",field:"ciudad"},{name:"correo",label:"Correo",align:"left",field:"correo"},{name:"direccion",label:"Direcci\xF3n",align:"left",field:"direccion"},{name:"contacto",label:"Contacto",align:"left",field:"contacto"},{name:"telefono",label:"Tel\xE9fono",align:"left",field:"telefono"},{name:"nit",label:"NIT",align:"left",field:"nit"},{name:"rnt",label:"RNT",align:"left",field:"rnt"},{name:"lmc",label:"LMC",align:"left",field:"lmc"},{name:"demas",label:"Dem\xE1s",align:"left",field:"demas"},{name:"primerDeposito",label:"Primer Dep\xF3sito",align:"left",field:"primerDeposito"},{name:"segundoDeposito",label:"Segundo Dep\xF3sito",align:"left",field:"segundoDeposito"}],mostrarModalAgregar:!1,mostrarModalEditar:!1}},computed:{correosArray(){return this.correoEditar.split(",").map(l=>l.trim())},formValido(){return this.nombre&&this.ciudad&&this.correo&&this.direccion&&this.telefono&&this.nit&&this.rnt&&this.lmc&&this.demas&&this.primerDeposito&&this.segundoDeposito},formValidoEditar(){return this.nombreEditar&&this.ciudadEditar&&this.correoEditar&&this.direccionEditar&&this.contactoEditar&&this.telefonoEditar&&this.nitEditar&&this.rntEditar&&this.lmcEditar&&this.demasEditar&&this.primerDepositoEditar&&this.segundoDepositoEditar}},mounted(){this.cargarZonasYUsuarios(),this.cargarClientes()},methods:{validarEntrada(l){const e=l.keyCode||l.which;e>=48&&e<=57&&l.preventDefault()},agregarCorreoEditar(){this.nuevoCorreo&&this.nuevoCorreo.trim()!==""&&(this.correoEditar?this.correoEditar+=", "+this.nuevoCorreo.trim():this.correoEditar=this.nuevoCorreo.trim(),this.nuevoCorreo="")},eliminarCorreoEditar(l){const e=this.correosArray;e.splice(l,1),this.correoEditar=e.join(", ")},agregarCorreo(){this.correos.push("")},eliminarCorreo(l){this.correos.splice(l,1)},async cargarAsesoresPorZona(){try{if(console.log("Cargando asesores por zona..."),!this.zonaEditar){console.log("No se ha seleccionado ninguna zona."),this.asesoresOptions=[];return}console.log("Zona seleccionada:",this.zonaEditar);const l=await fetch("https://backmultidestinos.onrender.com//user/zona/zona");if(!l.ok)throw new Error("Error al cargar los asesores por zona");const c=(await l.json()).filter(t=>t.zona===this.zonaEditar).map(t=>({value:t.id,label:t.nombreCompleto}));this.asesoresOptions=c,console.log("Asesores por zona cargados exitosamente:",this.asesoresOptions),this.asesorEditar=""}catch(l){console.error("Error al cargar asesores por zona:",l)}},async cargarZonasYUsuarios(){try{console.log("Cargando zonas y usuarios...");const l=await fetch("https://backmultidestinos.onrender.com/user/zona/zona");if(!l.ok)throw new Error("Error al cargar las zonas y usuarios");const e=await l.json(),i={"Zona 1":[],"Zona 2":[]};e.forEach(c=>{const t=c.zona;i[t]&&i[t].push({value:c.id,label:c.nombreCompleto})}),this.zonas=Object.keys(i),this.usuariosPorZona=i,console.log("Zonas y usuarios cargados exitosamente:",this.zonas,this.usuariosPorZona)}catch(l){console.error("Error al cargar zonas y usuarios:",l)}},cargarClientes(){fetch("https://backmultidestinos.onrender.com/cliente").then(l=>l.json()).then(l=>{const e=l.map(i=>{var c,t,m,o,d,u,I,y,z,w,U,j,k,F,B,T,A,Z;return{id:i.id,nombre:(c=i.nombre)!=null?c:"",ciudad:(t=i.ciudad)!=null?t:"",correo:(m=i.correo)!=null?m:"",direccion:(o=i.direccion)!=null?o:"",contacto:(d=i.contacto)!=null?d:"",telefono:(u=i.telefono)!=null?u:"",nit:(I=i.nit)!=null?I:"",rnt:(y=i.rnt)!=null?y:"",lmc:(z=i.lmc)!=null?z:"",demas:(w=i.demas)!=null?w:"",primerDeposito:(U=i.primerDeposito)!=null?U:"",segundoDeposito:(j=i.segundoDeposito)!=null?j:"",zona:(k=i.zona)!=null?k:"",asesor:(F=i.asesor)!=null?F:"",rteFuente:(B=i.rteFuente)!=null?B:"",porcentajeIva:(T=i.porcentajeIva)!=null?T:"",rteIca:(A=i.rteIca)!=null?A:"",tipoBase:(Z=i.tipoBase)!=null?Z:""}});console.log(e),this.clientes=e}).catch(l=>{console.error("Error al obtener los datos:",l)})},submitForm(){const l=this.zona?this.usuariosPorZona[this.zona][0].value:null,e=this.correos.join(","),i={nombre:this.nombre,ciudad:this.ciudad?this.ciudad:null,correo:e||null,direccion:this.direccion?this.direccion:null,contacto:this.contacto?this.contacto:null,telefono:this.telefono?this.telefono:null,nit:this.nit?this.nit:null,rnt:this.rnt?this.rnt:null,lmc:this.lmc,demas:this.demas,primerDeposito:this.primerDeposito?this.primerDeposito:null,segundoDeposito:this.segundoDeposito?this.segundoDeposito:null,zona:this.zona?this.zona:null,asesor:l,tipoBase:this.tipoBase,porcentajeIva:this.porcentajeIva?this.porcentajeIva:null,rteFuente:this.rteFuente?this.rteFuente:null,rteIca:this.rteIca?this.rteIca:null};console.log("newClient",i),fetch("https://backmultidestinos.onrender.com/cliente/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(c=>c.json()).then(c=>{E.create({message:"Cliente agregado correctamente",color:"positive"}),this.cargarClientes(),this.limpiarFormulario(),this.mostrarModalAgregar=!1}).catch(c=>{console.error("Error al agregar cliente:",c),E.create({message:"Error al agregar cliente",color:"negative"})})},editarCliente(l){const e=`https://backmultidestinos.onrender.com/user/${l.asesor}`;fetch(e).then(i=>i.json()).then(i=>{l.nombreCompleto=i.nombreCompleto,l.usuario=i.usuario,l.contrasena=i.contrasena,l.activo=i.activo,l.rol=i.rol,l.zona=i.zona,this.zonaEditar=l.zona,this.asesorEditar=l.nombreCompleto,this.nombreEditar=l.nombre,this.ciudadEditar=l.ciudad,this.correoEditar=l.correo,this.direccionEditar=l.direccion,this.contactoEditar=l.contacto,this.telefonoEditar=l.telefono,this.nitEditar=l.nit,this.rntEditar=l.rnt,this.lmcEditar=l.lmc,this.demasEditar=l.demas,this.primerDepositoEditar=l.primerDeposito,this.segundoDepositoEditar=l.segundoDeposito,this.rteFuenteEditar=l.rteFuente,this.porcentajeIvaEditar=l.porcentajeIva,this.rteIcaEditar=l.rteIca,this.tipoBaseEditar=l.tipoBase,this.clienteEditandoId=l.id,this.mostrarModalEditar=!0}).catch(i=>{console.error("Error al obtener la informaci\xF3n del cliente:",i)})},editarClienteSubmit(){const l=this.zonaEditar?this.usuariosPorZona[this.zonaEditar][0].value:null,e={id:this.clienteEditandoId,nombre:this.nombreEditar,ciudad:this.ciudadEditar?this.ciudadEditar:null,correo:this.correoEditar?this.correoEditar:null,direccion:this.direccionEditar?this.direccionEditar:null,contacto:this.contactoEditar?this.contactoEditar:null,telefono:this.telefonoEditar?this.telefonoEditar:null,nit:this.nitEditar?this.nitEditar:null,rnt:this.rntEditar?this.rntEditar:null,lmc:this.lmcEditar,demas:this.demasEditar,primerDeposito:this.primerDepositoEditar,segundoDeposito:this.segundoDepositoEditar,zona:this.zonaEditar?this.zonaEditar:null,rteFuente:this.rteFuenteEditar?this.rteFuenteEditar:null,porcentajeIva:this.porcentajeIvaEditar?this.porcentajeIvaEditar:null,rteIca:this.rteIcaEditar?this.rteIcaEditar:null,tipoBase:this.tipoBaseEditar?this.tipoBaseEditar:null,asesor:l};fetch(`https://backmultidestinos.onrender.com/cliente/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>{i.ok?(E.create({message:"Cliente editado correctamente",color:"positive"}),this.cargarClientes(),this.limpiarFormularioEditar(),this.mostrarModalEditar=!1):(console.error("Error al editar cliente:",i.statusText),E.create({message:"Error al editar cliente",color:"negative"}))}).catch(i=>{console.error("Error al editar cliente:",i),E.create({message:"Error al editar cliente",color:"negative"})})},eliminarCliente(l){fetch(`https://backmultidestinos.onrender.com/cliente/${l}`,{method:"DELETE"}).then(e=>{e.ok?(E.create({message:"Cliente eliminado correctamente",color:"positive"}),this.clientes=this.clientes.filter(i=>i.id!==l)):(console.error("Error al eliminar cliente:",e.statusText),E.create({message:"Error al eliminar cliente",color:"negative"}))}).catch(e=>{console.error("Error al eliminar cliente:",e),E.create({message:"Error al eliminar cliente",color:"negative"})})},limpiarFormulario(){this.nombre="",this.ciudad="",this.correo="",this.direccion="",this.telefono="",this.nit="",this.rnt="",this.lmc="",this.demas="",this.primerDeposito="",this.segundoDeposito="",this.rteFuente="",this.porcentajeIva="",this.rteIca="",this.tipoBase=""},limpiarFormularioEditar(){this.nombreEditar="",this.ciudadEditar="",this.correoEditar="",this.direccionEditar="",this.contactoEditar="",this.telefonoEditar="",this.nitEditar="",this.rntEditar="",this.lmcEditar="",this.demasEditar="",this.primerDepositoEditar="",this.segundoDepositoEditar="",this.rteFuenteEditar="",this.porcentajeIvaEditar="",this.rteIcaEditar="",this.tipoBaseEditar="",this.clienteEditandoId=null}}},D=l=>(Y("data-v-712bbed7"),l=l(),J(),l),W={class:"q-ma-md"},X={class:"q-gutter-md"},$={class:"row q-col-gutter-md"},oo={class:"col-12"},eo=D(()=>s("div",{class:"text-h6"},"Correos Electr\xF3nicos",-1)),to=D(()=>s("div",{class:"text-caption q-mb-md"}," Agrega uno o m\xE1s correos electr\xF3nicos. ",-1)),so={class:"col-12"},lo={class:"col-auto"},ro={class:"row q-col-gutter-md"},io={class:"col"},ao={class:"col"},no={class:"row q-col-gutter-md"},co={class:"col"},mo={class:"col"},uo={class:"row q-col-gutter-md"},po={class:"col"},ho={class:"col"},Eo={class:"row q-col-gutter-md"},bo={class:"col"},go={class:"col"},vo={class:"row q-col-gutter-md"},Vo={class:"col"},fo={class:"col"},_o={class:"row q-col-gutter-md"},Co={class:"col"},qo={class:"col"},Do={key:0,class:"row q-col-gutter-md"},Io={class:"col"},yo={class:"col"},zo={class:"col"},wo={class:"row q-col-gutter-md"},Uo={class:"col"},jo={class:"col"},ko={class:"row justify-end q-mt-md"},Fo={class:"q-ma-md"},Bo={class:"q-gutter-md"},To={class:"row q-col-gutter-md"},Ao={class:"col"},Zo={class:"col"},So={class:"row q-col-gutter-md"},No={class:"col"},xo={class:"col"},Oo={class:"row q-col-gutter-md"},Po={class:"col"},Qo=D(()=>s("div",{class:"col"},null,-1)),Mo={class:"row q-col-gutter-md"},Lo={class:"col"},Ro={class:"col"},Ko={class:"row q-col-gutter-md"},Go={class:"col"},Yo={class:"col"},Jo={class:"row q-col-gutter-md"},Ho={class:"col"},Wo={class:"col"},Xo={class:"row q-col-gutter-md"},$o={class:"col"},oe={class:"col"},ee={key:0,class:"row q-col-gutter-md"},te={class:"col"},se={class:"col"},le={class:"col"},re={class:"row q-col-gutter-md"},ie={class:"col"},ae={class:"col"},ne={class:"row justify-end q-mt-md"},de={class:"chips-container"},ce={class:"q-gutter-xs q-h-full q-v-center"};function me(l,e,i,c,t,m){return h(),V(M,{class:"q-pa-md"},{default:n(()=>[r(b,{onClick:e[0]||(e[0]=o=>t.mostrarModalAgregar=!0),label:"Agregar Cliente",class:"q-mb-md",color:"primary"}),r(N,{modelValue:t.mostrarModalAgregar,"onUpdate:modelValue":e[18]||(e[18]=o=>t.mostrarModalAgregar=o),"content-css":"max-width: 900px;"},{default:n(()=>[r(q,{style:{"align-items":"center"}},{default:n(()=>[r(v,{class:"q-pa-md"},{default:n(()=>[s("div",W,[r(P,{onSubmit:m.submitForm},{default:n(()=>[s("div",X,[s("div",$,[s("div",oo,[r(q,{class:"q-pa-md q-mb-md"},{default:n(()=>[r(v,null,{default:n(()=>[eo,to]),_:1}),r(L),r(v,null,{default:n(()=>[(h(!0),g(_,null,f(t.correos,(o,d)=>(h(),g("div",{key:d,class:"row q-col-gutter-md q-mb-md"},[s("div",so,[r(a,{label:"Correo "+(d+1),modelValue:t.correos[d],"onUpdate:modelValue":u=>t.correos[d]=u,rules:[u=>!!u||"El correo es obligatorio",u=>/\S+@\S+\.\S+/.test(u)||"Correo no v\xE1lido"],outlined:"",dense:""},null,8,["label","modelValue","onUpdate:modelValue","rules"])]),s("div",lo,[r(b,{icon:"delete",color:"negative",onClick:u=>m.eliminarCorreo(d),outline:"",round:"",flat:""},null,8,["onClick"])])]))),128)),r(b,{label:"Agregar otro correo",onClick:m.agregarCorreo,color:"primary",outline:"",round:"",class:"full-width"},null,8,["onClick"])]),_:1})]),_:1})])]),s("div",ro,[s("div",io,[r(a,{label:"Nombre",modelValue:t.nombre,"onUpdate:modelValue":e[1]||(e[1]=o=>t.nombre=o),rules:[o=>!!o||"El nombre es obligatorio"],class:"q-mb-md"},null,8,["modelValue","rules"])]),s("div",ao,[r(a,{label:"Contacto",modelValue:t.contacto,"onUpdate:modelValue":e[2]||(e[2]=o=>t.contacto=o),class:"q-mb-md",onKeypress:m.validarEntrada},null,8,["modelValue","onKeypress"])])]),s("div",no,[s("div",co,[r(a,{label:"Direcci\xF3n",modelValue:t.direccion,"onUpdate:modelValue":e[3]||(e[3]=o=>t.direccion=o),class:"q-mb-md",rules:[o=>!!o||"La direcci\xF3n es obligatoria"]},null,8,["modelValue","rules"])]),s("div",mo,[r(p,{modelValue:t.ciudad,"onUpdate:modelValue":e[4]||(e[4]=o=>t.ciudad=o),label:"Ciudad",class:"q-mb-md",options:["BOGOTA","CALI"],"emit-value":"","map-options":"",rules:[o=>!!o||"la ciudad es obligatoria"],"hide-selected":!1},null,8,["modelValue","rules"])])]),s("div",uo,[s("div",po,[r(a,{label:"Tel\xE9fono",modelValue:t.telefono,"onUpdate:modelValue":e[5]||(e[5]=o=>t.telefono=o),class:"q-mb-md"},null,8,["modelValue"])]),s("div",ho,[r(a,{label:"NIT",modelValue:t.nit,"onUpdate:modelValue":e[6]||(e[6]=o=>t.nit=o),class:"q-mb-md",rules:[o=>!!o||"El nit es obligatorio"]},null,8,["modelValue","rules"])])]),s("div",Eo,[s("div",bo,[r(a,{label:"RNT",modelValue:t.rnt,"onUpdate:modelValue":e[7]||(e[7]=o=>t.rnt=o),class:"q-mb-md"},null,8,["modelValue"])]),s("div",go,[r(a,{label:"LMC",modelValue:t.lmc,"onUpdate:modelValue":e[8]||(e[8]=o=>t.lmc=o),class:"q-mb-md",rules:[o=>!!o||"lmc es obligatorio"]},null,8,["modelValue","rules"])])]),s("div",vo,[s("div",Vo,[r(a,{label:"Dem\xE1s",modelValue:t.demas,"onUpdate:modelValue":e[9]||(e[9]=o=>t.demas=o),class:"q-mb-md",rules:[o=>!!o||"Demas es obligatorio"]},null,8,["modelValue","rules"])]),s("div",fo,[r(a,{label:"1er Dep\xF3sito",modelValue:t.primerDeposito,"onUpdate:modelValue":e[10]||(e[10]=o=>t.primerDeposito=o),class:"q-mb-md"},null,8,["modelValue"])])]),s("div",_o,[s("div",Co,[r(a,{label:"2do Dep\xF3sito",modelValue:t.segundoDeposito,"onUpdate:modelValue":e[11]||(e[11]=o=>t.segundoDeposito=o),class:"q-mb-md"},null,8,["modelValue"])]),s("div",qo,[r(p,{modelValue:t.tipoBase,"onUpdate:modelValue":e[12]||(e[12]=o=>t.tipoBase=o),label:"Tipo de Base",options:["Comisi\xF3n","Descuento"],class:"q-mb-md",rules:[o=>!!o||"tipo de base es obligatorio"]},null,8,["modelValue","rules"])])]),t.tipoBase==="Comisi\xF3n"?(h(),g("div",Do,[s("div",Io,[r(a,{type:"number",label:"Porcentaje de IVA",modelValue:t.porcentajeIva,"onUpdate:modelValue":e[13]||(e[13]=o=>t.porcentajeIva=o),class:"q-mb-md"},null,8,["modelValue"])]),s("div",yo,[r(p,{modelValue:t.rteFuente,"onUpdate:modelValue":e[14]||(e[14]=o=>t.rteFuente=o),label:"RTE Fuente",options:["10","11"],class:"q-mb-md"},null,8,["modelValue"])]),s("div",zo,[r(p,{modelValue:t.rteIca,"onUpdate:modelValue":e[15]||(e[15]=o=>t.rteIca=o),label:"RTE ICA",options:["0.966","1.4"],class:"q-mb-md"},null,8,["modelValue"])])])):S("",!0),s("div",wo,[s("div",Uo,[r(p,{modelValue:t.zona,"onUpdate:modelValue":e[16]||(e[16]=o=>t.zona=o),label:"Zona",options:t.zonas,class:"q-mb-md"},null,8,["modelValue","options"])]),s("div",jo,[r(p,{modelValue:t.asesorCargo,"onUpdate:modelValue":e[17]||(e[17]=o=>t.asesorCargo=o),label:"Asesor Cargo",options:t.usuariosPorZona[t.zona],class:"q-mb-md"},null,8,["modelValue","options"])])])]),s("div",ko,[r(b,{type:"submit",label:"Registrar",color:"primary"})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(N,{modelValue:t.mostrarModalEditar,"onUpdate:modelValue":e[37]||(e[37]=o=>t.mostrarModalEditar=o),"content-css":"max-width: 800px;"},{default:n(()=>[r(q,null,{default:n(()=>[r(v,{class:"q-pa-md"},{default:n(()=>[s("div",Fo,[r(P,{onSubmit:m.editarClienteSubmit},{default:n(()=>[s("div",Bo,[s("div",To,[s("div",Ao,[r(a,{label:"Nombre",modelValue:t.nombreEditar,"onUpdate:modelValue":e[19]||(e[19]=o=>t.nombreEditar=o),rules:[o=>!!o||"El nombre es obligatorio"],class:"q-mb-md"},null,8,["modelValue","rules"])]),s("div",Zo,[r(p,{modelValue:t.ciudadEditar,"onUpdate:modelValue":e[20]||(e[20]=o=>t.ciudadEditar=o),label:"Ciudad",class:"q-mb-md",options:["BOGOTA","CALI"],"emit-value":"","map-options":"","hide-selected":!1,rules:[o=>!!o||"La ciudad es obligatoria"]},null,8,["modelValue","rules"])])]),s("div",So,[s("div",No,[(h(!0),g(_,null,f(m.correosArray,(o,d)=>(h(),V(O,{key:d,removable:"",onRemove:u=>m.eliminarCorreoEditar(d)},{default:n(()=>[C(G(o),1)]),_:2},1032,["onRemove"]))),128)),r(a,{modelValue:t.nuevoCorreo,"onUpdate:modelValue":e[21]||(e[21]=o=>t.nuevoCorreo=o),label:"Nuevo Correo",hint:"Presiona Enter para agregar",onKeydown:R(m.agregarCorreoEditar,["enter"])},null,8,["modelValue","onKeydown"])]),s("div",xo,[r(a,{label:"Direcci\xF3n",modelValue:t.direccionEditar,"onUpdate:modelValue":e[22]||(e[22]=o=>t.direccionEditar=o),class:"q-mb-md",rules:[o=>!!o||"La direcci\xF3n es obligatoria"]},null,8,["modelValue","rules"])])]),s("div",Oo,[s("div",Po,[r(a,{label:"Contacto",modelValue:t.contactoEditar,"onUpdate:modelValue":e[23]||(e[23]=o=>t.contactoEditar=o),class:"q-mb-md"},null,8,["modelValue"])]),Qo]),s("div",Mo,[s("div",Lo,[r(a,{label:"Tel\xE9fono",modelValue:t.telefonoEditar,"onUpdate:modelValue":e[24]||(e[24]=o=>t.telefonoEditar=o),class:"q-mb-md"},null,8,["modelValue"])]),s("div",Ro,[r(a,{label:"NIT",modelValue:t.nitEditar,"onUpdate:modelValue":e[25]||(e[25]=o=>t.nitEditar=o),class:"q-mb-md",rules:[o=>!!o||"El nit es obligatorio"]},null,8,["modelValue","rules"])])]),s("div",Ko,[s("div",Go,[r(a,{label:"RNT",modelValue:t.rntEditar,"onUpdate:modelValue":e[26]||(e[26]=o=>t.rntEditar=o),class:"q-mb-md"},null,8,["modelValue"])]),s("div",Yo,[r(a,{label:"LMC",modelValue:t.lmcEditar,"onUpdate:modelValue":e[27]||(e[27]=o=>t.lmcEditar=o),class:"q-mb-md",rules:[o=>!!o||"El lmc es obligatorio"]},null,8,["modelValue","rules"])])]),s("div",Jo,[s("div",Ho,[r(a,{label:"Dem\xE1s",modelValue:t.demasEditar,"onUpdate:modelValue":e[28]||(e[28]=o=>t.demasEditar=o),class:"q-mb-md",rules:[o=>!!o||"Demas es obligatorio"]},null,8,["modelValue","rules"])]),s("div",Wo,[r(a,{label:"1er Dep\xF3sito",modelValue:t.primerDepositoEditar,"onUpdate:modelValue":e[29]||(e[29]=o=>t.primerDepositoEditar=o),class:"q-mb-md"},null,8,["modelValue"])])]),s("div",Xo,[s("div",$o,[r(a,{label:"2do Dep\xF3sito",modelValue:t.segundoDepositoEditar,"onUpdate:modelValue":e[30]||(e[30]=o=>t.segundoDepositoEditar=o),class:"q-mb-md"},null,8,["modelValue"])]),s("div",oe,[r(p,{modelValue:t.tipoBaseEditar,"onUpdate:modelValue":e[31]||(e[31]=o=>t.tipoBaseEditar=o),label:"Tipo de Base",options:["Comisi\xF3n","Descuento"],class:"q-mb-md",rules:[o=>!!o||"tipo de base es obligatorio"]},null,8,["modelValue","rules"])])]),t.tipoBaseEditar==="Comisi\xF3n"?(h(),g("div",ee,[s("div",te,[r(a,{type:"number",label:"Porcentaje de IVA",modelValue:t.porcentajeIvaEditar,"onUpdate:modelValue":e[32]||(e[32]=o=>t.porcentajeIvaEditar=o),class:"q-mb-md"},null,8,["modelValue"])]),s("div",se,[r(p,{modelValue:t.rteFuenteEditar,"onUpdate:modelValue":e[33]||(e[33]=o=>t.rteFuenteEditar=o),label:"RTE Fuente",options:[10,11],class:"q-mb-md"},null,8,["modelValue"])]),s("div",le,[r(p,{modelValue:t.rteIcaEditar,"onUpdate:modelValue":e[34]||(e[34]=o=>t.rteIcaEditar=o),label:"RTE ICA",options:["0.966","1.4"],class:"q-mb-md"},null,8,["modelValue"])])])):S("",!0),s("div",re,[s("div",ie,[r(p,{modelValue:t.zonaEditar,"onUpdate:modelValue":[e[35]||(e[35]=o=>t.zonaEditar=o),m.cargarAsesoresPorZona],label:"Zona",options:["Zona 1","Zona 2"],"emit-value":"","map-options":"","hide-selected":!1},null,8,["modelValue","onUpdate:modelValue"])]),s("div",ae,[r(p,{modelValue:t.asesorEditar,"onUpdate:modelValue":e[36]||(e[36]=o=>t.asesorEditar=o),label:"Asesor",options:t.asesoresOptions,"emit-value":"","map-options":"","hide-selected":!1},null,8,["modelValue","options"])])])]),s("div",ne,[r(b,{type:"submit",label:"Guardar Cambios",color:"primary"})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(K,{rows:t.clientes,columns:[...t.columnas,{name:"acciones",label:"Acciones",align:"center"}],"row-key":"id",pagination:!0,class:"q-mt-md"},{"body-cell-correo":n(o=>[r(x,{props:o},{default:n(()=>[s("div",de,[(h(!0),g(_,null,f(o.row.correo.split(","),(d,u)=>(h(),V(O,{key:u,label:d,class:"q-mb-xs",outline:""},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-acciones":n(o=>[r(x,{props:o,class:"fit"},{default:n(()=>[s("div",ce,[r(b,{dense:"",color:"primary",onClick:d=>m.editarCliente(o.row),class:"q-mx-xs"},{default:n(()=>[C(" Editar ")]),_:2},1032,["onClick"]),r(b,{dense:"",color:"negative",onClick:d=>m.eliminarCliente(o.row.id),class:"q-mx-xs"},{default:n(()=>[C(" Eliminar ")]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})}var be=Q(H,[["render",me],["__scopeId","data-v-712bbed7"]]);export{be as default};
