import"./DsnmJJEf.js";import{c as F,f as G,a as i,b as y,d as b,n as f,r as m,t as u,g as h,u as H}from"./BAxAQHQ7.js";import{d as I}from"./fp8YgKhm.js";import{s as v}from"./Deus6bTo.js";import{p as s,i as J}from"./BJafWFTR.js";import{s as l,a as p,c as _}from"./C6ddKZd8.js";var K=y('<a role="button"><!></a>'),L=y("<button><!></button>");function S(g,t){let w=s(t,"variant",3,"primary"),n=s(t,"href",3,null),x=s(t,"type",3,"button"),r=s(t,"disabled",3,!1),C=s(t,"customClass",3,""),k=s(t,"handleClick",3,()=>{});const B="font-inter text-base font-semibold px-6 py-3 transition-all duration-200 ease-in-out cursor-pointer text-center whitespace-nowrap rounded-none",j=`
    bg-yellow-500 text-black-900 
    hover:bg-yellow-300
    active:scale-[0.98]
  `,q=`
    bg-transparent text-white border-2 border-white
    hover:bg-white hover:text-black-900 
    active:scale-[0.98]
  `,c=H(()=>`${B} ${w()==="primary"?j:q} ${r()?"opacity-50 cursor-not-allowed":""} ${C()}`);var d=F(),z=G(d);{var A=e=>{var a=K(),o=b(a);v(o,()=>t.children??f),m(a),u(()=>{l(a,"href",n()),p(a,1,_(h(c))),l(a,"aria-disabled",r())}),i(e,a)},D=e=>{var a=L();a.__click=function(...E){k()?.apply(this,E)};var o=b(a);v(o,()=>t.children??f),m(a),u(()=>{l(a,"type",x()),a.disabled=r(),p(a,1,_(h(c)))}),i(e,a)};J(z,e=>{n()?e(A):e(D,!1)})}i(g,d)}I(["click"]);export{S as B};
