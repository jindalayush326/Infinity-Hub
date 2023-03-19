import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header'
import Nav from './components/Nav'
import Trending from './pages/Trending'
import Search from './pages/Search'
import Series from './pages/Series'
import Movies from './pages/Movies'

const App = () => {
  return (
    <Router>
          <Header/>
          <Nav/>
    <div className='app'> 
   <div className="container">
    <Routes>
      <Route path="/" element={<Trending/>}  />
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/series" element={<Series/>}/>
      <Route path="/search" element={<Search/>}/>
    </Routes>
   </div>
     </div>
    </Router>
  )
}

export default App
