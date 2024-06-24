import React from 'react';
import Header from '../components/header/Header';
import Title from '../components/title/Title';
import Table from '../components/table/Table';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />  
            <Title />
            <Table />
        </>
    );
};

export default HomePage;