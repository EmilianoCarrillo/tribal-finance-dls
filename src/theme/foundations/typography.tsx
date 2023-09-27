/* Typography theme overrides and textStyles */
/* https://chakra-ui.com/docs/styled-system/text-and-layer-styles#text-styles */

const fonts = {
    /* Our theme */
    default: "Public Sans, sans-serif",
    display: "Work Sans, sans-serif",

    /* Default theme overrides */
    body: "Public Sans, sans-serif",
    heading: "Public Sans, sans-serif",
}

const fontSizes = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.375rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.5rem",
    "5xl": "3.5rem",
    // Legacy styles 🚨
    heading: {
        '2xl': '56px',
        xl: '40px',
        lg: '30px',
        md: '22px',
        sm: '18px',
    },
    body: {
        lg: '16px',
        md: '14px',
        sm: '12px',
    },
    // 🚨
}

// Legacy styles 🚨
const lineHeights = {
    heading: {
        lg: '42px',
        md: '25px',
        sm: '25px',
    },
}
const fontWeights = {
    normal: 400,
    medium: 600,
    heading: {
        lg: 700,
        sm: 600,
    },
}
// 🚨

const textStyles = {
    body: {
        small: {
            fontFamily: 'default',
            fontSize: 'xs',
            fontWeight: '400',
            lineHeight: 'tall',
            letterSpacing: 'normal',
        },
        medium: {
            fontFamily: 'default',
            fontSize: 'sm',
            fontWeight: '400',
            lineHeight: 'tall',
            letterSpacing: 'normal',
        },
        large: {
            fontFamily: 'default',
            fontSize: 'md',
            fontWeight: '400',
            lineHeight: 'base',
            letterSpacing: 'normal',
        }
    },
    tabular: {
        small: {
            fontFamily: 'heaading',
            fontSize: 'xs',
            fontWeight: '400',
            lineHeight: 'tall',
            letterSpacing: 'base',
            'font-variant-numeric': 'tabular-nums',
        },
        medium: {
            fontFamily: 'default',
            fontSize: 'sm',
            fontWeight: '400',
            lineHeight: 'tall',
            letterSpacing: 'base',
            'font-variant-numeric': 'tabular-nums',
        }
    },
    subtitle: {
        fontFamily: 'default',
        fontSize: ['sm', 'md'],
        fontWeight: '400',
        lineHeight: ['tall', 'base'],
        letterSpacing: 'normal',
    },
    heading: {
        small: {
            fontFamily: 'default',
            fontSize: ['md', 'lg'],
            fontWeight: '600',
            lineHeight: 'base',
            letterSpacing: 'normal',            
        },
        medium: {
            fontFamily: 'default',
            fontSize: ['lg', 'xl'],
            fontWeight: '600',
            lineHeight: ['base', 'short'],
            letterSpacing: ['normal', 'tight'],
        },
        large: {
            fontFamily: 'default',
            fontSize: ['xl', '2xl'],
            fontWeight: '600',
            lineHeight: ['short','shorter'],
            letterSpacing: 'tight',
        }
    },
    display: {
        small: {
            fontFamily: 'display',
            fontSize: ['2xl', '3xl'],
            fontWeight: '600',
            lineHeight: ['short','shorter'],
            letterSpacing: 'tight',
        },
        medium: {
            fontFamily: 'display',
            fontSize: ['3xl', '4xl'],
            fontWeight: '600',
            lineHeight: 'shorter',
            letterSpacing: 'tight',
        },
        large: {
            fontFamily: 'display',
            fontSize: ['3xl', '5xl'],
            fontWeight: '600',
            lineHeight: 'shorter',
            letterSpacing: 'tight',
        }
    }
}

export  {fonts, fontSizes, textStyles, lineHeights, fontWeights}