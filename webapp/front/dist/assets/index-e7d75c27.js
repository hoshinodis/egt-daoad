import{u as a,r as f,s as b,b as l,F as w,j as t,a as L,e as k,f as P,g as D,h as G,d as I,i as E,k as O}from"./index-e3ebe26f.js";import{u as A,B as S,C as j,H as _}from"./index-d47cff8a.js";import{T as N,C as R,g as V,e as y,O as v,S as B,V as F,f as $,M as H,a as U,b as J,c as W,d as q,h as z}from"./index-1b179f80.js";const K="/assets/voting-list-of-creatives-aa396a27.svg",Q=()=>{const p=a(e=>e.app.ADsGTVP);a(e=>e.app.address),a(e=>e.app.siteList),a(e=>e.app.isAdvertiser);const d=a(e=>e.app.daoContract),n=a(e=>e.app.endDate),h=e=>async(r,x)=>{Math.floor(new Date().getTime()/1e3)+n*60;try{const o=await V();await(await y(d).vote(Number(e),r,x,{gasLimit:5e6,gasPrice:o})).wait(),alert("Vote Successfully")}catch(o){console.log("Err: ",o)}},m=A(),u=a(e=>e.app.advertiserList),i=a(e=>e.app.contractAdvertiserList),g=e=>e===1?"passed":e===2?"rejected":"process";return f.useEffect(()=>{fetch("/api/creatives").then(e=>{e.text().then(r=>m(b(Array(r))))}).catch(()=>alert("something went wrong"))},[]),l(w,{children:[t(N,{className:"my-8",src:K,alt:"my creative"}),t("div",{className:"flex flex-col gap-12",children:i.map((e,r)=>t(R,{id:e.id,createdAt:e.createdAt,expires:e.endAt,link:"https://example.com",image:u[r].img,status:g(u[r].status),ok:e.agreeVoteAmount,ng:e.rejectVoteAmount,maxVp:p,onVote:h(e.id)},e.id))})]})},X="/assets/gt-b4539d83.svg",Y="/assets/publisher-overview-7c397cd6.svg",Z=()=>{const p=a(e=>e.app.MeGTVP),d=a(e=>e.app.rewardMeAmount),n=f.useMemo(()=>d.toLocaleString(),[d]),h=a(e=>e.app.stakingMeTokenBalance),m=f.useMemo(()=>h.toLocaleString(),[h]),u=e=>{alert(`stake: ${e}`)},i=a(e=>e.app.MeGTVP),g=a(e=>e.app.MeGTVPTime);return l(w,{children:[t(N,{className:"my-8",src:Y,alt:"advertiser overview"}),l("div",{className:"flex gap-12",children:[t(v,{className:"h-48 flex-1",title:"MeGT",icon:X,children:t("p",{className:"text-48-bold text-neutral-10",children:n})}),t(v,{className:"h-48 flex-1",type:"publisher",title:"Staked MeGT",icon:B,onStake:u,maxVp:p,children:t("p",{className:"text-48-bold text-neutral-10",children:m})}),t(v,{className:"h-48 flex-1",title:"Voting Power (AD)",icon:F,children:l("div",{children:[t("p",{className:"text-48-bold text-neutral-10 inline",children:`${i}`}),t("p",{className:"text-28-semi text-neutral-40 inline",children:" / 100 VP"})]})}),t(v,{className:"h-48 flex-1",title:"VP Regen Speed",icon:$,children:l("div",{children:[t("p",{className:"text-48-bold text-neutral-10 inline",children:`${g}`}),t("p",{className:"text-28-semi text-neutral-40 inline",children:" VP / day"})]})})]})]})},ee="/assets/new-site-b7987d2e.svg",te=({className:p,onClick:d,isOpen:n,onClose:h,onCreate:m,children:u})=>{const[i,g]=f.useState(""),e=o=>g(o.target.value),r=o=>{g(""),h(o)};return l(w,{children:[t(S,{className:p,color:"secondary",onClick:d,children:u}),l(H,{isOpen:n,onClose:r,children:[t(U,{className:"h-14",children:t(N,{src:ee,alt:"new site"})}),t(J,{children:t(W,{label:"Site URL",value:i,onChange:e,placeholder:"Please enter site URL here"})}),l(q,{children:[t(S,{color:"neutral",onClick:r,children:"CANCEL"}),t(S,{color:"secondary",onClick:o=>{m(i),r(o)},children:"CREATE"})]})]})]})},se="/assets/my-sites-e9cbebca.svg",ae=()=>{const p=a(s=>s.app.MeGTVP),[d,n]=f.useState(!1),h=()=>n(!0),m=()=>n(!1),u=a(s=>s.app.address),i=a(s=>s.app.siteList),g=a(s=>s.app.isAdvertiser),e=a(s=>s.app.daoContract),r=a(s=>s.app.endDate),x=a(s=>s.app.contractSiteList),o=async s=>{const c=Math.floor(new Date().getTime()/1e3)+r*60;try{await fetch("/api/sites",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i.length+1,wallet_address:u,url:s})});const C=await V();await(await y(e).createContent(g,c,s,{gasLimit:5e6,gasPrice:C})).wait(),alert("Create Successfully")}catch(C){console.log("Err: ",C)}},T=A();L.useEffect(()=>{fetch("/api/sites").then(s=>{s.text().then(c=>T(k(Array(c))))}).catch(()=>alert("something went wrong"))},[]);const M=s=>s===1?"passed":s===2?"rejected":"process";return l(w,{children:[l("div",{className:"flex justify-between",children:[t(N,{className:"my-8",src:se,alt:"voting list of sites"}),t("div",{className:"flex items-center",children:t(te,{onClick:h,isOpen:d,onClose:m,onCreate:o,children:"NEW SITE"})})]}),t("div",{className:"flex flex-col gap-12",children:x.map((s,c)=>t(z,{id:s[c].id,url:i.length>c?i[c].url:"",createdAt:new Date(s[c].createdAt*1e3),status:i.length>c?M(i[c].status):"process",expires:new Date(s[c].endAt*1e3),ok:s[c].agreeVoteAmount,ng:s[c].rejectVoteAmount,maxVp:p},s[c].id))})]})},le=()=>{const p=a(m=>m.app.address),d=P(),n=A();return l(j,{children:[t(_,{address:p,current:"publisher",onDisconnect:()=>{d("/welcome"),n(D(!0)),n(G(!1)),n(I(!1)),n(E(!1)),n(O(""))}}),t(Z,{}),l("div",{className:"flex gap-12",children:[t("div",{className:"flex-[2_1_0%]",children:t(Q,{})}),t("div",{className:"flex-[3_1_0%]",children:t(ae,{})})]})]})};export{le as Publisher};
