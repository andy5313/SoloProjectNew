import { BrowserRouter as Router, Link, Route, Routes }  from "react-router-dom";
import BooksComponent from "./components/BooksComponent";
import MoviesComponent from "./components/MoviesComponent";
import GamesComponent from "./components/GamesComponent";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm'
import SignUpForm from "./components/SignUpForm";
import useToken from './useToken';
 
function App() {
  
  const { token, setToken, removeToken } = useToken();

  if (!token) {
    return(
      <Router>
        <Routes>
        <Route exact path='/signup' element={<SignUpForm /> } />
        <Route exact path='/login' element={<LoginForm setToken={setToken} /> } />
        </Routes>
      </Router>
    ) 
  }

  return (

    <div>
        <Router>
          <Navbar removeToken={removeToken} />
              <Routes>
                  <Route path="/" exact element={<BooksComponent />} />
                  <Route path="/books" exact element={<BooksComponent />} />
                  <Route path="/movies" exact element={<MoviesComponent />} />
                  <Route path="/games" exact element={<GamesComponent />} />
              </Routes>
        </Router>
        
    
      </div>
    
  );
}

export default App;
