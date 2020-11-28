import React, {useState, useEffect} from 'react';
// import link == SPA
import { Link } from 'react-router-dom';
import './index.css';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import teachIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';
import api from '../../services/api';

function Landing() {
    //connecting with server
    const [totalConnectios, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
          const {total} = response.data;
          
          setTotalConnections(total);
        });
    }, []);

    //
    return (
        <div id="page-landing">
            {/* div#page-landing-content.container */}
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logo Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img 
                    src={landingImg} 
                    alt="Plataforma de Estudos"
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={teachIcon} alt="Ensinar"/>
                        Ensinar
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnectios} conexões já realizadas
                    <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;