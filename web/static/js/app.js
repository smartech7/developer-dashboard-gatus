(function(e){function t(t){for(var s,c,o=t[0],a=t[1],l=t[2],h=0,d=[];h<o.length;h++)c=o[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(s=!1)}s&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},r={app:0},i=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1cf9":function(e,t,n){"use strict";n("7e86")},"22c8":function(e,t,n){},"359c":function(e,t,n){e.exports=n.p+"img/github.png"},"49d2":function(e,t,n){"use strict";n("bca1")},"508b":function(e,t,n){"use strict";n("22c8")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"SERVER_URL",(function(){return tt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),r=n("cf05"),i=n.n(r),c={class:"container container-xs relative mx-auto rounded shadow-xl border my-3 p-5 text-left",id:"global"},o=Object(s["h"])("div",{class:"mb-2"},[Object(s["h"])("div",{class:"flex flex-wrap"},[Object(s["h"])("div",{class:"w-3/4 text-left my-auto"},[Object(s["h"])("div",{class:"title text-5xl font-light"},"Health Status")]),Object(s["h"])("div",{class:"w-1/4 flex justify-end"},[Object(s["h"])("img",{src:i.a,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}})])])],-1);function a(e,t,n,r,i,a){var l=Object(s["y"])("router-view"),u=Object(s["y"])("Tooltip"),h=Object(s["y"])("Social");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["h"])("div",c,[o,Object(s["h"])(l,{onShowTooltip:a.showTooltip},null,8,["onShowTooltip"])]),Object(s["h"])(u,{result:i.tooltip.result,event:i.tooltip.event},null,8,["result","event"]),Object(s["h"])(h)],64)}var l=n("359c"),u=n.n(l),h=Object(s["E"])("data-v-1cbbc992");Object(s["t"])("data-v-1cbbc992");var d={id:"social"},b=Object(s["h"])("a",{href:"https://github.com/TwinProduction/gatus",target:"_blank",title:"Gatus on GitHub"},[Object(s["h"])("img",{src:u.a,alt:"GitHub",width:"32",height:"auto"})],-1);Object(s["r"])();var p=h((function(e,t,n,r,i,c){return Object(s["q"])(),Object(s["d"])("div",d,[b])})),f={name:"Social"};n("508b");f.render=p,f.__scopeId="data-v-1cbbc992";var v=f,m=(n("b680"),Object(s["h"])("div",{class:"tooltip-title"},"Timestamp:",-1)),O={id:"tooltip-timestamp"},j=Object(s["h"])("div",{class:"tooltip-title"},"Response time:",-1),g={id:"tooltip-response-time"},x=Object(s["h"])("div",{class:"tooltip-title"},"Conditions:",-1),y={id:"tooltip-conditions"},w=Object(s["h"])("br",null,null,-1),T={key:0,id:"tooltip-errors-container"},S=Object(s["h"])("div",{class:"tooltip-title"},"Errors:",-1),R={id:"tooltip-errors"},A=Object(s["h"])("br",null,null,-1);function k(e,t,n,r,i,c){return Object(s["q"])(),Object(s["d"])("div",{id:"tooltip",ref:"tooltip",class:i.hidden?"invisible":"",style:"top:"+i.top+"px; left:"+i.left+"px"},[n.result?Object(s["x"])(e.$slots,"default",{key:0},(function(){return[m,Object(s["h"])("code",O,Object(s["A"])(c.prettifyTimestamp(n.result.timestamp)),1),j,Object(s["h"])("code",g,Object(s["A"])((n.result.duration/1e6).toFixed(0))+"ms",1),x,Object(s["h"])("code",y,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(n.result.conditionResults,(function(t){return Object(s["x"])(e.$slots,"default",{key:t},(function(){return[Object(s["g"])(Object(s["A"])(t.success?"✓":"X")+" ~ "+Object(s["A"])(t.condition),1),w]}))})),128))]),n.result.errors&&n.result.errors.length?(Object(s["q"])(),Object(s["d"])("div",T,[S,Object(s["h"])("code",R,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(n.result.errors,(function(t){return Object(s["x"])(e.$slots,"default",{key:t},(function(){return[Object(s["g"])(" - "+Object(s["A"])(t),1),A]}))})),128))])])):Object(s["e"])("",!0)]})):Object(s["e"])("",!0)],6)}n("ac1f"),n("5319");var I={name:"Services",props:{event:Event,result:Object},methods:{prettifyTimestamp:function(e){var t=new Date(e),n=t.getFullYear(),s=(t.getMonth()+1<10?"0":"")+(t.getMonth()+1),r=(t.getDate()<10?"0":"")+t.getDate(),i=(t.getHours()<10?"0":"")+t.getHours(),c=(t.getMinutes()<10?"0":"")+t.getMinutes(),o=(t.getSeconds()<10?"0":"")+t.getSeconds();return n+"-"+s+"-"+r+" "+i+":"+c+":"+o},htmlEntities:function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},reposition:function(){if(this.event&&this.event.type)if("mouseenter"===this.event.type){var e=this.event.target.getBoundingClientRect().y+30,t=this.event.target.getBoundingClientRect().x,n=this.$refs.tooltip.getBoundingClientRect();t+window.scrollX+n.width+50>document.body.getBoundingClientRect().width&&(t=this.event.target.getBoundingClientRect().x-n.width+this.event.target.getBoundingClientRect().width,t<0&&(t+=-t)),e+window.scrollY+n.height+50>document.body.getBoundingClientRect().height&&e>=0&&(e=this.event.target.getBoundingClientRect().y-(n.height+10),e<0&&(e=this.event.target.getBoundingClientRect().y+30)),this.top=e,this.left=t}else"mouseleave"===this.event.type&&(this.hidden=!0)}},watch:{event:function(e){e&&e.type&&("mouseenter"===e.type?this.hidden=!1:"mouseleave"===e.type&&(this.hidden=!0))}},updated:function(){this.reposition()},created:function(){this.reposition()},data:function(){return{hidden:!1,top:0,left:0}}};n("75d6");I.render=k;var D=I,q={name:"App",components:{Social:v,Tooltip:D},methods:{showTooltip:function(e,t){this.tooltip={result:e,event:t}}},data:function(){return{tooltip:{}}}};n("1cf9");q.render=a;var H=q,M=(n("a766"),n("6c02"));function C(e,t,n,r,i,c){var o=Object(s["y"])("Services"),a=Object(s["y"])("Settings");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["h"])(o,{serviceStatuses:i.serviceStatuses,showStatusOnHover:!0,onShowTooltip:c.showTooltip},null,8,["serviceStatuses","onShowTooltip"]),Object(s["h"])(a,{onRefreshData:c.fetchData},null,8,["onRefreshData"])],64)}n("d3b7");var E=Object(s["E"])("data-v-31e7281e");Object(s["t"])("data-v-31e7281e");var $={id:"settings"},U={class:"flex bg-gray-200 rounded border border-gray-300 shadow"},_=Object(s["h"])("div",{class:"text-sm text-gray-600 rounded-xl py-1 px-2"}," ↻ ",-1),B=Object(s["f"])('<option value="10" data-v-31e7281e>10s</option><option value="30" selected data-v-31e7281e>30s</option><option value="60" data-v-31e7281e>1m</option><option value="120" data-v-31e7281e>2m</option><option value="300" data-v-31e7281e>5m</option><option value="600" data-v-31e7281e>10m</option>',6);Object(s["r"])();var P=E((function(e,t,n,r,i,c){return Object(s["q"])(),Object(s["d"])("div",$,[Object(s["h"])("div",U,[_,Object(s["h"])("select",{class:"text-center text-gray-500 text-sm",id:"refresh-rate",ref:"refreshInterval",onChange:t[1]||(t[1]=function(){return c.handleChangeRefreshInterval&&c.handleChangeRefreshInterval.apply(c,arguments)})},[B],544)])])})),G={name:"Settings",props:{},methods:{setRefreshInterval:function(e){var t=this;this.refreshIntervalHandler=setInterval((function(){t.refreshData()}),1e3*e)},refreshData:function(){this.$emit("refreshData")},handleChangeRefreshInterval:function(){this.refreshData(),clearInterval(this.refreshIntervalHandler),this.setRefreshInterval(this.$refs.refreshInterval.value)}},created:function(){this.setRefreshInterval(this.refreshInterval)},unmounted:function(){clearInterval(this.refreshIntervalHandler)},data:function(){return{refreshInterval:30,refreshIntervalHandler:0}}};n("49d2");G.render=P,G.__scopeId="data-v-31e7281e";var L=G,N=(n("b0c0"),{id:"results"});function Y(e,t,n,r,i,c){var o=Object(s["y"])("ServiceGroup");return Object(s["q"])(),Object(s["d"])("div",N,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(i.serviceGroups,(function(t){return Object(s["x"])(e.$slots,"default",{key:t},(function(){return[Object(s["h"])(o,{services:t.services,name:t.name,onShowTooltip:c.showTooltip},null,8,["services","name","onShowTooltip"])]}))})),128))])}var F={class:"text-monospace text-gray-400 text-xl font-medium pb-2 px-3"},J={key:0,class:"text-green-600"},V={key:1,class:"text-yellow-400"},X={class:"float-right service-group-arrow"};function K(e,t,n,r,i,c){var o=Object(s["y"])("Service");return Object(s["q"])(),Object(s["d"])("div",{class:0===n.services.length?"mt-3":"mt-4"},["undefined"!==n.name?Object(s["x"])(e.$slots,"default",{key:0},(function(){return[Object(s["h"])("div",{class:"service-group container pt-2 border",onClick:t[1]||(t[1]=function(){return c.toggleGroup&&c.toggleGroup.apply(c,arguments)})},[Object(s["h"])("h5",F,[i.healthy?(Object(s["q"])(),Object(s["d"])("span",J,"✓")):(Object(s["q"])(),Object(s["d"])("span",V,"~")),Object(s["g"])(" "+Object(s["A"])(n.name)+" ",1),Object(s["h"])("span",X,Object(s["A"])(i.collapsed?"▼":"▲"),1)])])]})):Object(s["e"])("",!0),i.collapsed?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])("div",{key:1,class:"undefined"===n.name?"":"service-group-content"},[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(n.services,(function(t){return Object(s["x"])(e.$slots,"default",{key:t},(function(){return[Object(s["h"])(o,{data:t,onShowTooltip:c.showTooltip,maximumNumberOfResults:20},null,8,["data","onShowTooltip"])]}))})),128))],2))],2)}var z={key:0,class:"service container px-3 py-3 border-l border-r border-t rounded-none hover:bg-gray-100"},Q={class:"flex flex-wrap mb-2"},W={class:"w-3/4"},Z={class:"text-gray-500 font-light"},ee={class:"w-1/4 text-right"},te={class:"font-light status-min-max-ms"},ne={class:"status-over-time flex flex-row"},se=Object(s["h"])("span",{class:"status rounded border border-dashed"},null,-1),re={class:"flex flex-wrap status-time-ago"},ie={class:"w-1/2"},ce={class:"w-1/2 text-right"};function oe(e,t,n,r,i,c){var o=Object(s["y"])("router-link");return n.data&&n.data.results&&n.data.results.length?(Object(s["q"])(),Object(s["d"])("div",z,[Object(s["h"])("div",Q,[Object(s["h"])("div",W,[Object(s["h"])(o,{to:c.generatePath(),class:"font-bold hover:text-blue-800 hover:underline",title:"View detailed service health"},{default:Object(s["D"])((function(){return[Object(s["g"])(Object(s["A"])(n.data.name),1)]})),_:1},8,["to"]),Object(s["h"])("span",Z," | "+Object(s["A"])(n.data.results[n.data.results.length-1].hostname),1)]),Object(s["h"])("div",ee,[Object(s["h"])("span",te,Object(s["A"])(i.minResponseTime===i.maxResponseTime?i.minResponseTime:i.minResponseTime+"-"+i.maxResponseTime)+"ms ",1)])]),Object(s["h"])("div",null,[Object(s["h"])("div",ne,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(n.maximumNumberOfResults-n.data.results.length,(function(t){return Object(s["x"])(e.$slots,"default",{key:t},(function(){return[se]}))})),128)),(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(n.data.results,(function(n){return Object(s["x"])(e.$slots,"default",{key:n},(function(){return[n.success?(Object(s["q"])(),Object(s["d"])("span",{key:0,class:"status rounded bg-success",onMouseenter:function(e){return c.showTooltip(n,e)},onMouseleave:t[1]||(t[1]=function(e){return c.showTooltip(null,e)})},"✓",40,["onMouseenter"])):(Object(s["q"])(),Object(s["d"])("span",{key:1,class:"status rounded bg-red-600",onMouseenter:function(e){return c.showTooltip(n,e)},onMouseleave:t[2]||(t[2]=function(e){return c.showTooltip(null,e)})},"X",40,["onMouseenter"]))]}))})),128))])]),Object(s["h"])("div",re,[Object(s["h"])("div",ie,Object(s["A"])(e.generatePrettyTimeAgo(n.data.results[0].timestamp)),1),Object(s["h"])("div",ce,Object(s["A"])(e.generatePrettyTimeAgo(n.data.results[n.data.results.length-1].timestamp)),1)])])):Object(s["e"])("",!0)}n("a9e3");var ae={methods:{generatePrettyTimeAgo:function(e){var t=(new Date).getTime()-new Date(e).getTime();if(t>36e5){var n=(t/36e5).toFixed(0);return n+" hour"+("1"!==n?"s":"")+" ago"}if(t>6e4){var s=(t/6e4).toFixed(0);return s+" minute"+("1"!==s?"s":"")+" ago"}return(t/1e3).toFixed(0)+" seconds ago"}}},le={name:"Service",props:{maximumNumberOfResults:Number,data:Object},emits:["showTooltip"],mixins:[ae],methods:{updateMinAndMaxResponseTimes:function(){var e=null,t=null;for(var n in this.data.results){var s=parseInt(this.data.results[n].duration/1e6);(null==e||e>s)&&(e=s),(null==t||t<s)&&(t=s)}this.minResponseTime!==e&&(this.minResponseTime=e),this.maxResponseTime!==t&&(this.maxResponseTime=t)},generatePath:function(){return this.data?"/services/"+this.data.key:"/"},showTooltip:function(e,t){this.$emit("showTooltip",e,t)}},watch:{data:function(){this.updateMinAndMaxResponseTimes()}},created:function(){this.updateMinAndMaxResponseTimes()},data:function(){return{minResponseTime:0,maxResponseTime:0}}};n("aa54");le.render=oe;var ue=le,he={name:"ServiceGroup",components:{Service:ue},props:{name:String,services:Array},emits:["showTooltip"],methods:{healthCheck:function(){if(this.services)for(var e in this.services)for(var t in this.services[e].results)if(!this.services[e].results[t].success)return void(this.healthy&&(this.healthy=!1));this.healthy||(this.healthy=!0)},toggleGroup:function(){this.collapsed=!this.collapsed,sessionStorage.setItem("service-group:".concat(this.name,":collapsed"),this.collapsed)},showTooltip:function(e,t){this.$emit("showTooltip",e,t)}},watch:{services:function(){this.healthCheck()}},created:function(){this.healthCheck()},data:function(){return{healthy:!0,collapsed:"true"===sessionStorage.getItem("service-group:".concat(this.name,":collapsed"))}}};n("be84");he.render=K;var de=he,be={name:"Services",components:{ServiceGroup:de},props:{showStatusOnHover:Boolean,serviceStatuses:Object},emits:["showTooltip"],methods:{process:function(){var e={};for(var t in this.serviceStatuses){var n=this.serviceStatuses[t];e[n.group]&&0!==e[n.group].length||(e[n.group]=[]),e[n.group].push(n)}var s=[];for(var r in e)"undefined"!==r&&s.push({name:r,services:e[r]});e["undefined"]&&s.push({name:"undefined",services:e["undefined"]}),this.serviceGroups=s},showTooltip:function(e,t){this.$emit("showTooltip",e,t)}},watch:{serviceStatuses:function(){this.process()}},data:function(){return{userClickedStatus:!1,serviceGroups:[]}}};n("6da3");be.render=Y;var pe=be,fe={name:"Home",components:{Services:pe,Settings:L},emits:["showTooltip"],methods:{fetchData:function(){var e=this;fetch("".concat(tt,"/api/v1/statuses")).then((function(e){return e.json()})).then((function(t){JSON.stringify(e.serviceStatuses)!==JSON.stringify(t)&&(e.serviceStatuses=t)}))},showTooltip:function(e,t){this.$emit("showTooltip",e,t)}},data:function(){return{serviceStatuses:{}}},created:function(){this.fetchData()}};fe.render=C;var ve=fe,me=Object(s["E"])("data-v-7c9b8344");Object(s["t"])("data-v-7c9b8344");var Oe=Object(s["g"])(" ← "),je={class:"container mx-auto"},ge=Object(s["h"])("h1",{class:"text-3xl text-monospace text-gray-400"},"RECENT CHECKS",-1),xe=Object(s["h"])("hr",{class:"mb-4"},null,-1),ye={key:1,class:"mt-12"},we=Object(s["h"])("h1",{class:"text-3xl text-monospace text-gray-400"},"UPTIME",-1),Te=Object(s["h"])("hr",null,null,-1),Se={class:"flex space-x-4 text-center text-2xl mt-5"},Re={class:"flex-1"},Ae=Object(s["h"])("h2",{class:"text-sm text-gray-400"},"Last 7 days",-1),ke={class:"flex-1"},Ie=Object(s["h"])("h2",{class:"text-sm text-gray-400"},"Last 24 hours",-1),De={class:"flex-1"},qe=Object(s["h"])("h2",{class:"text-sm text-gray-400"},"Last hour",-1),He=Object(s["h"])("hr",{class:"mt-1"},null,-1),Me=Object(s["h"])("h3",{class:"text-xl text-monospace text-gray-400 mt-1 text-right"},"BADGES",-1),Ce={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-12"},Ee={class:"flex-1"},$e={class:"flex-1"},Ue={class:"flex-1"},_e=Object(s["h"])("h1",{class:"text-3xl text-monospace text-gray-400 mt-4"},"EVENTS",-1),Be=Object(s["h"])("hr",{class:"mb-4"},null,-1),Pe={class:"p-3 my-4"},Ge={class:"text-lg"},Le={key:0,class:"border border-green-600 rounded-full px-1 text-green-700 opacity-75 bg-green-100 mr-2"},Ne=Object(s["h"])("span",{class:"relative bottom-0.5"},"🡡",-1),Ye={key:1,class:"border border-red-500 rounded-full px-1 text-red-700 opacity-75 bg-red-100 mr-2"},Fe={key:2,class:"mr-2"},Je={class:"flex mt-1 text-sm text-gray-400"},Ve={class:"flex-1 text-left pl-10"},Xe={class:"flex-1 text-right"};Object(s["r"])();var Ke=me((function(e,t,n,r,i,c){var o=Object(s["y"])("router-link"),a=Object(s["y"])("Service"),l=Object(s["y"])("Settings");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["h"])(o,{to:"/",class:"absolute top-2 left-2 inline-block px-2 py-0 text-lg text-black transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"},{default:me((function(){return[Oe]})),_:1}),Object(s["h"])("div",je,[i.serviceStatus?Object(s["x"])(e.$slots,"default",{key:0},(function(){return[ge,xe,Object(s["h"])(a,{data:i.serviceStatus,maximumNumberOfResults:20,onShowTooltip:c.showTooltip},null,8,["data","onShowTooltip"])]})):Object(s["e"])("",!0),i.serviceStatus.uptime?(Object(s["q"])(),Object(s["d"])("div",ye,[we,Te,Object(s["h"])("div",Se,[Object(s["h"])("div",Re,[Object(s["g"])(Object(s["A"])(c.prettifyUptime(i.serviceStatus.uptime["7d"]))+" ",1),Ae]),Object(s["h"])("div",ke,[Object(s["g"])(Object(s["A"])(c.prettifyUptime(i.serviceStatus.uptime["24h"]))+" ",1),Ie]),Object(s["h"])("div",De,[Object(s["g"])(Object(s["A"])(c.prettifyUptime(i.serviceStatus.uptime["1h"]))+" ",1),qe])]),He,Me,Object(s["h"])("div",Ce,[Object(s["h"])("div",Ee,[Object(s["h"])("img",{src:c.generateBadgeImageURL("7d"),alt:"7d uptime badge",class:"mx-auto"},null,8,["src"])]),Object(s["h"])("div",$e,[Object(s["h"])("img",{src:c.generateBadgeImageURL("24h"),alt:"24h uptime badge",class:"mx-auto"},null,8,["src"])]),Object(s["h"])("div",Ue,[Object(s["h"])("img",{src:c.generateBadgeImageURL("1h"),alt:"1h uptime badge",class:"mx-auto"},null,8,["src"])])])])):Object(s["e"])("",!0),Object(s["h"])("div",null,[_e,Be,Object(s["h"])("div",null,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(i.events,(function(t){return Object(s["x"])(e.$slots,"default",{key:t},(function(){return[Object(s["h"])("div",Pe,[Object(s["h"])("h2",Ge,["HEALTHY"===t.type?(Object(s["q"])(),Object(s["d"])("span",Le,[Ne])):"UNHEALTHY"===t.type?(Object(s["q"])(),Object(s["d"])("span",Ye,"🡣")):"START"===t.type?(Object(s["q"])(),Object(s["d"])("span",Fe,"▶")):Object(s["e"])("",!0),Object(s["g"])(" "+Object(s["A"])(t.fancyText),1)]),Object(s["h"])("div",Je,[Object(s["h"])("div",Ve,Object(s["A"])(new Date(t.timestamp).toISOString()),1),Object(s["h"])("div",Xe,Object(s["A"])(t.fancyTimeAgo),1)])])]}))})),128))])])]),Object(s["h"])(l,{onRefreshData:c.fetchData},null,8,["onRefreshData"])],64)})),ze=(n("99af"),{name:"Details",components:{Service:ue,Settings:L},emits:["showTooltip"],mixins:[ae],methods:{fetchData:function(){var e=this;fetch("".concat(this.serverUrl,"/api/v1/statuses/").concat(this.$route.params.key)).then((function(e){return e.json()})).then((function(t){if(JSON.stringify(e.serviceStatus)!==JSON.stringify(t)){e.serviceStatus=t.serviceStatus;for(var n=[],s=t.events.length-1;s>=0;s--){var r=t.events[s];if(s===t.events.length-1)"UNHEALTHY"===r.type?r.fancyText="Service is unhealthy":"HEALTHY"===r.type?r.fancyText="Service is healthy":"START"===r.type&&(r.fancyText="Monitoring started");else{var i=t.events[s+1];"HEALTHY"===r.type?r.fancyText="Service became healthy again":"UNHEALTHY"===r.type?r.fancyText=i?"Service was unhealthy for "+e.prettifyTimeDifference(i.timestamp,r.timestamp):"Service became unhealthy":"START"===r.type&&(r.fancyText="Monitoring started")}r.fancyTimeAgo=e.generatePrettyTimeAgo(r.timestamp),n.push(r)}e.events=n}}))},generateBadgeImageURL:function(e){return"".concat(this.serverUrl,"/api/v1/badges/uptime/").concat(e,"/").concat(this.serviceStatus.key)},prettifyUptime:function(e){return e?(100*e).toFixed(2)+"%":"0%"},prettifyTimeDifference:function(e,t){var n=Math.ceil((new Date(e)-new Date(t))/1e3/60);return n+(1===n?" minute":" minutes")},showTooltip:function(e,t){this.$emit("showTooltip",e,t)}},data:function(){return{serviceStatus:{},events:[],serverUrl:"."===tt?"..":tt}},created:function(){this.fetchData()}});n("a023");ze.render=Ke,ze.__scopeId="data-v-7c9b8344";var Qe=ze,We=[{path:"/",name:"Home",component:ve},{path:"/services/:key",name:"Details",component:Qe}],Ze=Object(M["a"])({history:Object(M["b"])("/"),routes:We}),et=Ze,tt=".";Object(s["c"])(H).use(et).mount("#app")},"5f3d":function(e,t,n){},"6da3":function(e,t,n){"use strict";n("b73a")},"729d":function(e,t,n){},"75d6":function(e,t,n){"use strict";n("e52e")},"7e86":function(e,t,n){},a023:function(e,t,n){"use strict";n("cd4f")},a766:function(e,t,n){},aa54:function(e,t,n){"use strict";n("729d")},b73a:function(e,t,n){},bca1:function(e,t,n){},be84:function(e,t,n){"use strict";n("5f3d")},cd4f:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.png"},e52e:function(e,t,n){}});