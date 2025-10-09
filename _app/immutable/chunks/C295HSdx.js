import"./DsnmJJEf.js";import{g as F,h as G,a as i,f as y,c as b,n as f,r as m,t as h,i as u,j as H}from"./BvvZ17bY.js";import{d as I}from"./BraOtIOe.js";import{s as v}from"./D8d3nf3L.js";import{p as s,i as J}from"./BHGGW6__.js";import{s as n,a as p,c as _}from"./CZU270tD.js";var K=y('<a role="button"><!></a>'),L=y("<button><!></button>");function S(g,t){let x=s(t,"variant",3,"primary"),l=s(t,"href",3,null),C=s(t,"type",3,"button"),r=s(t,"disabled",3,!1),w=s(t,"customClass",3,""),k=s(t,"handleClick",3,()=>{});const B="font-inter text-base font-semibold px-6 py-3 transition-all duration-200 ease-in-out cursor-pointer text-center whitespace-nowrap rounded-none",j=`
    bg-brand-500 text-white 
    hover:bg-brand-400
    active:scale-[0.98]
  `,q=`
    bg-transparent text-white border-2 border-white
    hover:bg-white hover:text-black-900 
    active:scale-[0.98]
  `,c=H(()=>`${B} ${x()==="primary"?j:q} ${r()?"opacity-50 cursor-not-allowed":""} ${w()}`);var d=F(),z=G(d);{var A=e=>{var a=K(),o=b(a);v(o,()=>t.children??f),m(a),h(()=>{n(a,"href",l()),p(a,1,_(u(c))),n(a,"aria-disabled",r())}),i(e,a)},D=e=>{var a=L();a.__click=function(...E){k()?.apply(this,E)};var o=b(a);v(o,()=>t.children??f),m(a),h(()=>{n(a,"type",C()),a.disabled=r(),p(a,1,_(u(c)))}),i(e,a)};J(z,e=>{l()?e(A):e(D,!1)})}i(g,d)}I(["click"]);export{S as B};
