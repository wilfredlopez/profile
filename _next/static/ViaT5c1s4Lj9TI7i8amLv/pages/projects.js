(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{SpL8:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("N4QY"),i=n("8Kt/"),c=n.n(i),s=n("ycUj"),p=n("ZMKu"),l={initial:{y:60,opacity:0},animate:{y:0,x:0,opacity:1,transition:{duration:.6,ease:[.6,-.05,.01,.99]}}},u=n("ODXe"),d=n("R/WZ"),f=n("KQm4"),m=n("wx14"),b=(n("17x9"),n("bv9d"));var g=function(e){var t=function(t){var n=e(t);return t.css?Object(m.a)(Object(m.a)({},Object(b.a)(n,e(Object(m.a)({theme:t.theme},t.css)))),function(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}(t.css,[e.filterProps])):n};return t.propTypes={},t.filterProps=["css"].concat(Object(f.a)(e.filterProps)),t};var h=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=function(e){return t.reduce((function(t,n){var r=n(e);return r?Object(b.a)(t,r):t}),{})};return r.propTypes={},r.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),r},y=n("rePB"),v=n("LybE");function j(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var O=function(e){var t=e.prop,n=e.cssProperty,r=void 0===n?e.prop:n,o=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var n=e[t],i=j(e.theme,o)||{};return Object(v.a)(e,n,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=j(i,e)||e,a&&(t=a(t))),!1===r?t:Object(y.a)({},r,t)}))};return i.propTypes={},i.filterProps=[t],i};function E(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var w=h(O({prop:"border",themeKey:"borders",transform:E}),O({prop:"borderTop",themeKey:"borders",transform:E}),O({prop:"borderRight",themeKey:"borders",transform:E}),O({prop:"borderBottom",themeKey:"borders",transform:E}),O({prop:"borderLeft",themeKey:"borders",transform:E}),O({prop:"borderColor",themeKey:"palette"}),O({prop:"borderRadius",themeKey:"shape"})),x=h(O({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),O({prop:"display"}),O({prop:"overflow"}),O({prop:"textOverflow"}),O({prop:"visibility"}),O({prop:"whiteSpace"})),C=h(O({prop:"flexBasis"}),O({prop:"flexDirection"}),O({prop:"flexWrap"}),O({prop:"justifyContent"}),O({prop:"alignItems"}),O({prop:"alignContent"}),O({prop:"order"}),O({prop:"flex"}),O({prop:"flexGrow"}),O({prop:"flexShrink"}),O({prop:"alignSelf"}),O({prop:"justifyItems"}),O({prop:"justifySelf"})),k=h(O({prop:"gridGap"}),O({prop:"gridColumnGap"}),O({prop:"gridRowGap"}),O({prop:"gridColumn"}),O({prop:"gridRow"}),O({prop:"gridAutoFlow"}),O({prop:"gridAutoColumns"}),O({prop:"gridAutoRows"}),O({prop:"gridTemplateColumns"}),O({prop:"gridTemplateRows"}),O({prop:"gridTemplateAreas"}),O({prop:"gridArea"})),T=h(O({prop:"position"}),O({prop:"zIndex",themeKey:"zIndex"}),O({prop:"top"}),O({prop:"right"}),O({prop:"bottom"}),O({prop:"left"})),N=h(O({prop:"color",themeKey:"palette"}),O({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),R=O({prop:"boxShadow",themeKey:"shadows"});function P(e){return e<=1?"".concat(100*e,"%"):e}var L=O({prop:"width",transform:P}),S=O({prop:"maxWidth",transform:P}),I=O({prop:"minWidth",transform:P}),z=O({prop:"height",transform:P}),K=O({prop:"maxHeight",transform:P}),M=O({prop:"minHeight",transform:P}),A=(O({prop:"size",cssProperty:"width",transform:P}),O({prop:"size",cssProperty:"height",transform:P}),h(L,S,I,z,K,M,O({prop:"boxSizing"}))),D=n("+Hmc"),H=h(O({prop:"fontFamily",themeKey:"typography"}),O({prop:"fontSize",themeKey:"typography"}),O({prop:"fontStyle",themeKey:"typography"}),O({prop:"fontWeight",themeKey:"typography"}),O({prop:"letterSpacing"}),O({prop:"lineHeight"}),O({prop:"textAlign"})),W=n("Ff2n"),B=n("iuhU"),F=n("Ef3k"),_=n.n(F),G=n("RD7I");function X(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}var U=n("cNwE"),q=function(e){var t=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.name,a=Object(W.a)(n,["name"]);var i,c=r,s="function"===typeof t?function(e){return{root:function(n){return t(Object(m.a)({theme:e},n))}}}:{root:t},p=Object(G.a)(s,Object(m.a)({Component:e,name:r||e.displayName,classNamePrefix:c},a));t.filterProps&&(i=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var l=o.a.forwardRef((function(t,n){var r=t.children,a=t.className,c=t.clone,s=t.component,l=Object(W.a)(t,["children","className","clone","component"]),u=p(t),d=Object(B.a)(u.root,a),f=l;if(i&&(f=X(f,i)),c)return o.a.cloneElement(r,Object(m.a)({className:Object(B.a)(r.props.className,d)},f));if("function"===typeof r)return r(Object(m.a)({className:d},f));var b=s||e;return(o.a.createElement(b,Object(m.a)({ref:n,className:d},f),r))}));return _()(l,e),l}}(e);return function(e,n){return t(e,Object(m.a)({defaultTheme:U.a},n))}},J=g(h(w,x,C,k,T,N,R,A,D.b,H)),Y=q("div")(J,{name:"MuiBox"}),Q=n("kKAo"),Z=n("Ji2X"),V=n("ofer"),$=n("tRbT"),ee=n("H2TA"),te=n("wpWl"),ne=n("i8i4"),re=n("gk1O"),oe=n("bfFb"),ae=n("Ovef");function ie(e){return e.substring(2).toLowerCase()}var ce=function(e){var t=e.children,n=e.disableReactTree,o=void 0!==n&&n,a=e.mouseEvent,i=void 0===a?"onClick":a,c=e.onClickAway,s=e.touchEvent,p=void 0===s?"onTouchEnd":s,l=r.useRef(!1),u=r.useRef(null),d=r.useRef(!1),f=r.useRef(!1);r.useEffect((function(){return d.current=!0,function(){d.current=!1}}),[]);var m=r.useCallback((function(e){u.current=ne.findDOMNode(e)}),[]),b=Object(oe.a)(t.ref,m),g=Object(ae.a)((function(e){var t=f.current;if(f.current=!1,d.current&&u.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(l.current)l.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(u.current)>-1;else n=!Object(re.a)(u.current).documentElement.contains(e.target)||u.current.contains(e.target);n||!o&&t||c(e)}})),h=function(e){return function(n){f.current=!0;var r=t.props[e];r&&r(n)}},y={ref:b};return!1!==p&&(y[p]=h(p)),r.useEffect((function(){if(!1!==p){var e=ie(p),t=Object(re.a)(u.current),n=function(){l.current=!0};return t.addEventListener(e,g),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,g),t.removeEventListener("touchmove",n)}}}),[g,p]),!1!==i&&(y[i]=h(i)),r.useEffect((function(){if(!1!==i){var e=ie(i),t=Object(re.a)(u.current);return t.addEventListener(e,g),function(){t.removeEventListener(e,g)}}}),[g,i]),r.createElement(r.Fragment,null,r.cloneElement(t,y))},se=n("NqtD"),pe=n("x6Ns"),le=n("dRu9"),ue=n("tr08"),de=n("4Hym");function fe(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var me={entering:{opacity:1,transform:fe(1)},entered:{opacity:1,transform:"none"}},be=r.forwardRef((function(e,t){var n=e.children,o=e.disableStrictModeCompat,a=void 0!==o&&o,i=e.in,c=e.onEnter,s=e.onEntered,p=e.onEntering,l=e.onExit,d=e.onExited,f=e.onExiting,b=e.style,g=e.timeout,h=void 0===g?"auto":g,y=e.TransitionComponent,v=void 0===y?le.a:y,j=Object(W.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),O=r.useRef(),E=r.useRef(),w=Object(ue.a)(),x=w.unstable_strictMode&&!a,C=r.useRef(null),k=Object(oe.a)(n.ref,t),T=Object(oe.a)(x?C:void 0,k),N=function(e){return function(t,n){if(e){var r=x?[C.current,t]:[t,n],o=Object(u.a)(r,2),a=o[0],i=o[1];void 0===i?e(a):e(a,i)}}},R=N(p),P=N((function(e,t){Object(de.b)(e);var n,r=Object(de.a)({style:b,timeout:h},{mode:"enter"}),o=r.duration,a=r.delay;"auto"===h?(n=w.transitions.getAutoHeightDuration(e.clientHeight),E.current=n):n=o,e.style.transition=[w.transitions.create("opacity",{duration:n,delay:a}),w.transitions.create("transform",{duration:.666*n,delay:a})].join(","),c&&c(e,t)})),L=N(s),S=N(f),I=N((function(e){var t,n=Object(de.a)({style:b,timeout:h},{mode:"exit"}),r=n.duration,o=n.delay;"auto"===h?(t=w.transitions.getAutoHeightDuration(e.clientHeight),E.current=t):t=r,e.style.transition=[w.transitions.create("opacity",{duration:t,delay:o}),w.transitions.create("transform",{duration:.666*t,delay:o||.333*t})].join(","),e.style.opacity="0",e.style.transform=fe(.75),l&&l(e)})),z=N(d);return r.useEffect((function(){return function(){clearTimeout(O.current)}}),[]),r.createElement(v,Object(m.a)({appear:!0,in:i,nodeRef:x?C:void 0,onEnter:P,onEntered:L,onEntering:R,onExit:I,onExited:z,onExiting:S,addEndListener:function(e,t){var n=x?e:t;"auto"===h&&(O.current=setTimeout(n,E.current||0))},timeout:"auto"===h?null:h},j),(function(e,t){return r.cloneElement(n,Object(m.a)({style:Object(m.a)(Object(m.a)(Object(m.a)({opacity:0,transform:fe(.75),visibility:"exited"!==e||i?void 0:"hidden"},me[e]),b),n.props.style),ref:T},t))}))}));be.muiSupportAuto=!0;var ge=be,he=n("ye/S"),ye=r.forwardRef((function(e,t){var n=e.action,o=e.classes,a=e.className,i=e.message,c=e.role,s=void 0===c?"alert":c,p=Object(W.a)(e,["action","classes","className","message","role"]);return(r.createElement(Q.a,Object(m.a)({role:s,square:!0,elevation:6,className:Object(B.a)(o.root,a),ref:t},p),r.createElement("div",{className:o.message},i),n?r.createElement("div",{className:o.action},n):null))})),ve=Object(ee.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(he.b)(e.palette.background.default,t);return{root:Object(m.a)(Object(m.a)({},e.typography.body2),{},Object(y.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(ye),je=r.forwardRef((function(e,t){var n=e.action,o=e.anchorOrigin,a=(o=void 0===o?{vertical:"bottom",horizontal:"center"}:o).vertical,i=o.horizontal,c=e.autoHideDuration,s=void 0===c?null:c,p=e.children,l=e.classes,u=e.className,d=e.ClickAwayListenerProps,f=e.ContentProps,b=e.disableWindowBlurListener,g=void 0!==b&&b,h=e.message,y=e.onClose,v=e.onEnter,j=e.onEntered,O=e.onEntering,E=e.onExit,w=e.onExited,x=e.onExiting,C=e.onMouseEnter,k=e.onMouseLeave,T=e.open,N=e.resumeHideDuration,R=e.TransitionComponent,P=void 0===R?ge:R,L=e.transitionDuration,S=void 0===L?{enter:te.b.enteringScreen,exit:te.b.leavingScreen}:L,I=e.TransitionProps,z=Object(W.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),K=r.useRef(),M=r.useState(!0),A=M[0],D=M[1],H=Object(ae.a)((function(){y&&y.apply(void 0,arguments)})),F=Object(ae.a)((function(e){y&&null!=e&&(clearTimeout(K.current),K.current=setTimeout((function(){H(null,"timeout")}),e))}));r.useEffect((function(){return T&&F(s),function(){clearTimeout(K.current)}}),[T,s,F]);var _=function(){clearTimeout(K.current)},G=r.useCallback((function(){null!=s&&F(null!=N?N:.5*s)}),[s,N,F]);return r.useEffect((function(){if(!g&&T)return window.addEventListener("focus",G),window.addEventListener("blur",_),function(){window.removeEventListener("focus",G),window.removeEventListener("blur",_)}}),[g,G,T]),!T&&A?null:r.createElement(ce,Object(m.a)({onClickAway:function(e){y&&y(e,"clickaway")}},d),r.createElement("div",Object(m.a)({className:Object(B.a)(l.root,l["anchorOrigin".concat(Object(se.a)(a)).concat(Object(se.a)(i))],u),onMouseEnter:function(e){C&&C(e),_()},onMouseLeave:function(e){k&&k(e),G()},ref:t},z),r.createElement(P,Object(m.a)({appear:!0,in:T,onEnter:Object(pe.a)((function(){D(!1)}),v),onEntered:j,onEntering:O,onExit:E,onExited:Object(pe.a)((function(){D(!0)}),w),onExiting:x,timeout:S,direction:"top"===a?"down":"up"},I),p||r.createElement(ve,Object(m.a)({message:h,action:n},f)))))})),Oe=Object(ee.a)((function(e){var t={top:8},n={bottom:8},r={justifyContent:"flex-end"},o={justifyContent:"flex-start"},a={top:24},i={bottom:24},c={right:24},s={left:24},p={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(m.a)(Object(m.a)({},t),{},Object(y.a)({},e.breakpoints.up("sm"),Object(m.a)(Object(m.a)({},a),p))),anchorOriginBottomCenter:Object(m.a)(Object(m.a)({},n),{},Object(y.a)({},e.breakpoints.up("sm"),Object(m.a)(Object(m.a)({},i),p))),anchorOriginTopRight:Object(m.a)(Object(m.a)(Object(m.a)({},t),r),{},Object(y.a)({},e.breakpoints.up("sm"),Object(m.a)(Object(m.a)({left:"auto"},a),c))),anchorOriginBottomRight:Object(m.a)(Object(m.a)(Object(m.a)({},n),r),{},Object(y.a)({},e.breakpoints.up("sm"),Object(m.a)(Object(m.a)({left:"auto"},i),c))),anchorOriginTopLeft:Object(m.a)(Object(m.a)(Object(m.a)({},t),o),{},Object(y.a)({},e.breakpoints.up("sm"),Object(m.a)(Object(m.a)({right:"auto"},a),s))),anchorOriginBottomLeft:Object(m.a)(Object(m.a)(Object(m.a)({},n),o),{},Object(y.a)({},e.breakpoints.up("sm"),Object(m.a)(Object(m.a)({right:"auto"},i),s)))}}),{flip:!1,name:"MuiSnackbar"})(je),Ee=r.forwardRef((function(e,t){var n=e.classes,o=e.className,a=e.raised,i=void 0!==a&&a,c=Object(W.a)(e,["classes","className","raised"]);return(r.createElement(Q.a,Object(m.a)({className:Object(B.a)(n.root,o),elevation:i?8:1,ref:t},c)))})),we=Object(ee.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(Ee),xe=r.forwardRef((function(e,t){var n=e.action,o=e.avatar,a=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,p=e.disableTypography,l=void 0!==p&&p,u=e.subheader,d=e.subheaderTypographyProps,f=e.title,b=e.titleTypographyProps,g=Object(W.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),h=f;null==h||h.type===V.a||l||(h=r.createElement(V.a,Object(m.a)({variant:o?"body2":"h5",className:a.title,component:"span",display:"block"},b),h));var y=u;return null==y||y.type===V.a||l||(y=r.createElement(V.a,Object(m.a)({variant:o?"body2":"body1",className:a.subheader,color:"textSecondary",component:"span",display:"block"},d),y)),r.createElement(s,Object(m.a)({className:Object(B.a)(a.root,i),ref:t},g),o&&r.createElement("div",{className:a.avatar},o),r.createElement("div",{className:a.content},h,y),n&&r.createElement("div",{className:a.action},n))})),Ce=Object(ee.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(xe),ke=r.forwardRef((function(e,t){var n=e.classes,o=e.className,a=e.component,i=void 0===a?"div":a,c=Object(W.a)(e,["classes","className","component"]);return(r.createElement(i,Object(m.a)({className:Object(B.a)(n.root,o),ref:t},c)))})),Te=Object(ee.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(ke),Ne=[{name:"React-utils",url:"https://www.npmjs.com/package/@wilfredlopez/react-utils",description:"Javascript Utilify Functions, Classes and Typescript types.",command:"npm i @wilfredlopez/react-utils"},{name:"wl-components/react",url:"https://www.npmjs.com/package/@wilfredlopez/react",description:"React specific building blocks on top of @wilfredlopez/wl-componets UI Library.",command:"npm install @wilfredlopez/react"},{name:"wl-components",url:"https://www.npmjs.com/package/@wilfredlopez/wl-components",description:"Web Components UI Library",command:"npm i @wilfredlopez/wl-components"},{name:"youtube-api-search-typed",url:"https://www.npmjs.com/package/youtube-api-search-typed",description:"Makes Easy the search for videos on Youtube using their API.",command:"npm i youtube-api-search-typed"}],Re=n("Dvq3"),Pe=n("/p1/"),Le=n("tKSW"),Se=function(e,t,n){var r=n<0?e.length+n:n;if(r>=0&&r<e.length){var o=e.splice(t,1)[0];e.splice(r,0,o)}};var Ie=o.a.createElement,ze={type:"spring",stiffness:700,damping:30},Ke=Object(d.a)((function(e){return{wrapper:{color:"#000",background:"#fff"},cardRoot:{color:"#000",background:"#fff",justifyContent:"center",height:200,alignItems:"flex-start",display:"flex",flexDirection:"column"}}})),Me={zIndex:1},Ae={zIndex:0,transition:{delay:.3}};function De(e){var t=e.data,n=e.i,a=e.moveItem,i=e.setPosition,c=e.totalItems,s=Ke(),l=o.a.useState(!1),d=Object(u.a)(l,2),f=d[0],m=d[1],b=Object(r.useRef)(null),g=o.a.useState(!1),h=Object(u.a)(g,2),y=h[0],v=h[1];return o.a.useEffect((function(){i(n,{height:b.current.offsetHeight,top:b.current.offsetTop})})),Ie(o.a.Fragment,null,Ie(Oe,{open:y,autoHideDuration:1e3,onClose:function(){v(!1)}},Ie(Y,{position:"absolute",bottom:"0",left:"25%",width:400},Ie(Re.a,{color:"success"},Ie(Y,{display:"block",width:"100%"},Ie("span",null,"Copied to clipboard"))))),Ie(p.c.div,{drag:!0,ref:b,layout:!0,animate:f?Me:Ae,whileHover:{scale:1.03},whileTap:{scale:1.12},transition:ze,dragConstraints:{top:10,bottom:10,left:10,right:10},dragElastic:1,onDragStart:function(){return m(!0)},onDragEnd:function(){return m(!1)},onDrag:function(e,t){var r=t.point;return a(n,r.y)}},Ie(we,{className:s.cardRoot,style:{background:n===c-1?"rgba(247,247, 247,.83)":"white"}},Ie(Ce,{title:t.name,subheader:t.command,action:Ie(Y,{width:"100%",justifyContent:"flex-end"},Ie(Re.a,{size:"small",onClick:function(){navigator.clipboard.writeText(t.command||""),v(!0)},style:{position:"absolute",right:12},variant:"outlined",color:"success"},"Copy"))}),Ie(Te,null,Ie(V.a,{variant:"body2"},t.description)))))}var He=function(e){var t=Ke(),n=Object(r.useRef)([]).current,a=o.a.useState(Ne),i=Object(u.a)(a,2),c=i[0],s=i[1],p=function(e,t){return n[e]=t},l=function(e,t){var r,o,a,i=function(e,t,n){var r=e,o=n[e],a=o.top,i=a+o.height;if(t>0){var c=n[e+1];if(void 0===c)return e;t>Object(Le.e)(i,c.top+c.height/2)+5&&(r=e+1)}else if(t<0){var s=n[e-1];if(void 0===s)return e;var p=s.top+s.height;t<-(Object(Le.e)(a,p-s.height/2)+5)&&(r=e-1)}return Object(Le.d)(0,n.length,r)}(e,t,n);i!==e&&s((r=c,o=e,a=i,r=Object(f.a)(r),Se(r,o,a),r))};return Ie(Y,{mb:2},Ie(Q.a,{className:t.wrapper,elevation:0},Ie(Z.a,null,Ie(Y,{my:2},Ie(Pe.a,null,Ie(V.a,{align:"center"},"NPM Packages"))),Ie($.a,{container:!0,spacing:2,justify:"center",alignContent:"center",alignItems:"center"},c.map((function(e,t){return Ie($.a,{key:e.name,item:!0,xs:12,md:6},Ie(De,{data:e,totalItems:c.length,i:t,moveItem:l,setPosition:p}))}))))))},We=o.a.createElement;t.default=function(){return We(o.a.Fragment,null,We(p.c.div,{initial:"initial",animate:"animate"},We(c.a,null,We("title",{key:"title"},"Showcase Projects | Wilfred Lopez"),We("link",{rel:"canonical",href:"https://wilfredlopez.net/projects"})),We(p.c.div,{variants:{animate:{transition:{staggerChildren:.1}}}},We(s.a,null,We(p.c.div,{variants:l},We(a.a,null),We(He,null))))))}},Tk32:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("SpL8")}])}},[["Tk32",0,2,3,7,1,4,5,6]]]);