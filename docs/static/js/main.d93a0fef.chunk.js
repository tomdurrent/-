(this["webpackJsonpairdrop-ko"]=this["webpackJsonpairdrop-ko"]||[]).push([[8],{105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(24),s=n.n(r),a=n(12),c=n(2),l=n(61),u=n(3),m=n(4),d=n(7),y=n(6),p=n(8),j=n(27),h=n.n(j),f=n(64),b=n.n(f),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(y.a)(t).call(this,e))).state={selectedAccount:"",accountsOption:new Array,showToast:!1,toastMsg:"",submiting:!1},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.initApp().then((function(t){e.getAccountList()})).catch((function(e){}))}},{key:"initApp",value:function(){var e={name:"Airdrop",contractAddress:"Airdrop",github:"https://github.com/sero-cash/airdrop",author:"sero.cash",url:document.location.href,logo:document.location.protocol+"//"+document.location.host+"/airdrop/sero.png"};return new Promise((function(t,n){h.a.init(e,(function(e){"success"===e?t(e):n(e)}))}))}},{key:"submit",value:function(){var e=this;try{if(!e.state.selectedAccount)return void e.setShowToast(!0,"Please select one account");e.setState({submiting:!0}),h.a.getInfo((function(t){if(t.error)e.setShowToast(!0,t.error),e.setState({submiting:!1});else if(t.uuid){var n={uuid:t.uuid,mainPKr:e.state.selectedAccount};b.a.post("https://daq.web.sero.cash/airdrop",n).then((function(t){var n=t.data;"success"===n?(e.setShowToast(!0,"Submit successfully ! "),e.setState({submiting:!1})):"nil"===n?(e.setShowToast(!0,"Please open in popup wallet !"),e.setState({submiting:!1})):"exist"===n&&(e.setShowToast(!0,"You have participate!"),e.setState({submiting:!1}))})).catch((function(t){e.setShowToast(!0,t.message),e.setState({submiting:!1})}))}else e.setShowToast(!0,"Please open in popup wallet !"),e.setState({submiting:!1})}))}catch(t){console.log("eee",t),e.setShowToast(!0,"Please open in popup wallet !"),e.setState({submiting:!1})}}},{key:"setShowToast",value:function(e,t){this.setState({showToast:e,toastMsg:t})}},{key:"getAccountList",value:function(){var e=this;h.a.getAccountList((function(t){var n=[],o=0,r=!0,s=!1,a=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var m=l.value;n.push(i.a.createElement(c.n,{value:m.MainPKr,key:o++,selected:0===o},m.Name," ",m.MainPKr)),0===o&&e.setState({selectedAccount:m.MainPKr})}}catch(d){s=!0,a=d}finally{try{r||null==u.return||u.return()}finally{if(s)throw a}}e.setState({accountsOption:n})}))}},{key:"changeAccount",value:function(e){var t=e.detail.value;this.setState({selectedAccount:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.accountsOption,o=t.selectedAccount,r=t.showToast,s=t.toastMsg,a=t.submiting;return i.a.createElement(c.k,null,i.a.createElement(c.g,null,i.a.createElement(c.q,null,i.a.createElement(c.o,null,"Airdrop collection"))),i.a.createElement(c.f,{className:"ion-padding"},i.a.createElement(c.p,{position:"top",isOpen:r,onDidDismiss:function(){return e.setShowToast(!1,"")},message:s,duration:3e3,color:"dark",buttons:[{text:"X",role:"cancel",handler:function(){console.log("Cancel clicked")}}]}),i.a.createElement(c.i,null,i.a.createElement(c.d,null,i.a.createElement(c.j,null,"Account Selection"),i.a.createElement(c.m,{placeholder:"Select One",value:o,onIonChange:function(t){e.changeAccount(t)}},n)),i.a.createElement(c.d,null,i.a.createElement(c.j,null,"Activity Rule"),i.a.createElement(c.e,null,i.a.createElement("p",null,"1. Scan QR code to download Popup wallet"),i.a.createElement("p",null,"2. Register for a wallet account, scan the code and get the airdrop"),i.a.createElement("p",null,"3. Only receive ",i.a.createElement("strong",{style:{color:"#DAA825",fontSize:"18px"}},"100")," SERO per phone"),i.a.createElement("p",null,"4. Repeat submissions will only count once")))),i.a.createElement("div",null,i.a.createElement(c.c,{color:"primary",expand:"block",onClick:function(){e.submit()},disabled:a},"SUBMIT"))))}}]),t}(o.Component),v=(n(95),n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),n(104),n(105),function(){return i.a.createElement(c.b,null,i.a.createElement(l.a,null,i.a.createElement(c.l,null,i.a.createElement(a.b,{path:"/home",component:g,exact:!0}),i.a.createElement(a.b,{exact:!0,path:"/",render:function(){return i.a.createElement(a.a,{to:"/home"})}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,n){e.exports=n(106)},72:function(e,t,n){var o={"./ion-action-sheet-controller_8.entry.js":[112,43],"./ion-action-sheet-ios.entry.js":[113,44],"./ion-action-sheet-md.entry.js":[114,45],"./ion-alert-ios.entry.js":[115,24],"./ion-alert-md.entry.js":[116,25],"./ion-app_8-ios.entry.js":[117,11],"./ion-app_8-md.entry.js":[118,12],"./ion-avatar_3-ios.entry.js":[119,46],"./ion-avatar_3-md.entry.js":[120,47],"./ion-back-button-ios.entry.js":[121,48],"./ion-back-button-md.entry.js":[122,49],"./ion-backdrop-ios.entry.js":[123,81],"./ion-backdrop-md.entry.js":[124,82],"./ion-button_2-ios.entry.js":[125,50],"./ion-button_2-md.entry.js":[126,51],"./ion-card_5-ios.entry.js":[127,52],"./ion-card_5-md.entry.js":[128,53],"./ion-checkbox-ios.entry.js":[129,54],"./ion-checkbox-md.entry.js":[130,55],"./ion-chip-ios.entry.js":[131,56],"./ion-chip-md.entry.js":[132,57],"./ion-col_3.entry.js":[133,83],"./ion-datetime_3-ios.entry.js":[134,20],"./ion-datetime_3-md.entry.js":[135,21],"./ion-fab_3-ios.entry.js":[136,58],"./ion-fab_3-md.entry.js":[137,59],"./ion-img.entry.js":[138,84],"./ion-infinite-scroll_2-ios.entry.js":[139,39],"./ion-infinite-scroll_2-md.entry.js":[140,40],"./ion-input-ios.entry.js":[141,60],"./ion-input-md.entry.js":[142,61],"./ion-item-option_3-ios.entry.js":[143,62],"./ion-item-option_3-md.entry.js":[144,63],"./ion-item_8-ios.entry.js":[145,64],"./ion-item_8-md.entry.js":[146,65],"./ion-loading-ios.entry.js":[147,26],"./ion-loading-md.entry.js":[148,27],"./ion-menu_4-ios.entry.js":[149,18],"./ion-menu_4-md.entry.js":[150,19],"./ion-modal-ios.entry.js":[151,14],"./ion-modal-md.entry.js":[152,15],"./ion-nav_5.entry.js":[153,13],"./ion-popover-ios.entry.js":[154,16],"./ion-popover-md.entry.js":[155,17],"./ion-progress-bar-ios.entry.js":[156,66],"./ion-progress-bar-md.entry.js":[157,67],"./ion-radio_2-ios.entry.js":[158,32],"./ion-radio_2-md.entry.js":[159,33],"./ion-range-ios.entry.js":[160,68],"./ion-range-md.entry.js":[161,69],"./ion-refresher_2-ios.entry.js":[162,41],"./ion-refresher_2-md.entry.js":[163,42],"./ion-reorder_2-ios.entry.js":[164,37],"./ion-reorder_2-md.entry.js":[165,38],"./ion-ripple-effect.entry.js":[166,85],"./ion-route_4.entry.js":[167,70],"./ion-searchbar-ios.entry.js":[168,28],"./ion-searchbar-md.entry.js":[169,29],"./ion-segment_2-ios.entry.js":[170,71],"./ion-segment_2-md.entry.js":[171,72],"./ion-select_3-ios.entry.js":[172,34],"./ion-select_3-md.entry.js":[173,35],"./ion-slide_2-ios.entry.js":[174,86],"./ion-slide_2-md.entry.js":[175,87],"./ion-spinner.entry.js":[176,73],"./ion-split-pane-ios.entry.js":[177,88],"./ion-split-pane-md.entry.js":[178,89],"./ion-tab-bar_2-ios.entry.js":[179,74],"./ion-tab-bar_2-md.entry.js":[180,75],"./ion-tab_2.entry.js":[181,36],"./ion-text.entry.js":[182,76],"./ion-textarea-ios.entry.js":[183,77],"./ion-textarea-md.entry.js":[184,78],"./ion-toast-ios.entry.js":[185,30],"./ion-toast-md.entry.js":[186,31],"./ion-toggle-ios.entry.js":[187,22],"./ion-toggle-md.entry.js":[188,23],"./ion-virtual-scroll.entry.js":[189,90]};function i(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(o)},i.id=72,e.exports=i},73:function(e,t,n){var o={"./ion-icon.entry.js":[193,98]};function i(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(o)},i.id=73,e.exports=i}},[[66,9,10]]]);
//# sourceMappingURL=main.d93a0fef.chunk.js.map