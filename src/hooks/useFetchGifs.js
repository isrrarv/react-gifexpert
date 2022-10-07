import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
 //se creara un hook para reducir el codigo
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await GetGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect ( ()=>{
        getImages();
    },[]);
    //si dejamos los corchetes solo se ejecuta una vez

 return {
    images,
    isLoading,
 }
}
