import{h as r,c as D,ak as Z,al as $,a0 as h,a1 as x,a2 as p,a5 as a,a3 as n,a6 as v,a4 as f,a8 as C,ao as B,aG as z,aH as I,ac as T,ad as N,a7 as S}from"./index.8668ee20.js";import{a as b}from"./QSelect.82c7b22d.js";import{Q as y,a as k}from"./QTable.56f24998.js";import{Q as q}from"./QInnerLoading.7c982d73.js";import{Q as P}from"./QPage.0182de65.js";import{L as A}from"./LocalStorage.98e308d7.js";import{S as d}from"./sweetalert2.esm.all.0f865825.js";import{_ as M}from"./cotizaciones.31a1374b.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-key-composition.cb357e58.js";import"./format.1b830b10.js";import"./QList.0e36c883.js";import"./selection.2e951b06.js";const L=[r("circle",{cx:"12.5",cy:"12.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"12.5",cy:"52.5",r:"12.5","fill-opacity":".5"},[r("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"52.5",cy:"12.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"52.5",cy:"52.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"92.5",cy:"12.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"92.5",cy:"52.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"12.5",cy:"92.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"52.5",cy:"92.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"92.5",cy:"92.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})])];var Q=D({name:"QSpinnerGrid",props:Z,setup(e){const{cSize:i,classes:o}=$(e);return()=>r("svg",{class:o.value,fill:"currentColor",width:i.value,height:i.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg"},L)}});const j={name:"ClientesPage",data(){return{clientes:[],loading:!1,rolUsuarioActual:null,zonas:["Zona 1","Zona 2"],usuariosPorZona:{"Zona 1":[],"Zona 2":[]},paginationZona1:{sortBy:"nombre",descending:!1,page:1,rowsPerPage:5,rowsNumber:0},paginationZona2:{sortBy:"nombre",descending:!1,page:1,rowsPerPage:5,rowsNumber:0},columnas:[{name:"nombre",label:"Nombre",align:"left",field:"nombre",sortable:!0},{name:"correo",label:"Correos",align:"left",field:"correo"},{name:"contacto",label:"Contacto",align:"left",field:"contacto"},{name:"telefono",label:"Tel\xE9fono",align:"left",field:"telefono"},{name:"nit",label:"NIT",align:"left",field:"nit"},{name:"direccion",label:"Direcci\xF3n",align:"left",field:"direccion"},{name:"acciones",label:"Acciones",align:"center",field:"acciones"}]}},computed:{clientesZona1(){return this.clientes.filter(e=>e.zona==="Zona 1")},clientesZona2(){return this.clientes.filter(e=>e.zona==="Zona 2")}},mounted(){this.inicializar()},methods:{async inicializar(){try{this.loading=!0,await this.obtenerRolUsuarioActual(),await this.cargarZonasYUsuarios(),await this.cargarClientes()}catch(e){console.error("Error al inicializar:",e),this.mostrarError("Error al cargar los datos iniciales")}finally{this.loading=!1}},async obtenerRolUsuarioActual(){const e=A.getItem("userData");if(e&&e.rol)this.rolUsuarioActual=e.rol;else throw new Error("No se encontr\xF3 el rol del usuario")},async cargarZonasYUsuarios(){try{const e=await fetch("https://backmultidestinos.onrender.com/user/zona/zona");if(!e.ok)throw new Error("Error al cargar zonas y usuarios");const i=await e.json(),o={"Zona 1":[],"Zona 2":[]};i.forEach(l=>{o[l.zona]&&o[l.zona].push({value:l.id,label:l.nombreCompleto})}),this.usuariosPorZona=o}catch(e){throw console.error("Error al cargar zonas:",e),e}},async cargarClientes(){try{const e=await fetch("https://backmultidestinos.onrender.com/cliente");if(!e.ok)throw new Error("Error al cargar clientes");const i=await e.json();this.clientes=i.map(o=>({id:o.id,nombre:o.nombre||"",ciudad:o.ciudad||"",correo:o.correo||"",direccion:o.direccion||"",contacto:o.contacto||"",telefono:o.telefono||"",nit:o.nit||"",rnt:o.rnt||"",lmc:o.lmc||"",demas:o.demas||"",primerDeposito:o.primerDeposito||"",segundoDeposito:o.segundoDeposito||"",zona:o.zona||"",asesor:o.asesor||"",rteFuente:o.rteFuente||"",porcentajeIva:o.porcentajeIva||"",rteIca:o.rteIca||"",tipoBase:o.tipoBase||""}))}catch(e){throw console.error("Error al cargar clientes:",e),e}},async mostrarModalAgregar(){const{value:e}=await d.fire({title:"\u2708\uFE0F Nuevo Cliente",html:`
          <div class="swal-form">
            <div class="form-section">
              <h4><i class="fas fa-user"></i> Informaci\xF3n Personal</h4>
              <input id="nombre" class="swal2-input" placeholder="Nombre completo" required>
              <input id="contacto" class="swal2-input" placeholder="Persona de contacto">
              <input id="telefono" class="swal2-input" placeholder="Tel\xE9fono">
            </div>

            <div class="form-section">
              <h4><i class="fas fa-envelope"></i> Correos Electr\xF3nicos</h4>
              <input id="correos" class="swal2-input" placeholder="correo1@email.com, correo2@email.com">
            </div>

            <div class="form-section">
              <h4><i class="fas fa-map-marker-alt"></i> Ubicaci\xF3n</h4>
              <select id="ciudad" class="swal2-select">
                <option value="">Seleccionar ciudad</option>
                <option value="BOGOTA">Bogot\xE1</option>
                <option value="CALI">Cali</option>
              </select>
              <input id="direccion" class="swal2-input" placeholder="Direcci\xF3n completa">
            </div>

            <div class="form-section">
              <h4><i class="fas fa-building"></i> Informaci\xF3n Empresarial</h4>
              <input id="nit" class="swal2-input" placeholder="NIT">
              <input id="rnt" class="swal2-input" placeholder="RNT">
              <input id="lmc" class="swal2-input" placeholder="LMC" required>
              <input id="demas" class="swal2-input" placeholder="Dem\xE1s" required>
            </div>

            <div class="form-section">
              <h4><i class="fas fa-money-bill"></i> Informaci\xF3n Financiera</h4>
              <input id="primerDeposito" class="swal2-input" placeholder="Primer Dep\xF3sito">
              <input id="segundoDeposito" class="swal2-input" placeholder="Segundo Dep\xF3sito">
              <select id="tipoBase" class="swal2-select">
                <option value="">Tipo de Base</option>
                <option value="Comisi\xF3n">Comisi\xF3n</option>
                <option value="Descuento">Descuento</option>
              </select>
            </div>

            <div class="form-section">
              <h4><i class="fas fa-map"></i> Zona y Asesor</h4>
              <select id="zona" class="swal2-select">
                <option value="">Seleccionar zona</option>
                <option value="Zona 1">Zona 1</option>
                <option value="Zona 2">Zona 2</option>
              </select>
            </div>
          </div>
        `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:"Crear Cliente",cancelButtonText:"Cancelar",width:"800px",customClass:{popup:"custom-swal-popup",confirmButton:"custom-swal-confirm",cancelButton:"custom-swal-cancel"},preConfirm:()=>{const i=document.getElementById("nombre").value,o=document.getElementById("lmc").value,l=document.getElementById("demas").value;return!i||!o||!l?(d.showValidationMessage("Por favor complete los campos obligatorios"),!1):{nombre:i,contacto:document.getElementById("contacto").value,telefono:document.getElementById("telefono").value,correos:document.getElementById("correos").value,ciudad:document.getElementById("ciudad").value,direccion:document.getElementById("direccion").value,nit:document.getElementById("nit").value,rnt:document.getElementById("rnt").value,lmc:o,demas:l,primerDeposito:document.getElementById("primerDeposito").value,segundoDeposito:document.getElementById("segundoDeposito").value,tipoBase:document.getElementById("tipoBase").value,zona:document.getElementById("zona").value}}});e&&await this.crearCliente(e)},async crearCliente(e){var i;try{if(this.loading=!0,!(await fetch("https://backmultidestinos.onrender.com/cliente/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,correo:e.correos,asesor:e.zona?(i=this.usuariosPorZona[e.zona][0])==null?void 0:i.value:null})})).ok)throw new Error("Error al crear cliente");await d.fire({icon:"success",title:"\xA1Cliente creado!",text:"El cliente ha sido registrado exitosamente",timer:2e3,showConfirmButton:!1}),await this.cargarClientes()}catch(o){console.error("Error al crear cliente:",o),this.mostrarError("Error al crear el cliente")}finally{this.loading=!1}},async editarCliente(e){if(!!this.verificarPermisos(["administrador"]))try{const o=await(await fetch(`https://backmultidestinos.onrender.com/user/${e.asesor}`)).json(),l=e.correo?e.correo.split(",").map(t=>t.trim()).filter(t=>t):[],u=t=>t.length===0?`
              <div class="email-field-container" data-index="0">
                <div class="input-group">
                  <input id="correo_0" class="swal2-input email-input" placeholder="Correo electr\xF3nico" value="" type="email">
                  <button type="button" class="remove-email-btn" onclick="window.removeEmailField(0)" style="display:none">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            `:t.map((s,m)=>`
            <div class="email-field-container" data-index="${m}">
              <div class="input-group">
                <input id="correo_${m}" class="swal2-input email-input" placeholder="Correo electr\xF3nico" value="${s.replace(/"/g,"&quot;")}" type="email">
                <button type="button" class="remove-email-btn" onclick="window.removeEmailField(${m})" ${t.length<=1?'style="display:none"':""}>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          `).join("");window.emailCounter=l.length>0?l.length:1,window.addEmailField=()=>{const t=document.getElementById("emails-container"),s=`
            <div class="email-field-container" data-index="${window.emailCounter}">
              <div class="input-group">
                <input id="correo_${window.emailCounter}" class="swal2-input email-input" placeholder="Correo electr\xF3nico" value="" type="email">
                <button type="button" class="remove-email-btn" onclick="window.removeEmailField(${window.emailCounter})">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          `;t.insertAdjacentHTML("beforeend",s),window.emailCounter++,window.updateRemoveButtons()},window.removeEmailField=t=>{const s=document.querySelector(`[data-index="${t}"]`);s&&(s.remove(),window.updateRemoveButtons())},window.updateRemoveButtons=()=>{const t=document.querySelectorAll(".email-field-container");document.querySelectorAll(".remove-email-btn").forEach(m=>{m.style.display=t.length>1?"flex":"none"})};const{value:c}=await d.fire({title:'<i class="fas fa-edit text-primary"></i> Editar Cliente',html:`
            <style>
              .travel-form {
                max-height: 70vh;
                overflow-y: auto;
                padding: 20px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              }

              .form-section {
                background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
                border: 1px solid #e1e8f0;
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 20px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                transition: all 0.3s ease;
              }

              .form-section:hover {
                box-shadow: 0 4px 16px rgba(0,0,0,0.12);
                transform: translateY(-2px);
              }

              .section-title {
                color: #2c5aa0;
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
                border-bottom: 2px solid #e1e8f0;
                padding-bottom: 8px;
              }

              .section-title i {
                color: #4a90e2;
                font-size: 18px;
              }

              .client-name {
                background: linear-gradient(135deg, #4a90e2, #357abd);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 700;
                font-size: 18px;
              }

              .swal2-input, .swal2-select {
                border: 2px solid #e1e8f0 !important;
                border-radius: 8px !important;
                padding: 12px 16px !important;
                font-size: 14px !important;
                transition: all 0.3s ease !important;
                background: #ffffff !important;
                margin: 8px 0 !important;
              }

              .swal2-input:focus, .swal2-select:focus {
                border-color: #4a90e2 !important;
                box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1) !important;
                outline: none !important;
              }

              .input-group {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;
              }

              .email-input {
                flex: 1;
                margin: 0 !important;
              }

              .remove-email-btn {
                background: #ff4757;
                border: none;
                border-radius: 6px;
                color: white;
                padding: 8px 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                min-width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .remove-email-btn:hover {
                background: #ff3838;
                transform: scale(1.05);
              }

              .add-email-btn {
                background: linear-gradient(135deg, #26c281, #20a66b);
                border: none;
                border-radius: 8px;
                color: white;
                padding: 10px 20px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 8px;
                margin-top: 10px;
                box-shadow: 0 2px 8px rgba(38, 194, 129, 0.3);
              }

              .add-email-btn:hover {
                background: linear-gradient(135deg, #20a66b, #1a8f5a);
                transform: translateY(-2px);
                box-shadow: 0 4px 16px rgba(38, 194, 129, 0.4);
              }

              .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
              }

              .form-full {
                grid-column: span 2;
              }

              .travel-icon {
                color: #4a90e2;
                margin-right: 8px;
              }

              @media (max-width: 768px) {
                .form-row {
                  grid-template-columns: 1fr;
                }
                .form-full {
                  grid-column: span 1;
                }
              }
            </style>

            <div class="travel-form">
              <div style="text-align: center; margin-bottom: 25px;">
                <h3 class="client-name">${e.nombre.replace(/"/g,"&quot;")}</h3>
                <p style="color: #666; font-size: 14px; margin: 5px 0;">
                  <i class="fas fa-plane travel-icon"></i>
                  Gesti\xF3n de Cliente - Multidestinos
                </p>
              </div>

              <div class="form-section">
                <div class="section-title">
                  <i class="fas fa-user"></i>
                  Informaci\xF3n Personal
                </div>
                <div class="form-row">
                  <input id="nombre" class="swal2-input" placeholder="Nombre completo *" value="${e.nombre.replace(/"/g,"&quot;")}" required>
                  <input id="contacto" class="swal2-input" placeholder="Persona de contacto" value="${(e.contacto||"").replace(/"/g,"&quot;")}">
                </div>
                <input id="telefono" class="swal2-input form-full" placeholder="Tel\xE9fono" value="${(e.telefono||"").replace(/"/g,"&quot;")}">
              </div>

              <div class="form-section">
                <div class="section-title">
                  <i class="fas fa-envelope"></i>
                  Correos Electr\xF3nicos
                </div>
                <div id="emails-container">
                  ${u(l)}
                </div>
                <button type="button" class="add-email-btn" onclick="window.addEmailField()">
                  <i class="fas fa-plus"></i>
                  Agregar otro correo
                </button>
              </div>

              <div class="form-section">
                <div class="section-title">
                  <i class="fas fa-map-marker-alt"></i>
                  Ubicaci\xF3n
                </div>
                <div class="form-row">
                  <select id="ciudad" class="swal2-select">
                    <option value="BOGOTA" ${e.ciudad==="BOGOTA"?"selected":""}>Bogot\xE1</option>
                    <option value="CALI" ${e.ciudad==="CALI"?"selected":""}>Cali</option>
                  </select>
                  <input id="direccion" class="swal2-input" placeholder="Direcci\xF3n completa" value="${(e.direccion||"").replace(/"/g,"&quot;")}">
                </div>
              </div>

              <div class="form-section">
                <div class="section-title">
                  <i class="fas fa-building"></i>
                  Informaci\xF3n Empresarial
                </div>
                <div class="form-row">
                  <input id="nit" class="swal2-input" placeholder="NIT" value="${(e.nit||"").replace(/"/g,"&quot;")}">
                  <input id="rnt" class="swal2-input" placeholder="RNT" value="${(e.rnt||"").replace(/"/g,"&quot;")}">
                </div>
                <div class="form-row">
                  <input id="lmc" class="swal2-input" placeholder="LMC *" value="${(e.lmc||"").replace(/"/g,"&quot;")}" required>
                  <input id="demas" class="swal2-input" placeholder="Dem\xE1s *" value="${(e.demas||"").replace(/"/g,"&quot;")}" required>
                </div>
              </div>

              <div class="form-section">
                <div class="section-title">
                  <i class="fas fa-money-bill-wave"></i>
                  Informaci\xF3n Financiera
                </div>
                <div class="form-row">
                  <input id="primerDeposito" class="swal2-input" placeholder="Primer Dep\xF3sito" value="${e.primerDeposito||""}" type="number">
                  <input id="segundoDeposito" class="swal2-input" placeholder="Segundo Dep\xF3sito" value="${e.segundoDeposito||""}" type="number">
                </div>
                <select id="tipoBase" class="swal2-select form-full">
                  <option value="Comisi\xF3n" ${e.tipoBase==="Comisi\xF3n"?"selected":""}>Comisi\xF3n</option>
                  <option value="Descuento" ${e.tipoBase==="Descuento"?"selected":""}>Descuento</option>
                </select>
              </div>

              <div class="form-section">
                <div class="section-title">
                  <i class="fas fa-map"></i>
                  Zona y Territorio
                </div>
                <select id="zona" class="swal2-select">
                  <option value="Zona 1" ${e.zona==="Zona 1"?"selected":""}>Zona 1</option>
                  <option value="Zona 2" ${e.zona==="Zona 2"?"selected":""}>Zona 2</option>
                </select>
              </div>
            </div>
          `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:'<i class="fas fa-save"></i> Guardar Cambios',cancelButtonText:'<i class="fas fa-times"></i> Cancelar',width:"900px",customClass:{popup:"custom-swal-popup",confirmButton:"custom-swal-confirm",cancelButton:"custom-swal-cancel",title:"custom-swal-title"},didOpen:()=>{window.updateRemoveButtons();const t=document.querySelector(".custom-swal-confirm"),s=document.querySelector(".custom-swal-cancel");t&&(t.style.cssText=`
                background: linear-gradient(135deg, #4a90e2, #357abd) !important;
                border: none !important;
                border-radius: 8px !important;
                padding: 12px 24px !important;
                font-weight: 600 !important;
                box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3) !important;
                transition: all 0.3s ease !important;
              `),s&&(s.style.cssText=`
                background: #6c757d !important;
                border: none !important;
                border-radius: 8px !important;
                padding: 12px 24px !important;
                font-weight: 600 !important;
                box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3) !important;
                transition: all 0.3s ease !important;
              `)},preConfirm:()=>{const t=document.querySelectorAll(".email-input"),s=Array.from(t).map(w=>w.value.trim()).filter(w=>w&&w.includes("@")).join(", "),m=document.getElementById("nombre").value.trim(),_=document.getElementById("lmc").value.trim(),E=document.getElementById("demas").value.trim();return m?_?E?{nombre:m,contacto:document.getElementById("contacto").value.trim(),telefono:document.getElementById("telefono").value.trim(),correos:s,ciudad:document.getElementById("ciudad").value,direccion:document.getElementById("direccion").value.trim(),nit:document.getElementById("nit").value.trim(),rnt:document.getElementById("rnt").value.trim(),lmc:_,demas:E,primerDeposito:document.getElementById("primerDeposito").value.trim(),segundoDeposito:document.getElementById("segundoDeposito").value.trim(),tipoBase:document.getElementById("tipoBase").value,zona:document.getElementById("zona").value}:(d.showValidationMessage("El campo Dem\xE1s es requerido"),!1):(d.showValidationMessage("El campo LMC es requerido"),!1):(d.showValidationMessage("El nombre es requerido"),!1)}});c?(delete window.emailCounter,delete window.addEmailField,delete window.removeEmailField,delete window.updateRemoveButtons,await d.fire({icon:"success",title:"\xA1Cliente actualizado!",text:`Los datos de ${c.nombre} han sido actualizados correctamente.`,showConfirmButton:!1,timer:2e3}),await this.actualizarCliente(e.id,c)):(delete window.emailCounter,delete window.addEmailField,delete window.removeEmailField,delete window.updateRemoveButtons)}catch(i){console.error("Error al editar cliente:",i),await d.fire({icon:"error",title:"Error",text:"Ha ocurrido un error al cargar los datos del cliente. Por favor, int\xE9ntelo nuevamente."})}},async actualizarCliente(e,i){var o;try{if(this.loading=!0,!(await fetch(`https://backmultidestinos.onrender.com/cliente/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i,correo:i.correos,asesor:i.zona?(o=this.usuariosPorZona[i.zona][0])==null?void 0:o.value:null})})).ok)throw new Error("Error al actualizar cliente");await d.fire({icon:"success",title:"\xA1Cliente actualizado!",text:"Los cambios han sido guardados exitosamente",timer:2e3,showConfirmButton:!1}),await this.cargarClientes()}catch(l){console.error("Error al actualizar cliente:",l),this.mostrarError("Error al actualizar el cliente")}finally{this.loading=!1}},async eliminarCliente(e,i){if(!this.verificarPermisos(["administrador","Asesor"]))return;if((await d.fire({title:"\xBFEst\xE1s seguro?",text:`Se eliminar\xE1 permanentemente el cliente: ${i}`,icon:"warning",showCancelButton:!0,confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar",reverseButtons:!0,customClass:{confirmButton:"custom-swal-delete",cancelButton:"custom-swal-cancel"}})).isConfirmed)try{if(this.loading=!0,!(await fetch(`https://backmultidestinos.onrender.com/cliente/${e}`,{method:"DELETE"})).ok)throw new Error("Error al eliminar cliente");await d.fire({icon:"success",title:"Cliente eliminado",text:"El cliente ha sido eliminado exitosamente",timer:2e3,showConfirmButton:!1}),this.clientes=this.clientes.filter(u=>u.id!==e)}catch(l){console.error("Error al eliminar cliente:",l),this.mostrarError("Error al eliminar el cliente")}finally{this.loading=!1}},async verDetalles(e){await d.fire({title:`\u{1F464} ${e.nombre}`,html:`
          <div class="client-details">
            <div class="detail-section">
              <h4><i class="fas fa-info-circle"></i> Informaci\xF3n General</h4>
              <p><strong>Ciudad:</strong> ${e.ciudad}</p>
              <p><strong>Contacto:</strong> ${e.contacto}</p>
              <p><strong>Tel\xE9fono:</strong> ${e.telefono}</p>
              <p><strong>Direcci\xF3n:</strong> ${e.direccion}</p>
            </div>

            <div class="detail-section">
              <h4><i class="fas fa-envelope"></i> Correos</h4>
              <p>${e.correo}</p>
            </div>

            <div class="detail-section">
              <h4><i class="fas fa-building"></i> Informaci\xF3n Empresarial</h4>
              <p><strong>NIT:</strong> ${e.nit}</p>
              <p><strong>RNT:</strong> ${e.rnt}</p>
              <p><strong>LMC:</strong> ${e.lmc}</p>
              <p><strong>Dem\xE1s:</strong> ${e.demas}</p>
            </div>

            <div class="detail-section">
              <h4><i class="fas fa-money-bill"></i> Informaci\xF3n Financiera</h4>
              <p><strong>1er Dep\xF3sito:</strong> ${e.primerDeposito}</p>
              <p><strong>2do Dep\xF3sito:</strong> ${e.segundoDeposito}</p>
              <p><strong>Tipo Base:</strong> ${e.tipoBase}</p>
            </div>

            <div class="detail-section">
              <h4><i class="fas fa-map"></i> Zona</h4>
              <p><strong>Zona:</strong> ${e.zona}</p>
            </div>
          </div>
        `,width:"600px",customClass:{popup:"custom-swal-details"}})},verificarPermisos(e){return e.includes(this.rolUsuarioActual)?!0:(d.fire({icon:"error",title:"Acceso denegado",text:"No tienes permisos para realizar esta acci\xF3n"}),!1)},mostrarError(e){d.fire({icon:"error",title:"Error",text:e})}}},g=e=>(T("data-v-42945fd7"),e=e(),N(),e),G=g(()=>a("video",{autoplay:"",muted:"",loop:"",playsinline:"",class:"video-background"},[a("source",{src:M,type:"video/mp4"}),S(" Tu navegador no soporta video HTML5. ")],-1)),R={class:"page-header"},U={class:"header-content"},O={class:"header-title"},V=g(()=>a("div",null,[a("h1",{class:"main-title"},"Gesti\xF3n de Clientes"),a("p",{class:"subtitle"},"Sistema de administraci\xF3n de clientes de la agencia")],-1)),H={class:"stats-container"},Y={class:"stat-card zona1"},J={class:"stat-content"},K={class:"stat-number"},W=g(()=>a("div",{class:"stat-label"},"Clientes Zona 1",-1)),X={class:"stat-card zona2"},ee={class:"stat-content"},oe={class:"stat-number"},te=g(()=>a("div",{class:"stat-label"},"Clientes Zona 2",-1)),ae={class:"stat-card total"},ie={class:"stat-content"},ne={class:"stat-number"},se=g(()=>a("div",{class:"stat-label"},"Total Clientes",-1)),re={class:"tables-container"},le={class:"zone-section zona1-section"},ce={class:"zone-header zona1-header"},de=g(()=>a("h2",null,"Zona 1 - Bogot\xE1",-1)),me={class:"email-chips"},ue={class:"action-buttons"},pe={class:"zone-section zona2-section"},fe={class:"zone-header zona2-header"},ge=g(()=>a("h2",null,"Zona 2 - Cali",-1)),ve={class:"email-chips"},he={class:"action-buttons"};function we(e,i,o,l,u,c){return h(),x(P,{class:"travel-clients-page"},{default:p(()=>[G,a("div",R,[a("div",U,[a("div",O,[n(v,{name:"flight",size:"2.5rem",class:"header-icon"}),V]),n(f,{onClick:c.mostrarModalAgregar,label:"Nuevo Cliente",icon:"person_add",class:"add-client-btn",size:"lg","no-caps":""},null,8,["onClick"])])]),a("div",H,[a("div",Y,[n(v,{name:"location_city",size:"2rem"}),a("div",J,[a("div",K,C(c.clientesZona1.length),1),W])]),a("div",X,[n(v,{name:"apartment",size:"2rem"}),a("div",ee,[a("div",oe,C(c.clientesZona2.length),1),te])]),a("div",ae,[n(v,{name:"groups",size:"2rem"}),a("div",ie,[a("div",ne,C(u.clientes.length),1),se])])]),a("div",re,[a("div",le,[a("div",ce,[n(v,{name:"location_city",size:"1.5rem"}),de,n(b,{label:`${c.clientesZona1.length} clientes`,class:"zone-chip zona1-chip"},null,8,["label"])]),n(k,{rows:c.clientesZona1,columns:u.columnas,"row-key":"id",pagination:"paginationZona1",class:"clients-table zona1-table",loading:u.loading,separator:"cell"},{"body-cell-correo":p(t=>[n(y,{props:t},{default:p(()=>[a("div",me,[(h(!0),B(I,null,z(t.row.correo.split(","),(s,m)=>(h(),x(b,{key:m,label:s.trim(),class:"email-chip",dense:"",outline:"",color:"primary"},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-acciones":p(t=>[n(y,{props:t},{default:p(()=>[a("div",ue,[n(f,{onClick:s=>c.editarCliente(t.row),icon:"edit",class:"action-btn edit-btn",dense:"",round:"",flat:""},null,8,["onClick"]),n(f,{onClick:s=>c.eliminarCliente(t.row.id,t.row.nombre),icon:"delete",class:"action-btn delete-btn",dense:"",round:"",flat:""},null,8,["onClick"]),n(f,{onClick:s=>c.verDetalles(t.row),icon:"visibility",class:"action-btn view-btn",dense:"",round:"",flat:""},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),a("div",pe,[a("div",fe,[n(v,{name:"apartment",size:"1.5rem"}),ge,n(b,{label:`${c.clientesZona2.length} clientes`,class:"zone-chip zona2-chip"},null,8,["label"])]),n(k,{rows:c.clientesZona2,columns:u.columnas,"row-key":"id",pagination:"paginationZona2",class:"clients-table zona2-table",loading:u.loading,separator:"cell"},{"body-cell-correo":p(t=>[n(y,{props:t},{default:p(()=>[a("div",ve,[(h(!0),B(I,null,z(t.row.correo.split(","),(s,m)=>(h(),x(b,{key:m,label:s.trim(),class:"email-chip",dense:"",outline:"",color:"secondary"},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-acciones":p(t=>[n(y,{props:t},{default:p(()=>[a("div",he,[n(f,{onClick:s=>c.editarCliente(t.row),icon:"edit",class:"action-btn edit-btn",dense:"",round:"",flat:""},null,8,["onClick"]),n(f,{onClick:s=>c.eliminarCliente(t.row.id,t.row.nombre),icon:"delete",class:"action-btn delete-btn",dense:"",round:"",flat:""},null,8,["onClick"]),n(f,{onClick:s=>c.verDetalles(t.row),icon:"visibility",class:"action-btn view-btn",dense:"",round:"",flat:""},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])])]),n(q,{showing:u.loading,class:"loading-overlay"},{default:p(()=>[n(Q,{size:"50px",color:"primary"})]),_:1},8,["showing"])]),_:1})}var Te=F(j,[["render",we],["__scopeId","data-v-42945fd7"]]);export{Te as default};
