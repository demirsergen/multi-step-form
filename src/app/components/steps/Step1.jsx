'use client';
import React, { useState } from 'react';

const Step1 = () => {
  const [form, setForm] = useState({
    name: '',
    emailAdress: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="w-full mx-auto bg-white p-4 rounded">
      <h1 className="text-indigo-600 font-bold">Personal info</h1>
      <p className="text-gray-500">
        Please provide your name, email address, and phone number.
      </p>
      <form className="">
        <div className="flex flex-col p-2">
          <label htmlFor="name" className="text-indigo-500">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 border border-gray rounded"
            placeholder="e.g. Stephen King"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="email" className="text-indigo-500">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 border border-gray rounded"
            placeholder="e.g. stephenking@lorem.com"
            value={form.emailAdress}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="number" className="text-indigo-500">
            Phone Number
          </label>
          <input
            type="number"
            name="number"
            id="number"
            className="p-2 border border-gray rounded"
            placeholder="e.g. +1 234 567 890"
            value={form.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
