import React from 'react';

import PageUnderConstruction from '../ui/PageUnderConstruction';
import TeamLandingPage from '../components/team/TeamLandingPage';
import { container } from '../styles/styles';

const Team = () => {
    return (
        <div className={`${container} mt-[130px]`}>
            <TeamLandingPage/>
        </div>
    );
};

export default Team;