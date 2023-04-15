import{r as g,a as bt,j as m,b as k,c as Vt,F as Ae,u as A,s as Bt,d as wt,e as Ut,f as $t,g as Ht,h as Ie,i as Kt,k as Wt,l as Gt,m as Yt,n as Jt,o as qt,p as Zt,q as Qt,t as Xt,v as er,w as tr,x as rr,y as nr,z as or,A as ir,B as ar}from"./index-2cc049ce.js";import{L as q,h as it,a as sr,i as cr,I as lr,B as Re,u as Ke,C as ur,H as fr}from"./index-312ce64b.js";import{v as dr,B as z,i as pr,p as v,M as mr,a as gr,T as De,b as hr,F as vr,c as yr,d as br,C as wr,g as Me,e as ze,O as me,S as Ar,V as Dr,f as xr,h as Er,N as Fr,j as Cr,k as Le}from"./my-sites-85cae127.js";const _=new q(dr),re={},At=z.from(0),Dt=z.from(-1);function xt(e,t,r,n){const o={fault:t,operation:r};return n!==void 0&&(o.value=n),_.throwError(e,q.errors.NUMERIC_FAULT,o)}let ne="0";for(;ne.length<256;)ne+=ne;function We(e){if(typeof e!="number")try{e=z.from(e).toNumber()}catch{}return typeof e=="number"&&e>=0&&e<=256&&!(e%1)?"1"+ne.substring(0,e):_.throwArgumentError("invalid decimal size","decimals",e)}function ve(e,t){t==null&&(t=0);const r=We(t);e=z.from(e);const n=e.lt(At);n&&(e=e.mul(Dt));let o=e.mod(r).toString();for(;o.length<r.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];const i=e.div(r).toString();return r.length===1?e=i:e=i+"."+o,n&&(e="-"+e),e}function M(e,t){t==null&&(t=0);const r=We(t);(typeof e!="string"||!e.match(/^-?[0-9.]+$/))&&_.throwArgumentError("invalid decimal value","value",e);const n=e.substring(0,1)==="-";n&&(e=e.substring(1)),e==="."&&_.throwArgumentError("missing value","value",e);const o=e.split(".");o.length>2&&_.throwArgumentError("too many decimal points","value",e);let i=o[0],a=o[1];for(i||(i="0"),a||(a="0");a[a.length-1]==="0";)a=a.substring(0,a.length-1);for(a.length>r.length-1&&xt("fractional component exceeds decimals","underflow","parseFixed"),a===""&&(a="0");a.length<r.length-1;)a+="0";const l=z.from(i),f=z.from(a);let u=l.mul(r).add(f);return n&&(u=u.mul(Dt)),u}class J{constructor(t,r,n,o){t!==re&&_.throwError("cannot use FixedFormat constructor; use FixedFormat.from",q.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=n,this.decimals=o,this.name=(r?"":"u")+"fixed"+String(n)+"x"+String(o),this._multiplier=We(o),Object.freeze(this)}static from(t){if(t instanceof J)return t;typeof t=="number"&&(t=`fixed128x${t}`);let r=!0,n=128,o=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")r=!1;else{const i=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);i||_.throwArgumentError("invalid fixed format","format",t),r=i[1]!=="u",n=parseInt(i[2]),o=parseInt(i[3])}}else if(t){const i=(a,l,f)=>t[a]==null?f:(typeof t[a]!==l&&_.throwArgumentError("invalid fixed format ("+a+" not "+l+")","format."+a,t[a]),t[a]);r=i("signed","boolean",r),n=i("width","number",n),o=i("decimals","number",o)}return n%8&&_.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",n),o>80&&_.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",o),new J(re,r,n,o)}}class C{constructor(t,r,n,o){t!==re&&_.throwError("cannot use FixedNumber constructor; use FixedNumber.from",q.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=o,this._hex=r,this._value=n,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&_.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const r=M(this._value,this.format.decimals),n=M(t._value,t.format.decimals);return C.fromValue(r.add(n),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const r=M(this._value,this.format.decimals),n=M(t._value,t.format.decimals);return C.fromValue(r.sub(n),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const r=M(this._value,this.format.decimals),n=M(t._value,t.format.decimals);return C.fromValue(r.mul(n).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const r=M(this._value,this.format.decimals),n=M(t._value,t.format.decimals);return C.fromValue(r.mul(this.format._multiplier).div(n),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=C.from(t[0],this.format);const n=!t[1].match(/^(0*)$/);return this.isNegative()&&n&&(r=r.subUnsafe(at.toFormat(r.format))),r}ceiling(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=C.from(t[0],this.format);const n=!t[1].match(/^(0*)$/);return!this.isNegative()&&n&&(r=r.addUnsafe(at.toFormat(r.format))),r}round(t){t==null&&(t=0);const r=this.toString().split(".");if(r.length===1&&r.push("0"),(t<0||t>80||t%1)&&_.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;const n=C.from("1"+ne.substring(0,t),this.format),o=Or.toFormat(this.format);return this.mulUnsafe(n).addUnsafe(o).floor().divUnsafe(n)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(t){if(t==null)return this._hex;t%8&&_.throwArgumentError("invalid byte width","width",t);const r=z.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return it(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return C.fromString(this._value,t)}static fromValue(t,r,n){return n==null&&r!=null&&!pr(r)&&(n=r,r=null),r==null&&(r=0),n==null&&(n="fixed"),C.fromString(ve(t,r),J.from(n))}static fromString(t,r){r==null&&(r="fixed");const n=J.from(r),o=M(t,n.decimals);!n.signed&&o.lt(At)&&xt("unsigned value cannot be negative","overflow","value",t);let i=null;n.signed?i=o.toTwos(n.width).toHexString():(i=o.toHexString(),i=it(i,n.width/8));const a=ve(o,n.decimals);return new C(re,i,a,n)}static fromBytes(t,r){r==null&&(r="fixed");const n=J.from(r);if(sr(t).length>n.width/8)throw new Error("overflow");let o=z.from(t);n.signed&&(o=o.fromTwos(n.width));const i=o.toTwos((n.signed?0:1)+n.width).toHexString(),a=ve(o,n.decimals);return new C(re,i,a,n)}static from(t,r){if(typeof t=="string")return C.fromString(t,r);if(cr(t))return C.fromBytes(t,r);try{return C.fromValue(t,0,r)}catch(n){if(n.code!==q.errors.INVALID_ARGUMENT)throw n}return _.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}const at=C.from(1),Or=C.from("0.5"),Tr="units/5.7.0";new q(Tr);const Sr=["wei","kwei","mwei","gwei","szabo","finney","ether"];function _r(e,t){if(typeof t=="string"){const r=Sr.indexOf(t);r!==-1&&(t=3*r)}return ve(e,t??18)}function ge(e){return _r(e,18)}function Z(e,t,r,n){function o(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function l(h){try{u(n.next(h))}catch(b){a(b)}}function f(h){try{u(n.throw(h))}catch(b){a(b)}}function u(h){h.done?i(h.value):o(h.value).then(l,f)}u((n=n.apply(e,t||[])).next())})}function Q(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(h){return f([u,h])}}function f(u){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(r=0)),r;)try{if(n=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,o=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(u[0]===6&&r.label<i[1]){r.label=i[1],i=u;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(u);break}i[2]&&r.ops.pop(),r.trys.pop();continue}u=t.call(e,r)}catch(h){u=[6,h],o=0}finally{n=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function st(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),o,i=[],a;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(l){a={error:l}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i}function ct(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var kr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function ie(e,t){var r=jr(e);if(typeof r.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:typeof t=="string"?t:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}function jr(e){var t=e.name,r=t&&t.lastIndexOf(".")!==-1;if(r&&!e.type){var n=t.split(".").pop().toLowerCase(),o=kr.get(n);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var Pr=[".DS_Store","Thumbs.db"];function Ir(e){return Z(this,void 0,void 0,function(){return Q(this,function(t){return ye(e)&&Rr(e.dataTransfer)?[2,zr(e.dataTransfer,e.type)]:Lr(e)?[2,Nr(e)]:Array.isArray(e)&&e.every(function(r){return"getFile"in r&&typeof r.getFile=="function"})?[2,Mr(e)]:[2,[]]})})}function Rr(e){return ye(e)}function Lr(e){return ye(e)&&ye(e.target)}function ye(e){return typeof e=="object"&&e!==null}function Nr(e){return Ve(e.target.files).map(function(t){return ie(t)})}function Mr(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(r){switch(r.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return t=r.sent(),[2,t.map(function(n){return ie(n)})]}})})}function zr(e,t){return Z(this,void 0,void 0,function(){var r,n;return Q(this,function(o){switch(o.label){case 0:return e.items?(r=Ve(e.items).filter(function(i){return i.kind==="file"}),t!=="drop"?[2,r]:[4,Promise.all(r.map(Vr))]):[3,2];case 1:return n=o.sent(),[2,lt(Et(n))];case 2:return[2,lt(Ve(e.files).map(function(i){return ie(i)}))]}})})}function lt(e){return e.filter(function(t){return Pr.indexOf(t.name)===-1})}function Ve(e){if(e===null)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Vr(e){if(typeof e.webkitGetAsEntry!="function")return ut(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Ft(t):ut(e)}function Et(e){return e.reduce(function(t,r){return ct(ct([],st(t),!1),st(Array.isArray(r)?Et(r):[r]),!1)},[])}function ut(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=ie(t);return Promise.resolve(r)}function Br(e){return Z(this,void 0,void 0,function(){return Q(this,function(t){return[2,e.isDirectory?Ft(e):Ur(e)]})})}function Ft(e){var t=e.createReader();return new Promise(function(r,n){var o=[];function i(){var a=this;t.readEntries(function(l){return Z(a,void 0,void 0,function(){var f,u,h;return Q(this,function(b){switch(b.label){case 0:if(l.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return f=b.sent(),r(f),[3,4];case 3:return u=b.sent(),n(u),[3,4];case 4:return[3,6];case 5:h=Promise.all(l.map(Br)),o.push(h),i(),b.label=6;case 6:return[2]}})})},function(l){n(l)})}i()})}function Ur(e){return Z(this,void 0,void 0,function(){return Q(this,function(t){return[2,new Promise(function(r,n){e.file(function(o){var i=ie(o,e.fullPath);r(i)},function(o){n(o)})})]})})}var $r=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some(function(a){var l=a.trim().toLowerCase();return l.charAt(0)==="."?n.toLowerCase().endsWith(l):l.endsWith("/*")?i===l.replace(/\/.*$/,""):o===l})}return!0};function ft(e){return Wr(e)||Kr(e)||Ot(e)||Hr()}function Hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wr(e){if(Array.isArray(e))return Be(e)}function dt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function pt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(r),!0).forEach(function(n){Ct(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ct(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e,t){return Jr(e)||Yr(e,t)||Ot(e,t)||Gr()}function Gr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ot(e,t){if(e){if(typeof e=="string")return Be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Be(e,t)}}function Be(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Yr(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,i=!1,a,l;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(f){i=!0,l=f}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw l}}return n}}function Jr(e){if(Array.isArray(e))return e}var qr="file-invalid-type",Zr="file-too-large",Qr="file-too-small",Xr="too-many-files",en=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var r=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:qr,message:"File type must be ".concat(r)}},mt=function(t){return{code:Zr,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},gt=function(t){return{code:Qr,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},tn={code:Xr,message:"Too many files"};function Tt(e,t){var r=e.type==="application/x-moz-file"||$r(e,t);return[r,r?null:en(t)]}function St(e,t,r){if(B(e.size))if(B(t)&&B(r)){if(e.size>r)return[!1,mt(r)];if(e.size<t)return[!1,gt(t)]}else{if(B(t)&&e.size<t)return[!1,gt(t)];if(B(r)&&e.size>r)return[!1,mt(r)]}return[!0,null]}function B(e){return e!=null}function rn(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,l=e.validator;return!i&&t.length>1||i&&a>=1&&t.length>a?!1:t.every(function(f){var u=Tt(f,r),h=oe(u,1),b=h[0],y=St(f,n,o),d=oe(y,1),c=d[0],D=l?l(f):null;return b&&c&&!D})}function be(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function he(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function ht(e){e.preventDefault()}function nn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function on(e){return e.indexOf("Edge/")!==-1}function an(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return nn(e)||on(e)}function N(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return t.some(function(l){return!be(n)&&l&&l.apply(void 0,[n].concat(i)),be(n)})}}function sn(){return"showOpenFilePicker"in window}function cn(e){if(B(e)){var t=Object.entries(e).filter(function(r){var n=oe(r,2),o=n[0],i=n[1],a=!0;return _t(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),a=!1),(!Array.isArray(i)||!i.every(kt))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),a=!1),a}).reduce(function(r,n){var o=oe(n,2),i=o[0],a=o[1];return pt(pt({},r),{},Ct({},i,a))},{});return[{description:"Files",accept:t}]}return e}function ln(e){if(B(e))return Object.entries(e).reduce(function(t,r){var n=oe(r,2),o=n[0],i=n[1];return[].concat(ft(t),[o],ft(i))},[]).filter(function(t){return _t(t)||kt(t)}).join(",")}function un(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function fn(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function _t(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function kt(e){return/^.*\.[\w]+$/.test(e)}var dn=["children"],pn=["open"],mn=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],gn=["refKey","onChange","onClick"];function hn(e){return bn(e)||yn(e)||jt(e)||vn()}function vn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bn(e){if(Array.isArray(e))return Ue(e)}function Ne(e,t){return Dn(e)||An(e,t)||jt(e,t)||wn()}function wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jt(e,t){if(e){if(typeof e=="string")return Ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ue(e,t)}}function Ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function An(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,i=!1,a,l;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(f){i=!0,l=f}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw l}}return n}}function Dn(e){if(Array.isArray(e))return e}function vt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vt(Object(r),!0).forEach(function(n){$e(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function $e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function we(e,t){if(e==null)return{};var r=xn(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function xn(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var xe=g.forwardRef(function(e,t){var r=e.children,n=we(e,dn),o=Fn(n),i=o.open,a=we(o,pn);return g.useImperativeHandle(t,function(){return{open:i}},[i]),bt.createElement(g.Fragment,null,r(w(w({},a),{},{open:i})))});xe.displayName="Dropzone";var Pt={disabled:!1,getFilesFromEvent:Ir,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};xe.defaultProps=Pt;xe.propTypes={children:v.func,accept:v.objectOf(v.arrayOf(v.string)),multiple:v.bool,preventDropOnDocument:v.bool,noClick:v.bool,noKeyboard:v.bool,noDrag:v.bool,noDragEventsBubbling:v.bool,minSize:v.number,maxSize:v.number,maxFiles:v.number,disabled:v.bool,getFilesFromEvent:v.func,onFileDialogCancel:v.func,onFileDialogOpen:v.func,useFsAccessApi:v.bool,autoFocus:v.bool,onDragEnter:v.func,onDragLeave:v.func,onDragOver:v.func,onDrop:v.func,onDropAccepted:v.func,onDropRejected:v.func,onError:v.func,validator:v.func};const En=xe;var He={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Fn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=w(w({},Pt),e),r=t.accept,n=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,a=t.minSize,l=t.multiple,f=t.maxFiles,u=t.onDragEnter,h=t.onDragLeave,b=t.onDragOver,y=t.onDrop,d=t.onDropAccepted,c=t.onDropRejected,D=t.onFileDialogCancel,O=t.onFileDialogOpen,I=t.useFsAccessApi,U=t.autoFocus,$=t.preventDropOnDocument,ae=t.noClick,H=t.noKeyboard,X=t.noDrag,L=t.noDragEventsBubbling,E=t.onError,T=t.validator,ee=g.useMemo(function(){return ln(r)},[r]),Ge=g.useMemo(function(){return cn(r)},[r]),Ee=g.useMemo(function(){return typeof O=="function"?O:yt},[O]),se=g.useMemo(function(){return typeof D=="function"?D:yt},[D]),S=g.useRef(null),R=g.useRef(null),It=g.useReducer(Cn,He),Ye=Ne(It,2),Fe=Ye[0],j=Ye[1],Rt=Fe.isFocused,Je=Fe.isFileDialogActive,ce=g.useRef(typeof window<"u"&&window.isSecureContext&&I&&sn()),qe=function(){!ce.current&&Je&&setTimeout(function(){if(R.current){var p=R.current.files;p.length||(j({type:"closeDialog"}),se())}},300)};g.useEffect(function(){return window.addEventListener("focus",qe,!1),function(){window.removeEventListener("focus",qe,!1)}},[R,Je,se,ce]);var K=g.useRef([]),Ze=function(p){S.current&&S.current.contains(p.target)||(p.preventDefault(),K.current=[])};g.useEffect(function(){return $&&(document.addEventListener("dragover",ht,!1),document.addEventListener("drop",Ze,!1)),function(){$&&(document.removeEventListener("dragover",ht),document.removeEventListener("drop",Ze))}},[S,$]),g.useEffect(function(){return!n&&U&&S.current&&S.current.focus(),function(){}},[S,U,n]);var V=g.useCallback(function(s){E?E(s):console.error(s)},[E]),Qe=g.useCallback(function(s){s.preventDefault(),s.persist(),de(s),K.current=[].concat(hn(K.current),[s.target]),he(s)&&Promise.resolve(o(s)).then(function(p){if(!(be(s)&&!L)){var x=p.length,F=x>0&&rn({files:p,accept:ee,minSize:a,maxSize:i,multiple:l,maxFiles:f,validator:T}),P=x>0&&!F;j({isDragAccept:F,isDragReject:P,isDragActive:!0,type:"setDraggedFiles"}),u&&u(s)}}).catch(function(p){return V(p)})},[o,u,V,L,ee,a,i,l,f,T]),Xe=g.useCallback(function(s){s.preventDefault(),s.persist(),de(s);var p=he(s);if(p&&s.dataTransfer)try{s.dataTransfer.dropEffect="copy"}catch{}return p&&b&&b(s),!1},[b,L]),et=g.useCallback(function(s){s.preventDefault(),s.persist(),de(s);var p=K.current.filter(function(F){return S.current&&S.current.contains(F)}),x=p.indexOf(s.target);x!==-1&&p.splice(x,1),K.current=p,!(p.length>0)&&(j({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),he(s)&&h&&h(s))},[S,h,L]),le=g.useCallback(function(s,p){var x=[],F=[];s.forEach(function(P){var te=Tt(P,ee),Y=Ne(te,2),Oe=Y[0],Te=Y[1],Se=St(P,a,i),pe=Ne(Se,2),_e=pe[0],ke=pe[1],je=T?T(P):null;if(Oe&&_e&&!je)x.push(P);else{var Pe=[Te,ke];je&&(Pe=Pe.concat(je)),F.push({file:P,errors:Pe.filter(function(zt){return zt})})}}),(!l&&x.length>1||l&&f>=1&&x.length>f)&&(x.forEach(function(P){F.push({file:P,errors:[tn]})}),x.splice(0)),j({acceptedFiles:x,fileRejections:F,type:"setFiles"}),y&&y(x,F,p),F.length>0&&c&&c(F,p),x.length>0&&d&&d(x,p)},[j,l,ee,a,i,f,y,d,c,T]),ue=g.useCallback(function(s){s.preventDefault(),s.persist(),de(s),K.current=[],he(s)&&Promise.resolve(o(s)).then(function(p){be(s)&&!L||le(p,s)}).catch(function(p){return V(p)}),j({type:"reset"})},[o,le,V,L]),W=g.useCallback(function(){if(ce.current){j({type:"openDialog"}),Ee();var s={multiple:l,types:Ge};window.showOpenFilePicker(s).then(function(p){return o(p)}).then(function(p){le(p,null),j({type:"closeDialog"})}).catch(function(p){un(p)?(se(p),j({type:"closeDialog"})):fn(p)?(ce.current=!1,R.current?(R.current.value=null,R.current.click()):V(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):V(p)});return}R.current&&(j({type:"openDialog"}),Ee(),R.current.value=null,R.current.click())},[j,Ee,se,I,le,V,Ge,l]),tt=g.useCallback(function(s){!S.current||!S.current.isEqualNode(s.target)||(s.key===" "||s.key==="Enter"||s.keyCode===32||s.keyCode===13)&&(s.preventDefault(),W())},[S,W]),rt=g.useCallback(function(){j({type:"focus"})},[]),nt=g.useCallback(function(){j({type:"blur"})},[]),ot=g.useCallback(function(){ae||(an()?setTimeout(W,0):W())},[ae,W]),G=function(p){return n?null:p},Ce=function(p){return H?null:G(p)},fe=function(p){return X?null:G(p)},de=function(p){L&&p.stopPropagation()},Lt=g.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=s.refKey,x=p===void 0?"ref":p,F=s.role,P=s.onKeyDown,te=s.onFocus,Y=s.onBlur,Oe=s.onClick,Te=s.onDragEnter,Se=s.onDragOver,pe=s.onDragLeave,_e=s.onDrop,ke=we(s,mn);return w(w($e({onKeyDown:Ce(N(P,tt)),onFocus:Ce(N(te,rt)),onBlur:Ce(N(Y,nt)),onClick:G(N(Oe,ot)),onDragEnter:fe(N(Te,Qe)),onDragOver:fe(N(Se,Xe)),onDragLeave:fe(N(pe,et)),onDrop:fe(N(_e,ue)),role:typeof F=="string"&&F!==""?F:"presentation"},x,S),!n&&!H?{tabIndex:0}:{}),ke)}},[S,tt,rt,nt,ot,Qe,Xe,et,ue,H,X,n]),Nt=g.useCallback(function(s){s.stopPropagation()},[]),Mt=g.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=s.refKey,x=p===void 0?"ref":p,F=s.onChange,P=s.onClick,te=we(s,gn),Y=$e({accept:ee,multiple:l,type:"file",style:{display:"none"},onChange:G(N(F,ue)),onClick:G(N(P,Nt)),tabIndex:-1},x,R);return w(w({},Y),te)}},[R,r,l,ue,n]);return w(w({},Fe),{},{isFocused:Rt&&!n,getRootProps:Lt,getInputProps:Mt,rootRef:S,inputRef:R,open:G(W)})}function Cn(e,t){switch(t.type){case"focus":return w(w({},e),{},{isFocused:!0});case"blur":return w(w({},e),{},{isFocused:!1});case"openDialog":return w(w({},He),{},{isFileDialogActive:!0});case"closeDialog":return w(w({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return w(w({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return w(w({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return w({},He);default:return e}}function yt(){}const On="/assets/upload-7f04148e.svg",Tn=({className:e,onDrop:t})=>m(En,{onDrop:t,children:({getRootProps:r,getInputProps:n})=>m("section",{children:k("div",{...r(),children:[m("input",{...n()}),m("div",{className:Vt("bg-primary-20/50 border-primary-40 grid cursor-pointer place-items-center border-2 border-dashed",e),children:m(lr,{src:On,alt:"upload",size:"sm"})})]})})}),Sn="/assets/new-creative-20843da7.svg",_n=({className:e,children:t,onClick:r,isOpen:n,onClose:o,onCreate:i})=>{const[a,l]=g.useState(null),[f,u]=g.useState(""),h=c=>u(c.target.value),b=c=>{l(c[0])},y=c=>{l(null),o(c)},d=c=>{a&&(i(a,f),y(c))};return k(Ae,{children:[m(Re,{className:e,color:"secondary",onClick:r,children:t}),k(mr,{className:"h-[500px]",isOpen:n,onClose:y,children:[m(gr,{className:"h-14",children:m(De,{src:Sn,alt:"new creative"})}),m(hr,{children:k("div",{className:"flex flex-col gap-4",children:[a===null?m(vr,{label:"Upload Creative",children:m(Tn,{className:"h-[240px]",onDrop:b})}):m("div",{className:"h-[240px]",children:m("img",{className:"h-full w-full object-contain",src:window.URL.createObjectURL(a),alt:"preview"})}),m(yr,{label:"Link",placeholder:"Please enter link URL here",value:f,onChange:h})]})}),k(br,{children:[m(Re,{color:"neutral",onClick:y,children:"CANCEL"}),m(Re,{color:"secondary",onClick:d,children:"CREATE"})]})]})]})},kn="/assets/my-creatives-5ced28c6.svg",jn=e=>new Promise((t,r)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(n.result),n.onerror=o=>r(o)}),Pn=()=>{const e=A(d=>d.app.ADsGTVP),[t,r]=g.useState(!1),n=()=>r(!0),o=()=>r(!1),i=A(d=>d.app.address),a=A(d=>d.app.advertiserList),l=A(d=>d.app.contractAdvertiserList),f=A(d=>d.app.daoContract);A(d=>d.app.isAdvertiser);const u=A(d=>d.app.endDate),h=Ke(),b=async(d,c)=>{const D=Math.floor(new Date().getTime()/1e3)+u*60;try{const O=await jn(d);console.log(O),await fetch("/api/creatives",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a.length+1,wallet_address:i,link:c,img:O})});const I=await Me();console.log(D,c),await(await ze(f).createContent(!0,D,c,{gasLimit:5e6,gasPrice:I})).wait(),wt(!1),alert("Create Successfully")}catch(O){console.log("Err: ",O)}},y=d=>d===1?"passed":d===2?"rejected":"process";return g.useEffect(()=>{fetch("/api/creatives").then(d=>{d.text().then(c=>h(Bt(JSON.parse(c))))}).catch(()=>alert("something went wrong"))},[]),console.log("creative1",l),console.log("creative2",a),k(Ae,{children:[k("div",{className:"flex justify-between",children:[m(De,{className:"my-8",src:kn,alt:"my creative"}),m("div",{className:"flex items-center",children:m(_n,{onClick:n,isOpen:t,onClose:o,onCreate:b,children:"NEW CREATIVE"})})]}),m("div",{className:"flex flex-col gap-12",children:l.map((d,c)=>m(wr,{id:d.id!==void 0?d.id.toNumber().toString():d.id,createdAt:new Date(d.createdAt!==void 0?d.createdAt.toNumber()*1e3:0),expires:new Date(d.endAt!==void 0?d.endAt.toNumber()*1e3:0),link:d.siteUrl,image:a.length>c?a[c].img:"image",status:a.length>c?y(a[c].status):"process",ok:d.agreeVoteAmount!==void 0?d.agreeVoteAmount.toNumber():0,ng:d.rejectVoteAmount!==void 0?d.rejectVoteAmount.toNumber():0,maxVp:e},d.id!==void 0?d.id.toNumber():d.id))})]})},In="/assets/ads-2c3ea67a.svg",Rn="/assets/advertiser-overview-c3c8352a.svg",Ln=()=>{const e=A(f=>f.app.ADsGTVP),t=A(f=>f.app.rewardADsAmount),r=g.useMemo(()=>t.toLocaleString(),[t]),n=A(f=>f.app.stakingADsTokenBalance),o=g.useMemo(()=>n.toLocaleString(),[n]),i=f=>{alert(`stake: ${f}`)},a=A(f=>f.app.ADsGTVP),l=A(f=>f.app.AdsGTVPTime);return k(Ae,{children:[m(De,{className:"my-8",src:Rn,alt:"advertiser overview"}),k("div",{className:"flex gap-12",children:[m(me,{className:"h-48 flex-1",title:"ADsGT",icon:In,children:m("p",{className:"text-48-bold text-neutral-10",children:r})}),m(me,{className:"h-48 flex-1",type:"advertiser",title:"Staked ADsGT",icon:Ar,onStake:i,maxVp:e,children:m("p",{className:"text-48-bold text-neutral-10",children:o})}),m(me,{className:"h-48 flex-1",title:"Voting Power (AD)",icon:Dr,children:k("div",{children:[m("p",{className:"text-48-bold text-neutral-10 inline",children:`${a}`}),m("p",{className:"text-28-semi text-neutral-40 inline",children:" / 100 VP"})]})}),m(me,{className:"h-48 flex-1",title:"VP Regen Speed",icon:xr,children:k("div",{children:[m("p",{className:"text-48-bold text-neutral-10 inline",children:`${l}`}),m("p",{className:"text-28-semi text-neutral-40 inline",children:" VP / day"})]})})]})]})},Nn=()=>{const e=A(c=>c.app.MeGTVP),[t,r]=g.useState(!1),n=()=>r(!0),o=()=>r(!1),i=c=>async(D,O)=>{Math.floor(new Date().getTime()/1e3)+u*60;try{const I=await Me();await(await ze(f).vote(Number(c),D,O,{gasLimit:5e6,gasPrice:I})).wait(),alert("Vote Successfully")}catch(I){console.log("Err: ",I)}},a=A(c=>c.app.address),l=A(c=>c.app.siteList);A(c=>c.app.isAdvertiser);const f=A(c=>c.app.daoContract),u=A(c=>c.app.endDate),h=A(c=>c.app.contractSiteList),b=async c=>{const D=Math.floor(new Date().getTime()/1e3)+u*60;try{await fetch("/api/sites",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l.length+1,wallet_address:a,url:c})});const O=await Me();await(await ze(f).createContent(!1,D,c,{gasLimit:5e6,gasPrice:O})).wait(),alert("Create Successfully")}catch(O){console.log("Err: ",O)}},y=Ke();bt.useEffect(()=>{fetch("/api/sites").then(c=>{c.text().then(D=>y(Ut(Array(D))))}).catch(()=>alert("something went wrong"))},[]);const d=c=>c===1?"passed":c===2?"rejected":"process";return k(Ae,{children:[k("div",{className:"flex justify-between",children:[m(De,{className:"my-8",src:Er,alt:"voting list of sites"}),m("div",{className:"flex items-center",children:m(Fr,{onClick:n,isOpen:t,onClose:o,onCreate:b,children:"NEW SITE"})})]}),m("div",{className:"flex flex-col gap-12",children:h.map((c,D)=>m(Cr,{id:c.id!==void 0?c.id.toNumber().toString():c.id,url:c.siteUrl,createdAt:new Date(c.createdAt!==void 0?c.createdAt.toNumber()*1e3:0),status:l.length>D?d(l[D].status):"process",expires:new Date(c.endAt!==void 0?c.endAt.toNumber()*1e3:0),ok:c.agreeVoteAmount!==void 0?c.agreeVoteAmount.toNumber():0,ng:c.rejectVoteAmount!==void 0?c.rejectVoteAmount.toNumber():0,maxVp:e,onVote:i(c.id!==void 0?c.id.toNumber():0)},c.id!==void 0?c.id.toNumber():c.id))})]})},Mn="0xCEdc57A73EFC5a9B599340f348D3Ccc44e225018",zn="0xE83aea3CcE8d3C479CEebbF0e10DD2F39F10F0d0",Vn="0x439e963F9149413fBB6a8F9594C5dEDE2f25cD2b",Bn="0x01385B66cfc7E4B0657812cED9023D5692608956",Un="0x13A473946654605C0ecb48c1BB0C6facED43bF75",$n="0x81d33b63457C311F33241b1e9A40d3DA46237478",Gn=()=>{const e=A(a=>a.app.address),t=A(a=>a.app.isStaking),r=A(a=>a.app.isCreate),n=Ke(),o=$t(),i=()=>{o("/"),n(Ht(!0)),n(Ie(!1)),n(wt(!1)),n(Kt(!1)),n(Wt(""))};return g.useEffect(()=>{const a=async()=>{if(e)try{$n.toLowerCase()==e.toLowerCase()?n(Ie(!0)):n(Ie(!1));const f=Le(Mn,"token");n(Gt(f));const u=await f.balanceOf(e);n(Yt(ge(u)));const h=Le(zn,"token");n(Jt(h));const b=await h.balanceOf(e);n(qt(ge(b)));const y=Le(Un,"dao");n(Zt(y));const d=await y.getContentsLength(),c=[],D=[];for(let E=0;E<d;E++){const T=await y.contents(E);console.log(T),T[2]?c.push(T):D.push(T)}n(Qt(c)),n(Xt(D));const O=await y.getRewardsTypesLength(),I=[];for(let E=0;E<O;E++){const T=await y.rewardsTypes(E);I.push(T)}n(er(I));const U=await y.getWithdrawFeesLength(),$=[];for(let E=0;E<U;E++){const T=await y.withdawFees(E);$.push(T)}n(tr($));const ae=await y.getStakerRewardsLength(),H=[];for(let E=0;E<ae;E++){const T=await y.stakerRewards(E);H.push(T)}n(rr(H));const X=await y.getRewardTokenInfo(Vn),L=await y.getRewardTokenInfo(Bn);n(nr(X[0])),n(or(L[0])),n(ir(parseFloat(ge(X[1]))*60)),n(ar(parseFloat(ge(L[1]))*60))}catch(f){console.log("Err: ",f)}};(async()=>{(e||t==!1||r==!1)&&await a()})()},[e,t,r]),k(ur,{children:[m(fr,{address:e,current:"advertiser",onDisconnect:i}),m(Ln,{}),k("div",{className:"flex gap-12",children:[m("div",{className:"flex-[2_1_0%]",children:m(Pn,{})}),m("div",{className:"flex-[3_1_0%]",children:m(Nn,{})})]})]})};export{Gn as Advertiser};
