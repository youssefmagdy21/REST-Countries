import{u as r,j as e,M as i,a as c,L as o,b as d,c as m,d as x,e as p,i as l,g as h,f as j,h as t,k as u,l as g}from"./index-0RLJFpB_.js";function b(){const a=r();return e.jsxs("button",{className:"flex items-center gap-2 rounded-md bg-accent px-6 py-2 text-sm/4 transition-transform duration-300 hover:-translate-y-1 md:gap-[0.625rem] md:px-9 md:py-3 md:text-base/4",style:{boxShadow:"0 0 4px 2px rgba(0,0,0,0.1)"},onClick:()=>a(-1),children:[e.jsx(i,{className:"h-4 w-5"}),e.jsx("span",{children:"Back"})]})}function f({countryCode:a}){const{data:s,isLoading:n}=c(a);return e.jsx(o,{to:`/countries/${s==null?void 0:s.toLowerCase()}`,className:"block h-[1.875rem] min-w-24 rounded-sm bg-accent px-2 py-1.5 text-center text-xs/4 transition-transform duration-300 hover:-translate-y-1 md:text-sm/4",style:{boxShadow:"0 0 4px 1px rgba(0,0,0,0.1)"},children:n?"...":s})}function N({borders:a}){return e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("p",{children:e.jsx("b",{className:"font-bold",children:"Border Countries:"})}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.length>0?a.map(s=>e.jsx(f,{countryCode:s},s)):"--"})]})}function v({flagInfo:a}){return e.jsx("div",{className:"h-[14.25rem] w-full max-w-[35rem] bg-accent shadow-sm sm:h-[25rem]",children:e.jsx("img",{src:a.svg,alt:a.alt,width:560,height:400,className:"h-full w-full"})})}function w(){const{countryName:a}=d(),s=m(a),n=x();return e.jsx(e.Fragment,{children:n.state==="loading"?e.jsx(p,{}):e.jsxs("main",{className:"min-h-[calc(100vh-5rem)] overflow-auto bg-background px-7 pb-14 md:px-[4.75rem]",children:[e.jsx("div",{className:"mt-10 md:mt-[4.75rem]",children:e.jsx(b,{})}),e.jsxs("section",{className:"mt-[3.75rem] flex flex-col items-start gap-12 md:mt-20 xl:flex-row xl:items-center xl:gap-[6.75rem]",children:[e.jsx(v,{flagInfo:s.flags}),e.jsxs("div",{className:"w-full max-w-[61.25rem] text-sm md:text-base xl:flex-1",children:[e.jsx("h2",{className:"mb-7 text-xl/5 font-extraBold capitalize md:mb-8 md:text-3xl",children:s.name.common||s.name.official}),e.jsxs("div",{className:"2xl mb-11 flex flex-col gap-12 md:mb-[4.25rem] md:flex-row md:justify-between md:gap-0",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("p",{children:[e.jsx("b",{className:"font-bold",children:"Native Name: "}),e.jsx("span",{children:l(s.name.nativeName)?"--":h(s.name.nativeName)})]}),e.jsxs("p",{children:[e.jsx("b",{className:"font-bold",children:"Population: "}),e.jsx("span",{children:j(s.population)})]}),e.jsxs("p",{children:[e.jsx("b",{className:"font-bold",children:"Region: "})," ",e.jsx("span",{children:s.region})]}),e.jsxs("p",{children:[e.jsx("b",{className:"font-bold",children:"Sub Region: "}),e.jsx("span",{children:s.subregion?s.subregion:"--"})]}),e.jsxs("p",{children:[e.jsx("b",{className:"font-bold",children:"Capital: "}),e.jsx("span",{children:t(s.capital)?"--":s.capital.join(", ")})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("p",{children:[e.jsx("b",{className:"font-bold",children:"Top Level Domain: "}),e.jsx("span",{children:t(s.tld)?"--":s.tld.join(", ")})]}),e.jsxs("p",{children:[e.jsx("b",{className:"font-bold",children:"Currencies: "}),e.jsx("span",{children:l(s.currencies)?"--":u(s.currencies)})]}),e.jsxs("p",{children:[e.jsx("b",{className:"font-bold",children:"Languages: "}),e.jsx("span",{children:l(s.languages)?"--":g(s.languages)})]})]})]}),e.jsx(N,{borders:s.borders})]})]})]})})}export{w as default};
