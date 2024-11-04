
import React from 'react';
import Header from './components/Pages/Header';
import Sidebar from './components/Pages/Sidebar';
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
