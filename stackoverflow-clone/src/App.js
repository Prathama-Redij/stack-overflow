import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, useActionData } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AllRoutes from './AllRoutes';
import { formToJSON } from 'axios';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users'



function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])
  return (
    <div className="App">
    <Navbar />


    <AllRoutes />
   {/* <Routes>
   <Route path="/" element= {<div>I am Home page</div>}/>

   <Route path="/auth" element={<div>I am auth page</div>}/>
   </Routes> */}
    
    </div>
  );
}

export default App;
