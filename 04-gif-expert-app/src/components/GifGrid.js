import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    //Esto tiene un efecto de que solo se cargue 1 vez la petición, si en el arreglo esta en blanco
    useEffect( () => {
        getGifs( category )
            .then( setImages );
    }, [ category ])

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;