import { useState } from 'react'
import { ExpandBox } from './components/CommonComps.jsx'
import { ContextProvider } from './components/Context.jsx'
import { Contact } from './components/Contact.jsx'
import { Preview } from './components/Preview.jsx'
import { ExperienceBuilder } from './components/Experience.jsx'
import { Education } from './components/Education.jsx'
import './styles/App.css'

function App() {

  return (
    <ContextProvider>
      <div className='App'>
        <div className = 'editor-container'>
          <h1>CV Builder</h1>
          <ExpandBox title="Personal Information" className="contact">
            <Contact />
          </ExpandBox>
          <ExpandBox title="Work Experience" className="experience">
            <ExperienceBuilder />
          </ExpandBox>
          <ExpandBox title="Education" className="education">
            <Education />
          </ExpandBox>
        </div>
        <Preview />
      </div>
    </ContextProvider>
  )
}

export default App
