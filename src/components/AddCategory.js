import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    

    const handleChange = (e) => setInputValue(e.target.value); 
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('submit', e);
        if(inputValue.trim().length > 2){
            // Se añade añade un valor a las categorias utilizando el callback del hook del componente para cambiar valores
            setCategories(categories => [ inputValue, ...categories]);
            setInputValue(''); 
        }
       
        // setCategories([...categories, inputValue]);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
             value={inputValue} onChange={handleChange}>
            </input>
            {/* <button type="submit">Agregar</button> */}
        </form>
    )
}

AddCategory.prototype = {
    setCategories:  PropTypes.func.isRequired
}
