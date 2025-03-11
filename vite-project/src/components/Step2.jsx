import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Step2 = () => {
  const { nextStep, prevStep, setPlan, plan, isYearly, setIsYearly } = useContext(FormContext);

  const plans = [
    { name: "Arcade", monthly: 9, yearly: 90 },
    { name: "Advanced", monthly: 12, yearly: 120 },
    { name: "Pro", monthly: 15, yearly: 150 },
  ];

  const handlePlanSelect = (plan) => {
    setPlan({ plan: plan.name, price: isYearly ? `$${plan.yearly}/yr` : `$${plan.monthly}/mo` });
  };

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-blue-800">Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="flex justify-around">
        {plans.map((p) => (
          <div
            key={p.name}
            onClick={() => handlePlanSelect(p)}
            className={`border p-4 cursor-pointer ${plan?.plan === p.name ? "bg-blue-200" : ""}`}
          >
            {p.name} {isYearly ? `$${p.yearly}/yr` : `$${p.monthly}/mo`}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center my-4">
        <p className={`mr-2 ${isYearly ? "text-gray-500" : "text-blue-800"}`}>Monthly</p>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={() => setIsYearly((prev) => !prev)} />
          <span className="slider round"></span>
        </label>
        <p className={`ml-2 ${isYearly ? "text-blue-800" : "text-gray-500"}`}>Yearly</p>
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2">
          Go Back
        </button>
        <button onClick={nextStep} className="bg-blue-800 text-white p-2" disabled={!plan}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
