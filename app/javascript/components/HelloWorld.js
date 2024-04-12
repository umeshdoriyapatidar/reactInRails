import React from "react"
import PropTypes from "prop-types"

const HelloWorld = (props) => {
  return (
    <React.Fragment>
      Reload once after singup: {props.greeting}
    </React.Fragment>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
