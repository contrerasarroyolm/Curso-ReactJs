import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //Esto tiene un efecto de que solo se cargue cuando cambie la categoria
    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });    
            })
    }, [ category ])

    return state;
}