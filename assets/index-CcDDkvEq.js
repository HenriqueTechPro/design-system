import{r as l}from"./index-DH5ua8nC.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a.apply(this,arguments)}function p(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function d(...e){return r=>e.forEach(n=>p(n,r))}function y(...e){return l.useCallback(d(...e),e)}const $=l.forwardRef((e,r)=>{const{children:n,...t}=e,c=l.Children.toArray(n),o=c.find(h);if(o){const i=o.props.children,s=c.map(u=>u===o?l.Children.count(i)>1?l.Children.only(null):l.isValidElement(i)?i.props.children:null:u);return l.createElement(f,a({},t,{ref:r}),l.isValidElement(i)?l.cloneElement(i,void 0,s):null)}return l.createElement(f,a({},t,{ref:r}),n)});$.displayName="Slot";const f=l.forwardRef((e,r)=>{const{children:n,...t}=e;return l.isValidElement(n)?l.cloneElement(n,{...b(t,n.props),ref:r?d(r,n.ref):n.ref}):l.Children.count(n)>1?l.Children.only(null):null});f.displayName="SlotClone";const m=({children:e})=>l.createElement(l.Fragment,null,e);function h(e){return l.isValidElement(e)&&e.type===m}function b(e,r){const n={...r};for(const t in r){const c=e[t],o=r[t];/^on[A-Z]/.test(t)?c&&o?n[t]=(...s)=>{o(...s),c(...s)}:c&&(n[t]=c):t==="style"?n[t]={...c,...o}:t==="className"&&(n[t]=[c,o].filter(Boolean).join(" "))}return{...e,...n}}export{$,a as _,y as a,m as b};
