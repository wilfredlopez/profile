(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8C4M":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.default=r},CarD:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=r},SpL8:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("8pOq"),i=a("NWm5"),c=a("Ff2n"),s=a("/p1/"),l=a("ODXe"),u=a("rePB"),d=a("R/WZ"),m=a("tr08"),f=a("wx14"),p=a("KQm4"),b=(a("17x9"),a("iuhU")),g=a("H2TA"),h=a("kKAo"),v=a("NqtD"),y=a("ye/S"),j=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.color,i=void 0===r?"primary":r,s=e.value,l=e.valueBuffer,u=e.variant,d=void 0===u?"indeterminate":u,p=Object(c.a)(e,["classes","className","color","value","valueBuffer","variant"]),g=Object(m.a)(),h={},y={bar1:{},bar2:{}};if("determinate"===d||"buffer"===d)if(void 0!==s){h["aria-valuenow"]=Math.round(s),h["aria-valuemin"]=0,h["aria-valuemax"]=100;var j=s-100;"rtl"===g.direction&&(j=-j),y.bar1.transform="translateX(".concat(j,"%)")}else 0;if("buffer"===d)if(void 0!==l){var O=(l||0)-100;"rtl"===g.direction&&(O=-O),y.bar2.transform="translateX(".concat(O,"%)")}else 0;return(n.createElement("div",Object(f.a)({className:Object(b.a)(a.root,a["color".concat(Object(v.a)(i))],o,{determinate:a.determinate,indeterminate:a.indeterminate,buffer:a.buffer,query:a.query}[d]),role:"progressbar"},h,{ref:t},p),"buffer"===d?n.createElement("div",{className:Object(b.a)(a.dashed,a["dashedColor".concat(Object(v.a)(i))])}):null,n.createElement("div",{className:Object(b.a)(a.bar,a["barColor".concat(Object(v.a)(i))],("indeterminate"===d||"query"===d)&&a.bar1Indeterminate,{determinate:a.bar1Determinate,buffer:a.bar1Buffer}[d]),style:y.bar1}),"determinate"===d?null:n.createElement("div",{className:Object(b.a)(a.bar,("indeterminate"===d||"query"===d)&&a.bar2Indeterminate,"buffer"===d?[a["color".concat(Object(v.a)(i))],a.bar2Buffer]:a["barColor".concat(Object(v.a)(i))]),style:y.bar2})))})),O=Object(g.a)((function(e){var t=function(t){return"light"===e.palette.type?Object(y.e)(t,.62):Object(y.a)(t,.5)},a=t(e.palette.primary.main),n=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:a},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(j),w=n.forwardRef((function(e,t){var a=e.activeStep,o=void 0===a?0:a,r=e.backButton,i=e.classes,s=e.className,l=e.LinearProgressProps,u=e.nextButton,d=e.position,m=void 0===d?"bottom":d,g=e.steps,y=e.variant,j=void 0===y?"dots":y,w=Object(c.a)(e,["activeStep","backButton","classes","className","LinearProgressProps","nextButton","position","steps","variant"]);return(n.createElement(h.a,Object(f.a)({square:!0,elevation:0,className:Object(b.a)(i.root,i["position".concat(Object(v.a)(m))],s),ref:t},w),r,"text"===j&&n.createElement(n.Fragment,null,o+1," / ",g),"dots"===j&&n.createElement("div",{className:i.dots},Object(p.a)(new Array(g)).map((function(e,t){return n.createElement("div",{key:t,className:Object(b.a)(i.dot,t===o&&i.dotActive)})}))),"progress"===j&&n.createElement(O,Object(f.a)({className:i.progress,variant:"determinate",value:Math.ceil(o/(g-1)*100)},l)),u))})),x=Object(g.a)((function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:e.palette.background.default,padding:8},positionBottom:{position:"fixed",bottom:0,left:0,right:0,zIndex:e.zIndex.mobileStepper},positionTop:{position:"fixed",top:0,left:0,right:0,zIndex:e.zIndex.mobileStepper},positionStatic:{},dots:{display:"flex",flexDirection:"row"},dot:{backgroundColor:e.palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"},dotActive:{backgroundColor:e.palette.primary.main},progress:{width:"50%"}}}),{name:"MuiMobileStepper"})(w),E=a("ofer"),k=a("CarD"),C=a.n(k),T=a("8C4M"),N=a.n(T),R=a("ZMKu"),P=a("PsDL"),L=o.a.createElement,I=Object(d.a)((function(e){var t;return{sliderCardRoot:Object(u.a)({minWidth:500,maxWidth:"100%",flexGrow:1,margin:"auto",position:"relative"},e.breakpoints.down("xs"),{width:"100% !important",minWidth:"auto"}),header:{display:"flex",alignItems:"center",justifyContent:"center",height:50,color:e.palette.background.default,background:e.palette.getContrastText(e.palette.background.default),borderTopLeftRadius:6,borderTopRightRadius:6,borderBottom:0,borderRight:0,borderLeft:0,position:"relative"},stepper:{borderBottomLeftRadius:6,borderBottomRightRadius:6,opacity:.9,color:e.palette.background.default,background:e.palette.getContrastText(e.palette.background.default)},focusVisible:{},img:(t={height:"100%",display:"block",maxWidth:"100%",minWidth:500,overflow:"hidden",width:"100%",position:"relative",transition:"all 200ms ease-in-out"},Object(u.a)(t,e.breakpoints.down("xs"),{width:"100% !important",height:100,minWidth:"auto"}),Object(u.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:0}}),t),title:{display:"flex",justifyContent:"space-between",alignItems:"center",flex:1},imageBackdrop:{position:"absolute",left:0,borderRadius:e.shape.borderRadius,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.15,transition:e.transitions.create("opacity")}}}));function S(e){var t=e.disabled,a=e.handleNext,n=Object(m.a)();return L(P.a,{size:"small",color:"inherit",onClick:a,disabled:t},"rtl"===n.direction?L(C.a,{color:"inherit"}):L(N.a,{color:"inherit"}))}function z(e){var t=e.disabled,a=e.handleBack,n=Object(m.a)();return L(P.a,{size:"small",color:"inherit",onClick:a,disabled:t},"rtl"===n.direction?L(N.a,{color:"inherit"}):L(C.a,{color:"inherit"}))}var B=function(e){var t,a=e.imageData,n=e.imageContainerClass,r=e.height,i=void 0===r?500:r,c=e.showControlsInTitle,s=void 0===c||c,u=e.loop,d=void 0!==u&&u,m=e.showControls,f=void 0===m||m,p=e.showTitle,b=void 0!==p&&p,g=e.showBackdrop,v=void 0!==g&&g,y=I(),j=Object(R.d)(),O=o.a.useState(0),w=Object(l.a)(O,2),k=w[0],C=w[1],T=o.a.useState(!1),N=Object(l.a)(T,2),P=N[0],B=N[1],M=a.length;o.a.useEffect((function(){return j.start({y:0,x:0,decelerate:3e3}),function(){j.stop()}}),[k]);var D=function(){C((function(e){return e===a.length-1?0:e+1}))},W=function(){C((function(e){return 0===e?0:e-1}))};o.a.useEffect((function(){var e,t;return d&&M>1&&function(a){var n=M-1;if(k===n)return B(!0),void(e=window.setTimeout((function(){W()}),a));0===k&&(B(!1),t=window.setTimeout((function(){D()}),a)),!P&&k<n?t=window.setTimeout((function(){D()}),a):0!==k&&P&&k<n&&(e=window.setTimeout((function(){W()}),a))}(7e3),function(){e&&window.clearTimeout(e),t&&window.clearTimeout(t)}}),[k,M,d]);var A=s&&M>1;return L("div",{className:y.sliderCardRoot},b&&L(h.a,{square:!0,elevation:3,className:y.header},L(E.a,{variant:"subtitle2",component:"h4",className:y.title},A&&L(z,{disabled:0===k,handleBack:W}),L("span",null,null===(t=a[k])||void 0===t?void 0:t.label),A&&L(S,{disabled:k===M-1,handleNext:D}))),L("div",{className:n,style:{height:i,overflow:"hidden",minWidth:"100%"}},L(R.b,null,a.map((function(e,t){return t!==k?null:L(R.c.div,{layout:!0,layoutId:"outline",key:t,title:null===e||void 0===e?void 0:e.label,role:"img",style:{height:i,width:"100%",minWidth:"100%",overflow:"hidden",background:"url(".concat(e.imgPath,")"),position:"relative",transition:"background 1s ease-in",backgroundSize:"cover",backgroundPosition:"center 0",backgroundRepeat:"no-repeat",objectFit:"cover"},initial:P?{x:-100}:{x:100},exit:P?{x:100}:{x:-100},animate:j,transition:{type:"spring",stiffness:550,damping:20},className:y.img},v&&L("span",{className:y.imageBackdrop}))})))),L(o.a.Fragment,null),f&&M>1&&L(x,{className:y.stepper,steps:M,position:"static",variant:"progress",LinearProgressProps:{color:"secondary"},activeStep:k,backButton:L(z,{disabled:0===k,handleBack:W}),nextButton:L(S,{disabled:k===M-1,handleNext:D})}))},M=a("Ji2X"),D=a("tRbT"),W=a("ZA8w"),A=a("VDGD"),H=a("vOnD"),q=o.a.createElement,_=Object(H.c)(s.g).withConfig({displayName:"Project__TitleLink",componentId:"d3i61s-0"})(["font-size:1.2rem;color:",";font-weight:500;"],(function(e){return e.theme.colors.secondary})),F=function(e){var t=e.showSliderControls,a=void 0===t||t,n=e.url,r=e.name,i=e.title,l=e.loop,u=Object(c.a)(e,["showSliderControls","url","name","title","loop"]),d=Object(A.a)();return q(o.a.Fragment,null,q(s.a,{className:"header project-tile",style:{textTransform:"uppercase",marginTop:"1rem"}},q(_,{href:n,target:"_blank",rel:"noopener noreferrer",title:r},r)),q(M.a,{maxWidth:"sm",style:{alignItems:"center",justifyContent:"center",margin:"auto",display:"flex",flexDirection:"column"},classes:{root:d.minPaddingX}},q(E.a,{variant:"body1",component:"div"},u.description,u.images.length>1&&q(B,{showControls:a,imageData:u.images,height:750,loop:l,showTitle:!0}))),1===u.images.length&&q("div",{style:{marginBottom:"1rem"},className:d.minPaddingX.concat(" "+d.flexCenter)},q(W.b,{linkUrl:n,title:i,backgroundUrl:u.images[0].imgPath,width:520,minHeight:500,buttomProps:{}})),q("div",{style:{marginBottom:"1rem"}}),q(D.a,{container:!0,alignItems:"center",justify:"center",style:{paddingBottom:"1rem"}},q(D.a,{item:!0},q(W.a,{color:u.classKey,size:"medium",variant:"contained"},q(s.g,{href:n,className:"text-white",title:r},r.toUpperCase())))))},K=o.a.createElement,X=function(e){var t=e.loop,a=void 0!==t&&t,c=e.showSliderControls,s=void 0===c||c,l=e.limitTo,u=e.addMarginTop,d=void 0===u||u,m=Object(r.b)().changePage;return Object(n.useEffect)((function(){m("Showcase")}),[m]),Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),K(o.a.Fragment,null,d&&K("div",{style:{marginTop:"5rem"}}),l?i.a.slice(0,l).map((function(e){return K(F,{key:e.title,loop:a,showSliderControls:s,classKey:e.classKey,images:e.images,url:e.url,name:e.name,title:e.title,description:e.description})})):i.a.map((function(e){return K(F,{key:e.title,loop:a,showSliderControls:s,classKey:e.classKey,images:e.images,url:e.url,name:e.name,title:e.title,description:e.description})})))},U=a("8Kt/"),$=a.n(U),G=a("ycUj"),J={initial:{y:60,opacity:0},animate:{y:0,x:0,opacity:1,transition:{duration:.6,ease:[.6,-.05,.01,.99]}}},V=a("hlFM"),Z=a("wpWl"),Y=a("i8i4"),Q=a("gk1O"),ee=a("bfFb"),te=a("Ovef");function ae(e){return e.substring(2).toLowerCase()}var ne=function(e){var t=e.children,a=e.disableReactTree,o=void 0!==a&&a,r=e.mouseEvent,i=void 0===r?"onClick":r,c=e.onClickAway,s=e.touchEvent,l=void 0===s?"onTouchEnd":s,u=n.useRef(!1),d=n.useRef(null),m=n.useRef(!1),f=n.useRef(!1);n.useEffect((function(){return m.current=!0,function(){m.current=!1}}),[]);var p=n.useCallback((function(e){d.current=Y.findDOMNode(e)}),[]),b=Object(ee.a)(t.ref,p),g=Object(te.a)((function(e){var t=f.current;if(f.current=!1,m.current&&d.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(u.current)u.current=!1;else{var a;if(e.composedPath)a=e.composedPath().indexOf(d.current)>-1;else a=!Object(Q.a)(d.current).documentElement.contains(e.target)||d.current.contains(e.target);a||!o&&t||c(e)}})),h=function(e){return function(a){f.current=!0;var n=t.props[e];n&&n(a)}},v={ref:b};return!1!==l&&(v[l]=h(l)),n.useEffect((function(){if(!1!==l){var e=ae(l),t=Object(Q.a)(d.current),a=function(){u.current=!0};return t.addEventListener(e,g),t.addEventListener("touchmove",a),function(){t.removeEventListener(e,g),t.removeEventListener("touchmove",a)}}}),[g,l]),!1!==i&&(v[i]=h(i)),n.useEffect((function(){if(!1!==i){var e=ae(i),t=Object(Q.a)(d.current);return t.addEventListener(e,g),function(){t.removeEventListener(e,g)}}}),[g,i]),n.createElement(n.Fragment,null,n.cloneElement(t,v))},oe=a("x6Ns"),re=a("dRu9"),ie=a("4Hym");function ce(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var se={entering:{opacity:1,transform:ce(1)},entered:{opacity:1,transform:"none"}},le=n.forwardRef((function(e,t){var a=e.children,o=e.disableStrictModeCompat,r=void 0!==o&&o,i=e.in,s=e.onEnter,u=e.onEntered,d=e.onEntering,p=e.onExit,b=e.onExited,g=e.onExiting,h=e.style,v=e.timeout,y=void 0===v?"auto":v,j=e.TransitionComponent,O=void 0===j?re.a:j,w=Object(c.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),x=n.useRef(),E=n.useRef(),k=Object(m.a)(),C=k.unstable_strictMode&&!r,T=n.useRef(null),N=Object(ee.a)(a.ref,t),R=Object(ee.a)(C?T:void 0,N),P=function(e){return function(t,a){if(e){var n=C?[T.current,t]:[t,a],o=Object(l.a)(n,2),r=o[0],i=o[1];void 0===i?e(r):e(r,i)}}},L=P(d),I=P((function(e,t){Object(ie.b)(e);var a,n=Object(ie.a)({style:h,timeout:y},{mode:"enter"}),o=n.duration,r=n.delay;"auto"===y?(a=k.transitions.getAutoHeightDuration(e.clientHeight),E.current=a):a=o,e.style.transition=[k.transitions.create("opacity",{duration:a,delay:r}),k.transitions.create("transform",{duration:.666*a,delay:r})].join(","),s&&s(e,t)})),S=P(u),z=P(g),B=P((function(e){var t,a=Object(ie.a)({style:h,timeout:y},{mode:"exit"}),n=a.duration,o=a.delay;"auto"===y?(t=k.transitions.getAutoHeightDuration(e.clientHeight),E.current=t):t=n,e.style.transition=[k.transitions.create("opacity",{duration:t,delay:o}),k.transitions.create("transform",{duration:.666*t,delay:o||.333*t})].join(","),e.style.opacity="0",e.style.transform=ce(.75),p&&p(e)})),M=P(b);return n.useEffect((function(){return function(){clearTimeout(x.current)}}),[]),n.createElement(O,Object(f.a)({appear:!0,in:i,nodeRef:C?T:void 0,onEnter:I,onEntered:S,onEntering:L,onExit:B,onExited:M,onExiting:z,addEndListener:function(e,t){var a=C?e:t;"auto"===y&&(x.current=setTimeout(a,E.current||0))},timeout:"auto"===y?null:y},w),(function(e,t){return n.cloneElement(a,Object(f.a)({style:Object(f.a)(Object(f.a)(Object(f.a)({opacity:0,transform:ce(.75),visibility:"exited"!==e||i?void 0:"hidden"},se[e]),h),a.props.style),ref:R},t))}))}));le.muiSupportAuto=!0;var ue=le,de=n.forwardRef((function(e,t){var a=e.action,o=e.classes,r=e.className,i=e.message,s=e.role,l=void 0===s?"alert":s,u=Object(c.a)(e,["action","classes","className","message","role"]);return(n.createElement(h.a,Object(f.a)({role:l,square:!0,elevation:6,className:Object(b.a)(o.root,r),ref:t},u),n.createElement("div",{className:o.message},i),a?n.createElement("div",{className:o.action},a):null))})),me=Object(g.a)((function(e){var t="light"===e.palette.type?.8:.98,a=Object(y.b)(e.palette.background.default,t);return{root:Object(f.a)(Object(f.a)({},e.typography.body2),{},Object(u.a)({color:e.palette.getContrastText(a),backgroundColor:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(de),fe=n.forwardRef((function(e,t){var a=e.action,o=e.anchorOrigin,r=(o=void 0===o?{vertical:"bottom",horizontal:"center"}:o).vertical,i=o.horizontal,s=e.autoHideDuration,l=void 0===s?null:s,u=e.children,d=e.classes,m=e.className,p=e.ClickAwayListenerProps,g=e.ContentProps,h=e.disableWindowBlurListener,y=void 0!==h&&h,j=e.message,O=e.onClose,w=e.onEnter,x=e.onEntered,E=e.onEntering,k=e.onExit,C=e.onExited,T=e.onExiting,N=e.onMouseEnter,R=e.onMouseLeave,P=e.open,L=e.resumeHideDuration,I=e.TransitionComponent,S=void 0===I?ue:I,z=e.transitionDuration,B=void 0===z?{enter:Z.b.enteringScreen,exit:Z.b.leavingScreen}:z,M=e.TransitionProps,D=Object(c.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),W=n.useRef(),A=n.useState(!0),H=A[0],q=A[1],_=Object(te.a)((function(){O&&O.apply(void 0,arguments)})),F=Object(te.a)((function(e){O&&null!=e&&(clearTimeout(W.current),W.current=setTimeout((function(){_(null,"timeout")}),e))}));n.useEffect((function(){return P&&F(l),function(){clearTimeout(W.current)}}),[P,l,F]);var K=function(){clearTimeout(W.current)},X=n.useCallback((function(){null!=l&&F(null!=L?L:.5*l)}),[l,L,F]);return n.useEffect((function(){if(!y&&P)return window.addEventListener("focus",X),window.addEventListener("blur",K),function(){window.removeEventListener("focus",X),window.removeEventListener("blur",K)}}),[y,X,P]),!P&&H?null:n.createElement(ne,Object(f.a)({onClickAway:function(e){O&&O(e,"clickaway")}},p),n.createElement("div",Object(f.a)({className:Object(b.a)(d.root,d["anchorOrigin".concat(Object(v.a)(r)).concat(Object(v.a)(i))],m),onMouseEnter:function(e){N&&N(e),K()},onMouseLeave:function(e){R&&R(e),X()},ref:t},D),n.createElement(S,Object(f.a)({appear:!0,in:P,onEnter:Object(oe.a)((function(){q(!1)}),w),onEntered:x,onEntering:E,onExit:k,onExited:Object(oe.a)((function(){q(!0)}),C),onExiting:T,timeout:B,direction:"top"===r?"down":"up"},M),u||n.createElement(me,Object(f.a)({message:j,action:a},g)))))})),pe=Object(g.a)((function(e){var t={top:8},a={bottom:8},n={justifyContent:"flex-end"},o={justifyContent:"flex-start"},r={top:24},i={bottom:24},c={right:24},s={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(f.a)(Object(f.a)({},t),{},Object(u.a)({},e.breakpoints.up("sm"),Object(f.a)(Object(f.a)({},r),l))),anchorOriginBottomCenter:Object(f.a)(Object(f.a)({},a),{},Object(u.a)({},e.breakpoints.up("sm"),Object(f.a)(Object(f.a)({},i),l))),anchorOriginTopRight:Object(f.a)(Object(f.a)(Object(f.a)({},t),n),{},Object(u.a)({},e.breakpoints.up("sm"),Object(f.a)(Object(f.a)({left:"auto"},r),c))),anchorOriginBottomRight:Object(f.a)(Object(f.a)(Object(f.a)({},a),n),{},Object(u.a)({},e.breakpoints.up("sm"),Object(f.a)(Object(f.a)({left:"auto"},i),c))),anchorOriginTopLeft:Object(f.a)(Object(f.a)(Object(f.a)({},t),o),{},Object(u.a)({},e.breakpoints.up("sm"),Object(f.a)(Object(f.a)({right:"auto"},r),s))),anchorOriginBottomLeft:Object(f.a)(Object(f.a)(Object(f.a)({},a),o),{},Object(u.a)({},e.breakpoints.up("sm"),Object(f.a)(Object(f.a)({right:"auto"},i),s)))}}),{flip:!1,name:"MuiSnackbar"})(fe),be=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.raised,i=void 0!==r&&r,s=Object(c.a)(e,["classes","className","raised"]);return(n.createElement(h.a,Object(f.a)({className:Object(b.a)(a.root,o),elevation:i?8:1,ref:t},s)))})),ge=Object(g.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(be),he=n.forwardRef((function(e,t){var a=e.action,o=e.avatar,r=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,u=e.disableTypography,d=void 0!==u&&u,m=e.subheader,p=e.subheaderTypographyProps,g=e.title,h=e.titleTypographyProps,v=Object(c.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=g;null==y||y.type===E.a||d||(y=n.createElement(E.a,Object(f.a)({variant:o?"body2":"h5",className:r.title,component:"span",display:"block"},h),y));var j=m;return null==j||j.type===E.a||d||(j=n.createElement(E.a,Object(f.a)({variant:o?"body2":"body1",className:r.subheader,color:"textSecondary",component:"span",display:"block"},p),j)),n.createElement(l,Object(f.a)({className:Object(b.a)(r.root,i),ref:t},v),o&&n.createElement("div",{className:r.avatar},o),n.createElement("div",{className:r.content},y,j),a&&n.createElement("div",{className:r.action},a))})),ve=Object(g.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(he),ye=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,i=void 0===r?"div":r,s=Object(c.a)(e,["classes","className","component"]);return(n.createElement(i,Object(f.a)({className:Object(b.a)(a.root,o),ref:t},s)))})),je=Object(g.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(ye),Oe=[{name:"React-utils",url:"https://www.npmjs.com/package/@wilfredlopez/react-utils",description:"Javascript Utilify Functions, Classes and Typescript types.",command:"npm i @wilfredlopez/react-utils"},{name:"wl-components/react",url:"https://www.npmjs.com/package/@wilfredlopez/react",description:"React specific building blocks on top of @wilfredlopez/wl-componets UI Library.",command:"npm install @wilfredlopez/react"},{name:"wl-components",url:"https://www.npmjs.com/package/@wilfredlopez/wl-components",description:"Web Components UI Library",command:"npm i @wilfredlopez/wl-components"},{name:"react-use-light",url:"https://www.npmjs.com/package/react-use-light",description:"Collection of essential React Hooks. Partial react-use library (by streamich) without external dependencies and other hooks.",command:"npm i react-use-light"},{name:"youtube-api-search-typed",url:"https://www.npmjs.com/package/youtube-api-search-typed",description:"Makes Easy the search for videos on Youtube using their API.",command:"npm i youtube-api-search-typed"}],we=a("tKSW"),xe=function(e,t,a){var n=a<0?e.length+a:a;if(n>=0&&n<e.length){var o=e.splice(t,1)[0];e.splice(n,0,o)}};var Ee=o.a.createElement,ke={type:"spring",stiffness:700,damping:30},Ce=Object(d.a)((function(e){return{wrapper:{color:"#000",background:"#fff"},cardRoot:{color:"#000",background:"#fff",justifyContent:"center",height:200,alignItems:"flex-start",display:"flex",flexDirection:"column"}}})),Te={zIndex:1},Ne={zIndex:0,transition:{delay:.3}};function Re(e){var t=e.data,a=e.i,r=e.moveItem,i=e.setPosition,c=e.totalItems,s=Ce(),u=o.a.useState(!1),d=Object(l.a)(u,2),m=d[0],f=d[1],p=Object(n.useRef)(null),b=o.a.useState(!1),g=Object(l.a)(b,2),h=g[0],v=g[1];return o.a.useEffect((function(){i(a,{height:p.current.offsetHeight,top:p.current.offsetTop})})),Ee(o.a.Fragment,null,Ee(pe,{open:h,autoHideDuration:1e3,onClose:function(){v(!1)}},Ee(V.a,{position:"absolute",bottom:"0",left:"25%",width:400},Ee(W.a,{color:"success"},Ee(V.a,{display:"block",width:"100%"},Ee("span",null,"Copied to clipboard"))))),Ee(R.c.div,{drag:!0,ref:p,layout:!0,animate:m?Te:Ne,whileHover:{scale:1.03},whileTap:{scale:1.12},transition:ke,dragConstraints:{top:10,bottom:10,left:10,right:10},dragElastic:1,onDragStart:function(){return f(!0)},onDragEnd:function(){return f(!1)},onDrag:function(e,t){var n=t.point;return r(a,n.y)}},Ee(ge,{className:s.cardRoot,style:{background:a===c-1?"rgba(247,247, 247,.83)":"white"}},Ee(ve,{title:t.name,subheader:t.command,action:Ee(V.a,{width:"100%",justifyContent:"flex-end"},Ee(W.a,{size:"small",onClick:function(){navigator.clipboard.writeText(t.command||""),v(!0)},style:{position:"absolute",right:12},variant:"outlined",color:"success"},"Copy"))}),Ee(je,null,Ee(E.a,{variant:"body2"},t.description)))))}var Pe=function(e){var t=Ce(),a=Object(n.useRef)([]).current,r=o.a.useState(Oe),i=Object(l.a)(r,2),c=i[0],u=i[1],d=function(e,t){return a[e]=t},m=function(e,t){var n,o,r,i=function(e,t,a){var n=e,o=a[e],r=o.top,i=r+o.height;if(t>0){var c=a[e+1];if(void 0===c)return e;t>Object(we.e)(i,c.top+c.height/2)+5&&(n=e+1)}else if(t<0){var s=a[e-1];if(void 0===s)return e;var l=s.top+s.height;t<-(Object(we.e)(r,l-s.height/2)+5)&&(n=e-1)}return Object(we.d)(0,a.length,n)}(e,t,a);i!==e&&u((n=c,o=e,r=i,n=Object(p.a)(n),xe(n,o,r),n))};return Ee(V.a,null,Ee(h.a,{className:t.wrapper,elevation:0},Ee(M.a,null,Ee(V.a,{mb:2,pt:2},Ee(s.a,null,Ee(E.a,{align:"center"},"NPM Packages"))),Ee(D.a,{container:!0,spacing:2,justify:"center",alignContent:"center",alignItems:"center"},c.map((function(e,t){return Ee(D.a,{key:e.name,item:!0,xs:12,md:6},Ee(Re,{data:e,totalItems:c.length,i:t,moveItem:m,setPosition:d}))})))),Ee(V.a,{pb:2})))},Le=o.a.createElement;t.default=function(){return Le(o.a.Fragment,null,Le(R.c.div,{initial:"initial",animate:"animate"},Le($.a,null,Le("title",{key:"title"},"Showcase Projects | Wilfred Lopez"),Le("link",{rel:"canonical",href:"https://wilfredlopez.net/projects"})),Le(R.c.div,{variants:{animate:{transition:{staggerChildren:.1}}}},Le(G.a,null,Le(R.c.div,{variants:J},Le(X,null),Le(Pe,null))))))}},Tk32:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a("SpL8")}])}},[["Tk32",0,2,3,6,1,4,5,7]]]);