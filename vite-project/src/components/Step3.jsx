import React, { useContext, useState, useEffect } from "react";
import { FormContext } from "../context/FormContext";

const Step3 = () => {
  const { nextStep, prevStep, setAddons, plan, addons } = useContext(FormContext);
  const [selectedAddons, setSelectedAddons] = useState(addons || []);

  const addonsOptions = [
    { name: "Online service", price: plan?.price.includes("yr") ? 90 : 9 },
    { name: "Larger storage", price: plan?.price.includes("yr") ? 120 : 12 },
    { name: "Customizable profile", price: plan?.price.includes("yr") ? 150 : 15 },
  ];

  useEffect(() => {
    setSelectedAddons(addons || []); // Cập nhật lại khi quay lại step 3
  }, [addons]);

  const handleAddonToggle = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((item) => item.name === addon.name);
      return exists ? prev.filter((item) => item.name !== addon.name) : [...prev, addon];
    });
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
              checked={selectedAddons.some((item) => item.name === addon.name)}
              onChange={() => handleAddonToggle(addon)}
            />
            <label htmlFor={addon.name} className="ml-2">
              {addon.name} (+${addon.price}/{plan?.price.includes("yr") ? "yr" : "mo"})
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2">Go Back</button>
        <button onClick={handleNext} className="bg-blue-800 text-white p-2">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
