(this["webpackJsonpmimas-web"]=this["webpackJsonpmimas-web"]||[]).push([[8],{258:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var a=n(109),i=n(0),r=n(259),o=n(18),c=function(){var e,t=Object(o.h)(),n=new URLSearchParams(t.search),i={},c=Object(r.a)(n.entries());try{for(c.s();!(e=c.n()).done;){var s=Object(a.a)(e.value,2),u=s[0],l=s[1];i[u]=l}}catch(d){c.e(d)}finally{c.f()}return i},s=function(){var e=c(),t=Object(o.g)(),n=Object(o.h)(),r=Object(i.useState)(parseInt(e.page,10)||0),s=Object(a.a)(r,2),u=s[0],l=s[1],d=Object(i.useState)(parseInt(e.limit,10)||20),b=Object(a.a)(d,2),f=b[0],m=b[1];console.log(n);var p=Object(i.useCallback)((function(e,a){var i=new URLSearchParams(n.search);i.append("page",e.toString()),i.append("limit",a.toString()),t.push("".concat(n.pathname,"?").concat(i.toString()))}),[t,n.pathname,n.search]);return Object(i.useEffect)((function(){void 0!==e.page&&void 0!==e.limit||p(u,f)}),[p,u,e.page,e.limit,f]),"startDate"in e&&(e.startDate=new Date(Number(e.startDate))),"endDate"in e&&(e.endDate=new Date(Number(e.endDate))),{generateURL:p,query:e,page:u,setPage:l,rowsPerPage:f,setRowsPerPage:m}},u=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1];return{hover:n,onMouseEnter:Object(i.useCallback)((function(){r(!0)}),[]),onMouseLeave:Object(i.useCallback)((function(){r(!1)}),[])}}},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(77);function i(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw o}}}}},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(28),i=a.d},276:function(e,t,n){"use strict";var a=n(1),i=n(4),r=n(0),o=(n(9),n(7)),c=n(147),s=n(8),u=r.forwardRef((function(e,t){var n=e.classes,s=e.className,u=e.raised,l=void 0!==u&&u,d=Object(i.a)(e,["classes","className","raised"]);return r.createElement(c.a,Object(a.a)({className:Object(o.a)(n.root,s),elevation:l?8:1,ref:t},d))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},277:function(e,t,n){"use strict";var a=n(1),i=n(4),r=n(0),o=(n(9),n(7)),c=n(8),s=r.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.component,u=void 0===s?"div":s,l=Object(i.a)(e,["classes","className","component"]);return r.createElement(u,Object(a.a)({className:Object(o.a)(n.root,c),ref:t},l))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},349:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),r=n(10),o=n(0),c=n(1),s=n(4),u=n(21),l=(n(9),n(7)),d=n(8),b=n(13),f=o.forwardRef((function(e,t){var n=e.classes,a=e.className,i=e.component,r=void 0===i?"div":i,u=e.disableGutters,d=void 0!==u&&u,f=e.fixed,m=void 0!==f&&f,p=e.maxWidth,g=void 0===p?"lg":p,h=Object(s.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(r,Object(c.a)({className:Object(l.a)(n.root,a,m&&n.fixed,d&&n.disableGutters,!1!==g&&n["maxWidth".concat(Object(b.a)(String(g)))]),ref:t},h))})),m=Object(d.a)((function(e){return{root:Object(u.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(u.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(u.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(u.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(u.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(u.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(f),p=n(276),g=n(277),h=n(93),j=n(229),O=n(240),v=n(99),x=n(230),k=n(28),y=n(18),w=n(46),S=n(260),W=n(49),N=n(258),R=n(6),C=Object(x.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 64px)",backgroundColor:e.palette.background.default},content:{padding:24},title:{textAlign:"center",marginTop:16,padding:0,fontWeight:500,fontSize:24},note:{fontSize:16,color:"#606060",marginTop:16,maxWidth:300,textAlign:"center"},logo:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:8},logoImage:{height:40,width:"auto",marginRight:8},logoText:{fontFamily:"IBM Plex Sans",fontSize:28,fontWeight:600,verticalAlign:"middle"},container:{display:"flex",justifyContent:"center",alignItems:"center"},login:{marginTop:24,borderRadius:e.shape.borderRadius,width:256,height:48},progress:{marginRight:e.spacing(1)}}}));t.default=function(){var e=C(),t=Object(k.c)(),n=Object(y.g)(),a=Object(N.c)(),c=Object(S.a)((function(e){return e.session})),s=c.loading,u=c.payload,l=Object(o.useCallback)((function(e){Object(W.c)();var n=1e3*(e.tokenObj.expires_in||3300),a=function(){var o=Object(r.a)(i.a.mark((function r(){var o;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.reloadAuthResponse();case 2:o=i.sent,n=1e3*(o.expires_in||o.expires_in||3300),t(Object(w.b)(e.tokenId)),setTimeout(a,n);case 6:case"end":return i.stop()}}),r)})));return function(){return o.apply(this,arguments)}}();t(Object(w.b)(e.tokenId)),setTimeout(a,n)}),[t]),d=Object(v.useGoogleLogin)({onSuccess:l,onFailure:function(e){Object(W.b)(),t(Object(w.f)("Failed to authorize","error"))},clientId:"825291541378-8dnb6ut50t3ovgstofgeaqo1firlm8rh.apps.googleusercontent.com",cookiePolicy:"single_host_origin",isSignedIn:!0}).signIn;Object(o.useEffect)((function(){u&&n.push(a.destination?decodeURIComponent(a.destination):"/courses")}),[n,a.destination,u]);var b=Object(o.useCallback)((function(){Object(W.a)(),d()}),[d]);return Object(R.jsx)(m,{className:e.root,children:Object(R.jsx)(p.a,{children:Object(R.jsx)(g.a,{children:Object(R.jsxs)("div",{className:e.content,children:[Object(R.jsx)(h.a,{className:e.title,children:"Welcome to AcademyJS"}),Object(R.jsx)("div",{className:e.container,children:Object(R.jsxs)(j.a,{disabled:s,className:e.login,variant:"contained",color:"primary",onClick:b,children:[s&&Object(R.jsx)(O.a,{size:"16px",color:"inherit",className:e.progress}),"Continue with Google"]})})]})})})})}}}]);
//# sourceMappingURL=8.c7e2bcfc.chunk.js.map