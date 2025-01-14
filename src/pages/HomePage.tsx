import React from 'react';
import Header from '../components/header/Header';
import Title from '../components/title/Title';
import Feed from '../components/feed/Feed';



const HomePage: React.FC = () => {
    
    
    

    return (
        <>
            <Header />
            <Title />
            <div className="space-box"></div>
            <Feed />
        </>
    );
};

export default HomePage;
