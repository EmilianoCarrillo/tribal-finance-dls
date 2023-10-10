import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
import { StatLabelProps } from "./StatLabel";
import { StatValueProps } from "./StatValue";

interface StatProps extends FlexProps {
  size?: "lg" | "md" | "sm";
  orientation?: "vertical" | "horizontal";
  children?: React.ReactElement<StatLabelProps | StatValueProps>[] | React.ReactElement<StatLabelProps | StatValueProps>;
}

export const Stat: React.FC<StatProps> = ({ children, orientation, size, ...props }) => {
  const flexDirection = orientation === "horizontal" ? "row" : "column";

  const sizeStyles = {
    lg: {
      gap: 1
    },
    md: {
      gap: 0.5
    },
    sm: {
      gap: 0.5
    },
  }[size || "md"];

  const childrenWithSize = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { size });
    }
    return child;
  });

  return (
    <Flex direction={flexDirection} align="start" gap={sizeStyles.gap} {...props}>
      {childrenWithSize}
    </Flex>
  );
};
