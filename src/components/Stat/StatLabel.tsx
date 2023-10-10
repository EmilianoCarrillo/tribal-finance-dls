import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { TooltipIcon } from "../TooltipIcon";

export interface StatLabelProps extends FlexProps  {
  label: string;
  size?: "lg" | "md" | "sm";
  tooltip?: string;
}

export const StatLabel: React.FC<StatLabelProps> = ({ label, size, tooltip, ...props }) => {
  const sizeStyles = {
    lg: "body.medium",
    md: "body.medium",
    sm: "body.small",
  }[size || "md"];

  return (
    <Flex alignItems="center" gap={1} {...props}>
      <Text textStyle={sizeStyles} color="fg.neutral-faded">
        {label}
      </Text>
      {tooltip && <TooltipIcon label={tooltip} />}
    </Flex>
  );
};
