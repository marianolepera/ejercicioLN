import React from 'react';
import "../styles/notas.scss";
import CardRegular from "./CardRegular";

const Notas = () =>{
    return(
        <div className="cuerpo">
            <a href="#" style={{textDecoration: "none"}}><p className="titulo"> NOTAS X 3 COLOR</p></a>
            <div style={{position:'inherit',marginBottom:12}} className="separadorHorizontal"></div>
            <div className="notasColor">
                <CardRegular
                            className="notasColor_articulo1"
                            imagenNota="https://via.placeholder.com/300x350"
                            titulo="Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar"
                            //bajada="Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."
                            marquee="Marquesina 1"
                            url="#"
                            style={divStyle}
                        ></CardRegular> 
                        
                        <CardRegular
                            className="notasColor_articulo1"
                            imagenNota="https://via.placeholder.com/300x350"
                            titulo="Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar"
                            //bajada="Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."
                            marquee="Marquesina 1"
                            url="#"
                            style={divStyle}
                        ></CardRegular> 

                        <CardRegular
                            className="notasColor_articulo1"
                            imagenNota="https://via.placeholder.com/300x350"
                            titulo="Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar"
                            //bajada="Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."
                            marquee="Marquesina 1"
                            url="#"
                            style={divStyle}
                        ></CardRegular> 
            </div>
            
        </div>
    );
   

}

const divStyle={
    backgroundColor:"#C40F4D",
    height:118,

}

export default Notas;