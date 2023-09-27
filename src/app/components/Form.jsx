'use client';

import React, { useState } from 'react';
import Step1 from './steps/Step1';

const Form = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    emailAdress: '',
    phoneNumber: 0,
  });
  return (
    <div className="bg-blue-100 h-screen flex flex-col p-4">
      <Step1 />
      <button className="bg-blue-700 text-white p-2 ml-auto">
        Next Step
      </button>
    </div>
  );
};

export default Form;
