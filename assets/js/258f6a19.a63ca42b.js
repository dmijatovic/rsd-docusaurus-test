"use strict";(self.webpackChunkrsd_documentation=self.webpackChunkrsd_documentation||[]).push([[1522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,b=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="RSD Configuration",c={unversionedId:"developers/configuration",id:"version-v1/developers/configuration",title:"RSD Configuration",description:"Edit the file on the Path: frontend/public/data/settings.json",source:"@site/versioned_docs/version-v1/developers/09-configuration.md",sourceDirName:"developers",slug:"/developers/configuration",permalink:"/v1/developers/configuration",draft:!1,editUrl:"https://github.com/dmijatovic/rsd-docusaurus-test/edit/main/versioned_docs/version-v1/developers/09-configuration.md",tags:[],version:"v1",lastUpdatedAt:1694698402,formattedLastUpdatedAt:"Sep 14, 2023",sidebarPosition:9,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Contributors",permalink:"/v1/developers/contributors"}},l={},s=[{value:"Enabling feedback button in the frontend",id:"enabling-feedback-button-in-the-frontend",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rsd-configuration"},"RSD Configuration"),(0,o.kt)("p",null,"Edit the file on the Path: ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend/public/data/settings.json")),(0,o.kt)("h2",{id:"enabling-feedback-button-in-the-frontend"},"Enabling feedback button in the frontend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "feedback": {\n    "enabled": true,\n    "url": "https://feedback.example.com",\n    "issues_page_url": ""\n  }\n}\n')))}d.isMDXComponent=!0}}]);