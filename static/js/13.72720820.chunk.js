(this["webpackJsonpmimas-web"]=this["webpackJsonpmimas-web"]||[]).push([[13],{313:function(t,e,n){"use strict";var i=n(4),a=n(1),o=n(0),r=(n(9),n(7)),c=n(8),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var d=o.forwardRef((function(t,e){var n=t.alignContent,c=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,x=t.classes,d=t.className,g=t.component,f=void 0===g?"div":g,m=t.container,u=void 0!==m&&m,p=t.direction,v=void 0===p?"row":p,b=t.item,h=void 0!==b&&b,j=t.justify,w=t.justifyContent,y=void 0===w?"flex-start":w,S=t.lg,C=void 0!==S&&S,k=t.md,O=void 0!==k&&k,W=t.sm,N=void 0!==W&&W,z=t.spacing,I=void 0===z?0:z,M=t.wrap,G=void 0===M?"wrap":M,T=t.xl,E=void 0!==T&&T,A=t.xs,B=void 0!==A&&A,D=t.zeroMinWidth,J=void 0!==D&&D,L=Object(i.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(r.a)(x.root,d,u&&[x.container,0!==I&&x["spacing-xs-".concat(String(I))]],h&&x.item,J&&x.zeroMinWidth,"row"!==v&&x["direction-xs-".concat(String(v))],"wrap"!==G&&x["wrap-xs-".concat(String(G))],"stretch"!==l&&x["align-items-xs-".concat(String(l))],"stretch"!==c&&x["align-content-xs-".concat(String(c))],"flex-start"!==(j||y)&&x["justify-content-xs-".concat(String(j||y))],!1!==B&&x["grid-xs-".concat(String(B))],!1!==N&&x["grid-sm-".concat(String(N))],!1!==O&&x["grid-md-".concat(String(O))],!1!==C&&x["grid-lg-".concat(String(C))],!1!==E&&x["grid-xl-".concat(String(E))]);return o.createElement(f,Object(a.a)({className:R,ref:e},L))})),g=Object(c.a)((function(t){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(i){var a=t.spacing(i);0!==a&&(n["spacing-".concat(e,"-").concat(i)]={margin:"-".concat(x(a,2)),width:"calc(100% + ".concat(x(a),")"),"& > $item":{padding:x(a,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var i={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var a="".concat(Math.round(t/12*1e8)/1e6,"%");i[e]={flexBasis:a,flexGrow:0,maxWidth:a}}else i[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(t,i):t[e.breakpoints.up(n)]=i}(e,t,n),e}),{}))}),{name:"MuiGrid"})(d);e.a=g},333:function(t,e,n){"use strict";n.r(e);n(0);var i=n(313),a=n(93),o=n(8),r=n(56),c=n(6);e.default=Object(o.a)((function(){return{root:{},image:{marginTop:120,width:400,height:"auto",display:"block",marginLeft:"auto",marginRight:"auto"},title:{marginTop:16,textAlign:"center"},description:{marginTop:16,textAlign:"center"},link:{marginTop:16,textAlign:"center",display:"block"}}}))((function(t){var e=t.classes;return Object(c.jsx)(i.a,{container:!0,justify:"center",className:e.root,children:Object(c.jsxs)(i.a,{item:!0,lg:6,children:[Object(c.jsx)("img",{className:e.image,src:"".concat("","/assets/images/404.png"),alt:"Error 404"}),Object(c.jsx)(a.a,{variant:"h4",color:"textSecondary",className:e.title,children:"Looks like you are lost"}),Object(c.jsx)(a.a,{variant:"subtitle1",color:"textSecondary",className:e.description,children:"The page you are looking for may have been removed or moved to another location."}),Object(c.jsx)(r.b,{className:e.link,to:"/",children:"Go back to home"})]})})}))}}]);
//# sourceMappingURL=13.72720820.chunk.js.map