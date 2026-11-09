var jy=Object.defineProperty;var Xy=(t,e,n)=>e in t?jy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var tm=(t,e,n)=>Xy(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var B0={exports:{}},mc={},H0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Yy=Symbol.for("react.fragment"),qy=Symbol.for("react.strict_mode"),Ky=Symbol.for("react.profiler"),Zy=Symbol.for("react.provider"),Qy=Symbol.for("react.context"),Jy=Symbol.for("react.forward_ref"),eS=Symbol.for("react.suspense"),tS=Symbol.for("react.memo"),nS=Symbol.for("react.lazy"),nm=Symbol.iterator;function iS(t){return t===null||typeof t!="object"?null:(t=nm&&t[nm]||t["@@iterator"],typeof t=="function"?t:null)}var V0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,W0={};function no(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||V0}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function j0(){}j0.prototype=no.prototype;function wd(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||V0}var Ed=wd.prototype=new j0;Ed.constructor=wd;G0(Ed,no.prototype);Ed.isPureReactComponent=!0;var im=Array.isArray,X0=Object.prototype.hasOwnProperty,Td={current:null},$0={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)X0.call(e,i)&&!$0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ea,type:t,key:s,ref:o,props:r,_owner:Td.current}}function rS(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function sS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rm=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sS(""+t.key):e.toString(36)}function Il(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case $y:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Kc(o,0):i,im(r)?(n="",t!=null&&(n=t.replace(rm,"$&/")+"/"),Il(r,e,n,"",function(u){return u})):r!=null&&(Ad(r)&&(r=rS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(rm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",im(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Kc(s,a);o+=Il(s,e,n,l,r)}else if(l=iS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Kc(s,a++),o+=Il(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ka(t,e,n){if(t==null)return t;var i=[],r=0;return Il(t,i,"","",function(s){return e.call(n,s,r++)}),i}function oS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},Fl={transition:null},aS={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Fl,ReactCurrentOwner:Td};function q0(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:ka,forEach:function(t,e,n){ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ka(t,function(){e++}),e},toArray:function(t){return ka(t,function(e){return e})||[]},only:function(t){if(!Ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=no;je.Fragment=Yy;je.Profiler=Ky;je.PureComponent=wd;je.StrictMode=qy;je.Suspense=eS;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;je.act=q0;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=G0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Td.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)X0.call(e,l)&&!$0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ea,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:Qy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zy,_context:t},t.Consumer=t};je.createElement=Y0;je.createFactory=function(t){var e=Y0.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Jy,render:t}};je.isValidElement=Ad;je.lazy=function(t){return{$$typeof:nS,_payload:{_status:-1,_result:t},_init:oS}};je.memo=function(t,e){return{$$typeof:tS,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Fl.transition;Fl.transition={};try{t()}finally{Fl.transition=e}};je.unstable_act=q0;je.useCallback=function(t,e){return cn.current.useCallback(t,e)};je.useContext=function(t){return cn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};je.useEffect=function(t,e){return cn.current.useEffect(t,e)};je.useId=function(){return cn.current.useId()};je.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return cn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};je.useRef=function(t){return cn.current.useRef(t)};je.useState=function(t){return cn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return cn.current.useTransition()};je.version="18.3.1";H0.exports=je;var ie=H0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=ie,uS=Symbol.for("react.element"),cS=Symbol.for("react.fragment"),hS=Object.prototype.hasOwnProperty,fS=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dS={key:!0,ref:!0,__self:!0,__source:!0};function K0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hS.call(e,i)&&!dS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:uS,type:t,key:s,ref:o,props:r,_owner:fS.current}}mc.Fragment=cS;mc.jsx=K0;mc.jsxs=K0;B0.exports=mc;var b=B0.exports,Z0={exports:{}},Ln={},Q0={exports:{}},J0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Z){var Y=D.length;D.push(Z);e:for(;0<Y;){var oe=Y-1>>>1,xe=D[oe];if(0<r(xe,Z))D[oe]=Z,D[Y]=xe,Y=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Z=D[0],Y=D.pop();if(Y!==Z){D[0]=Y;e:for(var oe=0,xe=D.length,ze=xe>>>1;oe<ze;){var $=2*(oe+1)-1,q=D[$],le=$+1,ae=D[le];if(0>r(q,Y))le<xe&&0>r(ae,q)?(D[oe]=ae,D[le]=Y,oe=le):(D[oe]=q,D[$]=Y,oe=$);else if(le<xe&&0>r(ae,Y))D[oe]=ae,D[le]=Y,oe=le;else break e}}return Z}function r(D,Z){var Y=D.sortIndex-Z.sortIndex;return Y!==0?Y:D.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var Z=n(u);Z!==null;){if(Z.callback===null)i(u);else if(Z.startTime<=D)i(u),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(u)}}function S(D){if(_=!1,v(D),!g)if(n(l)!==null)g=!0,H(P);else{var Z=n(u);Z!==null&&K(S,Z.startTime-D)}}function P(D,Z){g=!1,_&&(_=!1,d(L),L=-1),p=!0;var Y=f;try{for(v(Z),h=n(l);h!==null&&(!(h.expirationTime>Z)||D&&!w());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var xe=oe(h.expirationTime<=Z);Z=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&i(l),v(Z)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var $=n(u);$!==null&&K(S,$.startTime-Z),ze=!1}return ze}finally{h=null,f=Y,p=!1}}var R=!1,T=null,L=-1,X=5,y=-1;function w(){return!(t.unstable_now()-y<X)}function O(){if(T!==null){var D=t.unstable_now();y=D;var Z=!0;try{Z=T(!0,D)}finally{Z?k():(R=!1,T=null)}}else R=!1}var k;if(typeof x=="function")k=function(){x(O)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,J=z.port2;z.port1.onmessage=O,k=function(){J.postMessage(null)}}else k=function(){m(O,0)};function H(D){T=D,R||(R=!0,k())}function K(D,Z){L=m(function(){D(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var Y=f;f=Z;try{return D()}finally{f=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=f;f=D;try{return Z()}finally{f=Y}},t.unstable_scheduleCallback=function(D,Z,Y){var oe=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,D){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Y+xe,D={id:c++,callback:Z,priorityLevel:D,startTime:Y,expirationTime:xe,sortIndex:-1},Y>oe?(D.sortIndex=Y,e(u,D),n(l)===null&&D===n(u)&&(_?(d(L),L=-1):_=!0,K(S,Y-oe))):(D.sortIndex=xe,e(l,D),g||p||(g=!0,H(P))),D},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(D){var Z=f;return function(){var Y=f;f=Z;try{return D.apply(this,arguments)}finally{f=Y}}}})(J0);Q0.exports=J0;var pS=Q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mS=ie,Pn=pS;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ev=new Set,Zo={};function is(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Zo[t]=e,t=0;t<e.length;t++)ev.add(e[t])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=Object.prototype.hasOwnProperty,gS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sm={},om={};function vS(t){return cf.call(om,t)?!0:cf.call(sm,t)?!1:gS.test(t)?om[t]=!0:(sm[t]=!0,!1)}function _S(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xS(t,e,n,i){if(e===null||typeof e>"u"||_S(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bd=/[\-:]([a-z])/g;function Cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bd,Cd);Xt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bd,Cd);Xt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bd,Cd);Xt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rd(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xS(e,n,r,i)&&(n=null),i||r===null?vS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=mS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),tv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),iv=Symbol.for("react.offscreen"),am=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Zc;function To(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var Qc=!1;function Jc(t,e){if(!t||Qc)return"";Qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function yS(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case ws:return"Portal";case hf:return"Profiler";case Pd:return"StrictMode";case ff:return"Suspense";case df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nv:return(t.displayName||"Context")+".Consumer";case tv:return(t._context.displayName||"Context")+".Provider";case Ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:pf(t.type)||"Memo";case Qi:e=t._payload,t=t._init;try{return pf(t(e))}catch{}}return null}function SS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pf(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MS(t){var e=rv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ba(t){t._valueTracker||(t._valueTracker=MS(t))}function sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mf(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ov(t,e){e=e.checked,e!=null&&Rd(t,"checked",e,!1)}function gf(t,e){ov(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&vf(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function um(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vf(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ao(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function av(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,uv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wS=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){wS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function cv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function hv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ES=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yf(t,e){if(e){if(ES[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mf=null;function Nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wf=null,zs=null,Bs=null;function fm(t){if(t=ba(t)){if(typeof wf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=yc(e),wf(t.stateNode,t.type,e))}}function fv(t){zs?Bs?Bs.push(t):Bs=[t]:zs=t}function dv(){if(zs){var t=zs,e=Bs;if(Bs=zs=null,fm(t),e)for(t=0;t<e.length;t++)fm(e[t])}}function pv(t,e){return t(e)}function mv(){}var eh=!1;function gv(t,e,n){if(eh)return t(e,n);eh=!0;try{return pv(t,e,n)}finally{eh=!1,(zs!==null||Bs!==null)&&(mv(),dv())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var i=yc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Ef=!1;if(Fi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Ef=!1}function TS(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Uo=!1,Ql=null,Jl=!1,Tf=null,AS={onError:function(t){Uo=!0,Ql=t}};function bS(t,e,n,i,r,s,o,a,l){Uo=!1,Ql=null,TS.apply(AS,arguments)}function CS(t,e,n,i,r,s,o,a,l){if(bS.apply(this,arguments),Uo){if(Uo){var u=Ql;Uo=!1,Ql=null}else throw Error(re(198));Jl||(Jl=!0,Tf=u)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dm(t){if(rs(t)!==t)throw Error(re(188))}function RS(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return dm(r),t;if(s===i)return dm(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function _v(t){return t=RS(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var yv=Pn.unstable_scheduleCallback,pm=Pn.unstable_cancelCallback,PS=Pn.unstable_shouldYield,LS=Pn.unstable_requestPaint,Mt=Pn.unstable_now,DS=Pn.unstable_getCurrentPriorityLevel,Ud=Pn.unstable_ImmediatePriority,Sv=Pn.unstable_UserBlockingPriority,eu=Pn.unstable_NormalPriority,NS=Pn.unstable_LowPriority,Mv=Pn.unstable_IdlePriority,gc=null,fi=null;function US(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:OS,IS=Math.log,FS=Math.LN2;function OS(t){return t>>>=0,t===0?32:31-(IS(t)/FS|0)|0}var Va=64,Ga=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=n&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function kS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=kS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Af(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wv(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function th(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function BS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Ev(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tv,Fd,Av,bv,Cv,bf=!1,Wa=[],lr=null,ur=null,cr=null,ea=new Map,ta=new Map,er=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mm(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ba(e),e!==null&&Fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function VS(t,e,n,i,r){switch(e){case"focusin":return lr=co(lr,t,e,n,i,r),!0;case"dragenter":return ur=co(ur,t,e,n,i,r),!0;case"mouseover":return cr=co(cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ea.set(s,co(ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ta.set(s,co(ta.get(s)||null,t,e,n,i,r)),!0}return!1}function Rv(t){var e=kr(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=vv(n),e!==null){t.blockedOn=e,Cv(t.priority,function(){Av(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mf=i,n.target.dispatchEvent(i),Mf=null}else return e=ba(n),e!==null&&Fd(e),t.blockedOn=n,!1;e.shift()}return!0}function gm(t,e,n){Ol(t)&&n.delete(e)}function GS(){bf=!1,lr!==null&&Ol(lr)&&(lr=null),ur!==null&&Ol(ur)&&(ur=null),cr!==null&&Ol(cr)&&(cr=null),ea.forEach(gm),ta.forEach(gm)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,bf||(bf=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,GS)))}function na(t){function e(r){return ho(r,t)}if(0<Wa.length){ho(Wa[0],t);for(var n=1;n<Wa.length;n++){var i=Wa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&ho(lr,t),ur!==null&&ho(ur,t),cr!==null&&ho(cr,t),ea.forEach(e),ta.forEach(e),n=0;n<er.length;n++)i=er[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)Rv(n),n.blockedOn===null&&er.shift()}var Hs=Hi.ReactCurrentBatchConfig,nu=!0;function WS(t,e,n,i){var r=rt,s=Hs.transition;Hs.transition=null;try{rt=1,Od(t,e,n,i)}finally{rt=r,Hs.transition=s}}function jS(t,e,n,i){var r=rt,s=Hs.transition;Hs.transition=null;try{rt=4,Od(t,e,n,i)}finally{rt=r,Hs.transition=s}}function Od(t,e,n,i){if(nu){var r=Cf(t,e,n,i);if(r===null)hh(t,e,i,iu,n),mm(t,i);else if(VS(r,t,e,n,i))i.stopPropagation();else if(mm(t,i),e&4&&-1<HS.indexOf(t)){for(;r!==null;){var s=ba(r);if(s!==null&&Tv(s),s=Cf(t,e,n,i),s===null&&hh(t,e,i,iu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hh(t,e,i,null,n)}}var iu=null;function Cf(t,e,n,i){if(iu=null,t=Nd(i),t=kr(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return iu=t,null}function Pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DS()){case Ud:return 1;case Sv:return 4;case eu:case NS:return 16;case Mv:return 536870912;default:return 16}default:return 16}}var rr=null,kd=null,kl=null;function Lv(){if(kl)return kl;var t,e=kd,n=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return kl=r.slice(t,1<i?1-i:void 0)}function zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ja(){return!0}function vm(){return!1}function Dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ja:vm,this.isPropagationStopped=vm,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=Dn(io),Aa=_t({},io,{view:0,detail:0}),XS=Dn(Aa),nh,ih,fo,vc=_t({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(nh=t.screenX-fo.screenX,ih=t.screenY-fo.screenY):ih=nh=0,fo=t),nh)},movementY:function(t){return"movementY"in t?t.movementY:ih}}),_m=Dn(vc),$S=_t({},vc,{dataTransfer:0}),YS=Dn($S),qS=_t({},Aa,{relatedTarget:0}),rh=Dn(qS),KS=_t({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),ZS=Dn(KS),QS=_t({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JS=Dn(QS),eM=_t({},io,{data:0}),xm=Dn(eM),tM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iM[t])?!!e[t]:!1}function Bd(){return rM}var sM=_t({},Aa,{key:function(t){if(t.key){var e=tM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oM=Dn(sM),aM=_t({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Dn(aM),lM=_t({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),uM=Dn(lM),cM=_t({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),hM=Dn(cM),fM=_t({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dM=Dn(fM),pM=[9,13,27,32],Hd=Fi&&"CompositionEvent"in window,Io=null;Fi&&"documentMode"in document&&(Io=document.documentMode);var mM=Fi&&"TextEvent"in window&&!Io,Dv=Fi&&(!Hd||Io&&8<Io&&11>=Io),Sm=" ",Mm=!1;function Nv(t,e){switch(t){case"keyup":return pM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function gM(t,e){switch(t){case"compositionend":return Uv(e);case"keypress":return e.which!==32?null:(Mm=!0,Sm);case"textInput":return t=e.data,t===Sm&&Mm?null:t;default:return null}}function vM(t,e){if(Ts)return t==="compositionend"||!Hd&&Nv(t,e)?(t=Lv(),kl=kd=rr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dv&&e.locale!=="ko"?null:e.data;default:return null}}var _M={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_M[t.type]:e==="textarea"}function Iv(t,e,n,i){fv(i),e=ru(e,"onChange"),0<e.length&&(n=new zd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,ia=null;function xM(t){Xv(t,0)}function _c(t){var e=Cs(t);if(sv(e))return t}function yM(t,e){if(t==="change")return e}var Fv=!1;if(Fi){var sh;if(Fi){var oh="oninput"in document;if(!oh){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),oh=typeof Em.oninput=="function"}sh=oh}else sh=!1;Fv=sh&&(!document.documentMode||9<document.documentMode)}function Tm(){Fo&&(Fo.detachEvent("onpropertychange",Ov),ia=Fo=null)}function Ov(t){if(t.propertyName==="value"&&_c(ia)){var e=[];Iv(e,ia,t,Nd(t)),gv(xM,e)}}function SM(t,e,n){t==="focusin"?(Tm(),Fo=e,ia=n,Fo.attachEvent("onpropertychange",Ov)):t==="focusout"&&Tm()}function MM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _c(ia)}function wM(t,e){if(t==="click")return _c(e)}function EM(t,e){if(t==="input"||t==="change")return _c(e)}function TM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:TM;function ra(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!cf.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function Am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,e){var n=Am(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Am(n)}}function kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zv(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function Vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AM(t){var e=zv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kv(n.ownerDocument.documentElement,n)){if(i!==null&&Vd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bm(n,s);var o=bm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bM=Fi&&"documentMode"in document&&11>=document.documentMode,As=null,Rf=null,Oo=null,Pf=!1;function Cm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pf||As==null||As!==Zl(i)||(i=As,"selectionStart"in i&&Vd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oo&&ra(Oo,i)||(Oo=i,i=ru(Rf,"onSelect"),0<i.length&&(e=new zd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=As)))}function Xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},ah={},Bv={};Fi&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function xc(t){if(ah[t])return ah[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bv)return ah[t]=e[n];return t}var Hv=xc("animationend"),Vv=xc("animationiteration"),Gv=xc("animationstart"),Wv=xc("transitionend"),jv=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){jv.set(t,e),is(e,[t])}for(var lh=0;lh<Rm.length;lh++){var uh=Rm[lh],CM=uh.toLowerCase(),RM=uh[0].toUpperCase()+uh.slice(1);Sr(CM,"on"+RM)}Sr(Hv,"onAnimationEnd");Sr(Vv,"onAnimationIteration");Sr(Gv,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(Wv,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Pm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,CS(i,e,void 0,t),t.currentTarget=null}function Xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Pm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Pm(r,a,u),s=l}}}if(Jl)throw t=Tf,Jl=!1,Tf=null,t}function ct(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var i=t+"__bubble";n.has(i)||($v(e,t,2,!1),n.add(i))}function ch(t,e,n){var i=0;e&&(i|=4),$v(n,t,i,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[$a]){t[$a]=!0,ev.forEach(function(n){n!=="selectionchange"&&(PM.has(n)||ch(n,!1,t),ch(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,ch("selectionchange",!1,e))}}function $v(t,e,n,i){switch(Pv(e)){case 1:var r=WS;break;case 4:r=jS;break;default:r=Od}n=r.bind(null,e,n,t),r=void 0,!Ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hh(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gv(function(){var u=s,c=Nd(n),h=[];e:{var f=jv.get(t);if(f!==void 0){var p=zd,g=t;switch(t){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":p=oM;break;case"focusin":g="focus",p=rh;break;case"focusout":g="blur",p=rh;break;case"beforeblur":case"afterblur":p=rh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uM;break;case Hv:case Vv:case Gv:p=ZS;break;case Wv:p=hM;break;case"scroll":p=XS;break;case"wheel":p=dM;break;case"copy":case"cut":case"paste":p=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ym}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=Jo(x,d),S!=null&&_.push(oa(x,S,v)))),m)break;x=x.return}0<_.length&&(f=new p(f,g,null,n,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Mf&&(g=n.relatedTarget||n.fromElement)&&(kr(g)||g[Oi]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?kr(g):null,g!==null&&(m=rs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=_m,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=ym,S="onPointerLeave",d="onPointerEnter",x="pointer"),m=p==null?f:Cs(p),v=g==null?f:Cs(g),f=new _(S,x+"leave",p,n,c),f.target=m,f.relatedTarget=v,S=null,kr(c)===u&&(_=new _(d,x+"enter",g,n,c),_.target=v,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,d=g,x=0,v=_;v;v=as(v))x++;for(v=0,S=d;S;S=as(S))v++;for(;0<x-v;)_=as(_),x--;for(;0<v-x;)d=as(d),v--;for(;x--;){if(_===d||d!==null&&_===d.alternate)break t;_=as(_),d=as(d)}_=null}else _=null;p!==null&&Lm(h,f,p,_,!1),g!==null&&m!==null&&Lm(h,m,g,_,!0)}}e:{if(f=u?Cs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=yM;else if(wm(f))if(Fv)P=EM;else{P=MM;var R=SM}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=wM);if(P&&(P=P(t,u))){Iv(h,P,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&vf(f,"number",f.value)}switch(R=u?Cs(u):window,t){case"focusin":(wm(R)||R.contentEditable==="true")&&(As=R,Rf=u,Oo=null);break;case"focusout":Oo=Rf=As=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,Cm(h,n,c);break;case"selectionchange":if(bM)break;case"keydown":case"keyup":Cm(h,n,c)}var T;if(Hd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ts?Nv(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Dv&&n.locale!=="ko"&&(Ts||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ts&&(T=Lv()):(rr=c,kd="value"in rr?rr.value:rr.textContent,Ts=!0)),R=ru(u,L),0<R.length&&(L=new xm(L,t,null,n,c),h.push({event:L,listeners:R}),T?L.data=T:(T=Uv(n),T!==null&&(L.data=T)))),(T=mM?gM(t,n):vM(t,n))&&(u=ru(u,"onBeforeInput"),0<u.length&&(c=new xm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}Xv(h,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ru(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Jo(t,n),s!=null&&i.unshift(oa(t,s,r)),s=Jo(t,e),s!=null&&i.push(oa(t,s,r))),t=t.return}return i}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Jo(n,s),l!=null&&o.unshift(oa(n,l,a))):r||(l=Jo(n,s),l!=null&&o.push(oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var LM=/\r\n?/g,DM=/\u0000|\uFFFD/g;function Dm(t){return(typeof t=="string"?t:""+t).replace(LM,`
`).replace(DM,"")}function Ya(t,e,n){if(e=Dm(e),Dm(t)!==e&&n)throw Error(re(425))}function su(){}var Lf=null,Df=null;function Nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,NM=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,UM=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(IM)}:Uf;function IM(t){setTimeout(function(){throw t})}function fh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);na(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ro=Math.random().toString(36).slice(2),li="__reactFiber$"+ro,aa="__reactProps$"+ro,Oi="__reactContainer$"+ro,If="__reactEvents$"+ro,FM="__reactListeners$"+ro,OM="__reactHandles$"+ro;function kr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Oi]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[li])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function ba(t){return t=t[li]||t[Oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function yc(t){return t[aa]||null}var Ff=[],Rs=-1;function Mr(t){return{current:t}}function ht(t){0>Rs||(t.current=Ff[Rs],Ff[Rs]=null,Rs--)}function lt(t,e){Rs++,Ff[Rs]=t.current,t.current=e}var vr={},nn=Mr(vr),_n=Mr(!1),Xr=vr;function $s(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function ou(){ht(_n),ht(nn)}function Im(t,e,n){if(nn.current!==vr)throw Error(re(168));lt(nn,e),lt(_n,n)}function Yv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,SS(t)||"Unknown",r));return _t({},n,i)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Xr=nn.current,lt(nn,t),lt(_n,_n.current),!0}function Fm(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Yv(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,ht(_n),ht(nn),lt(nn,t)):ht(_n),lt(_n,n)}var Ei=null,Sc=!1,dh=!1;function qv(t){Ei===null?Ei=[t]:Ei.push(t)}function kM(t){Sc=!0,qv(t)}function wr(){if(!dh&&Ei!==null){dh=!0;var t=0,e=rt;try{var n=Ei;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,Sc=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),yv(Ud,wr),r}finally{rt=e,dh=!1}}return null}var Ps=[],Ls=0,lu=null,uu=0,In=[],Fn=0,$r=null,Ai=1,bi="";function Nr(t,e){Ps[Ls++]=uu,Ps[Ls++]=lu,lu=t,uu=e}function Kv(t,e,n){In[Fn++]=Ai,In[Fn++]=bi,In[Fn++]=$r,$r=t;var i=Ai;t=bi;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ai=1<<32-ei(e)+r|n<<r|i,bi=s+t}else Ai=1<<s|n<<r|i,bi=t}function Gd(t){t.return!==null&&(Nr(t,1),Kv(t,1,0))}function Wd(t){for(;t===lu;)lu=Ps[--Ls],Ps[Ls]=null,uu=Ps[--Ls],Ps[Ls]=null;for(;t===$r;)$r=In[--Fn],In[Fn]=null,bi=In[--Fn],In[Fn]=null,Ai=In[--Fn],In[Fn]=null}var Rn=null,Cn=null,ft=!1,Qn=null;function Zv(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Ai,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function Of(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kf(t){if(ft){var e=Cn;if(e){var n=e;if(!Om(t,e)){if(Of(t))throw Error(re(418));e=hr(n.nextSibling);var i=Rn;e&&Om(t,e)?Zv(i,n):(t.flags=t.flags&-4097|2,ft=!1,Rn=t)}}else{if(Of(t))throw Error(re(418));t.flags=t.flags&-4097|2,ft=!1,Rn=t}}}function km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function qa(t){if(t!==Rn)return!1;if(!ft)return km(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nf(t.type,t.memoizedProps)),e&&(e=Cn)){if(Of(t))throw Qv(),Error(re(418));for(;e;)Zv(t,e),e=hr(e.nextSibling)}if(km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?hr(t.stateNode.nextSibling):null;return!0}function Qv(){for(var t=Cn;t;)t=hr(t.nextSibling)}function Ys(){Cn=Rn=null,ft=!1}function jd(t){Qn===null?Qn=[t]:Qn.push(t)}var zM=Hi.ReactCurrentBatchConfig;function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zm(t){var e=t._init;return e(t._payload)}function Jv(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=mr(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,v,S){return x===null||x.tag!==6?(x=yh(v,d.mode,S),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,S){var P=v.type;return P===Es?c(d,x,v.props.children,S,v.key):x!==null&&(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Qi&&zm(P)===x.type)?(S=r(x,v.props),S.ref=po(d,x,v),S.return=d,S):(S=Xl(v.type,v.key,v.props,null,d.mode,S),S.ref=po(d,x,v),S.return=d,S)}function u(d,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Sh(v,d.mode,S),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function c(d,x,v,S,P){return x===null||x.tag!==7?(x=Vr(v,d.mode,S,P),x.return=d,x):(x=r(x,v),x.return=d,x)}function h(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=yh(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case za:return v=Xl(x.type,x.key,x.props,null,d.mode,v),v.ref=po(d,null,x),v.return=d,v;case ws:return x=Sh(x,d.mode,v),x.return=d,x;case Qi:var S=x._init;return h(d,S(x._payload),v)}if(Ao(x)||lo(x))return x=Vr(x,d.mode,v,null),x.return=d,x;Ka(d,x)}return null}function f(d,x,v,S){var P=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(d,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return v.key===P?l(d,x,v,S):null;case ws:return v.key===P?u(d,x,v,S):null;case Qi:return P=v._init,f(d,x,P(v._payload),S)}if(Ao(v)||lo(v))return P!==null?null:c(d,x,v,S,null);Ka(d,v)}return null}function p(d,x,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,a(x,d,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case za:return d=d.get(S.key===null?v:S.key)||null,l(x,d,S,P);case ws:return d=d.get(S.key===null?v:S.key)||null,u(x,d,S,P);case Qi:var R=S._init;return p(d,x,v,R(S._payload),P)}if(Ao(S)||lo(S))return d=d.get(v)||null,c(x,d,S,P,null);Ka(x,S)}return null}function g(d,x,v,S){for(var P=null,R=null,T=x,L=x=0,X=null;T!==null&&L<v.length;L++){T.index>L?(X=T,T=null):X=T.sibling;var y=f(d,T,v[L],S);if(y===null){T===null&&(T=X);break}t&&T&&y.alternate===null&&e(d,T),x=s(y,x,L),R===null?P=y:R.sibling=y,R=y,T=X}if(L===v.length)return n(d,T),ft&&Nr(d,L),P;if(T===null){for(;L<v.length;L++)T=h(d,v[L],S),T!==null&&(x=s(T,x,L),R===null?P=T:R.sibling=T,R=T);return ft&&Nr(d,L),P}for(T=i(d,T);L<v.length;L++)X=p(T,d,L,v[L],S),X!==null&&(t&&X.alternate!==null&&T.delete(X.key===null?L:X.key),x=s(X,x,L),R===null?P=X:R.sibling=X,R=X);return t&&T.forEach(function(w){return e(d,w)}),ft&&Nr(d,L),P}function _(d,x,v,S){var P=lo(v);if(typeof P!="function")throw Error(re(150));if(v=P.call(v),v==null)throw Error(re(151));for(var R=P=null,T=x,L=x=0,X=null,y=v.next();T!==null&&!y.done;L++,y=v.next()){T.index>L?(X=T,T=null):X=T.sibling;var w=f(d,T,y.value,S);if(w===null){T===null&&(T=X);break}t&&T&&w.alternate===null&&e(d,T),x=s(w,x,L),R===null?P=w:R.sibling=w,R=w,T=X}if(y.done)return n(d,T),ft&&Nr(d,L),P;if(T===null){for(;!y.done;L++,y=v.next())y=h(d,y.value,S),y!==null&&(x=s(y,x,L),R===null?P=y:R.sibling=y,R=y);return ft&&Nr(d,L),P}for(T=i(d,T);!y.done;L++,y=v.next())y=p(T,d,L,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?L:y.key),x=s(y,x,L),R===null?P=y:R.sibling=y,R=y);return t&&T.forEach(function(O){return e(d,O)}),ft&&Nr(d,L),P}function m(d,x,v,S){if(typeof v=="object"&&v!==null&&v.type===Es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case za:e:{for(var P=v.key,R=x;R!==null;){if(R.key===P){if(P=v.type,P===Es){if(R.tag===7){n(d,R.sibling),x=r(R,v.props.children),x.return=d,d=x;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Qi&&zm(P)===R.type){n(d,R.sibling),x=r(R,v.props),x.ref=po(d,R,v),x.return=d,d=x;break e}n(d,R);break}else e(d,R);R=R.sibling}v.type===Es?(x=Vr(v.props.children,d.mode,S,v.key),x.return=d,d=x):(S=Xl(v.type,v.key,v.props,null,d.mode,S),S.ref=po(d,x,v),S.return=d,d=S)}return o(d);case ws:e:{for(R=v.key;x!==null;){if(x.key===R)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Sh(v,d.mode,S),x.return=d,d=x}return o(d);case Qi:return R=v._init,m(d,x,R(v._payload),S)}if(Ao(v))return g(d,x,v,S);if(lo(v))return _(d,x,v,S);Ka(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=yh(v,d.mode,S),x.return=d,d=x),o(d)):n(d,x)}return m}var qs=Jv(!0),e_=Jv(!1),cu=Mr(null),hu=null,Ds=null,Xd=null;function $d(){Xd=Ds=hu=null}function Yd(t){var e=cu.current;ht(cu),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){hu=t,Xd=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(hu===null)throw Error(re(308));Ds=t,hu.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var zr=null;function qd(t){zr===null?zr=[t]:zr.push(t)}function t_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,qd(e)):(n.next=r.next,r.next=n),e.interleaved=n,ki(t,i)}function ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(t,n)}return r=i.interleaved,r===null?(e.next=e,qd(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}function Bm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,i){var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(f=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=_t({},h,f);break e;case 2:Ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=h}}function Hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Ca={},di=Mr(Ca),la=Mr(Ca),ua=Mr(Ca);function Br(t){if(t===Ca)throw Error(re(174));return t}function Zd(t,e){switch(lt(ua,e),lt(la,t),lt(di,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xf(e,t)}ht(di),lt(di,e)}function Ks(){ht(di),ht(la),ht(ua)}function i_(t){Br(ua.current);var e=Br(di.current),n=xf(e,t.type);e!==n&&(lt(la,t),lt(di,n))}function Qd(t){la.current===t&&(ht(di),ht(la))}var pt=Mr(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ph=[];function Jd(){for(var t=0;t<ph.length;t++)ph[t]._workInProgressVersionPrimary=null;ph.length=0}var Hl=Hi.ReactCurrentDispatcher,mh=Hi.ReactCurrentBatchConfig,Yr=0,vt=null,bt=null,Ut=null,pu=!1,ko=!1,ca=0,BM=0;function Yt(){throw Error(re(321))}function ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function tp(t,e,n,i,r,s){if(Yr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?WM:jM,t=n(i,r),ko){s=0;do{if(ko=!1,ca=0,25<=s)throw Error(re(301));s+=1,Ut=bt=null,e.updateQueue=null,Hl.current=XM,t=n(i,r)}while(ko)}if(Hl.current=mu,e=bt!==null&&bt.next!==null,Yr=0,Ut=bt=vt=null,pu=!1,e)throw Error(re(300));return t}function np(){var t=ca!==0;return ca=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?vt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Vn(){if(bt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?vt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw Error(re(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?vt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ha(t,e){return typeof e=="function"?e(t):e}function gh(t){var e=Vn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=c,qr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vh(t){var e=Vn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function r_(){}function s_(t,e){var n=vt,i=Vn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,ip(l_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,fa(9,a_.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(re(349));Yr&30||o_(n,e,r)}return r}function o_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a_(t,e,n,i){e.value=n,e.getSnapshot=i,u_(e)&&c_(t)}function l_(t,e,n){return n(function(){u_(e)&&c_(t)})}function u_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function c_(t){var e=ki(t,1);e!==null&&ti(e,t,1,-1)}function Vm(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=GM.bind(null,vt,t),[e.memoizedState,t]}function fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function h_(){return Vn().memoizedState}function Vl(t,e,n,i){var r=oi();vt.flags|=t,r.memoizedState=fa(1|e,n,void 0,i===void 0?null:i)}function Mc(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&ep(i,o.deps)){r.memoizedState=fa(e,n,s,i);return}}vt.flags|=t,r.memoizedState=fa(1|e,n,s,i)}function Gm(t,e){return Vl(8390656,8,t,e)}function ip(t,e){return Mc(2048,8,t,e)}function f_(t,e){return Mc(4,2,t,e)}function d_(t,e){return Mc(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,p_.bind(null,e,t),n)}function rp(){}function g_(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function __(t,e,n){return Yr&21?(ni(n,e)||(n=wv(),vt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function HM(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=mh.transition;mh.transition={};try{t(!1),e()}finally{rt=n,mh.transition=i}}function x_(){return Vn().memoizedState}function VM(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},y_(t))S_(e,n);else if(n=t_(t,e,n,i),n!==null){var r=ln();ti(n,t,i,r),M_(n,e,i)}}function GM(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(y_(t))S_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,qd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=t_(t,e,r,i),n!==null&&(r=ln(),ti(n,t,i,r),M_(n,e,i))}}function y_(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function S_(t,e){ko=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function M_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}var mu={readContext:Hn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},WM={readContext:Hn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:Gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=VM.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:Vm,useDebugValue:rp,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=Vm(!1),e=t[0];return t=HM.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=oi();if(ft){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ft===null)throw Error(re(349));Yr&30||o_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gm(l_.bind(null,i,s,t),[t]),i.flags|=2048,fa(9,a_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Ft.identifierPrefix;if(ft){var n=bi,i=Ai;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jM={readContext:Hn,useCallback:g_,useContext:Hn,useEffect:ip,useImperativeHandle:m_,useInsertionEffect:f_,useLayoutEffect:d_,useMemo:v_,useReducer:gh,useRef:h_,useState:function(){return gh(ha)},useDebugValue:rp,useDeferredValue:function(t){var e=Vn();return __(e,bt.memoizedState,t)},useTransition:function(){var t=gh(ha)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1},XM={readContext:Hn,useCallback:g_,useContext:Hn,useEffect:ip,useImperativeHandle:m_,useInsertionEffect:f_,useLayoutEffect:d_,useMemo:v_,useReducer:vh,useRef:h_,useState:function(){return vh(ha)},useDebugValue:rp,useDeferredValue:function(t){var e=Vn();return bt===null?e.memoizedState=t:__(e,bt.memoizedState,t)},useTransition:function(){var t=vh(ha)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=pr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(ti(e,t,r,i),Bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=pr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(ti(e,t,r,i),Bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=pr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(ti(e,t,i,n),Bl(e,t,i))}};function Wm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,i)||!ra(r,s):!0}function w_(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=xn(e)?Xr:nn.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function jm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=xn(e)?Xr:nn.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wc.enqueueReplaceState(r,r.state,null),fu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=yS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function _h(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $M=typeof WeakMap=="function"?WeakMap:Map;function E_(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vu||(vu=!0,Qf=i),Vf(t,e)},n}function T_(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vf(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $M;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=aw.bind(null,t,e,n),e.then(t,t))}function $m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ym(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var YM=Hi.ReactCurrentOwner,gn=!1;function on(t,e,n,i){e.child=t===null?e_(e,null,n,i):qs(e,t.child,n,i)}function qm(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=tp(t,e,n,i,s,r),n=np(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(ft&&n&&Gd(e),e.flags|=1,on(t,e,i,r),e.child)}function Km(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!fp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A_(t,e,s,i,r)):(t=Xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,i)&&t.ref===e.ref)return zi(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function A_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ra(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,zi(t,e,r)}return Gf(t,e,n,i,r)}function b_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Us,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Us,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Us,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Us,Tn),Tn|=i;return on(t,e,r,n),e.child}function C_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,i,r){var s=xn(n)?Xr:nn.current;return s=$s(e,s),Vs(e,r),n=tp(t,e,n,i,s,r),i=np(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(ft&&i&&Gd(e),e.flags|=1,on(t,e,n,r),e.child)}function Zm(t,e,n,i,r){if(xn(n)){var s=!0;au(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Gl(t,e),w_(e,n,i),Hf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Hn(u):(u=xn(n)?Xr:nn.current,u=$s(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&jm(e,o,i,u),Ji=!1;var f=e.memoizedState;o.state=f,fu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||_n.current||Ji?(typeof c=="function"&&(Bf(e,n,c,i),l=e.memoizedState),(a=Ji||Wm(e,n,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,n_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=xn(n)?Xr:nn.current,l=$s(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&jm(e,o,i,l),Ji=!1,f=e.memoizedState,o.state=f,fu(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||_n.current||Ji?(typeof p=="function"&&(Bf(e,n,p,i),g=e.memoizedState),(u=Ji||Wm(e,n,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Wf(t,e,n,i,s,r)}function Wf(t,e,n,i,r,s){C_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Fm(e,n,!1),zi(t,e,s);i=e.stateNode,YM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):on(t,e,a,s),e.memoizedState=i.state,r&&Fm(e,n,!0),e.child}function R_(t){var e=t.stateNode;e.pendingContext?Im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Im(t,e.context,!1),Zd(t,e.containerInfo)}function Qm(t,e,n,i,r){return Ys(),jd(r),e.flags|=256,on(t,e,n,i),e.child}var jf={dehydrated:null,treeContext:null,retryLane:0};function Xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function P_(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(pt,r&1),t===null)return kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ac(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xf(n),e.memoizedState=jf,t):sp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return qM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jf,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sp(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,i){return i!==null&&jd(i),qs(e,t.child,null,n),t=sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=_h(Error(re(422))),Za(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ac({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Xf(o),e.memoizedState=jf,s);if(!(e.mode&1))return Za(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=_h(s,i,void 0),Za(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(t,r),ti(i,t,r,-1))}return hp(),i=_h(Error(re(421))),Za(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=lw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=hr(r.nextSibling),Rn=e,ft=!0,Qn=null,t!==null&&(In[Fn++]=Ai,In[Fn++]=bi,In[Fn++]=$r,Ai=t.id,bi=t.overflow,$r=e),e=sp(e,i.children),e.flags|=4096,e)}function Jm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zf(t.return,e,n)}function xh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function L_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jm(t,n,e);else if(t.tag===19)Jm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&du(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xh(e,!0,n,null,s);break;case"together":xh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KM(t,e,n){switch(e.tag){case 3:R_(e),Ys();break;case 5:i_(e);break;case 1:xn(e.type)&&au(e);break;case 4:Zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(cu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?P_(t,e,n):(lt(pt,pt.current&1),t=zi(t,e,n),t!==null?t.sibling:null);lt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return L_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,b_(t,e,n)}return zi(t,e,n)}var D_,$f,N_,U_;D_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};N_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(di.current);var s=null;switch(n){case"input":r=mf(t,r),i=mf(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=_f(t,r),i=_f(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=su)}yf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};U_=function(t,e,n,i){n!==i&&(e.flags|=4)};function mo(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ZM(t,e,n){var i=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return xn(e.type)&&ou(),qt(e),null;case 3:return i=e.stateNode,Ks(),ht(_n),ht(nn),Jd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(td(Qn),Qn=null))),$f(t,e),qt(e),null;case 5:Qd(e);var r=Br(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)N_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return qt(e),null}if(t=Br(di.current),qa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[aa]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Co.length;r++)ct(Co[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":lm(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":cm(i,s),ct("invalid",i)}yf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,a,t),r=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ba(i),um(i,s,!0);break;case"textarea":Ba(i),hm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=su)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[aa]=i,D_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sf(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<Co.length;r++)ct(Co[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":lm(t,i),r=mf(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ct("invalid",t);break;case"textarea":cm(t,i),r=_f(t,i),ct("invalid",t);break;default:r=i}yf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Rd(t,s,l,o))}switch(n){case"input":Ba(t),um(t,i,!1);break;case"textarea":Ba(t),hm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)U_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Br(ua.current),Br(di.current),qa(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return qt(e),null;case 13:if(ht(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Cn!==null&&e.mode&1&&!(e.flags&128))Qv(),Ys(),e.flags|=98560,s=!1;else if(s=qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[li]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Qn!==null&&(td(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Rt===0&&(Rt=3):hp())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Ks(),$f(t,e),t===null&&sa(e.stateNode.containerInfo),qt(e),null;case 10:return Yd(e.type._context),qt(e),null;case 17:return xn(e.type)&&ou(),qt(e),null;case 19:if(ht(pt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)mo(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Qs&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=du(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return qt(e),null}else 2*Mt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=pt.current,lt(pt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return cp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function QM(t,e){switch(Wd(e),e.tag){case 1:return xn(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),ht(_n),ht(nn),Jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qd(e),null;case 13:if(ht(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(pt),null;case 4:return Ks(),null;case 10:return Yd(e.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var Qa=!1,Qt=!1,JM=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Yf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var eg=!1;function ew(t,e){if(Lf=nu,t=zv(),Vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:t,selectionRange:n},nu=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Yn(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return g=eg,eg=!1,g}function zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yf(e,n,s)}r=r.next}while(r!==i)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function I_(t){var e=t.alternate;e!==null&&(t.alternate=null,I_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[aa],delete e[If],delete e[FM],delete e[OM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F_(t){return t.tag===5||t.tag===3||t.tag===4}function tg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(i!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}function Zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}var Ht=null,Kn=!1;function ji(t,e,n){for(n=n.child;n!==null;)O_(t,e,n),n=n.sibling}function O_(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:Qt||Ns(n,e);case 6:var i=Ht,r=Kn;Ht=null,ji(t,e,n),Ht=i,Kn=r,Ht!==null&&(Kn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Kn?(t=Ht,n=n.stateNode,t.nodeType===8?fh(t.parentNode,n):t.nodeType===1&&fh(t,n),na(t)):fh(Ht,n.stateNode));break;case 4:i=Ht,r=Kn,Ht=n.stateNode.containerInfo,Kn=!0,ji(t,e,n),Ht=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yf(n,e,o),r=r.next}while(r!==i)}ji(t,e,n);break;case 1:if(!Qt&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}ji(t,e,n);break;case 21:ji(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,ji(t,e,n),Qt=i):ji(t,e,n);break;default:ji(t,e,n)}}function ng(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JM),e.forEach(function(i){var r=uw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Kn=!1;break e;case 3:Ht=a.stateNode.containerInfo,Kn=!0;break e;case 4:Ht=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Ht===null)throw Error(re(160));O_(s,o,r),Ht=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k_(e,t),e=e.sibling}function k_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),ii(t),i&4){try{zo(3,t,t.return),Ec(3,t)}catch(_){yt(t,t.return,_)}try{zo(5,t,t.return)}catch(_){yt(t,t.return,_)}}break;case 1:Wn(e,t),ii(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Wn(e,t),ii(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{Qo(r,"")}catch(_){yt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ov(r,s),Sf(a,o);var u=Sf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?hv(r,h):c==="dangerouslySetInnerHTML"?uv(r,h):c==="children"?Qo(r,h):Rd(r,c,h,u)}switch(a){case"input":gf(r,s);break;case"textarea":av(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ks(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[aa]=s}catch(_){yt(t,t.return,_)}}break;case 6:if(Wn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){yt(t,t.return,_)}}break;case 3:if(Wn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(_){yt(t,t.return,_)}break;case 4:Wn(e,t),ii(t);break;case 13:Wn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lp=Mt())),i&4&&ng(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(u=Qt)||c,Wn(e,t),Qt=u):Wn(e,t),ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(_e=t,c=t.child;c!==null;){for(h=_e=c;_e!==null;){switch(f=_e,p=f.child,f.tag){case 0:case 11:case 14:case 15:zo(4,f,f.return);break;case 1:Ns(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){yt(i,n,_)}}break;case 5:Ns(f,f.return);break;case 22:if(f.memoizedState!==null){rg(h);continue}}p!==null?(p.return=f,_e=p):rg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cv("display",o))}catch(_){yt(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){yt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),ii(t),i&4&&ng(t);break;case 21:break;default:Wn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qo(r,""),i.flags&=-33);var s=tg(t);Zf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=tg(t);Kf(t,a,o);break;default:throw Error(re(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tw(t,e,n){_e=t,z_(t)}function z_(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Qa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=Qa;var u=Qt;if(Qa=o,(Qt=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?sg(r):l!==null?(l.return=o,_e=l):sg(r);for(;s!==null;)_e=s,z_(s),s=s.sibling;_e=r,Qa=a,Qt=u}ig(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):ig(t)}}function ig(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||Ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&na(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Qt||e.flags&512&&qf(e)}catch(f){yt(e,e.return,f)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function rg(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function sg(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{qf(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{qf(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var nw=Math.ceil,gu=Hi.ReactCurrentDispatcher,op=Hi.ReactCurrentOwner,Bn=Hi.ReactCurrentBatchConfig,qe=0,Ft=null,Tt=null,Wt=0,Tn=0,Us=Mr(0),Rt=0,da=null,qr=0,Tc=0,ap=0,Bo=null,mn=null,lp=0,Qs=1/0,wi=null,vu=!1,Qf=null,dr=null,Ja=!1,sr=null,_u=0,Ho=0,Jf=null,Wl=-1,jl=0;function ln(){return qe&6?Mt():Wl!==-1?Wl:Wl=Mt()}function pr(t){return t.mode&1?qe&2&&Wt!==0?Wt&-Wt:zM.transition!==null?(jl===0&&(jl=wv()),jl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Pv(t.type)),t):1}function ti(t,e,n,i){if(50<Ho)throw Ho=0,Jf=null,Error(re(185));Ta(t,n,i),(!(qe&2)||t!==Ft)&&(t===Ft&&(!(qe&2)&&(Tc|=n),Rt===4&&tr(t,Wt)),yn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Qs=Mt()+500,Sc&&wr()))}function yn(t,e){var n=t.callbackNode;zS(t,e);var i=tu(t,t===Ft?Wt:0);if(i===0)n!==null&&pm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&pm(n),e===1)t.tag===0?kM(og.bind(null,t)):qv(og.bind(null,t)),UM(function(){!(qe&6)&&wr()}),n=null;else{switch(Ev(i)){case 1:n=Ud;break;case 4:n=Sv;break;case 16:n=eu;break;case 536870912:n=Mv;break;default:n=eu}n=$_(n,B_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B_(t,e){if(Wl=-1,jl=0,qe&6)throw Error(re(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var i=tu(t,t===Ft?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xu(t,i);else{e=i;var r=qe;qe|=2;var s=V_();(Ft!==t||Wt!==e)&&(wi=null,Qs=Mt()+500,Hr(t,e));do try{sw();break}catch(a){H_(t,a)}while(!0);$d(),gu.current=s,qe=r,Tt!==null?e=0:(Ft=null,Wt=0,e=Rt)}if(e!==0){if(e===2&&(r=Af(t),r!==0&&(i=r,e=ed(t,r))),e===1)throw n=da,Hr(t,0),tr(t,i),yn(t,Mt()),n;if(e===6)tr(t,i);else{if(r=t.current.alternate,!(i&30)&&!iw(r)&&(e=xu(t,i),e===2&&(s=Af(t),s!==0&&(i=s,e=ed(t,s))),e===1))throw n=da,Hr(t,0),tr(t,i),yn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Ur(t,mn,wi);break;case 3:if(tr(t,i),(i&130023424)===i&&(e=lp+500-Mt(),10<e)){if(tu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uf(Ur.bind(null,t,mn,wi),e);break}Ur(t,mn,wi);break;case 4:if(tr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nw(i/1960))-i,10<i){t.timeoutHandle=Uf(Ur.bind(null,t,mn,wi),i);break}Ur(t,mn,wi);break;case 5:Ur(t,mn,wi);break;default:throw Error(re(329))}}}return yn(t,Mt()),t.callbackNode===n?B_.bind(null,t):null}function ed(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=xu(t,e),t!==2&&(e=mn,mn=n,e!==null&&td(e)),t}function td(t){mn===null?mn=t:mn.push.apply(mn,t)}function iw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~ap,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function og(t){if(qe&6)throw Error(re(327));Gs();var e=tu(t,0);if(!(e&1))return yn(t,Mt()),null;var n=xu(t,e);if(t.tag!==0&&n===2){var i=Af(t);i!==0&&(e=i,n=ed(t,i))}if(n===1)throw n=da,Hr(t,0),tr(t,e),yn(t,Mt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,mn,wi),yn(t,Mt()),null}function up(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Qs=Mt()+500,Sc&&wr())}}function Kr(t){sr!==null&&sr.tag===0&&!(qe&6)&&Gs();var e=qe;qe|=1;var n=Bn.transition,i=rt;try{if(Bn.transition=null,rt=1,t)return t()}finally{rt=i,Bn.transition=n,qe=e,!(qe&6)&&wr()}}function cp(){Tn=Us.current,ht(Us)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NM(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Wd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ou();break;case 3:Ks(),ht(_n),ht(nn),Jd();break;case 5:Qd(i);break;case 4:Ks();break;case 13:ht(pt);break;case 19:ht(pt);break;case 10:Yd(i.type._context);break;case 22:case 23:cp()}n=n.return}if(Ft=t,Tt=t=mr(t.current,null),Wt=Tn=e,Rt=0,da=null,ap=Tc=qr=0,mn=Bo=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function H_(t,e){do{var n=Tt;try{if($d(),Hl.current=mu,pu){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pu=!1}if(Yr=0,Ut=bt=vt=null,ko=!1,ca=0,op.current=null,n===null||n.return===null){Rt=1,da=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=$m(o);if(p!==null){p.flags&=-257,Ym(p,o,a,s,e),p.mode&1&&Xm(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Xm(s,u,e),hp();break e}l=Error(re(426))}}else if(ft&&a.mode&1){var m=$m(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ym(m,o,a,s,e),jd(Zs(l,a));break e}}s=l=Zs(l,a),Rt!==4&&(Rt=2),Bo===null?Bo=[s]:Bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=E_(s,l,e);Bm(s,d);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dr===null||!dr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=T_(s,a,e);Bm(s,S);break e}}s=s.return}while(s!==null)}W_(n)}catch(P){e=P,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function V_(){var t=gu.current;return gu.current=mu,t===null?mu:t}function hp(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ft===null||!(qr&268435455)&&!(Tc&268435455)||tr(Ft,Wt)}function xu(t,e){var n=qe;qe|=2;var i=V_();(Ft!==t||Wt!==e)&&(wi=null,Hr(t,e));do try{rw();break}catch(r){H_(t,r)}while(!0);if($d(),qe=n,gu.current=i,Tt!==null)throw Error(re(261));return Ft=null,Wt=0,Rt}function rw(){for(;Tt!==null;)G_(Tt)}function sw(){for(;Tt!==null&&!PS();)G_(Tt)}function G_(t){var e=X_(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?W_(t):Tt=e,op.current=null}function W_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QM(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=ZM(n,e,Tn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function Ur(t,e,n){var i=rt,r=Bn.transition;try{Bn.transition=null,rt=1,ow(t,e,n,i)}finally{Bn.transition=r,rt=i}return null}function ow(t,e,n,i){do Gs();while(sr!==null);if(qe&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BS(t,s),t===Ft&&(Tt=Ft=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,$_(eu,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var o=rt;rt=1;var a=qe;qe|=4,op.current=null,ew(t,n),k_(n,t),AM(Df),nu=!!Lf,Df=Lf=null,t.current=n,tw(n),LS(),qe=a,rt=o,Bn.transition=s}else t.current=n;if(Ja&&(Ja=!1,sr=t,_u=r),s=t.pendingLanes,s===0&&(dr=null),US(n.stateNode),yn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vu)throw vu=!1,t=Qf,Qf=null,t;return _u&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===Jf?Ho++:(Ho=0,Jf=t):Ho=0,wr(),null}function Gs(){if(sr!==null){var t=Ev(_u),e=Bn.transition,n=rt;try{if(Bn.transition=null,rt=16>t?16:t,sr===null)var i=!1;else{if(t=sr,sr=null,_u=0,qe&6)throw Error(re(331));var r=qe;for(qe|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:zo(8,c,s)}var h=c.child;if(h!==null)h.return=c,_e=h;else for(;_e!==null;){c=_e;var f=c.sibling,p=c.return;if(I_(c),c===u){_e=null;break}if(f!==null){f.return=p,_e=f;break}_e=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var x=t.current;for(_e=x;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=x;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(P){yt(a,a.return,P)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(qe=r,wr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(gc,t)}catch{}i=!0}return i}finally{rt=n,Bn.transition=e}}return!1}function ag(t,e,n){e=Zs(n,e),e=E_(t,e,1),t=fr(t,e,1),e=ln(),t!==null&&(Ta(t,1,e),yn(t,e))}function yt(t,e,n){if(t.tag===3)ag(t,t,n);else for(;e!==null;){if(e.tag===3){ag(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=Zs(n,t),t=T_(e,t,1),e=fr(e,t,1),t=ln(),e!==null&&(Ta(e,1,t),yn(e,t));break}}e=e.return}}function aw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Wt&n)===n&&(Rt===4||Rt===3&&(Wt&130023424)===Wt&&500>Mt()-lp?Hr(t,0):ap|=n),yn(t,e)}function j_(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=ln();t=ki(t,e),t!==null&&(Ta(t,e,n),yn(t,n))}function lw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),j_(t,n)}function uw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),j_(t,n)}var X_;X_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,KM(t,e,n);gn=!!(t.flags&131072)}else gn=!1,ft&&e.flags&1048576&&Kv(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Gl(t,e),t=e.pendingProps;var r=$s(e,nn.current);Vs(e,n),r=tp(null,e,i,t,r,n);var s=np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,au(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kd(e),r.updater=wc,e.stateNode=r,r._reactInternals=e,Hf(e,i,t,n),e=Wf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Gd(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hw(i),t=Yn(i,t),r){case 0:e=Gf(null,e,i,t,n);break e;case 1:e=Zm(null,e,i,t,n);break e;case 11:e=qm(null,e,i,t,n);break e;case 14:e=Km(null,e,i,Yn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Gf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Zm(t,e,i,r,n);case 3:e:{if(R_(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,n_(t,e),fu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(re(423)),e),e=Qm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(re(424)),e),e=Qm(t,e,i,n,r);break e}else for(Cn=hr(e.stateNode.containerInfo.firstChild),Rn=e,ft=!0,Qn=null,n=e_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=zi(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return i_(e),t===null&&kf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Nf(i,r)?o=null:s!==null&&Nf(i,s)&&(e.flags|=32),C_(t,e),on(t,e,o,n),e.child;case 6:return t===null&&kf(e),null;case 13:return P_(t,e,n);case 4:return Zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),qm(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(cu,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!_n.current){e=zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=Hn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Km(t,e,i,r,n);case 15:return A_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Gl(t,e),e.tag=1,xn(i)?(t=!0,au(e)):t=!1,Vs(e,n),w_(e,i,r),Hf(e,i,r,n),Wf(null,e,i,!0,t,n);case 19:return L_(t,e,n);case 22:return b_(t,e,n)}throw Error(re(156,e.tag))};function $_(t,e){return yv(t,e)}function cw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,i){return new cw(t,e,n,i)}function fp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hw(t){if(typeof t=="function")return fp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ld)return 11;if(t===Dd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")fp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Vr(n.children,r,s,e);case Pd:o=8,r|=8;break;case hf:return t=zn(12,n,e,r|2),t.elementType=hf,t.lanes=s,t;case ff:return t=zn(13,n,e,r),t.elementType=ff,t.lanes=s,t;case df:return t=zn(19,n,e,r),t.elementType=df,t.lanes=s,t;case iv:return Ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tv:o=10;break e;case nv:o=9;break e;case Ld:o=11;break e;case Dd:o=14;break e;case Qi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=zn(7,t,i,e),t.lanes=n,t}function Ac(t,e,n,i){return t=zn(22,t,i,e),t.elementType=iv,t.lanes=n,t.stateNode={isHidden:!1},t}function yh(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function Sh(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=th(0),this.expirationTimes=th(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=th(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dp(t,e,n,i,r,s,o,a,l){return t=new fw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(s),t}function dw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Y_(t){if(!t)return vr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(xn(n))return Yv(t,n,e)}return e}function q_(t,e,n,i,r,s,o,a,l){return t=dp(n,i,!0,t,r,s,o,a,l),t.context=Y_(null),n=t.current,i=ln(),r=pr(n),s=Li(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,Ta(t,r,i),yn(t,i),t}function bc(t,e,n,i){var r=e.current,s=ln(),o=pr(r);return n=Y_(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,o),t!==null&&(ti(t,r,o,s),Bl(t,r,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pp(t,e){lg(t,e),(t=t.alternate)&&lg(t,e)}function pw(){return null}var K_=typeof reportError=="function"?reportError:function(t){console.error(t)};function mp(t){this._internalRoot=t}Cc.prototype.render=mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));bc(t,e,null,null)};Cc.prototype.unmount=mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){bc(null,t,null,null)}),e[Oi]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&Rv(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ug(){}function mw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=yu(o);s.call(u)}}var o=q_(e,i,t,0,null,!1,!1,"",ug);return t._reactRootContainer=o,t[Oi]=o.current,sa(t.nodeType===8?t.parentNode:t),Kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=yu(l);a.call(u)}}var l=dp(t,0,!1,null,null,!1,!1,"",ug);return t._reactRootContainer=l,t[Oi]=l.current,sa(t.nodeType===8?t.parentNode:t),Kr(function(){bc(e,l,n,i)}),l}function Pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yu(o);a.call(l)}}bc(e,o,t,r)}else o=mw(n,e,t,r,i);return yu(o)}Tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(Id(e,n|1),yn(e,Mt()),!(qe&6)&&(Qs=Mt()+500,wr()))}break;case 13:Kr(function(){var i=ki(t,1);if(i!==null){var r=ln();ti(i,t,1,r)}}),pp(t,1)}};Fd=function(t){if(t.tag===13){var e=ki(t,134217728);if(e!==null){var n=ln();ti(e,t,134217728,n)}pp(t,134217728)}};Av=function(t){if(t.tag===13){var e=pr(t),n=ki(t,e);if(n!==null){var i=ln();ti(n,t,e,i)}pp(t,e)}};bv=function(){return rt};Cv=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};wf=function(t,e,n){switch(e){case"input":if(gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yc(i);if(!r)throw Error(re(90));sv(i),gf(i,r)}}}break;case"textarea":av(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};pv=up;mv=Kr;var gw={usingClientEntryPoint:!1,Events:[ba,Cs,yc,fv,dv,up]},go={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vw={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_v(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{gc=el.inject(vw),fi=el}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(e))throw Error(re(200));return dw(t,e,null,n)};Ln.createRoot=function(t,e){if(!gp(t))throw Error(re(299));var n=!1,i="",r=K_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dp(t,1,!1,null,null,n,!1,i,r),t[Oi]=e.current,sa(t.nodeType===8?t.parentNode:t),new mp(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=_v(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return Kr(t)};Ln.hydrate=function(t,e,n){if(!Rc(e))throw Error(re(200));return Pc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!gp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=K_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q_(e,null,t,1,n??null,r,!1,s,o),t[Oi]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cc(e)};Ln.render=function(t,e,n){if(!Rc(e))throw Error(re(200));return Pc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(re(40));return t._reactRootContainer?(Kr(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Oi]=null})}),!0):!1};Ln.unstable_batchedUpdates=up;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Rc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Pc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function Z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z_)}catch(t){console.error(t)}}Z_(),Z0.exports=Ln;var _w=Z0.exports,Q_,cg=_w;Q_=cg.createRoot,cg.hydrateRoot;function xw({lon0:t,lat0:e,kx:n,kz:i}){return{lon0:t,lat0:e,kx:n,kz:i,toX:r=>(r-t)*n,toZ:r=>-(r-e)*i,fromX:r=>r/n+t,fromZ:r=>-r/i+e}}function J_(t,e,n){const{ncols:i,nrows:r,west:s,south:o,cellsize:a}=t,l=e instanceof Int16Array?e:new Int16Array(e),u=(g,_)=>l[Math.min(r-1,Math.max(0,g))*i+Math.min(i-1,Math.max(0,_))],c=o+r*a,h=s+i*a,f=(g,_)=>{const m=(g-s)/a-.5,d=(c-_)/a-.5;if(m<0||d<0||m>i-1||d>r-1)return null;const x=Math.min(Math.floor(m),i-2),v=Math.min(Math.floor(d),r-2),S=m-x,P=d-v,R=u(v,x)*(1-S)+u(v,x+1)*S,T=u(v+1,x)*(1-S)+u(v+1,x+1)*S;return R*(1-P)+T*P},p=[n.toX(s+a/2),n.toX(h-a/2),n.toZ(c-a/2),n.toZ(o+a/2)];return{meta:t,heights:l,H:u,sample:f,box:p,north:c,east:h}}function yw(t,e,n=1,i=0,r=null){const{west:s,cellsize:o}=t.meta,a=t.H,[l,u,c,h]=r??[0,0,t.meta.ncols-1,t.meta.nrows-1],f=Math.floor((c-l)/n)+1,p=Math.floor((h-u)/n)+1,g=i?2*(f+p)-4:0,_=f*p+g,m=new Float32Array(_*3),d=new Float32Array(_),x=new Float32Array(_*2),v=new Float32Array(_),S=O=>t.north-(O+.5)*o,{ncols:P,nrows:R}=t.meta,T=o*e.kx,L=o*e.kz;let X=0;for(let O=0;O<p;O++){const k=u+O*n,z=e.toZ(S(k)),J=Math.max(0,k-n),H=Math.min(R-1,k+n);for(let K=0;K<f;K++,X++){const D=l+K*n;m[X*3]=e.toX(s+(D+.5)*o),m[X*3+2]=z,d[X]=a(k,D);const Z=Math.max(0,D-n),Y=Math.min(P-1,D+n);x[X*2]=(a(k,Y)-a(k,Z))/((Y-Z)*T),x[X*2+1]=(a(H,D)-a(J,D))/((H-J)*L)}}const y=new Uint32Array(6*((f-1)*(p-1)+g));let w=0;for(let O=0;O<p-1;O++)for(let k=0;k<f-1;k++){const z=O*f+k,J=z+1,H=z+f,K=H+1;y[w++]=z,y[w++]=H,y[w++]=J,y[w++]=J,y[w++]=H,y[w++]=K}if(i){const O=[];for(let z=0;z<f;z++)O.push(z);for(let z=1;z<p;z++)O.push(z*f+f-1);for(let z=f-2;z>=0;z--)O.push((p-1)*f+z);for(let z=p-2;z>=1;z--)O.push(z*f);const k=f*p;O.forEach((z,J)=>{const H=k+J;m.set(m.subarray(z*3,z*3+3),H*3),d[H]=d[z],x[H*2]=x[z*2],x[H*2+1]=x[z*2+1],v[H]=i});for(let z=0;z<O.length;z++){const J=O[z],H=O[(z+1)%O.length],K=k+z,D=k+(z+1)%O.length;y[w++]=J,y[w++]=H,y[w++]=K,y[w++]=H,y[w++]=D,y[w++]=K}}return{position:m,elev:d,grad:x,drop:v,index:y,n:f,m:p}}function Sw(t,e,n,i=1){const r=Math.max(i,Math.round(n/i)*i),s=[];for(let o=0;o<e-1;o+=r){const a=Math.min(o+r,o+Math.floor((e-1-o)/i)*i);for(let l=0;l<t-1;l+=r){const u=Math.min(l+r,l+Math.floor((t-1-l)/i)*i);u>l&&a>o&&s.push([l,o,u,a])}}return s}function ex(t,e,n,i,r=0,s=null){const o=yw(e,n,i,r,s),a=new t.BufferGeometry;return a.setAttribute("position",new t.BufferAttribute(o.position,3)),a.setAttribute("elev",new t.BufferAttribute(o.elev,1)),a.setAttribute("grad",new t.BufferAttribute(o.grad,2)),a.setAttribute("drop",new t.BufferAttribute(o.drop,1)),a.setIndex(new t.BufferAttribute(o.index,1)),a.computeBoundingBox(),a.boundingBox.min.y=-60,a.boundingBox.max.y=50,a.boundingSphere=a.boundingBox.getBoundingSphere(new t.Sphere),a}const Mw="./pnw/",ww="PYTHONPATH=src .venv/bin/python -m earthnote_data.build_bundle --terrain";class Su extends Error{}async function hg(t,e,n){var s,o;const i=await n(t);if(i.status===404||(o=(s=i.headers)==null?void 0:s.get("content-type"))!=null&&o.includes("html"))throw new Su(`The map data is missing: ${t}. Build it with:`);if(!i.ok)throw new Error(`Could not load ${t} (HTTP ${i.status})`);const r=await i.arrayBuffer();if(e!=null&&r.byteLength!==e)throw new Su(`The map data is incomplete: ${t} has ${r.byteLength} bytes, expected ${e}. Rebuild it with:`);return r}async function Ew(t=Mw,e=fetch){var f,p;const n=await e(`${t}manifest.json`);if(!n.ok||(p=(f=n.headers)==null?void 0:f.get("content-type"))!=null&&p.includes("html"))throw new Su("The map data has not been built yet. Build it with:");const i=await n.json(),r=xw(i.projection),s=i.terrain,o=(g,_)=>hg(`${t}terrain/${g}.bin`,_.ncols*_.nrows*2,e).then(m=>J_(_,m,r)),a={},l=Object.entries({...i.roads,...i.borders}).map(async([g,_])=>{a[g]=new Float32Array(await hg(`${t}${_.file}`,_.segments*24,e))}),[u,c,h]=await Promise.all([o("outer",s.outer),o("overview",s.overview),e(`${t}${i.places.file}`).then(g=>g.json()),...l]);return{base:t,manifest:i,P:r,outer:u,overview:c,lines:a,places:h,waterUrl:`${t}${i.water.overview.file}`}}const Tw="./events/";async function fg(t,e=Tw,n=fetch){var s,o;const i=await n(`${e}${t}/event.json`,{cache:"no-cache"});if(!i.ok||(o=(s=i.headers)==null?void 0:s.get("content-type"))!=null&&o.includes("html"))return null;const r=await i.json();return r.base=`${e}${t}/`,r.t0=Date.parse(r.start),r.runList=Object.fromEntries(Object.entries(r.runs).map(([a,l])=>[a,Object.entries(l).map(([u,c])=>({model:a,init:u,time:vp(u),frames:new Set(c.frames),complete:c.complete})).sort((u,c)=>u.time-c.time)])),r.obsRain=new Set(Object.keys(r.obs.rain).map(Number)),r.obsMet=new Set(r.obs.met),r.obsGust=new Set(r.obs.gust??[]),r.lastObs=Math.max(-1,...r.obsRain),r}const vp=t=>Date.UTC(+t.slice(0,4),+t.slice(4,6)-1,+t.slice(6,8),+t.slice(8,10)),nr=(t,e)=>t.t0+(e+1)*36e5;function Ro(t,e,n,i="rain"){const r={rain:t.obsRain,met:t.obsMet,gust:t.obsGust}[i];if(n.mode==="blend"&&(r!=null&&r.has(e)))return{type:"obs"};const s=t.runList[n.model]??[];if(n.mode==="run"){const o=s.find(a=>a.init===n.init);return o!=null&&o.frames.has(e)?{type:"fc",model:n.model,init:o.init}:null}for(let o=s.length-1;o>=0;o--)if(s[o].frames.has(e))return{type:"fc",model:n.model,init:s[o].init};return null}function $l(t,e,n,i){const r=`${i}/k${String(n).padStart(3,"0")}.png?v=${t.version??t.start}`;return e.type==="obs"?`${t.base}obs/${r}${i==="rain"?`&p=${t.obs.rain[n]??""}`:""}`:`${t.base}fc/${e.model}/${e.init}/${r}`}function tx(t,e,n){if(n==="gust")return t.grids.gust;const i=e.type==="obs"?n==="rain"?t.obs.rainGrid:t.obs.metGrid:t.models[e.model][n==="rain"?"rainGrid":"metGrid"];return t.grids[i]}function Aw(t,e){const n=new Float32Array(e);for(let i=0;i<e;i++){const r=t[i*4];n[i]=r===255?NaN:(r/25)**2}return n}function bw(t,e,n){if(e.cols===n.cols&&e.rows===n.rows)return t;const i=new Float32Array(n.cols*n.rows);for(let r=0;r<n.rows;r++){const s=n.north-(r+.5)*n.cell,o=Math.min(e.rows-1,Math.max(0,(e.north-s)/e.cell-.5)),a=Math.min(Math.floor(o),e.rows-2),l=o-a;for(let u=0;u<n.cols;u++){const c=n.west+(u+.5)*n.cell,h=Math.min(e.cols-1,Math.max(0,(c-e.west)/e.cell-.5)),f=Math.min(Math.floor(h),e.cols-2),p=h-f;let g=0,_=0;const m=(d,x,v)=>{const S=t[d*e.cols+x];!Number.isNaN(S)&&v>0&&(g+=S*v,_+=v)};m(a,f,(1-l)*(1-p)),m(a,f+1,(1-l)*p),m(a+1,f,l*(1-p)),m(a+1,f+1,l*p),i[r*n.cols+u]=_>0?g/_:NaN}}return i}async function Cw(t,e=fetch){var u;const n=await e(t);if(!n.ok)throw new Error(`HTTP ${n.status} for ${t}`);const i=await createImageBitmap(await n.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),s=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(i.width,i.height):Object.assign(document.createElement("canvas"),{width:i.width,height:i.height})).getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});s.drawImage(i,0,0);const{width:o,height:a}=i,l=s.getImageData(0,0,o,a).data;return(u=i.close)==null||u.call(i),{width:o,height:a,data:l}}class dg{constructor(e=600,n=Cw){this.cap=e,this.decode=n,this.map=new Map}get(e){let n=this.map.get(e);if(n)return this.map.delete(e),this.map.set(e,n),n;for(n=this.decode(e).catch(i=>{throw this.map.delete(e),i}),this.map.set(e,n);this.map.size>this.cap;)this.map.delete(this.map.keys().next().value);return n}}class Rw{constructor(e,n){Object.assign(this,{doc:e,cache:n}),this.checkpoints=new Map}async hourly(e,n){const i=Ro(this.doc,e,n,"rain");if(!i)return null;const r=tx(this.doc,i,"rain"),s=await this.cache.get($l(this.doc,i,e,"rain"));return{src:i,mm:bw(Aw(s.data,r.cols*r.rows),r,this.doc.grids.rain)}}async accumulated(e,n){var h;const i=this.doc.grids.rain,r=i.cols*i.rows,s=JSON.stringify(n);let o=this.checkpoints.get(s);o||(o=new Map,this.checkpoints.set(s,o));const a=n.mode==="run"?Math.min(...((h=this.doc.runList[n.model].find(f=>f.init===n.init))==null?void 0:h.frames)??[0]):0;if(e<a)return null;let l=a,u=new Float32Array(r),c=new Uint8Array(r);for(let f=Math.floor(e/12)*12;f>=a;f-=12){const p=o.get(f);if(p&&f<=e){u=p.sum.slice(),c=p.seen.slice(),l=f+1;break}}for(let f=l;f<=e;f++){const p=await this.hourly(f,n);if(p)for(let g=0;g<r;g++){const _=p.mm[g];Number.isNaN(_)||(u[g]+=_,c[g]=1)}f%12===0&&o.set(f,{sum:u.slice(),seen:c.slice()})}for(let f=0;f<r;f++)c[f]||(u[f]=NaN);return{mm:u,first:a}}}const _p=(t,e)=>Object.fromEntries(t.formatToParts(e).map(n=>[n.type,n.value])),Pw=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",month:"short",day:"numeric",hour:"numeric",hour12:!0,timeZoneName:"short"}),nx=new Intl.DateTimeFormat("en-US",{timeZone:"UTC",month:"short",day:"numeric",hour:"2-digit",hourCycle:"h23"}),Mh=t=>{const e=_p(Pw,t);return`${e.weekday} ${e.month} ${e.day} · ${e.hour} ${e.dayPeriod} ${e.timeZoneName}`},Lw=t=>{const e=_p(nx,t);return`${e.month} ${e.day} ${e.hour}:00 UTC`},Mu=t=>{const e=_p(nx,vp(t));return`${e.month} ${e.day} ${e.hour}z`},Dw=["high water","2-year flood","5-year flood","10-year flood","25-year flood","50-year flood"];function Nw(t,e){const n=t.count,i=t.paths;let r=0;const s=(f,p,g)=>{const _=new f(e,r,p);return r+=g,_},o=s(Float32Array,n*6,n*24),a=s(Uint16Array,n,(n+n%2)*2),l=s(Uint8Array,n,Math.ceil(n/4)*4),u=s(Uint32Array,i+1,(i+1)*4),c=s(Uint32Array,i,i*4),h=s(Float32Array,t.vertices*2,t.vertices*8);return{...t,thr:o,name:a,order:l,offsets:u,owner:c,coords:h}}async function Uw(t,e=fetch){const n=`${t.base}rivers/`,i=`?v=${t.version}`,[r,s]=await Promise.all([e(`${n}reaches.json${i}`).then(o=>o.json()),e(`${n}reaches.bin${i}`).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.arrayBuffer()})]);return Nw(r,s)}const wh=t=>t===255?NaN:.05*(10**(t/40)-1);function pg(t,e,n){let i=0;for(let r=0;r<6;r++){const s=e[n*6+r];s>0&&t>=s&&(i=r+1)}return i}const Iw=2;function Fw(t,e,n=!0){var o;const i=t.rivers;if(!i)return null;if(i.obs.includes(e))return{type:"obs",k:e};const r=Math.max(-1,...i.obs),s=t.updated&&t.t0+(e+1)*36e5<=Date.parse(t.updated);if(e<r)return null;if(s&&r>=0&&e-r<=Iw)return{type:"obs",k:r};if(!n)return null;for(const a of["short","medium"]){const l=(o=i.whatif)==null?void 0:o[a];if(l&&e>=l.first&&e<l.first+l.count)return{type:"whatif",kind:a,init:l.init,i:e-l.first}}return null}class Ow{constructor(e,n,i=(...r)=>fetch(...r)){Object.assign(this,{doc:e,n,fetchImpl:i}),this.map=new Map}_get(e){let n=this.map.get(e);return n||(n=this.fetchImpl(e).then(i=>{if(!i.ok)throw new Error(`HTTP ${i.status}`);return i.arrayBuffer()}).catch(i=>{throw this.map.delete(e),i}),this.map.set(e,n),this.map.size>80&&this.map.delete(this.map.keys().next().value)),n}async get(e){const n=`${this.doc.base}rivers/`,i=`?v=${this.doc.version}`;return e.type==="obs"?new Uint8Array(await this._get(`${n}obs/k${String(e.k).padStart(3,"0")}.bin${i}`)):new Uint8Array(await this._get(`${n}whatif/${e.kind}_${e.init}.bin${i}`),e.i*this.n,this.n)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="169",pi={ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ix=0,nd=1,rx=2,xp=1,sx=2,ai=3,Bi=0,un=1,bn=2,Di=0,Gr=1,id=2,rd=3,sd=4,ox=5,ir=100,ax=101,lx=102,ux=103,cx=104,hx=200,fx=201,dx=202,px=203,wu=204,Eu=205,mx=206,gx=207,vx=208,_x=209,xx=210,yx=211,Sx=212,Mx=213,wx=214,Tu=0,Au=1,bu=2,Zr=3,Cu=4,Ru=5,Pu=6,Lu=7,yp=0,Ex=1,Tx=2,Ni=0,Ax=1,bx=2,Cx=3,Rx=4,Px=5,Lx=6,Dx=7,Sp=300,Qr=301,Jr=302,Du=303,Nu=304,Ra=306,Uu=1e3,or=1001,Iu=1002,It=1003,Nx=1004,Po=1005,Jt=1006,Yl=1007,Ri=1008,mi=1009,Mp=1010,wp=1011,Js=1012,Dc=1013,_r=1014,ci=1015,so=1016,Nc=1017,Uc=1018,es=1020,Ep=35902,Tp=1021,Ap=1022,vn=1023,bp=1024,Cp=1025,Wr=1026,ts=1027,Pa=1028,Ic=1029,La=1030,Fc=1031,Oc=1033,Vo=33776,Go=33777,Wo=33778,jo=33779,Fu=35840,Ou=35841,ku=35842,zu=35843,Bu=36196,Hu=37492,Vu=37496,Gu=37808,Wu=37809,ju=37810,Xu=37811,$u=37812,Yu=37813,qu=37814,Ku=37815,Zu=37816,Qu=37817,Ju=37818,ec=37819,tc=37820,nc=37821,Xo=36492,ic=36494,rc=36495,Rp=36283,sc=36284,oc=36285,ac=36286,Ux=3200,Ix=3201,Fx=0,Ox=1,On="",Zn="srgb",Vi="srgb-linear",kc="display-p3",Da="display-p3-linear",pa="linear",at="srgb",ma="rec709",ga="p3",Ir=7680,od=519,kx=512,zx=513,Bx=514,Pp=515,Hx=516,Vx=517,Gx=518,Wx=519,lc=35044,ad=35048,ld="300 es",hi=2e3,va=2001;class Er{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mg=1234567;const $o=Math.PI/180,_a=180/Math.PI;function Ui(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function Lp(t,e){return(t%e+e)%e}function kw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function zw(t,e,n){return t!==e?(n-t)/(e-t):0}function Yo(t,e,n){return(1-n)*t+n*e}function Bw(t,e,n,i){return Yo(t,e,1-Math.exp(-n*i))}function Hw(t,e=1){return e-Math.abs(Lp(t,e*2)-e)}function Vw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Gw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Ww(t,e){return t+Math.floor(Math.random()*(e-t+1))}function jw(t,e){return t+Math.random()*(e-t)}function Xw(t){return t*(.5-Math.random())}function $w(t){t!==void 0&&(mg=t);let e=mg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yw(t){return t*$o}function qw(t){return t*_a}function Kw(t){return(t&t-1)===0&&t!==0}function Zw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Qw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Jw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*h,l*f,a*u);break;case"YZY":t.set(l*f,a*c,l*h,a*u);break;case"ZXZ":t.set(l*h,l*f,a*c,a*u);break;case"XZX":t.set(a*c,l*g,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*g,a*u);break;case"ZYZ":t.set(l*g,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function it(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const eo={DEG2RAD:$o,RAD2DEG:_a,generateUUID:Ui,clamp:Gt,euclideanModulo:Lp,mapLinear:kw,inverseLerp:zw,lerp:Yo,damp:Bw,pingpong:Hw,smoothstep:Vw,smootherstep:Gw,randInt:Ww,randFloat:jw,randFloatSpread:Xw,seededRandom:$w,degToRad:Yw,radToDeg:qw,isPowerOfTwo:Kw,ceilPowerOfTwo:Zw,floorPowerOfTwo:Qw,setQuaternionFromProperEuler:Jw,normalize:it,denormalize:Jn};class Ue{constructor(e=0,n=0){Ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],x=r[1],v=r[4],S=r[7],P=r[2],R=r[5],T=r[8];return s[0]=o*_+a*x+l*P,s[3]=o*m+a*v+l*R,s[6]=o*d+a*S+l*T,s[1]=u*_+c*x+h*P,s[4]=u*m+c*v+h*R,s[7]=u*d+c*S+h*T,s[2]=f*_+p*x+g*P,s[5]=f*m+p*v+g*R,s[8]=f*d+p*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Eh.makeScale(e,n)),this}rotate(e){return this.premultiply(Eh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Eh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eh=new Fe;function jx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Xx(){const t=xa("canvas");return t.style.display="block",t}const gg={};function ql(t){t in gg||(gg[t]=!0,console.warn(t))}function eE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function tE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vg=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_g=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vo={[Vi]:{transfer:pa,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Zn]:{transfer:at,primaries:ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Da]:{transfer:pa,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(_g),fromReference:t=>t.applyMatrix3(vg)},[kc]:{transfer:at,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(_g),fromReference:t=>t.applyMatrix3(vg).convertLinearToSRGB()}},iE=new Set([Vi,Da]),Ze={enabled:!0,_workingColorSpace:Vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!iE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=vo[e].toReference,r=vo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return vo[t].primaries},getTransfer:function(t){return t===On?pa:vo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(vo[e].luminanceCoefficients)}};function Ws(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Th(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class $x{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=xa("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ws(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ws(n[i]/255)*255):n[i]=Ws(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rE=0;class Dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ah(r[o].image)):s.push(Ah(r[o]))}else s=Ah(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ah(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$x.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sE=0;class jt extends Er{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=or,r=or,s=Jt,o=Ri,a=vn,l=mi,u=jt.DEFAULT_ANISOTROPY,c=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Ui(),this.name="",this.source=new Dp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uu:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uu:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Sp;jt.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,n=0,i=0,r=1){He.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(p+1)/2,P=(d+1)/2,R=(c+f)/4,T=(h+_)/4,L=(g+m)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=T/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=L/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(f-c)/x,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yx extends Er{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new He(0,0,e,n),this.scissorTest=!1,this.viewport=new He(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends Yx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zc extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qx extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h!==_||l!==f||u!==p||c!==g){let m=1-a;const d=l*f+u*p+c*g+h*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,d*x);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const S=a*x;if(l=l*m+f*S,u=u*m+p*S,c=c*m+g*S,h=h*m+_*S,m===1-a){const P=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=P,u*=P,c*=P,h*=P}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+c*h+l*p-u*f,e[n+1]=l*g+c*f+u*h-a*p,e[n+2]=u*g+c*p+a*f-l*h,e[n+3]=c*g-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new U,xg=new yr;class Gi{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),nl.subVectors(this.max,_o),us.subVectors(e.a,_o),cs.subVectors(e.b,_o),hs.subVectors(e.c,_o),Xi.subVectors(cs,us),$i.subVectors(hs,cs),br.subVectors(us,hs);let n=[0,-Xi.z,Xi.y,0,-$i.z,$i.y,0,-br.z,br.y,Xi.z,0,-Xi.x,$i.z,0,-$i.x,br.z,0,-br.x,-Xi.y,Xi.x,0,-$i.y,$i.x,0,-br.y,br.x,0];return!Ch(n,us,cs,hs,nl)||(n=[1,0,0,0,1,0,0,0,1],!Ch(n,us,cs,hs,nl))?!1:(il.crossVectors(Xi,$i),n=[il.x,il.y,il.z],Ch(n,us,cs,hs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new U,new U,new U,new U,new U,new U,new U,new U],jn=new U,tl=new Gi,us=new U,cs=new U,hs=new U,Xi=new U,$i=new U,br=new U,_o=new U,nl=new U,il=new U,Cr=new U;function Ch(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Cr.fromArray(t,s);const a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),u=n.dot(Cr),c=i.dot(Cr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const oE=new Gi,xo=new U,Rh=new U;class Tr{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const n=xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(Rh)),this.expandByPoint(xo.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new U,Ph=new U,rl=new U,Yi=new U,Lh=new U,sl=new U,Dh=new U;class Na{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ph.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(Ph);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=Yi.dot(this.direction),l=-Yi.dot(rl),u=Yi.lengthSq(),c=Math.abs(1-o*o);let h,f,p,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ph).addScaledVector(rl,f),p}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){Lh.subVectors(n,e),sl.subVectors(i,e),Dh.crossVectors(Lh,sl);let o=this.direction.dot(Dh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(Yi,sl));if(l<0)return null;const u=a*this.direction.dot(Lh.cross(Yi));if(u<0||l+u>o)return null;const c=-a*Yi.dot(Dh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,i,r,s,o,a,l,u,c,h,f,p,g,_,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,h,f,p,g,_,m)}set(e,n,i,r,s,o,a,l,u,c,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*h,g=a*c,_=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+g*u,n[5]=f-_*u,n[9]=-a*l,n[2]=_-f*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=u*c,_=u*h;n[0]=f+_*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-g,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=u*c,_=u*h;n[0]=f-_*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*c,n[9]=_-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,g=a*c,_=a*h;n[0]=l*c,n[4]=g*u-p,n[8]=f*u+_,n[1]=l*h,n[5]=_*u+f,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=_-f*h,n[8]=g*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+g,n[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=f*h+_,n[5]=o*c,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*c,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aE,e,lE)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),qi.crossVectors(i,wn),qi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),qi.crossVectors(i,wn)),qi.normalize(),ol.crossVectors(wn,qi),r[0]=qi.x,r[4]=ol.x,r[8]=wn.x,r[1]=qi.y,r[5]=ol.y,r[9]=wn.y,r[2]=qi.z,r[6]=ol.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],x=i[3],v=i[7],S=i[11],P=i[15],R=r[0],T=r[4],L=r[8],X=r[12],y=r[1],w=r[5],O=r[9],k=r[13],z=r[2],J=r[6],H=r[10],K=r[14],D=r[3],Z=r[7],Y=r[11],oe=r[15];return s[0]=o*R+a*y+l*z+u*D,s[4]=o*T+a*w+l*J+u*Z,s[8]=o*L+a*O+l*H+u*Y,s[12]=o*X+a*k+l*K+u*oe,s[1]=c*R+h*y+f*z+p*D,s[5]=c*T+h*w+f*J+p*Z,s[9]=c*L+h*O+f*H+p*Y,s[13]=c*X+h*k+f*K+p*oe,s[2]=g*R+_*y+m*z+d*D,s[6]=g*T+_*w+m*J+d*Z,s[10]=g*L+_*O+m*H+d*Y,s[14]=g*X+_*k+m*K+d*oe,s[3]=x*R+v*y+S*z+P*D,s[7]=x*T+v*w+S*J+P*Z,s[11]=x*L+v*O+S*H+P*Y,s[15]=x*X+v*k+S*K+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+n*l*p-n*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*h+n*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],x=h*m*u-_*f*u+_*l*p-a*m*p-h*l*d+a*f*d,v=g*f*u-c*m*u-g*l*p+o*m*p+c*l*d-o*f*d,S=c*_*u-g*h*u+g*a*p-o*_*p-c*a*d+o*h*d,P=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,R=n*x+i*v+r*S+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=x*T,e[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*T,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*T,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*m*s-g*f*s+g*r*p-n*m*p-c*r*d+n*f*d)*T,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*d-n*l*d)*T,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(g*h*s-c*_*s-g*i*p+n*_*p+c*i*d-n*h*d)*T,e[10]=(o*_*s-g*a*s+g*i*u-n*_*u-o*i*d+n*a*d)*T,e[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*p-n*a*p)*T,e[12]=P*T,e[13]=(c*_*r-g*h*r+g*i*f-n*_*f-c*i*m+n*h*m)*T,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,g=s*h,_=o*c,m=o*h,d=a*h,x=l*u,v=l*c,S=l*h,P=i.x,R=i.y,T=i.z;return r[0]=(1-(_+d))*P,r[1]=(p+S)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(f+d))*R,r[6]=(m+x)*R,r[7]=0,r[8]=(g+v)*T,r[9]=(m-x)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),a=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const u=1/s,c=1/o,h=1/a;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,n.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===hi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===va)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(o-s),f=(n+e)*u,p=(i+r)*c;let g,_;if(a===hi)g=(o+s)*h,_=-2*h;else if(a===va)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const fs=new U,Xn=new dt,aE=new U(0,0,0),lE=new U(1,1,1),qi=new U,ol=new U,wn=new U,yg=new dt,Sg=new yr;class gi{constructor(e=0,n=0,i=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class Np{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uE=0;const Mg=new U,ds=new yr,yi=new dt,al=new U,yo=new U,cE=new U,hE=new yr,wg=new U(1,0,0),Eg=new U(0,1,0),Tg=new U(0,0,1),Ag={type:"added"},fE={type:"removed"},ps={type:"childadded",child:null},Nh={type:"childremoved",child:null};class tn extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new U,n=new gi,i=new yr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Fe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,n){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?al.copy(e):al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(yo,al,this.up):yi.lookAt(al,yo,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(yi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fE),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,cE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,hE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new U(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new U,Si=new U,Uh=new U,Mi=new U,ms=new U,gs=new U,bg=new U,Ih=new U,Fh=new U,Oh=new U,kh=new He,zh=new He,Bh=new He;class kn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Si.subVectors(i,n),Uh.subVectors(e,n);const o=$n.dot($n),a=$n.dot(Si),l=$n.dot(Uh),u=Si.dot(Si),c=Si.dot(Uh),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return kh.setScalar(0),zh.setScalar(0),Bh.setScalar(0),kh.fromBufferAttribute(e,n),zh.fromBufferAttribute(e,i),Bh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(kh,s.x),o.addScaledVector(zh,s.y),o.addScaledVector(Bh,s.z),o}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Si.subVectors(e,n),$n.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ms.subVectors(r,i),gs.subVectors(s,i),Ih.subVectors(e,i);const l=ms.dot(Ih),u=gs.dot(Ih);if(l<=0&&u<=0)return n.copy(i);Fh.subVectors(e,r);const c=ms.dot(Fh),h=gs.dot(Fh);if(c>=0&&h<=c)return n.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ms,o);Oh.subVectors(e,s);const p=ms.dot(Oh),g=gs.dot(Oh);if(g>=0&&p<=g)return n.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(gs,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return bg.subVectors(s,r),a=(h-c)/(h-c+(p-g)),n.copy(r).addScaledVector(bg,a);const d=1/(m+_+f);return o=_*d,a=f*d,n.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Hh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Lp(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Hh(o,s,e+1/3),this.g=Hh(o,s,e),this.b=Hh(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=Kx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=Th(e.r),this.g=Th(e.g),this.b=Th(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Ze.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Gt(Zt.r*255,0,255))*65536+Math.round(Gt(Zt.g*255,0,255))*256+Math.round(Gt(Zt.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Zn){Ze.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(ll);const i=Yo(Ki.h,ll.h,n),r=Yo(Ki.s,ll.s,n),s=Yo(Ki.l,ll.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Oe;Oe.NAMES=Kx;let dE=0;class ss extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Gr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wu,this.blendDst=Eu,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wu&&(i.blendSrc=this.blendSrc),this.blendDst!==Eu&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==od&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Up extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new U,ul=new Ue;class Ct{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=lc,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jn(n,this.array)),n}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jn(n,this.array)),n}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jn(n,this.array)),n}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}}class Ip extends Ct{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Fp extends Ct{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gt extends Ct{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pE=0;const Un=new dt,Vh=new tn,vs=new U,En=new Gi,So=new Gi,Nt=new U;class wt extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jx(e)?Fp:Ip)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(En.min,So.min),En.expandByPoint(Nt),Nt.addVectors(En.max,So.max),En.expandByPoint(Nt)):(En.expandByPoint(So.min),En.expandByPoint(So.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Nt.fromBufferAttribute(a,u),l&&(vs.fromBufferAttribute(e,u),Nt.add(vs)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new U,l[L]=new U;const u=new U,c=new U,h=new U,f=new Ue,p=new Ue,g=new Ue,_=new U,m=new U;function d(L,X,y){u.fromBufferAttribute(i,L),c.fromBufferAttribute(i,X),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,y),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(w),a[L].add(_),a[X].add(_),a[y].add(_),l[L].add(m),l[X].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,X=x.length;L<X;++L){const y=x[L],w=y.start,O=y.count;for(let k=w,z=w+O;k<z;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new U,S=new U,P=new U,R=new U;function T(L){P.fromBufferAttribute(r,L),R.copy(P);const X=a[L];v.copy(X),v.sub(P.multiplyScalar(P.dot(X))).normalize(),S.crossVectors(R,X);const w=S.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,w)}for(let L=0,X=x.length;L<X;++L){const y=x[L],w=y.start,O=y.count;for(let k=w,z=w+O;k<z;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ct(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,c=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new Ct(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cg=new dt,Rr=new Na,cl=new Tr,Rg=new U,hl=new U,fl=new U,dl=new U,Gh=new U,pl=new U,Pg=new U,ml=new U;class en extends tn{constructor(e=new wt,n=new Up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Gh.fromBufferAttribute(h,e),o?pl.addScaledVector(Gh,c):pl.addScaledVector(Gh.sub(n),c))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(cl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(cl,Rg)===null||Rr.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Cg.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Cg),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,P=v;S<P;S+=3){const R=a.getX(S),T=a.getX(S+1),L=a.getX(S+2);r=gl(this,d,e,i,u,c,h,R,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=gl(this,o,e,i,u,c,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,P=v;S<P;S+=3){const R=S,T=S+1,L=S+2;r=gl(this,d,e,i,u,c,h,R,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=m,v=m+1,S=m+2;r=gl(this,o,e,i,u,c,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mE(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Bi,a),l===null)return null;ml.copy(a),ml.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ml);return u<n.near||u>n.far?null:{distance:u,point:ml.clone(),object:t}}function gl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,hl),t.getVertexPosition(l,fl),t.getVertexPosition(u,dl);const c=mE(t,e,n,i,hl,fl,dl,Pg);if(c){const h=new U;kn.getBarycoord(Pg,hl,fl,dl,h),r&&(c.uv=kn.getInterpolatedAttribute(r,a,l,u,h,new Ue)),s&&(c.uv1=kn.getInterpolatedAttribute(s,a,l,u,h,new Ue)),o&&(c.normal=kn.getInterpolatedAttribute(o,a,l,u,h,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new U,materialIndex:0};kn.getNormal(hl,fl,dl,f.normal),c.face=f,c.barycoord=h}return c}class oo extends wt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2));function g(_,m,d,x,v,S,P,R,T,L,X){const y=S/T,w=P/L,O=S/2,k=P/2,z=R/2,J=T+1,H=L+1;let K=0,D=0;const Z=new U;for(let Y=0;Y<H;Y++){const oe=Y*w-k;for(let xe=0;xe<J;xe++){const ze=xe*y-O;Z[_]=ze*x,Z[m]=oe*v,Z[d]=z,u.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[d]=R>0?1:-1,c.push(Z.x,Z.y,Z.z),h.push(xe/T),h.push(1-Y/L),K+=1}}for(let Y=0;Y<L;Y++)for(let oe=0;oe<T;oe++){const xe=f+oe+J*Y,ze=f+oe+J*(Y+1),$=f+(oe+1)+J*(Y+1),q=f+(oe+1)+J*Y;l.push(xe,ze,q),l.push(ze,$,q),D+=6}a.addGroup(p,D,X),p+=D,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=to(t[n]);for(const r in i)e[r]=i[r]}return e}function gE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Bc={clone:to,merge:sn};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=gE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Op extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new U,Lg=new Ue,Dg=new Ue;class An extends Op{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,Lg,Dg),n.subVectors(Dg,Lg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($o*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,xs=1;class Qx extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(_s,xs,e,n);r.layers=this.layers,this.add(r);const s=new An(_s,xs,e,n);s.layers=this.layers,this.add(s);const o=new An(_s,xs,e,n);o.layers=this.layers,this.add(o);const a=new An(_s,xs,e,n);a.layers=this.layers,this.add(a);const l=new An(_s,xs,e,n);l.layers=this.layers,this.add(l);const u=new An(_s,xs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kp extends jt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Qr,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jx extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oo(5,5,5),s=new $t({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Di});s.uniforms.tEquirect.value=n;const o=new en(r,s),a=n.minFilter;return n.minFilter===Ri&&(n.minFilter=Jt),new Qx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Wh=new U,xE=new U,yE=new Fe;class Ti{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wh.subVectors(i,n).cross(xE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yE.getNormalMatrix(e),r=this.coplanarPoint(Wh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Tr,vl=new U;class zp{constructor(e=new Ti,n=new Ti,i=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-p,S-d).normalize(),i[1].setComponents(l+s,f+u,m+p,S+d).normalize(),i[2].setComponents(l+o,f+c,m+g,S+x).normalize(),i[3].setComponents(l-o,f-c,m-g,S-x).normalize(),i[4].setComponents(l-a,f-h,m-_,S-v).normalize(),n===hi)i[5].setComponents(l+a,f+h,m+_,S+v).normalize();else if(n===va)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vl.x=r.normal.x>0?e.max.x:e.min.x,vl.y=r.normal.y>0?e.max.y:e.min.y,vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ey(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function SE(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Ua extends wt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=n/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const x=d*f-o;for(let v=0;v<u;v++){const S=v*h-s;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+u*d,S=x+u*(d+1),P=x+1+u*(d+1),R=x+1+u*d;p.push(v,S,R),p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var ME=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wE=`#ifdef USE_ALPHAHASH
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
#endif`,EE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CE=`#ifdef USE_AOMAP
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
#endif`,RE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PE=`#ifdef USE_BATCHING
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
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IE=`#ifdef USE_IRIDESCENCE
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
#endif`,FE=`#ifdef USE_BUMPMAP
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
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jE=`#define PI 3.141592653589793
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
} // validated`,XE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$E=`vec3 transformedNormal = objectNormal;
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
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QE="gl_FragColor = linearToOutputTexel( gl_FragColor );",JE=`
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
}`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u1=`#ifdef USE_GRADIENTMAP
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
}`,c1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d1=`uniform bool receiveShadow;
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
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x1=`PhysicalMaterial material;
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
#endif`,y1=`struct PhysicalMaterial {
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
}`,S1=`
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
#endif`,M1=`#if defined( RE_IndirectDiffuse )
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
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L1=`#if defined( USE_POINTS_UV )
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
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
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
#endif`,k1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W1=`#ifdef USE_NORMALMAP
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
#endif`,j1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oT=`float getShadowMask() {
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
}`,aT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
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
#endif`,uT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cT=`#ifdef USE_SKINNING
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
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mT=`#ifdef USE_TRANSMISSION
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
#endif`,gT=`#ifdef USE_TRANSMISSION
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ST=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`#include <common>
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
}`,CT=`#if DEPTH_PACKING == 3200
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
}`,RT=`#define DISTANCE
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
}`,PT=`#define DISTANCE
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`uniform float scale;
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
}`,UT=`uniform vec3 diffuse;
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
}`,IT=`#include <common>
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
}`,FT=`uniform vec3 diffuse;
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
}`,OT=`#define LAMBERT
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
}`,kT=`#define LAMBERT
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
}`,zT=`#define MATCAP
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
}`,BT=`#define MATCAP
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
}`,HT=`#define NORMAL
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
}`,VT=`#define NORMAL
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
}`,GT=`#define PHONG
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
}`,WT=`#define PHONG
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
}`,jT=`#define STANDARD
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
}`,XT=`#define STANDARD
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
}`,$T=`#define TOON
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
}`,YT=`#define TOON
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
}`,qT=`uniform float size;
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
}`,KT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,QT=`uniform vec3 color;
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
}`,JT=`uniform float rotation;
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
}`,eA=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:ME,alphahash_pars_fragment:wE,alphamap_fragment:EE,alphamap_pars_fragment:TE,alphatest_fragment:AE,alphatest_pars_fragment:bE,aomap_fragment:CE,aomap_pars_fragment:RE,batching_pars_vertex:PE,batching_vertex:LE,begin_vertex:DE,beginnormal_vertex:NE,bsdfs:UE,iridescence_fragment:IE,bumpmap_pars_fragment:FE,clipping_planes_fragment:OE,clipping_planes_pars_fragment:kE,clipping_planes_pars_vertex:zE,clipping_planes_vertex:BE,color_fragment:HE,color_pars_fragment:VE,color_pars_vertex:GE,color_vertex:WE,common:jE,cube_uv_reflection_fragment:XE,defaultnormal_vertex:$E,displacementmap_pars_vertex:YE,displacementmap_vertex:qE,emissivemap_fragment:KE,emissivemap_pars_fragment:ZE,colorspace_fragment:QE,colorspace_pars_fragment:JE,envmap_fragment:e1,envmap_common_pars_fragment:t1,envmap_pars_fragment:n1,envmap_pars_vertex:i1,envmap_physical_pars_fragment:p1,envmap_vertex:r1,fog_vertex:s1,fog_pars_vertex:o1,fog_fragment:a1,fog_pars_fragment:l1,gradientmap_pars_fragment:u1,lightmap_pars_fragment:c1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:f1,lights_pars_begin:d1,lights_toon_fragment:m1,lights_toon_pars_fragment:g1,lights_phong_fragment:v1,lights_phong_pars_fragment:_1,lights_physical_fragment:x1,lights_physical_pars_fragment:y1,lights_fragment_begin:S1,lights_fragment_maps:M1,lights_fragment_end:w1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:T1,logdepthbuf_pars_vertex:A1,logdepthbuf_vertex:b1,map_fragment:C1,map_pars_fragment:R1,map_particle_fragment:P1,map_particle_pars_fragment:L1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:N1,morphinstance_vertex:U1,morphcolor_vertex:I1,morphnormal_vertex:F1,morphtarget_pars_vertex:O1,morphtarget_vertex:k1,normal_fragment_begin:z1,normal_fragment_maps:B1,normal_pars_fragment:H1,normal_pars_vertex:V1,normal_vertex:G1,normalmap_pars_fragment:W1,clearcoat_normal_fragment_begin:j1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:Y1,opaque_fragment:q1,packing:K1,premultiplied_alpha_fragment:Z1,project_vertex:Q1,dithering_fragment:J1,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:rT,shadowmap_vertex:sT,shadowmask_pars_fragment:oT,skinbase_vertex:aT,skinning_pars_vertex:lT,skinning_vertex:uT,skinnormal_vertex:cT,specularmap_fragment:hT,specularmap_pars_fragment:fT,tonemapping_fragment:dT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:gT,uv_pars_fragment:vT,uv_pars_vertex:_T,uv_vertex:xT,worldpos_vertex:yT,background_vert:ST,background_frag:MT,backgroundCube_vert:wT,backgroundCube_frag:ET,cube_vert:TT,cube_frag:AT,depth_vert:bT,depth_frag:CT,distanceRGBA_vert:RT,distanceRGBA_frag:PT,equirect_vert:LT,equirect_frag:DT,linedashed_vert:NT,linedashed_frag:UT,meshbasic_vert:IT,meshbasic_frag:FT,meshlambert_vert:OT,meshlambert_frag:kT,meshmatcap_vert:zT,meshmatcap_frag:BT,meshnormal_vert:HT,meshnormal_frag:VT,meshphong_vert:GT,meshphong_frag:WT,meshphysical_vert:jT,meshphysical_frag:XT,meshtoon_vert:$T,meshtoon_frag:YT,points_vert:qT,points_frag:KT,shadow_vert:ZT,shadow_frag:QT,sprite_vert:JT,sprite_frag:eA},fe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},an={basic:{uniforms:sn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:sn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:sn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:sn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:sn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:sn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:sn([fe.points,fe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:sn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:sn([fe.common,fe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:sn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:sn([fe.sprite,fe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:sn([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:sn([fe.lights,fe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};an.physical={uniforms:sn([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const _l={r:0,b:0,g:0},Lr=new gi,tA=new dt;function nA(t,e,n,i,r,s,o){const a=new Oe(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?d(a,l):S&&S.isColor&&(d(S,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Ra)?(c===void 0&&(c=new en(new oo(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:to(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Lr.copy(v.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tA.makeRotationFromEuler(Lr)),c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,(h!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new en(new Ua(2,2),new $t({name:"BackgroundMaterial",uniforms:to(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,v){x.getRGB(_l,Zx(t)),i.buffers.color.setClear(_l.r,_l.g,_l.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:_,addToRenderList:m}}function iA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,w,O,k,z){let J=!1;const H=h(k,O,w);s!==H&&(s=H,u(s.object)),J=p(y,k,O,z),J&&g(y,k,O,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(y,w,O,k),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function c(y){return t.deleteVertexArray(y)}function h(y,w,O){const k=O.wireframe===!0;let z=i[y.id];z===void 0&&(z={},i[y.id]=z);let J=z[w.id];J===void 0&&(J={},z[w.id]=J);let H=J[k];return H===void 0&&(H=f(l()),J[k]=H),H}function f(y){const w=[],O=[],k=[];for(let z=0;z<n;z++)w[z]=0,O[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,w,O,k){const z=s.attributes,J=w.attributes;let H=0;const K=O.getAttributes();for(const D in K)if(K[D].location>=0){const Y=z[D];let oe=J[D];if(oe===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function g(y,w,O,k){const z={},J=w.attributes;let H=0;const K=O.getAttributes();for(const D in K)if(K[D].location>=0){let Y=J[D];Y===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),z[D]=oe,H++}s.attributes=z,s.attributesNum=H,s.index=k}function _(){const y=s.newAttributes;for(let w=0,O=y.length;w<O;w++)y[w]=0}function m(y){d(y,0)}function d(y,w){const O=s.newAttributes,k=s.enabledAttributes,z=s.attributeDivisors;O[y]=1,k[y]===0&&(t.enableVertexAttribArray(y),k[y]=1),z[y]!==w&&(t.vertexAttribDivisor(y,w),z[y]=w)}function x(){const y=s.newAttributes,w=s.enabledAttributes;for(let O=0,k=w.length;O<k;O++)w[O]!==y[O]&&(t.disableVertexAttribArray(O),w[O]=0)}function v(y,w,O,k,z,J,H){H===!0?t.vertexAttribIPointer(y,w,O,z,J):t.vertexAttribPointer(y,w,O,k,z,J)}function S(y,w,O,k){_();const z=k.attributes,J=O.getAttributes(),H=w.defaultAttributeValues;for(const K in J){const D=J[K];if(D.location>=0){let Z=z[K];if(Z===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const Y=Z.normalized,oe=Z.itemSize,xe=e.get(Z);if(xe===void 0)continue;const ze=xe.buffer,$=xe.type,q=xe.bytesPerElement,le=$===t.INT||$===t.UNSIGNED_INT||Z.gpuType===Dc;if(Z.isInterleavedBufferAttribute){const ae=Z.data,Ee=ae.stride,Ae=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let Be=0;Be<D.locationSize;Be++)d(D.location+Be,ae.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Be=0;Be<D.locationSize;Be++)m(D.location+Be);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Be=0;Be<D.locationSize;Be++)v(D.location+Be,oe/D.locationSize,$,Y,Ee*q,(Ae+oe/D.locationSize*Be)*q,le)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<D.locationSize;ae++)d(D.location+ae,Z.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<D.locationSize;ae++)m(D.location+ae);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ae=0;ae<D.locationSize;ae++)v(D.location+ae,oe/D.locationSize,$,Y,oe*q,oe/D.locationSize*ae*q,le)}}else if(H!==void 0){const Y=H[K];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(D.location,Y);break;case 3:t.vertexAttrib3fv(D.location,Y);break;case 4:t.vertexAttrib4fv(D.location,Y);break;default:t.vertexAttrib1fv(D.location,Y)}}}}x()}function P(){L();for(const y in i){const w=i[y];for(const O in w){const k=w[O];for(const z in k)c(k[z].object),delete k[z];delete w[O]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const O in w){const k=w[O];for(const z in k)c(k[z].object),delete k[z];delete w[O]}delete i[y.id]}function T(y){for(const w in i){const O=i[w];if(O[y.id]===void 0)continue;const k=O[y.id];for(const z in k)c(k[z].object),delete k[z];delete O[y.id]}}function L(){X(),o=!0,s!==r&&(s=r,u(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function rA(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,h){h!==0&&(t.drawArraysInstanced(i,u,c,h),n.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];n.update(p,i,1)}function l(u,c,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_];for(let _=0;_<f.length;_++)n.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==vn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===so&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==mi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ci&&!L)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:R}}function oA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ti,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,v=x*4;let S=d.clippingState||null;l.value=S,S=c(g,f,v,p);for(let P=0;P!==v;++P)S[P]=n[P];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function aA(t){let e=new WeakMap;function n(o,a){return a===Du?o.mapping=Qr:a===Nu&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Du||a===Nu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Jx(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ty extends Op{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Ng=[.125,.215,.35,.446,.526,.582],Or=20,jh=new ty,Ug=new Oe;let Xh=null,$h=0,Yh=0,qh=!1;const Fr=(1+Math.sqrt(5))/2,ys=1/Fr,Ig=[new U(-Fr,ys,0),new U(Fr,ys,0),new U(-ys,0,Fr),new U(ys,0,Fr),new U(0,Fr,-ys),new U(0,Fr,ys),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Xh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,$h,Yh),this._renderer.xr.enabled=qh,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:so,format:vn,colorSpace:Vi,depthBuffer:!1},r=Fg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lA(s)),this._blurMaterial=uA(s,e,n)}return r}_compileMaterial(e){const n=new en(this._lodPlanes[0],e);this._renderer.compile(n,jh)}_sceneToCubeUV(e,n,i,r){const a=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Ug),c.toneMapping=Ni,c.autoClear=!1;const p=new Up({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new en(new oo,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ug),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;xl(r,x*v,d>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,jh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ig[(r-s-1)%Ig.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new en(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Or;m>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const d=[];let x=0;for(let T=0;T<Or;++T){const L=T/_,X=Math.exp(-L*L/2);d.push(X),T===0?x+=X:T<m&&(x+=2*X)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-Is?r-v+Is:0),R=4*(this._cubeSize-S);xl(n,P,R,3*S,2*S),l.setRenderTarget(n),l.render(h,jh)}}function lA(t){const e=[],n=[],i=[];let r=t;const s=t-Is+1+Ng.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Is?l=Ng[o-t+Is-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,L=R>2?0:-1,X=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];x.set(X,_*g*R),v.set(f,m*g*R);const y=[R,R,R,R,R,R];S.set(y,d*g*R)}const P=new wt;P.setAttribute("position",new Ct(x,_)),P.setAttribute("uv",new Ct(v,m)),P.setAttribute("faceIndex",new Ct(S,d)),e.push(P),r>Is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fg(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uA(t,e,n){const i=new Float32Array(Or),r=new U(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Og(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function kg(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Bp(){return`

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
	`}function cA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Du||l===Nu,c=l===Qr||l===Jr;if(u||c){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new ud(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new ud(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ql("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fA(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const P=x[v+0],R=x[v+1],T=x[v+2];f.push(P,R,R,T,T,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const P=v+0,R=v+1,T=v+2;f.push(P,R,R,T,T,P)}}else return;const m=new(jx(f)?Fp:Ip)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function dA(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function u(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x];for(let x=0;x<_.length;x++)n.update(d,i,_[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function pA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mA(t,e,n){const i=new WeakMap,r=new He;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*R*4*h),L=new zc(T,P,R,h);L.type=ci,L.needsUpdate=!0;const X=S*4;for(let w=0;w<h;w++){const O=d[w],k=x[w],z=v[w],J=P*R*4*w;for(let H=0;H<O.count;H++){const K=H*X;g===!0&&(r.fromBufferAttribute(O,H),T[J+K+0]=r.x,T[J+K+1]=r.y,T[J+K+2]=r.z,T[J+K+3]=0),_===!0&&(r.fromBufferAttribute(k,H),T[J+K+4]=r.x,T[J+K+5]=r.y,T[J+K+6]=r.z,T[J+K+7]=0),m===!0&&(r.fromBufferAttribute(z,H),T[J+K+8]=r.x,T[J+K+9]=r.y,T[J+K+10]=r.z,T[J+K+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new Ue(P,R)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function gA(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Hp extends jt{constructor(e,n,i,r,s,o,a,l,u,c=Wr){if(c!==Wr&&c!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Wr&&(i=_r),i===void 0&&c===ts&&(i=es),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ny=new jt,zg=new Hp(1,1),iy=new zc,ry=new qx,sy=new kp,Bg=[],Hg=[],Vg=new Float32Array(16),Gg=new Float32Array(9),Wg=new Float32Array(4);function ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bg[r];if(s===void 0&&(s=new Float32Array(r),Bg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hc(t,e){let n=Hg[e];n===void 0&&(n=new Int32Array(e),Hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function SA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Wg.set(i),t.uniformMatrix2fv(this.addr,!1,Wg),Lt(n,i)}}function MA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Gg.set(i),t.uniformMatrix3fv(this.addr,!1,Gg),Lt(n,i)}}function wA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Vg.set(i),t.uniformMatrix4fv(this.addr,!1,Vg),Lt(n,i)}}function EA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function bA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function CA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function PA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function LA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function DA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(zg.compareFunction=Pp,s=zg):s=ny,n.setTexture2D(e||s,r)}function NA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ry,r)}function UA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sy,r)}function IA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||iy,r)}function FA(t){switch(t){case 5126:return vA;case 35664:return _A;case 35665:return xA;case 35666:return yA;case 35674:return SA;case 35675:return MA;case 35676:return wA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return bA;case 5125:return CA;case 36294:return RA;case 36295:return PA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return IA}}function OA(t,e){t.uniform1fv(this.addr,e)}function kA(t,e){const n=ao(e,this.size,2);t.uniform2fv(this.addr,n)}function zA(t,e){const n=ao(e,this.size,3);t.uniform3fv(this.addr,n)}function BA(t,e){const n=ao(e,this.size,4);t.uniform4fv(this.addr,n)}function HA(t,e){const n=ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function VA(t,e){const n=ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GA(t,e){const n=ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WA(t,e){t.uniform1iv(this.addr,e)}function jA(t,e){t.uniform2iv(this.addr,e)}function XA(t,e){t.uniform3iv(this.addr,e)}function $A(t,e){t.uniform4iv(this.addr,e)}function YA(t,e){t.uniform1uiv(this.addr,e)}function qA(t,e){t.uniform2uiv(this.addr,e)}function KA(t,e){t.uniform3uiv(this.addr,e)}function ZA(t,e){t.uniform4uiv(this.addr,e)}function QA(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ny,s[o])}function JA(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ry,s[o])}function e2(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||sy,s[o])}function t2(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||iy,s[o])}function n2(t){switch(t){case 5126:return OA;case 35664:return kA;case 35665:return zA;case 35666:return BA;case 35674:return HA;case 35675:return VA;case 35676:return GA;case 5124:case 35670:return WA;case 35667:case 35671:return jA;case 35668:case 35672:return XA;case 35669:case 35673:return $A;case 5125:return YA;case 36294:return qA;case 36295:return KA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return t2}}class i2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=FA(n.type)}}class r2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=n2(n.type)}}class s2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function jg(t,e){t.seq.push(e),t.map[e.id]=e}function o2(t,e,n){const i=t.name,r=i.length;for(Kh.lastIndex=0;;){const s=Kh.exec(i),o=Kh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){jg(n,u===void 0?new i2(a,t,e):new r2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new s2(a),jg(n,h)),n=h}}}class Kl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);o2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const a2=37297;let l2=0;function u2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function c2(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===ga&&n===ma?i="LinearDisplayP3ToLinearSRGB":e===ma&&n===ga&&(i="LinearSRGBToLinearDisplayP3"),t){case Vi:case Da:return[i,"LinearTransferOETF"];case Zn:case kc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function $g(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+u2(t.getShaderSource(e),o)}else return r}function h2(t,e){const n=c2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function f2(t,e){let n;switch(e){case Ax:n="Linear";break;case bx:n="Reinhard";break;case Cx:n="Cineon";break;case Rx:n="ACESFilmic";break;case Lx:n="AgX";break;case Dx:n="Neutral";break;case Px:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new U;function d2(){Ze.getLuminanceCoefficients(yl);const t=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function m2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function g2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Lo(t){return t!==""}function Yg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v2=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(t){return t.replace(v2,x2)}const _2=new Map;function x2(t,e){let n=Ie[e];if(n===void 0){const i=_2.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cd(n)}const y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(t){return t.replace(y2,S2)}function S2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function M2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function w2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function T2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yp:e="ENVMAP_BLENDING_MULTIPLY";break;case Ex:e="ENVMAP_BLENDING_MIX";break;case Tx:e="ENVMAP_BLENDING_ADD";break}return e}function A2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function b2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=M2(n),u=w2(n),c=E2(n),h=T2(n),f=A2(n),p=p2(n),g=m2(s),_=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Lo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Lo).join(`
`),d.length>0&&(d+=`
`)):(m=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),d=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Ni?f2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,h2("linearToOutputTexel",n.outputColorSpace),d2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),o=cd(o),o=Yg(o,n),o=qg(o,n),a=cd(a),a=Yg(a,n),a=qg(a,n),o=Kg(o),a=Kg(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+m+o,S=x+d+a,P=Xg(r,r.VERTEX_SHADER,v),R=Xg(r,r.FRAGMENT_SHADER,S);r.attachShader(_,P),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(w){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(P).trim(),z=r.getShaderInfoLog(R).trim();let J=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,P,R);else{const K=$g(r,P,"vertex"),D=$g(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+K+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||z==="")&&(H=!1);H&&(w.diagnostics={runnable:J,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:d}})}r.deleteShader(P),r.deleteShader(R),L=new Kl(r,_),X=g2(r,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let X;this.getAttributes=function(){return X===void 0&&T(this),X};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,a2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=l2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let C2=0;class R2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new P2(e),n.set(e,i)),i}}class P2{constructor(e){this.id=C2++,this.code=e,this.usedTimes=0}}function L2(t,e,n,i,r,s,o){const a=new Np,l=new R2,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function d(y,w,O,k,z){const J=k.fog,H=z.geometry,K=y.isMeshStandardMaterial?k.environment:null,D=(y.isMeshStandardMaterial?n:e).get(y.envMap||K),Z=D&&D.mapping===Ra?D.image.height:null,Y=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xe=oe!==void 0?oe.length:0;let ze=0;H.morphAttributes.position!==void 0&&(ze=1),H.morphAttributes.normal!==void 0&&(ze=2),H.morphAttributes.color!==void 0&&(ze=3);let $,q,le,ae;if(Y){const fn=an[Y];$=fn.vertexShader,q=fn.fragmentShader}else $=y.vertexShader,q=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const Ee=t.getRenderTarget(),Ae=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,Qe=!!y.map,Ve=!!y.matcap,N=!!D,Dt=!!y.aoMap,Ge=!!y.lightMap,ke=!!y.bumpMap,Pe=!!y.normalMap,Ye=!!y.displacementMap,Ce=!!y.emissiveMap,C=!!y.metalnessMap,M=!!y.roughnessMap,V=y.anisotropy>0,te=y.clearcoat>0,ne=y.dispersion>0,ee=y.iridescence>0,Me=y.sheen>0,he=y.transmission>0,me=V&&!!y.anisotropyMap,We=te&&!!y.clearcoatMap,se=te&&!!y.clearcoatNormalMap,ge=te&&!!y.clearcoatRoughnessMap,be=ee&&!!y.iridescenceMap,Re=ee&&!!y.iridescenceThicknessMap,ve=Me&&!!y.sheenColorMap,Xe=Me&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,tt=!!y.specularColorMap,A=!!y.specularIntensityMap,j=he&&!!y.transmissionMap,B=he&&!!y.thicknessMap,Q=!!y.gradientMap,ce=!!y.alphaMap,de=y.alphaTest>0,$e=!!y.alphaHash,ot=!!y.extensions;let Ot=Ni;y.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ot=t.toneMapping);const Ke={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:q,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Vi,alphaToCoverage:!!y.alphaToCoverage,map:Qe,matcap:Ve,envMap:N,envMapMode:N&&D.mapping,envMapCubeUVHeight:Z,aoMap:Dt,lightMap:Ge,bumpMap:ke,normalMap:Pe,displacementMap:p&&Ye,emissiveMap:Ce,normalMapObjectSpace:Pe&&y.normalMapType===Ox,normalMapTangentSpace:Pe&&y.normalMapType===Fx,metalnessMap:C,roughnessMap:M,anisotropy:V,anisotropyMap:me,clearcoat:te,clearcoatMap:We,clearcoatNormalMap:se,clearcoatRoughnessMap:ge,dispersion:ne,iridescence:ee,iridescenceMap:be,iridescenceThicknessMap:Re,sheen:Me,sheenColorMap:ve,sheenRoughnessMap:Xe,specularMap:Ne,specularColorMap:tt,specularIntensityMap:A,transmission:he,transmissionMap:j,thicknessMap:B,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Gr&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:$e,combine:y.combine,mapUv:Qe&&m(y.map.channel),aoMapUv:Dt&&m(y.aoMap.channel),lightMapUv:Ge&&m(y.lightMap.channel),bumpMapUv:ke&&m(y.bumpMap.channel),normalMapUv:Pe&&m(y.normalMap.channel),displacementMapUv:Ye&&m(y.displacementMap.channel),emissiveMapUv:Ce&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:me&&m(y.anisotropyMap.channel),clearcoatMapUv:We&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(y.sheenRoughnessMap.channel),specularMapUv:Ne&&m(y.specularMap.channel),specularColorMapUv:tt&&m(y.specularColorMap.channel),specularIntensityMapUv:A&&m(y.specularIntensityMap.channel),transmissionMapUv:j&&m(y.transmissionMap.channel),thicknessMapUv:B&&m(y.thicknessMap.channel),alphaMapUv:ce&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pe||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Qe||ce),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Qe&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function x(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)w.push(O),w.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(v(w,y),S(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const w=_[y.type];let O;if(w){const k=an[w];O=Bc.clone(k.uniforms)}else O=y.uniforms;return O}function R(y,w){let O;for(let k=0,z=c.length;k<z;k++){const J=c[k];if(J.cacheKey===w){O=J,++O.usedTimes;break}}return O===void 0&&(O=new b2(t,w,y,s),c.push(O)),O}function T(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function L(y){l.remove(y)}function X(){l.dispose()}return{getParameters:d,getProgramCacheKey:x,getUniforms:P,acquireProgram:R,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:X}}function D2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function N2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,f){n.length>1&&n.sort(h||N2),i.length>1&&i.sort(f||Qg),r.length>1&&r.sort(f||Qg)}function c(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function U2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jg,t.set(i,[o])):r>=s.length?(o=new Jg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function I2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Oe};break;case"SpotLight":n={position:new U,direction:new U,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function F2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let O2=0;function k2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function z2(t){const e=new I2,n=F2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new dt,o=new dt;function a(u){let c=0,h=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,x=0,v=0,S=0,P=0,R=0,T=0;u.sort(k2);for(let X=0,y=u.length;X<y;X++){const w=u[X],O=w.color,k=w.intensity,z=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=O.r*k,h+=O.g*k,f+=O.b*k;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],k);T++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,D=n.get(w);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=w.shadow.matrix,x++}i.directional[p]=H,p++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(O).multiplyScalar(k),H.distance=z,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[_]=H;const K=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,K.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[_]=K.matrix,w.castShadow){const D=n.get(w);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=J,S++}_++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(O).multiplyScalar(k),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const K=w.shadow,D=n.get(w);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=H,g++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(k),H.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[d]=H,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==x||L.numPointShadows!==v||L.numSpotShadows!==S||L.numSpotMaps!==P||L.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=x,L.numPointShadows=v,L.numSpotShadows=S,L.numSpotMaps=P,L.numLightProbes=T,i.version=O2++)}function l(u,c){let h=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const v=u[d];if(v.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function e0(t){const e=new z2(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function B2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new e0(t),e.set(r,[a])):s>=o.length?(a=new e0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class oy extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ay extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V2=`uniform sampler2D shadow_pass;
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
}`;function G2(t,e,n){let i=new zp;const r=new Ue,s=new Ue,o=new He,a=new oy({depthPacking:Ix}),l=new ay,u={},c=n.maxTextureSize,h={[Bi]:un,[un]:Bi,[bn]:bn},f=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:H2,fragmentShader:V2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xp;let d=this.type;this.render=function(R,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const X=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Di),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=d!==ai&&this.type===ai,z=d===ai&&this.type!==ai;for(let J=0,H=R.length;J<H;J++){const K=R[J],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Z=D.getFrameExtents();if(r.multiply(Z),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Z.x),r.x=s.x*Z.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Z.y),r.y=s.y*Z.y,D.mapSize.y=s.y)),D.map===null||k===!0||z===!0){const oe=this.type!==ai?{minFilter:It,magFilter:It}:{};D.map!==null&&D.map.dispose(),D.map=new xr(r.x,r.y,oe),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Y=D.getViewportCount();for(let oe=0;oe<Y;oe++){const xe=D.getViewport(oe);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),O.viewport(o),D.updateMatrices(K,oe),i=D.getFrustum(),S(T,L,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===ai&&x(D,L),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(X,y,w)};function x(R,T){const L=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(T,null,L,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(T,null,L,p,_,null)}function v(R,T,L,X){let y=null;const w=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=L.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=y.uuid,k=T.uuid;let z=u[O];z===void 0&&(z={},u[O]=z);let J=z[k];J===void 0&&(J=y.clone(),z[k]=J,T.addEventListener("dispose",P)),y=J}if(y.visible=T.visible,y.wireframe=T.wireframe,X===ai?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=t.properties.get(y);O.light=L}return y}function S(R,T,L,X,y){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===ai)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const k=e.update(R),z=R.material;if(Array.isArray(z)){const J=k.groups;for(let H=0,K=J.length;H<K;H++){const D=J[H],Z=z[D.materialIndex];if(Z&&Z.visible){const Y=v(R,Z,X,y);R.onBeforeShadow(t,R,T,L,k,Y,D),t.renderBufferDirect(L,null,k,Y,R,D),R.onAfterShadow(t,R,T,L,k,Y,D)}}}else if(z.visible){const J=v(R,z,X,y);R.onBeforeShadow(t,R,T,L,k,J,null),t.renderBufferDirect(L,null,k,J,R,null),R.onAfterShadow(t,R,T,L,k,J,null)}}const O=R.children;for(let k=0,z=O.length;k<z;k++)S(O[k],T,L,X,y)}function P(R){R.target.removeEventListener("dispose",P);for(const L in u){const X=u[L],y=R.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}const W2={[Tu]:Au,[bu]:Pu,[Cu]:Lu,[Zr]:Ru,[Au]:Tu,[Pu]:bu,[Lu]:Cu,[Ru]:Zr};function j2(t){function e(){let A=!1;const j=new He;let B=null;const Q=new He(0,0,0,0);return{setMask:function(ce){B!==ce&&!A&&(t.colorMask(ce,ce,ce,ce),B=ce)},setLocked:function(ce){A=ce},setClear:function(ce,de,$e,ot,Ot){Ot===!0&&(ce*=ot,de*=ot,$e*=ot),j.set(ce,de,$e,ot),Q.equals(j)===!1&&(t.clearColor(ce,de,$e,ot),Q.copy(j))},reset:function(){A=!1,B=null,Q.set(-1,0,0,0)}}}function n(){let A=!1,j=!1,B=null,Q=null,ce=null;return{setReversed:function(de){j=de},setTest:function(de){de?le(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(de){B!==de&&!A&&(t.depthMask(de),B=de)},setFunc:function(de){if(j&&(de=W2[de]),Q!==de){switch(de){case Tu:t.depthFunc(t.NEVER);break;case Au:t.depthFunc(t.ALWAYS);break;case bu:t.depthFunc(t.LESS);break;case Zr:t.depthFunc(t.LEQUAL);break;case Cu:t.depthFunc(t.EQUAL);break;case Ru:t.depthFunc(t.GEQUAL);break;case Pu:t.depthFunc(t.GREATER);break;case Lu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=de}},setLocked:function(de){A=de},setClear:function(de){ce!==de&&(t.clearDepth(de),ce=de)},reset:function(){A=!1,B=null,Q=null,ce=null}}}function i(){let A=!1,j=null,B=null,Q=null,ce=null,de=null,$e=null,ot=null,Ot=null;return{setTest:function(Ke){A||(Ke?le(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ke){j!==Ke&&!A&&(t.stencilMask(Ke),j=Ke)},setFunc:function(Ke,fn,vi){(B!==Ke||Q!==fn||ce!==vi)&&(t.stencilFunc(Ke,fn,vi),B=Ke,Q=fn,ce=vi)},setOp:function(Ke,fn,vi){(de!==Ke||$e!==fn||ot!==vi)&&(t.stencilOp(Ke,fn,vi),de=Ke,$e=fn,ot=vi)},setLocked:function(Ke){A=Ke},setClear:function(Ke){Ot!==Ke&&(t.clearStencil(Ke),Ot=Ke)},reset:function(){A=!1,j=null,B=null,Q=null,ce=null,de=null,$e=null,ot=null,Ot=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,x=null,v=null,S=null,P=null,R=new Oe(0,0,0),T=0,L=!1,X=null,y=null,w=null,O=null,k=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,H=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=H>=2);let D=null,Z={};const Y=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),xe=new He().fromArray(Y),ze=new He().fromArray(oe);function $(A,j,B,Q){const ce=new Uint8Array(4),de=t.createTexture();t.bindTexture(A,de),t.texParameteri(A,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(A,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<B;$e++)A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY?t.texImage3D(j,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(j+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return de}const q={};q[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(Zr),Ge(!1),ke(nd),le(t.CULL_FACE),N(Di);function le(A){u[A]!==!0&&(t.enable(A),u[A]=!0)}function ae(A){u[A]!==!1&&(t.disable(A),u[A]=!1)}function Ee(A,j){return c[A]!==j?(t.bindFramebuffer(A,j),c[A]=j,A===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=j),A===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=j),!0):!1}function Ae(A,j){let B=f,Q=!1;if(A){B=h.get(j),B===void 0&&(B=[],h.set(j,B));const ce=A.textures;if(B.length!==ce.length||B[0]!==t.COLOR_ATTACHMENT0){for(let de=0,$e=ce.length;de<$e;de++)B[de]=t.COLOR_ATTACHMENT0+de;B.length=ce.length,Q=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,Q=!0);Q&&t.drawBuffers(B)}function Be(A){return p!==A?(t.useProgram(A),p=A,!0):!1}const Qe={[ir]:t.FUNC_ADD,[ax]:t.FUNC_SUBTRACT,[lx]:t.FUNC_REVERSE_SUBTRACT};Qe[ux]=t.MIN,Qe[cx]=t.MAX;const Ve={[hx]:t.ZERO,[fx]:t.ONE,[dx]:t.SRC_COLOR,[wu]:t.SRC_ALPHA,[xx]:t.SRC_ALPHA_SATURATE,[vx]:t.DST_COLOR,[mx]:t.DST_ALPHA,[px]:t.ONE_MINUS_SRC_COLOR,[Eu]:t.ONE_MINUS_SRC_ALPHA,[_x]:t.ONE_MINUS_DST_COLOR,[gx]:t.ONE_MINUS_DST_ALPHA,[yx]:t.CONSTANT_COLOR,[Sx]:t.ONE_MINUS_CONSTANT_COLOR,[Mx]:t.CONSTANT_ALPHA,[wx]:t.ONE_MINUS_CONSTANT_ALPHA};function N(A,j,B,Q,ce,de,$e,ot,Ot,Ke){if(A===Di){g===!0&&(ae(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),A!==ox){if(A!==_||Ke!==L){if((m!==ir||v!==ir)&&(t.blendEquation(t.FUNC_ADD),m=ir,v=ir),Ke)switch(A){case Gr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case id:t.blendFunc(t.ONE,t.ONE);break;case rd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Gr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case id:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}d=null,x=null,S=null,P=null,R.set(0,0,0),T=0,_=A,L=Ke}return}ce=ce||j,de=de||B,$e=$e||Q,(j!==m||ce!==v)&&(t.blendEquationSeparate(Qe[j],Qe[ce]),m=j,v=ce),(B!==d||Q!==x||de!==S||$e!==P)&&(t.blendFuncSeparate(Ve[B],Ve[Q],Ve[de],Ve[$e]),d=B,x=Q,S=de,P=$e),(ot.equals(R)===!1||Ot!==T)&&(t.blendColor(ot.r,ot.g,ot.b,Ot),R.copy(ot),T=Ot),_=A,L=!1}function Dt(A,j){A.side===bn?ae(t.CULL_FACE):le(t.CULL_FACE);let B=A.side===un;j&&(B=!B),Ge(B),A.blending===Gr&&A.transparent===!1?N(Di):N(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),r.setMask(A.colorWrite);const Q=A.stencilWrite;o.setTest(Q),Q&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Ye(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(A){X!==A&&(A?t.frontFace(t.CW):t.frontFace(t.CCW),X=A)}function ke(A){A!==ix?(le(t.CULL_FACE),A!==y&&(A===nd?t.cullFace(t.BACK):A===rx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),y=A}function Pe(A){A!==w&&(J&&t.lineWidth(A),w=A)}function Ye(A,j,B){A?(le(t.POLYGON_OFFSET_FILL),(O!==j||k!==B)&&(t.polygonOffset(j,B),O=j,k=B)):ae(t.POLYGON_OFFSET_FILL)}function Ce(A){A?le(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function C(A){A===void 0&&(A=t.TEXTURE0+z-1),D!==A&&(t.activeTexture(A),D=A)}function M(A,j,B){B===void 0&&(D===null?B=t.TEXTURE0+z-1:B=D);let Q=Z[B];Q===void 0&&(Q={type:void 0,texture:void 0},Z[B]=Q),(Q.type!==A||Q.texture!==j)&&(D!==B&&(t.activeTexture(B),D=B),t.bindTexture(A,j||q[A]),Q.type=A,Q.texture=j)}function V(){const A=Z[D];A!==void 0&&A.type!==void 0&&(t.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Re(A){xe.equals(A)===!1&&(t.scissor(A.x,A.y,A.z,A.w),xe.copy(A))}function ve(A){ze.equals(A)===!1&&(t.viewport(A.x,A.y,A.z,A.w),ze.copy(A))}function Xe(A,j){let B=l.get(j);B===void 0&&(B=new WeakMap,l.set(j,B));let Q=B.get(A);Q===void 0&&(Q=t.getUniformBlockIndex(j,A.name),B.set(A,Q))}function Ne(A,j){const Q=l.get(j).get(A);a.get(j)!==Q&&(t.uniformBlockBinding(j,Q,A.__bindingPointIndex),a.set(j,Q))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,Z={},c={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,x=null,v=null,S=null,P=null,R=new Oe(0,0,0),T=0,L=!1,X=null,y=null,w=null,O=null,k=null,xe.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ae,bindFramebuffer:Ee,drawBuffers:Ae,useProgram:Be,setBlending:N,setMaterial:Dt,setFlipSided:Ge,setCullFace:ke,setLineWidth:Pe,setPolygonOffset:Ye,setScissorTest:Ce,activeTexture:C,bindTexture:M,unbindTexture:V,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:ge,texImage3D:be,updateUBOMapping:Xe,uniformBlockBinding:Ne,texStorage2D:We,texStorage3D:se,texSubImage2D:ee,texSubImage3D:Me,compressedTexSubImage2D:he,compressedTexSubImage3D:me,scissor:Re,viewport:ve,reset:tt}}function t0(t,e,n,i){const r=X2(i);switch(n){case Tp:return t*e;case bp:return t*e;case Cp:return t*e*2;case Pa:return t*e/r.components*r.byteLength;case Ic:return t*e/r.components*r.byteLength;case La:return t*e*2/r.components*r.byteLength;case Fc:return t*e*2/r.components*r.byteLength;case Ap:return t*e*3/r.components*r.byteLength;case vn:return t*e*4/r.components*r.byteLength;case Oc:return t*e*4/r.components*r.byteLength;case Vo:case Go:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wo:case jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ou:case zu:return Math.max(t,16)*Math.max(e,8)/4;case Fu:case ku:return Math.max(t,8)*Math.max(e,8)/2;case Bu:case Hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ju:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $u:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Xo:case ic:case rc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Rp:case sc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case oc:case ac:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function X2(t){switch(t){case mi:case Mp:return{byteLength:1,components:1};case Js:case wp:case so:return{byteLength:2,components:1};case Nc:case Uc:return{byteLength:2,components:4};case _r:case Dc:case ci:return{byteLength:4,components:1};case Ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function $2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ue,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):xa("canvas")}function _(C,M,V){let te=1;const ne=Ce(C);if((ne.width>V||ne.height>V)&&(te=V/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(te*ne.width),Me=Math.floor(te*ne.height);h===void 0&&(h=g(ee,Me));const he=M?g(ee,Me):h;return he.width=ee,he.height=Me,he.getContext("2d").drawImage(C,0,0,ee,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ee+"x"+Me+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==It&&C.minFilter!==Jt}function d(C){t.generateMipmap(C)}function x(C,M,V,te,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=M;if(M===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),M===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),V===t.UNSIGNED_INT&&(ee=t.RGB32UI),V===t.BYTE&&(ee=t.RGB8I),V===t.SHORT&&(ee=t.RGB16I),V===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),V===t.UNSIGNED_INT&&(ee=t.RGBA32UI),V===t.BYTE&&(ee=t.RGBA8I),V===t.SHORT&&(ee=t.RGBA16I),V===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),M===t.RGBA){const Me=ne?pa:Ze.getTransfer(te);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=Me===at?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(C,M){let V;return C?M===null||M===_r||M===es?V=t.DEPTH24_STENCIL8:M===ci?V=t.DEPTH32F_STENCIL8:M===Js&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_r||M===es?V=t.DEPTH_COMPONENT24:M===ci?V=t.DEPTH_COMPONENT32F:M===Js&&(V=t.DEPTH_COMPONENT16),V}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==It&&C.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){const M=C.target;M.removeEventListener("dispose",P),T(M),M.isVideoTexture&&c.delete(M)}function R(C){const M=C.target;M.removeEventListener("dispose",R),X(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const V=C.source,te=f.get(V);if(te){const ne=te[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(C),Object.keys(te).length===0&&f.delete(V)}i.remove(C)}function L(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const V=C.source,te=f.get(V);delete te[M.__cacheKey],o.memory.textures--}function X(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ne=0;ne<M.__webglFramebuffer[te].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[te][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)t.deleteFramebuffer(M.__webglFramebuffer[te]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let te=0,ne=V.length;te<ne;te++){const ee=i.get(V[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(V[te])}i.remove(C)}let y=0;function w(){y=0}function O(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function k(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function z(C,M){const V=i.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(V,C,M);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function J(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){ze(V,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function H(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){ze(V,C,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function K(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){$(V,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const D={[Uu]:t.REPEAT,[or]:t.CLAMP_TO_EDGE,[Iu]:t.MIRRORED_REPEAT},Z={[It]:t.NEAREST,[Nx]:t.NEAREST_MIPMAP_NEAREST,[Po]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[Yl]:t.LINEAR_MIPMAP_NEAREST,[Ri]:t.LINEAR_MIPMAP_LINEAR},Y={[kx]:t.NEVER,[Wx]:t.ALWAYS,[zx]:t.LESS,[Pp]:t.LEQUAL,[Bx]:t.EQUAL,[Gx]:t.GEQUAL,[Hx]:t.GREATER,[Vx]:t.NOTEQUAL};function oe(C,M){if(M.type===ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===Yl||M.magFilter===Po||M.magFilter===Ri||M.minFilter===Jt||M.minFilter===Yl||M.minFilter===Po||M.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,D[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Y[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===It||M.minFilter!==Po&&M.minFilter!==Ri||M.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function xe(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",P));const te=M.source;let ne=f.get(te);ne===void 0&&(ne={},f.set(te,ne));const ee=k(M);if(ee!==C.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[ee].usedTimes++;const Me=ne[C.__cacheKey];Me!==void 0&&(ne[C.__cacheKey].usedTimes--,Me.usedTimes===0&&L(M)),C.__cacheKey=ee,C.__webglTexture=ne[ee].texture}return V}function ze(C,M,V){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const ne=xe(C,M),ee=M.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+V);const Me=i.get(ee);if(ee.version!==Me.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const he=Ze.getPrimaries(Ze.workingColorSpace),me=M.colorSpace===On?null:Ze.getPrimaries(M.colorSpace),We=M.colorSpace===On||he===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let se=_(M.image,!1,r.maxTextureSize);se=Ye(M,se);const ge=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let Re=x(M.internalFormat,ge,be,M.colorSpace,M.isVideoTexture);oe(te,M);let ve;const Xe=M.mipmaps,Ne=M.isVideoTexture!==!0,tt=Me.__version===void 0||ne===!0,A=ee.dataReady,j=S(M,se);if(M.isDepthTexture)Re=v(M.format===ts,M.type),tt&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,Re,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Re,se.width,se.height,0,ge,be,null));else if(M.isDataTexture)if(Xe.length>0){Ne&&tt&&n.texStorage2D(t.TEXTURE_2D,j,Re,Xe[0].width,Xe[0].height);for(let B=0,Q=Xe.length;B<Q;B++)ve=Xe[B],Ne?A&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,ge,be,ve.data):n.texImage2D(t.TEXTURE_2D,B,Re,ve.width,ve.height,0,ge,be,ve.data);M.generateMipmaps=!1}else Ne?(tt&&n.texStorage2D(t.TEXTURE_2D,j,Re,se.width,se.height),A&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ge,be,se.data)):n.texImage2D(t.TEXTURE_2D,0,Re,se.width,se.height,0,ge,be,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,j,Re,Xe[0].width,Xe[0].height,se.depth);for(let B=0,Q=Xe.length;B<Q;B++)if(ve=Xe[B],M.format!==vn)if(ge!==null)if(Ne){if(A)if(M.layerUpdates.size>0){const ce=t0(ve.width,ve.height,M.format,M.type);for(const de of M.layerUpdates){const $e=ve.data.subarray(de*ce/ve.data.BYTES_PER_ELEMENT,(de+1)*ce/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,de,ve.width,ve.height,1,ge,$e,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,se.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,Re,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?A&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,se.depth,ge,be,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,Re,ve.width,ve.height,se.depth,0,ge,be,ve.data)}else{Ne&&tt&&n.texStorage2D(t.TEXTURE_2D,j,Re,Xe[0].width,Xe[0].height);for(let B=0,Q=Xe.length;B<Q;B++)ve=Xe[B],M.format!==vn?ge!==null?Ne?A&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,B,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?A&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,ge,be,ve.data):n.texImage2D(t.TEXTURE_2D,B,Re,ve.width,ve.height,0,ge,be,ve.data)}else if(M.isDataArrayTexture)if(Ne){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,j,Re,se.width,se.height,se.depth),A)if(M.layerUpdates.size>0){const B=t0(se.width,se.height,M.format,M.type);for(const Q of M.layerUpdates){const ce=se.data.subarray(Q*B/se.data.BYTES_PER_ELEMENT,(Q+1)*B/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ge,be,ce)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,be,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,ge,be,se.data);else if(M.isData3DTexture)Ne?(tt&&n.texStorage3D(t.TEXTURE_3D,j,Re,se.width,se.height,se.depth),A&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,be,se.data)):n.texImage3D(t.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,ge,be,se.data);else if(M.isFramebufferTexture){if(tt)if(Ne)n.texStorage2D(t.TEXTURE_2D,j,Re,se.width,se.height);else{let B=se.width,Q=se.height;for(let ce=0;ce<j;ce++)n.texImage2D(t.TEXTURE_2D,ce,Re,B,Q,0,ge,be,null),B>>=1,Q>>=1}}else if(Xe.length>0){if(Ne&&tt){const B=Ce(Xe[0]);n.texStorage2D(t.TEXTURE_2D,j,Re,B.width,B.height)}for(let B=0,Q=Xe.length;B<Q;B++)ve=Xe[B],Ne?A&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ge,be,ve):n.texImage2D(t.TEXTURE_2D,B,Re,ge,be,ve);M.generateMipmaps=!1}else if(Ne){if(tt){const B=Ce(se);n.texStorage2D(t.TEXTURE_2D,j,Re,B.width,B.height)}A&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,be,se)}else n.texImage2D(t.TEXTURE_2D,0,Re,ge,be,se);m(M)&&d(te),Me.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $(C,M,V){if(M.image.length!==6)return;const te=xe(C,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const ee=i.get(ne);if(ne.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+V);const Me=Ze.getPrimaries(Ze.workingColorSpace),he=M.colorSpace===On?null:Ze.getPrimaries(M.colorSpace),me=M.colorSpace===On||Me===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!We&&!se?ge[Q]=_(M.image[Q],!0,r.maxCubemapSize):ge[Q]=se?M.image[Q].image:M.image[Q],ge[Q]=Ye(M,ge[Q]);const be=ge[0],Re=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),Xe=x(M.internalFormat,Re,ve,M.colorSpace),Ne=M.isVideoTexture!==!0,tt=ee.__version===void 0||te===!0,A=ne.dataReady;let j=S(M,be);oe(t.TEXTURE_CUBE_MAP,M);let B;if(We){Ne&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,j,Xe,be.width,be.height);for(let Q=0;Q<6;Q++){B=ge[Q].mipmaps;for(let ce=0;ce<B.length;ce++){const de=B[ce];M.format!==vn?Re!==null?Ne?A&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,de.width,de.height,Re,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,Xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,de.width,de.height,Re,ve,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,Xe,de.width,de.height,0,Re,ve,de.data)}}}else{if(B=M.mipmaps,Ne&&tt){B.length>0&&j++;const Q=Ce(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,j,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){Ne?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Re,ve,ge[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,ge[Q].width,ge[Q].height,0,Re,ve,ge[Q].data);for(let ce=0;ce<B.length;ce++){const $e=B[ce].image[Q].image;Ne?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,$e.width,$e.height,Re,ve,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,Xe,$e.width,$e.height,0,Re,ve,$e.data)}}else{Ne?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,ve,ge[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,Re,ve,ge[Q]);for(let ce=0;ce<B.length;ce++){const de=B[ce];Ne?A&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Re,ve,de.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,Xe,Re,ve,de.image[Q])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),ee.__version=ne.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function q(C,M,V,te,ne,ee){const Me=s.convert(V.format,V.colorSpace),he=s.convert(V.type),me=x(V.internalFormat,Me,he,V.colorSpace);if(!i.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>ee),ge=Math.max(1,M.height>>ee);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ee,me,se,ge,M.depth,0,Me,he,null):n.texImage2D(ne,ee,me,se,ge,0,Me,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ne,i.get(V).__webglTexture,0,Ge(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ne,i.get(V).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(C,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const te=M.depthTexture,ne=te&&te.isDepthTexture?te.type:null,ee=v(M.stencilBuffer,ne),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=Ge(M);ke(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,ee,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,C)}else{const te=M.textures;for(let ne=0;ne<te.length;ne++){const ee=te[ne],Me=s.convert(ee.format,ee.colorSpace),he=s.convert(ee.type),me=x(ee.internalFormat,Me,he,ee.colorSpace),We=Ge(M);V&&ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,me,M.width,M.height):ke(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,ne=Ge(M);if(M.depthTexture.format===Wr)ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===ts)ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(C){const M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",ne)};te.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=te}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,C)}else if(V){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=t.createRenderbuffer(),le(M.__webglDepthbuffer[te],C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),le(M.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,M,V){const te=i.get(C);M!==void 0&&q(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ee(C)}function Be(C){const M=C.texture,V=i.get(C),te=i.get(M);C.addEventListener("dispose",R);const ne=C.textures,ee=C.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++),ee){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let me=0;me<M.mipmaps.length;me++)V.__webglFramebuffer[he][me]=t.createFramebuffer()}else V.__webglFramebuffer[he]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)V.__webglFramebuffer[he]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Me)for(let he=0,me=ne.length;he<me;he++){const We=i.get(ne[he]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&ke(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const me=ne[he];V.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const We=s.convert(me.format,me.colorSpace),se=s.convert(me.type),ge=x(me.internalFormat,We,se,me.colorSpace,C.isXRRenderTarget===!0),be=Ge(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ge,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,V.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),le(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),oe(t.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)q(V.__webglFramebuffer[he][me],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else q(V.__webglFramebuffer[he],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let he=0,me=ne.length;he<me;he++){const We=ne[he],se=i.get(We);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),oe(t.TEXTURE_2D,We),q(V.__webglFramebuffer,C,We,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(We)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,te.__webglTexture),oe(he,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)q(V.__webglFramebuffer[me],C,M,t.COLOR_ATTACHMENT0,he,me);else q(V.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,he,0);m(M)&&d(he),n.unbindTexture()}C.depthBuffer&&Ee(C)}function Qe(C){const M=C.textures;for(let V=0,te=M.length;V<te;V++){const ne=M[V];if(m(ne)){const ee=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ne).__webglTexture;n.bindTexture(ee,Me),d(ee),n.unbindTexture()}}}const Ve=[],N=[];function Dt(C){if(C.samples>0){if(ke(C)===!1){const M=C.textures,V=C.width,te=C.height;let ne=t.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(C),he=M.length>1;if(he)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let me=0;me<M.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const We=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,V,te,0,0,V,te,ne,t.NEAREST),l===!0&&(Ve.length=0,N.length=0,Ve.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ve.push(ee),N.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const We=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ge(C){return Math.min(r.maxSamples,C.samples)}function ke(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(C){const M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function Ye(C,M){const V=C.colorSpace,te=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Vi&&V!==On&&(Ze.getTransfer(V)===at?(te!==vn||ne!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=Ae,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ke}function ly(t,e){function n(i,r=On){let s;const o=Ze.getTransfer(r);if(i===mi)return t.UNSIGNED_BYTE;if(i===Nc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ep)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Mp)return t.BYTE;if(i===wp)return t.SHORT;if(i===Js)return t.UNSIGNED_SHORT;if(i===Dc)return t.INT;if(i===_r)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===so)return t.HALF_FLOAT;if(i===Tp)return t.ALPHA;if(i===Ap)return t.RGB;if(i===vn)return t.RGBA;if(i===bp)return t.LUMINANCE;if(i===Cp)return t.LUMINANCE_ALPHA;if(i===Wr)return t.DEPTH_COMPONENT;if(i===ts)return t.DEPTH_STENCIL;if(i===Pa)return t.RED;if(i===Ic)return t.RED_INTEGER;if(i===La)return t.RG;if(i===Fc)return t.RG_INTEGER;if(i===Oc)return t.RGBA_INTEGER;if(i===Vo||i===Go||i===Wo||i===jo)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fu||i===Ou||i===ku||i===zu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ou)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ku)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bu||i===Hu||i===Vu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bu||i===Hu)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gu||i===Wu||i===ju||i===Xu||i===$u||i===Yu||i===qu||i===Ku||i===Zu||i===Qu||i===Ju||i===ec||i===tc||i===nc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ju)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$u)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ku)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ju)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xo||i===ic||i===rc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xo)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ic)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rp||i===sc||i===oc||i===ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class uy extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y2={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K2=`
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

}`;class Z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $t({vertexShader:q2,fragmentShader:K2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q2 extends Er{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const _=new Z2,m=n.getContextAttributes();let d=null,x=null;const v=[],S=[],P=new Ue;let R=null;const T=new An;T.layers.enable(1),T.viewport=new He;const L=new An;L.layers.enable(2),L.viewport=new He;const X=[T,L],y=new uy;y.layers.enable(1),y.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let q=v[$];return q===void 0&&(q=new Zh,v[$]=q),q.getTargetRaySpace()},this.getControllerGrip=function($){let q=v[$];return q===void 0&&(q=new Zh,v[$]=q),q.getGripSpace()},this.getHand=function($){let q=v[$];return q===void 0&&(q=new Zh,v[$]=q),q.getHandSpace()};function k($){const q=S.indexOf($.inputSource);if(q===-1)return;const le=v[q];le!==void 0&&(le.update($.inputSource,$.frame,u||o),le.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",J);for(let $=0;$<v.length;$++){const q=S[$];q!==null&&(S[$]=null,v[$].disconnect(q))}w=null,O=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,x=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",z),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new xr(p.framebufferWidth,p.framebufferHeight,{format:vn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,le=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=m.stencil?ts:Wr,le=m.stencil?es:_r);const Ee={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new xr(f.textureWidth,f.textureHeight,{format:vn,type:mi,depthTexture:new Hp(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J($){for(let q=0;q<$.removed.length;q++){const le=$.removed[q],ae=S.indexOf(le);ae>=0&&(S[ae]=null,v[ae].disconnect(le))}for(let q=0;q<$.added.length;q++){const le=$.added[q];let ae=S.indexOf(le);if(ae===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=S.length){S.push(le),ae=Ae;break}else if(S[Ae]===null){S[Ae]=le,ae=Ae;break}if(ae===-1)break}const Ee=v[ae];Ee&&Ee.connect(le)}}const H=new U,K=new U;function D($,q,le){H.setFromMatrixPosition(q.matrixWorld),K.setFromMatrixPosition(le.matrixWorld);const ae=H.distanceTo(K),Ee=q.projectionMatrix.elements,Ae=le.projectionMatrix.elements,Be=Ee[14]/(Ee[10]-1),Qe=Ee[14]/(Ee[10]+1),Ve=(Ee[9]+1)/Ee[5],N=(Ee[9]-1)/Ee[5],Dt=(Ee[8]-1)/Ee[0],Ge=(Ae[8]+1)/Ae[0],ke=Be*Dt,Pe=Be*Ge,Ye=ae/(-Dt+Ge),Ce=Ye*-Dt;if(q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ce),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const C=Be+Ye,M=Qe+Ye,V=ke-Ce,te=Pe+(ae-Ce),ne=Ve*Qe/M*C,ee=N*Qe/M*C;$.projectionMatrix.makePerspective(V,te,ne,ee,C,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,q){q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let q=$.near,le=$.far;_.texture!==null&&(_.depthNear>0&&(q=_.depthNear),_.depthFar>0&&(le=_.depthFar)),y.near=L.near=T.near=q,y.far=L.far=T.far=le,(w!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,O=y.far);const ae=$.parent,Ee=y.cameras;Z(y,ae);for(let Ae=0;Ae<Ee.length;Ae++)Z(Ee[Ae],ae);Ee.length===2?D(y,T,L):y.projectionMatrix.copy(T.projectionMatrix),Y($,y,ae)};function Y($,q,le){le===null?$.matrix.copy(q.matrixWorld):($.matrix.copy(le.matrixWorld),$.matrix.invert(),$.matrix.multiply(q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_a*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let oe=null;function xe($,q){if(c=q.getViewerPose(u||o),g=q,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ae=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Ae=0;Ae<le.length;Ae++){const Be=le[Ae];let Qe=null;if(p!==null)Qe=p.getViewport(Be);else{const N=h.getViewSubImage(f,Be);Qe=N.viewport,Ae===0&&(e.setRenderTargetTextures(x,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(x))}let Ve=X[Ae];Ve===void 0&&(Ve=new An,Ve.layers.enable(Ae),Ve.viewport=new He,X[Ae]=Ve),Ve.matrix.fromArray(Be.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Be.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ae===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Ve)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Ae=h.getDepthInformation(le[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let le=0;le<v.length;le++){const ae=S[le],Ee=v[le];ae!==null&&Ee!==void 0&&Ee.update(ae,q,u||o)}oe&&oe($,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const ze=new ey;ze.setAnimationLoop(xe),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const Dr=new gi,J2=new dt;function eb(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Zx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,Dr.copy(S),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(J2.makeRotationFromEuler(Dr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(g(x),S=c(x),r[x.id]=S,x.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(x,P);const R=e.render.frame;s[x.id]!==R&&(f(x),s[x.id]=R)}function c(x){const v=h();x.__bindingPointIndex=v;const S=t.createBuffer(),P=x.__size,R=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],S=x.uniforms,P=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,T=S.length;R<T;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let X=0,y=L.length;X<y;X++){const w=L[X];if(p(w,R,X,P)===!0){const O=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let z=0;for(let J=0;J<k.length;J++){const H=k[J],K=_(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,O+z,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,S,P){const R=x.value,T=v+"_"+S;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{const L=P[T];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return P[T]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(x){const v=x.uniforms;let S=0;const P=16;for(let T=0,L=v.length;T<L;T++){const X=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,w=X.length;y<w;y++){const O=X[y],k=Array.isArray(O.value)?O.value:[O.value];for(let z=0,J=k.length;z<J;z++){const H=k[z],K=_(H),D=S%P,Z=D%K.boundary,Y=D+Z;S+=Z,Y!==0&&P-Y<K.storage&&(S+=P-Y),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=K.storage}}}const R=S%P;return R>0&&(S+=P-R),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class cy{constructor(e={}){const{canvas:n=Xx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=Ni,this.toneMappingExposure=1;const v=this;let S=!1,P=0,R=0,T=null,L=-1,X=null;const y=new He,w=new He;let O=null;const k=new Oe(0);let z=0,J=n.width,H=n.height,K=1,D=null,Z=null;const Y=new He(0,0,J,H),oe=new He(0,0,J,H);let xe=!1;const ze=new zp;let $=!1,q=!1;const le=new dt,ae=new dt,Ee=new U,Ae=new He,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Ve(){return T===null?K:1}let N=i;function Dt(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lc}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",de,!1),N===null){const I="webgl2";if(N=Dt(I,E),N===null)throw Dt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ge,ke,Pe,Ye,Ce,C,M,V,te,ne,ee,Me,he,me,We,se,ge,be,Re,ve,Xe,Ne,tt,A;function j(){Ge=new hA(N),Ge.init(),Ne=new ly(N,Ge),ke=new sA(N,Ge,e,Ne),Pe=new j2(N),ke.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),Ye=new pA(N),Ce=new D2,C=new $2(N,Ge,Pe,Ce,ke,Ne,Ye),M=new aA(v),V=new cA(v),te=new SE(N),tt=new iA(N,te),ne=new fA(N,te,Ye,tt),ee=new gA(N,ne,te,Ye),Re=new mA(N,ke,C),se=new oA(Ce),Me=new L2(v,M,V,Ge,ke,tt,se),he=new eb(v,Ce),me=new U2,We=new B2(Ge),be=new nA(v,M,V,Pe,ee,f,l),ge=new G2(v,ee,ke),A=new tb(N,Ye,ke,Pe),ve=new rA(N,Ge,Ye),Xe=new dA(N,Ge,Ye),Ye.programs=Me.programs,v.capabilities=ke,v.extensions=Ge,v.properties=Ce,v.renderLists=me,v.shadowMap=ge,v.state=Pe,v.info=Ye}j();const B=new Q2(v,N);this.xr=B,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(J,H,!1))},this.getSize=function(E){return E.set(J,H)},this.setSize=function(E,I,G=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,H=I,n.width=Math.floor(E*K),n.height=Math.floor(I*K),G===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(J*K,H*K).floor()},this.setDrawingBufferSize=function(E,I,G){J=E,H=I,K=G,n.width=Math.floor(E*G),n.height=Math.floor(I*G),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,I,G,W){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,I,G,W),Pe.viewport(y.copy(Y).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,I,G,W){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,I,G,W),Pe.scissor(w.copy(oe).multiplyScalar(K).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){Pe.setScissorTest(xe=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(E=!0,I=!0,G=!0){let W=0;if(E){let F=!1;if(T!==null){const ue=T.texture.format;F=ue===Oc||ue===Fc||ue===Ic}if(F){const ue=T.texture.type,pe=ue===mi||ue===_r||ue===Js||ue===es||ue===Nc||ue===Uc,ye=be.getClearColor(),Se=be.getClearAlpha(),Le=ye.r,De=ye.g,we=ye.b;pe?(p[0]=Le,p[1]=De,p[2]=we,p[3]=Se,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Le,g[1]=De,g[2]=we,g[3]=Se,N.clearBufferiv(N.COLOR,0,g))}else W|=N.COLOR_BUFFER_BIT}I&&(W|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),We.dispose(),Ce.dispose(),M.dispose(),V.dispose(),ee.dispose(),tt.dispose(),A.dispose(),Me.dispose(),B.dispose(),B.removeEventListener("sessionstart",$p),B.removeEventListener("sessionend",Yp),Ar.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Ye.autoReset,I=ge.enabled,G=ge.autoUpdate,W=ge.needsUpdate,F=ge.type;j(),Ye.autoReset=E,ge.enabled=I,ge.autoUpdate=G,ge.needsUpdate=W,ge.type=F}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){const I=E.target;I.removeEventListener("dispose",$e),ot(I)}function ot(E){Ot(E),Ce.remove(E)}function Ot(E){const I=Ce.get(E).programs;I!==void 0&&(I.forEach(function(G){Me.releaseProgram(G)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,G,W,F,ue){I===null&&(I=Be);const pe=F.isMesh&&F.matrixWorld.determinant()<0,ye=Hy(E,I,G,W,F);Pe.setMaterial(W,pe);let Se=G.index,Le=1;if(W.wireframe===!0){if(Se=ne.getWireframeAttribute(G),Se===void 0)return;Le=2}const De=G.drawRange,we=G.attributes.position;let nt=De.start*Le,ut=(De.start+De.count)*Le;ue!==null&&(nt=Math.max(nt,ue.start*Le),ut=Math.min(ut,(ue.start+ue.count)*Le)),Se!==null?(nt=Math.max(nt,0),ut=Math.min(ut,Se.count)):we!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,we.count));const xt=ut-nt;if(xt<0||xt===1/0)return;tt.setup(F,W,ye,G,Se);let Sn,Je=ve;if(Se!==null&&(Sn=te.get(Se),Je=Xe,Je.setIndex(Sn)),F.isMesh)W.wireframe===!0?(Pe.setLineWidth(W.wireframeLinewidth*Ve()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(F.isLine){let Te=W.linewidth;Te===void 0&&(Te=1),Pe.setLineWidth(Te*Ve()),F.isLineSegments?Je.setMode(N.LINES):F.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else F.isPoints?Je.setMode(N.POINTS):F.isSprite&&Je.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,kt=F._multiDrawCounts,et=F._multiDrawCount,Gn=Se?te.get(Se).bytesPerElement:1,os=Ce.get(W).currentProgram.getUniforms();for(let Mn=0;Mn<et;Mn++)os.setValue(N,"_gl_DrawID",Mn),Je.render(Te[Mn]/Gn,kt[Mn])}else if(F.isInstancedMesh)Je.renderInstances(nt,xt,F.count);else if(G.isInstancedBufferGeometry){const Te=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,kt=Math.min(G.instanceCount,Te);Je.renderInstances(nt,xt,kt)}else Je.render(nt,xt)};function Ke(E,I,G){E.transparent===!0&&E.side===bn&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,Oa(E,I,G),E.side=Bi,E.needsUpdate=!0,Oa(E,I,G),E.side=bn):Oa(E,I,G)}this.compile=function(E,I,G=null){G===null&&(G=E),m=We.get(G),m.init(I),x.push(m),G.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),E!==G&&E.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ue=F.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const ye=ue[pe];Ke(ye,G,F),W.add(ye)}else Ke(ue,G,F),W.add(ue)}),x.pop(),m=null,W},this.compileAsync=function(E,I,G=null){const W=this.compile(E,I,G);return new Promise(F=>{function ue(){if(W.forEach(function(pe){Ce.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){F(E);return}setTimeout(ue,10)}Ge.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let fn=null;function vi(E){fn&&fn(E)}function $p(){Ar.stop()}function Yp(){Ar.start()}const Ar=new ey;Ar.setAnimationLoop(vi),typeof self<"u"&&Ar.setContext(self),this.setAnimationLoop=function(E){fn=E,B.setAnimationLoop(E),E===null?Ar.stop():Ar.start()},B.addEventListener("sessionstart",$p),B.addEventListener("sessionend",Yp),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(I),I=B.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,I,T),m=We.get(E,x.length),m.init(I),x.push(m),ae.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ze.setFromProjectionMatrix(ae),q=this.localClippingEnabled,$=se.init(this.clippingPlanes,q),_=me.get(E,d.length),_.init(),d.push(_),B.enabled===!0&&B.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&Xc(ue,I,-1/0,v.sortObjects)}Xc(E,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(D,Z),Qe=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Qe&&be.addToRenderList(_,E),this.info.render.frame++,$===!0&&se.beginShadows();const G=m.state.shadowsArray;ge.render(G,E,I),$===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(m.setupLights(),I.isArrayCamera){const ue=I.cameras;if(F.length>0)for(let pe=0,ye=ue.length;pe<ye;pe++){const Se=ue[pe];Kp(W,F,E,Se)}Qe&&be.render(E);for(let pe=0,ye=ue.length;pe<ye;pe++){const Se=ue[pe];qp(_,E,Se,Se.viewport)}}else F.length>0&&Kp(W,F,E,I),Qe&&be.render(E),qp(_,E,I);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,I),tt.resetDefaultState(),L=-1,X=null,x.pop(),x.length>0?(m=x[x.length-1],$===!0&&se.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Xc(E,I,G,W){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){W&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const pe=ee.update(E),ye=E.material;ye.visible&&_.push(E,pe,ye,G,Ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const pe=ee.update(E),ye=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ae.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ae.copy(pe.boundingSphere.center)),Ae.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(ye)){const Se=pe.groups;for(let Le=0,De=Se.length;Le<De;Le++){const we=Se[Le],nt=ye[we.materialIndex];nt&&nt.visible&&_.push(E,pe,nt,G,Ae.z,we)}}else ye.visible&&_.push(E,pe,ye,G,Ae.z,null)}}const ue=E.children;for(let pe=0,ye=ue.length;pe<ye;pe++)Xc(ue[pe],I,G,W)}function qp(E,I,G,W){const F=E.opaque,ue=E.transmissive,pe=E.transparent;m.setupLightsView(G),$===!0&&se.setGlobalState(v.clippingPlanes,G),W&&Pe.viewport(y.copy(W)),F.length>0&&Fa(F,I,G),ue.length>0&&Fa(ue,I,G),pe.length>0&&Fa(pe,I,G),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Kp(E,I,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new xr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?so:mi,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ue=m.state.transmissionRenderTarget[W.id],pe=W.viewport||y;ue.setSize(pe.z,pe.w);const ye=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(k),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Qe&&be.render(G);const Se=v.toneMapping;v.toneMapping=Ni;const Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),$===!0&&se.setGlobalState(v.clippingPlanes,W),Fa(E,G,W),C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let we=0,nt=I.length;we<nt;we++){const ut=I[we],xt=ut.object,Sn=ut.geometry,Je=ut.material,Te=ut.group;if(Je.side===bn&&xt.layers.test(W.layers)){const kt=Je.side;Je.side=un,Je.needsUpdate=!0,Zp(xt,G,W,Sn,Je,Te),Je.side=kt,Je.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue))}v.setRenderTarget(ye),v.setClearColor(k,z),Le!==void 0&&(W.viewport=Le),v.toneMapping=Se}function Fa(E,I,G){const W=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ue=E.length;F<ue;F++){const pe=E[F],ye=pe.object,Se=pe.geometry,Le=W===null?pe.material:W,De=pe.group;ye.layers.test(G.layers)&&Zp(ye,I,G,Se,Le,De)}}function Zp(E,I,G,W,F,ue){E.onBeforeRender(v,I,G,W,F,ue),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,I,G,W,E,ue),F.transparent===!0&&F.side===bn&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,v.renderBufferDirect(G,I,W,F,E,ue),F.side=Bi,F.needsUpdate=!0,v.renderBufferDirect(G,I,W,F,E,ue),F.side=bn):v.renderBufferDirect(G,I,W,F,E,ue),E.onAfterRender(v,I,G,W,F,ue)}function Oa(E,I,G){I.isScene!==!0&&(I=Be);const W=Ce.get(E),F=m.state.lights,ue=m.state.shadowsArray,pe=F.state.version,ye=Me.getParameters(E,F.state,ue,I,G),Se=Me.getProgramCacheKey(ye);let Le=W.programs;W.environment=E.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(E.isMeshStandardMaterial?V:M).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",$e),Le=new Map,W.programs=Le);let De=Le.get(Se);if(De!==void 0){if(W.currentProgram===De&&W.lightsStateVersion===pe)return Jp(E,ye),De}else ye.uniforms=Me.getUniforms(E),E.onBeforeCompile(ye,v),De=Me.acquireProgram(ye,Se),Le.set(Se,De),W.uniforms=ye.uniforms;const we=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=se.uniform),Jp(E,ye),W.needsLights=Gy(E),W.lightsStateVersion=pe,W.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=De,W.uniformsList=null,De}function Qp(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Kl.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Jp(E,I){const G=Ce.get(E);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Hy(E,I,G,W,F){I.isScene!==!0&&(I=Be),C.resetTextureUnits();const ue=I.fog,pe=W.isMeshStandardMaterial?I.environment:null,ye=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Vi,Se=(W.isMeshStandardMaterial?V:M).get(W.envMap||pe),Le=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color;let xt=Ni;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=v.toneMapping);const Sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Je=Sn!==void 0?Sn.length:0,Te=Ce.get(W),kt=m.state.lights;if($===!0&&(q===!0||E!==X)){const Nn=E===X&&W.id===L;se.setState(W,E,Nn)}let et=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==kt.state.version||Te.outputColorSpace!==ye||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==Se||W.fog===!0&&Te.fog!==ue||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==De||Te.morphTargets!==we||Te.morphNormals!==nt||Te.morphColors!==ut||Te.toneMapping!==xt||Te.morphTargetsCount!==Je)&&(et=!0):(et=!0,Te.__version=W.version);let Gn=Te.currentProgram;et===!0&&(Gn=Oa(W,I,F));let os=!1,Mn=!1,$c=!1;const St=Gn.getUniforms(),Wi=Te.uniforms;if(Pe.useProgram(Gn.program)&&(os=!0,Mn=!0,$c=!0),W.id!==L&&(L=W.id,Mn=!0),os||X!==E){ke.reverseDepthBuffer?(le.copy(E.projectionMatrix),tE(le),nE(le),St.setValue(N,"projectionMatrix",le)):St.setValue(N,"projectionMatrix",E.projectionMatrix),St.setValue(N,"viewMatrix",E.matrixWorldInverse);const Nn=St.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,Ee.setFromMatrixPosition(E.matrixWorld)),ke.logarithmicDepthBuffer&&St.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,Mn=!0,$c=!0)}if(F.isSkinnedMesh){St.setOptional(N,F,"bindMatrix"),St.setOptional(N,F,"bindMatrixInverse");const Nn=F.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),St.setValue(N,"boneTexture",Nn.boneTexture,C))}F.isBatchedMesh&&(St.setOptional(N,F,"batchingTexture"),St.setValue(N,"batchingTexture",F._matricesTexture,C),St.setOptional(N,F,"batchingIdTexture"),St.setValue(N,"batchingIdTexture",F._indirectTexture,C),St.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&St.setValue(N,"batchingColorTexture",F._colorsTexture,C));const Yc=G.morphAttributes;if((Yc.position!==void 0||Yc.normal!==void 0||Yc.color!==void 0)&&Re.update(F,G,Gn),(Mn||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,St.setValue(N,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wi.envMap.value=Se,Wi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&(Wi.envMapIntensity.value=I.environmentIntensity),Mn&&(St.setValue(N,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&Vy(Wi,$c),ue&&W.fog===!0&&he.refreshFogUniforms(Wi,ue),he.refreshMaterialUniforms(Wi,W,K,H,m.state.transmissionRenderTarget[E.id]),Kl.upload(N,Qp(Te),Wi,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Kl.upload(N,Qp(Te),Wi,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(N,"center",F.center),St.setValue(N,"modelViewMatrix",F.modelViewMatrix),St.setValue(N,"normalMatrix",F.normalMatrix),St.setValue(N,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Nn=W.uniformsGroups;for(let qc=0,Wy=Nn.length;qc<Wy;qc++){const em=Nn[qc];A.update(em,Gn),A.bind(em,Gn)}}return Gn}function Vy(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Gy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,I,G){Ce.get(E.texture).__webglTexture=I,Ce.get(E.depthTexture).__webglTexture=G;const W=Ce.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const G=Ce.get(E);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,G=0){T=E,P=I,R=G;let W=!0,F=null,ue=!1,pe=!1;if(E){const Se=Ce.get(E);if(Se.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Se.__hasExternalTextures)C.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Ce.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const De=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[I])?F=De[I][G]:F=De[I],ue=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=Ce.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[G]:F=De,y.copy(E.viewport),w.copy(E.scissor),O=E.scissorTest}else y.copy(Y).multiplyScalar(K).floor(),w.copy(oe).multiplyScalar(K).floor(),O=xe;if(Pe.bindFramebuffer(N.FRAMEBUFFER,F)&&W&&Pe.drawBuffers(E,F),Pe.viewport(y),Pe.scissor(w),Pe.setScissorTest(O),ue){const Se=Ce.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,G)}else if(pe){const Se=Ce.get(E.texture),Le=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Le)}L=-1},this.readRenderTargetPixels=function(E,I,G,W,F,ue,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){Pe.bindFramebuffer(N.FRAMEBUFFER,ye);try{const Se=E.texture,Le=Se.format,De=Se.type;if(!ke.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-W&&G>=0&&G<=E.height-F&&N.readPixels(I,G,W,F,Ne.convert(Le),Ne.convert(De),ue)}finally{const Se=T!==null?Ce.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,I,G,W,F,ue,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){const Se=E.texture,Le=Se.format,De=Se.type;if(!ke.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-W&&G>=0&&G<=E.height-F){Pe.bindFramebuffer(N.FRAMEBUFFER,ye);const we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),N.readPixels(I,G,W,F,Ne.convert(Le),Ne.convert(De),0);const nt=T!==null?Ce.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,nt);const ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await eE(N,ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.deleteBuffer(we),N.deleteSync(ut),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,G=0){E.isTexture!==!0&&(ql("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),F=Math.floor(E.image.width*W),ue=Math.floor(E.image.height*W),pe=I!==null?I.x:0,ye=I!==null?I.y:0;C.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,pe,ye,F,ue),Pe.unbindTexture()},this.copyTextureToTexture=function(E,I,G=null,W=null,F=0){E.isTexture!==!0&&(ql("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],I=arguments[2],F=arguments[3]||0,G=null);let ue,pe,ye,Se,Le,De;G!==null?(ue=G.max.x-G.min.x,pe=G.max.y-G.min.y,ye=G.min.x,Se=G.min.y):(ue=E.image.width,pe=E.image.height,ye=0,Se=0),W!==null?(Le=W.x,De=W.y):(Le=0,De=0);const we=Ne.convert(I.format),nt=Ne.convert(I.type);C.setTexture2D(I,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const ut=N.getParameter(N.UNPACK_ROW_LENGTH),xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Sn=N.getParameter(N.UNPACK_SKIP_PIXELS),Je=N.getParameter(N.UNPACK_SKIP_ROWS),Te=N.getParameter(N.UNPACK_SKIP_IMAGES),kt=E.isCompressedTexture?E.mipmaps[F]:E.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,kt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,kt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,Se),E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Le,De,ue,pe,we,nt,kt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Le,De,kt.width,kt.height,we,kt.data):N.texSubImage2D(N.TEXTURE_2D,F,Le,De,ue,pe,we,nt,kt),N.pixelStorei(N.UNPACK_ROW_LENGTH,ut),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Te),F===0&&I.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,I,G=null,W=null,F=0){E.isTexture!==!0&&(ql("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],I=arguments[3],F=arguments[4]||0);let ue,pe,ye,Se,Le,De,we,nt,ut;const xt=E.isCompressedTexture?E.mipmaps[F]:E.image;G!==null?(ue=G.max.x-G.min.x,pe=G.max.y-G.min.y,ye=G.max.z-G.min.z,Se=G.min.x,Le=G.min.y,De=G.min.z):(ue=xt.width,pe=xt.height,ye=xt.depth,Se=0,Le=0,De=0),W!==null?(we=W.x,nt=W.y,ut=W.z):(we=0,nt=0,ut=0);const Sn=Ne.convert(I.format),Je=Ne.convert(I.type);let Te;if(I.isData3DTexture)C.setTexture3D(I,0),Te=N.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)C.setTexture2DArray(I,0),Te=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const kt=N.getParameter(N.UNPACK_ROW_LENGTH),et=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Gn=N.getParameter(N.UNPACK_SKIP_PIXELS),os=N.getParameter(N.UNPACK_SKIP_ROWS),Mn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De),E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Te,F,we,nt,ut,ue,pe,ye,Sn,Je,xt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,F,we,nt,ut,ue,pe,ye,Sn,xt.data):N.texSubImage3D(Te,F,we,nt,ut,ue,pe,ye,Sn,Je,xt),N.pixelStorei(N.UNPACK_ROW_LENGTH,kt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,os),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Mn),F===0&&I.generateMipmaps&&N.generateMipmap(Te),Pe.unbindTexture()},this.initRenderTarget=function(E){Ce.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){P=0,R=0,T=null,Pe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kc?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Da?"display-p3":"srgb"}}class hy extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class fy{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=lc,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new U;class Pi{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Jn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Jn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Jn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Jn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ct(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ii extends jt{constructor(e=null,n=1,i=1,r,s,o,a,l,u=It,c=It,h,f){super(null,o,a,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dy extends ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uc=new U,cc=new U,n0=new dt,Mo=new Na,Sl=new Tr,Qh=new U,i0=new U;let py=class extends tn{constructor(e=new wt,n=new dy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)uc.fromBufferAttribute(n,r-1),cc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=uc.distanceTo(cc);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),Sl.radius+=s,e.ray.intersectsSphere(Sl)===!1)return;n0.copy(r).invert(),Mo.copy(e.ray).applyMatrix4(n0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=c.getX(_),x=c.getX(_+1),v=Ml(this,e,Mo,l,d,x);v&&n.push(v)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(p),d=Ml(this,e,Mo,l,_,m);d&&n.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=Ml(this,e,Mo,l,_,_+1);d&&n.push(d)}if(this.isLineLoop){const _=Ml(this,e,Mo,l,g-1,p);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ml(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(uc.fromBufferAttribute(o,r),cc.fromBufferAttribute(o,s),n.distanceSqToSegment(uc,cc,Qh,i0)>i)return;Qh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Qh);if(!(l<e.near||l>e.far))return{distance:l,point:i0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const r0=new U,s0=new U;class my extends py{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)r0.fromBufferAttribute(n,r),s0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+r0.distanceTo(s0);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gy extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const o0=new dt,hd=new Na,wl=new Tr,El=new U;class Vp extends tn{constructor(e=new wt,n=new gy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;o0.copy(r).invert(),hd.copy(e.ray).applyMatrix4(o0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);El.fromBufferAttribute(h,m),a0(El,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)El.fromBufferAttribute(h,g),a0(El,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function a0(t,e,n,i,r,s,o){const a=hd.distanceSqToPoint(t);if(a<n){const l=new U;hd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}const nb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=vy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,h,f,p;if(i&&(s=ab(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let g=n;g<r;g+=n)h=t[g],f=t[g+1],h<a&&(a=h),f<l&&(l=f),h>u&&(u=h),f>c&&(c=f);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return ya(s,o,n,a,l,p,0),o}};function vy(t,e,n,i,r){let s,o;if(r===_b(t,e,n,i)>0)for(s=e;s<n;s+=i)o=l0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=l0(s,t[s],t[s+1],o);return o&&Vc(o,o.next)&&(Ma(o),o=o.next),o}function ns(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Vc(n,n.next)||mt(n.prev,n,n.next)===0)){if(Ma(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ya(t,e,n,i,r,s,o){if(!t)return;!o&&s&&fb(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?rb(t,i,r,s):ib(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),Ma(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=sb(ns(t),e,n),ya(t,e,n,i,r,s,2)):o===2&&ob(t,e,n,i,r,s):ya(ns(t),e,n,i,r,s,1);break}}}function ib(t){const e=t.prev,n=t,i=t.next;if(mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=f&&g.y>=h&&g.y<=p&&Os(r,a,s,l,o,u,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,h=s.y,f=o.y,p=a<l?a<u?a:u:l<u?l:u,g=c<h?c<f?c:f:h<f?h:f,_=a>l?a>u?a:u:l>u?l:u,m=c>h?c>f?c:f:h>f?h:f,d=fd(p,g,e,n,i),x=fd(_,m,e,n,i);let v=t.prevZ,S=t.nextZ;for(;v&&v.z>=d&&S&&S.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Os(a,c,l,h,u,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Os(a,c,l,h,u,f,S.x,S.y)&&mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Os(a,c,l,h,u,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Os(a,c,l,h,u,f,S.x,S.y)&&mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function sb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Vc(r,s)&&_y(r,i,i.next,s)&&Sa(r,s)&&Sa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Ma(i),Ma(i.next),i=t=s),i=i.next}while(i!==t);return ns(i)}function ob(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mb(o,a)){let l=xy(o,a);o=ns(o,o.next),l=ns(l,l.next),ya(o,e,n,i,r,s,0),ya(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function ab(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=vy(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(pb(u));for(r.sort(lb),s=0;s<r.length;s++)n=ub(r[s],n);return n}function lb(t,e){return t.x-e.x}function ub(t,e){const n=cb(t,e);if(!n)return e;const i=xy(n,t);return ns(i,i.next),ns(n,n.next)}function cb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Os(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Sa(n,t)&&(h<c||h===c&&(n.x>r.x||n.x===r.x&&hb(r,n)))&&(r=n,c=h)),n=n.next;while(n!==a);return r}function hb(t,e){return mt(t.prev,t,e.prev)<0&&mt(e.next,t,t.next)<0}function fb(t,e,n,i){let r=t;do r.z===0&&(r.z=fd(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,db(r)}function db(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function fd(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function pb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Os(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function mb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!gb(t,e)&&(Sa(t,e)&&Sa(e,t)&&vb(t,e)&&(mt(t.prev,t,e.prev)||mt(t,e.prev,e))||Vc(t,e)&&mt(t.prev,t,t.next)>0&&mt(e.prev,e,e.next)>0)}function mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Vc(t,e){return t.x===e.x&&t.y===e.y}function _y(t,e,n,i){const r=Al(mt(t,e,n)),s=Al(mt(t,e,i)),o=Al(mt(n,i,t)),a=Al(mt(n,i,e));return!!(r!==s&&o!==a||r===0&&Tl(t,n,e)||s===0&&Tl(t,i,e)||o===0&&Tl(n,t,i)||a===0&&Tl(n,e,i))}function Tl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Al(t){return t>0?1:t<0?-1:0}function gb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&_y(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Sa(t,e){return mt(t.prev,t,t.next)<0?mt(t,e,t.next)>=0&&mt(t,t.prev,e)>=0:mt(t,e,t.prev)<0||mt(t,t.next,e)<0}function vb(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function xy(t,e){const n=new dd(t.i,t.x,t.y),i=new dd(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function l0(t,e,n,i){const r=new dd(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ma(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function dd(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _b(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Ia{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ia.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];u0(e),c0(i,e);let o=e.length;n.forEach(u0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,c0(i,n[l]);const a=nb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function u0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function c0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class yy extends wt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new U,s=new U;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,c=l.length;u<c;++u){const h=l[u],f=h.start,p=h.count;for(let g=f,_=f+p;g<_;g+=3)for(let m=0;m<3;m++){const d=a.getX(g+m),x=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,d),s.fromBufferAttribute(o,x),h0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let u=0;u<3;u++){const c=3*a+u,h=3*a+(u+1)%3;r.fromBufferAttribute(o,c),s.fromBufferAttribute(o,h),h0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new gt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function h0(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}const pd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Sy{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const My=new Sy;class Gc{constructor(e){this.manager=e!==void 0?e:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";class wy extends Gc{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pd.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=xa("img");function l(){c(),pd.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(h){c(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Gp extends Gc{constructor(e){super(e)}load(e,n,i,r){const s=new jt,o=new wy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Ey extends wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ty{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=f0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=f0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function f0(){return performance.now()}class hc extends fy{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class fc{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const d0=new U,bl=new U;class Ay{constructor(e=new U,n=new U){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){d0.subVectors(e,this.start),bl.subVectors(this.end,this.start);const i=bl.dot(bl);let s=bl.dot(d0)/i;return n&&(s=Gt(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class by extends Er{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);const Cy=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Rx,AddEquation:ir,AddOperation:Tx,AdditiveBlending:id,AgXToneMapping:Lx,AlphaFormat:Tp,AlwaysCompare:Wx,AlwaysDepth:Au,AlwaysStencilFunc:od,ArrayCamera:uy,BackSide:un,BasicDepthPacking:Ux,Box3:Gi,BoxGeometry:oo,BufferAttribute:Ct,BufferGeometry:wt,ByteType:Mp,Cache:pd,Camera:Op,CineonToneMapping:Cx,ClampToEdgeWrapping:or,Clock:Ty,Color:Oe,ColorManagement:Ze,ConstantAlphaFactor:Mx,ConstantColorFactor:yx,Controls:by,CubeCamera:Qx,CubeReflectionMapping:Qr,CubeRefractionMapping:Jr,CubeTexture:kp,CubeUVReflectionMapping:Ra,CullFaceBack:nd,CullFaceFront:rx,CullFaceNone:ix,CustomBlending:ox,CustomToneMapping:Px,Data3DTexture:qx,DataArrayTexture:zc,DataTexture:Ii,DefaultLoadingManager:My,DepthFormat:Wr,DepthStencilFormat:ts,DepthTexture:Hp,DisplayP3ColorSpace:kc,DoubleSide:bn,DstAlphaFactor:mx,DstColorFactor:vx,DynamicDrawUsage:ad,EqualCompare:Bx,EqualDepth:Cu,EquirectangularReflectionMapping:Du,EquirectangularRefractionMapping:Nu,Euler:gi,EventDispatcher:Er,Float32BufferAttribute:gt,FloatType:ci,FrontSide:Bi,Frustum:zp,GLSL3:ld,GreaterCompare:Hx,GreaterDepth:Pu,GreaterEqualCompare:Gx,GreaterEqualDepth:Ru,Group:Fs,HalfFloatType:so,ImageLoader:wy,ImageUtils:$x,InstancedBufferGeometry:Ey,InstancedInterleavedBuffer:hc,IntType:Dc,InterleavedBuffer:fy,InterleavedBufferAttribute:Pi,KeepStencilOp:Ir,Layers:Np,LessCompare:zx,LessDepth:bu,LessEqualCompare:Pp,LessEqualDepth:Zr,Line:py,Line3:Ay,LineBasicMaterial:dy,LineSegments:my,LinearDisplayP3ColorSpace:Da,LinearFilter:Jt,LinearMipmapLinearFilter:Ri,LinearMipmapNearestFilter:Yl,LinearSRGBColorSpace:Vi,LinearToneMapping:Ax,LinearTransfer:pa,Loader:Gc,LoadingManager:Sy,LuminanceAlphaFormat:Cp,LuminanceFormat:bp,MOUSE:pi,Material:ss,MathUtils:eo,Matrix3:Fe,Matrix4:dt,MaxEquation:cx,Mesh:en,MeshBasicMaterial:Up,MeshDepthMaterial:oy,MeshDistanceMaterial:ay,MinEquation:ux,MirroredRepeatWrapping:Iu,MixOperation:Ex,MultiplyBlending:sd,MultiplyOperation:yp,NearestFilter:It,NearestMipmapLinearFilter:Po,NearestMipmapNearestFilter:Nx,NeutralToneMapping:Dx,NeverCompare:kx,NeverDepth:Tu,NoBlending:Di,NoColorSpace:On,NoToneMapping:Ni,NormalBlending:Gr,NotEqualCompare:Vx,NotEqualDepth:Lu,Object3D:tn,ObjectSpaceNormalMap:Ox,OneFactor:fx,OneMinusConstantAlphaFactor:wx,OneMinusConstantColorFactor:Sx,OneMinusDstAlphaFactor:gx,OneMinusDstColorFactor:_x,OneMinusSrcAlphaFactor:Eu,OneMinusSrcColorFactor:px,OrthographicCamera:ty,P3Primaries:ga,PCFShadowMap:xp,PCFSoftShadowMap:sx,PMREMGenerator:ud,PerspectiveCamera:An,Plane:Ti,PlaneGeometry:Ua,Points:Vp,PointsMaterial:gy,Quaternion:yr,RED_GREEN_RGTC2_Format:oc,RED_RGTC1_Format:Rp,REVISION:Lc,RGBADepthPacking:Ix,RGBAFormat:vn,RGBAIntegerFormat:Oc,RGBA_ASTC_10x10_Format:ec,RGBA_ASTC_10x5_Format:Zu,RGBA_ASTC_10x6_Format:Qu,RGBA_ASTC_10x8_Format:Ju,RGBA_ASTC_12x10_Format:tc,RGBA_ASTC_12x12_Format:nc,RGBA_ASTC_4x4_Format:Gu,RGBA_ASTC_5x4_Format:Wu,RGBA_ASTC_5x5_Format:ju,RGBA_ASTC_6x5_Format:Xu,RGBA_ASTC_6x6_Format:$u,RGBA_ASTC_8x5_Format:Yu,RGBA_ASTC_8x6_Format:qu,RGBA_ASTC_8x8_Format:Ku,RGBA_BPTC_Format:Xo,RGBA_ETC2_EAC_Format:Vu,RGBA_PVRTC_2BPPV1_Format:zu,RGBA_PVRTC_4BPPV1_Format:ku,RGBA_S3TC_DXT1_Format:Go,RGBA_S3TC_DXT3_Format:Wo,RGBA_S3TC_DXT5_Format:jo,RGBFormat:Ap,RGB_BPTC_SIGNED_Format:ic,RGB_BPTC_UNSIGNED_Format:rc,RGB_ETC1_Format:Bu,RGB_ETC2_Format:Hu,RGB_PVRTC_2BPPV1_Format:Ou,RGB_PVRTC_4BPPV1_Format:Fu,RGB_S3TC_DXT1_Format:Vo,RGFormat:La,RGIntegerFormat:Fc,Ray:Na,Rec709Primaries:ma,RedFormat:Pa,RedIntegerFormat:Ic,ReinhardToneMapping:bx,RenderTarget:Yx,RepeatWrapping:Uu,ReverseSubtractEquation:lx,SIGNED_RED_GREEN_RGTC2_Format:ac,SIGNED_RED_RGTC1_Format:sc,SRGBColorSpace:Zn,SRGBTransfer:at,Scene:hy,ShaderChunk:Ie,ShaderLib:an,ShaderMaterial:$t,ShapeUtils:Ia,ShortType:wp,Source:Dp,Sphere:Tr,Spherical:fc,SrcAlphaFactor:wu,SrcAlphaSaturateFactor:xx,SrcColorFactor:dx,StaticDrawUsage:lc,SubtractEquation:ax,SubtractiveBlending:rd,TOUCH:Ci,TangentSpaceNormalMap:Fx,Texture:jt,TextureLoader:Gp,Triangle:kn,UVMapping:Sp,Uint16BufferAttribute:Ip,Uint32BufferAttribute:Fp,UniformsLib:fe,UniformsUtils:Bc,UnsignedByteType:mi,UnsignedInt248Type:es,UnsignedInt5999Type:Ep,UnsignedIntType:_r,UnsignedShort4444Type:Nc,UnsignedShort5551Type:Uc,UnsignedShortType:Js,VSMShadowMap:ai,Vector2:Ue,Vector3:U,Vector4:He,WebGLCoordinateSystem:hi,WebGLCubeRenderTarget:Jx,WebGLRenderTarget:xr,WebGLRenderer:cy,WebGLUtils:ly,WebGPUCoordinateSystem:va,WireframeGeometry:yy,ZeroFactor:hx,createCanvasElement:Xx},Symbol.toStringTag,{value:"Module"})),md={rate:{unit:"mm/h",stops:[.1,.5,1,2,4,7,12,20,35,60]},accum:{unit:"mm",stops:[1,5,10,20,35,50,75,100,150,250]},temp:{unit:"°C",stops:[-15,-8,-3,0,4,8,12,16,20,26]}},gd=["#7fb5d9","#4f93cf","#2f6fc0","#21a6a6","#47b04a","#c3d43a","#f5c22e","#f07c22","#de3a3a","#b0249e"],Ry=["#7b4fb0","#4a5fc1","#3f8fd2","#4fb7d6","#5fc39a","#9ccf62","#e4d65a","#f2a64a","#e8683a","#b8312f"],p0={rate:100,accum:600},xb=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,yb=`
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
  }`,m0=t=>t.map(e=>new Oe(e));class Sb{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,doc:i,U:r});const s=i.grids.rain;this.box={west:s.west,east:s.east,south:s.south,north:s.north};const o=n.toX(s.west),a=n.toX(s.east),l=n.toZ(s.north),u=n.toZ(s.south),c=new wt;c.setAttribute("position",new gt([o,0,l,a,0,l,o,0,u,a,0,u],3)),c.setAttribute("uv",new gt([0,0,1,0,0,1,1,1],2)),c.setIndex([0,2,1,1,2,3]),this.rainData=new Uint8Array(s.cols*s.rows*2),this.rainTex=new Ii(this.rainData,s.cols,s.rows,La),this.rainTex.magFilter=this.rainTex.minFilter=Jt,this.rainTex.needsUpdate=!0,this.metTex=new Ii(new Uint8Array(4),1,1,vn),this.metTex.needsUpdate=!0,this.uniforms={uRain:{value:this.rainTex},uMet:{value:this.metTex},uMode:{value:0},uMax:{value:p0.rate},uOpacity:{value:.85},uHasRain:{value:0},uHasMet:{value:0},uStops:{value:md.rate.stops.slice()},uColors:{value:m0(gd)}},this.mesh=new en(c,new $t({vertexShader:xb,fragmentShader:yb,uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:bn})),this.mesh.renderOrder=5,this.mesh.frustumCulled=!1,e.add(this.mesh),this.altitude=6,this.fill="rate",this.met=null,this.wind=new Py(e,n,this.box)}setRain(e){const n=this.rainData,i=p0[this.fill==="accum"?"accum":"rate"];if(!e){this.uniforms.uHasRain.value=0;return}for(let r=0;r<e.length;r++){const s=e[r];Number.isNaN(s)?(n[r*2]=0,n[r*2+1]=0):(n[r*2]=Math.min(254,Math.round(254*Math.sqrt(Math.max(0,s)/i))),n[r*2+1]=255)}this.rainTex.needsUpdate=!0,this.uniforms.uHasRain.value=1,this.uniforms.uMax.value=i}setMet(e){if(this.met=e,!e){this.uniforms.uHasMet.value=0,this.wind.setField(null);return}const n=new Ii(e.data,e.grid.cols,e.grid.rows,vn);n.magFilter=n.minFilter=Jt,n.needsUpdate=!0,this.metTex.dispose(),this.metTex=this.uniforms.uMet.value=n,this.uniforms.uHasMet.value=1,this.wind.setField(e)}setFill(e){if(this.fill=e,this.mesh.visible=e!=="off",e==="off")return;const n=md[e];this.uniforms.uMode.value=e==="temp"?2:e==="accum"?1:0,this.uniforms.uStops.value=n.stops.slice(),this.uniforms.uColors.value=m0(e==="temp"?Ry:gd)}setOpacity(e){this.uniforms.uOpacity.value=e}setAltitude(e){this.altitude=e}setWind(e){this.wind.setVisible(e)}update(e,n){const i=this.U.flat.value,r=this.U.exag.value,s=this.altitude*r*(1-i)+.04*i;this.mesh.position.y=s,this.wind.update(e,n,s+.03+.05*i)}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.rainTex.dispose(),this.metTex.dispose(),this.wind.dispose()}}const Mb=3500,wb=8,Eb=(t,e)=>t[e+3]===0?null:[(t[e]-128)/4,(t[e+1]-128)/4],Tb=`
  attribute float alpha; varying float vA;
  void main() { vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Ab=`
  uniform vec3 uColor; uniform float uOpacity; varying float vA;
  void main() { if (vA < 0.01) discard; gl_FragColor = vec4(uColor, vA * uOpacity); }`;class Py{constructor(e,n,i,{n:r=Mb,trail:s=wb,color:o="#f4f6f8",scale:a=1,full:l=15,floor:u=.25,decode:c=Eb,onData:h=!1}={}){Object.assign(this,{scene:e,P:n,box:i,scale:a,full:l,decode:c,onData:h,floor:u}),this.n=r;const f=this.T=s;this.lon=new Float32Array(r),this.lat=new Float32Array(r),this.age=new Float32Array(r),this.life=new Float32Array(r),this.trail=new Float32Array(r*f*2),this.speed=new Float32Array(r),this.pos=new Float32Array(r*(f-1)*2*3),this.alpha=new Float32Array(r*(f-1)*2);const p=new wt;p.setAttribute("position",new Ct(this.pos,3).setUsage(ad)),p.setAttribute("alpha",new Ct(this.alpha,1).setUsage(ad)),this.lines=new my(p,new $t({vertexShader:Tb,fragmentShader:Ab,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Oe(o)},uOpacity:{value:.85}}})),this.lines.frustumCulled=!1,this.lines.renderOrder=6,this.lines.visible=!1,e.add(this.lines),this.field=null;for(let g=0;g<r;g++)this._spawn(g,!0)}setField(e){if(this.field=e,this.onData&&e){const n=e.grid,i=[];for(let r=0;r<n.cols*n.rows;r++)this.decode(e.data,r*4)&&i.push(r);this.cells=i}}setVisible(e){this.lines.visible=e}setFocus(e){this.focus=e}_wind(e,n){const i=this.field;if(!i)return null;const r=i.grid,s=Math.floor((e-r.west)/r.cell),o=Math.floor((r.north-n)/r.cell);return s<0||o<0||s>=r.cols||o>=r.rows?null:this.decode(i.data,(o*r.cols+s)*4)}_spawn(e,n=!1){var o,a;const i=this.box,r=this.T,s=(o=this.field)==null?void 0:o.grid;if((a=this.cells)!=null&&a.length&&s){const l=this.focus;for(let u=0;u<40;u++){const c=this.cells[Math.floor(Math.random()*this.cells.length)];if(this.lon[e]=s.west+(c%s.cols+Math.random())*s.cell,this.lat[e]=s.north-(Math.floor(c/s.cols)+Math.random())*s.cell,!l||Math.abs(this.lon[e]-l.lon)<l.dlon&&Math.abs(this.lat[e]-l.lat)<l.dlat)break}}else this.lon[e]=i.west+Math.random()*(i.east-i.west),this.lat[e]=i.south+Math.random()*(i.north-i.south);this.life[e]=60+Math.random()*90,this.age[e]=n?Math.random()*this.life[e]:0;for(let l=0;l<r;l++)this.trail[(e*r+l)*2]=this.lon[e],this.trail[(e*r+l)*2+1]=this.lat[e]}update(e,n,i){if(!this.lines.visible||!this.field){this.lines.visible&&this.alpha.fill(0);return}const r=this.scale*Math.min(n,2500)/250,s=this.P,o=this.trail,a=this.T;for(let u=0;u<this.n;u++){const c=this._wind(this.lon[u],this.lat[u]);if(this.age[u]+=1,!c||this.age[u]>this.life[u]){this._spawn(u);continue}const h=r*e;this.lon[u]+=c[0]*h/(111.32*Math.cos(this.lat[u]*Math.PI/180)),this.lat[u]+=c[1]*h/111.13,this.speed[u]=Math.hypot(c[0],c[1]),o.copyWithin((u*a+1)*2,u*a*2,(u*a+a-1)*2),o[u*a*2]=this.lon[u],o[u*a*2+1]=this.lat[u]}let l=0;for(let u=0;u<this.n;u++){const c=Math.min(1,this.age[u]/10,(this.life[u]-this.age[u])/10),h=Math.min(1,this.floor+this.speed[u]/this.full);for(let f=0;f<a-1;f++)for(const p of[f,f+1]){const g=(u*a+p)*2;this.pos[l*3]=s.toX(o[g]),this.pos[l*3+1]=i,this.pos[l*3+2]=s.toZ(o[g+1]),this.alpha[l]=c*h*(1-p/a),l++}}this.lines.geometry.attributes.position.needsUpdate=!0,this.lines.geometry.attributes.alpha.needsUpdate=!0}dispose(){this.scene.remove(this.lines),this.lines.geometry.dispose(),this.lines.material.dispose()}}const Wc=["#4f9fe0","#f2cf3d","#f39431","#e2483a","#c42b7d","#8a3fb0","#4b237a"],dc=["below high water","high water","2-year flood","5-year flood","10-year flood","25-year flood","50-year flood"],qo=256,bb=.25,vd=60,Ly=.2,Cb=1;function Rb(t,e,n){const i=e[n*6+1];return i>0?t/i:NaN}function Pb(t,e){const n=t/Math.max(e,Ly);return Math.min(4,.2*Math.min(n,1)+.45*Math.log2(Math.max(n,1)))}const Lb=`
  attribute float elev, reach, top; attribute vec2 side;
  uniform sampler2D uFlow; uniform float uExag, uFlat, uWallK;
  varying float vTop, vCat;
  void main() {
    vec4 f = texelFetch(uFlow, ivec2(int(mod(reach, ${qo}.0)), int(reach / ${qo}.0)), 0);
    float b = floor(f.r * 255.0 + 0.5);
    vCat = b > 254.5 ? -1.0 : floor(f.g * 255.0 + 0.5);
    vTop = top;
    float s = uWallK * f.b * 255.0 / ${vd}.0;   // see wallUnits
    vec3 p = position;
    p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.01 + top * s * (1.0 - uFlat) + 0.05 * uFlat;
    p.xz += side * (top - 0.5) * s * ${bb} * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`,Db=`
  uniform vec3 uColors[7]; uniform float uOpacity, uFlat, uWhatIf;
  varying float vTop, vCat;
  void main() {
    if (vCat < -0.5) discard;
    // a what-if hour (a forecast, not the record): diagonal stripes, half see-through
    if (uWhatIf > 0.5 && mod(gl_FragCoord.x + gl_FragCoord.y, 9.0) < 4.0) discard;
    vec3 c = uColors[int(vCat + 0.5)];
    // a wall: solid at the water line, fading upward, with a bright crest; a ribbon: solid with lighter edges
    float crest = smoothstep(0.9, 1.0, vTop) * (1.0 - uFlat);
    float edge = uFlat * smoothstep(0.3, 0.5, abs(vTop - 0.5));
    c = mix(c, vec3(1.0), 0.35 * crest + 0.25 * edge);
    float a = mix(mix(0.92, 0.5, vTop), 0.9, uFlat) * (vCat > 0.5 ? 1.0 : 0.7);   // flooding reaches stand out
    gl_FragColor = vec4(c, a * uOpacity);
  }`;class Nb{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,reaches:i,U:r});const s=i.count,o=Math.ceil(s/qo);this.flowData=new Uint8Array(qo*o*4);for(let a=0;a<s;a++)this.flowData[a*4]=255;this.flow=new Ii(this.flowData,qo,o),this.flow.magFilter=this.flow.minFilter=It,this.flow.needsUpdate=!0,this.bytes=new Uint8Array(s).fill(255),this.wallK={value:1},this.opacity={value:1},this.whatIf={value:0},this.geometry=this._geometry(),this.mesh=new en(this.geometry,new $t({vertexShader:Lb,fragmentShader:Db,transparent:!0,depthWrite:!1,side:bn,uniforms:{uFlow:{value:this.flow},uExag:r.exag,uFlat:r.flat,uWallK:this.wallK,uOpacity:this.opacity,uWhatIf:this.whatIf,uColors:{value:Wc.map(a=>new Oe(a))}}})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,e.add(this.mesh)}_geometry(){const{offsets:e,owner:n,coords:i,paths:r}=this.reaches,s=this.P,o=i.length/2,a=new Float32Array(o*2*3),l=new Float32Array(o*2),u=new Float32Array(o*2),c=new Float32Array(o*2),h=new Float32Array(o*2*2),f=[];this.xz=new Float32Array(o*2);for(let g=0;g<o;g++)this.xz[g*2]=s.toX(i[g*2]),this.xz[g*2+1]=s.toZ(i[g*2+1]);for(let g=0;g<r;g++){const _=e[g],m=e[g+1];for(let d=_;d<m;d++){const x=Math.max(_,d-1),v=Math.min(m-1,d+1);let S=this.xz[v*2]-this.xz[x*2],P=this.xz[v*2+1]-this.xz[x*2+1];const R=Math.hypot(S,P)||1;S/=R,P/=R;for(let T=0;T<2;T++){const L=d*2+T;a[L*3]=this.xz[d*2],a[L*3+2]=this.xz[d*2+1],u[L]=n[g],c[L]=T,h[L*2]=-P,h[L*2+1]=S}if(d<m-1){const T=d*2;f.push(T,T+1,T+2,T+2,T+1,T+3)}}}const p=new wt;return p.setAttribute("position",new Ct(a,3)),p.setAttribute("elev",new Ct(l,1)),p.setAttribute("reach",new Ct(u,1)),p.setAttribute("top",new Ct(c,1)),p.setAttribute("side",new Ct(h,2)),p.setIndex(f),p}drape(e){const{coords:n}=this.reaches,i=this.geometry.attributes.elev.array;for(let r=0;r<n.length/2;r++)i[r*2]=i[r*2+1]=e(n[r*2],n[r*2+1])??0;this.geometry.attributes.elev.needsUpdate=!0}setBaseline(e){const{count:n,thr:i}=this.reaches;this.base=new Float32Array(n),this.unflagged=new Uint8Array(n);for(let r=0;r<n;r++){const s=wh(e[r]);this.base[r]=Number.isNaN(s)?NaN:s,this.unflagged[r]=i[r*6]<Cb||s>=i[r*6]?1:0}this.raw&&this.setFlows(this.raw)}setFlows(e){var s,o;const{count:n,thr:i}=this.reaches,r=this.flowData;this.raw=e,this.bytes=e??new Uint8Array(n).fill(255),this.counts=new Array(7).fill(0);for(let a=0;a<n;a++){const l=this.bytes[a],u=wh(l),c=(s=this.base)==null?void 0:s[a],h=l===255||(o=this.unflagged)!=null&&o[a]?0:pg(u,i,a);r[a*4]=c===void 0||Number.isNaN(c)?255:l,r[a*4+1]=h,r[a*4+2]=r[a*4]===255?0:Math.round(Pb(u,c)*vd),r[a*4]!==255&&this.counts[h]++}this.flow.needsUpdate=!0}update(e){this.wallK.value=eo.clamp(e*.02,.01,50)}setVisible(e){this.mesh.visible=e}setOpacity(e){this.opacity.value=e}pick(e,n,i,r,s,o=8){const{offsets:a,owner:l,paths:u}=this.reaches,c=this.geometry.attributes.elev.array,h=this.U,f=.001*h.exag.value*(1-h.flat.value),p=new U,g=(S,P)=>(p.set(this.xz[S*2],c[S*2]*f+.01+P,this.xz[S*2+1]).project(i),p.z<1?[(p.x+1)*r/2,(1-p.y)*s/2]:null);let _=null,m=o;const d=(S,P)=>{if(!S||!P)return 1/0;const R=P[0]-S[0],T=P[1]-S[1],L=R*R+T*T,X=L?Math.max(0,Math.min(1,((e-S[0])*R+(n-S[1])*T)/L)):0;return Math.hypot(e-S[0]-X*R,n-S[1]-X*T)};for(let S=0;S<u;S++){const P=l[S];if(this.bytes[P]===255||this.flowData[P*4]===255)continue;const T=(1-h.flat.value)*this.wallK.value*this.flowData[P*4+2]/vd;let L=g(a[S],0),X=g(a[S],T);for(let y=a[S]+1;y<a[S+1];y++){const w=g(y,0),O=g(y,T),k=Math.min(d(L,w),d(X,O),d(L,X));k<m&&(m=k,_=P),L=w,X=O}}if(_===null)return null;const x=wh(this.bytes[_]),v=Array.from(this.reaches.thr.subarray(_*6,_*6+6));return{reach:_,share:Rb(x,this.reaches.thr,_),rise:x/Math.max(this.base[_],Ly),base:this.base[_],unflagged:!!this.unflagged[_],name:this.reaches.names[this.reaches.name[_]]||"Unnamed stream",order:this.reaches.order[_],q:x,thr:v,cat:this.unflagged[_]?0:pg(x,this.reaches.thr,_)}}dispose(){this.scene.remove(this.mesh),this.geometry.dispose(),this.mesh.material.dispose(),this.flow.dispose()}}const Ub="#ff4f7b",Ib=`
  attribute float elev; uniform float uExag, uFlat;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.012 + 0.04 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`,Fb="uniform vec3 uColor; uniform float uOpacity; void main() { gl_FragColor = vec4(uColor, uOpacity); }",Ob=`
  attribute float elev; uniform float uExag, uFlat;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = 7.0;
  }`,kb=`uniform vec3 uColor; void main() {
    float r = length(gl_PointCoord - 0.5); if (r > 0.5) discard;
    gl_FragColor = vec4(mix(uColor, vec3(0.07), smoothstep(0.32, 0.4, r)), smoothstep(0.5, 0.44, r)); }`;function zb(t){const e=[];for(const n of t){const i=n.map(([r,s])=>new Ue(r,s));Ia.isClockWise(i)||!e.length?e.push([i,[]]):e[e.length-1][1].push(i)}return e}class Bb{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,U:i,elevAt:r});const s={uExag:i.exag,uFlat:i.flat,uColor:{value:new Oe(Ub)},uOpacity:{value:.8}};this.mat=new $t({vertexShader:Ib,fragmentShader:Fb,uniforms:s,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-40,side:bn}),this.dotMat=new $t({vertexShader:Ob,fragmentShader:kb,uniforms:s,transparent:!0,depthTest:!1}),this.mesh=new en(new wt,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,this.dots=new Vp(new wt,this.dotMat),this.dots.frustumCulled=!1,this.dots.renderOrder=12,e.add(this.mesh,this.dots),this.visible=!0}set(e){const n=this.P,i=[],r=[],s=[],o=[],a=[];for(const[,,c]of(e==null?void 0:e.polys)??[]){for(const[f,p]of zb(c)){if(f.length<3)continue;const g=[f,...p].flat(),_=i.length/3;for(const m of g)i.push(n.toX(m.x),0,n.toZ(m.y)),r.push(this.elevAt(m.x,m.y)??0);for(const m of Ia.triangulateShape(f,p))s.push(_+m[0],_+m[1],_+m[2])}const h=c[0]??[];if(h.length){const f=h.reduce((g,_)=>g+_[0],0)/h.length,p=h.reduce((g,_)=>g+_[1],0)/h.length;o.push(n.toX(f),0,n.toZ(p)),a.push(this.elevAt(f,p)??0)}}const l=new wt;l.setAttribute("position",new gt(i,3)),l.setAttribute("elev",new gt(r,1)),l.setIndex(s);const u=new wt;u.setAttribute("position",new gt(o,3)),u.setAttribute("elev",new gt(a,1)),this.mesh.geometry.dispose(),this.dots.geometry.dispose(),this.mesh.geometry=l,this.dots.geometry=u}setVisible(e){this.visible=e,this.mesh.visible=this.dots.visible=e}dispose(){this.scene.remove(this.mesh,this.dots),this.mesh.geometry.dispose(),this.dots.geometry.dispose(),this.mat.dispose(),this.dotMat.dispose()}}class Hb{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,grid:i,U:r}),this.currents=new Py(e,n,i,{n:9e3,trail:16,color:"#ffffff",scale:12,full:.6,floor:.45,onData:!0,decode:(s,o)=>s[o+3]===0?null:[(s[o]-128)/25,(s[o+1]-128)/25]}),this.currents.setVisible(!0)}set(e){this.currents.setField(e?{data:e.data,grid:this.grid}:null)}setCurrents(e){this.currents.setVisible(e)}update(e,n,i){const r=this.U.flat.value,s=.004+.045*r;if(i){const o=this.P.fromZ(i.z),a=Math.max(.05,n*.9/111);this.currents.setFocus({lon:this.P.fromX(i.x),lat:o,dlon:a/Math.cos(o*Math.PI/180),dlat:a})}this.currents.update(e,n,s+.006+.01*r)}dispose(){this.currents.dispose()}}const wa=[25,35,45,58,70,85],_d=["#f2d64b","#f5a031","#ea5a2b","#d2245a","#9b1f9e","#4b1fa8"],Vb=.44704;class Gb{constructor(e,n,i){this.U=e,e.gustRect.value.set(n.toX(i.west),n.toZ(i.north),n.toX(i.east),n.toZ(i.south)),e.gustStops.value=wa.map(r=>r*Vb),e.gustColors.value=_d.map(r=>new Oe(r)),this.grid=i,this.visible=!1,this.has=!1}set(e){var n;if(this.has=!!e,e){const i=this.grid.cols*this.grid.rows,r=new Uint8Array(i*2);for(let o=0;o<i;o++){const a=e.data[o*4];a!==255&&(r[o*2]=Math.min(255,Math.round(a*4)),r[o*2+1]=255)}const s=new Ii(r,this.grid.cols,this.grid.rows,La);s.magFilter=s.minFilter=Jt,s.needsUpdate=!0,(n=this.U.gust.value)==null||n.dispose(),this.U.gust.value=s}this._sync()}setVisible(e){this.visible=e,this._sync()}_sync(){this.U.gustOn.value=this.visible&&this.has?1:0}dispose(){var e;(e=this.U.gust.value)==null||e.dispose(),this.U.gust.value=null,this.U.gustOn.value=0}}const Dy="#ffb020",Wb="#9a9a94",jb=`
  attribute float elev, size, planned; uniform float uExag, uFlat, uDpr; varying float vPlanned;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    vPlanned = planned;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = size * uDpr;
  }`,Xb=`uniform vec3 uColor, uPlanned; varying float vPlanned; void main() {
    float r = length(gl_PointCoord - 0.5); if (r > 0.5) discard;
    vec3 c = mix(uColor, uPlanned, vPlanned);
    gl_FragColor = vec4(mix(c, vec3(0.07), smoothstep(0.36, 0.44, r)), 0.92 * smoothstep(0.5, 0.45, r)); }`,g0=t=>Math.min(30,5+5*Math.log10(Math.max(1,t)));class $b{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,U:i,elevAt:r}),this.mat=new $t({vertexShader:jb,fragmentShader:Xb,transparent:!0,depthTest:!1,uniforms:{uExag:i.exag,uFlat:i.flat,uDpr:{value:Math.min(devicePixelRatio||1,2)},uColor:{value:new Oe(Dy)},uPlanned:{value:new Oe(Wb)}}}),this.points=new Vp(new wt,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=13,e.add(this.points),this.rows=[]}set(e){this.rows=((e==null?void 0:e.out)??[]).slice().sort((a,l)=>a[3]-l[3]);const n=[],i=[],r=[],s=[];for(const[,a,l,u,,,,c]of this.rows)n.push(this.P.toX(l),0,this.P.toZ(a)),i.push(this.elevAt(l,a)??0),r.push(g0(u)),s.push(c);const o=new wt;o.setAttribute("position",new gt(n,3)),o.setAttribute("elev",new gt(i,1)),o.setAttribute("size",new gt(r,1)),o.setAttribute("planned",new gt(s,1)),this.points.geometry.dispose(),this.points.geometry=o}pick(e,n,i,r,s){var c,h;const o=(c=this.points.geometry.attributes.elev)==null?void 0:c.array,a=(h=this.points.geometry.attributes.position)==null?void 0:h.array;if(!o)return null;const l=.001*this.U.exag.value*(1-this.U.flat.value),u=new U;for(let f=this.rows.length-1;f>=0;f--){if(u.set(a[f*3],o[f]*l+.03+.05*this.U.flat.value,a[f*3+2]).project(i),u.z>=1)continue;if(Math.hypot((u.x+1)*r/2-e,(1-u.y)*s/2-n)<=Math.max(5,g0(this.rows[f][3])/2+2))return this.rows[f]}return null}setVisible(e){this.points.visible=e}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.mat.dispose()}}const v0=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",hour:"numeric",minute:"2-digit"}),Yb=t=>{const e=t/36e5;return e<1?`${Math.max(1,Math.round(e*60))} min`:e<48?`${Math.round(e)} h`:`${(e/24).toFixed(1)} days`};function qb({scene:t,layer:e,canvas:n,utilities:i}){const[r,s]=ie.useState(null),o=ie.useRef(0);if(ie.useEffect(()=>{if(!n)return;let m=null;const d=()=>{if(o.current=0,!m||!e.points.visible){s(null);return}const S=n.getBoundingClientRect(),P=e.pick(m.clientX-S.left,m.clientY-S.top,t.camera,S.width,S.height);s(P?{row:P,x:m.clientX,y:m.clientY}:null)},x=S=>{m=S.buttons?null:S,o.current||(o.current=setTimeout(d,90))},v=()=>{m=null,s(null)};return n.addEventListener("pointermove",x),n.addEventListener("pointerleave",v),()=>{n.removeEventListener("pointermove",x),n.removeEventListener("pointerleave",v),clearTimeout(o.current)}},[t,e,n]),!r)return null;const[a,,,l,u,c,h,f,p]=r.row,g=u??c,_=e.at;return b.jsxs("div",{className:"river-tip",style:{left:r.x,top:r.y},role:"tooltip",children:[b.jsxs("b",{children:[l.toLocaleString("en-US")," customer",l===1?"":"s"," out"]}),b.jsxs("div",{className:"src",children:[(i==null?void 0:i[a])??a,f?" · planned work":""]}),h&&b.jsx("div",{className:"mono",children:h}),b.jsxs("div",{className:"mono",children:[u?"out since":"first recorded"," ",v0.format(g),_>g?` · ${Yb(_-g)} by this hour`:""]}),p&&b.jsxs("div",{className:"mono",children:["utility's estimate for restoration: ",v0.format(p)]})]})}function jc(t){const e=[],n=new Set;for(const i of[...t].sort((r,s)=>s.priority-r.priority)){const r=[i.x-4,i.y-i.h/2,i.x+i.w,i.y+i.h/2];e.some(s=>!(r[2]<s[0]||r[0]>s[2]||r[3]<s[1]||r[1]>s[3]))||(n.add(i.id),e.push(r))}return n}function Kb(t,e){return t.kind==="peak"?e<900:t.pop>=15e4?!0:t.pop>=4e4?e<1500:t.pop>=8e3?e<600:e<260}const Zb=t=>t.kind==="peak"?6.5:Math.log10(Math.max(t.pop,10));class Qb{constructor(e,n,i){Object.assign(this,{root:e,places:n,scene:i}),this.el=document.createElement("div"),this.el.className="place-layer",e.appendChild(this.el),this.items=n.map((r,s)=>({...r,id:s,x:i.P.toX(r.lon),z:i.P.toZ(r.lat),node:null,on:!1})),this.visible=!0,this._n=0}_node(e){if(!e.node){const n=document.createElement("div");n.className=`place ${e.kind}${e.pop>=15e4?" major":""}`;const i=document.createElement("span");i.textContent=e.kind==="peak"&&e.height?`${e.name} ${e.height.toLocaleString()} m`:e.name,n.append(document.createElement("i"),i),this.el.appendChild(n),e.node=n,e.w=14+i.textContent.length*(e.kind==="city"?6.6:6.1),e.h=16}return e.node}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=e.e,r=innerWidth,s=innerHeight,o=[];for(const l of this.items){if(!Kb(l,n)){l.cand=!1;continue}const[u,c,h]=e.project(l.x,(l.elev??0)*i+.05,l.z);l.cand=h<1&&u>-40&&u<r+40&&c>-20&&c<s+20,l.cand&&(this._node(l),l.sx=u,l.sy=c,o.push({id:l.id,x:u,y:c,w:l.w,h:l.h,priority:Zb(l)}))}const a=jc(o);for(const l of this.items){const u=l.cand&&a.has(l.id);u&&(l.node.style.transform=`translate(${Math.round(l.sx)}px, ${Math.round(l.sy)}px)`),u!==l.on&&l.node&&(l.node.style.opacity=u?1:0,l.on=u)}}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}function Jb(t){return t.split(",")[0].split(/\s+(?:near|nr|at|hw|pp|on)\s+/i)[0].replace(/\s+\(.*$/,"").toLowerCase().replace(/\b[a-z]/g,n=>n.toUpperCase()).replace(/\bLk\b/,"Lake").replace(/\b(And|Of)\b/g,n=>n.toLowerCase())}function eC(t,e){var s;const n=t.elev,i=n.findIndex(o=>o!==null);if(i<0||e<i)return null;let r=Math.min(e,n.length-1);for(;r>=0&&n[r]===null;)r--;return r<i?null:{elev:n[r],change:n[r]-n[i],at:r,latest:r<e,storage:((s=t.storage)==null?void 0:s[r])??null,first:i}}const pn=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),_0=t=>`${t>.005?"+":t<-.005?"−":"±"}${Math.abs(t).toFixed(1)} ft`;class tC{constructor(e,n){Object.assign(this,{root:e,scene:n}),this.el=document.createElement("div"),this.el.className="place-layer res-layer",e.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip",this.el.appendChild(this.tip),this.items=[],this.k=0,this.visible=!0,this._n=0}async load(e){const n=await fetch(`${e.base}rivers/reservoirs.json?u=${encodeURIComponent(e.updated)}`);if(!n.ok)return;const{sites:i}=await n.json();for(const s of this.items)s.node.remove();const r=this.scene.P;this.items=i.map((s,o)=>{const a=document.createElement("div");a.className="res",a.innerHTML='<i></i><span class="n"></span><span class="v mono"></span>',a.addEventListener("pointerenter",()=>{this.hover=l,this._tip()}),a.addEventListener("pointerleave",()=>{this.hover===l&&(this.hover=null,this.tip.style.opacity=0)}),this.el.appendChild(a);const l={...s,id:o,short:Jb(s.name),node:a,x:r.toX(s.lon),z:r.toZ(s.lat),on:!1};return a.querySelector(".n").textContent=l.short,l}),this.setHour(this.k)}setHour(e){this.k=e;for(const n of this.items){const i=n.level=eC(n,e);n.node.classList.toggle("up",!!i&&i.change>.3),n.node.classList.toggle("down",!!i&&i.change<-.3),n.node.classList.toggle("latest",!!(i!=null&&i.latest)),n.node.classList.toggle("stuck",!!n.stuck),n.node.querySelector(".v").textContent=n.stuck?"no live data":i?_0(i.change):"—",n.w=22+(n.short.length+8)*6.1}this.hover&&this._tip()}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=innerWidth,r=innerHeight,s=[];for(const a of this.items){if(a.cand=!1,n>900||!a.level)continue;const[l,u,c]=e.project(a.x,e.elevAt(a.lon,a.lat)*e.e+.05,a.z);c<1&&l>-40&&l<i+40&&u>-20&&u<r+20&&(a.cand=!0,a.sx=l,a.sy=u,s.push({id:a.id,x:l,y:u,w:a.w,h:18,priority:(a.stuck?5:10)+Math.abs(a.level.change)}))}const o=jc(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}_tip(){const e=this.hover,n=e==null?void 0:e.level;if(!e)return;const i=e.elev.map((h,f)=>[f,h]).filter(([,h])=>h!==null),r=Math.min(...i.map(h=>h[1])),s=Math.max(...i.map(h=>h[1])),o=e.elev.length,a=h=>h/(o-1)*220,l=h=>44-(h-r)/Math.max(s-r,.1)*40,u=i.map(([h,f],p)=>`${p?"L":"M"}${a(h).toFixed(1)},${l(f).toFixed(1)}`).join(""),c=e.stuck?`<div class="warn">This feed has reported exactly ${n==null?void 0:n.elev.toFixed(2)} ft every hour of the window: a stuck or placeholder value, not a measurement.</div>`:"";this.tip.innerHTML=`<b>${pn(e.short)}</b><div class="sub">${pn(e.name)} · ${pn(e.source??"USGS")}</div>`+c+(e.stuck?"":n?`<div class="mono">${n.elev.toFixed(2)} ft (${pn(e.datum)}) · ${_0(n.change)} since the storm began${n.latest?" · latest reading":""}</div>`+(n.storage!==null?`<div class="mono">storage ${Math.round(n.storage).toLocaleString("en-US")} acre-ft</div>`:""):"<div>no reading yet</div>")+`<svg width="220" height="48" aria-hidden="true"><path d="${u}" /><line x1="${a(this.k)}" x2="${a(this.k)}" y1="0" y2="48" /></svg><div class="sub mono">${s.toFixed(1)} / ${r.toFixed(1)} ft · whole window · provisional</div>`,this.tip.style.transform=`translate(${Math.round(e.sx+12)}px, ${Math.round(e.sy+14)}px)`,this.tip.style.opacity=1}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}const Do=["minor","moderate","major"];function nC(t,e){const n=t.obs[e],i=t.pred[e];if(n!=null)return{level:n,pred:i,surge:i==null?null:n-i,type:"obs"};let r=-1;for(let s=t.obs.length-1;s>=0;s--)if(t.obs[s]!==null){r=s;break}return e>r&&i!==null&&i!==void 0?{level:i,pred:i,surge:null,type:"pred"}:null}const iC=(t,e)=>{let n=null;for(const i of Do)t.flood[i]!==void 0&&e>=t.flood[i]&&(n=i);return n},x0=t=>`${t>=.05?"+":t<=-.05?"−":"±"}${Math.abs(t).toFixed(1)}`;class rC{constructor(e,n){Object.assign(this,{root:e,scene:n}),this.el=document.createElement("div"),this.el.className="place-layer res-layer",e.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip gauge-tip",this.el.appendChild(this.tip),this.items=[],this.k=0,this.visible=!0,this._n=0,this.maxSurge=null}async load(e){const n=await fetch(`${e.base}sea/tides.json?u=${encodeURIComponent(e.updated)}`);if(!n.ok)return;const{sites:i}=await n.json();for(const s of this.items)s.node.remove();const r=this.scene.P;this.items=i.map((s,o)=>{const a=document.createElement("div");a.className="gauge tide",a.innerHTML='<i></i><span class="n"></span><span class="v mono"></span>';const l={...s,id:o,node:a,x:r.toX(s.lon),z:r.toZ(s.lat),on:!1};return a.addEventListener("pointerenter",()=>{this.hover=l,this._tip()}),a.addEventListener("pointerleave",()=>{this.hover===l&&(this.hover=null,this.tip.style.opacity=0)}),a.querySelector(".n").textContent=s.name.split(",")[0],this.el.appendChild(a),l}),this.setHour(this.k)}setHour(e){this.k=e,this.maxSurge=null;for(const n of this.items){const i=n.value=nC(n,e),r=n.cat=i?iC(n,i.level):null;(i==null?void 0:i.surge)!==null&&(i==null?void 0:i.surge)!==void 0&&(!this.maxSurge||i.surge>this.maxSurge.surge)&&(this.maxSurge={surge:i.surge,name:n.name}),n.node.dataset.cat=r??"normal",n.node.classList.toggle("fc",(i==null?void 0:i.type)==="pred"),n.node.querySelector(".v").textContent=i?`${i.level.toFixed(1)} ft${i.surge!==null?` · surge ${x0(i.surge)}`:""}`:"—",n.w=22+(n.node.querySelector(".n").textContent.length+20)*6}this.hover&&this._tip()}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=innerWidth,r=innerHeight,s=[];for(const a of this.items){if(a.cand=!1,!a.value||n>1500)continue;const[l,u,c]=e.project(a.x,.05,a.z);c<1&&l>-40&&l<i+40&&u>-20&&u<r+20&&(a.cand=!0,a.sx=l,a.sy=u,s.push({id:a.id,x:l,y:u,w:a.w,h:18,priority:25+(a.cat?10*(Do.indexOf(a.cat)+1):0)+Math.abs(a.value.surge??0)}))}const o=jc(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}_tip(){const e=this.hover;if(!e)return;const n=e.value,i=e.pred.length,r=[...e.obs,...e.pred].filter(h=>h!==null),s=Math.min(...r),o=Math.max(...r,e.flood.minor??-1/0),a=h=>h/(i-1)*220,l=h=>50-(h-s)/Math.max(o-s,.5)*46,u=h=>h.map((f,p)=>f===null?null:[p,f]).filter(Boolean).map(([f,p],g)=>`${g?"L":"M"}${a(f).toFixed(1)},${l(p).toFixed(1)}`).join(""),c=Do.filter(h=>e.flood[h]!==void 0&&e.flood[h]<=o+.01).map(h=>`<line class="cat" stroke="${{minor:"#f39431",moderate:"#e2483a",major:"#b03fd0"}[h]}" x1="0" x2="220" y1="${l(e.flood[h]).toFixed(1)}" y2="${l(e.flood[h]).toFixed(1)}" />`).join("");this.tip.innerHTML=`<b>${pn(e.name)}</b><div class="sub">NOAA tide gauge ${pn(e.id)} · ft above MLLW</div>`+(n?`<div class="mono">${n.type==="obs"?"observed":"predicted tide"} ${n.level.toFixed(2)} ft`+(n.type==="obs"&&n.pred!==null?` · predicted ${n.pred.toFixed(2)} · surge ${x0(n.surge)} ft`:"")+"</div>":"<div>no reading for this hour</div>")+`<div class="cat-line">${e.cat?`coastal flooding: ${e.cat}`:"below coastal flood levels"}</div>`+(Do.some(h=>e.flood[h]!==void 0)?`<div class="sub mono">${Do.filter(h=>e.flood[h]!==void 0).map(h=>`${h} ${e.flood[h]}`).join(" · ")} ft (${pn(e.flood.source??"")})</div>`:'<div class="sub">no flood levels set for this station</div>')+`<svg width="220" height="54" aria-hidden="true">${c}<path class="fc" d="${u(e.pred)}" /><path d="${u(e.obs)}" /><line x1="${a(this.k)}" x2="${a(this.k)}" y1="0" y2="54" /></svg><div class="sub">solid: observed · dashed: predicted tide</div>`,this.tip.style.transform=`translate(${Math.round(Math.min(e.sx+12,innerWidth-300))}px, ${Math.round(Math.min(e.sy+14,innerHeight-240))}px)`,this.tip.style.opacity=1}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}const Cl=t=>t>=100?Math.round(t).toLocaleString("en-US"):t>=1?t.toFixed(1):t.toFixed(2),sC=35.3147;function oC({scene:t,layer:e,canvas:n}){const[i,r]=ie.useState(null),s=ie.useRef(0);return ie.useEffect(()=>{if(!n)return;let o=null;const a=()=>{if(s.current=0,!o||!e.mesh.visible){r(null);return}const c=n.getBoundingClientRect(),h=e.pick(o.clientX-c.left,o.clientY-c.top,t.camera,c.width,c.height);r(h?{...h,x:o.clientX,y:o.clientY}:null)},l=c=>{o=c.buttons?null:c,s.current||(s.current=setTimeout(a,90))},u=()=>{o=null,r(null)};return n.addEventListener("pointermove",l),n.addEventListener("pointerleave",u),()=>{n.removeEventListener("pointermove",l),n.removeEventListener("pointerleave",u),clearTimeout(s.current)}},[t,e,n]),i?b.jsxs("div",{className:"river-tip",style:{left:i.x,top:i.y},role:"tooltip",children:[b.jsx("b",{children:i.name}),e.label&&b.jsx("div",{className:"src",children:e.label}),b.jsxs("div",{className:"mono",children:[Cl(i.q)," m³/s · ",Cl(i.q*sC)," cfs"]}),Number.isFinite(i.rise)&&b.jsxs("div",{className:"mono",children:[i.rise>=1?`${i.rise.toFixed(1)}×`:`${Math.round(i.rise*100)}% of`," its flow before the storm (",Cl(i.base)," m³/s)"]}),Number.isFinite(i.share)&&b.jsxs("div",{className:"mono",children:[Math.round(i.share*100),"% of its 2-year flood flow"]}),b.jsxs("div",{className:"cat",children:[b.jsx("i",{style:{background:Wc[i.cat]}}),i.unflagged?"flood thresholds not meaningful here (tiny, or already exceeded before the storm); not flagged":i.cat?`at or above the ${dc[i.cat]}`:"below the high-water flow"]}),b.jsx("table",{className:"mono",children:b.jsx("tbody",{children:i.thr.map((o,a)=>o>0&&b.jsxs("tr",{className:i.cat>a?"hit":"",children:[b.jsx("td",{children:Dw[a]}),b.jsxs("td",{children:[Cl(o)," m³/s"]})]},a))})})]}):null}const js=["action","minor","moderate","major"],aC={action:"action stage",minor:"minor flood",moderate:"moderate flood",major:"major flood"},xd={normal:"#6fb4e8",action:"#f2cf3d",minor:"#f39431",moderate:"#e2483a",major:"#b03fd0"};function lC(t,e){let n=null;for(const i of js)t.cats[i]!==void 0&&e>=t.cats[i]&&(n=i);return n}function uC(t,e,n=!0){if(t.obs[e]!==null&&t.obs[e]!==void 0)return{stage:t.obs[e],type:"obs"};let i=-1;for(let r=t.obs.length-1;r>=0;r--)if(t.obs[r]!==null){i=r;break}return e<i?null:n&&t.fc[e]!==null&&t.fc[e]!==void 0?{stage:t.fc[e],type:"fc"}:i>=0&&e-i<=2?{stage:t.obs[i],type:"obs",latest:!0}:null}function cC(t,e){let n=null,i=null;for(const[r,s]of t.impacts)e>=r?n={stage:r,text:s}:i||(i={stage:r,text:s});return{now:n,next:i}}class hC{constructor(e,n){Object.assign(this,{root:e,scene:n}),this.el=document.createElement("div"),this.el.className="place-layer res-layer",e.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip gauge-tip",this.el.appendChild(this.tip),this.items=[],this.k=0,this.whatIf=!0,this.visible=!0,this._n=0,this.counts={}}async load(e){const n=await fetch(`${e.base}rivers/gauges.json?u=${encodeURIComponent(e.updated)}`);if(!n.ok)return;const{sites:i}=await n.json();for(const s of this.items)s.node.remove();const r=this.scene.P;this.items=i.map((s,o)=>{const a=document.createElement("div");a.className="gauge",a.innerHTML='<i></i><span class="n"></span><span class="v mono"></span>';const l={...s,id:o,node:a,x:r.toX(s.lon),z:r.toZ(s.lat),on:!1};return a.addEventListener("pointerenter",()=>{this.hover=l,this._tip()}),a.addEventListener("pointerleave",()=>{this.hover===l&&(this.hover=null,this.tip.style.opacity=0)}),a.querySelector(".n").textContent=s.name.replace(/\s+River\b/," R.").replace(/\s+near\s+/i," nr ").replace(/\s+at\s+/i," at "),this.el.appendChild(a),l}),this.setHour(this.k,this.whatIf)}setHour(e,n=this.whatIf){this.k=e,this.whatIf=n,this.counts={action:0,minor:0,moderate:0,major:0};for(const i of this.items){const r=i.value=uC(i,e,n),s=i.cat=r?lC(i,r.stage):null;s&&this.counts[s]++,i.node.dataset.cat=s??"normal",i.node.classList.toggle("fc",(r==null?void 0:r.type)==="fc"),i.node.classList.toggle("none",!r),i.node.querySelector(".v").textContent=r?`${r.stage.toFixed(1)} ft${s?` · ${s}`:""}`:"—",i.w=22+(i.node.querySelector(".n").textContent.length+14)*6}this.hover&&this._tip()}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=innerWidth,r=innerHeight,s=[];for(const a of this.items){if(a.cand=!1,!a.value||!a.cat&&n>260||n>2600)continue;const[l,u,c]=e.project(a.x,e.elevAt(a.lon,a.lat)*e.e+.05,a.z);c<1&&l>-40&&l<i+40&&u>-20&&u<r+20&&(a.cand=!0,a.sx=l,a.sy=u,s.push({id:a.id,x:l,y:u,w:a.w,h:18,priority:20+(a.cat?10*(js.indexOf(a.cat)+1):0)}))}const o=jc(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}_tip(){var p,g;const e=this.hover;if(!e)return;const n=e.value,i=e.obs.length,r=[...e.obs,...e.fc].filter(_=>_!==null);Object.values(e.cats);const s=Math.min(...r),o=Math.max(...r,e.cats.minor??e.cats.action??-1/0),a=_=>_/(i-1)*220,l=_=>50-(_-s)/Math.max(o-s,.5)*46,u=_=>_.map((m,d)=>m===null?null:[d,m]).filter(Boolean).map(([m,d],x)=>`${x?"L":"M"}${a(m).toFixed(1)},${l(d).toFixed(1)}`).join(""),c=js.filter(_=>e.cats[_]!==void 0&&e.cats[_]<=o+.01).map(_=>`<line class="cat" stroke="${xd[_]}" x1="0" x2="220" y1="${l(e.cats[_]).toFixed(1)}" y2="${l(e.cats[_]).toFixed(1)}" />`).join(""),h=n?cC(e,n.stage):null,f=(n==null?void 0:n.type)==="fc"?`NWS forecast issued ${pn(((p=e.fcIssued)==null?void 0:p.replace("T"," "))??"")} UTC`:n!=null&&n.latest?"latest measurement":"measured";this.tip.innerHTML=`<b>${pn(e.name)}</b><div class="sub">NWS ${pn(e.lid)}${e.usgs?` · USGS ${pn(e.usgs)}`:""}</div>`+(n?`<div class="mono">${n.stage.toFixed(2)} ft · ${f}</div><div class="cat-line"><i style="background:${xd[e.cat??"normal"]}"></i>${e.cat?aC[e.cat]:"below flood stages"}</div>`:"<div>no reading for this hour</div>")+`<div class="sub mono">${js.filter(_=>e.cats[_]!==void 0).map(_=>`${_} ${e.cats[_]}`).join(" · ")} ft</div>`+(h!=null&&h.now?`<div class="impact"><b>At ${h.now.stage} ft:</b> ${pn(h.now.text)}</div>`:"")+(h!=null&&h.next?`<div class="impact next"><b>At ${h.next.stage} ft${n?` (${(h.next.stage-n.stage).toFixed(1)} ft higher)`:""}:</b> ${pn(h.next.text)}</div>`:"")+`<svg width="220" height="54" aria-hidden="true">${c}<path d="${u(e.obs)}" /><path class="fc" d="${u(e.fc)}" /><line x1="${a(this.k)}" x2="${a(this.k)}" y1="0" y2="54" /></svg>`+((g=e.crests)!=null&&g.length?`<div class="sub mono">record ${e.crests[0][0]} ft (${pn(e.crests[0][1])})</div>`:""),this.tip.style.transform=`translate(${Math.round(Math.min(e.sx+12,innerWidth-300))}px, ${Math.round(Math.min(e.sy+14,innerHeight-260))}px)`,this.tip.style.opacity=1}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}const fC=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;function dC(t,e,n,i){const[r,s]=t.ll,o=[e.toX(r),(n(r,s)??0)*i,e.toZ(s)],a=Math.sin(t.polar),l=Math.cos(t.polar),u=t.az??0;return{pos:[o[0]+t.dist*a*Math.sin(u),o[1]+t.dist*l,o[2]+t.dist*a*Math.cos(u)],target:o}}function pC(t,e,n,i){let r=n[0]-e[0],s=n[2]-e[2];const o=Math.hypot(r,s)||1;r/=o,s/=o;const a=-s,l=r;let u=0,c=0;t.has("ArrowUp")&&(u+=r,c+=s),t.has("ArrowDown")&&(u-=r,c-=s),t.has("ArrowRight")&&(u+=a,c+=l),t.has("ArrowLeft")&&(u-=a,c-=l);const h=Math.hypot(u,c);if(!h)return[0,0,0];const p=.3*Math.hypot(e[0]-n[0],e[1]-n[1],e[2]-n[2])*i/h;return[u*p,0,c*p]}const Wp=t=>!!t&&(t.isContentEditable||t.contentEditable==="true"||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)),mC=(t,e)=>e?0:t,gC=(t,e,n,i,r)=>r?e:t+(e-t)*Math.min(1,n*i),vC=t=>{var e;return!!((e=t==null?void 0:t.closest)!=null&&e.call(t,".panel"))},_C=t=>{var e;return!!((e=t.key)!=null&&e.startsWith("Arrow"))&&!(t.metaKey||t.ctrlKey||t.altKey)&&!Wp(t.target)&&!vC(t.target)},xC=t=>Math.min(1,Math.max(.2,Math.sqrt(t/300)));function yC(t,e,{dAz:n=0,dPol:i=0,zoom:r=1,northUp:s=!1}={},o=.02,a=Math.PI-.02){const[l,u,c]=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];let h=Math.hypot(l,u,c)||1,f=Math.atan2(l,c),p=Math.acos(Math.max(-1,Math.min(1,u/h)));f=s?0:f+n*Math.PI/180,p=Math.max(o,Math.min(a,p+i*Math.PI/180)),h*=r;const g=Math.sin(p);return[e[0]+h*g*Math.sin(f),e[1]+h*Math.cos(p),e[2]+h*g*Math.cos(f)]}const SC=[["rate","Rain / h"],["accum","Accumulated"],["temp","Temperature"],["off","Off"]];function Jh({options:t,value:e,onChange:n,label:i}){return b.jsx("div",{className:"seg",role:"group","aria-label":i,children:t.map(([r,s])=>b.jsx("button",{"aria-pressed":e===r,onClick:()=>n(r),children:s},r))})}function y0(t,e,n){if(!e)return"no data for this hour";if(e.type==="obs")return t.obs.rain[n]==="pass1"?"observed · MRMS (provisional)":"observed · MRMS, gauge-corrected";const i=Math.round((nr(t,n)-Date.UTC(+e.init.slice(0,4),+e.init.slice(4,6)-1,+e.init.slice(6,8),+e.init.slice(8,10)))/36e5);return`forecast · ${t.models[e.model].label} ${Mu(e.init)} +${i} h`}function S0(t,e,n){if(!e)return nr(t,n)>Date.parse(t.updated)?"not recorded yet":"no river data for this hour";if(e.type==="whatif"){const i=Math.round((nr(t,n)-vp(e.init))/36e5);return`what if · NWM ${e.kind==="short"?"short-range (HRRR rain)":"medium-range (GFS rain)"} ${Mu(e.init)} +${i} h`}return e.k===n?"recorded · NWM analysis":`recorded · NWM analysis from ${n-e.k} h earlier (newest posted)`}function MC({info:t}){const e=((t==null?void 0:t.counts)??[]).map((n,i)=>[i,n]).filter(([n,i])=>n>0&&i>0);return b.jsx("span",{className:"rv-counts",children:e.length?e.map(([n,i])=>b.jsxs("span",{title:dc[n],children:[b.jsx("i",{style:{background:Wc[n]}}),i," ",dc[n].replace(" flood","")]},n)):t!=null&&t.counts?b.jsx("span",{children:"all below high water"}):null})}function wC({fill:t}){if(t==="off")return null;const e=md[t],n=t==="temp"?Ry:gd;return b.jsxs("div",{className:"st-legend",children:[b.jsx("div",{className:"st-ramp",style:{background:`linear-gradient(90deg, ${n.join(", ")})`}}),b.jsxs("div",{className:"st-ticks mono",children:[e.stops.filter((i,r)=>r%2===0||r===9).map(i=>b.jsx("span",{children:i},i)),b.jsx("span",{className:"u",children:e.unit})]})]})}function EC(t,e){var i;const n=((i=t.rivers)==null?void 0:i.inundation)??{};for(let r=e;r>=Math.max(0,e-2);r--)if(n[r])return r;return null}function TC(t,e){var i;const n=((i=t.power)==null?void 0:i.frames)??{};for(let r=e;r>=Math.max(0,e-2);r--)if(n[r]!==void 0)return r;return null}function AC(t,e,n=!0){var i,r,s,o;return(i=t.sea)!=null&&i.obs.includes(e)?{type:"obs"}:n&&e>Math.max(-1,...((r=t.sea)==null?void 0:r.obs)??[])&&((o=(s=t.sea)==null?void 0:s.fc)!=null&&o.frames.includes(e))?{type:"fc",run:t.sea.fc.run}:null}function bC(t,e){let n=0,i=0;const r=wa.map(()=>0);for(let s=0;s<e;s++){const o=t[s*4];if(o===255)continue;i++,o>n&&(n=o);const a=o/.44704;wa.forEach((l,u)=>{a>=l&&r[u]++})}return{mph:Math.round(n/.44704),share:r.map(s=>i?s/i:0)}}function CC({doc:t,layer:e,rivers:n,reservoirs:i,gauges:r,floods:s,sea:o,gusts:a,power:l}){var Ne,tt;const u=ie.useMemo(()=>new dg,[t.version]),c=ie.useMemo(()=>new Rw(t,u),[t,u]),[h,f]=ie.useState(Math.max(0,t.lastObs));ie.useEffect(()=>{f(A=>Math.min(A,t.hours-1))},[t.hours]);const[p,g]=ie.useState({mode:"blend",model:"hrrr"}),[_,m]=ie.useState("rate"),[d,x]=ie.useState(!0),[v,S]=ie.useState(!1),[P,R]=ie.useState(!1),[T,L]=ie.useState(.85),[X,y]=ie.useState(6),[w,O]=ie.useState(""),[k,z]=ie.useState(!1),J=ie.useRef(0),[H,K]=ie.useState(!0),[D,Z]=ie.useState(!0),[Y,oe]=ie.useState(null),[xe,ze]=ie.useState(null),$=ie.useMemo(()=>new dg(48),[t.version]),[q,le]=ie.useState(!0),[ae,Ee]=ie.useState(null),Ae=ie.useRef(new Map),[Be,Qe]=ie.useState(!0),[Ve,N]=ie.useState(!0),[Dt,Ge]=ie.useState(null),[ke,Pe]=ie.useState(!1),[Ye,Ce]=ie.useState(null),[C,M]=ie.useState(!0),[V,te]=ie.useState(null),ne=ie.useRef(new Map),[ee,Me]=ie.useState(!0),[he,me]=ie.useState(!0),[We,se]=ie.useState(null);ie.useEffect(()=>(window.__storm={setK:f,setFill:m,setSel:g,setWind:x,setOpen:R},()=>{delete window.__storm}),[]),ie.useEffect(()=>{e.setFill(_)},[e,_]),ie.useEffect(()=>{e.setWind(d)},[e,d]),ie.useEffect(()=>{e.setOpacity(T)},[e,T]),ie.useEffect(()=>{e.setAltitude(X)},[e,X]),ie.useEffect(()=>{n==null||n.layer.setVisible(ee)},[n,ee]),ie.useEffect(()=>{i==null||i.load(t).catch(()=>{})},[i,t]),ie.useEffect(()=>{i==null||i.setHour(h)},[i,h]),ie.useEffect(()=>{i==null||i.setVisible(Be)},[i,Be]),ie.useEffect(()=>{r==null||r.load(t).then(()=>Ge({...r.counts})).catch(()=>{})},[r,t]),ie.useEffect(()=>{r&&(r.setHour(h,he),Ge({...r.counts}))},[r,h,he]),ie.useEffect(()=>{r==null||r.setVisible(Ve)},[r,Ve]),ie.useEffect(()=>{o==null||o.layer.setCurrents(H)},[o,H]),ie.useEffect(()=>{o==null||o.tides.setVisible(D)},[o,D]),ie.useEffect(()=>{o==null||o.tides.load(t).then(()=>ze(o.tides.maxSurge)).catch(()=>{})},[o,t]),ie.useEffect(()=>{o&&(o.tides.setHour(h),ze(o.tides.maxSurge))},[o,h]),ie.useEffect(()=>{if(!o)return;let A=!1;const j=AC(t,h,he);if(!j){o.layer.set(null),oe({j:null});return}const B=`k${String(h).padStart(3,"0")}.png?v=${t.version}`;return $.get(j.type==="obs"?`${t.base}sea/obs/${B}`:`${t.base}sea/fc/${B}&r=${j.run}`).then(Q=>{A||(o.layer.set(Q),oe({j:h,...j}))}).catch(()=>{A||(o.layer.set(null),oe({j:null}))}),()=>{A=!0}},[o,t,h,he,$]),ie.useEffect(()=>{a==null||a.setVisible(ke)},[a,ke]),ie.useEffect(()=>{if(!a||!ke)return;let A=!1;const j=Ro(t,h,p,"gust");if(!j){a.set(null),Ce({src:null});return}return u.get($l(t,j,h,"gust")).then(B=>{A||(a.set(B),Ce({src:j,...bC(B.data,B.width*B.height)}))}).catch(()=>{A||(a.set(null),Ce({src:null}))}),()=>{A=!0}},[a,ke,t,h,p,u]),ie.useEffect(()=>{l==null||l.setVisible(C)},[l,C]),ie.useEffect(()=>{if(!l)return;let A=!1;const j=TC(t,h);if(j===null){l.set(null),te({j:null});return}const B=`${t.base}power/k${String(j).padStart(3,"0")}.json?v=${t.version}&u=${t.updated}`;let Q=ne.current.get(B);return Q||(Q=fetch(B).then(ce=>ce.json()),ne.current.set(B,Q)),Q.then(ce=>{A||(l.set(ce),l.at=Math.min(nr(t,h),Date.parse(ce.time)),te({j,...ce}))}).catch(()=>{ne.current.delete(B),A||(l.set(null),te({j:null}))}),()=>{A=!0}},[l,t,h]),ie.useEffect(()=>{s==null||s.setVisible(q)},[s,q]),ie.useEffect(()=>{if(!s)return;let A=!1;const j=EC(t,h);if(j===null){s.set(null),Ee({j:null});return}const B=`${t.base}rivers/inundation/k${String(j).padStart(3,"0")}.json?v=${t.version}`;let Q=Ae.current.get(B);return Q||(Q=fetch(B).then(ce=>ce.json()),Ae.current.set(B,Q)),Q.then(ce=>{A||(s.set(ce),Ee({j,...t.rivers.inundation[j]}))}).catch(()=>{Ae.current.delete(B),A||(s.set(null),Ee({j:null}))}),()=>{A=!0}},[s,t,h]),ie.useEffect(()=>{if(!n)return;let A=!1;const j=Fw(t,h,he);return(j?n.flows.get(j):Promise.resolve(null)).then(B=>{A||(n.layer.setFlows(B),n.layer.whatIf.value=(j==null?void 0:j.type)==="whatif"?1:0,n.layer.label=`${S0(t,j,h)} · ${Mh(nr(t,h))}`,se({src:j,counts:B?n.layer.counts:null}))}).catch(B=>{console.warn("river flows:",B),A||(n.layer.setFlows(null),se({src:null}))}),()=>{A=!0}},[t,h,n,he]),ie.useEffect(()=>{const A=++J.current;z(!0),(async()=>{var de,$e;const j=Ro(t,h,p,"rain");let B=null;_==="rate"?B=((de=await c.hourly(h,p))==null?void 0:de.mm)??null:_==="accum"&&(B=(($e=await c.accumulated(h,p))==null?void 0:$e.mm)??null);const Q=Ro(t,h,p,"met");let ce=null;if(Q&&(d||_==="temp")&&(ce={data:(await u.get($l(t,Q,h,"met"))).data,grid:tx(t,Q,"met")}),A===J.current){(_==="rate"||_==="accum")&&e.setRain(B),e.setMet(ce),O(y0(t,_==="temp"?Q:j,h)),z(!1);for(let ot=h+1;ot<=Math.min(t.hours-1,h+3);ot++){const Ot=Ro(t,ot,p,"rain");Ot&&_!=="temp"&&u.get($l(t,Ot,ot,"rain")).catch(()=>{})}}})().catch(j=>{A===J.current&&(O(`could not load this hour (${j.message})`),z(!1))})},[t,h,p,_,d,e,c,u]),ie.useEffect(()=>{if(!v||k)return;const A=setTimeout(()=>f(j=>j>=t.hours-1?(S(!1),j):j+1),450);return()=>clearTimeout(A)},[v,k,h,t.hours]);const ge=ie.useRef(null);ge.current=A=>{A.metaKey||A.ctrlKey||A.altKey||Wp(A.target)||(A.key===","&&f(j=>Math.max(0,j-1)),A.key==="."&&f(j=>Math.min(t.hours-1,j+1)),A.key===" "&&(A.preventDefault(),S(j=>!j)))},ie.useEffect(()=>{const A=j=>ge.current(j);return addEventListener("keydown",A),()=>removeEventListener("keydown",A)},[]);const be=t.runList[p.model]??[],Re=nr(t,h),ve=(t.lastObs+1)/t.hours*100,Xe=Array.from({length:Math.ceil(t.hours/24)},(A,j)=>j);return b.jsxs("section",{className:`panel storm${P?" open":""}`,"aria-label":"Storm layer",children:[b.jsxs("div",{className:"st-bar",children:[b.jsx("button",{className:"st-play","aria-label":v?"Pause":"Play",title:"Play / pause (space)",onClick:()=>S(A=>!A),children:v?"❚❚":"▶"}),b.jsxs("div",{className:"st-when",children:[b.jsx("b",{children:Mh(Re)}),b.jsxs("span",{className:"mono",children:[Lw(Re)," · hour ",h+1,"/",t.hours]})]}),b.jsx("span",{className:`st-src${w.startsWith("observed")?" obs":w.startsWith("forecast")?" fc":""}`,children:k?"loading…":w}),b.jsx("button",{className:"st-more","aria-expanded":P,"aria-label":"Storm layer options",onClick:()=>R(A=>!A),children:P?"▾":"▸"})]}),b.jsxs("div",{className:"st-slider",children:[b.jsx("input",{type:"range",min:"0",max:t.hours-1,value:h,"aria-label":"Hour",onChange:A=>{S(!1),f(+A.target.value)},style:{background:`linear-gradient(90deg, #4c9be8 0%, #4c9be8 ${ve}%, #3a3a37 ${ve}%, #3a3a37 100%)`}}),b.jsx("div",{className:"st-days mono",children:Xe.map(A=>b.jsx("span",{children:new Intl.DateTimeFormat("en-US",{timeZone:t.tz,weekday:"short",day:"numeric"}).format(t.t0+A*864e5+36e5)},A))}),l&&C&&V&&b.jsxs("div",{className:"st-rivers",children:[b.jsx("span",{className:"mono",children:"Power ·"}),b.jsx("span",{className:"rv-counts",children:V.j===null?b.jsx("span",{children:nr(t,h)>Date.parse(t.updated)?"not recorded yet":"not recorded for this hour"}):b.jsxs(b.Fragment,{children:[b.jsxs("span",{children:[b.jsx("i",{style:{background:Dy}}),Object.values(V.totals).reduce((A,j)=>A+j,0).toLocaleString("en-US")," customers out"]}),Object.entries(V.totals).filter(([,A])=>A>0).sort((A,j)=>j[1]-A[1]).map(([A,j])=>b.jsxs("span",{children:[t.power.utilities[A]," ",j.toLocaleString("en-US")]},A)),V.partial&&b.jsx("span",{title:"Rebuilt from the outages still open when recording began (Nov 9, 3:50 PM PST), placed back to their start times; outages restored before then are missing",children:"partial: rebuilt from outages still open when recording began"}),((Ne=V.failed)==null?void 0:Ne.length)>0&&b.jsxs("span",{children:["no data from ",V.failed.join(", ")]})]})})]}),a&&ke&&Ye&&b.jsxs("div",{className:"st-rivers",children:[b.jsxs("span",{className:"mono",children:["Gusts · ",Ye.src?Ye.src.type==="obs"?"HRRR analysis":y0(t,Ye.src,h).replace("forecast · ","forecast "):"not available for this hour"]}),Ye.src&&b.jsxs("span",{className:"rv-counts",children:[b.jsxs("span",{children:["peak ",Ye.mph," mph on land"]}),wa.map((A,j)=>[A,j]).filter(([,A])=>Ye.share[A]>=.001).slice(-2).map(([A,j])=>b.jsxs("span",{children:[b.jsx("i",{style:{background:_d[j]}}),(Ye.share[j]*100).toFixed(Ye.share[j]<.1?1:0),"% of land ≥ ",A]},A))]})]}),o&&(H||D)&&b.jsxs("div",{className:"st-rivers",children:[b.jsx("span",{className:"mono",children:"Sea ·"}),b.jsxs("span",{className:"rv-counts",children:[H&&b.jsx("span",{children:(Y==null?void 0:Y.j)===null?nr(t,h)>Date.parse(t.updated)?"not modelled yet":"no model hour":(Y==null?void 0:Y.type)==="fc"?`what if · SSCOFS forecast ${Mu(Y.run)}`:"SSCOFS nowcast"}),D&&xe&&b.jsxs("span",{children:["max surge ",xe.surge>=0?"+":"−",Math.abs(xe.surge).toFixed(1)," ft · ",xe.name]})]})]}),s&&q&&ae&&b.jsxs("div",{className:"st-rivers",children:[b.jsx("span",{className:"mono",children:"Flood outlines ·"}),b.jsx("span",{className:"rv-counts",children:ae.j===null?b.jsx("span",{children:Object.keys(((tt=t.rivers)==null?void 0:tt.inundation)??{}).length?"not recorded for this hour":"recording starts with the next update"}):b.jsxs("span",{children:[b.jsx("i",{style:{background:"#ff4f7b"}}),ae.n," reaches · ",ae.km2," km²",ae.j!==h?` (as of ${h-ae.j} h earlier)`:""]})})]}),r&&Ve&&Dt&&b.jsxs("div",{className:"st-rivers",children:[b.jsx("span",{className:"mono",children:"Gauges ·"}),b.jsx("span",{className:"rv-counts",children:js.some(A=>Dt[A])?js.filter(A=>Dt[A]).map(A=>b.jsxs("span",{children:[b.jsx("i",{style:{background:xd[A]}}),Dt[A]," ",A]},A)):b.jsx("span",{children:"none at action or flood stage"})})]}),n&&ee&&b.jsxs("div",{className:"st-rivers",children:[b.jsxs("span",{className:"mono",children:["Rivers · ",S0(t,We==null?void 0:We.src,h)]}),b.jsx(MC,{info:We})]})]}),P&&b.jsxs("div",{className:"st-body",children:[b.jsxs("div",{className:"ctl-row",children:[b.jsx("span",{className:"eyebrow",children:"Fill"}),b.jsx(Jh,{label:"Fill",options:SC,value:_,onChange:m})]}),b.jsxs("div",{className:"ctl-row",children:[b.jsx("span",{className:"eyebrow",children:"Source"}),b.jsx(Jh,{label:"Source",options:[["blend","Observed + forecast"],["run","One forecast run"]],value:p.mode,onChange:A=>g(j=>{var B;return A==="run"?{...j,mode:A,init:j.init??((B=be[be.length-1])==null?void 0:B.init)}:{mode:A,model:j.model}})})]}),b.jsxs("div",{className:"ctl-row",children:[b.jsx("span",{className:"eyebrow",children:"Model"}),b.jsx(Jh,{label:"Model",options:Object.entries(t.models).map(([A,j])=>[A,j.label]),value:p.model,onChange:A=>g(j=>{var B;return{...j,model:A,init:j.mode==="run"?(B=t.runList[A].at(-1))==null?void 0:B.init:void 0}})})]}),p.mode==="run"&&b.jsxs("label",{className:"ctl-row",children:[b.jsx("span",{className:"eyebrow",children:"Run"}),b.jsx("select",{className:"st-select",value:p.init,onChange:A=>g(j=>({...j,init:A.target.value})),children:be.map(A=>b.jsxs("option",{value:A.init,children:[Mu(A.init),A.complete?"":" (partial)"]},A.init))})]}),b.jsxs("button",{className:"tog",role:"switch","aria-checked":d,onClick:()=>x(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["Wind",b.jsx("small",{children:"10 m wind as drifting trails"})]})]}),l&&b.jsxs("button",{className:"tog",role:"switch","aria-checked":C,onClick:()=>M(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["Power outages",b.jsx("small",{children:"BC Hydro, PSE, Seattle City Light, PGE and Pacific Power outage maps, recorded each hour from Nov 9; dot size: customers out; hover for cause and duration"})]})]}),a&&b.jsxs(b.Fragment,{children:[b.jsxs("button",{className:"tog",role:"switch","aria-checked":ke,onClick:()=>Pe(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["Wind gusts",b.jsx("small",{children:"surface gusts on land, from 25 mph (HRRR analysis for past hours, then the forecast)"})]})]}),ke&&b.jsx("div",{className:"rv-legend",children:wa.map((A,j)=>b.jsxs("span",{children:[b.jsx("i",{style:{background:_d[j]}}),"≥ ",A," mph"]},A))})]}),o&&b.jsxs(b.Fragment,{children:[b.jsxs("button",{className:"tog",role:"switch","aria-checked":H,onClick:()=>K(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["Currents",b.jsx("small",{children:"surface currents from the same model, as drifting trails"})]})]}),b.jsxs("button",{className:"tog",role:"switch","aria-checked":D,onClick:()=>Z(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["Tide gauges",b.jsx("small",{children:"NOAA observed water level vs predicted tide: the storm surge"})]})]})]}),s&&b.jsxs("button",{className:"tog",role:"switch","aria-checked":q,onClick:()=>le(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["Flood outlines",b.jsx("small",{children:"NOAA's experimental flooded areas from the NWM analysis, recorded each hour from Nov 9 on; reaches already high before the storm left out"})]})]}),r&&b.jsxs("button",{className:"tog",role:"switch","aria-checked":Ve,onClick:()=>N(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["River gauges",b.jsx("small",{children:"NWS gauges: measured stage against flood stages, with the NWS impact statement on hover"})]})]}),i&&b.jsxs("button",{className:"tog",role:"switch","aria-checked":Be,onClick:()=>Qe(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["Reservoir levels",b.jsx("small",{children:"USGS lake and reservoir gauges: change since the storm began; hover for the record"})]})]}),n&&b.jsxs(b.Fragment,{children:[b.jsxs("button",{className:"tog",role:"switch","aria-checked":ee,onClick:()=>Me(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["Rivers",b.jsx("small",{children:"What the rivers did, hour by hour (NOAA National Water Model analysis: observed rain, nudged to the USGS gauges; flow, not stage). Height: rise since Sat 12 AM; colour: flood thresholds reached"})]})]}),ee&&b.jsxs("button",{className:"tog",role:"switch","aria-checked":he,onClick:()=>me(A=>!A),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:["Rivers: what if",b.jsx("small",{children:"for hours not recorded yet, the newest NWM forecast (striped); each hour is replaced by the record as it comes in"})]})]}),ee&&b.jsx("div",{className:"rv-legend",children:dc.map((A,j)=>b.jsxs("span",{children:[b.jsx("i",{style:{background:Wc[j]}}),j===0?A:`≥ ${A}`]},j))})]}),b.jsxs("label",{className:"ctl-row slider",children:["Opacity ",b.jsxs("span",{className:"mono",children:[Math.round(T*100),"%"]}),b.jsx("input",{type:"range",min:"0.2",max:"1",step:"0.05",value:T,onChange:A=>L(+A.target.value)})]}),b.jsxs("label",{className:"ctl-row slider",children:["Layer height ",b.jsxs("span",{className:"mono",children:[X," km"]}),b.jsx("input",{type:"range",min:"1",max:"12",step:"0.5",value:X,onChange:A=>y(+A.target.value)})]}),b.jsx(wC,{fill:_}),b.jsxs("div",{className:"st-note",children:[_==="accum"?p.mode==="run"?"Accumulated from the run's first hour in the window.":`Accumulated since ${Mh(t.t0)}: observed hours, then the newest forecast.`:"Observed where measured (MRMS rain, HRRR analysis wind and temperature), newest forecast after."," ","Updated ",t.updated.replace("T"," ").replace("Z"," UTC"),"."]})]})]})}const M0={type:"change"},jp={type:"start"},Ny={type:"end"},Rl=new Na,w0=new Ti,RC=Math.cos(70*eo.DEG2RAD),At=new U,dn=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ef=1e-6;class PC extends by{constructor(e,n=null){super(e,n),this.state=st.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new yr,this._lastTargetPosition=new U,this._quat=new yr().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fc,this._sphericalDelta=new fc,this._scale=1,this._panOffset=new U,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new U,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=DC.bind(this),this._onPointerDown=LC.bind(this),this._onPointerUp=NC.bind(this),this._onContextMenu=BC.bind(this),this._onMouseWheel=FC.bind(this),this._onKeyDown=OC.bind(this),this._onTouchStart=kC.bind(this),this._onTouchMove=zC.bind(this),this._onMouseDown=UC.bind(this),this._onMouseMove=IC.bind(this),this._interceptControlDown=HC.bind(this),this._interceptControlUp=VC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(M0),this.update(),this.state=st.NONE}update(e=null){const n=this.object.position;At.copy(n).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),r<-Math.PI?r+=dn:r>Math.PI&&(r-=dn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),n.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=At.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new U(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rl.origin.copy(this.object.position),Rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rl.direction))<RC?this.object.lookAt(this.target):(w0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rl.intersectPlane(w0,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ef||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ef||this._lastTargetPosition.distanceToSquared(this.target)>ef?(this.dispatchEvent(M0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){At.setFromMatrixColumn(n,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,n){this.screenSpacePanning===!0?At.setFromMatrixColumn(n,1):(At.setFromMatrixColumn(n,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;At.copy(r).sub(this.target);let s=At.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ue,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function LC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function DC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function NC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ny),this.state=st.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function UC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=st.DOLLY;break;case pi.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=st.ROTATE}break;case pi.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(jp)}function IC(t){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function FC(t){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(t.preventDefault(),this.dispatchEvent(jp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Ny))}function OC(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function kC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=st.TOUCH_ROTATE;break;case Ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=st.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(jp)}function zC(t){switch(this._trackPointer(t),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=st.NONE}}function BC(t){this.enabled!==!1&&t.preventDefault()}function HC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const GC=150,Uy=[[1,120],[2,260]],WC=260,jC=450,XC=16,E0=40,$C=6;function YC(t,e,n=0,i=0){const r=Math.max(e[0]-t[0],0,t[0]-e[1]),s=Math.max(e[2]-t[2],0,t[2]-e[3]),o=Math.max(n-t[1],0,t[1]-i);return Math.hypot(r,o,s)}function qC(t,e,n,{far:i=WC,maxOrbit:r=jC,max:s=XC}={}){return n>r?[]:t.map(o=>({t:o,d:YC(e,o.box,o.lo,o.hi)})).filter(o=>o.d<i).sort((o,a)=>o.d-a.d).slice(0,s).map(({t:o,d:a})=>({key:o.key,level:Uy.findIndex(([,l])=>a<=l)}))}class KC{constructor(e,n,i,r,s){Object.assign(this,{scene:e,U:n,bundle:i,P:r});const o=i.manifest.terrain.detail;this.makeMaterial=c=>{const h=s(c);return h.polygonOffset=!0,h.polygonOffsetFactor=-1,h.polygonOffsetUnits=-1,h},this.water=i.manifest.water.tiles,this.tiles=o.tiles.map(c=>{const[h,f]=c.key.split("_").map(Number),p=c.west+c.cellsize/2,g=c.south+(c.nrows-.5)*c.cellsize,_=[r.toX(p),r.toX(p+(c.ncols-1)*c.cellsize),r.toZ(g),r.toZ(g-(c.nrows-1)*c.cellsize)];return{key:c.key,tx:h,ty:f,meta:c,box:_,lo:c.min,hi:c.max,state:"idle",meshes:[null,null],used:0}}),this.byKey=new Map(this.tiles.map(c=>[c.key,c])),this.nx=Math.max(...this.tiles.map(c=>c.tx))+1,this.ny=Math.max(...this.tiles.map(c=>c.ty))+1,this.maskData=new Uint8Array(this.nx*this.ny),this.mask=new Ii(this.maskData,this.nx,this.ny,Pa),this.mask.magFilter=this.mask.minFilter=It,this.mask.needsUpdate=!0;const a=i.manifest.region,l=o.tile_deg;this.maskRect=new He(r.toX(a.west),r.toZ(a.north),r.toX(a.west+this.nx*l),r.toZ(a.north-this.ny*l));const u=i.manifest.terrain.overview.cellsize;this.maskEps=new Ue(.25*u/(this.nx*l),.25*u/(this.ny*l)),this.inflight=0,this.frameNo=0,this.shown=new Set,this.failures=0,this.onChange=null}sample(e,n){const i=this.bundle.manifest.region,r=this.bundle.manifest.terrain.detail.tile_deg,s=this.byKey.get(`${Math.floor((e-i.west)/r)}_${Math.floor((i.north-n)/r)}`);return s&&this.shown.has(s.key)?s.grid.sample(e,n):null}isShown(e,n){return this.sample(e,n)!==null}_load(e){e.state="loading",this.inflight++;const n=fetch(`${this.bundle.base}terrain/tiles/${e.key}.bin`).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.arrayBuffer()}),i=new Gp().loadAsync(`${this.bundle.base}${this.water.dir}/${e.key}.png`);Promise.all([n,i]).then(([r,s])=>{if(r.byteLength!==e.meta.ncols*e.meta.nrows*2)throw new Error("tile size mismatch");e.grid=J_(e.meta,r,this.P),s.flipY=!1,s.colorSpace=On,s.anisotropy=4,s.needsUpdate=!0;const o=this.bundle.manifest.region,a=this.water.per_deg,l=.5/a,u=o.west+e.tx,c=o.north-e.ty,h=new He(this.P.toX(u-l),this.P.toZ(c+l),this.P.toX(u+(s.image.width-1)/a+l),this.P.toZ(c-(s.image.height-1)/a-l));e.waterTex=s,e.material=this.makeMaterial({tileWater:s,tileWaterRect:h}),e.state="ready"}).catch(()=>{e.state="failed",this.failures++}).finally(()=>{this.inflight--})}_mesh(e,n){if(!e.meshes[n]){const i=new en(ex(Cy,e.grid,this.P,Uy[n][0],GC),e.material);i.visible=!1,i.renderOrder=1,this.scene.add(i),e.meshes[n]=i}return e.meshes[n]}update(e,n){var u;this.frameNo++;const i=this.U.exag.value*.001*(1-this.U.flat.value),r=e.position.toArray(),s=qC(this.tiles.map(c=>({...c,lo:c.lo*i,hi:c.hi*i})),r,n);for(const c of s){const h=this.byKey.get(c.key);h.used=this.frameNo,h.state==="idle"&&this.inflight<$C&&this._load(h)}let o=0;const a=new Set;for(const c of s){const h=this.byKey.get(c.key);if(h.state!=="ready")continue;let f=c.level;if(!h.meshes[f]&&(o++>0&&(f=h.meshes.findIndex(Boolean)),f<0))continue;const p=this._mesh(h,f);for(const g of h.meshes)g&&(g.visible=g===p);a.add(h.key)}for(const c of this.tiles)if(!a.has(c.key))for(const h of c.meshes)h&&(h.visible=!1);if(a.size!==this.shown.size||[...a].some(c=>!this.shown.has(c))){this.shown=a,this.maskData.fill(0);for(const c of a){const h=this.byKey.get(c);this.maskData[h.ty*this.nx+h.tx]=255}this.mask.needsUpdate=!0,(u=this.onChange)==null||u.call(this)}return this._evict(),a.size}_evict(){var n,i;const e=this.tiles.filter(r=>r.state==="ready");if(!(e.length<=E0))for(const r of e.filter(s=>!this.shown.has(s.key)).sort((s,o)=>s.used-o.used).slice(0,e.length-E0)){for(const s of r.meshes)s&&(this.scene.remove(s),s.geometry.dispose());(n=r.material)==null||n.dispose(),(i=r.waterTex)==null||i.dispose(),r.meshes=[null,null],r.grid=null,r.material=r.waterTex=null,r.state="idle"}}dispose(){var e,n;for(const i of this.tiles){for(const r of i.meshes)r&&(this.scene.remove(r),r.geometry.dispose());(e=i.material)==null||e.dispose(),(n=i.waterTex)==null||n.dispose()}this.mask.dispose()}}const T0=new Gi,Pl=new U;class Iy extends Ey{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new gt(e,3)),this.setAttribute("uv",new gt(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new hc(n,6,1);return this.setAttribute("instanceStart",new Pi(i,3,0)),this.setAttribute("instanceEnd",new Pi(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new hc(n,6,1);return this.setAttribute("instanceColorStart",new Pi(i,3,0)),this.setAttribute("instanceColorEnd",new Pi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new yy(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),T0.setFromBufferAttribute(n),this.boundingBox.union(T0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pl.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pl)),Pl.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared(Pl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ue(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};an.line={uniforms:Bc.merge([fe.common,fe.fog,fe.line]),vertexShader:`
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
		`};class yd extends $t{constructor(e){super({type:"LineMaterial",uniforms:Bc.clone(an.line.uniforms),vertexShader:an.line.vertexShader,fragmentShader:an.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const tf=new He,A0=new U,b0=new U,zt=new He,Bt=new He,ri=new He,nf=new U,rf=new dt,Vt=new Ay,C0=new U,Ll=new Gi,Dl=new Tr,si=new He;let ui,jr;function R0(t,e,n){return si.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),si.multiplyScalar(1/si.w),si.x=jr/n.width,si.y=jr/n.height,si.applyMatrix4(t.projectionMatrixInverse),si.multiplyScalar(1/si.w),Math.abs(Math.max(si.x,si.y))}function ZC(t,e){const n=t.matrixWorld,i=t.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Vt.start.fromBufferAttribute(r,a),Vt.end.fromBufferAttribute(s,a),Vt.applyMatrix4(n);const u=new U,c=new U;ui.distanceSqToSegment(Vt.start,Vt.end,c,u),c.distanceTo(u)<jr*.5&&e.push({point:c,pointOnLine:u,distance:ui.origin.distanceTo(c),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function QC(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,u=a.attributes.instanceEnd,c=Math.min(a.instanceCount,l.count),h=-e.near;ui.at(1,ri),ri.w=1,ri.applyMatrix4(e.matrixWorldInverse),ri.applyMatrix4(i),ri.multiplyScalar(1/ri.w),ri.x*=s.x/2,ri.y*=s.y/2,ri.z=0,nf.copy(ri),rf.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=c;f<p;f++){if(zt.fromBufferAttribute(l,f),Bt.fromBufferAttribute(u,f),zt.w=1,Bt.w=1,zt.applyMatrix4(rf),Bt.applyMatrix4(rf),zt.z>h&&Bt.z>h)continue;if(zt.z>h){const v=zt.z-Bt.z,S=(zt.z-h)/v;zt.lerp(Bt,S)}else if(Bt.z>h){const v=Bt.z-zt.z,S=(Bt.z-h)/v;Bt.lerp(zt,S)}zt.applyMatrix4(i),Bt.applyMatrix4(i),zt.multiplyScalar(1/zt.w),Bt.multiplyScalar(1/Bt.w),zt.x*=s.x/2,zt.y*=s.y/2,Bt.x*=s.x/2,Bt.y*=s.y/2,Vt.start.copy(zt),Vt.start.z=0,Vt.end.copy(Bt),Vt.end.z=0;const _=Vt.closestPointToPointParameter(nf,!0);Vt.at(_,C0);const m=eo.lerp(zt.z,Bt.z,_),d=m>=-1&&m<=1,x=nf.distanceTo(C0)<jr*.5;if(d&&x){Vt.start.fromBufferAttribute(l,f),Vt.end.fromBufferAttribute(u,f),Vt.start.applyMatrix4(o),Vt.end.applyMatrix4(o);const v=new U,S=new U;ui.distanceSqToSegment(Vt.start,Vt.end,S,v),n.push({point:S,pointOnLine:v,distance:ui.origin.distanceTo(S),object:t,face:null,faceIndex:f,uv:null,uv1:null})}}}class JC extends en{constructor(e=new Iy,n=new yd({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)A0.fromBufferAttribute(n,o),b0.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+A0.distanceTo(b0);const s=new hc(r,2,1);return e.setAttribute("instanceDistanceStart",new Pi(s,1,0)),e.setAttribute("instanceDistanceEnd",new Pi(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ui=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;jr=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Dl.copy(a.boundingSphere).applyMatrix4(o);let u;if(i)u=jr*.5;else{const h=Math.max(r.near,Dl.distanceToPoint(ui.origin));u=R0(r,h,l.resolution)}if(Dl.radius+=u,ui.intersectsSphere(Dl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ll.copy(a.boundingBox).applyMatrix4(o);let c;if(i)c=jr*.5;else{const h=Math.max(r.near,Ll.distanceToPoint(ui.origin));c=R0(r,h,l.resolution)}Ll.expandByScalar(c),ui.intersectsBox(Ll)!==!1&&(i?ZC(this,n):QC(this,r,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(tf),this.material.uniforms.resolution.value.set(tf.z,tf.w))}}const Fy={motorway:["#f2d58a",2.4,"#1a1814",4.2,1],trunk:["#ece2c6",1.6,"#1a1814",3,.9],primary:["#d8d2c3",1,null,0,.7],country:["#f4f1ea",1.6,"#121211",3.4,.95],state:["#f4f1ea",1,null,0,.55]},eR={motorway:1/0,trunk:1300,primary:520,country:1/0,state:1/0},tR={motorway:60,trunk:60,primary:60,country:0,state:0},P0=12;function nR(t,e,n,i){const r=t.length/3,s=new Float32Array(r);for(let o=0;o<r;o++){const a=t[o*3],l=t[o*3+1],u=t[o*3+2],c=e.fromX(a),h=e.fromZ(u);if(n(c,h)){s[o]=l+P0;continue}const f=i(c,h);s[o]=(f===null?l:Math.max(l,f))+P0}return s}class iR{constructor(e,n,i,r){Object.assign(this,{scene:e,name:n,segs:i,P:r});const[s,o,a,l,u]=Fy[n],c={transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-40};this.mats=[new yd({color:s,linewidth:o,opacity:u,...c})],a&&this.mats.unshift(new yd({color:a,linewidth:l,opacity:.55*u,...c})),this.geometry=new Iy,this.objects=this.mats.map((h,f)=>{const p=new JC(this.geometry,h);return p.frustumCulled=!1,p.renderOrder=10+f,e.add(p),p}),this.pos=new Float32Array(i.length),this.visible=!0}drape(e,n){const i=nR(this.segs,this.P,e,n),r=this.pos;for(let s=0;s<i.length;s++)r[s*3]=this.segs[s*3],r[s*3+1]=i[s],r[s*3+2]=this.segs[s*3+2];this.geometry.setPositions(r)}setScale(e,n){for(const i of this.objects)i.scale.y=e,i.position.y=.02+.05*n}setVisible(e){this.visible=e,this._apply()}updateDistance(e,n=!1){const i=this.near?1.05:.95,r=e<eR[this.name]*i&&!(n&&e<tR[this.name]/i);r!==this.near&&(this.near=r,this._apply())}_apply(){for(const e of this.objects)e.visible=this.visible&&this.near!==!1}setResolution(e,n){for(const i of this.mats)i.resolution.set(e,n)}dispose(){for(const e of this.objects)this.scene.remove(e);this.geometry.dispose();for(const e of this.mats)e.dispose()}}const Oy=[["home","Pacific Northwest",{ll:[-122.6,46],dist:2400,polar:.42,az:0}],["ocean","Offshore approach",{ll:[-127.5,45.4],dist:2300,polar:.85,az:.75}],["puget","Puget Sound",{ll:[-122.35,47.55],dist:210,polar:.75,az:0}],["seattle","Seattle streets",{ll:[-122.32,47.605],dist:16,polar:.8,az:.25}],["mercer","Mercer Island",{ll:[-122.23,47.57],dist:9,polar:.7,az:0}],["fraser","Fraser Valley",{ll:[-122.3,49.1],dist:170,polar:.8,az:.15}],["skagit","Skagit & Nooksack",{ll:[-122.05,48.62],dist:170,polar:.8,az:0}],["olympics","Olympic Peninsula",{ll:[-123.65,47.75],dist:230,polar:.8,az:.4}],["rainier","Mount Rainier",{ll:[-121.76,46.85],dist:75,polar:.95,az:.3}],["portland","Portland & the Gorge",{ll:[-122.2,45.6],dist:190,polar:.8,az:0}],["willamette","Willamette Valley",{ll:[-123,44.75],dist:330,polar:.7,az:0}],["basin","Columbia Basin",{ll:[-119.4,46.8],dist:480,polar:.65,az:0}]],L0=Object.fromEntries(Oy.map(([t,,e])=>[t,e]));function ar(t,e){this.x=t,this.y=e}ar.prototype={clone(){return new ar(this.x,this.y)},add(t){return this.clone()._add(t)},sub(t){return this.clone()._sub(t)},multByPoint(t){return this.clone()._multByPoint(t)},divByPoint(t){return this.clone()._divByPoint(t)},mult(t){return this.clone()._mult(t)},div(t){return this.clone()._div(t)},rotate(t){return this.clone()._rotate(t)},rotateAround(t,e){return this.clone()._rotateAround(t,e)},matMult(t){return this.clone()._matMult(t)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(t){return this.x===t.x&&this.y===t.y},dist(t){return Math.sqrt(this.distSqr(t))},distSqr(t){const e=t.x-this.x,n=t.y-this.y;return e*e+n*n},angle(){return Math.atan2(this.y,this.x)},angleTo(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith(t){return this.angleWithSep(t.x,t.y)},angleWithSep(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult(t){const e=t[0]*this.x+t[1]*this.y,n=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=n,this},_add(t){return this.x+=t.x,this.y+=t.y,this},_sub(t){return this.x-=t.x,this.y-=t.y,this},_mult(t){return this.x*=t,this.y*=t,this},_div(t){return this.x/=t,this.y/=t,this},_multByPoint(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint(t){return this.x/=t.x,this.y/=t.y,this},_unit(){return this._div(this.mag()),this},_perp(){const t=this.y;return this.y=this.x,this.x=-t,this},_rotate(t){const e=Math.cos(t),n=Math.sin(t),i=e*this.x-n*this.y,r=n*this.x+e*this.y;return this.x=i,this.y=r,this},_rotateAround(t,e){const n=Math.cos(t),i=Math.sin(t),r=e.x+n*(this.x-e.x)-i*(this.y-e.y),s=e.y+i*(this.x-e.x)+n*(this.y-e.y);return this.x=r,this.y=s,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:ar};ar.convert=function(t){if(t instanceof ar)return t;if(Array.isArray(t))return new ar(+t[0],+t[1]);if(t.x!==void 0&&t.y!==void 0)return new ar(+t.x,+t.y);throw new Error("Expected [x, y] or {x, y} point format")};class ky{constructor(e,n,i,r,s){this.properties={},this.extent=i,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=r,this._values=s,e.readFields(rR,this,n)}loadGeometry(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos,i=[];let r,s=1,o=0,a=0,l=0;for(;e.pos<n;){if(o<=0){const u=e.readVarint();s=u&7,o=u>>3}if(o--,s===1||s===2)a+=e.readSVarint(),l+=e.readSVarint(),s===1&&(r&&i.push(r),r=[]),r&&r.push(new ar(a,l));else if(s===7)r&&r.push(r[0].clone());else throw new Error(`unknown command ${s}`)}return r&&i.push(r),i}bbox(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos;let i=1,r=0,s=0,o=0,a=1/0,l=-1/0,u=1/0,c=-1/0;for(;e.pos<n;){if(r<=0){const h=e.readVarint();i=h&7,r=h>>3}if(r--,i===1||i===2)s+=e.readSVarint(),o+=e.readSVarint(),s<a&&(a=s),s>l&&(l=s),o<u&&(u=o),o>c&&(c=o);else if(i!==7)throw new Error(`unknown command ${i}`)}return[a,u,l,c]}toGeoJSON(e,n,i){const r=this.extent*Math.pow(2,i),s=this.extent*e,o=this.extent*n,a=this.loadGeometry();function l(f){return[(f.x+s)*360/r-180,360/Math.PI*Math.atan(Math.exp((1-(f.y+o)*2/r)*Math.PI))-90]}function u(f){return f.map(l)}let c;if(this.type===1){const f=[];for(const g of a)f.push(g[0]);const p=u(f);c=f.length===1?{type:"Point",coordinates:p[0]}:{type:"MultiPoint",coordinates:p}}else if(this.type===2){const f=a.map(u);c=f.length===1?{type:"LineString",coordinates:f[0]}:{type:"MultiLineString",coordinates:f}}else if(this.type===3){const f=oR(a),p=[];for(const g of f)p.push(g.map(u));c=p.length===1?{type:"Polygon",coordinates:p[0]}:{type:"MultiPolygon",coordinates:p}}else throw new Error("unknown feature type");const h={type:"Feature",geometry:c,properties:this.properties};return this.id!=null&&(h.id=this.id),h}}ky.types=["Unknown","Point","LineString","Polygon"];function rR(t,e,n){t===1?e.id=n.readVarint():t===2?sR(n,e):t===3?e.type=n.readVarint():t===4&&(e._geometry=n.pos)}function sR(t,e){const n=t.readVarint()+t.pos;for(;t.pos<n;){const i=e._keys[t.readVarint()],r=e._values[t.readVarint()];e.properties[i]=r}}function oR(t){const e=t.length;if(e<=1)return[t];const n=[];let i,r;for(let s=0;s<e;s++){const o=aR(t[s]);o!==0&&(r===void 0&&(r=o<0),r===o<0?(i&&n.push(i),i=[t[s]]):i&&i.push(t[s]))}return i&&n.push(i),n}function aR(t){let e=0;for(let n=0,i=t.length,r=i-1,s,o;n<i;r=n++)s=t[n],o=t[r],e+=(o.x-s.x)*(s.y+o.y);return e}class lR{constructor(e,n){this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(uR,this,n),this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const n=this._pbf.readVarint()+this._pbf.pos;return new ky(this._pbf,n,this.extent,this._keys,this._values)}}function uR(t,e,n){t===15?e.version=n.readVarint():t===1?e.name=n.readString():t===5?e.extent=n.readVarint():t===2?e._features.push(n.pos):t===3?e._keys.push(n.readString()):t===4&&e._values.push(cR(n))}function cR(t){let e=null;const n=t.readVarint()+t.pos;for(;t.pos<n;){const i=t.readVarint()>>3;e=i===1?t.readString():i===2?t.readFloat():i===3?t.readDouble():i===4?t.readVarint64():i===5?t.readVarint():i===6?t.readSVarint():i===7?t.readBoolean():null}return e}class hR{constructor(e,n){this.layers=e.readFields(fR,{},n)}}function fR(t,e,n){if(t===3){const i=new lR(n,n.readVarint()+n.pos);i.length&&(e[i.name]=i)}}const Sd=65536*65536,D0=1/Sd,dR=12,N0=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),sf=0,Nl=1,wo=2,Ul=5;class pR{constructor(e=new Uint8Array(16)){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer),this.pos=0,this.type=0,this.length=this.buf.length}readFields(e,n,i=this.length){for(;this.pos<i;){const r=this.readVarint(),s=r>>3,o=this.pos;this.type=r&7,e(s,n,this),this.pos===o&&this.skip(r)}return n}readMessage(e,n){return this.readFields(e,n,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*Sd;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*Sd;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const n=this.buf;let i,r;return r=n[this.pos++],i=r&127,r<128||(r=n[this.pos++],i|=(r&127)<<7,r<128)||(r=n[this.pos++],i|=(r&127)<<14,r<128)||(r=n[this.pos++],i|=(r&127)<<21,r<128)?i:(r=n[this.pos],i|=(r&15)<<28,mR(i,e,this))}readVarint64(){return this.readVarint(!0)}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,n=this.pos;return this.pos=e,e-n>=dR&&N0?N0.decode(this.buf.subarray(n,e)):CR(this.buf,n,e)}readBytes(){const e=this.readVarint()+this.pos,n=this.buf.subarray(this.pos,e);return this.pos=e,n}readPackedVarint(e=[],n){const i=this.readPackedEnd();for(;this.pos<i;)e.push(this.readVarint(n));return e}readPackedSVarint(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===wo?this.readVarint()+this.pos:this.pos+1}skip(e){const n=e&7;if(n===sf)for(;this.buf[this.pos++]>127;);else if(n===wo)this.pos=this.readVarint()+this.pos;else if(n===Ul)this.pos+=4;else if(n===Nl)this.pos+=8;else throw new Error(`Unimplemented type: ${n}`)}writeTag(e,n){this.writeVarint(e<<3|n)}realloc(e){let n=this.length||16;for(;n<this.pos+e;)n*=2;if(n!==this.length){const i=new Uint8Array(n);i.set(this.buf),this.buf=i,this.dataView=new DataView(i.buffer),this.length=n}}finish(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)}writeFixed32(e){this.realloc(4),this.dataView.setInt32(this.pos,e,!0),this.pos+=4}writeSFixed32(e){this.realloc(4),this.dataView.setInt32(this.pos,e,!0),this.pos+=4}writeFixed64(e){this.realloc(8),this.dataView.setInt32(this.pos,e&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(e*D0),!0),this.pos+=8}writeSFixed64(e){this.realloc(8),this.dataView.setInt32(this.pos,e&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(e*D0),!0),this.pos+=8}writeVarint(e){if(e=+e||0,e>268435455||e<0){gR(e,this);return}this.realloc(4),this.buf[this.pos++]=e&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=e>>>7&127)))}writeSVarint(e){this.writeVarint(e<0?-e*2-1:e*2)}writeBoolean(e){this.writeVarint(+e)}writeString(e){e=String(e),this.realloc(e.length*4),this.pos++;const n=this.pos;this.pos=RR(this.buf,e,this.pos);const i=this.pos-n;i>=128&&U0(n,i,this),this.pos=n-1,this.writeVarint(i),this.pos+=i}writeFloat(e){this.realloc(4),this.dataView.setFloat32(this.pos,e,!0),this.pos+=4}writeDouble(e){this.realloc(8),this.dataView.setFloat64(this.pos,e,!0),this.pos+=8}writeBytes(e){const n=e.length;this.writeVarint(n),this.realloc(n);for(let i=0;i<n;i++)this.buf[this.pos++]=e[i]}writeRawMessage(e,n){this.pos++;const i=this.pos;e(n,this);const r=this.pos-i;r>=128&&U0(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r}writeMessage(e,n,i){this.writeTag(e,wo),this.writeRawMessage(n,i)}writePackedVarint(e,n){n.length&&this.writeMessage(e,xR,n)}writePackedSVarint(e,n){n.length&&this.writeMessage(e,yR,n)}writePackedBoolean(e,n){n.length&&this.writeMessage(e,wR,n)}writePackedFloat(e,n){n.length&&this.writeMessage(e,SR,n)}writePackedDouble(e,n){n.length&&this.writeMessage(e,MR,n)}writePackedFixed32(e,n){n.length&&this.writeMessage(e,ER,n)}writePackedSFixed32(e,n){n.length&&this.writeMessage(e,TR,n)}writePackedFixed64(e,n){n.length&&this.writeMessage(e,AR,n)}writePackedSFixed64(e,n){n.length&&this.writeMessage(e,bR,n)}writeBytesField(e,n){this.writeTag(e,wo),this.writeBytes(n)}writeFixed32Field(e,n){this.writeTag(e,Ul),this.writeFixed32(n)}writeSFixed32Field(e,n){this.writeTag(e,Ul),this.writeSFixed32(n)}writeFixed64Field(e,n){this.writeTag(e,Nl),this.writeFixed64(n)}writeSFixed64Field(e,n){this.writeTag(e,Nl),this.writeSFixed64(n)}writeVarintField(e,n){this.writeTag(e,sf),this.writeVarint(n)}writeSVarintField(e,n){this.writeTag(e,sf),this.writeSVarint(n)}writeStringField(e,n){this.writeTag(e,wo),this.writeString(n)}writeFloatField(e,n){this.writeTag(e,Ul),this.writeFloat(n)}writeDoubleField(e,n){this.writeTag(e,Nl),this.writeDouble(n)}writeBooleanField(e,n){this.writeVarintField(e,+n)}}function mR(t,e,n){const i=n.buf;let r,s;if(s=i[n.pos++],r=(s&112)>>4,s<128||(s=i[n.pos++],r|=(s&127)<<3,s<128)||(s=i[n.pos++],r|=(s&127)<<10,s<128)||(s=i[n.pos++],r|=(s&127)<<17,s<128)||(s=i[n.pos++],r|=(s&127)<<24,s<128)||(s=i[n.pos++],r|=(s&1)<<31,s<128))return Ss(t,r,e);throw new Error("Expected varint not more than 10 bytes")}function Ss(t,e,n){return n?e*4294967296+(t>>>0):(e>>>0)*4294967296+(t>>>0)}function gR(t,e){let n,i;if(t>=0?(n=t%4294967296|0,i=t/4294967296|0):(n=~(-t%4294967296),i=~(-t/4294967296),n^4294967295?n=n+1|0:(n=0,i=i+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),vR(n,i,e),_R(i,e)}function vR(t,e,n){n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos]=t&127}function _R(t,e){const n=(t&7)<<4;e.buf[e.pos++]|=n|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127)))))}function U0(t,e,n){const i=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(Math.LN2*7));n.realloc(i);for(let r=n.pos-1;r>=t;r--)n.buf[r+i]=n.buf[r]}function xR(t,e){for(let n=0;n<t.length;n++)e.writeVarint(t[n])}function yR(t,e){for(let n=0;n<t.length;n++)e.writeSVarint(t[n])}function SR(t,e){for(let n=0;n<t.length;n++)e.writeFloat(t[n])}function MR(t,e){for(let n=0;n<t.length;n++)e.writeDouble(t[n])}function wR(t,e){for(let n=0;n<t.length;n++)e.writeBoolean(t[n])}function ER(t,e){for(let n=0;n<t.length;n++)e.writeFixed32(t[n])}function TR(t,e){for(let n=0;n<t.length;n++)e.writeSFixed32(t[n])}function AR(t,e){for(let n=0;n<t.length;n++)e.writeFixed64(t[n])}function bR(t,e){for(let n=0;n<t.length;n++)e.writeSFixed64(t[n])}function CR(t,e,n){let i="",r=e;for(;r<n;){const s=t[r];let o=null,a=s>239?4:s>223?3:s>191?2:1;if(r+a>n)break;let l,u,c;a===1?s<128&&(o=s):a===2?(l=t[r+1],(l&192)===128&&(o=(s&31)<<6|l&63,o<=127&&(o=null))):a===3?(l=t[r+1],u=t[r+2],(l&192)===128&&(u&192)===128&&(o=(s&15)<<12|(l&63)<<6|u&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):a===4&&(l=t[r+1],u=t[r+2],c=t[r+3],(l&192)===128&&(u&192)===128&&(c&192)===128&&(o=(s&15)<<18|(l&63)<<12|(u&63)<<6|c&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,a=1):o>65535&&(o-=65536,i+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),i+=String.fromCharCode(o),r+=a}return i}function RR(t,e,n){for(let i=0,r,s;i<e.length;i++){if(r=e.charCodeAt(i),r>55295&&r<57344)if(s)if(r<56320){t[n++]=239,t[n++]=191,t[n++]=189,s=r;continue}else r=s-55296<<10|r-56320|65536,s=null;else{r>56319||i+1===e.length?(t[n++]=239,t[n++]=191,t[n++]=189):s=r;continue}else s&&(t[n++]=239,t[n++]=191,t[n++]=189,s=null);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=r&63|128)}return n}const PR="https://tiles.openfreemap.org/planet/{v}/{z}/{x}/{y}.pbf",LR="https://tiles.openfreemap.org/planet",zy=11,By=14,of=8,DR=.35,qn=512,NR=80,af=112,I0=240,UR=8,IR=12,Ko=By;function FR(t,e,n){const i=2**t,r=o=>o/i*360-180,s=o=>Math.atan(Math.sinh(Math.PI*(1-2*o/i)))*180/Math.PI;return{west:r(e),east:r(e+1),north:s(n),south:s(n+1)}}function pc(t,e,n){const i=2**t,r=n*Math.PI/180;return[Math.floor((e+180)/360*i),Math.floor((1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i)]}function OR(t,e,n,i,{split:r=DR,minZ:s=zy,maxZ:o=By,reach:a=1/0}={}){const l=[],u=[],c=(m,d,x)=>{const v=FR(m,d,x),S=n.toX(v.west),P=n.toX(v.east),R=n.toZ(v.north),T=n.toZ(v.south),L=Math.max(S-e[0],0,e[0]-P),X=Math.max(R-e[2],0,e[2]-T);return{d:Math.hypot(L,X,Math.max(0,e[1])),size:P-S}},h=(m,d,x)=>{const v=`${m}/${d}/${x}`,{d:S,size:P}=c(m,d,x);if(S>a)return;if(!(m<o&&P>r*Math.max(S,.5))){m>=s&&(i(v)?l.push([v,S]):u.push([v,S]));return}const R=[[2*d,2*x],[2*d+1,2*x],[2*d,2*x+1],[2*d+1,2*x+1]],T=R.map(([L,X])=>`${m+1}/${L}/${X}`);if(m<s||T.every(i)||!i(v)){for(const[L,X]of R)h(m+1,L,X);return}u.push(...T.map(L=>[L,S])),l.push([v,S])},[f,p]=pc(of,t.west,t.north),[g,_]=pc(of,t.east,t.south);for(let m=f;m<=g;m++)for(let d=p;d<=_;d++)h(of,m,d);return l.sort((m,d)=>m[1]-d[1]),u.sort((m,d)=>m[1]-d[1]),{show:l.slice(0,NR).map(m=>m[0]),want:u.map(m=>m[0])}}const Ms=[[["motorway"],"#f2d58a",[2.2,3,4.2,6],"#2a2620"],[["trunk"],"#efdfae",[1.8,2.6,3.6,5.2],"#2a2620"],[["primary"],"#f1ece0",[1.4,2.1,3,4.6],"#3a362f"],[["secondary"],"#ece7da",[.9,1.5,2.4,3.8],"#3a362f"],[["tertiary"],"#e6e1d4",[.6,1.1,1.9,3.2],null],[["minor"],"#ddd8cb",[0,.6,1.2,2.2],null],[["service","track"],"#cfcabc",[0,0,.6,1.2],null],[["path"],"#c9c3b4",[0,0,0,.7],null]],kR="#6f99ad",zR="#6f99ad";function BR(t,e,n){const i=t.layers,r=qn/4096,s=Math.min(3,Math.max(0,e-11)),o=(c,h)=>{const f=i[c];if(f)for(let p=0;p<f.length;p++)h(f.feature(p))},a=c=>{const h=new Path2D;for(const f of c.loadGeometry())f.forEach((p,g)=>g?h.lineTo(p.x*r,p.y*r):h.moveTo(p.x*r,p.y*r)),c.type===3&&h.closePath();return h};n.clearRect(0,0,qn,qn),o("landuse",c=>{const h={residential:"rgba(222,214,200,0.22)",commercial:"rgba(232,205,190,0.3)",retail:"rgba(232,205,190,0.3)",industrial:"rgba(214,206,214,0.3)",cemetery:"rgba(170,200,160,0.3)",hospital:"rgba(240,200,200,0.35)",school:"rgba(236,226,190,0.3)",railway:"rgba(210,205,200,0.25)"}[c.properties.class];h&&(n.fillStyle=h,n.fill(a(c)))}),o("park",c=>{n.fillStyle="rgba(132,176,112,0.32)",n.fill(a(c))}),o("landcover",c=>{const h={wood:"rgba(92,132,86,0.18)",grass:"rgba(150,186,120,0.18)",wetland:"rgba(120,170,170,0.25)",sand:"rgba(230,214,170,0.3)",ice:"rgba(245,248,250,0.6)"}[c.properties.class];h&&(n.fillStyle=h,n.fill(a(c)))}),n.fillStyle=kR,o("water",c=>{c.properties.class!=="swimming_pool"&&n.fill(a(c))}),n.strokeStyle=zR,n.lineCap="round",n.lineJoin="round",o("waterway",c=>{var f;const h=(f={river:[1.2,1.8,2.6,3.6],canal:[.8,1.2,1.8,2.6],stream:[0,.5,.9,1.4]}[c.properties.class])==null?void 0:f[s];h&&(n.lineWidth=h,n.stroke(a(c)))}),e>=13&&(n.fillStyle=e>=14?"rgba(214,206,194,0.92)":"rgba(214,206,194,0.75)",n.strokeStyle="rgba(90,82,72,0.6)",n.lineWidth=.5,o("building",c=>{const h=a(c);n.fill(h),e>=14&&n.stroke(h)}));const l=Ms.map(()=>[]),u=[];o("transportation",c=>{if(c.type!==2)return;const h=Ms.findIndex(([f])=>f.includes(c.properties.class));h>=0?l[h].push(c):c.properties.class==="rail"&&e>=12&&u.push(c)});for(let c=Ms.length-1;c>=0;c--){const[,,h,f]=Ms[c],p=h[s];if(!(!p||!f)){n.strokeStyle=f,n.lineWidth=p+1.6;for(const g of l[c])n.stroke(a(g))}}for(let c=Ms.length-1;c>=0;c--){const[,h,f]=Ms[c],p=f[s];if(p){n.strokeStyle=h,n.lineWidth=p;for(const g of l[c])n.stroke(a(g))}}n.setLineDash([3,3]),n.strokeStyle="#5a5650",n.lineWidth=e>=14?1.6:1.1;for(const c of u)n.stroke(a(c));n.setLineDash([])}function HR(t){const e=2**(Ko-zy),[n,i]=pc(Ko,t.west,t.north),[r,s]=pc(Ko,t.east,t.south),o=Math.floor(n/e)*e,a=Math.floor(i/e)*e;return{x0:o,y0:a,width:r-o+1,height:s-a+1}}function VR(t,e,n){t.fill(0);for(const[i,r]of n){const[s,o,a]=i.split("/").map(Number),l=Ko-s,u=2**l,c=Math.max(0,o*u-e.x0),h=Math.min(e.width,(o+1)*u-e.x0),f=Math.max(0,a*u-e.y0),p=Math.min(e.height,(a+1)*u-e.y0);for(let g=f;g<p;g++)for(let _=c;_<h;_++){const m=(g*e.width+_)*4;t[m]=r,t[m+1]=l,t[m+3]=255}}}class GR{constructor(e,n,i){Object.assign(this,{renderer:e,region:n,U:i}),this.tiles=new Map,this.inflight=0,this.frameNo=0,this.visible=!0,this.failures=0,this.grid=HR(n),this.indexData=new Uint8Array(this.grid.width*this.grid.height*4),this.index=new Ii(this.indexData,this.grid.width,this.grid.height),this.index.magFilter=this.index.minFilter=It,this.index.needsUpdate=!0,this.tex=new zc(null,qn,qn,af),this.tex.source.dataReady=!1,this.tex.generateMipmaps=!0,this.tex.minFilter=Ri,this.tex.magFilter=Jt,this.tex.anisotropy=8,this.tex.colorSpace=On,this.tex.needsUpdate=!0,e.initTexture(this.tex),this.free=Array.from({length:af},(s,o)=>af-1-o),this.canvas=typeof OffscreenCanvas<"u"?new OffscreenCanvas(qn,qn):Object.assign(document.createElement("canvas"),{width:qn,height:qn}),this.ctx=this.canvas.getContext("2d");const r=2**Ko;i.streetTex.value=this.tex,i.streetIndex.value=this.index,i.streetGeo.value.set(this.grid.x0/r*360-180,Math.PI*(1-2*this.grid.y0/r),this.grid.width,this.grid.height),this._indexKey="",this.version=fetch(LR).then(s=>s.json()).then(s=>s.tiles[0].split("/planet/")[1].split("/")[0]).catch(()=>null)}_load(e){const n={state:"loading",used:this.frameNo,layer:-1};this.tiles.set(e,n),this.inflight++;const[i,r,s]=e.split("/").map(Number);this.version.then(o=>{if(!o)throw new Error("no tile version");return fetch(PR.replace("{v}",o).replace("{z}",i).replace("{x}",r).replace("{y}",s))}).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.arrayBuffer()}).then(o=>{n.buf=new Uint8Array(o),n.state="loaded"}).catch(()=>{n.state="failed",this.failures++}).finally(()=>{this.inflight--})}_draw(e,n){let i=this.free.pop();if(i===void 0){let s=null;for(const[o,a]of this.tiles)a.layer>=0&&a.used<this.frameNo&&(!s||a.used<s[1].used)&&(s=[o,a]);if(!s)return!1;i=s[1].layer,s[1].layer=-1}const r=Number(e.split("/")[0]);return BR(new hR(new pR(n.buf)),r,this.ctx),this._upload(i),n.layer=i,!0}_upload(e){const n=this.renderer.getContext();this.renderer.state.bindTexture(n.TEXTURE_2D_ARRAY,this.renderer.properties.get(this.tex).__webglTexture),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),n.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,e,qn,qn,1,n.RGBA,n.UNSIGNED_BYTE,this.canvas),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),this._mipsDue=!0}update(e,n,i){this.frameNo++;const r=c=>{var h;return((h=this.tiles.get(c))==null?void 0:h.layer)>=0},{show:s,want:o}=this.visible?OR(this.region,e.position.toArray(),i,r,{reach:Math.min(120,Math.max(20,n*2.2))}):{show:[],want:[]};for(const c of[...s,...o]){const h=this.tiles.get(c);h?h.used=this.frameNo:this.inflight<UR&&this._load(c)}const a=performance.now();for(const c of o){const h=this.tiles.get(c);if(!((h==null?void 0:h.state)!=="loaded"||h.layer>=0)&&(performance.now()-a>IR||!this._draw(c,h)))break}if(this._mipsDue){const c=this.renderer.getContext();this.renderer.state.bindTexture(c.TEXTURE_2D_ARRAY,this.renderer.properties.get(this.tex).__webglTexture),c.generateMipmap(c.TEXTURE_2D_ARRAY),this._mipsDue=!1}const l=s.map(c=>[c,this.tiles.get(c).layer]),u=l.map(c=>c.join(":")).sort().join(",");if(u!==this._indexKey&&(this._indexKey=u,VR(this.indexData,this.grid,l),this.index.needsUpdate=!0),this.U.streetOn.value=s.length>0?1:0,this.tiles.size>I0){const c=new Set(s),h=[...this.tiles].filter(([f,p])=>!c.has(f)&&p.state!=="loading").sort((f,p)=>f[1].used-p[1].used);for(const[f,p]of h.slice(0,this.tiles.size-I0))p.layer>=0&&this.free.push(p.layer),this.tiles.delete(f)}return this.pending=o.filter(c=>!r(c)).length,s.length}setVisible(e){this.visible=e}dispose(){this.tex.dispose(),this.index.dispose(),this.tiles.clear()}}const WR=`
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
  }`,jR=`
  uniform float uStyle, uFlat, uInterval, uHoleOn, uHaze;
  uniform vec4 uHole;
  // water masks from OpenStreetMap (1 = water): the region's overview mask, and a detail tile's own finer mask
  uniform sampler2D uWater, uTileWater; uniform vec4 uWaterRect, uTileWaterRect; uniform float uWaterOn, uTileWaterOn;
  // street tiles (see VectorDrape.js): a layer per drawn tile, and an index with one texel per zoom-14 tile giving
  // (layer, zoom difference) of the tile that covers it. Where they are drawn they carry the (exact) water.
  uniform highp sampler2DArray uStreetTex; uniform sampler2D uStreetIndex; uniform vec4 uStreetGeo; uniform float uStreetOn;
  uniform vec3 uBg; uniform vec2 uHazeRange;
  // wind gusts on land (see GustField.js): R = m/s / 64 times G, the coverage
  uniform sampler2D uGust; uniform vec4 uGustRect; uniform float uGustOn, uGustStops[6]; uniform vec3 uGustColors[6];
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
  vec4 gustCol(float ms) {
    if (ms < uGustStops[0] * 0.8) return vec4(0.0);
    vec3 c = uGustColors[5];
    for (int i = 0; i < 5; i++) {
      if (ms < uGustStops[i + 1]) { c = mix(uGustColors[i], uGustColors[i + 1], clamp((ms - uGustStops[i]) / (uGustStops[i + 1] - uGustStops[i]), 0.0, 1.0)); break; }
    }
    return vec4(c, smoothstep(uGustStops[0] * 0.8, uGustStops[0], ms) * mix(0.5, 0.8, smoothstep(uGustStops[0], uGustStops[3], ms)));
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
    float wet0 = wet;   // the mask's water, also under street tiles
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
    // wind gusts tint the land (water left clear), under the same hillshade
    if (uGustOn > 0.5) {
      vec2 guv = (vPos.xz - uGustRect.xy) / (uGustRect.zw - uGustRect.xy);
      if (guv.x >= 0.0 && guv.x <= 1.0 && guv.y >= 0.0 && guv.y <= 1.0) {
        vec2 gr = texture2D(uGust, guv).rg;
        vec4 gc = gr.y > 0.5 ? gustCol(gr.x / gr.y * 63.75) : vec4(0.0);
        col = mix(col, gc.rgb * mix(0.75, 1.1, shade), gc.a * (1.0 - wet0) * smoothstep(0.5, 1.0, gr.y));
      }
    }
    // (tile skirts keep their edge's colour, so a hairline crack between tiles shows the same ground)
    // aerial haze toward the background, in 3D only: clear up to the orbit target, thickening beyond it
    float d = distance(vPos, cameraPosition);
    col = mix(col, uBg, uHaze * (1.0 - uFlat) * smoothstep(uHazeRange.x, uHazeRange.y, d));
    gl_FragColor = vec4(col, 1.0);
  }`,Md=new Ii(new Uint8Array([0]),1,1,Pa);Md.needsUpdate=!0;function lf(t,e={}){return new $t({vertexShader:WR,fragmentShader:jR,uniforms:{uExag:t.exag,uFlat:t.flat,uShadeK:t.shadeK,uStyle:t.style,uHaze:t.haze,uHazeRange:t.hazeRange,uBg:t.bg,uInterval:{value:100},uWater:t.water,uWaterRect:t.waterRect,uWaterOn:t.waterOn,uTileWater:{value:e.tileWater??Md},uTileWaterRect:{value:e.tileWaterRect??new He},uTileWaterOn:{value:e.tileWater?1:0},uGust:t.gust,uGustRect:t.gustRect,uGustOn:t.gustOn,uGustStops:t.gustStops,uGustColors:t.gustColors,uProj:t.proj,uStreetTex:t.streetTex,uStreetIndex:t.streetIndex,uStreetGeo:t.streetGeo,uStreetOn:t.streetOn,uMask:{value:e.mask??Md},uMaskRect:{value:e.maskRect??new He},uMaskEps:{value:e.maskEps??new Ue},uMaskOn:{value:e.mask?1:0},uHole:{value:e.hole??new He},uHoleOn:{value:e.hole?1:0},uSinkBox:{value:e.sinkBox??new He}}})}const XR={relief:0,mono:1,contours:2},F0="#121211",$R=[[1,800],[2,1/0]],YR=[[1,1100],[2,1/0]],qR=128;class Xp{constructor(e,n,i){tm(this,"_tick",()=>{var c,h;const e=performance.now(),n=Math.min(this.clock.getDelta(),.05),i=this.flight;if(i){const f=i.dur>0?Math.min(1,(e-i.t0)/i.dur):1,p=fC(f);this.camera.position.lerpVectors(i.fromPos,i.pos,p),this.controls.target.lerpVectors(i.fromTarget,i.target,p),i.target.equals(i.fromTarget)||(this.camera.position.y+=Math.sin(Math.PI*p)*i.fromPos.distanceTo(i.pos)*.12),f>=1&&(this.flight=null)}if(this.held.size){const f=pC(this.held,this.camera.position.toArray(),this.controls.target.toArray(),n);this.camera.position.x+=f[0],this.camera.position.z+=f[2],this.controls.target.x+=f[0],this.controls.target.z+=f[2]}const r=this.reducedMotion;this.controls.enableDamping=!r;const s=this.camera.position.distanceTo(this.controls.target);this.controls.rotateSpeed=xC(s),this.controls.update();for(const[f,p]of[["flat",5],["style",8]])this.U[f].value=gC(this.U[f].value,this.targets[f],n,p,r);this.camera.near=eo.clamp(s*.01,.05,20),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this._updateLevels(s);const o=this.detail.update(this.camera,s);this._drapeDue&&e>this._drapeDue&&(this._drapeDue=0,this._drape());const a=this.streets.update(this.camera,s,this.P),l=this.e,u=this.U.flat.value;for(const f of Object.values(this.lines))f.setScale(l,u),f.updateDistance(s,a>0);(c=this.rivers)==null||c.update(s),this.U.shadeK.value=eo.clamp(Math.sqrt(s/120),1,3.2),this.U.hazeRange.value.set(s,s*4),this.frame={dist:s,tiles:o,streets:a,streetsPending:this.streets.pending+this.streets.inflight,flat:u,exag:this.U.exag.value,e:l,failures:this.detail.failures},(h=this.onFrame)==null||h.call(this,this),this.renderer.render(this.scene,this.camera),this._raf=requestAnimationFrame(this._tick)});this.bundle=n,this.P=n.P,this.held=new Set,this.flight=null,this._view="3d";const r=this.renderer=new cy({canvas:e,antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(devicePixelRatio,1.5)),r.setSize(innerWidth,innerHeight),this.scene=new hy,this.scene.background=new Oe(F0),this.camera=new An(30,innerWidth/innerHeight,.5,12e3);const s=this.P,o=n.manifest.region,a=.5/n.manifest.water.overview.per_deg;i.flipY=!1,i.colorSpace=On,i.needsUpdate=!0,this.U={exag:{value:1.5},flat:{value:0},style:{value:0},haze:{value:.45},bg:{value:new Oe(F0)},shadeK:{value:1},hazeRange:{value:new Ue(1e3,4e3)},proj:{value:new He(s.lon0,s.lat0,s.kx,s.kz)},streetTex:{value:null},streetIndex:{value:null},streetGeo:{value:new He},streetOn:{value:0},gust:{value:null},gustRect:{value:new He},gustOn:{value:0},gustStops:{value:new Array(6).fill(0)},gustColors:{value:Array.from({length:6},()=>new Oe)},water:{value:i},waterOn:{value:1},waterRect:{value:new He(s.toX(o.west-a),s.toZ(o.north+a),s.toX(o.east+a),s.toZ(o.south-a))}},this.targets={flat:0,style:0},this.regionBox=new He(s.toX(o.west),s.toX(o.east),s.toZ(o.north),s.toZ(o.south)),this.detail=new KC(this.scene,this.U,n,s,h=>lf(this.U,h));const l=(h,f)=>new He(h.x+f,h.y-f,h.z+f,h.w-f),u=lf(this.U,{mask:this.detail.mask,maskRect:this.detail.maskRect,maskEps:this.detail.maskEps});u.polygonOffset=!0,u.polygonOffsetFactor=-1,u.polygonOffsetUnits=-2,this.levels=[this._levels(n.outer,lf(this.U,{hole:l(this.regionBox,1),sinkBox:l(this.regionBox,10)}),YR,0),this._levels(n.overview,u,$R,0)],this.elevAt=(h,f)=>this.detail.sample(h,f)??n.overview.sample(h,f)??n.outer.sample(h,f)??0,this.lines=Object.fromEntries(Object.entries(n.lines).map(([h,f])=>[h,new iR(this.scene,h,f,s)])),this._drape=()=>{var p;const h=(g,_)=>this.detail.isShown(g,_),f=(g,_)=>n.overview.sample(g,_);for(const g of Object.values(this.lines))g.drape(h,f);(p=this.rivers)==null||p.drape(this.elevAt)},this._drape(),this.streets=new GR(this.renderer,o,this.U),this.detail.onChange=()=>{this._drapeDue=performance.now()+120},this._resolution();const c=this.controls=new PC(this.camera,e);c.enableDamping=!0,c.dampingFactor=.08,c.screenSpacePanning=!1,c.zoomToCursor=!0,c.maxPolarAngle=Math.PI*.47,c.minDistance=4,c.maxDistance=4500,c.mouseButtons={LEFT:pi.PAN,MIDDLE:pi.DOLLY,RIGHT:pi.ROTATE},c.touches={ONE:Ci.PAN,TWO:Ci.DOLLY_ROTATE},c.addEventListener("start",()=>{this.flight=null}),this._onContext=h=>h.preventDefault(),e.addEventListener("contextmenu",this._onContext),this._onKeyDown=h=>{_C(h)&&(h.preventDefault(),this.held.add(h.key),this.flight=null)},this._onKeyUp=h=>h.key==="Meta"?this.held.clear():this.held.delete(h.key),this._onBlur=()=>this.held.clear(),this._onResize=()=>{var h;r.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this._resolution(),(h=this.onResize)==null||h.call(this)},addEventListener("keydown",this._onKeyDown),addEventListener("keyup",this._onKeyUp),addEventListener("blur",this._onBlur),addEventListener("resize",this._onResize),this._motion=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.jumpTo("home"),this.clock=new Ty,this._v=new U,this.frame={dist:0,tiles:0,flat:0},window.__earthnote=this,this._raf=requestAnimationFrame(this._tick)}static async create(e,n){const i=await new Gp().loadAsync(n.waterUrl);return new Xp(e,n,i)}_levels(e,n,i,r){return{grid:e,material:n,order:r,levels:i.map(([s,o])=>({step:s,far:o,mesh:null})),current:-1}}_levelMesh(e,n){if(!n.mesh){const{ncols:i,nrows:r}=e.grid.meta;n.mesh=new Fs;for(const s of Sw(i,r,qR*n.step,n.step)){const o=new en(ex(Cy,e.grid,this.P,n.step,0,s),e.material);o.renderOrder=e.order,n.mesh.add(o)}this.scene.add(n.mesh)}return n.mesh}_updateLevels(e){const n=this.camera.position,i=this.regionBox,r=Math.min(n.x-i.x,i.y-n.x,n.z-i.z,i.w-n.z),s=Math.max(e,r>0?Math.hypot(r,n.y):e);for(const o of this.levels){const a=o===this.levels[0]?s:e;let l=o.current<0?o.levels.findIndex(c=>a<=c.far):o.current;for(;l<o.levels.length-1&&a>o.levels[l].far*1.1;)l++;for(;l>0&&a<o.levels[l-1].far*.9;)l--;if(l===o.current)continue;const u=this._levelMesh(o,o.levels[l]);for(const c of o.levels)c.mesh&&(c.mesh.visible=c.mesh===u);o.current=l}}_resolution(){for(const e of Object.values(this.lines??{}))e.setResolution(innerWidth,innerHeight)}get reducedMotion(){var e;return!!((e=this._motion)!=null&&e.matches)}get e(){return this.U.exag.value*.001*(1-this.U.flat.value)}project(e,n,i){const r=this._v.set(e,n,i).project(this.camera);return[(r.x+1)/2*innerWidth,(1-r.y)/2*innerHeight,r.z]}_pose(e){return dC(e,this.P,this.elevAt,this.e)}jumpTo(e){const n=this._pose(L0[e]);this.camera.position.set(...n.pos),this.controls.target.set(...n.target)}flyTo(e){const n=this._pose(L0[e]);this._fly(new U(...n.pos),new U(...n.target),1800)}flyToPoint(e,n,i=60){const r=new U(this.P.toX(e),this.elevAt(e,n)*this.e,this.P.toZ(n)),s=this.camera.position.clone().sub(this.controls.target).normalize();this._view==="2d"&&s.set(0,1,.001).normalize(),this._fly(r.clone().add(s.multiplyScalar(i)),r,1500)}orbit(e){const n=this.controls.target,i=yC(this.camera.position.toArray(),n.toArray(),e,.001,this.controls.maxPolarAngle);this._fly(new U(...i),n.clone(),350)}_fly(e,n,i){this.flight={t0:performance.now(),dur:mC(i,this.reducedMotion),fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),pos:e,target:n}}setStyle(e){this.targets.style=XR[e]}setExag(e){const n=e/this.U.exag.value,i=this.controls.target.y*(n-1);this.U.exag.value=e,this.controls.target.y+=i,this.camera.position.y+=i}addRivers(e){this.rivers=e,e.drape(this.elevAt)}setLayer(e,n){var i;e==="streets"?this.streets.setVisible(n):(i=this.lines[e])==null||i.setVisible(n)}setView(e){var a;if(e===this._view)return;this._view=e;const n=e==="2d";this.targets.flat=n?1:0;const i=new fc().setFromVector3(this.camera.position.clone().sub(this.controls.target));n&&(this._savedPolar=i.phi),i.phi=n?.001:this._savedPolar??.7,this.controls.minPolarAngle=0,this.controls.maxPolarAngle=n?.001:Math.PI*.47;const r=this.controls.target.clone(),s=this.P.fromX(r.x),o=this.P.fromZ(r.z);r.y=n?0:this.elevAt(s,o)*this.U.exag.value*.001,this._fly(r.clone().add(new U().setFromSpherical(i)),r,900),(a=this.onView)==null||a.call(this,e)}dispose(){var e,n;cancelAnimationFrame(this._raf),removeEventListener("keydown",this._onKeyDown),removeEventListener("keyup",this._onKeyUp),removeEventListener("blur",this._onBlur),removeEventListener("resize",this._onResize),this.renderer.domElement.removeEventListener("contextmenu",this._onContext);for(const i of Object.values(this.lines))i.dispose();for(const i of this.levels){for(const r of i.levels)(e=r.mesh)==null||e.traverse(s=>{var o;return(o=s.geometry)==null?void 0:o.dispose()});i.material.dispose()}(n=this.rivers)==null||n.dispose(),this.streets.dispose(),this.detail.dispose(),this.controls.dispose(),this.renderer.dispose(),window.__earthnote===this&&delete window.__earthnote}}function O0({label:t,options:e,value:n,onChange:i}){return b.jsxs("div",{className:"ctl-row",children:[b.jsx("span",{className:"eyebrow",children:t}),b.jsx("div",{className:"seg",role:"group","aria-label":t,children:e.map(([r,s])=>b.jsx("button",{"aria-pressed":n===r,onClick:()=>{r!==n&&i(r)},children:s},r))})]})}function KR({label:t,sub:e,k:n,on:i,onChange:r,swatch:s}){return b.jsxs("button",{className:"tog",role:"switch","aria-checked":i,"aria-label":t,onClick:()=>r(!i),children:[b.jsx("span",{className:"sw"}),b.jsxs("span",{className:"t",children:[t,e&&b.jsx("small",{children:e})]}),s,n&&b.jsx("kbd",{children:n})]})}function ZR({scene:t}){const[e,n]=ie.useState("3d"),[i,r]=ie.useState("relief"),[s,o]=ie.useState(t.U.exag.value);return ie.useEffect(()=>(t.onView=n,()=>{t.onView=null}),[t]),b.jsxs("div",{className:"panel controls",children:[b.jsx(O0,{label:"View",options:[["3d","3D"],["2d","2D"]],value:e,onChange:a=>{n(a),t.setView(a)}}),b.jsx(O0,{label:"Style",options:[["relief","Relief"],["mono","Mono"],["contours","Contours"]],value:i,onChange:a=>{r(a),t.setStyle(a)}}),b.jsxs("label",{className:"ctl-row slider",children:["Vertical exaggeration ",b.jsxs("span",{className:"mono",children:[s.toFixed(1),"×"]}),b.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:s,"aria-label":"Vertical exaggeration",disabled:e==="2d",onChange:a=>{const l=+a.target.value;o(l),t.setExag(l)}})]}),b.jsx("div",{className:"hint",children:"Drag to move · right-drag or Shift-drag to rotate · scroll to zoom · arrow keys to glide"})]})}const uf=[["motorway","Motorways","interstates and freeways","M"],["trunk","Highways","trunk roads","H"],["primary","Main roads","primary roads","R"],["borders","Borders","country, state and province","B"],["places","Place names","cities, towns and peaks","N"],["streets","Street detail","every road, building and shoreline as you zoom in","S"]];function QR({scene:t,labels:e}){const[n,i]=ie.useState(()=>Object.fromEntries(uf.map(([o])=>[o,!0]))),r=(o,a)=>{i(l=>({...l,[o]:a})),o==="borders"?(t.setLayer("country",a),t.setLayer("state",a)):o==="places"?e==null||e.setVisible(a):t.setLayer(o,a)},s=ie.useRef(null);return s.current=o=>{if(o.metaKey||o.ctrlKey||o.altKey||Wp(o.target))return;const a=uf.find(([,,,l])=>{var u;return l.toLowerCase()===((u=o.key)==null?void 0:u.toLowerCase())});a&&r(a[0],!n[a[0]])},ie.useEffect(()=>{const o=a=>{var l;return(l=s.current)==null?void 0:l.call(s,a)};return addEventListener("keydown",o),()=>removeEventListener("keydown",o)},[]),b.jsxs("div",{className:"panel layers-panel",children:[b.jsx("div",{className:"eyebrow",children:"Base map"}),uf.map(([o,a,l,u])=>b.jsx(KR,{k:u,label:a,sub:l,on:n[o],onChange:c=>r(o,c)},o))]})}function JR({active:t,onPlace:e}){return b.jsxs("nav",{className:"panel goto","aria-label":"Go to",children:[b.jsx("div",{className:"eyebrow",children:"Go to"}),b.jsx("div",{className:"row",children:Oy.map(([n,i])=>b.jsx("button",{"aria-pressed":t===n,onClick:()=>e(n),children:i},n))})]})}function eP(t,e,n=8){const i=e.trim().toLowerCase();if(!i)return[];const r=[],s=[];for(const o of t){const a=o.name.toLowerCase();a.startsWith(i)?r.push(o):a.includes(i)&&s.push(o)}return[...r,...s].slice(0,n)}const tP={city:"City",town:"Town",peak:"Peak"};function nP({places:t,detail:e,onPick:n}){const[i,r]=ie.useState(""),[s,o]=ie.useState(0),a=ie.useMemo(()=>eP(t,i),[t,i]),l=u=>{n(u),r(""),o(0)};return b.jsxs("header",{className:"panel header",children:[b.jsxs("div",{className:"title-row",children:[b.jsx("h1",{children:"Earthnote · Pacific Northwest"}),b.jsx("span",{className:"detail-tag mono",title:"Terrain detail at the view centre",children:e})]}),b.jsx("p",{children:"Washington, Oregon, southern British Columbia and the offshore margin."}),b.jsxs("div",{className:"search",children:[b.jsx("input",{type:"search",placeholder:"Find a city, town or peak",value:i,"aria-label":"Find a place",onChange:u=>{r(u.target.value),o(0)},onKeyDown:u=>{u.key==="ArrowDown"&&(u.preventDefault(),o(c=>Math.min(a.length-1,c+1))),u.key==="ArrowUp"&&(u.preventDefault(),o(c=>Math.max(0,c-1))),u.key==="Enter"&&a[s]&&l(a[s]),u.key==="Escape"&&r("")}}),a.length>0&&b.jsx("ul",{role:"listbox",children:a.map((u,c)=>b.jsxs("li",{role:"option","aria-selected":c===s,onMouseDown:()=>l(u),children:[b.jsx("span",{children:u.name}),b.jsxs("span",{className:"sub",children:[tP[u.kind],u.pop?` · ${u.pop.toLocaleString()}`:""]})]},`${u.name}-${u.lon}`))})]})]})}const iP=[["Move","drag, or the arrow keys"],["Rotate / tilt","right-drag, or Shift- / Ctrl-drag"],["Zoom","scroll or pinch; the nav pad's + and −"],["Layers","M motorways · H highways · R main roads · B borders · N names · S streets"]];function rP({manifest:t}){const e=t.credits;return b.jsxs("div",{className:"panel helppanel",children:[b.jsx("div",{className:"hc-set",children:iP.map(([n,i])=>b.jsxs("div",{className:"hc-row",children:[b.jsx("b",{children:n}),b.jsx("span",{children:i})]},n))}),b.jsx("div",{className:"hc-note",children:"Terrain: about 250 m near the camera, 1 km for the region, 2 km offshore. Heights are exaggerated in 3D (see View); 2D shows the same shading flat."}),b.jsxs("div",{className:"attribution",children:[e.terrain,". ",e.osm,". ",e.ne,". Street detail: OpenFreeMap © OpenMapTiles, data © OpenStreetMap contributors.",b.jsxs("div",{className:"hc-dev mono",children:["bundle built ",t.built]})]})]})}const sP={view:b.jsxs(b.Fragment,{children:[b.jsx("path",{d:"M1.3 8S3.8 3.5 8 3.5 14.7 8 14.7 8 12.2 12.5 8 12.5 1.3 8 1.3 8z"}),b.jsx("circle",{cx:"8",cy:"8",r:"2.1"})]}),layers:b.jsxs(b.Fragment,{children:[b.jsx("path",{d:"M8 2 1.8 5.3 8 8.6l6.2-3.3z"}),b.jsx("path",{d:"m1.8 8.2 6.2 3.3 6.2-3.3"}),b.jsx("path",{d:"m1.8 11 6.2 3.3 6.2-3.3"})]}),legend:b.jsxs(b.Fragment,{children:[b.jsx("rect",{x:"1.8",y:"3",width:"2.4",height:"2.4"}),b.jsx("rect",{x:"1.8",y:"10.6",width:"2.4",height:"2.4"}),b.jsx("path",{d:"M7 4.2h7.2M7 8h7.2M7 11.8h7.2M1.8 8h2.4"})]}),help:b.jsxs(b.Fragment,{children:[b.jsx("circle",{cx:"8",cy:"8",r:"6.5"}),b.jsx("path",{d:"M6.1 6.3a1.95 1.95 0 1 1 2.7 1.8c-.5.2-.8.6-.8 1.1v.7"}),b.jsx("circle",{cx:"8",cy:"11.6",r:".4",fill:"currentColor"})]})};function oP({items:t,open:e,onToggle:n}){const i=r=>`hud-pop-${r}`;return b.jsxs("div",{className:"hud-dock",children:[b.jsx("div",{className:"dock-bar",children:t.map(({key:r,label:s,icon:o})=>b.jsx("button",{className:"panel dock-btn","aria-label":s,title:s,"aria-expanded":e.has(r),"aria-controls":i(r),onClick:()=>n(r),children:b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.3",strokeLinejoin:"round","aria-hidden":"true",children:sP[o]})},r))}),b.jsx("div",{className:"dock-pops",children:t.map(({key:r,label:s,node:o})=>b.jsx("div",{id:i(r),className:`dock-pop${e.has(r)?" open":""}`,role:"group","aria-label":s,children:o},r))})]})}const aP="linear-gradient(90deg, rgb(117,140,94) 0%, rgb(150,161,110) 9%, rgb(184,171,130) 27%, rgb(179,168,156) 52%, rgb(219,214,207) 79%, rgb(245,245,242) 100%)",lP="linear-gradient(90deg, rgb(20,38,61) 0%, rgb(36,69,99) 49%, rgb(61,105,138) 89%, rgb(102,148,173) 97%, rgb(143,181,194) 100%)";function Eo({name:t,label:e}){const[n,i,r,s]=Fy[t];return b.jsxs("div",{className:"row",children:[b.jsxs("svg",{className:"glyph",viewBox:"0 0 18 12","aria-hidden":"true",children:[r&&b.jsx("line",{x1:"1",y1:"6",x2:"17",y2:"6",stroke:r,strokeWidth:s,strokeLinecap:"round"}),b.jsx("line",{x1:"1",y1:"6",x2:"17",y2:"6",stroke:n,strokeWidth:i,strokeLinecap:"round"})]}),e]})}function uP(){return b.jsxs("div",{className:"panel legend",children:[b.jsxs("div",{children:[b.jsx("div",{className:"eyebrow",children:"Elevation"}),b.jsx("div",{className:"ramp",style:{background:aP}}),b.jsxs("div",{className:"ramp-labels mono",children:[b.jsx("span",{children:"0"}),b.jsx("span",{children:"1,700"}),b.jsx("span",{children:"3,300 m"})]})]}),b.jsxs("div",{children:[b.jsx("div",{className:"eyebrow",children:"Depth"}),b.jsx("div",{className:"ramp",style:{background:lP}}),b.jsxs("div",{className:"ramp-labels mono",children:[b.jsx("span",{children:"3,500 m"}),b.jsx("span",{children:"1,800"}),b.jsx("span",{children:"0"})]})]}),b.jsxs("div",{children:[b.jsx("div",{className:"eyebrow",children:"Lines"}),b.jsx(Eo,{name:"motorway",label:"Motorway / interstate"}),b.jsx(Eo,{name:"trunk",label:"Highway"}),b.jsx(Eo,{name:"primary",label:"Main road"}),b.jsx(Eo,{name:"country",label:"Country border"}),b.jsx(Eo,{name:"state",label:"State / province"})]})]})}const cP=[["⟲","Rotate left",{dAz:-20}],["⟳","Rotate right",{dAz:20}],["▲","Tilt toward the horizon",{dPol:10}],["▼","Tilt toward overhead",{dPol:-10}],["+","Zoom in",{zoom:.6}],["−","Zoom out",{zoom:1.6}],["N","North up",{northUp:!0}]];function hP({scene:t}){return b.jsx("nav",{className:"panel navpad","aria-label":"Navigation",children:cP.map(([e,n,i])=>b.jsx("button",{title:n,"aria-label":n,onClick:()=>t.orbit(i),children:e},n))})}const k0=[.1,.2,.5,1,2,5,10,20,50,100,200,500];function fP(t,e,n){return 2*e*Math.tan(t*Math.PI/360)/n}function dP(t,e=110,n=150){let i=k0[0];for(const r of k0)r/t<=n&&Math.abs(r/t-e)<Math.abs(i/t-e)&&(i=r);return{km:i,px:i/t}}function pP({scene:t}){const[e,n]=ie.useState(null);if(ie.useEffect(()=>{const r=()=>{const o=t.camera,a=o.position.distanceTo(t.controls.target),l=dP(fP(o.fov,a,innerHeight));n(u=>u&&u.km===l.km&&Math.abs(u.px-l.px)<1?u:l)};r();const s=setInterval(r,250);return()=>clearInterval(s)},[t]),!e)return null;const i=e.km<1?`${Math.round(e.km*1e3)} m`:`${e.km} km`;return b.jsxs("div",{className:"panel scalebar","aria-label":`Scale: ${i} at the view centre`,title:"Exact at the view centre; nearer ground looks larger, farther ground smaller",children:[b.jsx("div",{className:"sb-bar",style:{width:`${e.px}px`}}),b.jsx("div",{className:"sb-label mono",children:i})]})}function mP(){try{const t=document.createElement("canvas");return!!(t.getContext("webgl2")||t.getContext("webgl"))}catch{return!1}}function gP(){const[t,e]=ie.useState(null),[n,i]=ie.useState(null);return ie.useEffect(()=>{Ew().then(e,i)},[]),n?b.jsx("div",{className:"app-message",role:"alert",children:b.jsxs("div",{children:[n.message,n instanceof Su&&b.jsx("code",{children:ww})]})}):t?mP()?b.jsx(_P,{bundle:t,onError:i}):b.jsx("div",{className:"app-message",children:"This map needs WebGL, which this browser has turned off."}):b.jsx("div",{className:"app-message",children:"Loading the map…"})}const z0="nov2026_ar",vP=t=>t.streets>0?"streets":t.flat>.5?"2D":t.tiles>0?"250 m":t.dist>2200?"2 km":"1 km";function _P({bundle:t,onError:e}){var w;const n=ie.useRef(null),i=ie.useRef(null),[r,s]=ie.useState(null),[o,a]=ie.useState(null),[l,u]=ie.useState(null),[c,h]=ie.useState(null),[f,p]=ie.useState(null),[g,_]=ie.useState(null),[m,d]=ie.useState(null),[x,v]=ie.useState(null),[S,P]=ie.useState("1 km"),[R,T]=ie.useState("home"),[L,X]=ie.useState(()=>new Set(["view"]));ie.useEffect(()=>{let O,k,z,J,H,K,D,Z,Y,oe,xe=!1,ze=0,$=performance.now();return Xp.create(n.current,t).then(q=>{if(xe){q.dispose();return}O=q,k=new Qb(i.current,t.places,q),q.onFrame=()=>{const le=performance.now(),ae=Math.min(.1,(le-$)/1e3);$=le,k.update(),H==null||H.update(),K==null||K.update(),Y==null||Y.update(),Z==null||Z.update(ae,q.frame.dist,q.controls.target),z==null||z.update(ae,q.frame.dist),ze++%15===0&&P(vP(q.frame))},s(q),a(k),fg(z0).then(le=>{!le||xe||(z=new Sb(q.scene,t.P,le,q.U),J=le.power?new $b(q.scene,t.P,q.U,q.elevAt):null,u({doc:le,layer:z,gusts:le.grids.gust?new Gb(q.U,t.P,le.grids.gust):null,power:J}),H=new tC(i.current,q),p(H),K=new hC(i.current,q),_(K),D=new Bb(q.scene,t.P,q.U,q.elevAt),d(D),le.sea&&(Z=new Hb(q.scene,t.P,le.sea.grid,q.U),Y=new rC(i.current,q),v({layer:Z,tides:Y}),window.__sea=Z),le.rivers&&Uw(le).then(ae=>{if(xe)return;const Ee=new Nb(q.scene,t.P,ae,q.U);q.addRivers(Ee);const Ae=new Ow(le,ae.count);Ae.get({type:"obs",k:Math.min(...le.rivers.obs)}).then(Be=>Ee.setBaseline(Be)).catch(()=>{}),h({layer:Ee,reaches:ae,flows:Ae})}).catch(()=>{}),oe=setInterval(()=>fg(z0).then(ae=>{ae&&!xe&&u(Ee=>Ee&&Ee.doc.updated===ae.updated?Ee:{...Ee,doc:ae})}).catch(()=>{}),10*6e4))}).catch(()=>{})},e),()=>{xe=!0,clearInterval(oe),k==null||k.dispose(),H==null||H.dispose(),K==null||K.dispose(),D==null||D.dispose(),J==null||J.dispose(),Z==null||Z.dispose(),Y==null||Y.dispose(),z==null||z.dispose(),O==null||O.dispose()}},[t,e]);const y=O=>X(k=>{const z=new Set(k);return z.delete(O)||z.add(O),z});return b.jsxs(b.Fragment,{children:[b.jsx("canvas",{ref:n,className:"map-scene","aria-label":"3D map of the Pacific Northwest"}),b.jsx("div",{id:"map-overlay",ref:i}),r&&b.jsxs(b.Fragment,{children:[b.jsx(nP,{places:t.places,detail:S,onPick:O=>{T(null),r.flyToPoint(O.lon,O.lat,O.kind==="peak"?45:70)}}),b.jsx(oP,{open:L,onToggle:y,items:[{key:"view",label:"View",icon:"view",node:b.jsx(ZR,{scene:r})},{key:"layers",label:"Layers",icon:"layers",node:b.jsx(QR,{scene:r,labels:o})},{key:"legend",label:"Legend",icon:"legend",node:b.jsx(uP,{})},{key:"help",label:"Help",icon:"help",node:b.jsx(rP,{manifest:t.manifest})}]}),b.jsx(JR,{active:R,onPlace:O=>{T(O),r.flyTo(O)}}),l&&b.jsx(CC,{doc:l.doc,layer:l.layer,gusts:l.gusts,power:l.power,rivers:c,reservoirs:f,gauges:g,floods:m,sea:x}),(l==null?void 0:l.power)&&b.jsx(qb,{scene:r,layer:l.power,canvas:n.current,utilities:(w=l.doc.power)==null?void 0:w.utilities}),c&&b.jsx(oC,{scene:r,layer:c.layer,canvas:n.current}),b.jsx(hP,{scene:r}),b.jsx(pP,{scene:r})]})]})}Q_(document.getElementById("root")).render(b.jsx(gP,{}));
