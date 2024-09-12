import{c as E,a as A,h as F,d as q,r as B,X as Q,L as R,M as I,o as V,g as _,bd as z,E as C,f as j,aR as w,be as D}from"./index.f202d9b2.js";var $=E({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(n,{slots:f}){const c=A(()=>`q-card__section q-card__section--${n.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>F(n.tag,{class:c.value},q(f.default))}}),k=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(n,{slots:f,emit:c}){const P=_(),i=B(null);let u=0;const s=[];function v(e){const r=typeof e=="boolean"?e:n.noErrorFocus!==!0,d=++u,g=(t,o)=>{c("validation"+(t===!0?"Success":"Error"),o)},p=t=>{const o=t.validate();return typeof o.then=="function"?o.then(a=>({valid:a,comp:t}),a=>({valid:!1,comp:t,err:a})):Promise.resolve({valid:o,comp:t})};return(n.greedy===!0?Promise.all(s.map(p)).then(t=>t.filter(o=>o.valid!==!0)):s.reduce((t,o)=>t.then(()=>p(o).then(a=>{if(a.valid===!1)return Promise.reject(a)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return d===u&&g(!0),!0;if(d===u){const{comp:o,err:a}=t[0];if(a!==void 0&&console.error(a),g(!1,o),r===!0){const x=t.find(({comp:S})=>typeof S.focus=="function"&&z(S.$)===!1);x!==void 0&&x.comp.focus()}}return!1})}function m(){u++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function b(e){e!==void 0&&C(e);const r=u+1;v().then(d=>{r===u&&d===!0&&(n.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function y(e){e!==void 0&&C(e),c("reset"),j(()=>{m(),n.autofocus===!0&&n.noResetFocus!==!0&&l()})}function l(){w(()=>{if(i.value===null)return;const e=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),r=>r.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}Q(D,{bindComponent(e){s.push(e)},unbindComponent(e){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}});let h=!1;return R(()=>{h=!0}),I(()=>{h===!0&&n.autofocus===!0&&l()}),V(()=>{n.autofocus===!0&&l()}),Object.assign(P.proxy,{validate:v,resetValidation:m,submit:b,reset:y,focus:l,getValidationComponents:()=>s}),()=>F("form",{class:"q-form",ref:i,onSubmit:b,onReset:y},q(f.default))}});export{$ as Q,k as a};
