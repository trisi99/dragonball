

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { FetchContext, RenderDataContext, SecFetchContext } from './components/Context';
import Fetch from './data/Fetch';
import SecFetch from './components/SecFetch';
import './App.scss';
import Detail from './pages/Detail';

function App() {
  const [data, setData] = useState([]);
  const [SecData, setSecData] = useState([]);
  const [renderData, setRenderData] = useState([]);

  

  return (
    <div className="app-container">
      <div className="stars">
        
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
      <FetchContext.Provider value={{ data, setData }}>
        <SecFetchContext.Provider value={{ SecData, setSecData }}>
          <RenderDataContext.Provider value={{ renderData, setRenderData }}>
            <Fetch />
            <SecFetch />
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </RenderDataContext.Provider>
        </SecFetchContext.Provider>
      </FetchContext.Provider>
    </div>
  );
}

export default App;
