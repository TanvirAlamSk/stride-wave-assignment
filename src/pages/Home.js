import React, { useContext } from 'react';
import HomeCarosel from '../components/home/HomeCarosel';
import Status from '../components/home/status/Status';
import HomeCaroselCard from '../components/home/HomeCaroselCard';
import LatestRecipe from '../components/home/LatestRecipe/LatestRecipe';
// import Teams from '../components/home/Teams/Teamsj';
import HomeAccrdion from '../components/home/Accordion/HomeAccrdion';
import Teams from '../components/home/Teams/Teams';
import { authContext } from '../context/Authprovider';
import Faq1 from '../components/home/Accordion/Faq1';
import JoinAsChef from '../components/home/JoinAsChef/JoinAsChef';

const Home = () => {
    const { user } = useContext(authContext)
    return (
        <div>
            <HomeCarosel></HomeCarosel>
            <Status></Status>
            <LatestRecipe></LatestRecipe>
            <Teams></Teams>
            <JoinAsChef></JoinAsChef>
            <Faq1></Faq1>
        </div>
    );
};

export default Home;