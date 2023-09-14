"use strict";(self.webpackChunkrsd_documentation=self.webpackChunkrsd_documentation||[]).push([[9386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="RSD Configuration",c={unversionedId:"developers/configuration",id:"version-v2/developers/configuration",title:"RSD Configuration",description:"Edit the file on the Path: frontend/public/data/settings.json",source:"@site/versioned_docs/version-v2/developers/09-configuration.md",sourceDirName:"developers",slug:"/developers/configuration",permalink:"/rsd-docusaurus-test/developers/configuration",draft:!1,editUrl:"https://github.com/dmijatovic/rsd-docusaurus-test/edit/main/versioned_docs/version-v2/developers/09-configuration.md",tags:[],version:"v2",lastUpdatedAt:1694698402,formattedLastUpdatedAt:"Sep 14, 2023",sidebarPosition:9,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Contributors",permalink:"/rsd-docusaurus-test/developers/contributors"}},s={},u=[{value:"Enabling feedback button in the frontend",id:"enabling-feedback-button-in-the-frontend",level:2}],l={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rsd-configuration"},"RSD Configuration"),(0,o.kt)("p",null,"Edit the file on the Path: ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend/public/data/settings.json")),(0,o.kt)("h2",{id:"enabling-feedback-button-in-the-frontend"},"Enabling feedback button in the frontend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "feedback": {\n    "enabled": true,\n    "url": "https://feedback.example.com",\n    "issues_page_url": ""\n  }\n}\n')))}p.isMDXComponent=!0}}]);