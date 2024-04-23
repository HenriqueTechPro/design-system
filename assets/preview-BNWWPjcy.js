function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-D74VZ5Uw.js","assets/iframe-C7hx5csr.js","assets/index-DH5ua8nC.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/react-18-iZ4baTDS.js","assets/index-D9uilScg.js","assets/index-UQvu9RDE.js","assets/index-CcDDkvEq.js","assets/index-Dkj0J1ds.js","assets/_getPrototype-BWzB5qPv.js","assets/index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-C7hx5csr.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-D74VZ5Uw.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
