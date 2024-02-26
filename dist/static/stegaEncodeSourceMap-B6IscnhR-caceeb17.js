import{b as q}from"./sanity-cdc02d5a.js";const x=/_key\s*==\s*['"](.*)['"]/;function J(n){return typeof n=="string"?x.test(n.trim()):typeof n=="object"&&"_key"in n}function I(n){if(!Array.isArray(n))throw new Error("Path is not an array");return n.reduce((t,e,r)=>{const i=typeof e;if(i==="number")return"".concat(t,"[").concat(e,"]");if(i==="string"){const c=r===0?"":".";return"".concat(t).concat(c).concat(e)}if(J(e)&&e._key)return"".concat(t,'[_key=="').concat(e._key,'"]');if(Array.isArray(e)){const[c,a]=e;return"".concat(t,"[").concat(c,":").concat(a,"]")}throw new Error("Unsupported path segment `".concat(JSON.stringify(e),"`"))},"")}const P={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},j={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function K(n){return"$".concat(n.map(t=>{if(typeof t=="string"){const e=t.replace(/[\f\n\r\t'\\]/g,r=>P[r]);return"['".concat(e,"']")}if(typeof t=="number")return"[".concat(t,"]");if(t._key!==""){const e=t._key.replace(/['\\]/g,r=>P[r]);return"[?(@._key=='".concat(e,"')]")}return"[".concat(t._index,"]")}).join(""))}function U(n){const t=[],e=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;let r;for(;(r=e.exec(n))!==null;){if(r[1]!==void 0){const i=r[1].replace(/\\(\\|f|n|r|t|')/g,c=>j[c]);t.push(i);continue}if(r[2]!==void 0){t.push(parseInt(r[2],10));continue}if(r[3]!==void 0){const i=r[3].replace(/\\(\\')/g,c=>j[c]);t.push({_key:i,_index:-1});continue}}return t}function T(n){return n.map(t=>{if(typeof t=="string"||typeof t=="number")return t;if(t._key!=="")return{_key:t._key};if(t._index!==-1)return t._index;throw new Error("invalid segment:".concat(JSON.stringify(t)))})}function V(n){return n.map(t=>{if(typeof t=="string"||typeof t=="number")return t;if(t._index!==-1)return t._index;throw new Error("invalid segment:".concat(JSON.stringify(t)))})}function $(n,t){if(!(t!=null&&t.mappings))return;const e=K(V(n));if(t.mappings[e]!==void 0)return{mapping:t.mappings[e],matchedPath:e,pathSuffix:""};const r=Object.entries(t.mappings).filter(([u])=>e.startsWith(u)).sort(([u],[d])=>d.length-u.length);if(r.length==0)return;const[i,c]=r[0],a=e.substring(i.length);return{mapping:c,matchedPath:i,pathSuffix:a}}function B(n){return n!==null&&Array.isArray(n)}function v(n){return typeof n=="object"&&n!==null}function m(n,t,e=[]){return B(n)?n.map((r,i)=>{if(v(r)){const c=r._key;if(typeof c=="string")return m(r,t,e.concat({_key:c,_index:i}))}return m(r,t,e.concat(i))}):v(n)?Object.fromEntries(Object.entries(n).map(([r,i])=>[r,m(i,t,e.concat(r))])):t(n,e)}function G(n,t,e){return m(n,(r,i)=>{if(typeof r!="string")return r;const c=$(i,t);if(!c)return r;const{mapping:a,matchedPath:u}=c;if(a.type!=="value"||a.source.type!=="documentValue")return r;const d=t.documents[a.source.document],p=t.paths[a.source.path],h=U(u),y=U(p).concat(i.slice(h.length));return e({sourcePath:y,sourceDocument:d,resultPath:i,value:r})})}const A="drafts.";function z(n){return n.startsWith(A)?n.slice(A.length):n}function H(n){const{baseUrl:t,workspace:e="default",tool:r="default",id:i,type:c,path:a,projectId:u,dataset:d}=n;if(!t)throw new Error("baseUrl is required");if(!a)throw new Error("path is required");if(!i)throw new Error("id is required");if(t!=="/"&&t.endsWith("/"))throw new Error("baseUrl must not end with a slash");const p=e==="default"?void 0:e,h=r==="default"?void 0:r,_=z(i),y=Array.isArray(a)?I(T(a)):a,o=new URLSearchParams({baseUrl:t,id:_,type:c,path:y});p&&o.set("workspace",p),h&&o.set("tool",h),u&&o.set("projectId",u),d&&o.set("dataset",d);const k=[t==="/"?"":t];p&&k.push(p);const l=["mode=presentation","id=".concat(_),"type=".concat(c),"path=".concat(encodeURIComponent(y))];return h&&l.push("tool=".concat(h)),k.push("intent","edit","".concat(l.join(";"),"?").concat(o)),k.join("/")}function X(n){let t=typeof n=="string"?n:n.baseUrl;return t!=="/"&&(t=t.replace(/\/$/,"")),typeof n=="string"?{baseUrl:t}:{...n,baseUrl:t}}const E=({sourcePath:n,value:t})=>{if(Q(t)||Y(t))return!1;const e=n.at(-1);return!(n.at(-2)==="slug"&&e==="current"||typeof e=="string"&&e.startsWith("_")||typeof e=="number"&&n.at(-2)==="marks"||e==="href"&&typeof n.at(-2)=="number"&&n.at(-3)==="markDefs"||e==="style"||e==="listItem"||n.some(r=>r==="meta"||r==="metadata"||r==="openGraph"||r==="seo")||typeof e=="string"&&F.has(e))},F=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","unit","url","username","variant","website"]);function Q(n){return/^\d{4}-\d{2}-\d{2}/.test(n)?!!Date.parse(n):!1}function Y(n){try{new URL(n,n.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}const b=20;function Z(n,t,e){var r,i,c,a,u,d,p,h,_;const{filter:y,logger:o,enabled:k}=e;if(!k){const s="config.enabled must be true, don't call this function otherwise";throw(r=o==null?void 0:o.error)==null||r.call(o,"[@sanity/client]: ".concat(s),{result:n,resultSourceMap:t,config:e}),new TypeError(s)}if(!t)return(i=o==null?void 0:o.error)==null||i.call(o,"[@sanity/client]: Missing Content Source Map from response body",{result:n,resultSourceMap:t,config:e}),n;if(!e.studioUrl){const s="config.studioUrl must be defined";throw(c=o==null?void 0:o.error)==null||c.call(o,"[@sanity/client]: ".concat(s),{result:n,resultSourceMap:t,config:e}),new TypeError(s)}const l={encoded:[],skipped:[]},C=G(n,t,({sourcePath:s,sourceDocument:g,resultPath:w,value:f})=>{if((typeof y=="function"?y({sourcePath:s,resultPath:w,filterDefault:E,sourceDocument:g,value:f}):E({sourcePath:s,resultPath:w,filterDefault:E,sourceDocument:g,value:f}))===!1)return o&&l.skipped.push({path:R(s),value:"".concat(f.slice(0,b)).concat(f.length>b?"...":""),length:f.length}),f;o&&l.encoded.push({path:R(s),value:"".concat(f.slice(0,b)).concat(f.length>b?"...":""),length:f.length});const{baseUrl:S,workspace:O,tool:L}=X(typeof e.studioUrl=="function"?e.studioUrl(g):e.studioUrl);if(!S)return f;const{_id:M,_type:N,_projectId:W,_dataset:D}=g;return q(f,{origin:"sanity.io",href:H({baseUrl:S,workspace:O,tool:L,id:M,type:N,path:s,...!e.omitCrossDatasetReferenceData&&{dataset:D,projectId:W}})},!1)});if(o){const s=l.skipped.length,g=l.encoded.length;if((s||g)&&((a=(o==null?void 0:o.groupCollapsed)||o.log)==null||a("[@sanity/client]: Encoding source map into result"),(u=o.log)==null||u.call(o,"[@sanity/client]: Paths encoded: ".concat(l.encoded.length,", skipped: ").concat(l.skipped.length))),l.encoded.length>0&&((d=o==null?void 0:o.log)==null||d.call(o,"[@sanity/client]: Table of encoded paths"),(p=(o==null?void 0:o.table)||o.log)==null||p(l.encoded)),l.skipped.length>0){const w=new Set;for(const{path:f}of l.skipped)w.add(f.replace(x,"0").replace(/\[\d+\]/g,"[]"));(h=o==null?void 0:o.log)==null||h.call(o,"[@sanity/client]: List of skipped paths",[...w.values()])}(s||g)&&((_=o==null?void 0:o.groupEnd)==null||_.call(o))}return C}function R(n){return I(T(n))}var nt=Object.freeze({__proto__:null,stegaEncodeSourceMap:Z});export{G as encodeIntoResult,Z as stegaEncodeSourceMap,nt as stegaEncodeSourceMap$1};