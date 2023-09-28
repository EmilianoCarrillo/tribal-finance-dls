export declare const tableTheme: {
    baseStyle?: {
        th: {
            backgroundColor: string;
            color: string;
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("table" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot" | "caption")[];
        }>;
    } | undefined;
    variants?: {
        noHeader: {
            th: {
                backgroundColor: string;
                color: string;
                textTransform: string;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "noHeader" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("table" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot" | "caption")[];
};
