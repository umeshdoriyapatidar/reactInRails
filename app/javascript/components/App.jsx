import React, { useState , useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, NotFound, SignIn, SignOut, SignUp, AddPost, ListPost} from './Index.js';


const App = (props) => {
  if(props){
    console.log(props.id);
    localStorage.setItem('currentUserId', props.id)
  }
  return (
    <React.Fragment>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users/sign_in" element={<SignIn />} />
        <Route path="/users/sign_up" element={<SignUp />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path='/posts' element={<ListPost />}/>
        <Route element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
