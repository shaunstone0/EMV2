import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import Card from '../Card/Card';

/*
 * this component has multiple styles that can be implemented.
 * Uses the @fortAwesome to display Icons.
 * proptype type: user, newUser or Article (more can be added in StatisticCard.scss)
 * proptype icon: the icon that is being used for the statcard (user, ect.) if no icon -> icon={false}. DEFAULT TRUE
 *
 *  */

const getIcon = (iconName) => {
    return <FontAwesomeIcon icon={iconName.toString()} />;
};

const StatisticCard = ({ type, icon, iconName, size, title, subText, number }) => {
    return (
        <>
            <Card fullWidth={false} className={`statistic-container__${size}`}>
                <div className="flex justify-space-between align-center">
                    <div className="flex align-center justify-space-center">
                        {icon ? (
                            <div
                                className={`statistic-container__icon statistic-container__icon--${type} flex align-center justify-space-center`}>
                                {getIcon(iconName)}
                            </div>
                        ) : (
                            <></>
                        )}
                        <div>
                            <div className="bold">{title}</div>
                            <div className="faded-text">{subText}</div>
                        </div>
                    </div>
                    <div className="statistic-container__number bold">{number}</div>
                    {/* TODO: Make Number Dynamic */}
                </div>
            </Card>
        </>
    );
};

StatisticCard.defaultProps = {
    type: 'user',
    iconName: 'user',
    size: '100%',
    title: '',
    subText: '',
    number: '',
    icon: true
};

StatisticCard.propTypes = {
    type: PropTypes.string,
    iconName: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    subText: PropTypes.string,
    number: PropTypes.number,
    icon: PropTypes.bool
};

export default StatisticCard;
