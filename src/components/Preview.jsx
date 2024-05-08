// src/components/Preview.jsx
import { useState } from 'react'
import { data, testData } from '../data/data.js'
import { FaEnvelope } from 'react-icons/fa'
import { MdPhoneIphone, MdLocationOn } from 'react-icons/md'
import '../styles/Preview.css'


export const Preview = ({name, phone, email, location}) => {
    const [currentData, setCurrentData] = useState(data)

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
                    {currentData.experience.map((experience, index) => (
                        <div key={index}>
                            <p>{experience.company}</p>
                            <p>{experience.position}</p>
                            <p>{experience.start} - {experience.end}</p>
                        </div>
                    ))}
                </div>
                <div className='preview-education'>
                    <h3>Education</h3>
                    {currentData.education.map((education, index) => (
                        <div key={index}>
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