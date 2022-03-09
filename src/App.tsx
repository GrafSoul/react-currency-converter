import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';

import Converter from './Converter/Converter';
import Currencies from './Currencies/Currencies';

import classes from './App.module.scss';

const App: React.FC = () => {
    return (
        <div className={classes.container}>
            <Header />

            <main className={classes.content}>
                <Routes>
                    <Route path="/" element={<Currencies />} />
                    <Route path="/converter" element={<Converter />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default App;
