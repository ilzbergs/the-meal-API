/* eslint-disable react/jsx-no-undef */

import {
  BrowserRouter,
  Route,
  Routes,
 
}
  from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';

import HomePage from './pages/HomePage';
import { createGlobalStyle } from 'styled-components';
import AllMeals from './pages/AllMeals';
import Meal from "./pages/Meal";
import Search from "./pages/Search";






const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
}
  
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: sans-serif;
    color: #112D4E;
  }
`

function App() {
  return (
    <>


      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<AllMeals />} />
          <Route path="/meal/:mealName" element={<Meal/>} />
          <Route path="/search" element={<Search/>} />
        

        </Routes>
      </BrowserRouter>


    </>

  );
}


export default App;
