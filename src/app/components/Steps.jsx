'use client';

import React, { useState } from 'react';
import Step from './Step';

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="bg-no-repeat bg-fixed bg-hero-bg h-40 flex items-center justify-center min-w-full">
      <div className="flex gap-4">
        <Step num={1} active={currentStep} />
        <Step num={2} active={currentStep} />
        <Step num={3} active={currentStep} />
        <Step num={4} active={currentStep} />
      </div>
    </div>
  );
};

export default Steps;
