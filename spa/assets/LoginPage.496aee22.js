import{b as w}from"./QBtn.a7e16a37.js";import{Q as x}from"./QPage.47656508.js";import{B as b,r as n,a as k,C as q,D as C,E as I,F as m,G as B,L as s,H as l,w as y,Z as L,J as d}from"./index.5e0d6ce9.js";import{_ as g}from"./GenericInput.8ca13b97.js";import{u as S}from"./user.store.4c11baf6.js";import"./render.5082e1c5.js";import"./use-dark.cb3c68ad.js";import"./uid.42677368.js";const U={class:"row position-container"},F={class:"col-12 col-sm-9 col-md-6 col-lg-4 q-mx-auto rounded-borders login-container q-pa-sm q-py-xl text-center"},N=s("img",{src:"https://w7.pngwing.com/pngs/272/921/png-transparent-pokemon-pokeball-pokemon-go-pokemon-pokeball.png",alt:"pokebola"},null,-1),P=s("h6",{class:"q-ma-none q-mt-md text-bold"},"Inicia sesi\xF3n",-1),Q={class:"input-width"},T={class:"text-negative q-mt-md"},V={class:"q-mt-md"},j=b({__name:"LoginPage",setup(D){const o=n(""),r=n(""),t=n(!1),i=n(!1),_=/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,p=B(),u=S();k(()=>{u.getUserLog.name&&p.push("/")});const v=()=>{t.value=!0,i.value=!1;const e=u.getUsers.filter(a=>a.email===o.value&&a.password===r.value);e.length>0?setTimeout(()=>{u.logUser(e[0]),t.value=!1,p.push("/")},2e3):setTimeout(()=>{t.value=!1,i.value=!0},2e3)},f=()=>{if(!_.test(o.value)||o.value===""||r.value===""||t.value)return!0};return(h,e)=>{const a=q("router-link");return C(),I(x,{padding:""},{default:m(()=>[s("section",U,[s("div",F,[N,P,s("div",Q,[l(g,{label:"Ingrese su email",type:"email",onInputChange:e[0]||(e[0]=c=>o.value=c)}),l(g,{label:"Ingrese su contrase\xF1a",type:"password",onInputChange:e[1]||(e[1]=c=>r.value=c)}),l(w,{disable:t.value||f(),loading:t.value,onClick:v,class:"q-mt-lg",color:"negative",label:"Iniciar Sesi\xF3n"},null,8,["disable","loading"])]),y(s("span",T,"Sus datos son invalidos",512),[[L,i.value]]),s("span",V,[d("No tienes una cuenta? "),l(a,{to:"/register"},{default:m(()=>[d("Registrate!")]),_:1})])])])]),_:1})}}});export{j as default};
