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
  VStack,
} from '@chakra-ui/react';

const steps = [
  { title: 'Step 1', description: 'Contact' },
  { title: 'Step 2', description: 'Date & Time' },
  { title: 'Step 3', description: 'Guests' },
];

function StepProcess({ activeStep, setActiveStep }) {
  return (
    <Box w="100%" py={{ base: 4, md: 2 }}>
      <Stepper 
        size='lg' 
        index={activeStep} 
        colorScheme="yellow" 
        orientation="horizontal" 
        gap='0'

        minH={{ base: "80px", md: "auto" }} 
      >
        {steps.map((step, index) => (
          <Step 
            key={index} 
            onClick={() => setActiveStep(index)} 
            style={{ cursor: 'pointer', flex: 1 }}
          >
            <VStack spacing={2} w="100%">
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box textAlign="center" minH="32px">
                <StepTitle 
                  fontSize={{ base: "10px", md: "sm" }} 
                  fontWeight="bold"
                  lineHeight="tight"
                >
                  {step.title}
                </StepTitle>
                <StepDescription 
                  fontSize={{ base: "9px", md: "xs" }}
                  color="gray.500"
                >
                  {step.description}
                </StepDescription>
              </Box>
            </VStack>

            <StepSeparator 
              style={{ 
                top: '22px',
                backgroundColor: '#E2E8F0' 
              }} 
            />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default StepProcess;