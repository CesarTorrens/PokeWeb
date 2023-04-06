import{Q as u}from"./QPage.47656508.js";import{api as b}from"./axios.1162aade.js";import{B as x,a as g,D as n,E as h,F as k,a4 as f,L as e,I as i,M as d,K as r,O as c,P as l}from"./index.5e0d6ce9.js";import{u as q}from"./pokemon.store.a9dbb73b.js";import"./render.5082e1c5.js";const v={class:"page"},y={class:"container shadow-5 rounded-borders"},P={class:"bg-red-1 shadow-4 img-container q-mb-xs rounded-borders"},w=["src","alt"],B={class:"q-mt-none q-mb-xs text-negative"},D={class:"container-stats"},E={class:"container2"},F={class:"flex bg-blue rounded-borders q-px-sm text-white"},S=e("p",{class:"q-ma-none"},"Base experience:",-1),$={class:"text-subtitle1 q-ma-none"},C={class:"flex bg-orange rounded-borders q-px-sm text-white"},L=e("p",{class:"q-ma-none"},"Abilities:",-1),M={class:"flex bg-pink rounded-borders q-px-sm text-white"},Q=e("p",{class:"q-ma-none"},"Forms:",-1),A={class:"flex bg-purple rounded-borders q-px-sm text-white"},I=e("p",{class:"q-ma-none"},"Types:",-1),j=x({__name:"DetailsPage",setup(K){const s=q(),p=f();return g(async()=>{const m=p.params.pokemon,{data:t}=await b.get(`pokemon/${m}`);await s.addPokemon({name:t.name,baseExperience:t.base_experience,abilities:t.abilities,forms:t.forms,id:t.id,sprites:t.sprites,stats:t.stats,types:t.types})}),(m,t)=>(n(),h(u,{padding:""},{default:k(()=>{var _;return[e("div",v,[e("div",y,[e("div",P,[e("img",{src:(_=i(s).getPokemon.sprites)==null?void 0:_.front_default,alt:i(s).getPokemon.name},null,8,w),e("h4",B,d(i(s).getPokemon.name),1)]),e("div",D,[e("div",E,[e("div",F,[S,e("p",$,d(i(s).getPokemon.baseExperience),1)]),e("div",C,[L,e("div",null,[(n(!0),r(l,null,c(i(s).getPokemon.abilities,(o,a)=>(n(),r("span",{key:a,class:"text-subtitle1"},d(o.ability.name),1))),128))])]),e("div",M,[Q,(n(!0),r(l,null,c(i(s).getPokemon.forms,(o,a)=>(n(),r("span",{key:a,class:"text-subtitle1"},d(o.name),1))),128))]),e("div",A,[I,(n(!0),r(l,null,c(i(s).getPokemon.types,(o,a)=>(n(),r("span",{key:a,class:"text-subtitle1"},d(o.type.name),1))),128))]),(n(!0),r(l,null,c(i(s).getPokemon.stats,o=>{var a;return n(),r("p",{class:"q-ma-none stats bg-green rounded-borders q-px-sm text-white",key:(a=o.stat)==null?void 0:a.name},d(`${o.stat.name}: ${o.base_stat} `),1)}),128))])])])])]}),_:1}))}});export{j as default};