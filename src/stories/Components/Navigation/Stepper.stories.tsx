// stepper.stories.ts|tsx

import {
  Box,
  Text,
  Step,
  StepIcon,
  StepIndicator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  StepSeparator,
} from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { title: "First", description: "Description" },
  { title: "Second", description: "Description" },
  { title: "Third", description: "Description" },
];

const StepperWithLogic = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical" height='132px'>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              active={
                <Box
                  bg="border.primary"
                  borderRadius="full"
                  padding="0.35rem"
                />
              }
            />
          </StepIndicator>
          <StepTitle>
            <Text
              fontWeight={index === activeStep ? "semibold" : "regular"}
              opacity={index <= activeStep ? "1" : "0.4"}
            >
              {step.title}
            </Text>
          </StepTitle>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export const Vertical: Story = {
  render: () => <StepperWithLogic />,
};
