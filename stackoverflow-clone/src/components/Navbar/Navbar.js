import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/logo1.png';
import search  from '../../assets/search.svg';
import './Navbar.css';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { setCurrentUSer } from '../../actions/currentUser';
import decode from 'jwt-decode'

const Navbar = () => {
  const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleLogOut = () => {
      dispatch({type: 'LOGOUT'});
      navigate('/')
      dispatch(setCurrentUSer(null))
    }

  useEffect(() => {
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogOut()
      }
    }
    dispatch(setCurrentUSer( JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])

  
  return (
    <nav className='main-nav'>
      <div className='navbar'>
      <Link to='/' className='nav-item nav-logo'>   
       <img src={logo} className='logo' alt='logo' />
       </Link>

       <Link to='/about' className='nav-item nav-btn'>About</Link>
       <Link to='/products' className='nav-item nav-btn'>Our Products</Link>
       <Link to='/teams' className='nav-item nav-btn'>For Teams</Link>
      <form action=''>
      <input type='text' placeholder='Search'/>
      <img src={search} alt='search' className='icon' width='18' />

      </form>
      {User === null ?
        <Link to='/Auth' className='nav-item nav-link'>Log In</Link>:
       <>
       <Avatar backgroundColor='#009dff' px='7px' py='7px' borderRadius='40%' color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration: "none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
        
        <button className='nav-item nav-link' onClick={handleLogOut}>Log Out</button>
        </>
      
      }
      </div>
    </nav>
  )
}

export default Navbar
