// src/components/Contact.jsx
import { InputComponent } from "./CommonComps.jsx";
import { testData } from "../data/data.js";
import "../styles/Contact.css";

export function Contact({
        onNameChange, 
        onPhoneChange, 
        onEmailChange, 
        onLocationChange, 
        name, 
        phone, 
        email, 
        location 
}) {

  return (
    <>
      <div className='form-column'>
        <InputComponent onInputChange={onNameChange} 
                        defaultValue={name} 
                        value={name} 
                        placeholder='First and Last Name' 
                        label= "Name" />
        <InputComponent onInputChange={onPhoneChange} 
                        defaultValue={phone} 
                        value={phone} 
                        placeholder="Phone"
                        label="Phone Number" />
      </div>
      <div className='form-column'>
        <InputComponent onInputChange={onEmailChange} 
                        defaultValue={email} 
                        value={email} 
                        placeholder="Email" 
                        label="Email"/>
        <InputComponent onInputChange={onLocationChange} 
                        defaultValue={location} 
                        value={location} 
                        placeholder="Location"
                        label="Location"/>
      </div>
    </>
  )
}

