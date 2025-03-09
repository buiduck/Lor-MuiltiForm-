/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const Step4 = () => {
  const { prevStep, userInfo, plan, addons, nextStep, resetForm } = useContext(FormContext);

  const handleConfirm = () => {
    nextStep(); // Chuyển sang Step 5
  };

  const handleChangePlan = () => {
    resetForm(); // Reset trạng thái về bước đầu tiên
  };

  const isPlanSelected = plan !== null;
  const areAddonsSelected = addons.length > 0;

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-blue-800">Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      
      {isPlanSelected && (
        <div>
          <h2 className="font-bold">Plan:</h2>
          <p>{plan.plan} - {plan.price} <span className="text-blue-600 cursor-pointer" onClick={handleChangePlan}>Change</span></p>
        </div>
      )}
      
      {areAddonsSelected && (
        <>
          <h2 className="font-bold">Add-ons:</h2>
          {addons.map(addon => (
            <p key={addon}>{addon}</p>
          ))}
        </>
      )}

      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2">Go Back</button>
        <button onClick={handleConfirm} 
                className={`bg-blue-800 text-white p-2 ${!isPlanSelected || !areAddonsSelected ? 'opacity-50 cursor-not-allowed' : ''}`} 
                disabled={!isPlanSelected || !areAddonsSelected}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;