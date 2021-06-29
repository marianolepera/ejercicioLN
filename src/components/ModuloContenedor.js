import React from 'react';
import "../styles/modulo.scss";
import CardRegular from "./CardRegular";

const ModuloContenedor = () =>{
    return(
        <div className="cuerpo">
            <a href="#" style={{textDecoration: "none"}}><p className="titulo"> FOCAL DERECHO</p></a>
            <div style={{position:'inherit',marginBottom:12}}className="separadorHorizontal"></div>
            <div className="focalDerecho">
                        <CardRegular
                            className="focalDerecho_articulo1"
                            titulo="NOTICIA 1.Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
                            bajada="Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."
                            marquee="Marquesina 1"
                            url="#"
                        >
                        </CardRegular>
                        <div className="focalDerecho_separadorVertical"></div>
                        <CardRegular
                            className="focalDerecho_articulo2"
                            imagenNota="https://www.htmlcsscolor.com/preview/gallery/99CCFF.png"
                            titulo="NOTICIA 2.Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
                            marquee="Marquesina 1"
                            url="#"
                        ></CardRegular> 
            </div>
            <div className="separadorHorizontal"></div>
        </div>
    );
   

}

export default ModuloContenedor;