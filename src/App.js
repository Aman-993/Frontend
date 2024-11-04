
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
 import Page from './components/Pages/Page'; 
import './App.css'; 

const App = () => {
  return (
    
    <div className="app-container">
      <Header />

      <div className="content-container">
        <Sidebar />
        <Page/>
      </div>
    </div>
    
  );
};

export default App;
