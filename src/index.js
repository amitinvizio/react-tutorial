import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

ReactDOM.render(
  <>
    <Navigation />
    <Header />
  </>,
  document.getElementById('root')
);

