import { Flex, FlexProps, Text } from "@chakra-ui/react";

export interface StatValueProps extends FlexProps {
  value: number | string;
  currency?: string;
  size?: "lg" | "md" | "sm";
  variant?: "strong" | "subtle";
  numberStyle?: "default" | "tabular";
}

const StatValue: React.FC<StatValueProps> = ({
  value,
  currency,
  size,
  variant,
  numberStyle,
  ...props
}) => {
  const sizeStyles = {
    lg: {
      textStyle: "heading.small",
      fontWeight: variant === "subtle" ? 400 : 600,
    },
    md: {
      textStyle: numberStyle === "tabular" ? "tabular.medium" : "body.medium",
      fontWeight: variant === "strong" ? 600 : 400,
    },
    sm: {
      textStyle: numberStyle === "tabular" ? "tabular.small" : "body.small",
      fontWeight: variant === "strong" ? 600 : 400,
    },
  }[size || "md"];

  const valueWithCommas = value?.toLocaleString("en-US");

  return (
    <Flex {...props}>
      <Text
        textStyle={sizeStyles.textStyle}
        color="fg.neutral"
        fontWeight={sizeStyles.fontWeight}
      >
        {valueWithCommas}
      </Text>
      {currency && (
        <Text
          textStyle={sizeStyles.textStyle}
          fontWeight={400}
          color="fg.neutral-faded"
          ml={1}
        >
          {currency}
        </Text>
      )}
    </Flex>
  );
};

export default StatValue;
