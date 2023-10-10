/// <reference types="react" />
import { FlexProps } from "@chakra-ui/react";
export interface StatValueProps extends FlexProps {
    value: number | string;
    currency?: string;
    size?: "lg" | "md" | "sm";
    variant?: "strong" | "subtle";
    numberStyle?: "default" | "tabular";
}
export declare const StatValue: React.FC<StatValueProps>;
