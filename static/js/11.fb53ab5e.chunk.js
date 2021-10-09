(this["webpackJsonpmimas-web"]=this["webpackJsonpmimas-web"]||[]).push([[11],{258:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var n=a(109),c=a(0),i=a(259),s=a(18),r=function(){var e,t=Object(s.h)(),a=new URLSearchParams(t.search),c={},r=Object(i.a)(a.entries());try{for(r.s();!(e=r.n()).done;){var o=Object(n.a)(e.value,2),l=o[0],u=o[1];c[l]=u}}catch(d){r.e(d)}finally{r.f()}return c},o=function(){var e=r(),t=Object(s.g)(),a=Object(s.h)(),i=Object(c.useState)(parseInt(e.page,10)||0),o=Object(n.a)(i,2),l=o[0],u=o[1],d=Object(c.useState)(parseInt(e.limit,10)||20),g=Object(n.a)(d,2),j=g[0],b=g[1];console.log(a);var f=Object(c.useCallback)((function(e,n){var c=new URLSearchParams(a.search);c.append("page",e.toString()),c.append("limit",n.toString()),t.push("".concat(a.pathname,"?").concat(c.toString()))}),[t,a.pathname,a.search]);return Object(c.useEffect)((function(){void 0!==e.page&&void 0!==e.limit||f(l,j)}),[f,l,e.page,e.limit,j]),"startDate"in e&&(e.startDate=new Date(Number(e.startDate))),"endDate"in e&&(e.endDate=new Date(Number(e.endDate))),{generateURL:f,query:e,page:l,setPage:u,rowsPerPage:j,setRowsPerPage:b}},l=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1];return{hover:a,onMouseEnter:Object(c.useCallback)((function(){i(!0)}),[]),onMouseLeave:Object(c.useCallback)((function(){i(!1)}),[])}}},260:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(28),c=n.d},264:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(93),c=a(229),i=a(230),s=a(6),r=Object(i.a)((function(e){return{container:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},image:{width:"auto",height:400},message:{fontSize:20,fontWeight:400,color:e.palette.text.secondary},action:{marginTop:24}}}));function o(e){var t=r(),a=e.message,i=e.actionText,o=e.actionHandler,l=e.action,u=e.image;return Object(s.jsxs)("div",{className:t.container,children:[Object(s.jsx)("img",{className:t.image,src:u,alt:""}),Object(s.jsx)(n.a,{className:t.message,children:a}),l&&Object(s.jsx)(c.a,{className:t.action,variant:"contained",size:"large",color:"secondary",onClick:o,children:i})]})}},281:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(265);function c(e,t){return Object(n.a)(e,t,!1)}},350:function(e,t,a){"use strict";a.r(t);var n,c=a(261),i=a(0),s=a(242),r=a(342),o=a(331),l=a(229),u=a(232),d=a(240),g=a(337),j=a(230),b=a(18),f=a(336),h=a(281),p=a(258),m=a(260),O=a(276),x=a(277),v=a(93),w=a(293),C=a(6),N=Object(j.a)((function(e){return{root:{maxWidth:700},content:{},title:{fontWeight:"bold",fontSize:20},description:{marginTop:e.spacing(2),fontWeight:400},actions:{display:"flex",flexDirection:"row",justifyContent:"flex-end",width:"100%"},action:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},actionIcon:{marginRight:e.spacing(1)}}})),y=function(e){var t=N(),a=e.title,n=e.description,c=e.onEdit;return Object(C.jsxs)(O.a,{className:t.root,children:[Object(C.jsxs)(x.a,{className:t.content,children:[Object(C.jsx)(v.a,{className:t.title,children:a||"Please specify a title"}),Object(C.jsx)(v.a,{className:t.description,children:n||"Please specify a description"})]}),Object(C.jsx)(w.a,{className:t.actions,children:Object(C.jsxs)(l.a,{className:t.action,onClick:c,children:[Object(C.jsx)(u.a,{className:t.actionIcon,fontSize:"small",children:"edit"}),"Edit"]})})]})},k=a(264),P=Object(j.a)((function(e){return{root:{width:"100%",minHeight:"100vh",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",alignItems:"center"},toolbar:{backgroundColor:e.palette.background.level2,width:"100%"},toolbarContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},link:{cursor:"pointer"},title:{color:"white",fontWeight:"bold"},actions:{display:"flex",flexDirection:"row",justifyContent:"flex-start"},actionIcon:{marginRight:e.spacing(1)},courses:{width:"100%",padding:e.spacing(4)},progress:{width:40,height:40},pagination:{marginTop:e.spacing(2)},noRecords:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 128px)"}}})),D=Object(f.a)(n||(n=Object(c.a)(["\n    query GetCourses($page: Int!, $limit: Int!) {\n        getCourses(page: $page, limit: $limit) {\n            totalPages\n            records {\n                id\n                title\n                description\n            }\n        }\n    }\n"])));t.default=function(){var e=P(),t=Object(b.g)(),a=Object(p.b)(),n=a.generateURL,c=a.page,j=a.setPage,f=a.rowsPerPage,O=Object(h.a)(D,{variables:{page:c,limit:f}}),x=O.loading,v=O.error,w=O.data,N=O.refetch,I=Object(m.a)((function(e){return e.session.payload})).firstName,S=Object(i.useCallback)((function(e,t){j(t-1),n(t-1,f),window.scrollTo(0,0),N({page:t-1,limit:f})}),[n,N,f,j]),R=Object(i.useCallback)((function(e){return function(){t.push("/courses/".concat(e,"/details"))}}),[t]),L=Object(i.useCallback)((function(){t.push("/courses/new")}),[t]),T=Object(i.useCallback)((function(){t.push("/courses")}),[t]);if(v)throw v;var E=(null===w||void 0===w?void 0:w.getCourses)||{},W=E.records,z=void 0===W?[]:W,U=E.totalPages,$=void 0===U?0:U;return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(s.a,{className:e.toolbar,children:Object(C.jsxs)("div",{className:e.toolbarContainer,children:[Object(C.jsx)(r.a,{separator:"\u203a",children:Object(C.jsx)(o.a,{color:"inherit",onClick:T,className:e.link,children:"Courses"})}),Object(C.jsx)("div",{className:e.actions,children:Object(C.jsxs)(l.a,{onClick:L,children:[Object(C.jsx)(u.a,{className:e.actionIcon,children:"add_circle"})," ","New Course"]})})]})}),x&&Object(C.jsx)(d.a,{className:e.progress}),!x&&z.length>0&&z.map((function(t){return Object(C.jsx)("div",{className:e.courses,children:Object(C.jsx)(y,{title:t.title,description:t.description,onEdit:R(t.id)})})})),!x&&z.length>0&&$>1&&Object(C.jsx)(g.a,{className:e.pagination,color:"secondary",count:$,page:c+1,onChange:S}),!x&&0===z.length&&Object(C.jsx)("div",{className:e.noRecords,children:Object(C.jsx)(k.a,{message:"Are you ready to create your first course, ".concat(I,"?"),actionText:"Create New Course",actionHandler:L,image:"".concat("","/assets/images/empty-articles.svg"),action:!0})})]})}}}]);
//# sourceMappingURL=11.fb53ab5e.chunk.js.map