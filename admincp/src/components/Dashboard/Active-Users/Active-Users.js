import React from 'react';

import Card from '../../Shared/Card/Card';
// import ActiveUsersTable from './Active-User-Table/Active-User-Table';

const ActiveUsers = () => {
    return (
        <div className="active-users-container">
            <Card
                className="active-users-container__card"
                header={true}
                headerTitle="Active Users"
                iconName="users">
                {/* <ActiveUsersTable /> */}
            </Card>
        </div>
    );
};

export default ActiveUsers;
