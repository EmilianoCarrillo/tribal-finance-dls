"use strict";(self.webpackChunktribal_finance_poc=self.webpackChunktribal_finance_poc||[]).push([[342],{"./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return VStack}});var chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs");Object.freeze(["base","sm","md","lg","xl","2xl"]);var react=__webpack_require__("./node_modules/react/index.js");var chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline:isInline,direction:directionProp,align:align,justify:justify,spacing:spacing="0.5rem",wrap:wrap,children:children,divider:divider,className:className,shouldWrapChildren:shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing:spacing,direction:direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(prop=direction,mapper=value=>dividerStyles[value],Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,dist.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null)};var prop,mapper}({spacing:spacing,direction:direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=function getValidChildren(children){return react.Children.toArray(children).filter((child=>(0,react.isValidElement)(child)))}(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref:ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack";var VStack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>(0,jsx_runtime.jsx)(Stack,{align:"center",...props,direction:"column",ref:ref})));VStack.displayName="VStack"},"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Design foundations/Border.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_emilianocarrillo_Desktop_tribal_finance_dls_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_styles_theme_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/theme.tsx"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/react/dist/chunk-QAITB7GG.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs"),_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/ColorSwatch.tsx");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Design foundations/Color/Border"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.x,{theme:_styles_theme_tsx__WEBPACK_IMPORTED_MODULE_2__.Z,resetCSS:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.g,{spacing:4,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.caution"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.caution-faded"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.critical"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.critical-faded"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.info"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.info-faded"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.neutral"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.neutral-faded"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.positive"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.positive-faded"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_3__.Z,{colorName:"border.primary-faded"})]})})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_emilianocarrillo_Desktop_tribal_finance_dls_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./src/stories/ColorSwatch.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return stories_ColorSwatch}});__webpack_require__("./node_modules/react/index.js");var chunk_WNDUHNHH=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-WNDUHNHH.mjs"),chunk_QAITB7GG=__webpack_require__("./node_modules/@chakra-ui/react/dist/chunk-QAITB7GG.mjs"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Flex=(0,chunk_ZJJGQIVY.G)((function Flex2(props,ref){const{direction:direction,align:align,justify:justify,wrap:wrap,basis:basis,grow:grow,shrink:shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref:ref,__css:styles,...rest})}));Flex.displayName="Flex";var Box=(0,chunk_ZHQNHOQS.m)("div");Box.displayName="Box";var Square=(0,chunk_ZJJGQIVY.G)((function Square2(props,ref){const{size:size,centerContent:centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,jsx_runtime.jsx)(Box,{ref:ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square",(0,chunk_ZJJGQIVY.G)((function Circle2(props,ref){const{size:size,...rest}=props;return(0,jsx_runtime.jsx)(Square,{size:size,ref:ref,borderRadius:"9999px",...rest})})).displayName="Circle";var chunk_TKWR62NH=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs");var Text=(0,chunk_ZJJGQIVY.G)((function Text2(props,ref){const styles=(0,chunk_TKWR62NH.mq)("Text",props),{className:className,align:align,decoration:decoration,casing:casing,...rest}=(0,dist.Lr)(props),aliasedProps=function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.p,{ref:ref,className:(0,shared_utils_dist.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text";var theme=__webpack_require__("./src/styles/theme.tsx"),ColorSwatch=function ColorSwatch(_ref){var colorName=_ref.colorName,hexValue=(0,chunk_WNDUHNHH.dQ)("colors",[colorName]);return(0,jsx_runtime.jsx)(chunk_QAITB7GG.x,{theme:theme.Z,resetCSS:!0,children:(0,jsx_runtime.jsxs)(Flex,{gap:"16px",alignItems:"center",minW:"400px",children:[(0,jsx_runtime.jsx)(Box,{bg:colorName,h:"16px",w:"16px",borderRadius:"md",border:"1px solid",borderColor:"blackAlpha.300"}),(0,jsx_runtime.jsxs)(Box,{children:[(0,jsx_runtime.jsx)(Text,{color:"fg.neutral",fontSize:"sm",fontWeight:"600",my:"0px",children:colorName}),(0,jsx_runtime.jsx)(Text,{color:"fg.neutral-faded",fontSize:"sm",my:"0px",children:hexValue})]})]})})},stories_ColorSwatch=ColorSwatch;try{ColorSwatch.displayName="ColorSwatch",ColorSwatch.__docgenInfo={description:"",displayName:"ColorSwatch",props:{colorName:{defaultValue:null,description:"",name:"colorName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ColorSwatch.tsx#ColorSwatch"]={docgenInfo:ColorSwatch.__docgenInfo,name:"ColorSwatch",path:"src/stories/ColorSwatch.tsx#ColorSwatch"})}catch(__react_docgen_typescript_loader_error){}}}]);