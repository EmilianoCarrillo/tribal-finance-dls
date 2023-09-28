export declare const tabsTheme: {
    baseStyle?: {
        root: {
            paddingTop: string;
            paddingBottom: string;
        };
        tab: {
            fontSize: string;
            fontWeight: string;
            borderRadius: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("root" | "tab" | "tablist" | "tabpanel" | "tabpanels" | "indicator")[];
        }>;
    } | undefined;
    variants?: {
        dark: {
            root: {
                backgroundColor: string;
            };
            tab: {
                color: string;
                _selected: {
                    backgroundColor: string;
                };
            };
        };
        light: {
            root: {
                backgroundColor: string;
            };
            tab: {
                fontSize: string;
                _selected: {
                    backgroundColor: string;
                };
            };
        };
        primary: {
            root: {
                backgroundColor: string;
            };
            tab: {
                fontSize: string;
                _selected: {
                    backgroundColor: string;
                    borderBottom: string;
                    borderColor: string;
                    color: string;
                };
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "light" | "dark" | "primary" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("root" | "tab" | "tablist" | "tabpanel" | "tabpanels" | "indicator")[];
};
