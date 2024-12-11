import{ad as y,ax as u,a0 as p,a1 as b,a2 as s,as as k,a5 as l,af as d,au as E,at as h,ay as g,av as n,az as c,a7 as f,aj as C,aA as V,aB as z,a9 as U,aC as w}from"./index.78b815cd.js";const x={data(){return{zona:"",zonaEditar:"",nombreCompleto:"",usuario:"",contrase\u00F1a:"",usuarios:[],nombreCompletoEditar:"",usuarioEditar:"",rolEditar:"",rol:"",contrase\u00F1aEditar:"",usuarioEditandoId:null,columnas:[{name:"nombreCompleto",label:"Nombre Completo",align:"left",field:r=>r.nombreCompleto},{name:"usuario",label:"Usuario",align:"left",field:r=>r.usuario},{name:"rol",label:"Rol",align:"left",field:r=>r.rol},{name:"acciones",label:"Acciones",align:"center"}],mostrarModalAgregar:!1,mostrarModalEditar:!1}},computed:{formValido(){return this.nombreCompleto&&this.usuario&&this.contrase\u00F1a&&this.rol},formValidoEditar(){return this.nombreCompletoEditar&&this.usuarioEditar&&this.contrase\u00F1aEditar&&this.rolEditar}},mounted(){this.cargarUsuarios()},methods:{checkZonaFieldEditar(){this.rolEditar!=="Asesor"&&(this.zonaEditar="")},checkZonaField(){this.rol!=="Asesor"&&(this.zona="")},cargarUsuarios(){fetch("https://backmultidestinos.onrender.com/user/").then(r=>r.json()).then(r=>{this.usuarios=r}).catch(r=>{console.error("Error al cargar usuarios:",r)})},submitForm(){const r="1",e={nombreCompleto:this.nombreCompleto,usuario:this.usuario,contrasena:this.contrase\u00F1a,activo:r,rol:this.rol,zona:this.zona?this.zona:""};console.log(e),fetch("https://backmultidestinos.onrender.com/user/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>i.json()).then(i=>{console.log("Respuesta del servidor:",i),u.create({message:"Usuario agregado correctamente",color:"positive"})}).catch(i=>{console.error("Error al enviar datos:",i),u.create({message:"Error al agregar usuario",color:"negative"})});const m={id:this.usuarios.length+1,nombreCompleto:this.nombreCompleto,usuario:this.usuario,rol:this.rol};this.usuarios.push(m),this.limpiarFormulario(),this.mostrarModalAgregar=!1},editarUsuario(r){this.nombreCompletoEditar=r.nombreCompleto,this.usuarioEditar=r.usuario,this.rolEditar=r.rol,this.usuarioEditandoId=r.id,this.zonaEditar=r.zona?r.zona:"",this.mostrarModalEditar=!0},editarUsuarioSubmit(){const r={id:this.usuarioEditandoId,nombreCompleto:this.nombreCompletoEditar,usuario:this.usuarioEditar,contrasena:this.contrase\u00F1aEditar,rol:this.rolEditar,zona:this.zonaEditar?this.zonaEditar:"",activo:"1"};console.log("Usuario editado:",r),fetch(`https://backmultidestinos.onrender.com/user/${r.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>{e.ok?(this.cargarUsuarios(),this.limpiarFormularioEditar(),this.mostrarModalEditar=!1,this.$q.notify({message:"Usuario editado correctamente",color:"positive"})):this.$q.notify({message:"Error al editar usuario",color:"negative"})}).catch(e=>{console.error("Error al editar usuario:",e),this.$q.notify({message:"Error al editar usuario",color:"negative"})})},eliminarUsuario(r){fetch(`https://backmultidestinos.onrender.com/user/${r}`,{method:"DELETE"}).then(e=>{e.ok?(this.usuarios=this.usuarios.filter(m=>m.id!==r),console.log("Usuario eliminado con ID:",r),u.create({message:"Usuario eliminado correctamente",color:"positive"})):(console.error("Error al eliminar usuario con ID:",r),u.create({message:"Error al eliminar usuario",color:"negative"}))}).catch(e=>{console.error("Error al eliminar usuario:",e),u.create({message:"Error al eliminar usuario",color:"negative"})})},limpiarFormulario(){this.nombreCompleto="",this.usuario="",this.contrase\u00F1a="",this.rol=""},limpiarFormularioEditar(){this.nombreCompletoEditar="",this.usuarioEditar="",this.contrase\u00F1aEditar="",this.rol="",this.usuarioEditandoId=null}}},A={class:"row justify-end q-mt-md"},S={class:"row justify-end q-mt-md"};function q(r,e,m,i,a,t){return p(),b(k,{class:"q-pa-md"},{default:s(()=>[l(d,{onClick:e[0]||(e[0]=o=>a.mostrarModalAgregar=!0),label:"Agregar Usuario",class:"q-mb-md",color:"primary"}),l(V,{modelValue:a.mostrarModalAgregar,"onUpdate:modelValue":e[6]||(e[6]=o=>a.mostrarModalAgregar=o),"content-css":"max-width: 400px;"},{default:s(()=>[l(E,null,{default:s(()=>[l(h,{class:"row items-center q-pa-md"},{default:s(()=>[l(g,{onSubmit:t.submitForm},{default:s(()=>[l(n,{label:"Nombre completo",modelValue:a.nombreCompleto,"onUpdate:modelValue":e[1]||(e[1]=o=>a.nombreCompleto=o),rules:[o=>!!o||"El nombre completo es obligatorio"]},null,8,["modelValue","rules"]),l(n,{label:"Usuario",modelValue:a.usuario,"onUpdate:modelValue":e[2]||(e[2]=o=>a.usuario=o),rules:[o=>!!o||"El usuario es obligatorio"]},null,8,["modelValue","rules"]),l(n,{label:"Contrase\xF1a",modelValue:a.contrase\u00F1a,"onUpdate:modelValue":e[3]||(e[3]=o=>a.contrase\u00F1a=o),type:"password",rules:[o=>!!o||"La contrase\xF1a es obligatoria"]},null,8,["modelValue","rules"]),l(c,{label:"Rol",modelValue:a.rol,"onUpdate:modelValue":e[4]||(e[4]=o=>a.rol=o),options:["administrador","Comercial 1","Comercial 2","Contable","Supervisor","Asesor"],rules:[o=>!!o||"El rol es obligatorio"],onInput:t.checkZonaField},null,8,["modelValue","rules","onInput"]),a.rol==="Asesor"?(p(),b(c,{key:0,label:"Zona",modelValue:a.zona,"onUpdate:modelValue":e[5]||(e[5]=o=>a.zona=o),options:["Zona 1","Zona 2"],rules:[o=>!!o||"La zona es obligatoria"]},null,8,["modelValue","rules"])):f("",!0),C("div",A,[l(d,{type:"submit",label:"Registrar",color:"primary",disable:!t.formValido},null,8,["disable"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(V,{modelValue:a.mostrarModalEditar,"onUpdate:modelValue":e[12]||(e[12]=o=>a.mostrarModalEditar=o),"content-css":"max-width: 400px;"},{default:s(()=>[l(E,null,{default:s(()=>[l(h,{class:"row items-center q-pa-md"},{default:s(()=>[l(g,{onSubmit:t.editarUsuarioSubmit},{default:s(()=>[l(n,{label:"Nombre completo",modelValue:a.nombreCompletoEditar,"onUpdate:modelValue":e[7]||(e[7]=o=>a.nombreCompletoEditar=o),rules:[o=>!!o||"El nombre completo es obligatorio"]},null,8,["modelValue","rules"]),l(n,{label:"Usuario",modelValue:a.usuarioEditar,"onUpdate:modelValue":e[8]||(e[8]=o=>a.usuarioEditar=o),rules:[o=>!!o||"El usuario es obligatorio"]},null,8,["modelValue","rules"]),l(c,{label:"Rol",modelValue:a.rolEditar,"onUpdate:modelValue":e[9]||(e[9]=o=>a.rolEditar=o),options:["administrador","Comercial 1","Comercial 2","Contable","Supervisor","Asesor"],rules:[o=>!!o||"El rol es obligatorio"],onInput:t.checkZonaFieldEditar},null,8,["modelValue","rules","onInput"]),a.rolEditar==="Asesor"?(p(),b(c,{key:0,label:"Zona",modelValue:a.zonaEditar,"onUpdate:modelValue":e[10]||(e[10]=o=>a.zonaEditar=o),options:["Zona 1","Zona 2"],rules:[o=>!!o||"La zona es obligatoria"]},null,8,["modelValue","rules"])):f("",!0),l(n,{label:"Contrase\xF1a",modelValue:a.contrase\u00F1aEditar,"onUpdate:modelValue":e[11]||(e[11]=o=>a.contrase\u00F1aEditar=o),type:"password",rules:[o=>!!o||"La contrase\xF1a es obligatoria"]},null,8,["modelValue","rules"]),C("div",S,[l(d,{type:"submit",label:"Guardar Cambios",disable:!t.formValidoEditar},null,8,["disable"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(w,{rows:a.usuarios,columns:a.columnas,"row-key":"id",pagination:!0,class:"q-mt-md"},{"body-cell-acciones":s(o=>[l(z,{props:o},{default:s(()=>[l(d,{dense:"",color:"primary",onClick:v=>t.editarUsuario(o.row),class:"q-mx-xs"},{default:s(()=>[U("Editar")]),_:2},1032,["onClick"]),l(d,{dense:"",color:"negative",onClick:v=>t.eliminarUsuario(o.row.id),class:"q-mx-xs"},{default:s(()=>[U("Eliminar")]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})}var F=y(x,[["render",q],["__scopeId","data-v-eb4d9e4c"]]);export{F as default};
