import{c as ol,aK as al,aL as nl,r as w,a as k,aC as il,h as oe,I as rl,a6 as V,C as ae,g as sl,j as cl,a0 as dl,a1 as ul,a2 as d,a5 as m,a3 as o,a7 as _,am as el,a4 as v,an as ee,a8 as ne,a9 as pl,ac as ml,ad as bl}from"./index.8668ee20.js";import{a as gl,Q as ie,c as fl,b as re}from"./QTabPanels.0bb9e627.js";import{Q as se}from"./QInput.295edbbb.js";import{a as vl,j as hl,h as xl}from"./use-key-composition.cb357e58.js";import{b as Il}from"./format.1b830b10.js";import{a as ce,Q as D}from"./QTable.56f24998.js";import{Q as L}from"./QTooltip.53c7d529.js";import{Q as yl}from"./QPage.0182de65.js";import{u as wl}from"./use-quasar.b6268352.js";import{S as c}from"./sweetalert2.esm.all.0f865825.js";import{a as de}from"./axios.37d53be1.js";import{_ as _l}from"./cotizaciones.31a1374b.js";import{_ as El}from"./plugin-vue_export-helper.21dcd24c.js";import"./touch.151b3387.js";import"./QSelect.82c7b22d.js";import"./selection.2e951b06.js";import"./use-render-cache.1a7235d4.js";import"./use-file-dom-props.014fd283.js";import"./QList.0e36c883.js";var Cl=ol({name:"QRating",props:{...al,...vl,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(t,{slots:b,emit:z}){const{proxy:{$q:u}}=sl(),j=nl(t),O=hl(t),r=xl(O),g=w(0);let E={};const T=k(()=>t.readonly!==!0&&t.disable!==!0),n=k(()=>`q-rating row inline items-center q-rating--${T.value===!0?"":"non-"}editable`+(t.noDimming===!0?" q-rating--no-dimming":"")+(t.disable===!0?" disabled":"")+(t.color!==void 0&&Array.isArray(t.color)===!1?` text-${t.color}`:"")),$=k(()=>{const p=Array.isArray(t.icon)===!0?t.icon.length:0,i=Array.isArray(t.iconSelected)===!0?t.iconSelected.length:0,h=Array.isArray(t.iconHalf)===!0?t.iconHalf.length:0,B=Array.isArray(t.color)===!0?t.color.length:0,A=Array.isArray(t.colorSelected)===!0?t.colorSelected.length:0,s=Array.isArray(t.colorHalf)===!0?t.colorHalf.length:0;return{iconLen:p,icon:p>0?t.icon[p-1]:t.icon,selIconLen:i,selIcon:i>0?t.iconSelected[i-1]:t.iconSelected,halfIconLen:h,halfIcon:h>0?t.iconHalf[i-1]:t.iconHalf,colorLen:B,color:B>0?t.color[B-1]:t.color,selColorLen:A,selColor:A>0?t.colorSelected[A-1]:t.colorSelected,halfColorLen:s,halfColor:s>0?t.colorHalf[s-1]:t.colorHalf}}),Q=k(()=>{if(typeof t.iconAriaLabel=="string"){const p=t.iconAriaLabel.length!==0?`${t.iconAriaLabel} `:"";return i=>`${p}${i}`}if(Array.isArray(t.iconAriaLabel)===!0){const p=t.iconAriaLabel.length;if(p>0)return i=>t.iconAriaLabel[Math.min(i,p)-1]}return(p,i)=>`${i} ${p}`}),G=k(()=>{const p=[],i=$.value,h=Math.ceil(t.modelValue),B=T.value===!0?0:null,A=t.iconHalf===void 0||h===t.modelValue?-1:h;for(let s=1;s<=t.max;s++){const C=g.value===0&&t.modelValue>=s||g.value>0&&g.value>=s,S=A===s&&g.value<s,M=g.value>0&&(S===!0?h:t.modelValue)>=s&&g.value<s,K=S===!0?s<=i.halfColorLen?t.colorHalf[s-1]:i.halfColor:i.selColor!==void 0&&C===!0?s<=i.selColorLen?t.colorSelected[s-1]:i.selColor:s<=i.colorLen?t.color[s-1]:i.color,te=(S===!0?s<=i.halfIconLen?t.iconHalf[s-1]:i.halfIcon:i.selIcon!==void 0&&(C===!0||M===!0)?s<=i.selIconLen?t.iconSelected[s-1]:i.selIcon:s<=i.iconLen?t.icon[s-1]:i.icon)||u.iconSet.rating.icon;p.push({name:(S===!0?s<=i.halfIconLen?t.iconHalf[s-1]:i.halfIcon:i.selIcon!==void 0&&(C===!0||M===!0)?s<=i.selIconLen?t.iconSelected[s-1]:i.selIcon:s<=i.iconLen?t.icon[s-1]:i.icon)||u.iconSet.rating.icon,attrs:{tabindex:B,role:"radio","aria-checked":t.modelValue===s?"true":"false","aria-label":Q.value(s,te)},iconClass:"q-rating__icon"+(C===!0||S===!0?" q-rating__icon--active":"")+(M===!0?" q-rating__icon--exselected":"")+(g.value===s?" q-rating__icon--hovered":"")+(K!==void 0?` text-${K}`:"")})}return p}),le=k(()=>{const p={role:"radiogroup"};return t.disable===!0&&(p["aria-disabled"]="true"),t.readonly===!0&&(p["aria-readonly"]="true"),p});function U(p){if(T.value===!0){const i=Il(parseInt(p,10),1,parseInt(t.max,10)),h=t.noReset!==!0&&t.modelValue===i?0:i;h!==t.modelValue&&z("update:modelValue",h),g.value=0}}function J(p){T.value===!0&&(g.value=p)}function R(p,i){switch(p.keyCode){case 13:case 32:return U(i),ae(p);case 37:case 40:return E[`rt${i-1}`]&&E[`rt${i-1}`].focus(),ae(p);case 39:case 38:return E[`rt${i+1}`]&&E[`rt${i+1}`].focus(),ae(p)}}function Y(){g.value=0}return il(()=>{E={}}),()=>{const p=[];return G.value.forEach(({iconClass:i,name:h,attrs:B},A)=>{const s=A+1;p.push(oe("div",{key:s,ref:C=>{E[`rt${s}`]=C},class:"q-rating__icon-container flex flex-center",...B,onClick(){U(s)},onMouseover(){J(s)},onMouseout:Y,onFocus(){J(s)},onBlur:Y,onKeyup(C){R(C,s)}},rl(b[`tip-${s}`],[oe(V,{class:i,name:h})])))}),t.name!==void 0&&t.disable!==!0&&r(p,"push"),oe("div",{class:n.value,style:j.value,...le.value},p)}}});const $l={setup(){const t=wl(),b=w("hoteles"),z=w(""),u=w(""),j=w(""),O=w(!1),r=w(!1),g=w([]),E=w([]),T=w([]),n=l=>isNaN(l)||l===null?"N/A":`$ ${Number(l).toLocaleString("es-CO")} COP`,$=l=>l&&l.trim()!==""?l:"N/A",Q=w(!1),G=(l,e={})=>{if(!l)return"N/A";const a=new Date(l);if(isNaN(a))return"N/A";const f={year:"numeric",month:"long",day:"numeric",timeZone:"UTC"};return a.toLocaleDateString("es-ES",{...f,...e})},le=[{name:"pertenece",label:"Pertenece",field:"pertenece",align:"left",format:$},{name:"destino",label:"Destino",field:"destino",align:"left",format:$},{name:"nombrePrograma",label:"Nombre del Programa",field:"nombrePrograma",align:"center",format:$},{name:"hotel",label:"Hotel",field:"hotel",align:"right",format:$},{name:"plan",label:"Plan",field:"plan",align:"center",format:$},{name:"noches",label:"Noches",field:"noches",align:"left",format:$},{name:"tipoHabitacion",label:"Tipo de Habitaci\xF3n",field:"tipoHabitacion",format:$},{name:"sencilla",label:"Sencilla",field:"sencilla",format:n},{name:"doble",label:"Doble",field:"doble",format:n},{name:"triple",label:"Triple",field:"triple",format:n},{name:"cuadruple",label:"cuadruple",field:"cuadruple",format:n},{name:"quintuple",label:"Qu\xEDntuple",field:"quintuple",format:n},{name:"sextuple",label:"S\xE9xtuple",field:"sextuple",format:n},{name:"ni\xF1o",label:"Ni\xF1o",field:"ni\xF1o",format:n},{name:"nocheAdicionalsencilla",label:"Noche Adicional Sencilla",field:"nocheAdicionalsencilla",format:n},{name:"nocheAdicionaldoble",label:"Noche Adicional Doble",field:"nocheAdicionaldoble",format:n},{name:"nocheAdicionaltriple",label:"Noche Adicional Triple",field:"nocheAdicionaltriple",format:n},{name:"nocheAdicionalcuadruple",label:"Noche Adicional Cu\xE1druple",field:"nocheAdicionalcuadruple",format:n},{name:"nocheAdicionalni\xF1o",label:"Noche Adicional Ni\xF1o",field:"nocheAdicionalni\xF1o",format:n},{name:"incluye",label:"Incluye",field:"incluye",align:"left",format:l=>(l||"N/A").replace(/¿/g,"<br>"),html:!0},{name:"noIncluye",label:"No Incluye",field:"noIncluye",align:"left",format:l=>(l||"N/A").replace(/¿/g,"<br>"),html:!0},{name:"FechaInicio",label:"Fecha Inicio",field:"FechaInicio",format:G},{name:"FechaFin",label:"Fecha Fin",field:"FechaFin",format:G},{name:"acciones",label:"Acciones",field:"acciones"}],U=[{name:"pertenece",label:"Pertenece",field:"pertenece",sortable:!0},{name:"destino",label:"Destino",field:"destino",sortable:!0},{name:"combus",label:"Combustible",field:"combus",sortable:!0,format:n},{name:"tasa",label:"Tasa",field:"tasa",sortable:!0,format:n},{name:"iva",label:"IVA",field:"iva",sortable:!0,format:n},{name:"ta",label:"TA",field:"ta",sortable:!0,format:n},{name:"ivaTa",label:"IVA TA",field:"ivaTa",sortable:!0,format:n},{name:"sencilla_ImpuestoHotel",label:"Sencilla Impuesto Hotel",field:"sencilla_ImpuestoHotel",sortable:!0,format:n},{name:"doble_ImpuestoHotel",label:"Doble Impuesto Hotel",field:"doble_ImpuestoHotel",sortable:!0,format:n},{name:"triple_ImpuestoHotel",label:"Triple Impuesto Hotel",field:"triple_ImpuestoHotel",sortable:!0,format:n},{name:"cuadruple_ImpuestoHotel",label:"Cuadruple Impuesto Hotel",field:"cuadruple_ImpuestoHotel",sortable:!0,format:n},{name:"quintuple_ImpuestoHotel",label:"Quintuple Impuesto Hotel",field:"quintuple_ImpuestoHotel",sortable:!0,format:n},{name:"sextuple_ImpuestoHotel",label:"Sextuple Impuesto Hotel",field:"sextuple_ImpuestoHotel",sortable:!0,format:n},{name:"ni\xF1o_ImpuestoHotel",label:"ni\xF1o Impuesto Hotel",field:"ni\xF1o_ImpuestoHotel",sortable:!0,format:n},{name:"sencilla_ImpuestoIngr",label:"Sencilla Impuesto Ingr",field:"sencilla_ImpuestoIngr",sortable:!0,format:n},{name:"doble_ImpuestoIngr",label:"Doble Impuesto Ingr",field:"doble_ImpuestoIngr",sortable:!0,format:n},{name:"triple_ImpuestoIngr",label:"Triple Impuesto Ingr",field:"triple_ImpuestoIngr",sortable:!0},{name:"cuadruple_ImpuestoIngr",label:"Cuadruple Impuesto Ingr",field:"cuadruple_ImpuestoIngr",sortable:!0,format:n},{name:"quintuple_ImpuestoIngr",label:"Quintuple Impuesto Ingr",field:"quintuple_ImpuestoIngr",sortable:!0,format:n},{name:"sextuple_ImpuestoIngr",label:"Sextuple Impuesto Ingr",field:"sextuple_ImpuestoIngr",sortable:!0,format:n},{name:"ni\xF1o_ImpuestoIngr",label:"ni\xF1o Impuesto Ingr",field:"ni\xF1o_ImpuestoIngr",sortable:!0,format:n},{name:"sencilla_Impoconsumo",label:"Sencilla Impoconsumo",field:"sencilla_Impoconsumo",sortable:!0,format:n},{name:"doble_Impoconsumo",label:"Doble Impoconsumo",field:"doble_Impoconsumo",sortable:!0,format:n},{name:"triple_Impoconsumo",label:"Triple Impoconsumo",field:"triple_Impoconsumo",sortable:!0,format:n},{name:"cuadruple_Impoconsumo",label:"Cuadruple Impoconsumo",field:"cuadruple_Impoconsumo",sortable:!0,format:n},{name:"quintuple_Impoconsumo",label:"Quintuple Impoconsumo",field:"quintuple_Impoconsumo",sortable:!0,format:n},{name:"sextuple_Impoconsumo",label:"Sextuple Impoconsumo",field:"sextuple_Impoconsumo",sortable:!0,format:n},{name:"ni\xF1o_Impoconsumo",label:"ni\xF1o Impoconsumo",field:"ni\xF1o_Impoconsumo",sortable:!0,format:n},{name:"otros",label:"Otros",field:"otros",sortable:!0,format:n},{name:"total",label:"Total",field:"total",sortable:!0,format:n},{name:"acciones",label:"Acciones",align:"center"}],J=[{name:"salida",label:"Salida",field:"salida",sortable:!0},{name:"pertenece",label:"Pertenece",field:"pertenece",sortable:!0},{name:"neta",label:"Neta",field:"neta",sortable:!0,format:n},{name:"tasas",label:"Tasas",field:"tasas",sortable:!0,format:n},{name:"iva",label:"IVA",field:"iva",sortable:!0,format:n},{name:"total",label:"Total",field:"total",sortable:!0,format:n},{name:"acciones",label:"Acciones",align:"center"}];function R(l,e,a){return k(()=>{var I;const f=(I=e.value)==null?void 0:I.toLowerCase().trim();return f?l.value.filter(x=>a.some(y=>(x[y]||"").toString().toLowerCase().includes(f))):l.value})}const Y=R(g,z,["pertenece","hotel","destino","nombrePrograma","plan"]),p=R(E,u,["pertenece","destino"]),i=R(T,j,["salida","pertenece"]),h=async()=>{O.value=!0;try{const l=await de.get("https://backmultidestinos.onrender.com/planes/Lista");g.value=l.data.hoteles,E.value=l.data.transportes,T.value=l.data.tiquetes}catch(l){console.error(l),c.fire({icon:"error",title:"Error",text:"Error al cargar las listas"})}finally{O.value=!1}},B=()=>{c.fire({title:"\u{1F3E8} Agregar Nuevo Hotel",html:`
           <style>
          .swal2-popup {
            width: 900px !important;
            max-width: 95vw !important;
            border-radius: 15px !important;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important;
          }

          .swal2-title {
            color: #2c5aa0 !important;
            font-size: 28px !important;
            font-weight: 700 !important;
            margin-bottom: 25px !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
          }

          .hotel-form-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 20px;
            background: linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%);
            border-radius: 12px;
            margin: 10px 0;
          }

          .form-section {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            border-left: 4px solid #3b82f6;
          }

          .section-title {
            color: #1e40af;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .section-title::before {
            content: "\u2708\uFE0F";
            font-size: 18px;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-label {
            display: block;
            color: #374151;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .hotel-input {
            width: 100% !important;
            padding: 12px 15px !important;
            border: 2px solid #e5e7eb !important;
            border-radius: 8px !important;
            font-size: 14px !important;
            transition: all 0.3s ease !important;
            background: #fafbfc !important;
            box-sizing: border-box !important;
            margin: 0 !important;
          }

          .hotel-input:focus {
            outline: none !important;
            border-color: #3b82f6 !important;
            background: white !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
            transform: translateY(-1px) !important;
          }

          .hotel-input::placeholder {
            color: #9ca3af !important;
            font-style: italic !important;
          }

          .price-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
          }

          .textarea-field {
            min-height: 80px !important;
            resize: vertical !important;
            font-family: inherit !important;
          }

          .full-width {
            grid-column: 1 / -1;
          }

          .dates-section {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-left-color: #f59e0b;
          }

          .prices-section {
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
            border-left-color: #10b981;
          }

          .includes-section {
            background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
            border-left-color: #6366f1;
          }

          .swal2-confirm {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%) !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 12px 30px !important;
            font-weight: 600 !important;
            font-size: 16px !important;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4) !important;
            transition: all 0.3s ease !important;
          }

          .swal2-confirm:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6) !important;
          }

          .swal2-cancel {
            background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%) !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 12px 30px !important;
            font-weight: 600 !important;
            margin-right: 15px !important;
          }

          @media (max-width: 768px) {
            .hotel-form-container {
              grid-template-columns: 1fr;
              gap: 15px;
              padding: 15px;
            }

            .price-grid {
              grid-template-columns: 1fr;
            }

            .swal2-popup {
              width: 95vw !important;
            }
          }
        </style>

          <div class="hotel-form-container">
            <!-- Informaci\xF3n B\xE1sica -->
            <div class="form-section">
              <div class="section-title">Informaci\xF3n del Hotel</div>

              <div class="form-group">
                <label class="form-label">Nombre del Pertenece</label>
                <input id="swal-pertenece" class="hotel-input" placeholder="Ej: Bogota">
              </div>

              <div class="form-group">
                <label class="form-label">Nombre del Destino</label>
                <input id="swal-destino" class="hotel-input" placeholder="Ej: Bahia solano">
              </div>

              <div class="form-group">
                <label class="form-label">Nombre del programa</label>
                <input id="swal-nombrePrograma" class="hotel-input" placeholder="Ej: Temporada baja">
              </div>

              <div class="form-group">
                <label class="form-label">Nombre del Hotel</label>
                <input id="swal-hotel" class="hotel-input" placeholder="Ej: Playa de oro">
              </div>

              <div class="form-group">
                <label class="form-label">Tipo de Habitaci\xF3n</label>
                <input id="swal-tipoHabitacion" class="hotel-input" type="text" placeholder="Escribe el tipo de habitaci\xF3n"/>
              </div>

              <div class="form-group">
                <label class="form-label">Plan</label>
                <input id="swal-plan" class="hotel-input" type="text" placeholder="Escribe el tipo de plan"/>
              </div>

              <div class="form-group">
                <label class="form-label">N\xFAmero de Noches</label>
                <input id="swal-noches" type="number" class="hotel-input" placeholder="Ej: 3" min="1" max="30">
              </div>
            </div>

            <!-- Fechas -->
            <div class="form-section dates-section">
              <div class="section-title">\u{1F4C5} Fechas de Estad\xEDa</div>

              <div class="form-group">
                <label class="form-label">Fecha de Entrada</label>
                <input id="swal-FechaInicio" type="date" class="hotel-input">
              </div>

              <div class="form-group">
                <label class="form-label">Fecha de Salida</label>
                <input id="swal-FechaFin" type="date" class="hotel-input">
              </div>
            </div>

            <!-- Precios por Ocupaci\xF3n -->
            <div class="form-section prices-section full-width">
              <div class="section-title">\u{1F4B0} Tarifas por Ocupaci\xF3n (COP)</div>

              <div class="price-grid">
                <div class="form-group">
                  <label class="form-label">Ocupaci\xF3n Sencilla</label>
                  <input id="swal-sencilla" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                  <label class="form-label">Ocupaci\xF3n Doble</label>
                  <input id="swal-doble" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                  <label class="form-label">Ocupaci\xF3n Triple</label>
                  <input id="swal-triple" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                  <label class="form-label">Ocupaci\xF3n Cu\xE1druple</label>
                  <input id="swal-cuadruple" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                  <label class="form-label">Tarifa Ni\xF1o</label>
                  <input id="swal-ni\xF1o" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                  <label class="form-label">Noche Adicional Sencilla</label>
                  <input id="swal-nocheAdicional" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                  <label class="form-label">Noche Adicional Doble</label>
                  <input id="swal-nocheAdicional1" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                  <label class="form-label">Noche Adicional Triple</label>
                  <input id="swal-nocheAdicional2" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                  <label class="form-label">Noche Adicional Cuadruple</label>
                  <input id="swal-nocheAdicional3" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                  <label class="form-label">Noche Adicional Ni\xF1o</label>
                  <input id="swal-nocheAdicional4" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>
              </div>
            </div>


            <!-- Servicios Incluidos/No Incluidos -->
            <div class="form-section includes-section full-width">
              <div class="section-title">\u{1F4CB} Servicios y Condiciones</div>

              <div class="price-grid">
                <div class="form-group">
                  <label class="form-label">Servicios Incluidos</label>
                  <textarea id="swal-incluye" class="hotel-input textarea-field"
                    placeholder="Ej: Desayuno buffet, WiFi gratuito, Piscina, Gimnasio, Servicio de habitaciones..."></textarea>
                </div>

                <div class="form-group">
                  <label class="form-label">No Incluye / Restricciones</label>
                  <textarea id="swal-noIncluye" class="hotel-input textarea-field"
                    placeholder="Ej: Bebidas alcoh\xF3licas, Excursiones, Spa, Llamadas telef\xF3nicas..."></textarea>
                </div>
              </div>
            </div>
          </div>
        `,width:"900px",showCancelButton:!0,confirmButtonText:"\u2705 Agregar Hotel",cancelButtonText:"\u274C Cancelar",focusConfirm:!1,allowOutsideClick:!1,customClass:{popup:"hotel-popup",confirmButton:"hotel-confirm-btn",cancelButton:"hotel-cancel-btn"},preConfirm:()=>{const l=document.getElementById("swal-pertenece").value.trim(),e=document.getElementById("swal-destino").value.trim(),a=document.getElementById("swal-nombrePrograma").value.trim(),f=document.getElementById("swal-hotel").value.trim(),I=document.getElementById("swal-noches").value,x=document.getElementById("swal-FechaInicio").value,y=document.getElementById("swal-FechaFin").value;return l?e?a?f?!I||I<1?(c.showValidationMessage("Por favor ingresa un n\xFAmero v\xE1lido de noches"),!1):!x||!y?(c.showValidationMessage("Por favor selecciona las fechas de entrada y salida"),!1):new Date(x)>=new Date(y)?(c.showValidationMessage("La fecha de salida debe ser posterior a la fecha de entrada"),!1):{pertenece:document.getElementById("swal-pertenece").value,destino:document.getElementById("swal-destino").value,nombrePrograma:document.getElementById("swal-nombrePrograma").value,hotel:f,plan:document.getElementById("swal-plan").value,noches:Number(I),tipoHabitacion:document.getElementById("swal-tipoHabitacion").value,FechaInicio:x,FechaFin:y,sencilla:Number(document.getElementById("swal-sencilla").value)||0,doble:Number(document.getElementById("swal-doble").value)||0,triple:Number(document.getElementById("swal-triple").value)||0,cuadruple:Number(document.getElementById("swal-cuadruple").value)||0,ni\u00F1o:Number(document.getElementById("swal-ni\xF1o").value)||0,nocheAdicionalsencilla:Number(document.getElementById("swal-nocheAdicional").value)||0,nocheAdicionaldoble:Number(document.getElementById("swal-nocheAdicional1").value)||0,nocheAdicionaltriple:Number(document.getElementById("swal-nocheAdicional2").value)||0,nocheAdicionalcuadruple:Number(document.getElementById("swal-nocheAdicional3").value)||0,nocheAdicionalni\u00F1o:Number(document.getElementById("swal-nocheAdicional4").value)||0,incluye:document.getElementById("swal-incluye").value.trim(),noIncluye:document.getElementById("swal-noIncluye").value.trim()}:(c.showValidationMessage("Por favor ingresa el nombre del hotel"),!1):(c.showValidationMessage("Por favor ingresa el nombre del hotel"),!1):(c.showValidationMessage("Por favor ingresa el nombre del hotel"),!1):(c.showValidationMessage("Por favor ingresa el nombre del hotel"),!1)}}).then(l=>{l.isConfirmed&&fetch("https://backmultidestinos.onrender.com/planes/Guardar_Hoteles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l.value)}).then(e=>e.json()).then(e=>{e.success?c.fire({icon:"success",title:"\xA1Hotel Agregado Exitosamente!",html:`
                    <div style="text-align: left; padding: 20px; background: #f8faff; border-radius: 10px; margin: 15px 0;">
                      <h4 style="color: #1e40af; margin-bottom: 15px;">\u{1F4CB} Resumen del Hotel:</h4>
                      <p><strong>\u{1F3E8} Pertenece:</strong> ${l.value.pertenece}</p>
                      <p><strong>\u{1F3E8} Destino:</strong> ${l.value.destino}</p>
                      <p><strong>\u{1F3E8} Nombre del Programa:</strong> ${l.value.nombrePrograma}</p>
                      <p><strong>\u{1F3E8} Hotel:</strong> ${l.value.hotel}</p>
                      <p><strong>\u{1F4CB} Plan:</strong> ${l.value.plan}</p>
                      <p><strong>\u{1F6CF}\uFE0F Tipo de habitaci\xF3n:</strong> ${l.value.tipoHabitacion}</p>
                      <p><strong>\u{1F319} Noches:</strong> ${l.value.noches}</p>
                      <p><strong>\u{1F4C5} Fechas:</strong> ${l.value.FechaInicio} - ${l.value.FechaFin}</p>
                      <hr style="margin: 15px 0;">
                      <p><strong>\u{1F4B0} Sencilla:</strong> $${l.value.sencilla.toLocaleString("es-CO")} COP</p>
                      <p><strong>\u{1F4B0} Doble:</strong> $${l.value.doble.toLocaleString("es-CO")} COP</p>
                      <p><strong>\u{1F4B0} Triple:</strong> $${l.value.triple.toLocaleString("es-CO")} COP</p>
                      <p><strong>\u{1F4B0} Cu\xE1druple:</strong> $${l.value.cuadruple.toLocaleString("es-CO")} COP</p>
                      <p><strong>\u{1F476} Ni\xF1o:</strong> $${l.value.ni\u00F1o.toLocaleString("es-CO")} COP</p>
                      <hr style="margin: 15px 0;">
                      <h5 style="color: #1e40af; margin-bottom: 10px;">\u2795 Noches adicionales:</h5>
                      <p><strong>Sencilla:</strong> $${l.value.nocheAdicionalsencilla.toLocaleString("es-CO")} COP</p>
                      <p><strong>Doble:</strong> $${l.value.nocheAdicionaldoble.toLocaleString("es-CO")} COP</p>
                      <p><strong>Triple:</strong> $${l.value.nocheAdicionaltriple.toLocaleString("es-CO")} COP</p>
                      <p><strong>Cu\xE1druple:</strong> $${l.value.nocheAdicionalcuadruple.toLocaleString("es-CO")} COP</p>
                      <p><strong>Ni\xF1o:</strong> $${l.value.nocheAdicionalni\u00F1o.toLocaleString("es-CO")} COP</p>
                      <hr style="margin: 15px 0;">
                      <p><strong>\u2705 Incluye:</strong> ${l.value.incluye||"Sin detalles"}</p>
                      <p><strong>\u274C No incluye:</strong> ${l.value.noIncluye||"Sin detalles"}</p>
                    </div>
                  `,confirmButtonText:"\u{1F44D} Perfecto",width:"600px",timer:1e4,timerProgressBar:!0}).then(()=>{location.reload()}):c.fire("Error","No se pudo guardar el hotel","error")}).catch(()=>{c.fire("Error","Error en la conexi\xF3n al servidor","error")})})},A=()=>{Q.value=!1},s=()=>{c.fire({title:"\u{1F68C} Agregar Nuevo Transporte",html:`
           <style>
           .swal2-popup {
            width: 900px !important;
            max-width: 95vw !important;
            border-radius: 15px !important;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important;
        }

        .swal2-title {
            color: #2c5aa0 !important;
            font-size: 28px !important;
            font-weight: 700 !important;
            margin-bottom: 25px !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        }

        .hotel-form-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 20px;
            background: linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%);
            border-radius: 12px;
            margin: 10px 0;
            max-width: 1200px;
            margin: 0 auto;
        }

        .form-section {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            border-left: 4px solid #3b82f6;
        }

        .section-title {
            color: #1e40af;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .section-title::before {
            content: "\u2708\uFE0F";
            font-size: 18px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-label {
            display: block;
            color: #374151;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .hotel-input {
            width: 100% !important;
            padding: 12px 15px !important;
            border: 2px solid #e5e7eb !important;
            border-radius: 8px !important;
            font-size: 14px !important;
            transition: all 0.3s ease !important;
            background: #fafbfc !important;
            box-sizing: border-box !important;
            margin: 0 !important;
        }

        .hotel-input:focus {
            outline: none !important;
            border-color: #3b82f6 !important;
            background: white !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
            transform: translateY(-1px) !important;
        }

        .hotel-input::placeholder {
            color: #9ca3af !important;
            font-style: italic !important;
        }

        .price-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .taxes-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .hotel-taxes-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .consumption-taxes-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .textarea-field {
            min-height: 80px !important;
            resize: vertical !important;
            font-family: inherit !important;
        }

        .full-width {
            grid-column: 1 / -1;
        }

        .dates-section {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-left-color: #f59e0b;
        }

        .prices-section {
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
            border-left-color: #10b981;
        }

        .includes-section {
            background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
            border-left-color: #6366f1;
        }

        .btn-container {
            text-align: center;
            margin-top: 30px;
            grid-column: 1 / -1;
        }

        .btn-submit {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%) !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 12px 30px !important;
            font-weight: 600 !important;
            font-size: 16px !important;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4) !important;
            transition: all 0.3s ease !important;
            color: white;
            cursor: pointer;
        }

        .btn-submit:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6) !important;
        }

        .swal2-confirm {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%) !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 12px 30px !important;
            font-weight: 600 !important;
            font-size: 16px !important;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4) !important;
            transition: all 0.3s ease !important;
        }

        .swal2-confirm:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6) !important;
        }

        .swal2-cancel {
            background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%) !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 12px 30px !important;
            font-weight: 600 !important;
            margin-right: 15px !important;
        }

        .result-container {
            margin-top: 30px;
            padding: 20px;
            background: #e8f5e8;
            border-radius: 10px;
            border-left: 4px solid #28a745;
            display: none;
            grid-column: 1 / -1;
        }

        .result-title {
            font-size: 1.2em;
            font-weight: bold;
            color: #155724;
            margin-bottom: 15px;
        }

        .result-item {
            padding: 5px 0;
            border-bottom: 1px solid #c3e6cb;
        }

        .result-item:last-child {
            border-bottom: none;
        }

        .result-label {
            font-weight: 600;
            color: #155724;
        }

        .result-value {
            color: #155724;
            margin-left: 10px;
        }

        @media (max-width: 768px) {
            .hotel-form-container {
                grid-template-columns: 1fr;
                gap: 15px;
                padding: 15px;
            }

            .price-grid {
                grid-template-columns: 1fr;
            }

            .taxes-grid {
                grid-template-columns: 1fr;
            }

            .hotel-taxes-grid {
                grid-template-columns: 1fr;
            }

            .consumption-taxes-grid {
                grid-template-columns: 1fr;
            }

            .swal2-popup {
                width: 95vw !important;
            }
        }
        </style>

          <div class="hotel-form-container">
        <!-- Informaci\xF3n B\xE1sica -->
        <div class="form-section">
            <div class="section-title">\u{1F3E8} Informaci\xF3n del Hotel</div>

            <div class="form-group">
                <label class="form-label">Nombre Donde Pertenece</label>
                <input id="swal-pertenece" class="hotel-input" placeholder="Ej: Bogota">
            </div>

            <div class="form-group">
                <label class="form-label">Nombre del Destino</label>
                <input id="swal-destino" class="hotel-input" placeholder="Ej: Bahia solano">
            </div>
        </div>


        <!-- Impuestos y Tasas Generales -->
        <div class="form-section">
            <div class="section-title">\u{1F4CA} Impuestos y Tasas Generales</div>
            <div class="taxes-grid">
                <div class="form-group">
                    <label class="form-label">Combustible</label>
                    <input id="swal-combus" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Tasa</label>
                    <input id="swal-tasa" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">IVA</label>
                    <input id="swal-iva" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">TA (Tasa Aeroportuaria)</label>
                    <input id="swal-ta" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">IVA TA</label>
                    <input id="swal-ivaTa" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Otros</label>
                    <input id="swal-otros" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>
            </div>
        </div>

        <!-- Impuestos de Hotel por Ocupaci\xF3n -->
        <div class="form-section">
            <div class="section-title">\u{1F3E8} Impuestos de Hotel por Ocupaci\xF3n</div>
            <div class="hotel-taxes-grid">
                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Sencilla</label>
                    <input id="swal-sencilla_ImpuestoHotel" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Doble</label>
                    <input id="swal-doble_ImpuestoHotel" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Triple</label>
                    <input id="swal-triple_ImpuestoHotel" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Cu\xE1druple</label>
                    <input id="swal-cuadruple_ImpuestoHotel" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Qu\xEDntuple</label>
                    <input id="swal-quintuple_ImpuestoHotel" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - S\xE9xtuple</label>
                    <input id="swal-sextuple_ImpuestoHotel" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Ni\xF1o</label>
                    <input id="swal-ni\xF1o_ImpuestoHotel" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>
            </div>
        </div>

         <div class="form-section">
            <div class="section-title">\u{1F3E8} Impuestos de Hotel por Ingreso</div>
            <div class="hotel-taxes-grid">
              <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Sencilla</label>
                    <input id="swal-sencilla_ImpuestoIngr" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Doble</label>
                    <input id="swal-doble_ImpuestoIngr" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Triple</label>
                    <input id="swal-triple_ImpuestoIngr" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Cu\xE1druple</label>
                    <input id="swal-cuadruple_ImpuestoIngr" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Qu\xEDntuple</label>
                    <input id="swal-quintuple_ImpuestoIngr" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - S\xE9xtuple</label>
                    <input id="swal-sextuple_ImpuestoIngr" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Hotel - Ni\xF1o</label>
                    <input id="swal-ni\xF1o_ImpuestoIngr" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>
          </div>
        </div>

        <!-- Impuestos al Consumo por Ocupaci\xF3n -->
        <div class="form-section">
            <div class="section-title">\u{1F6CD}\uFE0F Impuestos al Consumo por Ocupaci\xF3n</div>
            <div class="consumption-taxes-grid">
                <div class="form-group">
                    <label class="form-label">Impuesto Consumo - Sencilla</label>
                    <input id="swal-sencilla_Impoconsumo" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Consumo - Doble</label>
                    <input id="swal-doble_Impoconsumo" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Consumo - Triple</label>
                    <input id="swal-triple_Impoconsumo" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Consumo - Cu\xE1druple</label>
                    <input id="swal-cuadruple_Impoconsumo" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Consumo - Qu\xEDntuple</label>
                    <input id="swal-quintuple_Impoconsumo" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Consumo - S\xE9xtuple</label>
                    <input id="swal-sextuple_Impoconsumo" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>

                <div class="form-group">
                    <label class="form-label">Impuesto Consumo - Ni\xF1o</label>
                    <input id="swal-ni\xF1o_Impoconsumo" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                </div>
            </div>
        </div>

        <!-- Total -->
        <div class="form-section">
            <div class="section-title">\u{1F4AF} Total General</div>
            <div class="form-group">
                <label class="form-label">Total Final</label>
                <input id="swal-total" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
            </div>
        </div>
          </div>
        `,width:"900px",showCancelButton:!0,confirmButtonText:"\u2705 Agregar Hotel",cancelButtonText:"\u274C Cancelar",focusConfirm:!1,allowOutsideClick:!1,customClass:{popup:"hotel-popup",confirmButton:"hotel-confirm-btn",cancelButton:"hotel-cancel-btn"},preConfirm:()=>{const l={pertenece:document.getElementById("swal-pertenece").value.trim(),destino:document.getElementById("swal-destino").value.trim(),combus:Number(document.getElementById("swal-combus").value)||0,tasa:Number(document.getElementById("swal-tasa").value)||0,iva:Number(document.getElementById("swal-iva").value)||0,ta:Number(document.getElementById("swal-ta").value)||0,ivaTa:Number(document.getElementById("swal-ivaTa").value)||0,sencilla_ImpuestoHotel:Number(document.getElementById("swal-sencilla_ImpuestoHotel").value)||0,doble_ImpuestoHotel:Number(document.getElementById("swal-doble_ImpuestoHotel").value)||0,triple_ImpuestoHotel:Number(document.getElementById("swal-triple_ImpuestoHotel").value)||0,cuadruple_ImpuestoHotel:Number(document.getElementById("swal-cuadruple_ImpuestoHotel").value)||0,quintuple_ImpuestoHotel:Number(document.getElementById("swal-quintuple_ImpuestoHotel").value)||0,sextuple_ImpuestoHotel:Number(document.getElementById("swal-sextuple_ImpuestoHotel").value)||0,ni\u00F1o_ImpuestoHotel:Number(document.getElementById("swal-ni\xF1o_ImpuestoHotel").value)||0,sencilla_ImpuestoIngr:Number(document.getElementById("swal-sencilla_ImpuestoIngr").value)||0,doble_ImpuestoIngr:Number(document.getElementById("swal-doble_ImpuestoIngr").value)||0,triple_ImpuestoIngr:Number(document.getElementById("swal-triple_ImpuestoIngr").value)||0,cuadruple_ImpuestoIngr:Number(document.getElementById("swal-cuadruple_ImpuestoIngr").value)||0,quintuple_ImpuestoIngr:Number(document.getElementById("swal-quintuple_ImpuestoIngr").value)||0,sextuple_ImpuestoIngr:Number(document.getElementById("swal-sextuple_ImpuestoIngr").value)||0,ni\u00F1o_ImpuestoIngr:Number(document.getElementById("swal-ni\xF1o_ImpuestoIngr").value)||0,sencilla_Impoconsumo:Number(document.getElementById("swal-sencilla_Impoconsumo").value)||0,doble_Impoconsumo:Number(document.getElementById("swal-doble_Impoconsumo").value)||0,triple_Impoconsumo:Number(document.getElementById("swal-triple_Impoconsumo").value)||0,cuadruple_Impoconsumo:Number(document.getElementById("swal-cuadruple_Impoconsumo").value)||0,quintuple_Impoconsumo:Number(document.getElementById("swal-quintuple_Impoconsumo").value)||0,sextuple_Impoconsumo:Number(document.getElementById("swal-sextuple_Impoconsumo").value)||0,ni\u00F1o_Impoconsumo:Number(document.getElementById("swal-ni\xF1o_Impoconsumo").value)||0,otros:Number(document.getElementById("swal-otros").value)||0,total:Number(document.getElementById("swal-total").value)||0};if(console.log("\u{1F4CA} DATOS DEL FORMULARIO:"),console.log("========================"),console.table(l),console.log("\u{1F4E4} JSON A ENVIAR:"),console.log(JSON.stringify(l,null,2)),!l.pertenece)return console.error('\u274C Error: Campo "pertenece" vac\xEDo'),c.showValidationMessage('Por favor ingresa el campo "pertenece"'),!1;if(!l.destino)return console.error('\u274C Error: Campo "destino" vac\xEDo'),c.showValidationMessage('Por favor ingresa el campo "destino"'),!1;const e=["combus","tasa","iva","ta","ivaTa"];for(const a of e)if(isNaN(l[a]))return console.error(`\u274C Error: Campo "${a}" no es un n\xFAmero v\xE1lido`),c.showValidationMessage(`Por favor ingresa un valor num\xE9rico v\xE1lido para "${a}"`),!1;return console.log("\u2705 Validaciones pasadas correctamente"),l}}).then(l=>{l.isConfirmed&&(console.log("\u{1F680} INICIANDO ENV\xCDO AL SERVIDOR..."),console.log("URL:","https://backmultidestinos.onrender.com/planes/Guardar_Transporte"),console.log("M\xE9todo:","POST"),console.log("Headers:",{"Content-Type":"application/json"}),console.log("Body:",JSON.stringify(l.value,null,2)),c.fire({title:"Enviando datos...",html:"Por favor espera mientras se procesan los datos",timerProgressBar:!0,didOpen:()=>{c.showLoading()}}),fetch("https://backmultidestinos.onrender.com/planes/Guardar_Transporte",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l.value)}).then(e=>{if(console.log("\u{1F4E8} RESPUESTA DEL SERVIDOR:"),console.log("Status:",e.status),console.log("Status Text:",e.statusText),console.log("Headers:",[...e.headers.entries()]),!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}).then(e=>{console.log("\u2705 DATOS RECIBIDOS DEL SERVIDOR:"),console.log(e),e.success?c.fire({icon:"success",title:"\xA1Hotel Agregado Exitosamente!",html:`
                <div style="text-align: left; padding: 20px; background: #f8faff; border-radius: 10px; margin: 15px 0;">
                  <h4 style="color: #1e40af; margin-bottom: 15px;">\u{1F4CB} Resumen del Hotel:</h4>
                  <p><strong>\u{1F3E8} Pertenece:</strong> ${l.value.pertenece}</p>
                  <p><strong>\u{1F4CD} Destino:</strong> ${l.value.destino}</p>
                  <hr style="margin: 15px 0;">
                  <p><strong>\u26FD Combustible:</strong> $${Number(l.value.combus).toLocaleString("es-CO")} COP</p>
                  <p><strong>\u{1F4B8} Tasa administrativa:</strong> $${Number(l.value.tasa).toLocaleString("es-CO")} COP</p>
                  <p><strong>\u{1F4CA} IVA:</strong> $${Number(l.value.iva).toLocaleString("es-CO")} COP</p>
                  <p><strong>\u{1F4BC} TA:</strong> $${Number(l.value.ta).toLocaleString("es-CO")} COP</p>
                  <p><strong>\u{1F4C8} IVA TA:</strong> $${Number(l.value.ivaTa).toLocaleString("es-CO")} COP</p>
                  <p><strong>\u{1F9EE} Otros cargos:</strong> $${Number(l.value.otros).toLocaleString("es-CO")} COP</p>
                  <p><strong>\u{1F4B5} Total:</strong> <span style="color: #10b981;">$${Number(l.value.total).toLocaleString("es-CO")} COP</span></p>
                </div>
              `,confirmButtonText:"\u{1F44D} Perfecto",width:"600px",timer:1e4,timerProgressBar:!0}).then(()=>{location.reload()}):(console.error("\u274C El servidor respondi\xF3 con success: false"),console.error("Mensaje del servidor:",e.message||"Sin mensaje espec\xEDfico"),c.fire("Error",e.message||"No se pudo guardar el hotel","error"))}).catch(e=>{console.error("\u{1F4A5} ERROR EN LA PETICI\xD3N:"),console.error("Tipo de error:",e.name),console.error("Mensaje:",e.message),console.error("Stack trace:",e.stack);let a="Error desconocido";e.name==="TypeError"&&e.message.includes("fetch")?a="No se pudo conectar al servidor. Verifica si el backend est\xE1 ejecut\xE1ndose.":e.message.includes("HTTP error")?a=`Error del servidor: ${e.message}`:e.name==="SyntaxError"?a="La respuesta del servidor no es JSON v\xE1lido":a=e.message,c.fire({icon:"error",title:"Error en la conexi\xF3n",html:`
              <div style="text-align: left;">
                <p><strong>Mensaje:</strong> ${a}</p>
                <p><strong>Detalles t\xE9cnicos:</strong> ${e.message}</p>
                <hr>
                <p><em>Revisa la consola del navegador para m\xE1s informaci\xF3n</em></p>
              </div>
            `,width:"500px"})}))})},C=()=>{c.fire({title:"\u{1F6EB} Agregar Nuevo Tiquete",html:`
           <style>
           .swal2-popup {
            width: 900px !important;
            max-width: 95vw !important;
            border-radius: 15px !important;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important;
        }

        .swal2-title {
            color: #2c5aa0 !important;
            font-size: 28px !important;
            font-weight: 700 !important;
            margin-bottom: 25px !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        }

        .hotel-form-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 20px;
            background: linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%);
            border-radius: 12px;
            margin: 10px 0;
            max-width: 1200px;
            margin: 0 auto;
        }

        .form-section {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            border-left: 4px solid #3b82f6;
        }

        .section-title {
            color: #1e40af;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .section-title::before {
            content: "\u2708\uFE0F";
            font-size: 18px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-label {
            display: block;
            color: #374151;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .hotel-input {
            width: 100% !important;
            padding: 12px 15px !important;
            border: 2px solid #e5e7eb !important;
            border-radius: 8px !important;
            font-size: 14px !important;
            transition: all 0.3s ease !important;
            background: #fafbfc !important;
            box-sizing: border-box !important;
            margin: 0 !important;
        }

        .hotel-input:focus {
            outline: none !important;
            border-color: #3b82f6 !important;
            background: white !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
            transform: translateY(-1px) !important;
        }

        .hotel-input::placeholder {
            color: #9ca3af !important;
            font-style: italic !important;
        }

        .price-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .taxes-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .hotel-taxes-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .consumption-taxes-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .textarea-field {
            min-height: 80px !important;
            resize: vertical !important;
            font-family: inherit !important;
        }

        .full-width {
            grid-column: 1 / -1;
        }

        .dates-section {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-left-color: #f59e0b;
        }

        .prices-section {
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
            border-left-color: #10b981;
        }

        .includes-section {
            background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
            border-left-color: #6366f1;
        }

        .btn-container {
            text-align: center;
            margin-top: 30px;
            grid-column: 1 / -1;
        }

        .btn-submit {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%) !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 12px 30px !important;
            font-weight: 600 !important;
            font-size: 16px !important;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4) !important;
            transition: all 0.3s ease !important;
            color: white;
            cursor: pointer;
        }

        .btn-submit:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6) !important;
        }

        .swal2-confirm {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%) !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 12px 30px !important;
            font-weight: 600 !important;
            font-size: 16px !important;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4) !important;
            transition: all 0.3s ease !important;
        }

        .swal2-confirm:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6) !important;
        }

        .swal2-cancel {
            background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%) !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 12px 30px !important;
            font-weight: 600 !important;
            margin-right: 15px !important;
        }

        .result-container {
            margin-top: 30px;
            padding: 20px;
            background: #e8f5e8;
            border-radius: 10px;
            border-left: 4px solid #28a745;
            display: none;
            grid-column: 1 / -1;
        }

        .result-title {
            font-size: 1.2em;
            font-weight: bold;
            color: #155724;
            margin-bottom: 15px;
        }

        .result-item {
            padding: 5px 0;
            border-bottom: 1px solid #c3e6cb;
        }

        .result-item:last-child {
            border-bottom: none;
        }

        .result-label {
            font-weight: 600;
            color: #155724;
        }

        .result-value {
            color: #155724;
            margin-left: 10px;
        }

        @media (max-width: 768px) {
            .hotel-form-container {
                grid-template-columns: 1fr;
                gap: 15px;
                padding: 15px;
            }

            .price-grid {
                grid-template-columns: 1fr;
            }

            .taxes-grid {
                grid-template-columns: 1fr;
            }

            .hotel-taxes-grid {
                grid-template-columns: 1fr;
            }

            .consumption-taxes-grid {
                grid-template-columns: 1fr;
            }

            .swal2-popup {
                width: 95vw !important;
            }
        }
        </style>

          <div class="hotel-form-container">
        <!-- Informaci\xF3n B\xE1sica -->
        <div class="form-section">
            <div class="section-title">\u{1F3E8} Informaci\xF3n del Hotel</div>

            <div class="form-group">
                <label class="form-label">Nombre Donde Pertenece</label>
                <input id="swal-salida" class="hotel-input" placeholder="Ej: Bogota">
            </div>

            <div class="form-group">
                <label class="form-label">Nombre del Destino</label>
                <input id="swal-pertenece" class="hotel-input" placeholder="Ej: Bahia solano">
            </div>
        </div>


        <!-- Impuestos y Tasas Generales -->
        <div class="form-section">
            <div class="section-title">\u{1F4CA} Impuestos y Tasas Generales</div>
            <div class="taxes-grid">
                  <div class="form-group">
                      <label class="form-label">Neta</label>
                      <input id="swal-neta" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                  </div>

                  <div class="form-group">
                      <label class="form-label">Tasas</label>
                      <input id="swal-tasas" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                  </div>

                  <div class="form-group">
                      <label class="form-label">IVA </label>
                      <input id="swal-iva" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                  </div>

                  <div class="form-group">
                      <label class="form-label">Total \u{1F4AF}</label>
                      <input id="swal-total" type="number" class="hotel-input" placeholder="$0" step="100" min="0">
                  </div>
              </div>
          </div>
          </div>
        `,width:"900px",showCancelButton:!0,confirmButtonText:"\u2705 Agregar Hotel",cancelButtonText:"\u274C Cancelar",focusConfirm:!1,allowOutsideClick:!1,customClass:{popup:"hotel-popup",confirmButton:"hotel-confirm-btn",cancelButton:"hotel-cancel-btn"},preConfirm:()=>{const l={salida:document.getElementById("swal-salida").value.trim(),pertenece:document.getElementById("swal-pertenece").value.trim(),neta:Number(document.getElementById("swal-neta").value)||0,tasas:Number(document.getElementById("swal-tasas").value)||0,iva:Number(document.getElementById("swal-iva").value)||0,total:Number(document.getElementById("swal-total").value)||0};if(console.log("\u{1F4CA} DATOS DEL FORMULARIO:"),console.log("========================"),console.table(l),console.log("\u{1F4E4} JSON A ENVIAR:"),console.log(JSON.stringify(l,null,2)),!l.salida)return console.error('\u274C Error: Campo "salida" vac\xEDo'),c.showValidationMessage('Por favor ingresa el campo "salida"'),!1;if(!l.pertenece)return console.error('\u274C Error: Campo "pertenece" vac\xEDo'),c.showValidationMessage('Por favor ingresa el campo "pertenece"'),!1;const e=["neta","tasas","iva","total"];for(const a of e)if(isNaN(l[a]))return console.error(`\u274C Error: Campo "${a}" no es un n\xFAmero v\xE1lido`),c.showValidationMessage(`Por favor ingresa un valor num\xE9rico v\xE1lido para "${a}"`),!1;return console.log("\u2705 Validaciones pasadas correctamente"),l}}).then(l=>{l.isConfirmed&&(console.log("\u{1F680} INICIANDO ENV\xCDO AL SERVIDOR..."),console.log("URL:","https://backmultidestinos.onrender.com/planes/Guardar_Tiquete"),console.log("M\xE9todo:","POST"),console.log("Headers:",{"Content-Type":"application/json"}),console.log("Body:",JSON.stringify(l.value,null,2)),c.fire({title:"Enviando datos...",html:"Por favor espera mientras se procesan los datos",timerProgressBar:!0,didOpen:()=>{c.showLoading()}}),fetch("https://backmultidestinos.onrender.com/planes/Guardar_Tiquete",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l.value)}).then(e=>{if(console.log("\u{1F4E8} RESPUESTA DEL SERVIDOR:"),console.log("Status:",e.status),console.log("Status Text:",e.statusText),console.log("Headers:",[...e.headers.entries()]),!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}).then(e=>{console.log("\u2705 DATOS RECIBIDOS DEL SERVIDOR:"),console.log(e),e.success?c.fire({icon:"success",title:"\xA1Hotel Agregado Exitosamente!",html:`
                <div style="text-align: left; padding: 20px; background: #f8faff; border-radius: 10px; margin: 15px 0;">
                  <h4 style="color: #1e40af; margin-bottom: 15px;">\u{1F4CB} Resumen del Hotel:</h4>
                  <p><strong>\u{1F68C} Salida:</strong> ${l.value.salida}</p>
                  <p><strong>\u{1F3E8} Pertenece:</strong> ${l.value.pertenece}</p>
                  <hr style="margin: 15px 0;">
                  <p><strong>\u{1F4B5} Neta:</strong> $${Number(l.value.neta).toLocaleString("es-CO")} COP</p>
                  <p><strong>\u{1F4B8} Tasas:</strong> $${Number(l.value.tasas).toLocaleString("es-CO")} COP</p>
                  <p><strong>\u{1F4CA} IVA:</strong> $${Number(l.value.iva).toLocaleString("es-CO")} COP</p>
                  <p><strong>\u{1F9EE} Total:</strong> <span style="color: #10b981;">$${Number(l.value.total).toLocaleString("es-CO")} COP</span></p>
                </div>
              `,confirmButtonText:"\u{1F44D} Perfecto",width:"600px",timer:1e4,timerProgressBar:!0}).then(()=>{location.reload()}):(console.error("\u274C El servidor respondi\xF3 con success: false"),console.error("Mensaje del servidor:",e.message||"Sin mensaje espec\xEDfico"),c.fire("Error",e.message||"No se pudo guardar el hotel","error"))}).catch(e=>{console.error("\u{1F4A5} ERROR EN LA PETICI\xD3N:"),console.error("Tipo de error:",e.name),console.error("Mensaje:",e.message),console.error("Stack trace:",e.stack);let a="Error desconocido";e.name==="TypeError"&&e.message.includes("fetch")?a="No se pudo conectar al servidor. Verifica si el backend est\xE1 ejecut\xE1ndose.":e.message.includes("HTTP error")?a=`Error del servidor: ${e.message}`:e.name==="SyntaxError"?a="La respuesta del servidor no es JSON v\xE1lido":a=e.message,c.fire({icon:"error",title:"Error en la conexi\xF3n",html:`
              <div style="text-align: left;">
                <p><strong>Mensaje:</strong> ${a}</p>
                <p><strong>Detalles t\xE9cnicos:</strong> ${e.message}</p>
                <hr>
                <p><em>Revisa la consola del navegador para m\xE1s informaci\xF3n</em></p>
              </div>
            `,width:"500px"})}))})},S=async(l,e)=>{const a={hotel:"Hotel",transporte:"Transporte",tiquete:"Tiquete"};if(!a[l]){t.notify({type:"warning",message:"Tipo inv\xE1lido para eliminar"});return}if(!(await c.fire({title:`\xBFEst\xE1s seguro de eliminar el ${a[l]}?`,text:"Esta acci\xF3n no se puede deshacer",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar"})).isConfirmed)return;console.log("\u{1F9EA} Eliminando tipo:",l),console.log("\u{1F194} ID a eliminar:",e);const I=`https://backmultidestinos.onrender.com/planes/eliminar/${l}/${e}`;console.log("\u{1F4E1} Enviando DELETE a:",I);try{await de.delete(I),c.fire({icon:"success",title:"Eliminado",text:`${a[l]} eliminado correctamente`,timer:2e3,showConfirmButton:!1}),h()}catch(x){console.error("\u274C Error en la solicitud DELETE:",x),c.fire({icon:"error",title:"Error",text:`Error al eliminar el ${a[l]}`})}},M=l=>{const e=document.createElement("input");e.type="file",e.accept=".xlsx,.xls",e.style.display="none",e.addEventListener("change",async a=>{var y,F;const f=a.target.files[0];if(!f)return;if(!["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"].includes(f.type)){c.fire({icon:"error",title:"Error",text:"Solo se permiten archivos Excel (.xlsx, .xls)"});return}const x=new FormData;x.append("archivo",f),x.append("tipo",l);try{c.fire({title:`Importando ${l}...`,allowOutsideClick:!1,didOpen:()=>{c.showLoading()}});const q=(await de.post("https://backmultidestinos.onrender.com/planes/importarDatos",x)).data;if(!q.success)throw new Error(q.message||"Error en la importaci\xF3n");const{insertados:W,actualizados:Z,eliminados:X,errores:N}=q.resultados;let H=`Procesamiento completado:
