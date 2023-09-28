export declare const avatarTheme: {
    baseStyle?: {
        size: string;
        container: {
            bg: string;
            color: string;
        };
    } | undefined;
    sizes?: {
        xs: {
            width: string;
            height: string;
            container: {
                borderRadius: number;
            };
        };
        sm: {
            width: string;
            height: string;
            container: {
                borderRadius: number;
            };
        };
        md: {
            width: string;
            height: string;
            container: {
                borderRadius: number;
            };
        };
        lg: {
            width: string;
            height: string;
            container: {
                borderRadius: number;
            };
        };
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    } | undefined;
    defaultProps?: {
        size?: "xs" | "sm" | "md" | "lg" | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
