import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const bell = <FontAwesomeIcon icon="bell" size="lg" className="notification-bell" />;

const Header = () => {
    return (
        <div className="flex justify-space-between">
            <div className="container__main-content--header">
                <h3>Emboldened Moose Control Panel</h3>
                <p className="container__main-content--sub-text faded-text">
                    A Control Panel for Admin and Publishers
                </p>
            </div>
            <div className="container__main-content--user-area flex align-center">
                {bell}
                <div>user</div>
            </div>
        </div>
    );
};

export default Header;
