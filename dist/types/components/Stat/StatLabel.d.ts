/// <reference types="react" />
import { FlexProps } from "@chakra-ui/react";
export interface StatLabelProps extends FlexProps {
    label: string;
    size?: "lg" | "md" | "sm";
    tooltip?: string;
}
declare const StatLabel: React.FC<StatLabelProps>;
export default StatLabel;
