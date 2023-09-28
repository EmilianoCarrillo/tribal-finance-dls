declare const fonts: {
    default: string;
    display: string;
    body: string;
    heading: string;
};
declare const fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    heading: {
        '2xl': string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
    };
    body: {
        lg: string;
        md: string;
        sm: string;
    };
};
declare const lineHeights: {
    heading: {
        lg: string;
        md: string;
        sm: string;
    };
};
declare const fontWeights: {
    normal: number;
    medium: number;
    heading: {
        lg: number;
        sm: number;
    };
};
declare const textStyles: {
    body: {
        small: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        medium: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        large: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
    };
    tabular: {
        small: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            'font-variant-numeric': string;
        };
        medium: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            'font-variant-numeric': string;
        };
    };
    subtitle: {
        fontFamily: string;
        fontSize: string[];
        fontWeight: string;
        lineHeight: string[];
        letterSpacing: string;
    };
    heading: {
        small: {
            fontFamily: string;
            fontSize: string[];
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        medium: {
            fontFamily: string;
            fontSize: string[];
            fontWeight: string;
            lineHeight: string[];
            letterSpacing: string[];
        };
        large: {
            fontFamily: string;
            fontSize: string[];
            fontWeight: string;
            lineHeight: string[];
            letterSpacing: string;
        };
    };
    display: {
        small: {
            fontFamily: string;
            fontSize: string[];
            fontWeight: string;
            lineHeight: string[];
            letterSpacing: string;
        };
        medium: {
            fontFamily: string;
            fontSize: string[];
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        large: {
            fontFamily: string;
            fontSize: string[];
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
    };
};
export { fonts, fontSizes, textStyles, lineHeights, fontWeights };
