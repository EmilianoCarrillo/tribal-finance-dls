export declare const sliderTheme: {
    baseStyle?: {
        thumb: {
            width: string;
            height: string;
            backgroundColor: string;
            borderRadius: string;
            borderColor: string;
            borderWidth: string;
        };
        track: {
            height: string;
            backgroundColor: string;
        };
        filledTrack: {
            backgroundColor: string;
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "track" | "filledTrack" | "thumb" | "mark")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "track" | "filledTrack" | "thumb" | "mark")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "track" | "filledTrack" | "thumb" | "mark")[];
};
