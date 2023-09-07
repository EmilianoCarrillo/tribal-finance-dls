import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "./foundations/colors";
import semanticColors from "./foundations/semanticColors";

const semanticTokens = {
    colors: { 
        black: '#000',
        white: '#FFF',

        bg: {
            'neutral': {
                default: semanticColors.colors.light["background-neutral"],
                _dark: semanticColors.colors.dark["background-neutral"]
            },
            'neutral-active': {
                default: semanticColors.colors.light["background-neutral-active"],
                _dark: semanticColors.colors.dark["background-neutral-active"]
            },
            'neutral-faded': {
                default: semanticColors.colors.light["background-neutral-faded"],
                _dark: semanticColors.colors.dark["background-neutral-faded"]
            },
            'neutral-hover': {
                default: semanticColors.colors.light["background-neutral-hover"],
                _dark: semanticColors.colors.dark["background-neutral-hover"]
            },
            'primary': {
                default: semanticColors.colors.light["background-primary"],
                _dark: semanticColors.colors.dark["background-primary"]
            },
            'primary-active': {
                default: semanticColors.colors.light["background-primary-active"],
                _dark: semanticColors.colors.dark["background-primary-active"]
            },
            'primary-faded': {
                default: semanticColors.colors.light["background-primary-faded"],
                _dark: semanticColors.colors.dark["background-primary-faded"]
            },
            'primary-hover': {
                default: semanticColors.colors.light["background-primary-hover"],
                _dark: semanticColors.colors.dark["background-primary-hover"]
            },
            'positive': {
                default: semanticColors.colors.light["background-positive"],
                _dark: semanticColors.colors.dark["background-positive"]
            },
            'positive-active': {
                default: semanticColors.colors.light["background-positive-active"],
                _dark: semanticColors.colors.dark["background-positive-active"]
            },
            'positive-faded': {
                default: semanticColors.colors.light["background-positive-faded"],
                _dark: semanticColors.colors.dark["background-positive-faded"]
            },
            'positive-hover': {
                default: semanticColors.colors.light["background-positive-hover"],
                _dark: semanticColors.colors.dark["background-positive-hover"]
            },
            'critical': {
                default: semanticColors.colors.light["background-critical"],
                _dark: semanticColors.colors.dark["background-critical"]
            },
            'critical-active': {
                default: semanticColors.colors.light["background-critical-active"],
                _dark: semanticColors.colors.dark["background-critical-active"]
            },
            'critical-faded': {
                default: semanticColors.colors.light["background-critical-faded"],
                _dark: semanticColors.colors.dark["background-critical-faded"]
            },
            'critical-hover': {
                default: semanticColors.colors.light["background-critical-hover"],
                _dark: semanticColors.colors.dark["background-critical-hover"]
            },
            'caution': {
                default: semanticColors.colors.light["background-caution"],
                _dark: semanticColors.colors.dark["background-caution"]
            },
            'caution-faded': {
                default: semanticColors.colors.light["background-caution-faded"],
                _dark: semanticColors.colors.dark["background-caution-faded"]
            },
            'info': {
                default: semanticColors.colors.light["background-info"],
                _dark: semanticColors.colors.dark["background-info"]
            },
            'info-faded': {
                default: semanticColors.colors.light["background-info-faded"],
                _dark: semanticColors.colors.dark["background-info-faded"]
            },
            'elevation-raised': {
                default: semanticColors.colors.light["background-elevation-raised"],
                _dark: semanticColors.colors.dark["background-elevation-raised"]
            },
            'page': {
                default: semanticColors.colors.light["background-page"],
                _dark: semanticColors.colors.dark["background-page"]
            },
        },           
        
        border: {
            'caution': {
                default: semanticColors.colors.light["border-caution"],
                _dark: semanticColors.colors.dark["border-caution"]
            },
            'caution-faded': {
                default: semanticColors.colors.light["border-caution-faded"],
                _dark: semanticColors.colors.dark["border-caution-faded"]
            },
            'critical': {
                default: semanticColors.colors.light["border-critical"],
                _dark: semanticColors.colors.dark["border-critical"]
            },
            'critical-faded': {
                default: semanticColors.colors.light["border-critical-faded"],
                _dark: semanticColors.colors.dark["border-critical-faded"]
            },
            'info': {
                default: semanticColors.colors.light["border-info"],
                _dark: semanticColors.colors.dark["border-info"]
            },
            'info-faded': {
                default: semanticColors.colors.light["border-info-faded"],
                _dark: semanticColors.colors.dark["border-info-faded"]
            },
            'neutral': {
                default: semanticColors.colors.light["border-neutral"],
                _dark: semanticColors.colors.dark["border-neutral"]
            },
            'neutral-faded': {
                default: semanticColors.colors.light["border-neutral-faded"],
                _dark: semanticColors.colors.dark["border-neutral-faded"]
            },
            'positive': {
                default: semanticColors.colors.light["border-positive"],
                _dark: semanticColors.colors.dark["border-positive"]
            },
            'positive-faded': {
                default: semanticColors.colors.light["border-positive-faded"],
                _dark: semanticColors.colors.dark["border-positive-faded"]
            },
            'primary': {
                default: semanticColors.colors.light["border-primary"],
                _dark: semanticColors.colors.dark["border-primary"]
            },
            'primary-faded': {
                default: semanticColors.colors.light["border-primary-faded"],
                _dark: semanticColors.colors.dark["border-primary-faded"]
            },
        },

        fg: {  
            'caution': {
                default: semanticColors.colors.light["foreground-caution"],
                _dark: semanticColors.colors.dark["foreground-caution"]
            },
            'critical': {
                default: semanticColors.colors.light["foreground-critical"],
                _dark: semanticColors.colors.dark["foreground-critical"]
            },
            'info': {
                default: semanticColors.colors.light["foreground-info"],
                _dark: semanticColors.colors.dark["foreground-info"]
            },
            'neutral': {
                default: semanticColors.colors.light["foreground-neutral"],
                _dark: semanticColors.colors.dark["foreground-neutral"]
            },
            'neutral-faded': {
                default: semanticColors.colors.light["foreground-neutral-faded"],
                _dark: semanticColors.colors.dark["foreground-neutral-faded"]
            },
            'positive': {
                default: semanticColors.colors.light["foreground-positive"],
                _dark: semanticColors.colors.dark["foreground-positive"]
            },
            'primary': {
                default: semanticColors.colors.light["foreground-primary"],
                _dark: semanticColors.colors.dark["foreground-primary"]
            },
        },

        'on-bg': {
            'caution': {
                default: semanticColors.colors.light["on-background-caution"],
                _dark: semanticColors.colors.dark["on-background-caution"]
            },
            'critical': {
                default: semanticColors.colors.light["on-background-critical"],
                _dark: semanticColors.colors.dark["on-background-critical"]
            },
            'info': {
                default: semanticColors.colors.light["on-background-info"],
                _dark: semanticColors.colors.dark["on-background-info"]
            },
            'positive': {
                default: semanticColors.colors.light["on-background-positive"],
                _dark: semanticColors.colors.dark["on-background-positive"]
            },
            'primary': {
                default: semanticColors.colors.light["on-background-primary"],
                _dark: semanticColors.colors.dark["on-background-primary"]
            }
        },
    }
}

const styles = {
    global: {
        body: { 
            background: 'bg.page',
        }
    }
}

const config: ThemeConfig = {
    cssVarPrefix: "tf",
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    colors,
    semanticTokens,
    styles
});

export default theme;