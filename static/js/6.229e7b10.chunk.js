"use strict";(self.webpackChunkgoit_fs78_react_hw_05_movies=self.webpackChunkgoit_fs78_react_hw_05_movies||[]).push([[6],{6:function(n,t,e){e.r(t);var r=e(861),a=e(439),i=e(757),s=e.n(i),c=e(791),o=e(390),u=e(291),p=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1];return(0,c.useEffect)((function(){(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.QO)();case 2:t=n.sent,i(t);case 4:case"end":return n.stop()}}),n)})))()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{style:{marginBottom:"16px"},children:"Trending today"}),e.length>0&&(0,p.jsx)(u.s,{movies:e})]})}},291:function(n,t,e){e.d(t,{s:function(){return f}});var r,a,i,s=e(689),c=e(87),o=e(168),u=e(444),p=u.ZP.div(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));\n  gap: 16px;\n"]))),h=u.ZP.div(a||(a=(0,o.Z)(["\n  display: flex;\n  /* align-items: center; */\n  justify-content: center;\n  padding: 5px;\n  min-height: 468px;\n\n  border: 1px solid black;\n  border-radius: 4px;\n\n  transition: transform 0.3s;\n\n  img {\n    margin-bottom: 8px;\n\n    /* height: 100%; */\n    min-height: 288px;\n    width: 100%;\n    max-width: 342px;\n\n    aspect-ratio: 2/3;\n    object-fit: cover;\n\n    border-radius: 4px;\n  }\n\n  &:hover {\n    transform: scale(1.03);\n  }\n\n  > a {\n    text-decoration: none;\n  }\n"]))),m=u.ZP.h3(i||(i=(0,o.Z)(["\n  margin-bottom: 0;\n\n  max-width: 342px; // the same as img width\n  color: black;\n"]))),d=e(184),f=function(n){var t=n.movies,e=(0,s.TH)();return(0,d.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path,i=a?"https://image.tmdb.org/t/p/w342/".concat(a):"https://www.tgv.com.my/assets/images/404/movie-poster.jpg";return(0,d.jsx)(h,{children:(0,d.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,d.jsx)("img",{src:i,alt:r,loading:"lazy"}),(0,d.jsx)(m,{children:r})]})},t)}))})}},390:function(n,t,e){e.d(t,{M4:function(){return u},QO:function(){return c},gB:function(){return h}});var r=e(861),a=e(757),i=e.n(a),s=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODU0Y2RkODdhYTkwNTNjYTAwMjI5ZmVhNzNlNTkyNSIsInN1YiI6IjYxODZmYWFkZmU2MzE4MDA2NDgzZTdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vm-UaTyMPJ2HhXiSRvz-VpPqqqKEF-3PBdhfYlg5v3g")}});function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(t,e){var r,a,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"movie/".concat(t,"/").concat(e):"movie/".concat(t),n.next=3,s.get(r);case 3:return a=n.sent,c=a.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=6.229e7b10.chunk.js.map