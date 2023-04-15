import{j as r,c as n,D as d,L as x,R as o,E as m,r as h,b as i}from"./index-6d5836d0.js";const l=({onClick:t,className:e,children:a,color:s="neutral"})=>r("button",{type:"button",className:n("text-18-wide cursor-pointer py-[12px] px-[36px] text-neutral-100 shadow-[0px_1px_2px_rgba(0,0,0,0.2)]",s==="primary"&&"bg-primary-main",s==="secondary"&&"bg-secondary",s==="neutral"&&"bg-neutral-40",e),onClick:t,children:a}),g={sm:"h-20 p-3",md:"h-36 p-6",lg:"h-56 p-9"},N=({src:t,alt:e,size:a,className:s})=>r("img",{src:t,className:n(g[a],"will-change-[filter]",s),alt:e}),b=({href:t,newTab:e,className:a,children:s})=>{const c={className:n(a),target:e?"_blank":void 0,rel:e?"noreferrer":void 0};return d(t)?r("a",{href:t,...c,children:s}):r(x,{to:t,...c,children:s})};function p(t=o){const e=t===o?m:()=>h.useContext(t);return function(){const{store:s}=e();return s}}const f=p();function v(t=o){const e=t===o?f:p(t);return function(){return e().dispatch}}const E=v(),k=({className:t,children:e})=>r("div",{className:n("px-12",t),children:e}),u=({className:t,children:e,current:a,href:s})=>r(b,{className:n("text-24-wide pb-1 text-neutral-100 ",a?"border-b-4 border-neutral-100":"text-primary-40 hover:text-neutral-100",t),href:s,children:e}),C="/assets/logo-337d0205.svg",L=({className:t,address:e,current:a,onConnect:s,onDisconnect:c})=>i("div",{className:n("flex justify-between",t),children:[r(N,{src:C,alt:"logo",size:"sm"}),e&&i("div",{className:"flex gap-10",children:[r("div",{className:"grid place-items-center",children:r(u,{current:a==="advertiser",href:"/advertiser",children:"ADVERTISER"})}),r("div",{className:"grid place-items-center",children:r(u,{current:a==="publisher",href:"/publisher",children:"PUBLISHER"})})]}),i("div",{className:"flex items-center justify-end gap-4",children:[e&&r("p",{className:"text-18-semi text-neutral-100",children:`${e.slice(0,6)} .... ${e.slice(-4)}`}),e&&c?r(l,{color:"neutral",onClick:c,children:"DISCONNECT"}):s&&r(l,{color:"secondary",onClick:s,children:"CONNECT WALLET"})]})]});export{l as B,k as C,L as H,N as I,E as u};
