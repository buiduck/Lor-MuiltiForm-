import React, { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';

const Step3 = () => {
  const { nextStep, prevStep, setAddons } = useContext(FormContext);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const addonsOptions = [
    { name: 'Online service', price: 1 },
    { name: 'Larger storage', price: 2 },
    { name: 'Customizable profile', price: 2 },
  ];

  const handleAddonToggle = (addon) => {
    setSelectedAddons((prev) => 
      prev.includes(addon)
        ? prev.filter((item) => item !== addon)
        : [...prev, addon]
    );
  };

  const handleNext = () => {
    setAddons(selectedAddons);
    nextStep();
  };

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-blue-800">Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div>
        {addonsOptions.map((addon) => (
          <div key={addon.name} className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id={addon.name} 
              checked={selectedAddons.includes(addon.name)} 
              onChange={() => handleAddonToggle(addon.name)} 
            />
            <label htmlFor={addon.name} className="ml-2">
              {addon.name} (+${addon.price}/mo)
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2">Go Back</button>
        <button 
          onClick={handleNext} 
          className="bg-blue-800 text-white p-2" 
          disabled={selectedAddons.length === 0}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;