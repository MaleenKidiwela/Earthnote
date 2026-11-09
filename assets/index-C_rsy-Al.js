var Qx=Object.defineProperty;var Jx=(t,e,n)=>e in t?Qx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var wp=(t,e,n)=>Jx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Zg={exports:{}},$u={},Qg={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),ey=Symbol.for("react.portal"),ty=Symbol.for("react.fragment"),ny=Symbol.for("react.strict_mode"),iy=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),sy=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),ay=Symbol.for("react.suspense"),ly=Symbol.for("react.memo"),uy=Symbol.for("react.lazy"),Tp=Symbol.iterator;function cy(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var Jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},e0=Object.assign,t0={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=t0,this.updater=n||Jg}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function n0(){}n0.prototype=Ks.prototype;function $f(t,e,n){this.props=t,this.context=e,this.refs=t0,this.updater=n||Jg}var qf=$f.prototype=new n0;qf.constructor=$f;e0(qf,Ks.prototype);qf.isPureReactComponent=!0;var Ap=Array.isArray,i0=Object.prototype.hasOwnProperty,Kf={current:null},r0={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)i0.call(e,i)&&!r0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:da,type:t,key:s,ref:o,props:r,_owner:Kf.current}}function hy(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zf(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function fy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cp=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fy(""+t.key):e.toString(36)}function gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case ey:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Rc(o,0):i,Ap(r)?(n="",t!=null&&(n=t.replace(Cp,"$&/")+"/"),gl(r,e,n,"",function(u){return u})):r!=null&&(Zf(r)&&(r=hy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ap(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Rc(s,a);o+=gl(s,e,n,l,r)}else if(l=cy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Rc(s,a++),o+=gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var i=[],r=0;return gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function dy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},_l={transition:null},py={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:_l,ReactCurrentOwner:Kf};function o0(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!Zf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Ks;ke.Fragment=ty;ke.Profiler=iy;ke.PureComponent=$f;ke.StrictMode=ny;ke.Suspense=ay;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;ke.act=o0;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=e0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)i0.call(e,l)&&!r0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:da,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:sy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ry,_context:t},t.Consumer=t};ke.createElement=s0;ke.createFactory=function(t){var e=s0.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:oy,render:t}};ke.isValidElement=Zf;ke.lazy=function(t){return{$$typeof:uy,_payload:{_status:-1,_result:t},_init:dy}};ke.memo=function(t,e){return{$$typeof:ly,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};ke.unstable_act=o0;ke.useCallback=function(t,e){return rn.current.useCallback(t,e)};ke.useContext=function(t){return rn.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};ke.useEffect=function(t,e){return rn.current.useEffect(t,e)};ke.useId=function(){return rn.current.useId()};ke.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return rn.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};ke.useRef=function(t){return rn.current.useRef(t)};ke.useState=function(t){return rn.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return rn.current.useTransition()};ke.version="18.3.1";Qg.exports=ke;var we=Qg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=we,gy=Symbol.for("react.element"),_y=Symbol.for("react.fragment"),vy=Object.prototype.hasOwnProperty,xy=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yy={key:!0,ref:!0,__self:!0,__source:!0};function a0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vy.call(e,i)&&!yy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gy,type:t,key:s,ref:o,props:r,_owner:xy.current}}$u.Fragment=_y;$u.jsx=a0;$u.jsxs=a0;Zg.exports=$u;var O=Zg.exports,l0={exports:{}},Rn={},u0={exports:{}},c0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,q){var Q=P.length;P.push(q);e:for(;0<Q;){var ie=Q-1>>>1,Ee=P[ie];if(0<r(Ee,q))P[ie]=q,P[Q]=Ee,Q=ie;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var q=P[0],Q=P.pop();if(Q!==q){P[0]=Q;e:for(var ie=0,Ee=P.length,ze=Ee>>>1;ie<ze;){var Y=2*(ie+1)-1,ne=P[Y],he=Y+1,le=P[he];if(0>r(ne,Q))he<Ee&&0>r(le,ne)?(P[ie]=le,P[he]=Q,ie=he):(P[ie]=ne,P[Y]=Q,ie=Y);else if(he<Ee&&0>r(le,Q))P[ie]=le,P[he]=Q,ie=he;else break e}}return q}function r(P,q){var Q=P.sortIndex-q.sortIndex;return Q!==0?Q:P.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=P)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function S(P){if(y=!1,g(P),!_)if(n(l)!==null)_=!0,k(b);else{var q=n(u);q!==null&&$(S,q.startTime-P)}}function b(P,q){_=!1,y&&(y=!1,d(R),R=-1),p=!0;var Q=f;try{for(g(q),h=n(l);h!==null&&(!(h.expirationTime>q)||P&&!E());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,f=h.priorityLevel;var Ee=ie(h.expirationTime<=q);q=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&i(l),g(q)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var Y=n(u);Y!==null&&$(S,Y.startTime-q),ze=!1}return ze}finally{h=null,f=Q,p=!1}}var C=!1,T=null,R=-1,X=5,x=-1;function E(){return!(t.unstable_now()-x<X)}function H(){if(T!==null){var P=t.unstable_now();x=P;var q=!0;try{q=T(!0,P)}finally{q?z():(C=!1,T=null)}}else C=!1}var z;if(typeof v=="function")z=function(){v(H)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,W=L.port2;L.port1.onmessage=H,z=function(){W.postMessage(null)}}else z=function(){m(H,0)};function k(P){T=P,C||(C=!0,z())}function $(P,q){R=m(function(){P(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,k(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var Q=f;f=q;try{return P()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=f;f=P;try{return q()}finally{f=Q}},t.unstable_scheduleCallback=function(P,q,Q){var ie=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ie+Q:ie):Q=ie,P){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Q+Ee,P={id:c++,callback:q,priorityLevel:P,startTime:Q,expirationTime:Ee,sortIndex:-1},Q>ie?(P.sortIndex=Q,e(u,P),n(l)===null&&P===n(u)&&(y?(d(R),R=-1):y=!0,$(S,Q-ie))):(P.sortIndex=Ee,e(l,P),_||p||(_=!0,k(b))),P},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(P){var q=f;return function(){var Q=f;f=q;try{return P.apply(this,arguments)}finally{f=Q}}}})(c0);u0.exports=c0;var Sy=u0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=we,An=Sy;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h0=new Set,Go={};function es(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Go[t]=e,t=0;t<e.length;t++)h0.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zh=Object.prototype.hasOwnProperty,Ey=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rp={},bp={};function wy(t){return zh.call(bp,t)?!0:zh.call(Rp,t)?!1:Ey.test(t)?bp[t]=!0:(Rp[t]=!0,!1)}function Ty(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ay(t,e,n,i){if(e===null||typeof e>"u"||Ty(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function Jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qf,Jf);Bt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qf,Jf);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qf,Jf);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ed(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ay(e,n,r,i)&&(n=null),i||r===null?wy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),f0=Symbol.for("react.provider"),d0=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),Hh=Symbol.for("react.suspense"),Vh=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),p0=Symbol.for("react.offscreen"),Pp=Symbol.iterator;function io(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,bc;function yo(t){if(bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||""}return`
`+bc+t}var Pc=!1;function Lc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yo(t):""}function Cy(t){switch(t.tag){case 5:return yo(t.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function Gh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case Bh:return"Profiler";case td:return"StrictMode";case Hh:return"Suspense";case Vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case d0:return(t.displayName||"Context")+".Consumer";case f0:return(t._context.displayName||"Context")+".Provider";case nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case id:return e=t.displayName||null,e!==null?e:Gh(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Gh(t(e))}catch{}}return null}function Ry(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gh(e);case 8:return e===td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function m0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function by(t){var e=m0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Aa(t){t._valueTracker||(t._valueTracker=by(t))}function g0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=m0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wh(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _0(t,e){e=e.checked,e!=null&&ed(t,"checked",e,!1)}function jh(t,e){_0(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xh(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xh(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var So=Array.isArray;function Ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(So(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function v0(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Py=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){Py.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function S0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function M0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=S0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ly=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qh(t,e){if(e){if(Ly[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zh=null;function rd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qh=null,Is=null,Fs=null;function Ip(t){if(t=ga(t)){if(typeof Qh!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Ju(e),Qh(t.stateNode,t.type,e))}}function E0(t){Is?Fs?Fs.push(t):Fs=[t]:Is=t}function w0(){if(Is){var t=Is,e=Fs;if(Fs=Is=null,Ip(t),e)for(t=0;t<e.length;t++)Ip(e[t])}}function T0(t,e){return t(e)}function A0(){}var Dc=!1;function C0(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return T0(t,e,n)}finally{Dc=!1,(Is!==null||Fs!==null)&&(A0(),w0())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ju(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Jh=!1;if(Ii)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Jh=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Jh=!1}function Dy(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Co=!1,Ul=null,Nl=!1,ef=null,Uy={onError:function(t){Co=!0,Ul=t}};function Ny(t,e,n,i,r,s,o,a,l){Co=!1,Ul=null,Dy.apply(Uy,arguments)}function Iy(t,e,n,i,r,s,o,a,l){if(Ny.apply(this,arguments),Co){if(Co){var u=Ul;Co=!1,Ul=null}else throw Error(te(198));Nl||(Nl=!0,ef=u)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(t){if(ts(t)!==t)throw Error(te(188))}function Fy(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fp(r),t;if(s===i)return Fp(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function b0(t){return t=Fy(t),t!==null?P0(t):null}function P0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=P0(t);if(e!==null)return e;t=t.sibling}return null}var L0=An.unstable_scheduleCallback,Op=An.unstable_cancelCallback,Oy=An.unstable_shouldYield,ky=An.unstable_requestPaint,xt=An.unstable_now,zy=An.unstable_getCurrentPriorityLevel,sd=An.unstable_ImmediatePriority,D0=An.unstable_UserBlockingPriority,Il=An.unstable_NormalPriority,By=An.unstable_LowPriority,U0=An.unstable_IdlePriority,qu=null,fi=null;function Hy(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(qu,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:Wy,Vy=Math.log,Gy=Math.LN2;function Wy(t){return t>>>=0,t===0?32:31-(Vy(t)/Gy|0)|0}var Ra=64,ba=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Mo(a):(s&=o,s!==0&&(i=Mo(s)))}else o=n&~r,o!==0?i=Mo(o):s!==0&&(i=Mo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function jy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=jy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function N0(){var t=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function Yy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function I0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var F0,ad,O0,k0,z0,nf=!1,Pa=[],or=null,ar=null,lr=null,Xo=new Map,Yo=new Map,Ji=[],$y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kp(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function so(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function qy(t,e,n,i,r){switch(e){case"focusin":return or=so(or,t,e,n,i,r),!0;case"dragenter":return ar=so(ar,t,e,n,i,r),!0;case"mouseover":return lr=so(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xo.set(s,so(Xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Yo.set(s,so(Yo.get(s)||null,t,e,n,i,r)),!0}return!1}function B0(t){var e=Ir(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=R0(n),e!==null){t.blockedOn=e,z0(t.priority,function(){O0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zh=i,n.target.dispatchEvent(i),Zh=null}else return e=ga(n),e!==null&&ad(e),t.blockedOn=n,!1;e.shift()}return!0}function zp(t,e,n){vl(t)&&n.delete(e)}function Ky(){nf=!1,or!==null&&vl(or)&&(or=null),ar!==null&&vl(ar)&&(ar=null),lr!==null&&vl(lr)&&(lr=null),Xo.forEach(zp),Yo.forEach(zp)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,Ky)))}function $o(t){function e(r){return oo(r,t)}if(0<Pa.length){oo(Pa[0],t);for(var n=1;n<Pa.length;n++){var i=Pa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&oo(or,t),ar!==null&&oo(ar,t),lr!==null&&oo(lr,t),Xo.forEach(e),Yo.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&Ji.shift()}var Os=Bi.ReactCurrentBatchConfig,Ol=!0;function Zy(t,e,n,i){var r=tt,s=Os.transition;Os.transition=null;try{tt=1,ld(t,e,n,i)}finally{tt=r,Os.transition=s}}function Qy(t,e,n,i){var r=tt,s=Os.transition;Os.transition=null;try{tt=4,ld(t,e,n,i)}finally{tt=r,Os.transition=s}}function ld(t,e,n,i){if(Ol){var r=rf(t,e,n,i);if(r===null)Gc(t,e,i,kl,n),kp(t,i);else if(qy(r,t,e,n,i))i.stopPropagation();else if(kp(t,i),e&4&&-1<$y.indexOf(t)){for(;r!==null;){var s=ga(r);if(s!==null&&F0(s),s=rf(t,e,n,i),s===null&&Gc(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gc(t,e,i,null,n)}}var kl=null;function rf(t,e,n,i){if(kl=null,t=rd(i),t=Ir(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function H0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zy()){case sd:return 1;case D0:return 4;case Il:case By:return 16;case U0:return 536870912;default:return 16}default:return 16}}var nr=null,ud=null,xl=null;function V0(){if(xl)return xl;var t,e=ud,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return xl=r.slice(t,1<i?1-i:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function Bp(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:Bp,this.isPropagationStopped=Bp,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=bn(Zs),ma=mt({},Zs,{view:0,detail:0}),Jy=bn(ma),Nc,Ic,ao,Ku=mt({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Nc=t.screenX-ao.screenX,Ic=t.screenY-ao.screenY):Ic=Nc=0,ao=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Hp=bn(Ku),eS=mt({},Ku,{dataTransfer:0}),tS=bn(eS),nS=mt({},ma,{relatedTarget:0}),Fc=bn(nS),iS=mt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=bn(iS),sS=mt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oS=bn(sS),aS=mt({},Zs,{data:0}),Vp=bn(aS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cS[t])?!!e[t]:!1}function hd(){return hS}var fS=mt({},ma,{key:function(t){if(t.key){var e=lS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hd,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dS=bn(fS),pS=mt({},Ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=bn(pS),mS=mt({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hd}),gS=bn(mS),_S=mt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=bn(_S),xS=mt({},Ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=bn(xS),SS=[9,13,27,32],fd=Ii&&"CompositionEvent"in window,Ro=null;Ii&&"documentMode"in document&&(Ro=document.documentMode);var MS=Ii&&"TextEvent"in window&&!Ro,G0=Ii&&(!fd||Ro&&8<Ro&&11>=Ro),Wp=" ",jp=!1;function W0(t,e){switch(t){case"keyup":return SS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function ES(t,e){switch(t){case"compositionend":return j0(e);case"keypress":return e.which!==32?null:(jp=!0,Wp);case"textInput":return t=e.data,t===Wp&&jp?null:t;default:return null}}function wS(t,e){if(Ms)return t==="compositionend"||!fd&&W0(t,e)?(t=V0(),xl=ud=nr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G0&&e.locale!=="ko"?null:e.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TS[t.type]:e==="textarea"}function X0(t,e,n,i){E0(i),e=zl(e,"onChange"),0<e.length&&(n=new cd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var bo=null,qo=null;function AS(t){i_(t,0)}function Zu(t){var e=Ts(t);if(g0(e))return t}function CS(t,e){if(t==="change")return e}var Y0=!1;if(Ii){var Oc;if(Ii){var kc="oninput"in document;if(!kc){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),kc=typeof Yp.oninput=="function"}Oc=kc}else Oc=!1;Y0=Oc&&(!document.documentMode||9<document.documentMode)}function $p(){bo&&(bo.detachEvent("onpropertychange",$0),qo=bo=null)}function $0(t){if(t.propertyName==="value"&&Zu(qo)){var e=[];X0(e,qo,t,rd(t)),C0(AS,e)}}function RS(t,e,n){t==="focusin"?($p(),bo=e,qo=n,bo.attachEvent("onpropertychange",$0)):t==="focusout"&&$p()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zu(qo)}function PS(t,e){if(t==="click")return Zu(e)}function LS(t,e){if(t==="input"||t==="change")return Zu(e)}function DS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:DS;function Ko(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zh.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,e){var n=qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qp(n)}}function q0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?q0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function K0(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function US(t){var e=K0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&q0(n.ownerDocument.documentElement,n)){if(i!==null&&dd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kp(n,s);var o=Kp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NS=Ii&&"documentMode"in document&&11>=document.documentMode,Es=null,sf=null,Po=null,of=!1;function Zp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||Es==null||Es!==Dl(i)||(i=Es,"selectionStart"in i&&dd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Po&&Ko(Po,i)||(Po=i,i=zl(sf,"onSelect"),0<i.length&&(e=new cd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},zc={},Z0={};Ii&&(Z0=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Qu(t){if(zc[t])return zc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Z0)return zc[t]=e[n];return t}var Q0=Qu("animationend"),J0=Qu("animationiteration"),e_=Qu("animationstart"),t_=Qu("transitionend"),n_=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){n_.set(t,e),es(e,[t])}for(var Bc=0;Bc<Qp.length;Bc++){var Hc=Qp[Bc],IS=Hc.toLowerCase(),FS=Hc[0].toUpperCase()+Hc.slice(1);xr(IS,"on"+FS)}xr(Q0,"onAnimationEnd");xr(J0,"onAnimationIteration");xr(e_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(t_,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Jp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Iy(i,e,void 0,t),t.currentTarget=null}function i_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,u),s=l}}}if(Nl)throw t=ef,Nl=!1,ef=null,t}function ut(t,e){var n=e[hf];n===void 0&&(n=e[hf]=new Set);var i=t+"__bubble";n.has(i)||(r_(e,t,2,!1),n.add(i))}function Vc(t,e,n){var i=0;e&&(i|=4),r_(n,t,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[Ua]){t[Ua]=!0,h0.forEach(function(n){n!=="selectionchange"&&(OS.has(n)||Vc(n,!1,t),Vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,Vc("selectionchange",!1,e))}}function r_(t,e,n,i){switch(H0(e)){case 1:var r=Zy;break;case 4:r=Qy;break;default:r=ld}n=r.bind(null,e,n,t),r=void 0,!Jh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}C0(function(){var u=s,c=rd(n),h=[];e:{var f=n_.get(t);if(f!==void 0){var p=cd,_=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":p=dS;break;case"focusin":_="focus",p=Fc;break;case"focusout":_="blur",p=Fc;break;case"beforeblur":case"afterblur":p=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gS;break;case Q0:case J0:case e_:p=rS;break;case t_:p=vS;break;case"scroll":p=Jy;break;case"wheel":p=yS;break;case"copy":case"cut":case"paste":p=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gp}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var v=u,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=jo(v,d),S!=null&&y.push(Qo(v,S,g)))),m)break;v=v.return}0<y.length&&(f=new p(f,_,null,n,c),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Zh&&(_=n.relatedTarget||n.fromElement)&&(Ir(_)||_[Fi]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Ir(_):null,_!==null&&(m=ts(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Hp,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Gp,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?f:Ts(p),g=_==null?f:Ts(_),f=new y(S,v+"leave",p,n,c),f.target=m,f.relatedTarget=g,S=null,Ir(c)===u&&(y=new y(d,v+"enter",_,n,c),y.target=g,y.relatedTarget=m,S=y),m=S,p&&_)t:{for(y=p,d=_,v=0,g=y;g;g=rs(g))v++;for(g=0,S=d;S;S=rs(S))g++;for(;0<v-g;)y=rs(y),v--;for(;0<g-v;)d=rs(d),g--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=rs(y),d=rs(d)}y=null}else y=null;p!==null&&em(h,f,p,y,!1),_!==null&&m!==null&&em(h,m,_,y,!0)}}e:{if(f=u?Ts(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=CS;else if(Xp(f))if(Y0)b=LS;else{b=bS;var C=RS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=PS);if(b&&(b=b(t,u))){X0(h,b,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Xh(f,"number",f.value)}switch(C=u?Ts(u):window,t){case"focusin":(Xp(C)||C.contentEditable==="true")&&(Es=C,sf=u,Po=null);break;case"focusout":Po=sf=Es=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,Zp(h,n,c);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":Zp(h,n,c)}var T;if(fd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ms?W0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(G0&&n.locale!=="ko"&&(Ms||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ms&&(T=V0()):(nr=c,ud="value"in nr?nr.value:nr.textContent,Ms=!0)),C=zl(u,R),0<C.length&&(R=new Vp(R,t,null,n,c),h.push({event:R,listeners:C}),T?R.data=T:(T=j0(n),T!==null&&(R.data=T)))),(T=MS?ES(t,n):wS(t,n))&&(u=zl(u,"onBeforeInput"),0<u.length&&(c=new Vp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}i_(h,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jo(t,n),s!=null&&i.unshift(Qo(t,s,r)),s=jo(t,e),s!=null&&i.push(Qo(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function em(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=jo(n,s),l!=null&&o.unshift(Qo(n,l,a))):r||(l=jo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function tm(t){return(typeof t=="string"?t:""+t).replace(kS,`
`).replace(zS,"")}function Na(t,e,n){if(e=tm(e),tm(t)!==e&&n)throw Error(te(425))}function Bl(){}var af=null,lf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(t){return nm.resolve(null).then(t).catch(VS)}:cf;function VS(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$o(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$o(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),li="__reactFiber$"+Qs,Jo="__reactProps$"+Qs,Fi="__reactContainer$"+Qs,hf="__reactEvents$"+Qs,GS="__reactListeners$"+Qs,WS="__reactHandles$"+Qs;function Ir(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=im(t);t!==null;){if(n=t[li])return n;t=im(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[li]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Ju(t){return t[Jo]||null}var ff=[],As=-1;function yr(t){return{current:t}}function ct(t){0>As||(t.current=ff[As],ff[As]=null,As--)}function ot(t,e){As++,ff[As]=t.current,t.current=e}var mr={},Xt=yr(mr),dn=yr(!1),Wr=mr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Hl(){ct(dn),ct(Xt)}function rm(t,e,n){if(Xt.current!==mr)throw Error(te(168));ot(Xt,e),ot(dn,n)}function s_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Ry(t)||"Unknown",r));return mt({},n,i)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Wr=Xt.current,ot(Xt,t),ot(dn,dn.current),!0}function sm(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=s_(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,ct(dn),ct(Xt),ot(Xt,t)):ct(dn),ot(dn,n)}var wi=null,ec=!1,jc=!1;function o_(t){wi===null?wi=[t]:wi.push(t)}function jS(t){ec=!0,o_(t)}function Sr(){if(!jc&&wi!==null){jc=!0;var t=0,e=tt;try{var n=wi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,ec=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),L0(sd,Sr),r}finally{tt=e,jc=!1}}return null}var Cs=[],Rs=0,Gl=null,Wl=0,Un=[],Nn=0,jr=null,Ai=1,Ci="";function Pr(t,e){Cs[Rs++]=Wl,Cs[Rs++]=Gl,Gl=t,Wl=e}function a_(t,e,n){Un[Nn++]=Ai,Un[Nn++]=Ci,Un[Nn++]=jr,jr=t;var i=Ai;t=Ci;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ai=1<<32-ei(e)+r|n<<r|i,Ci=s+t}else Ai=1<<s|n<<r|i,Ci=t}function pd(t){t.return!==null&&(Pr(t,1),a_(t,1,0))}function md(t){for(;t===Gl;)Gl=Cs[--Rs],Cs[Rs]=null,Wl=Cs[--Rs],Cs[Rs]=null;for(;t===jr;)jr=Un[--Nn],Un[Nn]=null,Ci=Un[--Nn],Un[Nn]=null,Ai=Un[--Nn],Un[Nn]=null}var Tn=null,wn=null,ht=!1,Zn=null;function l_(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(ht){var e=wn;if(e){var n=e;if(!om(t,e)){if(df(t))throw Error(te(418));e=ur(n.nextSibling);var i=Tn;e&&om(t,e)?l_(i,n):(t.flags=t.flags&-4097|2,ht=!1,Tn=t)}}else{if(df(t))throw Error(te(418));t.flags=t.flags&-4097|2,ht=!1,Tn=t}}}function am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Ia(t){if(t!==Tn)return!1;if(!ht)return am(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=wn)){if(df(t))throw u_(),Error(te(418));for(;e;)l_(t,e),e=ur(e.nextSibling)}if(am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?ur(t.stateNode.nextSibling):null;return!0}function u_(){for(var t=wn;t;)t=ur(t.nextSibling)}function Gs(){wn=Tn=null,ht=!1}function gd(t){Zn===null?Zn=[t]:Zn.push(t)}var XS=Bi.ReactCurrentBatchConfig;function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lm(t){var e=t._init;return e(t._payload)}function c_(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=dr(d,v),d.index=0,d.sibling=null,d}function s(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,g,S){return v===null||v.tag!==6?(v=Qc(g,d.mode,S),v.return=d,v):(v=r(v,g),v.return=d,v)}function l(d,v,g,S){var b=g.type;return b===Ss?c(d,v,g.props.children,S,g.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Zi&&lm(b)===v.type)?(S=r(v,g.props),S.ref=lo(d,v,g),S.return=d,S):(S=Cl(g.type,g.key,g.props,null,d.mode,S),S.ref=lo(d,v,g),S.return=d,S)}function u(d,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Jc(g,d.mode,S),v.return=d,v):(v=r(v,g.children||[]),v.return=d,v)}function c(d,v,g,S,b){return v===null||v.tag!==7?(v=zr(g,d.mode,S,b),v.return=d,v):(v=r(v,g),v.return=d,v)}function h(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Qc(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ta:return g=Cl(v.type,v.key,v.props,null,d.mode,g),g.ref=lo(d,null,v),g.return=d,g;case ys:return v=Jc(v,d.mode,g),v.return=d,v;case Zi:var S=v._init;return h(d,S(v._payload),g)}if(So(v)||io(v))return v=zr(v,d.mode,g,null),v.return=d,v;Fa(d,v)}return null}function f(d,v,g,S){var b=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(d,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ta:return g.key===b?l(d,v,g,S):null;case ys:return g.key===b?u(d,v,g,S):null;case Zi:return b=g._init,f(d,v,b(g._payload),S)}if(So(g)||io(g))return b!==null?null:c(d,v,g,S,null);Fa(d,g)}return null}function p(d,v,g,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,a(v,d,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ta:return d=d.get(S.key===null?g:S.key)||null,l(v,d,S,b);case ys:return d=d.get(S.key===null?g:S.key)||null,u(v,d,S,b);case Zi:var C=S._init;return p(d,v,g,C(S._payload),b)}if(So(S)||io(S))return d=d.get(g)||null,c(v,d,S,b,null);Fa(v,S)}return null}function _(d,v,g,S){for(var b=null,C=null,T=v,R=v=0,X=null;T!==null&&R<g.length;R++){T.index>R?(X=T,T=null):X=T.sibling;var x=f(d,T,g[R],S);if(x===null){T===null&&(T=X);break}t&&T&&x.alternate===null&&e(d,T),v=s(x,v,R),C===null?b=x:C.sibling=x,C=x,T=X}if(R===g.length)return n(d,T),ht&&Pr(d,R),b;if(T===null){for(;R<g.length;R++)T=h(d,g[R],S),T!==null&&(v=s(T,v,R),C===null?b=T:C.sibling=T,C=T);return ht&&Pr(d,R),b}for(T=i(d,T);R<g.length;R++)X=p(T,d,R,g[R],S),X!==null&&(t&&X.alternate!==null&&T.delete(X.key===null?R:X.key),v=s(X,v,R),C===null?b=X:C.sibling=X,C=X);return t&&T.forEach(function(E){return e(d,E)}),ht&&Pr(d,R),b}function y(d,v,g,S){var b=io(g);if(typeof b!="function")throw Error(te(150));if(g=b.call(g),g==null)throw Error(te(151));for(var C=b=null,T=v,R=v=0,X=null,x=g.next();T!==null&&!x.done;R++,x=g.next()){T.index>R?(X=T,T=null):X=T.sibling;var E=f(d,T,x.value,S);if(E===null){T===null&&(T=X);break}t&&T&&E.alternate===null&&e(d,T),v=s(E,v,R),C===null?b=E:C.sibling=E,C=E,T=X}if(x.done)return n(d,T),ht&&Pr(d,R),b;if(T===null){for(;!x.done;R++,x=g.next())x=h(d,x.value,S),x!==null&&(v=s(x,v,R),C===null?b=x:C.sibling=x,C=x);return ht&&Pr(d,R),b}for(T=i(d,T);!x.done;R++,x=g.next())x=p(T,d,R,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?R:x.key),v=s(x,v,R),C===null?b=x:C.sibling=x,C=x);return t&&T.forEach(function(H){return e(d,H)}),ht&&Pr(d,R),b}function m(d,v,g,S){if(typeof g=="object"&&g!==null&&g.type===Ss&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ta:e:{for(var b=g.key,C=v;C!==null;){if(C.key===b){if(b=g.type,b===Ss){if(C.tag===7){n(d,C.sibling),v=r(C,g.props.children),v.return=d,d=v;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Zi&&lm(b)===C.type){n(d,C.sibling),v=r(C,g.props),v.ref=lo(d,C,g),v.return=d,d=v;break e}n(d,C);break}else e(d,C);C=C.sibling}g.type===Ss?(v=zr(g.props.children,d.mode,S,g.key),v.return=d,d=v):(S=Cl(g.type,g.key,g.props,null,d.mode,S),S.ref=lo(d,v,g),S.return=d,d=S)}return o(d);case ys:e:{for(C=g.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=r(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Jc(g,d.mode,S),v.return=d,d=v}return o(d);case Zi:return C=g._init,m(d,v,C(g._payload),S)}if(So(g))return _(d,v,g,S);if(io(g))return y(d,v,g,S);Fa(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,g),v.return=d,d=v):(n(d,v),v=Qc(g,d.mode,S),v.return=d,d=v),o(d)):n(d,v)}return m}var Ws=c_(!0),h_=c_(!1),jl=yr(null),Xl=null,bs=null,_d=null;function vd(){_d=bs=Xl=null}function xd(t){var e=jl.current;ct(jl),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Xl=t,_d=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(_d!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Xl===null)throw Error(te(308));bs=t,Xl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Fr=null;function yd(t){Fr===null?Fr=[t]:Fr.push(t)}function f_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function Sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,yd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,od(t,n)}}function um(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=mt({},h,f);break e;case 2:Qi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=h}}function cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var _a={},di=yr(_a),ea=yr(_a),ta=yr(_a);function Or(t){if(t===_a)throw Error(te(174));return t}function Md(t,e){switch(ot(ta,e),ot(ea,t),ot(di,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$h(e,t)}ct(di),ot(di,e)}function js(){ct(di),ct(ea),ct(ta)}function p_(t){Or(ta.current);var e=Or(di.current),n=$h(e,t.type);e!==n&&(ot(ea,t),ot(di,n))}function Ed(t){ea.current===t&&(ct(di),ct(ea))}var ft=yr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xc=[];function wd(){for(var t=0;t<Xc.length;t++)Xc[t]._workInProgressVersionPrimary=null;Xc.length=0}var Ml=Bi.ReactCurrentDispatcher,Yc=Bi.ReactCurrentBatchConfig,Xr=0,dt=null,wt=null,bt=null,ql=!1,Lo=!1,na=0,YS=0;function Ht(){throw Error(te(321))}function Td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function Ad(t,e,n,i,r,s){if(Xr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?ZS:QS,t=n(i,r),Lo){s=0;do{if(Lo=!1,na=0,25<=s)throw Error(te(301));s+=1,bt=wt=null,e.updateQueue=null,Ml.current=JS,t=n(i,r)}while(Lo)}if(Ml.current=Kl,e=wt!==null&&wt.next!==null,Xr=0,bt=wt=dt=null,ql=!1,e)throw Error(te(300));return t}function Cd(){var t=na!==0;return na=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?dt.memoizedState=bt=t:bt=bt.next=t,bt}function Bn(){if(wt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=bt===null?dt.memoizedState:bt.next;if(e!==null)bt=e,wt=t;else{if(t===null)throw Error(te(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},bt===null?dt.memoizedState=bt=t:bt=bt.next=t}return bt}function ia(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=Bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Xr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,dt.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function m_(){}function g_(t,e){var n=dt,i=Bn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Rd(x_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,ra(9,v_.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(te(349));Xr&30||__(n,e,r)}return r}function __(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v_(t,e,n,i){e.value=n,e.getSnapshot=i,y_(e)&&S_(t)}function x_(t,e,n){return n(function(){y_(e)&&S_(t)})}function y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function S_(t){var e=Oi(t,1);e!==null&&ti(e,t,1,-1)}function hm(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=KS.bind(null,dt,t),[e.memoizedState,t]}function ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function M_(){return Bn().memoizedState}function El(t,e,n,i){var r=oi();dt.flags|=t,r.memoizedState=ra(1|e,n,void 0,i===void 0?null:i)}function tc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Td(i,o.deps)){r.memoizedState=ra(e,n,s,i);return}}dt.flags|=t,r.memoizedState=ra(1|e,n,s,i)}function fm(t,e){return El(8390656,8,t,e)}function Rd(t,e){return tc(2048,8,t,e)}function E_(t,e){return tc(4,2,t,e)}function w_(t,e){return tc(4,4,t,e)}function T_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A_(t,e,n){return n=n!=null?n.concat([t]):null,tc(4,4,T_.bind(null,e,t),n)}function bd(){}function C_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function R_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function b_(t,e,n){return Xr&21?(ni(n,e)||(n=N0(),dt.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function $S(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Yc.transition;Yc.transition={};try{t(!1),e()}finally{tt=n,Yc.transition=i}}function P_(){return Bn().memoizedState}function qS(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},L_(t))D_(e,n);else if(n=f_(t,e,n,i),n!==null){var r=Jt();ti(n,t,i,r),U_(n,e,i)}}function KS(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(L_(t))D_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,yd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=f_(t,e,r,i),n!==null&&(r=Jt(),ti(n,t,i,r),U_(n,e,i))}}function L_(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function D_(t,e){Lo=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,od(t,n)}}var Kl={readContext:zn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},ZS={readContext:zn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:fm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,T_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qS.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:hm,useDebugValue:bd,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=hm(!1),e=t[0];return t=$S.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=oi();if(ht){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Pt===null)throw Error(te(349));Xr&30||__(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,fm(x_.bind(null,i,s,t),[t]),i.flags|=2048,ra(9,v_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Pt.identifierPrefix;if(ht){var n=Ci,i=Ai;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QS={readContext:zn,useCallback:C_,useContext:zn,useEffect:Rd,useImperativeHandle:A_,useInsertionEffect:E_,useLayoutEffect:w_,useMemo:R_,useReducer:$c,useRef:M_,useState:function(){return $c(ia)},useDebugValue:bd,useDeferredValue:function(t){var e=Bn();return b_(e,wt.memoizedState,t)},useTransition:function(){var t=$c(ia)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:P_,unstable_isNewReconciler:!1},JS={readContext:zn,useCallback:C_,useContext:zn,useEffect:Rd,useImperativeHandle:A_,useInsertionEffect:E_,useLayoutEffect:w_,useMemo:R_,useReducer:qc,useRef:M_,useState:function(){return qc(ia)},useDebugValue:bd,useDeferredValue:function(t){var e=Bn();return wt===null?e.memoizedState=t:b_(e,wt.memoizedState,t)},useTransition:function(){var t=qc(ia)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:P_,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=fr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ti(e,t,r,i),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=fr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ti(e,t,r,i),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=fr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(ti(e,t,i,n),Sl(e,t,i))}};function dm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,i)||!Ko(r,s):!0}function N_(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=pn(e)?Wr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Vs(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&nc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=pn(e)?Wr:Xt.current,r.context=Vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nc.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",i=e;do n+=Cy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eM=typeof WeakMap=="function"?WeakMap:Map;function I_(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,Rf=i),vf(t,e)},n}function F_(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new eM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=pM.bind(null,t,e,n),e.then(t,t))}function gm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _m(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var tM=Bi.ReactCurrentOwner,cn=!1;function Kt(t,e,n,i){e.child=t===null?h_(e,null,n,i):Ws(e,t.child,n,i)}function vm(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Ad(t,e,n,i,s,r),n=Cd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(ht&&n&&pd(e),e.flags|=1,Kt(t,e,i,r),e.child)}function xm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,O_(t,e,s,i,r)):(t=Cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function O_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ko(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,ki(t,e,r)}return xf(t,e,n,i,r)}function k_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Ls,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Ls,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(Ls,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(Ls,Mn),Mn|=i;return Kt(t,e,r,n),e.child}function z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,i,r){var s=pn(n)?Wr:Xt.current;return s=Vs(e,s),ks(e,r),n=Ad(t,e,n,i,s,r),i=Cd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(ht&&i&&pd(e),e.flags|=1,Kt(t,e,n,r),e.child)}function ym(t,e,n,i,r){if(pn(n)){var s=!0;Vl(e)}else s=!1;if(ks(e,r),e.stateNode===null)wl(t,e),N_(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=pn(n)?Wr:Xt.current,u=Vs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&pm(e,o,i,u),Qi=!1;var f=e.memoizedState;o.state=f,Yl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||dn.current||Qi?(typeof c=="function"&&(gf(e,n,c,i),l=e.memoizedState),(a=Qi||dm(e,n,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,d_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=pn(n)?Wr:Xt.current,l=Vs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&pm(e,o,i,l),Qi=!1,f=e.memoizedState,o.state=f,Yl(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||dn.current||Qi?(typeof p=="function"&&(gf(e,n,p,i),_=e.memoizedState),(u=Qi||dm(e,n,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return yf(t,e,n,i,s,r)}function yf(t,e,n,i,r,s){z_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sm(e,n,!1),ki(t,e,s);i=e.stateNode,tM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ws(e,t.child,null,s),e.child=Ws(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&sm(e,n,!0),e.child}function B_(t){var e=t.stateNode;e.pendingContext?rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rm(t,e.context,!1),Md(t,e.containerInfo)}function Sm(t,e,n,i,r){return Gs(),gd(r),e.flags|=256,Kt(t,e,n,i),e.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function H_(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(ft,r&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sc(o,i,0,null),t=zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mf(n),e.memoizedState=Sf,t):Pd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return nM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sf,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pd(t,e){return e=sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,i){return i!==null&&gd(i),Ws(e,t.child,null,n),t=Pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Kc(Error(te(422))),Oa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sc({mode:"visible",children:i.children},r,0,null),s=zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ws(e,t.child,null,o),e.child.memoizedState=Mf(o),e.memoizedState=Sf,s);if(!(e.mode&1))return Oa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Kc(s,i,void 0),Oa(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),ti(i,t,r,-1))}return Fd(),i=Kc(Error(te(421))),Oa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=mM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=ur(r.nextSibling),Tn=e,ht=!0,Zn=null,t!==null&&(Un[Nn++]=Ai,Un[Nn++]=Ci,Un[Nn++]=jr,Ai=t.id,Ci=t.overflow,jr=e),e=Pd(e,i.children),e.flags|=4096,e)}function Mm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mf(t.return,e,n)}function Zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function V_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mm(t,n,e);else if(t.tag===19)Mm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Zc(e,!0,n,null,s);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iM(t,e,n){switch(e.tag){case 3:B_(e),Gs();break;case 5:p_(e);break;case 1:pn(e.type)&&Vl(e);break;case 4:Md(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?H_(t,e,n):(ot(ft,ft.current&1),t=ki(t,e,n),t!==null?t.sibling:null);ot(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return V_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,k_(t,e,n)}return ki(t,e,n)}var G_,Ef,W_,j_;G_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};W_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(di.current);var s=null;switch(n){case"input":r=Wh(t,r),i=Wh(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Yh(t,r),i=Yh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bl)}qh(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Go.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Go.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};j_=function(t,e,n,i){n!==i&&(e.flags|=4)};function uo(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function rM(t,e,n){var i=e.pendingProps;switch(md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return pn(e.type)&&Hl(),Vt(e),null;case 3:return i=e.stateNode,js(),ct(dn),ct(Xt),wd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(Lf(Zn),Zn=null))),Ef(t,e),Vt(e),null;case 5:Ed(e);var r=Or(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)W_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Vt(e),null}if(t=Or(di.current),Ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Eo.length;r++)ut(Eo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Lp(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Up(i,s),ut("invalid",i)}qh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",""+a]):Go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":Aa(i),Dp(i,s,!0);break;case"textarea":Aa(i),Np(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[Jo]=i,G_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kh(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Eo.length;r++)ut(Eo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Lp(t,i),r=Wh(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Up(t,i),r=Yh(t,i),ut("invalid",t);break;default:r=i}qh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?M0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&y0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wo(t,l):typeof l=="number"&&Wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&ed(t,s,l,o))}switch(n){case"input":Aa(t),Dp(t,i,!1);break;case"textarea":Aa(t),Np(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)j_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Or(ta.current),Or(di.current),Ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Vt(e),null;case 13:if(ct(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&wn!==null&&e.mode&1&&!(e.flags&128))u_(),Gs(),e.flags|=98560,s=!1;else if(s=Ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[li]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Zn!==null&&(Lf(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Tt===0&&(Tt=3):Fd())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return js(),Ef(t,e),t===null&&Zo(e.stateNode.containerInfo),Vt(e),null;case 10:return xd(e.type._context),Vt(e),null;case 17:return pn(e.type)&&Hl(),Vt(e),null;case 19:if(ct(ft),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Ys&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=$l(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Vt(e),null}else 2*xt()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ft.current,ot(ft,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Id(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function sM(t,e){switch(md(e),e.tag){case 1:return pn(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),ct(dn),ct(Xt),wd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ed(e),null;case 13:if(ct(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ft),null;case 4:return js(),null;case 10:return xd(e.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var ka=!1,jt=!1,oM=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function wf(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Em=!1;function aM(t,e){if(af=Ol,t=K0(),dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},Ol=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){_t(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=Em,Em=!1,_}function Do(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wf(e,n,s)}r=r.next}while(r!==i)}}function ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function X_(t){var e=t.alternate;e!==null&&(t.alternate=null,X_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Jo],delete e[hf],delete e[GS],delete e[WS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Y_(t){return t.tag===5||t.tag===3||t.tag===4}function wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var Nt=null,qn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)$_(t,e,n),n=n.sibling}function $_(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(qu,n)}catch{}switch(n.tag){case 5:jt||Ps(n,e);case 6:var i=Nt,r=qn;Nt=null,Wi(t,e,n),Nt=i,qn=r,Nt!==null&&(qn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(qn?(t=Nt,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),$o(t)):Wc(Nt,n.stateNode));break;case 4:i=Nt,r=qn,Nt=n.stateNode.containerInfo,qn=!0,Wi(t,e,n),Nt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wf(n,e,o),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!jt&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Wi(t,e,n),jt=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oM),e.forEach(function(i){var r=gM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,qn=!1;break e;case 3:Nt=a.stateNode.containerInfo,qn=!0;break e;case 4:Nt=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Nt===null)throw Error(te(160));$_(s,o,r),Nt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){_t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q_(e,t),e=e.sibling}function q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ii(t),i&4){try{Do(3,t,t.return),ic(3,t)}catch(y){_t(t,t.return,y)}try{Do(5,t,t.return)}catch(y){_t(t,t.return,y)}}break;case 1:Vn(e,t),ii(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Vn(e,t),ii(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{Wo(r,"")}catch(y){_t(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_0(r,s),Kh(a,o);var u=Kh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?M0(r,h):c==="dangerouslySetInnerHTML"?y0(r,h):c==="children"?Wo(r,h):ed(r,c,h,u)}switch(a){case"input":jh(r,s);break;case"textarea":v0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ns(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[Jo]=s}catch(y){_t(t,t.return,y)}}break;case 6:if(Vn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){_t(t,t.return,y)}}break;case 3:if(Vn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(y){_t(t,t.return,y)}break;case 4:Vn(e,t),ii(t);break;case 13:Vn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ud=xt())),i&4&&Tm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||c,Vn(e,t),jt=u):Vn(e,t),ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(pe=t,c=t.child;c!==null;){for(h=pe=c;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Do(4,f,f.return);break;case 1:Ps(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){_t(i,n,y)}}break;case 5:Ps(f,f.return);break;case 22:if(f.memoizedState!==null){Cm(h);continue}}p!==null?(p.return=f,pe=p):Cm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=S0("display",o))}catch(y){_t(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){_t(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vn(e,t),ii(t),i&4&&Tm(t);break;case 21:break;default:Vn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Y_(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wo(r,""),i.flags&=-33);var s=wm(t);Cf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wm(t);Af(t,a,o);break;default:throw Error(te(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lM(t,e,n){pe=t,K_(t)}function K_(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ka;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=ka;var u=jt;if(ka=o,(jt=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Rm(r):l!==null?(l.return=o,pe=l):Rm(r);for(;s!==null;)pe=s,K_(s),s=s.sibling;pe=r,ka=a,jt=u}Am(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Am(t)}}function Am(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&$o(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}jt||e.flags&512&&Tf(e)}catch(f){_t(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Cm(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Rm(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ic(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Tf(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Tf(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var uM=Math.ceil,Zl=Bi.ReactCurrentDispatcher,Ld=Bi.ReactCurrentOwner,kn=Bi.ReactCurrentBatchConfig,Xe=0,Pt=null,Mt=null,kt=0,Mn=0,Ls=yr(0),Tt=0,sa=null,Yr=0,rc=0,Dd=0,Uo=null,un=null,Ud=0,Ys=1/0,Ei=null,Ql=!1,Rf=null,hr=null,za=!1,ir=null,Jl=0,No=0,bf=null,Tl=-1,Al=0;function Jt(){return Xe&6?xt():Tl!==-1?Tl:Tl=xt()}function fr(t){return t.mode&1?Xe&2&&kt!==0?kt&-kt:XS.transition!==null?(Al===0&&(Al=N0()),Al):(t=tt,t!==0||(t=window.event,t=t===void 0?16:H0(t.type)),t):1}function ti(t,e,n,i){if(50<No)throw No=0,bf=null,Error(te(185));pa(t,n,i),(!(Xe&2)||t!==Pt)&&(t===Pt&&(!(Xe&2)&&(rc|=n),Tt===4&&er(t,kt)),mn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Ys=xt()+500,ec&&Sr()))}function mn(t,e){var n=t.callbackNode;Xy(t,e);var i=Fl(t,t===Pt?kt:0);if(i===0)n!==null&&Op(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Op(n),e===1)t.tag===0?jS(bm.bind(null,t)):o_(bm.bind(null,t)),HS(function(){!(Xe&6)&&Sr()}),n=null;else{switch(I0(i)){case 1:n=sd;break;case 4:n=D0;break;case 16:n=Il;break;case 536870912:n=U0;break;default:n=Il}n=rv(n,Z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z_(t,e){if(Tl=-1,Al=0,Xe&6)throw Error(te(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=Fl(t,t===Pt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=eu(t,i);else{e=i;var r=Xe;Xe|=2;var s=J_();(Pt!==t||kt!==e)&&(Ei=null,Ys=xt()+500,kr(t,e));do try{fM();break}catch(a){Q_(t,a)}while(!0);vd(),Zl.current=s,Xe=r,Mt!==null?e=0:(Pt=null,kt=0,e=Tt)}if(e!==0){if(e===2&&(r=tf(t),r!==0&&(i=r,e=Pf(t,r))),e===1)throw n=sa,kr(t,0),er(t,i),mn(t,xt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!cM(r)&&(e=eu(t,i),e===2&&(s=tf(t),s!==0&&(i=s,e=Pf(t,s))),e===1))throw n=sa,kr(t,0),er(t,i),mn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Lr(t,un,Ei);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Ud+500-xt(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cf(Lr.bind(null,t,un,Ei),e);break}Lr(t,un,Ei);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uM(i/1960))-i,10<i){t.timeoutHandle=cf(Lr.bind(null,t,un,Ei),i);break}Lr(t,un,Ei);break;case 5:Lr(t,un,Ei);break;default:throw Error(te(329))}}}return mn(t,xt()),t.callbackNode===n?Z_.bind(null,t):null}function Pf(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=eu(t,e),t!==2&&(e=un,un=n,e!==null&&Lf(e)),t}function Lf(t){un===null?un=t:un.push.apply(un,t)}function cM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Dd,e&=~rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function bm(t){if(Xe&6)throw Error(te(327));zs();var e=Fl(t,0);if(!(e&1))return mn(t,xt()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var i=tf(t);i!==0&&(e=i,n=Pf(t,i))}if(n===1)throw n=sa,kr(t,0),er(t,e),mn(t,xt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,un,Ei),mn(t,xt()),null}function Nd(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Ys=xt()+500,ec&&Sr())}}function $r(t){ir!==null&&ir.tag===0&&!(Xe&6)&&zs();var e=Xe;Xe|=1;var n=kn.transition,i=tt;try{if(kn.transition=null,tt=1,t)return t()}finally{tt=i,kn.transition=n,Xe=e,!(Xe&6)&&Sr()}}function Id(){Mn=Ls.current,ct(Ls)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BS(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(md(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:js(),ct(dn),ct(Xt),wd();break;case 5:Ed(i);break;case 4:js();break;case 13:ct(ft);break;case 19:ct(ft);break;case 10:xd(i.type._context);break;case 22:case 23:Id()}n=n.return}if(Pt=t,Mt=t=dr(t.current,null),kt=Mn=e,Tt=0,sa=null,Dd=rc=Yr=0,un=Uo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fr=null}return t}function Q_(t,e){do{var n=Mt;try{if(vd(),Ml.current=Kl,ql){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(Xr=0,bt=wt=dt=null,Lo=!1,na=0,Ld.current=null,n===null||n.return===null){Tt=1,sa=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=gm(o);if(p!==null){p.flags&=-257,_m(p,o,a,s,e),p.mode&1&&mm(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){mm(s,u,e),Fd();break e}l=Error(te(426))}}else if(ht&&a.mode&1){var m=gm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),_m(m,o,a,s,e),gd(Xs(l,a));break e}}s=l=Xs(l,a),Tt!==4&&(Tt=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=I_(s,l,e);um(s,d);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hr===null||!hr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=F_(s,a,e);um(s,S);break e}}s=s.return}while(s!==null)}tv(n)}catch(b){e=b,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function J_(){var t=Zl.current;return Zl.current=Kl,t===null?Kl:t}function Fd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||!(Yr&268435455)&&!(rc&268435455)||er(Pt,kt)}function eu(t,e){var n=Xe;Xe|=2;var i=J_();(Pt!==t||kt!==e)&&(Ei=null,kr(t,e));do try{hM();break}catch(r){Q_(t,r)}while(!0);if(vd(),Xe=n,Zl.current=i,Mt!==null)throw Error(te(261));return Pt=null,kt=0,Tt}function hM(){for(;Mt!==null;)ev(Mt)}function fM(){for(;Mt!==null&&!Oy();)ev(Mt)}function ev(t){var e=iv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?tv(t):Mt=e,Ld.current=null}function tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sM(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Mt=null;return}}else if(n=rM(n,e,Mn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Tt===0&&(Tt=5)}function Lr(t,e,n){var i=tt,r=kn.transition;try{kn.transition=null,tt=1,dM(t,e,n,i)}finally{kn.transition=r,tt=i}return null}function dM(t,e,n,i){do zs();while(ir!==null);if(Xe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yy(t,s),t===Pt&&(Mt=Pt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,rv(Il,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=tt;tt=1;var a=Xe;Xe|=4,Ld.current=null,aM(t,n),q_(n,t),US(lf),Ol=!!af,lf=af=null,t.current=n,lM(n),ky(),Xe=a,tt=o,kn.transition=s}else t.current=n;if(za&&(za=!1,ir=t,Jl=r),s=t.pendingLanes,s===0&&(hr=null),Hy(n.stateNode),mn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=Rf,Rf=null,t;return Jl&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===bf?No++:(No=0,bf=t):No=0,Sr(),null}function zs(){if(ir!==null){var t=I0(Jl),e=kn.transition,n=tt;try{if(kn.transition=null,tt=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Jl=0,Xe&6)throw Error(te(331));var r=Xe;for(Xe|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:Do(8,c,s)}var h=c.child;if(h!==null)h.return=c,pe=h;else for(;pe!==null;){c=pe;var f=c.sibling,p=c.return;if(X_(c),c===u){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Do(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,pe=d;break e}pe=s.return}}var v=t.current;for(pe=v;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=v;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ic(9,a)}}catch(b){_t(a,a.return,b)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(Xe=r,Sr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(qu,t)}catch{}i=!0}return i}finally{tt=n,kn.transition=e}}return!1}function Pm(t,e,n){e=Xs(n,e),e=I_(t,e,1),t=cr(t,e,1),e=Jt(),t!==null&&(pa(t,1,e),mn(t,e))}function _t(t,e,n){if(t.tag===3)Pm(t,t,n);else for(;e!==null;){if(e.tag===3){Pm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=Xs(n,t),t=F_(e,t,1),e=cr(e,t,1),t=Jt(),e!==null&&(pa(e,1,t),mn(e,t));break}}e=e.return}}function pM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(kt&n)===n&&(Tt===4||Tt===3&&(kt&130023424)===kt&&500>xt()-Ud?kr(t,0):Dd|=n),mn(t,e)}function nv(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=Jt();t=Oi(t,e),t!==null&&(pa(t,e,n),mn(t,n))}function mM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nv(t,n)}function gM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),nv(t,n)}var iv;iv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,iM(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ht&&e.flags&1048576&&a_(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wl(t,e),t=e.pendingProps;var r=Vs(e,Xt.current);ks(e,n),r=Ad(null,e,i,t,r,n);var s=Cd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sd(e),r.updater=nc,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=yf(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&pd(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vM(i),t=Yn(i,t),r){case 0:e=xf(null,e,i,t,n);break e;case 1:e=ym(null,e,i,t,n);break e;case 11:e=vm(null,e,i,t,n);break e;case 14:e=xm(null,e,i,Yn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),xf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),ym(t,e,i,r,n);case 3:e:{if(B_(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,d_(t,e),Yl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xs(Error(te(423)),e),e=Sm(t,e,i,n,r);break e}else if(i!==r){r=Xs(Error(te(424)),e),e=Sm(t,e,i,n,r);break e}else for(wn=ur(e.stateNode.containerInfo.firstChild),Tn=e,ht=!0,Zn=null,n=h_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),i===r){e=ki(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return p_(e),t===null&&pf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uf(i,r)?o=null:s!==null&&uf(i,s)&&(e.flags|=32),z_(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&pf(e),null;case 13:return H_(t,e,n);case 4:return Md(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ws(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),vm(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(jl,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!dn.current){e=ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=zn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),xm(t,e,i,r,n);case 15:return O_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),wl(t,e),e.tag=1,pn(i)?(t=!0,Vl(e)):t=!1,ks(e,n),N_(e,i,r),_f(e,i,r,n),yf(null,e,i,!0,t,n);case 19:return V_(t,e,n);case 22:return k_(t,e,n)}throw Error(te(156,e.tag))};function rv(t,e){return L0(t,e)}function _M(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new _M(t,e,n,i)}function Od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vM(t){if(typeof t=="function")return Od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nd)return 11;if(t===id)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Od(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return zr(n.children,r,s,e);case td:o=8,r|=8;break;case Bh:return t=On(12,n,e,r|2),t.elementType=Bh,t.lanes=s,t;case Hh:return t=On(13,n,e,r),t.elementType=Hh,t.lanes=s,t;case Vh:return t=On(19,n,e,r),t.elementType=Vh,t.lanes=s,t;case p0:return sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case f0:o=10;break e;case d0:o=9;break e;case nd:o=11;break e;case id:o=14;break e;case Zi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function sc(t,e,n,i){return t=On(22,t,i,e),t.elementType=p0,t.lanes=n,t.stateNode={isHidden:!1},t}function Qc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kd(t,e,n,i,r,s,o,a,l){return t=new xM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(s),t}function yM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sv(t){if(!t)return mr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(pn(n))return s_(t,n,e)}return e}function ov(t,e,n,i,r,s,o,a,l){return t=kd(n,i,!0,t,r,s,o,a,l),t.context=sv(null),n=t.current,i=Jt(),r=fr(n),s=Li(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,pa(t,r,i),mn(t,i),t}function oc(t,e,n,i){var r=e.current,s=Jt(),o=fr(r);return n=sv(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,o),t!==null&&(ti(t,r,o,s),Sl(t,r,o)),o}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zd(t,e){Lm(t,e),(t=t.alternate)&&Lm(t,e)}function SM(){return null}var av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}ac.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));oc(t,e,null,null)};ac.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){oc(null,t,null,null)}),e[Fi]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=k0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&B0(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function MM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=tu(o);s.call(u)}}var o=ov(e,i,t,0,null,!1,!1,"",Dm);return t._reactRootContainer=o,t[Fi]=o.current,Zo(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=tu(l);a.call(u)}}var l=kd(t,0,!1,null,null,!1,!1,"",Dm);return t._reactRootContainer=l,t[Fi]=l.current,Zo(t.nodeType===8?t.parentNode:t),$r(function(){oc(e,l,n,i)}),l}function uc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tu(o);a.call(l)}}oc(e,o,t,r)}else o=MM(n,e,t,r,i);return tu(o)}F0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(od(e,n|1),mn(e,xt()),!(Xe&6)&&(Ys=xt()+500,Sr()))}break;case 13:$r(function(){var i=Oi(t,1);if(i!==null){var r=Jt();ti(i,t,1,r)}}),zd(t,1)}};ad=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=Jt();ti(e,t,134217728,n)}zd(t,134217728)}};O0=function(t){if(t.tag===13){var e=fr(t),n=Oi(t,e);if(n!==null){var i=Jt();ti(n,t,e,i)}zd(t,e)}};k0=function(){return tt};z0=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Qh=function(t,e,n){switch(e){case"input":if(jh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ju(i);if(!r)throw Error(te(90));g0(i),jh(i,r)}}}break;case"textarea":v0(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};T0=Nd;A0=$r;var EM={usingClientEntryPoint:!1,Events:[ga,Ts,Ju,E0,w0,Nd]},co={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wM={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b0(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||SM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{qu=Ba.inject(wM),fi=Ba}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EM;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(te(200));return yM(t,e,null,n)};Rn.createRoot=function(t,e){if(!Hd(t))throw Error(te(299));var n=!1,i="",r=av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kd(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,Zo(t.nodeType===8?t.parentNode:t),new Bd(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=b0(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return $r(t)};Rn.hydrate=function(t,e,n){if(!lc(e))throw Error(te(200));return uc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ov(e,null,t,1,n??null,r,!1,s,o),t[Fi]=e.current,Zo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ac(e)};Rn.render=function(t,e,n){if(!lc(e))throw Error(te(200));return uc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!lc(t))throw Error(te(40));return t._reactRootContainer?($r(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Nd;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!lc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return uc(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lv)}catch(t){console.error(t)}}lv(),l0.exports=Rn;var TM=l0.exports,uv,Um=TM;uv=Um.createRoot,Um.hydrateRoot;function AM({lon0:t,lat0:e,kx:n,kz:i}){return{lon0:t,lat0:e,kx:n,kz:i,toX:r=>(r-t)*n,toZ:r=>-(r-e)*i,fromX:r=>r/n+t,fromZ:r=>-r/i+e}}function cv(t,e,n){const{ncols:i,nrows:r,west:s,south:o,cellsize:a}=t,l=e instanceof Int16Array?e:new Int16Array(e),u=(_,y)=>l[Math.min(r-1,Math.max(0,_))*i+Math.min(i-1,Math.max(0,y))],c=o+r*a,h=s+i*a,f=(_,y)=>{const m=(_-s)/a-.5,d=(c-y)/a-.5;if(m<0||d<0||m>i-1||d>r-1)return null;const v=Math.min(Math.floor(m),i-2),g=Math.min(Math.floor(d),r-2),S=m-v,b=d-g,C=u(g,v)*(1-S)+u(g,v+1)*S,T=u(g+1,v)*(1-S)+u(g+1,v+1)*S;return C*(1-b)+T*b},p=[n.toX(s+a/2),n.toX(h-a/2),n.toZ(c-a/2),n.toZ(o+a/2)];return{meta:t,heights:l,H:u,sample:f,box:p,north:c,east:h}}function CM(t,e,n=1,i=0,r=null){const{west:s,cellsize:o}=t.meta,a=t.H,[l,u,c,h]=r??[0,0,t.meta.ncols-1,t.meta.nrows-1],f=Math.floor((c-l)/n)+1,p=Math.floor((h-u)/n)+1,_=i?2*(f+p)-4:0,y=f*p+_,m=new Float32Array(y*3),d=new Float32Array(y),v=new Float32Array(y*2),g=new Float32Array(y),S=H=>t.north-(H+.5)*o,{ncols:b,nrows:C}=t.meta,T=o*e.kx,R=o*e.kz;let X=0;for(let H=0;H<p;H++){const z=u+H*n,L=e.toZ(S(z)),W=Math.max(0,z-n),k=Math.min(C-1,z+n);for(let $=0;$<f;$++,X++){const P=l+$*n;m[X*3]=e.toX(s+(P+.5)*o),m[X*3+2]=L,d[X]=a(z,P);const q=Math.max(0,P-n),Q=Math.min(b-1,P+n);v[X*2]=(a(z,Q)-a(z,q))/((Q-q)*T),v[X*2+1]=(a(k,P)-a(W,P))/((k-W)*R)}}const x=new Uint32Array(6*((f-1)*(p-1)+_));let E=0;for(let H=0;H<p-1;H++)for(let z=0;z<f-1;z++){const L=H*f+z,W=L+1,k=L+f,$=k+1;x[E++]=L,x[E++]=k,x[E++]=W,x[E++]=W,x[E++]=k,x[E++]=$}if(i){const H=[];for(let L=0;L<f;L++)H.push(L);for(let L=1;L<p;L++)H.push(L*f+f-1);for(let L=f-2;L>=0;L--)H.push((p-1)*f+L);for(let L=p-2;L>=1;L--)H.push(L*f);const z=f*p;H.forEach((L,W)=>{const k=z+W;m.set(m.subarray(L*3,L*3+3),k*3),d[k]=d[L],v[k*2]=v[L*2],v[k*2+1]=v[L*2+1],g[k]=i});for(let L=0;L<H.length;L++){const W=H[L],k=H[(L+1)%H.length],$=z+L,P=z+(L+1)%H.length;x[E++]=W,x[E++]=k,x[E++]=$,x[E++]=k,x[E++]=P,x[E++]=$}}return{position:m,elev:d,grad:v,drop:g,index:x,n:f,m:p}}function RM(t,e,n,i=1){const r=Math.max(i,Math.round(n/i)*i),s=[];for(let o=0;o<e-1;o+=r){const a=Math.min(o+r,o+Math.floor((e-1-o)/i)*i);for(let l=0;l<t-1;l+=r){const u=Math.min(l+r,l+Math.floor((t-1-l)/i)*i);u>l&&a>o&&s.push([l,o,u,a])}}return s}function hv(t,e,n,i,r=0,s=null){const o=CM(e,n,i,r,s),a=new t.BufferGeometry;return a.setAttribute("position",new t.BufferAttribute(o.position,3)),a.setAttribute("elev",new t.BufferAttribute(o.elev,1)),a.setAttribute("grad",new t.BufferAttribute(o.grad,2)),a.setAttribute("drop",new t.BufferAttribute(o.drop,1)),a.setIndex(new t.BufferAttribute(o.index,1)),a.computeBoundingBox(),a.boundingBox.min.y=-60,a.boundingBox.max.y=50,a.boundingSphere=a.boundingBox.getBoundingSphere(new t.Sphere),a}const bM="./pnw/",PM="PYTHONPATH=src .venv/bin/python -m earthnote_data.build_bundle --terrain";class nu extends Error{}async function Nm(t,e,n){var s,o;const i=await n(t);if(i.status===404||(o=(s=i.headers)==null?void 0:s.get("content-type"))!=null&&o.includes("html"))throw new nu(`The map data is missing: ${t}. Build it with:`);if(!i.ok)throw new Error(`Could not load ${t} (HTTP ${i.status})`);const r=await i.arrayBuffer();if(e!=null&&r.byteLength!==e)throw new nu(`The map data is incomplete: ${t} has ${r.byteLength} bytes, expected ${e}. Rebuild it with:`);return r}async function LM(t=bM,e=fetch){var f,p;const n=await e(`${t}manifest.json`);if(!n.ok||(p=(f=n.headers)==null?void 0:f.get("content-type"))!=null&&p.includes("html"))throw new nu("The map data has not been built yet. Build it with:");const i=await n.json(),r=AM(i.projection),s=i.terrain,o=(_,y)=>Nm(`${t}terrain/${_}.bin`,y.ncols*y.nrows*2,e).then(m=>cv(y,m,r)),a={},l=Object.entries({...i.roads,...i.borders}).map(async([_,y])=>{a[_]=new Float32Array(await Nm(`${t}${y.file}`,y.segments*24,e))}),[u,c,h]=await Promise.all([o("outer",s.outer),o("overview",s.overview),e(`${t}${i.places.file}`).then(_=>_.json()),...l]);return{base:t,manifest:i,P:r,outer:u,overview:c,lines:a,places:h,waterUrl:`${t}${i.water.overview.file}`}}const DM="./events/";async function Im(t,e=DM,n=fetch){var s,o;const i=await n(`${e}${t}/event.json`,{cache:"no-cache"});if(!i.ok||(o=(s=i.headers)==null?void 0:s.get("content-type"))!=null&&o.includes("html"))return null;const r=await i.json();return r.base=`${e}${t}/`,r.t0=Date.parse(r.start),r.runList=Object.fromEntries(Object.entries(r.runs).map(([a,l])=>[a,Object.entries(l).map(([u,c])=>({model:a,init:u,time:fv(u),frames:new Set(c.frames),complete:c.complete})).sort((u,c)=>u.time-c.time)])),r.obsRain=new Set(Object.keys(r.obs.rain).map(Number)),r.obsMet=new Set(r.obs.met),r.lastObs=Math.max(-1,...r.obsRain),r}const fv=t=>Date.UTC(+t.slice(0,4),+t.slice(4,6)-1,+t.slice(6,8),+t.slice(8,10)),dv=(t,e)=>t.t0+(e+1)*36e5;function Rl(t,e,n,i="rain"){if(n.mode==="blend"&&(i==="rain"?t.obsRain:t.obsMet).has(e))return{type:"obs"};const r=t.runList[n.model]??[];if(n.mode==="run"){const s=r.find(o=>o.init===n.init);return s!=null&&s.frames.has(e)?{type:"fc",model:n.model,init:s.init}:null}for(let s=r.length-1;s>=0;s--)if(r[s].frames.has(e))return{type:"fc",model:n.model,init:r[s].init};return null}function Df(t,e,n,i){const r=`${i}/k${String(n).padStart(3,"0")}.png?v=${t.version??t.start}`;return e.type==="obs"?`${t.base}obs/${r}${i==="rain"?`&p=${t.obs.rain[n]??""}`:""}`:`${t.base}fc/${e.model}/${e.init}/${r}`}function pv(t,e,n){const i=e.type==="obs"?n==="rain"?t.obs.rainGrid:t.obs.metGrid:t.models[e.model][n==="rain"?"rainGrid":"metGrid"];return t.grids[i]}function UM(t,e){const n=new Float32Array(e);for(let i=0;i<e;i++){const r=t[i*4];n[i]=r===255?NaN:(r/25)**2}return n}function NM(t,e,n){if(e.cols===n.cols&&e.rows===n.rows)return t;const i=new Float32Array(n.cols*n.rows);for(let r=0;r<n.rows;r++){const s=n.north-(r+.5)*n.cell,o=Math.min(e.rows-1,Math.max(0,(e.north-s)/e.cell-.5)),a=Math.min(Math.floor(o),e.rows-2),l=o-a;for(let u=0;u<n.cols;u++){const c=n.west+(u+.5)*n.cell,h=Math.min(e.cols-1,Math.max(0,(c-e.west)/e.cell-.5)),f=Math.min(Math.floor(h),e.cols-2),p=h-f;let _=0,y=0;const m=(d,v,g)=>{const S=t[d*e.cols+v];!Number.isNaN(S)&&g>0&&(_+=S*g,y+=g)};m(a,f,(1-l)*(1-p)),m(a,f+1,(1-l)*p),m(a+1,f,l*(1-p)),m(a+1,f+1,l*p),i[r*n.cols+u]=y>0?_/y:NaN}}return i}async function IM(t,e=fetch){var a;const n=await e(t);if(!n.ok)throw new Error(`HTTP ${n.status} for ${t}`);const i=await createImageBitmap(await n.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),s=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(i.width,i.height):Object.assign(document.createElement("canvas"),{width:i.width,height:i.height})).getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});s.drawImage(i,0,0);const o=s.getImageData(0,0,i.width,i.height).data;return(a=i.close)==null||a.call(i),{width:i.width,height:i.height,data:o}}class FM{constructor(e=600,n=IM){this.cap=e,this.decode=n,this.map=new Map}get(e){let n=this.map.get(e);if(n)return this.map.delete(e),this.map.set(e,n),n;for(n=this.decode(e).catch(i=>{throw this.map.delete(e),i}),this.map.set(e,n);this.map.size>this.cap;)this.map.delete(this.map.keys().next().value);return n}}class OM{constructor(e,n){Object.assign(this,{doc:e,cache:n}),this.checkpoints=new Map}async hourly(e,n){const i=Rl(this.doc,e,n,"rain");if(!i)return null;const r=pv(this.doc,i,"rain"),s=await this.cache.get(Df(this.doc,i,e,"rain"));return{src:i,mm:NM(UM(s.data,r.cols*r.rows),r,this.doc.grids.rain)}}async accumulated(e,n){var h;const i=this.doc.grids.rain,r=i.cols*i.rows,s=JSON.stringify(n);let o=this.checkpoints.get(s);o||(o=new Map,this.checkpoints.set(s,o));const a=n.mode==="run"?Math.min(...((h=this.doc.runList[n.model].find(f=>f.init===n.init))==null?void 0:h.frames)??[0]):0;if(e<a)return null;let l=a,u=new Float32Array(r),c=new Uint8Array(r);for(let f=Math.floor(e/12)*12;f>=a;f-=12){const p=o.get(f);if(p&&f<=e){u=p.sum.slice(),c=p.seen.slice(),l=f+1;break}}for(let f=l;f<=e;f++){const p=await this.hourly(f,n);if(p)for(let _=0;_<r;_++){const y=p.mm[_];Number.isNaN(y)||(u[_]+=y,c[_]=1)}f%12===0&&o.set(f,{sum:u.slice(),seen:c.slice()})}for(let f=0;f<r;f++)c[f]||(u[f]=NaN);return{mm:u,first:a}}}const Vd=(t,e)=>Object.fromEntries(t.formatToParts(e).map(n=>[n.type,n.value])),kM=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",month:"short",day:"numeric",hour:"numeric",hour12:!0,timeZoneName:"short"}),mv=new Intl.DateTimeFormat("en-US",{timeZone:"UTC",month:"short",day:"numeric",hour:"2-digit",hourCycle:"h23"}),Fm=t=>{const e=Vd(kM,t);return`${e.weekday} ${e.month} ${e.day} · ${e.hour} ${e.dayPeriod} ${e.timeZoneName}`},zM=t=>{const e=Vd(mv,t);return`${e.month} ${e.day} ${e.hour}:00 UTC`},gv=t=>{const e=Vd(mv,fv(t));return`${e.month} ${e.day} ${e.hour}z`};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="169",pi={ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_v=0,Uf=1,vv=2,Gd=1,xv=2,ai=3,zi=0,en=1,Qn=2,Di=0,Br=1,Nf=2,If=3,Ff=4,yv=5,tr=100,Sv=101,Mv=102,Ev=103,wv=104,Tv=200,Av=201,Cv=202,Rv=203,iu=204,ru=205,bv=206,Pv=207,Lv=208,Dv=209,Uv=210,Nv=211,Iv=212,Fv=213,Ov=214,su=0,ou=1,au=2,qr=3,lu=4,uu=5,cu=6,hu=7,Wd=0,kv=1,zv=2,Ui=0,Bv=1,Hv=2,Vv=3,Gv=4,Wv=5,jv=6,Xv=7,jd=300,Kr=301,Zr=302,fu=303,du=304,va=306,pu=1e3,rr=1001,mu=1002,Ot=1003,Yv=1004,wo=1005,Qt=1006,bl=1007,bi=1008,mi=1009,Xd=1010,Yd=1011,$s=1012,hc=1013,gr=1014,ci=1015,Js=1016,fc=1017,dc=1018,Qr=1020,$d=35902,qd=1021,Kd=1022,hn=1023,Zd=1024,Qd=1025,Hr=1026,Jr=1027,xa=1028,pc=1029,mc=1030,gc=1031,_c=1033,Io=33776,Fo=33777,Oo=33778,ko=33779,gu=35840,_u=35841,vu=35842,xu=35843,yu=36196,Su=37492,Mu=37496,Eu=37808,wu=37809,Tu=37810,Au=37811,Cu=37812,Ru=37813,bu=37814,Pu=37815,Lu=37816,Du=37817,Uu=37818,Nu=37819,Iu=37820,Fu=37821,zo=36492,Ou=36494,ku=36495,Jd=36283,zu=36284,Bu=36285,Hu=36286,$v=3200,qv=3201,Kv=0,Zv=1,In="",Kn="srgb",Hi="srgb-linear",vc="display-p3",ya="display-p3-linear",oa="linear",st="srgb",aa="rec709",la="p3",Dr=7680,Of=519,Qv=512,Jv=513,ex=514,ep=515,tx=516,nx=517,ix=518,rx=519,Vu=35044,kf=35048,zf="300 es",hi=2e3,ua=2001;class Mr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Om=1234567;const Bo=Math.PI/180,ca=180/Math.PI;function Ni(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Ft(t,e,n){return Math.max(e,Math.min(n,t))}function tp(t,e){return(t%e+e)%e}function BM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function HM(t,e,n){return t!==e?(n-t)/(e-t):0}function Ho(t,e,n){return(1-n)*t+n*e}function VM(t,e,n,i){return Ho(t,e,1-Math.exp(-n*i))}function GM(t,e=1){return e-Math.abs(tp(t,e*2)-e)}function WM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function jM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function XM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function YM(t,e){return t+Math.random()*(e-t)}function $M(t){return t*(.5-Math.random())}function qM(t){t!==void 0&&(Om=t);let e=Om+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KM(t){return t*Bo}function ZM(t){return t*ca}function QM(t){return(t&t-1)===0&&t!==0}function JM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function eE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function tE(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*h,l*f,a*u);break;case"YZY":t.set(l*f,a*c,l*h,a*u);break;case"ZXZ":t.set(l*h,l*f,a*c,a*u);break;case"XZX":t.set(a*c,l*_,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*_,a*u);break;case"ZYZ":t.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function et(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ha={DEG2RAD:Bo,RAD2DEG:ca,generateUUID:Ni,clamp:Ft,euclideanModulo:tp,mapLinear:BM,inverseLerp:HM,lerp:Ho,damp:VM,pingpong:GM,smoothstep:WM,smootherstep:jM,randInt:XM,randFloat:YM,randFloatSpread:$M,seededRandom:qM,degToRad:KM,radToDeg:ZM,isPowerOfTwo:QM,ceilPowerOfTwo:JM,floorPowerOfTwo:eE,setQuaternionFromProperEuler:tE,normalize:et,denormalize:Jn};class De{constructor(e=0,n=0){De.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],_=i[8],y=r[0],m=r[3],d=r[6],v=r[1],g=r[4],S=r[7],b=r[2],C=r[5],T=r[8];return s[0]=o*y+a*v+l*b,s[3]=o*m+a*g+l*C,s[6]=o*d+a*S+l*T,s[1]=u*y+c*v+h*b,s[4]=u*m+c*g+h*C,s[7]=u*d+c*S+h*T,s[2]=f*y+p*v+_*b,s[5]=f*m+p*g+_*C,s[8]=f*d+p*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(eh.makeScale(e,n)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,n){return this.premultiply(eh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eh=new Fe;function sx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ox(){const t=fa("canvas");return t.style.display="block",t}const km={};function Pl(t){t in km||(km[t]=!0,console.warn(t))}function nE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function iE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zm=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bm=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ho={[Hi]:{transfer:oa,primaries:aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Kn]:{transfer:st,primaries:aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ya]:{transfer:oa,primaries:la,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Bm),fromReference:t=>t.applyMatrix3(zm)},[vc]:{transfer:st,primaries:la,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Bm),fromReference:t=>t.applyMatrix3(zm).convertLinearToSRGB()}},sE=new Set([Hi,ya]),Ke={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!sE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ho[e].toReference,r=ho[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ho[t].primaries},getTransfer:function(t){return t===In?oa:ho[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ho[e].luminanceCoefficients)}};function Bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function th(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class ax{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=fa("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bs(n[i]/255)*255):n[i]=Bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oE=0;class np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nh(r[o].image)):s.push(nh(r[o]))}else s=nh(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ax.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aE=0;class zt extends Mr{constructor(e=zt.DEFAULT_IMAGE,n=zt.DEFAULT_MAPPING,i=rr,r=rr,s=Qt,o=bi,a=hn,l=mi,u=zt.DEFAULT_ANISOTROPY,c=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Ni(),this.name="",this.source=new np(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pu:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case mu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pu:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case mu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=jd;zt.DEFAULT_ANISOTROPY=1;class Oe{constructor(e=0,n=0,i=0,r=1){Oe.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(p+1)/2,b=(d+1)/2,C=(c+f)/4,T=(h+y)/4,R=(_+m)/4;return g>S&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=T/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-y)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lx extends Mr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Oe(0,0,e,n),this.scissorTest=!1,this.viewport=new Oe(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new np(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends lx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xc extends zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ux extends zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==f||u!==p||c!==_){let m=1-a;const d=l*f+u*p+c*_+h*y,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const b=Math.sqrt(g),C=Math.atan2(b,d*v);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const S=a*v;if(l=l*m+f*S,u=u*m+p*S,c=c*m+_*S,h=h*m+y*S,m===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=b,u*=b,c*=b,h*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+c*h+l*p-u*f,e[n+1]=l*_+c*f+u*h-a*p,e[n+2]=u*_+c*p+a*f-l*h,e[n+3]=c*_-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*_,this._y=u*p*h-f*c*_,this._z=u*c*_+f*p*h,this._w=u*c*h-f*p*_;break;case"YXZ":this._x=f*c*h+u*p*_,this._y=u*p*h-f*c*_,this._z=u*c*_-f*p*h,this._w=u*c*h+f*p*_;break;case"ZXY":this._x=f*c*h-u*p*_,this._y=u*p*h+f*c*_,this._z=u*c*_+f*p*h,this._w=u*c*h-f*p*_;break;case"ZYX":this._x=f*c*h-u*p*_,this._y=u*p*h+f*c*_,this._z=u*c*_-f*p*h,this._w=u*c*h+f*p*_;break;case"YZX":this._x=f*c*h+u*p*_,this._y=u*p*h+f*c*_,this._z=u*c*_-f*p*h,this._w=u*c*h-f*p*_;break;case"XZY":this._x=f*c*h-u*p*_,this._y=u*p*h-f*c*_,this._z=u*c*_+f*p*h,this._w=u*c*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new I,Hm=new vr;class Vi{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Va.subVectors(this.max,fo),os.subVectors(e.a,fo),as.subVectors(e.b,fo),ls.subVectors(e.c,fo),ji.subVectors(as,os),Xi.subVectors(ls,as),wr.subVectors(os,ls);let n=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-wr.z,wr.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,wr.z,0,-wr.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-wr.y,wr.x,0];return!rh(n,os,as,ls,Va)||(n=[1,0,0,0,1,0,0,0,1],!rh(n,os,as,ls,Va))?!1:(Ga.crossVectors(ji,Xi),n=[Ga.x,Ga.y,Ga.z],rh(n,os,as,ls,Va))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,Ha=new Vi,os=new I,as=new I,ls=new I,ji=new I,Xi=new I,wr=new I,fo=new I,Va=new I,Ga=new I,Tr=new I;function rh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),u=n.dot(Tr),c=i.dot(Tr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const lE=new Vi,po=new I,sh=new I;class ns{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const n=po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(sh)),this.expandByPoint(po.copy(e.center).sub(sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new I,oh=new I,Wa=new I,Yi=new I,ah=new I,ja=new I,lh=new I;class yc{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){oh.copy(e).add(n).multiplyScalar(.5),Wa.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(oh);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Wa),a=Yi.dot(this.direction),l=-Yi.dot(Wa),u=Yi.lengthSq(),c=Math.abs(1-o*o);let h,f,p,_;if(c>0)if(h=o*l-a,f=o*a-l,_=s*c,h>=0)if(f>=-_)if(f<=_){const y=1/c;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(oh).addScaledVector(Wa,f),p}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){ah.subVectors(n,e),ja.subVectors(i,e),lh.crossVectors(ah,ja);let o=this.direction.dot(lh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(ja.crossVectors(Yi,ja));if(l<0)return null;const u=a*this.direction.dot(ah.cross(Yi));if(u<0||l+u>o)return null;const c=-a*Yi.dot(lh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,u,c,h,f,p,_,y,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,h,f,p,_,y,m)}set(e,n,i,r,s,o,a,l,u,c,h,f,p,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*h,_=a*c,y=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+_*u,n[5]=f-y*u,n[9]=-a*l,n[2]=y-f*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,_=u*c,y=u*h;n[0]=f+y*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,_=u*c,y=u*h;n[0]=f-y*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*c,n[9]=y-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,_=a*c,y=a*h;n[0]=l*c,n[4]=_*u-p,n[8]=f*u+y,n[1]=l*h,n[5]=y*u+f,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=y-f*h,n[8]=_*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=f*h+y,n[5]=o*c,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*c,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,cE)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),$i.crossVectors(i,yn),$i.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),$i.crossVectors(i,yn)),$i.normalize(),Xa.crossVectors(yn,$i),r[0]=$i.x,r[4]=Xa.x,r[8]=yn.x,r[1]=$i.y,r[5]=Xa.y,r[9]=yn.y,r[2]=$i.z,r[6]=Xa.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],_=i[2],y=i[6],m=i[10],d=i[14],v=i[3],g=i[7],S=i[11],b=i[15],C=r[0],T=r[4],R=r[8],X=r[12],x=r[1],E=r[5],H=r[9],z=r[13],L=r[2],W=r[6],k=r[10],$=r[14],P=r[3],q=r[7],Q=r[11],ie=r[15];return s[0]=o*C+a*x+l*L+u*P,s[4]=o*T+a*E+l*W+u*q,s[8]=o*R+a*H+l*k+u*Q,s[12]=o*X+a*z+l*$+u*ie,s[1]=c*C+h*x+f*L+p*P,s[5]=c*T+h*E+f*W+p*q,s[9]=c*R+h*H+f*k+p*Q,s[13]=c*X+h*z+f*$+p*ie,s[2]=_*C+y*x+m*L+d*P,s[6]=_*T+y*E+m*W+d*q,s[10]=_*R+y*H+m*k+d*Q,s[14]=_*X+y*z+m*$+d*ie,s[3]=v*C+g*x+S*L+b*P,s[7]=v*T+g*E+S*W+b*q,s[11]=v*R+g*H+S*k+b*Q,s[15]=v*X+g*z+S*$+b*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+y*(+n*l*p-n*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*h+n*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],d=e[15],v=h*m*u-y*f*u+y*l*p-a*m*p-h*l*d+a*f*d,g=_*f*u-c*m*u-_*l*p+o*m*p+c*l*d-o*f*d,S=c*y*u-_*h*u+_*a*p-o*y*p-c*a*d+o*h*d,b=_*h*l-c*y*l-_*a*f+o*y*f+c*a*m-o*h*m,C=n*v+i*g+r*S+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=v*T,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*d-i*f*d)*T,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*d+i*l*d)*T,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*T,e[4]=g*T,e[5]=(c*m*s-_*f*s+_*r*p-n*m*p-c*r*d+n*f*d)*T,e[6]=(_*l*s-o*m*s-_*r*u+n*m*u+o*r*d-n*l*d)*T,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(_*h*s-c*y*s-_*i*p+n*y*p+c*i*d-n*h*d)*T,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*d+n*a*d)*T,e[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*p-n*a*p)*T,e[12]=b*T,e[13]=(c*y*r-_*h*r+_*i*f-n*y*f-c*i*m+n*h*m)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,_=s*h,y=o*c,m=o*h,d=a*h,v=l*u,g=l*c,S=l*h,b=i.x,C=i.y,T=i.z;return r[0]=(1-(y+d))*b,r[1]=(p+S)*b,r[2]=(_-g)*b,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(f+d))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(_+g)*T,r[9]=(m-v)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const u=1/s,c=1/o,h=1/a;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=c,Wn.elements[5]*=c,Wn.elements[6]*=c,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,n.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===hi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ua)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(o-s),f=(n+e)*u,p=(i+r)*c;let _,y;if(a===hi)_=(o+s)*h,y=-2*h;else if(a===ua)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const us=new I,Wn=new pt,uE=new I(0,0,0),cE=new I(1,1,1),$i=new I,Xa=new I,yn=new I,Vm=new pt,Gm=new vr;class gi{constructor(e=0,n=0,i=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hE=0;const Wm=new I,cs=new vr,yi=new pt,Ya=new I,mo=new I,fE=new I,dE=new vr,jm=new I(1,0,0),Xm=new I(0,1,0),Ym=new I(0,0,1),$m={type:"added"},pE={type:"removed"},hs={type:"childadded",child:null},uh={type:"childremoved",child:null};class tn extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new I,n=new gi,i=new vr,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Fe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(jm,e)}rotateY(e){return this.rotateOnAxis(Xm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,n){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jm,e)}translateY(e){return this.translateOnAxis(Xm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ya.copy(e):Ya.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(mo,Ya,this.up):yi.lookAt(Ya,mo,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(yi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($m),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pE),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($m),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,fE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,dE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new I(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new I,Si=new I,ch=new I,Mi=new I,fs=new I,ds=new I,qm=new I,hh=new I,fh=new I,dh=new I,ph=new Oe,mh=new Oe,gh=new Oe;class Fn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Si.subVectors(i,n),ch.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(Si),l=jn.dot(ch),u=Si.dot(Si),c=Si.dot(ch),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,i),gh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ph,s.x),o.addScaledVector(mh,s.y),o.addScaledVector(gh,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Si.subVectors(e,n),jn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),ds.subVectors(s,i),hh.subVectors(e,i);const l=fs.dot(hh),u=ds.dot(hh);if(l<=0&&u<=0)return n.copy(i);fh.subVectors(e,r);const c=fs.dot(fh),h=ds.dot(fh);if(c>=0&&h<=c)return n.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(fs,o);dh.subVectors(e,s);const p=fs.dot(dh),_=ds.dot(dh);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(ds,a);const m=c*_-p*h;if(m<=0&&h-c>=0&&p-_>=0)return qm.subVectors(s,r),a=(h-c)/(h-c+(p-_)),n.copy(r).addScaledVector(qm,a);const d=1/(m+y+f);return o=y*d,a=f*d,n.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function _h(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=tp(e,1),n=Ft(n,0,1),i=Ft(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_h(o,s,e+1/3),this.g=_h(o,s,e),this.b=_h(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const i=cx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=th(e.r),this.g=th(e.g),this.b=th(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Ke.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ft(Wt.r*255,0,255))*65536+Math.round(Ft(Wt.g*255,0,255))*256+Math.round(Ft(Wt.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Kn){Ke.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL($a);const i=Ho(qi.h,$a.h,n),r=Ho(qi.s,$a.s,n),s=Ho(qi.l,$a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ve;Ve.NAMES=cx;let mE=0;class eo extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Br,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=ru,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==iu&&(i.blendSrc=this.blendSrc),this.blendDst!==ru&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Of&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rp extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,qa=new De;class gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vu,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qa.fromBufferAttribute(this,n),qa.applyMatrix3(e),this.setXY(n,qa.x,qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jn(n,this.array)),n}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jn(n,this.array)),n}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jn(n,this.array)),n}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vu&&(e.usage=this.usage),e}}class sp extends gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class op extends gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class nn extends gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gE=0;const Dn=new pt,vh=new tn,ps=new I,Sn=new Vi,go=new Vi,Rt=new I;class Pn extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sx(e)?op:sp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Sn.min,go.min),Sn.expandByPoint(Rt),Rt.addVectors(Sn.max,go.max),Sn.expandByPoint(Rt)):(Sn.expandByPoint(go.min),Sn.expandByPoint(go.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Rt.fromBufferAttribute(a,u),l&&(ps.fromBufferAttribute(e,u),Rt.add(ps)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new I,l[R]=new I;const u=new I,c=new I,h=new I,f=new De,p=new De,_=new De,y=new I,m=new I;function d(R,X,x){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,X),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,X),_.fromBufferAttribute(s,x),c.sub(u),h.sub(u),p.sub(f),_.sub(f);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(y.copy(c).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(E),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(E),a[R].add(y),a[X].add(y),a[x].add(y),l[R].add(m),l[X].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,X=v.length;R<X;++R){const x=v[R],E=x.start,H=x.count;for(let z=E,L=E+H;z<L;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const g=new I,S=new I,b=new I,C=new I;function T(R){b.fromBufferAttribute(r,R),C.copy(b);const X=a[R];g.copy(X),g.sub(b.multiplyScalar(b.dot(X))).normalize(),S.crossVectors(C,X);const E=S.dot(l[R])<0?-1:1;o.setXYZW(R,g.x,g.y,g.z,E)}for(let R=0,X=v.length;R<X;++R){const x=v[R],E=x.start,H=x.count;for(let z=E,L=E+H;z<L;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,c=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let d=0;d<c;d++)f[_++]=u[p++]}return new gn(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Km=new pt,Ar=new yc,Ka=new ns,Zm=new I,Za=new I,Qa=new I,Ja=new I,xh=new I,el=new I,Qm=new I,tl=new I;class fn extends tn{constructor(e=new Pn,n=new rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(xh.fromBufferAttribute(h,e),o?el.addScaledVector(xh,c):el.addScaledVector(xh.sub(n),c))}n.add(el)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Ka.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Ka,Zm)===null||Ar.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Km.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Km),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=g;S<b;S+=3){const C=a.getX(S),T=a.getX(S+1),R=a.getX(S+2);r=nl(this,d,e,i,u,c,h,C,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=nl(this,o,e,i,u,c,h,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=g;S<b;S+=3){const C=S,T=S+1,R=S+2;r=nl(this,d,e,i,u,c,h,C,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=m,g=m+1,S=m+2;r=nl(this,o,e,i,u,c,h,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _E(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zi,a),l===null)return null;tl.copy(a),tl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(tl);return u<n.near||u>n.far?null:{distance:u,point:tl.clone(),object:t}}function nl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Za),t.getVertexPosition(l,Qa),t.getVertexPosition(u,Ja);const c=_E(t,e,n,i,Za,Qa,Ja,Qm);if(c){const h=new I;Fn.getBarycoord(Qm,Za,Qa,Ja,h),r&&(c.uv=Fn.getInterpolatedAttribute(r,a,l,u,h,new De)),s&&(c.uv1=Fn.getInterpolatedAttribute(s,a,l,u,h,new De)),o&&(c.normal=Fn.getInterpolatedAttribute(o,a,l,u,h,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new I,materialIndex:0};Fn.getNormal(Za,Qa,Ja,f.normal),c.face=f,c.barycoord=h}return c}class to extends Pn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nn(u,3)),this.setAttribute("normal",new nn(c,3)),this.setAttribute("uv",new nn(h,2));function _(y,m,d,v,g,S,b,C,T,R,X){const x=S/T,E=b/R,H=S/2,z=b/2,L=C/2,W=T+1,k=R+1;let $=0,P=0;const q=new I;for(let Q=0;Q<k;Q++){const ie=Q*E-z;for(let Ee=0;Ee<W;Ee++){const ze=Ee*x-H;q[y]=ze*v,q[m]=ie*g,q[d]=L,u.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[d]=C>0?1:-1,c.push(q.x,q.y,q.z),h.push(Ee/T),h.push(1-Q/R),$+=1}}for(let Q=0;Q<R;Q++)for(let ie=0;ie<T;ie++){const Ee=f+ie+W*Q,ze=f+ie+W*(Q+1),Y=f+(ie+1)+W*(Q+1),ne=f+(ie+1)+W*Q;l.push(Ee,ze,ne),l.push(ze,Y,ne),P+=6}a.addGroup(p,P,X),p+=P,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function vE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Sc={clone:qs,merge:qt};var xE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xE,this.fragmentShader=yE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=vE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ap extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new I,Jm=new De,eg=new De;class En extends ap{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,Jm,eg),n.subVectors(eg,Jm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ms=-90,gs=1;class fx extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new En(ms,gs,e,n);s.layers=this.layers,this.add(s);const o=new En(ms,gs,e,n);o.layers=this.layers,this.add(o);const a=new En(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new En(ms,gs,e,n);l.layers=this.layers,this.add(l);const u=new En(ms,gs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class lp extends zt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Kr,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dx extends _r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new to(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Di});s.uniforms.tEquirect.value=n;const o=new fn(r,s),a=n.minFilter;return n.minFilter===bi&&(n.minFilter=Qt),new fx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const yh=new I,SE=new I,ME=new Fe;class Ti{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yh.subVectors(i,n).cross(SE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ME.getNormalMatrix(e),r=this.coplanarPoint(yh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new ns,il=new I;class up{constructor(e=new Ti,n=new Ti,i=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],_=r[9],y=r[10],m=r[11],d=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-p,S-d).normalize(),i[1].setComponents(l+s,f+u,m+p,S+d).normalize(),i[2].setComponents(l+o,f+c,m+_,S+v).normalize(),i[3].setComponents(l-o,f-c,m-_,S-v).normalize(),i[4].setComponents(l-a,f-h,m-y,S-g).normalize(),n===hi)i[5].setComponents(l+a,f+h,m+y,S+g).normalize();else if(n===ua)i[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function px(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function EE(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,c);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Sa extends Pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=n/l,p=[],_=[],y=[],m=[];for(let d=0;d<c;d++){const v=d*f-o;for(let g=0;g<u;g++){const S=g*h-s;_.push(S,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const g=v+u*d,S=v+u*(d+1),b=v+1+u*(d+1),C=v+1+u*d;p.push(g,S,C),p.push(S,b,C)}this.setIndex(p),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var wE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,UE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$E=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",tw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_w=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ew=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ww=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Aw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ow=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$w=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,D1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:wE,alphahash_pars_fragment:TE,alphamap_fragment:AE,alphamap_pars_fragment:CE,alphatest_fragment:RE,alphatest_pars_fragment:bE,aomap_fragment:PE,aomap_pars_fragment:LE,batching_pars_vertex:DE,batching_vertex:UE,begin_vertex:NE,beginnormal_vertex:IE,bsdfs:FE,iridescence_fragment:OE,bumpmap_pars_fragment:kE,clipping_planes_fragment:zE,clipping_planes_pars_fragment:BE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:VE,color_fragment:GE,color_pars_fragment:WE,color_pars_vertex:jE,color_vertex:XE,common:YE,cube_uv_reflection_fragment:$E,defaultnormal_vertex:qE,displacementmap_pars_vertex:KE,displacementmap_vertex:ZE,emissivemap_fragment:QE,emissivemap_pars_fragment:JE,colorspace_fragment:ew,colorspace_pars_fragment:tw,envmap_fragment:nw,envmap_common_pars_fragment:iw,envmap_pars_fragment:rw,envmap_pars_vertex:sw,envmap_physical_pars_fragment:gw,envmap_vertex:ow,fog_vertex:aw,fog_pars_vertex:lw,fog_fragment:uw,fog_pars_fragment:cw,gradientmap_pars_fragment:hw,lightmap_pars_fragment:fw,lights_lambert_fragment:dw,lights_lambert_pars_fragment:pw,lights_pars_begin:mw,lights_toon_fragment:_w,lights_toon_pars_fragment:vw,lights_phong_fragment:xw,lights_phong_pars_fragment:yw,lights_physical_fragment:Sw,lights_physical_pars_fragment:Mw,lights_fragment_begin:Ew,lights_fragment_maps:ww,lights_fragment_end:Tw,logdepthbuf_fragment:Aw,logdepthbuf_pars_fragment:Cw,logdepthbuf_pars_vertex:Rw,logdepthbuf_vertex:bw,map_fragment:Pw,map_pars_fragment:Lw,map_particle_fragment:Dw,map_particle_pars_fragment:Uw,metalnessmap_fragment:Nw,metalnessmap_pars_fragment:Iw,morphinstance_vertex:Fw,morphcolor_vertex:Ow,morphnormal_vertex:kw,morphtarget_pars_vertex:zw,morphtarget_vertex:Bw,normal_fragment_begin:Hw,normal_fragment_maps:Vw,normal_pars_fragment:Gw,normal_pars_vertex:Ww,normal_vertex:jw,normalmap_pars_fragment:Xw,clearcoat_normal_fragment_begin:Yw,clearcoat_normal_fragment_maps:$w,clearcoat_pars_fragment:qw,iridescence_pars_fragment:Kw,opaque_fragment:Zw,packing:Qw,premultiplied_alpha_fragment:Jw,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:l1,skinbase_vertex:u1,skinning_pars_vertex:c1,skinning_vertex:h1,skinnormal_vertex:f1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:_1,transmission_pars_fragment:v1,uv_pars_fragment:x1,uv_pars_vertex:y1,uv_vertex:S1,worldpos_vertex:M1,background_vert:E1,background_frag:w1,backgroundCube_vert:T1,backgroundCube_frag:A1,cube_vert:C1,cube_frag:R1,depth_vert:b1,depth_frag:P1,distanceRGBA_vert:L1,distanceRGBA_frag:D1,equirect_vert:U1,equirect_frag:N1,linedashed_vert:I1,linedashed_frag:F1,meshbasic_vert:O1,meshbasic_frag:k1,meshlambert_vert:z1,meshlambert_frag:B1,meshmatcap_vert:H1,meshmatcap_frag:V1,meshnormal_vert:G1,meshnormal_frag:W1,meshphong_vert:j1,meshphong_frag:X1,meshphysical_vert:Y1,meshphysical_frag:$1,meshtoon_vert:q1,meshtoon_frag:K1,points_vert:Z1,points_frag:Q1,shadow_vert:J1,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},oe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Zt={basic:{uniforms:qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:qt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:qt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:qt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:qt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:qt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:qt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:qt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:qt([oe.lights,oe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Zt.physical={uniforms:qt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const rl={r:0,b:0,g:0},Rr=new gi,iT=new pt;function rT(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function y(v){let g=!1;const S=_(v);S===null?d(a,l):S&&S.isColor&&(d(S,1),g=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const S=_(g);S&&(S.isCubeTexture||S.mapping===va)?(c===void 0&&(c=new fn(new to(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:qs(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Rr.copy(g.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(Rr)),c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==st,(h!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new fn(new Sa(2,2),new Cn({name:"BackgroundMaterial",uniforms:qs(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,g){v.getRGB(rl,hx(t)),i.buffers.color.setClear(rl.r,rl.g,rl.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:y,addToRenderList:m}}function sT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,E,H,z,L){let W=!1;const k=h(z,H,E);s!==k&&(s=k,u(s.object)),W=p(x,z,H,L),W&&_(x,z,H,L),L!==null&&e.update(L,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(x,E,H,z),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function c(x){return t.deleteVertexArray(x)}function h(x,E,H){const z=H.wireframe===!0;let L=i[x.id];L===void 0&&(L={},i[x.id]=L);let W=L[E.id];W===void 0&&(W={},L[E.id]=W);let k=W[z];return k===void 0&&(k=f(l()),W[z]=k),k}function f(x){const E=[],H=[],z=[];for(let L=0;L<n;L++)E[L]=0,H[L]=0,z[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,E,H,z){const L=s.attributes,W=E.attributes;let k=0;const $=H.getAttributes();for(const P in $)if($[P].location>=0){const Q=L[P];let ie=W[P];if(ie===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor)),Q===void 0||Q.attribute!==ie||ie&&Q.data!==ie.data)return!0;k++}return s.attributesNum!==k||s.index!==z}function _(x,E,H,z){const L={},W=E.attributes;let k=0;const $=H.getAttributes();for(const P in $)if($[P].location>=0){let Q=W[P];Q===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const ie={};ie.attribute=Q,Q&&Q.data&&(ie.data=Q.data),L[P]=ie,k++}s.attributes=L,s.attributesNum=k,s.index=z}function y(){const x=s.newAttributes;for(let E=0,H=x.length;E<H;E++)x[E]=0}function m(x){d(x,0)}function d(x,E){const H=s.newAttributes,z=s.enabledAttributes,L=s.attributeDivisors;H[x]=1,z[x]===0&&(t.enableVertexAttribArray(x),z[x]=1),L[x]!==E&&(t.vertexAttribDivisor(x,E),L[x]=E)}function v(){const x=s.newAttributes,E=s.enabledAttributes;for(let H=0,z=E.length;H<z;H++)E[H]!==x[H]&&(t.disableVertexAttribArray(H),E[H]=0)}function g(x,E,H,z,L,W,k){k===!0?t.vertexAttribIPointer(x,E,H,L,W):t.vertexAttribPointer(x,E,H,z,L,W)}function S(x,E,H,z){y();const L=z.attributes,W=H.getAttributes(),k=E.defaultAttributeValues;for(const $ in W){const P=W[$];if(P.location>=0){let q=L[$];if(q===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){const Q=q.normalized,ie=q.itemSize,Ee=e.get(q);if(Ee===void 0)continue;const ze=Ee.buffer,Y=Ee.type,ne=Ee.bytesPerElement,he=Y===t.INT||Y===t.UNSIGNED_INT||q.gpuType===hc;if(q.isInterleavedBufferAttribute){const le=q.data,Ue=le.stride,Ae=q.offset;if(le.isInstancedInterleavedBuffer){for(let Ge=0;Ge<P.locationSize;Ge++)d(P.location+Ge,le.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ge=0;Ge<P.locationSize;Ge++)m(P.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ge=0;Ge<P.locationSize;Ge++)g(P.location+Ge,ie/P.locationSize,Y,Q,Ue*ne,(Ae+ie/P.locationSize*Ge)*ne,he)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<P.locationSize;le++)d(P.location+le,q.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<P.locationSize;le++)m(P.location+le);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let le=0;le<P.locationSize;le++)g(P.location+le,ie/P.locationSize,Y,Q,ie*ne,ie/P.locationSize*le*ne,he)}}else if(k!==void 0){const Q=k[$];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(P.location,Q);break;case 3:t.vertexAttrib3fv(P.location,Q);break;case 4:t.vertexAttrib4fv(P.location,Q);break;default:t.vertexAttrib1fv(P.location,Q)}}}}v()}function b(){R();for(const x in i){const E=i[x];for(const H in E){const z=E[H];for(const L in z)c(z[L].object),delete z[L];delete E[H]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const H in E){const z=E[H];for(const L in z)c(z[L].object),delete z[L];delete E[H]}delete i[x.id]}function T(x){for(const E in i){const H=i[E];if(H[x.id]===void 0)continue;const z=H[x.id];for(const L in z)c(z[L].object),delete z[L];delete H[x.id]}}function R(){X(),o=!0,s!==r&&(s=r,u(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:X,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function oT(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,h){h!==0&&(t.drawArraysInstanced(i,u,c,h),n.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let _=0;_<h;_++)p+=c[_];n.update(p,i,1)}function l(u,c,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=c[y];for(let y=0;y<f.length;y++)n.update(_,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==hn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==mi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ci&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:b,maxSamples:C}}function lT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ti,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=c(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,g=v*4;let S=d.clippingState||null;l.value=S,S=c(_,f,g,p);for(let b=0;b!==g;++b)S[b]=n[b];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const d=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,S=p;g!==y;++g,S+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function uT(t){let e=new WeakMap;function n(o,a){return a===fu?o.mapping=Kr:a===du&&(o.mapping=Zr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fu||a===du)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new dx(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mx extends ap{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,tg=[.125,.215,.35,.446,.526,.582],Nr=20,Sh=new mx,ng=new Ve;let Mh=null,Eh=0,wh=0,Th=!1;const Ur=(1+Math.sqrt(5))/2,_s=1/Ur,ig=[new I(-Ur,_s,0),new I(Ur,_s,0),new I(-_s,0,Ur),new I(_s,0,Ur),new I(0,Ur,-_s),new I(0,Ur,_s),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mh,Eh,wh),this._renderer.xr.enabled=Th,e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Js,format:hn,colorSpace:Hi,depthBuffer:!1},r=rg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(s)),this._blurMaterial=hT(s,e,n)}return r}_compileMaterial(e){const n=new fn(this._lodPlanes[0],e);this._renderer.compile(n,Sh)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(ng),c.toneMapping=Ui,c.autoClear=!1;const p=new rp({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new fn(new to,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(ng),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const g=this._cubeSize;sl(r,v*g,d>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Kr||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ig[(r-s-1)%ig.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new fn(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),y=s/_,m=isFinite(s)?1+Math.floor(c*y):Nr;m>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);const d=[];let v=0;for(let T=0;T<Nr;++T){const R=T/y,X=Math.exp(-R*R/2);d.push(X),T===0?v+=X:T<m&&(v+=2*X)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const S=this._sizeLods[r],b=3*S*(r>g-Ds?r-g+Ds:0),C=4*(this._cubeSize-S);sl(n,b,C,3*S,2*S),l.setRenderTarget(n),l.render(h,Sh)}}function cT(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+tg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=tg[o-t+Ds-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,_=6,y=3,m=2,d=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,R=C>2?0:-1,X=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(X,y*_*C),g.set(f,m*_*C);const x=[C,C,C,C,C,C];S.set(x,d*_*C)}const b=new Pn;b.setAttribute("position",new gn(v,y)),b.setAttribute("uv",new gn(g,m)),b.setAttribute("faceIndex",new gn(S,d)),e.push(b),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function rg(t,e,n){const i=new _r(t,e,n);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hT(t,e,n){const i=new Float32Array(Nr),r=new I(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function sg(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function og(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===fu||l===du,c=l===Kr||l===Zr;if(u||c){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Bf(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new Bf(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function dT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Pl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pT(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,S=v.length;g<S;g+=3){const b=v[g+0],C=v[g+1],T=v[g+2];f.push(b,C,C,T,T,b)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const b=g+0,C=g+1,T=g+2;f.push(b,C,C,T,T,b)}}else return;const m=new(sx(f)?op:sp)(f,1);m.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function mT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function u(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*o,_),n.update(p,i,_))}function c(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function h(f,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v];for(let v=0;v<y.length;v++)n.update(d,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function gT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _T(t,e,n){const i=new WeakMap,r=new Oe;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let b=a.attributes.position.count*S,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*C*4*h),R=new xc(T,b,C,h);R.type=ci,R.needsUpdate=!0;const X=S*4;for(let E=0;E<h;E++){const H=d[E],z=v[E],L=g[E],W=b*C*4*E;for(let k=0;k<H.count;k++){const $=k*X;_===!0&&(r.fromBufferAttribute(H,k),T[W+$+0]=r.x,T[W+$+1]=r.y,T[W+$+2]=r.z,T[W+$+3]=0),y===!0&&(r.fromBufferAttribute(z,k),T[W+$+4]=r.x,T[W+$+5]=r.y,T[W+$+6]=r.z,T[W+$+7]=0),m===!0&&(r.fromBufferAttribute(L,k),T[W+$+8]=r.x,T[W+$+9]=r.y,T[W+$+10]=r.z,T[W+$+11]=L.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new De(b,C)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function vT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class hp extends zt{constructor(e,n,i,r,s,o,a,l,u,c=Hr){if(c!==Hr&&c!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Hr&&(i=gr),i===void 0&&c===Jr&&(i=Qr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const gx=new zt,ag=new hp(1,1),_x=new xc,vx=new ux,xx=new lp,lg=[],ug=[],cg=new Float32Array(16),hg=new Float32Array(9),fg=new Float32Array(4);function no(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=lg[r];if(s===void 0&&(s=new Float32Array(r),lg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=ug[e];n===void 0&&(n=new Int32Array(e),ug[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;fg.set(i),t.uniformMatrix2fv(this.addr,!1,fg),Ct(n,i)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;hg.set(i),t.uniformMatrix3fv(this.addr,!1,hg),Ct(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;cg.set(i),t.uniformMatrix4fv(this.addr,!1,cg),Ct(n,i)}}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function PT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function NT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ag.compareFunction=ep,s=ag):s=gx,n.setTexture2D(e||s,r)}function IT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vx,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xx,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_x,r)}function kT(t){switch(t){case 5126:return xT;case 35664:return yT;case 35665:return ST;case 35666:return MT;case 35674:return ET;case 35675:return wT;case 35676:return TT;case 5124:case 35670:return AT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return bT;case 5125:return PT;case 36294:return LT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return OT}}function zT(t,e){t.uniform1fv(this.addr,e)}function BT(t,e){const n=no(e,this.size,2);t.uniform2fv(this.addr,n)}function HT(t,e){const n=no(e,this.size,3);t.uniform3fv(this.addr,n)}function VT(t,e){const n=no(e,this.size,4);t.uniform4fv(this.addr,n)}function GT(t,e){const n=no(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WT(t,e){const n=no(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jT(t,e){const n=no(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XT(t,e){t.uniform1iv(this.addr,e)}function YT(t,e){t.uniform2iv(this.addr,e)}function $T(t,e){t.uniform3iv(this.addr,e)}function qT(t,e){t.uniform4iv(this.addr,e)}function KT(t,e){t.uniform1uiv(this.addr,e)}function ZT(t,e){t.uniform2uiv(this.addr,e)}function QT(t,e){t.uniform3uiv(this.addr,e)}function JT(t,e){t.uniform4uiv(this.addr,e)}function eA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||gx,s[o])}function tA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||vx,s[o])}function nA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||xx,s[o])}function iA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||_x,s[o])}function rA(t){switch(t){case 5126:return zT;case 35664:return BT;case 35665:return HT;case 35666:return VT;case 35674:return GT;case 35675:return WT;case 35676:return jT;case 5124:case 35670:return XT;case 35667:case 35671:return YT;case 35668:case 35672:return $T;case 35669:case 35673:return qT;case 5125:return KT;case 36294:return ZT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class sA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kT(n.type)}}class oA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rA(n.type)}}class aA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function dg(t,e){t.seq.push(e),t.map[e.id]=e}function lA(t,e,n){const i=t.name,r=i.length;for(Ah.lastIndex=0;;){const s=Ah.exec(i),o=Ah.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){dg(n,u===void 0?new sA(a,t,e):new oA(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new aA(a),dg(n,h)),n=h}}}class Ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);lA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function pg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uA=37297;let cA=0;function hA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function fA(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===la&&n===aa?i="LinearDisplayP3ToLinearSRGB":e===aa&&n===la&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case ya:return[i,"LinearTransferOETF"];case Kn:case vc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function mg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+hA(t.getShaderSource(e),o)}else return r}function dA(t,e){const n=fA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function pA(t,e){let n;switch(e){case Bv:n="Linear";break;case Hv:n="Reinhard";break;case Vv:n="Cineon";break;case Gv:n="ACESFilmic";break;case jv:n="AgX";break;case Xv:n="Neutral";break;case Wv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ol=new I;function mA(){Ke.getLuminanceCoefficients(ol);const t=ol.x.toFixed(4),e=ol.y.toFixed(4),n=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function _A(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function To(t){return t!==""}function gg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(t){return t.replace(xA,SA)}const yA=new Map;function SA(t,e){let n=Ie[e];if(n===void 0){const i=yA.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(t){return t.replace(MA,EA)}function EA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===xv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function TA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Kr:case Zr:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function CA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wd:e="ENVMAP_BLENDING_MULTIPLY";break;case kv:e="ENVMAP_BLENDING_MIX";break;case zv:e="ENVMAP_BLENDING_ADD";break}return e}function RA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=wA(n),u=TA(n),c=AA(n),h=CA(n),f=RA(n),p=gA(n),_=_A(s),y=r.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(To).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(To).join(`
`),d.length>0&&(d+=`
`)):(m=[xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),d=[xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ui?"#define TONE_MAPPING":"",n.toneMapping!==Ui?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Ui?pA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,dA("linearToOutputTexel",n.outputColorSpace),mA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(To).join(`
`)),o=Hf(o),o=gg(o,n),o=_g(o,n),a=Hf(a),a=gg(a,n),a=_g(a,n),o=vg(o),a=vg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=v+m+o,S=v+d+a,b=pg(r,r.VERTEX_SHADER,g),C=pg(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(E){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(b).trim(),L=r.getShaderInfoLog(C).trim();let W=!0,k=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,C);else{const $=mg(r,b,"vertex"),P=mg(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+H+`
`+$+`
`+P)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||L==="")&&(k=!1);k&&(E.diagnostics={runnable:W,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:L,prefix:d}})}r.deleteShader(b),r.deleteShader(C),R=new Ll(r,y),X=vA(r,y)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let X;this.getAttributes=function(){return X===void 0&&T(this),X};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,uA)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=C,this}let PA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DA(e),n.set(e,i)),i}}class DA{constructor(e){this.id=PA++,this.code=e,this.usedTimes=0}}function UA(t,e,n,i,r,s,o){const a=new ip,l=new LA,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return u.add(x),x===0?"uv":`uv${x}`}function d(x,E,H,z,L){const W=z.fog,k=L.geometry,$=x.isMeshStandardMaterial?z.environment:null,P=(x.isMeshStandardMaterial?n:e).get(x.envMap||$),q=P&&P.mapping===va?P.image.height:null,Q=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ee=ie!==void 0?ie.length:0;let ze=0;k.morphAttributes.position!==void 0&&(ze=1),k.morphAttributes.normal!==void 0&&(ze=2),k.morphAttributes.color!==void 0&&(ze=3);let Y,ne,he,le;if(Q){const an=Zt[Q];Y=an.vertexShader,ne=an.fragmentShader}else Y=x.vertexShader,ne=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),le=l.getFragmentShaderID(x);const Ue=t.getRenderTarget(),Ae=L.isInstancedMesh===!0,Ge=L.isBatchedMesh===!0,nt=!!x.map,We=!!x.matcap,D=!!P,_n=!!x.aoMap,Be=!!x.lightMap,Ye=!!x.bumpMap,Re=!!x.normalMap,at=!!x.displacementMap,Le=!!x.emissiveMap,A=!!x.metalnessMap,M=!!x.roughnessMap,B=x.anisotropy>0,Z=x.clearcoat>0,ee=x.dispersion>0,K=x.iridescence>0,ye=x.sheen>0,ae=x.transmission>0,me=B&&!!x.anisotropyMap,$e=Z&&!!x.clearcoatMap,re=Z&&!!x.clearcoatNormalMap,ge=Z&&!!x.clearcoatRoughnessMap,be=K&&!!x.iridescenceMap,Pe=K&&!!x.iridescenceThicknessMap,_e=ye&&!!x.sheenColorMap,He=ye&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,rt=!!x.specularColorMap,U=!!x.specularIntensityMap,fe=ae&&!!x.transmissionMap,j=ae&&!!x.thicknessMap,J=!!x.gradientMap,ue=!!x.alphaMap,de=x.alphaTest>0,je=!!x.alphaHash,yt=!!x.extensions;let on=Ui;x.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(on=t.toneMapping);const qe={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:ne,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Ge,batchingColor:Ge&&L._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&L.instanceColor!==null,instancingMorph:Ae&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Hi,alphaToCoverage:!!x.alphaToCoverage,map:nt,matcap:We,envMap:D,envMapMode:D&&P.mapping,envMapCubeUVHeight:q,aoMap:_n,lightMap:Be,bumpMap:Ye,normalMap:Re,displacementMap:p&&at,emissiveMap:Le,normalMapObjectSpace:Re&&x.normalMapType===Zv,normalMapTangentSpace:Re&&x.normalMapType===Kv,metalnessMap:A,roughnessMap:M,anisotropy:B,anisotropyMap:me,clearcoat:Z,clearcoatMap:$e,clearcoatNormalMap:re,clearcoatRoughnessMap:ge,dispersion:ee,iridescence:K,iridescenceMap:be,iridescenceThicknessMap:Pe,sheen:ye,sheenColorMap:_e,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:rt,specularIntensityMap:U,transmission:ae,transmissionMap:fe,thicknessMap:j,gradientMap:J,opaque:x.transparent===!1&&x.blending===Br&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:de,alphaHash:je,combine:x.combine,mapUv:nt&&m(x.map.channel),aoMapUv:_n&&m(x.aoMap.channel),lightMapUv:Be&&m(x.lightMap.channel),bumpMapUv:Ye&&m(x.bumpMap.channel),normalMapUv:Re&&m(x.normalMap.channel),displacementMapUv:at&&m(x.displacementMap.channel),emissiveMapUv:Le&&m(x.emissiveMap.channel),metalnessMapUv:A&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:me&&m(x.anisotropyMap.channel),clearcoatMapUv:$e&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(x.sheenRoughnessMap.channel),specularMapUv:Ne&&m(x.specularMap.channel),specularColorMapUv:rt&&m(x.specularColorMap.channel),specularIntensityMapUv:U&&m(x.specularIntensityMap.channel),transmissionMapUv:fe&&m(x.transmissionMap.channel),thicknessMapUv:j&&m(x.thicknessMap.channel),alphaMapUv:ue&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Re||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(nt||ue),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:on,decodeVideoTexture:nt&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qn,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:yt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&x.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=u.has(1),qe.vertexUv2s=u.has(2),qe.vertexUv3s=u.has(3),u.clear(),qe}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)E.push(H),E.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(g(E,x),S(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const E=y[x.type];let H;if(E){const z=Zt[E];H=Sc.clone(z.uniforms)}else H=x.uniforms;return H}function C(x,E){let H;for(let z=0,L=c.length;z<L;z++){const W=c[z];if(W.cacheKey===E){H=W,++H.usedTimes;break}}return H===void 0&&(H=new bA(t,E,x,s),c.push(H)),H}function T(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function X(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:b,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:X}}function NA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function IA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function yg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,_,y,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=y,d.group=m),e++,d}function a(h,f,p,_,y,m){const d=o(h,f,p,_,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,_,y,m){const d=o(h,f,p,_,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,f){n.length>1&&n.sort(h||IA),i.length>1&&i.sort(f||yg),r.length>1&&r.sort(f||yg)}function c(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function FA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Sg,t.set(i,[o])):r>=s.length?(o=new Sg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function OA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ve};break;case"SpotLight":n={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function kA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zA=0;function BA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HA(t){const e=new OA,n=kA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,s=new pt,o=new pt;function a(u){let c=0,h=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,_=0,y=0,m=0,d=0,v=0,g=0,S=0,b=0,C=0,T=0;u.sort(BA);for(let X=0,x=u.length;X<x;X++){const E=u[X],H=E.color,z=E.intensity,L=E.distance,W=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)c+=H.r*z,h+=H.g*z,f+=H.b*z;else if(E.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(E.sh.coefficients[k],z);T++}else if(E.isDirectionalLight){const k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const $=E.shadow,P=n.get(E);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=k,p++}else if(E.isSpotLight){const k=e.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(H).multiplyScalar(z),k.distance=L,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,i.spot[y]=k;const $=E.shadow;if(E.map&&(i.spotLightMap[b]=E.map,b++,$.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[y]=$.matrix,E.castShadow){const P=n.get(E);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=W,S++}y++}else if(E.isRectAreaLight){const k=e.get(E);k.color.copy(H).multiplyScalar(z),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=k,m++}else if(E.isPointLight){const k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){const $=E.shadow,P=n.get(E);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,P.shadowCameraNear=$.camera.near,P.shadowCameraFar=$.camera.far,i.pointShadow[_]=P,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=E.shadow.matrix,g++}i.point[_]=k,_++}else if(E.isHemisphereLight){const k=e.get(E);k.skyColor.copy(E.color).multiplyScalar(z),k.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[d]=k,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==g||R.numSpotShadows!==S||R.numSpotMaps!==b||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=g,R.numSpotShadows=S,R.numSpotMaps=b,R.numLightProbes=T,i.version=zA++)}function l(u,c){let h=0,f=0,p=0,_=0,y=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const g=u[d];if(g.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Mg(t){const e=new HA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function VA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Mg(t),e.set(r,[a])):s>=o.length?(a=new Mg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class yx extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sx extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jA(t,e,n){let i=new up;const r=new De,s=new De,o=new Oe,a=new yx({depthPacking:qv}),l=new Sx,u={},c=n.maxTextureSize,h={[zi]:en,[en]:zi,[Qn]:Qn},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:GA,fragmentShader:WA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Pn;_.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new fn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let d=this.type;this.render=function(C,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const X=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=d!==ai&&this.type===ai,L=d===ai&&this.type!==ai;for(let W=0,k=C.length;W<k;W++){const $=C[W],P=$.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const q=P.getFrameExtents();if(r.multiply(q),s.copy(P.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,P.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,P.mapSize.y=s.y)),P.map===null||z===!0||L===!0){const ie=this.type!==ai?{minFilter:Ot,magFilter:Ot}:{};P.map!==null&&P.map.dispose(),P.map=new _r(r.x,r.y,ie),P.map.texture.name=$.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const Q=P.getViewportCount();for(let ie=0;ie<Q;ie++){const Ee=P.getViewport(ie);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),H.viewport(o),P.updateMatrices($,ie),i=P.getFrustum(),S(T,R,P.camera,$,this.type)}P.isPointLightShadow!==!0&&this.type===ai&&v(P,R),P.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(X,x,E)};function v(C,T){const R=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _r(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,R,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,R,p,y,null)}function g(C,T,R,X){let x=null;const E=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)x=E;else if(x=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=x.uuid,z=T.uuid;let L=u[H];L===void 0&&(L={},u[H]=L);let W=L[z];W===void 0&&(W=x.clone(),L[z]=W,T.addEventListener("dispose",b)),x=W}if(x.visible=T.visible,x.wireframe=T.wireframe,X===ai?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=t.properties.get(x);H.light=R}return x}function S(C,T,R,X,x){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const z=e.update(C),L=C.material;if(Array.isArray(L)){const W=z.groups;for(let k=0,$=W.length;k<$;k++){const P=W[k],q=L[P.materialIndex];if(q&&q.visible){const Q=g(C,q,X,x);C.onBeforeShadow(t,C,T,R,z,Q,P),t.renderBufferDirect(R,null,z,Q,C,P),C.onAfterShadow(t,C,T,R,z,Q,P)}}}else if(L.visible){const W=g(C,L,X,x);C.onBeforeShadow(t,C,T,R,z,W,null),t.renderBufferDirect(R,null,z,W,C,null),C.onAfterShadow(t,C,T,R,z,W,null)}}const H=C.children;for(let z=0,L=H.length;z<L;z++)S(H[z],T,R,X,x)}function b(C){C.target.removeEventListener("dispose",b);for(const R in u){const X=u[R],x=C.target.uuid;x in X&&(X[x].dispose(),delete X[x])}}}const XA={[su]:ou,[au]:cu,[lu]:hu,[qr]:uu,[ou]:su,[cu]:au,[hu]:lu,[uu]:qr};function YA(t){function e(){let U=!1;const fe=new Oe;let j=null;const J=new Oe(0,0,0,0);return{setMask:function(ue){j!==ue&&!U&&(t.colorMask(ue,ue,ue,ue),j=ue)},setLocked:function(ue){U=ue},setClear:function(ue,de,je,yt,on){on===!0&&(ue*=yt,de*=yt,je*=yt),fe.set(ue,de,je,yt),J.equals(fe)===!1&&(t.clearColor(ue,de,je,yt),J.copy(fe))},reset:function(){U=!1,j=null,J.set(-1,0,0,0)}}}function n(){let U=!1,fe=!1,j=null,J=null,ue=null;return{setReversed:function(de){fe=de},setTest:function(de){de?he(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(de){j!==de&&!U&&(t.depthMask(de),j=de)},setFunc:function(de){if(fe&&(de=XA[de]),J!==de){switch(de){case su:t.depthFunc(t.NEVER);break;case ou:t.depthFunc(t.ALWAYS);break;case au:t.depthFunc(t.LESS);break;case qr:t.depthFunc(t.LEQUAL);break;case lu:t.depthFunc(t.EQUAL);break;case uu:t.depthFunc(t.GEQUAL);break;case cu:t.depthFunc(t.GREATER);break;case hu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=de}},setLocked:function(de){U=de},setClear:function(de){ue!==de&&(t.clearDepth(de),ue=de)},reset:function(){U=!1,j=null,J=null,ue=null}}}function i(){let U=!1,fe=null,j=null,J=null,ue=null,de=null,je=null,yt=null,on=null;return{setTest:function(qe){U||(qe?he(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(qe){fe!==qe&&!U&&(t.stencilMask(qe),fe=qe)},setFunc:function(qe,an,_i){(j!==qe||J!==an||ue!==_i)&&(t.stencilFunc(qe,an,_i),j=qe,J=an,ue=_i)},setOp:function(qe,an,_i){(de!==qe||je!==an||yt!==_i)&&(t.stencilOp(qe,an,_i),de=qe,je=an,yt=_i)},setLocked:function(qe){U=qe},setClear:function(qe){on!==qe&&(t.clearStencil(qe),on=qe)},reset:function(){U=!1,fe=null,j=null,J=null,ue=null,de=null,je=null,yt=null,on=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,f=[],p=null,_=!1,y=null,m=null,d=null,v=null,g=null,S=null,b=null,C=new Ve(0,0,0),T=0,R=!1,X=null,x=null,E=null,H=null,z=null;const L=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),W=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=k>=2);let P=null,q={};const Q=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Ee=new Oe().fromArray(Q),ze=new Oe().fromArray(ie);function Y(U,fe,j,J){const ue=new Uint8Array(4),de=t.createTexture();t.bindTexture(U,de),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<j;je++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(fe+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return de}const ne={};ne[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(qr),Be(!1),Ye(Uf),he(t.CULL_FACE),D(Di);function he(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function le(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Ue(U,fe){return c[U]!==fe?(t.bindFramebuffer(U,fe),c[U]=fe,U===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ae(U,fe){let j=f,J=!1;if(U){j=h.get(fe),j===void 0&&(j=[],h.set(fe,j));const ue=U.textures;if(j.length!==ue.length||j[0]!==t.COLOR_ATTACHMENT0){for(let de=0,je=ue.length;de<je;de++)j[de]=t.COLOR_ATTACHMENT0+de;j.length=ue.length,J=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,J=!0);J&&t.drawBuffers(j)}function Ge(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const nt={[tr]:t.FUNC_ADD,[Sv]:t.FUNC_SUBTRACT,[Mv]:t.FUNC_REVERSE_SUBTRACT};nt[Ev]=t.MIN,nt[wv]=t.MAX;const We={[Tv]:t.ZERO,[Av]:t.ONE,[Cv]:t.SRC_COLOR,[iu]:t.SRC_ALPHA,[Uv]:t.SRC_ALPHA_SATURATE,[Lv]:t.DST_COLOR,[bv]:t.DST_ALPHA,[Rv]:t.ONE_MINUS_SRC_COLOR,[ru]:t.ONE_MINUS_SRC_ALPHA,[Dv]:t.ONE_MINUS_DST_COLOR,[Pv]:t.ONE_MINUS_DST_ALPHA,[Nv]:t.CONSTANT_COLOR,[Iv]:t.ONE_MINUS_CONSTANT_COLOR,[Fv]:t.CONSTANT_ALPHA,[Ov]:t.ONE_MINUS_CONSTANT_ALPHA};function D(U,fe,j,J,ue,de,je,yt,on,qe){if(U===Di){_===!0&&(le(t.BLEND),_=!1);return}if(_===!1&&(he(t.BLEND),_=!0),U!==yv){if(U!==y||qe!==R){if((m!==tr||g!==tr)&&(t.blendEquation(t.FUNC_ADD),m=tr,g=tr),qe)switch(U){case Br:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nf:t.blendFunc(t.ONE,t.ONE);break;case If:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ff:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Br:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case If:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ff:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,v=null,S=null,b=null,C.set(0,0,0),T=0,y=U,R=qe}return}ue=ue||fe,de=de||j,je=je||J,(fe!==m||ue!==g)&&(t.blendEquationSeparate(nt[fe],nt[ue]),m=fe,g=ue),(j!==d||J!==v||de!==S||je!==b)&&(t.blendFuncSeparate(We[j],We[J],We[de],We[je]),d=j,v=J,S=de,b=je),(yt.equals(C)===!1||on!==T)&&(t.blendColor(yt.r,yt.g,yt.b,on),C.copy(yt),T=on),y=U,R=!1}function _n(U,fe){U.side===Qn?le(t.CULL_FACE):he(t.CULL_FACE);let j=U.side===en;fe&&(j=!j),Be(j),U.blending===Br&&U.transparent===!1?D(Di):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),at(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){X!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),X=U)}function Ye(U){U!==_v?(he(t.CULL_FACE),U!==x&&(U===Uf?t.cullFace(t.BACK):U===vv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),x=U}function Re(U){U!==E&&(W&&t.lineWidth(U),E=U)}function at(U,fe,j){U?(he(t.POLYGON_OFFSET_FILL),(H!==fe||z!==j)&&(t.polygonOffset(fe,j),H=fe,z=j)):le(t.POLYGON_OFFSET_FILL)}function Le(U){U?he(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function A(U){U===void 0&&(U=t.TEXTURE0+L-1),P!==U&&(t.activeTexture(U),P=U)}function M(U,fe,j){j===void 0&&(P===null?j=t.TEXTURE0+L-1:j=P);let J=q[j];J===void 0&&(J={type:void 0,texture:void 0},q[j]=J),(J.type!==U||J.texture!==fe)&&(P!==j&&(t.activeTexture(j),P=j),t.bindTexture(U,fe||ne[U]),J.type=U,J.texture=fe)}function B(){const U=q[P];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){Ee.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ee.copy(U))}function _e(U){ze.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function He(U,fe){let j=l.get(fe);j===void 0&&(j=new WeakMap,l.set(fe,j));let J=j.get(U);J===void 0&&(J=t.getUniformBlockIndex(fe,U.name),j.set(U,J))}function Ne(U,fe){const J=l.get(fe).get(U);a.get(fe)!==J&&(t.uniformBlockBinding(fe,J,U.__bindingPointIndex),a.set(fe,J))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},P=null,q={},c={},h=new WeakMap,f=[],p=null,_=!1,y=null,m=null,d=null,v=null,g=null,S=null,b=null,C=new Ve(0,0,0),T=0,R=!1,X=null,x=null,E=null,H=null,z=null,Ee.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:le,bindFramebuffer:Ue,drawBuffers:Ae,useProgram:Ge,setBlending:D,setMaterial:_n,setFlipSided:Be,setCullFace:Ye,setLineWidth:Re,setPolygonOffset:at,setScissorTest:Le,activeTexture:A,bindTexture:M,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ge,texImage3D:be,updateUBOMapping:He,uniformBlockBinding:Ne,texStorage2D:$e,texStorage3D:re,texSubImage2D:K,texSubImage3D:ye,compressedTexSubImage2D:ae,compressedTexSubImage3D:me,scissor:Pe,viewport:_e,reset:rt}}function Eg(t,e,n,i){const r=$A(i);switch(n){case qd:return t*e;case Zd:return t*e;case Qd:return t*e*2;case xa:return t*e/r.components*r.byteLength;case pc:return t*e/r.components*r.byteLength;case mc:return t*e*2/r.components*r.byteLength;case gc:return t*e*2/r.components*r.byteLength;case Kd:return t*e*3/r.components*r.byteLength;case hn:return t*e*4/r.components*r.byteLength;case _c:return t*e*4/r.components*r.byteLength;case Io:case Fo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oo:case ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _u:case xu:return Math.max(t,16)*Math.max(e,8)/4;case gu:case vu:return Math.max(t,8)*Math.max(e,8)/2;case yu:case Su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Au:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case bu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Du:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Iu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zo:case Ou:case ku:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jd:case zu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bu:case Hu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $A(t){switch(t){case mi:case Xd:return{byteLength:1,components:1};case $s:case Yd:case Js:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case gr:case hc:case ci:return{byteLength:4,components:1};case $d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function qA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new De,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return p?new OffscreenCanvas(A,M):fa("canvas")}function y(A,M,B){let Z=1;const ee=Le(A);if((ee.width>B||ee.height>B)&&(Z=B/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(Z*ee.width),ye=Math.floor(Z*ee.height);h===void 0&&(h=_(K,ye));const ae=M?_(K,ye):h;return ae.width=K,ae.height=ye,ae.getContext("2d").drawImage(A,0,0,K,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+ye+")."),ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Ot&&A.minFilter!==Qt}function d(A){t.generateMipmap(A)}function v(A,M,B,Z,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=M;if(M===t.RED&&(B===t.FLOAT&&(K=t.R32F),B===t.HALF_FLOAT&&(K=t.R16F),B===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.R8UI),B===t.UNSIGNED_SHORT&&(K=t.R16UI),B===t.UNSIGNED_INT&&(K=t.R32UI),B===t.BYTE&&(K=t.R8I),B===t.SHORT&&(K=t.R16I),B===t.INT&&(K=t.R32I)),M===t.RG&&(B===t.FLOAT&&(K=t.RG32F),B===t.HALF_FLOAT&&(K=t.RG16F),B===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RG8UI),B===t.UNSIGNED_SHORT&&(K=t.RG16UI),B===t.UNSIGNED_INT&&(K=t.RG32UI),B===t.BYTE&&(K=t.RG8I),B===t.SHORT&&(K=t.RG16I),B===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGB8UI),B===t.UNSIGNED_SHORT&&(K=t.RGB16UI),B===t.UNSIGNED_INT&&(K=t.RGB32UI),B===t.BYTE&&(K=t.RGB8I),B===t.SHORT&&(K=t.RGB16I),B===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),B===t.UNSIGNED_INT&&(K=t.RGBA32UI),B===t.BYTE&&(K=t.RGBA8I),B===t.SHORT&&(K=t.RGBA16I),B===t.INT&&(K=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),M===t.RGBA){const ye=ee?oa:Ke.getTransfer(Z);B===t.FLOAT&&(K=t.RGBA32F),B===t.HALF_FLOAT&&(K=t.RGBA16F),B===t.UNSIGNED_BYTE&&(K=ye===st?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function g(A,M){let B;return A?M===null||M===gr||M===Qr?B=t.DEPTH24_STENCIL8:M===ci?B=t.DEPTH32F_STENCIL8:M===$s&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===gr||M===Qr?B=t.DEPTH_COMPONENT24:M===ci?B=t.DEPTH_COMPONENT32F:M===$s&&(B=t.DEPTH_COMPONENT16),B}function S(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ot&&A.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){const M=A.target;M.removeEventListener("dispose",b),T(M),M.isVideoTexture&&c.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),X(M)}function T(A){const M=i.get(A);if(M.__webglInit===void 0)return;const B=A.source,Z=f.get(B);if(Z){const ee=Z[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(A),Object.keys(Z).length===0&&f.delete(B)}i.remove(A)}function R(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const B=A.source,Z=f.get(B);delete Z[M.__cacheKey],o.memory.textures--}function X(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ee=0;ee<M.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=A.textures;for(let Z=0,ee=B.length;Z<ee;Z++){const K=i.get(B[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(A)}let x=0;function E(){x=0}function H(){const A=x;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),x+=1,A}function z(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function L(A,M){const B=i.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(B,A,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function W(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ze(B,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function k(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ze(B,A,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function $(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const P={[pu]:t.REPEAT,[rr]:t.CLAMP_TO_EDGE,[mu]:t.MIRRORED_REPEAT},q={[Ot]:t.NEAREST,[Yv]:t.NEAREST_MIPMAP_NEAREST,[wo]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[bl]:t.LINEAR_MIPMAP_NEAREST,[bi]:t.LINEAR_MIPMAP_LINEAR},Q={[Qv]:t.NEVER,[rx]:t.ALWAYS,[Jv]:t.LESS,[ep]:t.LEQUAL,[ex]:t.EQUAL,[ix]:t.GEQUAL,[tx]:t.GREATER,[nx]:t.NOTEQUAL};function ie(A,M){if(M.type===ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===bl||M.magFilter===wo||M.magFilter===bi||M.minFilter===Qt||M.minFilter===bl||M.minFilter===wo||M.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,P[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,P[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,P[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ot||M.minFilter!==wo&&M.minFilter!==bi||M.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ee(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",b));const Z=M.source;let ee=f.get(Z);ee===void 0&&(ee={},f.set(Z,ee));const K=z(M);if(K!==A.__cacheKey){ee[K]===void 0&&(ee[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[K].usedTimes++;const ye=ee[A.__cacheKey];ye!==void 0&&(ee[A.__cacheKey].usedTimes--,ye.usedTimes===0&&R(M)),A.__cacheKey=K,A.__webglTexture=ee[K].texture}return B}function ze(A,M,B){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ee=Ee(A,M),K=M.source;n.bindTexture(Z,A.__webglTexture,t.TEXTURE0+B);const ye=i.get(K);if(K.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const ae=Ke.getPrimaries(Ke.workingColorSpace),me=M.colorSpace===In?null:Ke.getPrimaries(M.colorSpace),$e=M.colorSpace===In||ae===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let re=y(M.image,!1,r.maxTextureSize);re=at(M,re);const ge=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let Pe=v(M.internalFormat,ge,be,M.colorSpace,M.isVideoTexture);ie(Z,M);let _e;const He=M.mipmaps,Ne=M.isVideoTexture!==!0,rt=ye.__version===void 0||ee===!0,U=K.dataReady,fe=S(M,re);if(M.isDepthTexture)Pe=g(M.format===Jr,M.type),rt&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,Pe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,ge,be,null));else if(M.isDataTexture)if(He.length>0){Ne&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,Pe,He[0].width,He[0].height);for(let j=0,J=He.length;j<J;j++)_e=He[j],Ne?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,be,_e.data):n.texImage2D(t.TEXTURE_2D,j,Pe,_e.width,_e.height,0,ge,be,_e.data);M.generateMipmaps=!1}else Ne?(rt&&n.texStorage2D(t.TEXTURE_2D,fe,Pe,re.width,re.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ge,be,re.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,ge,be,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Pe,He[0].width,He[0].height,re.depth);for(let j=0,J=He.length;j<J;j++)if(_e=He[j],M.format!==hn)if(ge!==null)if(Ne){if(U)if(M.layerUpdates.size>0){const ue=Eg(_e.width,_e.height,M.format,M.type);for(const de of M.layerUpdates){const je=_e.data.subarray(de*ue/_e.data.BYTES_PER_ELEMENT,(de+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,de,_e.width,_e.height,1,ge,je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,re.depth,ge,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Pe,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,re.depth,ge,be,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Pe,_e.width,_e.height,re.depth,0,ge,be,_e.data)}else{Ne&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,Pe,He[0].width,He[0].height);for(let j=0,J=He.length;j<J;j++)_e=He[j],M.format!==hn?ge!==null?Ne?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,be,_e.data):n.texImage2D(t.TEXTURE_2D,j,Pe,_e.width,_e.height,0,ge,be,_e.data)}else if(M.isDataArrayTexture)if(Ne){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Pe,re.width,re.height,re.depth),U)if(M.layerUpdates.size>0){const j=Eg(re.width,re.height,M.format,M.type);for(const J of M.layerUpdates){const ue=re.data.subarray(J*j/re.data.BYTES_PER_ELEMENT,(J+1)*j/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ge,be,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,be,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,ge,be,re.data);else if(M.isData3DTexture)Ne?(rt&&n.texStorage3D(t.TEXTURE_3D,fe,Pe,re.width,re.height,re.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,be,re.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,ge,be,re.data);else if(M.isFramebufferTexture){if(rt)if(Ne)n.texStorage2D(t.TEXTURE_2D,fe,Pe,re.width,re.height);else{let j=re.width,J=re.height;for(let ue=0;ue<fe;ue++)n.texImage2D(t.TEXTURE_2D,ue,Pe,j,J,0,ge,be,null),j>>=1,J>>=1}}else if(He.length>0){if(Ne&&rt){const j=Le(He[0]);n.texStorage2D(t.TEXTURE_2D,fe,Pe,j.width,j.height)}for(let j=0,J=He.length;j<J;j++)_e=He[j],Ne?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge,be,_e):n.texImage2D(t.TEXTURE_2D,j,Pe,ge,be,_e);M.generateMipmaps=!1}else if(Ne){if(rt){const j=Le(re);n.texStorage2D(t.TEXTURE_2D,fe,Pe,j.width,j.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,be,re)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ge,be,re);m(M)&&d(Z),ye.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Y(A,M,B){if(M.image.length!==6)return;const Z=Ee(A,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const K=i.get(ee);if(ee.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+B);const ye=Ke.getPrimaries(Ke.workingColorSpace),ae=M.colorSpace===In?null:Ke.getPrimaries(M.colorSpace),me=M.colorSpace===In||ye===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!$e&&!re?ge[J]=y(M.image[J],!0,r.maxCubemapSize):ge[J]=re?M.image[J].image:M.image[J],ge[J]=at(M,ge[J]);const be=ge[0],Pe=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),He=v(M.internalFormat,Pe,_e,M.colorSpace),Ne=M.isVideoTexture!==!0,rt=K.__version===void 0||Z===!0,U=ee.dataReady;let fe=S(M,be);ie(t.TEXTURE_CUBE_MAP,M);let j;if($e){Ne&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,He,be.width,be.height);for(let J=0;J<6;J++){j=ge[J].mipmaps;for(let ue=0;ue<j.length;ue++){const de=j[ue];M.format!==hn?Pe!==null?Ne?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,de.width,de.height,Pe,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,He,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,de.width,de.height,Pe,_e,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,He,de.width,de.height,0,Pe,_e,de.data)}}}else{if(j=M.mipmaps,Ne&&rt){j.length>0&&fe++;const J=Le(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,He,J.width,J.height)}for(let J=0;J<6;J++)if(re){Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Pe,_e,ge[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,ge[J].width,ge[J].height,0,Pe,_e,ge[J].data);for(let ue=0;ue<j.length;ue++){const je=j[ue].image[J].image;Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,je.width,je.height,Pe,_e,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,He,je.width,je.height,0,Pe,_e,je.data)}}else{Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,_e,ge[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Pe,_e,ge[J]);for(let ue=0;ue<j.length;ue++){const de=j[ue];Ne?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Pe,_e,de.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,He,Pe,_e,de.image[J])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),K.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ne(A,M,B,Z,ee,K){const ye=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),me=v(B.internalFormat,ye,ae,B.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>K),ge=Math.max(1,M.height>>K);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,K,me,re,ge,M.depth,0,ye,ae,null):n.texImage2D(ee,K,me,re,ge,0,ye,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ee,i.get(B).__webglTexture,0,Be(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ee,i.get(B).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(A,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const Z=M.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=g(M.stencilBuffer,ee),ye=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=Be(M);Ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,K,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,A)}else{const Z=M.textures;for(let ee=0;ee<Z.length;ee++){const K=Z[ee],ye=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),me=v(K.internalFormat,ye,ae,K.colorSpace),$e=Be(M);B&&Ye(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,me,M.width,M.height):Ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,ee=Be(M);if(M.depthTexture.format===Hr)Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Jr)Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ue(A){const M=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");le(M.__webglFramebuffer,A)}else if(B){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),he(M.__webglDepthbuffer[Z],A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),he(M.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(A,M,B){const Z=i.get(A);M!==void 0&&ne(Z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ue(A)}function Ge(A){const M=A.texture,B=i.get(A),Z=i.get(M);A.addEventListener("dispose",C);const ee=A.textures,K=A.isWebGLCubeRenderTarget===!0,ye=ee.length>1;if(ye||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let me=0;me<M.mipmaps.length;me++)B.__webglFramebuffer[ae][me]=t.createFramebuffer()}else B.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)B.__webglFramebuffer[ae]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ye)for(let ae=0,me=ee.length;ae<me;ae++){const $e=i.get(ee[ae]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Ye(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const me=ee[ae];B.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const $e=s.convert(me.format,me.colorSpace),re=s.convert(me.type),ge=v(me.internalFormat,$e,re,me.colorSpace,A.isXRRenderTarget===!0),be=Be(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),he(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(t.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(B.__webglFramebuffer[ae][me],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else ne(B.__webglFramebuffer[ae],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let ae=0,me=ee.length;ae<me;ae++){const $e=ee[ae],re=i.get($e);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ie(t.TEXTURE_2D,$e),ne(B.__webglFramebuffer,A,$e,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m($e)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,Z.__webglTexture),ie(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(B.__webglFramebuffer[me],A,M,t.COLOR_ATTACHMENT0,ae,me);else ne(B.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ae,0);m(M)&&d(ae),n.unbindTexture()}A.depthBuffer&&Ue(A)}function nt(A){const M=A.textures;for(let B=0,Z=M.length;B<Z;B++){const ee=M[B];if(m(ee)){const K=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(ee).__webglTexture;n.bindTexture(K,ye),d(K),n.unbindTexture()}}}const We=[],D=[];function _n(A){if(A.samples>0){if(Ye(A)===!1){const M=A.textures,B=A.width,Z=A.height;let ee=t.COLOR_BUFFER_BIT;const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(A),ae=M.length>1;if(ae)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<M.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const $e=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,B,Z,0,0,B,Z,ee,t.NEAREST),l===!0&&(We.length=0,D.length=0,We.push(t.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(We.push(K),D.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const $e=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Be(A){return Math.min(r.maxSamples,A.samples)}function Ye(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(A){const M=o.render.frame;c.get(A)!==M&&(c.set(A,M),A.update())}function at(A,M){const B=A.colorSpace,Z=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Hi&&B!==In&&(Ke.getTransfer(B)===st?(Z!==hn||ee!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=E,this.setTexture2D=L,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=Ae,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ye}function Mx(t,e){function n(i,r=In){let s;const o=Ke.getTransfer(r);if(i===mi)return t.UNSIGNED_BYTE;if(i===fc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===$d)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xd)return t.BYTE;if(i===Yd)return t.SHORT;if(i===$s)return t.UNSIGNED_SHORT;if(i===hc)return t.INT;if(i===gr)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Js)return t.HALF_FLOAT;if(i===qd)return t.ALPHA;if(i===Kd)return t.RGB;if(i===hn)return t.RGBA;if(i===Zd)return t.LUMINANCE;if(i===Qd)return t.LUMINANCE_ALPHA;if(i===Hr)return t.DEPTH_COMPONENT;if(i===Jr)return t.DEPTH_STENCIL;if(i===xa)return t.RED;if(i===pc)return t.RED_INTEGER;if(i===mc)return t.RG;if(i===gc)return t.RG_INTEGER;if(i===_c)return t.RGBA_INTEGER;if(i===Io||i===Fo||i===Oo||i===ko)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gu||i===_u||i===vu||i===xu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_u)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yu||i===Su||i===Mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yu||i===Su)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Eu||i===wu||i===Tu||i===Au||i===Cu||i===Ru||i===bu||i===Pu||i===Lu||i===Du||i===Uu||i===Nu||i===Iu||i===Fu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Eu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Au)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ru)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Du)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Iu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fu)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===Ou||i===ku)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zo)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ku)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===zu||i===Bu||i===Hu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Ex extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KA={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Cn({vertexShader:ZA,fragmentShader:QA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fn(new Sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eC extends Mr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,_=null;const y=new JA,m=n.getContextAttributes();let d=null,v=null;const g=[],S=[],b=new De;let C=null;const T=new En;T.layers.enable(1),T.viewport=new Oe;const R=new En;R.layers.enable(2),R.viewport=new Oe;const X=[T,R],x=new Ex;x.layers.enable(1),x.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=g[Y];return ne===void 0&&(ne=new Ch,g[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=g[Y];return ne===void 0&&(ne=new Ch,g[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=g[Y];return ne===void 0&&(ne=new Ch,g[Y]=ne),ne.getHandSpace()};function z(Y){const ne=S.indexOf(Y.inputSource);if(ne===-1)return;const he=g[ne];he!==void 0&&(he.update(Y.inputSource,Y.frame,u||o),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",W);for(let Y=0;Y<g.length;Y++){const ne=S[Y];ne!==null&&(S[Y]=null,g[Y].disconnect(ne))}E=null,H=null,y.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,v=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",L),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new _r(p.framebufferWidth,p.framebufferHeight,{format:hn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,he=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Jr:Hr,he=m.stencil?Qr:gr);const Ue={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new _r(f.textureWidth,f.textureHeight,{format:hn,type:mi,depthTexture:new hp(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(Y){for(let ne=0;ne<Y.removed.length;ne++){const he=Y.removed[ne],le=S.indexOf(he);le>=0&&(S[le]=null,g[le].disconnect(he))}for(let ne=0;ne<Y.added.length;ne++){const he=Y.added[ne];let le=S.indexOf(he);if(le===-1){for(let Ae=0;Ae<g.length;Ae++)if(Ae>=S.length){S.push(he),le=Ae;break}else if(S[Ae]===null){S[Ae]=he,le=Ae;break}if(le===-1)break}const Ue=g[le];Ue&&Ue.connect(he)}}const k=new I,$=new I;function P(Y,ne,he){k.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const le=k.distanceTo($),Ue=ne.projectionMatrix.elements,Ae=he.projectionMatrix.elements,Ge=Ue[14]/(Ue[10]-1),nt=Ue[14]/(Ue[10]+1),We=(Ue[9]+1)/Ue[5],D=(Ue[9]-1)/Ue[5],_n=(Ue[8]-1)/Ue[0],Be=(Ae[8]+1)/Ae[0],Ye=Ge*_n,Re=Ge*Be,at=le/(-_n+Be),Le=at*-_n;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Le),Y.translateZ(at),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ue[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const A=Ge+at,M=nt+at,B=Ye-Le,Z=Re+(le-Le),ee=We*nt/M*A,K=D*nt/M*A;Y.projectionMatrix.makePerspective(B,Z,ee,K,A,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function q(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,he=Y.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(he=y.depthFar)),x.near=R.near=T.near=ne,x.far=R.far=T.far=he,(E!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,H=x.far);const le=Y.parent,Ue=x.cameras;q(x,le);for(let Ae=0;Ae<Ue.length;Ae++)q(Ue[Ae],le);Ue.length===2?P(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),Q(Y,x,le)};function Q(Y,ne,he){he===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ca*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ie=null;function Ee(Y,ne){if(c=ne.getViewerPose(u||o),_=ne,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let le=!1;he.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Ae=0;Ae<he.length;Ae++){const Ge=he[Ae];let nt=null;if(p!==null)nt=p.getViewport(Ge);else{const D=h.getViewSubImage(f,Ge);nt=D.viewport,Ae===0&&(e.setRenderTargetTextures(v,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let We=X[Ae];We===void 0&&(We=new En,We.layers.enable(Ae),We.viewport=new Oe,X[Ae]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(nt.x,nt.y,nt.width,nt.height),Ae===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(We)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Ae=h.getDepthInformation(he[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,r.renderState)}}for(let he=0;he<g.length;he++){const le=S[he],Ue=g[he];le!==null&&Ue!==void 0&&Ue.update(le,ne,u||o)}ie&&ie(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const ze=new px;ze.setAnimationLoop(Ee),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}const br=new gi,tC=new pt;function nC(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,hx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,g):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),g=v.envMap,S=v.envMapRotation;g&&(m.envMap.value=g,br.copy(S),br.x*=-1,br.y*=-1,br.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(tC.makeRotationFromEuler(br)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function u(v,g){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const b=g.program;i.updateUBOMapping(v,b);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function c(v){const g=h();v.__bindingPointIndex=g;const S=t.createBuffer(),b=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],S=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,T=S.length;C<T;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let X=0,x=R.length;X<x;X++){const E=R[X];if(p(E,C,X,b)===!0){const H=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let L=0;for(let W=0;W<z.length;W++){const k=z[W],$=y(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,H+L,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,S,b){const C=v.value,T=g+"_"+S;if(b[T]===void 0)return typeof C=="number"||typeof C=="boolean"?b[T]=C:b[T]=C.clone(),!0;{const R=b[T];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return b[T]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function _(v){const g=v.uniforms;let S=0;const b=16;for(let T=0,R=g.length;T<R;T++){const X=Array.isArray(g[T])?g[T]:[g[T]];for(let x=0,E=X.length;x<E;x++){const H=X[x],z=Array.isArray(H.value)?H.value:[H.value];for(let L=0,W=z.length;L<W;L++){const k=z[L],$=y(k),P=S%b,q=P%$.boundary,Q=P+q;S+=q,Q!==0&&b-Q<$.storage&&(S+=b-Q),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=$.storage}}}const C=S%b;return C>0&&(S+=b-C),v.__size=S,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class wx{constructor(e={}){const{canvas:n=ox(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Ui,this.toneMappingExposure=1;const g=this;let S=!1,b=0,C=0,T=null,R=-1,X=null;const x=new Oe,E=new Oe;let H=null;const z=new Ve(0);let L=0,W=n.width,k=n.height,$=1,P=null,q=null;const Q=new Oe(0,0,W,k),ie=new Oe(0,0,W,k);let Ee=!1;const ze=new up;let Y=!1,ne=!1;const he=new pt,le=new pt,Ue=new I,Ae=new Oe,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function We(){return T===null?$:1}let D=i;function _n(w,N){return n.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cc}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",de,!1),D===null){const N="webgl2";if(D=_n(N,w),D===null)throw _n(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,Ye,Re,at,Le,A,M,B,Z,ee,K,ye,ae,me,$e,re,ge,be,Pe,_e,He,Ne,rt,U;function fe(){Be=new dT(D),Be.init(),Ne=new Mx(D,Be),Ye=new aT(D,Be,e,Ne),Re=new YA(D),Ye.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),at=new gT(D),Le=new NA,A=new qA(D,Be,Re,Le,Ye,Ne,at),M=new uT(g),B=new fT(g),Z=new EE(D),rt=new sT(D,Z),ee=new pT(D,Z,at,rt),K=new vT(D,ee,Z,at),Pe=new _T(D,Ye,A),re=new lT(Le),ye=new UA(g,M,B,Be,Ye,rt,re),ae=new nC(g,Le),me=new FA,$e=new VA(Be),be=new rT(g,M,B,Re,K,f,l),ge=new jA(g,K,Ye),U=new iC(D,at,Ye,Re),_e=new oT(D,Be,at),He=new mT(D,Be,at),at.programs=ye.programs,g.capabilities=Ye,g.extensions=Be,g.properties=Le,g.renderLists=me,g.shadowMap=ge,g.state=Re,g.info=at}fe();const j=new eC(g,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(W,k,!1))},this.getSize=function(w){return w.set(W,k)},this.setSize=function(w,N,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,k=N,n.width=Math.floor(w*$),n.height=Math.floor(N*$),V===!0&&(n.style.width=w+"px",n.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(W*$,k*$).floor()},this.setDrawingBufferSize=function(w,N,V){W=w,k=N,$=V,n.width=Math.floor(w*V),n.height=Math.floor(N*V),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,N,V,G){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,N,V,G),Re.viewport(x.copy(Q).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,N,V,G){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,N,V,G),Re.scissor(E.copy(ie).multiplyScalar($).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(w){Re.setScissorTest(Ee=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(w=!0,N=!0,V=!0){let G=0;if(w){let F=!1;if(T!==null){const se=T.texture.format;F=se===_c||se===gc||se===pc}if(F){const se=T.texture.type,ce=se===mi||se===gr||se===$s||se===Qr||se===fc||se===dc,ve=be.getClearColor(),xe=be.getClearAlpha(),Te=ve.r,Ce=ve.g,Se=ve.b;ce?(p[0]=Te,p[1]=Ce,p[2]=Se,p[3]=xe,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Te,_[1]=Ce,_[2]=Se,_[3]=xe,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),$e.dispose(),Le.dispose(),M.dispose(),B.dispose(),K.dispose(),rt.dispose(),U.dispose(),ye.dispose(),j.dispose(),j.removeEventListener("sessionstart",gp),j.removeEventListener("sessionend",_p),Er.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=at.autoReset,N=ge.enabled,V=ge.autoUpdate,G=ge.needsUpdate,F=ge.type;fe(),at.autoReset=w,ge.enabled=N,ge.autoUpdate=V,ge.needsUpdate=G,ge.type=F}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function je(w){const N=w.target;N.removeEventListener("dispose",je),yt(N)}function yt(w){on(w),Le.remove(w)}function on(w){const N=Le.get(w).programs;N!==void 0&&(N.forEach(function(V){ye.releaseProgram(V)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,V,G,F,se){N===null&&(N=Ge);const ce=F.isMesh&&F.matrixWorld.determinant()<0,ve=$x(w,N,V,G,F);Re.setMaterial(G,ce);let xe=V.index,Te=1;if(G.wireframe===!0){if(xe=ee.getWireframeAttribute(V),xe===void 0)return;Te=2}const Ce=V.drawRange,Se=V.attributes.position;let Je=Ce.start*Te,lt=(Ce.start+Ce.count)*Te;se!==null&&(Je=Math.max(Je,se.start*Te),lt=Math.min(lt,(se.start+se.count)*Te)),xe!==null?(Je=Math.max(Je,0),lt=Math.min(lt,xe.count)):Se!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Se.count));const gt=lt-Je;if(gt<0||gt===1/0)return;rt.setup(F,G,ve,V,xe);let vn,Ze=_e;if(xe!==null&&(vn=Z.get(xe),Ze=He,Ze.setIndex(vn)),F.isMesh)G.wireframe===!0?(Re.setLineWidth(G.wireframeLinewidth*We()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(F.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),Re.setLineWidth(Me*We()),F.isLineSegments?Ze.setMode(D.LINES):F.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else F.isPoints?Ze.setMode(D.POINTS):F.isSprite&&Ze.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ze.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Me=F._multiDrawStarts,Lt=F._multiDrawCounts,Qe=F._multiDrawCount,Hn=xe?Z.get(xe).bytesPerElement:1,is=Le.get(G).currentProgram.getUniforms();for(let xn=0;xn<Qe;xn++)is.setValue(D,"_gl_DrawID",xn),Ze.render(Me[xn]/Hn,Lt[xn])}else if(F.isInstancedMesh)Ze.renderInstances(Je,gt,F.count);else if(V.isInstancedBufferGeometry){const Me=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Lt=Math.min(V.instanceCount,Me);Ze.renderInstances(Je,gt,Lt)}else Ze.render(Je,gt)};function qe(w,N,V){w.transparent===!0&&w.side===Qn&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Ea(w,N,V),w.side=zi,w.needsUpdate=!0,Ea(w,N,V),w.side=Qn):Ea(w,N,V)}this.compile=function(w,N,V=null){V===null&&(V=w),m=$e.get(V),m.init(N),v.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const G=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let ce=0;ce<se.length;ce++){const ve=se[ce];qe(ve,V,F),G.add(ve)}else qe(se,V,F),G.add(se)}),v.pop(),m=null,G},this.compileAsync=function(w,N,V=null){const G=this.compile(w,N,V);return new Promise(F=>{function se(){if(G.forEach(function(ce){Le.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){F(w);return}setTimeout(se,10)}Be.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let an=null;function _i(w){an&&an(w)}function gp(){Er.stop()}function _p(){Er.start()}const Er=new px;Er.setAnimationLoop(_i),typeof self<"u"&&Er.setContext(self),this.setAnimationLoop=function(w){an=w,j.setAnimationLoop(w),w===null?Er.stop():Er.start()},j.addEventListener("sessionstart",gp),j.addEventListener("sessionend",_p),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,N,T),m=$e.get(w,v.length),m.init(N),v.push(m),le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ze.setFromProjectionMatrix(le),ne=this.localClippingEnabled,Y=re.init(this.clippingPlanes,ne),y=me.get(w,d.length),y.init(),d.push(y),j.enabled===!0&&j.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&wc(se,N,-1/0,g.sortObjects)}wc(w,N,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(P,q),nt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,nt&&be.addToRenderList(y,w),this.info.render.frame++,Y===!0&&re.beginShadows();const V=m.state.shadowsArray;ge.render(V,w,N),Y===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,F=y.transmissive;if(m.setupLights(),N.isArrayCamera){const se=N.cameras;if(F.length>0)for(let ce=0,ve=se.length;ce<ve;ce++){const xe=se[ce];xp(G,F,w,xe)}nt&&be.render(w);for(let ce=0,ve=se.length;ce<ve;ce++){const xe=se[ce];vp(y,w,xe,xe.viewport)}}else F.length>0&&xp(G,F,w,N),nt&&be.render(w),vp(y,w,N);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(g,w,N),rt.resetDefaultState(),R=-1,X=null,v.pop(),v.length>0?(m=v[v.length-1],Y===!0&&re.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function wc(w,N,V,G){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){G&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);const ce=K.update(w),ve=w.material;ve.visible&&y.push(w,ce,ve,V,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const ce=K.update(w),ve=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ae.copy(ce.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(ve)){const xe=ce.groups;for(let Te=0,Ce=xe.length;Te<Ce;Te++){const Se=xe[Te],Je=ve[Se.materialIndex];Je&&Je.visible&&y.push(w,ce,Je,V,Ae.z,Se)}}else ve.visible&&y.push(w,ce,ve,V,Ae.z,null)}}const se=w.children;for(let ce=0,ve=se.length;ce<ve;ce++)wc(se[ce],N,V,G)}function vp(w,N,V,G){const F=w.opaque,se=w.transmissive,ce=w.transparent;m.setupLightsView(V),Y===!0&&re.setGlobalState(g.clippingPlanes,V),G&&Re.viewport(x.copy(G)),F.length>0&&Ma(F,N,V),se.length>0&&Ma(se,N,V),ce.length>0&&Ma(ce,N,V),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function xp(w,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new _r(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Js:mi,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const se=m.state.transmissionRenderTarget[G.id],ce=G.viewport||x;se.setSize(ce.z,ce.w);const ve=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(z),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear(),nt&&be.render(V);const xe=g.toneMapping;g.toneMapping=Ui;const Te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Y===!0&&re.setGlobalState(g.clippingPlanes,G),Ma(w,V,G),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Se=0,Je=N.length;Se<Je;Se++){const lt=N[Se],gt=lt.object,vn=lt.geometry,Ze=lt.material,Me=lt.group;if(Ze.side===Qn&&gt.layers.test(G.layers)){const Lt=Ze.side;Ze.side=en,Ze.needsUpdate=!0,yp(gt,V,G,vn,Ze,Me),Ze.side=Lt,Ze.needsUpdate=!0,Ce=!0}}Ce===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}g.setRenderTarget(ve),g.setClearColor(z,L),Te!==void 0&&(G.viewport=Te),g.toneMapping=xe}function Ma(w,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,se=w.length;F<se;F++){const ce=w[F],ve=ce.object,xe=ce.geometry,Te=G===null?ce.material:G,Ce=ce.group;ve.layers.test(V.layers)&&yp(ve,N,V,xe,Te,Ce)}}function yp(w,N,V,G,F,se){w.onBeforeRender(g,N,V,G,F,se),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(g,N,V,G,w,se),F.transparent===!0&&F.side===Qn&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,g.renderBufferDirect(V,N,G,F,w,se),F.side=zi,F.needsUpdate=!0,g.renderBufferDirect(V,N,G,F,w,se),F.side=Qn):g.renderBufferDirect(V,N,G,F,w,se),w.onAfterRender(g,N,V,G,F,se)}function Ea(w,N,V){N.isScene!==!0&&(N=Ge);const G=Le.get(w),F=m.state.lights,se=m.state.shadowsArray,ce=F.state.version,ve=ye.getParameters(w,F.state,se,N,V),xe=ye.getProgramCacheKey(ve);let Te=G.programs;G.environment=w.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",je),Te=new Map,G.programs=Te);let Ce=Te.get(xe);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===ce)return Mp(w,ve),Ce}else ve.uniforms=ye.getUniforms(w),w.onBeforeCompile(ve,g),Ce=ye.acquireProgram(ve,xe),Te.set(xe,Ce),G.uniforms=ve.uniforms;const Se=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=re.uniform),Mp(w,ve),G.needsLights=Kx(w),G.lightsStateVersion=ce,G.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function Sp(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Ll.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Mp(w,N){const V=Le.get(w);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function $x(w,N,V,G,F){N.isScene!==!0&&(N=Ge),A.resetTextureUnits();const se=N.fog,ce=G.isMeshStandardMaterial?N.environment:null,ve=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hi,xe=(G.isMeshStandardMaterial?B:M).get(G.envMap||ce),Te=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ce=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let gt=Ui;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=g.toneMapping);const vn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=vn!==void 0?vn.length:0,Me=Le.get(G),Lt=m.state.lights;if(Y===!0&&(ne===!0||w!==X)){const Ln=w===X&&G.id===R;re.setState(G,w,Ln)}let Qe=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Lt.state.version||Me.outputColorSpace!==ve||F.isBatchedMesh&&Me.batching===!1||!F.isBatchedMesh&&Me.batching===!0||F.isBatchedMesh&&Me.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Me.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Me.instancing===!1||!F.isInstancedMesh&&Me.instancing===!0||F.isSkinnedMesh&&Me.skinning===!1||!F.isSkinnedMesh&&Me.skinning===!0||F.isInstancedMesh&&Me.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Me.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Me.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Me.instancingMorph===!1&&F.morphTexture!==null||Me.envMap!==xe||G.fog===!0&&Me.fog!==se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==re.numPlanes||Me.numIntersection!==re.numIntersection)||Me.vertexAlphas!==Te||Me.vertexTangents!==Ce||Me.morphTargets!==Se||Me.morphNormals!==Je||Me.morphColors!==lt||Me.toneMapping!==gt||Me.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Me.__version=G.version);let Hn=Me.currentProgram;Qe===!0&&(Hn=Ea(G,N,F));let is=!1,xn=!1,Tc=!1;const vt=Hn.getUniforms(),Gi=Me.uniforms;if(Re.useProgram(Hn.program)&&(is=!0,xn=!0,Tc=!0),G.id!==R&&(R=G.id,xn=!0),is||X!==w){Ye.reverseDepthBuffer?(he.copy(w.projectionMatrix),iE(he),rE(he),vt.setValue(D,"projectionMatrix",he)):vt.setValue(D,"projectionMatrix",w.projectionMatrix),vt.setValue(D,"viewMatrix",w.matrixWorldInverse);const Ln=vt.map.cameraPosition;Ln!==void 0&&Ln.setValue(D,Ue.setFromMatrixPosition(w.matrixWorld)),Ye.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,xn=!0,Tc=!0)}if(F.isSkinnedMesh){vt.setOptional(D,F,"bindMatrix"),vt.setOptional(D,F,"bindMatrixInverse");const Ln=F.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),vt.setValue(D,"boneTexture",Ln.boneTexture,A))}F.isBatchedMesh&&(vt.setOptional(D,F,"batchingTexture"),vt.setValue(D,"batchingTexture",F._matricesTexture,A),vt.setOptional(D,F,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",F._indirectTexture,A),vt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",F._colorsTexture,A));const Ac=V.morphAttributes;if((Ac.position!==void 0||Ac.normal!==void 0||Ac.color!==void 0)&&Pe.update(F,V,Hn),(xn||Me.receiveShadow!==F.receiveShadow)&&(Me.receiveShadow=F.receiveShadow,vt.setValue(D,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Gi.envMap.value=xe,Gi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Gi.envMapIntensity.value=N.environmentIntensity),xn&&(vt.setValue(D,"toneMappingExposure",g.toneMappingExposure),Me.needsLights&&qx(Gi,Tc),se&&G.fog===!0&&ae.refreshFogUniforms(Gi,se),ae.refreshMaterialUniforms(Gi,G,$,k,m.state.transmissionRenderTarget[w.id]),Ll.upload(D,Sp(Me),Gi,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ll.upload(D,Sp(Me),Gi,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(D,"center",F.center),vt.setValue(D,"modelViewMatrix",F.modelViewMatrix),vt.setValue(D,"normalMatrix",F.normalMatrix),vt.setValue(D,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ln=G.uniformsGroups;for(let Cc=0,Zx=Ln.length;Cc<Zx;Cc++){const Ep=Ln[Cc];U.update(Ep,Hn),U.bind(Ep,Hn)}}return Hn}function qx(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Kx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,N,V){Le.get(w.texture).__webglTexture=N,Le.get(w.depthTexture).__webglTexture=V;const G=Le.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const V=Le.get(w);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,V=0){T=w,b=N,C=V;let G=!0,F=null,se=!1,ce=!1;if(w){const xe=Le.get(w);if(xe.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(xe.__hasExternalTextures)A.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Se=w.depthTexture;if(xe.__boundDepthTexture!==Se){if(Se!==null&&Le.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ce=!0);const Ce=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?F=Ce[N][V]:F=Ce[N],se=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?F=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[V]:F=Ce,x.copy(w.viewport),E.copy(w.scissor),H=w.scissorTest}else x.copy(Q).multiplyScalar($).floor(),E.copy(ie).multiplyScalar($).floor(),H=Ee;if(Re.bindFramebuffer(D.FRAMEBUFFER,F)&&G&&Re.drawBuffers(w,F),Re.viewport(x),Re.scissor(E),Re.setScissorTest(H),se){const xe=Le.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,V)}else if(ce){const xe=Le.get(w.texture),Te=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,V||0,Te)}R=-1},this.readRenderTargetPixels=function(w,N,V,G,F,se,ce){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){Re.bindFramebuffer(D.FRAMEBUFFER,ve);try{const xe=w.texture,Te=xe.format,Ce=xe.type;if(!Ye.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-G&&V>=0&&V<=w.height-F&&D.readPixels(N,V,G,F,Ne.convert(Te),Ne.convert(Ce),se)}finally{const xe=T!==null?Le.get(T).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,N,V,G,F,se,ce){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){const xe=w.texture,Te=xe.format,Ce=xe.type;if(!Ye.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-G&&V>=0&&V<=w.height-F){Re.bindFramebuffer(D.FRAMEBUFFER,ve);const Se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(N,V,G,F,Ne.convert(Te),Ne.convert(Ce),0);const Je=T!==null?Le.get(T).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,Je);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await nE(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Se),D.deleteSync(lt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,V=0){w.isTexture!==!0&&(Pl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-V),F=Math.floor(w.image.width*G),se=Math.floor(w.image.height*G),ce=N!==null?N.x:0,ve=N!==null?N.y:0;A.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ce,ve,F,se),Re.unbindTexture()},this.copyTextureToTexture=function(w,N,V=null,G=null,F=0){w.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let se,ce,ve,xe,Te,Ce;V!==null?(se=V.max.x-V.min.x,ce=V.max.y-V.min.y,ve=V.min.x,xe=V.min.y):(se=w.image.width,ce=w.image.height,ve=0,xe=0),G!==null?(Te=G.x,Ce=G.y):(Te=0,Ce=0);const Se=Ne.convert(N.format),Je=Ne.convert(N.type);A.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const lt=D.getParameter(D.UNPACK_ROW_LENGTH),gt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),vn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Me=D.getParameter(D.UNPACK_SKIP_IMAGES),Lt=w.isCompressedTexture?w.mipmaps[F]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,xe),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Te,Ce,se,ce,Se,Je,Lt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Te,Ce,Lt.width,Lt.height,Se,Lt.data):D.texSubImage2D(D.TEXTURE_2D,F,Te,Ce,se,ce,Se,Je,Lt),D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Me),F===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,N,V=null,G=null,F=0){w.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0);let se,ce,ve,xe,Te,Ce,Se,Je,lt;const gt=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(se=V.max.x-V.min.x,ce=V.max.y-V.min.y,ve=V.max.z-V.min.z,xe=V.min.x,Te=V.min.y,Ce=V.min.z):(se=gt.width,ce=gt.height,ve=gt.depth,xe=0,Te=0,Ce=0),G!==null?(Se=G.x,Je=G.y,lt=G.z):(Se=0,Je=0,lt=0);const vn=Ne.convert(N.format),Ze=Ne.convert(N.type);let Me;if(N.isData3DTexture)A.setTexture3D(N,0),Me=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),Me=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Lt=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Hn=D.getParameter(D.UNPACK_SKIP_PIXELS),is=D.getParameter(D.UNPACK_SKIP_ROWS),xn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Me,F,Se,Je,lt,se,ce,ve,vn,Ze,gt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,F,Se,Je,lt,se,ce,ve,vn,gt.data):D.texSubImage3D(Me,F,Se,Je,lt,se,ce,ve,vn,Ze,gt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,is),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xn),F===0&&N.generateMipmaps&&D.generateMipmap(Me),Re.unbindTexture()},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){b=0,C=0,T=null,Re.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vc?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===ya?"display-p3":"srgb"}}class Tx extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ax{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Vu,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new I;class Pi{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Jn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Jn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Jn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Jn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=et(n,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new gn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vr extends zt{constructor(e=null,n=1,i=1,r,s,o,a,l,u=Ot,c=Ot,h,f){super(null,o,a,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cx extends eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gu=new I,Wu=new I,wg=new pt,_o=new yc,al=new ns,Rh=new I,Tg=new I;let Rx=class extends tn{constructor(e=new Pn,n=new Cx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Gu.fromBufferAttribute(n,r-1),Wu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gu.distanceTo(Wu);e.setAttribute("lineDistance",new nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=s,e.ray.intersectsSphere(al)===!1)return;wg.copy(r).invert(),_o.copy(e.ray).applyMatrix4(wg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=u){const d=c.getX(y),v=c.getX(y+1),g=ll(this,e,_o,l,d,v);g&&n.push(g)}if(this.isLineLoop){const y=c.getX(_-1),m=c.getX(p),d=ll(this,e,_o,l,y,m);d&&n.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,m=_-1;y<m;y+=u){const d=ll(this,e,_o,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=ll(this,e,_o,l,_-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ll(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Gu.fromBufferAttribute(o,r),Wu.fromBufferAttribute(o,s),n.distanceSqToSegment(Gu,Wu,Rh,Tg)>i)return;Rh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Rh);if(!(l<e.near||l>e.far))return{distance:l,point:Tg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Ag=new I,Cg=new I;class bx extends Rx{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Ag.fromBufferAttribute(n,r),Cg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ag.distanceTo(Cg);e.setAttribute("lineDistance",new nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Px extends Pn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new I,s=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,c=l.length;u<c;++u){const h=l[u],f=h.start,p=h.count;for(let _=f,y=f+p;_<y;_+=3)for(let m=0;m<3;m++){const d=a.getX(_+m),v=a.getX(_+(m+1)%3);r.fromBufferAttribute(o,d),s.fromBufferAttribute(o,v),Rg(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let u=0;u<3;u++){const c=3*a+u,h=3*a+(u+1)%3;r.fromBufferAttribute(o,c),s.fromBufferAttribute(o,h),Rg(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new nn(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Rg(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}const Vf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Lx{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const p=u[h],_=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const Dx=new Lx;class Ec{constructor(e){this.manager=e!==void 0?e:Dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ux extends Ec{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=fa("img");function l(){c(),Vf.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(h){c(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class fp extends Ec{constructor(e){super(e)}load(e,n,i,r){const s=new zt,o=new Ux(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Nx extends Pn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ix{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=bg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function bg(){return performance.now()}class ju extends Ax{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class Xu{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Pg=new I,ul=new I;class Fx{constructor(e=new I,n=new I){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){Pg.subVectors(e,this.start),ul.subVectors(this.end,this.start);const i=ul.dot(ul);let s=ul.dot(Pg)/i;return n&&(s=Ft(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Ox extends Mr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);const kx=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Gv,AddEquation:tr,AddOperation:zv,AdditiveBlending:Nf,AgXToneMapping:jv,AlphaFormat:qd,AlwaysCompare:rx,AlwaysDepth:ou,AlwaysStencilFunc:Of,ArrayCamera:Ex,BackSide:en,BasicDepthPacking:$v,Box3:Vi,BoxGeometry:to,BufferAttribute:gn,BufferGeometry:Pn,ByteType:Xd,Cache:Vf,Camera:ap,CineonToneMapping:Vv,ClampToEdgeWrapping:rr,Clock:Ix,Color:Ve,ColorManagement:Ke,ConstantAlphaFactor:Fv,ConstantColorFactor:Nv,Controls:Ox,CubeCamera:fx,CubeReflectionMapping:Kr,CubeRefractionMapping:Zr,CubeTexture:lp,CubeUVReflectionMapping:va,CullFaceBack:Uf,CullFaceFront:vv,CullFaceNone:_v,CustomBlending:yv,CustomToneMapping:Wv,Data3DTexture:ux,DataArrayTexture:xc,DataTexture:Vr,DefaultLoadingManager:Dx,DepthFormat:Hr,DepthStencilFormat:Jr,DepthTexture:hp,DisplayP3ColorSpace:vc,DoubleSide:Qn,DstAlphaFactor:bv,DstColorFactor:Lv,DynamicDrawUsage:kf,EqualCompare:ex,EqualDepth:lu,EquirectangularReflectionMapping:fu,EquirectangularRefractionMapping:du,Euler:gi,EventDispatcher:Mr,Float32BufferAttribute:nn,FloatType:ci,FrontSide:zi,Frustum:up,GLSL3:zf,GreaterCompare:tx,GreaterDepth:cu,GreaterEqualCompare:ix,GreaterEqualDepth:uu,Group:Us,HalfFloatType:Js,ImageLoader:Ux,ImageUtils:ax,InstancedBufferGeometry:Nx,InstancedInterleavedBuffer:ju,IntType:hc,InterleavedBuffer:Ax,InterleavedBufferAttribute:Pi,KeepStencilOp:Dr,Layers:ip,LessCompare:Jv,LessDepth:au,LessEqualCompare:ep,LessEqualDepth:qr,Line:Rx,Line3:Fx,LineBasicMaterial:Cx,LineSegments:bx,LinearDisplayP3ColorSpace:ya,LinearFilter:Qt,LinearMipmapLinearFilter:bi,LinearMipmapNearestFilter:bl,LinearSRGBColorSpace:Hi,LinearToneMapping:Bv,LinearTransfer:oa,Loader:Ec,LoadingManager:Lx,LuminanceAlphaFormat:Qd,LuminanceFormat:Zd,MOUSE:pi,Material:eo,MathUtils:ha,Matrix3:Fe,Matrix4:pt,MaxEquation:wv,Mesh:fn,MeshBasicMaterial:rp,MeshDepthMaterial:yx,MeshDistanceMaterial:Sx,MinEquation:Ev,MirroredRepeatWrapping:mu,MixOperation:kv,MultiplyBlending:Ff,MultiplyOperation:Wd,NearestFilter:Ot,NearestMipmapLinearFilter:wo,NearestMipmapNearestFilter:Yv,NeutralToneMapping:Xv,NeverCompare:Qv,NeverDepth:su,NoBlending:Di,NoColorSpace:In,NoToneMapping:Ui,NormalBlending:Br,NotEqualCompare:nx,NotEqualDepth:hu,Object3D:tn,ObjectSpaceNormalMap:Zv,OneFactor:Av,OneMinusConstantAlphaFactor:Ov,OneMinusConstantColorFactor:Iv,OneMinusDstAlphaFactor:Pv,OneMinusDstColorFactor:Dv,OneMinusSrcAlphaFactor:ru,OneMinusSrcColorFactor:Rv,OrthographicCamera:mx,P3Primaries:la,PCFShadowMap:Gd,PCFSoftShadowMap:xv,PMREMGenerator:Bf,PerspectiveCamera:En,Plane:Ti,PlaneGeometry:Sa,Quaternion:vr,RED_GREEN_RGTC2_Format:Bu,RED_RGTC1_Format:Jd,REVISION:cc,RGBADepthPacking:qv,RGBAFormat:hn,RGBAIntegerFormat:_c,RGBA_ASTC_10x10_Format:Nu,RGBA_ASTC_10x5_Format:Lu,RGBA_ASTC_10x6_Format:Du,RGBA_ASTC_10x8_Format:Uu,RGBA_ASTC_12x10_Format:Iu,RGBA_ASTC_12x12_Format:Fu,RGBA_ASTC_4x4_Format:Eu,RGBA_ASTC_5x4_Format:wu,RGBA_ASTC_5x5_Format:Tu,RGBA_ASTC_6x5_Format:Au,RGBA_ASTC_6x6_Format:Cu,RGBA_ASTC_8x5_Format:Ru,RGBA_ASTC_8x6_Format:bu,RGBA_ASTC_8x8_Format:Pu,RGBA_BPTC_Format:zo,RGBA_ETC2_EAC_Format:Mu,RGBA_PVRTC_2BPPV1_Format:xu,RGBA_PVRTC_4BPPV1_Format:vu,RGBA_S3TC_DXT1_Format:Fo,RGBA_S3TC_DXT3_Format:Oo,RGBA_S3TC_DXT5_Format:ko,RGBFormat:Kd,RGB_BPTC_SIGNED_Format:Ou,RGB_BPTC_UNSIGNED_Format:ku,RGB_ETC1_Format:yu,RGB_ETC2_Format:Su,RGB_PVRTC_2BPPV1_Format:_u,RGB_PVRTC_4BPPV1_Format:gu,RGB_S3TC_DXT1_Format:Io,RGFormat:mc,RGIntegerFormat:gc,Ray:yc,Rec709Primaries:aa,RedFormat:xa,RedIntegerFormat:pc,ReinhardToneMapping:Hv,RenderTarget:lx,RepeatWrapping:pu,ReverseSubtractEquation:Mv,SIGNED_RED_GREEN_RGTC2_Format:Hu,SIGNED_RED_RGTC1_Format:zu,SRGBColorSpace:Kn,SRGBTransfer:st,Scene:Tx,ShaderChunk:Ie,ShaderLib:Zt,ShaderMaterial:Cn,ShortType:Yd,Source:np,Sphere:ns,Spherical:Xu,SrcAlphaFactor:iu,SrcAlphaSaturateFactor:Uv,SrcColorFactor:Cv,StaticDrawUsage:Vu,SubtractEquation:Sv,SubtractiveBlending:If,TOUCH:Ri,TangentSpaceNormalMap:Kv,Texture:zt,TextureLoader:fp,Triangle:Fn,UVMapping:jd,Uint16BufferAttribute:sp,Uint32BufferAttribute:op,UniformsLib:oe,UniformsUtils:Sc,UnsignedByteType:mi,UnsignedInt248Type:Qr,UnsignedInt5999Type:$d,UnsignedIntType:gr,UnsignedShort4444Type:fc,UnsignedShort5551Type:dc,UnsignedShortType:$s,VSMShadowMap:ai,Vector2:De,Vector3:I,Vector4:Oe,WebGLCoordinateSystem:hi,WebGLCubeRenderTarget:dx,WebGLRenderTarget:_r,WebGLRenderer:wx,WebGLUtils:Mx,WebGPUCoordinateSystem:ua,WireframeGeometry:Px,ZeroFactor:Tv,createCanvasElement:ox},Symbol.toStringTag,{value:"Module"})),Gf={rate:{unit:"mm/h",stops:[.1,.5,1,2,4,7,12,20,35,60]},accum:{unit:"mm",stops:[1,5,10,20,35,50,75,100,150,250]},temp:{unit:"°C",stops:[-15,-8,-3,0,4,8,12,16,20,26]}},Wf=["#7fb5d9","#4f93cf","#2f6fc0","#21a6a6","#47b04a","#c3d43a","#f5c22e","#f07c22","#de3a3a","#b0249e"],zx=["#7b4fb0","#4a5fc1","#3f8fd2","#4fb7d6","#5fc39a","#9ccf62","#e4d65a","#f2a64a","#e8683a","#b8312f"],Lg={rate:100,accum:600},rC=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,sC=`
  uniform sampler2D uRain, uMet; uniform float uMode, uMax, uOpacity, uHasRain, uHasMet;
  uniform float uStops[10]; uniform vec3 uColors[10];
  varying vec2 vUv;
  vec4 ramp(float v) {
    if (v < uStops[0]) return vec4(0.0);
    vec3 c = uColors[9];
    for (int i = 0; i < 9; i++) {
      if (v < uStops[i + 1]) { c = mix(uColors[i], uColors[i + 1], (v - uStops[i]) / (uStops[i + 1] - uStops[i])); break; }
    }
    return vec4(c, 1.0);
  }
  void main() {
    vec4 col = vec4(0.0);
    if (uMode < 1.5) {
      if (uHasRain < 0.5) discard;
      vec2 r = texture2D(uRain, vUv).rg;
      float mm = r.y > 0.01 ? pow(r.x / r.y * 255.0 / 254.0, 2.0) * uMax : 0.0;   // un-premultiply the coverage
      col = ramp(mm);
      col.a *= smoothstep(uStops[0], uStops[1], mm) * mix(0.55, 0.92, clamp(log(mm / uStops[0] + 1.0) / 4.0, 0.0, 1.0)) * r.y;
    } else {
      if (uHasMet < 0.5) discard;
      vec4 m = texture2D(uMet, vUv);
      col = vec4(ramp(m.b * 255.0 / 4.0 - 30.0).rgb, 0.78 * m.a);   // B = (°C + 30) * 4
    }
    col.a *= uOpacity;
    if (col.a < 0.01) discard;
    gl_FragColor = col;
  }`,Dg=t=>t.map(e=>new Ve(e));class oC{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,doc:i,U:r});const s=i.grids.rain;this.box={west:s.west,east:s.east,south:s.south,north:s.north};const o=n.toX(s.west),a=n.toX(s.east),l=n.toZ(s.north),u=n.toZ(s.south),c=new Pn;c.setAttribute("position",new nn([o,0,l,a,0,l,o,0,u,a,0,u],3)),c.setAttribute("uv",new nn([0,0,1,0,0,1,1,1],2)),c.setIndex([0,2,1,1,2,3]),this.rainData=new Uint8Array(s.cols*s.rows*2),this.rainTex=new Vr(this.rainData,s.cols,s.rows,mc),this.rainTex.magFilter=this.rainTex.minFilter=Qt,this.rainTex.needsUpdate=!0,this.metTex=new Vr(new Uint8Array(4),1,1,hn),this.metTex.needsUpdate=!0,this.uniforms={uRain:{value:this.rainTex},uMet:{value:this.metTex},uMode:{value:0},uMax:{value:Lg.rate},uOpacity:{value:.85},uHasRain:{value:0},uHasMet:{value:0},uStops:{value:Gf.rate.stops.slice()},uColors:{value:Dg(Wf)}},this.mesh=new fn(c,new Cn({vertexShader:rC,fragmentShader:sC,uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:Qn})),this.mesh.renderOrder=5,this.mesh.frustumCulled=!1,e.add(this.mesh),this.altitude=6,this.fill="rate",this.met=null,this.wind=new uC(e,n,this.box)}setRain(e){const n=this.rainData,i=Lg[this.fill==="accum"?"accum":"rate"];if(!e){this.uniforms.uHasRain.value=0;return}for(let r=0;r<e.length;r++){const s=e[r];Number.isNaN(s)?(n[r*2]=0,n[r*2+1]=0):(n[r*2]=Math.min(254,Math.round(254*Math.sqrt(Math.max(0,s)/i))),n[r*2+1]=255)}this.rainTex.needsUpdate=!0,this.uniforms.uHasRain.value=1,this.uniforms.uMax.value=i}setMet(e){if(this.met=e,!e){this.uniforms.uHasMet.value=0,this.wind.setField(null);return}const n=new Vr(e.data,e.grid.cols,e.grid.rows,hn);n.magFilter=n.minFilter=Qt,n.needsUpdate=!0,this.metTex.dispose(),this.metTex=this.uniforms.uMet.value=n,this.uniforms.uHasMet.value=1,this.wind.setField(e)}setFill(e){if(this.fill=e,this.mesh.visible=e!=="off",e==="off")return;const n=Gf[e];this.uniforms.uMode.value=e==="temp"?2:e==="accum"?1:0,this.uniforms.uStops.value=n.stops.slice(),this.uniforms.uColors.value=Dg(e==="temp"?zx:Wf)}setOpacity(e){this.uniforms.uOpacity.value=e}setAltitude(e){this.altitude=e}setWind(e){this.wind.setVisible(e)}update(e,n){const i=this.U.flat.value,r=this.U.exag.value,s=this.altitude*r*(1-i)+.04*i;this.mesh.position.y=s,this.wind.update(e,n,s+.03+.05*i)}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.rainTex.dispose(),this.metTex.dispose(),this.wind.dispose()}}const Xn=3500,$t=8,aC=`
  attribute float alpha; varying float vA;
  void main() { vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,lC=`
  uniform vec3 uColor; uniform float uOpacity; varying float vA;
  void main() { if (vA < 0.01) discard; gl_FragColor = vec4(uColor, vA * uOpacity); }`;class uC{constructor(e,n,i){Object.assign(this,{scene:e,P:n,box:i}),this.lon=new Float32Array(Xn),this.lat=new Float32Array(Xn),this.age=new Float32Array(Xn),this.life=new Float32Array(Xn),this.trail=new Float32Array(Xn*$t*2),this.speed=new Float32Array(Xn),this.pos=new Float32Array(Xn*($t-1)*2*3),this.alpha=new Float32Array(Xn*($t-1)*2);const r=new Pn;r.setAttribute("position",new gn(this.pos,3).setUsage(kf)),r.setAttribute("alpha",new gn(this.alpha,1).setUsage(kf)),this.lines=new bx(r,new Cn({vertexShader:aC,fragmentShader:lC,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ve("#f4f6f8")},uOpacity:{value:.85}}})),this.lines.frustumCulled=!1,this.lines.renderOrder=6,this.lines.visible=!1,e.add(this.lines),this.field=null;for(let s=0;s<Xn;s++)this._spawn(s,!0)}setField(e){this.field=e}setVisible(e){this.lines.visible=e}_wind(e,n){const i=this.field;if(!i)return null;const r=i.grid,s=Math.floor((e-r.west)/r.cell),o=Math.floor((r.north-n)/r.cell);if(s<0||o<0||s>=r.cols||o>=r.rows)return null;const a=(o*r.cols+s)*4,l=i.data;return l[a+3]===0?null:[(l[a]-128)/4,(l[a+1]-128)/4]}_spawn(e,n=!1){const i=this.box;this.lon[e]=i.west+Math.random()*(i.east-i.west),this.lat[e]=i.south+Math.random()*(i.north-i.south),this.life[e]=60+Math.random()*90,this.age[e]=n?Math.random()*this.life[e]:0;for(let r=0;r<$t;r++)this.trail[(e*$t+r)*2]=this.lon[e],this.trail[(e*$t+r)*2+1]=this.lat[e]}update(e,n,i){if(!this.lines.visible||!this.field){this.lines.visible&&this.alpha.fill(0);return}const r=Math.min(n,2500)/250,s=this.P,o=this.trail;for(let l=0;l<Xn;l++){const u=this._wind(this.lon[l],this.lat[l]);if(this.age[l]+=1,!u||this.age[l]>this.life[l]){this._spawn(l);continue}const c=r*e;this.lon[l]+=u[0]*c/(111.32*Math.cos(this.lat[l]*Math.PI/180)),this.lat[l]+=u[1]*c/111.13,this.speed[l]=Math.hypot(u[0],u[1]),o.copyWithin((l*$t+1)*2,l*$t*2,(l*$t+$t-1)*2),o[l*$t*2]=this.lon[l],o[l*$t*2+1]=this.lat[l]}let a=0;for(let l=0;l<Xn;l++){const u=Math.min(1,this.age[l]/10,(this.life[l]-this.age[l])/10),c=Math.min(1,.25+this.speed[l]/15);for(let h=0;h<$t-1;h++)for(const f of[h,h+1]){const p=(l*$t+f)*2;this.pos[a*3]=s.toX(o[p]),this.pos[a*3+1]=i,this.pos[a*3+2]=s.toZ(o[p+1]),this.alpha[a]=u*c*(1-f/$t),a++}}this.lines.geometry.attributes.position.needsUpdate=!0,this.lines.geometry.attributes.alpha.needsUpdate=!0}dispose(){this.scene.remove(this.lines),this.lines.geometry.dispose(),this.lines.material.dispose()}}const cC=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;function hC(t,e,n,i){const[r,s]=t.ll,o=[e.toX(r),(n(r,s)??0)*i,e.toZ(s)],a=Math.sin(t.polar),l=Math.cos(t.polar),u=t.az??0;return{pos:[o[0]+t.dist*a*Math.sin(u),o[1]+t.dist*l,o[2]+t.dist*a*Math.cos(u)],target:o}}function fC(t,e,n,i){let r=n[0]-e[0],s=n[2]-e[2];const o=Math.hypot(r,s)||1;r/=o,s/=o;const a=-s,l=r;let u=0,c=0;t.has("ArrowUp")&&(u+=r,c+=s),t.has("ArrowDown")&&(u-=r,c-=s),t.has("ArrowRight")&&(u+=a,c+=l),t.has("ArrowLeft")&&(u-=a,c-=l);const h=Math.hypot(u,c);if(!h)return[0,0,0];const p=.3*Math.hypot(e[0]-n[0],e[1]-n[1],e[2]-n[2])*i/h;return[u*p,0,c*p]}const dp=t=>!!t&&(t.isContentEditable||t.contentEditable==="true"||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)),dC=(t,e)=>e?0:t,pC=(t,e,n,i,r)=>r?e:t+(e-t)*Math.min(1,n*i),mC=t=>{var e;return!!((e=t==null?void 0:t.closest)!=null&&e.call(t,".panel"))},gC=t=>{var e;return!!((e=t.key)!=null&&e.startsWith("Arrow"))&&!(t.metaKey||t.ctrlKey||t.altKey)&&!dp(t.target)&&!mC(t.target)},_C=t=>Math.min(1,Math.max(.2,Math.sqrt(t/300)));function vC(t,e,{dAz:n=0,dPol:i=0,zoom:r=1,northUp:s=!1}={},o=.02,a=Math.PI-.02){const[l,u,c]=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];let h=Math.hypot(l,u,c)||1,f=Math.atan2(l,c),p=Math.acos(Math.max(-1,Math.min(1,u/h)));f=s?0:f+n*Math.PI/180,p=Math.max(o,Math.min(a,p+i*Math.PI/180)),h*=r;const _=Math.sin(p);return[e[0]+h*_*Math.sin(f),e[1]+h*Math.cos(p),e[2]+h*_*Math.cos(f)]}const xC=[["rate","Rain / h"],["accum","Accumulated"],["temp","Temperature"],["off","Off"]];function bh({options:t,value:e,onChange:n,label:i}){return O.jsx("div",{className:"seg",role:"group","aria-label":i,children:t.map(([r,s])=>O.jsx("button",{"aria-pressed":e===r,onClick:()=>n(r),children:s},r))})}function yC(t,e,n){if(!e)return"no data for this hour";if(e.type==="obs")return t.obs.rain[n]==="pass1"?"observed · MRMS (provisional)":"observed · MRMS, gauge-corrected";const i=Math.round((dv(t,n)-Date.UTC(+e.init.slice(0,4),+e.init.slice(4,6)-1,+e.init.slice(6,8),+e.init.slice(8,10)))/36e5);return`forecast · ${t.models[e.model].label} ${gv(e.init)} +${i} h`}function SC({fill:t}){if(t==="off")return null;const e=Gf[t],n=t==="temp"?zx:Wf;return O.jsxs("div",{className:"st-legend",children:[O.jsx("div",{className:"st-ramp",style:{background:`linear-gradient(90deg, ${n.join(", ")})`}}),O.jsxs("div",{className:"st-ticks mono",children:[e.stops.filter((i,r)=>r%2===0||r===9).map(i=>O.jsx("span",{children:i},i)),O.jsx("span",{className:"u",children:e.unit})]})]})}function MC({doc:t,layer:e}){const n=we.useMemo(()=>new FM,[t.version]),i=we.useMemo(()=>new OM(t,n),[t,n]),[r,s]=we.useState(Math.max(0,t.lastObs));we.useEffect(()=>{s(L=>Math.min(L,t.hours-1))},[t.hours]);const[o,a]=we.useState({mode:"blend",model:"hrrr"}),[l,u]=we.useState("rate"),[c,h]=we.useState(!0),[f,p]=we.useState(!1),[_,y]=we.useState(!1),[m,d]=we.useState(.85),[v,g]=we.useState(6),[S,b]=we.useState(""),[C,T]=we.useState(!1),R=we.useRef(0);we.useEffect(()=>(window.__storm={setK:s,setFill:u,setSel:a,setWind:h,setOpen:y},()=>{delete window.__storm}),[]),we.useEffect(()=>{e.setFill(l)},[e,l]),we.useEffect(()=>{e.setWind(c)},[e,c]),we.useEffect(()=>{e.setOpacity(m)},[e,m]),we.useEffect(()=>{e.setAltitude(v)},[e,v]),we.useEffect(()=>{const L=++R.current;T(!0),(async()=>{var q,Q;const W=Rl(t,r,o,"rain");let k=null;l==="rate"?k=((q=await i.hourly(r,o))==null?void 0:q.mm)??null:l==="accum"&&(k=((Q=await i.accumulated(r,o))==null?void 0:Q.mm)??null);const $=Rl(t,r,o,"met");let P=null;if($&&(c||l==="temp")&&(P={data:(await n.get(Df(t,$,r,"met"))).data,grid:pv(t,$,"met")}),L===R.current){(l==="rate"||l==="accum")&&e.setRain(k),e.setMet(P),b(yC(t,l==="temp"?$:W,r)),T(!1);for(let ie=r+1;ie<=Math.min(t.hours-1,r+3);ie++){const Ee=Rl(t,ie,o,"rain");Ee&&l!=="temp"&&n.get(Df(t,Ee,ie,"rain")).catch(()=>{})}}})().catch(W=>{L===R.current&&(b(`could not load this hour (${W.message})`),T(!1))})},[t,r,o,l,c,e,i,n]),we.useEffect(()=>{if(!f||C)return;const L=setTimeout(()=>s(W=>W>=t.hours-1?(p(!1),W):W+1),450);return()=>clearTimeout(L)},[f,C,r,t.hours]);const X=we.useRef(null);X.current=L=>{L.metaKey||L.ctrlKey||L.altKey||dp(L.target)||(L.key===","&&s(W=>Math.max(0,W-1)),L.key==="."&&s(W=>Math.min(t.hours-1,W+1)),L.key===" "&&(L.preventDefault(),p(W=>!W)))},we.useEffect(()=>{const L=W=>X.current(W);return addEventListener("keydown",L),()=>removeEventListener("keydown",L)},[]);const x=t.runList[o.model]??[],E=dv(t,r),H=(t.lastObs+1)/t.hours*100,z=Array.from({length:Math.ceil(t.hours/24)},(L,W)=>W);return O.jsxs("section",{className:`panel storm${_?" open":""}`,"aria-label":"Storm layer",children:[O.jsxs("div",{className:"st-bar",children:[O.jsx("button",{className:"st-play","aria-label":f?"Pause":"Play",title:"Play / pause (space)",onClick:()=>p(L=>!L),children:f?"❚❚":"▶"}),O.jsxs("div",{className:"st-when",children:[O.jsx("b",{children:Fm(E)}),O.jsxs("span",{className:"mono",children:[zM(E)," · hour ",r+1,"/",t.hours]})]}),O.jsx("span",{className:`st-src${S.startsWith("observed")?" obs":S.startsWith("forecast")?" fc":""}`,children:C?"loading…":S}),O.jsx("button",{className:"st-more","aria-expanded":_,"aria-label":"Storm layer options",onClick:()=>y(L=>!L),children:_?"▾":"▸"})]}),O.jsxs("div",{className:"st-slider",children:[O.jsx("input",{type:"range",min:"0",max:t.hours-1,value:r,"aria-label":"Hour",onChange:L=>{p(!1),s(+L.target.value)},style:{background:`linear-gradient(90deg, #4c9be8 0%, #4c9be8 ${H}%, #3a3a37 ${H}%, #3a3a37 100%)`}}),O.jsx("div",{className:"st-days mono",children:z.map(L=>O.jsx("span",{children:new Intl.DateTimeFormat("en-US",{timeZone:t.tz,weekday:"short",day:"numeric"}).format(t.t0+L*864e5+36e5)},L))})]}),_&&O.jsxs("div",{className:"st-body",children:[O.jsxs("div",{className:"ctl-row",children:[O.jsx("span",{className:"eyebrow",children:"Fill"}),O.jsx(bh,{label:"Fill",options:xC,value:l,onChange:u})]}),O.jsxs("div",{className:"ctl-row",children:[O.jsx("span",{className:"eyebrow",children:"Source"}),O.jsx(bh,{label:"Source",options:[["blend","Observed + forecast"],["run","One forecast run"]],value:o.mode,onChange:L=>a(W=>{var k;return L==="run"?{...W,mode:L,init:W.init??((k=x[x.length-1])==null?void 0:k.init)}:{mode:L,model:W.model}})})]}),O.jsxs("div",{className:"ctl-row",children:[O.jsx("span",{className:"eyebrow",children:"Model"}),O.jsx(bh,{label:"Model",options:Object.entries(t.models).map(([L,W])=>[L,W.label]),value:o.model,onChange:L=>a(W=>{var k;return{...W,model:L,init:W.mode==="run"?(k=t.runList[L].at(-1))==null?void 0:k.init:void 0}})})]}),o.mode==="run"&&O.jsxs("label",{className:"ctl-row",children:[O.jsx("span",{className:"eyebrow",children:"Run"}),O.jsx("select",{className:"st-select",value:o.init,onChange:L=>a(W=>({...W,init:L.target.value})),children:x.map(L=>O.jsxs("option",{value:L.init,children:[gv(L.init),L.complete?"":" (partial)"]},L.init))})]}),O.jsxs("button",{className:"tog",role:"switch","aria-checked":c,onClick:()=>h(L=>!L),children:[O.jsx("span",{className:"sw"}),O.jsxs("span",{className:"t",children:["Wind",O.jsx("small",{children:"10 m wind as drifting trails"})]})]}),O.jsxs("label",{className:"ctl-row slider",children:["Opacity ",O.jsxs("span",{className:"mono",children:[Math.round(m*100),"%"]}),O.jsx("input",{type:"range",min:"0.2",max:"1",step:"0.05",value:m,onChange:L=>d(+L.target.value)})]}),O.jsxs("label",{className:"ctl-row slider",children:["Layer height ",O.jsxs("span",{className:"mono",children:[v," km"]}),O.jsx("input",{type:"range",min:"1",max:"12",step:"0.5",value:v,onChange:L=>g(+L.target.value)})]}),O.jsx(SC,{fill:l}),O.jsxs("div",{className:"st-note",children:[l==="accum"?o.mode==="run"?"Accumulated from the run's first hour in the window.":`Accumulated since ${Fm(t.t0)}: observed hours, then the newest forecast.`:"Observed where measured (MRMS rain, HRRR analysis wind and temperature), newest forecast after."," ","Updated ",t.updated.replace("T"," ").replace("Z"," UTC"),"."]})]})]})}function EC(t){const e=[],n=new Set;for(const i of[...t].sort((r,s)=>s.priority-r.priority)){const r=[i.x-4,i.y-i.h/2,i.x+i.w,i.y+i.h/2];e.some(s=>!(r[2]<s[0]||r[0]>s[2]||r[3]<s[1]||r[1]>s[3]))||(n.add(i.id),e.push(r))}return n}function wC(t,e){return t.kind==="peak"?e<900:t.pop>=15e4?!0:t.pop>=4e4?e<1500:t.pop>=8e3?e<600:e<260}const TC=t=>t.kind==="peak"?6.5:Math.log10(Math.max(t.pop,10));class AC{constructor(e,n,i){Object.assign(this,{root:e,places:n,scene:i}),this.el=document.createElement("div"),this.el.className="place-layer",e.appendChild(this.el),this.items=n.map((r,s)=>({...r,id:s,x:i.P.toX(r.lon),z:i.P.toZ(r.lat),node:null,on:!1})),this.visible=!0,this._n=0}_node(e){if(!e.node){const n=document.createElement("div");n.className=`place ${e.kind}${e.pop>=15e4?" major":""}`;const i=document.createElement("span");i.textContent=e.kind==="peak"&&e.height?`${e.name} ${e.height.toLocaleString()} m`:e.name,n.append(document.createElement("i"),i),this.el.appendChild(n),e.node=n,e.w=14+i.textContent.length*(e.kind==="city"?6.6:6.1),e.h=16}return e.node}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=e.e,r=innerWidth,s=innerHeight,o=[];for(const l of this.items){if(!wC(l,n)){l.cand=!1;continue}const[u,c,h]=e.project(l.x,(l.elev??0)*i+.05,l.z);l.cand=h<1&&u>-40&&u<r+40&&c>-20&&c<s+20,l.cand&&(this._node(l),l.sx=u,l.sy=c,o.push({id:l.id,x:u,y:c,w:l.w,h:l.h,priority:TC(l)}))}const a=EC(o);for(const l of this.items){const u=l.cand&&a.has(l.id);u&&(l.node.style.transform=`translate(${Math.round(l.sx)}px, ${Math.round(l.sy)}px)`),u!==l.on&&l.node&&(l.node.style.opacity=u?1:0,l.on=u)}}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}const Ug={type:"change"},pp={type:"start"},Bx={type:"end"},cl=new yc,Ng=new Ti,CC=Math.cos(70*ha.DEG2RAD),Et=new I,ln=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ph=1e-6;class RC extends Ox{constructor(e,n=null){super(e,n),this.state=it.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new vr,this._lastTargetPosition=new I,this._quat=new vr().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xu,this._sphericalDelta=new Xu,this._scale=1,this._panOffset=new I,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new I,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PC.bind(this),this._onPointerDown=bC.bind(this),this._onPointerUp=LC.bind(this),this._onContextMenu=kC.bind(this),this._onMouseWheel=NC.bind(this),this._onKeyDown=IC.bind(this),this._onTouchStart=FC.bind(this),this._onTouchMove=OC.bind(this),this._onMouseDown=DC.bind(this),this._onMouseMove=UC.bind(this),this._interceptControlDown=zC.bind(this),this._interceptControlUp=BC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ug),this.update(),this.state=it.NONE}update(e=null){const n=this.object.position;Et.copy(n).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),r<-Math.PI?r+=ln:r>Math.PI&&(r-=ln),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),n.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Et.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new I(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(cl.origin.copy(this.object.position),cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cl.direction))<CC?this.object.lookAt(this.target):(Ng.setFromNormalAndCoplanarPoint(this.object.up,this.target),cl.intersectPlane(Ng,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ph||this._lastTargetPosition.distanceToSquared(this.target)>Ph?(this.dispatchEvent(Ug),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Et.setFromMatrixColumn(n,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,n){this.screenSpacePanning===!0?Et.setFromMatrixColumn(n,1):(Et.setFromMatrixColumn(n,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Et.copy(r).sub(this.target);let s=Et.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new De,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function bC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function PC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function LC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bx),this.state=it.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function DC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=it.DOLLY;break;case pi.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}break;case pi.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(pp)}function UC(t){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function NC(t){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(t.preventDefault(),this.dispatchEvent(pp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Bx))}function IC(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function FC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=it.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=it.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(pp)}function OC(t){switch(this._trackPointer(t),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=it.NONE}}function kC(t){this.enabled!==!1&&t.preventDefault()}function zC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const HC=150,Hx=[[1,120],[2,260]],VC=260,GC=450,WC=16,Ig=40,jC=6;function XC(t,e,n=0,i=0){const r=Math.max(e[0]-t[0],0,t[0]-e[1]),s=Math.max(e[2]-t[2],0,t[2]-e[3]),o=Math.max(n-t[1],0,t[1]-i);return Math.hypot(r,o,s)}function YC(t,e,n,{far:i=VC,maxOrbit:r=GC,max:s=WC}={}){return n>r?[]:t.map(o=>({t:o,d:XC(e,o.box,o.lo,o.hi)})).filter(o=>o.d<i).sort((o,a)=>o.d-a.d).slice(0,s).map(({t:o,d:a})=>({key:o.key,level:Hx.findIndex(([,l])=>a<=l)}))}class $C{constructor(e,n,i,r,s){Object.assign(this,{scene:e,U:n,bundle:i,P:r});const o=i.manifest.terrain.detail;this.makeMaterial=c=>{const h=s(c);return h.polygonOffset=!0,h.polygonOffsetFactor=-1,h.polygonOffsetUnits=-1,h},this.water=i.manifest.water.tiles,this.tiles=o.tiles.map(c=>{const[h,f]=c.key.split("_").map(Number),p=c.west+c.cellsize/2,_=c.south+(c.nrows-.5)*c.cellsize,y=[r.toX(p),r.toX(p+(c.ncols-1)*c.cellsize),r.toZ(_),r.toZ(_-(c.nrows-1)*c.cellsize)];return{key:c.key,tx:h,ty:f,meta:c,box:y,lo:c.min,hi:c.max,state:"idle",meshes:[null,null],used:0}}),this.byKey=new Map(this.tiles.map(c=>[c.key,c])),this.nx=Math.max(...this.tiles.map(c=>c.tx))+1,this.ny=Math.max(...this.tiles.map(c=>c.ty))+1,this.maskData=new Uint8Array(this.nx*this.ny),this.mask=new Vr(this.maskData,this.nx,this.ny,xa),this.mask.magFilter=this.mask.minFilter=Ot,this.mask.needsUpdate=!0;const a=i.manifest.region,l=o.tile_deg;this.maskRect=new Oe(r.toX(a.west),r.toZ(a.north),r.toX(a.west+this.nx*l),r.toZ(a.north-this.ny*l));const u=i.manifest.terrain.overview.cellsize;this.maskEps=new De(.25*u/(this.nx*l),.25*u/(this.ny*l)),this.inflight=0,this.frameNo=0,this.shown=new Set,this.failures=0,this.onChange=null}sample(e,n){const i=this.bundle.manifest.region,r=this.bundle.manifest.terrain.detail.tile_deg,s=this.byKey.get(`${Math.floor((e-i.west)/r)}_${Math.floor((i.north-n)/r)}`);return s&&this.shown.has(s.key)?s.grid.sample(e,n):null}isShown(e,n){return this.sample(e,n)!==null}_load(e){e.state="loading",this.inflight++;const n=fetch(`${this.bundle.base}terrain/tiles/${e.key}.bin`).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.arrayBuffer()}),i=new fp().loadAsync(`${this.bundle.base}${this.water.dir}/${e.key}.png`);Promise.all([n,i]).then(([r,s])=>{if(r.byteLength!==e.meta.ncols*e.meta.nrows*2)throw new Error("tile size mismatch");e.grid=cv(e.meta,r,this.P),s.flipY=!1,s.colorSpace=In,s.anisotropy=4,s.needsUpdate=!0;const o=this.bundle.manifest.region,a=this.water.per_deg,l=.5/a,u=o.west+e.tx,c=o.north-e.ty,h=new Oe(this.P.toX(u-l),this.P.toZ(c+l),this.P.toX(u+(s.image.width-1)/a+l),this.P.toZ(c-(s.image.height-1)/a-l));e.waterTex=s,e.material=this.makeMaterial({tileWater:s,tileWaterRect:h}),e.state="ready"}).catch(()=>{e.state="failed",this.failures++}).finally(()=>{this.inflight--})}_mesh(e,n){if(!e.meshes[n]){const i=new fn(hv(kx,e.grid,this.P,Hx[n][0],HC),e.material);i.visible=!1,i.renderOrder=1,this.scene.add(i),e.meshes[n]=i}return e.meshes[n]}update(e,n){var u;this.frameNo++;const i=this.U.exag.value*.001*(1-this.U.flat.value),r=e.position.toArray(),s=YC(this.tiles.map(c=>({...c,lo:c.lo*i,hi:c.hi*i})),r,n);for(const c of s){const h=this.byKey.get(c.key);h.used=this.frameNo,h.state==="idle"&&this.inflight<jC&&this._load(h)}let o=0;const a=new Set;for(const c of s){const h=this.byKey.get(c.key);if(h.state!=="ready")continue;let f=c.level;if(!h.meshes[f]&&(o++>0&&(f=h.meshes.findIndex(Boolean)),f<0))continue;const p=this._mesh(h,f);for(const _ of h.meshes)_&&(_.visible=_===p);a.add(h.key)}for(const c of this.tiles)if(!a.has(c.key))for(const h of c.meshes)h&&(h.visible=!1);if(a.size!==this.shown.size||[...a].some(c=>!this.shown.has(c))){this.shown=a,this.maskData.fill(0);for(const c of a){const h=this.byKey.get(c);this.maskData[h.ty*this.nx+h.tx]=255}this.mask.needsUpdate=!0,(u=this.onChange)==null||u.call(this)}return this._evict(),a.size}_evict(){var n,i;const e=this.tiles.filter(r=>r.state==="ready");if(!(e.length<=Ig))for(const r of e.filter(s=>!this.shown.has(s.key)).sort((s,o)=>s.used-o.used).slice(0,e.length-Ig)){for(const s of r.meshes)s&&(this.scene.remove(s),s.geometry.dispose());(n=r.material)==null||n.dispose(),(i=r.waterTex)==null||i.dispose(),r.meshes=[null,null],r.grid=null,r.material=r.waterTex=null,r.state="idle"}}dispose(){var e,n;for(const i of this.tiles){for(const r of i.meshes)r&&(this.scene.remove(r),r.geometry.dispose());(e=i.material)==null||e.dispose(),(n=i.waterTex)==null||n.dispose()}this.mask.dispose()}}const Fg=new Vi,hl=new I;class Vx extends Nx{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new nn(e,3)),this.setAttribute("uv",new nn(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new ju(n,6,1);return this.setAttribute("instanceStart",new Pi(i,3,0)),this.setAttribute("instanceEnd",new Pi(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new ju(n,6,1);return this.setAttribute("instanceColorStart",new Pi(i,3,0)),this.setAttribute("instanceColorEnd",new Pi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Px(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Fg.setFromBufferAttribute(n),this.boundingBox.union(Fg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)hl.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(hl)),hl.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared(hl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}oe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new De(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Zt.line={uniforms:Sc.merge([oe.common,oe.fog,oe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class jf extends Cn{constructor(e){super({type:"LineMaterial",uniforms:Sc.clone(Zt.line.uniforms),vertexShader:Zt.line.vertexShader,fragmentShader:Zt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Lh=new Oe,Og=new I,kg=new I,Dt=new Oe,Ut=new Oe,ri=new Oe,Dh=new I,Uh=new pt,It=new Fx,zg=new I,fl=new Vi,dl=new ns,si=new Oe;let ui,Gr;function Bg(t,e,n){return si.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),si.multiplyScalar(1/si.w),si.x=Gr/n.width,si.y=Gr/n.height,si.applyMatrix4(t.projectionMatrixInverse),si.multiplyScalar(1/si.w),Math.abs(Math.max(si.x,si.y))}function qC(t,e){const n=t.matrixWorld,i=t.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){It.start.fromBufferAttribute(r,a),It.end.fromBufferAttribute(s,a),It.applyMatrix4(n);const u=new I,c=new I;ui.distanceSqToSegment(It.start,It.end,c,u),c.distanceTo(u)<Gr*.5&&e.push({point:c,pointOnLine:u,distance:ui.origin.distanceTo(c),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function KC(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,u=a.attributes.instanceEnd,c=Math.min(a.instanceCount,l.count),h=-e.near;ui.at(1,ri),ri.w=1,ri.applyMatrix4(e.matrixWorldInverse),ri.applyMatrix4(i),ri.multiplyScalar(1/ri.w),ri.x*=s.x/2,ri.y*=s.y/2,ri.z=0,Dh.copy(ri),Uh.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=c;f<p;f++){if(Dt.fromBufferAttribute(l,f),Ut.fromBufferAttribute(u,f),Dt.w=1,Ut.w=1,Dt.applyMatrix4(Uh),Ut.applyMatrix4(Uh),Dt.z>h&&Ut.z>h)continue;if(Dt.z>h){const g=Dt.z-Ut.z,S=(Dt.z-h)/g;Dt.lerp(Ut,S)}else if(Ut.z>h){const g=Ut.z-Dt.z,S=(Ut.z-h)/g;Ut.lerp(Dt,S)}Dt.applyMatrix4(i),Ut.applyMatrix4(i),Dt.multiplyScalar(1/Dt.w),Ut.multiplyScalar(1/Ut.w),Dt.x*=s.x/2,Dt.y*=s.y/2,Ut.x*=s.x/2,Ut.y*=s.y/2,It.start.copy(Dt),It.start.z=0,It.end.copy(Ut),It.end.z=0;const y=It.closestPointToPointParameter(Dh,!0);It.at(y,zg);const m=ha.lerp(Dt.z,Ut.z,y),d=m>=-1&&m<=1,v=Dh.distanceTo(zg)<Gr*.5;if(d&&v){It.start.fromBufferAttribute(l,f),It.end.fromBufferAttribute(u,f),It.start.applyMatrix4(o),It.end.applyMatrix4(o);const g=new I,S=new I;ui.distanceSqToSegment(It.start,It.end,S,g),n.push({point:S,pointOnLine:g,distance:ui.origin.distanceTo(S),object:t,face:null,faceIndex:f,uv:null,uv1:null})}}}class ZC extends fn{constructor(e=new Vx,n=new jf({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)Og.fromBufferAttribute(n,o),kg.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Og.distanceTo(kg);const s=new ju(r,2,1);return e.setAttribute("instanceDistanceStart",new Pi(s,1,0)),e.setAttribute("instanceDistanceEnd",new Pi(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ui=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Gr=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),dl.copy(a.boundingSphere).applyMatrix4(o);let u;if(i)u=Gr*.5;else{const h=Math.max(r.near,dl.distanceToPoint(ui.origin));u=Bg(r,h,l.resolution)}if(dl.radius+=u,ui.intersectsSphere(dl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),fl.copy(a.boundingBox).applyMatrix4(o);let c;if(i)c=Gr*.5;else{const h=Math.max(r.near,fl.distanceToPoint(ui.origin));c=Bg(r,h,l.resolution)}fl.expandByScalar(c),ui.intersectsBox(fl)!==!1&&(i?qC(this,n):KC(this,r,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(Lh),this.material.uniforms.resolution.value.set(Lh.z,Lh.w))}}const Gx={motorway:["#f2d58a",2.4,"#1a1814",4.2,1],trunk:["#ece2c6",1.6,"#1a1814",3,.9],primary:["#d8d2c3",1,null,0,.7],country:["#f4f1ea",1.6,"#121211",3.4,.95],state:["#f4f1ea",1,null,0,.55]},QC={motorway:1/0,trunk:1300,primary:520,country:1/0,state:1/0},JC={motorway:60,trunk:60,primary:60,country:0,state:0},Hg=12;function e2(t,e,n,i){const r=t.length/3,s=new Float32Array(r);for(let o=0;o<r;o++){const a=t[o*3],l=t[o*3+1],u=t[o*3+2],c=e.fromX(a),h=e.fromZ(u);if(n(c,h)){s[o]=l+Hg;continue}const f=i(c,h);s[o]=(f===null?l:Math.max(l,f))+Hg}return s}class t2{constructor(e,n,i,r){Object.assign(this,{scene:e,name:n,segs:i,P:r});const[s,o,a,l,u]=Gx[n],c={transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-40};this.mats=[new jf({color:s,linewidth:o,opacity:u,...c})],a&&this.mats.unshift(new jf({color:a,linewidth:l,opacity:.55*u,...c})),this.geometry=new Vx,this.objects=this.mats.map((h,f)=>{const p=new ZC(this.geometry,h);return p.frustumCulled=!1,p.renderOrder=10+f,e.add(p),p}),this.pos=new Float32Array(i.length),this.visible=!0}drape(e,n){const i=e2(this.segs,this.P,e,n),r=this.pos;for(let s=0;s<i.length;s++)r[s*3]=this.segs[s*3],r[s*3+1]=i[s],r[s*3+2]=this.segs[s*3+2];this.geometry.setPositions(r)}setScale(e,n){for(const i of this.objects)i.scale.y=e,i.position.y=.02+.05*n}setVisible(e){this.visible=e,this._apply()}updateDistance(e,n=!1){const i=this.near?1.05:.95,r=e<QC[this.name]*i&&!(n&&e<JC[this.name]/i);r!==this.near&&(this.near=r,this._apply())}_apply(){for(const e of this.objects)e.visible=this.visible&&this.near!==!1}setResolution(e,n){for(const i of this.mats)i.resolution.set(e,n)}dispose(){for(const e of this.objects)this.scene.remove(e);this.geometry.dispose();for(const e of this.mats)e.dispose()}}const Wx=[["home","Pacific Northwest",{ll:[-122.6,46],dist:2400,polar:.42,az:0}],["ocean","Offshore approach",{ll:[-127.5,45.4],dist:2300,polar:.85,az:.75}],["puget","Puget Sound",{ll:[-122.35,47.55],dist:210,polar:.75,az:0}],["seattle","Seattle streets",{ll:[-122.32,47.605],dist:16,polar:.8,az:.25}],["mercer","Mercer Island",{ll:[-122.23,47.57],dist:9,polar:.7,az:0}],["fraser","Fraser Valley",{ll:[-122.3,49.1],dist:170,polar:.8,az:.15}],["skagit","Skagit & Nooksack",{ll:[-122.05,48.62],dist:170,polar:.8,az:0}],["olympics","Olympic Peninsula",{ll:[-123.65,47.75],dist:230,polar:.8,az:.4}],["rainier","Mount Rainier",{ll:[-121.76,46.85],dist:75,polar:.95,az:.3}],["portland","Portland & the Gorge",{ll:[-122.2,45.6],dist:190,polar:.8,az:0}],["willamette","Willamette Valley",{ll:[-123,44.75],dist:330,polar:.7,az:0}],["basin","Columbia Basin",{ll:[-119.4,46.8],dist:480,polar:.65,az:0}]],Vg=Object.fromEntries(Wx.map(([t,,e])=>[t,e]));function sr(t,e){this.x=t,this.y=e}sr.prototype={clone(){return new sr(this.x,this.y)},add(t){return this.clone()._add(t)},sub(t){return this.clone()._sub(t)},multByPoint(t){return this.clone()._multByPoint(t)},divByPoint(t){return this.clone()._divByPoint(t)},mult(t){return this.clone()._mult(t)},div(t){return this.clone()._div(t)},rotate(t){return this.clone()._rotate(t)},rotateAround(t,e){return this.clone()._rotateAround(t,e)},matMult(t){return this.clone()._matMult(t)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(t){return this.x===t.x&&this.y===t.y},dist(t){return Math.sqrt(this.distSqr(t))},distSqr(t){const e=t.x-this.x,n=t.y-this.y;return e*e+n*n},angle(){return Math.atan2(this.y,this.x)},angleTo(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith(t){return this.angleWithSep(t.x,t.y)},angleWithSep(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult(t){const e=t[0]*this.x+t[1]*this.y,n=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=n,this},_add(t){return this.x+=t.x,this.y+=t.y,this},_sub(t){return this.x-=t.x,this.y-=t.y,this},_mult(t){return this.x*=t,this.y*=t,this},_div(t){return this.x/=t,this.y/=t,this},_multByPoint(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint(t){return this.x/=t.x,this.y/=t.y,this},_unit(){return this._div(this.mag()),this},_perp(){const t=this.y;return this.y=this.x,this.x=-t,this},_rotate(t){const e=Math.cos(t),n=Math.sin(t),i=e*this.x-n*this.y,r=n*this.x+e*this.y;return this.x=i,this.y=r,this},_rotateAround(t,e){const n=Math.cos(t),i=Math.sin(t),r=e.x+n*(this.x-e.x)-i*(this.y-e.y),s=e.y+i*(this.x-e.x)+n*(this.y-e.y);return this.x=r,this.y=s,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:sr};sr.convert=function(t){if(t instanceof sr)return t;if(Array.isArray(t))return new sr(+t[0],+t[1]);if(t.x!==void 0&&t.y!==void 0)return new sr(+t.x,+t.y);throw new Error("Expected [x, y] or {x, y} point format")};class jx{constructor(e,n,i,r,s){this.properties={},this.extent=i,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=r,this._values=s,e.readFields(n2,this,n)}loadGeometry(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos,i=[];let r,s=1,o=0,a=0,l=0;for(;e.pos<n;){if(o<=0){const u=e.readVarint();s=u&7,o=u>>3}if(o--,s===1||s===2)a+=e.readSVarint(),l+=e.readSVarint(),s===1&&(r&&i.push(r),r=[]),r&&r.push(new sr(a,l));else if(s===7)r&&r.push(r[0].clone());else throw new Error(`unknown command ${s}`)}return r&&i.push(r),i}bbox(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos;let i=1,r=0,s=0,o=0,a=1/0,l=-1/0,u=1/0,c=-1/0;for(;e.pos<n;){if(r<=0){const h=e.readVarint();i=h&7,r=h>>3}if(r--,i===1||i===2)s+=e.readSVarint(),o+=e.readSVarint(),s<a&&(a=s),s>l&&(l=s),o<u&&(u=o),o>c&&(c=o);else if(i!==7)throw new Error(`unknown command ${i}`)}return[a,u,l,c]}toGeoJSON(e,n,i){const r=this.extent*Math.pow(2,i),s=this.extent*e,o=this.extent*n,a=this.loadGeometry();function l(f){return[(f.x+s)*360/r-180,360/Math.PI*Math.atan(Math.exp((1-(f.y+o)*2/r)*Math.PI))-90]}function u(f){return f.map(l)}let c;if(this.type===1){const f=[];for(const _ of a)f.push(_[0]);const p=u(f);c=f.length===1?{type:"Point",coordinates:p[0]}:{type:"MultiPoint",coordinates:p}}else if(this.type===2){const f=a.map(u);c=f.length===1?{type:"LineString",coordinates:f[0]}:{type:"MultiLineString",coordinates:f}}else if(this.type===3){const f=r2(a),p=[];for(const _ of f)p.push(_.map(u));c=p.length===1?{type:"Polygon",coordinates:p[0]}:{type:"MultiPolygon",coordinates:p}}else throw new Error("unknown feature type");const h={type:"Feature",geometry:c,properties:this.properties};return this.id!=null&&(h.id=this.id),h}}jx.types=["Unknown","Point","LineString","Polygon"];function n2(t,e,n){t===1?e.id=n.readVarint():t===2?i2(n,e):t===3?e.type=n.readVarint():t===4&&(e._geometry=n.pos)}function i2(t,e){const n=t.readVarint()+t.pos;for(;t.pos<n;){const i=e._keys[t.readVarint()],r=e._values[t.readVarint()];e.properties[i]=r}}function r2(t){const e=t.length;if(e<=1)return[t];const n=[];let i,r;for(let s=0;s<e;s++){const o=s2(t[s]);o!==0&&(r===void 0&&(r=o<0),r===o<0?(i&&n.push(i),i=[t[s]]):i&&i.push(t[s]))}return i&&n.push(i),n}function s2(t){let e=0;for(let n=0,i=t.length,r=i-1,s,o;n<i;r=n++)s=t[n],o=t[r],e+=(o.x-s.x)*(s.y+o.y);return e}class o2{constructor(e,n){this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(a2,this,n),this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const n=this._pbf.readVarint()+this._pbf.pos;return new jx(this._pbf,n,this.extent,this._keys,this._values)}}function a2(t,e,n){t===15?e.version=n.readVarint():t===1?e.name=n.readString():t===5?e.extent=n.readVarint():t===2?e._features.push(n.pos):t===3?e._keys.push(n.readString()):t===4&&e._values.push(l2(n))}function l2(t){let e=null;const n=t.readVarint()+t.pos;for(;t.pos<n;){const i=t.readVarint()>>3;e=i===1?t.readString():i===2?t.readFloat():i===3?t.readDouble():i===4?t.readVarint64():i===5?t.readVarint():i===6?t.readSVarint():i===7?t.readBoolean():null}return e}class u2{constructor(e,n){this.layers=e.readFields(c2,{},n)}}function c2(t,e,n){if(t===3){const i=new o2(n,n.readVarint()+n.pos);i.length&&(e[i.name]=i)}}const Xf=65536*65536,Gg=1/Xf,h2=12,Wg=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),Nh=0,pl=1,vo=2,ml=5;class f2{constructor(e=new Uint8Array(16)){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer),this.pos=0,this.type=0,this.length=this.buf.length}readFields(e,n,i=this.length){for(;this.pos<i;){const r=this.readVarint(),s=r>>3,o=this.pos;this.type=r&7,e(s,n,this),this.pos===o&&this.skip(r)}return n}readMessage(e,n){return this.readFields(e,n,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*Xf;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*Xf;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const n=this.buf;let i,r;return r=n[this.pos++],i=r&127,r<128||(r=n[this.pos++],i|=(r&127)<<7,r<128)||(r=n[this.pos++],i|=(r&127)<<14,r<128)||(r=n[this.pos++],i|=(r&127)<<21,r<128)?i:(r=n[this.pos],i|=(r&15)<<28,d2(i,e,this))}readVarint64(){return this.readVarint(!0)}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,n=this.pos;return this.pos=e,e-n>=h2&&Wg?Wg.decode(this.buf.subarray(n,e)):A2(this.buf,n,e)}readBytes(){const e=this.readVarint()+this.pos,n=this.buf.subarray(this.pos,e);return this.pos=e,n}readPackedVarint(e=[],n){const i=this.readPackedEnd();for(;this.pos<i;)e.push(this.readVarint(n));return e}readPackedSVarint(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===vo?this.readVarint()+this.pos:this.pos+1}skip(e){const n=e&7;if(n===Nh)for(;this.buf[this.pos++]>127;);else if(n===vo)this.pos=this.readVarint()+this.pos;else if(n===ml)this.pos+=4;else if(n===pl)this.pos+=8;else throw new Error(`Unimplemented type: ${n}`)}writeTag(e,n){this.writeVarint(e<<3|n)}realloc(e){let n=this.length||16;for(;n<this.pos+e;)n*=2;if(n!==this.length){const i=new Uint8Array(n);i.set(this.buf),this.buf=i,this.dataView=new DataView(i.buffer),this.length=n}}finish(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)}writeFixed32(e){this.realloc(4),this.dataView.setInt32(this.pos,e,!0),this.pos+=4}writeSFixed32(e){this.realloc(4),this.dataView.setInt32(this.pos,e,!0),this.pos+=4}writeFixed64(e){this.realloc(8),this.dataView.setInt32(this.pos,e&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(e*Gg),!0),this.pos+=8}writeSFixed64(e){this.realloc(8),this.dataView.setInt32(this.pos,e&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(e*Gg),!0),this.pos+=8}writeVarint(e){if(e=+e||0,e>268435455||e<0){p2(e,this);return}this.realloc(4),this.buf[this.pos++]=e&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=e>>>7&127)))}writeSVarint(e){this.writeVarint(e<0?-e*2-1:e*2)}writeBoolean(e){this.writeVarint(+e)}writeString(e){e=String(e),this.realloc(e.length*4),this.pos++;const n=this.pos;this.pos=C2(this.buf,e,this.pos);const i=this.pos-n;i>=128&&jg(n,i,this),this.pos=n-1,this.writeVarint(i),this.pos+=i}writeFloat(e){this.realloc(4),this.dataView.setFloat32(this.pos,e,!0),this.pos+=4}writeDouble(e){this.realloc(8),this.dataView.setFloat64(this.pos,e,!0),this.pos+=8}writeBytes(e){const n=e.length;this.writeVarint(n),this.realloc(n);for(let i=0;i<n;i++)this.buf[this.pos++]=e[i]}writeRawMessage(e,n){this.pos++;const i=this.pos;e(n,this);const r=this.pos-i;r>=128&&jg(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r}writeMessage(e,n,i){this.writeTag(e,vo),this.writeRawMessage(n,i)}writePackedVarint(e,n){n.length&&this.writeMessage(e,_2,n)}writePackedSVarint(e,n){n.length&&this.writeMessage(e,v2,n)}writePackedBoolean(e,n){n.length&&this.writeMessage(e,S2,n)}writePackedFloat(e,n){n.length&&this.writeMessage(e,x2,n)}writePackedDouble(e,n){n.length&&this.writeMessage(e,y2,n)}writePackedFixed32(e,n){n.length&&this.writeMessage(e,M2,n)}writePackedSFixed32(e,n){n.length&&this.writeMessage(e,E2,n)}writePackedFixed64(e,n){n.length&&this.writeMessage(e,w2,n)}writePackedSFixed64(e,n){n.length&&this.writeMessage(e,T2,n)}writeBytesField(e,n){this.writeTag(e,vo),this.writeBytes(n)}writeFixed32Field(e,n){this.writeTag(e,ml),this.writeFixed32(n)}writeSFixed32Field(e,n){this.writeTag(e,ml),this.writeSFixed32(n)}writeFixed64Field(e,n){this.writeTag(e,pl),this.writeFixed64(n)}writeSFixed64Field(e,n){this.writeTag(e,pl),this.writeSFixed64(n)}writeVarintField(e,n){this.writeTag(e,Nh),this.writeVarint(n)}writeSVarintField(e,n){this.writeTag(e,Nh),this.writeSVarint(n)}writeStringField(e,n){this.writeTag(e,vo),this.writeString(n)}writeFloatField(e,n){this.writeTag(e,ml),this.writeFloat(n)}writeDoubleField(e,n){this.writeTag(e,pl),this.writeDouble(n)}writeBooleanField(e,n){this.writeVarintField(e,+n)}}function d2(t,e,n){const i=n.buf;let r,s;if(s=i[n.pos++],r=(s&112)>>4,s<128||(s=i[n.pos++],r|=(s&127)<<3,s<128)||(s=i[n.pos++],r|=(s&127)<<10,s<128)||(s=i[n.pos++],r|=(s&127)<<17,s<128)||(s=i[n.pos++],r|=(s&127)<<24,s<128)||(s=i[n.pos++],r|=(s&1)<<31,s<128))return vs(t,r,e);throw new Error("Expected varint not more than 10 bytes")}function vs(t,e,n){return n?e*4294967296+(t>>>0):(e>>>0)*4294967296+(t>>>0)}function p2(t,e){let n,i;if(t>=0?(n=t%4294967296|0,i=t/4294967296|0):(n=~(-t%4294967296),i=~(-t/4294967296),n^4294967295?n=n+1|0:(n=0,i=i+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),m2(n,i,e),g2(i,e)}function m2(t,e,n){n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos]=t&127}function g2(t,e){const n=(t&7)<<4;e.buf[e.pos++]|=n|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127)))))}function jg(t,e,n){const i=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(Math.LN2*7));n.realloc(i);for(let r=n.pos-1;r>=t;r--)n.buf[r+i]=n.buf[r]}function _2(t,e){for(let n=0;n<t.length;n++)e.writeVarint(t[n])}function v2(t,e){for(let n=0;n<t.length;n++)e.writeSVarint(t[n])}function x2(t,e){for(let n=0;n<t.length;n++)e.writeFloat(t[n])}function y2(t,e){for(let n=0;n<t.length;n++)e.writeDouble(t[n])}function S2(t,e){for(let n=0;n<t.length;n++)e.writeBoolean(t[n])}function M2(t,e){for(let n=0;n<t.length;n++)e.writeFixed32(t[n])}function E2(t,e){for(let n=0;n<t.length;n++)e.writeSFixed32(t[n])}function w2(t,e){for(let n=0;n<t.length;n++)e.writeFixed64(t[n])}function T2(t,e){for(let n=0;n<t.length;n++)e.writeSFixed64(t[n])}function A2(t,e,n){let i="",r=e;for(;r<n;){const s=t[r];let o=null,a=s>239?4:s>223?3:s>191?2:1;if(r+a>n)break;let l,u,c;a===1?s<128&&(o=s):a===2?(l=t[r+1],(l&192)===128&&(o=(s&31)<<6|l&63,o<=127&&(o=null))):a===3?(l=t[r+1],u=t[r+2],(l&192)===128&&(u&192)===128&&(o=(s&15)<<12|(l&63)<<6|u&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):a===4&&(l=t[r+1],u=t[r+2],c=t[r+3],(l&192)===128&&(u&192)===128&&(c&192)===128&&(o=(s&15)<<18|(l&63)<<12|(u&63)<<6|c&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,a=1):o>65535&&(o-=65536,i+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),i+=String.fromCharCode(o),r+=a}return i}function C2(t,e,n){for(let i=0,r,s;i<e.length;i++){if(r=e.charCodeAt(i),r>55295&&r<57344)if(s)if(r<56320){t[n++]=239,t[n++]=191,t[n++]=189,s=r;continue}else r=s-55296<<10|r-56320|65536,s=null;else{r>56319||i+1===e.length?(t[n++]=239,t[n++]=191,t[n++]=189):s=r;continue}else s&&(t[n++]=239,t[n++]=191,t[n++]=189,s=null);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=r&63|128)}return n}const R2="https://tiles.openfreemap.org/planet/{v}/{z}/{x}/{y}.pbf",b2="https://tiles.openfreemap.org/planet",Xx=11,Yx=14,Ih=8,P2=.35,$n=512,L2=80,Fh=112,Xg=240,D2=8,U2=12,Vo=Yx;function N2(t,e,n){const i=2**t,r=o=>o/i*360-180,s=o=>Math.atan(Math.sinh(Math.PI*(1-2*o/i)))*180/Math.PI;return{west:r(e),east:r(e+1),north:s(n),south:s(n+1)}}function Yu(t,e,n){const i=2**t,r=n*Math.PI/180;return[Math.floor((e+180)/360*i),Math.floor((1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i)]}function I2(t,e,n,i,{split:r=P2,minZ:s=Xx,maxZ:o=Yx,reach:a=1/0}={}){const l=[],u=[],c=(m,d,v)=>{const g=N2(m,d,v),S=n.toX(g.west),b=n.toX(g.east),C=n.toZ(g.north),T=n.toZ(g.south),R=Math.max(S-e[0],0,e[0]-b),X=Math.max(C-e[2],0,e[2]-T);return{d:Math.hypot(R,X,Math.max(0,e[1])),size:b-S}},h=(m,d,v)=>{const g=`${m}/${d}/${v}`,{d:S,size:b}=c(m,d,v);if(S>a)return;if(!(m<o&&b>r*Math.max(S,.5))){m>=s&&(i(g)?l.push([g,S]):u.push([g,S]));return}const C=[[2*d,2*v],[2*d+1,2*v],[2*d,2*v+1],[2*d+1,2*v+1]],T=C.map(([R,X])=>`${m+1}/${R}/${X}`);if(m<s||T.every(i)||!i(g)){for(const[R,X]of C)h(m+1,R,X);return}u.push(...T.map(R=>[R,S])),l.push([g,S])},[f,p]=Yu(Ih,t.west,t.north),[_,y]=Yu(Ih,t.east,t.south);for(let m=f;m<=_;m++)for(let d=p;d<=y;d++)h(Ih,m,d);return l.sort((m,d)=>m[1]-d[1]),u.sort((m,d)=>m[1]-d[1]),{show:l.slice(0,L2).map(m=>m[0]),want:u.map(m=>m[0])}}const xs=[[["motorway"],"#f2d58a",[2.2,3,4.2,6],"#2a2620"],[["trunk"],"#efdfae",[1.8,2.6,3.6,5.2],"#2a2620"],[["primary"],"#f1ece0",[1.4,2.1,3,4.6],"#3a362f"],[["secondary"],"#ece7da",[.9,1.5,2.4,3.8],"#3a362f"],[["tertiary"],"#e6e1d4",[.6,1.1,1.9,3.2],null],[["minor"],"#ddd8cb",[0,.6,1.2,2.2],null],[["service","track"],"#cfcabc",[0,0,.6,1.2],null],[["path"],"#c9c3b4",[0,0,0,.7],null]],F2="#6f99ad",O2="#6f99ad";function k2(t,e,n){const i=t.layers,r=$n/4096,s=Math.min(3,Math.max(0,e-11)),o=(c,h)=>{const f=i[c];if(f)for(let p=0;p<f.length;p++)h(f.feature(p))},a=c=>{const h=new Path2D;for(const f of c.loadGeometry())f.forEach((p,_)=>_?h.lineTo(p.x*r,p.y*r):h.moveTo(p.x*r,p.y*r)),c.type===3&&h.closePath();return h};n.clearRect(0,0,$n,$n),o("landuse",c=>{const h={residential:"rgba(222,214,200,0.22)",commercial:"rgba(232,205,190,0.3)",retail:"rgba(232,205,190,0.3)",industrial:"rgba(214,206,214,0.3)",cemetery:"rgba(170,200,160,0.3)",hospital:"rgba(240,200,200,0.35)",school:"rgba(236,226,190,0.3)",railway:"rgba(210,205,200,0.25)"}[c.properties.class];h&&(n.fillStyle=h,n.fill(a(c)))}),o("park",c=>{n.fillStyle="rgba(132,176,112,0.32)",n.fill(a(c))}),o("landcover",c=>{const h={wood:"rgba(92,132,86,0.18)",grass:"rgba(150,186,120,0.18)",wetland:"rgba(120,170,170,0.25)",sand:"rgba(230,214,170,0.3)",ice:"rgba(245,248,250,0.6)"}[c.properties.class];h&&(n.fillStyle=h,n.fill(a(c)))}),n.fillStyle=F2,o("water",c=>{c.properties.class!=="swimming_pool"&&n.fill(a(c))}),n.strokeStyle=O2,n.lineCap="round",n.lineJoin="round",o("waterway",c=>{var f;const h=(f={river:[1.2,1.8,2.6,3.6],canal:[.8,1.2,1.8,2.6],stream:[0,.5,.9,1.4]}[c.properties.class])==null?void 0:f[s];h&&(n.lineWidth=h,n.stroke(a(c)))}),e>=13&&(n.fillStyle=e>=14?"rgba(214,206,194,0.92)":"rgba(214,206,194,0.75)",n.strokeStyle="rgba(90,82,72,0.6)",n.lineWidth=.5,o("building",c=>{const h=a(c);n.fill(h),e>=14&&n.stroke(h)}));const l=xs.map(()=>[]),u=[];o("transportation",c=>{if(c.type!==2)return;const h=xs.findIndex(([f])=>f.includes(c.properties.class));h>=0?l[h].push(c):c.properties.class==="rail"&&e>=12&&u.push(c)});for(let c=xs.length-1;c>=0;c--){const[,,h,f]=xs[c],p=h[s];if(!(!p||!f)){n.strokeStyle=f,n.lineWidth=p+1.6;for(const _ of l[c])n.stroke(a(_))}}for(let c=xs.length-1;c>=0;c--){const[,h,f]=xs[c],p=f[s];if(p){n.strokeStyle=h,n.lineWidth=p;for(const _ of l[c])n.stroke(a(_))}}n.setLineDash([3,3]),n.strokeStyle="#5a5650",n.lineWidth=e>=14?1.6:1.1;for(const c of u)n.stroke(a(c));n.setLineDash([])}function z2(t){const e=2**(Vo-Xx),[n,i]=Yu(Vo,t.west,t.north),[r,s]=Yu(Vo,t.east,t.south),o=Math.floor(n/e)*e,a=Math.floor(i/e)*e;return{x0:o,y0:a,width:r-o+1,height:s-a+1}}function B2(t,e,n){t.fill(0);for(const[i,r]of n){const[s,o,a]=i.split("/").map(Number),l=Vo-s,u=2**l,c=Math.max(0,o*u-e.x0),h=Math.min(e.width,(o+1)*u-e.x0),f=Math.max(0,a*u-e.y0),p=Math.min(e.height,(a+1)*u-e.y0);for(let _=f;_<p;_++)for(let y=c;y<h;y++){const m=(_*e.width+y)*4;t[m]=r,t[m+1]=l,t[m+3]=255}}}class H2{constructor(e,n,i){Object.assign(this,{renderer:e,region:n,U:i}),this.tiles=new Map,this.inflight=0,this.frameNo=0,this.visible=!0,this.failures=0,this.grid=z2(n),this.indexData=new Uint8Array(this.grid.width*this.grid.height*4),this.index=new Vr(this.indexData,this.grid.width,this.grid.height),this.index.magFilter=this.index.minFilter=Ot,this.index.needsUpdate=!0,this.tex=new xc(null,$n,$n,Fh),this.tex.source.dataReady=!1,this.tex.generateMipmaps=!0,this.tex.minFilter=bi,this.tex.magFilter=Qt,this.tex.anisotropy=8,this.tex.colorSpace=In,this.tex.needsUpdate=!0,e.initTexture(this.tex),this.free=Array.from({length:Fh},(s,o)=>Fh-1-o),this.canvas=typeof OffscreenCanvas<"u"?new OffscreenCanvas($n,$n):Object.assign(document.createElement("canvas"),{width:$n,height:$n}),this.ctx=this.canvas.getContext("2d");const r=2**Vo;i.streetTex.value=this.tex,i.streetIndex.value=this.index,i.streetGeo.value.set(this.grid.x0/r*360-180,Math.PI*(1-2*this.grid.y0/r),this.grid.width,this.grid.height),this._indexKey="",this.version=fetch(b2).then(s=>s.json()).then(s=>s.tiles[0].split("/planet/")[1].split("/")[0]).catch(()=>null)}_load(e){const n={state:"loading",used:this.frameNo,layer:-1};this.tiles.set(e,n),this.inflight++;const[i,r,s]=e.split("/").map(Number);this.version.then(o=>{if(!o)throw new Error("no tile version");return fetch(R2.replace("{v}",o).replace("{z}",i).replace("{x}",r).replace("{y}",s))}).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.arrayBuffer()}).then(o=>{n.buf=new Uint8Array(o),n.state="loaded"}).catch(()=>{n.state="failed",this.failures++}).finally(()=>{this.inflight--})}_draw(e,n){let i=this.free.pop();if(i===void 0){let s=null;for(const[o,a]of this.tiles)a.layer>=0&&a.used<this.frameNo&&(!s||a.used<s[1].used)&&(s=[o,a]);if(!s)return!1;i=s[1].layer,s[1].layer=-1}const r=Number(e.split("/")[0]);return k2(new u2(new f2(n.buf)),r,this.ctx),this._upload(i),n.layer=i,!0}_upload(e){const n=this.renderer.getContext();this.renderer.state.bindTexture(n.TEXTURE_2D_ARRAY,this.renderer.properties.get(this.tex).__webglTexture),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),n.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,e,$n,$n,1,n.RGBA,n.UNSIGNED_BYTE,this.canvas),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),this._mipsDue=!0}update(e,n,i){this.frameNo++;const r=c=>{var h;return((h=this.tiles.get(c))==null?void 0:h.layer)>=0},{show:s,want:o}=this.visible?I2(this.region,e.position.toArray(),i,r,{reach:Math.min(120,Math.max(20,n*2.2))}):{show:[],want:[]};for(const c of[...s,...o]){const h=this.tiles.get(c);h?h.used=this.frameNo:this.inflight<D2&&this._load(c)}const a=performance.now();for(const c of o){const h=this.tiles.get(c);if(!((h==null?void 0:h.state)!=="loaded"||h.layer>=0)&&(performance.now()-a>U2||!this._draw(c,h)))break}if(this._mipsDue){const c=this.renderer.getContext();this.renderer.state.bindTexture(c.TEXTURE_2D_ARRAY,this.renderer.properties.get(this.tex).__webglTexture),c.generateMipmap(c.TEXTURE_2D_ARRAY),this._mipsDue=!1}const l=s.map(c=>[c,this.tiles.get(c).layer]),u=l.map(c=>c.join(":")).sort().join(",");if(u!==this._indexKey&&(this._indexKey=u,B2(this.indexData,this.grid,l),this.index.needsUpdate=!0),this.U.streetOn.value=s.length>0?1:0,this.tiles.size>Xg){const c=new Set(s),h=[...this.tiles].filter(([f,p])=>!c.has(f)&&p.state!=="loading").sort((f,p)=>f[1].used-p[1].used);for(const[f,p]of h.slice(0,this.tiles.size-Xg))p.layer>=0&&this.free.push(p.layer),this.tiles.delete(f)}return this.pending=o.filter(c=>!r(c)).length,s.length}setVisible(e){this.visible=e}dispose(){this.tex.dispose(),this.index.dispose(),this.tiles.clear()}}const V2=`
  attribute float elev; attribute vec2 grad; attribute float drop;
  uniform float uExag, uFlat, uShadeK;
  uniform sampler2D uMask; uniform vec4 uMaskRect; uniform vec2 uMaskEps; uniform float uMaskOn;
  uniform vec4 uHole, uSinkBox; uniform float uHoleOn;
  uniform vec4 uProj, uStreetGeo;
  varying float vElev; varying vec3 vPos; varying vec3 vN; varying float vDrop; varying vec2 vTile;
  float shown(vec2 uv) { return step(0.5, texture2D(uMask, uv).r); }
  float sunk(vec2 xz) {
    float s = 0.0;
    if (uMaskOn > 0.5) {
      vec2 uv = (xz - uMaskRect.xy) / (uMaskRect.zw - uMaskRect.xy);
      if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) {
        // inset: a vertex on a shown tile's edge stays up unless the neighbour is shown too
        s = shown(uv + uMaskEps) * shown(uv - uMaskEps) * shown(uv + vec2(uMaskEps.x, -uMaskEps.y)) * shown(uv + vec2(-uMaskEps.x, uMaskEps.y));
      }
    }
    // the outer grid sinks only well inside the region, so where it meets the overview it is at its true height
    if (uHoleOn > 0.5 && xz.x > uSinkBox.x && xz.x < uSinkBox.y && xz.y > uSinkBox.z && xz.y < uSinkBox.w) s = 1.0;
    return s * 60.0;
  }
  void main() {
    float s = 0.001 * uExag * (1.0 - uFlat), sn = 0.001 * uExag;
    vec3 p = position;
    p.y = (elev - drop) * s - sunk(position.xz) * sn - (drop > 0.0 ? drop * sn * uFlat : 0.0);
    vElev = elev; vDrop = drop;
    // web-mercator zoom-14 tile coordinates from the street index's north-west corner (linear enough across a
    // triangle to interpolate)
    float lon = uProj.x + position.x / uProj.z, phi = radians(uProj.y - position.z / uProj.w);
    vTile = vec2((lon - uStreetGeo.x) / 360.0, (uStreetGeo.y - log(tan(phi) + 1.0 / cos(phi))) / 6.283185307) * 16384.0;
    vN = normalize(vec3(-grad.x * sn * uShadeK, 1.0, -grad.y * sn * uShadeK));
    vec4 wp = modelMatrix * vec4(p, 1.0); vPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,G2=`
  uniform float uStyle, uFlat, uInterval, uHoleOn, uHaze;
  uniform vec4 uHole;
  // water masks from OpenStreetMap (1 = water): the region's overview mask, and a detail tile's own finer mask
  uniform sampler2D uWater, uTileWater; uniform vec4 uWaterRect, uTileWaterRect; uniform float uWaterOn, uTileWaterOn;
  // street tiles (see VectorDrape.js): a layer per drawn tile, and an index with one texel per zoom-14 tile giving
  // (layer, zoom difference) of the tile that covers it. Where they are drawn they carry the (exact) water.
  uniform highp sampler2DArray uStreetTex; uniform sampler2D uStreetIndex; uniform vec4 uStreetGeo; uniform float uStreetOn;
  uniform vec3 uBg; uniform vec2 uHazeRange;
  varying float vElev; varying vec3 vPos; varying vec3 vN; varying float vDrop; varying vec2 vTile;

  vec3 ramp5(float t, vec3 a, vec3 b, vec3 c, vec3 d, vec3 e) {
    t = clamp(t, 0.0, 4.0);
    if (t < 1.0) return mix(a, b, t);
    if (t < 2.0) return mix(b, c, t - 1.0);
    if (t < 3.0) return mix(c, d, t - 2.0);
    return mix(d, e, t - 3.0);
  }
  // land: lowland green, foothill olive, tan, alpine grey, snow
  vec3 land(float h) {
    vec3 c0 = vec3(0.46, 0.55, 0.37), c1 = vec3(0.59, 0.63, 0.43), c2 = vec3(0.72, 0.67, 0.51),
         c3 = vec3(0.70, 0.66, 0.61), c4 = vec3(0.86, 0.84, 0.81);
    float t = h < 300.0 ? h / 300.0 : h < 900.0 ? 1.0 + (h - 300.0) / 600.0 : h < 1700.0 ? 2.0 + (h - 900.0) / 800.0 : 3.0 + (h - 1700.0) / 900.0;
    vec3 c = ramp5(t, c0, c1, c2, c3, c4);
    return mix(c, vec3(0.96, 0.96, 0.95), smoothstep(2500.0, 3300.0, h));   // glaciers and snowfields
  }
  // ocean: shallow sound and shelf, the shelf break near 200 m, slope, abyssal plain
  vec3 sea(float d) {
    vec3 c0 = vec3(0.50, 0.66, 0.74), c1 = vec3(0.40, 0.58, 0.68), c2 = vec3(0.24, 0.41, 0.54),
         c3 = vec3(0.14, 0.27, 0.39), c4 = vec3(0.08, 0.15, 0.24);
    float t = d < 120.0 ? d / 120.0 : d < 400.0 ? 1.0 + (d - 120.0) / 280.0 : d < 1800.0 ? 2.0 + (d - 400.0) / 1400.0 : 3.0 + (d - 1800.0) / 1700.0;
    return ramp5(t, c0, c1, c2, c3, c4);
  }
  float contour(float interval, float width) {
    float v = vElev / interval; float f = abs(fract(v - 0.5) - 0.5); float w = fwidth(v) * width;
    return 1.0 - smoothstep(0.0, w, f);
  }
  void main() {
    if (uHoleOn > 0.5 && vPos.x > uHole.x && vPos.x < uHole.y && vPos.z > uHole.z && vPos.z < uHole.w) discard;
    vec3 n = normalize(vN);
    // multi-directional hillshade: the cartographic north-west sun, with softer fills from the west and north
    float k1 = max(dot(n, normalize(vec3(-0.7, 0.85, -0.7))), 0.0);
    float k2 = max(dot(n, normalize(vec3(-1.0, 1.1, 0.15))), 0.0);
    float k3 = max(dot(n, normalize(vec3(0.1, 1.1, -1.0))), 0.0);
    float shade = 0.62 * k1 + 0.2 * k2 + 0.18 * k3;
    float slope = 1.0 - n.y;                                  // 0 flat, rising with steepness
    // water: the finest mask that covers this point; beyond the region, below sea level
    float m = vElev < 0.0 ? 1.0 : 0.0;
    bool masked = false;
    vec2 tuv = (vPos.xz - uTileWaterRect.xy) / (uTileWaterRect.zw - uTileWaterRect.xy);
    vec2 wuv = (vPos.xz - uWaterRect.xy) / (uWaterRect.zw - uWaterRect.xy);
    if (uTileWaterOn > 0.5 && tuv.x >= 0.0 && tuv.x <= 1.0 && tuv.y >= 0.0 && tuv.y <= 1.0) { m = texture2D(uTileWater, tuv).r; masked = true; }
    else if (uWaterOn > 0.5 && wuv.x >= 0.0 && wuv.x <= 1.0 && wuv.y >= 0.0 && wuv.y <= 1.0) { m = texture2D(uWater, wuv).r; masked = true; }
    float wet = masked ? smoothstep(0.4, 0.6, m) : m;
    // street detail (premultiplied colour), sampled with the tile coordinates' own gradients, which run smoothly
    // across the seams between tiles
    vec4 st = vec4(0.0);
    float street = 0.0;
    vec2 gx = dFdx(vTile), gy = dFdy(vTile);
    if (uStreetOn > 0.5 && vTile.x >= 0.0 && vTile.y >= 0.0 && vTile.x < uStreetGeo.z && vTile.y < uStreetGeo.w) {
      vec4 e = texelFetch(uStreetIndex, ivec2(vTile), 0);
      if (e.a > 0.5) {
        float k = exp2(-floor(e.g * 255.0 + 0.5));
        st = textureGrad(uStreetTex, vec3(fract(vTile * k), floor(e.r * 255.0 + 0.5)), gx * k, gy * k);
        street = 1.0;
      }
    }
    wet *= 1.0 - street;
    // water tints by depth, one continuous ramp for sea, lakes and rivers alike (a lake at or above sea level reads
    // as shallow water). Land the mask says is dry is land even where the 250 m terrain dips below zero.
    vec3 waterCol = sea(max(-vElev, 0.0) + 40.0);
    vec3 landCol = land(max(vElev, 0.0));
    vec3 relief = mix(landCol * mix(0.4, 1.3, shade) * (1.0 - 0.2 * slope), waterCol * mix(0.86, 1.06, shade), wet);
    vec3 base = mix(landCol, waterCol, wet);
    float g = mix(0.34, 0.72, clamp((vElev + 3000.0) / 7000.0, 0.0, 1.0));
    vec3 mono = vec3(g) * mix(0.42, 1.2, shade);
    float minor = contour(uInterval, 1.0), major = contour(uInterval * 5.0, 1.6);
    vec3 fill = (vec3(0.08) + base * 0.08) * mix(1.0, mix(0.6, 1.5, shade), 1.0 - uFlat);
    vec3 lines = mix(fill, mix(base, vec3(1.0), 0.3) * 0.65, minor * 0.5);
    lines = mix(lines, mix(base, vec3(1.0), 0.45), major * 0.9);
    vec3 col = uStyle < 1.0 ? mix(relief, mono, uStyle) : mix(mono, lines, uStyle - 1.0);
    // streets under the same hillshade as the ground (a little gentler, so roads stay legible on shaded slopes);
    // grey in the mono and contour styles
    vec3 stCol = st.rgb * mix(0.6, 1.18, shade) * (1.0 - 0.1 * slope);
    stCol = mix(stCol, vec3(dot(stCol, vec3(0.3, 0.59, 0.11))), clamp(uStyle, 0.0, 1.0) * st.a);
    col = col * (1.0 - st.a) + stCol;
    // the shoreline, a thin light line along the mask's edge (beyond the region, along sea level)
    float shore = masked ? 1.0 - smoothstep(0.0, max(fwidth(m), 1e-4) * 1.2, abs(m - 0.5))
                         : step(-60.0, vElev) * step(vElev, 60.0) * contour(120.0, 1.4);
    col = mix(col, vec3(0.93, 0.92, 0.88), shore * 0.6 * (1.0 - street));
    // (tile skirts keep their edge's colour, so a hairline crack between tiles shows the same ground)
    // aerial haze toward the background, in 3D only: clear up to the orbit target, thickening beyond it
    float d = distance(vPos, cameraPosition);
    col = mix(col, uBg, uHaze * (1.0 - uFlat) * smoothstep(uHazeRange.x, uHazeRange.y, d));
    gl_FragColor = vec4(col, 1.0);
  }`,Yf=new Vr(new Uint8Array([0]),1,1,xa);Yf.needsUpdate=!0;function Oh(t,e={}){return new Cn({vertexShader:V2,fragmentShader:G2,uniforms:{uExag:t.exag,uFlat:t.flat,uShadeK:t.shadeK,uStyle:t.style,uHaze:t.haze,uHazeRange:t.hazeRange,uBg:t.bg,uInterval:{value:100},uWater:t.water,uWaterRect:t.waterRect,uWaterOn:t.waterOn,uTileWater:{value:e.tileWater??Yf},uTileWaterRect:{value:e.tileWaterRect??new Oe},uTileWaterOn:{value:e.tileWater?1:0},uProj:t.proj,uStreetTex:t.streetTex,uStreetIndex:t.streetIndex,uStreetGeo:t.streetGeo,uStreetOn:t.streetOn,uMask:{value:e.mask??Yf},uMaskRect:{value:e.maskRect??new Oe},uMaskEps:{value:e.maskEps??new De},uMaskOn:{value:e.mask?1:0},uHole:{value:e.hole??new Oe},uHoleOn:{value:e.hole?1:0},uSinkBox:{value:e.sinkBox??new Oe}}})}const W2={relief:0,mono:1,contours:2},Yg="#121211",j2=[[1,800],[2,1/0]],X2=[[1,1100],[2,1/0]],Y2=128;class mp{constructor(e,n,i){wp(this,"_tick",()=>{var c;const e=performance.now(),n=Math.min(this.clock.getDelta(),.05),i=this.flight;if(i){const h=i.dur>0?Math.min(1,(e-i.t0)/i.dur):1,f=cC(h);this.camera.position.lerpVectors(i.fromPos,i.pos,f),this.controls.target.lerpVectors(i.fromTarget,i.target,f),i.target.equals(i.fromTarget)||(this.camera.position.y+=Math.sin(Math.PI*f)*i.fromPos.distanceTo(i.pos)*.12),h>=1&&(this.flight=null)}if(this.held.size){const h=fC(this.held,this.camera.position.toArray(),this.controls.target.toArray(),n);this.camera.position.x+=h[0],this.camera.position.z+=h[2],this.controls.target.x+=h[0],this.controls.target.z+=h[2]}const r=this.reducedMotion;this.controls.enableDamping=!r;const s=this.camera.position.distanceTo(this.controls.target);this.controls.rotateSpeed=_C(s),this.controls.update();for(const[h,f]of[["flat",5],["style",8]])this.U[h].value=pC(this.U[h].value,this.targets[h],n,f,r);this.camera.near=ha.clamp(s*.01,.05,20),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this._updateLevels(s);const o=this.detail.update(this.camera,s);this._drapeDue&&e>this._drapeDue&&(this._drapeDue=0,this._drape());const a=this.streets.update(this.camera,s,this.P),l=this.e,u=this.U.flat.value;for(const h of Object.values(this.lines))h.setScale(l,u),h.updateDistance(s,a>0);this.U.shadeK.value=ha.clamp(Math.sqrt(s/120),1,3.2),this.U.hazeRange.value.set(s,s*4),this.frame={dist:s,tiles:o,streets:a,streetsPending:this.streets.pending+this.streets.inflight,flat:u,exag:this.U.exag.value,e:l,failures:this.detail.failures},(c=this.onFrame)==null||c.call(this,this),this.renderer.render(this.scene,this.camera),this._raf=requestAnimationFrame(this._tick)});this.bundle=n,this.P=n.P,this.held=new Set,this.flight=null,this._view="3d";const r=this.renderer=new wx({canvas:e,antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(devicePixelRatio,1.5)),r.setSize(innerWidth,innerHeight),this.scene=new Tx,this.scene.background=new Ve(Yg),this.camera=new En(30,innerWidth/innerHeight,.5,12e3);const s=this.P,o=n.manifest.region,a=.5/n.manifest.water.overview.per_deg;i.flipY=!1,i.colorSpace=In,i.needsUpdate=!0,this.U={exag:{value:3},flat:{value:0},style:{value:0},haze:{value:.45},bg:{value:new Ve(Yg)},shadeK:{value:1},hazeRange:{value:new De(1e3,4e3)},proj:{value:new Oe(s.lon0,s.lat0,s.kx,s.kz)},streetTex:{value:null},streetIndex:{value:null},streetGeo:{value:new Oe},streetOn:{value:0},water:{value:i},waterOn:{value:1},waterRect:{value:new Oe(s.toX(o.west-a),s.toZ(o.north+a),s.toX(o.east+a),s.toZ(o.south-a))}},this.targets={flat:0,style:0},this.regionBox=new Oe(s.toX(o.west),s.toX(o.east),s.toZ(o.north),s.toZ(o.south)),this.detail=new $C(this.scene,this.U,n,s,h=>Oh(this.U,h));const l=(h,f)=>new Oe(h.x+f,h.y-f,h.z+f,h.w-f),u=Oh(this.U,{mask:this.detail.mask,maskRect:this.detail.maskRect,maskEps:this.detail.maskEps});u.polygonOffset=!0,u.polygonOffsetFactor=-1,u.polygonOffsetUnits=-2,this.levels=[this._levels(n.outer,Oh(this.U,{hole:l(this.regionBox,1),sinkBox:l(this.regionBox,10)}),X2,0),this._levels(n.overview,u,j2,0)],this.elevAt=(h,f)=>this.detail.sample(h,f)??n.overview.sample(h,f)??n.outer.sample(h,f)??0,this.lines=Object.fromEntries(Object.entries(n.lines).map(([h,f])=>[h,new t2(this.scene,h,f,s)])),this._drape=()=>{const h=(p,_)=>this.detail.isShown(p,_),f=(p,_)=>n.overview.sample(p,_);for(const p of Object.values(this.lines))p.drape(h,f)},this._drape(),this.streets=new H2(this.renderer,o,this.U),this.detail.onChange=()=>{this._drapeDue=performance.now()+120},this._resolution();const c=this.controls=new RC(this.camera,e);c.enableDamping=!0,c.dampingFactor=.08,c.screenSpacePanning=!1,c.zoomToCursor=!0,c.maxPolarAngle=Math.PI*.47,c.minDistance=4,c.maxDistance=4500,c.mouseButtons={LEFT:pi.PAN,MIDDLE:pi.DOLLY,RIGHT:pi.ROTATE},c.touches={ONE:Ri.PAN,TWO:Ri.DOLLY_ROTATE},c.addEventListener("start",()=>{this.flight=null}),this._onContext=h=>h.preventDefault(),e.addEventListener("contextmenu",this._onContext),this._onKeyDown=h=>{gC(h)&&(h.preventDefault(),this.held.add(h.key),this.flight=null)},this._onKeyUp=h=>h.key==="Meta"?this.held.clear():this.held.delete(h.key),this._onBlur=()=>this.held.clear(),this._onResize=()=>{var h;r.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this._resolution(),(h=this.onResize)==null||h.call(this)},addEventListener("keydown",this._onKeyDown),addEventListener("keyup",this._onKeyUp),addEventListener("blur",this._onBlur),addEventListener("resize",this._onResize),this._motion=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.jumpTo("home"),this.clock=new Ix,this._v=new I,this.frame={dist:0,tiles:0,flat:0},window.__earthnote=this,this._raf=requestAnimationFrame(this._tick)}static async create(e,n){const i=await new fp().loadAsync(n.waterUrl);return new mp(e,n,i)}_levels(e,n,i,r){return{grid:e,material:n,order:r,levels:i.map(([s,o])=>({step:s,far:o,mesh:null})),current:-1}}_levelMesh(e,n){if(!n.mesh){const{ncols:i,nrows:r}=e.grid.meta;n.mesh=new Us;for(const s of RM(i,r,Y2*n.step,n.step)){const o=new fn(hv(kx,e.grid,this.P,n.step,0,s),e.material);o.renderOrder=e.order,n.mesh.add(o)}this.scene.add(n.mesh)}return n.mesh}_updateLevels(e){const n=this.camera.position,i=this.regionBox,r=Math.min(n.x-i.x,i.y-n.x,n.z-i.z,i.w-n.z),s=Math.max(e,r>0?Math.hypot(r,n.y):e);for(const o of this.levels){const a=o===this.levels[0]?s:e;let l=o.current<0?o.levels.findIndex(c=>a<=c.far):o.current;for(;l<o.levels.length-1&&a>o.levels[l].far*1.1;)l++;for(;l>0&&a<o.levels[l-1].far*.9;)l--;if(l===o.current)continue;const u=this._levelMesh(o,o.levels[l]);for(const c of o.levels)c.mesh&&(c.mesh.visible=c.mesh===u);o.current=l}}_resolution(){for(const e of Object.values(this.lines??{}))e.setResolution(innerWidth,innerHeight)}get reducedMotion(){var e;return!!((e=this._motion)!=null&&e.matches)}get e(){return this.U.exag.value*.001*(1-this.U.flat.value)}project(e,n,i){const r=this._v.set(e,n,i).project(this.camera);return[(r.x+1)/2*innerWidth,(1-r.y)/2*innerHeight,r.z]}_pose(e){return hC(e,this.P,this.elevAt,this.e)}jumpTo(e){const n=this._pose(Vg[e]);this.camera.position.set(...n.pos),this.controls.target.set(...n.target)}flyTo(e){const n=this._pose(Vg[e]);this._fly(new I(...n.pos),new I(...n.target),1800)}flyToPoint(e,n,i=60){const r=new I(this.P.toX(e),this.elevAt(e,n)*this.e,this.P.toZ(n)),s=this.camera.position.clone().sub(this.controls.target).normalize();this._view==="2d"&&s.set(0,1,.001).normalize(),this._fly(r.clone().add(s.multiplyScalar(i)),r,1500)}orbit(e){const n=this.controls.target,i=vC(this.camera.position.toArray(),n.toArray(),e,.001,this.controls.maxPolarAngle);this._fly(new I(...i),n.clone(),350)}_fly(e,n,i){this.flight={t0:performance.now(),dur:dC(i,this.reducedMotion),fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),pos:e,target:n}}setStyle(e){this.targets.style=W2[e]}setExag(e){const n=e/this.U.exag.value,i=this.controls.target.y*(n-1);this.U.exag.value=e,this.controls.target.y+=i,this.camera.position.y+=i}setLayer(e,n){var i;e==="streets"?this.streets.setVisible(n):(i=this.lines[e])==null||i.setVisible(n)}setView(e){var a;if(e===this._view)return;this._view=e;const n=e==="2d";this.targets.flat=n?1:0;const i=new Xu().setFromVector3(this.camera.position.clone().sub(this.controls.target));n&&(this._savedPolar=i.phi),i.phi=n?.001:this._savedPolar??.7,this.controls.minPolarAngle=0,this.controls.maxPolarAngle=n?.001:Math.PI*.47;const r=this.controls.target.clone(),s=this.P.fromX(r.x),o=this.P.fromZ(r.z);r.y=n?0:this.elevAt(s,o)*this.U.exag.value*.001,this._fly(r.clone().add(new I().setFromSpherical(i)),r,900),(a=this.onView)==null||a.call(this,e)}dispose(){var e;cancelAnimationFrame(this._raf),removeEventListener("keydown",this._onKeyDown),removeEventListener("keyup",this._onKeyUp),removeEventListener("blur",this._onBlur),removeEventListener("resize",this._onResize),this.renderer.domElement.removeEventListener("contextmenu",this._onContext);for(const n of Object.values(this.lines))n.dispose();for(const n of this.levels){for(const i of n.levels)(e=i.mesh)==null||e.traverse(r=>{var s;return(s=r.geometry)==null?void 0:s.dispose()});n.material.dispose()}this.streets.dispose(),this.detail.dispose(),this.controls.dispose(),this.renderer.dispose(),window.__earthnote===this&&delete window.__earthnote}}function $g({label:t,options:e,value:n,onChange:i}){return O.jsxs("div",{className:"ctl-row",children:[O.jsx("span",{className:"eyebrow",children:t}),O.jsx("div",{className:"seg",role:"group","aria-label":t,children:e.map(([r,s])=>O.jsx("button",{"aria-pressed":n===r,onClick:()=>{r!==n&&i(r)},children:s},r))})]})}function $2({label:t,sub:e,k:n,on:i,onChange:r,swatch:s}){return O.jsxs("button",{className:"tog",role:"switch","aria-checked":i,"aria-label":t,onClick:()=>r(!i),children:[O.jsx("span",{className:"sw"}),O.jsxs("span",{className:"t",children:[t,e&&O.jsx("small",{children:e})]}),s,n&&O.jsx("kbd",{children:n})]})}function q2({scene:t}){const[e,n]=we.useState("3d"),[i,r]=we.useState("relief"),[s,o]=we.useState(t.U.exag.value);return we.useEffect(()=>(t.onView=n,()=>{t.onView=null}),[t]),O.jsxs("div",{className:"panel controls",children:[O.jsx($g,{label:"View",options:[["3d","3D"],["2d","2D"]],value:e,onChange:a=>{n(a),t.setView(a)}}),O.jsx($g,{label:"Style",options:[["relief","Relief"],["mono","Mono"],["contours","Contours"]],value:i,onChange:a=>{r(a),t.setStyle(a)}}),O.jsxs("label",{className:"ctl-row slider",children:["Vertical exaggeration ",O.jsxs("span",{className:"mono",children:[s.toFixed(1),"×"]}),O.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:s,"aria-label":"Vertical exaggeration",disabled:e==="2d",onChange:a=>{const l=+a.target.value;o(l),t.setExag(l)}})]}),O.jsx("div",{className:"hint",children:"Drag to move · right-drag or Shift-drag to rotate · scroll to zoom · arrow keys to glide"})]})}const kh=[["motorway","Motorways","interstates and freeways","M"],["trunk","Highways","trunk roads","H"],["primary","Main roads","primary roads","R"],["borders","Borders","country, state and province","B"],["places","Place names","cities, towns and peaks","N"],["streets","Street detail","every road, building and shoreline as you zoom in","S"]];function K2({scene:t,labels:e}){const[n,i]=we.useState(()=>Object.fromEntries(kh.map(([o])=>[o,!0]))),r=(o,a)=>{i(l=>({...l,[o]:a})),o==="borders"?(t.setLayer("country",a),t.setLayer("state",a)):o==="places"?e==null||e.setVisible(a):t.setLayer(o,a)},s=we.useRef(null);return s.current=o=>{if(o.metaKey||o.ctrlKey||o.altKey||dp(o.target))return;const a=kh.find(([,,,l])=>{var u;return l.toLowerCase()===((u=o.key)==null?void 0:u.toLowerCase())});a&&r(a[0],!n[a[0]])},we.useEffect(()=>{const o=a=>{var l;return(l=s.current)==null?void 0:l.call(s,a)};return addEventListener("keydown",o),()=>removeEventListener("keydown",o)},[]),O.jsxs("div",{className:"panel layers-panel",children:[O.jsx("div",{className:"eyebrow",children:"Base map"}),kh.map(([o,a,l,u])=>O.jsx($2,{k:u,label:a,sub:l,on:n[o],onChange:c=>r(o,c)},o))]})}function Z2({active:t,onPlace:e}){return O.jsxs("nav",{className:"panel goto","aria-label":"Go to",children:[O.jsx("div",{className:"eyebrow",children:"Go to"}),O.jsx("div",{className:"row",children:Wx.map(([n,i])=>O.jsx("button",{"aria-pressed":t===n,onClick:()=>e(n),children:i},n))})]})}function Q2(t,e,n=8){const i=e.trim().toLowerCase();if(!i)return[];const r=[],s=[];for(const o of t){const a=o.name.toLowerCase();a.startsWith(i)?r.push(o):a.includes(i)&&s.push(o)}return[...r,...s].slice(0,n)}const J2={city:"City",town:"Town",peak:"Peak"};function eR({places:t,detail:e,onPick:n}){const[i,r]=we.useState(""),[s,o]=we.useState(0),a=we.useMemo(()=>Q2(t,i),[t,i]),l=u=>{n(u),r(""),o(0)};return O.jsxs("header",{className:"panel header",children:[O.jsxs("div",{className:"title-row",children:[O.jsx("h1",{children:"Earthnote · Pacific Northwest"}),O.jsx("span",{className:"detail-tag mono",title:"Terrain detail at the view centre",children:e})]}),O.jsx("p",{children:"Washington, Oregon, southern British Columbia and the offshore margin."}),O.jsxs("div",{className:"search",children:[O.jsx("input",{type:"search",placeholder:"Find a city, town or peak",value:i,"aria-label":"Find a place",onChange:u=>{r(u.target.value),o(0)},onKeyDown:u=>{u.key==="ArrowDown"&&(u.preventDefault(),o(c=>Math.min(a.length-1,c+1))),u.key==="ArrowUp"&&(u.preventDefault(),o(c=>Math.max(0,c-1))),u.key==="Enter"&&a[s]&&l(a[s]),u.key==="Escape"&&r("")}}),a.length>0&&O.jsx("ul",{role:"listbox",children:a.map((u,c)=>O.jsxs("li",{role:"option","aria-selected":c===s,onMouseDown:()=>l(u),children:[O.jsx("span",{children:u.name}),O.jsxs("span",{className:"sub",children:[J2[u.kind],u.pop?` · ${u.pop.toLocaleString()}`:""]})]},`${u.name}-${u.lon}`))})]})]})}const tR=[["Move","drag, or the arrow keys"],["Rotate / tilt","right-drag, or Shift- / Ctrl-drag"],["Zoom","scroll or pinch; the nav pad's + and −"],["Layers","M motorways · H highways · R main roads · B borders · N names · S streets"]];function nR({manifest:t}){const e=t.credits;return O.jsxs("div",{className:"panel helppanel",children:[O.jsx("div",{className:"hc-set",children:tR.map(([n,i])=>O.jsxs("div",{className:"hc-row",children:[O.jsx("b",{children:n}),O.jsx("span",{children:i})]},n))}),O.jsx("div",{className:"hc-note",children:"Terrain: about 250 m near the camera, 1 km for the region, 2 km offshore. Heights are exaggerated in 3D (see View); 2D shows the same shading flat."}),O.jsxs("div",{className:"attribution",children:[e.terrain,". ",e.osm,". ",e.ne,". Street detail: OpenFreeMap © OpenMapTiles, data © OpenStreetMap contributors.",O.jsxs("div",{className:"hc-dev mono",children:["bundle built ",t.built]})]})]})}const iR={view:O.jsxs(O.Fragment,{children:[O.jsx("path",{d:"M1.3 8S3.8 3.5 8 3.5 14.7 8 14.7 8 12.2 12.5 8 12.5 1.3 8 1.3 8z"}),O.jsx("circle",{cx:"8",cy:"8",r:"2.1"})]}),layers:O.jsxs(O.Fragment,{children:[O.jsx("path",{d:"M8 2 1.8 5.3 8 8.6l6.2-3.3z"}),O.jsx("path",{d:"m1.8 8.2 6.2 3.3 6.2-3.3"}),O.jsx("path",{d:"m1.8 11 6.2 3.3 6.2-3.3"})]}),legend:O.jsxs(O.Fragment,{children:[O.jsx("rect",{x:"1.8",y:"3",width:"2.4",height:"2.4"}),O.jsx("rect",{x:"1.8",y:"10.6",width:"2.4",height:"2.4"}),O.jsx("path",{d:"M7 4.2h7.2M7 8h7.2M7 11.8h7.2M1.8 8h2.4"})]}),help:O.jsxs(O.Fragment,{children:[O.jsx("circle",{cx:"8",cy:"8",r:"6.5"}),O.jsx("path",{d:"M6.1 6.3a1.95 1.95 0 1 1 2.7 1.8c-.5.2-.8.6-.8 1.1v.7"}),O.jsx("circle",{cx:"8",cy:"11.6",r:".4",fill:"currentColor"})]})};function rR({items:t,open:e,onToggle:n}){const i=r=>`hud-pop-${r}`;return O.jsxs("div",{className:"hud-dock",children:[O.jsx("div",{className:"dock-bar",children:t.map(({key:r,label:s,icon:o})=>O.jsx("button",{className:"panel dock-btn","aria-label":s,title:s,"aria-expanded":e.has(r),"aria-controls":i(r),onClick:()=>n(r),children:O.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.3",strokeLinejoin:"round","aria-hidden":"true",children:iR[o]})},r))}),O.jsx("div",{className:"dock-pops",children:t.map(({key:r,label:s,node:o})=>O.jsx("div",{id:i(r),className:`dock-pop${e.has(r)?" open":""}`,role:"group","aria-label":s,children:o},r))})]})}const sR="linear-gradient(90deg, rgb(117,140,94) 0%, rgb(150,161,110) 9%, rgb(184,171,130) 27%, rgb(179,168,156) 52%, rgb(219,214,207) 79%, rgb(245,245,242) 100%)",oR="linear-gradient(90deg, rgb(20,38,61) 0%, rgb(36,69,99) 49%, rgb(61,105,138) 89%, rgb(102,148,173) 97%, rgb(143,181,194) 100%)";function xo({name:t,label:e}){const[n,i,r,s]=Gx[t];return O.jsxs("div",{className:"row",children:[O.jsxs("svg",{className:"glyph",viewBox:"0 0 18 12","aria-hidden":"true",children:[r&&O.jsx("line",{x1:"1",y1:"6",x2:"17",y2:"6",stroke:r,strokeWidth:s,strokeLinecap:"round"}),O.jsx("line",{x1:"1",y1:"6",x2:"17",y2:"6",stroke:n,strokeWidth:i,strokeLinecap:"round"})]}),e]})}function aR(){return O.jsxs("div",{className:"panel legend",children:[O.jsxs("div",{children:[O.jsx("div",{className:"eyebrow",children:"Elevation"}),O.jsx("div",{className:"ramp",style:{background:sR}}),O.jsxs("div",{className:"ramp-labels mono",children:[O.jsx("span",{children:"0"}),O.jsx("span",{children:"1,700"}),O.jsx("span",{children:"3,300 m"})]})]}),O.jsxs("div",{children:[O.jsx("div",{className:"eyebrow",children:"Depth"}),O.jsx("div",{className:"ramp",style:{background:oR}}),O.jsxs("div",{className:"ramp-labels mono",children:[O.jsx("span",{children:"3,500 m"}),O.jsx("span",{children:"1,800"}),O.jsx("span",{children:"0"})]})]}),O.jsxs("div",{children:[O.jsx("div",{className:"eyebrow",children:"Lines"}),O.jsx(xo,{name:"motorway",label:"Motorway / interstate"}),O.jsx(xo,{name:"trunk",label:"Highway"}),O.jsx(xo,{name:"primary",label:"Main road"}),O.jsx(xo,{name:"country",label:"Country border"}),O.jsx(xo,{name:"state",label:"State / province"})]})]})}const lR=[["⟲","Rotate left",{dAz:-20}],["⟳","Rotate right",{dAz:20}],["▲","Tilt toward the horizon",{dPol:10}],["▼","Tilt toward overhead",{dPol:-10}],["+","Zoom in",{zoom:.6}],["−","Zoom out",{zoom:1.6}],["N","North up",{northUp:!0}]];function uR({scene:t}){return O.jsx("nav",{className:"panel navpad","aria-label":"Navigation",children:lR.map(([e,n,i])=>O.jsx("button",{title:n,"aria-label":n,onClick:()=>t.orbit(i),children:e},n))})}const qg=[.1,.2,.5,1,2,5,10,20,50,100,200,500];function cR(t,e,n){return 2*e*Math.tan(t*Math.PI/360)/n}function hR(t,e=110,n=150){let i=qg[0];for(const r of qg)r/t<=n&&Math.abs(r/t-e)<Math.abs(i/t-e)&&(i=r);return{km:i,px:i/t}}function fR({scene:t}){const[e,n]=we.useState(null);if(we.useEffect(()=>{const r=()=>{const o=t.camera,a=o.position.distanceTo(t.controls.target),l=hR(cR(o.fov,a,innerHeight));n(u=>u&&u.km===l.km&&Math.abs(u.px-l.px)<1?u:l)};r();const s=setInterval(r,250);return()=>clearInterval(s)},[t]),!e)return null;const i=e.km<1?`${Math.round(e.km*1e3)} m`:`${e.km} km`;return O.jsxs("div",{className:"panel scalebar","aria-label":`Scale: ${i} at the view centre`,title:"Exact at the view centre; nearer ground looks larger, farther ground smaller",children:[O.jsx("div",{className:"sb-bar",style:{width:`${e.px}px`}}),O.jsx("div",{className:"sb-label mono",children:i})]})}function dR(){try{const t=document.createElement("canvas");return!!(t.getContext("webgl2")||t.getContext("webgl"))}catch{return!1}}function pR(){const[t,e]=we.useState(null),[n,i]=we.useState(null);return we.useEffect(()=>{LM().then(e,i)},[]),n?O.jsx("div",{className:"app-message",role:"alert",children:O.jsxs("div",{children:[n.message,n instanceof nu&&O.jsx("code",{children:PM})]})}):t?dR()?O.jsx(gR,{bundle:t,onError:i}):O.jsx("div",{className:"app-message",children:"This map needs WebGL, which this browser has turned off."}):O.jsx("div",{className:"app-message",children:"Loading the map…"})}const Kg="nov2026_ar",mR=t=>t.streets>0?"streets":t.flat>.5?"2D":t.tiles>0?"250 m":t.dist>2200?"2 km":"1 km";function gR({bundle:t,onError:e}){const n=we.useRef(null),i=we.useRef(null),[r,s]=we.useState(null),[o,a]=we.useState(null),[l,u]=we.useState(null),[c,h]=we.useState("1 km"),[f,p]=we.useState("home"),[_,y]=we.useState(()=>new Set(["view"]));we.useEffect(()=>{let d,v,g,S,b=!1,C=0,T=performance.now();return mp.create(n.current,t).then(R=>{if(b){R.dispose();return}d=R,v=new AC(i.current,t.places,R),R.onFrame=()=>{const X=performance.now(),x=Math.min(.1,(X-T)/1e3);T=X,v.update(),g==null||g.update(x,R.frame.dist),C++%15===0&&h(mR(R.frame))},s(R),a(v),Im(Kg).then(X=>{!X||b||(g=new oC(R.scene,t.P,X,R.U),u({doc:X,layer:g}),S=setInterval(()=>Im(Kg).then(x=>{x&&!b&&u(E=>E&&E.doc.updated===x.updated?E:{doc:x,layer:g})}).catch(()=>{}),10*6e4))}).catch(()=>{})},e),()=>{b=!0,clearInterval(S),v==null||v.dispose(),g==null||g.dispose(),d==null||d.dispose()}},[t,e]);const m=d=>y(v=>{const g=new Set(v);return g.delete(d)||g.add(d),g});return O.jsxs(O.Fragment,{children:[O.jsx("canvas",{ref:n,className:"map-scene","aria-label":"3D map of the Pacific Northwest"}),O.jsx("div",{id:"map-overlay",ref:i}),r&&O.jsxs(O.Fragment,{children:[O.jsx(eR,{places:t.places,detail:c,onPick:d=>{p(null),r.flyToPoint(d.lon,d.lat,d.kind==="peak"?45:70)}}),O.jsx(rR,{open:_,onToggle:m,items:[{key:"view",label:"View",icon:"view",node:O.jsx(q2,{scene:r})},{key:"layers",label:"Layers",icon:"layers",node:O.jsx(K2,{scene:r,labels:o})},{key:"legend",label:"Legend",icon:"legend",node:O.jsx(aR,{})},{key:"help",label:"Help",icon:"help",node:O.jsx(nR,{manifest:t.manifest})}]}),O.jsx(Z2,{active:f,onPlace:d=>{p(d),r.flyTo(d)}}),l&&O.jsx(MC,{doc:l.doc,layer:l.layer}),O.jsx(uR,{scene:r}),O.jsx(fR,{scene:r})]})]})}uv(document.getElementById("root")).render(O.jsx(pR,{}));
