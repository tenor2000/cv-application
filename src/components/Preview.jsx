// src/components/Preview.jsx
import { useState } from 'react'
import { data, testData } from '../data/data.js'
import { useAppContext } from '../components/Context.jsx'
import { FaEnvelope } from 'react-icons/fa'
import { MdPhoneIphone, MdLocationOn } from 'react-icons/md'
import '../styles/Preview.css'


export const Preview = () => {
    const [currentData, setCurrentData] = useState(data)
    const { name, phone, email, location, workHistArray, educationArray } = useAppContext();

    function handleClick () {
        currentData === data ? setCurrentData(testData) : setCurrentData(data);
    }

    return (
        <div className='preview-container'>
            <div className='preview-sheet'>
                <div className='preview-contact'>
                    <h1>{name}</h1>
                    <div>
                        <p><MdPhoneIphone /> {phone}</p>
                        <p><FaEnvelope /> {email}</p>
                        <p><MdLocationOn /> {location}</p>
                    </div>
                </div>
                <div className='preview-experience'>
                    <h3>Experience</h3>
                    {currentData.workHistory.map((experience, index) => (
                        <div key={experience.id}>
                            <p>{experience.company}</p>
                            <p>{experience.position}</p>
                            <p>{experience.start} - {experience.end}</p>
                        </div>
                    ))}
                </div>
                <div className='preview-education'>
                    <h3>Education</h3>
                    {currentData.education.map((education, index) => (
                        <div key={education.education}>
                            <p>{education.school}</p>
                            <p>{education.degree}</p>
                            <p>{education.gradDate}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}