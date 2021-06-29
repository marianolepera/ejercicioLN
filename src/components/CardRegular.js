import React from 'react';

const CardRegular = (props,style) =>{

    return(
        <div className={props.className}>
            <img src={props.imagenNota} ></img>
            <div style={props.style}>
                <a href={props.url}><h3>{props.titulo}</h3></a>
                <p>{props.bajada}</p>
                <p><b>{props.marquee}</b></p>
            </div>
            <img src={props.imagenAutor} ></img>
            <p><b>{props.nombreAutor}</b></p>
            {props.children}
        </div>
    );
}

export default CardRegular;