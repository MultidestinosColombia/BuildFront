import{ac as Tt,ay as It,a0 as Dt,a1 as Lt,a2 as T,at as Ot,ai as fe,a5 as S,au as We,aw as pt,aA as Pt,aD as zt,aC as mt,a9 as St,aa as At,aH as Rt,ae as ht,av as Et,bf as Ft,N as vt,aB as wt,bd as Vt}from"./index.cb2bc9e1.js";import{E as Nt,n as te}from"./PDFButton.b9e29190.js";import"./LocalStorage.0fba4730.js";import{a as N}from"./axios.37d53be1.js";const Mt={data(){return{mostrarDialogo:!1,facturaOtroNombre:!1,nombreFactura:"",liquidacionSeleccionada:null,filterId:"",filterStatus:null,statusOptions:[{label:"Aprobado",value:"Aprobado"},{label:"Rechazado",value:"Rechazado"},{label:"Pendiente",value:"Pendiente"}],filter:"",rows:[],columns:[{name:"status",label:"Status",field:"status"},{name:"idLiquidacion",label:"ID Liquidaci\xF3n",field:"idLiquidacion",sortable:!0},{name:"idCotizacion",label:"ID Cotizaci\xF3n",field:"idCotizacion",sortable:!0},{name:"salida",label:"Salida",field:"salida"},{name:"destino",label:"Destino",field:"destino"},{name:"nombrePrograma",label:"Nombre del Programa",field:"nombrePrograma"},{name:"hotel",label:"Hotel",field:"hotel"},{name:"totalPasajeros",label:"Total Pasajeros",field:"totalPasajeros"},{name:"precioBrutoTotal",label:"Precio Bruto Total",field:"precioBrutoTotal"},{name:"totalPrecioCliente",label:"Total Precio Cliente",field:"totalPrecioCliente"},{name:"fechaCreacion",label:"Fecha de Creaci\xF3n",field:m=>new Date(m.fechaCreacion).toLocaleDateString(),sortable:!0},{name:"acciones",label:"Acciones"}]}},computed:{filteredRows(){const m=this.filterId.toLowerCase();return this.rows.filter(E=>{const P=E.idCotizacion.toLowerCase().includes(m),J=this.filterStatus===null||E.status===this.filterStatus;return P&&J})}},methods:{mostrarDialogoFactura(m){this.liquidacionSeleccionada=m,this.mostrarDialogo=!0},async procesarDescarga(){this.mostrarDialogo=!1;try{await N.put(`https://backmultidestinos.onrender.com/liquidacion/${this.liquidacionSeleccionada.idLiquidacion}`,{facturaPara:this.nombreFactura?this.nombreFactura:null})}catch(m){console.error("Error al actualizar la liquidaci\xF3n:",m),It.create({message:"Error al actualizar la liquidaci\xF3n.",color:"negative"});return}this.liquidacionSeleccionada.idCotizacion.includes("-C")?this.descargarLiquidacionCano(this.liquidacionSeleccionada.idCotizacion,this.liquidacionSeleccionada.idLiquidacion):this.descargarLiquidacion(this.liquidacionSeleccionada.idCotizacion,this.liquidacionSeleccionada.idLiquidacion),this.nombreFactura=""},chipColor(m){switch(m){case"Aprobado":return"green";case"Rechazado":return"red";case"Pendiente":return"orange";default:return"grey"}},verDetalles(m){this.$router.push({name:"LiquidacionDetalles",params:{idLiquidacion:m.idLiquidacion,liquidacionData:m}})},descargarLiquidacionN(m){m.idCotizacion.includes("-C")?this.descargarLiquidacionCano(m.idCotizacion,m.idLiquidacion):this.descargarLiquidacion(m.idCotizacion,m.idLiquidacion)},async descargarLiquidacion(m,E){try{let P=function(n,r,a,l=10){return r+a>Ae-l?(n.addPage(),t.top):r},it=function(n){return n.map(r=>{const a=r.adultos,l=r.ni\u00F1os,c=`1x${a}`;return l>0?`${c} CHD`:c}).join(", ")},L=function(n){for(let r=0;r<=6;r++){const a=t.left+r*f;e.line(a,n,a,n+s)}e.line(t.left,n,u-t.right,n),e.line(t.left,n+s,u-t.right,n+s)};const[J,I,X,g,Ue]=await Promise.all([N.get(`https://backmultidestinos.onrender.com/habitacionCotizacion/${m}`),N.get(`https://backmultidestinos.onrender.com/cotizacion/${m}`),N.get(`https://backmultidestinos.onrender.com/ImpuestoCot/${m}`),N.get(`https://backmultidestinos.onrender.com/liquidacion/${E}`),N.get(`https://backmultidestinos.onrender.com/pasajero/${E}`)]);if(J.status!==200||I.status!==200){console.error("Error al obtener datos de habitacionCotizacion o cotizacion");return}const o=I.data[0],z=X.data[0];console.log("impuesto",z);const y=J.data;console.log("habitacion",y);const oe=g.data;console.log("liquidacion",oe);const he=Ue.data;console.log("pasajero",he);const ge=await N.get(`https://backmultidestinos.onrender.com/cliente/buscar/${o.cliente}`);console.log("clienteResponse",ge);const p=ge.data[0];console.log("clienteData",p);const pe=p.tipoBase,j=await N.get(`https://backmultidestinos.onrender.com/user/${o.CreadorCotizacion}`),Ct=j.Data;console.log("vendedor",j.data.nombreCompleto);const Ge={hotel:o.hotel,nombrePrograma:o.nombrePrograma,destino:o.destino},Se=await N.post("https://backmultidestinos.onrender.com/hoteles/buscar",Ge),Je=o.incluye?o.incluye:Se.data[0].incluye,Xe=o.noIncluye?o.noIncluye:Se.data[0].noIncluye,e=new Nt,t={top:10,bottom:10,left:10,right:10},u=e.internal.pageSize.width,Ae=e.internal.pageSize.height,ae=40,C={left:10,right:10,top:5,bottom:5},ie=await new Promise((n,r)=>{const a=new Image;a.src="https://i.ibb.co/1sFJ7dT/imgAzul.png",a.onload=()=>n(a),a.onerror=r}),Ze=ie.width/ie.height,Ke=u/4-C.left-C.right,W=Math.min(100,Ke),Ee=W/Ze,et=t.top+(ae-Ee)/2,tt=`PBX(601)7621133
CALLE 64 No. 11-37 LOC 301
EMAIL: MULTIDESTINOS_EXPRESS@YAHOO.COM`,Ne=`Numero de cotizaci\xF3n: ${m}`;e.addImage(ie,"PNG",t.left+C.left,et,W,Ee);const ot=u-t.left-t.right-W-C.left-C.right-10;e.setFontSize(10),e.text(e.splitTextToSize(tt,ot),t.left+W+C.left+C.right,t.top+10);const at=u-t.right-e.getTextWidth(Ne)-C.right;e.setFontSize(12),e.setFont("Helvetica-Bold",12),e.text(Ne,at,t.top+10),e.setDrawColor(0),e.rect(t.left,t.top,u-t.left-t.right,ae,"S"),e.setFontSize(10);const Ce=t.top+ae+10;e.setFontSize(10),e.text("SOLICITUD DE RESERVA:",t.left,Ce-4),e.setFontSize(8);const ne=["FECHA SOLICITUD:","AGENCIA:","TEL\xC9FONO:","CONTACTO:","NIT:","VENDEDOR:"],xe=[new Date(new Date(o.fechaCreacion).getTime()+new Date(o.fechaCreacion).getTimezoneOffset()*6e4).toLocaleDateString(),o.cliente.toString(),p.telefono?p.telefono.toString():"N/A","N/A",p.nit?p.nit.toString():"N/A",j.data.nombreCompleto?j.data.nombreCompleto.toString():"N/A"],be=6,Te=(u-t.left-t.right)/be;let D=t.left,i=Ce;for(let n=0;n<ne.length;n++){e.text(ne[n],D,i);const r=xe[n]!==void 0?xe[n]:"N/A",a=e.splitTextToSize(r,Te-2);e.text(a,D,i+5),D+=Te,((n+1)%be===0||n===ne.length-1)&&(i+=15,D=t.left)}const nt=it(y),Ie=["NOCHES:","HOTEL:","PLAN:","DESTINO:","DIRECCION:","ACOMODACI\xD3N:"],le=[o.noches?o.noches.toString():"N/A",o.hotel?o.hotel.toString():"N/A",o.plan?o.plan.toString():"N/A",o.destino?o.destino.toString():"N/A",o.direccion?o.direccion.toString():"N/A",nt.toString()];console.log("campso2",le);const lt=6,De=(u-t.left-t.right)/lt;i+=1;for(let n=0;n<Ie.length;n++){e.text(Ie[n],D,i);const r=le[n]!==void 0?le[n]:"N/A",a=e.splitTextToSize(r,De-2);e.text(a,D,i+5),D+=De}i+=1,e.setFontSize(10),e.text("PASAJEROS: ",t.left,i+12),i+=20;const Le=["NOMBRE","DOCUMENTO","F. NACIMIENTO","EDAD"],Oe=he.map(n=>{const r=new Date(n.fechaNacimiento),a=new Date;let l=a.getFullYear()-r.getFullYear();const c=a.getMonth()-r.getMonth();return(c<0||c===0&&a.getDate()<r.getDate())&&l--,[n.nombre,n.numeroDocumento,r.toLocaleDateString(),l]}),Pe=(u-t.left-t.right)/Le.length,st=u-t.left-t.right,ze=10+8*Oe.length;e.rect(t.left,i,st,ze,"S"),e.setFontSize(8),Le.forEach((n,r)=>{e.text(n,t.left+5+r*Pe,i+5)}),i+=10,Oe.forEach((n,r)=>{n.forEach((a,l)=>{e.text(a.toString(),t.left+5+l*Pe,i+r*8)})}),i+=ze-15,i+=22,e.setFontSize(10),e.text("ITINERARIO: ",t.left,i-10);const Re=["AEROLINEA","VUELO","FECHA","RUTA","CLASE","HR SALIDA","HR LLEGADA","RECORD"],w=[[o.aerolineaIda||"N/A",o.vueloIda||"N/A",o.fechaInicio?new Date(new Date(o.fechaInicio).getTime()+new Date(o.fechaInicio).getTimezoneOffset()*6e4).toLocaleDateString():"N/A",o.ruta1||"N/A",o.claseIda||"N/A",o.horaSalidaIda||"N/A",o.horaLlegadaIda||"N/A",o.recordIda||"N/A"]];o.aerolineaEscalaIda!=null&&(w.push([o.aerolineaEscalaIda||"N/A",o.vueloEscalaIda||"N/A",o.fechaInicio?new Date(new Date(o.fechaInicio).getTime()+new Date(o.fechaInicio).getTimezoneOffset()*6e4).toLocaleDateString():"N/A","Escala Ida",o.claseEscalaIda||"N/A",o.horaSalidaEscalaIda||"N/A",o.horaLlegadaEscalaIda||"N/A",""]),w.push([o.aerolineaEscalaVuelta||"N/A",o.vueloEscalaVuelta||"N/A",o.fechaFin?new Date(new Date(o.fechaFin).getTime()+new Date(o.fechaFin).getTimezoneOffset()*6e4).toLocaleDateString():"N/A","Escala Vuelta",o.claseEscalaVuelta||"N/A",o.horaSalidaEscalaVuelta||"N/A",o.horaLlegadaEscalaVuelta||"N/A",""])),w.push([o.aerolineaVuelta||"N/A",o.vueloVuelta||"N/A",o.fechaFin?new Date(new Date(o.fechaFin).getTime()+new Date(o.fechaFin).getTimezoneOffset()*6e4).toLocaleDateString():"N/A",o.ruta2||"N/A",o.claseVuelta||"N/A",o.horaSalidaVuelta||"N/A",o.horaLlegadaVuelta||"N/A",o.recordVuelta||"N/A"]);const Fe=(u-t.left-t.right)/Re.length,rt=u-t.left-t.right,ve=12+8*w.length;i+=5,e.rect(t.left,i-5,rt,ve,"S"),e.setFontSize(8),Re.forEach((n,r)=>{e.text(n,t.left+r*Fe,i)}),i+=5,w.forEach((n,r)=>{n.forEach((a,l)=>{e.text(a,t.left+l*Fe,i+(r+1)*8)})}),i+=ve-5;let A;const ct="Esta cotizaci\xF3n est\xE1 sujeta a cambio y disponibilidad al momento de reservar (Sin servicio confirmado)",U=i,we=30;e.setDrawColor(0),e.rect(t.left,U,u-t.left-t.right,we),e.setFontSize(12),e.text("OBSERVACIONES:",t.left+2,U+6),e.setFontSize(10),e.text(ct,t.left+2,U+15,{maxWidth:u-t.left-t.right-4}),i=U+we;const _=i+10;e.setFontSize(8);const dt=`El pago de su plan se realizar\xE1 conforme a las siguientes condiciones:

Planes con inicio dentro de los 30 d\xEDas:  El pago total deber\xE1 efectuarse dentro de un d\xEDa h\xE1bil a partir de la fecha de env\xEDo de este documento.
Planes con inicio posterior a los 30 d\xEDas: El pago se realizar\xE1 en dos cuotas:
  * Primera cuota: 50% del valor total del plan, pagadero dentro de un d\xEDa h\xE1bil a partir de la fecha de env\xEDo de este documento.
  * Segunda cuota: 50% restante del valor total del plan, pagadero 30 d\xEDas antes de la fecha de inicio del plan.`,Ve=e.splitTextToSize(dt,u-t.left-t.right-4);let $=18;Ve.forEach(n=>{$+=e.getTextDimensions(n,{fontSize:8}).h}),i=P(e,i,$),e.setDrawColor(0),e.rect(t.left,_,u-t.left-t.right,$),e.setFontSize(12),e.text("PLAZO DE PAGO:",t.left+2,_+6),e.setFontSize(8),A=_+15,Ve.forEach(n=>{e.text(n,t.left+2,A,{maxWidth:u-t.left-t.right-4}),A+=e.getTextDimensions(n,{fontSize:8}).h}),i=_+$;let Me=!1;e.setFontSize(8);const He=Je.split("\xBF");let se=[];He.forEach(n=>{const r=e.splitTextToSize(n,u-t.left-t.right-4);se=se.concat(r)});let V=18;He.forEach(n=>{const r=e.splitTextToSize(n,u-t.left-t.right-4);for(let a=0;a<r.length;a++){const l=r[a];V+=e.getTextDimensions(l,{fontSize:8}).h,!l.endsWith(`
`)&&a<r.length-1&&(V+=e.getTextDimensions(" ",{fontSize:8}).h)}}),i=P(e,i,V),i===t.top&&(Me=!0);const Y=i+10;e.setDrawColor(0),e.rect(t.left,Y,u-t.left-t.right,V),e.setFontSize(12),e.text("INCLUYE:",t.left+2,Y+6),e.setFontSize(8),A=Y+15,se.forEach(n=>{e.text(n,t.left+2,A,{maxWidth:u-t.left-t.right-4}),A+=e.getTextDimensions(n,{fontSize:8}).h}),i=Y+V;const qe=Xe.split("\xBF");let re=[];qe.forEach(n=>{const r=e.splitTextToSize(n,u-t.left-t.right-4);re=re.concat(r)});let M=18;qe.forEach(n=>{const r=e.splitTextToSize(n,u-t.left-t.right-4);for(let a=0;a<r.length;a++){const l=r[a];M+=e.getTextDimensions(l,{fontSize:8}).h,!l.endsWith(`
`)&&a<r.length-1&&(M+=e.getTextDimensions(" ",{fontSize:8}).h)}}),i=P(e,i,M),Me||(i=t.top);const k=i+10;e.setDrawColor(0),e.rect(t.left,k,u-t.left-t.right,M),e.setFontSize(12),e.text("NO INCLUYE:",t.left+2,k+6),e.setFontSize(8),A=k+15,re.forEach(n=>{e.text(n,t.left+2,A,{maxWidth:u-t.left-t.right-4}),A+=e.getTextDimensions(n,{fontSize:8}).h}),i=k+M,e.addPage(),i=t.top,e.setFontSize(10),e.text("LIQUIDACI\xD3N:",t.left,i),i+=5;const Q=i+5,d=2,s=6,f=(u-t.left-t.right)/6;e.setDrawColor(0);let Be=0;e.setFontSize(7);let R=0;y.forEach(n=>{const r=Q+R*s;L(r);const a=`Valor adul ${n.acomodacion}`;e.text(a,t.left+d,r+s/2,{baseline:"middle"});const l=Math.round(n.precioComisionableAdulto);e.text(l.toString(),t.left+f+d,r+s/2,{baseline:"middle"});const c=n.adultos;e.text(c.toString(),t.left+2*f+d,r+s/2,{baseline:"middle"});const h=Math.round(n.precioComisionableAdulto*n.adultos);if(e.text(h.toString(),t.left+3*f+d,r+s/2,{baseline:"middle"}),R===0){e.setFontSize(6);const b=pe==="Comisi\xF3n"?"BASE COMISI\xD3N":"BASE DE DESCUENTO";e.text(b,t.left+4*f+d,r+s/2,{baseline:"middle"}),e.setFontSize(7)}let x=h;if(n.ni\u00F1os>0&&(x+=Math.round(n.precioComisionableNino*n.ni\u00F1os)),Be+=x,R++,n.ni\u00F1os>0){const b=Q+R*s;L(b);const F=`Valor child ${n.acomodacion}`;e.text(F,t.left+d,b+s/2,{baseline:"middle"});const O=Math.round(n.precioComisionableNino);e.text(O.toString(),t.left+f+d,b+s/2,{baseline:"middle"});const K=n.ni\u00F1os;e.text(K.toString(),t.left+2*f+d,b+s/2,{baseline:"middle"});const ee=Math.round(n.precioComisionableNino*n.ni\u00F1os);e.text(ee.toString(),t.left+3*f+d,b+s/2,{baseline:"middle"}),R++}}),e.text(Be.toString(),t.left+5*f+d,Q+s/2,{baseline:"middle"}),i=Q+R*s+10;const H=["TRANSPORTE NO COMISI","Q","YS","CO","TA","YS TA","TOTAL IMPUESTOS"],G=[o.otros,o.combus,o.iva,o.tasa,o.ta,o.ivaTa,o.precioTrans];if(o.suplemento>0&&(H.push("SUPLEMENTO"),G.push(o.suplemento)),o.extra1)if(o.extra1.includes("*")){let n=o.extra1.split("*"),r=n[0],a=n[1];H.push("Valor Extra","Valor Extra2"),G.push(r,a)}else{let n=o.extra1;H.push("Valor Extra"),G.push(n)}H.forEach((n,r)=>{const a=i+r*s;L(a),e.text(n,t.left+d,a+s/2,{baseline:"middle"});const l=o.totalPasajeros,c=G[r]||0,h=l!==0?Math.trunc(c/l):"";e.text(h.toString(),t.left+f+d,a+s/2,{baseline:"middle"});const x=l!==0?Math.trunc(l).toString():"";e.text(x,t.left+2*f+d,a+s/2,{baseline:"middle"});const b=c!==0?Math.trunc(c).toString():"";if(e.text(b,t.left+3*f+d,a+s/2,{baseline:"middle"}),n==="Q"){e.text("Porcentaje",t.left+4*f+d,a+s/2,{baseline:"middle"});const F=o.clientePorcentaje||0,O=Math.trunc(F).toString()+"%";e.text(O,t.left+5*f+d,a+s/2,{baseline:"middle"})}else if(n==="YS"){e.text("Valor Descuento",t.left+4*f+d,a+s/2,{baseline:"middle"});const F=o.valorDescuento||0,O=Math.trunc(F).toString();e.text(O,t.left+5*f+d,a+s/2,{baseline:"middle"}),pe==="Comisi\xF3n"&&[{label:`IVA(${p.porcentajeIva}%) (-)`,value:o.ivaValor},{label:`RTE FUENTE(${p.rteFuente}%) (+)`,value:o.rteFuente},{label:`RTE ICA(${p.rteIca}%) (+)`,value:o.rteIca},{label:"Total Comisi\xF3n",value:o.totalComision}].forEach((ee,B)=>{const v=a+(B+1)*s;L(v),e.text(ee.label,t.left+4*f+d,v+s/2,{baseline:"middle"}),e.text(ee.value.toString(),t.left+5*f+d,v+s/2,{baseline:"middle"})})}}),i+=H.length*s,y.forEach(n=>{if(n.adultos>0){const r=i;L(r),e.text(`Valor total Adt ${n.acomodacion}`,t.left+d,r+s/2,{baseline:"middle"});const a=n.precioHabitacionAdulto||0,l=te(a).format("$0,0");e.text(l,t.left+3*f+d,r+s/2,{baseline:"middle"}),i+=s}if(n.ni\u00F1os>0){const r=i;L(r),e.text(`Valor total Chd ${n.acomodacion}`,t.left+d,r+s/2,{baseline:"middle"});const a=n.precioHabitacionNino||0,l=te(a).format("$0,0");e.text(l,t.left+3*f+d,r+s/2,{baseline:"middle"}),i+=s}}),e.setFontSize(8),i+=s,L(i),e.text("Valor total",t.left+d,i+s/2,{baseline:"middle"});const _e=o.precioBrutoTotal||0,ut=te(_e).format("$0,0");e.text(ut,t.left+3*f+d,i+s/2,{baseline:"middle"}),e.text("Precio a pagar",t.left+4*f+d,i+s/2-2,{baseline:"middle"}),e.text("a Multidestinos",t.left+4*f+d,i+s/2+2,{baseline:"middle"});const $e=0,Ye=parseFloat(o.totalPrecioCliente)||0,ke=$e>0?Ye+$e:Ye,Qe=te(ke).format("$0,0");e.text(Qe,t.left+5*f+d,i+s/2,{baseline:"middle"}),i+=s+10;const ce=t.left;let de=i+5;const Z=190;let q=30;e.setFontSize(7),e.setLineWidth(.5),e.setFontSize(6);const ue=5,me="PARA CONFIRMACIONES SE DEBE ENVIAR DEPOSITO DEL 50% DEL VALOR DEL PLAN Y EL SALDO 30 DIAS ANTES DE LA SALIDA, SI LA FECHA DE VIAJES CERCANA SE DEBE CANCELAR EL 100%. LOS SERVICIOS DEJADOS DE TOMAR NO SON REMBOLSABLES. LA CANCELACI\xD3N CON 18 DIAS ANTES DE VIAJE LA PENALIDAD SERA DEL 100% DEL VALOR DEL PLAN, LOS TIQUETES NO SON REEMBOLSABLE, NI ENDOSABLES, PENALIDAD POR CAMBIO (FECHA, NOMBRE, HORA, RUTAS) 200.000. ESTAS POLITICAS ESTAN PUBLICADAS DE MANERA CLARA Y ESPECIFICA EN NUESTRA PAGINA WWW.MULTIDESTINOSEXPRESS.COM. *TARIFAS SUJETA A CAMBIO Y DISPONIBILIDAD SIN PREVIO AVISO*",ye=e.splitTextToSize(me,Z-10);q=20+ye.length*ue,de+q>Ae-t.bottom&&(e.addPage(),i=t.top),de=i,e.rect(ce,i,Z,q),e.text("Deposito y Condiciones de Pago",ce+5,de+3),ye.forEach((n,r)=>{e.text(n,ce+5,de+10+r*ue)}),oe[0].facturaPara&&(i=de+10+ye.length*ue,e.setFontSize(8),e.text("FACTURA A NOMBRE DE:",ce+5,i),i+=ue,e.text(oe[0].facturaPara,ce+5,i)),i+=q+5;const je=e.output("blob");return e.save(`cotizacion_${m}.pdf`),je}catch(P){console.error("Error al descargar cotizaci\xF3n:",P)}},async descargarLiquidacionCano(m,E){try{let P=function(a,l,c,h=10){return l+c>Ae-h?(a.addPage(),t.top):l},it=function(a){return a.map(l=>{const c=l.adultos,h=l.ni\u00F1os,x=`1x${c}`;return h>0?`${x} CHD`:x}).join(", ")},L=function(a){for(let l=0;l<=6;l++){const c=t.left+l*f;e.line(c,a,c,a+s)}e.line(t.left,a,u-t.right,a),e.line(t.left,a+s,u-t.right,a+s)};const[J,I,X,g,Ue]=await Promise.all([N.get(`https://backmultidestinos.onrender.com/habitacionCotizacion/${m}`),N.get(`https://backmultidestinos.onrender.com/cotizacion/${m}`),N.get(`https://backmultidestinos.onrender.com/ImpuestoCot/${m}`),N.get(`https://backmultidestinos.onrender.com/liquidacion/${E}`),N.get(`https://backmultidestinos.onrender.com/pasajero/${E}`)]);if(J.status!==200||I.status!==200){console.error("Error al obtener datos de habitacionCotizacion o cotizacion");return}const o=I.data[0],z=X.data[0];console.log("impuesto",z);const y=J.data;console.log("habitacion",y);const oe=g.data;console.log("liquidacion",oe);const he=Ue.data;console.log("pasajero",he);const ge=await N.get(`https://backmultidestinos.onrender.com/cliente/buscar/${o.cliente}`);console.log("clienteResponse",ge);const p=ge.data[0];console.log("clienteData",p);const pe=p.tipoBase,j=await N.get(`https://backmultidestinos.onrender.com/user/${o.CreadorCotizacion}`),Ct=j.Data;console.log("vendedor",j.data.nombreCompleto);const Ge={hotel:o.hotel,nombrePrograma:o.nombrePrograma,destino:o.destino},Se=await N.post("https://backmultidestinos.onrender.com/hoteles/buscar",Ge),Je=Se.data[0].incluye,Xe=Se.data[0].noIncluye,e=new Nt,t={top:10,bottom:10,left:10,right:10},u=e.internal.pageSize.width,Ae=e.internal.pageSize.height,ae=40,C={left:10,right:10,top:5,bottom:5},ie=await new Promise((a,l)=>{const c=new Image;c.src="https://i.ibb.co/1sFJ7dT/imgAzul.png",c.onload=()=>a(c),c.onerror=l}),Ze=ie.width/ie.height,Ke=u/4-C.left-C.right,W=Math.min(100,Ke),Ee=W/Ze,et=t.top+(ae-Ee)/2,tt=`PBX(601)7621133
CALLE 64 No. 11-37 LOC 301
EMAIL: MULTIDESTINOS_EXPRESS@YAHOO.COM`,Ne=`Numero de Liquidacion: ${E}`;e.addImage(ie,"PNG",t.left+C.left,et,W,Ee);const ot=u-t.left-t.right-W-C.left-C.right-10;e.setFontSize(10),e.text(e.splitTextToSize(tt,ot),t.left+W+C.left+C.right,t.top+10);const at=u-t.right-e.getTextWidth(Ne)-C.right;e.setFontSize(12),e.setFont("Helvetica-Bold",12),e.text(Ne,at,t.top+10),e.setDrawColor(0),e.rect(t.left,t.top,u-t.left-t.right,ae,"S"),e.setFontSize(10);const Ce=t.top+ae+10;e.setFontSize(10),e.text("SOLICITUD DE RESERVA:",t.left,Ce-4),e.setFontSize(8);const ne=["FECHA SOLICITUD:","AGENCIA:","TEL\xC9FONO:","CONTACTO:","NIT:","VENDEDOR:"],xe=[new Date(o.fechaCreacion).toLocaleDateString(),o.cliente.toString(),p.telefono?p.telefono.toString():"N/A",p.nit?p.nit.toString():"N/A",p.nit?p.nit.toString():"N/A",j.data.nombreCompleto?j.data.nombreCompleto.toString():"N/A"],be=6,Te=(u-t.left-t.right)/be;let D=t.left,i=Ce;for(let a=0;a<ne.length;a++){e.text(ne[a],D,i);const l=xe[a]!==void 0?xe[a]:"N/A",c=e.splitTextToSize(l,Te-2);e.text(c,D,i+5),D+=Te,((a+1)%be===0||a===ne.length-1)&&(i+=15,D=t.left)}const nt=it(y),Ie=["NOCHES:","HOTEL:","PLAN:","DESTINO:","DIRECCION:","ACOMODACI\xD3N:"],le=[o.noches?o.noches.toString():"N/A",o.hotel?o.hotel.toString():"N/A",o.plan?o.plan.toString():"N/A",o.destino?o.destino.toString():"N/A",o.direccion?o.direccion.toString():"N/A",nt.toString()];console.log("campso2",le);const lt=6,De=(u-t.left-t.right)/lt;i+=1;for(let a=0;a<Ie.length;a++){e.text(Ie[a],D,i);const l=le[a]!==void 0?le[a]:"N/A",c=e.splitTextToSize(l,De-2);e.text(c,D,i+5),D+=De}i+=1,e.setFontSize(10),e.text("PASAJEROS: ",t.left,i+12),i+=20;const Le=["NOMBRE","DOCUMENTO","F. NACIMIENTO","EDAD"],Oe=he.map(a=>{const l=new Date(a.fechaNacimiento),c=new Date;let h=c.getFullYear()-l.getFullYear();const x=c.getMonth()-l.getMonth();return(x<0||x===0&&c.getDate()<l.getDate())&&h--,[a.nombre,a.numeroDocumento,l.toLocaleDateString(),h]}),Pe=(u-t.left-t.right)/Le.length,st=u-t.left-t.right,ze=10+8*Oe.length;e.rect(t.left,i,st,ze,"S"),e.setFontSize(8),Le.forEach((a,l)=>{e.text(a,t.left+5+l*Pe,i+5)}),i+=10,Oe.forEach((a,l)=>{a.forEach((c,h)=>{e.text(c.toString(),t.left+5+h*Pe,i+l*8)})}),i+=ze-15,i+=1,e.setFontSize(10),e.text("ITINERARIO: ",t.left,i+12),i+=20;const Re=["AEROLINEA","VUELO","FECHA","RUTA","CLASE","HR SALIDA","HR LLEGADA","RECORD"],w=[[o.aerolineaIda||"N/A",o.vueloIda||"N/A",o.fechaInicio?new Date(new Date(o.fechaInicio).getTime()+new Date(o.fechaInicio).getTimezoneOffset()*6e4).toLocaleDateString():"N/A",o.ruta1||"N/A",o.claseIda||"N/A",o.horaSalidaIda||"N/A",o.horaLlegadaIda||"N/A",o.recordIda||"N/A"]];o.aerolineaEscalaIda!=null&&(w.push([o.aerolineaEscalaIda||"N/A",o.vueloEscalaIda||"N/A",o.fechaInicio?new Date(new Date(o.fechaInicio).getTime()+new Date(o.fechaInicio).getTimezoneOffset()*6e4).toLocaleDateString():"N/A","Escala Ida",o.claseEscalaIda||"N/A",o.horaSalidaEscalaIda||"N/A",o.horaLlegadaEscalaIda||"N/A",""]),w.push([o.aerolineaEscalaVuelta||"N/A",o.vueloEscalaVuelta||"N/A",o.fechaFin?new Date(new Date(o.fechaFin).getTime()+new Date(o.fechaFin).getTimezoneOffset()*6e4).toLocaleDateString():"N/A","Escala Vuelta",o.claseEscalaVuelta||"N/A",o.horaSalidaEscalaVuelta||"N/A",o.horaLlegadaEscalaVuelta||"N/A",""])),w.push([o.aerolineaVuelta||"N/A",o.vueloVuelta||"N/A",o.fechaFin?new Date(new Date(o.fechaFin).getTime()+new Date(o.fechaFin).getTimezoneOffset()*6e4).toLocaleDateString():"N/A",o.ruta2||"N/A",o.claseVuelta||"N/A",o.horaSalidaVuelta||"N/A",o.horaLlegadaVuelta||"N/A",o.recordVuelta||"N/A"]);const Fe=(u-t.left-t.right)/Re.length,rt=u-t.left-t.right,ve=10+8*w.length;e.rect(t.left,i,rt,ve,"S"),e.setFontSize(8),Re.forEach((a,l)=>{e.text(a,t.left+l*Fe,i+5)}),i+=10,w.forEach((a,l)=>{a.forEach((c,h)=>{e.text(c,t.left+h*Fe,i+l*8)})}),i+=ve-8;let A;const ct="Esta cotizaci\xF3n est\xE1 sujeta a cambio y disponibilidad al momento de reservar (Sin servicio confirmado)",U=i,we=30;e.setDrawColor(0),e.rect(t.left,U,u-t.left-t.right,we),e.setFontSize(12),e.text("OBSERVACIONES:",t.left+2,U+6),e.setFontSize(10),e.text(ct,t.left+2,U+15,{maxWidth:u-t.left-t.right-4}),i=U+we;const _=i+10;e.setFontSize(8);const dt=`El pago de su plan se realizar\xE1 conforme a las siguientes condiciones:

Planes con inicio dentro de los 30 d\xEDas:  El pago total deber\xE1 efectuarse dentro de un d\xEDa h\xE1bil a partir de la fecha de env\xEDo de este documento.
Planes con inicio posterior a los 30 d\xEDas: El pago se realizar\xE1 en dos cuotas:
  * Primera cuota: 50% del valor total del plan, pagadero dentro de un d\xEDa h\xE1bil a partir de la fecha de env\xEDo de este documento.
  * Segunda cuota: 50% restante del valor total del plan, pagadero 30 d\xEDas antes de la fecha de inicio del plan.`,Ve=e.splitTextToSize(dt,u-t.left-t.right-4);let $=18;Ve.forEach(a=>{$+=e.getTextDimensions(a,{fontSize:8}).h}),i=P(e,i,$),e.setDrawColor(0),e.rect(t.left,_,u-t.left-t.right,$),e.setFontSize(12),e.text("PLAZO DE PAGO:",t.left+2,_+6),e.setFontSize(8),A=_+15,Ve.forEach(a=>{e.text(a,t.left+2,A,{maxWidth:u-t.left-t.right-4}),A+=e.getTextDimensions(a,{fontSize:8}).h}),i=_+$;let Me=!1;e.setFontSize(8);const He=Je.split("\xBF");let se=[];He.forEach(a=>{const l=e.splitTextToSize(a,u-t.left-t.right-4);se=se.concat(l)});let V=18;He.forEach(a=>{const l=e.splitTextToSize(a,u-t.left-t.right-4);for(let c=0;c<l.length;c++){const h=l[c];V+=e.getTextDimensions(h,{fontSize:8}).h,!h.endsWith(`
`)&&c<l.length-1&&(V+=e.getTextDimensions(" ",{fontSize:8}).h)}}),i=P(e,i,V),i===t.top&&(Me=!0);const Y=i+10;e.setDrawColor(0),e.rect(t.left,Y,u-t.left-t.right,V),e.setFontSize(12),e.text("INCLUYE:",t.left+2,Y+6),e.setFontSize(8),A=Y+15,se.forEach(a=>{e.text(a,t.left+2,A,{maxWidth:u-t.left-t.right-4}),A+=e.getTextDimensions(a,{fontSize:8}).h}),i=Y+V;const qe=Xe.split("\xBF");let re=[];qe.forEach(a=>{const l=e.splitTextToSize(a,u-t.left-t.right-4);re=re.concat(l)});let M=18;qe.forEach(a=>{const l=e.splitTextToSize(a,u-t.left-t.right-4);for(let c=0;c<l.length;c++){const h=l[c];M+=e.getTextDimensions(h,{fontSize:8}).h,!h.endsWith(`
`)&&c<l.length-1&&(M+=e.getTextDimensions(" ",{fontSize:8}).h)}}),i=P(e,i,M),Me||(i=t.top);const k=i+10;e.setDrawColor(0),e.rect(t.left,k,u-t.left-t.right,M),e.setFontSize(12),e.text("NO INCLUYE:",t.left+2,k+6),e.setFontSize(8),A=k+15,re.forEach(a=>{e.text(a,t.left+2,A,{maxWidth:u-t.left-t.right-4}),A+=e.getTextDimensions(a,{fontSize:8}).h}),i=k+M,e.addPage(),i=t.top,e.setFontSize(10),e.text("LIQUIDACI\xD3N:",t.left,i),i+=5;const Q=i+5,d=2,s=6,f=(u-t.left-t.right)/6;e.setDrawColor(0);let Be=0;e.setFontSize(7);let R=0;y.forEach(a=>{const l=Q+R*s;L(l);const c=`Valor adul ${a.acomodacion}`;e.text(c,t.left+d,l+s/2,{baseline:"middle"});const h=Math.round(a.precioComisionableAdulto);e.text(h.toString(),t.left+f+d,l+s/2,{baseline:"middle"});const x=a.adultos;e.text(x.toString(),t.left+2*f+d,l+s/2,{baseline:"middle"});const b=Math.round(a.precioComisionableAdulto*a.adultos);if(e.text(b.toString(),t.left+3*f+d,l+s/2,{baseline:"middle"}),R===0){e.setFontSize(6);const O=pe==="Comisi\xF3n"?"BASE COMISI\xD3N":"BASE DE DESCUENTO";e.text(O,t.left+4*f+d,l+s/2,{baseline:"middle"}),e.setFontSize(7)}let F=b;if(a.ni\u00F1os>0&&(F+=Math.round(a.precioComisionableNino*a.ni\u00F1os)),Be+=F,R++,a.ni\u00F1os>0){const O=Q+R*s;L(O);const K=`Valor child ${a.acomodacion}`;e.text(K,t.left+d,O+s/2,{baseline:"middle"});const ee=Math.round(a.precioComisionableNino);e.text(ee.toString(),t.left+f+d,O+s/2,{baseline:"middle"});const B=a.ni\u00F1os;e.text(B.toString(),t.left+2*f+d,O+s/2,{baseline:"middle"});const v=Math.round(a.precioComisionableNino*a.ni\u00F1os);e.text(v.toString(),t.left+3*f+d,O+s/2,{baseline:"middle"}),R++}}),e.text(Be.toString(),t.left+5*f+d,Q+s/2,{baseline:"middle"}),i=Q+R*s+10;const H=["TRANSPORTE NO COMI","Q","YS","CO","TA","YS TA","defensaCivil","alcaldiaNacional","alcaldiaExtranjero","pqsNaturalesExtranjero","pqsNaturales25a65","pqsNaturales5a24","cormacarenaExtranjero","cormacarena5a11","cormacarena12a65"],G=[o.otros,o.combus,o.iva,o.tasa,o.ta,o.ivaTa,z.defensaCivil_Total,z.alcaldiaNacional_Total,z.alcaldiaExtranjero_Total,z.pqsNaturalesExtranjero_Total,z.pqsNaturales25a65_Total,z.pqsNaturales5a24_Total,z.cormacarenaExtranjero_Total,z.cormacarena5a11_Total,z.cormacarena12a65_Total,o.precioTrans],_e=["alcaldiaNacional","alcaldiaExtranjero","pqsNaturalesExtranjero","pqsNaturales25a65","pqsNaturales5a24","cormacarenaExtranjero","cormacarena5a11","cormacarena12a65"],ut={defensaCivil:"Defensa Civil",alcaldiaNacional:"Alcald\xEDa Nacional",alcaldiaExtranjero:"Alcald\xEDa Extranjero",pqsNaturalesExtranjero:"PQS. Naturales Extranjero",pqsNaturales25a65:"PQS. Naturales 25 a 65",pqsNaturales5a24:"PQS. Naturales 5 a 24",cormacarenaExtranjero:"Cormacarena Extranjero",cormacarena5a11:"Cormacarena 5 a 11",cormacarena12a65:"Cormacarena 12 a 65"};if(o.suplemento>0&&(H.push("SUPLEMENTO"),G.push(o.suplemento)),o.extra1)if(o.extra1.includes("*")){let a=o.extra1.split("*"),l=a[0],c=a[1];H.push("Valor Extra","Valor Extra2"),G.push(l,c)}else{let a=o.extra1;H.push("Valor Extra"),G.push(a)}H.forEach((a,l)=>{const c=i+l*s;L(c);const h=ut[a]||a;e.text(h,t.left+d,c+s/2,{baseline:"middle"});const x=o.totalPasajeros,b=G[l]||0;let F="";if(_e.includes(a)){const B=`${a}_numeroPersonas`,v=z[B]||0;F=v!==0?Math.trunc(b/v):""}else F=x!==0?Math.trunc(b/x):"";e.text(F.toString(),t.left+f+d,c+s/2,{baseline:"middle"});const O=x!==0?Math.trunc(x).toString():"";let K="";if(_e.includes(a)){const B=`${a}_numeroPersonas`;K=z[B]||""}else K=O;e.text(K,t.left+2*f+d,c+s/2,{baseline:"middle"});const ee=b!==0?Math.trunc(b).toString():"";if(e.text(ee,t.left+3*f+d,c+s/2,{baseline:"middle"}),a==="Q"){e.text("Porcentaje",t.left+4*f+d,c+s/2,{baseline:"middle"});const B=o.clientePorcentaje||0,v=Math.trunc(B).toString()+"%";e.text(v,t.left+5*f+d,c+s/2,{baseline:"middle"})}else if(a==="YS"){e.text("Valor Descuento",t.left+4*f+d,c+s/2,{baseline:"middle"});const B=o.valorDescuento||0,v=Math.trunc(B).toString();e.text(v,t.left+5*f+d,c+s/2,{baseline:"middle"}),pe==="Comisi\xF3n"&&[{label:`IVA(${p.porcentajeIva}%) (-)`,value:o.ivaValor},{label:`RTE FUENTE(${p.rteFuente}%) (+)`,value:o.rteFuente},{label:`RTE ICA(${p.rteIca}%) (+)`,value:o.rteIca},{label:"Total Comisi\xF3n",value:o.totalComision}].forEach((gt,bt)=>{const ft=c+(bt+1)*s;L(ft),e.text(gt.label,t.left+4*f+d,ft+s/2,{baseline:"middle"}),e.text(gt.value.toString(),t.left+5*f+d,ft+s/2,{baseline:"middle"})})}}),i+=H.length*s,y.forEach(a=>{if(a.adultos>0){const l=i;L(l),e.text(`Valor total Adt ${a.acomodacion}`,t.left+d,l+s/2,{baseline:"middle"});const c=a.precioHabitacionAdulto||0,h=te(c).format("$0,0");e.text(h,t.left+3*f+d,l+s/2,{baseline:"middle"}),i+=s}if(a.ni\u00F1os>0){const l=i;L(l),e.text(`Valor total Chd ${a.acomodacion}`,t.left+d,l+s/2,{baseline:"middle"});const c=a.precioHabitacionNino||0,h=te(c).format("$0,0");e.text(h,t.left+3*f+d,l+s/2,{baseline:"middle"}),i+=s}}),e.setFontSize(8),i+=s,L(i),e.text("Valor total",t.left+d,i+s/2,{baseline:"middle"});const $e=o.precioBrutoTotal||0,Ye=te($e).format("$0,0");e.text(Ye,t.left+3*f+d,i+s/2,{baseline:"middle"}),e.text("Precio a pagar",t.left+4*f+d,i+s/2-2,{baseline:"middle"}),e.text("a Multidestinos",t.left+4*f+d,i+s/2+2,{baseline:"middle"});const ke=parseFloat(o.suplemento)||0,Qe=parseFloat(o.totalPrecioCliente)||0,ce=ke>0?Qe+ke:Qe,de=te(ce).format("$0,0");e.text(de,t.left+5*f+d,i+s/2,{baseline:"middle"}),i+=s+10;const Z=t.left;let q=i+5;const ue=190;let me=30;e.setFontSize(7),e.setLineWidth(.5);const ye="PARA CONFIRMACIONES SE DEBE ENVIAR DEPOSITO DEL 50% DEL VALOR DEL PLAN Y EL SALDO 30 DIAS ANTES DE LA SALIDA, SI LA FECHA DE VIAJES CERCANA SE DEBE CANCELAR EL 100%. LOS SERVICIOS DEJADOS DE TOMAR NO SON REMBOLSABLES. LA CANCELACI\xD3N CON 18 DIAS ANTES DE VIAJE LA PENALIDAD SERA DEL 100% DEL VALOR DEL PLAN, LOS TIQUETES NO SON REEMBOLSABLE, NI ENDOSABLES, PENALIDAD POR CAMBIO (FECHA, NOMBRE, HORA, RUTAS) 200.000. ESTAS POLITICAS ESTAN PUBLICADAS DE MANERA CLARA Y ESPECIFICA EN NUESTRA PAGINA WWW.MULTIDESTINOSEXPRESS.COM. *TARIFAS SUJETA A CAMBIO Y DISPONIBILIDAD SIN PREVIO AVISO*",je=e.splitTextToSize(ye,ue-10);q+me>Ae-t.bottom&&(e.addPage(),i=t.top,q=i+5),e.text("Deposito y Condiciones de Pago",Z+5,q+3),e.setFontSize(6);const n=5;me=20+je.length*n,e.rect(Z,q,ue,me),je.forEach((a,l)=>{e.text(a,Z+5,q+10+l*n)}),oe[0].facturaPara&&(i=q+10+je.length*n,e.setFontSize(8),e.text("FACTURA A NOMBRE DE:",Z+5,i),i+=n,e.text(oe[0].facturaPara,Z+5,i)),i+=me+5;const r=e.output("blob");return e.save(`cotizacion_${m}.pdf`),r}catch(P){console.error("Error al descargar cotizaci\xF3n:",P)}}},async mounted(){try{const m=await N.get("https://backmultidestinos.onrender.com/liquidacion");this.rows=m.data}catch(m){console.error("Error al obtener las liquidaciones:",m)}}},Ht={class:"row q-col-gutter-md"},qt={class:"col-12"},Bt=fe("div",{class:"text-h6"},"Liquidaciones",-1),yt={class:"row"},jt={class:"col-6"},Wt={class:"col-6"},Ut=fe("div",{class:"text-h6"},"Factura a otro nombre",-1);function _t(m,E,P,J,I,X){return Dt(),Lt(Ot,{padding:""},{default:T(()=>[fe("div",Ht,[fe("div",qt,[S(Et,null,{default:T(()=>[S(We,null,{default:T(()=>[Bt]),_:1}),S(We,null,{default:T(()=>[fe("div",yt,[fe("div",jt,[S(pt,{modelValue:I.filterId,"onUpdate:modelValue":E[0]||(E[0]=g=>I.filterId=g),label:"Filtrar por ID de Cotizaci\xF3n",filled:"",dense:"",clearable:""},null,8,["modelValue"])]),fe("div",Wt,[S(Pt,{modelValue:I.filterStatus,"onUpdate:modelValue":E[1]||(E[1]=g=>I.filterStatus=g),options:I.statusOptions,label:"Filtrar por Status",filled:"",dense:"",clearable:"","emit-value":"","map-options":""},null,8,["modelValue","options"])])])]),_:1}),S(We,null,{default:T(()=>[S(zt,{title:"Lista de Liquidaciones",rows:X.filteredRows,columns:I.columns,"row-key":"id"},{"body-cell-tieneImpuestos":T(g=>[S(mt,{props:g},{default:T(()=>[St(At(g.row.impuestosLiq==="1"?"S\xED":"No"),1)]),_:2},1032,["props"])]),"body-cell-status":T(g=>[S(mt,{props:g},{default:T(()=>[S(Rt,{color:X.chipColor(g.row.status),"text-color":"white"},{default:T(()=>[St(At(g.row.status),1)]),_:2},1032,["color"])]),_:2},1032,["props"])]),"body-cell-acciones":T(g=>[S(mt,{props:g},{default:T(()=>[S(ht,{onClick:Ue=>X.mostrarDialogoFactura(g.row),color:"primary",label:"Descargar Liquidacion"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})])]),S(wt,{modelValue:I.mostrarDialogo,"onUpdate:modelValue":E[3]||(E[3]=g=>I.mostrarDialogo=g)},{default:T(()=>[S(Et,null,{default:T(()=>[S(We,null,{default:T(()=>[Ut]),_:1}),S(We,{class:"q-pt-none"},{default:T(()=>[S(pt,{modelValue:I.nombreFactura,"onUpdate:modelValue":E[2]||(E[2]=g=>I.nombreFactura=g),label:"Nombre para la factura"},null,8,["modelValue"])]),_:1}),S(Ft,{align:"right"},{default:T(()=>[vt(S(ht,{flat:"",label:"Cancelar",color:"primary"},null,512),[[Vt]]),S(ht,{flat:"",label:"Aceptar",color:"primary",onClick:X.procesarDescarga},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Jt=Tt(Mt,[["render",_t]]);export{Jt as default};
