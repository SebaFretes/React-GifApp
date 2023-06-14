import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handlerChange = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // El método trim( ) elimina los espacios en blanco en ambos extremos del string.
        // setCategories((categories) => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ (event) => handlerChange(event) }>
        </input>
    </form>
  )
}
