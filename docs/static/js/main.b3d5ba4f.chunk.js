(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=(n(15),n(16),n(1)),l=n(9),o=n(7),s=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",placeholder:"Ingrese un nombre y precione enter",value:i,onChange:function(e){return o(e.target.value)}}))};s.prototype={setCategories:n.n(o).a.func.isRequired};var m=n(4),p=n.n(m),d=n(8),f=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"DzlKHsxviUPIWPXkqQGHGZJmR3RHTH2o",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat("DzlKHsxviUPIWPXkqQGHGZJmR3RHTH2o"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){e.id;var t=e.title,n=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:n,title:t}),r.a.createElement("p",null,t))},v=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){return c({data:e,loading:!1})}))}),[]),r}(t),c=n.data,i=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),i&&r.a.createElement("p",{className:"animate__animated animate__flash  animate-duration: 4s"},"Loading..."),r.a.createElement("div",{className:"card-grid "},c.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)(["Superman  "]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpert"),r.a.createElement("hr",null),r.a.createElement(s,{setCategories:c}),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(v,{key:e,category:e})}))))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b3d5ba4f.chunk.js.map