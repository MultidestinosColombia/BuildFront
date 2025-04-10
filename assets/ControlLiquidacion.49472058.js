import{c as P,a as x,h as y,d as k,a2 as U,a4 as s,a5 as b,a6 as e,au as q,a9 as d,a7 as l,av as w,aw as c,aY as m,a8 as S,ae as C,aD as R,N as E,ah as H,aa as p,bu as Q,ag as _,az as g,aE as f,aF as v,aH as L,aX as h,ak as j,al as B}from"./index.bd5cde0f.js";import{Q as N}from"./QSpace.53b2fd44.js";import{Q as z}from"./QToolbar.fb7678e0.js";import{a as u}from"./axios.37d53be1.js";import{S as A}from"./sweetalert2.esm.all.0f865825.js";var I=P({name:"QTr",props:{props:Object,noHover:Boolean},setup(n,{slots:t}){const r=x(()=>"q-tr"+(n.props===void 0||n.props.header===!0?"":" "+n.props.__trClass)+(n.noHover===!0?" q-tr--no-hover":""));return()=>y("tr",{class:r.value},k(t.default))}});const F={data(){return{loading:!1,file:null,showDialog:!1,status:"",rowsCostos:[],rowsCostos_Unicos:[],rowsNochesUno:[],rowsNochesDos:[],rowsNochesTres:[],rowsNochesCuatro:[],rowsNocheAdicionales:[],rowsreceptivo:[],rowsproveedores:[],columns:[{name:"pertenece",label:"Pertenece",align:"left",field:"pertenece",sortable:!0},{name:"destino",label:"Destino",align:"left",field:"destino",sortable:!0},{name:"hotel",label:"Hotel",align:"left",field:"hotel",sortable:!0},{name:"tipodehabitacion",label:"Tipo de Habitaci\xF3n",align:"left",field:"tipodehabitacion",sortable:!0},{name:"plan",label:"Plan",align:"left",field:"plan",sortable:!0},{name:"nombrePrograma",label:"Nombre Programa",align:"left",field:"nombrePrograma",sortable:!0},{name:"noches",label:"Noches",align:"left",field:"noches",sortable:!0},{name:"receptivo_id",label:"Receptivo_id",align:"center",field:"receptivo_id",sortable:!0},{name:"subtotal_sencilla",label:"Subtotal Sencilla",align:"center",field:"subtotal_sencilla",sortable:!0},{name:"subtotal_doble",label:"Subtotal Doble",align:"center",field:"subtotal_doble",sortable:!0},{name:"subtotal_triple",label:"Subtotal Triple",align:"center",field:"subtotal_triple",sortable:!0},{name:"subtotal_cuadruple",label:"Subtotal Cuadruple",align:"center",field:"subtotal_cuadruple",sortable:!0},{name:"subtotal_ni\xF1o",label:"Subtotal Ni\xF1o",align:"center",field:"subtotal_ni\xF1o",sortable:!0},{name:"Tarifa_aerea",label:"Tarifa A\xE9rea",align:"right",field:"Tarifa_aerea",sortable:!0},{name:"Tarjeta_asistencia",label:"Tarjeta Asistencia",align:"right",field:"Tarjeta_asistencia",sortable:!0},{name:"costos_sencilla",label:"Costos Sencilla",align:"right",field:"costos_sencilla",sortable:!0},{name:"costos_doble",label:"Costos Doble",align:"right",field:"costos_doble",sortable:!0},{name:"costos_triple",label:"Costos Triple",align:"right",field:"costos_triple",sortable:!0},{name:"costos_cuadruple",label:"Costos Cu\xE1druple",align:"right",field:"costos_cuadruple",sortable:!0},{name:"costos_ni\xF1o",label:"Costos Ni\xF1o",align:"right",field:"costos_ni\xF1o",sortable:!0},{name:"impuesto",label:"Impuesto",align:"right",field:"impuesto",sortable:!0},{name:"iva_sencilla",label:"IVA Sencilla",align:"right",field:"iva_sencilla",sortable:!0},{name:"iva_doble",label:"IVA Doble",align:"right",field:"iva_doble",sortable:!0},{name:"iva_triple",label:"IVA Triple",align:"right",field:"iva_triple",sortable:!0},{name:"iva_cuadruple",label:"IVA Cu\xE1druple",align:"right",field:"iva_cuadruple",sortable:!0},{name:"iva_ni\xF1o",label:"IVA Ni\xF1o",align:"right",field:"iva_ni\xF1o",sortable:!0},{name:"impoconsumo_sencilla",label:"Impoconsumo Sencilla",align:"right",field:"impoconsumo_sencilla",sortable:!0},{name:"impoconsumo_doble",label:"Impoconsumo Doble",align:"right",field:"impoconsumo_doble",sortable:!0},{name:"impoconsumo_triple",label:"Impoconsumo Triple",align:"right",field:"impoconsumo_triple",sortable:!0},{name:"impoconsumo_cuadruple",label:"Impoconsumo Cu\xE1druple",align:"right",field:"impoconsumo_cuadruple",sortable:!0},{name:"impoconsumo_ni\xF1o",label:"Impoconsumo Ni\xF1o",align:"right",field:"impoconsumo_ni\xF1o",sortable:!0},{name:"ing_propio_sencilla",label:"Ingreso Propio Sencilla",align:"right",field:"ing_propio_sencilla",sortable:!0},{name:"ing_propio_doble",label:"Ingreso Propio Doble",align:"right",field:"ing_propio_doble",sortable:!0},{name:"ing_propio_triple",label:"Ingreso Propio Triple",align:"right",field:"ing_propio_triple",sortable:!0},{name:"ing_propio_cuadruple",label:"Ingreso Propio Cu\xE1druple",align:"right",field:"ing_propio_cuadruple",sortable:!0},{name:"ing_propio_ni\xF1o",label:"Ingreso Propio Ni\xF1o",align:"right",field:"ing_propio_ni\xF1o",sortable:!0},{name:"rentabilidad_sencilla",label:"Rentabilidad Sencilla",align:"right",field:"rentabilidad_sencilla",sortable:!0},{name:"rentabilidad_doble",label:"Rentabilidad Doble",align:"right",field:"rentabilidad_doble",sortable:!0},{name:"rentabilidad_triple",label:"Rentabilidad Triple",align:"right",field:"rentabilidad_triple",sortable:!0},{name:"rentabilidad_cuadruple",label:"Rentabilidad Cu\xE1druple",align:"right",field:"rentabilidad_cuadruple",sortable:!0},{name:"rentabilidad_ni\xF1o",label:"Rentabilidad Ni\xF1o",align:"right",field:"rentabilidad_ni\xF1o",sortable:!0},{name:"iva_ing_propio_sencilla",label:"IVA Ingreso Propio Sencilla",align:"right",field:"iva_ing_propio_sencilla",sortable:!0},{name:"iva_ing_propio_doble",label:"IVA Ingreso Propio Doble",align:"right",field:"iva_ing_propio_doble",sortable:!0},{name:"iva_ing_propio_triple",label:"IVA Ingreso Propio Triple",align:"right",field:"iva_ing_propio_triple",sortable:!0},{name:"iva_ing_propio_cuadruple",label:"IVA Ingreso Propio Cu\xE1druple",align:"right",field:"iva_ing_propio_cuadruple",sortable:!0},{name:"iva_ing_propio_ni\xF1o",label:"IVA Ingreso Propio Ni\xF1o",align:"right",field:"iva_ing_propio_ni\xF1o",sortable:!0},{name:"total_sgl",label:"Total Sgl",align:"right",field:"total_sgl",sortable:!0},{name:"total_dbl",label:"Total Dbl",align:"right",field:"total_dbl",sortable:!0},{name:"total_tpl",label:"Total Tpl",align:"right",field:"total_tpl",sortable:!0},{name:"total_cpl",label:"Total Cpl",align:"right",field:"total_cpl",sortable:!0},{name:"total_chd",label:"Total Chd",align:"right",field:"total_chd",sortable:!0}],columns_Costos_Unicos:[{name:"pertenece",label:"Pertenece",align:"left",field:"pertenece"},{name:"destino",label:"Destino",align:"left",field:"destino"},{name:"hotel",label:"Hotel",align:"center",field:"hotel"},{name:"tipo_habitacion",label:"Tipo de habitaci\xF3n",align:"center",field:"tipo_habitacion"},{name:"noches",label:"Noches",align:"center",field:"noches"},{name:"plan",label:"Plan",align:"center",field:"plan"},{name:"valor_sencilla",label:"Valor Sencilla",align:"center",field:"valor_sencilla"},{name:"valor_doble",label:"Valor Doble",align:"center",field:"valor_doble"},{name:"valor_triple",label:"Valor Triple",align:"center",field:"valor_triple"},{name:"valor_cuadruple",label:"Valor Cu\xE1druple",align:"center",field:"valor_cuadruple"},{name:"valor_ni\xF1o",label:"Valor Ni\xF1o",align:"center",field:"valor_ni\xF1o"},{name:"tiquetes_aereos",label:"Tiquetes A\xE9reos",align:"center",field:"tiquetes_aereos"},{name:"tarjetas_asistencia",label:"Tarjetas de Asistencia",align:"center",field:"tarjetas_asistencia"},{name:"costos_sencilla",label:"Costos Sencilla",align:"center",field:"costos_sencilla"},{name:"costos_doble",label:"Costos Doble",align:"center",field:"costos_doble"},{name:"costos_triple",label:"Costos Triple",align:"center",field:"costos_triple"},{name:"costos_cuadruple",label:"Costos Cu\xE1druple",align:"center",field:"costos_cuadruple"},{name:"costos_ni\xF1o",label:"Costos Ni\xF1o",align:"center",field:"costos_ni\xF1o"},{name:"impuesto",label:"Impuesto",align:"center",field:"impuesto"},{name:"iva_sencilla",label:"IVA Sencilla",align:"center",field:"iva_sencilla"},{name:"iva_doble",label:"IVA Doble",align:"center",field:"iva_doble"},{name:"iva_triple",label:"IVA Triple",align:"center",field:"iva_triple"},{name:"iva_cuadruple",label:"IVA Cu\xE1druple",align:"center",field:"iva_cuadruple"},{name:"iva_ni\xF1o",label:"IVA Ni\xF1o",align:"center",field:"iva_ni\xF1o"},{name:"impoconsumo_sencilla",label:"Impoconsumo Sencilla",align:"center",field:"impoconsumo_sencilla"},{name:"impoconsumo_doble",label:"Impoconsumo Doble",align:"center",field:"impoconsumo_doble"},{name:"impoconsumo_triple",label:"Impoconsumo Triple",align:"center",field:"impoconsumo_triple"},{name:"impoconsumo_cuadruple",label:"Impoconsumo Cu\xE1druple",align:"center",field:"impoconsumo_cuadruple"},{name:"impoconsumo_ni\xF1o",label:"Impoconsumo Ni\xF1o",align:"center",field:"impoconsumo_ni\xF1o"},{name:"ing_propio_sencilla",label:"Ingreso Propio Sencilla",align:"center",field:"ing_propio_sencilla"},{name:"ing_propio_doble",label:"Ingreso Propio Doble",align:"center",field:"ing_propio_doble"},{name:"ing_propio_triple",label:"Ingreso Propio Triple",align:"center",field:"ing_propio_triple"},{name:"ing_propio_cuadruple",label:"Ingreso Propio Cu\xE1druple",align:"center",field:"ing_propio_cuadruple"},{name:"ing_propio_ni\xF1o",label:"Ingreso Propio Ni\xF1o",align:"center",field:"ing_propio_ni\xF1o"},{name:"rentabilidad_sencilla",label:"Rentabilidad Sencilla",align:"center",field:"rentabilidad_sencilla"},{name:"rentabilidad_doble",label:"Rentabilidad Doble",align:"center",field:"rentabilidad_doble"},{name:"rentabilidad_triple",label:"Rentabilidad Triple",align:"center",field:"rentabilidad_triple"},{name:"rentabilidad_cuadruple",label:"Rentabilidad Cu\xE1druple",align:"center",field:"rentabilidad_cuadruple"},{name:"rentabilidad_ni\xF1o",label:"Rentabilidad Ni\xF1o",align:"center",field:"rentabilidad_ni\xF1o"},{name:"iva_ing_propio_sencilla",label:"IVA Ingreso Propio Sencilla",align:"center",field:"iva_ing_propio_sencilla"},{name:"iva_ing_propio_doble",label:"IVA Ingreso Propio Doble",align:"center",field:"iva_ing_propio_doble"},{name:"iva_ing_propio_triple",label:"IVA Ingreso Propio Triple",align:"center",field:"iva_ing_propio_triple"},{name:"iva_ing_propio_cuadruple",label:"IVA Ingreso Propio Cu\xE1druple",align:"center",field:"iva_ing_propio_cuadruple"},{name:"iva_ing_propio_ni\xF1o",label:"IVA Ingreso Propio Ni\xF1o",align:"center",field:"iva_ing_propio_ni\xF1o"},{name:"total",label:"Total",align:"center",field:"total"},{name:"total_2",label:"Total 2",align:"center",field:"total_2"}],columns_noche_1:[{name:"destino",label:"Destino",align:"left",field:"destino"},{name:"hotel",label:"Hotel",align:"left",field:"hotel"},{name:"tipodehabitacion",label:"Tipo de Habitaci\xF3n",align:"left",field:"tipodehabitacion"},{name:"sencilla",label:"Sencilla",align:"center",field:"sencilla"},{name:"doble",label:"Doble",align:"center",field:"doble"},{name:"triple",label:"Triple",align:"center",field:"triple"},{name:"cuadruple",label:"Cu\xE1druple",align:"center",field:"cuadruple"},{name:"ni\xF1o",label:"Ni\xF1o",align:"center",field:"ni\xF1o"},{name:"Subtotal_sencilla",label:"Subtotal Sencilla",align:"center",field:"Subtotal_sencilla"},{name:"Subtotal_doble",label:"Subtotal Doble",align:"center",field:"Subtotal_doble"},{name:"Subtotal_triple",label:"Subtotal Triple",align:"center",field:"Subtotal_triple"},{name:"Subtotal_cuadruple",label:"Subtotal Cu\xE1druple",align:"center",field:"Subtotal_cuadruple"},{name:"Subtotal_nino",label:"Subtotal Ni\xF1o",align:"center",field:"Subtotal_nino"},{name:"Imgreso_sencilla",label:"Ingreso Sencilla",align:"center",field:"Imgreso_sencilla"},{name:"Imgreso_doble",label:"Ingreso Doble",align:"center",field:"Imgreso_doble"},{name:"Imgreso_triple",label:"Ingreso Triple",align:"center",field:"Imgreso_triple"},{name:"Imgreso_cuadruple",label:"Ingreso Cu\xE1druple",align:"center",field:"Imgreso_cuadruple"},{name:"Imgreso_nino",label:"Ingreso Ni\xF1o",align:"center",field:"Imgreso_nino"},{name:"utilidad_sencilla",label:"Utilidad Sencilla",align:"center",field:"utilidad_sencilla"},{name:"utilidad_doble",label:"Utilidad Doble",align:"center",field:"utilidad_doble"},{name:"utilidad_triple",label:"Utilidad Triple",align:"center",field:"utilidad_triple"},{name:"utilidad_cuadruple",label:"Utilidad Cu\xE1druple",align:"center",field:"utilidad_cuadruple"},{name:"utilidad_nino",label:"Utilidad Ni\xF1o",align:"center",field:"utilidad_nino"},{name:"imptos_tkt",label:"Impuestos TKT",align:"center",field:"imptos_tkt"},{name:"iva_sgl",label:"IVA Sencilla",align:"center",field:"iva_sgl"},{name:"iva_db",label:"IVA Doble",align:"center",field:"iva_db"},{name:"iva_trp",label:"IVA Triple",align:"center",field:"iva_trp"},{name:"iva_cdp",label:"IVA Cu\xE1druple",align:"center",field:"iva_cdp"},{name:"iva_nino",label:"IVA Ni\xF1o",align:"center",field:"iva_nino"},{name:"iva_imgr_sgl",label:"IVA Ingreso Sencilla",align:"center",field:"iva_imgr_sgl"},{name:"iva_imgr_db",label:"IVA Ingreso Doble",align:"center",field:"iva_imgr_db"},{name:"iva_imgr_trp",label:"IVA Ingreso Triple",align:"center",field:"iva_imgr_trp"},{name:"iva_imgr_cdp",label:"IVA Ingreso Cu\xE1druple",align:"center",field:"iva_imgr_cdp"},{name:"iva_imgr_nino",label:"IVA Ingreso Ni\xF1o",align:"center",field:"iva_imgr_nino"},{name:"precio_venta_sencilla",label:"Precio Venta Sencilla",align:"center",field:"precio_venta_sencilla"},{name:"precio_venta_doble",label:"Precio Venta Doble",align:"center",field:"precio_venta_doble"},{name:"precio_venta_triple",label:"Precio Venta Triple",align:"center",field:"precio_venta_triple"},{name:"precio_venta_cuadruple",label:"Precio Venta Cu\xE1druple",align:"center",field:"precio_venta_cuadruple"},{name:"precio_venta_nino",label:"Precio Venta Ni\xF1o",align:"center",field:"precio_venta_nino"}],columns_noche_2:[{name:"destino",label:"Destino",align:"left",field:"destino"},{name:"hotel",label:"Hotel",align:"left",field:"hotel"},{name:"tipodehabitacion",label:"Tipo de Habitaci\xF3n",align:"left",field:"tipodehabitacion"},{name:"sencilla",label:"Sencilla",align:"center",field:"sencilla"},{name:"doble",label:"Doble",align:"center",field:"doble"},{name:"triple",label:"Triple",align:"center",field:"triple"},{name:"cuadruple",label:"Cu\xE1druple",align:"center",field:"cuadruple"},{name:"ni\xF1o",label:"Ni\xF1o",align:"center",field:"ni\xF1o"},{name:"Subtotal_sencilla",label:"Subtotal Sencilla",align:"center",field:"Subtotal_sencilla"},{name:"Subtotal_doble",label:"Subtotal Doble",align:"center",field:"Subtotal_doble"},{name:"Subtotal_triple",label:"Subtotal Triple",align:"center",field:"Subtotal_triple"},{name:"Subtotal_cuadruple",label:"Subtotal Cu\xE1druple",align:"center",field:"Subtotal_cuadruple"},{name:"Subtotal_nino",label:"Subtotal Ni\xF1o",align:"center",field:"Subtotal_nino"},{name:"Imgreso_sencilla",label:"Ingreso Sencilla",align:"center",field:"Imgreso_sencilla"},{name:"Imgreso_doble",label:"Ingreso Doble",align:"center",field:"Imgreso_doble"},{name:"Imgreso_triple",label:"Ingreso Triple",align:"center",field:"Imgreso_triple"},{name:"Imgreso_cuadruple",label:"Ingreso Cu\xE1druple",align:"center",field:"Imgreso_cuadruple"},{name:"Imgreso_nino",label:"Ingreso Ni\xF1o",align:"center",field:"Imgreso_nino"},{name:"utilidad_sencilla",label:"Utilidad Sencilla",align:"center",field:"utilidad_sencilla"},{name:"utilidad_doble",label:"Utilidad Doble",align:"center",field:"utilidad_doble"},{name:"utilidad_triple",label:"Utilidad Triple",align:"center",field:"utilidad_triple"},{name:"utilidad_cuadruple",label:"Utilidad Cu\xE1druple",align:"center",field:"utilidad_cuadruple"},{name:"utilidad_nino",label:"Utilidad Ni\xF1o",align:"center",field:"utilidad_nino"},{name:"imptos_tkt",label:"Impuestos TKT",align:"center",field:"imptos_tkt"},{name:"iva_sgl",label:"IVA Sencilla",align:"center",field:"iva_sgl"},{name:"iva_db",label:"IVA Doble",align:"center",field:"iva_db"},{name:"iva_trp",label:"IVA Triple",align:"center",field:"iva_trp"},{name:"iva_cdp",label:"IVA Cu\xE1druple",align:"center",field:"iva_cdp"},{name:"iva_nino",label:"IVA Ni\xF1o",align:"center",field:"iva_nino"},{name:"iva_imgr_sgl",label:"IVA Ingreso Sencilla",align:"center",field:"iva_imgr_sgl"},{name:"iva_imgr_db",label:"IVA Ingreso Doble",align:"center",field:"iva_imgr_db"},{name:"iva_imgr_trp",label:"IVA Ingreso Triple",align:"center",field:"iva_imgr_trp"},{name:"iva_imgr_cdp",label:"IVA Ingreso Cu\xE1druple",align:"center",field:"iva_imgr_cdp"},{name:"iva_imgr_nino",label:"IVA Ingreso Ni\xF1o",align:"center",field:"iva_imgr_nino"},{name:"precio_venta_sencilla",label:"Precio Venta Sencilla",align:"center",field:"precio_venta_sencilla"},{name:"precio_venta_doble",label:"Precio Venta Doble",align:"center",field:"precio_venta_doble"},{name:"precio_venta_triple",label:"Precio Venta Triple",align:"center",field:"precio_venta_triple"},{name:"precio_venta_cuadruple",label:"Precio Venta Cu\xE1druple",align:"center",field:"precio_venta_cuadruple"},{name:"precio_venta_nino",label:"Precio Venta Ni\xF1o",align:"center",field:"precio_venta_nino"}],columns_noche_3:[{name:"destino",label:"Destino",align:"left",field:"destino"},{name:"hotel",label:"Hotel",align:"left",field:"hotel"},{name:"tipodehabitacion",label:"Tipo de Habitaci\xF3n",align:"left",field:"tipodehabitacion"},{name:"sencilla",label:"Sencilla",align:"center",field:"sencilla"},{name:"doble",label:"Doble",align:"center",field:"doble"},{name:"triple",label:"Triple",align:"center",field:"triple"},{name:"cuadruple",label:"Cu\xE1druple",align:"center",field:"cuadruple"},{name:"ni\xF1o",label:"Ni\xF1o",align:"center",field:"ni\xF1o"},{name:"Subtotal_sencilla",label:"Subtotal Sencilla",align:"center",field:"Subtotal_sencilla"},{name:"Subtotal_doble",label:"Subtotal Doble",align:"center",field:"Subtotal_doble"},{name:"Subtotal_triple",label:"Subtotal Triple",align:"center",field:"Subtotal_triple"},{name:"Subtotal_cuadruple",label:"Subtotal Cu\xE1druple",align:"center",field:"Subtotal_cuadruple"},{name:"Subtotal_nino",label:"Subtotal Ni\xF1o",align:"center",field:"Subtotal_nino"},{name:"Imgreso_sencilla",label:"Ingreso Sencilla",align:"center",field:"Imgreso_sencilla"},{name:"Imgreso_doble",label:"Ingreso Doble",align:"center",field:"Imgreso_doble"},{name:"Imgreso_triple",label:"Ingreso Triple",align:"center",field:"Imgreso_triple"},{name:"Imgreso_cuadruple",label:"Ingreso Cu\xE1druple",align:"center",field:"Imgreso_cuadruple"},{name:"Imgreso_nino",label:"Ingreso Ni\xF1o",align:"center",field:"Imgreso_nino"},{name:"utilidad_sencilla",label:"Utilidad Sencilla",align:"center",field:"utilidad_sencilla"},{name:"utilidad_doble",label:"Utilidad Doble",align:"center",field:"utilidad_doble"},{name:"utilidad_triple",label:"Utilidad Triple",align:"center",field:"utilidad_triple"},{name:"utilidad_cuadruple",label:"Utilidad Cu\xE1druple",align:"center",field:"utilidad_cuadruple"},{name:"utilidad_nino",label:"Utilidad Ni\xF1o",align:"center",field:"utilidad_nino"},{name:"imptos_tkt",label:"Impuestos TKT",align:"center",field:"imptos_tkt"},{name:"iva_sgl",label:"IVA Sencilla",align:"center",field:"iva_sgl"},{name:"iva_db",label:"IVA Doble",align:"center",field:"iva_db"},{name:"iva_trp",label:"IVA Triple",align:"center",field:"iva_trp"},{name:"iva_cdp",label:"IVA Cu\xE1druple",align:"center",field:"iva_cdp"},{name:"iva_nino",label:"IVA Ni\xF1o",align:"center",field:"iva_nino"},{name:"iva_imgr_sgl",label:"IVA Ingreso Sencilla",align:"center",field:"iva_imgr_sgl"},{name:"iva_imgr_db",label:"IVA Ingreso Doble",align:"center",field:"iva_imgr_db"},{name:"iva_imgr_trp",label:"IVA Ingreso Triple",align:"center",field:"iva_imgr_trp"},{name:"iva_imgr_cdp",label:"IVA Ingreso Cu\xE1druple",align:"center",field:"iva_imgr_cdp"},{name:"iva_imgr_nino",label:"IVA Ingreso Ni\xF1o",align:"center",field:"iva_imgr_nino"},{name:"precio_venta_sencilla",label:"Precio Venta Sencilla",align:"center",field:"precio_venta_sencilla"},{name:"precio_venta_doble",label:"Precio Venta Doble",align:"center",field:"precio_venta_doble"},{name:"precio_venta_triple",label:"Precio Venta Triple",align:"center",field:"precio_venta_triple"},{name:"precio_venta_cuadruple",label:"Precio Venta Cu\xE1druple",align:"center",field:"precio_venta_cuadruple"},{name:"precio_venta_nino",label:"Precio Venta Ni\xF1o",align:"center",field:"precio_venta_nino"}],columns_noche_4:[{name:"destino",label:"Destino",align:"left",field:"destino"},{name:"hotel",label:"Hotel",align:"left",field:"hotel"},{name:"tipodehabitacion",label:"Tipo de Habitaci\xF3n",align:"left",field:"tipodehabitacion"},{name:"sencilla",label:"Sencilla",align:"center",field:"sencilla"},{name:"doble",label:"Doble",align:"center",field:"doble"},{name:"triple",label:"Triple",align:"center",field:"triple"},{name:"cuadruple",label:"Cu\xE1druple",align:"center",field:"cuadruple"},{name:"ni\xF1o",label:"Ni\xF1o",align:"center",field:"ni\xF1o"},{name:"Subtotal_sencilla",label:"Subtotal Sencilla",align:"center",field:"Subtotal_sencilla"},{name:"Subtotal_doble",label:"Subtotal Doble",align:"center",field:"Subtotal_doble"},{name:"Subtotal_triple",label:"Subtotal Triple",align:"center",field:"Subtotal_triple"},{name:"Subtotal_cuadruple",label:"Subtotal Cu\xE1druple",align:"center",field:"Subtotal_cuadruple"},{name:"Subtotal_nino",label:"Subtotal Ni\xF1o",align:"center",field:"Subtotal_nino"},{name:"Imgreso_sencilla",label:"Ingreso Sencilla",align:"center",field:"Imgreso_sencilla"},{name:"Imgreso_doble",label:"Ingreso Doble",align:"center",field:"Imgreso_doble"},{name:"Imgreso_triple",label:"Ingreso Triple",align:"center",field:"Imgreso_triple"},{name:"Imgreso_cuadruple",label:"Ingreso Cu\xE1druple",align:"center",field:"Imgreso_cuadruple"},{name:"Imgreso_nino",label:"Ingreso Ni\xF1o",align:"center",field:"Imgreso_nino"},{name:"utilidad_sencilla",label:"Utilidad Sencilla",align:"center",field:"utilidad_sencilla"},{name:"utilidad_doble",label:"Utilidad Doble",align:"center",field:"utilidad_doble"},{name:"utilidad_triple",label:"Utilidad Triple",align:"center",field:"utilidad_triple"},{name:"utilidad_cuadruple",label:"Utilidad Cu\xE1druple",align:"center",field:"utilidad_cuadruple"},{name:"utilidad_nino",label:"Utilidad Ni\xF1o",align:"center",field:"utilidad_nino"},{name:"imptos_tkt",label:"Impuestos TKT",align:"center",field:"imptos_tkt"},{name:"iva_sgl",label:"IVA Sencilla",align:"center",field:"iva_sgl"},{name:"iva_db",label:"IVA Doble",align:"center",field:"iva_db"},{name:"iva_trp",label:"IVA Triple",align:"center",field:"iva_trp"},{name:"iva_cdp",label:"IVA Cu\xE1druple",align:"center",field:"iva_cdp"},{name:"iva_nino",label:"IVA Ni\xF1o",align:"center",field:"iva_nino"},{name:"iva_imgr_sgl",label:"IVA Ingreso Sencilla",align:"center",field:"iva_imgr_sgl"},{name:"iva_imgr_db",label:"IVA Ingreso Doble",align:"center",field:"iva_imgr_db"},{name:"iva_imgr_trp",label:"IVA Ingreso Triple",align:"center",field:"iva_imgr_trp"},{name:"iva_imgr_cdp",label:"IVA Ingreso Cu\xE1druple",align:"center",field:"iva_imgr_cdp"},{name:"iva_imgr_nino",label:"IVA Ingreso Ni\xF1o",align:"center",field:"iva_imgr_nino"},{name:"precio_venta_sencilla",label:"Precio Venta Sencilla",align:"center",field:"precio_venta_sencilla"},{name:"precio_venta_doble",label:"Precio Venta Doble",align:"center",field:"precio_venta_doble"},{name:"precio_venta_triple",label:"Precio Venta Triple",align:"center",field:"precio_venta_triple"},{name:"precio_venta_cuadruple",label:"Precio Venta Cu\xE1druple",align:"center",field:"precio_venta_cuadruple"},{name:"precio_venta_nino",label:"Precio Venta Ni\xF1o",align:"center",field:"precio_venta_nino"}],columns_noche_5:[{name:"destino",label:"Destino",align:"left",field:"destino"},{name:"hotel",label:"Hotel",align:"left",field:"hotel"},{name:"tipodehabitacion",label:"Tipo de Habitaci\xF3n",align:"left",field:"tipodehabitacion"},{name:"sencilla",label:"Sencilla",align:"center",field:"sencilla"},{name:"doble",label:"Doble",align:"center",field:"doble"},{name:"triple",label:"Triple",align:"center",field:"triple"},{name:"cuadruple",label:"Cu\xE1druple",align:"center",field:"cuadruple"},{name:"ni\xF1o",label:"Ni\xF1o",align:"center",field:"ni\xF1o"},{name:"Subtotal_sencilla",label:"Subtotal Sencilla",align:"center",field:"Subtotal_sencilla"},{name:"Subtotal_doble",label:"Subtotal Doble",align:"center",field:"Subtotal_doble"},{name:"Subtotal_triple",label:"Subtotal Triple",align:"center",field:"Subtotal_triple"},{name:"Subtotal_cuadruple",label:"Subtotal Cu\xE1druple",align:"center",field:"Subtotal_cuadruple"},{name:"Subtotal_nino",label:"Subtotal Ni\xF1o",align:"center",field:"Subtotal_nino"},{name:"Imgreso_sencilla",label:"Ingreso Sencilla",align:"center",field:"Imgreso_sencilla"},{name:"Imgreso_doble",label:"Ingreso Doble",align:"center",field:"Imgreso_doble"},{name:"Imgreso_triple",label:"Ingreso Triple",align:"center",field:"Imgreso_triple"},{name:"Imgreso_cuadruple",label:"Ingreso Cu\xE1druple",align:"center",field:"Imgreso_cuadruple"},{name:"Imgreso_nino",label:"Ingreso Ni\xF1o",align:"center",field:"Imgreso_nino"},{name:"utilidad_sencilla",label:"Utilidad Sencilla",align:"center",field:"utilidad_sencilla"},{name:"utilidad_doble",label:"Utilidad Doble",align:"center",field:"utilidad_doble"},{name:"utilidad_triple",label:"Utilidad Triple",align:"center",field:"utilidad_triple"},{name:"utilidad_cuadruple",label:"Utilidad Cu\xE1druple",align:"center",field:"utilidad_cuadruple"},{name:"utilidad_nino",label:"Utilidad Ni\xF1o",align:"center",field:"utilidad_nino"},{name:"imptos_tkt",label:"Impuestos TKT",align:"center",field:"imptos_tkt"},{name:"iva_sgl",label:"IVA Sencilla",align:"center",field:"iva_sgl"},{name:"iva_db",label:"IVA Doble",align:"center",field:"iva_db"},{name:"iva_trp",label:"IVA Triple",align:"center",field:"iva_trp"},{name:"iva_cdp",label:"IVA Cu\xE1druple",align:"center",field:"iva_cdp"},{name:"iva_nino",label:"IVA Ni\xF1o",align:"center",field:"iva_nino"},{name:"iva_imgr_sgl",label:"IVA Ingreso Sencilla",align:"center",field:"iva_imgr_sgl"},{name:"iva_imgr_db",label:"IVA Ingreso Doble",align:"center",field:"iva_imgr_db"},{name:"iva_imgr_trp",label:"IVA Ingreso Triple",align:"center",field:"iva_imgr_trp"},{name:"iva_imgr_cdp",label:"IVA Ingreso Cu\xE1druple",align:"center",field:"iva_imgr_cdp"},{name:"iva_imgr_nino",label:"IVA Ingreso Ni\xF1o",align:"center",field:"iva_imgr_nino"},{name:"precio_venta_sencilla",label:"Precio Venta Sencilla",align:"center",field:"precio_venta_sencilla"},{name:"precio_venta_doble",label:"Precio Venta Doble",align:"center",field:"precio_venta_doble"},{name:"precio_venta_triple",label:"Precio Venta Triple",align:"center",field:"precio_venta_triple"},{name:"precio_venta_cuadruple",label:"Precio Venta Cu\xE1druple",align:"center",field:"precio_venta_cuadruple"},{name:"precio_venta_nino",label:"Precio Venta Ni\xF1o",align:"center",field:"precio_venta_nino"}],columns_Receptivos:[{name:"receptivos",label:"Receptivos",align:"left",field:"receptivos"},{name:"destino",label:"Destino",align:"left",field:"destino"},{name:"sencilla",label:"Sencilla",align:"center",field:"sencilla"},{name:"doble",label:"Doble",align:"center",field:"doble"},{name:"triple",label:"Triple",align:"center",field:"triple"},{name:"cuadruple",label:"Cu\xE1druple",align:"center",field:"cuadruple"},{name:"ni\xF1o",label:"Ni\xF1o",align:"center",field:"ni\xF1o"}],columns_Proveedores:[{name:"destino",label:"Destino",align:"left",field:"destino"},{name:"nombre",label:"Nombre",align:"left",field:"nombre"},{name:"nit",label:"Nit",align:"center",field:"nit"},{name:"rnt",label:"Rnt",align:"center",field:"rnt"},{name:"ciudad",label:"Ciudad",align:"center",field:"ciudad"},{name:"direccion",label:"Direccion",align:"center",field:"direccion"},{name:"correo",label:"Correo",align:"center",field:"correo"},{name:"telefono",label:"Telefono",align:"center",field:"telefono"},{name:"web",label:"Web",align:"center",field:"web"},{name:"tipo_servicio",label:"Tipo de servicio",align:"center",field:"tipo_servicio"},{name:"operador",label:"Operador",align:"center",field:"operador"},{name:"tipo_de_regimen",label:"Tipo de regimen",align:"center",field:"tipo_de_regimen"},{name:"representante_legal",label:"Representante legal",align:"center",field:"representante_legal"},{name:"Num_Registro_Camara_De_Comercio",label:"Numero de registro Mercantil",align:"center",field:"Num_Registro_Camara_De_Comercio"},{name:"certificacion_sostenibilidad",label:"Certificacion sostenibilidad",align:"center",field:"certificacion_sostenibilidad"}],filter:"",filterColumn:null,columnOptions:[],pagination:{rowsPerPage:10,sortBy:null,descending:!1,page:1}}},computed:{pagesNumber(){return Math.ceil(this.rowsproveedores.length/this.pagination.rowsPerPage)}},methods:{async fetchData(){this.loading=!0;try{const n="https://backmultidestinos.onrender.com/ControlLiquidacion",t=await Promise.all([u.get(`${n}/costos`).catch(r=>({data:[]})),u.get(`${n}/Costos_unico`).catch(r=>({data:[]})),u.get(`${n}/noches_uno`).catch(r=>({data:[]})),u.get(`${n}/noches_dos`).catch(r=>({data:[]})),u.get(`${n}/noches_tres`).catch(r=>({data:[]})),u.get(`${n}/noches_cuatro`).catch(r=>({data:[]})),u.get(`${n}/noche_adicionales`).catch(r=>({data:[]})),u.get(`${n}/receptivo`).catch(r=>({data:[]})),u.get(`${n}/proveedores`).catch(r=>({data:[]}))]);[this.rowsCostos,this.rowsCostos_Unicos,this.rowsNochesUno,this.rowsNochesDos,this.rowsNochesTres,this.rowsNochesCuatro,this.rowsNocheAdicionales,this.rowsreceptivo,this.rowsproveedores]=t.map(r=>r.data)}catch(n){console.error("Error obteniendo datos:",n),this.rowsCostos=[],this.rowsCostos_Unicos=[],this.rowsNochesUno=[],this.rowsNochesDos=[],this.rowsNochesTres=[],this.rowsNochesCuatro=[],this.rowsNocheAdicionales=[],this.rowsreceptivo=[],this.rowsproveedores=[]}finally{this.loading=!1}},async descargarExcel(){try{const n=await u.get("https://backmultidestinos.onrender.com/ControlLiquidacion/descargar-excel",{responseType:"blob"}),t=window.URL.createObjectURL(new Blob([n.data])),r=document.createElement("a");r.href=t,r.setAttribute("download","costos.xlsx"),document.body.appendChild(r),r.click()}catch(n){console.error("Error al descargar Excel:",n)}},async subirExcel(){if(!this.file){alert("Selecciona un archivo Excel");return}const n=new FormData;n.append("file",this.file);try{const t=await u.post("https://backmultidestinos.onrender.com/ControlLiquidacion/subir-excel",n,{headers:{"Content-Type":"multipart/form-data"}});console.log("\u2705 Archivo subido correctamente:",t),A.fire({title:"\xA1\xC9xito!",text:"Archivo subido exitosamente",icon:"success",confirmButtonText:"Aceptar",timer:3e3,timerProgressBar:!0}),this.showDialog=!1,this.file=null,this.fetchData()}catch(t){console.error("\u274C Error al subir Excel:",t),A.fire({title:"Error",text:"No se pudo subir el archivo. Int\xE9ntalo nuevamente.",icon:"error",confirmButtonText:"Aceptar",timer:3e3,timerProgressBar:!0})}},filterTable(n,t,r){return t?n.filter(T=>this.filterColumn?(T[this.filterColumn.value]||"").toString().toLowerCase().includes(t.toLowerCase()):Object.values(T).some(i=>i&&i.toString().toLowerCase().includes(t.toLowerCase()))):n}},created(){this.columnOptions=this.columns_Proveedores.map(n=>({label:n.label,value:n.field}))},mounted(){this.fetchData()}},V=n=>(j("data-v-53f8d0f0"),n=n(),B(),n),O={class:"container"},K={class:"row justify-center"},M=V(()=>d("span",{class:"custom-text"},"Manejo de costos",-1)),W={class:"row"},X=V(()=>d("span",{class:"text-weight-bold"},"Cargar Nuevo Excel",-1)),Y={class:"row items-center"},G=V(()=>d("div",{class:"text-subtitle1"},"Subir Archivo Excel",-1)),J=V(()=>d("div",{class:"text-body2 text-blue-9 q-mb-lg"}," Selecciona tu archivo Excel para comenzar ",-1)),Z={class:"row items-center justify-center"},$={class:"text-primary"},ee=V(()=>d("div",{class:"text-caption text-primary text-center q-mt-sm"}," Formatos soportados: .xlsx, .xls ",-1)),le={class:"row"},ae={class:"row"},ie={class:"row"},ne={class:"row"},oe={class:"row"},te={class:"row"};function re(n,t,r,T,i,D){return s(),b(q,{class:"flex flex-center"},{default:e(()=>[d("div",O,[d("div",K,[l(c,{class:"box small custom-card"},{default:e(()=>[l(w,null,{default:e(()=>[M]),_:1})]),_:1})]),d("div",W,[l(c,{class:"box full"},{default:e(()=>[l(m,{flat:"",bordered:"",title:"Listado de Costos",rows:i.rowsCostos.slice(0,10),columns:i.columns,"row-key":"id",dense:"",loading:i.loading,class:"custom-table"},{"top-right":e(()=>[l(S,{color:"primary",label:"Recargar Datos",icon:"refresh",unelevated:"",onClick:D.fetchData,class:"q-mr-md"},null,8,["onClick"]),d("div",null,[l(S,{unelevated:"",class:"gradient-btn q-mr-md",onClick:t[0]||(t[0]=a=>i.showDialog=!0)},{default:e(()=>[l(C,{name:"add",size:"sm",class:"q-mr-sm"}),X]),_:1}),l(R,{modelValue:i.showDialog,"onUpdate:modelValue":t[3]||(t[3]=a=>i.showDialog=a)},{default:e(()=>[l(c,{class:"dialog-card"},{default:e(()=>[l(w,{class:"row items-center q-pb-sm"},{default:e(()=>[d("div",Y,[l(C,{name:"description",color:"green",size:"sm",class:"q-mr-sm"}),G]),l(N),E(l(S,{icon:"close",flat:"",round:"",dense:""},null,512),[[L]])]),_:1}),l(H,{class:"separator"}),l(w,{class:"q-pa-md"},{default:e(()=>[l(c,{class:"inner-card"},{default:e(()=>[l(w,null,{default:e(()=>[J,d("div",{class:"upload-area q-pa-md q-mb-lg cursor-pointer text-center",onClick:t[1]||(t[1]=(...a)=>n.$refs.fileInput.pickFiles&&n.$refs.fileInput.pickFiles(...a))},[d("div",Z,[l(C,{name:"upload_file",color:"primary",size:"sm",class:"q-mr-sm"}),d("span",$,p(i.file?i.file.name:"Arrastra o selecciona tu archivo Excel"),1)])]),l(Q,{ref:"fileInput",modelValue:i.file,"onUpdate:modelValue":t[2]||(t[2]=a=>i.file=a),label:"Subir Excel",accept:".xlsx,.xls",class:"hidden"},null,8,["modelValue"]),l(z,null,{default:e(()=>[l(S,{unelevated:"",color:"green",class:"full-width",disable:!i.file,onClick:D.subirExcel},{default:e(()=>[l(C,{name:"upload",size:"sm",class:"q-mr-sm"}),_(" Subir Archivo ")]),_:1},8,["disable","onClick"]),l(N),l(S,{unelevated:"",color:"primary",class:"full-width",onClick:D.descargarExcel},{default:e(()=>[l(C,{name:"download",size:"sm",class:"q-mr-sm"}),_(" Descargar Excel ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),ee]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),body:e(a=>[l(I,{props:a,class:"hover-effect"},{default:e(()=>[(s(!0),g(v,null,f(a.cols,o=>(s(),b(h,{key:o.name,props:a},{default:e(()=>[_(p(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),d("div",le,[l(c,{class:"box full"},{default:e(()=>[l(m,{flat:"",bordered:"",title:"Costos Unicos",rows:i.rowsCostos_Unicos.slice(0,10),columns:i.columns_Costos_Unicos,"row-key":"id",dense:"",loading:i.loading,class:"custom-table"},{body:e(a=>[l(I,{props:a,class:"hover-effect"},{default:e(()=>[(s(!0),g(v,null,f(a.cols,o=>(s(),b(h,{key:o.name,props:a},{default:e(()=>[_(p(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),d("div",ae,[l(c,{class:"box medium"},{default:e(()=>[l(m,{flat:"",bordered:"",title:"Costos De Una Noche",rows:i.rowsNochesUno.slice(0,10),columns:i.columns_noche_1,"row-key":"id",dense:"",loading:i.loading,class:"custom-table"},{body:e(a=>[l(I,{props:a,class:"hover-effect"},{default:e(()=>[(s(!0),g(v,null,f(a.cols,o=>(s(),b(h,{key:o.name,props:a},{default:e(()=>[_(p(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1}),l(c,{class:"box medium"},{default:e(()=>[l(m,{flat:"",bordered:"",title:"Costos De Dos Noches",rows:i.rowsNochesDos.slice(0,10),columns:i.columns_noche_2,"row-key":"id",dense:"",loading:i.loading,class:"custom-table"},{body:e(a=>[l(I,{props:a,class:"hover-effect"},{default:e(()=>[(s(!0),g(v,null,f(a.cols,o=>(s(),b(h,{key:o.name,props:a},{default:e(()=>[_(p(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),d("div",ie,[l(c,{class:"box medium"},{default:e(()=>[l(m,{flat:"",bordered:"",title:"Costos De Tres Noches",rows:i.rowsNochesTres.slice(0,10),columns:i.columns_noche_3,"row-key":"id",dense:"",loading:i.loading,class:"custom-table"},{body:e(a=>[l(I,{props:a,class:"hover-effect"},{default:e(()=>[(s(!0),g(v,null,f(a.cols,o=>(s(),b(h,{key:o.name,props:a},{default:e(()=>[_(p(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1}),l(c,{class:"box medium"},{default:e(()=>[l(m,{flat:"",bordered:"",title:"Costos De Cuatro Noches",rows:i.rowsNochesCuatro.slice(0,10),columns:i.columns_noche_4,"row-key":"id",dense:"",loading:i.loading,class:"custom-table"},{body:e(a=>[l(I,{props:a,class:"hover-effect"},{default:e(()=>[(s(!0),g(v,null,f(a.cols,o=>(s(),b(h,{key:o.name,props:a},{default:e(()=>[_(p(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),d("div",ne,[l(c,{class:"box full"},{default:e(()=>[l(m,{flat:"",bordered:"",title:"Costos De Noche Adicional",rows:i.rowsNocheAdicionales.slice(0,10),columns:i.columns_noche_5,"row-key":"id",dense:"",loading:i.loading,class:"custom-table"},{body:e(a=>[l(I,{props:a,class:"hover-effect"},{default:e(()=>[(s(!0),g(v,null,f(a.cols,o=>(s(),b(h,{key:o.name,props:a},{default:e(()=>[_(p(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),d("div",oe,[l(c,{class:"box full"},{default:e(()=>[l(m,{flat:"",bordered:"",title:"Receptivos",rows:i.rowsreceptivo.slice(0,10),columns:i.columns_Receptivos,"row-key":"id",dense:"",loading:i.loading,class:"custom-table"},{body:e(a=>[l(I,{props:a,class:"hover-effect"},{default:e(()=>[(s(!0),g(v,null,f(a.cols,o=>(s(),b(h,{key:o.name,props:a},{default:e(()=>[_(p(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),d("div",te,[l(c,{class:"box full"},{default:e(()=>[l(m,{flat:"",bordered:"",title:"Proveedores",rows:i.rowsproveedores.slice(0,10),columns:i.columns_Proveedores,"row-key":"id",dense:"",loading:i.loading,class:"custom-table"},{body:e(a=>[l(I,{props:a,class:"hover-effect"},{default:e(()=>[(s(!0),g(v,null,f(a.cols,o=>(s(),b(h,{key:o.name,props:a},{default:e(()=>[_(p(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})])])]),_:1})}var be=U(F,[["render",re],["__scopeId","data-v-53f8d0f0"]]);export{be as default};
