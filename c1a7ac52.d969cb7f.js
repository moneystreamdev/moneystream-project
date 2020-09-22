(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{163:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),l=(a(0),a(174)),i={id:"cloudwallet",title:"Cloud Wallet",sidebar_label:"Cloud Wallet"},o={id:"cloudwallet",isDocsHomePage:!1,title:"Cloud Wallet",description:"Cloud wallet and MoneyStream",source:"@site/docs/cloudwallet.md",permalink:"/moneystream-project/docs/cloudwallet",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cloudwallet.md",sidebar_label:"Cloud Wallet",sidebar:"someSidebar",previous:{title:"Bitcoin",permalink:"/moneystream-project/docs/bitcoin"},next:{title:"privacy",permalink:"/moneystream-project/docs/privacy"}},c=[{value:"Cloud wallet and MoneyStream",id:"cloud-wallet-and-moneystream",children:[]},{value:"How to sign transactions",id:"how-to-sign-transactions",children:[]}],b={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"cloud-wallet-and-moneystream"},"Cloud wallet and MoneyStream"),Object(l.b)("p",null,"This document describes how cloud wallets can support the MoneyStream application."),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"MoneyStream uses a cash application protocol. That means transactions are to be signed using SIGHASH_SINGLE|ANYONECANPAY or SIGHASH_NONE. All communications must be exchanged over a secure channel (ssl/tls)."))),Object(l.b)("p",null,"The overall application architecture is shown below."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://moneystreamdev.github.io/moneystream-project/img/moneystream-cloudwallet.png",alt:"MoneyStream communication with cloud wallet"}))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The user must be authenticated to the cloud wallet with an authentication token. The user sends the following request to the cloud wallet api.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    id:"requestid_string",\n    action:"sign",\n    amount:satoshis_integer,\n    max:satoshis_integer,\n    timelock:timelock_integer\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"id")," is the requestid. It will be the same for multiple requests. ",Object(l.b)("inlineCode",{parentName:"p"},"amount")," is the requested amount in satoshis. ",Object(l.b)("inlineCode",{parentName:"p"},"max")," is the maximum satoshis to allow in this request. "),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"The cloud wallet returns a signed transaction.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    id:"requestid_string",\n    txid:"transactionid_string",\n    hex:"transaction_hex_string"\n}\n')),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"On subsequent requests, the transaction must use the same UTXOs as the first request!"))),Object(l.b)("p",null,"The user must send another request (sign or close) before the timelock. If none is received then the UTXO should be assumed to be spent."),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"The extension will forward the transaction to the web site wallet with additional information that the application needs.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"(Not shown in diagram). User will send a request to close the request."))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    id:"requestid_string",\n    action:"close",\n    txid:"txid_string"\n}\n')),Object(l.b)("h2",{id:"how-to-sign-transactions"},"How to sign transactions"),Object(l.b)("p",null,"Transactions must be signed using the timelock value. Adjust funding with change amount as necessary."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"max")," amount can be accomodated using one UTXO then the transaction will look like this."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Index"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SigHash"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SIGHASH_SINGLE","|","ANYONECANPAY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Change Amount")))),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"max")," amount requires multiple UTXO then the transaction will look like this."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Index"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SigHash"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SIGHASH_SINGLE","|","ANYONECANPAY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Change Amount")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SIGHASH_NONE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(no output)")))),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"max")," amount is too large then there will be no output. The sum of the input values will be less than or equal to ",Object(l.b)("inlineCode",{parentName:"p"},"amount"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Index"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SigHash"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SIGHASH_NONE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(no output)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SIGHASH_NONE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(no output)")))))}s.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,d=u["".concat(i,".").concat(p)]||u[p]||m[p]||l;return a?r.a.createElement(d,o(o({ref:t},b),{},{components:a})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);