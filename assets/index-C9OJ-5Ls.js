var uS=Object.defineProperty;var hS=(t,e,n)=>e in t?uS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Kn=(t,e,n)=>hS(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var ov={exports:{}},Du={},av={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),dS=Symbol.for("react.portal"),fS=Symbol.for("react.fragment"),pS=Symbol.for("react.strict_mode"),mS=Symbol.for("react.profiler"),gS=Symbol.for("react.provider"),vS=Symbol.for("react.context"),_S=Symbol.for("react.forward_ref"),xS=Symbol.for("react.suspense"),yS=Symbol.for("react.memo"),SS=Symbol.for("react.lazy"),xm=Symbol.iterator;function MS(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cv=Object.assign,uv={};function mo(t,e,n){this.props=t,this.context=e,this.refs=uv,this.updater=n||lv}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hv(){}hv.prototype=mo.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=uv,this.updater=n||lv}var qf=Yf.prototype=new hv;qf.constructor=Yf;cv(qf,mo.prototype);qf.isPureReactComponent=!0;var ym=Array.isArray,dv=Object.prototype.hasOwnProperty,Kf={current:null},fv={key:!0,ref:!0,__self:!0,__source:!0};function pv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dv.call(e,i)&&!fv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ha,type:t,key:s,ref:o,props:r,_owner:Kf.current}}function wS(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function ES(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sm=/\/+/g;function fh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ES(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ha:case dS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+fh(o,0):i,ym(r)?(n="",t!=null&&(n=t.replace(Sm,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&(Zf(r)&&(r=wS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ym(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+fh(s,a);o+=Zl(s,e,n,l,r)}else if(l=MS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+fh(s,a++),o+=Zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function el(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function TS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},Ql={transition:null},AS={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Ql,ReactCurrentOwner:Kf};function mv(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:el,forEach:function(t,e,n){el(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return el(t,function(){e++}),e},toArray:function(t){return el(t,function(e){return e})||[]},only:function(t){if(!Zf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=mo;qe.Fragment=fS;qe.Profiler=mS;qe.PureComponent=Yf;qe.StrictMode=pS;qe.Suspense=xS;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AS;qe.act=mv;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=cv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dv.call(e,l)&&!fv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:vS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gS,_context:t},t.Consumer=t};qe.createElement=pv;qe.createFactory=function(t){var e=pv.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:_S,render:t}};qe.isValidElement=Zf;qe.lazy=function(t){return{$$typeof:SS,_payload:{_status:-1,_result:t},_init:TS}};qe.memo=function(t,e){return{$$typeof:yS,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ql.transition;Ql.transition={};try{t()}finally{Ql.transition=e}};qe.unstable_act=mv;qe.useCallback=function(t,e){return vn.current.useCallback(t,e)};qe.useContext=function(t){return vn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return vn.current.useEffect(t,e)};qe.useId=function(){return vn.current.useId()};qe.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return vn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};qe.useRef=function(t){return vn.current.useRef(t)};qe.useState=function(t){return vn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return vn.current.useTransition()};qe.version="18.3.1";av.exports=qe;var Z=av.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bS=Z,CS=Symbol.for("react.element"),RS=Symbol.for("react.fragment"),PS=Object.prototype.hasOwnProperty,LS=bS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DS={key:!0,ref:!0,__self:!0,__source:!0};function gv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)PS.call(e,i)&&!DS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:CS,type:t,key:s,ref:o,props:r,_owner:LS.current}}Du.Fragment=RS;Du.jsx=gv;Du.jsxs=gv;ov.exports=Du;var M=ov.exports,vv={exports:{}},Fn={},_v={exports:{}},xv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Y){var J=D.length;D.push(Y);e:for(;0<J;){var re=J-1>>>1,Me=D[re];if(0<r(Me,Y))D[re]=Y,D[J]=Me,J=re;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],J=D.pop();if(J!==Y){D[0]=J;e:for(var re=0,Me=D.length,Le=Me>>>1;re<Le;){var j=2*(re+1)-1,ne=D[j],ue=j+1,he=D[ue];if(0>r(ne,J))ue<Me&&0>r(he,ne)?(D[re]=he,D[ue]=J,re=ue):(D[re]=ne,D[j]=J,re=j);else if(ue<Me&&0>r(he,J))D[re]=he,D[ue]=J,re=ue;else break e}}return Y}function r(D,Y){var J=D.sortIndex-Y.sortIndex;return J!==0?J:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,m=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=D)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(D){if(x=!1,v(D),!m)if(n(l)!==null)m=!0,z(R);else{var Y=n(c);Y!==null&&K(S,Y.startTime-D)}}function R(D,Y){m=!1,x&&(x=!1,f(P),P=-1),p=!0;var J=d;try{for(v(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||D&&!E());){var re=h.callback;if(typeof re=="function"){h.callback=null,d=h.priorityLevel;var Me=re(h.expirationTime<=Y);Y=t.unstable_now(),typeof Me=="function"?h.callback=Me:h===n(l)&&i(l),v(Y)}else i(l);h=n(l)}if(h!==null)var Le=!0;else{var j=n(c);j!==null&&K(S,j.startTime-Y),Le=!1}return Le}finally{h=null,d=J,p=!1}}var C=!1,A=null,P=-1,X=5,y=-1;function E(){return!(t.unstable_now()-y<X)}function H(){if(A!==null){var D=t.unstable_now();y=D;var Y=!0;try{Y=A(!0,D)}finally{Y?B():(C=!1,A=null)}}else C=!1}var B;if(typeof _=="function")B=function(){_(H)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,q=k.port2;k.port1.onmessage=H,B=function(){q.postMessage(null)}}else B=function(){g(H,0)};function z(D){A=D,C||(C=!0,B())}function K(D,Y){P=g(function(){D(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,z(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var J=d;d=Y;try{return D()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=d;d=D;try{return Y()}finally{d=J}},t.unstable_scheduleCallback=function(D,Y,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,D){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=J+Me,D={id:u++,callback:Y,priorityLevel:D,startTime:J,expirationTime:Me,sortIndex:-1},J>re?(D.sortIndex=J,e(c,D),n(l)===null&&D===n(c)&&(x?(f(P),P=-1):x=!0,K(S,J-re))):(D.sortIndex=Me,e(l,D),m||p||(m=!0,z(R))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var Y=d;return function(){var J=d;d=Y;try{return D.apply(this,arguments)}finally{d=J}}}})(xv);_v.exports=xv;var NS=_v.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var US=Z,In=NS;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yv=new Set,fa={};function ds(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(fa[t]=e,t=0;t<e.length;t++)yv.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bd=Object.prototype.hasOwnProperty,IS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mm={},wm={};function FS(t){return bd.call(wm,t)?!0:bd.call(Mm,t)?!1:IS.test(t)?wm[t]=!0:(Mm[t]=!0,!1)}function OS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kS(t,e,n,i){if(e===null||typeof e>"u"||OS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new _n(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new _n(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new _n(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new _n(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new _n(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new _n(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new _n(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new _n(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new _n(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function Jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qf,Jf);Jt[e]=new _n(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qf,Jf);Jt[e]=new _n(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qf,Jf);Jt[e]=new _n(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new _n(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new _n(t,1,!1,t.toLowerCase(),null,!0,!0)});function ep(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kS(e,n,r,i)&&(n=null),i||r===null?FS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=US.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),tp=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),ip=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),wv=Symbol.for("react.offscreen"),Em=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,ph;function Bo(t){if(ph===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ph=e&&e[1]||""}return`
`+ph+t}var mh=!1;function gh(t,e){if(!t||mh)return"";mh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{mh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function zS(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=gh(t.type,!1),t;case 11:return t=gh(t.type.render,!1),t;case 1:return t=gh(t.type,!0),t;default:return""}}function Ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Us:return"Portal";case Cd:return"Profiler";case tp:return"StrictMode";case Rd:return"Suspense";case Pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mv:return(t.displayName||"Context")+".Consumer";case Sv:return(t._context.displayName||"Context")+".Provider";case np:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ip:return e=t.displayName||null,e!==null?e:Ld(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Ld(t(e))}catch{}}return null}function BS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ld(e);case 8:return e===tp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HS(t){var e=Ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nl(t){t._valueTracker||(t._valueTracker=HS(t))}function Tv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ev(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dd(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Av(t,e){e=e.checked,e!=null&&ep(t,"checked",e,!1)}function Nd(t,e){Av(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ud(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ud(t,e,n){(e!=="number"||fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ho(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function bv(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Cm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,Rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VS=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){VS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function Pv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function Lv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Pv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var GS=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Od(t,e){if(e){if(GS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bd=null,Zs=null,Qs=null;function Rm(t){if(t=Wa(t)){if(typeof Bd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Ou(e),Bd(t.stateNode,t.type,e))}}function Dv(t){Zs?Qs?Qs.push(t):Qs=[t]:Zs=t}function Nv(){if(Zs){var t=Zs,e=Qs;if(Qs=Zs=null,Rm(t),e)for(t=0;t<e.length;t++)Rm(e[t])}}function Uv(t,e){return t(e)}function Iv(){}var vh=!1;function Fv(t,e,n){if(vh)return t(e,n);vh=!0;try{return Uv(t,e,n)}finally{vh=!1,(Zs!==null||Qs!==null)&&(Iv(),Nv())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var i=Ou(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Hd=!1;if(Wi)try{var To={};Object.defineProperty(To,"passive",{get:function(){Hd=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Hd=!1}function WS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var qo=!1,pc=null,mc=!1,Vd=null,jS={onError:function(t){qo=!0,pc=t}};function $S(t,e,n,i,r,s,o,a,l){qo=!1,pc=null,WS.apply(jS,arguments)}function XS(t,e,n,i,r,s,o,a,l){if($S.apply(this,arguments),qo){if(qo){var c=pc;qo=!1,pc=null}else throw Error(se(198));mc||(mc=!0,Vd=c)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pm(t){if(fs(t)!==t)throw Error(se(188))}function YS(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Pm(r),t;if(s===i)return Pm(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function kv(t){return t=YS(t),t!==null?zv(t):null}function zv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zv(t);if(e!==null)return e;t=t.sibling}return null}var Bv=In.unstable_scheduleCallback,Lm=In.unstable_cancelCallback,qS=In.unstable_shouldYield,KS=In.unstable_requestPaint,Pt=In.unstable_now,ZS=In.unstable_getCurrentPriorityLevel,sp=In.unstable_ImmediatePriority,Hv=In.unstable_UserBlockingPriority,gc=In.unstable_NormalPriority,QS=In.unstable_LowPriority,Vv=In.unstable_IdlePriority,Nu=null,Si=null;function JS(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(Nu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:nM,eM=Math.log,tM=Math.LN2;function nM(t){return t>>>=0,t===0?32:31-(eM(t)/tM|0)|0}var rl=64,sl=4194304;function Vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Vo(a):(s&=o,s!==0&&(i=Vo(s)))}else o=n&~r,o!==0?i=Vo(o):s!==0&&(i=Vo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function iM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=iM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gv(){var t=rl;return rl<<=1,!(rl&4194240)&&(rl=64),t}function _h(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function sM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function op(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function Wv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jv,ap,$v,Xv,Yv,Wd=!1,ol=[],gr=null,vr=null,_r=null,ga=new Map,va=new Map,lr=[],oM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dm(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function Ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&ap(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function aM(t,e,n,i,r){switch(e){case"focusin":return gr=Ao(gr,t,e,n,i,r),!0;case"dragenter":return vr=Ao(vr,t,e,n,i,r),!0;case"mouseover":return _r=Ao(_r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ga.set(s,Ao(ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,va.set(s,Ao(va.get(s)||null,t,e,n,i,r)),!0}return!1}function qv(t){var e=Xr(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=Ov(n),e!==null){t.blockedOn=e,Yv(t.priority,function(){$v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zd=i,n.target.dispatchEvent(i),zd=null}else return e=Wa(n),e!==null&&ap(e),t.blockedOn=n,!1;e.shift()}return!0}function Nm(t,e,n){Jl(t)&&n.delete(e)}function lM(){Wd=!1,gr!==null&&Jl(gr)&&(gr=null),vr!==null&&Jl(vr)&&(vr=null),_r!==null&&Jl(_r)&&(_r=null),ga.forEach(Nm),va.forEach(Nm)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wd||(Wd=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,lM)))}function _a(t){function e(r){return bo(r,t)}if(0<ol.length){bo(ol[0],t);for(var n=1;n<ol.length;n++){var i=ol[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&bo(gr,t),vr!==null&&bo(vr,t),_r!==null&&bo(_r,t),ga.forEach(e),va.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)qv(n),n.blockedOn===null&&lr.shift()}var Js=qi.ReactCurrentBatchConfig,_c=!0;function cM(t,e,n,i){var r=at,s=Js.transition;Js.transition=null;try{at=1,lp(t,e,n,i)}finally{at=r,Js.transition=s}}function uM(t,e,n,i){var r=at,s=Js.transition;Js.transition=null;try{at=4,lp(t,e,n,i)}finally{at=r,Js.transition=s}}function lp(t,e,n,i){if(_c){var r=jd(t,e,n,i);if(r===null)Ch(t,e,i,xc,n),Dm(t,i);else if(aM(r,t,e,n,i))i.stopPropagation();else if(Dm(t,i),e&4&&-1<oM.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&jv(s),s=jd(t,e,n,i),s===null&&Ch(t,e,i,xc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ch(t,e,i,null,n)}}var xc=null;function jd(t,e,n,i){if(xc=null,t=rp(i),t=Xr(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xc=t,null}function Kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZS()){case sp:return 1;case Hv:return 4;case gc:case QS:return 16;case Vv:return 536870912;default:return 16}default:return 16}}var dr=null,cp=null,ec=null;function Zv(){if(ec)return ec;var t,e=cp,n=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ec=r.slice(t,1<i?1-i:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function Um(){return!1}function On(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:Um,this.isPropagationStopped=Um,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},up=On(go),Ga=wt({},go,{view:0,detail:0}),hM=On(Ga),xh,yh,Co,Uu=wt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(xh=t.screenX-Co.screenX,yh=t.screenY-Co.screenY):yh=xh=0,Co=t),xh)},movementY:function(t){return"movementY"in t?t.movementY:yh}}),Im=On(Uu),dM=wt({},Uu,{dataTransfer:0}),fM=On(dM),pM=wt({},Ga,{relatedTarget:0}),Sh=On(pM),mM=wt({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),gM=On(mM),vM=wt({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_M=On(vM),xM=wt({},go,{data:0}),Fm=On(xM),yM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MM[t])?!!e[t]:!1}function hp(){return wM}var EM=wt({},Ga,{key:function(t){if(t.key){var e=yM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TM=On(EM),AM=wt({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=On(AM),bM=wt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),CM=On(bM),RM=wt({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),PM=On(RM),LM=wt({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DM=On(LM),NM=[9,13,27,32],dp=Wi&&"CompositionEvent"in window,Ko=null;Wi&&"documentMode"in document&&(Ko=document.documentMode);var UM=Wi&&"TextEvent"in window&&!Ko,Qv=Wi&&(!dp||Ko&&8<Ko&&11>=Ko),km=" ",zm=!1;function Jv(t,e){switch(t){case"keyup":return NM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function IM(t,e){switch(t){case"compositionend":return e_(e);case"keypress":return e.which!==32?null:(zm=!0,km);case"textInput":return t=e.data,t===km&&zm?null:t;default:return null}}function FM(t,e){if(Fs)return t==="compositionend"||!dp&&Jv(t,e)?(t=Zv(),ec=cp=dr=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qv&&e.locale!=="ko"?null:e.data;default:return null}}var OM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OM[t.type]:e==="textarea"}function t_(t,e,n,i){Dv(i),e=yc(e,"onChange"),0<e.length&&(n=new up("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zo=null,xa=null;function kM(t){d_(t,0)}function Iu(t){var e=zs(t);if(Tv(e))return t}function zM(t,e){if(t==="change")return e}var n_=!1;if(Wi){var Mh;if(Wi){var wh="oninput"in document;if(!wh){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),wh=typeof Hm.oninput=="function"}Mh=wh}else Mh=!1;n_=Mh&&(!document.documentMode||9<document.documentMode)}function Vm(){Zo&&(Zo.detachEvent("onpropertychange",i_),xa=Zo=null)}function i_(t){if(t.propertyName==="value"&&Iu(xa)){var e=[];t_(e,xa,t,rp(t)),Fv(kM,e)}}function BM(t,e,n){t==="focusin"?(Vm(),Zo=e,xa=n,Zo.attachEvent("onpropertychange",i_)):t==="focusout"&&Vm()}function HM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(xa)}function VM(t,e){if(t==="click")return Iu(e)}function GM(t,e){if(t==="input"||t==="change")return Iu(e)}function WM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:WM;function ya(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bd.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function Gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wm(t,e){var n=Gm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gm(n)}}function r_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s_(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jM(t){var e=s_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r_(n.ownerDocument.documentElement,n)){if(i!==null&&fp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wm(n,s);var o=Wm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $M=Wi&&"documentMode"in document&&11>=document.documentMode,Os=null,$d=null,Qo=null,Xd=!1;function jm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xd||Os==null||Os!==fc(i)||(i=Os,"selectionStart"in i&&fp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qo&&ya(Qo,i)||(Qo=i,i=yc($d,"onSelect"),0<i.length&&(e=new up("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Os)))}function ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Eh={},o_={};Wi&&(o_=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Fu(t){if(Eh[t])return Eh[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o_)return Eh[t]=e[n];return t}var a_=Fu("animationend"),l_=Fu("animationiteration"),c_=Fu("animationstart"),u_=Fu("transitionend"),h_=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){h_.set(t,e),ds(e,[t])}for(var Th=0;Th<$m.length;Th++){var Ah=$m[Th],XM=Ah.toLowerCase(),YM=Ah[0].toUpperCase()+Ah.slice(1);Rr(XM,"on"+YM)}Rr(a_,"onAnimationEnd");Rr(l_,"onAnimationIteration");Rr(c_,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(u_,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Xm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,XS(i,e,void 0,t),t.currentTarget=null}function d_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Xm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Xm(r,a,c),s=l}}}if(mc)throw t=Vd,mc=!1,Vd=null,t}function mt(t,e){var n=e[Qd];n===void 0&&(n=e[Qd]=new Set);var i=t+"__bubble";n.has(i)||(f_(e,t,2,!1),n.add(i))}function bh(t,e,n){var i=0;e&&(i|=4),f_(n,t,i,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Sa(t){if(!t[cl]){t[cl]=!0,yv.forEach(function(n){n!=="selectionchange"&&(qM.has(n)||bh(n,!1,t),bh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,bh("selectionchange",!1,e))}}function f_(t,e,n,i){switch(Kv(e)){case 1:var r=cM;break;case 4:r=uM;break;default:r=lp}n=r.bind(null,e,n,t),r=void 0,!Hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ch(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Fv(function(){var c=s,u=rp(n),h=[];e:{var d=h_.get(t);if(d!==void 0){var p=up,m=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":p=TM;break;case"focusin":m="focus",p=Sh;break;case"focusout":m="blur",p=Sh;break;case"beforeblur":case"afterblur":p=Sh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=fM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=CM;break;case a_:case l_:case c_:p=gM;break;case u_:p=PM;break;case"scroll":p=hM;break;case"wheel":p=DM;break;case"copy":case"cut":case"paste":p=_M;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Om}var x=(e&4)!==0,g=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=ma(_,f),S!=null&&x.push(Ma(_,S,v)))),g)break;_=_.return}0<x.length&&(d=new p(d,m,null,n,u),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==zd&&(m=n.relatedTarget||n.fromElement)&&(Xr(m)||m[ji]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Xr(m):null,m!==null&&(g=fs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(x=Im,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Om,S="onPointerLeave",f="onPointerEnter",_="pointer"),g=p==null?d:zs(p),v=m==null?d:zs(m),d=new x(S,_+"leave",p,n,u),d.target=g,d.relatedTarget=v,S=null,Xr(u)===c&&(x=new x(f,_+"enter",m,n,u),x.target=v,x.relatedTarget=g,S=x),g=S,p&&m)t:{for(x=p,f=m,_=0,v=x;v;v=_s(v))_++;for(v=0,S=f;S;S=_s(S))v++;for(;0<_-v;)x=_s(x),_--;for(;0<v-_;)f=_s(f),v--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=_s(x),f=_s(f)}x=null}else x=null;p!==null&&Ym(h,d,p,x,!1),m!==null&&g!==null&&Ym(h,g,m,x,!0)}}e:{if(d=c?zs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=zM;else if(Bm(d))if(n_)R=GM;else{R=HM;var C=BM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=VM);if(R&&(R=R(t,c))){t_(h,R,n,u);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Ud(d,"number",d.value)}switch(C=c?zs(c):window,t){case"focusin":(Bm(C)||C.contentEditable==="true")&&(Os=C,$d=c,Qo=null);break;case"focusout":Qo=$d=Os=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,jm(h,n,u);break;case"selectionchange":if($M)break;case"keydown":case"keyup":jm(h,n,u)}var A;if(dp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Fs?Jv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Qv&&n.locale!=="ko"&&(Fs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Fs&&(A=Zv()):(dr=u,cp="value"in dr?dr.value:dr.textContent,Fs=!0)),C=yc(c,P),0<C.length&&(P=new Fm(P,t,null,n,u),h.push({event:P,listeners:C}),A?P.data=A:(A=e_(n),A!==null&&(P.data=A)))),(A=UM?IM(t,n):FM(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(u=new Fm("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=A))}d_(h,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ma(t,n),s!=null&&i.unshift(Ma(t,s,r)),s=ma(t,e),s!=null&&i.push(Ma(t,s,r))),t=t.return}return i}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ym(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ma(n,s),l!=null&&o.unshift(Ma(n,l,a))):r||(l=ma(n,s),l!=null&&o.push(Ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KM=/\r\n?/g,ZM=/\u0000|\uFFFD/g;function qm(t){return(typeof t=="string"?t:""+t).replace(KM,`
`).replace(ZM,"")}function ul(t,e,n){if(e=qm(e),qm(t)!==e&&n)throw Error(se(425))}function Sc(){}var Yd=null,qd=null;function Kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,QM=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,JM=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(ew)}:Zd;function ew(t){setTimeout(function(){throw t})}function Rh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_a(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),vi="__reactFiber$"+vo,wa="__reactProps$"+vo,ji="__reactContainer$"+vo,Qd="__reactEvents$"+vo,tw="__reactListeners$"+vo,nw="__reactHandles$"+vo;function Xr(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zm(t);t!==null;){if(n=t[vi])return n;t=Zm(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[vi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Ou(t){return t[wa]||null}var Jd=[],Bs=-1;function Pr(t){return{current:t}}function gt(t){0>Bs||(t.current=Jd[Bs],Jd[Bs]=null,Bs--)}function dt(t,e){Bs++,Jd[Bs]=t.current,t.current=e}var Tr={},cn=Pr(Tr),wn=Pr(!1),ts=Tr;function so(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function Mc(){gt(wn),gt(cn)}function Qm(t,e,n){if(cn.current!==Tr)throw Error(se(168));dt(cn,e),dt(wn,n)}function p_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,BS(t)||"Unknown",r));return wt({},n,i)}function wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,ts=cn.current,dt(cn,t),dt(wn,wn.current),!0}function Jm(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=p_(t,e,ts),i.__reactInternalMemoizedMergedChildContext=t,gt(wn),gt(cn),dt(cn,t)):gt(wn),dt(wn,n)}var Di=null,ku=!1,Ph=!1;function m_(t){Di===null?Di=[t]:Di.push(t)}function iw(t){ku=!0,m_(t)}function Lr(){if(!Ph&&Di!==null){Ph=!0;var t=0,e=at;try{var n=Di;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Di=null,ku=!1}catch(r){throw Di!==null&&(Di=Di.slice(t+1)),Bv(sp,Lr),r}finally{at=e,Ph=!1}}return null}var Hs=[],Vs=0,Ec=null,Tc=0,Hn=[],Vn=0,ns=null,Ui=1,Ii="";function Vr(t,e){Hs[Vs++]=Tc,Hs[Vs++]=Ec,Ec=t,Tc=e}function g_(t,e,n){Hn[Vn++]=Ui,Hn[Vn++]=Ii,Hn[Vn++]=ns,ns=t;var i=Ui;t=Ii;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-li(e)+r|n<<r|i,Ii=s+t}else Ui=1<<s|n<<r|i,Ii=t}function pp(t){t.return!==null&&(Vr(t,1),g_(t,1,0))}function mp(t){for(;t===Ec;)Ec=Hs[--Vs],Hs[Vs]=null,Tc=Hs[--Vs],Hs[Vs]=null;for(;t===ns;)ns=Hn[--Vn],Hn[Vn]=null,Ii=Hn[--Vn],Hn[Vn]=null,Ui=Hn[--Vn],Hn[Vn]=null}var Un=null,Nn=null,vt=!1,oi=null;function v_(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Nn=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:Ui,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Nn=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(vt){var e=Nn;if(e){var n=e;if(!eg(t,e)){if(ef(t))throw Error(se(418));e=xr(n.nextSibling);var i=Un;e&&eg(t,e)?v_(i,n):(t.flags=t.flags&-4097|2,vt=!1,Un=t)}}else{if(ef(t))throw Error(se(418));t.flags=t.flags&-4097|2,vt=!1,Un=t}}}function tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function hl(t){if(t!==Un)return!1;if(!vt)return tg(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kd(t.type,t.memoizedProps)),e&&(e=Nn)){if(ef(t))throw __(),Error(se(418));for(;e;)v_(t,e),e=xr(e.nextSibling)}if(tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nn=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nn=null}}else Nn=Un?xr(t.stateNode.nextSibling):null;return!0}function __(){for(var t=Nn;t;)t=xr(t.nextSibling)}function oo(){Nn=Un=null,vt=!1}function gp(t){oi===null?oi=[t]:oi.push(t)}var rw=qi.ReactCurrentBatchConfig;function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function dl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ng(t){var e=t._init;return e(t._payload)}function x_(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=wr(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,S){return _===null||_.tag!==6?(_=Oh(v,f.mode,S),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,S){var R=v.type;return R===Is?u(f,_,v.props.children,S,v.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===or&&ng(R)===_.type)?(S=r(_,v.props),S.ref=Ro(f,_,v),S.return=f,S):(S=lc(v.type,v.key,v.props,null,f.mode,S),S.ref=Ro(f,_,v),S.return=f,S)}function c(f,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=kh(v,f.mode,S),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function u(f,_,v,S,R){return _===null||_.tag!==7?(_=Zr(v,f.mode,S,R),_.return=f,_):(_=r(_,v),_.return=f,_)}function h(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Oh(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:return v=lc(_.type,_.key,_.props,null,f.mode,v),v.ref=Ro(f,null,_),v.return=f,v;case Us:return _=kh(_,f.mode,v),_.return=f,_;case or:var S=_._init;return h(f,S(_._payload),v)}if(Ho(_)||Eo(_))return _=Zr(_,f.mode,v,null),_.return=f,_;dl(f,_)}return null}function d(f,_,v,S){var R=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(f,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case tl:return v.key===R?l(f,_,v,S):null;case Us:return v.key===R?c(f,_,v,S):null;case or:return R=v._init,d(f,_,R(v._payload),S)}if(Ho(v)||Eo(v))return R!==null?null:u(f,_,v,S,null);dl(f,v)}return null}function p(f,_,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,a(_,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tl:return f=f.get(S.key===null?v:S.key)||null,l(_,f,S,R);case Us:return f=f.get(S.key===null?v:S.key)||null,c(_,f,S,R);case or:var C=S._init;return p(f,_,v,C(S._payload),R)}if(Ho(S)||Eo(S))return f=f.get(v)||null,u(_,f,S,R,null);dl(_,S)}return null}function m(f,_,v,S){for(var R=null,C=null,A=_,P=_=0,X=null;A!==null&&P<v.length;P++){A.index>P?(X=A,A=null):X=A.sibling;var y=d(f,A,v[P],S);if(y===null){A===null&&(A=X);break}t&&A&&y.alternate===null&&e(f,A),_=s(y,_,P),C===null?R=y:C.sibling=y,C=y,A=X}if(P===v.length)return n(f,A),vt&&Vr(f,P),R;if(A===null){for(;P<v.length;P++)A=h(f,v[P],S),A!==null&&(_=s(A,_,P),C===null?R=A:C.sibling=A,C=A);return vt&&Vr(f,P),R}for(A=i(f,A);P<v.length;P++)X=p(A,f,P,v[P],S),X!==null&&(t&&X.alternate!==null&&A.delete(X.key===null?P:X.key),_=s(X,_,P),C===null?R=X:C.sibling=X,C=X);return t&&A.forEach(function(E){return e(f,E)}),vt&&Vr(f,P),R}function x(f,_,v,S){var R=Eo(v);if(typeof R!="function")throw Error(se(150));if(v=R.call(v),v==null)throw Error(se(151));for(var C=R=null,A=_,P=_=0,X=null,y=v.next();A!==null&&!y.done;P++,y=v.next()){A.index>P?(X=A,A=null):X=A.sibling;var E=d(f,A,y.value,S);if(E===null){A===null&&(A=X);break}t&&A&&E.alternate===null&&e(f,A),_=s(E,_,P),C===null?R=E:C.sibling=E,C=E,A=X}if(y.done)return n(f,A),vt&&Vr(f,P),R;if(A===null){for(;!y.done;P++,y=v.next())y=h(f,y.value,S),y!==null&&(_=s(y,_,P),C===null?R=y:C.sibling=y,C=y);return vt&&Vr(f,P),R}for(A=i(f,A);!y.done;P++,y=v.next())y=p(A,f,P,y.value,S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?P:y.key),_=s(y,_,P),C===null?R=y:C.sibling=y,C=y);return t&&A.forEach(function(H){return e(f,H)}),vt&&Vr(f,P),R}function g(f,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Is&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case tl:e:{for(var R=v.key,C=_;C!==null;){if(C.key===R){if(R=v.type,R===Is){if(C.tag===7){n(f,C.sibling),_=r(C,v.props.children),_.return=f,f=_;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===or&&ng(R)===C.type){n(f,C.sibling),_=r(C,v.props),_.ref=Ro(f,C,v),_.return=f,f=_;break e}n(f,C);break}else e(f,C);C=C.sibling}v.type===Is?(_=Zr(v.props.children,f.mode,S,v.key),_.return=f,f=_):(S=lc(v.type,v.key,v.props,null,f.mode,S),S.ref=Ro(f,_,v),S.return=f,f=S)}return o(f);case Us:e:{for(C=v.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=kh(v,f.mode,S),_.return=f,f=_}return o(f);case or:return C=v._init,g(f,_,C(v._payload),S)}if(Ho(v))return m(f,_,v,S);if(Eo(v))return x(f,_,v,S);dl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=Oh(v,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return g}var ao=x_(!0),y_=x_(!1),Ac=Pr(null),bc=null,Gs=null,vp=null;function _p(){vp=Gs=bc=null}function xp(t){var e=Ac.current;gt(Ac),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){bc=t,vp=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(vp!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(bc===null)throw Error(se(308));Gs=t,bc.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Yr=null;function yp(t){Yr===null?Yr=[t]:Yr.push(t)}function S_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yp(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,yp(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,op(t,n)}}function ig(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,x=a;switch(d=e,p=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=wt({},h,d);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);rs|=o,t.lanes=o,t.memoizedState=h}}function rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ja={},Mi=Pr(ja),Ea=Pr(ja),Ta=Pr(ja);function qr(t){if(t===ja)throw Error(se(174));return t}function Mp(t,e){switch(dt(Ta,e),dt(Ea,t),dt(Mi,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fd(e,t)}gt(Mi),dt(Mi,e)}function lo(){gt(Mi),gt(Ea),gt(Ta)}function w_(t){qr(Ta.current);var e=qr(Mi.current),n=Fd(e,t.type);e!==n&&(dt(Ea,t),dt(Mi,n))}function wp(t){Ea.current===t&&(gt(Mi),gt(Ea))}var xt=Pr(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lh=[];function Ep(){for(var t=0;t<Lh.length;t++)Lh[t]._workInProgressVersionPrimary=null;Lh.length=0}var ic=qi.ReactCurrentDispatcher,Dh=qi.ReactCurrentBatchConfig,is=0,Mt=null,It=null,Ht=null,Pc=!1,Jo=!1,Aa=0,sw=0;function en(){throw Error(se(321))}function Tp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function Ap(t,e,n,i,r,s){if(is=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?cw:uw,t=n(i,r),Jo){s=0;do{if(Jo=!1,Aa=0,25<=s)throw Error(se(301));s+=1,Ht=It=null,e.updateQueue=null,ic.current=hw,t=n(i,r)}while(Jo)}if(ic.current=Lc,e=It!==null&&It.next!==null,is=0,Ht=It=Mt=null,Pc=!1,e)throw Error(se(300));return t}function bp(){var t=Aa!==0;return Aa=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Mt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Yn(){if(It===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Ht===null?Mt.memoizedState:Ht.next;if(e!==null)Ht=e,It=t;else{if(t===null)throw Error(se(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Ht===null?Mt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function ba(t,e){return typeof e=="function"?e(t):e}function Nh(t){var e=Yn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((is&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Mt.lanes|=u,rs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,rs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uh(t){var e=Yn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function E_(){}function T_(t,e){var n=Mt,i=Yn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,Cp(C_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Ca(9,b_.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(se(349));is&30||A_(n,e,r)}return r}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b_(t,e,n,i){e.value=n,e.getSnapshot=i,R_(e)&&P_(t)}function C_(t,e,n){return n(function(){R_(e)&&P_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function P_(t){var e=$i(t,1);e!==null&&ci(e,t,1,-1)}function sg(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},e.queue=t,t=t.dispatch=lw.bind(null,Mt,t),[e.memoizedState,t]}function Ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function L_(){return Yn().memoizedState}function rc(t,e,n,i){var r=mi();Mt.flags|=t,r.memoizedState=Ca(1|e,n,void 0,i===void 0?null:i)}function zu(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&Tp(i,o.deps)){r.memoizedState=Ca(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Ca(1|e,n,s,i)}function og(t,e){return rc(8390656,8,t,e)}function Cp(t,e){return zu(2048,8,t,e)}function D_(t,e){return zu(4,2,t,e)}function N_(t,e){return zu(4,4,t,e)}function U_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I_(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,U_.bind(null,e,t),n)}function Rp(){}function F_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function O_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Tp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function k_(t,e,n){return is&21?(ui(n,e)||(n=Gv(),Mt.lanes|=n,rs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function ow(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Dh.transition;Dh.transition={};try{t(!1),e()}finally{at=n,Dh.transition=i}}function z_(){return Yn().memoizedState}function aw(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},B_(t))H_(e,n);else if(n=S_(t,e,n,i),n!==null){var r=mn();ci(n,t,i,r),V_(n,e,i)}}function lw(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(B_(t))H_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,yp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=S_(t,e,r,i),n!==null&&(r=mn(),ci(n,t,i,r),V_(n,e,i))}}function B_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function H_(t,e){Jo=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,op(t,n)}}var Lc={readContext:Xn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},cw={readContext:Xn,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:og,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,U_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=aw.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:sg,useDebugValue:Rp,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=sg(!1),e=t[0];return t=ow.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=mi();if(vt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Gt===null)throw Error(se(349));is&30||A_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,og(C_.bind(null,i,s,t),[t]),i.flags|=2048,Ca(9,b_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Gt.identifierPrefix;if(vt){var n=Ii,i=Ui;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uw={readContext:Xn,useCallback:F_,useContext:Xn,useEffect:Cp,useImperativeHandle:I_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:O_,useReducer:Nh,useRef:L_,useState:function(){return Nh(ba)},useDebugValue:Rp,useDeferredValue:function(t){var e=Yn();return k_(e,It.memoizedState,t)},useTransition:function(){var t=Nh(ba)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:T_,useId:z_,unstable_isNewReconciler:!1},hw={readContext:Xn,useCallback:F_,useContext:Xn,useEffect:Cp,useImperativeHandle:I_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:O_,useReducer:Uh,useRef:L_,useState:function(){return Uh(ba)},useDebugValue:Rp,useDeferredValue:function(t){var e=Yn();return It===null?e.memoizedState=t:k_(e,It.memoizedState,t)},useTransition:function(){var t=Uh(ba)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:T_,useId:z_,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Mr(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ci(e,t,r,i),nc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Mr(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ci(e,t,r,i),nc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=Mr(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(ci(e,t,i,n),nc(e,t,i))}};function ag(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ya(n,i)||!ya(r,s):!0}function G_(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=En(e)?ts:cn.current,i=e.contextTypes,s=(i=i!=null)?so(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=En(e)?ts:cn.current,r.context=so(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bu.enqueueReplaceState(r,r.state,null),Cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",i=e;do n+=zS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ih(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dw=typeof WeakMap=="function"?WeakMap:Map;function W_(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nc||(Nc=!0,gf=i),of(t,e)},n}function j_(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new dw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Aw.bind(null,t,e,n),e.then(t,t))}function ug(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var fw=qi.ReactCurrentOwner,Sn=!1;function dn(t,e,n,i){e.child=t===null?y_(e,null,n,i):ao(e,t.child,n,i)}function dg(t,e,n,i,r){n=n.render;var s=e.ref;return eo(e,r),i=Ap(t,e,n,i,s,r),n=bp(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(vt&&n&&pp(e),e.flags|=1,dn(t,e,i,r),e.child)}function fg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$_(t,e,s,i,r)):(t=lc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function $_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ya(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return af(t,e,n,i,r)}function X_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(js,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(js,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(js,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(js,Pn),Pn|=i;return dn(t,e,r,n),e.child}function Y_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function af(t,e,n,i,r){var s=En(n)?ts:cn.current;return s=so(e,s),eo(e,r),n=Ap(t,e,n,i,s,r),i=bp(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(vt&&i&&pp(e),e.flags|=1,dn(t,e,n,r),e.child)}function pg(t,e,n,i,r){if(En(n)){var s=!0;wc(e)}else s=!1;if(eo(e,r),e.stateNode===null)sc(t,e),G_(e,n,i),sf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=En(n)?ts:cn.current,c=so(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&lg(e,o,i,c),ar=!1;var d=e.memoizedState;o.state=d,Cc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||wn.current||ar?(typeof u=="function"&&(rf(e,n,u,i),l=e.memoizedState),(a=ar||ag(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,M_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=En(n)?ts:cn.current,l=so(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&lg(e,o,i,l),ar=!1,d=e.memoizedState,o.state=d,Cc(e,i,o,r);var m=e.memoizedState;a!==h||d!==m||wn.current||ar?(typeof p=="function"&&(rf(e,n,p,i),m=e.memoizedState),(c=ar||ag(e,n,c,i,d,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return lf(t,e,n,i,s,r)}function lf(t,e,n,i,r,s){Y_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Jm(e,n,!1),Xi(t,e,s);i=e.stateNode,fw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,a,s)):dn(t,e,a,s),e.memoizedState=i.state,r&&Jm(e,n,!0),e.child}function q_(t){var e=t.stateNode;e.pendingContext?Qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qm(t,e.context,!1),Mp(t,e.containerInfo)}function mg(t,e,n,i,r){return oo(),gp(r),e.flags|=256,dn(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function K_(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(xt,r&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,i,0,null),t=Zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=cf,t):Pp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cf,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pp(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fl(t,e,n,i){return i!==null&&gp(i),ao(e,t.child,null,n),t=Pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ih(Error(se(422))),fl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gu({mode:"visible",children:i.children},r,0,null),s=Zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=uf(o),e.memoizedState=cf,s);if(!(e.mode&1))return fl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Ih(s,i,void 0),fl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Sn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(t,r),ci(i,t,r,-1))}return Fp(),i=Ih(Error(se(421))),fl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=bw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Nn=xr(r.nextSibling),Un=e,vt=!0,oi=null,t!==null&&(Hn[Vn++]=Ui,Hn[Vn++]=Ii,Hn[Vn++]=ns,Ui=t.id,Ii=t.overflow,ns=e),e=Pp(e,i.children),e.flags|=4096,e)}function gg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nf(t.return,e,n)}function Fh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Z_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,n,e);else if(t.tag===19)gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fh(e,!0,n,null,s);break;case"together":Fh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mw(t,e,n){switch(e.tag){case 3:q_(e),oo();break;case 5:w_(e);break;case 1:En(e.type)&&wc(e);break;case 4:Mp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?K_(t,e,n):(dt(xt,xt.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);dt(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Z_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,X_(t,e,n)}return Xi(t,e,n)}var Q_,hf,J_,ex;Q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hf=function(){};J_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(Mi.current);var s=null;switch(n){case"input":r=Dd(t,r),i=Dd(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Id(t,r),i=Id(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sc)}Od(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ex=function(t,e,n,i){n!==i&&(e.flags|=4)};function Po(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gw(t,e,n){var i=e.pendingProps;switch(mp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return En(e.type)&&Mc(),tn(e),null;case 3:return i=e.stateNode,lo(),gt(wn),gt(cn),Ep(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(xf(oi),oi=null))),hf(t,e),tn(e),null;case 5:wp(e);var r=qr(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)J_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return tn(e),null}if(t=qr(Mi.current),hl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[wa]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Go.length;r++)mt(Go[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Tm(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":bm(i,s),mt("invalid",i)}Od(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,t),r=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":nl(i),Am(i,s,!0);break;case"textarea":nl(i),Cm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[wa]=i,Q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=kd(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Go.length;r++)mt(Go[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Tm(t,i),r=Dd(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":bm(t,i),r=Id(t,i),mt("invalid",t);break;default:r=i}Od(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Lv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&ep(t,s,l,o))}switch(n){case"input":nl(t),Am(t,i,!1);break;case"textarea":nl(t),Cm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)ex(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=qr(Ta.current),qr(Mi.current),hl(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:ul(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return tn(e),null;case 13:if(gt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Nn!==null&&e.mode&1&&!(e.flags&128))__(),oo(),e.flags|=98560,s=!1;else if(s=hl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[vi]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else oi!==null&&(xf(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Ot===0&&(Ot=3):Fp())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return lo(),hf(t,e),t===null&&Sa(e.stateNode.containerInfo),tn(e),null;case 10:return xp(e.type._context),tn(e),null;case 17:return En(e.type)&&Mc(),tn(e),null;case 19:if(gt(xt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Po(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rc(t),o!==null){for(e.flags|=128,Po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>uo&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return tn(e),null}else 2*Pt()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=xt.current,dt(xt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return Ip(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function vw(t,e){switch(mp(e),e.tag){case 1:return En(e.type)&&Mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),gt(wn),gt(cn),Ep(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wp(e),null;case 13:if(gt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(xt),null;case 4:return lo(),null;case 10:return xp(e.type._context),null;case 22:case 23:return Ip(),null;case 24:return null;default:return null}}var pl=!1,sn=!1,_w=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function df(t,e,n){try{n()}catch(i){bt(t,e,i)}}var vg=!1;function xw(t,e){if(Yd=_c,t=s_(),fp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qd={focusedElem:t,selectionRange:n},_c=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,g=m.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:ti(e.type,x),g);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return m=vg,vg=!1,m}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&df(e,n,s)}r=r.next}while(r!==i)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tx(t){var e=t.alternate;e!==null&&(t.alternate=null,tx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[wa],delete e[Qd],delete e[tw],delete e[nw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nx(t){return t.tag===5||t.tag===3||t.tag===4}function _g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sc));else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}var Yt=null,ri=!1;function Ji(t,e,n){for(n=n.child;n!==null;)ix(t,e,n),n=n.sibling}function ix(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(Nu,n)}catch{}switch(n.tag){case 5:sn||Ws(n,e);case 6:var i=Yt,r=ri;Yt=null,Ji(t,e,n),Yt=i,ri=r,Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?Rh(t.parentNode,n):t.nodeType===1&&Rh(t,n),_a(t)):Rh(Yt,n.stateNode));break;case 4:i=Yt,r=ri,Yt=n.stateNode.containerInfo,ri=!0,Ji(t,e,n),Yt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&df(n,e,o),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!sn&&(Ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,Ji(t,e,n),sn=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function xg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _w),e.forEach(function(i){var r=Cw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,ri=!1;break e;case 3:Yt=a.stateNode.containerInfo,ri=!0;break e;case 4:Yt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(Yt===null)throw Error(se(160));ix(s,o,r),Yt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rx(e,t),e=e.sibling}function rx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),di(t),i&4){try{ea(3,t,t.return),Hu(3,t)}catch(x){bt(t,t.return,x)}try{ea(5,t,t.return)}catch(x){bt(t,t.return,x)}}break;case 1:Zn(e,t),di(t),i&512&&n!==null&&Ws(n,n.return);break;case 5:if(Zn(e,t),di(t),i&512&&n!==null&&Ws(n,n.return),t.flags&32){var r=t.stateNode;try{pa(r,"")}catch(x){bt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Av(r,s),kd(a,o);var c=kd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Lv(r,h):u==="dangerouslySetInnerHTML"?Rv(r,h):u==="children"?pa(r,h):ep(r,u,h,c)}switch(a){case"input":Nd(r,s);break;case"textarea":bv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ks(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[wa]=s}catch(x){bt(t,t.return,x)}}break;case 6:if(Zn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){bt(t,t.return,x)}}break;case 3:if(Zn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(x){bt(t,t.return,x)}break;case 4:Zn(e,t),di(t);break;case 13:Zn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Np=Pt())),i&4&&xg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||u,Zn(e,t),sn=c):Zn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(h=Se=u;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:Ws(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){bt(i,n,x)}}break;case 5:Ws(d,d.return);break;case 22:if(d.memoizedState!==null){Sg(h);continue}}p!==null?(p.return=d,Se=p):Sg(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pv("display",o))}catch(x){bt(t,t.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){bt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zn(e,t),di(t),i&4&&xg(t);break;case 21:break;default:Zn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nx(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pa(r,""),i.flags&=-33);var s=_g(t);mf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=_g(t);pf(t,a,o);break;default:throw Error(se(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yw(t,e,n){Se=t,sx(t)}function sx(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=pl;var c=sn;if(pl=o,(sn=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?Mg(r):l!==null?(l.return=o,Se=l):Mg(r);for(;s!==null;)Se=s,sx(s),s=s.sibling;Se=r,pl=a,sn=c}yg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):yg(t)}}function yg(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&_a(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}sn||e.flags&512&&ff(e)}catch(d){bt(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Sg(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Mg(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{ff(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{ff(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Sw=Math.ceil,Dc=qi.ReactCurrentDispatcher,Lp=qi.ReactCurrentOwner,$n=qi.ReactCurrentBatchConfig,Je=0,Gt=null,Dt=null,Zt=0,Pn=0,js=Pr(0),Ot=0,Ra=null,rs=0,Vu=0,Dp=0,ta=null,yn=null,Np=0,uo=1/0,Li=null,Nc=!1,gf=null,Sr=null,ml=!1,fr=null,Uc=0,na=0,vf=null,oc=-1,ac=0;function mn(){return Je&6?Pt():oc!==-1?oc:oc=Pt()}function Mr(t){return t.mode&1?Je&2&&Zt!==0?Zt&-Zt:rw.transition!==null?(ac===0&&(ac=Gv()),ac):(t=at,t!==0||(t=window.event,t=t===void 0?16:Kv(t.type)),t):1}function ci(t,e,n,i){if(50<na)throw na=0,vf=null,Error(se(185));Va(t,n,i),(!(Je&2)||t!==Gt)&&(t===Gt&&(!(Je&2)&&(Vu|=n),Ot===4&&cr(t,Zt)),Tn(t,i),n===1&&Je===0&&!(e.mode&1)&&(uo=Pt()+500,ku&&Lr()))}function Tn(t,e){var n=t.callbackNode;rM(t,e);var i=vc(t,t===Gt?Zt:0);if(i===0)n!==null&&Lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lm(n),e===1)t.tag===0?iw(wg.bind(null,t)):m_(wg.bind(null,t)),JM(function(){!(Je&6)&&Lr()}),n=null;else{switch(Wv(i)){case 1:n=sp;break;case 4:n=Hv;break;case 16:n=gc;break;case 536870912:n=Vv;break;default:n=gc}n=fx(n,ox.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ox(t,e){if(oc=-1,ac=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var i=vc(t,t===Gt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ic(t,i);else{e=i;var r=Je;Je|=2;var s=lx();(Gt!==t||Zt!==e)&&(Li=null,uo=Pt()+500,Kr(t,e));do try{Ew();break}catch(a){ax(t,a)}while(!0);_p(),Dc.current=s,Je=r,Dt!==null?e=0:(Gt=null,Zt=0,e=Ot)}if(e!==0){if(e===2&&(r=Gd(t),r!==0&&(i=r,e=_f(t,r))),e===1)throw n=Ra,Kr(t,0),cr(t,i),Tn(t,Pt()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Mw(r)&&(e=Ic(t,i),e===2&&(s=Gd(t),s!==0&&(i=s,e=_f(t,s))),e===1))throw n=Ra,Kr(t,0),cr(t,i),Tn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Gr(t,yn,Li);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=Np+500-Pt(),10<e)){if(vc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zd(Gr.bind(null,t,yn,Li),e);break}Gr(t,yn,Li);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sw(i/1960))-i,10<i){t.timeoutHandle=Zd(Gr.bind(null,t,yn,Li),i);break}Gr(t,yn,Li);break;case 5:Gr(t,yn,Li);break;default:throw Error(se(329))}}}return Tn(t,Pt()),t.callbackNode===n?ox.bind(null,t):null}function _f(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Ic(t,e),t!==2&&(e=yn,yn=n,e!==null&&xf(e)),t}function xf(t){yn===null?yn=t:yn.push.apply(yn,t)}function Mw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Dp,e&=~Vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function wg(t){if(Je&6)throw Error(se(327));to();var e=vc(t,0);if(!(e&1))return Tn(t,Pt()),null;var n=Ic(t,e);if(t.tag!==0&&n===2){var i=Gd(t);i!==0&&(e=i,n=_f(t,i))}if(n===1)throw n=Ra,Kr(t,0),cr(t,e),Tn(t,Pt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,yn,Li),Tn(t,Pt()),null}function Up(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(uo=Pt()+500,ku&&Lr())}}function ss(t){fr!==null&&fr.tag===0&&!(Je&6)&&to();var e=Je;Je|=1;var n=$n.transition,i=at;try{if($n.transition=null,at=1,t)return t()}finally{at=i,$n.transition=n,Je=e,!(Je&6)&&Lr()}}function Ip(){Pn=js.current,gt(js)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QM(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(mp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mc();break;case 3:lo(),gt(wn),gt(cn),Ep();break;case 5:wp(i);break;case 4:lo();break;case 13:gt(xt);break;case 19:gt(xt);break;case 10:xp(i.type._context);break;case 22:case 23:Ip()}n=n.return}if(Gt=t,Dt=t=wr(t.current,null),Zt=Pn=e,Ot=0,Ra=null,Dp=Vu=rs=0,yn=ta=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Yr=null}return t}function ax(t,e){do{var n=Dt;try{if(_p(),ic.current=Lc,Pc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pc=!1}if(is=0,Ht=It=Mt=null,Jo=!1,Aa=0,Lp.current=null,n===null||n.return===null){Ot=1,Ra=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=ug(o);if(p!==null){p.flags&=-257,hg(p,o,a,s,e),p.mode&1&&cg(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if(!(e&1)){cg(s,c,e),Fp();break e}l=Error(se(426))}}else if(vt&&a.mode&1){var g=ug(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),hg(g,o,a,s,e),gp(co(l,a));break e}}s=l=co(l,a),Ot!==4&&(Ot=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=W_(s,l,e);ig(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Sr===null||!Sr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=j_(s,a,e);ig(s,S);break e}}s=s.return}while(s!==null)}ux(n)}catch(R){e=R,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function lx(){var t=Dc.current;return Dc.current=Lc,t===null?Lc:t}function Fp(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Gt===null||!(rs&268435455)&&!(Vu&268435455)||cr(Gt,Zt)}function Ic(t,e){var n=Je;Je|=2;var i=lx();(Gt!==t||Zt!==e)&&(Li=null,Kr(t,e));do try{ww();break}catch(r){ax(t,r)}while(!0);if(_p(),Je=n,Dc.current=i,Dt!==null)throw Error(se(261));return Gt=null,Zt=0,Ot}function ww(){for(;Dt!==null;)cx(Dt)}function Ew(){for(;Dt!==null&&!qS();)cx(Dt)}function cx(t){var e=dx(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?ux(t):Dt=e,Lp.current=null}function ux(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vw(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Dt=null;return}}else if(n=gw(n,e,Pn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ot===0&&(Ot=5)}function Gr(t,e,n){var i=at,r=$n.transition;try{$n.transition=null,at=1,Tw(t,e,n,i)}finally{$n.transition=r,at=i}return null}function Tw(t,e,n,i){do to();while(fr!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sM(t,s),t===Gt&&(Dt=Gt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,fx(gc,function(){return to(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=at;at=1;var a=Je;Je|=4,Lp.current=null,xw(t,n),rx(n,t),jM(qd),_c=!!Yd,qd=Yd=null,t.current=n,yw(n),KS(),Je=a,at=o,$n.transition=s}else t.current=n;if(ml&&(ml=!1,fr=t,Uc=r),s=t.pendingLanes,s===0&&(Sr=null),JS(n.stateNode),Tn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nc)throw Nc=!1,t=gf,gf=null,t;return Uc&1&&t.tag!==0&&to(),s=t.pendingLanes,s&1?t===vf?na++:(na=0,vf=t):na=0,Lr(),null}function to(){if(fr!==null){var t=Wv(Uc),e=$n.transition,n=at;try{if($n.transition=null,at=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,Uc=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:ea(8,u,s)}var h=u.child;if(h!==null)h.return=u,Se=h;else for(;Se!==null;){u=Se;var d=u.sibling,p=u.return;if(tx(u),u===c){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var _=t.current;for(Se=_;Se!==null;){o=Se;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Se=v;else e:for(o=_;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hu(9,a)}}catch(R){bt(a,a.return,R)}if(a===o){Se=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Se=S;break e}Se=a.return}}if(Je=r,Lr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(Nu,t)}catch{}i=!0}return i}finally{at=n,$n.transition=e}}return!1}function Eg(t,e,n){e=co(n,e),e=W_(t,e,1),t=yr(t,e,1),e=mn(),t!==null&&(Va(t,1,e),Tn(t,e))}function bt(t,e,n){if(t.tag===3)Eg(t,t,n);else for(;e!==null;){if(e.tag===3){Eg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=co(n,t),t=j_(e,t,1),e=yr(e,t,1),t=mn(),e!==null&&(Va(e,1,t),Tn(e,t));break}}e=e.return}}function Aw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Zt&n)===n&&(Ot===4||Ot===3&&(Zt&130023424)===Zt&&500>Pt()-Np?Kr(t,0):Dp|=n),Tn(t,e)}function hx(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=mn();t=$i(t,e),t!==null&&(Va(t,e,n),Tn(t,n))}function bw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hx(t,n)}function Cw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),hx(t,n)}var dx;dx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,mw(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,vt&&e.flags&1048576&&g_(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sc(t,e),t=e.pendingProps;var r=so(e,cn.current);eo(e,n),r=Ap(null,e,i,t,r,n);var s=bp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,wc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sp(e),r.updater=Bu,e.stateNode=r,r._reactInternals=e,sf(e,i,t,n),e=lf(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&pp(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Pw(i),t=ti(i,t),r){case 0:e=af(null,e,i,t,n);break e;case 1:e=pg(null,e,i,t,n);break e;case 11:e=dg(null,e,i,t,n);break e;case 14:e=fg(null,e,i,ti(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),pg(t,e,i,r,n);case 3:e:{if(q_(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,M_(t,e),Cc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=co(Error(se(423)),e),e=mg(t,e,i,n,r);break e}else if(i!==r){r=co(Error(se(424)),e),e=mg(t,e,i,n,r);break e}else for(Nn=xr(e.stateNode.containerInfo.firstChild),Un=e,vt=!0,oi=null,n=y_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),i===r){e=Xi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return w_(e),t===null&&tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Kd(i,r)?o=null:s!==null&&Kd(i,s)&&(e.flags|=32),Y_(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&tf(e),null;case 13:return K_(t,e,n);case 4:return Mp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ao(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),dg(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Ac,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!wn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,eo(e,n),r=Xn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),fg(t,e,i,r,n);case 15:return $_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),sc(t,e),e.tag=1,En(i)?(t=!0,wc(e)):t=!1,eo(e,n),G_(e,i,r),sf(e,i,r,n),lf(null,e,i,!0,t,n);case 19:return Z_(t,e,n);case 22:return X_(t,e,n)}throw Error(se(156,e.tag))};function fx(t,e){return Bv(t,e)}function Rw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new Rw(t,e,n,i)}function Op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pw(t){if(typeof t=="function")return Op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===np)return 11;if(t===ip)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return Zr(n.children,r,s,e);case tp:o=8,r|=8;break;case Cd:return t=jn(12,n,e,r|2),t.elementType=Cd,t.lanes=s,t;case Rd:return t=jn(13,n,e,r),t.elementType=Rd,t.lanes=s,t;case Pd:return t=jn(19,n,e,r),t.elementType=Pd,t.lanes=s,t;case wv:return Gu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sv:o=10;break e;case Mv:o=9;break e;case np:o=11;break e;case ip:o=14;break e;case or:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Zr(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function Gu(t,e,n,i){return t=jn(22,t,i,e),t.elementType=wv,t.lanes=n,t.stateNode={isHidden:!1},t}function Oh(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function kh(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Lw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_h(0),this.expirationTimes=_h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_h(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kp(t,e,n,i,r,s,o,a,l){return t=new Lw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sp(s),t}function Dw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function px(t){if(!t)return Tr;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(En(n))return p_(t,n,e)}return e}function mx(t,e,n,i,r,s,o,a,l){return t=kp(n,i,!0,t,r,s,o,a,l),t.context=px(null),n=t.current,i=mn(),r=Mr(n),s=zi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,Va(t,r,i),Tn(t,i),t}function Wu(t,e,n,i){var r=e.current,s=mn(),o=Mr(r);return n=px(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,o),t!==null&&(ci(t,r,o,s),nc(t,r,o)),o}function Fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zp(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function Nw(){return null}var gx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bp(t){this._internalRoot=t}ju.prototype.render=Bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Wu(t,e,null,null)};ju.prototype.unmount=Bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ss(function(){Wu(null,t,null,null)}),e[ji]=null}};function ju(t){this._internalRoot=t}ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&qv(t)}};function Hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ag(){}function Uw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fc(o);s.call(c)}}var o=mx(e,i,t,0,null,!1,!1,"",Ag);return t._reactRootContainer=o,t[ji]=o.current,Sa(t.nodeType===8?t.parentNode:t),ss(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Fc(l);a.call(c)}}var l=kp(t,0,!1,null,null,!1,!1,"",Ag);return t._reactRootContainer=l,t[ji]=l.current,Sa(t.nodeType===8?t.parentNode:t),ss(function(){Wu(e,l,n,i)}),l}function Xu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Fc(o);a.call(l)}}Wu(e,o,t,r)}else o=Uw(n,e,t,r,i);return Fc(o)}jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vo(e.pendingLanes);n!==0&&(op(e,n|1),Tn(e,Pt()),!(Je&6)&&(uo=Pt()+500,Lr()))}break;case 13:ss(function(){var i=$i(t,1);if(i!==null){var r=mn();ci(i,t,1,r)}}),zp(t,1)}};ap=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=mn();ci(e,t,134217728,n)}zp(t,134217728)}};$v=function(t){if(t.tag===13){var e=Mr(t),n=$i(t,e);if(n!==null){var i=mn();ci(n,t,e,i)}zp(t,e)}};Xv=function(){return at};Yv=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Bd=function(t,e,n){switch(e){case"input":if(Nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ou(i);if(!r)throw Error(se(90));Tv(i),Nd(i,r)}}}break;case"textarea":bv(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};Uv=Up;Iv=ss;var Iw={usingClientEntryPoint:!1,Events:[Wa,zs,Ou,Dv,Nv,Up]},Lo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fw={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kv(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||Nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Nu=gl.inject(Fw),Si=gl}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iw;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(e))throw Error(se(200));return Dw(t,e,null,n)};Fn.createRoot=function(t,e){if(!Hp(t))throw Error(se(299));var n=!1,i="",r=gx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kp(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,Sa(t.nodeType===8?t.parentNode:t),new Bp(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=kv(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return ss(t)};Fn.hydrate=function(t,e,n){if(!$u(e))throw Error(se(200));return Xu(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!Hp(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=gx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mx(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,Sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ju(e)};Fn.render=function(t,e,n){if(!$u(e))throw Error(se(200));return Xu(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!$u(t))throw Error(se(40));return t._reactRootContainer?(ss(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Fn.unstable_batchedUpdates=Up;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$u(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Xu(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function vx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vx)}catch(t){console.error(t)}}vx(),vv.exports=Fn;var Ow=vv.exports,_x,bg=Ow;_x=bg.createRoot,bg.hydrateRoot;function kw({lon0:t,lat0:e,kx:n,kz:i}){return{lon0:t,lat0:e,kx:n,kz:i,toX:r=>(r-t)*n,toZ:r=>-(r-e)*i,fromX:r=>r/n+t,fromZ:r=>-r/i+e}}function xx(t,e,n){const{ncols:i,nrows:r,west:s,south:o,cellsize:a}=t,l=e instanceof Int16Array?e:new Int16Array(e),c=(m,x)=>l[Math.min(r-1,Math.max(0,m))*i+Math.min(i-1,Math.max(0,x))],u=o+r*a,h=s+i*a,d=(m,x)=>{const g=(m-s)/a-.5,f=(u-x)/a-.5;if(g<0||f<0||g>i-1||f>r-1)return null;const _=Math.min(Math.floor(g),i-2),v=Math.min(Math.floor(f),r-2),S=g-_,R=f-v,C=c(v,_)*(1-S)+c(v,_+1)*S,A=c(v+1,_)*(1-S)+c(v+1,_+1)*S;return C*(1-R)+A*R},p=[n.toX(s+a/2),n.toX(h-a/2),n.toZ(u-a/2),n.toZ(o+a/2)];return{meta:t,heights:l,H:c,sample:d,box:p,north:u,east:h}}function zw(t,e,n=1,i=0,r=null){const{west:s,cellsize:o}=t.meta,a=t.H,[l,c,u,h]=r??[0,0,t.meta.ncols-1,t.meta.nrows-1],d=Math.floor((u-l)/n)+1,p=Math.floor((h-c)/n)+1,m=i?2*(d+p)-4:0,x=d*p+m,g=new Float32Array(x*3),f=new Float32Array(x),_=new Float32Array(x*2),v=new Float32Array(x),S=H=>t.north-(H+.5)*o,{ncols:R,nrows:C}=t.meta,A=o*e.kx,P=o*e.kz;let X=0;for(let H=0;H<p;H++){const B=c+H*n,k=e.toZ(S(B)),q=Math.max(0,B-n),z=Math.min(C-1,B+n);for(let K=0;K<d;K++,X++){const D=l+K*n;g[X*3]=e.toX(s+(D+.5)*o),g[X*3+2]=k,f[X]=a(B,D);const Y=Math.max(0,D-n),J=Math.min(R-1,D+n);_[X*2]=(a(B,J)-a(B,Y))/((J-Y)*A),_[X*2+1]=(a(z,D)-a(q,D))/((z-q)*P)}}const y=new Uint32Array(6*((d-1)*(p-1)+m));let E=0;for(let H=0;H<p-1;H++)for(let B=0;B<d-1;B++){const k=H*d+B,q=k+1,z=k+d,K=z+1;y[E++]=k,y[E++]=z,y[E++]=q,y[E++]=q,y[E++]=z,y[E++]=K}if(i){const H=[];for(let k=0;k<d;k++)H.push(k);for(let k=1;k<p;k++)H.push(k*d+d-1);for(let k=d-2;k>=0;k--)H.push((p-1)*d+k);for(let k=p-2;k>=1;k--)H.push(k*d);const B=d*p;H.forEach((k,q)=>{const z=B+q;g.set(g.subarray(k*3,k*3+3),z*3),f[z]=f[k],_[z*2]=_[k*2],_[z*2+1]=_[k*2+1],v[z]=i});for(let k=0;k<H.length;k++){const q=H[k],z=H[(k+1)%H.length],K=B+k,D=B+(k+1)%H.length;y[E++]=q,y[E++]=z,y[E++]=K,y[E++]=z,y[E++]=D,y[E++]=K}}return{position:g,elev:f,grad:_,drop:v,index:y,n:d,m:p}}function Bw(t,e,n,i=1){const r=Math.max(i,Math.round(n/i)*i),s=[];for(let o=0;o<e-1;o+=r){const a=Math.min(o+r,o+Math.floor((e-1-o)/i)*i);for(let l=0;l<t-1;l+=r){const c=Math.min(l+r,l+Math.floor((t-1-l)/i)*i);c>l&&a>o&&s.push([l,o,c,a])}}return s}function yx(t,e,n,i,r=0,s=null){const o=zw(e,n,i,r,s),a=new t.BufferGeometry;return a.setAttribute("position",new t.BufferAttribute(o.position,3)),a.setAttribute("elev",new t.BufferAttribute(o.elev,1)),a.setAttribute("grad",new t.BufferAttribute(o.grad,2)),a.setAttribute("drop",new t.BufferAttribute(o.drop,1)),a.setIndex(new t.BufferAttribute(o.index,1)),a.computeBoundingBox(),a.boundingBox.min.y=-60,a.boundingBox.max.y=50,a.boundingSphere=a.boundingBox.getBoundingSphere(new t.Sphere),a}const Hw="./pnw/",Vw="PYTHONPATH=src .venv/bin/python -m earthnote_data.build_bundle --terrain";class Oc extends Error{}async function Cg(t,e,n){var s,o;const i=await n(t);if(i.status===404||(o=(s=i.headers)==null?void 0:s.get("content-type"))!=null&&o.includes("html"))throw new Oc(`The map data is missing: ${t}. Build it with:`);if(!i.ok)throw new Error(`Could not load ${t} (HTTP ${i.status})`);const r=await i.arrayBuffer();if(e!=null&&r.byteLength!==e)throw new Oc(`The map data is incomplete: ${t} has ${r.byteLength} bytes, expected ${e}. Rebuild it with:`);return r}async function Gw(t=Hw,e=fetch){var d,p;const n=await e(`${t}manifest.json`);if(!n.ok||(p=(d=n.headers)==null?void 0:d.get("content-type"))!=null&&p.includes("html"))throw new Oc("The map data has not been built yet. Build it with:");const i=await n.json(),r=kw(i.projection),s=i.terrain,o=(m,x)=>Cg(`${t}terrain/${m}.bin`,x.ncols*x.nrows*2,e).then(g=>xx(x,g,r)),a={},l=Object.entries({...i.roads,...i.borders}).map(async([m,x])=>{a[m]=new Float32Array(await Cg(`${t}${x.file}`,x.segments*24,e))}),[c,u,h]=await Promise.all([o("outer",s.outer),o("overview",s.overview),e(`${t}${i.places.file}`).then(m=>m.json()),...l]);return{base:t,manifest:i,P:r,outer:c,overview:u,lines:a,places:h,waterUrl:`${t}${i.water.overview.file}`}}const Ww="./events/";async function Rg(t,e=Ww,n=fetch){var s,o;const i=await n(`${e}${t}/event.json`,{cache:"no-cache"});if(!i.ok||(o=(s=i.headers)==null?void 0:s.get("content-type"))!=null&&o.includes("html"))return null;const r=await i.json();return r.base=`${e}${t}/`,r.t0=Date.parse(r.start),r.runList=Object.fromEntries(Object.entries(r.runs).map(([a,l])=>[a,Object.entries(l).map(([c,u])=>({model:a,init:c,time:Vp(c),frames:new Set(u.frames),complete:u.complete})).sort((c,u)=>c.time-u.time)])),r.obsRain=new Set(Object.keys(r.obs.rain).map(Number)),r.obsMet=new Set(r.obs.met),r.obsGust=new Set(r.obs.gust??[]),r.lastObs=Math.max(-1,...r.obsRain),r}const Vp=t=>Date.UTC(+t.slice(0,4),+t.slice(4,6)-1,+t.slice(6,8),+t.slice(8,10)),ni=(t,e)=>t.t0+(e+1)*36e5;function Wo(t,e,n,i="rain"){const r={rain:t.obsRain,met:t.obsMet,gust:t.obsGust}[i];if(n.mode==="blend"&&(r!=null&&r.has(e)))return{type:"obs"};const s=t.runList[n.model]??[];if(n.mode==="run"){const o=s.find(a=>a.init===n.init);return o!=null&&o.frames.has(e)?{type:"fc",model:n.model,init:o.init}:null}for(let o=s.length-1;o>=0;o--)if(s[o].frames.has(e))return{type:"fc",model:n.model,init:s[o].init};return null}function cc(t,e,n,i){const r=`${i}/k${String(n).padStart(3,"0")}.png?v=${t.version??t.start}`;return e.type==="obs"?`${t.base}obs/${r}${i==="rain"?`&p=${t.obs.rain[n]??""}`:""}`:`${t.base}fc/${e.model}/${e.init}/${r}`}function Sx(t,e,n){if(n==="gust")return t.grids.gust;const i=e.type==="obs"?n==="rain"?t.obs.rainGrid:t.obs.metGrid:t.models[e.model][n==="rain"?"rainGrid":"metGrid"];return t.grids[i]}function jw(t,e){const n=new Float32Array(e);for(let i=0;i<e;i++){const r=t[i*4];n[i]=r===255?NaN:(r/25)**2}return n}function $w(t,e,n){if(e.cols===n.cols&&e.rows===n.rows)return t;const i=new Float32Array(n.cols*n.rows);for(let r=0;r<n.rows;r++){const s=n.north-(r+.5)*n.cell,o=Math.min(e.rows-1,Math.max(0,(e.north-s)/e.cell-.5)),a=Math.min(Math.floor(o),e.rows-2),l=o-a;for(let c=0;c<n.cols;c++){const u=n.west+(c+.5)*n.cell,h=Math.min(e.cols-1,Math.max(0,(u-e.west)/e.cell-.5)),d=Math.min(Math.floor(h),e.cols-2),p=h-d;let m=0,x=0;const g=(f,_,v)=>{const S=t[f*e.cols+_];!Number.isNaN(S)&&v>0&&(m+=S*v,x+=v)};g(a,d,(1-l)*(1-p)),g(a,d+1,(1-l)*p),g(a+1,d,l*(1-p)),g(a+1,d+1,l*p),i[r*n.cols+c]=x>0?m/x:NaN}}return i}async function Xw(t,e=fetch){var c;const n=await e(t);if(!n.ok)throw new Error(`HTTP ${n.status} for ${t}`);const i=await createImageBitmap(await n.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),s=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(i.width,i.height):Object.assign(document.createElement("canvas"),{width:i.width,height:i.height})).getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});s.drawImage(i,0,0);const{width:o,height:a}=i,l=s.getImageData(0,0,o,a).data;return(c=i.close)==null||c.call(i),{width:o,height:a,data:l}}class Pg{constructor(e=600,n=Xw){this.cap=e,this.decode=n,this.map=new Map}get(e){let n=this.map.get(e);if(n)return this.map.delete(e),this.map.set(e,n),n;for(n=this.decode(e).catch(i=>{throw this.map.delete(e),i}),this.map.set(e,n);this.map.size>this.cap;)this.map.delete(this.map.keys().next().value);return n}}class Yw{constructor(e,n){Object.assign(this,{doc:e,cache:n}),this.checkpoints=new Map}async hourly(e,n){const i=Wo(this.doc,e,n,"rain");if(!i)return null;const r=Sx(this.doc,i,"rain"),s=await this.cache.get(cc(this.doc,i,e,"rain"));return{src:i,mm:$w(jw(s.data,r.cols*r.rows),r,this.doc.grids.rain)}}async accumulated(e,n){var h;const i=this.doc.grids.rain,r=i.cols*i.rows,s=JSON.stringify(n);let o=this.checkpoints.get(s);o||(o=new Map,this.checkpoints.set(s,o));const a=n.mode==="run"?Math.min(...((h=this.doc.runList[n.model].find(d=>d.init===n.init))==null?void 0:h.frames)??[0]):0;if(e<a)return null;let l=a,c=new Float32Array(r),u=new Uint8Array(r);for(let d=Math.floor(e/12)*12;d>=a;d-=12){const p=o.get(d);if(p&&d<=e){c=p.sum.slice(),u=p.seen.slice(),l=d+1;break}}for(let d=l;d<=e;d++){const p=await this.hourly(d,n);if(p)for(let m=0;m<r;m++){const x=p.mm[m];Number.isNaN(x)||(c[m]+=x,u[m]=1)}d%12===0&&o.set(d,{sum:c.slice(),seen:u.slice()})}for(let d=0;d<r;d++)u[d]||(c[d]=NaN);return{mm:c,first:a}}}const Gp=(t,e)=>Object.fromEntries(t.formatToParts(e).map(n=>[n.type,n.value])),qw=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",month:"short",day:"numeric",hour:"numeric",hour12:!0,timeZoneName:"short"}),Mx=new Intl.DateTimeFormat("en-US",{timeZone:"UTC",month:"short",day:"numeric",hour:"2-digit",hourCycle:"h23"}),zh=t=>{const e=Gp(qw,t);return`${e.weekday} ${e.month} ${e.day} · ${e.hour} ${e.dayPeriod} ${e.timeZoneName}`},Kw=t=>{const e=Gp(Mx,t);return`${e.month} ${e.day} ${e.hour}:00 UTC`},kc=t=>{const e=Gp(Mx,Vp(t));return`${e.month} ${e.day} ${e.hour}z`},Zw=["high water","2-year flood","5-year flood","10-year flood","25-year flood","50-year flood"];function Qw(t,e){const n=t.count,i=t.paths;let r=0;const s=(d,p,m)=>{const x=new d(e,r,p);return r+=m,x},o=s(Float32Array,n*6,n*24),a=s(Uint16Array,n,(n+n%2)*2),l=s(Uint8Array,n,Math.ceil(n/4)*4),c=s(Uint32Array,i+1,(i+1)*4),u=s(Uint32Array,i,i*4),h=s(Float32Array,t.vertices*2,t.vertices*8);return{...t,thr:o,name:a,order:l,offsets:c,owner:u,coords:h}}async function Jw(t,e=fetch){const n=`${t.base}rivers/`,i=`?v=${t.version}`,[r,s]=await Promise.all([e(`${n}reaches.json${i}`).then(o=>o.json()),e(`${n}reaches.bin${i}`).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.arrayBuffer()})]);return Qw(r,s)}const Bh=t=>t===255?NaN:.05*(10**(t/40)-1);function Lg(t,e,n){let i=0;for(let r=0;r<6;r++){const s=e[n*6+r];s>0&&t>=s&&(i=r+1)}return i}const eE=2;function tE(t,e,n=!0){var o;const i=t.rivers;if(!i)return null;if(i.obs.includes(e))return{type:"obs",k:e};const r=Math.max(-1,...i.obs),s=t.updated&&t.t0+(e+1)*36e5<=Date.parse(t.updated);if(e<r)return null;if(s&&r>=0&&e-r<=eE)return{type:"obs",k:r};if(!n)return null;for(const a of["short","medium"]){const l=(o=i.whatif)==null?void 0:o[a];if(l&&e>=l.first&&e<l.first+l.count)return{type:"whatif",kind:a,init:l.init,i:e-l.first}}return null}class nE{constructor(e,n,i=(...r)=>fetch(...r)){Object.assign(this,{doc:e,n,fetchImpl:i}),this.map=new Map}_get(e){let n=this.map.get(e);return n||(n=this.fetchImpl(e).then(i=>{if(!i.ok)throw new Error(`HTTP ${i.status}`);return i.arrayBuffer()}).catch(i=>{throw this.map.delete(e),i}),this.map.set(e,n),this.map.size>80&&this.map.delete(this.map.keys().next().value)),n}async get(e){const n=`${this.doc.base}rivers/`,i=`?v=${this.doc.version}`;return e.type==="obs"?new Uint8Array(await this._get(`${n}obs/k${String(e.k).padStart(3,"0")}.bin${i}`)):new Uint8Array(await this._get(`${n}whatif/${e.kind}_${e.init}.bin${i}`),e.i*this.n,this.n)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yu="169",wi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wx=0,yf=1,Ex=2,Wp=1,Tx=2,gi=3,Yi=0,gn=1,Dn=2,Bi=0,Qr=1,Sf=2,Mf=3,wf=4,Ax=5,ur=100,bx=101,Cx=102,Rx=103,Px=104,Lx=200,Dx=201,Nx=202,Ux=203,zc=204,Bc=205,Ix=206,Fx=207,Ox=208,kx=209,zx=210,Bx=211,Hx=212,Vx=213,Gx=214,Hc=0,Vc=1,Gc=2,os=3,Wc=4,jc=5,$c=6,Xc=7,jp=0,Wx=1,jx=2,Hi=0,$x=1,Xx=2,Yx=3,qx=4,Kx=5,Zx=6,Qx=7,$p=300,as=301,ls=302,Yc=303,qc=304,$a=306,Kc=1e3,pr=1001,Zc=1002,Vt=1003,Jx=1004,jo=1005,on=1006,uc=1007,Oi=1008,Ei=1009,Xp=1010,Yp=1011,ho=1012,qu=1013,Ar=1014,xi=1015,_o=1016,Ku=1017,Zu=1018,cs=1020,qp=35902,Kp=1021,Zp=1022,Mn=1023,Qp=1024,Jp=1025,Jr=1026,us=1027,Xa=1028,Qu=1029,Ya=1030,Ju=1031,eh=1033,ia=33776,ra=33777,sa=33778,oa=33779,Qc=35840,Jc=35841,eu=35842,tu=35843,nu=36196,iu=37492,ru=37496,su=37808,ou=37809,au=37810,lu=37811,cu=37812,uu=37813,hu=37814,du=37815,fu=37816,pu=37817,mu=37818,gu=37819,vu=37820,_u=37821,aa=36492,xu=36494,yu=36495,em=36283,Su=36284,Mu=36285,wu=36286,ey=3200,ty=3201,ny=0,iy=1,Gn="",si="srgb",Ki="srgb-linear",th="display-p3",qa="display-p3-linear",Pa="linear",ht="srgb",La="rec709",Da="p3",Wr=7680,Ef=519,ry=512,sy=513,oy=514,tm=515,ay=516,ly=517,cy=518,uy=519,Eu=35044,Tf=35048,Af="300 es",yi=2e3,Na=2001;class Dr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dg=1234567;const la=Math.PI/180,Ua=180/Math.PI;function Vi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function nm(t,e){return(t%e+e)%e}function iE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function rE(t,e,n){return t!==e?(n-t)/(e-t):0}function ca(t,e,n){return(1-n)*t+n*e}function sE(t,e,n,i){return ca(t,e,1-Math.exp(-n*i))}function oE(t,e=1){return e-Math.abs(nm(t,e*2)-e)}function aE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function lE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function cE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function uE(t,e){return t+Math.random()*(e-t)}function hE(t){return t*(.5-Math.random())}function dE(t){t!==void 0&&(Dg=t);let e=Dg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fE(t){return t*la}function pE(t){return t*Ua}function mE(t){return(t&t-1)===0&&t!==0}function gE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _E(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ai(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const fo={DEG2RAD:la,RAD2DEG:Ua,generateUUID:Vi,clamp:Kt,euclideanModulo:nm,mapLinear:iE,inverseLerp:rE,lerp:ca,damp:sE,pingpong:oE,smoothstep:aE,smootherstep:lE,randInt:cE,randFloat:uE,randFloatSpread:hE,seededRandom:dE,degToRad:fE,radToDeg:pE,isPowerOfTwo:mE,ceilPowerOfTwo:gE,floorPowerOfTwo:vE,setQuaternionFromProperEuler:_E,normalize:ot,denormalize:ai};class Be{constructor(e=0,n=0){Be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],x=r[0],g=r[3],f=r[6],_=r[1],v=r[4],S=r[7],R=r[2],C=r[5],A=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*g+a*v+l*C,s[6]=o*f+a*S+l*A,s[1]=c*x+u*_+h*R,s[4]=c*g+u*v+h*C,s[7]=c*f+u*S+h*A,s[2]=d*x+p*_+m*R,s[5]=d*g+p*v+m*C,s[8]=d*f+p*S+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,m=n*h+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hh.makeScale(e,n)),this}rotate(e){return this.premultiply(Hh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hh=new We;function hy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ia(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dy(){const t=Ia("canvas");return t.style.display="block",t}const Ng={};function hc(t){t in Ng||(Ng[t]=!0,console.warn(t))}function xE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function yE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function SE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ug=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ig=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[Ki]:{transfer:Pa,primaries:La,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[si]:{transfer:ht,primaries:La,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[qa]:{transfer:Pa,primaries:Da,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Ig),fromReference:t=>t.applyMatrix3(Ug)},[th]:{transfer:ht,primaries:Da,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ig),fromReference:t=>t.applyMatrix3(Ug).convertLinearToSRGB()}},ME=new Set([Ki,qa]),et={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ME.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Do[e].toReference,r=Do[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Do[t].primaries},getTransfer:function(t){return t===Gn?Pa:Do[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Do[e].luminanceCoefficients)}};function no(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class fy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Ia("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ia("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=no(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(no(n[i]/255)*255):n[i]=no(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wE=0;class im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gh(r[o].image)):s.push(Gh(r[o]))}else s=Gh(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EE=0;class Qt extends Dr{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=pr,r=pr,s=on,o=Oi,a=Mn,l=Ei,c=Qt.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Vi(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kc:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kc:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=$p;Qt.DEFAULT_ANISOTROPY=1;class Xe{constructor(e=0,n=0,i=0,r=1){Xe.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],m=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,R=(f+1)/2,C=(u+d)/4,A=(h+x)/4,P=(m+g)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends Dr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xe(0,0,e,n),this.scissorTest=!1,this.viewport=new Xe(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new im(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends py{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class nh extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=m,e[n+3]=x;return}if(h!==x||l!==d||c!==p||u!==m){let g=1-a;const f=l*d+c*p+u*m+h*x,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),C=Math.atan2(R,f*_);g=Math.sin(g*C)/R,a=Math.sin(a*C)/R}const S=a*_;if(l=l*g+d*S,c=c*g+p*S,u=u*g+m*S,h=h*g+x*S,g===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*h+l*p-c*d,e[n+1]=l*m+u*d+c*h-a*p,e[n+2]=c*m+u*p+a*d-l*h,e[n+3]=u*m-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wh=new U,Fg=new Cr;class Zi{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vl.copy(i.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),_l.subVectors(this.max,No),ys.subVectors(e.a,No),Ss.subVectors(e.b,No),Ms.subVectors(e.c,No),er.subVectors(Ss,ys),tr.subVectors(Ms,Ss),Fr.subVectors(ys,Ms);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Fr.z,Fr.y,er.z,0,-er.x,tr.z,0,-tr.x,Fr.z,0,-Fr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Fr.y,Fr.x,0];return!jh(n,ys,Ss,Ms,_l)||(n=[1,0,0,0,1,0,0,0,1],!jh(n,ys,Ss,Ms,_l))?!1:(xl.crossVectors(er,tr),n=[xl.x,xl.y,xl.z],jh(n,ys,Ss,Ms,_l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new U,new U,new U,new U,new U,new U,new U,new U],Qn=new U,vl=new Zi,ys=new U,Ss=new U,Ms=new U,er=new U,tr=new U,Fr=new U,No=new U,_l=new U,xl=new U,Or=new U;function jh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Or.fromArray(t,s);const a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=n.dot(Or),u=i.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const TE=new Zi,Uo=new U,$h=new U;class Nr{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):TE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add($h)),this.expandByPoint(Uo.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new U,Xh=new U,yl=new U,nr=new U,Yh=new U,Sl=new U,qh=new U;class Ka{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xh.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(Xh);const s=e.distanceTo(n)*.5,o=-this.direction.dot(yl),a=nr.dot(this.direction),l=-nr.dot(yl),c=nr.lengthSq(),u=Math.abs(1-o*o);let h,d,p,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xh).addScaledVector(yl,d),p}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){Yh.subVectors(n,e),Sl.subVectors(i,e),qh.crossVectors(Yh,Sl);let o=this.direction.dot(qh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(Sl.crossVectors(nr,Sl));if(l<0)return null;const c=a*this.direction.dot(Yh.cross(nr));if(c<0||l+c>o)return null;const u=-a*nr.dot(qh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,m,x,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,m,x,g)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,m,x,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,m=a*u,x=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+m*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,m=c*u,x=c*h;n[0]=d+x*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,m=c*u,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,m=a*u,x=a*h;n[0]=l*u,n[4]=m*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*u,n[4]=x-d*h,n[8]=m*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+m,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+x,n[5]=o*u,n[9]=p*h-m,n[2]=m*h-p,n[6]=a*u,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AE,e,bE)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ir.crossVectors(i,Cn),ir.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ir.crossVectors(i,Cn)),ir.normalize(),Ml.crossVectors(Cn,ir),r[0]=ir.x,r[4]=Ml.x,r[8]=Cn.x,r[1]=ir.y,r[5]=Ml.y,r[9]=Cn.y,r[2]=ir.z,r[6]=Ml.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],x=i[6],g=i[10],f=i[14],_=i[3],v=i[7],S=i[11],R=i[15],C=r[0],A=r[4],P=r[8],X=r[12],y=r[1],E=r[5],H=r[9],B=r[13],k=r[2],q=r[6],z=r[10],K=r[14],D=r[3],Y=r[7],J=r[11],re=r[15];return s[0]=o*C+a*y+l*k+c*D,s[4]=o*A+a*E+l*q+c*Y,s[8]=o*P+a*H+l*z+c*J,s[12]=o*X+a*B+l*K+c*re,s[1]=u*C+h*y+d*k+p*D,s[5]=u*A+h*E+d*q+p*Y,s[9]=u*P+h*H+d*z+p*J,s[13]=u*X+h*B+d*K+p*re,s[2]=m*C+x*y+g*k+f*D,s[6]=m*A+x*E+g*q+f*Y,s[10]=m*P+x*H+g*z+f*J,s[14]=m*X+x*B+g*K+f*re,s[3]=_*C+v*y+S*k+R*D,s[7]=_*A+v*E+S*q+R*Y,s[11]=_*P+v*H+S*z+R*J,s[15]=_*X+v*B+S*K+R*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],x=e[7],g=e[11],f=e[15];return m*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+g*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],x=e[13],g=e[14],f=e[15],_=h*g*c-x*d*c+x*l*p-a*g*p-h*l*f+a*d*f,v=m*d*c-u*g*c-m*l*p+o*g*p+u*l*f-o*d*f,S=u*x*c-m*h*c+m*a*p-o*x*p-u*a*f+o*h*f,R=m*h*l-u*x*l-m*a*d+o*x*d+u*a*g-o*h*g,C=n*_+i*v+r*S+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(x*d*s-h*g*s-x*r*p+i*g*p+h*r*f-i*d*f)*A,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*f+i*l*f)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(u*g*s-m*d*s+m*r*p-n*g*p-u*r*f+n*d*f)*A,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*f-n*l*f)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(m*h*s-u*x*s-m*i*p+n*x*p+u*i*f-n*h*f)*A,e[10]=(o*x*s-m*a*s+m*i*c-n*x*c-o*i*f+n*a*f)*A,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*A,e[12]=R*A,e[13]=(u*x*r-m*h*r+m*i*d-n*x*d-u*i*g+n*h*g)*A,e[14]=(m*a*r-o*x*r-m*i*l+n*x*l+o*i*g-n*a*g)*A,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,m=s*h,x=o*u,g=o*h,f=a*h,_=l*c,v=l*u,S=l*h,R=i.x,C=i.y,A=i.z;return r[0]=(1-(x+f))*R,r[1]=(p+S)*R,r[2]=(m-v)*R,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(d+f))*C,r[6]=(g+_)*C,r[7]=0,r[8]=(m+v)*A,r[9]=(g-_)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ws.set(r[0],r[1],r[2]).length();const o=ws.set(r[4],r[5],r[6]).length(),a=ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,u=1/o,h=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,m;if(a===yi)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Na)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*u;let m,x;if(a===yi)m=(o+s)*h,x=-2*h;else if(a===Na)m=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ws=new U,Jn=new _t,AE=new U(0,0,0),bE=new U(1,1,1),ir=new U,Ml=new U,Cn=new U,Og=new _t,kg=new Cr;class Ti{constructor(e=0,n=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Og,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kg.setFromEuler(this),this.setFromQuaternion(kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class rm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CE=0;const zg=new U,Es=new Cr,Ci=new _t,wl=new U,Io=new U,RE=new U,PE=new Cr,Bg=new U(1,0,0),Hg=new U(0,1,0),Vg=new U(0,0,1),Gg={type:"added"},LE={type:"removed"},Ts={type:"childadded",child:null},Kh={type:"childremoved",child:null};class ln extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new U,n=new Ti,i=new Cr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new We}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(Hg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,n){return zg.copy(e).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(Hg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wl.copy(e):wl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Io,wl,this.up):Ci.lookAt(wl,Io,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Ci),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gg),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(LE),Kh.child=e,this.dispatchEvent(Kh),Kh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gg),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,RE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,PE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new U(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new U,Ri=new U,Zh=new U,Pi=new U,As=new U,bs=new U,Wg=new U,Qh=new U,Jh=new U,ed=new U,td=new Xe,nd=new Xe,id=new Xe;class Wn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Ri.subVectors(i,n),Zh.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Ri),l=ei.dot(Zh),c=Ri.dot(Ri),u=Ri.dot(Zh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,n),nd.fromBufferAttribute(e,i),id.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(td,s.x),o.addScaledVector(nd,s.y),o.addScaledVector(id,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Ri.subVectors(e,n),ei.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ei.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),bs.subVectors(s,i),Qh.subVectors(e,i);const l=As.dot(Qh),c=bs.dot(Qh);if(l<=0&&c<=0)return n.copy(i);Jh.subVectors(e,r);const u=As.dot(Jh),h=bs.dot(Jh);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(As,o);ed.subVectors(e,s);const p=As.dot(ed),m=bs.dot(ed);if(m>=0&&p<=m)return n.copy(s);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(bs,a);const g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return Wg.subVectors(s,r),a=(h-u)/(h-u+(p-m)),n.copy(r).addScaledVector(Wg,a);const f=1/(g+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(As,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},El={h:0,s:0,l:0};function rd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=nm(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rd(o,s,e+1/3),this.g=rd(o,s,e),this.b=rd(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=si){const i=gy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}copyLinearToSRGB(e){return this.r=Vh(e.r),this.g=Vh(e.g),this.b=Vh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return et.fromWorkingColorSpace(rn.copy(this),e),Math.round(Kt(rn.r*255,0,255))*65536+Math.round(Kt(rn.g*255,0,255))*256+Math.round(Kt(rn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=si){et.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==si?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(El);const i=ca(rr.h,El.h,n),r=ca(rr.s,El.s,n),s=ca(rr.l,El.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new je;je.NAMES=gy;let DE=0;class ps extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Qr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Bc,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ef&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sm extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new U,Tl=new Be;class Ft{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Eu,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tl.fromBufferAttribute(this,n),Tl.applyMatrix3(e),this.setXY(n,Tl.x,Tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ai(n,this.array)),n}setX(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ai(n,this.array)),n}setY(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ai(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ai(n,this.array)),n}setW(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eu&&(e.usage=this.usage),e}}class om extends Ft{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class am extends Ft{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ut extends Ft{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NE=0;const Bn=new _t,sd=new ln,Cs=new U,Rn=new Zi,Fo=new Zi,Bt=new U;class St extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hy(e)?am:om)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Rn.min,Fo.min),Rn.expandByPoint(Bt),Bt.addVectors(Rn.max,Fo.max),Rn.expandByPoint(Bt)):(Rn.expandByPoint(Fo.min),Rn.expandByPoint(Fo.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),Bt.add(Cs)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const c=new U,u=new U,h=new U,d=new Be,p=new Be,m=new Be,x=new U,g=new U;function f(P,X,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,X),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,X),m.fromBufferAttribute(s,y),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const E=1/(p.x*m.y-m.x*p.y);isFinite(E)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(E),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(E),a[P].add(x),a[X].add(x),a[y].add(x),l[P].add(g),l[X].add(g),l[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,X=_.length;P<X;++P){const y=_[P],E=y.start,H=y.count;for(let B=E,k=E+H;B<k;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new U,S=new U,R=new U,C=new U;function A(P){R.fromBufferAttribute(r,P),C.copy(R);const X=a[P];v.copy(X),v.sub(R.multiplyScalar(R.dot(X))).normalize(),S.crossVectors(C,X);const E=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,E)}for(let P=0,X=_.length;P<X;++P){const y=_[P],E=y.start,H=y.count;for(let B=E,k=E+H;B<k;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ft(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[m++]=c[p++]}return new Ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new St,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jg=new _t,kr=new Ka,Al=new Nr,$g=new U,bl=new U,Cl=new U,Rl=new U,od=new U,Pl=new U,Xg=new U,Ll=new U;class an extends ln{constructor(e=new St,n=new sm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(od.fromBufferAttribute(h,e),o?Pl.addScaledVector(od,u):Pl.addScaledVector(od.sub(n),u))}n.add(Pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(Al.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Al,$g)===null||kr.origin.distanceToSquared($g)>(e.far-e.near)**2))&&(jg.copy(s).invert(),kr.copy(e.ray).applyMatrix4(jg),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],f=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,R=v;S<R;S+=3){const C=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=Dl(this,f,e,i,c,u,h,C,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const _=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=Dl(this,o,e,i,c,u,h,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],f=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,R=v;S<R;S+=3){const C=S,A=S+1,P=S+2;r=Dl(this,f,e,i,c,u,h,C,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const _=g,v=g+1,S=g+2;r=Dl(this,o,e,i,c,u,h,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function UE(t,e,n,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;Ll.copy(a),Ll.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ll);return c<n.near||c>n.far?null:{distance:c,point:Ll.clone(),object:t}}function Dl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,bl),t.getVertexPosition(l,Cl),t.getVertexPosition(c,Rl);const u=UE(t,e,n,i,bl,Cl,Rl,Xg);if(u){const h=new U;Wn.getBarycoord(Xg,bl,Cl,Rl,h),r&&(u.uv=Wn.getInterpolatedAttribute(r,a,l,c,h,new Be)),s&&(u.uv1=Wn.getInterpolatedAttribute(s,a,l,c,h,new Be)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Wn.getNormal(bl,Cl,Rl,d.normal),u.face=d,u.barycoord=h}return u}class xo extends St{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function m(x,g,f,_,v,S,R,C,A,P,X){const y=S/A,E=R/P,H=S/2,B=R/2,k=C/2,q=A+1,z=P+1;let K=0,D=0;const Y=new U;for(let J=0;J<z;J++){const re=J*E-B;for(let Me=0;Me<q;Me++){const Le=Me*y-H;Y[x]=Le*_,Y[g]=re*v,Y[f]=k,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[f]=C>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(Me/A),h.push(1-J/P),K+=1}}for(let J=0;J<P;J++)for(let re=0;re<A;re++){const Me=d+re+q*J,Le=d+re+q*(J+1),j=d+(re+1)+q*(J+1),ne=d+(re+1)+q*J;l.push(Me,Le,ne),l.push(Le,j,ne),D+=6}a.addGroup(p,D,X),p+=D,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=po(t[n]);for(const r in i)e[r]=i[r]}return e}function IE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ih={clone:po,merge:hn};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=OE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=IE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class lm extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new U,Yg=new Be,qg=new Be;class Ln extends lm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,Yg,qg),n.subVectors(qg,Yg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rs=-90,Ps=1;class _y extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(Rs,Ps,e,n);r.layers=this.layers,this.add(r);const s=new Ln(Rs,Ps,e,n);s.layers=this.layers,this.add(s);const o=new Ln(Rs,Ps,e,n);o.layers=this.layers,this.add(o);const a=new Ln(Rs,Ps,e,n);a.layers=this.layers,this.add(a);const l=new Ln(Rs,Ps,e,n);l.layers=this.layers,this.add(l);const c=new Ln(Rs,Ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class cm extends Qt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:as,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xy extends br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:on}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xo(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Bi});s.uniforms.tEquirect.value=n;const o=new an(r,s),a=n.minFilter;return n.minFilter===Oi&&(n.minFilter=on),new _y(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ad=new U,kE=new U,zE=new We;class Ni{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ad.subVectors(i,n).cross(kE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ad),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zE.getNormalMatrix(e),r=this.coplanarPoint(ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Nr,Nl=new U;class um{constructor(e=new Ni,n=new Ni,i=new Ni,r=new Ni,s=new Ni,o=new Ni){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],m=r[9],x=r[10],g=r[11],f=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,g-p,S-f).normalize(),i[1].setComponents(l+s,d+c,g+p,S+f).normalize(),i[2].setComponents(l+o,d+u,g+m,S+_).normalize(),i[3].setComponents(l-o,d-u,g-m,S-_).normalize(),i[4].setComponents(l-a,d-h,g-x,S-v).normalize(),n===yi)i[5].setComponents(l+a,d+h,g+x,S+v).normalize();else if(n===Na)i[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Nl.x=r.normal.x>0?e.max.x:e.min.x,Nl.y=r.normal.y>0?e.max.y:e.min.y,Nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function BE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const x=h[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Za extends St{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],m=[],x=[],g=[];for(let f=0;f<u;f++){const _=f*d-o;for(let v=0;v<c;v++){const S=v*h-s;m.push(S,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+c*f,S=_+c*(f+1),R=_+1+c*(f+1),C=_+1+c*f;p.push(v,S,C),p.push(S,R,C)}this.setIndex(p),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.widthSegments,e.heightSegments)}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VE=`#ifdef USE_ALPHAHASH
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
#endif`,GE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
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
#endif`,YE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,KE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e1=`#ifdef USE_IRIDESCENCE
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
#endif`,t1=`#ifdef USE_BUMPMAP
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
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,u1=`#define PI 3.141592653589793
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
} // validated`,h1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d1=`vec3 transformedNormal = objectNormal;
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
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v1="gl_FragColor = linearToOutputTexel( gl_FragColor );",_1=`
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
}`,x1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S1=`#ifdef USE_ENVMAP
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
#endif`,M1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
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
}`,R1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
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
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,U1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k1=`PhysicalMaterial material;
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
#endif`,z1=`struct PhysicalMaterial {
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
}`,B1=`
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
#endif`,H1=`#if defined( RE_IndirectDiffuse )
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
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K1=`#if defined( USE_POINTS_UV )
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
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nT=`#ifdef USE_MORPHTARGETS
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
#endif`,iT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cT=`#ifdef USE_NORMALMAP
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
#endif`,uT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ST=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ET=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TT=`float getShadowMask() {
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
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
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
#endif`,CT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RT=`#ifdef USE_SKINNING
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
#endif`,PT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HT=`uniform sampler2D t2D;
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
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`#include <common>
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
}`,XT=`#if DEPTH_PACKING == 3200
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
}`,YT=`#define DISTANCE
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
}`,qT=`#define DISTANCE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`uniform float scale;
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
}`,JT=`uniform vec3 diffuse;
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
}`,eA=`#include <common>
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
}`,tA=`uniform vec3 diffuse;
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
}`,nA=`#define LAMBERT
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
}`,iA=`#define LAMBERT
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
}`,rA=`#define MATCAP
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
}`,sA=`#define MATCAP
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
}`,oA=`#define NORMAL
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
}`,aA=`#define NORMAL
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
}`,lA=`#define PHONG
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
}`,cA=`#define PHONG
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
}`,uA=`#define STANDARD
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
}`,hA=`#define STANDARD
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
}`,dA=`#define TOON
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
}`,fA=`#define TOON
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
}`,pA=`uniform float size;
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,vA=`uniform vec3 color;
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
}`,_A=`uniform float rotation;
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
}`,xA=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:HE,alphahash_pars_fragment:VE,alphamap_fragment:GE,alphamap_pars_fragment:WE,alphatest_fragment:jE,alphatest_pars_fragment:$E,aomap_fragment:XE,aomap_pars_fragment:YE,batching_pars_vertex:qE,batching_vertex:KE,begin_vertex:ZE,beginnormal_vertex:QE,bsdfs:JE,iridescence_fragment:e1,bumpmap_pars_fragment:t1,clipping_planes_fragment:n1,clipping_planes_pars_fragment:i1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:s1,color_fragment:o1,color_pars_fragment:a1,color_pars_vertex:l1,color_vertex:c1,common:u1,cube_uv_reflection_fragment:h1,defaultnormal_vertex:d1,displacementmap_pars_vertex:f1,displacementmap_vertex:p1,emissivemap_fragment:m1,emissivemap_pars_fragment:g1,colorspace_fragment:v1,colorspace_pars_fragment:_1,envmap_fragment:x1,envmap_common_pars_fragment:y1,envmap_pars_fragment:S1,envmap_pars_vertex:M1,envmap_physical_pars_fragment:N1,envmap_vertex:w1,fog_vertex:E1,fog_pars_vertex:T1,fog_fragment:A1,fog_pars_fragment:b1,gradientmap_pars_fragment:C1,lightmap_pars_fragment:R1,lights_lambert_fragment:P1,lights_lambert_pars_fragment:L1,lights_pars_begin:D1,lights_toon_fragment:U1,lights_toon_pars_fragment:I1,lights_phong_fragment:F1,lights_phong_pars_fragment:O1,lights_physical_fragment:k1,lights_physical_pars_fragment:z1,lights_fragment_begin:B1,lights_fragment_maps:H1,lights_fragment_end:V1,logdepthbuf_fragment:G1,logdepthbuf_pars_fragment:W1,logdepthbuf_pars_vertex:j1,logdepthbuf_vertex:$1,map_fragment:X1,map_pars_fragment:Y1,map_particle_fragment:q1,map_particle_pars_fragment:K1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:Q1,morphinstance_vertex:J1,morphcolor_vertex:eT,morphnormal_vertex:tT,morphtarget_pars_vertex:nT,morphtarget_vertex:iT,normal_fragment_begin:rT,normal_fragment_maps:sT,normal_pars_fragment:oT,normal_pars_vertex:aT,normal_vertex:lT,normalmap_pars_fragment:cT,clearcoat_normal_fragment_begin:uT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:fT,opaque_fragment:pT,packing:mT,premultiplied_alpha_fragment:gT,project_vertex:vT,dithering_fragment:_T,dithering_pars_fragment:xT,roughnessmap_fragment:yT,roughnessmap_pars_fragment:ST,shadowmap_pars_fragment:MT,shadowmap_pars_vertex:wT,shadowmap_vertex:ET,shadowmask_pars_fragment:TT,skinbase_vertex:AT,skinning_pars_vertex:bT,skinning_vertex:CT,skinnormal_vertex:RT,specularmap_fragment:PT,specularmap_pars_fragment:LT,tonemapping_fragment:DT,tonemapping_pars_fragment:NT,transmission_fragment:UT,transmission_pars_fragment:IT,uv_pars_fragment:FT,uv_pars_vertex:OT,uv_vertex:kT,worldpos_vertex:zT,background_vert:BT,background_frag:HT,backgroundCube_vert:VT,backgroundCube_frag:GT,cube_vert:WT,cube_frag:jT,depth_vert:$T,depth_frag:XT,distanceRGBA_vert:YT,distanceRGBA_frag:qT,equirect_vert:KT,equirect_frag:ZT,linedashed_vert:QT,linedashed_frag:JT,meshbasic_vert:eA,meshbasic_frag:tA,meshlambert_vert:nA,meshlambert_frag:iA,meshmatcap_vert:rA,meshmatcap_frag:sA,meshnormal_vert:oA,meshnormal_frag:aA,meshphong_vert:lA,meshphong_frag:cA,meshphysical_vert:uA,meshphysical_frag:hA,meshtoon_vert:dA,meshtoon_frag:fA,points_vert:pA,points_frag:mA,shadow_vert:gA,shadow_frag:vA,sprite_vert:_A,sprite_frag:xA},de={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},pn={basic:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:hn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:hn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:hn([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:hn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:hn([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:hn([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:hn([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:hn([de.lights,de.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};pn.physical={uniforms:hn([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ul={r:0,b:0,g:0},Br=new Ti,yA=new _t;function SA(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const S=m(_);S===null?f(a,l):S&&S.isColor&&(f(S,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===$a)?(u===void 0&&(u=new an(new xo(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:po(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Br.copy(v.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yA.makeRotationFromEuler(Br)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==ht,(h!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new an(new Za(2,2),new Wt({name:"BackgroundMaterial",uniforms:po(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(Ul,vy(t)),i.buffers.color.setClear(Ul.r,Ul.g,Ul.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:g}}function MA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,E,H,B,k){let q=!1;const z=h(B,H,E);s!==z&&(s=z,c(s.object)),q=p(y,B,H,k),q&&m(y,B,H,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(y,E,H,B),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function h(y,E,H){const B=H.wireframe===!0;let k=i[y.id];k===void 0&&(k={},i[y.id]=k);let q=k[E.id];q===void 0&&(q={},k[E.id]=q);let z=q[B];return z===void 0&&(z=d(l()),q[B]=z),z}function d(y){const E=[],H=[],B=[];for(let k=0;k<n;k++)E[k]=0,H[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,E,H,B){const k=s.attributes,q=E.attributes;let z=0;const K=H.getAttributes();for(const D in K)if(K[D].location>=0){const J=k[D];let re=q[D];if(re===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function m(y,E,H,B){const k={},q=E.attributes;let z=0;const K=H.getAttributes();for(const D in K)if(K[D].location>=0){let J=q[D];J===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const re={};re.attribute=J,J&&J.data&&(re.data=J.data),k[D]=re,z++}s.attributes=k,s.attributesNum=z,s.index=B}function x(){const y=s.newAttributes;for(let E=0,H=y.length;E<H;E++)y[E]=0}function g(y){f(y,0)}function f(y,E){const H=s.newAttributes,B=s.enabledAttributes,k=s.attributeDivisors;H[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),k[y]!==E&&(t.vertexAttribDivisor(y,E),k[y]=E)}function _(){const y=s.newAttributes,E=s.enabledAttributes;for(let H=0,B=E.length;H<B;H++)E[H]!==y[H]&&(t.disableVertexAttribArray(H),E[H]=0)}function v(y,E,H,B,k,q,z){z===!0?t.vertexAttribIPointer(y,E,H,k,q):t.vertexAttribPointer(y,E,H,B,k,q)}function S(y,E,H,B){x();const k=B.attributes,q=H.getAttributes(),z=E.defaultAttributeValues;for(const K in q){const D=q[K];if(D.location>=0){let Y=k[K];if(Y===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const J=Y.normalized,re=Y.itemSize,Me=e.get(Y);if(Me===void 0)continue;const Le=Me.buffer,j=Me.type,ne=Me.bytesPerElement,ue=j===t.INT||j===t.UNSIGNED_INT||Y.gpuType===qu;if(Y.isInterleavedBufferAttribute){const he=Y.data,De=he.stride,Re=Y.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<D.locationSize;Ve++)f(D.location+Ve,he.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<D.locationSize;Ve++)g(D.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Ve=0;Ve<D.locationSize;Ve++)v(D.location+Ve,re/D.locationSize,j,J,De*ne,(Re+re/D.locationSize*Ve)*ne,ue)}else{if(Y.isInstancedBufferAttribute){for(let he=0;he<D.locationSize;he++)f(D.location+he,Y.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let he=0;he<D.locationSize;he++)g(D.location+he);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let he=0;he<D.locationSize;he++)v(D.location+he,re/D.locationSize,j,J,re*ne,re/D.locationSize*he*ne,ue)}}else if(z!==void 0){const J=z[K];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}_()}function R(){P();for(const y in i){const E=i[y];for(const H in E){const B=E[H];for(const k in B)u(B[k].object),delete B[k];delete E[H]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const H in E){const B=E[H];for(const k in B)u(B[k].object),delete B[k];delete E[H]}delete i[y.id]}function A(y){for(const E in i){const H=i[E];if(H[y.id]===void 0)continue;const B=H[y.id];for(const k in B)u(B[k].object),delete B[k];delete H[y.id]}}function P(){X(),o=!0,s!==r&&(s=r,c(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:X,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function wA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];n.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x];for(let x=0;x<d.length;x++)n.update(m,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function EA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Mn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===_o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ei&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xi&&!P)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:R,maxSamples:C}}function TA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ni,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,v=_*4;let S=f.clippingState||null;l.value=S,S=u(m,d,v,p);for(let R=0;R!==v;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const f=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,S=p;v!==x;++v,S+=4)o.copy(h[v]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function AA(t){let e=new WeakMap;function n(o,a){return a===Yc?o.mapping=as:a===qc&&(o.mapping=ls),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yc||a===qc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xy(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sy extends lm{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const $s=4,Kg=[.125,.215,.35,.446,.526,.582],$r=20,ld=new Sy,Zg=new je;let cd=null,ud=0,hd=0,dd=!1;const jr=(1+Math.sqrt(5))/2,Ls=1/jr,Qg=[new U(-jr,Ls,0),new U(jr,Ls,0),new U(-Ls,0,jr),new U(Ls,0,jr),new U(0,jr,-Ls),new U(0,jr,Ls),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ud,hd),this._renderer.xr.enabled=dd,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:_o,format:Mn,colorSpace:Ki,depthBuffer:!1},r=Jg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bA(s)),this._blurMaterial=CA(s,e,n)}return r}_compileMaterial(e){const n=new an(this._lodPlanes[0],e);this._renderer.compile(n,ld)}_sceneToCubeUV(e,n,i,r){const a=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Zg),u.toneMapping=Hi,u.autoClear=!1;const p=new sm({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new an(new xo,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Zg),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Il(r,_*v,f>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===as||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new an(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Il(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ld)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qg[(r-s-1)%Qg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new an(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):$r;g>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$r}`);const f=[];let _=0;for(let A=0;A<$r;++A){const P=A/x,X=Math.exp(-P*P/2);f.push(X),A===0?_+=X:A<g&&(_+=2*X)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-$s?r-v+$s:0),C=4*(this._cubeSize-S);Il(n,R,C,3*S,2*S),l.setRenderTarget(n),l.render(h,ld)}}function bA(t){const e=[],n=[],i=[];let r=t;const s=t-$s+1+Kg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-$s?l=Kg[o-t+$s-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,x=3,g=2,f=1,_=new Float32Array(x*m*p),v=new Float32Array(g*m*p),S=new Float32Array(f*m*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,P=C>2?0:-1,X=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(X,x*m*C),v.set(d,g*m*C);const y=[C,C,C,C,C,C];S.set(y,f*m*C)}const R=new St;R.setAttribute("position",new Ft(_,x)),R.setAttribute("uv",new Ft(v,g)),R.setAttribute("faceIndex",new Ft(S,f)),e.push(R),r>$s&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jg(t,e,n){const i=new br(t,e,n);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CA(t,e,n){const i=new Float32Array($r),r=new U(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hm(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function e0(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hm(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function t0(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function hm(){return`

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
	`}function RA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yc||l===qc,u=l===as||l===ls;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new bf(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new bf(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function LA(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const x=d.morphAttributes[m];for(let g=0,f=x.length;g<f;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const m in p){const x=p[m];for(let g=0,f=x.length;g<f;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,m=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,S=_.length;v<S;v+=3){const R=_[v+0],C=_[v+1],A=_[v+2];d.push(R,C,C,A,A,R)}}else if(m!==void 0){const _=m.array;x=m.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const R=v+0,C=v+1,A=v+2;d.push(R,C,C,A,A,R)}}else return;const g=new(hy(d)?am:om)(d,1);g.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function DA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,d*o,m),n.update(p,i,m))}function u(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];n.update(g,i,1)}function h(d,p,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,m);let f=0;for(let _=0;_<m;_++)f+=p[_];for(let _=0;_<x.length;_++)n.update(f,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function NA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UA(t,e,n){const i=new WeakMap,r=new Xe;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),g===!0&&(S=3);let R=a.attributes.position.count*S,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*C*4*h),P=new nh(A,R,C,h);P.type=xi,P.needsUpdate=!0;const X=S*4;for(let E=0;E<h;E++){const H=f[E],B=_[E],k=v[E],q=R*C*4*E;for(let z=0;z<H.count;z++){const K=z*X;m===!0&&(r.fromBufferAttribute(H,z),A[q+K+0]=r.x,A[q+K+1]=r.y,A[q+K+2]=r.z,A[q+K+3]=0),x===!0&&(r.fromBufferAttribute(B,z),A[q+K+4]=r.x,A[q+K+5]=r.y,A[q+K+6]=r.z,A[q+K+7]=0),g===!0&&(r.fromBufferAttribute(k,z),A[q+K+8]=r.x,A[q+K+9]=r.y,A[q+K+10]=r.z,A[q+K+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new Be(R,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function IA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class dm extends Qt{constructor(e,n,i,r,s,o,a,l,c,u=Jr){if(u!==Jr&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jr&&(i=Ar),i===void 0&&u===us&&(i=cs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const My=new Qt,n0=new dm(1,1),wy=new nh,Ey=new my,Ty=new cm,i0=[],r0=[],s0=new Float32Array(16),o0=new Float32Array(9),a0=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=i0[r];if(s===void 0&&(s=new Float32Array(r),i0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rh(t,e){let n=r0[e];n===void 0&&(n=new Int32Array(e),r0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function kA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function BA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;a0.set(i),t.uniformMatrix2fv(this.addr,!1,a0),zt(n,i)}}function HA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;o0.set(i),t.uniformMatrix3fv(this.addr,!1,o0),zt(n,i)}}function VA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;s0.set(i),t.uniformMatrix4fv(this.addr,!1,s0),zt(n,i)}}function GA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function $A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function XA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function ZA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(n0.compareFunction=tm,s=n0):s=My,n.setTexture2D(e||s,r)}function QA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ey,r)}function JA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ty,r)}function e2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||wy,r)}function t2(t){switch(t){case 5126:return FA;case 35664:return OA;case 35665:return kA;case 35666:return zA;case 35674:return BA;case 35675:return HA;case 35676:return VA;case 5124:case 35670:return GA;case 35667:case 35671:return WA;case 35668:case 35672:return jA;case 35669:case 35673:return $A;case 5125:return XA;case 36294:return YA;case 36295:return qA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return e2}}function n2(t,e){t.uniform1fv(this.addr,e)}function i2(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function r2(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function s2(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function o2(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function a2(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function l2(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function c2(t,e){t.uniform1iv(this.addr,e)}function u2(t,e){t.uniform2iv(this.addr,e)}function h2(t,e){t.uniform3iv(this.addr,e)}function d2(t,e){t.uniform4iv(this.addr,e)}function f2(t,e){t.uniform1uiv(this.addr,e)}function p2(t,e){t.uniform2uiv(this.addr,e)}function m2(t,e){t.uniform3uiv(this.addr,e)}function g2(t,e){t.uniform4uiv(this.addr,e)}function v2(t,e,n){const i=this.cache,r=e.length,s=rh(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||My,s[o])}function _2(t,e,n){const i=this.cache,r=e.length,s=rh(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ey,s[o])}function x2(t,e,n){const i=this.cache,r=e.length,s=rh(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ty,s[o])}function y2(t,e,n){const i=this.cache,r=e.length,s=rh(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||wy,s[o])}function S2(t){switch(t){case 5126:return n2;case 35664:return i2;case 35665:return r2;case 35666:return s2;case 35674:return o2;case 35675:return a2;case 35676:return l2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return h2;case 35669:case 35673:return d2;case 5125:return f2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return y2}}class M2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=t2(n.type)}}class w2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=S2(n.type)}}class E2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function l0(t,e){t.seq.push(e),t.map[e.id]=e}function T2(t,e,n){const i=t.name,r=i.length;for(fd.lastIndex=0;;){const s=fd.exec(i),o=fd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){l0(n,c===void 0?new M2(a,t,e):new w2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new E2(a),l0(n,h)),n=h}}}class dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);T2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function c0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const A2=37297;let b2=0;function C2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function R2(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Da&&n===La?i="LinearDisplayP3ToLinearSRGB":e===La&&n===Da&&(i="LinearSRGBToLinearDisplayP3"),t){case Ki:case qa:return[i,"LinearTransferOETF"];case si:case th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function u0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+C2(t.getShaderSource(e),o)}else return r}function P2(t,e){const n=R2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function L2(t,e){let n;switch(e){case $x:n="Linear";break;case Xx:n="Reinhard";break;case Yx:n="Cineon";break;case qx:n="ACESFilmic";break;case Zx:n="AgX";break;case Qx:n="Neutral";break;case Kx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fl=new U;function D2(){et.getLuminanceCoefficients(Fl);const t=Fl.x.toFixed(4),e=Fl.y.toFixed(4),n=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function U2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function I2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $o(t){return t!==""}function h0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(t){return t.replace(F2,k2)}const O2=new Map;function k2(t,e){let n=Ge[e];if(n===void 0){const i=O2.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cf(n)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(t){return t.replace(z2,B2)}function B2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function p0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function H2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Tx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function V2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function W2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jp:e="ENVMAP_BLENDING_MULTIPLY";break;case Wx:e="ENVMAP_BLENDING_MIX";break;case jx:e="ENVMAP_BLENDING_ADD";break}return e}function j2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=H2(n),c=V2(n),u=G2(n),h=W2(n),d=j2(n),p=N2(n),m=U2(s),x=r.createProgram();let g,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter($o).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter($o).join(`
`),f.length>0&&(f+=`
`)):(g=[p0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),f=[p0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Hi?L2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,P2("linearToOutputTexel",n.outputColorSpace),D2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),o=Cf(o),o=h0(o,n),o=d0(o,n),a=Cf(a),a=h0(a,n),a=d0(a,n),o=f0(o),a=f0(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Af?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+g+o,S=_+f+a,R=c0(r,r.VERTEX_SHADER,v),C=c0(r,r.FRAGMENT_SHADER,S);r.attachShader(x,R),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(E){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(C).trim();let q=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,C);else{const K=u0(r,R,"vertex"),D=u0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+H+`
`+K+`
`+D)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||k==="")&&(z=!1);z&&(E.diagnostics={runnable:q,programLog:H,vertexShader:{log:B,prefix:g},fragmentShader:{log:k,prefix:f}})}r.deleteShader(R),r.deleteShader(C),P=new dc(r,x),X=I2(r,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let X;this.getAttributes=function(){return X===void 0&&A(this),X};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,A2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=b2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=C,this}let X2=0;class Y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new q2(e),n.set(e,i)),i}}class q2{constructor(e){this.id=X2++,this.code=e,this.usedTimes=0}}function K2(t,e,n,i,r,s,o){const a=new rm,l=new Y2,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,E,H,B,k){const q=B.fog,z=k.geometry,K=y.isMeshStandardMaterial?B.environment:null,D=(y.isMeshStandardMaterial?n:e).get(y.envMap||K),Y=D&&D.mapping===$a?D.image.height:null,J=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Me=re!==void 0?re.length:0;let Le=0;z.morphAttributes.position!==void 0&&(Le=1),z.morphAttributes.normal!==void 0&&(Le=2),z.morphAttributes.color!==void 0&&(Le=3);let j,ne,ue,he;if(J){const Nt=pn[J];j=Nt.vertexShader,ne=Nt.fragmentShader}else j=y.vertexShader,ne=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const De=t.getRenderTarget(),Re=k.isInstancedMesh===!0,Ve=k.isBatchedMesh===!0,Ze=!!y.map,fe=!!y.matcap,L=!!D,Ct=!!y.aoMap,Oe=!!y.lightMap,He=!!y.bumpMap,Pe=!!y.normalMap,rt=!!y.displacementMap,Ie=!!y.emissiveMap,b=!!y.metalnessMap,w=!!y.roughnessMap,G=y.anisotropy>0,ee=y.clearcoat>0,ie=y.dispersion>0,Q=y.iridescence>0,Te=y.sheen>0,ce=y.transmission>0,ye=G&&!!y.anisotropyMap,Ye=ee&&!!y.clearcoatMap,oe=ee&&!!y.clearcoatNormalMap,ge=ee&&!!y.clearcoatRoughnessMap,Ne=Q&&!!y.iridescenceMap,Ue=Q&&!!y.iridescenceThicknessMap,_e=Te&&!!y.sheenColorMap,Ke=Te&&!!y.sheenRoughnessMap,be=!!y.specularMap,tt=!!y.specularColorMap,N=!!y.specularIntensityMap,me=ce&&!!y.transmissionMap,$=ce&&!!y.thicknessMap,te=!!y.gradientMap,pe=!!y.alphaMap,ve=y.alphaTest>0,$e=!!y.alphaHash,Et=!!y.extensions;let Tt=Hi;y.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const Qe={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:ne,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&k._colorsTexture!==null,instancing:Re,instancingColor:Re&&k.instanceColor!==null,instancingMorph:Re&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:De===null?t.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Ki,alphaToCoverage:!!y.alphaToCoverage,map:Ze,matcap:fe,envMap:L,envMapMode:L&&D.mapping,envMapCubeUVHeight:Y,aoMap:Ct,lightMap:Oe,bumpMap:He,normalMap:Pe,displacementMap:p&&rt,emissiveMap:Ie,normalMapObjectSpace:Pe&&y.normalMapType===iy,normalMapTangentSpace:Pe&&y.normalMapType===ny,metalnessMap:b,roughnessMap:w,anisotropy:G,anisotropyMap:ye,clearcoat:ee,clearcoatMap:Ye,clearcoatNormalMap:oe,clearcoatRoughnessMap:ge,dispersion:ie,iridescence:Q,iridescenceMap:Ne,iridescenceThicknessMap:Ue,sheen:Te,sheenColorMap:_e,sheenRoughnessMap:Ke,specularMap:be,specularColorMap:tt,specularIntensityMap:N,transmission:ce,transmissionMap:me,thicknessMap:$,gradientMap:te,opaque:y.transparent===!1&&y.blending===Qr&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:ve,alphaHash:$e,combine:y.combine,mapUv:Ze&&g(y.map.channel),aoMapUv:Ct&&g(y.aoMap.channel),lightMapUv:Oe&&g(y.lightMap.channel),bumpMapUv:He&&g(y.bumpMap.channel),normalMapUv:Pe&&g(y.normalMap.channel),displacementMapUv:rt&&g(y.displacementMap.channel),emissiveMapUv:Ie&&g(y.emissiveMap.channel),metalnessMapUv:b&&g(y.metalnessMap.channel),roughnessMapUv:w&&g(y.roughnessMap.channel),anisotropyMapUv:ye&&g(y.anisotropyMap.channel),clearcoatMapUv:Ye&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&g(y.sheenRoughnessMap.channel),specularMapUv:be&&g(y.specularMap.channel),specularColorMapUv:tt&&g(y.specularColorMap.channel),specularIntensityMapUv:N&&g(y.specularIntensityMap.channel),transmissionMapUv:me&&g(y.transmissionMap.channel),thicknessMapUv:$&&g(y.thicknessMap.channel),alphaMapUv:pe&&g(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Pe||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Ze||pe),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ze&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)E.push(H),E.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(v(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const E=x[y.type];let H;if(E){const B=pn[E];H=ih.clone(B.uniforms)}else H=y.uniforms;return H}function C(y,E){let H;for(let B=0,k=u.length;B<k;B++){const q=u[B];if(q.cacheKey===E){H=q,++H.usedTimes;break}}return H===void 0&&(H=new $2(t,E,y,s),u.push(H)),H}function A(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function X(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:R,acquireProgram:C,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:X}}function Z2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Q2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function m0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function g0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,m,x,g){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=x,f.group=g),e++,f}function a(h,d,p,m,x,g){const f=o(h,d,p,m,x,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,m,x,g){const f=o(h,d,p,m,x,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||Q2),i.length>1&&i.sort(d||m0),r.length>1&&r.sort(d||m0)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function J2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new g0,t.set(i,[o])):r>=s.length?(o=new g0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function eb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new je};break;case"SpotLight":n={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function tb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nb=0;function ib(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rb(t){const e=new eb,n=tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new _t,o=new _t;function a(c){let u=0,h=0,d=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,_=0,v=0,S=0,R=0,C=0,A=0;c.sort(ib);for(let X=0,y=c.length;X<y;X++){const E=c[X],H=E.color,B=E.intensity,k=E.distance,q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=H.r*B,h+=H.g*B,d+=H.b*B;else if(E.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(E.sh.coefficients[z],B);A++}else if(E.isDirectionalLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const K=E.shadow,D=n.get(E);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=E.shadow.matrix,_++}i.directional[p]=z,p++}else if(E.isSpotLight){const z=e.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(H).multiplyScalar(B),z.distance=k,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,i.spot[x]=z;const K=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,K.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[x]=K.matrix,E.castShadow){const D=n.get(E);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=q,S++}x++}else if(E.isRectAreaLight){const z=e.get(E);z.color.copy(H).multiplyScalar(B),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),i.rectArea[g]=z,g++}else if(E.isPointLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const K=E.shadow,D=n.get(E);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=E.shadow.matrix,v++}i.point[m]=z,m++}else if(E.isHemisphereLight){const z=e.get(E);z.skyColor.copy(E.color).multiplyScalar(B),z.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[f]=z,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==f||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,P.directionalLength=p,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=f,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=A,i.version=nb++)}function l(c,u){let h=0,d=0,p=0,m=0,x=0;const g=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const v=c[f];if(v.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function v0(t){const e=new rb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new v0(t),e.set(r,[a])):s>=o.length?(a=new v0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ay extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class by extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
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
}`;function lb(t,e,n){let i=new um;const r=new Be,s=new Be,o=new Xe,a=new Ay({depthPacking:ty}),l=new by,c={},u=n.maxTextureSize,h={[Yi]:gn,[gn]:Yi,[Dn]:Dn},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:ob,fragmentShader:ab}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new St;m.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new an(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wp;let f=this.type;this.render=function(C,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const X=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Bi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=f!==gi&&this.type===gi,k=f===gi&&this.type!==gi;for(let q=0,z=C.length;q<z;q++){const K=C[q],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||B===!0||k===!0){const re=this.type!==gi?{minFilter:Vt,magFilter:Vt}:{};D.map!==null&&D.map.dispose(),D.map=new br(r.x,r.y,re),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let re=0;re<J;re++){const Me=D.getViewport(re);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),H.viewport(o),D.updateMatrices(K,re),i=D.getFrustum(),S(A,P,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===gi&&_(D,P),D.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(X,y,E)};function _(C,A){const P=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new br(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,P,p,x,null)}function v(C,A,P,X){let y=null;const E=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=y.uuid,B=A.uuid;let k=c[H];k===void 0&&(k={},c[H]=k);let q=k[B];q===void 0&&(q=y.clone(),k[B]=q,A.addEventListener("dispose",R)),y=q}if(y.visible=A.visible,y.wireframe=A.wireframe,X===gi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=t.properties.get(y);H.light=P}return y}function S(C,A,P,X,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===gi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const B=e.update(C),k=C.material;if(Array.isArray(k)){const q=B.groups;for(let z=0,K=q.length;z<K;z++){const D=q[z],Y=k[D.materialIndex];if(Y&&Y.visible){const J=v(C,Y,X,y);C.onBeforeShadow(t,C,A,P,B,J,D),t.renderBufferDirect(P,null,B,J,C,D),C.onAfterShadow(t,C,A,P,B,J,D)}}}else if(k.visible){const q=v(C,k,X,y);C.onBeforeShadow(t,C,A,P,B,q,null),t.renderBufferDirect(P,null,B,q,C,null),C.onAfterShadow(t,C,A,P,B,q,null)}}const H=C.children;for(let B=0,k=H.length;B<k;B++)S(H[B],A,P,X,y)}function R(C){C.target.removeEventListener("dispose",R);for(const P in c){const X=c[P],y=C.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}const cb={[Hc]:Vc,[Gc]:$c,[Wc]:Xc,[os]:jc,[Vc]:Hc,[$c]:Gc,[Xc]:Wc,[jc]:os};function ub(t){function e(){let N=!1;const me=new Xe;let $=null;const te=new Xe(0,0,0,0);return{setMask:function(pe){$!==pe&&!N&&(t.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){N=pe},setClear:function(pe,ve,$e,Et,Tt){Tt===!0&&(pe*=Et,ve*=Et,$e*=Et),me.set(pe,ve,$e,Et),te.equals(me)===!1&&(t.clearColor(pe,ve,$e,Et),te.copy(me))},reset:function(){N=!1,$=null,te.set(-1,0,0,0)}}}function n(){let N=!1,me=!1,$=null,te=null,pe=null;return{setReversed:function(ve){me=ve},setTest:function(ve){ve?ue(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ve){$!==ve&&!N&&(t.depthMask(ve),$=ve)},setFunc:function(ve){if(me&&(ve=cb[ve]),te!==ve){switch(ve){case Hc:t.depthFunc(t.NEVER);break;case Vc:t.depthFunc(t.ALWAYS);break;case Gc:t.depthFunc(t.LESS);break;case os:t.depthFunc(t.LEQUAL);break;case Wc:t.depthFunc(t.EQUAL);break;case jc:t.depthFunc(t.GEQUAL);break;case $c:t.depthFunc(t.GREATER);break;case Xc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ve}},setLocked:function(ve){N=ve},setClear:function(ve){pe!==ve&&(t.clearDepth(ve),pe=ve)},reset:function(){N=!1,$=null,te=null,pe=null}}}function i(){let N=!1,me=null,$=null,te=null,pe=null,ve=null,$e=null,Et=null,Tt=null;return{setTest:function(Qe){N||(Qe?ue(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(Qe){me!==Qe&&!N&&(t.stencilMask(Qe),me=Qe)},setFunc:function(Qe,Nt,kn){($!==Qe||te!==Nt||pe!==kn)&&(t.stencilFunc(Qe,Nt,kn),$=Qe,te=Nt,pe=kn)},setOp:function(Qe,Nt,kn){(ve!==Qe||$e!==Nt||Et!==kn)&&(t.stencilOp(Qe,Nt,kn),ve=Qe,$e=Nt,Et=kn)},setLocked:function(Qe){N=Qe},setClear:function(Qe){Tt!==Qe&&(t.clearStencil(Qe),Tt=Qe)},reset:function(){N=!1,me=null,$=null,te=null,pe=null,ve=null,$e=null,Et=null,Tt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,m=!1,x=null,g=null,f=null,_=null,v=null,S=null,R=null,C=new je(0,0,0),A=0,P=!1,X=null,y=null,E=null,H=null,B=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=z>=2);let D=null,Y={};const J=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Me=new Xe().fromArray(J),Le=new Xe().fromArray(re);function j(N,me,$,te){const pe=new Uint8Array(4),ve=t.createTexture();t.bindTexture(N,ve),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<$;$e++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(me+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ve}const ne={};ne[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(os),Oe(!1),He(yf),ue(t.CULL_FACE),L(Bi);function ue(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function he(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function De(N,me){return u[N]!==me?(t.bindFramebuffer(N,me),u[N]=me,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=me),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=me),!0):!1}function Re(N,me){let $=d,te=!1;if(N){$=h.get(me),$===void 0&&($=[],h.set(me,$));const pe=N.textures;if($.length!==pe.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,$e=pe.length;ve<$e;ve++)$[ve]=t.COLOR_ATTACHMENT0+ve;$.length=pe.length,te=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,te=!0);te&&t.drawBuffers($)}function Ve(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const Ze={[ur]:t.FUNC_ADD,[bx]:t.FUNC_SUBTRACT,[Cx]:t.FUNC_REVERSE_SUBTRACT};Ze[Rx]=t.MIN,Ze[Px]=t.MAX;const fe={[Lx]:t.ZERO,[Dx]:t.ONE,[Nx]:t.SRC_COLOR,[zc]:t.SRC_ALPHA,[zx]:t.SRC_ALPHA_SATURATE,[Ox]:t.DST_COLOR,[Ix]:t.DST_ALPHA,[Ux]:t.ONE_MINUS_SRC_COLOR,[Bc]:t.ONE_MINUS_SRC_ALPHA,[kx]:t.ONE_MINUS_DST_COLOR,[Fx]:t.ONE_MINUS_DST_ALPHA,[Bx]:t.CONSTANT_COLOR,[Hx]:t.ONE_MINUS_CONSTANT_COLOR,[Vx]:t.CONSTANT_ALPHA,[Gx]:t.ONE_MINUS_CONSTANT_ALPHA};function L(N,me,$,te,pe,ve,$e,Et,Tt,Qe){if(N===Bi){m===!0&&(he(t.BLEND),m=!1);return}if(m===!1&&(ue(t.BLEND),m=!0),N!==Ax){if(N!==x||Qe!==P){if((g!==ur||v!==ur)&&(t.blendEquation(t.FUNC_ADD),g=ur,v=ur),Qe)switch(N){case Qr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sf:t.blendFunc(t.ONE,t.ONE);break;case Mf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Qr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}f=null,_=null,S=null,R=null,C.set(0,0,0),A=0,x=N,P=Qe}return}pe=pe||me,ve=ve||$,$e=$e||te,(me!==g||pe!==v)&&(t.blendEquationSeparate(Ze[me],Ze[pe]),g=me,v=pe),($!==f||te!==_||ve!==S||$e!==R)&&(t.blendFuncSeparate(fe[$],fe[te],fe[ve],fe[$e]),f=$,_=te,S=ve,R=$e),(Et.equals(C)===!1||Tt!==A)&&(t.blendColor(Et.r,Et.g,Et.b,Tt),C.copy(Et),A=Tt),x=N,P=!1}function Ct(N,me){N.side===Dn?he(t.CULL_FACE):ue(t.CULL_FACE);let $=N.side===gn;me&&($=!$),Oe($),N.blending===Qr&&N.transparent===!1?L(Bi):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const te=N.stencilWrite;o.setTest(te),te&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){X!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),X=N)}function He(N){N!==wx?(ue(t.CULL_FACE),N!==y&&(N===yf?t.cullFace(t.BACK):N===Ex?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),y=N}function Pe(N){N!==E&&(q&&t.lineWidth(N),E=N)}function rt(N,me,$){N?(ue(t.POLYGON_OFFSET_FILL),(H!==me||B!==$)&&(t.polygonOffset(me,$),H=me,B=$)):he(t.POLYGON_OFFSET_FILL)}function Ie(N){N?ue(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function b(N){N===void 0&&(N=t.TEXTURE0+k-1),D!==N&&(t.activeTexture(N),D=N)}function w(N,me,$){$===void 0&&(D===null?$=t.TEXTURE0+k-1:$=D);let te=Y[$];te===void 0&&(te={type:void 0,texture:void 0},Y[$]=te),(te.type!==N||te.texture!==me)&&(D!==$&&(t.activeTexture($),D=$),t.bindTexture(N,me||ne[N]),te.type=N,te.texture=me)}function G(){const N=Y[D];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){Me.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Me.copy(N))}function _e(N){Le.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Le.copy(N))}function Ke(N,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let te=$.get(N);te===void 0&&(te=t.getUniformBlockIndex(me,N.name),$.set(N,te))}function be(N,me){const te=l.get(me).get(N);a.get(me)!==te&&(t.uniformBlockBinding(me,te,N.__bindingPointIndex),a.set(me,te))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,Y={},u={},h=new WeakMap,d=[],p=null,m=!1,x=null,g=null,f=null,_=null,v=null,S=null,R=null,C=new je(0,0,0),A=0,P=!1,X=null,y=null,E=null,H=null,B=null,Me.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:he,bindFramebuffer:De,drawBuffers:Re,useProgram:Ve,setBlending:L,setMaterial:Ct,setFlipSided:Oe,setCullFace:He,setLineWidth:Pe,setPolygonOffset:rt,setScissorTest:Ie,activeTexture:b,bindTexture:w,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:ge,texImage3D:Ne,updateUBOMapping:Ke,uniformBlockBinding:be,texStorage2D:Ye,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:ce,compressedTexSubImage3D:ye,scissor:Ue,viewport:_e,reset:tt}}function _0(t,e,n,i){const r=hb(i);switch(n){case Kp:return t*e;case Qp:return t*e;case Jp:return t*e*2;case Xa:return t*e/r.components*r.byteLength;case Qu:return t*e/r.components*r.byteLength;case Ya:return t*e*2/r.components*r.byteLength;case Ju:return t*e*2/r.components*r.byteLength;case Zp:return t*e*3/r.components*r.byteLength;case Mn:return t*e*4/r.components*r.byteLength;case eh:return t*e*4/r.components*r.byteLength;case ia:case ra:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sa:case oa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jc:case tu:return Math.max(t,16)*Math.max(e,8)/4;case Qc:case eu:return Math.max(t,8)*Math.max(e,8)/2;case nu:case iu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case au:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case uu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case pu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _u:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case aa:case xu:case yu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case em:case Su:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Mu:case wu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hb(t){switch(t){case Ei:case Xp:return{byteLength:1,components:1};case ho:case Yp:case _o:return{byteLength:2,components:1};case Ku:case Zu:return{byteLength:2,components:4};case Ar:case qu:case xi:return{byteLength:4,components:1};case qp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function db(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,w){return p?new OffscreenCanvas(b,w):Ia("canvas")}function x(b,w,G){let ee=1;const ie=Ie(b);if((ie.width>G||ie.height>G)&&(ee=G/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(ee*ie.width),Te=Math.floor(ee*ie.height);h===void 0&&(h=m(Q,Te));const ce=w?m(Q,Te):h;return ce.width=Q,ce.height=Te,ce.getContext("2d").drawImage(b,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Te+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function g(b){return b.generateMipmaps&&b.minFilter!==Vt&&b.minFilter!==on}function f(b){t.generateMipmap(b)}function _(b,w,G,ee,ie=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=w;if(w===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8)),w===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),w===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8)),w===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),w===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),G===t.UNSIGNED_INT&&(Q=t.RGB32UI),G===t.BYTE&&(Q=t.RGB8I),G===t.SHORT&&(Q=t.RGB16I),G===t.INT&&(Q=t.RGB32I)),w===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),G===t.UNSIGNED_INT&&(Q=t.RGBA32UI),G===t.BYTE&&(Q=t.RGBA8I),G===t.SHORT&&(Q=t.RGBA16I),G===t.INT&&(Q=t.RGBA32I)),w===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),w===t.RGBA){const Te=ie?Pa:et.getTransfer(ee);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=Te===ht?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(b,w){let G;return b?w===null||w===Ar||w===cs?G=t.DEPTH24_STENCIL8:w===xi?G=t.DEPTH32F_STENCIL8:w===ho&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ar||w===cs?G=t.DEPTH_COMPONENT24:w===xi?G=t.DEPTH_COMPONENT32F:w===ho&&(G=t.DEPTH_COMPONENT16),G}function S(b,w){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Vt&&b.minFilter!==on?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function R(b){const w=b.target;w.removeEventListener("dispose",R),A(w),w.isVideoTexture&&u.delete(w)}function C(b){const w=b.target;w.removeEventListener("dispose",C),X(w)}function A(b){const w=i.get(b);if(w.__webglInit===void 0)return;const G=b.source,ee=d.get(G);if(ee){const ie=ee[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(b),Object.keys(ee).length===0&&d.delete(G)}i.remove(b)}function P(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const G=b.source,ee=d.get(G);delete ee[w.__cacheKey],o.memory.textures--}function X(b){const w=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let ie=0;ie<w.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)t.deleteFramebuffer(w.__webglFramebuffer[ee]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=b.textures;for(let ee=0,ie=G.length;ee<ie;ee++){const Q=i.get(G[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(b)}let y=0;function E(){y=0}function H(){const b=y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),y+=1,b}function B(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function k(b,w){const G=i.get(b);if(b.isVideoTexture&&Pe(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(G,b,w);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+w)}function q(b,w){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Le(G,b,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+w)}function z(b,w){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Le(G,b,w);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+w)}function K(b,w){const G=i.get(b);if(b.version>0&&G.__version!==b.version){j(G,b,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+w)}const D={[Kc]:t.REPEAT,[pr]:t.CLAMP_TO_EDGE,[Zc]:t.MIRRORED_REPEAT},Y={[Vt]:t.NEAREST,[Jx]:t.NEAREST_MIPMAP_NEAREST,[jo]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[uc]:t.LINEAR_MIPMAP_NEAREST,[Oi]:t.LINEAR_MIPMAP_LINEAR},J={[ry]:t.NEVER,[uy]:t.ALWAYS,[sy]:t.LESS,[tm]:t.LEQUAL,[oy]:t.EQUAL,[cy]:t.GEQUAL,[ay]:t.GREATER,[ly]:t.NOTEQUAL};function re(b,w){if(w.type===xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===on||w.magFilter===uc||w.magFilter===jo||w.magFilter===Oi||w.minFilter===on||w.minFilter===uc||w.minFilter===jo||w.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,D[w.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,D[w.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,D[w.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Y[w.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,J[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Vt||w.minFilter!==jo&&w.minFilter!==Oi||w.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Me(b,w){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",R));const ee=w.source;let ie=d.get(ee);ie===void 0&&(ie={},d.set(ee,ie));const Q=B(w);if(Q!==b.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Q].usedTimes++;const Te=ie[b.__cacheKey];Te!==void 0&&(ie[b.__cacheKey].usedTimes--,Te.usedTimes===0&&P(w)),b.__cacheKey=Q,b.__webglTexture=ie[Q].texture}return G}function Le(b,w,G){let ee=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=Me(b,w),Q=w.source;n.bindTexture(ee,b.__webglTexture,t.TEXTURE0+G);const Te=i.get(Q);if(Q.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const ce=et.getPrimaries(et.workingColorSpace),ye=w.colorSpace===Gn?null:et.getPrimaries(w.colorSpace),Ye=w.colorSpace===Gn||ce===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let oe=x(w.image,!1,r.maxTextureSize);oe=rt(w,oe);const ge=s.convert(w.format,w.colorSpace),Ne=s.convert(w.type);let Ue=_(w.internalFormat,ge,Ne,w.colorSpace,w.isVideoTexture);re(ee,w);let _e;const Ke=w.mipmaps,be=w.isVideoTexture!==!0,tt=Te.__version===void 0||ie===!0,N=Q.dataReady,me=S(w,oe);if(w.isDepthTexture)Ue=v(w.format===us,w.type),tt&&(be?n.texStorage2D(t.TEXTURE_2D,1,Ue,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ue,oe.width,oe.height,0,ge,Ne,null));else if(w.isDataTexture)if(Ke.length>0){be&&tt&&n.texStorage2D(t.TEXTURE_2D,me,Ue,Ke[0].width,Ke[0].height);for(let $=0,te=Ke.length;$<te;$++)_e=Ke[$],be?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,ge,Ne,_e.data):n.texImage2D(t.TEXTURE_2D,$,Ue,_e.width,_e.height,0,ge,Ne,_e.data);w.generateMipmaps=!1}else be?(tt&&n.texStorage2D(t.TEXTURE_2D,me,Ue,oe.width,oe.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,Ne,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,oe.width,oe.height,0,ge,Ne,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){be&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ue,Ke[0].width,Ke[0].height,oe.depth);for(let $=0,te=Ke.length;$<te;$++)if(_e=Ke[$],w.format!==Mn)if(ge!==null)if(be){if(N)if(w.layerUpdates.size>0){const pe=_0(_e.width,_e.height,w.format,w.type);for(const ve of w.layerUpdates){const $e=_e.data.subarray(ve*pe/_e.data.BYTES_PER_ELEMENT,(ve+1)*pe/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ve,_e.width,_e.height,1,ge,$e,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,oe.depth,ge,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ue,_e.width,_e.height,oe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,oe.depth,ge,Ne,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ue,_e.width,_e.height,oe.depth,0,ge,Ne,_e.data)}else{be&&tt&&n.texStorage2D(t.TEXTURE_2D,me,Ue,Ke[0].width,Ke[0].height);for(let $=0,te=Ke.length;$<te;$++)_e=Ke[$],w.format!==Mn?ge!==null?be?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ue,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,ge,Ne,_e.data):n.texImage2D(t.TEXTURE_2D,$,Ue,_e.width,_e.height,0,ge,Ne,_e.data)}else if(w.isDataArrayTexture)if(be){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ue,oe.width,oe.height,oe.depth),N)if(w.layerUpdates.size>0){const $=_0(oe.width,oe.height,w.format,w.type);for(const te of w.layerUpdates){const pe=oe.data.subarray(te*$/oe.data.BYTES_PER_ELEMENT,(te+1)*$/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,ge,Ne,pe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ne,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,ge,Ne,oe.data);else if(w.isData3DTexture)be?(tt&&n.texStorage3D(t.TEXTURE_3D,me,Ue,oe.width,oe.height,oe.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ne,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,ge,Ne,oe.data);else if(w.isFramebufferTexture){if(tt)if(be)n.texStorage2D(t.TEXTURE_2D,me,Ue,oe.width,oe.height);else{let $=oe.width,te=oe.height;for(let pe=0;pe<me;pe++)n.texImage2D(t.TEXTURE_2D,pe,Ue,$,te,0,ge,Ne,null),$>>=1,te>>=1}}else if(Ke.length>0){if(be&&tt){const $=Ie(Ke[0]);n.texStorage2D(t.TEXTURE_2D,me,Ue,$.width,$.height)}for(let $=0,te=Ke.length;$<te;$++)_e=Ke[$],be?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ge,Ne,_e):n.texImage2D(t.TEXTURE_2D,$,Ue,ge,Ne,_e);w.generateMipmaps=!1}else if(be){if(tt){const $=Ie(oe);n.texStorage2D(t.TEXTURE_2D,me,Ue,$.width,$.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ne,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ue,ge,Ne,oe);g(w)&&f(ee),Te.__version=Q.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function j(b,w,G){if(w.image.length!==6)return;const ee=Me(b,w),ie=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+G);const Q=i.get(ie);if(ie.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const Te=et.getPrimaries(et.workingColorSpace),ce=w.colorSpace===Gn?null:et.getPrimaries(w.colorSpace),ye=w.colorSpace===Gn||Te===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!Ye&&!oe?ge[te]=x(w.image[te],!0,r.maxCubemapSize):ge[te]=oe?w.image[te].image:w.image[te],ge[te]=rt(w,ge[te]);const Ne=ge[0],Ue=s.convert(w.format,w.colorSpace),_e=s.convert(w.type),Ke=_(w.internalFormat,Ue,_e,w.colorSpace),be=w.isVideoTexture!==!0,tt=Q.__version===void 0||ee===!0,N=ie.dataReady;let me=S(w,Ne);re(t.TEXTURE_CUBE_MAP,w);let $;if(Ye){be&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ke,Ne.width,Ne.height);for(let te=0;te<6;te++){$=ge[te].mipmaps;for(let pe=0;pe<$.length;pe++){const ve=$[pe];w.format!==Mn?Ue!==null?be?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,ve.width,ve.height,Ue,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Ke,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,ve.width,ve.height,Ue,_e,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Ke,ve.width,ve.height,0,Ue,_e,ve.data)}}}else{if($=w.mipmaps,be&&tt){$.length>0&&me++;const te=Ie(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ke,te.width,te.height)}for(let te=0;te<6;te++)if(oe){be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,Ue,_e,ge[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,ge[te].width,ge[te].height,0,Ue,_e,ge[te].data);for(let pe=0;pe<$.length;pe++){const $e=$[pe].image[te].image;be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,$e.width,$e.height,Ue,_e,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Ke,$e.width,$e.height,0,Ue,_e,$e.data)}}else{be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,_e,ge[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,Ue,_e,ge[te]);for(let pe=0;pe<$.length;pe++){const ve=$[pe];be?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ue,_e,ve.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Ke,Ue,_e,ve.image[te])}}}g(w)&&f(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ne(b,w,G,ee,ie,Q){const Te=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),ye=_(G.internalFormat,Te,ce,G.colorSpace);if(!i.get(w).__hasExternalTextures){const oe=Math.max(1,w.width>>Q),ge=Math.max(1,w.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Q,ye,oe,ge,w.depth,0,Te,ce,null):n.texImage2D(ie,Q,ye,oe,ge,0,Te,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),He(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get(G).__webglTexture,0,Oe(w)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get(G).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(b,w,G){if(t.bindRenderbuffer(t.RENDERBUFFER,b),w.depthBuffer){const ee=w.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Q=v(w.stencilBuffer,ie),Te=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Oe(w);He(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Q,w.width,w.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Q,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,b)}else{const ee=w.textures;for(let ie=0;ie<ee.length;ie++){const Q=ee[ie],Te=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),ye=_(Q.internalFormat,Te,ce,Q.colorSpace),Ye=Oe(w);G&&He(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,ye,w.width,w.height):He(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,ye,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ye,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ie=Oe(w);if(w.depthTexture.format===Jr)He(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(w.depthTexture.format===us)He(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(b){const w=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const ee=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=ee}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");he(w.__webglFramebuffer,b)}else if(G){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=t.createRenderbuffer(),ue(w.__webglDepthbuffer[ee],b,!1);else{const ie=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ue(w.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(b,w,G){const ee=i.get(b);w!==void 0&&ne(ee.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&De(b)}function Ve(b){const w=b.texture,G=i.get(b),ee=i.get(w);b.addEventListener("dispose",C);const ie=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=w.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let ye=0;ye<w.mipmaps.length;ye++)G.__webglFramebuffer[ce][ye]=t.createFramebuffer()}else G.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)G.__webglFramebuffer[ce]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ce=0,ye=ie.length;ce<ye;ce++){const Ye=i.get(ie[ce]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&He(b)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const ye=ie[ce];G.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const Ye=s.convert(ye.format,ye.colorSpace),oe=s.convert(ye.type),ge=_(ye.internalFormat,Ye,oe,ye.colorSpace,b.isXRRenderTarget===!0),Ne=Oe(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ge,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(G.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),re(t.TEXTURE_CUBE_MAP,w);for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ne(G.__webglFramebuffer[ce][ye],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye);else ne(G.__webglFramebuffer[ce],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ce=0,ye=ie.length;ce<ye;ce++){const Ye=ie[ce],oe=i.get(Ye);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),re(t.TEXTURE_2D,Ye),ne(G.__webglFramebuffer,b,Ye,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),g(Ye)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ee.__webglTexture),re(ce,w),w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ne(G.__webglFramebuffer[ye],b,w,t.COLOR_ATTACHMENT0,ce,ye);else ne(G.__webglFramebuffer,b,w,t.COLOR_ATTACHMENT0,ce,0);g(w)&&f(ce),n.unbindTexture()}b.depthBuffer&&De(b)}function Ze(b){const w=b.textures;for(let G=0,ee=w.length;G<ee;G++){const ie=w[G];if(g(ie)){const Q=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(ie).__webglTexture;n.bindTexture(Q,Te),f(Q),n.unbindTexture()}}}const fe=[],L=[];function Ct(b){if(b.samples>0){if(He(b)===!1){const w=b.textures,G=b.width,ee=b.height;let ie=t.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(b),ce=w.length>1;if(ce)for(let ye=0;ye<w.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const Ye=i.get(w[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,G,ee,0,0,G,ee,ie,t.NEAREST),l===!0&&(fe.length=0,L.length=0,fe.push(t.COLOR_ATTACHMENT0+ye),b.depthBuffer&&b.resolveDepthBuffer===!1&&(fe.push(Q),L.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ye=0;ye<w.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const Ye=i.get(w[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const w=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Oe(b){return Math.min(r.maxSamples,b.samples)}function He(b){const w=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pe(b){const w=o.render.frame;u.get(b)!==w&&(u.set(b,w),b.update())}function rt(b,w){const G=b.colorSpace,ee=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==Ki&&G!==Gn&&(et.getTransfer(G)===ht?(ee!==Mn||ie!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=E,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Re,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=He}function Cy(t,e){function n(i,r=Gn){let s;const o=et.getTransfer(r);if(i===Ei)return t.UNSIGNED_BYTE;if(i===Ku)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xp)return t.BYTE;if(i===Yp)return t.SHORT;if(i===ho)return t.UNSIGNED_SHORT;if(i===qu)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===_o)return t.HALF_FLOAT;if(i===Kp)return t.ALPHA;if(i===Zp)return t.RGB;if(i===Mn)return t.RGBA;if(i===Qp)return t.LUMINANCE;if(i===Jp)return t.LUMINANCE_ALPHA;if(i===Jr)return t.DEPTH_COMPONENT;if(i===us)return t.DEPTH_STENCIL;if(i===Xa)return t.RED;if(i===Qu)return t.RED_INTEGER;if(i===Ya)return t.RG;if(i===Ju)return t.RG_INTEGER;if(i===eh)return t.RGBA_INTEGER;if(i===ia||i===ra||i===sa||i===oa)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qc||i===Jc||i===eu||i===tu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nu||i===iu||i===ru)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nu||i===iu)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ru)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===su||i===ou||i===au||i===lu||i===cu||i===uu||i===hu||i===du||i===fu||i===pu||i===mu||i===gu||i===vu||i===_u)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===su)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ou)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===au)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===du)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_u)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===xu||i===yu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===aa)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===em||i===Su||i===Mu||i===wu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Ry extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xs extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fb={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),f=this._getHandJoint(c,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`;class gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wt({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new an(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vb extends Dr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,m=null;const x=new gb,g=n.getContextAttributes();let f=null,_=null;const v=[],S=[],R=new Be;let C=null;const A=new Ln;A.layers.enable(1),A.viewport=new Xe;const P=new Ln;P.layers.enable(2),P.viewport=new Xe;const X=[A,P],y=new Ry;y.layers.enable(1),y.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=v[j];return ne===void 0&&(ne=new pd,v[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=v[j];return ne===void 0&&(ne=new pd,v[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=v[j];return ne===void 0&&(ne=new pd,v[j]=ne),ne.getHandSpace()};function B(j){const ne=S.indexOf(j.inputSource);if(ne===-1)return;const ue=v[ne];ue!==void 0&&(ue.update(j.inputSource,j.frame,c||o),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let j=0;j<v.length;j++){const ne=S[j];ne!==null&&(S[j]=null,v[j].disconnect(ne))}E=null,H=null,x.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,_=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new br(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,ue=null,he=null;g.depth&&(he=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=g.stencil?us:Jr,ue=g.stencil?cs:Ar);const De={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new br(d.textureWidth,d.textureHeight,{format:Mn,type:Ei,depthTexture:new dm(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(j){for(let ne=0;ne<j.removed.length;ne++){const ue=j.removed[ne],he=S.indexOf(ue);he>=0&&(S[he]=null,v[he].disconnect(ue))}for(let ne=0;ne<j.added.length;ne++){const ue=j.added[ne];let he=S.indexOf(ue);if(he===-1){for(let Re=0;Re<v.length;Re++)if(Re>=S.length){S.push(ue),he=Re;break}else if(S[Re]===null){S[Re]=ue,he=Re;break}if(he===-1)break}const De=v[he];De&&De.connect(ue)}}const z=new U,K=new U;function D(j,ne,ue){z.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(ue.matrixWorld);const he=z.distanceTo(K),De=ne.projectionMatrix.elements,Re=ue.projectionMatrix.elements,Ve=De[14]/(De[10]-1),Ze=De[14]/(De[10]+1),fe=(De[9]+1)/De[5],L=(De[9]-1)/De[5],Ct=(De[8]-1)/De[0],Oe=(Re[8]+1)/Re[0],He=Ve*Ct,Pe=Ve*Oe,rt=he/(-Ct+Oe),Ie=rt*-Ct;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ie),j.translateZ(rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),De[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const b=Ve+rt,w=Ze+rt,G=He-Ie,ee=Pe+(he-Ie),ie=fe*Ze/w*b,Q=L*Ze/w*b;j.projectionMatrix.makePerspective(G,ee,ie,Q,b,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Y(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ne=j.near,ue=j.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),y.near=P.near=A.near=ne,y.far=P.far=A.far=ue,(E!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,H=y.far);const he=j.parent,De=y.cameras;Y(y,he);for(let Re=0;Re<De.length;Re++)Y(De[Re],he);De.length===2?D(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),J(j,y,he)};function J(j,ne,ue){ue===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ua*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let re=null;function Me(j,ne){if(u=ne.getViewerPose(c||o),m=ne,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let he=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let Re=0;Re<ue.length;Re++){const Ve=ue[Re];let Ze=null;if(p!==null)Ze=p.getViewport(Ve);else{const L=h.getViewSubImage(d,Ve);Ze=L.viewport,Re===0&&(e.setRenderTargetTextures(_,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(_))}let fe=X[Re];fe===void 0&&(fe=new Ln,fe.layers.enable(Re),fe.viewport=new Xe,X[Re]=fe),fe.matrix.fromArray(Ve.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ve.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Re===0&&(y.matrix.copy(fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(fe)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Re=h.getDepthInformation(ue[0]);Re&&Re.isValid&&Re.texture&&x.init(e,Re,r.renderState)}}for(let ue=0;ue<v.length;ue++){const he=S[ue],De=v[ue];he!==null&&De!==void 0&&De.update(he,ne,c||o)}re&&re(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}const Le=new yy;Le.setAnimationLoop(Me),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}}const Hr=new Ti,_b=new _t;function xb(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,vy(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),x(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,_,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===gn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===gn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=e.get(f),v=_.envMap,S=_.envMapRotation;v&&(g.envMap.value=v,Hr.copy(S),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),g.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(Hr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=v*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(m(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",g));const R=v.program;i.updateUBOMapping(_,R);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function u(_){const v=h();_.__bindingPointIndex=v;const S=t.createBuffer(),R=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=r[_.id],S=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,A=S.length;C<A;C++){const P=Array.isArray(S[C])?S[C]:[S[C]];for(let X=0,y=P.length;X<y;X++){const E=P[X];if(p(E,C,X,R)===!0){const H=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let k=0;for(let q=0;q<B.length;q++){const z=B[q],K=x(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,H+k,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,S,R){const C=_.value,A=v+"_"+S;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const P=R[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return R[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function m(_){const v=_.uniforms;let S=0;const R=16;for(let A=0,P=v.length;A<P;A++){const X=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,E=X.length;y<E;y++){const H=X[y],B=Array.isArray(H.value)?H.value:[H.value];for(let k=0,q=B.length;k<q;k++){const z=B[k],K=x(z),D=S%R,Y=D%K.boundary,J=D+Y;S+=Y,J!==0&&R-J<K.storage&&(S+=R-J),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=K.storage}}}const C=S%R;return C>0&&(S+=R-C),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Py{constructor(e={}){const{canvas:n=dy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),m=new Int32Array(4);let x=null,g=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=Hi,this.toneMappingExposure=1;const v=this;let S=!1,R=0,C=0,A=null,P=-1,X=null;const y=new Xe,E=new Xe;let H=null;const B=new je(0);let k=0,q=n.width,z=n.height,K=1,D=null,Y=null;const J=new Xe(0,0,q,z),re=new Xe(0,0,q,z);let Me=!1;const Le=new um;let j=!1,ne=!1;const ue=new _t,he=new _t,De=new U,Re=new Xe,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function fe(){return A===null?K:1}let L=i;function Ct(T,I){return n.getContext(T,I)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yu}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",ve,!1),L===null){const I="webgl2";if(L=Ct(I,T),L===null)throw Ct(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Oe,He,Pe,rt,Ie,b,w,G,ee,ie,Q,Te,ce,ye,Ye,oe,ge,Ne,Ue,_e,Ke,be,tt,N;function me(){Oe=new PA(L),Oe.init(),be=new Cy(L,Oe),He=new EA(L,Oe,e,be),Pe=new ub(L),He.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),rt=new NA(L),Ie=new Z2,b=new db(L,Oe,Pe,Ie,He,be,rt),w=new AA(v),G=new RA(v),ee=new BE(L),tt=new MA(L,ee),ie=new LA(L,ee,rt,tt),Q=new IA(L,ie,ee,rt),Ue=new UA(L,He,b),oe=new TA(Ie),Te=new K2(v,w,G,Oe,He,tt,oe),ce=new xb(v,Ie),ye=new J2,Ye=new sb(Oe),Ne=new SA(v,w,G,Pe,Q,d,l),ge=new lb(v,Q,He),N=new yb(L,rt,He,Pe),_e=new wA(L,Oe,rt),Ke=new DA(L,Oe,rt),rt.programs=Te.programs,v.capabilities=He,v.extensions=Oe,v.properties=Ie,v.renderLists=ye,v.shadowMap=ge,v.state=Pe,v.info=rt}me();const $=new vb(v,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(q,z,!1))},this.getSize=function(T){return T.set(q,z)},this.setSize=function(T,I,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,z=I,n.width=Math.floor(T*K),n.height=Math.floor(I*K),V===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(q*K,z*K).floor()},this.setDrawingBufferSize=function(T,I,V){q=T,z=I,K=V,n.width=Math.floor(T*V),n.height=Math.floor(I*V),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,I,V,W){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,I,V,W),Pe.viewport(y.copy(J).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,I,V,W){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,I,V,W),Pe.scissor(E.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){Pe.setScissorTest(Me=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(T=!0,I=!0,V=!0){let W=0;if(T){let F=!1;if(A!==null){const ae=A.texture.format;F=ae===eh||ae===Ju||ae===Qu}if(F){const ae=A.texture.type,xe=ae===Ei||ae===Ar||ae===ho||ae===cs||ae===Ku||ae===Zu,we=Ne.getClearColor(),Ee=Ne.getClearAlpha(),Fe=we.r,ke=we.g,Ae=we.b;xe?(p[0]=Fe,p[1]=ke,p[2]=Ae,p[3]=Ee,L.clearBufferuiv(L.COLOR,0,p)):(m[0]=Fe,m[1]=ke,m[2]=Ae,m[3]=Ee,L.clearBufferiv(L.COLOR,0,m))}else W|=L.COLOR_BUFFER_BIT}I&&(W|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),ye.dispose(),Ye.dispose(),Ie.dispose(),w.dispose(),G.dispose(),Q.dispose(),tt.dispose(),N.dispose(),Te.dispose(),$.dispose(),$.removeEventListener("sessionstart",So),$.removeEventListener("sessionend",ms),hi.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=rt.autoReset,I=ge.enabled,V=ge.autoUpdate,W=ge.needsUpdate,F=ge.type;me(),rt.autoReset=T,ge.enabled=I,ge.autoUpdate=V,ge.needsUpdate=W,ge.type=F}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){const I=T.target;I.removeEventListener("dispose",$e),Et(I)}function Et(T){Tt(T),Ie.remove(T)}function Tt(T){const I=Ie.get(T).programs;I!==void 0&&(I.forEach(function(V){Te.releaseProgram(V)}),T.isShaderMaterial&&Te.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,V,W,F,ae){I===null&&(I=Ve);const xe=F.isMesh&&F.matrixWorld.determinant()<0,we=ze(T,I,V,W,F);Pe.setMaterial(W,xe);let Ee=V.index,Fe=1;if(W.wireframe===!0){if(Ee=ie.getWireframeAttribute(V),Ee===void 0)return;Fe=2}const ke=V.drawRange,Ae=V.attributes.position;let st=ke.start*Fe,pt=(ke.start+ke.count)*Fe;ae!==null&&(st=Math.max(st,ae.start*Fe),pt=Math.min(pt,(ae.start+ae.count)*Fe)),Ee!==null?(st=Math.max(st,0),pt=Math.min(pt,Ee.count)):Ae!=null&&(st=Math.max(st,0),pt=Math.min(pt,Ae.count));const At=pt-st;if(At<0||At===1/0)return;tt.setup(F,W,we,V,Ee);let An,nt=_e;if(Ee!==null&&(An=ee.get(Ee),nt=Ke,nt.setIndex(An)),F.isMesh)W.wireframe===!0?(Pe.setLineWidth(W.wireframeLinewidth*fe()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(F.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),Pe.setLineWidth(Ce*fe()),F.isLineSegments?nt.setMode(L.LINES):F.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else F.isPoints?nt.setMode(L.POINTS):F.isSprite&&nt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ce=F._multiDrawStarts,jt=F._multiDrawCounts,it=F._multiDrawCount,qn=Ee?ee.get(Ee).bytesPerElement:1,vs=Ie.get(W).currentProgram.getUniforms();for(let bn=0;bn<it;bn++)vs.setValue(L,"_gl_DrawID",bn),nt.render(Ce[bn]/qn,jt[bn])}else if(F.isInstancedMesh)nt.renderInstances(st,At,F.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,jt=Math.min(V.instanceCount,Ce);nt.renderInstances(st,At,jt)}else nt.render(st,At)};function Qe(T,I,V){T.transparent===!0&&T.side===Dn&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,Ir(T,I,V),T.side=Yi,T.needsUpdate=!0,Ir(T,I,V),T.side=Dn):Ir(T,I,V)}this.compile=function(T,I,V=null){V===null&&(V=T),g=Ye.get(V),g.init(I),_.push(g),V.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),T!==V&&T.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const W=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){const we=ae[xe];Qe(we,V,F),W.add(we)}else Qe(ae,V,F),W.add(ae)}),_.pop(),g=null,W},this.compileAsync=function(T,I,V=null){const W=this.compile(T,I,V);return new Promise(F=>{function ae(){if(W.forEach(function(xe){Ie.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){F(T);return}setTimeout(ae,10)}Oe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Nt=null;function kn(T){Nt&&Nt(T)}function So(){hi.stop()}function ms(){hi.start()}const hi=new yy;hi.setAnimationLoop(kn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){Nt=T,$.setAnimationLoop(T),T===null?hi.stop():hi.start()},$.addEventListener("sessionstart",So),$.addEventListener("sessionend",ms),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(I),I=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,A),g=Ye.get(T,_.length),g.init(I),_.push(g),he.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Le.setFromProjectionMatrix(he),ne=this.localClippingEnabled,j=oe.init(this.clippingPlanes,ne),x=ye.get(T,f.length),x.init(),f.push(x),$.enabled===!0&&$.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&gs(ae,I,-1/0,v.sortObjects)}gs(T,I,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(D,Y),Ze=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ze&&Ne.addToRenderList(x,T),this.info.render.frame++,j===!0&&oe.beginShadows();const V=g.state.shadowsArray;ge.render(V,T,I),j===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,F=x.transmissive;if(g.setupLights(),I.isArrayCamera){const ae=I.cameras;if(F.length>0)for(let xe=0,we=ae.length;xe<we;xe++){const Ee=ae[xe];Mo(W,F,T,Ee)}Ze&&Ne.render(T);for(let xe=0,we=ae.length;xe<we;xe++){const Ee=ae[xe];Ja(x,T,Ee,Ee.viewport)}}else F.length>0&&Mo(W,F,T,I),Ze&&Ne.render(T),Ja(x,T,I);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,I),tt.resetDefaultState(),P=-1,X=null,_.pop(),_.length>0?(g=_[_.length-1],j===!0&&oe.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function gs(T,I,V,W){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Le.intersectsSprite(T)){W&&Re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const xe=Q.update(T),we=T.material;we.visible&&x.push(T,xe,we,V,Re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Le.intersectsObject(T))){const xe=Q.update(T),we=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Re.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Re.copy(xe.boundingSphere.center)),Re.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(we)){const Ee=xe.groups;for(let Fe=0,ke=Ee.length;Fe<ke;Fe++){const Ae=Ee[Fe],st=we[Ae.materialIndex];st&&st.visible&&x.push(T,xe,st,V,Re.z,Ae)}}else we.visible&&x.push(T,xe,we,V,Re.z,null)}}const ae=T.children;for(let xe=0,we=ae.length;xe<we;xe++)gs(ae[xe],I,V,W)}function Ja(T,I,V,W){const F=T.opaque,ae=T.transmissive,xe=T.transparent;g.setupLightsView(V),j===!0&&oe.setGlobalState(v.clippingPlanes,V),W&&Pe.viewport(y.copy(W)),F.length>0&&Ur(F,I,V),ae.length>0&&Ur(ae,I,V),xe.length>0&&Ur(xe,I,V),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Mo(T,I,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new br(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?_o:Ei,minFilter:Oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ae=g.state.transmissionRenderTarget[W.id],xe=W.viewport||y;ae.setSize(xe.z,xe.w);const we=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(B),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&Ne.render(V);const Ee=v.toneMapping;v.toneMapping=Hi;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),j===!0&&oe.setGlobalState(v.clippingPlanes,W),Ur(T,V,W),b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ae=0,st=I.length;Ae<st;Ae++){const pt=I[Ae],At=pt.object,An=pt.geometry,nt=pt.material,Ce=pt.group;if(nt.side===Dn&&At.layers.test(W.layers)){const jt=nt.side;nt.side=gn,nt.needsUpdate=!0,wo(At,V,W,An,nt,Ce),nt.side=jt,nt.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae))}v.setRenderTarget(we),v.setClearColor(B,k),Fe!==void 0&&(W.viewport=Fe),v.toneMapping=Ee}function Ur(T,I,V){const W=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ae=T.length;F<ae;F++){const xe=T[F],we=xe.object,Ee=xe.geometry,Fe=W===null?xe.material:W,ke=xe.group;we.layers.test(V.layers)&&wo(we,I,V,Ee,Fe,ke)}}function wo(T,I,V,W,F,ae){T.onBeforeRender(v,I,V,W,F,ae),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,I,V,W,T,ae),F.transparent===!0&&F.side===Dn&&F.forceSinglePass===!1?(F.side=gn,F.needsUpdate=!0,v.renderBufferDirect(V,I,W,F,T,ae),F.side=Yi,F.needsUpdate=!0,v.renderBufferDirect(V,I,W,F,T,ae),F.side=Dn):v.renderBufferDirect(V,I,W,F,T,ae),T.onAfterRender(v,I,V,W,F,ae)}function Ir(T,I,V){I.isScene!==!0&&(I=Ve);const W=Ie.get(T),F=g.state.lights,ae=g.state.shadowsArray,xe=F.state.version,we=Te.getParameters(T,F.state,ae,I,V),Ee=Te.getProgramCacheKey(we);let Fe=W.programs;W.environment=T.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(T.isMeshStandardMaterial?G:w).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",$e),Fe=new Map,W.programs=Fe);let ke=Fe.get(Ee);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===xe)return le(T,we),ke}else we.uniforms=Te.getUniforms(T),T.onBeforeCompile(we,v),ke=Te.acquireProgram(we,Ee),Fe.set(Ee,ke),W.uniforms=we.uniforms;const Ae=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=oe.uniform),le(T,we),W.needsLights=ft(T),W.lightsStateVersion=xe,W.needsLights&&(Ae.ambientLightColor.value=F.state.ambient,Ae.lightProbe.value=F.state.probe,Ae.directionalLights.value=F.state.directional,Ae.directionalLightShadows.value=F.state.directionalShadow,Ae.spotLights.value=F.state.spot,Ae.spotLightShadows.value=F.state.spotShadow,Ae.rectAreaLights.value=F.state.rectArea,Ae.ltc_1.value=F.state.rectAreaLTC1,Ae.ltc_2.value=F.state.rectAreaLTC2,Ae.pointLights.value=F.state.point,Ae.pointLightShadows.value=F.state.pointShadow,Ae.hemisphereLights.value=F.state.hemi,Ae.directionalShadowMap.value=F.state.directionalShadowMap,Ae.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ae.spotShadowMap.value=F.state.spotShadowMap,Ae.spotLightMatrix.value=F.state.spotLightMatrix,Ae.spotLightMap.value=F.state.spotLightMap,Ae.pointShadowMap.value=F.state.pointShadowMap,Ae.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function O(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=dc.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function le(T,I){const V=Ie.get(T);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function ze(T,I,V,W,F){I.isScene!==!0&&(I=Ve),b.resetTextureUnits();const ae=I.fog,xe=W.isMeshStandardMaterial?I.environment:null,we=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ki,Ee=(W.isMeshStandardMaterial?G:w).get(W.envMap||xe),Fe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,pt=!!V.morphAttributes.color;let At=Hi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=v.toneMapping);const An=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nt=An!==void 0?An.length:0,Ce=Ie.get(W),jt=g.state.lights;if(j===!0&&(ne===!0||T!==X)){const zn=T===X&&W.id===P;oe.setState(W,T,zn)}let it=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==jt.state.version||Ce.outputColorSpace!==we||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==Ee||W.fog===!0&&Ce.fog!==ae||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==ke||Ce.morphTargets!==Ae||Ce.morphNormals!==st||Ce.morphColors!==pt||Ce.toneMapping!==At||Ce.morphTargetsCount!==nt)&&(it=!0):(it=!0,Ce.__version=W.version);let qn=Ce.currentProgram;it===!0&&(qn=Ir(W,I,F));let vs=!1,bn=!1,uh=!1;const Rt=qn.getUniforms(),Qi=Ce.uniforms;if(Pe.useProgram(qn.program)&&(vs=!0,bn=!0,uh=!0),W.id!==P&&(P=W.id,bn=!0),vs||X!==T){He.reverseDepthBuffer?(ue.copy(T.projectionMatrix),yE(ue),SE(ue),Rt.setValue(L,"projectionMatrix",ue)):Rt.setValue(L,"projectionMatrix",T.projectionMatrix),Rt.setValue(L,"viewMatrix",T.matrixWorldInverse);const zn=Rt.map.cameraPosition;zn!==void 0&&zn.setValue(L,De.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&Rt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Rt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,bn=!0,uh=!0)}if(F.isSkinnedMesh){Rt.setOptional(L,F,"bindMatrix"),Rt.setOptional(L,F,"bindMatrixInverse");const zn=F.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Rt.setValue(L,"boneTexture",zn.boneTexture,b))}F.isBatchedMesh&&(Rt.setOptional(L,F,"batchingTexture"),Rt.setValue(L,"batchingTexture",F._matricesTexture,b),Rt.setOptional(L,F,"batchingIdTexture"),Rt.setValue(L,"batchingIdTexture",F._indirectTexture,b),Rt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Rt.setValue(L,"batchingColorTexture",F._colorsTexture,b));const hh=V.morphAttributes;if((hh.position!==void 0||hh.normal!==void 0||hh.color!==void 0)&&Ue.update(F,V,qn),(bn||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,Rt.setValue(L,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qi.envMap.value=Ee,Qi.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&(Qi.envMapIntensity.value=I.environmentIntensity),bn&&(Rt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&lt(Qi,uh),ae&&W.fog===!0&&ce.refreshFogUniforms(Qi,ae),ce.refreshMaterialUniforms(Qi,W,K,z,g.state.transmissionRenderTarget[T.id]),dc.upload(L,O(Ce),Qi,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(dc.upload(L,O(Ce),Qi,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Rt.setValue(L,"center",F.center),Rt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(L,"normalMatrix",F.normalMatrix),Rt.setValue(L,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const zn=W.uniformsGroups;for(let dh=0,cS=zn.length;dh<cS;dh++){const _m=zn[dh];N.update(_m,qn),N.bind(_m,qn)}}return qn}function lt(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function ft(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,I,V){Ie.get(T.texture).__webglTexture=I,Ie.get(T.depthTexture).__webglTexture=V;const W=Ie.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const V=Ie.get(T);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,V=0){A=T,R=I,C=V;let W=!0,F=null,ae=!1,xe=!1;if(T){const Ee=Ie.get(T);if(Ee.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Ee.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Ee.__hasExternalTextures)b.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ae=T.depthTexture;if(Ee.__boundDepthTexture!==Ae){if(Ae!==null&&Ie.has(Ae)&&(T.width!==Ae.image.width||T.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);const ke=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?F=ke[I][V]:F=ke[I],ae=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?F=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?F=ke[V]:F=ke,y.copy(T.viewport),E.copy(T.scissor),H=T.scissorTest}else y.copy(J).multiplyScalar(K).floor(),E.copy(re).multiplyScalar(K).floor(),H=Me;if(Pe.bindFramebuffer(L.FRAMEBUFFER,F)&&W&&Pe.drawBuffers(T,F),Pe.viewport(y),Pe.scissor(E),Pe.setScissorTest(H),ae){const Ee=Ie.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,V)}else if(xe){const Ee=Ie.get(T.texture),Fe=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Fe)}P=-1},this.readRenderTargetPixels=function(T,I,V,W,F,ae,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){Pe.bindFramebuffer(L.FRAMEBUFFER,we);try{const Ee=T.texture,Fe=Ee.format,ke=Ee.type;if(!He.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-W&&V>=0&&V<=T.height-F&&L.readPixels(I,V,W,F,be.convert(Fe),be.convert(ke),ae)}finally{const Ee=A!==null?Ie.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,I,V,W,F,ae,xe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){const Ee=T.texture,Fe=Ee.format,ke=Ee.type;if(!He.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-W&&V>=0&&V<=T.height-F){Pe.bindFramebuffer(L.FRAMEBUFFER,we);const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(I,V,W,F,be.convert(Fe),be.convert(ke),0);const st=A!==null?Ie.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,st);const pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await xE(L,pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(Ae),L.deleteSync(pt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,V=0){T.isTexture!==!0&&(hc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(T.image.width*W),ae=Math.floor(T.image.height*W),xe=I!==null?I.x:0,we=I!==null?I.y:0;b.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,xe,we,F,ae),Pe.unbindTexture()},this.copyTextureToTexture=function(T,I,V=null,W=null,F=0){T.isTexture!==!0&&(hc("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],I=arguments[2],F=arguments[3]||0,V=null);let ae,xe,we,Ee,Fe,ke;V!==null?(ae=V.max.x-V.min.x,xe=V.max.y-V.min.y,we=V.min.x,Ee=V.min.y):(ae=T.image.width,xe=T.image.height,we=0,Ee=0),W!==null?(Fe=W.x,ke=W.y):(Fe=0,ke=0);const Ae=be.convert(I.format),st=be.convert(I.type);b.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const pt=L.getParameter(L.UNPACK_ROW_LENGTH),At=L.getParameter(L.UNPACK_IMAGE_HEIGHT),An=L.getParameter(L.UNPACK_SKIP_PIXELS),nt=L.getParameter(L.UNPACK_SKIP_ROWS),Ce=L.getParameter(L.UNPACK_SKIP_IMAGES),jt=T.isCompressedTexture?T.mipmaps[F]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,jt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Fe,ke,ae,xe,Ae,st,jt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Fe,ke,jt.width,jt.height,Ae,jt.data):L.texSubImage2D(L.TEXTURE_2D,F,Fe,ke,ae,xe,Ae,st,jt),L.pixelStorei(L.UNPACK_ROW_LENGTH,pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At),L.pixelStorei(L.UNPACK_SKIP_PIXELS,An),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce),F===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,I,V=null,W=null,F=0){T.isTexture!==!0&&(hc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],I=arguments[3],F=arguments[4]||0);let ae,xe,we,Ee,Fe,ke,Ae,st,pt;const At=T.isCompressedTexture?T.mipmaps[F]:T.image;V!==null?(ae=V.max.x-V.min.x,xe=V.max.y-V.min.y,we=V.max.z-V.min.z,Ee=V.min.x,Fe=V.min.y,ke=V.min.z):(ae=At.width,xe=At.height,we=At.depth,Ee=0,Fe=0,ke=0),W!==null?(Ae=W.x,st=W.y,pt=W.z):(Ae=0,st=0,pt=0);const An=be.convert(I.format),nt=be.convert(I.type);let Ce;if(I.isData3DTexture)b.setTexture3D(I,0),Ce=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)b.setTexture2DArray(I,0),Ce=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const jt=L.getParameter(L.UNPACK_ROW_LENGTH),it=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qn=L.getParameter(L.UNPACK_SKIP_PIXELS),vs=L.getParameter(L.UNPACK_SKIP_ROWS),bn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ce,F,Ae,st,pt,ae,xe,we,An,nt,At.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,F,Ae,st,pt,ae,xe,we,An,At.data):L.texSubImage3D(Ce,F,Ae,st,pt,ae,xe,we,An,nt,At),L.pixelStorei(L.UNPACK_ROW_LENGTH,jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,vs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bn),F===0&&I.generateMipmaps&&L.generateMipmap(Ce),Pe.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){R=0,C=0,A=null,Pe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===th?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===qa?"display-p3":"srgb"}}class Ly extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Dy{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Eu,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new U;class ki{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(e),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.transformDirection(e),this.setXYZ(n,un.x,un.y,un.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ai(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ai(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ai(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ai(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ft(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ki(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gi extends Qt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Vt,u=Vt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ny extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tu=new U,Au=new U,x0=new _t,Oo=new Ka,Ol=new Nr,md=new U,y0=new U;let Uy=class extends ln{constructor(e=new St,n=new Ny){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Tu.fromBufferAttribute(n,r-1),Au.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Tu.distanceTo(Au);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(r),Ol.radius+=s,e.ray.intersectsSphere(Ol)===!1)return;x0.copy(r).invert(),Oo.copy(e.ray).applyMatrix4(x0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const f=u.getX(x),_=u.getX(x+1),v=kl(this,e,Oo,l,f,_);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(m-1),g=u.getX(p),f=kl(this,e,Oo,l,x,g);f&&n.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const f=kl(this,e,Oo,l,x,x+1);f&&n.push(f)}if(this.isLineLoop){const x=kl(this,e,Oo,l,m-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function kl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Tu.fromBufferAttribute(o,r),Au.fromBufferAttribute(o,s),n.distanceSqToSegment(Tu,Au,md,y0)>i)return;md.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(md);if(!(l<e.near||l>e.far))return{distance:l,point:y0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const S0=new U,M0=new U;class Iy extends Uy{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)S0.fromBufferAttribute(n,r),M0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+S0.distanceTo(M0);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fy extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const w0=new _t,Rf=new Ka,zl=new Nr,Bl=new U;class sh extends ln{constructor(e=new St,n=new Fy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;w0.copy(r).invert(),Rf.copy(e.ray).applyMatrix4(w0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=d,x=p;m<x;m++){const g=c.getX(m);Bl.fromBufferAttribute(h,g),E0(Bl,g,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=d,x=p;m<x;m++)Bl.fromBufferAttribute(h,m),E0(Bl,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function E0(t,e,n,i,r,s,o){const a=Rf.distanceSqToPoint(t);if(a<n){const l=new U;Rf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}const Sb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Oy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,p;if(i&&(s=Ab(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let m=n;m<r;m+=n)h=t[m],d=t[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Fa(s,o,n,a,l,p,0),o}};function Oy(t,e,n,i,r){let s,o;if(r===Ob(t,e,n,i)>0)for(s=e;s<n;s+=i)o=T0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=T0(s,t[s],t[s+1],o);return o&&oh(o,o.next)&&(ka(o),o=o.next),o}function hs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(oh(n,n.next)||yt(n.prev,n,n.next)===0)){if(ka(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Fa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Lb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?wb(t,i,r,s):Mb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ka(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Eb(hs(t),e,n),Fa(t,e,n,i,r,s,2)):o===2&&Tb(t,e,n,i,r,s):Fa(hs(t),e,n,i,r,s,1);break}}}function Mb(t){const e=t.prev,n=t,i=t.next;if(yt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&Ys(r,a,s,l,o,c,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(yt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,f=Pf(p,m,e,n,i),_=Pf(x,g,e,n,i);let v=t.prevZ,S=t.nextZ;for(;v&&v.z>=f&&S&&S.z<=_;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Ys(a,u,l,h,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=x&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&Ys(a,u,l,h,c,d,S.x,S.y)&&yt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Ys(a,u,l,h,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=_;){if(S.x>=p&&S.x<=x&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&Ys(a,u,l,h,c,d,S.x,S.y)&&yt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Eb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!oh(r,s)&&ky(r,i,i.next,s)&&Oa(r,s)&&Oa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ka(i),ka(i.next),i=t=s),i=i.next}while(i!==t);return hs(i)}function Tb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ub(o,a)){let l=zy(o,a);o=hs(o,o.next),l=hs(l,l.next),Fa(o,e,n,i,r,s,0),Fa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Ab(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Oy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Nb(c));for(r.sort(bb),s=0;s<r.length;s++)n=Cb(r[s],n);return n}function bb(t,e){return t.x-e.x}function Cb(t,e){const n=Rb(t,e);if(!n)return e;const i=zy(n,t);return hs(i,i.next),hs(n,n.next)}function Rb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ys(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Oa(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&Pb(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function Pb(t,e){return yt(t.prev,t,e.prev)<0&&yt(e.next,t,t.next)<0}function Lb(t,e,n,i){let r=t;do r.z===0&&(r.z=Pf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Db(r)}function Db(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Pf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Nb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ys(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Ub(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Ib(t,e)&&(Oa(t,e)&&Oa(e,t)&&Fb(t,e)&&(yt(t.prev,t,e.prev)||yt(t,e.prev,e))||oh(t,e)&&yt(t.prev,t,t.next)>0&&yt(e.prev,e,e.next)>0)}function yt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function oh(t,e){return t.x===e.x&&t.y===e.y}function ky(t,e,n,i){const r=Vl(yt(t,e,n)),s=Vl(yt(t,e,i)),o=Vl(yt(n,i,t)),a=Vl(yt(n,i,e));return!!(r!==s&&o!==a||r===0&&Hl(t,n,e)||s===0&&Hl(t,i,e)||o===0&&Hl(n,t,i)||a===0&&Hl(n,e,i))}function Hl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Vl(t){return t>0?1:t<0?-1:0}function Ib(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ky(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Oa(t,e){return yt(t.prev,t,t.next)<0?yt(t,e,t.next)>=0&&yt(t,t.prev,e)>=0:yt(t,e,t.prev)<0||yt(t,t.next,e)<0}function Fb(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function zy(t,e){const n=new Lf(t.i,t.x,t.y),i=new Lf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function T0(t,e,n,i){const r=new Lf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ka(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Lf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ob(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Qa{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Qa.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];A0(e),b0(i,e);let o=e.length;n.forEach(A0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,b0(i,n[l]);const a=Sb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function A0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function b0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class By extends St{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new U,s=new U;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,p=h.count;for(let m=d,x=d+p;m<x;m+=3)for(let g=0;g<3;g++){const f=a.getX(m+g),_=a.getX(m+(g+1)%3);r.fromBufferAttribute(o,f),s.fromBufferAttribute(o,_),C0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),C0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new ut(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function C0(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}const Df={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Hy{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}}const Vy=new Hy;class ah{constructor(e){this.manager=e!==void 0?e:Vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ah.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gy extends ah{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Df.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ia("img");function l(){u(),Df.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class fm extends ah{constructor(e){super(e)}load(e,n,i,r){const s=new Qt,o=new Gy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Wy extends St{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class jy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=R0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=R0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function R0(){return performance.now()}class bu extends Dy{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class Cu{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Kt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const P0=new U,Gl=new U;class $y{constructor(e=new U,n=new U){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){P0.subVectors(e,this.start),Gl.subVectors(this.end,this.start);const i=Gl.dot(Gl);let s=Gl.dot(P0)/i;return n&&(s=Kt(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Xy extends Dr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yu);const Yy=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:qx,AddEquation:ur,AddOperation:jx,AdditiveBlending:Sf,AgXToneMapping:Zx,AlphaFormat:Kp,AlwaysCompare:uy,AlwaysDepth:Vc,AlwaysStencilFunc:Ef,ArrayCamera:Ry,BackSide:gn,BasicDepthPacking:ey,Box3:Zi,BoxGeometry:xo,BufferAttribute:Ft,BufferGeometry:St,ByteType:Xp,Cache:Df,Camera:lm,CineonToneMapping:Yx,ClampToEdgeWrapping:pr,Clock:jy,Color:je,ColorManagement:et,ConstantAlphaFactor:Vx,ConstantColorFactor:Bx,Controls:Xy,CubeCamera:_y,CubeReflectionMapping:as,CubeRefractionMapping:ls,CubeTexture:cm,CubeUVReflectionMapping:$a,CullFaceBack:yf,CullFaceFront:Ex,CullFaceNone:wx,CustomBlending:Ax,CustomToneMapping:Kx,Data3DTexture:my,DataArrayTexture:nh,DataTexture:Gi,DefaultLoadingManager:Vy,DepthFormat:Jr,DepthStencilFormat:us,DepthTexture:dm,DisplayP3ColorSpace:th,DoubleSide:Dn,DstAlphaFactor:Ix,DstColorFactor:Ox,DynamicDrawUsage:Tf,EqualCompare:oy,EqualDepth:Wc,EquirectangularReflectionMapping:Yc,EquirectangularRefractionMapping:qc,Euler:Ti,EventDispatcher:Dr,Float32BufferAttribute:ut,FloatType:xi,FrontSide:Yi,Frustum:um,GLSL3:Af,GreaterCompare:ay,GreaterDepth:$c,GreaterEqualCompare:cy,GreaterEqualDepth:jc,Group:Xs,HalfFloatType:_o,ImageLoader:Gy,ImageUtils:fy,InstancedBufferGeometry:Wy,InstancedInterleavedBuffer:bu,IntType:qu,InterleavedBuffer:Dy,InterleavedBufferAttribute:ki,KeepStencilOp:Wr,Layers:rm,LessCompare:sy,LessDepth:Gc,LessEqualCompare:tm,LessEqualDepth:os,Line:Uy,Line3:$y,LineBasicMaterial:Ny,LineSegments:Iy,LinearDisplayP3ColorSpace:qa,LinearFilter:on,LinearMipmapLinearFilter:Oi,LinearMipmapNearestFilter:uc,LinearSRGBColorSpace:Ki,LinearToneMapping:$x,LinearTransfer:Pa,Loader:ah,LoadingManager:Hy,LuminanceAlphaFormat:Jp,LuminanceFormat:Qp,MOUSE:wi,Material:ps,MathUtils:fo,Matrix3:We,Matrix4:_t,MaxEquation:Px,Mesh:an,MeshBasicMaterial:sm,MeshDepthMaterial:Ay,MeshDistanceMaterial:by,MinEquation:Rx,MirroredRepeatWrapping:Zc,MixOperation:Wx,MultiplyBlending:wf,MultiplyOperation:jp,NearestFilter:Vt,NearestMipmapLinearFilter:jo,NearestMipmapNearestFilter:Jx,NeutralToneMapping:Qx,NeverCompare:ry,NeverDepth:Hc,NoBlending:Bi,NoColorSpace:Gn,NoToneMapping:Hi,NormalBlending:Qr,NotEqualCompare:ly,NotEqualDepth:Xc,Object3D:ln,ObjectSpaceNormalMap:iy,OneFactor:Dx,OneMinusConstantAlphaFactor:Gx,OneMinusConstantColorFactor:Hx,OneMinusDstAlphaFactor:Fx,OneMinusDstColorFactor:kx,OneMinusSrcAlphaFactor:Bc,OneMinusSrcColorFactor:Ux,OrthographicCamera:Sy,P3Primaries:Da,PCFShadowMap:Wp,PCFSoftShadowMap:Tx,PMREMGenerator:bf,PerspectiveCamera:Ln,Plane:Ni,PlaneGeometry:Za,Points:sh,PointsMaterial:Fy,Quaternion:Cr,RED_GREEN_RGTC2_Format:Mu,RED_RGTC1_Format:em,REVISION:Yu,RGBADepthPacking:ty,RGBAFormat:Mn,RGBAIntegerFormat:eh,RGBA_ASTC_10x10_Format:gu,RGBA_ASTC_10x5_Format:fu,RGBA_ASTC_10x6_Format:pu,RGBA_ASTC_10x8_Format:mu,RGBA_ASTC_12x10_Format:vu,RGBA_ASTC_12x12_Format:_u,RGBA_ASTC_4x4_Format:su,RGBA_ASTC_5x4_Format:ou,RGBA_ASTC_5x5_Format:au,RGBA_ASTC_6x5_Format:lu,RGBA_ASTC_6x6_Format:cu,RGBA_ASTC_8x5_Format:uu,RGBA_ASTC_8x6_Format:hu,RGBA_ASTC_8x8_Format:du,RGBA_BPTC_Format:aa,RGBA_ETC2_EAC_Format:ru,RGBA_PVRTC_2BPPV1_Format:tu,RGBA_PVRTC_4BPPV1_Format:eu,RGBA_S3TC_DXT1_Format:ra,RGBA_S3TC_DXT3_Format:sa,RGBA_S3TC_DXT5_Format:oa,RGBFormat:Zp,RGB_BPTC_SIGNED_Format:xu,RGB_BPTC_UNSIGNED_Format:yu,RGB_ETC1_Format:nu,RGB_ETC2_Format:iu,RGB_PVRTC_2BPPV1_Format:Jc,RGB_PVRTC_4BPPV1_Format:Qc,RGB_S3TC_DXT1_Format:ia,RGFormat:Ya,RGIntegerFormat:Ju,Ray:Ka,Rec709Primaries:La,RedFormat:Xa,RedIntegerFormat:Qu,ReinhardToneMapping:Xx,RenderTarget:py,RepeatWrapping:Kc,ReverseSubtractEquation:Cx,SIGNED_RED_GREEN_RGTC2_Format:wu,SIGNED_RED_RGTC1_Format:Su,SRGBColorSpace:si,SRGBTransfer:ht,Scene:Ly,ShaderChunk:Ge,ShaderLib:pn,ShaderMaterial:Wt,ShapeUtils:Qa,ShortType:Yp,Source:im,Sphere:Nr,Spherical:Cu,SrcAlphaFactor:zc,SrcAlphaSaturateFactor:zx,SrcColorFactor:Nx,StaticDrawUsage:Eu,SubtractEquation:bx,SubtractiveBlending:Mf,TOUCH:Fi,TangentSpaceNormalMap:ny,Texture:Qt,TextureLoader:fm,Triangle:Wn,UVMapping:$p,Uint16BufferAttribute:om,Uint32BufferAttribute:am,UniformsLib:de,UniformsUtils:ih,UnsignedByteType:Ei,UnsignedInt248Type:cs,UnsignedInt5999Type:qp,UnsignedIntType:Ar,UnsignedShort4444Type:Ku,UnsignedShort5551Type:Zu,UnsignedShortType:ho,VSMShadowMap:gi,Vector2:Be,Vector3:U,Vector4:Xe,WebGLCoordinateSystem:yi,WebGLCubeRenderTarget:xy,WebGLRenderTarget:br,WebGLRenderer:Py,WebGLUtils:Cy,WebGPUCoordinateSystem:Na,WireframeGeometry:By,ZeroFactor:Lx,createCanvasElement:dy},Symbol.toStringTag,{value:"Module"})),Nf={rate:{unit:"mm/h",stops:[.1,.5,1,2,4,7,12,20,35,60]},accum:{unit:"mm",stops:[1,5,10,20,35,50,75,100,150,250]},temp:{unit:"°C",stops:[-15,-8,-3,0,4,8,12,16,20,26]}},Uf=["#7fb5d9","#4f93cf","#2f6fc0","#21a6a6","#47b04a","#c3d43a","#f5c22e","#f07c22","#de3a3a","#b0249e"],qy=["#7b4fb0","#4a5fc1","#3f8fd2","#4fb7d6","#5fc39a","#9ccf62","#e4d65a","#f2a64a","#e8683a","#b8312f"],L0={rate:100,accum:600},kb=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,zb=`
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
  }`,D0=t=>t.map(e=>new je(e));class Bb{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,doc:i,U:r});const s=i.grids.rain;this.box={west:s.west,east:s.east,south:s.south,north:s.north};const o=n.toX(s.west),a=n.toX(s.east),l=n.toZ(s.north),c=n.toZ(s.south),u=new St;u.setAttribute("position",new ut([o,0,l,a,0,l,o,0,c,a,0,c],3)),u.setAttribute("uv",new ut([0,0,1,0,0,1,1,1],2)),u.setIndex([0,2,1,1,2,3]),this.rainData=new Uint8Array(s.cols*s.rows*2),this.rainTex=new Gi(this.rainData,s.cols,s.rows,Ya),this.rainTex.magFilter=this.rainTex.minFilter=on,this.rainTex.needsUpdate=!0,this.metTex=new Gi(new Uint8Array(4),1,1,Mn),this.metTex.needsUpdate=!0,this.uniforms={uRain:{value:this.rainTex},uMet:{value:this.metTex},uMode:{value:0},uMax:{value:L0.rate},uOpacity:{value:.85},uHasRain:{value:0},uHasMet:{value:0},uStops:{value:Nf.rate.stops.slice()},uColors:{value:D0(Uf)}},this.mesh=new an(u,new Wt({vertexShader:kb,fragmentShader:zb,uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:Dn})),this.mesh.renderOrder=5,this.mesh.frustumCulled=!1,e.add(this.mesh),this.altitude=6,this.fill="rate",this.met=null,this.wind=new Ky(e,n,this.box)}setRain(e){const n=this.rainData,i=L0[this.fill==="accum"?"accum":"rate"];if(!e){this.uniforms.uHasRain.value=0;return}for(let r=0;r<e.length;r++){const s=e[r];Number.isNaN(s)?(n[r*2]=0,n[r*2+1]=0):(n[r*2]=Math.min(254,Math.round(254*Math.sqrt(Math.max(0,s)/i))),n[r*2+1]=255)}this.rainTex.needsUpdate=!0,this.uniforms.uHasRain.value=1,this.uniforms.uMax.value=i}setMet(e){if(this.met=e,!e){this.uniforms.uHasMet.value=0,this.wind.setField(null);return}const n=new Gi(e.data,e.grid.cols,e.grid.rows,Mn);n.magFilter=n.minFilter=on,n.needsUpdate=!0,this.metTex.dispose(),this.metTex=this.uniforms.uMet.value=n,this.uniforms.uHasMet.value=1,this.wind.setField(e)}setFill(e){if(this.fill=e,this.mesh.visible=e!=="off",e==="off")return;const n=Nf[e];this.uniforms.uMode.value=e==="temp"?2:e==="accum"?1:0,this.uniforms.uStops.value=n.stops.slice(),this.uniforms.uColors.value=D0(e==="temp"?qy:Uf)}setOpacity(e){this.uniforms.uOpacity.value=e}setAltitude(e){this.altitude=e}setWind(e){this.wind.setVisible(e)}update(e,n){const i=this.U.flat.value,r=this.U.exag.value,s=this.altitude*r*(1-i)+.04*i;this.mesh.position.y=s,this.wind.update(e,n,s+.03+.05*i)}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.rainTex.dispose(),this.metTex.dispose(),this.wind.dispose()}}const Hb=3500,Vb=8,Gb=(t,e)=>t[e+3]===0?null:[(t[e]-128)/4,(t[e+1]-128)/4],Wb=`
  attribute float alpha; varying float vA;
  void main() { vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,jb=`
  uniform vec3 uColor; uniform float uOpacity; varying float vA;
  void main() { if (vA < 0.01) discard; gl_FragColor = vec4(uColor, vA * uOpacity); }`;class Ky{constructor(e,n,i,{n:r=Hb,trail:s=Vb,color:o="#f4f6f8",scale:a=1,full:l=15,floor:c=.25,decode:u=Gb,onData:h=!1}={}){Object.assign(this,{scene:e,P:n,box:i,scale:a,full:l,decode:u,onData:h,floor:c}),this.n=r;const d=this.T=s;this.lon=new Float32Array(r),this.lat=new Float32Array(r),this.age=new Float32Array(r),this.life=new Float32Array(r),this.trail=new Float32Array(r*d*2),this.speed=new Float32Array(r),this.pos=new Float32Array(r*(d-1)*2*3),this.alpha=new Float32Array(r*(d-1)*2);const p=new St;p.setAttribute("position",new Ft(this.pos,3).setUsage(Tf)),p.setAttribute("alpha",new Ft(this.alpha,1).setUsage(Tf)),this.lines=new Iy(p,new Wt({vertexShader:Wb,fragmentShader:jb,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new je(o)},uOpacity:{value:.85}}})),this.lines.frustumCulled=!1,this.lines.renderOrder=6,this.lines.visible=!1,e.add(this.lines),this.field=null;for(let m=0;m<r;m++)this._spawn(m,!0)}setField(e){if(this.field=e,this.onData&&e){const n=e.grid,i=[];for(let r=0;r<n.cols*n.rows;r++)this.decode(e.data,r*4)&&i.push(r);this.cells=i}}setVisible(e){this.lines.visible=e}setFocus(e){this.focus=e}_wind(e,n){const i=this.field;if(!i)return null;const r=i.grid,s=Math.floor((e-r.west)/r.cell),o=Math.floor((r.north-n)/r.cell);return s<0||o<0||s>=r.cols||o>=r.rows?null:this.decode(i.data,(o*r.cols+s)*4)}_spawn(e,n=!1){var o,a;const i=this.box,r=this.T,s=(o=this.field)==null?void 0:o.grid;if((a=this.cells)!=null&&a.length&&s){const l=this.focus;for(let c=0;c<40;c++){const u=this.cells[Math.floor(Math.random()*this.cells.length)];if(this.lon[e]=s.west+(u%s.cols+Math.random())*s.cell,this.lat[e]=s.north-(Math.floor(u/s.cols)+Math.random())*s.cell,!l||Math.abs(this.lon[e]-l.lon)<l.dlon&&Math.abs(this.lat[e]-l.lat)<l.dlat)break}}else this.lon[e]=i.west+Math.random()*(i.east-i.west),this.lat[e]=i.south+Math.random()*(i.north-i.south);this.life[e]=60+Math.random()*90,this.age[e]=n?Math.random()*this.life[e]:0;for(let l=0;l<r;l++)this.trail[(e*r+l)*2]=this.lon[e],this.trail[(e*r+l)*2+1]=this.lat[e]}update(e,n,i){if(!this.lines.visible||!this.field){this.lines.visible&&this.alpha.fill(0);return}const r=this.scale*Math.min(n,2500)/250,s=this.P,o=this.trail,a=this.T;for(let c=0;c<this.n;c++){const u=this._wind(this.lon[c],this.lat[c]);if(this.age[c]+=1,!u||this.age[c]>this.life[c]){this._spawn(c);continue}const h=r*e;this.lon[c]+=u[0]*h/(111.32*Math.cos(this.lat[c]*Math.PI/180)),this.lat[c]+=u[1]*h/111.13,this.speed[c]=Math.hypot(u[0],u[1]),o.copyWithin((c*a+1)*2,c*a*2,(c*a+a-1)*2),o[c*a*2]=this.lon[c],o[c*a*2+1]=this.lat[c]}let l=0;for(let c=0;c<this.n;c++){const u=Math.min(1,this.age[c]/10,(this.life[c]-this.age[c])/10),h=Math.min(1,this.floor+this.speed[c]/this.full);for(let d=0;d<a-1;d++)for(const p of[d,d+1]){const m=(c*a+p)*2;this.pos[l*3]=s.toX(o[m]),this.pos[l*3+1]=i,this.pos[l*3+2]=s.toZ(o[m+1]),this.alpha[l]=u*h*(1-p/a),l++}}this.lines.geometry.attributes.position.needsUpdate=!0,this.lines.geometry.attributes.alpha.needsUpdate=!0}dispose(){this.scene.remove(this.lines),this.lines.geometry.dispose(),this.lines.material.dispose()}}const lh=["#4f9fe0","#f2cf3d","#f39431","#e2483a","#c42b7d","#8a3fb0","#4b237a"],Ru=["below high water","high water","2-year flood","5-year flood","10-year flood","25-year flood","50-year flood"],ua=256,$b=.25,If=60,Zy=.2,Xb=1;function Yb(t,e,n){const i=e[n*6+1];return i>0?t/i:NaN}function qb(t,e){const n=t/Math.max(e,Zy);return Math.min(4,.2*Math.min(n,1)+.45*Math.log2(Math.max(n,1)))}const Kb=`
  attribute float elev, reach, top; attribute vec2 side;
  uniform sampler2D uFlow; uniform float uExag, uFlat, uWallK;
  varying float vTop, vCat;
  void main() {
    vec4 f = texelFetch(uFlow, ivec2(int(mod(reach, ${ua}.0)), int(reach / ${ua}.0)), 0);
    float b = floor(f.r * 255.0 + 0.5);
    vCat = b > 254.5 ? -1.0 : floor(f.g * 255.0 + 0.5);
    vTop = top;
    float s = uWallK * f.b * 255.0 / ${If}.0;   // see wallUnits
    vec3 p = position;
    p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.01 + top * s * (1.0 - uFlat) + 0.05 * uFlat;
    p.xz += side * (top - 0.5) * s * ${$b} * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`,Zb=`
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
  }`;class Qb{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,reaches:i,U:r});const s=i.count,o=Math.ceil(s/ua);this.flowData=new Uint8Array(ua*o*4);for(let a=0;a<s;a++)this.flowData[a*4]=255;this.flow=new Gi(this.flowData,ua,o),this.flow.magFilter=this.flow.minFilter=Vt,this.flow.needsUpdate=!0,this.bytes=new Uint8Array(s).fill(255),this.wallK={value:1},this.opacity={value:1},this.whatIf={value:0},this.geometry=this._geometry(),this.mesh=new an(this.geometry,new Wt({vertexShader:Kb,fragmentShader:Zb,transparent:!0,depthWrite:!1,side:Dn,uniforms:{uFlow:{value:this.flow},uExag:r.exag,uFlat:r.flat,uWallK:this.wallK,uOpacity:this.opacity,uWhatIf:this.whatIf,uColors:{value:lh.map(a=>new je(a))}}})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,e.add(this.mesh)}_geometry(){const{offsets:e,owner:n,coords:i,paths:r}=this.reaches,s=this.P,o=i.length/2,a=new Float32Array(o*2*3),l=new Float32Array(o*2),c=new Float32Array(o*2),u=new Float32Array(o*2),h=new Float32Array(o*2*2),d=[];this.xz=new Float32Array(o*2);for(let m=0;m<o;m++)this.xz[m*2]=s.toX(i[m*2]),this.xz[m*2+1]=s.toZ(i[m*2+1]);for(let m=0;m<r;m++){const x=e[m],g=e[m+1];for(let f=x;f<g;f++){const _=Math.max(x,f-1),v=Math.min(g-1,f+1);let S=this.xz[v*2]-this.xz[_*2],R=this.xz[v*2+1]-this.xz[_*2+1];const C=Math.hypot(S,R)||1;S/=C,R/=C;for(let A=0;A<2;A++){const P=f*2+A;a[P*3]=this.xz[f*2],a[P*3+2]=this.xz[f*2+1],c[P]=n[m],u[P]=A,h[P*2]=-R,h[P*2+1]=S}if(f<g-1){const A=f*2;d.push(A,A+1,A+2,A+2,A+1,A+3)}}}const p=new St;return p.setAttribute("position",new Ft(a,3)),p.setAttribute("elev",new Ft(l,1)),p.setAttribute("reach",new Ft(c,1)),p.setAttribute("top",new Ft(u,1)),p.setAttribute("side",new Ft(h,2)),p.setIndex(d),p}drape(e){const{coords:n}=this.reaches,i=this.geometry.attributes.elev.array;for(let r=0;r<n.length/2;r++)i[r*2]=i[r*2+1]=e(n[r*2],n[r*2+1])??0;this.geometry.attributes.elev.needsUpdate=!0}setBaseline(e){const{count:n,thr:i}=this.reaches;this.base=new Float32Array(n),this.unflagged=new Uint8Array(n);for(let r=0;r<n;r++){const s=Bh(e[r]);this.base[r]=Number.isNaN(s)?NaN:s,this.unflagged[r]=i[r*6]<Xb||s>=i[r*6]?1:0}this.raw&&this.setFlows(this.raw)}setFlows(e){var s,o;const{count:n,thr:i}=this.reaches,r=this.flowData;this.raw=e,this.bytes=e??new Uint8Array(n).fill(255),this.counts=new Array(7).fill(0);for(let a=0;a<n;a++){const l=this.bytes[a],c=Bh(l),u=(s=this.base)==null?void 0:s[a],h=l===255||(o=this.unflagged)!=null&&o[a]?0:Lg(c,i,a);r[a*4]=u===void 0||Number.isNaN(u)?255:l,r[a*4+1]=h,r[a*4+2]=r[a*4]===255?0:Math.round(qb(c,u)*If),r[a*4]!==255&&this.counts[h]++}this.flow.needsUpdate=!0}update(e){this.wallK.value=fo.clamp(e*.02,.01,50)}setVisible(e){this.mesh.visible=e}setOpacity(e){this.opacity.value=e}pick(e,n,i,r,s,o=8){const{offsets:a,owner:l,paths:c}=this.reaches,u=this.geometry.attributes.elev.array,h=this.U,d=.001*h.exag.value*(1-h.flat.value),p=new U,m=(S,R)=>(p.set(this.xz[S*2],u[S*2]*d+.01+R,this.xz[S*2+1]).project(i),p.z<1?[(p.x+1)*r/2,(1-p.y)*s/2]:null);let x=null,g=o;const f=(S,R)=>{if(!S||!R)return 1/0;const C=R[0]-S[0],A=R[1]-S[1],P=C*C+A*A,X=P?Math.max(0,Math.min(1,((e-S[0])*C+(n-S[1])*A)/P)):0;return Math.hypot(e-S[0]-X*C,n-S[1]-X*A)};for(let S=0;S<c;S++){const R=l[S];if(this.bytes[R]===255||this.flowData[R*4]===255)continue;const A=(1-h.flat.value)*this.wallK.value*this.flowData[R*4+2]/If;let P=m(a[S],0),X=m(a[S],A);for(let y=a[S]+1;y<a[S+1];y++){const E=m(y,0),H=m(y,A),B=Math.min(f(P,E),f(X,H),f(P,X));B<g&&(g=B,x=R),P=E,X=H}}if(x===null)return null;const _=Bh(this.bytes[x]),v=Array.from(this.reaches.thr.subarray(x*6,x*6+6));return{reach:x,share:Yb(_,this.reaches.thr,x),rise:_/Math.max(this.base[x],Zy),base:this.base[x],unflagged:!!this.unflagged[x],name:this.reaches.names[this.reaches.name[x]]||"Unnamed stream",order:this.reaches.order[x],q:_,thr:v,cat:this.unflagged[x]?0:Lg(_,this.reaches.thr,x)}}dispose(){this.scene.remove(this.mesh),this.geometry.dispose(),this.mesh.material.dispose(),this.flow.dispose()}}const Jb="#ff4f7b",eC=`
  attribute float elev; uniform float uExag, uFlat;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.012 + 0.04 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`,tC="uniform vec3 uColor; uniform float uOpacity; void main() { gl_FragColor = vec4(uColor, uOpacity); }",nC=`
  attribute float elev; uniform float uExag, uFlat;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = 7.0;
  }`,iC=`uniform vec3 uColor; void main() {
    float r = length(gl_PointCoord - 0.5); if (r > 0.5) discard;
    gl_FragColor = vec4(mix(uColor, vec3(0.07), smoothstep(0.32, 0.4, r)), smoothstep(0.5, 0.44, r)); }`;function rC(t){const e=[];for(const n of t){const i=n.map(([r,s])=>new Be(r,s));Qa.isClockWise(i)||!e.length?e.push([i,[]]):e[e.length-1][1].push(i)}return e}class sC{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,U:i,elevAt:r});const s={uExag:i.exag,uFlat:i.flat,uColor:{value:new je(Jb)},uOpacity:{value:.8}};this.mat=new Wt({vertexShader:eC,fragmentShader:tC,uniforms:s,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-40,side:Dn}),this.dotMat=new Wt({vertexShader:nC,fragmentShader:iC,uniforms:s,transparent:!0,depthTest:!1}),this.mesh=new an(new St,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,this.dots=new sh(new St,this.dotMat),this.dots.frustumCulled=!1,this.dots.renderOrder=12,e.add(this.mesh,this.dots),this.visible=!0}set(e){const n=this.P,i=[],r=[],s=[],o=[],a=[];for(const[,,u]of(e==null?void 0:e.polys)??[]){for(const[d,p]of rC(u)){if(d.length<3)continue;const m=[d,...p].flat(),x=i.length/3;for(const g of m)i.push(n.toX(g.x),0,n.toZ(g.y)),r.push(this.elevAt(g.x,g.y)??0);for(const g of Qa.triangulateShape(d,p))s.push(x+g[0],x+g[1],x+g[2])}const h=u[0]??[];if(h.length){const d=h.reduce((m,x)=>m+x[0],0)/h.length,p=h.reduce((m,x)=>m+x[1],0)/h.length;o.push(n.toX(d),0,n.toZ(p)),a.push(this.elevAt(d,p)??0)}}const l=new St;l.setAttribute("position",new ut(i,3)),l.setAttribute("elev",new ut(r,1)),l.setIndex(s);const c=new St;c.setAttribute("position",new ut(o,3)),c.setAttribute("elev",new ut(a,1)),this.mesh.geometry.dispose(),this.dots.geometry.dispose(),this.mesh.geometry=l,this.dots.geometry=c}setVisible(e){this.visible=e,this.mesh.visible=this.dots.visible=e}dispose(){this.scene.remove(this.mesh,this.dots),this.mesh.geometry.dispose(),this.dots.geometry.dispose(),this.mat.dispose(),this.dotMat.dispose()}}class oC{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,grid:i,U:r}),this.currents=new Ky(e,n,i,{n:9e3,trail:16,color:"#ffffff",scale:12,full:.6,floor:.45,onData:!0,decode:(s,o)=>s[o+3]===0?null:[(s[o]-128)/25,(s[o+1]-128)/25]}),this.currents.setVisible(!0)}set(e){this.currents.setField(e?{data:e.data,grid:this.grid}:null)}setCurrents(e){this.currents.setVisible(e)}update(e,n,i){const r=this.U.flat.value,s=.004+.045*r;if(i){const o=this.P.fromZ(i.z),a=Math.max(.05,n*.9/111);this.currents.setFocus({lon:this.P.fromX(i.x),lat:o,dlon:a/Math.cos(o*Math.PI/180),dlat:a})}this.currents.update(e,n,s+.006+.01*r)}dispose(){this.currents.dispose()}}const za=[25,35,45,58,70,85],Ff=["#f2d64b","#f5a031","#ea5a2b","#d2245a","#9b1f9e","#4b1fa8"],aC=.44704;class lC{constructor(e,n,i){this.U=e,e.gustRect.value.set(n.toX(i.west),n.toZ(i.north),n.toX(i.east),n.toZ(i.south)),e.gustStops.value=za.map(r=>r*aC),e.gustColors.value=Ff.map(r=>new je(r)),this.grid=i,this.visible=!1,this.has=!1}set(e){var n;if(this.has=!!e,e){const i=this.grid.cols*this.grid.rows,r=new Uint8Array(i*2);for(let o=0;o<i;o++){const a=e.data[o*4];a!==255&&(r[o*2]=Math.min(255,Math.round(a*4)),r[o*2+1]=255)}const s=new Gi(r,this.grid.cols,this.grid.rows,Ya);s.magFilter=s.minFilter=on,s.needsUpdate=!0,(n=this.U.gust.value)==null||n.dispose(),this.U.gust.value=s}this._sync()}setVisible(e){this.visible=e,this._sync()}_sync(){this.U.gustOn.value=this.visible&&this.has?1:0}dispose(){var e;(e=this.U.gust.value)==null||e.dispose(),this.U.gust.value=null,this.U.gustOn.value=0}}const Qy="#ffb020",cC=`
  attribute float elev, size; uniform float uExag, uFlat, uDpr;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = size * uDpr;
  }`,uC=`uniform vec3 uColor; void main() {
    float r = length(gl_PointCoord - 0.5); if (r > 0.5) discard;
    gl_FragColor = vec4(mix(uColor, vec3(0.07), smoothstep(0.36, 0.44, r)), 0.92 * smoothstep(0.5, 0.45, r)); }`,N0=t=>Math.min(30,5+5*Math.log10(Math.max(1,t)));class hC{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,U:i,elevAt:r}),this.mat=new Wt({vertexShader:cC,fragmentShader:uC,transparent:!0,depthTest:!1,uniforms:{uExag:i.exag,uFlat:i.flat,uDpr:{value:Math.min(devicePixelRatio||1,2)},uColor:{value:new je(Qy)}}}),this.points=new sh(new St,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=13,e.add(this.points),this.rows=[]}set(e){this.rows=((e==null?void 0:e.out)??[]).slice().sort((o,a)=>o[3]-a[3]);const n=[],i=[],r=[];for(const[,o,a,l]of this.rows)n.push(this.P.toX(a),0,this.P.toZ(o)),i.push(this.elevAt(a,o)??0),r.push(N0(l));const s=new St;s.setAttribute("position",new ut(n,3)),s.setAttribute("elev",new ut(i,1)),s.setAttribute("size",new ut(r,1)),this.points.geometry.dispose(),this.points.geometry=s}pick(e,n,i,r,s){var u,h;const o=(u=this.points.geometry.attributes.elev)==null?void 0:u.array,a=(h=this.points.geometry.attributes.position)==null?void 0:h.array;if(!o)return null;const l=.001*this.U.exag.value*(1-this.U.flat.value),c=new U;for(let d=this.rows.length-1;d>=0;d--){if(c.set(a[d*3],o[d]*l+.03+.05*this.U.flat.value,a[d*3+2]).project(i),c.z>=1)continue;if(Math.hypot((c.x+1)*r/2-e,(1-c.y)*s/2-n)<=Math.max(5,N0(this.rows[d][3])/2+2))return this.rows[d]}return null}setVisible(e){this.points.visible=e}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.mat.dispose()}}const U0=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",hour:"numeric",minute:"2-digit"}),dC=t=>{const e=t/36e5;return e<1?`${Math.max(1,Math.round(e*60))} min`:e<48?`${Math.round(e)} h`:`${(e/24).toFixed(1)} days`};function fC({scene:t,layer:e,canvas:n,utilities:i}){const[r,s]=Z.useState(null),o=Z.useRef(0);if(Z.useEffect(()=>{if(!n)return;let x=null;const g=()=>{if(o.current=0,!x||!e.points.visible){s(null);return}const v=n.getBoundingClientRect(),S=e.pick(x.clientX-v.left,x.clientY-v.top,t.camera,v.width,v.height);s(S?{row:S,x:x.clientX,y:x.clientY}:null)},f=v=>{x=v.buttons?null:v,o.current||(o.current=setTimeout(g,90))},_=()=>{x=null,s(null)};return n.addEventListener("pointermove",f),n.addEventListener("pointerleave",_),()=>{n.removeEventListener("pointermove",f),n.removeEventListener("pointerleave",_),clearTimeout(o.current)}},[t,e,n]),!r)return null;const[a,,,l,c,u,h,d]=r.row,p=c??u,m=e.at;return M.jsxs("div",{className:"river-tip",style:{left:r.x,top:r.y},role:"tooltip",children:[M.jsxs("b",{children:[l.toLocaleString("en-US")," customer",l===1?"":"s"," out"]}),M.jsx("div",{className:"src",children:(i==null?void 0:i[a])??a}),h&&M.jsx("div",{className:"mono",children:h}),M.jsxs("div",{className:"mono",children:[c?"out since":"first recorded"," ",U0.format(p),m>p?` · ${dC(m-p)} by this hour`:""]}),d&&M.jsxs("div",{className:"mono",children:["utility's estimate for restoration: ",U0.format(d)]})]})}const Of={diamond:0,square:1,circle:2},pC=`
  attribute float elev, size, shape; attribute vec3 tint; uniform float uExag, uFlat, uDpr; varying vec3 vColor; varying float vShape;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    vColor = tint; vShape = shape;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = size * uDpr;
  }`,mC=`varying vec3 vColor; varying float vShape; void main() {
    vec2 q = abs(gl_PointCoord - 0.5);
    float r = vShape > 1.5 ? length(q) : vShape > 0.5 ? max(q.x, q.y) * 1.25 : q.x + q.y; if (r > 0.5) discard;
    gl_FragColor = vec4(mix(vColor, vec3(0.07), smoothstep(0.34, 0.42, r)), 0.95); }`;class Jy{constructor(e,n,i,r){Object.assign(this,{scene:e,P:n,U:i,elevAt:r}),this.mat=new Wt({vertexShader:pC,fragmentShader:mC,transparent:!0,depthTest:!1,uniforms:{uExag:i.exag,uFlat:i.flat,uDpr:{value:Math.min(devicePixelRatio||1,2)}}}),this.points=new sh(new St,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=13,e.add(this.points),this.items=[]}setItems(e){this.items=e;const n=[],i=[],r=[],s=[],o=[],a=new je;for(const c of e)n.push(this.P.toX(c.lon),0,this.P.toZ(c.lat)),i.push(this.elevAt(c.lon,c.lat)??0),r.push(c.size),s.push(c.shape),a.set(c.color),o.push(a.r,a.g,a.b);const l=new St;l.setAttribute("position",new ut(n,3)),l.setAttribute("elev",new ut(i,1)),l.setAttribute("size",new ut(r,1)),l.setAttribute("shape",new ut(s,1)),l.setAttribute("tint",new ut(o,3)),this.points.geometry.dispose(),this.points.geometry=l}pick(e,n,i,r,s){var u,h;const o=(u=this.points.geometry.attributes.elev)==null?void 0:u.array,a=(h=this.points.geometry.attributes.position)==null?void 0:h.array;if(!o)return null;const l=.001*this.U.exag.value*(1-this.U.flat.value),c=new U;for(let d=this.items.length-1;d>=0;d--)if(c.set(a[d*3],o[d]*l+.03+.05*this.U.flat.value,a[d*3+2]).project(i),!(c.z>=1)&&Math.hypot((c.x+1)*r/2-e,(1-c.y)*s/2-n)<=Math.max(5,this.items[d].size/2+2))return this.items[d];return null}setVisible(e){this.points.visible=e}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.mat.dispose()}}const hr={closure:"#ff4d4f",hazard:"#ff8c42",incident:"#f2f2ee",surface:"#7cc7ff"},eS="#5fd38d",kf={closure:"closed",hazard:"storm damage",incident:"crashes and incidents",surface:"slippery or snowy"},gd=Object.keys(hr),gC={closure:15,hazard:13,incident:10,surface:9};class vC extends Jy{set(e){const n=r=>gd.length-gd.indexOf(r[5]),i=((e==null?void 0:e.out)??[]).filter(r=>gd.includes(r[5])).sort((r,s)=>n(r)-n(s));this.setItems([...((e==null?void 0:e.passes)??[]).filter(r=>r.lat!=null&&!r.earlier).map(r=>({pass:r,lat:r.lat,lon:r.lon,size:12,shape:Of.square,color:r.closed?hr.closure:eS})),...i.map(r=>({row:r,lat:r[1],lon:r[2],size:gC[r[5]],shape:Of.diamond,color:hr[r[5]]}))])}}const zf={overflowing:"#b65cff"},_C={overflowing:"overflowing"};class xC extends Jy{set(e){const n=((e==null?void 0:e.out)??[]).filter(i=>zf[i[5]]);this.setItems(n.map(i=>({row:i,lat:i[1],lon:i[2],size:13,shape:Of.circle,color:zf[i[5]]})))}}const qs=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}),I0=t=>{const e=t/36e5;return e<1?`${Math.max(1,Math.round(e*60))} min`:e<48?`${Math.round(e)} h`:`${(e/24).toFixed(1)} days`},yC={wsdot:"WSDOT",drivebc:"DriveBC"};function F0({scene:t,layer:e,canvas:n,render:i}){const[r,s]=Z.useState(null),o=Z.useRef(0);return Z.useEffect(()=>{if(!n)return;let a=null;const l=()=>{if(o.current=0,!a||!e.points.visible){s(null);return}const h=n.getBoundingClientRect(),d=e.pick(a.clientX-h.left,a.clientY-h.top,t.camera,h.width,h.height);s(d?{it:d,x:a.clientX,y:a.clientY}:null)},c=h=>{a=h.buttons?null:h,o.current||(o.current=setTimeout(l,90))},u=()=>{a=null,s(null)};return n.addEventListener("pointermove",c),n.addEventListener("pointerleave",u),()=>{n.removeEventListener("pointermove",c),n.removeEventListener("pointerleave",u),clearTimeout(o.current)}},[t,e,n]),r?M.jsx("div",{className:"river-tip",style:{left:r.x,top:r.y},role:"tooltip",children:i(r.it,e)}):null}function SC({pass:t,row:e}){var l;if(t)return M.jsxs(M.Fragment,{children:[M.jsxs("b",{children:[t.name,t.closed?" · closed":""]}),M.jsxs("div",{className:"src",children:["WSDOT mountain pass · ",(l=t.ft)==null?void 0:l.toLocaleString("en-US")," ft",t.f!=null?` · ${t.f}°F`:""]}),t.road&&M.jsx("div",{className:"mono",children:t.road}),t.weather&&M.jsx("div",{className:"mono",children:t.weather}),[...new Set(t.restrict.filter(Boolean))].map(c=>M.jsx("div",{className:"mono",children:c},c)),t.closed&&t.closed_since&&M.jsxs("div",{className:"src",children:["closed since ",qs.format(t.closed_since)]}),t.updated&&M.jsxs("div",{className:"src",children:["reported ",qs.format(t.updated)]})]});const[n,,,,,i,,r,s,o,a]=e;return M.jsxs(M.Fragment,{children:[M.jsxs("b",{children:[r?`${r} · `:"",kf[i]]}),M.jsx("div",{className:"src",children:yC[n]??n}),M.jsx("div",{className:"mono",children:s}),M.jsx("div",{className:"src",children:o?`since ${qs.format(o)}`:`first recorded ${qs.format(a)}`})]})}function MC({row:t},e){const[,,,n,i,r,s,o,a]=t;return M.jsxs(M.Fragment,{children:[M.jsx("b",{children:n}),M.jsxs("div",{className:"src",children:[i," sewer outfall · ",_C[r]]}),r==="overflowing"&&s&&M.jsxs("div",{className:"mono",children:[o?"since":"recorded overflowing since"," ",qs.format(s),e.at>s&&!a?` · ${I0(e.at-s)} by this hour`:""]}),a&&M.jsxs("div",{className:"mono",children:["stopped ",qs.format(a)," after ",I0(a-s)]}),M.jsx("div",{className:"src",children:"real-time status, not yet reviewed by the utility"})]})}function ch(t){const e=[],n=new Set;for(const i of[...t].sort((r,s)=>s.priority-r.priority)){const r=[i.x-4,i.y-i.h/2,i.x+i.w,i.y+i.h/2];e.some(s=>!(r[2]<s[0]||r[0]>s[2]||r[3]<s[1]||r[1]>s[3]))||(n.add(i.id),e.push(r))}return n}function wC(t,e){return t.kind==="peak"?e<900:t.pop>=15e4?!0:t.pop>=4e4?e<1500:t.pop>=8e3?e<600:e<260}const EC=t=>t.kind==="peak"?6.5:Math.log10(Math.max(t.pop,10));class TC{constructor(e,n,i){Object.assign(this,{root:e,places:n,scene:i}),this.el=document.createElement("div"),this.el.className="place-layer",e.appendChild(this.el),this.items=n.map((r,s)=>({...r,id:s,x:i.P.toX(r.lon),z:i.P.toZ(r.lat),node:null,on:!1})),this.visible=!0,this._n=0}_node(e){if(!e.node){const n=document.createElement("div");n.className=`place ${e.kind}${e.pop>=15e4?" major":""}`;const i=document.createElement("span");i.textContent=e.kind==="peak"&&e.height?`${e.name} ${e.height.toLocaleString()} m`:e.name,n.append(document.createElement("i"),i),this.el.appendChild(n),e.node=n,e.w=14+i.textContent.length*(e.kind==="city"?6.6:6.1),e.h=16}return e.node}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=e.e,r=innerWidth,s=innerHeight,o=[];for(const l of this.items){if(!wC(l,n)){l.cand=!1;continue}const[c,u,h]=e.project(l.x,(l.elev??0)*i+.05,l.z);l.cand=h<1&&c>-40&&c<r+40&&u>-20&&u<s+20,l.cand&&(this._node(l),l.sx=c,l.sy=u,o.push({id:l.id,x:c,y:u,w:l.w,h:l.h,priority:EC(l)}))}const a=ch(o);for(const l of this.items){const c=l.cand&&a.has(l.id);c&&(l.node.style.transform=`translate(${Math.round(l.sx)}px, ${Math.round(l.sy)}px)`),c!==l.on&&l.node&&(l.node.style.opacity=c?1:0,l.on=c)}}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}function AC(t){return t.split(",")[0].split(/\s+(?:near|nr|at|hw|pp|on)\s+/i)[0].replace(/\s+\(.*$/,"").toLowerCase().replace(/\b[a-z]/g,n=>n.toUpperCase()).replace(/\bLk\b/,"Lake").replace(/\b(And|Of)\b/g,n=>n.toLowerCase())}function Pu(t,e,n="elev"){var o;const i=t[n]??[],r=i.findIndex(a=>a!==null);if(r<0||e<r)return null;let s=Math.min(e,i.length-1);for(;s>=0&&i[s]===null;)s--;return s<r?null:{elev:i[s],change:i[s]-i[r],at:s,latest:s<e,storage:((o=t.storage)==null?void 0:o[s])??null,first:r,key:n}}const fn=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),O0=t=>`${t>.005?"+":t<-.005?"−":"±"}${Math.abs(t).toFixed(1)} ft`;class Ba{constructor(e,n){Object.assign(this,{root:e,scene:n,file:this.constructor.file,kind:this.constructor.kind}),this.el=document.createElement("div"),this.el.className=`place-layer res-layer ${this.kind}`,e.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip",this.el.appendChild(this.tip),this.items=[],this.k=0,this.visible=!0,this._n=0}async load(e){const n=await fetch(`${e.base}${this.file}?u=${encodeURIComponent(e.updated)}`);if(!n.ok)return;const{sites:i}=await n.json();for(const s of this.items)s.node.remove();const r=this.scene.P;this.items=i.filter(s=>this.keep(s)).map((s,o)=>{const a=document.createElement("div");a.className=`res ${this.kind}`,a.innerHTML='<i></i><span class="n"></span><span class="v mono"></span>',a.addEventListener("pointerenter",()=>{this.hover=l,this._tip()}),a.addEventListener("pointerleave",()=>{this.hover===l&&(this.hover=null,this.tip.style.opacity=0)}),this.el.appendChild(a);const l=this.prepare({...s,id:o,short:AC(s.name),node:a,x:r.toX(s.lon),z:r.toZ(s.lat),on:!1});return a.querySelector(".n").textContent=l.short,l}),this.setHour(this.k)}setHour(e){this.k=e;for(const n of this.items){const i=n.now=Pu(n,e,n.key??"elev"),r=this.step(n);n.node.classList.toggle("up",!!i&&i.change>r),n.node.classList.toggle("down",!!i&&i.change<-r),n.node.classList.toggle("latest",!!(i!=null&&i.latest)),n.node.classList.toggle("stuck",!!n.stuck),n.node.querySelector(".v").textContent=n.stuck?"no live data":i?this.valueText(n,i):"—",n.w=22+(n.short.length+8)*6.1}this.hover&&this._tip()}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=innerWidth,r=innerHeight,s=[];for(const a of this.items){if(a.cand=!1,n>900||!a.now)continue;const[l,c,u]=e.project(a.x,e.elevAt(a.lon,a.lat)*e.e+.05,a.z);u<1&&l>-40&&l<i+40&&c>-20&&c<r+20&&(a.cand=!0,a.sx=l,a.sy=c,s.push({id:a.id,x:l,y:c,w:a.w,h:18,priority:(a.stuck?5:10)+Math.abs(a.now.change)/this.step(a)*.3}))}const o=ch(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}keep(){return!0}prepare(e){return e}step(){return .3}valueText(e,n){return O0(n.change)}tipBody(e,n){return(e.stuck?`<div class="warn">This feed has reported exactly ${n==null?void 0:n.elev.toFixed(2)} ft every hour of the window: a stuck or placeholder value, not a measurement.</div>`:"")+(e.stuck?"":n?`<div class="mono">${n.elev.toFixed(2)} ft (${fn(e.datum)}) · ${O0(n.change)} since the storm began${n.latest?" · latest reading":""}</div>`+(n.storage!==null?`<div class="mono">storage ${Math.round(n.storage).toLocaleString("en-US")} acre-ft</div>`:""):"<div>no reading yet</div>")}caption(e,n,i){return`${n.toFixed(1)} / ${i.toFixed(1)} ft · whole window · provisional`}_tip(){const e=this.hover,n=e==null?void 0:e.now;if(!e)return;const i=e[e.key??"elev"],r=i.map((h,d)=>[d,h]).filter(([,h])=>h!==null),s=Math.min(...r.map(h=>h[1])),o=Math.max(...r.map(h=>h[1])),a=i.length,l=h=>h/(a-1)*220,c=h=>44-(h-s)/Math.max(o-s,.1)*40,u=r.map(([h,d],p)=>`${p?"L":"M"}${l(h).toFixed(1)},${c(d).toFixed(1)}`).join("");this.tip.innerHTML=`<b>${fn(e.short)}</b><div class="sub">${fn(e.name)} · ${fn(e.source??e.src??"USGS")}</div>`+this.tipBody(e,n)+(r.length?`<svg width="220" height="48" aria-hidden="true"><path d="${u}" /><line x1="${l(this.k)}" x2="${l(this.k)}" y1="0" y2="48" /></svg><div class="sub mono">${this.caption(e,o,s)}</div>`:""),this.tip.style.transform=`translate(${Math.round(e.sx+12)}px, ${Math.round(e.sy+14)}px)`,this.tip.style.opacity=1}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}Kn(Ba,"file","rivers/reservoirs.json"),Kn(Ba,"kind","");const Xo=["minor","moderate","major"];function bC(t,e){const n=t.obs[e],i=t.pred[e];if(n!=null)return{level:n,pred:i,surge:i==null?null:n-i,type:"obs"};let r=-1;for(let s=t.obs.length-1;s>=0;s--)if(t.obs[s]!==null){r=s;break}return e>r&&i!==null&&i!==void 0?{level:i,pred:i,surge:null,type:"pred"}:null}const CC=(t,e)=>{let n=null;for(const i of Xo)t.flood[i]!==void 0&&e>=t.flood[i]&&(n=i);return n},k0=t=>`${t>=.05?"+":t<=-.05?"−":"±"}${Math.abs(t).toFixed(1)}`;class RC{constructor(e,n){Object.assign(this,{root:e,scene:n}),this.el=document.createElement("div"),this.el.className="place-layer res-layer",e.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip gauge-tip",this.el.appendChild(this.tip),this.items=[],this.k=0,this.visible=!0,this._n=0,this.maxSurge=null}async load(e){const n=await fetch(`${e.base}sea/tides.json?u=${encodeURIComponent(e.updated)}`);if(!n.ok)return;const{sites:i}=await n.json();for(const s of this.items)s.node.remove();const r=this.scene.P;this.items=i.map((s,o)=>{const a=document.createElement("div");a.className="gauge tide",a.innerHTML='<i></i><span class="n"></span><span class="v mono"></span>';const l={...s,id:o,node:a,x:r.toX(s.lon),z:r.toZ(s.lat),on:!1};return a.addEventListener("pointerenter",()=>{this.hover=l,this._tip()}),a.addEventListener("pointerleave",()=>{this.hover===l&&(this.hover=null,this.tip.style.opacity=0)}),a.querySelector(".n").textContent=s.name.split(",")[0],this.el.appendChild(a),l}),this.setHour(this.k)}setHour(e){this.k=e,this.maxSurge=null;for(const n of this.items){const i=n.value=bC(n,e),r=n.cat=i?CC(n,i.level):null;(i==null?void 0:i.surge)!==null&&(i==null?void 0:i.surge)!==void 0&&(!this.maxSurge||i.surge>this.maxSurge.surge)&&(this.maxSurge={surge:i.surge,name:n.name}),n.node.dataset.cat=r??"normal",n.node.classList.toggle("fc",(i==null?void 0:i.type)==="pred"),n.node.querySelector(".v").textContent=i?`${i.level.toFixed(1)} ft${i.surge!==null?` · surge ${k0(i.surge)}`:""}`:"—",n.w=22+(n.node.querySelector(".n").textContent.length+20)*6}this.hover&&this._tip()}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=innerWidth,r=innerHeight,s=[];for(const a of this.items){if(a.cand=!1,!a.value||n>1500)continue;const[l,c,u]=e.project(a.x,.05,a.z);u<1&&l>-40&&l<i+40&&c>-20&&c<r+20&&(a.cand=!0,a.sx=l,a.sy=c,s.push({id:a.id,x:l,y:c,w:a.w,h:18,priority:25+(a.cat?10*(Xo.indexOf(a.cat)+1):0)+Math.abs(a.value.surge??0)}))}const o=ch(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}_tip(){const e=this.hover;if(!e)return;const n=e.value,i=e.pred.length,r=[...e.obs,...e.pred].filter(h=>h!==null),s=Math.min(...r),o=Math.max(...r,e.flood.minor??-1/0),a=h=>h/(i-1)*220,l=h=>50-(h-s)/Math.max(o-s,.5)*46,c=h=>h.map((d,p)=>d===null?null:[p,d]).filter(Boolean).map(([d,p],m)=>`${m?"L":"M"}${a(d).toFixed(1)},${l(p).toFixed(1)}`).join(""),u=Xo.filter(h=>e.flood[h]!==void 0&&e.flood[h]<=o+.01).map(h=>`<line class="cat" stroke="${{minor:"#f39431",moderate:"#e2483a",major:"#b03fd0"}[h]}" x1="0" x2="220" y1="${l(e.flood[h]).toFixed(1)}" y2="${l(e.flood[h]).toFixed(1)}" />`).join("");this.tip.innerHTML=`<b>${fn(e.name)}</b><div class="sub">NOAA tide gauge ${fn(e.id)} · ft above MLLW</div>`+(n?`<div class="mono">${n.type==="obs"?"observed":"predicted tide"} ${n.level.toFixed(2)} ft`+(n.type==="obs"&&n.pred!==null?` · predicted ${n.pred.toFixed(2)} · surge ${k0(n.surge)} ft`:"")+"</div>":"<div>no reading for this hour</div>")+`<div class="cat-line">${e.cat?`coastal flooding: ${e.cat}`:"below coastal flood levels"}</div>`+(Xo.some(h=>e.flood[h]!==void 0)?`<div class="sub mono">${Xo.filter(h=>e.flood[h]!==void 0).map(h=>`${h} ${e.flood[h]}`).join(" · ")} ft (${fn(e.flood.source??"")})</div>`:'<div class="sub">no flood levels set for this station</div>')+`<svg width="220" height="54" aria-hidden="true">${u}<path class="fc" d="${c(e.pred)}" /><path d="${c(e.obs)}" /><line x1="${a(this.k)}" x2="${a(this.k)}" y1="0" y2="54" /></svg><div class="sub">solid: observed · dashed: predicted tide</div>`,this.tip.style.transform=`translate(${Math.round(Math.min(e.sx+12,innerWidth-300))}px, ${Math.round(Math.min(e.sy+14,innerHeight-240))}px)`,this.tip.style.opacity=1}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}const Wl=t=>t>=100?Math.round(t).toLocaleString("en-US"):t>=1?t.toFixed(1):t.toFixed(2),PC=35.3147;function LC({scene:t,layer:e,canvas:n}){const[i,r]=Z.useState(null),s=Z.useRef(0);return Z.useEffect(()=>{if(!n)return;let o=null;const a=()=>{if(s.current=0,!o||!e.mesh.visible){r(null);return}const u=n.getBoundingClientRect(),h=e.pick(o.clientX-u.left,o.clientY-u.top,t.camera,u.width,u.height);r(h?{...h,x:o.clientX,y:o.clientY}:null)},l=u=>{o=u.buttons?null:u,s.current||(s.current=setTimeout(a,90))},c=()=>{o=null,r(null)};return n.addEventListener("pointermove",l),n.addEventListener("pointerleave",c),()=>{n.removeEventListener("pointermove",l),n.removeEventListener("pointerleave",c),clearTimeout(s.current)}},[t,e,n]),i?M.jsxs("div",{className:"river-tip",style:{left:i.x,top:i.y},role:"tooltip",children:[M.jsx("b",{children:i.name}),e.label&&M.jsx("div",{className:"src",children:e.label}),M.jsxs("div",{className:"mono",children:[Wl(i.q)," m³/s · ",Wl(i.q*PC)," cfs"]}),Number.isFinite(i.rise)&&M.jsxs("div",{className:"mono",children:[i.rise>=1?`${i.rise.toFixed(1)}×`:`${Math.round(i.rise*100)}% of`," its flow before the storm (",Wl(i.base)," m³/s)"]}),Number.isFinite(i.share)&&M.jsxs("div",{className:"mono",children:[Math.round(i.share*100),"% of its 2-year flood flow"]}),M.jsxs("div",{className:"cat",children:[M.jsx("i",{style:{background:lh[i.cat]}}),i.unflagged?"flood thresholds not meaningful here (tiny, or already exceeded before the storm); not flagged":i.cat?`at or above the ${Ru[i.cat]}`:"below the high-water flow"]}),M.jsx("table",{className:"mono",children:M.jsx("tbody",{children:i.thr.map((o,a)=>o>0&&M.jsxs("tr",{className:i.cat>a?"hit":"",children:[M.jsx("td",{children:Zw[a]}),M.jsxs("td",{children:[Wl(o)," m³/s"]})]},a))})})]}):null}const io=["action","minor","moderate","major"],DC={action:"action stage",minor:"minor flood",moderate:"moderate flood",major:"major flood"},Bf={normal:"#6fb4e8",action:"#f2cf3d",minor:"#f39431",moderate:"#e2483a",major:"#b03fd0"};function NC(t,e){let n=null;for(const i of io)t.cats[i]!==void 0&&e>=t.cats[i]&&(n=i);return n}function UC(t,e,n=!0){if(t.obs[e]!==null&&t.obs[e]!==void 0)return{stage:t.obs[e],type:"obs"};let i=-1;for(let r=t.obs.length-1;r>=0;r--)if(t.obs[r]!==null){i=r;break}return e<i?null:n&&t.fc[e]!==null&&t.fc[e]!==void 0?{stage:t.fc[e],type:"fc"}:i>=0&&e-i<=2?{stage:t.obs[i],type:"obs",latest:!0}:null}function IC(t,e){let n=null,i=null;for(const[r,s]of t.impacts)e>=r?n={stage:r,text:s}:i||(i={stage:r,text:s});return{now:n,next:i}}class FC{constructor(e,n){Object.assign(this,{root:e,scene:n}),this.el=document.createElement("div"),this.el.className="place-layer res-layer",e.appendChild(this.el),this.tip=document.createElement("div"),this.tip.className="res-tip gauge-tip",this.el.appendChild(this.tip),this.items=[],this.k=0,this.whatIf=!0,this.visible=!0,this._n=0,this.counts={}}async load(e){const n=await fetch(`${e.base}rivers/gauges.json?u=${encodeURIComponent(e.updated)}`);if(!n.ok)return;const{sites:i}=await n.json();for(const s of this.items)s.node.remove();const r=this.scene.P;this.items=i.map((s,o)=>{const a=document.createElement("div");a.className="gauge",a.innerHTML='<i></i><span class="n"></span><span class="v mono"></span>';const l={...s,id:o,node:a,x:r.toX(s.lon),z:r.toZ(s.lat),on:!1};return a.addEventListener("pointerenter",()=>{this.hover=l,this._tip()}),a.addEventListener("pointerleave",()=>{this.hover===l&&(this.hover=null,this.tip.style.opacity=0)}),a.querySelector(".n").textContent=s.name.replace(/\s+River\b/," R.").replace(/\s+near\s+/i," nr ").replace(/\s+at\s+/i," at "),this.el.appendChild(a),l}),this.setHour(this.k,this.whatIf)}setHour(e,n=this.whatIf){this.k=e,this.whatIf=n,this.counts={action:0,minor:0,moderate:0,major:0};for(const i of this.items){const r=i.value=UC(i,e,n),s=i.cat=r?NC(i,r.stage):null;s&&this.counts[s]++,i.node.dataset.cat=s??"normal",i.node.classList.toggle("fc",(r==null?void 0:r.type)==="fc"),i.node.classList.toggle("none",!r),i.node.querySelector(".v").textContent=r?`${r.stage.toFixed(1)} ft${s?` · ${s}`:""}`:"—",i.w=22+(i.node.querySelector(".n").textContent.length+14)*6}this.hover&&this._tip()}update(){if(!this.visible||this._n++%2)return;const e=this.scene,n=e.frame.dist,i=innerWidth,r=innerHeight,s=[];for(const a of this.items){if(a.cand=!1,!a.value||!a.cat&&n>260||n>2600)continue;const[l,c,u]=e.project(a.x,e.elevAt(a.lon,a.lat)*e.e+.05,a.z);u<1&&l>-40&&l<i+40&&c>-20&&c<r+20&&(a.cand=!0,a.sx=l,a.sy=c,s.push({id:a.id,x:l,y:c,w:a.w,h:18,priority:20+(a.cat?10*(io.indexOf(a.cat)+1):0)}))}const o=ch(s);for(const a of this.items){const l=a.cand&&o.has(a.id);l&&(a.node.style.transform=`translate(${Math.round(a.sx)}px, ${Math.round(a.sy)}px)`),l!==a.on&&(a.node.style.opacity=l?1:0,a.node.style.pointerEvents=l?"auto":"none",a.on=l)}this.hover&&this._tip()}_tip(){var p,m;const e=this.hover;if(!e)return;const n=e.value,i=e.obs.length,r=[...e.obs,...e.fc].filter(x=>x!==null);Object.values(e.cats);const s=Math.min(...r),o=Math.max(...r,e.cats.minor??e.cats.action??-1/0),a=x=>x/(i-1)*220,l=x=>50-(x-s)/Math.max(o-s,.5)*46,c=x=>x.map((g,f)=>g===null?null:[f,g]).filter(Boolean).map(([g,f],_)=>`${_?"L":"M"}${a(g).toFixed(1)},${l(f).toFixed(1)}`).join(""),u=io.filter(x=>e.cats[x]!==void 0&&e.cats[x]<=o+.01).map(x=>`<line class="cat" stroke="${Bf[x]}" x1="0" x2="220" y1="${l(e.cats[x]).toFixed(1)}" y2="${l(e.cats[x]).toFixed(1)}" />`).join(""),h=n?IC(e,n.stage):null,d=(n==null?void 0:n.type)==="fc"?`NWS forecast issued ${fn(((p=e.fcIssued)==null?void 0:p.replace("T"," "))??"")} UTC`:n!=null&&n.latest?"latest measurement":"measured";this.tip.innerHTML=`<b>${fn(e.name)}</b><div class="sub">NWS ${fn(e.lid)}${e.usgs?` · USGS ${fn(e.usgs)}`:""}</div>`+(n?`<div class="mono">${n.stage.toFixed(2)} ft · ${d}</div><div class="cat-line"><i style="background:${Bf[e.cat??"normal"]}"></i>${e.cat?DC[e.cat]:"below flood stages"}</div>`:"<div>no reading for this hour</div>")+`<div class="sub mono">${io.filter(x=>e.cats[x]!==void 0).map(x=>`${x} ${e.cats[x]}`).join(" · ")} ft</div>`+(h!=null&&h.now?`<div class="impact"><b>At ${h.now.stage} ft:</b> ${fn(h.now.text)}</div>`:"")+(h!=null&&h.next?`<div class="impact next"><b>At ${h.next.stage} ft${n?` (${(h.next.stage-n.stage).toFixed(1)} ft higher)`:""}:</b> ${fn(h.next.text)}</div>`:"")+`<svg width="220" height="54" aria-hidden="true">${u}<path d="${c(e.obs)}" /><path class="fc" d="${c(e.fc)}" /><line x1="${a(this.k)}" x2="${a(this.k)}" y1="0" y2="54" /></svg>`+((m=e.crests)!=null&&m.length?`<div class="sub mono">record ${e.crests[0][0]} ft (${fn(e.crests[0][1])})</div>`:""),this.tip.style.transform=`translate(${Math.round(Math.min(e.sx+12,innerWidth-300))}px, ${Math.round(Math.min(e.sy+14,innerHeight-260))}px)`,this.tip.style.opacity=1}setVisible(e){this.visible=e,this.el.style.display=e?"":"none"}dispose(){this.el.remove()}}const OC=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;function kC(t,e,n,i){const[r,s]=t.ll,o=[e.toX(r),(n(r,s)??0)*i,e.toZ(s)],a=Math.sin(t.polar),l=Math.cos(t.polar),c=t.az??0;return{pos:[o[0]+t.dist*a*Math.sin(c),o[1]+t.dist*l,o[2]+t.dist*a*Math.cos(c)],target:o}}function zC(t,e,n,i){let r=n[0]-e[0],s=n[2]-e[2];const o=Math.hypot(r,s)||1;r/=o,s/=o;const a=-s,l=r;let c=0,u=0;t.has("ArrowUp")&&(c+=r,u+=s),t.has("ArrowDown")&&(c-=r,u-=s),t.has("ArrowRight")&&(c+=a,u+=l),t.has("ArrowLeft")&&(c-=a,u-=l);const h=Math.hypot(c,u);if(!h)return[0,0,0];const p=.3*Math.hypot(e[0]-n[0],e[1]-n[1],e[2]-n[2])*i/h;return[c*p,0,u*p]}const pm=t=>!!t&&(t.isContentEditable||t.contentEditable==="true"||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)),BC=(t,e)=>e?0:t,HC=(t,e,n,i,r)=>r?e:t+(e-t)*Math.min(1,n*i),VC=t=>{var e;return!!((e=t==null?void 0:t.closest)!=null&&e.call(t,".panel"))},GC=t=>{var e;return!!((e=t.key)!=null&&e.startsWith("Arrow"))&&!(t.metaKey||t.ctrlKey||t.altKey)&&!pm(t.target)&&!VC(t.target)},WC=t=>Math.min(1,Math.max(.2,Math.sqrt(t/300)));function jC(t,e,{dAz:n=0,dPol:i=0,zoom:r=1,northUp:s=!1}={},o=.02,a=Math.PI-.02){const[l,c,u]=[t[0]-e[0],t[1]-e[1],t[2]-e[2]];let h=Math.hypot(l,c,u)||1,d=Math.atan2(l,u),p=Math.acos(Math.max(-1,Math.min(1,c/h)));d=s?0:d+n*Math.PI/180,p=Math.max(o,Math.min(a,p+i*Math.PI/180)),h*=r;const m=Math.sin(p);return[e[0]+h*m*Math.sin(d),e[1]+h*Math.cos(p),e[2]+h*m*Math.cos(d)]}const $C=[["rate","Rain / h"],["accum","Accumulated"],["temp","Temperature"],["off","Off"]];function vd({options:t,value:e,onChange:n,label:i}){return M.jsx("div",{className:"seg",role:"group","aria-label":i,children:t.map(([r,s])=>M.jsx("button",{"aria-pressed":e===r,onClick:()=>n(r),children:s},r))})}function z0(t,e,n){if(!e)return"no data for this hour";if(e.type==="obs")return t.obs.rain[n]==="pass1"?"observed · MRMS (provisional)":"observed · MRMS, gauge-corrected";const i=Math.round((ni(t,n)-Date.UTC(+e.init.slice(0,4),+e.init.slice(4,6)-1,+e.init.slice(6,8),+e.init.slice(8,10)))/36e5);return`forecast · ${t.models[e.model].label} ${kc(e.init)} +${i} h`}function B0(t,e,n){if(!e)return ni(t,n)>Date.parse(t.updated)?"not recorded yet":"no river data for this hour";if(e.type==="whatif"){const i=Math.round((ni(t,n)-Vp(e.init))/36e5);return`what if · NWM ${e.kind==="short"?"short-range (HRRR rain)":"medium-range (GFS rain)"} ${kc(e.init)} +${i} h`}return e.k===n?"recorded · NWM analysis":`recorded · NWM analysis from ${n-e.k} h earlier (newest posted)`}function XC({info:t}){const e=((t==null?void 0:t.counts)??[]).map((n,i)=>[i,n]).filter(([n,i])=>n>0&&i>0);return M.jsx("span",{className:"rv-counts",children:e.length?e.map(([n,i])=>M.jsxs("span",{title:Ru[n],children:[M.jsx("i",{style:{background:lh[n]}}),i," ",Ru[n].replace(" flood","")]},n)):t!=null&&t.counts?M.jsx("span",{children:"all below high water"}):null})}function YC({fill:t}){if(t==="off")return null;const e=Nf[t],n=t==="temp"?qy:Uf;return M.jsxs("div",{className:"st-legend",children:[M.jsx("div",{className:"st-ramp",style:{background:`linear-gradient(90deg, ${n.join(", ")})`}}),M.jsxs("div",{className:"st-ticks mono",children:[e.stops.filter((i,r)=>r%2===0||r===9).map(i=>M.jsx("span",{children:i},i)),M.jsx("span",{className:"u",children:e.unit})]})]})}function qC(t,e){var i;const n=((i=t.rivers)==null?void 0:i.inundation)??{};for(let r=e;r>=Math.max(0,e-2);r--)if(n[r])return r;return null}const mm=(t={},e)=>{for(let n=e;n>=Math.max(0,e-2);n--)if(t[n]!==void 0)return n;return null},KC=(t,e)=>{var n;return mm((n=t.power)==null?void 0:n.frames,e)},ZC=(t,e)=>{var n;return mm((n=t.roads)==null?void 0:n.frames,e)},QC=(t,e)=>{var n;return mm((n=t.sewers)==null?void 0:n.frames,e)};function JC(t,e,n=!0){var i,r,s,o;return(i=t.sea)!=null&&i.obs.includes(e)?{type:"obs"}:n&&e>Math.max(-1,...((r=t.sea)==null?void 0:r.obs)??[])&&((o=(s=t.sea)==null?void 0:s.fc)!=null&&o.frames.includes(e))?{type:"fc",run:t.sea.fc.run}:null}function eR(t,e){let n=0,i=0;const r=za.map(()=>0);for(let s=0;s<e;s++){const o=t[s*4];if(o===255)continue;i++,o>n&&(n=o);const a=o/.44704;za.forEach((l,c)=>{a>=l&&r[c]++})}return{mph:Math.round(n/.44704),share:r.map(s=>i?s/i:0)}}function tR({doc:t,layer:e,rivers:n,reservoirs:i,ground:r,gauges:s,floods:o,sea:a,gusts:l,power:c,roads:u,sewers:h}){var Mo,Ur,wo,Ir;const d=Z.useMemo(()=>new Pg,[t.version]),p=Z.useMemo(()=>new Yw(t,d),[t,d]),[m,x]=Z.useState(Math.max(0,t.lastObs));Z.useEffect(()=>{x(O=>Math.min(O,t.hours-1))},[t.hours]);const[g,f]=Z.useState({mode:"blend",model:"hrrr"}),[_,v]=Z.useState("rate"),[S,R]=Z.useState(!0),[C,A]=Z.useState(!1),[P,X]=Z.useState(!1),[y,E]=Z.useState(.85),[H,B]=Z.useState(6),[k,q]=Z.useState(""),[z,K]=Z.useState(!1),D=Z.useRef(0),[Y,J]=Z.useState(!0),[re,Me]=Z.useState(!0),[Le,j]=Z.useState(null),[ne,ue]=Z.useState(null),he=Z.useMemo(()=>new Pg(48),[t.version]),[De,Re]=Z.useState(!0),[Ve,Ze]=Z.useState(null),fe=Z.useRef(new Map),[L,Ct]=Z.useState(!1),[Oe,He]=Z.useState(!1),[Pe,rt]=Z.useState(!0),[Ie,b]=Z.useState(!0),[w,G]=Z.useState(!0),[ee,ie]=Z.useState(null),[Q,Te]=Z.useState(!1),[ce,ye]=Z.useState(null),[Ye,oe]=Z.useState(!0),[ge,Ne]=Z.useState(null),Ue=Z.useRef(new Map),[_e,Ke]=Z.useState(!0),[be,tt]=Z.useState(null),N=Z.useRef(new Map),[me,$]=Z.useState(!0),[te,pe]=Z.useState(null),ve=Z.useRef(new Map),[$e,Et]=Z.useState(!0),[Tt,Qe]=Z.useState(!0),[Nt,kn]=Z.useState(null);Z.useEffect(()=>(window.__storm={setK:x,setFill:v,setSel:f,setWind:R,setOpen:X},()=>{delete window.__storm}),[]),Z.useEffect(()=>{e.setFill(_)},[e,_]),Z.useEffect(()=>{e.setWind(S)},[e,S]),Z.useEffect(()=>{e.setOpacity(y)},[e,y]),Z.useEffect(()=>{e.setAltitude(H)},[e,H]),Z.useEffect(()=>{n==null||n.layer.setVisible($e)},[n,$e]),Z.useEffect(()=>{i==null||i.load(t).catch(()=>{})},[i,t]),Z.useEffect(()=>{i==null||i.setHour(m)},[i,m]),Z.useEffect(()=>{i==null||i.setVisible(Ie)},[i,Ie]),Z.useEffect(()=>{for(const O of[r==null?void 0:r.snow,r==null?void 0:r.soil,r==null?void 0:r.wells])O==null||O.load(t).catch(()=>{})},[r,t]),Z.useEffect(()=>{for(const O of[r==null?void 0:r.snow,r==null?void 0:r.soil,r==null?void 0:r.wells])O==null||O.setHour(m)},[r,m]),Z.useEffect(()=>{r==null||r.snow.setVisible(L)},[r,L]),Z.useEffect(()=>{r==null||r.soil.setVisible(Oe)},[r,Oe]),Z.useEffect(()=>{r==null||r.wells.setVisible(Pe)},[r,Pe]),Z.useEffect(()=>{s==null||s.load(t).then(()=>ie({...s.counts})).catch(()=>{})},[s,t]),Z.useEffect(()=>{s&&(s.setHour(m,Tt),ie({...s.counts}))},[s,m,Tt]),Z.useEffect(()=>{s==null||s.setVisible(w)},[s,w]),Z.useEffect(()=>{a==null||a.layer.setCurrents(Y)},[a,Y]),Z.useEffect(()=>{a==null||a.tides.setVisible(re)},[a,re]),Z.useEffect(()=>{a==null||a.tides.load(t).then(()=>ue(a.tides.maxSurge)).catch(()=>{})},[a,t]),Z.useEffect(()=>{a&&(a.tides.setHour(m),ue(a.tides.maxSurge))},[a,m]),Z.useEffect(()=>{if(!a)return;let O=!1;const le=JC(t,m,Tt);if(!le){a.layer.set(null),j({j:null});return}const ze=`k${String(m).padStart(3,"0")}.png?v=${t.version}`;return he.get(le.type==="obs"?`${t.base}sea/obs/${ze}`:`${t.base}sea/fc/${ze}&r=${le.run}`).then(lt=>{O||(a.layer.set(lt),j({j:m,...le}))}).catch(()=>{O||(a.layer.set(null),j({j:null}))}),()=>{O=!0}},[a,t,m,Tt,he]),Z.useEffect(()=>{l==null||l.setVisible(Q)},[l,Q]),Z.useEffect(()=>{if(!l||!Q)return;let O=!1;const le=Wo(t,m,g,"gust");if(!le){l.set(null),ye({src:null});return}return d.get(cc(t,le,m,"gust")).then(ze=>{O||(l.set(ze),ye({src:le,...eR(ze.data,ze.width*ze.height)}))}).catch(()=>{O||(l.set(null),ye({src:null}))}),()=>{O=!0}},[l,Q,t,m,g,d]),Z.useEffect(()=>{c==null||c.setVisible(Ye)},[c,Ye]),Z.useEffect(()=>{if(!c)return;let O=!1;const le=KC(t,m);if(le===null){c.set(null),Ne({j:null});return}const ze=`${t.base}power/k${String(le).padStart(3,"0")}.json?v=${t.version}&u=${t.updated}`;let lt=Ue.current.get(ze);return lt||(lt=fetch(ze).then(ft=>ft.json()),Ue.current.set(ze,lt)),lt.then(ft=>{O||(c.set(ft),c.at=Math.min(ni(t,m),Date.parse(ft.time)),Ne({j:le,...ft}))}).catch(()=>{Ue.current.delete(ze),O||(c.set(null),Ne({j:null}))}),()=>{O=!0}},[c,t,m]),Z.useEffect(()=>{u==null||u.setVisible(_e)},[u,_e]),Z.useEffect(()=>{if(!u)return;let O=!1;const le=ZC(t,m);if(le===null){u.set(null),tt({j:null});return}const ze=`${t.base}roads/k${String(le).padStart(3,"0")}.json?v=${t.version}&u=${t.updated}`;let lt=N.current.get(ze);return lt||(lt=fetch(ze).then(ft=>ft.json()),N.current.set(ze,lt)),lt.then(ft=>{O||(u.set(ft),tt({j:le,...ft}))}).catch(()=>{N.current.delete(ze),O||(u.set(null),tt({j:null}))}),()=>{O=!0}},[u,t,m]),Z.useEffect(()=>{h==null||h.setVisible(me)},[h,me]),Z.useEffect(()=>{if(!h)return;let O=!1;const le=QC(t,m);if(le===null){h.set(null),pe({j:null});return}const ze=`${t.base}sewers/k${String(le).padStart(3,"0")}.json?v=${t.version}&u=${t.updated}`;let lt=ve.current.get(ze);return lt||(lt=fetch(ze).then(ft=>ft.json()),ve.current.set(ze,lt)),lt.then(ft=>{O||(h.set(ft),h.at=Math.min(ni(t,m),Date.parse(ft.time)),pe({j:le,...ft}))}).catch(()=>{ve.current.delete(ze),O||(h.set(null),pe({j:null}))}),()=>{O=!0}},[h,t,m]),Z.useEffect(()=>{o==null||o.setVisible(De)},[o,De]),Z.useEffect(()=>{if(!o)return;let O=!1;const le=qC(t,m);if(le===null){o.set(null),Ze({j:null});return}const ze=`${t.base}rivers/inundation/k${String(le).padStart(3,"0")}.json?v=${t.version}`;let lt=fe.current.get(ze);return lt||(lt=fetch(ze).then(ft=>ft.json()),fe.current.set(ze,lt)),lt.then(ft=>{O||(o.set(ft),Ze({j:le,...t.rivers.inundation[le]}))}).catch(()=>{fe.current.delete(ze),O||(o.set(null),Ze({j:null}))}),()=>{O=!0}},[o,t,m]),Z.useEffect(()=>{if(!n)return;let O=!1;const le=tE(t,m,Tt);return(le?n.flows.get(le):Promise.resolve(null)).then(ze=>{O||(n.layer.setFlows(ze),n.layer.whatIf.value=(le==null?void 0:le.type)==="whatif"?1:0,n.layer.label=`${B0(t,le,m)} · ${zh(ni(t,m))}`,kn({src:le,counts:ze?n.layer.counts:null}))}).catch(ze=>{console.warn("river flows:",ze),O||(n.layer.setFlows(null),kn({src:null}))}),()=>{O=!0}},[t,m,n,Tt]),Z.useEffect(()=>{const O=++D.current;K(!0),(async()=>{var T,I;const le=Wo(t,m,g,"rain");let ze=null;_==="rate"?ze=((T=await p.hourly(m,g))==null?void 0:T.mm)??null:_==="accum"&&(ze=((I=await p.accumulated(m,g))==null?void 0:I.mm)??null);const lt=Wo(t,m,g,"met");let ft=null;if(lt&&(S||_==="temp")&&(ft={data:(await d.get(cc(t,lt,m,"met"))).data,grid:Sx(t,lt,"met")}),O===D.current){(_==="rate"||_==="accum")&&e.setRain(ze),e.setMet(ft),q(z0(t,_==="temp"?lt:le,m)),K(!1);for(let V=m+1;V<=Math.min(t.hours-1,m+3);V++){const W=Wo(t,V,g,"rain");W&&_!=="temp"&&d.get(cc(t,W,V,"rain")).catch(()=>{})}}})().catch(le=>{O===D.current&&(q(`could not load this hour (${le.message})`),K(!1))})},[t,m,g,_,S,e,p,d]),Z.useEffect(()=>{if(!C||z)return;const O=setTimeout(()=>x(le=>le>=t.hours-1?(A(!1),le):le+1),450);return()=>clearTimeout(O)},[C,z,m,t.hours]);const So=Z.useRef(null);So.current=O=>{O.metaKey||O.ctrlKey||O.altKey||pm(O.target)||(O.key===","&&x(le=>Math.max(0,le-1)),O.key==="."&&x(le=>Math.min(t.hours-1,le+1)),O.key===" "&&(O.preventDefault(),A(le=>!le)))},Z.useEffect(()=>{const O=le=>So.current(le);return addEventListener("keydown",O),()=>removeEventListener("keydown",O)},[]);const ms=t.runList[g.model]??[],hi=ni(t,m),gs=(t.lastObs+1)/t.hours*100,Ja=Array.from({length:Math.ceil(t.hours/24)},(O,le)=>le);return M.jsxs("section",{className:`panel storm${P?" open":""}`,"aria-label":"Storm layer",children:[M.jsxs("div",{className:"st-bar",children:[M.jsx("button",{className:"st-play","aria-label":C?"Pause":"Play",title:"Play / pause (space)",onClick:()=>A(O=>!O),children:C?"❚❚":"▶"}),M.jsxs("div",{className:"st-when",children:[M.jsx("b",{children:zh(hi)}),M.jsxs("span",{className:"mono",children:[Kw(hi)," · hour ",m+1,"/",t.hours]})]}),M.jsx("span",{className:`st-src${k.startsWith("observed")?" obs":k.startsWith("forecast")?" fc":""}`,children:z?"loading…":k}),M.jsx("button",{className:"st-more","aria-expanded":P,"aria-label":"Storm layer options",onClick:()=>X(O=>!O),children:P?"▾":"▸"})]}),M.jsxs("div",{className:"st-slider",children:[M.jsx("input",{type:"range",min:"0",max:t.hours-1,value:m,"aria-label":"Hour",onChange:O=>{A(!1),x(+O.target.value)},style:{background:`linear-gradient(90deg, #4c9be8 0%, #4c9be8 ${gs}%, #3a3a37 ${gs}%, #3a3a37 100%)`}}),M.jsx("div",{className:"st-days mono",children:Ja.map(O=>M.jsx("span",{children:new Intl.DateTimeFormat("en-US",{timeZone:t.tz,weekday:"short",day:"numeric"}).format(t.t0+O*864e5+36e5)},O))}),c&&Ye&&ge&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Power ·"}),M.jsx("span",{className:"rv-counts",children:ge.j===null?M.jsx("span",{children:ni(t,m)>Date.parse(t.updated)?"not recorded yet":"not recorded for this hour"}):M.jsxs(M.Fragment,{children:[M.jsxs("span",{children:[M.jsx("i",{style:{background:Qy}}),Object.values(ge.totals).reduce((O,le)=>O+le,0).toLocaleString("en-US")," customers out"]}),Object.entries(ge.totals).filter(([,O])=>O>0).sort((O,le)=>le[1]-O[1]).map(([O,le])=>M.jsxs("span",{children:[t.power.utilities[O]," ",le.toLocaleString("en-US")]},O)),ge.partial&&M.jsx("span",{title:"Rebuilt from the outages still open when recording began (Nov 9, 3:50 PM PST), placed back to their start times; outages restored before then are missing",children:"partial: rebuilt from outages still open when recording began"}),((Mo=ge.failed)==null?void 0:Mo.length)>0&&M.jsxs("span",{children:["no data from ",ge.failed.join(", ")]})]})})]}),u&&_e&&be&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Roads ·"}),M.jsx("span",{className:"rv-counts",children:be.j===null?M.jsx("span",{children:ni(t,m)>Date.parse(t.updated)?"not recorded yet":"not recorded for this hour (recording began Nov 9, 7:20 PM PST)"}):M.jsxs(M.Fragment,{children:[Object.keys(hr).filter(O=>be.counts[O]>0).map(O=>M.jsxs("span",{children:[M.jsx("i",{style:{background:hr[O]}}),be.counts[O]," ",kf[O]]},O)),be.passes.some(O=>O.closed&&!O.earlier)&&M.jsxs("span",{children:["passes closed: ",be.passes.filter(O=>O.closed&&!O.earlier).map(O=>O.name).join(", ")]}),be.ferries.length>0&&M.jsxs("span",{title:be.ferries.map(O=>O.title).join(`
`),children:[be.ferries.length," ferry alert",be.ferries.length===1?"":"s"]}),((Ur=be.failed)==null?void 0:Ur.length)>0&&M.jsxs("span",{children:["no data from ",be.failed.join(", ")]})]})})]}),h&&me&&te&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Sewer overflows ·"}),M.jsx("span",{className:"rv-counts",children:te.j===null?M.jsx("span",{children:ni(t,m)>Date.parse(t.updated)?"not recorded yet":"not recorded for this hour"}):M.jsxs(M.Fragment,{children:[M.jsxs("span",{children:[M.jsx("i",{style:{background:zf.overflowing,borderRadius:"50%"}}),te.counts.overflowing," outfall",te.counts.overflowing===1?"":"s"," overflowing"]}),te.partial&&M.jsx("span",{title:"Before recording began (Nov 9, 7:20 PM PST) only Metro Vancouver's outfalls are shown, from its overflow start and end times; King County's map gives no times",children:"partial: Metro Vancouver only before Nov 9, 7:20 PM"}),((wo=te.failed)==null?void 0:wo.length)>0&&M.jsxs("span",{children:["no data from ",te.failed.join(", ")]})]})})]}),l&&Q&&ce&&M.jsxs("div",{className:"st-rivers",children:[M.jsxs("span",{className:"mono",children:["Gusts · ",ce.src?ce.src.type==="obs"?"HRRR analysis":z0(t,ce.src,m).replace("forecast · ","forecast "):"not available for this hour"]}),ce.src&&M.jsxs("span",{className:"rv-counts",children:[M.jsxs("span",{children:["peak ",ce.mph," mph on land"]}),za.map((O,le)=>[O,le]).filter(([,O])=>ce.share[O]>=.001).slice(-2).map(([O,le])=>M.jsxs("span",{children:[M.jsx("i",{style:{background:Ff[le]}}),(ce.share[le]*100).toFixed(ce.share[le]<.1?1:0),"% of land ≥ ",O]},O))]})]}),a&&(Y||re)&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Sea ·"}),M.jsxs("span",{className:"rv-counts",children:[Y&&M.jsx("span",{children:(Le==null?void 0:Le.j)===null?ni(t,m)>Date.parse(t.updated)?"not modelled yet":"no model hour":(Le==null?void 0:Le.type)==="fc"?`what if · SSCOFS forecast ${kc(Le.run)}`:"SSCOFS nowcast"}),re&&ne&&M.jsxs("span",{children:["max surge ",ne.surge>=0?"+":"−",Math.abs(ne.surge).toFixed(1)," ft · ",ne.name]})]})]}),o&&De&&Ve&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Flood outlines ·"}),M.jsx("span",{className:"rv-counts",children:Ve.j===null?M.jsx("span",{children:Object.keys(((Ir=t.rivers)==null?void 0:Ir.inundation)??{}).length?"not recorded for this hour":"recording starts with the next update"}):M.jsxs("span",{children:[M.jsx("i",{style:{background:"#ff4f7b"}}),Ve.n," reaches · ",Ve.km2," km²",Ve.j!==m?` (as of ${m-Ve.j} h earlier)`:""]})})]}),s&&w&&ee&&M.jsxs("div",{className:"st-rivers",children:[M.jsx("span",{className:"mono",children:"Gauges ·"}),M.jsx("span",{className:"rv-counts",children:io.some(O=>ee[O])?io.filter(O=>ee[O]).map(O=>M.jsxs("span",{children:[M.jsx("i",{style:{background:Bf[O]}}),ee[O]," ",O]},O)):M.jsx("span",{children:"none at action or flood stage"})})]}),n&&$e&&M.jsxs("div",{className:"st-rivers",children:[M.jsxs("span",{className:"mono",children:["Rivers · ",B0(t,Nt==null?void 0:Nt.src,m)]}),M.jsx(XC,{info:Nt})]})]}),P&&M.jsxs("div",{className:"st-body",children:[M.jsxs("div",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:"Fill"}),M.jsx(vd,{label:"Fill",options:$C,value:_,onChange:v})]}),M.jsxs("div",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:"Source"}),M.jsx(vd,{label:"Source",options:[["blend","Observed + forecast"],["run","One forecast run"]],value:g.mode,onChange:O=>f(le=>{var ze;return O==="run"?{...le,mode:O,init:le.init??((ze=ms[ms.length-1])==null?void 0:ze.init)}:{mode:O,model:le.model}})})]}),M.jsxs("div",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:"Model"}),M.jsx(vd,{label:"Model",options:Object.entries(t.models).map(([O,le])=>[O,le.label]),value:g.model,onChange:O=>f(le=>{var ze;return{...le,model:O,init:le.mode==="run"?(ze=t.runList[O].at(-1))==null?void 0:ze.init:void 0}})})]}),g.mode==="run"&&M.jsxs("label",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:"Run"}),M.jsx("select",{className:"st-select",value:g.init,onChange:O=>f(le=>({...le,init:O.target.value})),children:ms.map(O=>M.jsxs("option",{value:O.init,children:[kc(O.init),O.complete?"":" (partial)"]},O.init))})]}),M.jsxs("button",{className:"tog",role:"switch","aria-checked":S,onClick:()=>R(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Wind",M.jsx("small",{children:"10 m wind as drifting trails"})]})]}),c&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":Ye,onClick:()=>oe(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Power outages",M.jsx("small",{children:"BC Hydro, PSE, Seattle City Light, PGE and Pacific Power outage maps, recorded each hour from Nov 9; dot size: customers out; hover for cause and duration"})]})]}),u&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":_e,onClick:()=>Ke(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Roads",M.jsx("small",{children:"WSDOT and DriveBC highway alerts and WSDOT mountain passes, recorded each hour from Nov 9; only reports since the storm began (Nov 7), not planned roadwork; hover for details"})]})]}),_e&&M.jsxs("div",{className:"rv-legend",children:[Object.keys(hr).map(O=>M.jsxs("span",{children:[M.jsx("i",{style:{background:hr[O],transform:"rotate(45deg)"}}),kf[O]]},O)),M.jsxs("span",{children:[M.jsx("i",{style:{background:eS}}),"pass open"]}),M.jsxs("span",{children:[M.jsx("i",{style:{background:hr.closure}}),"pass closed"]})]})]}),h&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":me,onClick:()=>$(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Sewer overflows",M.jsx("small",{children:"combined sewer outfalls in Seattle and King County (King County's map) and Metro Vancouver, recorded each hour from Nov 9 (Metro Vancouver from its overflow times); a dot at each outfall overflowing during the hour"})]})]}),l&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":Q,onClick:()=>Te(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Wind gusts",M.jsx("small",{children:"surface gusts on land, from 25 mph (HRRR analysis for past hours, then the forecast)"})]})]}),Q&&M.jsx("div",{className:"rv-legend",children:za.map((O,le)=>M.jsxs("span",{children:[M.jsx("i",{style:{background:Ff[le]}}),"≥ ",O," mph"]},O))})]}),a&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":Y,onClick:()=>J(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Currents",M.jsx("small",{children:"surface currents from the same model, as drifting trails"})]})]}),M.jsxs("button",{className:"tog",role:"switch","aria-checked":re,onClick:()=>Me(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Tide gauges",M.jsx("small",{children:"NOAA observed water level vs predicted tide: the storm surge"})]})]})]}),o&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":De,onClick:()=>Re(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Flood outlines",M.jsx("small",{children:"NOAA's experimental flooded areas from the NWM analysis, recorded each hour from Nov 9 on; reaches already high before the storm left out"})]})]}),s&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":w,onClick:()=>G(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["River gauges",M.jsx("small",{children:"NWS gauges: measured stage against flood stages, with the NWS impact statement on hover"})]})]}),i&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":Ie,onClick:()=>b(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Reservoir levels",M.jsx("small",{children:"USGS lake and reservoir gauges: change since the storm began; hover for the record"})]})]}),r&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":L,onClick:()=>Ct(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Snow",M.jsx("small",{children:"SNOTEL and BC snow pillows: change in snow water (or snow depth) since the storm began; hover for depth, temperature and precipitation"})]})]}),M.jsxs("button",{className:"tog",role:"switch","aria-checked":Oe,onClick:()=>He(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Soil moisture",M.jsx("small",{children:"SNOTEL soil sensors in the mountains: change in soil water (% by volume) since the storm began at the shallowest working sensor; hover for 2, 8 and 20 in"})]})]}),M.jsxs("button",{className:"tog",role:"switch","aria-checked":Pe,onClick:()=>rt(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Groundwater",M.jsx("small",{children:"USGS real-time and BC observation wells: how far the water table has risen since the storm began (BC posts about a day late)"})]})]})]}),n&&M.jsxs(M.Fragment,{children:[M.jsxs("button",{className:"tog",role:"switch","aria-checked":$e,onClick:()=>Et(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Rivers",M.jsx("small",{children:"What the rivers did, hour by hour (NOAA National Water Model analysis: observed rain, nudged to the USGS gauges; flow, not stage). Height: rise since Sat 12 AM; colour: flood thresholds reached"})]})]}),$e&&M.jsxs("button",{className:"tog",role:"switch","aria-checked":Tt,onClick:()=>Qe(O=>!O),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:["Rivers: what if",M.jsx("small",{children:"for hours not recorded yet, the newest NWM forecast (striped); each hour is replaced by the record as it comes in"})]})]}),$e&&M.jsx("div",{className:"rv-legend",children:Ru.map((O,le)=>M.jsxs("span",{children:[M.jsx("i",{style:{background:lh[le]}}),le===0?O:`≥ ${O}`]},le))})]}),M.jsxs("label",{className:"ctl-row slider",children:["Opacity ",M.jsxs("span",{className:"mono",children:[Math.round(y*100),"%"]}),M.jsx("input",{type:"range",min:"0.2",max:"1",step:"0.05",value:y,onChange:O=>E(+O.target.value)})]}),M.jsxs("label",{className:"ctl-row slider",children:["Layer height ",M.jsxs("span",{className:"mono",children:[H," km"]}),M.jsx("input",{type:"range",min:"1",max:"12",step:"0.5",value:H,onChange:O=>B(+O.target.value)})]}),M.jsx(YC,{fill:_}),M.jsxs("div",{className:"st-note",children:[_==="accum"?g.mode==="run"?"Accumulated from the run's first hour in the window.":`Accumulated since ${zh(t.t0)}: observed hours, then the newest forecast.`:"Observed where measured (MRMS rain, HRRR analysis wind and temperature), newest forecast after."," ","Updated ",t.updated.replace("T"," ").replace("Z"," UTC"),"."]})]})]})}const Hf=(t,e)=>`${t>.5*10**-e?"+":t<-.5*10**-e?"−":"±"}${Math.abs(t).toFixed(e)}`,Vf=(t,e)=>(t[e]??[]).filter(n=>n!==null);function nR(t){return Vf(t,"swe").length?{key:"swe",label:"SWE",unit:"in",d:1,step:.2}:Vf(t,"depth").length?{key:"depth",label:"snow",unit:"in",d:0,step:1}:null}function iR(t){for(const[e,n]of[["sm2","soil 2 in"],["sm8","soil 8 in"],["sm20","soil 20 in"]]){const i=Vf(t,e);if(i.length&&Math.max(...i)>Math.min(...i))return{key:e,label:n,unit:"%",d:1,step:1}}return null}class ha extends Ba{keep(e){return!!this.constructor.pick(e)}prepare(e){return{...e,...this.constructor.pick(e),short:e.name}}step(e){return e.step}valueText(e,n){return`${e.label} ${Hf(n.change,e.d)}${e.unit==="%"?"%":" in"}`}tipBody(e){const n=this.k,i=(s,o,a,l)=>{const c=Pu(e,n,s);return c?`<div class="mono">${o} ${c.elev.toFixed(l)}${a} · ${Hf(c.change,l)}${a} since the storm began${c.latest?" · latest":""}</div>`:""},r=Pu(e,n,"temp");return`<div class="sub">${e.ft?`${Math.round(e.ft).toLocaleString("en-US")} ft · `:""}provisional</div>`+i("swe","snow water"," in",1)+i("depth","snow depth"," in",0)+i("prec","precipitation"," in",1)+(r?`<div class="mono">air ${r.elev.toFixed(0)}°F${r.latest?" · latest":""}</div>`:"")+i("sm2","soil 2 in","%",0)+i("sm8","soil 8 in","%",0)+i("sm20","soil 20 in","%",0)}caption(e,n,i){return`${fn(e.key==="swe"?"snow water":e.label)}: ${n.toFixed(e.d)} / ${i.toFixed(e.d)} ${e.unit} · whole window`}}Kn(ha,"file","ground/snow.json"),Kn(ha,"kind","snow"),Kn(ha,"pick",nR);class Gf extends ha{valueText(e,n){return`soil ${Hf(n.change,e.d)}%`}}Kn(Gf,"kind","soil"),Kn(Gf,"pick",iR);const H0=t=>`${t>.005?"+":t<-.005?"−":"±"}${Math.abs(t).toFixed(2)} ft`;class Wf extends Ba{prepare(e){return{...e,key:"level",short:e.src==="BC"?e.name.replace(/^Observation (well \d+).*$/,"$1"):e.name}}step(){return .1}valueText(e,n){return H0(n.change)}tipBody(e,n){const i=Pu(e,this.k,"depth");return(n?`<div class="mono">water table ${H0(n.change)} since the storm began${n.latest?" · latest reading":""}</div>`:"<div>no reading yet</div>")+(i?`<div class="mono">${i.elev.toFixed(2)} ft below the ground</div>`:"")+`<div class="sub">${e.src==="BC"?"BC Provincial Groundwater Observation Well Network · posted about a day late":"USGS real-time well"} · provisional</div>`}caption(e,n,i){return`level ${n.toFixed(2)} / ${i.toFixed(2)} ft · whole window`}}Kn(Wf,"file","ground/wells.json"),Kn(Wf,"kind","well");const V0={type:"change"},gm={type:"start"},tS={type:"end"},jl=new Ka,G0=new Ni,rR=Math.cos(70*fo.DEG2RAD),Ut=new U,xn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_d=1e-6;class sR extends Xy{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Cr,this._lastTargetPosition=new U,this._quat=new Cr().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cu,this._sphericalDelta=new Cu,this._scale=1,this._panOffset=new U,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new U,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aR.bind(this),this._onPointerDown=oR.bind(this),this._onPointerUp=lR.bind(this),this._onContextMenu=mR.bind(this),this._onMouseWheel=hR.bind(this),this._onKeyDown=dR.bind(this),this._onTouchStart=fR.bind(this),this._onTouchMove=pR.bind(this),this._onMouseDown=cR.bind(this),this._onMouseMove=uR.bind(this),this._interceptControlDown=gR.bind(this),this._interceptControlUp=vR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(V0),this.update(),this.state=ct.NONE}update(e=null){const n=this.object.position;Ut.copy(n).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),r<-Math.PI?r+=xn:r>Math.PI&&(r-=xn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ut.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(jl.origin.copy(this.object.position),jl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jl.direction))<rR?this.object.lookAt(this.target):(G0.setFromNormalAndCoplanarPoint(this.object.up,this.target),jl.intersectPlane(G0,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_d||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_d||this._lastTargetPosition.distanceToSquared(this.target)>_d?(this.dispatchEvent(V0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ut.setFromMatrixColumn(n,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,n){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(n,1):(Ut.setFromMatrixColumn(n,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ut.copy(r).sub(this.target);let s=Ut.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Be,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function oR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function aR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function lR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tS),this.state=ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function cR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case wi.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case wi.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(gm)}function uR(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function hR(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(gm),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(tS))}function dR(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function fR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(gm)}function pR(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function mR(t){this.enabled!==!1&&t.preventDefault()}function gR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _R=150,nS=[[1,120],[2,260]],xR=260,yR=450,SR=16,W0=40,MR=6;function wR(t,e,n=0,i=0){const r=Math.max(e[0]-t[0],0,t[0]-e[1]),s=Math.max(e[2]-t[2],0,t[2]-e[3]),o=Math.max(n-t[1],0,t[1]-i);return Math.hypot(r,o,s)}function ER(t,e,n,{far:i=xR,maxOrbit:r=yR,max:s=SR}={}){return n>r?[]:t.map(o=>({t:o,d:wR(e,o.box,o.lo,o.hi)})).filter(o=>o.d<i).sort((o,a)=>o.d-a.d).slice(0,s).map(({t:o,d:a})=>({key:o.key,level:nS.findIndex(([,l])=>a<=l)}))}class TR{constructor(e,n,i,r,s){Object.assign(this,{scene:e,U:n,bundle:i,P:r});const o=i.manifest.terrain.detail;this.makeMaterial=u=>{const h=s(u);return h.polygonOffset=!0,h.polygonOffsetFactor=-1,h.polygonOffsetUnits=-1,h},this.water=i.manifest.water.tiles,this.tiles=o.tiles.map(u=>{const[h,d]=u.key.split("_").map(Number),p=u.west+u.cellsize/2,m=u.south+(u.nrows-.5)*u.cellsize,x=[r.toX(p),r.toX(p+(u.ncols-1)*u.cellsize),r.toZ(m),r.toZ(m-(u.nrows-1)*u.cellsize)];return{key:u.key,tx:h,ty:d,meta:u,box:x,lo:u.min,hi:u.max,state:"idle",meshes:[null,null],used:0}}),this.byKey=new Map(this.tiles.map(u=>[u.key,u])),this.nx=Math.max(...this.tiles.map(u=>u.tx))+1,this.ny=Math.max(...this.tiles.map(u=>u.ty))+1,this.maskData=new Uint8Array(this.nx*this.ny),this.mask=new Gi(this.maskData,this.nx,this.ny,Xa),this.mask.magFilter=this.mask.minFilter=Vt,this.mask.needsUpdate=!0;const a=i.manifest.region,l=o.tile_deg;this.maskRect=new Xe(r.toX(a.west),r.toZ(a.north),r.toX(a.west+this.nx*l),r.toZ(a.north-this.ny*l));const c=i.manifest.terrain.overview.cellsize;this.maskEps=new Be(.25*c/(this.nx*l),.25*c/(this.ny*l)),this.inflight=0,this.frameNo=0,this.shown=new Set,this.failures=0,this.onChange=null}sample(e,n){const i=this.bundle.manifest.region,r=this.bundle.manifest.terrain.detail.tile_deg,s=this.byKey.get(`${Math.floor((e-i.west)/r)}_${Math.floor((i.north-n)/r)}`);return s&&this.shown.has(s.key)?s.grid.sample(e,n):null}isShown(e,n){return this.sample(e,n)!==null}_load(e){e.state="loading",this.inflight++;const n=fetch(`${this.bundle.base}terrain/tiles/${e.key}.bin`).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.arrayBuffer()}),i=new fm().loadAsync(`${this.bundle.base}${this.water.dir}/${e.key}.png`);Promise.all([n,i]).then(([r,s])=>{if(r.byteLength!==e.meta.ncols*e.meta.nrows*2)throw new Error("tile size mismatch");e.grid=xx(e.meta,r,this.P),s.flipY=!1,s.colorSpace=Gn,s.anisotropy=4,s.needsUpdate=!0;const o=this.bundle.manifest.region,a=this.water.per_deg,l=.5/a,c=o.west+e.tx,u=o.north-e.ty,h=new Xe(this.P.toX(c-l),this.P.toZ(u+l),this.P.toX(c+(s.image.width-1)/a+l),this.P.toZ(u-(s.image.height-1)/a-l));e.waterTex=s,e.material=this.makeMaterial({tileWater:s,tileWaterRect:h}),e.state="ready"}).catch(()=>{e.state="failed",this.failures++}).finally(()=>{this.inflight--})}_mesh(e,n){if(!e.meshes[n]){const i=new an(yx(Yy,e.grid,this.P,nS[n][0],_R),e.material);i.visible=!1,i.renderOrder=1,this.scene.add(i),e.meshes[n]=i}return e.meshes[n]}update(e,n){var c;this.frameNo++;const i=this.U.exag.value*.001*(1-this.U.flat.value),r=e.position.toArray(),s=ER(this.tiles.map(u=>({...u,lo:u.lo*i,hi:u.hi*i})),r,n);for(const u of s){const h=this.byKey.get(u.key);h.used=this.frameNo,h.state==="idle"&&this.inflight<MR&&this._load(h)}let o=0;const a=new Set;for(const u of s){const h=this.byKey.get(u.key);if(h.state!=="ready")continue;let d=u.level;if(!h.meshes[d]&&(o++>0&&(d=h.meshes.findIndex(Boolean)),d<0))continue;const p=this._mesh(h,d);for(const m of h.meshes)m&&(m.visible=m===p);a.add(h.key)}for(const u of this.tiles)if(!a.has(u.key))for(const h of u.meshes)h&&(h.visible=!1);if(a.size!==this.shown.size||[...a].some(u=>!this.shown.has(u))){this.shown=a,this.maskData.fill(0);for(const u of a){const h=this.byKey.get(u);this.maskData[h.ty*this.nx+h.tx]=255}this.mask.needsUpdate=!0,(c=this.onChange)==null||c.call(this)}return this._evict(),a.size}_evict(){var n,i;const e=this.tiles.filter(r=>r.state==="ready");if(!(e.length<=W0))for(const r of e.filter(s=>!this.shown.has(s.key)).sort((s,o)=>s.used-o.used).slice(0,e.length-W0)){for(const s of r.meshes)s&&(this.scene.remove(s),s.geometry.dispose());(n=r.material)==null||n.dispose(),(i=r.waterTex)==null||i.dispose(),r.meshes=[null,null],r.grid=null,r.material=r.waterTex=null,r.state="idle"}}dispose(){var e,n;for(const i of this.tiles){for(const r of i.meshes)r&&(this.scene.remove(r),r.geometry.dispose());(e=i.material)==null||e.dispose(),(n=i.waterTex)==null||n.dispose()}this.mask.dispose()}}const j0=new Zi,$l=new U;class iS extends Wy{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ut(e,3)),this.setAttribute("uv",new ut(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new bu(n,6,1);return this.setAttribute("instanceStart",new ki(i,3,0)),this.setAttribute("instanceEnd",new ki(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new bu(n,6,1);return this.setAttribute("instanceColorStart",new ki(i,3,0)),this.setAttribute("instanceColorEnd",new ki(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new By(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),j0.setFromBufferAttribute(n),this.boundingBox.union(j0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$l.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($l)),$l.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared($l));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}de.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Be(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};pn.line={uniforms:ih.merge([de.common,de.fog,de.line]),vertexShader:`
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
		`};class jf extends Wt{constructor(e){super({type:"LineMaterial",uniforms:ih.clone(pn.line.uniforms),vertexShader:pn.line.vertexShader,fragmentShader:pn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const xd=new Xe,$0=new U,X0=new U,$t=new Xe,Xt=new Xe,fi=new Xe,yd=new U,Sd=new _t,qt=new $y,Y0=new U,Xl=new Zi,Yl=new Nr,pi=new Xe;let _i,es;function q0(t,e,n){return pi.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),pi.multiplyScalar(1/pi.w),pi.x=es/n.width,pi.y=es/n.height,pi.applyMatrix4(t.projectionMatrixInverse),pi.multiplyScalar(1/pi.w),Math.abs(Math.max(pi.x,pi.y))}function AR(t,e){const n=t.matrixWorld,i=t.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){qt.start.fromBufferAttribute(r,a),qt.end.fromBufferAttribute(s,a),qt.applyMatrix4(n);const c=new U,u=new U;_i.distanceSqToSegment(qt.start,qt.end,u,c),u.distanceTo(c)<es*.5&&e.push({point:u,pointOnLine:c,distance:_i.origin.distanceTo(u),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function bR(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;_i.at(1,fi),fi.w=1,fi.applyMatrix4(e.matrixWorldInverse),fi.applyMatrix4(i),fi.multiplyScalar(1/fi.w),fi.x*=s.x/2,fi.y*=s.y/2,fi.z=0,yd.copy(fi),Sd.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if($t.fromBufferAttribute(l,d),Xt.fromBufferAttribute(c,d),$t.w=1,Xt.w=1,$t.applyMatrix4(Sd),Xt.applyMatrix4(Sd),$t.z>h&&Xt.z>h)continue;if($t.z>h){const v=$t.z-Xt.z,S=($t.z-h)/v;$t.lerp(Xt,S)}else if(Xt.z>h){const v=Xt.z-$t.z,S=(Xt.z-h)/v;Xt.lerp($t,S)}$t.applyMatrix4(i),Xt.applyMatrix4(i),$t.multiplyScalar(1/$t.w),Xt.multiplyScalar(1/Xt.w),$t.x*=s.x/2,$t.y*=s.y/2,Xt.x*=s.x/2,Xt.y*=s.y/2,qt.start.copy($t),qt.start.z=0,qt.end.copy(Xt),qt.end.z=0;const x=qt.closestPointToPointParameter(yd,!0);qt.at(x,Y0);const g=fo.lerp($t.z,Xt.z,x),f=g>=-1&&g<=1,_=yd.distanceTo(Y0)<es*.5;if(f&&_){qt.start.fromBufferAttribute(l,d),qt.end.fromBufferAttribute(c,d),qt.start.applyMatrix4(o),qt.end.applyMatrix4(o);const v=new U,S=new U;_i.distanceSqToSegment(qt.start,qt.end,S,v),n.push({point:S,pointOnLine:v,distance:_i.origin.distanceTo(S),object:t,face:null,faceIndex:d,uv:null,uv1:null})}}}class CR extends an{constructor(e=new iS,n=new jf({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)$0.fromBufferAttribute(n,o),X0.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+$0.distanceTo(X0);const s=new bu(r,2,1);return e.setAttribute("instanceDistanceStart",new ki(s,1,0)),e.setAttribute("instanceDistanceEnd",new ki(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;_i=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;es=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Yl.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=es*.5;else{const h=Math.max(r.near,Yl.distanceToPoint(_i.origin));c=q0(r,h,l.resolution)}if(Yl.radius+=c,_i.intersectsSphere(Yl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Xl.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=es*.5;else{const h=Math.max(r.near,Xl.distanceToPoint(_i.origin));u=q0(r,h,l.resolution)}Xl.expandByScalar(u),_i.intersectsBox(Xl)!==!1&&(i?AR(this,n):bR(this,r,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(xd),this.material.uniforms.resolution.value.set(xd.z,xd.w))}}const rS={motorway:["#f2d58a",2.4,"#1a1814",4.2,1],trunk:["#ece2c6",1.6,"#1a1814",3,.9],primary:["#d8d2c3",1,null,0,.7],country:["#f4f1ea",1.6,"#121211",3.4,.95],state:["#f4f1ea",1,null,0,.55]},RR={motorway:1/0,trunk:1300,primary:520,country:1/0,state:1/0},PR={motorway:60,trunk:60,primary:60,country:0,state:0},K0=12;function LR(t,e,n,i){const r=t.length/3,s=new Float32Array(r);for(let o=0;o<r;o++){const a=t[o*3],l=t[o*3+1],c=t[o*3+2],u=e.fromX(a),h=e.fromZ(c);if(n(u,h)){s[o]=l+K0;continue}const d=i(u,h);s[o]=(d===null?l:Math.max(l,d))+K0}return s}class DR{constructor(e,n,i,r){Object.assign(this,{scene:e,name:n,segs:i,P:r});const[s,o,a,l,c]=rS[n],u={transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-40};this.mats=[new jf({color:s,linewidth:o,opacity:c,...u})],a&&this.mats.unshift(new jf({color:a,linewidth:l,opacity:.55*c,...u})),this.geometry=new iS,this.objects=this.mats.map((h,d)=>{const p=new CR(this.geometry,h);return p.frustumCulled=!1,p.renderOrder=10+d,e.add(p),p}),this.pos=new Float32Array(i.length),this.visible=!0}drape(e,n){const i=LR(this.segs,this.P,e,n),r=this.pos;for(let s=0;s<i.length;s++)r[s*3]=this.segs[s*3],r[s*3+1]=i[s],r[s*3+2]=this.segs[s*3+2];this.geometry.setPositions(r)}setScale(e,n){for(const i of this.objects)i.scale.y=e,i.position.y=.02+.05*n}setVisible(e){this.visible=e,this._apply()}updateDistance(e,n=!1){const i=this.near?1.05:.95,r=e<RR[this.name]*i&&!(n&&e<PR[this.name]/i);r!==this.near&&(this.near=r,this._apply())}_apply(){for(const e of this.objects)e.visible=this.visible&&this.near!==!1}setResolution(e,n){for(const i of this.mats)i.resolution.set(e,n)}dispose(){for(const e of this.objects)this.scene.remove(e);this.geometry.dispose();for(const e of this.mats)e.dispose()}}const sS=[["home","Pacific Northwest",{ll:[-122.6,46],dist:2400,polar:.42,az:0}],["ocean","Offshore approach",{ll:[-127.5,45.4],dist:2300,polar:.85,az:.75}],["puget","Puget Sound",{ll:[-122.35,47.55],dist:210,polar:.75,az:0}],["seattle","Seattle streets",{ll:[-122.32,47.605],dist:16,polar:.8,az:.25}],["mercer","Mercer Island",{ll:[-122.23,47.57],dist:9,polar:.7,az:0}],["fraser","Fraser Valley",{ll:[-122.3,49.1],dist:170,polar:.8,az:.15}],["skagit","Skagit & Nooksack",{ll:[-122.05,48.62],dist:170,polar:.8,az:0}],["olympics","Olympic Peninsula",{ll:[-123.65,47.75],dist:230,polar:.8,az:.4}],["rainier","Mount Rainier",{ll:[-121.76,46.85],dist:75,polar:.95,az:.3}],["portland","Portland & the Gorge",{ll:[-122.2,45.6],dist:190,polar:.8,az:0}],["willamette","Willamette Valley",{ll:[-123,44.75],dist:330,polar:.7,az:0}],["basin","Columbia Basin",{ll:[-119.4,46.8],dist:480,polar:.65,az:0}]],Z0=Object.fromEntries(sS.map(([t,,e])=>[t,e]));function mr(t,e){this.x=t,this.y=e}mr.prototype={clone(){return new mr(this.x,this.y)},add(t){return this.clone()._add(t)},sub(t){return this.clone()._sub(t)},multByPoint(t){return this.clone()._multByPoint(t)},divByPoint(t){return this.clone()._divByPoint(t)},mult(t){return this.clone()._mult(t)},div(t){return this.clone()._div(t)},rotate(t){return this.clone()._rotate(t)},rotateAround(t,e){return this.clone()._rotateAround(t,e)},matMult(t){return this.clone()._matMult(t)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(t){return this.x===t.x&&this.y===t.y},dist(t){return Math.sqrt(this.distSqr(t))},distSqr(t){const e=t.x-this.x,n=t.y-this.y;return e*e+n*n},angle(){return Math.atan2(this.y,this.x)},angleTo(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith(t){return this.angleWithSep(t.x,t.y)},angleWithSep(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult(t){const e=t[0]*this.x+t[1]*this.y,n=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=n,this},_add(t){return this.x+=t.x,this.y+=t.y,this},_sub(t){return this.x-=t.x,this.y-=t.y,this},_mult(t){return this.x*=t,this.y*=t,this},_div(t){return this.x/=t,this.y/=t,this},_multByPoint(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint(t){return this.x/=t.x,this.y/=t.y,this},_unit(){return this._div(this.mag()),this},_perp(){const t=this.y;return this.y=this.x,this.x=-t,this},_rotate(t){const e=Math.cos(t),n=Math.sin(t),i=e*this.x-n*this.y,r=n*this.x+e*this.y;return this.x=i,this.y=r,this},_rotateAround(t,e){const n=Math.cos(t),i=Math.sin(t),r=e.x+n*(this.x-e.x)-i*(this.y-e.y),s=e.y+i*(this.x-e.x)+n*(this.y-e.y);return this.x=r,this.y=s,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:mr};mr.convert=function(t){if(t instanceof mr)return t;if(Array.isArray(t))return new mr(+t[0],+t[1]);if(t.x!==void 0&&t.y!==void 0)return new mr(+t.x,+t.y);throw new Error("Expected [x, y] or {x, y} point format")};class oS{constructor(e,n,i,r,s){this.properties={},this.extent=i,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=r,this._values=s,e.readFields(NR,this,n)}loadGeometry(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos,i=[];let r,s=1,o=0,a=0,l=0;for(;e.pos<n;){if(o<=0){const c=e.readVarint();s=c&7,o=c>>3}if(o--,s===1||s===2)a+=e.readSVarint(),l+=e.readSVarint(),s===1&&(r&&i.push(r),r=[]),r&&r.push(new mr(a,l));else if(s===7)r&&r.push(r[0].clone());else throw new Error(`unknown command ${s}`)}return r&&i.push(r),i}bbox(){const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos;let i=1,r=0,s=0,o=0,a=1/0,l=-1/0,c=1/0,u=-1/0;for(;e.pos<n;){if(r<=0){const h=e.readVarint();i=h&7,r=h>>3}if(r--,i===1||i===2)s+=e.readSVarint(),o+=e.readSVarint(),s<a&&(a=s),s>l&&(l=s),o<c&&(c=o),o>u&&(u=o);else if(i!==7)throw new Error(`unknown command ${i}`)}return[a,c,l,u]}toGeoJSON(e,n,i){const r=this.extent*Math.pow(2,i),s=this.extent*e,o=this.extent*n,a=this.loadGeometry();function l(d){return[(d.x+s)*360/r-180,360/Math.PI*Math.atan(Math.exp((1-(d.y+o)*2/r)*Math.PI))-90]}function c(d){return d.map(l)}let u;if(this.type===1){const d=[];for(const m of a)d.push(m[0]);const p=c(d);u=d.length===1?{type:"Point",coordinates:p[0]}:{type:"MultiPoint",coordinates:p}}else if(this.type===2){const d=a.map(c);u=d.length===1?{type:"LineString",coordinates:d[0]}:{type:"MultiLineString",coordinates:d}}else if(this.type===3){const d=IR(a),p=[];for(const m of d)p.push(m.map(c));u=p.length===1?{type:"Polygon",coordinates:p[0]}:{type:"MultiPolygon",coordinates:p}}else throw new Error("unknown feature type");const h={type:"Feature",geometry:u,properties:this.properties};return this.id!=null&&(h.id=this.id),h}}oS.types=["Unknown","Point","LineString","Polygon"];function NR(t,e,n){t===1?e.id=n.readVarint():t===2?UR(n,e):t===3?e.type=n.readVarint():t===4&&(e._geometry=n.pos)}function UR(t,e){const n=t.readVarint()+t.pos;for(;t.pos<n;){const i=e._keys[t.readVarint()],r=e._values[t.readVarint()];e.properties[i]=r}}function IR(t){const e=t.length;if(e<=1)return[t];const n=[];let i,r;for(let s=0;s<e;s++){const o=FR(t[s]);o!==0&&(r===void 0&&(r=o<0),r===o<0?(i&&n.push(i),i=[t[s]]):i&&i.push(t[s]))}return i&&n.push(i),n}function FR(t){let e=0;for(let n=0,i=t.length,r=i-1,s,o;n<i;r=n++)s=t[n],o=t[r],e+=(o.x-s.x)*(s.y+o.y);return e}class OR{constructor(e,n){this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(kR,this,n),this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const n=this._pbf.readVarint()+this._pbf.pos;return new oS(this._pbf,n,this.extent,this._keys,this._values)}}function kR(t,e,n){t===15?e.version=n.readVarint():t===1?e.name=n.readString():t===5?e.extent=n.readVarint():t===2?e._features.push(n.pos):t===3?e._keys.push(n.readString()):t===4&&e._values.push(zR(n))}function zR(t){let e=null;const n=t.readVarint()+t.pos;for(;t.pos<n;){const i=t.readVarint()>>3;e=i===1?t.readString():i===2?t.readFloat():i===3?t.readDouble():i===4?t.readVarint64():i===5?t.readVarint():i===6?t.readSVarint():i===7?t.readBoolean():null}return e}class BR{constructor(e,n){this.layers=e.readFields(HR,{},n)}}function HR(t,e,n){if(t===3){const i=new OR(n,n.readVarint()+n.pos);i.length&&(e[i.name]=i)}}const $f=65536*65536,Q0=1/$f,VR=12,J0=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),Md=0,ql=1,ko=2,Kl=5;class GR{constructor(e=new Uint8Array(16)){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer),this.pos=0,this.type=0,this.length=this.buf.length}readFields(e,n,i=this.length){for(;this.pos<i;){const r=this.readVarint(),s=r>>3,o=this.pos;this.type=r&7,e(s,n,this),this.pos===o&&this.skip(r)}return n}readMessage(e,n){return this.readFields(e,n,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*$f;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*$f;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const n=this.buf;let i,r;return r=n[this.pos++],i=r&127,r<128||(r=n[this.pos++],i|=(r&127)<<7,r<128)||(r=n[this.pos++],i|=(r&127)<<14,r<128)||(r=n[this.pos++],i|=(r&127)<<21,r<128)?i:(r=n[this.pos],i|=(r&15)<<28,WR(i,e,this))}readVarint64(){return this.readVarint(!0)}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,n=this.pos;return this.pos=e,e-n>=VR&&J0?J0.decode(this.buf.subarray(n,e)):iP(this.buf,n,e)}readBytes(){const e=this.readVarint()+this.pos,n=this.buf.subarray(this.pos,e);return this.pos=e,n}readPackedVarint(e=[],n){const i=this.readPackedEnd();for(;this.pos<i;)e.push(this.readVarint(n));return e}readPackedSVarint(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===ko?this.readVarint()+this.pos:this.pos+1}skip(e){const n=e&7;if(n===Md)for(;this.buf[this.pos++]>127;);else if(n===ko)this.pos=this.readVarint()+this.pos;else if(n===Kl)this.pos+=4;else if(n===ql)this.pos+=8;else throw new Error(`Unimplemented type: ${n}`)}writeTag(e,n){this.writeVarint(e<<3|n)}realloc(e){let n=this.length||16;for(;n<this.pos+e;)n*=2;if(n!==this.length){const i=new Uint8Array(n);i.set(this.buf),this.buf=i,this.dataView=new DataView(i.buffer),this.length=n}}finish(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)}writeFixed32(e){this.realloc(4),this.dataView.setInt32(this.pos,e,!0),this.pos+=4}writeSFixed32(e){this.realloc(4),this.dataView.setInt32(this.pos,e,!0),this.pos+=4}writeFixed64(e){this.realloc(8),this.dataView.setInt32(this.pos,e&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(e*Q0),!0),this.pos+=8}writeSFixed64(e){this.realloc(8),this.dataView.setInt32(this.pos,e&-1,!0),this.dataView.setInt32(this.pos+4,Math.floor(e*Q0),!0),this.pos+=8}writeVarint(e){if(e=+e||0,e>268435455||e<0){jR(e,this);return}this.realloc(4),this.buf[this.pos++]=e&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),!(e<=127)&&(this.buf[this.pos++]=e>>>7&127)))}writeSVarint(e){this.writeVarint(e<0?-e*2-1:e*2)}writeBoolean(e){this.writeVarint(+e)}writeString(e){e=String(e),this.realloc(e.length*4),this.pos++;const n=this.pos;this.pos=rP(this.buf,e,this.pos);const i=this.pos-n;i>=128&&ev(n,i,this),this.pos=n-1,this.writeVarint(i),this.pos+=i}writeFloat(e){this.realloc(4),this.dataView.setFloat32(this.pos,e,!0),this.pos+=4}writeDouble(e){this.realloc(8),this.dataView.setFloat64(this.pos,e,!0),this.pos+=8}writeBytes(e){const n=e.length;this.writeVarint(n),this.realloc(n);for(let i=0;i<n;i++)this.buf[this.pos++]=e[i]}writeRawMessage(e,n){this.pos++;const i=this.pos;e(n,this);const r=this.pos-i;r>=128&&ev(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r}writeMessage(e,n,i){this.writeTag(e,ko),this.writeRawMessage(n,i)}writePackedVarint(e,n){n.length&&this.writeMessage(e,YR,n)}writePackedSVarint(e,n){n.length&&this.writeMessage(e,qR,n)}writePackedBoolean(e,n){n.length&&this.writeMessage(e,QR,n)}writePackedFloat(e,n){n.length&&this.writeMessage(e,KR,n)}writePackedDouble(e,n){n.length&&this.writeMessage(e,ZR,n)}writePackedFixed32(e,n){n.length&&this.writeMessage(e,JR,n)}writePackedSFixed32(e,n){n.length&&this.writeMessage(e,eP,n)}writePackedFixed64(e,n){n.length&&this.writeMessage(e,tP,n)}writePackedSFixed64(e,n){n.length&&this.writeMessage(e,nP,n)}writeBytesField(e,n){this.writeTag(e,ko),this.writeBytes(n)}writeFixed32Field(e,n){this.writeTag(e,Kl),this.writeFixed32(n)}writeSFixed32Field(e,n){this.writeTag(e,Kl),this.writeSFixed32(n)}writeFixed64Field(e,n){this.writeTag(e,ql),this.writeFixed64(n)}writeSFixed64Field(e,n){this.writeTag(e,ql),this.writeSFixed64(n)}writeVarintField(e,n){this.writeTag(e,Md),this.writeVarint(n)}writeSVarintField(e,n){this.writeTag(e,Md),this.writeSVarint(n)}writeStringField(e,n){this.writeTag(e,ko),this.writeString(n)}writeFloatField(e,n){this.writeTag(e,Kl),this.writeFloat(n)}writeDoubleField(e,n){this.writeTag(e,ql),this.writeDouble(n)}writeBooleanField(e,n){this.writeVarintField(e,+n)}}function WR(t,e,n){const i=n.buf;let r,s;if(s=i[n.pos++],r=(s&112)>>4,s<128||(s=i[n.pos++],r|=(s&127)<<3,s<128)||(s=i[n.pos++],r|=(s&127)<<10,s<128)||(s=i[n.pos++],r|=(s&127)<<17,s<128)||(s=i[n.pos++],r|=(s&127)<<24,s<128)||(s=i[n.pos++],r|=(s&1)<<31,s<128))return Ds(t,r,e);throw new Error("Expected varint not more than 10 bytes")}function Ds(t,e,n){return n?e*4294967296+(t>>>0):(e>>>0)*4294967296+(t>>>0)}function jR(t,e){let n,i;if(t>=0?(n=t%4294967296|0,i=t/4294967296|0):(n=~(-t%4294967296),i=~(-t/4294967296),n^4294967295?n=n+1|0:(n=0,i=i+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),$R(n,i,e),XR(i,e)}function $R(t,e,n){n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos++]=t&127|128,t>>>=7,n.buf[n.pos]=t&127}function XR(t,e){const n=(t&7)<<4;e.buf[e.pos++]|=n|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127)))))}function ev(t,e,n){const i=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(Math.LN2*7));n.realloc(i);for(let r=n.pos-1;r>=t;r--)n.buf[r+i]=n.buf[r]}function YR(t,e){for(let n=0;n<t.length;n++)e.writeVarint(t[n])}function qR(t,e){for(let n=0;n<t.length;n++)e.writeSVarint(t[n])}function KR(t,e){for(let n=0;n<t.length;n++)e.writeFloat(t[n])}function ZR(t,e){for(let n=0;n<t.length;n++)e.writeDouble(t[n])}function QR(t,e){for(let n=0;n<t.length;n++)e.writeBoolean(t[n])}function JR(t,e){for(let n=0;n<t.length;n++)e.writeFixed32(t[n])}function eP(t,e){for(let n=0;n<t.length;n++)e.writeSFixed32(t[n])}function tP(t,e){for(let n=0;n<t.length;n++)e.writeFixed64(t[n])}function nP(t,e){for(let n=0;n<t.length;n++)e.writeSFixed64(t[n])}function iP(t,e,n){let i="",r=e;for(;r<n;){const s=t[r];let o=null,a=s>239?4:s>223?3:s>191?2:1;if(r+a>n)break;let l,c,u;a===1?s<128&&(o=s):a===2?(l=t[r+1],(l&192)===128&&(o=(s&31)<<6|l&63,o<=127&&(o=null))):a===3?(l=t[r+1],c=t[r+2],(l&192)===128&&(c&192)===128&&(o=(s&15)<<12|(l&63)<<6|c&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):a===4&&(l=t[r+1],c=t[r+2],u=t[r+3],(l&192)===128&&(c&192)===128&&(u&192)===128&&(o=(s&15)<<18|(l&63)<<12|(c&63)<<6|u&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,a=1):o>65535&&(o-=65536,i+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),i+=String.fromCharCode(o),r+=a}return i}function rP(t,e,n){for(let i=0,r,s;i<e.length;i++){if(r=e.charCodeAt(i),r>55295&&r<57344)if(s)if(r<56320){t[n++]=239,t[n++]=191,t[n++]=189,s=r;continue}else r=s-55296<<10|r-56320|65536,s=null;else{r>56319||i+1===e.length?(t[n++]=239,t[n++]=191,t[n++]=189):s=r;continue}else s&&(t[n++]=239,t[n++]=191,t[n++]=189,s=null);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=r&63|128)}return n}const sP="https://tiles.openfreemap.org/planet/{v}/{z}/{x}/{y}.pbf",oP="https://tiles.openfreemap.org/planet",aS=11,lS=14,wd=8,aP=.35,ii=512,lP=80,Ed=112,tv=240,cP=8,uP=12,da=lS;function hP(t,e,n){const i=2**t,r=o=>o/i*360-180,s=o=>Math.atan(Math.sinh(Math.PI*(1-2*o/i)))*180/Math.PI;return{west:r(e),east:r(e+1),north:s(n),south:s(n+1)}}function Lu(t,e,n){const i=2**t,r=n*Math.PI/180;return[Math.floor((e+180)/360*i),Math.floor((1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i)]}function dP(t,e,n,i,{split:r=aP,minZ:s=aS,maxZ:o=lS,reach:a=1/0}={}){const l=[],c=[],u=(g,f,_)=>{const v=hP(g,f,_),S=n.toX(v.west),R=n.toX(v.east),C=n.toZ(v.north),A=n.toZ(v.south),P=Math.max(S-e[0],0,e[0]-R),X=Math.max(C-e[2],0,e[2]-A);return{d:Math.hypot(P,X,Math.max(0,e[1])),size:R-S}},h=(g,f,_)=>{const v=`${g}/${f}/${_}`,{d:S,size:R}=u(g,f,_);if(S>a)return;if(!(g<o&&R>r*Math.max(S,.5))){g>=s&&(i(v)?l.push([v,S]):c.push([v,S]));return}const C=[[2*f,2*_],[2*f+1,2*_],[2*f,2*_+1],[2*f+1,2*_+1]],A=C.map(([P,X])=>`${g+1}/${P}/${X}`);if(g<s||A.every(i)||!i(v)){for(const[P,X]of C)h(g+1,P,X);return}c.push(...A.map(P=>[P,S])),l.push([v,S])},[d,p]=Lu(wd,t.west,t.north),[m,x]=Lu(wd,t.east,t.south);for(let g=d;g<=m;g++)for(let f=p;f<=x;f++)h(wd,g,f);return l.sort((g,f)=>g[1]-f[1]),c.sort((g,f)=>g[1]-f[1]),{show:l.slice(0,lP).map(g=>g[0]),want:c.map(g=>g[0])}}const Ns=[[["motorway"],"#f2d58a",[2.2,3,4.2,6],"#2a2620"],[["trunk"],"#efdfae",[1.8,2.6,3.6,5.2],"#2a2620"],[["primary"],"#f1ece0",[1.4,2.1,3,4.6],"#3a362f"],[["secondary"],"#ece7da",[.9,1.5,2.4,3.8],"#3a362f"],[["tertiary"],"#e6e1d4",[.6,1.1,1.9,3.2],null],[["minor"],"#ddd8cb",[0,.6,1.2,2.2],null],[["service","track"],"#cfcabc",[0,0,.6,1.2],null],[["path"],"#c9c3b4",[0,0,0,.7],null]],fP="#6f99ad",pP="#6f99ad";function mP(t,e,n){const i=t.layers,r=ii/4096,s=Math.min(3,Math.max(0,e-11)),o=(u,h)=>{const d=i[u];if(d)for(let p=0;p<d.length;p++)h(d.feature(p))},a=u=>{const h=new Path2D;for(const d of u.loadGeometry())d.forEach((p,m)=>m?h.lineTo(p.x*r,p.y*r):h.moveTo(p.x*r,p.y*r)),u.type===3&&h.closePath();return h};n.clearRect(0,0,ii,ii),o("landuse",u=>{const h={residential:"rgba(222,214,200,0.22)",commercial:"rgba(232,205,190,0.3)",retail:"rgba(232,205,190,0.3)",industrial:"rgba(214,206,214,0.3)",cemetery:"rgba(170,200,160,0.3)",hospital:"rgba(240,200,200,0.35)",school:"rgba(236,226,190,0.3)",railway:"rgba(210,205,200,0.25)"}[u.properties.class];h&&(n.fillStyle=h,n.fill(a(u)))}),o("park",u=>{n.fillStyle="rgba(132,176,112,0.32)",n.fill(a(u))}),o("landcover",u=>{const h={wood:"rgba(92,132,86,0.18)",grass:"rgba(150,186,120,0.18)",wetland:"rgba(120,170,170,0.25)",sand:"rgba(230,214,170,0.3)",ice:"rgba(245,248,250,0.6)"}[u.properties.class];h&&(n.fillStyle=h,n.fill(a(u)))}),n.fillStyle=fP,o("water",u=>{u.properties.class!=="swimming_pool"&&n.fill(a(u))}),n.strokeStyle=pP,n.lineCap="round",n.lineJoin="round",o("waterway",u=>{var d;const h=(d={river:[1.2,1.8,2.6,3.6],canal:[.8,1.2,1.8,2.6],stream:[0,.5,.9,1.4]}[u.properties.class])==null?void 0:d[s];h&&(n.lineWidth=h,n.stroke(a(u)))}),e>=13&&(n.fillStyle=e>=14?"rgba(214,206,194,0.92)":"rgba(214,206,194,0.75)",n.strokeStyle="rgba(90,82,72,0.6)",n.lineWidth=.5,o("building",u=>{const h=a(u);n.fill(h),e>=14&&n.stroke(h)}));const l=Ns.map(()=>[]),c=[];o("transportation",u=>{if(u.type!==2)return;const h=Ns.findIndex(([d])=>d.includes(u.properties.class));h>=0?l[h].push(u):u.properties.class==="rail"&&e>=12&&c.push(u)});for(let u=Ns.length-1;u>=0;u--){const[,,h,d]=Ns[u],p=h[s];if(!(!p||!d)){n.strokeStyle=d,n.lineWidth=p+1.6;for(const m of l[u])n.stroke(a(m))}}for(let u=Ns.length-1;u>=0;u--){const[,h,d]=Ns[u],p=d[s];if(p){n.strokeStyle=h,n.lineWidth=p;for(const m of l[u])n.stroke(a(m))}}n.setLineDash([3,3]),n.strokeStyle="#5a5650",n.lineWidth=e>=14?1.6:1.1;for(const u of c)n.stroke(a(u));n.setLineDash([])}function gP(t){const e=2**(da-aS),[n,i]=Lu(da,t.west,t.north),[r,s]=Lu(da,t.east,t.south),o=Math.floor(n/e)*e,a=Math.floor(i/e)*e;return{x0:o,y0:a,width:r-o+1,height:s-a+1}}function vP(t,e,n){t.fill(0);for(const[i,r]of n){const[s,o,a]=i.split("/").map(Number),l=da-s,c=2**l,u=Math.max(0,o*c-e.x0),h=Math.min(e.width,(o+1)*c-e.x0),d=Math.max(0,a*c-e.y0),p=Math.min(e.height,(a+1)*c-e.y0);for(let m=d;m<p;m++)for(let x=u;x<h;x++){const g=(m*e.width+x)*4;t[g]=r,t[g+1]=l,t[g+3]=255}}}class _P{constructor(e,n,i){Object.assign(this,{renderer:e,region:n,U:i}),this.tiles=new Map,this.inflight=0,this.frameNo=0,this.visible=!0,this.failures=0,this.grid=gP(n),this.indexData=new Uint8Array(this.grid.width*this.grid.height*4),this.index=new Gi(this.indexData,this.grid.width,this.grid.height),this.index.magFilter=this.index.minFilter=Vt,this.index.needsUpdate=!0,this.tex=new nh(null,ii,ii,Ed),this.tex.source.dataReady=!1,this.tex.generateMipmaps=!0,this.tex.minFilter=Oi,this.tex.magFilter=on,this.tex.anisotropy=8,this.tex.colorSpace=Gn,this.tex.needsUpdate=!0,e.initTexture(this.tex),this.free=Array.from({length:Ed},(s,o)=>Ed-1-o),this.canvas=typeof OffscreenCanvas<"u"?new OffscreenCanvas(ii,ii):Object.assign(document.createElement("canvas"),{width:ii,height:ii}),this.ctx=this.canvas.getContext("2d");const r=2**da;i.streetTex.value=this.tex,i.streetIndex.value=this.index,i.streetGeo.value.set(this.grid.x0/r*360-180,Math.PI*(1-2*this.grid.y0/r),this.grid.width,this.grid.height),this._indexKey="",this.version=fetch(oP).then(s=>s.json()).then(s=>s.tiles[0].split("/planet/")[1].split("/")[0]).catch(()=>null)}_load(e){const n={state:"loading",used:this.frameNo,layer:-1};this.tiles.set(e,n),this.inflight++;const[i,r,s]=e.split("/").map(Number);this.version.then(o=>{if(!o)throw new Error("no tile version");return fetch(sP.replace("{v}",o).replace("{z}",i).replace("{x}",r).replace("{y}",s))}).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.arrayBuffer()}).then(o=>{n.buf=new Uint8Array(o),n.state="loaded"}).catch(()=>{n.state="failed",this.failures++}).finally(()=>{this.inflight--})}_draw(e,n){let i=this.free.pop();if(i===void 0){let s=null;for(const[o,a]of this.tiles)a.layer>=0&&a.used<this.frameNo&&(!s||a.used<s[1].used)&&(s=[o,a]);if(!s)return!1;i=s[1].layer,s[1].layer=-1}const r=Number(e.split("/")[0]);return mP(new BR(new GR(n.buf)),r,this.ctx),this._upload(i),n.layer=i,!0}_upload(e){const n=this.renderer.getContext();this.renderer.state.bindTexture(n.TEXTURE_2D_ARRAY,this.renderer.properties.get(this.tex).__webglTexture),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),n.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,e,ii,ii,1,n.RGBA,n.UNSIGNED_BYTE,this.canvas),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),this._mipsDue=!0}update(e,n,i){this.frameNo++;const r=u=>{var h;return((h=this.tiles.get(u))==null?void 0:h.layer)>=0},{show:s,want:o}=this.visible?dP(this.region,e.position.toArray(),i,r,{reach:Math.min(120,Math.max(20,n*2.2))}):{show:[],want:[]};for(const u of[...s,...o]){const h=this.tiles.get(u);h?h.used=this.frameNo:this.inflight<cP&&this._load(u)}const a=performance.now();for(const u of o){const h=this.tiles.get(u);if(!((h==null?void 0:h.state)!=="loaded"||h.layer>=0)&&(performance.now()-a>uP||!this._draw(u,h)))break}if(this._mipsDue){const u=this.renderer.getContext();this.renderer.state.bindTexture(u.TEXTURE_2D_ARRAY,this.renderer.properties.get(this.tex).__webglTexture),u.generateMipmap(u.TEXTURE_2D_ARRAY),this._mipsDue=!1}const l=s.map(u=>[u,this.tiles.get(u).layer]),c=l.map(u=>u.join(":")).sort().join(",");if(c!==this._indexKey&&(this._indexKey=c,vP(this.indexData,this.grid,l),this.index.needsUpdate=!0),this.U.streetOn.value=s.length>0?1:0,this.tiles.size>tv){const u=new Set(s),h=[...this.tiles].filter(([d,p])=>!u.has(d)&&p.state!=="loading").sort((d,p)=>d[1].used-p[1].used);for(const[d,p]of h.slice(0,this.tiles.size-tv))p.layer>=0&&this.free.push(p.layer),this.tiles.delete(d)}return this.pending=o.filter(u=>!r(u)).length,s.length}setVisible(e){this.visible=e}dispose(){this.tex.dispose(),this.index.dispose(),this.tiles.clear()}}const xP=`
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
  }`,yP=`
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
  }`,Xf=new Gi(new Uint8Array([0]),1,1,Xa);Xf.needsUpdate=!0;function Td(t,e={}){return new Wt({vertexShader:xP,fragmentShader:yP,uniforms:{uExag:t.exag,uFlat:t.flat,uShadeK:t.shadeK,uStyle:t.style,uHaze:t.haze,uHazeRange:t.hazeRange,uBg:t.bg,uInterval:{value:100},uWater:t.water,uWaterRect:t.waterRect,uWaterOn:t.waterOn,uTileWater:{value:e.tileWater??Xf},uTileWaterRect:{value:e.tileWaterRect??new Xe},uTileWaterOn:{value:e.tileWater?1:0},uGust:t.gust,uGustRect:t.gustRect,uGustOn:t.gustOn,uGustStops:t.gustStops,uGustColors:t.gustColors,uProj:t.proj,uStreetTex:t.streetTex,uStreetIndex:t.streetIndex,uStreetGeo:t.streetGeo,uStreetOn:t.streetOn,uMask:{value:e.mask??Xf},uMaskRect:{value:e.maskRect??new Xe},uMaskEps:{value:e.maskEps??new Be},uMaskOn:{value:e.mask?1:0},uHole:{value:e.hole??new Xe},uHoleOn:{value:e.hole?1:0},uSinkBox:{value:e.sinkBox??new Xe}}})}const SP={relief:0,mono:1,contours:2},nv="#121211",MP=[[1,800],[2,1/0]],wP=[[1,1100],[2,1/0]],EP=128;class vm{constructor(e,n,i){Kn(this,"_tick",()=>{var u,h;const e=performance.now(),n=Math.min(this.clock.getDelta(),.05),i=this.flight;if(i){const d=i.dur>0?Math.min(1,(e-i.t0)/i.dur):1,p=OC(d);this.camera.position.lerpVectors(i.fromPos,i.pos,p),this.controls.target.lerpVectors(i.fromTarget,i.target,p),i.target.equals(i.fromTarget)||(this.camera.position.y+=Math.sin(Math.PI*p)*i.fromPos.distanceTo(i.pos)*.12),d>=1&&(this.flight=null)}if(this.held.size){const d=zC(this.held,this.camera.position.toArray(),this.controls.target.toArray(),n);this.camera.position.x+=d[0],this.camera.position.z+=d[2],this.controls.target.x+=d[0],this.controls.target.z+=d[2]}const r=this.reducedMotion;this.controls.enableDamping=!r;const s=this.camera.position.distanceTo(this.controls.target);this.controls.rotateSpeed=WC(s),this.controls.update();for(const[d,p]of[["flat",5],["style",8]])this.U[d].value=HC(this.U[d].value,this.targets[d],n,p,r);this.camera.near=fo.clamp(s*.01,.05,20),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this._updateLevels(s);const o=this.detail.update(this.camera,s);this._drapeDue&&e>this._drapeDue&&(this._drapeDue=0,this._drape());const a=this.streets.update(this.camera,s,this.P),l=this.e,c=this.U.flat.value;for(const d of Object.values(this.lines))d.setScale(l,c),d.updateDistance(s,a>0);(u=this.rivers)==null||u.update(s),this.U.shadeK.value=fo.clamp(Math.sqrt(s/120),1,3.2),this.U.hazeRange.value.set(s,s*4),this.frame={dist:s,tiles:o,streets:a,streetsPending:this.streets.pending+this.streets.inflight,flat:c,exag:this.U.exag.value,e:l,failures:this.detail.failures},(h=this.onFrame)==null||h.call(this,this),this.renderer.render(this.scene,this.camera),this._raf=requestAnimationFrame(this._tick)});this.bundle=n,this.P=n.P,this.held=new Set,this.flight=null,this._view="3d";const r=this.renderer=new Py({canvas:e,antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(devicePixelRatio,1.5)),r.setSize(innerWidth,innerHeight),this.scene=new Ly,this.scene.background=new je(nv),this.camera=new Ln(30,innerWidth/innerHeight,.5,12e3);const s=this.P,o=n.manifest.region,a=.5/n.manifest.water.overview.per_deg;i.flipY=!1,i.colorSpace=Gn,i.needsUpdate=!0,this.U={exag:{value:1.5},flat:{value:0},style:{value:0},haze:{value:.45},bg:{value:new je(nv)},shadeK:{value:1},hazeRange:{value:new Be(1e3,4e3)},proj:{value:new Xe(s.lon0,s.lat0,s.kx,s.kz)},streetTex:{value:null},streetIndex:{value:null},streetGeo:{value:new Xe},streetOn:{value:0},gust:{value:null},gustRect:{value:new Xe},gustOn:{value:0},gustStops:{value:new Array(6).fill(0)},gustColors:{value:Array.from({length:6},()=>new je)},water:{value:i},waterOn:{value:1},waterRect:{value:new Xe(s.toX(o.west-a),s.toZ(o.north+a),s.toX(o.east+a),s.toZ(o.south-a))}},this.targets={flat:0,style:0},this.regionBox=new Xe(s.toX(o.west),s.toX(o.east),s.toZ(o.north),s.toZ(o.south)),this.detail=new TR(this.scene,this.U,n,s,h=>Td(this.U,h));const l=(h,d)=>new Xe(h.x+d,h.y-d,h.z+d,h.w-d),c=Td(this.U,{mask:this.detail.mask,maskRect:this.detail.maskRect,maskEps:this.detail.maskEps});c.polygonOffset=!0,c.polygonOffsetFactor=-1,c.polygonOffsetUnits=-2,this.levels=[this._levels(n.outer,Td(this.U,{hole:l(this.regionBox,1),sinkBox:l(this.regionBox,10)}),wP,0),this._levels(n.overview,c,MP,0)],this.elevAt=(h,d)=>this.detail.sample(h,d)??n.overview.sample(h,d)??n.outer.sample(h,d)??0,this.lines=Object.fromEntries(Object.entries(n.lines).map(([h,d])=>[h,new DR(this.scene,h,d,s)])),this._drape=()=>{var p;const h=(m,x)=>this.detail.isShown(m,x),d=(m,x)=>n.overview.sample(m,x);for(const m of Object.values(this.lines))m.drape(h,d);(p=this.rivers)==null||p.drape(this.elevAt)},this._drape(),this.streets=new _P(this.renderer,o,this.U),this.detail.onChange=()=>{this._drapeDue=performance.now()+120},this._resolution();const u=this.controls=new sR(this.camera,e);u.enableDamping=!0,u.dampingFactor=.08,u.screenSpacePanning=!1,u.zoomToCursor=!0,u.maxPolarAngle=Math.PI*.47,u.minDistance=4,u.maxDistance=4500,u.mouseButtons={LEFT:wi.PAN,MIDDLE:wi.DOLLY,RIGHT:wi.ROTATE},u.touches={ONE:Fi.PAN,TWO:Fi.DOLLY_ROTATE},u.addEventListener("start",()=>{this.flight=null}),this._onContext=h=>h.preventDefault(),e.addEventListener("contextmenu",this._onContext),this._onKeyDown=h=>{GC(h)&&(h.preventDefault(),this.held.add(h.key),this.flight=null)},this._onKeyUp=h=>h.key==="Meta"?this.held.clear():this.held.delete(h.key),this._onBlur=()=>this.held.clear(),this._onResize=()=>{var h;r.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this._resolution(),(h=this.onResize)==null||h.call(this)},addEventListener("keydown",this._onKeyDown),addEventListener("keyup",this._onKeyUp),addEventListener("blur",this._onBlur),addEventListener("resize",this._onResize),this._motion=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.jumpTo("home"),this.clock=new jy,this._v=new U,this.frame={dist:0,tiles:0,flat:0},window.__earthnote=this,this._raf=requestAnimationFrame(this._tick)}static async create(e,n){const i=await new fm().loadAsync(n.waterUrl);return new vm(e,n,i)}_levels(e,n,i,r){return{grid:e,material:n,order:r,levels:i.map(([s,o])=>({step:s,far:o,mesh:null})),current:-1}}_levelMesh(e,n){if(!n.mesh){const{ncols:i,nrows:r}=e.grid.meta;n.mesh=new Xs;for(const s of Bw(i,r,EP*n.step,n.step)){const o=new an(yx(Yy,e.grid,this.P,n.step,0,s),e.material);o.renderOrder=e.order,n.mesh.add(o)}this.scene.add(n.mesh)}return n.mesh}_updateLevels(e){const n=this.camera.position,i=this.regionBox,r=Math.min(n.x-i.x,i.y-n.x,n.z-i.z,i.w-n.z),s=Math.max(e,r>0?Math.hypot(r,n.y):e);for(const o of this.levels){const a=o===this.levels[0]?s:e;let l=o.current<0?o.levels.findIndex(u=>a<=u.far):o.current;for(;l<o.levels.length-1&&a>o.levels[l].far*1.1;)l++;for(;l>0&&a<o.levels[l-1].far*.9;)l--;if(l===o.current)continue;const c=this._levelMesh(o,o.levels[l]);for(const u of o.levels)u.mesh&&(u.mesh.visible=u.mesh===c);o.current=l}}_resolution(){for(const e of Object.values(this.lines??{}))e.setResolution(innerWidth,innerHeight)}get reducedMotion(){var e;return!!((e=this._motion)!=null&&e.matches)}get e(){return this.U.exag.value*.001*(1-this.U.flat.value)}project(e,n,i){const r=this._v.set(e,n,i).project(this.camera);return[(r.x+1)/2*innerWidth,(1-r.y)/2*innerHeight,r.z]}_pose(e){return kC(e,this.P,this.elevAt,this.e)}jumpTo(e){const n=this._pose(Z0[e]);this.camera.position.set(...n.pos),this.controls.target.set(...n.target)}flyTo(e){const n=this._pose(Z0[e]);this._fly(new U(...n.pos),new U(...n.target),1800)}flyToPoint(e,n,i=60){const r=new U(this.P.toX(e),this.elevAt(e,n)*this.e,this.P.toZ(n)),s=this.camera.position.clone().sub(this.controls.target).normalize();this._view==="2d"&&s.set(0,1,.001).normalize(),this._fly(r.clone().add(s.multiplyScalar(i)),r,1500)}orbit(e){const n=this.controls.target,i=jC(this.camera.position.toArray(),n.toArray(),e,.001,this.controls.maxPolarAngle);this._fly(new U(...i),n.clone(),350)}_fly(e,n,i){this.flight={t0:performance.now(),dur:BC(i,this.reducedMotion),fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),pos:e,target:n}}setStyle(e){this.targets.style=SP[e]}setExag(e){const n=e/this.U.exag.value,i=this.controls.target.y*(n-1);this.U.exag.value=e,this.controls.target.y+=i,this.camera.position.y+=i}addRivers(e){this.rivers=e,e.drape(this.elevAt)}setLayer(e,n){var i;e==="streets"?this.streets.setVisible(n):(i=this.lines[e])==null||i.setVisible(n)}setView(e){var a;if(e===this._view)return;this._view=e;const n=e==="2d";this.targets.flat=n?1:0;const i=new Cu().setFromVector3(this.camera.position.clone().sub(this.controls.target));n&&(this._savedPolar=i.phi),i.phi=n?.001:this._savedPolar??.7,this.controls.minPolarAngle=0,this.controls.maxPolarAngle=n?.001:Math.PI*.47;const r=this.controls.target.clone(),s=this.P.fromX(r.x),o=this.P.fromZ(r.z);r.y=n?0:this.elevAt(s,o)*this.U.exag.value*.001,this._fly(r.clone().add(new U().setFromSpherical(i)),r,900),(a=this.onView)==null||a.call(this,e)}dispose(){var e,n;cancelAnimationFrame(this._raf),removeEventListener("keydown",this._onKeyDown),removeEventListener("keyup",this._onKeyUp),removeEventListener("blur",this._onBlur),removeEventListener("resize",this._onResize),this.renderer.domElement.removeEventListener("contextmenu",this._onContext);for(const i of Object.values(this.lines))i.dispose();for(const i of this.levels){for(const r of i.levels)(e=r.mesh)==null||e.traverse(s=>{var o;return(o=s.geometry)==null?void 0:o.dispose()});i.material.dispose()}(n=this.rivers)==null||n.dispose(),this.streets.dispose(),this.detail.dispose(),this.controls.dispose(),this.renderer.dispose(),window.__earthnote===this&&delete window.__earthnote}}function iv({label:t,options:e,value:n,onChange:i}){return M.jsxs("div",{className:"ctl-row",children:[M.jsx("span",{className:"eyebrow",children:t}),M.jsx("div",{className:"seg",role:"group","aria-label":t,children:e.map(([r,s])=>M.jsx("button",{"aria-pressed":n===r,onClick:()=>{r!==n&&i(r)},children:s},r))})]})}function TP({label:t,sub:e,k:n,on:i,onChange:r,swatch:s}){return M.jsxs("button",{className:"tog",role:"switch","aria-checked":i,"aria-label":t,onClick:()=>r(!i),children:[M.jsx("span",{className:"sw"}),M.jsxs("span",{className:"t",children:[t,e&&M.jsx("small",{children:e})]}),s,n&&M.jsx("kbd",{children:n})]})}function AP({scene:t}){const[e,n]=Z.useState("3d"),[i,r]=Z.useState("relief"),[s,o]=Z.useState(t.U.exag.value);return Z.useEffect(()=>(t.onView=n,()=>{t.onView=null}),[t]),M.jsxs("div",{className:"panel controls",children:[M.jsx(iv,{label:"View",options:[["3d","3D"],["2d","2D"]],value:e,onChange:a=>{n(a),t.setView(a)}}),M.jsx(iv,{label:"Style",options:[["relief","Relief"],["mono","Mono"],["contours","Contours"]],value:i,onChange:a=>{r(a),t.setStyle(a)}}),M.jsxs("label",{className:"ctl-row slider",children:["Vertical exaggeration ",M.jsxs("span",{className:"mono",children:[s.toFixed(1),"×"]}),M.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:s,"aria-label":"Vertical exaggeration",disabled:e==="2d",onChange:a=>{const l=+a.target.value;o(l),t.setExag(l)}})]}),M.jsx("div",{className:"hint",children:"Drag to move · right-drag or Shift-drag to rotate · scroll to zoom · arrow keys to glide"})]})}const Ad=[["motorway","Motorways","interstates and freeways","M"],["trunk","Highways","trunk roads","H"],["primary","Main roads","primary roads","R"],["borders","Borders","country, state and province","B"],["places","Place names","cities, towns and peaks","N"],["streets","Street detail","every road, building and shoreline as you zoom in","S"]];function bP({scene:t,labels:e}){const[n,i]=Z.useState(()=>Object.fromEntries(Ad.map(([o])=>[o,!0]))),r=(o,a)=>{i(l=>({...l,[o]:a})),o==="borders"?(t.setLayer("country",a),t.setLayer("state",a)):o==="places"?e==null||e.setVisible(a):t.setLayer(o,a)},s=Z.useRef(null);return s.current=o=>{if(o.metaKey||o.ctrlKey||o.altKey||pm(o.target))return;const a=Ad.find(([,,,l])=>{var c;return l.toLowerCase()===((c=o.key)==null?void 0:c.toLowerCase())});a&&r(a[0],!n[a[0]])},Z.useEffect(()=>{const o=a=>{var l;return(l=s.current)==null?void 0:l.call(s,a)};return addEventListener("keydown",o),()=>removeEventListener("keydown",o)},[]),M.jsxs("div",{className:"panel layers-panel",children:[M.jsx("div",{className:"eyebrow",children:"Base map"}),Ad.map(([o,a,l,c])=>M.jsx(TP,{k:c,label:a,sub:l,on:n[o],onChange:u=>r(o,u)},o))]})}function CP({active:t,onPlace:e}){return M.jsxs("nav",{className:"panel goto","aria-label":"Go to",children:[M.jsx("div",{className:"eyebrow",children:"Go to"}),M.jsx("div",{className:"row",children:sS.map(([n,i])=>M.jsx("button",{"aria-pressed":t===n,onClick:()=>e(n),children:i},n))})]})}function RP(t,e,n=8){const i=e.trim().toLowerCase();if(!i)return[];const r=[],s=[];for(const o of t){const a=o.name.toLowerCase();a.startsWith(i)?r.push(o):a.includes(i)&&s.push(o)}return[...r,...s].slice(0,n)}const PP={city:"City",town:"Town",peak:"Peak"};function LP({places:t,detail:e,onPick:n}){const[i,r]=Z.useState(""),[s,o]=Z.useState(0),a=Z.useMemo(()=>RP(t,i),[t,i]),l=c=>{n(c),r(""),o(0)};return M.jsxs("header",{className:"panel header",children:[M.jsxs("div",{className:"title-row",children:[M.jsx("h1",{children:"Earthnote · Pacific Northwest"}),M.jsx("span",{className:"detail-tag mono",title:"Terrain detail at the view centre",children:e})]}),M.jsx("p",{children:"Washington, Oregon, southern British Columbia and the offshore margin."}),M.jsxs("div",{className:"search",children:[M.jsx("input",{type:"search",placeholder:"Find a city, town or peak",value:i,"aria-label":"Find a place",onChange:c=>{r(c.target.value),o(0)},onKeyDown:c=>{c.key==="ArrowDown"&&(c.preventDefault(),o(u=>Math.min(a.length-1,u+1))),c.key==="ArrowUp"&&(c.preventDefault(),o(u=>Math.max(0,u-1))),c.key==="Enter"&&a[s]&&l(a[s]),c.key==="Escape"&&r("")}}),a.length>0&&M.jsx("ul",{role:"listbox",children:a.map((c,u)=>M.jsxs("li",{role:"option","aria-selected":u===s,onMouseDown:()=>l(c),children:[M.jsx("span",{children:c.name}),M.jsxs("span",{className:"sub",children:[PP[c.kind],c.pop?` · ${c.pop.toLocaleString()}`:""]})]},`${c.name}-${c.lon}`))})]})]})}const DP=[["Move","drag, or the arrow keys"],["Rotate / tilt","right-drag, or Shift- / Ctrl-drag"],["Zoom","scroll or pinch; the nav pad's + and −"],["Layers","M motorways · H highways · R main roads · B borders · N names · S streets"]];function NP({manifest:t}){const e=t.credits;return M.jsxs("div",{className:"panel helppanel",children:[M.jsx("div",{className:"hc-set",children:DP.map(([n,i])=>M.jsxs("div",{className:"hc-row",children:[M.jsx("b",{children:n}),M.jsx("span",{children:i})]},n))}),M.jsx("div",{className:"hc-note",children:"Terrain: about 250 m near the camera, 1 km for the region, 2 km offshore. Heights are exaggerated in 3D (see View); 2D shows the same shading flat."}),M.jsxs("div",{className:"attribution",children:[e.terrain,". ",e.osm,". ",e.ne,". Street detail: OpenFreeMap © OpenMapTiles, data © OpenStreetMap contributors.",M.jsxs("div",{className:"hc-dev mono",children:["bundle built ",t.built]})]})]})}const UP={view:M.jsxs(M.Fragment,{children:[M.jsx("path",{d:"M1.3 8S3.8 3.5 8 3.5 14.7 8 14.7 8 12.2 12.5 8 12.5 1.3 8 1.3 8z"}),M.jsx("circle",{cx:"8",cy:"8",r:"2.1"})]}),layers:M.jsxs(M.Fragment,{children:[M.jsx("path",{d:"M8 2 1.8 5.3 8 8.6l6.2-3.3z"}),M.jsx("path",{d:"m1.8 8.2 6.2 3.3 6.2-3.3"}),M.jsx("path",{d:"m1.8 11 6.2 3.3 6.2-3.3"})]}),legend:M.jsxs(M.Fragment,{children:[M.jsx("rect",{x:"1.8",y:"3",width:"2.4",height:"2.4"}),M.jsx("rect",{x:"1.8",y:"10.6",width:"2.4",height:"2.4"}),M.jsx("path",{d:"M7 4.2h7.2M7 8h7.2M7 11.8h7.2M1.8 8h2.4"})]}),help:M.jsxs(M.Fragment,{children:[M.jsx("circle",{cx:"8",cy:"8",r:"6.5"}),M.jsx("path",{d:"M6.1 6.3a1.95 1.95 0 1 1 2.7 1.8c-.5.2-.8.6-.8 1.1v.7"}),M.jsx("circle",{cx:"8",cy:"11.6",r:".4",fill:"currentColor"})]})};function IP({items:t,open:e,onToggle:n}){const i=r=>`hud-pop-${r}`;return M.jsxs("div",{className:"hud-dock",children:[M.jsx("div",{className:"dock-bar",children:t.map(({key:r,label:s,icon:o})=>M.jsx("button",{className:"panel dock-btn","aria-label":s,title:s,"aria-expanded":e.has(r),"aria-controls":i(r),onClick:()=>n(r),children:M.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.3",strokeLinejoin:"round","aria-hidden":"true",children:UP[o]})},r))}),M.jsx("div",{className:"dock-pops",children:t.map(({key:r,label:s,node:o})=>M.jsx("div",{id:i(r),className:`dock-pop${e.has(r)?" open":""}`,role:"group","aria-label":s,children:o},r))})]})}const FP="linear-gradient(90deg, rgb(117,140,94) 0%, rgb(150,161,110) 9%, rgb(184,171,130) 27%, rgb(179,168,156) 52%, rgb(219,214,207) 79%, rgb(245,245,242) 100%)",OP="linear-gradient(90deg, rgb(20,38,61) 0%, rgb(36,69,99) 49%, rgb(61,105,138) 89%, rgb(102,148,173) 97%, rgb(143,181,194) 100%)";function zo({name:t,label:e}){const[n,i,r,s]=rS[t];return M.jsxs("div",{className:"row",children:[M.jsxs("svg",{className:"glyph",viewBox:"0 0 18 12","aria-hidden":"true",children:[r&&M.jsx("line",{x1:"1",y1:"6",x2:"17",y2:"6",stroke:r,strokeWidth:s,strokeLinecap:"round"}),M.jsx("line",{x1:"1",y1:"6",x2:"17",y2:"6",stroke:n,strokeWidth:i,strokeLinecap:"round"})]}),e]})}function kP(){return M.jsxs("div",{className:"panel legend",children:[M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"Elevation"}),M.jsx("div",{className:"ramp",style:{background:FP}}),M.jsxs("div",{className:"ramp-labels mono",children:[M.jsx("span",{children:"0"}),M.jsx("span",{children:"1,700"}),M.jsx("span",{children:"3,300 m"})]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"Depth"}),M.jsx("div",{className:"ramp",style:{background:OP}}),M.jsxs("div",{className:"ramp-labels mono",children:[M.jsx("span",{children:"3,500 m"}),M.jsx("span",{children:"1,800"}),M.jsx("span",{children:"0"})]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"Lines"}),M.jsx(zo,{name:"motorway",label:"Motorway / interstate"}),M.jsx(zo,{name:"trunk",label:"Highway"}),M.jsx(zo,{name:"primary",label:"Main road"}),M.jsx(zo,{name:"country",label:"Country border"}),M.jsx(zo,{name:"state",label:"State / province"})]})]})}const zP=[["⟲","Rotate left",{dAz:-20}],["⟳","Rotate right",{dAz:20}],["▲","Tilt toward the horizon",{dPol:10}],["▼","Tilt toward overhead",{dPol:-10}],["+","Zoom in",{zoom:.6}],["−","Zoom out",{zoom:1.6}],["N","North up",{northUp:!0}]];function BP({scene:t}){return M.jsx("nav",{className:"panel navpad","aria-label":"Navigation",children:zP.map(([e,n,i])=>M.jsx("button",{title:n,"aria-label":n,onClick:()=>t.orbit(i),children:e},n))})}const rv=[.1,.2,.5,1,2,5,10,20,50,100,200,500];function HP(t,e,n){return 2*e*Math.tan(t*Math.PI/360)/n}function VP(t,e=110,n=150){let i=rv[0];for(const r of rv)r/t<=n&&Math.abs(r/t-e)<Math.abs(i/t-e)&&(i=r);return{km:i,px:i/t}}function GP({scene:t}){const[e,n]=Z.useState(null);if(Z.useEffect(()=>{const r=()=>{const o=t.camera,a=o.position.distanceTo(t.controls.target),l=VP(HP(o.fov,a,innerHeight));n(c=>c&&c.km===l.km&&Math.abs(c.px-l.px)<1?c:l)};r();const s=setInterval(r,250);return()=>clearInterval(s)},[t]),!e)return null;const i=e.km<1?`${Math.round(e.km*1e3)} m`:`${e.km} km`;return M.jsxs("div",{className:"panel scalebar","aria-label":`Scale: ${i} at the view centre`,title:"Exact at the view centre; nearer ground looks larger, farther ground smaller",children:[M.jsx("div",{className:"sb-bar",style:{width:`${e.px}px`}}),M.jsx("div",{className:"sb-label mono",children:i})]})}function WP(){try{const t=document.createElement("canvas");return!!(t.getContext("webgl2")||t.getContext("webgl"))}catch{return!1}}function jP(){const[t,e]=Z.useState(null),[n,i]=Z.useState(null);return Z.useEffect(()=>{Gw().then(e,i)},[]),n?M.jsx("div",{className:"app-message",role:"alert",children:M.jsxs("div",{children:[n.message,n instanceof Oc&&M.jsx("code",{children:Vw})]})}):t?WP()?M.jsx(XP,{bundle:t,onError:i}):M.jsx("div",{className:"app-message",children:"This map needs WebGL, which this browser has turned off."}):M.jsx("div",{className:"app-message",children:"Loading the map…"})}const sv="nov2026_ar",$P=t=>t.streets>0?"streets":t.flat>.5?"2D":t.tiles>0?"250 m":t.dist>2200?"2 km":"1 km";function XP({bundle:t,onError:e}){var B;const n=Z.useRef(null),i=Z.useRef(null),[r,s]=Z.useState(null),[o,a]=Z.useState(null),[l,c]=Z.useState(null),[u,h]=Z.useState(null),[d,p]=Z.useState(null),[m,x]=Z.useState(null),[g,f]=Z.useState(null),[_,v]=Z.useState(null),[S,R]=Z.useState(null),[C,A]=Z.useState("1 km"),[P,X]=Z.useState("home"),[y,E]=Z.useState(()=>new Set(["view"]));Z.useEffect(()=>{let k,q,z,K,D,Y,J,re,Me,Le,j,ne,ue,he,De,Re=!1,Ve=0,Ze=performance.now();return vm.create(n.current,t).then(fe=>{if(Re){fe.dispose();return}k=fe,q=new TC(i.current,t.places,fe),fe.onFrame=()=>{const L=performance.now(),Ct=Math.min(.1,(L-Ze)/1e3);Ze=L,q.update(),J==null||J.update(),re==null||re.update(),Me==null||Me.update(),Le==null||Le.update(),j==null||j.update(),he==null||he.update(),ue==null||ue.update(Ct,fe.frame.dist,fe.controls.target),z==null||z.update(Ct,fe.frame.dist),Ve++%15===0&&A($P(fe.frame))},s(fe),a(q),Rg(sv).then(L=>{var Ct;!L||Re||(z=new Bb(fe.scene,t.P,L,fe.U),K=L.power?new hC(fe.scene,t.P,fe.U,fe.elevAt):null,D=L.roads?new vC(fe.scene,t.P,fe.U,fe.elevAt):null,Y=L.sewers?new xC(fe.scene,t.P,fe.U,fe.elevAt):null,c({doc:L,layer:z,gusts:L.grids.gust?new lC(fe.U,t.P,L.grids.gust):null,power:K,roads:D,sewers:Y}),J=new Ba(i.current,fe),p(J),(Ct=L.credits)!=null&&Ct.ground&&(re=new ha(i.current,fe),Me=new Gf(i.current,fe),Le=new Wf(i.current,fe),re.setVisible(!1),Me.setVisible(!1),R({snow:re,soil:Me,wells:Le})),j=new FC(i.current,fe),x(j),ne=new sC(fe.scene,t.P,fe.U,fe.elevAt),f(ne),L.sea&&(ue=new oC(fe.scene,t.P,L.sea.grid,fe.U),he=new RC(i.current,fe),v({layer:ue,tides:he}),window.__sea=ue),L.rivers&&Jw(L).then(Oe=>{if(Re)return;const He=new Qb(fe.scene,t.P,Oe,fe.U);fe.addRivers(He);const Pe=new nE(L,Oe.count);Pe.get({type:"obs",k:Math.min(...L.rivers.obs)}).then(rt=>He.setBaseline(rt)).catch(()=>{}),h({layer:He,reaches:Oe,flows:Pe})}).catch(()=>{}),De=setInterval(()=>Rg(sv).then(Oe=>{Oe&&!Re&&c(He=>He&&He.doc.updated===Oe.updated?He:{...He,doc:Oe})}).catch(()=>{}),10*6e4))}).catch(()=>{})},e),()=>{Re=!0,clearInterval(De),q==null||q.dispose(),J==null||J.dispose(),re==null||re.dispose(),Me==null||Me.dispose(),Le==null||Le.dispose(),j==null||j.dispose(),ne==null||ne.dispose(),K==null||K.dispose(),D==null||D.dispose(),Y==null||Y.dispose(),ue==null||ue.dispose(),he==null||he.dispose(),z==null||z.dispose(),k==null||k.dispose()}},[t,e]);const H=k=>E(q=>{const z=new Set(q);return z.delete(k)||z.add(k),z});return M.jsxs(M.Fragment,{children:[M.jsx("canvas",{ref:n,className:"map-scene","aria-label":"3D map of the Pacific Northwest"}),M.jsx("div",{id:"map-overlay",ref:i}),r&&M.jsxs(M.Fragment,{children:[M.jsx(LP,{places:t.places,detail:C,onPick:k=>{X(null),r.flyToPoint(k.lon,k.lat,k.kind==="peak"?45:70)}}),M.jsx(IP,{open:y,onToggle:H,items:[{key:"view",label:"View",icon:"view",node:M.jsx(AP,{scene:r})},{key:"layers",label:"Layers",icon:"layers",node:M.jsx(bP,{scene:r,labels:o})},{key:"legend",label:"Legend",icon:"legend",node:M.jsx(kP,{})},{key:"help",label:"Help",icon:"help",node:M.jsx(NP,{manifest:t.manifest})}]}),M.jsx(CP,{active:P,onPlace:k=>{X(k),r.flyTo(k)}}),l&&M.jsx(tR,{doc:l.doc,layer:l.layer,gusts:l.gusts,power:l.power,roads:l.roads,sewers:l.sewers,rivers:u,reservoirs:d,ground:S,gauges:m,floods:g,sea:_}),(l==null?void 0:l.roads)&&M.jsx(F0,{scene:r,layer:l.roads,canvas:n.current,render:SC}),(l==null?void 0:l.sewers)&&M.jsx(F0,{scene:r,layer:l.sewers,canvas:n.current,render:MC}),(l==null?void 0:l.power)&&M.jsx(fC,{scene:r,layer:l.power,canvas:n.current,utilities:(B=l.doc.power)==null?void 0:B.utilities}),u&&M.jsx(LC,{scene:r,layer:u.layer,canvas:n.current}),M.jsx(BP,{scene:r}),M.jsx(GP,{scene:r})]})]})}_x(document.getElementById("root")).render(M.jsx(jP,{}));
