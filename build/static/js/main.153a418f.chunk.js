(this["webpackJsonpvybes-avax-minting-dapp"]=this["webpackJsonpvybes-avax-minting-dapp"]||[]).push([[0],{239:function(t,e){},242:function(t,e){},245:function(t,e){},249:function(t,e){},276:function(t,e){},278:function(t,e){},287:function(t,e){},289:function(t,e){},299:function(t,e){},301:function(t,e){},419:function(t,e){},421:function(t,e){},428:function(t,e){},429:function(t,e){},529:function(t,e,n){},530:function(t,e,n){"use strict";n.r(e);var c,r,a,o,i,s,l,d,u,x,b,j,p,h,O,g,f=n(1),y=n(82),v=n.n(y),C=n(42),m=n(68),w=n(15),A=n(17),E=n.n(A),S=n(56),T=n(66),N=n.n(T),_=n(213),k=n.n(_),M=n(67),D=n(214),L=n(13),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},I),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},t),{},{account:e.payload.account});default:return t}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},K),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},F=Object(M.b)({blockchain:R,data:P}),U=[D.a],W=Object(M.c)(M.a.apply(void 0,U)),Y=Object(M.d)(F,W),z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},B=function(){return function(){var t=Object(C.a)(E.a.mark((function t(e){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(z("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},H=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var e=Object(C.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(B());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=n(16),q=Q.a.div(c||(c=Object(w.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),X=Q.a.div(r||(r=Object(w.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(a||(a=Object(w.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(o||(o=Object(w.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(w.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(w.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"gray":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),tt=Q.a.p(l||(l=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),et=(Q.a.p(d||(d=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(u||(u=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),nt=(Q.a.div(x||(x=Object(w.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(4)),ct=Q.a.button(b||(b=Object(w.a)(["\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 150px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0 0 2px 1px #fff,  /* inner white */\n  0 0 2px 1px #0ff; /* outer cyan */;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rt=Q.a.button(j||(j=Object(w.a)(["\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  font-weight: bold;\n  font-size: 18px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),at=Q.a.div(p||(p=Object(w.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ot=Q.a.img(h||(h=Object(w.a)(["\n  width: 200px;\n  justify-content: center;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),it=(Q.a.img(O||(O=Object(w.a)(["\n  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.5);\n  border: 2px solid var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),Q.a.a(g||(g=Object(w.a)(["\n  color: var(--green);\n  text-decoration: none;\n"]))));var st=function(){var t,e,n=Object(S.b)(),c=Object(S.c)((function(t){return t.blockchain})),r=Object(S.c)((function(t){return t.data})),a=Object(f.useState)(!1),o=Object(m.a)(a,2),i=o[0],s=o[1],l=Object(f.useState)("Click buy to mint your Vybes NFT."),d=Object(m.a)(l,2),u=d[0],x=d[1],b=Object(f.useState)(1),j=Object(m.a)(b,2),p=j[0],h=j[1],O=Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(m.a)(O,2),y=g[0],v=g[1],w=function(){""!==c.account&&null!==c.smartContract&&n(B(c.account))},A=function(){var t=Object(C.a)(E.a.mark((function t(){var e,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,v(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.useEffect)((function(){A()}),[]),Object(f.useEffect)((function(){w()}),[c.account]),Object(nt.jsx)(q,{children:Object(nt.jsxs)($,{flex:1,ai:"center",style:{padding:18,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(nt.jsx)(ot,{style:{borderRadius:50,height:100,width:100},alt:"logo",src:"/config/images/logo.png"}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(at,{flex:1,style:{padding:18},test:!0,children:[Object(nt.jsx)(Z,{}),Object(nt.jsxs)($,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",borderRadius:50,border:"2px solid var(--secondary)",boxShadow:"0px 4px 8px 2px rgba(0,0,0,0.5)"},children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",y.MAX_SUPPLY]}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(nt.jsx)(it,{target:"_blank",href:y.SCAN_LINK,children:(t=y.CONTRACT_ADDRESS,e=15,t.length>e?"".concat(t.substring(0,e),"..."):t)})}),Object(nt.jsx)(J,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(it,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(nt.jsx)(X,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(nt.jsx)(J,{}),""===c.account||null===c.smartContract?Object(nt.jsxs)($,{ai:"center",jc:"center",children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(ct,{onClick:function(t){t.preventDefault(),n(function(){var t=Object(C.a)(E.a.mark((function t(e){var n,c,r,a,o,i,s,l,d;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return N.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(t){e(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(H("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(H("Something went wrong."));case 31:t.next=34;break;case 33:e(H("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(e){return t.apply(this,arguments)}}()),w()},children:"CONNECT WALLET"}),""!==c.errorMsg?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(nt.jsx)(V,{}),Object(nt.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(nt.jsx)(rt,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=p-1;t<1&&(t=1),h(t)}()},children:"-"}),Object(nt.jsx)(V,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:p}),Object(nt.jsx)(V,{}),Object(nt.jsx)(rt,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=p+1;t>10&&(t=10),h(t)}()},children:"+"})]}),Object(nt.jsx)(J,{}),Object(nt.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(nt.jsx)(ct,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=y.WEI_COST,e=y.GAS_LIMIT,r=String(t*p),a=String(e*p);console.log("Cost: ",r),console.log("Gas limit: ",a),x("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(p).send({gasLimit:String(a),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(t){console.log(t),x("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),x("Noice! The ".concat(y.NFT_NAME," NFT is yours! go visit ").concat(y.MARKETPLACE_LINK," to view it.")),s(!1),n(B(c.account))}))}(),w()},children:i?"BUSY":"BUY"})})]})]}),Object(nt.jsx)(V,{})]}),Object(nt.jsx)(Z,{})]}),Object(nt.jsx)(V,{}),Object(nt.jsx)(at,{flex:1,test:!0,children:Object(nt.jsx)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",borderRadius:50,border:"2px solid var(--secondary)",boxShadow:"0px 4px 8px 2px rgba(0,0,0,0.5)"},children:Object(nt.jsxs)($,{jc:"center",ai:"center",style:{padding:18,width:"70%"},children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",y.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})})}),Object(nt.jsxs)($,{jc:"center",ai:"center",style:{width:"60%"},children:[Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:"\xa92022 - Vybes"}),Object(nt.jsx)(J,{})]})]})})},lt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,535)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};n(529);v.a.render(Object(nt.jsx)(S.a,{store:Y,children:Object(nt.jsx)(st,{})}),document.getElementById("root")),lt()}},[[530,1,2]]]);
//# sourceMappingURL=main.153a418f.chunk.js.map