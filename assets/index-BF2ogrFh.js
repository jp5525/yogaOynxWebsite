import{ssr as r,ssrHydrationKey as o,escape as e,createComponent as a,ssrAttribute as t}from"solid-js/web";import{P as h,p as s,a as p}from"./ssr-BOLBC3zx.js";import u from"public-google-sheets-parser";import{Suspense as m,Switch as g,Match as f}from"solid-js";import{c as v}from"./createAsync-ChY9vPNL.js";import"@solid-primitives/scroll";import"solid-js/web/storage";import"h3";import"unctx";import"node:async_hooks";import"radix3";const _="_profile_1gogj_2",y="_teacher_1gogj_32",i={"profile-description":"_profile-description_1gogj_2","section-2":"_section-2_1gogj_1","section-3":"_section-3_1gogj_1",profile:_,teacher:y,"profile-image":"_profile-image_1gogj_42"};var w=["<div","><h2>Teachers</h2><p>Meet Our Team</p></div>"],b=["<div",' style="','"><!--$-->',"<!--/--><div","><div><blockquote><p>We’re Looking Forward To Working With You</p></blockquote><p>Our teachers are passionate and gifted in their abilities to lead. We believe that movement is medicine and that we have the power within the human body to heal ourselves with direct intentional movement. We will educate you on equanimity and teach you how to be still, how to quiet your mind in any situation. Most of all, we believe in the power of breath. This is the fundamental foundation of a yoga practice.</p></div></div><div",">","</div></div>"],j=["<p",">Loading..</p>"],P=["<div","><div","><div","><img","></div><div","><h2>","</h2><div>","</div></div></div><hr","></div>"];function z(){const n=v(async()=>new u("1LzEJ5Bgcdu7QOVlauooDXtBUEDWPzOcf-7Br5XPiYnc",{sheetName:"Teachers"}).parse());return r(b,o(),"height:120vh",e(a(h,{get class(){return s.hero},style:{"min-height":"40vh"},get image(){return p("teachers_hero.jpg")},opacity:.55,get children(){return r(w,o()+t("id",e(s["hero-box"],!0),!1))}})),t("id",e(s["section-2"],!0),!1),t("id",e(i["section-3"],!0),!1),e(a(m,{get fallback(){return r(j,o())},get children(){return a(g,{get children(){return a(f,{get when(){return n()},get children(){return(n()??[]).map(({name:l,description:c,image:d})=>r(P,o(),t("class",e(i.profile,!0),!1),t("class",e(i["profile-image"],!0),!1),t("src",e(d,!0),!1),t("class",e(i["profile-description"],!0),!1),e(l),c,t("class",e(i.teacher,!0),!1)))}})}})}})))}export{z as default};
