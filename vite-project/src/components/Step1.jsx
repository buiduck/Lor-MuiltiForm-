import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '../context/FormContext';

const Step1 = () => {
  const { nextStep, userInfo, setUserInfo } = useContext(FormContext);
  const [name, setName] = useState(userInfo.name || '');
  const [email, setEmail] = useState(userInfo.email || '');
  const [phone, setPhone] = useState(userInfo.phone || '');
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    // Khi component mount, cập nhật state từ userInfo
    setName(userInfo.name || '');
    setEmail(userInfo.email || '');
    setPhone(userInfo.phone || '');
  }, [userInfo]); // Chạy lại khi userInfo thay đổi

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { name: '', email: '', phone: '' };
    
    if (!name) newErrors.name = 'This field is required';
    if (!email) newErrors.email = 'This field is required';
    if (!phone) newErrors.phone = 'This field is required';

    if (newErrors.name || newErrors.email || newErrors.phone) {
      setErrors(newErrors);
      return;
    }
    
    setUserInfo({ name, email, phone }); // Lưu dữ liệu vào Context
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-6">
      <h1 className="text-blue-800">Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      
      <label>Name</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className={`border p-2 mb-2 ${errors.name ? 'border-red-500' : ''}`} 
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}
      
      <label>Email Address</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className={`border p-2 mb-2 ${errors.email ? 'border-red-500' : ''}`} 
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      
      <label>Phone Number</label>
      <input 
        type="tel" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        className={`border p-2 mb-2 ${errors.phone ? 'border-red-500' : ''}`} 
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      
      <button type="submit" className="bg-blue-800 text-white p-2 mt-4">
        Next Step
      </button>
    </form>
  );
};

export default Step1;
