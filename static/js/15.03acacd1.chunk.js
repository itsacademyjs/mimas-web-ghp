(this["webpackJsonpmimas-web"]=this["webpackJsonpmimas-web"]||[]).push([[15],{256:function(e,t,i){"use strict";var n=i(12),a=(i(0),i(343)),l=i(257),c=i(6);t.a=Object(l.b)((function(e){var t=e.errorMessage,i=e.value||"";return Object(c.jsx)(a.a,Object(n.a)(Object(n.a)({},e),{},{onChange:function(t){e.setValue(t.currentTarget.value),e.onChange&&e.onChange(t)},value:i,error:Boolean(t),helperText:t}))}))},332:function(e,t,i){"use strict";i.r(t);var n,a,l,c,o,r,s=i(109),d=i(261),u=i(0),b=i(242),v=i(342),j=i(331),h=i(229),m=i(232),g=i(240),O=i(230),p=i(257),f=i(18),x=i(336),I=i(330),C=i(348),A=i(256),L=i(6),k=Object(O.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"flex-start",width:"100%",minHeight:"100vh",backgroundColor:e.palette.background.default},toolbar:{backgroundColor:e.palette.background.level2,width:"100%"},toolbarContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},link:{cursor:"pointer"},editor:{display:"flex",flexDirection:"column",padding:e.spacing(4)},title:{},imageURL:{marginTop:e.spacing(2)},description:{marginTop:e.spacing(2)},content:{marginTop:e.spacing(2)},contentTextArea:{resize:"vertical",minHeight:400,width:"100%"},actions:{width:"100%",display:"flex",justifyContent:"flex-end",flexDirection:"row",alignItems:"center"},action:{},actionIcon:{marginRight:e.spacing(1)},progress:{marginRight:e.spacing(1)}}})),w=Object(x.a)(n||(n=Object(d.a)(["\n    mutation CreateEmptyArticle {\n        createArticle {\n            id\n        }\n    }\n"]))),R=Object(x.a)(a||(a=Object(d.a)(["\n    query GetArticle($articleId: ID!) {\n        getArticleById(articleId: $articleId) {\n            id\n            title\n            imageURL\n            description\n            content\n            status\n        }\n    }\n"]))),$=Object(x.a)(l||(l=Object(d.a)(["\n    mutation UpdateArticle(\n        $articleId: ID!\n        $title: String\n        $description: String\n        $content: String\n        $imageURL: String\n    ) {\n        updateArticle(\n            articleId: $articleId\n            title: $title\n            description: $description\n            content: $content\n            imageURL: $imageURL\n        ) {\n            id\n        }\n    }\n"]))),N=Object(x.a)(c||(c=Object(d.a)(["\n    mutation PublishArticle($articleId: ID!) {\n        publishArticle(articleId: $articleId) {\n            status\n        }\n    }\n"]))),U=Object(x.a)(o||(o=Object(d.a)(["\n    mutation UnpublishArticle($articleId: ID!) {\n        unpublishArticle(articleId: $articleId) {\n            status\n        }\n    }\n"])));Object(x.a)(r||(r=Object(d.a)(["\n    mutation DeleteArticle($articleId: ID!) {\n        deleteArticle(articleId: $articleId)\n    }\n"])));t.default=function(){var e,t=k(),i=Object(f.i)(),n=Object(I.a)(R,{variables:{articleId:i.articleId}}),a=Object(s.a)(n,2),l=a[0],c=a[1],o=(c.loading,c.error,c.data),r=Object(C.a)(w),d=Object(s.a)(r,2),O=d[0],x=d[1],y=x.loading,T=(x.error,x.data),D=Object(C.a)($,{refetchQueries:[R]}),S=Object(s.a)(D,2),z=S[0],E=S[1],B=E.loading,W=(E.error,Object(C.a)(N,{refetchQueries:[R]})),P=Object(s.a)(W,2),Q=P[0],Z=P[1],q=(Z.loading,Z.error,Object(C.a)(U,{refetchQueries:[R]})),H=Object(s.a)(q,2),J=H[0],M=H[1],V=(M.loading,M.error,Object(f.g)()),_=Object(u.useState)(""),G=Object(s.a)(_,2),F=G[0],K=G[1],X=Object(u.useState)(""),Y=Object(s.a)(X,2),ee=Y[0],te=Y[1],ie=Object(u.useState)(""),ne=Object(s.a)(ie,2),ae=ne[0],le=ne[1],ce=Object(u.useState)(""),oe=Object(s.a)(ce,2),re=oe[0],se=oe[1],de=Object(u.useState)(!1),ue=Object(s.a)(de,2),be=ue[0],ve=ue[1],je=Object(u.useRef)(!1),he=Object(u.useMemo)((function(){return(null===o||void 0===o?void 0:o.getArticleById)||{}}),[null===o||void 0===o?void 0:o.getArticleById]),me=(null===he||void 0===he?void 0:he.title)!==F||(null===he||void 0===he?void 0:he.content)!==ee||(null===he||void 0===he?void 0:he.imageURL)!==ae||(null===he||void 0===he?void 0:he.description)!==re;Object(u.useEffect)((function(){var e;("new"!==i.id||je.current||y||O(),"new"!==i.id&&(null===he||void 0===he?void 0:he.id)!==i.id&&l({variables:{articleId:i.id}}),je.current&&!y)&&V.push("/articles/".concat(null===T||void 0===T||null===(e=T.createArticle)||void 0===e?void 0:e.id,"/edit"));je.current=y}),[O,y,null===he||void 0===he?void 0:he.id,l,V,null===T||void 0===T||null===(e=T.createArticle)||void 0===e?void 0:e.id,i.id]),Object(u.useEffect)((function(){o&&(K(null===he||void 0===he?void 0:he.title),le(null===he||void 0===he?void 0:he.imageURL),se(null===he||void 0===he?void 0:he.description),te(null===he||void 0===he?void 0:he.content))}),[null===he||void 0===he?void 0:he.title,null===he||void 0===he?void 0:he.imageURL,null===he||void 0===he?void 0:he.description,null===he||void 0===he?void 0:he.content,o]);var ge=Object(u.useCallback)((function(e){te(e.target.value)}),[]),Oe=Object(u.useCallback)((function(e){K(e.target.value)}),[]),pe=Object(u.useCallback)((function(e){le(e.target.value)}),[]),fe=Object(u.useCallback)((function(e){se(e.target.value)}),[]),xe=Object(u.useCallback)((function(){ve(!0)}),[]),Ie=Object(u.useCallback)((function(){ve(!1)}),[]),Ce=Object(u.useCallback)((function(){V.push("/articles")}),[V]),Ae=Object(u.useCallback)((function(){("public"===(null===he||void 0===he?void 0:he.status)?J:Q)({variables:{articleId:null===he||void 0===he?void 0:he.id}})}),[he,Q,J]),Le=Object(u.useCallback)((function(){z({variables:{articleId:null===he||void 0===he?void 0:he.id,title:F,imageURL:ae,description:re,content:ee}})}),[ee,null===he||void 0===he?void 0:he.id,re,F,ae,z]);return Object(L.jsxs)("div",{className:t.root,children:[Object(L.jsx)(b.a,{className:t.toolbar,children:Object(L.jsxs)("div",{className:t.toolbarContainer,children:[Object(L.jsx)(v.a,{separator:"\u203a",children:Object(L.jsx)(j.a,{color:"inherit",onClick:Ce,className:t.link,children:"Articles"})}),Object(L.jsxs)("div",{className:t.actions,children:[Object(L.jsxs)(h.a,{onClick:Ae,className:t.action,children:[Object(L.jsx)(m.a,{className:t.actionIcon,fontSize:"small",children:"publish"}),"public"===(null===he||void 0===he?void 0:he.status)?"Unpublish":"Publish"]}),Object(L.jsxs)(h.a,{onClick:Le,className:t.action,disabled:!me||!be||B,children:[B&&Object(L.jsx)(g.a,{size:"16px",color:"inherit",className:t.progress}),!B&&Object(L.jsx)(m.a,{className:t.actionIcon,children:"save"}),"Save"]})]})]})}),Object(L.jsx)("div",{className:t.editor,children:Object(L.jsxs)(p.a,{onValid:xe,onInvalid:Ie,children:[Object(L.jsx)(A.a,{name:"title",className:t.title,label:"Title",validations:{minLength:8,maxLength:256},validationErrors:{minLength:"The title should have 8-256 characters",maxLength:"The title should have 8-256 characters"},variant:"outlined",size:"medium",value:F,onChange:Oe,required:!0,fullWidth:!0}),Object(L.jsx)(A.a,{name:"description",className:t.description,label:"Description",validations:{maxLength:1024},validationErrors:{maxLength:"The description cannot be longer than 1024 characters"},variant:"outlined",size:"medium",value:re,onChange:fe,fullWidth:!0,multiline:!0,rows:5}),Object(L.jsx)(A.a,{name:"imageURL",className:t.imageURL,label:"Image URL",validations:{matchRegexp:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/},validationErrors:{matchRegexp:"The URL you have entered is not valid"},variant:"outlined",size:"medium",value:ae,onChange:pe,fullWidth:!0}),Object(L.jsx)(A.a,{name:"content",className:t.content,label:"Content",validations:{maxLength:20480},validationErrors:{maxLength:"The article content cannot be longer than 20480 characters"},variant:"outlined",size:"medium",value:ee,onChange:ge,fullWidth:!0,multiline:!0,inputProps:{className:t.contentTextArea}})]})})]})}}}]);
//# sourceMappingURL=15.03acacd1.chunk.js.map