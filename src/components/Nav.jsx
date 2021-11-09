import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import SearchBar from './SearchBar.jsx';



function Nav({onSearch}) {
  return (
    <nav class="containerDiv navbar navbar-expand-lg navbar navbar-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <Link to='/'>
  <a class="navbar-brand" href="/">
    <img src="../wizard-woman.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
    Wizard Weather
  </a>
  </Link>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01"> 
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link to='/about' class="nav-link"><a class="nav-link" href="./about">About <span class="sr-only">(current)</span></a></Link>
      </li>
      <li class="nav-item">
        <Link to='/forms'class='nav-link'><a class="nav-link" href="./forms">Login</a></Link>
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0">
      <SearchBar
          onSearch = {onSearch}
      />
    </div>
  </div>
</nav>


    // <nav class="containerDiv navbar navbar-dark  navbar-toggleable-sm ">
    //   <div class='navbar-nav div1'>
    //   <Link class='navbar-brand' to='/'>
    //   <div class="div1">        
    //   <a class='navbar-brand' href='/'><img src="../wizard-woman.png"  alt="Weather wizard App" /> Wizard Weather</a>
    //   </div>       
    //   </Link> 
    //   <Link className='nav-item nav-link' to='/about'><a class='nav-item nav-link' href='/about'>About</a> </Link> 
    //   <Link className='nav-item nav-link'to='/forms'><a class='nav-item nav-link' href='/forms'>Log In</a></Link>    
    //   </div>   
    //   <div class="searchBar">
    //     <SearchBar
    //       onSearch = {onSearch}
    //     />
    //   </div> 
    // </nav>
  );
};

export default Nav;
