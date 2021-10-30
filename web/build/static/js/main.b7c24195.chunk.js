(this["webpackJsonpreact-housework"]=this["webpackJsonpreact-housework"]||[]).push([[0],{246:function(e,t,n){},359:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(57),c=n.n(s),i=n(50),o=(n(246),n(23)),d=n(106),u=function(){return Object(d.b)()},l=d.c,j=n(41),b=n.n(j),m=n(17),p=n(413),h="https://housework-manager-app.herokuapp.com/",f="/web/",x="../";function O(e){var t=e||new Date,n=t.getFullYear(),a=("00"+(t.getMonth()+1)).slice(-2),r=("00"+t.getDate()).slice(-2);return{dateOrigin:t,dateString:n+"-"+a+"-"+r,dateNumbner:Number(n+a+r)}}var g="ja-JP"===(window.navigator.languages&&window.navigator.languages[0]||window.navigator.language)?{common:{site:"\u5bb6\u4e8b\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",dad:"\u30d1\u30d1",mom:"\u30de\u30de",message:"\u6210\u529f\u3057\u307e\u3057\u305f",menu:{home:"\u30db\u30fc\u30e0",task:"\u30bf\u30b9\u30af",master:"\u9805\u76ee",account:"\u30e6\u30fc\u30b6\u30fc"},category:{cook:"\u6599\u7406",bath:"\u98a8\u5442",delivery:"\u9001\u8fce",clean:"\u6383\u9664",laundry:"\u200e\u6d17\u6fef",sleep:"\u5c31\u5bdd",wash:"\u6d17\u3044\u7269",child:"\u5b50\u4f9b",others:"\u305d\u306e\u4ed6"},chart:{pie:"\u30b5\u30de\u30ea\u30fc",line:"\u5148\u9031\u306e\u30bf\u30b9\u30af\u5b9f\u7e3e",bar:"\u5148\u9031\u306e\u30dd\u30a4\u30f3\u30c8\u5b9f\u7e3e"}},home:{title1:"\u5bb6\u4e8b\u62c5\u5f53\u30d0\u30e9\u30f3\u30b9",title2:"\u30dd\u30a4\u30f3\u30c8\u30b5\u30de\u30ea\u30fc",sub1:"\u5148\u9031\u306e\u30b5\u30de\u30ea\u30fc",sub2:"\u5148\u6708\u306e\u30b5\u30de\u30ea\u30fc",sub3:"\u30d1\u30d1\u306e\u30b5\u30de\u30ea\u30fc",sub4:"\u30de\u30de\u306e\u30b5\u30de\u30ea\u30fc"},task:{date:"\u65e5\u4ed8\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044",master:"\u9805\u76ee",person:"\u62c5\u5f53",add:"\u8ffd\u52a0",save:"\u4fdd\u5b58"},master:{add:"\u9805\u76ee\u3092\u8ffd\u52a0",name:"\u9805\u76ee\u540d",type:"\u7a2e\u985e",point:"\u30dd\u30a4\u30f3\u30c8\u6570",save:"\u4fdd\u5b58"},account:{welcome:"\u3088\u3046\u3053\u305d",email:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",logout:"\u30ed\u30b0\u30a2\u30a6\u30c8"},login:{title:"\u30ed\u30b0\u30a4\u30f3",user:"\u30e6\u30fc\u30b6\u30fc\u540d",password:"\u30d1\u30b9\u30ef\u30fc\u30c9",remember:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4fdd\u5b58",signin:"\u30ed\u30b0\u30a4\u30f3",forgot:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5fd8\u308c\u305f",create:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210"},register:{title:"\u767b\u9332",user:"\u30e6\u30fc\u30b6\u30fc\u540d",email:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",password1:"\u30d1\u30b9\u30ef\u30fc\u30c9",password2:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d",create:"\u4f5c\u6210",already:"\u3059\u3067\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u308b"}}:{common:{site:"Housework Manager",dad:"Dad",mom:"Mom",message:"Sucessed!",menu:{home:"Home",task:"Task",master:"Master",account:"Account"},category:{cook:"Cook",bath:"Bath",delivery:"Delivery",clean:"Clean",laundry:"\u200eLaundry",sleep:"Sleep",wash:"Wash",child:"Child",others:"Others"},chart:{pie:"Summary Report",line:"Tasks done last week",bar:"Points got last week"}},home:{title1:"Workload Report",title2:"Point Summary",sub1:"Last week summary",sub2:"Last month summary",sub3:"Dad's Summary",sub4:"Mom's Summary"},task:{date:"Select Date",master:"Master",person:"Person",add:"Add",save:"Save"},master:{add:"Add a new master",name:"Name",type:"Type",point:"Points",save:"Save"},account:{welcome:"Welcome",email:"Email",logout:"Logout"},login:{title:"Login",user:"User",password:"Password",remember:"Remember me",signin:"Sign in",forgot:"Forgot password",create:"Create an account"},register:{title:"Register",user:"User",email:"Email",password1:"Password",password2:"Password Confirm",create:"Create",already:"Already have an account"}};function v(){var e=Object(o.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var w=n(26),k=Object(w.c)({name:"navigator",initialState:{currentPage:0},reducers:{changeNavigation:function(e,t){e.currentPage=t.payload}}}),y=k.reducer,C=function(e){return e.navigator},S=k.actions.changeNavigation,D=n(22),T=n.n(D),L=n(35),_=b.a.get("csrftoken"),W=_||"",E=Object(w.b)("user/userLogin",function(){var e=Object(L.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"rest-auth/login/",{method:"POST",credentials:"include",body:JSON.stringify({username:t.username,password:t.password}),headers:new Headers({"Content-type":"application/json"})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(w.b)("user/userLogout",Object(L.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"rest-auth/logout/",{method:"POST",credentials:"include",headers:new Headers({"Content-type":"application/json","X-CSRFToken":W})}).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),F=Object(w.b)("user/userRegister",function(){var e=Object(L.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"rest-auth/registration/",{method:"POST",credentials:"include",body:JSON.stringify({username:t.username,email:t.email,password1:t.password1,password2:t.password2}),headers:new Headers({"Content-type":"application/json"})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(w.b)("user/getUserData",Object(L.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"rest-auth/user/",{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),M=Object(w.c)({name:"user",initialState:{isLogined:!1,token:"",userData:null},reducers:{setLoginStatus:function(e){e.isLogined=!0}},extraReducers:function(e){e.addCase(E.fulfilled,(function(e,t){e.isLogined=!0,b.a.set("isLogined","1",{expires:1}),e.token=t.payload.key})),e.addCase(P.fulfilled,(function(e,t){e.isLogined=!1,e.userData=null,b.a.remove("isLogined"),b.a.remove("csrftoken"),b.a.remove("sessionid")})),e.addCase(F.fulfilled,(function(e,t){e.isLogined=!0,b.a.set("isLogined","1",{expires:1}),e.token=t.payload.key})),e.addCase(I.fulfilled,(function(e,t){e.userData=t.payload})),e.addCase(E.pending,(function(){})),e.addCase(E.rejected,(function(){})),e.addCase(P.pending,(function(){})),e.addCase(P.rejected,(function(){})),e.addCase(F.pending,(function(){})),e.addCase(F.rejected,(function(){})),e.addCase(I.pending,(function(){})),e.addCase(I.rejected,(function(){}))}}),N=M.reducer,R=function(e){return e.user},H=M.actions.setLoginStatus,J=n(124),A=b.a.get("csrftoken"),G=A||"",z=Object(w.b)("master/getMasterList",Object(L.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/masters/",{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),X=Object(w.b)("master/addMaster",function(){var e=Object(L.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/masters/",{method:"POST",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":G})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(w.b)("master/editMaster",function(){var e=Object(L.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/masters/"+String(t.id)+"/",{method:"PUT",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":G})}).then((function(e){return e.json()}));case 2:return n=e.sent,console.log(G),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(w.b)("master/removeMaster",function(){var e=Object(L.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/masters/"+String(t.id)+"/",{method:"DELETE",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json"})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B=Object(w.c)({name:"master",initialState:{masters:[]},reducers:{},extraReducers:function(e){e.addCase(z.fulfilled,(function(e,t){e.masters=t.payload})),e.addCase(X.fulfilled,(function(e,t){e.masters=[].concat(Object(m.a)(e.masters),[t.payload])})),e.addCase(q.fulfilled,(function(e,t){e.masters=e.masters.filter((function(e){return e.id!==t.payload.id})),e.masters=[].concat(Object(m.a)(e.masters),[t.payload])})),e.addCase(U.fulfilled,(function(e,t){e.masters=e.masters.filter((function(e){return e.id!==t.payload.id}))})),e.addCase(z.pending,(function(){})),e.addCase(z.rejected,(function(){})),e.addCase(X.pending,(function(){})),e.addCase(X.rejected,(function(){})),e.addCase(q.pending,(function(){})),e.addCase(q.rejected,(function(){})),e.addCase(U.pending,(function(){})),e.addCase(U.rejected,(function(){}))}}).reducer,V=function(e){return e.master},Y=(Object(J.a)((function(e){return e.master}),(function(e,t){return t}),(function(e,t){return e.masters.find((function(e){return e.id===t}))})),Object(J.a)((function(e){return e.master}),(function(e,t){return t}),(function(e,t){return e.masters.find((function(e){return e.name===t}))})),n(414)),$=n(415),K=b.a.get("csrftoken"),Q=K||"",Z=function(){var e=new Date,t=O(Object(p.a)(e,1)).dateString;return{startWeek:O(Object(Y.a)(e,1)).dateString,startMonth:O(Object($.a)(e,1)).dateString,endDate:t}},ee=Object(w.b)("task/getTaskList",function(){var e=Object(L.a)(T.a.mark((function e(t){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(h,"api/tasks/?start_date=").concat(t,"&end_date=").concat(t),e.next=3,fetch(n,{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 3:return(a=e.sent).forEach((function(e){e.update=!1})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),te=Object(w.b)("task/getWeeklyTaskList",Object(L.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h,"api/tasks/?start_date=").concat(Z().startWeek,"&end_date=").concat(Z().endDate),e.next=3,fetch(t,{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),ne=Object(w.b)("task/getMonthlyTaskList",Object(L.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h,"api/tasks/?start_date=").concat(Z().startMonth,"&end_date=").concat(Z().endDate),e.next=3,fetch(t,{method:"GET",credentials:"include",mode:"cors",cache:"no-cache"}).then((function(e){return e.json()}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),ae=Object(w.b)("task/changeTaskList",function(){var e=Object(L.a)(T.a.mark((function e(t){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.editTaskList.forEach((function(e){n.push({id:e.id,user:e.user,master:e.master,person:e.person,date:e.date})})),t.newTaskList.forEach((function(e){n.push({user:e.user,master:e.master,person:e.person,date:e.date})})),e.next=5,fetch(h+"api/tasks/",{method:"POST",credentials:"include",body:JSON.stringify(n),headers:new Headers({"Content-type":"application/json","X-CSRFToken":Q})}).then((function(e){return e.json()}));case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),re=Object(w.b)("task/addTask",function(){var e=Object(L.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/tasks/",{method:"POST",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":Q})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),se=Object(w.b)("task/editTask",function(){var e=Object(L.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/tasks/"+String(t.id)+"/",{method:"PUT",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":Q})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ce=Object(w.b)("task/deleteTask",function(){var e=Object(L.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/tasks/"+String(t.id)+"/",{method:"DELETE",credentials:"include",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json","X-CSRFToken":Q})}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}));case 2:return e.sent,e.abrupt("return",t.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ie=Object(w.c)({name:"task",initialState:{tasks:[],dad:{week:[],month:[]},mom:{week:[],month:[]}},reducers:{},extraReducers:function(e){e.addCase(ee.fulfilled,(function(e,t){e.tasks=t.payload})),e.addCase(te.fulfilled,(function(e,t){var n=t.payload;e.dad.week=n.filter((function(e){return"dad"===e.person})),e.mom.week=n.filter((function(e){return"mom"===e.person}))})),e.addCase(ne.fulfilled,(function(e,t){var n=t.payload;e.dad.month=n.filter((function(e){return"dad"===e.person})),e.mom.month=n.filter((function(e){return"mom"===e.person}))})),e.addCase(ae.fulfilled,(function(e,t){e.tasks=t.payload})),e.addCase(re.fulfilled,(function(e,t){e.tasks=[].concat(Object(m.a)(e.tasks),[t.payload])})),e.addCase(se.fulfilled,(function(e,t){e.tasks=e.tasks.filter((function(e){return e.id!==t.payload.id})),e.tasks=[].concat(Object(m.a)(e.tasks),[t.payload])})),e.addCase(ce.fulfilled,(function(e,t){console.log("call sucess");var n=Number(t.payload);e.tasks=e.tasks.filter((function(e){return e.id!==n}))})),e.addCase(ee.pending,(function(){})),e.addCase(ee.rejected,(function(){})),e.addCase(te.pending,(function(){})),e.addCase(te.rejected,(function(){})),e.addCase(ne.pending,(function(){})),e.addCase(ne.rejected,(function(){})),e.addCase(ae.pending,(function(){})),e.addCase(ae.rejected,(function(){})),e.addCase(re.pending,(function(){})),e.addCase(re.rejected,(function(){})),e.addCase(se.pending,(function(){})),e.addCase(se.rejected,(function(){})),e.addCase(ce.pending,(function(){})),e.addCase(ce.rejected,(function(){}))}}).reducer,oe=function(e){return e.task},de=n(448),ue=n(449),le=n(451),je=n(452),be=n(142),me=n(128),pe=n.n(me),he=n(200),fe=n.n(he),xe=n(129),Oe=n.n(xe),ge=n(0),ve=function(e){var t=e.isLogined,n=Object(o.f)(),a=u();return Object(ge.jsx)(de.a,{sx:{flexGrow:1,position:"fixed",width:"100%",top:0,zIndex:10},children:Object(ge.jsx)(ue.a,{position:"static",children:Object(ge.jsxs)(le.a,{children:[Object(ge.jsx)(je.a,{edge:"start",color:"inherit","aria-label":"logo",children:Object(ge.jsx)(pe.a,{})}),Object(ge.jsx)(be.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:g.common.site}),t?Object(ge.jsx)(je.a,{size:"large",color:"inherit","aria-label":"login",onClick:function(){n.push("/web/account"),a(S(3))},children:Object(ge.jsx)(Oe.a,{})}):Object(ge.jsx)(je.a,{size:"large",color:"inherit","aria-label":"login",onClick:function(){n.push("/web/login"),a(S(3))},children:Object(ge.jsx)(fe.a,{})})]})})})},we=n(10),ke=n(453),ye=n(454),Ce=n(201),Se=n.n(Ce),De=n(203),Te=n.n(De),Le=n(202),_e=n.n(Le),We=n(204),Ee=n.n(We),Pe=function(){var e=u(),t=Object(o.f)(),n=l(C).currentPage,r=Object(a.useState)(n),s=Object(we.a)(r,2),c=s[0],i=s[1],d=[f,"/web/task","/web/masters","/web/account"],j="1"===b.a.get("isLogined");Object(a.useEffect)((function(){i(n)}),[n]);return Object(ge.jsx)(de.a,{children:Object(ge.jsxs)(ke.a,{sx:{background:"#efefef",position:"fixed",width:"100%",bottom:0,minHeight:80,zIndex:10},showLabels:!0,value:c,onChange:function(n,a){return r=a,void(j?(i(r),e(S(r)),t.push(d[r])):(i(3),e(S(3)),t.push("/web/login")));var r},children:[Object(ge.jsx)(ye.a,{label:g.common.menu.home,icon:Object(ge.jsx)(Se.a,{})}),Object(ge.jsx)(ye.a,{label:g.common.menu.task,icon:Object(ge.jsx)(_e.a,{})}),Object(ge.jsx)(ye.a,{label:g.common.menu.master,icon:Object(ge.jsx)(Te.a,{})}),Object(ge.jsx)(ye.a,{label:g.common.menu.account,icon:Object(ge.jsx)(Ee.a,{})})]})})},Fe=n(95),Ie=function(e){var t=e.dad,n=e.mom,a={labels:[g.common.dad,g.common.mom],datasets:[{label:g.common.chart.pie,data:[t,n],backgroundColor:["rgb(66, 165, 245, 0.6)","rgb(255, 112, 67, 0.6)"],borderColor:["rgb(66, 165, 245)","rgb(255, 112, 67)"],borderWidth:1}]};return Object(ge.jsx)(Fe.c,{data:a})},Me=n(96),Ne=function(e){var t=e.chartData,n=new Date,a=[];Object(m.a)(Array(7)).map((function(e,t){var r=7-t,s=Object(Me.a)(O(Object(p.a)(n,r)).dateOrigin,"eee");a.push(String(s))}));var r={labels:a,datasets:[{label:g.common.chart.bar,data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)"],borderWidth:1}]};return Object(ge.jsx)(Fe.a,{data:r})},Re=function(e){var t=e.chartData,n=new Date,a=[];Object(m.a)(Array(7)).map((function(e,t){var r=7-t,s=Object(Me.a)(O(Object(p.a)(n,r)).dateOrigin,"eee");a.push(String(s))}));var r={labels:a,datasets:[{label:g.common.chart.line,data:t,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(ge.jsx)(Fe.b,{data:r})},He=n(438),Je=n(420),Ae=n(442),Ge=n(455),ze=n(443),Xe=n(421),qe=n(422),Ue=n(423),Be=n(215),Ve=n.n(Be),Ye=n(208),$e=n.n(Ye),Ke=n(209),Qe=n.n(Ke),Ze=n(210),et=n.n(Ze),tt=n(207),nt=n.n(tt),at=n(211),rt=n.n(at),st=n(212),ct=n.n(st),it=n(168),ot=n.n(it),dt=n(213),ut=n.n(dt),lt=[{name:"cook",display:g.common.category.cook,icon:Object(ge.jsx)(nt.a,{})},{name:"bath",display:g.common.category.bath,icon:Object(ge.jsx)($e.a,{})},{name:"delivery",display:g.common.category.delivery,icon:Object(ge.jsx)(Qe.a,{})},{name:"clean",display:g.common.category.clean,icon:Object(ge.jsx)(pe.a,{})},{name:"\u200elaundry",display:g.common.category.laundry,icon:Object(ge.jsx)(et.a,{})},{name:"sleep",display:g.common.category.sleep,icon:Object(ge.jsx)(rt.a,{})},{name:"wash",display:g.common.category.wash,icon:Object(ge.jsx)(ct.a,{})},{name:"child",display:g.common.category.child,icon:Object(ge.jsx)(ut.a,{})},{name:"others",display:g.common.category.others,icon:Object(ge.jsx)(ot.a,{})}],jt=function(e){var t=Object(o.f)(),n=e.master;return Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(He.a,{sx:{pt:2,pb:2},children:Object(ge.jsx)(Je.a,{component:"a",onClick:function(){t.push("".concat(f,"master/").concat(n.id))},children:Object(ge.jsxs)(Ae.a,{container:!0,spacing:2,children:[Object(ge.jsx)(Ae.a,{item:!0,xs:2,children:Object(ge.jsx)(Ge.a,{children:Object(ge.jsx)(ze.a,{children:function(e){var t=lt.find((function(t){return t.name===e}));return t?t.icon:Object(ge.jsx)(ot.a,{})}(n.type)})})}),Object(ge.jsx)(Ae.a,{item:!0,xs:6,children:Object(ge.jsx)(Xe.a,{primary:n.name,secondary:function(e){var t=lt.find((function(t){return t.name===e}));return t?t.display:g.common.category.others}(n.type)})}),Object(ge.jsx)(Ae.a,{item:!0,xs:1,children:Object(ge.jsx)(qe.a,{sx:{pt:2},children:Object(ge.jsx)(Ve.a,{})})}),Object(ge.jsx)(Ae.a,{item:!0,xs:3,children:Object(ge.jsx)(Xe.a,{primary:n.point,sx:{pt:2}})})]})})}),Object(ge.jsx)(Ue.a,{variant:"inset",component:"li"})]})},bt=n(61),mt=n(439),pt=n(458),ht=n(440),ft=n(433),xt=n(460),Ot=n(436),gt=n(461),vt=function(e){var t=Object(o.f)(),n=e.master,r=Object(a.useState)(n.name),s=Object(we.a)(r,2),c=s[0],i=s[1],d=Object(a.useState)(n.type),l=Object(we.a)(d,2),j=l[0],b=l[1],m=Object(a.useState)(n.point),p=Object(we.a)(m,2),h=p[0],f=p[1],x=Object(a.useState)(!1),O=Object(we.a)(x,2),v=O[0],w=O[1],k=Object(a.useState)(!1),y=Object(we.a)(k,2),C=y[0],S=y[1],D=u(),T=Object(a.useContext)(un).user,L=T.userData?T.userData.pk:0;return Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(de.a,{sx:{"& > :not(style)":{m:1,pb:2,maxWidth:"40ch"}},children:Object(ge.jsxs)(be.a,{component:"h1",variant:"h5",children:["ID: ",n.id]})}),Object(ge.jsx)(de.a,{component:"form",sx:{"& > :not(style)":{m:1,pb:2,maxWidth:"40ch"}},noValidate:!0,autoComplete:"off",children:Object(ge.jsx)(mt.a,{id:"outlined-basic",label:g.master.name,variant:"outlined",value:c,onChange:function(e){return i(e.target.value)}})}),Object(ge.jsx)(de.a,{sx:{"& > :not(style)":{m:1,pb:2,maxWidth:"40ch"}},children:Object(ge.jsxs)(pt.a,{fullWidth:!0,children:[Object(ge.jsx)(ht.a,{id:"demo-simple-select-label",children:g.master.type}),Object(ge.jsx)(ft.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:j,label:"Type",onChange:function(e){b(e.target.value)},children:Object.entries(g.common.category).map((function(e){var t=Object(we.a)(e,2),n=t[0],a=t[1];return Object(ge.jsx)(xt.a,{value:n,children:a},n)}))})]})}),Object(ge.jsxs)(de.a,{sx:{"& > :not(style)":{m:1,pb:2,maxWidth:"40ch"}},children:[Object(ge.jsx)(Ot.a,{value:h,onChange:function(e,t){f(t)},"aria-label":"Point",valueLabelDisplay:"auto",step:5,min:5,max:50}),Object(ge.jsx)(be.a,{component:"p",variant:"body2",children:g.master.point+": "+h})]}),Object(ge.jsx)(de.a,{sx:{"& > :not(style)":{m:1,width:"25ch"}},children:Object(ge.jsx)(gt.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,pt:1,pb:1,width:120},onClick:function(){var e={user:L,type:j,name:c,point:h};if(n.id){var a=Object(bt.a)(Object(bt.a)({},e),{},{id:n.id});D(q(a))}else D(X(e));w(!0),setTimeout((function(){S(!0)}),1e3),setTimeout((function(){w(!1),t.push("/web/masters")}),2e3)},children:g.master.save})}),Object(ge.jsx)(At,{isDisplay:v}),Object(ge.jsx)(Rt,{isDisplay:C})]})},wt=n(462),kt=n(459),yt=n(432),Ct=n(429),St=n(431),Dt=n(133),Tt=n.n(Dt),Lt=n(219),_t=n.n(Lt),Wt=n(218),Et=n.n(Wt),Pt=Object(a.createContext)({}),Ft=function(){var e=new Date,t=Object(a.useState)(e),n=Object(we.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(!1),i=Object(we.a)(c,2),o=i[0],d=i[1],j=Object(a.useState)(!1),b=Object(we.a)(j,2),p=b[0],h=b[1],f=u(),x=O(r),v=Object(a.useContext)(un).user,w=v.userData?v.userData.pk:0,k=l(oe),y=k.tasks,C=y.map((function(e){return e.id})),S=Object(a.useState)([]),D=Object(we.a)(S,2),T=D[0],L=D[1],_=function(e){var t=T.filter((function(t){return t.id!==e.id}));console.log(t),t.push(e),t.sort((function(e,t){return e.id<t.id?-1:e.id>t.id?1:0})),L(t)};return Object(a.useEffect)((function(){L(k.tasks)}),[k,f]),Object(a.useEffect)((function(){L([]),f(ee(x.dateString))}),[r,f]),Object(ge.jsxs)(wt.a,{maxWidth:"sm",sx:{pt:10,pb:20},children:[Object(ge.jsx)(Ct.b,{dateAdapter:yt.a,children:Object(ge.jsx)(St.a,{label:g.task.date,value:r,onChange:function(e){s(e)},renderInput:function(e){return Object(ge.jsx)(mt.a,Object(bt.a)({},e))}})}),Object(ge.jsx)(Ae.a,{container:!0,children:Object(ge.jsx)(Ae.a,{item:!0,xs:12,children:Object(ge.jsx)(kt.a,{dense:!1,children:T!==[]?T.map((function(e,t){return Object(ge.jsx)(Pt.Provider,{value:{task:e,setTask:_},children:Object(ge.jsx)(He.a,{children:Object(ge.jsxs)(Ae.a,{container:!0,children:[Object(ge.jsx)(It,{}),Object(ge.jsx)(Ae.a,{item:!0,xs:1,children:Object(ge.jsx)(Et.a,{id:String(e.id),onClick:function(){return t=e.id,void L(T.filter((function(e){return e.id!==t})));var t},sx:{mt:1},color:"primary",fontSize:"large"})})]})})},t)})):null})})}),Object(ge.jsx)(gt.a,{variant:"contained",startIcon:Object(ge.jsx)(Tt.a,{}),sx:{m:1,p:1,width:120},onClick:function(){var e=T.map((function(e){return e.id})),t={id:(T.length>0?Math.max.apply(Math,Object(m.a)(e)):0)+1,user:w,master:0,person:"",date:x.dateString,update:!0};L([].concat(Object(m.a)(T),[t]))},children:g.task.add}),Object(ge.jsx)(gt.a,{variant:"contained",startIcon:Object(ge.jsx)(_t.a,{}),sx:{m:1,p:1,width:120},onClick:function(){var e=T.map((function(e){return e.id})),t=T.filter((function(e){return!C.includes(e.id)})),n=y.filter((function(t){return!e.includes(t.id)})),a=T.filter((function(e){return C.includes(e.id)})).filter((function(e){return!0===e.update}));f(ae({editTaskList:a,newTaskList:t})),n.length>0&&n.forEach((function(e){f(ce(e))})),f(ee(x.dateString)),L(k.tasks),d(!0),setTimeout((function(){h(!0)}),1e3),setTimeout((function(){d(!1)}),2e3)},children:g.task.save}),Object(ge.jsx)(At,{isDisplay:o}),Object(ge.jsx)(Rt,{isDisplay:p})]})},It=function(){var e=Object(a.useContext)(Pt),t=e.task,n=e.setTask,r=l(V).masters,s=function(e){var t=r.find((function(t){return t.id===e}));return t?t.name:""},c=Object(a.useState)(s(t.master)),i=Object(we.a)(c,2),o=i[0],d=i[1],u=Object(a.useState)(t.person),j=Object(we.a)(u,2),b=j[0],m=j[1],p=function(e,a){var r=e||t.master,s=a||t.person,c={id:t.id,update:!0,user:t.user,master:r,person:s,date:t.date};n(c)};return Object(a.useEffect)((function(){m(t.person),d(s(t.master))}),[t]),Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(Ae.a,{item:!0,xs:7,children:Object(ge.jsxs)(pt.a,{fullWidth:!0,children:[Object(ge.jsx)(ht.a,{id:"master-select-label",children:g.task.master}),Object(ge.jsx)(ft.a,{labelId:"master-select-label",value:o,label:"Master",onChange:function(e){var n=String(e.target.value);d(n);var a=function(e){var t=r.find((function(t){return t.name===e}));return Number(t?t.id:0)}(n);p(a,t.person)},id:String(t.id),children:r!==[]?r.map((function(e,t){return Object(ge.jsx)(xt.a,{value:e.name,children:e.name},t)})):Object(ge.jsx)(xt.a,{value:"No Available Master",children:"-"})})]})}),Object(ge.jsx)(Ae.a,{item:!0,xs:4,sx:{px:1},children:Object(ge.jsxs)(pt.a,{fullWidth:!0,children:[Object(ge.jsx)(ht.a,{id:"person-select-label",children:g.task.person}),Object(ge.jsxs)(ft.a,{labelId:"person-select-label",value:b,label:"Person",onChange:function(e){var n=String(e.target.value);m(n),p(t.master,n)},id:String(t.id),children:[Object(ge.jsx)(xt.a,{value:"dad",children:g.common.dad}),Object(ge.jsx)(xt.a,{value:"mom",children:g.common.mom})]})]})})]})},Mt=n(437),Nt=n(434),Rt=function(e){var t=e.isDisplay,n=Object(a.useState)(t),r=Object(we.a)(n,2),s=r[0],c=r[1];return Object(ge.jsx)(Mt.a,{open:s,autoHideDuration:3e3,onClose:function(){return c(!1)},sx:{zIndex:30},children:Object(ge.jsx)(Nt.a,{onClose:function(){return c(!1)},severity:"success",sx:{width:"100%"},children:g.common.message})})},Ht=n(445),Jt=n(463),At=function(e){var t=e.isDisplay,n=Object(a.useState)(t),r=Object(we.a)(n,2),s=r[0];r[1];return Object(ge.jsx)(Ht.a,{open:s,sx:{display:"flex",zIndex:20},children:Object(ge.jsx)(Jt.a,{})})},Gt=n(450),zt=n(220),Xt=n.n(zt),qt=n(221),Ut=n.n(qt),Bt=function(){var e=u();Object(a.useEffect)((function(){e(te()),e(ne())}),[]);var t=l(V),n=l(oe),r=function(e){return e.reduce((function(e,n){return e+function(e){var n=t.masters.find((function(t){return t.id===e}));return n?n.point:0}(n.master)}),0)},s=function(e,t){var n=t.filter((function(t){return t.date===e}));return{points:r(n),tasks:n.length}},c={dad_week_points:r(n.dad.week),mom_week_points:r(n.mom.week),dad_month_points:r(n.dad.month),mom_month_points:r(n.mom.month)},i=function(){var e=new Date,t=[],a=[],r=[],c=[];return Object(m.a)(Array(7)).map((function(i,o){var d=7-o,u=O(Object(p.a)(e,d)).dateString;t.push(s(u,n.dad.week).points),a.push(s(u,n.mom.week).points),r.push(s(u,n.dad.week).tasks),c.push(s(u,n.mom.week).tasks)})),{dad_points:t,mom_points:a,dad_tasks:r,mom_tasks:c}}();return Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(de.a,{sx:{pt:7},children:Object(ge.jsx)("img",{src:"../mv.jpg",alt:"",width:"100%"})}),Object(ge.jsxs)(wt.a,{sx:{pb:16,pt:4},children:[Object(ge.jsx)(be.a,{variant:"h4",component:"h2",sx:{paddingBlock:4},children:g.home.title1}),Object(ge.jsxs)(Ae.a,{container:!0,spacing:2,children:[Object(ge.jsx)(Ae.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(ge.jsx)(Gt.a,{children:Object(ge.jsxs)(de.a,{sx:{p:4},children:[Object(ge.jsx)(be.a,{variant:"h6",component:"h3",sx:{pb:2},children:g.home.sub1}),Object(ge.jsx)(Ie,{dad:c.dad_week_points,mom:c.mom_week_points})]})})}),Object(ge.jsx)(Ae.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(ge.jsx)(Gt.a,{children:Object(ge.jsxs)(de.a,{sx:{p:4},children:[Object(ge.jsx)(be.a,{variant:"h6",component:"h3",sx:{pb:2},children:g.home.sub2}),Object(ge.jsx)(Ie,{dad:c.dad_month_points,mom:c.mom_month_points})]})})})]}),Object(ge.jsx)(be.a,{variant:"h4",component:"h2",sx:{pt:8,pb:4},children:g.home.title2}),Object(ge.jsxs)(be.a,{variant:"h6",component:"h3",children:[Object(ge.jsx)(Xt.a,{}),g.home.sub3]}),Object(ge.jsxs)(Ae.a,{container:!0,spacing:2,sx:{mb:8},children:[Object(ge.jsx)(Ae.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(ge.jsx)(Ne,{chartData:i.dad_points})}),Object(ge.jsx)(Ae.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(ge.jsx)(Re,{chartData:i.dad_tasks})})]}),Object(ge.jsxs)(be.a,{variant:"h6",component:"h3",children:[Object(ge.jsx)(Ut.a,{}),g.home.sub4]}),Object(ge.jsxs)(Ae.a,{container:!0,spacing:2,sx:{mb:8},children:[Object(ge.jsx)(Ae.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(ge.jsx)(Ne,{chartData:i.mom_points})}),Object(ge.jsx)(Ae.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(ge.jsx)(Re,{chartData:i.mom_tasks})})]})]})]})},Vt=n(222),Yt=n.n(Vt),$t=function(){var e=Object(o.f)(),t=u(),n=l(R).userData;return Object(ge.jsx)(wt.a,{sx:{pb:20,pt:10},children:n?Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)("h1",{}),Object(ge.jsxs)(be.a,{variant:"h4",component:"h1",sx:{flexGrow:1},children:[g.account.welcome+n.username," !"]}),Object(ge.jsx)(be.a,{variant:"h6",component:"p",sx:{flexGrow:1,my:4,px:2},children:g.account.email+": "+n.email}),Object(ge.jsx)(gt.a,{variant:"contained",startIcon:Object(ge.jsx)(Yt.a,{}),sx:{m:1,p:1,width:120},onClick:function(){t(P()),e.push(f)},children:g.account.logout})]}):null})},Kt=n(224),Qt=n(447),Zt=n(430),en=n(464),tn=n(435),nn=n(465),an=n(223),rn=n.n(an),sn=function(){var e=Object(Kt.a)(),t=Object(o.f)(),n=u(),r=Object(a.useState)(!1),s=Object(we.a)(r,2),c=s[0],i=s[1],d=Object(a.useState)(!1),l=Object(we.a)(d,2),j=l[0],b=l[1];return Object(ge.jsxs)(de.a,{sx:{backgroundImage:"\"url('".concat(x,"login.jpg')\""),backgroundPosition:"bottom center",minHeight:"100vh",pt:12},children:[Object(ge.jsx)(Qt.a,{theme:e,children:Object(ge.jsxs)(wt.a,{component:"main",maxWidth:"xs",children:[Object(ge.jsx)(Zt.a,{}),Object(ge.jsxs)(de.a,{sx:{padding:4,display:"flex",flexDirection:"column",alignItems:"center",background:"rgba(255, 255, 255, .8)",borderRadius:"4px"},children:[Object(ge.jsx)(ze.a,{sx:{m:1,bgcolor:"primary.main"},children:Object(ge.jsx)(rn.a,{})}),Object(ge.jsx)(be.a,{component:"h1",variant:"h5",children:g.login.title}),Object(ge.jsxs)(de.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),a={username:String(t.get("user")),password:String(t.get("password"))};n(E(a)),i(!0),setTimeout((function(){b(!0)}),1e3),setTimeout((function(){i(!1)}),2e3)},noValidate:!0,sx:{mt:1},children:[Object(ge.jsx)(mt.a,{margin:"normal",required:!0,fullWidth:!0,id:"user",label:g.login.user,name:"user",autoComplete:"user",autoFocus:!0}),Object(ge.jsx)(mt.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:g.login.password,type:"password",id:"password",autoComplete:"current-password"}),Object(ge.jsx)(en.a,{control:Object(ge.jsx)(tn.a,{value:"remember",color:"primary"}),label:g.login.remember}),Object(ge.jsx)(gt.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:g.login.signin}),Object(ge.jsxs)(Ae.a,{container:!0,children:[Object(ge.jsx)(Ae.a,{item:!0,xs:!0,children:Object(ge.jsx)(nn.a,{href:"#",variant:"body2",children:g.login.forgot})}),Object(ge.jsx)(Ae.a,{item:!0,children:Object(ge.jsx)(nn.a,{href:"#",variant:"body2",onClick:function(e){e.preventDefault(),t.push("/web/register")},children:g.login.create})})]})]})]})]})}),Object(ge.jsx)(At,{isDisplay:c}),Object(ge.jsx)(Rt,{isDisplay:j})]})},cn=function(){var e=Object(Kt.a)(),t=Object(o.f)(),n=u(),r=Object(a.useState)(!1),s=Object(we.a)(r,2),c=s[0],i=s[1],d=Object(a.useState)(!1),l=Object(we.a)(d,2),j=l[0],b=l[1];return Object(ge.jsxs)(de.a,{sx:{backgroundImage:"\"url('".concat(x,"login.jpg')\""),backgroundPosition:"bottom center",minHeight:"100vh",pt:12},children:[Object(ge.jsx)(Qt.a,{theme:e,children:Object(ge.jsxs)(wt.a,{component:"main",maxWidth:"xs",children:[Object(ge.jsx)(Zt.a,{}),Object(ge.jsxs)(de.a,{sx:{padding:4,display:"flex",flexDirection:"column",alignItems:"center",background:"rgba(255, 255, 255, .8)",borderRadius:"4px"},children:[Object(ge.jsx)(ze.a,{sx:{m:1,bgcolor:"primary.main"},children:Object(ge.jsx)(Oe.a,{})}),Object(ge.jsx)(be.a,{component:"h1",variant:"h5",children:g.register.title}),Object(ge.jsxs)(de.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),a={username:String(t.get("user")),email:String(t.get("email")),password1:String(t.get("password")),password2:String(t.get("password_confirm"))};n(F(a)),i(!0),setTimeout((function(){b(!0)}),1e3),setTimeout((function(){i(!1)}),2e3)},noValidate:!0,sx:{mt:1},children:[Object(ge.jsx)(mt.a,{margin:"normal",required:!0,fullWidth:!0,id:"user",label:g.register.user,name:"user",autoComplete:"user",autoFocus:!0}),Object(ge.jsx)(mt.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:g.register.email,name:"email",autoComplete:"email",autoFocus:!0}),Object(ge.jsx)(mt.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:g.register.password1,type:"password",id:"password",autoComplete:"current-password"}),Object(ge.jsx)(mt.a,{margin:"normal",required:!0,fullWidth:!0,name:"password_confirm",label:g.register.password2,type:"password",id:"password_confirm",autoComplete:"current-password"}),Object(ge.jsx)(gt.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:g.register.create}),Object(ge.jsx)(Ae.a,{container:!0,children:Object(ge.jsx)(Ae.a,{item:!0,children:Object(ge.jsx)(nn.a,{href:"#",variant:"body2",onClick:function(e){e.preventDefault(),t.push("/web/login")},children:g.register.already})})})]})]})]})}),Object(ge.jsx)(At,{isDisplay:c}),Object(ge.jsx)(Rt,{isDisplay:j})]})},on=function(){var e=Object(o.f)(),t=l(V).masters;return Object(ge.jsx)(wt.a,{maxWidth:"sm",sx:{pt:10,pb:20},children:Object(ge.jsx)(Ae.a,{container:!0,spacing:2,children:Object(ge.jsxs)(Ae.a,{item:!0,xs:12,children:[Object(ge.jsx)(kt.a,{dense:!0,children:t!==[]?t.map((function(e,t){return Object(ge.jsx)(jt,{master:e},t)})):null}),Object(ge.jsx)(gt.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,pt:1,pb:1,width:200},onClick:function(){e.push("/web/master/new")},startIcon:Object(ge.jsx)(Tt.a,{}),children:g.master.add})]})})})},dn=function(){var e=Object(o.h)(),t=l(V),n=Object(a.useContext)(un).user,r=n.userData?n.userData.pk:0,s=t.masters,c=e.params.masterID,i=s.find((function(e){return e.id===Number(c)})),d=i||{id:null,user:r,type:"",name:"",point:0};return Object(ge.jsx)(wt.a,{maxWidth:"sm",sx:{mt:10},children:Object(ge.jsx)(vt,{master:d})})},un=(n(359),Object(a.createContext)({})),ln=function(){var e=Object(o.f)(),t=u(),n=l(R),r="1"===b.a.get("isLogined");return Object(a.useEffect)((function(){r?(t(I()),t(z()),t(H()),e.push(f),t(S(0))):(e.push("/web/login"),t(S(3)))}),[r,t]),Object(ge.jsx)(ge.Fragment,{children:Object(ge.jsxs)(un.Provider,{value:{user:n},children:[Object(ge.jsx)(v,{}),Object(ge.jsx)(ve,{isLogined:r}),Object(ge.jsxs)(o.c,{children:[Object(ge.jsx)(o.a,{exact:!0,path:f,component:Bt}),Object(ge.jsx)(o.a,{path:"/web/login",component:sn}),Object(ge.jsx)(o.a,{path:"/web/register",component:cn}),Object(ge.jsx)(o.a,{path:"/web/account",component:$t}),Object(ge.jsx)(o.a,{path:"/web/masters",component:on}),Object(ge.jsx)(o.a,{path:"/web/master/:masterID",component:dn}),Object(ge.jsx)(o.a,{path:"/web/task",component:Ft})]}),Object(ge.jsx)(Pe,{})]})})},jn=Object(w.a)({reducer:{user:N,master:B,task:ie,navigator:y}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(ge.jsx)(r.a.StrictMode,{children:Object(ge.jsx)(d.a,{store:jn,children:Object(ge.jsx)(i.a,{children:Object(ge.jsx)(ln,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[360,1,2]]]);
//# sourceMappingURL=main.b7c24195.chunk.js.map