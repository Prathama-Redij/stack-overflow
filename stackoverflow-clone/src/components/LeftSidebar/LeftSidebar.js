import React from 'react'
import './LeftSidebar.css';
import { NavLink } from "react-router-dom";
import Globe from '../../assets/Globe.svg';


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
          <nav className='side-nav'>
          <NavLink to='/' className='side-nav-links' activeClassName="active">
            <p>Home</p>
          </NavLink>
        <div className='side-nav-div'>
          <div>PUBLIC</div>

          <NavLink to='/Questions' className='side-nav-links' activeClassName="active" style={{paddingLeft: "20px"}}>
            <img src={Globe} alt='Globe' style={{width: "20px", height: "20px"}} />
            <p style={{paddingLeft: "10px"}}>Questions</p>
          </NavLink>

          <NavLink to='/Tags' className='side-nav-links' activeClassName="active" style={{paddingLeft: "50px"}}>
            <p>Tags</p>
          </NavLink>

          <NavLink to='/Users' className='side-nav-links' activeClassName="active" style={{paddingLeft: "50px"}}>
            <p>Users</p>
          </NavLink>
        </div>

  </nav>
    </div>
  )
}

export default LeftSidebar
