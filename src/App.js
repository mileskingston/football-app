import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './components/Routes/Routes';

const App = () => (
  <div className="app">
    <Header />
    <main className="container">
      <Routes />
    </main>
  </div>
);

export default App;
