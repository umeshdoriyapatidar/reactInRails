import React, { useEffect } from "react"
import HelloWorld from "./HelloWorld"
import { Link, useLocation} from "react-router-dom"
import ListPost from "./ListPost"
import { SignIn, SignOut } from "./Index"

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (document.referrer.includes('/users/sign_up')) {
      location.reload();
    }
  }, [location]);
  const userId = localStorage.getItem("currentUserId")
  return (
    Number(userId) ? <div className="container">
    <header className="d-flex justify-content-end">
      <SignOut/>
    </header>
     <br/>
      <Link to="/Addpost" className="btn btn-success mt-3">Create Post</Link>
    <ListPost className="mt-3"/>
  </div> 
  : 
  <div className="container">
  <HelloWorld greeting={"!"} />
    <h1> Hey Unkown! For Add Post Please SignUp or SingIn </h1>
    <Link to="/users/sign_in" className="btn btn-primary mt-3">Sign In</Link>
    <Link to="/users/sign_up" className="btn btn-secondary mt-3 ml-3">Sign Up</Link>
  </div>
  )
}
export default Home
