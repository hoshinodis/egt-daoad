import{j as n,h as e,k as p,L as i}from"./index-56475e91.js";const m=({onClick:a,className:s,children:r,color:t="neutral"})=>n("button",{type:"button",className:e("text-18-wide cursor-pointer py-[12px] px-[36px] text-neutral-100 shadow-[0px_1px_2px_rgba(0,0,0,0.2)]",t==="primary"&&"bg-primary-main",t==="secondary"&&"bg-secondary",t==="neutral"&&"bg-neutral-40",s),onClick:a,children:r}),x=({className:a,children:s})=>n("div",{className:e("bg-[#678575]",a),children:s}),l={sm:"h-20 p-3",md:"h-36 p-6",lg:"h-56 p-9"},g=({src:a,alt:s,size:r,className:t})=>n("img",{src:a,className:e(l[r],"will-change-[filter]",t),alt:s}),u=({href:a,newTab:s,className:r,children:t})=>{const o={className:e(r),target:s?"_blank":void 0,rel:s?"noreferrer":void 0};return p(a)?n("a",{href:a,...o,children:t}):n(i,{to:a,...o,children:t})};export{m as B,x as C,g as I,u as L};