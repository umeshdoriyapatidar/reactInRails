import React from "react"
import PropTypes from "prop-types"

const HelloWorld = (props) => {
  return (
    <React.Fragment>
       Umesh is Greeting: {props.greeting}
    </React.Fragment>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
