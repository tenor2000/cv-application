// src/components/Contact.jsx
import { InputComponent } from "./CommonComps.jsx";
import { useAppContext } from "./Context.jsx";
import { useContext } from "react";
import { testData } from "../data/data.js";
import "../styles/Contact.css";

export function Contact() {
  const { 
    name, handleNameChange, 
    phone, handlePhoneChange, 
    email, handleEmailChange, 
    location, handleLocationChange 
  } = useAppContext();

  return (
      <div className='form-column'>
        <InputComponent onInputChange={handleNameChange} 
                        defaultValue={name} 
                        value={name} 
                        placeholder='First and Last Name' 
                        label= "Name" />
        <InputComponent onInputChange={handlePhoneChange} 
                        defaultValue={phone} 
                        value={phone} 
                        placeholder="Phone"
                        label="Phone Number" />
        <InputComponent onInputChange={handleEmailChange} 
                        defaultValue={email} 
                        value={email} 
                        placeholder="Email" 
                        label="Email"/>
        <InputComponent onInputChange={handleLocationChange} 
                        defaultValue={location} 
                        value={location} 
                        placeholder="Location"
                        label="Location"/>
      </div>
  )
}

