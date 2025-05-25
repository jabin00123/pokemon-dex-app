import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';
import Detail from '../pages/Detail';


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail/:id" element={<Detail />} />

      </Routes>
    </div>
  );
};

export default Router;
