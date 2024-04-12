import React from "react"
import HelloWorld from "./HelloWorld"
import { Link} from "react-router-dom"
import ListPost from "./ListPost"
import { SignOut } from "./Index"


const Home = () => {
  const userId = localStorage.getItem("currentUserId")
  return (
    Number(userId) ? <div className="container">
    <header className="d-flex justify-content-end">
      <SignOut/>
    </header>
    <HelloWorld greeting={"umesh is here"} />
     <br/>
      <Link to="/Addpost" className="btn btn-success mt-3">Create Post</Link>
    <ListPost className="mt-3"/>
  </div> 
  : 
  <div className="container">
    <Link to="/users/sign_in" className="btn btn-primary mt-3">Sign In</Link>
    <Link to="/users/sign_up" className="btn btn-secondary mt-3 ml-3">Sign Up</Link>
  </div>
  )
}
export default Home
