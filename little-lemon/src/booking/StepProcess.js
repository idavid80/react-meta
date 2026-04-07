import React from 'react';
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
} from '@chakra-ui/react';

const steps = [
  { title: 'Step 1', description: 'Contact' },
  { title: 'Step 2', description: 'Date & Time' },
  { title: 'Step 3', description: 'Guests' },
];

function StepProcess({ activeStep, setActiveStep }) {
  return (
    <Stepper 
      size='lg' 
      index={activeStep}
      colorScheme="yellow" 
      orientation={{ base: 'vertical', md: 'horizontal' }}
      gap='0'
      w="100%"
    >
      {steps.map((step, index) => (
        <Step 
          key={index} 
          onClick={() => setActiveStep(index)}
          style={{ cursor: 'pointer' }}
        >
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0' ml={4}>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator style={{ backgroundColor: '#E2E8F0', height: '2px', alignSelf: 'center' }} />
        </Step>
      ))}
    </Stepper>
  );
}

export default StepProcess;