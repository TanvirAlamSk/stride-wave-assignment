import React from 'react';
import HomeCarosel from '../components/home/HomeCarosel';
import Status from '../components/home/status/Status';
import HomeCaroselCard from '../components/home/HomeCaroselCard';
import LatestRecipe from '../components/home/LatestRecipe/LatestRecipe';
// import Teams from '../components/home/Teams/Teamsj';
import HomeAccrdion from '../components/home/Accordion/HomeAccrdion';
import Teams from '../components/home/Teams/Teams';

const Home = () => {
    return (
        <div>
            <HomeCarosel></HomeCarosel>
            <Status></Status>
            <LatestRecipe></LatestRecipe>
            <Teams></Teams>
            <HomeAccrdion></HomeAccrdion>
        </div>
    );
};

export default Home;