/* Main theme entrypoint */

import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "./foundations/colors";
import semanticTokens from "./foundations/semanticTokens";
import {fonts, fontSizes, textStyles} from './foundations/typography';
import styles from './styles';

const config: ThemeConfig = {
    cssVarPrefix: "tf",
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    colors,
    semanticTokens,
    fonts,
    fontSizes,
    textStyles,
    styles
});

export default theme;