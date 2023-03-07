import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import About from './About';
import Mentors from './Mentors';
import Alumni from './Alumni';
import Summer22 from './Summer22';
import ErrorPage from './ErrorPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mentors" element={<Mentors />} />
        <Route path="alumni" element={<Alumni />} />
        <Route path="summer'22" element={<Summer22 />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
