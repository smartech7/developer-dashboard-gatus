(function(){"use strict";var e={8187:function(e,t,r){r.d(t,{L:function(){return ut}});r(6992),r(8674),r(9601),r(7727);var s=r(9963),n=r(6252),o=r.p+"img/logo.png",a={class:"container container-xs relative mx-auto xl:rounded xl:border xl:shadow-xl xl:my-5 p-5 pb-12 xl:pb-5 text-left dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500",id:"global"},i=(0,n.Wm)("div",{class:"mb-2"},[(0,n.Wm)("div",{class:"flex flex-wrap"},[(0,n.Wm)("div",{class:"w-3/4 text-left my-auto"},[(0,n.Wm)("div",{class:"text-3xl xl:text-5xl lg:text-4xl font-light"},"Health Status")]),(0,n.Wm)("div",{class:"w-1/4 flex justify-end"},[(0,n.Wm)("img",{src:o,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}})])])],-1);function l(e,t,r,s,o,l){var u=(0,n.up)("router-view"),g=(0,n.up)("Tooltip"),c=(0,n.up)("Social");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",a,[i,(0,n.Wm)(u,{onShowTooltip:l.showTooltip},null,8,["onShowTooltip"])]),(0,n.Wm)(g,{result:o.tooltip.result,event:o.tooltip.event},null,8,["result","event"]),(0,n.Wm)(c)],64)}var u=r.p+"img/github.png",g=(0,n.HX)("data-v-1cbbc992");(0,n.dD)("data-v-1cbbc992");var c={id:"social"},h=(0,n.Wm)("a",{href:"https://github.com/TwinProduction/gatus",target:"_blank",title:"Gatus on GitHub"},[(0,n.Wm)("img",{src:u,alt:"GitHub",width:"32",height:"auto"})],-1);(0,n.Cn)();var d=g((function(e,t,r,s,o,a){return(0,n.wg)(),(0,n.j4)("div",c,[h])})),m={name:"Social"};m.render=d,m.__scopeId="data-v-1cbbc992";var f=m,v=(r(6977),r(3577)),p=(0,n.Wm)("div",{class:"tooltip-title"},"Timestamp:",-1),A={id:"tooltip-timestamp"},w=(0,n.Wm)("div",{class:"tooltip-title"},"Response time:",-1),y={id:"tooltip-response-time"},x=(0,n.Wm)("div",{class:"tooltip-title"},"Conditions:",-1),T={id:"tooltip-conditions"},I=(0,n.Wm)("br",null,null,-1),b={key:0,id:"tooltip-errors-container"},k=(0,n.Wm)("div",{class:"tooltip-title"},"Errors:",-1),R={id:"tooltip-errors"},S=(0,n.Wm)("br",null,null,-1);function W(e,t,r,s,o,a){return(0,n.wg)(),(0,n.j4)("div",{id:"tooltip",ref:"tooltip",class:o.hidden?"invisible":"",style:"top:"+o.top+"px; left:"+o.left+"px"},[r.result?(0,n.WI)(e.$slots,"default",{key:0},(function(){return[p,(0,n.Wm)("code",A,(0,v.zw)(a.prettifyTimestamp(r.result.timestamp)),1),w,(0,n.Wm)("code",y,(0,v.zw)((r.result.duration/1e6).toFixed(0))+"ms",1),x,(0,n.Wm)("code",T,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.result.conditionResults,(function(t){return(0,n.WI)(e.$slots,"default",{key:t},(function(){return[(0,n.Uk)((0,v.zw)(t.success?"✓":"X")+" ~ "+(0,v.zw)(t.condition),1),I]}))})),128))]),r.result.errors&&r.result.errors.length?((0,n.wg)(),(0,n.j4)("div",b,[k,(0,n.Wm)("code",R,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.result.errors,(function(t){return(0,n.WI)(e.$slots,"default",{key:t},(function(){return[(0,n.Uk)(" - "+(0,v.zw)(t),1),S]}))})),128))])])):(0,n.ry)("",!0)]})):(0,n.ry)("",!0)],6)}r(4916),r(5306);var C={name:"Services",props:{event:Event,result:Object},methods:{prettifyTimestamp:function(e){var t=new Date(e),r=t.getFullYear(),s=(t.getMonth()+1<10?"0":"")+(t.getMonth()+1),n=(t.getDate()<10?"0":"")+t.getDate(),o=(t.getHours()<10?"0":"")+t.getHours(),a=(t.getMinutes()<10?"0":"")+t.getMinutes(),i=(t.getSeconds()<10?"0":"")+t.getSeconds();return r+"-"+s+"-"+n+" "+o+":"+a+":"+i},htmlEntities:function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},reposition:function(){if(this.event&&this.event.type)if("mouseenter"===this.event.type){var e=this.event.target.getBoundingClientRect().y+30,t=this.event.target.getBoundingClientRect().x,r=this.$refs.tooltip.getBoundingClientRect();t+window.scrollX+r.width+50>document.body.getBoundingClientRect().width&&(t=this.event.target.getBoundingClientRect().x-r.width+this.event.target.getBoundingClientRect().width,t<0&&(t+=-t)),e+window.scrollY+r.height+50>document.body.getBoundingClientRect().height&&e>=0&&(e=this.event.target.getBoundingClientRect().y-(r.height+10),e<0&&(e=this.event.target.getBoundingClientRect().y+30)),this.top=e,this.left=t}else"mouseleave"===this.event.type&&(this.hidden=!0)}},watch:{event:function(e){e&&e.type&&("mouseenter"===e.type?this.hidden=!1:"mouseleave"===e.type&&(this.hidden=!0))}},updated:function(){this.reposition()},created:function(){this.reposition()},data:function(){return{hidden:!0,top:0,left:0}}};C.render=W;var B=C,P={name:"App",components:{Social:f,Tooltip:B},methods:{showTooltip:function(e,t){this.tooltip={result:e,event:t}}},data:function(){return{tooltip:{}}}};P.render=l;var D=P,E=r(2119);function H(e,t,r,s,o,a){var i=(0,n.up)("Services"),l=(0,n.up)("Pagination"),u=(0,n.up)("Settings");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)(i,{serviceStatuses:o.serviceStatuses,showStatusOnHover:!0,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:o.showAverageResponseTime},null,8,["serviceStatuses","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,n.Wm)(l,{onPage:a.changePage},null,8,["onPage"]),(0,n.Wm)(u,{onRefreshData:a.fetchData},null,8,["onRefreshData"])],64)}r(1539),r(2222);var O=(0,n.HX)("data-v-5d6e3c12");(0,n.dD)("data-v-5d6e3c12");var U={id:"settings"},z={class:"flex"},j={class:"flex bg-gray-200 border-gray-300 rounded border shadow dark:text-gray-200 dark:bg-gray-800 dark:border-gray-500"},M=(0,n.Wm)("div",{class:"text-xs text-gray-600 rounded-xl py-1 px-2 dark:text-gray-200"}," ↻ ",-1),Q=(0,n.Uk)("☀"),X=(0,n.Uk)("🌙");(0,n.Cn)();var K=O((function(e,t,r,s,o,a){return(0,n.wg)(),(0,n.j4)("div",U,[(0,n.Wm)("div",z,[(0,n.Wm)("div",j,[M,(0,n.Wm)("select",{class:"text-center text-gray-500 text-xs dark:text-gray-200 dark:bg-gray-800 border-r border-l border-gray-300 dark:border-gray-500",id:"refresh-rate",ref:"refreshInterval",onChange:t[1]||(t[1]=function(){return a.handleChangeRefreshInterval&&a.handleChangeRefreshInterval.apply(a,arguments)})},[(0,n.Wm)("option",{value:"10",selected:10===o.refreshInterval},"10s",8,["selected"]),(0,n.Wm)("option",{value:"30",selected:30===o.refreshInterval},"30s",8,["selected"]),(0,n.Wm)("option",{value:"60",selected:60===o.refreshInterval},"1m",8,["selected"]),(0,n.Wm)("option",{value:"120",selected:120===o.refreshInterval},"2m",8,["selected"]),(0,n.Wm)("option",{value:"300",selected:300===o.refreshInterval},"5m",8,["selected"]),(0,n.Wm)("option",{value:"600",selected:600===o.refreshInterval},"10m",8,["selected"])],544),(0,n.Wm)("button",{onClick:t[2]||(t[2]=function(){return a.toggleDarkMode&&a.toggleDarkMode.apply(a,arguments)}),class:"text-xs p-1"},[o.darkMode?(0,n.WI)(e.$slots,"default",{key:0},(function(){return[Q]}),{},!0):(0,n.WI)(e.$slots,"default",{key:1},(function(){return[X]}),{},!0)])])])])})),Y={name:"Settings",props:{},methods:{setRefreshInterval:function(e){sessionStorage.setItem("gatus:refresh-interval",e);var t=this;this.refreshIntervalHandler=setInterval((function(){t.refreshData()}),1e3*e)},refreshData:function(){this.$emit("refreshData")},handleChangeRefreshInterval:function(){this.refreshData(),clearInterval(this.refreshIntervalHandler),this.setRefreshInterval(this.$refs.refreshInterval.value)},toggleDarkMode:function(){"dark"===localStorage.theme?localStorage.theme="light":localStorage.theme="dark",this.applyTheme()},applyTheme:function(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(this.darkMode=!0,document.documentElement.classList.add("dark")):(this.darkMode=!1,document.documentElement.classList.remove("dark"))}},created:function(){10!==this.refreshInterval&&30!==this.refreshInterval&&60!==this.refreshInterval&&120!==this.refreshInterval&&300!==this.refreshInterval&&600!==this.refreshInterval&&(this.refreshInterval=60),this.setRefreshInterval(this.refreshInterval),this.applyTheme()},unmounted:function(){clearInterval(this.refreshIntervalHandler)},data:function(){return{refreshInterval:sessionStorage.getItem("gatus:refresh-interval")<10?60:parseInt(sessionStorage.getItem("gatus:refresh-interval")),refreshIntervalHandler:0,darkMode:!1}}};Y.render=K,Y.__scopeId="data-v-5d6e3c12";var F=Y,G=(r(8309),{id:"results"});function q(e,t,r,s,o,a){var i=(0,n.up)("ServiceGroup");return(0,n.wg)(),(0,n.j4)("div",G,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(o.serviceGroups,(function(t){return(0,n.WI)(e.$slots,"default",{key:t},(function(){return[(0,n.Wm)(i,{services:t.services,name:t.name,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:r.showAverageResponseTime},null,8,["services","name","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])]}))})),128))])}var N={class:"font-mono text-gray-400 text-xl font-medium pb-2 px-3 dark:text-gray-200 dark:hover:text-gray-500 dark:border-gray-500"},Z={key:0,class:"text-green-600"},J={key:1,class:"text-yellow-400"},L={class:"float-right service-group-arrow"};function V(e,t,r,s,o,a){var i=(0,n.up)("Service");return(0,n.wg)(),(0,n.j4)("div",{class:0===r.services.length?"mt-3":"mt-4"},["undefined"!==r.name?(0,n.WI)(e.$slots,"default",{key:0},(function(){return[(0,n.Wm)("div",{class:"service-group pt-2 border dark:bg-gray-800 dark:border-gray-500",onClick:t[1]||(t[1]=function(){return a.toggleGroup&&a.toggleGroup.apply(a,arguments)})},[(0,n.Wm)("h5",N,[o.healthy?((0,n.wg)(),(0,n.j4)("span",Z,"✓")):((0,n.wg)(),(0,n.j4)("span",J,"~")),(0,n.Uk)(" "+(0,v.zw)(r.name)+" ",1),(0,n.Wm)("span",L,(0,v.zw)(o.collapsed?"▼":"▲"),1)])])]})):(0,n.ry)("",!0),o.collapsed?(0,n.ry)("",!0):((0,n.wg)(),(0,n.j4)("div",{key:1,class:"undefined"===r.name?"":"service-group-content"},[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.services,(function(t){return(0,n.WI)(e.$slots,"default",{key:t},(function(){return[(0,n.Wm)(i,{data:t,maximumNumberOfResults:20,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:r.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])]}))})),128))],2))],2)}var $={key:0,class:"service px-3 py-3 border-l border-r border-t rounded-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-500"},_={class:"flex flex-wrap mb-2"},ee={class:"w-3/4"},te={key:0,class:"text-gray-500 font-light"},re={class:"w-1/4 text-right"},se={class:"status-over-time flex flex-row"},ne={class:"flex flex-wrap status-time-ago"},oe={class:"w-1/2"},ae={class:"w-1/2 text-right"},ie=(0,n.Wm)("div",{class:"w-1/2"},"   ",-1);function le(e,t,r,s,o,a){var i=(0,n.up)("router-link");return r.data?((0,n.wg)(),(0,n.j4)("div",$,[(0,n.Wm)("div",_,[(0,n.Wm)("div",ee,[(0,n.Wm)(i,{to:a.generatePath(),class:"font-bold hover:text-blue-800 hover:underline dark:hover:text-blue-400",title:"View detailed service health"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,v.zw)(r.data.name),1)]})),_:1},8,["to"]),r.data.results&&r.data.results.length?((0,n.wg)(),(0,n.j4)("span",te," | "+(0,v.zw)(r.data.results[r.data.results.length-1].hostname),1)):(0,n.ry)("",!0)]),(0,n.Wm)("div",re,[r.data.results&&r.data.results.length?((0,n.wg)(),(0,n.j4)("span",{key:0,class:"font-light overflow-x-hidden cursor-pointer select-none",onClick:t[1]||(t[1]=function(){return a.toggleShowAverageResponseTime&&a.toggleShowAverageResponseTime.apply(a,arguments)}),title:r.showAverageResponseTime?"Average response time":"Minimum and maximum response time"},[r.showAverageResponseTime?(0,n.WI)(e.$slots,"default",{key:0},(function(){return[(0,n.Uk)(" ~"+(0,v.zw)(o.averageResponseTime)+"ms ",1)]})):(0,n.WI)(e.$slots,"default",{key:1},(function(){return[(0,n.Uk)((0,v.zw)(o.minResponseTime===o.maxResponseTime?o.minResponseTime:o.minResponseTime+"-"+o.maxResponseTime)+"ms ",1)]}))],8,["title"])):(0,n.ry)("",!0)])]),(0,n.Wm)("div",null,[(0,n.Wm)("div",se,[r.data.results&&r.data.results.length?(0,n.WI)(e.$slots,"default",{key:0},(function(){return[r.data.results.length<r.maximumNumberOfResults?(0,n.WI)(e.$slots,"default",{key:0},(function(){return[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.maximumNumberOfResults-r.data.results.length,(function(e){return(0,n.wg)(),(0,n.j4)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")})),128))]})):(0,n.ry)("",!0),((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.data.results,(function(r){return(0,n.WI)(e.$slots,"default",{key:r},(function(){return[r.success?((0,n.wg)(),(0,n.j4)("span",{key:0,class:"status status-success rounded bg-success",onMouseenter:function(e){return a.showTooltip(r,e)},onMouseleave:t[2]||(t[2]=function(e){return a.showTooltip(null,e)})},null,40,["onMouseenter"])):((0,n.wg)(),(0,n.j4)("span",{key:1,class:"status status-failure rounded bg-red-600",onMouseenter:function(e){return a.showTooltip(r,e)},onMouseleave:t[3]||(t[3]=function(e){return a.showTooltip(null,e)})},null,40,["onMouseenter"]))]}))})),128))]})):(0,n.WI)(e.$slots,"default",{key:1},(function(){return[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(r.maximumNumberOfResults,(function(e){return(0,n.wg)(),(0,n.j4)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")})),128))]}))])]),(0,n.Wm)("div",ne,[r.data.results&&r.data.results.length?(0,n.WI)(e.$slots,"default",{key:0},(function(){return[(0,n.Wm)("div",oe,(0,v.zw)(e.generatePrettyTimeAgo(r.data.results[0].timestamp)),1),(0,n.Wm)("div",ae,(0,v.zw)(e.generatePrettyTimeAgo(r.data.results[r.data.results.length-1].timestamp)),1)]})):(0,n.WI)(e.$slots,"default",{key:1},(function(){return[ie]}))])])):(0,n.ry)("",!0)}r(9653);var ue={methods:{generatePrettyTimeAgo:function(e){var t=(new Date).getTime()-new Date(e).getTime();if(t>36e5){var r=(t/36e5).toFixed(0);return r+" hour"+("1"!==r?"s":"")+" ago"}if(t>6e4){var s=(t/6e4).toFixed(0);return s+" minute"+("1"!==s?"s":"")+" ago"}return(t/1e3).toFixed(0)+" seconds ago"}}},ge={name:"Service",props:{maximumNumberOfResults:Number,data:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],mixins:[ue],methods:{updateMinAndMaxResponseTimes:function(){var e=null,t=null,r=0;for(var s in this.data.results){var n=parseInt((this.data.results[s].duration/1e6).toFixed(0));r+=n,(null==e||e>n)&&(e=n),(null==t||t<n)&&(t=n)}this.minResponseTime!==e&&(this.minResponseTime=e),this.maxResponseTime!==t&&(this.maxResponseTime=t),this.data.results&&this.data.results.length&&(this.averageResponseTime=(r/this.data.results.length).toFixed(0))},generatePath:function(){return this.data?"/services/".concat(this.data.key):"/"},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.$emit("toggleShowAverageResponseTime")}},watch:{data:function(){this.updateMinAndMaxResponseTimes()}},created:function(){this.updateMinAndMaxResponseTimes()},data:function(){return{minResponseTime:0,maxResponseTime:0,averageResponseTime:0}}};ge.render=le;var ce=ge,he={name:"ServiceGroup",components:{Service:ce},props:{name:String,services:Array,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{healthCheck:function(){if(this.services)for(var e in this.services)for(var t in this.services[e].results)if(!this.services[e].results[t].success)return void(this.healthy&&(this.healthy=!1));this.healthy||(this.healthy=!0)},toggleGroup:function(){this.collapsed=!this.collapsed,sessionStorage.setItem("gatus:service-group:".concat(this.name,":collapsed"),this.collapsed)},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.$emit("toggleShowAverageResponseTime")}},watch:{services:function(){this.healthCheck()}},created:function(){this.healthCheck()},data:function(){return{healthy:!0,collapsed:"true"===sessionStorage.getItem("gatus:service-group:".concat(this.name,":collapsed"))}}};he.render=V;var de=he,me={name:"Services",components:{ServiceGroup:de},props:{showStatusOnHover:Boolean,serviceStatuses:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{process:function(){var e={};for(var t in this.serviceStatuses){var r=this.serviceStatuses[t];e[r.group]&&0!==e[r.group].length||(e[r.group]=[]),e[r.group].push(r)}var s=[];for(var n in e)"undefined"!==n&&s.push({name:n,services:e[n]});e["undefined"]&&s.push({name:"undefined",services:e["undefined"]}),this.serviceGroups=s},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.$emit("toggleShowAverageResponseTime")}},watch:{serviceStatuses:function(){this.process()}},data:function(){return{userClickedStatus:!1,serviceGroups:[]}}};me.render=q;var fe=me,ve={class:"mt-3 flex"},pe={class:"flex-1"},Ae={class:"flex-1 text-right"};function we(e,t,r,s,o,a){return(0,n.wg)(),(0,n.j4)("div",ve,[(0,n.Wm)("div",pe,[o.currentPage<5?((0,n.wg)(),(0,n.j4)("button",{key:0,onClick:t[1]||(t[1]=function(){return a.nextPage&&a.nextPage.apply(a,arguments)}),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},"<")):(0,n.ry)("",!0)]),(0,n.Wm)("div",Ae,[o.currentPage>1?((0,n.wg)(),(0,n.j4)("button",{key:0,onClick:t[2]||(t[2]=function(){return a.previousPage&&a.previousPage.apply(a,arguments)}),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},">")):(0,n.ry)("",!0)])])}var ye={name:"Pagination",components:{},emits:["page"],methods:{nextPage:function(){this.currentPage++,this.$emit("page",this.currentPage)},previousPage:function(){this.currentPage--,this.$emit("page",this.currentPage)}},data:function(){return{currentPage:1}}};ye.render=we;var xe=ye,Te={name:"Home",components:{Pagination:xe,Services:fe,Settings:F},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{fetchData:function(){var e=this;fetch("".concat(ut,"/api/v1/statuses?page=").concat(this.currentPage)).then((function(e){return e.json()})).then((function(t){JSON.stringify(e.serviceStatuses)!==JSON.stringify(t)&&(e.serviceStatuses=t)}))},changePage:function(e){this.currentPage=e,this.fetchData()},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.showAverageResponseTime=!this.showAverageResponseTime}},data:function(){return{serviceStatuses:{},currentPage:1,showAverageResponseTime:!0}},created:function(){this.fetchData()}};Te.render=H;var Ie=Te,be="data:image/png;base64,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",ke="data:image/png;base64,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",Re="data:image/png;base64,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",Se=(0,n.HX)("data-v-3746a2ea");(0,n.dD)("data-v-3746a2ea");var We=(0,n.Uk)(" ← "),Ce=(0,n.Wm)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"RECENT CHECKS",-1),Be=(0,n.Wm)("hr",{class:"mb-4"},null,-1),Pe={key:1,class:"mt-12"},De=(0,n.Wm)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"UPTIME",-1),Ee=(0,n.Wm)("hr",null,null,-1),He={class:"flex space-x-4 text-center text-xl xl:text-2xl mt-3"},Oe={class:"flex-1"},Ue=(0,n.Wm)("h2",{class:"text-sm text-gray-400"},"Last 7 days",-1),ze={class:"flex-1"},je=(0,n.Wm)("h2",{class:"text-sm text-gray-400"},"Last 24 hours",-1),Me={class:"flex-1"},Qe=(0,n.Wm)("h2",{class:"text-sm text-gray-400"},"Last hour",-1),Xe=(0,n.Wm)("hr",{class:"mt-1"},null,-1),Ke=(0,n.Wm)("h3",{class:"text-xl font-mono text-gray-400 mt-1 text-right"},"BADGES",-1),Ye={key:0,class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-12"},Fe={class:"flex-1"},Ge={class:"flex-1"},qe={class:"flex-1"},Ne=(0,n.Wm)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400 mt-4"},"EVENTS",-1),Ze=(0,n.Wm)("hr",{class:"mb-4"},null,-1),Je={class:"p-3 my-4"},Le={class:"text-lg"},Ve={key:0,src:be,alt:"Healthy",class:"border border-green-600 rounded-full opacity-75 bg-green-100 mr-2 inline",width:"26"},$e={key:1,src:ke,alt:"Unhealthy",class:"border border-red-500 rounded-full opacity-75 bg-red-100 mr-2 inline",width:"26"},_e={key:2,src:Re,alt:"Start",class:"border border-gray-500 rounded-full opacity-75 bg-gray-100 mr-2 inline",width:"26"},et={class:"flex mt-1 text-sm text-gray-400"},tt={class:"flex-1 text-left pl-10"},rt={class:"flex-1 text-right"};(0,n.Cn)();var st=Se((function(e,t,r,s,o,a){var i=(0,n.up)("router-link"),l=(0,n.up)("Service"),u=(0,n.up)("Pagination"),g=(0,n.up)("Settings");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)(i,{to:"../",class:"absolute top-2 left-2 inline-block px-2 pb-0.5 text-lg text-black bg-gray-100 rounded hover:bg-gray-200 focus:outline-none border border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},{default:Se((function(){return[We]})),_:1}),(0,n.Wm)("div",null,[o.serviceStatus?(0,n.WI)(e.$slots,"default",{key:0},(function(){return[Ce,Be,(0,n.Wm)(l,{data:o.serviceStatus,maximumNumberOfResults:20,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:o.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,n.Wm)(u,{onPage:a.changePage},null,8,["onPage"])]}),{},!0):(0,n.ry)("",!0),o.uptime?((0,n.wg)(),(0,n.j4)("div",Pe,[De,Ee,(0,n.Wm)("div",He,[(0,n.Wm)("div",Oe,[(0,n.Uk)((0,v.zw)(a.prettifyUptime(o.uptime["7d"]))+" ",1),Ue]),(0,n.Wm)("div",ze,[(0,n.Uk)((0,v.zw)(a.prettifyUptime(o.uptime["24h"]))+" ",1),je]),(0,n.Wm)("div",Me,[(0,n.Uk)((0,v.zw)(a.prettifyUptime(o.uptime["1h"]))+" ",1),Qe])]),Xe,Ke,o.serviceStatus&&o.serviceStatus.key?((0,n.wg)(),(0,n.j4)("div",Ye,[(0,n.Wm)("div",Fe,[(0,n.Wm)("img",{src:a.generateBadgeImageURL("7d"),alt:"7d uptime badge",class:"mx-auto"},null,8,["src"])]),(0,n.Wm)("div",Ge,[(0,n.Wm)("img",{src:a.generateBadgeImageURL("24h"),alt:"24h uptime badge",class:"mx-auto"},null,8,["src"])]),(0,n.Wm)("div",qe,[(0,n.Wm)("img",{src:a.generateBadgeImageURL("1h"),alt:"1h uptime badge",class:"mx-auto"},null,8,["src"])])])):(0,n.ry)("",!0)])):(0,n.ry)("",!0),(0,n.Wm)("div",null,[Ne,Ze,(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(o.events,(function(t){return(0,n.WI)(e.$slots,"default",{key:t},(function(){return[(0,n.Wm)("div",Je,[(0,n.Wm)("h2",Le,["HEALTHY"===t.type?((0,n.wg)(),(0,n.j4)("img",Ve)):"UNHEALTHY"===t.type?((0,n.wg)(),(0,n.j4)("img",$e)):"START"===t.type?((0,n.wg)(),(0,n.j4)("img",_e)):(0,n.ry)("",!0),(0,n.Uk)(" "+(0,v.zw)(t.fancyText),1)]),(0,n.Wm)("div",et,[(0,n.Wm)("div",tt,(0,v.zw)(new Date(t.timestamp).toISOString()),1),(0,n.Wm)("div",rt,(0,v.zw)(t.fancyTimeAgo),1)])])]}),!0)})),128))])])]),(0,n.Wm)(g,{onRefreshData:a.fetchData},null,8,["onRefreshData"])],64)})),nt={name:"Details",components:{Pagination:xe,Service:ce,Settings:F},emits:["showTooltip"],mixins:[ue],methods:{fetchData:function(){var e=this;fetch("".concat(this.serverUrl,"/api/v1/statuses/").concat(this.$route.params.key,"?page=").concat(this.currentPage)).then((function(e){return e.json()})).then((function(t){if(JSON.stringify(e.serviceStatus)!==JSON.stringify(t)){e.serviceStatus=t.serviceStatus,e.uptime=t.uptime;for(var r=[],s=t.events.length-1;s>=0;s--){var n=t.events[s];if(s===t.events.length-1)"UNHEALTHY"===n.type?n.fancyText="Service is unhealthy":"HEALTHY"===n.type?n.fancyText="Service is healthy":"START"===n.type&&(n.fancyText="Monitoring started");else{var o=t.events[s+1];"HEALTHY"===n.type?n.fancyText="Service became healthy":"UNHEALTHY"===n.type?n.fancyText=o?"Service was unhealthy for "+e.prettifyTimeDifference(o.timestamp,n.timestamp):"Service became unhealthy":"START"===n.type&&(n.fancyText="Monitoring started")}n.fancyTimeAgo=e.generatePrettyTimeAgo(n.timestamp),r.push(n)}e.events=r}}))},generateBadgeImageURL:function(e){return"".concat(this.serverUrl,"/api/v1/badges/uptime/").concat(e,"/").concat(this.serviceStatus.key,".svg")},prettifyUptime:function(e){return e?(100*e).toFixed(2)+"%":"0%"},prettifyTimeDifference:function(e,t){var r=Math.ceil((new Date(e)-new Date(t))/1e3/60);return r+(1===r?" minute":" minutes")},changePage:function(e){this.currentPage=e,this.fetchData()},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.showAverageResponseTime=!this.showAverageResponseTime}},data:function(){return{serviceStatus:{},events:[],uptime:{"7d":0,"24h":0,"1h":0},serverUrl:"."===ut?"..":ut,currentPage:1,showAverageResponseTime:!0}},created:function(){this.fetchData()}};nt.render=st,nt.__scopeId="data-v-3746a2ea";var ot=nt,at=[{path:"/",name:"Home",component:Ie},{path:"/services/:key",name:"Details",component:ot}],it=(0,E.p7)({history:(0,E.PO)("/"),routes:at}),lt=it,ut=".";(0,s.ri)(D).use(lt).mount("#app")}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,s,n,o){if(!s){var a=1/0;for(u=0;u<e.length;u++){s=e[u][0],n=e[u][1],o=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(i=!1,o<a&&(a=o));i&&(e.splice(u--,1),t=n())}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,n,o]}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,a=s[0],i=s[1],l=s[2],u=0;for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var g=l(r);for(t&&t(s);u<a.length;u++)o=a[u],r.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return r.O(g)},s=self["webpackChunkgatus"]=self["webpackChunkgatus"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(8187)}));s=r.O(s)})();