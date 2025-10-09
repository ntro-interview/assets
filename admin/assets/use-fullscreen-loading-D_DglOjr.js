import"./index-D6iJnoTu.js";/* empty css                *//* empty css                  *//* empty css                 *//* empty css                   */import{ab as _,a8 as f,S as g,z as y,E as l}from"./element-BDjz4uA2.js";import{v as E,x as w,O as n,F as c,K as u,y as h}from"./vue-f66oTpFP.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-CitsnNxL.js";const S={lock:!0,text:"Loading..."},p=(t,e={})=>{let r;return async(...a)=>{try{return r=_.service({...S,...e}),await t(...a)}finally{r.close()}}},A={code:0,data:{list:[]},message:"Request successful"};function C(t){return new Promise(e=>{setTimeout(()=>{e({...A,data:{list:t}})},1e3)})}function v(){return new Promise((t,e)=>{setTimeout(()=>{e(new Error("An error occurred"))},1e3)})}const b={class:"app-container"},k=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,L=E({__name:"use-fullscreen-loading",setup(t){const e={text:"About to encounter an error...",background:"#F56C6C20",svg:k,svgViewBox:"-10, -10, 50, 50"};async function r(){const o=await p(C)([1,2,3]);l.success(`${o.message} with parameters ${o.data.list.toString()}`)}async function a(){try{await p(v,e)()}catch(o){l.error(o.message)}}return(o,s)=>{const d=f,i=y,m=g;return h(),w("div",b,[n(d,{title:"Example Description",type:"primary",description:"Pass the function to be executed to the composable, which will automatically show fullscreen loading and hide it when execution completes","show-icon":""}),n(m,{header:"Example",shadow:"never"},{default:c(()=>[n(i,{type:"primary",onClick:r},{default:c(()=>s[0]||(s[0]=[u(" Query Success ")])),_:1,__:[0]}),n(i,{type:"danger",onClick:a},{default:c(()=>s[1]||(s[1]=[u(" Query Error ")])),_:1,__:[1]})]),_:1})])}}}),M=x(L,[["__scopeId","data-v-fd6aa90d"]]);export{M as default};
