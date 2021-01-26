import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import mooseIcon from '../../assets/img/moose_icon.svg';

const minusSquare = <FontAwesomeIcon icon="minus-square" className="minus" />;

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="header">
                <div className="flex justify-space-between align-center header--container">
                    <div className="header--title flex align-center">
                        <img src={mooseIcon} alt="cpIcon" className="header--icon" />
                        <span className="brown-color">Knuckle</span>Panel
                    </div>
                    <div>{minusSquare}</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
