import{c as C,j as o,B as j,d as w}from"./index-3Z6JWa_O.js";import{r as D}from"./index-DH5ua8nC.js";import"./index-CcDDkvEq.js";import"./index-D9uilScg.js";import"./_commonjsHelpers-Cpj98o6Y.js";const W={title:"Data display/Toast",component:C,args:{title:"Toast dispatch",description:"The message has been dispatch...",open:!0,type:"normal"},argTypes:{type:{options:["normal","success","error","warning"],control:{type:"inline-radio"}},open:{control:{type:"boolean"}}}},e={},s={args:{type:"success"}},r={args:{type:"error"}},t={args:{type:"warning"}},a={argTypes:{type:{table:{disable:!0}},open:{table:{disable:!0}},title:{table:{disable:!0}},description:{table:{disable:!0}}},decorators:[B=>{const[E,n]=D.useState(!1);return o.jsxs(j,{css:{display:"flex",flexDirection:"column",gap:"$2"},children:[o.jsx(w,{onClick:()=>n(O=>!O),children:"Finish payment".toUpperCase()}),B({args:{title:"Toast dispatch",description:"Toast has been dispatch in 1s ago",open:E,onOpenChange:n}})]})}]};var p,c,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,d,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'error'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,h,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,S,f;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    type: {
      table: {
        disable: true
      }
    },
    open: {
      table: {
        disable: true
      }
    },
    title: {
      table: {
        disable: true
      }
    },
    description: {
      table: {
        disable: true
      }
    }
  },
  decorators: [Story => {
    const [open, setOpen] = useState(false);
    return <Box css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '$2'
    }}>
          <Button onClick={() => setOpen(state => !state)}>
            {\`Finish payment\`.toUpperCase()}
          </Button>
          {Story({
        args: {
          title: 'Toast dispatch',
          description: 'Toast has been dispatch in 1s ago',
          open,
          onOpenChange: setOpen
        }
      })}
        </Box>;
  }]
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const $=["Primary","Success","Error","Warning","ExampleToast"];export{r as Error,a as ExampleToast,e as Primary,s as Success,t as Warning,$ as __namedExportsOrder,W as default};
