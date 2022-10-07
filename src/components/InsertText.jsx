import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

export const InsertText = () => {

    const [inputValue, setInputValue] = useState('')
    const onSubmit= (event) =>{  
        event.preventDefault();
        if (inputValue.trim().length<=1) return; //si tenemos mas de un caracter entra a escribir
        
        const palindrome = (inputValue) => {
            var len = inputValue.length;
            var mid = Math.floor(len / 2);
            for (var i = 0; i < mid; i++) {
              if (inputValue[i] !== inputValue[len - 1 - i]) {
                return "No es un palindromo";
              }
            }
            return  "Es un palindromo";
          }
          console.log(palindrome(inputValue))
         


        setInputValue(""); // limpia el valor
    }

  return (
    <Box>

     <form onSubmit={onSubmit } >
         
          <TextField 
           value={inputValue}
           placeholder='Inserta palabra o frase'
           onChange={(e) => setInputValue(e.target.value)} 
           variant="standard"
           />
           
           
    </form>

    </Box>

    
   
)}
