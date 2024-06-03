import { useState } from 'react'
import { ExpandBox } from './CommonComps.jsx';
import { useAppContext } from './Context.jsx';
import { MdEdit, MdDelete } from "react-icons/md";
import '../styles/Education.css'

export function EducationBuilder() {
  const [showEdit, setShowEdit] = useState(false);
  const [nextId, setNextId] = useState(1);
  const { educationArray, setEducationArray } = useAppContext();

  const handleAddSchool = () => {
    setShowEdit(true);
  };

  return (
      <>
        <div className='work-container'>
          {!showEdit && educationArray.length > 0 ? 
            <EducationList 
              educationData={educationArray}
              nextId={nextId}
              setNextId={setNextId}
              /> : null}
          {showEdit && <CreateNewEducation 
                      showEdit={showEdit}
                      setShowEdit={setShowEdit}
                      educationArray={educationArray}
                      setEducationArray={setEducationArray}
                      nextId={nextId}
                      setNextId={setNextId}
                      />}
        </div>
        {!showEdit && <button onClick={handleAddSchool}>New School</button>}
      </>
  );
}

function EducationList({ educationData, nextId, setNextId }) {
  const { educationArray, setEducationArray } = useAppContext();

  const handleDelete = (id) => {
    const updatedEducationArray = educationData.filter((school) => school.id !== id);
    setEducationArray(updatedEducationArray);
  }

  const handleEdit = (schoolEdit) => {
    // Help here
    return null;
  }

  return (
    <>
    {educationData.map((school) => (
      <ExpandBox key={school.id} title={school.name} isDeletable={true}>
      <div>
        <p>Degree: {school.degree}</p>
        {school.graduate ? <p>Graduate: Yes</p> : <p>Graduate: No</p>}
        <p>{school.start} to {school.end}</p>
      </div>
        <div className={`button-container`}>
          <button onClick={() => handleEdit(school.id)} aria-label="Edit">
            <MdEdit size={20} />
          </button>
          <button onClick={() => handleDelete(school.id)} aria-label="Delete">
            <MdDelete size={20} />
          </button>
        </div>
      </ExpandBox>
    ))}
    </>
  )
}

function CreateNewEducation({ showEdit, setShowEdit, educationArray, setEducationArray, nextId, setNextId }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleSave = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newSchool = {
      id: nextId,
      name: formData.get('school'),
      degree: formData.get('degree'),
      start: formData.get('startDate'),
      end: formData.get('endDate'),
      graduate: formData.get('graduate')
    };
    setEducationArray([...educationArray, newSchool]);
    setNextId(nextId + 1);
    console.log('submitted');
    
    setShowEdit(false);
  };

  return (
    <>
      <form className='education-form' onSubmit={handleSave}>
        <section>
          <div>
            <label htmlFor="school">School:</label>
            <input name="school" id="school" type="text" placeholder="School Name" />
          </div>
          <div>
            <label htmlFor="degree">Degree:</label>
            <input name="degree" id="degree" type="text" placeholder="Degree" />
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input name="startDate" id="startDate" type="date" placeholder="Start Date" />
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <input name="endDate" id="endDate" type="date" placeholder="End Date" />
          </div>
          <div>
            <input type="checkbox" name="graduate" id="graduate" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
            <label htmlFor="graduate">Did you graduate?</label>
          </div>
        </section>
        <div className='button-container'>
          <button type="submit">Save</button>
          <button onClick={() => setShowEdit(false)}>Cancel</button>
        </div>
      </form>
    </>
  );
}

function EditEducation({ school, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: school.name,
    degree: school.degree,
    start: school.start,
    end: school.end,
    graduate: school.graduate
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData,
      [name]: type === 'checkbox' ? event.target.checked : value });
  };


  return (
    <form className='education-form' onSubmit={onSave}>
      <section>
        <div>
          <label htmlFor="school">School:</label>
          <input name="school" id="school" type="text" placeholder="School Name" defaultValue={school.name} />
        </div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input name="degree" id="degree" type="text" placeholder="Degree" defaultValue={school.degree} />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input name="startDate" id="startDate" type="date" placeholder="Start Date" defaultValue={school.start} />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input name="endDate" id="endDate" type="date" placeholder="End Date" defaultValue={school.end} />
        </div>
        <div>
          <input type="checkbox" name="graduate" id="graduate" checked={school.graduate} />
          <label htmlFor="graduate">Did you graduate?</label>
        </div>
      </section>
      <div className='button-container'>
        <button type="submit">Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
