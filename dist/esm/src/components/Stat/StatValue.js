import{jsxs as t,jsx as e}from"react/jsx-runtime";import{Flex as l,Text as r}from"@chakra-ui/react";const a=({value:a,currency:n,size:o,variant:i,numberStyle:m,...u})=>{const c={lg:{textStyle:"heading.small",fontWeight:"subtle"===i?400:600},md:{textStyle:"tabular"===m?"tabular.medium":"body.medium",fontWeight:"strong"===i?600:400},sm:{textStyle:"tabular"===m?"tabular.small":"body.small",fontWeight:"strong"===i?600:400}}[o||"md"],g=a?.toLocaleString("en-US");return t(l,{...u,children:[e(r,{textStyle:c.textStyle,color:"fg.neutral",fontWeight:c.fontWeight,children:g}),n&&e(r,{textStyle:c.textStyle,fontWeight:400,color:"fg.neutral-faded",ml:1,children:n})]})};export{a as StatValue};
//# sourceMappingURL=StatValue.js.map