`;H+=`\u2022 ${W} registros insertados
`,H+=`\u2022 ${Z} registros actualizados
`,H+=`\u2022 ${X} registros eliminados`,N!=null&&N.length&&(H+=`
\u2022 ${N.length} filas con errores (ver consola)`,console.warn("Errores de importaci\xF3n:",N)),c.fire({icon:"success",title:"Importaci\xF3n Exitosa",text:H,width:400})}catch(P){console.error("Error en importaci\xF3n:",P),c.fire({icon:"error",title:"Error en la Importaci\xF3n",text:((F=(y=P.response)==null?void 0:y.data)==null?void 0:F.message)||P.message})}}),document.body.appendChild(e),e.click(),document.body.removeChild(e)},K=l=>{const e=`https://backmultidestinos.onrender.com/planes/exportarDatos?tipo=${l}`,a=document.createElement("a");a.href=e,a.download=`${l}.xlsx`,document.body.appendChild(a),a.click(),document.body.removeChild(a)},te=async(l,e=null)=>{if(!e||!e.id){c.fire("Error","ID no v\xE1lido para editar","error");return}try{const f=await(await fetch(`https://backmultidestinos.onrender.com/planes/${l}/${e.id}`)).json();if(!f.success)throw new Error("No se pudo obtener el item");const I=f.data,{value:x}=await c.fire({title:`Editar ${l}`,html:tl(l,I),focusConfirm:!1,width:"600px",confirmButtonText:"Guardar",preConfirm:()=>{var y,F,P,q,W,Z,X,N,H,ue,pe,me,be,ge,fe,ve,he,xe,Ie,ye,we,_e,Ee,Ce,$e,Be,Ae,Te,Ne,He,Se,Pe,ke,Oe,Fe,qe,De,Le,Ve,ze,je,Re,Me,Qe,Ge,Ue,Je,Ye,Ke,We,Ze,Xe;return l==="hotel"?{pertenece:(y=document.getElementById("pertenece"))==null?void 0:y.value,destino:(F=document.getElementById("destino"))==null?void 0:F.value,nombrePrograma:(P=document.getElementById("nombrePrograma"))==null?void 0:P.value,hotel:(q=document.getElementById("hotel"))==null?void 0:q.value,plan:(W=document.getElementById("plan"))==null?void 0:W.value,noches:parseInt((Z=document.getElementById("noches"))==null?void 0:Z.value),tipoHabitacion:(X=document.getElementById("tipoHabitacion"))==null?void 0:X.value,sencilla:parseFloat((N=document.getElementById("sencilla"))==null?void 0:N.value),doble:parseFloat((H=document.getElementById("doble"))==null?void 0:H.value),triple:parseFloat((ue=document.getElementById("triple"))==null?void 0:ue.value),cuadruple:parseFloat((pe=document.getElementById("cuadruple"))==null?void 0:pe.value),quintuple:parseFloat((me=document.getElementById("quintuple"))==null?void 0:me.value),sextuple:parseFloat((be=document.getElementById("sextuple"))==null?void 0:be.value),ni\u00F1o:parseFloat((ge=document.getElementById("ni\xF1o"))==null?void 0:ge.value),nocheAdicionalsencilla:parseFloat((fe=document.getElementById("nocheAdicionalsencilla"))==null?void 0:fe.value),nocheAdicionaldoble:parseFloat((ve=document.getElementById("nocheAdicionaldoble"))==null?void 0:ve.value),nocheAdicionaltriple:parseFloat((he=document.getElementById("nocheAdicionaltriple"))==null?void 0:he.value),nocheAdicionalcuadruple:parseFloat((xe=document.getElementById("nocheAdicionalcuadruple"))==null?void 0:xe.value),nocheAdicionalni\u00F1o:parseFloat((Ie=document.getElementById("nocheAdicionalni\xF1o"))==null?void 0:Ie.value),incluye:(ye=document.getElementById("incluye"))==null?void 0:ye.value,noIncluye:(we=document.getElementById("noIncluye"))==null?void 0:we.value,FechaInicio:(_e=document.getElementById("FechaInicio"))==null?void 0:_e.value,FechaFin:(Ee=document.getElementById("FechaFin"))==null?void 0:Ee.value}:l==="tiquete"?{salida:(Ce=document.getElementById("salida"))==null?void 0:Ce.value,pertenece:($e=document.getElementById("pertenece"))==null?void 0:$e.value,neta:parseFloat((Be=document.getElementById("neta"))==null?void 0:Be.value),tasas:parseFloat((Ae=document.getElementById("tasas"))==null?void 0:Ae.value),iva:parseFloat((Te=document.getElementById("iva"))==null?void 0:Te.value),total:parseFloat((Ne=document.getElementById("total"))==null?void 0:Ne.value)}:l==="transporte"?{pertenece:(He=document.getElementById("pertenece"))==null?void 0:He.value,destino:(Se=document.getElementById("destino"))==null?void 0:Se.value,combus:parseFloat((Pe=document.getElementById("combus"))==null?void 0:Pe.value),tasa:parseFloat((ke=document.getElementById("tasa"))==null?void 0:ke.value),iva:parseFloat((Oe=document.getElementById("iva"))==null?void 0:Oe.value),ta:parseFloat((Fe=document.getElementById("ta"))==null?void 0:Fe.value),ivaTa:parseFloat((qe=document.getElementById("ivaTa"))==null?void 0:qe.value),sencilla_ImpuestoHotel:parseFloat((De=document.getElementById("sencilla_ImpuestoHotel"))==null?void 0:De.value),doble_ImpuestoHotel:parseFloat((Le=document.getElementById("doble_ImpuestoHotel"))==null?void 0:Le.value),triple_ImpuestoHotel:parseFloat((Ve=document.getElementById("triple_ImpuestoHotel"))==null?void 0:Ve.value),cuadruple_ImpuestoHotel:parseFloat((ze=document.getElementById("cuadruple_ImpuestoHotel"))==null?void 0:ze.value),quintuple_ImpuestoHotel:parseFloat((je=document.getElementById("quintuple_ImpuestoHotel"))==null?void 0:je.value),sextuple_ImpuestoHotel:parseFloat((Re=document.getElementById("sextuple_ImpuestoHotel"))==null?void 0:Re.value),ni\u00F1o_ImpuestoIngr:parseFloat((Me=document.getElementById("ni\xF1o_ImpuestoIngr"))==null?void 0:Me.value),sencilla_Impoconsumo:parseFloat((Qe=document.getElementById("sencilla_Impoconsumo"))==null?void 0:Qe.value),doble_Impoconsumo:parseFloat((Ge=document.getElementById("doble_Impoconsumo"))==null?void 0:Ge.value),triple_Impoconsumo:parseFloat((Ue=document.getElementById("triple_Impoconsumo"))==null?void 0:Ue.value),cuadruple_Impoconsumo:parseFloat((Je=document.getElementById("cuadruple_Impoconsumo"))==null?void 0:Je.value),quintuple_Impoconsumo:parseFloat((Ye=document.getElementById("quintuple_Impoconsumo"))==null?void 0:Ye.value),sextuple_Impoconsumo:parseFloat((Ke=document.getElementById("sextuple_Impoconsumo"))==null?void 0:Ke.value),ni\u00F1o_Impoconsumo:parseFloat((We=document.getElementById("ni\xF1o_Impoconsumo"))==null?void 0:We.value),otros:(Ze=document.getElementById("otros"))==null?void 0:Ze.value,total:parseFloat((Xe=document.getElementById("total"))==null?void 0:Xe.value)}:null}});x&&((await(await fetch(`https://backmultidestinos.onrender.com/planes/${l}/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})).json()).success?c.fire("Actualizado",`${l} actualizado correctamente`,"success").then(()=>{location.reload()}):c.fire("Error","No se pudo actualizar","error"))}catch(a){c.fire("Error",a.message,"error")}};function tl(l,e){const a=`
        <style>
          .travel-form {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1200px;
            margin: auto;
            padding: 30px;
            background: linear-gradient(135deg, #1fa2ff 0%, #12d8fa 50%, #a6ffcb 100%);
            border-radius: 16px;
            color: white;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
          }

          .form-header {
            text-align: center;
            margin-bottom: 35px;
            padding-bottom: 20px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.4);
          }

          .form-header h3 {
            margin: 0;
            font-size: 30px;
            font-weight: 700;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
          }

          .form-header .icon {
            font-size: 40px;
            margin-bottom: 10px;
            display: block;
          }

          .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }

          .form-section {
            background: rgba(255, 255, 255, 0.15);
            padding: 20px;
            border-radius: 12px;
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .section-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 18px;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 3px solid #ffd700;
            padding-bottom: 8px;
          }

          .input-group {
            margin-bottom: 16px;
          }

          .input-label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 6px;
            color: #f9f9f9;
            text-transform: uppercase;
            letter-spacing: 0.6px;
          }

          .travel-input,
          .travel-textarea,
          .travel-select {
            width: 100%;
            padding: 14px 16px;
            border: none;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.95);
            color: #333;
            font-size: 15px;
            transition: all 0.3s ease;
            box-sizing: border-box;
          }

          .travel-input:focus,
          .travel-textarea:focus,
          .travel-select:focus {
            background: #fff;
            transform: translateY(-2px);
            box-shadow: 0 0 10px #ffd700, 0 5px 20px rgba(0, 0, 0, 0.3);
            outline: 2px solid #ffd700;
          }

          .travel-textarea {
            min-height: 100px;
            resize: vertical;
          }

          .full-width {
            grid-column: 1 / -1;
          }

          .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          .three-col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
          }

          .price-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 15px;
          }

          .currency-symbol {
            position: relative;
          }

          .currency-symbol::before {
            content: '$';
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
            font-weight: bold;
            font-size: 16px;
          }

          .currency-symbol input {
            padding-left: 36px !important;
          }

          @media (max-width: 992px) {
            .form-grid {
              grid-template-columns: 1fr;
            }

            .two-col, .three-col, .price-grid {
              grid-template-columns: 1fr;
            }
          }

        </style>
      `;return l==="hotel"?a+`
          <div class="travel-form">
            <div class="form-header">
              <span class="icon">\u{1F3E8}</span>
              <h3>Editar Hotel</h3>
            </div>

            <div class="form-grid">
              <div class="form-section">
                <div class="section-title">\u{1F4CB} Informaci\xF3n General</div>
                <div class="input-group">
                  <label class="input-label">Pertenece a</label>
                  <input id="pertenece" class="travel-input" value="${e.pertenece||""}">
                </div>
                <div class="two-col">
                  <div class="input-group">
                    <label class="input-label">Destino</label>
                    <input id="destino" class="travel-input" value="${e.destino||""}">
                  </div>
                  <div class="input-group">
                    <label class="input-label">Noches</label>
                    <input id="noches" class="travel-input" type="number" min="1" value="${e.noches||1}">
                  </div>
                </div>
                <div class="input-group">
                  <label class="input-label">Nombre del Programa</label>
                  <input id="nombrePrograma" class="travel-input" value="${e.nombrePrograma||""}">
                </div>
                <div class="two-col">
                  <div class="input-group">
                    <label class="input-label">Hotel</label>
                    <input id="hotel" class="travel-input" value="${e.hotel||""}">
                  </div>
                  <div class="input-group">
                    <label class="input-label">Plan</label>
                    <input id="plan" class="travel-input" value="${e.plan||""}">
                  </div>
                </div>
                <div class="input-group">
                  <label class="input-label">Tipo de Habitaci\xF3n</label>
                  <input id="tipoHabitacion" class="travel-input" value="${e.tipoHabitacion||""}">
                </div>
              </div>

              <div class="form-section">
                <div class="section-title">\u{1F4B0} Tarifas por Habitaci\xF3n</div>
                <div class="price-grid">
                  <div class="input-group currency-symbol">
                    <label class="input-label">Sencilla</label>
                    <input id="sencilla" class="travel-input" type="number" min="0" step="0.01" value="${e.sencilla||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Doble</label>
                    <input id="doble" class="travel-input" type="number" min="0" step="0.01" value="${e.doble||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Triple</label>
                    <input id="triple" class="travel-input" type="number" min="0" step="0.01" value="${e.triple||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Cu\xE1druple</label>
                    <input id="cuadruple" class="travel-input" type="number" min="0" step="0.01" value="${e.cuadruple||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Qu\xEDntuple</label>
                    <input id="quintuple" class="travel-input" type="number" min="0" step="0.01" value="${e.quintuple||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">S\xE9xtuple</label>
                    <input id="sextuple" class="travel-input" type="number" min="0" step="0.01" value="${e.sextuple||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Ni\xF1o</label>
                    <input id="ni\xF1o" class="travel-input" type="number" min="0" step="0.01" value="${e.ni\u00F1o||0}">
                  </div>
                </div>
              </div>

              <div class="form-section">
                <div class="section-title">\u{1F319} Noches Adicionales</div>
                <div class="price-grid">
                  <div class="input-group currency-symbol">
                    <label class="input-label">Sencilla</label>
                    <input id="nocheAdicionalsencilla" class="travel-input" type="number" min="0" step="0.01" value="${e.nocheAdicionalsencilla||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Doble</label>
                    <input id="nocheAdicionaldoble" class="travel-input" type="number" min="0" step="0.01" value="${e.nocheAdicionaldoble||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Triple</label>
                    <input id="nocheAdicionaltriple" class="travel-input" type="number" min="0" step="0.01" value="${e.nocheAdicionaltriple||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Cu\xE1druple</label>
                    <input id="nocheAdicionalcuadruple" class="travel-input" type="number" min="0" step="0.01" value="${e.nocheAdicionalcuadruple||0}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Ni\xF1o</label>
                    <input id="nocheAdicionalni\xF1o" class="travel-input" type="number" min="0" step="0.01" value="${e.nocheAdicionalni\u00F1o||0}">
                  </div>
                </div>
              </div>

              <div class="form-section full-width">
                <div class="section-title">\u{1F4C5} Fechas del Programa</div>
                <div class="two-col">
                  <div class="input-group">
                    <label class="input-label">Fecha de Inicio</label>
                    <input id="FechaInicio" class="travel-input" type="date" value="${e.FechaInicio||""}">
                  </div>
                  <div class="input-group">
                    <label class="input-label">Fecha de Fin</label>
                    <input id="FechaFin" class="travel-input" type="date" value="${e.FechaFin||""}">
                  </div>
                </div>
              </div>

              <div class="form-section full-width">
                <div class="section-title">\u{1F4DD} Detalles del Paquete</div>
                <div class="two-col">
                  <div class="input-group">
                    <label class="input-label">Incluye</label>
                    <textarea id="incluye" class="travel-textarea" placeholder="Especifica qu\xE9 incluye el paquete...">${e.incluye||""}</textarea>
                  </div>
                  <div class="input-group">
                    <label class="input-label">No Incluye</label>
                    <textarea id="noIncluye" class="travel-textarea" placeholder="Especifica qu\xE9 NO incluye el paquete...">${e.noIncluye||""}</textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `:l==="tiquete"?a+`
          <div class="travel-form">
            <div class="form-header">
              <span class="icon">\u2708\uFE0F</span>
              <h3>Editar Tiquete A\xE9reo</h3>
            </div>

            <div class="form-grid">
              <div class="form-section">
                <div class="section-title">\u{1F6EB} Informaci\xF3n del Vuelo</div>
                <div class="input-group">
                  <label class="input-label">Ciudad de Salida</label>
                  <input id="salida" class="travel-input" value="${e.salida||""}" placeholder="Ej: Bogot\xE1, Medell\xEDn, Cali...">
                </div>
                <div class="input-group">
                  <label class="input-label">Pertenece a</label>
                  <input id="pertenece" class="travel-input" value="${e.pertenece||""}" placeholder="Paquete o programa asociado">
                </div>
              </div>

              <div class="form-section">
                <div class="section-title">\u{1F4B3} Desglose de Costos</div>
                <div class="input-group currency-symbol">
                  <label class="input-label">Tarifa Neta</label>
                  <input id="neta" class="travel-input" type="number" min="0" step="0.01" value="${e.neta||""}">
                </div>
                <div class="input-group currency-symbol">
                  <label class="input-label">Tasas Aeroportuarias</label>
                  <input id="tasas" class="travel-input" type="number" min="0" step="0.01" value="${e.tasas||""}">
                </div>
                <div class="input-group currency-symbol">
                  <label class="input-label">IVA</label>
                  <input id="iva" class="travel-input" type="number" min="0" step="0.01" value="${e.iva||""}">
                </div>
                <div class="input-group currency-symbol" style="border-top: 2px solid #ffd700; padding-top: 15px; margin-top: 15px;">
                  <label class="input-label" style="color: #ffd700; font-size: 14px;">Total Final</label>
                  <input id="total" class="travel-input" type="number" min="0" step="0.01" value="${e.total||""}" style="font-weight: bold; font-size: 16px;">
                </div>
              </div>
            </div>
          </div>
        `:l==="transporte"?a+`
          <div class="travel-form">
            <div class="form-header">
              <span class="icon">\u{1F68C}</span>
              <h3>Editar Transporte</h3>
            </div>

            <div class="form-grid">
              <div class="form-section">
                <div class="section-title">\u{1F697} Informaci\xF3n General</div>
                <div class="input-group">
                  <label class="input-label">Pertenece a</label>
                  <input id="pertenece" class="travel-input" value="${e.pertenece||""}">
                </div>
                <div class="input-group">
                  <label class="input-label">Destino</label>
                  <input id="destino" class="travel-input" value="${e.destino||""}">
                </div>
              </div>

              <div class="form-section">
                <div class="section-title">\u26FD Costos Base</div>
                <div class="two-col">
                  <div class="input-group currency-symbol">
                    <label class="input-label">Combustible</label>
                    <input id="combus" class="travel-input" type="number" min="0" step="0.01" value="${e.combus||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Tasa</label>
                    <input id="tasa" class="travel-input" type="number" min="0" step="0.01" value="${e.tasa||""}">
                  </div>
                </div>
                <div class="two-col">
                  <div class="input-group currency-symbol">
                    <label class="input-label">IVA</label>
                    <input id="iva" class="travel-input" type="number" min="0" step="0.01" value="${e.iva||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">TA</label>
                    <input id="ta" class="travel-input" type="number" min="0" step="0.01" value="${e.ta||""}">
                  </div>
                </div>
                <div class="input-group currency-symbol">
                  <label class="input-label">IVA TA</label>
                  <input id="ivaTa" class="travel-input" type="number" min="0" step="0.01" value="${e.ivaTa||""}">
                </div>
              </div>

              <div class="form-section">
                <div class="section-title">\u{1F3E8} Impuesto Hotelero</div>
                <div class="price-grid">
                  <div class="input-group currency-symbol">
                    <label class="input-label">Sencilla</label>
                    <input id="sencilla_ImpuestoHotel" class="travel-input" type="number" min="0" step="0.01" value="${e.sencilla_ImpuestoHotel||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Doble</label>
                    <input id="doble_ImpuestoHotel" class="travel-input" type="number" min="0" step="0.01" value="${e.doble_ImpuestoHotel||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Triple</label>
                    <input id="triple_ImpuestoHotel" class="travel-input" type="number" min="0" step="0.01" value="${e.triple_ImpuestoHotel||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Cu\xE1druple</label>
                    <input id="cuadruple_ImpuestoHotel" class="travel-input" type="number" min="0" step="0.01" value="${e.cuadruple_ImpuestoHotel||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Qu\xEDntuple</label>
                    <input id="quintuple_ImpuestoHotel" class="travel-input" type="number" min="0" step="0.01" value="${e.quintuple_ImpuestoHotel||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">S\xE9xtuple</label>
                    <input id="sextuple_ImpuestoHotel" class="travel-input" type="number" min="0" step="0.01" value="${e.sextuple_ImpuestoHotel||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Ni\xF1o (Ing.)</label>
                    <input id="ni\xF1o_ImpuestoIngr" class="travel-input" type="number" min="0" step="0.01" value="${e.ni\u00F1o_ImpuestoIngr||""}">
                  </div>
                </div>
              </div>

              <div class="form-section">
                <div class="section-title">\u{1F6CD}\uFE0F Impuesto al Consumo</div>
                <div class="price-grid">
                  <div class="input-group currency-symbol">
                    <label class="input-label">Sencilla</label>
                    <input id="sencilla_Impoconsumo" class="travel-input" type="number" min="0" step="0.01" value="${e.sencilla_Impoconsumo||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Doble</label>
                    <input id="doble_Impoconsumo" class="travel-input" type="number" min="0" step="0.01" value="${e.doble_Impoconsumo||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Triple</label>
                    <input id="triple_Impoconsumo" class="travel-input" type="number" min="0" step="0.01" value="${e.triple_Impoconsumo||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Cu\xE1druple</label>
                    <input id="cuadruple_Impoconsumo" class="travel-input" type="number" min="0" step="0.01" value="${e.cuadruple_Impoconsumo||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Qu\xEDntuple</label>
                    <input id="quintuple_Impoconsumo" class="travel-input" type="number" min="0" step="0.01" value="${e.quintuple_Impoconsumo||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">S\xE9xtuple</label>
                    <input id="sextuple_Impoconsumo" class="travel-input" type="number" min="0" step="0.01" value="${e.sextuple_Impoconsumo||""}">
                  </div>
                  <div class="input-group currency-symbol">
                    <label class="input-label">Ni\xF1o</label>
                    <input id="ni\xF1o_Impoconsumo" class="travel-input" type="number" min="0" step="0.01" value="${e.ni\u00F1o_Impoconsumo||""}">
                  </div>
                </div>
              </div>

              <div class="form-section full-width">
                <div class="section-title">\u{1F4CB} Informaci\xF3n Adicional</div>
                <div class="two-col">
                  <div class="input-group">
                    <label class="input-label">Otros Conceptos</label>
                    <textarea id="otros" class="travel-textarea" placeholder="Describe otros costos o servicios incluidos...">${e.otros||""}</textarea>
                  </div>
                  <div class="input-group currency-symbol" style="display: flex; flex-direction: column; justify-content: center;">
                    <label class="input-label" style="color: #ffd700; font-size: 16px;">Total General</label>
                    <input id="total" class="travel-input" type="number" min="0" step="0.01" value="${e.total||""}" style="font-weight: bold; font-size: 18px; border: 2px solid #ffd700;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        `:`
        <div class="travel-form">
          <div class="form-header">
            <span class="icon">\u2753</span>
            <h3>Formulario no disponible</h3>
          </div>
          <p style="text-align: center; padding: 40px;">El formulario para "${l}" a\xFAn no est\xE1 disponible.</p>
        </div>
      `}return cl(()=>{h()}),{activeTab:b,searchHoteles:z,searchTransportes:u,searchTiquetes:j,loadingListas:O,savingHotel:r,hoteles:g,transportes:E,tiquetes:T,showHotelDialog:Q,hotelesColumns:le,transportesColumns:U,tiquetesColumns:J,filteredHoteles:Y,filteredTransportes:p,filteredTiquetes:i,Agregar_Hotel:B,EditarItem:te,closeHotelDialog:A,EliminarItem:S,importarDatos:M,ExportarExcel:K,Agregar_Transporte:s,Agregar_Tiquete:C}}},ll=t=>(ml("data-v-516c7437"),t=t(),bl(),t),Bl=ll(()=>m("video",{autoplay:"",muted:"",loop:"",playsinline:"",class:"video-background"},[m("source",{src:_l,type:"video/mp4"}),_(" Tu navegador no soporta video HTML5. ")],-1)),Al={class:"travel-header"},Tl={class:"row items-center"},Nl={class:"col"},Hl={class:"text-h4 text-weight-bold"},Sl=ll(()=>m("div",{class:"text-subtitle1"}," Administra hoteles, transportes y tiquetes de tu agencia ",-1)),Pl={class:"search-section"},kl={class:"row q-gutter-md items-center action-buttons"},Ol={class:"col-md-4 col-12"},Fl={class:"col-auto"},ql={class:"col-auto"},Dl={class:"col-auto"},Ll={class:"row items-center no-wrap"},Vl={class:"search-section"},zl={class:"row q-gutter-md items-center action-buttons"},jl={class:"col-md-4 col-12"},Rl={class:"col-auto"},Ml={class:"col-auto"},Ql={class:"col-auto"},Gl={class:"row items-center no-wrap"},Ul={class:"search-section"},Jl={class:"row q-gutter-md items-center action-buttons"},Yl={class:"col-md-4 col-12"},Kl={class:"col-auto"},Wl={class:"col-auto"},Zl={class:"col-auto"},Xl={class:"row items-center no-wrap"};function et(t,b,z,u,j,O){return dl(),ul(yl,{class:"q-pa-md"},{default:d(()=>[Bl,m("div",Al,[m("div",Tl,[m("div",Nl,[m("div",Hl,[o(V,{name:"flight",class:"q-mr-sm"}),_(" Gesti\xF3n de Viajes ")]),Sl])])]),o(ee,{class:"main-card"},{default:d(()=>[o(el,{class:"q-pb-none custom-tabs"},{default:d(()=>[o(gl,{modelValue:u.activeTab,"onUpdate:modelValue":b[0]||(b[0]=r=>u.activeTab=r),dense:"",class:"text-black","active-color":"primary","indicator-color":"primary",align:"justify"},{default:d(()=>[o(ie,{name:"hoteles",icon:"hotel",label:"Hoteles"}),o(ie,{name:"transportes",icon:"directions_car",label:"Transportes"}),o(ie,{name:"tiquetes",icon:"confirmation_number",label:"Tiquetes"})]),_:1},8,["modelValue"])]),_:1}),o(el,{class:"tab-content"},{default:d(()=>[o(fl,{modelValue:u.activeTab,"onUpdate:modelValue":b[10]||(b[10]=r=>u.activeTab=r),animated:""},{default:d(()=>[o(re,{name:"hoteles",class:"q-pa-none"},{default:d(()=>[m("div",Pl,[m("div",kl,[m("div",Ol,[o(se,{modelValue:u.searchHoteles,"onUpdate:modelValue":b[1]||(b[1]=r=>u.searchHoteles=r),outlined:"",placeholder:"Buscar hoteles...",dense:"",class:"form-input"},{prepend:d(()=>[o(V,{name:"search"})]),_:1},8,["modelValue"])]),m("div",Fl,[o(v,{color:"primary",icon:"add",label:"Agregar Hotel",onClick:u.Agregar_Hotel,unelevated:"",class:"action-btn"},null,8,["onClick"])]),m("div",ql,[o(v,{color:"green",icon:"upload",label:"Importar",onClick:b[2]||(b[2]=r=>u.importarDatos("hoteles")),outline:"",class:"action-btn"})]),m("div",Dl,[o(v,{color:"blue",icon:"download",label:"Exportar",onClick:b[3]||(b[3]=r=>u.ExportarExcel("hoteles")),outline:"",class:"action-btn"})])])]),o(ee,{flat:"",bordered:"",class:"data-table"},{default:d(()=>[o(ce,{rows:u.filteredHoteles,columns:u.hotelesColumns,"row-key":"id",loading:t.loadingHoteles,pagination:{rowsPerPage:10},class:"my-sticky-header-table"},{"body-cell-categoria":d(r=>[o(D,{props:r},{default:d(()=>[m("div",Ll,[o(Cl,{"model-value":r.row.categoria,max:"5",size:"sm",color:"amber",readonly:"",class:"rating-stars"},null,8,["model-value"])])]),_:2},1032,["props"])]),"body-cell-acciones":d(r=>[o(D,{props:r},{default:d(()=>[o(v,{flat:"",round:"",color:"blue",icon:"edit",size:"sm",onClick:g=>u.EditarItem("hotel",r.row),class:"action-btn q-mr-xs"},{default:d(()=>[o(L,null,{default:d(()=>[_("Editar")]),_:1})]),_:2},1032,["onClick"]),o(v,{flat:"",round:"",color:"red",icon:"delete",size:"sm",onClick:g=>u.EliminarItem("hotel",r.row.id),class:"action-btn"},{default:d(()=>[o(L,null,{default:d(()=>[_("Eliminar")]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1}),o(re,{name:"transportes",class:"q-pa-none"},{default:d(()=>[m("div",Vl,[m("div",zl,[m("div",jl,[o(se,{modelValue:u.searchTransportes,"onUpdate:modelValue":b[4]||(b[4]=r=>u.searchTransportes=r),outlined:"",placeholder:"Buscar transportes...",dense:"",class:"form-input"},{prepend:d(()=>[o(V,{name:"search"})]),_:1},8,["modelValue"])]),m("div",Rl,[o(v,{color:"primary",icon:"add",label:"Agregar Transporte",onClick:u.Agregar_Transporte,unelevated:"",class:"action-btn"},null,8,["onClick"])]),m("div",Ml,[o(v,{color:"green",icon:"upload",label:"Importar",onClick:b[5]||(b[5]=r=>u.importarDatos("transportes")),outline:"",class:"action-btn"})]),m("div",Ql,[o(v,{color:"blue",icon:"download",label:"Exportar",onClick:b[6]||(b[6]=r=>u.ExportarExcel("transportes")),outline:"",class:"action-btn"})])])]),o(ee,{flat:"",bordered:"",class:"data-table"},{default:d(()=>[o(ce,{rows:u.filteredTransportes,columns:u.transportesColumns,"row-key":"id",loading:t.loadingTransportes,pagination:{rowsPerPage:10},class:"my-sticky-header-table"},{"body-cell-tipo":d(r=>[o(D,{props:r},{default:d(()=>[m("div",Gl,[o(V,{name:r.row.tipo==="Vuelo"?"flight":"directions_bus",color:r.row.tipo==="Vuelo"?"blue":"green",class:"q-mr-sm"},null,8,["name","color"]),_(" "+ne(r.row.tipo),1)])]),_:2},1032,["props"])]),"body-cell-acciones":d(r=>[o(D,{props:r},{default:d(()=>[o(v,{flat:"",round:"",color:"blue",icon:"edit",size:"sm",onClick:g=>u.EditarItem("transporte",r.row),class:"action-btn q-mr-xs"},{default:d(()=>[o(L,null,{default:d(()=>[_("Editar")]),_:1})]),_:2},1032,["onClick"]),o(v,{flat:"",round:"",color:"red",icon:"delete",size:"sm",onClick:g=>u.EliminarItem("transporte",r.row.id),class:"action-btn"},{default:d(()=>[o(L,null,{default:d(()=>[_("Eliminar")]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1}),o(re,{name:"tiquetes",class:"q-pa-none"},{default:d(()=>[m("div",Ul,[m("div",Jl,[m("div",Yl,[o(se,{modelValue:u.searchTiquetes,"onUpdate:modelValue":b[7]||(b[7]=r=>u.searchTiquetes=r),outlined:"",placeholder:"Buscar tiquetes...",dense:"",class:"form-input"},{prepend:d(()=>[o(V,{name:"search"})]),_:1},8,["modelValue"])]),m("div",Kl,[o(v,{color:"primary",icon:"add",label:"Agregar Tiquete",onClick:u.Agregar_Tiquete,unelevated:"",class:"action-btn"},null,8,["onClick"])]),m("div",Wl,[o(v,{color:"green",icon:"upload",label:"Importar",onClick:b[8]||(b[8]=r=>u.importarDatos("tiquete")),outline:"",class:"action-btn"})]),m("div",Zl,[o(v,{color:"blue",icon:"download",label:"Exportar",onClick:b[9]||(b[9]=r=>u.ExportarExcel("tiquete")),outline:"",class:"action-btn"})])])]),o(ee,{flat:"",bordered:"",class:"data-table"},{default:d(()=>[o(ce,{rows:u.filteredTiquetes,columns:u.tiquetesColumns,"row-key":"id",loading:t.loadingTiquetes,pagination:{rowsPerPage:10},class:"my-sticky-header-table"},{"body-cell-cliente":d(r=>[o(D,{props:r},{default:d(()=>[m("div",Xl,[o(pl,{size:"32px","text-color":"white",class:"q-mr-sm avatar-client"},{default:d(()=>[_(ne(r.row.cliente.charAt(0)),1)]),_:2},1024),_(" "+ne(r.row.cliente),1)])]),_:2},1032,["props"])]),"body-cell-acciones":d(r=>[o(D,{props:r},{default:d(()=>[o(v,{flat:"",round:"",color:"blue",icon:"edit",size:"sm",onClick:g=>u.EditarItem("tiquete",r.row),class:"action-btn q-mr-xs"},{default:d(()=>[o(L,null,{default:d(()=>[_("Editar")]),_:1})]),_:2},1032,["onClick"]),o(v,{flat:"",round:"",color:"red",icon:"delete",size:"sm",onClick:g=>u.EliminarItem("tiquete",r.row.id),class:"action-btn"},{default:d(()=>[o(L,null,{default:d(()=>[_("Eliminar")]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}var It=El($l,[["render",et],["__scopeId","data-v-516c7437"]]);export{It as default};
