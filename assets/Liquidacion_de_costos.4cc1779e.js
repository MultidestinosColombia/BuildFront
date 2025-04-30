import{h as s,c as V,E as Q,bn as ce,b0 as ue,F as Y,bo as me,bp as pe,r as R,bq as fe,a as u,br as O,ae as ee,M as ge,d as be,g as G,b3 as he,C as U,bs as ve,bt as xe,bu as we,bf as ye,b2 as j,bh as K,w as X,aD as ke,aw as z,av as C,ah as $,ay as ae,a8 as I,aG as Pe,ao as Ce,a2 as Se,T as _e,a4 as N,a5 as Ae,a6 as h,au as Be,a7 as f,aC as Ie,az as M,ag as D,ax as je,aY as qe,aX as J,bv as Ee,a9 as w,aa as F,ak as Ne,al as ze}from"./index.c27b22cd.js";import{Q as Z}from"./QToolbar.3fca6223.js";import{S as b}from"./sweetalert2.esm.all.0f865825.js";import{a as W}from"./axios.37d53be1.js";const Ve=s("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[s("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),s("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var Te=V({name:"QRadio",props:{...Q,...ce,...ue,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:a,emit:o}){const{proxy:l}=G(),t=Y(e,l.$q),d=me(e,pe),i=R(null),{refocusTargetEl:g,refocusTarget:m}=fe(e,i),r=u(()=>O(e.modelValue)===O(e.val)),n=u(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(t.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),v=u(()=>{const c=e.color!==void 0&&(e.keepColor===!0||r.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${r.value===!0?"truthy":"falsy"}${c}`}),x=u(()=>(r.value===!0?e.checkedIcon:e.uncheckedIcon)||null),_=u(()=>e.disable===!0?-1:e.tabindex||0),S=u(()=>{const c={type:"radio"};return e.name!==void 0&&Object.assign(c,{".checked":r.value===!0,"^checked":r.value===!0?"checked":void 0,name:e.name,value:e.val}),c}),A=he(S);function y(c){c!==void 0&&(U(c),m(c)),e.disable!==!0&&r.value!==!0&&o("update:modelValue",e.val,c)}function B(c){(c.keyCode===13||c.keyCode===32)&&U(c)}function k(c){(c.keyCode===13||c.keyCode===32)&&y(c)}return Object.assign(l,{set:y}),()=>{const c=x.value!==null?[s("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[s(ee,{class:"q-radio__icon",name:x.value})])]:[Ve];e.disable!==!0&&A(c,"unshift"," q-radio__native q-ma-none q-pa-none");const P=[s("div",{class:v.value,style:d.value,"aria-hidden":"true"},c)];g.value!==null&&P.push(g.value);const q=e.label!==void 0?ge(a.default,[e.label]):be(a.default);return q!==void 0&&P.push(s("div",{class:"q-radio__label q-anchor--skip"},q)),s("div",{ref:i,class:n.value,tabindex:_.value,role:"radio","aria-label":e.label,"aria-checked":r.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:y,onKeydown:B,onKeyup:k},P)}}}),Le=V({name:"QToggle",props:{...ve,icon:String,iconColor:String},emits:xe,setup(e){function a(o,l){const t=u(()=>(o.value===!0?e.checkedIcon:l.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),d=u(()=>o.value===!0?e.iconColor:null);return()=>[s("div",{class:"q-toggle__track"}),s("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},t.value!==void 0?[s(ee,{name:t.value,color:d.value})]:void 0)]}return we("toggle",a)}});const oe={radio:Te,checkbox:ye,toggle:Le},Me=Object.keys(oe);var De=V({name:"QOptionGroup",props:{...Q,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(a=>"value"in a&&"label"in a)},name:String,type:{default:"radio",validator:e=>Me.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:a,slots:o}){const{proxy:{$q:l}}=G(),t=Array.isArray(e.modelValue);e.type==="radio"?t===!0&&console.error("q-option-group: model should not be array"):t===!1&&console.error("q-option-group: model should be array in your case");const d=Y(e,l),i=u(()=>oe[e.type]),g=u(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),m=u(()=>{const n={role:"group"};return e.type==="radio"&&(n.role="radiogroup",e.disable===!0&&(n["aria-disabled"]="true")),n});function r(n){a("update:modelValue",n)}return()=>s("div",{class:g.value,...m.value},e.options.map((n,v)=>{const x=o["label-"+v]!==void 0?()=>o["label-"+v](n):o.label!==void 0?()=>o.label(n):void 0;return s("div",[s(i.value,{modelValue:e.modelValue,val:n.value,name:n.name===void 0?e.name:n.name,disable:e.disable||n.disable,label:x===void 0?n.label:null,leftLabel:n.leftLabel===void 0?e.leftLabel:n.leftLabel,color:n.color===void 0?e.color:n.color,checkedIcon:n.checkedIcon,uncheckedIcon:n.uncheckedIcon,dark:n.dark||d.value,size:n.size===void 0?e.size:n.size,dense:e.dense,keepColor:n.keepColor===void 0?e.keepColor:n.keepColor,"onUpdate:modelValue":r},x)])}))}});V({name:"DialogPluginComponent",props:{...Q,title:String,message:String,prompt:Object,options:Object,progress:[Boolean,Object],html:Boolean,ok:{type:[String,Object,Boolean],default:!0},cancel:[String,Object,Boolean],focus:{type:String,default:"ok",validator:e=>["ok","cancel","none"].includes(e)},stackButtons:Boolean,color:String,cardClass:[String,Array,Object],cardStyle:[String,Array,Object]},emits:["ok","hide"],setup(e,{emit:a}){const{proxy:o}=G(),{$q:l}=o,t=Y(e,l),d=R(null),i=R(e.prompt!==void 0?e.prompt.model:e.options!==void 0?e.options.model:void 0),g=u(()=>"q-dialog-plugin"+(t.value===!0?" q-dialog-plugin--dark q-dark":"")+(e.progress!==!1?" q-dialog-plugin--progress":"")),m=u(()=>e.color||(t.value===!0?"amber":"primary")),r=u(()=>e.progress===!1?null:j(e.progress)===!0?{component:e.progress.spinner||K,props:{color:e.progress.color||m.value}}:{component:K,props:{color:m.value}}),n=u(()=>e.prompt!==void 0||e.options!==void 0),v=u(()=>{if(n.value!==!0)return{};const{model:p,isValid:L,items:ea,...de}=e.prompt!==void 0?e.prompt:e.options;return de}),x=u(()=>j(e.ok)===!0||e.ok===!0?l.lang.label.ok:e.ok),_=u(()=>j(e.cancel)===!0||e.cancel===!0?l.lang.label.cancel:e.cancel),S=u(()=>e.prompt!==void 0?e.prompt.isValid!==void 0&&e.prompt.isValid(i.value)!==!0:e.options!==void 0?e.options.isValid!==void 0&&e.options.isValid(i.value)!==!0:!1),A=u(()=>({color:m.value,label:x.value,ripple:!1,disable:S.value,...j(e.ok)===!0?e.ok:{flat:!0},"data-autofocus":e.focus==="ok"&&n.value!==!0||void 0,onClick:c})),y=u(()=>({color:m.value,label:_.value,ripple:!1,...j(e.cancel)===!0?e.cancel:{flat:!0},"data-autofocus":e.focus==="cancel"&&n.value!==!0||void 0,onClick:P}));X(()=>e.prompt&&e.prompt.model,E),X(()=>e.options&&e.options.model,E);function B(){d.value.show()}function k(){d.value.hide()}function c(){a("ok",O(i.value)),k()}function P(){k()}function q(){a("hide")}function E(p){i.value=p}function te(p){S.value!==!0&&e.prompt.type!=="textarea"&&Ce(p,13)===!0&&c()}function H(p,L){return e.html===!0?s(C,{class:p,innerHTML:L}):s(C,{class:p},()=>L)}function ne(){return[s(ae,{color:m.value,dense:!0,autofocus:!0,dark:t.value,...v.value,modelValue:i.value,"onUpdate:modelValue":E,onKeyup:te})]}function ie(){return[s(De,{color:m.value,options:e.options.items,dark:t.value,...v.value,modelValue:i.value,"onUpdate:modelValue":E})]}function le(){const p=[];return e.cancel&&p.push(s(I,y.value)),e.ok&&p.push(s(I,A.value)),s(Pe,{class:e.stackButtons===!0?"items-end":"",vertical:e.stackButtons,align:"right"},()=>p)}function re(){const p=[];return e.title&&p.push(H("q-dialog__title",e.title)),e.progress!==!1&&p.push(s(C,{class:"q-dialog__progress"},()=>s(r.value.component,r.value.props))),e.message&&p.push(H("q-dialog__message",e.message)),e.prompt!==void 0?p.push(s(C,{class:"scroll q-dialog-plugin__form"},ne)):e.options!==void 0&&p.push(s($,{dark:t.value}),s(C,{class:"scroll q-dialog-plugin__form"},ie),s($,{dark:t.value})),(e.ok||e.cancel)&&p.push(le()),p}function se(){return[s(z,{class:[g.value,e.cardClass],style:e.cardStyle,dark:t.value},re)]}return Object.assign(o,{show:B,hide:k}),()=>s(ke,{ref:d,onHide:q},se)}});const Fe={data(){return{search:"",filtro:"Todos",costos:[],usuarios:[],costoSeleccionado:null,loading:!1,columns:[{name:"nombre",label:"Nombre del Comprador",align:"center",field:"nombre"},{name:"pasajeros",label:"Total pasajeros",align:"right",field:"pasajeros"},{name:"servicio",label:"Servicio",align:"left",field:"servicio"},{name:"montoPendiente",label:"Monto ($) Pendiente",align:"right",field:"montoPendiente",format:e=>`$${e}`},{name:"montoPagado",label:"Monto ($) Pagado",align:"right",field:"montoPagado",format:e=>`$${e}`},{name:"estado",label:"Estado",align:"left",field:"estado"},{name:"Area",label:"Area de Venta",align:"center",field:"Area"},{name:"archivo",label:"Comprobante",align:"center",field:"archivo",sortable:!1},{name:"acciones",label:"Acciones",align:"center",field:"acciones",sortable:!1}],progreso:0,animatedProgress:0}},computed:{filtrarCostos(){return(this.filtro==="Todos"?this.costos:this.costos.filter(a=>a.estado===this.filtro)).slice().sort((a,o)=>o.id-a.id)},totalPagado(){return this.costos.filter(e=>e.estado==="Pagado").reduce((e,a)=>e+Number(a.montoPagado),0)},totalPendiente(){return this.costos.filter(e=>e.estado==="Pendiente").reduce((e,a)=>e+Number(a.montoPendiente),0)},totalVentas(){return this.costos.length},ventasPorArea(){return{Sur:this.costos.filter(e=>e.Area==="Sur").length,Norte:this.costos.filter(e=>e.Area==="Norte").length}},montoPorArea(){return{Sur:Math.round(this.costos.filter(e=>e.Area==="Sur").reduce((e,a)=>e+Number(a.montoPagado),0)),Norte:Math.round(this.costos.filter(e=>e.Area==="Norte").reduce((e,a)=>e+Number(a.montoPagado),0))}},usuariosPorArea(){const e={Sur:new Set,Norte:new Set};return this.costos.forEach(a=>{a.Area==="Sur"?e.Sur.add(a.nombre):a.Area==="Norte"&&e.Norte.add(a.nombre)}),{Sur:e.Sur.size,Norte:e.Norte.size}},totalPasajerosPorArea(){const e={Sur:0,Norte:0};return this.costos.forEach(a=>{a.Area==="Sur"?e.Sur+=parseInt(a.pasajeros||0):a.Area==="Norte"&&(e.Norte+=parseInt(a.pasajeros||0))}),e}},watch:{costos:{handler(){const e=this.totalPagado+this.totalPendiente;this.progreso=e?this.totalPagado/e:0},deep:!0}},mounted(){this.animateProgress(),this.cargarCostos()},methods:{mostrarResumenVentas(){const e=this.totalVentas,a=this.ventasPorArea.Sur,o=this.ventasPorArea.Norte,l=this.usuariosPorArea.Sur,t=this.usuariosPorArea.Norte,d=this.montoPorArea.Sur,i=this.montoPorArea.Norte,g=this.totalPasajerosPorArea.Sur,m=this.totalPasajerosPorArea.Norte;b.fire({title:"\u{1F4CA} Resumen de Ventas",html:`
          <div style="text-align: left; font-size: 15px;">
            <p><strong>Total Ventas:</strong> ${e}</p>
            <hr />
            <p><strong>Ventas por \xC1rea:</strong></p>
            <ul>
              <li>\u{1F30E} Sur: ${a}</li>
              <li>\u{1F9ED} Norte: ${o}</li>
            </ul>
            <p><strong>Compradores por \xC1rea:</strong></p>
            <ul>
              <li>\u{1F465} Sur: ${l}</li>
              <li>\u{1F465} Norte: ${t}</li>
            </ul>
            <p><strong>Pasajeros por \xC1rea:</strong></p>
            <ul>
              <li>\u{1F9F3} Sur: ${g}</li>
              <li>\u{1F9F3} Norte: ${m}</li>
            </ul>
            <p><strong>Monto Vendido por \xC1rea:</strong></p>
            <ul>
              <li>\u{1F4B0} Sur: S/. ${d}</li>
              <li>\u{1F4B0} Norte: S/. ${i}</li>
            </ul>
          </div>
        `,background:"#f4faff",icon:"info",showCloseButton:!0,confirmButtonColor:"#2196f3",confirmButtonText:"Cerrar",width:450,customClass:{popup:"animated fadeInDown faster"}})},animateProgress(){this.animatedProgress=0,setTimeout(()=>{const e=this.totalPagado+this.totalPendiente;this.progreso=e?this.totalPagado/e:0;let a=0;const o=setInterval(()=>{a>=this.progreso?clearInterval(o):(a+=.02,this.animatedProgress=a)},30)},500)},async editarCosto(e){const{value:a,dismiss:o}=await b.fire({title:"Editar Informaci\xF3n",html:`
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <style>
      /* Base styles */
      .custom-popup {
          width: 100%;
          max-width: 900px;
          border-radius: 15px;
          overflow: hidden;
          animation: fadeIn 0.8s ease-out;
          position: relative;
          background: #0f1729;
          box-shadow: 0 5px 20px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: row;
      }

      /* Night sky background - LEFT SIDE */
      .night-sky {
          flex: 1;
          background: linear-gradient(135deg, #0f1729 0%, #1e3a8a 100%);
          padding: 20px;
          position: relative;
          color: white;
          height: 100%;
          min-height: 500px;
          overflow: hidden;
          border-radius: 15px 0 0 15px;
      }

      /* Form side - RIGHT SIDE */
      .form-side {
          flex: 1.2;
          padding: 20px;
          background: #111827;
          border-radius: 0 15px 15px 0;
      }

      .agency-subtitle {
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff;
          margin-top: 20px;
          position: relative;
          z-index: 5;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
          text-align: center;
      }

      /* Stars in night sky */
      .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
      }

      .star {
          position: absolute;
          background-color: #fff;
          border-radius: 50%;
          animation: twinkle 1.5s infinite alternate;
      }

      /* Cloud container */
      .cloud-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 2;
          overflow: hidden;
      }

      /* Cloud styles */
      .cloud {
          position: absolute;
          width: 80px;
          opacity: 0.4;
          filter: brightness(0.7) contrast(1.2);
          animation: moveClouds 20s linear infinite;
      }

      /* Moon */
      .moon {
          position: absolute;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle at 30% 30%, #fff9c4, #ffd54f 60%, #ffb300);
          border-radius: 50%;
          top: 40px;
          left: 40px;
          box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.4);
          z-index: 2;
      }

      /* Moving clouds - different directions */
      .cloud.c1 {
          top: 60px;
          animation-duration: 25s;
      }
      .cloud.c2 {
          top: 140px;
          animation-duration: 35s;
          animation-delay: 2s;
      }
      .cloud.c3 {
          top: 210px;
          animation-duration: 28s;
          animation-delay: 5s;
      }

      /* Keyframes for clouds - now moving left to right */
      @keyframes moveClouds {
          0% {
              left: -100px;
          }
          100% {
              left: 100%;
          }
      }

      /* Animation for stars twinkling */
      @keyframes twinkle {
          0% {
              opacity: 0.3;
          }
          100% {
              opacity: 1;
          }
      }

      /* Plane flying animation - now left to right */
      .plane-animation {
          position: absolute;
          height: 40px;
          width: 100%;
          z-index: 3;
      }

      .plane {
          position: absolute;
          font-size: 28px;
          color: white;
          opacity: 0.9;
          animation: flyPlane 12s infinite;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
      }

      @keyframes flyPlane {
          0% {
              left: -50px;
              top: 80px;
          }
          50% {
              left: 50%;
              top: 120px;
          }
          100% {
              left: 100%;
              top: 150px;
          }
      }

      /* Landing plane - now left to right */
      .landing-plane-container {
          position: absolute;
          width: 100%;
          height: 60px;
          top: 250px;
          left: 0;
          z-index: 3;
      }

      @keyframes planeLanding {
          0% {
              left: 10%;
              top: 30px;
              transform: rotate(10deg) scale(0.8);
              opacity: 0.5;
          }
          50% {
              left: 40%;
              top: 100px;
              transform: rotate(5deg) scale(0.9);
              opacity: 0.7;
          }
          100% {
              left: 70%;
              top: 180px;
              transform: rotate(0deg) scale(1);
              opacity: 0.9;
          }
      }

      .landing-plane {
          position: absolute;
          font-size: 32px;
          color: white;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          animation: planeLanding 15s ease-in-out infinite alternate;
      }

      /* Form container styles - now optimized for double column */
      .swal-container {
          padding: 10px 10px 20px;
      }

      .form-row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -10px;
      }

      .form-column {
          flex: 1;
          padding: 0 10px;
          min-width: 180px;
      }

      .full-width {
          flex-basis: 100%;
          padding: 0 10px;
      }

      .swal-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #e2e8f0;
          font-size: 0.9rem;
          text-align: left;
          margin-top: 15px;
      }

      .swal-input {
          width: 100%;
          padding: 10px 15px;
          border: 1px solid #374151;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s;
          margin-bottom: 5px;
          background-color: #1f2937;
          color: #e5e7eb;
      }

      .swal-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
          outline: none;
          background-color: #2d3748;
      }

      .file-upload-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #1e293b;
          border: 2px dashed #3b82f6;
          border-radius: 8px;
          padding: 15px;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 5px;
      }

      .file-upload-container:hover {
          background: #2d3748;
      }

      .file-upload-icon {
          font-size: 24px;
          color: #3b82f6;
          margin-bottom: 10px;
      }

      .file-upload-text {
          color: #d1d5db;
          font-size: 0.9rem;
          text-align: center;
          margin-bottom: 5px;
      }

      #archivo {
          width: 0.1px;
          height: 0.1px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          z-index: -1;
      }

      /* File info styles */
      .file-info {
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          background-color: #2d3748;
          border-radius: 6px;
          max-width: 100%;
          transition: all 0.3s;
          overflow: hidden;
          display: none;
      }

      .file-info.active {
          display: flex;
      }

      .file-icon {
          color: #60a5fa;
          font-size: 18px;
          margin-right: 8px;
      }

      .file-name {
          font-size: 0.85rem;
          color: #e5e7eb;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
      }

      .file-remove {
          margin-left: auto;
          color: #ef4444;
          cursor: pointer;
          font-size: 16px;
          opacity: 0.7;
          transition: all 0.2s;
      }

      .file-remove:hover {
          opacity: 1;
      }

      /* Current file display */
      .current-file {
          margin-top: 8px;
          padding: 8px 12px;
          background-color: #1e293b;
          border-radius: 6px;
          display: flex;
          align-items: center;
      }

      .current-file-icon {
          color: #60a5fa;
          margin-right: 8px;
      }

      .current-file-name {
          font-size: 0.85rem;
          color: #d1d5db;
      }

      .section-divider {
          margin: 20px 0 10px;
          border-top: 1px solid #374151;
          position: relative;
      }

      /* Form title */
      .form-title {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 15px;
          text-align: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #374151;
      }

      /* Button styles */
      .form-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
      }

      .btn {
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
      }

      .btn-primary {
          background: linear-gradient(90deg, #1d4ed8, #3b82f6);
          color: white;
          box-shadow: 0 3px 5px rgba(37, 99, 235, 0.3);
      }

      .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 10px rgba(37, 99, 235, 0.4);
      }

      .btn-secondary {
          background: #374151;
          color: #e5e7eb;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
      }

      .btn-secondary:hover {
          background: #4b5563;
          transform: translateY(-2px);
      }

      /* Animations */
      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(20px); }
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
          .custom-popup {
              flex-direction: column;
              max-width: 95%;
          }

          .night-sky {
              min-height: 200px;
              border-radius: 15px 15px 0 0;
          }

          .form-side {
              border-radius: 0 0 15px 15px;
          }

          .form-row {
              flex-direction: column;
          }
      }
      </style>

      <div class="custom-popup">
          <!-- Night sky with clouds and planes (LEFT SIDE) -->
          <div class="night-sky">
              <div class="stars">
                  <!-- Generate stars dynamically -->

              </div>

              <div class="moon"></div>

              <div class="cloud-container">
                  <img src="https://cdn-icons-png.flaticon.com/512/414/414927.png" class="cloud c1" alt="Nube">
                  <img src="https://cdn-icons-png.flaticon.com/512/414/414927.png" class="cloud c2" alt="Nube">
                  <img src="https://cdn-icons-png.flaticon.com/512/414/414927.png" class="cloud c3" alt="Nube">
              </div>

              <div class="plane-animation">
                  <span class="plane">
                      <img src="https://imgs.search.brave.com/dkOnHLGEUuQqnGU2uVXTeSR3fd7g0A-X8wE-T8v8wC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/ODBiNTg1YjJlZGJj/ZTI0YzQ3YjJkMTAu/cG5n" alt="Avi\xF3n" width="80">
                  </span>
              </div>
              <p class="agency-subtitle">Viaja F\xE1cil - La mejor experiencia</p>
          </div>

          <!-- Form side (RIGHT SIDE) -->
          <div class="form-side">
              <div class="form-title">Editar Detalles del Viaje</div>
              <div class="swal-container">
                  <div class="form-row">
                      <div class="form-column">
                          <label class="swal-label" for="cliente">Nombre del Cliente</label>
                          <input id="cliente" class="swal-input" type="text" value="${e.nombre}">

                          <label class="swal-label" for="montoPendiente">Monto Pendiente</label>
                          <input id="montoPendiente" class="swal-input" type="number" value="${e.montoPendiente}">

                          <label class="swal-label" for="estado">Estado del Pago</label>
                          <select id="estado" class="swal-input">
                              <option value="Pendiente" ${e.estado==="Pendiente"?"selected":""}>Pendiente</option>
                              <option value="Pagado" ${e.estado==="Pagado"?"selected":""}>Pagado</option>
                          </select>

                          <label class="swal-label" for="pasajeros">Total pasajeros</label>
                          <input id="pasajeros" class="swal-input" type="number" value="${e.pasajeros}">
                      </div>

                      <div class="form-column">
                          <label class="swal-label" for="servicio">Servicio</label>
                          <input id="servicio" class="swal-input" type="text" value="${e.servicio}">

                          <label class="swal-label" for="montoPagado">Monto Pagado</label>
                          <input id="montoPagado" class="swal-input" type="number" value="${e.montoPagado}">

                          <label class="swal-label" for="Area">Area de Venta</label>
                          <select id="Area" class="swal-input">
                            <option value="Sur" ${e.Area==="Sur"?"selected":""}>Sur</option>
                            <option value="Norte" ${e.Area==="Norte"?"selected":""}>Norte</option>
                          </select>
                      </div>
                  </div>

                  <div class="section-divider"></div>

                  <div class="full-width">
                      <label class="swal-label" for="archivo">Comprobante de Pago</label>
                      ${e.archivo?`
                      <div class="current-file">
                          <i class="fas fa-file-pdf current-file-icon"></i>
                          <span class="current-file-name">Archivo actual: ${e.archivoNombre||"comprobante.pdf"}</span>
                      </div>`:""}

                      <label for="archivo" class="file-upload-container">
                          <i class="fas fa-cloud-upload-alt file-upload-icon"></i>
                          <span class="file-upload-text">Seleccione o arrastre un nuevo comprobante PDF</span>
                          <input id="archivo" type="file" accept="application/pdf">
                      </label>

                      <div id="fileInfo" class="file-info">
                          <i class="fas fa-file-pdf file-icon"></i>
                          <span id="fileName" class="file-name"></span>
                          <i class="fas fa-times file-remove" id="removeFile"></i>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `,showCancelButton:!0,confirmButtonText:"Actualizar",cancelButtonText:"Cancelar",customClass:{popup:"custom-popup",confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1,allowOutsideClick:!1,preConfirm:()=>{const t=document.getElementById("cliente").value.trim(),d=document.getElementById("servicio").value.trim(),i=document.getElementById("montoPendiente").value.trim(),g=document.getElementById("montoPagado").value.trim(),m=parseInt(document.getElementById("pasajeros").value),r=document.getElementById("estado").value,n=document.getElementById("archivo").files[0]||null;return!t||!d||!i||!g||!r||!m?(b.showValidationMessage("\u26A0\uFE0F Todos los campos son obligatorios"),!1):{nombre:t,servicio:d,montoPendiente:i,montoPagado:g,estado:r,pasajeros:m,archivo:n}}});if(o===b.DismissReason.cancel){location.reload();return}if(!a)return;const l=new FormData;l.append("nombre",a.nombre),l.append("servicio",a.servicio),l.append("montoPendiente",a.montoPendiente),l.append("montoPagado",a.montoPagado),l.append("estado",a.estado),l.append("Area",document.getElementById("Area").value),l.append("pasajeros",a.pasajeros),a.archivo&&l.append("archivo",a.archivo);try{document.querySelector(".swal2-confirm").setAttribute("disabled","true"),await W.put(`https://backmultidestinos.onrender.com/Liquidacion_Costos/modificar/${e.id}`,l,{headers:{"Content-Type":"multipart/form-data"}}),await b.fire({icon:"success",title:"\xA1Actualizado!",text:"\u{1F389} Informaci\xF3n actualizada correctamente",showConfirmButton:!1,timer:1500,timerProgressBar:!0}),location.reload()}catch(t){console.error("Error al actualizar:",t),await b.fire({icon:"error",title:"Error",text:"\u274C Error al actualizar la informaci\xF3n",confirmButtonText:"Entendido",timer:1500}),location.reload()}},async eliminarCosto(e){if((await b.fire({title:"\xBFEst\xE1s seguro?",text:"Esta acci\xF3n eliminar\xE1 el registro y su archivo adjunto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar",backdrop:`
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `})).isConfirmed)try{await W.delete(`https://backmultidestinos.onrender.com/Liquidacion_Costos/eliminar/${e}`),this.costos=this.costos.filter(o=>o.id!==e),b.fire({title:"Eliminado",text:"\u{1F9F9} Registro y archivo eliminados correctamente",icon:"success",timer:1500,showConfirmButton:!1})}catch(o){console.error("Error al eliminar:",o),b.fire({title:"Error",text:"No se pudo eliminar el registro",icon:"error"})}},mostrarAlertaAgregarPago(){b.fire({title:"Control de clientes",html:this.generarHTMLFormularioPago(),showCancelButton:!0,confirmButtonText:"Registrar Pago",cancelButtonText:"Cancelar",confirmButtonColor:"#2196f3",cancelButtonColor:"#d33",width:"auto",padding:"0",customClass:{popup:"custom-popup",container:"custom-container"},allowOutsideClick:!1,allowEscapeKey:!1,showCloseButton:!0,didOpen:this.configurarInteraccionAlerta,willClose:this.animarCierreAlerta,preConfirm:this.validarFormularioPago}).then(async e=>{if(e.isConfirmed){const{nombre:a,servicio:o,montoPendiente:l,montoPagado:t,estado:d,Area:i,pasajeros:g,archivo:m}=e.value;try{const r=new FormData;if(r.append("nombre",a),r.append("servicio",o),r.append("montoPendiente",l),r.append("montoPagado",t),r.append("estado",d),r.append("Area",i),r.append("pasajeros",g),r.append("archivo",m),!(await fetch("https://backmultidestinos.onrender.com/liquidacion_Costos/registrar",{method:"POST",body:r})).ok)throw new Error("Error al registrar el pago");b.fire({title:"\xA1\xC9xito!",text:"El pago ha sido registrado correctamente.",icon:"success",confirmButtonColor:"#2196f3",width:"350px"})}catch(r){console.error("Error:",r),b.fire({title:"Error",text:"No se pudo registrar el pago. Int\xE9ntalo nuevamente.",icon:"error",confirmButtonColor:"#d33"})}}else e.dismiss===b.DismissReason.cancel&&console.log("Operaci\xF3n cancelada")})},generarHTMLFormularioPago(){return`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-a..." crossorigin="anonymous" referrerpolicy="no-referrer" />

        <style>
          /* Base styles */
          .custom-popup {
              width: 500%;
              max-width: 575px;
              border-radius: 15px;
              overflow: hidden;
              animation: fadeIn 0.8s ease-out;
              position: relative;
              background: #ffffff;
          }

          .custom-header {
              background: linear-gradient(90deg, #1976d2, #2196f3);
              padding: 20px;
              text-align: center;
              position: relative;
              color: white;
              height: 140px;
              margin: -32px -32px 20px -32px;
              border-radius: 30px 30px 0 0;
              overflow: hidden;
          }

          .agency-subtitle {
              font-size: 1.1rem;
              font-weight: bold;
              opacity: 0.9;
              margin-top: 40px;
              position: relative;
              z-index: 1;
          }

          /* Contenedor de nubes */
          .cloud-container {
              position: absolute;
              width: 100%;
              height: 100px;
              top: 10px;
              left: 0;
              z-index: 1;
              overflow: hidden;
          }

          /* Estilos de las nubes */
          .cloud {
              position: absolute;
              width: 100px;
              opacity: 0.8;
              animation: moveClouds 10s linear infinite alternate;
          }

          /* Movimiento de nubes de izquierda a derecha */
          .cloud.left {
              animation-direction: normal;
          }

          .cloud.right {
              animation-direction: reverse;
          }

          /* Keyframes para nubes */
          @keyframes moveClouds {
              0% {
                  transform: translateX(-100px);
              }
              100% {
                  transform: translateX(100%);
              }
          }

         /* Animaci\xF3n de avi\xF3n volando */
          .plane-animation {
              position: relative;
              height: 40px;
              margin-top: 5px;
          }

          .plane {
              position: absolute;
              font-size: 28px;
              color: white;
              opacity: 0.9;
              animation: flyPlane 3s infinite;
              transform: rotate(-5deg);
          }

          @keyframes flyPlane {
              0% {
                  left: -30px;
                  top: 0;
              }
              50% {
                  left: 50%;
                  top: -10px;
              }
              100% {
                  left: 85%;
                  top: 0;
              }
          }

          /* Avi\xF3n aterrizando */
          .landing-plane-container {
              position: absolute;
              width: 100%;
              height: 60px;
              top: 20px;
              left: 0;
              z-index: 5;
              overflow: visible;
          }

          @keyframes planeLanding {
              0% {
                  left: 80%;
                  top: -20px;
                  transform: rotate(10deg) scale(1);
                  opacity: 0.7;
              }
              40% {
                  left: 50%;
                  top: 10px;
                  transform: rotate(0deg) scale(1.1);
                  opacity: 0.8;
              }
              80% {
                  left: 30%;
                  top: 25px;
                  transform: rotate(-5deg) scale(1.2);
                  opacity: 0.9;
              }
              100% {
                  left: 20%;
                  top: 30px;
                  transform: rotate(-10deg) scale(1.3);
                  opacity: 1;
              }
          }

          .landing-plane {
              position: absolute;
              font-size: 32px;
              color: white;
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
              animation: planeLanding 3s ease-in-out infinite alternate;
          }

          /* Responsividad */
          @media (max-width: 580px) {
              .form-column {
                  flex-basis: 100%;
              }
          }

          /* Form container and two-column layout */
          .swal-container {
            padding: 0 10px;
          }

          .form-row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -10px;
          }

          .form-column {
            flex: 1;
            padding: 0 10px;
            min-width: 250px;
          }

          .full-width {
            flex-basis: 100%;
            padding: 0 10px;
          }

          .swal-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #333;
            font-size: 0.9rem;
            text-align: left;
            margin-top: 15px;
          }

          .swal-input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
            margin-bottom: 5px;
          }

          .swal-input:focus {
            border-color: #2196f3;
            box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
            outline: none;
          }

          .file-upload-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #f5f5f5;
            border: 2px dashed #2196f3;
            border-radius: 8px;
            padding: 15px;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 5px;
          }

          .file-upload-container:hover {
            background: #e3f2fd;
          }

          .file-upload-icon {
            font-size: 24px;
            color: #2196f3;
            margin-bottom: 10px;
          }

          .file-upload-text {
            color: #555;
            font-size: 0.9rem;
            text-align: center;
          }

          #archivo {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
          }

          .swal2-popup.swal2-modal.custom-popup.swal2-hide {
            animation: fadeOut 0.5s forwards !important;
          }

          .swal2-confirm {
            background: linear-gradient(90deg, #1976d2, #2196f3) !important;
            box-shadow: 0 3px 5px rgba(33, 150, 243, 0.3) !important;
            transition: all 0.3s !important;
          }

          .swal2-confirm:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 5px 10px rgba(33, 150, 243, 0.4) !important;
          }

          @media (max-width: 580px) {
            .form-column {
              flex-basis: 100%;
            }
          }
        </style>

        <div class="custom-header">
            <div class="cloud-container">
                <img src="https://cdn-icons-png.flaticon.com/512/414/414927.png" class="cloud left" alt="Nube">
                <img src="https://cdn-icons-png.flaticon.com/512/414/414927.png" class="cloud right" alt="Nube">
            </div>
            <div class="plane-animation">
                <span class="plane">
                  <img src="https://imgs.search.brave.com/dkOnHLGEUuQqnGU2uVXTeSR3fd7g0A-X8wE-T8v8wC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/ODBiNTg1YjJlZGJj/ZTI0YzQ3YjJkMTAu/cG5n"
            alt="Avi\xF3n" width="100">
                  </span>
            </div>
            <div class="landing-plane-container">
                <span class="landing-plane">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/038/363/072/small_2x/ai-generated-side-view-of-commercial-airplane-isolated-on-transparent-background-passenger-plane-generative-ai-png.png"
            alt="Avi\xF3n" width="100">
                  </span>
            </div>
            <p class="agency-subtitle">Viaja F\xE1cil - La mejor experiencia</p>
        </div>


        <div class="swal-container">
          <div class="form-row">
            <!-- Left Column -->
            <div class="form-column">
              <label class="swal-label" for="cliente">Nombre del Cliente</label>
              <input id="cliente" class="swal-input" type="text" placeholder="Ingrese el nombre completo">

              <label class="swal-label" for="montoPendiente">Monto Pendiente</label>
              <input id="montoPendiente" class="swal-input" type="number" placeholder="Ingrese el monto en pesos">

              <label class="swal-label" for="estado">Estado del Pago</label>
              <select id="estado" class="swal-input">
                <option value="Pendiente">Pendiente</option>
                <option value="Pagado">Pagado</option>
              </select>

              <label class="swal-label" for="pasajeros">Total pasajeros</label>
              <input id="pasajeros" class="swal-input" type="number" min="1" required placeholder="Ingrese pasajeros">

            </div>

            <!-- Right Column -->
            <div class="form-column">
              <label class="swal-label" for="servicio">Servicio</label>
              <input id="servicio" class="swal-input" type="text" placeholder="Ingrese el servicio contratado">

              <label class="swal-label" for="montoPagado">Monto Pagado</label>
              <input id="montoPagado" class="swal-input" type="number" placeholder="Ingrese el monto en pesos">

              <label class="swal-label" for="Area">Area de Venta</label>
              <select id="Area" class="swal-input">
                <option value="Sur">Sur</option>
                <option value="Norte">Norte</option>
              </select>
            </div>

            <!-- Full Width Element -->
            <div class="full-width">
              <label class="swal-label" for="archivo">Subir Comprobante</label>
              <label for="archivo" class="file-upload-container">
                <i class="fas fa-cloud-upload-alt file-upload-icon"></i>
                <span class="file-upload-text">Seleccione o arrastre su archivo PDF</span>
                <input id="archivo" type="file" accept="application/pdf">
              </label>
            </div>
          </div>
        </div>
      `},configurarInteraccionAlerta(){const e=document.getElementById("archivo"),a=document.querySelector(".file-upload-text");e.addEventListener("change",function(){a.textContent=this.files.length>0?this.files[0].name:"Seleccione o arrastre su archivo PDF"});const l=new URLSearchParams(window.location.search).get("size");l==="large"?document.documentElement.style.setProperty("--swal-width","650px"):l==="small"?document.documentElement.style.setProperty("--swal-width","450px"):document.documentElement.style.setProperty("--swal-width","550px")},animarCierreAlerta(){return new Promise(e=>{_e(()=>{const a=document.querySelector(".swal2-popup.custom-popup");a?(a.classList.add("swal2-hide"),setTimeout(()=>{e()},500)):e()})})},validarFormularioPago(){var r,n,v,x,_,S,A,y,B,k,c,P;const e=(n=(r=document.getElementById("cliente"))==null?void 0:r.value)==null?void 0:n.trim(),a=(x=(v=document.getElementById("servicio"))==null?void 0:v.value)==null?void 0:x.trim(),o=parseFloat(((_=document.getElementById("montoPendiente"))==null?void 0:_.value)||"0"),l=parseFloat(((S=document.getElementById("montoPagado"))==null?void 0:S.value)||"0"),t=(y=(A=document.getElementById("estado"))==null?void 0:A.value)==null?void 0:y.trim(),d=(k=(B=document.getElementById("Area"))==null?void 0:B.value)==null?void 0:k.trim(),i=(c=document.getElementById("pasajeros"))==null?void 0:c.value,g=i&&!isNaN(i)?parseInt(i,10):0,m=(P=document.getElementById("archivo"))==null?void 0:P.files[0];return!e||!a||!t||!d||o<=0&&l<=0||!m||g<=0?(b.showValidationMessage("Todos los campos son obligatorios"),!1):{nombre:e,servicio:a,montoPendiente:o,montoPagado:l,estado:t,Area:d,pasajeros:g,archivo:m}},async cargarCostos(){try{const a=await(await fetch("https://backmultidestinos.onrender.com/Liquidacion_Costos/listar")).json();this.costos=a.map(o=>({id:o.id,nombre:o.nombre,servicio:o.servicio,montoPendiente:o.montoPendiente,montoPagado:o.montoPagado,estado:o.estado,Area:o.Area,pasajeros:o.pasajeros,archivo:o.archivo}))}catch(e){console.error("Error al cargar pagos:",e)}},async mounted(){await this.cargarCostos(),await this.cargarUsuarios()},async cargarUsuarios(){const a=await(await fetch("https://backmultidestinos.onrender.com/usuarios/listar")).json();this.usuarios=a}}},T=e=>(Ne("data-v-12f6a7da"),e=e(),ze(),e),Re=T(()=>w("div",{class:"text-h4 text-bold"},"Liquidaci\xF3n de Costos",-1)),Oe=T(()=>w("div",{class:"text-subtitle1"},"Gesti\xF3n detallada de costos y pagos",-1)),$e={key:0,class:"spinner"},Qe=T(()=>w("i",{class:"fas fa-spinner fa-spin"},null,-1)),Ye=["href"],Ge={key:1,class:"text-grey"},He=T(()=>w("div",{class:"text-h6"},"Resumen Financiero",-1)),Ue={class:"q-mt-md text-caption text-bold animated-text"},Ke={class:"text-subtitle1"},Xe={class:"text-green text-bold"},Je={class:"text-subtitle1"},Ze={class:"text-red text-bold"};function We(e,a,o,l,t,d){return N(),Ae(Be,{class:"q-pa-md animated-page"},{default:h(()=>[f(z,{class:"q-mb-md shadow-3 animated-card"},{default:h(()=>[f(C,{class:"bg-primary text-white text-center"},{default:h(()=>[Re,Oe]),_:1})]),_:1}),f(z,{class:"shadow-3 animated-card"},{default:h(()=>[f(C,null,{default:h(()=>[f(Z,{class:"animated-toolbar"},{default:h(()=>[f(ae,{modelValue:t.search,"onUpdate:modelValue":a[0]||(a[0]=i=>t.search=i),label:"Buscar",dense:"",outlined:"",class:"q-mr-md animated-input"},null,8,["modelValue"]),f(Ie,{modelValue:t.filtro,"onUpdate:modelValue":a[1]||(a[1]=i=>t.filtro=i),options:["Todos","Pendiente","Pagado"],label:"Estado",dense:"",outlined:"",class:"animated-select"},null,8,["modelValue"]),f(I,{color:"primary",icon:"add",label:"Agregar",class:"q-ml-md animated-button",onClick:a[2]||(a[2]=i=>d.mostrarAlertaAgregarPago())})]),_:1})]),_:1}),t.loading?(N(),M("div",$e,[Qe,D(" Cargando pagos... ")])):je("",!0),f(qe,{flat:"",bordered:"",rows:d.filtrarCostos,columns:t.columns,"row-key":"id",filter:t.search,class:"animated-table"},{"body-cell-acciones":h(i=>[f(J,{props:i,class:"q-gutter-sm text-center"},{default:h(()=>[f(I,{icon:"edit",color:"info",dense:"",flat:"",onClick:g=>d.editarCosto(i.row),class:"animated-icon"},null,8,["onClick"]),f(I,{icon:"delete",color:"negative",dense:"",flat:"",onClick:g=>d.eliminarCosto(i.row.id),class:"animated-icon"},null,8,["onClick"])]),_:2},1032,["props"])]),"body-cell-archivo":h(i=>[f(J,{props:i,class:"text-center"},{default:h(()=>[i.row.archivo?(N(),M("a",{key:0,href:`https://backmultidestinos.onrender.com/uploads/${i.row.archivo}`,target:"_blank",class:"text-primary",style:{"text-decoration":"underline"}}," Ver PDF ",8,Ye)):(N(),M("span",Ge,"Sin archivo"))]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter"])]),_:1}),f(z,{class:"q-mt-md shadow-3 animated-card"},{default:h(()=>[f(C,null,{default:h(()=>[f(Z,{class:"animated-toolbar"},{default:h(()=>[He]),_:1}),f(Ee,{value:t.animatedProgress,color:"green",class:"q-mt-md animated-progress"},null,8,["value"]),w("div",Ue,F(Math.round(t.progreso*100))+"% de los costos han sido liquidados ",1),f($,{class:"q-my-md"}),w("div",Ke,[D(" Total Pagado: "),w("span",Xe,"$"+F(d.totalPagado),1)]),w("div",Je,[D(" Total Pendiente: "),w("span",Ze,"$"+F(d.totalPendiente),1)]),f(I,{color:"secondary",label:"Ver Detalles",class:"q-mt-md animated-button",onClick:d.mostrarResumenVentas},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}var ia=Se(Fe,[["render",We],["__scopeId","data-v-12f6a7da"]]);export{ia as default};
