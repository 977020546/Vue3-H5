import{o as e,c as o,a as t,F as d,r as p,t as l,u as h,b as g,d as f,e as $,f as k,g as _,w,h as x,s as y,i as v}from"./index.982717d1.js";import{g as m}from"./http.85eae489.js";const j={class:"nav"},C=["src"],D={__name:"category",setup(n){return(s,c)=>(e(),o("div",j,[t("ul",null,[(e(!0),o(d,null,p(h(g),(a,i)=>(e(),o("li",{key:i},[t("img",{src:`/src/assets/image/${a.img}`},null,8,C),t("p",null,l(a.title),1)]))),128))])]))}},b="/assets/m1.1f6abe03.jpg",S={class:"main-item1"},B=t("div",{class:"m-item1-left"},[t("img",{src:b,alt:""})],-1),F={class:"m-item1-right"},L={class:"i1-img"},N=["src"],P={__name:"nav",setup(n){const s=f(["m2.jpg","m3.jpg","m4.jpg","m5.jpg"]);return(c,a)=>(e(),o("div",S,[B,t("div",F,[t("ul",null,[(e(!0),o(d,null,p(s.value,(i,u)=>(e(),o("li",{key:u},[t("div",L,[t("img",{src:`/src/assets/image/${i}`},null,8,N)])]))),128))])])]))}},V={class:"c-wrap"},A={class:"c-wrap-img"},E=["src"],I={class:"c-wrap-info"},M=t("i",null,"\uFFE5",-1),R=["onClick"],T=t("i",{class:"iconfont icon-gouwuche"},null,-1),q=[T],z={__name:"lists",props:{products:Array},setup(n){const s=$();function c(a){a.count=1,s.addItem(a)}return(a,i)=>{const u=k("router-link");return e(),o("div",V,[t("ul",null,[(e(!0),o(d,null,p(n.products,r=>(e(),o("li",{key:r.product_id},[t("div",A,[_(u,{to:`/detail/${r.product_id}`},{default:w(()=>[t("img",{src:r.product_img_url},null,8,E)]),_:2},1032,["to"])]),t("h4",null,l(r.product_name),1),t("div",I,[M,t("b",null,l(r.product_uprice),1),t("span",{class:"shoppingCart",onClick:O=>c(r)},q,8,R)])]))),128))])])}}},G=x("product",{state:()=>({products:[]}),actions:{getData(){return new Promise((n,s)=>{m().then(c=>{n(c)}).catch(c=>{s(c)})})},async getData2(){const n=await m().then(s=>s.data.data);this.products=n}}}),H={class:"main"},J={__name:"index",setup(n){const s=G(),{products:c}=y(s);return v(async()=>{await s.getData2()}),(a,i)=>(e(),o("div",H,[_(P),_(z,{products:h(c)},null,8,["products"])]))}},K={class:"content"},W={__name:"index",setup(n){return(s,c)=>(e(),o("div",K,[_(D),_(J)]))}};export{W as default};
