// Context.js
import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    const [name, setName] = useState('Homer Simpson')
    const [phone, setPhone] = useState('1800-KL5-2336')
    const [email, setEmail] = useState('homer.simpson@xmail.com')
    const [location, setLocation] = useState('Springfield, USA')
    const [workHistArray, setWorkHistArray] = useState([])
    const [educationArray, setEducationArray] = useState([])

    const handleNameChange = (value) => {
        setName(value); 
    };

    const handlePhoneChange = (value) => {
        setPhone(value); 
    };

    const handleEmailChange = (value) => {
        setEmail(value); 
    };

    const handleLocationChange = (value) => {
        setLocation(value); 
    };


  return (
    <AppContext.Provider value={{ 
        name, setName, handleNameChange,
        phone, setPhone, handlePhoneChange,
        email, setEmail, handleEmailChange, 
        location, setLocation, handleLocationChange, 
        workHistArray, setWorkHistArray, 
        educationArray, setEducationArray }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
