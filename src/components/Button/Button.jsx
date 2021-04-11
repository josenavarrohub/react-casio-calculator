// React
import React from 'react'

// Libraries
import PropTypes from 'prop-types'

// CSS
import './Button.css'

// Functional component
const Button = ({ text, title, onClickHandler }) => (
    <button className="c-button" title={title} onClick={() => onClickHandler(text) }>
        {text}
    </button>
)

// Property types
Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired
}

export default Button
