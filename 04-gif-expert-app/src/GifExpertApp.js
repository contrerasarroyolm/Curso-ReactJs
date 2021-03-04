import React, { useState } from 'react';
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState(['Dragon Ball Z']);

    // const handledAdd = () => {
    //     // setCategories( ['HunterXHunter', ...categories]);
    //     setCategories( cats =>  [...cats, 'HunterXHunter'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Los props que envio por aqui lo recibe el componente AddCategory */}
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            {/* <button onClick={ handledAdd }>Agregar</button> */}

            <ol>
                {/* {
                    categories.map( category => {
                        return <li key={category}> { category} </li>
                    })
                } */}
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;