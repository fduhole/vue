(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},3283:function(e,t,s){"use strict";s("b602")},"56d7":function(e,t,s){"use strict";s.r(t);s("4de4"),s("ac1f"),s("5319"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("Navbar"),s("v-main",[s("router-view")],1),s("v-footer",[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" © "+e._s((new Date).getFullYear())+" — FDUHOLE PROJECT ")])],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:"",flat:"","hide-on-scroll":""}},["login"!==this.$route.name&&"register"!==this.$route.name?s("div",[e._v(" 欢迎回来, "+e._s(e.username)+" ")]):e._e(),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:e.logout}},[s("v-icon",[e._v("mdi-export")])],1)],1)},i=[],l={name:"Navbar",data:function(){return{username:""}},computed:{},methods:{logout:function(){localStorage.clear(),this.$router.push("/login")}},watch:{$route:function(){this.username=localStorage.getItem("username")}},created:function(){this.username=localStorage.getItem("username")}},c=l,d=s("2877"),u=s("6544"),p=s.n(u),m=s("40dc"),f=s("8336"),g=s("132d"),v=s("2fa4"),h=Object(d["a"])(c,o,i,!1,null,"6a53eca0",null),b=h.exports;p()(h,{VAppBar:m["a"],VBtn:f["a"],VIcon:g["a"],VSpacer:v["a"]});var _={name:"App",components:{Navbar:b},data:function(){return{}},methods:{},created:function(){}},x=_,y=s("7496"),w=s("62ad"),k=s("553a"),C=s("f6c4"),V=Object(d["a"])(x,n,r,!1,null,"665feb59",null),$=V.exports;p()(V,{VApp:y["a"],VCol:w["a"],VFooter:k["a"],VMain:C["a"]});var S=s("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var I=s("8c4f"),T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"fill-height":""}},[s("message",{ref:"message"}),s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"10",sm:"8",md:"6",lg:"4"}},[s("v-card",{staticClass:"py-8 ",attrs:{elevation:"4"}},[s("h1",[e._v("登录")]),s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("div",{staticClass:"pl-7 pr-10"},[s("v-text-field",{attrs:{label:"用户名","prepend-icon":"mdi-account",clearable:!e.valid,counter:16,rules:e.nameRules},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("v-text-field",{attrs:{label:"密码","prepend-icon":"mdi-lock",type:"password",clearable:!e.valid,counter:32,rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("div",{staticClass:"px-10"},[s("v-btn",{staticClass:"my-4",attrs:{color:"primary",block:"",disabled:!e.valid},on:{click:e.login}},[e._v("登录")])],1),s("div",[s("p",{staticClass:"py-1 my-0"},[s("a",{attrs:{href:"#/register"}},[e._v("没有账号？点此注册")])]),s("p",{staticClass:"py-1 my-0"},[s("a",{attrs:{href:"#",onclick:"alert('活该')"}},[e._v("忘记密码")])])])])],1)],1)],1)],1)},M=[],D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-snackbar",{attrs:{top:"",color:e.type},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[s("v-icon",{attrs:{left:""}},[e._v(" "+e._s(e.icon)+" ")]),s("span",{staticClass:"text-body-1 font-weight-medium"},[e._v(e._s(e.message))])],1)],1)},E=[],O={name:"message",data:function(){return{alert:!1,type:"info",message:"",icon:""}},methods:{success:function(e){this.type="success",this.message=e,this.icon="mdi-check-circle-outline",this.alert=!0},info:function(e){this.type="info",this.message=e,this.icon="mdi-alert-circle-outline",this.alert=!0},warning:function(e){this.type="warning",this.message=e,this.icon="mdi-alert-outline",this.alert=!0},error:function(e){this.type="error",this.message=e,this.icon="mdi-alert-octagram-outline",this.alert=!0}}},j=O,L=s("2db4"),N=Object(d["a"])(j,D,E,!1,null,null,null),P=N.exports;p()(N,{VIcon:g["a"],VSnackbar:L["a"]});var R={components:{Message:P},name:"Login",data:function(){return{alert:!1,valid:!0,username:"",password:"",nameRules:[function(e){return!!e||"用户名不能为空"},function(e){return e.length<=16||"用户名不能超过16字符"}],passwordRules:[function(e){return!!e||"密码不能为空"},function(e){return e.length<=32||"密码不能超过32字符"},function(e){return e.length>=8||"密码不能少于8字符"}]}},methods:{login:function(){var e=this;this.$refs.form.validate(),this.$axios.post("login/",{username:this.username,password:this.password}).then((function(t){localStorage.setItem("token","Token "+t.data.token),localStorage.setItem("username",e.username),e.$router.push("/home")})).catch((function(){e.valid=!1,e.$refs.message.error("用户名或密码错误")}))}}},B=R,A=s("b0af"),F=s("a523"),z=s("4bd4"),H=s("0fd9"),U=s("8654"),q=Object(d["a"])(B,T,M,!1,null,"5f723d7b",null),J=q.exports;p()(q,{VBtn:f["a"],VCard:A["a"],VCol:w["a"],VContainer:F["a"],VForm:z["a"],VRow:H["a"],VTextField:U["a"]});var Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"fill-height":""}},[s("message",{ref:"message"}),s("newcomer"),e._l(e.discussions,(function(t,a){return s("v-row",{key:a,staticClass:"ma-0",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6",xl:"4"}},[s("v-card",[s("v-card-text",{staticClass:"pb-0 pt-2 font-weight-medium"},e._l(t.tag,(function(t,a){return s("v-chip",{key:a,staticClass:"mx-1 my-1",attrs:{color:t.color,outlined:"",small:"",ripple:""}},[e._v(" "+e._s(t.name)+" ")])})),1),s("v-card-text",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"py-2 text-body-1 clickable",on:{click:function(s){return e.toDiscussion(t.id,a)}}},[e.styleData[a]["fold"]?s("div",{staticClass:"fold",attrs:{id:"p"+a}},[e._v(" "+e._s(e._f("plain-text")(t.first_post.content))+" ")]):s("div",{staticClass:"unfold",attrs:{id:"p"+a}},[s("div",{attrs:{id:"rich-text"},domProps:{innerHTML:e._s(t.first_post.content)}})])]),e.styleData[a]["lines"]>3?s("div",[e.styleData[a]["fold"]?s("div",[s("v-btn",{attrs:{text:"",block:"",depressed:"","x-small":"",color:"grey lighten-1"},on:{click:function(t){return e.unfold(a)}}},[s("v-icon",[e._v("mdi-chevron-double-down")])],1)],1):s("div",[s("v-btn",{attrs:{text:"",block:"",depressed:"","x-small":"",color:"grey lighten-1"},on:{click:function(t){return e.fold(a)}}},[s("v-icon",[e._v("mdi-chevron-double-up")])],1)],1)]):s("div",[s("div",{staticStyle:{height:"0.5rem"}})]),s("v-card-text",{staticClass:"pt-0 pb-0 text-center caption"},[s("span",{staticStyle:{float:"left"}},[e._v("#"+e._s(t["id"]))]),s("span",{staticStyle:{float:"inherit"}},[e._v(e._s(e._f("timeDifference")(t["date_updated"])))]),s("span",{staticStyle:{float:"right"}},[e._v(" "+e._s(t["count"])+" "),s("v-icon",{attrs:{small:""}},[e._v("mdi-message-processing-outline")])],1)])],1)],1)],1)})),s("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[s("v-btn",e._g(e._b({staticClass:"fixed",attrs:{fab:"",color:"success"},on:{click:e.openDialog}},"v-btn",n,!1),a),[s("v-icon",[e._v("mdi-message-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("发表树洞")])]),s("v-card-text",[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-combobox",{attrs:{items:e.tags,"item-text":"name","item-value":"name",label:"标签",hint:"回车新增标签",rules:e.tagRules,"error-messages":e.errorMsg["tags"],counter:5,"hide-selected":"",clearable:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",e._b({key:JSON.stringify(t.item),attrs:{"input-value":t.selected,disabled:t.disabled,outlined:"",color:t.item.color,small:""},on:{"click:close":function(e){return t.parent.selectItem(t.item)}}},"v-chip",t.attrs,!1),[e._v(" "+e._s(t.item.name)+" "),s("span",{staticClass:"tag-icon"},[s("v-icon",{attrs:{"x-small":""}},[e._v("mdi-fire")])],1),s("span",[e._v(" "+e._s(t.item.count)+" ")])])]}},{key:"item",fn:function(t){return[s("v-list-item-content",[s("span",{class:t.item.color+"--text"},[e._v(" "+e._s(t.item.name)+" "),s("v-icon",{staticClass:"tag-icon",attrs:{color:t.item.color,small:""}},[e._v("mdi-fire")]),s("span",{staticClass:"tag-count"},[e._v(" "+e._s(t.item.count)+" ")])],1)])]}}]),model:{value:e.selectedTags,callback:function(t){e.selectedTags=t},expression:"selectedTags"}}),s("editor",{ref:"editor",attrs:{contentName:e.contentName},on:{invalid:e.editorInvalid}})],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v(" 关闭 ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.valid},on:{click:e.addDiscussion}},[e._v(" 发送 ")])],1)],1)],1),s("loading",{attrs:{length:e.discussions.length,loadList:e.getDiscussions}})],2)},Q=[],G=(s("7db0"),s("b0c0"),s("498a"),s("53ca")),K=s("f7fe"),W=s.n(K),X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-row",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:e.onIntersect,options:{threshold:0}},expression:"{\n    handler: onIntersect,\n    options: { threshold: 0 }}"}],staticClass:"py-4"},[s("v-col",{staticClass:"text-center"},[s("v-progress-linear",{attrs:{active:e.isLoading,indeterminate:"",absolute:"",top:"",color:"teal"}}),e.isLoading?s("div",[s("v-progress-circular",{attrs:{indeterminate:"",color:"teal"}})],1):e._e(),e.hasNext||e.isLoading?e._e():s("div",[e._v(" 没有然后了......")])],1)],1)},Z=[],ee=(s("96cf"),s("1da1")),te={name:"loading",props:["length","loadList"],data:function(){return{hasNext:!0,isLoading:!0}},methods:{onIntersect:function(e,t){e[0].isIntersecting&&this.load()},load:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.hasNext=!1)){t.next=2;break}return t.abrupt("return");case 2:return e.isLoading=!0,s=e.length,t.next=6,e.loadList();case 6:if(a=e.length,e.isLoading=!1,!(a<10)){t.next=11;break}return e.hasNext=!1,t.abrupt("return");case 11:if(s!==a){t.next=14;break}return e.hasNext=!1,t.abrupt("return");case 14:e.hasNext=!0;case 15:case"end":return t.stop()}}),t)})))()}},watch:{length:function(){this.isLoading=!1,this.length%10!==0&&(this.hasNext=!1)}}},se=te,ae=s("490a"),ne=s("8e36"),re=s("269a"),oe=s.n(re),ie=s("90a2"),le=Object(d["a"])(se,X,Z,!1,null,"000d07cf",null),ce=le.exports;p()(le,{VCol:w["a"],VProgressCircular:ae["a"],VProgressLinear:ne["a"],VRow:H["a"]}),oe()(le,{Intersect:ie["a"]});var de=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"text-center"},[s("v-overlay",{attrs:{value:e.overlay}},[s("div",{staticClass:"text-h5 py-4 lime--text"},[e._v(e._s(e.overlayMsg))]),s("v-progress-circular",{attrs:{indeterminate:"",color:"teal",size:"64"}})],1)],1),s("quill-editor",{ref:"editor",attrs:{options:e.editorOption},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},ue=[],pe=s("1487"),me=s.n(pe),fe=(s("b8f9"),s("953d")),ge=s.n(fe),ve=s("1a9c");fe["Quill"].register("modules/ImageExtend",ve["a"]);var he={name:"editor",props:["contentName"],data:function(){var e=this;return{editorOption:{placeholder:"说些什么 ...",theme:"snow",modules:{syntax:{highlight:function(e){return me.a.highlightAuto(e).value}},ImageExtend:{loading:!0,name:"img",size:10,action:"https://www.fduhole.tk/api/images/",accept:"image/jpg, image/png, image/gif, image/jpeg, image/bmp, image/x-icon, image/svg+xml, image/webp",response:function(e){return e.url},headers:function(e){e.setRequestHeader("Authorization",localStorage.getItem("token"))},sizeError:function(){alert("图片大小超过 10 M")},start:function(){e.overlayMsg="上传中...",e.overlay=!0},end:function(){},error:function(){e.overlayMsg="上传失败",setTimeout((function(){e.overlay=!1}),250),console.log("fail")},success:function(){e.overlayMsg="上传成功",setTimeout((function(){e.overlay=!1}),250),console.log("success")}},toolbar:{container:[["bold","italic","strike",{header:1}],["blockquote","code-block","link","image"]],handlers:{image:function(){ve["b"].emit(this.quill.id)}}}}},content:"",overlay:!1,overlayMsg:"上传中..."}},methods:{validate:function(){return!(!this.content||!this.content.replace(/<.?((p)|(br))>|\s+/g,""))||(this.$emit("invalid","内容不能为空"),!1)}},watch:{content:function(){this.content?localStorage.setItem(this.contentName,this.content):localStorage.removeItem(this.contentName)}},created:function(){this.content=localStorage.getItem(this.contentName)}},be=he,_e=s("a797"),xe=Object(d["a"])(be,de,ue,!1,null,null,null),ye=xe.exports;p()(xe,{VOverlay:_e["a"],VProgressCircular:ae["a"]});var we=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.newcomer?s("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",[e._v(" 欢迎来到树洞 ")]),s("v-card-subtitle",{staticClass:"pt-2"},[e._v(" 玩得开心! ")]),s("v-card-text",[s("ul",[s("li",{staticClass:"first-block"},[e._v(" 匿名 "),s("ul",[s("li",[e._v(" • 你会以一个随机的匿名ID发帖 ")]),s("li",[e._v(" • 在同一个讨论帖中, 你拥有相同的匿名身份 ")]),s("li",[e._v(" • 在后续的版本更新中, 你将可以自由选择是否以匿名身份发帖 ")])])]),s("li",{staticClass:"first-block"},[e._v(" 安全 "),s("ul",[s("li",[e._v(" • 你的注册邮箱和密码已使用哈希算法加密, 即使网站的数据库被攻破也不会有人知道你的密码与真实身份 ")]),s("li",[e._v(" • 本站服务器位于中国香港特别行政区, 受当地法律保护 ")])])]),s("li",{staticClass:"first-block"},[e._v(" 友善 "),s("ul",[s("li",[e._v(" • 没有人知道你是谁, 所以, 请友善地对待他人 ")])])])])]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v(" 关闭 ")]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.acceptDialog}},[e._v(" 接受 ")])],1)],1)],1):e._e()},ke=[],Ce={name:"newcomer",data:function(){return{newcomer:"",dialog:!0}},methods:{acceptDialog:function(){this.dialog=!1,localStorage.removeItem("newcomer")},closeDialog:function(){this.dialog=!1,this.$router.push("login")}},watch:{$route:function(){this.newcomer=localStorage.getItem("newcomer")}},created:function(){this.newcomer=localStorage.getItem("newcomer")}},Ve=Ce,$e=(s("3283"),s("99d9")),Se=s("169a"),Ie=Object(d["a"])(Ve,we,ke,!1,null,"141fda64",null),Te=Ie.exports;p()(Ie,{VBtn:f["a"],VCard:A["a"],VCardActions:$e["a"],VCardSubtitle:$e["b"],VCardText:$e["c"],VCardTitle:$e["d"],VDialog:Se["a"],VSpacer:v["a"]});var Me={components:{Loading:ce,Editor:ye,Message:P,Newcomer:Te},data:function(){return{discussions:[],page:1,styleData:[],lineHeight:0,scrollTop:0,content:"",tags:[],selectedTags:[],dialog:!1,tagRules:[function(e){return e.length>0||"标签不能为空"},function(e){return e.length<=5||"标签不能多于5个"}],contentRules:[function(e){return!!e.trim()||"内容不能为空"}],errorMsg:{},valid:!0}},computed:{contentName:function(){return"home-content"}},methods:{editorInvalid:function(e){this.$refs.message.error(e)},unfold:function(e){this.scrollTop=document.documentElement.scrollTop,this.styleData[e]["fold"]=!1},fold:function(e){this.styleData[e]["fold"]=!0;var t=this.scrollTop-document.documentElement.scrollTop;window.scrollBy({top:t,left:0,behavior:"smooth"})},randomColor:function(){var e=["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"],t=Math.floor(Math.random()*e.length);return e[t]},openDialog:function(){this.getTags()},closeDialog:function(){this.dialog=!1,this.errorMsg={},this.valid=!0},toDiscussion:function(e){var t=this;setTimeout((function(){t.$router.push({path:"/discussion/".concat(e)})}),50)},addDiscussion:function(){var e=this;this.$refs.form.validate()&&this.$refs.editor.validate()&&(this.closeDialog(),this.$axios.post("discussions/",{content:this.$refs.editor.content,tags:this.selectedTags}).then((function(t){console.log(t.data),e.discussions=[],e.page=1,e.getDiscussions(),e.$refs.editor.content="",e.tags=[],e.selectedTags=[]})).catch((function(t){console.log(t.response),e.$refs.message.error(t.response.data.msg)})))},getDiscussions:function(){var e=this;return this.$axios.get("discussions/",{params:{page:this.page}}).then((function(t){e.page++;for(var s=0;s<t.data.length;s++)e.styleData.push({fold:!0,lines:3});e.discussions.push.apply(e.discussions,t.data)})).catch((function(t){e.$refs.message.error(t.response.data.msg)}))},getTags:function(){var e=this;this.$axios.get("tags/").then((function(t){e.tags=t.data})).catch((function(t){console.log(t.data),e.$refs.message.error(error.response.data.msg)}))},calcuteLines:function(){for(var e=0;e<this.styleData.length;e++){var t=document.getElementById("p"+e),s=t.scrollHeight;this.styleData[e].lines=s/this.lineHeight}}},watch:{discussions:function(){var e=this;setTimeout((function(){var t=document.getElementById("p1");e.lineHeight=parseInt(window.getComputedStyle(t,null).getPropertyValue("line-height")),e.calcuteLines()}),100)},selectedTags:function(){for(var e=this,t=0;t<this.selectedTags.length;t++)if("object"!==Object(G["a"])(this.selectedTags[t])){var s=function(){var s=e.selectedTags[t].trim();return s.length>8?(e.errorMsg.tags="标签不能超过8个字符",e.selectedTags.pop(),"break"):e.tags.find((function(e){return e.name.toLowerCase()===s.toLowerCase()}))?(e.errorMsg.tags="标签不能重复",e.selectedTags.pop(),"break"):0===s.length?(e.errorMsg.tags="标签不能为空",e.selectedTags.pop(),"break"):(e.errorMsg.tags="",void(e.selectedTags[t]={name:s,color:e.randomColor(),count:0}))}();if("break"===s)break}}},mounted:function(){var e=this;window.onresize=function(){e.debouncedCalculateLines()}},created:function(){this.debouncedCalculateLines=W()(this.calcuteLines,300)}},De=Me,Ee=(s("cccb"),s("cc20")),Oe=s("2b5d"),je=s("5d23"),Le=s("5607"),Ne=Object(d["a"])(De,Y,Q,!1,null,null,null),Pe=Ne.exports;p()(Ne,{VBtn:f["a"],VCard:A["a"],VCardActions:$e["a"],VCardText:$e["c"],VCardTitle:$e["d"],VChip:Ee["a"],VCol:w["a"],VCombobox:Oe["a"],VContainer:F["a"],VDialog:Se["a"],VForm:z["a"],VIcon:g["a"],VListItemContent:je["a"],VRow:H["a"],VSpacer:v["a"]}),oe()(Ne,{Ripple:Le["a"]});var Re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"fill-height":""}},[s("message",{ref:"message"}),s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"10",sm:"8",md:"6",lg:"4"}},[s("v-card",{staticClass:"py-8",attrs:{elevation:"4"}},[s("div",{staticClass:"text-h4 pb-2"},[e._v("欢迎注册")]),s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-alert",{staticClass:"my-4",attrs:{transition:"slide-y-transition",type:e.alertType,value:e.isAlert}},[e._v(e._s(e.alertMsg))]),s("div",{staticClass:"pl-7 pr-10"},[s("v-text-field",{attrs:{label:"用户名","prepend-icon":"mdi-account","error-messages":e.errorMsg["username"],clearable:!e.valid,counter:16,rules:e.notEmptyRules},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("v-text-field",{attrs:{label:"edu邮箱","prepend-icon":"mdi-email","error-messages":e.errorMsg["email"],clearable:!e.valid,counter:32,rules:e.notEmptyRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),s("v-row",{staticStyle:{"margin-bottom":"-12px"},attrs:{align:"center"}},[s("v-col",{attrs:{cols:"8"}},[s("v-text-field",{attrs:{label:"邮件验证码","prepend-icon":"mdi-email-check","error-messages":e.errorMsg["code"],clearable:!e.valid,counter:6,rules:e.codeRules},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),s("v-col",{attrs:{cols:"4"}},[s("v-btn",{attrs:{color:"primary",block:"",disabled:!e.valid||!e.sendValid},on:{click:e.sendCode}},[e._v(" "+e._s(e.sendButton)+" ")])],1)],1),s("v-text-field",{attrs:{label:"密码",type:"password","prepend-icon":"mdi-lock",clearable:!e.valid,counter:32,rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("v-text-field",{attrs:{label:"重复密码",type:"password","prepend-icon":"mdi-lock","error-messages":e.errorMsg["password"],clearable:!e.valid,counter:32,rules:e.passwordRules},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}})],1),s("div",{staticClass:"px-10"},[s("v-btn",{staticClass:"my-4",attrs:{color:"success",block:"",disabled:!e.valid},on:{click:e.register}},[e._v("注册")])],1)],1)],1)],1)],1)],1)},Be=[],Ae={components:{Message:P},data:function(){return{username:"",password:"",password2:"",email:"",code:"",sendButton:"发送验证码",sendValid:!0,valid:!0,isAlert:!1,alertMsg:"",alertType:"info",errorMsg:{username:"",email:"",password:""},notEmptyRules:[function(e){return!!e||"内容不能为空"}],codeRules:[function(e){return!!e||"内容不能为空"},function(e){return/^[0-9]{6}$/.test(e)||"验证码格式不对"}],passwordRules:[function(e){return!!e||"内容不能为空"},function(e){return e.length<=32||"密码不能超过32字符"},function(e){return e.length>=8||"密码不能少于8字符"}]}},methods:{checkUsername:function(){var e=this;this.username?this.username.length>16?this.errorMsg.username="用户名不能超过16字符":this.username.length<3?this.errorMsg.username="用户名不能少于3字符":this.$axios.get("register/",{params:{username:this.username}}).then((function(t){0!==t.data.data?e.errorMsg.username=t.data.msg:e.errorMsg.username=""})):this.errorMsg.username="用户名不能为空"},checkEmail:function(){var e=this;/^([0-9]{11})@fudan\.edu\.cn$/.test(this.email)?this.$axios.get("register/",{params:{email:this.email}}).then((function(t){0!==t.data.data?e.errorMsg.email=t.data.msg:e.errorMsg.email=""})):this.errorMsg.email="@fudan.edu.cn"},checkPassword:function(){this.password!==this.password2?this.errorMsg.password="两次输入不一致":this.errorMsg.password=""},sendCode:function(){var e=this;this.sendButtonChangeStatus(),this.$refs.message.info("验证邮件已发送，请点击邮件中的链接以继续"),this.$axios.get("register/",{params:{username:this.username,email:this.email}}).then((function(t){0!==t.data.data?e.$refs.message.error(t.data.msg):e.$refs.message.success(t.data.msg)}))},sendButtonChangeStatus:function(){var e=this;this.sendValid=!1;for(var t=function(t){setTimeout((function(){e.sendButton=t,0===e.sendButton&&(e.sendButton="发送验证码",e.sendValid=!0)}),1e3*(60-t))},s=60;s>=0;s--)t(s)},register:function(){var e=this;this.$refs.form.validate()&&this.$axios.post("register/",{username:this.username,email:this.email,password:this.password,code:this.code}).then((function(t){0===t.data.data?(e.$refs.message.success("注册成功，跳转至登录页面......"),localStorage.setItem("newcomer","true"),e.login()):e.$refs.message.error(t.data.msg)})).catch((function(){e.$refs.message.error("网络错误")}))},login:function(){var e=this;this.$axios.post("login/",{username:this.username,password:this.password}).then((function(t){localStorage.setItem("token","Token "+t.data.token),localStorage.setItem("username",e.username),setTimeout((function(){e.$router.push("/home")}),1e3)})).catch((function(){e.valid=!1,e.$refs.message.error("用户名或密码错误")}))}},watch:{username:function(){this.debouncedCheckUsername()},email:function(){this.debouncedCheckEmail()},password2:function(){this.debouncedCheckPassword()}},created:function(){this.debouncedCheckUsername=W()(this.checkUsername,500),this.debouncedCheckEmail=W()(this.checkEmail,1e3),this.debouncedCheckPassword=W()(this.checkPassword,500)}},Fe=Ae,ze=s("0798"),He=Object(d["a"])(Fe,Re,Be,!1,null,"07fe5808",null),Ue=He.exports;p()(He,{VAlert:ze["a"],VBtn:f["a"],VCard:A["a"],VCol:w["a"],VContainer:F["a"],VForm:z["a"],VRow:H["a"],VTextField:U["a"]});var qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("message",{ref:"message"}),this.$vuetify.breakpoint.mdAndUp&&this.discussion?s("v-card",{staticClass:"mx-auto mb-6",staticStyle:{"margin-top":"-32px","z-index":"99"},attrs:{"max-width":"700px"}},[s("v-card-text",{staticClass:"pb-2 pt-2 font-weight-medium"},e._l(e.discussion.tag,(function(t,a){return s("v-chip",{key:a,staticClass:"ma-1",attrs:{color:t.color,outlined:"",ripple:""}},[e._v(" "+e._s(t.name)+" ")])})),1),s("v-divider"),s("v-card-text",{staticClass:"pt-2 pb-2 text-center"},[s("span",{staticStyle:{float:"left"}},[e._v("#"+e._s(e.discussion.id))]),s("span",{staticStyle:{float:"inherit"}},[e._v(e._s(e._f("timeDifference")(e.discussion.date_updated)))]),s("span",{staticStyle:{float:"right"}},[e._v(" "+e._s(e.discussion.count)+" "),s("v-icon",{attrs:{small:""}},[e._v("mdi-message-processing-outline")])],1)])],1):e._e(),this.$vuetify.breakpoint.smAndDown&&this.discussion?s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6",xl:"4"}},[s("v-card",[s("v-card-text",{staticClass:"pb-2 pt-2 font-weight-medium"},e._l(e.discussion.tag,(function(t,a){return s("v-chip",{key:a,staticClass:"ma-1",attrs:{color:t.color,outlined:"",ripple:""}},[e._v(" "+e._s(t.name)+" ")])})),1),s("v-divider"),s("v-card-text",{staticClass:"pt-2 pb-2 text-center"},[s("span",{staticStyle:{float:"left"}},[e._v("#"+e._s(e.discussion.id))]),s("span",{staticStyle:{float:"inherit"}},[e._v(e._s(e._f("timeDifference")(e.discussion.date_updated)))]),s("span",{staticStyle:{float:"right"}},[e._v(" "+e._s(e.discussion.count)+" "),s("v-icon",{attrs:{small:""}},[e._v("mdi-message-processing-outline")])],1)])],1)],1)],1):e._e(),e._l(e.posts,(function(t,a){return s("v-row",{key:a,attrs:{justify:"center",align:"start"}},[s("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6",xl:"4"}},[s("v-card",{attrs:{id:a}},[s("v-card-text",{staticClass:"pb-1 pt-2 text-body-2"},[s("p",[e._v(" "+e._s(t["username"])+" ")])]),s("v-card-text",{staticClass:"py-0"},[t["reply_to"]?s("div",{staticClass:"reply text-body-2"},[s("div",[s("span",[e._v(" "+e._s(t.reply_to.username)+" ")]),s("v-icon",{staticStyle:{float:"right"},attrs:{small:""},on:{click:function(s){e.scrollTo(a,e.getIndex(t.reply_to.id))}}},[e._v(" mdi-arrow-collapse-up ")])],1),s("div",[e._v(" "+e._s(e._f("plain-text")(t.reply_to.content))+" ")])]):e._e(),s("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"ma-0 text-body-1 clickable",attrs:{id:"rich-text"},domProps:{innerHTML:e._s(t.content)},on:{click:function(s){return e.reply(t["id"])}}})]),s("v-card-text",{staticClass:"text-center text-body-2 pb-2"},[s("span",{staticStyle:{float:"left"}},[e._v(" #"+e._s(a)+" ")]),s("span",{staticStyle:{float:"right"}},[e._v(" "+e._s(e._f("timeDifference")(t["date_created"]))+" ")]),s("p")])],1)],1)],1)})),s("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[s("v-btn",e._g(e._b({staticClass:"fixed",attrs:{fab:"",color:"primary"}},"v-btn",n,!1),a),[s("v-icon",[e._v("mdi-send")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("发表回复")])]),s("v-card-text",[null!=e.replyIndex?s("div",{staticClass:"reply text-body-2"},[s("div",[s("span",[e._v(" "+e._s(e.posts[e.replyIndex]["username"])+" ")])]),s("div",[e._v(" "+e._s(e._f("plain-text")(e.posts[e.replyIndex].content))+" ")])]):e._e(),s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("editor",{ref:"editor",attrs:{contentName:e.contentName},on:{invalid:e.editorInvalid}})],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v(" 关闭 ")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.valid},on:{click:e.addPost}},[e._v(" 发送 ")])],1)],1)],1),s("loading",{ref:"loading",attrs:{length:e.posts.length,loadList:e.getPosts}})],2)},Je=[],Ye={components:{Loading:ce,Editor:ye,Message:P},data:function(){return{discussion:null,posts:[],page:1,replyIndex:null,replyPk:null,dialog:!1,requiredRules:[function(e){return!!e||"内容不能为空"}],valid:!0}},computed:{contentName:function(){return"discussion-"+this.$route.params.id+"-content"}},methods:{editorInvalid:function(e){this.$refs.message.error(e)},closeDialog:function(){this.dialog=!1,this.replyIndex=null,this.replyPk=null},getIndex:function(e){for(var t=0;t<this.posts.length;t++)if(this.posts[t].id===e)return t;return 0},scrollTo:function(e,t){var s=document.getElementById(e).offsetTop,a=document.getElementById(t).offsetTop,n=a-s;window.scrollBy({top:n,left:0,behavior:"smooth"})},reply:function(e){this.replyIndex=this.getIndex(e),this.replyPk=e,this.dialog=!0},getDiscussion:function(e){var t=this;this.$axios.get("discussions/"+e+"/").then((function(e){t.discussion=e.data})).catch((function(e){t.$refs.message.error(e.response.data.msg)}))},getPosts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.page;return this.$axios.get("posts/",{params:{id:this.$route.params.id,page:t}}).then((function(t){e.page++,e.posts.push.apply(e.posts,t.data)})).catch((function(t){e.$refs.message.error(t.response.data.msg)}))},getNewPosts:function(){var e=this;this.$axios.get("posts/",{params:{id:this.$route.params.id,order:this.posts.length}}).then((function(t){e.posts.push.apply(e.posts,t.data)})).catch((function(t){e.$refs.message.error(t.response.data.msg)}))},addPost:function(){var e=this;this.$refs.form.validate()&&this.$refs.editor.validate()&&(this.dialog=!1,this.$axios.post("posts/",{content:this.$refs.editor.content,discussion_id:this.$route.params.id,post_id:this.replyPk}).then((function(){e.$refs.loading.isLoading=!0,e.getNewPosts(),e.replyIndex=null,e.replyPk=null,e.$refs.editor.content=""})).catch((function(t){console.log(t.response),e.$refs.message.error(t.response.data.msg)})))}},watch:{},mounted:function(){},created:function(){this.getDiscussion(this.$route.params.id)}},Qe=Ye,Ge=(s("f325"),s("ce7e")),Ke=Object(d["a"])(Qe,qe,Je,!1,null,"325d2dda",null),We=Ke.exports;p()(Ke,{VBtn:f["a"],VCard:A["a"],VCardActions:$e["a"],VCardText:$e["c"],VCardTitle:$e["d"],VChip:Ee["a"],VCol:w["a"],VContainer:F["a"],VDialog:Se["a"],VDivider:Ge["a"],VForm:z["a"],VIcon:g["a"],VRow:H["a"],VSpacer:v["a"]}),oe()(Ke,{Ripple:Le["a"]}),a["a"].use(I["a"]);var Xe=[{path:"/home",meta:{title:"FDU HOLE"},component:Pe,name:"home"},{path:"/login",meta:{title:"登录"},component:J,name:"login"},{path:"/",redirect:"/home"},{path:"/register",meta:{title:"注册"},component:Ue,name:"register"},{path:"/discussion/:id",meta:{title:"FDU HOLE"},component:We,name:"discussion"}],Ze=new I["a"]({routes:Xe});Ze.beforeEach((function(e,t,s){if(e.meta.title&&(document.title=e.meta.title),"/login"===e.path||"/register"===e.path)return s();var a=localStorage.getItem("token");if(!a)return s("/login");s()}));var et=Ze,tt=s("bc3a"),st=s.n(tt),at=s("2b27"),nt=s.n(at),rt=s("f309");a["a"].use(rt["a"]);var ot=new rt["a"]({});function it(e){}var lt=it;s("a753"),s("8096"),s("14e1");a["a"].config.productionTip=!1,st.a.defaults.baseURL="https://www.fduhole.tk/api/",st.a.interceptors.request.use((function(e){return e.headers.Authorization=localStorage.getItem("token"),e})),a["a"].prototype.$axios=st.a,a["a"].use(nt.a),a["a"].use(lt),a["a"].use(ge.a),a["a"].filter("plain-text",(function(e){return e.replace(/<img.*?>/g,"[图片]").replace(/<.*?>/g," ")})),a["a"].filter("timeDifference",(function(e){var t=new Date(e),s=new Date,a=Math.floor((s-t)/1e3);return a<0&&(a=0),a<60?a+"秒前":a<3600?Math.floor(a/60)+"分钟前":a<86400?Math.floor(a/3600)+"小时前":a<604800?Math.floor(a/86400)+"天前":t.getFullYear()===s.getFullYear()?e.substring(5,10):e.substring(0,10)})),new a["a"]({router:et,vuetify:ot,debounce:W.a,render:function(e){return e($)}}).$mount("#app")},"5ced":function(e,t,s){},ac3f:function(e,t,s){},b602:function(e,t,s){},cccb:function(e,t,s){"use strict";s("5ced")},f325:function(e,t,s){"use strict";s("ac3f")}});
//# sourceMappingURL=app.1b89d4cf.js.map