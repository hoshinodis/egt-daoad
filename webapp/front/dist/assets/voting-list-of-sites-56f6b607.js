import{j as i,h as _,e as L,g as b,m as Ge,o as Je,q as Xe,F as Qe}from"./index-ca8adee0.js";import{B,I as Ze}from"./index-2dd32050.js";import{C as ge}from"./index-fa566505.js";const ve=({className:t,children:e,color:n="process",direction:r="horizontal"})=>i("div",{className:_("text-neutral-10 flex flex-row items-center border-solid border-[#47554E] font-sans",n==="process"&&"bg-primary-40",n==="passed"&&"bg-passed",n==="rejected"&&"bg-rejected",r==="horizontal"?"h-12 border-t py-[9px] px-[24px]":"w-12 scale-[-1] flex-col border-l py-[12.5px] px-[24px] [writing-mode:vertical-rl]",t),children:e}),et=t=>{const e=new Date,n=Math.abs(Math.round((e.getTime()-t.getTime())/1e3)),r=Math.floor(n/3600),l=Math.floor(n%3600/60),s=n%60,y=r>0?`${r}h `:"",a=l>0?`${l}m `:"",v=`${s}s`;return`${y}${a}${v}`},Mn=({className:t,id:e,createdAt:n,expires:r,image:l,status:s,ok:y,ng:a,onVote:v})=>{const m=L.useMemo(()=>s==="process"&&y!==void 0&&a!==void 0&&r!==void 0&&v!==void 0,[s,y,a,r,v]);return b("div",{className:_("flex flex-col",t),children:[b("div",{className:"flex",children:[b(ve,{color:s,direction:"vertical",children:["VOTE IN ",s]}),b(ge,{className:"grow",children:[b("div",{className:"flex",children:[b("div",{className:"w-1/3 px-2",children:[i("div",{className:"text-18-semi text-neutral-10/70",children:"Creative ID"}),i("div",{className:"text-18-bold text-neutral-10",children:e})]}),b("div",{className:"w-1/3 px-2",children:[i("div",{className:"text-18-semi text-neutral-10/70",children:"Created At"}),i("div",{className:"text-18-bold text-neutral-10",children:n.toLocaleString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(/-/g,"/").replace("T"," ")})]}),m&&b("div",{className:"w-1/3 px-2",children:[i("div",{className:"text-18-semi text-neutral-10/70",children:"Expires"}),i("div",{className:"text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap",children:et(r)})]})]}),i("div",{className:_("relative p-2",m?"h-48":"h-60"),children:i("img",{className:"h-full w-full object-contain",src:l,alt:"creative"})})]})]}),m&&b("div",{className:"flex",children:[i(ve,{className:"flex w-3/4 justify-end",color:s,children:b("div",{children:[i("span",{children:"OK"}),b("span",{children:[y,"%"]}),i("span",{children:"NG"}),b("span",{children:[a,"%"]})]})}),i(B,{className:"h-12 w-1/4",color:"secondary",onClick:v,children:"VOTE"})]})]})},tt=({className:t,src:e,alt:n})=>i("div",{className:_("h-10",t),children:i("img",{className:"object-contain",src:e,alt:n})});var ae={},nt={get exports(){return ae},set exports(t){ae=t}},ot="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rt=ot,at=rt;function Pe(){}function Ae(){}Ae.resetWarningCache=Pe;var lt=function(){function t(r,l,s,y,a,v){if(v!==at){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ae,resetWarningCache:Pe};return n.PropTypes=n,n};nt.exports=lt();var le={},st={get exports(){return le},set exports(t){le=t}},q={},se={},it={get exports(){return se},set exports(t){se=t}},D={},J={},ct={get exports(){return J},set exports(t){J=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",l=/input|select|textarea|button|object|iframe/;function s(d,h){return h.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function y(d){var h=d.offsetWidth<=0&&d.offsetHeight<=0;if(h&&!d.innerHTML)return!0;try{var O=window.getComputedStyle(d),C=O.getPropertyValue("display");return h?C!==r&&s(d,O):C===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var h=d,O=d.getRootNode&&d.getRootNode();h&&h!==document.body;){if(O&&h===O&&(h=O.host.parentNode),y(h))return!1;h=h.parentNode}return!0}function v(d,h){var O=d.nodeName.toLowerCase(),C=l.test(O)&&!d.disabled||O==="a"&&d.href||h;return C&&a(d)}function m(d){var h=d.getAttribute("tabindex");h===null&&(h=void 0);var O=isNaN(h);return(O||h>=0)&&v(d,!O)}function g(d){var h=[].slice.call(d.querySelectorAll("*"),0).reduce(function(O,C){return O.concat(C.shadowRoot?g(C.shadowRoot):[C])},[]);return h.filter(m)}t.exports=e.default})(ct,J);Object.defineProperty(D,"__esModule",{value:!0});D.resetState=pt;D.log=mt;D.handleBlur=X;D.handleFocus=Q;D.markForFocusLater=ht;D.returnFocus=vt;D.popWithoutFocus=yt;D.setupScopedFocus=bt;D.teardownScopedFocus=gt;var ut=J,dt=ft(ut);function ft(t){return t&&t.__esModule?t:{default:t}}var V=[],j=null,ye=!1;function pt(){V=[]}function mt(){}function X(){ye=!0}function Q(){if(ye){if(ye=!1,!j)return;setTimeout(function(){if(!j.contains(document.activeElement)){var t=(0,dt.default)(j)[0]||j;t.focus()}},0)}}function ht(){V.push(document.activeElement)}function vt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{V.length!==0&&(e=V.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function yt(){V.length>0&&V.pop()}function bt(t){j=t,window.addEventListener?(window.addEventListener("blur",X,!1),document.addEventListener("focus",Q,!0)):(window.attachEvent("onBlur",X),document.attachEvent("onFocus",Q))}function gt(){j=null,window.addEventListener?(window.removeEventListener("blur",X),document.removeEventListener("focus",Q)):(window.detachEvent("onBlur",X),document.detachEvent("onFocus",Q))}var ie={},Ot={get exports(){return ie},set exports(t){ie=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;var n=J,r=l(n);function l(a){return a&&a.__esModule?a:{default:a}}function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?s(a.activeElement.shadowRoot):a.activeElement}function y(a,v){var m=(0,r.default)(a);if(!m.length){v.preventDefault();return}var g=void 0,d=v.shiftKey,h=m[0],O=m[m.length-1],C=s();if(a===C){if(!d)return;g=O}if(O===C&&!d&&(g=h),h===C&&d&&(g=O),g){v.preventDefault(),g.focus();return}var E=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),U=E!=null&&E[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(U){var M=m.indexOf(C);if(M>-1&&(M+=d?-1:1),g=m[M],typeof g>"u"){v.preventDefault(),g=d?O:h,g.focus();return}v.preventDefault(),g.focus()}}t.exports=e.default})(Ot,ie);var F={},Ct=function(){},wt=Ct,A={},be={},_t={get exports(){return be},set exports(t){be=t}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(_t);Object.defineProperty(A,"__esModule",{value:!0});A.canUseDOM=A.SafeNodeList=A.SafeHTMLCollection=void 0;var Nt=be,xt=St(Nt);function St(t){return t&&t.__esModule?t:{default:t}}var fe=xt.default,Et=fe.canUseDOM?window.HTMLElement:{};A.SafeHTMLCollection=fe.canUseDOM?window.HTMLCollection:{};A.SafeNodeList=fe.canUseDOM?window.NodeList:{};A.canUseDOM=fe.canUseDOM;A.default=Et;Object.defineProperty(F,"__esModule",{value:!0});F.resetState=At;F.log=Dt;F.assertNodeList=De;F.setElement=Ft;F.validateElement=Oe;F.hide=Lt;F.show=Ut;F.documentNotReadyOrSSRTesting=kt;var Mt=wt,Tt=Pt(Mt),Rt=A;function Pt(t){return t&&t.__esModule?t:{default:t}}var R=null;function At(){R&&(R.removeAttribute?R.removeAttribute("aria-hidden"):R.length!=null?R.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(R).forEach(function(t){return t.removeAttribute("aria-hidden")})),R=null}function Dt(){}function De(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Ft(t){var e=t;if(typeof e=="string"&&Rt.canUseDOM){var n=document.querySelectorAll(e);De(n,e),e=n}return R=e||R,R}function Oe(t){var e=t||R;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Tt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Lt(t){var e=!0,n=!1,r=void 0;try{for(var l=Oe(t)[Symbol.iterator](),s;!(e=(s=l.next()).done);e=!0){var y=s.value;y.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&l.return&&l.return()}finally{if(n)throw r}}}function Ut(t){var e=!0,n=!1,r=void 0;try{for(var l=Oe(t)[Symbol.iterator](),s;!(e=(s=l.next()).done);e=!0){var y=s.value;y.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&l.return&&l.return()}finally{if(n)throw r}}}function kt(){R=null}var K={};Object.defineProperty(K,"__esModule",{value:!0});K.resetState=It;K.log=Wt;var Y={},G={};function _e(t,e){t.classList.remove(e)}function It(){var t=document.getElementsByTagName("html")[0];for(var e in Y)_e(t,Y[e]);var n=document.body;for(var r in G)_e(n,G[r]);Y={},G={}}function Wt(){}var Ht=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},$t=function(e,n){return e[n]&&(e[n]-=1),n},qt=function(e,n,r){r.forEach(function(l){Ht(n,l),e.add(l)})},jt=function(e,n,r){r.forEach(function(l){$t(n,l),n[l]===0&&e.remove(l)})};K.add=function(e,n){return qt(e.classList,e.nodeName.toLowerCase()=="html"?Y:G,n.split(" "))};K.remove=function(e,n){return jt(e.classList,e.nodeName.toLowerCase()=="html"?Y:G,n.split(" "))};var z={};Object.defineProperty(z,"__esModule",{value:!0});z.log=Vt;z.resetState=Kt;function Bt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Fe=function t(){var e=this;Bt(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ce=new Fe;function Vt(){console.log("portalOpenInstances ----------"),console.log(ce.openInstances.length),ce.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Kt(){ce=new Fe}z.default=ce;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.resetState=Jt;Ce.log=Xt;var zt=z,Yt=Gt(zt);function Gt(t){return t&&t.__esModule?t:{default:t}}var S=void 0,P=void 0,$=[];function Jt(){for(var t=[S,P],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}S=P=null,$=[]}function Xt(){console.log("bodyTrap ----------"),console.log($.length);for(var t=[S,P],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ne(){$.length!==0&&$[$.length-1].focusContent()}function Qt(t,e){!S&&!P&&(S=document.createElement("div"),S.setAttribute("data-react-modal-body-trap",""),S.style.position="absolute",S.style.opacity="0",S.setAttribute("tabindex","0"),S.addEventListener("focus",Ne),P=S.cloneNode(),P.addEventListener("focus",Ne)),$=e,$.length>0?(document.body.firstChild!==S&&document.body.insertBefore(S,document.body.firstChild),document.body.lastChild!==P&&document.body.appendChild(P)):(S.parentElement&&S.parentElement.removeChild(S),P.parentElement&&P.parentElement.removeChild(P))}Yt.default.subscribe(Qt);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(p){for(var f=1;f<arguments.length;f++){var w=arguments[f];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(p[o]=w[o])}return p},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},l=function(){function p(f,w){for(var o=0;o<w.length;o++){var c=w[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(f,c.key,c)}}return function(f,w,o){return w&&p(f.prototype,w),o&&p(f,o),f}}(),s=L,y=ae,a=te(y),v=D,m=pe(v),g=ie,d=te(g),h=F,O=pe(h),C=K,E=pe(C),U=A,M=te(U),He=z,we=te(He);function pe(p){if(p&&p.__esModule)return p;var f={};if(p!=null)for(var w in p)Object.prototype.hasOwnProperty.call(p,w)&&(f[w]=p[w]);return f.default=p,f}function te(p){return p&&p.__esModule?p:{default:p}}function $e(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}function qe(p,f){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:p}function je(p,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);p.prototype=Object.create(f&&f.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(p,f):p.__proto__=f)}var me={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Be=function(f){return f.code==="Tab"||f.keyCode===9},Ve=function(f){return f.code==="Escape"||f.keyCode===27},ne=0,he=function(p){je(f,p);function f(w){$e(this,f);var o=qe(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,w));return o.setOverlayRef=function(c){o.overlay=c,o.props.overlayRef&&o.props.overlayRef(c)},o.setContentRef=function(c){o.content=c,o.props.contentRef&&o.props.contentRef(c)},o.afterClose=function(){var c=o.props,x=c.appElement,T=c.ariaHideApp,N=c.htmlOpenClassName,I=c.bodyOpenClassName,W=c.parentSelector,oe=W&&W().ownerDocument||document;I&&E.remove(oe.body,I),N&&E.remove(oe.getElementsByTagName("html")[0],N),T&&ne>0&&(ne-=1,ne===0&&O.show(x)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(m.returnFocus(o.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),we.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(m.setupScopedFocus(o.node),m.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var c=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:c},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(c){Be(c)&&(0,d.default)(o.content,c),o.props.shouldCloseOnEsc&&Ve(c)&&(c.stopPropagation(),o.requestClose(c))},o.handleOverlayOnClick=function(c){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(c):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(c){!o.props.shouldCloseOnOverlayClick&&c.target==o.overlay&&c.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(c){return o.ownerHandlesClose()&&o.props.onRequestClose(c)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(c,x){var T=(typeof x>"u"?"undefined":r(x))==="object"?x:{base:me[c],afterOpen:me[c]+"--after-open",beforeClose:me[c]+"--before-close"},N=T.base;return o.state.afterOpen&&(N=N+" "+T.afterOpen),o.state.beforeClose&&(N=N+" "+T.beforeClose),typeof x=="string"&&x?N+" "+x:N},o.attributesFromObject=function(c,x){return Object.keys(x).reduce(function(T,N){return T[c+"-"+N]=x[N],T},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return l(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,c){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,c=o.appElement,x=o.ariaHideApp,T=o.htmlOpenClassName,N=o.bodyOpenClassName,I=o.parentSelector,W=I&&I().ownerDocument||document;N&&E.add(W.body,N),T&&E.add(W.getElementsByTagName("html")[0],T),x&&(ne+=1,O.hide(c)),we.default.register(this)}},{key:"render",value:function(){var o=this.props,c=o.id,x=o.className,T=o.overlayClassName,N=o.defaultStyles,I=o.children,W=x?{}:N.content,oe=T?{}:N.overlay;if(this.shouldBeClosed())return null;var Ke={ref:this.setOverlayRef,className:this.buildClassName("overlay",T),style:n({},oe,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ze=n({id:c,ref:this.setContentRef,style:n({},W,this.props.style.content),className:this.buildClassName("content",x),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ye=this.props.contentElement(ze,I);return this.props.overlayElement(Ke,Ye)}}]),f}(s.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(M.default),a.default.instanceOf(U.SafeHTMLCollection),a.default.instanceOf(U.SafeNodeList),a.default.arrayOf(a.default.instanceOf(M.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=he,t.exports=e.default})(it,se);function Le(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Ue(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r??null}this.setState(e.bind(this))}function ke(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Le.__suppressDeprecationWarning=!0;Ue.__suppressDeprecationWarning=!0;ke.__suppressDeprecationWarning=!0;function Zt(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,l=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),n!==null||r!==null||l!==null){var s=t.displayName||t.name,y=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Le,e.componentWillReceiveProps=Ue),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ke;var a=e.componentDidUpdate;e.componentDidUpdate=function(m,g,d){var h=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,m,g,h)}}return t}const en=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Zt},Symbol.toStringTag,{value:"Module"})),tn=Ge(en);Object.defineProperty(q,"__esModule",{value:!0});q.bodyOpenClassName=q.portalClassName=void 0;var xe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nn=function(){function t(e,n){for(var r=0;r<n.length;r++){var l=n[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Ie=L,ue=Z(Ie),on=Je,de=Z(on),rn=ae,u=Z(rn),an=se,Se=Z(an),ln=F,sn=un(ln),k=A,Ee=Z(k),cn=tn;function un(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function Z(t){return t&&t.__esModule?t:{default:t}}function dn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Me(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function fn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var pn=q.portalClassName="ReactModalPortal",mn=q.bodyOpenClassName="ReactModal__Body--open",H=k.canUseDOM&&de.default.createPortal!==void 0,Te=function(e){return document.createElement(e)},Re=function(){return H?de.default.createPortal:de.default.unstable_renderSubtreeIntoContainer};function re(t){return t()}var ee=function(t){fn(e,t);function e(){var n,r,l,s;dn(this,e);for(var y=arguments.length,a=Array(y),v=0;v<y;v++)a[v]=arguments[v];return s=(r=(l=Me(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),l),l.removePortal=function(){!H&&de.default.unmountComponentAtNode(l.node);var m=re(l.props.parentSelector);m&&m.contains(l.node)?m.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(m){l.portal=m},l.renderPortal=function(m){var g=Re(),d=g(l,ue.default.createElement(Se.default,xe({defaultStyles:e.defaultStyles},m)),l.node);l.portalRef(d)},r),Me(l,s)}return nn(e,[{key:"componentDidMount",value:function(){if(k.canUseDOM){H||(this.node=Te("div")),this.node.className=this.props.portalClassName;var r=re(this.props.parentSelector);r.appendChild(this.node),!H&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var l=re(r.parentSelector),s=re(this.props.parentSelector);return{prevParent:l,nextParent:s}}},{key:"componentDidUpdate",value:function(r,l,s){if(k.canUseDOM){var y=this.props,a=y.isOpen,v=y.portalClassName;r.portalClassName!==v&&(this.node.className=v);var m=s.prevParent,g=s.nextParent;g!==m&&(m.removeChild(this.node),g.appendChild(this.node)),!(!r.isOpen&&!a)&&!H&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!k.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,l=Date.now(),s=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||l+this.props.closeTimeoutMS);s?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-l)):this.removePortal()}}},{key:"render",value:function(){if(!k.canUseDOM||!H)return null;!this.node&&H&&(this.node=Te("div"));var r=Re();return r(ue.default.createElement(Se.default,xe({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){sn.setElement(r)}}]),e}(Ie.Component);ee.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Ee.default),u.default.instanceOf(k.SafeHTMLCollection),u.default.instanceOf(k.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Ee.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};ee.defaultProps={isOpen:!1,portalClassName:pn,bodyOpenClassName:mn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return ue.default.createElement("div",e,n)},contentElement:function(e,n){return ue.default.createElement("div",e,n)}};ee.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,cn.polyfill)(ee);q.default=ee;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=q,r=l(n);function l(s){return s&&s.__esModule?s:{default:s}}e.default=r.default,t.exports=e.default})(st,le);const hn=Xe(le),vn=({className:t,isOpen:e,onClose:n,children:r})=>i(hn,{className:_(t,"bg-primary-main border-primary-40 absolute inset-y-10 top-1/2 left-1/2 w-11/12 max-w-2xl -translate-x-1/2 -translate-y-1/2 border border-solid p-5"),isOpen:e,bodyOpenClassName:_("ReactModal__Body--open","overflow-hidden"),overlayClassName:_("ReactModal__Overlay","fixed inset-0 bg-neutral-100/80"),onRequestClose:n,children:i("div",{className:"flex h-full w-full flex-col justify-between",children:r})}),yn=({className:t,children:e})=>i("div",{children:i("div",{className:_("flex h-12 w-full justify-end gap-4 overflow-hidden text-ellipsis whitespace-nowrap text-xl leading-8",t),children:e})}),bn=({className:t,children:e})=>i("div",{className:_("w-full grow overflow-y-auto whitespace-normal",t),children:e}),gn=({className:t,children:e})=>i("div",{children:i("div",{className:_("h-8 w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl leading-8",t),children:e})}),We=({className:t,label:e,htmlFor:n,children:r})=>b("div",{className:_("flex flex-col",t),children:[i("label",{className:"text-18-semi block text-neutral-100/70",htmlFor:n,children:e}),r]}),Tn=({className:t,children:e,buttonLabel:n,onClick:r,title:l,icon:s})=>b(ge,{className:_("relative flex flex-col justify-around px-6",t),children:[n&&r&&i(B,{className:"absolute top-5 right-0",color:"secondary",onClick:r,children:n}),i(Ze,{className:"absolute bottom-0 right-3 p-0",size:"sm",src:s,alt:l}),i("p",{className:"text-neutral-10/70 text-18-semi",children:l}),e]}),Rn="/assets/speed-2e700a1d.svg",Pn="/assets/stake-b818f9c4.svg",An="/assets/vp-1865c4bf.svg",On=({className:t,label:e,checked:n,onChange:r})=>{const l=L.useId();return i(We,{className:t,label:e,children:b("label",{className:"flex cursor-pointer items-center justify-around gap-1 rounded border p-1",htmlFor:l,children:[i("input",{type:"checkbox",id:l,className:_("peer sr-only"),checked:n,onChange:r}),i("div",{className:"peer-checked:bg-passed w-1/2 rounded text-center",children:"OK"}),i("div",{className:"bg-rejected w-1/2 rounded text-center peer-checked:bg-inherit",children:"NG"})]})})},Cn=({className:t,label:e,placeholder:n,value:r,onMaxClick:l,onChange:s})=>{const y=L.useId();return b(We,{className:_("relative",t),label:e,htmlFor:y,children:[i("input",{type:"number",id:y,className:_("text-18-medium placeholder:text-18-medium placeholder:text-neutral-80 bg-primary-main appearance-textfield rounded border border-solid border-neutral-100 p-1 text-neutral-100 outline-none"),placeholder:n,value:r,onChange:s}),i("button",{type:"button",className:"text-18-wide absolute right-2 bottom-1 text-neutral-100",onClick:l,children:"MAX"})]})},wn="/assets/vote-for-site-e1d95598.svg",_n=({className:t,children:e,url:n,maxVp:r,onClick:l,isOpen:s,onClose:y,onVote:a})=>{const[v,m]=L.useState(!1),g=M=>{m(M.target.checked)},[d,h]=L.useState(""),O=M=>{h(M.target.value)},C=()=>{h(r.toString())},E=M=>{m(!1),h(""),y(M)};return b(Qe,{children:[i(B,{className:t,color:"secondary",onClick:l,children:e}),b(vn,{className:"h-[350px]",isOpen:s,onClose:E,children:[i(gn,{className:"h-14",children:i(tt,{src:wn,alt:"new creative"})}),i(bn,{className:"flex items-center",children:b("div",{className:"my-auto grid w-full grid-cols-3 gap-12",children:[b("div",{className:"col-span-3 flex flex-col",children:[i("div",{className:"text-18-semi text-neutral-100/70",children:"Site URL"}),i("div",{className:"text-18-semi text-neutral-100",children:n})]}),i(On,{className:"col-span-1",label:"What’s your Vote?",checked:v,onChange:g}),i(Cn,{className:"col-span-2",label:"Choose Amount of Voting Power",placeholder:"Enter Voting Power",value:d,onMaxClick:C,onChange:O})]})}),b(yn,{children:[i(B,{color:"neutral",onClick:E,children:"CANCEL"}),i(B,{color:"secondary",onClick:M=>{a(v,Number(d)),E(M)},children:"VOTE"})]})]})]})},Nn=t=>{const e=new Date,n=Math.abs(Math.round((e.getTime()-t.getTime())/1e3)),r=Math.floor(n/3600),l=Math.floor(n%3600/60),s=n%60,y=r>0?`${r}h `:"",a=l>0?`${l}m `:"",v=`${s}s`;return`${y}${a}${v}`},Dn=({className:t,id:e,url:n,createdAt:r,expires:l,status:s,ok:y,ng:a,onCopyTag:v,maxVp:m,onVote:g})=>{const d=L.useMemo(()=>s==="process"&&l!==void 0&&g!==void 0,[s,l,g]),h=L.useMemo(()=>s==="passed"&&v,[v,s]),[O,C]=L.useState(!1),E=()=>C(!0),U=()=>C(!1);return b("div",{className:_("flex flex-col",t),children:[b(ge,{className:"flex",children:[b("div",{className:_("px-2",d?"w-1/4":"w-1/3"),children:[i("div",{className:"text-18-semi text-neutral-10/70",children:"Site ID"}),i("div",{className:"text-18-bold text-neutral-10",children:e})]}),b("div",{className:_("px-2",d?"w-1/4":"w-1/3"),children:[i("div",{className:"text-18-semi text-neutral-10/70",children:"Site URL"}),i("div",{className:"text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap",children:n})]}),b("div",{className:_("px-2",d?"w-1/4":"w-1/3"),children:[i("div",{className:"text-18-semi text-neutral-10/70",children:"Created At"}),i("div",{className:"text-18-bold text-neutral-10",children:r.toLocaleString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(/-/g,"/").replace("T"," ")})]}),d&&b("div",{className:"w-1/4 px-2",children:[i("div",{className:"text-18-semi text-neutral-10/70",children:"Expires"}),i("div",{className:"text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap",children:Nn(l)})]})]}),b("div",{className:"flex",children:[b(ve,{className:_("flex justify-between",h?"w-3/4":"w-full"),color:s,children:[b("div",{children:["VOTE IN ",s]}),b("div",{children:[i("span",{children:"OK"}),b("span",{children:[y,"%"]}),i("span",{children:"NG"}),b("span",{children:[a,"%"]})]})]}),h&&i(B,{className:"h-12 w-1/4",color:"neutral",onClick:v,children:"COPY AD TAG"}),d&&i(_n,{url:n,onClick:E,isOpen:O,onClose:U,maxVp:m,onVote:g,children:"VOTE"})]})]})},Fn="/assets/voting-list-of-sites-0a89dd8d.svg";export{Mn as C,We as F,vn as M,Tn as O,Pn as S,tt as T,An as V,gn as a,bn as b,yn as c,Rn as d,Fn as e,Dn as f,ae as p};