"use strict";(self.webpackChunkrsd_documentation=self.webpackChunkrsd_documentation||[]).push([[7760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"developers/Getting started",id:"version-v1/developers/Getting started",title:"Getting started",description:"\x3c!--",source:"@site/versioned_docs/version-v1/developers/02-Getting started.md",sourceDirName:"developers",slug:"/developers/Getting started",permalink:"/v1/developers/Getting started",draft:!1,editUrl:"https://github.com/dmijatovic/rsd-docusaurus-test/edit/main/versioned_docs/version-v1/developers/02-Getting started.md",tags:[],version:"v1",lastUpdatedAt:1694698402,formattedLastUpdatedAt:"Sep 14, 2023",sidebarPosition:2,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/v1/developers/Introduction"},next:{title:"Data Scraping",permalink:"/v1/developers/Data Scraping"}},d={},s=[{value:"Dependencies",id:"dependencies",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Monorepo",id:"monorepo",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Running locally",id:"running-locally",level:2},{value:"Logging in with admin rights",id:"logging-in-with-admin-rights",level:3},{value:"Local accounts",id:"local-accounts",level:4},{value:"Other IDPs",id:"other-idps",level:4},{value:"Frontend with hot-module-replacement (HMR)",id:"frontend-with-hot-module-replacement-hmr",level:3},{value:"Documentation site",id:"documentation-site",level:3},{value:"Clear/remove data (reset)",id:"clearremove-data-reset",level:2},{value:"Tech Stack",id:"tech-stack",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"To run the application locally you need to install the following dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com"},(0,o.kt)("inlineCode",{parentName:"a"},"yarn"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"make"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Available in most Linux distributions."),(0,o.kt)("li",{parentName:"ul"},"Often also in MacOS systems but, if not, you can get it by installing the command line tools with ",(0,o.kt)("inlineCode",{parentName:"li"},"xcode-select --install"),"."),(0,o.kt)("li",{parentName:"ul"},"For Windows, you can install it via ",(0,o.kt)("a",{parentName:"li",href:"https://community.chocolatey.org/packages/make"},(0,o.kt)("inlineCode",{parentName:"a"},"chocolatey")),".")))),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("h3",{id:"monorepo"},"Monorepo"),(0,o.kt)("p",null,"The RSD-as-a-Service project is a divided into different services included in the mono repo:"),(0,o.kt)("p",null,"|-- authentication\n|-- backend-postgrest\n|-- data-migration\n|-- database\n|-- deployment\n|-- documentation\n|-- frontend\n|-- nginx\n|-- scrapers"),(0,o.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"The environment variables should be stored in a .env file, which is automatically loaded by docker compose. To validate loading of env variables use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose config"),". More info about the use of environment variables in docker compose is available at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/environment-variables/"},"official documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"copy the file ",(0,o.kt)("inlineCode",{parentName:"li"},".env.example")," to ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file at the root of the project")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# from project root dir\ncp .env.example .env\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to modify the new .env file with the corresponding value secrets."),(0,o.kt)("li",{parentName:"ul"},"build local images")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# from project root dir\ndocker compose build\n")),(0,o.kt)("h2",{id:"running-locally"},"Running locally"),(0,o.kt)("p",null,"Run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# from project root dir\ndocker compose up\n")),(0,o.kt)("p",null,"The application can be viewed at http://localhost"),(0,o.kt)("h3",{id:"logging-in-with-admin-rights"},"Logging in with admin rights"),(0,o.kt)("p",null,"The default role assigned to a logged in user is ",(0,o.kt)("inlineCode",{parentName:"p"},"rsd_user"),". To obtain the ",(0,o.kt)("inlineCode",{parentName:"p"},"rsd_admin")," role, you need to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"RSD_ADMIN_EMAIL_LIST")," variable in ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,o.kt)("h4",{id:"local-accounts"},"Local accounts"),(0,o.kt)("p",null,"::: danger\nLocal accounts should only be used in development mode.\n:::"),(0,o.kt)("p",null,"If you activated local login by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"LOCAL")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"RSD_AUTH_PROVIDERS"),", admin rights can be obtained by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"<name>@example.com")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"RSD_ADMIN_EMAIL_LIST"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"<names>")," is the name entered when logging in. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"RSD_AUTH_PROVIDERS=LOCAL\nRSD_ADMIN_EMAIL_LIST=admin@example.com\n")),(0,o.kt)("p",null,"If you now login as the user ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),", you will be assigned the role ",(0,o.kt)("inlineCode",{parentName:"p"},"rsd_admin"),"."),(0,o.kt)("h4",{id:"other-idps"},"Other IDPs"),(0,o.kt)("p",null,"If you are using other IDPs, make sure to add the mail address that is being provided by the IDP. If you are using the SURFconext development instance, have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://idp.diy.surfconext.nl/showusers.php"},"this list")," to obtain the email addresses that are provided for the test accounts."),(0,o.kt)("h3",{id:"frontend-with-hot-module-replacement-hmr"},"Frontend with hot-module-replacement (HMR)"),(0,o.kt)("p",null,"To run the frontend in the development mode with the hot-module-replacement (HMR) you should start an additional instance of the frontend which will be available at http://localhost:3000"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# navigate to frontend folder\ncd frontend\n# install dependencies\nyarn install\n# start fe in dev mode\nyarn dev\n")),(0,o.kt)("p",null,"More information about the frontend setup is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/research-software-directory/RSD-as-a-service/tree/main/frontend#readme"},"available in the frontend readme file"),"."),(0,o.kt)("h3",{id:"documentation-site"},"Documentation site"),(0,o.kt)("p",null,"The documentation site runs on GitHub Pages. Any changes inside this folder will trigger a GitHub action to deploy the changes automatically when merging a Pull Request to the main branch."),(0,o.kt)("p",null,"To run locally the documentation site, you need ",(0,o.kt)("inlineCode",{parentName:"p"},"nodejs")," installed on your machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# navigate to frontend folder\ncd documentation\n# install dependencies\nyarn install\n# start fe in dev mode\nyarn dev\n")),(0,o.kt)("p",null,"All documentation files written in Markdown are placed inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"./documentation/docs/")," folder."),(0,o.kt)("p",null,"You can edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation bar")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"./doumentation/docs/.vuepress/config.js")," file."),(0,o.kt)("p",null,"Any file ",(0,o.kt)("inlineCode",{parentName:"p"},"markdown file")," added indie the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder will be available on built time."),(0,o.kt)("h2",{id:"clearremove-data-reset"},"Clear/remove data (reset)"),(0,o.kt)("p",null,"To clear the database, if the database structure has changed or you need to run data migration again, run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down --volumes\n")),(0,o.kt)("h2",{id:"tech-stack"},"Tech Stack"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(5122).Z,width:"774",height:"1136"})))}u.isMDXComponent=!0},5122:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rsd-stack-220304-cbf9b40c3252a2b6946f32106deaf63f.png"}}]);