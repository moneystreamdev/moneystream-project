(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(170)),i={id:"knownissues",title:"MoneyStream Known Issues",sidebar_label:"Known Issues"},s={id:"knownissues",isDocsHomePage:!1,title:"MoneyStream Known Issues",description:"MoneyStream is early Alpha stage development. While we believe it can be safe to use, please realize that there may be bugs in the software that put your funds at risk. Only fund your wallet in very small increments and make a backup of your private key. There will be service iterruptions while we improve the resiliency of our infrastructure.",source:"@site/docs/knownissues.md",permalink:"/moneystream-project/docs/knownissues",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/knownissues.md",sidebar_label:"Known Issues",sidebar:"someSidebar",previous:{title:"MoneyStream Developer Guide",permalink:"/moneystream-project/docs/devguide"}},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"MoneyStream is early Alpha stage development. While we believe it can be safe to use, please realize that there may be bugs in the software that put your funds at risk. Only fund your wallet in very small increments and make a backup of your private key. There will be service iterruptions while we improve the resiliency of our infrastructure."))),Object(o.b)("p",null,"These are some of the current known issues with MoneyStream. Please report new issues on our Telegram support channel or on ",Object(o.b)("a",{href:"https://github.com/moneystreamdev/web-monetization-projects/issues"},"GitHub"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Dust UTXOS are not spendable. Eventually the extension wallet will be able to spend dust."),Object(o.b)("li",{parentName:"ul"},"The wallet reuses addresses"),Object(o.b)("li",{parentName:"ul"},"The extension UI page continuously refreshes when monetization is active. To make it stop blinking switch to a non-monetized web page and then use the MoneyStream extension UI"),Object(o.b)("li",{parentName:"ul"},"Monetization does not resume when switching back to a web page that was monetized. Just refresh the page to restart monetization.")),Object(o.b)("p",null,"Please use the Telegram support channel to let us know if any of these issues are a priority to fix.  "),Object(o.b)("p",null,"Thank you for your patience in resolving these issues."))}l.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},u),{},{components:n})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);