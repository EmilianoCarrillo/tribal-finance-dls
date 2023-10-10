const baseStyle = {
  stepper: {
    gap: 0,
  },
  step: {
    gap: "1rem",
  },
  title: {
    color: "fg.neutral",
  },
  description: {
    color: "fg.neutral-faded",
  },
};


const defaultProps = {
  size: "sm",
  orientation: "vertical",
  colorScheme: "primary",
};

export const stepperTheme = {
  baseStyle,
  defaultProps  
};
