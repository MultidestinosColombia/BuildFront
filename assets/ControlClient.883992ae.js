import{af as E,M as h,N as V,O as n,P as l,W as b,Y as t,ag as g,ai as f,aj as _,R as A,aD as P,S as C,T as Q,aE as M,aF as R}from"./index.ec7fdd9e.js";import{d as L,e as v,f as p,Q as x,i as S,j as G,k as Z}from"./QPage.fdaad40d.js";import{o as K}from"./QItemLabel.4dd25b7f.js";import{Q as q,c as a}from"./QCard.c009a525.js";import{Q as N}from"./QForm.e6a6d480.js";import{_ as Y}from"./plugin-vue_export-helper.0331ce33.js";const J={data(){return{nuevoCorreo:"",rteFuente:"",porcentajeIva:"",rteIca:"",tipoBase:"",zonasOptions:[],zonaEditar:"",asesoresOptions:[],asesorEditar:"",zona:"",asesorCargo:"",zonas:[],usuariosPorZona:{"Zona 1":[],"Zona 2":[]},nombre:"",ciudad:"",correos:[""],direccion:"",telefono:"",nit:"",rnt:"",lmc:"",demas:"",primerDeposito:"",segundoDeposito:"",nombreEditar:"",ciudadEditar:"",correoEditar:[],direccionEditar:"",telefonoEditar:"",nitEditar:"",rntEditar:"",lmcEditar:"",demasEditar:"",primerDepositoEditar:"",segundoDepositoEditar:"",rteFuenteEditar:"",porcentajeIvaEditar:"",rteIcaEditar:"",tipoBaseEditar:"",clienteEditandoId:null,clientes:[],columnas:[{name:"nombre",label:"Nombre",align:"left",field:"nombre"},{name:"ciudad",label:"Ciudad",align:"left",field:"ciudad"},{name:"correo",label:"Correo",align:"left",field:"correo"},{name:"direccion",label:"Direcci\xF3n",align:"left",field:"direccion"},{name:"telefono",label:"Tel\xE9fono",align:"left",field:"telefono"},{name:"nit",label:"NIT",align:"left",field:"nit"},{name:"rnt",label:"RNT",align:"left",field:"rnt"},{name:"lmc",label:"LMC",align:"left",field:"lmc"},{name:"demas",label:"Dem\xE1s",align:"left",field:"demas"},{name:"primerDeposito",label:"Primer Dep\xF3sito",align:"left",field:"primerDeposito"},{name:"segundoDeposito",label:"Segundo Dep\xF3sito",align:"left",field:"segundoDeposito"}],mostrarModalAgregar:!1,mostrarModalEditar:!1}},computed:{correosArray(){return this.correoEditar.split(",").map(r=>r.trim())},formValido(){return this.nombre&&this.ciudad&&this.correo&&this.direccion&&this.telefono&&this.nit&&this.rnt&&this.lmc&&this.demas&&this.primerDeposito&&this.segundoDeposito},formValidoEditar(){return this.nombreEditar&&this.ciudadEditar&&this.correoEditar&&this.direccionEditar&&this.telefonoEditar&&this.nitEditar&&this.rntEditar&&this.lmcEditar&&this.demasEditar&&this.primerDepositoEditar&&this.segundoDepositoEditar}},mounted(){this.cargarZonasYUsuarios(),this.cargarClientes()},methods:{agregarCorreoEditar(){this.nuevoCorreo&&this.nuevoCorreo.trim()!==""&&(this.correoEditar?this.correoEditar+=", "+this.nuevoCorreo.trim():this.correoEditar=this.nuevoCorreo.trim(),this.nuevoCorreo="")},eliminarCorreoEditar(r){const o=this.correosArray;o.splice(r,1),this.correoEditar=o.join(", ")},agregarCorreo(){this.correos.push("")},eliminarCorreo(r){this.correos.splice(r,1)},async cargarAsesoresPorZona(){try{if(console.log("Cargando asesores por zona..."),!this.zonaEditar){console.log("No se ha seleccionado ninguna zona."),this.asesoresOptions=[];return}console.log("Zona seleccionada:",this.zonaEditar);const r=await fetch("https://backendmultidestinosexpress.onrender.com/user/zona/zona");if(!r.ok)throw new Error("Error al cargar los asesores por zona");const m=(await r.json()).filter(s=>s.zona===this.zonaEditar).map(s=>({value:s.id,label:s.nombreCompleto}));this.asesoresOptions=m,console.log("Asesores por zona cargados exitosamente:",this.asesoresOptions),this.asesorEditar=""}catch(r){console.error("Error al cargar asesores por zona:",r)}},async cargarZonasYUsuarios(){try{console.log("Cargando zonas y usuarios...");const r=await fetch("https://backendmultidestinosexpress.onrender.com/user/zona/zona");if(!r.ok)throw new Error("Error al cargar las zonas y usuarios");const o=await r.json(),i={"Zona 1":[],"Zona 2":[]};o.forEach(m=>{const s=m.zona;i[s]&&i[s].push({value:m.id,label:m.nombreCompleto})}),this.zonas=Object.keys(i),this.usuariosPorZona=i,console.log("Zonas y usuarios cargados exitosamente:",this.zonas,this.usuariosPorZona)}catch(r){console.error("Error al cargar zonas y usuarios:",r)}},cargarClientes(){fetch("https://backendmultidestinosexpress.onrender.com/cliente").then(r=>r.json()).then(r=>{const o=r.map(i=>{var m,s,c,e,d,u,D,I,z,y,w,U,j,k,F,B,T;return{id:i.id,nombre:(m=i.nombre)!=null?m:"",ciudad:(s=i.ciudad)!=null?s:"",correo:(c=i.correo)!=null?c:"",direccion:(e=i.direccion)!=null?e:"",telefono:(d=i.telefono)!=null?d:"",nit:(u=i.nit)!=null?u:"",rnt:(D=i.rnt)!=null?D:"",lmc:(I=i.lmc)!=null?I:"",demas:(z=i.demas)!=null?z:"",primerDeposito:(y=i.primerDeposito)!=null?y:"",segundoDeposito:(w=i.segundoDeposito)!=null?w:"",zona:(U=i.zona)!=null?U:"",asesor:(j=i.asesor)!=null?j:"",rteFuente:(k=i.rteFuente)!=null?k:"",porcentajeIva:(F=i.porcentajeIva)!=null?F:"",rteIca:(B=i.rteIca)!=null?B:"",tipoBase:(T=i.tipoBase)!=null?T:""}});console.log(o),this.clientes=o}).catch(r=>{console.error("Error al obtener los datos:",r)})},submitForm(){const r=this.zona?this.usuariosPorZona[this.zona][0].value:null,o=this.correos.join(","),i={nombre:this.nombre,ciudad:this.ciudad?this.ciudad:null,correo:o||null,direccion:this.direccion?this.direccion:null,telefono:this.telefono?this.telefono:null,nit:this.nit?this.nit:null,rnt:this.rnt?this.rnt:null,lmc:this.lmc,demas:this.demas,primerDeposito:this.primerDeposito?this.primerDeposito:null,segundoDeposito:this.segundoDeposito?this.segundoDeposito:null,zona:this.zona?this.zona:null,asesor:r,tipoBase:this.tipoBase,porcentajeIva:this.porcentajeIva?this.porcentajeIva:null,rteFuente:this.rteFuente?this.rteFuente:null,rteIca:this.rteIca?this.rteIca:null};console.log("newClient",i),fetch("https://backendmultidestinosexpress.onrender.com/cliente/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(m=>m.json()).then(m=>{E.create({message:"Cliente agregado correctamente",color:"positive"}),this.cargarClientes(),this.limpiarFormulario(),this.mostrarModalAgregar=!1}).catch(m=>{console.error("Error al agregar cliente:",m),E.create({message:"Error al agregar cliente",color:"negative"})})},editarCliente(r){const o=`https://backendmultidestinosexpress.onrender.com/user/${r.asesor}`;fetch(o).then(i=>i.json()).then(i=>{r.nombreCompleto=i.nombreCompleto,r.usuario=i.usuario,r.contrasena=i.contrasena,r.activo=i.activo,r.rol=i.rol,r.zona=i.zona,this.zonaEditar=r.zona,this.asesorEditar=r.nombreCompleto,this.nombreEditar=r.nombre,this.ciudadEditar=r.ciudad,this.correoEditar=r.correo,this.direccionEditar=r.direccion,this.telefonoEditar=r.telefono,this.nitEditar=r.nit,this.rntEditar=r.rnt,this.lmcEditar=r.lmc,this.demasEditar=r.demas,this.primerDepositoEditar=r.primerDeposito,this.segundoDepositoEditar=r.segundoDeposito,this.rteFuenteEditar=r.rteFuente,this.porcentajeIvaEditar=r.porcentajeIva,this.rteIcaEditar=r.rteIca,this.tipoBaseEditar=r.tipoBase,this.clienteEditandoId=r.id,this.mostrarModalEditar=!0}).catch(i=>{console.error("Error al obtener la informaci\xF3n del cliente:",i)})},editarClienteSubmit(){const r=this.zonaEditar?this.usuariosPorZona[this.zonaEditar][0].value:null,o={id:this.clienteEditandoId,nombre:this.nombreEditar,ciudad:this.ciudadEditar?this.ciudadEditar:null,correo:this.correoEditar?this.correoEditar:null,direccion:this.direccionEditar?this.direccionEditar:null,telefono:this.telefonoEditar?this.telefonoEditar:null,nit:this.nitEditar?this.nitEditar:null,rnt:this.rntEditar?this.rntEditar:null,lmc:this.lmcEditar,demas:this.demasEditar,primerDeposito:this.primerDepositoEditar,segundoDeposito:this.segundoDepositoEditar,zona:this.zonaEditar?this.zonaEditar:null,rteFuente:this.rteFuenteEditar?this.rteFuenteEditar:null,porcentajeIva:this.porcentajeIvaEditar?this.porcentajeIvaEditar:null,rteIca:this.rteIcaEditar?this.rteIcaEditar:null,tipoBase:this.tipoBaseEditar?this.tipoBaseEditar:null,asesor:r};fetch(`https://backendmultidestinosexpress.onrender.com/cliente/${o.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(i=>{i.ok?(E.create({message:"Cliente editado correctamente",color:"positive"}),this.cargarClientes(),this.limpiarFormularioEditar(),this.mostrarModalEditar=!1):(console.error("Error al editar cliente:",i.statusText),E.create({message:"Error al editar cliente",color:"negative"}))}).catch(i=>{console.error("Error al editar cliente:",i),E.create({message:"Error al editar cliente",color:"negative"})})},eliminarCliente(r){fetch(`https://backendmultidestinosexpress.onrender.com/cliente/${r}`,{method:"DELETE"}).then(o=>{o.ok?(E.create({message:"Cliente eliminado correctamente",color:"positive"}),this.clientes=this.clientes.filter(i=>i.id!==r)):(console.error("Error al eliminar cliente:",o.statusText),E.create({message:"Error al eliminar cliente",color:"negative"}))}).catch(o=>{console.error("Error al eliminar cliente:",o),E.create({message:"Error al eliminar cliente",color:"negative"})})},limpiarFormulario(){this.nombre="",this.ciudad="",this.correo="",this.direccion="",this.telefono="",this.nit="",this.rnt="",this.lmc="",this.demas="",this.primerDeposito="",this.segundoDeposito="",this.rteFuente="",this.porcentajeIva="",this.rteIca="",this.tipoBase=""},limpiarFormularioEditar(){this.nombreEditar="",this.ciudadEditar="",this.correoEditar="",this.direccionEditar="",this.telefonoEditar="",this.nitEditar="",this.rntEditar="",this.lmcEditar="",this.demasEditar="",this.primerDepositoEditar="",this.segundoDepositoEditar="",this.rteFuenteEditar="",this.porcentajeIvaEditar="",this.rteIcaEditar="",this.tipoBaseEditar="",this.clienteEditandoId=null}}},O=r=>(M("data-v-261aa303"),r=r(),R(),r),W={class:"q-ma-md"},H={class:"q-gutter-md"},X={class:"row q-col-gutter-md"},$={class:"col-12"},ee=O(()=>t("div",{class:"text-h6"},"Correos Electr\xF3nicos",-1)),oe=O(()=>t("div",{class:"text-caption q-mb-md"}," Agrega uno o m\xE1s correos electr\xF3nicos. ",-1)),se={class:"col-12"},te={class:"col-auto"},re={class:"col-12"},le={class:"row q-col-gutter-md"},ie={class:"col"},ae={class:"col"},ne={class:"row q-col-gutter-md"},de={class:"col"},me={class:"col"},ce={class:"row q-col-gutter-md"},ue={class:"col"},pe={class:"col"},he={class:"row q-col-gutter-md"},Ee={class:"col"},be={class:"col"},ge={class:"row q-col-gutter-md"},ve={class:"col"},Ve={class:"col"},fe={key:0,class:"row q-col-gutter-md"},_e={class:"col"},Ce={class:"col"},qe={class:"col"},De={class:"row q-col-gutter-md"},Ie={class:"col"},ze={class:"col"},ye={class:"row justify-end q-mt-md"},we={class:"q-ma-md"},Ue={class:"q-gutter-md"},je={class:"row q-col-gutter-md"},ke={class:"col"},Fe={class:"col"},Be={class:"row q-col-gutter-md"},Te={class:"col"},Ae={class:"col"},xe={class:"row q-col-gutter-md"},Se={class:"col"},Ze={class:"col"},Ne={class:"row q-col-gutter-md"},Oe={class:"col"},Pe={class:"col"},Qe={class:"row q-col-gutter-md"},Me={class:"col"},Re={class:"col"},Le={class:"row q-col-gutter-md"},Ge={class:"col"},Ke={class:"col"},Ye={key:0,class:"row q-col-gutter-md"},Je={class:"col"},We={class:"col"},He={class:"col"},Xe={class:"row q-col-gutter-md"},$e={class:"col"},eo={class:"col"},oo={class:"row justify-end q-mt-md"},so={class:"chips-container"},to={class:"q-gutter-xs q-h-full q-v-center"};function ro(r,o,i,m,s,c){return h(),V(L,{class:"q-pa-md"},{default:n(()=>[l(b,{onClick:o[0]||(o[0]=e=>s.mostrarModalAgregar=!0),label:"Agregar Cliente",class:"q-mb-md",color:"primary"}),l(x,{modelValue:s.mostrarModalAgregar,"onUpdate:modelValue":o[17]||(o[17]=e=>s.mostrarModalAgregar=e),"content-css":"max-width: 900px;"},{default:n(()=>[l(q,{style:{"align-items":"center"}},{default:n(()=>[l(v,{class:"q-pa-md"},{default:n(()=>[t("div",W,[l(N,{onSubmit:c.submitForm},{default:n(()=>[t("div",H,[t("div",X,[t("div",$,[l(q,{class:"q-pa-md q-mb-md"},{default:n(()=>[l(v,null,{default:n(()=>[ee,oe]),_:1}),l(K),l(v,null,{default:n(()=>[(h(!0),g(_,null,f(s.correos,(e,d)=>(h(),g("div",{key:d,class:"row q-col-gutter-md q-mb-md"},[t("div",se,[l(a,{label:"Correo "+(d+1),modelValue:s.correos[d],"onUpdate:modelValue":u=>s.correos[d]=u,rules:[u=>!!u||"El correo es obligatorio",u=>/\S+@\S+\.\S+/.test(u)||"Correo no v\xE1lido"],outlined:"",dense:""},null,8,["label","modelValue","onUpdate:modelValue","rules"])]),t("div",te,[l(b,{icon:"delete",color:"negative",onClick:u=>c.eliminarCorreo(d),outline:"",round:"",flat:""},null,8,["onClick"])])]))),128)),l(b,{label:"Agregar otro correo",onClick:c.agregarCorreo,color:"primary",outline:"",round:"",class:"full-width"},null,8,["onClick"])]),_:1})]),_:1})])]),t("div",re,[l(a,{label:"Nombre",modelValue:s.nombre,"onUpdate:modelValue":o[1]||(o[1]=e=>s.nombre=e),rules:[e=>!!e||"El nombre es obligatorio"],class:"q-mb-md"},null,8,["modelValue","rules"])]),t("div",le,[t("div",ie,[l(a,{label:"Direcci\xF3n",modelValue:s.direccion,"onUpdate:modelValue":o[2]||(o[2]=e=>s.direccion=e),class:"q-mb-md",rules:[e=>!!e||"La direcci\xF3n es obligatoria"]},null,8,["modelValue","rules"])]),t("div",ae,[l(p,{modelValue:s.ciudad,"onUpdate:modelValue":o[3]||(o[3]=e=>s.ciudad=e),label:"Ciudad",class:"q-mb-md",options:["BOGOTA","CALI"],"emit-value":"","map-options":"",rules:[e=>!!e||"la ciudad es obligatoria"],"hide-selected":!1},null,8,["modelValue","rules"])])]),t("div",ne,[t("div",de,[l(a,{label:"Tel\xE9fono",modelValue:s.telefono,"onUpdate:modelValue":o[4]||(o[4]=e=>s.telefono=e),class:"q-mb-md"},null,8,["modelValue"])]),t("div",me,[l(a,{label:"NIT",modelValue:s.nit,"onUpdate:modelValue":o[5]||(o[5]=e=>s.nit=e),class:"q-mb-md",rules:[e=>!!e||"El nit es obligatorio"]},null,8,["modelValue","rules"])])]),t("div",ce,[t("div",ue,[l(a,{label:"RNT",modelValue:s.rnt,"onUpdate:modelValue":o[6]||(o[6]=e=>s.rnt=e),class:"q-mb-md"},null,8,["modelValue"])]),t("div",pe,[l(a,{label:"LMC",modelValue:s.lmc,"onUpdate:modelValue":o[7]||(o[7]=e=>s.lmc=e),class:"q-mb-md",rules:[e=>!!e||"lmc es obligatorio"]},null,8,["modelValue","rules"])])]),t("div",he,[t("div",Ee,[l(a,{label:"Dem\xE1s",modelValue:s.demas,"onUpdate:modelValue":o[8]||(o[8]=e=>s.demas=e),class:"q-mb-md",rules:[e=>!!e||"Demas es obligatorio"]},null,8,["modelValue","rules"])]),t("div",be,[l(a,{label:"1er Dep\xF3sito",modelValue:s.primerDeposito,"onUpdate:modelValue":o[9]||(o[9]=e=>s.primerDeposito=e),class:"q-mb-md"},null,8,["modelValue"])])]),t("div",ge,[t("div",ve,[l(a,{label:"2do Dep\xF3sito",modelValue:s.segundoDeposito,"onUpdate:modelValue":o[10]||(o[10]=e=>s.segundoDeposito=e),class:"q-mb-md"},null,8,["modelValue"])]),t("div",Ve,[l(p,{modelValue:s.tipoBase,"onUpdate:modelValue":o[11]||(o[11]=e=>s.tipoBase=e),label:"Tipo de Base",options:["Comisi\xF3n","Descuento"],class:"q-mb-md",rules:[e=>!!e||"tipo de base es obligatorio"]},null,8,["modelValue","rules"])])]),s.tipoBase==="Comisi\xF3n"?(h(),g("div",fe,[t("div",_e,[l(a,{type:"number",label:"Porcentaje de IVA",modelValue:s.porcentajeIva,"onUpdate:modelValue":o[12]||(o[12]=e=>s.porcentajeIva=e),class:"q-mb-md"},null,8,["modelValue"])]),t("div",Ce,[l(p,{modelValue:s.rteFuente,"onUpdate:modelValue":o[13]||(o[13]=e=>s.rteFuente=e),label:"RTE Fuente",options:["10","11"],class:"q-mb-md"},null,8,["modelValue"])]),t("div",qe,[l(p,{modelValue:s.rteIca,"onUpdate:modelValue":o[14]||(o[14]=e=>s.rteIca=e),label:"RTE ICA",options:["0.966","1.4"],class:"q-mb-md"},null,8,["modelValue"])])])):A("",!0),t("div",De,[t("div",Ie,[l(p,{modelValue:s.zona,"onUpdate:modelValue":o[15]||(o[15]=e=>s.zona=e),label:"Zona",options:s.zonas,class:"q-mb-md"},null,8,["modelValue","options"])]),t("div",ze,[l(p,{modelValue:s.asesorCargo,"onUpdate:modelValue":o[16]||(o[16]=e=>s.asesorCargo=e),label:"Asesor Cargo",options:s.usuariosPorZona[s.zona],class:"q-mb-md"},null,8,["modelValue","options"])])])]),t("div",ye,[l(b,{type:"submit",label:"Registrar",color:"primary"})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(x,{modelValue:s.mostrarModalEditar,"onUpdate:modelValue":o[35]||(o[35]=e=>s.mostrarModalEditar=e),"content-css":"max-width: 800px;"},{default:n(()=>[l(q,null,{default:n(()=>[l(v,{class:"q-pa-md"},{default:n(()=>[t("div",we,[l(N,{onSubmit:c.editarClienteSubmit},{default:n(()=>[t("div",Ue,[t("div",je,[t("div",ke,[l(a,{label:"Nombre",modelValue:s.nombreEditar,"onUpdate:modelValue":o[18]||(o[18]=e=>s.nombreEditar=e),rules:[e=>!!e||"El nombre es obligatorio"],class:"q-mb-md"},null,8,["modelValue","rules"])]),t("div",Fe,[l(p,{modelValue:s.ciudadEditar,"onUpdate:modelValue":o[19]||(o[19]=e=>s.ciudadEditar=e),label:"Ciudad",class:"q-mb-md",options:["BOGOTA","CALI"],"emit-value":"","map-options":"","hide-selected":!1,rules:[e=>!!e||"La ciudad es obligatoria"]},null,8,["modelValue","rules"])])]),t("div",Be,[t("div",Te,[(h(!0),g(_,null,f(c.correosArray,(e,d)=>(h(),V(Z,{key:d,removable:"",onRemove:u=>c.eliminarCorreoEditar(d)},{default:n(()=>[C(Q(e),1)]),_:2},1032,["onRemove"]))),128)),l(a,{modelValue:s.nuevoCorreo,"onUpdate:modelValue":o[20]||(o[20]=e=>s.nuevoCorreo=e),label:"Nuevo Correo",hint:"Presiona Enter para agregar",onKeydown:P(c.agregarCorreoEditar,["enter"])},null,8,["modelValue","onKeydown"])]),t("div",Ae,[l(a,{label:"Direcci\xF3n",modelValue:s.direccionEditar,"onUpdate:modelValue":o[21]||(o[21]=e=>s.direccionEditar=e),class:"q-mb-md",rules:[e=>!!e||"La direcci\xF3n es obligatoria"]},null,8,["modelValue","rules"])])]),t("div",xe,[t("div",Se,[l(a,{label:"Tel\xE9fono",modelValue:s.telefonoEditar,"onUpdate:modelValue":o[22]||(o[22]=e=>s.telefonoEditar=e),class:"q-mb-md"},null,8,["modelValue"])]),t("div",Ze,[l(a,{label:"NIT",modelValue:s.nitEditar,"onUpdate:modelValue":o[23]||(o[23]=e=>s.nitEditar=e),class:"q-mb-md",rules:[e=>!!e||"El nit es obligatorio"]},null,8,["modelValue","rules"])])]),t("div",Ne,[t("div",Oe,[l(a,{label:"RNT",modelValue:s.rntEditar,"onUpdate:modelValue":o[24]||(o[24]=e=>s.rntEditar=e),class:"q-mb-md"},null,8,["modelValue"])]),t("div",Pe,[l(a,{label:"LMC",modelValue:s.lmcEditar,"onUpdate:modelValue":o[25]||(o[25]=e=>s.lmcEditar=e),class:"q-mb-md",rules:[e=>!!e||"El lmc es obligatorio"]},null,8,["modelValue","rules"])])]),t("div",Qe,[t("div",Me,[l(a,{label:"Dem\xE1s",modelValue:s.demasEditar,"onUpdate:modelValue":o[26]||(o[26]=e=>s.demasEditar=e),class:"q-mb-md",rules:[e=>!!e||"Demas es obligatorio"]},null,8,["modelValue","rules"])]),t("div",Re,[l(a,{label:"1er Dep\xF3sito",modelValue:s.primerDepositoEditar,"onUpdate:modelValue":o[27]||(o[27]=e=>s.primerDepositoEditar=e),class:"q-mb-md"},null,8,["modelValue"])])]),t("div",Le,[t("div",Ge,[l(a,{label:"2do Dep\xF3sito",modelValue:s.segundoDepositoEditar,"onUpdate:modelValue":o[28]||(o[28]=e=>s.segundoDepositoEditar=e),class:"q-mb-md"},null,8,["modelValue"])]),t("div",Ke,[l(p,{modelValue:s.tipoBaseEditar,"onUpdate:modelValue":o[29]||(o[29]=e=>s.tipoBaseEditar=e),label:"Tipo de Base",options:["Comisi\xF3n","Descuento"],class:"q-mb-md",rules:[e=>!!e||"tipo de base es obligatorio"]},null,8,["modelValue","rules"])])]),s.tipoBaseEditar==="Comisi\xF3n"?(h(),g("div",Ye,[t("div",Je,[l(a,{type:"number",label:"Porcentaje de IVA",modelValue:s.porcentajeIvaEditar,"onUpdate:modelValue":o[30]||(o[30]=e=>s.porcentajeIvaEditar=e),class:"q-mb-md"},null,8,["modelValue"])]),t("div",We,[l(p,{modelValue:s.rteFuenteEditar,"onUpdate:modelValue":o[31]||(o[31]=e=>s.rteFuenteEditar=e),label:"RTE Fuente",options:[10,11],class:"q-mb-md"},null,8,["modelValue"])]),t("div",He,[l(p,{modelValue:s.rteIcaEditar,"onUpdate:modelValue":o[32]||(o[32]=e=>s.rteIcaEditar=e),label:"RTE ICA",options:["0.966","1.4"],class:"q-mb-md"},null,8,["modelValue"])])])):A("",!0),t("div",Xe,[t("div",$e,[l(p,{modelValue:s.zonaEditar,"onUpdate:modelValue":[o[33]||(o[33]=e=>s.zonaEditar=e),c.cargarAsesoresPorZona],label:"Zona",options:["Zona 1","Zona 2"],"emit-value":"","map-options":"","hide-selected":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",eo,[l(p,{modelValue:s.asesorEditar,"onUpdate:modelValue":o[34]||(o[34]=e=>s.asesorEditar=e),label:"Asesor",options:s.asesoresOptions,"emit-value":"","map-options":"","hide-selected":!1},null,8,["modelValue","options"])])])]),t("div",oo,[l(b,{type:"submit",label:"Guardar Cambios",color:"primary"})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(G,{rows:s.clientes,columns:[...s.columnas,{name:"acciones",label:"Acciones",align:"center"}],"row-key":"id",pagination:!0,class:"q-mt-md"},{"body-cell-correo":n(e=>[l(S,{props:e},{default:n(()=>[t("div",so,[(h(!0),g(_,null,f(e.row.correo.split(","),(d,u)=>(h(),V(Z,{key:u,label:d,class:"q-mb-xs",outline:""},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-acciones":n(e=>[l(S,{props:e,class:"fit"},{default:n(()=>[t("div",to,[l(b,{dense:"",color:"primary",onClick:d=>c.editarCliente(e.row),class:"q-mx-xs"},{default:n(()=>[C(" Editar ")]),_:2},1032,["onClick"]),l(b,{dense:"",color:"negative",onClick:d=>c.eliminarCliente(e.row.id),class:"q-mx-xs"},{default:n(()=>[C(" Eliminar ")]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})}var uo=Y(J,[["render",ro],["__scopeId","data-v-261aa303"]]);export{uo as default};
