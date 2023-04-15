import{e as a,g as t,F as l,j as e}from"./index-56475e91.js";import{T as c,C as p,O as r,S as v,V as x,a as u,b as g,c as f,d as w,H as N}from"./voting-list-of-sites-f5806f82.js";import{B as S}from"./index-84b81442.js";const D="/assets/my-creatives-5ced28c6.svg",M=()=>{const[s]=a.useState([{id:"0001",status:"process",image:"https://picsum.photos/500/200",createdAt:new Date(Math.floor(Math.random()*new Date().getTime()))},{id:"0002",status:"passed",image:"https://picsum.photos/500/200",createdAt:new Date(Math.floor(Math.random()*new Date().getTime()))},{id:"0003",status:"rejected",image:"https://picsum.photos/500/200",createdAt:new Date(Math.floor(Math.random()*new Date().getTime()))}]);return t(l,{children:[t("div",{className:"flex justify-between",children:[e(c,{className:"my-8",src:D,alt:"my creative"}),e("div",{className:"flex items-center",children:e(S,{color:"secondary",onClick:()=>{alert("new creative")},children:"NEW CREATIVE"})})]}),e("div",{className:"flex flex-col gap-12",children:s.map(n=>e(p,{...n},n.id))})]})},T="/assets/ads-2c3ea67a.svg",A="/assets/advertiser-overview-c3c8352a.svg",C=()=>{const[s]=a.useState(8255),i=a.useMemo(()=>s.toLocaleString(),[s]),[n]=a.useState(4211),o=a.useMemo(()=>n.toLocaleString(),[n]),d=()=>{},[m]=a.useState(80),[h]=a.useState(1.4);return t(l,{children:[e(c,{className:"my-8",src:A,alt:"advertiser overview"}),t("div",{className:"flex gap-12",children:[e(r,{className:"h-48 flex-1",title:"ADsGT",icon:T,children:e("p",{className:"text-48-bold text-neutral-10",children:i})}),e(r,{className:"h-48 flex-1",title:"Staked ADsGT",icon:v,buttonLabel:"STAKE",onClick:d,children:e("p",{className:"text-48-bold text-neutral-10",children:o})}),e(r,{className:"h-48 flex-1",title:"Voting Power (AD)",icon:x,children:t("div",{children:[e("p",{className:"text-48-bold text-neutral-10 inline",children:`${m}`}),e("p",{className:"text-28-semi text-neutral-40 inline",children:" / 100 VP"})]})}),e(r,{className:"h-48 flex-1",title:"VP Regen Speed",icon:u,children:t("div",{children:[e("p",{className:"text-48-bold text-neutral-10 inline",children:`${h}`}),e("p",{className:"text-28-semi text-neutral-40 inline",children:" VP / day"})]})})]})]})},V=()=>{const[s]=a.useState([{id:"0001",status:"process",url:"https://example.com",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),ok:50,ng:50,expires:new Date(new Date().getTime()+Math.random()*1e6),onVote:()=>alert("vote")},{id:"0002",status:"passed",url:"https://example.com",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),ok:50,ng:50,onVote:()=>alert("vote")},{id:"0003",status:"rejected",url:"https://example.com",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),ok:50,ng:50,onVote:()=>alert("vote")}]);return t(l,{children:[e(c,{className:"my-8",src:g,alt:"voting list of sites"}),e("div",{className:"flex flex-col gap-12",children:s.map(i=>e(f,{...i},i.id))})]})},L=()=>t(w,{children:[e(N,{}),e(C,{}),t("div",{className:"flex gap-12",children:[e("div",{className:"flex-[2_1_0%]",children:e(M,{})}),e("div",{className:"flex-[3_1_0%]",children:e(V,{})})]})]});export{L as Advertiser};
