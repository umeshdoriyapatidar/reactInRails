import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, NotFound, SignIn, SignOut, SignUp} from './Index.js';

const App = (props) => {
  return (
    <React.Fragment>
     {console.log(props)}
     <h1> This is Something I am missing {props.user}</h1>
     
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_out" element={<SignOut />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
