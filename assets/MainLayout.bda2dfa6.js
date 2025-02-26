import{c as J,a as c,h as _,d as he,i as Be,e as N,l as me,r as k,w as $,o as be,f as ft,g as ee,j as ht,k as Xe,n as Ye,m as mt,p as bt,q as gt,s as yt,t as le,u as pt,v as ce,x as Ce,y as Ee,z as qe,A as Me,B as ke,C as St,D as zt,E as Ke,F as Ge,G,H as wt,I as _e,J as Ct,K as qt,L as He,M as Je,N as Le,O as kt,P as _t,Q as Tt,R as $t,S as Pt,T as xe,U as Ae,V as Mt,W as Ze,X as Lt,Y as Bt,Z as Te,_ as de,$ as Ot,a0 as ve,a1 as fe,a2 as z,a3 as Y,a4 as B,a5 as h,a6 as K,a7 as et,a8 as Qe,a9 as j,aa as Ve,ab as Dt,ac as oe,ad as Et,ae as Ht,af as xt,ag as At,ah as Qt,ai as Vt,aj as tt}from"./index.a76570e1.js";import{Q as ie}from"./QResizeObserver.cd3f9ddd.js";var Rt=J({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const r=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:r.value},he(l.default))}}),Ft=J({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const r=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:r.value,role:"toolbar"},he(l.default))}}),Wt=J({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:r}){const{proxy:{$q:d}}=ee(),t=Be(me,N);if(t===N)return console.error("QHeader needs to be child of QLayout"),N;const o=k(parseInt(e.heightHint,10)),i=k(!0),a=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||d.platform.is.ios&&t.isContainer.value===!0),m=c(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return i.value===!0?o.value:0;const f=o.value-t.scroll.value.position;return f>0?f:0}),v=c(()=>e.modelValue!==!0||a.value===!0&&i.value!==!0),u=c(()=>e.modelValue===!0&&v.value===!0&&e.reveal===!0),T=c(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(v.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=c(()=>{const f=t.rows.value.top,L={};return f[0]==="l"&&t.left.space===!0&&(L[d.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(L[d.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function g(f,L){t.update("header",f,L)}function y(f,L){f.value!==L&&(f.value=L)}function D({height:f}){y(o,f),g("size",f)}function M(f){u.value===!0&&y(i,!0),r("focusin",f)}$(()=>e.modelValue,f=>{g("space",f),y(i,!0),t.animate()}),$(m,f=>{g("offset",f)}),$(()=>e.reveal,f=>{f===!1&&y(i,e.modelValue)}),$(i,f=>{t.animate(),r("reveal",f)}),$(t.scroll,f=>{e.reveal===!0&&y(i,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const q={};return t.instances.header=q,e.modelValue===!0&&g("size",o.value),g("space",e.modelValue),g("offset",m.value),be(()=>{t.instances.header===q&&(t.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const f=ft(l.default,[]);return e.elevated===!0&&f.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(_(ie,{debounce:0,onResize:D})),_("header",{class:T.value,style:w.value,onFocusin:M},f)}}});const{passive:Re}=mt,jt=["both","horizontal","vertical"];var at=J({name:"QScrollObserver",props:{axis:{type:String,validator:e=>jt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let d=null,t,o;$(()=>e.scrollTarget,()=>{m(),a()});function i(){d!==null&&d();const T=Math.max(0,bt(t)),w=gt(t),g={top:T-r.position.top,left:w-r.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const y=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";r.position={top:T,left:w},r.directionChanged=r.direction!==y,r.delta=g,r.directionChanged===!0&&(r.direction=y,r.inflectionPoint=r.position),l("scroll",{...r})}function a(){t=ht(o,e.scrollTarget),t.addEventListener("scroll",v,Re),v(!0)}function m(){t!==void 0&&(t.removeEventListener("scroll",v,Re),t=void 0)}function v(T){if(T===!0||e.debounce===0||e.debounce==="0")i();else if(d===null){const[w,g]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];d=()=>{g(w),d=null}}}const{proxy:u}=ee();return $(()=>u.$q.lang.rtl,i),Xe(()=>{o=u.$el.parentNode,a()}),be(()=>{d!==null&&d(),m()}),Object.assign(u,{trigger:v,getPosition:()=>r}),Ye}});const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Nt=Object.keys(Oe);Oe.all=!0;function Fe(e){const l={};for(const r of Nt)e[r]===!0&&(l[r]=!0);return Object.keys(l).length===0?Oe:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}const It=["INPUT","TEXTAREA"];function We(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&It.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function $e(e,l,r){const d=Me(e);let t,o=d.left-l.event.x,i=d.top-l.event.y,a=Math.abs(o),m=Math.abs(i);const v=l.direction;v.horizontal===!0&&v.vertical!==!0?t=o<0?"left":"right":v.horizontal!==!0&&v.vertical===!0?t=i<0?"up":"down":v.up===!0&&i<0?(t="up",a>m&&(v.left===!0&&o<0?t="left":v.right===!0&&o>0&&(t="right"))):v.down===!0&&i>0?(t="down",a>m&&(v.left===!0&&o<0?t="left":v.right===!0&&o>0&&(t="right"))):v.left===!0&&o<0?(t="left",a<m&&(v.up===!0&&i<0?t="up":v.down===!0&&i>0&&(t="down"))):v.right===!0&&o>0&&(t="right",a<m&&(v.up===!0&&i<0?t="up":v.down===!0&&i>0&&(t="down")));let u=!1;if(t===void 0&&r===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,u=!0,t==="left"||t==="right"?(d.left-=o,a=0,o=0):(d.top-=i,m=0,i=0)}return{synthetic:u,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:d,direction:t,isFirst:l.event.isFirst,isFinal:r===!0,duration:Date.now()-l.event.time,distance:{x:a,y:m},offset:{x:o,y:i},delta:{x:d.left-l.event.lastX,y:d.top-l.event.lastY}}}}let Ut=0;var ne=yt({name:"touch-pan",beforeMount(e,{value:l,modifiers:r}){if(r.mouse!==!0&&le.has.touch!==!0)return;function d(o,i){r.mouse===!0&&i===!0?St(o):(r.stop===!0&&qe(o),r.prevent===!0&&Ee(o))}const t={uid:"qvtp_"+Ut++,handler:l,modifiers:r,direction:Fe(r),noop:Ye,mouseStart(o){We(o,t)&&pt(o)&&(ce(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(We(o,t)){const i=o.target;ce(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,i){if(le.is.firefox===!0&&Ce(e,!0),t.lastEvt=o,i===!0||r.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const v=o.type.indexOf("mouse")!==-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Ee(v),o.cancelBubble===!0&&qe(v),Object.assign(v,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:v}}qe(o)}const{left:a,top:m}=Me(o);t.event={x:a,y:m,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:m}},move(o){if(t.event===void 0)return;const i=Me(o),a=i.left-t.event.x,m=i.top-t.event.y;if(a===0&&m===0)return;t.lastEvt=o;const v=t.event.mouse===!0,u=()=>{d(o,v);let g;r.preserveCursor!==!0&&r.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),v===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),zt(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),v===!0){const D=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{D(),y()},50):D()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&d(o,t.event.mouse);const{payload:g,synthetic:y}=$e(o,t,!1);g!==void 0&&(t.handler(g)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=g.position.left,t.event.lastY=g.position.top,t.event.lastDir=y===!0?void 0:g.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||v===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(o);return}const T=Math.abs(a),w=Math.abs(m);T!==w&&(t.direction.horizontal===!0&&T>w||t.direction.vertical===!0&&T<w||t.direction.up===!0&&T<w&&m<0||t.direction.down===!0&&T<w&&m>0||t.direction.left===!0&&T>w&&a<0||t.direction.right===!0&&T>w&&a>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,i){if(t.event!==void 0){if(ke(t,"temp"),le.is.firefox===!0&&Ce(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler($e(o===void 0?t.lastEvt:o,t).payload);const{payload:a}=$e(o===void 0?t.lastEvt:o,t,!0),m=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(m):m()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,r.mouse===!0){const o=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";ce(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}le.has.touch===!0&&ce(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const r=e.__qtouchpan;r!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&r.end(),r.handler=l.value),r.direction=Fe(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),ke(l,"main"),ke(l,"temp"),le.is.firefox===!0&&Ce(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});const je=["vertical","horizontal"],Pe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ne={prevent:!0,mouse:!0,mouseAllDir:!0},Ie=e=>e>=250?50:Math.ceil(e/5);var Xt=J({name:"QScrollArea",props:{...Ke,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:l,emit:r}){const d=k(!1),t=k(!1),o=k(!1),i={vertical:k(0),horizontal:k(0)},a={vertical:{ref:k(null),position:k(0),size:k(0)},horizontal:{ref:k(null),position:k(0),size:k(0)}},{proxy:m}=ee(),v=Ge(e,m.$q);let u=null,T;const w=k(null),g=c(()=>"q-scrollarea"+(v.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=c(()=>{const s=a.vertical.size.value-i.vertical.value;if(s<=0)return 0;const b=G(a.vertical.position.value/s,0,1);return Math.round(b*1e4)/1e4}),a.vertical.thumbHidden=c(()=>(e.visible===null?o.value:e.visible)!==!0&&d.value===!1&&t.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=c(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=c(()=>Math.round(G(i.vertical.value*i.vertical.value/a.vertical.size.value,Ie(i.vertical.value),i.vertical.value))),a.vertical.style=c(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=c(()=>{const s=a.horizontal.size.value-i.horizontal.value;if(s<=0)return 0;const b=G(Math.abs(a.horizontal.position.value)/s,0,1);return Math.round(b*1e4)/1e4}),a.horizontal.thumbHidden=c(()=>(e.visible===null?o.value:e.visible)!==!0&&d.value===!1&&t.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=c(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=c(()=>Math.round(G(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,Ie(i.horizontal.value),i.horizontal.value))),a.horizontal.style=c(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[m.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=c(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),D=[[ne,s=>{V(s,"vertical")},void 0,{vertical:!0,...Ne}]],M=[[ne,s=>{V(s,"horizontal")},void 0,{horizontal:!0,...Ne}]];function q(){const s={};return je.forEach(b=>{const C=a[b];s[b+"Position"]=C.position.value,s[b+"Percentage"]=C.percentage.value,s[b+"Size"]=C.size.value,s[b+"ContainerSize"]=i[b].value}),s}const f=wt(()=>{const s=q();s.ref=m,r("scroll",s)},0);function L(s,b,C){if(je.includes(s)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(s==="vertical"?He:_e)(w.value,b,C)}function p({height:s,width:b}){let C=!1;i.vertical.value!==s&&(i.vertical.value=s,C=!0),i.horizontal.value!==b&&(i.horizontal.value=b,C=!0),C===!0&&Q()}function P({position:s}){let b=!1;a.vertical.position.value!==s.top&&(a.vertical.position.value=s.top,b=!0),a.horizontal.position.value!==s.left&&(a.horizontal.position.value=s.left,b=!0),b===!0&&Q()}function O({height:s,width:b}){a.horizontal.size.value!==b&&(a.horizontal.size.value=b,Q()),a.vertical.size.value!==s&&(a.vertical.size.value=s,Q())}function V(s,b){const C=a[b];if(s.isFirst===!0){if(C.thumbHidden.value===!0)return;T=C.position.value,t.value=!0}else if(t.value!==!0)return;s.isFinal===!0&&(t.value=!1);const W=Pe[b],Z=i[b].value,ge=(C.size.value-Z)/(Z-C.thumbSize.value),ue=s.distance[W.dist],ye=T+(s.direction===W.dir?1:-1)*ue*ge;te(ye,b)}function I(s,b){const C=a[b];if(C.thumbHidden.value!==!0){const W=s[Pe[b].offset];if(W<C.thumbStart.value||W>C.thumbStart.value+C.thumbSize.value){const Z=W-C.thumbSize.value/2;te(Z/i[b].value*C.size.value,b)}C.ref.value!==null&&C.ref.value.dispatchEvent(new MouseEvent(s.type,s))}}function R(s){I(s,"vertical")}function A(s){I(s,"horizontal")}function Q(){d.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,d.value=!1},e.delay),e.onScroll!==void 0&&f()}function te(s,b){w.value[Pe[b].scroll]=s}let E=null;function ae(){E!==null&&clearTimeout(E),E=setTimeout(()=>{E=null,o.value=!0},m.$q.platform.is.ios?50:0)}function re(){E!==null&&(clearTimeout(E),E=null),o.value=!1}let F=null;return $(()=>m.$q.lang.rtl,s=>{w.value!==null&&_e(w.value,Math.abs(a.horizontal.position.value)*(s===!0?-1:1))}),Ct(()=>{F={top:a.vertical.position.value,left:a.horizontal.position.value}}),qt(()=>{if(F===null)return;const s=w.value;s!==null&&(_e(s,F.left),He(s,F.top))}),be(f.cancel),Object.assign(m,{getScrollTarget:()=>w.value,getScroll:q,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:L,setScrollPercentage(s,b,C){L(s,b*(a[s].size.value-i[s].value)*(s==="horizontal"&&m.$q.lang.rtl===!0?-1:1),C)}}),()=>_("div",{class:g.value,onMouseenter:ae,onMouseleave:re},[_("div",{ref:w,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[_("div",{class:"q-scrollarea__content absolute",style:y.value},Je(l.default,[_(ie,{debounce:0,onResize:O})])),_(at,{axis:"both",onScroll:P})]),_(ie,{debounce:0,onResize:p}),_("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:R}),_("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),Le(_("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),D),Le(_("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),M)])}});const Ue=150;var Yt=J({name:"QDrawer",inheritAttrs:!1,props:{...kt,...Ke,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[..._t,"onLayout","miniState"],setup(e,{slots:l,emit:r,attrs:d}){const t=ee(),{proxy:{$q:o}}=t,i=Ge(e,o),{preventBodyScroll:a}=Mt(),{registerTimeout:m,removeTimeout:v}=Tt(),u=Be(me,N);if(u===N)return console.error("QDrawer needs to be child of QLayout"),N;let T,w=null,g;const y=k(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),D=c(()=>e.mini===!0&&y.value!==!0),M=c(()=>D.value===!0?e.miniWidth:e.width),q=k(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),f=c(()=>e.persistent!==!0&&(y.value===!0||W.value===!0));function L(n,S){if(V(),n!==!1&&u.animate(),x(0),y.value===!0){const H=u.instances[F.value];H!==void 0&&H.belowBreakpoint===!0&&H.hide(!1),U(1),u.isContainer.value!==!0&&a(!0)}else U(0),n!==!1&&Se(!1);m(()=>{n!==!1&&Se(!0),S!==!0&&r("show",n)},Ue)}function p(n,S){I(),n!==!1&&u.animate(),U(0),x(Q.value*M.value),ze(),S!==!0?m(()=>{r("hide",n)},Ue):v()}const{show:P,hide:O}=$t({showing:q,hideOnRouteChange:f,handleShow:L,handleHide:p}),{addToHistory:V,removeFromHistory:I}=Pt(q,O,f),R={belowBreakpoint:y,hide:O},A=c(()=>e.side==="right"),Q=c(()=>(o.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),te=k(0),E=k(!1),ae=k(!1),re=k(M.value*Q.value),F=c(()=>A.value===!0?"left":"right"),s=c(()=>q.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:M.value:0),b=c(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(A.value?"R":"L")!==-1||o.platform.is.ios===!0&&u.isContainer.value===!0),C=c(()=>e.overlay===!1&&q.value===!0&&y.value===!1),W=c(()=>e.overlay===!0&&q.value===!0&&y.value===!1),Z=c(()=>"fullscreen q-drawer__backdrop"+(q.value===!1&&E.value===!1?" hidden":"")),ge=c(()=>({backgroundColor:`rgba(0,0,0,${te.value*.4})`})),ue=c(()=>A.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),ye=c(()=>A.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),lt=c(()=>{const n={};return u.header.space===!0&&ue.value===!1&&(b.value===!0?n.top=`${u.header.offset}px`:u.header.space===!0&&(n.top=`${u.header.size}px`)),u.footer.space===!0&&ye.value===!1&&(b.value===!0?n.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(n.bottom=`${u.footer.size}px`)),n}),ot=c(()=>{const n={width:`${M.value}px`,transform:`translateX(${re.value}px)`};return y.value===!0?n:Object.assign(n,lt.value)}),nt=c(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),it=c(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(E.value===!0?" no-transition":q.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${D.value===!0?"mini":"standard"}`+(b.value===!0||C.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ue.value===!0?" q-drawer--top-padding":""))),rt=c(()=>{const n=o.lang.rtl===!0?e.side:F.value;return[[ne,dt,void 0,{[n]:!0,mouse:!0}]]}),ut=c(()=>{const n=o.lang.rtl===!0?F.value:e.side;return[[ne,De,void 0,{[n]:!0,mouse:!0}]]}),st=c(()=>{const n=o.lang.rtl===!0?F.value:e.side;return[[ne,De,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function pe(){vt(y,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}$(y,n=>{n===!0?(T=q.value,q.value===!0&&O(!1)):e.overlay===!1&&e.behavior!=="mobile"&&T!==!1&&(q.value===!0?(x(0),U(0),ze()):P(!1))}),$(()=>e.side,(n,S)=>{u.instances[S]===R&&(u.instances[S]=void 0,u[S].space=!1,u[S].offset=0),u.instances[n]=R,u[n].size=M.value,u[n].space=C.value,u[n].offset=s.value}),$(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&pe()}),$(()=>e.behavior+e.breakpoint,pe),$(u.isContainer,n=>{q.value===!0&&a(n!==!0),n===!0&&pe()}),$(u.scrollbarWidth,()=>{x(q.value===!0?0:void 0)}),$(s,n=>{X("offset",n)}),$(C,n=>{r("onLayout",n),X("space",n)}),$(A,()=>{x()}),$(M,n=>{x(),we(e.miniToOverlay,n)}),$(()=>e.miniToOverlay,n=>{we(n,M.value)}),$(()=>o.lang.rtl,()=>{x()}),$(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ct(),u.animate())}),$(D,n=>{r("miniState",n)});function x(n){n===void 0?xe(()=>{n=q.value===!0?0:M.value,x(Q.value*n)}):(u.isContainer.value===!0&&A.value===!0&&(y.value===!0||Math.abs(n)===M.value)&&(n+=Q.value*u.scrollbarWidth.value),re.value=n)}function U(n){te.value=n}function Se(n){const S=n===!0?"remove":u.isContainer.value!==!0?"add":"";S!==""&&document.body.classList[S]("q-body--drawer-toggle")}function ct(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,w=setTimeout(()=>{w=null,ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function dt(n){if(q.value!==!1)return;const S=M.value,H=G(n.distance.x,0,S);if(n.isFinal===!0){H>=Math.min(75,S)===!0?P():(u.animate(),U(0),x(Q.value*S)),E.value=!1;return}x((o.lang.rtl===!0?A.value!==!0:A.value)?Math.max(S-H,0):Math.min(0,H-S)),U(G(H/S,0,1)),n.isFirst===!0&&(E.value=!0)}function De(n){if(q.value!==!0)return;const S=M.value,H=n.direction===e.side,se=(o.lang.rtl===!0?H!==!0:H)?G(n.distance.x,0,S):0;if(n.isFinal===!0){Math.abs(se)<Math.min(75,S)===!0?(u.animate(),U(1),x(0)):O(),E.value=!1;return}x(Q.value*se),U(G(1-se/S,0,1)),n.isFirst===!0&&(E.value=!0)}function ze(){a(!1),Se(!0)}function X(n,S){u.update(e.side,n,S)}function vt(n,S){n.value!==S&&(n.value=S)}function we(n,S){X("size",n===!0?e.miniWidth:S)}return u.instances[e.side]=R,we(e.miniToOverlay,M.value),X("space",C.value),X("offset",s.value),e.showIfAbove===!0&&e.modelValue!==!0&&q.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Xe(()=>{r("onLayout",C.value),r("miniState",D.value),T=e.showIfAbove===!0;const n=()=>{(q.value===!0?L:p)(!1,!0)};if(u.totalWidth.value!==0){xe(n);return}g=$(u.totalWidth,()=>{g(),g=void 0,q.value===!1&&e.showIfAbove===!0&&y.value===!1?P(!1):n()})}),be(()=>{g!==void 0&&g(),w!==null&&(clearTimeout(w),w=null),q.value===!0&&ze(),u.instances[e.side]===R&&(u.instances[e.side]=void 0,X("size",0),X("offset",0),X("space",!1))}),()=>{const n=[];y.value===!0&&(e.noSwipeOpen===!1&&n.push(Le(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),rt.value)),n.push(Ae("div",{ref:"backdrop",class:Z.value,style:ge.value,"aria-hidden":"true",onClick:O},void 0,"backdrop",e.noSwipeBackdrop!==!0&&q.value===!0,()=>st.value)));const S=D.value===!0&&l.mini!==void 0,H=[_("div",{...d,key:""+S,class:[nt.value,d.class]},S===!0?l.mini():he(l.default))];return e.elevated===!0&&q.value===!0&&H.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(Ae("aside",{ref:"content",class:it.value,style:ot.value},H,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>ut.value)),_("div",{class:"q-drawer-container"},n)}}}),Kt=J({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:r}}=ee(),d=Be(me,N);if(d===N)return console.error("QPageContainer needs to be child of QLayout"),N;Ze(Lt,!0);const t=c(()=>{const o={};return d.header.space===!0&&(o.paddingTop=`${d.header.size}px`),d.right.space===!0&&(o[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${d.right.size}px`),d.footer.space===!0&&(o.paddingBottom=`${d.footer.size}px`),d.left.space===!0&&(o[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${d.left.size}px`),o});return()=>_("div",{class:"q-page-container",style:t.value},he(l.default))}}),Gt=J({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:r}){const{proxy:{$q:d}}=ee(),t=k(null),o=k(d.screen.height),i=k(e.container===!0?0:d.screen.width),a=k({position:0,direction:"down",inflectionPoint:0}),m=k(0),v=k(Bt.value===!0?0:Te()),u=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),T=c(()=>e.container===!1?{minHeight:d.screen.height+"px"}:null),w=c(()=>v.value!==0?{[d.lang.rtl===!0?"left":"right"]:`${v.value}px`}:null),g=c(()=>v.value!==0?{[d.lang.rtl===!0?"right":"left"]:0,[d.lang.rtl===!0?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null);function y(p){if(e.container===!0||document.qScrollPrevented!==!0){const P={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};a.value=P,e.onScroll!==void 0&&r("scroll",P)}}function D(p){const{height:P,width:O}=p;let V=!1;o.value!==P&&(V=!0,o.value=P,e.onScrollHeight!==void 0&&r("scrollHeight",P),q()),i.value!==O&&(V=!0,i.value=O),V===!0&&e.onResize!==void 0&&r("resize",p)}function M({height:p}){m.value!==p&&(m.value=p,q())}function q(){if(e.container===!0){const p=o.value>m.value?Te():0;v.value!==p&&(v.value=p)}}let f=null;const L={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:o,containerHeight:m,scrollbarWidth:v,totalWidth:c(()=>i.value+v.value),rows:c(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:de({size:0,offset:0,space:!1}),right:de({size:300,offset:0,space:!1}),footer:de({size:0,offset:0,space:!1}),left:de({size:300,offset:0,space:!1}),scroll:a,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,P,O){L[p][P]=O}};if(Ze(me,L),Te()>0){let O=function(){p=null,P.classList.remove("hide-scrollbar")},V=function(){if(p===null){if(P.scrollHeight>d.screen.height)return;P.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout(O,300)},I=function(R){p!==null&&R==="remove"&&(clearTimeout(p),O()),window[`${R}EventListener`]("resize",V)},p=null;const P=document.body;$(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),Ot(()=>{I("remove")})}return()=>{const p=Je(l.default,[_(at,{onScroll:y}),_(ie,{onResize:D})]),P=_("div",{class:u.value,style:T.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(ie,{onResize:M}),_("div",{class:"absolute-full",style:w.value},[_("div",{class:"scroll",style:g.value},[P])])]):P}}});Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const l=e;return(r,d)=>(ve(),fe(Y,{clickable:"",tag:"a",target:"_blank",href:l.link},{default:z(()=>[l.icon?(ve(),fe(B,{key:0,avatar:""},{default:z(()=>[h(K,{name:l.icon},null,8,["name"])]),_:1})):et("",!0),h(B,null,{default:z(()=>[h(Qe,null,{default:z(()=>[j(Ve(l.title),1)]),_:1}),h(Qe,{caption:""},{default:z(()=>[j(Ve(l.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});var Jt={name:"MainLayout",setup(){const e=Dt(),l=k(!1),r=k(!0),d=k(!1),t=[],o=oe.getItem("userData");return{userRole:o?o.rol:null,router:e,essentialLinks:t,leftDrawerOpen:l,drawer:d,toggleLeftDrawer:()=>{l.value=!l.value},miniState:r,toggleMiniState:()=>{l.value=!0,r.value=!r.value},goPage:T=>{e.push(T)},logout:()=>{console.log("Logout initiated"),oe.remove("userData"),oe.remove("token"),oe.clear(),console.log("Token almacenado en el LocalStorage:",oe.getItem("token")),console.log("Datos del usuario eliminados al cerrar sesi\xF3n"),e.push("/")}}},beforeMount(){},async data(){return{}}};const Zt=tt("span",null,"MultiCotizaciones",-1),ea=tt("div",null,"Versi\xF3n 0.3",-1);function ta(e,l,r,d,t,o){const i=Ht("router-view");return ve(),fe(Gt,{view:"lHh Lpr lFf"},{default:z(()=>[h(Wt,{elevated:""},{default:z(()=>[h(Ft,null,{default:z(()=>[h(xt,{flat:"",onClick:l[0]||(l[0]=a=>e.drawer=!e.drawer),round:"",dense:"",icon:"menu"}),Zt,h(Rt),ea]),_:1})]),_:1}),h(Yt,{modelValue:e.drawer,"onUpdate:modelValue":l[7]||(l[7]=a=>e.drawer=a),"show-if-above":"",mini:e.miniState,onMouseover:l[8]||(l[8]=a=>e.miniState=!1),onMouseout:l[9]||(l[9]=a=>e.miniState=!0),width:200,breakpoint:500,bordered:"",class:Vt(e.$q.dark.isActive?"bg-grey-9":"bg-grey-3")},{default:z(()=>[h(Xt,{class:"fit","horizontal-thumb-style":{opacity:0}},{default:z(()=>[h(At,{padding:""},{default:z(()=>[h(Y,{clickable:"",onClick:l[1]||(l[1]=a=>e.goPage("/home"))},{default:z(()=>[h(B,{avatar:""},{default:z(()=>[h(K,{name:"home"})]),_:1}),h(B,null,{default:z(()=>[j("Inicio")]),_:1})]),_:1}),h(Y,{clickable:"",onClick:l[2]||(l[2]=a=>e.goPage("/cotizacion"))},{default:z(()=>[h(B,{avatar:""},{default:z(()=>[h(K,{name:"description"})]),_:1}),h(B,null,{default:z(()=>[j("Cotizaci\xF3n")]),_:1})]),_:1}),h(Y,{clickable:"",onClick:l[3]||(l[3]=a=>e.goPage("/liquidacion"))},{default:z(()=>[h(B,{avatar:""},{default:z(()=>[h(K,{name:"task"})]),_:1}),h(B,null,{default:z(()=>[j("Liquidacion")]),_:1})]),_:1}),e.userRole==="administrador"?(ve(),fe(Y,{key:0,clickable:"",onClick:l[4]||(l[4]=a=>e.goPage("/ControlUser"))},{default:z(()=>[h(B,{avatar:""},{default:z(()=>[h(K,{name:"manage_accounts"})]),_:1}),h(B,null,{default:z(()=>[j("Control Usuarios")]),_:1})]),_:1})):et("",!0),h(Y,{clickable:"",onClick:l[5]||(l[5]=a=>e.goPage("/ControlClient"))},{default:z(()=>[h(B,{avatar:""},{default:z(()=>[h(K,{name:"group"})]),_:1}),h(B,null,{default:z(()=>[j("Control Clientes")]),_:1})]),_:1}),h(Y,{clickable:"",onClick:l[6]||(l[6]=a=>e.goPage("/ControlPlanes"))},{default:z(()=>[h(B,{avatar:""},{default:z(()=>[h(K,{name:"add_box"})]),_:1}),h(B,null,{default:z(()=>[j("Control Planes")]),_:1})]),_:1}),h(Qt),h(Y,{clickable:"",onClick:e.logout},{default:z(()=>[h(B,{avatar:""},{default:z(()=>[h(K,{name:"logout"})]),_:1}),h(B,null,{default:z(()=>[j("Cerrar Sesi\xF3n")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue","mini","class"]),h(Kt,null,{default:z(()=>[h(i)]),_:1})]),_:1})}var na=Et(Jt,[["render",ta]]);export{na as default};
