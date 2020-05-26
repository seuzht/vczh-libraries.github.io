window["Gaclib-ArticleView"]=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";n.r(e),n.d(e,"DefaultTemplateProcessor",(function(){return O})),n.d(e,"defaultTemplateProcessor",(function(){return L})),n.d(e,"directive",(function(){return r})),n.d(e,"isDirective",(function(){return s})),n.d(e,"removeNodes",(function(){return l})),n.d(e,"reparentNodes",(function(){return a})),n.d(e,"noChange",(function(){return u})),n.d(e,"nothing",(function(){return c})),n.d(e,"AttributeCommitter",(function(){return V})),n.d(e,"AttributePart",(function(){return E})),n.d(e,"BooleanAttributePart",(function(){return A})),n.d(e,"EventPart",(function(){return k})),n.d(e,"isIterable",(function(){return T})),n.d(e,"isPrimitive",(function(){return N})),n.d(e,"NodePart",(function(){return P})),n.d(e,"PropertyCommitter",(function(){return S})),n.d(e,"PropertyPart",(function(){return j})),n.d(e,"parts",(function(){return H})),n.d(e,"render",(function(){return B})),n.d(e,"templateCaches",(function(){return I})),n.d(e,"templateFactory",(function(){return $})),n.d(e,"TemplateInstance",(function(){return x})),n.d(e,"SVGTemplateResult",(function(){return b})),n.d(e,"TemplateResult",(function(){return w})),n.d(e,"createMarker",(function(){return v})),n.d(e,"isTemplatePartActive",(function(){return g})),n.d(e,"Template",(function(){return m})),n.d(e,"html",(function(){return F})),n.d(e,"svg",(function(){return W}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,r=t=>(...e)=>{const n=t(...e);return i.set(n,!0),n},s=t=>"function"==typeof t&&i.has(t),o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(t,e,n=null,i=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,i),e=n}},l=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},u={},c={},d=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${d}--\x3e`,p=new RegExp(`${d}|${h}`);class m{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let s=0,o=-1,a=0;const{strings:l,values:{length:u}}=t;for(;a<u;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)f(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=l[a],n=_.exec(e)[2],i=n.toLowerCase()+"$lit$",r=t.getAttribute(i);t.removeAttribute(i);const s=r.split(p);this.parts.push({type:"attribute",index:o,name:n,strings:s}),a+=s.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(d)>=0){const i=t.parentNode,r=e.split(p),s=r.length-1;for(let e=0;e<s;e++){let n,s=r[e];if(""===s)n=v();else{const t=_.exec(s);null!==t&&f(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(s)}i.insertBefore(n,t),this.parts.push({type:"node",index:++o})}""===r[s]?(i.insertBefore(v(),t),n.push(t)):t.data=r[s],a+=s}}else if(8===t.nodeType)if(t.data===d){const e=t.parentNode;null!==t.previousSibling&&o!==s||(o++,e.insertBefore(v(),t)),s=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(n.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(d,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const f=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},g=t=>-1!==t.index,v=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class x{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,s=0,a=0,l=i.nextNode();for(;s<n.length;)if(r=n[s],g(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${d} `;class w{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const s=_.exec(t);e+=null===s?t+(n?y:h):t.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+d}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class b extends w{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),a(e,n.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const N=t=>null===t||!("object"==typeof t||"function"==typeof t),T=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class V{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new E(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(N(t)||!T(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===u||N(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=u,t(this)}this.value!==u&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(v()),this.endNode=t.appendChild(v())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=v()),t.__insert(this.endNode=v())}insertAfterPart(t){t.__insert(this.startNode=v()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=u,t(this)}const t=this.__pendingValue;t!==u&&(N(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):T(t)?this.__commitIterable(t):t===c?(this.value=c,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof x&&this.value.template===e)this.value.update(t.values);else{const n=new x(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const r of t)n=e[i],void 0===n&&(n=new P(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){l(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=u,t(this)}if(this.__pendingValue===u)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=u}}class S extends V{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends E{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class k{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=u,t(this)}if(this.__pendingValue===u)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=C(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=u}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const C=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;class O{handleAttributeExpressions(t,e,n,i){const r=e[0];if("."===r){return new S(t,e.slice(1),n).parts}if("@"===r)return[new k(t,e.slice(1),i.eventContext)];if("?"===r)return[new A(t,e.slice(1),n)];return new V(t,e,n).parts}handleTextExpression(t){return new P(t)}}const L=new O;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function $(t){let e=I.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},I.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(d);return n=e.keyString.get(i),void 0===n&&(n=new m(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const I=new Map,H=new WeakMap,B=(t,e,n)=>{let i=H.get(e);void 0===i&&(l(e,e.firstChild),H.set(e,i=new P(Object.assign({templateFactory:$},n))),i.appendInto(e)),i.setValue(t),i.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const F=(t,...e)=>new w(t,e,"html",L),W=(t,...e)=>new b(t,e,"svg",L)},function(t,e,n){"use strict";var i=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};Object.defineProperty(e,"__esModule",{value:!0}),e.viewExport=void 0;var r,s=n(2),o=n(0);e.viewExport={renderView:function(t,e){var n=window["MVC-Resources.article"],a=o.html(r||(r=i(["\n","\n"],["\n","\n"])),s.renderArticle(n));o.render(a,e)}}},function(t,e,n){"use strict";var i=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};Object.defineProperty(e,"__esModule",{value:!0}),e.renderArticle=void 0;var r,s,o,a,l,u,c,d,h,p,m,f,g,v,_,x,y,w,b,N,T,V,E,P,A,S,j=n(0);function M(t){return j.html(o||(o=i(["",""],["",""])),t.items.map((function(t){return"ContentListItem"===t.kind?j.html(r||(r=i(["<li>","</li>"],["<li>","</li>"])),k(t.content)):j.html(s||(s=i(["<li>","</li>"],["<li>","</li>"])),t.paragraphs.map(C))})))}function k(t){return j.html(g||(g=i(["",""],["",""])),t.map((function(t){switch(t.kind){case"PageLink":return j.html(a||(a=i(['<a href="','" target="','">',"</a>"],['<a href="','" target="','">',"</a>"])),t.href,t.href.startsWith(".")?"_self":"_blank",k(t.content));case"AnchorLink":throw new Error("AnchorLink is not supported yet.");case"Name":return j.html(l||(l=i(['<span class="name">',"</span>"],['<span class="name">',"</span>"])),t.text);case"Image":return void 0===t.caption?j.html(u||(u=i(['<img src="','">'],['<img src="','">'])),t.src):j.html(c||(c=i(['<figure><img src="','"><figcaption>',"</figcaption></figure>"],['<figure><img src="','"><figcaption>',"</figcaption></figure>"])),t.src,t.caption);case"List":return t.ordered?j.html(d||(d=i(["<ol>","</ol>"],["<ol>","</ol>"])),M(t)):j.html(h||(h=i(["<ul>","</ul>"],["<ul>","</ul>"])),M(t));case"Strong":return j.html(p||(p=i(["<strong>","</strong>"],["<strong>","</strong>"])),k(t.content));case"Emphasise":return j.html(m||(m=i(["<em>","<em>"],["<em>","<em>"])),k(t.content));case"Program":if(void 0!==t.output)throw new Error("Program with output is not supported yet.");return j.html(f||(f=i(['<pre class="code"><code data-project="','" data-language="','">',"</code></pre>"],['<pre class="code"><code data-project="','" data-language="','">',"</code></pre>"])),void 0===t.project?"":t.project,void 0===t.language?"":t.language,t.code);default:return t.text}})))}function C(t){return j.html(v||(v=i(["<p>","</p>"],["<p>","</p>"])),k(t.content))}function O(t,e,n,r){var s=0;return j.html(A||(A=i(["\n","\n","\n","\n"],["\n","\n","\n","\n"])),function(t,e){switch(t){case 1:return j.html(_||(_=i(["<h1>","</h1>"],["<h1>","</h1>"])),e);case 2:return j.html(x||(x=i(["<h2>","</h2>"],["<h2>","</h2>"])),e);case 3:return j.html(y||(y=i(["<h3>","</h3>"],["<h3>","</h3>"])),e);case 4:return j.html(w||(w=i(["<h4>","</h4>"],["<h4>","</h4>"])),e);case 5:return j.html(b||(b=i(["<h5>","</h5>"],["<h5>","</h5>"])),e);default:return j.html(N||(N=i(["<h6>","</h6>"],["<h6>","</h6>"])),e)}}(e,j.html(E||(E=i(['\n<a id="','"></a>\n',"","\n        "],['\n<a id="','"></a>\n',"","\n        "])),L(t),void 0===n?"":n+" ",t.title)),r?j.html(P||(P=i(['<div class="index">',"</div>"],['<div class="index">',"</div>"])),function t(e){var n=e.content.filter((function(t){return"Topic"===t.kind}));return 0===n.length?"":j.html(V||(V=i(["<ul>","</ul>"],["<ul>","</ul>"])),n.map((function(e){return j.html(T||(T=i(['<li><a href="#','">',"</a>","</li>"],['<li><a href="#','">',"</a>","</li>"])),L(e),e.title,t(e))})))}(t)):"",t.content.map((function(t){if("Topic"===t.kind){var i=n;return void 0!==i&&(i+=++s+"."),O(t,e+1,i,!1)}return C(t)})))}function L(t){return void 0===t.anchor?t.title.split(/[^a-zA-Z0-9]+/).join("-"):t.anchor}e.renderArticle=function(t){return j.html(S||(S=i(['<div class="article">',"<div>"],['<div class="article">',"<div>"])),O(t.topic,1,t.numberBeforeTitle?"":void 0,t.index))}}]).viewExport;