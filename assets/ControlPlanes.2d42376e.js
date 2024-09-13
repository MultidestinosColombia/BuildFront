import{ac as k,aZ as f,a0 as s,a1 as c,a2 as i,aY as N,a5 as t,ae as b,aw as x,ai as d,a_ as u,b2 as h,b3 as E,bf as P,bj as y,b4 as v,a9 as V,b5 as H,bg as p}from"./index.59c71a0d.js";import{Q as _,a as q}from"./QForm.2e982cf5.js";import{Q as A,a as m}from"./QCard.dbc26204.js";const C={data(){return{mostrarModalEditar:!1,planEditando:null,perteneceEditar:"",destinoEditar:"",nombreProgramaEditar:"",hotelesEditar:[],planEditar:"",nochesEditar:[],acomodacionEditar:[],nuevoHotel:"",nuevaNoche:"",nuevaAcomodacion:"",pertenece:"",destino:"",nombrePrograma:"",hotel:"",plan:"",noches:"",baseComisionable:"",baseTiqueta:"",acomodacion:"",fechaBloqueo:"",vigenciaInicio:null,vigenciaFinal:null,incluye:"",noIncluye:"",notas:"",planEditandoId:null,planes:[],columnas:[{name:"pertenece",label:"Pertenece",align:"left",sortable:!0,field:e=>e.pertenece},{name:"destino",label:"Destino",align:"left",sortable:!0,field:e=>e.destino},{name:"nombrePrograma",label:"Nombre del Programa",align:"left",field:e=>e.nombrePrograma},{name:"hotel",label:"Hotel",align:"left",field:e=>e.hotel},{name:"plan",label:"Plan",align:"left",field:e=>e.plan},{name:"noches",label:"Noches",align:"left",field:e=>e.noches},{name:"acomodacion",label:"Acomodaci\xF3n",align:"left",field:e=>e.acomodacion},{name:"acciones",label:"Acciones",align:"center"}],columnasHoteles:[{name:"hotel",label:"Hotel",field:"hotel"},{name:"noches",label:"Noches",field:"noches"},{name:"tipoHabitacion",label:"Tipo de Habitaci\xF3n",field:"tipoHabitacion"}],mostrarModalAgregar:!1}},computed:{formValidoEditar(){return this.perteneceEditar&&this.destinoEditar&&this.nombreProgramaEditar&&this.hotelesEditar.length>0&&this.planEditar&&this.nochesEditar.length>0&&this.acomodacionEditar.length>0}},mounted(){this.cargarPlanes()},methods:{agregarHotelEditar(){this.nuevoHotel&&this.nuevoHotel.trim()!==""&&(this.hotelesEditar.push(this.nuevoHotel.trim()),this.nuevoHotel="")},eliminarHotelEditar(e){this.hotelesEditar.splice(e,1)},agregarNocheEditar(){this.nuevaNoche&&this.nuevaNoche.trim()!==""&&(this.nochesEditar.push(this.nuevaNoche.trim()),this.nuevaNoche="")},eliminarNocheEditar(e){this.nochesEditar.splice(e,1)},agregarAcomodacionEditar(){this.nuevaAcomodacion&&this.nuevaAcomodacion.trim()!==""&&(this.acomodacionEditar.push(this.nuevaAcomodacion.trim()),this.nuevaAcomodacion="")},eliminarAcomodacionEditar(e){this.acomodacionEditar.splice(e,1)},limpiarFormularioEditar(){this.planEditando=null,this.perteneceEditar="",this.destinoEditar="",this.nombreProgramaEditar="",this.hotelEditar="",this.planEditar="",this.nochesEditar="",this.acomodacionEditar="",this.incluyeEditar="",this.noIncluyeEditar=""},editarPlanSubmit(){const e=this.hotelesEditar.join("*"),l=this.nochesEditar.join("*"),w=this.acomodacionEditar.join("*"),g={id:this.planEditando.id,pertenece:this.perteneceEditar,destino:this.destinoEditar,nombrePrograma:this.nombreProgramaEditar,hotel:e,plan:this.planEditar,noches:l,acomodacion:w,baseComisionable:this.planEditando.baseComisionable,baseTiqueta:this.planEditando.baseTiqueta,fechaBloqueo:this.planEditando.fechaBloqueo,vigenciaInicio:this.planEditando.vigenciaInicio,vigenciaFinal:this.planEditando.vigenciaFinal,incluye:this.planEditando.incluye,noIncluye:this.planEditando.noIncluye,notas:this.planEditando.notas};fetch(`https://backmultidestinos.onrender.com/planes/${g.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then(o=>{if(!o.ok)throw new Error("Error al actualizar el plan");return o.json()}).then(o=>{console.log("Plan actualizado:",o);const r=this.planes.findIndex(a=>a.id===g.id);r!==-1&&(this.planes[r]=o),this.mostrarModalEditar=!1,this.limpiarFormularioEditar(),f.create({message:"Plan actualizado correctamente",color:"positive"})}).catch(o=>{console.error("Error al actualizar plan:",o),f.create({message:"Error al actualizar el plan. Por favor, int\xE9ntalo de nuevo m\xE1s tarde.",color:"negative"})})},editarPlan(e){this.planEditando=e,this.perteneceEditar=e.pertenece,this.destinoEditar=e.destino,this.nombreProgramaEditar=e.nombrePrograma,this.hotelEditar=e.hotel,this.planEditar=e.plan,this.nochesEditar=e.noches,this.acomodacionEditar=e.acomodacion,this.incluyeEditar=e.incluye,this.noIncluyeEditar=e.noIncluye,this.hotelesEditar=e.hotel?e.hotel.split("*").map(l=>l.trim()):[],this.nochesEditar=e.noches?e.noches.split("*").map(l=>l.trim()):[],this.acomodacionEditar=e.acomodacion?e.acomodacion.split("*").map(l=>l.trim()):[],this.mostrarModalEditar=!0},cargarPlanes(){fetch("https://backmultidestinos.onrender.com/planes").then(e=>{if(!e.ok)throw new Error("Error al obtener los planes desde la API");return e.json()}).then(e=>{this.planes=e}).catch(e=>{console.error("Error al cargar planes:",e),f.create({message:"Error al cargar los planes. Por favor, int\xE9ntalo de nuevo m\xE1s tarde.",color:"negative"})}),this.cargarHoteles()},cargarHoteles(){fetch("https://backmultidestinos.onrender.com/hoteles").then(e=>{if(!e.ok)throw new Error("Error al obtener los hoteles desde la API");return e.json()}).then(e=>{this.hoteles=e}).catch(e=>{console.error("Error al cargar hoteles:",e),f.create({message:"Error al cargar los hoteles. Por favor, int\xE9ntalo de nuevo m\xE1s tarde.",color:"negative"})})},verDetallesPlan(e){this.$router.push({name:"DetallesPlan",params:{id:e}})},submitForm(){},eliminarPlan(e){}}},I={class:"q-mb-md"},Q=d("label",null,"Hoteles",-1),S={class:"q-mb-md"},M=d("label",null,"Noches",-1),U={class:"q-mb-md"},j=d("label",null,"Acomodaci\xF3n",-1),F={class:"row justify-end q-mt-md"},T={class:"chips-container"},B={class:"chips-container"},D={class:"chips-container"};function K(e,l,w,g,o,r){return s(),c(N,{class:"q-pa-md"},{default:i(()=>[t(b,{onClick:l[0]||(l[0]=a=>o.mostrarModalAgregar=!0),label:"Agregar Plan",class:"q-mb-md",color:"primary"}),t(x,{modelValue:o.mostrarModalAgregar,"onUpdate:modelValue":l[1]||(l[1]=a=>o.mostrarModalAgregar=a),"content-css":"max-width: 400px;"},{default:i(()=>[t(A,null,{default:i(()=>[t(_,{class:"row items-center q-pa-md"},{default:i(()=>[t(q,{onSubmit:r.submitForm},null,8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(x,{modelValue:o.mostrarModalEditar,"onUpdate:modelValue":l[9]||(l[9]=a=>o.mostrarModalEditar=a),"content-css":"max-width: 400px;"},{default:i(()=>[t(A,null,{default:i(()=>[t(_,{class:"row items-center q-pa-md"},{default:i(()=>[t(q,{onSubmit:r.editarPlanSubmit},{default:i(()=>[t(m,{label:"Pertenece",modelValue:o.perteneceEditar,"onUpdate:modelValue":l[2]||(l[2]=a=>o.perteneceEditar=a),rules:[a=>!!a||"El campo Pertenece es obligatorio"]},null,8,["modelValue","rules"]),t(m,{label:"Destino",modelValue:o.destinoEditar,"onUpdate:modelValue":l[3]||(l[3]=a=>o.destinoEditar=a),rules:[a=>!!a||"El campo Destino es obligatorio"]},null,8,["modelValue","rules"]),t(m,{label:"Nombre del Programa",modelValue:o.nombreProgramaEditar,"onUpdate:modelValue":l[4]||(l[4]=a=>o.nombreProgramaEditar=a),rules:[a=>!!a||"El campo Nombre del Programa es obligatorio"]},null,8,["modelValue","rules"]),d("div",I,[Q,(s(!0),u(E,null,h(o.hotelesEditar,a=>(s(),c(p,{key:a,removable:"",onRemove:n=>r.eliminarHotelEditar(a),label:a,class:"q-ma-xs",color:"primary","text-color":"white"},null,8,["onRemove","label"]))),128)),t(m,{modelValue:o.nuevoHotel,"onUpdate:modelValue":l[5]||(l[5]=a=>o.nuevoHotel=a),placeholder:"Agregar hotel",dense:"",outlined:"",onKeyup:P(y(r.agregarHotelEditar,["prevent"]),["enter"])},null,8,["modelValue","onKeyup"])]),d("div",S,[M,(s(!0),u(E,null,h(o.nochesEditar,a=>(s(),c(p,{key:a,removable:"",onRemove:n=>r.eliminarNocheEditar(a),label:a,class:"q-ma-xs",color:"primary","text-color":"white"},null,8,["onRemove","label"]))),128)),t(m,{modelValue:o.nuevaNoche,"onUpdate:modelValue":l[6]||(l[6]=a=>o.nuevaNoche=a),placeholder:"Agregar noche",dense:"",outlined:"",onKeyup:P(y(r.agregarNocheEditar,["prevent"]),["enter"])},null,8,["modelValue","onKeyup"])]),d("div",U,[j,(s(!0),u(E,null,h(o.acomodacionEditar,a=>(s(),c(p,{key:a,removable:"",onRemove:n=>r.eliminarAcomodacionEditar(a),label:a,class:"q-ma-xs",color:"primary","text-color":"white"},null,8,["onRemove","label"]))),128)),t(m,{modelValue:o.nuevaAcomodacion,"onUpdate:modelValue":l[7]||(l[7]=a=>o.nuevaAcomodacion=a),placeholder:"Agregar acomodaci\xF3n",dense:"",outlined:"",onKeyup:P(y(r.agregarAcomodacionEditar,["prevent"]),["enter"])},null,8,["modelValue","onKeyup"])]),t(m,{label:"Plan",modelValue:o.planEditar,"onUpdate:modelValue":l[8]||(l[8]=a=>o.planEditar=a),rules:[a=>!!a||"El campo Plan es obligatorio"]},null,8,["modelValue","rules"]),d("div",F,[t(b,{type:"submit",label:"Guardar Cambios",color:"primary",disable:!r.formValidoEditar},null,8,["disable"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(H,{rows:o.planes,columns:o.columnas,"row-key":"id",pagination:!0,class:"q-mt-md"},{"body-cell-hotel":i(a=>[t(v,{props:a},{default:i(()=>[d("div",T,[(s(!0),u(E,null,h(a.row.hotel.split("*"),n=>(s(),c(p,{key:n,label:n.trim(),class:"q-mb-xs",outline:""},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-noches":i(a=>[t(v,{props:a},{default:i(()=>[d("div",B,[(s(!0),u(E,null,h(a.row.noches.split("*"),n=>(s(),c(p,{key:n,label:n.trim(),class:"q-mb-xs",outline:""},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-acomodacion":i(a=>[t(v,{props:a},{default:i(()=>[d("div",D,[(s(!0),u(E,null,h(a.row.acomodacion.split("*"),n=>(s(),c(p,{key:n,label:n.trim(),class:"q-mb-xs",outline:""},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-acciones":i(a=>[t(v,{props:a},{default:i(()=>[t(b,{dense:"",color:"primary",onClick:n=>r.editarPlan(a.row),class:"q-mx-xs"},{default:i(()=>[V("Editar")]),_:2},1032,["onClick"]),t(b,{dense:"",color:"negative",onClick:n=>r.eliminarPlan(a.row.id),class:"q-mx-xs"},{default:i(()=>[V("Eliminar")]),_:2},1032,["onClick"]),t(b,{dense:"",color:"info",onClick:n=>r.verDetallesPlan(a.row.id),class:"q-mx-xs"},{default:i(()=>[V(" Ver Detalles ")]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})}var J=k(C,[["render",K]]);export{J as default};
