import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';

import Converter from './Converter';
import Currencies from './Currencies';

import classes from './App.module.scss';

const App: React.FC = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default App;
