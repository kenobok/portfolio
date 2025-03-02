import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import $ from 'jquery';
import './assets/js/scripts.js';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<MainContent />} />
            </Routes>
        </Router>
    );
};

export default App;
