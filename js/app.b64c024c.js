(function(t){function e(e){for(var s,r,a=e[0],c=e[1],l=e[2],T=0,d=[];T<a.length;T++)r=a[T],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/ApiTest/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0a9b":function(t,e,n){"use strict";n("cdf7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NextTrain")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"next-train"},[n("div",{attrs:{id:"form"}},[n("div",[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",[n("b-form-select",{attrs:{id:"selectedLine",options:t.lineOptions},on:{input:t.updateStations},model:{value:t.selectedLine,callback:function(e){t.selectedLine=e},expression:"selectedLine"}})],1),n("b-col",[n("b-form-select",{attrs:{id:"selectedStation",options:t.stationOptions},on:{input:t.refresh},model:{value:t.selectedStation,callback:function(e){t.selectedStation=e},expression:"selectedStation"}})],1)],1)],1)],1)]),n("br"),n("div",{staticClass:"result"},[n("h1",[t._v(t._s(t.codeToText(t.line)))]),n("h2",[t._v(t._s(t.codeToText(t.sta)))]),n("h3",[t._v("現在時間: "+t._s(t.currentTime))]),n("h3",[t._v("往"+t._s(t.uniqueUpDestinations))]),n("br"),n("div",[n("b-table",{ref:"table",attrs:{striped:"",hover:"",items:t.myProvider,fields:t.fields}})],1),n("h3",[t._v("往"+t._s(t.uniqueDownDestinations))]),n("br"),n("div",[n("b-table",{ref:"table2",attrs:{striped:"",hover:"",items:t.myProvider2,fields:t.fields}})],1)])])},a=[],c=n("2909"),l=(n("d3b7"),n("99af"),n("6062"),n("3ca3"),n("ddb0"),n("a15b"),{name:"NextTrain",data:function(){return{timer:"",lineOptions:[{value:"AEL",text:this.codeToText("AEL")},{value:"TCL",text:this.codeToText("TCL")},{value:"WRL",text:this.codeToText("WRL")},{value:"TKL",text:this.codeToText("TKL")}],aelStations:[{value:"HOK",text:this.codeToText("HOK")},{value:"KOW",text:this.codeToText("KOW")},{value:"TSY",text:this.codeToText("TSY")},{value:"AIR",text:this.codeToText("AIR")},{value:"AWE",text:this.codeToText("AWE")}],tclStations:[{value:"HOK",text:this.codeToText("HOK")},{value:"KOW",text:this.codeToText("KOW")},{value:"OLY",text:this.codeToText("OLY")},{value:"NAC",text:this.codeToText("NAC")},{value:"LAK",text:this.codeToText("LAK")},{value:"TSY",text:this.codeToText("TSY")},{value:"SUN",text:this.codeToText("SUN")},{value:"TUC",text:this.codeToText("TUC")}],wrlStations:[{value:"HUH",text:this.codeToText("HUH")},{value:"ETS",text:this.codeToText("ETS")},{value:"AUS",text:this.codeToText("AUS")},{value:"NAC",text:this.codeToText("NAC")},{value:"MEF",text:this.codeToText("MEF")},{value:"TWW",text:this.codeToText("TWW")},{value:"KSR",text:this.codeToText("KSR")},{value:"YUL",text:this.codeToText("YUL")},{value:"LOP",text:this.codeToText("LOP")},{value:"TIS",text:this.codeToText("TIS")},{value:"SIH",text:this.codeToText("SIH")},{value:"TUM",text:this.codeToText("TUM")}],tklStations:[{value:"NOP",text:this.codeToText("NOP")},{value:"QUB",text:this.codeToText("QUB")},{value:"YAT",text:this.codeToText("YAT")},{value:"TIK",text:this.codeToText("TIK")},{value:"TKO",text:this.codeToText("TKO")},{value:"LHP",text:this.codeToText("LHP")},{value:"HAH",text:this.codeToText("HAH")},{value:"POA",text:this.codeToText("POA")}],stationOptions:[],selectedLine:"WRL",selectedStation:"TWW",results:[],currentTime:"",fields:[{key:"dest",label:"目的地"},{key:"ttnt",label:"預計到達"},{key:"time",label:"到達時間"},{key:"plat",label:"月台"}],line:"WRL",sta:"TWW",allUpDestinations:[],allDownDestinations:[],uniqueUpDestinations:"",uniqueDownDestinations:""}},methods:{updateStations:function(){console.log("line changed"),"AEL"==this.selectedLine?this.stationOptions=this.aelStations:"TCL"==this.selectedLine?this.stationOptions=this.tclStations:"WRL"==this.selectedLine?this.stationOptions=this.wrlStations:this.stationOptions=this.tklStations,this.selectedStation=this.stationOptions[0].value,this.refresh()},refresh:function(){console.log("station changed"),this.line=this.selectedLine,this.sta=this.selectedStation,this.refreshTables()},nextTrainTtntText:function(t){return t<1?"正在離開...":t<2?"即將到達...":"".concat(t,"分鐘")},myProvider:function(){var t=this;return fetch("https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=".concat(this.line,"&sta=").concat(this.sta),{method:"get"}).then((function(t){return t.json()})).then((function(e){var n=e.data["".concat(t.line,"-").concat(t.sta)]["UP"];console.log(n);for(var s=0;s<n.length;s++)n[s]["ttnt"]=t.nextTrainTtntText(n[s]["ttnt"]),n[s]["dest"]=t.codeToText(n[s]["dest"]),t.allUpDestinations[s]=n[s]["dest"];var o=Object(c["a"])(new Set(t.allUpDestinations));return t.uniqueUpDestinations=o.join("/"),t.results=e["data"]["".concat(t.line,"-").concat(t.sta)],t.currentTime=e["curr_time"],n})).catch((function(t){return console.log(t),[]}))},myProvider2:function(){var t=this;return fetch("https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=".concat(this.line,"&sta=").concat(this.sta),{method:"get"}).then((function(t){return t.json()})).then((function(e){var n=e.data["".concat(t.line,"-").concat(t.sta)]["DOWN"];console.log(n);for(var s=0;s<n.length;s++)n[s]["ttnt"]=t.nextTrainTtntText(n[s]["ttnt"]),n[s]["dest"]=t.codeToText(n[s]["dest"]),t.allDownDestinations[s]=n[s]["dest"];var o=Object(c["a"])(new Set(t.allDownDestinations));return t.uniqueDownDestinations=o.join("/"),n})).catch((function(t){return console.log(t),[]}))},codeToText:function(t){switch(t){case"AEL":return"機場快綫";case"TCL":return"東涌綫";case"WRL":return"西鐵綫";case"TKL":return"將軍澳綫";case"HOK":return"香港";case"KOW":return"九龍";case"TSY":return"青衣";case"AIR":return"機場";case"AWE":return"博覽館";case"OLY":return"奧運";case"NAC":return"南昌";case"LAK":return"荔景";case"SUN":return"欣澳";case"TUC":return"東涌";case"HUH":return"紅磡";case"ETS":return"尖東";case"AUS":return"柯士甸";case"MEF":return"美孚";case"TWW":return"荃灣西";case"KSR":return"錦上路";case"YUL":return"元朗";case"LOP":return"朗屏";case"TIS":return"天水圍";case"SIH":return"兆康";case"TUM":return"屯門";case"NOP":return"北角";case"QUB":return"鰂魚涌";case"YAT":return"油塘";case"TIK":return"調景嶺";case"TKO":return"將軍澳";case"LHP":return"康城";case"HAH":return"坑口";case"POA":return"寶琳"}return""},refreshTables:function(){this.allUpDestinations=[],this.allDownDestinations=[],this.$refs.table.refresh(),this.$refs.table2.refresh()},cancelAutoUpdate:function(){clearInterval(this.timer)}},mounted:function(){this.stationOptions=this.wrlStations,this.timer=setInterval(this.refreshTables,5e3)},beforeDestroy:function(){clearInterval(this.timer)},props:{}}),u=l,T=(n("0a9b"),n("2877")),d=Object(T["a"])(u,r,a,!1,null,"69e4bca1",null),h=d.exports,f={name:"App",components:{NextTrain:h}},x=f,v=(n("034f"),Object(T["a"])(x,o,i,!1,null,null,null)),p=v.exports,b=n("5f5b");n("f9e3"),n("2dd8");s["default"].use(b["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(p)}}).$mount("#app")},"85ec":function(t,e,n){},cdf7:function(t,e,n){}});
//# sourceMappingURL=app.b64c024c.js.map