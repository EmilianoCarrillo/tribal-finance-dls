/* Main theme entrypoint */

import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "./foundations/colors";
import semanticTokens from "./foundations/semanticTokens";
import {fonts, fontSizes, textStyles} from './foundations/typography';
import styles from './styles';
import { containerTheme } from "./components/container";
import { cardTheme } from "./components/card";
import { avatarTheme } from "./components/avatar";
import { badgeTheme } from "./components/badge";
import { buttonTheme } from "./components/button";
import { dividerTheme } from "./components/divider";
import { tabsTheme } from "./components/tabs";
import { sliderTheme } from "./components/slider";
import { tooltipTheme } from "./components/tooltip";
import { tableTheme } from "./components/table";

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
    styles,
    components: {
        Container: containerTheme,
        Card: cardTheme,
        // Legacy styles 🚨
        Avatar: avatarTheme,
        Badge: badgeTheme,
        Button: buttonTheme,
        Divider: dividerTheme,
        Tabs: tabsTheme,
        Slider: sliderTheme,
        Tooltip: tooltipTheme,
        Table: tableTheme,
        // 🚨
    }
});

export default theme;