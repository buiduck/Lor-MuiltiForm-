
import './App.css'

import React from 'react';
import Form from './components/Form';
import Sidebar from './components/Sidebar';
import FormProvider from './context/FormContext';

const App = () => {
  return (
    <FormProvider>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <Form />
      </div>
    </FormProvider>
  );
};

export default App;