import{q as D,a as ie,o as ne,i as ye,g as G,_ as xe,r as O,c as y,$ as Ce,a0 as pe,a1 as we,s as Me,l as Q,p as Se,u as qe,k as Re,h as S,V as W,T as Ve,f as Ae,a2 as _e,S as se,B as Fe,a3 as Ee,D as Be,E as $e,I as J}from"./index.5e0d6ce9.js";import{Q as de,d as Te}from"./QBtn.a7e16a37.js";import{u as Oe,a as Ie}from"./use-dark.cb3c68ad.js";import{a as X,c as Pe}from"./render.5082e1c5.js";import{u as De}from"./uid.42677368.js";function je({validate:e,resetValidation:t,requiresQForm:u}){const i=ye(xe,!1);if(i!==!1){const{props:f,proxy:d}=G();Object.assign(d,{validate:e,resetValidation:t}),D(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),ie(()=>{f.disable!==!0&&i.bindComponent(d)}),ne(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const fe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ve=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ae={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>fe.test(e),hexaColor:e=>ce.test(e),hexOrHexaColor:e=>ve.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>fe.test(e)||ee.test(e),hexaOrRgbaColor:e=>ce.test(e)||te.test(e),anyColor:e=>ve.test(e)||ee.test(e)||te.test(e)},ze=[!0,!1,"ondemand"],Ne={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ze.includes(e)}};function Le(e,t){const{props:u,proxy:i}=G(),f=O(!1),d=O(null),c=O(null);je({validate:$,resetValidation:E});let x=0,R;const b=y(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),C=y(()=>u.disable!==!0&&b.value===!0),p=y(()=>u.error===!0||f.value===!0),Z=y(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:d.value);D(()=>u.modelValue,()=>{N()}),D(()=>u.reactiveRules,P=>{P===!0?R===void 0&&(R=D(()=>u.rules,()=>{N(!0)})):R!==void 0&&(R(),R=void 0)},{immediate:!0}),D(e,P=>{P===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,C.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&I())});function E(){x++,t.value=!1,c.value=null,f.value=!1,d.value=null,I.cancel()}function $(P=u.modelValue){if(C.value!==!0)return!0;const A=++x,H=t.value!==!0?()=>{c.value=!0}:()=>{},z=(q,w)=>{q===!0&&H(),f.value=q,d.value=w||null,t.value=!1},j=[];for(let q=0;q<u.rules.length;q++){const w=u.rules[q];let B;if(typeof w=="function"?B=w(P,ae):typeof w=="string"&&ae[w]!==void 0&&(B=ae[w](P)),B===!1||typeof B=="string")return z(!0,B),!1;B!==!0&&B!==void 0&&j.push(B)}return j.length===0?(z(!1),!0):(t.value=!0,Promise.all(j).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return A===x&&z(!1),!0;const w=q.find(B=>B===!1||typeof B=="string");return A===x&&z(w!==void 0,w),w===void 0},q=>(A===x&&(console.error(q),z(!0)),!1)))}function N(P){C.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&P!==!0)&&I()}const I=Ce($,0);return ne(()=>{R!==void 0&&R(),I.cancel()}),Object.assign(i,{resetValidation:E,validate:$}),pe(i,"hasError",()=>p.value),{isDirtyModel:c,hasRules:b,hasError:p,errorMessage:Z,validate:$,resetValidation:E}}const me=/^on[A-Z]/;function Ke(e,t){const u={listeners:O({}),attributes:O({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&me.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)me.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return we(i),i(),u}let oe=[],Ue=[];function be(e){Ue.length===0?e():oe.push(e)}function Ze(e){oe=oe.filter(t=>t!==e)}function re(e){return e===void 0?`f_${De()}`:e}function ue(e){return e!=null&&(""+e).length>0}const He={...Oe,...Ne,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Qe=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ye(){const{props:e,attrs:t,proxy:u,vnode:i}=G();return{isDark:Ie(e,u.$q),editable:y(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:Ke(t,i),targetUid:O(re(e.for)),rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function We(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=G(),{$q:c}=d;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:r,onControlFocusout:a,focus:w}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:R,hasRules:b,hasError:C,errorMessage:p,resetValidation:Z}=Le(e.focused,e.innerLoading),E=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),$=y(()=>t.bottomSlots===!0||t.hint!==void 0||b.value===!0||t.counter===!0||t.error!==null),N=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=y(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(E.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&$.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=y(()=>t.labelSlot===!0||t.label!==void 0),H=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),z=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:E.value,modelValue:t.modelValue,emitValue:e.emitValue})),j=y(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});D(()=>t.for,l=>{e.targetUid.value=re(l)});function q(){const l=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(l===null||l.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==l&&h.focus({preventScroll:!0}))}function w(){be(q)}function B(){Ze(q);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function r(l){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function a(l,h){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),h!==void 0&&h())})}function s(l){Me(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Q(()=>{Z(),c.platform.is.mobile!==!0&&(R.value=!1)})}function o(){const l=[];return i.prepend!==void 0&&l.push(S("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:W},i.prepend())),l.push(S("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),C.value===!0&&t.noErrorIcon===!1&&l.push(M("error",[S(de,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(M("inner-loading-append",i.loading!==void 0?i.loading():[S(Te,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(M("inner-clearable-append",[S(de,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&l.push(S("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:W},i.append())),e.getInnerAppend!==void 0&&l.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function m(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(S("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):i.rawControl!==void 0?l.push(i.rawControl()):i.control!==void 0&&l.push(S("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(z.value))),A.value===!0&&l.push(S("div",{class:H.value},X(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(S("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(X(i.default))}function v(){let l,h;C.value===!0?p.value!==null?(l=[S("div",{role:"alert"},p.value)],h=`q--slot-error-${p.value}`):(l=X(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[S("div",t.hint)],h=`q--slot-hint-${t.hint}`):(l=X(i.hint),h="q--slot-hint"));const K=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&K===!1&&l===void 0)return;const k=S("div",{key:h,class:"q-field__messages col"},l);return S("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:W},[t.hideBottomSpace===!0?k:S(Ve,{name:"q-transition--field-message"},()=>k),K===!0?S("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(l,h){return h===null?null:S("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let g=!1;return Se(()=>{g=!0}),qe(()=>{g===!0&&t.autofocus===!0&&d.focus()}),ie(()=>{Re.value===!0&&t.for===void 0&&(e.targetUid.value=re()),t.autofocus===!0&&d.focus()}),ne(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:w,blur:B}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...j.value}:j.value;return S("label",{ref:e.rootRef,class:[I.value,f.class],style:f.style,...h},[i.before!==void 0?S("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:W},i.before()):null,S("div",{class:"q-field__inner relative-position col self-stretch"},[S("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},o()),$.value===!0?v():null]),i.after!==void 0?S("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:W},i.after()):null])}}const ge={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ke=Object.keys(le);ke.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const Ge=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ke.join("")+"])|(.)","g"),he=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),Je={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Xe(e,t,u,i){let f,d,c,x,R,b;const C=O(null),p=O(E());function Z(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,N),D(()=>e.mask,r=>{if(r!==void 0)I(p.value,!0);else{const a=w(p.value);N(),e.modelValue!==a&&t("update:modelValue",a)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&I(p.value,!0)}),D(()=>e.unmaskedValue,()=>{C.value===!0&&I(p.value)});function E(){if(N(),C.value===!0){const r=j(w(e.modelValue));return e.fillMask!==!1?B(r):r}return e.modelValue}function $(r){if(r<f.length)return f.slice(-r);let a="",s=f;const o=s.indexOf(_);if(o>-1){for(let m=r-s.length;m>0;m--)a+=_;s=s.slice(0,o)+a+s.slice(o)}return s}function N(){if(C.value=e.mask!==void 0&&e.mask.length>0&&Z(),C.value===!1){x=void 0,f="",d="";return}const r=ge[e.mask]===void 0?e.mask:ge[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",s=a.replace(he,"\\$&"),o=[],m=[],v=[];let M=e.reverseFillMask===!0,g="",l="";r.replace(Ge,(F,n,V,U,L)=>{if(U!==void 0){const T=le[U];v.push(T),l=T.negate,M===!0&&(m.push("(?:"+l+"+)?("+T.pattern+"+)?(?:"+l+"+)?("+T.pattern+"+)?"),M=!1),m.push("(?:"+l+"+)?("+T.pattern+")?")}else if(V!==void 0)g="\\"+(V==="\\"?"":V),v.push(V),o.push("([^"+g+"]+)?"+g+"?");else{const T=n!==void 0?n:L;g=T==="\\"?"\\\\\\\\":T.replace(he,"\\\\$&"),v.push(T),o.push("([^"+g+"]+)?"+g+"?")}});const h=new RegExp("^"+o.join("")+"("+(g===""?".":"[^"+g+"]")+"+)?"+(g===""?"":"["+g+"]*")+"$"),K=m.length-1,k=m.map((F,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+F):n===K?new RegExp("^"+F+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+F));c=v,x=F=>{const n=h.exec(e.reverseFillMask===!0?F:F.slice(0,v.length+1));n!==null&&(F=n.slice(1).join(""));const V=[],U=k.length;for(let L=0,T=F;L<U;L++){const Y=k[L].exec(T);if(Y===null)break;T=T.slice(Y.shift().length),V.push(...Y)}return V.length>0?V.join(""):F},f=v.map(F=>typeof F=="string"?F:_).join(""),d=f.split(_).join(a)}function I(r,a,s){const o=i.value,m=o.selectionEnd,v=o.value.length-m,M=w(r);a===!0&&N();const g=j(M),l=e.fillMask!==!1?B(g):g,h=p.value!==l;o.value!==l&&(o.value=l),h===!0&&(p.value=l),document.activeElement===o&&Q(()=>{if(l===d){const k=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=o.selectionEnd;let F=m-1;for(let n=R;n<=F&&n<k;n++)f[n]!==_&&F++;A.right(o,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const k=e.reverseFillMask===!0?m===0?l.length>g.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(g.length,v)+1))+1:m;o.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const k=Math.max(0,l.length-(l===d?0:Math.min(g.length,v+1)));k===1&&m===1?o.setSelectionRange(k,k,"forward"):A.rightReverse(o,k)}else{const k=l.length-v;o.setSelectionRange(k,k,"backward")}else if(h===!0){const k=Math.max(0,f.indexOf(_),Math.min(g.length,m)-1);A.right(o,k)}else{const k=m-1;A.right(o,k)}});const K=e.unmaskedValue===!0?w(l):l;String(e.modelValue)!==K&&u(K,!0)}function P(r,a,s){const o=j(w(r.value));a=Math.max(0,f.indexOf(_),Math.min(o.length,a)),R=a,r.setSelectionRange(a,s,"forward")}const A={left(r,a){const s=f.slice(a-1).indexOf(_)===-1;let o=Math.max(0,a-1);for(;o>=0;o--)if(f[o]===_){a=o,s===!0&&a++;break}if(o<0&&f[a]!==void 0&&f[a]!==_)return A.right(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},right(r,a){const s=r.value.length;let o=Math.min(s,a+1);for(;o<=s;o++)if(f[o]===_){a=o;break}else f[o-1]===_&&(a=o);if(o>s&&f[a-1]!==void 0&&f[a-1]!==_)return A.left(r,s);r.setSelectionRange(a,a,"forward")},leftReverse(r,a){const s=$(r.value.length);let o=Math.max(0,a-1);for(;o>=0;o--)if(s[o-1]===_){a=o;break}else if(s[o]===_&&(a=o,o===0))break;if(o<0&&s[a]!==void 0&&s[a]!==_)return A.rightReverse(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},rightReverse(r,a){const s=r.value.length,o=$(s),m=o.slice(0,a+1).indexOf(_)===-1;let v=Math.min(s,a+1);for(;v<=s;v++)if(o[v-1]===_){a=v,a>0&&m===!0&&a--;break}if(v>s&&o[a-1]!==void 0&&o[a-1]!==_)return A.leftReverse(r,s);r.setSelectionRange(a,a,"forward")}};function H(r){t("click",r),b=void 0}function z(r){if(t("keydown",r),Ae(r)===!0)return;const a=i.value,s=a.selectionStart,o=a.selectionEnd;if(r.shiftKey||(b=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&b===void 0&&(b=a.selectionDirection==="forward"?s:o);const m=A[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),m(a,b===s?o:s),r.shiftKey){const v=a.selectionStart;a.setSelectionRange(Math.min(b,v),Math.max(b,v),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&s===o?(A.left(a,s),a.setSelectionRange(a.selectionStart,o,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&s===o&&(A.rightReverse(a,o),a.setSelectionRange(s,a.selectionEnd,"forward"))}function j(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return q(r);const a=c;let s=0,o="";for(let m=0;m<a.length;m++){const v=r[s],M=a[m];if(typeof M=="string")o+=M,v===M&&s++;else if(v!==void 0&&M.regex.test(v))o+=M.transform!==void 0?M.transform(v):v,s++;else return o}return o}function q(r){const a=c,s=f.indexOf(_);let o=r.length-1,m="";for(let v=a.length-1;v>=0&&o>-1;v--){const M=a[v];let g=r[o];if(typeof M=="string")m=M+m,g===M&&o--;else if(g!==void 0&&M.regex.test(g))do m=(M.transform!==void 0?M.transform(g):g)+m,o--,g=r[o];while(s===v&&g!==void 0&&M.regex.test(g));else return m}return m}function w(r){return typeof r!="string"||x===void 0?typeof r=="number"?x(""+r):r:x(r)}function B(r){return d.length-r.length<=0?r:e.reverseFillMask===!0&&r.length>0?d.slice(0,-r.length)+r:r+d.slice(r.length)}return{innerValue:p,hasMask:C,moveCursorForPaste:P,updateMaskValue:I,onMaskedKeydown:z,onMaskedClick:H}}const et={name:String};function tt(e){return y(()=>e.name||e.for)}function lt(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return u()}):y(u)}const nt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,at=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ot=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,rt=/[a-z0-9_ -]$/i;function ut(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(_e.is.firefox===!0?rt.test(u.data)===!1:nt.test(u.data)===!0||at.test(u.data)===!0||ot.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var it=Pe({name:"QInput",inheritAttrs:!1,props:{...He,...Je,...et,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Qe,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=G(),{$q:f}=i,d={};let c=NaN,x,R,b=null,C;const p=O(null),Z=tt(e),{innerValue:E,hasMask:$,moveCursorForPaste:N,updateMaskValue:I,onMaskedKeydown:P,onMaskedClick:A}=Xe(e,t,g,p),H=lt(e,!0),z=y(()=>ue(E.value)),j=ut(v),q=Ye(),w=y(()=>e.type==="textarea"||e.autogrow===!0),B=y(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),r=y(()=>{const n={...q.splitAttrs.listeners.value,onInput:v,onPaste:m,onChange:h,onBlur:K,onFocus:se};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=j,$.value===!0&&(n.onKeydown=P,n.onClick=A),e.autogrow===!0&&(n.onAnimationend=M),n}),a=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Z.value,...q.splitAttrs.attributes.value,id:q.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});D(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),D(()=>e.modelValue,n=>{if($.value===!0){if(R===!0&&(R=!1,String(n)===c))return;I(n)}else E.value!==n&&(E.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Q(l)}),D(()=>e.autogrow,n=>{n===!0?Q(l):p.value!==null&&u.rows>0&&(p.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Q(l)});function s(){be(()=>{const n=document.activeElement;p.value!==null&&p.value!==n&&(n===null||n.id!==q.targetUid.value)&&p.value.focus({preventScroll:!0})})}function o(){p.value!==null&&p.value.select()}function m(n){if($.value===!0&&e.reverseFillMask!==!0){const V=n.target;N(V,V.selectionStart,V.selectionEnd)}t("paste",n)}function v(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const V=n.target.value;if(n.target.qComposing===!0){d.value=V;return}if($.value===!0)I(V,!1,n.inputType);else if(g(V),B.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:L}=n.target;U!==void 0&&L!==void 0&&Q(()=>{n.target===document.activeElement&&V.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,L)})}e.autogrow===!0&&l()}function M(n){t("animationend",n),l()}function g(n,V){C=()=>{b=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,V===!0&&(R=!0),t("update:modelValue",n),Q(()=>{c===n&&(c=NaN)})),C=void 0},e.type==="number"&&(x=!0,d.value=n),e.debounce!==void 0?(b!==null&&clearTimeout(b),d.value=n,b=setTimeout(C,e.debounce)):C()}function l(){requestAnimationFrame(()=>{const n=p.value;if(n!==null){const V=n.parentNode.style,{scrollTop:U}=n,{overflowY:L,maxHeight:T}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),Y=L!==void 0&&L!=="scroll";Y===!0&&(n.style.overflowY="hidden"),V.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",Y===!0&&(n.style.overflowY=parseInt(T,10)<n.scrollHeight?"auto":"hidden"),V.marginBottom="",n.scrollTop=U}})}function h(n){j(n),b!==null&&(clearTimeout(b),b=null),C!==void 0&&C(),t("change",n.target.value)}function K(n){n!==void 0&&se(n),b!==null&&(clearTimeout(b),b=null),C!==void 0&&C(),x=!1,R=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=E.value!==void 0?E.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:E.value!==void 0?E.value:""}ne(()=>{K()}),ie(()=>{e.autogrow===!0&&l()}),Object.assign(q,{innerValue:E,fieldClass:y(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:p,emitValue:g,hasValue:z,floatingLabel:y(()=>z.value===!0&&(e.type!=="number"||isNaN(E.value)===!1)||ue(e.displayValue)),getControl:()=>S(w.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...r.value,...e.type!=="file"?{value:k()}:H.value}),getShadowControl:()=>S("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[S("span",{class:"invisible"},k()),S("span",e.shadowText)])});const F=We(q);return Object.assign(i,{focus:s,select:o,getNativeElement:()=>p.value}),pe(i,"nativeEl",()=>p.value),F}});const mt=Fe({__name:"GenericInput",props:{type:null,label:null},emits:["inputChange"],setup(e,{emit:t}){const u=e,{type:i,label:f}=Ee(u),d=O(""),c=/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;return(x,R)=>(Be(),$e(it,{onKeyup:R[0]||(R[0]=b=>t("inputChange",d.value)),type:J(i),label:J(f),"label-color":"negative",modelValue:d.value,"onUpdate:modelValue":R[1]||(R[1]=b=>d.value=b),rules:J(i)==="email"?[b=>c.test(b)||"Escriba un email correcto"]:[b=>b&&b.length>3||J(f)]},null,8,["type","label","modelValue","rules"]))}});export{mt as _};
