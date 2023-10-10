import { FlexProps } from "@chakra-ui/react";
import React from "react";
import { StatLabelProps } from "./StatLabel";
import { StatValueProps } from "./StatValue";
interface StatProps extends FlexProps {
    size?: "lg" | "md" | "sm";
    orientation?: "vertical" | "horizontal";
    children?: React.ReactElement<StatLabelProps | StatValueProps>[] | React.ReactElement<StatLabelProps | StatValueProps>;
}
export declare const Stat: React.FC<StatProps>;
export {};
