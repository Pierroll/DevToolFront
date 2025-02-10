import React from 'react';
import Hero from '../components/Common/Hero';
import PopularTools from '../components/Explorer/PopularTools';
import RecentTools from '../components/Tool/RecentTools';  // ✅ Importar componente reciente

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularTools />
            <RecentTools />
        </div>
    );
};

export default Home;
