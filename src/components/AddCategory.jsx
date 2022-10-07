import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

                        // Funcion de nodo padre
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    
    
    const onInputChange =(event) =>{  // escribes y lo va guardando
        setInputValue(event.target.value);
    }
    
    const onSubmit= (event) =>{  //dar enter e imprime lo que escribiste
        event.preventDefault();
        if (inputValue.trim().length<=1) return; //si tenemos mas de un caracter entra a escribir
        // setCategories(categories => [inputValue,...categories]); // el props vamos a desestructurar al arreglo e insertar el valor escrito
        onNewCategory(inputValue);
        setInputValue(""); // limpia el valor
    }
  return (
    <Box>

     <form onSubmit={onSubmit } >
         {/* <input
         type="text"
         placeholder='Buscar gifs'
         value={inputValue}
         onChange={ onInputChange}
          /> */}
          <TextField 
           value={inputValue}
           placeholder='Buscar gifs'
           onChange={(e) => setInputValue(e.target.value)} 
           variant="standard"
           />
           
    </form>

    </Box>

    
   
  )
}
