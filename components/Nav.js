import React, { useEffect } from 'react'
import "./Nav.css"
import {BsFire} from "react-icons/bs"
import {MdLocalMovies} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {FiMonitor} from "react-icons/fi"
import { Link } from 'react-router-dom'




const Nav = () => {

  useEffect(()=>{
    window.scroll(0, 0);
    // fetchTrending();
  },[])
  return (
    <div className='nav1'>
      <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
      <Link className="nav-link active" to="/">
      <BsFire />  Trending</Link></button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
    <Link className="nav-link " to="/movies">
      <MdLocalMovies/>  Movies</Link></button>
    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
    <Link className="nav-link " to="/series">
      <FiMonitor/>  TV Series</Link></button>
    <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" >
    <Link className="nav-link " to="/search">
       <BsSearch/> Search</Link></button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"></div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"></div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0"></div>
  <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0"></div>
</div>
    </div>
  )
}

export default Nav
