(this["webpackJsonpreact-housework"]=this["webpackJsonpreact-housework"]||[]).push([[0],{246:function(e,t,n){},359:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(57),c=n.n(s),i=n(50),o=(n(246),n(23)),d=n(106),u=function(){return Object(d.b)()},l=d.c,j=n(41),m=n.n(j),b=n(17),p=n(413),h="https://housework-manager-app.herokuapp.com/";function f(e){var t=e||new Date,n=t.getFullYear(),a=("00"+(t.getMonth()+1)).slice(-2),r=("00"+t.getDate()).slice(-2);return{dateOrigin:t,dateString:n+"-"+a+"-"+r,dateNumbner:Number(n+a+r)}}var x="ja-JP"===(window.navigator.languages&&window.navigator.languages[0]||window.navigator.language)?{common:{site:"\u5bb6\u4e8b\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",dad:"\u30d1\u30d1",mom:"\u30de\u30de",message:"\u6210\u529f\u3057\u307e\u3057\u305f",menu:{home:"\u30db\u30fc\u30e0",task:"\u30bf\u30b9\u30af",master:"\u9805\u76ee",account:"\u30e6\u30fc\u30b6\u30fc"},category:{cook:"\u6599\u7406",bath:"\u98a8\u5442",delivery:"\u9001\u8fce",clean:"\u6383\u9664",laundry:"\u200e\u6d17\u6fef",sleep:"\u5c31\u5bdd",wash:"\u6d17\u3044\u7269",child:"\u5b50\u4f9b",others:"\u305d\u306e\u4ed6"},chart:{pie:"\u30b5\u30de\u30ea\u30fc",line:"\u5148\u9031\u306e\u30bf\u30b9\u30af\u5b9f\u7e3e",bar:"\u5148\u9031\u306e\u30dd\u30a4\u30f3\u30c8\u5b9f\u7e3e"}},home:{title1:"\u5bb6\u4e8b\u62c5\u5f53\u30d0\u30e9\u30f3\u30b9",title2:"\u30dd\u30a4\u30f3\u30c8\u30b5\u30de\u30ea\u30fc",sub1:"\u5148\u9031\u306e\u30b5\u30de\u30ea\u30fc",sub2:"\u5148\u6708\u306e\u30b5\u30de\u30ea\u30fc",sub3:"\u30d1\u30d1\u306e\u30b5\u30de\u30ea\u30fc",sub4:"\u30de\u30de\u306e\u30b5\u30de\u30ea\u30fc"},task:{date:"\u65e5\u4ed8\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044",master:"\u9805\u76ee",person:"\u62c5\u5f53",add:"\u8ffd\u52a0",save:"\u4fdd\u5b58"},master:{add:"\u9805\u76ee\u3092\u8ffd\u52a0",name:"\u9805\u76ee\u540d",type:"\u7a2e\u985e",point:"\u30dd\u30a4\u30f3\u30c8\u6570",save:"\u4fdd\u5b58"},account:{welcome:"\u3088\u3046\u3053\u305d",email:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",logout:"\u30ed\u30b0\u30a2\u30a6\u30c8"},login:{title:"\u30ed\u30b0\u30a4\u30f3",user:"\u30e6\u30fc\u30b6\u30fc\u540d",password:"\u30d1\u30b9\u30ef\u30fc\u30c9",remember:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4fdd\u5b58",signin:"\u30ed\u30b0\u30a4\u30f3",forgot:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5fd8\u308c\u305f",create:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210"},register:{title:"\u767b\u9332",user:"\u30e6\u30fc\u30b6\u30fc\u540d",email:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",password1:"\u30d1\u30b9\u30ef\u30fc\u30c9",password2:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d",create:"\u4f5c\u6210",already:"\u3059\u3067\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u308b"}}:{common:{site:"Housework Manager",dad:"Dad",mom:"Mom",message:"Sucessed!",menu:{home:"Home",task:"Task",master:"Master",account:"Account"},category:{cook:"Cook",bath:"Bath",delivery:"Delivery",clean:"Clean",laundry:"\u200eLaundry",sleep:"Sleep",wash:"Wash",child:"Child",others:"Others"},chart:{pie:"Summary Report",line:"Tasks done last week",bar:"Points got last week"}},home:{title1:"Workload Report",title2:"Point Summary",sub1:"Last week summary",sub2:"Last month summary",sub3:"Dad's Summary",sub4:"Mom's Summary"},task:{date:"Select Date",master:"Master",person:"Person",add:"Add",save:"Save"},master:{add:"Add a new master",name:"Name",type:"Type",point:"Points",save:"Save"},account:{welcome:"Welcome",email:"Email",logout:"Logout"},login:{title:"Login",user:"User",password:"Password",remember:"Remember me",signin:"Sign in",forgot:"Forgot password",create:"Create an account"},register:{title:"Register",user:"User",email:"Email",password1:"Password",password2:"Password Confirm",create:"Create",already:"Already have an account"}};function O(){var e=Object(o.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var g=n(26),v=Object(g.c)({name:"navigator",initialState:{currentPage:0},reducers:{changeNavigation:function(e,t){e.currentPage=t.payload}}}),k=v.reducer,y=function(e){return e.navigator},w=v.actions.changeNavigation,C=n(22),S=n.n(C),D=n(35),T=m.a.get("csrftoken"),L=T||"",_=Object(g.b)("user/userLogin",function(){var e=Object(D.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"rest-auth/login/",{method:"POST",credentials:"include",body:JSON.stringify({username:t.username,password:t.password}),headers:new Headers({"Content-type":"application/json"})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),W=Object(g.b)("user/userLogout",Object(D.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"rest-auth/logout/",{method:"POST",credentials:"include",headers:new Headers({"Content-type":"application/json","X-CSRFToken":L})}).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),E=Object(g.b)("user/userRegister",function(){var e=Object(D.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"rest-auth/registration/",{method:"POST",credentials:"include",body:JSON.stringify({username:t.username,email:t.email,password1:t.password1,password2:t.password2}),headers:new Headers({"Content-type":"application/json"})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(g.b)("user/getUserData",Object(D.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"rest-auth/user/",{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),F=Object(g.c)({name:"user",initialState:{isLogined:!1,token:"",userData:null},reducers:{setLoginStatus:function(e){e.isLogined=!0}},extraReducers:function(e){e.addCase(_.fulfilled,(function(e,t){e.isLogined=!0,m.a.set("isLogined","1",{expires:1}),e.token=t.payload.key})),e.addCase(W.fulfilled,(function(e,t){e.isLogined=!1,e.userData=null,m.a.remove("isLogined"),m.a.remove("csrftoken"),m.a.remove("sessionid")})),e.addCase(E.fulfilled,(function(e,t){e.isLogined=!0,m.a.set("isLogined","1",{expires:1}),e.token=t.payload.key})),e.addCase(P.fulfilled,(function(e,t){e.userData=t.payload})),e.addCase(_.pending,(function(){})),e.addCase(_.rejected,(function(){})),e.addCase(W.pending,(function(){})),e.addCase(W.rejected,(function(){})),e.addCase(E.pending,(function(){})),e.addCase(E.rejected,(function(){})),e.addCase(P.pending,(function(){})),e.addCase(P.rejected,(function(){}))}}),I=F.reducer,M=function(e){return e.user},N=F.actions.setLoginStatus,R=n(124),H=m.a.get("csrftoken"),J=H||"",A=Object(g.b)("master/getMasterList",Object(D.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/masters/",{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),G=Object(g.b)("master/addMaster",function(){var e=Object(D.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/masters/",{method:"POST",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":J})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(g.b)("master/editMaster",function(){var e=Object(D.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/masters/"+String(t.id)+"/",{method:"PUT",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":J})}).then((function(e){return e.json()}));case 2:return n=e.sent,console.log(J),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),X=Object(g.b)("master/removeMaster",function(){var e=Object(D.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/masters/"+String(t.id)+"/",{method:"DELETE",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json"})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(g.c)({name:"master",initialState:{masters:[]},reducers:{},extraReducers:function(e){e.addCase(A.fulfilled,(function(e,t){e.masters=t.payload})),e.addCase(G.fulfilled,(function(e,t){e.masters=[].concat(Object(b.a)(e.masters),[t.payload])})),e.addCase(z.fulfilled,(function(e,t){e.masters=e.masters.filter((function(e){return e.id!==t.payload.id})),e.masters=[].concat(Object(b.a)(e.masters),[t.payload])})),e.addCase(X.fulfilled,(function(e,t){e.masters=e.masters.filter((function(e){return e.id!==t.payload.id}))})),e.addCase(A.pending,(function(){})),e.addCase(A.rejected,(function(){})),e.addCase(G.pending,(function(){})),e.addCase(G.rejected,(function(){})),e.addCase(z.pending,(function(){})),e.addCase(z.rejected,(function(){})),e.addCase(X.pending,(function(){})),e.addCase(X.rejected,(function(){}))}}).reducer,U=function(e){return e.master},B=(Object(R.a)((function(e){return e.master}),(function(e,t){return t}),(function(e,t){return e.masters.find((function(e){return e.id===t}))})),Object(R.a)((function(e){return e.master}),(function(e,t){return t}),(function(e,t){return e.masters.find((function(e){return e.name===t}))})),n(414)),V=n(415),Y=m.a.get("csrftoken"),$=Y||"",K=function(){var e=new Date,t=f(Object(p.a)(e,1)).dateString;return{startWeek:f(Object(B.a)(e,1)).dateString,startMonth:f(Object(V.a)(e,1)).dateString,endDate:t}},Q=Object(g.b)("task/getTaskList",function(){var e=Object(D.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(h,"api/tasks/?start_date=").concat(t,"&end_date=").concat(t),e.next=3,fetch(n,{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 3:return(a=e.sent).forEach((function(e){e.update=!1})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Z=Object(g.b)("task/getWeeklyTaskList",Object(D.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h,"api/tasks/?start_date=").concat(K().startWeek,"&end_date=").concat(K().endDate),e.next=3,fetch(t,{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),ee=Object(g.b)("task/getMonthlyTaskList",Object(D.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h,"api/tasks/?start_date=").concat(K().startMonth,"&end_date=").concat(K().endDate),e.next=3,fetch(t,{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),te=Object(g.b)("task/changeTaskList",function(){var e=Object(D.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.editTaskList.forEach((function(e){n.push({id:e.id,user:e.user,master:e.master,person:e.person,date:e.date})})),t.newTaskList.forEach((function(e){n.push({user:e.user,master:e.master,person:e.person,date:e.date})})),e.next=5,fetch(h+"api/tasks/",{method:"POST",credentials:"include",body:JSON.stringify(n),headers:new Headers({"Content-type":"application/json","X-CSRFToken":$})}).then((function(e){return e.json()}));case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ne=Object(g.b)("task/addTask",function(){var e=Object(D.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/tasks/",{method:"POST",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":$})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ae=Object(g.b)("task/editTask",function(){var e=Object(D.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/tasks/"+String(t.id)+"/",{method:"PUT",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":$})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),re=Object(g.b)("task/deleteTask",function(){var e=Object(D.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/tasks/"+String(t.id)+"/",{method:"DELETE",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":$})}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}));case 2:return e.sent,e.abrupt("return",t.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),se=Object(g.c)({name:"task",initialState:{tasks:[],dad:{week:[],month:[]},mom:{week:[],month:[]}},reducers:{},extraReducers:function(e){e.addCase(Q.fulfilled,(function(e,t){e.tasks=t.payload})),e.addCase(Z.fulfilled,(function(e,t){var n=t.payload;e.dad.week=n.filter((function(e){return"dad"===e.person})),e.mom.week=n.filter((function(e){return"mom"===e.person}))})),e.addCase(ee.fulfilled,(function(e,t){var n=t.payload;e.dad.month=n.filter((function(e){return"dad"===e.person})),e.mom.month=n.filter((function(e){return"mom"===e.person}))})),e.addCase(te.fulfilled,(function(e,t){e.tasks=t.payload})),e.addCase(ne.fulfilled,(function(e,t){e.tasks=[].concat(Object(b.a)(e.tasks),[t.payload])})),e.addCase(ae.fulfilled,(function(e,t){e.tasks=e.tasks.filter((function(e){return e.id!==t.payload.id})),e.tasks=[].concat(Object(b.a)(e.tasks),[t.payload])})),e.addCase(re.fulfilled,(function(e,t){console.log("call sucess");var n=Number(t.payload);e.tasks=e.tasks.filter((function(e){return e.id!==n}))})),e.addCase(Q.pending,(function(){})),e.addCase(Q.rejected,(function(){})),e.addCase(Z.pending,(function(){})),e.addCase(Z.rejected,(function(){})),e.addCase(ee.pending,(function(){})),e.addCase(ee.rejected,(function(){})),e.addCase(te.pending,(function(){})),e.addCase(te.rejected,(function(){})),e.addCase(ne.pending,(function(){})),e.addCase(ne.rejected,(function(){})),e.addCase(ae.pending,(function(){})),e.addCase(ae.rejected,(function(){})),e.addCase(re.pending,(function(){})),e.addCase(re.rejected,(function(){}))}}).reducer,ce=function(e){return e.task},ie=n(448),oe=n(449),de=n(451),ue=n(452),le=n(142),je=n(128),me=n.n(je),be=n(200),pe=n.n(be),he=n(129),fe=n.n(he),xe=n(0),Oe=function(e){var t=e.isLogined,n=Object(o.f)(),a=u();return Object(xe.jsx)(ie.a,{sx:{flexGrow:1,position:"fixed",width:"100%",top:0,zIndex:10},children:Object(xe.jsx)(oe.a,{position:"static",children:Object(xe.jsxs)(de.a,{children:[Object(xe.jsx)(ue.a,{edge:"start",color:"inherit","aria-label":"logo",children:Object(xe.jsx)(me.a,{})}),Object(xe.jsx)(le.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:x.common.site}),t?Object(xe.jsx)(ue.a,{size:"large",color:"inherit","aria-label":"login",onClick:function(){n.push("/account"),a(w(3))},children:Object(xe.jsx)(fe.a,{})}):Object(xe.jsx)(ue.a,{size:"large",color:"inherit","aria-label":"login",onClick:function(){n.push("/login"),a(w(3))},children:Object(xe.jsx)(pe.a,{})})]})})})},ge=n(10),ve=n(453),ke=n(454),ye=n(201),we=n.n(ye),Ce=n(203),Se=n.n(Ce),De=n(202),Te=n.n(De),Le=n(204),_e=n.n(Le),We=function(){var e=u(),t=Object(o.f)(),n=l(y).currentPage,r=Object(a.useState)(n),s=Object(ge.a)(r,2),c=s[0],i=s[1],d=["/","/task","/masters","/account"],j="1"===m.a.get("isLogined");Object(a.useEffect)((function(){i(n)}),[n]);return Object(xe.jsx)(ie.a,{children:Object(xe.jsxs)(ve.a,{sx:{background:"#efefef",position:"fixed",width:"100%",bottom:0,minHeight:80,zIndex:10},showLabels:!0,value:c,onChange:function(n,a){return r=a,void(j?(i(r),e(w(r)),t.push(d[r])):(i(3),e(w(3)),t.push("/login")));var r},children:[Object(xe.jsx)(ke.a,{label:x.common.menu.home,icon:Object(xe.jsx)(we.a,{})}),Object(xe.jsx)(ke.a,{label:x.common.menu.task,icon:Object(xe.jsx)(Te.a,{})}),Object(xe.jsx)(ke.a,{label:x.common.menu.master,icon:Object(xe.jsx)(Se.a,{})}),Object(xe.jsx)(ke.a,{label:x.common.menu.account,icon:Object(xe.jsx)(_e.a,{})})]})})},Ee=n(95),Pe=function(e){var t=e.dad,n=e.mom,a={labels:[x.common.dad,x.common.mom],datasets:[{label:x.common.chart.pie,data:[t,n],backgroundColor:["rgb(66, 165, 245, 0.6)","rgb(255, 112, 67, 0.6)"],borderColor:["rgb(66, 165, 245)","rgb(255, 112, 67)"],borderWidth:1}]};return Object(xe.jsx)(Ee.c,{data:a})},Fe=n(96),Ie=function(e){var t=e.chartData,n=new Date,a=[];Object(b.a)(Array(7)).map((function(e,t){var r=7-t,s=Object(Fe.a)(f(Object(p.a)(n,r)).dateOrigin,"eee");a.push(String(s))}));var r={labels:a,datasets:[{label:x.common.chart.bar,data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)"],borderWidth:1}]};return Object(xe.jsx)(Ee.a,{data:r})},Me=function(e){var t=e.chartData,n=new Date,a=[];Object(b.a)(Array(7)).map((function(e,t){var r=7-t,s=Object(Fe.a)(f(Object(p.a)(n,r)).dateOrigin,"eee");a.push(String(s))}));var r={labels:a,datasets:[{label:x.common.chart.line,data:t,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(xe.jsx)(Ee.b,{data:r})},Ne=n(438),Re=n(420),He=n(442),Je=n(455),Ae=n(443),Ge=n(421),ze=n(422),Xe=n(423),qe=n(215),Ue=n.n(qe),Be=n(208),Ve=n.n(Be),Ye=n(209),$e=n.n(Ye),Ke=n(210),Qe=n.n(Ke),Ze=n(207),et=n.n(Ze),tt=n(211),nt=n.n(tt),at=n(212),rt=n.n(at),st=n(168),ct=n.n(st),it=n(213),ot=n.n(it),dt=[{name:"cook",display:x.common.category.cook,icon:Object(xe.jsx)(et.a,{})},{name:"bath",display:x.common.category.bath,icon:Object(xe.jsx)(Ve.a,{})},{name:"delivery",display:x.common.category.delivery,icon:Object(xe.jsx)($e.a,{})},{name:"clean",display:x.common.category.clean,icon:Object(xe.jsx)(me.a,{})},{name:"\u200elaundry",display:x.common.category.laundry,icon:Object(xe.jsx)(Qe.a,{})},{name:"sleep",display:x.common.category.sleep,icon:Object(xe.jsx)(nt.a,{})},{name:"wash",display:x.common.category.wash,icon:Object(xe.jsx)(rt.a,{})},{name:"child",display:x.common.category.child,icon:Object(xe.jsx)(ot.a,{})},{name:"others",display:x.common.category.others,icon:Object(xe.jsx)(ct.a,{})}],ut=function(e){var t=Object(o.f)(),n=e.master;return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(Ne.a,{sx:{pt:2,pb:2},children:Object(xe.jsx)(Re.a,{component:"a",onClick:function(){t.push("/master/".concat(n.id))},children:Object(xe.jsxs)(He.a,{container:!0,spacing:2,children:[Object(xe.jsx)(He.a,{item:!0,xs:2,children:Object(xe.jsx)(Je.a,{children:Object(xe.jsx)(Ae.a,{children:function(e){var t=dt.find((function(t){return t.name===e}));return t?t.icon:Object(xe.jsx)(ct.a,{})}(n.type)})})}),Object(xe.jsx)(He.a,{item:!0,xs:6,children:Object(xe.jsx)(Ge.a,{primary:n.name,secondary:function(e){var t=dt.find((function(t){return t.name===e}));return t?t.display:x.common.category.others}(n.type)})}),Object(xe.jsx)(He.a,{item:!0,xs:1,children:Object(xe.jsx)(ze.a,{sx:{pt:2},children:Object(xe.jsx)(Ue.a,{})})}),Object(xe.jsx)(He.a,{item:!0,xs:3,children:Object(xe.jsx)(Ge.a,{primary:n.point,sx:{pt:2}})})]})})}),Object(xe.jsx)(Xe.a,{variant:"inset",component:"li"})]})},lt=n(61),jt=n(439),mt=n(458),bt=n(440),pt=n(433),ht=n(460),ft=n(436),xt=n(461),Ot=function(e){var t=Object(o.f)(),n=e.master,r=Object(a.useState)(n.name),s=Object(ge.a)(r,2),c=s[0],i=s[1],d=Object(a.useState)(n.type),l=Object(ge.a)(d,2),j=l[0],m=l[1],b=Object(a.useState)(n.point),p=Object(ge.a)(b,2),h=p[0],f=p[1],O=Object(a.useState)(!1),g=Object(ge.a)(O,2),v=g[0],k=g[1],y=Object(a.useState)(!1),w=Object(ge.a)(y,2),C=w[0],S=w[1],D=u(),T=Object(a.useContext)(on).user,L=T.userData?T.userData.pk:0;return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(ie.a,{sx:{"& > :not(style)":{m:1,pb:2,maxWidth:"40ch"}},children:Object(xe.jsxs)(le.a,{component:"h1",variant:"h5",children:["ID: ",n.id]})}),Object(xe.jsx)(ie.a,{component:"form",sx:{"& > :not(style)":{m:1,pb:2,maxWidth:"40ch"}},noValidate:!0,autoComplete:"off",children:Object(xe.jsx)(jt.a,{id:"outlined-basic",label:x.master.name,variant:"outlined",value:c,onChange:function(e){return i(e.target.value)}})}),Object(xe.jsx)(ie.a,{sx:{"& > :not(style)":{m:1,pb:2,maxWidth:"40ch"}},children:Object(xe.jsxs)(mt.a,{fullWidth:!0,children:[Object(xe.jsx)(bt.a,{id:"demo-simple-select-label",children:x.master.type}),Object(xe.jsx)(pt.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:j,label:"Type",onChange:function(e){m(e.target.value)},children:Object.entries(x.common.category).map((function(e){var t=Object(ge.a)(e,2),n=t[0],a=t[1];return Object(xe.jsx)(ht.a,{value:n,children:a},n)}))})]})}),Object(xe.jsxs)(ie.a,{sx:{"& > :not(style)":{m:1,pb:2,maxWidth:"40ch"}},children:[Object(xe.jsx)(ft.a,{value:h,onChange:function(e,t){f(t)},"aria-label":"Point",valueLabelDisplay:"auto",step:5,min:5,max:50}),Object(xe.jsx)(le.a,{component:"p",variant:"body2",children:x.master.point+": "+h})]}),Object(xe.jsx)(ie.a,{sx:{"& > :not(style)":{m:1,width:"25ch"}},children:Object(xe.jsx)(xt.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,pt:1,pb:1,width:120},onClick:function(){var e={user:L,type:j,name:c,point:h};if(n.id){var a=Object(lt.a)(Object(lt.a)({},e),{},{id:n.id});D(z(a))}else D(G(e));k(!0),setTimeout((function(){S(!0)}),1e3),setTimeout((function(){k(!1),t.push("/masters")}),2e3)},children:x.master.save})}),Object(xe.jsx)(Ht,{isDisplay:v}),Object(xe.jsx)(Mt,{isDisplay:C})]})},gt=n(462),vt=n(459),kt=n(432),yt=n(429),wt=n(431),Ct=n(133),St=n.n(Ct),Dt=n(219),Tt=n.n(Dt),Lt=n(218),_t=n.n(Lt),Wt=Object(a.createContext)({}),Et=function(){var e=new Date,t=Object(a.useState)(e),n=Object(ge.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(!1),i=Object(ge.a)(c,2),o=i[0],d=i[1],j=Object(a.useState)(!1),m=Object(ge.a)(j,2),p=m[0],h=m[1],O=u(),g=f(r),v=Object(a.useContext)(on).user,k=v.userData?v.userData.pk:0,y=l(ce),w=y.tasks,C=w.map((function(e){return e.id})),S=Object(a.useState)([]),D=Object(ge.a)(S,2),T=D[0],L=D[1],_=function(e){var t=T.filter((function(t){return t.id!==e.id}));console.log(t),t.push(e),t.sort((function(e,t){return e.id<t.id?-1:e.id>t.id?1:0})),L(t)};return Object(a.useEffect)((function(){L(y.tasks)}),[y,O]),Object(a.useEffect)((function(){L([]),O(Q(g.dateString))}),[r,O]),Object(xe.jsxs)(gt.a,{maxWidth:"sm",sx:{pt:10,pb:20},children:[Object(xe.jsx)(yt.b,{dateAdapter:kt.a,children:Object(xe.jsx)(wt.a,{label:x.task.date,value:r,onChange:function(e){s(e)},renderInput:function(e){return Object(xe.jsx)(jt.a,Object(lt.a)({},e))}})}),Object(xe.jsx)(He.a,{container:!0,children:Object(xe.jsx)(He.a,{item:!0,xs:12,children:Object(xe.jsx)(vt.a,{dense:!1,children:T!==[]?T.map((function(e,t){return Object(xe.jsx)(Wt.Provider,{value:{task:e,setTask:_},children:Object(xe.jsx)(Ne.a,{children:Object(xe.jsxs)(He.a,{container:!0,children:[Object(xe.jsx)(Pt,{}),Object(xe.jsx)(He.a,{item:!0,xs:1,children:Object(xe.jsx)(_t.a,{id:String(e.id),onClick:function(){return t=e.id,void L(T.filter((function(e){return e.id!==t})));var t},sx:{mt:1},color:"primary",fontSize:"large"})})]})})},t)})):null})})}),Object(xe.jsx)(xt.a,{variant:"contained",startIcon:Object(xe.jsx)(St.a,{}),sx:{m:1,p:1,width:120},onClick:function(){var e=T.map((function(e){return e.id})),t={id:(T.length>0?Math.max.apply(Math,Object(b.a)(e)):0)+1,user:k,master:0,person:"",date:g.dateString,update:!0};L([].concat(Object(b.a)(T),[t]))},children:x.task.add}),Object(xe.jsx)(xt.a,{variant:"contained",startIcon:Object(xe.jsx)(Tt.a,{}),sx:{m:1,p:1,width:120},onClick:function(){var e=T.map((function(e){return e.id})),t=T.filter((function(e){return!C.includes(e.id)})),n=w.filter((function(t){return!e.includes(t.id)})),a=T.filter((function(e){return C.includes(e.id)})).filter((function(e){return!0===e.update}));O(te({editTaskList:a,newTaskList:t})),n.length>0&&n.forEach((function(e){O(re(e))})),O(Q(g.dateString)),L(y.tasks),d(!0),setTimeout((function(){h(!0)}),1e3),setTimeout((function(){d(!1)}),2e3)},children:x.task.save}),Object(xe.jsx)(Ht,{isDisplay:o}),Object(xe.jsx)(Mt,{isDisplay:p})]})},Pt=function(){var e=Object(a.useContext)(Wt),t=e.task,n=e.setTask,r=l(U).masters,s=function(e){var t=r.find((function(t){return t.id===e}));return t?t.name:""},c=Object(a.useState)(s(t.master)),i=Object(ge.a)(c,2),o=i[0],d=i[1],u=Object(a.useState)(t.person),j=Object(ge.a)(u,2),m=j[0],b=j[1],p=function(e,a){var r=e||t.master,s=a||t.person,c={id:t.id,update:!0,user:t.user,master:r,person:s,date:t.date};n(c)};return Object(a.useEffect)((function(){b(t.person),d(s(t.master))}),[t]),Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(He.a,{item:!0,xs:7,children:Object(xe.jsxs)(mt.a,{fullWidth:!0,children:[Object(xe.jsx)(bt.a,{id:"master-select-label",children:x.task.master}),Object(xe.jsx)(pt.a,{labelId:"master-select-label",value:o,label:"Master",onChange:function(e){var n=String(e.target.value);d(n);var a=function(e){var t=r.find((function(t){return t.name===e}));return Number(t?t.id:0)}(n);p(a,t.person)},id:String(t.id),children:r!==[]?r.map((function(e,t){return Object(xe.jsx)(ht.a,{value:e.name,children:e.name},t)})):Object(xe.jsx)(ht.a,{value:"No Available Master",children:"-"})})]})}),Object(xe.jsx)(He.a,{item:!0,xs:4,sx:{px:1},children:Object(xe.jsxs)(mt.a,{fullWidth:!0,children:[Object(xe.jsx)(bt.a,{id:"person-select-label",children:x.task.person}),Object(xe.jsxs)(pt.a,{labelId:"person-select-label",value:m,label:"Person",onChange:function(e){var n=String(e.target.value);b(n),p(t.master,n)},id:String(t.id),children:[Object(xe.jsx)(ht.a,{value:"dad",children:x.common.dad}),Object(xe.jsx)(ht.a,{value:"mom",children:x.common.mom})]})]})})]})},Ft=n(437),It=n(434),Mt=function(e){var t=e.isDisplay,n=Object(a.useState)(t),r=Object(ge.a)(n,2),s=r[0],c=r[1];return Object(xe.jsx)(Ft.a,{open:s,autoHideDuration:3e3,onClose:function(){return c(!1)},sx:{zIndex:30},children:Object(xe.jsx)(It.a,{onClose:function(){return c(!1)},severity:"success",sx:{width:"100%"},children:x.common.message})})},Nt=n(445),Rt=n(463),Ht=function(e){var t=e.isDisplay,n=Object(a.useState)(t),r=Object(ge.a)(n,2),s=r[0];r[1];return Object(xe.jsx)(Nt.a,{open:s,sx:{display:"flex",zIndex:20},children:Object(xe.jsx)(Rt.a,{})})},Jt=n(450),At=n(220),Gt=n.n(At),zt=n(221),Xt=n.n(zt),qt=function(){var e=u();Object(a.useEffect)((function(){e(Z()),e(ee())}),[]);var t=l(U),n=l(ce),r=function(e){return e.reduce((function(e,n){return e+function(e){var n=t.masters.find((function(t){return t.id===e}));return n?n.point:0}(n.master)}),0)},s=function(e,t){var n=t.filter((function(t){return t.date===e}));return{points:r(n),tasks:n.length}},c={dad_week_points:r(n.dad.week),mom_week_points:r(n.mom.week),dad_month_points:r(n.dad.month),mom_month_points:r(n.mom.month)},i=function(){var e=new Date,t=[],a=[],r=[],c=[];return Object(b.a)(Array(7)).map((function(i,o){var d=7-o,u=f(Object(p.a)(e,d)).dateString;t.push(s(u,n.dad.week).points),a.push(s(u,n.mom.week).points),r.push(s(u,n.dad.week).tasks),c.push(s(u,n.mom.week).tasks)})),{dad_points:t,mom_points:a,dad_tasks:r,mom_tasks:c}}();return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(ie.a,{sx:{pt:7},children:Object(xe.jsx)("img",{src:"/mv.jpg",alt:"",width:"100%"})}),Object(xe.jsxs)(gt.a,{sx:{pb:16,pt:4},children:[Object(xe.jsx)(le.a,{variant:"h4",component:"h2",sx:{paddingBlock:4},children:x.home.title1}),Object(xe.jsxs)(He.a,{container:!0,spacing:2,children:[Object(xe.jsx)(He.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(xe.jsx)(Jt.a,{children:Object(xe.jsxs)(ie.a,{sx:{p:4},children:[Object(xe.jsx)(le.a,{variant:"h6",component:"h3",sx:{pb:2},children:x.home.sub1}),Object(xe.jsx)(Pe,{dad:c.dad_week_points,mom:c.mom_week_points})]})})}),Object(xe.jsx)(He.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(xe.jsx)(Jt.a,{children:Object(xe.jsxs)(ie.a,{sx:{p:4},children:[Object(xe.jsx)(le.a,{variant:"h6",component:"h3",sx:{pb:2},children:x.home.sub2}),Object(xe.jsx)(Pe,{dad:c.dad_month_points,mom:c.mom_month_points})]})})})]}),Object(xe.jsx)(le.a,{variant:"h4",component:"h2",sx:{pt:8,pb:4},children:x.home.title2}),Object(xe.jsxs)(le.a,{variant:"h6",component:"h3",children:[Object(xe.jsx)(Gt.a,{}),x.home.sub3]}),Object(xe.jsxs)(He.a,{container:!0,spacing:2,sx:{mb:8},children:[Object(xe.jsx)(He.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(xe.jsx)(Ie,{chartData:i.dad_points})}),Object(xe.jsx)(He.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(xe.jsx)(Me,{chartData:i.dad_tasks})})]}),Object(xe.jsxs)(le.a,{variant:"h6",component:"h3",children:[Object(xe.jsx)(Xt.a,{}),x.home.sub4]}),Object(xe.jsxs)(He.a,{container:!0,spacing:2,sx:{mb:8},children:[Object(xe.jsx)(He.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(xe.jsx)(Ie,{chartData:i.mom_points})}),Object(xe.jsx)(He.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(xe.jsx)(Me,{chartData:i.mom_tasks})})]})]})]})},Ut=n(222),Bt=n.n(Ut),Vt=function(){var e=Object(o.f)(),t=u(),n=l(M).userData;return Object(xe.jsx)(gt.a,{sx:{pb:20,pt:10},children:n?Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)("h1",{}),Object(xe.jsxs)(le.a,{variant:"h4",component:"h1",sx:{flexGrow:1},children:[x.account.welcome+n.username," !"]}),Object(xe.jsx)(le.a,{variant:"h6",component:"p",sx:{flexGrow:1,my:4,px:2},children:x.account.email+": "+n.email}),Object(xe.jsx)(xt.a,{variant:"contained",startIcon:Object(xe.jsx)(Bt.a,{}),sx:{m:1,p:1,width:120},onClick:function(){t(W()),e.push("/")},children:x.account.logout})]}):null})},Yt=n(224),$t=n(447),Kt=n(430),Qt=n(464),Zt=n(435),en=n(465),tn=n(223),nn=n.n(tn),an=function(){var e=Object(Yt.a)(),t=Object(o.f)(),n=u(),r=Object(a.useState)(!1),s=Object(ge.a)(r,2),c=s[0],i=s[1],d=Object(a.useState)(!1),l=Object(ge.a)(d,2),j=l[0],m=l[1];return Object(xe.jsxs)(ie.a,{sx:{backgroundImage:"url('/login.jpg')",backgroundPosition:"bottom center",minHeight:"100vh",pt:12},children:[Object(xe.jsx)($t.a,{theme:e,children:Object(xe.jsxs)(gt.a,{component:"main",maxWidth:"xs",children:[Object(xe.jsx)(Kt.a,{}),Object(xe.jsxs)(ie.a,{sx:{padding:4,display:"flex",flexDirection:"column",alignItems:"center",background:"rgba(255, 255, 255, .8)",borderRadius:"4px"},children:[Object(xe.jsx)(Ae.a,{sx:{m:1,bgcolor:"primary.main"},children:Object(xe.jsx)(nn.a,{})}),Object(xe.jsx)(le.a,{component:"h1",variant:"h5",children:x.login.title}),Object(xe.jsxs)(ie.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),a={username:String(t.get("user")),password:String(t.get("password"))};n(_(a)),i(!0),setTimeout((function(){m(!0)}),1e3),setTimeout((function(){i(!1)}),2e3)},noValidate:!0,sx:{mt:1},children:[Object(xe.jsx)(jt.a,{margin:"normal",required:!0,fullWidth:!0,id:"user",label:x.login.user,name:"user",autoComplete:"user",autoFocus:!0}),Object(xe.jsx)(jt.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:x.login.password,type:"password",id:"password",autoComplete:"current-password"}),Object(xe.jsx)(Qt.a,{control:Object(xe.jsx)(Zt.a,{value:"remember",color:"primary"}),label:x.login.remember}),Object(xe.jsx)(xt.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:x.login.signin}),Object(xe.jsxs)(He.a,{container:!0,children:[Object(xe.jsx)(He.a,{item:!0,xs:!0,children:Object(xe.jsx)(en.a,{href:"#",variant:"body2",children:x.login.forgot})}),Object(xe.jsx)(He.a,{item:!0,children:Object(xe.jsx)(en.a,{href:"#",variant:"body2",onClick:function(e){e.preventDefault(),t.push("/register")},children:x.login.create})})]})]})]})]})}),Object(xe.jsx)(Ht,{isDisplay:c}),Object(xe.jsx)(Mt,{isDisplay:j})]})},rn=function(){var e=Object(Yt.a)(),t=Object(o.f)(),n=u(),r=Object(a.useState)(!1),s=Object(ge.a)(r,2),c=s[0],i=s[1],d=Object(a.useState)(!1),l=Object(ge.a)(d,2),j=l[0],m=l[1];return Object(xe.jsxs)(ie.a,{sx:{backgroundImage:"url('/login.jpg')",backgroundPosition:"bottom center",minHeight:"100vh",pt:12},children:[Object(xe.jsx)($t.a,{theme:e,children:Object(xe.jsxs)(gt.a,{component:"main",maxWidth:"xs",children:[Object(xe.jsx)(Kt.a,{}),Object(xe.jsxs)(ie.a,{sx:{padding:4,display:"flex",flexDirection:"column",alignItems:"center",background:"rgba(255, 255, 255, .8)",borderRadius:"4px"},children:[Object(xe.jsx)(Ae.a,{sx:{m:1,bgcolor:"primary.main"},children:Object(xe.jsx)(fe.a,{})}),Object(xe.jsx)(le.a,{component:"h1",variant:"h5",children:x.register.title}),Object(xe.jsxs)(ie.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),a={username:String(t.get("user")),email:String(t.get("email")),password1:String(t.get("password")),password2:String(t.get("password_confirm"))};n(E(a)),i(!0),setTimeout((function(){m(!0)}),1e3),setTimeout((function(){i(!1)}),2e3)},noValidate:!0,sx:{mt:1},children:[Object(xe.jsx)(jt.a,{margin:"normal",required:!0,fullWidth:!0,id:"user",label:x.register.user,name:"user",autoComplete:"user",autoFocus:!0}),Object(xe.jsx)(jt.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:x.register.email,name:"email",autoComplete:"email",autoFocus:!0}),Object(xe.jsx)(jt.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:x.register.password1,type:"password",id:"password",autoComplete:"current-password"}),Object(xe.jsx)(jt.a,{margin:"normal",required:!0,fullWidth:!0,name:"password_confirm",label:x.register.password2,type:"password",id:"password_confirm",autoComplete:"current-password"}),Object(xe.jsx)(xt.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:x.register.create}),Object(xe.jsx)(He.a,{container:!0,children:Object(xe.jsx)(He.a,{item:!0,children:Object(xe.jsx)(en.a,{href:"#",variant:"body2",onClick:function(e){e.preventDefault(),t.push("/login")},children:x.register.already})})})]})]})]})}),Object(xe.jsx)(Ht,{isDisplay:c}),Object(xe.jsx)(Mt,{isDisplay:j})]})},sn=function(){var e=Object(o.f)(),t=l(U).masters;return Object(xe.jsx)(gt.a,{maxWidth:"sm",sx:{pt:10,pb:20},children:Object(xe.jsx)(He.a,{container:!0,spacing:2,children:Object(xe.jsxs)(He.a,{item:!0,xs:12,children:[Object(xe.jsx)(vt.a,{dense:!0,children:t!==[]?t.map((function(e,t){return Object(xe.jsx)(ut,{master:e},t)})):null}),Object(xe.jsx)(xt.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,pt:1,pb:1,width:200},onClick:function(){e.push("/master/new")},startIcon:Object(xe.jsx)(St.a,{}),children:x.master.add})]})})})},cn=function(){var e=Object(o.h)(),t=l(U),n=Object(a.useContext)(on).user,r=n.userData?n.userData.pk:0,s=t.masters,c=e.params.masterID,i=s.find((function(e){return e.id===Number(c)})),d=i||{id:null,user:r,type:"",name:"",point:0};return Object(xe.jsx)(gt.a,{maxWidth:"sm",sx:{mt:10},children:Object(xe.jsx)(Ot,{master:d})})},on=(n(359),Object(a.createContext)({})),dn=function(){var e=Object(o.f)(),t=u(),n=l(M),r="1"===m.a.get("isLogined");return Object(a.useEffect)((function(){r?(t(P()),t(A()),t(N()),e.push("/"),t(w(0))):(e.push("/login"),t(w(3)))}),[r,t]),Object(xe.jsx)(xe.Fragment,{children:Object(xe.jsxs)(on.Provider,{value:{user:n},children:[Object(xe.jsx)(O,{}),Object(xe.jsx)(Oe,{isLogined:r}),Object(xe.jsxs)(o.c,{children:[Object(xe.jsx)(o.a,{exact:!0,path:"/",component:qt}),Object(xe.jsx)(o.a,{path:"/login",component:an}),Object(xe.jsx)(o.a,{path:"/register",component:rn}),Object(xe.jsx)(o.a,{path:"/account",component:Vt}),Object(xe.jsx)(o.a,{path:"/masters",component:sn}),Object(xe.jsx)(o.a,{path:"/master/:masterID",component:cn}),Object(xe.jsx)(o.a,{path:"/task",component:Et})]}),Object(xe.jsx)(We,{})]})})},un=Object(g.a)({reducer:{user:I,master:q,task:se,navigator:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(xe.jsx)(r.a.StrictMode,{children:Object(xe.jsx)(d.a,{store:un,children:Object(xe.jsx)(i.a,{children:Object(xe.jsx)(dn,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[360,1,2]]]);
//# sourceMappingURL=main.1871a79b.chunk.js.map