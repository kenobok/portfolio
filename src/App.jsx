import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import MainContent from './components/MainContent';
import NotFound from './pages/NotFound';
import $ from 'jquery';
import './assets/js/scripts.js';
import './App.css';

const App = () => {
    return (
        <div className="perspective effect-rotate-left">
            <div className="container-fluid px-0">
                <div className="outer-nav--return"></div>
                <div id="viewport" className="l-viewport">
                <div className="l-wrapper">
                    <Header />
                    <SideNav />
                    <MainContent />
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
