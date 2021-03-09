import React, { useState } from 'react'

//Recibo los props de setCategories enviado desde GifExpertApp
export const AddCategory = ({ setCategories } ) => {

    const [InputValue, setInputValue] = useState('')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handledSubmit = (e) => {
        e.preventDefault();

        if( InputValue.trim().length >2 ){
            setCategories( cats =>  [ InputValue, ...cats ] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handledSubmit }>
          <input
                type="text"
                value={ InputValue }
                onChange={ handleInputChange }
          />
        </form>
    )
}

export default AddCategory;