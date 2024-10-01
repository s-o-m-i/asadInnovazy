import React, { useEffect } from 'react';
import TeamLandingPage from '../components/team/TeamLandingPage';
import { container } from '../styles/styles';


const Team = () => {
    
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    },[])
    return (
        <div className={`${container} mt-[130px]`}>
            <TeamLandingPage/>
        </div>
    );
};

export default Team;