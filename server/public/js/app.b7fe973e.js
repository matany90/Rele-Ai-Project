(function(e){function t(t){for(var n,c,s=t[0],a=t[1],i=t[2],l=0,p=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,s=1;s<r.length;s++){var a=r[s];0!==o[a]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},u=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var f=a;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},"199c":function(e,t){},"23be":function(e,t,r){"use strict";var n=r("199c"),o=r.n(n);t["default"]=o.a},"3dfd":function(e,t,r){"use strict";var n=r("7016"),o=r("23be"),u=r("2877"),c=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("8c4f"),u=r("28dd"),c=r("3dfd"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.users,(function(t,n){return r("li",{key:n},[e._v(" "+e._s(t)+" ")])})),0),r("button",{on:{click:function(t){return e.addUser("shiri")}}},[e._v("Button")]),r("a",{attrs:{href:"/api/users"}},[e._v("test")])])},a=[],i=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),f=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={created:function(){this.fetchUsers()},computed:p({},Object(f["c"])(["users"])),methods:p({},Object(f["b"])(["addUser","fetchUsers"]))},b=d,v=r("2877"),h=Object(v["a"])(b,s,a,!1,null,null,null),O=h.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("Test2")])},j=[],g={},m=Object(v["a"])(g,y,j,!1,null,null,null),w=m.exports,_=[{path:"/",component:O},{path:"/editUser",component:w}],P=(r("d3b7"),r("96cf"),r("bc3a")),x=r.n(P);n["a"].use(f["a"]);var U=new f["a"].Store({state:{users:["Matan","Shiri"]},getters:{users:function(e){return e.users}},mutations:{addUser:function(e,t){e.users.push(t)},fetchUsers:function(e,t){e.users=t}},actions:{addUser:function(e,t){var r=e.commit;r("addUser",t)},fetchUsers:function(e){var t,r,n;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t=e.commit,o.next=3,regeneratorRuntime.awrap(x.a.get("/api/users"));case 3:r=o.sent,n=r.data,console.log(n),t("fetchUsers",n.users);case 7:case"end":return o.stop()}}))}}});n["a"].use(o["a"]),n["a"].use(u["a"]);var S=new o["a"]({routes:_});n["a"].config.productionTip=!1,new n["a"]({router:S,store:U,render:function(e){return e(c["default"])}}).$mount("#app")},7016:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("router-view")],1)},o=[];r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}))}});
//# sourceMappingURL=app.b7fe973e.js.map