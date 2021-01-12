import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
