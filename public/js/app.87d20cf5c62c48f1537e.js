webpackJsonp([1,0],[function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var s=o(26),r=n(s),l=o(21),a=n(l),i=o(22),u=n(i),p=o(3),c=n(p),d=o(24),f=n(d),v=o(4),h=n(v),m=o(23),b=n(m),g=o(14),x=(n(g),o(25));r["default"].use(x);var _=new x;_.map({"/log":{component:c["default"]},"/reg":{component:h["default"]},"/home":{component:u["default"]},"/post":{component:f["default"]},my:{component:b["default"]}}),_.redirect({"*":"/home"}),_.start(a["default"],"#app")},,,function(t,e,o){var n,s;n=o(7),s=o(16),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;n=o(10),s=o(19),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),r=n(s);e["default"]={created:function(){var t=localStorage.getItem("token"),e=this,o=(0,r["default"])({access_token:t});t?fetch("http://localhost:3000/user",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":o.length.toString()},body:o}).then(function(t){t.ok?t.json().then(function(t){console.log(t.user.name),e.user=t.user}):e.user=void 0}):this.user=void 0},data:function(){return{user:void 0}},methods:{logOut:function(t){t.preventDefault(),localStorage.removeItem("token"),this.$router.go("/"),window.location.reload()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={created:function(){var t=this;fetch("http://localhost:3000/post",{method:"GET",cache:"no-cache"}).then(function(e){e.ok?e.json().then(function(e){t.posts=e.posts}):t.posts=void 0})},data:function(){return{posts:[]}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),r=n(s),l=o(2);n(l);e["default"]={data:function(){return{name:"",password:""}},methods:{handleLog:function(){var t=this,e=(0,r["default"])({name:t.name,password:t.password});fetch("http://localhost:3000/log",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":e.length.toString()},body:e}).then(function(e){e.ok?e.json().then(function(e){localStorage.setItem("token",e.token),t.user=e.user,t.$router.go("/"),window.location.reload()}):t.user=void 0})}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(3),r=n(s),l=o(4),a=n(l);e["default"]={data:function(){return{user:this.existUser}},components:{Log:r["default"],Reg:a["default"]},props:["existUser"],methods:{logOut:function(t){t.preventDefault(),localStorage.removeItem("token"),this.$router.go("/"),window.location.reload()}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),r=n(s),l=o(2);n(l);e["default"]={created:function(){var t=localStorage.getItem("token"),e=this,o=(0,r["default"])({access_token:t});t?fetch("http://localhost:3000/user",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":o.length.toString()},body:o}).then(function(t){t.ok?t.json().then(function(t){console.log(t.user.name),e.user=t.user}):e.user=void 0}):this.user=void 0},data:function(){return{title:"",content:"",user:void 0}},methods:{handlePost:function(){var t=this,e=(0,r["default"])({access_token:localStorage.getItem("token"),title:t.title,content:t.content});fetch("http://localhost:3000/post",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":e.length.toString()},body:e}).then(function(e){e.ok?(t.$router.go("/"),window.location.reload()):console.log("发表文章失败")})}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),r=n(s),l=o(2);n(l);e["default"]={data:function(){return{name:"",password:""}},methods:{handleReg:function(){var t=this,e=(0,r["default"])({name:t.name,password:t.password});fetch("http://localhost:3000/reg",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":e.length.toString()},body:e}).then(function(e){e.ok?e.json().then(function(e){localStorage.setItem("token",e.token),t.$router.go("/"),window.location.reload()}):t.user=void 0})}}}},,,function(t,e){},function(t,e){},function(t,e){t.exports=' <div> <div class=list-group> <div class=list-group-item v-for="post in posts"> <h3>标题:{{post.title}}</h3> <span>作者:{{post.name}}</span> <p>内容:{{post.content}}</p> </div> </div> </div> '},function(t,e){t.exports=' <div> <form> <div class=form-group> <label for=name>用户名 <input type=text id=name class=form-control v-model=name /> </label> <label for=key>密码 <input type=password class=form-control id=key v-model=password /> </label> <input type=button class="btn btn-block" value=登录 @click=handleLog /> </div> </form> </div> '},function(t,e){t.exports=" <div> <ul class=nav> <li><a v-link=\"'/home'\">首页</a></li> <li v-if=user><a v-link=\"'/post'\">发表文章</a></li> <li v-if=!user><a v-link=\"'/reg'\">注册</a></li> <li v-if=!user><a v-link=\"'/log'\">登录</a></li> <li v-if=user><a href=/logout @click=logOut>退出登录</a></li> </ul> </div> "},function(t,e){t.exports=' <div> <p v-if=!user> 请先登录 </p> <form v-if=user role=form> <div class=form-group> <label for=title>标题</label> <input type=text id=title class=form-control v-model=title /> <label for=content>内容 <textarea rols=40 cols=40 id=content class=form-control v-model=content></textarea> </label> <input type=button value=发表 class="btn btn-block" @click=handlePost /> </div> </form> </div> '},function(t,e){t.exports=' <div> <form> <div class=form-group> <label for=name>用户名 <input type=text id=name v-model=name class=form-control /> </label> <label for=key>密码 <input type=password id=key v-model=password class=form-control /> </label> <input type=button value=注册 class="btn btn-block" @click=handleReg /> </div> </form> </div> '},function(t,e){t.exports=' <div _v-b672e334=""> <header _v-b672e334=""> <h1 _v-b672e334="">多人自由论坛</h1> <p class=user v-if=user _v-b672e334="">用户:<span style=color:white _v-b672e334="">{{user.name}}</span></p> </header> <div id=content _v-b672e334=""> <router-view :exist-user=user _v-b672e334=""></router-view> </div> <div class=btn-wrap id=footer _v-b672e334=""> <div class="btn-group btn-group-justified" _v-b672e334=""> <a class="btn btn-default" v-link="\'/home\'" _v-b672e334=""><i class="glyphicon glyphicon-home" _v-b672e334=""></i><br _v-b672e334="">首页</a> <a class="btn btn-default show-btn" v-link="\'/post\'" _v-b672e334=""><i class="glyphicon glyphicon-plus" _v-b672e334=""></i><br _v-b672e334=""><span v-if=hasNew class="badge new-icon" _v-b672e334="">new</span>发表文章</a> <a class="btn btn-default" v-link="\'/my\'" _v-b672e334=""><i class="glyphicon glyphicon-tag" _v-b672e334=""></i><br _v-b672e334="">我的</a> </div> </div> </div> '},function(t,e,o){var n,s;o(13),n=o(5),s=o(20),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;n=o(6),s=o(15),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;n=o(8),s=o(17),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;n=o(9),s=o(18),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}]);
//# sourceMappingURL=app.87d20cf5c62c48f1537e.js.map