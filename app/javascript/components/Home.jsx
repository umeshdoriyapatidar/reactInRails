import React from "react"
import HelloWorld from "./HelloWorld"
import { Link} from "react-router-dom"

const Home = (props) => {
  return (
    <div>
      <HelloWorld greeting={"umesh is here"} />
      <Link to="/sign_in">Sign In</Link>
      <Link to="/sign_up">Sign Up</Link>
      <Link to="/sign_out">Sign Out</Link>
    </div>
  )
}
export default Home
