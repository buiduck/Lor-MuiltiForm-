import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const steps = [
  { title: 'YOUR INFO', step: 1 },
  { title: 'SELECT PLAN', step: 2 },
  { title: 'ADD-ONS', step: 3 },
  { title: 'SUMMARY', step: 4 },
  { title: 'THANK YOU', step: 5 },
];

const Sidebar = () => {
  const { currentStep } = useContext(FormContext);

  return (
    <div className="bg-blue-100 p-6 w-1/3 h-full">
      <h2 className="text-lg font-bold">Step {currentStep}</h2>
      <div className="mt-4">
        {steps.map((step) => (
          <div key={step.step} className={`py-2 ${currentStep === step.step ? 'font-bold text-blue-800' : 'text-gray-600'}`}>
            {step.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;