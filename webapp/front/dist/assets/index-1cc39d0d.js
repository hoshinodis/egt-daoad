import{u as a,r as f,s as M,b as o,F as N,j as s,a as L,e as k,f as C,g as D,h as P,d as j,i as G,k as I}from"./index-629840ba.js";import{u as V,B as b,C as O,H as E}from"./index-abfe261c.js";import{T as w,C as _,g as S,e as y,O as v,S as R,V as U,f as B,M as F,a as $,b as H,c as J,d as W,h as q,j as z}from"./my-sites-5a322c4f.js";const K="/assets/voting-list-of-creatives-aa396a27.svg",Q=()=>{const p=a(e=>e.app.ADsGTVP);a(e=>e.app.address),a(e=>e.app.siteList),a(e=>e.app.isAdvertiser);const r=a(e=>e.app.daoContract),n=a(e=>e.app.endDate),h=e=>async(i,x)=>{Math.floor(new Date().getTime()/1e3)+n*60;try{const l=await S();await(await y(r).vote(Number(e),i,x,{gasLimit:5e6,gasPrice:l})).wait(),alert("Vote Successfully")}catch(l){console.log("Err: ",l)}},m=V(),d=a(e=>e.app.advertiserList),c=a(e=>e.app.contractAdvertiserList),u=e=>e===1?"passed":e===2?"rejected":"process";return f.useEffect(()=>{fetch("/api/creatives").then(e=>{e.text().then(i=>m(M(JSON.parse(i))))}).catch(()=>alert("something went wrong"))},[]),o(N,{children:[s(w,{className:"my-8",src:K,alt:"my creative"}),s("div",{className:"flex flex-col gap-12",children:c.map((e,i)=>s(_,{id:e.id!==void 0?e.id.toNumber().toString():e.id,createdAt:new Date(e.createdAt!==void 0?e.createdAt.toNumber()*1e3:0),expires:new Date(e.endAt!==void 0?e.endAt.toNumber()*1e3:0),link:e.siteUrl,image:d.length>i?d[i].img:"image",status:d.length>i?u(d[i].status):"process",ok:e.agreeVoteAmount!==void 0?e.agreeVoteAmount.toNumber():0,ng:e.rejectVoteAmount!==void 0?e.rejectVoteAmount.toNumber():0,maxVp:p,onVote:h(e.id!==void 0?e.id.toNumber().toString():e.id)},e.id!==void 0?e.id.toNumber():e.id))})]})},X="/assets/gt-b4539d83.svg",Y="/assets/publisher-overview-7c397cd6.svg",Z=()=>{const p=a(e=>e.app.MeGTVP),r=a(e=>e.app.rewardMeAmount),n=f.useMemo(()=>r.toLocaleString(),[r]),h=a(e=>e.app.stakingMeTokenBalance),m=f.useMemo(()=>h.toLocaleString(),[h]),d=e=>{alert(`stake: ${e}`)},c=a(e=>e.app.MeGTVP),u=a(e=>e.app.MeGTVPTime);return o(N,{children:[s(w,{className:"my-8",src:Y,alt:"advertiser overview"}),o("div",{className:"flex gap-12",children:[s(v,{className:"h-48 flex-1",title:"MeGT",icon:X,children:s("p",{className:"text-48-bold text-neutral-10",children:n})}),s(v,{className:"h-48 flex-1",type:"publisher",title:"Staked MeGT",icon:R,onStake:d,maxVp:p,children:s("p",{className:"text-48-bold text-neutral-10",children:m})}),s(v,{className:"h-48 flex-1",title:"Voting Power (AD)",icon:U,children:o("div",{children:[s("p",{className:"text-48-bold text-neutral-10 inline",children:`${c}`}),s("p",{className:"text-28-semi text-neutral-40 inline",children:" / 100 VP"})]})}),s(v,{className:"h-48 flex-1",title:"VP Regen Speed",icon:B,children:o("div",{children:[s("p",{className:"text-48-bold text-neutral-10 inline",children:`${u}`}),s("p",{className:"text-28-semi text-neutral-40 inline",children:" VP / day"})]})})]})]})},ee="/assets/new-site-b7987d2e.svg",te=({className:p,onClick:r,isOpen:n,onClose:h,onCreate:m,children:d})=>{const[c,u]=f.useState(""),e=l=>u(l.target.value),i=l=>{u(""),h(l)};return o(N,{children:[s(b,{className:p,color:"secondary",onClick:r,children:d}),o(F,{isOpen:n,onClose:i,children:[s($,{className:"h-14",children:s(w,{src:ee,alt:"new site"})}),s(H,{children:s(J,{label:"Site URL",value:c,onChange:e,placeholder:"Please enter site URL here"})}),o(W,{children:[s(b,{color:"neutral",onClick:i,children:"CANCEL"}),s(b,{color:"secondary",onClick:l=>{m(c),i(l)},children:"CREATE"})]})]})]})},se=()=>{const p=a(t=>t.app.MeGTVP),[r,n]=f.useState(!1),h=()=>n(!0),m=()=>n(!1),d=a(t=>t.app.address),c=a(t=>t.app.siteList);a(t=>t.app.isAdvertiser);const u=a(t=>t.app.daoContract),e=a(t=>t.app.endDate),i=a(t=>t.app.contractSiteList),x=async t=>{const g=Math.floor(new Date().getTime()/1e3)+e*60;try{await fetch("/api/sites",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c.length+1,wallet_address:d,url:t})});const A=await S();await(await y(u).createContent(!1,g,t,{gasLimit:5e6,gasPrice:A})).wait(),alert("Create Successfully")}catch(A){console.log("Err: ",A)}},l=V();L.useEffect(()=>{fetch("/api/sites").then(t=>{t.text().then(g=>l(k(Array(g))))}).catch(()=>alert("something went wrong"))},[]);const T=t=>t===1?"passed":t===2?"rejected":"process";return o(N,{children:[o("div",{className:"flex justify-between",children:[s(w,{className:"my-8",src:q,alt:"voting list of sites"}),s("div",{className:"flex items-center",children:s(te,{onClick:h,isOpen:r,onClose:m,onCreate:x,children:"NEW SITE"})})]}),s("div",{className:"flex flex-col gap-12",children:i.map((t,g)=>s(z,{id:t.id!==void 0?t.id.toNumber().toString():t.id,url:t.siteUrl,createdAt:new Date(t.createdAt!==void 0?t.createdAt.toNumber()*1e3:0),status:c.length>g?T(c[g].status):"process",expires:new Date(t.endAt!==void 0?t.endAt.toNumber()*1e3:0),ok:t.agreeVoteAmount!==void 0?t.agreeVoteAmount.toNumber():0,ng:t.rejectVoteAmount!==void 0?t.rejectVoteAmount.toNumber():0,maxVp:p},t.id!==void 0?t.id.toNumber():t.id))})]})},le=()=>{const p=a(m=>m.app.address),r=C(),n=V();return o(O,{children:[s(E,{address:p,current:"publisher",onDisconnect:()=>{r("/"),n(D(!0)),n(P(!1)),n(j(!1)),n(G(!1)),n(I(""))}}),s(Z,{}),o("div",{className:"flex gap-12",children:[s("div",{className:"flex-[2_1_0%]",children:s(Q,{})}),s("div",{className:"flex-[3_1_0%]",children:s(se,{})})]})]})};export{le as Publisher};
