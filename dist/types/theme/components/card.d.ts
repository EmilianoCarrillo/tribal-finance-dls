export declare const cardTheme: {
    baseStyle?: {
        container: {
            bgColor: string;
            borderColor: string;
            borderWidth: string;
            boxShadow: string;
            borderRadius: string;
        };
        header: {
            paddingX: ("4" | "6")[];
            paddingTop: ("4" | "6")[];
            paddingBottom: string;
        };
        body: {
            paddingX: ("4" | "6")[];
        };
        footer: {
            paddingX: ("4" | "6")[];
            paddingTop: string;
            paddingBottom: ("4" | "6")[];
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "header" | "body" | "footer")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "header" | "body" | "footer")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "header" | "body" | "footer")[];
};
