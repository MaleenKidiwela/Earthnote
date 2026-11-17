var SS=Object.defineProperty;var MS=(t,e,n)=>e in t?SS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Yn=(t,e,n)=>MS(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var pv={exports:{}},zu={},mv={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),wS=Symbol.for("react.portal"),ES=Symbol.for("react.fragment"),TS=Symbol.for("react.strict_mode"),AS=Symbol.for("react.profiler"),bS=Symbol.for("react.provider"),CS=Symbol.for("react.context"),RS=Symbol.for("react.forward_ref"),PS=Symbol.for("react.suspense"),LS=Symbol.for("react.memo"),DS=Symbol.for("react.lazy"),Cm=Symbol.iterator;function NS(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vv=Object.assign,_v={};function ho(t,e,n){this.props=t,this.context=e,this.refs=_v,this.updater=n||gv}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xv(){}xv.prototype=ho.prototype;function rp(t,e,n){this.props=t,this.context=e,this.refs=_v,this.updater=n||gv}var sp=rp.prototype=new xv;sp.constructor=rp;vv(sp,ho.prototype);sp.isPureReactComponent=!0;var Rm=Array.isArray,yv=Object.prototype.hasOwnProperty,op={current:null},Sv={key:!0,ref:!0,__self:!0,__source:!0};function Mv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yv.call(e,i)&&!Sv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ba,type:t,key:s,ref:o,props:r,_owner:op.current}}function US(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ap(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function IS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function yh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IS(""+t.key):e.toString(36)}function ec(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ba:case wS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+yh(o,0):i,Rm(r)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),ec(r,e,n,"",function(c){return c})):r!=null&&(ap(r)&&(r=US(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Pm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+yh(s,a);o+=ec(s,e,n,l,r)}else if(l=NS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+yh(s,a++),o+=ec(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function il(t,e,n){if(t==null)return t;var i=[],r=0;return ec(t,i,"","",function(s){return e.call(n,s,r++)}),i}function FS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},tc={transition:null},OS={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:tc,ReactCurrentOwner:op};function wv(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!ap(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ho;qe.Fragment=ES;qe.Profiler=AS;qe.PureComponent=rp;qe.StrictMode=TS;qe.Suspense=PS;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;qe.act=wv;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=op.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yv.call(e,l)&&!Sv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ba,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:CS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bS,_context:t},t.Consumer=t};qe.createElement=Mv;qe.createFactory=function(t){var e=Mv.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:RS,render:t}};qe.isValidElement=ap;qe.lazy=function(t){return{$$typeof:DS,_payload:{_status:-1,_result:t},_init:FS}};qe.memo=function(t,e){return{$$typeof:LS,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=tc.transition;tc.transition={};try{t()}finally{tc.transition=e}};qe.unstable_act=wv;qe.useCallback=function(t,e){return pn.current.useCallback(t,e)};qe.useContext=function(t){return pn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return pn.current.useEffect(t,e)};qe.useId=function(){return pn.current.useId()};qe.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return pn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};qe.useRef=function(t){return pn.current.useRef(t)};qe.useState=function(t){return pn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return pn.current.useTransition()};qe.version="18.3.1";mv.exports=qe;var K=mv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kS=K,zS=Symbol.for("react.element"),BS=Symbol.for("react.fragment"),HS=Object.prototype.hasOwnProperty,VS=kS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GS={key:!0,ref:!0,__self:!0,__source:!0};function Ev(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)HS.call(e,i)&&!GS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zS,type:t,key:s,ref:o,props:r,_owner:VS.current}}zu.Fragment=BS;zu.jsx=Ev;zu.jsxs=Ev;pv.exports=zu;var M=pv.exports,Tv={exports:{}},Dn={},Av={exports:{}},bv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,X){var Z=R.length;R.push(X);e:for(;0<Z;){var le=Z-1>>>1,Te=R[le];if(0<r(Te,X))R[le]=X,R[Z]=Te,Z=le;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var X=R[0],Z=R.pop();if(Z!==X){R[0]=Z;e:for(var le=0,Te=R.length,Le=Te>>>1;le<Le;){var $=2*(le+1)-1,re=R[$],ue=$+1,de=R[ue];if(0>r(re,Z))ue<Te&&0>r(de,re)?(R[le]=de,R[ue]=Z,le=ue):(R[le]=re,R[$]=Z,le=$);else if(ue<Te&&0>r(de,Z))R[le]=de,R[ue]=Z,le=ue;else break e}}return X}function r(R,X){var Z=R.sortIndex-X.sortIndex;return Z!==0?Z:R.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=R)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function S(R){if(x=!1,g(R),!v)if(n(l)!==null)v=!0,G(L);else{var X=n(c);X!==null&&Q(S,X.startTime-R)}}function L(R,X){v=!1,x&&(x=!1,f(D),D=-1),p=!0;var Z=d;try{for(g(X),h=n(l);h!==null&&(!(h.expirationTime>X)||R&&!E());){var le=h.callback;if(typeof le=="function"){h.callback=null,d=h.priorityLevel;var Te=le(h.expirationTime<=X);X=t.unstable_now(),typeof Te=="function"?h.callback=Te:h===n(l)&&i(l),g(X)}else i(l);h=n(l)}if(h!==null)var Le=!0;else{var $=n(c);$!==null&&Q(S,$.startTime-X),Le=!1}return Le}finally{h=null,d=Z,p=!1}}var C=!1,A=null,D=-1,Y=5,y=-1;function E(){return!(t.unstable_now()-y<Y)}function z(){if(A!==null){var R=t.unstable_now();y=R;var X=!0;try{X=A(!0,R)}finally{X?k():(C=!1,A=null)}}else C=!1}var k;if(typeof _=="function")k=function(){_(z)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,J=H.port2;H.port1.onmessage=z,k=function(){J.postMessage(null)}}else k=function(){m(z,0)};function G(R){A=R,C||(C=!0,k())}function Q(R,X){D=m(function(){R(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(L))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Z=d;d=X;try{return R()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,X){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Z=d;d=R;try{return X()}finally{d=Z}},t.unstable_scheduleCallback=function(R,X,Z){var le=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?le+Z:le):Z=le,R){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=Z+Te,R={id:u++,callback:X,priorityLevel:R,startTime:Z,expirationTime:Te,sortIndex:-1},Z>le?(R.sortIndex=Z,e(c,R),n(l)===null&&R===n(c)&&(x?(f(D),D=-1):x=!0,Q(S,Z-le))):(R.sortIndex=Te,e(l,R),v||p||(v=!0,G(L))),R},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(R){var X=d;return function(){var Z=d;d=X;try{return R.apply(this,arguments)}finally{d=Z}}}})(bv);Av.exports=bv;var WS=Av.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jS=K,Ln=WS;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cv=new Set,da={};function us(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(da[t]=e,t=0;t<e.length;t++)Cv.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fd=Object.prototype.hasOwnProperty,$S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lm={},Dm={};function XS(t){return Fd.call(Dm,t)?!0:Fd.call(Lm,t)?!1:$S.test(t)?Dm[t]=!0:(Lm[t]=!0,!1)}function YS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qS(t,e,n,i){if(e===null||typeof e>"u"||YS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var lp=/[\-:]([a-z])/g;function cp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lp,cp);qt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lp,cp);qt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lp,cp);qt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function up(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qS(e,n,r,i)&&(n=null),i||r===null?XS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xi=jS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),Rv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),dp=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),fp=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),Lv=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Sh;function ko(t){if(Sh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sh=e&&e[1]||""}return`
`+Sh+t}var Mh=!1;function wh(t,e){if(!t||Mh)return"";Mh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function KS(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=wh(t.type,!1),t;case 11:return t=wh(t.type.render,!1),t;case 1:return t=wh(t.type,!0),t;default:return""}}function Bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ls:return"Portal";case Od:return"Profiler";case hp:return"StrictMode";case kd:return"Suspense";case zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pv:return(t.displayName||"Context")+".Consumer";case Rv:return(t._context.displayName||"Context")+".Provider";case dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fp:return e=t.displayName||null,e!==null?e:Bd(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return Bd(t(e))}catch{}}return null}function ZS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bd(e);case 8:return e===hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QS(t){var e=Dv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=QS(t))}function Nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hd(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uv(t,e){e=e.checked,e!=null&&up(t,"checked",e,!1)}function Vd(t,e){Uv(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gd(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gd(t,e,n){(e!=="number"||vc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zo=Array.isArray;function Xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(zo(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function Iv(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Om(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,Ov=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JS=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(t){JS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$o[e]=$o[t]})});function kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$o.hasOwnProperty(t)&&$o[t]?(""+e).trim():e+"px"}function zv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=kv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var eM=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $d(t,e){if(e){if(eM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=null;function pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qd=null,Ys=null,qs=null;function km(t){if(t=Ga(t)){if(typeof qd!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Wu(e),qd(t.stateNode,t.type,e))}}function Bv(t){Ys?qs?qs.push(t):qs=[t]:Ys=t}function Hv(){if(Ys){var t=Ys,e=qs;if(qs=Ys=null,km(t),e)for(t=0;t<e.length;t++)km(e[t])}}function Vv(t,e){return t(e)}function Gv(){}var Eh=!1;function Wv(t,e,n){if(Eh)return t(e,n);Eh=!0;try{return Vv(t,e,n)}finally{Eh=!1,(Ys!==null||qs!==null)&&(Gv(),Hv())}}function pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Kd=!1;if(Vi)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Kd=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Kd=!1}function tM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Xo=!1,_c=null,xc=!1,Zd=null,nM={onError:function(t){Xo=!0,_c=t}};function iM(t,e,n,i,r,s,o,a,l){Xo=!1,_c=null,tM.apply(nM,arguments)}function rM(t,e,n,i,r,s,o,a,l){if(iM.apply(this,arguments),Xo){if(Xo){var c=_c;Xo=!1,_c=null}else throw Error(ae(198));xc||(xc=!0,Zd=c)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zm(t){if(hs(t)!==t)throw Error(ae(188))}function sM(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zm(r),t;if(s===i)return zm(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function $v(t){return t=sM(t),t!==null?Xv(t):null}function Xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xv(t);if(e!==null)return e;t=t.sibling}return null}var Yv=Ln.unstable_scheduleCallback,Bm=Ln.unstable_cancelCallback,oM=Ln.unstable_shouldYield,aM=Ln.unstable_requestPaint,Tt=Ln.unstable_now,lM=Ln.unstable_getCurrentPriorityLevel,mp=Ln.unstable_ImmediatePriority,qv=Ln.unstable_UserBlockingPriority,yc=Ln.unstable_NormalPriority,cM=Ln.unstable_LowPriority,Kv=Ln.unstable_IdlePriority,Bu=null,vi=null;function uM(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:fM,hM=Math.log,dM=Math.LN2;function fM(t){return t>>>=0,t===0?32:31-(hM(t)/dM|0)|0}var al=64,ll=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function pM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-si(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=pM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zv(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function Th(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function gM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function Qv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jv,vp,e_,t_,n_,Jd=!1,cl=[],mr=null,gr=null,vr=null,ma=new Map,ga=new Map,ar=[],vM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(e.pointerId)}}function Eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ga(e),e!==null&&vp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _M(t,e,n,i,r){switch(e){case"focusin":return mr=Eo(mr,t,e,n,i,r),!0;case"dragenter":return gr=Eo(gr,t,e,n,i,r),!0;case"mouseover":return vr=Eo(vr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ma.set(s,Eo(ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ga.set(s,Eo(ga.get(s)||null,t,e,n,i,r)),!0}return!1}function i_(t){var e=jr(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=jv(n),e!==null){t.blockedOn=e,n_(t.priority,function(){e_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yd=i,n.target.dispatchEvent(i),Yd=null}else return e=Ga(n),e!==null&&vp(e),t.blockedOn=n,!1;e.shift()}return!0}function Vm(t,e,n){nc(t)&&n.delete(e)}function xM(){Jd=!1,mr!==null&&nc(mr)&&(mr=null),gr!==null&&nc(gr)&&(gr=null),vr!==null&&nc(vr)&&(vr=null),ma.forEach(Vm),ga.forEach(Vm)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,Jd||(Jd=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,xM)))}function va(t){function e(r){return To(r,t)}if(0<cl.length){To(cl[0],t);for(var n=1;n<cl.length;n++){var i=cl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(mr!==null&&To(mr,t),gr!==null&&To(gr,t),vr!==null&&To(vr,t),ma.forEach(e),ga.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)i_(n),n.blockedOn===null&&ar.shift()}var Ks=Xi.ReactCurrentBatchConfig,Mc=!0;function yM(t,e,n,i){var r=st,s=Ks.transition;Ks.transition=null;try{st=1,_p(t,e,n,i)}finally{st=r,Ks.transition=s}}function SM(t,e,n,i){var r=st,s=Ks.transition;Ks.transition=null;try{st=4,_p(t,e,n,i)}finally{st=r,Ks.transition=s}}function _p(t,e,n,i){if(Mc){var r=ef(t,e,n,i);if(r===null)Ih(t,e,i,wc,n),Hm(t,i);else if(_M(r,t,e,n,i))i.stopPropagation();else if(Hm(t,i),e&4&&-1<vM.indexOf(t)){for(;r!==null;){var s=Ga(r);if(s!==null&&Jv(s),s=ef(t,e,n,i),s===null&&Ih(t,e,i,wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ih(t,e,i,null,n)}}var wc=null;function ef(t,e,n,i){if(wc=null,t=pp(i),t=jr(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function r_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lM()){case mp:return 1;case qv:return 4;case yc:case cM:return 16;case Kv:return 536870912;default:return 16}default:return 16}}var hr=null,xp=null,ic=null;function s_(){if(ic)return ic;var t,e=xp,n=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ic=r.slice(t,1<i?1-i:void 0)}function rc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Gm(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:Gm,this.isPropagationStopped=Gm,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yp=Nn(fo),Va=yt({},fo,{view:0,detail:0}),MM=Nn(Va),Ah,bh,Ao,Hu=yt({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(Ah=t.screenX-Ao.screenX,bh=t.screenY-Ao.screenY):bh=Ah=0,Ao=t),Ah)},movementY:function(t){return"movementY"in t?t.movementY:bh}}),Wm=Nn(Hu),wM=yt({},Hu,{dataTransfer:0}),EM=Nn(wM),TM=yt({},Va,{relatedTarget:0}),Ch=Nn(TM),AM=yt({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),bM=Nn(AM),CM=yt({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RM=Nn(CM),PM=yt({},fo,{data:0}),jm=Nn(PM),LM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NM[t])?!!e[t]:!1}function Sp(){return UM}var IM=yt({},Va,{key:function(t){if(t.key){var e=LM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?DM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sp,charCode:function(t){return t.type==="keypress"?rc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FM=Nn(IM),OM=yt({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=Nn(OM),kM=yt({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sp}),zM=Nn(kM),BM=yt({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),HM=Nn(BM),VM=yt({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GM=Nn(VM),WM=[9,13,27,32],Mp=Vi&&"CompositionEvent"in window,Yo=null;Vi&&"documentMode"in document&&(Yo=document.documentMode);var jM=Vi&&"TextEvent"in window&&!Yo,o_=Vi&&(!Mp||Yo&&8<Yo&&11>=Yo),Xm=" ",Ym=!1;function a_(t,e){switch(t){case"keyup":return WM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function $M(t,e){switch(t){case"compositionend":return l_(e);case"keypress":return e.which!==32?null:(Ym=!0,Xm);case"textInput":return t=e.data,t===Xm&&Ym?null:t;default:return null}}function XM(t,e){if(Ns)return t==="compositionend"||!Mp&&a_(t,e)?(t=s_(),ic=xp=hr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o_&&e.locale!=="ko"?null:e.data;default:return null}}var YM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YM[t.type]:e==="textarea"}function c_(t,e,n,i){Bv(i),e=Ec(e,"onChange"),0<e.length&&(n=new yp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,_a=null;function qM(t){y_(t,0)}function Vu(t){var e=Fs(t);if(Nv(e))return t}function KM(t,e){if(t==="change")return e}var u_=!1;if(Vi){var Rh;if(Vi){var Ph="oninput"in document;if(!Ph){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Ph=typeof Km.oninput=="function"}Rh=Ph}else Rh=!1;u_=Rh&&(!document.documentMode||9<document.documentMode)}function Zm(){qo&&(qo.detachEvent("onpropertychange",h_),_a=qo=null)}function h_(t){if(t.propertyName==="value"&&Vu(_a)){var e=[];c_(e,_a,t,pp(t)),Wv(qM,e)}}function ZM(t,e,n){t==="focusin"?(Zm(),qo=e,_a=n,qo.attachEvent("onpropertychange",h_)):t==="focusout"&&Zm()}function QM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vu(_a)}function JM(t,e){if(t==="click")return Vu(e)}function ew(t,e){if(t==="input"||t==="change")return Vu(e)}function tw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:tw;function xa(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fd.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,e){var n=Qm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function d_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f_(){for(var t=window,e=vc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vc(t.document)}return e}function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nw(t){var e=f_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d_(n.ownerDocument.documentElement,n)){if(i!==null&&wp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jm(n,s);var o=Jm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iw=Vi&&"documentMode"in document&&11>=document.documentMode,Us=null,tf=null,Ko=null,nf=!1;function eg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nf||Us==null||Us!==vc(i)||(i=Us,"selectionStart"in i&&wp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&xa(Ko,i)||(Ko=i,i=Ec(tf,"onSelect"),0<i.length&&(e=new yp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Lh={},p_={};Vi&&(p_=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Gu(t){if(Lh[t])return Lh[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p_)return Lh[t]=e[n];return t}var m_=Gu("animationend"),g_=Gu("animationiteration"),v_=Gu("animationstart"),__=Gu("transitionend"),x_=new Map,tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){x_.set(t,e),us(e,[t])}for(var Dh=0;Dh<tg.length;Dh++){var Nh=tg[Dh],rw=Nh.toLowerCase(),sw=Nh[0].toUpperCase()+Nh.slice(1);Cr(rw,"on"+sw)}Cr(m_,"onAnimationEnd");Cr(g_,"onAnimationIteration");Cr(v_,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(__,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function ng(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rM(i,e,void 0,t),t.currentTarget=null}function y_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ng(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ng(r,a,c),s=l}}}if(xc)throw t=Zd,xc=!1,Zd=null,t}function dt(t,e){var n=e[lf];n===void 0&&(n=e[lf]=new Set);var i=t+"__bubble";n.has(i)||(S_(e,t,2,!1),n.add(i))}function Uh(t,e,n){var i=0;e&&(i|=4),S_(n,t,i,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[dl]){t[dl]=!0,Cv.forEach(function(n){n!=="selectionchange"&&(ow.has(n)||Uh(n,!1,t),Uh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,Uh("selectionchange",!1,e))}}function S_(t,e,n,i){switch(r_(e)){case 1:var r=yM;break;case 4:r=SM;break;default:r=_p}n=r.bind(null,e,n,t),r=void 0,!Kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ih(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Wv(function(){var c=s,u=pp(n),h=[];e:{var d=x_.get(t);if(d!==void 0){var p=yp,v=t;switch(t){case"keypress":if(rc(n)===0)break e;case"keydown":case"keyup":p=FM;break;case"focusin":v="focus",p=Ch;break;case"focusout":v="blur",p=Ch;break;case"beforeblur":case"afterblur":p=Ch;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=EM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zM;break;case m_:case g_:case v_:p=bM;break;case __:p=HM;break;case"scroll":p=MM;break;case"wheel":p=GM;break;case"copy":case"cut":case"paste":p=RM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$m}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var _=c,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=pa(_,f),S!=null&&x.push(Sa(_,S,g)))),m)break;_=_.return}0<x.length&&(d=new p(d,v,null,n,u),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Yd&&(v=n.relatedTarget||n.fromElement)&&(jr(v)||v[Gi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?jr(v):null,v!==null&&(m=hs(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Wm,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=$m,S="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?d:Fs(p),g=v==null?d:Fs(v),d=new x(S,_+"leave",p,n,u),d.target=m,d.relatedTarget=g,S=null,jr(u)===c&&(x=new x(f,_+"enter",v,n,u),x.target=g,x.relatedTarget=m,S=x),m=S,p&&v)t:{for(x=p,f=v,_=0,g=x;g;g=ps(g))_++;for(g=0,S=f;S;S=ps(S))g++;for(;0<_-g;)x=ps(x),_--;for(;0<g-_;)f=ps(f),g--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=ps(x),f=ps(f)}x=null}else x=null;p!==null&&ig(h,d,p,x,!1),v!==null&&m!==null&&ig(h,m,v,x,!0)}}e:{if(d=c?Fs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var L=KM;else if(qm(d))if(u_)L=ew;else{L=QM;var C=ZM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(L=JM);if(L&&(L=L(t,c))){c_(h,L,n,u);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Gd(d,"number",d.value)}switch(C=c?Fs(c):window,t){case"focusin":(qm(C)||C.contentEditable==="true")&&(Us=C,tf=c,Ko=null);break;case"focusout":Ko=tf=Us=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,eg(h,n,u);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":eg(h,n,u)}var A;if(Mp)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ns?a_(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(o_&&n.locale!=="ko"&&(Ns||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ns&&(A=s_()):(hr=u,xp="value"in hr?hr.value:hr.textContent,Ns=!0)),C=Ec(c,D),0<C.length&&(D=new jm(D,t,null,n,u),h.push({event:D,listeners:C}),A?D.data=A:(A=l_(n),A!==null&&(D.data=A)))),(A=jM?$M(t,n):XM(t,n))&&(c=Ec(c,"onBeforeInput"),0<c.length&&(u=new jm("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=A))}y_(h,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pa(t,n),s!=null&&i.unshift(Sa(t,s,r)),s=pa(t,e),s!=null&&i.push(Sa(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ig(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=pa(n,s),l!=null&&o.unshift(Sa(n,l,a))):r||(l=pa(n,s),l!=null&&o.push(Sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aw=/\r\n?/g,lw=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(aw,`
`).replace(lw,"")}function fl(t,e,n){if(e=rg(e),rg(t)!==e&&n)throw Error(ae(425))}function Tc(){}var rf=null,sf=null;function of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var af=typeof setTimeout=="function"?setTimeout:void 0,cw=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,uw=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(t){return sg.resolve(null).then(t).catch(hw)}:af;function hw(t){setTimeout(function(){throw t})}function Fh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);va(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),fi="__reactFiber$"+po,Ma="__reactProps$"+po,Gi="__reactContainer$"+po,lf="__reactEvents$"+po,dw="__reactListeners$"+po,fw="__reactHandles$"+po;function jr(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=og(t);t!==null;){if(n=t[fi])return n;t=og(t)}return e}t=n,n=t.parentNode}return null}function Ga(t){return t=t[fi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Wu(t){return t[Ma]||null}var cf=[],Os=-1;function Rr(t){return{current:t}}function ft(t){0>Os||(t.current=cf[Os],cf[Os]=null,Os--)}function ut(t,e){Os++,cf[Os]=t.current,t.current=e}var Er={},on=Rr(Er),yn=Rr(!1),Jr=Er;function no(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Ac(){ft(yn),ft(on)}function ag(t,e,n){if(on.current!==Er)throw Error(ae(168));ut(on,e),ut(yn,n)}function M_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,ZS(t)||"Unknown",r));return yt({},n,i)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Jr=on.current,ut(on,t),ut(yn,yn.current),!0}function lg(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=M_(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,ft(yn),ft(on),ut(on,t)):ft(yn),ut(yn,n)}var Pi=null,ju=!1,Oh=!1;function w_(t){Pi===null?Pi=[t]:Pi.push(t)}function pw(t){ju=!0,w_(t)}function Pr(){if(!Oh&&Pi!==null){Oh=!0;var t=0,e=st;try{var n=Pi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Pi=null,ju=!1}catch(r){throw Pi!==null&&(Pi=Pi.slice(t+1)),Yv(mp,Pr),r}finally{st=e,Oh=!1}}return null}var ks=[],zs=0,Cc=null,Rc=0,kn=[],zn=0,es=null,Di=1,Ni="";function Br(t,e){ks[zs++]=Rc,ks[zs++]=Cc,Cc=t,Rc=e}function E_(t,e,n){kn[zn++]=Di,kn[zn++]=Ni,kn[zn++]=es,es=t;var i=Di;t=Ni;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Di=1<<32-si(e)+r|n<<r|i,Ni=s+t}else Di=1<<s|n<<r|i,Ni=t}function Ep(t){t.return!==null&&(Br(t,1),E_(t,1,0))}function Tp(t){for(;t===Cc;)Cc=ks[--zs],ks[zs]=null,Rc=ks[--zs],ks[zs]=null;for(;t===es;)es=kn[--zn],kn[zn]=null,Ni=kn[--zn],kn[zn]=null,Di=kn[--zn],kn[zn]=null}var Pn=null,Rn=null,pt=!1,ii=null;function T_(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Di,overflow:Ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hf(t){if(pt){var e=Rn;if(e){var n=e;if(!cg(t,e)){if(uf(t))throw Error(ae(418));e=_r(n.nextSibling);var i=Pn;e&&cg(t,e)?T_(i,n):(t.flags=t.flags&-4097|2,pt=!1,Pn=t)}}else{if(uf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,pt=!1,Pn=t}}}function ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function pl(t){if(t!==Pn)return!1;if(!pt)return ug(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!of(t.type,t.memoizedProps)),e&&(e=Rn)){if(uf(t))throw A_(),Error(ae(418));for(;e;)T_(t,e),e=_r(e.nextSibling)}if(ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?_r(t.stateNode.nextSibling):null;return!0}function A_(){for(var t=Rn;t;)t=_r(t.nextSibling)}function io(){Rn=Pn=null,pt=!1}function Ap(t){ii===null?ii=[t]:ii.push(t)}var mw=Xi.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hg(t){var e=t._init;return e(t._payload)}function b_(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Mr(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,S){return _===null||_.tag!==6?(_=Wh(g,f.mode,S),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,S){var L=g.type;return L===Ds?u(f,_,g.props.children,S,g.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===sr&&hg(L)===_.type)?(S=r(_,g.props),S.ref=bo(f,_,g),S.return=f,S):(S=hc(g.type,g.key,g.props,null,f.mode,S),S.ref=bo(f,_,g),S.return=f,S)}function c(f,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=jh(g,f.mode,S),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function u(f,_,g,S,L){return _===null||_.tag!==7?(_=qr(g,f.mode,S,L),_.return=f,_):(_=r(_,g),_.return=f,_)}function h(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Wh(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case rl:return g=hc(_.type,_.key,_.props,null,f.mode,g),g.ref=bo(f,null,_),g.return=f,g;case Ls:return _=jh(_,f.mode,g),_.return=f,_;case sr:var S=_._init;return h(f,S(_._payload),g)}if(zo(_)||Mo(_))return _=qr(_,f.mode,g,null),_.return=f,_;ml(f,_)}return null}function d(f,_,g,S){var L=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:a(f,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rl:return g.key===L?l(f,_,g,S):null;case Ls:return g.key===L?c(f,_,g,S):null;case sr:return L=g._init,d(f,_,L(g._payload),S)}if(zo(g)||Mo(g))return L!==null?null:u(f,_,g,S,null);ml(f,g)}return null}function p(f,_,g,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,a(_,f,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case rl:return f=f.get(S.key===null?g:S.key)||null,l(_,f,S,L);case Ls:return f=f.get(S.key===null?g:S.key)||null,c(_,f,S,L);case sr:var C=S._init;return p(f,_,g,C(S._payload),L)}if(zo(S)||Mo(S))return f=f.get(g)||null,u(_,f,S,L,null);ml(_,S)}return null}function v(f,_,g,S){for(var L=null,C=null,A=_,D=_=0,Y=null;A!==null&&D<g.length;D++){A.index>D?(Y=A,A=null):Y=A.sibling;var y=d(f,A,g[D],S);if(y===null){A===null&&(A=Y);break}t&&A&&y.alternate===null&&e(f,A),_=s(y,_,D),C===null?L=y:C.sibling=y,C=y,A=Y}if(D===g.length)return n(f,A),pt&&Br(f,D),L;if(A===null){for(;D<g.length;D++)A=h(f,g[D],S),A!==null&&(_=s(A,_,D),C===null?L=A:C.sibling=A,C=A);return pt&&Br(f,D),L}for(A=i(f,A);D<g.length;D++)Y=p(A,f,D,g[D],S),Y!==null&&(t&&Y.alternate!==null&&A.delete(Y.key===null?D:Y.key),_=s(Y,_,D),C===null?L=Y:C.sibling=Y,C=Y);return t&&A.forEach(function(E){return e(f,E)}),pt&&Br(f,D),L}function x(f,_,g,S){var L=Mo(g);if(typeof L!="function")throw Error(ae(150));if(g=L.call(g),g==null)throw Error(ae(151));for(var C=L=null,A=_,D=_=0,Y=null,y=g.next();A!==null&&!y.done;D++,y=g.next()){A.index>D?(Y=A,A=null):Y=A.sibling;var E=d(f,A,y.value,S);if(E===null){A===null&&(A=Y);break}t&&A&&E.alternate===null&&e(f,A),_=s(E,_,D),C===null?L=E:C.sibling=E,C=E,A=Y}if(y.done)return n(f,A),pt&&Br(f,D),L;if(A===null){for(;!y.done;D++,y=g.next())y=h(f,y.value,S),y!==null&&(_=s(y,_,D),C===null?L=y:C.sibling=y,C=y);return pt&&Br(f,D),L}for(A=i(f,A);!y.done;D++,y=g.next())y=p(A,f,D,y.value,S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?D:y.key),_=s(y,_,D),C===null?L=y:C.sibling=y,C=y);return t&&A.forEach(function(z){return e(f,z)}),pt&&Br(f,D),L}function m(f,_,g,S){if(typeof g=="object"&&g!==null&&g.type===Ds&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case rl:e:{for(var L=g.key,C=_;C!==null;){if(C.key===L){if(L=g.type,L===Ds){if(C.tag===7){n(f,C.sibling),_=r(C,g.props.children),_.return=f,f=_;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===sr&&hg(L)===C.type){n(f,C.sibling),_=r(C,g.props),_.ref=bo(f,C,g),_.return=f,f=_;break e}n(f,C);break}else e(f,C);C=C.sibling}g.type===Ds?(_=qr(g.props.children,f.mode,S,g.key),_.return=f,f=_):(S=hc(g.type,g.key,g.props,null,f.mode,S),S.ref=bo(f,_,g),S.return=f,f=S)}return o(f);case Ls:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=jh(g,f.mode,S),_.return=f,f=_}return o(f);case sr:return C=g._init,m(f,_,C(g._payload),S)}if(zo(g))return v(f,_,g,S);if(Mo(g))return x(f,_,g,S);ml(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=Wh(g,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return m}var ro=b_(!0),C_=b_(!1),Pc=Rr(null),Lc=null,Bs=null,bp=null;function Cp(){bp=Bs=Lc=null}function Rp(t){var e=Pc.current;ft(Pc),t._currentValue=e}function df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){Lc=t,bp=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(bp!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Lc===null)throw Error(ae(308));Bs=t,Lc.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var $r=null;function Pp(t){$r===null?$r=[t]:$r.push(t)}function R_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Pp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function sc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gp(t,n)}}function dg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=yt({},h,d);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=h}}function fg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Wa={},_i=Rr(Wa),wa=Rr(Wa),Ea=Rr(Wa);function Xr(t){if(t===Wa)throw Error(ae(174));return t}function Dp(t,e){switch(ut(Ea,e),ut(wa,t),ut(_i,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jd(e,t)}ft(_i),ut(_i,e)}function so(){ft(_i),ft(wa),ft(Ea)}function L_(t){Xr(Ea.current);var e=Xr(_i.current),n=jd(e,t.type);e!==n&&(ut(wa,t),ut(_i,n))}function Np(t){wa.current===t&&(ft(_i),ft(wa))}var gt=Rr(0);function Nc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kh=[];function Up(){for(var t=0;t<kh.length;t++)kh[t]._workInProgressVersionPrimary=null;kh.length=0}var oc=Xi.ReactCurrentDispatcher,zh=Xi.ReactCurrentBatchConfig,ts=0,xt=null,Pt=null,Ot=null,Uc=!1,Zo=!1,Ta=0,gw=0;function Zt(){throw Error(ae(321))}function Ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Fp(t,e,n,i,r,s){if(ts=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oc.current=t===null||t.memoizedState===null?yw:Sw,t=n(i,r),Zo){s=0;do{if(Zo=!1,Ta=0,25<=s)throw Error(ae(301));s+=1,Ot=Pt=null,e.updateQueue=null,oc.current=Mw,t=n(i,r)}while(Zo)}if(oc.current=Ic,e=Pt!==null&&Pt.next!==null,ts=0,Ot=Pt=xt=null,Uc=!1,e)throw Error(ae(300));return t}function Op(){var t=Ta!==0;return Ta=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?xt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function jn(){if(Pt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ot===null?xt.memoizedState:Ot.next;if(e!==null)Ot=e,Pt=t;else{if(t===null)throw Error(ae(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ot===null?xt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Aa(t,e){return typeof e=="function"?e(t):e}function Bh(t){var e=jn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ts&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,xt.lanes|=u,ns|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hh(t){var e=jn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function D_(){}function N_(t,e){var n=xt,i=jn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,kp(F_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,ba(9,I_.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ae(349));ts&30||U_(n,e,r)}return r}function U_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I_(t,e,n,i){e.value=n,e.getSnapshot=i,O_(e)&&k_(t)}function F_(t,e,n){return n(function(){O_(e)&&k_(t)})}function O_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function k_(t){var e=Wi(t,1);e!==null&&oi(e,t,1,-1)}function pg(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e.queue=t,t=t.dispatch=xw.bind(null,xt,t),[e.memoizedState,t]}function ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function z_(){return jn().memoizedState}function ac(t,e,n,i){var r=hi();xt.flags|=t,r.memoizedState=ba(1|e,n,void 0,i===void 0?null:i)}function $u(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&Ip(i,o.deps)){r.memoizedState=ba(e,n,s,i);return}}xt.flags|=t,r.memoizedState=ba(1|e,n,s,i)}function mg(t,e){return ac(8390656,8,t,e)}function kp(t,e){return $u(2048,8,t,e)}function B_(t,e){return $u(4,2,t,e)}function H_(t,e){return $u(4,4,t,e)}function V_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function G_(t,e,n){return n=n!=null?n.concat([t]):null,$u(4,4,V_.bind(null,e,t),n)}function zp(){}function W_(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ip(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function j_(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ip(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $_(t,e,n){return ts&21?(ai(n,e)||(n=Zv(),xt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function vw(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=zh.transition;zh.transition={};try{t(!1),e()}finally{st=n,zh.transition=i}}function X_(){return jn().memoizedState}function _w(t,e,n){var i=Sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Y_(t))q_(e,n);else if(n=R_(t,e,n,i),n!==null){var r=dn();oi(n,t,i,r),K_(n,e,i)}}function xw(t,e,n){var i=Sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y_(t))q_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,Pp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=R_(t,e,r,i),n!==null&&(r=dn(),oi(n,t,i,r),K_(n,e,i))}}function Y_(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function q_(t,e){Zo=Uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function K_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gp(t,n)}}var Ic={readContext:Wn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},yw={readContext:Wn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:mg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ac(4194308,4,V_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ac(4194308,4,t,e)},useInsertionEffect:function(t,e){return ac(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_w.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:pg,useDebugValue:zp,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=pg(!1),e=t[0];return t=vw.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=hi();if(pt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),zt===null)throw Error(ae(349));ts&30||U_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mg(F_.bind(null,i,s,t),[t]),i.flags|=2048,ba(9,I_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=zt.identifierPrefix;if(pt){var n=Ni,i=Di;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sw={readContext:Wn,useCallback:W_,useContext:Wn,useEffect:kp,useImperativeHandle:G_,useInsertionEffect:B_,useLayoutEffect:H_,useMemo:j_,useReducer:Bh,useRef:z_,useState:function(){return Bh(Aa)},useDebugValue:zp,useDeferredValue:function(t){var e=jn();return $_(e,Pt.memoizedState,t)},useTransition:function(){var t=Bh(Aa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:N_,useId:X_,unstable_isNewReconciler:!1},Mw={readContext:Wn,useCallback:W_,useContext:Wn,useEffect:kp,useImperativeHandle:G_,useInsertionEffect:B_,useLayoutEffect:H_,useMemo:j_,useReducer:Hh,useRef:z_,useState:function(){return Hh(Aa)},useDebugValue:zp,useDeferredValue:function(t){var e=jn();return Pt===null?e.memoizedState=t:$_(e,Pt.memoizedState,t)},useTransition:function(){var t=Hh(Aa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:N_,useId:X_,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ff(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xu={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Sr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(oi(e,t,r,i),sc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Sr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(oi(e,t,r,i),sc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=Sr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(oi(e,t,i,n),sc(e,t,i))}};function gg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xa(n,i)||!xa(r,s):!0}function Z_(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=Sn(e)?Jr:on.current,i=e.contextTypes,s=(i=i!=null)?no(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xu.enqueueReplaceState(e,e.state,null)}function pf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Lp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=Sn(e)?Jr:on.current,r.context=no(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ff(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xu.enqueueReplaceState(r,r.state,null),Dc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",i=e;do n+=KS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ww=typeof WeakMap=="function"?WeakMap:Map;function Q_(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Oc||(Oc=!0,Tf=i),mf(t,e)},n}function J_(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mf(t,e),typeof i!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _g(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ww;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ow.bind(null,t,e,n),e.then(t,t))}function xg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var Ew=Xi.ReactCurrentOwner,_n=!1;function un(t,e,n,i){e.child=t===null?C_(e,null,n,i):ro(e,t.child,n,i)}function Sg(t,e,n,i,r){n=n.render;var s=e.ref;return Zs(e,r),i=Fp(t,e,n,i,s,r),n=Op(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(pt&&n&&Ep(e),e.flags|=1,un(t,e,i,r),e.child)}function Mg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ex(t,e,s,i,r)):(t=hc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(o,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=Mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ex(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xa(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,ji(t,e,r)}return gf(t,e,n,i,r)}function tx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Vs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Vs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Vs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Vs,An),An|=i;return un(t,e,r,n),e.child}function nx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gf(t,e,n,i,r){var s=Sn(n)?Jr:on.current;return s=no(e,s),Zs(e,r),n=Fp(t,e,n,i,s,r),i=Op(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(pt&&i&&Ep(e),e.flags|=1,un(t,e,n,r),e.child)}function wg(t,e,n,i,r){if(Sn(n)){var s=!0;bc(e)}else s=!1;if(Zs(e,r),e.stateNode===null)lc(t,e),Z_(e,n,i),pf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=Sn(n)?Jr:on.current,c=no(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&vg(e,o,i,c),or=!1;var d=e.memoizedState;o.state=d,Dc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||yn.current||or?(typeof u=="function"&&(ff(e,n,u,i),l=e.memoizedState),(a=or||gg(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,P_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=Sn(n)?Jr:on.current,l=no(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&vg(e,o,i,l),or=!1,d=e.memoizedState,o.state=d,Dc(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||yn.current||or?(typeof p=="function"&&(ff(e,n,p,i),v=e.memoizedState),(c=or||gg(e,n,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return vf(t,e,n,i,s,r)}function vf(t,e,n,i,r,s){nx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&lg(e,n,!1),ji(t,e,s);i=e.stateNode,Ew.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):un(t,e,a,s),e.memoizedState=i.state,r&&lg(e,n,!0),e.child}function ix(t){var e=t.stateNode;e.pendingContext?ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(t,e.context,!1),Dp(t,e.containerInfo)}function Eg(t,e,n,i,r){return io(),Ap(r),e.flags|=256,un(t,e,n,i),e.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function rx(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(gt,r&1),t===null)return hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ku(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xf(n),e.memoizedState=_f,t):Bp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Tw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_f,i}return s=t.child,t=s.sibling,i=Mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bp(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,i){return i!==null&&Ap(i),ro(e,t.child,null,n),t=Bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Vh(Error(ae(422))),gl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ku({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=_f,s);if(!(e.mode&1))return gl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Vh(s,i,void 0),gl(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),oi(i,t,r,-1))}return $p(),i=Vh(Error(ae(421))),gl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=_r(r.nextSibling),Pn=e,pt=!0,ii=null,t!==null&&(kn[zn++]=Di,kn[zn++]=Ni,kn[zn++]=es,Di=t.id,Ni=t.overflow,es=e),e=Bp(e,i.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),df(t.return,e,n)}function Gh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function sx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gh(e,!0,n,null,s);break;case"together":Gh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Aw(t,e,n){switch(e.tag){case 3:ix(e),io();break;case 5:L_(e);break;case 1:Sn(e.type)&&bc(e);break;case 4:Dp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?rx(t,e,n):(ut(gt,gt.current&1),t=ji(t,e,n),t!==null?t.sibling:null);ut(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return sx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,tx(t,e,n)}return ji(t,e,n)}var ox,yf,ax,lx;ox=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yf=function(){};ax=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Xr(_i.current);var s=null;switch(n){case"input":r=Hd(t,r),i=Hd(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Wd(t,r),i=Wd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tc)}$d(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(da.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};lx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bw(t,e,n){var i=e.pendingProps;switch(Tp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Sn(e.type)&&Ac(),Qt(e),null;case 3:return i=e.stateNode,so(),ft(yn),ft(on),Up(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Cf(ii),ii=null))),yf(t,e),Qt(e),null;case 5:Np(e);var r=Xr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)ax(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Qt(e),null}if(t=Xr(_i.current),pl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[fi]=e,i[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<Ho.length;r++)dt(Ho[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":Um(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Fm(i,s),dt("invalid",i)}$d(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",""+a]):da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":sl(i),Im(i,s,!0);break;case"textarea":sl(i),Om(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[fi]=e,t[Ma]=i,ox(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xd(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ho.length;r++)dt(Ho[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":Um(t,i),r=Hd(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":Fm(t,i),r=Wd(t,i),dt("invalid",t);break;default:r=i}$d(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ov(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fa(t,l):typeof l=="number"&&fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&up(t,s,l,o))}switch(n){case"input":sl(t),Im(t,i,!1);break;case"textarea":sl(t),Om(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)lx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Xr(Ea.current),Xr(_i.current),pl(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:fl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return Qt(e),null;case 13:if(ft(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Rn!==null&&e.mode&1&&!(e.flags&128))A_(),io(),e.flags|=98560,s=!1;else if(s=pl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[fi]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else ii!==null&&(Cf(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Dt===0&&(Dt=3):$p())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return so(),yf(t,e),t===null&&ya(e.stateNode.containerInfo),Qt(e),null;case 10:return Rp(e.type._context),Qt(e),null;case 17:return Sn(e.type)&&Ac(),Qt(e),null;case 19:if(ft(gt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Co(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nc(t),o!==null){for(e.flags|=128,Co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>ao&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Qt(e),null}else 2*Tt()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=gt.current,ut(gt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return jp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function Cw(t,e){switch(Tp(e),e.tag){case 1:return Sn(e.type)&&Ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),ft(yn),ft(on),Up(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Np(e),null;case 13:if(ft(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(gt),null;case 4:return so(),null;case 10:return Rp(e.type._context),null;case 22:case 23:return jp(),null;case 24:return null;default:return null}}var vl=!1,tn=!1,Rw=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Sf(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Ag=!1;function Pw(t,e){if(rf=Mc,t=f_(),wp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sf={focusedElem:t,selectionRange:n},Mc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Jn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){wt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return v=Ag,Ag=!1,v}function Qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sf(e,n,s)}r=r.next}while(r!==i)}}function Yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cx(t){var e=t.alternate;e!==null&&(t.alternate=null,cx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[Ma],delete e[lf],delete e[dw],delete e[fw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ux(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ux(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tc));else if(i!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}function Ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}var Wt=null,ti=!1;function Qi(t,e,n){for(n=n.child;n!==null;)hx(t,e,n),n=n.sibling}function hx(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:tn||Hs(n,e);case 6:var i=Wt,r=ti;Wt=null,Qi(t,e,n),Wt=i,ti=r,Wt!==null&&(ti?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(ti?(t=Wt,n=n.stateNode,t.nodeType===8?Fh(t.parentNode,n):t.nodeType===1&&Fh(t,n),va(t)):Fh(Wt,n.stateNode));break;case 4:i=Wt,r=ti,Wt=n.stateNode.containerInfo,ti=!0,Qi(t,e,n),Wt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sf(n,e,o),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!tn&&(Hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,Qi(t,e,n),tn=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function Cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Rw),e.forEach(function(i){var r=zw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,ti=!1;break e;case 3:Wt=a.stateNode.containerInfo,ti=!0;break e;case 4:Wt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Wt===null)throw Error(ae(160));hx(s,o,r),Wt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dx(e,t),e=e.sibling}function dx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),li(t),i&4){try{Qo(3,t,t.return),Yu(3,t)}catch(x){wt(t,t.return,x)}try{Qo(5,t,t.return)}catch(x){wt(t,t.return,x)}}break;case 1:qn(e,t),li(t),i&512&&n!==null&&Hs(n,n.return);break;case 5:if(qn(e,t),li(t),i&512&&n!==null&&Hs(n,n.return),t.flags&32){var r=t.stateNode;try{fa(r,"")}catch(x){wt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Uv(r,s),Xd(a,o);var c=Xd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?zv(r,h):u==="dangerouslySetInnerHTML"?Ov(r,h):u==="children"?fa(r,h):up(r,u,h,c)}switch(a){case"input":Vd(r,s);break;case"textarea":Iv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ma]=s}catch(x){wt(t,t.return,x)}}break;case 6:if(qn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){wt(t,t.return,x)}}break;case 3:if(qn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(x){wt(t,t.return,x)}break;case 4:qn(e,t),li(t);break;case 13:qn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gp=Tt())),i&4&&Cg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||u,qn(e,t),tn=c):qn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(h=Se=u;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:Qo(4,d,d.return);break;case 1:Hs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){wt(i,n,x)}}break;case 5:Hs(d,d.return);break;case 22:if(d.memoizedState!==null){Pg(h);continue}}p!==null?(p.return=d,Se=p):Pg(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kv("display",o))}catch(x){wt(t,t.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){wt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qn(e,t),li(t),i&4&&Cg(t);break;case 21:break;default:qn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ux(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fa(r,""),i.flags&=-33);var s=bg(t);Ef(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bg(t);wf(t,a,o);break;default:throw Error(ae(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lw(t,e,n){Se=t,fx(t)}function fx(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||vl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=vl;var c=tn;if(vl=o,(tn=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?Lg(r):l!==null?(l.return=o,Se=l):Lg(r);for(;s!==null;)Se=s,fx(s),s=s.sibling;Se=r,vl=a,tn=c}Rg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Rg(t)}}function Rg(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&va(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}tn||e.flags&512&&Mf(e)}catch(d){wt(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Pg(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Lg(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yu(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Mf(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Mf(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Dw=Math.ceil,Fc=Xi.ReactCurrentDispatcher,Hp=Xi.ReactCurrentOwner,Gn=Xi.ReactCurrentBatchConfig,et=0,zt=null,Ct=null,Xt=0,An=0,Vs=Rr(0),Dt=0,Ca=null,ns=0,qu=0,Vp=0,Jo=null,vn=null,Gp=0,ao=1/0,Ri=null,Oc=!1,Tf=null,yr=null,_l=!1,dr=null,kc=0,ea=0,Af=null,cc=-1,uc=0;function dn(){return et&6?Tt():cc!==-1?cc:cc=Tt()}function Sr(t){return t.mode&1?et&2&&Xt!==0?Xt&-Xt:mw.transition!==null?(uc===0&&(uc=Zv()),uc):(t=st,t!==0||(t=window.event,t=t===void 0?16:r_(t.type)),t):1}function oi(t,e,n,i){if(50<ea)throw ea=0,Af=null,Error(ae(185));Ha(t,n,i),(!(et&2)||t!==zt)&&(t===zt&&(!(et&2)&&(qu|=n),Dt===4&&lr(t,Xt)),Mn(t,i),n===1&&et===0&&!(e.mode&1)&&(ao=Tt()+500,ju&&Pr()))}function Mn(t,e){var n=t.callbackNode;mM(t,e);var i=Sc(t,t===zt?Xt:0);if(i===0)n!==null&&Bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bm(n),e===1)t.tag===0?pw(Dg.bind(null,t)):w_(Dg.bind(null,t)),uw(function(){!(et&6)&&Pr()}),n=null;else{switch(Qv(i)){case 1:n=mp;break;case 4:n=qv;break;case 16:n=yc;break;case 536870912:n=Kv;break;default:n=yc}n=Sx(n,px.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function px(t,e){if(cc=-1,uc=0,et&6)throw Error(ae(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=Sc(t,t===zt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zc(t,i);else{e=i;var r=et;et|=2;var s=gx();(zt!==t||Xt!==e)&&(Ri=null,ao=Tt()+500,Yr(t,e));do try{Iw();break}catch(a){mx(t,a)}while(!0);Cp(),Fc.current=s,et=r,Ct!==null?e=0:(zt=null,Xt=0,e=Dt)}if(e!==0){if(e===2&&(r=Qd(t),r!==0&&(i=r,e=bf(t,r))),e===1)throw n=Ca,Yr(t,0),lr(t,i),Mn(t,Tt()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Nw(r)&&(e=zc(t,i),e===2&&(s=Qd(t),s!==0&&(i=s,e=bf(t,s))),e===1))throw n=Ca,Yr(t,0),lr(t,i),Mn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Hr(t,vn,Ri);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=Gp+500-Tt(),10<e)){if(Sc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=af(Hr.bind(null,t,vn,Ri),e);break}Hr(t,vn,Ri);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dw(i/1960))-i,10<i){t.timeoutHandle=af(Hr.bind(null,t,vn,Ri),i);break}Hr(t,vn,Ri);break;case 5:Hr(t,vn,Ri);break;default:throw Error(ae(329))}}}return Mn(t,Tt()),t.callbackNode===n?px.bind(null,t):null}function bf(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=zc(t,e),t!==2&&(e=vn,vn=n,e!==null&&Cf(e)),t}function Cf(t){vn===null?vn=t:vn.push.apply(vn,t)}function Nw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~Vp,e&=~qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function Dg(t){if(et&6)throw Error(ae(327));Qs();var e=Sc(t,0);if(!(e&1))return Mn(t,Tt()),null;var n=zc(t,e);if(t.tag!==0&&n===2){var i=Qd(t);i!==0&&(e=i,n=bf(t,i))}if(n===1)throw n=Ca,Yr(t,0),lr(t,e),Mn(t,Tt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,vn,Ri),Mn(t,Tt()),null}function Wp(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(ao=Tt()+500,ju&&Pr())}}function is(t){dr!==null&&dr.tag===0&&!(et&6)&&Qs();var e=et;et|=1;var n=Gn.transition,i=st;try{if(Gn.transition=null,st=1,t)return t()}finally{st=i,Gn.transition=n,et=e,!(et&6)&&Pr()}}function jp(){An=Vs.current,ft(Vs)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cw(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Tp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ac();break;case 3:so(),ft(yn),ft(on),Up();break;case 5:Np(i);break;case 4:so();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:Rp(i.type._context);break;case 22:case 23:jp()}n=n.return}if(zt=t,Ct=t=Mr(t.current,null),Xt=An=e,Dt=0,Ca=null,Vp=qu=ns=0,vn=Jo=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}$r=null}return t}function mx(t,e){do{var n=Ct;try{if(Cp(),oc.current=Ic,Uc){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Uc=!1}if(ts=0,Ot=Pt=xt=null,Zo=!1,Ta=0,Hp.current=null,n===null||n.return===null){Dt=1,Ca=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=xg(o);if(p!==null){p.flags&=-257,yg(p,o,a,s,e),p.mode&1&&_g(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){_g(s,c,e),$p();break e}l=Error(ae(426))}}else if(pt&&a.mode&1){var m=xg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),yg(m,o,a,s,e),Ap(oo(l,a));break e}}s=l=oo(l,a),Dt!==4&&(Dt=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Q_(s,l,e);dg(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(yr===null||!yr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=J_(s,a,e);dg(s,S);break e}}s=s.return}while(s!==null)}_x(n)}catch(L){e=L,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function gx(){var t=Fc.current;return Fc.current=Ic,t===null?Ic:t}function $p(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),zt===null||!(ns&268435455)&&!(qu&268435455)||lr(zt,Xt)}function zc(t,e){var n=et;et|=2;var i=gx();(zt!==t||Xt!==e)&&(Ri=null,Yr(t,e));do try{Uw();break}catch(r){mx(t,r)}while(!0);if(Cp(),et=n,Fc.current=i,Ct!==null)throw Error(ae(261));return zt=null,Xt=0,Dt}function Uw(){for(;Ct!==null;)vx(Ct)}function Iw(){for(;Ct!==null&&!oM();)vx(Ct)}function vx(t){var e=yx(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?_x(t):Ct=e,Hp.current=null}function _x(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cw(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Ct=null;return}}else if(n=bw(n,e,An),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Dt===0&&(Dt=5)}function Hr(t,e,n){var i=st,r=Gn.transition;try{Gn.transition=null,st=1,Fw(t,e,n,i)}finally{Gn.transition=r,st=i}return null}function Fw(t,e,n,i){do Qs();while(dr!==null);if(et&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gM(t,s),t===zt&&(Ct=zt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,Sx(yc,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=st;st=1;var a=et;et|=4,Hp.current=null,Pw(t,n),dx(n,t),nw(sf),Mc=!!rf,sf=rf=null,t.current=n,Lw(n),aM(),et=a,st=o,Gn.transition=s}else t.current=n;if(_l&&(_l=!1,dr=t,kc=r),s=t.pendingLanes,s===0&&(yr=null),uM(n.stateNode),Mn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Oc)throw Oc=!1,t=Tf,Tf=null,t;return kc&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===Af?ea++:(ea=0,Af=t):ea=0,Pr(),null}function Qs(){if(dr!==null){var t=Qv(kc),e=Gn.transition,n=st;try{if(Gn.transition=null,st=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,kc=0,et&6)throw Error(ae(331));var r=et;for(et|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:Qo(8,u,s)}var h=u.child;if(h!==null)h.return=u,Se=h;else for(;Se!==null;){u=Se;var d=u.sibling,p=u.return;if(cx(u),u===c){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var _=t.current;for(Se=_;Se!==null;){o=Se;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Se=g;else e:for(o=_;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yu(9,a)}}catch(L){wt(a,a.return,L)}if(a===o){Se=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Se=S;break e}Se=a.return}}if(et=r,Pr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(Bu,t)}catch{}i=!0}return i}finally{st=n,Gn.transition=e}}return!1}function Ng(t,e,n){e=oo(n,e),e=Q_(t,e,1),t=xr(t,e,1),e=dn(),t!==null&&(Ha(t,1,e),Mn(t,e))}function wt(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yr===null||!yr.has(i))){t=oo(n,t),t=J_(e,t,1),e=xr(e,t,1),t=dn(),e!==null&&(Ha(e,1,t),Mn(e,t));break}}e=e.return}}function Ow(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Xt&n)===n&&(Dt===4||Dt===3&&(Xt&130023424)===Xt&&500>Tt()-Gp?Yr(t,0):Vp|=n),Mn(t,e)}function xx(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=dn();t=Wi(t,e),t!==null&&(Ha(t,e,n),Mn(t,n))}function kw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xx(t,n)}function zw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),xx(t,n)}var yx;yx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,Aw(t,e,n);_n=!!(t.flags&131072)}else _n=!1,pt&&e.flags&1048576&&E_(e,Rc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;lc(t,e),t=e.pendingProps;var r=no(e,on.current);Zs(e,n),r=Fp(null,e,i,t,r,n);var s=Op();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,bc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Lp(e),r.updater=Xu,e.stateNode=r,r._reactInternals=e,pf(e,i,t,n),e=vf(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Ep(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(lc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hw(i),t=Jn(i,t),r){case 0:e=gf(null,e,i,t,n);break e;case 1:e=wg(null,e,i,t,n);break e;case 11:e=Sg(null,e,i,t,n);break e;case 14:e=Mg(null,e,i,Jn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),gf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),wg(t,e,i,r,n);case 3:e:{if(ix(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,P_(t,e),Dc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(ae(423)),e),e=Eg(t,e,i,n,r);break e}else if(i!==r){r=oo(Error(ae(424)),e),e=Eg(t,e,i,n,r);break e}else for(Rn=_r(e.stateNode.containerInfo.firstChild),Pn=e,pt=!0,ii=null,n=C_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),i===r){e=ji(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return L_(e),t===null&&hf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,of(i,r)?o=null:s!==null&&of(i,s)&&(e.flags|=32),nx(t,e),un(t,e,o,n),e.child;case 6:return t===null&&hf(e),null;case 13:return rx(t,e,n);case 4:return Dp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ro(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Sg(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Pc,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!yn.current){e=ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),df(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zs(e,n),r=Wn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),Mg(t,e,i,r,n);case 15:return ex(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),lc(t,e),e.tag=1,Sn(i)?(t=!0,bc(e)):t=!1,Zs(e,n),Z_(e,i,r),pf(e,i,r,n),vf(null,e,i,!0,t,n);case 19:return sx(t,e,n);case 22:return tx(t,e,n)}throw Error(ae(156,e.tag))};function Sx(t,e){return Yv(t,e)}function Bw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new Bw(t,e,n,i)}function Xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hw(t){if(typeof t=="function")return Xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dp)return 11;if(t===fp)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return qr(n.children,r,s,e);case hp:o=8,r|=8;break;case Od:return t=Vn(12,n,e,r|2),t.elementType=Od,t.lanes=s,t;case kd:return t=Vn(13,n,e,r),t.elementType=kd,t.lanes=s,t;case zd:return t=Vn(19,n,e,r),t.elementType=zd,t.lanes=s,t;case Lv:return Ku(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rv:o=10;break e;case Pv:o=9;break e;case dp:o=11;break e;case fp:o=14;break e;case sr:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function Ku(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=Lv,t.lanes=n,t.stateNode={isHidden:!1},t}function Wh(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function jh(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Th(0),this.expirationTimes=Th(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Th(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yp(t,e,n,i,r,s,o,a,l){return t=new Vw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lp(s),t}function Gw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mx(t){if(!t)return Er;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(Sn(n))return M_(t,n,e)}return e}function wx(t,e,n,i,r,s,o,a,l){return t=Yp(n,i,!0,t,r,s,o,a,l),t.context=Mx(null),n=t.current,i=dn(),r=Sr(n),s=Oi(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,Ha(t,r,i),Mn(t,i),t}function Zu(t,e,n,i){var r=e.current,s=dn(),o=Sr(r);return n=Mx(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,o),t!==null&&(oi(t,r,o,s),sc(t,r,o)),o}function Bc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qp(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function Ww(){return null}var Ex=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kp(t){this._internalRoot=t}Qu.prototype.render=Kp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Zu(t,e,null,null)};Qu.prototype.unmount=Kp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){Zu(null,t,null,null)}),e[Gi]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=t_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&i_(t)}};function Zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function jw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Bc(o);s.call(c)}}var o=wx(e,i,t,0,null,!1,!1,"",Ig);return t._reactRootContainer=o,t[Gi]=o.current,ya(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Bc(l);a.call(c)}}var l=Yp(t,0,!1,null,null,!1,!1,"",Ig);return t._reactRootContainer=l,t[Gi]=l.current,ya(t.nodeType===8?t.parentNode:t),is(function(){Zu(e,l,n,i)}),l}function eh(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Bc(o);a.call(l)}}Zu(e,o,t,r)}else o=jw(n,e,t,r,i);return Bc(o)}Jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(gp(e,n|1),Mn(e,Tt()),!(et&6)&&(ao=Tt()+500,Pr()))}break;case 13:is(function(){var i=Wi(t,1);if(i!==null){var r=dn();oi(i,t,1,r)}}),qp(t,1)}};vp=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=dn();oi(e,t,134217728,n)}qp(t,134217728)}};e_=function(t){if(t.tag===13){var e=Sr(t),n=Wi(t,e);if(n!==null){var i=dn();oi(n,t,e,i)}qp(t,e)}};t_=function(){return st};n_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};qd=function(t,e,n){switch(e){case"input":if(Vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wu(i);if(!r)throw Error(ae(90));Nv(i),Vd(i,r)}}}break;case"textarea":Iv(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};Vv=Wp;Gv=is;var $w={usingClientEntryPoint:!1,Events:[Ga,Fs,Wu,Bv,Hv,Wp]},Ro={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xw={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$v(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||Ww,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Bu=xl.inject(Xw),vi=xl}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$w;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zp(e))throw Error(ae(200));return Gw(t,e,null,n)};Dn.createRoot=function(t,e){if(!Zp(t))throw Error(ae(299));var n=!1,i="",r=Ex;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yp(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,ya(t.nodeType===8?t.parentNode:t),new Kp(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=$v(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return is(t)};Dn.hydrate=function(t,e,n){if(!Ju(e))throw Error(ae(200));return eh(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!Zp(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ex;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wx(e,null,t,1,n??null,r,!1,s,o),t[Gi]=e.current,ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Qu(e)};Dn.render=function(t,e,n){if(!Ju(e))throw Error(ae(200));return eh(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(ae(40));return t._reactRootContainer?(is(function(){eh(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};Dn.unstable_batchedUpdates=Wp;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ju(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return eh(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function Tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tx)}catch(t){console.error(t)}}Tx(),Tv.exports=Dn;var Yw=Tv.exports,Ax,Fg=Yw;Ax=Fg.createRoot,Fg.hydrateRoot;function qw({lon0:t,lat0:e,kx:n,kz:i}){return{lon0:t,lat0:e,kx:n,kz:i,toX:r=>(r-t)*n,toZ:r=>-(r-e)*i,fromX:r=>r/n+t,fromZ:r=>-r/i+e}}function bx(t,e,n){const{ncols:i,nrows:r,west:s,south:o,cellsize:a}=t,l=e instanceof Int16Array?e:new Int16Array(e),c=(v,x)=>l[Math.min(r-1,Math.max(0,v))*i+Math.min(i-1,Math.max(0,x))],u=o+r*a,h=s+i*a,d=(v,x)=>{const m=(v-s)/a-.5,f=(u-x)/a-.5;if(m<0||f<0||m>i-1||f>r-1)return null;const _=Math.min(Math.floor(m),i-2),g=Math.min(Math.floor(f),r-2),S=m-_,L=f-g,C=c(g,_)*(1-S)+c(g,_+1)*S,A=c(g+1,_)*(1-S)+c(g+1,_+1)*S;return C*(1-L)+A*L},p=[n.toX(s+a/2),n.toX(h-a/2),n.toZ(u-a/2),n.toZ(o+a/2)];return{meta:t,heights:l,H:c,sample:d,box:p,north:u,east:h}}function Kw(t,e,n=1,i=0,r=null){const{west:s,cellsize:o}=t.meta,a=t.H,[l,c,u,h]=r??[0,0,t.meta.ncols-1,t.meta.nrows-1],d=Math.floor((u-l)/n)+1,p=Math.floor((h-c)/n)+1,v=i?2*(d+p)-4:0,x=d*p+v,m=new Float32Array(x*3),f=new Float32Array(x),_=new Float32Array(x*2),g=new Float32Array(x),S=z=>t.north-(z+.5)*o,{ncols:L,nrows:C}=t.meta,A=o*e.kx,D=o*e.kz;let Y=0;for(let z=0;z<p;z++){const k=c+z*n,H=e.toZ(S(k)),J=Math.max(0,k-n),G=Math.min(C-1,k+n);for(let Q=0;Q<d;Q++,Y++){const R=l+Q*n;m[Y*3]=e.toX(s+(R+.5)*o),m[Y*3+2]=H,f[Y]=a(k,R);const X=Math.max(0,R-n),Z=Math.min(L-1,R+n);_[Y*2]=(a(k,Z)-a(k,X))/((Z-X)*A),_[Y*2+1]=(a(G,R)-a(J,R))/((G-J)*D)}}const y=new Uint32Array(6*((d-1)*(p-1)+v));let E=0;for(let z=0;z<p-1;z++)for(let k=0;k<d-1;k++){const H=z*d+k,J=H+1,G=H+d,Q=G+1;y[E++]=H,y[E++]=G,y[E++]=J,y[E++]=J,y[E++]=G,y[E++]=Q}if(i){const z=[];for(let H=0;H<d;H++)z.push(H);for(let H=1;H<p;H++)z.push(H*d+d-1);for(let H=d-2;H>=0;H--)z.push((p-1)*d+H);for(let H=p-2;H>=1;H--)z.push(H*d);const k=d*p;z.forEach((H,J)=>{const G=k+J;m.set(m.subarray(H*3,H*3+3),G*3),f[G]=f[H],_[G*2]=_[H*2],_[G*2+1]=_[H*2+1],g[G]=i});for(let H=0;H<z.length;H++){const J=z[H],G=z[(H+1)%z.length],Q=k+H,R=k+(H+1)%z.length;y[E++]=J,y[E++]=G,y[E++]=Q,y[E++]=G,y[E++]=R,y[E++]=Q}}return{position:m,elev:f,grad:_,drop:g,index:y,n:d,m:p}}function Zw(t,e,n,i=1){const r=Math.max(i,Math.round(n/i)*i),s=[];for(let o=0;o<e-1;o+=r){const a=Math.min(o+r,o+Math.floor((e-1-o)/i)*i);for(let l=0;l<t-1;l+=r){const c=Math.min(l+r,l+Math.floor((t-1-l)/i)*i);c>l&&a>o&&s.push([l,o,c,a])}}return s}function Cx(t,e,n,i,r=0,s=null){const o=Kw(e,n,i,r,s),a=new t.BufferGeometry;return a.setAttribute("position",new t.BufferAttribute(o.position,3)),a.setAttribute("elev",new t.BufferAttribute(o.elev,1)),a.setAttribute("grad",new t.BufferAttribute(o.grad,2)),a.setAttribute("drop",new t.BufferAttribute(o.drop,1)),a.setIndex(new t.BufferAttribute(o.index,1)),a.computeBoundingBox(),a.boundingBox.min.y=-60,a.boundingBox.max.y=50,a.boundingSphere=a.boundingBox.getBoundingSphere(new t.Sphere),a}const Qw="./pnw/",Jw="PYTHONPATH=src .venv/bin/python -m earthnote_data.build_bundle --terrain";class Hc extends Error{}async function Og(t,e,n){var s,o;const i=await n(t);if(i.status===404||(o=(s=i.headers)==null?void 0:s.get("content-type"))!=null&&o.includes("html"))throw new Hc(`The map data is missing: ${t}. Build it with:`);if(!i.ok)throw new Error(`Could not load ${t} (HTTP ${i.status})`);const r=await i.arrayBuffer();if(e!=null&&r.byteLength!==e)throw new Hc(`The map data is incomplete: ${t} has ${r.byteLength} bytes, expected ${e}. Rebuild it with:`);return r}async function e1(t=Qw,e=fetch){var d,p;const n=await e(`${t}manifest.json`);if(!n.ok||(p=(d=n.headers)==null?void 0:d.get("content-type"))!=null&&p.includes("html"))throw new Hc("The map data has not been built yet. Build it with:");const i=await n.json(),r=qw(i.projection),s=i.terrain,o=(v,x)=>Og(`${t}terrain/${v}.bin`,x.ncols*x.nrows*2,e).then(m=>bx(x,m,r)),a={},l=Object.entries({...i.roads,...i.borders}).map(async([v,x])=>{a[v]=new Float32Array(await Og(`${t}${x.file}`,x.segments*24,e))}),[c,u,h]=await Promise.all([o("outer",s.outer),o("overview",s.overview),e(`${t}${i.places.file}`).then(v=>v.json()),...l]);return{base:t,manifest:i,P:r,outer:c,overview:u,lines:a,places:h,waterUrl:`${t}${i.water.overview.file}`}}const t1="https://pub-2c6655bf057545a580938dc9fe003ac8.r2.dev/events/";async function kg(t,e=t1,n=fetch){var s,o;const i=await n(`${e}${t}/event.json`,{cache:"no-cache"});if(!i.ok||(o=(s=i.headers)==null?void 0:s.get("content-type"))!=null&&o.includes("html"))return null;const r=await i.json();return r.base=`${e}${t}/`,r.t0=Date.parse(r.start),r.first??(r.first=0),r.runList=Object.fromEntries(Object.entries(r.runs).map(([a,l])=>[a,Object.entries(l).map(([c,u])=>({model:a,init:c,time:Qp(c),frames:new Set(u.frames),complete:u.complete})).sort((c,u)=>c.time-u.time)])),r.obsRain=new Set(Object.keys(r.obs.rain).map(Number)),r.obsMet=new Set(r.obs.met),r.obsGust=new Set(r.obs.gust??[]),r.lastObs=Math.max(-1,...r.obsRain),r}const Qp=t=>Date.UTC(+t.slice(0,4),+t.slice(4,6)-1,+t.slice(6,8),+t.slice(8,10)),On=(t,e)=>t.t0+(e+1)*36e5;function Vo(t,e,n,i="rain"){const r={rain:t.obsRain,met:t.obsMet,gust:t.obsGust}[i];if(n.mode==="blend"&&(r!=null&&r.has(e)))return{type:"obs"};const s=t.runList[n.model]??[];if(n.mode==="run"){const o=s.find(a=>a.init===n.init);return o!=null&&o.frames.has(e)?{type:"fc",model:n.model,init:o.init}:null}for(let o=s.length-1;o>=0;o--)if(s[o].frames.has(e))return{type:"fc",model:n.model,init:s[o].init};return null}function dc(t,e,n,i){const r=`${i}/k${String(n).padStart(3,"0")}.png?v=${t.version??t.start}`;return e.type==="obs"?`${t.base}obs/${r}${i==="rain"?`&p=${t.obs.rain[n]??""}`:""}`:`${t.base}fc/${e.model}/${e.init}/${r}`}function Rx(t,e,n){if(n==="gust")return t.grids.gust;const i=e.type==="obs"?n==="rain"?t.obs.rainGrid:t.obs.metGrid:t.models[e.model][n==="rain"?"rainGrid":"metGrid"];return t.grids[i]}function n1(t,e){const n=new Float32Array(e);for(let i=0;i<e;i++){const r=t[i*4];n[i]=r===255?NaN:(r/25)**2}return n}function i1(t,e,n){if(e.cols===n.cols&&e.rows===n.rows)return t;const i=new Float32Array(n.cols*n.rows);for(let r=0;r<n.rows;r++){const s=n.north-(r+.5)*n.cell,o=Math.min(e.rows-1,Math.max(0,(e.north-s)/e.cell-.5)),a=Math.min(Math.floor(o),e.rows-2),l=o-a;for(let c=0;c<n.cols;c++){const u=n.west+(c+.5)*n.cell,h=Math.min(e.cols-1,Math.max(0,(u-e.west)/e.cell-.5)),d=Math.min(Math.floor(h),e.cols-2),p=h-d;let v=0,x=0;const m=(f,_,g)=>{const S=t[f*e.cols+_];!Number.isNaN(S)&&g>0&&(v+=S*g,x+=g)};m(a,d,(1-l)*(1-p)),m(a,d+1,(1-l)*p),m(a+1,d,l*(1-p)),m(a+1,d+1,l*p),i[r*n.cols+c]=x>0?v/x:NaN}}return i}async function r1(t,e=fetch){var c;const n=await e(t);if(!n.ok)throw new Error(`HTTP ${n.status} for ${t}`);const i=await createImageBitmap(await n.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),s=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(i.width,i.height):Object.assign(document.createElement("canvas"),{width:i.width,height:i.height})).getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});s.drawImage(i,0,0);const{width:o,height:a}=i,l=s.getImageData(0,0,o,a).data;return(c=i.close)==null||c.call(i),{width:o,height:a,data:l}}class zg{constructor(e=600,n=r1){this.cap=e,this.decode=n,this.map=new Map}get(e){let n=this.map.get(e);if(n)return this.map.delete(e),this.map.set(e,n),n;for(n=this.decode(e).catch(i=>{throw this.map.delete(e),i}),this.map.set(e,n);this.map.size>this.cap;)this.map.delete(this.map.keys().next().value);return n}}class s1{constructor(e,n){Object.assign(this,{doc:e,cache:n}),this.checkpoints=new Map}async hourly(e,n){const i=Vo(this.doc,e,n,"rain");if(!i)return null;const r=Rx(this.doc,i,"rain"),s=await this.cache.get(dc(this.doc,i,e,"rain"));return{src:i,mm:i1(n1(s.data,r.cols*r.rows),r,this.doc.grids.rain)}}async accumulated(e,n){var h;const i=this.doc.grids.rain,r=i.cols*i.rows,s=JSON.stringify(n);let o=this.checkpoints.get(s);o||(o=new Map,this.checkpoints.set(s,o));const a=n.mode==="run"?Math.min(...((h=this.doc.runList[n.model].find(d=>d.init===n.init))==null?void 0:h.frames)??[0]):this.doc.first??0;if(e<a)return null;let l=a,c=new Float32Array(r),u=new Uint8Array(r);for(let d=Math.floor(e/12)*12;d>=a;d-=12){const p=o.get(d);if(p&&d<=e){c=p.sum.slice(),u=p.seen.slice(),l=d+1;break}}for(let d=l;d<=e;d++){const p=await this.hourly(d,n);if(p)for(let v=0;v<r;v++){const x=p.mm[v];Number.isNaN(x)||(c[v]+=x,u[v]=1)}d%12===0&&o.set(d,{sum:c.slice(),seen:u.slice()})}for(let d=0;d<r;d++)u[d]||(c[d]=NaN);return{mm:c,first:a}}}const Jp=(t,e)=>Object.fromEntries(t.formatToParts(e).map(n=>[n.type,n.value])),o1=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",month:"short",day:"numeric",hour:"numeric",hour12:!0,timeZoneName:"short"}),Px=new Intl.DateTimeFormat("en-US",{timeZone:"UTC",month:"short",day:"numeric",hour:"2-digit",hourCycle:"h23"}),$h=t=>{const e=Jp(o1,t);return`${e.weekday} ${e.month} ${e.day} · ${e.hour} ${e.dayPeriod} ${e.timeZoneName}`},a1=t=>{const e=Jp(Px,t);return`${e.month} ${e.day} ${e.hour}:00 UTC`},Vc=t=>{const e=Jp(Px,Qp(t));return`${e.month} ${e.day} ${e.hour}z`},l1=["high water","2-year flood","5-year flood","10-year flood","25-year flood","50-year flood"];function c1(t,e){const n=t.count,i=t.paths;let r=0;const s=(d,p,v)=>{const x=new d(e,r,p);return r+=v,x},o=s(Float32Array,n*6,n*24),a=s(Uint16Array,n,(n+n%2)*2),l=s(Uint8Array,n,Math.ceil(n/4)*4),c=s(Uint32Array,i+1,(i+1)*4),u=s(Uint32Array,i,i*4),h=s(Float32Array,t.vertices*2,t.vertices*8);return{...t,thr:o,name:a,order:l,offsets:c,owner:u,coords:h}}async function u1(t,e=fetch){const n=`${t.base}rivers/`,i=`?v=${t.version}`,[r,s]=await Promise.all([e(`${n}reaches.json${i}`).then(o=>o.json()),e(`${n}reaches.bin${i}`).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.arrayBuffer()})]);return c1(r,s)}const Xh=t=>t===255?NaN:.05*(10**(t/40)-1);function Bg(t,e,n){let i=0;for(let r=0;r<6;r++){const s=e[n*6+r];s>0&&t>=s&&(i=r+1)}return i}const h1=2;function d1(t,e,n=!0){var o;const i=t.rivers;if(!i)return null;if(i.obs.includes(e))return{type:"obs",k:e};const r=Math.max(-1,...i.obs),s=t.updated&&t.t0+(e+1)*36e5<=Date.parse(t.updated);if(e<r)return null;if(s&&r>=0&&e-r<=h1)return{type:"obs",k:r};if(!n)return null;for(const a of["short","medium"]){const l=(o=i.whatif)==null?void 0:o[a];if(l&&e>=l.first&&e<l.first+l.count)return{type:"whatif",kind:a,init:l.init,i:e-l.first}}return null}class f1{constructor(e,n,i=(...r)=>fetch(...r)){Object.assign(this,{doc:e,n,fetchImpl:i}),this.map=new Map}_get(e){let n=this.map.get(e);return n||(n=this.fetchImpl(e).then(i=>{if(!i.ok)throw new Error(`HTTP ${i.status}`);return i.arrayBuffer()}).catch(i=>{throw this.map.delete(e),i}),this.map.set(e,n),this.map.size>80&&this.map.delete(this.map.keys().next().value)),n}async get(e){const n=`${this.doc.base}rivers/`,i=`?v=${this.doc.version}`;return e.type==="obs"?new Uint8Array(await this._get(`${n}obs/k${String(e.k).padStart(3,"0")}.bin${i}`)):new Uint8Array(await this._get(`${n}whatif/${e.kind}_${e.init}.bin${i}`),e.i*this.n,this.n)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="169",xi={ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lx=0,Rf=1,Dx=2,em=1,Nx=2,di=3,$i=0,fn=1,Cn=2,ki=0,Kr=1,Pf=2,Lf=3,Df=4,Ux=5,cr=100,Ix=101,Fx=102,Ox=103,kx=104,zx=200,Bx=201,Hx=202,Vx=203,Gc=204,Wc=205,Gx=206,Wx=207,jx=208,$x=209,Xx=210,Yx=211,qx=212,Kx=213,Zx=214,jc=0,$c=1,Xc=2,rs=3,Yc=4,qc=5,Kc=6,Zc=7,tm=0,Qx=1,Jx=2,zi=0,ey=1,ty=2,ny=3,iy=4,ry=5,sy=6,oy=7,nm=300,ss=301,os=302,Qc=303,Jc=304,ja=306,eu=1e3,fr=1001,tu=1002,kt=1003,ay=1004,Go=1005,nn=1006,fc=1007,Ii=1008,yi=1009,im=1010,rm=1011,lo=1012,nh=1013,Tr=1014,mi=1015,mo=1016,ih=1017,rh=1018,as=1020,sm=35902,om=1021,am=1022,xn=1023,lm=1024,cm=1025,Zr=1026,ls=1027,$a=1028,sh=1029,Xa=1030,oh=1031,ah=1033,ta=33776,na=33777,ia=33778,ra=33779,nu=35840,iu=35841,ru=35842,su=35843,ou=36196,au=37492,lu=37496,cu=37808,uu=37809,hu=37810,du=37811,fu=37812,pu=37813,mu=37814,gu=37815,vu=37816,_u=37817,xu=37818,yu=37819,Su=37820,Mu=37821,sa=36492,wu=36494,Eu=36495,um=36283,Tu=36284,Au=36285,bu=36286,ly=3200,cy=3201,uy=0,hy=1,Bn="",ni="srgb",Yi="srgb-linear",lh="display-p3",Ya="display-p3-linear",Ra="linear",ct="srgb",Pa="rec709",La="p3",Vr=7680,Nf=519,dy=512,fy=513,py=514,hm=515,my=516,gy=517,vy=518,_y=519,Cu=35044,Uf=35048,If="300 es",gi=2e3,Da=2001;class Lr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hg=1234567;const oa=Math.PI/180,Na=180/Math.PI;function Bi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function dm(t,e){return(t%e+e)%e}function p1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function m1(t,e,n){return t!==e?(n-t)/(e-t):0}function aa(t,e,n){return(1-n)*t+n*e}function g1(t,e,n,i){return aa(t,e,1-Math.exp(-n*i))}function v1(t,e=1){return e-Math.abs(dm(t,e*2)-e)}function _1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function x1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function y1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function S1(t,e){return t+Math.random()*(e-t)}function M1(t){return t*(.5-Math.random())}function w1(t){t!==void 0&&(Hg=t);let e=Hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function E1(t){return t*oa}function T1(t){return t*Na}function A1(t){return(t&t-1)===0&&t!==0}function b1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function C1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function R1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const co={DEG2RAD:oa,RAD2DEG:Na,generateUUID:Bi,clamp:$t,euclideanModulo:dm,mapLinear:p1,inverseLerp:m1,lerp:aa,damp:g1,pingpong:v1,smoothstep:_1,smootherstep:x1,randInt:y1,randFloat:S1,randFloatSpread:M1,seededRandom:w1,degToRad:E1,radToDeg:T1,isPowerOfTwo:A1,ceilPowerOfTwo:b1,floorPowerOfTwo:C1,setQuaternionFromProperEuler:R1,normalize:rt,denormalize:ri};class Be{constructor(e=0,n=0){Be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],_=r[1],g=r[4],S=r[7],L=r[2],C=r[5],A=r[8];return s[0]=o*x+a*_+l*L,s[3]=o*m+a*g+l*C,s[6]=o*f+a*S+l*A,s[1]=c*x+u*_+h*L,s[4]=c*m+u*g+h*C,s[7]=c*f+u*S+h*A,s[2]=d*x+p*_+v*L,s[5]=d*m+p*g+v*C,s[8]=d*f+p*S+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=n*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yh.makeScale(e,n)),this}rotate(e){return this.premultiply(Yh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yh=new We;function xy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ua(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yy(){const t=Ua("canvas");return t.style.display="block",t}const Vg={};function pc(t){t in Vg||(Vg[t]=!0,console.warn(t))}function P1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function L1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function D1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gg=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wg=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[Yi]:{transfer:Ra,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ni]:{transfer:ct,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ya]:{transfer:Ra,primaries:La,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Wg),fromReference:t=>t.applyMatrix3(Gg)},[lh]:{transfer:ct,primaries:La,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Wg),fromReference:t=>t.applyMatrix3(Gg).convertLinearToSRGB()}},N1=new Set([Yi,Ya]),tt={enabled:!0,_workingColorSpace:Yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!N1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Po[e].toReference,r=Po[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Po[t].primaries},getTransfer:function(t){return t===Bn?Ra:Po[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Po[e].luminanceCoefficients)}};function Js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class Sy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Ua("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ua("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Js(n[i]/255)*255):n[i]=Js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U1=0;class fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kh(r[o].image)):s.push(Kh(r[o]))}else s=Kh(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Kh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Sy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I1=0;class Yt extends Lr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=fr,r=fr,s=nn,o=Ii,a=xn,l=yi,c=Yt.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Bi(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eu:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eu:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=nm;Yt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,n=0,i=0,r=1){je.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(p+1)/2,L=(f+1)/2,C=(u+d)/4,A=(h+x)/4,D=(v+m)/4;return g>S&&g>L?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=A/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=D/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=D/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class My extends Lr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new je(0,0,e,n),this.scissorTest=!1,this.viewport=new je(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new fm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends My{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ch extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wy extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==d||c!==p||u!==v){let m=1-a;const f=l*d+c*p+u*v+h*x,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const L=Math.sqrt(g),C=Math.atan2(L,f*_);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const S=a*_;if(l=l*m+d*S,c=c*m+p*S,u=u*m+v*S,h=h*m+x*S,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*h+l*p-c*d,e[n+1]=l*v+u*d+c*h-a*p,e[n+2]=c*v+u*p+a*d-l*h,e[n+3]=u*v-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zh.copy(this).projectOnVector(e),this.sub(Zh)}reflect(e){return this.sub(Zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zh=new I,jg=new br;class qi{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Sl.subVectors(this.max,Lo),gs.subVectors(e.a,Lo),vs.subVectors(e.b,Lo),_s.subVectors(e.c,Lo),Ji.subVectors(vs,gs),er.subVectors(_s,vs),Ur.subVectors(gs,_s);let n=[0,-Ji.z,Ji.y,0,-er.z,er.y,0,-Ur.z,Ur.y,Ji.z,0,-Ji.x,er.z,0,-er.x,Ur.z,0,-Ur.x,-Ji.y,Ji.x,0,-er.y,er.x,0,-Ur.y,Ur.x,0];return!Qh(n,gs,vs,_s,Sl)||(n=[1,0,0,0,1,0,0,0,1],!Qh(n,gs,vs,_s,Sl))?!1:(Ml.crossVectors(Ji,er),n=[Ml.x,Ml.y,Ml.z],Qh(n,gs,vs,_s,Sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new I,new I,new I,new I,new I,new I,new I,new I],Kn=new I,yl=new qi,gs=new I,vs=new I,_s=new I,Ji=new I,er=new I,Ur=new I,Lo=new I,Sl=new I,Ml=new I,Ir=new I;function Qh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ir.fromArray(t,s);const a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),u=i.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const F1=new qi,Do=new I,Jh=new I;class Dr{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):F1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Jh)),this.expandByPoint(Do.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new I,ed=new I,wl=new I,tr=new I,td=new I,El=new I,nd=new I;class qa{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ed.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(ed);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wl),a=tr.dot(this.direction),l=-tr.dot(wl),c=tr.lengthSq(),u=Math.abs(1-o*o);let h,d,p,v;if(u>0)if(h=o*l-a,d=o*a-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ed).addScaledVector(wl,d),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){td.subVectors(n,e),El.subVectors(i,e),nd.crossVectors(td,El);let o=this.direction.dot(nd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(El.crossVectors(tr,El));if(l<0)return null;const c=a*this.direction.dot(td.cross(tr));if(c<0||l+c>o)return null;const u=-a*tr.dot(nd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,v,x,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,v=a*u,x=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,v=c*u,x=c*h;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,v=c*u,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,v=a*u,x=a*h;n[0]=l*u,n[4]=v*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=x-d*h,n[8]=v*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+v,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+x,n[5]=o*u,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*u,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O1,e,k1)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),nr.crossVectors(i,En),nr.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),nr.crossVectors(i,En)),nr.normalize(),Tl.crossVectors(En,nr),r[0]=nr.x,r[4]=Tl.x,r[8]=En.x,r[1]=nr.y,r[5]=Tl.y,r[9]=En.y,r[2]=nr.z,r[6]=Tl.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],_=i[3],g=i[7],S=i[11],L=i[15],C=r[0],A=r[4],D=r[8],Y=r[12],y=r[1],E=r[5],z=r[9],k=r[13],H=r[2],J=r[6],G=r[10],Q=r[14],R=r[3],X=r[7],Z=r[11],le=r[15];return s[0]=o*C+a*y+l*H+c*R,s[4]=o*A+a*E+l*J+c*X,s[8]=o*D+a*z+l*G+c*Z,s[12]=o*Y+a*k+l*Q+c*le,s[1]=u*C+h*y+d*H+p*R,s[5]=u*A+h*E+d*J+p*X,s[9]=u*D+h*z+d*G+p*Z,s[13]=u*Y+h*k+d*Q+p*le,s[2]=v*C+x*y+m*H+f*R,s[6]=v*A+x*E+m*J+f*X,s[10]=v*D+x*z+m*G+f*Z,s[14]=v*Y+x*k+m*Q+f*le,s[3]=_*C+g*y+S*H+L*R,s[7]=_*A+g*E+S*J+L*X,s[11]=_*D+g*z+S*G+L*Z,s[15]=_*Y+g*k+S*Q+L*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],_=h*m*c-x*d*c+x*l*p-a*m*p-h*l*f+a*d*f,g=v*d*c-u*m*c-v*l*p+o*m*p+u*l*f-o*d*f,S=u*x*c-v*h*c+v*a*p-o*x*p-u*a*f+o*h*f,L=v*h*l-u*x*l-v*a*d+o*x*d+u*a*m-o*h*m,C=n*_+i*g+r*S+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*f-i*d*f)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(u*m*s-v*d*s+v*r*p-n*m*p-u*r*f+n*d*f)*A,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*f-n*l*f)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(v*h*s-u*x*s-v*i*p+n*x*p+u*i*f-n*h*f)*A,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*f+n*a*f)*A,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*A,e[12]=L*A,e[13]=(u*x*r-v*h*r+v*i*d-n*x*d-u*i*m+n*h*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,v=s*h,x=o*u,m=o*h,f=a*h,_=l*c,g=l*u,S=l*h,L=i.x,C=i.y,A=i.z;return r[0]=(1-(x+f))*L,r[1]=(p+S)*L,r[2]=(v-g)*L,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(d+f))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(v+g)*A,r[9]=(m-_)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),a=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/s,u=1/o,h=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,n.setFromRotationMatrix(Zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=gi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===gi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Da)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*u;let v,x;if(a===gi)v=(o+s)*h,x=-2*h;else if(a===Da)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new I,Zn=new mt,O1=new I(0,0,0),k1=new I(1,1,1),nr=new I,Tl=new I,En=new I,$g=new mt,Xg=new br;class Si{constructor(e=0,n=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $g.makeRotationFromQuaternion(e),this.setFromRotationMatrix($g,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xg.setFromEuler(this),this.setFromQuaternion(Xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class pm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z1=0;const Yg=new I,ys=new br,Ai=new mt,Al=new I,No=new I,B1=new I,H1=new br,qg=new I(1,0,0),Kg=new I(0,1,0),Zg=new I(0,0,1),Qg={type:"added"},V1={type:"removed"},Ss={type:"childadded",child:null},id={type:"childremoved",child:null};class sn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new I,n=new Si,i=new br,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new We}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(qg,e)}rotateY(e){return this.rotateOnAxis(Kg,e)}rotateZ(e){return this.rotateOnAxis(Zg,e)}translateOnAxis(e,n){return Yg.copy(e).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qg,e)}translateY(e){return this.translateOnAxis(Kg,e)}translateZ(e){return this.translateOnAxis(Zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Al.copy(e):Al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(No,Al,this.up):Ai.lookAt(Al,No,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Ai),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qg),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(V1),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qg),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,B1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,H1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new I(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new I,bi=new I,rd=new I,Ci=new I,Ms=new I,ws=new I,Jg=new I,sd=new I,od=new I,ad=new I,ld=new je,cd=new je,ud=new je;class Hn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),bi.subVectors(i,n),rd.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(bi),l=Qn.dot(rd),c=bi.dot(bi),u=bi.dot(rd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,n),cd.fromBufferAttribute(e,i),ud.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ld,s.x),o.addScaledVector(cd,s.y),o.addScaledVector(ud,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),bi.subVectors(e,n),Qn.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Qn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),ws.subVectors(s,i),sd.subVectors(e,i);const l=Ms.dot(sd),c=ws.dot(sd);if(l<=0&&c<=0)return n.copy(i);od.subVectors(e,r);const u=Ms.dot(od),h=ws.dot(od);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ms,o);ad.subVectors(e,s);const p=Ms.dot(ad),v=ws.dot(ad);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ws,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return Jg.subVectors(s,r),a=(h-u)/(h-u+(p-v)),n.copy(r).addScaledVector(Jg,a);const f=1/(m+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(Ms,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},bl={h:0,s:0,l:0};function hd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=dm(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=hd(o,s,e+1/3),this.g=hd(o,s,e),this.b=hd(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=ni){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ni){const i=Ey[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=qh(e.r),this.g=qh(e.g),this.b=qh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return tt.fromWorkingColorSpace(en.copy(this),e),Math.round($t(en.r*255,0,255))*65536+Math.round($t(en.g*255,0,255))*256+Math.round($t(en.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=ni){tt.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==ni?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(bl);const i=aa(ir.h,bl.h,n),r=aa(ir.s,bl.s,n),s=aa(ir.l,bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ve;Ve.NAMES=Ey;let G1=0;class ds extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=Kr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gc&&(i.blendSrc=this.blendSrc),this.blendDst!==Wc&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mm extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new I,Cl=new Be;class Lt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cu,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(e),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ri(n,this.array)),n}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ri(n,this.array)),n}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ri(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ri(n,this.array)),n}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}}class gm extends Lt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vm extends Lt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class lt extends Lt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let W1=0;const Fn=new mt,dd=new sn,Es=new I,Tn=new qi,Uo=new qi,Ft=new I;class _t extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xy(e)?vm:gm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(Tn.min,Uo.min),Tn.expandByPoint(Ft),Ft.addVectors(Tn.max,Uo.max),Tn.expandByPoint(Ft)):(Tn.expandByPoint(Uo.min),Tn.expandByPoint(Uo.max))}Tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),Ft.add(Es)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new I,l[D]=new I;const c=new I,u=new I,h=new I,d=new Be,p=new Be,v=new Be,x=new I,m=new I;function f(D,Y,y){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,Y),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,Y),v.fromBufferAttribute(s,y),u.sub(c),h.sub(c),p.sub(d),v.sub(d);const E=1/(p.x*v.y-v.x*p.y);isFinite(E)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(E),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(E),a[D].add(x),a[Y].add(x),a[y].add(x),l[D].add(m),l[Y].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,Y=_.length;D<Y;++D){const y=_[D],E=y.start,z=y.count;for(let k=E,H=E+z;k<H;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const g=new I,S=new I,L=new I,C=new I;function A(D){L.fromBufferAttribute(r,D),C.copy(L);const Y=a[D];g.copy(Y),g.sub(L.multiplyScalar(L.dot(Y))).normalize(),S.crossVectors(C,Y);const E=S.dot(l[D])<0?-1:1;o.setXYZW(D,g.x,g.y,g.z,E)}for(let D=0,Y=_.length;D<Y;++D){const y=_[D],E=y.start,z=y.count;for(let k=E,H=E+z;k<H;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Lt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[v++]=c[p++]}return new Lt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _t,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const e0=new mt,Fr=new qa,Rl=new Dr,t0=new I,Pl=new I,Ll=new I,Dl=new I,fd=new I,Nl=new I,n0=new I,Ul=new I;class rn extends sn{constructor(e=new _t,n=new mm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(fd.fromBufferAttribute(h,e),o?Nl.addScaledVector(fd,u):Nl.addScaledVector(fd.sub(n),u))}n.add(Nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Rl,t0)===null||Fr.origin.distanceToSquared(t0)>(e.far-e.near)**2))&&(e0.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(e0),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,L=g;S<L;S+=3){const C=a.getX(S),A=a.getX(S+1),D=a.getX(S+2);r=Il(this,f,e,i,c,u,h,C,A,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=Il(this,o,e,i,c,u,h,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,L=g;S<L;S+=3){const C=S,A=S+1,D=S+2;r=Il(this,f,e,i,c,u,h,C,A,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=m,g=m+1,S=m+2;r=Il(this,o,e,i,c,u,h,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function j1(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;Ul.copy(a),Ul.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ul);return c<n.near||c>n.far?null:{distance:c,point:Ul.clone(),object:t}}function Il(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Pl),t.getVertexPosition(l,Ll),t.getVertexPosition(c,Dl);const u=j1(t,e,n,i,Pl,Ll,Dl,n0);if(u){const h=new I;Hn.getBarycoord(n0,Pl,Ll,Dl,h),r&&(u.uv=Hn.getInterpolatedAttribute(r,a,l,c,h,new Be)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,a,l,c,h,new Be)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Hn.getNormal(Pl,Ll,Dl,d.normal),u.face=d,u.barycoord=h}return u}class go extends _t{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function v(x,m,f,_,g,S,L,C,A,D,Y){const y=S/A,E=L/D,z=S/2,k=L/2,H=C/2,J=A+1,G=D+1;let Q=0,R=0;const X=new I;for(let Z=0;Z<G;Z++){const le=Z*E-k;for(let Te=0;Te<J;Te++){const Le=Te*y-z;X[x]=Le*_,X[m]=le*g,X[f]=H,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[f]=C>0?1:-1,u.push(X.x,X.y,X.z),h.push(Te/A),h.push(1-Z/D),Q+=1}}for(let Z=0;Z<D;Z++)for(let le=0;le<A;le++){const Te=d+le+J*Z,Le=d+le+J*(Z+1),$=d+(le+1)+J*(Z+1),re=d+(le+1)+J*Z;l.push(Te,Le,re),l.push(Le,$,re),R+=6}a.addGroup(p,R,Y),p+=R,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=uo(t[n]);for(const r in i)e[r]=i[r]}return e}function $1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ty(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const uh={clone:uo,merge:cn};var X1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X1,this.fragmentShader=Y1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=$1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _m extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new I,i0=new Be,r0=new Be;class bn extends _m{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Na*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,i0,r0),n.subVectors(r0,i0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,As=1;class Ay extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Ts,As,e,n);r.layers=this.layers,this.add(r);const s=new bn(Ts,As,e,n);s.layers=this.layers,this.add(s);const o=new bn(Ts,As,e,n);o.layers=this.layers,this.add(o);const a=new bn(Ts,As,e,n);a.layers=this.layers,this.add(a);const l=new bn(Ts,As,e,n);l.layers=this.layers,this.add(l);const c=new bn(Ts,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class xm extends Yt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ss,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class by extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new go(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:ki});s.uniforms.tEquirect.value=n;const o=new rn(r,s),a=n.minFilter;return n.minFilter===Ii&&(n.minFilter=nn),new Ay(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const pd=new I,q1=new I,K1=new We;class Li{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pd.subVectors(i,n).cross(q1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||K1.getNormalMatrix(e),r=this.coplanarPoint(pd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Dr,Fl=new I;class ym{constructor(e=new Li,n=new Li,i=new Li,r=new Li,s=new Li,o=new Li){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-f).normalize(),i[1].setComponents(l+s,d+c,m+p,S+f).normalize(),i[2].setComponents(l+o,d+u,m+v,S+_).normalize(),i[3].setComponents(l-o,d-u,m-v,S-_).normalize(),i[4].setComponents(l-a,d-h,m-x,S-g).normalize(),n===gi)i[5].setComponents(l+a,d+h,m+x,S+g).normalize();else if(n===Da)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fl.x=r.normal.x>0?e.max.x:e.min.x,Fl.y=r.normal.y>0?e.max.y:e.min.y,Fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Z1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<h.length;p++){const v=h[d],x=h[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,v=h.length;p<v;p++){const x=h[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ka extends _t{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let f=0;f<u;f++){const _=f*d-o;for(let g=0;g<c;g++){const S=g*h-s;v.push(S,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+c*f,S=_+c*(f+1),L=_+1+c*(f+1),C=_+1+c*f;p.push(g,S,C),p.push(S,L,C)}this.setIndex(p),this.setAttribute("position",new lt(v,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J1=`#ifdef USE_ALPHAHASH
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
#endif`,eE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
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
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
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
#endif`,aE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hE=`#ifdef USE_IRIDESCENCE
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
#endif`,dE=`#ifdef USE_BUMPMAP
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,SE=`#define PI 3.141592653589793
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
} // validated`,ME=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wE=`vec3 transformedNormal = objectNormal;
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
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`
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
}`,PE=`#ifdef USE_ENVMAP
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
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
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
}`,BE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GE=`uniform bool receiveShadow;
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
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qE=`PhysicalMaterial material;
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
#endif`,KE=`struct PhysicalMaterial {
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
}`,ZE=`
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aT=`#if defined( USE_POINTS_UV )
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
#endif`,lT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fT=`#ifdef USE_MORPHTARGETS
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
#endif`,pT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yT=`#ifdef USE_NORMALMAP
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
#endif`,ST=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ET=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FT=`float getShadowMask() {
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
}`,OT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kT=`#ifdef USE_SKINNING
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
#endif`,zT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BT=`#ifdef USE_SKINNING
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
#endif`,HT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jT=`#ifdef USE_TRANSMISSION
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
#endif`,$T=`#ifdef USE_TRANSMISSION
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
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QT=`uniform sampler2D t2D;
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
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`#include <common>
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
}`,rA=`#if DEPTH_PACKING == 3200
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
}`,sA=`#define DISTANCE
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
}`,oA=`#define DISTANCE
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
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
}`,uA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,dA=`uniform vec3 diffuse;
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
}`,fA=`#define LAMBERT
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define MATCAP
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
}`,gA=`#define MATCAP
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
}`,vA=`#define NORMAL
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
}`,_A=`#define NORMAL
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
}`,xA=`#define PHONG
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
}`,yA=`#define PHONG
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
}`,SA=`#define STANDARD
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
}`,MA=`#define STANDARD
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
}`,wA=`#define TOON
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
}`,EA=`#define TOON
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
}`,TA=`uniform float size;
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
}`,AA=`uniform vec3 diffuse;
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
}`,bA=`#include <common>
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
}`,CA=`uniform vec3 color;
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
}`,RA=`uniform float rotation;
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
}`,PA=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Q1,alphahash_pars_fragment:J1,alphamap_fragment:eE,alphamap_pars_fragment:tE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:rE,aomap_pars_fragment:sE,batching_pars_vertex:oE,batching_vertex:aE,begin_vertex:lE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:hE,bumpmap_pars_fragment:dE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:vE,color_pars_fragment:_E,color_pars_vertex:xE,color_vertex:yE,common:SE,cube_uv_reflection_fragment:ME,defaultnormal_vertex:wE,displacementmap_pars_vertex:EE,displacementmap_vertex:TE,emissivemap_fragment:AE,emissivemap_pars_fragment:bE,colorspace_fragment:CE,colorspace_pars_fragment:RE,envmap_fragment:PE,envmap_common_pars_fragment:LE,envmap_pars_fragment:DE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:WE,envmap_vertex:UE,fog_vertex:IE,fog_pars_vertex:FE,fog_fragment:OE,fog_pars_fragment:kE,gradientmap_pars_fragment:zE,lightmap_pars_fragment:BE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:VE,lights_pars_begin:GE,lights_toon_fragment:jE,lights_toon_pars_fragment:$E,lights_phong_fragment:XE,lights_phong_pars_fragment:YE,lights_physical_fragment:qE,lights_physical_pars_fragment:KE,lights_fragment_begin:ZE,lights_fragment_maps:QE,lights_fragment_end:JE,logdepthbuf_fragment:eT,logdepthbuf_pars_fragment:tT,logdepthbuf_pars_vertex:nT,logdepthbuf_vertex:iT,map_fragment:rT,map_pars_fragment:sT,map_particle_fragment:oT,map_particle_pars_fragment:aT,metalnessmap_fragment:lT,metalnessmap_pars_fragment:cT,morphinstance_vertex:uT,morphcolor_vertex:hT,morphnormal_vertex:dT,morphtarget_pars_vertex:fT,morphtarget_vertex:pT,normal_fragment_begin:mT,normal_fragment_maps:gT,normal_pars_fragment:vT,normal_pars_vertex:_T,normal_vertex:xT,normalmap_pars_fragment:yT,clearcoat_normal_fragment_begin:ST,clearcoat_normal_fragment_maps:MT,clearcoat_pars_fragment:wT,iridescence_pars_fragment:ET,opaque_fragment:TT,packing:AT,premultiplied_alpha_fragment:bT,project_vertex:CT,dithering_fragment:RT,dithering_pars_fragment:PT,roughnessmap_fragment:LT,roughnessmap_pars_fragment:DT,shadowmap_pars_fragment:NT,shadowmap_pars_vertex:UT,shadowmap_vertex:IT,shadowmask_pars_fragment:FT,skinbase_vertex:OT,skinning_pars_vertex:kT,skinning_vertex:zT,skinnormal_vertex:BT,specularmap_fragment:HT,specularmap_pars_fragment:VT,tonemapping_fragment:GT,tonemapping_pars_fragment:WT,transmission_fragment:jT,transmission_pars_fragment:$T,uv_pars_fragment:XT,uv_pars_vertex:YT,uv_vertex:qT,worldpos_vertex:KT,background_vert:ZT,background_frag:QT,backgroundCube_vert:JT,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:rA,distanceRGBA_vert:sA,distanceRGBA_frag:oA,equirect_vert:aA,equirect_frag:lA,linedashed_vert:cA,linedashed_frag:uA,meshbasic_vert:hA,meshbasic_frag:dA,meshlambert_vert:fA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:gA,meshnormal_vert:vA,meshnormal_frag:_A,meshphong_vert:xA,meshphong_frag:yA,meshphysical_vert:SA,meshphysical_frag:MA,meshtoon_vert:wA,meshtoon_frag:EA,points_vert:TA,points_frag:AA,shadow_vert:bA,shadow_frag:CA,sprite_vert:RA,sprite_frag:PA},he={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},hn={basic:{uniforms:cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:cn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:cn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:cn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:cn([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:cn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:cn([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:cn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:cn([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:cn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:cn([he.lights,he.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hn.physical={uniforms:cn([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ol={r:0,b:0,g:0},kr=new Si,LA=new mt;function DA(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function x(_){let g=!1;const S=v(_);S===null?f(a,l):S&&S.isColor&&(f(S,1),g=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const S=v(g);S&&(S.isCubeTexture||S.mapping===ja)?(u===void 0&&(u=new rn(new go(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:uo(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),kr.copy(g.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LA.makeRotationFromEuler(kr)),u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,(h!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new rn(new Ka(2,2),new Bt({name:"BackgroundMaterial",uniforms:uo(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,g){_.getRGB(Ol,Ty(t)),i.buffers.color.setClear(Ol.r,Ol.g,Ol.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m}}function NA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,E,z,k,H){let J=!1;const G=h(k,z,E);s!==G&&(s=G,c(s.object)),J=p(y,k,z,H),J&&v(y,k,z,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(y,E,z,k),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function h(y,E,z){const k=z.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let J=H[E.id];J===void 0&&(J={},H[E.id]=J);let G=J[k];return G===void 0&&(G=d(l()),J[k]=G),G}function d(y){const E=[],z=[],k=[];for(let H=0;H<n;H++)E[H]=0,z[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,E,z,k){const H=s.attributes,J=E.attributes;let G=0;const Q=z.getAttributes();for(const R in Q)if(Q[R].location>=0){const Z=H[R];let le=J[R];if(le===void 0&&(R==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),R==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function v(y,E,z,k){const H={},J=E.attributes;let G=0;const Q=z.getAttributes();for(const R in Q)if(Q[R].location>=0){let Z=J[R];Z===void 0&&(R==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),R==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),H[R]=le,G++}s.attributes=H,s.attributesNum=G,s.index=k}function x(){const y=s.newAttributes;for(let E=0,z=y.length;E<z;E++)y[E]=0}function m(y){f(y,0)}function f(y,E){const z=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;z[y]=1,k[y]===0&&(t.enableVertexAttribArray(y),k[y]=1),H[y]!==E&&(t.vertexAttribDivisor(y,E),H[y]=E)}function _(){const y=s.newAttributes,E=s.enabledAttributes;for(let z=0,k=E.length;z<k;z++)E[z]!==y[z]&&(t.disableVertexAttribArray(z),E[z]=0)}function g(y,E,z,k,H,J,G){G===!0?t.vertexAttribIPointer(y,E,z,H,J):t.vertexAttribPointer(y,E,z,k,H,J)}function S(y,E,z,k){x();const H=k.attributes,J=z.getAttributes(),G=E.defaultAttributeValues;for(const Q in J){const R=J[Q];if(R.location>=0){let X=H[Q];if(X===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){const Z=X.normalized,le=X.itemSize,Te=e.get(X);if(Te===void 0)continue;const Le=Te.buffer,$=Te.type,re=Te.bytesPerElement,ue=$===t.INT||$===t.UNSIGNED_INT||X.gpuType===nh;if(X.isInterleavedBufferAttribute){const de=X.data,Re=de.stride,Ue=X.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<R.locationSize;ke++)f(R.location+ke,de.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<R.locationSize;ke++)m(R.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let ke=0;ke<R.locationSize;ke++)g(R.location+ke,le/R.locationSize,$,Z,Re*re,(Ue+le/R.locationSize*ke)*re,ue)}else{if(X.isInstancedBufferAttribute){for(let de=0;de<R.locationSize;de++)f(R.location+de,X.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let de=0;de<R.locationSize;de++)m(R.location+de);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let de=0;de<R.locationSize;de++)g(R.location+de,le/R.locationSize,$,Z,le*re,le/R.locationSize*de*re,ue)}}else if(G!==void 0){const Z=G[Q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(R.location,Z);break;case 3:t.vertexAttrib3fv(R.location,Z);break;case 4:t.vertexAttrib4fv(R.location,Z);break;default:t.vertexAttrib1fv(R.location,Z)}}}}_()}function L(){D();for(const y in i){const E=i[y];for(const z in E){const k=E[z];for(const H in k)u(k[H].object),delete k[H];delete E[z]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const z in E){const k=E[z];for(const H in k)u(k[H].object),delete k[H];delete E[z]}delete i[y.id]}function A(y){for(const E in i){const z=i[E];if(z[y.id]===void 0)continue;const k=z[y.id];for(const H in k)u(k[H].object),delete k[H];delete z[y.id]}}function D(){Y(),o=!0,s!==r&&(s=r,c(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:Y,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function UA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];n.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function IA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==xn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===mo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mi&&!D)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:L,maxSamples:C}}function FA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Li,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,g=_*4;let S=f.clippingState||null;l.value=S,S=u(v,d,g,p);for(let L=0;L!==g;++L)S[L]=n[L];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,S=p;g!==x;++g,S+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function OA(t){let e=new WeakMap;function n(o,a){return a===Qc?o.mapping=ss:a===Jc&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qc||a===Jc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new by(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ry extends _m{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=4,s0=[.125,.215,.35,.446,.526,.582],Wr=20,md=new Ry,o0=new Ve;let gd=null,vd=0,_d=0,xd=!1;const Gr=(1+Math.sqrt(5))/2,bs=1/Gr,a0=[new I(-Gr,bs,0),new I(Gr,bs,0),new I(-bs,0,Gr),new I(bs,0,Gr),new I(0,Gr,-bs),new I(0,Gr,bs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ff{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,_d),this._renderer.xr.enabled=xd,e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:mo,format:xn,colorSpace:Yi,depthBuffer:!1},r=l0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kA(s)),this._blurMaterial=zA(s,e,n)}return r}_compileMaterial(e){const n=new rn(this._lodPlanes[0],e);this._renderer.compile(n,md)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(o0),u.toneMapping=zi,u.autoClear=!1;const p=new mm({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),v=new rn(new go,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(o0),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const g=this._cubeSize;kl(r,_*g,f>2?g:0,g,g),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;kl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,md)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=a0[(r-s-1)%a0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Wr;m>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);const f=[];let _=0;for(let A=0;A<Wr;++A){const D=A/x,Y=Math.exp(-D*D/2);f.push(Y),A===0?_+=Y:A<m&&(_+=2*Y)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const S=this._sizeLods[r],L=3*S*(r>g-Gs?r-g+Gs:0),C=4*(this._cubeSize-S);kl(n,L,C,3*S,2*S),l.setRenderTarget(n),l.render(h,md)}}function kA(t){const e=[],n=[],i=[];let r=t;const s=t-Gs+1+s0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Gs?l=s0[o-t+Gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,m=2,f=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),S=new Float32Array(f*v*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,D=C>2?0:-1,Y=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(Y,x*v*C),g.set(d,m*v*C);const y=[C,C,C,C,C,C];S.set(y,f*v*C)}const L=new _t;L.setAttribute("position",new Lt(_,x)),L.setAttribute("uv",new Lt(g,m)),L.setAttribute("faceIndex",new Lt(S,f)),e.push(L),r>Gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function l0(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zA(t,e,n){const i=new Float32Array(Wr),r=new I(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sm(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function c0(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sm(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function u0(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Sm(){return`

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
	`}function BA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qc||l===Jc,u=l===ss||l===os;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Ff(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Ff(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function HA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&pc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VA(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,S=_.length;g<S;g+=3){const L=_[g+0],C=_[g+1],A=_[g+2];d.push(L,C,C,A,A,L)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const L=g+0,C=g+1,A=g+2;d.push(L,C,C,A,A,L)}}else return;const m=new(xy(d)?vm:gm)(d,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function GA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function u(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];n.update(m,i,1)}function h(d,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let f=0;for(let _=0;_<v;_++)f+=p[_];for(let _=0;_<x.length;_++)n.update(f,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function WA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jA(t,e,n){const i=new WeakMap,r=new je;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*h),D=new ch(A,L,C,h);D.type=mi,D.needsUpdate=!0;const Y=S*4;for(let E=0;E<h;E++){const z=f[E],k=_[E],H=g[E],J=L*C*4*E;for(let G=0;G<z.count;G++){const Q=G*Y;v===!0&&(r.fromBufferAttribute(z,G),A[J+Q+0]=r.x,A[J+Q+1]=r.y,A[J+Q+2]=r.z,A[J+Q+3]=0),x===!0&&(r.fromBufferAttribute(k,G),A[J+Q+4]=r.x,A[J+Q+5]=r.y,A[J+Q+6]=r.z,A[J+Q+7]=0),m===!0&&(r.fromBufferAttribute(H,G),A[J+Q+8]=r.x,A[J+Q+9]=r.y,A[J+Q+10]=r.z,A[J+Q+11]=H.itemSize===4?r.w:1)}}d={count:h,texture:D,size:new Be(L,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function $A(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Mm extends Yt{constructor(e,n,i,r,s,o,a,l,c,u=Zr){if(u!==Zr&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zr&&(i=Tr),i===void 0&&u===ls&&(i=as),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Py=new Yt,h0=new Mm(1,1),Ly=new ch,Dy=new wy,Ny=new xm,d0=[],f0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=d0[r];if(s===void 0&&(s=new Float32Array(r),d0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hh(t,e){let n=f0[e];n===void 0&&(n=new Int32Array(e),f0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function XA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function ZA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;g0.set(i),t.uniformMatrix2fv(this.addr,!1,g0),Ut(n,i)}}function QA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;m0.set(i),t.uniformMatrix3fv(this.addr,!1,m0),Ut(n,i)}}function JA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;p0.set(i),t.uniformMatrix4fv(this.addr,!1,p0),Ut(n,i)}}function e2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function r2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function l2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(h0.compareFunction=hm,s=h0):s=Py,n.setTexture2D(e||s,r)}function c2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dy,r)}function u2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ny,r)}function h2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ly,r)}function d2(t){switch(t){case 5126:return XA;case 35664:return YA;case 35665:return qA;case 35666:return KA;case 35674:return ZA;case 35675:return QA;case 35676:return JA;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return r2;case 36294:return s2;case 36295:return o2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return h2}}function f2(t,e){t.uniform1fv(this.addr,e)}function p2(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function m2(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function g2(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function v2(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _2(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function x2(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function y2(t,e){t.uniform1iv(this.addr,e)}function S2(t,e){t.uniform2iv(this.addr,e)}function M2(t,e){t.uniform3iv(this.addr,e)}function w2(t,e){t.uniform4iv(this.addr,e)}function E2(t,e){t.uniform1uiv(this.addr,e)}function T2(t,e){t.uniform2uiv(this.addr,e)}function A2(t,e){t.uniform3uiv(this.addr,e)}function b2(t,e){t.uniform4uiv(this.addr,e)}function C2(t,e,n){const i=this.cache,r=e.length,s=hh(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Py,s[o])}function R2(t,e,n){const i=this.cache,r=e.length,s=hh(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Dy,s[o])}function P2(t,e,n){const i=this.cache,r=e.length,s=hh(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ny,s[o])}function L2(t,e,n){const i=this.cache,r=e.length,s=hh(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ly,s[o])}function D2(t){switch(t){case 5126:return f2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return v2;case 35675:return _2;case 35676:return x2;case 5124:case 35670:return y2;case 35667:case 35671:return S2;case 35668:case 35672:return M2;case 35669:case 35673:return w2;case 5125:return E2;case 36294:return T2;case 36295:return A2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return L2}}class N2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=d2(n.type)}}class U2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D2(n.type)}}class I2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function v0(t,e){t.seq.push(e),t.map[e.id]=e}function F2(t,e,n){const i=t.name,r=i.length;for(yd.lastIndex=0;;){const s=yd.exec(i),o=yd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){v0(n,c===void 0?new N2(a,t,e):new U2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new I2(a),v0(n,h)),n=h}}}class mc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);F2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function _0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const O2=37297;let k2=0;function z2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function B2(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===La&&n===Pa?i="LinearDisplayP3ToLinearSRGB":e===Pa&&n===La&&(i="LinearSRGBToLinearDisplayP3"),t){case Yi:case Ya:return[i,"LinearTransferOETF"];case ni:case lh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function x0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+z2(t.getShaderSource(e),o)}else return r}function H2(t,e){const n=B2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function V2(t,e){let n;switch(e){case ey:n="Linear";break;case ty:n="Reinhard";break;case ny:n="Cineon";break;case iy:n="ACESFilmic";break;case sy:n="AgX";break;case oy:n="Neutral";break;case ry:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zl=new I;function G2(){tt.getLuminanceCoefficients(zl);const t=zl.x.toFixed(4),e=zl.y.toFixed(4),n=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function j2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wo(t){return t!==""}function y0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function S0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(t){return t.replace(X2,q2)}const Y2=new Map;function q2(t,e){let n=Ge[e];if(n===void 0){const i=Y2.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Of(n)}const K2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(t){return t.replace(K2,Z2)}function Z2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function w0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Q2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===em?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function J2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function tb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tm:e="ENVMAP_BLENDING_MULTIPLY";break;case Qx:e="ENVMAP_BLENDING_MIX";break;case Jx:e="ENVMAP_BLENDING_ADD";break}return e}function nb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ib(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Q2(n),c=J2(n),u=eb(n),h=tb(n),d=nb(n),p=W2(n),v=j2(s),x=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Wo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Wo).join(`
`),f.length>0&&(f+=`
`)):(m=[w0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),f=[w0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==zi?V2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,H2("linearToOutputTexel",n.outputColorSpace),G2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Of(o),o=y0(o,n),o=S0(o,n),a=Of(a),a=y0(a,n),a=S0(a,n),o=M0(o),a=M0(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+m+o,S=_+f+a,L=_0(r,r.VERTEX_SHADER,g),C=_0(r,r.FRAGMENT_SHADER,S);r.attachShader(x,L),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(E){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(L).trim(),H=r.getShaderInfoLog(C).trim();let J=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,L,C);else{const Q=x0(r,L,"vertex"),R=x0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+Q+`
`+R)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||H==="")&&(G=!1);G&&(E.diagnostics={runnable:J,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:f}})}r.deleteShader(L),r.deleteShader(C),D=new mc(r,x),Y=$2(r,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let Y;this.getAttributes=function(){return Y===void 0&&A(this),Y};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,O2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=k2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=C,this}let rb=0;class sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ob(e),n.set(e,i)),i}}class ob{constructor(e){this.id=rb++,this.code=e,this.usedTimes=0}}function ab(t,e,n,i,r,s,o){const a=new pm,l=new sb,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,E,z,k,H){const J=k.fog,G=H.geometry,Q=y.isMeshStandardMaterial?k.environment:null,R=(y.isMeshStandardMaterial?n:e).get(y.envMap||Q),X=R&&R.mapping===ja?R.image.height:null,Z=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Te=le!==void 0?le.length:0;let Le=0;G.morphAttributes.position!==void 0&&(Le=1),G.morphAttributes.normal!==void 0&&(Le=2),G.morphAttributes.color!==void 0&&(Le=3);let $,re,ue,de;if(Z){const It=hn[Z];$=It.vertexShader,re=It.fragmentShader}else $=y.vertexShader,re=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const Re=t.getRenderTarget(),Ue=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,$e=!!y.map,ze=!!y.matcap,N=!!R,At=!!y.aoMap,ye=!!y.lightMap,He=!!y.bumpMap,Pe=!!y.normalMap,Ye=!!y.displacementMap,Oe=!!y.emissiveMap,b=!!y.metalnessMap,w=!!y.roughnessMap,B=y.anisotropy>0,ne=y.clearcoat>0,se=y.dispersion>0,te=y.iridescence>0,Ae=y.sheen>0,fe=y.transmission>0,ge=B&&!!y.anisotropyMap,Qe=ne&&!!y.clearcoatMap,oe=ne&&!!y.clearcoatNormalMap,Me=ne&&!!y.clearcoatRoughnessMap,De=te&&!!y.iridescenceMap,Fe=te&&!!y.iridescenceThicknessMap,xe=Ae&&!!y.sheenColorMap,Ke=Ae&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,nt=!!y.specularColorMap,U=!!y.specularIntensityMap,pe=fe&&!!y.transmissionMap,q=fe&&!!y.thicknessMap,ee=!!y.gradientMap,me=!!y.alphaMap,_e=y.alphaTest>0,Xe=!!y.alphaHash,St=!!y.extensions;let Mt=zi;y.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Mt=t.toneMapping);const Je={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:re,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Re===null?t.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Yi,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:ze,envMap:N,envMapMode:N&&R.mapping,envMapCubeUVHeight:X,aoMap:At,lightMap:ye,bumpMap:He,normalMap:Pe,displacementMap:p&&Ye,emissiveMap:Oe,normalMapObjectSpace:Pe&&y.normalMapType===hy,normalMapTangentSpace:Pe&&y.normalMapType===uy,metalnessMap:b,roughnessMap:w,anisotropy:B,anisotropyMap:ge,clearcoat:ne,clearcoatMap:Qe,clearcoatNormalMap:oe,clearcoatRoughnessMap:Me,dispersion:se,iridescence:te,iridescenceMap:De,iridescenceThicknessMap:Fe,sheen:Ae,sheenColorMap:xe,sheenRoughnessMap:Ke,specularMap:Ie,specularColorMap:nt,specularIntensityMap:U,transmission:fe,transmissionMap:pe,thicknessMap:q,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Kr&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:_e,alphaHash:Xe,combine:y.combine,mapUv:$e&&m(y.map.channel),aoMapUv:At&&m(y.aoMap.channel),lightMapUv:ye&&m(y.lightMap.channel),bumpMapUv:He&&m(y.bumpMap.channel),normalMapUv:Pe&&m(y.normalMap.channel),displacementMapUv:Ye&&m(y.displacementMap.channel),emissiveMapUv:Oe&&m(y.emissiveMap.channel),metalnessMapUv:b&&m(y.metalnessMap.channel),roughnessMapUv:w&&m(y.roughnessMap.channel),anisotropyMapUv:ge&&m(y.anisotropyMap.channel),clearcoatMapUv:Qe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&m(y.sheenRoughnessMap.channel),specularMapUv:Ie&&m(y.specularMap.channel),specularColorMapUv:nt&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:pe&&m(y.transmissionMap.channel),thicknessMapUv:q&&m(y.thicknessMap.channel),alphaMapUv:me&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Pe||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&($e||me),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:St&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&y.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)E.push(z),E.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(g(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function L(y){const E=x[y.type];let z;if(E){const k=hn[E];z=uh.clone(k.uniforms)}else z=y.uniforms;return z}function C(y,E){let z;for(let k=0,H=u.length;k<H;k++){const J=u[k];if(J.cacheKey===E){z=J,++z.usedTimes;break}}return z===void 0&&(z=new ib(t,E,y,s),u.push(z)),z}function A(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function D(y){l.remove(y)}function Y(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:L,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:u,dispose:Y}}function lb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function cb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function E0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function T0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||cb),i.length>1&&i.sort(d||E0),r.length>1&&r.sort(d||E0)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ub(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new T0,t.set(i,[o])):r>=s.length?(o=new T0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ve};break;case"SpotLight":n={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function db(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fb=0;function pb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mb(t){const e=new hb,n=db(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new mt,o=new mt;function a(c){let u=0,h=0,d=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,v=0,x=0,m=0,f=0,_=0,g=0,S=0,L=0,C=0,A=0;c.sort(pb);for(let Y=0,y=c.length;Y<y;Y++){const E=c[Y],z=E.color,k=E.intensity,H=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=z.r*k,h+=z.g*k,d+=z.b*k;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],k);A++}else if(E.isDirectionalLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,R=n.get(E);R.shadowIntensity=Q.intensity,R.shadowBias=Q.bias,R.shadowNormalBias=Q.normalBias,R.shadowRadius=Q.radius,R.shadowMapSize=Q.mapSize,i.directionalShadow[p]=R,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=E.shadow.matrix,_++}i.directional[p]=G,p++}else if(E.isSpotLight){const G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(z).multiplyScalar(k),G.distance=H,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[x]=G;const Q=E.shadow;if(E.map&&(i.spotLightMap[L]=E.map,L++,Q.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[x]=Q.matrix,E.castShadow){const R=n.get(E);R.shadowIntensity=Q.intensity,R.shadowBias=Q.bias,R.shadowNormalBias=Q.normalBias,R.shadowRadius=Q.radius,R.shadowMapSize=Q.mapSize,i.spotShadow[x]=R,i.spotShadowMap[x]=J,S++}x++}else if(E.isRectAreaLight){const G=e.get(E);G.color.copy(z).multiplyScalar(k),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const Q=E.shadow,R=n.get(E);R.shadowIntensity=Q.intensity,R.shadowBias=Q.bias,R.shadowNormalBias=Q.normalBias,R.shadowRadius=Q.radius,R.shadowMapSize=Q.mapSize,R.shadowCameraNear=Q.camera.near,R.shadowCameraFar=Q.camera.far,i.pointShadow[v]=R,i.pointShadowMap[v]=J,i.pointShadowMatrix[v]=E.shadow.matrix,g++}i.point[v]=G,v++}else if(E.isHemisphereLight){const G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(k),G.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[f]=G,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==_||D.numPointShadows!==g||D.numSpotShadows!==S||D.numSpotMaps!==L||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,D.directionalLength=p,D.pointLength=v,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=_,D.numPointShadows=g,D.numSpotShadows=S,D.numSpotMaps=L,D.numLightProbes=A,i.version=fb++)}function l(c,u){let h=0,d=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const g=c[f];if(g.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function A0(t){const e=new mb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function gb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new A0(t),e.set(r,[a])):s>=o.length?(a=new A0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Uy extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iy extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
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
}`;function xb(t,e,n){let i=new ym;const r=new Be,s=new Be,o=new je,a=new Uy({depthPacking:cy}),l=new Iy,c={},u=n.maxTextureSize,h={[$i]:fn,[fn]:$i,[Cn]:Cn},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:vb,fragmentShader:_b}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new _t;v.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=em;let f=this.type;this.render=function(C,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const Y=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),z=t.state;z.setBlending(ki),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=f!==di&&this.type===di,H=f===di&&this.type!==di;for(let J=0,G=C.length;J<G;J++){const Q=C[J],R=Q.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const X=R.getFrameExtents();if(r.multiply(X),s.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,R.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,R.mapSize.y=s.y)),R.map===null||k===!0||H===!0){const le=this.type!==di?{minFilter:kt,magFilter:kt}:{};R.map!==null&&R.map.dispose(),R.map=new Ar(r.x,r.y,le),R.map.texture.name=Q.name+".shadowMap",R.camera.updateProjectionMatrix()}t.setRenderTarget(R.map),t.clear();const Z=R.getViewportCount();for(let le=0;le<Z;le++){const Te=R.getViewport(le);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),z.viewport(o),R.updateMatrices(Q,le),i=R.getFrustum(),S(A,D,R.camera,Q,this.type)}R.isPointLightShadow!==!0&&this.type===di&&_(R,D),R.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(Y,y,E)};function _(C,A){const D=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ar(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,D,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,D,p,x,null)}function g(C,A,D,Y){let y=null;const E=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=D.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,k=A.uuid;let H=c[z];H===void 0&&(H={},c[z]=H);let J=H[k];J===void 0&&(J=y.clone(),H[k]=J,A.addEventListener("dispose",L)),y=J}if(y.visible=A.visible,y.wireframe=A.wireframe,Y===di?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=t.properties.get(y);z.light=D}return y}function S(C,A,D,Y,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===di)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const k=e.update(C),H=C.material;if(Array.isArray(H)){const J=k.groups;for(let G=0,Q=J.length;G<Q;G++){const R=J[G],X=H[R.materialIndex];if(X&&X.visible){const Z=g(C,X,Y,y);C.onBeforeShadow(t,C,A,D,k,Z,R),t.renderBufferDirect(D,null,k,Z,C,R),C.onAfterShadow(t,C,A,D,k,Z,R)}}}else if(H.visible){const J=g(C,H,Y,y);C.onBeforeShadow(t,C,A,D,k,J,null),t.renderBufferDirect(D,null,k,J,C,null),C.onAfterShadow(t,C,A,D,k,J,null)}}const z=C.children;for(let k=0,H=z.length;k<H;k++)S(z[k],A,D,Y,y)}function L(C){C.target.removeEventListener("dispose",L);for(const D in c){const Y=c[D],y=C.target.uuid;y in Y&&(Y[y].dispose(),delete Y[y])}}}const yb={[jc]:$c,[Xc]:Kc,[Yc]:Zc,[rs]:qc,[$c]:jc,[Kc]:Xc,[Zc]:Yc,[qc]:rs};function Sb(t){function e(){let U=!1;const pe=new je;let q=null;const ee=new je(0,0,0,0);return{setMask:function(me){q!==me&&!U&&(t.colorMask(me,me,me,me),q=me)},setLocked:function(me){U=me},setClear:function(me,_e,Xe,St,Mt){Mt===!0&&(me*=St,_e*=St,Xe*=St),pe.set(me,_e,Xe,St),ee.equals(pe)===!1&&(t.clearColor(me,_e,Xe,St),ee.copy(pe))},reset:function(){U=!1,q=null,ee.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,q=null,ee=null,me=null;return{setReversed:function(_e){pe=_e},setTest:function(_e){_e?ue(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(_e){q!==_e&&!U&&(t.depthMask(_e),q=_e)},setFunc:function(_e){if(pe&&(_e=yb[_e]),ee!==_e){switch(_e){case jc:t.depthFunc(t.NEVER);break;case $c:t.depthFunc(t.ALWAYS);break;case Xc:t.depthFunc(t.LESS);break;case rs:t.depthFunc(t.LEQUAL);break;case Yc:t.depthFunc(t.EQUAL);break;case qc:t.depthFunc(t.GEQUAL);break;case Kc:t.depthFunc(t.GREATER);break;case Zc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=_e}},setLocked:function(_e){U=_e},setClear:function(_e){me!==_e&&(t.clearDepth(_e),me=_e)},reset:function(){U=!1,q=null,ee=null,me=null}}}function i(){let U=!1,pe=null,q=null,ee=null,me=null,_e=null,Xe=null,St=null,Mt=null;return{setTest:function(Je){U||(Je?ue(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(Je){pe!==Je&&!U&&(t.stencilMask(Je),pe=Je)},setFunc:function(Je,It,an){(q!==Je||ee!==It||me!==an)&&(t.stencilFunc(Je,It,an),q=Je,ee=It,me=an)},setOp:function(Je,It,an){(_e!==Je||Xe!==It||St!==an)&&(t.stencilOp(Je,It,an),_e=Je,Xe=It,St=an)},setLocked:function(Je){U=Je},setClear:function(Je){Mt!==Je&&(t.clearStencil(Je),Mt=Je)},reset:function(){U=!1,pe=null,q=null,ee=null,me=null,_e=null,Xe=null,St=null,Mt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,f=null,_=null,g=null,S=null,L=null,C=new Ve(0,0,0),A=0,D=!1,Y=null,y=null,E=null,z=null,k=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,G=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=G>=2);let R=null,X={};const Z=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),Te=new je().fromArray(Z),Le=new je().fromArray(le);function $(U,pe,q,ee){const me=new Uint8Array(4),_e=t.createTexture();t.bindTexture(U,_e),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<q;Xe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(pe+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return _e}const re={};re[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(rs),ye(!1),He(Rf),ue(t.CULL_FACE),N(ki);function ue(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function de(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Re(U,pe){return u[U]!==pe?(t.bindFramebuffer(U,pe),u[U]=pe,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=pe),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ue(U,pe){let q=d,ee=!1;if(U){q=h.get(pe),q===void 0&&(q=[],h.set(pe,q));const me=U.textures;if(q.length!==me.length||q[0]!==t.COLOR_ATTACHMENT0){for(let _e=0,Xe=me.length;_e<Xe;_e++)q[_e]=t.COLOR_ATTACHMENT0+_e;q.length=me.length,ee=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,ee=!0);ee&&t.drawBuffers(q)}function ke(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const $e={[cr]:t.FUNC_ADD,[Ix]:t.FUNC_SUBTRACT,[Fx]:t.FUNC_REVERSE_SUBTRACT};$e[Ox]=t.MIN,$e[kx]=t.MAX;const ze={[zx]:t.ZERO,[Bx]:t.ONE,[Hx]:t.SRC_COLOR,[Gc]:t.SRC_ALPHA,[Xx]:t.SRC_ALPHA_SATURATE,[jx]:t.DST_COLOR,[Gx]:t.DST_ALPHA,[Vx]:t.ONE_MINUS_SRC_COLOR,[Wc]:t.ONE_MINUS_SRC_ALPHA,[$x]:t.ONE_MINUS_DST_COLOR,[Wx]:t.ONE_MINUS_DST_ALPHA,[Yx]:t.CONSTANT_COLOR,[qx]:t.ONE_MINUS_CONSTANT_COLOR,[Kx]:t.CONSTANT_ALPHA,[Zx]:t.ONE_MINUS_CONSTANT_ALPHA};function N(U,pe,q,ee,me,_e,Xe,St,Mt,Je){if(U===ki){v===!0&&(de(t.BLEND),v=!1);return}if(v===!1&&(ue(t.BLEND),v=!0),U!==Ux){if(U!==x||Je!==D){if((m!==cr||g!==cr)&&(t.blendEquation(t.FUNC_ADD),m=cr,g=cr),Je)switch(U){case Kr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pf:t.blendFunc(t.ONE,t.ONE);break;case Lf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Df:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Kr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Df:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,_=null,S=null,L=null,C.set(0,0,0),A=0,x=U,D=Je}return}me=me||pe,_e=_e||q,Xe=Xe||ee,(pe!==m||me!==g)&&(t.blendEquationSeparate($e[pe],$e[me]),m=pe,g=me),(q!==f||ee!==_||_e!==S||Xe!==L)&&(t.blendFuncSeparate(ze[q],ze[ee],ze[_e],ze[Xe]),f=q,_=ee,S=_e,L=Xe),(St.equals(C)===!1||Mt!==A)&&(t.blendColor(St.r,St.g,St.b,Mt),C.copy(St),A=Mt),x=U,D=!1}function At(U,pe){U.side===Cn?de(t.CULL_FACE):ue(t.CULL_FACE);let q=U.side===fn;pe&&(q=!q),ye(q),U.blending===Kr&&U.transparent===!1?N(ki):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ee=U.stencilWrite;o.setTest(ee),ee&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function ye(U){Y!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),Y=U)}function He(U){U!==Lx?(ue(t.CULL_FACE),U!==y&&(U===Rf?t.cullFace(t.BACK):U===Dx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),y=U}function Pe(U){U!==E&&(J&&t.lineWidth(U),E=U)}function Ye(U,pe,q){U?(ue(t.POLYGON_OFFSET_FILL),(z!==pe||k!==q)&&(t.polygonOffset(pe,q),z=pe,k=q)):de(t.POLYGON_OFFSET_FILL)}function Oe(U){U?ue(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function b(U){U===void 0&&(U=t.TEXTURE0+H-1),R!==U&&(t.activeTexture(U),R=U)}function w(U,pe,q){q===void 0&&(R===null?q=t.TEXTURE0+H-1:q=R);let ee=X[q];ee===void 0&&(ee={type:void 0,texture:void 0},X[q]=ee),(ee.type!==U||ee.texture!==pe)&&(R!==q&&(t.activeTexture(q),R=q),t.bindTexture(U,pe||re[U]),ee.type=U,ee.texture=pe)}function B(){const U=X[R];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(U){Te.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Te.copy(U))}function xe(U){Le.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Le.copy(U))}function Ke(U,pe){let q=l.get(pe);q===void 0&&(q=new WeakMap,l.set(pe,q));let ee=q.get(U);ee===void 0&&(ee=t.getUniformBlockIndex(pe,U.name),q.set(U,ee))}function Ie(U,pe){const ee=l.get(pe).get(U);a.get(pe)!==ee&&(t.uniformBlockBinding(pe,ee,U.__bindingPointIndex),a.set(pe,ee))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},R=null,X={},u={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,f=null,_=null,g=null,S=null,L=null,C=new Ve(0,0,0),A=0,D=!1,Y=null,y=null,E=null,z=null,k=null,Te.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:de,bindFramebuffer:Re,drawBuffers:Ue,useProgram:ke,setBlending:N,setMaterial:At,setFlipSided:ye,setCullFace:He,setLineWidth:Pe,setPolygonOffset:Ye,setScissorTest:Oe,activeTexture:b,bindTexture:w,unbindTexture:B,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:Me,texImage3D:De,updateUBOMapping:Ke,uniformBlockBinding:Ie,texStorage2D:Qe,texStorage3D:oe,texSubImage2D:te,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ge,scissor:Fe,viewport:xe,reset:nt}}function b0(t,e,n,i){const r=Mb(i);switch(n){case om:return t*e;case lm:return t*e;case cm:return t*e*2;case $a:return t*e/r.components*r.byteLength;case sh:return t*e/r.components*r.byteLength;case Xa:return t*e*2/r.components*r.byteLength;case oh:return t*e*2/r.components*r.byteLength;case am:return t*e*3/r.components*r.byteLength;case xn:return t*e*4/r.components*r.byteLength;case ah:return t*e*4/r.components*r.byteLength;case ta:case na:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ia:case ra:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case iu:case su:return Math.max(t,16)*Math.max(e,8)/4;case nu:case ru:return Math.max(t,8)*Math.max(e,8)/2;case ou:case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case du:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _u:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case sa:case wu:case Eu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case um:case Tu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Au:case bu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Mb(t){switch(t){case yi:case im:return{byteLength:1,components:1};case lo:case rm:case mo:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case Tr:case nh:case mi:return{byteLength:4,components:1};case sm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function wb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,w){return p?new OffscreenCanvas(b,w):Ua("canvas")}function x(b,w,B){let ne=1;const se=Oe(b);if((se.width>B||se.height>B)&&(ne=B/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const te=Math.floor(ne*se.width),Ae=Math.floor(ne*se.height);h===void 0&&(h=v(te,Ae));const fe=w?v(te,Ae):h;return fe.width=te,fe.height=Ae,fe.getContext("2d").drawImage(b,0,0,te,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Ae+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==kt&&b.minFilter!==nn}function f(b){t.generateMipmap(b)}function _(b,w,B,ne,se=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=w;if(w===t.RED&&(B===t.FLOAT&&(te=t.R32F),B===t.HALF_FLOAT&&(te=t.R16F),B===t.UNSIGNED_BYTE&&(te=t.R8)),w===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(te=t.R8UI),B===t.UNSIGNED_SHORT&&(te=t.R16UI),B===t.UNSIGNED_INT&&(te=t.R32UI),B===t.BYTE&&(te=t.R8I),B===t.SHORT&&(te=t.R16I),B===t.INT&&(te=t.R32I)),w===t.RG&&(B===t.FLOAT&&(te=t.RG32F),B===t.HALF_FLOAT&&(te=t.RG16F),B===t.UNSIGNED_BYTE&&(te=t.RG8)),w===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(te=t.RG8UI),B===t.UNSIGNED_SHORT&&(te=t.RG16UI),B===t.UNSIGNED_INT&&(te=t.RG32UI),B===t.BYTE&&(te=t.RG8I),B===t.SHORT&&(te=t.RG16I),B===t.INT&&(te=t.RG32I)),w===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(te=t.RGB8UI),B===t.UNSIGNED_SHORT&&(te=t.RGB16UI),B===t.UNSIGNED_INT&&(te=t.RGB32UI),B===t.BYTE&&(te=t.RGB8I),B===t.SHORT&&(te=t.RGB16I),B===t.INT&&(te=t.RGB32I)),w===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),B===t.UNSIGNED_INT&&(te=t.RGBA32UI),B===t.BYTE&&(te=t.RGBA8I),B===t.SHORT&&(te=t.RGBA16I),B===t.INT&&(te=t.RGBA32I)),w===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),w===t.RGBA){const Ae=se?Ra:tt.getTransfer(ne);B===t.FLOAT&&(te=t.RGBA32F),B===t.HALF_FLOAT&&(te=t.RGBA16F),B===t.UNSIGNED_BYTE&&(te=Ae===ct?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function g(b,w){let B;return b?w===null||w===Tr||w===as?B=t.DEPTH24_STENCIL8:w===mi?B=t.DEPTH32F_STENCIL8:w===lo&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Tr||w===as?B=t.DEPTH_COMPONENT24:w===mi?B=t.DEPTH_COMPONENT32F:w===lo&&(B=t.DEPTH_COMPONENT16),B}function S(b,w){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==kt&&b.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function L(b){const w=b.target;w.removeEventListener("dispose",L),A(w),w.isVideoTexture&&u.delete(w)}function C(b){const w=b.target;w.removeEventListener("dispose",C),Y(w)}function A(b){const w=i.get(b);if(w.__webglInit===void 0)return;const B=b.source,ne=d.get(B);if(ne){const se=ne[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(b),Object.keys(ne).length===0&&d.delete(B)}i.remove(b)}function D(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const B=b.source,ne=d.get(B);delete ne[w.__cacheKey],o.memory.textures--}function Y(b){const w=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let se=0;se<w.__webglFramebuffer[ne].length;se++)t.deleteFramebuffer(w.__webglFramebuffer[ne][se]);else t.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)t.deleteFramebuffer(w.__webglFramebuffer[ne]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=b.textures;for(let ne=0,se=B.length;ne<se;ne++){const te=i.get(B[ne]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(B[ne])}i.remove(b)}let y=0;function E(){y=0}function z(){const b=y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),y+=1,b}function k(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function H(b,w){const B=i.get(b);if(b.isVideoTexture&&Pe(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(B,b,w);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+w)}function J(b,w){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Le(B,b,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+w)}function G(b,w){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Le(B,b,w);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+w)}function Q(b,w){const B=i.get(b);if(b.version>0&&B.__version!==b.version){$(B,b,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+w)}const R={[eu]:t.REPEAT,[fr]:t.CLAMP_TO_EDGE,[tu]:t.MIRRORED_REPEAT},X={[kt]:t.NEAREST,[ay]:t.NEAREST_MIPMAP_NEAREST,[Go]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[fc]:t.LINEAR_MIPMAP_NEAREST,[Ii]:t.LINEAR_MIPMAP_LINEAR},Z={[dy]:t.NEVER,[_y]:t.ALWAYS,[fy]:t.LESS,[hm]:t.LEQUAL,[py]:t.EQUAL,[vy]:t.GEQUAL,[my]:t.GREATER,[gy]:t.NOTEQUAL};function le(b,w){if(w.type===mi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===nn||w.magFilter===fc||w.magFilter===Go||w.magFilter===Ii||w.minFilter===nn||w.minFilter===fc||w.minFilter===Go||w.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,R[w.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,R[w.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,R[w.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,X[w.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,X[w.minFilter]),w.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kt||w.minFilter!==Go&&w.minFilter!==Ii||w.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Te(b,w){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",L));const ne=w.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const te=k(w);if(te!==b.__cacheKey){se[te]===void 0&&(se[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),se[te].usedTimes++;const Ae=se[b.__cacheKey];Ae!==void 0&&(se[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&D(w)),b.__cacheKey=te,b.__webglTexture=se[te].texture}return B}function Le(b,w,B){let ne=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=t.TEXTURE_3D);const se=Te(b,w),te=w.source;n.bindTexture(ne,b.__webglTexture,t.TEXTURE0+B);const Ae=i.get(te);if(te.version!==Ae.__version||se===!0){n.activeTexture(t.TEXTURE0+B);const fe=tt.getPrimaries(tt.workingColorSpace),ge=w.colorSpace===Bn?null:tt.getPrimaries(w.colorSpace),Qe=w.colorSpace===Bn||fe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let oe=x(w.image,!1,r.maxTextureSize);oe=Ye(w,oe);const Me=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let Fe=_(w.internalFormat,Me,De,w.colorSpace,w.isVideoTexture);le(ne,w);let xe;const Ke=w.mipmaps,Ie=w.isVideoTexture!==!0,nt=Ae.__version===void 0||se===!0,U=te.dataReady,pe=S(w,oe);if(w.isDepthTexture)Fe=g(w.format===ls,w.type),nt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Fe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,Me,De,null));else if(w.isDataTexture)if(Ke.length>0){Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,pe,Fe,Ke[0].width,Ke[0].height);for(let q=0,ee=Ke.length;q<ee;q++)xe=Ke[q],Ie?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,xe.width,xe.height,Me,De,xe.data):n.texImage2D(t.TEXTURE_2D,q,Fe,xe.width,xe.height,0,Me,De,xe.data);w.generateMipmaps=!1}else Ie?(nt&&n.texStorage2D(t.TEXTURE_2D,pe,Fe,oe.width,oe.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Me,De,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,Me,De,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ie&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Fe,Ke[0].width,Ke[0].height,oe.depth);for(let q=0,ee=Ke.length;q<ee;q++)if(xe=Ke[q],w.format!==xn)if(Me!==null)if(Ie){if(U)if(w.layerUpdates.size>0){const me=b0(xe.width,xe.height,w.format,w.type);for(const _e of w.layerUpdates){const Xe=xe.data.subarray(_e*me/xe.data.BYTES_PER_ELEMENT,(_e+1)*me/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,_e,xe.width,xe.height,1,Me,Xe,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,oe.depth,Me,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,Fe,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,oe.depth,Me,De,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,Fe,xe.width,xe.height,oe.depth,0,Me,De,xe.data)}else{Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,pe,Fe,Ke[0].width,Ke[0].height);for(let q=0,ee=Ke.length;q<ee;q++)xe=Ke[q],w.format!==xn?Me!==null?Ie?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,xe.width,xe.height,Me,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,q,Fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,xe.width,xe.height,Me,De,xe.data):n.texImage2D(t.TEXTURE_2D,q,Fe,xe.width,xe.height,0,Me,De,xe.data)}else if(w.isDataArrayTexture)if(Ie){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Fe,oe.width,oe.height,oe.depth),U)if(w.layerUpdates.size>0){const q=b0(oe.width,oe.height,w.format,w.type);for(const ee of w.layerUpdates){const me=oe.data.subarray(ee*q/oe.data.BYTES_PER_ELEMENT,(ee+1)*q/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,Me,De,me)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,De,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,Me,De,oe.data);else if(w.isData3DTexture)Ie?(nt&&n.texStorage3D(t.TEXTURE_3D,pe,Fe,oe.width,oe.height,oe.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,Me,De,oe.data);else if(w.isFramebufferTexture){if(nt)if(Ie)n.texStorage2D(t.TEXTURE_2D,pe,Fe,oe.width,oe.height);else{let q=oe.width,ee=oe.height;for(let me=0;me<pe;me++)n.texImage2D(t.TEXTURE_2D,me,Fe,q,ee,0,Me,De,null),q>>=1,ee>>=1}}else if(Ke.length>0){if(Ie&&nt){const q=Oe(Ke[0]);n.texStorage2D(t.TEXTURE_2D,pe,Fe,q.width,q.height)}for(let q=0,ee=Ke.length;q<ee;q++)xe=Ke[q],Ie?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Me,De,xe):n.texImage2D(t.TEXTURE_2D,q,Fe,Me,De,xe);w.generateMipmaps=!1}else if(Ie){if(nt){const q=Oe(oe);n.texStorage2D(t.TEXTURE_2D,pe,Fe,q.width,q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,Fe,Me,De,oe);m(w)&&f(ne),Ae.__version=te.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function $(b,w,B){if(w.image.length!==6)return;const ne=Te(b,w),se=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const te=i.get(se);if(se.version!==te.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const Ae=tt.getPrimaries(tt.workingColorSpace),fe=w.colorSpace===Bn?null:tt.getPrimaries(w.colorSpace),ge=w.colorSpace===Bn||Ae===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Qe=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,Me=[];for(let ee=0;ee<6;ee++)!Qe&&!oe?Me[ee]=x(w.image[ee],!0,r.maxCubemapSize):Me[ee]=oe?w.image[ee].image:w.image[ee],Me[ee]=Ye(w,Me[ee]);const De=Me[0],Fe=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),Ke=_(w.internalFormat,Fe,xe,w.colorSpace),Ie=w.isVideoTexture!==!0,nt=te.__version===void 0||ne===!0,U=se.dataReady;let pe=S(w,De);le(t.TEXTURE_CUBE_MAP,w);let q;if(Qe){Ie&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ke,De.width,De.height);for(let ee=0;ee<6;ee++){q=Me[ee].mipmaps;for(let me=0;me<q.length;me++){const _e=q[me];w.format!==xn?Fe!==null?Ie?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,_e.width,_e.height,Fe,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,Ke,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,_e.width,_e.height,Fe,xe,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,Ke,_e.width,_e.height,0,Fe,xe,_e.data)}}}else{if(q=w.mipmaps,Ie&&nt){q.length>0&&pe++;const ee=Oe(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me[ee].width,Me[ee].height,Fe,xe,Me[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,Me[ee].width,Me[ee].height,0,Fe,xe,Me[ee].data);for(let me=0;me<q.length;me++){const Xe=q[me].image[ee].image;Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Xe.width,Xe.height,Fe,xe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,Ke,Xe.width,Xe.height,0,Fe,xe,Xe.data)}}else{Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,xe,Me[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,Fe,xe,Me[ee]);for(let me=0;me<q.length;me++){const _e=q[me];Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Fe,xe,_e.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,Ke,Fe,xe,_e.image[ee])}}}m(w)&&f(t.TEXTURE_CUBE_MAP),te.__version=se.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function re(b,w,B,ne,se,te){const Ae=s.convert(B.format,B.colorSpace),fe=s.convert(B.type),ge=_(B.internalFormat,Ae,fe,B.colorSpace);if(!i.get(w).__hasExternalTextures){const oe=Math.max(1,w.width>>te),Me=Math.max(1,w.height>>te);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,te,ge,oe,Me,w.depth,0,Ae,fe,null):n.texImage2D(se,te,ge,oe,Me,0,Ae,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),He(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,se,i.get(B).__webglTexture,0,ye(w)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,se,i.get(B).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(b,w,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),w.depthBuffer){const ne=w.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,te=g(w.stencilBuffer,se),Ae=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=ye(w);He(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,te,w.width,w.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,te,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,te,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,b)}else{const ne=w.textures;for(let se=0;se<ne.length;se++){const te=ne[se],Ae=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),ge=_(te.internalFormat,Ae,fe,te.colorSpace),Qe=ye(w);B&&He(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,ge,w.width,w.height):He(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe,ge,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ge,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,se=ye(w);if(w.depthTexture.format===Zr)He(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(w.depthTexture.format===ls)He(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Re(b){const w=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const ne=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=ne}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");de(w.__webglFramebuffer,b)}else if(B){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=t.createRenderbuffer(),ue(w.__webglDepthbuffer[ne],b,!1);else{const se=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,te)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ue(w.__webglDepthbuffer,b,!1);else{const ne=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(b,w,B){const ne=i.get(b);w!==void 0&&re(ne.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Re(b)}function ke(b){const w=b.texture,B=i.get(b),ne=i.get(w);b.addEventListener("dispose",C);const se=b.textures,te=b.isWebGLCubeRenderTarget===!0,Ae=se.length>1;if(Ae||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=w.version,o.memory.textures++),te){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)B.__webglFramebuffer[fe][ge]=t.createFramebuffer()}else B.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)B.__webglFramebuffer[fe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let fe=0,ge=se.length;fe<ge;fe++){const Qe=i.get(se[fe]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&He(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const ge=se[fe];B.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const Qe=s.convert(ge.format,ge.colorSpace),oe=s.convert(ge.type),Me=_(ge.internalFormat,Qe,oe,ge.colorSpace,b.isXRRenderTarget===!0),De=ye(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Me,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),le(t.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)re(B.__webglFramebuffer[fe][ge],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else re(B.__webglFramebuffer[fe],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let fe=0,ge=se.length;fe<ge;fe++){const Qe=se[fe],oe=i.get(Qe);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),le(t.TEXTURE_2D,Qe),re(B.__webglFramebuffer,b,Qe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Qe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ne.__webglTexture),le(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)re(B.__webglFramebuffer[ge],b,w,t.COLOR_ATTACHMENT0,fe,ge);else re(B.__webglFramebuffer,b,w,t.COLOR_ATTACHMENT0,fe,0);m(w)&&f(fe),n.unbindTexture()}b.depthBuffer&&Re(b)}function $e(b){const w=b.textures;for(let B=0,ne=w.length;B<ne;B++){const se=w[B];if(m(se)){const te=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(se).__webglTexture;n.bindTexture(te,Ae),f(te),n.unbindTexture()}}}const ze=[],N=[];function At(b){if(b.samples>0){if(He(b)===!1){const w=b.textures,B=b.width,ne=b.height;let se=t.COLOR_BUFFER_BIT;const te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(b),fe=w.length>1;if(fe)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const Qe=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Qe,0)}t.blitFramebuffer(0,0,B,ne,0,0,B,ne,se,t.NEAREST),l===!0&&(ze.length=0,N.length=0,ze.push(t.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ze.push(te),N.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const Qe=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const w=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function ye(b){return Math.min(r.maxSamples,b.samples)}function He(b){const w=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pe(b){const w=o.render.frame;u.get(b)!==w&&(u.set(b,w),b.update())}function Ye(b,w){const B=b.colorSpace,ne=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Yi&&B!==Bn&&(tt.getTransfer(B)===ct?(ne!==xn||se!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=Ue,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=re,this.useMultisampledRTT=He}function Fy(t,e){function n(i,r=Bn){let s;const o=tt.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===ih)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===im)return t.BYTE;if(i===rm)return t.SHORT;if(i===lo)return t.UNSIGNED_SHORT;if(i===nh)return t.INT;if(i===Tr)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===mo)return t.HALF_FLOAT;if(i===om)return t.ALPHA;if(i===am)return t.RGB;if(i===xn)return t.RGBA;if(i===lm)return t.LUMINANCE;if(i===cm)return t.LUMINANCE_ALPHA;if(i===Zr)return t.DEPTH_COMPONENT;if(i===ls)return t.DEPTH_STENCIL;if(i===$a)return t.RED;if(i===sh)return t.RED_INTEGER;if(i===Xa)return t.RG;if(i===oh)return t.RG_INTEGER;if(i===ah)return t.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===ra)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nu||i===iu||i===ru||i===su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ou||i===au||i===lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ou||i===au)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cu||i===uu||i===hu||i===du||i===fu||i===pu||i===mu||i===gu||i===vu||i===_u||i===xu||i===yu||i===Su||i===Mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===du)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_u)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Su)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===wu||i===Eu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sa)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===um||i===Tu||i===Au||i===bu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Oy extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ws extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
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

}`;class bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Bt({vertexShader:Tb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rn(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cb extends Lr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const x=new bb,m=n.getContextAttributes();let f=null,_=null;const g=[],S=[],L=new Be;let C=null;const A=new bn;A.layers.enable(1),A.viewport=new je;const D=new bn;D.layers.enable(2),D.viewport=new je;const Y=[A,D],y=new Oy;y.layers.enable(1),y.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=g[$];return re===void 0&&(re=new Sd,g[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=g[$];return re===void 0&&(re=new Sd,g[$]=re),re.getGripSpace()},this.getHand=function($){let re=g[$];return re===void 0&&(re=new Sd,g[$]=re),re.getHandSpace()};function k($){const re=S.indexOf($.inputSource);if(re===-1)return;const ue=g[re];ue!==void 0&&(ue.update($.inputSource,$.frame,c||o),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",J);for(let $=0;$<g.length;$++){const re=S[$];re!==null&&(S[$]=null,g[$].disconnect(re))}E=null,z=null,x.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,_=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",H),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ar(p.framebufferWidth,p.framebufferHeight,{format:xn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,ue=null,de=null;m.depth&&(de=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?ls:Zr,ue=m.stencil?as:Tr);const Re={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ar(d.textureWidth,d.textureHeight,{format:xn,type:yi,depthTexture:new Mm(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J($){for(let re=0;re<$.removed.length;re++){const ue=$.removed[re],de=S.indexOf(ue);de>=0&&(S[de]=null,g[de].disconnect(ue))}for(let re=0;re<$.added.length;re++){const ue=$.added[re];let de=S.indexOf(ue);if(de===-1){for(let Ue=0;Ue<g.length;Ue++)if(Ue>=S.length){S.push(ue),de=Ue;break}else if(S[Ue]===null){S[Ue]=ue,de=Ue;break}if(de===-1)break}const Re=g[de];Re&&Re.connect(ue)}}const G=new I,Q=new I;function R($,re,ue){G.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(ue.matrixWorld);const de=G.distanceTo(Q),Re=re.projectionMatrix.elements,Ue=ue.projectionMatrix.elements,ke=Re[14]/(Re[10]-1),$e=Re[14]/(Re[10]+1),ze=(Re[9]+1)/Re[5],N=(Re[9]-1)/Re[5],At=(Re[8]-1)/Re[0],ye=(Ue[8]+1)/Ue[0],He=ke*At,Pe=ke*ye,Ye=de/(-At+ye),Oe=Ye*-At;if(re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Oe),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const b=ke+Ye,w=$e+Ye,B=He-Oe,ne=Pe+(de-Oe),se=ze*$e/w*b,te=N*$e/w*b;$.projectionMatrix.makePerspective(B,ne,se,te,b,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function X($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let re=$.near,ue=$.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),y.near=D.near=A.near=re,y.far=D.far=A.far=ue,(E!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,z=y.far);const de=$.parent,Re=y.cameras;X(y,de);for(let Ue=0;Ue<Re.length;Ue++)X(Re[Ue],de);Re.length===2?R(y,A,D):y.projectionMatrix.copy(A.projectionMatrix),Z($,y,de)};function Z($,re,ue){ue===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Na*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let le=null;function Te($,re){if(u=re.getViewerPose(c||o),v=re,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let de=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let Ue=0;Ue<ue.length;Ue++){const ke=ue[Ue];let $e=null;if(p!==null)$e=p.getViewport(ke);else{const N=h.getViewSubImage(d,ke);$e=N.viewport,Ue===0&&(e.setRenderTargetTextures(_,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(_))}let ze=Y[Ue];ze===void 0&&(ze=new bn,ze.layers.enable(Ue),ze.viewport=new je,Y[Ue]=ze),ze.matrix.fromArray(ke.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(ke.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set($e.x,$e.y,$e.width,$e.height),Ue===0&&(y.matrix.copy(ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(ze)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ue=h.getDepthInformation(ue[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,r.renderState)}}for(let ue=0;ue<g.length;ue++){const de=S[ue],Re=g[ue];de!==null&&Re!==void 0&&Re.update(de,re,c||o)}le&&le($,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const Le=new Cy;Le.setAnimationLoop(Te),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}}const zr=new Si,Rb=new mt;function Pb(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ty(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),g=_.envMap,S=_.envMapRotation;g&&(m.envMap.value=g,zr.copy(S),zr.x*=-1,zr.y*=-1,zr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(zr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Lb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function c(_,g){let S=r[_.id];S===void 0&&(v(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const L=g.program;i.updateUBOMapping(_,L);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function u(_){const g=h();_.__bindingPointIndex=g;const S=t.createBuffer(),L=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],S=_.uniforms,L=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,A=S.length;C<A;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let Y=0,y=D.length;Y<y;Y++){const E=D[Y];if(p(E,C,Y,L)===!0){const z=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let H=0;for(let J=0;J<k.length;J++){const G=k[J],Q=x(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,z+H,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,S,L){const C=_.value,A=g+"_"+S;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const D=L[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return L[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function v(_){const g=_.uniforms;let S=0;const L=16;for(let A=0,D=g.length;A<D;A++){const Y=Array.isArray(g[A])?g[A]:[g[A]];for(let y=0,E=Y.length;y<E;y++){const z=Y[y],k=Array.isArray(z.value)?z.value:[z.value];for(let H=0,J=k.length;H<J;H++){const G=k[H],Q=x(G),R=S%L,X=R%Q.boundary,Z=R+X;S+=X,Z!==0&&L-Z<Q.storage&&(S+=L-Z),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Q.storage}}}const C=S%L;return C>0&&(S+=L-C),_.__size=S,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class ky{constructor(e={}){const{canvas:n=yy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=zi,this.toneMappingExposure=1;const g=this;let S=!1,L=0,C=0,A=null,D=-1,Y=null;const y=new je,E=new je;let z=null;const k=new Ve(0);let H=0,J=n.width,G=n.height,Q=1,R=null,X=null;const Z=new je(0,0,J,G),le=new je(0,0,J,G);let Te=!1;const Le=new ym;let $=!1,re=!1;const ue=new mt,de=new mt,Re=new I,Ue=new je,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function ze(){return A===null?Q:1}let N=i;function At(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${th}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",_e,!1),N===null){const F="webgl2";if(N=At(F,T),N===null)throw At(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,He,Pe,Ye,Oe,b,w,B,ne,se,te,Ae,fe,ge,Qe,oe,Me,De,Fe,xe,Ke,Ie,nt,U;function pe(){ye=new HA(N),ye.init(),Ie=new Fy(N,ye),He=new IA(N,ye,e,Ie),Pe=new Sb(N),He.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),Ye=new WA(N),Oe=new lb,b=new wb(N,ye,Pe,Oe,He,Ie,Ye),w=new OA(g),B=new BA(g),ne=new Z1(N),nt=new NA(N,ne),se=new VA(N,ne,Ye,nt),te=new $A(N,se,ne,Ye),Fe=new jA(N,He,b),oe=new FA(Oe),Ae=new ab(g,w,B,ye,He,nt,oe),fe=new Pb(g,Oe),ge=new ub,Qe=new gb(ye),De=new DA(g,w,B,Pe,te,d,l),Me=new xb(g,te,He),U=new Lb(N,Ye,He,Pe),xe=new UA(N,ye,Ye),Ke=new GA(N,ye,Ye),Ye.programs=Ae.programs,g.capabilities=He,g.extensions=ye,g.properties=Oe,g.renderLists=ge,g.shadowMap=Me,g.state=Pe,g.info=Ye}pe();const q=new Cb(g,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(J,G,!1))},this.getSize=function(T){return T.set(J,G)},this.setSize=function(T,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,G=F,n.width=Math.floor(T*Q),n.height=Math.floor(F*Q),V===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(J*Q,G*Q).floor()},this.setDrawingBufferSize=function(T,F,V){J=T,G=F,Q=V,n.width=Math.floor(T*V),n.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,F,V,W){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,F,V,W),Pe.viewport(y.copy(Z).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(le)},this.setScissor=function(T,F,V,W){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,F,V,W),Pe.scissor(E.copy(le).multiplyScalar(Q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(T){Pe.setScissorTest(Te=T)},this.setOpaqueSort=function(T){R=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,F=!0,V=!0){let W=0;if(T){let O=!1;if(A!==null){const ce=A.texture.format;O=ce===ah||ce===oh||ce===sh}if(O){const ce=A.texture.type,ve=ce===yi||ce===Tr||ce===lo||ce===as||ce===ih||ce===rh,we=De.getClearColor(),Ee=De.getClearAlpha(),P=we.r,j=we.g,ie=we.b;ve?(p[0]=P,p[1]=j,p[2]=ie,p[3]=Ee,N.clearBufferuiv(N.COLOR,0,p)):(v[0]=P,v[1]=j,v[2]=ie,v[3]=Ee,N.clearBufferiv(N.COLOR,0,v))}else W|=N.COLOR_BUFFER_BIT}F&&(W|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),ge.dispose(),Qe.dispose(),Oe.dispose(),w.dispose(),B.dispose(),te.dispose(),nt.dispose(),U.dispose(),Ae.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ja),q.removeEventListener("sessionend",Ki),$n.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Ye.autoReset,F=Me.enabled,V=Me.autoUpdate,W=Me.needsUpdate,O=Me.type;pe(),Ye.autoReset=T,Me.enabled=F,Me.autoUpdate=V,Me.needsUpdate=W,Me.type=O}function _e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xe(T){const F=T.target;F.removeEventListener("dispose",Xe),St(F)}function St(T){Mt(T),Oe.remove(T)}function Mt(T){const F=Oe.get(T).programs;F!==void 0&&(F.forEach(function(V){Ae.releaseProgram(V)}),T.isShaderMaterial&&Ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,W,O,ce){F===null&&(F=ke);const ve=O.isMesh&&O.matrixWorld.determinant()<0,we=yo(T,F,V,W,O);Pe.setMaterial(W,ve);let Ee=V.index,P=1;if(W.wireframe===!0){if(Ee=se.getWireframeAttribute(V),Ee===void 0)return;P=2}const j=V.drawRange,ie=V.attributes.position;let be=j.start*P,Ne=(j.start+j.count)*P;ce!==null&&(be=Math.max(be,ce.start*P),Ne=Math.min(Ne,(ce.start+ce.count)*P)),Ee!==null?(be=Math.max(be,0),Ne=Math.min(Ne,Ee.count)):ie!=null&&(be=Math.max(be,0),Ne=Math.min(Ne,ie.count));const ht=Ne-be;if(ht<0||ht===1/0)return;nt.setup(O,W,we,V,Ee);let Kt,Ze=xe;if(Ee!==null&&(Kt=ne.get(Ee),Ze=Ke,Ze.setIndex(Kt)),O.isMesh)W.wireframe===!0?(Pe.setLineWidth(W.wireframeLinewidth*ze()),Ze.setMode(N.LINES)):Ze.setMode(N.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),Pe.setLineWidth(Ce*ze()),O.isLineSegments?Ze.setMode(N.LINES):O.isLineLoop?Ze.setMode(N.LINE_LOOP):Ze.setMode(N.LINE_STRIP)}else O.isPoints?Ze.setMode(N.POINTS):O.isSprite&&Ze.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Ht=O._multiDrawCounts,it=O._multiDrawCount,Xn=Ee?ne.get(Ee).bytesPerElement:1,fs=Oe.get(W).currentProgram.getUniforms();for(let wn=0;wn<it;wn++)fs.setValue(N,"_gl_DrawID",wn),Ze.render(Ce[wn]/Xn,Ht[wn])}else if(O.isInstancedMesh)Ze.renderInstances(be,ht,O.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ht=Math.min(V.instanceCount,Ce);Ze.renderInstances(be,ht,Ht)}else Ze.render(be,ht)};function Je(T,F,V){T.transparent===!0&&T.side===Cn&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,wi(T,F,V),T.side=$i,T.needsUpdate=!0,wi(T,F,V),T.side=Cn):wi(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),m=Qe.get(V),m.init(F),_.push(m),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==V&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const we=ce[ve];Je(we,V,O),W.add(we)}else Je(ce,V,O),W.add(ce)}),_.pop(),m=null,W},this.compileAsync=function(T,F,V=null){const W=this.compile(T,F,V);return new Promise(O=>{function ce(){if(W.forEach(function(ve){Oe.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){O(T);return}setTimeout(ce,10)}ye.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let It=null;function an(T){It&&It(T)}function Ja(){$n.stop()}function Ki(){$n.start()}const $n=new Cy;$n.setAnimationLoop(an),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(T){It=T,q.setAnimationLoop(T),T===null?$n.stop():$n.start()},q.addEventListener("sessionstart",Ja),q.addEventListener("sessionend",Ki),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,F,A),m=Qe.get(T,_.length),m.init(F),_.push(m),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Le.setFromProjectionMatrix(de),re=this.localClippingEnabled,$=oe.init(this.clippingPlanes,re),x=ge.get(T,f.length),x.init(),f.push(x),q.enabled===!0&&q.isPresenting===!0){const ce=g.xr.getDepthSensingMesh();ce!==null&&Nr(ce,F,-1/0,g.sortObjects)}Nr(T,F,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(R,X),$e=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,$e&&De.addToRenderList(x,T),this.info.render.frame++,$===!0&&oe.beginShadows();const V=m.state.shadowsArray;Me.render(V,T,F),$===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,O=x.transmissive;if(m.setupLights(),F.isArrayCamera){const ce=F.cameras;if(O.length>0)for(let ve=0,we=ce.length;ve<we;ve++){const Ee=ce[ve];el(W,O,T,Ee)}$e&&De.render(T);for(let ve=0,we=ce.length;ve<we;ve++){const Ee=ce[ve];Mi(x,T,Ee,Ee.viewport)}}else O.length>0&&el(W,O,T,F),$e&&De.render(T),Mi(x,T,F);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(g,T,F),nt.resetDefaultState(),D=-1,Y=null,_.pop(),_.length>0?(m=_[_.length-1],$===!0&&oe.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Nr(T,F,V,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Le.intersectsSprite(T)){W&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const ve=te.update(T),we=T.material;we.visible&&x.push(T,ve,we,V,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Le.intersectsObject(T))){const ve=te.update(T),we=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ue.copy(ve.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(we)){const Ee=ve.groups;for(let P=0,j=Ee.length;P<j;P++){const ie=Ee[P],be=we[ie.materialIndex];be&&be.visible&&x.push(T,ve,be,V,Ue.z,ie)}}else we.visible&&x.push(T,ve,we,V,Ue.z,null)}}const ce=T.children;for(let ve=0,we=ce.length;ve<we;ve++)Nr(ce[ve],F,V,W)}function Mi(T,F,V,W){const O=T.opaque,ce=T.transmissive,ve=T.transparent;m.setupLightsView(V),$===!0&&oe.setGlobalState(g.clippingPlanes,V),W&&Pe.viewport(y.copy(W)),O.length>0&&Un(O,F,V),ce.length>0&&Un(ce,F,V),ve.length>0&&Un(ve,F,V),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function el(T,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Ar(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?mo:yi,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ce=m.state.transmissionRenderTarget[W.id],ve=W.viewport||y;ce.setSize(ve.z,ve.w);const we=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(k),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear(),$e&&De.render(V);const Ee=g.toneMapping;g.toneMapping=zi;const P=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),$===!0&&oe.setGlobalState(g.clippingPlanes,W),Un(T,V,W),b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce),ye.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let ie=0,be=F.length;ie<be;ie++){const Ne=F[ie],ht=Ne.object,Kt=Ne.geometry,Ze=Ne.material,Ce=Ne.group;if(Ze.side===Cn&&ht.layers.test(W.layers)){const Ht=Ze.side;Ze.side=fn,Ze.needsUpdate=!0,tl(ht,V,W,Kt,Ze,Ce),Ze.side=Ht,Ze.needsUpdate=!0,j=!0}}j===!0&&(b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce))}g.setRenderTarget(we),g.setClearColor(k,H),P!==void 0&&(W.viewport=P),g.toneMapping=Ee}function Un(T,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ce=T.length;O<ce;O++){const ve=T[O],we=ve.object,Ee=ve.geometry,P=W===null?ve.material:W,j=ve.group;we.layers.test(V.layers)&&tl(we,F,V,Ee,P,j)}}function tl(T,F,V,W,O,ce){T.onBeforeRender(g,F,V,W,O,ce),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(g,F,V,W,T,ce),O.transparent===!0&&O.side===Cn&&O.forceSinglePass===!1?(O.side=fn,O.needsUpdate=!0,g.renderBufferDirect(V,F,W,O,T,ce),O.side=$i,O.needsUpdate=!0,g.renderBufferDirect(V,F,W,O,T,ce),O.side=Cn):g.renderBufferDirect(V,F,W,O,T,ce),T.onAfterRender(g,F,V,W,O,ce)}function wi(T,F,V){F.isScene!==!0&&(F=ke);const W=Oe.get(T),O=m.state.lights,ce=m.state.shadowsArray,ve=O.state.version,we=Ae.getParameters(T,O.state,ce,F,V),Ee=Ae.getProgramCacheKey(we);let P=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?B:w).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,P===void 0&&(T.addEventListener("dispose",Xe),P=new Map,W.programs=P);let j=P.get(Ee);if(j!==void 0){if(W.currentProgram===j&&W.lightsStateVersion===ve)return xo(T,we),j}else we.uniforms=Ae.getUniforms(T),T.onBeforeCompile(we,g),j=Ae.acquireProgram(we,Ee),P.set(Ee,j),W.uniforms=we.uniforms;const ie=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ie.clippingPlanes=oe.uniform),xo(T,we),W.needsLights=nl(T),W.lightsStateVersion=ve,W.needsLights&&(ie.ambientLightColor.value=O.state.ambient,ie.lightProbe.value=O.state.probe,ie.directionalLights.value=O.state.directional,ie.directionalLightShadows.value=O.state.directionalShadow,ie.spotLights.value=O.state.spot,ie.spotLightShadows.value=O.state.spotShadow,ie.rectAreaLights.value=O.state.rectArea,ie.ltc_1.value=O.state.rectAreaLTC1,ie.ltc_2.value=O.state.rectAreaLTC2,ie.pointLights.value=O.state.point,ie.pointLightShadows.value=O.state.pointShadow,ie.hemisphereLights.value=O.state.hemi,ie.directionalShadowMap.value=O.state.directionalShadowMap,ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ie.spotShadowMap.value=O.state.spotShadowMap,ie.spotLightMatrix.value=O.state.spotLightMatrix,ie.spotLightMap.value=O.state.spotLightMap,ie.pointShadowMap.value=O.state.pointShadowMap,ie.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=j,W.uniformsList=null,j}function _o(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=mc.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function xo(T,F){const V=Oe.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function yo(T,F,V,W,O){F.isScene!==!0&&(F=ke),b.resetTextureUnits();const ce=F.fog,ve=W.isMeshStandardMaterial?F.environment:null,we=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Yi,Ee=(W.isMeshStandardMaterial?B:w).get(W.envMap||ve),P=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,j=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ie=!!V.morphAttributes.position,be=!!V.morphAttributes.normal,Ne=!!V.morphAttributes.color;let ht=zi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ht=g.toneMapping);const Kt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=Kt!==void 0?Kt.length:0,Ce=Oe.get(W),Ht=m.state.lights;if($===!0&&(re===!0||T!==Y)){const In=T===Y&&W.id===D;oe.setState(W,T,In)}let it=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ht.state.version||Ce.outputColorSpace!==we||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Ee||W.fog===!0&&Ce.fog!==ce||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==P||Ce.vertexTangents!==j||Ce.morphTargets!==ie||Ce.morphNormals!==be||Ce.morphColors!==Ne||Ce.toneMapping!==ht||Ce.morphTargetsCount!==Ze)&&(it=!0):(it=!0,Ce.__version=W.version);let Xn=Ce.currentProgram;it===!0&&(Xn=wi(W,F,O));let fs=!1,wn=!1,vh=!1;const Et=Xn.getUniforms(),Zi=Ce.uniforms;if(Pe.useProgram(Xn.program)&&(fs=!0,wn=!0,vh=!0),W.id!==D&&(D=W.id,wn=!0),fs||Y!==T){He.reverseDepthBuffer?(ue.copy(T.projectionMatrix),L1(ue),D1(ue),Et.setValue(N,"projectionMatrix",ue)):Et.setValue(N,"projectionMatrix",T.projectionMatrix),Et.setValue(N,"viewMatrix",T.matrixWorldInverse);const In=Et.map.cameraPosition;In!==void 0&&In.setValue(N,Re.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&Et.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),Y!==T&&(Y=T,wn=!0,vh=!0)}if(O.isSkinnedMesh){Et.setOptional(N,O,"bindMatrix"),Et.setOptional(N,O,"bindMatrixInverse");const In=O.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Et.setValue(N,"boneTexture",In.boneTexture,b))}O.isBatchedMesh&&(Et.setOptional(N,O,"batchingTexture"),Et.setValue(N,"batchingTexture",O._matricesTexture,b),Et.setOptional(N,O,"batchingIdTexture"),Et.setValue(N,"batchingIdTexture",O._indirectTexture,b),Et.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(N,"batchingColorTexture",O._colorsTexture,b));const _h=V.morphAttributes;if((_h.position!==void 0||_h.normal!==void 0||_h.color!==void 0)&&Fe.update(O,V,Xn),(wn||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,Et.setValue(N,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Zi.envMap.value=Ee,Zi.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Zi.envMapIntensity.value=F.environmentIntensity),wn&&(Et.setValue(N,"toneMappingExposure",g.toneMappingExposure),Ce.needsLights&&So(Zi,vh),ce&&W.fog===!0&&fe.refreshFogUniforms(Zi,ce),fe.refreshMaterialUniforms(Zi,W,Q,G,m.state.transmissionRenderTarget[T.id]),mc.upload(N,_o(Ce),Zi,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(mc.upload(N,_o(Ce),Zi,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(N,"center",O.center),Et.setValue(N,"modelViewMatrix",O.modelViewMatrix),Et.setValue(N,"normalMatrix",O.normalMatrix),Et.setValue(N,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const In=W.uniformsGroups;for(let xh=0,yS=In.length;xh<yS;xh++){const bm=In[xh];U.update(bm,Xn),U.bind(bm,Xn)}}return Xn}function So(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function nl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,V){Oe.get(T.texture).__webglTexture=F,Oe.get(T.depthTexture).__webglTexture=V;const W=Oe.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const V=Oe.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){A=T,L=F,C=V;let W=!0,O=null,ce=!1,ve=!1;if(T){const Ee=Oe.get(T);if(Ee.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(Ee.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Ee.__hasExternalTextures)b.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ie=T.depthTexture;if(Ee.__boundDepthTexture!==ie){if(ie!==null&&Oe.has(ie)&&(T.width!==ie.image.width||T.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const P=T.texture;(P.isData3DTexture||P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ve=!0);const j=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(j[F])?O=j[F][V]:O=j[F],ce=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?O=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(j)?O=j[V]:O=j,y.copy(T.viewport),E.copy(T.scissor),z=T.scissorTest}else y.copy(Z).multiplyScalar(Q).floor(),E.copy(le).multiplyScalar(Q).floor(),z=Te;if(Pe.bindFramebuffer(N.FRAMEBUFFER,O)&&W&&Pe.drawBuffers(T,O),Pe.viewport(y),Pe.scissor(E),Pe.setScissorTest(z),ce){const Ee=Oe.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,V)}else if(ve){const Ee=Oe.get(T.texture),P=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,P)}D=-1},this.readRenderTargetPixels=function(T,F,V,W,O,ce,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){Pe.bindFramebuffer(N.FRAMEBUFFER,we);try{const Ee=T.texture,P=Ee.format,j=Ee.type;if(!He.textureFormatReadable(P)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&V>=0&&V<=T.height-O&&N.readPixels(F,V,W,O,Ie.convert(P),Ie.convert(j),ce)}finally{const Ee=A!==null?Oe.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,F,V,W,O,ce,ve){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){const Ee=T.texture,P=Ee.format,j=Ee.type;if(!He.textureFormatReadable(P))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-W&&V>=0&&V<=T.height-O){Pe.bindFramebuffer(N.FRAMEBUFFER,we);const ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.bufferData(N.PIXEL_PACK_BUFFER,ce.byteLength,N.STREAM_READ),N.readPixels(F,V,W,O,Ie.convert(P),Ie.convert(j),0);const be=A!==null?Oe.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,be);const Ne=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await P1(N,Ne,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ce),N.deleteBuffer(ie),N.deleteSync(Ne),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,V=0){T.isTexture!==!0&&(pc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(T.image.width*W),ce=Math.floor(T.image.height*W),ve=F!==null?F.x:0,we=F!==null?F.y:0;b.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,ve,we,O,ce),Pe.unbindTexture()},this.copyTextureToTexture=function(T,F,V=null,W=null,O=0){T.isTexture!==!0&&(pc("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ce,ve,we,Ee,P,j;V!==null?(ce=V.max.x-V.min.x,ve=V.max.y-V.min.y,we=V.min.x,Ee=V.min.y):(ce=T.image.width,ve=T.image.height,we=0,Ee=0),W!==null?(P=W.x,j=W.y):(P=0,j=0);const ie=Ie.convert(F.format),be=Ie.convert(F.type);b.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Ne=N.getParameter(N.UNPACK_ROW_LENGTH),ht=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Kt=N.getParameter(N.UNPACK_SKIP_PIXELS),Ze=N.getParameter(N.UNPACK_SKIP_ROWS),Ce=N.getParameter(N.UNPACK_SKIP_IMAGES),Ht=T.isCompressedTexture?T.mipmaps[O]:T.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ee),T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,P,j,ce,ve,ie,be,Ht.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,P,j,Ht.width,Ht.height,ie,Ht.data):N.texSubImage2D(N.TEXTURE_2D,O,P,j,ce,ve,ie,be,Ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ne),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Kt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce),O===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V=null,W=null,O=0){T.isTexture!==!0&&(pc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0);let ce,ve,we,Ee,P,j,ie,be,Ne;const ht=T.isCompressedTexture?T.mipmaps[O]:T.image;V!==null?(ce=V.max.x-V.min.x,ve=V.max.y-V.min.y,we=V.max.z-V.min.z,Ee=V.min.x,P=V.min.y,j=V.min.z):(ce=ht.width,ve=ht.height,we=ht.depth,Ee=0,P=0,j=0),W!==null?(ie=W.x,be=W.y,Ne=W.z):(ie=0,be=0,Ne=0);const Kt=Ie.convert(F.format),Ze=Ie.convert(F.type);let Ce;if(F.isData3DTexture)b.setTexture3D(F,0),Ce=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)b.setTexture2DArray(F,0),Ce=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Ht=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Xn=N.getParameter(N.UNPACK_SKIP_PIXELS),fs=N.getParameter(N.UNPACK_SKIP_ROWS),wn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,P),N.pixelStorei(N.UNPACK_SKIP_IMAGES,j),T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ce,O,ie,be,Ne,ce,ve,we,Kt,Ze,ht.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,O,ie,be,Ne,ce,ve,we,Kt,ht.data):N.texSubImage3D(Ce,O,ie,be,Ne,ce,ve,we,Kt,Ze,ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xn),N.pixelStorei(N.UNPACK_SKIP_ROWS,fs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wn),O===0&&F.generateMipmaps&&N.generateMipmap(Ce),Pe.unbindTexture()},this.initRenderTarget=function(T){Oe.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,Pe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===lh?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Ya?"display-p3":"srgb"}}class zy extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class By{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Cu,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new I;class Fi{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ri(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ri(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ri(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ri(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Lt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hi extends Yt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=kt,u=kt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hy extends ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ru=new I,Pu=new I,C0=new mt,Io=new qa,Bl=new Dr,Md=new I,R0=new I;let Vy=class extends sn{constructor(e=new _t,n=new Hy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ru.fromBufferAttribute(n,r-1),Pu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ru.distanceTo(Pu);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(r),Bl.radius+=s,e.ray.intersectsSphere(Bl)===!1)return;C0.copy(r).invert(),Io.copy(e.ray).applyMatrix4(C0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=c){const f=u.getX(x),_=u.getX(x+1),g=Hl(this,e,Io,l,f,_);g&&n.push(g)}if(this.isLineLoop){const x=u.getX(v-1),m=u.getX(p),f=Hl(this,e,Io,l,x,m);f&&n.push(f)}}else{const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=c){const f=Hl(this,e,Io,l,x,x+1);f&&n.push(f)}if(this.isLineLoop){const x=Hl(this,e,Io,l,v-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Hl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Ru.fromBufferAttribute(o,r),Pu.fromBufferAttribute(o,s),n.distanceSqToSegment(Ru,Pu,Md,R0)>i)return;Md.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Md);if(!(l<e.near||l>e.far))return{distance:l,point:R0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const P0=new I,L0=new I;class Gy extends Vy{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)P0.fromBufferAttribute(n,r),L0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+P0.distanceTo(L0);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wy extends ds{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const D0=new mt,kf=new qa,Vl=new Dr,Gl=new I;class dh extends sn{constructor(e=new _t,n=new Wy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(r),Vl.radius+=s,e.ray.intersectsSphere(Vl)===!1)return;D0.copy(r).invert(),kf.copy(e.ray).applyMatrix4(D0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,x=p;v<x;v++){const m=c.getX(v);Gl.fromBufferAttribute(h,m),N0(Gl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,x=p;v<x;v++)Gl.fromBufferAttribute(h,v),N0(Gl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function N0(t,e,n,i,r,s,o){const a=kf.distanceSqToPoint(t);if(a<n){const l=new I;kf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}const Db={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=jy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,p;if(i&&(s=Ob(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let v=n;v<r;v+=n)h=t[v],d=t[v+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ia(s,o,n,a,l,p,0),o}};function jy(t,e,n,i,r){let s,o;if(r===Yb(t,e,n,i)>0)for(s=e;s<n;s+=i)o=U0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=U0(s,t[s],t[s+1],o);return o&&fh(o,o.next)&&(Oa(o),o=o.next),o}function cs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(fh(n,n.next)||vt(n.prev,n,n.next)===0)){if(Oa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ia(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Vb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?Ub(t,i,r,s):Nb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Oa(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Ib(cs(t),e,n),Ia(t,e,n,i,r,s,2)):o===2&&Fb(t,e,n,i,r,s):Ia(cs(t),e,n,i,r,s,1);break}}}function Nb(t){const e=t.prev,n=t,i=t.next;if(vt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=d&&v.y>=h&&v.y<=p&&js(r,a,s,l,o,c,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Ub(t,e,n,i){const r=t.prev,s=t,o=t.next;if(vt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=zf(p,v,e,n,i),_=zf(x,m,e,n,i);let g=t.prevZ,S=t.nextZ;for(;g&&g.z>=f&&S&&S.z<=_;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&js(a,u,l,h,c,d,g.x,g.y)&&vt(g.prev,g,g.next)>=0||(g=g.prevZ,S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==o&&js(a,u,l,h,c,d,S.x,S.y)&&vt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;g&&g.z>=f;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&js(a,u,l,h,c,d,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;S&&S.z<=_;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==o&&js(a,u,l,h,c,d,S.x,S.y)&&vt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ib(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!fh(r,s)&&$y(r,i,i.next,s)&&Fa(r,s)&&Fa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Oa(i),Oa(i.next),i=t=s),i=i.next}while(i!==t);return cs(i)}function Fb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jb(o,a)){let l=Xy(o,a);o=cs(o,o.next),l=cs(l,l.next),Ia(o,e,n,i,r,s,0),Ia(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Ob(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=jy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Wb(c));for(r.sort(kb),s=0;s<r.length;s++)n=zb(r[s],n);return n}function kb(t,e){return t.x-e.x}function zb(t,e){const n=Bb(t,e);if(!n)return e;const i=Xy(n,t);return cs(i,i.next),cs(n,n.next)}function Bb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&js(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Fa(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&Hb(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function Hb(t,e){return vt(t.prev,t,e.prev)<0&&vt(e.next,t,t.next)<0}function Vb(t,e,n,i){let r=t;do r.z===0&&(r.z=zf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Gb(r)}function Gb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function zf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Wb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function js(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function jb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!$b(t,e)&&(Fa(t,e)&&Fa(e,t)&&Xb(t,e)&&(vt(t.prev,t,e.prev)||vt(t,e.prev,e))||fh(t,e)&&vt(t.prev,t,t.next)>0&&vt(e.prev,e,e.next)>0)}function vt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function fh(t,e){return t.x===e.x&&t.y===e.y}function $y(t,e,n,i){const r=jl(vt(t,e,n)),s=jl(vt(t,e,i)),o=jl(vt(n,i,t)),a=jl(vt(n,i,e));return!!(r!==s&&o!==a||r===0&&Wl(t,n,e)||s===0&&Wl(t,i,e)||o===0&&Wl(n,t,i)||a===0&&Wl(n,e,i))}function Wl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function jl(t){return t>0?1:t<0?-1:0}function $b(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&$y(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Fa(t,e){return vt(t.prev,t,t.next)<0?vt(t,e,t.next)>=0&&vt(t,t.prev,e)>=0:vt(t,e,t.prev)<0||vt(t,t.next,e)<0}function Xb(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Xy(t,e){const n=new Bf(t.i,t.x,t.y),i=new Bf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function U0(t,e,n,i){const r=new Bf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Oa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Bf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yb(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Za{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Za.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];I0(e),F0(i,e);let o=e.length;n.forEach(I0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,F0(i,n[l]);const a=Db.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function I0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function F0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Yy extends _t{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new I,s=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,p=h.count;for(let v=d,x=d+p;v<x;v+=3)for(let m=0;m<3;m++){const f=a.getX(v+m),_=a.getX(v+(m+1)%3);r.fromBufferAttribute(o,f),s.fromBufferAttribute(o,_),O0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),O0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new lt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function O0(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}const Hf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class qy{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Ky=new qy;class ph{constructor(e){this.manager=e!==void 0?e:Ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ph.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zy extends ph{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ua("img");function l(){u(),Hf.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class wm extends ph{constructor(e){super(e)}load(e,n,i,r){const s=new Yt,o=new Zy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Qy extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Jy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=k0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=k0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function k0(){return performance.now()}class Lu extends By{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class Du{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const z0=new I,$l=new I;class eS{constructor(e=new I,n=new I){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){z0.subVectors(e,this.start),$l.subVectors(this.end,this.start);const i=$l.dot($l);let s=$l.dot(z0)/i;return n&&(s=$t(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class tS extends Lr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);const nS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:iy,AddEquation:cr,AddOperation:Jx,AdditiveBlending:Pf,AgXToneMapping:sy,AlphaFormat:om,AlwaysCompare:_y,AlwaysDepth:$c,AlwaysStencilFunc:Nf,ArrayCamera:Oy,BackSide:fn,BasicDepthPacking:ly,Box3:qi,BoxGeometry:go,BufferAttribute:Lt,BufferGeometry:_t,ByteType:im,Cache:Hf,Camera:_m,CineonToneMapping:ny,ClampToEdgeWrapping:fr,Clock:Jy,Color:Ve,ColorManagement:tt,ConstantAlphaFactor:Kx,ConstantColorFactor:Yx,Controls:tS,CubeCamera:Ay,CubeReflectionMapping:ss,CubeRefractionMapping:os,CubeTexture:xm,CubeUVReflectionMapping:ja,CullFaceBack:Rf,CullFaceFront:Dx,CullFaceNone:Lx,CustomBlending:Ux,CustomToneMapping:ry,Data3DTexture:wy,DataArrayTexture:ch,DataTexture:Hi,DefaultLoadingManager:Ky,DepthFormat:Zr,DepthStencilFormat:ls,DepthTexture:Mm,DisplayP3ColorSpace:lh,DoubleSide:Cn,DstAlphaFactor:Gx,DstColorFactor:jx,DynamicDrawUsage:Uf,EqualCompare:py,EqualDepth:Yc,EquirectangularReflectionMapping:Qc,EquirectangularRefractionMapping:Jc,Euler:Si,EventDispatcher:Lr,Float32BufferAttribute:lt,FloatType:mi,FrontSide:$i,Frustum:ym,GLSL3:If,GreaterCompare:my,GreaterDepth:Kc,GreaterEqualCompare:vy,GreaterEqualDepth:qc,Group:Ws,HalfFloatType:mo,ImageLoader:Zy,ImageUtils:Sy,InstancedBufferGeometry:Qy,InstancedInterleavedBuffer:Lu,IntType:nh,InterleavedBuffer:By,InterleavedBufferAttribute:Fi,KeepStencilOp:Vr,Layers:pm,LessCompare:fy,LessDepth:Xc,LessEqualCompare:hm,LessEqualDepth:rs,Line:Vy,Line3:eS,LineBasicMaterial:Hy,LineSegments:Gy,LinearDisplayP3ColorSpace:Ya,LinearFilter:nn,LinearMipmapLinearFilter:Ii,LinearMipmapNearestFilter:fc,LinearSRGBColorSpace:Yi,LinearToneMapping:ey,LinearTransfer:Ra,Loader:ph,LoadingManager:qy,LuminanceAlphaFormat:cm,LuminanceFormat:lm,MOUSE:xi,Material:ds,MathUtils:co,Matrix3:We,Matrix4:mt,MaxEquation:kx,Mesh:rn,MeshBasicMaterial:mm,MeshDepthMaterial:Uy,MeshDistanceMaterial:Iy,MinEquation:Ox,MirroredRepeatWrapping:tu,MixOperation:Qx,MultiplyBlending:Df,MultiplyOperation:tm,NearestFilter:kt,NearestMipmapLinearFilter:Go,NearestMipmapNearestFilter:ay,NeutralToneMapping:oy,NeverCompare:dy,NeverDepth:jc,NoBlending:ki,NoColorSpace:Bn,NoToneMapping:zi,NormalBlending:Kr,NotEqualCompare:gy,NotEqualDepth:Zc,Object3D:sn,ObjectSpaceNormalMap:hy,OneFactor:Bx,OneMinusConstantAlphaFactor:Zx,OneMinusConstantColorFactor:qx,OneMinusDstAlphaFactor:Wx,OneMinusDstColorFactor:$x,OneMinusSrcAlphaFactor:Wc,OneMinusSrcColorFactor:Vx,OrthographicCamera:Ry,P3Primaries:La,PCFShadowMap:em,PCFSoftShadowMap:Nx,PMREMGenerator:Ff,PerspectiveCamera:bn,Plane:Li,PlaneGeometry:Ka,Points:dh,PointsMaterial:Wy,Quaternion:br,RED_GREEN_RGTC2_Format:Au,RED_RGTC1_Format:um,REVISION:th,RGBADepthPacking:cy,RGBAFormat:xn,RGBAIntegerFormat:ah,RGBA_ASTC_10x10_Format:yu,RGBA_ASTC_10x5_Format:vu,RGBA_ASTC_10x6_Format:_u,RGBA_ASTC_10x8_Format:xu,RGBA_ASTC_12x10_Format:Su,RGBA_ASTC_12x12_Format:Mu,RGBA_ASTC_4x4_Format:cu,RGBA_ASTC_5x4_Format:uu,RGBA_ASTC_5x5_Format:hu,RGBA_ASTC_6x5_Format:du,RGBA_ASTC_6x6_Format:fu,RGBA_ASTC_8x5_Format:pu,RGBA_ASTC_8x6_Format:mu,RGBA_ASTC_8x8_Format:gu,RGBA_BPTC_Format:sa,RGBA_ETC2_EAC_Format:lu,RGBA_PVRTC_2BPPV1_Format:su,RGBA_PVRTC_4BPPV1_Format:ru,RGBA_S3TC_DXT1_Format:na,RGBA_S3TC_DXT3_Format:ia,RGBA_S3TC_DXT5_Format:ra,RGBFormat:am,RGB_BPTC_SIGNED_Format:wu,RGB_BPTC_UNSIGNED_Format:Eu,RGB_ETC1_Format:ou,RGB_ETC2_Format:au,RGB_PVRTC_2BPPV1_Format:iu,RGB_PVRTC_4BPPV1_Format:nu,RGB_S3TC_DXT1_Format:ta,RGFormat:Xa,RGIntegerFormat:oh,Ray:qa,Rec709Primaries:Pa,RedFormat:$a,RedIntegerFormat:sh,ReinhardToneMapping:ty,RenderTarget:My,RepeatWrapping:eu,ReverseSubtractEquation:Fx,SIGNED_RED_GREEN_RGTC2_Format:bu,SIGNED_RED_RGTC1_Format:Tu,SRGBColorSpace:ni,SRGBTransfer:ct,Scene:zy,ShaderChunk:Ge,ShaderLib:hn,ShaderMaterial:Bt,ShapeUtils:Za,ShortType:rm,Source:fm,Sphere:Dr,Spherical:Du,SrcAlphaFactor:Gc,SrcAlphaSaturateFactor:Xx,SrcColorFactor:Hx,StaticDrawUsage:Cu,SubtractEquation:Ix,SubtractiveBlending:Lf,TOUCH:Ui,TangentSpaceNormalMap:uy,Texture:Yt,TextureLoader:wm,Triangle:Hn,UVMapping:nm,Uint16BufferAttribute:gm,Uint32BufferAttribute:vm,UniformsLib:he,UniformsUtils:uh,UnsignedByteType:yi,UnsignedInt248Type:as,UnsignedInt5999Type:sm,UnsignedIntType:Tr,UnsignedShort4444Type:ih,UnsignedShort5551Type:rh,UnsignedShortType:lo,VSMShadowMap:di,Vector2:Be,Vector3:I,Vector4:je,WebGLCoordinateSystem:gi,WebGLCubeRenderTarget:by,WebGLRenderTarget:Ar,WebGLRenderer:ky,WebGLUtils:Fy,WebGPUCoordinateSystem:Da,WireframeGeometry:Yy,ZeroFactor:zx,createCanvasElement:yy},Symbol.toStringTag,{value:"Module"})),Vf={rate:{unit:"mm/h",stops:[.1,.5,1,2,4,7,12,20,35,60]},accum:{unit:"mm",stops:[1,5,10,20,35,50,75,100,150,250]},temp:{unit:"°C",stops:[-15,-8,-3,0,4,8,12,16,20,26]}},Gf=["#7fb5d9","#4f93cf","#2f6fc0","#21a6a6","#47b04a","#c3d43a","#f5c22e","#f07c22","#de3a3a","#b0249e"],iS=["#7b4fb0","#4a5fc1","#3f8fd2","#4fb7d6","#5fc39a","#9ccf62","#e4d65a","#f2a64a","#e8683a","#b8312f"],B0={rate:100,accum:600},qb=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Kb=`
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
  }`,H0=t=>t.map(e=>new Ve(e));class Zb{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,doc:i,U:r});const s=i.grids.rain;this.box={west:s.west,east:s.east,south:s.south,north:s.north};const o=n.toX(s.west),a=n.toX(s.east),l=n.toZ(s.north),c=n.toZ(s.south),u=new _t;u.setAttribute("position",new lt([o,0,l,a,0,l,o,0,c,a,0,c],3)),u.setAttribute("uv",new lt([0,0,1,0,0,1,1,1],2)),u.setIndex([0,2,1,1,2,3]),this.rainData=new Uint8Array(s.cols*s.rows*2),this.rainTex=new Hi(this.rainData,s.cols,s.rows,Xa),this.rainTex.magFilter=this.rainTex.minFilter=nn,this.rainTex.needsUpdate=!0,this.metTex=new Hi(new Uint8Array(4),1,1,xn),this.metTex.needsUpdate=!0,this.uniforms={uRain:{value:this.rainTex},uMet:{value:this.metTex},uMode:{value:0},uMax:{value:B0.rate},uOpacity:{value:.85},uHasRain:{value:0},uHasMet:{value:0},uStops:{value:Vf.rate.stops.slice()},uColors:{value:H0(Gf)}},this.mesh=new rn(u,new Bt({vertexShader:qb,fragmentShader:Kb,uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:Cn})),this.mesh.renderOrder=5,this.mesh.frustumCulled=!1,e.add(this.mesh),this.altitude=6,this.fill="rate",this.met=null,this.wind=new rS(e,n,this.box)}setRain(e){const n=this.rainData,i=B0[this.fill==="accum"?"accum":"rate"];if(!e){this.uniforms.uHasRain.value=0;return}for(let r=0;r<e.length;r++){const s=e[r];Number.isNaN(s)?(n[r*2]=0,n[r*2+1]=0):(n[r*2]=Math.min(254,Math.round(254*Math.sqrt(Math.max(0,s)/i))),n[r*2+1]=255)}this.rainTex.needsUpdate=!0,this.uniforms.uHasRain.value=1,this.uniforms.uMax.value=i}setMet(e){if(this.met=e,!e){this.uniforms.uHasMet.value=0,this.wind.setField(null);return}const n=new Hi(e.data,e.grid.cols,e.grid.rows,xn);n.magFilter=n.minFilter=nn,n.needsUpdate=!0,this.metTex.dispose(),this.metTex=this.uniforms.uMet.value=n,this.uniforms.uHasMet.value=1,this.wind.setField(e)}setFill(e){if(this.fill=e,this.mesh.visible=e!=="off",e==="off")return;const n=Vf[e];this.uniforms.uMode.value=e==="temp"?2:e==="accum"?1:0,this.uniforms.uStops.value=n.stops.slice(),this.uniforms.uColors.value=H0(e==="temp"?iS:Gf)}setOpacity(e){this.uniforms.uOpacity.value=e}setAltitude(e){this.altitude=e}setWind(e){this.wind.setVisible(e)}update(e,n){const i=this.U.flat.value,r=this.U.exag.value,s=this.altitude*r*(1-i)+.04*i;this.mesh.position.y=s,this.wind.update(e,n,s+.03+.05*i)}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.rainTex.dispose(),this.metTex.dispose(),this.wind.dispose()}}const Qb=3500,Jb=8,eC=(t,e)=>t[e+3]===0?null:[(t[e]-128)/4,(t[e+1]-128)/4],tC=`
  attribute float alpha; varying float vA;
  void main() { vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,nC=`
  uniform vec3 uColor; uniform float uOpacity; varying float vA;
  void main() { if (vA < 0.01) discard; gl_FragColor = vec4(uColor, vA * uOpacity); }`;class rS{constructor(e,n,i,{n:r=Qb,trail:s=Jb,color:o="#f4f6f8",scale:a=1,full:l=15,floor:c=.25,decode:u=eC,onData:h=!1}={}){Object.assign(this,{scene:e,P:n,box:i,scale:a,full:l,decode:u,onData:h,floor:c}),this.n=r;const d=this.T=s;this.lon=new Float32Array(r),this.lat=new Float32Array(r),this.age=new Float32Array(r),this.life=new Float32Array(r),this.trail=new Float32Array(r*d*2),this.speed=new Float32Array(r),this.pos=new Float32Array(r*(d-1)*2*3),this.alpha=new Float32Array(r*(d-1)*2);const p=new _t;p.setAttribute("position",new Lt(this.pos,3).setUsage(Uf)),p.setAttribute("alpha",new Lt(this.alpha,1).setUsage(Uf)),this.lines=new Gy(p,new Bt({vertexShader:tC,fragmentShader:nC,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ve(o)},uOpacity:{value:.85}}})),this.lines.frustumCulled=!1,this.lines.renderOrder=6,this.lines.visible=!1,e.add(this.lines),this.field=null;for(let v=0;v<r;v++)this._spawn(v,!0)}setField(e){if(this.field=e,this.onData&&e){const n=e.grid,i=[];for(let r=0;r<n.cols*n.rows;r++)this.decode(e.data,r*4)&&i.push(r);this.cells=i}}setVisible(e){this.lines.visible=e}setFocus(e){this.focus=e}_wind(e,n){const i=this.field;if(!i)return null;const r=i.grid,s=Math.floor((e-r.west)/r.cell),o=Math.floor((r.north-n)/r.cell);return s<0||o<0||s>=r.cols||o>=r.rows?null:this.decode(i.data,(o*r.cols+s)*4)}_spawn(e,n=!1){var o,a;const i=this.box,r=this.T,s=(o=this.field)==null?void 0:o.grid;if((a=this.cells)!=null&&a.length&&s){const l=this.focus;for(let c=0;c<40;c++){const u=this.cells[Math.floor(Math.random()*this.cells.length)];if(this.lon[e]=s.west+(u%s.cols+Math.random())*s.cell,this.lat[e]=s.north-(Math.floor(u/s.cols)+Math.random())*s.cell,!l||Math.abs(this.lon[e]-l.lon)<l.dlon&&Math.abs(this.lat[e]-l.lat)<l.dlat)break}}else this.lon[e]=i.west+Math.random()*(i.east-i.west),this.lat[e]=i.south+Math.random()*(i.north-i.south);this.life[e]=60+Math.random()*90,this.age[e]=n?Math.random()*this.life[e]:0;for(let l=0;l<r;l++)this.trail[(e*r+l)*2]=this.lon[e],this.trail[(e*r+l)*2+1]=this.lat[e]}update(e,n,i){if(!this.lines.visible||!this.field){this.lines.visible&&this.alpha.fill(0);return}const r=this.scale*Math.min(n,2500)/250,s=this.P,o=this.trail,a=this.T;for(let c=0;c<this.n;c++){const u=this._wind(this.lon[c],this.lat[c]);if(this.age[c]+=1,!u||this.age[c]>this.life[c]){this._spawn(c);continue}const h=r*e;this.lon[c]+=u[0]*h/(111.32*Math.cos(this.lat[c]*Math.PI/180)),this.lat[c]+=u[1]*h/111.13,this.speed[c]=Math.hypot(u[0],u[1]),o.copyWithin((c*a+1)*2,c*a*2,(c*a+a-1)*2),o[c*a*2]=this.lon[c],o[c*a*2+1]=this.lat[c]}let l=0;for(let c=0;c<this.n;c++){const u=Math.min(1,this.age[c]/10,(this.life[c]-this.age[c])/10),h=Math.min(1,this.floor+this.speed[c]/this.full);for(let d=0;d<a-1;d++)for(const p of[d,d+1]){const v=(c*a+p)*2;this.pos[l*3]=s.toX(o[v]),this.pos[l*3+1]=i,this.pos[l*3+2]=s.toZ(o[v+1]),this.alpha[l]=u*h*(1-p/a),l++}}this.lines.geometry.attributes.position.needsUpdate=!0,this.lines.geometry.attributes.alpha.needsUpdate=!0}dispose(){this.scene.remove(this.lines),this.lines.geometry.dispose(),this.lines.material.dispose()}}const mh=["#4f9fe0","#f2cf3d","#f39431","#e2483a","#c42b7d","#8a3fb0","#4b237a"],Nu=["below high water","high water","2-year flood","5-year flood","10-year flood","25-year flood","50-year flood"],la=256,iC=.25,Wf=60,sS=.2,rC=1;function sC(t,e,n){const i=e[n*6+1];return i>0?t/i:NaN}function oC(t,e){const n=t/Math.max(e,sS);return Math.min(4,.2*Math.min(n,1)+.45*Math.log2(Math.max(n,1)))}const aC=`
  attribute float elev, reach, top; attribute vec2 side;
  uniform sampler2D uFlow; uniform float uExag, uFlat, uWallK;
  varying float vTop, vCat;
  void main() {
    vec4 f = texelFetch(uFlow, ivec2(int(mod(reach, ${la}.0)), int(reach / ${la}.0)), 0);
    float b = floor(f.r * 255.0 + 0.5);
    vCat = b > 254.5 ? -1.0 : floor(f.g * 255.0 + 0.5);
    vTop = top;
    float s = uWallK * f.b * 255.0 / ${Wf}.0;   // see wallUnits
    vec3 p = position;
    p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.01 + top * s * (1.0 - uFlat) + 0.05 * uFlat;
    p.xz += side * (top - 0.5) * s * ${iC} * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`,lC=`
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
  }`;class cC{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,reaches:i,U:r});const s=i.count,o=Math.ceil(s/la);this.flowData=new Uint8Array(la*o*4);for(let a=0;a<s;a++)this.flowData[a*4]=255;this.flow=new Hi(this.flowData,la,o),this.flow.magFilter=this.flow.minFilter=kt,this.flow.needsUpdate=!0,this.bytes=new Uint8Array(s).fill(255),this.wallK={value:1},this.opacity={value:1},this.whatIf={value:0},this.geometry=this._geometry(),this.mesh=new rn(this.geometry,new Bt({vertexShader:aC,fragmentShader:lC,transparent:!0,depthWrite:!1,side:Cn,uniforms:{uFlow:{value:this.flow},uExag:r.exag,uFlat:r.flat,uWallK:this.wallK,uOpacity:this.opacity,uWhatIf:this.whatIf,uColors:{value:mh.map(a=>new Ve(a))}}})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,e.add(this.mesh)}_geometry(){const{offsets:e,owner:n,coords:i,paths:r}=this.reaches,s=this.P,o=i.length/2,a=new Float32Array(o*2*3),l=new Float32Array(o*2),c=new Float32Array(o*2),u=new Float32Array(o*2),h=new Float32Array(o*2*2),d=[];this.xz=new Float32Array(o*2);for(let v=0;v<o;v++)this.xz[v*2]=s.toX(i[v*2]),this.xz[v*2+1]=s.toZ(i[v*2+1]);for(let v=0;v<r;v++){const x=e[v],m=e[v+1];for(let f=x;f<m;f++){const _=Math.max(x,f-1),g=Math.min(m-1,f+1);let S=this.xz[g*2]-this.xz[_*2],L=this.xz[g*2+1]-this.xz[_*2+1];const C=Math.hypot(S,L)||1;S/=C,L/=C;for(let A=0;A<2;A++){const D=f*2+A;a[D*3]=this.xz[f*2],a[D*3+2]=this.xz[f*2+1],c[D]=n[v],u[D]=A,h[D*2]=-L,h[D*2+1]=S}if(f<m-1){const A=f*2;d.push(A,A+1,A+2,A+2,A+1,A+3)}}}const p=new _t;return p.setAttribute("position",new Lt(a,3)),p.setAttribute("elev",new Lt(l,1)),p.setAttribute("reach",new Lt(c,1)),p.setAttribute("top",new Lt(u,1)),p.setAttribute("side",new Lt(h,2)),p.setIndex(d),p}drape(e){const{coords:n}=this.reaches,i=this.geometry.attributes.elev.array;for(let r=0;r<n.length/2;r++)i[r*2]=i[r*2+1]=e(n[r*2],n[r*2+1])??0;this.geometry.attributes.elev.needsUpdate=!0}setBaseline(e){const{count:n,thr:i}=this.reaches;this.base=new Float32Array(n),this.unflagged=new Uint8Array(n);for(let r=0;r<n;r++){const s=Xh(e[r]);this.base[r]=Number.isNaN(s)?NaN:s,this.unflagged[r]=i[r*6]<rC||s>=i[r*6]?1:0}this.raw&&this.setFlows(this.raw)}setFlows(e){var s,o;const{count:n,thr:i}=this.reaches,r=this.flowData;this.raw=e,this.bytes=e??new Uint8Array(n).fill(255),this.counts=new Array(7).fill(0);for(let a=0;a<n;a++){const l=this.bytes[a],c=Xh(l),u=(s=this.base)==null?void 0:s[a],h=l===255||(o=this.unflagged)!=null&&o[a]?0:Bg(c,i,a);r[a*4]=u===void 0||Number.isNaN(u)?255:l,r[a*4+1]=h,r[a*4+2]=r[a*4]===255?0:Math.round(oC(c,u)*Wf),r[a*4]!==255&&this.counts[h]++}this.flow.needsUpdate=!0}update(e){this.wallK.value=co.clamp(e*.02,.01,50)}setVisible(e){this.mesh.visible=e}setOpacity(e){this.opacity.value=e}pick(e,n,i,r,s,o=8){const{offsets:a,owner:l,paths:c}=this.reaches,u=this.geometry.attributes.elev.array,h=this.U,d=.001*h.exag.value*(1-h.flat.value),p=new I,v=(S,L)=>(p.set(this.xz[S*2],u[S*2]*d+.01+L,this.xz[S*2+1]).project(i),p.z<1?[(p.x+1)*r/2,(1-p.y)*s/2]:null);let x=null,m=o;const f=(S,L)=>{if(!S||!L)return 1/0;const C=L[0]-S[0],A=L[1]-S[1],D=C*C+A*A,Y=D?Math.max(0,Math.min(1,((e-S[0])*C+(n-S[1])*A)/D)):0;return Math.hypot(e-S[0]-Y*C,n-S[1]-Y*A)};for(let S=0;S<c;S++){const L=l[S];if(this.bytes[L]===255||this.flowData[L*4]===255)continue;const A=(1-h.flat.value)*this.wallK.value*this.flowData[L*4+2]/Wf;let D=v(a[S],0),Y=v(a[S],A);for(let y=a[S]+1;y<a[S+1];y++){const E=v(y,0),z=v(y,A),k=Math.min(f(D,E),f(Y,z),f(D,Y));k<m&&(m=k,x=L),D=E,Y=z}}if(x===null)return null;const _=Xh(this.bytes[x]),g=Array.from(this.reaches.thr.subarray(x*6,x*6+6));return{reach:x,share:sC(_,this.reaches.thr,x),rise:_/Math.max(this.base[x],sS),base:this.base[x],unflagged:!!this.unflagged[x],name:this.reaches.names[this.reaches.name[x]]||"Unnamed stream",order:this.reaches.order[x],q:_,thr:g,cat:this.unflagged[x]?0:Bg(_,this.reaches.thr,x)}}dispose(){this.scene.remove(this.mesh),this.geometry.dispose(),this.mesh.material.dispose(),this.flow.dispose()}}const uC="#ff4f7b",hC=`
  attribute float elev; uniform float uExag, uFlat;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.012 + 0.04 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`,dC="uniform vec3 uColor; uniform float uOpacity; void main() { gl_FragColor = vec4(uColor, uOpacity); }",fC=`
  attribute float elev; uniform float uExag, uFlat;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = 7.0;
  }`,pC=`uniform vec3 uColor; void main() {
    float r = length(gl_PointCoord - 0.5); if (r > 0.5) discard;
    gl_FragColor = vec4(mix(uColor, vec3(0.07), smoothstep(0.32, 0.4, r)), smoothstep(0.5, 0.44, r)); }`;function mC(t){const e=[];for(const n of t){const i=n.map(([r,s])=>new Be(r,s));Za.isClockWise(i)||!e.length?e.push([i,[]]):e[e.length-1][1].push(i)}return e}class gC{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,U:i,elevAt:r});const s={uExag:i.exag,uFlat:i.flat,uColor:{value:new Ve(uC)},uOpacity:{value:.8}};this.mat=new Bt({vertexShader:hC,fragmentShader:dC,uniforms:s,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-40,side:Cn}),this.dotMat=new Bt({vertexShader:fC,fragmentShader:pC,uniforms:s,transparent:!0,depthTest:!1}),this.mesh=new rn(new _t,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,this.dots=new dh(new _t,this.dotMat),this.dots.frustumCulled=!1,this.dots.renderOrder=12,e.add(this.mesh,this.dots),this.visible=!0}set(e){const n=this.P,i=[],r=[],s=[],o=[],a=[];for(const[,,u]of(e==null?void 0:e.polys)??[]){for(const[d,p]of mC(u)){if(d.length<3)continue;const v=[d,...p].flat(),x=i.length/3;for(const m of v)i.push(n.toX(m.x),0,n.toZ(m.y)),r.push(this.elevAt(m.x,m.y)??0);for(const m of Za.triangulateShape(d,p))s.push(x+m[0],x+m[1],x+m[2])}const h=u[0]??[];if(h.length){const d=h.reduce((v,x)=>v+x[0],0)/h.length,p=h.reduce((v,x)=>v+x[1],0)/h.length;o.push(n.toX(d),0,n.toZ(p)),a.push(this.elevAt(d,p)??0)}}const l=new _t;l.setAttribute("position",new lt(i,3)),l.setAttribute("elev",new lt(r,1)),l.setIndex(s);const c=new _t;c.setAttribute("position",new lt(o,3)),c.setAttribute("elev",new lt(a,1)),this.mesh.geometry.dispose(),this.dots.geometry.dispose(),this.mesh.geometry=l,this.dots.geometry=c}setVisible(e){this.visible=e,this.mesh.visible=this.dots.visible=e}dispose(){this.scene.remove(this.mesh,this.dots),this.mesh.geometry.dispose(),this.dots.geometry.dispose(),this.mat.dispose(),this.dotMat.dispose()}}class vC{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,grid:i,U:r}),this.currents=new rS(e,n,i,{n:9e3,trail:16,color:"#ffffff",scale:12,full:.6,floor:.45,onData:!0,decode:(s,o)=>s[o+3]===0?null:[(s[o]-128)/25,(s[o+1]-128)/25]}),this.currents.setVisible(!0)}set(e){this.currents.setField(e?{data:e.data,grid:this.grid}:null)}setCurrents(e){this.currents.setVisible(e)}update(e,n,i){const r=this.U.flat.value,s=.004+.045*r;if(i){const o=this.P.fromZ(i.z),a=Math.max(.05,n*.9/111);this.currents.setFocus({lon:this.P.fromX(i.x),lat:o,dlon:a/Math.cos(o*Math.PI/180),dlat:a})}this.currents.update(e,n,s+.006+.01*r)}dispose(){this.currents.dispose()}}const ka=[25,35,45,58,70,85],jf=["#f2d64b","#f5a031","#ea5a2b","#d2245a","#9b1f9e","#4b1fa8"],_C=.44704;class xC{constructor(e,n,i){this.U=e,e.gustRect.value.set(n.toX(i.west),n.toZ(i.north),n.toX(i.east),n.toZ(i.south)),e.gustStops.value=ka.map(r=>r*_C),e.gustColors.value=jf.map(r=>new Ve(r)),this.grid=i,this.visible=!1,this.has=!1}set(e){var n;if(this.has=!!e,e){const i=this.grid.cols*this.grid.rows,r=new Uint8Array(i*2);for(let o=0;o<i;o++){const a=e.data[o*4];a!==255&&(r[o*2]=Math.min(255,Math.round(a*4)),r[o*2+1]=255)}const s=new Hi(r,this.grid.cols,this.grid.rows,Xa);s.magFilter=s.minFilter=nn,s.needsUpdate=!0,(n=this.U.gust.value)==null||n.dispose(),this.U.gust.value=s}this._sync()}setVisible(e){this.visible=e,this._sync()}_sync(){this.U.gustOn.value=this.visible&&this.has?1:0}dispose(){var e;(e=this.U.gust.value)==null||e.dispose(),this.U.gust.value=null,this.U.gustOn.value=0}}const oS="#ffb020",yC=`
  attribute float elev, size; uniform float uExag, uFlat, uDpr;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = size * uDpr;
  }`,SC=`uniform vec3 uColor; void main() {
    float r = length(gl_PointCoord - 0.5); if (r > 0.5) discard;
    gl_FragColor = vec4(mix(uColor, vec3(0.07), smoothstep(0.36, 0.44, r)), 0.92 * smoothstep(0.5, 0.45, r)); }`,V0=t=>Math.min(30,5+5*Math.log10(Math.max(1,t)));class MC{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,U:i,elevAt:r}),this.mat=new Bt({vertexShader:yC,fragmentShader:SC,transparent:!0,depthTest:!1,uniforms:{uExag:i.exag,uFlat:i.flat,uDpr:{value:Math.min(devicePixelRatio||1,2)},uColor:{value:new Ve(oS)}}}),this.points=new dh(new _t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=13,e.add(this.points),this.rows=[]}set(e){this.rows=((e==null?void 0:e.out)??[]).slice().sort((o,a)=>o[3]-a[3]);const n=[],i=[],r=[];for(const[,o,a,l]of this.rows)n.push(this.P.toX(a),0,this.P.toZ(o)),i.push(this.elevAt(a,o)??0),r.push(V0(l));const s=new _t;s.setAttribute("position",new lt(n,3)),s.setAttribute("elev",new lt(i,1)),s.setAttribute("size",new lt(r,1)),this.points.geometry.dispose(),this.points.geometry=s}pick(e,n,i,r,s){var u,h;const o=(u=this.points.geometry.attributes.elev)==null?void 0:u.array,a=(h=this.points.geometry.attributes.position)==null?void 0:h.array;if(!o)return null;const l=.001*this.U.exag.value*(1-this.U.flat.value),c=new I;for(let d=this.rows.length-1;d>=0;d--){if(c.set(a[d*3],o[d]*l+.03+.05*this.U.flat.value,a[d*3+2]).project(i),c.z>=1)continue;if(Math.hypot((c.x+1)*r/2-e,(1-c.y)*s/2-n)<=Math.max(5,V0(this.rows[d][3])/2+2))return this.rows[d]}return null}setVisible(e){this.points.visible=e}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.mat.dispose()}}const G0=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",hour:"numeric",minute:"2-digit"}),wC=t=>{const e=t/36e5;return e<1?`${Math.max(1,Math.round(e*60))} min`:e<48?`${Math.round(e)} h`:`${(e/24).toFixed(1)} days`};function EC({scene:t,layer:e,canvas:n,utilities:i}){const[r,s]=K.useState(null),o=K.useRef(0);if(K.useEffect(()=>{if(!n)return;let x=null;const m=()=>{if(o.current=0,!x||!e.points.visible){s(null);return}const g=n.getBoundingClientRect(),S=e.pick(x.clientX-g.left,x.clientY-g.top,t.camera,g.width,g.height);s(S?{row:S,x:x.clientX,y:x.clientY}:null)},f=g=>{x=g.buttons?null:g,o.current||(o.current=setTimeout(m,90))},_=()=>{x=null,s(null)};return n.addEventListener("pointermove",f),n.addEventListener("pointerleave",_),()=>{n.removeEventListener("pointermove",f),n.removeEventListener("pointerleave",_),clearTimeout(o.current)}},[t,e,n]),!r)return null;const[a,,,l,c,u,h,d]=r.row,p=c??u,v=e.at;return M.jsxs("div",{className:"river-tip",style:{left:r.x,top:r.y},role:"tooltip",children:[M.jsxs("b",{children:[l.toLocaleString("en-US")," customer",l===1?"":"s"," out"]}),M.jsx("div",{className:"src",children:(i==null?void 0:i[a])??a}),h&&M.jsx("div",{className:"mono",children:h}),M.jsxs("div",{className:"mono",children:[c?"out since":"first recorded"," ",G0.format(p),v>p?` · ${wC(v-p)} by this hour`:""]}),d&&M.jsxs("div",{className:"mono",children:["utility's estimate for restoration: ",G0.format(d)]})]})}const $f={diamond:0,square:1,circle:2},TC=`
  attribute float elev, size, shape; attribute vec3 tint; uniform float uExag, uFlat, uDpr; varying vec3 vColor; varying float vShape;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    vColor = tint; vShape = shape;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = size * uDpr;
  }`,AC=`varying vec3 vColor; varying float vShape; void main() {
    vec2 q = abs(gl_PointCoord - 0.5);
    float r = vShape > 1.5 ? length(q) : vShape > 0.5 ? max(q.x, q.y) * 1.25 : q.x + q.y; if (r > 0.5) discard;
    gl_FragColor = vec4(mix(vColor, vec3(0.07), smoothstep(0.34, 0.42, r)), 0.95); }`;class aS{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,U:i,elevAt:r}),this.mat=new Bt({vertexShader:TC,fragmentShader:AC,transparent:!0,depthTest:!1,uniforms:{uExag:i.exag,uFlat:i.flat,uDpr:{value:Math.min(devicePixelRatio||1,2)}}}),this.points=new dh(new _t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=13,e.add(this.points),this.items=[]}setItems(e){this.items=e;const n=[],i=[],r=[],s=[],o=[],a=new Ve;for(const c of e)n.push(this.P.toX(c.lon),0,this.P.toZ(c.lat)),i.push(this.elevAt(c.lon,c.lat)??0),r.push(c.size),s.push(c.shape),a.set(c.color),o.push(a.r,a.g,a.b);const l=new _t;l.setAttribute("position",new lt(n,3)),l.setAttribute("elev",new lt(i,1)),l.setAttribute("size",new lt(r,1)),l.setAttribute("shape",new lt(s,1)),l.setAttribute("tint",new lt(o,3)),this.points.geometry.dispose(),this.points.geometry=l}pick(e,n,i,r,s){var u,h;const o=(u=this.points.geometry.attributes.elev)==null?void 0:u.array,a=(h=this.points.geometry.attributes.position)==null?void 0:h.array;if(!o)return null;const l=.001*this.U.exag.value*(1-this.U.flat.value),c=new I;for(let d=this.items.length-1;d>=0;d--)if(c.set(a[d*3],o[d]*l+.03+.05*this.U.flat.value,a[d*3+2]).project(i),!(c.z>=1)&&Math.hypot((c.x+1)*r/2-e,(1-c.y)*s/2-n)<=Math.max(5,this.items[d].size/2+2))return this.items[d];return null}setVisible(e){this.points.visible=e}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.mat.dispose()}}const ur={closure:"#ff4d4f",hazard:"#ff8c42",incident:"#f2f2ee",surface:"#7cc7ff"},lS="#5fd38d",Xf={closure:"closed",hazard:"storm damage",incident:"crashes and incidents",surface:"slippery or snowy"},wd=Object.keys(ur),bC={closure:15,hazard:13,incident:10,surface:9};class CC extends aS{set(e){const n=r=>wd.length-wd.indexOf(r[5]),i=((e==null?void 0:e.out)??[]).filter(r=>wd.includes(r[5])).sort((r,s)=>n(r)-n(s));this.setItems([...((e==null?void 0:e.passes)??[]).filter(r=>r.lat!=null&&!r.earlier).map(r=>({pass:r,lat:r.lat,lon:r.lon,size:12,shape:$f.square,color:r.closed?ur.closure:lS})),...i.map(r=>({row:r,lat:r[1],lon:r[2],size:bC[r[5]],shape:$f.diamond,color:ur[r[5]]}))])}}const W0=new qi,Xl=new I;class Uu extends Qy{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new lt(e,3)),this.setAttribute("uv",new lt(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Lu(n,6,1);return this.setAttribute("instanceStart",new Fi(i,3,0)),this.setAttribute("instanceEnd",new Fi(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Lu(n,6,1);return this.setAttribute("instanceColorStart",new Fi(i,3,0)),this.setAttribute("instanceColorEnd",new Fi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Yy(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),W0.setFromBufferAttribute(n),this.boundingBox.union(W0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xl.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xl)),Xl.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared(Xl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}he.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Be(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};hn.line={uniforms:uh.merge([he.common,he.fog,he.line]),vertexShader:`
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
		`};class Iu extends Bt{constructor(e){super({type:"LineMaterial",uniforms:uh.clone(hn.line.uniforms),vertexShader:hn.line.vertexShader,fragmentShader:hn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ed=new je,j0=new I,$0=new I,Vt=new je,Gt=new je,ci=new je,Td=new I,Ad=new mt,jt=new eS,X0=new I,Yl=new qi,ql=new Dr,ui=new je;let pi,Qr;function Y0(t,e,n){return ui.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),ui.multiplyScalar(1/ui.w),ui.x=Qr/n.width,ui.y=Qr/n.height,ui.applyMatrix4(t.projectionMatrixInverse),ui.multiplyScalar(1/ui.w),Math.abs(Math.max(ui.x,ui.y))}function RC(t,e){const n=t.matrixWorld,i=t.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){jt.start.fromBufferAttribute(r,a),jt.end.fromBufferAttribute(s,a),jt.applyMatrix4(n);const c=new I,u=new I;pi.distanceSqToSegment(jt.start,jt.end,u,c),u.distanceTo(c)<Qr*.5&&e.push({point:u,pointOnLine:c,distance:pi.origin.distanceTo(u),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function PC(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;pi.at(1,ci),ci.w=1,ci.applyMatrix4(e.matrixWorldInverse),ci.applyMatrix4(i),ci.multiplyScalar(1/ci.w),ci.x*=s.x/2,ci.y*=s.y/2,ci.z=0,Td.copy(ci),Ad.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(Vt.fromBufferAttribute(l,d),Gt.fromBufferAttribute(c,d),Vt.w=1,Gt.w=1,Vt.applyMatrix4(Ad),Gt.applyMatrix4(Ad),Vt.z>h&&Gt.z>h)continue;if(Vt.z>h){const g=Vt.z-Gt.z,S=(Vt.z-h)/g;Vt.lerp(Gt,S)}else if(Gt.z>h){const g=Gt.z-Vt.z,S=(Gt.z-h)/g;Gt.lerp(Vt,S)}Vt.applyMatrix4(i),Gt.applyMatrix4(i),Vt.multiplyScalar(1/Vt.w),Gt.multiplyScalar(1/Gt.w),Vt.x*=s.x/2,Vt.y*=s.y/2,Gt.x*=s.x/2,Gt.y*=s.y/2,jt.start.copy(Vt),jt.start.z=0,jt.end.copy(Gt),jt.end.z=0;const x=jt.closestPointToPointParameter(Td,!0);jt.at(x,X0);const m=co.lerp(Vt.z,Gt.z,x),f=m>=-1&&m<=1,_=Td.distanceTo(X0)<Qr*.5;if(f&&_){jt.start.fromBufferAttribute(l,d),jt.end.fromBufferAttribute(c,d),jt.start.applyMatrix4(o),jt.end.applyMatrix4(o);const g=new I,S=new I;pi.distanceSqToSegment(jt.start,jt.end,S,g),n.push({point:S,pointOnLine:g,distance:pi.origin.distanceTo(S),object:t,face:null,faceIndex:d,uv:null,uv1:null})}}}class cS extends rn{constructor(e=new Uu,n=new Iu({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)j0.fromBufferAttribute(n,o),$0.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+j0.distanceTo($0);const s=new Lu(r,2,1);return e.setAttribute("instanceDistanceStart",new Fi(s,1,0)),e.setAttribute("instanceDistanceEnd",new Fi(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;pi=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Qr=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),ql.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Qr*.5;else{const h=Math.max(r.near,ql.distanceToPoint(pi.origin));c=Y0(r,h,l.resolution)}if(ql.radius+=c,pi.intersectsSphere(ql)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Yl.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Qr*.5;else{const h=Math.max(r.near,Yl.distanceToPoint(pi.origin));u=Y0(r,h,l.resolution)}Yl.expandByScalar(u),pi.intersectsBox(Yl)!==!1&&(i?RC(this,n):PC(this,r,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(Ed),this.material.uniforms.resolution.value.set(Ed.z,Ed.w))}}function Qa(t){const e=[],n=new Set;for(const i of[...t].sort((r,s)=>s.priority-r.priority)){const r=[i.x-4,i.y-i.h/2,i.x+i.w,i.y+i.h/2];e.some(s=>!(r[2]<s[0]||r[0]>s[2]||r[3]<s[1]||r[1]>s[3]))||(n.add(i.id),e.push(r))}return n}function LC(t,e){return t.kind==="peak"?e<900:t.pop>=15e4?!0:t.pop>=4e4?e<1500:t.pop>=8e3?e<600:e<260}const DC=t=>t.kind==="peak"?6.5:Math.log10(Math.max(t.pop,10));class NC{constructor(e,n,i){Object.assign(this,{root:e,places:n,scene:i}),this.el=document.createElement("div"),this.el.className="place-layer",e.appendChild(this.el),this.items=n.map((r,s)=>({...r,id:s,x:i.P.toX(r.lon),z:i.P.toZ(r.lat),node:null,on:!1})),this.visible=!0,this._n=0}_node(e){if(!e.node){const n=document.createElement("div");n.className=`place ${e.kind}${e.pop>=15e4?" major":""}`;const i=document.createElement("span");i.textContent=e.kind==="peak"&&e.height?`${e.name} ${e.height.toLocaleString()} m`:e.name,n.append(document.createElement("i"),i),this.el.appendChild(n),e.node=n,e.w=14+i.textContent.length*(e.kind==="city"?6.6:6.1),e.h=16}return e.node}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=e.e,r=innerWidth,s=innerHeight,o=[];for(const l of this.items){if(!LC(l,n)){l.cand=!1;continue}const[c,u,h]=e.project(l.x,(l.elev??0)*i+.05,l.z);l.cand=h<1&&c>-40&&c<r+40&&u>-20&&u<s+20,l.cand&&(this._node(l),l.sx=c,l.sy=u,o.push({id:l.id,x:c,y:u,w:l.w,h:l.h,priority:DC(l)}))}const a=Qa(o);for(const l of this.items){const c=l.cand&&a.has(l.id);c&&(l.node.style.transform=`translate(${Math.round(l.sx)}px, ${Math.round(l.sy)}px)`),c!==l.on&&l.node&&(l.node.style.opacity=c?1:0,l.on=c)}}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}function UC(t){return t.split(",")[0].split(/\s+(?:near|nr|at|hw|pp|on)\s+/i)[0].replace(/\s+\(.*$/,"").toLowerCase().replace(/\b[a-z]/g,n=>n.toUpperCase()).replace(/\bLk\b/,"Lake").replace(/\b(And|Of)\b/g,n=>n.toLowerCase())}function Fu(t,e,n="elev"){var o;const i=t[n]??[],r=i.findIndex(a=>a!==null);if(r<0||e<r)return null;let s=Math.min(e,i.length-1);for(;s>=0&&i[s]===null;)s--;return s<r?null:{elev:i[s],change:i[s]-i[r],at:s,latest:s<e,storage:((o=t.storage)==null?void 0:o[s])??null,first:r,key:n}}const at=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),q0=t=>`${t>.005?"+":t<-.005?"−":"±"}${Math.abs(t).toFixed(1)} ft`;class za{constructor(e,n){Object.assign(this,{root:e,scene:n,file:this.constructor.file,kind:this.constructor.kind}),this.el=document.createElement("div"),this.el.className=`place-layer res-layer ${this.kind}`,e.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip",this.el.appendChild(this.tip),this.items=[],this.k=0,this.k0=0,this.kAbs=0,this.visible=!0,this._n=0}async load(e){const n=await fetch(`${e.base}${this.file}?u=${encodeURIComponent(e.updated)}`);if(!n.ok)return;const{sites:i,k0:r=0}=await n.json();this.k0=r;for(const o of this.items)o.node.remove();const s=this.scene.P;this.items=i.filter(o=>this.keep(o)).map((o,a)=>{const l=document.createElement("div");l.className=`res ${this.kind}`,l.innerHTML='<i></i><span class="n"></span><span class="v mono"></span>',l.addEventListener("pointerenter",()=>{this.hover=c,this._tip()}),l.addEventListener("pointerleave",()=>{this.hover===c&&(this.hover=null,this.tip.style.opacity=0)}),this.el.appendChild(l);const c=this.prepare({...o,id:a,short:UC(o.name),node:l,x:s.toX(o.lon),z:s.toZ(o.lat),on:!1});return l.querySelector(".n").textContent=c.short,c}),this.setHour(this.kAbs)}setHour(e){this.kAbs=e,e-=this.k0??0,this.k=e;for(const n of this.items){const i=n.now=Fu(n,e,n.key??"elev"),r=this.step(n);n.node.classList.toggle("up",!!i&&i.change>r),n.node.classList.toggle("down",!!i&&i.change<-r),n.node.classList.toggle("latest",!!(i!=null&&i.latest)),n.node.classList.toggle("stuck",!!n.stuck),n.node.querySelector(".v").textContent=n.stuck?"no live data":i?this.valueText(n,i):"—",n.w=22+(n.short.length+8)*6.1}this.hover&&this._tip()}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=innerWidth,r=innerHeight,s=[];for(const a of this.items){if(a.cand=!1,n>900||!a.now)continue;const[l,c,u]=e.project(a.x,e.elevAt(a.lon,a.lat)*e.e+.05,a.z);u<1&&l>-40&&l<i+40&&c>-20&&c<r+20&&(a.cand=!0,a.sx=l,a.sy=c,s.push({id:a.id,x:l,y:c,w:a.w,h:18,priority:(a.stuck?5:10)+Math.abs(a.now.change)/this.step(a)*.3}))}const o=Qa(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}keep(){return!0}prepare(e){return e}step(){return .3}valueText(e,n){return q0(n.change)}tipBody(e,n){return(e.stuck?`<div class="warn">This feed has reported exactly ${n==null?void 0:n.elev.toFixed(2)} ft every hour of the window: a stuck or placeholder value, not a measurement.</div>`:"")+(e.stuck?"":n?`<div class="mono">${n.elev.toFixed(2)} ft (${at(e.datum)}) · ${q0(n.change)} since the storm began${n.latest?" · latest reading":""}</div>`+(n.storage!==null?`<div class="mono">storage ${Math.round(n.storage).toLocaleString("en-US")} acre-ft</div>`:""):"<div>no reading yet</div>")}caption(e,n,i){return`${n.toFixed(1)} / ${i.toFixed(1)} ft · whole window · provisional`}_tip(){const e=this.hover,n=e==null?void 0:e.now;if(!e)return;const i=e[e.key??"elev"],r=i.map((h,d)=>[d,h]).filter(([,h])=>h!==null),s=Math.min(...r.map(h=>h[1])),o=Math.max(...r.map(h=>h[1])),a=i.length,l=h=>h/(a-1)*220,c=h=>44-(h-s)/Math.max(o-s,.1)*40,u=r.map(([h,d],p)=>`${p?"L":"M"}${l(h).toFixed(1)},${c(d).toFixed(1)}`).join("");this.tip.innerHTML=`<b>${at(e.short)}</b><div class="sub">${at(e.name)} · ${at(e.source??e.src??"USGS")}</div>`+this.tipBody(e,n)+(r.length?`<svg width="220" height="48" aria-hidden="true"><path d="${u}" /><line x1="${l(this.k)}" x2="${l(this.k)}" y1="0" y2="48" /></svg><div class="sub mono">${this.caption(e,o,s)}</div>`:""),this.tip.style.transform=`translate(${Math.round(e.sx+12)}px, ${Math.round(e.sy+14)}px)`,this.tip.style.opacity=1}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}Yn(za,"file","rivers/reservoirs.json"),Yn(za,"kind","");const ca={cancelled:"#ff4d4f","out of service":"#ff4d4f","at risk":"#ffa53a",delayed:"#f6d04d",resuming:"#5fd38d"},uS={cancelled:"sailings cancelled","out of service":"out of service","at risk":"at risk of cancellation",delayed:"delayed",resuming:"resuming"},Yf={weather:"wind and seas",tide:"tide",mechanical:"mechanical",crew:"crew",emergency:"emergency"},IC={wsf:"Washington State Ferries alert",bcf:"BC Ferries service notice",news:"News report"},FC="#14304a",OC=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}),kC='<svg viewBox="0 0 20 14" aria-hidden="true"><path d="M2 8h16l-2.6 4.2H4.8z"/><path d="M5 8V5.2h8.6L15 8z" opacity=".8"/><path d="M8 5.2V3h2.6v2.2z" opacity=".7"/></svg>',zC='<svg viewBox="0 0 16 12" aria-hidden="true"><path d="M1 4h9a2.2 2.2 0 1 0-2.2-2.2M1 7.5h12a2 2 0 1 1-2 2M1 11h6"/></svg>';function BC(t){const e=[0];for(let s=1;s<t.length;s++)e.push(e[s-1]+Math.hypot((t[s][0]-t[s-1][0])*Math.cos(t[s][1]*Math.PI/180),t[s][1]-t[s-1][1]));const n=e[e.length-1]/2,i=Math.max(1,e.findIndex(s=>s>=n)),r=(n-e[i-1])/(e[i]-e[i-1]||1);return[t[i-1][0]+r*(t[i][0]-t[i-1][0]),t[i-1][1]+r*(t[i][1]-t[i-1][1])]}function hS(t){var n;const e=new Map;for(const i of(t==null?void 0:t.items)??[])for(const r of i.routes.length?i.routes:[""]){const s=e.get(r)??{items:[]};s.items.push(i),(!s.newest||i.posted>s.newest.posted)&&(s.newest=i),e.set(r,s)}for(const i of e.values())i.status=i.newest.status,i.cause=i.newest.cause??((n=i.items.find(r=>r.cause))==null?void 0:n.cause)??null,i.items.sort((r,s)=>s.posted-r.posted);return e}class bd{constructor(e,n,i,r,s){this.mat=new Iu({color:n,linewidth:i,opacity:r,transparent:!0,depthTest:!1,vertexColors:n===null}),this.geometry=new Uu,this.obj=new cS(this.geometry,this.mat),this.obj.frustumCulled=!1,this.obj.renderOrder=s,this.obj.visible=!1,this.n=0,e.add(this.obj)}set(e,n){this.n=e.length,e.length&&(this.geometry.dispose(),this.geometry=new Uu,this.obj.geometry=this.geometry,this.geometry.setPositions(e),n&&this.geometry.setColors(n))}dispose(e){e.remove(this.obj),this.geometry.dispose(),this.mat.dispose()}}class HC{constructor(e,n,i){Object.assign(this,{scene3:e,s:i,P:i.P}),this.base=new bd(e,FC,1.6,.7,9),this.casing=new bd(e,"#101012",5.5,.6,10),this.hot=new bd(e,null,3,.95,11),this.el=document.createElement("div"),this.el.className="place-layer res-layer",n.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip ferry-tip",this.el.appendChild(this.tip),this.routes=new Map,this.items=[],this.visible=!0,this._n=0,this.states=new Map}async load(e){const n=await fetch(`${e.base}ferries/routes.json?v=${e.version}&u=${encodeURIComponent(e.updated)}`);if(!n.ok)return;const i=this.P;for(const r of await n.json()){const s=r.lines.reduce((c,u)=>u.length>c.length?u:c,r.lines[0]),o=[];for(const c of r.lines)for(let u=1;u<c.length;u++)o.push(i.toX(c[u-1][0]),0,i.toZ(c[u-1][1]),i.toX(c[u][0]),0,i.toZ(c[u][1]));const[a,l]=BC(s);this.routes.set(r.id,{...r,segs:o,x:i.toX(a),z:i.toZ(l)})}this.base.set([...this.routes.values()].flatMap(r=>r.segs)),this.set(this.frame??null)}set(e){this.frame=e,this.states=hS(e);const n=[],i=[],r=new Ve;for(const s of this.items)s.node.remove();this.items=[];for(const[s,o]of this.states){const a=this.routes.get(s);if(!a)continue;r.set(ca[o.status]),n.push(...a.segs);for(let u=0;u<a.segs.length/3;u++)i.push(r.r,r.g,r.b);const l=document.createElement("div");l.className="ferry",l.dataset.status=o.status,l.classList.toggle("weather",o.cause==="weather"),l.innerHTML=`${kC}<span class="n">${at(a.name)}</span><span class="v">${at(o.status)}${o.cause==="weather"?zC:o.cause?` · ${at(Yf[o.cause])}`:""}</span>`;const c={id:this.items.length,r:a,st:o,node:l,on:!1,w:40+(a.name.length+o.status.length+4)*6};l.addEventListener("pointerenter",()=>{this.hover=c,this._tip()}),l.addEventListener("pointerleave",()=>{this.hover===c&&(this.hover=null,this.tip.style.opacity=0)}),l.addEventListener("click",()=>{var h;const u=(h=o.items.find(d=>d.url))==null?void 0:h.url;u&&window.open(u,"_blank","noopener")}),this.el.appendChild(l),this.items.push(c)}this.casing.set(n),this.hot.set(n,i),this.setVisible(this.visible),this.hover&&(this.hover=this.items.find(s=>s.r.id===this.hover.r.id)??null,this.hover||(this.tip.style.opacity=0))}update(){if(!this.visible)return;const e=this.s,n=.02+.05*e.U.flat.value;for(const a of[this.base,this.casing,this.hot])a.obj.position.y=n,a.mat.resolution.set(innerWidth,innerHeight);if(this._n++%2)return;const i=innerWidth,r=innerHeight,s=[];for(const a of this.items){const[l,c,u]=e.project(a.r.x,n,a.r.z);a.cand=u<1&&l>-40&&l<i+40&&c>-20&&c<r+20,a.cand&&(a.sx=l,a.sy=c,s.push({id:a.id,x:l,y:c,w:a.w,h:20,priority:(a.st.cause==="weather"?20:0)+(5-Object.keys(ca).indexOf(a.st.status))}))}const o=Qa(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}_tip(){const e=this.hover;if(!e)return;const n=i=>`<div class="fn"><div class="st"><i style="background:${ca[i.status]}"></i>${at(uS[i.status])}${i.cause?` · ${at(Yf[i.cause])}`:""}</div><div class="t">${at(i.title)}</div>${i.text&&i.text!==i.title?`<div class="x">${at(i.text.length>280?i.text.slice(0,277)+"…":i.text)}</div>`:""}<div class="sub">${at(i.src==="news"?`News report · ${i.outlet}`:`${IC[i.src]} · posted ${OC.format(i.posted)}`)}</div></div>`;this.tip.innerHTML=`<b>${at(e.r.name)}</b><div class="sub">${e.r.op==="wsf"?"Washington State Ferries":"BC Ferries"}</div>`+e.st.items.slice(0,4).map(n).join("")+(e.st.items.some(i=>i.url)?'<div class="sub">click the ship for the source</div>':""),this.tip.style.transform=`translate(${Math.round(Math.min(e.sx+12,innerWidth-310))}px, ${Math.round(Math.min(e.sy+14,innerHeight-260))}px)`,this.tip.style.opacity=1}setVisible(e){this.visible=e,this.el.style.display=e?"":"none";for(const n of[this.base,this.casing,this.hot])n.obj.visible=e&&n.n>0}dispose(){for(const e of[this.base,this.casing,this.hot])e.dispose(this.scene3);this.el.remove()}}const qf={overflowing:"#b65cff"},VC={overflowing:"overflowing"};class GC extends aS{set(e){const n=((e==null?void 0:e.out)??[]).filter(i=>qf[i[5]]);this.setItems(n.map(i=>({row:i,lat:i[1],lon:i[2],size:13,shape:$f.circle,color:qf[i[5]]})))}}const $s=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}),K0=t=>{const e=t/36e5;return e<1?`${Math.max(1,Math.round(e*60))} min`:e<48?`${Math.round(e)} h`:`${(e/24).toFixed(1)} days`},WC={wsdot:"WSDOT",drivebc:"DriveBC"};function Z0({scene:t,layer:e,canvas:n,render:i}){const[r,s]=K.useState(null),o=K.useRef(0);return K.useEffect(()=>{if(!n)return;let a=null;const l=()=>{if(o.current=0,!a||!e.points.visible){s(null);return}const h=n.getBoundingClientRect(),d=e.pick(a.clientX-h.left,a.clientY-h.top,t.camera,h.width,h.height);s(d?{it:d,x:a.clientX,y:a.clientY}:null)},c=h=>{a=h.buttons?null:h,o.current||(o.current=setTimeout(l,90))},u=()=>{a=null,s(null)};return n.addEventListener("pointermove",c),n.addEventListener("pointerleave",u),()=>{n.removeEventListener("pointermove",c),n.removeEventListener("pointerleave",u),clearTimeout(o.current)}},[t,e,n]),r?M.jsx("div",{className:"river-tip",style:{left:r.x,top:r.y},role:"tooltip",children:i(r.it,e)}):null}function jC({pass:t,row:e}){var l;if(t)return M.jsxs(M.Fragment,{children:[M.jsxs("b",{children:[t.name,t.closed?" · closed":""]}),M.jsxs("div",{className:"src",children:["WSDOT mountain pass · ",(l=t.ft)==null?void 0:l.toLocaleString("en-US")," ft",t.f!=null?` · ${t.f}°F`:""]}),t.road&&M.jsx("div",{className:"mono",children:t.road}),t.weather&&M.jsx("div",{className:"mono",children:t.weather}),[...new Set(t.restrict.filter(Boolean))].map(c=>M.jsx("div",{className:"mono",children:c},c)),t.closed&&t.closed_since&&M.jsxs("div",{className:"src",children:["closed since ",$s.format(t.closed_since)]}),t.updated&&M.jsxs("div",{className:"src",children:["reported ",$s.format(t.updated)]})]});const[n,,,,,i,,r,s,o,a]=e;return M.jsxs(M.Fragment,{children:[M.jsxs("b",{children:[r?`${r} · `:"",Xf[i]]}),M.jsx("div",{className:"src",children:WC[n]??n}),M.jsx("div",{className:"mono",children:s}),M.jsx("div",{className:"src",children:o?`since ${$s.format(o)}`:`first recorded ${$s.format(a)}`})]})}function $C({row:t},e){const[,,,n,i,r,s,o,a]=t;return M.jsxs(M.Fragment,{children:[M.jsx("b",{children:n}),M.jsxs("div",{className:"src",children:[i," sewer outfall · ",VC[r]]}),r==="overflowing"&&s&&M.jsxs("div",{className:"mono",children:[o?"since":"recorded overflowing since"," ",$s.format(s),e.at>s&&!a?` · ${K0(e.at-s)} by this hour`:""]}),a&&M.jsxs("div",{className:"mono",children:["stopped ",$s.format(a)," after ",K0(a-s)]}),M.jsx("div",{className:"src",children:"real-time status, not yet reviewed by the utility"})]})}const jo=["minor","moderate","major"];function XC(t,e){const n=t.obs[e],i=t.pred[e];if(n!=null)return{level:n,pred:i,surge:i==null?null:n-i,type:"obs"};let r=-1;for(let s=t.obs.length-1;s>=0;s--)if(t.obs[s]!==null){r=s;break}return e>r&&i!==null&&i!==void 0?{level:i,pred:i,surge:null,type:"pred"}:null}const YC=(t,e)=>{let n=null;for(const i of jo)t.flood[i]!==void 0&&e>=t.flood[i]&&(n=i);return n},Q0=t=>`${t>=.05?"+":t<=-.05?"−":"±"}${Math.abs(t).toFixed(1)}`;class qC{constructor(e,n){Object.assign(this,{root:e,scene:n}),this.el=document.createElement("div"),this.el.className="place-layer res-layer",e.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip gauge-tip",this.el.appendChild(this.tip),this.items=[],this.k=0,this.k0=0,this.kAbs=0,this.visible=!0,this._n=0,this.maxSurge=null}async load(e){const n=await fetch(`${e.base}sea/tides.json?u=${encodeURIComponent(e.updated)}`);if(!n.ok)return;const{sites:i,k0:r=0}=await n.json();this.k0=r;for(const o of this.items)o.node.remove();const s=this.scene.P;this.items=i.map((o,a)=>{const l=document.createElement("div");l.className="gauge tide",l.innerHTML='<i></i><span class="n"></span><span class="v mono"></span>';const c={...o,id:a,node:l,x:s.toX(o.lon),z:s.toZ(o.lat),on:!1};return l.addEventListener("pointerenter",()=>{this.hover=c,this._tip()}),l.addEventListener("pointerleave",()=>{this.hover===c&&(this.hover=null,this.tip.style.opacity=0)}),l.querySelector(".n").textContent=o.name.split(",")[0],this.el.appendChild(l),c}),this.setHour(this.kAbs)}setHour(e){this.kAbs=e,e-=this.k0??0,this.k=e,this.maxSurge=null;for(const n of this.items){const i=n.value=XC(n,e),r=n.cat=i?YC(n,i.level):null;(i==null?void 0:i.surge)!==null&&(i==null?void 0:i.surge)!==void 0&&(!this.maxSurge||i.surge>this.maxSurge.surge)&&(this.maxSurge={surge:i.surge,name:n.name}),n.node.dataset.cat=r??"normal",n.node.classList.toggle("fc",(i==null?void 0:i.type)==="pred"),n.node.querySelector(".v").textContent=i?`${i.level.toFixed(1)} ft${i.surge!==null?` · surge ${Q0(i.surge)}`:""}`:"—",n.w=22+(n.node.querySelector(".n").textContent.length+20)*6}this.hover&&this._tip()}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=innerWidth,r=innerHeight,s=[];for(const a of this.items){if(a.cand=!1,!a.value||n>1500)continue;const[l,c,u]=e.project(a.x,.05,a.z);u<1&&l>-40&&l<i+40&&c>-20&&c<r+20&&(a.cand=!0,a.sx=l,a.sy=c,s.push({id:a.id,x:l,y:c,w:a.w,h:18,priority:25+(a.cat?10*(jo.indexOf(a.cat)+1):0)+Math.abs(a.value.surge??0)}))}const o=Qa(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}_tip(){const e=this.hover;if(!e)return;const n=e.value,i=e.pred.length,r=[...e.obs,...e.pred].filter(h=>h!==null),s=Math.min(...r),o=Math.max(...r,e.flood.minor??-1/0),a=h=>h/(i-1)*220,l=h=>50-(h-s)/Math.max(o-s,.5)*46,c=h=>h.map((d,p)=>d===null?null:[p,d]).filter(Boolean).map(([d,p],v)=>`${v?"L":"M"}${a(d).toFixed(1)},${l(p).toFixed(1)}`).join(""),u=jo.filter(h=>e.flood[h]!==void 0&&e.flood[h]<=o+.01).map(h=>`<line class="cat" stroke="${{minor:"#f39431",moderate:"#e2483a",major:"#b03fd0"}[h]}" x1="0" x2="220" y1="${l(e.flood[h]).toFixed(1)}" y2="${l(e.flood[h]).toFixed(1)}" />`).join("");this.tip.innerHTML=`<b>${at(e.name)}</b><div class="sub">NOAA tide gauge ${at(e.id)} · ft above MLLW</div>`+(n?`<div class="mono">${n.type==="obs"?"observed":"predicted tide"} ${n.level.toFixed(2)} ft`+(n.type==="obs"&&n.pred!==null?` · predicted ${n.pred.toFixed(2)} · surge ${Q0(n.surge)} ft`:"")+"</div>":"<div>no reading for this hour</div>")+`<div class="cat-line">${e.cat?`coastal flooding: ${e.cat}`:"below coastal flood levels"}</div>`+(jo.some(h=>e.flood[h]!==void 0)?`<div class="sub mono">${jo.filter(h=>e.flood[h]!==void 0).map(h=>`${h} ${e.flood[h]}`).join(" · ")} ft (${at(e.flood.source??"")})</div>`:'<div class="sub">no flood levels set for this station</div>')+`<svg width="220" height="54" aria-hidden="true">${u}<path class="fc" d="${c(e.pred)}" /><path d="${c(e.obs)}" /><line x1="${a(this.k)}" x2="${a(this.k)}" y1="0" y2="54" /></svg><div class="sub">solid: observed · dashed: predicted tide</div>`,this.tip.style.transform=`translate(${Math.round(Math.min(e.sx+12,innerWidth-300))}px, ${Math.round(Math.min(e.sy+14,innerHeight-240))}px)`,this.tip.style.opacity=1}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}const Kl=t=>t>=100?Math.round(t).toLocaleString("en-US"):t>=1?t.toFixed(1):t.toFixed(2),KC=35.3147;function ZC({scene:t,layer:e,canvas:n}){const[i,r]=K.useState(null),s=K.useRef(0);return K.useEffect(()=>{if(!n)return;let o=null;const a=()=>{if(s.current=0,!o||!e.mesh.visible){r(null);return}const u=n.getBoundingClientRect(),h=e.pick(o.clientX-u.left,o.clientY-u.top,t.camera,u.width,u.height);r(h?{...h,x:o.clientX,y:o.clientY}:null)},l=u=>{o=u.buttons?null:u,s.current||(s.current=setTimeout(a,90))},c=()=>{o=null,r(null)};return n.addEventListener("pointermove",l),n.addEventListener("pointerleave",c),()=>{n.removeEventListener("pointermove",l),n.removeEventListener("pointerleave",c),clearTimeout(s.current)}},[t,e,n]),i?M.jsxs("div",{className:"river-tip",style:{left:i.x,top:i.y},role:"tooltip",children:[M.jsx("b",{children:i.name}),e.label&&M.jsx("div",{className:"src",children:e.label}),M.jsxs("div",{className:"mono",children:[Kl(i.q)," m³/s · ",Kl(i.q*KC)," cfs"]}),Number.isFinite(i.rise)&&M.jsxs("div",{className:"mono",children:[i.rise>=1?`${i.rise.toFixed(1)}×`:`${Math.round(i.rise*100)}% of`," its flow before the storm (",Kl(i.base)," m³/s)"]}),Number.isFinite(i.share)&&M.jsxs("div",{className:"mono",children:[Math.round(i.share*100),"% of its 2-year flood flow"]}),M.jsxs("div",{className:"cat",children:[M.jsx("i",{style:{background:mh[i.cat]}}),i.unflagged?"flood thresholds not meaningful here (tiny, or already exceeded before the storm); not flagged":i.cat?`at or above the ${Nu[i.cat]}`:"below the high-water flow"]}),M.jsx("table",{className:"mono",children:M.jsx("tbody",{children:i.thr.map((o,a)=>o>0&&M.jsxs("tr",{className:i.cat>a?"hit":"",children:[M.jsx("td",{children:l1[a]}),M.jsxs("td",{children:[Kl(o)," m³/s"]})]},a))})})]}):null}const eo=["action","minor","moderate","major"],QC={action:"action stage",minor:"minor flood",moderate:"moderate flood",major:"major flood"},gc={normal:"#6fb4e8",action:"#f2cf3d",minor:"#f39431",moderate:"#e2483a",major:"#b03fd0"},Kf=["p2","p10","rec"],JC={p2:"above a typical year's peak",p10:"above the 1-in-10-year peak",rec:"above the record"},dS={p2:"yearly peak",p10:"10-yr peak",rec:"record"},Zf={p2:"#f2cf3d",p10:"#e2483a",rec:"#b03fd0"},Cd={q:"m³/s",h:"m"},Cs=(t,e)=>e==="h"?t.toFixed(2):t>=100?Math.round(t).toLocaleString("en-US"):t.toFixed(1);function eR(t,e){var i;const n=t.rate&&((i=t.peaks)==null?void 0:i[t.rate]);return n?e>=n.rec[0]?"rec":n.p10!==void 0&&e>=n.p10?"p10":e>=n.p2?"p2":null:null}function tR(t,e){let n=null;for(const i of eo)t.cats[i]!==void 0&&e>=t.cats[i]&&(n=i);return n}function nR(t,e,n=!0){if(t.obs[e]!==null&&t.obs[e]!==void 0)return{stage:t.obs[e],type:"obs"};let i=-1;for(let r=t.obs.length-1;r>=0;r--)if(t.obs[r]!==null){i=r;break}return e<i?null:n&&t.fc[e]!==null&&t.fc[e]!==void 0?{stage:t.fc[e],type:"fc"}:i>=0&&e-i<=2?{stage:t.obs[i],type:"obs",latest:!0}:null}function iR(t,e){let n=null,i=null;for(const[r,s]of t.impacts)e>=r?n={stage:r,text:s}:i||(i={stage:r,text:s});return{now:n,next:i}}class rR{constructor(e,n){Object.assign(this,{root:e,scene:n}),this.el=document.createElement("div"),this.el.className="place-layer res-layer",e.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip gauge-tip",this.el.appendChild(this.tip),this.items=[],this.k=0,this.k0=0,this.kAbs=0,this.whatIf=!0,this.visible=!0,this._n=0,this.counts={}}async load(e){const n=a=>fetch(`${e.base}rivers/${a}?u=${encodeURIComponent(e.updated)}`).then(l=>l.ok?l.json():null,()=>null),[i,r]=await Promise.all([n("gauges.json"),n("bc_gauges.json")]);if(!i&&!r)return;this.k0=(i??r).k0??0;for(const a of this.items)a.node.remove();const s=this.scene.P,o=((r==null?void 0:r.sites)??[]).map(a=>{const l=a.rate??(a.q?"q":"h");return{...a,station:a.id,key:l,obs:a[l],fc:[]}});this.items=[...(i==null?void 0:i.sites)??[],...o].map((a,l)=>{const c=document.createElement("div");c.className="gauge",c.innerHTML='<i></i><span class="n"></span><span class="v mono"></span>';const u={...a,id:l,node:c,x:s.toX(a.lon),z:s.toZ(a.lat),on:!1};return c.addEventListener("pointerenter",()=>{this.hover=u,this._tip()}),c.addEventListener("pointerleave",()=>{this.hover===u&&(this.hover=null,this.tip.style.opacity=0)}),c.querySelector(".n").textContent=a.name.replace(/\s+River\b/," R.").replace(/\s+near\s+/i," nr ").replace(/\s+at\s+/i," at "),this.el.appendChild(c),u}),this.setHour(this.kAbs,this.whatIf)}setHour(e,n=this.whatIf){this.kAbs=e,e-=this.k0??0,this.k=e,this.whatIf=n,this.counts={action:0,minor:0,moderate:0,major:0,p2:0,p10:0,rec:0};for(const i of this.items){const r=i.src==="WSC",s=i.value=nR(i,e,n),o=i.cat=s?r?eR(i,s.stage):tR(i,s.stage):null;o&&this.counts[o]++,i.node.dataset.cat=o??"normal",i.node.classList.toggle("fc",(s==null?void 0:s.type)==="fc"),i.node.classList.toggle("none",!s),i.node.querySelector(".v").textContent=s?r?`${Cs(s.stage,i.key)} ${Cd[i.key]}${o?` · ${dS[o]}`:""}`:`${s.stage.toFixed(1)} ft${o?` · ${o}`:""}`:"—",i.w=22+(i.node.querySelector(".n").textContent.length+14)*6}this.hover&&this._tip()}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=innerWidth,r=innerHeight,s=[];for(const a of this.items){if(a.cand=!1,!a.value||!a.cat&&n>260||n>2600)continue;const[l,c,u]=e.project(a.x,e.elevAt(a.lon,a.lat)*e.e+.05,a.z);if(!(u<1&&l>-40&&l<i+40&&c>-20&&c<r+20))continue;a.cand=!0,a.sx=l,a.sy=c;const h=a.cat?a.src==="WSC"?[2,3,4][Kf.indexOf(a.cat)]:eo.indexOf(a.cat)+1:0;s.push({id:a.id,x:l,y:c,w:a.w,h:18,priority:20+10*h})}const o=Qa(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}_tip(){var p,v;const e=this.hover;if(!e)return;if(e.src==="WSC")return this._bcTip(e);const n=e.value,i=e.obs.length,r=[...e.obs,...e.fc].filter(x=>x!==null);Object.values(e.cats);const s=Math.min(...r),o=Math.max(...r,e.cats.minor??e.cats.action??-1/0),a=x=>x/(i-1)*220,l=x=>50-(x-s)/Math.max(o-s,.5)*46,c=x=>x.map((m,f)=>m===null?null:[f,m]).filter(Boolean).map(([m,f],_)=>`${_?"L":"M"}${a(m).toFixed(1)},${l(f).toFixed(1)}`).join(""),u=eo.filter(x=>e.cats[x]!==void 0&&e.cats[x]<=o+.01).map(x=>`<line class="cat" stroke="${gc[x]}" x1="0" x2="220" y1="${l(e.cats[x]).toFixed(1)}" y2="${l(e.cats[x]).toFixed(1)}" />`).join(""),h=n?iR(e,n.stage):null,d=(n==null?void 0:n.type)==="fc"?`NWS forecast issued ${at(((p=e.fcIssued)==null?void 0:p.replace("T"," "))??"")} UTC`:n!=null&&n.latest?"latest measurement":"measured";this.tip.innerHTML=`<b>${at(e.name)}</b><div class="sub">NWS ${at(e.lid)}${e.usgs?` · USGS ${at(e.usgs)}`:""}</div>`+(n?`<div class="mono">${n.stage.toFixed(2)} ft · ${d}</div><div class="cat-line"><i style="background:${gc[e.cat??"normal"]}"></i>${e.cat?QC[e.cat]:"below flood stages"}</div>`:"<div>no reading for this hour</div>")+`<div class="sub mono">${eo.filter(x=>e.cats[x]!==void 0).map(x=>`${x} ${e.cats[x]}`).join(" · ")} ft</div>`+(h!=null&&h.now?`<div class="impact"><b>At ${h.now.stage} ft:</b> ${at(h.now.text)}</div>`:"")+(h!=null&&h.next?`<div class="impact next"><b>At ${h.next.stage} ft${n?` (${(h.next.stage-n.stage).toFixed(1)} ft higher)`:""}:</b> ${at(h.next.text)}</div>`:"")+`<svg width="220" height="54" aria-hidden="true">${u}<path d="${c(e.obs)}" /><path class="fc" d="${c(e.fc)}" /><line x1="${a(this.k)}" x2="${a(this.k)}" y1="0" y2="54" /></svg>`+((v=e.crests)!=null&&v.length?`<div class="sub mono">record ${e.crests[0][0]} ft (${at(e.crests[0][1])})</div>`:""),this.tip.style.transform=`translate(${Math.round(Math.min(e.sx+12,innerWidth-300))}px, ${Math.round(Math.min(e.sy+14,innerHeight-260))}px)`,this.tip.style.opacity=1}_place(e){this.tip.style.transform=`translate(${Math.round(Math.min(e.sx+12,innerWidth-300))}px, ${Math.round(Math.min(e.sy+14,innerHeight-260))}px)`,this.tip.style.opacity=1}_bcTip(e){var m;const n=e.value,i=e.obs.length,r=Cd[e.key],s=e.rate?e.peaks[e.rate]:null,o=[["p2",s==null?void 0:s.p2],["p10",s==null?void 0:s.p10],["rec",s==null?void 0:s.rec[0]]].filter(([,f])=>f!=null),a=e.obs.filter(f=>f!==null),l=Math.min(...a),c=Math.max(...a,(s==null?void 0:s.p2)??-1/0),u=f=>f/(i-1)*220,h=f=>50-(f-l)/Math.max(c-l,e.key==="h"?.1:1)*46,d=e.obs.map((f,_)=>f===null?null:[_,f]).filter(Boolean).map(([f,_],g)=>`${g?"L":"M"}${u(f).toFixed(1)},${h(_).toFixed(1)}`).join(""),p=o.filter(([,f])=>f<=c+.001).map(([f,_])=>`<line class="cat" stroke="${Zf[f]}" x1="0" x2="220" y1="${h(_).toFixed(1)}" y2="${h(_).toFixed(1)}" />`).join(""),v=e.key==="q"?"h":"q",x=(m=e[v])==null?void 0:m[this.k];this.tip.innerHTML=`<b>${at(e.name)}</b><div class="sub">Water Survey of Canada ${at(e.station)} · provisional</div>`+(n?`<div class="mono">${Cs(n.stage,e.key)} ${r} · ${n.latest?"latest measurement":"measured"}${x!=null?` <span class="sub">(${e.key==="q"?"level":"flow"} ${Cs(x,v)} ${Cd[v]})</span>`:""}</div><div class="cat-line"><i style="background:${e.cat?Zf[e.cat]:gc.normal}"></i>${e.cat?JC[e.cat]:s?"below a typical year's peak":"no peaks to compare with"}</div>`:"<div>no reading for this hour</div>")+(s?`<div class="sub mono">peaks over ${s.n} years: typical ${Cs(s.p2,e.key)}${s.p10!==void 0?` · 1-in-10 ${Cs(s.p10,e.key)}`:""} · record ${Cs(s.rec[0],e.key)} ${r} (${at(s.rec[1])})</div>`:"")+`<svg width="220" height="54" aria-hidden="true">${p}<path d="${d}" /><line x1="${u(this.k)}" x2="${u(this.k)}" y1="0" y2="54" /></svg>`,this._place(e)}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}const sR=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;function oR(t,e,n,i){const[r,s]=t.ll,o=[e.toX(r),(n(r,s)??0)*i,e.toZ(s)],a=Math.sin(t.polar),l=Math.cos(t.polar),c=t.az??0;return{pos:[o[0]+t.dist*a*Math.sin(c),o[1]+t.dist*l,o[2]+t.dist*a*Math.cos(c)],target:o}}function aR(t,e,n,i){let r=n[0]-e[0],s=n[2]-e[2];const o=Math.hypot(r,s)||1;r/=o,s/=o;const a=-s,l=r;let c=0,u=0;t.has("ArrowUp")&&(c+=r,u+=s),t.has("ArrowDown")&&(c-=r,u-=s),t.has("ArrowRight")&&(c+=a,u+=l),t.has("ArrowLeft")&&(c-=a,u-=l);const h=Math.hypot(c,u);if(!h)return[0,0,0];const p=.3*Math.hypot(e[0]-n[0],e[1]-n[1],e[2]-n[2])*i/h;return[c*p,0,u*p]}const Em=t=>!!t&&(t.isContentEditable||t.contentEditable==="true"||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)),lR=(t,e)=>e?0:t,cR=(t,e,n,i,r)=>r?e:t+(e-t)*Math.min(1,n*i),uR=t=>{var e;return!!((e=t==null?void 0:t.closest)!=null&&e.call(t,".panel"))},hR=t=>{var e;return!!((e=t.key)!=null&&e.startsWith("Arrow"))&&!(t.metaKey||t.ctrlKey||t.altKey)&&!Em(t.target)&&!uR(t.target)},dR=t=>Math.min(1,Math.max(.2,Math.sqrt(t/300)));function fR(t,e,{dAz:n=0,dPol:i=0,zoom:r=1,northUp:s=!1}={},o=.02,a=Math.PI-.02){const[l,c,u]=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];let h=Math.hypot(l,c,u)||1,d=Math.atan2(l,u),p=Math.acos(Math.max(-1,Math.min(1,c/h)));d=s?0:d+n*Math.PI/180,p=Math.max(o,Math.min(a,p+i*Math.PI/180)),h*=r;const v=Math.sin(p);return[e[0]+h*v*Math.sin(d),e[1]+h*Math.cos(p),e[2]+h*v*Math.cos(d)]}const pR=[["rate","Rain / h"],["accum","Accumulated"],["temp","Temperature"],["off","Off"]];function Rd({options:t,value:e,onChange:n,label:i}){return M.jsx("div",{className:"seg",role:"group","aria-label":i,children:t.map(([r,s])=>M.jsx("button",{"aria-pressed":e===r,onClick:()=>n(r),children:s},r))})}function J0(t,e,n){if(!e)return"no data for this hour";if(e.type==="obs")return t.obs.rain[n]==="pass1"?"observed · MRMS (provisional)":"observed · MRMS, gauge-corrected";const i=Math.round((On(t,n)-Date.UTC(+e.init.slice(0,4),+e.init.slice(4,6)-1,+e.init.slice(6,8),+e.init.slice(8,10)))/36e5);return`forecast · ${t.models[e.model].label} ${Vc(e.init)} +${i} h`}function ev(t,e,n){if(!e)return On(t,n)>Date.parse(t.updated)?"not recorded yet":"no river data for this hour";if(e.type==="whatif"){const i=Math.round((On(t,n)-Qp(e.init))/36e5);return`what if · NWM ${e.kind==="short"?"short-range (HRRR rain)":"medium-range (GFS rain)"} ${Vc(e.init)} +${i} h`}return e.k===n?"recorded · NWM analysis":`recorded · NWM analysis from ${n-e.k} h earlier (newest posted)`}function mR({info:t}){const e=((t==null?void 0:t.counts)??[]).map((n,i)=>[i,n]).filter(([n,i])=>n>0&&i>0);return M.jsx("span",{className:"rv-counts",children:e.length?e.map(([n,i])=>M.jsxs("span",{title:Nu[n],children:[M.jsx("i",{style:{background:mh[n]}}),i," ",Nu[n].replace(" flood","")]},n)):t!=null&&t.counts?M.jsx("span",{children:"all below high water"}):null})}function gR({fill:t}){if(t==="off")return null;const e=Vf[t],n=t==="temp"?iS:Gf;return M.jsxs("div",{className:"st-legend",children:[M.jsx("div",{className:"st-ramp",style:{background:`linear-gradient(90deg, ${n.join(", ")})`}}),M.jsxs("div",{className:"st-ticks mono",children:[e.stops.filter((i,r)=>r%2===0||r===9).map(i=>M.jsx("span",{children:i},i)),M.jsx("span",{className:"u",children:e.unit})]})]})}function vR(t,e){var i;const n=((i=t.rivers)==null?void 0:i.inundation)??{};for(let r=e;r>=Math.max(0,e-2);r--)if(n[r])return r;return null}const gh=(t={},e)=>{for(let n=e;n>=Math.max(0,e-2);n--)if(t[n]!==void 0)return n;return null},_R=(t,e)=>{var n;return gh((n=t.power)==null?void 0:n.frames,e)},xR=(t,e)=>{var n;return gh((n=t.roads)==null?void 0:n.frames,e)},yR=(t,e)=>{var n;return gh((n=t.sewers)==null?void 0:n.frames,e)},SR=(t,e)=>{var n;return gh((n=t.ferries)==null?void 0:n.frames,e)};function MR(t,e,n=!0){var i,r,s,o;return(i=t.sea)!=null&&i.obs.includes(e)?{type:"obs"}:n&&e>Math.max(-1,...((r=t.sea)==null?void 0:r.obs)??[])&&((o=(s=t.sea)==null?void 0:s.fc)!=null&&o.frames.includes(e))?{type:"fc",run:t.sea.fc.run}:null}function wR(t,e){let n=0,i=0;const r=ka.map(()=>0);for(let s=0;s<e;s++){const o=t[s*4];if(o===255)continue;i++,o>n&&(n=o);const a=o/.44704;ka.forEach((l,c)=>{a>=l&&r[c]++})}return{mph:Math.round(n/.44704),share:r.map(s=>i?s/i:0)}}function ER({doc:t,layer:e,rivers:n,reservoirs:i,ground:r,gauges:s,floods:o,sea:a,gusts:l,power:c,roads:u,sewers:h,ferries:d,views:p,view:v,onView:x}){var O,ce,ve,we,Ee;const m=K.useMemo(()=>new zg,[t.version]),f=K.useMemo(()=>new s1(t,m),[t,m]),_=t.first,[g,S]=K.useState(Math.max(_,t.lastObs));K.useEffect(()=>{S(P=>Math.max(t.first,Math.min(P,t.hours-1)))},[t.hours,t.first]);const[L,C]=K.useState({mode:"blend",model:"hrrr"}),[A,D]=K.useState("rate"),[Y,y]=K.useState(!1),[E,z]=K.useState(!1),[k,H]=K.useState(!1),[J,G]=K.useState(.85),[Q,R]=K.useState(6),[X,Z]=K.useState(""),[le,Te]=K.useState(!1),Le=K.useRef(0),[$,re]=K.useState(!0),[ue,de]=K.useState(!1),[Re,Ue]=K.useState(null),[ke,$e]=K.useState(null),ze=K.useMemo(()=>new zg(48),[t.version]),[N,At]=K.useState(!0),[ye,He]=K.useState(null),Pe=K.useRef(new Map),[Ye,Oe]=K.useState(!1),[b,w]=K.useState(!1),[B,ne]=K.useState(!1),[se,te]=K.useState(!0),[Ae,fe]=K.useState(!0),[ge,Qe]=K.useState(null),[oe,Me]=K.useState(!1),[De,Fe]=K.useState(null),[xe,Ke]=K.useState(!0),[Ie,nt]=K.useState(null),U=K.useRef(new Map),[pe,q]=K.useState(!0),[ee,me]=K.useState(null),_e=K.useRef(new Map),[Xe,St]=K.useState(!0),[Mt,Je]=K.useState(null),It=K.useRef(new Map),[an,Ja]=K.useState(!0),[Ki,$n]=K.useState(null),Nr=K.useRef(new Map),[Mi,el]=K.useState(!0),[Un,tl]=K.useState(!0),[wi,_o]=K.useState(null);K.useEffect(()=>(window.__storm={setK:S,setFill:D,setSel:C,setWind:y,setOpen:H},()=>{delete window.__storm}),[]),K.useEffect(()=>{e.setFill(A)},[e,A]),K.useEffect(()=>{e.setWind(Y)},[e,Y]),K.useEffect(()=>{e.setOpacity(J)},[e,J]),K.useEffect(()=>{e.setAltitude(Q)},[e,Q]),K.useEffect(()=>{n==null||n.layer.setVisible(Mi)},[n,Mi]),K.useEffect(()=>{i==null||i.load(t).catch(()=>{})},[i,t]),K.useEffect(()=>{i==null||i.setHour(g)},[i,g]),K.useEffect(()=>{i==null||i.setVisible(se)},[i,se]),K.useEffect(()=>{for(const P of[r==null?void 0:r.snow,r==null?void 0:r.soil,r==null?void 0:r.wells])P==null||P.load(t).catch(()=>{})},[r,t]),K.useEffect(()=>{for(const P of[r==null?void 0:r.snow,r==null?void 0:r.soil,r==null?void 0:r.wells])P==null||P.setHour(g)},[r,g]),K.useEffect(()=>{r==null||r.snow.setVisible(Ye)},[r,Ye]),K.useEffect(()=>{r==null||r.soil.setVisible(b)},[r,b]),K.useEffect(()=>{r==null||r.wells.setVisible(B)},[r,B]),K.useEffect(()=>{s==null||s.load(t).then(()=>Qe({...s.counts})).catch(()=>{})},[s,t]),K.useEffect(()=>{s&&(s.setHour(g,Un),Qe({...s.counts}))},[s,g,Un]),K.useEffect(()=>{s==null||s.setVisible(Ae)},[s,Ae]),K.useEffect(()=>{a==null||a.layer.setCurrents($)},[a,$]),K.useEffect(()=>{a==null||a.tides.setVisible(ue)},[a,ue]),K.useEffect(()=>{a==null||a.tides.load(t).then(()=>$e(a.tides.maxSurge)).catch(()=>{})},[a,t]),K.useEffect(()=>{a&&(a.tides.setHour(g),$e(a.tides.maxSurge))},[a,g]),K.useEffect(()=>{if(!a)return;let P=!1;const j=MR(t,g,Un);if(!j){a.layer.set(null),Ue({j:null});return}const ie=`k${String(g).padStart(3,"0")}.png?v=${t.version}`;return ze.get(j.type==="obs"?`${t.base}sea/obs/${ie}`:`${t.base}sea/fc/${ie}&r=${j.run}`).then(be=>{P||(a.layer.set(be),Ue({j:g,...j}))}).catch(()=>{P||(a.layer.set(null),Ue({j:null}))}),()=>{P=!0}},[a,t,g,Un,ze]),K.useEffect(()=>{l==null||l.setVisible(oe)},[l,oe]),K.useEffect(()=>{if(!l||!oe)return;let P=!1;const j=Vo(t,g,L,"gust");if(!j){l.set(null),Fe({src:null});return}return m.get(dc(t,j,g,"gust")).then(ie=>{P||(l.set(ie),Fe({src:j,...wR(ie.data,ie.width*ie.height)}))}).catch(()=>{P||(l.set(null),Fe({src:null}))}),()=>{P=!0}},[l,oe,t,g,L,m]),K.useEffect(()=>{c==null||c.setVisible(xe)},[c,xe]),K.useEffect(()=>{if(!c)return;let P=!1;const j=_R(t,g);if(j===null){c.set(null),nt({j:null});return}const ie=`${t.base}power/k${String(j).padStart(3,"0")}.json?v=${t.version}&u=${t.updated}`;let be=U.current.get(ie);return be||(be=fetch(ie).then(Ne=>Ne.json()),U.current.set(ie,be)),be.then(Ne=>{P||(c.set(Ne),c.at=Math.min(On(t,g),Date.parse(Ne.time)),nt({j,...Ne}))}).catch(()=>{U.current.delete(ie),P||(c.set(null),nt({j:null}))}),()=>{P=!0}},[c,t,g]),K.useEffect(()=>{u==null||u.setVisible(pe)},[u,pe]),K.useEffect(()=>{if(!u)return;let P=!1;const j=xR(t,g);if(j===null){u.set(null),me({j:null});return}const ie=`${t.base}roads/k${String(j).padStart(3,"0")}.json?v=${t.version}&u=${t.updated}`;let be=_e.current.get(ie);return be||(be=fetch(ie).then(Ne=>Ne.json()),_e.current.set(ie,be)),be.then(Ne=>{P||(u.set(Ne),me({j,...Ne}))}).catch(()=>{_e.current.delete(ie),P||(u.set(null),me({j:null}))}),()=>{P=!0}},[u,t,g]),K.useEffect(()=>{h==null||h.setVisible(Xe)},[h,Xe]),K.useEffect(()=>{if(!h)return;let P=!1;const j=yR(t,g);if(j===null){h.set(null),Je({j:null});return}const ie=`${t.base}sewers/k${String(j).padStart(3,"0")}.json?v=${t.version}&u=${t.updated}`;let be=It.current.get(ie);return be||(be=fetch(ie).then(Ne=>Ne.json()),It.current.set(ie,be)),be.then(Ne=>{P||(h.set(Ne),h.at=Math.min(On(t,g),Date.parse(Ne.time)),Je({j,...Ne}))}).catch(()=>{It.current.delete(ie),P||(h.set(null),Je({j:null}))}),()=>{P=!0}},[h,t,g]),K.useEffect(()=>{d==null||d.setVisible(an)},[d,an]),K.useEffect(()=>{if(!d)return;let P=!1;const j=SR(t,g);if(j===null){d.set(null),$n({j:null});return}const ie=`${t.base}ferries/k${String(j).padStart(3,"0")}.json?v=${t.version}&u=${t.updated}`;let be=Nr.current.get(ie);return be||(be=fetch(ie).then(Ne=>Ne.json()),Nr.current.set(ie,be)),be.then(Ne=>{P||(d.set(Ne),$n({j,...Ne,states:hS(Ne)}))}).catch(()=>{Nr.current.delete(ie),P||(d.set(null),$n({j:null}))}),()=>{P=!0}},[d,t,g]),K.useEffect(()=>{o==null||o.setVisible(N)},[o,N]),K.useEffect(()=>{if(!o)return;let P=!1;const j=vR(t,g);if(j===null){o.set(null),He({j:null});return}const ie=`${t.base}rivers/inundation/k${String(j).padStart(3,"0")}.json?v=${t.version}`;let be=Pe.current.get(ie);return be||(be=fetch(ie).then(Ne=>Ne.json()),Pe.current.set(ie,be)),be.then(Ne=>{P||(o.set(Ne),He({j,...t.rivers.inundation[j]}))}).catch(()=>{Pe.current.delete(ie),P||(o.set(null),He({j:null}))}),()=>{P=!0}},[o,t,g]),K.useEffect(()=>{if(!n)return;let P=!1;const j=d1(t,g,Un);return(j?n.flows.get(j):Promise.resolve(null)).then(ie=>{P||(n.layer.setFlows(ie),n.layer.whatIf.value=(j==null?void 0:j.type)==="whatif"?1:0,n.layer.label=`${ev(t,j,g)} · ${$h(On(t,g))}`,_o({src:j,counts:ie?n.layer.counts:null}))}).catch(ie=>{console.warn("river flows:",ie),P||(n.layer.setFlows(null),_o({src:null}))}),()=>{P=!0}},[t,g,n,Un]),K.useEffect(()=>{const P=++Le.current;Te(!0),(async()=>{var ht,Kt;const j=Vo(t,g,L,"rain");let ie=null;A==="rate"?ie=((ht=await f.hourly(g,L))==null?void 0:ht.mm)??null:A==="accum"&&(ie=((Kt=await f.accumulated(g,L))==null?void 0:Kt.mm)??null);const be=Vo(t,g,L,"met");let Ne=null;if(be&&(Y||A==="temp")&&(Ne={data:(await m.get(dc(t,be,g,"met"))).data,grid:Rx(t,be,"met")}),P===Le.current){(A==="rate"||A==="accum")&&e.setRain(ie),e.setMet(Ne),Z(J0(t,A==="temp"?be:j,g)),Te(!1);for(let Ze=g+1;Ze<=Math.min(t.hours-1,g+3);Ze++){const Ce=Vo(t,Ze,L,"rain");Ce&&A!=="temp"&&m.get(dc(t,Ce,Ze,"rain")).catch(()=>{})}}})().catch(j=>{P===Le.current&&(Z(`could not load this hour (${j.message})`),Te(!1))})},[t,g,L,A,Y,e,f,m]),K.useEffect(()=>{if(!E||le)return;const P=setTimeout(()=>S(j=>j>=t.hours-1?(z(!1),j):j+1),450);return()=>clearTimeout(P)},[E,le,g,t.hours]);const xo=K.useRef(null);xo.current=P=>{P.metaKey||P.ctrlKey||P.altKey||Em(P.target)||(P.key===","&&S(j=>Math.max(_,j-1)),P.key==="."&&S(j=>Math.min(t.hours-1,j+1)),P.key===" "&&(P.preventDefault(),z(j=>!j)))},K.useEffect(()=>{const P=j=>xo.current(j);return addEventListener("keydown",P),()=>removeEventListener("keydown",P)},[]);const yo=t.runList[L.model]??[],So=t.hours-_,nl=On(t,g),T=(t.lastObs+1-_)/So*100,F=Math.ceil(So/24),V=F>12?2:1,W=Array.from({length:Math.ceil(F/V)},(P,j)=>j*V);return M.jsxs("section",{className:`panel storm${k?" open":""}`,"aria-label":"Storm layer",children:[(p==null?void 0:p.length)>1&&M.jsx("div",{className:"st-views seg",role:"group","aria-label":"View",children:p.map(P=>M.jsx("button",{"aria-pressed":P.key===v,title:P.hint,onClick:()=>x(P.key),children:P.label},P.key))}),M.jsxs("div",{className:"st-bar",children:[M.jsx("button",{className:"st-play","aria-label":E?"Pause":"Play",title:"Play / pause (space)",onClick:()=>z(P=>!P),children:E?"❚❚":"▶"}),M.jsxs("div",{className:"st-when",children:[M.jsx("b",{children:$h(nl)}),M.jsxs("span",{className:"mono",children:[a1(nl)," · hour ",g-_+1,"/",So]})]}),M.jsx("span",{className:`st-src${X.startsWith("observed")?" obs":X.startsWith("forecast")?" fc":""}`,children:le?"loading…":X}),M.jsx("button",{className:"st-more","aria-expanded":k,"aria-label":"Storm layer options",onClick:()=>H(P=>!P),children:k?"▾":"▸"})]}),M.jsxs("div",{className:"st-slider",children:[M.jsx("input",{type:"range",min:_,max:t.hours-1,value:g,"aria-label":"Hour",onChange:P=>{z(!1),S(+P.target.value)},style:{background:`linear-gradient(90deg, #4c9be8 0%, #4c9be8 ${T}%, #3a3a37 ${T}%, #3a3a37 100%)`}}),M.jsx("div",{className:"st-days mono",children:W.map(P=>M.jsx("span",{children:new Intl.DateTimeFormat("en-US",{timeZone:t.tz,weekday:"short",day:"numeric"}).format(t.t0+(_+P*24+1)*36e5)},P))}),c&&xe&&Ie&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Power ·"}),M.jsx("span",{className:"rv-counts",children:Ie.j===null?M.jsx("span",{children:On(t,g)>Date.parse(t.updated)?"not recorded yet":"not recorded for this hour"}):M.jsxs(M.Fragment,{children:[M.jsxs("span",{children:[M.jsx("i",{style:{background:oS}}),Object.values(Ie.totals).reduce((P,j)=>P+j,0).toLocaleString("en-US")," customers out"]}),Object.entries(Ie.totals).filter(([,P])=>P>0).sort((P,j)=>j[1]-P[1]).map(([P,j])=>M.jsxs("span",{children:[t.power.utilities[P]," ",j.toLocaleString("en-US")]},P)),Ie.partial&&M.jsx("span",{title:"Rebuilt from the outages still open when recording began (Nov 9, 3:50 PM PST), placed back to their start times; outages restored before then are missing",children:"partial: rebuilt from outages still open when recording began"}),((O=Ie.failed)==null?void 0:O.length)>0&&M.jsxs("span",{children:["no data from ",Ie.failed.join(", ")]})]})})]}),u&&pe&&ee&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Roads ·"}),M.jsx("span",{className:"rv-counts",children:ee.j===null?M.jsx("span",{children:On(t,g)>Date.parse(t.updated)?"not recorded yet":"not recorded for this hour (recording began Nov 9, 7:20 PM PST)"}):M.jsxs(M.Fragment,{children:[Object.keys(ur).filter(P=>ee.counts[P]>0).map(P=>M.jsxs("span",{children:[M.jsx("i",{style:{background:ur[P]}}),ee.counts[P]," ",Xf[P]]},P)),ee.passes.some(P=>P.closed&&!P.earlier)&&M.jsxs("span",{children:["passes closed: ",ee.passes.filter(P=>P.closed&&!P.earlier).map(P=>P.name).join(", ")]}),ee.partial&&M.jsx("span",{title:"Rebuilt from the reports still open when recording began (Nov 9, 7:20 PM PST), each placed back to its own time; ones already over by then are missing",children:"partial: rebuilt from reports still open when recording began"}),((ce=ee.failed)==null?void 0:ce.length)>0&&M.jsxs("span",{children:["no data from ",ee.failed.join(", ")]})]})})]}),h&&Xe&&Mt&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Sewer overflows ·"}),M.jsx("span",{className:"rv-counts",children:Mt.j===null?M.jsx("span",{children:On(t,g)>Date.parse(t.updated)?"not recorded yet":"not recorded for this hour"}):M.jsxs(M.Fragment,{children:[M.jsxs("span",{children:[M.jsx("i",{style:{background:qf.overflowing,borderRadius:"50%"}}),Mt.counts.overflowing," outfall",Mt.counts.overflowing===1?"":"s"," overflowing"]}),Mt.partial&&M.jsx("span",{title:"Before recording began (Nov 9, 7:20 PM PST) only Metro Vancouver's outfalls are shown, from its overflow start and end times; King County's map gives no times",children:"partial: Metro Vancouver only before Nov 9, 7:20 PM"}),((ve=Mt.failed)==null?void 0:ve.length)>0&&M.jsxs("span",{children:["no data from ",Mt.failed.join(", ")]})]})})]}),d&&an&&Ki&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Ferries ·"}),M.jsxs("span",{className:"rv-counts",children:[Ki.j===null?M.jsx("span",{children:On(t,g)>Date.parse(t.updated)?"not recorded yet":"nothing recorded for this hour"}):Ki.states.size===0?M.jsx("span",{children:"no disruptions"}):[...Ki.states].map(([P,j])=>M.jsxs("span",{title:j.items.map(ie=>ie.title).join(`
`),children:[M.jsx("i",{style:{background:ca[j.status]}}),P?j.newest.name:`${j.items.length} other notice${j.items.length===1?"":"s"}`," ",j.status,j.cause?` (${Yf[j.cause]})`:""]},P||"other")),((we=Ki.items)==null?void 0:we.some(P=>P.src==="news"))&&M.jsx("span",{title:"BC Ferries keeps no history of its notices; disruptions before recording began (Nov 14) are from news reports, shown from the report to the last cancelled sailing",children:"BC Ferries from news reports"})]})]}),l&&oe&&De&&M.jsxs("div",{className:"st-rivers",children:[M.jsxs("span",{className:"mono",children:["Gusts · ",De.src?De.src.type==="obs"?"HRRR analysis":J0(t,De.src,g).replace("forecast · ","forecast "):"not available for this hour"]}),De.src&&M.jsxs("span",{className:"rv-counts",children:[M.jsxs("span",{children:["peak ",De.mph," mph on land"]}),ka.map((P,j)=>[P,j]).filter(([,P])=>De.share[P]>=.001).slice(-2).map(([P,j])=>M.jsxs("span",{children:[M.jsx("i",{style:{background:jf[j]}}),(De.share[j]*100).toFixed(De.share[j]<.1?1:0),"% of land ≥ ",P]},P))]})]}),a&&($||ue)&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Sea ·"}),M.jsxs("span",{className:"rv-counts",children:[$&&M.jsx("span",{children:(Re==null?void 0:Re.j)===null?On(t,g)>Date.parse(t.updated)?"not modelled yet":"no model hour":(Re==null?void 0:Re.type)==="fc"?`what if · SSCOFS forecast ${Vc(Re.run)}`:"SSCOFS nowcast"}),ue&&ke&&M.jsxs("span",{children:["max surge ",ke.surge>=0?"+":"−",Math.abs(ke.surge).toFixed(1)," ft · ",ke.name]})]})]}),o&&N&&ye&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Flood outlines ·"}),M.jsx("span",{className:"rv-counts",children:ye.j===null?M.jsx("span",{children:Object.keys(((Ee=t.rivers)==null?void 0:Ee.inundation)??{}).length?"not recorded for this hour":"recording starts with the next update"}):M.jsxs("span",{children:[M.jsx("i",{style:{background:"#ff4f7b"}}),ye.n," reaches · ",ye.km2," km²",ye.j!==g?` (as of ${g-ye.j} h earlier)`:""]})})]}),s&&Ae&&ge&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Gauges ·"}),M.jsx("span",{className:"rv-counts",children:eo.some(P=>ge[P])?eo.filter(P=>ge[P]).map(P=>M.jsxs("span",{children:[M.jsx("i",{style:{background:gc[P]}}),ge[P]," ",P]},P)):M.jsx("span",{children:"none at action or flood stage"})}),Kf.some(P=>ge[P])&&M.jsxs("span",{className:"rv-counts",children:[M.jsx("span",{children:"BC:"}),Kf.filter(P=>ge[P]).map(P=>M.jsxs("span",{children:[M.jsx("i",{style:{background:Zf[P]}}),ge[P]," ",dS[P]]},P))]})]}),n&&Mi&&M.jsxs("div",{className:"st-rivers",children:[M.jsxs("span",{className:"mono",children:["Rivers · ",ev(t,wi==null?void 0:wi.src,g)]}),M.jsx(mR,{info:wi})]})]}),k&&M.jsxs("div",{className:"st-body",children:[M.jsxs("div",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:"Fill"}),M.jsx(Rd,{label:"Fill",options:pR,value:A,onChange:D})]}),M.jsxs("div",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:"Source"}),M.jsx(Rd,{label:"Source",options:[["blend","Observed + forecast"],["run","One forecast run"]],value:L.mode,onChange:P=>C(j=>{var ie;return P==="run"?{...j,mode:P,init:j.init??((ie=yo[yo.length-1])==null?void 0:ie.init)}:{mode:P,model:j.model}})})]}),M.jsxs("div",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:"Model"}),M.jsx(Rd,{label:"Model",options:Object.entries(t.models).map(([P,j])=>[P,j.label]),value:L.model,onChange:P=>C(j=>{var ie;return{...j,model:P,init:j.mode==="run"?(ie=t.runList[P].at(-1))==null?void 0:ie.init:void 0}})})]}),L.mode==="run"&&M.jsxs("label",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:"Run"}),M.jsx("select",{className:"st-select",value:L.init,onChange:P=>C(j=>({...j,init:P.target.value})),children:yo.map(P=>M.jsxs("option",{value:P.init,children:[Vc(P.init),P.complete?"":" (partial)"]},P.init))})]}),M.jsxs("button",{className:"tog",role:"switch","aria-checked":Y,onClick:()=>y(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Wind",M.jsx("small",{children:"10 m wind as drifting trails"})]})]}),c&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":xe,onClick:()=>Ke(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Power outages",M.jsx("small",{children:"BC Hydro, PSE, Seattle City Light, PGE and Pacific Power outage maps, recorded each hour from Nov 9; dot size: customers out; hover for cause and duration"})]})]}),u&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":pe,onClick:()=>q(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Roads",M.jsx("small",{children:"WSDOT and DriveBC highway alerts and WSDOT mountain passes, recorded each hour from Nov 9, each report shown from its own time; only reports since the storm began (Nov 7), not planned roadwork; hover for details"})]})]}),pe&&M.jsxs("div",{className:"rv-legend",children:[Object.keys(ur).map(P=>M.jsxs("span",{children:[M.jsx("i",{style:{background:ur[P],transform:"rotate(45deg)"}}),Xf[P]]},P)),M.jsxs("span",{children:[M.jsx("i",{style:{background:lS}}),"pass open"]}),M.jsxs("span",{children:[M.jsx("i",{style:{background:ur.closure}}),"pass closed"]})]})]}),h&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":Xe,onClick:()=>St(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Sewer overflows",M.jsx("small",{children:"combined sewer outfalls in Seattle and King County (King County's map) and Metro Vancouver, recorded each hour from Nov 9 (Metro Vancouver from its overflow times); a dot at each outfall overflowing during the hour"})]})]}),d&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":an,onClick:()=>Ja(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Ferries",M.jsx("small",{children:"Washington State Ferries alerts (recorded each hour from Nov 9) and BC Ferries service notices (from Nov 14; earlier from news reports): a route turns red, amber or green with a ship marking what happened and why; hover a ship for the notices, click for the source"})]})]}),an&&M.jsx("div",{className:"rv-legend",children:["cancelled","at risk","delayed","resuming"].map(P=>M.jsxs("span",{children:[M.jsx("i",{style:{background:ca[P]}}),uS[P]]},P))})]}),l&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":oe,onClick:()=>Me(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Wind gusts",M.jsx("small",{children:"surface gusts on land, from 25 mph (HRRR analysis for past hours, then the forecast)"})]})]}),oe&&M.jsx("div",{className:"rv-legend",children:ka.map((P,j)=>M.jsxs("span",{children:[M.jsx("i",{style:{background:jf[j]}}),"≥ ",P," mph"]},P))})]}),a&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":$,onClick:()=>re(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Currents",M.jsx("small",{children:"surface currents from the same model, as drifting trails"})]})]}),M.jsxs("button",{className:"tog",role:"switch","aria-checked":ue,onClick:()=>de(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Tide gauges",M.jsx("small",{children:"NOAA observed water level vs predicted tide: the storm surge"})]})]})]}),o&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":N,onClick:()=>At(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Flood outlines",M.jsx("small",{children:"NOAA's experimental flooded areas from the NWM analysis, recorded each hour from Nov 9 on; reaches already high before the storm left out"})]})]}),s&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":Ae,onClick:()=>fe(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["River gauges",M.jsx("small",{children:"NWS gauges: measured stage against flood stages, with the NWS impact statement on hover. BC (Water Survey of Canada): flow against the station's own annual peaks (a typical year's, the 1-in-10-year, the record)"})]})]}),i&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":se,onClick:()=>te(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Reservoir levels",M.jsx("small",{children:"USGS lake and reservoir gauges: change since the storm began; hover for the record"})]})]}),r&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":Ye,onClick:()=>Oe(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Snow",M.jsx("small",{children:"SNOTEL and BC snow pillows: change in snow water (or snow depth) since the storm began; hover for depth, temperature and precipitation"})]})]}),M.jsxs("button",{className:"tog",role:"switch","aria-checked":b,onClick:()=>w(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Soil moisture",M.jsx("small",{children:"SNOTEL soil sensors in the mountains: change in soil water (% by volume) since the storm began at the shallowest working sensor; hover for 2, 8 and 20 in"})]})]}),M.jsxs("button",{className:"tog",role:"switch","aria-checked":B,onClick:()=>ne(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Groundwater",M.jsx("small",{children:"USGS real-time and BC observation wells: how far the water table has risen since the storm began (BC posts about a day late)"})]})]})]}),n&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":Mi,onClick:()=>el(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Rivers",M.jsx("small",{children:"What the rivers did, hour by hour (NOAA National Water Model analysis: observed rain, nudged to the USGS gauges; flow, not stage). Height: rise since Sat 12 AM; colour: flood thresholds reached"})]})]}),Mi&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":Un,onClick:()=>tl(P=>!P),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Rivers: what if",M.jsx("small",{children:"for hours not recorded yet, the newest NWM forecast (striped); each hour is replaced by the record as it comes in"})]})]}),Mi&&M.jsx("div",{className:"rv-legend",children:Nu.map((P,j)=>M.jsxs("span",{children:[M.jsx("i",{style:{background:mh[j]}}),j===0?P:`≥ ${P}`]},j))})]}),M.jsxs("label",{className:"ctl-row slider",children:["Opacity ",M.jsxs("span",{className:"mono",children:[Math.round(J*100),"%"]}),M.jsx("input",{type:"range",min:"0.2",max:"1",step:"0.05",value:J,onChange:P=>G(+P.target.value)})]}),M.jsxs("label",{className:"ctl-row slider",children:["Layer height ",M.jsxs("span",{className:"mono",children:[Q," km"]}),M.jsx("input",{type:"range",min:"1",max:"12",step:"0.5",value:Q,onChange:P=>R(+P.target.value)})]}),M.jsx(gR,{fill:A}),M.jsxs("div",{className:"st-note",children:[A==="accum"?L.mode==="run"?"Accumulated from the run's first hour in the window.":`Accumulated since ${$h(t.t0)}: observed hours, then the newest forecast.`:"Observed where measured (MRMS rain, HRRR analysis wind and temperature), newest forecast after."," ","Updated ",t.updated.replace("T"," ").replace("Z"," UTC"),"."]})]})]})}const Qf=(t,e)=>`${t>.5*10**-e?"+":t<-.5*10**-e?"−":"±"}${Math.abs(t).toFixed(e)}`,Jf=(t,e)=>(t[e]??[]).filter(n=>n!==null);function TR(t){return Jf(t,"swe").length?{key:"swe",label:"SWE",unit:"in",d:1,step:.2}:Jf(t,"depth").length?{key:"depth",label:"snow",unit:"in",d:0,step:1}:null}function AR(t){for(const[e,n]of[["sm2","soil 2 in"],["sm8","soil 8 in"],["sm20","soil 20 in"]]){const i=Jf(t,e);if(i.length&&Math.max(...i)>Math.min(...i))return{key:e,label:n,unit:"%",d:1,step:1}}return null}class ua extends za{keep(e){return!!this.constructor.pick(e)}prepare(e){return{...e,...this.constructor.pick(e),short:e.name}}step(e){return e.step}valueText(e,n){return`${e.label} ${Qf(n.change,e.d)}${e.unit==="%"?"%":" in"}`}tipBody(e){const n=this.k,i=(s,o,a,l)=>{const c=Fu(e,n,s);return c?`<div class="mono">${o} ${c.elev.toFixed(l)}${a} · ${Qf(c.change,l)}${a} since the storm began${c.latest?" · latest":""}</div>`:""},r=Fu(e,n,"temp");return`<div class="sub">${e.ft?`${Math.round(e.ft).toLocaleString("en-US")} ft · `:""}provisional</div>`+i("swe","snow water"," in",1)+i("depth","snow depth"," in",0)+i("prec","precipitation"," in",1)+(r?`<div class="mono">air ${r.elev.toFixed(0)}°F${r.latest?" · latest":""}</div>`:"")+i("sm2","soil 2 in","%",0)+i("sm8","soil 8 in","%",0)+i("sm20","soil 20 in","%",0)}caption(e,n,i){return`${at(e.key==="swe"?"snow water":e.label)}: ${n.toFixed(e.d)} / ${i.toFixed(e.d)} ${e.unit} · whole window`}}Yn(ua,"file","ground/snow.json"),Yn(ua,"kind","snow"),Yn(ua,"pick",TR);class ep extends ua{valueText(e,n){return`soil ${Qf(n.change,e.d)}%`}}Yn(ep,"kind","soil"),Yn(ep,"pick",AR);const tv=t=>`${t>.005?"+":t<-.005?"−":"±"}${Math.abs(t).toFixed(2)} ft`;class tp extends za{prepare(e){return{...e,key:"level",short:e.src==="BC"?e.name.replace(/^Observation (well \d+).*$/,"$1"):e.name}}step(){return .1}valueText(e,n){return tv(n.change)}tipBody(e,n){const i=Fu(e,this.k,"depth");return(n?`<div class="mono">water table ${tv(n.change)} since the storm began${n.latest?" · latest reading":""}</div>`:"<div>no reading yet</div>")+(i?`<div class="mono">${i.elev.toFixed(2)} ft below the ground</div>`:"")+`<div class="sub">${e.src==="BC"?"BC Provincial Groundwater Observation Well Network · posted about a day late":"USGS real-time well"} · provisional</div>`}caption(e,n,i){return`level ${n.toFixed(2)} / ${i.toFixed(2)} ft · whole window`}}Yn(tp,"file","ground/wells.json"),Yn(tp,"kind","well");const nv={type:"change"},Tm={type:"start"},fS={type:"end"},Zl=new qa,iv=new Li,bR=Math.cos(70*co.DEG2RAD),Rt=new I,gn=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pd=1e-6;class CR extends tS{constructor(e,n=null){super(e,n),this.state=ot.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new br,this._lastTargetPosition=new I,this._quat=new br().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Du,this._sphericalDelta=new Du,this._scale=1,this._panOffset=new I,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new I,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PR.bind(this),this._onPointerDown=RR.bind(this),this._onPointerUp=LR.bind(this),this._onContextMenu=kR.bind(this),this._onMouseWheel=UR.bind(this),this._onKeyDown=IR.bind(this),this._onTouchStart=FR.bind(this),this._onTouchMove=OR.bind(this),this._onMouseDown=DR.bind(this),this._onMouseMove=NR.bind(this),this._interceptControlDown=zR.bind(this),this._interceptControlUp=BR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nv),this.update(),this.state=ot.NONE}update(e=null){const n=this.object.position;Rt.copy(n).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),r<-Math.PI?r+=gn:r>Math.PI&&(r-=gn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Rt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zl.origin.copy(this.object.position),Zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zl.direction))<bR?this.object.lookAt(this.target):(iv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zl.intersectPlane(iv,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Pd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pd||this._lastTargetPosition.distanceToSquared(this.target)>Pd?(this.dispatchEvent(nv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Rt.setFromMatrixColumn(n,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,n){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(n,1):(Rt.setFromMatrixColumn(n,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Rt.copy(r).sub(this.target);let s=Rt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Be,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function RR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function PR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function LR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fS),this.state=ot.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function DR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ot.DOLLY;break;case xi.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ot.ROTATE}break;case xi.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Tm)}function NR(t){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function UR(t){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(t.preventDefault(),this.dispatchEvent(Tm),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(fS))}function IR(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function FR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ui.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ot.TOUCH_ROTATE;break;case Ui.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ot.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Tm)}function OR(t){switch(this._trackPointer(t),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ot.NONE}}function kR(t){this.enabled!==!1&&t.preventDefault()}function zR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const HR=150,pS=[[1,120],[2,260]],VR=260,GR=450,WR=16,rv=40,jR=6;function $R(t,e,n=0,i=0){const r=Math.max(e[0]-t[0],0,t[0]-e[1]),s=Math.max(e[2]-t[2],0,t[2]-e[3]),o=Math.max(n-t[1],0,t[1]-i);return Math.hypot(r,o,s)}function XR(t,e,n,{far:i=VR,maxOrbit:r=GR,max:s=WR}={}){return n>r?[]:t.map(o=>({t:o,d:$R(e,o.box,o.lo,o.hi)})).filter(o=>o.d<i).sort((o,a)=>o.d-a.d).slice(0,s).map(({t:o,d:a})=>({key:o.key,level:pS.findIndex(([,l])=>a<=l)}))}class YR{constructor(e,n,i,r,s){Object.assign(this,{scene:e,U:n,bundle:i,P:r});const o=i.manifest.terrain.detail;this.makeMaterial=u=>{const h=s(u);return h.polygonOffset=!0,h.polygonOffsetFactor=-1,h.polygonOffsetUnits=-1,h},this.water=i.manifest.water.tiles,this.tiles=o.tiles.map(u=>{const[h,d]=u.key.split("_").map(Number),p=u.west+u.cellsize/2,v=u.south+(u.nrows-.5)*u.cellsize,x=[r.toX(p),r.toX(p+(u.ncols-1)*u.cellsize),r.toZ(v),r.toZ(v-(u.nrows-1)*u.cellsize)];return{key:u.key,tx:h,ty:d,meta:u,box:x,lo:u.min,hi:u.max,state:"idle",meshes:[null,null],used:0}}),this.byKey=new Map(this.tiles.map(u=>[u.key,u])),this.nx=Math.max(...this.tiles.map(u=>u.tx))+1,this.ny=Math.max(...this.tiles.map(u=>u.ty))+1,this.maskData=new Uint8Array(this.nx*this.ny),this.mask=new Hi(this.maskData,this.nx,this.ny,$a),this.mask.magFilter=this.mask.minFilter=kt,this.mask.needsUpdate=!0;const a=i.manifest.region,l=o.tile_deg;this.maskRect=new je(r.toX(a.west),r.toZ(a.north),r.toX(a.west+this.nx*l),r.toZ(a.north-this.ny*l));const c=i.manifest.terrain.overview.cellsize;this.maskEps=new Be(.25*c/(this.nx*l),.25*c/(this.ny*l)),this.inflight=0,this.frameNo=0,this.shown=new Set,this.failures=0,this.onChange=null}sample(e,n){const i=this.bundle.manifest.region,r=this.bundle.manifest.terrain.detail.tile_deg,s=this.byKey.get(`${Math.floor((e-i.west)/r)}_${Math.floor((i.north-n)/r)}`);return s&&this.shown.has(s.key)?s.grid.sample(e,n):null}isShown(e,n){return this.sample(e,n)!==null}_load(e){e.state="loading",this.inflight++;const n=fetch(`${this.bundle.base}terrain/tiles/${e.key}.bin`).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.arrayBuffer()}),i=new wm().loadAsync(`${this.bundle.base}${this.water.dir}/${e.key}.png`);Promise.all([n,i]).then(([r,s])=>{if(r.byteLength!==e.meta.ncols*e.meta.nrows*2)throw new Error("tile size mismatch");e.grid=bx(e.meta,r,this.P),s.flipY=!1,s.colorSpace=Bn,s.anisotropy=4,s.needsUpdate=!0;const o=this.bundle.manifest.region,a=this.water.per_deg,l=.5/a,c=o.west+e.tx,u=o.north-e.ty,h=new je(this.P.toX(c-l),this.P.toZ(u+l),this.P.toX(c+(s.image.width-1)/a+l),this.P.toZ(u-(s.image.height-1)/a-l));e.waterTex=s,e.material=this.makeMaterial({tileWater:s,tileWaterRect:h}),e.state="ready"}).catch(()=>{e.state="failed",this.failures++}).finally(()=>{this.inflight--})}_mesh(e,n){if(!e.meshes[n]){const i=new rn(Cx(nS,e.grid,this.P,pS[n][0],HR),e.material);i.visible=!1,i.renderOrder=1,this.scene.add(i),e.meshes[n]=i}return e.meshes[n]}update(e,n){var c;this.frameNo++;const i=this.U.exag.value*.001*(1-this.U.flat.value),r=e.position.toArray(),s=XR(this.tiles.map(u=>({...u,lo:u.lo*i,hi:u.hi*i})),r,n);for(const u of s){const h=this.byKey.get(u.key);h.used=this.frameNo,h.state==="idle"&&this.inflight<jR&&this._load(h)}let o=0;const a=new Set;for(const u of s){const h=this.byKey.get(u.key);if(h.state!=="ready")continue;let d=u.level;if(!h.meshes[d]&&(o++>0&&(d=h.meshes.findIndex(Boolean)),d<0))continue;const p=this._mesh(h,d);for(const v of h.meshes)v&&(v.visible=v===p);a.add(h.key)}for(const u of this.tiles)if(!a.has(u.key))for(const h of u.meshes)h&&(h.visible=!1);if(a.size!==this.shown.size||[...a].some(u=>!this.shown.has(u))){this.shown=a,this.maskData.fill(0);for(const u of a){const h=this.byKey.get(u);this.maskData[h.ty*this.nx+h.tx]=255}this.mask.needsUpdate=!0,(c=this.onChange)==null||c.call(this)}return this._evict(),a.size}_evict(){var n,i;const e=this.tiles.filter(r=>r.state==="ready");if(!(e.length<=rv))for(const r of e.filter(s=>!this.shown.has(s.key)).sort((s,o)=>s.used-o.used).slice(0,e.length-rv)){for(const s of r.meshes)s&&(this.scene.remove(s),s.geometry.dispose());(n=r.material)==null||n.dispose(),(i=r.waterTex)==null||i.dispose(),r.meshes=[null,null],r.grid=null,r.material=r.waterTex=null,r.state="idle"}}dispose(){var e,n;for(const i of this.tiles){for(const r of i.meshes)r&&(this.scene.remove(r),r.geometry.dispose());(e=i.material)==null||e.dispose(),(n=i.waterTex)==null||n.dispose()}this.mask.dispose()}}const mS={motorway:["#f2d58a",2.4,"#1a1814",4.2,1],trunk:["#ece2c6",1.6,"#1a1814",3,.9],primary:["#d8d2c3",1,null,0,.7],country:["#f4f1ea",1.6,"#121211",3.4,.95],state:["#f4f1ea",1,null,0,.55]},qR={motorway:1/0,trunk:1300,primary:520,country:1/0,state:1/0},KR={motorway:60,trunk:60,primary:60,country:0,state:0},sv=12;function ZR(t,e,n,i){const r=t.length/3,s=new Float32Array(r);for(let o=0;o<r;o++){const a=t[o*3],l=t[o*3+1],c=t[o*3+2],u=e.fromX(a),h=e.fromZ(c);if(n(u,h)){s[o]=l+sv;continue}const d=i(u,h);s[o]=(d===null?l:Math.max(l,d))+sv}return s}class QR{constructor(e,n,i,r){Object.assign(this,{scene:e,name:n,segs:i,P:r});const[s,o,a,l,c]=mS[n],u={transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-40};this.mats=[new Iu({color:s,linewidth:o,opacity:c,...u})],a&&this.mats.unshift(new Iu({color:a,linewidth:l,opacity:.55*c,...u})),this.geometry=new Uu,this.objects=this.mats.map((h,d)=>{const p=new cS(this.geometry,h);return p.frustumCulled=!1,p.renderOrder=10+d,e.add(p),p}),this.pos=new Float32Array(i.length),this.visible=!0}drape(e,n){const i=ZR(this.segs,this.P,e,n),r=this.pos;for(let s=0;s<i.length;s++)r[s*3]=this.segs[s*3],r[s*3+1]=i[s],r[s*3+2]=this.segs[s*3+2];this.geometry.setPositions(r)}setScale(e,n){for(const i of this.objects)i.scale.y=e,i.position.y=.02+.05*n}setVisible(e){this.visible=e,this._apply()}updateDistance(e,n=!1){const i=this.near?1.05:.95,r=e<qR[this.name]*i&&!(n&&e<KR[this.name]/i);r!==this.near&&(this.near=r,this._apply())}_apply(){for(const e of this.objects)e.visible=this.visible&&this.near!==!1}setResolution(e,n){for(const i of this.mats)i.resolution.set(e,n)}dispose(){for(const e of this.objects)this.scene.remove(e);this.geometry.dispose();for(const e of this.mats)e.dispose()}}const gS=[["home","Pacific Northwest",{ll:[-122.6,46],dist:2400,polar:.42,az:0}],["ocean","Offshore approach",{ll:[-127.5,45.4],dist:2300,polar:.85,az:.75}],["puget","Puget Sound",{ll:[-122.35,47.55],dist:210,polar:.75,az:0}],["seattle","Seattle streets",{ll:[-122.32,47.605],dist:16,polar:.8,az:.25}],["mercer","Mercer Island",{ll:[-122.23,47.57],dist:9,polar:.7,az:0}],["fraser","Fraser Valley",{ll:[-122.3,49.1],dist:170,polar:.8,az:.15}],["skagit","Skagit & Nooksack",{ll:[-122.05,48.62],dist:170,polar:.8,az:0}],["olympics","Olympic Peninsula",{ll:[-123.65,47.75],dist:230,polar:.8,az:.4}],["rainier","Mount Rainier",{ll:[-121.76,46.85],dist:75,polar:.95,az:.3}],["portland","Portland & the Gorge",{ll:[-122.2,45.6],dist:190,polar:.8,az:0}],["willamette","Willamette Valley",{ll:[-123,44.75],dist:330,polar:.7,az:0}],["basin","Columbia Basin",{ll:[-119.4,46.8],dist:480,polar:.65,az:0}]],ov=Object.fromEntries(gS.map(([t,,e])=>[t,e]));function pr(t,e){this.x=t,this.y=e}pr.prototype={clone(){return new pr(this.x,this.y)},add(t){return this.clone()._add(t)},sub(t){return this.clone()._sub(t)},multByPoint(t){return this.clone()._multByPoint(t)},divByPoint(t){return this.clone()._divByPoint(t)},mult(t){return this.clone()._mult(t)},div(t){return this.clone()._div(t)},rotate(t){return this.clone()._rotate(t)},rotateAround(t,e){return this.clone()._rotateAround(t,e)},matMult(t){return this.clone()._matMult(t)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(t){return this.x===t.x&&this.y===t.y},dist(t){return Math.sqrt(this.distSqr(t))},distSqr(t){const e=t.x-this.x,n=t.y-this.y;return e*e+n*n},angle(){return Math.atan2(this.y,this.x)},angleTo(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith(t){return this.angleWithSep(t.x,t.y)},angleWithSep(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult(t){const e=t[0]*this.x+t[1]*this.y,n=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=n,this},_add(t){return this.x+=t.x,this.y+=t.y,this},_sub(t){return this.x-=t.x,this.y-=t.y,this},_mult(t){return this.x*=t,this.y*=t,this},_div(t){return this.x/=t,this.y/=t,this},_multByPoint(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint(t){return this.x/=t.x,this.y/=t.y,this},_unit(){return this._div(this.mag()),this},_perp(){const t=this.y;return this.y=this.x,this.x=-t,this},_rotate(t){const e=Math.cos(t),n=Math.sin(t),i=e*this.x-n*this.y,r=n*this.x+e*this.y;return this.x=i,this.y=r,this},_rotateAround(t,e){const n=Math.cos(t),i=Math.sin(t),r=e.x+n*(this.x-e.x)-i*(this.y-e.y),s=e.y+i*(this.x-e.x)+n*(this.y-e.y);return this.x=r,this.y=s,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:pr};pr.convert=function(t){if(t instanceof pr)return t;if(Array.isArray(t))return new pr(+t[0],+t[1]);if(t.x!==void 0&&t.y!==void 0)return new pr(+t.x,+t.y);throw new Error("Expected [x, y] or {x, y} point format")};class vS{constructor(e,n,i,r,s){this.properties={},this.extent=i,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=r,this._values=s,e.readFields(JR,this,n)}loadGeometry(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos,i=[];let r,s=1,o=0,a=0,l=0;for(;e.pos<n;){if(o<=0){const c=e.readVarint();s=c&7,o=c>>3}if(o--,s===1||s===2)a+=e.readSVarint(),l+=e.readSVarint(),s===1&&(r&&i.push(r),r=[]),r&&r.push(new pr(a,l));else if(s===7)r&&r.push(r[0].clone());else throw new Error(`unknown command ${s}`)}return r&&i.push(r),i}bbox(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos;let i=1,r=0,s=0,o=0,a=1/0,l=-1/0,c=1/0,u=-1/0;for(;e.pos<n;){if(r<=0){const h=e.readVarint();i=h&7,r=h>>3}if(r--,i===1||i===2)s+=e.readSVarint(),o+=e.readSVarint(),s<a&&(a=s),s>l&&(l=s),o<c&&(c=o),o>u&&(u=o);else if(i!==7)throw new Error(`unknown command ${i}`)}return[a,c,l,u]}toGeoJSON(e,n,i){const r=this.extent*Math.pow(2,i),s=this.extent*e,o=this.extent*n,a=this.loadGeometry();function l(d){return[(d.x+s)*360/r-180,360/Math.PI*Math.atan(Math.exp((1-(d.y+o)*2/r)*Math.PI))-90]}function c(d){return d.map(l)}let u;if(this.type===1){const d=[];for(const v of a)d.push(v[0]);const p=c(d);u=d.length===1?{type:"Point",coordinates:p[0]}:{type:"MultiPoint",coordinates:p}}else if(this.type===2){const d=a.map(c);u=d.length===1?{type:"LineString",coordinates:d[0]}:{type:"MultiLineString",coordinates:d}}else if(this.type===3){const d=tP(a),p=[];for(const v of d)p.push(v.map(c));u=p.length===1?{type:"Polygon",coordinates:p[0]}:{type:"MultiPolygon",coordinates:p}}else throw new Error("unknown feature type");const h={type:"Feature",geometry:u,properties:this.properties};return this.id!=null&&(h.id=this.id),h}}vS.types=["Unknown","Point","LineString","Polygon"];function JR(t,e,n){t===1?e.id=n.readVarint():t===2?eP(n,e):t===3?e.type=n.readVarint():t===4&&(e._geometry=n.pos)}function eP(t,e){const n=t.readVarint()+t.pos;for(;t.pos<n;){const i=e._keys[t.readVarint()],r=e._values[t.readVarint()];e.properties[i]=r}}function tP(t){const e=t.length;if(e<=1)return[t];const n=[];let i,r;for(let s=0;s<e;s++){const o=nP(t[s]);o!==0&&(r===void 0&&(r=o<0),r===o<0?(i&&n.push(i),i=[t[s]]):i&&i.push(t[s]))}return i&&n.push(i),n}function nP(t){let e=0;for(let n=0,i=t.length,r=i-1,s,o;n<i;r=n++)s=t[n],o=t[r],e+=(o.x-s.x)*(s.y+o.y);return e}class iP{constructor(e,n){this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(rP,this,n),this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const n=this._pbf.readVarint()+this._pbf.pos;return new vS(this._pbf,n,this.extent,this._keys,this._values)}}function rP(t,e,n){t===15?e.version=n.readVarint():t===1?e.name=n.readString():t===5?e.extent=n.readVarint():t===2?e._features.push(n.pos):t===3?e._keys.push(n.readString()):t===4&&e._values.push(sP(n))}function sP(t){let e=null;const n=t.readVarint()+t.pos;for(;t.pos<n;){const i=t.readVarint()>>3;e=i===1?t.readString():i===2?t.readFloat():i===3?t.readDouble():i===4?t.readVarint64():i===5?t.readVarint():i===6?t.readSVarint():i===7?t.readBoolean():null}return e}class oP{constructor(e,n){this.layers=e.readFields(aP,{},n)}}function aP(t,e,n){if(t===3){const i=new iP(n,n.readVarint()+n.pos);i.length&&(e[i.name]=i)}}const np=65536*65536,av=1/np,lP=12,lv=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),Ld=0,Ql=1,Fo=2,Jl=5;class cP{constructor(e=new Uint8Array(16)){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer),this.pos=0,this.type=0,this.length=this.buf.length}readFields(e,n,i=this.length){for(;this.pos<i;){const r=this.readVarint(),s=r>>3,o=this.pos;this.type=r&7,e(s,n,this),this.pos===o&&this.skip(r)}return n}readMessage(e,n){return this.readFields(e,n,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*np;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*np;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const n=this.buf;let i,r;return r=n[this.pos++],i=r&127,r<128||(r=n[this.pos++],i|=(r&127)<<7,r<128)||(r=n[this.pos++],i|=(r&127)<<14,r<128)||(r=n[this.pos++],i|=(r&127)<<21,r<128)?i:(r=n[this.pos],i|=(r&15)<<28,uP(i,e,this))}readVarint64(){return this.readVarint(!0)}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,n=this.pos;return this.pos=e,e-n>=lP&&lv?lv.decode(this.buf.subarray(n,e)):wP(this.buf,n,e)}readBytes(){const e=this.readVarint()+this.pos,n=this.buf.subarray(this.pos,e);return this.pos=e,n}readPackedVarint(e=[],n){const i=this.readPackedEnd();for(;this.pos<i;)e.push(this.readVarint(n));return e}readPackedSVarint(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===Fo?this.readVarint()+this.pos:this.pos+1}skip(e){const n=e&7;if(n===Ld)for(;this.buf[this.pos++]>127;);else if(n===Fo)this.pos=this.readVarint()+this.pos;else if(n===Jl)this.pos+=4;else if(n===Ql)this.pos+=8;else throw new Error(`Unimplemented type: ${n}`)}writeTag(e,n){this.writeVarint(e<<3|n)}realloc(e){let n=this.length||16;for(;n<this.pos+e;)n*=2;if(n!==this.length){const i=new Uint8Array(n);i.set(this.buf),this.buf=i,this.dataView=new DataView(i.buffer),this.length=n}}finish(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)}writeFixed32(e){this.realloc(4),this.dataView.setInt32(this.pos,e,!0),this.pos+=4}writeSFixed32(e){this.realloc(4),this.dataView.setInt32(this.pos,e,!0),this.pos+=4}writeFixed64(e){this.realloc(8),this.dataView.setInt32(this.pos,e&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(e*av),!0),this.pos+=8}writeSFixed64(e){this.realloc(8),this.dataView.setInt32(this.pos,e&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(e*av),!0),this.pos+=8}writeVarint(e){if(e=+e||0,e>268435455||e<0){hP(e,this);return}this.realloc(4),this.buf[this.pos++]=e&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=e>>>7&127)))}writeSVarint(e){this.writeVarint(e<0?-e*2-1:e*2)}writeBoolean(e){this.writeVarint(+e)}writeString(e){e=String(e),this.realloc(e.length*4),this.pos++;const n=this.pos;this.pos=EP(this.buf,e,this.pos);const i=this.pos-n;i>=128&&cv(n,i,this),this.pos=n-1,this.writeVarint(i),this.pos+=i}writeFloat(e){this.realloc(4),this.dataView.setFloat32(this.pos,e,!0),this.pos+=4}writeDouble(e){this.realloc(8),this.dataView.setFloat64(this.pos,e,!0),this.pos+=8}writeBytes(e){const n=e.length;this.writeVarint(n),this.realloc(n);for(let i=0;i<n;i++)this.buf[this.pos++]=e[i]}writeRawMessage(e,n){this.pos++;const i=this.pos;e(n,this);const r=this.pos-i;r>=128&&cv(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r}writeMessage(e,n,i){this.writeTag(e,Fo),this.writeRawMessage(n,i)}writePackedVarint(e,n){n.length&&this.writeMessage(e,pP,n)}writePackedSVarint(e,n){n.length&&this.writeMessage(e,mP,n)}writePackedBoolean(e,n){n.length&&this.writeMessage(e,_P,n)}writePackedFloat(e,n){n.length&&this.writeMessage(e,gP,n)}writePackedDouble(e,n){n.length&&this.writeMessage(e,vP,n)}writePackedFixed32(e,n){n.length&&this.writeMessage(e,xP,n)}writePackedSFixed32(e,n){n.length&&this.writeMessage(e,yP,n)}writePackedFixed64(e,n){n.length&&this.writeMessage(e,SP,n)}writePackedSFixed64(e,n){n.length&&this.writeMessage(e,MP,n)}writeBytesField(e,n){this.writeTag(e,Fo),this.writeBytes(n)}writeFixed32Field(e,n){this.writeTag(e,Jl),this.writeFixed32(n)}writeSFixed32Field(e,n){this.writeTag(e,Jl),this.writeSFixed32(n)}writeFixed64Field(e,n){this.writeTag(e,Ql),this.writeFixed64(n)}writeSFixed64Field(e,n){this.writeTag(e,Ql),this.writeSFixed64(n)}writeVarintField(e,n){this.writeTag(e,Ld),this.writeVarint(n)}writeSVarintField(e,n){this.writeTag(e,Ld),this.writeSVarint(n)}writeStringField(e,n){this.writeTag(e,Fo),this.writeString(n)}writeFloatField(e,n){this.writeTag(e,Jl),this.writeFloat(n)}writeDoubleField(e,n){this.writeTag(e,Ql),this.writeDouble(n)}writeBooleanField(e,n){this.writeVarintField(e,+n)}}function uP(t,e,n){const i=n.buf;let r,s;if(s=i[n.pos++],r=(s&112)>>4,s<128||(s=i[n.pos++],r|=(s&127)<<3,s<128)||(s=i[n.pos++],r|=(s&127)<<10,s<128)||(s=i[n.pos++],r|=(s&127)<<17,s<128)||(s=i[n.pos++],r|=(s&127)<<24,s<128)||(s=i[n.pos++],r|=(s&1)<<31,s<128))return Rs(t,r,e);throw new Error("Expected varint not more than 10 bytes")}function Rs(t,e,n){return n?e*4294967296+(t>>>0):(e>>>0)*4294967296+(t>>>0)}function hP(t,e){let n,i;if(t>=0?(n=t%4294967296|0,i=t/4294967296|0):(n=~(-t%4294967296),i=~(-t/4294967296),n^4294967295?n=n+1|0:(n=0,i=i+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),dP(n,i,e),fP(i,e)}function dP(t,e,n){n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos]=t&127}function fP(t,e){const n=(t&7)<<4;e.buf[e.pos++]|=n|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127)))))}function cv(t,e,n){const i=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(Math.LN2*7));n.realloc(i);for(let r=n.pos-1;r>=t;r--)n.buf[r+i]=n.buf[r]}function pP(t,e){for(let n=0;n<t.length;n++)e.writeVarint(t[n])}function mP(t,e){for(let n=0;n<t.length;n++)e.writeSVarint(t[n])}function gP(t,e){for(let n=0;n<t.length;n++)e.writeFloat(t[n])}function vP(t,e){for(let n=0;n<t.length;n++)e.writeDouble(t[n])}function _P(t,e){for(let n=0;n<t.length;n++)e.writeBoolean(t[n])}function xP(t,e){for(let n=0;n<t.length;n++)e.writeFixed32(t[n])}function yP(t,e){for(let n=0;n<t.length;n++)e.writeSFixed32(t[n])}function SP(t,e){for(let n=0;n<t.length;n++)e.writeFixed64(t[n])}function MP(t,e){for(let n=0;n<t.length;n++)e.writeSFixed64(t[n])}function wP(t,e,n){let i="",r=e;for(;r<n;){const s=t[r];let o=null,a=s>239?4:s>223?3:s>191?2:1;if(r+a>n)break;let l,c,u;a===1?s<128&&(o=s):a===2?(l=t[r+1],(l&192)===128&&(o=(s&31)<<6|l&63,o<=127&&(o=null))):a===3?(l=t[r+1],c=t[r+2],(l&192)===128&&(c&192)===128&&(o=(s&15)<<12|(l&63)<<6|c&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):a===4&&(l=t[r+1],c=t[r+2],u=t[r+3],(l&192)===128&&(c&192)===128&&(u&192)===128&&(o=(s&15)<<18|(l&63)<<12|(c&63)<<6|u&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,a=1):o>65535&&(o-=65536,i+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),i+=String.fromCharCode(o),r+=a}return i}function EP(t,e,n){for(let i=0,r,s;i<e.length;i++){if(r=e.charCodeAt(i),r>55295&&r<57344)if(s)if(r<56320){t[n++]=239,t[n++]=191,t[n++]=189,s=r;continue}else r=s-55296<<10|r-56320|65536,s=null;else{r>56319||i+1===e.length?(t[n++]=239,t[n++]=191,t[n++]=189):s=r;continue}else s&&(t[n++]=239,t[n++]=191,t[n++]=189,s=null);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=r&63|128)}return n}const TP="https://tiles.openfreemap.org/planet/{v}/{z}/{x}/{y}.pbf",AP="https://tiles.openfreemap.org/planet",_S=11,xS=14,Dd=8,bP=.35,ei=512,CP=80,Nd=112,uv=240,RP=8,PP=12,ha=xS;function LP(t,e,n){const i=2**t,r=o=>o/i*360-180,s=o=>Math.atan(Math.sinh(Math.PI*(1-2*o/i)))*180/Math.PI;return{west:r(e),east:r(e+1),north:s(n),south:s(n+1)}}function Ou(t,e,n){const i=2**t,r=n*Math.PI/180;return[Math.floor((e+180)/360*i),Math.floor((1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i)]}function DP(t,e,n,i,{split:r=bP,minZ:s=_S,maxZ:o=xS,reach:a=1/0}={}){const l=[],c=[],u=(m,f,_)=>{const g=LP(m,f,_),S=n.toX(g.west),L=n.toX(g.east),C=n.toZ(g.north),A=n.toZ(g.south),D=Math.max(S-e[0],0,e[0]-L),Y=Math.max(C-e[2],0,e[2]-A);return{d:Math.hypot(D,Y,Math.max(0,e[1])),size:L-S}},h=(m,f,_)=>{const g=`${m}/${f}/${_}`,{d:S,size:L}=u(m,f,_);if(S>a)return;if(!(m<o&&L>r*Math.max(S,.5))){m>=s&&(i(g)?l.push([g,S]):c.push([g,S]));return}const C=[[2*f,2*_],[2*f+1,2*_],[2*f,2*_+1],[2*f+1,2*_+1]],A=C.map(([D,Y])=>`${m+1}/${D}/${Y}`);if(m<s||A.every(i)||!i(g)){for(const[D,Y]of C)h(m+1,D,Y);return}c.push(...A.map(D=>[D,S])),l.push([g,S])},[d,p]=Ou(Dd,t.west,t.north),[v,x]=Ou(Dd,t.east,t.south);for(let m=d;m<=v;m++)for(let f=p;f<=x;f++)h(Dd,m,f);return l.sort((m,f)=>m[1]-f[1]),c.sort((m,f)=>m[1]-f[1]),{show:l.slice(0,CP).map(m=>m[0]),want:c.map(m=>m[0])}}const Ps=[[["motorway"],"#f2d58a",[2.2,3,4.2,6],"#2a2620"],[["trunk"],"#efdfae",[1.8,2.6,3.6,5.2],"#2a2620"],[["primary"],"#f1ece0",[1.4,2.1,3,4.6],"#3a362f"],[["secondary"],"#ece7da",[.9,1.5,2.4,3.8],"#3a362f"],[["tertiary"],"#e6e1d4",[.6,1.1,1.9,3.2],null],[["minor"],"#ddd8cb",[0,.6,1.2,2.2],null],[["service","track"],"#cfcabc",[0,0,.6,1.2],null],[["path"],"#c9c3b4",[0,0,0,.7],null]],NP="#6f99ad",UP="#6f99ad";function IP(t,e,n){const i=t.layers,r=ei/4096,s=Math.min(3,Math.max(0,e-11)),o=(u,h)=>{const d=i[u];if(d)for(let p=0;p<d.length;p++)h(d.feature(p))},a=u=>{const h=new Path2D;for(const d of u.loadGeometry())d.forEach((p,v)=>v?h.lineTo(p.x*r,p.y*r):h.moveTo(p.x*r,p.y*r)),u.type===3&&h.closePath();return h};n.clearRect(0,0,ei,ei),o("landuse",u=>{const h={residential:"rgba(222,214,200,0.22)",commercial:"rgba(232,205,190,0.3)",retail:"rgba(232,205,190,0.3)",industrial:"rgba(214,206,214,0.3)",cemetery:"rgba(170,200,160,0.3)",hospital:"rgba(240,200,200,0.35)",school:"rgba(236,226,190,0.3)",railway:"rgba(210,205,200,0.25)"}[u.properties.class];h&&(n.fillStyle=h,n.fill(a(u)))}),o("park",u=>{n.fillStyle="rgba(132,176,112,0.32)",n.fill(a(u))}),o("landcover",u=>{const h={wood:"rgba(92,132,86,0.18)",grass:"rgba(150,186,120,0.18)",wetland:"rgba(120,170,170,0.25)",sand:"rgba(230,214,170,0.3)",ice:"rgba(245,248,250,0.6)"}[u.properties.class];h&&(n.fillStyle=h,n.fill(a(u)))}),n.fillStyle=NP,o("water",u=>{u.properties.class!=="swimming_pool"&&n.fill(a(u))}),n.strokeStyle=UP,n.lineCap="round",n.lineJoin="round",o("waterway",u=>{var d;const h=(d={river:[1.2,1.8,2.6,3.6],canal:[.8,1.2,1.8,2.6],stream:[0,.5,.9,1.4]}[u.properties.class])==null?void 0:d[s];h&&(n.lineWidth=h,n.stroke(a(u)))}),e>=13&&(n.fillStyle=e>=14?"rgba(214,206,194,0.92)":"rgba(214,206,194,0.75)",n.strokeStyle="rgba(90,82,72,0.6)",n.lineWidth=.5,o("building",u=>{const h=a(u);n.fill(h),e>=14&&n.stroke(h)}));const l=Ps.map(()=>[]),c=[];o("transportation",u=>{if(u.type!==2)return;const h=Ps.findIndex(([d])=>d.includes(u.properties.class));h>=0?l[h].push(u):u.properties.class==="rail"&&e>=12&&c.push(u)});for(let u=Ps.length-1;u>=0;u--){const[,,h,d]=Ps[u],p=h[s];if(!(!p||!d)){n.strokeStyle=d,n.lineWidth=p+1.6;for(const v of l[u])n.stroke(a(v))}}for(let u=Ps.length-1;u>=0;u--){const[,h,d]=Ps[u],p=d[s];if(p){n.strokeStyle=h,n.lineWidth=p;for(const v of l[u])n.stroke(a(v))}}n.setLineDash([3,3]),n.strokeStyle="#5a5650",n.lineWidth=e>=14?1.6:1.1;for(const u of c)n.stroke(a(u));n.setLineDash([])}function FP(t){const e=2**(ha-_S),[n,i]=Ou(ha,t.west,t.north),[r,s]=Ou(ha,t.east,t.south),o=Math.floor(n/e)*e,a=Math.floor(i/e)*e;return{x0:o,y0:a,width:r-o+1,height:s-a+1}}function OP(t,e,n){t.fill(0);for(const[i,r]of n){const[s,o,a]=i.split("/").map(Number),l=ha-s,c=2**l,u=Math.max(0,o*c-e.x0),h=Math.min(e.width,(o+1)*c-e.x0),d=Math.max(0,a*c-e.y0),p=Math.min(e.height,(a+1)*c-e.y0);for(let v=d;v<p;v++)for(let x=u;x<h;x++){const m=(v*e.width+x)*4;t[m]=r,t[m+1]=l,t[m+3]=255}}}class kP{constructor(e,n,i){Object.assign(this,{renderer:e,region:n,U:i}),this.tiles=new Map,this.inflight=0,this.frameNo=0,this.visible=!0,this.failures=0,this.grid=FP(n),this.indexData=new Uint8Array(this.grid.width*this.grid.height*4),this.index=new Hi(this.indexData,this.grid.width,this.grid.height),this.index.magFilter=this.index.minFilter=kt,this.index.needsUpdate=!0,this.tex=new ch(null,ei,ei,Nd),this.tex.source.dataReady=!1,this.tex.generateMipmaps=!0,this.tex.minFilter=Ii,this.tex.magFilter=nn,this.tex.anisotropy=8,this.tex.colorSpace=Bn,this.tex.needsUpdate=!0,e.initTexture(this.tex),this.free=Array.from({length:Nd},(s,o)=>Nd-1-o),this.canvas=typeof OffscreenCanvas<"u"?new OffscreenCanvas(ei,ei):Object.assign(document.createElement("canvas"),{width:ei,height:ei}),this.ctx=this.canvas.getContext("2d");const r=2**ha;i.streetTex.value=this.tex,i.streetIndex.value=this.index,i.streetGeo.value.set(this.grid.x0/r*360-180,Math.PI*(1-2*this.grid.y0/r),this.grid.width,this.grid.height),this._indexKey="",this.version=fetch(AP).then(s=>s.json()).then(s=>s.tiles[0].split("/planet/")[1].split("/")[0]).catch(()=>null)}_load(e){const n={state:"loading",used:this.frameNo,layer:-1};this.tiles.set(e,n),this.inflight++;const[i,r,s]=e.split("/").map(Number);this.version.then(o=>{if(!o)throw new Error("no tile version");return fetch(TP.replace("{v}",o).replace("{z}",i).replace("{x}",r).replace("{y}",s))}).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.arrayBuffer()}).then(o=>{n.buf=new Uint8Array(o),n.state="loaded"}).catch(()=>{n.state="failed",this.failures++}).finally(()=>{this.inflight--})}_draw(e,n){let i=this.free.pop();if(i===void 0){let s=null;for(const[o,a]of this.tiles)a.layer>=0&&a.used<this.frameNo&&(!s||a.used<s[1].used)&&(s=[o,a]);if(!s)return!1;i=s[1].layer,s[1].layer=-1}const r=Number(e.split("/")[0]);return IP(new oP(new cP(n.buf)),r,this.ctx),this._upload(i),n.layer=i,!0}_upload(e){const n=this.renderer.getContext();this.renderer.state.bindTexture(n.TEXTURE_2D_ARRAY,this.renderer.properties.get(this.tex).__webglTexture),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),n.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,e,ei,ei,1,n.RGBA,n.UNSIGNED_BYTE,this.canvas),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),this._mipsDue=!0}update(e,n,i){this.frameNo++;const r=u=>{var h;return((h=this.tiles.get(u))==null?void 0:h.layer)>=0},{show:s,want:o}=this.visible?DP(this.region,e.position.toArray(),i,r,{reach:Math.min(120,Math.max(20,n*2.2))}):{show:[],want:[]};for(const u of[...s,...o]){const h=this.tiles.get(u);h?h.used=this.frameNo:this.inflight<RP&&this._load(u)}const a=performance.now();for(const u of o){const h=this.tiles.get(u);if(!((h==null?void 0:h.state)!=="loaded"||h.layer>=0)&&(performance.now()-a>PP||!this._draw(u,h)))break}if(this._mipsDue){const u=this.renderer.getContext();this.renderer.state.bindTexture(u.TEXTURE_2D_ARRAY,this.renderer.properties.get(this.tex).__webglTexture),u.generateMipmap(u.TEXTURE_2D_ARRAY),this._mipsDue=!1}const l=s.map(u=>[u,this.tiles.get(u).layer]),c=l.map(u=>u.join(":")).sort().join(",");if(c!==this._indexKey&&(this._indexKey=c,OP(this.indexData,this.grid,l),this.index.needsUpdate=!0),this.U.streetOn.value=s.length>0?1:0,this.tiles.size>uv){const u=new Set(s),h=[...this.tiles].filter(([d,p])=>!u.has(d)&&p.state!=="loading").sort((d,p)=>d[1].used-p[1].used);for(const[d,p]of h.slice(0,this.tiles.size-uv))p.layer>=0&&this.free.push(p.layer),this.tiles.delete(d)}return this.pending=o.filter(u=>!r(u)).length,s.length}setVisible(e){this.visible=e}dispose(){this.tex.dispose(),this.index.dispose(),this.tiles.clear()}}const zP=`
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
  }`,BP=`
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
  }`,ip=new Hi(new Uint8Array([0]),1,1,$a);ip.needsUpdate=!0;function Ud(t,e={}){return new Bt({vertexShader:zP,fragmentShader:BP,uniforms:{uExag:t.exag,uFlat:t.flat,uShadeK:t.shadeK,uStyle:t.style,uHaze:t.haze,uHazeRange:t.hazeRange,uBg:t.bg,uInterval:{value:100},uWater:t.water,uWaterRect:t.waterRect,uWaterOn:t.waterOn,uTileWater:{value:e.tileWater??ip},uTileWaterRect:{value:e.tileWaterRect??new je},uTileWaterOn:{value:e.tileWater?1:0},uGust:t.gust,uGustRect:t.gustRect,uGustOn:t.gustOn,uGustStops:t.gustStops,uGustColors:t.gustColors,uProj:t.proj,uStreetTex:t.streetTex,uStreetIndex:t.streetIndex,uStreetGeo:t.streetGeo,uStreetOn:t.streetOn,uMask:{value:e.mask??ip},uMaskRect:{value:e.maskRect??new je},uMaskEps:{value:e.maskEps??new Be},uMaskOn:{value:e.mask?1:0},uHole:{value:e.hole??new je},uHoleOn:{value:e.hole?1:0},uSinkBox:{value:e.sinkBox??new je}}})}const HP={relief:0,mono:1,contours:2},hv="#121211",VP=[[1,800],[2,1/0]],GP=[[1,1100],[2,1/0]],WP=128;class Am{constructor(e,n,i){Yn(this,"_tick",()=>{var u,h;const e=performance.now(),n=Math.min(this.clock.getDelta(),.05),i=this.flight;if(i){const d=i.dur>0?Math.min(1,(e-i.t0)/i.dur):1,p=sR(d);this.camera.position.lerpVectors(i.fromPos,i.pos,p),this.controls.target.lerpVectors(i.fromTarget,i.target,p),i.target.equals(i.fromTarget)||(this.camera.position.y+=Math.sin(Math.PI*p)*i.fromPos.distanceTo(i.pos)*.12),d>=1&&(this.flight=null)}if(this.held.size){const d=aR(this.held,this.camera.position.toArray(),this.controls.target.toArray(),n);this.camera.position.x+=d[0],this.camera.position.z+=d[2],this.controls.target.x+=d[0],this.controls.target.z+=d[2]}const r=this.reducedMotion;this.controls.enableDamping=!r;const s=this.camera.position.distanceTo(this.controls.target);this.controls.rotateSpeed=dR(s),this.controls.update();for(const[d,p]of[["flat",5],["style",8]])this.U[d].value=cR(this.U[d].value,this.targets[d],n,p,r);this.camera.near=co.clamp(s*.01,.05,20),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this._updateLevels(s);const o=this.detail.update(this.camera,s);this._drapeDue&&e>this._drapeDue&&(this._drapeDue=0,this._drape());const a=this.streets.update(this.camera,s,this.P),l=this.e,c=this.U.flat.value;for(const d of Object.values(this.lines))d.setScale(l,c),d.updateDistance(s,a>0);(u=this.rivers)==null||u.update(s),this.U.shadeK.value=co.clamp(Math.sqrt(s/120),1,3.2),this.U.hazeRange.value.set(s,s*4),this.frame={dist:s,tiles:o,streets:a,streetsPending:this.streets.pending+this.streets.inflight,flat:c,exag:this.U.exag.value,e:l,failures:this.detail.failures},(h=this.onFrame)==null||h.call(this,this),this.renderer.render(this.scene,this.camera),this._raf=requestAnimationFrame(this._tick)});this.bundle=n,this.P=n.P,this.held=new Set,this.flight=null,this._view="3d";const r=this.renderer=new ky({canvas:e,antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(devicePixelRatio,1.5)),r.setSize(innerWidth,innerHeight),this.scene=new zy,this.scene.background=new Ve(hv),this.camera=new bn(30,innerWidth/innerHeight,.5,12e3);const s=this.P,o=n.manifest.region,a=.5/n.manifest.water.overview.per_deg;i.flipY=!1,i.colorSpace=Bn,i.needsUpdate=!0,this.U={exag:{value:1.5},flat:{value:0},style:{value:0},haze:{value:.45},bg:{value:new Ve(hv)},shadeK:{value:1},hazeRange:{value:new Be(1e3,4e3)},proj:{value:new je(s.lon0,s.lat0,s.kx,s.kz)},streetTex:{value:null},streetIndex:{value:null},streetGeo:{value:new je},streetOn:{value:0},gust:{value:null},gustRect:{value:new je},gustOn:{value:0},gustStops:{value:new Array(6).fill(0)},gustColors:{value:Array.from({length:6},()=>new Ve)},water:{value:i},waterOn:{value:1},waterRect:{value:new je(s.toX(o.west-a),s.toZ(o.north+a),s.toX(o.east+a),s.toZ(o.south-a))}},this.targets={flat:0,style:0},this.regionBox=new je(s.toX(o.west),s.toX(o.east),s.toZ(o.north),s.toZ(o.south)),this.detail=new YR(this.scene,this.U,n,s,h=>Ud(this.U,h));const l=(h,d)=>new je(h.x+d,h.y-d,h.z+d,h.w-d),c=Ud(this.U,{mask:this.detail.mask,maskRect:this.detail.maskRect,maskEps:this.detail.maskEps});c.polygonOffset=!0,c.polygonOffsetFactor=-1,c.polygonOffsetUnits=-2,this.levels=[this._levels(n.outer,Ud(this.U,{hole:l(this.regionBox,1),sinkBox:l(this.regionBox,10)}),GP,0),this._levels(n.overview,c,VP,0)],this.elevAt=(h,d)=>this.detail.sample(h,d)??n.overview.sample(h,d)??n.outer.sample(h,d)??0,this.lines=Object.fromEntries(Object.entries(n.lines).map(([h,d])=>[h,new QR(this.scene,h,d,s)])),this._drape=()=>{var p;const h=(v,x)=>this.detail.isShown(v,x),d=(v,x)=>n.overview.sample(v,x);for(const v of Object.values(this.lines))v.drape(h,d);(p=this.rivers)==null||p.drape(this.elevAt)},this._drape(),this.streets=new kP(this.renderer,o,this.U),this.detail.onChange=()=>{this._drapeDue=performance.now()+120},this._resolution();const u=this.controls=new CR(this.camera,e);u.enableDamping=!0,u.dampingFactor=.08,u.screenSpacePanning=!1,u.zoomToCursor=!0,u.maxPolarAngle=Math.PI*.47,u.minDistance=4,u.maxDistance=4500,u.mouseButtons={LEFT:xi.PAN,MIDDLE:xi.DOLLY,RIGHT:xi.ROTATE},u.touches={ONE:Ui.PAN,TWO:Ui.DOLLY_ROTATE},u.addEventListener("start",()=>{this.flight=null}),this._onContext=h=>h.preventDefault(),e.addEventListener("contextmenu",this._onContext),this._onKeyDown=h=>{hR(h)&&(h.preventDefault(),this.held.add(h.key),this.flight=null)},this._onKeyUp=h=>h.key==="Meta"?this.held.clear():this.held.delete(h.key),this._onBlur=()=>this.held.clear(),this._onResize=()=>{var h;r.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this._resolution(),(h=this.onResize)==null||h.call(this)},addEventListener("keydown",this._onKeyDown),addEventListener("keyup",this._onKeyUp),addEventListener("blur",this._onBlur),addEventListener("resize",this._onResize),this._motion=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.jumpTo("home"),this.clock=new Jy,this._v=new I,this.frame={dist:0,tiles:0,flat:0},window.__earthnote=this,this._raf=requestAnimationFrame(this._tick)}static async create(e,n){const i=await new wm().loadAsync(n.waterUrl);return new Am(e,n,i)}_levels(e,n,i,r){return{grid:e,material:n,order:r,levels:i.map(([s,o])=>({step:s,far:o,mesh:null})),current:-1}}_levelMesh(e,n){if(!n.mesh){const{ncols:i,nrows:r}=e.grid.meta;n.mesh=new Ws;for(const s of Zw(i,r,WP*n.step,n.step)){const o=new rn(Cx(nS,e.grid,this.P,n.step,0,s),e.material);o.renderOrder=e.order,n.mesh.add(o)}this.scene.add(n.mesh)}return n.mesh}_updateLevels(e){const n=this.camera.position,i=this.regionBox,r=Math.min(n.x-i.x,i.y-n.x,n.z-i.z,i.w-n.z),s=Math.max(e,r>0?Math.hypot(r,n.y):e);for(const o of this.levels){const a=o===this.levels[0]?s:e;let l=o.current<0?o.levels.findIndex(u=>a<=u.far):o.current;for(;l<o.levels.length-1&&a>o.levels[l].far*1.1;)l++;for(;l>0&&a<o.levels[l-1].far*.9;)l--;if(l===o.current)continue;const c=this._levelMesh(o,o.levels[l]);for(const u of o.levels)u.mesh&&(u.mesh.visible=u.mesh===c);o.current=l}}_resolution(){for(const e of Object.values(this.lines??{}))e.setResolution(innerWidth,innerHeight)}get reducedMotion(){var e;return!!((e=this._motion)!=null&&e.matches)}get e(){return this.U.exag.value*.001*(1-this.U.flat.value)}project(e,n,i){const r=this._v.set(e,n,i).project(this.camera);return[(r.x+1)/2*innerWidth,(1-r.y)/2*innerHeight,r.z]}_pose(e){return oR(e,this.P,this.elevAt,this.e)}jumpTo(e){const n=this._pose(ov[e]);this.camera.position.set(...n.pos),this.controls.target.set(...n.target)}flyTo(e){const n=this._pose(ov[e]);this._fly(new I(...n.pos),new I(...n.target),1800)}flyToPoint(e,n,i=60){const r=new I(this.P.toX(e),this.elevAt(e,n)*this.e,this.P.toZ(n)),s=this.camera.position.clone().sub(this.controls.target).normalize();this._view==="2d"&&s.set(0,1,.001).normalize(),this._fly(r.clone().add(s.multiplyScalar(i)),r,1500)}orbit(e){const n=this.controls.target,i=fR(this.camera.position.toArray(),n.toArray(),e,.001,this.controls.maxPolarAngle);this._fly(new I(...i),n.clone(),350)}_fly(e,n,i){this.flight={t0:performance.now(),dur:lR(i,this.reducedMotion),fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),pos:e,target:n}}setStyle(e){this.targets.style=HP[e]}setExag(e){const n=e/this.U.exag.value,i=this.controls.target.y*(n-1);this.U.exag.value=e,this.controls.target.y+=i,this.camera.position.y+=i}addRivers(e){this.rivers=e,e.drape(this.elevAt)}setLayer(e,n){var i;e==="streets"?this.streets.setVisible(n):(i=this.lines[e])==null||i.setVisible(n)}setView(e){var a;if(e===this._view)return;this._view=e;const n=e==="2d";this.targets.flat=n?1:0;const i=new Du().setFromVector3(this.camera.position.clone().sub(this.controls.target));n&&(this._savedPolar=i.phi),i.phi=n?.001:this._savedPolar??.7,this.controls.minPolarAngle=0,this.controls.maxPolarAngle=n?.001:Math.PI*.47;const r=this.controls.target.clone(),s=this.P.fromX(r.x),o=this.P.fromZ(r.z);r.y=n?0:this.elevAt(s,o)*this.U.exag.value*.001,this._fly(r.clone().add(new I().setFromSpherical(i)),r,900),(a=this.onView)==null||a.call(this,e)}dispose(){var e,n;cancelAnimationFrame(this._raf),removeEventListener("keydown",this._onKeyDown),removeEventListener("keyup",this._onKeyUp),removeEventListener("blur",this._onBlur),removeEventListener("resize",this._onResize),this.renderer.domElement.removeEventListener("contextmenu",this._onContext);for(const i of Object.values(this.lines))i.dispose();for(const i of this.levels){for(const r of i.levels)(e=r.mesh)==null||e.traverse(s=>{var o;return(o=s.geometry)==null?void 0:o.dispose()});i.material.dispose()}(n=this.rivers)==null||n.dispose(),this.streets.dispose(),this.detail.dispose(),this.controls.dispose(),this.renderer.dispose(),window.__earthnote===this&&delete window.__earthnote}}function dv({label:t,options:e,value:n,onChange:i}){return M.jsxs("div",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:t}),M.jsx("div",{className:"seg",role:"group","aria-label":t,children:e.map(([r,s])=>M.jsx("button",{"aria-pressed":n===r,onClick:()=>{r!==n&&i(r)},children:s},r))})]})}function jP({label:t,sub:e,k:n,on:i,onChange:r,swatch:s}){return M.jsxs("button",{className:"tog",role:"switch","aria-checked":i,"aria-label":t,onClick:()=>r(!i),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:[t,e&&M.jsx("small",{children:e})]}),s,n&&M.jsx("kbd",{children:n})]})}function $P({scene:t}){const[e,n]=K.useState("3d"),[i,r]=K.useState("relief"),[s,o]=K.useState(t.U.exag.value);return K.useEffect(()=>(t.onView=n,()=>{t.onView=null}),[t]),M.jsxs("div",{className:"panel controls",children:[M.jsx(dv,{label:"View",options:[["3d","3D"],["2d","2D"]],value:e,onChange:a=>{n(a),t.setView(a)}}),M.jsx(dv,{label:"Style",options:[["relief","Relief"],["mono","Mono"],["contours","Contours"]],value:i,onChange:a=>{r(a),t.setStyle(a)}}),M.jsxs("label",{className:"ctl-row slider",children:["Vertical exaggeration ",M.jsxs("span",{className:"mono",children:[s.toFixed(1),"×"]}),M.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:s,"aria-label":"Vertical exaggeration",disabled:e==="2d",onChange:a=>{const l=+a.target.value;o(l),t.setExag(l)}})]}),M.jsx("div",{className:"hint",children:"Drag to move · right-drag or Shift-drag to rotate · scroll to zoom · arrow keys to glide"})]})}const Id=[["motorway","Motorways","interstates and freeways","M"],["trunk","Highways","trunk roads","H"],["primary","Main roads","primary roads","R"],["borders","Borders","country, state and province","B"],["places","Place names","cities, towns and peaks","N"],["streets","Street detail","every road, building and shoreline as you zoom in","S"]];function XP({scene:t,labels:e}){const[n,i]=K.useState(()=>Object.fromEntries(Id.map(([o])=>[o,!0]))),r=(o,a)=>{i(l=>({...l,[o]:a})),o==="borders"?(t.setLayer("country",a),t.setLayer("state",a)):o==="places"?e==null||e.setVisible(a):t.setLayer(o,a)},s=K.useRef(null);return s.current=o=>{if(o.metaKey||o.ctrlKey||o.altKey||Em(o.target))return;const a=Id.find(([,,,l])=>{var c;return l.toLowerCase()===((c=o.key)==null?void 0:c.toLowerCase())});a&&r(a[0],!n[a[0]])},K.useEffect(()=>{const o=a=>{var l;return(l=s.current)==null?void 0:l.call(s,a)};return addEventListener("keydown",o),()=>removeEventListener("keydown",o)},[]),M.jsxs("div",{className:"panel layers-panel",children:[M.jsx("div",{className:"eyebrow",children:"Base map"}),Id.map(([o,a,l,c])=>M.jsx(jP,{k:c,label:a,sub:l,on:n[o],onChange:u=>r(o,u)},o))]})}function YP({active:t,onPlace:e}){return M.jsxs("nav",{className:"panel goto","aria-label":"Go to",children:[M.jsx("div",{className:"eyebrow",children:"Go to"}),M.jsx("div",{className:"row",children:gS.map(([n,i])=>M.jsx("button",{"aria-pressed":t===n,onClick:()=>e(n),children:i},n))})]})}function qP(t,e,n=8){const i=e.trim().toLowerCase();if(!i)return[];const r=[],s=[];for(const o of t){const a=o.name.toLowerCase();a.startsWith(i)?r.push(o):a.includes(i)&&s.push(o)}return[...r,...s].slice(0,n)}const KP={city:"City",town:"Town",peak:"Peak"};function ZP({places:t,detail:e,onPick:n}){const[i,r]=K.useState(""),[s,o]=K.useState(0),a=K.useMemo(()=>qP(t,i),[t,i]),l=c=>{n(c),r(""),o(0)};return M.jsxs("header",{className:"panel header",children:[M.jsxs("div",{className:"title-row",children:[M.jsx("h1",{children:"Earthnote · Pacific Northwest"}),M.jsx("span",{className:"detail-tag mono",title:"Terrain detail at the view centre",children:e})]}),M.jsx("p",{children:"Washington, Oregon, southern British Columbia and the offshore margin."}),M.jsxs("div",{className:"search",children:[M.jsx("input",{type:"search",placeholder:"Find a city, town or peak",value:i,"aria-label":"Find a place",onChange:c=>{r(c.target.value),o(0)},onKeyDown:c=>{c.key==="ArrowDown"&&(c.preventDefault(),o(u=>Math.min(a.length-1,u+1))),c.key==="ArrowUp"&&(c.preventDefault(),o(u=>Math.max(0,u-1))),c.key==="Enter"&&a[s]&&l(a[s]),c.key==="Escape"&&r("")}}),a.length>0&&M.jsx("ul",{role:"listbox",children:a.map((c,u)=>M.jsxs("li",{role:"option","aria-selected":u===s,onMouseDown:()=>l(c),children:[M.jsx("span",{children:c.name}),M.jsxs("span",{className:"sub",children:[KP[c.kind],c.pop?` · ${c.pop.toLocaleString()}`:""]})]},`${c.name}-${c.lon}`))})]})]})}const QP=[["Move","drag, or the arrow keys"],["Rotate / tilt","right-drag, or Shift- / Ctrl-drag"],["Zoom","scroll or pinch; the nav pad's + and −"],["Layers","M motorways · H highways · R main roads · B borders · N names · S streets"]];function JP({manifest:t}){const e=t.credits;return M.jsxs("div",{className:"panel helppanel",children:[M.jsx("div",{className:"hc-set",children:QP.map(([n,i])=>M.jsxs("div",{className:"hc-row",children:[M.jsx("b",{children:n}),M.jsx("span",{children:i})]},n))}),M.jsx("div",{className:"hc-note",children:"Terrain: about 250 m near the camera, 1 km for the region, 2 km offshore. Heights are exaggerated in 3D (see View); 2D shows the same shading flat."}),M.jsxs("div",{className:"attribution",children:[e.terrain,". ",e.osm,". ",e.ne,". Street detail: OpenFreeMap © OpenMapTiles, data © OpenStreetMap contributors.",M.jsxs("div",{className:"hc-dev mono",children:["bundle built ",t.built]})]})]})}const e3={view:M.jsxs(M.Fragment,{children:[M.jsx("path",{d:"M1.3 8S3.8 3.5 8 3.5 14.7 8 14.7 8 12.2 12.5 8 12.5 1.3 8 1.3 8z"}),M.jsx("circle",{cx:"8",cy:"8",r:"2.1"})]}),layers:M.jsxs(M.Fragment,{children:[M.jsx("path",{d:"M8 2 1.8 5.3 8 8.6l6.2-3.3z"}),M.jsx("path",{d:"m1.8 8.2 6.2 3.3 6.2-3.3"}),M.jsx("path",{d:"m1.8 11 6.2 3.3 6.2-3.3"})]}),legend:M.jsxs(M.Fragment,{children:[M.jsx("rect",{x:"1.8",y:"3",width:"2.4",height:"2.4"}),M.jsx("rect",{x:"1.8",y:"10.6",width:"2.4",height:"2.4"}),M.jsx("path",{d:"M7 4.2h7.2M7 8h7.2M7 11.8h7.2M1.8 8h2.4"})]}),help:M.jsxs(M.Fragment,{children:[M.jsx("circle",{cx:"8",cy:"8",r:"6.5"}),M.jsx("path",{d:"M6.1 6.3a1.95 1.95 0 1 1 2.7 1.8c-.5.2-.8.6-.8 1.1v.7"}),M.jsx("circle",{cx:"8",cy:"11.6",r:".4",fill:"currentColor"})]})};function t3({items:t,open:e,onToggle:n}){const i=r=>`hud-pop-${r}`;return M.jsxs("div",{className:"hud-dock",children:[M.jsx("div",{className:"dock-bar",children:t.map(({key:r,label:s,icon:o})=>M.jsx("button",{className:"panel dock-btn","aria-label":s,title:s,"aria-expanded":e.has(r),"aria-controls":i(r),onClick:()=>n(r),children:M.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.3",strokeLinejoin:"round","aria-hidden":"true",children:e3[o]})},r))}),M.jsx("div",{className:"dock-pops",children:t.map(({key:r,label:s,node:o})=>M.jsx("div",{id:i(r),className:`dock-pop${e.has(r)?" open":""}`,role:"group","aria-label":s,children:o},r))})]})}const n3="linear-gradient(90deg, rgb(117,140,94) 0%, rgb(150,161,110) 9%, rgb(184,171,130) 27%, rgb(179,168,156) 52%, rgb(219,214,207) 79%, rgb(245,245,242) 100%)",i3="linear-gradient(90deg, rgb(20,38,61) 0%, rgb(36,69,99) 49%, rgb(61,105,138) 89%, rgb(102,148,173) 97%, rgb(143,181,194) 100%)";function Oo({name:t,label:e}){const[n,i,r,s]=mS[t];return M.jsxs("div",{className:"row",children:[M.jsxs("svg",{className:"glyph",viewBox:"0 0 18 12","aria-hidden":"true",children:[r&&M.jsx("line",{x1:"1",y1:"6",x2:"17",y2:"6",stroke:r,strokeWidth:s,strokeLinecap:"round"}),M.jsx("line",{x1:"1",y1:"6",x2:"17",y2:"6",stroke:n,strokeWidth:i,strokeLinecap:"round"})]}),e]})}function r3(){return M.jsxs("div",{className:"panel legend",children:[M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"Elevation"}),M.jsx("div",{className:"ramp",style:{background:n3}}),M.jsxs("div",{className:"ramp-labels mono",children:[M.jsx("span",{children:"0"}),M.jsx("span",{children:"1,700"}),M.jsx("span",{children:"3,300 m"})]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"Depth"}),M.jsx("div",{className:"ramp",style:{background:i3}}),M.jsxs("div",{className:"ramp-labels mono",children:[M.jsx("span",{children:"3,500 m"}),M.jsx("span",{children:"1,800"}),M.jsx("span",{children:"0"})]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"Lines"}),M.jsx(Oo,{name:"motorway",label:"Motorway / interstate"}),M.jsx(Oo,{name:"trunk",label:"Highway"}),M.jsx(Oo,{name:"primary",label:"Main road"}),M.jsx(Oo,{name:"country",label:"Country border"}),M.jsx(Oo,{name:"state",label:"State / province"})]})]})}const s3=[["⟲","Rotate left",{dAz:-20}],["⟳","Rotate right",{dAz:20}],["▲","Tilt toward the horizon",{dPol:10}],["▼","Tilt toward overhead",{dPol:-10}],["+","Zoom in",{zoom:.6}],["−","Zoom out",{zoom:1.6}],["N","North up",{northUp:!0}]];function o3({scene:t}){return M.jsx("nav",{className:"panel navpad","aria-label":"Navigation",children:s3.map(([e,n,i])=>M.jsx("button",{title:n,"aria-label":n,onClick:()=>t.orbit(i),children:e},n))})}const fv=[.1,.2,.5,1,2,5,10,20,50,100,200,500];function a3(t,e,n){return 2*e*Math.tan(t*Math.PI/360)/n}function l3(t,e=110,n=150){let i=fv[0];for(const r of fv)r/t<=n&&Math.abs(r/t-e)<Math.abs(i/t-e)&&(i=r);return{km:i,px:i/t}}function c3({scene:t}){const[e,n]=K.useState(null);if(K.useEffect(()=>{const r=()=>{const o=t.camera,a=o.position.distanceTo(t.controls.target),l=l3(a3(o.fov,a,innerHeight));n(c=>c&&c.km===l.km&&Math.abs(c.px-l.px)<1?c:l)};r();const s=setInterval(r,250);return()=>clearInterval(s)},[t]),!e)return null;const i=e.km<1?`${Math.round(e.km*1e3)} m`:`${e.km} km`;return M.jsxs("div",{className:"panel scalebar","aria-label":`Scale: ${i} at the view centre`,title:"Exact at the view centre; nearer ground looks larger, farther ground smaller",children:[M.jsx("div",{className:"sb-bar",style:{width:`${e.px}px`}}),M.jsx("div",{className:"sb-label mono",children:i})]})}function u3(){try{const t=document.createElement("canvas");return!!(t.getContext("webgl2")||t.getContext("webgl"))}catch{return!1}}function h3(){const[t,e]=K.useState(null),[n,i]=K.useState(null);return K.useEffect(()=>{e1().then(e,i)},[]),n?M.jsx("div",{className:"app-message",role:"alert",children:M.jsxs("div",{children:[n.message,n instanceof Hc&&M.jsx("code",{children:Jw})]})}):t?u3()?M.jsx(p3,{bundle:t,onError:i}):M.jsx("div",{className:"app-message",children:"This map needs WebGL, which this browser has turned off."}):M.jsx("div",{className:"app-message",children:"Loading the map…"})}const ku=[{key:"nov2026_ar",label:"AR event · Fall 2026",hint:"The November 2026 atmospheric rivers, Nov 7–16, with every forecast run"},{key:"continuum",label:"Continuum",hint:"The last 7 days and the next 3, updated hourly"}],d3=()=>(ku.find(t=>t.key===new URLSearchParams(location.search).get("view"))??ku[0]).key,f3=t=>t.streets>0?"streets":t.flat>.5?"2D":t.tiles>0?"250 m":t.dist>2200?"2 km":"1 km";function p3({bundle:t,onError:e}){var Q;const n=K.useRef(null),i=K.useRef(null),r=K.useRef(null),[s,o]=K.useState(null),[a,l]=K.useState(null),[c,u]=K.useState(null),[h,d]=K.useState(null),[p,v]=K.useState(null),[x,m]=K.useState(null),[f,_]=K.useState(null),[g,S]=K.useState(null),[L,C]=K.useState(null),[A,D]=K.useState("1 km"),[Y,y]=K.useState("home"),[E,z]=K.useState(()=>new Set(["view"])),[k,H]=K.useState(d3);K.useEffect(()=>{let R,X,Z=!1,le=0,Te=performance.now();return Am.create(n.current,t).then(Le=>{if(Z){Le.dispose();return}R=Le,X=new NC(i.current,t.places,Le),Le.onFrame=()=>{var ue;const $=performance.now(),re=Math.min(.1,($-Te)/1e3);Te=$,X.update(),(ue=r.current)==null||ue.call(r,re,Le),le++%15===0&&D(f3(Le.frame))},o(Le),l(X)},e),()=>{Z=!0,X==null||X.dispose(),R==null||R.dispose()}},[t,e]),K.useEffect(()=>{if(!s)return;const R=s;let X,Z,le,Te,Le,$,re,ue,de,Re,Ue,ke,$e,ze,N,At=!1;return r.current=(ye,He)=>{Le==null||Le.update(),$==null||$.update(),re==null||re.update(),ue==null||ue.update(),de==null||de.update(),Re==null||Re.update(),$e==null||$e.update(),ke==null||ke.update(ye,He.frame.dist,He.controls.target),X==null||X.update(ye,He.frame.dist)},kg(k).then(ye=>{var He;!ye||At||(X=new Zb(R.scene,t.P,ye,R.U),Z=ye.power?new MC(R.scene,t.P,R.U,R.elevAt):null,le=ye.roads?new CC(R.scene,t.P,R.U,R.elevAt):null,Te=ye.sewers?new GC(R.scene,t.P,R.U,R.elevAt):null,Le=ye.ferries?new HC(R.scene,i.current,R):null,Le==null||Le.load(ye).catch(()=>{}),u({doc:ye,layer:X,gusts:ye.grids.gust?new xC(R.U,t.P,ye.grids.gust):null,power:Z,roads:le,sewers:Te,ferries:Le}),$=new za(i.current,R),v($),(He=ye.credits)!=null&&He.ground&&(re=new ua(i.current,R),ue=new ep(i.current,R),de=new tp(i.current,R),re.setVisible(!1),ue.setVisible(!1),de.setVisible(!1),C({snow:re,soil:ue,wells:de})),Re=new rR(i.current,R),m(Re),Ue=new gC(R.scene,t.P,R.U,R.elevAt),_(Ue),ye.sea&&(ke=new vC(R.scene,t.P,ye.sea.grid,R.U),$e=new qC(i.current,R),S({layer:ke,tides:$e}),window.__sea=ke),ye.rivers&&u1(ye).then(Pe=>{if(At)return;ze=new cC(R.scene,t.P,Pe,R.U),R.addRivers(ze);const Ye=new f1(ye,Pe.count);Ye.get({type:"obs",k:Math.min(...ye.rivers.obs)}).then(Oe=>ze.setBaseline(Oe)).catch(()=>{}),d({layer:ze,reaches:Pe,flows:Ye})}).catch(()=>{}),N=setInterval(()=>kg(k).then(Pe=>{Pe&&!At&&u(Ye=>Ye&&Ye.doc.updated===Pe.updated?Ye:{...Ye,doc:Pe})}).catch(()=>{}),10*6e4))}).catch(()=>{}),()=>{At=!0,clearInterval(N),r.current=null;for(const ye of[$,re,ue,de,Re,Ue,Z,le,Te,Le,ke,$e,X])ye==null||ye.dispose();ze&&(R.rivers===ze&&(R.rivers=null),ze.dispose()),u(null),d(null),v(null),m(null),_(null),S(null),C(null)}},[s,k,t]);const J=R=>{const X=new URL(location.href);R===ku[0].key?X.searchParams.delete("view"):X.searchParams.set("view",R),history.replaceState(null,"",X),H(R)},G=R=>z(X=>{const Z=new Set(X);return Z.delete(R)||Z.add(R),Z});return M.jsxs(M.Fragment,{children:[M.jsx("canvas",{ref:n,className:"map-scene","aria-label":"3D map of the Pacific Northwest"}),M.jsx("div",{id:"map-overlay",ref:i}),s&&M.jsxs(M.Fragment,{children:[M.jsx(ZP,{places:t.places,detail:A,onPick:R=>{y(null),s.flyToPoint(R.lon,R.lat,R.kind==="peak"?45:70)}}),M.jsx(t3,{open:E,onToggle:G,items:[{key:"view",label:"View",icon:"view",node:M.jsx($P,{scene:s})},{key:"layers",label:"Layers",icon:"layers",node:M.jsx(XP,{scene:s,labels:a})},{key:"legend",label:"Legend",icon:"legend",node:M.jsx(r3,{})},{key:"help",label:"Help",icon:"help",node:M.jsx(JP,{manifest:t.manifest})}]}),M.jsx(YP,{active:Y,onPlace:R=>{y(R),s.flyTo(R)}}),c&&M.jsx(ER,{views:ku,view:k,onView:J,doc:c.doc,layer:c.layer,gusts:c.gusts,power:c.power,roads:c.roads,sewers:c.sewers,ferries:c.ferries,rivers:h,reservoirs:p,ground:L,gauges:x,floods:f,sea:g},k),(c==null?void 0:c.roads)&&M.jsx(Z0,{scene:s,layer:c.roads,canvas:n.current,render:jC}),(c==null?void 0:c.sewers)&&M.jsx(Z0,{scene:s,layer:c.sewers,canvas:n.current,render:$C}),(c==null?void 0:c.power)&&M.jsx(EC,{scene:s,layer:c.power,canvas:n.current,utilities:(Q=c.doc.power)==null?void 0:Q.utilities}),h&&M.jsx(ZC,{scene:s,layer:h.layer,canvas:n.current}),M.jsx(o3,{scene:s}),M.jsx(c3,{scene:s})]})]})}Ax(document.getElementById("root")).render(M.jsx(h3,{}));
