import"./index-BhXIn1xI.js";/* empty css                *//* empty css                  *//* empty css                 *//* empty css                   */import{av as m,S as _,A as f,af as g}from"./element-Dq93P1KG.js";import{v as y,y as w,O as n,F as c,x as E,K as l}from"./vue-IlT-u8Hz.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-Efq8vKnF.js";const x={lock:!0,text:"Loading..."},u=(t,e={})=>{let r;return async(...a)=>{try{return r=m.service({...x,...e}),await t(...a)}finally{r.close()}}},A={code:0,data:{list:[]},message:"Request successful"};function S(t){return new Promise(e=>{setTimeout(()=>{e({...A,data:{list:t}})},1e3)})}function v(){return new Promise((t,e)=>{setTimeout(()=>{e(new Error("An error occurred"))},1e3)})}const C={class:"app-container"},k=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,L=y({__name:"use-fullscreen-loading",setup(t){const e={text:"About to encounter an error...",background:"#F56C6C20",svg:k,svgViewBox:"-10, -10, 50, 50"};async function r(){const o=await u(S)([1,2,3]);`${o.message}${o.data.list.toString()}`}async function a(){try{await u(v,e)()}catch(o){console.error(o.message)}}return(o,s)=>{const p=g,i=f,d=_;return E(),w("div",C,[n(p,{title:"Example Description",type:"primary",description:"Pass the function to be executed to the composable, which will automatically show fullscreen loading and hide it when execution completes","show-icon":""}),n(d,{header:"Example",shadow:"never"},{default:c(()=>[n(i,{type:"primary",onClick:r},{default:c(()=>s[0]||(s[0]=[l(" Query Success ")])),_:1,__:[0]}),n(i,{type:"danger",onClick:a},{default:c(()=>s[1]||(s[1]=[l(" Query Error ")])),_:1,__:[1]})]),_:1})])}}}),I=h(L,[["__scopeId","data-v-6a6d29f9"]]);export{I as default};
