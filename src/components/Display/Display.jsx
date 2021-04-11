// React
import React from 'react'

// Libraries
import PropTypes from 'prop-types'

// CSS
import './Display.css'

// Functional component
const Display = ({ text, result }) => (
    <section className="c-display">
        <div className="c-display__text">{text}</div>
        <div className="c-display__result">{result}.</div>
    </section>
)

// Property types
Display.propTypes = {
    text: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired
}

export default Display
