import{e as t,g as s,F as p,j as e,h as f,l as S}from"./index-d404b5ff.js";import{C as N,H as C}from"./index-a9aaac62.js";import{T as u,C as w,O as m,S as M,V as T,d as b,F as D,M as k,a as y,b as V,c as A,e as L,f as O}from"./voting-list-of-sites-cf1bd9cf.js";import{B as v}from"./index-36d9bdb7.js";import"./index-795709d2.js";const I="/assets/voting-list-of-creatives-aa396a27.svg",P=()=>{const[n]=t.useState([{id:"0001",status:"process",image:"https://picsum.photos/500/200",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),expires:new Date(new Date().getTime()+Math.random()*1e6),ok:50,ng:50,onVote:()=>{alert("vote")}},{id:"0002",status:"passed",image:"https://picsum.photos/500/200",createdAt:new Date(Math.floor(Math.random()*new Date().getTime()))},{id:"0003",status:"rejected",image:"https://picsum.photos/500/200",createdAt:new Date(Math.floor(Math.random()*new Date().getTime()))}]);return s(p,{children:[e(u,{className:"my-8",src:I,alt:"my creative"}),e("div",{className:"flex flex-col gap-12",children:n.map(a=>e(w,{...a},a.id))})]})},j="/assets/gt-b4539d83.svg",E="/assets/publisher-overview-7c397cd6.svg",F=()=>{const[n]=t.useState(80),[a]=t.useState(1234),r=t.useMemo(()=>a.toLocaleString(),[a]),[l]=t.useState(3222),c=t.useMemo(()=>l.toLocaleString(),[l]),i=x=>{alert(`stake: ${x}`)},[d]=t.useState(80),[o]=t.useState(1.4);return s(p,{children:[e(u,{className:"my-8",src:E,alt:"advertiser overview"}),s("div",{className:"flex gap-12",children:[e(m,{className:"h-48 flex-1",title:"MeGT",icon:j,children:e("p",{className:"text-48-bold text-neutral-10",children:r})}),e(m,{className:"h-48 flex-1",type:"publisher",title:"Staked MeGT",icon:M,onStake:i,maxVp:n,children:e("p",{className:"text-48-bold text-neutral-10",children:c})}),e(m,{className:"h-48 flex-1",title:"Voting Power (AD)",icon:T,children:s("div",{children:[e("p",{className:"text-48-bold text-neutral-10 inline",children:`${d}`}),e("p",{className:"text-28-semi text-neutral-40 inline",children:" / 100 VP"})]})}),e(m,{className:"h-48 flex-1",title:"VP Regen Speed",icon:b,children:s("div",{children:[e("p",{className:"text-48-bold text-neutral-10 inline",children:`${o}`}),e("p",{className:"text-28-semi text-neutral-40 inline",children:" VP / day"})]})})]})]})},G=({className:n,label:a,placeholder:r,value:l,onChange:c})=>{const i=t.useId();return e(D,{className:n,label:a,htmlFor:i,children:e("input",{type:"text",id:i,className:f("text-18-medium placeholder:text-18-medium placeholder:text-neutral-80 bg-primary-main rounded border border-solid border-neutral-100 p-1 text-neutral-100 outline-none"),placeholder:r,value:l,onChange:c})})},R="/assets/new-site-b7987d2e.svg",_=({className:n,onClick:a,isOpen:r,onClose:l,onCreate:c,children:i})=>{const[d,o]=t.useState(""),x=h=>o(h.target.value),g=h=>{o(""),l(h)};return s(p,{children:[e(v,{className:n,color:"secondary",onClick:a,children:i}),s(k,{isOpen:r,onClose:g,children:[e(y,{className:"h-14",children:e(u,{src:R,alt:"new site"})}),e(V,{children:e(G,{label:"Site URL",value:d,onChange:x,placeholder:"Please enter site URL here"})}),s(A,{children:[e(v,{color:"neutral",onClick:g,children:"CANCEL"}),e(v,{color:"secondary",onClick:h=>{c(d),g(h)},children:"CREATE"})]})]})]})},$=()=>{const[n]=t.useState(80),[a]=t.useState([{id:"0001",status:"process",url:"https://example.com",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),ok:50,ng:50},{id:"0002",status:"passed",url:"https://example.com",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),ok:50,ng:50,onCopyTag:()=>alert("copy")},{id:"0003",status:"rejected",url:"https://example.com",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),ok:50,ng:50}]),[r,l]=t.useState(!1);return s(p,{children:[s("div",{className:"flex justify-between",children:[e(u,{className:"my-8",src:L,alt:"voting list of sites"}),e("div",{className:"flex items-center",children:e(_,{onClick:()=>l(!0),isOpen:r,onClose:()=>l(!1),onCreate:o=>{alert(`create: ${o}`)},children:"NEW SITE"})})]}),e("div",{className:"flex flex-col gap-12",children:a.map(o=>e(O,{...o,maxVp:n},o.id))})]})},J=()=>{const[n]=t.useState("0x1234567890123456789012345678901234567890"),a=S();return s(N,{children:[e(C,{address:n,current:"publisher",onDisconnect:()=>{a("/welcome")}}),e(F,{}),s("div",{className:"flex gap-12",children:[e("div",{className:"flex-[2_1_0%]",children:e(P,{})}),e("div",{className:"flex-[3_1_0%]",children:e($,{})})]})]})};export{J as Publisher};
