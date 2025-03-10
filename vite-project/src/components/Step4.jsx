import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const Step4 = () => {
  const { prevStep, plan, addons, nextStep, resetForm } = useContext(FormContext);

  const planPrice = plan?.price ? parseInt(plan.price.match(/\d+/)[0], 10) : 0;
  const totalAddonPrice = addons.reduce((total, addon) => total + addon.price, 0);
  const totalPrice = planPrice + totalAddonPrice;

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-blue-800">Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      {plan && (
        <div>
          <h2 className="font-bold">Plan:</h2>
          <p>{plan.plan} - {plan.price} <span className="text-blue-600 cursor-pointer" onClick={resetForm}>Change</span></p>
        </div>
      )}

      {addons.length > 0 && (
        <>
          <h2 className="font-bold">Add-ons:</h2>
          {addons.map((addon) => (
            <p key={addon.name}>
              {addon.name}: ${addon.price}
            </p>
          ))}
        </>
      )}

      <h2 className="font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>

      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2">Go Back</button>
        <button 
          onClick={nextStep} 
          className={`bg-blue-800 text-white p-2 ${!plan ? 'opacity-50 cursor-not-allowed' : ''}`} 
          disabled={!plan}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
