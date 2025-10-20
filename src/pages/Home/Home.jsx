import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import Cardstat from '../../components/Cardstat/Cardstat';

import BestApps from '../BestApps/BestApp';



const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Cardstat></Cardstat>
            <BestApps data={data}></BestApps>
        </div>
    );
};

export default Home;