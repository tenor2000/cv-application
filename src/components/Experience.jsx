import { useState } from 'react'
import { ExpandBox } from './CommonComps.jsx';
import { useAppContext } from './Context.jsx';
import '../styles/Experience.css'
import { data } from '../data/data.js'

function JobList({ workData }) {
  console.log(workData);
  return (
    <>
    {workData.map((job) => (
      <ExpandBox key={job.id} title={job.employer}>
      <div>
        <p>Title: {job.title}</p>
        <p style={{overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                  }}>Duties: {job.description}</p>
        <p>{job.start} to {job.end}</p>
      </div>
      </ExpandBox>
    ))}
    </>

  )
}

function CreateNewExperience({ showEdit, setShowEdit, workHistArray, setWorkHistArray, nextId, setNextId }) {
  
  const handleSave = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newJob = {
      id: nextId,
      employer: formData.get('employer'),
      title: formData.get('title'),
      start: formData.get('startDate'),
      end: formData.get('endDate'),
      description: formData.get('description')
    };
    console.log(workHistArray);
    setWorkHistArray([...workHistArray, newJob]);
    setNextId(nextId + 1);
    console.log('submitted');
    
    setShowEdit(false);
  };

  return (
    <>
      <form className='experience-form' onSubmit={handleSave}>
        <section>
          <label htmlFor="employer">Employer</label>
          <input name="employer" id="employer" type="text" placeholder="Employer Name" />
          <label htmlFor="title">Title</label>
          <input name="title" id="title" type="text" placeholder="Title" />
          <label htmlFor="startDate">Start Date</label>
          <input name="startDate" id="startDate" type="date" placeholder="Start Date" />
          <label htmlFor="endDate">End Date</label>
          <input name="endDate" id="endDate" type="date" placeholder="End Date" />
          <textarea name="description" id="description" placeholder="Describe your duties" rows="4" cols="30" />
        </section>
        <div className='button-container'>
          <button type="submit">Save</button>
          <button onClick={() => setShowEdit(false)}>Cancel</button>
        </div>
      </form>
    </>
  );
}


export function ExperienceBuilder() {
  const [showEdit, setShowEdit] = useState(false);
  const [nextId, setNextId] = useState(1);

  const { 
    workHistArray, setWorkHistArray

  } = useAppContext();

  const handleAddJob = () => {
    setShowEdit(true);
  };

  return (
      <>
        <div className='work-container'>
          {!showEdit && workHistArray.length > 0 ? <JobList workData={workHistArray}/> : null}
          {showEdit && <CreateNewExperience 
                      showEdit={showEdit}
                      setShowEdit={setShowEdit}
                      workHistArray={workHistArray}
                      setWorkHistArray={setWorkHistArray}
                      nextId={nextId}
                      setNextId={setNextId}
                      />}
        </div>
        {!showEdit && <button onClick={handleAddJob}>New Job</button>}
      </>
  );
}
