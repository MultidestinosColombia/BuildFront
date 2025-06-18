import{Q as ye,a as Re,b as Ee,c as Fe}from"./QTabPanels.0bb9e627.js";import{r as Z,a as Ie,j as qe,a0 as Oe,a1 as Qe,a2 as o,a5 as n,a8 as Y,a3 as e,aa as pe,a6 as A,a4 as v,an as xe,am as Ce,a7 as w,ac as Ye,ad as Ge}from"./index.8668ee20.js";import{a as ie}from"./QSelect.82c7b22d.js";import{a as _e,Q as k}from"./QTable.56f24998.js";import{Q as P}from"./QTooltip.53c7d529.js";import{Q as Ue}from"./QPage.0182de65.js";import{u as Je}from"./use-quasar.b6268352.js";import{api as fe}from"./axios.093a701a.js";import{S as p}from"./sweetalert2.esm.all.0f865825.js";import{_ as Ke}from"./cotizaciones.31a1374b.js";import{_ as We}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-key-composition.cb357e58.js";import"./touch.151b3387.js";import"./selection.2e951b06.js";import"./use-render-cache.1a7235d4.js";import"./format.1b830b10.js";import"./QList.0e36c883.js";import"./axios.37d53be1.js";const Xe={setup(){const G=Je(),f=Z("normales"),$=Z([]),t=Z([]),ee=Z([]),ne=Z({normales:!1,cristal:!1,personalizadas:!1}),i=Z({page:1,rowsPerPage:10,sortBy:"fechaCreacion",descending:!0}),S=Ie(()=>f.value==="normales"?$.value.length:f.value==="cristal"?t.value.length:f.value==="personalizadas"?ee.value.length:0),ke=Ie(()=>{let s=[],c="";return f.value==="normales"&&(s=$.value,c="totalPrecioCliente"),f.value==="cristal"&&(s=t.value,c="total"),f.value==="personalizadas"&&(s=ee.value,c="precioFinal"),s.reduce((h,g)=>h+(g[c]||0),0)}),ze=[{name:"status",label:"Estado",field:"status",align:"left",sortable:!0},{name:"idCotizacion",label:"ID De La Cotizacion",field:"idCotizacion",align:"left",sortable:!0},{name:"fechaCreacion",label:"Fecha De Creacion",field:"fechaCreacion",align:"left",sortable:!0,format:s=>s?s.split("T")[0]:""},{name:"area",label:"Area",field:"area",align:"left",sortable:!0},{name:"cliente",label:"Cliente",field:"cliente",align:"center",sortable:!0},{name:"precioBrutoTotal",label:"Precio Bruto Total",field:"precioBrutoTotal",align:"center",sortable:!0,format:s=>Number(s).toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0})+" COP"},{name:"totalPrecioCliente",label:"Precio al Cliente",field:"totalPrecioCliente",align:"right",sortable:!0,format:s=>Number(s).toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0})+" COP"},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}],we=[{name:"id",label:"ID",field:"id",align:"left",sortable:!0},{name:"cliente",label:"Cliente",field:"cliente_nombre",align:"left",sortable:!0},{name:"tipo_cristal",label:"Tipo Cristal",field:"tipo_cristal",align:"left",sortable:!0},{name:"dimensiones",label:"Dimensiones",field:"dimensiones",align:"center"},{name:"grosor",label:"Grosor",field:"grosor",align:"center",sortable:!0},{name:"cantidad",label:"Piezas",field:"cantidad",align:"center",sortable:!0},{name:"status",label:"Estado",field:"status",align:"center",sortable:!0},{name:"fecha",label:"Fecha",field:"fecha_creacion",align:"center",sortable:!0,format:s=>new Date(s).toLocaleDateString()},{name:"total",label:"Total",field:"total",align:"right",sortable:!0},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}],Se=[{name:"id",label:"ID",field:"id",align:"left",sortable:!0},{name:"cliente",label:"Cliente",field:"cliente_nombre",align:"left",sortable:!0},{name:"titulo",label:"T\xEDtulo",field:"titulo",align:"left",sortable:!0},{name:"categoria",label:"Categor\xEDa",field:"categoria",align:"center",sortable:!0},{name:"status",label:"Estado",field:"status",align:"center",sortable:!0},{name:"fecha",label:"Fecha",field:"fecha_creacion",align:"center",sortable:!0,format:s=>new Date(s).toLocaleDateString()},{name:"total",label:"Total",field:"total",align:"right",sortable:!0},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}],Be=s=>Number(s).toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0})+" COP",Ve=s=>({Pendiente:"orange",Aprobado:"green",Rechazada:"red","En Proceso":"blue",Completada:"positive"})[s]||"grey",U=async s=>{ne.value[s]=!0;try{const c=await fe.post("http://localhost:8010/cotizacion/cotizaciones",{tipo:s});s==="normales"&&($.value=c.data),s==="cristal"&&(t.value=c.data),s==="personalizadas"&&(ee.value=c.data)}catch(c){G.notify({type:"negative",message:`Error al cargar cotizaciones ${s}`,position:"top"}),console.error(c)}finally{ne.value[s]=!1}},N=async({destino:s="",hotel:c="",cliente:h=!1,asesor:g=!1,start:J="",end:V="",soloNoches:R=!1}={})=>{try{const b={};return h===!0?b.cliente=!0:typeof h=="string"&&(b.cliente=h),g===!0&&(b.asesor=!0),c&&(b.hotel=c),R&&c&&(b.hotel=c,b.soloNoches=!0),s&&(b.destino=s),J&&V&&(b.start=J,b.end=V),(await fe.post("http://localhost:8010/cotizacion/lista",b)).data}catch(b){return console.error("Error al cargar datos:",b),{}}},Le=async()=>{const{value:s}=await p.fire({title:'<div style="color: #4A5568; font-size: 24px; font-weight: 600; margin-bottom: 10px;">\u2708\uFE0F Nueva Cotizaci\xF3n</div>',html:`
          <style>
            .cotizacion-container {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
              max-height: 80vh;
              overflow-y: auto;
              padding: 0;
              margin: 0;
            }

            .header-gradient {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
              padding: 25px;
              border-radius: 15px 15px 0 0;
              color: white;
              text-align: center;
              position: relative;
              overflow: hidden;
            }

            .header-gradient::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="30" r="3" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="70" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
              animation: float 20s ease-in-out infinite;
            }

            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(5deg); }
            }

            .header-content {
              position: relative;
              z-index: 1;
            }

            .company-title {
              font-size: 26px;
              font-weight: 700;
              margin: 0;
              text-shadow: 0 2px 4px rgba(0,0,0,0.3);
              letter-spacing: -0.5px;
            }

            .company-subtitle {
              font-size: 16px;
              margin: 8px 0 0 0;
              opacity: 0.95;
              font-weight: 400;
            }

            .form-content {
              padding: 30px;
              background: #fafbfc;
            }

            .section-card {
              background: white;
              border-radius: 16px;
              padding: 24px;
              margin-bottom: 20px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
              border: 1px solid rgba(0, 0, 0, 0.04);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }

            .section-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 4px;
              height: 100%;
              background: linear-gradient(180deg, #667eea, #764ba2);
              border-radius: 0 2px 2px 0;
            }

            .section-card:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            }

            .section-title {
              font-size: 18px;
              font-weight: 600;
              color: #2d3748;
              margin: 0 0 20px 0;
              display: flex;
              align-items: center;
              gap: 10px;
            }

            .section-icon {
              width: 24px;
              height: 24px;
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
            }

            .icon-general { background: linear-gradient(135deg, #667eea, #764ba2); }
            .icon-hotel { background: linear-gradient(135deg, #48bb78, #38a169); }
            .icon-flight { background: linear-gradient(135deg, #ed8936, #dd6b20); }
            .icon-client { background: linear-gradient(135deg, #9f7aea, #805ad5); }
            .icon-money { background: linear-gradient(135deg, #38b2ac, #319795); }

            .form-grid {
              display: grid;
              gap: 20px;
            }

            .grid-2 { grid-template-columns: 1fr 1fr; }
            .grid-3 { grid-template-columns: 1fr 1fr 1fr; }
            .grid-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }

            .form-group {
              position: relative;
            }

            .form-label {
              display: block;
              font-size: 14px;
              font-weight: 500;
              color: #4a5568;
              margin-bottom: 8px;
              transition: color 0.2s ease;
            }

            .form-input, .form-select {
              width: 100%;
              padding: 12px 16px;
              border: 2px solid #e2e8f0;
              border-radius: 10px;
              font-size: 14px;
              transition: all 0.3s ease;
              background: white;
              color: #2d3748;
              box-sizing: border-box;
            }

            .form-input:focus, .form-select:focus {
              outline: none;
              border-color: #667eea;
              box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
              transform: translateY(-1px);
            }

            .form-input::placeholder {
              color: #a0aec0;
              font-style: italic;
            }

            .form-textarea {
              width: 100%;
              padding: 12px 16px;
              border: 2px solid #e2e8f0;
              border-radius: 10px;
              font-size: 14px;
              transition: all 0.3s ease;
              background: white;
              color: #2d3748;
              min-height: 80px;
              resize: vertical;
              font-family: inherit;
              box-sizing: border-box;
            }

            .form-textarea:focus {
              outline: none;
              border-color: #667eea;
              box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            }

            .checkbox-group {
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 12px 0;
            }

            .checkbox-custom {
              width: 20px;
              height: 20px;
              border: 2px solid #e2e8f0;
              border-radius: 6px;
              position: relative;
              cursor: pointer;
              transition: all 0.3s ease;
            }

            .checkbox-custom input {
              opacity: 0;
              position: absolute;
              width: 100%;
              height: 100%;
              margin: 0;
              cursor: pointer;
            }

            .checkbox-custom input:checked + .checkmark {
              background: linear-gradient(135deg, #667eea, #764ba2);
              border-color: #667eea;
            }

            .checkmark {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              border-radius: 4px;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 12px;
            }

            .checkbox-custom input:checked + .checkmark::after {
              content: '\u2713';
              font-weight: bold;
            }

            .checkbox-label {
              font-size: 14px;
              font-weight: 500;
              color: #4a5568;
              cursor: pointer;
              user-select: none;
            }

            .flight-section {
              background: #f8fafc;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 16px;
              border-left: 4px solid #ed8936;
            }

            .flight-title {
              font-size: 16px;
              font-weight: 600;
              color: #2d3748;
              margin: 0 0 16px 0;
              display: flex;
              align-items: center;
              gap: 8px;
            }

            .escala-section {
              background: linear-gradient(135deg, #fff5f5, #fed7d7);
              border-radius: 12px;
              padding: 20px;
              margin-top: 16px;
              border: 2px dashed #fc8181;
              display: none;
            }

            .escala-section.show {
              display: block;
              animation: slideDown 0.3s ease;
            }

            @keyframes slideDown {
              from {
                opacity: 0;
                max-height: 0;
              }
              to {
                opacity: 1;
                max-height: 500px;
              }
            }

            .divider {
              height: 1px;
              background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
              margin: 20px 0;
            }

            .highlight-box {
              background: linear-gradient(135deg, #667eea10, #764ba210);
              border: 1px solid #667eea30;
              border-radius: 10px;
              padding: 16px;
              margin: 16px 0;
            }

            /* Scrollbar personalizado */
            .cotizacion-container::-webkit-scrollbar {
              width: 6px;
            }

            .cotizacion-container::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 3px;
            }

            .cotizacion-container::-webkit-scrollbar-thumb {
              background: linear-gradient(135deg, #667eea, #764ba2);
              border-radius: 3px;
            }

            /* Animaciones de entrada */
            .section-card {
              animation: fadeInUp 0.5s ease forwards;
              opacity: 0;
              transform: translateY(20px);
            }

            .section-card:nth-child(1) { animation-delay: 0.1s; }
            .section-card:nth-child(2) { animation-delay: 0.2s; }
            .section-card:nth-child(3) { animation-delay: 0.3s; }
            .section-card:nth-child(4) { animation-delay: 0.4s; }
            .section-card:nth-child(5) { animation-delay: 0.5s; }

            @keyframes fadeInUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          </style>

          <div class="cotizacion-container">
            <!-- Header con gradiente -->
            <div class="header-gradient">
              <div class="header-content">
                <h1 class="company-title">\u2708\uFE0F Multidestinos Express</h1>
                <p class="company-subtitle">Gesti\xF3n integral de cotizaciones empresarial</p>
              </div>
            </div>

            <div class="form-content">
              <!-- Secci\xF3n: Informaci\xF3n General -->
              <div class="section-card">
                <h3 class="section-title">
                  <span class="section-icon icon-general">\u{1F4CB}</span>
                  Informaci\xF3n General del Viaje
                </h3>

                <div class="form-grid grid-2">
                  <div class="form-group">
                    <label class="form-label">Fecha de Inicio</label>
                    <input type="date" id="fechaInicio" class="form-input">
                  </div>

                  <div class="form-group">
                    <label class="form-label">Fecha de Finalizaci\xF3n</label>
                    <input type="date" id="fechaFin" class="form-input">
                  </div>
                </div>

                <div class="divider"></div>

                <div class="form-grid grid-2">
                  <div class="form-group">
                    <label class="form-label">Ciudad de Salida</label>
                    <select id="ciudadSalida" class="form-select" style="width: 100%; padding: 8px;">
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Destino Principal</label>
                    <select id="destino" class="form-select"></select>
                  </div>
                </div>
              </div>

              <!-- Secci\xF3n: Alojamiento -->
              <div class="section-card">
                <h3 class="section-title">
                  <span class="section-icon icon-hotel">\u{1F3E8}</span>
                  Informaci\xF3n de Alojamiento
                </h3>

                <div class="form-grid grid-2">
                  <div class="form-group">
                    <label class="form-label" for="hotel">Selecciona un Hotel</label>
                    <select id="hotel" class="form-input"></select>
                  </div>

                  <div class="form-group">
                    <label class="form-label">N\xFAmero de Habitaciones</label>
                    <input type="number" id="habitaciones" class="form-input" value="1" min="1" max="10">
                  </div>
                </div>

                <div class="divider"></div>

                <div class="form-grid grid-3">
                   <div class="form-group">
                    <label class="form-label"></label>
                  </div>
                  <div class="form-group">
                    <label class="form-label"></label>

                  </div>
                  <div class="form-group">
                    <label class="form-label"></label>
                  </div>
                </div>
                  <div id="habitaciones-container"></div>
                </div>

               <!-- Secci\xF3n: Cliente y Opciones -->
              <div class="section-card">
                <h3 class="section-title">
                  <span class="section-icon icon-client">\u{1F464}</span>
                  Informaci\xF3n del Cliente
                </h3>

                <div class="form-grid grid-2">
                  <div class="form-group">
                    <label class="form-label">Cliente</label>
                    <select id="cliente" class="form-select">
                      <option value="" disabled selected>\u{1F464} Seleccionar cliente...</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Duraci\xF3n del Viaje (noches)</label>
                    <select id="selectNoches" class="form-input" disabled>
                      <option value="" disabled selected>Seleccione noches</option>
                    </select>
                  </div>
                </div>

                <div class="divider"></div>

                <div class="form-grid grid-2">
                  <div class="form-group" style="position: relative;">
                    <label class="form-label">Correo Electr\xF3nico del Cliente</label>
                    <input type="email" id="correoCliente" class="form-input" placeholder="cliente@ejemplo.com">
                    <span id="iconoBloqueado" style="position: absolute; right: 10px; top: 35px; font-size: 18px; color: #888; display: none;">\u{1F512}</span>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="programaSelect">\u2708\uFE0F Selecciona el Programa</label>
                    <select id="programaSelect" class="form-input">
                      <option value="">\u{1F30D} Seleccione un programa</option>
                    </select>
                  </div>

                </div>

                <div class="divider"></div>

                <div class="highlight-box">
                  <div class="form-grid grid-3">
                    <div class="checkbox-group">
                      <div class="checkbox-custom">
                        <input type="checkbox" id="asesorExterno">
                        <span class="checkmark"></span>
                      </div>
                      <label for="asesorExterno" class="checkbox-label">Asesor Externo</label>
                    </div>
                    <div class="checkbox-group">
                      <div class="checkbox-custom">
                        <input type="checkbox" id="nocheAdicional">
                        <span class="checkmark"></span>
                      </div>
                      <label for="nocheAdicional" class="checkbox-label">Noche Adicional</label>
                    </div>
                    <div class="checkbox-group">
                      <div class="checkbox-custom">
                        <input type="checkbox" id="suplemento">
                        <span class="checkmark"></span>
                      </div>
                      <label for="suplemento" class="checkbox-label">Suplemento</label>
                    </div>
                  </div>
                </div>


                 <!-- Informaci\xF3n de Asesor Externo -->
                  <div id="infoAsesorExterno" class="escala-section" style="display: none;">
                    <h4 class="flight-title">\u{1F464} Informaci\xF3n de Asesor Externo</h4>
                    <div class="form-grid grid-4">
                      <div class="form-group">
                        <label class="form-label">Seleccionar un Asesor</label>
                        <select id="asesor" class="form-select" style="width: 250px;">
                          <option value="" disabled selected>\u{1F464} Seleccionar un Asesor...</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Informaci\xF3n de Noche Adicional -->
                  <div id="infoNocheAdicional" class="escala-section">
                      <h4 class="flight-title">\u{1F319} Informaci\xF3n de Noche Adicional</h4>
                      <div class="form-grid grid-4">
                          <div class="form-group">
                              <label class="form-label">Motivo</label>
                              <input type="text" id="motivoNoche" class="form-input" style="width: 250px;" placeholder="Ej: Llegada tard\xEDa">
                          </div>
                      </div>
                  </div>

                  <!-- Informaci\xF3n de Suplemento -->
                  <div id="infoSuplemento" class="escala-section">
                      <h4 class="flight-title">\u{1F4BC} Informaci\xF3n de Suplemento</h4>
                      <div class="form-grid grid-4">
                          <div class="form-group">
                              <label class="form-label">Tipo de Suplemento</label>
                              <input type="text" id="tipoSuplemento" class="form-input" style="width: 250px;" placeholder="Ej: Alimentaci\xF3n, Tour opcional">
                          </div>
                      </div>
                  </div>

              </div>

              <!-- Secci\xF3n: Vuelos -->
              <div class="section-card">
                <h3 class="section-title">
                  <span class="section-icon icon-flight">\u2708\uFE0F</span>
                  Informaci\xF3n de Vuelos
                </h3>

                <!-- Vuelo de Ida -->
                <div class="flight-section">
                  <h4 class="flight-title">\u{1F6EB} Vuelo de Ida</h4>
                  <div class="form-grid grid-4">
                    <div class="form-group">
                      <label class="form-label">Aerol\xEDnea</label>
                      <select id="aerolineaIda" class="form-input"></select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">N\xFAmero de Vuelo</label>
                      <input type="text" id="vueloIda" class="form-input" placeholder="Ej: AV123">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Salida</label>
                      <input type="time" id="horaSalidaIda" class="form-input">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Llegada</label>
                      <input type="time" id="horaLlegadaIda" class="form-input">
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="form-group">
                    <label class="form-label">Clase de Vuelo</label>
                    <input type="text" id="claseIda" class="form-input" placeholder="Ej: Econ\xF3mica, Ejecutiva, Primera Clase">
                  </div>
                </div>

                <!-- Vuelo de Vuelta -->
                <div class="flight-section">
                  <h4 class="flight-title">\u{1F6EC} Vuelo de Regreso</h4>
                  <div class="form-grid grid-4">
                    <div class="form-group">
                      <label class="form-label">Aerol\xEDnea</label>
                      <select id="aerolineaVuelta" class="form-input"></select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">N\xFAmero de Vuelo</label>
                      <input type="text" id="vueloVuelta" class="form-input" placeholder="Ej: AV456">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Salida</label>
                      <input type="time" id="horaSalidaVuelta" class="form-input">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Llegada</label>
                      <input type="time" id="horaLlegadaVuelta" class="form-input">
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="form-group">
                    <label class="form-label">Clase de Vuelo</label>
                    <input type="text" id="claseVuelta" class="form-input" placeholder="Ej: Econ\xF3mica, Ejecutiva, Primera Clase">
                  </div>
                </div>

                <!-- Checkbox para escala -->
                <div class="highlight-box">
                  <div class="form-grid grid-3">
                  <div class="checkbox-group">
                    <div class="checkbox-custom">
                      <input type="checkbox" id="tieneEscala_Ida">
                      <span class="checkmark"></span>
                    </div>
                    <label for="tieneEscala_Ida" class="checkbox-label">\xBFEl vuelo incluye escalas de Ida?</label>
                  </div>

                  <div class="checkbox-group">
                    <div class="checkbox-custom">
                      <input type="checkbox" id="tieneEscala_Regreso">
                      <span class="checkmark"></span>
                    </div>
                    <label for="tieneEscala_Regreso" class="checkbox-label">\xBFEl vuelo incluye escalas de Regreso?</label>
                  </div>

                  <div class="checkbox-group">
                    <div class="checkbox-custom">
                      <input type="checkbox" id="tieneEscala_Ida_y_Regreso">
                      <span class="checkmark"></span>
                    </div>
                    <label for="tieneEscala_Ida_y_Regreso" class="checkbox-label">\xBFEl vuelo incluye escalas de Ida y Regreso?</label>
                  </div>
                  </div>
                </div>

                <!-- Informaci\xF3n de Escala  Ida-->
                <div id="infoEscala" class="escala-section">
                  <h4 class="flight-title">\u{1F504} Informaci\xF3n de Escala de Ida</h4>
                  <div class="form-grid grid-4">
                    <div class="form-group">
                      <label class="form-label">Aerol\xEDnea</label>
                      <select id="aerolineaEscala1" class="form-input"></select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">N\xFAmero de Vuelo</label>
                      <input type="text" id="vueloEscala" class="form-input" placeholder="Ej: CM789">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Salida</label>
                      <input type="time" id="horaSalidaEscala" class="form-input">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Llegada</label>
                      <input type="time" id="horaLlegadaEscala" class="form-input">
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="form-group">
                    <label class="form-label">Clase de Vuelo</label>
                    <input type="text" id="claseEscala" class="form-input" placeholder="Ej: Econ\xF3mica, Ejecutiva, Primera Clase">
                  </div>
                </div>

                <!-- Informaci\xF3n de Escala Regreso -->
                <div id="infoEscala_1" class="escala-section">
                  <h4 class="flight-title">\u{1F504} Informaci\xF3n de Escala de Regreso</h4>
                  <div class="form-grid grid-4">
                    <div class="form-group">
                      <label class="form-label">Aerol\xEDnea</label>
                      <select id="aerolineaEscala2" class="form-input"></select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">N\xFAmero de Vuelo</label>
                      <input type="text" id="vueloEscala" class="form-input" placeholder="Ej: CM789">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Salida</label>
                      <input type="time" id="horaSalidaEscala" class="form-input">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Llegada</label>
                      <input type="time" id="horaLlegadaEscala" class="form-input">
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="form-group">
                    <label class="form-label">Clase de Vuelo</label>
                    <input type="text" id="claseEscala" class="form-input" placeholder="Ej: Econ\xF3mica, Ejecutiva, Primera Clase">
                  </div>
                </div>

                <!-- Informaci\xF3n de Escala Ida y Regreso -->
                <div id="infoEscala_2" class="escala-section">
                  <h4 class="flight-title">\u{1F504} Informaci\xF3n de Escala de Ida y Regreso </h4>
                  <div class="form-grid grid-4">
                    <div class="form-group">
                      <label class="form-label">Aerol\xEDnea</label>
                      <select id="aerolineaEscala3" class="form-input"></select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">N\xFAmero de Vuelo</label>
                      <input type="text" id="vueloEscala" class="form-input" placeholder="Ej: CM789">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Salida</label>
                      <input type="time" id="horaSalidaEscala" class="form-input">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Llegada</label>
                      <input type="time" id="horaLlegadaEscala" class="form-input">
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="form-group">
                    <label class="form-label">Clase de Vuelo</label>
                    <input type="text" id="claseEscala" class="form-input" placeholder="Ej: Econ\xF3mica, Ejecutiva, Primera Clase">
                  </div>

                  <div class="divider"></div>

                  <div class="form-grid grid-4">
                    <div class="form-group">
                      <label class="form-label">Aerol\xEDnea</label>
                      <select id="aerolineaEscala4" class="form-input"></select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">N\xFAmero de Vuelo</label>
                      <input type="text" id="vueloEscala" class="form-input" placeholder="Ej: CM789">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Salida</label>
                      <input type="time" id="horaSalidaEscala" class="form-input">
                    </div>
                    <div class="form-group">
                      <label class="form-label">Hora de Llegada</label>
                      <input type="time" id="horaLlegadaEscala" class="form-input">
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="form-group">
                    <label class="form-label">Clase de Vuelo</label>
                    <input type="text" id="claseEscala" class="form-input" placeholder="Ej: Econ\xF3mica, Ejecutiva, Primera Clase">
                  </div>

                </div>

              </div>

              <!-- Secci\xF3n: Informaci\xF3n Adicional -->
              <div class="section-card">
                <h3 class="section-title">
                  <span class="section-icon icon-money">\u{1F4B0}</span>
                  Informaci\xF3n Adicional y Valores
                </h3>

                <div class="form-group">
                  <label class="form-label">\xBFCu\xE1ntos valores extra necesita agregar? (m\xE1ximo 2)</label>
                  <input type="number" id="valoresExtra" class="form-input" value="0" min="0" max="2">
                </div>

                <div class="form-group">
                  <label class="form-label">Informaci\xF3n de Transferencias</label>
                  <textarea id="transferencia" class="form-textarea" placeholder="Describa los detalles de transferencias, traslados aeropuerto-hotel, tours adicionales, etc."></textarea>
                </div>
              </div>
            </div>
          </div>
        `,width:"900px",showCancelButton:!0,confirmButtonText:"\u{1F4BE} Guardar Cotizaci\xF3n",cancelButtonText:"\u274C Cancelar",confirmButtonColor:"#667eea",cancelButtonColor:"#e53e3e",didOpen:async()=>{const c=document.getElementById("fechaInicio"),h=document.getElementById("fechaFin"),g=new Date().toISOString().split("T")[0];c.min=g,c.value=g,h.min=g,h.value=g,c.addEventListener("change",()=>{const a=c.value;h.min=a,h.value<a&&(h.value=a)});const J=document.getElementById("horaSalidaIda"),V=document.getElementById("horaLlegadaIda");function R(){const a=J.value,l=V.value;a&&l&&l<=a?(p.showValidationMessage("\u26A0\uFE0F La hora de llegada no puede ser menor o igual a la hora de salida."),V.value=""):p.resetValidationMessage()}J.addEventListener("change",R),V.addEventListener("change",R);const b=document.getElementById("horaSalidaVuelta"),x=document.getElementById("horaLlegadaVuelta");function F(){const a=b.value,l=x.value;a&&l&&l<=a?(p.showValidationMessage("\u26A0\uFE0F La hora de llegada de vuelta no puede ser menor o igual a la hora de salida."),x.value=""):p.resetValidationMessage()}b.addEventListener("change",F),x.addEventListener("change",F);const q=document.querySelectorAll("#horaSalidaEscala"),O=document.querySelectorAll("#horaLlegadaEscala");q.forEach((a,l)=>{const r=O[l],d=()=>{const u=a.value,E=r.value;u&&E&&E<=u?(p.showValidationMessage(`\u26A0\uFE0F En la Escala ${l+1}, la hora de llegada debe ser mayor a la de salida.`),r.value=""):p.resetValidationMessage()};a.addEventListener("change",d),r.addEventListener("change",d)});const Q=["Avianca","LATAM","Satena","JetSmart","Clic","Wingo","Plus ultra"];["aerolineaIda","aerolineaVuelta","aerolineaEscala1","aerolineaEscala2","aerolineaEscala3","aerolineaEscala4"].forEach(a=>{const l=document.getElementById(a);if(l){l.innerHTML="";const r=document.createElement("option");r.value="",r.textContent="\u2708\uFE0F Ej: Satena",r.disabled=!0,r.selected=!0,l.appendChild(r),Q.forEach(d=>{const u=document.createElement("option");u.value=d,u.textContent=d,l.appendChild(u)})}});const H=[{checkboxId:"tieneEscala_Ida",sectionId:"infoEscala"},{checkboxId:"tieneEscala_Regreso",sectionId:"infoEscala_1"},{checkboxId:"tieneEscala_Ida_y_Regreso",sectionId:"infoEscala_2"},{checkboxId:"asesorExterno",sectionId:"infoAsesorExterno"},{checkboxId:"nocheAdicional",sectionId:"infoNocheAdicional"},{checkboxId:"suplemento",sectionId:"infoSuplemento"}],m={},z={};H.forEach(({checkboxId:a,sectionId:l})=>{m[a]=document.getElementById(a),z[l]=document.getElementById(l)});function se(){const a=m.tieneEscala_Ida.checked,l=m.tieneEscala_Regreso.checked,r=m.tieneEscala_Ida_y_Regreso.checked;["tieneEscala_Ida","tieneEscala_Regreso","tieneEscala_Ida_y_Regreso"].forEach(d=>{m[d].disabled=!1;const u=H.find(E=>E.checkboxId===d).sectionId;z[u].style.display="none"}),r?(m.tieneEscala_Ida.checked=!1,m.tieneEscala_Regreso.checked=!1,m.tieneEscala_Ida.disabled=!0,m.tieneEscala_Regreso.disabled=!0,z.infoEscala_2.style.display="block"):a?(m.tieneEscala_Regreso.checked=!1,m.tieneEscala_Ida_y_Regreso.checked=!1,m.tieneEscala_Regreso.disabled=!0,m.tieneEscala_Ida_y_Regreso.disabled=!0,z.infoEscala.style.display="block"):l&&(m.tieneEscala_Ida.checked=!1,m.tieneEscala_Ida_y_Regreso.checked=!1,m.tieneEscala_Ida.disabled=!0,m.tieneEscala_Ida_y_Regreso.disabled=!0,z.infoEscala_1.style.display="block")}["tieneEscala_Ida","tieneEscala_Regreso","tieneEscala_Ida_y_Regreso"].forEach(a=>{m[a].addEventListener("change",se)}),["asesorExterno","nocheAdicional","suplemento"].forEach(a=>{m[a].addEventListener("change",function(){const l=H.find(r=>r.checkboxId===a).sectionId;z[l].style.display=this.checked?"block":"none"})});const ce=["Bogot\xE1","Medell\xEDn","Cali","Barranquilla","Cartagena","Pereira","C\xFAcuta","Bucaramanga","Santa Marta","Monter\xEDa","Villavicencio","Armenia","Manizales","Neiva","Ibagu\xE9","Leticia","San Andr\xE9s","Riohacha","Yopal","Valledupar","Quibd\xF3","Pasto","Florencia","Tumaco","Popay\xE1n","Apartad\xF3","Corozal","Rionegro","Sincelejo","Guapi","Puerto Carre\xF1o","In\xEDrida","Mit\xFA","Turbo"],K=document.getElementById("ciudadSalida");K.innerHTML="";const T=document.createElement("option");T.value="",T.textContent="\u2708\uFE0F Seleccione ciudad de salida",T.disabled=!0,T.selected=!0,K.appendChild(T),ce.forEach(a=>{const l=document.createElement("option");l.value=a,l.textContent=a,K.appendChild(l)});const re=(await N()).destinos||[],M=document.getElementById("destino");M.innerHTML="";const j=document.createElement("option");j.value="",j.textContent="\u{1F30D} Seleccionar destino...",j.disabled=!0,j.selected=!0,M.appendChild(j),re.forEach(a=>{const l=document.createElement("option");l.value=a.nombre,l.textContent=`${a.emoji||""} ${a.nombre}`,M.appendChild(l)});const _=document.getElementById("hotel");_.innerHTML="";const L=document.createElement("option");L.value="",L.textContent="\u{1F3E8} Seleccionar hotel...",L.disabled=!0,L.selected=!0,_.appendChild(L);let D=[];M.addEventListener("change",async()=>{const a=M.value;if(_.innerHTML="",_.appendChild(L.cloneNode(!0)),D=[],oe(),!a)return;((await N({destino:a})).hoteles||[]).forEach(d=>{const u=typeof d=="string"?d:d.hotel||"";if(u){const E=document.createElement("option");E.value=u,E.textContent=u,_.appendChild(E)}})}),_.addEventListener("change",async()=>{const a=_.value;if(!a){D=[],oe();return}D=(await N({hotel:a})).tiposHabitacion||[],oe()});const ae=document.getElementById("habitaciones"),y=document.getElementById("habitaciones-container");function I(a){const l=document.createElement("div");l.className="form-grid grid-3",l.id=`habitacion-${a+1}`;const r=D.length>0?D.map(u=>`<option value="${u}">${u}</option>`).join(""):'<option value="" disabled selected>\u2753 Sin tipos disponibles</option>';l.innerHTML=`
              <div class="form-group">
                <label class="form-label">Tipo de Habitaci\xF3n</label>
                <select class="form-select" name="tipoHabitacion-${a+1}">
                  ${r}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Adultos</label>
                <input type="number" name="adultos-${a+1}" class="form-input adultos-input" value="2" min="1" max="13">
              </div>
              <div class="form-group">
                <label class="form-label">Ni\xF1os</label>
                <input type="number" name="ninos-${a+1}" class="form-input" value="0" min="0">
              </div>
            `;const d=l.querySelector(".adultos-input");return d.addEventListener("blur",()=>{let u=parseInt(d.value);isNaN(u)||u<1?d.value=1:u>13&&(d.value=13)}),l}function oe(){const a=Math.min(Math.max(parseInt(ae.value)||1,1),10);y.innerHTML="";for(let l=0;l<a;l++){if(l>0){const r=document.createElement("div");r.className="divider",y.appendChild(r)}y.appendChild(I(l))}}oe(),ae.addEventListener("input",oe);const de=document.getElementById("cliente"),W=document.getElementById("correoCliente"),ue=document.getElementById("iconoBloqueado"),Me=(await N({cliente:!0})).clientes||[];de.innerHTML='<option value="" disabled selected>\u{1F464} Seleccionar cliente...</option>',Me.forEach(a=>{const l=document.createElement("option");l.value=a,l.textContent=a,de.appendChild(l)}),de.addEventListener("change",async()=>{const a=de.value;if(!a){W.value="",W.disabled=!1,ue.style.display="none";return}const r=(await N({cliente:a})).correo;r?(W.value=r,W.disabled=!0,ue.style.display="inline-block",ue.title="Correo asignado autom\xE1ticamente"):(W.value="",W.disabled=!1,ue.style.display="none")});const me=document.getElementById("programaSelect"),le=document.createElement("option");le.value="",le.textContent="\u{1F30D} Seleccione un programa",le.disabled=!0,le.selected=!0;const be=async()=>{const a=document.getElementById("destino").value,l=document.getElementById("fechaInicio").value,r=document.getElementById("fechaFin").value;if(!a||!l||!r){ve();return}try{const u=(await N({destino:a,start:l,end:r})).programas||[];if(ve(),u.length===0){const E=document.createElement("option");E.value="",E.textContent="\u274C No hay programas disponibles",E.disabled=!0,me.appendChild(E);return}u.forEach(E=>{const he=document.createElement("option");he.value=E.nombrePrograma,he.textContent=`\u{1F4D8} ${E.nombrePrograma}`,me.appendChild(he)})}catch(d){console.error("Error al cargar programas:",d),ve()}},ve=()=>{me.innerHTML="",me.appendChild(le.cloneNode(!0))};document.getElementById("destino").addEventListener("change",be),document.getElementById("fechaInicio").addEventListener("change",be),document.getElementById("fechaFin").addEventListener("change",be);const X=document.getElementById("selectNoches");_.addEventListener("change",async()=>{const a=_.value;if(X.innerHTML='<option value="" disabled selected>Seleccione noches</option>',X.disabled=!0,!a)return;const r=(await N({hotel:a,soloNoches:!0})).noches;if(!Array.isArray(r)||r.length===0){X.innerHTML='<option value="" disabled selected>No hay noches disponibles</option>',X.disabled=!0;return}for(const d of r){const u=document.createElement("option");u.value=d,u.textContent=`${d} noche${d!==1?"s":""}`,X.appendChild(u)}X.disabled=!1});const je=document.getElementById("asesorExterno"),te=document.getElementById("asesor"),De=document.getElementById("infoAsesorExterno");je.addEventListener("change",async function(){const a=this.checked;if(De.style.display=a?"block":"none",a){te.innerHTML='<option value="" disabled selected>\u{1F464} Seleccionar un Asesor...</option>';try{const r=(await N({asesor:!0})).asesores||[];if(r.length===0){const d=document.createElement("option");d.value="",d.textContent="\u26A0\uFE0F No hay asesores disponibles",te.appendChild(d)}else r.forEach(d=>{const u=document.createElement("option");u.value=d,u.textContent=d,te.appendChild(u)})}catch(l){console.error("Error al cargar asesores:",l),te.innerHTML='<option value="" disabled>\u274C Error al cargar asesores</option>'}}else te.innerHTML='<option value="" disabled selected>\u{1F464} Seleccionar un Asesor...</option>'})},preConfirm:()=>{var V,R,b;const c=()=>{var q,O,Q;const x=[],F=parseInt(document.getElementById("habitaciones").value)||1;for(let B=1;B<=F;B++){const H=((q=document.querySelector(`[name="tipoHabitacion-${B}"]`))==null?void 0:q.value)||"",m=parseInt((O=document.querySelector(`[name="adultos-${B}"]`))==null?void 0:O.value)||0,z=parseInt((Q=document.querySelector(`[name="ninos-${B}"]`))==null?void 0:Q.value)||0;x.push({numero:B,tipoHabitacion:H,adultos:m,ninos:z})}return x},h=()=>{var F,q,O,Q,B,H,m,z,se,ce,K,T,ge,re,M,j,_,L,D,ae;const x={ida:null,regreso:null,idaYRegreso:null};if(document.getElementById("tieneEscala_Ida").checked){const y=document.getElementById("infoEscala");x.ida={aerolinea:((F=y.querySelector("#aerolineaEscala"))==null?void 0:F.value)||"",numeroVuelo:((q=y.querySelector("#vueloEscala"))==null?void 0:q.value)||"",horaSalida:((O=y.querySelector("#horaSalidaEscala"))==null?void 0:O.value)||"",horaLlegada:((Q=y.querySelector("#horaLlegadaEscala"))==null?void 0:Q.value)||"",clase:((B=y.querySelector("#claseEscala"))==null?void 0:B.value)||""}}if(document.getElementById("tieneEscala_Regreso").checked){const y=document.getElementById("infoEscala_1");x.regreso={aerolinea:((H=y.querySelector('input[placeholder="Ej: Copa Airlines"]'))==null?void 0:H.value)||"",numeroVuelo:((m=y.querySelector('input[placeholder="Ej: CM789"]'))==null?void 0:m.value)||"",horaSalida:((z=y.querySelector('input[type="time"]'))==null?void 0:z.value)||"",horaLlegada:((se=y.querySelectorAll('input[type="time"]')[1])==null?void 0:se.value)||"",clase:((ce=y.querySelector('input[placeholder="Ej: Econ\xF3mica, Ejecutiva, Primera Clase"]'))==null?void 0:ce.value)||""}}if(document.getElementById("tieneEscala_Ida_y_Regreso").checked){const I=document.getElementById("infoEscala_2").querySelectorAll("input");x.idaYRegreso={vuelo1:{aerolinea:((K=I[0])==null?void 0:K.value)||"",numeroVuelo:((T=I[1])==null?void 0:T.value)||"",horaSalida:((ge=I[2])==null?void 0:ge.value)||"",horaLlegada:((re=I[3])==null?void 0:re.value)||"",clase:((M=I[4])==null?void 0:M.value)||""},vuelo2:{aerolinea:((j=I[5])==null?void 0:j.value)||"",numeroVuelo:((_=I[6])==null?void 0:_.value)||"",horaSalida:((L=I[7])==null?void 0:L.value)||"",horaLlegada:((D=I[8])==null?void 0:D.value)||"",clase:((ae=I[9])==null?void 0:ae.value)||""}}}return x},g={fechaInicio:document.getElementById("fechaInicio").value,fechaFin:document.getElementById("fechaFin").value,ciudadSalida:document.getElementById("ciudadSalida").value,destino:document.getElementById("destino").value,hotel:document.getElementById("hotel").value,habitaciones:c(),numeroHabitaciones:parseInt(document.getElementById("habitaciones").value),cliente:document.getElementById("cliente").value,correoCliente:document.getElementById("correoCliente").value,programa:document.getElementById("programaSelect").value,duracionNoches:document.getElementById("selectNoches").value,vueloIda:{aerolinea:document.getElementById("aerolineaIda").value,numeroVuelo:document.getElementById("vueloIda").value,horaSalida:document.getElementById("horaSalidaIda").value,horaLlegada:document.getElementById("horaLlegadaIda").value,clase:document.getElementById("claseIda").value},vueloVuelta:{aerolinea:document.getElementById("aerolineaVuelta").value,numeroVuelo:document.getElementById("vueloVuelta").value,horaSalida:document.getElementById("horaSalidaVuelta").value,horaLlegada:document.getElementById("horaLlegadaVuelta").value,clase:document.getElementById("claseVuelta").value},escalas:h(),opciones:{asesorExterno:{activo:document.getElementById("asesorExterno").checked,asesor:document.getElementById("asesorExterno").checked?((V=document.getElementById("asesor"))==null?void 0:V.value)||"":null},nocheAdicional:{activo:document.getElementById("nocheAdicional").checked,motivo:document.getElementById("nocheAdicional").checked?((R=document.getElementById("motivoNoche"))==null?void 0:R.value)||"":null},suplemento:{activo:document.getElementById("suplemento").checked,tipo:document.getElementById("suplemento").checked?((b=document.getElementById("tipoSuplemento"))==null?void 0:b.value)||"":null}},valoresExtra:parseInt(document.getElementById("valoresExtra").value)||0,transferencia:document.getElementById("transferencia").value,tipo:"normales",fechaCreacion:new Date().toISOString(),estado:"pendiente"};return g.destino?g.hotel?g.cliente?g.correoCliente?g.programa?g.duracionNoches?g.habitaciones.filter(x=>x.tipoHabitacion&&x.adultos>0).length===0?(p.showValidationMessage("Por favor configura al menos una habitaci\xF3n con tipo y n\xFAmero de adultos"),!1):g:(p.showValidationMessage("Por favor selecciona la duraci\xF3n en noches"),!1):(p.showValidationMessage("Por favor selecciona un programa"),!1):(p.showValidationMessage("Por favor ingresa el correo del cliente"),!1):(p.showValidationMessage("Por favor selecciona un cliente"),!1):(p.showValidationMessage("Por favor selecciona un hotel"),!1):(p.showValidationMessage("Por favor selecciona un destino"),!1)}});if(s)try{await p.fire({title:"\u{1F4CB} \xBFDeseas guardar esta cotizaci\xF3n?",html:`<pre style="text-align:left;max-height:300px;overflow:auto;background:#f7f7f7;padding:1em;border-radius:6px">${JSON.stringify(s,null,2)}</pre>`,width:600,confirmButtonText:"S\xED, guardar",confirmButtonColor:"#48bb78",showCancelButton:!0,cancelButtonText:"Cancelar",cancelButtonColor:"#e53e3e"}).then(h=>{if(!h.isConfirmed)throw new Error("Cancelado por el usuario")}),p.fire({title:"\u23F3 Guardando cotizaci\xF3n...",text:"Por favor espera mientras procesamos la informaci\xF3n",allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,didOpen:()=>{p.showLoading()}});const c=await fe.post("http://localhost:8010/cotizacion/guardar",s);if(c.data.success)await p.fire({icon:"success",title:"\u{1F389} \xA1Cotizaci\xF3n guardada exitosamente!",text:`ID de cotizaci\xF3n: ${c.data.id}`,confirmButtonText:"Perfecto",confirmButtonColor:"#48bb78"}),await U("normales");else throw new Error(c.data.message||"Error al guardar")}catch(c){console.error("Error al guardar cotizaci\xF3n:",c),await p.fire({icon:"error",title:"\u274C Error al guardar",text:c.message||"Hubo un problema al guardar la cotizaci\xF3n. Por favor intenta nuevamente.",confirmButtonText:"Entendido",confirmButtonColor:"#e53e3e"})}},Ae=()=>console.log("Abrir formulario cristal"),Pe=()=>console.log("Abrir formulario personalizada"),Ne=(s,c)=>console.log("Ver detalle:",s,c),He=(s,c)=>console.log("Editar:",s,c),Te=async(s,c)=>{if((await p.fire({title:"\xBFEliminar cotizaci\xF3n?",text:"Esta acci\xF3n no se puede deshacer. \xBFDeseas continuar?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#00bcd4",confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar",background:"#ffffff",color:"#333",backdrop:`
          rgba(0,0,0,0.5)
          url("https://i.imgur.com/UC2vXfT.gif")
          center top
          no-repeat
        `,customClass:{popup:"swal2-elegante"}})).isConfirmed)try{await fe.delete(`http://localhost:8010/cotizacion/${c}/${s}`),p.fire({icon:"success",title:"\xA1Eliminada!",text:"La cotizaci\xF3n ha sido eliminada correctamente.",background:"#ffffff",color:"#333",iconColor:"#4caf50",confirmButtonColor:"#4caf50",customClass:{popup:"swal2-elegante"}}),U(c)}catch{p.fire({icon:"error",title:"Error",text:"Ocurri\xF3 un problema al eliminar la cotizaci\xF3n.",background:"#ffffff",color:"#333",iconColor:"#f44336",confirmButtonColor:"#f44336",customClass:{popup:"swal2-elegante"}})}};return qe(()=>{U("normales"),U("cristal"),U("personalizadas")}),{tabActual:f,cotizacionesNormales:$,cotizacionesCristal:t,cotizacionesPersonalizadas:ee,loading:ne,paginacion:i,totalCotizaciones:S,montoTotal:ke,columnasNormales:ze,columnasCristal:we,columnasPersonalizadas:Se,formatearMonto:Be,getEstadoColor:Ve,cargarCotizaciones:U,abrirFormularioNormal:Le,abrirFormularioCristal:Ae,abrirFormularioPersonalizada:Pe,verDetalle:Ne,editarCotizacion:He,eliminarCotizacion:Te}}},C=G=>(Ye("data-v-6809ad84"),G=G(),Ge(),G),Ze=C(()=>n("video",{autoplay:"",muted:"",loop:"",playsinline:"",class:"video-background"},[n("source",{src:Ke,type:"video/mp4"}),w(" Tu navegador no soporta video HTML5. ")],-1)),$e={class:"page-header"},ea={class:"container"},aa={class:"header-content"},oa=C(()=>n("div",{class:"header-text"},[n("h1",{class:"page-title"},"M\xF3dulo de Cotizaciones"),n("p",{class:"page-subtitle"},"Gesti\xF3n integral de cotizaciones empresarial")],-1)),la={class:"header-stats"},ta={class:"stat-card"},ia={class:"stat-number"},na=C(()=>n("div",{class:"stat-label"},"Total Cotizaciones",-1)),sa={class:"stat-card"},ca={class:"stat-number"},ra=C(()=>n("div",{class:"stat-label"},"Valor Total",-1)),da={class:"container"},ua={class:"section-header"},ma={class:"section-title"},pa=C(()=>n("h2",null,"Cotizaciones Normales",-1)),fa={class:"card-title"},ga=C(()=>n("span",null,"Listado de Cotizaciones Normales",-1)),ba={class:"total-amount"},va={class:"action-buttons"},ha={class:"no-data"},ya=C(()=>n("div",{class:"no-data-text"},"No hay cotizaciones normales registradas",-1)),Ea={class:"section-header"},xa={class:"section-title"},Ca=C(()=>n("h2",null,"Cotizaciones Ca\xF1o Cristal",-1)),_a={class:"card-title"},Ia=C(()=>n("span",null,"Listado de Cotizaciones Ca\xF1o Cristal",-1)),ka={class:"total-amount"},za={class:"action-buttons"},wa={class:"no-data"},Sa=C(()=>n("div",{class:"no-data-text"},"No hay cotizaciones de ca\xF1o cristal registradas",-1)),Ba={class:"section-header"},Va={class:"section-title"},La=C(()=>n("h2",null,"Cotizaciones Personalizadas",-1)),Aa={class:"card-title"},Pa=C(()=>n("span",null,"Listado de Cotizaciones Personalizadas",-1)),Na={class:"total-amount"},Ha={class:"action-buttons"},Ta={class:"no-data"},Ma=C(()=>n("div",{class:"no-data-text"},"No hay cotizaciones personalizadas registradas",-1));function ja(G,f,$,t,ee,ne){return Oe(),Qe(Ue,{class:"cotizaciones-page"},{default:o(()=>[Ze,n("div",$e,[n("div",ea,[n("div",aa,[oa,n("div",la,[n("div",ta,[n("div",ia,Y(t.totalCotizaciones),1),na]),n("div",sa,[n("div",ca,Y(t.formatearMonto(t.montoTotal)),1),ra])])])])]),n("div",da,[e(Re,{modelValue:t.tabActual,"onUpdate:modelValue":f[0]||(f[0]=i=>t.tabActual=i),class:"cotizaciones-tabs","indicator-color":"primary","active-color":"primary",align:"justify","narrow-indicator":""},{default:o(()=>[e(ye,{name:"normales",label:"Cotizaciones Normales",icon:"receipt_long"}),e(ye,{name:"cristal",label:"Ca\xF1o Cristal",icon:"window"}),e(ye,{name:"personalizadas",label:"Personalizadas",icon:"tune"})]),_:1},8,["modelValue"]),e(pe),e(Fe,{modelValue:t.tabActual,"onUpdate:modelValue":f[4]||(f[4]=i=>t.tabActual=i),animated:"",class:"tab-panels"},{default:o(()=>[e(Ee,{name:"normales",class:"tab-panel"},{default:o(()=>[n("div",ua,[n("div",ma,[e(A,{name:"receipt_long",size:"md",color:"primary"}),pa]),e(v,{onClick:t.abrirFormularioNormal,color:"primary",icon:"add",label:"Nueva Cotizaci\xF3n",unelevated:"",class:"action-btn"},null,8,["onClick"])]),e(xe,{class:"data-card"},{default:o(()=>[e(Ce,{class:"card-header"},{default:o(()=>[n("div",fa,[e(A,{name:"list"}),ga]),e(v,{onClick:f[1]||(f[1]=()=>t.cargarCotizaciones("normales")),icon:"refresh",flat:"",round:"",color:"primary",loading:t.loading.normales},null,8,["loading"])]),_:1}),e(pe),e(_e,{rows:t.cotizacionesNormales,columns:t.columnasNormales,"row-key":"id",loading:t.loading.normales,pagination:t.paginacion,class:"cotizaciones-table",flat:"",bordered:!1},{"body-cell-status":o(i=>[e(k,{props:i},{default:o(()=>[e(ie,{color:t.getEstadoColor(i.value),"text-color":"white",label:i.value,size:"sm"},null,8,["color","label"])]),_:2},1032,["props"])]),"body-cell-total":o(i=>[e(k,{props:i,class:"text-right"},{default:o(()=>[n("span",ba,"$"+Y(t.formatearMonto(i.value)),1)]),_:2},1032,["props"])]),"body-cell-acciones":o(i=>[e(k,{props:i},{default:o(()=>[n("div",va,[e(v,{onClick:S=>t.verDetalle(i.row,"normal"),icon:"visibility",color:"primary",flat:"",round:"",size:"sm",dense:""},{default:o(()=>[e(P,null,{default:o(()=>[w("Ver detalle")]),_:1})]),_:2},1032,["onClick"]),e(v,{onClick:S=>t.editarCotizacion(i.row,"normal"),icon:"edit",color:"warning",flat:"",round:"",size:"sm",dense:""},{default:o(()=>[e(P,null,{default:o(()=>[w("Editar")]),_:1})]),_:2},1032,["onClick"]),e(v,{onClick:S=>t.eliminarCotizacion(i.row.id,"normal"),icon:"delete",color:"negative",flat:"",round:"",size:"sm",dense:""},{default:o(()=>[e(P,null,{default:o(()=>[w("Eliminar")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),"no-data":o(()=>[n("div",ha,[e(A,{name:"receipt_long",size:"4em",color:"grey-4"}),ya,e(v,{onClick:t.abrirFormularioNormal,color:"primary",label:"Crear primera cotizaci\xF3n",outline:"",class:"q-mt-md"},null,8,["onClick"])])]),_:1},8,["rows","columns","loading","pagination"])]),_:1})]),_:1}),e(Ee,{name:"cristal",class:"tab-panel"},{default:o(()=>[n("div",Ea,[n("div",xa,[e(A,{name:"window",size:"md",color:"secondary"}),Ca]),e(v,{onClick:t.abrirFormularioCristal,color:"secondary",icon:"add",label:"Nueva Cotizaci\xF3n",unelevated:"",class:"action-btn"},null,8,["onClick"])]),e(xe,{class:"data-card"},{default:o(()=>[e(Ce,{class:"card-header"},{default:o(()=>[n("div",_a,[e(A,{name:"list"}),Ia]),e(v,{onClick:f[2]||(f[2]=()=>t.cargarCotizaciones("cristal")),icon:"refresh",flat:"",round:"",color:"secondary",loading:t.loading.cristal},null,8,["loading"])]),_:1}),e(pe),e(_e,{rows:t.cotizacionesCristal,columns:t.columnasCristal,"row-key":"id",loading:t.loading.cristal,pagination:t.paginacion,class:"cotizaciones-table",flat:""},{"body-cell-dimensiones":o(i=>[e(k,{props:i},{default:o(()=>[w(Y(i.row.alto)+"cm x "+Y(i.row.ancho)+"cm ",1)]),_:2},1032,["props"])]),"body-cell-grosor":o(i=>[e(k,{props:i},{default:o(()=>[e(ie,{color:"info","text-color":"white",label:`${i.value}mm`,size:"sm"},null,8,["label"])]),_:2},1032,["props"])]),"body-cell-status":o(i=>[e(k,{props:i},{default:o(()=>[e(ie,{color:t.getEstadoColor(i.value),"text-color":"white",label:i.value,size:"sm"},null,8,["color","label"])]),_:2},1032,["props"])]),"body-cell-total":o(i=>[e(k,{props:i,class:"text-right"},{default:o(()=>[n("span",ka,"$"+Y(t.formatearMonto(i.value)),1)]),_:2},1032,["props"])]),"body-cell-acciones":o(i=>[e(k,{props:i},{default:o(()=>[n("div",za,[e(v,{onClick:S=>t.verDetalle(i.row,"cristal"),icon:"visibility",color:"primary",flat:"",round:"",size:"sm",dense:""},{default:o(()=>[e(P,null,{default:o(()=>[w("Ver detalle")]),_:1})]),_:2},1032,["onClick"]),e(v,{onClick:S=>t.editarCotizacion(i.row,"cristal"),icon:"edit",color:"warning",flat:"",round:"",size:"sm",dense:""},{default:o(()=>[e(P,null,{default:o(()=>[w("Editar")]),_:1})]),_:2},1032,["onClick"]),e(v,{onClick:S=>t.eliminarCotizacion(i.row.id,"cristal"),icon:"delete",color:"negative",flat:"",round:"",size:"sm",dense:""},{default:o(()=>[e(P,null,{default:o(()=>[w("Eliminar")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),"no-data":o(()=>[n("div",wa,[e(A,{name:"window",size:"4em",color:"grey-4"}),Sa,e(v,{onClick:t.abrirFormularioCristal,color:"secondary",label:"Crear primera cotizaci\xF3n",outline:"",class:"q-mt-md"},null,8,["onClick"])])]),_:1},8,["rows","columns","loading","pagination"])]),_:1})]),_:1}),e(Ee,{name:"personalizadas",class:"tab-panel"},{default:o(()=>[n("div",Ba,[n("div",Va,[e(A,{name:"tune",size:"md",color:"accent"}),La]),e(v,{onClick:t.abrirFormularioPersonalizada,color:"accent",icon:"add",label:"Nueva Cotizaci\xF3n",unelevated:"",class:"action-btn"},null,8,["onClick"])]),e(xe,{class:"data-card"},{default:o(()=>[e(Ce,{class:"card-header"},{default:o(()=>[n("div",Aa,[e(A,{name:"list"}),Pa]),e(v,{onClick:f[3]||(f[3]=()=>t.cargarCotizaciones("personalizadas")),icon:"refresh",flat:"",round:"",color:"accent",loading:t.loading.personalizadas},null,8,["loading"])]),_:1}),e(pe),e(_e,{rows:t.cotizacionesPersonalizadas,columns:t.columnasPersonalizadas,"row-key":"id",loading:t.loading.personalizadas,pagination:t.paginacion,class:"cotizaciones-table",flat:""},{"body-cell-categoria":o(i=>[e(k,{props:i},{default:o(()=>[e(ie,{color:"purple","text-color":"white",label:i.value,size:"sm"},null,8,["label"])]),_:2},1032,["props"])]),"body-cell-status":o(i=>[e(k,{props:i},{default:o(()=>[e(ie,{color:t.getEstadoColor(i.value),"text-color":"white",label:i.value,size:"sm"},null,8,["color","label"])]),_:2},1032,["props"])]),"body-cell-total":o(i=>[e(k,{props:i,class:"text-right"},{default:o(()=>[n("span",Na,"$"+Y(t.formatearMonto(i.value)),1)]),_:2},1032,["props"])]),"body-cell-acciones":o(i=>[e(k,{props:i},{default:o(()=>[n("div",Ha,[e(v,{onClick:S=>t.verDetalle(i.row,"personalizada"),icon:"visibility",color:"primary",flat:"",round:"",size:"sm",dense:""},{default:o(()=>[e(P,null,{default:o(()=>[w("Ver detalle")]),_:1})]),_:2},1032,["onClick"]),e(v,{onClick:S=>t.editarCotizacion(i.row,"personalizada"),icon:"edit",color:"warning",flat:"",round:"",size:"sm",dense:""},{default:o(()=>[e(P,null,{default:o(()=>[w("Editar")]),_:1})]),_:2},1032,["onClick"]),e(v,{onClick:S=>t.eliminarCotizacion(i.row.id,"personalizada"),icon:"delete",color:"negative",flat:"",round:"",size:"sm",dense:""},{default:o(()=>[e(P,null,{default:o(()=>[w("Eliminar")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),"no-data":o(()=>[n("div",Ta,[e(A,{name:"tune",size:"4em",color:"grey-4"}),Ma,e(v,{onClick:t.abrirFormularioPersonalizada,color:"accent",label:"Crear primera cotizaci\xF3n",outline:"",class:"q-mt-md"},null,8,["onClick"])])]),_:1},8,["rows","columns","loading","pagination"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var to=We(Xe,[["render",ja],["__scopeId","data-v-6809ad84"]]);export{to as default};
