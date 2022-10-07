import {  useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {  
   

    const {images,isLoading} = useFetchGifs (category); // hook personalizado
    
    return (
        <>
            <h3>{category}</h3>
            
            { 
            isLoading && (<h2>Cargando...</h2>)// Un if para ver si carga esta en true o false
            }
            <div className="card-grid">
                {
                images.map( (image) => (
                    <GifItem 
                        key={image.id}
                        {...image} //exparse todas las propiedades
                    />
                    ))
                
                }
            </div>
        </>
  )
}
