function t(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},n=e.parcelRequired7c6;null==n&&((n=function(t){if(t in o)return o[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequired7c6=n),n.register("31u3U",(function(e,o){t(e.exports,"loadGenre",(function(){return d})),t(e.exports,"addQueue",(function(){return p})),t(e.exports,"addWatched",(function(){return u})),t(e.exports,"createQueueCollection",(function(){return y})),t(e.exports,"createWarchedCollection",(function(){return x})),t(e.exports,"removeFilmWatched",(function(){return g})),t(e.exports,"removeFilmQueue",(function(){return b}));var i=n("iQIUW"),a=n("9TCtp"),s=n("bTcpz"),r=n("krGWQ"),l=n("3huUq");const c="genres",f="watched",m="queue";function d(){(0,a.fetchGenre)().then((t=>{const e=JSON.stringify(t.genres);localStorage.setItem(c,e)})).catch(console.log)}function p(t){const e=Number(t.target.dataset.id),o=JSON.parse(localStorage.getItem(m)),n=JSON.parse(localStorage.getItem(f));if(n&&n.includes(e))i.Notify.warning("The movie is already in the Watched");else{if(!o){const t=[];return t.push(e),localStorage.setItem(m,JSON.stringify(t)),i.Notify.success("Movie added to Queue"),void(0,s.closeModal)()}if(!o.includes(e))return o.push(e),localStorage.setItem(m,JSON.stringify(o)),i.Notify.success("Movie added to Queue"),void(0,s.closeModal)();i.Notify.warning("The movie is already in the Queue")}}function u(t){const e=Number(t.target.dataset.id),o=JSON.parse(localStorage.getItem(f)),n=JSON.parse(localStorage.getItem(m));if(n&&n.includes(e))i.Notify.warning("The movie is already in the Queue");else{if(!o){const t=[];return t.push(e),localStorage.setItem(f,JSON.stringify(t)),i.Notify.success("Movie added to Watched"),void(0,s.closeModal)()}if(!o.includes(e))return o.push(e),localStorage.setItem(f,JSON.stringify(o)),i.Notify.success("Movie added to Watched"),void(0,s.closeModal)();i.Notify.warning("The movie is already in the Watched")}}function y(){r.refs.btnQueueCol.classList.add("header-lib-btn_active"),r.refs.btnWatchedCol.classList.remove("header-lib-btn_active");const t=JSON.parse(localStorage.getItem(m));t&&(0,a.fetchFilmsCol)(t).then((t=>{const e=(0,l.creatMarkup)(t);r.refs.filmList.innerHTML=e})).catch(console.log),r.refs.filmList.innerHTML=""}function x(){r.refs.btnQueueCol.classList.remove("header-lib-btn_active"),r.refs.btnWatchedCol.classList.add("header-lib-btn_active");const t=JSON.parse(localStorage.getItem(f));t&&(0,a.fetchFilmsCol)(t).then((t=>{const e=(0,l.creatMarkup)(t);r.refs.filmList.innerHTML=e})).catch(console.log),r.refs.filmList.innerHTML=""}function g(t){const e=Number(t.target.dataset.id),o=JSON.parse(localStorage.getItem(f));if(o&&o.includes(e)){const t=o.indexOf(e);return o.splice(t,1),localStorage.setItem(f,JSON.stringify(o)),x(),i.Notify.success("Movie removed from Watched"),void(0,s.closeModal)()}i.Notify.warning("The movie is not in the Watched")}function b(t){const e=Number(t.target.dataset.id),o=JSON.parse(localStorage.getItem(m));if(o&&o.includes(e)){const t=o.indexOf(e);return o.splice(t,1),localStorage.setItem(m,JSON.stringify(o)),i.Notify.success("Movie removed from Queue"),y(),void(0,s.closeModal)()}i.Notify.warning("The movie is not in the Queue")}})),n.register("iQIUW",(function(t,o){var i,n;i=void 0!==e?e:"undefined"!=typeof window?window:t.exports,n=function(t){if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",a="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(r('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=c(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,d=function(r,f,d,u){if(!l("body"))return!1;e||p.Notify.init({});var y=c(!0,e,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof u&&!Array.isArray(u)){var x={};"object"==typeof d?x=d:"object"==typeof u&&(x=u),e=c(!0,e,x)}var g,b,h=e[r.toLocaleLowerCase("en")];m++,"string"!=typeof f&&(f="Notiflix "+r),e.plainText&&(g=f,(b=t.document.createElement("div")).innerHTML=g,f=b.textContent||b.innerText||""),!e.plainText&&f.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),f='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),f.length>e.messageMaxLength&&(f=f.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),e.cssAnimation||(e.cssAnimationDuration=0);var v=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(v.id=s.wrapID,v.style.width=e.width,v.style.zIndex=e.zindex,v.style.opacity=e.opacity,"center-center"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.margin="auto",v.classList.add("nx-flex-center-center"),v.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.justifyContent="center",v.style.alignItems="center",v.style.pointerEvents="none"):"center-top"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.top=e.distance,v.style.bottom="auto",v.style.margin="auto"):"center-bottom"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.margin="auto"):"right-bottom"===e.position?(v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.left="auto"):"left-top"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right="auto",v.style.bottom="auto"):"left-bottom"===e.position?(v.style.left=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.right="auto"):(v.style.right=e.distance,v.style.top=e.distance,v.style.left="auto",v.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(s.overlayID)||t.document.createElement("div");w.id=s.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=h.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(v);var N=t.document.createElement("div");N.id=e.ID+"-"+m,N.className=e.className+" "+h.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),N.style.fontSize=e.fontSize,N.style.color=h.textColor,N.style.background=h.background,N.style.borderRadius=e.borderRadius,N.style.pointerEvents="all",e.rtl&&(N.setAttribute("dir","rtl"),N.classList.add("nx-rtl-on")),N.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(N.style.animationDuration=e.cssAnimationDuration+"ms");var k="";if(e.closeButton&&"function"!=typeof d&&(k='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)N.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?k:"");else{var I="";r===o?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':r===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':r===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':r===a&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),N.innerHTML=I+'<span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?k:"")}else N.innerHTML='<span class="nx-message">'+f+"</span>"+(e.closeButton?k:"");if("left-bottom"===e.position||"right-bottom"===e.position){var S=t.document.getElementById(s.wrapID);S.insertBefore(N,S.firstChild)}else t.document.getElementById(s.wrapID).appendChild(N);var C=t.document.getElementById(N.id);if(C){var _,W,z=function(){C.classList.add("nx-remove");var e=t.document.getElementById(s.overlayID);e&&v.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(_)},T=function(){if(C&&null!==C.parentNode&&C.parentNode.removeChild(C),v.childElementCount<=0&&null!==v.parentNode){v.parentNode.removeChild(v);var e=t.document.getElementById(s.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(W)};if(e.closeButton&&"function"!=typeof d&&t.document.getElementById(N.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof d||e.clickToClose)&&C.addEventListener("click",(function(){"function"==typeof d&&d(),z();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof d){var O=function(){_=setTimeout((function(){z()}),e.timeout),W=setTimeout((function(){T()}),e.timeout+e.cssAnimationDuration)};O(),e.pauseOnHover&&(C.addEventListener("mouseenter",(function(){C.classList.add("nx-paused"),clearTimeout(_),clearTimeout(W)})),C.addEventListener("mouseleave",(function(){C.classList.remove("nx-paused"),O()})))}}if(e.showOnlyTheLastOne&&m>0)for(var A=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+m+"])"),L=0;L<A.length;L++){var M=A[L];null!==M.parentNode&&M.parentNode.removeChild(M)}e=c(!0,e,y)},p={Notify:{init:function(o){e=c(!0,s,o),function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(f,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return r("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){d(o,t,e,i)},failure:function(t,e,o){d(i,t,e,o)},warning:function(t,e,o){d(n,t,e,o)},info:function(t,e,o){d(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return n(i)})):"object"==typeof t.exports?t.exports=n(i):i.Notiflix=n(i)})),n.register("9TCtp",(function(e,o){t(e.exports,"fetchApi",(function(){return i})),t(e.exports,"fetchGenre",(function(){return s})),t(e.exports,"fetchFilmById",(function(){return n})),t(e.exports,"fetchSearch",(function(){return a})),t(e.exports,"fetchFilmsCol",(function(){return r}));async function i(t=1){const e=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=0d7d20afff25839c3a8a445daa632bca&page=${t}`);return await e.json()}async function n(t){const e=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=0d7d20afff25839c3a8a445daa632bca&language=en-US`);return await e.json()}async function a(t,e=1){const o=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0d7d20afff25839c3a8a445daa632bca&query=${t}&language=en-US&page=${e}`);return await o.json()}async function s(){const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0d7d20afff25839c3a8a445daa632bca&language=en-US");return await t.json()}async function r(t){const e=await t.map((async t=>(await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=0d7d20afff25839c3a8a445daa632bca&language=en-US`)).json()));return await Promise.all(e)}})),n.register("bTcpz",(function(e,o){t(e.exports,"openModal",(function(){return r})),t(e.exports,"closeModal",(function(){return l}));var i=n("9TCtp"),a=n("3huUq"),s=n("krGWQ");function r(t){window.addEventListener("keydown",c),s.refs.backdrop.addEventListener("click",(t=>{"backdrop"===t.target.className&&s.refs.backdrop.classList.add("is-hidden")}));const e=Number(t.target.dataset.id);e&&(s.refs.backdrop.classList.remove("is-hidden"),s.refs.modalBtns.forEach((t=>{t.setAttribute("data-id",e)})),(0,i.fetchFilmById)(e).then((t=>{const e=(0,a.creatCardMarkup)(t);s.refs.modalBox.innerHTML=e})).catch(console.log))}function l(){s.refs.backdrop.classList.add("is-hidden"),s.refs.modalBtns.forEach((t=>{t.removeAttribute("data-id")})),window.removeEventListener("keydown",c)}function c(t){"Escape"===t.code&&l()}})),n.register("3huUq",(function(e,o){t(e.exports,"creatMarkup",(function(){return n})),t(e.exports,"creatCardMarkup",(function(){return a}));const i="genres";function n(t){const e=t.filter((t=>t.backdrop_path)),o=JSON.parse(localStorage.getItem(i));return e.map((({title:t,poster_path:e,id:i,genre_ids:n,genres:a,release_date:s})=>{const r=[];n?n.forEach((t=>{o.forEach((e=>{e.id===t&&r.push(e.name)}))})):a.forEach((t=>{r.push(t.name)}));const l=s.split("-")[0];return`\n        <li class="film-list__item" data-id="${i}">\n          <img \n            src="https://image.tmdb.org/t/p/w500${e}" \n            alt="${t}" \n            class="film-list__img"\n            data-id="${i}"\n          >\n\n          <h2 class="film-list__title" data-id="${i}">${t}</h2>\n          <p class="film-list__text" data-id="${i}">${r.join(", ")||"No ganres"} | ${l}</p>\n        </li>\n      `})).join("")}function a({overview:t,popularity:e,poster_path:o,original_title:n,vote_average:a,vote_count:s,release_date:r,genres:l}){JSON.parse(localStorage.getItem(i));const c=[];l.forEach((t=>{c.push(t.name)}));const f=c.join(", ")||"No ganres";return`\n        <img src="https://image.tmdb.org/t/p/w500${o}" class="modal-img" alt="${n}" loading="lazy">\n        <div class="modal-content-box">\n            <h2 class="modal-title">${n}</h2>\n\n            <ul class="modal-list">\n                <li class="modal-list__item">\n                    <p class="modal-list__text">Vote / Votes</p>\n\n                    <div class="modal-list__box">\n                      <span class="modal-list__vote">${a.toFixed(1)}</span>\n                      <span class="modal-list__text">/</span>\n                      <span class="modal-list__value modal-list__value_one">${s}</span>\n                    </div>\n                </li>\n\n                <li class="modal-list__item">\n                    <p class="modal-list__text">Popularity</p>\n\n                    <div class="modal-list__box">\n                      <span class="modal-list__value">${e.toFixed(1)}</span>\n                    </div>\n                </li>\n\n                <li class="modal-list__item">\n                    <p class="modal-list__text">Original Title</p>\n\n                    <div class="modal-list__box">\n                      <span class="modal-list__value">${n}</span>\n                    </div>\n                </li>\n\n                <li class="modal-list__item">\n                    <p class="modal-list__text">Genres</p>\n\n                    <div class="modal-list__box">\n                      <span class="modal-list__value">${f}</span>\n                    </div>\n                </li>\n            </ul>\n            <h3 class="modal-sub-title">About</h3>\n            <p class="modal-text">${t}</p>\n            \n        </div>\n    `}})),n.register("krGWQ",(function(e,o){t(e.exports,"refs",(function(){return i}));const i={filmList:document.querySelector(".film-list"),backdrop:document.querySelector(".backdrop"),closeModalBtn:document.querySelector(".modal-close__btn"),modalBox:document.querySelector(".modal-box"),searchForm:document.querySelector(".header-form"),searchFormText:document.querySelector(".header-form__text"),modalBtns:document.querySelectorAll(".modal-btn"),modalBtnWatched:document.querySelector("button[data-watched]"),modalBtnQueue:document.querySelector("button[data-queue]"),inputSearch:document.querySelector('input[name="searchFilm"]'),container:document.getElementById("tui-pagination-container"),btnWatchedCol:document.querySelector(".js-watched-btn"),btnQueueCol:document.querySelector(".js-queue-btn"),btnRemoveWatched:document.querySelector("button[data-watched]"),btnRemoveQueue:document.querySelector("button[data-queue]"),modalBtns:document.querySelectorAll(".modal-btn")}}));
//# sourceMappingURL=library.75c5e1bc.js.map
