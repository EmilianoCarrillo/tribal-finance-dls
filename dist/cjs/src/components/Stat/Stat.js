"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=require("@chakra-ui/react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(require("react"));exports.Stat=({children:r,orientation:i,size:n,...l})=>{const u="horizontal"===i?"row":"column",o={lg:{gap:1},md:{gap:.5},sm:{gap:.5}}[n||"md"],c=a.default.Children.map(r,(e=>a.default.isValidElement(e)?a.default.cloneElement(e,{size:n}):e));return e.jsx(t.Flex,{direction:u,align:"start",gap:o.gap,...l,children:c})};
//# sourceMappingURL=Stat.js.map
