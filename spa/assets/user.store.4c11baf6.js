import{W as r}from"./index.5e0d6ce9.js";const t=r("user",{state:()=>({userData:[],userLog:{},navbar:!0}),getters:{getUsers(){return this.userData},getUserLog(){return this.userLog},getValueNavbar(){return this.navbar}},actions:{addUser(e){this.userData.push(e)},logUser(e){this.userLog=e},changeNavbar(e){this.navbar=e}}});export{t as u};