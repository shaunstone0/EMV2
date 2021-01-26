import React from 'react';

import StatisticCard from '../../Shared/StatisticCard/StatisticCard';

const Main = () => {
    return (
        <div className="statistic-container flex flex-wrap">
            <StatisticCard
                type="user"
                iconName="user"
                size="w-31"
                title="Total Registered Users"
                subText="Total Users On Emboldened Moose"
                number="1,000"
                icon={true}
            />
            <StatisticCard
                type="newUser"
                iconName="user-plus"
                size="w-31"
                title="New Users"
                subText="Total New Users this Month"
                number="1,000"
                icon={true}
            />
            <StatisticCard
                type="articles"
                iconName="newspaper"
                size="w-31"
                title="Total Articles"
                subText="Total Articles Posted"
                number="1,000"
                icon={true}
            />
        </div>
    );
};

export default Main;
