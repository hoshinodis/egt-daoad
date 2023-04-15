import{j as e,h as r,g as t,e as m,F as f}from"./index-55c39be5.js";import{L as M,I as T,B as x,C as g}from"./index-ef270138.js";const D=({children:i})=>e("div",{className:"px-12",children:i}),S=({className:i,children:a,current:s,href:l})=>e(M,{className:r("text-24-wide pb-1 text-neutral-100 ",s?"border-b-4 border-neutral-100":"text-primary-40 hover:text-neutral-100",i),href:l,children:a}),y="/assets/logo-337d0205.svg",C=({className:i,address:a,current:s})=>t("div",{className:r("flex justify-between",i),children:[e(T,{src:y,alt:"logo",size:"sm"}),a&&t("div",{className:"flex gap-10",children:[e("div",{className:"grid place-items-center",children:e(S,{current:s==="advertiser",href:"/advertiser",children:"ADVERTISER"})}),e("div",{className:"grid place-items-center",children:e(S,{current:s==="publisher",href:"/publisher",children:"PUBLISHER"})})]}),t("div",{className:"flex items-center justify-end gap-4",children:[a&&e("p",{className:"text-18-semi text-neutral-100",children:`${a.slice(0,6)} .... ${a.slice(-4)}`}),a?e(x,{color:"neutral",onClick:()=>{},children:"DISCONNECT"}):e(x,{color:"secondary",onClick:()=>{},children:"CONNECT WALLET"})]})]}),u=({className:i,children:a,color:s="process",direction:l="horizontal"})=>e("div",{className:r("text-neutral-10 flex flex-row items-center border-solid border-[#47554E] font-sans",s==="process"&&"bg-primary-40",s==="passed"&&"bg-passed",s==="rejected"&&"bg-rejected",l==="horizontal"?"h-12 border-t py-[9px] px-[24px]":"w-12 scale-[-1] flex-col border-l py-[12.5px] px-[24px] [writing-mode:vertical-rl]",i),children:a}),A=i=>{const a=new Date,s=Math.abs(Math.round((a.getTime()-i.getTime())/1e3)),l=Math.floor(s/3600),n=Math.floor(s%3600/60),c=s%60,d=l>0?`${l}h `:"",h=n>0?`${n}m `:"",o=`${c}s`;return`${d}${h}${o}`},E=({className:i,id:a,createdAt:s,expires:l,image:n,status:c,ok:d,ng:h})=>{const o=m.useMemo(()=>c==="process"&&d!==void 0&&h!==void 0&&l!==void 0,[c,d,h,l]);return t("div",{className:r("flex flex-col",i),children:[t("div",{className:"flex",children:[t(u,{color:c,direction:"vertical",children:["VOTE IN ",c]}),t(g,{className:"grow",children:[t("div",{className:"flex",children:[t("div",{className:"w-1/3 px-2",children:[e("div",{className:"text-18-semi text-neutral-10/70",children:"Creative ID"}),e("div",{className:"text-18-bold text-neutral-10",children:a})]}),t("div",{className:"w-1/3 px-2",children:[e("div",{className:"text-18-semi text-neutral-10/70",children:"Created At"}),e("div",{className:"text-18-bold text-neutral-10",children:s.toLocaleString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(/-/g,"/").replace("T"," ")})]}),o&&t("div",{className:"w-1/3 px-2",children:[e("div",{className:"text-18-semi text-neutral-10/70",children:"Expires"}),e("div",{className:"text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap",children:A(l)})]})]}),e("div",{className:r("relative p-2",o?"h-48":"h-60"),children:e("img",{className:"h-full w-full object-contain",src:n,alt:"creative"})})]})]}),o&&t("div",{className:"flex",children:[e(u,{className:"flex w-3/4 justify-end",color:c,children:t("div",{children:[e("span",{children:"OK"}),t("span",{children:[d,"%"]}),e("span",{children:"NG"}),t("span",{children:[h,"%"]})]})}),e(x,{className:"h-12 w-1/4",color:"secondary",onClick:()=>{},children:"VOTE"})]})]})},w=({className:i,src:a,alt:s})=>e("div",{className:r("h-10",i),children:e("img",{className:"object-contain",src:a,alt:s})}),j="/assets/my-creatives-5ced28c6.svg",I=()=>{const[i]=m.useState([{id:"0001",status:"process",image:"https://picsum.photos/500/200",createdAt:new Date(Math.floor(Math.random()*new Date().getTime()))},{id:"0002",status:"passed",image:"https://picsum.photos/500/200",createdAt:new Date(Math.floor(Math.random()*new Date().getTime()))},{id:"0003",status:"rejected",image:"https://picsum.photos/500/200",createdAt:new Date(Math.floor(Math.random()*new Date().getTime()))}]);return t(f,{children:[t("div",{className:"flex justify-between",children:[e(w,{className:"my-8",src:j,alt:"my creative"}),e("div",{className:"flex items-center",children:e(x,{color:"secondary",onClick:()=>{alert("new creative")},children:"NEW CREATIVE"})})]}),e("div",{className:"flex flex-col gap-12",children:i.map(s=>e(E,{...s},s.id))})]})},p=({className:i,children:a,buttonLabel:s,onClick:l,title:n,icon:c})=>t(g,{className:r("relative flex flex-col justify-around px-6",i),children:[s&&l&&e(x,{className:"absolute top-5 right-0",color:"secondary",onClick:l,children:s}),e(T,{className:"absolute bottom-0 right-3 p-0",size:"sm",src:c,alt:n}),e("p",{className:"text-neutral-10/70 text-18-semi",children:n}),a]}),$="/assets/ads-2c3ea67a.svg",L="/assets/speed-2e700a1d.svg",k="/assets/stake-b818f9c4.svg",V="/assets/vp-1865c4bf.svg",O="/assets/advertiser-overview-c3c8352a.svg",P=()=>{const[i]=m.useState(8255),a=m.useMemo(()=>i.toLocaleString(),[i]),[s]=m.useState(4211),l=m.useMemo(()=>s.toLocaleString(),[s]),n=()=>{},[c]=m.useState(80),[d]=m.useState(1.4);return t(f,{children:[e(w,{className:"my-8",src:O,alt:"advertiser overview"}),t("div",{className:"flex gap-12",children:[e(p,{className:"h-48 flex-1",title:"ADsGT",icon:$,children:e("p",{className:"text-48-bold text-neutral-10",children:a})}),e(p,{className:"h-48 flex-1",title:"Staked ADsGT",icon:k,buttonLabel:"STAKE",onClick:n,children:e("p",{className:"text-48-bold text-neutral-10",children:l})}),e(p,{className:"h-48 flex-1",title:"Voting Power (AD)",icon:V,children:t("div",{children:[e("p",{className:"text-48-bold text-neutral-10 inline",children:`${c}`}),e("p",{className:"text-28-semi text-neutral-40 inline",children:" / 100 VP"})]})}),e(p,{className:"h-48 flex-1",title:"VP Regen Speed",icon:L,children:t("div",{children:[e("p",{className:"text-48-bold text-neutral-10 inline",children:`${d}`}),e("p",{className:"text-28-semi text-neutral-40 inline",children:" VP / day"})]})})]})]})},G=i=>{const a=new Date,s=Math.abs(Math.round((a.getTime()-i.getTime())/1e3)),l=Math.floor(s/3600),n=Math.floor(s%3600/60),c=s%60,d=l>0?`${l}h `:"",h=n>0?`${n}m `:"",o=`${c}s`;return`${d}${h}${o}`},R=({className:i,id:a,url:s,createdAt:l,expires:n,status:c,ok:d,ng:h,onCopyTag:o,onVote:N})=>{const v=m.useMemo(()=>c==="process"&&n!==void 0&&N!==void 0,[c,n,N]),b=m.useMemo(()=>c==="passed"&&o,[o,c]);return t("div",{className:r("flex flex-col",i),children:[t(g,{className:"flex",children:[t("div",{className:r("px-2",v?"w-1/4":"w-1/3"),children:[e("div",{className:"text-18-semi text-neutral-10/70",children:"Site ID"}),e("div",{className:"text-18-bold text-neutral-10",children:a})]}),t("div",{className:r("px-2",v?"w-1/4":"w-1/3"),children:[e("div",{className:"text-18-semi text-neutral-10/70",children:"Site URL"}),e("div",{className:"text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap",children:s})]}),t("div",{className:r("px-2",v?"w-1/4":"w-1/3"),children:[e("div",{className:"text-18-semi text-neutral-10/70",children:"Created At"}),e("div",{className:"text-18-bold text-neutral-10",children:l.toLocaleString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(/-/g,"/").replace("T"," ")})]}),v&&t("div",{className:"w-1/4 px-2",children:[e("div",{className:"text-18-semi text-neutral-10/70",children:"Expires"}),e("div",{className:"text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap",children:G(n)})]})]}),t("div",{className:"flex",children:[t(u,{className:r("flex justify-between",b?"w-3/4":"w-full"),color:c,children:[t("div",{children:["VOTE IN ",c]}),t("div",{children:[e("span",{children:"OK"}),t("span",{children:[d,"%"]}),e("span",{children:"NG"}),t("span",{children:[h,"%"]})]})]}),b&&e(x,{className:"h-12 w-1/4",color:"neutral",onClick:o,children:"COPY AD TAG"}),v&&e(x,{className:"h-12 w-1/4",color:"secondary",onClick:N,children:"VOTE"})]})]})},z="/assets/voting-list-of-sites-0a89dd8d.svg",B=()=>{const[i]=m.useState([{id:"0001",status:"process",url:"https://example.com",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),ok:50,ng:50,expires:new Date(new Date().getTime()+Math.random()*1e6),onVote:()=>alert("vote")},{id:"0002",status:"passed",url:"https://example.com",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),ok:50,ng:50,onVote:()=>alert("vote")},{id:"0003",status:"rejected",url:"https://example.com",createdAt:new Date(Math.floor(Math.random()*new Date().getTime())),ok:50,ng:50,onVote:()=>alert("vote")}]);return t(f,{children:[e(w,{className:"my-8",src:z,alt:"voting list of sites"}),e("div",{className:"flex flex-col gap-12",children:i.map(a=>e(R,{...a},a.id))})]})},K=()=>t(D,{children:[e(C,{}),e(P,{}),t("div",{className:"flex gap-12",children:[e("div",{className:"flex-[2_1_0%]",children:e(I,{})}),e("div",{className:"flex-[3_1_0%]",children:e(B,{})})]})]});export{K as Advertiser};