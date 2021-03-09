import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    console.log(id,title,url);
    return (
        <>
            <p> { title }</p>
            <div className="card">
                <img src={ url } alt={ title } />
            </div>
        </>   
    )
}