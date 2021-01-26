import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Container from '../Shared/Container/Container';
import Sidebar from '../Sidebar/Sidebar';

library.add(fas);

const header = 'Emboldened Moose';

function App() {
    return (
        <Container fullWidth={true}>
            <div className="flex">
                <div className="container__side-bar">
                    <Sidebar header={header} />
                </div>

                <div className="container__main-content">
                    <Header />
                    <Dashboard />
                </div>
            </div>
        </Container>
    );
}

export default App;
