import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories}) => {

    // dejar con comillas simples para q sea un string, no undefined
    const [inputValue, setinputValue] = useState('');

    const handdleInputChange = (e) => 
    {
        // console.log(e.target.value);
        // cuando cambie lo dentro del input
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // para no recargar la pagina 
        // alert('submit hecho')
        if( inputValue.trim().length > 2){
            // quitarle los espacios e insertar lo que digite
            setCategories( categ => [ inputValue, ...categ]);   
            // limpiar
            setinputValue('');
        }
       
    }
    return (
       
    
            <form onSubmit={handleSubmit}>
                 <input value={inputValue} onChange= { handdleInputChange}></input>
            </form>
       
    )
}


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}