import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const Card = ({ className, children, fullWidth = true, header = false, headerTitle, iconName }) => {
    const icon = <FontAwesomeIcon icon={iconName} />;
    return (
        <div className={`flex flex-column card ${className}`}>
            {header ? (
                <div className="card__header flex">
                    <div className="card__icon"> {icon} </div>
                    {headerTitle}
                </div>
            ) : (
                <></>
            )}
            <div>
                <div>{children}</div>
            </div>
        </div>
    );
};

Card.defaultProps = {
    className: '',
    fullWidth: true,
    header: false,
    headerTitle: '',
    iconName: ''
};

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    fullWidth: PropTypes.bool,
    header: PropTypes.bool,
    headerTitle: PropTypes.string,
    iconName: PropTypes.string
};

export default Card;
