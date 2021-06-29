import React from 'react';
import "../styles/articulos.scss";
import CardRegular from "./CardRegular";

const Articulos = () => {

    return(
        <div className="cuerpo">

       
        <div className="grid">
            <CardRegular 
                //style={cardbody} 
                className="grid_articulo"
                imagenNota="https://via.placeholder.com/280x186"
                titulo="LEAD.Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
                marquee="Marquee / Author"
                url="#"
            ></CardRegular>
            <CardRegular 
                //style={imagenAuthor}
                className="grid_articulo2"
                titulo="Lead. Title cuando se dieron cuenta, los dos hermanos estaban preparándose para alunizar. "
                imagenAutor="https://via.placeholder.com/80x80"
                nombreAutor="Ricardo name"
                

            ></CardRegular>
              <CardRegular
                
                className="grid_articulo1"
                titulo="LEAD.Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
                bajada="Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."
                marquee="Marquesina 1"
                //style={style}

            ></CardRegular>
            <CardRegular 
                //style={cardbody} 
                className="grid_articulo"
                imagenNota="https://via.placeholder.com/280x186"
                titulo="LEAD.Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
                marquee="Marquee / Author"
                url="#"
            ></CardRegular>
            
             
           
        </div>
        </div>
    );

}


// const cardbody={

//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     padding: 8,

//     position: "static",
//     width: 280,
//     height: 136,
//     left: 0,
//     top: 186,


//     /* Inside Auto Layout */

//     flex: "none",
//     order: 1,
//     alignSelf: "stretch",
//     flexGrow: 0,
//     margin: 0
// }

// const imagenAuthor={
    
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: 0,

//     position: "static",
//     width: 128,
//     height: 112,
//     left: 76,
//     bottom: 16,
//     flex: "none",
//     order: 1,
//     flexGrow: 0,
//     margin: 0,
// }

export default Articulos;