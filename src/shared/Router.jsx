import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../Pages/Dex';
import Detail from '../Pages/Detail';


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