import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async () => {
      const newImages = await getGifs(category)
      setImages(newImages);
      setisLoading(false);
    }
  
    useEffect( () => {
        getImages();
    }, []);

    return {
        images: images, // también podría poner directamente images solo, ya que es lo mismo que como puse
        isLoading: isLoading // también podría poner directamente isLoading solo, ya que es lo mismo que como puse
    }
}
