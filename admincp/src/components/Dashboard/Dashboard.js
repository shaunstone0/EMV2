import React from 'react';

import ActiveUsers from './Active-Users/Active-Users';
import Main from './Main/Main';

const Dashboard = () => {
    return (
        <div>
            <Main />
            <ActiveUsers />
        </div>
    );
};

export default Dashboard;
