webpackJsonp([4],{"4mi0":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("section",{staticClass:"inner--container"},[e("h2",[t._v("Start Chatting Today")]),!1===t.showChat?e("form",[e("label",{attrs:{for:"name"}},[t._v("Full Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",required:""},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),e("label",{attrs:{for:"email"}},[t._v("E-mail")]),e("input",{attrs:{type:"email",id:"email",required:""}}),e("label",{attrs:{for:"phone"}},[t._v("Phone Number")]),e("input",{attrs:{type:"tel",id:"phone",required:""}}),e("span",{staticClass:"microcopy"},[t._v("Start your 100% free, confidential chat today!")]),e("button",{staticClass:"confidential-chat",on:{click:function(a){a.preventDefault(),t.viewChat()}}},[t._v("Start Confidential Chat")])]):t._e(),!0===t.showChat?e("div",{staticClass:"chat"},[e("div",{staticClass:"chatbox"},[e("ul",{attrs:{id:"messages"}},t._l(t.turns,function(a){return t.turns.length>0?e("li",{key:a.id},[t._v("\n            "+t._s(a.name)+": "+t._s(a.message))]):t._e()}))]),e("form",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:"Type your message here..."},domProps:{value:t.message},on:{input:function(a){a.target.composing||(t.message=a.target.value)}}}),e("button",{on:{click:function(a){a.preventDefault(),t.sendMsg()},keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.preventDefault(),t.sendMsg()}}},[t._v("\n      Send")])])]):t._e()])])};n._withStripped=!0;var i={render:n,staticRenderFns:[]};a.a=i},FGYp:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("TAqO"),i=e("4mi0"),o=!1;var r=function(t){o||e("XAuq")},s=e("VU/8")(n.a,i.a,!1,r,"data-v-2f3b2d51",null);s.options.__file="pages/chat.vue",a.default=s.exports},JHh6:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"[data-v-2f3b2d51]{-webkit-box-sizing:border-box;box-sizing:border-box}html[data-v-2f3b2d51]{width:100%}body[data-v-2f3b2d51],html[data-v-2f3b2d51]{height:100%;max-width:100%;overflow-x:hidden}body[data-v-2f3b2d51]{width:100vw;font-size:18px;font-family:Open Sans,sans-serif;color:#393a3a;font-weight:400;padding:0;margin:0;background-color:#f2f1ef}.container[data-v-2f3b2d51]{background-color:#f2f1ef;margin:0 auto}section[data-v-2f3b2d51]{margin:100px 0;width:100%;min-height:200px}h2[data-v-2f3b2d51],h3[data-v-2f3b2d51],h4[data-v-2f3b2d51]{color:#7fbd59;font-family:Montserrat,sans-serif}a[data-v-2f3b2d51]{font-family:Montserrat,sans-serif;font-weight:900;text-decoration:none}.button[data-v-2f3b2d51]{width:100%;font-size:17.6px;font-size:1.1rem;text-transform:uppercase;color:#fff;padding:10px;background-color:#005a96}#messages[data-v-2f3b2d51]{list-style-type:none;margin-top:5px;padding-left:0}#messages li[data-v-2f3b2d51]{width:100%;padding:5px;font-size:14.4px;font-size:.9rem}.container[data-v-2f3b2d51]{width:90%;height:100%;min-height:700px;overflow:hidden;background-color:transparent}.inner--container[data-v-2f3b2d51]{width:100%;margin:0 auto;min-height:400px;height:100%;max-width:500px}.chatbox[data-v-2f3b2d51]{border:1px solid rgba(25,25,25,.2);background-color:#fff}.chat[data-v-2f3b2d51]{height:100%}section[data-v-2f3b2d51]{min-height:300px;height:100%;overflow:hidden}form[data-v-2f3b2d51]{width:100%;height:100%}input[data-v-2f3b2d51],label[data-v-2f3b2d51]{width:100%;font-family:Open Sans,sans-serif;font-size:19.2px;font-size:1.2rem}input[data-v-2f3b2d51]{height:46px;margin-top:5px;margin-bottom:5px;background:#fff;padding-left:10px;border-radius:3px;border:1px solid transparent;border-top:none;border-bottom:1px solid rgba(12,12,13,.2);-webkit-box-shadow:inset 0 1px 2px rgba(12,12,13,.25),0 -1px 1px rgba(12,12,13,.25),0 1px 0 #fff;box-shadow:inset 0 1px 2px rgba(12,12,13,.25),0 -1px 1px rgba(12,12,13,.25),0 1px 0 #fff}.microcopy[data-v-2f3b2d51]{font-size:13.6px;font-size:.85rem;margin-bottom:9px}@media (min-width:950px){.microcopy[data-v-2f3b2d51]{font-size:1rem}}button[data-v-2f3b2d51]{width:100%;border:none;background-color:#7fbd59;color:#f2f1ef;padding:12px;font-size:19.2px;font-size:1.2rem;margin-top:9px;cursor:pointer}.confidential-chat[data-v-2f3b2d51]{-webkit-box-shadow:0 8px 16px #000;box-shadow:0 8px 16px #000}h2[data-v-2f3b2d51]{margin-top:75px}textarea[data-v-2f3b2d51]{width:100%;height:300px}.chat button[data-v-2f3b2d51]{margin-bottom:50px}ul[data-v-2f3b2d51]{width:100%;height:200px}.person[data-v-2f3b2d51]{background-color:#f5f5f5}.rep[data-v-2f3b2d51]{background-color:#378cbf}",""])},TAqO:function(t,a,e){"use strict";a.a={data:function(){return{showChat:!1,isPerson:!1,name:"",email:"",message:"",turns:[],id:0}},methods:{viewChat:function(){this.showChat=!0,this.turns.push({isPerson:!1,message:"Hello "+this.name+", I'm Diana a VA Mental Health Counselor.",name:"Diana",id:this.id++},{isPerson:!1,message:"What can I do for you? "+this.name,name:"Diana",id:this.id++})},sendMsg:function(){var t=this.message,a=this.name.split(" ");this.turns.push({isPerson:!0,message:t,name:a[0],id:this.id++}),this.message=""}}}},XAuq:function(t,a,e){var n=e("JHh6");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("5abce294",n,!1,{sourceMap:!1})}});