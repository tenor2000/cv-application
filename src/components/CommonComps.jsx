import { useState, useEffect } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export function ExpandBox({title, children}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border-container">
      <div onClick={toggleExpanded} 
                style={{ cursor: 'pointer', 
                        display: 'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center'}}>
        <h3>{title}</h3>
        <div>{expanded ? <MdExpandMore /> : <MdExpandLess />}</div>
      </div>
      {expanded && <div>{children}</div>}
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

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  return (
      <>
        {label && <label>{label}</label>}
        <input type="text" onChange={handleChange} value ={inputValue} placeholder={placeholder}/>
      </>
      );
}