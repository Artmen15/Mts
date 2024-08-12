/*
* ver: 1.0.12
*/

(()=>{"use strict";var e,t,n={198:(e,t,n)=>{n.r(t),n.d(t,{emit:()=>i});var r=n(860),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e){var t;t=function(e){return o(o({},e),{source:r.source})}(e),window.postMessage(t)}},860:(e,t,n)=>{n.r(t),n.d(t,{source:()=>o,EventType:()=>r});var r,o="mts.ssp.event";!function(e){e.LoaderReady="ready",e.PlaceDefined="place.defined",e.PlaceRequested="place.requested",e.PlaceReceived="place.received",e.SlotFound="slot.found",e.SlotMounted="slot.mounted",e.SlotUpdated="slot.updated",e.SlotUnmounted="slot.unmounted"}(r||(r={}))},903:(e,t,n)=>{n.r(t),n.d(t,{getOrientation:()=>r});var r=function(){var e,t,n;return(null===(n=null===(t=null===(e=window.screen.orientation)||void 0===e?void 0:e.type)||void 0===t?void 0:t.match(/^landscape|portrait\-.*/))||void 0===n?void 0:n[0])||"landscape"}}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"p/video.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="loader:",o.l=(n,r,i,a)=>{if(e[n])e[n].push(r);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[r];var h=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={716:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=i);var a=o.p+o.u(t),s=new Error;o.l(a,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,i,[a,s,c]=n,l=0;for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)c(o);for(t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0},n=self.webpackChunkloader=self.webpackChunkloader||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i={};(()=>{o.r(i);var e,t=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},n=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},r=function(){function e(e){var t=e.domain;this.domain=t}return e.prototype.requestPlaceData=function(e){return t(this,void 0,void 0,(function(){var t,r,o,i,a,s;return n(this,(function(n){switch(n.label){case 0:return t=this.serializePlaceQuery(e),r=t.params,o=t.headers,i="https://".concat(this.domain,"/v").concat(this.buildQuery(r)),[4,fetch(i,{credentials:"include",headers:o})];case 1:if(200!==(a=n.sent()).status)return[3,8];switch(a.headers.get("Content-Type")){case"application/xml":return[3,2];case"application/json":return[3,4]}return[3,6];case 2:return s={type:"vast"},[4,a.text()];case 3:return[2,(s.content=n.sent(),s.events={},s)];case 4:return[4,a.json()];case 5:return[2,n.sent()];case 6:return[2,{type:"no-content"}];case 7:return[3,9];case 8:if(204===a.status)return[2,{type:"no-content"}];throw new Error("");case 9:return[2]}}))}))},e.prototype.createVastUrl=function(e){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){return t=this.serializePlaceQuery(e).params,[2,"https://".concat(this.domain,"/v").concat(this.buildQuery(t))]}))}))},e.prototype.reportPlaceEvent=function(e,t){"show"===e&&("eventtrackers"in t?t.eventtrackers.imp:[t.events.show]).forEach((function(e){(new Image).src=e}))},e.prototype.buildQuery=function(e){var t=e.map((function(e){var t=e[0],n=e[1];return"".concat(t,"=").concat(n)})).join("&");return t.length?"?".concat(t):""},e.prototype.serializePlaceQuery=function(e){for(var t=[],n={},r=function(e,n,r){return void 0===r&&(r=!1),t.push([r?"".concat(e,"[]"):e,n])},o=0,i=Object.entries(e.params||{});o<i.length;o++){var a=i[o],s=a[0],c=a[1];if(Array.isArray(c))for(var l=0,u=c;l<u.length;l++){r(s,u[l],!0)}else r(s,c)}for(var d=0,h=Object.entries(e.headers||{});d<h.length;d++){var p=h[d];s=p[0],c=p[1];n[s]=c.toString()}for(var f=0,y=Object.keys(e);f<y.length;f++){if(void 0!==e[s=y[f]])switch(s){case"params":case"headers":break;case"width":case"height":r(s,Math.ceil(e[s]));break;case"rereferer":case"page":case"passback_url":r(s,encodeURIComponent(e[s]));break;case"bapp":for(var v=0,b=e[s];v<b.length;v++){r(s,b[v],!0)}break;default:r(s,e[s])}}return{params:t,headers:n}},e}(),a=o(198),s=o(860),c=o(903),l=function(){function e(e,t){var n=this;this.findAddedAndNotify=function(e){for(var t=[],r=0,o=e;r<o.length;r++){var i=o[r];"childList"===i.type&&i.addedNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE){var r=e;r.matches(n.selector)?t.push(r):r.querySelectorAll(n.selector).forEach((function(e){return t.push(e)}))}}))}n.notifyWithResult(t)},this.callback=e,this.selector=t.selector,this.observer=new MutationObserver(this.findAddedAndNotify)}return e.prototype.observe=function(e){this.observer.observe(e,{childList:!0,subtree:!0}),this.findExistAndNotify(e)},e.prototype.disconnect=function(){this.observer.disconnect()},e.prototype.findExistAndNotify=function(e){var t=[];e.querySelectorAll(this.selector).forEach((function(e){t.push(e)})),this.notifyWithResult(t)},e.prototype.notifyWithResult=function(e){e.length&&this.callback(e)},e}(),u=function(){function e(e){var t=this;this.offset=200,this.elements=[],this.checkAndNotify=function(){for(var e=[],n=t,r=n.offset,o=n.elements,i=n.callback,a=0,s=o;a<s.length;a++){var c=s[a],l=window.innerHeight,u=c.getBoundingClientRect(),d=u.top,h=l-u.bottom;(d<0&&d>-1*r||d>=0&&d<l||h<0&&h>-1*r)&&e.push(c)}e.length&&i(e)},this.callback=e,this.isConnected=!1}return e.prototype.observe=function(e){this.elements.push(e),this.isConnected||(this.isConnected=!0,window.addEventListener("scroll",this.checkAndNotify)),this.checkAndNotify()},e.prototype.unobserve=function(e){var t=this.elements.indexOf(e);t>=0&&this.elements.splice(t,1),this.isConnected&&0===this.elements.length&&(this.isConnected=!1,window.removeEventListener("scroll",this.checkAndNotify))},e.prototype.disconnect=function(){this.elements.splice(0,this.elements.length)},e}(),d=function(){function t(t){var n,r=this;this.viewabilityCriteria=((n={})[e.Standard]={ratio:.5,time:1e3},n[e.Large]={ratio:.3,time:1e3},n[e.Video]={ratio:.5,time:2e3},n),this.handleVisibilityChange=function(e){for(var t=0,n=e;t<n.length;t++){var o=n[t],i=o.target,a=r.getSlotViabilityCriteria(i),s=a.ratio,c=a.time,l=r.hasPlannedNotifications(i),u=o.intersectionRatio>=s&&!l,d=o.intersectionRatio<s&&l;u?r.planNotification(i,c):d&&r.cancelPlannedNotifications(i)}},this.callback=t,this.state=new Map,this.observer=new IntersectionObserver(this.handleVisibilityChange,{threshold:Object.values(this.viewabilityCriteria).map((function(e){return e.ratio}))})}return t.prototype.observe=function(t,n){void 0===n&&(n=e.Standard),this.state.set(t,{type:n}),this.observer.observe(t)},t.prototype.unobserve=function(e){this.hasPlannedNotifications(e)&&this.cancelPlannedNotifications(e),this.state.delete(e),this.observer.unobserve(e)},t.prototype.disconnect=function(){var e=this;this.state.forEach((function(t,n){e.cancelPlannedNotifications(n),e.state.delete(n)})),this.observer.disconnect()},t.prototype.hasPlannedNotifications=function(e){return!!this.state.get(e).timeout},t.prototype.cancelPlannedNotifications=function(e){var t=this.state.get(e);t.timeout&&(clearTimeout(t.timeout),delete t.timeout)},t.prototype.planNotification=function(e,t){var n=this,r=this.state.get(e);r.timeout=setTimeout((function(){n.callback(e),delete r.timeout}),t)},t.prototype.getSlotViabilityCriteria=function(e){var t=this.state.get(e);return this.viewabilityCriteria[t.type]},t}();!function(e){e[e.Standard=0]="Standard",e[e.Large=1]="Large",e[e.Video=2]="Video"}(e||(e={}));var h,p=function(e,t){var n=e.appendChild(document.createElement("div"));n.style.height="100%",n.style.width="100%",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center";var r=n.appendChild(document.createElement("iframe"));r.style.height=t.h+"px",r.style.width=t.w+"px",r.style.border="none";var o=r.contentDocument,i=r.contentWindow,a=function(){r.style.height=Math.max(o.body.scrollHeight,t.h)+"px",r.style.width=Math.max(o.body.scrollWidth,t.w)+"px"};i.addEventListener("resize",(function(){a()})),r.onload=function(){r.contentDocument.body.style.margin="0px",r.contentDocument.body.style.padding="0px",a()},o.open(),o.write(t.content),o.close()},f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},v=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},b=function(){function e(e,t,n,r,o){var i=this;this.notifySlotIsVisible=function(e){var t=i.data.get(e);i.ssp.reportPlaceEvent("show",t),i.slotsVisibilityObserver.unobserve(e)},this.registerSlots=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];i.slotsPrerenderObserver.observe(r),(0,a.emit)({type:s.EventType.SlotFound,slot:{},place:{id:i.config.id}})}},this.loadSlotsContentAndRender=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];i.slotsPrerenderObserver.unobserve(r),i.renderSlot(r)}},this.common=e,this.config=t,this.ssp=n,this.onLoaded=r,this.onLoadingFail=o,this.slots=[],this.data=new Map,this.slotsAddObserver=new l(this.registerSlots,{selector:t.selector}),this.slotsPrerenderObserver=new u(this.loadSlotsContentAndRender),this.slotsVisibilityObserver=new d(this.notifySlotIsVisible)}return e.prototype.getContentType=function(e){return"html"},e.prototype.run=function(){return y(this,void 0,void 0,(function(){return v(this,(function(e){return this.slotsAddObserver.observe(document.body),[2]}))}))},e.prototype.renderSlot=function(e){var t,n;return y(this,void 0,void 0,(function(){var r,o,i,l,u,d,h,y,b,g,m,w,P,k,x,E,S,L,O;return v(this,(function(v){switch(v.label){case 0:for(r=this.config.id,o=this.config,i={},l=0,u=Object.keys(o);l<u.length;l++)(d=u[l]).match(/^puid\d+$/)&&(i[d]=o[d]);return h=this.common.page,y=e.getBoundingClientRect(),b=y.width,g=y.height,(0,a.emit)({type:s.EventType.PlaceRequested,place:{id:this.config.id}}),[4,this.ssp.requestPlaceData(f({p:r,width:b,height:g,orientation:(0,c.getOrientation)(),blocknum:this.slots.length+1,rereferer:null!==(t=o.rereferer)&&void 0!==t?t:document.referrer,page:null!==(n=o.page)&&void 0!==n?n:h,passback_url:o.passback_url,bapp:o.bapp,ifa:o.ifa,os:o.os,bundle:o.bundle,rars:o.rars,eid1:o.eid1,eid2:o.eid2,pr:o.pr,params:o.params,headers:o.headers},i))];case 1:if(m=v.sent(),(0,a.emit)({type:s.EventType.PlaceReceived,place:{id:this.config.id}}),"bids"in m)w=m.bids[0],this.data.set(e,w),P=w.img,L=w.h,O=w.w,k=w.click_url,x=w.title,E="height: ".concat(L,"px; width: ").concat(O,"px; display: flex; flex-direction: column;align-items: center; justify-content: center; gap: 8px; text-decoration: none;"),"display: inline; width: auto; color: #6E7782;  line-height: 20px;  font-weight: 500; font: 16px sans-serif",p(e,{content:'<html style="margin:0; padding: 0;"><head><meta charset="utf-8"></head><body style="margin:0; padding: 0;"><a href="'.concat(k,'" target="_blank" style="').concat(E,'"><img src="').concat(P,'" /><div style="').concat("display: inline; width: auto; color: #6E7782;  line-height: 20px;  font-weight: 500; font: 16px sans-serif",'">').concat(x,"</div></a></body></html>"),h:L,w:O}),(0,a.emit)({type:s.EventType.SlotMounted,slot:{},size:{width:O,height:L},place:{id:this.config.id}}),this.slotsVisibilityObserver.observe(e),this.slots.push(e),this.onLoaded();else if("banner"===m.type){switch(this.data.set(e,m),S=m.content,L=m.h,O=m.w,this.getContentType(S)){case"html":p(e,{content:S,h:L,w:O});break;case"image":A={content:S},e.attachShadow({mode:"closed"}).appendChild(document.createElement("div")).innerHTML=A.content}(0,a.emit)({type:s.EventType.SlotMounted,slot:{},size:{width:O,height:L},place:{id:this.config.id}}),this.slotsVisibilityObserver.observe(e),this.slots.push(e),this.onLoaded()}else this.onLoadingFail();return[2]}var A}))}))},e.prototype.destroy=function(){return y(this,void 0,void 0,(function(){var e,t;return v(this,(function(n){for(this.slotsAddObserver.disconnect(),this.slotsPrerenderObserver.disconnect(),this.slotsVisibilityObserver.disconnect(),e=0,t=this.slots;e<t.length;e++)t[e].innerHTML="";return(0,a.emit)({type:s.EventType.SlotUnmounted,slot:{},place:{id:this.config.id}}),[2]}))}))},e}(),g=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},m=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};!function(e){e.PlaceLoaded="placeLooaded",e.PlaceLoadingFailed="placeLooadingFailed",e.PlaceDestroyed="placeDestroyed"}(h||(h={}));var w,P=function(){function e(e){var t=e.root,n=e.onEvent;this.root=t,this.onEvent=n,this.renderers={},(0,a.emit)({type:s.EventType.LoaderReady})}return e.prototype.loadPlace=function(e,t){var n;return g(this,void 0,void 0,(function(){var o,i,c,l,u,d,p=this;return m(this,(function(f){switch(f.label){case 0:switch((0,a.emit)({type:s.EventType.PlaceDefined,place:{id:e.id}}),o=null,i=new r({domain:t.domain}),c=function(){p.onEvent({type:h.PlaceLoaded,placeId:e.id})},l=function(){p.onEvent({type:h.PlaceLoadingFailed,placeId:e.id}),p.destroyPlace(e.id)},u={page:null!==(n=t.page)&&void 0!==n?n:document.location.href},e.type){case"banner":return[3,1];case"vast":return[3,2]}return[3,4];case 1:return o=new b(u,e,i,c,l),[3,4];case 2:return[4,this.importVast()];case 3:return d=f.sent().VastPlace,o=new d(u,e,i,c,l),[3,4];case 4:return o&&(this.renderers[e.id]=o,this.renderers[e.id].run()),[2]}}))}))},e.prototype.destroyPlace=function(e){return g(this,void 0,void 0,(function(){return m(this,(function(t){switch(t.label){case 0:return this.renderers[e]?[4,this.renderers[e].destroy()]:[3,2];case 1:t.sent(),delete this.renderers[e],this.onEvent({type:h.PlaceDestroyed,placeId:e}),t.label=2;case 2:return[2]}}))}))},e.prototype.destroyAllPlaces=function(){return g(this,void 0,void 0,(function(){var e,t,n;return m(this,(function(r){switch(r.label){case 0:e=0,t=Object.keys(this.renderers),r.label=1;case 1:return e<t.length?(n=t[e],[4,this.renderers[n].destroy()]):[3,4];case 2:r.sent(),this.onEvent({type:h.PlaceDestroyed,placeId:n}),r.label=3;case 3:return e++,[3,1];case 4:return[2]}}))}))},e.prototype.importVast=function(){return g(this,void 0,void 0,(function(){return m(this,(function(e){return[2,o.e(461).then(o.bind(o,773))]}))}))},e}();!function(e){e.Hb="mts.ssp.hb",e.Places="mts.ssp.places",e.Config="mts.ssp.config",e.Runtime="mts.ssp.runtime"}(w||(w={}));var k,x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},E=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};!function(e){e.ApiReady="apiReady",e.PlaceAdded="placeAdded",e.PlaceDestroyRequested="placeDestroyRequested",e.DestroyRequested="destroyRequested"}(k||(k={}));var S=function(){function e(){this.loadedPlaces=[],this.eventListeners=[]}return e.checkIsAttached=function(e){return e[w.Runtime]},e.prototype.attach=function(e){var t=this,n=e.context,r=e.onEvent,o=n,i=o[w.Places],a=void 0===i?[]:i,s=o[w.Config],c=void 0===s?{}:s;this.places=a,this.config=c,this.context=n,n[w.Places]=new Proxy(a,{set:function(e,t,n){return e[t]=n,r({type:k.PlaceAdded,place:n}),!0}}),n[w.Config]=new Proxy(c,{set:function(e,t,n){return e[t]=n,!0}}),n[w.Runtime]=Object.defineProperties({},{onEvent:{value:function(e,n){return t.eventListeners.push({type:e,fn:n})}},destroyPlace:{value:function(e){return r({type:k.PlaceDestroyRequested,placeId:e})}},destroy:{value:function(){return r({type:k.DestroyRequested})}}}),r({type:k.ApiReady})},e.prototype.deattach=function(){var e=this,t=e.context,n=e.places,r=e.config;t[w.Places]=E([],n,!0),t[w.Config]=x({},r),delete t[w.Runtime]},e.prototype.notifyPlaceLoaded=function(e){console.log("loaded 1",this.eventListeners);for(var t=0,n=this.eventListeners;t<n.length;t++){var r=n[t];"placeLoaded"===r.type&&r.fn(e)}},e.prototype.notifyPlaceLoadingFailed=function(e){console.log("failed 1",this.eventListeners);for(var t=0,n=this.eventListeners;t<n.length;t++){var r=n[t];"placeLoadingFailed"===r.type&&r.fn(e)}},e.prototype.notifyPlaceDestroyed=function(e){},e}(),L=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};(function(e,t,n,r){new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))})(void 0,void 0,void 0,(function(){var e,t;return L(this,(function(n){return S.checkIsAttached(window)||(e=new S,t=new P({root:window.document.body,onEvent:function(t){switch(t.type){case h.PlaceLoaded:e.notifyPlaceLoaded(t.placeId);break;case h.PlaceLoadingFailed:e.notifyPlaceLoadingFailed(t.placeId);break;case h.PlaceDestroyed:e.notifyPlaceDestroyed(t.placeId)}}}),e.attach({context:window,onEvent:function(n){switch(n.type){case k.ApiReady:for(var r=0,o=e.places;r<o.length;r++){var i=o[r];t.loadPlace(i,e.config)}break;case k.PlaceAdded:t.loadPlace(n.place,e.config);break;case k.PlaceDestroyRequested:t.destroyPlace(n.placeId);break;case k.DestroyRequested:t.destroyAllPlaces(),e.deattach()}}})),[2]}))}))})()})();