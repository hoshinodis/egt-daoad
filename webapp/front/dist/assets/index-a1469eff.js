import{u as a,r as f,s as M,b as c,F as w,j as t,a as b,e as k,f as P,g as D,h as G,d as I,i as O,k as E}from"./index-5bfbd9f0.js";import{u as A,B as C,C as j,H as _}from"./index-a79b2450.js";import{T as N,C as R,g as T,e as y,O as v,S as B,V as F,f as $,M as H,a as U,b as J,c as W,d as q,h as z,j as K}from"./voting-list-of-sites-2168d430.js";const Q="/assets/voting-list-of-creatives-aa396a27.svg",X=()=>{const d=a(e=>e.app.ADsGTVP);a(e=>e.app.address),a(e=>e.app.siteList),a(e=>e.app.isAdvertiser);const l=a(e=>e.app.daoContract),n=a(e=>e.app.endDate),p=e=>async(i,x)=>{Math.floor(new Date().getTime()/1e3)+n*60;try{const r=await T();await(await y(l).vote(Number(e),i,x,{gasLimit:5e6,gasPrice:r})).wait(),alert("Vote Successfully")}catch(r){console.log("Err: ",r)}},h=A(),m=a(e=>e.app.advertiserList),o=a(e=>e.app.contractAdvertiserList),u=e=>e===1?"passed":e===2?"rejected":"process";return f.useEffect(()=>{fetch("/api/creatives").then(e=>{e.text().then(i=>h(M(Array(i))))}).catch(()=>alert("something went wrong"))},[]),c(w,{children:[t(N,{className:"my-8",src:Q,alt:"my creative"}),t("div",{className:"flex flex-col gap-12",children:o.map((e,i)=>t(R,{id:e.id,createdAt:e.createdAt,expires:e.endAt,link:"https://example.com",image:m[i].img,status:u(m[i].status),ok:e.agreeVoteAmount,ng:e.rejectVoteAmount,maxVp:d,onVote:p(e.id)},e.id))})]})},Y="/assets/gt-b4539d83.svg",Z="/assets/publisher-overview-7c397cd6.svg",ee=()=>{const d=a(e=>e.app.MeGTVP),l=a(e=>e.app.rewardMeAmount),n=f.useMemo(()=>l.toLocaleString(),[l]),p=a(e=>e.app.stakingMeTokenBalance),h=f.useMemo(()=>p.toLocaleString(),[p]),m=e=>{alert(`stake: ${e}`)},o=a(e=>e.app.MeGTVP),u=a(e=>e.app.MeGTVPTime);return c(w,{children:[t(N,{className:"my-8",src:Z,alt:"advertiser overview"}),c("div",{className:"flex gap-12",children:[t(v,{className:"h-48 flex-1",title:"MeGT",icon:Y,children:t("p",{className:"text-48-bold text-neutral-10",children:n})}),t(v,{className:"h-48 flex-1",type:"publisher",title:"Staked MeGT",icon:B,onStake:m,maxVp:d,children:t("p",{className:"text-48-bold text-neutral-10",children:h})}),t(v,{className:"h-48 flex-1",title:"Voting Power (AD)",icon:F,children:c("div",{children:[t("p",{className:"text-48-bold text-neutral-10 inline",children:`${o}`}),t("p",{className:"text-28-semi text-neutral-40 inline",children:" / 100 VP"})]})}),t(v,{className:"h-48 flex-1",title:"VP Regen Speed",icon:$,children:c("div",{children:[t("p",{className:"text-48-bold text-neutral-10 inline",children:`${u}`}),t("p",{className:"text-28-semi text-neutral-40 inline",children:" VP / day"})]})})]})]})},te="/assets/new-site-b7987d2e.svg",se=({className:d,onClick:l,isOpen:n,onClose:p,onCreate:h,children:m})=>{const[o,u]=f.useState(""),e=r=>u(r.target.value),i=r=>{u(""),p(r)};return c(w,{children:[t(C,{className:d,color:"secondary",onClick:l,children:m}),c(H,{isOpen:n,onClose:i,children:[t(U,{className:"h-14",children:t(N,{src:te,alt:"new site"})}),t(J,{children:t(W,{label:"Site URL",value:o,onChange:e,placeholder:"Please enter site URL here"})}),c(q,{children:[t(C,{color:"neutral",onClick:i,children:"CANCEL"}),t(C,{color:"secondary",onClick:r=>{h(o),i(r)},children:"CREATE"})]})]})]})},ae=()=>{const d=a(s=>s.app.MeGTVP),[l,n]=f.useState(!1),p=()=>n(!0),h=()=>n(!1),m=a(s=>s.app.address),o=a(s=>s.app.siteList),u=a(s=>s.app.isAdvertiser),e=a(s=>s.app.daoContract),i=a(s=>s.app.endDate),x=a(s=>s.app.contractSiteList),r=async s=>{const g=Math.floor(new Date().getTime()/1e3)+i*60;try{await fetch("/api/sites",{method:"POST",body:JSON.stringify({id:o.length+1,wallet_address:m,url:s})});const S=await T();await(await y(e).createContent(u,g,s,{gasLimit:5e6,gasPrice:S})).wait(),alert("Create Successfully")}catch(S){console.log("Err: ",S)}},V=A();b.useEffect(()=>{fetch("/api/sites").then(s=>{s.text().then(g=>V(k(Array(g))))}).catch(()=>alert("something went wrong"))},[]);const L=s=>s===1?"passed":s===2?"rejected":"process";return c(w,{children:[c("div",{className:"flex justify-between",children:[t(N,{className:"my-8",src:z,alt:"voting list of sites"}),t("div",{className:"flex items-center",children:t(se,{onClick:p,isOpen:l,onClose:h,onCreate:r,children:"NEW SITE"})})]}),t("div",{className:"flex flex-col gap-12",children:x.map((s,g)=>t(K,{id:s.id,url:o[g].url,createdAt:s.createdAt,status:L(o[g].status),expires:s.endAt,ok:s.agreeVoteAmount,ng:s.rejectVoteAmount,maxVp:d},s.id))})]})},le=()=>{const d=a(h=>h.app.address),l=P(),n=A();return c(j,{children:[t(_,{address:d,current:"publisher",onDisconnect:()=>{l("/welcome"),n(D(!0)),n(G(!1)),n(I(!1)),n(O(!1)),n(E(""))}}),t(ee,{}),c("div",{className:"flex gap-12",children:[t("div",{className:"flex-[2_1_0%]",children:t(X,{})}),t("div",{className:"flex-[3_1_0%]",children:t(ae,{})})]})]})};export{le as Publisher};