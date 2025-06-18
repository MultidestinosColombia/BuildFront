import{Q as ye,a as Fe,b as xe,c as Oe}from"./QTabPanels.bb0461c0.js";import{r as ae,a as Ie,j as qe,a0 as Qe,a1 as Ue,a2 as i,a5 as r,a8 as X,a3 as e,aa as me,a6 as M,a4 as E,an as Ee,am as Ce,a7 as B,ac as Ge,ad as Ye}from"./index.d436ad73.js";import{a as se}from"./QSelect.917dcf46.js";import{a as _e,Q as S}from"./QTable.4dd9976b.js";import{Q as R}from"./QTooltip.25e2e452.js";import{Q as Je}from"./QPage.b58eb39f.js";import{u as Xe}from"./use-quasar.6439df20.js";import{api as pe}from"./axios.f06eb60e.js";import{S as v}from"./sweetalert2.esm.all.0f865825.js";import{_ as Ke}from"./cotizaciones.31a1374b.js";import{_ as We}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-key-composition.002912ea.js";import"./touch.25bca87c.js";import"./selection.dbfae057.js";import"./use-render-cache.1a7235d4.js";import"./format.19399105.js";import"./QList.ad083ee4.js";import"./axios.37d53be1.js";const Ze={setup(){const K=Xe(),y=ae("normales"),oe=ae([]),n=ae([]),le=ae([]),re=ae({normales:!1,cristal:!1,personalizadas:!1}),s=ae({page:1,rowsPerPage:10,sortBy:"fechaCreacion",descending:!0}),P=Ie(()=>y.value==="normales"?oe.value.length:y.value==="cristal"?n.value.length:y.value==="personalizadas"?le.value.length:0),we=Ie(()=>{let l=[],a="";return y.value==="normales"&&(l=oe.value,a="totalPrecioCliente"),y.value==="cristal"&&(l=n.value,a="total"),y.value==="personalizadas"&&(l=le.value,a="precioFinal"),l.reduce((p,g)=>p+(g[a]||0),0)}),ze=[{name:"status",label:"Estado",field:"status",align:"left",sortable:!0},{name:"idCotizacion",label:"ID De La Cotizacion",field:"idCotizacion",align:"left",sortable:!0},{name:"fechaCreacion",label:"Fecha De Creacion",field:"fechaCreacion",align:"left",sortable:!0,format:l=>l?l.split("T")[0]:""},{name:"area",label:"Area",field:"area",align:"left",sortable:!0},{name:"cliente",label:"Cliente",field:"cliente",align:"center",sortable:!0},{name:"precioBrutoTotal",label:"Precio Bruto Total",field:"precioBrutoTotal",align:"center",sortable:!0,format:l=>Number(l).toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0})+" COP"},{name:"totalPrecioCliente",label:"Precio al Cliente",field:"totalPrecioCliente",align:"right",sortable:!0,format:l=>Number(l).toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0})+" COP"},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}],Se=[{name:"id",label:"ID",field:"id",align:"left",sortable:!0},{name:"cliente",label:"Cliente",field:"cliente_nombre",align:"left",sortable:!0},{name:"tipo_cristal",label:"Tipo Cristal",field:"tipo_cristal",align:"left",sortable:!0},{name:"dimensiones",label:"Dimensiones",field:"dimensiones",align:"center"},{name:"grosor",label:"Grosor",field:"grosor",align:"center",sortable:!0},{name:"cantidad",label:"Piezas",field:"cantidad",align:"center",sortable:!0},{name:"status",label:"Estado",field:"status",align:"center",sortable:!0},{name:"fecha",label:"Fecha",field:"fecha_creacion",align:"center",sortable:!0,format:l=>new Date(l).toLocaleDateString()},{name:"total",label:"Total",field:"total",align:"right",sortable:!0},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}],Ve=[{name:"id",label:"ID",field:"id",align:"left",sortable:!0},{name:"cliente",label:"Cliente",field:"cliente_nombre",align:"left",sortable:!0},{name:"titulo",label:"T\xEDtulo",field:"titulo",align:"left",sortable:!0},{name:"categoria",label:"Categor\xEDa",field:"categoria",align:"center",sortable:!0},{name:"status",label:"Estado",field:"status",align:"center",sortable:!0},{name:"fecha",label:"Fecha",field:"fecha_creacion",align:"center",sortable:!0,format:l=>new Date(l).toLocaleDateString()},{name:"total",label:"Total",field:"total",align:"right",sortable:!0},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}],Le=l=>Number(l).toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0})+" COP",Ae=l=>({Pendiente:"orange",Aprobado:"green",Rechazada:"red","En Proceso":"blue",Completada:"positive"})[l]||"grey",W=async l=>{re.value[l]=!0;try{const a=await pe.post("https://backmultidestinos.onrender.com/cotizacion/cotizaciones",{tipo:l});l==="normales"&&(oe.value=a.data),l==="cristal"&&(n.value=a.data),l==="personalizadas"&&(le.value=a.data)}catch(a){K.notify({type:"negative",message:`Error al cargar cotizaciones ${l}`,position:"top"}),console.error(a)}finally{re.value[l]=!1}},D=async({destino:l="",hotel:a="",cliente:p=!1,asesor:g=!1,start:N="",end:V="",soloNoches:w=!1}={})=>{try{const f={};return p===!0?f.cliente=!0:typeof p=="string"&&(f.cliente=p),g===!0&&(f.asesor=!0),a&&(f.hotel=a),w&&a&&(f.hotel=a,f.soloNoches=!0),l&&(f.destino=l),N&&V&&(f.start=N,f.end=V),(await pe.post("https://backmultidestinos.onrender.com/cotizacion/lista",f)).data}catch(f){return console.error("Error al cargar datos:",f),{}}},Be=async()=>{const{value:l}=await v.fire({title:'<div style="color: #4A5568; font-size: 24px; font-weight: 600; margin-bottom: 10px;">\u2708\uFE0F Nueva Cotizaci\xF3n</div>',html:`
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
        `,width:"900px",showCancelButton:!0,confirmButtonText:"\u{1F4BE} Guardar Cotizaci\xF3n",cancelButtonText:"\u274C Cancelar",confirmButtonColor:"#667eea",cancelButtonColor:"#e53e3e",didOpen:async()=>{const a=document.getElementById("fechaInicio"),p=document.getElementById("fechaFin"),g=new Date().toISOString().split("T")[0];a.min=g,a.value=g,p.min=g,p.value=g,a.addEventListener("change",()=>{const o=a.value;p.min=o,p.value<o&&(p.value=o)});const N=document.getElementById("horaSalidaIda"),V=document.getElementById("horaLlegadaIda");function w(){const o=N.value,t=V.value;o&&t&&t<=o?(v.showValidationMessage("\u26A0\uFE0F La hora de llegada no puede ser menor o igual a la hora de salida."),V.value=""):v.resetValidationMessage()}N.addEventListener("change",w),V.addEventListener("change",w);const f=document.getElementById("horaSalidaVuelta"),T=document.getElementById("horaLlegadaVuelta");function G(){const o=f.value,t=T.value;o&&t&&t<=o?(v.showValidationMessage("\u26A0\uFE0F La hora de llegada de vuelta no puede ser menor o igual a la hora de salida."),T.value=""):v.resetValidationMessage()}f.addEventListener("change",G),T.addEventListener("change",G);const k=document.querySelectorAll("#horaSalidaEscala"),fe=document.querySelectorAll("#horaLlegadaEscala");k.forEach((o,t)=>{const c=fe[t],d=()=>{const m=o.value,_=c.value;m&&_&&_<=m?(v.showValidationMessage(`\u26A0\uFE0F En la Escala ${t+1}, la hora de llegada debe ser mayor a la de salida.`),c.value=""):v.resetValidationMessage()};o.addEventListener("change",d),c.addEventListener("change",d)});const ke=["Avianca","LATAM","Satena","JetSmart","Clic","Wingo","Plus ultra"];["aerolineaIda","aerolineaVuelta","aerolineaEscala1","aerolineaEscala2","aerolineaEscala3","aerolineaEscala4"].forEach(o=>{const t=document.getElementById(o);if(t){t.innerHTML="";const c=document.createElement("option");c.value="",c.textContent="\u2708\uFE0F Ej: Satena",c.disabled=!0,c.selected=!0,t.appendChild(c),ke.forEach(d=>{const m=document.createElement("option");m.value=d,m.textContent=d,t.appendChild(m)})}});const ie=[{checkboxId:"tieneEscala_Ida",sectionId:"infoEscala"},{checkboxId:"tieneEscala_Regreso",sectionId:"infoEscala_1"},{checkboxId:"tieneEscala_Ida_y_Regreso",sectionId:"infoEscala_2"},{checkboxId:"asesorExterno",sectionId:"infoAsesorExterno"},{checkboxId:"nocheAdicional",sectionId:"infoNocheAdicional"},{checkboxId:"suplemento",sectionId:"infoSuplemento"}],h={},u={};ie.forEach(({checkboxId:o,sectionId:t})=>{h[o]=document.getElementById(o),u[t]=document.getElementById(t)});function x(){const o=h.tieneEscala_Ida.checked,t=h.tieneEscala_Regreso.checked,c=h.tieneEscala_Ida_y_Regreso.checked;["tieneEscala_Ida","tieneEscala_Regreso","tieneEscala_Ida_y_Regreso"].forEach(d=>{h[d].disabled=!1;const m=ie.find(_=>_.checkboxId===d).sectionId;u[m].style.display="none"}),c?(h.tieneEscala_Ida.checked=!1,h.tieneEscala_Regreso.checked=!1,h.tieneEscala_Ida.disabled=!0,h.tieneEscala_Regreso.disabled=!0,u.infoEscala_2.style.display="block"):o?(h.tieneEscala_Regreso.checked=!1,h.tieneEscala_Ida_y_Regreso.checked=!1,h.tieneEscala_Regreso.disabled=!0,h.tieneEscala_Ida_y_Regreso.disabled=!0,u.infoEscala.style.display="block"):t&&(h.tieneEscala_Ida.checked=!1,h.tieneEscala_Ida_y_Regreso.checked=!1,h.tieneEscala_Ida.disabled=!0,h.tieneEscala_Ida_y_Regreso.disabled=!0,u.infoEscala_1.style.display="block")}["tieneEscala_Ida","tieneEscala_Regreso","tieneEscala_Ida_y_Regreso"].forEach(o=>{h[o].addEventListener("change",x)}),["asesorExterno","nocheAdicional","suplemento"].forEach(o=>{h[o].addEventListener("change",function(){const t=ie.find(c=>c.checkboxId===o).sectionId;u[t].style.display=this.checked?"block":"none"})});const L=["Bogot\xE1","Medell\xEDn","Cali","Barranquilla","Cartagena","Pereira","C\xFAcuta","Bucaramanga","Santa Marta","Monter\xEDa","Villavicencio","Armenia","Manizales","Neiva","Ibagu\xE9","Leticia","San Andr\xE9s","Riohacha","Yopal","Valledupar","Quibd\xF3","Pasto","Florencia","Tumaco","Popay\xE1n","Apartad\xF3","Corozal","Rionegro","Sincelejo","Guapi","Puerto Carre\xF1o","In\xEDrida","Mit\xFA","Turbo"],F=document.getElementById("ciudadSalida");F.innerHTML="";const A=document.createElement("option");A.value="",A.textContent="\u2708\uFE0F Seleccione ciudad de salida",A.disabled=!0,A.selected=!0,F.appendChild(A),L.forEach(o=>{const t=document.createElement("option");t.value=o,t.textContent=o,F.appendChild(t)});const ce=(await D()).destinos||[],O=document.getElementById("destino");O.innerHTML="";const q=document.createElement("option");q.value="",q.textContent="\u{1F30D} Seleccionar destino...",q.disabled=!0,q.selected=!0,O.appendChild(q),ce.forEach(o=>{const t=document.createElement("option");t.value=o.nombre,t.textContent=`${o.emoji||""} ${o.nombre}`,O.appendChild(t)});const z=document.getElementById("hotel");z.innerHTML="";const H=document.createElement("option");H.value="",H.textContent="\u{1F3E8} Seleccionar hotel...",H.disabled=!0,H.selected=!0,z.appendChild(H);let Q=[];O.addEventListener("change",async()=>{const o=O.value;if(z.innerHTML="",z.appendChild(H.cloneNode(!0)),Q=[],U(),!o)return;((await D({destino:o})).hoteles||[]).forEach(d=>{const m=typeof d=="string"?d:d.hotel||"";if(m){const _=document.createElement("option");_.value=m,_.textContent=m,z.appendChild(_)}})}),z.addEventListener("change",async()=>{const o=z.value;if(!o){Q=[],U();return}Q=(await D({hotel:o})).tiposHabitacion||[],U()});const te=document.getElementById("habitaciones"),$=document.getElementById("habitaciones-container");function de(o){const t=document.createElement("div");t.className="form-grid grid-3",t.id=`habitacion-${o+1}`;const c=Q.length>0?Q.map(m=>`<option value="${m}">${m}</option>`).join(""):'<option value="" disabled selected>\u2753 Sin tipos disponibles</option>';t.innerHTML=`
              <div class="form-group">
                <label class="form-label">Tipo de Habitaci\xF3n</label>
                <select class="form-select" name="tipoHabitacion-${o+1}">
                  ${c}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Adultos</label>
                <input type="number" name="adultos-${o+1}" class="form-input adultos-input" value="2" min="1" max="13">
              </div>
              <div class="form-group">
                <label class="form-label">Ni\xF1os</label>
                <input type="number" name="ninos-${o+1}" class="form-input" value="0" min="0">
              </div>
            `;const d=t.querySelector(".adultos-input");return d.addEventListener("blur",()=>{let m=parseInt(d.value);isNaN(m)||m<1?d.value=1:m>13&&(d.value=13)}),t}function U(){const o=Math.min(Math.max(parseInt(te.value)||1,1),10);$.innerHTML="";for(let t=0;t<o;t++){if(t>0){const c=document.createElement("div");c.className="divider",$.appendChild(c)}$.appendChild(de(t))}}U(),te.addEventListener("input",U);const Y=document.getElementById("cliente"),j=document.getElementById("correoCliente"),J=document.getElementById("iconoBloqueado"),ue=(await D({cliente:!0})).clientes||[];Y.innerHTML='<option value="" disabled selected>\u{1F464} Seleccionar cliente...</option>',ue.forEach(o=>{const t=document.createElement("option");t.value=o,t.textContent=o,Y.appendChild(t)}),Y.addEventListener("change",async()=>{const o=Y.value;if(!o){j.value="",j.disabled=!1,J.style.display="none";return}const c=(await D({cliente:o})).correo;c?(j.value=c,j.disabled=!0,J.style.display="inline-block",J.title="Correo asignado autom\xE1ticamente"):(j.value="",j.disabled=!1,J.style.display="none")});const C=document.getElementById("programaSelect"),b=document.createElement("option");b.value="",b.textContent="\u{1F30D} Seleccione un programa",b.disabled=!0,b.selected=!0;const be=async()=>{const o=document.getElementById("destino").value,t=document.getElementById("fechaInicio").value,c=document.getElementById("fechaFin").value;if(!o||!t||!c){he();return}try{const m=(await D({destino:o,start:t,end:c})).programas||[];if(he(),m.length===0){const _=document.createElement("option");_.value="",_.textContent="\u274C No hay programas disponibles",_.disabled=!0,C.appendChild(_);return}m.forEach(_=>{const ve=document.createElement("option");ve.value=_.nombrePrograma,ve.textContent=`\u{1F4D8} ${_.nombrePrograma}`,C.appendChild(ve)})}catch(d){console.error("Error al cargar programas:",d),he()}},he=()=>{C.innerHTML="",C.appendChild(b.cloneNode(!0))};document.getElementById("destino").addEventListener("change",be),document.getElementById("fechaInicio").addEventListener("change",be),document.getElementById("fechaFin").addEventListener("change",be);const ee=document.getElementById("selectNoches");z.addEventListener("change",async()=>{const o=z.value;if(ee.innerHTML='<option value="" disabled selected>Seleccione noches</option>',ee.disabled=!0,!o)return;const c=(await D({hotel:o,soloNoches:!0})).noches;if(!Array.isArray(c)||c.length===0){ee.innerHTML='<option value="" disabled selected>No hay noches disponibles</option>',ee.disabled=!0;return}for(const d of c){const m=document.createElement("option");m.value=d,m.textContent=`${d} noche${d!==1?"s":""}`,ee.appendChild(m)}ee.disabled=!1});const Re=document.getElementById("asesorExterno"),ne=document.getElementById("asesor"),De=document.getElementById("infoAsesorExterno");Re.addEventListener("change",async function(){const o=this.checked;if(De.style.display=o?"block":"none",o){ne.innerHTML='<option value="" disabled selected>\u{1F464} Seleccionar un Asesor...</option>';try{const c=(await D({asesor:!0})).asesores||[];if(c.length===0){const d=document.createElement("option");d.value="",d.textContent="\u26A0\uFE0F No hay asesores disponibles",ne.appendChild(d)}else c.forEach(d=>{const m=document.createElement("option");m.value=d,m.textContent=d,ne.appendChild(m)})}catch(t){console.error("Error al cargar asesores:",t),ne.innerHTML='<option value="" disabled>\u274C Error al cargar asesores</option>'}}else ne.innerHTML='<option value="" disabled selected>\u{1F464} Seleccionar un Asesor...</option>'})},preConfirm:()=>{const a=u=>{const x=document.querySelector(u);return x?x.value.trim():""},p=u=>{const x=a(u);return parseInt(x)||0},g=u=>{const x=document.querySelector(u);return x?x.checked:!1},N=()=>{const u=[],x=p("#habitaciones")||1;for(let L=1;L<=x;L++){const F=a(`[name="tipoHabitacion-${L}"]`),A=p(`[name="adultos-${L}"]`),Z=p(`[name="ninos-${L}"]`);u.push({numero:L,tipoHabitacion:F,adultos:A,ninos:Z,total:A+Z})}return u},V=()=>{var x,L,F,A,Z,ce,O,q,z,H,Q,te,$,de,U,Y,j,J,ge,ue;const u={ida:null,regreso:null,idaYRegreso:null};if(g("#tieneEscala_Ida")){const C=document.querySelector("#infoEscala");C&&(u.ida={aerolinea:((x=C.querySelector("#aerolineaEscala"))==null?void 0:x.value)||"",numeroVuelo:((L=C.querySelector("#vueloEscala"))==null?void 0:L.value)||"",horaSalida:((F=C.querySelector("#horaSalidaEscala"))==null?void 0:F.value)||"",horaLlegada:((A=C.querySelector("#horaLlegadaEscala"))==null?void 0:A.value)||"",clase:((Z=C.querySelector("#claseEscala"))==null?void 0:Z.value)||""})}if(g("#tieneEscala_Regreso")){const C=document.querySelector("#infoEscala_1");if(C){const b=C.querySelectorAll("input");u.regreso={aerolinea:((ce=b[0])==null?void 0:ce.value)||"",numeroVuelo:((O=b[1])==null?void 0:O.value)||"",horaSalida:((q=b[2])==null?void 0:q.value)||"",horaLlegada:((z=b[3])==null?void 0:z.value)||"",clase:((H=b[4])==null?void 0:H.value)||""}}}if(g("#tieneEscala_Ida_y_Regreso")){const C=document.querySelector("#infoEscala_2");if(C){const b=C.querySelectorAll("input");u.idaYRegreso={vuelo1:{aerolinea:((Q=b[0])==null?void 0:Q.value)||"",numeroVuelo:((te=b[1])==null?void 0:te.value)||"",horaSalida:(($=b[2])==null?void 0:$.value)||"",horaLlegada:((de=b[3])==null?void 0:de.value)||"",clase:((U=b[4])==null?void 0:U.value)||""},vuelo2:{aerolinea:((Y=b[5])==null?void 0:Y.value)||"",numeroVuelo:((j=b[6])==null?void 0:j.value)||"",horaSalida:((J=b[7])==null?void 0:J.value)||"",horaLlegada:((ge=b[8])==null?void 0:ge.value)||"",clase:((ue=b[9])==null?void 0:ue.value)||""}}}}return u},w=N(),f=w.reduce((u,x)=>u+x.adultos,0),T=w.reduce((u,x)=>u+x.ninos,0),G=f+T,k={fechaInicio:a("#fechaInicio"),fechaFin:a("#fechaFin"),ciudadSalida:a("#ciudadSalida"),destino:a("#destino"),hotel:a("#hotel"),habitaciones:w,numeroHabitaciones:w.length,totalAdultos:f,totalNinos:T,totalPasajeros:G,cliente:a("#cliente"),correoCliente:a("#correoCliente"),telefono:a("#telefono"),programa:a("#programaSelect"),duracionNoches:a("#selectNoches"),vueloIda:{aerolinea:a("#aerolineaIda"),numeroVuelo:a("#vueloIda"),horaSalida:a("#horaSalidaIda"),horaLlegada:a("#horaLlegadaIda"),clase:a("#claseIda")},vueloVuelta:{aerolinea:a("#aerolineaVuelta"),numeroVuelo:a("#vueloVuelta"),horaSalida:a("#horaSalidaVuelta"),horaLlegada:a("#horaLlegadaVuelta"),clase:a("#claseVuelta")},escalas:V(),opciones:{asesorExterno:{activo:g("#asesorExterno"),asesor:g("#asesorExterno")?a("#asesor"):null},nocheAdicional:{activo:g("#nocheAdicional"),motivo:g("#nocheAdicional")?a("#motivoNoche"):null},suplemento:{activo:g("#suplemento"),tipo:g("#suplemento")?a("#tipoSuplemento"):null}},valoresExtra:p("#valoresExtra"),transferencia:a("#transferencia"),precioTransferencia:p("#precioTransferencia"),incluye:a("#incluye"),noIncluye:a("#noIncluye"),observaciones:a("#observaciones"),descuentos:p("#descuentos"),impuestos:p("#impuestos"),total:p("#total"),moneda:a("#moneda")||"USD",tipo:"normales",fechaCreacion:new Date().toISOString(),estado:"pendiente",creadorCotizacion:a("#creadorCotizacion")||"Sistema"},fe=[{campo:"destino",mensaje:"Por favor selecciona un destino"},{campo:"hotel",mensaje:"Por favor selecciona un hotel"},{campo:"cliente",mensaje:"Por favor selecciona un cliente"},{campo:"correoCliente",mensaje:"Por favor ingresa el correo del cliente"},{campo:"programa",mensaje:"Por favor selecciona un programa"},{campo:"duracionNoches",mensaje:"Por favor selecciona la duraci\xF3n en noches"},{campo:"fechaInicio",mensaje:"Por favor selecciona la fecha de inicio"},{campo:"fechaFin",mensaje:"Por favor selecciona la fecha de fin"}];for(const u of fe)if(!k[u.campo])return v.showValidationMessage(u.mensaje),!1;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(k.correoCliente))return v.showValidationMessage("Por favor ingresa un correo electr\xF3nico v\xE1lido"),!1;if(k.habitaciones.filter(u=>u.tipoHabitacion&&u.adultos>0).length===0)return v.showValidationMessage("Por favor configura al menos una habitaci\xF3n con tipo y n\xFAmero de adultos"),!1;const ie=new Date(k.fechaInicio);return new Date(k.fechaFin)<=ie?(v.showValidationMessage("La fecha de fin debe ser posterior a la fecha de inicio"),!1):(console.log("Datos del formulario recopilados:",k),k)}});if(l)try{await v.fire({title:"\u{1F4CB} \xBFDeseas guardar esta cotizaci\xF3n?",html:`<pre style="text-align:left;max-height:300px;overflow:auto;background:#f7f7f7;padding:1em;border-radius:6px">${JSON.stringify(l,null,2)}</pre>`,width:600,confirmButtonText:"S\xED, guardar",confirmButtonColor:"#48bb78",showCancelButton:!0,cancelButtonText:"Cancelar",cancelButtonColor:"#e53e3e"}).then(p=>{if(!p.isConfirmed)throw new Error("Cancelado por el usuario")}),v.fire({title:"\u23F3 Guardando cotizaci\xF3n...",text:"Por favor espera mientras procesamos la informaci\xF3n",allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,didOpen:()=>{v.showLoading()}});const a=await pe.post("https://backmultidestinos.onrender.com/cotizacion/Guardar_Cotizacion",l);if(a.data.success)await v.fire({icon:"success",title:"\u{1F389} \xA1Cotizaci\xF3n guardada exitosamente!",text:`ID de cotizaci\xF3n: ${a.data.id}`,confirmButtonText:"Perfecto",confirmButtonColor:"#48bb78"}),await W("normales");else throw new Error(a.data.message||"Error al guardar")}catch(a){console.error("Error al guardar cotizaci\xF3n:",a),await v.fire({icon:"error",title:"\u274C Error al guardar",text:a.message||"Hubo un problema al guardar la cotizaci\xF3n. Por favor intenta nuevamente.",confirmButtonText:"Entendido",confirmButtonColor:"#e53e3e"})}},Pe=()=>console.log("Abrir formulario cristal"),Ne=()=>console.log("Abrir formulario personalizada"),Te=async(l,a)=>{var p,g,N,V,w;console.log("Ver detalle:",l,a);try{const f=await fetch("https://backmultidestinos.onrender.com/api/generar-pdf/solicitud-reserva",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numeroCotizacion:l.numero||l.id,razonSocial:((p=l.cliente)==null?void 0:p.razonSocial)||l.razonSocial,nit:((g=l.cliente)==null?void 0:g.nit)||l.nit,domicilio:((N=l.cliente)==null?void 0:N.domicilio)||l.domicilio,vuelos:l.vuelos||[],incluye:l.incluye,noIncluye:l.noIncluye,liquidacion:l.liquidacion||[],observaciones:l.observaciones,aerolinea:l.aerolinea||"MULTISERVICIOS EXPRESS",adultos:((V=l.pasajeros)==null?void 0:V.adultos)||2,ni\u00F1os:((w=l.pasajeros)==null?void 0:w.ni\u00F1os)||1,vehiculos:l.vehiculos||"1+1"})});if(f.ok){const T=await f.blob(),G=window.URL.createObjectURL(T),k=document.createElement("a");k.href=G,k.download=`solicitud-reserva-${Date.now()}.pdf`,document.body.appendChild(k),k.click(),document.body.removeChild(k),window.URL.revokeObjectURL(G)}}catch(f){console.error("Error generando PDF:",f)}},He=(l,a)=>console.log("Editar:",l,a),je=async(l,a)=>{if((await v.fire({title:"\xBFEliminar cotizaci\xF3n?",text:"Esta acci\xF3n no se puede deshacer. \xBFDeseas continuar?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#00bcd4",confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar",background:"#ffffff",color:"#333",backdrop:`
          rgba(0,0,0,0.5)
          url("https://i.imgur.com/UC2vXfT.gif")
          center top
          no-repeat
        `,customClass:{popup:"swal2-elegante"}})).isConfirmed)try{await pe.delete(`https://backmultidestinos.onrender.com/cotizacion/${a}/${l}`),v.fire({icon:"success",title:"\xA1Eliminada!",text:"La cotizaci\xF3n ha sido eliminada correctamente.",background:"#ffffff",color:"#333",iconColor:"#4caf50",confirmButtonColor:"#4caf50",customClass:{popup:"swal2-elegante"}}),W(a)}catch{v.fire({icon:"error",title:"Error",text:"Ocurri\xF3 un problema al eliminar la cotizaci\xF3n.",background:"#ffffff",color:"#333",iconColor:"#f44336",confirmButtonColor:"#f44336",customClass:{popup:"swal2-elegante"}})}};return qe(()=>{W("normales"),W("cristal"),W("personalizadas")}),{tabActual:y,cotizacionesNormales:oe,cotizacionesCristal:n,cotizacionesPersonalizadas:le,loading:re,paginacion:s,totalCotizaciones:P,montoTotal:we,columnasNormales:ze,columnasCristal:Se,columnasPersonalizadas:Ve,formatearMonto:Le,getEstadoColor:Ae,cargarCotizaciones:W,abrirFormularioNormal:Be,abrirFormularioCristal:Pe,abrirFormularioPersonalizada:Ne,verDetalle:Te,editarCotizacion:He,eliminarCotizacion:je}}},I=K=>(Ge("data-v-70461893"),K=K(),Ye(),K),$e=I(()=>r("video",{autoplay:"",muted:"",loop:"",playsinline:"",class:"video-background"},[r("source",{src:Ke,type:"video/mp4"}),B(" Tu navegador no soporta video HTML5. ")],-1)),ea={class:"page-header"},aa={class:"container"},oa={class:"header-content"},la=I(()=>r("div",{class:"header-text"},[r("h1",{class:"page-title"},"M\xF3dulo de Cotizaciones"),r("p",{class:"page-subtitle"},"Gesti\xF3n integral de cotizaciones empresarial")],-1)),ia={class:"header-stats"},ta={class:"stat-card"},na={class:"stat-number"},sa=I(()=>r("div",{class:"stat-label"},"Total Cotizaciones",-1)),ra={class:"stat-card"},ca={class:"stat-number"},da=I(()=>r("div",{class:"stat-label"},"Valor Total",-1)),ua={class:"container"},ma={class:"section-header"},pa={class:"section-title"},fa=I(()=>r("h2",null,"Cotizaciones Normales",-1)),ga={class:"card-title"},ba=I(()=>r("span",null,"Listado de Cotizaciones Normales",-1)),ha={class:"total-amount"},va={class:"action-buttons"},ya={class:"no-data"},xa=I(()=>r("div",{class:"no-data-text"},"No hay cotizaciones normales registradas",-1)),Ea={class:"section-header"},Ca={class:"section-title"},_a=I(()=>r("h2",null,"Cotizaciones Ca\xF1o Cristal",-1)),ka={class:"card-title"},Ia=I(()=>r("span",null,"Listado de Cotizaciones Ca\xF1o Cristal",-1)),wa={class:"total-amount"},za={class:"action-buttons"},Sa={class:"no-data"},Va=I(()=>r("div",{class:"no-data-text"},"No hay cotizaciones de ca\xF1o cristal registradas",-1)),La={class:"section-header"},Aa={class:"section-title"},Ba=I(()=>r("h2",null,"Cotizaciones Personalizadas",-1)),Pa={class:"card-title"},Na=I(()=>r("span",null,"Listado de Cotizaciones Personalizadas",-1)),Ta={class:"total-amount"},Ha={class:"action-buttons"},ja={class:"no-data"},Ma=I(()=>r("div",{class:"no-data-text"},"No hay cotizaciones personalizadas registradas",-1));function Ra(K,y,oe,n,le,re){return Qe(),Ue(Je,{class:"cotizaciones-page"},{default:i(()=>[$e,r("div",ea,[r("div",aa,[r("div",oa,[la,r("div",ia,[r("div",ta,[r("div",na,X(n.totalCotizaciones),1),sa]),r("div",ra,[r("div",ca,X(n.formatearMonto(n.montoTotal)),1),da])])])])]),r("div",ua,[e(Fe,{modelValue:n.tabActual,"onUpdate:modelValue":y[0]||(y[0]=s=>n.tabActual=s),class:"cotizaciones-tabs","indicator-color":"primary","active-color":"primary",align:"justify","narrow-indicator":""},{default:i(()=>[e(ye,{name:"normales",label:"Cotizaciones Normales",icon:"receipt_long"}),e(ye,{name:"cristal",label:"Ca\xF1o Cristal",icon:"window"}),e(ye,{name:"personalizadas",label:"Personalizadas",icon:"tune"})]),_:1},8,["modelValue"]),e(me),e(Oe,{modelValue:n.tabActual,"onUpdate:modelValue":y[4]||(y[4]=s=>n.tabActual=s),animated:"",class:"tab-panels"},{default:i(()=>[e(xe,{name:"normales",class:"tab-panel"},{default:i(()=>[r("div",ma,[r("div",pa,[e(M,{name:"receipt_long",size:"md",color:"primary"}),fa]),e(E,{onClick:n.abrirFormularioNormal,color:"primary",icon:"add",label:"Nueva Cotizaci\xF3n",unelevated:"",class:"action-btn"},null,8,["onClick"])]),e(Ee,{class:"data-card"},{default:i(()=>[e(Ce,{class:"card-header"},{default:i(()=>[r("div",ga,[e(M,{name:"list"}),ba]),e(E,{onClick:y[1]||(y[1]=()=>n.cargarCotizaciones("normales")),icon:"refresh",flat:"",round:"",color:"primary",loading:n.loading.normales},null,8,["loading"])]),_:1}),e(me),e(_e,{rows:n.cotizacionesNormales,columns:n.columnasNormales,"row-key":"id",loading:n.loading.normales,pagination:n.paginacion,class:"cotizaciones-table",flat:"",bordered:!1},{"body-cell-status":i(s=>[e(S,{props:s},{default:i(()=>[e(se,{color:n.getEstadoColor(s.value),"text-color":"white",label:s.value,size:"sm"},null,8,["color","label"])]),_:2},1032,["props"])]),"body-cell-total":i(s=>[e(S,{props:s,class:"text-right"},{default:i(()=>[r("span",ha,"$"+X(n.formatearMonto(s.value)),1)]),_:2},1032,["props"])]),"body-cell-acciones":i(s=>[e(S,{props:s},{default:i(()=>[r("div",va,[e(E,{onClick:P=>n.verDetalle(s.row,"normal"),icon:"visibility",color:"primary",flat:"",round:"",size:"sm",dense:""},{default:i(()=>[e(R,null,{default:i(()=>[B("Ver detalle")]),_:1})]),_:2},1032,["onClick"]),e(E,{onClick:P=>n.editarCotizacion(s.row,"normal"),icon:"edit",color:"warning",flat:"",round:"",size:"sm",dense:""},{default:i(()=>[e(R,null,{default:i(()=>[B("Editar")]),_:1})]),_:2},1032,["onClick"]),e(E,{onClick:P=>n.eliminarCotizacion(s.row.id,"normal"),icon:"delete",color:"negative",flat:"",round:"",size:"sm",dense:""},{default:i(()=>[e(R,null,{default:i(()=>[B("Eliminar")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),"no-data":i(()=>[r("div",ya,[e(M,{name:"receipt_long",size:"4em",color:"grey-4"}),xa,e(E,{onClick:n.abrirFormularioNormal,color:"primary",label:"Crear primera cotizaci\xF3n",outline:"",class:"q-mt-md"},null,8,["onClick"])])]),_:1},8,["rows","columns","loading","pagination"])]),_:1})]),_:1}),e(xe,{name:"cristal",class:"tab-panel"},{default:i(()=>[r("div",Ea,[r("div",Ca,[e(M,{name:"window",size:"md",color:"secondary"}),_a]),e(E,{onClick:n.abrirFormularioCristal,color:"secondary",icon:"add",label:"Nueva Cotizaci\xF3n",unelevated:"",class:"action-btn"},null,8,["onClick"])]),e(Ee,{class:"data-card"},{default:i(()=>[e(Ce,{class:"card-header"},{default:i(()=>[r("div",ka,[e(M,{name:"list"}),Ia]),e(E,{onClick:y[2]||(y[2]=()=>n.cargarCotizaciones("cristal")),icon:"refresh",flat:"",round:"",color:"secondary",loading:n.loading.cristal},null,8,["loading"])]),_:1}),e(me),e(_e,{rows:n.cotizacionesCristal,columns:n.columnasCristal,"row-key":"id",loading:n.loading.cristal,pagination:n.paginacion,class:"cotizaciones-table",flat:""},{"body-cell-dimensiones":i(s=>[e(S,{props:s},{default:i(()=>[B(X(s.row.alto)+"cm x "+X(s.row.ancho)+"cm ",1)]),_:2},1032,["props"])]),"body-cell-grosor":i(s=>[e(S,{props:s},{default:i(()=>[e(se,{color:"info","text-color":"white",label:`${s.value}mm`,size:"sm"},null,8,["label"])]),_:2},1032,["props"])]),"body-cell-status":i(s=>[e(S,{props:s},{default:i(()=>[e(se,{color:n.getEstadoColor(s.value),"text-color":"white",label:s.value,size:"sm"},null,8,["color","label"])]),_:2},1032,["props"])]),"body-cell-total":i(s=>[e(S,{props:s,class:"text-right"},{default:i(()=>[r("span",wa,"$"+X(n.formatearMonto(s.value)),1)]),_:2},1032,["props"])]),"body-cell-acciones":i(s=>[e(S,{props:s},{default:i(()=>[r("div",za,[e(E,{onClick:P=>n.verDetalle(s.row,"cristal"),icon:"visibility",color:"primary",flat:"",round:"",size:"sm",dense:""},{default:i(()=>[e(R,null,{default:i(()=>[B("Ver detalle")]),_:1})]),_:2},1032,["onClick"]),e(E,{onClick:P=>n.editarCotizacion(s.row,"cristal"),icon:"edit",color:"warning",flat:"",round:"",size:"sm",dense:""},{default:i(()=>[e(R,null,{default:i(()=>[B("Editar")]),_:1})]),_:2},1032,["onClick"]),e(E,{onClick:P=>n.eliminarCotizacion(s.row.id,"cristal"),icon:"delete",color:"negative",flat:"",round:"",size:"sm",dense:""},{default:i(()=>[e(R,null,{default:i(()=>[B("Eliminar")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),"no-data":i(()=>[r("div",Sa,[e(M,{name:"window",size:"4em",color:"grey-4"}),Va,e(E,{onClick:n.abrirFormularioCristal,color:"secondary",label:"Crear primera cotizaci\xF3n",outline:"",class:"q-mt-md"},null,8,["onClick"])])]),_:1},8,["rows","columns","loading","pagination"])]),_:1})]),_:1}),e(xe,{name:"personalizadas",class:"tab-panel"},{default:i(()=>[r("div",La,[r("div",Aa,[e(M,{name:"tune",size:"md",color:"accent"}),Ba]),e(E,{onClick:n.abrirFormularioPersonalizada,color:"accent",icon:"add",label:"Nueva Cotizaci\xF3n",unelevated:"",class:"action-btn"},null,8,["onClick"])]),e(Ee,{class:"data-card"},{default:i(()=>[e(Ce,{class:"card-header"},{default:i(()=>[r("div",Pa,[e(M,{name:"list"}),Na]),e(E,{onClick:y[3]||(y[3]=()=>n.cargarCotizaciones("personalizadas")),icon:"refresh",flat:"",round:"",color:"accent",loading:n.loading.personalizadas},null,8,["loading"])]),_:1}),e(me),e(_e,{rows:n.cotizacionesPersonalizadas,columns:n.columnasPersonalizadas,"row-key":"id",loading:n.loading.personalizadas,pagination:n.paginacion,class:"cotizaciones-table",flat:""},{"body-cell-categoria":i(s=>[e(S,{props:s},{default:i(()=>[e(se,{color:"purple","text-color":"white",label:s.value,size:"sm"},null,8,["label"])]),_:2},1032,["props"])]),"body-cell-status":i(s=>[e(S,{props:s},{default:i(()=>[e(se,{color:n.getEstadoColor(s.value),"text-color":"white",label:s.value,size:"sm"},null,8,["color","label"])]),_:2},1032,["props"])]),"body-cell-total":i(s=>[e(S,{props:s,class:"text-right"},{default:i(()=>[r("span",Ta,"$"+X(n.formatearMonto(s.value)),1)]),_:2},1032,["props"])]),"body-cell-acciones":i(s=>[e(S,{props:s},{default:i(()=>[r("div",Ha,[e(E,{onClick:P=>n.verDetalle(s.row,"personalizada"),icon:"visibility",color:"primary",flat:"",round:"",size:"sm",dense:""},{default:i(()=>[e(R,null,{default:i(()=>[B("Ver detalle")]),_:1})]),_:2},1032,["onClick"]),e(E,{onClick:P=>n.editarCotizacion(s.row,"personalizada"),icon:"edit",color:"warning",flat:"",round:"",size:"sm",dense:""},{default:i(()=>[e(R,null,{default:i(()=>[B("Editar")]),_:1})]),_:2},1032,["onClick"]),e(E,{onClick:P=>n.eliminarCotizacion(s.row.id,"personalizada"),icon:"delete",color:"negative",flat:"",round:"",size:"sm",dense:""},{default:i(()=>[e(R,null,{default:i(()=>[B("Eliminar")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),"no-data":i(()=>[r("div",ja,[e(M,{name:"tune",size:"4em",color:"grey-4"}),Ma,e(E,{onClick:n.abrirFormularioPersonalizada,color:"accent",label:"Crear primera cotizaci\xF3n",outline:"",class:"q-mt-md"},null,8,["onClick"])])]),_:1},8,["rows","columns","loading","pagination"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var io=We(Ze,[["render",Ra],["__scopeId","data-v-70461893"]]);export{io as default};
