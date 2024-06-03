import { useState, useEffect } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export function ExpandBox({title, children, className}) {
  const [expanded, setExpanded] = useState(false);

  className ? className = className : className = '';

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

 

  return (
    <div className={`${className} border-container`}>
      <div 
        onClick={toggleExpanded} 
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}
      >
        <h3>{title}</h3>
        <div>{expanded ? <MdExpandMore size={30}/> : <MdExpandLess size={30} />}</div>
      </div>
      {expanded && (<div className={`${className}-container`}>
        {children}
        
      </div>
        )}
    </div>
  );
}

export function InputComponent({ value, defaultValue, onInputChange, placeholder, label }) {
  const [inputValue, setInputValue] = useState(value || '');

  useEffect(() => {
    if (defaultValue && !inputValue) {
      setInputValue(defaultValue);
      onInputChange(defaultValue);
    }
  }, [defaultValue, inputValue, onInputChange]);

  const inputId = label.toLowerCase().replace(/\s/g, '');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  return (
      <>
        {label && <label htmlFor="label">{label}</label>}
        <input id = {inputId} type="text" onChange={handleChange} value ={inputValue} placeholder={placeholder}/>
      </>
      );
}