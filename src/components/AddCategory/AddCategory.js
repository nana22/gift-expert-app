import React, { useState } from "react";
import {Form}  from 'react-bootstrap/';
import PropTypes from 'prop-types'

export const AddCategory = ({setgetCategories}) => {
      const [inputValue, setInputValue] = useState("");
        const handleSubmit=(e)=>{
             e.preventDefault();
             if(inputValue.trim().length>0)
              setgetCategories(categories=>[inputValue,...categories]);

        };
        const handleInputChange=(e)=>{
          setInputValue(e.target.value);
        };
      
  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
      <Form.Control id="inputCategory" value={inputValue} onChange={handleInputChange} 
      type="text"  placeholder="Enter category" />
      </form>
           </div>
  )
}

AddCategory.propTypes = {
  setgetCategories: PropTypes.func.isRequired
}
