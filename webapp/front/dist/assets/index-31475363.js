import{e as d,b as n,j as s,J as h,h as r}from"./index-6d5836d0.js";import{u,C as p,H as w}from"./index-233f1a73.js";import{l as i}from"./index-c2600cc6.js";const f="/assets/title-c70006b0.svg",{ethereum:t}=window;console.log(t);const g="0x81d33b63457C311F33241b1e9A40d3DA46237478",x=()=>{const o=u(),c=async()=>{if(t)try{if(t.networkVersion!==1442)try{await t.request({method:"wallet_switchEthereumChain",params:[{chainId:i(1442)}]})}catch(a){a!==null&&typeof a=="object"&&"code"in a&&a.code===4902&&await t.request({method:"wallet_addEthereumChain",params:[{chainName:"Mumbai",chainId:i(1442),rpcUrls:["https://rpc.ankr.com/polygon_mumbai"]}]})}const e=await t.request({method:"eth_requestAccounts"});e[0]&&o(h(e[0])),g.toLowerCase()===e[0].toLowerCase()?o(r(!0)):o(r(!1))}catch{console.log("Error connecting...")}else window.open("https://metamask.io"),alert("Meta Mask not detected")},l=d(),m=()=>{l("/advertiser"),c().catch(e=>console.log(e))};return t.on("accountsChanged",()=>{c().catch(e=>console.log(e))}),n(p,{className:"relative",children:[s(w,{className:"relative z-10",onConnect:m}),s("div",{className:"absolute top-0 left-0 grid h-screen w-screen place-items-center",children:n("div",{className:"relative mt-40 flex w-3/4 flex-col",children:[s("img",{className:"ml-[8vw] object-contain",src:f,alt:"daoad"}),s("p",{className:"text-24-medium absolute bottom-[30%] text-neutral-100",children:"A fair and impartial advertising platform"})]})})]})};export{x as Welcome};