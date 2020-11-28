import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './index.css';

interface PageHeaderProps {
//     nao obrigatorio => 
//     variavel?: tipo
//     obrigatorio
    title: string;
    description?: string;
}
//  React.FC === React.FunctinComponent
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt=""/>
                </Link>
                <img src={logoImg} alt=""/>
            </div>
            <div className="header-content">
                <strong>
                    {/* Estes são os proffys disponíveis. */}
                    {props.title}
                </strong>
                { props.description && <p>{props.description}</p>}

                {props.children}
            </div>

            
        </header>
    );
}

export default PageHeader;