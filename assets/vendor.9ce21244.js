function S(){}function C(t){return t()}function v(){return Object.create(null)}function _(t){t.forEach(C)}function O(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let i;function L(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function q(t){return Object.keys(t).length===0}function Q(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function B(t){t.parentNode.removeChild(t)}function U(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function W(){return M(" ")}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t){return Array.from(t.childNodes)}let b;function l(t){b=t}const a=[],j=[],h=[],A=[],T=Promise.resolve();let $=!1;function z(){$||($=!0,T.then(N))}function y(t){h.push(t)}const p=new Set;let d=0;function N(){const t=b;do{for(;d<a.length;){const e=a[d];d++,l(e),D(e.$$)}for(l(null),a.length=0,d=0;j.length;)j.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];p.has(n)||(p.add(n),n())}h.length=0}while(a.length);for(;A.length;)A.pop()();$=!1,p.clear(),l(t)}function D(t){if(t.fragment!==null){t.update(),_(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const F=new Set;function G(t,e){t&&t.i&&(F.delete(t),t.i(e))}function H(t,e,n,c){const{fragment:o,on_mount:m,on_destroy:s,after_update:g}=t.$$;o&&o.m(e,n),c||y(()=>{const f=m.map(C).filter(O);s?s.push(...f):_(f),t.$$.on_mount=[]}),g.forEach(y)}function I(t,e){const n=t.$$;n.fragment!==null&&(_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){t.$$.dirty[0]===-1&&(a.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,c,o,m,s,g=[-1]){const f=b;l(t);const r=t.$$={fragment:null,ctx:null,props:m,update:S,not_equal:o,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:v(),dirty:g,skip_bound:!1,root:e.target||f.$$.root};s&&s(r.root);let x=!1;if(r.ctx=n?n(t,e.props||{},(u,k,...w)=>{const E=w.length?w[0]:k;return r.ctx&&o(r.ctx[u],r.ctx[u]=E)&&(!r.skip_bound&&r.bound[u]&&r.bound[u](E),x&&J(t,u)),k}):[],r.update(),x=!0,_(r.before_update),r.fragment=c?c(r.ctx):!1,e.target){if(e.hydrate){const u=P(e.target);r.fragment&&r.fragment.l(u),u.forEach(B)}else r.fragment&&r.fragment.c();e.intro&&G(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),N()}l(f)}class Z{$destroy(){I(this,1),this.$destroy=S}$on(e,n){const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const o=c.indexOf(n);o!==-1&&c.splice(o,1)}}$set(e){this.$$set&&!q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Z as S,W as a,X as b,R as c,Q as d,V as e,B as f,L as g,U as h,Y as i,S as n,K as s,M as t};
