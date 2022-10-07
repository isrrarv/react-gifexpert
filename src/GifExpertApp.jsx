import {useState} from 'react';
import { AddCategory,GifGrid } from './components';
import React from 'react';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Goku']);
    
    const onAddCaterogy = (newCategory) =>{
    //Agregar un valor al arreglo
        if (categories.includes(newCategory))return;
        setCategories([newCategory,...categories]); // desestrucuta el arreglo y agrega otro    
    }

  return (
    <>
    <h1>GifExpertApp</h1>

    {/* Input */}

        <AddCategory
            onNewCategory={ event => onAddCaterogy (event) }
        />
    {/* Listado de gif */}
       {                // le mandamos como props category y key
       categories.map (category => ( 
       <GifGrid 
            key={category} 
            category={category}
        />))
        }

     
    </>
  )
}
