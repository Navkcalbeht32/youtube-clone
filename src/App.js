import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import MicroSidebar from './components/Sidebar/MicroSidebar/MicroSidebar.component';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage.component';

function App() {
  return (
    <div className="App">
      <Router>
       
        <Header />
        <MicroSidebar />
        
        <Switch>
          <Route exact path='/'>
            <div className="app-page">
              <RecommendedVideos />
            </div>
          </Route>

          <Route path='/search/:searchTerm'>
            <SearchPage />
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
