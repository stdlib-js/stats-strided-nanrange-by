"use strict";var q=function(n,a){return function(){try{return a||n((a={exports:{}}).exports,a),a.exports}catch(i){throw (a=0, i)}};};var p=q(function(I,m){
var d=require('@stdlib/math-base-assert-is-nan/dist');function P(n,a,i,c,f,s){var v,u,o,t,e,r,l;if(v=a.data,u=a.accessors[0],n===1||i===0)return r=f.call(s,u(v,c),0,c,v),r===void 0||d(r)?NaN:0;for(e=c,l=0;l<n&&(t=f.call(s,u(v,e),l,e,v),!(t===t&&t!==void 0));l++)e+=i;if(l===n)return NaN;for(o=t,l+=1,l;l<n;l++)e+=i,r=f.call(s,u(v,e),l,e,v),!(r===void 0||d(r))&&(r<t?t=r:r>o&&(o=r));return o-t}m.exports=P
});var y=q(function(J,x){
var B=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=p();function z(n,a,i,c,f,s){var v,u,o,t,e,r;if(n<=0)return NaN;if(t=R(a),t.accessorProtocol)return w(n,t,i,c,f,s);if(n===1||i===0)return e=f.call(s,a[c],0,c,a),e===void 0||B(e)?NaN:0;for(o=c,r=0;r<n&&(u=f.call(s,a[o],r,o,a),!(u===u&&u!==void 0));r++)o+=i;if(r===n)return NaN;for(v=u,r+=1,r;r<n;r++)o+=i,e=f.call(s,a[o],r,o,a),!(e===void 0||B(e))&&(e<u?u=e:e>v&&(v=e));return v-u}x.exports=z
});var N=q(function(K,j){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=y();function E(n,a,i,c,f){return D(n,a,i,C(n,i),c,f)}j.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=N(),G=y();F(O,"ndarray",G);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
