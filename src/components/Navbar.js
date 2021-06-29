import React from 'react';
import "../styles/app.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = () =>{

    return(
        <div>
            <div className="nav">
                <div className="nav_leftsection">
                    <button className="nav_leftsection_boton"style={{marginRight:"20px"}}> SECCIONES <FontAwesomeIcon style={{marginLeft:"10px"}}className="icon" icon={faBars} /></button>
                    <button className="nav_leftsection_boton"> BUSCAR <FontAwesomeIcon style={{marginLeft:"10px"}}className="icon" icon={faSearch} /></button>
                </div>
                
                <div className="nav_titulo">
                    <h1 className="nav_titulo_h1" style={{marginRight:"20px"}}>LA</h1>
                    <h1 className="nav_titulo_h1">NACION</h1>
                </div>
                <div className="nav_tabletmobile">
                    <button className="nav_tabletmobile_botonsubs">SUBSCRIBITE</button>
                    <FontAwesomeIcon style={{marginRight:"10px"}}icon={faSearch} />
                </div>
                <div className="nav_rightsection">
                    <button className="nav_rightsection_botonamarillo" style={{marginRight:"20px"}}> SUBSCRIBITE</button>
                    <button className="nav_rightsection_botoningresar"> INGRESAR</button>
                </div>
            </div>
            <div className="subnav">
                <div className="subnav_dolar">
                    <p className="subnav_dolar_nombredolar">DOLAR</p>
                    <p style={{marginLeft:"10px"}}>BNA: <b>$00,00 / $00,00</b></p>
                    <p style={{marginLeft:"10px"}}>BLUE: <b>$00,00 / $00,00</b></p>
                </div>
                <div className="subnav_weather">
                    <FontAwesomeIcon icon={faCloudSun} />
                    <p style={{marginLeft:"10px"}}><b>00.00°</b></p>
                    <p style={{marginLeft:"10px"}}>Capital Federal</p>
                </div>
                <p className="subnav_newsletters">Recibi NewsLetters</p>
                <div className="subnav_beneficios">
                    <p className="subnav_beneficios_nombre">Descubri tus beneficios</p>
                </div>
            </div>
        </div>
        
        
    );

}

export default Navbar;