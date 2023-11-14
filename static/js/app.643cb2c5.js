(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},1038:function(e,t,s){e.exports=s.p+"static/img/stop.177cdee3.svg"},1813:function(e,t,s){},"1ee7":function(e,t,s){"use strict";s("c1ee")},"29b3":function(e,t,s){"use strict";s("5cde")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],a={name:"app"},i=a,c=(s("034f"),s("2877")),l=Object(c["a"])(i,n,o,!1,null,null,null),u=l.exports,d=s("8c4f"),p=s("5c96"),h=s.n(p),f=(s("0fae"),s("c115")),v=s.n(f),m=s("bc3a"),g=s.n(m),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"index"},[s("h1",[e._v("Semantic Verbal Fluency Test")]),e._m(0),s("el-button",{staticClass:"start-btn",attrs:{type:"primary",round:""},on:{click:e.startTest}},[e._v("Start")])],1)},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"intro"},[s("p",[e._v("This test aims to collect semantic verbal fluency data for academic researches. In this test, you are required to produce as many words as possible from a category in a given time.")]),s("p",[e._v("This test is composed of two phases:")]),s("ol",[s("li",[e._v(" Preparing phase: check the microphone. You can record for a few seconds and then listen to it to check the microphone by yourself. (The recording file will not be saved) ")]),s("li",[e._v(" Recording phase: You need to complete several subtests one by one. For each subtest, you are given 10 seconds for reading the instruction, and 70 seconds for speaking. During this period, we will record your background noise in the first 10 seconds, and your voice in the last 70 seconds. Between two subtests, you will be given 10 seconds to take a breath. ")])]),s("p",[e._v("After you finish all the subtests, please wait for the system to upload your audio files.")])])}],w={name:"index",data:function(){return{}},methods:{startTest:function(){this.$router.push({name:"preparing"})}}},y=w,x=(s("b3ae"),Object(c["a"])(y,b,_,!1,null,"5f6dd21c",null)),C=x.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preparing"},[r("ProgressBar",{attrs:{step:0}}),e._m(0),r("div",{directives:[{name:"show",rawName:"v-show",value:e.record,expression:"record"}]},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isRecording,expression:"!isRecording"}],staticClass:"record-btn"},[r("el-button",{attrs:{icon:"el-icon-microphone",circle:""},on:{click:e.startRecording}}),r("div",{staticClass:"record-txt"},[e._v(" Click and Speak")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isRecording,expression:"isRecording"}],staticClass:"record-btn"},[r("el-button",{attrs:{circle:""},on:{click:e.stopRecording}},[r("img",{attrs:{src:s("1038")}})]),r("div",{staticClass:"record-txt"},[e._v(" Stop recording")])],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.record,expression:"!record"}],staticClass:"replay-btns"},[r("div",[r("audio",{attrs:{controls:"controls",controlsList:"nodownload",src:e.audio_source}})]),r("div",{staticClass:"retake"},[r("el-button",{attrs:{icon:"el-icon-refresh-left",circle:""},on:{click:e.startRecording}}),r("div",{staticClass:"txt"},[e._v(" Record Again")])],1)]),r("div",{staticClass:"next-btn"},[r("el-button",{attrs:{type:"primary",round:""},on:{click:e.toRecordingPhase}},[e._v("Next Step")])],1)],1)},R=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"txt"},[s("h1",[e._v("Please Check Your Microphone")]),s("div",{staticClass:"instruction"},[s("p",[e._v("You can check your microphone by recording for a few seconds, and listen to it, or record again if the recording quality does not meet expectations.")]),s("p",[e._v('Once you think that your microphone works as expected, you can click "Next step" button to enter the recording phase.')])])])}],P=(s("d3b7"),s("cfc3"),s("9a8c"),s("a975"),s("735e"),s("c1ac"),s("d139"),s("3a7b"),s("d5d6"),s("82f8"),s("e91f"),s("60bd"),s("5f96"),s("3280"),s("3fcc"),s("ca91"),s("25a1"),s("cd26"),s("3c5d"),s("2954"),s("649e"),s("219c"),s("170b"),s("b39a"),s("72f7"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-header",{staticClass:"header"},[s("el-steps",{attrs:{active:e.step,"finish-status":"success"}},[s("el-step",{attrs:{title:"Phase 1",description:"Preparing"}}),s("el-step",{attrs:{title:"Phase 2",description:"Recording"}}),s("el-step",{attrs:{title:"Complete"}})],1),s("div",{staticClass:"end-btn"},[s("el-button",{attrs:{icon:"el-icon-switch-button",circle:""},on:{click:e.endTest}})],1)],1)}),S=[],j=(s("a9e3"),{name:"ProgressBar",props:{step:{type:Number,default:0}},methods:{endTest:function(){console.log(this),this.$router.push("/")}}}),O=j,$=(s("aa09"),Object(c["a"])(O,P,S,!1,null,null,null)),T=$.exports,E=s("d4ec"),U=s("bee2"),B=(s("c19f"),s("3ca3"),s("ddb0"),s("2b3d"),s("4a9b"),function(){function e(t){Object(E["a"])(this,e),this.bufferSize=t.bufferSize||4096,this.sampleRate=t.sampleRate,this.samples=t.samples}return Object(U["a"])(e,[{key:"finish",value:function(){this._joinSamples();var e=new ArrayBuffer(44+2*this.samples.length),t=new DataView(e);this._writeString(t,0,"RIFF"),t.setUint32(4,36+2*this.samples.length,!0),this._writeString(t,8,"WAVE"),this._writeString(t,12,"fmt "),t.setUint32(16,16,!0),t.setUint16(20,1,!0),t.setUint16(22,1,!0),t.setUint32(24,this.sampleRate,!0),t.setUint32(28,4*this.sampleRate,!0),t.setUint16(32,4,!0),t.setUint16(34,16,!0),this._writeString(t,36,"data"),t.setUint32(40,2*this.samples.length,!0),this._floatTo16BitPCM(t,44,this.samples);var s=new Blob([t],{type:"audio/wav"});return{id:Date.now(),blob:s,url:URL.createObjectURL(s)}}},{key:"_floatTo16BitPCM",value:function(e,t,s){for(var r=0;r<s.length;r++,t+=2){var n=Math.max(-1,Math.min(1,s[r]));e.setInt16(t,n<0?32768*n:32767*n,!0)}}},{key:"_joinSamples",value:function(){for(var e=this.samples.length*this.bufferSize,t=new Float64Array(e),s=0,r=0;r<this.samples.length;r++){var n=this.samples[r];t.set(n,s),s+=n.length}this.samples=t}},{key:"_writeString",value:function(e,t,s){for(var r=0;r<s.length;r++)e.setUint8(t+r,s.charCodeAt(r))}}]),e}()),M={name:"preparing",components:{ProgressBar:T},data:function(){return{record:!0,isRecording:!1,isPlaying:!1,context:null,source:null,processor:null,stream:null,samples:[],record_file:null}},computed:{audio_source:function(){return null==this.record_file?"":this.record_file.url}},methods:{startRecording:function(){var e=this;this.record=!0,this.isRecording=!0,navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then((function(t){e.context=new AudioContext,e.source=e.context.createMediaStreamSource(t),e.processor=e.context.createScriptProcessor(1024,1,1),e.stream=t,e.source.connect(e.processor),e.processor.connect(e.context.destination);var s=e;e.processor.addEventListener("audioprocess",(function(e){var t=e.inputBuffer.getChannelData(0);s.samples.push(new Float32Array(t))}))})),console.log("start recording"),this.isRecording=!0},stopRecording:function(){this.stream.getTracks().forEach((function(e){return e.stop()})),this.processor.disconnect(),this.source.disconnect(),this.context.close();var e=new B({bufferSize:1024,sampleRate:44100,samples:this.samples});this.record_file=e.finish(),this.samples=[],this.isRecording=!1,this.record=!1,console.log("stop recording"),console.log(this)},playing:function(){this.$refs.audio.play(),this.isPlaying=!0,console.log("Playing")},pausePlaying:function(){this.isPlaying=!1},toRecordingPhase:function(){this.$router.push({name:"recording"})}}},A=M,F=(s("5d7a"),Object(c["a"])(A,k,R,!1,null,"fffacc8c",null)),N=F.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"recording"},[s("ProgressBar",{attrs:{step:e.step}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.start,expression:"!start"}],staticClass:"intro"},[s("h1",[e._v(" After "),s("span",{class:{emph:e.bolder}},[e._v(e._s(e.sec))]),e._v(" seconds, please speak words in category "),s("span",{staticStyle:{color:"#0288d1"}},[e._v(e._s(e.category))]),e._v(". ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.start,expression:"start"}],staticClass:"recording",class:{load:e.loading}},[s("h1",[e._v(" Please speak words in category "),s("span",{staticStyle:{color:"#0288d1"}},[e._v(e._s(e.category))]),e._v(". ")]),s("canvas",{ref:"audioCanvas",staticClass:"wave"})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loader"},[e._m(0)])],1)},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"l_main"},[s("div",{staticClass:"l_square"},[s("span"),s("span"),s("span")]),s("div",{staticClass:"l_square"},[s("span"),s("span"),s("span")]),s("div",{staticClass:"l_square"},[s("span"),s("span"),s("span")]),s("div",{staticClass:"l_square"},[s("span"),s("span"),s("span")]),s("div",{staticClass:"load-txt"},[s("h3",[e._v("We're now uploading your recording file, please wait...")])])])}],I={name:"recording",data:function(){return{step:1,start:!1,bolder:!1,sec:10,category:"Animals",context:null,source:null,processor:null,stream:null,samples:[],record_file:null,loading:!1}},components:{ProgressBar:T},mounted:function(){var e=this;this.timer=setInterval((function(){0==e.sec?(clearInterval(e.timer),e.startRecording()):4==e.sec&&(e.bolder=!0),e.sec--}),1e3)},beforeUnmount:function(){clearInterval(this.timer)},methods:{startRecording:function(){var e=this;this.start=!0,console.log("start recording"),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then((function(t){e.context=new AudioContext,e.source=e.context.createMediaStreamSource(t),e.processor=e.context.createScriptProcessor(1024,1,1),e.stream=t,e.source.connect(e.processor),e.processor.connect(e.context.destination);var s=e,r=e.$refs.audioCanvas.getContext("2d"),n=e.$refs.audioCanvas.width,o=e.$refs.audioCanvas.height;r.strokeStyle="#409EFF",r.translate(.5,o/2+.5),e.processor.addEventListener("audioprocess",(function(e){var t=e.inputBuffer.getChannelData(0);s.samples.push(new Float32Array(t)),r.clearRect(-.5,-o/2-.5,n,o),r.beginPath();for(var a=0;a<n;a++)r.lineTo(a,o/2*t[t.length*a/n|0]);r.stroke()}))})),setTimeout((function(){e.stopRecording()}),7e3)},stopRecording:function(){var e=this;this.stream.getTracks().forEach((function(e){return e.stop()})),this.processor.disconnect(),this.source.disconnect(),this.context.close();var t=new B({bufferSize:1024,sampleRate:44100,samples:this.samples});this.record_file=t.finish(),this.samples=[],this.isRecording=!1,this.record=!1,console.log("stop recording"),console.log(this),this.step=2,this.loading=!0;var s=new FormData;s.append("audioFile",this.record_file.blob),this.$ajax.post("/upload",s).then((function(t){console.log(t),e.$router.push({name:"complete"})})).catch((function(t){console.log(t),e.errored=!0}))}}},Y=I,z=(s("1ee7"),Object(c["a"])(Y,D,q,!1,null,"06cf6db8",null)),L=z.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"complete"},[s("ProgressBar",{attrs:{step:3}}),e._m(0)],1)},J=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"txt"},[s("h1",[e._v("You have completed the test!")]),s("h2",[e._v("Thank you for your cooperation!")]),s("h2",[e._v("Your participation is very meaniful to us.")])])}],W={name:"complete",components:{ProgressBar:T}},G=W,H=(s("29b3"),Object(c["a"])(G,V,J,!1,null,"160a95e2",null)),K=H.exports;r["default"].config.productionTip=!1;var Q=new d["a"]({routes:[{path:"/",component:C},{path:"/preparing",name:"preparing",component:N},{path:"/recording",name:"recording",component:L},{path:"/complete",name:"complete",component:K}]});r["default"].use(d["a"]),r["default"].use(h.a),r["default"].use(v.a),r["default"].prototype.$ajax=g.a,new r["default"]({render:function(e){return e(u)},router:Q}).$mount("#app")},"5bf8":function(e,t,s){},"5cde":function(e,t,s){},"5d7a":function(e,t,s){"use strict";s("1813")},"85ec":function(e,t,s){},aa09:function(e,t,s){"use strict";s("b2b6")},b2b6:function(e,t,s){},b3ae:function(e,t,s){"use strict";s("5bf8")},c1ee:function(e,t,s){}});
//# sourceMappingURL=app.643cb2c5.js.map