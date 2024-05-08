import { useState } from 'react'
import { ExpandBox } from './components/CommonComps.jsx'
import { Contact } from './components/Contact.jsx'
import { Preview } from './components/Preview.jsx'
import { Experience } from './components/Experience.jsx'
import { Education } from './components/Education.jsx'
import './styles/App.css'

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')

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
    <>
      <div className='App'>
        <div className = 'editor-container'>
          <h1>CV Generator</h1>
          <ExpandBox title="Personal Information">
            <Contact 
              onNameChange={handleNameChange} 
              onPhoneChange={handlePhoneChange} 
              onEmailChange={handleEmailChange} 
              onLocationChange={handleLocationChange} 
              name={name} 
              phone={phone} 
              email={email} 
              location={location} 
              />
          </ExpandBox>
          <ExpandBox title="Work Experience">
            <Experience />
          </ExpandBox>
          <ExpandBox title="Education">
            <Education />
          </ExpandBox>
        </div>
        <Preview 
          name={name} 
          phone={phone} 
          email={email} 
          location={location} 
        />
      </div>
    </>
  )
}

export default App
