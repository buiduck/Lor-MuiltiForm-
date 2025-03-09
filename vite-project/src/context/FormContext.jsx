
import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const [plan, setPlan] = useState(null);
  const [addons, setAddons] = useState([]);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const resetForm = () => {
    setCurrentStep(1);
    setUserInfo({});
    setPlan(null);
    setAddons([]);
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        nextStep,
        prevStep,
        resetForm,
        userInfo,
        setUserInfo,
        plan,
        setPlan,
        addons,
        setAddons,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
